import { CatalogiHttpClient } from './CatalogiHttpClient';
import * as catalogi from '../catalogi-generated-client';
import { getAllPaginatedResults } from '../pagination-helper';


/**
 * Provides methods to retrieve and manage Zaaktypes grouped by their identificatie.
 * Class has to be instantiated with create() or fetchAndGroupZaaktypes()
 * It will retrieve all zaaktypes and caches them in the instance to prevent many api calls
 */
export class CachedVersionedZaaktypes {
  private httpClient: CatalogiHttpClient;
  private zaaktypesByIdentificatie: Record<string, catalogi.ZaakType[]> = {};

  constructor(httpClient: CatalogiHttpClient) {
    this.httpClient = httpClient;

  }
  /**
   * Made create method for readability
   */
  public async create(): Promise<void> {
    await this.fetchAndGroupZaaktypes();
  }
  /**
   * Fetches all zaaktypes from the API using pagination and groups them by their identificatie.
   */
  public async fetchAndGroupZaaktypes(): Promise<void> {
    const api = new catalogi.Zaaktypen(this.httpClient);
    const allZaaktypes = await getAllPaginatedResults(api.zaaktypeList, {});

    this.zaaktypesByIdentificatie = allZaaktypes.reduce((acc, zaaktype) => {
      const identificatie = zaaktype.identificatie ?? 'onbekend';
      if (!acc[identificatie]) {
        acc[identificatie] = [];
      }
      acc[identificatie].push(zaaktype);
      return acc;
    }, {} as Record<string, catalogi.ZaakType[]>);
  }
  /**
   * Retrieves the latest version of a Zaaktype based on its identificatie.
   */
  public getLatestZaaktype(identificatie: string): catalogi.ZaakType {
    const zaaktypes = this.zaaktypesByIdentificatie[identificatie];
    if (!zaaktypes || zaaktypes.length === 0) {
      throw new Error(`Geen zaaktypes gevonden voor identificatie: ${identificatie}.`);
    }
    // Sorteer de zaaktypes op versiedatum in aflopende volgorde
    // Dit heeft de aanname dat de laatste versiedatum de nieuwste is
    const sorted = zaaktypes.sort(
      (a, b) => new Date(b.versiedatum).getTime() - new Date(a.versiedatum).getTime(),
    );
    return sorted[0];
  }
  /**
   * Retrieves all unique identificaties of the zaaktypes.
   */
  public getUniqueIdentificaties(): string[] {
    return Object.keys(this.zaaktypesByIdentificatie);
  }

  /**
   * Retrieves all versions of a Zaaktype by its identificatie.
   */
  public getVersionsByIdentificatie(
    identificatie: string,
  ): Array<{
      versiedatum: string;
      datumBeginGeldigheid: string;
      datumEindeGeldigheid?: string;
    }> {
    const zaaktypes = this.zaaktypesByIdentificatie[identificatie];

    if (!zaaktypes) {
      throw new Error(`Identificatie not found: ${identificatie}`);
    }

    return zaaktypes.map((zaaktype) => ({
      versiedatum: zaaktype.versiedatum ?? '',
      datumBeginGeldigheid: zaaktype.beginGeldigheid ?? '',
      datumEindeGeldigheid: zaaktype.eindeGeldigheid ?? '',
    }));
  }

  /**
   * Retrieves all zaaktypes grouped by their identificatie.
   */
  public getGroupedZaaktypes(): Record<string, catalogi.ZaakType[]> {
    return this.zaaktypesByIdentificatie;
  }
}