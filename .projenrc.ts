import { GemeenteNijmegenTsPackage } from '@gemeentenijmegen/projen-project-type';
const project = new GemeenteNijmegenTsPackage({
  defaultReleaseBranch: 'main',
  devDeps: ['@gemeentenijmegen/projen-project-type'],
  name: 'modules-zgw-client',
  projenrcTs: true,
  repository: 'modules-zgw-client',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();