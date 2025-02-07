export interface paths {
  '/klantcontacten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle KLANTCONTACTen opvragen.
         * @deprecated
         * @description Alle KLANTCONTACTen opvragen.
         *
         *     **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
         */
    get: operations['klantcontact_list'];
    put?: never;
    /**
         * Maak een KLANTCONTACT bij een ZAAK aan.
         * @deprecated
         * @description Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd.
         *
         *     **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
         */
    post: operations['klantcontact_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/klantcontacten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke KLANTCONTACT opvragen.
         * @deprecated
         * @description Een specifieke KLANTCONTACT opvragen.
         *
         *     **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
         */
    get: operations['klantcontact_retrieve'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/resultaten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle RESULTAATen van ZAAKen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['resultaat_list'];
    put?: never;
    /**
         * Maak een RESULTAAT bij een ZAAK aan.
         * @description **Er wordt gevalideerd op:**
         *     - geldigheid URL naar de ZAAK
         *     - geldigheid URL naar het RESULTAATTYPE
         */
    post: operations['resultaat_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/resultaten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke RESULTAAT opvragen.
         * @description Een specifieke RESULTAAT opvragen.
         */
    get: operations['resultaat_retrieve'];
    /**
         * Werk een RESULTAAT in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de ZAAK
         *     - het RESULTAATTYPE mag niet gewijzigd worden
         */
    put: operations['resultaat_update'];
    post?: never;
    /**
         * Verwijder een RESULTAAT van een ZAAK.
         * @description Verwijder een RESULTAAT van een ZAAK.
         */
    delete: operations['resultaat_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) RESULTAAT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['resultaat_headers'];
    /**
         * Werk een RESULTAAT deels bij.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de ZAAK
         *     - het RESULTAATTYPE mag niet gewijzigd worden
         */
    patch: operations['resultaat_partial_update'];
    trace?: never;
  };
  '/rollen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ROLlen bij ZAAKen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['rol_list'];
    put?: never;
    /**
         * Maak een ROL aan bij een ZAAK.
         * @description Maak een ROL aan bij een ZAAK.
         */
    post: operations['rol_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/rollen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ROL bij een ZAAK opvragen.
         * @description Een specifieke ROL bij een ZAAK opvragen.
         */
    get: operations['rol_retrieve'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ROL van een ZAAK.
         * @description Verwijder een ROL van een ZAAK.
         */
    delete: operations['rol_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ROL opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['rol_headers'];
    patch?: never;
    trace?: never;
  };
  '/statussen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle STATUSsen bij ZAAKen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['status_list'];
    put?: never;
    /**
         * Maak een STATUS aan voor een ZAAK.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de ZAAK
         *     - geldigheid URL naar het STATUSTYPE
         *     - indien het de eindstatus betreft, dan moet het attribuut `indicatieGebruiksrecht` gezet zijn op alle informatieobjecten dieaan de zaak gerelateerd zijn
         *
         *     **Opmerkingen**
         *     - Indien het statustype de eindstatus is (volgens het ZTC), dan wordt de zaak afgesloten door de einddatum te zetten.
         */
    post: operations['status_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/statussen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke STATUS van een ZAAK opvragen.
         * @description Een specifieke STATUS van een ZAAK opvragen.
         */
    get: operations['status_retrieve'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    /**
         * De headers voor een specifiek(e) STATUS opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['status_headers'];
    patch?: never;
    trace?: never;
  };
  '/zaakcontactmomenten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKCONTACTMOMENTen opvragen.
         * @description Alle ZAAKCONTACTMOMENTen opvragen.
         */
    get: operations['zaakcontactmoment_list'];
    put?: never;
    /**
         * Maak een ZAAKCONTACTMOMENT aan.
         * @description **Er wordt gevalideerd op:**
         *     - geldigheid URL naar het CONTACTMOMENT
         */
    post: operations['zaakcontactmoment_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakcontactmomenten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifiek ZAAKCONTACTMOMENT opvragen
         * @description Een specifiek ZAAKCONTACTMOMENT opvragen.
         */
    get: operations['zaakcontactmoment_retrieve'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ZAAKCONTACTMOMENT.
         * @description Verwijder een ZAAKCONTACTMOMENT.
         */
    delete: operations['zaakcontactmoment_destroy'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakinformatieobjecten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAK-INFORMATIEOBJECT relaties opvragen
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaakinformatieobject_list'];
    put?: never;
    /**
         * Maak een ZAAK-INFORMATIEOBJECT relatie aan.
         * @description Maak een ZAAK-INFORMATIEOBJECT relatie aan.
         *
         *     **Er wordt gevalideerd op**
         *     - geldigheid zaak URL
         *     - geldigheid informatieobject URL
         *     - `zaak.archiefstatus` moet gelijk zijn aan 'nog_te_archiveren'
         *     - de combinatie informatieobject en zaak moet uniek zijn
         *
         *     **Opmerkingen**
         *     - De registratiedatum wordt door het systeem op 'NU' gezet. De `aardRelatie` wordt ook door het systeem gezet.
         *     - Bij het aanmaken wordt ook in de Documenten API de gespiegelde relatie aangemaakt, echter zonder de relatie-informatie.
         *
         */
    post: operations['zaakinformatieobject_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakinformatieobjecten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
         * @description Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
         */
    get: operations['zaakinformatieobject_retrieve'];
    /**
         * Werk een ZAAK-INFORMATIEOBJECT relatie in zijn geheel bij.
         * @description Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen.
         *
         *     **Er wordt gevalideerd op**
         *     - informatieobject URL en zaak URL mogen niet veranderen
         */
    put: operations['zaakinformatieobject_update'];
    post?: never;
    /**
         * Verwijder een ZAAK-INFORMATIEOBJECT relatie.
         * @description De gespiegelde relatie in de Documenten API wordt door de Zaken API verwijderd. Consumers kunnen dit niet handmatig doen.
         */
    delete: operations['zaakinformatieobject_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKINFORMATIEOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakinformatieobject_headers'];
    /**
         * Werk een ZAAK-INFORMATIEOBJECT relatie deels bij.
         * @description Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen.
         *
         *     **Er wordt gevalideerd op**
         *     - informatieobject URL en zaak URL mogen niet veranderen
         */
    patch: operations['zaakinformatieobject_partial_update'];
    trace?: never;
  };
  '/zaakobjecten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKOBJECTen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaakobject_list'];
    put?: never;
    /**
         * Maak een ZAAKOBJECT aan.
         * @description Maak een ZAAKOBJECT aan.
         *
         *     **Er wordt gevalideerd op**
         *     - Indien de `object` URL opgegeveven is, dan moet deze een geldige  response (HTTP 200) geven.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de `objectType` discriminator.
         */
    post: operations['zaakobject_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakobjecten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKOBJECT opvragen.
         * @description Een specifieke ZAAKOBJECT opvragen.
         */
    get: operations['zaakobject_retrieve'];
    /**
         * Werk een ZAAKOBJECT zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.
         */
    put: operations['zaakobject_update'];
    post?: never;
    /**
         * Verwijder een ZAAKOBJECT.
         * @description Verbreek de relatie tussen een ZAAK en een OBJECT door de ZAAKOBJECT resource te verwijderen.
         */
    delete: operations['zaakobject_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakobject_headers'];
    /**
         * Werk een ZAAKOBJECT deels bij.
         * @description **Er wordt gevalideerd op**
         *     - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.
         */
    patch: operations['zaakobject_partial_update'];
    trace?: never;
  };
  '/zaakverzoeken': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAK-VERZOEKen opvragen.
         * @description Alle ZAAK-VERZOEKen opvragen.
         */
    get: operations['zaakverzoek_list'];
    put?: never;
    /**
         * Maak een ZAAK-VERZOEK aan.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de VERZOEK
         */
    post: operations['zaakverzoek_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakverzoeken/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAK-VERZOEK opvragen.
         * @description Een specifieke ZAAK-VERZOEK opvragen.
         */
    get: operations['zaakverzoek_retrieve'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ZAAK-VERZOEK.
         * @description Verwijder een ZAAK-VERZOEK.
         */
    delete: operations['zaakverzoek_destroy'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaak_list'];
    put?: never;
    /**
         * Maak een ZAAK aan.
         * @description Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd. De identificatie moet uniek zijn binnen de bronorganisatie.
         *
         *     **Er wordt gevalideerd op:**
         *     - geldigheid `zaaktype` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een ZAAKTYPE hebben.
         *     - `zaaktype` is geen concept (`zaaktype.concept = False`)
         *     - `laatsteBetaaldatum` mag niet in de toekomst liggen.
         *     - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is.
         *     - `barchiefnominatie` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren" hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut `status` de waarde "gearchiveerd" heeft.
         */
    post: operations['zaak_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAK opvragen.
         * @description Een specifieke ZAAK opvragen.
         */
    get: operations['zaak_retrieve'];
    /**
         * Werk een ZAAK in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - `identificatie` mag niet gewijzigd worden.
         *     - `laatsteBetaaldatum` mag niet in de toekomst liggen.
         *     - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie
         *     "nvt" is.
         *     - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de
         *     waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de
         *      waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"
         *      hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut
         *       `status` de waarde "gearchiveerd" heeft.
         *     **Opmerkingen**
         *     - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd
         *      bent.
         *     - indien een zaak heropend moet worden, doe dit dan door een nieuwe status
         *      toe te voegen die NIET de eindstatus is. Zie de `Status` resource.
         */
    put: operations['zaak_update'];
    post?: never;
    /**
         * Verwijder een ZAAK.
         * @description ***De gerelateerde resources zijn hierbij***
         *     - `zaak` - de deelzaken van de verwijderde hoofzaak
         *     - `status` - alle statussen van de verwijderde zaak
         *     - `resultaat` - het resultaat van de verwijderde zaak
         *     - `rol` - alle rollen bij de zaak
         *     - `zaakobject` - alle zaakobjecten bij de zaak
         *     - `zaakeigenschap` - alle eigenschappen van de zaak
         *     - `zaakkenmerk` - alle kenmerken van de zaak
         *     - `zaakinformatieobject` - dit moet door-cascaden naar de Documenten API, zie ook: https://github.com/VNG-Realisatie/gemma-zaken/issues/791 (TODO)
         *     - `klantcontact` - alle klantcontacten bij een zaak
         */
    delete: operations['zaak_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAK opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaak_headers'];
    /**
         * Werk een ZAAK deels bij.
         * @description **Er wordt gevalideerd op**
         *     - `identificatie` mag niet gewijzigd worden.
         *     - `laatsteBetaaldatum` mag niet in de toekomst liggen.
         *     - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie
         *     "nvt" is.
         *     - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de
         *     waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de
         *      waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"
         *      hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut
         *       `status` de waarde "gearchiveerd" heeft.
         *     **Opmerkingen**
         *     - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd
         *      bent.
         *     - indien een zaak heropend moet worden, doe dit dan door een nieuwe status
         *      toe te voegen die NIET de eindstatus is. Zie de `Status` resource.
         */
    patch: operations['zaak_partial_update'];
    trace?: never;
  };
  '/zaken/{zaak_uuid}/audittrail': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle audit trail regels behorend bij de ZAAK.
         * @description Alle audit trail regels behorend bij de ZAAK.
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
  '/zaken/{zaak_uuid}/audittrail/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke audit trail regel opvragen
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
  '/zaken/{zaak_uuid}/besluiten': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKBESLUITen opvragen.
         * @description Alle ZAAKBESLUITen opvragen.
         */
    get: operations['zaakbesluit_list'];
    put?: never;
    /**
         * Maak een ZAAKBESLUIT aan.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.**
         *
         *     De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd.
         *
         *     **Er wordt gevalideerd op:**
         *     - geldigheid URL naar de ZAAK
         */
    post: operations['zaakbesluit_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken/{zaak_uuid}/besluiten/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifiek ZAAKBESLUIT opvragen
         * @description Een specifiek ZAAKBESLUIT opvragen.
         */
    get: operations['zaakbesluit_retrieve'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ZAAKBESLUIT.
         * @description ***LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.***
         *
         *     De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd.
         *
         */
    delete: operations['zaakbesluit_destroy'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken/{zaak_uuid}/zaakeigenschappen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKEIGENSCHAPpen opvragen.
         * @description Alle ZAAKEIGENSCHAPpen opvragen.
         */
    get: operations['zaakeigenschap_list'];
    put?: never;
    /**
         * Maak een ZAAKEIGENSCHAP aan.
         * @description Maak een ZAAKEIGENSCHAP aan.
         *
         *     **Er wordt gevalideerd op:**
         *     - geldigheid `eigenschap` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een EIGENSCHAP hebben.
         *     - de `eigenschap` moet bij het `ZAAK.zaaktype` horen
         */
    post: operations['zaakeigenschap_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKEIGENSCHAP opvragen.
         * @description Een specifieke ZAAKEIGENSCHAP opvragen.
         */
    get: operations['zaakeigenschap_retrieve'];
    /**
         * Werk een ZAAKEIGENSCHAP in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - Alleen de `waarde` mag gewijzigd worden
         */
    put: operations['zaakeigenschap_update'];
    post?: never;
    /**
         * Verwijder een ZAAKEIGENSCHAP.
         * @description Verwijder een ZAAKEIGENSCHAP
         */
    delete: operations['zaakeigenschap_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKEIGENSCHAP opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakeigenschap_headers'];
    /**
         * Werk een ZAAKEIGENSCHAP deels bij.
         * @description **Er wordt gevalideerd op**
         *     - Alleen de `waarde` mag gewijzigd worden
         */
    patch: operations['zaakeigenschap_partial_update'];
    trace?: never;
  };
  '/zaken/_zoek': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Voer een (geo)-zoekopdracht uit op ZAAKen.
         * @description Zoeken/filteren gaat normaal via de `list` operatie, deze is echter niet geschikt voor geo-zoekopdrachten.
         */
    post: operations['zaak__zoek'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    /** @enum {string} */
    AardRelatieEnum: 'vervolg' | 'onderwerp' | 'bijdrage';
    /** @enum {string} */
    AardRelatieWeergaveEnum: 'Hoort bij, omgekeerd: kent' | 'Legt vast, omgekeerd: kan vastgelegd zijn als';
    /** @enum {string} */
    ArchiefnominatieEnum: 'blijvend_bewaren' | 'vernietigen';
    /** @enum {string} */
    ArchiefstatusEnum: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
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
    /** @enum {string} */
    BetalingsindicatieEnum: 'nvt' | 'nog_niet' | 'gedeeltelijk' | 'geheel';
    /** @enum {string} */
    BetrokkeneTypeEnum: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
    /** @enum {unknown} */
    BlankEnum: '';
    /** @enum {string} */
    BronEnum: 'ac' | 'nrc' | 'zrc' | 'ztc' | 'drc' | 'brc' | 'cmc' | 'kc' | 'vrc';
    /** @description De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde , vanuit het belang van BETROKKENE in haar ROL bij een ZAAK. */
    ContactPersoonRol: {
      /**
             * Email
             * Format: email
             * @description Elektronich postadres waaronder de contactpersoon in de regel bereikbaar is.
             */
      emailadres?: string;
      /**
             * functie
             * @description De aanduiding van de taken, rechten en plichten die de contactpersoon heeft binnen de organisatie van BETROKKENE.
             */
      functie?: string;
      /**
             * telefoonnummer
             * @description Telefoonnummer waaronder de contactpersoon in de regel bereikbaar is.
             */
      telefoonnummer?: string;
      /**
             * naam
             * @description De opgemaakte naam van de contactpersoon namens de BETROKKENE.
             */
      naam: string;
    } | null;
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
    /** GeoJSONGeometry */
    GeoJSONGeometry: components['schemas']['Point'] | components['schemas']['MultiPoint'] | components['schemas']['LineString'] | components['schemas']['MultiLineString'] | components['schemas']['Polygon'] | components['schemas']['MultiPolygon'] | components['schemas']['GeometryCollection'];
    GeoWithin: {
      /** within */
      within?: Omit<components['schemas']['GeoJSONGeometry'], 'type'>;
    };
    /**
         * Geometry
         * @description GeoJSON geometry
         */
    Geometry: {
      /** @description The geometry type */
      type: components['schemas']['GeometryTypeEnum'];
    };
    /**
         * Geometry collection
         * @description GeoJSON multi-polygon geometry
         */
    GeometryCollection: components['schemas']['Geometry'] & {
      geometries: components['schemas']['Geometry'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'GeometryCollection';
    };
    /** @enum {string} */
    GeometryTypeEnum: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'Feature' | 'FeatureCollection' | 'GeometryCollection';
    /** @enum {string} */
    GeslachtsaanduidingEnum: 'm' | 'v' | 'o';
    /** @enum {string} */
    IndicatieMachtigingEnum: 'gemachtigde' | 'machtiginggever';
    /** @enum {string} */
    InnRechtsvormEnum: 'besloten_vennootschap' | 'cooperatie_europees_economische_samenwerking' | 'europese_cooperatieve_venootschap' | 'europese_naamloze_vennootschap' | 'kerkelijke_organisatie' | 'naamloze_vennootschap' | 'onderlinge_waarborg_maatschappij' | 'overig_privaatrechtelijke_rechtspersoon' | 'stichting' | 'vereniging' | 'vereniging_van_eigenaars' | 'publiekrechtelijke_rechtspersoon' | 'vennootschap_onder_firma' | 'maatschap' | 'rederij' | 'commanditaire_vennootschap' | 'kapitaalvennootschap_binnen_eer' | 'overige_buitenlandse_rechtspersoon_vennootschap' | 'kapitaalvennootschap_buiten_eer';
    KlantContact: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * identificatie
             * @description De unieke aanduiding van een KLANTCONTACT
             */
      identificatie?: string;
      /**
             * datumtijd
             * Format: date-time
             * @description De datum en het tijdstip waarop het KLANTCONTACT begint
             */
      datumtijd: string;
      /**
             * kanaal
             * @description Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt
             */
      kanaal?: string;
      /**
             * onderwerp
             * @description Het onderwerp waarover contact is geweest met de klant.
             */
      onderwerp?: string;
      /**
             * toelichting
             * @description Een toelichting die inhoudelijk het contact met de klant beschrijft.
             */
      toelichting?: string;
    };
    /**
         * Line-string
         * @description GeoJSON line-string geometry
         */
    LineString: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'LineString';
    };
    /**
         * Multi-line string
         * @description GeoJSON multi-line-string geometry
         */
    MultiLineString: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiLineString';
    };
    /**
         * MultiPoint
         * @description GeoJSON multi-point geometry
         */
    MultiPoint: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiPoint';
    };
    /**
         * Multi-polygon
         * @description GeoJSON multi-polygon geometry
         */
    MultiPolygon: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiPolygon';
    };
    /** @enum {unknown} */
    NullEnum: null;
    ObjectAdres: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** huisnummer */
      huisnummer: number;
      /** huisletter */
      huisletter?: string;
      /** huisnummertoevoeging */
      huisnummertoevoeging?: string;
      /** postcode */
      postcode?: string;
    };
    ObjectBuurt: {
      /**
             * buurt code
             * @description De code behorende bij de naam van de buurt
             */
      buurtCode: string;
      /**
             * buurt naam
             * @description De naam van de buurt, zoals die door het CBS wordt gebruikt.
             */
      buurtNaam: string;
      /**
             * gem gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemGemeenteCode: string;
      /**
             * wyk wijk code
             * @description De code behorende bij de naam van de wijk
             */
      wykWijkCode: string;
    };
    ObjectGemeente: {
      /**
             * gemeente naam
             * @description De officiële door de gemeente vastgestelde gemeentenaam.
             */
      gemeenteNaam: string;
      /**
             * gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemeenteCode: string;
    };
    ObjectGemeentelijkeOpenbareRuimte: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      openbareRuimteNaam: string;
    };
    ObjectHuishouden: {
      /**
             * nummer
             * @description Uniek identificerend administratienummer van een huishouden zoals toegekend door de gemeente waarin het huishouden woonachtig is.
             */
      nummer: string;
      /** isGehuisvestIn */
      isGehuisvestIn?: components['schemas']['ObjectTerreinGebouwdObject'] | null;
    };
    ObjectInrichtingselement: {
      /**
             * type
             * @description Specificatie van de aard van het inrichtingselement.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `bak` - Bak
             *     * `bord` - Bord
             *     * `installatie` - Installatie
             *     * `kast` - Kast
             *     * `mast` - Mast
             *     * `paal` - Paal
             *     * `sensor` - Sensor
             *     * `straatmeubilair` - Straatmeubilair
             *     * `waterinrichtingselement` - Waterinrichtingselement
             *     * `weginrichtingselement` - Weginrichtingselement
             */
      type: components['schemas']['ObjectInrichtingselementTypeEnum'];
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    /** @enum {string} */
    ObjectInrichtingselementTypeEnum: 'bak' | 'bord' | 'installatie' | 'kast' | 'mast' | 'paal' | 'sensor' | 'straatmeubilair' | 'waterinrichtingselement' | 'weginrichtingselement';
    ObjectKadastraleOnroerendeZaak: {
      /**
             * kadastrale identificatie
             * @description De unieke identificatie van het OBJECT
             */
      kadastraleIdentificatie: string;
      /**
             * kadastrale aanduiding
             * @description De typering van de kadastrale aanduiding van een onroerende zaak conform Kadaster
             */
      kadastraleAanduiding: string;
    };
    ObjectKunstwerkdeel: {
      /**
             * type
             * @description Specificatie van het soort Kunstwerk waartoe het kunstwerkdeel behoort.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `keermuur` - Keermuur
             *     * `overkluizing` - Overkluizing
             *     * `duiker` - Duiker
             *     * `faunavoorziening` - Faunavoorziening
             *     * `vispassage` - Vispassage
             *     * `bodemval` - Bodemval
             *     * `coupure` - Coupure
             *     * `ponton` - Ponton
             *     * `voorde` - Voorde
             *     * `hoogspanningsmast` - Hoogspanningsmast
             *     * `gemaal` - Gemaal
             *     * `perron` - Perron
             *     * `sluis` - Sluis
             *     * `strekdam` - Strekdam
             *     * `steiger` - Steiger
             *     * `stuw` - Stuw
             */
      type: components['schemas']['ObjectKunstwerkdeelTypeEnum'];
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** naam */
      naam: string;
    };
    /** @enum {string} */
    ObjectKunstwerkdeelTypeEnum: 'keermuur' | 'overkluizing' | 'duiker' | 'faunavoorziening' | 'vispassage' | 'bodemval' | 'coupure' | 'ponton' | 'voorde' | 'hoogspanningsmast' | 'gemaal' | 'perron' | 'sluis' | 'strekdam' | 'steiger' | 'stuw';
    ObjectMaatschappelijkeActiviteit: {
      /**
             * kvk nummer
             * @description Landelijk uniek identificerend administratienummer van een MAATSCHAPPELIJKE ACTIVITEIT zoals toegewezen door de Kamer van Koophandel (KvK).
             */
      kvkNummer: string;
      /**
             * handelsnaam
             * @description De naam waaronder de onderneming handelt.
             */
      handelsnaam: string;
    };
    ObjectOpenbareRuimte: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
    };
    ObjectOverige: {
      /** overige data */
      overigeData: {
        [key: string]: unknown;
      };
    };
    ObjectPand: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
    };
    ObjectSpoorbaandeel: {
      /**
             * type
             * @description Specificatie van het soort Spoorbaan
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `breedspoor` - breedspoor
             *     * `normaalspoor` - normaalspoor
             *     * `smalspoor` - smalspoor
             *     * `spoorbaan` - spoorbaan
             */
      type: components['schemas']['ObjectSpoorbaandeelTypeEnum'];
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    /** @enum {string} */
    ObjectSpoorbaandeelTypeEnum: 'breedspoor' | 'normaalspoor' | 'smalspoor' | 'spoorbaan';
    ObjectTerreinGebouwdObject: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** adresAanduidingGrp */
      adresAanduidingGrp?: components['schemas']['TerreinGebouwdObjectAdres'] | null;
    };
    ObjectTerreindeel: {
      /** type */
      type: string;
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    /** @enum {string} */
    ObjectTypeEnum: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
    ObjectTypeOverigeDefinitie: {
      /**
             * Objecttype-URL
             * Format: uri
             * @description URL-referentie naar de objecttype resource in een API. Deze resource moet de [JSON-schema](https://json-schema.org/)-definitie van het objecttype bevatten.
             */
      url: string;
      /**
             * schema-pad
             * @description Een geldige [jq](http://stedolan.github.io/jq/) expressie. Dit wordt gecombineerd met de resource uit het `url`-attribuut om het schema van het objecttype uit te lezen. Bijvoorbeeld: `.jsonSchema`.
             */
      schema: string;
      /**
             * objectgegevens-pad
             * @description Een geldige [jq](http://stedolan.github.io/jq/) expressie. Dit wordt gecombineerd met de JSON data uit de OBJECT url om de objectgegevens uit te lezen en de vorm van de gegevens tegen het schema te valideren. Bijvoorbeeld: `.record.data`.
             */
      objectData: string;
    };
    ObjectWaterdeel: {
      /**
             * type waterdeel
             * @description Specificatie van het soort water
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `zee` - Zee
             *     * `waterloop` - Waterloop
             *     * `watervlakte` - Watervlakte
             *     * `greppel_droge_sloot` - Greppel, droge sloot
             */
      typeWaterdeel: components['schemas']['TypeWaterdeelEnum'];
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    ObjectWegdeel: {
      /** type */
      type: string;
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    ObjectWijk: {
      /**
             * wijk code
             * @description De code behorende bij de naam van de wijk.
             */
      wijkCode: string;
      /**
             * wijk naam
             * @description De naam van de wijk, zoals die door het CBS wordt gebruikt.
             */
      wijkNaam: string;
      /**
             * gem gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemGemeenteCode: string;
    };
    ObjectWoonplaats: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * woonplaats naam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsNaam: string;
    };
    ObjectWozDeelobject: {
      /**
             * nummer woz deel object
             * @description Uniek identificatienummer voor het deelobject binnen een WOZ-object.
             */
      nummerWozDeelObject: string;
      /** isOnderdeelVan */
      isOnderdeelVan?: components['schemas']['ObjectWozObject'];
    };
    ObjectWozObject: {
      /**
             * woz object nummer
             * @description De unieke identificatie van het OBJECT
             */
      wozObjectNummer: string;
      /** aanduidingWozObject */
      aanduidingWozObject?: components['schemas']['WozObjectAdres'] | null;
    };
    ObjectWozWaarde: {
      /**
             * waardepeildatum
             * @description De datum waarnaar de waarde van het WOZ-object wordt bepaald.
             */
      waardepeildatum: string;
      /** isVoor */
      isVoor?: components['schemas']['ObjectWozObject'];
    };
    ObjectZakelijkRecht: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * avg aard
             * @description aanduiding voor de aard van het recht
             */
      avgAard: string;
      /** heeftBetrekkingOp */
      heeftBetrekkingOp?: components['schemas']['ObjectKadastraleOnroerendeZaak'];
      /** heeftAlsGerechtigde */
      heeftAlsGerechtigde?: components['schemas']['ZakelijkRechtHeeftAlsGerechtigde'];
    };
    /** @description Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK */
    Opschorting: {
      /**
             * indicatie opschorting
             * @description Aanduiding of de behandeling van de ZAAK tijdelijk is opgeschort.
             */
      indicatie: boolean;
      /**
             * reden opschorting
             * @description Omschrijving van de reden voor het opschorten van de behandeling van de zaak.
             */
      reden: string;
    } | null;
    PaginatedKlantContactList: {
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
      results?: components['schemas']['KlantContact'][];
    };
    PaginatedResultaatList: {
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
      results?: components['schemas']['Resultaat'][];
    };
    PaginatedRolList: {
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
      results?: components['schemas']['Rol'][];
    };
    PaginatedStatusList: {
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
      results?: components['schemas']['Status'][];
    };
    PaginatedZaakList: {
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
      results?: components['schemas']['ZaakExpanded'][];
    };
    PaginatedZaakObjectList: {
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
      results?: components['schemas']['ZaakObject'][];
    };
    PatchedResultaat: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak?: string;
      /**
             * resultaattype
             * Format: uri
             * @description URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
             */
      resultaattype?: string;
      /**
             * toelichting
             * @description Een toelichting op wat het resultaat van de zaak inhoudt.
             */
      toelichting?: string;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    PatchedZaak: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * identificatie
             * @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      bronorganisatie?: string;
      /**
             * omschrijving
             * @description Een korte omschrijving van de zaak.
             */
      omschrijving?: string;
      /**
             * toelichting
             * @description Een toelichting op de zaak.
             */
      toelichting?: string;
      /**
             * zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
             */
      zaaktype?: string;
      /**
             * registratiedatum
             * Format: date
             * @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
             */
      registratiedatum?: string;
      /**
             * verantwoordelijke organisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      verantwoordelijkeOrganisatie?: string;
      /**
             * startdatum
             * Format: date
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum?: string;
      /**
             * einddatum
             * Format: date
             * @description De datum waarop de uitvoering van de zaak afgerond is.
             */
      readonly einddatum?: string | null;
      /**
             * einddatum gepland
             * Format: date
             * @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
             */
      einddatumGepland?: string | null;
      /**
             * uiterlijke einddatum afdoening
             * Format: date
             * @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
             */
      uiterlijkeEinddatumAfdoening?: string | null;
      /**
             * publicatiedatum
             * Format: date
             * @description Datum waarop (het starten van) de zaak gepubliceerd is of wordt.
             */
      publicatiedatum?: string | null;
      /**
             * communicatiekanaal
             * Format: uri
             * @description Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen.
             */
      communicatiekanaal?: string;
      /**
             * producten of diensten
             * @description De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn.
             */
      productenOfDiensten?: string[];
      /**
             * Vertrouwlijkheidaanduiding
             * @description Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft.
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'];
      /**
             * betalingsindicatie
             * @description Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten.
             *     * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald.
             *     * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald.
             *     * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald.
             */
      betalingsindicatie?: components['schemas']['BetalingsindicatieEnum'] | components['schemas']['BlankEnum'];
      /**
             * betalingsindicatieWeergave
             * @description Uitleg bij `betalingsindicatie`.
             */
      readonly betalingsindicatieWeergave?: string;
      /**
             * laatste betaaldatum
             * Format: date-time
             * @description De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak.
             */
      laatsteBetaaldatum?: string | null;
      /**
             * zaakgeometrie
             * @description Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON.
             */
      zaakgeometrie?: Omit<components['schemas']['GeoJSONGeometry'], 'type'> | null;
      /**
             * verlenging
             * @description Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK
             */
      verlenging?: components['schemas']['Verlenging'] | null;
      /**
             * opschorting
             * @description Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK
             */
      opschorting?: components['schemas']['Opschorting'] | null;
      /**
             * selectielijstklasse
             * Format: uri
             * @description URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak.
             */
      selectielijstklasse?: string;
      /**
             * Is deelzaak van
             * Format: uri
             * @description URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is.
             */
      hoofdzaak?: string | null;
      /**
             * is deelzaak van
             * @description URL-referenties naar deel ZAAKen.
             */
      readonly deelzaken?: string[];
      /**
             * zaak
             * @description Een lijst van relevante andere zaken.
             */
      relevanteAndereZaken?: components['schemas']['RelevanteZaak'][];
      /** zaak */
      readonly eigenschappen?: string[];
      /** zaak */
      readonly rollen?: string[];
      /**
             * status
             * Format: uri
             * @description Indien geen status bekend is, dan is de waarde 'null'
             */
      readonly status?: string | null;
      /** zaak */
      readonly zaakinformatieobjecten?: string[];
      /** zaak */
      readonly zaakobjecten?: string[];
      /**
             * zaak
             * @description Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`.
             */
      kenmerken?: components['schemas']['ZaakKenmerk'][];
      /**
             * archiefnominatie
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             */
      archiefnominatie?: (components['schemas']['ArchiefnominatieEnum'] | components['schemas']['BlankEnum'] | components['schemas']['NullEnum']) | null;
      /**
             * archiefstatus
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
             *     * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
             *     * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
             *     * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
             */
      archiefstatus?: components['schemas']['ArchiefstatusEnum'];
      /**
             * archiefactiedatum
             * Format: date
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum?: string | null;
      /**
             * resultaat
             * Format: uri
             * @description URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null'
             */
      readonly resultaat?: string | null;
      /**
             * opdrachtgevende organisatie
             * @description De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft.
             */
      opdrachtgevendeOrganisatie?: string;
      /**
             * Procesobjectaard
             * @description Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft.
             */
      processobjectaard?: string | null;
      /**
             * startdatum bewaartermijn
             * Format: date
             * @description De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden.
             */
      startdatumBewaartermijn?: string | null;
      /**
             * processobject
             * @description Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn.
             */
      processobject?: components['schemas']['Processobject'] | null;
    };
    /** @description A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
         *     of primary key relationships.  Specifically:
         *
         *     * A 'url' field is included instead of the 'id' field.
         *     * Relationships to other instances are hyperlinks, instead of primary keys.
         *
         *     NOTE: this only works with DRF 3.1.0 and above. */
    PatchedZaakEigenschap: {
      /**
             * url
             * Format: uri
             */
      readonly url?: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * zaak
             * Format: uri
             */
      zaak?: string;
      /**
             * eigenschap
             * Format: uri
             * @description URL-referentie naar de EIGENSCHAP (in de Catalogi API).
             */
      eigenschap?: string;
      /**
             *  naam
             * @description De naam van de EIGENSCHAP (overgenomen uit de Catalogi API).
             */
      readonly naam?: string;
      /** waarde */
      waarde?: string;
    };
    PatchedZaakInformatieObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
             */
      informatieobject?: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak?: string;
      /** aardRelatieWeergave */
      readonly aardRelatieWeergave?: components['schemas']['AardRelatieWeergaveEnum'];
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is.
             */
      titel?: string;
      /**
             * beschrijving
             * @description Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * registratiedatum
             * Format: date-time
             * @description De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd.
             */
      readonly registratiedatum?: string;
      /**
             * vernietigingsdatum
             * Format: date-time
             * @description De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden.
             */
      vernietigingsdatum?: string | null;
      /**
             * status
             * Format: uri
             * @description De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover.
             */
      status?: string | null;
    };
    PatchedZaakObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak?: string;
      /**
             * object
             * Format: uri
             * @description URL-referentie naar de resource die het OBJECT beschrijft.
             */
      object?: string;
      /**
             * zaakobjecttype
             * Format: uri
             * @description URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API).
             */
      zaakobjecttype?: string;
      /**
             * object type
             * @description Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adres` - Adres
             *     * `besluit` - Besluit
             *     * `buurt` - Buurt
             *     * `enkelvoudig_document` - Enkelvoudig document
             *     * `gemeente` - Gemeente
             *     * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte
             *     * `huishouden` - Huishouden
             *     * `inrichtingselement` - Inrichtingselement
             *     * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak
             *     * `kunstwerkdeel` - Kunstwerkdeel
             *     * `maatschappelijke_activiteit` - Maatschappelijke activiteit
             *     * `medewerker` - Medewerker
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `openbare_ruimte` - Openbare ruimte
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `pand` - Pand
             *     * `spoorbaandeel` - Spoorbaandeel
             *     * `status` - Status
             *     * `terreindeel` - Terreindeel
             *     * `terrein_gebouwd_object` - Terrein gebouwd object
             *     * `vestiging` - Vestiging
             *     * `waterdeel` - Waterdeel
             *     * `wegdeel` - Wegdeel
             *     * `wijk` - Wijk
             *     * `woonplaats` - Woonplaats
             *     * `woz_deelobject` - Woz deel object
             *     * `woz_object` - Woz object
             *     * `woz_waarde` - Woz waarde
             *     * `zakelijk_recht` - Zakelijk recht
             *     * `overige` - Overige
             */
      objectType?: components['schemas']['ObjectTypeEnum'];
      /**
             * object type overige
             * @description Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft.
             */
      objectTypeOverige?: string;
      /**
             * definitie object type overige
             * @description Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.
             *
             *     * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/).
             *     * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat.
             *     * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.
             *
             *     Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype.
             */
      objectTypeOverigeDefinitie?: components['schemas']['ObjectTypeOverigeDefinitie'] | null;
      /**
             * relatieomschrijving
             * @description Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
             */
      relatieomschrijving?: string;
    };
    /**
         * Point
         * @description GeoJSON point geometry
         */
    Point: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'Point';
    };
    /** Point2D */
    Point2D: number[];
    /**
         * Polygon
         * @description GeoJSON polygon geometry
         */
    Polygon: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'Polygon';
    };
    /** @description Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn. */
    Processobject: {
      /**
             * datumkenmerk
             * @description De naam van de attribuutsoort van het procesobject dat bepalend is voor het einde van de procestermijn.
             */
      datumkenmerk: string;
      /**
             * identificatie
             * @description De unieke aanduiding van het procesobject.
             */
      identificatie: string;
      /**
             * objecttype
             * @description Het soort object dat het procesobject representeert.
             */
      objecttype: string;
      /**
             * registratie
             * @description De naam van de registratie waarvan het procesobject deel uit maakt.
             */
      registratie: string;
    } | null;
    RelevanteZaak: {
      /**
             * URL-referentie naar de ZAAK.
             * Format: uri
             */
      url: string;
      /**
             * aard relatie
             * @description Benamingen van de aard van de relaties van andere zaken tot (onderhanden) zaken.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `vervolg` - De andere zaak gaf aanleiding tot het starten van de onderhanden zaak.
             *     * `onderwerp` - De andere zaak is relevant voor cq. is onderwerp van de onderhanden zaak.
             *     * `bijdrage` - Aan het bereiken van de uitkomst van de andere zaak levert de onderhanden zaak een bijdrage.
             */
      aardRelatie: components['schemas']['AardRelatieEnum'];
    };
    Resultaat: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * resultaattype
             * Format: uri
             * @description URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
             */
      resultaattype: string;
      /**
             * toelichting
             * @description Een toelichting op wat het resultaat van de zaak inhoudt.
             */
      toelichting?: string;
    };
    ResultaatExpanded: components['schemas']['Resultaat'] & {
      _expand?: components['schemas']['ResultaatEmbedded'];
    };
    ResultaatEmbedded: {
      zaak?: components['schemas']['ZaakExpanded'];
      resultaattype?: components['schemas']['ResultaatType'];
    };
    Rol: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * betrokkene
             * Format: uri
             * @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
             */
      betrokkene?: string;
      /**
             * betrokkene type
             * @description Type van de `betrokkene`.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `vestiging` - Vestiging
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `medewerker` - Medewerker
             */
      betrokkeneType: components['schemas']['BetrokkeneTypeEnum'];
      /**
             * afwijkende naam betrokkene
             * @description De naam van de betrokkene waaronder deze in relatie tot de zaak aangesproken wil worden.
             */
      afwijkendeNaamBetrokkene?: string;
      /**
             * roltype
             * Format: uri
             * @description URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK.
             */
      roltype: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE.
             */
      readonly omschrijving: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak.
             *     * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak.
             *     * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak.
             *     * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn.
             *     * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak ..
             *     * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven ..
             *     * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken.
             *     * `mede_initiator` - Mede-initiator
             */
      readonly omschrijvingGeneriek: string;
      /** roltoelichting */
      roltoelichting: string;
      /**
             * registratiedatum
             * Format: date-time
             * @description De datum waarop dit object is geregistreerd.
             */
      readonly registratiedatum: string;
      /**
             * indicatie machtiging
             * @description Indicatie machtiging
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `gemachtigde` - De betrokkene in de rol bij de zaak is door een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
             *     * `machtiginggever` - De betrokkene in de rol bij de zaak heeft een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
             */
      indicatieMachtiging?: components['schemas']['IndicatieMachtigingEnum'] | components['schemas']['BlankEnum'];
      /**
             * contactpersoonRol
             * @description De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde , vanuit het belang van BETROKKENE in haar ROL bij een ZAAK.
             */
      contactpersoonRol?: components['schemas']['ContactPersoonRol'] | null;
      /**
             * statussen
             * @description De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
             */
      readonly statussen: string[];
      _expand?: components['schemas']['RolEmbedded'];
    };
    RolExpanded: {
      betrokkeneType: 'RolExpanded';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & {
      _expand?: components['schemas']['RolEmbedded'];
    });
    RolEmbedded: {
      /** @example {} */
      zaak?: components['schemas']['ZaakExpanded'];
      roltype?: components['schemas']['RolType'];
      statussen?: components['schemas']['StatusExpanded'][];
    };
    RolMedewerker: {
      /**
             * identificatie
             * @description Een korte unieke aanduiding van de MEDEWERKER.
             */
      identificatie?: string;
      /**
             * achternaam
             * @description De achternaam zoals de MEDEWERKER die in het dagelijkse verkeer gebruikt.
             */
      achternaam?: string;
      /**
             * voorletters
             * @description De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
             */
      voorletters?: string;
      /**
             * voorvoegsel achternaam
             * @description Dat deel van de geslachtsnaam dat voorkomt in Tabel 36 (GBA), voorvoegseltabel, en door een spatie van de geslachtsnaam is
             */
      voorvoegselAchternaam?: string;
    };
    RolNatuurlijkPersoon: {
      /**
             * inp bsn
             * @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
             */
      inpBsn?: string;
      /**
             * anp identificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
             */
      anpIdentificatie?: string;
      /**
             * inp a nummer
             * @description Het administratienummer van de persoon, bedoeld in de Wet BRP
             */
      inpA_nummer?: string;
      /**
             * geslachtsnaam
             * @description De stam van de geslachtsnaam.
             */
      geslachtsnaam?: string;
      /** voorvoegsel geslachtsnaam */
      voorvoegselGeslachtsnaam?: string;
      /**
             * voorletters
             * @description De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
             */
      voorletters?: string;
      /**
             * voornamen
             * @description Voornamen bij de naam die de persoon wenst te voeren.
             */
      voornamen?: string;
      /**
             * geslachtsaanduiding
             * @description Een aanduiding die aangeeft of de persoon een man of een vrouw is, of dat het geslacht nog onbekend is.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `m` - Man
             *     * `v` - Vrouw
             *     * `o` - Onbekend
             */
      geslachtsaanduiding?: components['schemas']['GeslachtsaanduidingEnum'] | components['schemas']['BlankEnum'];
      /** geboortedatum */
      geboortedatum?: string;
      /** verblijfsadres */
      verblijfsadres?: components['schemas']['VerblijfsAdres'] | null;
      /** subVerblijfBuitenland */
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'] | null;
    };
    RolNietNatuurlijkPersoon: {
      /**
             * inn nnp id
             * @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
             */
      innNnpId?: string;
      /**
             * ann identificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
             */
      annIdentificatie?: string;
      /**
             * statutaire naam
             * @description Naam van de niet-natuurlijke persoon zoals deze is vastgelegd in de statuten (rechtspersoon) of in de vennootschapsovereenkomst is overeengekomen (Vennootschap onder firma of Commanditaire vennootschap).
             */
      statutaireNaam?: string;
      /**
             * inn rechtsvorm
             * @description De juridische vorm van de NIET-NATUURLIJK PERSOON.
             */
      innRechtsvorm?: components['schemas']['InnRechtsvormEnum'] | components['schemas']['BlankEnum'];
      /**
             * bezoekadres
             * @description De gegevens over het adres van de NIET-NATUURLIJK PERSOON
             */
      bezoekadres?: string;
      /** subVerblijfBuitenland */
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'] | null;
    };
    RolOrganisatorischeEenheid: {
      /**
             * identificatie
             * @description Een korte identificatie van de organisatorische eenheid.
             */
      identificatie?: string;
      /**
             * naam
             * @description De feitelijke naam van de organisatorische eenheid.
             */
      naam?: string;
      /** is gehuisvest in */
      isGehuisvestIn?: string;
    };
    RolVestiging: {
      /**
             * vestigings nummer
             * @description Een korte unieke aanduiding van de Vestiging.
             */
      vestigingsNummer?: string;
      /**
             * handelsnaam
             * @description De naam van de vestiging waaronder gehandeld wordt.
             */
      handelsnaam?: string[];
      /** verblijfsadres */
      verblijfsadres?: components['schemas']['VerblijfsAdres'] | null;
      /** subVerblijfBuitenland */
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'] | null;
      /**
             * kvk nummer
             * @description Een uniek nummer gekoppeld aan de onderneming.
             */
      kvkNummer?: string;
    };
    Status: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * statustype
             * Format: uri
             * @description URL-referentie naar het STATUSTYPE (in de Catalogi API).
             */
      statustype: string;
      /**
             * datum status gezet
             * Format: date-time
             * @description De datum waarop de ZAAK de status heeft verkregen.
             */
      datumStatusGezet: string;
      /**
             * statustoelichting
             * @description Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
             */
      statustoelichting?: string;
      /**
             * indicatieLaatstGezetteStatus
             * @description Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak.
             */
      readonly indicatieLaatstGezetteStatus: boolean;
      /**
             * Gezet door
             * Format: uri
             * @description De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
             */
      gezetdoor?: string;
      /** zaakInformatieobjecten */
      readonly zaakinformatieobjecten: string[];
    };
    StatusExpanded: components['schemas']['Status'] & {
      _expand?: components['schemas']['StatusEmbedded'];
    };
    StatusEmbedded: {
      statustype?: components['schemas']['StatusType'];
      gezetdoor?: components['schemas']['Rol'];
      zaakinformatieobjecten?: components['schemas']['ZaakInformatieObject'][];
    };
    StatusRequestbody: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * statustype
             * Format: uri
             * @description URL-referentie naar het STATUSTYPE (in de Catalogi API).
             */
      statustype: string;
      /**
             * datum status gezet
             * Format: date-time
             * @description De datum waarop de ZAAK de status heeft verkregen.
             */
      datumStatusGezet: string;
      /**
             * statustoelichting
             * @description Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
             */
      statustoelichting?: string;
      /**
             * indicatieLaatstGezetteStatus
             * @description Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak.
             */
      readonly indicatieLaatstGezetteStatus: boolean;
      /**
             * Gezet door
             * Format: uri
             * @description De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
             */
      gezetdoor?: string;
    };
    SubVerblijfBuitenland: {
      /**
             * lnd landcode
             * @description De code, behorende bij de landnaam, zoals opgenomen in de Land/Gebied-tabel van de BRP.
             */
      lndLandcode: string;
      /**
             * lnd landnaam
             * @description De naam van het land, zoals opgenomen in de Land/Gebied-tabel van de BRP.
             */
      lndLandnaam: string;
      /** sub adres buitenland 1 */
      subAdresBuitenland_1?: string;
      /** sub adres buitenland 2 */
      subAdresBuitenland_2?: string;
      /** sub adres buitenland 3 */
      subAdresBuitenland_3?: string;
    };
    TerreinGebouwdObjectAdres: {
      /** num identificatie */
      numIdentificatie?: string;
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      oaoIdentificatie: string;
      /** wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** postcode */
      aoaPostcode?: string;
      /** huisnummer */
      aoaHuisnummer: number;
      /** huisletter */
      aoaHuisletter?: string;
      /** huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** locatie aanduiding */
      ogoLocatieAanduiding?: string;
    };
    /** @enum {string} */
    TypeWaterdeelEnum: 'zee' | 'waterloop' | 'watervlakte' | 'greppel_droge_sloot';
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
    VerblijfsAdres: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      aoaIdentificatie: string;
      /** wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** postcode */
      aoaPostcode?: string;
      /** huisnummer */
      aoaHuisnummer: number;
      /** huisletter */
      aoaHuisletter?: string;
      /** huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** locatie omschrijving */
      inpLocatiebeschrijving?: string;
    };
    /** @description Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK */
    Verlenging: {
      /**
             * reden verlenging
             * @description Omschrijving van de reden voor het verlengen van de behandeling van de zaak.
             */
      reden: string;
      /**
             * duur verlenging
             * Format: duration
             * @description Het aantal werkbare dagen waarmee de doorlooptijd van de behandeling van de ZAAK is verlengd (of verkort) ten opzichte van de eerder gecommuniceerde doorlooptijd.
             */
      duur: string;
    } | null;
    /** @enum {string} */
    VertrouwelijkheidaanduidingEnum: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
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
    WozObjectAdres: {
      /**
             * identificatie
             * @description De unieke identificatie van het OBJECT
             */
      aoaIdentificatie: string;
      /** wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** postcode */
      aoaPostcode?: string;
      /** huisnummer */
      aoaHuisnummer: number;
      /** huisletter */
      aoaHuisletter?: string;
      /** huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** locatie omschrijving */
      locatieOmschrijving?: string;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    Zaak: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * identificatie
             * @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
             */
      identificatie?: string;
      /**
             * bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      bronorganisatie: string;
      /**
             * omschrijving
             * @description Een korte omschrijving van de zaak.
             */
      omschrijving?: string;
      /**
             * toelichting
             * @description Een toelichting op de zaak.
             */
      toelichting?: string;
      /**
             * zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
             */
      zaaktype: string;
      /**
             * registratiedatum
             * Format: date
             * @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
             */
      registratiedatum?: string;
      /**
             * verantwoordelijke organisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      verantwoordelijkeOrganisatie: string;
      /**
             * startdatum
             * Format: date
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum: string;
      /**
             * einddatum
             * Format: date
             * @description De datum waarop de uitvoering van de zaak afgerond is.
             */
      readonly einddatum: string | null;
      /**
             * einddatum gepland
             * Format: date
             * @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
             */
      einddatumGepland?: string | null;
      /**
             * uiterlijke einddatum afdoening
             * Format: date
             * @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
             */
      uiterlijkeEinddatumAfdoening?: string | null;
      /**
             * publicatiedatum
             * Format: date
             * @description Datum waarop (het starten van) de zaak gepubliceerd is of wordt.
             */
      publicatiedatum?: string | null;
      /**
             * communicatiekanaal
             * Format: uri
             * @description Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen.
             */
      communicatiekanaal?: string;
      /**
             * producten of diensten
             * @description De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn.
             */
      productenOfDiensten?: string[];
      /**
             * Vertrouwlijkheidaanduiding
             * @description Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft.
             */
      vertrouwelijkheidaanduiding?: components['schemas']['VertrouwelijkheidaanduidingEnum'];
      /**
             * betalingsindicatie
             * @description Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten.
             *     * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald.
             *     * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald.
             *     * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald.
             */
      betalingsindicatie?: components['schemas']['BetalingsindicatieEnum'] | components['schemas']['BlankEnum'];
      /**
             * betalingsindicatieWeergave
             * @description Uitleg bij `betalingsindicatie`.
             */
      readonly betalingsindicatieWeergave: string;
      /**
             * laatste betaaldatum
             * Format: date-time
             * @description De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak.
             */
      laatsteBetaaldatum?: string | null;
      /**
             * zaakgeometrie
             * @description Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON.
             */
      zaakgeometrie?: Omit<components['schemas']['GeoJSONGeometry'], 'type'> | null;
      /**
             * verlenging
             * @description Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK
             */
      verlenging?: components['schemas']['Verlenging'] | null;
      /**
             * opschorting
             * @description Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK
             */
      opschorting?: components['schemas']['Opschorting'] | null;
      /**
             * selectielijstklasse
             * Format: uri
             * @description URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak.
             */
      selectielijstklasse?: string;
      /**
             * Is deelzaak van
             * Format: uri
             * @description URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is.
             */
      hoofdzaak?: string | null;
      /**
             * is deelzaak van
             * @description URL-referenties naar deel ZAAKen.
             */
      readonly deelzaken: string[];
      /**
             * zaak
             * @description Een lijst van relevante andere zaken.
             */
      relevanteAndereZaken?: components['schemas']['RelevanteZaak'][];
      /** zaak */
      readonly eigenschappen: string[];
      /** zaak */
      readonly rollen: string[];
      /**
             * status
             * Format: uri
             * @description Indien geen status bekend is, dan is de waarde 'null'
             */
      readonly status: string | null;
      /** zaak */
      readonly zaakinformatieobjecten: string[];
      /** zaak */
      readonly zaakobjecten: string[];
      /**
             * zaak
             * @description Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`.
             */
      kenmerken?: components['schemas']['ZaakKenmerk'][];
      /**
             * archiefnominatie
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             */
      archiefnominatie?: (components['schemas']['ArchiefnominatieEnum'] | components['schemas']['BlankEnum'] | components['schemas']['NullEnum']) | null;
      /**
             * archiefstatus
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
             *     * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
             *     * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
             *     * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
             */
      archiefstatus?: components['schemas']['ArchiefstatusEnum'];
      /**
             * archiefactiedatum
             * Format: date
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum?: string | null;
      /**
             * resultaat
             * Format: uri
             * @description URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null'
             */
      readonly resultaat: string | null;
      /**
             * opdrachtgevende organisatie
             * @description De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft.
             */
      opdrachtgevendeOrganisatie?: string;
      /**
             * Procesobjectaard
             * @description Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft.
             */
      processobjectaard?: string | null;
      /**
             * startdatum bewaartermijn
             * Format: date
             * @description De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden.
             */
      startdatumBewaartermijn?: string | null;
      /**
             * processobject
             * @description Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn.
             */
      processobject?: components['schemas']['Processobject'] | null;
    };
    ZaakExpanded: components['schemas']['Zaak'] & {
      _expand?: components['schemas']['ZaakEmbedded'];
    };
    /** @description <b>Let op</b>: de definities van onderstaande attributen kunnen recursie bevatten en worden mogelijk niet goed weergegeven in de gegenereerde voorbeeldberichten van Redoc of Swagger.  Check altijd de yaml-specificitie voor correcte interpretatie en gebruik de referentie-implementatie om correcte responsberichten te genereren. */
    ZaakEmbedded: {
      zaaktype?: components['schemas']['ZaakType'];
      /** @example {} */
      hoofdzaak?: components['schemas']['ZaakExpanded'] | components['schemas']['EmptyObject'];
      /** @example [
             *       {}
             *     ] */
      deelzaken?: components['schemas']['ZaakExpanded'][];
      /** @example [
             *       {}
             *     ] */
      relevanteAndereZaken?: components['schemas']['ZaakExpanded'][];
      eigenschappen?: components['schemas']['ZaakEigenschap'][];
      rollen?: components['schemas']['RolExpanded'][];
      status?: components['schemas']['StatusExpanded'] | components['schemas']['EmptyObject'];
      zaakobjecten?: components['schemas']['ZaakObject'][];
      resultaat?: components['schemas']['ResultaatExpanded'] | components['schemas']['EmptyObject'];
    };
    /**
         * @description Leeg object. Dit wordt teruggeven indien het te expanderen veld een null waarde heeft.
         * @example {}
         */
    EmptyObject: Record<string, never>;
    /** @description A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
         *     of primary key relationships.  Specifically:
         *
         *     * A 'url' field is included instead of the 'id' field.
         *     * Relationships to other instances are hyperlinks, instead of primary keys.
         *
         *     NOTE: this only works with DRF 3.1.0 and above. */
    ZaakBesluit: {
      /**
             * url
             * Format: uri
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * besluit
             * Format: uri
             * @description URL-referentie naar het BESLUIT (in de Besluiten API), waar ook de relatieinformatie opgevraagd kan worden.
             */
      besluit: string;
    };
    ZaakContactMoment: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * contactmoment
             * Format: uri
             * @description URL-referentie naar het CONTACTMOMENT (in de Klantinteractie API)
             */
      contactmoment: string;
    };
    /** @description A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
         *     of primary key relationships.  Specifically:
         *
         *     * A 'url' field is included instead of the 'id' field.
         *     * Relationships to other instances are hyperlinks, instead of primary keys.
         *
         *     NOTE: this only works with DRF 3.1.0 and above. */
    ZaakEigenschap: {
      /**
             * url
             * Format: uri
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             */
      zaak: string;
      /**
             * eigenschap
             * Format: uri
             * @description URL-referentie naar de EIGENSCHAP (in de Catalogi API).
             */
      eigenschap: string;
      /**
             *  naam
             * @description De naam van de EIGENSCHAP (overgenomen uit de Catalogi API).
             */
      readonly naam: string;
      /** waarde */
      waarde: string;
    };
    ZaakInformatieObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
             */
      informatieobject: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /** aardRelatieWeergave */
      readonly aardRelatieWeergave: components['schemas']['AardRelatieWeergaveEnum'];
      /**
             * titel
             * @description De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is.
             */
      titel?: string;
      /**
             * beschrijving
             * @description Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * registratiedatum
             * Format: date-time
             * @description De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd.
             */
      readonly registratiedatum: string;
      /**
             * vernietigingsdatum
             * Format: date-time
             * @description De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden.
             */
      vernietigingsdatum?: string | null;
      /**
             * status
             * Format: uri
             * @description De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover.
             */
      status?: string | null;
    };
    ZaakInformatieObjectExpanded: components['schemas']['ZaakInformatieObject'] & {
      _expand?: components['schemas']['ZaakInformatieObjectEmbedded'];
    };
    ZaakInformatieObjectEmbedded: {
      status?: components['schemas']['StatusExpanded'];
    };
    ZaakKenmerk: {
      /**
             * kenmerk
             * @description Identificeert uniek de zaak in een andere administratie.
             */
      kenmerk: string;
      /**
             * bron
             * @description De aanduiding van de administratie waar het kenmerk op slaat.
             */
      bron: string;
    };
    ZaakObject: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * object
             * Format: uri
             * @description URL-referentie naar de resource die het OBJECT beschrijft.
             */
      object?: string;
      /**
             * zaakobjecttype
             * Format: uri
             * @description URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API).
             */
      zaakobjecttype?: string;
      /**
             * object type
             * @description Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adres` - Adres
             *     * `besluit` - Besluit
             *     * `buurt` - Buurt
             *     * `enkelvoudig_document` - Enkelvoudig document
             *     * `gemeente` - Gemeente
             *     * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte
             *     * `huishouden` - Huishouden
             *     * `inrichtingselement` - Inrichtingselement
             *     * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak
             *     * `kunstwerkdeel` - Kunstwerkdeel
             *     * `maatschappelijke_activiteit` - Maatschappelijke activiteit
             *     * `medewerker` - Medewerker
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `openbare_ruimte` - Openbare ruimte
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `pand` - Pand
             *     * `spoorbaandeel` - Spoorbaandeel
             *     * `status` - Status
             *     * `terreindeel` - Terreindeel
             *     * `terrein_gebouwd_object` - Terrein gebouwd object
             *     * `vestiging` - Vestiging
             *     * `waterdeel` - Waterdeel
             *     * `wegdeel` - Wegdeel
             *     * `wijk` - Wijk
             *     * `woonplaats` - Woonplaats
             *     * `woz_deelobject` - Woz deel object
             *     * `woz_object` - Woz object
             *     * `woz_waarde` - Woz waarde
             *     * `zakelijk_recht` - Zakelijk recht
             *     * `overige` - Overige
             */
      objectType: components['schemas']['ObjectTypeEnum'];
      /**
             * object type overige
             * @description Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft.
             */
      objectTypeOverige?: string;
      /**
             * definitie object type overige
             * @description Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.
             *
             *     * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/).
             *     * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat.
             *     * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.
             *
             *     Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype.
             */
      objectTypeOverigeDefinitie?: components['schemas']['ObjectTypeOverigeDefinitie'] | null;
      /**
             * relatieomschrijving
             * @description Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
             */
      relatieomschrijving?: string;
      _expand?: components['schemas']['ZaakObjectEmbedded'];
    };
    ZaakObjectExpanded: {
      objectType: 'ZaakObjectExpanded';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & {
      _expand?: components['schemas']['ZaakObjectEmbedded'];
    });
    ZaakObjectEmbedded: {
      zaakobjecttype?: components['schemas']['ZaakObjectType'];
    };
    ZaakVerzoek: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid: string;
      /**
             * zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * verzoek
             * Format: uri
             * @description URL-referentie naar het VERZOEK (in de Klantinteractie API)
             */
      verzoek: string;
    };
    ZaakZoek: {
      zaakgeometrie?: components['schemas']['GeoWithin'];
      /**
             * @description Array of unieke resource identifiers (UUID4)
             * @example [
             *       "e80b7507-199a-484c-ad49-c41a1e43a6e7",
             *       "78e12133-c467-4202-91ba-4417baa52801"
             *     ]
             */
      uuid__in?: string[];
      /**
             * Identificatie
             * @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
             * @example zaak123
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             * @example 000000000
             */
      bronorganisatie?: string;
      /**
             * @description Array van bronorganisaties.
             * @example [
             *       "000000000",
             *       "479559740",
             *       "875883461"
             *     ]
             */
      bronorganisatie__in?: string[];
      /**
             * Zaaktype
             * @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
             * @example https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/e80b7507-199a-484c-ad49-c41a1e43a6e7
             */
      zaaktype?: string;
      /**
             * @description Array van zaaktypen.
             * @example [
             *       "https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/e80b7507-199a-484c-ad49-c41a1e43a6e7",
             *       "https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/78e12133-c467-4202-91ba-4417baa52801"
             *     ]
             */
      zaaktype__in?: string[];
      /**
             * Archiefnominatie
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats. * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             * @example blijvend_bewaren
             * @enum {string}
             */
      archiefnominatie?: 'blijvend_bewaren' | 'vernietigen';
      /**
             * Archiefnominatie in
             * @description Multiple values may be separated by commas.
             * @example [
             *       "blijvend_bewaren",
             *       "vernietigen"
             *     ]
             */
      archiefnominatie__in?: string[];
      /**
             * Archiefactiedatum
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             * @example 2019-01-02
             */
      archiefactiedatum?: string;
      /**
             * Archiefactiedatum is leeg
             * @example false
             */
      archiefactiedatum__isnull?: boolean;
      /**
             * Archiefactiedatum kleiner dan
             * @example 2020-01-02
             */
      archiefactiedatum__lt?: string;
      /**
             * Archiefactiedatum  groter dan
             * @example 2018-01-02
             */
      archiefactiedatum__gt?: string;
      /**
             * Archiefstatus
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd. * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt. * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden. * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
             * @example nog_te_archiveren
             * @enum {string}
             */
      archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
      /**
             * Archiefstatus in
             * @description Multiple values may be separated by commas.
             * @example [
             *       "nog_te_archiveren",
             *       "gearchiveerd",
             *       "gearchiveerd_procestermijn_onbekend",
             *       "overgedragen"
             *     ]
             */
      archiefstatus__in?: string[];
      /**
             * Startdatum
             * @description De datum waarop met de uitvoering van de zaak is gestart
             * @example 2017-01-02
             */
      startdatum?: string;
      /**
             * Startdatum groter dan
             * @example 2018-01-02
             */
      startdatum__gt?: string;
      /**
             * Startdatum groter dan of gelijk
             * @example 2016-01-02
             */
      startdatum__gte?: string;
      /**
             * Startdatum kleiner dan
             * @example 2018-01-02
             */
      startdatum__lt?: string;
      /**
             * Startdatum kleiner dan of gelijk
             * @example 2018-01-02
             */
      startdatum__lte?: string;
      /**
             * Registratiedatum
             * @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
             * @example 2015-01-02
             */
      registratiedatum?: string;
      /**
             * Registratiedatum groter dan
             * @example 2014-01-02
             */
      registratiedatum__gt?: string;
      /**
             * Registratiedatum kleiner dan
             * @example 2016-01-02
             */
      registratiedatum__lt?: string;
      /**
             * Einddatum
             * @description De datum waarop de uitvoering van de zaak afgerond is.
             * @example 2022-01-02
             */
      einddatum?: string;
      /**
             * Einddatum is leeg
             * @example false
             */
      einddatum__isnull?: boolean;
      /**
             * Einddatum groter dan
             * @example 2021-01-02
             */
      einddatum__gt?: string;
      /**
             * Einddatum kleiner dan
             * @example 2023-01-02
             */
      einddatum__lt?: string;
      /**
             * Einddatum gepland
             * @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
             * @example 2022-01-02
             */
      einddatumGepland?: string;
      /**
             * Einddatum gepland groter dan
             * @example 2021-01-02
             */
      einddatumGepland__gt?: string;
      /**
             * Einddatum gepland kleiner dan
             * @example 2024-01-02
             */
      einddatumGepland__lt?: string;
      /**
             * Uiterlijke einddatumAfdoening
             * @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
             * @example 2024-01-02
             */
      uiterlijkeEinddatumAfdoening?: string;
      /**
             * Uiterlijke einddatumAfdoening groter dan
             * @example 2023-01-02
             */
      uiterlijkeEinddatumAfdoening__gt?: string;
      /**
             * Uiterlijke einddatumAfdoening kleiner dan
             * @example 2025-01-02
             */
      uiterlijkeEinddatumAfdoening__lt?: string;
      /**
             * Rol  betrokkenetype
             * @description Type van de `betrokkene`. Uitleg bij mogelijke waarden: * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `vestiging` - Vestiging * `organisatorische_eenheid` - Organisatorische eenheid * `medewerker` - Medewerker
             * @example natuurlijk_persoon
             * @enum {string}
             */
      rol__betrokkeneType?: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
      /**
             * Rol  betrokkene
             * @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
             * @example https://example.com
             */
      rol__betrokkene?: string;
      /**
             * Rol  omschrijvinggeneriek
             * @description Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
             * @example initiator
             * @enum {string}
             */
      rol__omschrijvingGeneriek?: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
      /**
             * Maximalevertrouwelijkheidaanduiding
             * @description Zaken met een vertrouwelijkheidaanduiding die beperkter is dan de aangegeven aanduiding worden uit de resultaten gefiltered.
             * @example zaakvertrouwelijk
             * @enum {string}
             */
      maximaleVertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpbsn
             * @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  anpidentificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpa nummer
             * @description Het administratienummer van de persoon, bedoeld in de Wet BRP
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
      /**
             * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  innnnpid
             * @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
      /**
             * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  annidentificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  vestiging  vestigingsnummer
             * @description Een korte unieke aanduiding van de Vestiging.
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
      /**
             * Rol  betrokkeneidentificatie  medewerker  identificatie
             * @description Een korte unieke aanduiding van de MEDEWERKER.
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__medewerker__identificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  organisatorischeeenheid  identificatie
             * @description Een korte identificatie van de organisatorische eenheid.
             * @example 123456789
             */
      rol__betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
      /**
             * expand
             * @description Examples:
             *     `expand=zaaktype, status, status.statustype, hoofdzaak.status.statustype,'  hoofdzaak.deelzaken.status.statustype`Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt.
             * @example zaaktype, status, status.statustype, hoofdzaak.status.statustype, hoofdzaak.deelzaken.status.statustype
             */
      expand?: string;
      /**
             * Ordering
             * @description Het veld waarop de resultaten geordend worden. Het minnetje betekent omgekeerde volgorde.
             * @example -startdatum
             * @enum {string}
             */
      ordering?: 'startdatum' | '-startdatum' | 'einddatum' | '-einddatum' | 'publicatiedatum' | '-publicatiedatum' | 'archiefactiedatum' | '-archiefactiedatum' | 'registratiedatum' | '-registratiedatum' | 'identificatie' | '-identificatie';
    };
    ZakelijkRechtHeeftAlsGerechtigde: {
      /** natuurlijkPersoon */
      natuurlijkPersoon?: components['schemas']['RolNatuurlijkPersoon'];
      /** nietNatuurlijkPersoon */
      nietNatuurlijkPersoon?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    adres_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectAdres'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'adres';
    };
    adres_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectAdres'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'adres';
    };
    besluit_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'besluit';
    };
    besluit_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'besluit';
    };
    betrokkene_identificatie_RolMedewerker: {
      /** betrokkeneIdentificatie */
      betrokkeneIdentificatie?: components['schemas']['RolMedewerker'];
    };
    betrokkene_identificatie_RolNatuurlijkPersoon: {
      /** betrokkeneIdentificatie */
      betrokkeneIdentificatie?: components['schemas']['RolNatuurlijkPersoon'];
    };
    betrokkene_identificatie_RolNietNatuurlijkPersoon: {
      /** betrokkeneIdentificatie */
      betrokkeneIdentificatie?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    betrokkene_identificatie_RolOrganisatorischeEenheid: {
      /** betrokkeneIdentificatie */
      betrokkeneIdentificatie?: components['schemas']['RolOrganisatorischeEenheid'];
    };
    betrokkene_identificatie_RolVestiging: {
      /** betrokkeneIdentificatie */
      betrokkeneIdentificatie?: components['schemas']['RolVestiging'];
    };
    buurt_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectBuurt'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'buurt';
    };
    buurt_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectBuurt'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'buurt';
    };
    enkelvoudig_document_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'enkelvoudig_document';
    };
    enkelvoudig_document_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'enkelvoudig_document';
    };
    gemeente_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeente'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'gemeente';
    };
    gemeente_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeente'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'gemeente';
    };
    gemeentelijke_openbare_ruimte_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeentelijkeOpenbareRuimte'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'gemeentelijke_openbare_ruimte';
    };
    gemeentelijke_openbare_ruimte_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeentelijkeOpenbareRuimte'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'gemeentelijke_openbare_ruimte';
    };
    huishouden_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectHuishouden'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'huishouden';
    };
    huishouden_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectHuishouden'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'huishouden';
    };
    inrichtingselement_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectInrichtingselement'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'inrichtingselement';
    };
    inrichtingselement_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectInrichtingselement'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'inrichtingselement';
    };
    kadastrale_onroerende_zaak_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKadastraleOnroerendeZaak'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'kadastrale_onroerende_zaak';
    };
    kadastrale_onroerende_zaak_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKadastraleOnroerendeZaak'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'kadastrale_onroerende_zaak';
    };
    kunstwerkdeel_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKunstwerkdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'kunstwerkdeel';
    };
    kunstwerkdeel_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKunstwerkdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'kunstwerkdeel';
    };
    maatschappelijke_activiteit_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectMaatschappelijkeActiviteit'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'maatschappelijke_activiteit';
    };
    maatschappelijke_activiteit_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectMaatschappelijkeActiviteit'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'maatschappelijke_activiteit';
    };
    medewerker_Rol: Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolMedewerker'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      betrokkeneType: 'medewerker';
    };
    medewerker_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolMedewerker'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'medewerker';
    };
    medewerker_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolMedewerker'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'medewerker';
    };
    natuurlijk_persoon_Rol: Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      betrokkeneType: 'natuurlijk_persoon';
    };
    natuurlijk_persoon_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'natuurlijk_persoon';
    };
    natuurlijk_persoon_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'natuurlijk_persoon';
    };
    niet_natuurlijk_persoon_Rol: Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNietNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      betrokkeneType: 'niet_natuurlijk_persoon';
    };
    niet_natuurlijk_persoon_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolNietNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'niet_natuurlijk_persoon';
    };
    niet_natuurlijk_persoon_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolNietNatuurlijkPersoon'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'niet_natuurlijk_persoon';
    };
    object_identificatie_ObjectAdres: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectAdres'];
    };
    object_identificatie_ObjectBuurt: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectBuurt'];
    };
    object_identificatie_ObjectGemeente: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectGemeente'];
    };
    object_identificatie_ObjectGemeentelijkeOpenbareRuimte: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectGemeentelijkeOpenbareRuimte'];
    };
    object_identificatie_ObjectHuishouden: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectHuishouden'];
    };
    object_identificatie_ObjectInrichtingselement: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectInrichtingselement'];
    };
    object_identificatie_ObjectKadastraleOnroerendeZaak: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectKadastraleOnroerendeZaak'];
    };
    object_identificatie_ObjectKunstwerkdeel: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectKunstwerkdeel'];
    };
    object_identificatie_ObjectMaatschappelijkeActiviteit: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectMaatschappelijkeActiviteit'];
    };
    object_identificatie_ObjectOpenbareRuimte: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectOpenbareRuimte'];
    };
    object_identificatie_ObjectOverige: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectOverige'];
    };
    object_identificatie_ObjectPand: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectPand'];
    };
    object_identificatie_ObjectSpoorbaandeel: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectSpoorbaandeel'];
    };
    object_identificatie_ObjectTerreinGebouwdObject: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectTerreinGebouwdObject'];
    };
    object_identificatie_ObjectTerreindeel: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectTerreindeel'];
    };
    object_identificatie_ObjectWaterdeel: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWaterdeel'];
    };
    object_identificatie_ObjectWegdeel: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWegdeel'];
    };
    object_identificatie_ObjectWijk: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWijk'];
    };
    object_identificatie_ObjectWoonplaats: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWoonplaats'];
    };
    object_identificatie_ObjectWozDeelobject: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWozDeelobject'];
    };
    object_identificatie_ObjectWozObject: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWozObject'];
    };
    object_identificatie_ObjectWozWaarde: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectWozWaarde'];
    };
    object_identificatie_ObjectZakelijkRecht: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['ObjectZakelijkRecht'];
    };
    object_identificatie_RolMedewerker: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['RolMedewerker'];
    };
    object_identificatie_RolNatuurlijkPersoon: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['RolNatuurlijkPersoon'];
    };
    object_identificatie_RolNietNatuurlijkPersoon: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    object_identificatie_RolOrganisatorischeEenheid: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['RolOrganisatorischeEenheid'];
    };
    object_identificatie_RolVestiging: {
      /** objectIdentificatie */
      objectIdentificatie?: components['schemas']['RolVestiging'];
    };
    openbare_ruimte_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOpenbareRuimte'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'openbare_ruimte';
    };
    openbare_ruimte_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOpenbareRuimte'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'openbare_ruimte';
    };
    organisatorische_eenheid_Rol: Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolOrganisatorischeEenheid'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      betrokkeneType: 'organisatorische_eenheid';
    };
    organisatorische_eenheid_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolOrganisatorischeEenheid'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'organisatorische_eenheid';
    };
    organisatorische_eenheid_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolOrganisatorischeEenheid'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'organisatorische_eenheid';
    };
    overige_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOverige'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'overige';
    };
    overige_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOverige'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'overige';
    };
    pand_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectPand'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'pand';
    };
    pand_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectPand'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'pand';
    };
    spoorbaandeel_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectSpoorbaandeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'spoorbaandeel';
    };
    spoorbaandeel_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectSpoorbaandeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'spoorbaandeel';
    };
    status_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'status';
    };
    status_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'status';
    };
    terrein_gebouwd_object_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreinGebouwdObject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'terrein_gebouwd_object';
    };
    terrein_gebouwd_object_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreinGebouwdObject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'terrein_gebouwd_object';
    };
    terreindeel_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreindeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'terreindeel';
    };
    terreindeel_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreindeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'terreindeel';
    };
    vestiging_Rol: Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolVestiging'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      betrokkeneType: 'vestiging';
    };
    vestiging_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolVestiging'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'vestiging';
    };
    vestiging_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['betrokkene_identificatie_RolVestiging'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'vestiging';
    };
    waterdeel_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWaterdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'waterdeel';
    };
    waterdeel_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWaterdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'waterdeel';
    };
    wegdeel_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWegdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'wegdeel';
    };
    wegdeel_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWegdeel'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'wegdeel';
    };
    wijk_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWijk'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'wijk';
    };
    wijk_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWijk'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'wijk';
    };
    woonplaats_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWoonplaats'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woonplaats';
    };
    woonplaats_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWoonplaats'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woonplaats';
    };
    woz_deelobject_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozDeelobject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_deelobject';
    };
    woz_deelobject_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozDeelobject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_deelobject';
    };
    woz_object_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozObject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_object';
    };
    woz_object_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozObject'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_object';
    };
    woz_waarde_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozWaarde'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_waarde';
    };
    woz_waarde_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozWaarde'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'woz_waarde';
    };
    zakelijk_recht_ZaakObject: Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectZakelijkRecht'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'zakelijk_recht';
    };
    zakelijk_recht_PatchedZaakObject: Omit<components['schemas']['PatchedZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectZakelijkRecht'] & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      objectType: 'zakelijk_recht';
    };
    /** @enum {string} */
    IndicatieInternOfExternEnum: 'intern' | 'extern';
    /** @description Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE. */
    ReferentieProces: {
      /**
             * Referentieprocesnaam
             * @description De naam van het Referentieproces.
             */
      naam: string;
      /**
             * Referentieproceslink
             * Format: uri
             * @description De URL naar de beschrijving van het Referentieproces
             */
      link?: string;
    };
    /** @description De CATALOGUS waaraan het ZAAKTYPE is ontleend. */
    BronCatalogus: {
      /**
             * URL-referentie broncatalogus
             * Format: uri
             */
      url: string;
      /**
             * broncatalogus domein
             * @description Het domein van de CATALOGUS waaraan het ZAAKTYPE is ontleend.
             */
      domein: string;
      /**
             * broncatalogus rsin
             * @description Het RSIN van de INGESCHREVEN NIET-NATUURLIJK PERSOON die beheerder is van de CATALOGUS waaraan het ZAAKTYPE is ontleend.
             */
      rsin: string;
    };
    /** @description Het zaaktype binnen de CATALOGUS waaraan dit ZAAKTYPE is ontleend. */
    BronZaaktype: {
      /**
             * URL-referentie bronzaaktype
             * Format: uri
             */
      url: string;
      /**
             * bronzaaktype identificatie
             * @description De Zaaktype-identificatie van het bronzaaktype binnen de CATALOGUS.
             */
      identificatie: string;
      /**
             * bronzaaktype omschrijving
             * @description De Zaaktype-omschrijving van het bronzaaktype, zoals gehanteerd in de Broncatalogus.
             */
      omschrijving: string;
    };
    /** @enum {string} */
    'schemas-AardRelatieEnum': 'vervolg' | 'bijdrage' | 'onderwerp';
    ZaakTypenRelatie: {
      /**
             * gerelateerd zaaktype
             * Format: uri
             * @description URL referentie naar het gerelateerde zaaktype, mogelijks in een extern ZTC.
             */
      zaaktype: string;
      /**
             * aard relatie
             * @description Omschrijving van de aard van de relatie van zaken van het ZAAKTYPE tot zaken van het andere ZAAKTYPE
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `vervolg` - Vervolg
             *     * `bijdrage` - Bijdrage
             *     * `onderwerp` - Onderwerp
             */
      aardRelatie: components['schemas']['schemas-AardRelatieEnum'];
      /**
             * toelichting
             * @description Een toelichting op de aard van de relatie tussen beide ZAAKTYPEN.
             */
      toelichting?: string;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ZaakType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * identificatie
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      identificatie: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van ZAAKen van het ZAAKTYPE.
             */
      omschrijving: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van ZAAKen van het ZAAKTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * vertrouwelijkheidaanduiding
             * @description Aanduiding van de mate waarin zaakdossiers van ZAAKen van dit ZAAKTYPE voor de openbaarheid bestemd zijn. Indien de zaak bij het aanmaken geen vertrouwelijkheidaanduiding krijgt, dan wordt deze waarde gezet.
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
      vertrouwelijkheidaanduiding: components['schemas']['VertrouwelijkheidaanduidingEnum'];
      /**
             * doel
             * @description Een omschrijving van hetgeen beoogd is te bereiken met een zaak van dit zaaktype.
             */
      doel: string;
      /**
             * aanleiding
             * @description Een omschrijving van de gebeurtenis die leidt tot het starten van een ZAAK van dit ZAAKTYPE.
             */
      aanleiding: string;
      /**
             * toelichting
             * @description Een eventuele toelichting op dit zaaktype, zoals een beschrijving van het procesverloop op de hoofdlijnen.
             */
      toelichting?: string;
      /**
             * indicatie intern of extern
             * @description Een aanduiding waarmee onderscheid wordt gemaakt tussen ZAAKTYPEn die Intern respectievelijk Extern geïnitieerd worden. Indien van beide sprake kan zijn, dan prevaleert de externe initiatie.
             */
      indicatieInternOfExtern: components['schemas']['IndicatieInternOfExternEnum'];
      /**
             * handeling initiator
             * @description Werkwoord dat hoort bij de handeling die de initiator verricht bij dit zaaktype. Meestal 'aanvragen', 'indienen' of 'melden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_initiator
             */
      handelingInitiator: string;
      /**
             * onderwerp
             * @description Het onderwerp van ZAAKen van dit ZAAKTYPE. In veel gevallen nauw gerelateerd aan de product- of dienstnaam uit de Producten- en Dienstencatalogus (PDC). Bijvoorbeeld: 'Evenementenvergunning', 'Geboorte', 'Klacht'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.onderwerp
             */
      onderwerp: string;
      /**
             * handeling behandelaar
             * @description Werkwoord dat hoort bij de handeling die de behandelaar verricht bij het afdoen van ZAAKen van dit ZAAKTYPE. Meestal 'behandelen', 'uitvoeren', 'vaststellen' of 'onderhouden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_behandelaar
             */
      handelingBehandelaar: string;
      /**
             * doorlooptijd behandeling
             * Format: duration
             * @description De periode waarbinnen volgens wet- en regelgeving een ZAAK van het ZAAKTYPE afgerond dient te zijn, in kalenderdagen.
             */
      doorlooptijd: string;
      /**
             * servicenorm behandeling
             * Format: duration
             * @description De periode waarbinnen verwacht wordt dat een ZAAK van het ZAAKTYPE afgerond wordt conform de geldende servicenormen van de zaakbehandelende organisatie(s).
             */
      servicenorm?: string | null;
      /**
             * Opschorting/aanhouding mogelijk
             * @description Aanduiding die aangeeft of ZAAKen van dit mogelijk ZAAKTYPE kunnen worden opgeschort en/of aangehouden.
             */
      opschortingEnAanhoudingMogelijk: boolean;
      /**
             * verlenging mogelijk
             * @description Aanduiding die aangeeft of de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd.
             */
      verlengingMogelijk: boolean;
      /**
             * verlengingstermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat waarmee de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd. Mag alleen een waarde bevatten als verlenging mogelijk is.
             */
      verlengingstermijn?: string | null;
      /**
             * trefwoorden
             * @description Een trefwoord waarmee ZAAKen van het ZAAKTYPE kunnen worden gekarakteriseerd.
             */
      trefwoorden?: string[];
      /**
             * publicatie indicatie
             * @description Aanduiding of (het starten van) een ZAAK dit ZAAKTYPE gepubliceerd moet worden.
             */
      publicatieIndicatie: boolean;
      /**
             * publicatietekst
             * @description De generieke tekst van de publicatie van ZAAKen van dit ZAAKTYPE.
             */
      publicatietekst?: string;
      /**
             * verantwoordingsrelatie
             * @description De relatie tussen ZAAKen van dit ZAAKTYPE en de beleidsmatige en/of financiële verantwoording.
             */
      verantwoordingsrelatie?: string[];
      /**
             * producten of diensten
             * @description Het product of de dienst die door ZAAKen van dit ZAAKTYPE wordt voortgebracht.
             */
      productenOfDiensten: string[];
      /**
             * selectielijst procestype
             * Format: uri
             * @description URL-referentie naar een vanuit archiveringsoptiek onderkende groep processen met dezelfde kenmerken (PROCESTYPE in de Selectielijst API).
             */
      selectielijstProcestype?: string;
      /**
             * referentieproces
             * @description Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE.
             */
      referentieproces: components['schemas']['ReferentieProces'];
      /**
             * verantwoordelijke
             * @description De (soort) organisatorische eenheid of (functie van) medewerker die verantwoordelijk is voor de uitvoering van zaken van het ZAAKTYPE.
             */
      verantwoordelijke: string;
      /** Zaaktype */
      readonly zaakobjecttypen: string[];
      /**
             * broncatalogus
             * @description De CATALOGUS waaraan het ZAAKTYPE is ontleend.
             */
      broncatalogus?: components['schemas']['BronCatalogus'];
      /**
             * bronzaaktype
             * @description Het zaaktype binnen de CATALOGUS waaraan dit ZAAKTYPE is ontleend.
             */
      bronzaaktype?: components['schemas']['BronZaaktype'];
      /**
             * Catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort.
             */
      catalogus: string;
      /**
             * Zaaktype
             * @description URL-referenties naar de STATUSTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      readonly statustypen: string[];
      /**
             * is relevant voor
             * @description URL-referenties naar de RESULTAATTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      readonly resultaattypen: string[];
      /**
             * Zaaktype
             * @description URL-referenties naar de EIGENSCHAPPEN die aanwezig moeten zijn in ZAKEN van dit ZAAKTYPE.
             */
      readonly eigenschappen: string[];
      /** informatieobjecttypen */
      readonly informatieobjecttypen: string;
      /**
             * Zaaktype
             * @description URL-referenties naar de ROLTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      readonly roltypen: string[];
      /**
             * heeft relevante besluittypen
             * @description URL-referenties naar de BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      besluittypen: string[];
      /**
             * deelzaaktypen
             * @description De ZAAKTYPE(n) waaronder ZAAKen als deelzaak kunnen voorkomen bij ZAAKen van dit ZAAKTYPE.
             */
      deelzaaktypen?: (string | null)[];
      /**
             * zaaktype van
             * @description De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE.
             */
      gerelateerdeZaaktypen: components['schemas']['ZaakTypenRelatie'][];
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid: string;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop het is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * datum begin object
             * Format: date
             * @description De datum waarop de eerst versie van het object ontstaan is.
             */
      beginObject?: string | null;
      /**
             * datum einde object
             * Format: date
             * @description De datum van de aller laatste versie van het object.
             */
      eindeObject?: string | null;
      /**
             * versiedatum
             * Format: date
             * @description De datum waarop de (gewijzigde) kenmerken van het ZAAKTYPE geldig zijn geworden
             */
      versiedatum: string;
      /**
             * concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept: boolean;
    };
    CheckListItem: {
      /**
             * itemnaam
             * @description De betekenisvolle benaming van het checklistitem
             */
      itemnaam: string;
      /**
             * toelichting
             * @description Beschrijving van de overwegingen bij het controleren van het aandachtspunt
             */
      toelichting?: string | null;
      /**
             * vraagstelling
             * @description Een betekenisvolle vraag waaruit blijkt waarop het aandachtspunt gecontroleerd moet worden.
             */
      vraagstelling: string;
      /**
             * verplicht
             * @description Het al dan niet verplicht zijn van controle van het aandachtspunt voorafgaand aan het bereiken van de status van het gerelateerde STATUSTYPE.
             */
      verplicht?: boolean;
    };
    StatusType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * omschrijving
             * @description Een korte, voor de initiator van de zaak relevante, omschrijving van de aard van de STATUS van zaken van een ZAAKTYPE.
             */
      omschrijving: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van STATUSsen van het STATUSTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * statustekst
             * @description De tekst die wordt gebruikt om de Initiator te informeren over het bereiken van een STATUS van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
             */
      statustekst?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden.
             */
      zaaktype: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * statustypevolgnummer
             * @description Een volgnummer voor statussen van het STATUSTYPE binnen een zaak.
             */
      volgnummer: number;
      /**
             * isEindstatus
             * @description Geeft aan dat dit STATUSTYPE een eindstatus betreft. Dit gegeven is afgeleid uit alle STATUSTYPEn van dit ZAAKTYPE met het hoogste volgnummer.
             */
      readonly isEindstatus: boolean;
      /**
             * informeren
             * @description Aanduiding die aangeeft of na het zetten van een STATUS van dit STATUSTYPE de Initiator moet worden geïnformeerd over de statusovergang.
             */
      informeren?: boolean;
      /**
             * doorlooptijd status
             * Format: duration
             * @description De door de zaakbehandelende organisatie(s) gestelde norm voor de doorlooptijd voor het bereiken van STATUSsen van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
             */
      doorlooptijd?: string | null;
      /**
             * toelichting
             * @description Een eventuele toelichting op dit STATUSTYPE.
             */
      toelichting?: string | null;
      /** checklistitem */
      checklistitemStatustype?: components['schemas']['CheckListItem'][];
      /**
             * eigenschappen
             * @description de EIGENSCHAPpen die verplicht een waarde moeten hebben gekregen, voordat een STATUS van dit STATUSTYPE kan worden gezet.
             */
      eigenschappen?: (string | null)[];
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid?: string | null;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop het is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * datum begin object
             * Format: date
             * @description De datum waarop de eerst versie van het object ontstaan is.
             */
      beginObject?: string | null;
      /**
             * datum einde object
             * Format: date
             * @description De datum van de aller laatste versie van het object.
             */
      eindeObject?: string | null;
    };
    ZaakObjectType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * Ander objecttype
             * @description Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft.
             */
      anderObjecttype: boolean;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid: string;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop het is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * datum begin object
             * Format: date
             * @description De datum waarop de eerst versie van het object ontstaan is.
             */
      beginObject?: string | null;
      /**
             * datum einde object
             * Format: date
             * @description De datum van de aller laatste versie van het object.
             */
      eindeObject?: string | null;
      /**
             * Objecttype
             * Format: uri
             * @description URL-referentie naar de OBJECTTYPE waartoe dit ZAAKOBJECTTYPE behoort.
             */
      objecttype: string;
      /**
             * Relatie omschrijving
             * @description Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE.
             */
      relatieOmschrijving: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort.
             */
      zaaktype: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * Zaakobjecttypen
             * @description URL-referenties naar de RESULTAATTYPEN.
             */
      readonly resultaattypen: string[];
      /**
             * Zaakobjecttypen
             * @description URL-referenties naar de STATUSTYPEN.
             */
      readonly statustypen: string[];
      /**
             * Catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort.
             */
      catalogus: string;
    };
    /** @enum {string} */
    AfleidingswijzeEnum: 'afgehandeld' | 'ander_datumkenmerk' | 'eigenschap' | 'gerelateerde_zaak' | 'hoofdzaak' | 'ingangsdatum_besluit' | 'termijn' | 'vervaldatum_besluit' | 'zaakobject';
    /** @enum {string} */
    ObjecttypeEnum: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
    /** @description Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier. */
    BrondatumArchiefprocedure: {
      /**
             * Afleidingswijze brondatum
             * @description Wijze van bepalen van de brondatum.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `afgehandeld` - (Afgehandeld) De termijn start op de datum waarop de zaak is afgehandeld (ZAAK.Einddatum in het RGBZ).
             *     * `ander_datumkenmerk` - (Ander datumkenmerk) De termijn start op de datum die is vastgelegd in een ander datumveld dan de datumvelden waarop de overige waarden (van deze attribuutsoort) betrekking hebben. `Objecttype`, `Registratie` en `Datumkenmerk` zijn niet leeg.
             *     * `eigenschap` - (Eigenschap) De termijn start op de datum die vermeld is in een zaaktype-specifieke eigenschap (zijnde een `datumveld`). `ResultaatType.ZaakType` heeft een `Eigenschap`; `Objecttype`, en `Datumkenmerk` zijn niet leeg.
             *     * `gerelateerde_zaak` - (Gerelateerde zaak) De termijn start op de datum waarop de gerelateerde zaak is afgehandeld (`ZAAK.Einddatum` of `ZAAK.Gerelateerde_zaak.Einddatum` in het RGBZ). `ResultaatType.ZaakType` heeft gerelateerd `ZaakType`
             *     * `hoofdzaak` - (Hoofdzaak) De termijn start op de datum waarop de gerelateerde zaak is afgehandeld, waarvan de zaak een deelzaak is (`ZAAK.Einddatum` van de hoofdzaak in het RGBZ). ResultaatType.ZaakType is deelzaaktype van ZaakType.
             *     * `ingangsdatum_besluit` - (Ingangsdatum besluit) De termijn start op de datum waarop het besluit van kracht wordt (`BESLUIT.Ingangsdatum` in het RGBZ).	ResultaatType.ZaakType heeft relevant BesluitType
             *     * `termijn` - (Termijn) De termijn start een vast aantal jaren na de datum waarop de zaak is afgehandeld (`ZAAK.Einddatum` in het RGBZ).
             *     * `vervaldatum_besluit` - (Vervaldatum besluit) De termijn start op de dag na de datum waarop het besluit vervalt (`BESLUIT.Vervaldatum` in het RGBZ). ResultaatType.ZaakType heeft relevant BesluitType
             *     * `zaakobject` - (Zaakobject) De termijn start op de einddatum geldigheid van het zaakobject waarop de zaak betrekking heeft (bijvoorbeeld de overlijdendatum van een Persoon). M.b.v. de attribuutsoort `Objecttype` wordt vastgelegd om welke zaakobjecttype het gaat; m.b.v. de attribuutsoort `Datumkenmerk` wordt vastgelegd welke datum-attribuutsoort van het zaakobjecttype het betreft.
             */
      afleidingswijze: components['schemas']['AfleidingswijzeEnum'];
      /**
             * datumkenmerk
             * @description Naam van de attribuutsoort van het procesobject dat bepalend is voor het einde van de procestermijn.
             */
      datumkenmerk?: string;
      /**
             * einddatum bekend
             * @description Indicatie dat de einddatum van het procesobject gedurende de uitvoering van de zaak bekend moet worden. Indien deze nog niet bekend is en deze waarde staat op `true`, dan kan de zaak (nog) niet afgesloten worden.
             */
      einddatumBekend?: boolean;
      /**
             * objecttype
             * @description Het soort object in de registratie dat het procesobject representeert.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adres` - Adres
             *     * `besluit` - Besluit
             *     * `buurt` - Buurt
             *     * `enkelvoudig_document` - Enkelvoudig document
             *     * `gemeente` - Gemeente
             *     * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte
             *     * `huishouden` - Huishouden
             *     * `inrichtingselement` - Inrichtingselement
             *     * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak
             *     * `kunstwerkdeel` - Kunstwerkdeel
             *     * `maatschappelijke_activiteit` - Maatschappelijke activiteit
             *     * `medewerker` - Medewerker
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `openbare_ruimte` - Openbare ruimte
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `pand` - Pand
             *     * `spoorbaandeel` - Spoorbaandeel
             *     * `status` - Status
             *     * `terreindeel` - Terreindeel
             *     * `terrein_gebouwd_object` - Terrein gebouwd object
             *     * `vestiging` - Vestiging
             *     * `waterdeel` - Waterdeel
             *     * `wegdeel` - Wegdeel
             *     * `wijk` - Wijk
             *     * `woonplaats` - Woonplaats
             *     * `woz_deelobject` - Woz deel object
             *     * `woz_object` - Woz object
             *     * `woz_waarde` - Woz waarde
             *     * `zakelijk_recht` - Zakelijk recht
             *     * `overige` - Overige
             */
      objecttype?: components['schemas']['ObjecttypeEnum'] | components['schemas']['BlankEnum'];
      /**
             * registratie
             * @description De naam van de registratie waarvan het procesobject deel uit maakt.
             */
      registratie?: string;
      /**
             * Brondatum procestermijn
             * Format: duration
             * @description De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie. Enkel relevant indien de afleidingswijze 'termijn' is.
             */
      procestermijn?: string | null;
    } | null;
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ResultaatType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * is van
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin resultaten van dit RESULTAATTYPE bereikt kunnen worden.
             */
      zaaktype: string;
      /**
             * is relevant voor
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      omschrijving: string;
      /**
             * resultaattypeomschrijving
             * Format: uri
             * @description Algemeen gehanteerde omschrijving van de aard van resultaten van het RESULTAATTYPE. Dit moet een URL-referentie zijn naar de referenlijst van generieke resultaattypeomschrijvingen. Im ImZTC heet dit 'omschrijving generiek'
             */
      resultaattypeomschrijving: string;
      /**
             * omschrijving generiek
             * @description Waarde van de omschrijving-generiek referentie (attribuut `omschrijving`)
             */
      readonly omschrijvingGeneriek: string;
      /**
             * selectielijstklasse
             * Format: uri
             * @description URL-referentie naar de, voor het archiefregime bij het RESULTAATTYPE relevante, categorie in de Selectielijst Archiefbescheiden (RESULTAAT in de Selectielijst API) van de voor het ZAAKTYPE verantwoordelijke overheidsorganisatie.
             */
      selectielijstklasse: string;
      /**
             * toelichting
             * @description Een toelichting op dit RESULTAATTYPE en het belang hiervan voor ZAAKen waarin een resultaat van dit RESULTAATTYPE wordt geselecteerd.
             */
      toelichting?: string;
      /**
             * archiefnominatie
             * @description Aanduiding die aangeeft of ZAAKen met een resultaat van dit RESULTAATTYPE blijvend moeten worden bewaard of (op termijn) moeten worden vernietigd. Indien niet expliciet opgegeven wordt dit gevuld vanuit de selectielijst.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             */
      archiefnominatie?: components['schemas']['ArchiefnominatieEnum'] | components['schemas']['BlankEnum'];
      /**
             * archiefactietermijn
             * Format: duration
             * @description De termijn, na het vervallen van het bedrjfsvoeringsbelang, waarna het zaakdossier (de ZAAK met alle bijbehorende INFORMATIEOBJECTen) van een ZAAK met een resultaat van dit RESULTAATTYPE vernietigd of overgebracht (naar een archiefbewaarplaats) moet worden. Voor te vernietigen dossiers betreft het de in die Selectielijst genoemde bewaartermjn. Voor blijvend te bewaren zaakdossiers betreft het de termijn vanaf afronding van de zaak tot overbrenging (de procestermijn is dan nihil).
             */
      archiefactietermijn?: string | null;
      /**
             * brondatumArchiefprocedure
             * @description Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier.
             */
      brondatumArchiefprocedure?: components['schemas']['BrondatumArchiefprocedure'] | null;
      /**
             * procesobjectaard
             * @description Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, het resultaattype bij zaken van dit type betrekking heeft.
             */
      procesobjectaard?: string | null;
      /**
             * catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit RESULTAATTYPE behoort.
             */
      catalogus?: string | null;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop de RESULTAATTYPE is ontstaan.
             */
      beginGeldigheid?: string | null;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop de RESULTAATTYPE is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * datum begin object
             * Format: date
             * @description De datum waarop de eerst versie van het object ontstaan is.
             */
      beginObject?: string | null;
      /**
             * datum einde object
             * Format: date
             * @description De datum van de aller laatste versie van het object.
             */
      eindeObject?: string | null;
      /**
             * indicatie specifiek
             * @description Aanduiding of het, vanuit archiveringsoptiek, een resultaattype betreft dat specifiek is voor een bepaalde procesobjectaard.
             */
      indicatieSpecifiek?: boolean | null;
      /**
             * procestermijn
             * Format: duration
             * @description De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie.
             */
      procestermijn?: string | null;
      /** is resultaat van */
      besluittypen?: (string | null)[];
      /**
             * is resultaat van
             * @description Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
             */
      readonly besluittypeOmschrijving: string[];
      /**
             * informatieobjecttypen
             * @description De INFORMATIEOBJECTTYPEn die verplicht aanwezig moeten zijn in het zaakdossier van ZAAKen van dit ZAAKTYPE voordat een resultaat van dit RESULTAATTYPE kan worden gezet.
             */
      informatieobjecttypen?: (string | null)[];
      /**
             * informatieobjecttypen
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      readonly informatieobjecttypeOmschrijving: string[];
    };
    /** @enum {string} */
    OmschrijvingGeneriekEnum: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
    /** @description Adds nested create feature */
    RolType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
             */
      zaaktype: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van de ROL.
             */
      omschrijving: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van de ROL.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak.
             *     * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak.
             *     * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak.
             *     * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn.
             *     * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak ..
             *     * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven ..
             *     * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken.
             *     * `mede_initiator` - Mede-initiator
             */
      omschrijvingGeneriek: components['schemas']['OmschrijvingGeneriekEnum'];
      /**
             * catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit ROLTYPE behoort.
             */
      catalogus?: string | null;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid?: string | null;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop het is opgeheven.
             */
      eindeGeldigheid?: string | null;
      /**
             * datum begin object
             * Format: date
             * @description De datum waarop de eerst versie van het object ontstaan is.
             */
      beginObject?: string | null;
      /**
             * datum einde object
             * Format: date
             * @description De datum van de aller laatste versie van het object.
             */
      eindeObject?: string | null;
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
    /** @description Precondition failed */
    412: {
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
  klantcontact_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
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
          'application/json': components['schemas']['PaginatedKlantContactList'];
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
  klantcontact_create: {
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
        'application/json': components['schemas']['KlantContact'];
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
          'application/json': components['schemas']['KlantContact'];
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
  klantcontact_retrieve: {
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
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['KlantContact'];
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
  resultaat_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het RESULTAATTYPE (in de Catalogi API). */
        resultaattype?: string;
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
          'application/json': components['schemas']['PaginatedResultaatList'];
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
  resultaat_create: {
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
        'application/json': components['schemas']['Resultaat'];
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
          'application/json': components['schemas']['Resultaat'];
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
  resultaat_retrieve: {
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
          'application/json': components['schemas']['Resultaat'];
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
  resultaat_update: {
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
        'application/json': components['schemas']['Resultaat'];
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
          'application/json': components['schemas']['Resultaat'];
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
  resultaat_destroy: {
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
  resultaat_headers: {
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
        content?: never;
      };
    };
  };
  resultaat_partial_update: {
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
        'application/json': components['schemas']['PatchedResultaat'];
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
          'application/json': components['schemas']['Resultaat'];
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
  rol_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK. */
        betrokkene?: string;
        /** @description Type van de `betrokkene`. */
        betrokkeneType?: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
        /** @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer. */
        betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
        /** @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON */
        betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
        /** @description Het administratienummer van de persoon, bedoeld in de Wet BRP */
        betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
        /** @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON */
        betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
        /** @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON */
        betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
        /** @description Een korte unieke aanduiding van de Vestiging. */
        betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
        /** @description Een korte identificatie van de organisatorische eenheid. */
        betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
        /** @description Een korte unieke aanduiding van de MEDEWERKER. */
        betrokkeneIdentificatie__medewerker__identificatie?: string;
        /** @description URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK. */
        roltype?: string;
        /** @description Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE. */
        omschrijving?: string;
        /** @description Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE. */
        omschrijvingGeneriek?: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
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
          'application/json': components['schemas']['PaginatedRolList'];
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
  rol_create: {
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
        'application/json': components['schemas']['Rol'];
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
          'application/json': components['schemas']['Rol'];
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
  rol_retrieve: {
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
          'application/json': components['schemas']['Rol'];
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
  rol_destroy: {
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
  rol_headers: {
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
        content?: never;
      };
    };
  };
  status_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het STATUSTYPE (in de Catalogi API). */
        statustype?: string;
        /** @description Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak. */
        indicatieLaatstGezetteStatus?: string;
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
          'application/json': components['schemas']['PaginatedStatusList'];
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
  status_create: {
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
        'application/json': components['schemas']['Status'];
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
          'application/json': components['schemas']['StatusRequestbody'];
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
  status_retrieve: {
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
          'application/json': components['schemas']['Status'];
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
  status_headers: {
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
        content?: never;
      };
    };
  };
  zaakcontactmoment_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het CONTACTMOMENT (in de Klantinteractie API) */
        contactmoment?: string;
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
          'application/json': components['schemas']['ZaakContactMoment'][];
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
  zaakcontactmoment_create: {
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
        'application/json': components['schemas']['ZaakContactMoment'];
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
          'application/json': components['schemas']['ZaakContactMoment'];
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
  zaakcontactmoment_retrieve: {
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
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakContactMoment'];
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
  zaakcontactmoment_destroy: {
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
  zaakinformatieobject_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden. */
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
          'application/json': components['schemas']['ZaakInformatieObject'][];
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
  zaakinformatieobject_create: {
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
        'application/json': components['schemas']['ZaakInformatieObject'];
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
          'application/json': components['schemas']['ZaakInformatieObject'];
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
  zaakinformatieobject_retrieve: {
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
          'application/json': components['schemas']['ZaakInformatieObject'];
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
  zaakinformatieobject_update: {
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
        'application/json': components['schemas']['ZaakInformatieObject'];
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
          'application/json': components['schemas']['ZaakInformatieObject'];
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
  zaakinformatieobject_destroy: {
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
  zaakinformatieobject_headers: {
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
        content?: never;
      };
    };
  };
  zaakinformatieobject_partial_update: {
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
        'application/json': components['schemas']['PatchedZaakInformatieObject'];
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
          'application/json': components['schemas']['ZaakInformatieObject'];
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
  zaakobject_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar de resource die het OBJECT beschrijft. */
        object?: string;
        /** @description Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`. */
        objectType?: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
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
          'application/json': components['schemas']['PaginatedZaakObjectList'];
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
  zaakobject_create: {
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
        'application/json': components['schemas']['ZaakObject'];
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
          'application/json': components['schemas']['ZaakObject'];
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
  zaakobject_retrieve: {
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
          'application/json': components['schemas']['ZaakObject'];
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
  zaakobject_update: {
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
        'application/json': components['schemas']['ZaakObject'];
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
          'application/json': components['schemas']['ZaakObject'];
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
  zaakobject_destroy: {
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
  zaakobject_headers: {
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
        content?: never;
      };
    };
  };
  zaakobject_partial_update: {
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
        'application/json': components['schemas']['PatchedZaakObject'];
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
          'application/json': components['schemas']['ZaakObject'];
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
  zaakverzoek_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het VERZOEK (in de Klantinteractie API) */
        verzoek?: string;
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
          'application/json': components['schemas']['ZaakVerzoek'][];
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
  zaakverzoek_create: {
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
        'application/json': components['schemas']['ZaakVerzoek'];
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
          'application/json': components['schemas']['ZaakVerzoek'];
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
  zaakverzoek_retrieve: {
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
      /** @description OK */
      200: {
        headers: {
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakVerzoek'];
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
  zaakverzoek_destroy: {
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
  zaak_list: {
    parameters: {
      query?: {
        /** @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK. */
        identificatie?: string;
        /** @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef */
        bronorganisatie?: string;
        /** @description Multiple values may be separated by commas. */
        bronorganisatie__in?: string[];
        /** @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt */
        zaaktype?: string;
        /** @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. */
        archiefnominatie?: 'blijvend_bewaren' | 'vernietigen';
        /** @description Multiple values may be separated by commas. */
        archiefnominatie__in?: string[];
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum?: string;
        /** @description De archiefactiedatum is leeg. */
        archiefactiedatum__isnull?: boolean;
        /** @description De archiefactiedatum is kleiner dan de opgegeven datum. */
        archiefactiedatum__lt?: string;
        /** @description De archiefactiedatum is groter dan de opgegeven datum. */
        archiefactiedatum__gt?: string;
        /** @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. */
        archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
        /** @description Multiple values may be separated by commas. */
        archiefstatus__in?: string[];
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum?: string;
        /** @description De startdatum is groter dan de opgegeven datum. */
        startdatum__gt?: string;
        /** @description De startdatum is groter dan of gelijk dan de opgegeven datum. */
        startdatum__gte?: string;
        /** @description De startdatum is kleiner dan de opgegeven datum. */
        startdatum__lt?: string;
        /** @description De startdatum is kleiner of gelijk dan de opgegeven datum. */
        startdatum__lte?: string;
        /** @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. */
        registratiedatum?: string;
        /** @description De registratiedatum is groter dan de opgegeven datum. */
        registratiedatum__gt?: string;
        /** @description De registratiedatum is kleiner dan de opgegeven datum. */
        registratiedatum__lt?: string;
        /** @description De datum waarop de uitvoering van de zaak afgerond is. */
        einddatum?: string;
        /** @description De einddatum is leeg. */
        einddatum__isnull?: boolean;
        /** @description De einddatum is groter dan de opgegeven datum. */
        einddatum__gt?: string;
        /** @description De einddatum is kleiner dan de opgegeven datum. */
        einddatum__lt?: string;
        /** @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. */
        einddatumGepland?: string;
        /** @description De geplande einddatum is groter dan de opgegeven datum. */
        einddatumGepland__gt?: string;
        /** @description De geplande einddatum is kleiner dan de opgegeven datum. */
        einddatumGepland__lt?: string;
        /** @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. */
        uiterlijkeEinddatumAfdoening?: string;
        /** @description De uiterlijke einddatumafdoening is groter dan de opgegeven datum. */
        uiterlijkeEinddatumAfdoening__gt?: string;
        /** @description De uiterlijke einddatumafdoening is kleiner dan de opgegeven datum. */
        uiterlijkeEinddatumAfdoening__lt?: string;
        /** @description Type van de `betrokkene`. */
        rol__betrokkeneType?: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
        /** @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK. */
        rol__betrokkene?: string;
        /** @description Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE. */
        rol__omschrijvingGeneriek?: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
        /** @description Zaken met een vertrouwelijkheidaanduiding die beperkter is dan de aangegeven aanduiding worden uit de resultaten gefiltered. */
        maximaleVertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
        /** @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer. */
        rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
        /** @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON */
        rol__betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
        /** @description Het administratienummer van de persoon, bedoeld in de Wet BRP */
        rol__betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
        /** @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON */
        rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
        /** @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON */
        rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
        /** @description Een korte unieke aanduiding van de Vestiging. */
        rol__betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
        /** @description Een korte unieke aanduiding van de MEDEWERKER. */
        rol__betrokkeneIdentificatie__medewerker__identificatie?: string;
        /** @description Een korte identificatie van de organisatorische eenheid. */
        rol__betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
        /** @description Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt. */
        expand?: string;
        /** @description Het veld waarop de resultaten geordend worden. Het minnetje betekent omgekeerde volgorde. */
        ordering?: ('startdatum' | '-startdatum' | 'einddatum' | '-einddatum' | 'publicatiedatum' | '-publicatiedatum' | 'archiefactiedatum' | '-archiefactiedatum' | 'registratiedatum' | '-registratiedatum' | 'identificatie' | '-identificatie')[];
        /** @description Een pagina binnen de gepagineerde set resultaten. */
        page?: number;
      };
      header: {
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['PaginatedZaakList'];
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
      /** @description Precondition failed */
      412: {
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
  zaak_create: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
      };
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Zaak'];
      };
    };
    responses: {
      /** @description Created */
      201: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description URL waar de resource leeft. */
          Location?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
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
      /** @description Precondition failed */
      412: {
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
  zaak_retrieve: {
    parameters: {
      query?: {
        /** @description Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt. */
        expand?: string;
      };
      header: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
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
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakExpanded'];
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
      /** @description Precondition failed */
      412: {
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
  zaak_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['Zaak'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
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
      /** @description Precondition failed */
      412: {
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
  zaak_destroy: {
    parameters: {
      query?: never;
      header: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
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
      /** @description Precondition failed */
      412: {
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
  zaak_headers: {
    parameters: {
      query?: never;
      header: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
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
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  zaak_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
      };
      path: {
        uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedZaak'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
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
      /** @description Precondition failed */
      412: {
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
        zaak_uuid: string;
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
        zaak_uuid: string;
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
  zaakbesluit_list: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
          'application/json': components['schemas']['ZaakBesluit'][];
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
  zaakbesluit_create: {
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
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ZaakBesluit'];
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
          'application/json': components['schemas']['ZaakBesluit'];
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
  zaakbesluit_retrieve: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
          'application/json': components['schemas']['ZaakBesluit'];
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
  zaakbesluit_destroy: {
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
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
  zaakeigenschap_list: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
          'application/json': components['schemas']['ZaakEigenschap'][];
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
  zaakeigenschap_create: {
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
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ZaakEigenschap'];
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
          'application/json': components['schemas']['ZaakEigenschap'];
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
  zaakeigenschap_retrieve: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
          'application/json': components['schemas']['ZaakEigenschap'];
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
  zaakeigenschap_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        'application/json': components['schemas']['ZaakEigenschap'];
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
          'application/json': components['schemas']['ZaakEigenschap'];
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
  zaakeigenschap_destroy: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
  zaakeigenschap_headers: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
  zaakeigenschap_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
      };
      path: {
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['PatchedZaakEigenschap'];
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
          'application/json': components['schemas']['ZaakEigenschap'];
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
  zaak__zoek: {
    parameters: {
      query?: {
        /** @description Een pagina binnen de gepagineerde set resultaten. */
        page?: number;
      };
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
      };
      path?: never;
      cookie?: never;
    };
    requestBody?: {
      content: {
        'application/json': components['schemas']['ZaakZoek'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['PaginatedZaakList'];
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
      /** @description Precondition failed */
      412: {
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
