import { GemeenteNijmegenTsPackage } from '@gemeentenijmegen/projen-project-type';
const project = new GemeenteNijmegenTsPackage({
  defaultReleaseBranch: 'main',
  description: 'Package that generates zgw clients and helpers.',
  deps: [
    'openapi-typescript',
    'swagger-typescript-api',
    'ts-node',
    'axios',
    'jsonwebtoken',
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
  name: 'modules-zgw-client',
  projenrcTs: true,
  repository: 'modules-zgw-client',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
