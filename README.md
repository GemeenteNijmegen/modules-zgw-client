# modules-zgw-client

This package generates ZGW-clients based on the api-specifications in the [VNG Gemma Zaken Github Repo](https://github.com/VNG-Realisatie/gemma-zaken/tree/master/api-specificatie/).

The package also includes helper classes and methods for the ZGW api's.

### Using the package
https://www.npmjs.com/package/@gemeentenijmegen/modules-zgw-client

Add `@gemeentenijmegen/modules-zgw-client`

Generated clients for import:
```
catalogi
documenten
zaken
```

### How to start the repo

`yarn install --frozen-lockfile`

`npx projen build`

### Generate clients command line

Command line uitvoeren van het genereren kan met:
```
npx ts-node -e "import { GenerateNewClients } from './src/client-generator/GenerateNewClients'; (async () => { const generateNewClients = new GenerateNewClients(); await generateNewClients.generateClients(); })();"
```

Er worden alleen nieuwe clients aangemaakt als deze niet aanwezig zijn. Verwijder dus een van de mappen en voer het commando uit om een nieuwe client te genereren.

### Workflow
This repo contains a (custom workflow)[./src/client-updates-custom-workflow.ts] that runs every week.
- Checks if there are new versions for the ZGW clients based on (config)[./src/client-generator/GenerateClientConfiguration.ts]
- If there are new client versions the typescript client is generated
- Latest version is updated in the index.ts
- PR is made for developers to approve