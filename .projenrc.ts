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
    'swagger-typescript-api', // Generates client, always has to be mocked in tests - module not commonjs
    'ts-node', // To run class in github workflow
    'axios', // Clients generated with axios, fetch does not generate a proper class
    'jsonwebtoken',
    'projen', // Needed in deps to make client-updates-custom-workflow
  ],
  devDeps: [
    '@gemeentenijmegen/projen-project-type',
    'dotenv', // Needed to use .env vars
    '@types/jsonwebtoken',
    'axios-mock-adapter', // For testing
  ],
  tsconfigDev: {
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: false,
      skipLibCheck: true, // Unused lib dependencies return issues when building otherwise
    },
  },
  tsconfig: {
    compilerOptions: {
      declaration: true,
      emitDeclarationOnly: false,
      skipLibCheck: true, // Unused lib dependencies return issues when building otherwise
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

// Custom workflow to update zgw clients based on vng gemma-zaken github
// Only used in this project - otherwise it would be located in modules projen
addZgwClientsUpdateWorkflow(project);
project.synth();
