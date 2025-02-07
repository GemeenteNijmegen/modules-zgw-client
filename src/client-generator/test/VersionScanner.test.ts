import { VersionScanner } from '../VersionScanner';

describe('VersionScanner (Real-Life Test)', () => {
  const repositoryPath = 'VNG-Realisatie/gemma-zaken';
  const branch = 'master';
  const apiSpecPath = 'api-specificatie';
  const subdirectory = 'ztc';
  let scanner: VersionScanner;

  beforeEach(() => {
    scanner = new VersionScanner({
      repositoryPath,
      branch,
      apiSpecPath,
      subdirectory,
    });
  });

  it('should fetch specific versions with download URLs from the ztc directory', async () => {
    const versions = await scanner.fetchSpecificVersions();

    // Controleer of specifieke versies en download-URL's aanwezig zijn
    expect(versions).toEqual(
      expect.arrayContaining([
        {
          version: '1.2.1',
          download_url: 'https://raw.githubusercontent.com/VNG-Realisatie/gemma-zaken/master/api-specificatie/ztc/1.2.x/1.2.1/openapi.yaml',
        },
        {
          version: '1.3.1',
          download_url: 'https://raw.githubusercontent.com/VNG-Realisatie/gemma-zaken/master/api-specificatie/ztc/1.3.x/1.3.1/openapi.yaml',
        },
      ]),
    );

    console.log('Found versions in ztc:', versions);
  });
});
