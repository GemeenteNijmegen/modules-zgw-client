import * as fs from 'fs/promises';
import * as path from 'path';
import { ClientGenerator } from './ClientGenerator';
import { GenerateClientConfiguration, generateClientConfigurations } from './GenerateClientConfiguration';
import { ScanGeneratedFolders } from './ScanGeneratedFolders';
import { VersionScanner, VersionInfo } from './VersionScanner';

export class GenerateNewClients {
  private readonly clientConfigs: GenerateClientConfiguration[];
  private readonly scanner: ScanGeneratedFolders;
  private readonly projectSrcPath: string;

  constructor(clientConfigs: GenerateClientConfiguration[] = generateClientConfigurations) {
    this.clientConfigs = clientConfigs;
    this.scanner = new ScanGeneratedFolders();
    this.projectSrcPath = path.resolve(process.cwd(), 'src');
  }

  /**
     * Main function to generate missing clients.
     */
  public async generateClients() {
    for (const config of this.clientConfigs) {
      console.log(`Checking versions for client: ${config.name}`);
      const availableVersions = await this.fetchRemoteVersions(config);
      const existingVersions = this.getLocalVersions(config);
      const newVersions = this.findNewVersions(availableVersions, existingVersions, config);
      await this.generateMissingClients(config, newVersions);

      // Update the latest version in the index
      await this.updateLatestVersion(config);
    }
  }

  /**
     * Fetch available versions from GitHub for the given client.
     */
  private async fetchRemoteVersions(config: GenerateClientConfiguration): Promise<VersionInfo[]> {
    const versionScanner = new VersionScanner({
      subdirectory: config.repoSubdirectory,
    });
    const versions = await versionScanner.fetchSpecificVersions();
    console.log(`Found ${versions.length} versions in GitHub for ${config.name}`);
    return versions;
  }

  /**
     * Get already existing versions in the local project.
     */
  private getLocalVersions(config: GenerateClientConfiguration): string[] {
    const scanResult = this.scanner.scan([config]);
    const versions = scanResult[0]?.folderVersions || [];
    console.log(`Found existing versions locally for ${config.name}: ${versions.join(', ')}`);
    return versions;
  }

  /**
     * Determine which versions need to be generated.
     */
  private findNewVersions(
    availableVersions: VersionInfo[],
    existingVersions: string[],
    config: GenerateClientConfiguration, // Toegevoegd om toegang te krijgen tot `oldestVersion`
  ): VersionInfo[] {
    if (!config.oldestVersion) {
      // Als geen oudste versie is opgegeven, filter alleen bestaande versies eruit
      return availableVersions.filter(version => !existingVersions.includes(version.version));
    }

    const oldestVersion: string = config.oldestVersion; // Ensures TypeScript sees this as a string

    // Filter alle versies die ouder zijn dan `config.oldestVersion`
    return availableVersions.filter(version =>
      !existingVersions.includes(version.version) &&
        this.isVersionGreaterOrEqual(version.version, oldestVersion), // Alleen versies >= oldestVersion
    );
  }
  /**
   * Helper: Compare semantic version strings (e.g., "1.3.0" >= "1.2.1").
   */
  private isVersionGreaterOrEqual(version: string, minVersion: string): boolean {
    const [majorV, minorV, patchV] = version.split('.').map(Number);
    const [majorM, minorM, patchM] = minVersion.split('.').map(Number);

    return (
      majorV > majorM ||
        (majorV === majorM && minorV > minorM) ||
        (majorV === majorM && minorV === minorM && patchV >= patchM)
    );
  }

  /**
     * Generate missing versions by creating folders and downloading OpenAPI specifications.
     */
  private async generateMissingClients(config: GenerateClientConfiguration, newVersions: VersionInfo[]) {
    if (newVersions.length === 0) {
      console.log(`No new versions to generate for ${config.name}`);
      return;
    }

    console.log(`Generating new versions for ${config.name}: ${newVersions.map(v => v.version).join(', ')}`);
    for (const version of newVersions) {
      const versionPath = this.getVersionPath(config, version.version);
      const { openApiPath } = await this.createVersionFolderWithYaml(config, version, versionPath);
      const clientGenerator = new ClientGenerator();
      try {
        console.log(`TEST: should call clientgenerator after this for: ${version}`);
        await clientGenerator.generateClient(openApiPath, versionPath);
      } catch (error: any) {
        const errorMessage = `ClientGenerator failed for ${config.name} ${version.version} - OpenAPI Path: ${openApiPath}`;
        console.error(errorMessage);
        error.message = `${errorMessage} | ${error.message}`;
        throw error;
      }
    }
  }

  /**
     * Create a version folder and download the OpenAPI YAML file.
     */
  private async createVersionFolderWithYaml(config: GenerateClientConfiguration, version: VersionInfo, versionPath: string) {
    try {
      await fs.mkdir(versionPath, { recursive: true });
      console.log(`Created folder: ${versionPath}`);

      const openApiPath = path.join(versionPath, 'openapi.yaml');
      await this.downloadFile(version.download_url, openApiPath);
      const fileExists = await this.fileHasContent(openApiPath);
      if (!fileExists) {
        const fileError = `OpenAPI file is empty or missing: ${openApiPath} - ${config.name}`;
        console.error(fileError);
        throw new Error(fileError);
      }

      console.log(`OpenAPI YAML saved for ${config.name} v${version.version}`);
      return { openApiPath };
    } catch (error: any) {
      const createError = `Error creating version folder ${config.folderName} - ${config.repoSubdirectory}: ${error}`;
      console.error(createError);
      throw new Error(createError);
    }
  }

  /**
     * Download the OpenAPI specification from GitHub.
     */
  private async downloadFile(url: string, destination: string) {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to download file: ${response.statusText}`);
      }

      const content = await response.text();
      await fs.writeFile(destination, content, 'utf-8');
    } catch (error) {
      console.error(`Error downloading file from ${url}:`, error);
    }
  }

  /**
     * Check if a file exists and contains data.
     */
  private async fileHasContent(filePath: string): Promise<boolean> {
    try {
      const stats = await fs.stat(filePath);
      return stats.size > 0;
    } catch (error) {
      return false; // File does not exist or has no content
    }
  }

  /**
     * Get the path for a specific version folder.
     */
  private getVersionPath(config: GenerateClientConfiguration, version: string): string {
    return path.join(this.projectSrcPath, config.folderName, version);
  }

  /**
     * Get the latest version from a list of version folders.
     */
  private getLatestVersion(versions: string[]): string {
    return versions.sort((a, b) => {
      const [majorA, minorA, patchA] = a.split('.').map(Number);
      const [majorB, minorB, patchB] = b.split('.').map(Number);
      return majorB - majorA || minorB - minorA || patchB - patchA;
    })[0];
  }

  private async updateLatestVersion(config: GenerateClientConfiguration) {
    try {
      const clientFolderPath = path.join(this.projectSrcPath, config.folderName);
      const versionFolders = await fs.readdir(clientFolderPath);

      // Filter only valid version folders
      const validVersions = versionFolders.filter(folder => /^\d+\.\d+\.\d+$/.test(folder));

      if (validVersions.length === 0) {
        console.warn(`No valid versions found for ${config.name}`);
        return;
      }

      // Get the latest version
      const latestVersion = this.getLatestVersion(validVersions);
      console.log(`Latest version for ${config.name}: ${latestVersion}`);

      // Create or update the `index.ts` file
      const indexPath = path.join(clientFolderPath, 'index.ts');
      const indexContent = [
        ...validVersions.map(version => `export * as v${version.replace(/\./g, '_')} from './${version}';`),
        `export * from './${latestVersion}'; // Latest version`,
      ].join('\n');

      await fs.writeFile(indexPath, indexContent, 'utf8');
      console.log(`Updated index.ts for ${config.name} at ${indexPath}`);
    } catch (error: any) {
      console.error(`Failed to update latest version for ${config.name}: ${error.message}`);
    }
  }
}
