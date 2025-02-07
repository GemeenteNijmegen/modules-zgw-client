import * as fs from 'fs';
import * as path from 'path';
import { describeIntegration } from '../../test-utils/describeIntegration';
import { createClientConfig, generateClientConfigurations } from '../GenerateClientConfiguration';
import { ScanGeneratedFolders } from '../ScanGeneratedFolders';


describeIntegration('Live ScanGeneratedFolders', () => {
  it('should scan the real file system and detect version folders', () => {
    const scanGeneratedFolders = new ScanGeneratedFolders();
    const scannedConfigs = scanGeneratedFolders.scan(generateClientConfigurations);

    console.dir(scannedConfigs, { depth: null, colors: true });

    expect(scannedConfigs).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'catalogi',
          folderVersions: expect.arrayContaining(['1.2.1']),
        }),
      ]),
    );
  });
});
describe('ScanGeneratedfolders with mocks', () => {
  const mockFolderName = 'testmockforjest-generated-client';
  // in gitnignore
  const mockPath = path.resolve(__dirname, '..', '..', mockFolderName);
  beforeAll( () => {
    // Make sure directory mockPath is deleted recursively if exists
    if (fs.existsSync(mockPath)) {
      fs.rmSync(mockPath, { recursive: true, force: true });
    }
  });
  let firstTestDone: Promise<void>;
  let resolveFirstTest: () => void;
  const mockGenerateClientConfig = [createClientConfig('testmockforjest', 'tmj')];

  it('should return empty array versionFolders when none exist', async () => {
    const scanGeneratedFolders = new ScanGeneratedFolders();
    const result = scanGeneratedFolders.scan(mockGenerateClientConfig);
    expect(result[0].folderName).toEqual(mockFolderName);
    expect(result[0].folderVersions).toEqual([]);
    firstTestDone = new Promise((resolve) => {
      resolveFirstTest = resolve;
    });
    resolveFirstTest();
  });
  it('should return the versions of testmockforjest folder', async () => {
    await firstTestDone;
    await fs.promises.mkdir(path.join(mockPath, '1.0.0'), { recursive: true });
    await fs.promises.mkdir(path.join(mockPath, '1.1.0'), { recursive: true });

    const scanGeneratedFolders = new ScanGeneratedFolders();
    const result = scanGeneratedFolders.scan(mockGenerateClientConfig);
    expect(result[0].folderName).toEqual(mockFolderName);
    expect(result[0].folderVersions).toEqual(['1.0.0', '1.1.0']);
    fs.rmSync(mockPath, { recursive: true, force: true });
  });
});