import path from 'path';
import { describeIntegration } from '../../../test-utils/describeIntegration';
import { setupTestFileOutput } from '../../../test-utils/logToOutputFile';
import { CachedVersionedZaaktypes } from '../../CachedVersionedZaaktypes';
import { CatalogiHttpClient, CatalogiHttpClientConfig } from '../../CatalogiHttpClient';
import { VersionedZaaktype } from '../../VersionedZaaktype';
import { ZaaktypeInformatieobjecttypenFetcher } from '../../ZaaktypeInformatieobjecttypeFetcher';
import { ZaaktypeObjectsFetcher } from '../../ZaaktypeObjectsFetcher';

const { logMessage } = setupTestFileOutput({
  logToFile: true, // Write logs to file
  prefix: 'liverx', // Output file like "liverx-1681234567890.log"
  logToConsole: false, // Do NOT show logs in console
  outputDir: path.join(__dirname, 'output'),
});

describeIntegration('Live Catalogi Zaaktypes', () => {
  const BASE_URL_CATALOGI = `https://catalogi.${process.env.RX_PREPROD_BASE_URL}/api/v1/`;
  const CLIENT_ID = `${process.env.RX_CLIENT_ID}`;
  const CLIENT_SECERET = `${process.env.RX_PREPROD_CLIENT_SECRET}`;

  const httpClient = new CatalogiHttpClient({
    baseUrl: BASE_URL_CATALOGI,
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECERET,
  } as CatalogiHttpClientConfig);
  test('zaaktype by identification', async () => {
    const versionedZaakTypes = new CachedVersionedZaaktypes(httpClient);
    await versionedZaakTypes.fetchAndGroupZaaktypes();
    const lastZaak = versionedZaakTypes.getLatestZaaktype('NMG-schaduwzaak');
    logMessage('=== get Zaaktype by Identificatie ===');
    logMessage(JSON.stringify(lastZaak, null, 2));
  });
  test('informatieobjecttypen from zaaktype', async () => {
    const vzt = new VersionedZaaktype(httpClient);
    const zaak = await vzt.getLatestZaaktypeWithVersionData('NMG-schaduwzaak');
    const fetcher = new ZaaktypeInformatieobjecttypenFetcher(httpClient);
    const informatieobjecttypes = await fetcher.fetchInformatieobjecttypenForZaaktype(zaak.latestZaaktype.url);
    logMessage('=== Informatieobjecttypes ===');
    logMessage(JSON.stringify(informatieobjecttypes, null, 2));
    logMessage('=== Versions ===');
    logMessage(JSON.stringify(zaak.versions, null, 2));
  });
  test('status eigenschappen rol from zaaktype', async () => {
    const vzt = new VersionedZaaktype(httpClient);
    const zaak = await vzt.getLatestZaaktypeWithVersionData('NMG-schaduwzaak');
    const fetcher = new ZaaktypeObjectsFetcher(httpClient, zaak.latestZaaktype);
    const objects = await fetcher.loadExtraData();
    logMessage('=== Other objects from latestZaaktype ===');
    logMessage(JSON.stringify(objects, null, 2));
  });
});