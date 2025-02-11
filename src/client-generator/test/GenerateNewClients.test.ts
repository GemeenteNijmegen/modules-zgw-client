import { createClientConfig, GenerateClientConfiguration } from '../GenerateClientConfiguration';
import { GenerateNewClients } from '../GenerateNewClients';
import { ScanGeneratedFolders } from '../ScanGeneratedFolders';
import { VersionScanner } from '../VersionScanner';

// Need to prevent ESModule error in Jest conversion in this commonjs project
// By importing after mocking constructor and preventing swagger-typescript-api from being used by Jest
const mockGenerateClient = jest.fn().mockResolvedValue(undefined);
jest.mock('../ClientGenerator', () => {
  return {
    ClientGenerator: jest.fn().mockImplementation(() => ({
      generateClient: mockGenerateClient,
    })),
  };
});
import { ClientGenerator } from '../ClientGenerator';

jest.mock('fs/promises', () => ({
  mkdir: jest.fn(),
  writeFile: jest.fn().mockResolvedValue(undefined),
  readFile: jest.fn().mockResolvedValue('file content'),
  stat: jest.fn().mockResolvedValue({ size: 100 }),
  readdir: jest.fn().mockResolvedValue(['1.3.0', '1.4.0']),
}));
import * as fs from 'fs/promises'; // Import after mock

describe('GenerateNewClients', () => {

  beforeEach(() => {
    jest.clearAllMocks();

    jest.spyOn(fs, 'mkdir').mockResolvedValue(undefined); // set here to prevent TS from saying unused import of fs
    jest.spyOn(global, 'fetch').mockResolvedValue({
      ok: true,
      status: 200,
      statusText: 'OK',
      text: jest.fn().mockResolvedValue('mocked file content'),
    } as any as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks(); // Clean up spies after each test in case we add extra test
  });

  it('should not include versions before oldestVersion', async () => {
    const mockConfig: GenerateClientConfiguration = createClientConfig('catalogi', 'ztc', '1.2.1');
    jest.spyOn(VersionScanner.prototype, 'fetchSpecificVersions')
      .mockResolvedValue(
        [
          { version: '1.1.1', download_url: 'https://example.com/1.1.1.yaml' },
          { version: '1.2.0', download_url: 'https://example.com/1.2.0.yaml' },
          { version: '1.3.0', download_url: 'https://example.com/1.3.0.yaml' },
          { version: '1.4.0', download_url: 'https://example.com/1.4.0.yaml' },
        ],
      );
    jest.spyOn(ScanGeneratedFolders.prototype, 'scan')
      .mockReturnValue([{ ...mockConfig, folderVersions: ['1.3.0'] }]); // make sure the older versions are not included

    const generateNewClients = new GenerateNewClients([mockConfig]);

    await generateNewClients.generateClients();
    expect(ClientGenerator as jest.Mock).toHaveBeenCalled(); // Calls constructor

    // Should be generated because it does not exist in local folders
    // And is after old versions
    expect(mockGenerateClient).toHaveBeenCalledWith(
      expect.stringContaining('1.4.0'),
      expect.any(String),
    );
    // Should not be generated because it already exists in the local folders
    expect(mockGenerateClient).not.toHaveBeenCalledWith(
      expect.stringContaining('1.3.0'),
      expect.any(String),
    );
    // Old version should not be included
    expect(mockGenerateClient).not.toHaveBeenCalledWith(
      expect.stringContaining('1.2.0'),
      expect.any(String),
    );
    // Old version should not be included
    expect(mockGenerateClient).not.toHaveBeenCalledWith(
      expect.stringContaining('1.1.1'),
      expect.any(String),
    );
  });
});