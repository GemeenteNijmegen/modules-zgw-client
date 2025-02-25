import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as catalogi from '../../catalogi-generated-client';
import { CatalogiHttpClient } from '../CatalogiHttpClient';
import { VersionedZaaktype } from '../VersionedZaaktype';

describe('VersionedZaaktype (axios-mock tests)', () => {
  let mockHttpClient: CatalogiHttpClient;
  let mockAxios: MockAdapter;
  let versionedZaaktype: VersionedZaaktype;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockHttpClient = new CatalogiHttpClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      baseUrl: 'https://mock-api.com',
    });
    versionedZaaktype = new VersionedZaaktype(mockHttpClient);

    // IMPORTANT: Use onGet('/zaaktypen') so it matches the exact path,
    // and check `config.params` for query parameters like `identificatie`.
    mockAxios.onGet('/zaaktypen').reply((config) => {
      const { identificatie } = config.params || {};

      if (identificatie === 'ZAAK-001') {
        // Multiple versions for the same identificatie
        const zaaktypes: catalogi.ZaakType[] = [
          {
            identificatie: 'ZAAK-001',
            versiedatum: '2021-01-01',
            beginGeldigheid: '2021-01-01',
          } as catalogi.ZaakType,
          {
            identificatie: 'ZAAK-001',
            versiedatum: '2023-01-01', // newest
            beginGeldigheid: '2023-01-01',
          } as catalogi.ZaakType,
          {
            identificatie: 'ZAAK-001',
            versiedatum: '2022-06-01',
            beginGeldigheid: '2022-06-01',
            eindeGeldigheid: '2022-12-31',
          } as catalogi.ZaakType,
        ];
        return [200, { results: zaaktypes }];
      }

      if (identificatie === 'NOT-FOUND') {
        // Return an empty array for "not found"
        return [200, { results: [] }];
      }

      // Default case: no match
      return [200, { results: [] }];
    });
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('fetchZaaktypesByIdentificatie should fetch zaaktypes with query param and return them', async () => {
    // Should retrieve 3 versions of ZAAK-001
    const result = await versionedZaaktype.fetchZaaktypesByIdentificatie('ZAAK-001');
    expect(result).toHaveLength(3);

    // Expect we have versiedatums 2021-01-01, 2022-06-01, 2023-01-01
    const versiedatums = result.map((zt) => zt.versiedatum).sort();
    expect(versiedatums).toEqual(['2021-01-01', '2022-06-01', '2023-01-01']);
  });

  test('getLatestZaaktype should return the newest by versiedatum', async () => {
    const latest = await versionedZaaktype.getLatestZaaktype('ZAAK-001');
    // The newest is 2023-01-01
    expect(latest.versiedatum).toBe('2023-01-01');
  });

  test('getLatestZaaktype should throw an error if none found', async () => {
    await expect(versionedZaaktype.getLatestZaaktype('NOT-FOUND'))
      .rejects
      .toThrow('Geen zaaktypes gevonden voor identificatie: NOT-FOUND');
  });

  test('getLatestZaaktypeWithVersionData should return latest and versions array', async () => {
    const { latestZaaktype, versions } =
      await versionedZaaktype.getLatestZaaktypeWithVersionData('ZAAK-001');

    // Expect the newest to be '2023-01-01'
    expect(latestZaaktype.versiedatum).toBe('2023-01-01');

    // The versions array should be in descending order
    expect(versions).toEqual([
      {
        versiedatum: '2023-01-01',
        datumBeginGeldigheid: '2023-01-01',
        datumEindeGeldigheid: '',
      },
      {
        versiedatum: '2022-06-01',
        datumBeginGeldigheid: '2022-06-01',
        datumEindeGeldigheid: '2022-12-31',
      },
      {
        versiedatum: '2021-01-01',
        datumBeginGeldigheid: '2021-01-01',
        datumEindeGeldigheid: '',
      },
    ]);
  });

  test('getLatestZaaktypeWithVersionData should throw if no zaaktypes found', async () => {
    await expect(versionedZaaktype.getLatestZaaktypeWithVersionData('NOT-FOUND'))
      .rejects
      .toThrow('Geen zaaktypes gevonden voor identificatie: NOT-FOUND');
  });
});