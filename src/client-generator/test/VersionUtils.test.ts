import { getLatestVersion, isVersionGreaterOrEqual } from '../VersionUtils';

describe('getLatestVersion', () => {
  test.each([
    { versions: ['1.0.0', '2.0.0', '1.5.0'], expected: '2.0.0', description: 'returns highest version' },
    { versions: ['1.2.3', '1.2.10', '1.2.5'], expected: '1.2.10', description: 'handles double-digit patch versions' },
    { versions: ['1.0.0', '1.0.1', '1.0.2'], expected: '1.0.2', description: 'sorts patch versions correctly' },
    { versions: ['2.1.0', '2.1.5', '2.1.3'], expected: '2.1.5', description: 'sorts minor versions correctly' },
    { versions: ['3.1.0', '3.0.5', '3.2.0'], expected: '3.2.0', description: 'sorts major versions correctly' },
    { versions: ['1.0.0'], expected: '1.0.0', description: 'returns single version when only one exists' },
  ])('$description', ({ versions, expected }) => {
    expect(getLatestVersion(versions)).toBe(expected);
  });

  it('should return undefined for an empty array', () => {
    expect(getLatestVersion([])).toBeUndefined();
  });
});

describe('isVersionGreaterOrEqual', () => {
  test.each([
    { v1: '1.2.0', v2: '1.1.9', expected: true, description: 'major and minor increase' },
    { v1: '2.0.0', v2: '1.9.9', expected: true, description: 'major version increase' },
    { v1: '1.2.3', v2: '1.2.3', expected: true, description: 'equal versions' },
    { v1: '1.2.5', v2: '1.2.10', expected: false, description: 'patch version lower' },
    { v1: '1.0.0', v2: '2.0.0', expected: false, description: 'major version lower' },
    { v1: '1.9.9', v2: '1.10.0', expected: false, description: 'minor version lower' },
  ])('$description', ({ v1, v2, expected }) => {
    expect(isVersionGreaterOrEqual(v1, v2)).toBe(expected);
  });
});