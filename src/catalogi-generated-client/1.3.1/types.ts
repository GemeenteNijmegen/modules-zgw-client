export interface paths {
  '/besluittypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle BESLUITTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['besluittype_list'];
    put?: never;
    /**
         * Maak een BESLUITTYPE aan.
         * @description Maak een BESLUITTYPE aan.
         */
    post: operations['besluittype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/besluittypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke BESLUITTYPE opvragen.
         * @description Een specifieke BESLUITTYPE opvragen.
         */
    get: operations['besluittype_retrieve'];
    /**
         * Werk een BESLUITTYPE in zijn geheel bij.
         * @description Werk een BESLUITTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
         */
    put: operations['besluittype_update'];
    post?: never;
    /**
         * Verwijder een BESLUITTYPE.
         * @description Verwijder een BESLUITTYPE. Dit kan alleen als het een concept betreft.
         */
    delete: operations['besluittype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) BESLUITTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['besluittype_headers'];
    /**
         * Werk een BESLUITTYPE deels bij.
         * @description Werk een BESLUITTYPE deels bij. Dit kan alleen als het een concept betreft.
         */
    patch: operations['besluittype_partial_update'];
    trace?: never;
  };
  '/besluittypen/{uuid}/publish': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Publiceer het concept BESLUITTYPE.
         * @description Publiceren van het besluittype zorgt ervoor dat dit in een Besluiten API kan gebruikt worden. Na het publiceren van een besluittype zijn geen inhoudelijke wijzigingen meer mogelijk. Indien er na het publiceren nog wat gewijzigd moet worden, dan moet je een nieuwe versie aanmaken.
         */
    post: operations['besluittype_publish'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/catalogussen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle CATALOGUSsen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['catalogus_list'];
    put?: never;
    /**
         * Maak een CATALOGUS aan.
         * @description Maak een CATALOGUS aan.
         */
    post: operations['catalogus_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/catalogussen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke CATALOGUS opvragen.
         * @description Een specifieke CATALOGUS opvragen.
         */
    get: operations['catalogus_retrieve'];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    /**
         * De headers voor een specifiek(e) CATALOGUS opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['catalogus_headers'];
    patch?: never;
    trace?: never;
  };
  '/eigenschappen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle EIGENSCHAPpen opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['eigenschap_list'];
    put?: never;
    /**
         * Maak een EIGENSCHAP aan.
         * @description Maak een EIGENSCHAP aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    post: operations['eigenschap_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/eigenschappen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke EIGENSCHAP opvragen.
         * @description Een specifieke EIGENSCHAP opvragen.
         */
    get: operations['eigenschap_retrieve'];
    /**
         * Werk een EIGENSCHAP in zijn geheel bij.
         * @description Werk een EIGENSCHAP in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    put: operations['eigenschap_update'];
    post?: never;
    /**
         * Verwijder een EIGENSCHAP.
         * @description Verwijder een EIGENSCHAP. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    delete: operations['eigenschap_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) EIGENSCHAP opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['eigenschap_headers'];
    /**
         * Werk een EIGENSCHAP deels bij.
         * @description Werk een EIGENSCHAP deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    patch: operations['eigenschap_partial_update'];
    trace?: never;
  };
  '/informatieobjecttypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle INFORMATIEOBJECTTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['informatieobjecttype_list'];
    put?: never;
    /**
         * Maak een INFORMATIEOBJECTTYPE aan.
         * @description Maak een INFORMATIEOBJECTTYPE aan.
         */
    post: operations['informatieobjecttype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/informatieobjecttypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke INFORMATIEOBJECTTYPE opvragen.
         * @description Een specifieke INFORMATIEOBJECTTYPE opvragen.
         */
    get: operations['informatieobjecttype_retrieve'];
    /**
         * Werk een INFORMATIEOBJECTTYPE in zijn geheel bij.
         * @description Werk een INFORMATIEOBJECTTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
         */
    put: operations['informatieobjecttype_update'];
    post?: never;
    /**
         * Verwijder een INFORMATIEOBJECTTYPE.
         * @description Verwijder een INFORMATIEOBJECTTYPE. Dit kan alleen als het een concept betreft.
         */
    delete: operations['informatieobjecttype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) INFORMATIEOBJECTTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['informatieobjecttype_headers'];
    /**
         *      Werk een INFORMATIEOBJECTTYPE deels bij.
         * @description Werk een INFORMATIEOBJECTTYPE deels bij. Dit kan alleen als het een concept betreft.
         */
    patch: operations['informatieobjecttype_partial_update'];
    trace?: never;
  };
  '/informatieobjecttypen/{uuid}/publish': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Publiceer het concept INFORMATIEOBJECTTYPE.
         * @description Publiceren van het informatieobjecttype zorgt ervoor dat dit in een Documenten API kan gebruikt worden. Na het publiceren van een informatieobjecttype zijn geen inhoudelijke wijzigingen meer mogelijk. Indien er na het publiceren nog wat gewijzigd moet worden, dan moet je een nieuwe versie aanmaken.
         */
    post: operations['informatieobjecttype_publish'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/resultaattypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle RESULTAATTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['resultaattype_list'];
    put?: never;
    /**
         * Maak een RESULTAATTYPE aan.
         * @description Maak een RESULTAATTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    post: operations['resultaattype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/resultaattypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke RESULTAATTYPE opvragen.
         * @description Een specifieke RESULTAATTYPE opvragen.
         */
    get: operations['resultaattype_retrieve'];
    /**
         * Werk een RESULTAATTYPE in zijn geheel bij.
         * @description Werk een RESULTAATTYPE in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    put: operations['resultaattype_update'];
    post?: never;
    /**
         * Verwijder een RESULTAATTYPE.
         * @description Verwijder een RESULTAATTYPE. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    delete: operations['resultaattype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) RESULTAATTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['resultaattype_headers'];
    /**
         * Werk een RESULTAATTYPE deels bij.
         * @description Werk een RESULTAATTYPE deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    patch: operations['resultaattype_partial_update'];
    trace?: never;
  };
  '/roltypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ROLTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['roltype_list'];
    put?: never;
    /**
         * Maak een ROLTYPE aan.
         * @description Maak een ROLTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    post: operations['roltype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/roltypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ROLTYPE opvragen.
         * @description Een specifieke ROLTYPE opvragen.
         */
    get: operations['roltype_retrieve'];
    /**
         * Werk een ROLTYPE in zijn geheel bij.
         * @description Werk een ROLTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
         */
    put: operations['roltype_update'];
    post?: never;
    /**
         * Verwijder een ROLTYPE.
         * @description Verwijder een ROLTYPE. Dit kan alleen als het een concept betreft.
         */
    delete: operations['roltype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ROLTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['roltype_headers'];
    /**
         * Werk een ROLTYPE deels bij.
         * @description Werk een ROLTYPE deels bij. Dit kan alleen als het een concept betreft.
         */
    patch: operations['roltype_partial_update'];
    trace?: never;
  };
  '/statustypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle STATUSTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['statustype_list'];
    put?: never;
    /**
         * Maak een STATUSTYPE aan.
         * @description Maak een STATUSTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    post: operations['statustype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/statustypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke STATUSTYPE opvragen.
         * @description Een specifieke STATUSTYPE opvragen.
         */
    get: operations['statustype_retrieve'];
    /**
         * Werk een STATUSTYPE in zijn geheel bij.
         * @description Werk een STATUSTYPE in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    put: operations['statustype_update'];
    post?: never;
    /**
         * Verwijder een STATUSTYPE.
         * @description Verwijder een STATUSTYPE. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    delete: operations['statustype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) STATUSTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['statustype_headers'];
    /**
         * Werk een STATUSTYPE deels bij.
         * @description Werk een STATUSTYPE deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
         */
    patch: operations['statustype_partial_update'];
    trace?: never;
  };
  '/zaakobjecttypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKOBJECTTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaakobjecttype_list'];
    put?: never;
    /**
         * Maak een ZAAKOBJECTTYPE aan.
         * @description Maak een ZAAKOBJECTTYPE aan.
         */
    post: operations['zaakobjecttype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaakobjecttypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKOBJECTTYPE opvragen.
         * @description Een specifieke ZAAKOBJECTTYPE opvragen.
         */
    get: operations['zaakobjecttype_retrieve'];
    /**
         * Werk een ZAAKOBJECTTYPE in zijn geheel bij.
         * @description Werk een ZAAKOBJECTTYPE in zijn geheel bij.
         */
    put: operations['zaakobjecttype_update'];
    post?: never;
    /**
         * Verwijder een ZAAKOBJECTTYPE.
         * @description Verwijder een ZAAKOBJECTTYPE.
         */
    delete: operations['zaakobjecttype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKOBJECTTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakobjecttype_headers'];
    /**
         * Werk een ZAAKOBJECTTYPE deels bij.
         * @description Werk een ZAAKOBJECTTYPE deels bij.
         */
    patch: operations['zaakobjecttype_partial_update'];
    trace?: never;
  };
  '/zaaktype-informatieobjecttypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKTYPE-INFORMATIEOBJECTTYPE relaties opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaakinformatieobjecttype_list'];
    put?: never;
    /**
         * Maak een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie aan.
         * @description Maak een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op:
         *     - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
         */
    post: operations['zaakinformatieobjecttype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaaktype-informatieobjecttypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKTYPE-INFORMATIEOBJECTTYPE relatie opvragen.
         * @description Een specifieke ZAAKTYPE-INFORMATIEOBJECTTYPE relatie opvragen.
         */
    get: operations['zaakinformatieobjecttype_retrieve'];
    /**
         * Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie in zijn geheel bij.
         * @description Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op:
         *      - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
         */
    put: operations['zaakinformatieobjecttype_update'];
    post?: never;
    /**
         * Verwijder een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie.
         * @description Verwijder een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie. Dit kan alleen als  het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op:
         *       - `zaaktype` of `informatieobjecttype` is nog niet gepubliceerd
         */
    delete: operations['zaakinformatieobjecttype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAK-INFORMATIEOBJECT-TYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaakinformatieobjecttype_headers'];
    /**
         * Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie deels bij.
         * @description Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie deels bij. Dit kan alleen  als het bijbehorende ZAAKTYPE een concept betreft.  Er wordt gevalideerd op:
         *       - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
         */
    patch: operations['zaakinformatieobjecttype_partial_update'];
    trace?: never;
  };
  '/zaaktypen': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Alle ZAAKTYPEn opvragen.
         * @description Deze lijst kan gefilterd wordt met query-string parameters.
         */
    get: operations['zaaktype_list'];
    put?: never;
    /**
         * Maak een ZAAKTYPE aan.
         * @description Er wordt gevalideerd op:
         *     - geldigheid `catalogus` URL, dit moet een catalogus binnen dezelfde API zijn
         *      - Uniciteit `catalogus` en `zaaktypeidentificatie`. Dezelfde zaaktypeidentificatie mag enkel  opnieuw gebruikt worden als het zaaktype een andere geldigheidsperiode  kent dan bestaande zaaktypen.
         *      - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
         */
    post: operations['zaaktype_create'];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  '/zaaktypen/{uuid}': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Een specifieke ZAAKTYPE opvragen.
         * @description Een specifieke ZAAKTYPE opvragen.
         */
    get: operations['zaaktype_retrieve'];
    /**
         * Werk een ZAAKTYPE in zijn geheel bij.
         * @description Werk een ZAAKTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft. Er wordt gevalideerd op:
         *       - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
         */
    put: operations['zaaktype_update'];
    post?: never;
    /**
         * Verwijder een ZAAKTYPE.
         * @description Verwijder een ZAAKTYPE. Dit kan alleen als het een concept betreft.
         */
    delete: operations['zaaktype_destroy'];
    options?: never;
    /**
         * De headers voor een specifiek(e) ZAAKTYPE opvragen
         * @description Vraag de headers op die je bij een GET request zou krijgen.
         */
    head: operations['zaaktype_headers'];
    /**
         * Werk een ZAAKTYPE deels bij.
         * @description Werk een ZAAKTYPE deels bij. Dit kan alleen als het een concept betreft. Er wordt gevalideerd op:
         *      - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
         */
    patch: operations['zaaktype_partial_update'];
    trace?: never;
  };
  '/zaaktypen/{uuid}/publish': {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    /**
         * Publiceer het concept ZAAKTYPE.
         * @description Publiceren van het zaaktype zorgt ervoor dat dit in een Zaken API kan gebruiktworden. Na het publiceren van een zaaktype zijn geen inhoudelijke wijzigingenmeer mogelijk - ook niet de statustypen, eigenschappen... etc. Indien er na hetpubliceren nog wat gewijzigd moet worden, dan moet je een nieuwe versieaanmaken.
         */
    post: operations['zaaktype_publish'];
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
    AardRelatieEnum: 'vervolg' | 'bijdrage' | 'onderwerp';
    /** @enum {string} */
    AfleidingswijzeEnum: 'afgehandeld' | 'ander_datumkenmerk' | 'eigenschap' | 'gerelateerde_zaak' | 'hoofdzaak' | 'ingangsdatum_besluit' | 'termijn' | 'vervaldatum_besluit' | 'zaakobject';
    /** @enum {string} */
    ArchiefnominatieEnum: 'blijvend_bewaren' | 'vernietigen';
    BesluitType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
             */
      catalogus: string;
      /**
             * zaaktypen
             * @description ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE
             */
      readonly zaaktypen: string[];
      /**
             * omschrijving
             * @description Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
             */
      omschrijving?: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van BESLUITen van het BESLUITTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * besluitcategorie
             * @description Typering van de aard van BESLUITen van het BESLUITTYPE.
             */
      besluitcategorie?: string;
      /**
             * reactietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, waarbinnen verweer tegen een besluit van het besluittype mogelijk is.
             */
      reactietermijn?: string | null;
      /**
             * publicatie indicatie
             * @description Aanduiding of BESLUITen van dit BESLUITTYPE gepubliceerd moeten worden.
             */
      publicatieIndicatie: boolean;
      /**
             * publicatietekst
             * @description De generieke tekst van de publicatie van BESLUITen van dit BESLUITTYPE
             */
      publicatietekst?: string;
      /**
             * publicatietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, dat BESLUITen van dit BESLUITTYPE gepubliceerd moeten blijven.
             */
      publicatietermijn?: string | null;
      /**
             * toelichting
             * @description Een eventuele toelichting op dit BESLUITTYPE.
             */
      toelichting?: string;
      /**
             * informatieobjecttypen
             * @description URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
             */
      informatieobjecttypen: string[];
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
             * concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept: boolean;
      /**
             * Is resultaat van
             * @description Het BESLUITTYPE van besluiten die gepaard gaan met resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypen: string[];
      /**
             * is resultaat van
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypenOmschrijving: string[];
      /**
             * informatieobjecttypen
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      readonly vastgelegdIn: string[];
    };
    BesluitTypeCreate: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
             */
      catalogus: string;
      /**
             * zaaktypen
             * @description ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE
             */
      readonly zaaktypen: string[];
      /**
             * omschrijving
             * @description Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
             */
      omschrijving?: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van BESLUITen van het BESLUITTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * besluitcategorie
             * @description Typering van de aard van BESLUITen van het BESLUITTYPE.
             */
      besluitcategorie?: string;
      /**
             * reactietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, waarbinnen verweer tegen een besluit van het besluittype mogelijk is.
             */
      reactietermijn?: string | null;
      /**
             * publicatie indicatie
             * @description Aanduiding of BESLUITen van dit BESLUITTYPE gepubliceerd moeten worden.
             */
      publicatieIndicatie: boolean;
      /**
             * publicatietekst
             * @description De generieke tekst van de publicatie van BESLUITen van dit BESLUITTYPE
             */
      publicatietekst?: string;
      /**
             * publicatietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, dat BESLUITen van dit BESLUITTYPE gepubliceerd moeten blijven.
             */
      publicatietermijn?: string | null;
      /**
             * toelichting
             * @description Een eventuele toelichting op dit BESLUITTYPE.
             */
      toelichting?: string;
      /**
             * informatieobjecttypen
             * @description `Omschrijvingen` van het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
             */
      informatieobjecttypen: string[];
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
             * concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept: boolean;
      /**
             * Is resultaat van
             * @description Het BESLUITTYPE van besluiten die gepaard gaan met resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypen: string[];
      /**
             * is resultaat van
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypenOmschrijving: string[];
      /**
             * informatieobjecttypen
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      readonly vastgelegdIn: string[];
    };
    BesluitTypeUpdate: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
             */
      catalogus: string;
      /**
             * zaaktypen
             * @description ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE
             */
      readonly zaaktypen: string[];
      /**
             * omschrijving
             * @description Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
             */
      omschrijving?: string;
      /**
             * omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van de aard van BESLUITen van het BESLUITTYPE
             */
      omschrijvingGeneriek?: string;
      /**
             * besluitcategorie
             * @description Typering van de aard van BESLUITen van het BESLUITTYPE.
             */
      besluitcategorie?: string;
      /**
             * reactietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, waarbinnen verweer tegen een besluit van het besluittype mogelijk is.
             */
      reactietermijn?: string | null;
      /**
             * publicatie indicatie
             * @description Aanduiding of BESLUITen van dit BESLUITTYPE gepubliceerd moeten worden.
             */
      publicatieIndicatie: boolean;
      /**
             * publicatietekst
             * @description De generieke tekst van de publicatie van BESLUITen van dit BESLUITTYPE
             */
      publicatietekst?: string;
      /**
             * publicatietermijn
             * Format: duration
             * @description Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, dat BESLUITen van dit BESLUITTYPE gepubliceerd moeten blijven.
             */
      publicatietermijn?: string | null;
      /**
             * toelichting
             * @description Een eventuele toelichting op dit BESLUITTYPE.
             */
      toelichting?: string;
      /**
             * informatieobjecttypen
             * @description `Omschrijvingen` van het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
             */
      informatieobjecttypen: string[];
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
             * concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept: boolean;
      /**
             * Is resultaat van
             * @description Het BESLUITTYPE van besluiten die gepaard gaan met resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypen: string[];
      /**
             * is resultaat van
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      readonly resultaattypenOmschrijving: string[];
      /**
             * informatieobjecttypen
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      readonly vastgelegdIn: string[];
    };
    /** @enum {unknown} */
    BlankEnum: '';
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
    Catalogus: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * domein
             * @description Een afkorting waarmee wordt aangegeven voor welk domein in een CATALOGUS ZAAKTYPEn zijn uitgewerkt.
             */
      domein: string;
      /**
             * rsin
             * @description Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON die de eigenaar is van een CATALOGUS.
             */
      rsin: string;
      /**
             * Naam contactpersoon
             * @description De naam van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
             */
      contactpersoonBeheerNaam: string;
      /**
             * Telefoonnummer
             * @description Het telefoonnummer van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
             */
      contactpersoonBeheerTelefoonnummer?: string;
      /**
             * Emailadres
             * Format: email
             * @description Het emailadres van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
             */
      contactpersoonBeheerEmailadres?: string;
      /**
             * Catalogus
             * @description URL-referenties naar ZAAKTYPEn die in deze CATALOGUS worden ontsloten.
             */
      readonly zaaktypen: string[];
      /**
             * catalogus
             * @description URL-referenties naar BESLUITTYPEn die in deze CATALOGUS worden ontsloten.
             */
      readonly besluittypen: string[];
      /**
             * Catalogus
             * @description URL-referenties naar INFORMATIEOBJECTTYPEn die in deze CATALOGUS worden ontsloten.
             */
      readonly informatieobjecttypen: string[];
      /**
             * naam
             * @description De benaming die is gegeven aan de zaaktypecatalogus.
             */
      naam?: string | null;
      /**
             * versie
             * @description Versie-aanduiding van de van toepassing zijnde zaaktypecatalogus.
             */
      versie?: string | null;
      /**
             * begindatum versie
             * Format: date
             * @description Datum waarop de versie van de zaaktypecatalogus van toepassing is geworden.
             */
      begindatumVersie?: string | null;
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
    Eigenschap: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * eigenschapnaam
             * @description De naam van de EIGENSCHAP
             */
      naam: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus: string;
      /**
             * definitie
             * @description De beschrijving van de betekenis van deze EIGENSCHAP
             */
      definitie: string;
      /** specificatie van eigenschap */
      specificatie: components['schemas']['EigenschapSpecificatie'];
      /**
             * toelichting
             * @description Een toelichting op deze EIGENSCHAP en het belang hiervan voor zaken van dit ZAAKTYPE.
             */
      toelichting?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is.
             */
      zaaktype: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * Status type
             * Format: uri
             * @description Status type moet (onder andere) deze EIGENSCHAP hebben, voordat een STATUS van het STATUSTYPE kan worden gezet.
             */
      statustype?: string | null;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop de EIGENSCHAP is ontstaan.
             */
      beginGeldigheid?: string | null;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop de EIGENSCHAP is opgeheven.
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
    EigenschapSpecificatie: {
      /**
             * groep
             * @description Benaming van het object of groepattribuut waarvan de EIGENSCHAP een inhoudelijk gegeven specificeert.
             */
      groep?: string;
      /**
             * formaat
             * @description Het soort tekens waarmee waarden van de EIGENSCHAP kunnen worden vastgelegd.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `tekst` - Tekst
             *     * `getal` - Getal
             *     * `datum` - Datum
             *     * `datum_tijd` - Datum/tijd
             */
      formaat: components['schemas']['FormaatEnum'];
      /**
             * lengte
             * @description Het aantal karakters (lengte) waarmee waarden van de EIGENSCHAP worden vastgelegd.
             */
      lengte: string;
      /**
             * kardinaliteit
             * @description Het aantal mogelijke voorkomens van waarden van deze EIGENSCHAP bij een zaak van het ZAAKTYPE.
             */
      kardinaliteit: string;
      /**
             * waardenverzameling
             * @description Waarden die deze EIGENSCHAP kan hebben.
             */
      waardenverzameling?: string[];
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
    /** @enum {string} */
    FormaatEnum: 'tekst' | 'getal' | 'datum' | 'datum_tijd';
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
    /** @enum {string} */
    IndicatieInternOfExternEnum: 'intern' | 'extern';
    /** @description Serializer based on ``IOT-basis`` specified in XSD ``ztc0310_ent_basis.xsd``. */
    InformatieObjectType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * Catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort.
             */
      catalogus: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      omschrijving: string;
      /**
             * vertrouwelijkheidaanduiding
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
             */
      vertrouwelijkheidaanduiding: components['schemas']['VertrouwelijkheidaanduidingEnum'];
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
             * concept
             * @description Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
             */
      readonly concept: boolean;
      /** zaaktypen */
      readonly zaaktypen: string;
      /**
             * informatieobjecttypen
             * @description URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
             */
      readonly besluittypen: string[];
      /**
             * Categorie
             * @description Typering van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      informatieobjectcategorie: string;
      /**
             * trefwoord
             * @description Trefwoord(en) waarmee informatieobjecten van het INFORMATIEOBJECTTYPE kunnen worden gekarakteriseerd. (Gebruik een komma om waarden van elkaar te onderscheiden.)
             */
      trefwoord?: string[];
      /** omschrijving generiek */
      omschrijvingGeneriek?: components['schemas']['InformatieObjectTypeOmschrijvingGeneriek'];
    };
    InformatieObjectTypeOmschrijvingGeneriek: {
      /**
             * informatieobjecttype omschrijving generiek
             * @description Algemeen gehanteerde omschrijving van het type informatieobject.
             */
      informatieobjecttypeOmschrijvingGeneriek: string;
      /**
             * Definitie
             * @description Nauwkeurige beschrijving van het generieke type informatieobject
             */
      definitieInformatieobjecttypeOmschrijvingGeneriek: string;
      /**
             * Herkomst
             * @description De naam van de waardenverzameling, of van de beherende organisatie daarvan, waaruit de waarde is overgenomen.
             */
      herkomstInformatieobjecttypeOmschrijvingGeneriek: string;
      /**
             * Hierarchie
             * @description De plaats in de rangorde van het informatieobjecttype.
             */
      hierarchieInformatieobjecttypeOmschrijvingGeneriek: string;
      /**
             * Opmerking
             * @description Zinvolle toelichting bij het informatieobjecttype
             */
      opmerkingInformatieobjecttypeOmschrijvingGeneriek?: string | null;
    };
    /** @enum {string} */
    ObjecttypeEnum: 'adres' | 'besluit' | 'buurt' | 'enkelvoudig_document' | 'gemeente' | 'gemeentelijke_openbare_ruimte' | 'huishouden' | 'inrichtingselement' | 'kadastrale_onroerende_zaak' | 'kunstwerkdeel' | 'maatschappelijke_activiteit' | 'medewerker' | 'natuurlijk_persoon' | 'niet_natuurlijk_persoon' | 'openbare_ruimte' | 'organisatorische_eenheid' | 'pand' | 'spoorbaandeel' | 'status' | 'terreindeel' | 'terrein_gebouwd_object' | 'vestiging' | 'waterdeel' | 'wegdeel' | 'wijk' | 'woonplaats' | 'woz_deelobject' | 'woz_object' | 'woz_waarde' | 'zakelijk_recht' | 'overige';
    /** @enum {string} */
    OmschrijvingGeneriekEnum: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
    PaginatedBesluitTypeList: {
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
      results?: components['schemas']['BesluitType'][];
    };
    PaginatedCatalogusList: {
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
      results?: components['schemas']['Catalogus'][];
    };
    PaginatedEigenschapList: {
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
      results?: components['schemas']['Eigenschap'][];
    };
    PaginatedResultaatTypeList: {
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
      results?: components['schemas']['ResultaatType'][];
    };
    PaginatedInformatieObjectTypeList: {
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
      results?: components['schemas']['InformatieObjectType'][];
    };
    PaginatedRolTypeList: {
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
      results?: components['schemas']['RolType'][];
    };
    PaginatedStatusTypeList: {
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
      results?: components['schemas']['StatusType'][];
    };
    PaginatedZaakObjectTypeList: {
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
      results?: components['schemas']['ZaakObjectType'][];
    };
    PaginatedZaakTypeInformatieObjectTypeList: {
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
      results?: components['schemas']['ZaakTypeInformatieObjectType'][];
    };
    PaginatedZaakTypeList: {
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
      results?: components['schemas']['ZaakType'][];
    };
    PatchedEigenschap: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * eigenschapnaam
             * @description De naam van de EIGENSCHAP
             */
      naam?: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus?: string;
      /**
             * definitie
             * @description De beschrijving van de betekenis van deze EIGENSCHAP
             */
      definitie?: string;
      /** specificatie van eigenschap */
      specificatie?: components['schemas']['EigenschapSpecificatie'];
      /**
             * toelichting
             * @description Een toelichting op deze EIGENSCHAP en het belang hiervan voor zaken van dit ZAAKTYPE.
             */
      toelichting?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is.
             */
      zaaktype?: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * Status type
             * Format: uri
             * @description Status type moet (onder andere) deze EIGENSCHAP hebben, voordat een STATUS van het STATUSTYPE kan worden gezet.
             */
      statustype?: string | null;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop de EIGENSCHAP is ontstaan.
             */
      beginGeldigheid?: string | null;
      /**
             * datum einde geldigheid
             * Format: date
             * @description De datum waarop de EIGENSCHAP is opgeheven.
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
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    PatchedResultaatType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * is van
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin resultaten van dit RESULTAATTYPE bereikt kunnen worden.
             */
      zaaktype?: string;
      /**
             * is relevant voor
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van resultaten van het RESULTAATTYPE.
             */
      omschrijving?: string;
      /**
             * resultaattypeomschrijving
             * Format: uri
             * @description Algemeen gehanteerde omschrijving van de aard van resultaten van het RESULTAATTYPE. Dit moet een URL-referentie zijn naar de referenlijst van generieke resultaattypeomschrijvingen. Im ImZTC heet dit 'omschrijving generiek'
             */
      resultaattypeomschrijving?: string;
      /**
             * omschrijving generiek
             * @description Waarde van de omschrijving-generiek referentie (attribuut `omschrijving`)
             */
      readonly omschrijvingGeneriek?: string;
      /**
             * selectielijstklasse
             * Format: uri
             * @description URL-referentie naar de, voor het archiefregime bij het RESULTAATTYPE relevante, categorie in de Selectielijst Archiefbescheiden (RESULTAAT in de Selectielijst API) van de voor het ZAAKTYPE verantwoordelijke overheidsorganisatie.
             */
      selectielijstklasse?: string;
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
      readonly besluittypeOmschrijving?: string[];
      /**
             * informatieobjecttypen
             * @description De INFORMATIEOBJECTTYPEn die verplicht aanwezig moeten zijn in het zaakdossier van ZAAKen van dit ZAAKTYPE voordat een resultaat van dit RESULTAATTYPE kan worden gezet.
             */
      informatieobjecttypen?: (string | null)[];
      /**
             * informatieobjecttypen
             * @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
             */
      readonly informatieobjecttypeOmschrijving?: string[];
    };
    /** @description Adds nested create feature */
    PatchedRolType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
             */
      zaaktype?: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * omschrijving
             * @description Omschrijving van de aard van de ROL.
             */
      omschrijving?: string;
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
      omschrijvingGeneriek?: components['schemas']['OmschrijvingGeneriekEnum'];
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
    PatchedStatusType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * omschrijving
             * @description Een korte, voor de initiator van de zaak relevante, omschrijving van de aard van de STATUS van zaken van een ZAAKTYPE.
             */
      omschrijving?: string;
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
      zaaktype?: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus?: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * statustypevolgnummer
             * @description Een volgnummer voor statussen van het STATUSTYPE binnen een zaak.
             */
      volgnummer?: number;
      /**
             * isEindstatus
             * @description Geeft aan dat dit STATUSTYPE een eindstatus betreft. Dit gegeven is afgeleid uit alle STATUSTYPEn van dit ZAAKTYPE met het hoogste volgnummer.
             */
      readonly isEindstatus?: boolean;
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
    PatchedZaakObjectType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * Ander objecttype
             * @description Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft.
             */
      anderObjecttype?: boolean;
      /**
             * datum begin geldigheid
             * Format: date
             * @description De datum waarop het is ontstaan.
             */
      beginGeldigheid?: string;
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
      objecttype?: string;
      /**
             * Relatie omschrijving
             * @description Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE.
             */
      relatieOmschrijving?: string;
      /**
             * Zaaktype
             * Format: uri
             * @description URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort.
             */
      zaaktype?: string;
      /**
             * Zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * Zaakobjecttypen
             * @description URL-referenties naar de RESULTAATTYPEN.
             */
      readonly resultaattypen?: string[];
      /**
             * Zaakobjecttypen
             * @description URL-referenties naar de STATUSTYPEN.
             */
      readonly statustypen?: string[];
      /**
             * Catalogus
             * Format: uri
             * @description URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort.
             */
      catalogus?: string;
    };
    /** @description Represent a ZaakTypeInformatieObjectType.
         *
         *     Relatie met informatieobjecttype dat relevant is voor zaaktype. */
    PatchedZaakTypeInformatieObjectType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url?: string;
      /**
             * zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE.
             */
      zaaktype?: string;
      /**
             * zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie?: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus?: string;
      /** informatieobjecttype */
      informatieobjecttype?: string;
      /**
             * volgnummer
             * @description Uniek volgnummer van het ZAAK-INFORMATIEOBJECTTYPE binnen het ZAAKTYPE.
             */
      volgnummer?: number;
      /**
             * richting
             * @description Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `inkomend` - Inkomend
             *     * `intern` - Intern
             *     * `uitgaand` - Uitgaand
             */
      richting?: components['schemas']['RichtingEnum'];
      /**
             * Status type
             * Format: uri
             * @description URL-referentie naar het STATUSTYPE waarbij deze INFORMATIEOBJECTTYPEn verplicht aanwezig moeten zijn.
             */
      statustype?: string | null;
    };
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
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ResultaatTypeCreate: {
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
      /** besluittypen */
      besluittypen: string[];
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
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ResultaatTypeUpdate: {
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
      /** besluittypen */
      besluittypen: string[];
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
    RichtingEnum: 'inkomend' | 'intern' | 'uitgaand';
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
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ZaakTypeCreate: {
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
             * zaaktypen
             * @description `Omschrijvingen` van BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      besluittypen: string[];
      /**
             * deelzaaktypen
             * @description De `zaaktypen.identificaties` waaronder ZAAKen als deelzaak kunnen voorkomen bij ZAAKen van dit ZAAKTYPE.
             */
      deelzaaktypen: string[];
      /**
             * zaaktype van
             * @description De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE.
             */
      gerelateerdeZaaktypen: components['schemas']['ZaakTypenRelatieCreate'][];
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
    /** @description Represent a ZaakTypeInformatieObjectType.
         *
         *     Relatie met informatieobjecttype dat relevant is voor zaaktype. */
    ZaakTypeInformatieObjectType: {
      /**
             * url
             * Format: uri
             * @description URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
             */
      readonly url: string;
      /**
             * zaaktype
             * Format: uri
             * @description URL-referentie naar het ZAAKTYPE.
             */
      zaaktype: string;
      /**
             * zaaktype
             * @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
             */
      readonly zaaktypeIdentificatie: string;
      /**
             * catalogus
             * Format: uri
             */
      readonly catalogus: string;
      /** informatieobjecttype */
      informatieobjecttype: string;
      /**
             * volgnummer
             * @description Uniek volgnummer van het ZAAK-INFORMATIEOBJECTTYPE binnen het ZAAKTYPE.
             */
      volgnummer: number;
      /**
             * richting
             * @description Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE.
             *
             *     Uitleg bij mogelijke waarden:
             *
             *     * `inkomend` - Inkomend
             *     * `intern` - Intern
             *     * `uitgaand` - Uitgaand
             */
      richting: components['schemas']['RichtingEnum'];
      /**
             * Status type
             * Format: uri
             * @description URL-referentie naar het STATUSTYPE waarbij deze INFORMATIEOBJECTTYPEn verplicht aanwezig moeten zijn.
             */
      statustype?: string | null;
    };
    /** @description Set gegevensgroepdata from validated nested data.
         *
         *     Usage: include the mixin on the ModelSerializer that has gegevensgroepen. */
    ZaakTypeUpdate: {
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
             * zaaktypen
             * @description `Omschrijvingen` van BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
             */
      besluittypen: string[];
      /**
             * deelzaaktypen
             * @description De `zaaktypen.identificaties` waaronder ZAAKen als deelzaak kunnen voorkomen bij ZAAKen van dit ZAAKTYPE.
             */
      deelzaaktypen: string[];
      /**
             * zaaktype van
             * @description De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE.
             */
      gerelateerdeZaaktypen: components['schemas']['ZaakTypenRelatieCreate'][];
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
      aardRelatie: components['schemas']['AardRelatieEnum'];
      /**
             * toelichting
             * @description Een toelichting op de aard van de relatie tussen beide ZAAKTYPEN.
             */
      toelichting?: string;
    };
    ZaakTypenRelatieCreate: {
      /**
             * zaaktype van
             * @description `zaaktype.identificatie` naar het ZAAKTYPE.
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
      aardRelatie: components['schemas']['AardRelatieEnum'];
      /**
             * toelichting
             * @description Een toelichting op de aard van de relatie tussen beide ZAAKTYPEN.
             */
      toelichting?: string;
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
  besluittype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort. */
        catalogus?: string;
        /** @description ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE */
        zaaktypen?: string;
        /** @description Het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd. */
        informatieobjecttypen?: string;
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description Omschrijving van de aard van BESLUITen van het BESLUITTYPE. */
        omschrijving?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['PaginatedBesluitTypeList'];
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
  besluittype_create: {
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
        'application/json': components['schemas']['BesluitTypeCreate'];
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
          'application/json': components['schemas']['BesluitType'];
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
  besluittype_retrieve: {
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
          'application/json': components['schemas']['BesluitType'];
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
  besluittype_update: {
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
        'application/json': components['schemas']['BesluitTypeUpdate'];
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
          'application/json': components['schemas']['BesluitType'];
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
  besluittype_destroy: {
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
          'application/json': {
            [key: string]: unknown;
          };
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
  besluittype_headers: {
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
  besluittype_partial_update: {
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
        'application/json': {
          [key: string]: unknown;
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
          'application/json': {
            [key: string]: unknown;
          };
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
  besluittype_publish: {
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
          'application/json': components['schemas']['BesluitType'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
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
      /** @description Conflict */
      409: {
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
  catalogus_list: {
    parameters: {
      query?: {
        /** @description domein */
        domein?: string;
        /** @description domein__in */
        domein__in?: string;
        /** @description rsin */
        rsin?: string;
        /** @description rsin__in */
        rsin__in?: string;
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
          'application/json': components['schemas']['PaginatedCatalogusList'];
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
  catalogus_create: {
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
        'application/json': components['schemas']['Catalogus'];
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
          'application/json': components['schemas']['Catalogus'];
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
  catalogus_retrieve: {
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
          'application/json': components['schemas']['Catalogus'];
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
  catalogus_headers: {
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
  eigenschap_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is. */
        zaaktype?: string;
        /** @description zaaktype_identificatie */
        zaaktypeIdentificatie?: string;
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['PaginatedEigenschapList'];
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
  eigenschap_create: {
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
        'application/json': components['schemas']['Eigenschap'];
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
          'application/json': components['schemas']['Eigenschap'];
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
  eigenschap_retrieve: {
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
          'application/json': components['schemas']['Eigenschap'];
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
  eigenschap_update: {
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
        'application/json': components['schemas']['Eigenschap'];
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
          'application/json': components['schemas']['Eigenschap'];
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
  eigenschap_destroy: {
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
  eigenschap_headers: {
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
  eigenschap_partial_update: {
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
        'application/json': components['schemas']['PatchedEigenschap'];
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
          'application/json': components['schemas']['Eigenschap'];
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
  informatieobjecttype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort. */
        catalogus?: string;
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
        /** @description Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE. */
        omschrijving?: string;
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
          'application/json': components['schemas']['PaginatedInformatieObjectTypeList'];
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
  informatieobjecttype_create: {
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
        'application/json': components['schemas']['InformatieObjectType'];
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
          'application/json': components['schemas']['InformatieObjectType'];
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
  informatieobjecttype_retrieve: {
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
          'application/json': components['schemas']['InformatieObjectType'];
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
  informatieobjecttype_update: {
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
        'application/json': {
          [key: string]: unknown;
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
          'application/json': {
            [key: string]: unknown;
          };
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
  informatieobjecttype_destroy: {
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
          'application/json': {
            [key: string]: unknown;
          };
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
  informatieobjecttype_headers: {
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
  informatieobjecttype_partial_update: {
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
        'application/json': {
          [key: string]: unknown;
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
          'application/json': {
            [key: string]: unknown;
          };
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
  informatieobjecttype_publish: {
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
          'application/json': components['schemas']['InformatieObjectType'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
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
      /** @description Conflict */
      409: {
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
  resultaattype_list: {
    parameters: {
      query?: {
        /** @description zaaktype */
        zaaktype?: string;
        /** @description zaaktype_identificatie */
        zaaktype_identificatie?: string;
        /** @description status */
        status?: string;
        /** @description datum_geldigheid */
        datum_geldigheid?: string;
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
          'application/json': components['schemas']['PaginatedResultaatTypeList'];
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
  resultaattype_create: {
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
        'application/json': components['schemas']['ResultaatTypeCreate'];
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
          'application/json': components['schemas']['ResultaatType'];
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
  resultaattype_retrieve: {
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
          'application/json': components['schemas']['ResultaatType'];
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
  resultaattype_update: {
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
        'application/json': components['schemas']['ResultaatTypeCreate'];
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
          'application/json': components['schemas']['ResultaatTypeUpdate'];
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
  resultaattype_destroy: {
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
  resultaattype_headers: {
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
  resultaattype_partial_update: {
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
        'application/json': components['schemas']['PatchedResultaatType'];
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
          'application/json': components['schemas']['ResultaatType'];
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
  roltype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn. */
        zaaktype?: string;
        /** @description zaaktype_identificatie */
        zaaktypeIdentificatie?: string;
        /** @description Algemeen gehanteerde omschrijving van de aard van de ROL. */
        omschrijvingGeneriek?: 'adviseur' | 'behandelaar' | 'belanghebbende' | 'beslisser' | 'initiator' | 'klantcontacter' | 'zaakcoordinator' | 'mede_initiator';
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['PaginatedRolTypeList'];
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
  roltype_create: {
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
        'application/json': components['schemas']['RolType'];
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
          'application/json': components['schemas']['RolType'];
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
  roltype_retrieve: {
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
          'application/json': components['schemas']['RolType'];
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
  roltype_update: {
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
        'application/json': components['schemas']['RolType'];
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
          'application/json': components['schemas']['RolType'];
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
  roltype_destroy: {
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
  roltype_headers: {
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
  roltype_partial_update: {
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
        'application/json': components['schemas']['PatchedRolType'];
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
          'application/json': components['schemas']['RolType'];
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
  statustype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden. */
        zaaktype?: string;
        /** @description zaaktype_identificatie */
        zaaktypeIdentificatie?: string;
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['PaginatedStatusTypeList'];
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
  statustype_create: {
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
        'application/json': components['schemas']['StatusType'];
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
          'application/json': components['schemas']['StatusType'];
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
  statustype_retrieve: {
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
          'application/json': components['schemas']['StatusType'];
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
  statustype_update: {
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
        'application/json': components['schemas']['StatusType'];
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
          'application/json': components['schemas']['StatusType'];
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
  statustype_destroy: {
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
  statustype_headers: {
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
  statustype_partial_update: {
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
        'application/json': components['schemas']['PatchedStatusType'];
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
          'application/json': components['schemas']['StatusType'];
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
  zaakobjecttype_list: {
    parameters: {
      query?: {
        /** @description Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft. */
        anderObjecttype?: string;
        /** @description URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort. */
        catalogus?: string;
        /** @description De datum waarop het is ontstaan. */
        datumBeginGeldigheid?: string;
        /** @description De datum waarop het is opgeheven. */
        datumEindeGeldigheid?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
        /** @description URL-referentie naar de OBJECTTYPE waartoe dit ZAAKOBJECTTYPE behoort. */
        objecttype?: string;
        /** @description Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE. */
        relatieOmschrijving?: string;
        /** @description URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort. */
        zaaktype?: string;
        /** @description zaaktype_identificatie */
        zaaktypeIdentificatie?: string;
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
          'application/json': components['schemas']['PaginatedZaakObjectTypeList'];
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
  zaakobjecttype_create: {
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
        'application/json': components['schemas']['ZaakObjectType'];
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
          'application/json': components['schemas']['ZaakObjectType'];
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
  zaakobjecttype_retrieve: {
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
          'application/json': components['schemas']['ZaakObjectType'];
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
  zaakobjecttype_update: {
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
        'application/json': components['schemas']['ZaakObjectType'];
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
          'application/json': components['schemas']['ZaakObjectType'];
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
  zaakobjecttype_destroy: {
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
  zaakobjecttype_headers: {
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
  zaakobjecttype_partial_update: {
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
        'application/json': components['schemas']['PatchedZaakObjectType'];
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
          'application/json': components['schemas']['ZaakObjectType'];
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
  zaakinformatieobjecttype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar het ZAAKTYPE. */
        zaaktype?: string;
        /** @description informatieobjecttype */
        informatieobjecttype?: string;
        /** @description Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE. */
        richting?: 'inkomend' | 'intern' | 'uitgaand';
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
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
          'application/json': components['schemas']['PaginatedZaakTypeInformatieObjectTypeList'];
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
  zaakinformatieobjecttype_create: {
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
        'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
          'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
  zaakinformatieobjecttype_retrieve: {
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
          'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
  zaakinformatieobjecttype_update: {
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
        'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
          'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
  zaakinformatieobjecttype_destroy: {
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
  zaakinformatieobjecttype_headers: {
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
  zaakinformatieobjecttype_partial_update: {
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
        'application/json': components['schemas']['PatchedZaakTypeInformatieObjectType'];
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
          'application/json': components['schemas']['ZaakTypeInformatieObjectType'];
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
  zaaktype_list: {
    parameters: {
      query?: {
        /** @description URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort. */
        catalogus?: string;
        /** @description Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt. */
        identificatie?: string;
        /** @description Multiple values may be separated by commas. */
        trefwoorden?: string[];
        /** @description filter objects depending on their concept status:
                 *     * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
                 *     * `concept`: Toon objecten waarvan het attribuut `concept` true is.
                 *     * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
                 *      */
        status?: string;
        /** @description filter objecten op hun geldigheids datum. */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['PaginatedZaakTypeList'];
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
  zaaktype_create: {
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
        'application/json': components['schemas']['ZaakTypeCreate'];
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
          'application/json': components['schemas']['ZaakType'];
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
  zaaktype_retrieve: {
    parameters: {
      query?: {
        /** @description filter op datumGeldigheid voor het zelf en alle onderliggende objecten */
        datumGeldigheid?: string;
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
          'application/json': components['schemas']['ZaakType'];
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
  zaaktype_update: {
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
        'application/json': components['schemas']['ZaakTypeUpdate'];
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
          'application/json': components['schemas']['ZaakType'];
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
  zaaktype_destroy: {
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
          'application/json': {
            [key: string]: unknown;
          };
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
  zaaktype_headers: {
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
  zaaktype_partial_update: {
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
        'application/json': {
          [key: string]: unknown;
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
          'application/json': {
            [key: string]: unknown;
          };
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
  zaaktype_publish: {
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
        'application/json': {
          [key: string]: unknown;
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
          'application/json': components['schemas']['ZaakType'];
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          'application/problem+json': components['schemas']['ValidatieFout'];
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
      /** @description Conflict */
      409: {
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
}
