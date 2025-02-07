export interface paths {
  '/bestandsdelen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    /**
         * Upload een bestandsdeel.
         * @description based on DRF mixin but without partial_update
         */
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
         *     De objecten bevatten metadata over de documenten en de downloadlink (`inhoud`) naar de binary data. Alleen de laatste versie van elk(ENKELVOUDIG) INFORMATIEOBJECT wordt getoond. Specifieke versies kunnen alleen
         */
    get: operations['enkelvoudiginformatieobject_list'];
    put?: never;
    /**
         * Maak een (ENKELVOUDIG) INFORMATIEOBJECT aan.
         * @description **Er wordt gevalideerd op**
         *      - geldigheid `informatieobjecttype` URL - de resource moet opgevraagd kunnen worden uit de catalogi API en de vorm van een INFORMATIEOBJECTTYPE hebben.
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
      path?: never;
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
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke audit trail regel opvragen.
         * @description Een specifieke audit trail regel opvragen.
         */
    get: operations['audittrail_retrieve'];
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
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifiek (ENKELVOUDIG) INFORMATIEOBJECT opvragen.
         * @description  Het object bevat metadata over het document en de downloadlink (`inhoud`) naar de binary data. Dit geeft standaard de laatste versie van het (ENKELVOUDIG) INFORMATIEOBJECT. Specifieke versies kunnen middels query-string parameters worden opgevraagd.
         */
    get: operations['enkelvoudiginformatieobject_retrieve'];
    /**
         * Werk een (ENKELVOUDIG) INFORMATIEOBJECT in zijn geheel bij.
         * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT.
         *
         *     **Er wordt gevalideerd op**
         *     - correcte `lock` waarde
         *     - status NIET `definitief`
         */
    put: operations['enkelvoudiginformatieobject_update'];
    post?: never;
    /**
         * Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT en alle bijbehorende versies, samen met alle gerelateerde resources binnen deze API. Dit is alleen mogelijk als er geen OBJECTINFORMATIEOBJECTen relateerd zijn aan het (ENKELVOUDIG) INFORMATIEOBJECT.
         *
         *     **Gerelateerde resources**
         *     - GEBRUIKSRECHTen
         *     - audit trail regels
         */
    delete: operations['enkelvoudiginformatieobject_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ENKELVOUDIG INFORMATIE OBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['enkelvoudiginformatieobject_headers'];
    /**
         * Werk een (ENKELVOUDIG) INFORMATIEOBJECT deels bij.
         * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT.
         *
         *     **Er wordt gevalideerd op**
         *      - correcte `lock` waarde
         *      - status NIET `definitief`
         */
    patch: operations['enkelvoudiginformatieobject_partial_update'];
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/{uuid}/download': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
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
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Vergrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Voert een 'checkout' uit waardoor het (ENKELVOUDIG) INFORMATIEOBJECTvergrendeld wordt met een `lock` waarde. Alleen met deze waarde kan het(ENKELVOUDIG) INFORMATIEOBJECT bijgewerkt (`PUT`, `PATCH`) en weerontgrendeld worden.
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
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Ontgrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
         * @description Heft de 'checkout' op waardoor het (ENKELVOUDIG) INFORMATIEOBJECTontgrendeld wordt.
         */
    post: operations['enkelvoudiginformatieobject_unlock'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/enkelvoudiginformatieobjecten/_zoek': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Voer een zoekopdracht uit op (ENKELVOUDIG) INFORMATIEOBJECTen.
         * @description Zoeken/filteren gaat normaal via de `list` operatie, deze is echter niet geschikt voor zoekopdrachten met UUIDs.
         */
    post: operations['enkelvoudiginformatieobject__zoek'];
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
         *     **Opmerkingen**
         *        - Het toevoegen van gebruiksrechten zorgt ervoor dat de  `indicatieGebruiksrecht` op het informatieobject op `true` gezet wordt.
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
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke GEBRUIKSRECHT opvragen.
         * @description Een specifieke GEBRUIKSRECHT opvragen.
         */
    get: operations['gebruiksrechten_retrieve'];
    /**
         * Werk een GEBRUIKSRECHT in zijn geheel bij.
         * @description Werk een GEBRUIKSRECHT in zijn geheel bij.
         */
    put: operations['gebruiksrechten_update'];
    post?: never;
    /**
         * Verwijder een GEBRUIKSRECHT.
         * @description
         *     **Opmerkingen**
         *       - Indien het laatste GEBRUIKSRECHT van een INFORMATIEOBJECT verwijderd  wordt, dan wordt de `indicatieGebruiksrecht` van het INFORMATIEOBJECT op`null` gezet.
         */
    delete: operations['gebruiksrechten_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) GEBRUIKSRECHT INFORMATIEOBJECT opvragen
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
         * @description  Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['objectinformatieobject_list'];
    put?: never;
    /**
         * Maak een OBJECT-INFORMATIEOBJECT relatie aan.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.** Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit endpoint bij het synchroniseren van relaties. **Er wordt gevalideerd op** - geldigheid `informatieobject` URL - de combinatie `informatieobject` en `object` moet uniek zijn - bestaan van `object` URL
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
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
         * @description Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
         */
    get: operations['objectinformatieobject_retrieve'];
    put?: never;
    post?: never;
    /**
         * Verwijder een OBJECT-INFORMATIEOBJECT relatie.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.** Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit endpoint bij het synchroniseren van relaties.
         */
    delete: operations['objectinformatieobject_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) OOBJECT-INFORMATIEOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['objectinformatieobject_headers'];
    patch?: never;
    trace?: never;
  };
  '/verzendingen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle VERZENDINGen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['verzending_list'];
    put?: never;
    /**
         * Maak een VERZENDING aan.
         * @description Voeg VERZENDINGen toe voor een INFORMATIEOBJECT en een BETROKKENE.
         */
    post: operations['verzending_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/verzendingen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke VERZENDING opvragen.
         * @description Een specifieke VERZENDING opvragen.
         */
    get: operations['verzending_retrieve'];
    /**
         * Werk een VERZENDING in zijn geheel bij.
         * @description Werk een VERZENDING in zijn geheel bij.
         */
    put: operations['verzending_update'];
    post?: never;
    /**
         * Verwijder een VERZENDING
         * @description Verwijder een VERZENDING.
         */
    delete: operations['verzending_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) VERZENDING opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['verzending_headers'];
    /**
         * Werk een VERZENDING relatie deels bij.
         * @description Werk een VERZENDING relatie deels bij.
         */
    patch: operations['verzending_partial_update'];
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @enum {string} */
    AardRelatieEnum: 'afzender' | 'geadresseerde';
    /** @enum {string} */
    AlgoritmeEnum: 'crc_16' | 'crc_32' | 'crc_64' | 'fletcher_4' | 'fletcher_8' | 'fletcher_16' | 'fletcher_32' | 'hmac' | 'md5' | 'sha_1' | 'sha_256' | 'sha_512' | 'sha_3';
    AuditTrail: {
      /**
             * uuid
             * Format: uuid
             * @description Unieke identificatie van de audit regel.
             */
      uuid?: string;
      /**
             * bron
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
             *     * `vrc` - Verzoeken API
             */
      bron: components['schemas']['BronEnum'];
      /**
             * applicatie id
             * @description Unieke identificatie van de applicatie, binnen de organisatie.
             */
      applicatieId?: string;
      /**
             * applicatie weergave
             * @description Vriendelijke naam van de applicatie.
             */
      applicatieWeergave?: string;
      /**
             * gebruikers id
             * @description Unieke identificatie van de gebruiker die binnen de organisatie herleid kan worden naar een persoon.
             */
      gebruikersId?: string;
      /**
             * gebruikers weergave
             * @description Vriendelijke naam van de gebruiker.
             */
      gebruikersWeergave?: string;
      /**
             * actie
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
             * actie weergave
             * @description Vriendelijke naam van de actie.
             */
      actieWeergave?: string;
      /**
             * resultaat
             * @description HTTP status code van de API response van de uitgevoerde handeling.
             */
      resultaat: number;
      /**
             * hoofd object
             * Format: uri
             * @description De URL naar het hoofdobject van een component.
             */
      hoofdObject: string;
      /**
             * resource
             * @description Het type resource waarop de actie gebeurde.
             */
      resource: string;
      /**
             * resource url
             * Format: uri
             * @description De URL naar het object.
             */
      resourceUrl: string;
      /**
             * toelichting
             * @description Toelichting waarom de handeling is uitgevoerd.
             */
      toelichting?: string;
      /**
             * resource weergave
             * @description Vriendelijke identificatie van het object.
             */
      resourceWeergave: string;
      /**
             * aanmaakdatum
             * Format: date-time
             * @description De datum waarop de handeling is gedaan.
             */
      readonly aanmaakdatum: string;
      /** wijzigingen */
      wijzigingen: components['schemas']['Wijzigingen'];
    };
    BestandsDeel: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * volgnummer
             * @description Een volgnummer dat de volgorde van de bestandsdelen aangeeft.
             */
      readonly volgnummer: number;
      /**
             * omvang
             * @description De grootte van dit specifieke bestandsdeel.
             */
      readonly omvang: number;
      /**
             * voltooid
             * @description Indicatie of dit bestandsdeel volledig is geupload. Dat wil zeggen: het aantal bytes dat staat genoemd bij grootte is daadwerkelijk ontvangen.
             */
      readonly voltooid: boolean;
      /**
             * lock
             * @description Hash string, which represents id of the lock of related informatieobject
             */
      lock: string;
    };
    BestandsDeelRequest: {
      /**
             * inhoud
             * Format: binary
             * @description De (binaire) bestandsinhoud van dit specifieke bestandsdeel.
             */
      inhoud?: string;
      /**
             * lock
             * @description Hash string, which represents id of the lock of related informatieobject
             */
      lock: string;
    };
    BestandsDeelResponse: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * lock
             * @description Hash string, which represents id of the lock of related informatieobject
             */
      lock: string;
      /**
             * omvang
             * @description De grootte van dit specifieke bestandsdeel.
             */
      omvang?: number;
      /**
             * inhoud
             * Format: uri
             * @description De URL naar de bestandsinhoud van dit specifieke bestandsdeel.
             */
      inhoud?: string;
      /**
             * voltooid
             * @description Indicatie of dit bestandsdeel volledig is geupload. Dat wil zeggen: het aantal bytes dat staat genoemd bij grootte is daadwerkelijk ontvangen.
             */
      voltooid?: boolean;
      /**
             * volgnummer
             * @description Een volgnummer dat de volgorde van de bestandsdelen aangeeft.
             */
      volgnummer?: number;
    };
    /** @description Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE. */
    BinnenlandsCorrespondentieadresVerzending: {
      /**
             * huisletter
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.
             */
      huisletter?: string;
      /**
             * huisnummer
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nummering.
             */
      huisnummer: number;
      /**
             * huisnummer toevoeging
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.
             */
      huisnummerToevoeging?: string;
      /**
             * naam openbare ruimte
             * @description Een door het bevoegde gemeentelijke orgaan aan een GEMEENTELIJKE  OPENBARE RUIMTE toegekende benaming.
             */
      naamOpenbareRuimte: string;
      /**
             * postcode
             * @description De door TNT Post vastgestelde code behorende bij een bepaalde combinatie van een naam van een woonplaats, naam van een openbare ruimte en een huisnummer.
             */
      postcode?: string;
      /**
             * woonplaatsnaam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsnaam: string;
    } | null;
    /** @description Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE. */
    BinnenlandsCorrespondentieadresVerzendingRequest: {
      /**
             * huisletter
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.
             */
      huisletter?: string;
      /**
             * huisnummer
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nummering.
             */
      huisnummer: number;
      /**
             * huisnummer toevoeging
             * @description Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.
             */
      huisnummerToevoeging?: string;
      /**
             * naam openbare ruimte
             * @description Een door het bevoegde gemeentelijke orgaan aan een GEMEENTELIJKE  OPENBARE RUIMTE toegekende benaming.
             */
      naamOpenbareRuimte: string;
      /**
             * postcode
             * @description De door TNT Post vastgestelde code behorende bij een bepaalde combinatie van een naam van een woonplaats, naam van een openbare ruimte en een huisnummer.
             */
      postcode?: string;
      /**
             * woonplaatsnaam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsnaam: string;
    } | null;
    /** @enum {unknown} */
    BlankEnum: '';
    /** @enum {string} */
    BronEnum: 'ac' | 'nrc' | 'zrc' | 'ztc' | 'drc' | 'brc' | 'cmc' | 'kc' | 'vrc';
    /** @description De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
    BuitenlandsCorrespondentieadresVerzending: {
      /**
             * adres buitenland 1
             * @description Het eerste deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland1: string;
      /**
             * adres buitenland 2
             * @description Het tweede deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland2?: string;
      /**
             * adres buitenland 3
             * @description Het derde deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland3?: string;
      /**
             * land postadres
             * Format: uri
             * @description Het LAND dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      landPostadres: string;
    } | null;
    /** @description De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
    BuitenlandsCorrespondentieadresVerzendingRequest: {
      /**
             * adres buitenland 1
             * @description Het eerste deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland1: string;
      /**
             * adres buitenland 2
             * @description Het tweede deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland2?: string;
      /**
             * adres buitenland 3
             * @description Het derde deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      adresBuitenland3?: string;
      /**
             * land postadres
             * Format: uri
             * @description Het LAND dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
             */
      landPostadres: string;
    } | null;
    /** @description De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
    BuitenlandsCorrespondentiepostadresVerzending: {
      /**
             * Postbus-of antwoordnummer
             * @description De numerieke aanduiding zoals deze door de Nederlandse PTT is vastgesteld voor postbusadressen en antwoordnummeradressen.
             */
      postBusOfAntwoordnummer: number;
      /**
             * postadres postcode
             * @description De officiële Nederlandse PTT codering, bestaande uit een numerieke woonplaatscode en een alfabetische lettercode.
             */
      postadresPostcode: string;
      /**
             * Postadrestype
             * @description Aanduiding van het soort postadres.
             */
      postadresType: components['schemas']['PostadresTypeEnum'];
      /**
             * woonplaatsnaam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsnaam: string;
    } | null;
    /** @description De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
    BuitenlandsCorrespondentiepostadresVerzendingRequest: {
      /**
             * Postbus-of antwoordnummer
             * @description De numerieke aanduiding zoals deze door de Nederlandse PTT is vastgesteld voor postbusadressen en antwoordnummeradressen.
             */
      postBusOfAntwoordnummer: number;
      /**
             * postadres postcode
             * @description De officiële Nederlandse PTT codering, bestaande uit een numerieke woonplaatscode en een alfabetische lettercode.
             */
      postadresPostcode: string;
      /**
             * Postadrestype
             * @description Aanduiding van het soort postadres.
             */
      postadresType: components['schemas']['PostadresTypeEnum'];
      /**
             * woonplaatsnaam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsnaam: string;
    } | null;
    EIOZoekRequest: {
      /**
             * uuid__in
             * @description Array of unieke resource identifiers (UUID4)
             */
      uuid_In: string[];
    };
    /** @description Serializer for the EnkelvoudigInformatieObject model */
    EnkelvoudigInformatieObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie: number;
      /**
             * begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: uri
             * @description Download URL van de binaire inhoud.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['Ondertekening'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['Integriteit'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked: boolean;
      /** bestandsdelen */
      readonly bestandsdelen: components['schemas']['BestandsDeel'][];
    };
    /** @description This serializer class is used by EnkelvoudigInformatieObjectViewSet for
         *     create operation for large files */
    EnkelvoudigInformatieObjectCreateLock: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie: number;
      /**
             * begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: uri
             * @description Download URL van de binaire inhoud.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['Ondertekening'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['Integriteit'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked: boolean;
      /** bestandsdelen */
      readonly bestandsdelen: components['schemas']['BestandsDeel'][];
      /**
             * lock
             * @description Lock id generated if the large file is created and should be used while updating the document. Documents with base64 encoded files are created without lock
             */
      readonly lock: string;
    };
    /** @description This serializer class is used by EnkelvoudigInformatieObjectViewSet for
         *     create operation for large files */
    EnkelvoudigInformatieObjectCreateLockRequest: {
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: byte
             * @description Binaire inhoud, in base64 geëncodeerd.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['OndertekeningRequest'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['IntegriteitRequest'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
    };
    /** @description This serializer class is used by EnkelvoudigInformatieObjectViewSet for
         *     update and partial_update operations */
    EnkelvoudigInformatieObjectWithLock: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * versie
             * @description Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
             */
      readonly versie: number;
      /**
             * begin registratie
             * Format: date-time
             * @description Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
             */
      readonly beginRegistratie: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: uri
             * @description Download URL van de binaire inhoud.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['Ondertekening'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['Integriteit'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * locked
             * @description Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
             */
      readonly locked: boolean;
      /** bestandsdelen */
      readonly bestandsdelen: components['schemas']['BestandsDeel'][];
    };
    /** @description This serializer class is used by EnkelvoudigInformatieObjectViewSet for
         *     update and partial_update operations */
    EnkelvoudigInformatieObjectWithLockRequest: {
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: byte
             * @description Binaire inhoud, in base64 geëncodeerd.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['OndertekeningRequest'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['IntegriteitRequest'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype: string;
      /**
             * lock
             * @description Tijdens het updaten van een document (PATCH, PUT) moet het `lock` veld opgegeven worden. Bij het aanmaken (POST) mag het geen waarde hebben.
             */
      lock: string;
    };
    /** @description Formaat van validatiefouten. */
    FieldValidationError: {
      /**
             * name
             * @description Naam van het veld met ongeldige gegevens
             */
      name: string;
      /**
             * code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * reason
             * @description Uitleg wat er precies fout is met de gegevens
             */
      reason: string;
    };
    /** @description Formaat van HTTP 4xx en 5xx fouten. */
    Fout: {
      /**
             * type
             * @description URI referentie naar het type fout, bedoeld voor developers
             */
      type?: string;
      /**
             * code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * title
             * @description Generieke titel voor het type fout
             */
      title: string;
      /**
             * status
             * @description De HTTP status code
             */
      status: number;
      /**
             * detail
             * @description Extra informatie bij de fout, indien beschikbaar
             */
      detail: string;
      /**
             * instance
             * @description URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
             */
      instance: string;
    };
    Gebruiksrechten: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * startdatum
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
             * omschrijving voorwaarden
             * @description Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
             */
      omschrijvingVoorwaarden: string;
    };
    GebruiksrechtenRequest: {
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * startdatum
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
             * omschrijving voorwaarden
             * @description Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
             */
      omschrijvingVoorwaarden: string;
    };
    /** @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand. */
    Integriteit: {
      /**
             * integriteit algoritme
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
             */
      algoritme: components['schemas']['AlgoritmeEnum'];
      /**
             * integriteit waarde
             * @description De waarde van de checksum.
             */
      waarde: string;
      /**
             * integriteit datum
             * Format: date
             * @description Datum waarop de checksum is gemaakt.
             */
      datum: string;
    } | null;
    /** @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand. */
    IntegriteitRequest: {
      /**
             * integriteit algoritme
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
             */
      algoritme: components['schemas']['AlgoritmeEnum'];
      /**
             * integriteit waarde
             * @description De waarde van de checksum.
             */
      waarde: string;
      /**
             * integriteit datum
             * Format: date
             * @description Datum waarop de checksum is gemaakt.
             */
      datum: string;
    } | null;
    /** @description Serializer for the lock action of EnkelvoudigInformatieObjectCanonical
         *     model */
    LockEnkelvoudigInformatieObject: {
      /**
             * lock
             * @description Hash string, wordt gebruikt als ID voor de lock
             */
      readonly lock: string;
    };
    ObjectInformatieObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * object
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
             */
      objectType: components['schemas']['ObjectTypeEnum'];
    };
    ObjectInformatieObjectRequest: {
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject: string;
      /**
             * object
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
             */
      objectType: components['schemas']['ObjectTypeEnum'];
    };
    /** @enum {string} */
    ObjectTypeEnum: 'besluit' | 'zaak' | 'verzoek';
    /** @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft. */
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
             */
      soort: components['schemas']['SoortEnum'];
      /**
             * Ondertekeningdatum
             * Format: date
             * @description De datum waarop de ondertekening van het INFORMATIEOBJECT heeft plaatsgevonden.
             */
      datum: string;
    } | null;
    /** @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft. */
    OndertekeningRequest: {
      /**
             * Ondertekeningsoort
             * @description Aanduiding van de wijze van ondertekening van het INFORMATIEOBJECT
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `analoog` - Analoog
             *     * `digitaal` - Digitaal
             *     * `pki` - PKI
             */
      soort: components['schemas']['SoortEnum'];
      /**
             * Ondertekeningdatum
             * Format: date
             * @description De datum waarop de ondertekening van het INFORMATIEOBJECT heeft plaatsgevonden.
             */
      datum: string;
    } | null;
    PaginatedEnkelvoudigInformatieObjectList: {
      /** @example 123 */
      count?: number;
      /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
      next?: string | null;
      /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
      previous?: string | null;
      results?: components['schemas']['EnkelvoudigInformatieObject'][];
    };
    PaginatedVerzendingList: {
      /** @example 123 */
      count?: number;
      /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=4
             */
      next?: string | null;
      /**
             * Format: uri
             * @example http://api.example.org/accounts/?page=2
             */
      previous?: string | null;
      results?: components['schemas']['Verzending'][];
    };
    /** @description This serializer class is used by EnkelvoudigInformatieObjectViewSet for
         *     update and partial_update operations */
    PatchedEnkelvoudigInformatieObjectWithLockRequest: {
      /**
             * identificatie
             * @description Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
             */
      bronorganisatie?: string;
      /**
             * creatiedatum
             * Format: date
             * @description Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
             */
      creatiedatum?: string;
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT formeel bekend is.
             */
      titel?: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'] | components['schemas']['BlankEnum'];
      /**
             * auteur
             * @description De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
             */
      auteur?: string;
      /**
             * status
             * @description Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
             *     * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
             *     * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
             *     * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
             */
      status?: components['schemas']['StatusEnum'] | components['schemas']['BlankEnum'];
      /**
             * formaat
             * @description Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
             */
      formaat?: string;
      /**
             * taal
             * @description Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
             */
      taal?: string;
      /**
             * bestandsnaam
             * @description De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
             */
      bestandsnaam?: string;
      /**
             * inhoud
             * Format: byte
             * @description Binaire inhoud, in base64 geëncodeerd.
             */
      inhoud?: string | null;
      /**
             * bestandsomvang
             * Format: int64
             * @description Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
             */
      bestandsomvang?: number | null;
      /**
             * link
             * Format: uri
             * @description De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
             */
      link?: string;
      /**
             * beschrijving
             * @description Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
             */
      verzenddatum?: string | null;
      /**
             * indicatie gebruiksrecht
             * @description Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
             */
      indicatieGebruiksrecht?: boolean | null;
      /**
             * verschijningsvorm
             * @description De essentiële opmaakaspecten van een INFORMATIEOBJECT.
             */
      verschijningsvorm?: string;
      /**
             * ondertekening
             * @description Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
             */
      ondertekening?: components['schemas']['OndertekeningRequest'] | null;
      /**
             * integriteit
             * @description Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
             */
      integriteit?: components['schemas']['IntegriteitRequest'] | null;
      /**
             * informatieobjecttype
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
             */
      informatieobjecttype?: string;
      /**
             * lock
             * @description Tijdens het updaten van een document (PATCH, PUT) moet het `lock` veld opgegeven worden. Bij het aanmaken (POST) mag het geen waarde hebben.
             */
      lock?: string;
    };
    PatchedGebruiksrechtenRequest: {
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT.
             */
      informatieobject?: string;
      /**
             * startdatum
             * Format: date-time
             * @description Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum.
             */
      startdatum?: string;
      /**
             * Startdatum
             * Format: date-time
             * @description Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn.
             */
      einddatum?: string | null;
      /**
             * omschrijving voorwaarden
             * @description Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
             */
      omschrijvingVoorwaarden?: string;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    PatchedVerzendingRequest: {
      /**
             * betrokkene
             * Format: uri
             * @description URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
             */
      betrokkene?: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het informatieobject dat is ontvangen of verzonden.
             */
      informatieobject?: string;
      /**
             * aard relatie
             * @description Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
             */
      aardRelatie?: components['schemas']['AardRelatieEnum'];
      /**
             * toelichting
             * @description Verduidelijking van de afzender- of geadresseerde-relatie.
             */
      toelichting?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
             */
      verzenddatum?: string | null;
      /**
             * Contactpersoon
             * Format: uri
             * @description URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactPersoon?: string;
      /**
             * contactpersoonnaam
             * @description De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactpersoonnaam?: string;
      /**
             * binnenlandsCorrespondentieadres
             * @description Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
             */
      binnenlandsCorrespondentieadres?: components['schemas']['BinnenlandsCorrespondentieadresVerzendingRequest'] | null;
      /**
             * buitenlandsCorrespondentieadres
             * @description De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      buitenlandsCorrespondentieadres?: components['schemas']['BuitenlandsCorrespondentieadresVerzendingRequest'] | null;
      /**
             * correspondentiePostadres
             * @description De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      correspondentiePostadres?: components['schemas']['BuitenlandsCorrespondentiepostadresVerzendingRequest'] | null;
      /**
             * faxnummer
             * @description faxnummer van de ontvanger of afzender.
             */
      faxnummer?: string | null;
      /**
             * emailadres
             * @description emailadres van de ontvanger of afzender.
             */
      emailadres?: string | null;
      /**
             * mijn overheid
             * @description is het informatieobject verzonden via mijnOverheid naar de ontvanger.
             */
      mijnOverheid?: boolean;
      /**
             * telefoonnummer
             * @description telefoonnummer van de ontvanger of afzender.
             */
      telefoonnummer?: string | null;
    };
    /** @enum {string} */
    PostadresTypeEnum: 'antwoordnummer' | 'postbusnummer';
    /** @enum {string} */
    SoortEnum: 'analoog' | 'digitaal' | 'pki';
    /** @enum {string} */
    StatusEnum: 'in_bewerking' | 'ter_vaststelling' | 'definitief' | 'gearchiveerd';
    /** @description Serializer for the unlock action of EnkelvoudigInformatieObjectCanonical
         *     model */
    UnlockEnkelvoudigInformatieObjectRequest: {
      /**
             * lock
             * @description Hash string, wordt gebruikt als ID voor de lock
             */
      lock?: string;
    };
    /** @description Formaat van HTTP 4xx en 5xx fouten. */
    ValidatieFout: {
      /**
             * type
             * @description URI referentie naar het type fout, bedoeld voor developers
             */
      type?: string;
      /**
             * code
             * @description Systeemcode die het type fout aangeeft
             */
      code: string;
      /**
             * title
             * @description Generieke titel voor het type fout
             */
      title: string;
      /**
             * status
             * @description De HTTP status code
             */
      status: number;
      /**
             * detail
             * @description Extra informatie bij de fout, indien beschikbaar
             */
      detail: string;
      /**
             * instance
             * @description URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
             */
      instance: string;
      /** invalidParams */
      invalidParams: components['schemas']['FieldValidationError'][];
    };
    /** @enum {string} */
    VertrouwelijkheidaanduidingEnum: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    Verzending: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * betrokkene
             * Format: uri
             * @description URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
             */
      betrokkene: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het informatieobject dat is ontvangen of verzonden.
             */
      informatieobject: string;
      /**
             * aard relatie
             * @description Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
             */
      aardRelatie: components['schemas']['AardRelatieEnum'];
      /**
             * toelichting
             * @description Verduidelijking van de afzender- of geadresseerde-relatie.
             */
      toelichting?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
             */
      verzenddatum?: string | null;
      /**
             * Contactpersoon
             * Format: uri
             * @description URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactPersoon: string;
      /**
             * contactpersoonnaam
             * @description De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactpersoonnaam?: string;
      /**
             * binnenlandsCorrespondentieadres
             * @description Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
             */
      binnenlandsCorrespondentieadres?: components['schemas']['BinnenlandsCorrespondentieadresVerzending'] | null;
      /**
             * buitenlandsCorrespondentieadres
             * @description De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      buitenlandsCorrespondentieadres?: components['schemas']['BuitenlandsCorrespondentieadresVerzending'] | null;
      /**
             * correspondentiePostadres
             * @description De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      correspondentiePostadres?: components['schemas']['BuitenlandsCorrespondentiepostadresVerzending'] | null;
      /**
             * faxnummer
             * @description faxnummer van de ontvanger of afzender.
             */
      faxnummer?: string | null;
      /**
             * emailadres
             * @description emailadres van de ontvanger of afzender.
             */
      emailadres?: string | null;
      /**
             * mijn overheid
             * @description is het informatieobject verzonden via mijnOverheid naar de ontvanger.
             */
      mijnOverheid?: boolean;
      /**
             * telefoonnummer
             * @description telefoonnummer van de ontvanger of afzender.
             */
      telefoonnummer?: string | null;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    VerzendingRequest: {
      /**
             * betrokkene
             * Format: uri
             * @description URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
             */
      betrokkene: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het informatieobject dat is ontvangen of verzonden.
             */
      informatieobject: string;
      /**
             * aard relatie
             * @description Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
             */
      aardRelatie: components['schemas']['AardRelatieEnum'];
      /**
             * toelichting
             * @description Verduidelijking van de afzender- of geadresseerde-relatie.
             */
      toelichting?: string;
      /**
             * ontvangstdatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
             */
      ontvangstdatum?: string | null;
      /**
             * verzenddatum
             * Format: date
             * @description De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
             */
      verzenddatum?: string | null;
      /**
             * Contactpersoon
             * Format: uri
             * @description URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactPersoon: string;
      /**
             * contactpersoonnaam
             * @description De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
             */
      contactpersoonnaam?: string;
      /**
             * binnenlandsCorrespondentieadres
             * @description Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
             */
      binnenlandsCorrespondentieadres?: components['schemas']['BinnenlandsCorrespondentieadresVerzendingRequest'] | null;
      /**
             * buitenlandsCorrespondentieadres
             * @description De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      buitenlandsCorrespondentieadres?: components['schemas']['BuitenlandsCorrespondentieadresVerzendingRequest'] | null;
      /**
             * correspondentiePostadres
             * @description De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
             */
      correspondentiePostadres?: components['schemas']['BuitenlandsCorrespondentiepostadresVerzendingRequest'] | null;
      /**
             * faxnummer
             * @description faxnummer van de ontvanger of afzender.
             */
      faxnummer?: string | null;
      /**
             * emailadres
             * @description emailadres van de ontvanger of afzender.
             */
      emailadres?: string | null;
      /**
             * mijn overheid
             * @description is het informatieobject verzonden via mijnOverheid naar de ontvanger.
             */
      mijnOverheid?: boolean;
      /**
             * telefoonnummer
             * @description telefoonnummer van de ontvanger of afzender.
             */
      telefoonnummer?: string | null;
    };
    Wijzigingen: {
      /**
             * oud
             * @description Volledige JSON body van het object zoals dat bestond voordat de actie heeft plaatsgevonden.
             */
      oud?: {
        [key: string]: unknown;
      };
      /**
             * nieuw
             * @description Volledige JSON body van het object na de actie.
             */
      nieuw?: {
        [key: string]: unknown;
      };
    };
  };
  responses: {
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
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  bestandsdeel_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/x-www-form-urlencoded' | 'multipart/form-data';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'multipart/form-data': components['schemas']['BestandsDeelRequest'];
        'application/x-www-form-urlencoded': components['schemas']['BestandsDeelRequest'];
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
          'application/json': components['schemas']['BestandsDeelResponse'];
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
          'application/json': components['schemas']['PaginatedEnkelvoudigInformatieObjectList'];
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['EnkelvoudigInformatieObjectCreateLockRequest'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description URL waar de resource leeft. */
          Location?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['EnkelvoudigInformatieObjectCreateLock'];
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
  audittrail_retrieve: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
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
  enkelvoudiginformatieobject_retrieve: {
    parameters: {
      query?: {
        /** @description Het (automatische) versienummer van het INFORMATIEOBJECT. */
        versie?: number;
        /** @description Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
        registratieOp?: string;
      };
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLockRequest'];
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
          'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLock'];
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
  enkelvoudiginformatieobject_destroy: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
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
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
        };
      };
    };
  };
  enkelvoudiginformatieobject_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedEnkelvoudigInformatieObjectWithLockRequest'];
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
          'application/json': components['schemas']['EnkelvoudigInformatieObjectWithLock'];
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
  enkelvoudiginformatieobject_download: {
    parameters: {
      query?: {
        /** @description Het (automatische) versienummer van het INFORMATIEOBJECT. */
        versie?: number;
        /** @description Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
        registratieOp?: string;
      };
      header?: never;
      path: {
        uuid: string;
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
          'application/octet-stream': string;
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject_lock: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
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
          'application/json': components['schemas']['LockEnkelvoudigInformatieObject'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['UnlockEnkelvoudigInformatieObjectRequest'];
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
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unauthorized */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Forbidden */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Not acceptable */
      406: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Gone */
      410: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Unsupported media type */
      415: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Too many requests */
      429: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
      /** @description Internal server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['Fout'];
        };
      };
    };
  };
  enkelvoudiginformatieobject__zoek: {
    parameters: {
      query?: {
        /** @description Een pagina binnen de gepagineerde set resultaten. */
        page?: number;
      };
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['EIOZoekRequest'];
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
          'application/json': components['schemas']['PaginatedEnkelvoudigInformatieObjectList'];
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['GebruiksrechtenRequest'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description URL waar de resource leeft. */
          Location?: string;
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
  gebruiksrechten_retrieve: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['GebruiksrechtenRequest'];
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
  gebruiksrechten_destroy: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
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
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
    };
  };
  gebruiksrechten_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedGebruiksrechtenRequest'];
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
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ObjectInformatieObjectRequest'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description URL waar de resource leeft. */
          Location?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
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
  objectinformatieobject_retrieve: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
  objectinformatieobject_destroy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
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
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
        };
      };
    };
  };
  verzending_list: {
    parameters: {
      query?: {
        /** @description Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT. */
        aardRelatie?: 'afzender' | 'geadresseerde';
        /** @description URL-referentie naar het informatieobject dat is ontvangen of verzonden. */
        informatieobject?: string;
        /** @description URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden. */
        betrokkene?: string;
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
          'application/json': components['schemas']['PaginatedVerzendingList'];
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
  verzending_create: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['VerzendingRequest'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description URL waar de resource leeft. */
          Location?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Verzending'];
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
  verzending_retrieve: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
          'application/json': components['schemas']['Verzending'];
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
  verzending_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['VerzendingRequest'];
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
          'application/json': components['schemas']['Verzending'];
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
  verzending_destroy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description No content */
      204: {
        headers: {
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
  verzending_headers: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
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
          'application/json': components['schemas']['Verzending'];
        };
      };
    };
  };
  verzending_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedVerzendingRequest'];
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
          'application/json': components['schemas']['Verzending'];
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
}
