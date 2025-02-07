/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export enum AardRelatieEnum {
  Vervolg = "vervolg",
  Bijdrage = "bijdrage",
  Onderwerp = "onderwerp",
}

export enum AfleidingswijzeEnum {
  Afgehandeld = "afgehandeld",
  AnderDatumkenmerk = "ander_datumkenmerk",
  Eigenschap = "eigenschap",
  GerelateerdeZaak = "gerelateerde_zaak",
  Hoofdzaak = "hoofdzaak",
  IngangsdatumBesluit = "ingangsdatum_besluit",
  Termijn = "termijn",
  VervaldatumBesluit = "vervaldatum_besluit",
  Zaakobject = "zaakobject",
}

export enum ArchiefnominatieEnum {
  BlijvendBewaren = "blijvend_bewaren",
  Vernietigen = "vernietigen",
}

export interface BesluitType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
   * @format uri
   */
  catalogus: string;
  /**
   * zaaktypen
   * ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE
   * @uniqueItems true
   */
  zaaktypen: string[];
  /**
   * omschrijving
   * Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van BESLUITen van het BESLUITTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * besluitcategorie
   * Typering van de aard van BESLUITen van het BESLUITTYPE.
   * @maxLength 40
   */
  besluitcategorie?: string;
  /**
   * reactietermijn
   * Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, waarbinnen verweer tegen een besluit van het besluittype mogelijk is.
   * @format duration
   */
  reactietermijn?: string | null;
  /**
   * publicatie indicatie
   * Aanduiding of BESLUITen van dit BESLUITTYPE gepubliceerd moeten worden.
   */
  publicatieIndicatie: boolean;
  /**
   * publicatietekst
   * De generieke tekst van de publicatie van BESLUITen van dit BESLUITTYPE
   */
  publicatietekst?: string;
  /**
   * publicatietermijn
   * Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, dat BESLUITen van dit BESLUITTYPE gepubliceerd moeten blijven.
   * @format duration
   */
  publicatietermijn?: string | null;
  /**
   * toelichting
   * Een eventuele toelichting op dit BESLUITTYPE.
   */
  toelichting?: string;
  /**
   * informatieobjecttypen
   * URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
   * @uniqueItems true
   */
  informatieobjecttypen: string[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept: boolean;
  /**
   * Is resultaat van
   * Het BESLUITTYPE van besluiten die gepaard gaan met resultaten van het RESULTAATTYPE.
   * @uniqueItems true
   */
  resultaattypen: string[];
  /**
   * is resultaat van
   * Omschrijving van de aard van resultaten van het RESULTAATTYPE.
   * @uniqueItems true
   */
  resultaattypenOmschrijving: string[];
  /**
   * informatieobjecttypen
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @uniqueItems true
   */
  vastgelegdIn: string[];
}

export enum BlankEnum {
  Value = "",
}

/** De CATALOGUS waaraan het ZAAKTYPE is ontleend. */
export interface BronCatalogus {
  /**
   * URL-referentie broncatalogus
   * @format uri
   * @maxLength 200
   */
  url: string;
  /**
   * broncatalogus domein
   * Het domein van de CATALOGUS waaraan het ZAAKTYPE is ontleend.
   * @maxLength 5
   */
  domein: string;
  /**
   * broncatalogus rsin
   * Het RSIN van de INGESCHREVEN NIET-NATUURLIJK PERSOON die beheerder is van de CATALOGUS waaraan het ZAAKTYPE is ontleend.
   * @maxLength 9
   */
  rsin: string;
}

/** Het zaaktype binnen de CATALOGUS waaraan dit ZAAKTYPE is ontleend. */
export interface BronZaaktype {
  /**
   * URL-referentie bronzaaktype
   * @format uri
   * @maxLength 200
   */
  url: string;
  /**
   * bronzaaktype identificatie
   * De Zaaktype-identificatie van het bronzaaktype binnen de CATALOGUS.
   * @maxLength 50
   */
  identificatie: string;
  /**
   * bronzaaktype omschrijving
   * De Zaaktype-omschrijving van het bronzaaktype, zoals gehanteerd in de Broncatalogus.
   * @maxLength 80
   */
  omschrijving: string;
}

/** Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier. */
export type BrondatumArchiefprocedure = {
  /**
   * Afleidingswijze brondatum
   * Wijze van bepalen van de brondatum.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `afgehandeld` - (Afgehandeld) De termijn start op de datum waarop de zaak is afgehandeld (ZAAK.Einddatum in het RGBZ).
   * * `ander_datumkenmerk` - (Ander datumkenmerk) De termijn start op de datum die is vastgelegd in een ander datumveld dan de datumvelden waarop de overige waarden (van deze attribuutsoort) betrekking hebben. `Objecttype`, `Registratie` en `Datumkenmerk` zijn niet leeg.
   * * `eigenschap` - (Eigenschap) De termijn start op de datum die vermeld is in een zaaktype-specifieke eigenschap (zijnde een `datumveld`). `ResultaatType.ZaakType` heeft een `Eigenschap`; `Objecttype`, en `Datumkenmerk` zijn niet leeg.
   * * `gerelateerde_zaak` - (Gerelateerde zaak) De termijn start op de datum waarop de gerelateerde zaak is afgehandeld (`ZAAK.Einddatum` of `ZAAK.Gerelateerde_zaak.Einddatum` in het RGBZ). `ResultaatType.ZaakType` heeft gerelateerd `ZaakType`
   * * `hoofdzaak` - (Hoofdzaak) De termijn start op de datum waarop de gerelateerde zaak is afgehandeld, waarvan de zaak een deelzaak is (`ZAAK.Einddatum` van de hoofdzaak in het RGBZ). ResultaatType.ZaakType is deelzaaktype van ZaakType.
   * * `ingangsdatum_besluit` - (Ingangsdatum besluit) De termijn start op de datum waarop het besluit van kracht wordt (`BESLUIT.Ingangsdatum` in het RGBZ).	ResultaatType.ZaakType heeft relevant BesluitType
   * * `termijn` - (Termijn) De termijn start een vast aantal jaren na de datum waarop de zaak is afgehandeld (`ZAAK.Einddatum` in het RGBZ).
   * * `vervaldatum_besluit` - (Vervaldatum besluit) De termijn start op de dag na de datum waarop het besluit vervalt (`BESLUIT.Vervaldatum` in het RGBZ). ResultaatType.ZaakType heeft relevant BesluitType
   * * `zaakobject` - (Zaakobject) De termijn start op de einddatum geldigheid van het zaakobject waarop de zaak betrekking heeft (bijvoorbeeld de overlijdendatum van een Persoon). M.b.v. de attribuutsoort `Objecttype` wordt vastgelegd om welke zaakobjecttype het gaat; m.b.v. de attribuutsoort `Datumkenmerk` wordt vastgelegd welke datum-attribuutsoort van het zaakobjecttype het betreft.
   */
  afleidingswijze: AfleidingswijzeEnum;
  /**
   * datumkenmerk
   * Naam van de attribuutsoort van het procesobject dat bepalend is voor het einde van de procestermijn.
   * @maxLength 80
   */
  datumkenmerk?: string;
  /**
   * einddatum bekend
   * Indicatie dat de einddatum van het procesobject gedurende de uitvoering van de zaak bekend moet worden. Indien deze nog niet bekend is en deze waarde staat op `true`, dan kan de zaak (nog) niet afgesloten worden.
   */
  einddatumBekend?: boolean;
  /**
   * objecttype
   * Het soort object in de registratie dat het procesobject representeert.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `adres` - Adres
   * * `besluit` - Besluit
   * * `buurt` - Buurt
   * * `enkelvoudig_document` - Enkelvoudig document
   * * `gemeente` - Gemeente
   * * `gemeentelijke_openbare_ruimte` - Gemeentelijke openbare ruimte
   * * `huishouden` - Huishouden
   * * `inrichtingselement` - Inrichtingselement
   * * `kadastrale_onroerende_zaak` - Kadastrale onroerende zaak
   * * `kunstwerkdeel` - Kunstwerkdeel
   * * `maatschappelijke_activiteit` - Maatschappelijke activiteit
   * * `medewerker` - Medewerker
   * * `natuurlijk_persoon` - Natuurlijk persoon
   * * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
   * * `openbare_ruimte` - Openbare ruimte
   * * `organisatorische_eenheid` - Organisatorische eenheid
   * * `pand` - Pand
   * * `spoorbaandeel` - Spoorbaandeel
   * * `status` - Status
   * * `terreindeel` - Terreindeel
   * * `terrein_gebouwd_object` - Terrein gebouwd object
   * * `vestiging` - Vestiging
   * * `waterdeel` - Waterdeel
   * * `wegdeel` - Wegdeel
   * * `wijk` - Wijk
   * * `woonplaats` - Woonplaats
   * * `woz_deelobject` - Woz deel object
   * * `woz_object` - Woz object
   * * `woz_waarde` - Woz waarde
   * * `zakelijk_recht` - Zakelijk recht
   * * `overige` - Overige
   */
  objecttype?: ObjecttypeEnum | BlankEnum;
  /**
   * registratie
   * De naam van de registratie waarvan het procesobject deel uit maakt.
   * @maxLength 80
   */
  registratie?: string;
  /**
   * Brondatum procestermijn
   * De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie. Enkel relevant indien de afleidingswijze 'termijn' is.
   * @format duration
   */
  procestermijn?: string | null;
};

export interface Catalogus {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * domein
   * Een afkorting waarmee wordt aangegeven voor welk domein in een CATALOGUS ZAAKTYPEn zijn uitgewerkt.
   * @maxLength 5
   */
  domein: string;
  /**
   * rsin
   * Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON die de eigenaar is van een CATALOGUS.
   * @maxLength 9
   */
  rsin: string;
  /**
   * Naam contactpersoon
   * De naam van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
   * @maxLength 40
   */
  contactpersoonBeheerNaam: string;
  /**
   * Telefoonnummer
   * Het telefoonnummer van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
   * @maxLength 20
   */
  contactpersoonBeheerTelefoonnummer?: string;
  /**
   * Emailadres
   * Het emailadres van de contactpersoon die verantwoordelijk is voor het beheer van de CATALOGUS.
   * @format email
   * @maxLength 254
   */
  contactpersoonBeheerEmailadres?: string;
  /**
   * Catalogus
   * URL-referenties naar ZAAKTYPEn die in deze CATALOGUS worden ontsloten.
   * @uniqueItems true
   */
  zaaktypen: string[];
  /**
   * catalogus
   * URL-referenties naar BESLUITTYPEn die in deze CATALOGUS worden ontsloten.
   * @uniqueItems true
   */
  besluittypen: string[];
  /**
   * Catalogus
   * URL-referenties naar INFORMATIEOBJECTTYPEn die in deze CATALOGUS worden ontsloten.
   * @uniqueItems true
   */
  informatieobjecttypen: string[];
  /**
   * naam
   * De benaming die is gegeven aan de zaaktypecatalogus.
   * @maxLength 200
   */
  naam?: string | null;
  /**
   * versie
   * Versie-aanduiding van de van toepassing zijnde zaaktypecatalogus.
   * @maxLength 20
   */
  versie?: string | null;
  /**
   * begindatum versie
   * Datum waarop de versie van de zaaktypecatalogus van toepassing is geworden.
   * @format date
   */
  begindatumVersie?: string | null;
}

export interface CheckListItem {
  /**
   * itemnaam
   * De betekenisvolle benaming van het checklistitem
   * @maxLength 30
   */
  itemnaam: string;
  /**
   * toelichting
   * Beschrijving van de overwegingen bij het controleren van het aandachtspunt
   * @maxLength 1000
   */
  toelichting?: string | null;
  /**
   * vraagstelling
   * Een betekenisvolle vraag waaruit blijkt waarop het aandachtspunt gecontroleerd moet worden.
   * @maxLength 255
   */
  vraagstelling: string;
  /**
   * verplicht
   * Het al dan niet verplicht zijn van controle van het aandachtspunt voorafgaand aan het bereiken van de status van het gerelateerde STATUSTYPE.
   */
  verplicht?: boolean;
}

export interface Eigenschap {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * eigenschapnaam
   * De naam van de EIGENSCHAP
   * @maxLength 20
   */
  naam: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus: string;
  /**
   * definitie
   * De beschrijving van de betekenis van deze EIGENSCHAP
   * @maxLength 255
   */
  definitie: string;
  /** specificatie van eigenschap */
  specificatie: EigenschapSpecificatie;
  /**
   * toelichting
   * Een toelichting op deze EIGENSCHAP en het belang hiervan voor zaken van dit ZAAKTYPE.
   * @maxLength 1000
   */
  toelichting?: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is.
   * @format uri
   */
  zaaktype: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * Status type
   * Status type moet (onder andere) deze EIGENSCHAP hebben, voordat een STATUS van het STATUSTYPE kan worden gezet.
   * @format uri
   */
  statustype?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop de EIGENSCHAP is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop de EIGENSCHAP is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

export interface EigenschapSpecificatie {
  /**
   * groep
   * Benaming van het object of groepattribuut waarvan de EIGENSCHAP een inhoudelijk gegeven specificeert.
   * @maxLength 32
   */
  groep?: string;
  /**
   * formaat
   * Het soort tekens waarmee waarden van de EIGENSCHAP kunnen worden vastgelegd.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `tekst` - Tekst
   * * `getal` - Getal
   * * `datum` - Datum
   * * `datum_tijd` - Datum/tijd
   */
  formaat: FormaatEnum;
  /**
   * lengte
   * Het aantal karakters (lengte) waarmee waarden van de EIGENSCHAP worden vastgelegd.
   * @maxLength 14
   */
  lengte: string;
  /**
   * kardinaliteit
   * Het aantal mogelijke voorkomens van waarden van deze EIGENSCHAP bij een zaak van het ZAAKTYPE.
   * @maxLength 3
   */
  kardinaliteit: string;
  /**
   * waardenverzameling
   * Waarden die deze EIGENSCHAP kan hebben.
   */
  waardenverzameling?: string[];
}

/** Formaat van validatiefouten. */
export interface FieldValidationError {
  /**
   * name
   * Naam van het veld met ongeldige gegevens
   */
  name: string;
  /**
   * code
   * Systeemcode die het type fout aangeeft
   */
  code: string;
  /**
   * reason
   * Uitleg wat er precies fout is met de gegevens
   */
  reason: string;
}

export enum FormaatEnum {
  Tekst = "tekst",
  Getal = "getal",
  Datum = "datum",
  DatumTijd = "datum_tijd",
}

/** Formaat van HTTP 4xx en 5xx fouten. */
export interface Fout {
  /**
   * type
   * URI referentie naar het type fout, bedoeld voor developers
   */
  type?: string;
  /**
   * code
   * Systeemcode die het type fout aangeeft
   */
  code: string;
  /**
   * title
   * Generieke titel voor het type fout
   */
  title: string;
  /**
   * status
   * De HTTP status code
   */
  status: number;
  /**
   * detail
   * Extra informatie bij de fout, indien beschikbaar
   */
  detail: string;
  /**
   * instance
   * URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
   */
  instance: string;
}

export enum IndicatieInternOfExternEnum {
  Intern = "intern",
  Extern = "extern",
}

/** Serializer based on ``IOT-basis`` specified in XSD ``ztc0310_ent_basis.xsd``. */
export interface InformatieObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort.
   * @format uri
   */
  catalogus: string;
  /**
   * omschrijving
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @maxLength 80
   */
  omschrijving: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin informatieobjecten van dit INFORMATIEOBJECTTYPE voor de openbaarheid bestemd zijn.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `openbaar` - Openbaar
   * * `beperkt_openbaar` - Beperkt openbaar
   * * `intern` - Intern
   * * `zaakvertrouwelijk` - Zaakvertrouwelijk
   * * `vertrouwelijk` - Vertrouwelijk
   * * `confidentieel` - Confidentieel
   * * `geheim` - Geheim
   * * `zeer_geheim` - Zeer geheim
   */
  vertrouwelijkheidaanduiding: VertrouwelijkheidaanduidingEnum;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept: boolean;
  /**
   * zaaktypen
   * URL-referenties naar De INFORMATIEOBJECTTYPEn die relevant kunnen zijn voor ZAAKen van dit ZAAKTYPE.
   * @uniqueItems true
   */
  zaaktypen: string[];
  /**
   * informatieobjecttypen
   * URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
   * @uniqueItems true
   */
  besluittypen: string[];
  /**
   * Categorie
   * Typering van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @maxLength 80
   */
  informatieobjectcategorie: string;
  /**
   * trefwoord
   * Trefwoord(en) waarmee informatieobjecten van het INFORMATIEOBJECTTYPE kunnen worden gekarakteriseerd. (Gebruik een komma om waarden van elkaar te onderscheiden.)
   */
  trefwoord?: string[];
  /** omschrijving generiek */
  omschrijvingGeneriek?: InformatieObjectTypeOmschrijvingGeneriek;
}

export interface InformatieObjectTypeOmschrijvingGeneriek {
  /**
   * informatieobjecttype omschrijving generiek
   * Algemeen gehanteerde omschrijving van het type informatieobject.
   * @maxLength 80
   */
  informatieobjecttypeOmschrijvingGeneriek: string;
  /**
   * Definitie
   * Nauwkeurige beschrijving van het generieke type informatieobject
   * @maxLength 255
   */
  definitieInformatieobjecttypeOmschrijvingGeneriek: string;
  /**
   * Herkomst
   * De naam van de waardenverzameling, of van de beherende organisatie daarvan, waaruit de waarde is overgenomen.
   * @maxLength 12
   */
  herkomstInformatieobjecttypeOmschrijvingGeneriek: string;
  /**
   * Hierarchie
   * De plaats in de rangorde van het informatieobjecttype.
   * @maxLength 80
   */
  hierarchieInformatieobjecttypeOmschrijvingGeneriek: string;
  /**
   * Opmerking
   * Zinvolle toelichting bij het informatieobjecttype
   * @maxLength 255
   */
  opmerkingInformatieobjecttypeOmschrijvingGeneriek?: string | null;
}

export enum ObjecttypeEnum {
  Adres = "adres",
  Besluit = "besluit",
  Buurt = "buurt",
  EnkelvoudigDocument = "enkelvoudig_document",
  Gemeente = "gemeente",
  GemeentelijkeOpenbareRuimte = "gemeentelijke_openbare_ruimte",
  Huishouden = "huishouden",
  Inrichtingselement = "inrichtingselement",
  KadastraleOnroerendeZaak = "kadastrale_onroerende_zaak",
  Kunstwerkdeel = "kunstwerkdeel",
  MaatschappelijkeActiviteit = "maatschappelijke_activiteit",
  Medewerker = "medewerker",
  NatuurlijkPersoon = "natuurlijk_persoon",
  NietNatuurlijkPersoon = "niet_natuurlijk_persoon",
  OpenbareRuimte = "openbare_ruimte",
  OrganisatorischeEenheid = "organisatorische_eenheid",
  Pand = "pand",
  Spoorbaandeel = "spoorbaandeel",
  Status = "status",
  Terreindeel = "terreindeel",
  TerreinGebouwdObject = "terrein_gebouwd_object",
  Vestiging = "vestiging",
  Waterdeel = "waterdeel",
  Wegdeel = "wegdeel",
  Wijk = "wijk",
  Woonplaats = "woonplaats",
  WozDeelobject = "woz_deelobject",
  WozObject = "woz_object",
  WozWaarde = "woz_waarde",
  ZakelijkRecht = "zakelijk_recht",
  Overige = "overige",
}

export enum OmschrijvingGeneriekEnum {
  Adviseur = "adviseur",
  Behandelaar = "behandelaar",
  Belanghebbende = "belanghebbende",
  Beslisser = "beslisser",
  Initiator = "initiator",
  Klantcontacter = "klantcontacter",
  Zaakcoordinator = "zaakcoordinator",
  MedeInitiator = "mede_initiator",
}

export interface PaginatedBesluitTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: BesluitType[];
}

export interface PaginatedCatalogusList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Catalogus[];
}

export interface PaginatedEigenschapList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: Eigenschap[];
}

export interface PaginatedInformatieObjectTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: InformatieObjectType[];
}

export interface PaginatedResultaatTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ResultaatType[];
}

export interface PaginatedRolTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: RolType[];
}

export interface PaginatedStatusTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: StatusType[];
}

export interface PaginatedZaakObjectTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ZaakObjectType[];
}

export interface PaginatedZaakTypeInformatieObjectTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ZaakTypeInformatieObjectType[];
}

export interface PaginatedZaakTypeList {
  /** @example 123 */
  count?: number;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=4"
   */
  next?: string | null;
  /**
   * @format uri
   * @example "http://api.example.org/accounts/?page=2"
   */
  previous?: string | null;
  results?: ZaakType[];
}

export interface PatchedBesluitType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /**
   * zaaktypen
   * ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE
   * @uniqueItems true
   */
  zaaktypen?: string[];
  /**
   * omschrijving
   * Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van BESLUITen van het BESLUITTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * besluitcategorie
   * Typering van de aard van BESLUITen van het BESLUITTYPE.
   * @maxLength 40
   */
  besluitcategorie?: string;
  /**
   * reactietermijn
   * Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, waarbinnen verweer tegen een besluit van het besluittype mogelijk is.
   * @format duration
   */
  reactietermijn?: string | null;
  /**
   * publicatie indicatie
   * Aanduiding of BESLUITen van dit BESLUITTYPE gepubliceerd moeten worden.
   */
  publicatieIndicatie?: boolean;
  /**
   * publicatietekst
   * De generieke tekst van de publicatie van BESLUITen van dit BESLUITTYPE
   */
  publicatietekst?: string;
  /**
   * publicatietermijn
   * Een tijdsduur in ISO 8601 formaat, gerekend vanaf de verzend- of publicatiedatum, dat BESLUITen van dit BESLUITTYPE gepubliceerd moeten blijven.
   * @format duration
   */
  publicatietermijn?: string | null;
  /**
   * toelichting
   * Een eventuele toelichting op dit BESLUITTYPE.
   */
  toelichting?: string;
  /**
   * informatieobjecttypen
   * URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
   * @uniqueItems true
   */
  informatieobjecttypen?: string[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept?: boolean;
  /**
   * Is resultaat van
   * Het BESLUITTYPE van besluiten die gepaard gaan met resultaten van het RESULTAATTYPE.
   * @uniqueItems true
   */
  resultaattypen?: string[];
  /**
   * is resultaat van
   * Omschrijving van de aard van resultaten van het RESULTAATTYPE.
   * @uniqueItems true
   */
  resultaattypenOmschrijving?: string[];
  /**
   * informatieobjecttypen
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @uniqueItems true
   */
  vastgelegdIn?: string[];
}

export interface PatchedEigenschap {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * eigenschapnaam
   * De naam van de EIGENSCHAP
   * @maxLength 20
   */
  naam?: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus?: string;
  /**
   * definitie
   * De beschrijving van de betekenis van deze EIGENSCHAP
   * @maxLength 255
   */
  definitie?: string;
  /** specificatie van eigenschap */
  specificatie?: EigenschapSpecificatie;
  /**
   * toelichting
   * Een toelichting op deze EIGENSCHAP en het belang hiervan voor zaken van dit ZAAKTYPE.
   * @maxLength 1000
   */
  toelichting?: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is.
   * @format uri
   */
  zaaktype?: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * Status type
   * Status type moet (onder andere) deze EIGENSCHAP hebben, voordat een STATUS van het STATUSTYPE kan worden gezet.
   * @format uri
   */
  statustype?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop de EIGENSCHAP is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop de EIGENSCHAP is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

/** Serializer based on ``IOT-basis`` specified in XSD ``ztc0310_ent_basis.xsd``. */
export interface PatchedInformatieObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /**
   * omschrijving
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin informatieobjecten van dit INFORMATIEOBJECTTYPE voor de openbaarheid bestemd zijn.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `openbaar` - Openbaar
   * * `beperkt_openbaar` - Beperkt openbaar
   * * `intern` - Intern
   * * `zaakvertrouwelijk` - Zaakvertrouwelijk
   * * `vertrouwelijk` - Vertrouwelijk
   * * `confidentieel` - Confidentieel
   * * `geheim` - Geheim
   * * `zeer_geheim` - Zeer geheim
   */
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept?: boolean;
  /**
   * zaaktypen
   * URL-referenties naar De INFORMATIEOBJECTTYPEn die relevant kunnen zijn voor ZAAKen van dit ZAAKTYPE.
   * @uniqueItems true
   */
  zaaktypen?: string[];
  /**
   * informatieobjecttypen
   * URL-referenties naar het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd.
   * @uniqueItems true
   */
  besluittypen?: string[];
  /**
   * Categorie
   * Typering van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @maxLength 80
   */
  informatieobjectcategorie?: string;
  /**
   * trefwoord
   * Trefwoord(en) waarmee informatieobjecten van het INFORMATIEOBJECTTYPE kunnen worden gekarakteriseerd. (Gebruik een komma om waarden van elkaar te onderscheiden.)
   */
  trefwoord?: string[];
  /** omschrijving generiek */
  omschrijvingGeneriek?: InformatieObjectTypeOmschrijvingGeneriek;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface PatchedResultaatType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * is van
   * URL-referentie naar het ZAAKTYPE van ZAAKen waarin resultaten van dit RESULTAATTYPE bereikt kunnen worden.
   * @format uri
   */
  zaaktype?: string;
  /**
   * is relevant voor
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * omschrijving
   * Omschrijving van de aard van resultaten van het RESULTAATTYPE.
   * @maxLength 30
   */
  omschrijving?: string;
  /**
   * resultaattypeomschrijving
   * Algemeen gehanteerde omschrijving van de aard van resultaten van het RESULTAATTYPE. Dit moet een URL-referentie zijn naar de referenlijst van generieke resultaattypeomschrijvingen. Im ImZTC heet dit 'omschrijving generiek'
   * @format uri
   * @maxLength 1000
   */
  resultaattypeomschrijving?: string;
  /**
   * omschrijving generiek
   * Waarde van de omschrijving-generiek referentie (attribuut `omschrijving`)
   */
  omschrijvingGeneriek?: string;
  /**
   * selectielijstklasse
   * URL-referentie naar de, voor het archiefregime bij het RESULTAATTYPE relevante, categorie in de Selectielijst Archiefbescheiden (RESULTAAT in de Selectielijst API) van de voor het ZAAKTYPE verantwoordelijke overheidsorganisatie.
   * @format uri
   * @maxLength 1000
   */
  selectielijstklasse?: string;
  /**
   * toelichting
   * Een toelichting op dit RESULTAATTYPE en het belang hiervan voor ZAAKen waarin een resultaat van dit RESULTAATTYPE wordt geselecteerd.
   */
  toelichting?: string;
  /**
   * archiefnominatie
   * Aanduiding die aangeeft of ZAAKen met een resultaat van dit RESULTAATTYPE blijvend moeten worden bewaard of (op termijn) moeten worden vernietigd. Indien niet expliciet opgegeven wordt dit gevuld vanuit de selectielijst.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
   * * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
   */
  archiefnominatie?: ArchiefnominatieEnum | BlankEnum;
  /**
   * archiefactietermijn
   * De termijn, na het vervallen van het bedrjfsvoeringsbelang, waarna het zaakdossier (de ZAAK met alle bijbehorende INFORMATIEOBJECTen) van een ZAAK met een resultaat van dit RESULTAATTYPE vernietigd of overgebracht (naar een archiefbewaarplaats) moet worden. Voor te vernietigen dossiers betreft het de in die Selectielijst genoemde bewaartermjn. Voor blijvend te bewaren zaakdossiers betreft het de termijn vanaf afronding van de zaak tot overbrenging (de procestermijn is dan nihil).
   * @format duration
   */
  archiefactietermijn?: string | null;
  /**
   * brondatumArchiefprocedure
   * Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier.
   */
  brondatumArchiefprocedure?: BrondatumArchiefprocedure | null;
  /**
   * procesobjectaard
   * Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, het resultaattype bij zaken van dit type betrekking heeft.
   * @maxLength 200
   */
  procesobjectaard?: string | null;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit RESULTAATTYPE behoort.
   * @format uri
   */
  catalogus?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop de RESULTAATTYPE is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop de RESULTAATTYPE is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * indicatie specifiek
   * Aanduiding of het, vanuit archiveringsoptiek, een resultaattype betreft dat specifiek is voor een bepaalde procesobjectaard.
   */
  indicatieSpecifiek?: boolean | null;
  /**
   * procestermijn
   * De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie.
   * @format duration
   */
  procestermijn?: string | null;
  /**
   * is resultaat van
   * @uniqueItems true
   */
  besluittypen?: (string | null)[];
  /**
   * is resultaat van
   * Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
   * @uniqueItems true
   */
  besluittypeOmschrijving?: string[];
  /**
   * informatieobjecttypen
   * De INFORMATIEOBJECTTYPEn die verplicht aanwezig moeten zijn in het zaakdossier van ZAAKen van dit ZAAKTYPE voordat een resultaat van dit RESULTAATTYPE kan worden gezet.
   * @uniqueItems true
   */
  informatieobjecttypen?: (string | null)[];
  /**
   * informatieobjecttypen
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @uniqueItems true
   */
  informatieobjecttypeOmschrijving?: string[];
}

/** Adds nested create feature */
export interface PatchedRolType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
   * @format uri
   */
  zaaktype?: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * omschrijving
   * Omschrijving van de aard van de ROL.
   * @maxLength 100
   */
  omschrijving?: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van de ROL.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak.
   * * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak.
   * * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak.
   * * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn.
   * * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak ..
   * * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven ..
   * * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken.
   * * `mede_initiator` - Mede-initiator
   */
  omschrijvingGeneriek?: OmschrijvingGeneriekEnum;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ROLTYPE behoort.
   * @format uri
   */
  catalogus?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

export interface PatchedStatusType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * omschrijving
   * Een korte, voor de initiator van de zaak relevante, omschrijving van de aard van de STATUS van zaken van een ZAAKTYPE.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van STATUSsen van het STATUSTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * statustekst
   * De tekst die wordt gebruikt om de Initiator te informeren over het bereiken van een STATUS van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
   * @maxLength 1000
   */
  statustekst?: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden.
   * @format uri
   */
  zaaktype?: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus?: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * statustypevolgnummer
   * Een volgnummer voor statussen van het STATUSTYPE binnen een zaak.
   * @min 1
   * @max 9999
   */
  volgnummer?: number;
  /**
   * isEindstatus
   * Geeft aan dat dit STATUSTYPE een eindstatus betreft. Dit gegeven is afgeleid uit alle STATUSTYPEn van dit ZAAKTYPE met het hoogste volgnummer.
   */
  isEindstatus?: boolean;
  /**
   * informeren
   * Aanduiding die aangeeft of na het zetten van een STATUS van dit STATUSTYPE de Initiator moet worden geïnformeerd over de statusovergang.
   */
  informeren?: boolean;
  /**
   * doorlooptijd status
   * De door de zaakbehandelende organisatie(s) gestelde norm voor de doorlooptijd voor het bereiken van STATUSsen van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
   * @format duration
   */
  doorlooptijd?: string | null;
  /**
   * toelichting
   * Een eventuele toelichting op dit STATUSTYPE.
   * @maxLength 1000
   */
  toelichting?: string | null;
  /** checklistitem */
  checklistitemStatustype?: CheckListItem[];
  /**
   * eigenschappen
   * de EIGENSCHAPpen die verplicht een waarde moeten hebben gekregen, voordat een STATUS van dit STATUSTYPE kan worden gezet.
   * @uniqueItems true
   */
  eigenschappen?: (string | null)[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

export interface PatchedZaakObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * Ander objecttype
   * Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft.
   */
  anderObjecttype?: boolean;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * Objecttype
   * URL-referentie naar de OBJECTTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   * @maxLength 200
   */
  objecttype?: string;
  /**
   * Relatie omschrijving
   * Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE.
   * @maxLength 80
   */
  relatieOmschrijving?: string;
  /**
   * Zaaktype
   * URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  zaaktype?: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * Zaakobjecttypen
   * URL-referenties naar de RESULTAATTYPEN.
   * @uniqueItems true
   */
  resultaattypen?: string[];
  /**
   * Zaakobjecttypen
   * URL-referenties naar de STATUSTYPEN.
   * @uniqueItems true
   */
  statustypen?: string[];
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  catalogus?: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface PatchedZaakType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * identificatie
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   * @maxLength 50
   */
  identificatie?: string;
  /**
   * omschrijving
   * Omschrijving van de aard van ZAAKen van het ZAAKTYPE.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van ZAAKen van het ZAAKTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin zaakdossiers van ZAAKen van dit ZAAKTYPE voor de openbaarheid bestemd zijn. Indien de zaak bij het aanmaken geen vertrouwelijkheidaanduiding krijgt, dan wordt deze waarde gezet.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `openbaar` - Openbaar
   * * `beperkt_openbaar` - Beperkt openbaar
   * * `intern` - Intern
   * * `zaakvertrouwelijk` - Zaakvertrouwelijk
   * * `vertrouwelijk` - Vertrouwelijk
   * * `confidentieel` - Confidentieel
   * * `geheim` - Geheim
   * * `zeer_geheim` - Zeer geheim
   */
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum;
  /**
   * doel
   * Een omschrijving van hetgeen beoogd is te bereiken met een zaak van dit zaaktype.
   */
  doel?: string;
  /**
   * aanleiding
   * Een omschrijving van de gebeurtenis die leidt tot het starten van een ZAAK van dit ZAAKTYPE.
   */
  aanleiding?: string;
  /**
   * toelichting
   * Een eventuele toelichting op dit zaaktype, zoals een beschrijving van het procesverloop op de hoofdlijnen.
   */
  toelichting?: string;
  /**
   * indicatie intern of extern
   * Een aanduiding waarmee onderscheid wordt gemaakt tussen ZAAKTYPEn die Intern respectievelijk Extern geïnitieerd worden. Indien van beide sprake kan zijn, dan prevaleert de externe initiatie.
   */
  indicatieInternOfExtern?: IndicatieInternOfExternEnum;
  /**
   * handeling initiator
   * Werkwoord dat hoort bij de handeling die de initiator verricht bij dit zaaktype. Meestal 'aanvragen', 'indienen' of 'melden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_initiator
   * @maxLength 20
   */
  handelingInitiator?: string;
  /**
   * onderwerp
   * Het onderwerp van ZAAKen van dit ZAAKTYPE. In veel gevallen nauw gerelateerd aan de product- of dienstnaam uit de Producten- en Dienstencatalogus (PDC). Bijvoorbeeld: 'Evenementenvergunning', 'Geboorte', 'Klacht'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.onderwerp
   * @maxLength 80
   */
  onderwerp?: string;
  /**
   * handeling behandelaar
   * Werkwoord dat hoort bij de handeling die de behandelaar verricht bij het afdoen van ZAAKen van dit ZAAKTYPE. Meestal 'behandelen', 'uitvoeren', 'vaststellen' of 'onderhouden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_behandelaar
   * @maxLength 20
   */
  handelingBehandelaar?: string;
  /**
   * doorlooptijd behandeling
   * De periode waarbinnen volgens wet- en regelgeving een ZAAK van het ZAAKTYPE afgerond dient te zijn, in kalenderdagen.
   * @format duration
   */
  doorlooptijd?: string;
  /**
   * servicenorm behandeling
   * De periode waarbinnen verwacht wordt dat een ZAAK van het ZAAKTYPE afgerond wordt conform de geldende servicenormen van de zaakbehandelende organisatie(s).
   * @format duration
   */
  servicenorm?: string | null;
  /**
   * Opschorting/aanhouding mogelijk
   * Aanduiding die aangeeft of ZAAKen van dit mogelijk ZAAKTYPE kunnen worden opgeschort en/of aangehouden.
   */
  opschortingEnAanhoudingMogelijk?: boolean;
  /**
   * verlenging mogelijk
   * Aanduiding die aangeeft of de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd.
   */
  verlengingMogelijk?: boolean;
  /**
   * verlengingstermijn
   * Een tijdsduur in ISO 8601 formaat waarmee de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd. Mag alleen een waarde bevatten als verlenging mogelijk is.
   * @format duration
   */
  verlengingstermijn?: string | null;
  /**
   * trefwoorden
   * Een trefwoord waarmee ZAAKen van het ZAAKTYPE kunnen worden gekarakteriseerd.
   */
  trefwoorden?: string[];
  /**
   * publicatie indicatie
   * Aanduiding of (het starten van) een ZAAK dit ZAAKTYPE gepubliceerd moet worden.
   */
  publicatieIndicatie?: boolean;
  /**
   * publicatietekst
   * De generieke tekst van de publicatie van ZAAKen van dit ZAAKTYPE.
   */
  publicatietekst?: string;
  /**
   * verantwoordingsrelatie
   * De relatie tussen ZAAKen van dit ZAAKTYPE en de beleidsmatige en/of financiële verantwoording.
   */
  verantwoordingsrelatie?: string[];
  /**
   * producten of diensten
   * Het product of de dienst die door ZAAKen van dit ZAAKTYPE wordt voortgebracht.
   */
  productenOfDiensten?: string[];
  /**
   * selectielijst procestype
   * URL-referentie naar een vanuit archiveringsoptiek onderkende groep processen met dezelfde kenmerken (PROCESTYPE in de Selectielijst API).
   * @format uri
   * @maxLength 200
   */
  selectielijstProcestype?: string;
  /**
   * referentieproces
   * Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE.
   */
  referentieproces?: ReferentieProces;
  /**
   * verantwoordelijke
   * De (soort) organisatorische eenheid of (functie van) medewerker die verantwoordelijk is voor de uitvoering van zaken van het ZAAKTYPE.
   * @maxLength 50
   */
  verantwoordelijke?: string;
  /**
   * Zaaktype
   * @uniqueItems true
   */
  zaakobjecttypen?: string[];
  /**
   * broncatalogus
   * De CATALOGUS waaraan het ZAAKTYPE is ontleend.
   */
  broncatalogus?: BronCatalogus;
  /**
   * bronzaaktype
   * Het zaaktype binnen de CATALOGUS waaraan dit ZAAKTYPE is ontleend.
   */
  bronzaaktype?: BronZaaktype;
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /**
   * Zaaktype
   * URL-referenties naar de STATUSTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  statustypen?: string[];
  /**
   * is relevant voor
   * URL-referenties naar de RESULTAATTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  resultaattypen?: string[];
  /**
   * Zaaktype
   * URL-referenties naar de EIGENSCHAPPEN die aanwezig moeten zijn in ZAKEN van dit ZAAKTYPE.
   * @uniqueItems true
   */
  eigenschappen?: string[];
  /**
   * zaaktypen
   * URL-referenties naar de INFORMATIEOBJECTTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  informatieobjecttypen?: string[];
  /**
   * Zaaktype
   * URL-referenties naar de ROLTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  roltypen?: string[];
  /**
   * heeft relevante besluittypen
   * URL-referenties naar de BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  besluittypen?: string[];
  /**
   * deelzaaktypen
   * De ZAAKTYPE(n) waaronder ZAAKen als deelzaak kunnen voorkomen bij ZAAKen van dit ZAAKTYPE.
   * @uniqueItems true
   */
  deelzaaktypen?: (string | null)[];
  /**
   * zaaktype van
   * De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE.
   */
  gerelateerdeZaaktypen?: ZaakTypenRelatie[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * versiedatum
   * De datum waarop de (gewijzigde) kenmerken van het ZAAKTYPE geldig zijn geworden
   * @format date
   */
  versiedatum?: string;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept?: boolean;
}

/**
 * Represent a ZaakTypeInformatieObjectType.
 *
 * Relatie met informatieobjecttype dat relevant is voor zaaktype.
 */
export interface PatchedZaakTypeInformatieObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * zaaktype
   * URL-referentie naar het ZAAKTYPE.
   * @format uri
   */
  zaaktype?: string;
  /**
   * zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie?: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus?: string;
  /**
   * Informatie object type
   * URL-referentie naar het INFORMATIEOBJECTTYPE.
   * @format uri
   */
  informatieobjecttype?: string;
  /**
   * informatie object type
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   */
  informatieobjecttypeOmschrijving?: string;
  /**
   * volgnummer
   * Uniek volgnummer van het ZAAK-INFORMATIEOBJECTTYPE binnen het ZAAKTYPE.
   * @min 1
   * @max 999
   */
  volgnummer?: number;
  /**
   * richting
   * Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `inkomend` - Inkomend
   * * `intern` - Intern
   * * `uitgaand` - Uitgaand
   */
  richting?: RichtingEnum;
  /**
   * Status type
   * URL-referentie naar het STATUSTYPE waarbij deze INFORMATIEOBJECTTYPEn verplicht aanwezig moeten zijn.
   * @format uri
   */
  statustype?: string | null;
}

/** Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE. */
export interface ReferentieProces {
  /**
   * Referentieprocesnaam
   * De naam van het Referentieproces.
   * @maxLength 80
   */
  naam: string;
  /**
   * Referentieproceslink
   * De URL naar de beschrijving van het Referentieproces
   * @format uri
   * @maxLength 200
   */
  link?: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface ResultaatType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * is van
   * URL-referentie naar het ZAAKTYPE van ZAAKen waarin resultaten van dit RESULTAATTYPE bereikt kunnen worden.
   * @format uri
   */
  zaaktype: string;
  /**
   * is relevant voor
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * omschrijving
   * Omschrijving van de aard van resultaten van het RESULTAATTYPE.
   * @maxLength 30
   */
  omschrijving: string;
  /**
   * resultaattypeomschrijving
   * Algemeen gehanteerde omschrijving van de aard van resultaten van het RESULTAATTYPE. Dit moet een URL-referentie zijn naar de referenlijst van generieke resultaattypeomschrijvingen. Im ImZTC heet dit 'omschrijving generiek'
   * @format uri
   * @maxLength 1000
   */
  resultaattypeomschrijving: string;
  /**
   * omschrijving generiek
   * Waarde van de omschrijving-generiek referentie (attribuut `omschrijving`)
   */
  omschrijvingGeneriek: string;
  /**
   * selectielijstklasse
   * URL-referentie naar de, voor het archiefregime bij het RESULTAATTYPE relevante, categorie in de Selectielijst Archiefbescheiden (RESULTAAT in de Selectielijst API) van de voor het ZAAKTYPE verantwoordelijke overheidsorganisatie.
   * @format uri
   * @maxLength 1000
   */
  selectielijstklasse: string;
  /**
   * toelichting
   * Een toelichting op dit RESULTAATTYPE en het belang hiervan voor ZAAKen waarin een resultaat van dit RESULTAATTYPE wordt geselecteerd.
   */
  toelichting?: string;
  /**
   * archiefnominatie
   * Aanduiding die aangeeft of ZAAKen met een resultaat van dit RESULTAATTYPE blijvend moeten worden bewaard of (op termijn) moeten worden vernietigd. Indien niet expliciet opgegeven wordt dit gevuld vanuit de selectielijst.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
   * * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
   */
  archiefnominatie?: ArchiefnominatieEnum | BlankEnum;
  /**
   * archiefactietermijn
   * De termijn, na het vervallen van het bedrjfsvoeringsbelang, waarna het zaakdossier (de ZAAK met alle bijbehorende INFORMATIEOBJECTen) van een ZAAK met een resultaat van dit RESULTAATTYPE vernietigd of overgebracht (naar een archiefbewaarplaats) moet worden. Voor te vernietigen dossiers betreft het de in die Selectielijst genoemde bewaartermjn. Voor blijvend te bewaren zaakdossiers betreft het de termijn vanaf afronding van de zaak tot overbrenging (de procestermijn is dan nihil).
   * @format duration
   */
  archiefactietermijn?: string | null;
  /**
   * brondatumArchiefprocedure
   * Specificatie voor het bepalen van de brondatum voor de start van de Archiefactietermijn (=brondatum) van het zaakdossier.
   */
  brondatumArchiefprocedure?: BrondatumArchiefprocedure | null;
  /**
   * procesobjectaard
   * Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, het resultaattype bij zaken van dit type betrekking heeft.
   * @maxLength 200
   */
  procesobjectaard?: string | null;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit RESULTAATTYPE behoort.
   * @format uri
   */
  catalogus?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop de RESULTAATTYPE is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop de RESULTAATTYPE is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * indicatie specifiek
   * Aanduiding of het, vanuit archiveringsoptiek, een resultaattype betreft dat specifiek is voor een bepaalde procesobjectaard.
   */
  indicatieSpecifiek?: boolean | null;
  /**
   * procestermijn
   * De periode dat het zaakdossier na afronding van de zaak actief gebruikt en/of geraadpleegd wordt ter ondersteuning van de taakuitoefening van de organisatie.
   * @format duration
   */
  procestermijn?: string | null;
  /**
   * is resultaat van
   * @uniqueItems true
   */
  besluittypen?: (string | null)[];
  /**
   * is resultaat van
   * Omschrijving van de aard van BESLUITen van het BESLUITTYPE.
   * @uniqueItems true
   */
  besluittypeOmschrijving: string[];
  /**
   * informatieobjecttypen
   * De INFORMATIEOBJECTTYPEn die verplicht aanwezig moeten zijn in het zaakdossier van ZAAKen van dit ZAAKTYPE voordat een resultaat van dit RESULTAATTYPE kan worden gezet.
   * @uniqueItems true
   */
  informatieobjecttypen?: (string | null)[];
  /**
   * informatieobjecttypen
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   * @uniqueItems true
   */
  informatieobjecttypeOmschrijving: string[];
}

export enum RichtingEnum {
  Inkomend = "inkomend",
  Intern = "intern",
  Uitgaand = "uitgaand",
}

/** Adds nested create feature */
export interface RolType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
   * @format uri
   */
  zaaktype: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * omschrijving
   * Omschrijving van de aard van de ROL.
   * @maxLength 100
   */
  omschrijving: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van de ROL.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `adviseur` - (Adviseur) Kennis in dienst stellen van de behandeling van (een deel van) een zaak.
   * * `behandelaar` - (Behandelaar) De vakinhoudelijke behandeling doen van (een deel van) een zaak.
   * * `belanghebbende` - (Belanghebbende) Vanuit eigen en objectief belang rechtstreeks betrokken zijn bij de behandeling en/of de uitkomst van een zaak.
   * * `beslisser` - (Beslisser) Nemen van besluiten die voor de uitkomst van een zaak noodzakelijk zijn.
   * * `initiator` - (Initiator) Aanleiding geven tot de start van een zaak ..
   * * `klantcontacter` - (Klantcontacter) Het eerste aanspreekpunt zijn voor vragen van burgers en bedrijven ..
   * * `zaakcoordinator` - (Zaakcoördinator) Er voor zorg dragen dat de behandeling van de zaak in samenhang uitgevoerd wordt conform de daarover gemaakte afspraken.
   * * `mede_initiator` - Mede-initiator
   */
  omschrijvingGeneriek: OmschrijvingGeneriekEnum;
  /**
   * catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ROLTYPE behoort.
   * @format uri
   */
  catalogus?: string | null;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

export interface StatusType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * omschrijving
   * Een korte, voor de initiator van de zaak relevante, omschrijving van de aard van de STATUS van zaken van een ZAAKTYPE.
   * @maxLength 80
   */
  omschrijving: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van STATUSsen van het STATUSTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * statustekst
   * De tekst die wordt gebruikt om de Initiator te informeren over het bereiken van een STATUS van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
   * @maxLength 1000
   */
  statustekst?: string;
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden.
   * @format uri
   */
  zaaktype: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * statustypevolgnummer
   * Een volgnummer voor statussen van het STATUSTYPE binnen een zaak.
   * @min 1
   * @max 9999
   */
  volgnummer: number;
  /**
   * isEindstatus
   * Geeft aan dat dit STATUSTYPE een eindstatus betreft. Dit gegeven is afgeleid uit alle STATUSTYPEn van dit ZAAKTYPE met het hoogste volgnummer.
   */
  isEindstatus: boolean;
  /**
   * informeren
   * Aanduiding die aangeeft of na het zetten van een STATUS van dit STATUSTYPE de Initiator moet worden geïnformeerd over de statusovergang.
   */
  informeren?: boolean;
  /**
   * doorlooptijd status
   * De door de zaakbehandelende organisatie(s) gestelde norm voor de doorlooptijd voor het bereiken van STATUSsen van dit STATUSTYPE bij het desbetreffende ZAAKTYPE.
   * @format duration
   */
  doorlooptijd?: string | null;
  /**
   * toelichting
   * Een eventuele toelichting op dit STATUSTYPE.
   * @maxLength 1000
   */
  toelichting?: string | null;
  /** checklistitem */
  checklistitemStatustype?: CheckListItem[];
  /**
   * eigenschappen
   * de EIGENSCHAPpen die verplicht een waarde moeten hebben gekregen, voordat een STATUS van dit STATUSTYPE kan worden gezet.
   * @uniqueItems true
   */
  eigenschappen?: (string | null)[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid?: string | null;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
}

/** Formaat van HTTP 4xx en 5xx fouten. */
export interface ValidatieFout {
  /**
   * type
   * URI referentie naar het type fout, bedoeld voor developers
   */
  type?: string;
  /**
   * code
   * Systeemcode die het type fout aangeeft
   */
  code: string;
  /**
   * title
   * Generieke titel voor het type fout
   */
  title: string;
  /**
   * status
   * De HTTP status code
   */
  status: number;
  /**
   * detail
   * Extra informatie bij de fout, indien beschikbaar
   */
  detail: string;
  /**
   * instance
   * URI met referentie naar dit specifiek voorkomen van de fout. Deze kan gebruikt worden in combinatie met server logs, bijvoorbeeld.
   */
  instance: string;
  /** invalidParams */
  invalidParams: FieldValidationError[];
}

export enum VertrouwelijkheidaanduidingEnum {
  Openbaar = "openbaar",
  BeperktOpenbaar = "beperkt_openbaar",
  Intern = "intern",
  Zaakvertrouwelijk = "zaakvertrouwelijk",
  Vertrouwelijk = "vertrouwelijk",
  Confidentieel = "confidentieel",
  Geheim = "geheim",
  ZeerGeheim = "zeer_geheim",
}

export interface ZaakObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * Ander objecttype
   * Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft.
   */
  anderObjecttype: boolean;
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * Objecttype
   * URL-referentie naar de OBJECTTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   * @maxLength 200
   */
  objecttype: string;
  /**
   * Relatie omschrijving
   * Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE.
   * @maxLength 80
   */
  relatieOmschrijving: string;
  /**
   * Zaaktype
   * URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  zaaktype: string;
  /**
   * Zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * Zaakobjecttypen
   * URL-referenties naar de RESULTAATTYPEN.
   * @uniqueItems true
   */
  resultaattypen: string[];
  /**
   * Zaakobjecttypen
   * URL-referenties naar de STATUSTYPEN.
   * @uniqueItems true
   */
  statustypen: string[];
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  catalogus: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface ZaakType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * identificatie
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   * @maxLength 50
   */
  identificatie: string;
  /**
   * omschrijving
   * Omschrijving van de aard van ZAAKen van het ZAAKTYPE.
   * @maxLength 80
   */
  omschrijving: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde omschrijving van de aard van ZAAKen van het ZAAKTYPE
   * @maxLength 80
   */
  omschrijvingGeneriek?: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin zaakdossiers van ZAAKen van dit ZAAKTYPE voor de openbaarheid bestemd zijn. Indien de zaak bij het aanmaken geen vertrouwelijkheidaanduiding krijgt, dan wordt deze waarde gezet.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `openbaar` - Openbaar
   * * `beperkt_openbaar` - Beperkt openbaar
   * * `intern` - Intern
   * * `zaakvertrouwelijk` - Zaakvertrouwelijk
   * * `vertrouwelijk` - Vertrouwelijk
   * * `confidentieel` - Confidentieel
   * * `geheim` - Geheim
   * * `zeer_geheim` - Zeer geheim
   */
  vertrouwelijkheidaanduiding: VertrouwelijkheidaanduidingEnum;
  /**
   * doel
   * Een omschrijving van hetgeen beoogd is te bereiken met een zaak van dit zaaktype.
   */
  doel: string;
  /**
   * aanleiding
   * Een omschrijving van de gebeurtenis die leidt tot het starten van een ZAAK van dit ZAAKTYPE.
   */
  aanleiding: string;
  /**
   * toelichting
   * Een eventuele toelichting op dit zaaktype, zoals een beschrijving van het procesverloop op de hoofdlijnen.
   */
  toelichting?: string;
  /**
   * indicatie intern of extern
   * Een aanduiding waarmee onderscheid wordt gemaakt tussen ZAAKTYPEn die Intern respectievelijk Extern geïnitieerd worden. Indien van beide sprake kan zijn, dan prevaleert de externe initiatie.
   */
  indicatieInternOfExtern: IndicatieInternOfExternEnum;
  /**
   * handeling initiator
   * Werkwoord dat hoort bij de handeling die de initiator verricht bij dit zaaktype. Meestal 'aanvragen', 'indienen' of 'melden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_initiator
   * @maxLength 20
   */
  handelingInitiator: string;
  /**
   * onderwerp
   * Het onderwerp van ZAAKen van dit ZAAKTYPE. In veel gevallen nauw gerelateerd aan de product- of dienstnaam uit de Producten- en Dienstencatalogus (PDC). Bijvoorbeeld: 'Evenementenvergunning', 'Geboorte', 'Klacht'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.onderwerp
   * @maxLength 80
   */
  onderwerp: string;
  /**
   * handeling behandelaar
   * Werkwoord dat hoort bij de handeling die de behandelaar verricht bij het afdoen van ZAAKen van dit ZAAKTYPE. Meestal 'behandelen', 'uitvoeren', 'vaststellen' of 'onderhouden'. Zie ook het IOB model op https://www.gemmaonline.nl/index.php/Imztc_2.1/doc/attribuutsoort/zaaktype.handeling_behandelaar
   * @maxLength 20
   */
  handelingBehandelaar: string;
  /**
   * doorlooptijd behandeling
   * De periode waarbinnen volgens wet- en regelgeving een ZAAK van het ZAAKTYPE afgerond dient te zijn, in kalenderdagen.
   * @format duration
   */
  doorlooptijd: string;
  /**
   * servicenorm behandeling
   * De periode waarbinnen verwacht wordt dat een ZAAK van het ZAAKTYPE afgerond wordt conform de geldende servicenormen van de zaakbehandelende organisatie(s).
   * @format duration
   */
  servicenorm?: string | null;
  /**
   * Opschorting/aanhouding mogelijk
   * Aanduiding die aangeeft of ZAAKen van dit mogelijk ZAAKTYPE kunnen worden opgeschort en/of aangehouden.
   */
  opschortingEnAanhoudingMogelijk: boolean;
  /**
   * verlenging mogelijk
   * Aanduiding die aangeeft of de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd.
   */
  verlengingMogelijk: boolean;
  /**
   * verlengingstermijn
   * Een tijdsduur in ISO 8601 formaat waarmee de Doorlooptijd behandeling van ZAAKen van dit ZAAKTYPE kan worden verlengd. Mag alleen een waarde bevatten als verlenging mogelijk is.
   * @format duration
   */
  verlengingstermijn?: string | null;
  /**
   * trefwoorden
   * Een trefwoord waarmee ZAAKen van het ZAAKTYPE kunnen worden gekarakteriseerd.
   */
  trefwoorden?: string[];
  /**
   * publicatie indicatie
   * Aanduiding of (het starten van) een ZAAK dit ZAAKTYPE gepubliceerd moet worden.
   */
  publicatieIndicatie: boolean;
  /**
   * publicatietekst
   * De generieke tekst van de publicatie van ZAAKen van dit ZAAKTYPE.
   */
  publicatietekst?: string;
  /**
   * verantwoordingsrelatie
   * De relatie tussen ZAAKen van dit ZAAKTYPE en de beleidsmatige en/of financiële verantwoording.
   */
  verantwoordingsrelatie?: string[];
  /**
   * producten of diensten
   * Het product of de dienst die door ZAAKen van dit ZAAKTYPE wordt voortgebracht.
   */
  productenOfDiensten: string[];
  /**
   * selectielijst procestype
   * URL-referentie naar een vanuit archiveringsoptiek onderkende groep processen met dezelfde kenmerken (PROCESTYPE in de Selectielijst API).
   * @format uri
   * @maxLength 200
   */
  selectielijstProcestype?: string;
  /**
   * referentieproces
   * Het Referentieproces dat ten grondslag ligt aan dit ZAAKTYPE.
   */
  referentieproces: ReferentieProces;
  /**
   * verantwoordelijke
   * De (soort) organisatorische eenheid of (functie van) medewerker die verantwoordelijk is voor de uitvoering van zaken van het ZAAKTYPE.
   * @maxLength 50
   */
  verantwoordelijke: string;
  /**
   * Zaaktype
   * @uniqueItems true
   */
  zaakobjecttypen: string[];
  /**
   * broncatalogus
   * De CATALOGUS waaraan het ZAAKTYPE is ontleend.
   */
  broncatalogus?: BronCatalogus;
  /**
   * bronzaaktype
   * Het zaaktype binnen de CATALOGUS waaraan dit ZAAKTYPE is ontleend.
   */
  bronzaaktype?: BronZaaktype;
  /**
   * Catalogus
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort.
   * @format uri
   */
  catalogus: string;
  /**
   * Zaaktype
   * URL-referenties naar de STATUSTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  statustypen: string[];
  /**
   * is relevant voor
   * URL-referenties naar de RESULTAATTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  resultaattypen: string[];
  /**
   * Zaaktype
   * URL-referenties naar de EIGENSCHAPPEN die aanwezig moeten zijn in ZAKEN van dit ZAAKTYPE.
   * @uniqueItems true
   */
  eigenschappen: string[];
  /**
   * zaaktypen
   * URL-referenties naar de INFORMATIEOBJECTTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  informatieobjecttypen: string[];
  /**
   * Zaaktype
   * URL-referenties naar de ROLTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  roltypen: string[];
  /**
   * heeft relevante besluittypen
   * URL-referenties naar de BESLUITTYPEN die mogelijk zijn binnen dit ZAAKTYPE.
   * @uniqueItems true
   */
  besluittypen: string[];
  /**
   * deelzaaktypen
   * De ZAAKTYPE(n) waaronder ZAAKen als deelzaak kunnen voorkomen bij ZAAKen van dit ZAAKTYPE.
   * @uniqueItems true
   */
  deelzaaktypen?: (string | null)[];
  /**
   * zaaktype van
   * De ZAAKTYPEn van zaken die relevant zijn voor zaken van dit ZAAKTYPE.
   */
  gerelateerdeZaaktypen: ZaakTypenRelatie[];
  /**
   * datum begin geldigheid
   * De datum waarop het is ontstaan.
   * @format date
   */
  beginGeldigheid: string;
  /**
   * datum einde geldigheid
   * De datum waarop het is opgeheven.
   * @format date
   */
  eindeGeldigheid?: string | null;
  /**
   * datum begin object
   * De datum waarop de eerst versie van het object ontstaan is.
   * @format date
   */
  beginObject?: string | null;
  /**
   * datum einde object
   * De datum van de aller laatste versie van het object.
   * @format date
   */
  eindeObject?: string | null;
  /**
   * versiedatum
   * De datum waarop de (gewijzigde) kenmerken van het ZAAKTYPE geldig zijn geworden
   * @format date
   */
  versiedatum: string;
  /**
   * concept
   * Geeft aan of het object een concept betreft. Concepten zijn niet-definitieve versies en zouden niet gebruikt moeten worden buiten deze API.
   */
  concept: boolean;
}

/**
 * Represent a ZaakTypeInformatieObjectType.
 *
 * Relatie met informatieobjecttype dat relevant is voor zaaktype.
 */
export interface ZaakTypeInformatieObjectType {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * zaaktype
   * URL-referentie naar het ZAAKTYPE.
   * @format uri
   */
  zaaktype: string;
  /**
   * zaaktype
   * Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt.
   */
  zaaktypeIdentificatie: string;
  /**
   * catalogus
   * @format uri
   */
  catalogus: string;
  /**
   * Informatie object type
   * URL-referentie naar het INFORMATIEOBJECTTYPE.
   * @format uri
   */
  informatieobjecttype: string;
  /**
   * informatie object type
   * Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE.
   */
  informatieobjecttypeOmschrijving: string;
  /**
   * volgnummer
   * Uniek volgnummer van het ZAAK-INFORMATIEOBJECTTYPE binnen het ZAAKTYPE.
   * @min 1
   * @max 999
   */
  volgnummer: number;
  /**
   * richting
   * Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `inkomend` - Inkomend
   * * `intern` - Intern
   * * `uitgaand` - Uitgaand
   */
  richting: RichtingEnum;
  /**
   * Status type
   * URL-referentie naar het STATUSTYPE waarbij deze INFORMATIEOBJECTTYPEn verplicht aanwezig moeten zijn.
   * @format uri
   */
  statustype?: string | null;
}

export interface ZaakTypenRelatie {
  /**
   * gerelateerd zaaktype
   * URL referentie naar het gerelateerde zaaktype, mogelijks in een extern ZTC.
   * @format uri
   * @maxLength 200
   */
  zaaktype: string;
  /**
   * aard relatie
   * Omschrijving van de aard van de relatie van zaken van het ZAAKTYPE tot zaken van het andere ZAAKTYPE
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `vervolg` - Vervolg
   * * `bijdrage` - Bijdrage
   * * `onderwerp` - Onderwerp
   */
  aardRelatie: AardRelatieEnum;
  /**
   * toelichting
   * Een toelichting op de aard van de relatie tussen beide ZAAKTYPEN.
   * @maxLength 255
   */
  toelichting?: string;
}

export interface BesluittypeListParams {
  /**
   * URL-referentie naar de CATALOGUS waartoe dit BESLUITTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /** ZAAKTYPE met ZAAKen die relevant kunnen zijn voor dit BESLUITTYPE */
  zaaktypen?: string;
  /** Het INFORMATIEOBJECTTYPE van informatieobjecten waarin besluiten van dit BESLUITTYPE worden vastgelegd. */
  informatieobjecttypen?: string;
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** Omschrijving van de aard van BESLUITen van het BESLUITTYPE. */
  omschrijving?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type BesluittypeListData = PaginatedBesluitTypeList;

export type BesluittypeCreateData = BesluitType;

export type BesluittypeRetrieveData = BesluitType;

export type BesluittypeUpdateData = BesluitType;

export type BesluittypePartialUpdateData = BesluitType;

export type BesluittypeDestroyData = any;

export type BesluittypeHeadersData = any;

export type BesluittypePublishData = BesluitType;

export interface CatalogusListParams {
  /** domein */
  domein?: string;
  /** domein__in */
  domein__in?: string;
  /** rsin */
  rsin?: string;
  /** rsin__in */
  rsin__in?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type CatalogusListData = PaginatedCatalogusList;

export type CatalogusCreateData = Catalogus;

export type CatalogusRetrieveData = Catalogus;

export type CatalogusHeadersData = any;

export interface EigenschapListParams {
  /**
   * URL-referentie naar het ZAAKTYPE van de ZAAKen waarvoor deze EIGENSCHAP van belang is.
   * @format uri
   */
  zaaktype?: string;
  /** zaaktype_identificatie */
  zaaktypeIdentificatie?: string;
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type EigenschapListData = PaginatedEigenschapList;

export type EigenschapCreateData = Eigenschap;

export type EigenschapRetrieveData = Eigenschap;

export type EigenschapUpdateData = Eigenschap;

export type EigenschapPartialUpdateData = Eigenschap;

export type EigenschapDestroyData = any;

export type EigenschapHeadersData = any;

export interface InformatieobjecttypeListParams {
  /**
   * URL-referentie naar de CATALOGUS waartoe dit INFORMATIEOBJECTTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Omschrijving van de aard van informatieobjecten van dit INFORMATIEOBJECTTYPE. */
  omschrijving?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type InformatieobjecttypeListData = PaginatedInformatieObjectTypeList;

export type InformatieobjecttypeCreateData = InformatieObjectType;

export type InformatieobjecttypeRetrieveData = InformatieObjectType;

export type InformatieobjecttypeUpdateData = InformatieObjectType;

export type InformatieobjecttypePartialUpdateData = InformatieObjectType;

export type InformatieobjecttypeDestroyData = any;

export type InformatieobjecttypeHeadersData = any;

export type InformatieobjecttypePublishData = InformatieObjectType;

export interface ResultaattypeListParams {
  /** zaaktype */
  zaaktype?: string;
  /** zaaktype_identificatie */
  zaaktype_identificatie?: string;
  /** status */
  status?: string;
  /** datum_geldigheid */
  datum_geldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ResultaattypeListData = PaginatedResultaatTypeList;

export type ResultaattypeCreateData = ResultaatType;

export type ResultaattypeRetrieveData = ResultaatType;

export type ResultaattypeUpdateData = ResultaatType;

export type ResultaattypePartialUpdateData = ResultaatType;

export type ResultaattypeDestroyData = any;

export type ResultaattypeHeadersData = any;

export interface RoltypeListParams {
  /**
   * URL-referentie naar het ZAAKTYPE waar deze ROLTYPEn betrokken kunnen zijn.
   * @format uri
   */
  zaaktype?: string;
  /** zaaktype_identificatie */
  zaaktypeIdentificatie?: string;
  /** Algemeen gehanteerde omschrijving van de aard van de ROL. */
  omschrijvingGeneriek?:
    | "adviseur"
    | "behandelaar"
    | "belanghebbende"
    | "beslisser"
    | "initiator"
    | "klantcontacter"
    | "zaakcoordinator"
    | "mede_initiator";
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type RoltypeListData = PaginatedRolTypeList;

export type RoltypeCreateData = RolType;

export type RoltypeRetrieveData = RolType;

export type RoltypeUpdateData = RolType;

export type RoltypePartialUpdateData = RolType;

export type RoltypeDestroyData = any;

export type RoltypeHeadersData = any;

export interface StatustypeListParams {
  /**
   * URL-referentie naar het ZAAKTYPE van ZAAKen waarin STATUSsen van dit STATUSTYPE bereikt kunnen worden.
   * @format uri
   */
  zaaktype?: string;
  /** zaaktype_identificatie */
  zaaktypeIdentificatie?: string;
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type StatustypeListData = PaginatedStatusTypeList;

export type StatustypeCreateData = StatusType;

export type StatustypeRetrieveData = StatusType;

export type StatustypeUpdateData = StatusType;

export type StatustypePartialUpdateData = StatusType;

export type StatustypeDestroyData = any;

export type StatustypeHeadersData = any;

export interface ZaakobjecttypeListParams {
  /** Aanduiding waarmee wordt aangegeven of het ZAAKOBJECTTYPE een ander, niet in RSGB en RGBZ voorkomend, objecttype betreft. */
  anderObjecttype?: string;
  /**
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /** De datum waarop het is ontstaan. */
  datumBeginGeldigheid?: string;
  /** De datum waarop het is opgeheven. */
  datumEindeGeldigheid?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /**
   * URL-referentie naar de OBJECTTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  objecttype?: string;
  /** Omschrijving van de betrekking van het Objecttype op zaken van het gerelateerde ZAAKTYPE. */
  relatieOmschrijving?: string;
  /**
   * URL-referentie naar de ZAAKTYPE waartoe dit ZAAKOBJECTTYPE behoort.
   * @format uri
   */
  zaaktype?: string;
  /** zaaktype_identificatie */
  zaaktypeIdentificatie?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ZaakobjecttypeListData = PaginatedZaakObjectTypeList;

export type ZaakobjecttypeCreateData = ZaakObjectType;

export type ZaakobjecttypeRetrieveData = ZaakObjectType;

export type ZaakobjecttypeUpdateData = ZaakObjectType;

export type ZaakobjecttypePartialUpdateData = ZaakObjectType;

export type ZaakobjecttypeDestroyData = any;

export type ZaakobjecttypeHeadersData = any;

export interface ZaakinformatieobjecttypeListParams {
  /**
   * URL-referentie naar het ZAAKTYPE.
   * @format uri
   */
  zaaktype?: string;
  /**
   * URL-referentie naar het INFORMATIEOBJECTTYPE.
   * @format uri
   */
  informatieobjecttype?: string;
  /** Aanduiding van de richting van informatieobjecten van het gerelateerde INFORMATIEOBJECTTYPE bij zaken van het gerelateerde ZAAKTYPE. */
  richting?: "inkomend" | "intern" | "uitgaand";
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ZaakinformatieobjecttypeListData = PaginatedZaakTypeInformatieObjectTypeList;

export type ZaakinformatieobjecttypeCreateData = ZaakTypeInformatieObjectType;

export type ZaakinformatieobjecttypeRetrieveData = ZaakTypeInformatieObjectType;

export type ZaakinformatieobjecttypeUpdateData = ZaakTypeInformatieObjectType;

export type ZaakinformatieobjecttypePartialUpdateData = ZaakTypeInformatieObjectType;

export type ZaakinformatieobjecttypeDestroyData = any;

export type ZaakinformatieobjecttypeHeadersData = any;

export interface ZaaktypeListParams {
  /**
   * URL-referentie naar de CATALOGUS waartoe dit ZAAKTYPE behoort.
   * @format uri
   */
  catalogus?: string;
  /** Unieke identificatie van het ZAAKTYPE binnen de CATALOGUS waarin het ZAAKTYPE voorkomt. */
  identificatie?: string;
  /** Multiple values may be separated by commas. */
  trefwoorden?: string[];
  /**
   * filter objects depending on their concept status:
   * * `alles`: Toon objecten waarvan het attribuut `concept` true of false is.
   * * `concept`: Toon objecten waarvan het attribuut `concept` true is.
   * * `definitief`: Toon objecten waarvan het attribuut `concept` false is (standaard).
   */
  status?: string;
  /** filter objecten op hun geldigheids datum. */
  datumGeldigheid?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ZaaktypeListData = PaginatedZaakTypeList;

export type ZaaktypeCreateData = ZaakType;

export type ZaaktypeRetrieveData = ZaakType;

export type ZaaktypeUpdateData = ZaakType;

export type ZaaktypePartialUpdateData = ZaakType;

export type ZaaktypeDestroyData = any;

export type ZaaktypeHeadersData = any;

export type ZaaktypePublishData = ZaakType;
