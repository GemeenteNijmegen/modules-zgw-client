import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as catalogi from '../../catalogi-generated-client';
import { CatalogiHttpClient } from '../CatalogiHttpClient';
import { VersionedZaaktypes } from '../VersionedZaaktypes';

describe('VersionedZaaktypes', () => {
  let mockHttpClient: CatalogiHttpClient;
  let mockAxios: MockAdapter;
  let versionedZaaktypes: VersionedZaaktypes;
  let mockZaaktypes: catalogi.ZaakType[];

  beforeAll(() => {
    mockZaaktypes = [
      {
        identificatie: 'ZAAK-001',
        versiedatum: '2023-01-01',
        beginGeldigheid: '2023-01-01',
        eindeGeldigheid: '2023-12-31',
      },
      {
        identificatie: 'ZAAK-001',
        versiedatum: '2022-01-01',
        beginGeldigheid: '2022-01-01',
        eindeGeldigheid: '2022-12-31',
      },
      {
        identificatie: 'ZAAK-002',
        versiedatum: '2023-06-01',
        beginGeldigheid: '2023-06-01',
      },
    ] as catalogi.ZaakType[] ;
  });

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    mockHttpClient = new CatalogiHttpClient({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      baseUrl: 'https://mock-api.com',
    });
    versionedZaaktypes = new VersionedZaaktypes(mockHttpClient);
  });

  afterEach(() => {
    mockAxios.reset();
  });

  test('fetchAndGroupZaaktypes should fetch and group zaaktypes by identificatie', async () => {
    mockAxios.onGet('/zaaktypen').reply(200, { results: mockZaaktypes });

    await versionedZaaktypes.fetchAndGroupZaaktypes();

    const groupedZaaktypes = versionedZaaktypes.getGroupedZaaktypes();
    expect(Object.keys(groupedZaaktypes)).toEqual(['ZAAK-001', 'ZAAK-002']);
    expect(groupedZaaktypes['ZAAK-001'].length).toBe(2);
    expect(groupedZaaktypes['ZAAK-002'].length).toBe(1);
  });

  test('getUniqueIdentificaties should return unique zaaktype identificaties', async () => {
    mockAxios.onGet('/zaaktypen').reply(200, { results: mockZaaktypes });

    await versionedZaaktypes.fetchAndGroupZaaktypes();

    const uniqueIdentificaties = versionedZaaktypes.getUniqueIdentificaties();
    expect(uniqueIdentificaties).toEqual(['ZAAK-001', 'ZAAK-002']);
  });

  test('getVersionsByIdentificatie should return versions of a zaaktype by identificatie', async () => {
    mockAxios.onGet('/zaaktypen').reply(200, { results: mockZaaktypes });

    await versionedZaaktypes.fetchAndGroupZaaktypes();

    const versions = versionedZaaktypes.getVersionsByIdentificatie('ZAAK-001');
    expect(versions).toEqual([
      {
        versiedatum: '2023-01-01',
        datumBeginGeldigheid: '2023-01-01',
        datumEindeGeldigheid: '2023-12-31',
      },
      {
        versiedatum: '2022-01-01',
        datumBeginGeldigheid: '2022-01-01',
        datumEindeGeldigheid: '2022-12-31',
      },
    ]);
  });

  test('getVersionsByIdentificatie should throw an error if identificatie does not exist', async () => {
    mockAxios.onGet('/zaaktypen').reply(200, { results: mockZaaktypes });

    await versionedZaaktypes.fetchAndGroupZaaktypes();

    expect(() => versionedZaaktypes.getVersionsByIdentificatie('ZAAK-999'))
      .toThrowError('Identificatie not found: ZAAK-999');
  });

  test('getGroupedZaaktypes should return grouped zaaktypes', async () => {
    mockAxios.onGet('/zaaktypen').reply(200, { results: mockZaaktypes });

    await versionedZaaktypes.fetchAndGroupZaaktypes();

    const groupedZaaktypes = versionedZaaktypes.getGroupedZaaktypes();
    expect(groupedZaaktypes).toHaveProperty('ZAAK-001');
    expect(groupedZaaktypes).toHaveProperty('ZAAK-002');
    expect(groupedZaaktypes['ZAAK-001'].length).toBe(2);
    expect(groupedZaaktypes['ZAAK-002'].length).toBe(1);
  });
});
