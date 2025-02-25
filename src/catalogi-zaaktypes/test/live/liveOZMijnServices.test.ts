import path from 'path';
import { describeIntegration } from '../../../test-utils/describeIntegration';
import { setupTestFileOutput } from '../../../test-utils/logToOutputFile';
import { CachedVersionedZaaktypes } from '../../CachedVersionedZaaktypes';
import { CatalogiHttpClient, CatalogiHttpClientConfig } from '../../CatalogiHttpClient';
import { VersionedZaaktype } from '../../VersionedZaaktype';
import { ZaaktypeInformatieobjecttypenFetcher } from '../../ZaaktypeInformatieobjecttypeFetcher';

const { logMessage } = setupTestFileOutput({
  logToFile: true,
  prefix: 'live-mijnservices',
  logToConsole: false,
  outputDir: path.join(__dirname, 'output'),
});
describeIntegration('Live Catalogi Zaaktypes', () => {
  const BASE_URL_CATALOGI = `https://${process.env.OZ_PREPROD_BASE_URL}/catalogi/api/v1/`;
  const CLIENT_ID = `${process.env.OZ_CLIENT_ID}`;
  const CLIENT_SECERET = `${process.env.OZ_PREPROD_CLIENT_SECRET}`;

  const httpClient = new CatalogiHttpClient({
    baseUrl: BASE_URL_CATALOGI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECERET,
  } as CatalogiHttpClientConfig);
  test('getByID', async () => {
    const versionedZaakTypes = new CachedVersionedZaaktypes(httpClient);
    await versionedZaakTypes.fetchAndGroupZaaktypes();
    const lastZaak = versionedZaakTypes.getLatestZaaktype('ZAAKTYPE-2025-0000000001');
    logMessage('=== get Zaaktype by Identificatie ===');
    logMessage(JSON.stringify(lastZaak, null, 2));
  });
  test('getInformatieObjecten', async () => {
    const vzt = new VersionedZaaktype(httpClient);
    const zaak = await vzt.getLatestZaaktypeWithVersionData('ZAAKTYPE-2025-0000000001');
    const fetcher = new ZaaktypeInformatieobjecttypenFetcher(httpClient);
    const informatieobjecttypes = await fetcher.fetchInformatieobjecttypenForZaaktype(zaak.latestZaaktype.url);
    logMessage('=== Informatieobjecttypes ===');
    logMessage(JSON.stringify(informatieobjecttypes, null, 2));
    logMessage('=== Versions ===');
    logMessage(JSON.stringify(zaak.versions, null, 2));
    logMessage('=== latestZaaktype ===');
    logMessage(JSON.stringify(zaak.latestZaaktype, null, 2));
  });
});