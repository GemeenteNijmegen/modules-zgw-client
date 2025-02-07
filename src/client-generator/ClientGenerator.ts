import fs from 'node:fs';
import path from 'path';
import openapiTS, { astToString } from 'openapi-typescript';
import { generateApi } from 'swagger-typescript-api';


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
      // Generate TypeScript types with openapi-typescript
      const openApiContent = fs.readFileSync(openApiPath, 'utf8');
      const parsedOpenApiFile = await openapiTS(openApiContent); // Generates raw TypeScript code as a string
      const typesString = astToString(parsedOpenApiFile);
      const typesOutputPath = path.join(versionPath, 'types.ts');
      fs.writeFileSync(typesOutputPath, typesString);

      // Generate API client using swagger-typescript-api
      const apiOutputPath = path.resolve(versionPath, 'api');
      await generateApi({
        name: 'api.ts',
        output: apiOutputPath,
        input: openApiPath,
        httpClientType: 'axios', // or "fetch"
        modular: true,
        singleHttpClient: true,
        extractRequestParams: true,
        extractResponseBody: true,
        prettier: { tabWidth: 2 },
      });

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
        export * from './types';
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

  toFormattedName(input: string): string {
    return input
      .split(/[-_\s]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('');
  }
}