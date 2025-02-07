import { CatalogiHttpClient } from './CatalogiHttpClient';
import * as catalogi from '../catalogi-generated-client';

/**
 * Provides methods to retrieve and manage Zaaktypes grouped by their identificatie.
 */
export class VersionedZaaktypes {
  private httpClient: CatalogiHttpClient;
  private zaaktypesByIdentificatie: Record<string, catalogi.ZaakType[]> = {};

  constructor(httpClient: CatalogiHttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * Fetches all zaaktypes from the API and groups them by their identificatie.
   * @returns Promise<void>
   */
  public async fetchAndGroupZaaktypes(): Promise<void> {
    const response = await this.httpClient.catalogiRequest<catalogi.ZaakType[]>({
      path: '/zaaktypen',
      method: 'GET',
    });

    this.zaaktypesByIdentificatie = response.reduce<Record<string, catalogi.ZaakType[]>>(
      (acc, zaaktype) => {
        const key = zaaktype.identificatie;
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(zaaktype);
        return acc;
      },
      {},
    );
  }

  /**
   * Retrieves all unique identificaties of the zaaktypes.
   * @returns string[] - List of unique identificaties.
   */
  public getUniqueIdentificaties(): string[] {
    return Object.keys(this.zaaktypesByIdentificatie);
  }

  /**
   * Retrieves all versions of a Zaaktype by its identificatie.
   * Each version includes its validity period.
   *
   * @param identificatie - The identificatie of the Zaaktype.
   * @returns Array<{
   *   datumBeginGeldigheid: string;
   *   datumEindeGeldigheid?: string;
   * }> - List of versions with their validity periods.
   * @throws Error if the identificatie does not exist.
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
   * @returns Record<string, catalogi.Zaaktype[]> - Zaaktypes grouped by identificatie.
   */
  public getGroupedZaaktypes(): Record<string, catalogi.ZaakType[]> {
    return this.zaaktypesByIdentificatie;
  }

  //TODO: add method to retrieve latest version of a zaaktype by identificatie
}
