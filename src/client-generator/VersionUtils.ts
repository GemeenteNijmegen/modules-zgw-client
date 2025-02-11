/**
 * Sorts an array of semantic versions (e.g., "1.3.0", "1.2.1") in descending order
 * and returns the latest version.
 */
export function getLatestVersion(versions: string[]): string {
  return versions.sort((a, b) => {
    const [majorA, minorA, patchA] = a.split('.').map(Number);
    const [majorB, minorB, patchB] = b.split('.').map(Number);
    return majorB - majorA || minorB - minorA || patchB - patchA;
  })[0];
}

/**
   * Compares two semantic version strings (e.g., "1.3.0" >= "1.2.1").
   * Returns `true` if `version` is greater than or equal to `minVersion`.
   */
export function isVersionGreaterOrEqual(version: string, minVersion: string): boolean {
  return getLatestVersion([version, minVersion]) === version;
}