import fs from 'node:fs';
import path from 'path';
import { generateApi, GenerateApiParams } from 'swagger-typescript-api';


export class ClientGenerator {
  /**
   * Generates TypeScript types and an API client from OpenAPI YAML and saves them to the specified path.
   *
   * @param openApiPath - Path to the OpenAPI YAML file.
   * @param versionPath - Path to the directory where the generated types and API client should be saved.
   */
  public async generateClient(openApiPath: string, versionPath: string): Promise<void> {
    if (!openApiPath || !versionPath) {
      throw new Error(
        `[ClientGenerator] Invalid OpenAPI path or version path: ${openApiPath}, ${versionPath}`,
      );
    }

    try {
      // Generate API client using swagger-typescript-api
      const apiOutputPath = path.resolve(versionPath, 'api');
      const generateApiParams: GenerateApiParams = {
        name: 'api.ts',
        output: apiOutputPath,
        input: openApiPath,
        httpClientType: 'axios', // fetch does not generate as expected
        modular: true,
        singleHttpClient: true,
        extractRequestParams: true,
        extractResponseBody: true,
        generateRouteTypes: true,
        prettier: { tabWidth: 2 },
      };
      // Hier kan in de toekomst eventueel nog een paginated results helper worden toegevoegd met een onCreateRoute hook
      // https://github.com/acacode/swagger-typescript-api/blob/d90a21d8287c7d428c7b8fa8d3761b6414afeb83/README.md?plain=1#L162
      // Met de (routeData) kan misschien het responseschema bekeken worden op next, of results[]

      await generateApi(generateApiParams);

      // Generate index.ts for the API folder
      const apiIndexPath = path.join(apiOutputPath, 'index.ts');
      const apiFiles = await fs.promises.readdir(apiOutputPath);

      const memberMap = new Map<string, string>();

      let apiExports = '';

      for (const file of apiFiles) {
        if (file.endsWith('.ts') && file !== 'index.ts') {
          const moduleName = file.replace('.ts', '');
          const filePath = `./${moduleName}`;
          // data-contracts cannot be used in index due to format
          const formattedModuleName = this.toFormattedName(moduleName);

          // Read file content to check for duplicate member exports
          const fileContent = await fs.promises.readFile(path.join(apiOutputPath, file), 'utf8');
          const matches =
            fileContent.match(/export\s+(?:class|interface|type|const|let|function|enum)\s+(\w+)/g) || [];

          const memberExports = matches.map((match) => match.split(' ')[2]); // Extract member names

          for (const member of memberExports) {
            if (memberMap.has(member)) {
              // Conflict detected, alias the export with proper format
              // For example: two files have Gebruiksrechten export which conflicts without alias in index
              const alias = `${member}${formattedModuleName}`;
              apiExports += `export { ${member} as ${alias} } from '${filePath}';\n`;
            } else {
              // No conflict, export normally
              memberMap.set(member, moduleName);
              apiExports += `export { ${member} } from '${filePath}';\n`;
            }
          }
        }
      }
      // Write the generated api exports to the index.ts file
      await fs.promises.writeFile(apiIndexPath, apiExports, 'utf8');

      // Generate main index file
      const indexFileContent = `
        export * from './api';
      `;
      const indexOutputPath = path.join(versionPath, 'index.ts');
      fs.writeFileSync(indexOutputPath, indexFileContent, 'utf8');

      console.log(`Successfully generated types and API client at: ${versionPath}`);
    } catch (error: any) {
      console.error(`Failed to generate TypeScript types and API client: ${error.message}`);
      throw error;
    }
  }
  /**
 * Makes sure type names are formatted without hyphens
 * Type names with hyphens in index.ts will not work
 * @param input
 * @returns
 */
  toFormattedName(input: string): string {
    return input
      .split(/[-_\s]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
}