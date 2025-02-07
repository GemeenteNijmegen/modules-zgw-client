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
         * @description Indien geen identificatie gegeven is, dan wordt deze automatisch
         *     gegenereerd.
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek KLANTCONTACT bij een ZAAK opvragen.
         * @deprecated
         * @description Een specifiek KLANTCONTACT bij een ZAAK opvragen.
         *
         *     **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
         */
    get: operations['klantcontact_read'];
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
         * @description **Er wordt gevalideerd op**
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek RESULTAAT opvragen.
         * @description Een specifiek RESULTAAT opvragen.
         */
    get: operations['resultaat_read'];
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
    delete: operations['resultaat_delete'];
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke ROL bij een ZAAK opvragen.
         * @description Een specifieke ROL bij een ZAAK opvragen.
         */
    get: operations['rol_read'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ROL van een ZAAK.
         * @description Verwijder een ROL van een ZAAK.
         */
    delete: operations['rol_delete'];
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
         * Alle STATUSsen van ZAAKen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['status_list'];
    put?: never;
    /**
         * Maak een STATUS aan voor een ZAAK.
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de ZAAK
         *     - geldigheid URL naar het STATUSTYPE
         *     - indien het de eindstatus betreft, dan moet het attribuut
         *       `indicatieGebruiksrecht` gezet zijn op alle informatieobjecten die aan
         *       de zaak gerelateerd zijn
         *
         *     **Opmerkingen**
         *     - Indien het statustype de eindstatus is (volgens het ZTC), dan wordt de
         *       zaak afgesloten door de einddatum te zetten.
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke STATUS van een ZAAK opvragen.
         * @description Een specifieke STATUS van een ZAAK opvragen.
         */
    get: operations['status_read'];
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
         * @description **Er wordt gevalideerd op**
         *     - geldigheid URL naar de CONTACTMOMENT
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek ZAAKCONTACTMOMENT opvragen.
         * @description Een specifiek ZAAKCONTACTMOMENT opvragen.
         */
    get: operations['zaakcontactmoment_read'];
    put?: never;
    post?: never;
    /** @description Verwijder een ZAAKCONTACTMOMENT. */
    delete: operations['zaakcontactmoment_delete'];
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
         * Alle ZAAK-INFORMATIEOBJECT relaties opvragen.
         * @description Deze lijst kan gefilterd wordt met querystringparameters.
         */
    get: operations['zaakinformatieobject_list'];
    put?: never;
    /**
         * Maak een ZAAK-INFORMATIEOBJECT relatie aan.
         * @description Er worden twee types van
         *     relaties met andere objecten gerealiseerd:
         *
         *     **Er wordt gevalideerd op**
         *     - geldigheid zaak URL
         *     - geldigheid informatieobject URL
         *     - de combinatie informatieobject en zaak moet uniek zijn
         *
         *     **Opmerkingen**
         *     - De registratiedatum wordt door het systeem op 'NU' gezet. De `aardRelatie`
         *       wordt ook door het systeem gezet.
         *     - Bij het aanmaken wordt ook in de Documenten API de gespiegelde relatie aangemaakt,
         *       echter zonder de relatie-informatie.
         *
         *     Registreer welk(e) INFORMATIEOBJECT(en) een ZAAK kent.
         *
         *     **Er wordt gevalideerd op**
         *     - geldigheid informatieobject URL
         *     - uniek zijn van relatie ZAAK-INFORMATIEOBJECT
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
         * @description Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
         */
    get: operations['zaakinformatieobject_read'];
    /**
         * Werk een ZAAK-INFORMATIEOBJECT relatie in zijn geheel bij.
         * @description Je mag enkel de gegevens
         *     van de relatie bewerken, en niet de relatie zelf aanpassen.
         *
         *     **Er wordt gevalideerd op**
         *     - informatieobject URL en zaak URL mogen niet veranderen
         */
    put: operations['zaakinformatieobject_update'];
    post?: never;
    /**
         * Verwijder een ZAAK-INFORMATIEOBJECT relatie.
         * @description De gespiegelde relatie in de Documenten API wordt door de Zaken API
         *     verwijderd. Consumers kunnen dit niet handmatig doen..
         */
    delete: operations['zaakinformatieobject_delete'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKINFORMATIEOBJECT opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakinformatieobject_headers'];
    /**
         * Werk een ZAAK-INFORMATIEOBJECT relatie in deels bij.
         * @description Je mag enkel de gegevens
         *     van de relatie bewerken, en niet de relatie zelf aanpassen.
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
         *
         *     - Indien de `object` URL opgegeveven is, dan moet deze een geldige response
         *       (HTTP 200) geven.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de
         *       `objectType` discriminator.
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek ZAAKOBJECT opvragen.
         * @description Een specifiek ZAAKOBJECT opvragen.
         */
    get: operations['zaakobject_read'];
    /**
         * Werk een ZAAKOBJECT in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *
         *     - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de
         *       `objectType` discriminator.
         */
    put: operations['zaakobject_update'];
    post?: never;
    /**
         * Verwijder een ZAAKOBJECT.
         * @description Verbreek de relatie tussen een ZAAK en een OBJECT door de ZAAKOBJECT resource te
         *     verwijderen.
         */
    delete: operations['zaakobject_delete'];
    options?: never;
    head?: never;
    /**
         * Werk een ZAAKOBJECT deels bij.
         * @description **Er wordt gevalideerd op**
         *
         *     - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden.
         *     - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de
         *       `objectType` discriminator.
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
         * Alle ZAAK-VERZOEK opvragen.
         * @description Alle ZAAK-VERZOEK opvragen.
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek ZAAK-VERZOEK opvragen.
         * @description Een specifiek ZAAK-VERZOEK opvragen.
         */
    get: operations['zaakverzoek_read'];
    put?: never;
    post?: never;
    /** @description Verwijder een ZAAK-VERZOEK. */
    delete: operations['zaakverzoek_delete'];
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
         *
         *     **Opmerking**
         *     - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd
         *       bent.
         */
    get: operations['zaak_list'];
    put?: never;
    /**
         * Maak een ZAAK aan.
         * @description Indien geen identificatie gegeven is, dan wordt deze automatisch
         *     gegenereerd. De identificatie moet uniek zijn binnen de bronorganisatie.
         *
         *     **Er wordt gevalideerd op**:
         *     - geldigheid `zaaktype` URL - de resource moet opgevraagd kunnen
         *       worden uit de Catalogi API en de vorm van een ZAAKTYPE hebben.
         *     - `zaaktype` is geen concept (`zaaktype.concept` = False)
         *     - `laatsteBetaaldatum` mag niet in de toekomst liggen.
         *     - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie
         *       "nvt" is.
         *     - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"
         *       hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut
         *       `status` de waarde "gearchiveerd" heeft.
         */
    post: operations['zaak_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
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
         * @description Zoeken/filteren gaat normaal via de `list` operatie, deze is echter
         *     niet geschikt voor geo-zoekopdrachten.
         */
    post: operations['zaak__zoek'];
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke ZAAK opvragen.
         * @description Een specifieke ZAAK opvragen.
         */
    get: operations['zaak_read'];
    /**
         * Werk een ZAAK in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - `zaaktype` mag niet gewijzigd worden.
         *     - `identificatie` mag niet gewijzigd worden.
         *     - `laatsteBetaaldatum` mag niet in de toekomst liggen.
         *     - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie
         *       "nvt" is.
         *     - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"
         *       hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut
         *       `status` de waarde "gearchiveerd" heeft.
         *
         *     **Opmerkingen**
         *     - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd
         *       bent.
         *     - indien een zaak heropend moet worden, doe dit dan door een nieuwe status
         *       toe te voegen die NIET de eindstatus is.
         *       Zie de `Status` resource.
         */
    put: operations['zaak_update'];
    post?: never;
    /**
         * Verwijder een ZAAK.
         * @description **De gerelateerde resources zijn hierbij**
         *     - `zaak` - de deelzaken van de verwijderde hoofzaak
         *     - `status` - alle statussen van de verwijderde zaak
         *     - `resultaat` - het resultaat van de verwijderde zaak
         *     - `rol` - alle rollen bij de zaak
         *     - `zaakobject` - alle zaakobjecten bij de zaak
         *     - `zaakeigenschap` - alle eigenschappen van de zaak
         *     - `zaakkenmerk` - alle kenmerken van de zaak
         *     - `zaakinformatieobject` - dit moet door-cascaden naar de Documenten API,
         *       zie ook: https://github.com/VNG-Realisatie/gemma-zaken/issues/791 (TODO)
         *     - `klantcontact` - alle klantcontacten bij een zaak
         */
    delete: operations['zaak_delete'];
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
         *       "nvt" is.
         *     - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de
         *       waarde "nog_te_archiveren" heeft.
         *     - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren"
         *       hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut
         *       `status` de waarde "gearchiveerd" heeft.
         *
         *     **Opmerkingen**
         *     - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd
         *       bent.
         *     - indien een zaak heropend moet worden, doe dit dan door een nieuwe status
         *       toe te voegen die NIET de eindstatus is. Zie de `Status` resource.
         */
    patch: operations['zaak_partial_update'];
    trace?: never;
  };
  '/zaken/{zaak_uuid}/audittrail': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
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
      path: {
        /** @description Unieke identificatie van de audit regel. */
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
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
  '/zaken/{zaak_uuid}/besluiten': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
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
         *     De Besluiten API gebruikt dit endpoint om relaties te synchroniseren,
         *     daarom is dit endpoint in de Zaken API geimplementeerd.
         *
         *     **Er wordt gevalideerd op**
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifiek ZAAKBESLUIT opvragen.
         * @description Een specifiek ZAAKBESLUIT opvragen.
         */
    get: operations['zaakbesluit_read'];
    put?: never;
    post?: never;
    /**
         * Verwijder een ZAAKBESLUIT.
         * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.**
         *
         *     De Besluiten API gebruikt dit endpoint om relaties te synchroniseren,
         *     daarom is dit endpoint in de Zaken API geimplementeerd.
         */
    delete: operations['zaakbesluit_delete'];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaken/{zaak_uuid}/zaakeigenschappen': {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
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
         *     - geldigheid `eigenschap` URL - de resource moet opgevraagd kunnen
         *       worden uit de Catalogi API en de vorm van een EIGENSCHAP hebben.
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
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKEIGENSCHAP opvragen.
         * @description Een specifieke ZAAKEIGENSCHAP opvragen.
         */
    get: operations['zaakeigenschap_read'];
    /**
         * Werk een ZAAKEIGENSCHAP in zijn geheel bij.
         * @description **Er wordt gevalideerd op**
         *     - Alleen de WAARDE mag gewijzigd worden
         */
    put: operations['zaakeigenschap_update'];
    post?: never;
    /** @description Verwijder een ZAAKEIGENSCHAP. */
    delete: operations['zaakeigenschap_delete'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKEIGENSCHAP opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakeigenschap_headers'];
    /**
         * Werk een ZAAKEIGENSCHAP deels bij.
         * @description **Er wordt gevalideerd op**
         *     - Alleen de WAARDE mag gewijzigd worden
         */
    patch: operations['zaakeigenschap_partial_update'];
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
    KlantContact: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Identificatie
             * @description De unieke aanduiding van een KLANTCONTACT
             */
      identificatie?: string;
      /**
             * Datumtijd
             * Format: date-time
             * @description De datum en het tijdstip waarop het KLANTCONTACT begint
             */
      datumtijd: string;
      /**
             * Kanaal
             * @description Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt
             */
      kanaal?: string;
      /**
             * Onderwerp
             * @description Het onderwerp waarover contact is geweest met de klant.
             */
      onderwerp?: string;
      /**
             * Toelichting
             * @description Een toelichting die inhoudelijk het contact met de klant beschrijft.
             */
      toelichting?: string;
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
    Resultaat: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Resultaattype
             * Format: uri
             * @description URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
             */
      resultaattype: string;
      /**
             * Toelichting
             * @description Een toelichting op wat het resultaat van de zaak inhoudt.
             */
      toelichting?: string;
    };
    ResultaatHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['ResultaatHalCollectieEmbedded'];
    };
    ResultaatHalCollectieEmbedded: {
      resultaten?: components['schemas']['ResultaatHal'][];
    };
    ResultaatHal: components['schemas']['ResultaatHalBasis'] & {
      _embedded?: components['schemas']['ResultaatEmbedded'];
    };
    ResultaatHalBasis: components['schemas']['Resultaat'] & {
      _links?: components['schemas']['ResultaatLinks'];
    };
    ResultaatLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
      resultaattype?: components['schemas']['schemas-HalLink'];
    };
    ResultaatEmbedded: {
      resultaattype?: components['schemas']['ResultaattypeHalBasis'];
    };
    ResultaattypeHalBasis: components['schemas']['ResultaatType'] & {
      _links?: components['schemas']['ResultaattypeLinks'];
    };
    ResultaattypeLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaaktype?: components['schemas']['schemas-HalLink'][];
      resultaattypeomschrijving?: components['schemas']['schemas-HalLink'][];
      selectielijstklasse?: components['schemas']['schemas-HalLink'][];
    };
    Rol: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Betrokkene
             * Format: uri
             * @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
             */
      betrokkene?: string;
      /**
             * Betrokkene type
             * @description Type van de `betrokkene`.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `vestiging` - Vestiging
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `medewerker` - Medewerker
             * @enum {string}
             */
      betrokkeneType: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
      /**
             * Roltype
             * Format: uri
             * @description URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK.
             */
      roltype: string;
      /**
             * Omschrijving
             * @description Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE.
             */
      readonly omschrijving?: string;
      /**
             * Omschrijving generiek
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
      readonly omschrijvingGeneriek?: string;
      /** Roltoelichting */
      roltoelichting: string;
      /**
             * Registratiedatum
             * Format: date-time
             * @description De datum waarop dit object is geregistreerd.
             */
      readonly registratiedatum?: string;
      /**
             * Indicatie machtiging
             * @description Indicatie machtiging
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `gemachtigde` - De betrokkene in de rol bij de zaak is door een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
             *     * `machtiginggever` - De betrokkene in de rol bij de zaak heeft een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
             * @enum {string}
             */
      indicatieMachtiging?: 'gemachtigde' | 'machtiginggever';
    };
    RolHalBasis: {
      betrokkeneType: 'RolHalBasis';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & {
      _links?: components['schemas']['RolLinks'];
    });
    RolLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
      betrokkene?: components['schemas']['schemas-HalLink'];
      roltype?: components['schemas']['schemas-HalLink'];
    };
    RolHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['RolHalCollectieEmbedded'];
    };
    RolHalCollectieEmbedded: {
      rollen?: components['schemas']['RolHal'][];
    };
    RolHal: {
      betrokkeneType: 'RolHal';
    } & (Omit<components['schemas']['RolHalBasis'], 'betrokkeneType'> & {
      _embedded?: components['schemas']['RolEmbedded'];
    });
    RolEmbedded: {
      roltype?: components['schemas']['RoltypeHalBasis'];
    };
    RoltypeHalBasis: components['schemas']['RolType'] & {
      _links?: components['schemas']['RoltypeLinks'];
    };
    RoltypeLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaaktype?: components['schemas']['schemas-HalLink'][];
    };
    VerblijfsAdres: {
      /**
             * Aoa identificatie
             * @description De unieke identificatie van het OBJECT
             */
      aoaIdentificatie: string;
      /** Wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * Gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** Aoa postcode */
      aoaPostcode?: string;
      /** Aoa huisnummer */
      aoaHuisnummer: number;
      /** Aoa huisletter */
      aoaHuisletter?: string;
      /** Aoa huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** Inp locatiebeschrijving */
      inpLocatiebeschrijving?: string;
    } | null;
    SubVerblijfBuitenland: {
      /**
             * Lnd landcode
             * @description De code, behorende bij de landnaam, zoals opgenomen in de Land/Gebied-tabel van de BRP.
             */
      lndLandcode: string;
      /**
             * Lnd landnaam
             * @description De naam van het land, zoals opgenomen in de Land/Gebied-tabel van de BRP.
             */
      lndLandnaam: string;
      /** Sub adres buitenland 1 */
      subAdresBuitenland_1?: string;
      /** Sub adres buitenland 2 */
      subAdresBuitenland_2?: string;
      /** Sub adres buitenland 3 */
      subAdresBuitenland_3?: string;
    } | null;
    RolNatuurlijkPersoon: {
      /**
             * Inp bsn
             * @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
             */
      inpBsn?: string;
      /**
             * Anp identificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
             */
      anpIdentificatie?: string;
      /**
             * Inp a nummer
             * @description Het administratienummer van de persoon, bedoeld in de Wet BRP
             */
      inpA_nummer?: string;
      /**
             * Geslachtsnaam
             * @description De stam van de geslachtsnaam.
             */
      geslachtsnaam?: string;
      /** Voorvoegsel geslachtsnaam */
      voorvoegselGeslachtsnaam?: string;
      /**
             * Voorletters
             * @description De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
             */
      voorletters?: string;
      /**
             * Voornamen
             * @description Voornamen bij de naam die de persoon wenst te voeren.
             */
      voornamen?: string;
      /**
             * Geslachtsaanduiding
             * @description Een aanduiding die aangeeft of de persoon een man of een vrouw is, of dat het geslacht nog onbekend is.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `m` - Man
             *     * `v` - Vrouw
             *     * `o` - Onbekend
             * @enum {string}
             */
      geslachtsaanduiding?: 'm' | 'v' | 'o';
      /** Geboortedatum */
      geboortedatum?: string;
      verblijfsadres?: components['schemas']['VerblijfsAdres'];
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'];
    };
    betrokkene_identificatie_RolNatuurlijkPersoon: {
      betrokkeneIdentificatie?: components['schemas']['RolNatuurlijkPersoon'];
    };
    natuurlijk_persoon: {
      betrokkeneType: 'natuurlijk_persoon';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNatuurlijkPersoon']);
    RolNietNatuurlijkPersoon: {
      /**
             * Inn nnp id
             * @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
             */
      innNnpId?: string;
      /**
             * Ann identificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
             */
      annIdentificatie?: string;
      /**
             * Statutaire naam
             * @description Naam van de niet-natuurlijke persoon zoals deze is vastgelegd in de statuten (rechtspersoon) of in de vennootschapsovereenkomst is overeengekomen (Vennootschap onder firma of Commanditaire vennootschap).
             */
      statutaireNaam?: string;
      /**
             * Inn rechtsvorm
             * @description De juridische vorm van de NIET-NATUURLIJK PERSOON.
             * @enum {string}
             */
      innRechtsvorm?: 'besloten_vennootschap' | 'cooperatie_europees_economische_samenwerking' | 'europese_cooperatieve_venootschap' | 'europese_naamloze_vennootschap' | 'kerkelijke_organisatie' | 'naamloze_vennootschap' | 'onderlinge_waarborg_maatschappij' | 'overig_privaatrechtelijke_rechtspersoon' | 'stichting' | 'vereniging' | 'vereniging_van_eigenaars' | 'publiekrechtelijke_rechtspersoon' | 'vennootschap_onder_firma' | 'maatschap' | 'rederij' | 'commanditaire_vennootschap' | 'kapitaalvennootschap_binnen_eer' | 'overige_buitenlandse_rechtspersoon_vennootschap' | 'kapitaalvennootschap_buiten_eer';
      /**
             * Bezoekadres
             * @description De gegevens over het adres van de NIET-NATUURLIJK PERSOON
             */
      bezoekadres?: string;
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'];
    };
    betrokkene_identificatie_RolNietNatuurlijkPersoon: {
      betrokkeneIdentificatie?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    niet_natuurlijk_persoon: {
      betrokkeneType: 'niet_natuurlijk_persoon';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolNietNatuurlijkPersoon']);
    RolVestiging: {
      /**
             * Vestigings nummer
             * @description Een korte unieke aanduiding van de Vestiging.
             */
      vestigingsNummer?: string;
      /** @description De naam van de vestiging waaronder gehandeld wordt. */
      handelsnaam?: string[];
      verblijfsadres?: components['schemas']['VerblijfsAdres'];
      subVerblijfBuitenland?: components['schemas']['SubVerblijfBuitenland'];
    };
    betrokkene_identificatie_RolVestiging: {
      betrokkeneIdentificatie?: components['schemas']['RolVestiging'];
    };
    vestiging: {
      betrokkeneType: 'vestiging';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolVestiging']);
    RolOrganisatorischeEenheid: {
      /**
             * Identificatie
             * @description Een korte identificatie van de organisatorische eenheid.
             */
      identificatie?: string;
      /**
             * Naam
             * @description De feitelijke naam van de organisatorische eenheid.
             */
      naam?: string;
      /** Is gehuisvest in */
      isGehuisvestIn?: string;
    };
    betrokkene_identificatie_RolOrganisatorischeEenheid: {
      betrokkeneIdentificatie?: components['schemas']['RolOrganisatorischeEenheid'];
    };
    organisatorische_eenheid: {
      betrokkeneType: 'organisatorische_eenheid';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolOrganisatorischeEenheid']);
    RolMedewerker: {
      /**
             * Identificatie
             * @description Een korte unieke aanduiding van de MEDEWERKER.
             */
      identificatie?: string;
      /**
             * Achternaam
             * @description De achternaam zoals de MEDEWERKER die in het dagelijkse verkeer gebruikt.
             */
      achternaam?: string;
      /**
             * Voorletters
             * @description De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
             */
      voorletters?: string;
      /**
             * Voorvoegsel achternaam
             * @description Dat deel van de geslachtsnaam dat voorkomt in Tabel 36 (GBA), voorvoegseltabel, en door een spatie van de geslachtsnaam is
             */
      voorvoegselAchternaam?: string;
    };
    betrokkene_identificatie_RolMedewerker: {
      betrokkeneIdentificatie?: components['schemas']['RolMedewerker'];
    };
    medewerker: {
      betrokkeneType: 'medewerker';
    } & (Omit<components['schemas']['Rol'], 'betrokkeneType'> & components['schemas']['betrokkene_identificatie_RolMedewerker']);
    Status: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Statustype
             * Format: uri
             * @description URL-referentie naar het STATUSTYPE (in de Catalogi API).
             */
      statustype: string;
      /**
             * Datum status gezet
             * Format: date-time
             * @description De datum waarop de ZAAK de status heeft verkregen.
             */
      datumStatusGezet: string;
      /**
             * Statustoelichting
             * @description Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
             */
      statustoelichting?: string;
    };
    StatusHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['StatusHalCollectieEmbedded'];
    };
    StatusHalCollectieEmbedded: {
      statussen?: components['schemas']['StatusHal'][];
    };
    StatusHal: components['schemas']['StatusHalBasis'] & {
      _embedded?: components['schemas']['StatusEmbedded'];
    };
    StatusEmbedded: {
      statustype?: components['schemas']['StatustypeHalBasis'];
    };
    StatustypeHalBasis: components['schemas']['StatusType'] & {
      _links?: components['schemas']['StatustypeLinks'];
    };
    StatustypeLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaaktype?: components['schemas']['schemas-HalLink'][];
    };
    ZaakContactMoment: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Contactmoment
             * Format: uri
             * @description URL-referentie naar het CONTACTMOMENT (in de Klantinteractie API)
             */
      contactmoment: string;
    };
    ZaakInformatieObjectHalBasis: components['schemas']['ZaakInformatieObject'] & {
      _links?: components['schemas']['ZaakInformatieObjectLinks'];
    };
    ZaakInformatieObjectHal: components['schemas']['ZaakInformatieObjectHalBasis'] & {
      _embedded?: components['schemas']['ZaakInformatieObjectEmbedded'];
    };
    ZaakInformatieObjectLinks: {
      self?: components['schemas']['schemas-HalLink'];
      informatieobject?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
    };
    ZaakInformatieObjectEmbedded: {
      zaak?: components['schemas']['ZaakHal'];
    };
    ZaakInformatieObjectHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['ZaakInformatieObjectHalCollectieEmbedded'];
    };
    ZaakInformatieObjectHalCollectieEmbedded: {
      zaakinformatieobjecten?: components['schemas']['ZaakInformatieObjectHal'][];
    };
    ZaakInformatieObject: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Informatieobject
             * Format: uri
             * @description URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
             */
      informatieobject: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Aard relatie weergave
             * @enum {string}
             */
      readonly aardRelatieWeergave?: 'Hoort bij, omgekeerd: kent' | 'Legt vast, omgekeerd: kan vastgelegd zijn als';
      /**
             * Titel
             * @description De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is.
             */
      titel?: string;
      /**
             * Beschrijving
             * @description Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT.
             */
      beschrijving?: string;
      /**
             * Registratiedatum
             * Format: date-time
             * @description De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd.
             */
      readonly registratiedatum?: string;
    };
    /** @description Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.
         *
         *     * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/).
         *     * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat.
         *     * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.
         *
         *     Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype. */
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
    } | null;
    ZaakObjectHalBasis: {
      objectType: 'ZaakObjectHalBasis';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & {
      _links?: components['schemas']['ZaakObjectLinks'];
    });
    ZaakObjectHal: {
      objectType: 'ZaakObjectHal';
    } & (Omit<components['schemas']['ZaakObjectHalBasis'], 'objectType'> & {
      _embedded?: components['schemas']['ZaakObjectEmbedded'];
    });
    ZaakObjectLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
      object?: components['schemas']['schemas-HalLink'];
    };
    ZaakObjectEmbedded: {
      zaak?: components['schemas']['ZaakHal'];
    };
    ZaakObjectHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['ZaakObjectHalCollectieEmbedded'];
    };
    ZaakObjectHalCollectieEmbedded: {
      zaakobjecten?: components['schemas']['ZaakObjectHal'][];
    };
    ZaakObject: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Object
             * Format: uri
             * @description URL-referentie naar de resource die het OBJECT beschrijft.
             */
      object?: string;
      /**
             * Object type
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
             * @enum {string}
             */
      objectType: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
      /**
             * Object type overige
             * @description Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft.
             */
      objectTypeOverige?: string;
      objectTypeOverigeDefinitie?: components['schemas']['ObjectTypeOverigeDefinitie'];
      /**
             * Relatieomschrijving
             * @description Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
             */
      relatieomschrijving?: string;
    };
    ObjectAdres: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** Wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * Gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** Huisnummer */
      huisnummer: number;
      /** Huisletter */
      huisletter?: string;
      /** Huisnummertoevoeging */
      huisnummertoevoeging?: string;
      /** Postcode */
      postcode?: string;
    };
    object_identificatie_ObjectAdres: {
      objectIdentificatie?: components['schemas']['ObjectAdres'];
    };
    adres: {
      objectType: 'adres';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectAdres']);
    besluit: {
      objectType: 'besluit';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
    ObjectBuurt: {
      /**
             * Buurt code
             * @description De code behorende bij de naam van de buurt
             */
      buurtCode: string;
      /**
             * Buurt naam
             * @description De naam van de buurt, zoals die door het CBS wordt gebruikt.
             */
      buurtNaam: string;
      /**
             * Gem gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemGemeenteCode: string;
      /**
             * Wyk wijk code
             * @description De code behorende bij de naam van de wijk
             */
      wykWijkCode: string;
    };
    object_identificatie_ObjectBuurt: {
      objectIdentificatie?: components['schemas']['ObjectBuurt'];
    };
    buurt: {
      objectType: 'buurt';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectBuurt']);
    enkelvoudig_document: {
      objectType: 'enkelvoudig_document';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
    ObjectGemeente: {
      /**
             * Gemeente naam
             * @description De officiële door de gemeente vastgestelde gemeentenaam.
             */
      gemeenteNaam: string;
      /**
             * Gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemeenteCode: string;
    };
    object_identificatie_ObjectGemeente: {
      objectIdentificatie?: components['schemas']['ObjectGemeente'];
    };
    gemeente: {
      objectType: 'gemeente';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeente']);
    ObjectGemeentelijkeOpenbareRuimte: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      openbareRuimteNaam: string;
    };
    object_identificatie_ObjectGemeentelijkeOpenbareRuimte: {
      objectIdentificatie?: components['schemas']['ObjectGemeentelijkeOpenbareRuimte'];
    };
    gemeentelijke_openbare_ruimte: {
      objectType: 'gemeentelijke_openbare_ruimte';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectGemeentelijkeOpenbareRuimte']);
    TerreinGebouwdObjectAdres: {
      /** Num identificatie */
      numIdentificatie?: string;
      /**
             * Oao identificatie
             * @description De unieke identificatie van het OBJECT
             */
      oaoIdentificatie: string;
      /** Wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * Gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** Aoa postcode */
      aoaPostcode?: string;
      /** Aoa huisnummer */
      aoaHuisnummer: number;
      /** Aoa huisletter */
      aoaHuisletter?: string;
      /** Aoa huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** Ogo locatie aanduiding */
      ogoLocatieAanduiding?: string;
    } | null;
    ObjectTerreinGebouwdObject: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      adresAanduidingGrp?: components['schemas']['TerreinGebouwdObjectAdres'];
    } | null;
    ObjectHuishouden: {
      /**
             * Nummer
             * @description Uniek identificerend administratienummer van een huishouden zoals toegekend door de gemeente waarin het huishouden woonachtig is.
             */
      nummer: string;
      isGehuisvestIn?: components['schemas']['ObjectTerreinGebouwdObject'];
    };
    object_identificatie_ObjectHuishouden: {
      objectIdentificatie?: components['schemas']['ObjectHuishouden'];
    };
    huishouden: {
      objectType: 'huishouden';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectHuishouden']);
    ObjectInrichtingselement: {
      /**
             * Type
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
             * @enum {string}
             */
      type: 'bak' | 'bord' | 'installatie' | 'kast' | 'mast' | 'paal' | 'sensor' | 'straatmeubilair' | 'waterinrichtingselement' | 'weginrichtingselement';
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    object_identificatie_ObjectInrichtingselement: {
      objectIdentificatie?: components['schemas']['ObjectInrichtingselement'];
    };
    inrichtingselement: {
      objectType: 'inrichtingselement';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectInrichtingselement']);
    ObjectKadastraleOnroerendeZaak: {
      /**
             * Kadastrale identificatie
             * @description De unieke identificatie van het OBJECT
             */
      kadastraleIdentificatie: string;
      /**
             * Kadastrale aanduiding
             * @description De typering van de kadastrale aanduiding van een onroerende zaak conform Kadaster
             */
      kadastraleAanduiding: string;
    };
    object_identificatie_ObjectKadastraleOnroerendeZaak: {
      objectIdentificatie?: components['schemas']['ObjectKadastraleOnroerendeZaak'];
    };
    kadastrale_onroerende_zaak: {
      objectType: 'kadastrale_onroerende_zaak';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKadastraleOnroerendeZaak']);
    ObjectKunstwerkdeel: {
      /**
             * Type
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
             * @enum {string}
             */
      type: 'keermuur' | 'overkluizing' | 'duiker' | 'faunavoorziening' | 'vispassage' | 'bodemval' | 'coupure' | 'ponton' | 'voorde' | 'hoogspanningsmast' | 'gemaal' | 'perron' | 'sluis' | 'strekdam' | 'steiger' | 'stuw';
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** Naam */
      naam: string;
    };
    object_identificatie_ObjectKunstwerkdeel: {
      objectIdentificatie?: components['schemas']['ObjectKunstwerkdeel'];
    };
    kunstwerkdeel: {
      objectType: 'kunstwerkdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectKunstwerkdeel']);
    ObjectMaatschappelijkeActiviteit: {
      /**
             * Kvk nummer
             * @description Landelijk uniek identificerend administratienummer van een MAATSCHAPPELIJKE ACTIVITEIT zoals toegewezen door de Kamer van Koophandel (KvK).
             */
      kvkNummer: string;
      /**
             * Handelsnaam
             * @description De naam waaronder de onderneming handelt.
             */
      handelsnaam: string;
    };
    object_identificatie_ObjectMaatschappelijkeActiviteit: {
      objectIdentificatie?: components['schemas']['ObjectMaatschappelijkeActiviteit'];
    };
    maatschappelijke_activiteit: {
      objectType: 'maatschappelijke_activiteit';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectMaatschappelijkeActiviteit']);
    object_identificatie_RolMedewerker: {
      objectIdentificatie?: components['schemas']['RolMedewerker'];
    };
    object_identificatie_RolNatuurlijkPersoon: {
      objectIdentificatie?: components['schemas']['RolNatuurlijkPersoon'];
    };
    object_identificatie_RolNietNatuurlijkPersoon: {
      objectIdentificatie?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    ObjectOpenbareRuimte: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /** Wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * Gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
    };
    object_identificatie_ObjectOpenbareRuimte: {
      objectIdentificatie?: components['schemas']['ObjectOpenbareRuimte'];
    };
    openbare_ruimte: {
      objectType: 'openbare_ruimte';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOpenbareRuimte']);
    object_identificatie_RolOrganisatorischeEenheid: {
      objectIdentificatie?: components['schemas']['RolOrganisatorischeEenheid'];
    };
    ObjectPand: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
    };
    object_identificatie_ObjectPand: {
      objectIdentificatie?: components['schemas']['ObjectPand'];
    };
    pand: {
      objectType: 'pand';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectPand']);
    ObjectSpoorbaandeel: {
      /**
             * Type
             * @description Specificatie van het soort Spoorbaan
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `breedspoor` - breedspoor
             *     * `normaalspoor` - normaalspoor
             *     * `smalspoor` - smalspoor
             *     * `spoorbaan` - spoorbaan
             * @enum {string}
             */
      type: 'breedspoor' | 'normaalspoor' | 'smalspoor' | 'spoorbaan';
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    object_identificatie_ObjectSpoorbaandeel: {
      objectIdentificatie?: components['schemas']['ObjectSpoorbaandeel'];
    };
    spoorbaandeel: {
      objectType: 'spoorbaandeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectSpoorbaandeel']);
    status: {
      objectType: 'status';
    } & Omit<components['schemas']['ZaakObject'], 'objectType'>;
    StatusHalBasis: components['schemas']['Status'] & {
      _links?: components['schemas']['StatusLinks'];
    };
    StatusLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
      statustype?: components['schemas']['schemas-HalLink'];
    };
    ObjectTerreindeel: {
      /** Type */
      type: string;
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    object_identificatie_ObjectTerreindeel: {
      objectIdentificatie?: components['schemas']['ObjectTerreindeel'];
    };
    terreindeel: {
      objectType: 'terreindeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreindeel']);
    object_identificatie_ObjectTerreinGebouwdObject: {
      objectIdentificatie?: components['schemas']['ObjectTerreinGebouwdObject'];
    };
    terrein_gebouwd_object: {
      objectType: 'terrein_gebouwd_object';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectTerreinGebouwdObject']);
    object_identificatie_RolVestiging: {
      objectIdentificatie?: components['schemas']['RolVestiging'];
    };
    ObjectWaterdeel: {
      /**
             * Type waterdeel
             * @description Specificatie van het soort water
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `zee` - Zee
             *     * `waterloop` - Waterloop
             *     * `watervlakte` - Watervlakte
             *     * `greppel_droge_sloot` - Greppel, droge sloot
             * @enum {string}
             */
      typeWaterdeel: 'zee' | 'waterloop' | 'watervlakte' | 'greppel_droge_sloot';
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    object_identificatie_ObjectWaterdeel: {
      objectIdentificatie?: components['schemas']['ObjectWaterdeel'];
    };
    waterdeel: {
      objectType: 'waterdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWaterdeel']);
    ObjectWegdeel: {
      /** Type */
      type: string;
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Naam
             * @description De benaming van het OBJECT
             */
      naam?: string;
    };
    object_identificatie_ObjectWegdeel: {
      objectIdentificatie?: components['schemas']['ObjectWegdeel'];
    };
    wegdeel: {
      objectType: 'wegdeel';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWegdeel']);
    ObjectWijk: {
      /**
             * Wijk code
             * @description De code behorende bij de naam van de wijk.
             */
      wijkCode: string;
      /**
             * Wijk naam
             * @description De naam van de wijk, zoals die door het CBS wordt gebruikt.
             */
      wijkNaam: string;
      /**
             * Gem gemeente code
             * @description Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
             */
      gemGemeenteCode: string;
    };
    object_identificatie_ObjectWijk: {
      objectIdentificatie?: components['schemas']['ObjectWijk'];
    };
    wijk: {
      objectType: 'wijk';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWijk']);
    ObjectWoonplaats: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Woonplaats naam
             * @description De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
             */
      woonplaatsNaam: string;
    };
    object_identificatie_ObjectWoonplaats: {
      objectIdentificatie?: components['schemas']['ObjectWoonplaats'];
    };
    woonplaats: {
      objectType: 'woonplaats';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWoonplaats']);
    WozObjectAdres: {
      /**
             * Aoa identificatie
             * @description De unieke identificatie van het OBJECT
             */
      aoaIdentificatie: string;
      /** Wpl woonplaats naam */
      wplWoonplaatsNaam: string;
      /**
             * Gor openbare ruimte naam
             * @description Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
             */
      gorOpenbareRuimteNaam: string;
      /** Aoa postcode */
      aoaPostcode?: string;
      /** Aoa huisnummer */
      aoaHuisnummer: number;
      /** Aoa huisletter */
      aoaHuisletter?: string;
      /** Aoa huisnummertoevoeging */
      aoaHuisnummertoevoeging?: string;
      /** Locatie omschrijving */
      locatieOmschrijving?: string;
    } | null;
    ObjectWozObject: {
      /**
             * Woz object nummer
             * @description De unieke identificatie van het OBJECT
             */
      wozObjectNummer: string;
      aanduidingWozObject?: components['schemas']['WozObjectAdres'];
    };
    ObjectWozDeelobject: {
      /**
             * Nummer woz deel object
             * @description Uniek identificatienummer voor het deelobject binnen een WOZ-object.
             */
      nummerWozDeelObject: string;
      isOnderdeelVan?: components['schemas']['ObjectWozObject'];
    };
    object_identificatie_ObjectWozDeelobject: {
      objectIdentificatie?: components['schemas']['ObjectWozDeelobject'];
    };
    woz_deelobject: {
      objectType: 'woz_deelobject';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozDeelobject']);
    object_identificatie_ObjectWozObject: {
      objectIdentificatie?: components['schemas']['ObjectWozObject'];
    };
    woz_object: {
      objectType: 'woz_object';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozObject']);
    ObjectWozWaarde: {
      /**
             * Waardepeildatum
             * @description De datum waarnaar de waarde van het WOZ-object wordt bepaald.
             */
      waardepeildatum: string;
      isVoor?: components['schemas']['ObjectWozObject'];
    };
    object_identificatie_ObjectWozWaarde: {
      objectIdentificatie?: components['schemas']['ObjectWozWaarde'];
    };
    woz_waarde: {
      objectType: 'woz_waarde';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectWozWaarde']);
    ZakelijkRechtHeeftAlsGerechtigde: {
      natuurlijkPersoon?: components['schemas']['RolNatuurlijkPersoon'];
      nietNatuurlijkPersoon?: components['schemas']['RolNietNatuurlijkPersoon'];
    };
    ObjectZakelijkRecht: {
      /**
             * Identificatie
             * @description De unieke identificatie van het OBJECT
             */
      identificatie: string;
      /**
             * Avg aard
             * @description aanduiding voor de aard van het recht
             */
      avgAard: string;
      heeftBetrekkingOp?: components['schemas']['ObjectKadastraleOnroerendeZaak'];
      heeftAlsGerechtigde?: components['schemas']['ZakelijkRechtHeeftAlsGerechtigde'];
    };
    object_identificatie_ObjectZakelijkRecht: {
      objectIdentificatie?: components['schemas']['ObjectZakelijkRecht'];
    };
    zakelijk_recht: {
      objectType: 'zakelijk_recht';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectZakelijkRecht']);
    ObjectOverige: {
      /** Overige data */
      overigeData: Record<string, never>;
    };
    object_identificatie_ObjectOverige: {
      objectIdentificatie?: components['schemas']['ObjectOverige'];
    };
    overige: {
      objectType: 'overige';
    } & (Omit<components['schemas']['ZaakObject'], 'objectType'> & components['schemas']['object_identificatie_ObjectOverige']);
    ZaakVerzoek: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             * @description URL-referentie naar de ZAAK.
             */
      zaak: string;
      /**
             * Verzoek
             * Format: uri
             * @description URL-referentie naar het VERZOEK (in de Klantinteractie API)
             */
      verzoek: string;
    };
    /**
         * Geometry
         * @description GeoJSON geometry
         */
    Geometry: {
      /**
             * @description The geometry type
             * @enum {string}
             */
      type: 'Point' | 'MultiPoint' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon' | 'Feature' | 'FeatureCollection' | 'GeometryCollection';
    };
    /**
         * Point2D
         * @description A 2D point
         */
    Point2D: number[];
    /** @description GeoJSON point geometry */
    Point: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'Point';
    };
    /** @description GeoJSON multi-point geometry */
    MultiPoint: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiPoint';
    };
    /** @description GeoJSON line-string geometry */
    LineString: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'LineString';
    };
    /** @description GeoJSON multi-line-string geometry */
    MultiLineString: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiLineString';
    };
    /** @description GeoJSON polygon geometry */
    Polygon: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'Polygon';
    };
    /** @description GeoJSON multi-polygon geometry */
    MultiPolygon: components['schemas']['Geometry'] & {
      coordinates: components['schemas']['Point2D'][][][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'MultiPolygon';
    };
    /** @description GeoJSON multi-polygon geometry */
    GeometryCollection: components['schemas']['Geometry'] & {
      geometries: components['schemas']['Geometry'][];
    } & {
      /**
             * @description discriminator enum property added by openapi-typescript
             * @enum {string}
             */
      type: 'GeometryCollection';
    };
    /** GeoJSONGeometry */
    GeoJSONGeometry: components['schemas']['Point'] | components['schemas']['MultiPoint'] | components['schemas']['LineString'] | components['schemas']['MultiLineString'] | components['schemas']['Polygon'] | components['schemas']['MultiPolygon'] | components['schemas']['GeometryCollection'];
    /** @description Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK */
    Verlenging: {
      /**
             * Reden
             * @description Omschrijving van de reden voor het verlengen van de behandeling van de zaak.
             */
      reden: string;
      /**
             * Duur
             * Format: duration
             * @description Het aantal werkbare dagen waarmee de doorlooptijd van de behandeling van de ZAAK is verlengd (of verkort) ten opzichte van de eerder gecommuniceerde doorlooptijd.
             */
      duur: string;
    } | null;
    /** @description Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK */
    Opschorting: {
      /**
             * Indicatie
             * @description Aanduiding of de behandeling van de ZAAK tijdelijk is opgeschort.
             */
      indicatie: boolean;
      /**
             * Reden
             * @description Omschrijving van de reden voor het opschorten van de behandeling van de zaak.
             */
      reden: string;
    } | null;
    /** @description Een lijst van relevante andere zaken. */
    RelevanteZaak: {
      /**
             * URL-referentie naar de ZAAK.
             * Format: uri
             */
      url: string;
      /**
             * Aard relatie
             * @description Benamingen van de aard van de relaties van andere zaken tot (onderhanden) zaken.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `vervolg` - De andere zaak gaf aanleiding tot het starten van de onderhanden zaak.
             *     * `onderwerp` - De andere zaak is relevant voor cq. is onderwerp van de onderhanden zaak.
             *     * `bijdrage` - Aan het bereiken van de uitkomst van de andere zaak levert de onderhanden zaak een bijdrage.
             * @enum {string}
             */
      aardRelatie: 'vervolg' | 'onderwerp' | 'bijdrage';
    };
    /** @description Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`. */
    ZaakKenmerk: {
      /**
             * Kenmerk
             * @description Identificeert uniek de zaak in een andere administratie.
             */
      kenmerk: string;
      /**
             * Bron
             * @description De aanduiding van de administratie waar het kenmerk op slaat.
             */
      bron: string;
    };
    Zaak: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Identificatie
             * @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      bronorganisatie: string;
      /**
             * Omschrijving
             * @description Een korte omschrijving van de zaak.
             */
      omschrijving?: string;
      /**
             * Toelichting
             * @description Een toelichting op de zaak.
             */
      toelichting?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
             */
      zaaktype: string;
      /**
             * Registratiedatum
             * Format: date
             * @description De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
             */
      registratiedatum?: string;
      /**
             * Verantwoordelijke organisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      verantwoordelijkeOrganisatie: string;
      /**
             * Startdatum
             * Format: date
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum: string;
      /**
             * Einddatum
             * Format: date
             * @description De datum waarop de uitvoering van de zaak afgerond is.
             */
      readonly einddatum?: string | null;
      /**
             * Einddatum gepland
             * Format: date
             * @description De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
             */
      einddatumGepland?: string | null;
      /**
             * Uiterlijke einddatum afdoening
             * Format: date
             * @description De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
             */
      uiterlijkeEinddatumAfdoening?: string | null;
      /**
             * Publicatiedatum
             * Format: date
             * @description Datum waarop (het starten van) de zaak gepubliceerd is of wordt.
             */
      publicatiedatum?: string | null;
      /**
             * Communicatiekanaal
             * Format: uri
             * @description Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen.
             */
      communicatiekanaal?: string;
      /** @description De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn. */
      productenOfDiensten?: string[];
      /**
             * Vertrouwlijkheidaanduiding
             * @description Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft.
             * @enum {string}
             */
      vertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Betalingsindicatie
             * @description Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten.
             *     * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald.
             *     * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald.
             *     * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald.
             * @enum {string}
             */
      betalingsindicatie?: 'nvt' | 'nog_niet' | 'gedeeltelijk' | 'geheel';
      /**
             * Betalingsindicatie weergave
             * @description Uitleg bij `betalingsindicatie`.
             */
      readonly betalingsindicatieWeergave?: string;
      /**
             * Laatste betaaldatum
             * Format: date-time
             * @description De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak.
             */
      laatsteBetaaldatum?: string | null;
      zaakgeometrie?: components['schemas']['GeoJSONGeometry'];
      verlenging?: components['schemas']['Verlenging'];
      opschorting?: components['schemas']['Opschorting'];
      /**
             * Selectielijstklasse
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
      /** @description URL-referenties naar deel ZAAKen. */
      readonly deelzaken?: string[];
      /** @description Een lijst van relevante andere zaken. */
      relevanteAndereZaken?: components['schemas']['RelevanteZaak'][];
      readonly eigenschappen?: string[];
      readonly rollen?: string[];
      /**
             * Status
             * Format: uri
             * @description Indien geen status bekend is, dan is de waarde 'null'
             */
      readonly status?: string | null;
      readonly zaakinformatieobjecten?: string[];
      readonly zaakobjecten?: string[];
      /** @description Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`. */
      kenmerken?: components['schemas']['ZaakKenmerk'][];
      /**
             * Archiefnominatie
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             * @enum {string|null}
             */
      archiefnominatie?: 'blijvend_bewaren' | 'vernietigen' | null;
      /**
             * Archiefstatus
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
             *     * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
             *     * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
             *     * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
             * @enum {string}
             */
      archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
      /**
             * Archiefactiedatum
             * Format: date
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum?: string | null;
      /**
             * Resultaat
             * Format: uri
             * @description URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null'
             */
      readonly resultaat?: string | null;
      /**
             * Opdrachtgevende organisatie
             * @description De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft.
             */
      opdrachtgevendeOrganisatie?: string;
    };
    ZaakHalBasis: components['schemas']['Zaak'] & {
      _links?: components['schemas']['ZaakLinks'];
    };
    ZaakHal: components['schemas']['ZaakHalBasis'] & {
      _embedded?: components['schemas']['ZaakEmbedded'];
    };
    ZaakLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaaktype?: components['schemas']['schemas-HalLink'];
      communicatiekanaal?: components['schemas']['schemas-HalLink'];
      productenOfDiensten?: components['schemas']['schemas-HalLink'][];
      selectielijstklasse?: components['schemas']['schemas-HalLink'];
      hoofdzaak?: components['schemas']['schemas-HalLink'];
      deelzaken?: components['schemas']['schemas-HalLink'][];
      relevanteAndereZaken?: components['schemas']['schemas-HalLink'][];
      eigenschappen?: components['schemas']['schemas-HalLink'][];
      rollen?: components['schemas']['schemas-HalLink'][];
      status?: components['schemas']['schemas-HalLink'];
      zaakinformatieobjecten?: components['schemas']['schemas-HalLink'][];
      zaakobjecten?: components['schemas']['schemas-HalLink'][];
      resultaten?: components['schemas']['schemas-HalLink'];
    };
    ZaakEmbedded: {
      zaaktype?: components['schemas']['ZaaktypeHalBasis'];
      selectielijstklasse?: components['schemas']['schemas-HalLink'];
      hoofdzaak?: components['schemas']['ZaakHalBasis'];
      deelzaken?: components['schemas']['ZaakHalBasis'][];
      relevanteAndereZaken?: components['schemas']['ZaaktypeHalBasis'][];
      eigenschappen?: components['schemas']['ZaakEigenschapHalBasis'][];
      rollen?: components['schemas']['RolHalBasis'][];
      status?: components['schemas']['StatusHalBasis'];
      zaakinformatieobjecten?: components['schemas']['ZaakInformatieObjectHalBasis'][];
      zaakobjecten?: components['schemas']['ZaakObjectHalBasis'][];
      resultaten?: components['schemas']['ResultaatHalBasis'];
    };
    ZaakHalCollectie: {
      _links?: components['schemas']['HalPaginationLinks'];
      _embedded?: components['schemas']['ZaakHalCollectieEmbedded'];
    };
    ZaakHalCollectieEmbedded: {
      zaken?: components['schemas']['ZaakHal'][];
    };
    ZaaktypeHalBasis: components['schemas']['ZaakType'] & {
      _links?: components['schemas']['ZaaktypeLinks'];
    };
    ZaaktypeLinks: {
      self?: components['schemas']['schemas-HalLink'];
      productenOfDiensten?: components['schemas']['schemas-HalLink'][];
      statustypen?: components['schemas']['schemas-HalLink'][];
      resultaattypen?: components['schemas']['schemas-HalLink'][];
      eigenschappen?: components['schemas']['schemas-HalLink'][];
      informatieobjecttypen?: components['schemas']['schemas-HalLink'][];
      roltypen?: components['schemas']['schemas-HalLink'][];
      besluittypen?: components['schemas']['schemas-HalLink'][];
      gerelateerdeZaaktypen?: components['schemas']['schemas-HalLink'][];
    };
    GeoWithin: {
      within?: components['schemas']['GeoJSONGeometry'];
    };
    ZaakZoek: {
      zaakgeometrie?: components['schemas']['GeoWithin'];
      /** @description Array of unieke resource identifiers (UUID4) */
      uuid__in?: string[];
      /**
             * Identificatie
             * @description De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
             */
      identificatie?: string;
      /**
             * Bronorganisatie
             * @description Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
             */
      bronorganisatie?: string;
      /**
             * Zaaktype
             * @description URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
             */
      zaaktype?: string;
      /**
             * Archiefnominatie
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             * @enum {string}
             */
      archiefnominatie?: 'blijvend_bewaren' | 'vernietigen';
      /**
             * Archiefnominatie  in
             * @description Multiple values may be separated by commas.
             */
      archiefnominatie__in?: string;
      /**
             * Archiefactiedatum
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum?: string;
      /**
             * Archiefactiedatum  lt
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum__lt?: string;
      /**
             * Archiefactiedatum  gt
             * @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
             */
      archiefactiedatum__gt?: string;
      /**
             * Archiefstatus
             * @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
             *     * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
             *     * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
             *     * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
             * @enum {string}
             */
      archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
      /**
             * Archiefstatus  in
             * @description Multiple values may be separated by commas.
             */
      archiefstatus__in?: string;
      /**
             * Startdatum
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum?: string;
      /**
             * Startdatum  gt
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum__gt?: string;
      /**
             * Startdatum  gte
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum__gte?: string;
      /**
             * Startdatum  lt
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum__lt?: string;
      /**
             * Startdatum  lte
             * @description De datum waarop met de uitvoering van de zaak is gestart
             */
      startdatum__lte?: string;
      /**
             * Rol  betrokkenetype
             * @description Type van de `betrokkene`.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `natuurlijk_persoon` - Natuurlijk persoon
             *     * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
             *     * `vestiging` - Vestiging
             *     * `organisatorische_eenheid` - Organisatorische eenheid
             *     * `medewerker` - Medewerker
             * @enum {string}
             */
      rol__betrokkeneType?: 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'vestiging' | 'organisatorische_eenheid' | 'medewerker';
      /**
             * Rol  betrokkene
             * @description URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
             */
      rol__betrokkene?: string;
      /**
             * Rol  omschrijvinggeneriek
             * @description Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `adviseur` - Adviseur
             *     * `behandelaar` - Behandelaar
             *     * `belanghebbende` - Belanghebbende
             *     * `beslisser` - Beslisser
             *     * `initiator` - Initiator
             *     * `klantcontacter` - Klantcontacter
             *     * `zaakcoordinator` - Zaakcoördinator
             *     * `mede_initiator` - Mede-initiator
             * @enum {string}
             */
      rol__omschrijvingGeneriek?: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
      /**
             * Maximalevertrouwelijkheidaanduiding
             * @description Zaken met een vertrouwelijkheidaanduiding die beperkter is dan de aangegeven aanduiding worden uit de resultaten gefiltered.
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
      maximaleVertrouwelijkheidaanduiding?: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpbsn
             * @description Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  anpidentificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpa nummer
             * @description Het administratienummer van de persoon, bedoeld in de Wet BRP
             */
      rol__betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
      /**
             * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  innnnpid
             * @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
             */
      rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
      /**
             * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  annidentificatie
             * @description Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
             */
      rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  vestiging  vestigingsnummer
             * @description Een korte unieke aanduiding van de Vestiging.
             */
      rol__betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
      /**
             * Rol  betrokkeneidentificatie  medewerker  identificatie
             * @description Een korte unieke aanduiding van de MEDEWERKER.
             */
      rol__betrokkeneIdentificatie__medewerker__identificatie?: string;
      /**
             * Rol  betrokkeneidentificatie  organisatorischeeenheid  identificatie
             * @description Een korte identificatie van de organisatorische eenheid.
             */
      rol__betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
      /**
             * Ordering
             * @description Het veld waarop de resultaten geordend worden.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `startdatum` - Startdatum
             *     * `-startdatum` - Startdatum (descending)
             *     * `einddatum` - Einddatum
             *     * `-einddatum` - Einddatum (descending)
             *     * `publicatiedatum` - Publicatiedatum
             *     * `-publicatiedatum` - Publicatiedatum (descending)
             *     * `archiefactiedatum` - Archiefactiedatum
             *     * `-archiefactiedatum` - Archiefactiedatum (descending)
             * @enum {string}
             */
      ordering?: 'startdatum' | '-startdatum' | 'einddatum' | '-einddatum' | 'publicatiedatum' | '-publicatiedatum' | 'archiefactiedatum' | '-archiefactiedatum';
      /**
             * Expand
             * @description Haal details van inline resources direct op.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `status` - status
             *     * `resultaat` - resultaat
             *     * `eigenschappen` - eigenschappen
             *     * `rollen` - rollen
             *     * `zaakobjecten` - zaakobjecten
             *     * `zaakinformatieobjecten` - zaakinformatieobjecten
             * @enum {string}
             */
      expand?: 'status' | 'resultaat' | 'eigenschappen' | 'rollen' | 'zaakobjecten' | 'zaakinformatieobjecten';
    };
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
    ZaakBesluit: {
      /**
             * Url
             * Format: uri
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Besluit
             * Format: uri
             * @description URL-referentie naar het BESLUIT (in de Besluiten API), waar ook de relatieinformatie opgevraagd kan worden.
             */
      besluit: string;
    };
    ZaakEigenschap: {
      /**
             * Url
             * Format: uri
             */
      readonly url?: string;
      /**
             * Uuid
             * Format: uuid
             * @description Unieke resource identifier (UUID4)
             */
      readonly uuid?: string;
      /**
             * Zaak
             * Format: uri
             */
      zaak: string;
      /**
             * Eigenschap
             * Format: uri
             * @description URL-referentie naar de EIGENSCHAP (in de Catalogi API).
             */
      eigenschap: string;
      /**
             * Naam
             * @description De naam van de EIGENSCHAP (overgenomen uit de Catalogi API).
             */
      readonly naam?: string;
      /** Waarde */
      waarde: string;
    };
    ZaakEigenschapHalBasis: components['schemas']['ZaakEigenschap'] & {
      _links?: components['schemas']['ZaakEigenschapLinks'];
    };
    ZaakEigenschapLinks: {
      self?: components['schemas']['schemas-HalLink'];
      zaak?: components['schemas']['schemas-HalLink'];
      eigenschap?: components['schemas']['schemas-HalLink'][];
    };
    /** @description De Link Object zoals gespecificeerd in https://tools.ietf.org/html/draft-kelly-json-hal-08#section-5; Deze link kan als templated link worden aangeboden. [URI-templating is hier beschreven](https://github.com/VNG-Realisatie/API-Kennisbank/blob/master/common/features/uri-templating.feature). */
    'schemas-HalLink': {
      href: components['schemas']['Href'];
      templated?: boolean;
      /** @description Voor mens leesbaar label bij de link */
      title?: string;
    };
    /**
         * Brondatum archiefprocedure
         * @description Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier.
         */
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
             *     * `hoofdzaak` - (Hoofzaak) De termijn start op de datum waarop de gerelateerde zaak is afgehandeld, waarvan de zaak een deelzaak is (`ZAAK.Einddatum` van de hoofdzaak in het RGBZ). ResultaatType.ZaakType is deelzaaktype van ZaakType.
             *     * `ingangsdatum_besluit` - (Ingangsdatum besluit) De termijn start op de datum waarop het besluit van kracht wordt (`BESLUIT.Ingangsdatum` in het RGBZ).	ResultaatType.ZaakType heeft relevant BesluitType
             *     * `termijn` - (Termijn) De termijn start een vast aantal jaren na de datum waarop de zaak is afgehandeld (`ZAAK.Einddatum` in het RGBZ).
             *     * `vervaldatum_besluit` - (Vervaldatum besluit) De termijn start op de dag na de datum waarop het besluit vervalt (`BESLUIT.Vervaldatum` in het RGBZ). ResultaatType.ZaakType heeft relevant BesluitType
             *     * `zaakobject` - (Zaakobject) De termijn start op de einddatum geldigheid van het zaakobject waarop de zaak betrekking heeft (bijvoorbeeld de overlijdendatum van een Persoon). M.b.v. de attribuutsoort `Objecttype` wordt vastgelegd om welke zaakobjecttype het gaat; m.b.v. de attribuutsoort `Datumkenmerk` wordt vastgelegd welke datum-attribuutsoort van het zaakobjecttype het betreft.
             * @enum {string}
             */
      afleidingswijze: 'afgehandeld' | 'ander_datumkenmerk' | 'eigenschap' | 'gerelateerde_zaak' | 'hoofdzaak' | 'ingangsdatum_besluit' | 'termijn' | 'vervaldatum_besluit' | 'zaakobject';
      /**
             * Datumkenmerk
             * @description Naam van de attribuutsoort van het procesobject dat bepalend is voor het einde van de procestermijn.
             */
      datumkenmerk?: string;
      /**
             * Einddatum bekend
             * @description Indicatie dat de einddatum van het procesobject gedurende de uitvoering van de zaak bekend moet worden. Indien deze nog niet bekend is en deze waarde staat op `true`, dan kan de zaak (nog) niet afgesloten worden.
             */
      einddatumBekend?: boolean;
      /**
             * Objecttype
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
             * @enum {string}
             */
      objecttype?: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
      /**
             * Registratie
             * @description De naam van de registratie waarvan het procesobject deel uit maakt.
             */
      registratie?: string;
      /**
             * Procestermijn
             * Format: duration
             * @description De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie. Enkel relevant indien de afleidingswijze 'termijn' is.
             */
      procestermijn?: string | null;
    } | null;
    ResultaatType: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * is van
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin resultaten van dit RESULTAATTYPE bereikt kunnen worden.
             */
      zaaktype: string;
      /**
             * Omschrijving
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      omschrijving: string;
      /**
             * Resultaattypeomschrijving
             * Format: uri
             * @description Algemeen gehanteerde omschrijving van de aard van resultaten van het RESULTAATTYPE. Dit moet een URL-referentie zijn naar de referenlijst van generieke resultaattypeomschrijvingen. Im ImZTC heet dit 'omschrijving generiek'
             */
      resultaattypeomschrijving: string;
      /**
             * Omschrijving generiek
             * @description Waarde van de omschrijving-generiek referentie (attribuut `omschrijving`)
             */
      readonly omschrijvingGeneriek?: string;
      /**
             * Selectielijstklasse
             * Format: uri
             * @description URL-referentie naar de, voor het archiefregime bij het RESULTAATTYPE relevante, categorie in de Selectielijst Archiefbescheiden (RESULTAAT in de Selectielijst API) van de voor het ZAAKTYPE verantwoordelijke overheidsorganisatie.
             */
      selectielijstklasse: string;
      /**
             * Toelichting
             * @description Een toelichting op dit RESULTAATTYPE en het belang hiervan voor ZAAKen waarin een resultaat van dit RESULTAATTYPE wordt geselecteerd.
             */
      toelichting?: string;
      /**
             * Archiefnominatie
             * @description Aanduiding die aangeeft of ZAAKen met een resultaat van dit RESULTAATTYPE blijvend moeten worden bewaard of (op termijn) moeten worden vernietigd. Indien niet expliciet opgegeven wordt dit gevuld vanuit de selectielijst.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
             *     * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
             * @enum {string}
             */
      archiefnominatie?: 'blijvend_bewaren' | 'vernietigen';
      /**
             * Archiefactietermijn
             * Format: duration
             * @description De termijn, na het vervallen van het bedrjfsvoeringsbelang, waarna het zaakdossier (de ZAAK met alle bijbehorende INFORMATIEOBJECTen) van een ZAAK met een resultaat van dit RESULTAATTYPE vernietigd of overgebracht (naar een archiefbewaarplaats) moet worden. Voor te vernietigen dossiers betreft het de in die Selectielijst genoemde bewaartermjn. Voor blijvend te bewaren zaakdossiers betreft het de termijn vanaf afronding van de zaak tot overbrenging (de procestermijn is dan nihil).
             */
      archiefactietermijn?: string | null;
      brondatumArchiefprocedure?: components['schemas']['BrondatumArchiefprocedure'];
    };
    RolType: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Is van
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
             */
      zaaktype: string;
      /**
             * Omschrijving
             * @description Omschrijving van de aard van de ROL.
             */
      omschrijving: string;
      /**
             * Omschrijving generiek
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
             * @enum {string}
             */
      omschrijvingGeneriek: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
    };
    StatusType: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Omschrijving
             * @description Een korte, voor de initiator van de zaak relevante, omschrijving van de aard van de STATUS van zaken van een ZAAKTYPE.
             */
      omschrijving: string;
      /**
             * Omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van STATUSsen van het STATUSTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * Statustekst
             * @description De tekst die wordt gebruikt om de Initiator te informeren over het bereiken van een STATUS van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
             */
      statustekst?: string;
      /**
             * Is van
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden.
             */
      zaaktype: string;
      /**
             * Volgnummer
             * @description Een volgnummer voor statussen van het STATUSTYPE binnen een zaak.
             */
      volgnummer: number;
      /**
             * Is eindstatus
             * @description Geeft aan dat dit STATUSTYPE een eindstatus betreft. Dit gegeven is afgeleid uit alle STATUSTYPEn van dit ZAAKTYPE met het hoogste volgnummer.
             */
      readonly isEindstatus?: boolean;
      /**
             * Informeren
             * @description Aanduiding die aangeeft of na het zetten van een STATUS van dit STATUSTYPE de Initiator moet worden geïnformeerd over de statusovergang.
             */
      informeren?: boolean;
    };
    /**
         * Referentieproces
         * @description Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE.
         */
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
    /** @description De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE. */
    ZaakTypenRelatie: {
      /**
             * Zaaktype
             * Format: uri
             * @description URL referentie naar het gerelateerde zaaktype, mogelijks in een extern ZTC.
             */
      zaaktype: string;
      /**
             * Aard relatie
             * @description Omschrijving van de aard van de relatie van zaken van het ZAAKTYPE tot zaken van het andere ZAAKTYPE
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `vervolg` - Vervolg
             *     * `bijdrage` - Bijdrage
             *     * `onderwerp` - Onderwerp
             * @enum {string}
             */
      aardRelatie: 'vervolg' | 'bijdrage' | 'onderwerp';
      /**
             * Toelichting
             * @description Een toelichting op de aard van de relatie tussen beide ZAAKTYPEN.
             */
      toelichting?: string;
    };
    ZaakType: {
      /**
             * Url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Identificatie
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      identificatie: number;
      /**
             * Omschrijving
             * @description Omschrijving van de aard van ZAAKen van het ZAAKTYPE.
             */
      omschrijving: string;
      /**
             * Omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van ZAAKen van het ZAAKTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * Vertrouwelijkheidaanduiding
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
             * @enum {string}
             */
      vertrouwelijkheidaanduiding: 'openbaar' | 'beperkt_openbaar' | 'intern' | 'zaakvertrouwelijk' | 'vertrouwelijk' | 'confidentieel' | 'geheim' | 'zeer_geheim';
      /**
             * Doel
             * @description Een omschrijving van hetgeen beoogd is te bereiken met een zaak van dit zaaktype.
             */
      doel: string;
      /**
             * Aanleiding
             * @description Een omschrijving van de gebeurtenis die leidt tot het starten van een ZAAK van dit ZAAKTYPE.
             */
      aanleiding: string;
      /**
             * Toelichting
             * @description Een eventuele toelichting op dit zaaktype, zoals een beschrijving van het procesverloop op de hoofdlijnen.
             */
      toelichting?: string;
      /**
             * Indicatie intern of extern
             * @description Een aanduiding waarmee onderscheid wordt gemaakt tussen ZAAKTYPEn die Intern respectievelijk Extern geïnitieerd worden. Indien van beide sprake kan zijn, dan prevaleert de externe initiatie.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `inkomend` - Inkomend
             *     * `intern` - Intern
             *     * `uitgaand` - Uitgaand
             * @enum {string}
             */
      indicatieInternOfExtern: 'intern' | 'extern';
      /**
             * Handeling initiator
             * @description Werkwoord dat hoort bij de handeling die de initiator verricht bij dit zaaktype. Meestal 'aanvragen', 'indienen' of 'melden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_initiator
             */
      handelingInitiator: string;
      /**
             * Onderwerp
             * @description Het onderwerp van ZAAKen van dit ZAAKTYPE. In veel gevallen nauw gerelateerd aan de product- of dienstnaam uit de Producten- en Dienstencatalogus (PDC). Bijvoorbeeld: 'Evenementenvergunning', 'Geboorte', 'Klacht'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.onderwerp
             */
      onderwerp: string;
      /**
             * Handeling behandelaar
             * @description Werkwoord dat hoort bij de handeling die de behandelaar verricht bij het afdoen van ZAAKen van dit ZAAKTYPE. Meestal 'behandelen', 'uitvoeren', 'vaststellen' of 'onderhouden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_behandelaar
             */
      handelingBehandelaar: string;
      /**
             * Doorlooptijd
             * Format: duration
             * @description De periode waarbinnen volgens wet- en regelgeving een ZAAK van het ZAAKTYPE afgerond dient te zijn, in kalenderdagen.
             */
      doorlooptijd: string;
      /**
             * Servicenorm
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
             * Verlenging mogelijk
             * @description Aanduiding die aangeeft of de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd.
             */
      verlengingMogelijk: boolean;
      /**
             * Verlengingstermijn
             * Format: duration
             * @description De termijn in dagen waarmee de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd. Mag alleen een waarde bevatten als verlenging mogelijk is.
             */
      verlengingstermijn?: string | null;
      /** @description Een trefwoord waarmee ZAAKen van het ZAAKTYPE kunnen worden gekarakteriseerd. */
      trefwoorden?: string[];
      /**
             * Publicatie indicatie
             * @description Aanduiding of (het starten van) een ZAAK dit ZAAKTYPE gepubliceerd moet worden.
             */
      publicatieIndicatie: boolean;
      /**
             * Publicatietekst
             * @description De generieke tekst van de publicatie van ZAAKen van dit ZAAKTYPE.
             */
      publicatietekst?: string;
      /** @description De relatie tussen ZAAKen van dit ZAAKTYPE en de beleidsmatige en/of financiële verantwoording. */
      verantwoordingsrelatie?: string[];
      /** @description Het product of de dienst die door ZAAKen van dit ZAAKTYPE wordt voortgebracht. */
      productenOfDiensten: string[];
      /**
             * Selectielijst procestype
             * Format: uri
             * @description URL-referentie naar een vanuit archiveringsoptiek onderkende groep processen met dezelfde kenmerken (PROCESTYPE in de Selectielijst API).
             */
      selectielijstProcestype?: string;
      referentieproces: components['schemas']['ReferentieProces'];
      /**
             * Maakt deel uit van
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort.
             */
      catalogus: string;
      /** @description URL-referenties naar de STATUSTYPEN die mogelijk zijn binnen dit ZAAKTYPE. */
      readonly statustypen?: string[];
      /** @description URL-referenties naar de RESULTAATTYPEN die mogelijk zijn binnen dit ZAAKTYPE. */
      readonly resultaattypen?: string[];
      /** @description URL-referenties naar de EIGENSCHAPPEN die aanwezig moeten zijn in ZAKEN van dit ZAAKTYPE. */
      readonly eigenschappen?: string[];
      /** @description URL-referenties naar de INFORMATIEOBJECTTYPEN die mogelijk zijn binnen dit ZAAKTYPE. */
      readonly informatieobjecttypen?: string[];
      /** @description URL-referenties naar de ROLTYPEN die mogelijk zijn binnen dit ZAAKTYPE. */
      readonly roltypen?: string[];
      /** @description URL-referenties naar de BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE. */
      besluittypen: string[];
      /** @description De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE. */
      gerelateerdeZaaktypen: components['schemas']['ZaakTypenRelatie'][];
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
             * Versiedatum
             * Format: date
             * @description De datum waarop de (gewijzigde) kenmerken van het ZAAKTYPE geldig zijn geworden
             */
      versiedatum: string;
      /**
             * Concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept?: boolean;
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
  requestBodies: {
    Resultaat: {
      content: {
        'application/json': components['schemas']['Resultaat'];
      };
    };
    ZaakInformatieObject: {
      content: {
        'application/json': components['schemas']['ZaakInformatieObject'];
      };
    };
    ZaakObject: {
      content: {
        'application/json': components['schemas']['ZaakObject'];
      };
    };
    Zaak: {
      content: {
        'application/json': components['schemas']['Zaak'];
      };
    };
    ZaakEigenschap: {
      content: {
        'application/json': components['schemas']['ZaakEigenschap'];
      };
    };
  };
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
          /** @description Geeft een endpoint-specifieke waarschuwing, zoals het uitfaseren van functionaliteit. */
          Warning?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': {
            count: number;
            /** Format: uri */
            next?: string | null;
            /** Format: uri */
            previous?: string | null;
            results: components['schemas']['KlantContact'][];
          };
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          /** @description Geeft een endpoint-specifieke waarschuwing, zoals het uitfaseren van functionaliteit. */
          Warning?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['KlantContact'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  klantcontact_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          /** @description Geeft een endpoint-specifieke waarschuwing, zoals het uitfaseren van functionaliteit. */
          Warning?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['KlantContact'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          'application/json': {
            count: number;
            /** Format: uri */
            next?: string | null;
            /** Format: uri */
            previous?: string | null;
            results: components['schemas']['Resultaat'][];
          };
          'application/hal+json': components['schemas']['ResultaatHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
    requestBody: components['requestBodies']['Resultaat'];
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
          'application/json': components['schemas']['Resultaat'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  resultaat_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['Resultaat'];
          'application/hal+json': components['schemas']['ResultaatHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Resultaat'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  resultaat_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Resultaat'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          'application/json': {
            count: number;
            /** Format: uri */
            next?: string | null;
            /** Format: uri */
            previous?: string | null;
            results: components['schemas']['Rol'][];
          };
          'application/hal+json': components['schemas']['RolHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Rol'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  rol_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['Rol'];
          'application/hal+json': components['schemas']['RolHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  rol_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
  status_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de ZAAK. */
        zaak?: string;
        /** @description URL-referentie naar het STATUSTYPE (in de Catalogi API). */
        statustype?: string;
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
            results: components['schemas']['Status'][];
          };
          'application/hal+json': components['schemas']['StatusHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Status'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  status_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['Status'];
          'application/hal+json': components['schemas']['StatusHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakContactMoment'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakcontactmoment_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['ZaakContactMoment'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakcontactmoment_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          'application/hal+json': components['schemas']['ZaakInformatieObjectHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
    requestBody: components['requestBodies']['ZaakInformatieObject'];
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
          'application/json': components['schemas']['ZaakInformatieObject'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakinformatieobject_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['ZaakInformatieObject'];
          'application/hal+json': components['schemas']['ZaakInformatieObjectHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakInformatieObject'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakinformatieobject_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakInformatieObject'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          'application/json': {
            count: number;
            /** Format: uri */
            next?: string | null;
            /** Format: uri */
            previous?: string | null;
            results: components['schemas']['ZaakObject'][];
          };
          'application/hal+json': components['schemas']['ZaakObjectHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
    requestBody: components['requestBodies']['ZaakObject'];
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
          'application/json': components['schemas']['ZaakObject'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakobject_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['ZaakObject'];
          'application/hal+json': components['schemas']['ZaakObjectHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakObject'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakobject_delete: {
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakObject'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakVerzoek'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakverzoek_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          'application/json': components['schemas']['ZaakVerzoek'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakverzoek_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        archiefnominatie__in?: string;
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum?: string;
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum__lt?: string;
        /** @description De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg. */
        archiefactiedatum__gt?: string;
        /** @description Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. */
        archiefstatus?: 'nog_te_archiveren' | 'gearchiveerd' | 'gearchiveerd_procestermijn_onbekend' | 'overgedragen';
        /** @description Multiple values may be separated by commas. */
        archiefstatus__in?: string;
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
        ordering?: 'startdatum' | '-startdatum' | 'einddatum' | '-einddatum' | 'publicatiedatum' | '-publicatiedatum' | 'archiefactiedatum' | '-archiefactiedatum';
        /** @description Haal details van inline resources direct op. */
        expand?: 'status' | 'resultaat' | 'eigenschappen' | 'rollen' | 'zaakobjecten' | 'zaakinformatieobjecten';
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
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
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
            results: components['schemas']['Zaak'][];
          };
          'application/hal+json': components['schemas']['ZaakHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak_create: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path?: never;
      cookie?: never;
    };
    requestBody: components['requestBodies']['Zaak'];
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
          'application/json': components['schemas']['Zaak'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak__zoek: {
    parameters: {
      query?: {
        /** @description Een pagina binnen de gepagineerde set resultaten. */
        page?: number;
        /** @description Haal details van inline resources direct op. */
        expand?: 'status' | 'resultaat' | 'eigenschappen' | 'rollen' | 'zaakobjecten' | 'zaakinformatieobjecten';
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
    requestBody: {
      content: {
        'application/json': components['schemas']['ZaakZoek'];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
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
            results: components['schemas']['Zaak'][];
          };
          'application/hal+json': components['schemas']['ZaakHalCollectie'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak_read: {
    parameters: {
      query?: {
        /** @description Haal details van inline resources direct op. */
        expand?: 'status' | 'resultaat' | 'eigenschappen' | 'rollen' | 'zaakobjecten' | 'zaakinformatieobjecten';
      };
      header: {
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description De ETag berekend op de response body JSON. Indien twee resources exact dezelfde ETag hebben, dan zijn deze resources identiek aan elkaar. Je kan de ETag gebruiken om caching te implementeren. */
          ETag?: string;
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
          'application/hal+json': components['schemas']['ZaakHal'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Zaak'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaak_headers: {
    parameters: {
      query?: never;
      header: {
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
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
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
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
  zaak_partial_update: {
    parameters: {
      query?: never;
      header: {
        /** @description Content type van de verzoekinhoud. */
        'Content-Type': 'application/json';
        /** @description Het gewenste 'Coordinate Reference System' (CRS) van de geometrie in het antwoord (response body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Accept-Crs': 'EPSG:4326';
        /** @description Het 'Coordinate Reference System' (CRS) van de geometrie in de vraag (request body). Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
        'Content-Crs': 'EPSG:4326';
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['Zaak'];
    responses: {
      /** @description OK */
      200: {
        headers: {
          /** @description Het 'Coordinate Reference System' (CRS) van de antwoorddata. Volgens de GeoJSON spec is WGS84 de default (EPSG:4326 is hetzelfde als WGS84). */
          'Content-Crs'?: 'EPSG:4326';
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['Zaak'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      412: components['responses']['412'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  audittrail_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke identificatie van de audit regel. */
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
          'application/json': components['schemas']['AuditTrail'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          /** @description URL waar de resource leeft. */
          Location?: string;
          [name: string]: unknown;
        };
        content: {
          'application/json': components['schemas']['ZaakBesluit'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakbesluit_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
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
          'application/json': components['schemas']['ZaakBesluit'];
        };
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakbesluit_delete: {
    parameters: {
      query?: never;
      header?: {
        /** @description Identifier of the request, traceable throughout the network */
        'X-NLX-Logrecord-ID'?: string;
        /** @description Toelichting waarom een bepaald verzoek wordt gedaan */
        'X-Audit-Toelichting'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
    requestBody: components['requestBodies']['ZaakEigenschap'];
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
          'application/json': components['schemas']['ZaakEigenschap'];
        };
      };
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakeigenschap_read: {
    parameters: {
      query?: never;
      header?: {
        /** @description Voer een voorwaardelijk verzoek uit. Deze header moet één of meerdere ETag-waardes bevatten van resources die de consumer gecached heeft. Indien de waarde van de ETag van de huidige resource voorkomt in deze set, dan antwoordt de provider met een lege HTTP 304 request. Zie [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/If-None-Match) voor meer informatie. */
        'If-None-Match'?: string;
      };
      path: {
        /** @description Unieke resource identifier (UUID4) */
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
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakEigenschap'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
  zaakeigenschap_delete: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        /** @description Unieke resource identifier (UUID4) */
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
          /** @description Geeft een specifieke API-versie aan in de context van een specifieke aanroep. Voorbeeld: 1.2.1. */
          'API-version'?: string;
          [name: string]: unknown;
        };
        content?: never;
      };
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
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
        /** @description Unieke resource identifier (UUID4) */
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
        /** @description Unieke resource identifier (UUID4) */
        uuid: string;
        /** @description Unieke resource identifier (UUID4) */
        zaak_uuid: string;
      };
      cookie?: never;
    };
    requestBody: components['requestBodies']['ZaakEigenschap'];
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
      400: components['responses']['400'];
      401: components['responses']['401'];
      403: components['responses']['403'];
      404: components['responses']['404'];
      406: components['responses']['406'];
      409: components['responses']['409'];
      410: components['responses']['410'];
      415: components['responses']['415'];
      429: components['responses']['429'];
      500: components['responses']['500'];
    };
  };
}
