import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { CatalogiHttpClient } from '../CatalogiHttpClient';
import { ZaaktypeInformatieobjecttypenFetcher } from '../ZaaktypeInformatieobjecttypeFetcher';

describe('ZaaktypeInformatieobjecttypenFetcher', () => {
  let mockHttpClient: CatalogiHttpClient;
  let mockAxios: MockAdapter;
  let fetcher: ZaaktypeInformatieobjecttypenFetcher;

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockHttpClient = new CatalogiHttpClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      baseUrl: 'https://mock-api.com',
    });
    fetcher = new ZaaktypeInformatieobjecttypenFetcher(mockHttpClient);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('Open Zaak scenario: informatieobjecttype is a URL in zaaktype-informatieobjecttypen', async () => {
    // 1) The call to /zaaktype-informatieobjecttypen?zaaktype=...
    //    We'll return one relation with a URL as 'informatieobjecttype'
    mockAxios
      .onGet('/zaaktype-informatieobjecttypen')
      .reply(() => {
        return [
          200,
          {
            results: [
              {
                // Typical "Open Zaak" style relation:
                informatieobjecttype: 'https://mock-api.com/informatieobjecttypen/abc-123',
              },
            ],
          },
        ];
      });

    // 2) The call to /informatieobjecttypen/abc-123 to retrieve the actual resource
    mockAxios
      .onGet('/informatieobjecttypen/abc-123')
      .reply(200, {
        // Some minimal example of an Informatieobjecttype
        url: 'https://mock-api.com/informatieobjecttypen/abc-123',
        omschrijving: 'Document Type ABC',
      });

    const result = await fetcher.fetchInformatieobjecttypenForZaaktype('https://some-zaaktype-url');
    expect(result).toHaveLength(1);

    // The single result should match the retrieved data
    expect(result[0]).toEqual({
      url: 'https://mock-api.com/informatieobjecttypen/abc-123',
      omschrijving: 'Document Type ABC',
    });
  });

  test('One Ground scenario: informatieobjecttype is a string/omschrijving in zaaktype-informatieobjecttypen', async () => {
    // 1) The call to /zaaktype-informatieobjecttypen?zaaktype=...
    //    We'll return one relation with a plain string as 'informatieobjecttype'
    mockAxios
      .onGet('/zaaktype-informatieobjecttypen')
      .reply(200, {
        results: [
          {
            // Typical "One Ground" style relation:
            informatieobjecttype: 'Ontwerpbesluit',
          },
        ],
      });

    // 2) The call to /informatieobjecttypen?omschrijving=Ontwerpbesluit
    //    We'll return an array with possibly multiple matches
    mockAxios
      .onGet('/informatieobjecttypen')
      .reply((config) => {
        // e.g. config.params might be { omschrijving: 'Ontwerpbesluit' }
        if (config.params?.omschrijving === 'Ontwerpbesluit') {
          return [
            200,
            {
              results: [
                {
                  url: 'https://mock-api.com/informatieobjecttypen/xyz-999',
                  omschrijving: 'Ontwerpbesluit',
                },
              ],
            },
          ];
        }
        return [200, { results: [] }];
      });

    const result = await fetcher.fetchInformatieobjecttypenForZaaktype('https://some-zaaktype-url');
    // We expect 2 matches in this scenario
    expect(result).toHaveLength(1);
    expect(result[0].omschrijving).toBe('Ontwerpbesluit'); // Has to be an exact match in One Ground "ontwerpbesluit" or "Ontwerpbeslui" gives no matches
  });

  test('Should skip relation if informatieobjecttype is null or empty', async () => {
    mockAxios
      .onGet('/zaaktype-informatieobjecttypen')
      .reply(200, {
        results: [
          { informatieobjecttype: null }, // no data
          { informatieobjecttype: '' }, // empty string
        ],
      });

    // No subsequent calls to /informatieobjecttypen should happen, because we skip these
    const result = await fetcher.fetchInformatieobjecttypenForZaaktype('some-url');
    expect(result).toHaveLength(0);
  });

  test('No results should return an empty array in zaaktype-informatieobjecttypen', async () => {
    // The API call returns an empty "results" array for the relations in in zaaktype-informatieobjecttypen
    mockAxios.onGet('/zaaktype-informatieobjecttypen').reply(200, { results: [] });

    const result = await fetcher.fetchInformatieobjecttypenForZaaktype('any-zaaktype-url');
    // No further calls to /informatieobjecttypen and an empty final result
    expect(result).toHaveLength(0);
  });
});