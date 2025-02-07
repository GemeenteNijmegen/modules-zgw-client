/**
 * Postfix added to all generated client folders.
 */
export const generatedClientFolderPostfix = '-generated-client';

/**
 * Default GitHub repository path for the GEMMA API specifications.
 */
export const gemmaRepositoryPath = 'VNG-Realisatie/gemma-zaken';

/**
 * Configuration for generating a client.
 */
export type GenerateClientConfiguration = {
  /**
   * The name of the client.
   * Example: 'catalogi'.
   */
  name: string;

  /**
   * The folder name where the client will be generated.
   * Automatically generated as a combination of the `name` and `generatedClientFolderPostfix`.
   */
  folderName: string;

  /**
   * The GitHub repository path.
   * Example: 'VNG-Realisatie/gemma-zaken'.
   */
  repositoryPath: string;

  /**
   * The subdirectory in the repository where the API specification resides.
   * Example: 'ztc' for Zaken API.
   */
  repoSubdirectory: string;
};

/**
 * Helper function to generate a client configuration.
 * Automatically sets `folderName` based on the `name`.
 */
export function createClientConfig(
  name: string,
  repoSubdirectory: string,
  repositoryPath: string = gemmaRepositoryPath,
): GenerateClientConfiguration {
  return {
    name,
    folderName: `${name}${generatedClientFolderPostfix}`,
    repositoryPath,
    repoSubdirectory,
  };
}

/**
 * List of configurations for generating clients.
 */
export const generateClientConfigurations: GenerateClientConfiguration[] = [
  createClientConfig('catalogi', 'ztc'),
  createClientConfig('zaken', 'zrc'),
  createClientConfig('documenten', 'drc'),
];