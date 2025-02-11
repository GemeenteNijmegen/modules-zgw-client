export interface VersionScannerOptions {
  repositoryPath?: string;
  branch?: string;
  apiSpecPath?: string;
  subdirectory?: string;
  baseUrl?: string;
}

export interface VersionInfo {
  version: string;
  download_url: string;
}

export interface GitHubTreeNode {
  path: string;
  mode: string;
  type: 'blob' | 'tree';
  sha: string;
  size?: number;
  url: string;
}

export interface GitHubTree {
  tree: GitHubTreeNode[];
}
/**
 * Scans a github repository for versions of openapi.yaml files
 * Right now tailored to gemma-zaken ztc, zrc and drc folders on Github
 */
export class VersionScanner {
  private baseUrl: string; // Github api baseurl
  private repositoryPath: string;
  private branch: string;
  private apiSpecPath: string;
  private subdirectory: string;
  private debug: boolean;

  constructor(options: VersionScannerOptions) {
    this.repositoryPath = options.repositoryPath || 'VNG-Realisatie/gemma-zaken';
    this.baseUrl = options.baseUrl || 'https://api.github.com/repos';
    this.branch = options.branch || 'master';
    this.apiSpecPath = options.apiSpecPath || 'api-specificatie';
    this.subdirectory = options.subdirectory || '';
    this.debug = process.env.DEBUG === 'TRUE';
  }

  private log(message: string) {
    if (this.debug) {
      console.log(`[DEBUG] ${message}`);
    }
  }

  /**
     * Safe fetch-methode without cancel()-call (because of openhandles in jest)
     * Not perfect as of now, revisit later
     */
  private async safeFetch<T>(url: string): Promise<T> {
    this.log(`Fetching URL: ${url}`);
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${url}, Status: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  /**
   * Gets the entire github folder tree in one call to prevent recursive multiple api calls to github (rate-limit)
   */
  private async fetchFullTree(): Promise<GitHubTreeNode[]> {
    const url = `${this.baseUrl}/${this.repositoryPath}/git/trees/${this.branch}?recursive=1`;
    this.log(`Fetching full tree from: ${url}`);

    const data = await this.safeFetch<GitHubTree>(url);
    this.log(`Fetched full tree: ${JSON.stringify(data.tree, null, 2)}`);
    return data.tree;
  }

  private extractVersionsFromTree(tree: GitHubTreeNode[]): VersionInfo[] {
    const versions: VersionInfo[] = [];
    const apiPathPrefix = `${this.apiSpecPath}/${this.subdirectory}`;

    for (const node of tree) {
      if (node.type === 'blob' && node.path.endsWith('openapi.yaml')) {
        const pathParts = node.path.split('/');
        if (!node.path.startsWith(apiPathPrefix)) {
          continue;
        }
        const version = pathParts[pathParts.length - 2];
        if (/^\d+\.\d+\.\d+$/.test(version)) {
          versions.push({
            version,
            download_url: `https://raw.githubusercontent.com/${this.repositoryPath}/${this.branch}/${node.path}`,
          });
        }
      }
    }

    return versions;
  }

  public async fetchSpecificVersions(): Promise<VersionInfo[]> {
    this.log(`Starting to fetch versions from: ${this.apiSpecPath}/${this.subdirectory}`);

    const tree = await this.fetchFullTree();
    const versions = this.extractVersionsFromTree(tree);

    this.log(`Extracted versions: ${JSON.stringify(versions, null, 2)}`);
    return versions;
  }
}