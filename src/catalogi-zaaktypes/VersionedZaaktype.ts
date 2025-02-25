import { CatalogiHttpClient } from './CatalogiHttpClient';
import * as catalogi from '../catalogi-generated-client';
import { getAllPaginatedResults } from '../pagination-helper';

/**
 * A non-cached class that retrieves Zaaktypes by their identificatie (via query params),
 * and can optionally return the latest version or additional version data.
 */
export class VersionedZaaktype {
  constructor(private httpClient: CatalogiHttpClient) {}

  /**
   * Fetches all Zaaktypes that match the given identificatie (across all pages).
   */
  public async fetchZaaktypesByIdentificatie(identificatie: string): Promise<catalogi.ZaakType[]> {
    const api = new catalogi.Zaaktypen(this.httpClient);
    // We pass the query param { identificatie } to filter by identificatie
    const allZaaktypes = await getAllPaginatedResults(api.zaaktypeList, { identificatie });
    return allZaaktypes;
  }

  /**
   * Returns the latest version (by versiedatum) of all Zaaktypes matching the identificatie.
   * Throws an error if none are found.
   */
  public async getLatestZaaktype(identificatie: string): Promise<catalogi.ZaakType> {
    const zaaktypes = await this.fetchZaaktypesByIdentificatie(identificatie);
    if (!zaaktypes || zaaktypes.length === 0) {
      throw new Error(`Geen zaaktypes gevonden voor identificatie: ${identificatie}`);
    }
    // Sort by versiedatum descending
    const sorted = zaaktypes.sort(
      (a, b) => new Date(b.versiedatum).getTime() - new Date(a.versiedatum).getTime(),
    );
    return sorted[0];
  }

  /**
   * Returns both:
   *  - The latest Zaaktype (by versiedatum).
   *  - A list of version metadata (versiedatum, beginGeldigheid, eindeGeldigheid) for *all* versions.
   */
  public async getLatestZaaktypeWithVersionData(identificatie: string): Promise<{
    latestZaaktype: catalogi.ZaakType;
    versions: Array<{
      versiedatum: string;
      datumBeginGeldigheid: string;
      datumEindeGeldigheid?: string;
    }>;
  }> {
    const zaaktypes = await this.fetchZaaktypesByIdentificatie(identificatie);
    if (!zaaktypes || zaaktypes.length === 0) {
      throw new Error(`Geen zaaktypes gevonden voor identificatie: ${identificatie}`);
    }
    // Sort by versiedatum descending
    const sorted = zaaktypes.sort(
      (a, b) => new Date(b.versiedatum).getTime() - new Date(a.versiedatum).getTime(),
    );

    const latestZaaktype = sorted[0];
    const versions = sorted.map((zt) => ({
      versiedatum: zt.versiedatum ?? '',
      datumBeginGeldigheid: zt.beginGeldigheid ?? '',
      datumEindeGeldigheid: zt.eindeGeldigheid ?? '',
    }));

    return {
      latestZaaktype,
      versions,
    };
  }
}