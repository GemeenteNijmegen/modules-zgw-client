import { describeIntegration } from '../../test-utils/describeIntegration';
// import { createClientConfig, generateClientConfigurations } from '../GenerateClientConfiguration';
// import { GenerateNewClients } from '../GenerateNewClients';

describeIntegration('Live GenerateNewClient for Catalagi', () => {
  // These tests do not work right now, because Jest cannot deal with the ESM module swagger-typescript-api
  // xit('should make the missing clients for ztc', async () => {
  //   const testGenerateClientConfig = [createClientConfig('catalogi', 'ztc')];
  //   const generateNewClients = new GenerateNewClients(testGenerateClientConfig);
  //   await generateNewClients.generateClients();
  // });
  // xit('should make the missing clients from the configuration', async () => {
  //   const generateNewClients = new GenerateNewClients(generateClientConfigurations);
  //   await generateNewClients.generateClients();
  // });
  it('should have an empty test', () => {
    console.log('empty');
  });
});