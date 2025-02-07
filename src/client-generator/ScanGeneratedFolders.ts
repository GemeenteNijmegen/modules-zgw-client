import * as fs from 'fs';
import * as path from 'path';
import { GenerateClientConfiguration } from './GenerateClientConfiguration';

/**
 * Options for scanning generated folders.
 * Add additional options if needed in the future.
 */
export interface ScanGeneratedFoldersOptions {}

/**
 * Extended interface for generated client configurations with folder versions.
 */
export interface GeneratedClientConfigs extends GenerateClientConfiguration {
  /**
   * List of folder versions (e.g., ['1.3.1', '1.4.0']) found in the generated client's folder.
   */
  folderVersions: string[];
}

/**
 * This class scans the current repository for generated client folders.
 * It searches the `/src` directory (from the root of the project) for folders matching the names defined in
 * `generateClientConfigurations` and retrieves subfolder names that represent versions (e.g., '1.3.1').
 */
export class ScanGeneratedFolders {
  private rootPath: string;
  private srcPath: string;

  /**
   * Constructor for the ScanGeneratedFolders class.
   */
  constructor() {
    // Dynamically resolve the root of the project and set the `src` path
    this.rootPath = process.cwd(); // Get the current working directory
    this.srcPath = path.join(this.rootPath, 'src');
    console.log(`Folder: ${this.srcPath}`);

    // Extra logging for debugging
    const dirPath = path.join(process.cwd(), 'src', 'catalogi-generated-client');
    console.log(`Checking: ${dirPath}`);
    console.log(`Exists: ${this.directoryExists(dirPath)}`);
  }

  /**
   * Checks if a directory exists.
   *
   * @param dirPath - Path to the directory.
   * @returns True if the directory exists, false otherwise.
   */
  private directoryExists(dirPath: string): boolean {
    try {
      return fs.statSync(dirPath).isDirectory();
    } catch (error:any) {
      if (error.code === 'ENOENT') {
        return false; // Directory does not exist
      }
      throw error; // Re-throw other errors
    }
  }

  /**
   * Scans a folder for subdirectories that match version patterns (e.g., '1.3.1').
   *
   * @param folderPath - The path to the folder to scan.
   * @returns An array of version folder names.
   */
  private getVersionFolders(folderPath: string): string[] {
    console.log(`${folderPath} - exists? ${this.directoryExists(folderPath)}`);
    if (!this.directoryExists(folderPath)) {
      return [];
    }

    console.log(`[DEBUG] Scanning folder: ${folderPath}`);
    try {
      const entries = fs.readdirSync(folderPath);
      console.log(`[DEBUG] Entries in folder: ${entries}`);

      return entries.filter((item) => {
        const fullPath = path.join(folderPath, item);
        const isVersionDir =
          fs.statSync(fullPath).isDirectory() && /^\d+\.\d+\.\d+$/.test(item);

        if (isVersionDir) {
          console.log(`[DEBUG] Found version folder: ${item}`);
        }

        return isVersionDir;
      });
    } catch (error) {
      console.error(`[ERROR] Failed to read folder: ${folderPath}`, error);
      return [];
    }
  }

  /**
   * Scans the `/src` directory for generated client folders and retrieves their version subdirectories.
   *
   * @param configs - Array of GenerateClientConfiguration objects to scan for.
   * @returns An array of GeneratedClientConfigs with folder versions populated.
   */
  public scan(configs: GenerateClientConfiguration[]): GeneratedClientConfigs[] {
    return configs.map((config) => {
      const folderPath = path.join(this.srcPath, config.folderName); // Always start from `src` under project root
      const folderVersions = this.getVersionFolders(folderPath);

      return {
        ...config,
        folderVersions,
      };
    });
  }
}