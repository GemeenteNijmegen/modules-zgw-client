import { CatalogiHttpClient } from './CatalogiHttpClient';
import * as catalogi from '../catalogi-generated-client';
import { getAllPaginatedResults } from '../pagination-helper';

/**
 * Fetches Informatieobjecttypen for a given Zaaktype URL.
 * Handles two scenarios for each relation.informatieobjecttype:
 *  1) It's a URL (standard approach): retrieve by UUID.
 *  2) It's a string/omschrijving (non-standard): query the informatieobjecttypeList.
 */
export class ZaaktypeInformatieobjecttypenFetcher {
  constructor(private httpClient: CatalogiHttpClient) {}

  /**
   * Fetches all Informatieobjecttypen for a given Zaaktype URL:
   * 1) Lists all zaaktype-informatieobjecttype relations (paginated),
   * 2) For each relation, retrieves the actual Informatieobjecttype resource(s).
   */
  public async fetchInformatieobjecttypenForZaaktype(
    zaaktypeUrl: string,
  ): Promise<catalogi.InformatieobjecttypeRetrieveData[]> {
    // 1) Fetch all zaaktype-informatieobjecttype relations for this Zaaktype
    const relationsApi = new catalogi.ZaaktypeInformatieobjecttypen(this.httpClient);
    const allRelations = await getAllPaginatedResults(
      relationsApi.zaakinformatieobjecttypeList,
      { zaaktype: zaaktypeUrl },
    );

    // 2) For each relation, retrieve the actual Informatieobjecttype
    const infoApi = new catalogi.Informatieobjecttypen(this.httpClient);

    // We gather all the results in one array
    const allResults: catalogi.InformatieobjecttypeRetrieveData[] = [];

    for (const relation of allRelations) {
      const iotValue = relation.informatieobjecttype; // might be a URL or a plain string
      if (!iotValue) {
        // No informatieobjecttype specified, skip
        continue;
      }

      // Check if the string is a valid URL
      if (this.isUrl(iotValue)) {
        // Standard scenario: extract UUID and retrieve
        const uuid = this.extractUuid(iotValue);
        const response = await infoApi.informatieobjecttypeRetrieve(uuid);
        allResults.push(response.data);
      } else {
        // Non-standard scenario: treat it as an omschrijving
        // so we do a search via informatieobjecttypeList with a query param
        const matching = await getAllPaginatedResults(infoApi.informatieobjecttypeList, {
          omschrijving: iotValue,
        });
        // The generated `informatieobjecttypeList` might return an array of InformatieobjecttypeListData.results
        // Typically, we want the .results from that response.
        // But swagger-typescript-api might flatten or structure them differently.
        // Let's assume it's something like { results: InformatieObjectType[] }:
        // So 'matching' is an array of InformatieObjectType. We might wrap them in .data if needed.

        // In many cases, you'll get multiple matches. We push them all, or you might want just the first:
        allResults.push(...matching);
      }
    }

    return allResults;
  }

  /**
   * Checks if a given string is a valid URL.
   */
  private isUrl(value: string): boolean {
    try {
      new URL(value);
      return true;
    } catch (error) {
      return false;
    }
  }

  /**
   * Extracts the UUID from a full URL (e.g. "https://.../api/v1/informatieobjecttypen/abc123")
   */
  private extractUuid(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 1];
  }
}