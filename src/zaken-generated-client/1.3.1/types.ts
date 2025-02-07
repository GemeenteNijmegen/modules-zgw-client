export interface paths {
  '/api/v1/klantcontacten': {
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
  '/api/v1/klantcontacten/{uuid}': {
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
  '/api/v1/resultaten': {
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
  '/api/v1/resultaten/{uuid}': {
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
  '/api/v1/rollen': {
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
  '/api/v1/rollen/{uuid}': {
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
  '/api/v1/statussen': {
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
  '/api/v1/statussen/{uuid}': {
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
  '/api/v1/zaakcontactmomenten': {
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
  '/api/v1/zaakcontactmomenten/{uuid}': {
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
  '/api/v1/zaakinformatieobjecten': {
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
  '/api/v1/zaakinformatieobjecten/{uuid}': {
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
  '/api/v1/zaakobjecten': {
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
  '/api/v1/zaakobjecten/{uuid}': {
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
  '/api/v1/zaakverzoeken': {
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
  '/api/v1/zaakverzoeken/{uuid}': {
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
  '/api/v1/zaken': {
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
  '/api/v1/zaken/{uuid}': {
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
         *     - `zaaktype` mag niet gewijzigd worden.
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
         *     - `zaaktype` mag niet gewijzigd worden.
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
  '/api/v1/zaken/{zaak_uuid}/audittrail': {
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
  '/api/v1/zaken/{zaak_uuid}/audittrail/{uuid}': {
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
  '/api/v1/zaken/{zaak_uuid}/besluiten': {
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
  '/api/v1/zaken/{zaak_uuid}/besluiten/{uuid}': {
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
  '/api/v1/zaken/{zaak_uuid}/zaakeigenschappen': {
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
  '/api/v1/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}': {
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
  '/api/v1/zaken/_zoek': {
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
      results?: components['schemas']['Zaak'][];
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
             * resultaattoelichting
             * @description Een toelichting op wat het resultaat van de zaak inhoudt.
             */
      resultaattoelichting?: string;
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
      /** status */
      readonly zaakinformatieobjecten: string[];
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
             * resultaattoelichting
             * @description Een toelichting op wat het resultaat van de zaak inhoudt.
             */
      resultaattoelichting?: string;
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
      /** zaakgeometrie */
      zaakgeometrie?: components['schemas']['GeoWithin'];
      /**
             * uuid__in
             * @description Array of unieke resource identifiers (UUID4)
             */
      uuid__in?: string[];
    };
    ZakelijkRechtHeeftAlsGerechtigde: {
      /** natuurlijkPersoon */
      natuurlijkPersoon?: components['schemas']['RolNatuurlijkPersoon'];
      /** nietNatuurlijkPersoon */
      nietNatuurlijkPersoon?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    adres: {
      objectType: 'adres';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectAdres']);
    besluit: {
      objectType: 'besluit';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
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
    buurt: {
      objectType: 'buurt';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectBuurt']);
    enkelvoudig_document: {
      objectType: 'enkelvoudig_document';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
    gemeente: {
      objectType: 'gemeente';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeente']);
    gemeentelijke_openbare_ruimte: {
      objectType: 'gemeentelijke_openbare_ruimte';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeentelijkeOpenbareRuimte']);
    huishouden: {
      objectType: 'huishouden';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectHuishouden']);
    inrichtingselement: {
      objectType: 'inrichtingselement';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectInrichtingselement']);
    kadastrale_onroerende_zaak: {
      objectType: 'kadastrale_onroerende_zaak';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKadastraleOnroerendeZaak']);
    kunstwerkdeel: {
      objectType: 'kunstwerkdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKunstwerkdeel']);
    maatschappelijke_activiteit: {
      objectType: 'maatschappelijke_activiteit';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectMaatschappelijkeActiviteit']);
    medewerker: {
      betrokkeneType: 'medewerker';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolMedewerker']);
    natuurlijk_persoon: {
      betrokkeneType: 'natuurlijk_persoon';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNatuurlijkPersoon']);
    niet_natuurlijk_persoon: {
      betrokkeneType: 'niet_natuurlijk_persoon';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNietNatuurlijkPersoon']);
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
    openbare_ruimte: {
      objectType: 'openbare_ruimte';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOpenbareRuimte']);
    organisatorische_eenheid: {
      betrokkeneType: 'organisatorische_eenheid';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolOrganisatorischeEenheid']);
    overige: {
      objectType: 'overige';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOverige']);
    pand: {
      objectType: 'pand';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectPand']);
    spoorbaandeel: {
      objectType: 'spoorbaandeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectSpoorbaandeel']);
    status: {
      objectType: 'status';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
    terrein_gebouwd_object: {
      objectType: 'terrein_gebouwd_object';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreinGebouwdObject']);
    terreindeel: {
      objectType: 'terreindeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreindeel']);
    vestiging: {
      betrokkeneType: 'vestiging';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolVestiging']);
    waterdeel: {
      objectType: 'waterdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWaterdeel']);
    wegdeel: {
      objectType: 'wegdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWegdeel']);
    wijk: {
      objectType: 'wijk';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWijk']);
    woonplaats: {
      objectType: 'woonplaats';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWoonplaats']);
    woz_deelobject: {
      objectType: 'woz_deelobject';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozDeelobject']);
    woz_object: {
      objectType: 'woz_object';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozObject']);
    woz_waarde: {
      objectType: 'woz_waarde';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozWaarde']);
    zakelijk_recht: {
      objectType: 'zakelijk_recht';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectZakelijkRecht']);
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
          'application/json': components['schemas']['Status'];
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
        /** @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt */
        zaaktype?: string;
        /** @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. */
        archiefnominatie?: 'blijvend_bewaren' | 'vernietigen';
        /** @description Multiple values may be separated by commas. */
        archiefnominatie__in?: string[];
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum?: string;
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum__lt?: string;
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum__gt?: string;
        /** @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. */
        archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
        /** @description Multiple values may be separated by commas. */
        archiefstatus__in?: string[];
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum?: string;
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum__gt?: string;
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum__gte?: string;
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum__lt?: string;
        /** @description De datum waarop met de uitvoering van de zaak is gestart */
        startdatum__lte?: string;
        /** @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. */
        registratiedatum?: string;
        /** @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. */
        registratiedatum__gt?: string;
        /** @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt. */
        registratiedatum__lt?: string;
        /** @description De datum waarop de uitvoering van de zaak afgerond is. */
        einddatum?: string;
        /** @description De datum waarop de uitvoering van de zaak afgerond is. */
        einddatum__gt?: string;
        /** @description De datum waarop de uitvoering van de zaak afgerond is. */
        einddatum__lt?: string;
        /** @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. */
        einddatumGepland?: string;
        /** @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. */
        einddatumGepland__gt?: string;
        /** @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt. */
        einddatumGepland__lt?: string;
        /** @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. */
        uiterlijkeEinddatumAfdoening?: string;
        /** @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. */
        uiterlijkeEinddatumAfdoening__gt?: string;
        /** @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn. */
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
        /** @description Het veld waarop de resultaten geordend worden. */
        ordering?: [
          'startdatum',
          '-startdatum',
          'einddatum',
          '-einddatum',
          'publicatiedatum',
          '-publicatiedatum',
          'archiefactiedatum',
          '-archiefactiedatum'
        ];
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
        content: {
          'application/json': components['schemas']['Zaak'];
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
