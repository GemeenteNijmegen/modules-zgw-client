import { GemeenteNijmegenTsPackage } from '@gemeentenijmegen/projen-project-type';
import { addZgwClientsUpdateWorkflow } from './src/client-updates-custom-workflow';
const projectName = '@gemeentenijmegen/modules-zgw-client';
const project = new GemeenteNijmegenTsPackage({
  defaultReleaseBranch: 'main',
  name: projectName,
  packageName: projectName,
  description: 'Package that generates zgw clients and helpers.',
  repository: 'https://github.com/GemeenteNijmegen/modules-zgw-client',
  deps: [
    'openapi-typescript',
    'swagger-typescript-api',
    'ts-node',
    'axios',
    'jsonwebtoken',
    'projen',
  ],
  devDeps: [
    '@gemeentenijmegen/projen-project-type',
    'axios',
    'dotenv',
    '@types/js-yaml', // Voeg type-definities voor js-yaml toe ivm openapi-typescript
    'json-schema-to-ts', // Installeer deze afhankelijkheid voor JSON schema types ivm openapi-typescript
    '@types/jsonwebtoken',
    'axios-mock-adapter',
  ],
  tsconfig: {
    compilerOptions: {
      skipLibCheck: true, // Add skipLibCheck here
    },
  },
  jestOptions: {
    jestConfig: {
      setupFiles: ['dotenv/config'],
      roots: ['test', 'src'],
    },
  },
  gitignore: ['**/output/', '**/testmockforjest-generated-client/'],
  projenrcTs: true,
});

// Custom workflow om zgw clients te updaten en pr klaar te zetten.
// Alleen relevant in dit project
addZgwClientsUpdateWorkflow(project);
project.synth();
