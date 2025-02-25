import { CatalogiHttpClient } from './CatalogiHttpClient';
import * as catalogi from '../catalogi-generated-client';

/**
 * Loader class that retrieves all extra (related) objects for a given Zaaktype.
 * Make sure your `ZaakType` interface has these fields as arrays of strings:
 *   statustypen: string[];
 *   resultaattypen: string[];
 *   eigenschappen: string[];
 *   roltypen: string[];
 *   besluittypen: string[];
 */
export class ZaaktypeObjectsFetcher {
  constructor(
    private httpClient: CatalogiHttpClient,
    private zaaktype: catalogi.ZaakType, // Must have the above properties typed as string[]
  ) {}

  /**
   * Extract the UUID from a full URL.
   */
  private extractUuid(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 1];
  }

  private async loadStatustypen(urls: string[] = []): Promise<catalogi.StatusType[]> {
    const promises = urls.map(async (url) => {
      const uuid = this.extractUuid(url);
      const client = new catalogi.Statustypen(this.httpClient);

      // The generated method usually returns something like `Promise<AxiosResponse<Statustype>>`.
      // We await and return `response.data` to match the method’s declared return type.
      const response = await client.statustypeRetrieve(uuid);
      return response.data;
    });
    return Promise.all(promises);
  }

  private async loadResultaattypen(urls: string[] = []): Promise<catalogi.ResultaatType[]> {
    const promises = urls.map(async (url) => {
      const uuid = this.extractUuid(url);
      const client = new catalogi.Resultaattypen(this.httpClient);
      const response = await client.resultaattypeRetrieve(uuid);
      return response.data;
    });
    return Promise.all(promises);
  }

  private async loadEigenschappen(urls: string[] = []): Promise<catalogi.Eigenschap[]> {
    const promises = urls.map(async (url) => {
      const uuid = this.extractUuid(url);
      const client = new catalogi.Eigenschappen(this.httpClient);
      const response = await client.eigenschapRetrieve(uuid);
      return response.data;
    });
    return Promise.all(promises);
  }


  private async loadRoltypen(urls: string[] = []): Promise<catalogi.RolType[]> {
    const promises = urls.map(async (url) => {
      const uuid = this.extractUuid(url);
      const client = new catalogi.Roltypen(this.httpClient);
      const response = await client.roltypeRetrieve(uuid);
      return response.data;
    });
    return Promise.all(promises);
  }

  private async loadBesluittypen(urls: string[] = []): Promise<catalogi.BesluitType[]> {
    const promises = urls.map(async (url) => {
      const uuid = this.extractUuid(url);
      const client = new catalogi.Besluittypen(this.httpClient);
      const response = await client.besluittypeRetrieve(uuid);
      return response.data;
    });
    return Promise.all(promises);
  }

  /**
   * Retrieves all extra related objects. Errors (e.g. 429) are thrown so you can handle them.
   */
  public async loadExtraData(): Promise<{
    statustypen: catalogi.StatusType[];
    resultaattypen: catalogi.ResultaatType[];
    eigenschappen: catalogi.Eigenschap[];
    roltypen: catalogi.RolType[];
    besluittypen: catalogi.BesluitType[];
  }> {
    const [
      statustypen,
      resultaattypen,
      eigenschappen,
      roltypen,
      besluittypen,
    ] = await Promise.all([
      this.loadStatustypen(this.zaaktype.statustypen),
      this.loadResultaattypen(this.zaaktype.resultaattypen),
      this.loadEigenschappen(this.zaaktype.eigenschappen),
      this.loadRoltypen(this.zaaktype.roltypen),
      this.loadBesluittypen(this.zaaktype.besluittypen),
    ]);

    return {
      statustypen,
      resultaattypen,
      eigenschappen,
      roltypen,
      besluittypen,
    };
  }
}