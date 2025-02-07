export interface paths {
  '/bestandsdelen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    get?: never;
    /** @description Upload een bestandsdeel */
    put: operations['bestandsdeel_update'];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle (ENKELVOUDIGe) INFORMATIEOBJECTen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         *
         *     De objecten bevatten metadata over de documenten en de downloadlink
         *     (`inhoud`) naar de binary data. Alleen de laatste versie van elk
         *     (ENKELVOUDIG) INFORMATIEOBJECT wordt getoond. Specifieke versies kunnen
         *     alleen
         */
    get: operations['enkelvoudiginformatieobject_list'];
    put?: never;
    /**
         * Maak een (ENKELVOUDIG) INFORMATIEOBJECT aan.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid `informatieobjecttype` URL - de resource moet opgevraagd kunnen
         *       worden uit de catalogi API en de vorm van een INFORMATIEOBJECTTYPE hebben.
         *     - publicatie `informatieobjecttype` - `concept` moet `false` zijn
         */
    post: operations['enkelvoudiginformatieobject_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{enkelvoudiginformatieobject_uuid}/audittrail': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        enkelvoudiginformatieobject_uuid: string;
      };
      cookie?: never;
    };
    /**
         * Alle audit trail regels behorend bij het INFORMATIEOBJECT.
         * @description Alle audit trail regels behorend bij het INFORMATIEOBJECT.
         */
    get: operations['audittrail_list'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{enkelvoudiginformatieobject_uuid}/audittrail/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        enkelvoudiginformatieobject_uuid: string;
        /** @description Unieke identificatie van de audit regel. */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke audit trail regel opvragen.
         * @description Een specifieke audit trail regel opvragen.
         */
    get: operations['audittrail_read'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek (ENKELVOUDIG) INFORMATIEOBJECT opvragen.
         * @description Het object bevat metadata over het document en de downloadlink (`inhoud`)
         *     naar de binary data. Dit geeft standaard de laatste versie van het
         *     (ENKELVOUDIG) INFORMATIEOBJECT. Specifieke versies kunnen middels
         *     query-string parameters worden opgevraagd.
         */
    get: operations['enkelvoudiginformatieobject_read'];
    /**
         * Werk een (ENKELVOUDIG) INFORMATIEOBJECT in zijn geheel bij.
         * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT.
         *
         *     **Er wordt gevalideerd op**
         *     - correcte `lock` waarde
         *     - geldigheid `informatieobjecttype` URL - de resource moet opgevraagd kunnen
         *       worden uit de catalogi API en de vorm van een INFORMATIEOBJECTTYPE hebben.
         *     - publicatie `informatieobjecttype` - `concept` moet `false` zijn
         *     - status NIET `definitief`
         *
         *     *TODO*
         *     - valideer immutable attributes
         */
    put: operations['enkelvoudiginformatieobject_update'];
    post?: never;
    /**
         * Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT en alle bijbehorende versies,
         *     samen met alle gerelateerde resources binnen deze API. Dit is alleen mogelijk
         *     als er geen OBJECTINFORMATIEOBJECTen relateerd zijn aan het (ENKELVOUDIG)
         *     INFORMATIEOBJECT.
         *
         *     **Gerelateerde resources**
         *     - GEBRUIKSRECHTen
         *     - audit trail regels
         */
    delete: operations['enkelvoudiginformatieobject_delete'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ENKELVOUDIGINFORMATIEOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['enkelvoudiginformatieobject_headers'];
    /**
         * Werk een (ENKELVOUDIG) INFORMATIEOBJECT deels bij.
         * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT.
         *
         *     **Er wordt gevalideerd op**
         *     - correcte `lock` waarde
         *     - geldigheid `informatieobjecttype` URL - de resource moet opgevraagd kunnen
         *       worden uit de catalogi API en de vorm van een INFORMATIEOBJECTTYPE hebben.
         *     - publicatie `informatieobjecttype` - `concept` moet `false` zijn
         *     - status NIET `definitief`
         *
         *     *TODO*
         *     - valideer immutable attributes
         */
    patch: operations['enkelvoudiginformatieobject_partial_update'];
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{uuid}/download': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Download de binaire data van het (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Download de binaire data van het (ENKELVOUDIG) INFORMATIEOBJECT.
         */
    get: operations['enkelvoudiginformatieobject_download'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{uuid}/lock': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Vergrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Voert een "checkout" uit waardoor het (ENKELVOUDIG) INFORMATIEOBJECT
         *     vergrendeld wordt met een `lock` waarde. Alleen met deze waarde kan het
         *     (ENKELVOUDIG) INFORMATIEOBJECT bijgewerkt (`PUT`, `PATCH`) en weer
         *     ontgrendeld worden.
         */
    post: operations['enkelvoudiginformatieobject_lock'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{uuid}/unlock': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Ontgrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Heft de "checkout" op waardoor het (ENKELVOUDIG) INFORMATIEOBJECT
         *     ontgrendeld wordt.
         */
    post: operations['enkelvoudiginformatieobject_unlock'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/gebruiksrechten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle GEBRUIKSRECHTen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['gebruiksrechten_list'];
    put?: never;
    /**
         * Maak een GEBRUIKSRECHT aan.
         * @description Voeg GEBRUIKSRECHTen toe voor een INFORMATIEOBJECT.
         *
         *     **Opmerkingen**
         *       - Het toevoegen van gebruiksrechten zorgt ervoor dat de
         *         `indicatieGebruiksrecht` op het informatieobject op `true` gezet wordt.
         */
    post: operations['gebruiksrechten_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/gebruiksrechten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke GEBRUIKSRECHT opvragen.
         * @description Een specifieke GEBRUIKSRECHT opvragen.
         */
    get: operations['gebruiksrechten_read'];
    /**
         * Werk een GEBRUIKSRECHT in zijn geheel bij.
         * @description Werk een GEBRUIKSRECHT in zijn geheel bij.
         */
    put: operations['gebruiksrechten_update'];
    post?: never;
    /**
         * Verwijder een GEBRUIKSRECHT.
         * @description **Opmerkingen**
         *       - Indien het laatste GEBRUIKSRECHT van een INFORMATIEOBJECT verwijderd
         *         wordt, dan wordt de `indicatieGebruiksrecht` van het INFORMATIEOBJECT op
         *         `null` gezet.
         */
    delete: operations['gebruiksrechten_delete'];
    options?: never;
    /**
         * De headers voor een specifiek(e) GEBRUIKSRECHTEN opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['gebruiksrechten_headers'];
    /**
         * Werk een GEBRUIKSRECHT relatie deels bij.
         * @description Werk een GEBRUIKSRECHT relatie deels bij.
         */
    patch: operations['gebruiksrechten_partial_update'];
    trace?: never;
  };
  '/objectinformatieobjecten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle OBJECT-INFORMATIEOBJECT relaties opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['objectinformatieobject_list'];
    put?: never;
    /**
         * Maak een OBJECT-INFORMATIEOBJECT relatie aan.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.**
         *
         *     Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit
         *     endpoint bij het synchroniseren van relaties.
         *
         *     **Er wordt gevalideerd op**
         *     - geldigheid `informatieobject` URL
         *     - de combinatie `informatieobject` en `object` moet uniek zijn
         *     - bestaan van `object` URL
         */
    post: operations['objectinformatieobject_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/objectinformatieobjecten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
         * @description Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
         */
    get: operations['objectinformatieobject_read'];
    put?: never;
    post?: never;
    /**
         * Verwijder een OBJECT-INFORMATIEOBJECT relatie.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.**
         *
         *     Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit
         *     endpoint bij het synchroniseren van relaties.
         */
    delete: operations['objectinformatieobject_delete'];
    options?: never;
    /**
         * De headers voor een specifiek(e) OBJECTINFORMATIEOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['objectinformatieobject_headers'];
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @description De Link Object zoals gespecificeerd in https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5; Deze link kan als templated link worden aangeboden. [URI-templating is hier beschreven](https://github.com/VNG-Realisatie/Haal-Centraal-common/blob/v1.2.0/features/uri-templating.feature). */
    HalLink: {
      href: components['schemas']['Href'];
      templated?: boolean;
      /** @description Voor mens leesbaar label bij de link */
      title?: string;
    };
    /** @example https://datapunt.voorbeeldgemeente.nl/api/v{major-versie}/resourcename/{resource-identificatie} */
    Href: string;
    /**
         * @description HalPaginationLinks bevat de link properties die nodig zijn om te kunnen navigeren in een collectie:
         *     - first: uri voor het opvragen van de eerste pagina van deze collectie
         *     - previous: uri voor het opvragen van de vorige pagina van deze collectie
         *     - next: uri voor het opvragen van de volgende pagina van deze collectie
         *
         * @example {
         *       "self": {
         *         "href": "/resourcenaam?page=4"
         *       },
         *       "first": {
         *         "href": "/resourcenaam?page=1",
         *         "title": "Eerste pagina"
         *       },
         *       "previous": {
         *         "href": "/resourcenaam?page=3",
         *         "title": "Vorige pagina"
         *       },
         *       "next": {
         *         "href": "/resourcenaam?page=5",
         *         "title": "Volgende pagina"
         *       }
         *     }
         */
    HalPaginationLinks: components['schemas']['HalCollectionLinks'] & {
      first?: components['schemas']['HalLink'];
      previous?: components['schemas']['HalLink'];
      next?: components['schemas']['HalLink'];
    };
    /** @description HalCollectionLinks bevat de self link die elke HAL Resource minimaal moet hebben in zijn _links property
         *      */
    HalCollectionLinks: {
      self?: components['schemas']['HalLink'];
    };
    BestandsDeel: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Volgnummer
             * @description Een volgnummer dat de volgorde van de bestandsdelen aangeeft.
             */
      readonly volgnummer?: number;
      /**
             * Omvang
             * @description De grootte van dit specifieke bestandsdeel.
             */
      readonly omvang?: number;
      /**
             * Inhoud
             * Format: uri
             * @description De (binaire) bestandsinhoud van dit specifieke bestandsdeel.
             */
      readonly inhoud?: string;
      /**
             * Voltooid
             * @description Indicatie of dit bestandsdeel volledig is geupload. Dat wil zeggen: het aantal bytes dat staat genoemd bij grootte is daadwerkelijk ontvangen.
             */
      readonly voltooid?: boolean;
      /**
             * Lock
             * @description Hash string, which represents id of the lock of related informatieobject
             */
      lock: string;
    };
    Fout: {
      /**
             * Type
             * @description URI referentie naar het type fout, bedoeld voor developers
             */
      type?: string;
      /**
             * Code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * Title
             * @description Generieke titel voor het type fout
             */
      title: string;
      /**
             * Status
             * @description De HTTP status code
             */
      status: number;
      /**
             * Detail
             * @description Extra informatie bij de fout, indien beschikbaar
             */
      detail: string;
      /**
             * Instance
             * @description URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
             */
      instance: string;
    };
    FieldValidationError: {
      /**
             * Name
             * @description Naam van het veld met ongeldige gegevens
             */
      name: string;
      /**
             * Code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * Reason
             * @description Uitleg wat er precies fout is met de gegevens
             */
      reason: string;
    };
    ValidatieFout: {
      /**
             * Type
             * @description URI referentie naar het type fout, bedoeld voor developers
             */
      type?: string;
      /**
             * Code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * Title
             * @description Generieke titel voor het type fout
             */
      title: string;
      /**
             * Status
             * @description De HTTP status code
             */
      status: number;
      /**
             * Detail
             * @description Extra informatie bij de fout, indien beschikbaar
             */
      detail: string;
      /**
             * Instance
             * @description URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
             */
      instance: string;
      invalidParams: components['schemas']['FieldValidationError'][];
    };
    /**
         * ondertekening
         * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
         */
    Ondertekening: {
      /**
             * Ondertekeningsoort
             * @description Aanduiding van de wijze van ondertekening van het INFORMATIEOBJECT
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `analoog` - Analoog
             *     * `digitaal` - Digitaal
             *     * `pki` - PKI
             * @enum {string}
             */
      soort: 'analoog' | 'digitaal' | 'pki';
      /**
             * Ondertekeningdatum
             * Format: date
             * @description De datum waarop de ondertekening van het INFORMATIEOBJECT heeft plaatsgevonden.
             */
      datum: string;
    } | null;
    /**
         * integriteit
         * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
         */
    Integriteit: {
      /**
             * Algoritme
             * @description Aanduiding van algoritme, gebruikt om de checksum te maken.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `crc_16` - CRC-16
             *     * `crc_32` - CRC-32
             *     * `crc_64` - CRC-64
             *     * `fletcher_4` - Fletcher-4
             *     * `fletcher_8` - Fletcher-8
             *     * `fletcher_16` - Fletcher-16
             *     * `fletcher_32` - Fletcher-32
             *     * `hmac` - HMAC
             *     * `md5` - MD5
             *     * `sha_1` - SHA-1
             *     * `sha_256` - SHA-256
             *     * `sha_512` - SHA-512
             *     * `sha_3` - SHA-3
             * @enum {string}
             */
      algoritme: 'crc_16' | 'crc_32' | 'crc_64' | 'fletcher_4' | 'fletcher_8' | 'fletcher_16' | 'fletcher_32' | 'hmac' | 'md5' | 'sha_1' | 'sha_256' | 'sha_512' | 'sha_3';
      /**
             * Waarde
             * @description De waarde van de checksum.
             */
      waarde: string;
      /**
             * Datum
             * Format: date
             * @description Datum waarop de checksum is gemaakt.
             */
      datum: string;
    } | null;
    EnkelvoudigInformatieObjectHalBasis: components['schemas']['EnkelvoudigInformatieObject'] & {
      _links?: components['schemas']['EnkelvoudigInformatieObjectLinks'];
    };
    EnkelvoudigInformatieObjectHal: components['schemas']['EnkelvoudigInformatieObjectHalBasis'] & {
      _embedded?: components['schemas']['EnkelvoudigInformatieObjectEmbedded'];
    };
    EnkelvoudigInformatieObjectLinks: {
      self?: components['schemas']['schemas-HalLink'];
      informatieobjecttype?: components['schemas']['schemas-HalLink'];
    };
    EnkelvoudigInformatieObjectEmbedded: {
      informatieobjecttype?: components['schemas']['InformatieObjecttypeHalBasis'];
    };
    EnkelvoudigInformatieObjectHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['EnkelvoudigInformatieObjectHalCollectieEmbedded'];
    };
    EnkelvoudigInformatieObjectHalCollectieEmbedded: {
      enkelvoudiginformatieobjecten?: components['schemas']['EnkelvoudigInformatieObjectHal'][];
    };
    InformatieObjecttypeHalBasis: components['schemas']['InformatieObjectType'] & {
      _links?: components['schemas']['InformatieObjecttypeLinks'];
    };
    InformatieObjecttypeLinks: {
      self?: components['schemas']['schemas-HalLink'];
    };
    EnkelvoudigInformatieObject: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * Creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * Titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * Vertrouwelijkheidaanduiding
             * @description Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `openbaar` - Openbaar
             *     * `beperkt_openbaar` - Beperkt openbaar
             *     * `intern` - Intern
             *     * `zaakvertrouwelijk` - Zaakvertrouwelijk
             *     * `vertrouwelijk` - Vertrouwelijk
             *     * `confidentieel` - Confidentieel
             *     * `geheim` - Geheim
             *     * `zeer_geheim` - Zeer geheim
             * @enum {string}
             */
      vertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * Status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             * @enum {string}
             */
      status?: 'in_bewerking' | 'ter_vaststelling' | 'definitief' | 'gearchiveerd';
      /**
             * Formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * Taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `nld`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * Versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie?: number;
      /**
             * Begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie?: string;
      /**
             * Bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * Inhoud
             * Format: uri
             * @description Download URL van de binaire inhoud.
             */
      readonly inhoud?: string | null;
      /**
             * Bestandsomvang
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * Link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * Beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * Ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * Verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * Indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      ondertekening?: components['schemas']['Ondertekening'];
      integriteit?: components['schemas']['Integriteit'];
      /**
             * Informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked?: boolean;
      readonly bestandsdelen?: components['schemas']['BestandsDeel'][];
    };
    EnkelvoudigInformatieObjectCreateLockData: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * Creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * Titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * Vertrouwelijkheidaanduiding
             * @description Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `openbaar` - Openbaar
             *     * `beperkt_openbaar` - Beperkt openbaar
             *     * `intern` - Intern
             *     * `zaakvertrouwelijk` - Zaakvertrouwelijk
             *     * `vertrouwelijk` - Vertrouwelijk
             *     * `confidentieel` - Confidentieel
             *     * `geheim` - Geheim
             *     * `zeer_geheim` - Zeer geheim
             * @enum {string}
             */
      vertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * Status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             * @enum {string}
             */
      status?: 'in_bewerking' | 'ter_vaststelling' | 'definitief' | 'gearchiveerd';
      /**
             * Formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * Taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `nld`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * Versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie?: number;
      /**
             * Begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie?: string;
      /**
             * Bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * Inhoud
             * Format: bytes
             * @description Binaire inhoud, in base64 geëncodeerd.
             */
      inhoud?: string | null;
      /**
             * Bestandsomvang
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * Link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * Beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * Ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * Verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * Indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      ondertekening?: components['schemas']['Ondertekening'];
      integriteit?: components['schemas']['Integriteit'];
      /**
             * Informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked?: boolean;
      readonly bestandsdelen?: components['schemas']['BestandsDeel'][];
      /**
             * Lock
             * @description Lock id generated if the large file is created and should be used while updating the document. Documents with base64 encoded files are created without lock
             */
      readonly lock?: string;
    };
    /** Wijzigingen */
    Wijzigingen: {
      /**
             * Oud
             * @description Volledige JSON body van het object zoals dat bestond voordat de actie heeft plaatsgevonden.
             */
      oud?: Record<string, never>;
      /**
             * Nieuw
             * @description Volledige JSON body van het object na de actie.
             */
      nieuw?: Record<string, never>;
    };
    AuditTrail: {
      /**
             * Uuid
             * Format: uuid
             * @description Unieke identificatie van de audit regel.
             */
      uuid?: string;
      /**
             * Bron
             * @description De naam van het component waar de wijziging in is gedaan.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `ac` - Autorisaties API
             *     * `nrc` - Notificaties API
             *     * `zrc` - Zaken API
             *     * `ztc` - Catalogi API
             *     * `drc` - Documenten API
             *     * `brc` - Besluiten API
             *     * `cmc` - Contactmomenten API
             *     * `kc` - Klanten API
             * @enum {string}
             */
      bron: 'ac' | 'nrc' | 'zrc' | 'ztc' | 'drc' | 'brc' | 'cmc' | 'kc';
      /**
             * Request id
             * @description Een globaal "request" ID om een verzoek door het netwerk heen te traceren.
             */
      requestId?: string;
      /**
             * Applicatie id
             * @description Unieke identificatie van de applicatie, binnen de organisatie.
             */
      applicatieId?: string;
      /**
             * Applicatie weergave
             * @description Vriendelijke naam van de applicatie.
             */
      applicatieWeergave?: string;
      /**
             * Gebruikers id
             * @description Unieke identificatie van de gebruiker die binnen de organisatie herleid kan worden naar een persoon.
             */
      gebruikersId?: string;
      /**
             * Gebruikers weergave
             * @description Vriendelijke naam van de gebruiker.
             */
      gebruikersWeergave?: string;
      /**
             * Actie
             * @description De uitgevoerde handeling.
             *
             *     De bekende waardes voor dit veld zijn hieronder aangegeven,                         maar andere waardes zijn ook toegestaan
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `create` - Object aangemaakt
             *     * `list` - Lijst van objecten opgehaald
             *     * `retrieve` - Object opgehaald
             *     * `destroy` - Object verwijderd
             *     * `update` - Object bijgewerkt
             *     * `partial_update` - Object deels bijgewerkt
             */
      actie: string;
      /**
             * Actie weergave
             * @description Vriendelijke naam van de actie.
             */
      actieWeergave?: string;
      /**
             * Resultaat
             * @description HTTP status code van de API response van de uitgevoerde handeling.
             */
      resultaat: number;
      /**
             * Hoofd object
             * Format: uri
             * @description De URL naar het hoofdobject van een component.
             */
      hoofdObject: string;
      /**
             * Resource
             * @description Het type resource waarop de actie gebeurde.
             */
      resource: string;
      /**
             * Resource url
             * Format: uri
             * @description De URL naar het object.
             */
      resourceUrl: string;
      /**
             * Toelichting
             * @description Toelichting waarom de handeling is uitgevoerd.
             */
      toelichting?: string;
      /**
             * Resource weergave
             * @description Vriendelijke identificatie van het object.
             */
      resourceWeergave: string;
      /**
             * Aanmaakdatum
             * Format: date-time
             * @description De datum waarop de handeling is gedaan.
             */
      readonly aanmaakdatum?: string;
      wijzigingen: components['schemas']['Wijzigingen'];
    };
    EnkelvoudigInformatieObjectWithLockData: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * Creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * Titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * Vertrouwelijkheidaanduiding
             * @description Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `openbaar` - Openbaar
             *     * `beperkt_openbaar` - Beperkt openbaar
             *     * `intern` - Intern
             *     * `zaakvertrouwelijk` - Zaakvertrouwelijk
             *     * `vertrouwelijk` - Vertrouwelijk
             *     * `confidentieel` - Confidentieel
             *     * `geheim` - Geheim
             *     * `zeer_geheim` - Zeer geheim
             * @enum {string}
             */
      vertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * Status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             * @enum {string}
             */
      status?: 'in_bewerking' | 'ter_vaststelling' | 'definitief' | 'gearchiveerd';
      /**
             * Formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * Taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `nld`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * Versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie?: number;
      /**
             * Begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie?: string;
      /**
             * Bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * Inhoud
             * Format: bytes
             * @description Binaire inhoud, in base64 geëncodeerd.
             */
      inhoud?: string | null;
      /**
             * Bestandsomvang
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * Link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * Beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * Ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * Verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * Indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      ondertekening?: components['schemas']['Ondertekening'];
      integriteit?: components['schemas']['Integriteit'];
      /**
             * Informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked?: boolean;
      readonly bestandsdelen?: components['schemas']['BestandsDeel'][];
      /**
             * Lock
             * @description Tijdens het updaten van een document (PATCH, PUT) moet het `lock` veld opgegeven worden. Bij het aanmaken (POST) mag het geen waarde hebben.
             */
      lock: string;
    };
    LockEnkelvoudigInformatieObject: {
      /**
             * Lock
             * @description Hash string, wordt gebruikt als ID voor de lock
             */
      readonly lock?: string;
    };
    UnlockEnkelvoudigInformatieObject: {
      /**
             * Lock
             * @description Hash string, wordt gebruikt als ID voor de lock
             */
      lock?: string;
    };
    Gebruiksrechten: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * Startdatum
             * Format: date-time
             * @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum.
             */
      startdatum: string;
      /**
             * Startdatum
             * Format: date-time
             * @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn.
             */
      einddatum?: string | null;
      /**
             * Omschrijving voorwaarden
             * @description Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
             */
      omschrijvingVoorwaarden: string;
    };
    ObjectInformatieObjectHalBasis: components['schemas']['ObjectInformatieObject'] & {
      _links?: components['schemas']['ObjectInformatieObjectLinks'];
    };
    ObjectInformatieObjectHal: components['schemas']['ObjectInformatieObjectHalBasis'] & {
      _embedded?: components['schemas']['ObjectInformatieObjectEmbedded'];
    };
    ObjectInformatieObjectLinks: {
      self?: components['schemas']['schemas-HalLink'];
      informatieobject?: components['schemas']['schemas-HalLink'];
      object?: components['schemas']['schemas-HalLink'];
    };
    ObjectInformatieObjectEmbedded: {
      informatieobject?: components['schemas']['EnkelvoudigInformatieObjectHal'];
    };
    ObjectInformatieObjectHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['ObjectInformatieObjectHalCollectieEmbedded'];
    };
    ObjectInformatieObjectHalCollectieEmbedded: {
      objectinformatieobjecten?: components['schemas']['ObjectInformatieObjectHal'][];
    };
    ObjectInformatieObject: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * Object
             * Format: uri
             * @description URL-referentie naar het gerelateerde OBJECT (in deze of een andere API).
             */
      object: string;
      /**
             * Objecttype
             * @description Het type van het gerelateerde OBJECT.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `besluit` - Besluit
             *     * `zaak` - Zaak
             * @enum {string}
             */
      objectType: 'besluit' | 'zaak' | 'verzoek';
    };
    /** @description De Link Object zoals gespecificeerd in https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5; Deze link kan als templated link worden aangeboden. [URI-templating is hier beschreven](https://github.com/VNG-Realisatie/API-Kennisbank/blob/master/common/features/uri-templating.feature). */
    'schemas-HalLink': {
      href: components['schemas']['Href'];
      templated?: boolean;
      /** @description Voor mens leesbaar label bij de link */
      title?: string;
    };
    InformatieObjectType: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Maakt deel uit van
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort.
             */
      catalogus: string;
      /**
             * Omschrijving
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      omschrijving: string;
      /**
             * Vertrouwelijkheidaanduiding
             * @description Aanduiding van de mate waarin informatieobjecten van dit INFORMATIEOBJECTTYPE voor de openbaarheid bestemd zijn.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `openbaar` - Openbaar
             *     * `beperkt_openbaar` - Beperkt openbaar
             *     * `intern` - Intern
             *     * `zaakvertrouwelijk` - Zaakvertrouwelijk
             *     * `vertrouwelijk` - Vertrouwelijk
             *     * `confidentieel` - Confidentieel
             *     * `geheim` - Geheim
             *     * `zeer_geheim` - Zeer geheim
             * @enum {string}
             */
      vertrouwelijkheidaanduiding: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid: string;
      /**
             * Einde geldigheid
             * Format: date
             * @description De datum waarop het is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * Concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept?: boolean;
    };
  };
  responses: never;
  parameters: never;
  requestBodies: {
    EnkelvoudigInformatieObjectWithLockData: {
      content: {
        'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLockData'];
      };
    };
    Gebruiksrechten: {
      content: {
        'application/json': components['schemas']['Gebruiksrechten'];
      };
    };
  };
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  bestandsdeel_update: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'multipart/form-data': {
          /**
                     * Format: binary
                     * @description De (binaire) bestandsinhoud van dit specifieke bestandsdeel.
                     */
          inhoud?: string;
          /** @description Hash string, which represents id of the lock of related informatieobject */
          lock: string;
        };
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['BestandsDeel'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_list: {
    parameters: {
      query?: {
        /** @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT. */
        identificatie?: string;
        /** @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd. */
        bronorganisatie?: string;
        /** @description Een pagina binnen de gepagineerde set resultaten. */
        page?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            count: number;
            /** Format: uri */
            next?: string | null;
            /** Format: uri */
            previous?: string | null;
            results: components['schemas']['EnkelvoudigInformatieObject'][];
          };
          'application/hal+json': components['schemas']['EnkelvoudigInformatieObjectHalCollectie'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_create: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['EnkelvoudigInformatieObjectCreateLockData'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EnkelvoudigInformatieObjectCreateLockData'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Request entity too large */
      413: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  audittrail_list: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        enkelvoudiginformatieobject_uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['AuditTrail'][];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  audittrail_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        enkelvoudiginformatieobject_uuid: string;
        /** @description Unieke identificatie van de audit regel. */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['AuditTrail'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_read: {
    parameters: {
      query?: {
        /** @description Het (automatische) versienummer van het INFORMATIEOBJECT. */
        versie?: number;
        /** @description Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
        registratieOp?: string;
      };
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EnkelvoudigInformatieObject'];
          'application/hal+json': components['schemas']['EnkelvoudigInformatieObjectHal'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_update: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['EnkelvoudigInformatieObjectWithLockData'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLockData'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Request entity too large */
      413: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_headers: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  enkelvoudiginformatieobject_partial_update: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['EnkelvoudigInformatieObjectWithLockData'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLockData'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Request entity too large */
      413: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_download: {
    parameters: {
      query?: {
        /** @description Het (automatische) versienummer van het INFORMATIEOBJECT. */
        versie?: number;
        /** @description Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
        registratieOp?: string;
      };
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description De binaire bestandsinhoud */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': string;
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Throttled */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/octet-stream': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_lock: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['LockEnkelvoudigInformatieObject'];
      };
    };
    responses: {
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['LockEnkelvoudigInformatieObject'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Throttled */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_unlock: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['UnlockEnkelvoudigInformatieObject'];
      };
    };
    responses: {
      /** @description No content */
      204: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Throttled */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het INFORMATIEOBJECT. */
        informatieobject?: string;
        /** @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
        startdatum__lt?: string;
        /** @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
        startdatum__lte?: string;
        /** @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
        startdatum__gt?: string;
        /** @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
        startdatum__gte?: string;
        /** @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
        einddatum__lt?: string;
        /** @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
        einddatum__lte?: string;
        /** @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
        einddatum__gt?: string;
        /** @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
        einddatum__gte?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Gebruiksrechten'][];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_create: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: components['requestBodies']['Gebruiksrechten'];
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Gebruiksrechten'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Gebruiksrechten'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_update: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Gebruiksrechten'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Gebruiksrechten'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  gebruiksrechten_headers: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  gebruiksrechten_partial_update: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identificatie van de applicatie die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-Application-Id'?: string;
        /** @description Identificatie van de gebruiker die het verzoek stuurt (indien NLX wordt gebruikt). */
        'X-NLX-Request-User-Id'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Gebruiksrechten'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Gebruiksrechten'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  objectinformatieobject_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het gerelateerde OBJECT (in deze of een andere API). */
        object?: string;
        /** @description URL-referentie naar het INFORMATIEOBJECT. */
        informatieobject?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ObjectInformatieObject'][];
          'application/hal+json': components['schemas']['ObjectInformatieObjectHalCollectie'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  objectinformatieobject_create: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ObjectInformatieObject'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ObjectInformatieObject'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  objectinformatieobject_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ObjectInformatieObject'];
          'application/hal+json': components['schemas']['ObjectInformatieObjectHal'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  objectinformatieobject_delete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Unauthorized */
      401: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Conflict */
      409: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  objectinformatieobject_headers: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoord de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
