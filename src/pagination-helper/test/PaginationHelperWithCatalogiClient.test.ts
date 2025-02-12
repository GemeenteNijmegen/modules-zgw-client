import axios, { AxiosRequestConfig } from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as catalogi from '../../catalogi-generated-client';
import { getAllPaginatedResults } from '../PaginationHelpers';

const mock = new MockAdapter(axios);
const baseUrl = 'https://mock-api.test';

const mockResponsePage1: catalogi.PaginatedZaakTypeList = {
  count: 3,
  next: `${baseUrl}/zaaktypen?page=2`,
  previous: null,
  results: [
    { identificatie: 'ZT1' } as catalogi.ZaakType,
    { identificatie: 'ZT2' } as catalogi.ZaakType,
  ],
};

const mockResponsePage2: catalogi.PaginatedZaakTypeList = {
  count: 3,
  next: null,
  previous: `${baseUrl}/zaaktypen?page=1`,
  results: [{ identificatie: 'ZT3' } as catalogi.ZaakType],
};

describe('PaginationHelpers - Catalogi API', () => {
  let api: catalogi.Zaaktypen;
  let httpClient: catalogi.HttpClient;
  let apiSpy: jest.SpyInstance;

  beforeEach(() => {
    mock.reset();
    httpClient = new catalogi.HttpClient({ instance: axios } as any);
    api = new catalogi.Zaaktypen(httpClient);
    apiSpy = jest.spyOn(api, 'zaaktypeList');
    // Matchen van routes is onvoldoende hier, er moet gekeken worden naar de params met page
    mock.onGet('/zaaktypen', { params: {} }).reply(200, mockResponsePage1);
    mock.onGet('/zaaktypen', { params: { page: 2 } }).reply(200, mockResponsePage2);

    // Catch-all logging voor niet-gematchte requests
    mock.onAny().reply((config: AxiosRequestConfig) => {
      console.log(`[Mock] Geen match voor: ${config.url} ${JSON.stringify(config.params)}`);
      return [404, { error: 'Not Found' }];
    });
  });

  test('should fetch all paginated results from ZaaktypeList', async () => {
    const allZaaktypes = await getAllPaginatedResults(api.zaaktypeList, {} as catalogi.ZaaktypeListParams);
    expect(apiSpy).toHaveBeenCalledTimes(2);
    expect(allZaaktypes).toEqual([
      { identificatie: 'ZT1' },
      { identificatie: 'ZT2' },
      { identificatie: 'ZT3' },
    ]);
  });
});