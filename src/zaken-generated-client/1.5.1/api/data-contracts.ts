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
  Onderwerp = "onderwerp",
  Bijdrage = "bijdrage",
}

export enum AardRelatieWeergaveEnum {
  HoortBijOmgekeerdKent = "Hoort bij, omgekeerd: kent",
  LegtVastOmgekeerdKanVastgelegdZijnAls = "Legt vast, omgekeerd: kan vastgelegd zijn als",
}

export enum ArchiefnominatieEnum {
  BlijvendBewaren = "blijvend_bewaren",
  Vernietigen = "vernietigen",
}

export enum ArchiefstatusEnum {
  NogTeArchiveren = "nog_te_archiveren",
  Gearchiveerd = "gearchiveerd",
  GearchiveerdProcestermijnOnbekend = "gearchiveerd_procestermijn_onbekend",
  Overgedragen = "overgedragen",
}

export interface AuditTrail {
  /**
   * uuid
   * Unieke identificatie van de audit regel.
   * @format uuid
   */
  uuid?: string;
  /**
   * bron
   * De naam van het component waar de wijziging in is gedaan.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `ac` - Autorisaties API
   * * `nrc` - Notificaties API
   * * `zrc` - Zaken API
   * * `ztc` - Catalogi API
   * * `drc` - Documenten API
   * * `brc` - Besluiten API
   * * `cmc` - Contactmomenten API
   * * `kc` - Klanten API
   * * `vrc` - Verzoeken API
   */
  bron: BronEnum;
  /**
   * applicatie id
   * Unieke identificatie van de applicatie, binnen de organisatie.
   * @maxLength 100
   */
  applicatieId?: string;
  /**
   * applicatie weergave
   * Vriendelijke naam van de applicatie.
   * @maxLength 200
   */
  applicatieWeergave?: string;
  /**
   * gebruikers id
   * Unieke identificatie van de gebruiker die binnen de organisatie herleid kan worden naar een persoon.
   * @maxLength 255
   */
  gebruikersId?: string;
  /**
   * gebruikers weergave
   * Vriendelijke naam van de gebruiker.
   * @maxLength 255
   */
  gebruikersWeergave?: string;
  /**
   * actie
   * De uitgevoerde handeling.
   *
   * De bekende waardes voor dit veld zijn hieronder aangegeven,                         maar andere waardes zijn ook toegestaan
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `create` - Object aangemaakt
   * * `list` - Lijst van objecten opgehaald
   * * `retrieve` - Object opgehaald
   * * `destroy` - Object verwijderd
   * * `update` - Object bijgewerkt
   * * `partial_update` - Object deels bijgewerkt
   * @maxLength 50
   */
  actie: string;
  /**
   * actie weergave
   * Vriendelijke naam van de actie.
   * @maxLength 200
   */
  actieWeergave?: string;
  /**
   * resultaat
   * HTTP status code van de API response van de uitgevoerde handeling.
   * @min 100
   * @max 599
   */
  resultaat: number;
  /**
   * hoofd object
   * De URL naar het hoofdobject van een component.
   * @format uri
   * @maxLength 1000
   */
  hoofdObject: string;
  /**
   * resource
   * Het type resource waarop de actie gebeurde.
   * @maxLength 50
   */
  resource: string;
  /**
   * resource url
   * De URL naar het object.
   * @format uri
   * @maxLength 1000
   */
  resourceUrl: string;
  /**
   * toelichting
   * Toelichting waarom de handeling is uitgevoerd.
   */
  toelichting?: string;
  /**
   * resource weergave
   * Vriendelijke identificatie van het object.
   * @maxLength 200
   */
  resourceWeergave: string;
  /**
   * aanmaakdatum
   * De datum waarop de handeling is gedaan.
   * @format date-time
   */
  aanmaakdatum: string;
  /** wijzigingen */
  wijzigingen: Wijzigingen;
}

export enum BetalingsindicatieEnum {
  Nvt = "nvt",
  NogNiet = "nog_niet",
  Gedeeltelijk = "gedeeltelijk",
  Geheel = "geheel",
}

export enum BetrokkeneTypeEnum {
  NatuurlijkPersoon = "natuurlijk_persoon",
  NietNatuurlijkPersoon = "niet_natuurlijk_persoon",
  Vestiging = "vestiging",
  OrganisatorischeEenheid = "organisatorische_eenheid",
  Medewerker = "medewerker",
}

export enum BlankEnum {
  Value = "",
}

export enum BronEnum {
  Ac = "ac",
  Nrc = "nrc",
  Zrc = "zrc",
  Ztc = "ztc",
  Drc = "drc",
  Brc = "brc",
  Cmc = "cmc",
  Kc = "kc",
  Vrc = "vrc",
}

/** De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde , vanuit het belang van BETROKKENE in haar ROL bij een ZAAK. */
export type ContactPersoonRol = {
  /**
   * Email
   * Elektronich postadres waaronder de contactpersoon in de regel bereikbaar is.
   * @format email
   * @maxLength 254
   */
  emailadres?: string;
  /**
   * functie
   * De aanduiding van de taken, rechten en plichten die de contactpersoon heeft binnen de organisatie van BETROKKENE.
   * @maxLength 50
   */
  functie?: string;
  /**
   * telefoonnummer
   * Telefoonnummer waaronder de contactpersoon in de regel bereikbaar is.
   * @maxLength 20
   */
  telefoonnummer?: string;
  /**
   * naam
   * De opgemaakte naam van de contactpersoon namens de BETROKKENE.
   * @maxLength 40
   */
  naam: string;
} | null;

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

/** GeoJSONGeometry */
export type GeoJSONGeometry =
  | Point
  | MultiPoint
  | LineString
  | MultiLineString
  | Polygon
  | MultiPolygon
  | GeometryCollection;

export interface GeoWithin {
  /** within */
  within?: GeoJSONGeometry;
}

/**
 * Geometry
 * GeoJSON geometry
 */
export interface Geometry {
  /** The geometry type */
  type: GeometryTypeEnum;
}

/**
 * Geometry collection
 * GeoJSON multi-polygon geometry
 */
export type GeometryCollection = Geometry & {
  geometries: Geometry[];
};

export enum GeometryTypeEnum {
  Point = "Point",
  MultiPoint = "MultiPoint",
  LineString = "LineString",
  MultiLineString = "MultiLineString",
  Polygon = "Polygon",
  MultiPolygon = "MultiPolygon",
  Feature = "Feature",
  FeatureCollection = "FeatureCollection",
  GeometryCollection = "GeometryCollection",
}

export enum GeslachtsaanduidingEnum {
  M = "m",
  V = "v",
  O = "o",
}

export enum IndicatieMachtigingEnum {
  Gemachtigde = "gemachtigde",
  Machtiginggever = "machtiginggever",
}

export enum InnRechtsvormEnum {
  BeslotenVennootschap = "besloten_vennootschap",
  CooperatieEuropeesEconomischeSamenwerking = "cooperatie_europees_economische_samenwerking",
  EuropeseCooperatieveVenootschap = "europese_cooperatieve_venootschap",
  EuropeseNaamlozeVennootschap = "europese_naamloze_vennootschap",
  KerkelijkeOrganisatie = "kerkelijke_organisatie",
  NaamlozeVennootschap = "naamloze_vennootschap",
  OnderlingeWaarborgMaatschappij = "onderlinge_waarborg_maatschappij",
  OverigPrivaatrechtelijkeRechtspersoon = "overig_privaatrechtelijke_rechtspersoon",
  Stichting = "stichting",
  Vereniging = "vereniging",
  VerenigingVanEigenaars = "vereniging_van_eigenaars",
  PubliekrechtelijkeRechtspersoon = "publiekrechtelijke_rechtspersoon",
  VennootschapOnderFirma = "vennootschap_onder_firma",
  Maatschap = "maatschap",
  Rederij = "rederij",
  CommanditaireVennootschap = "commanditaire_vennootschap",
  KapitaalvennootschapBinnenEer = "kapitaalvennootschap_binnen_eer",
  OverigeBuitenlandseRechtspersoonVennootschap = "overige_buitenlandse_rechtspersoon_vennootschap",
  KapitaalvennootschapBuitenEer = "kapitaalvennootschap_buiten_eer",
}

export interface KlantContact {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * identificatie
   * De unieke aanduiding van een KLANTCONTACT
   * @maxLength 14
   */
  identificatie?: string;
  /**
   * datumtijd
   * De datum en het tijdstip waarop het KLANTCONTACT begint
   * @format date-time
   */
  datumtijd: string;
  /**
   * kanaal
   * Het communicatiekanaal waarlangs het KLANTCONTACT gevoerd wordt
   * @maxLength 20
   */
  kanaal?: string;
  /**
   * onderwerp
   * Het onderwerp waarover contact is geweest met de klant.
   * @maxLength 200
   */
  onderwerp?: string;
  /**
   * toelichting
   * Een toelichting die inhoudelijk het contact met de klant beschrijft.
   * @maxLength 1000
   */
  toelichting?: string;
}

/**
 * Line-string
 * GeoJSON line-string geometry
 */
export type LineString = Geometry & {
  /** @minItems 2 */
  coordinates: Point2D[];
};

/**
 * Multi-line string
 * GeoJSON multi-line-string geometry
 */
export type MultiLineString = Geometry & {
  coordinates: Point2D[][];
};

/**
 * MultiPoint
 * GeoJSON multi-point geometry
 */
export type MultiPoint = Geometry & {
  coordinates: Point2D[];
};

/**
 * Multi-polygon
 * GeoJSON multi-polygon geometry
 */
export type MultiPolygon = Geometry & {
  coordinates: Point2D[][][];
};

export type NullEnum = null;

export interface ObjectAdres {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * wpl woonplaats naam
   * @maxLength 80
   */
  wplWoonplaatsNaam: string;
  /**
   * gor openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  gorOpenbareRuimteNaam: string;
  /**
   * huisnummer
   * @min 0
   * @max 99999
   */
  huisnummer: number;
  /**
   * huisletter
   * @maxLength 1
   */
  huisletter?: string;
  /**
   * huisnummertoevoeging
   * @maxLength 4
   */
  huisnummertoevoeging?: string;
  /**
   * postcode
   * @maxLength 7
   */
  postcode?: string;
}

export interface ObjectBuurt {
  /**
   * buurt code
   * De code behorende bij de naam van de buurt
   * @maxLength 2
   */
  buurtCode: string;
  /**
   * buurt naam
   * De naam van de buurt, zoals die door het CBS wordt gebruikt.
   * @maxLength 40
   */
  buurtNaam: string;
  /**
   * gem gemeente code
   * Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
   * @maxLength 4
   */
  gemGemeenteCode: string;
  /**
   * wyk wijk code
   * De code behorende bij de naam van de wijk
   * @maxLength 2
   */
  wykWijkCode: string;
}

export interface ObjectGemeente {
  /**
   * gemeente naam
   * De officiële door de gemeente vastgestelde gemeentenaam.
   * @maxLength 80
   */
  gemeenteNaam: string;
  /**
   * gemeente code
   * Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
   * @maxLength 4
   */
  gemeenteCode: string;
}

export interface ObjectGemeentelijkeOpenbareRuimte {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  openbareRuimteNaam: string;
}

export interface ObjectHuishouden {
  /**
   * nummer
   * Uniek identificerend administratienummer van een huishouden zoals toegekend door de gemeente waarin het huishouden woonachtig is.
   * @maxLength 12
   */
  nummer: string;
  /** isGehuisvestIn */
  isGehuisvestIn?: ObjectTerreinGebouwdObject | null;
}

export interface ObjectInrichtingselement {
  /**
   * type
   * Specificatie van de aard van het inrichtingselement.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `bak` - Bak
   * * `bord` - Bord
   * * `installatie` - Installatie
   * * `kast` - Kast
   * * `mast` - Mast
   * * `paal` - Paal
   * * `sensor` - Sensor
   * * `straatmeubilair` - Straatmeubilair
   * * `waterinrichtingselement` - Waterinrichtingselement
   * * `weginrichtingselement` - Weginrichtingselement
   */
  type: ObjectInrichtingselementTypeEnum;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * De benaming van het OBJECT
   * @maxLength 500
   */
  naam?: string;
}

export enum ObjectInrichtingselementTypeEnum {
  Bak = "bak",
  Bord = "bord",
  Installatie = "installatie",
  Kast = "kast",
  Mast = "mast",
  Paal = "paal",
  Sensor = "sensor",
  Straatmeubilair = "straatmeubilair",
  Waterinrichtingselement = "waterinrichtingselement",
  Weginrichtingselement = "weginrichtingselement",
}

export interface ObjectKadastraleOnroerendeZaak {
  /**
   * kadastrale identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  kadastraleIdentificatie: string;
  /**
   * kadastrale aanduiding
   * De typering van de kadastrale aanduiding van een onroerende zaak conform Kadaster
   * @maxLength 1000
   */
  kadastraleAanduiding: string;
}

export interface ObjectKunstwerkdeel {
  /**
   * type
   * Specificatie van het soort Kunstwerk waartoe het kunstwerkdeel behoort.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `keermuur` - Keermuur
   * * `overkluizing` - Overkluizing
   * * `duiker` - Duiker
   * * `faunavoorziening` - Faunavoorziening
   * * `vispassage` - Vispassage
   * * `bodemval` - Bodemval
   * * `coupure` - Coupure
   * * `ponton` - Ponton
   * * `voorde` - Voorde
   * * `hoogspanningsmast` - Hoogspanningsmast
   * * `gemaal` - Gemaal
   * * `perron` - Perron
   * * `sluis` - Sluis
   * * `strekdam` - Strekdam
   * * `steiger` - Steiger
   * * `stuw` - Stuw
   */
  type: ObjectKunstwerkdeelTypeEnum;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * @maxLength 80
   */
  naam: string;
}

export enum ObjectKunstwerkdeelTypeEnum {
  Keermuur = "keermuur",
  Overkluizing = "overkluizing",
  Duiker = "duiker",
  Faunavoorziening = "faunavoorziening",
  Vispassage = "vispassage",
  Bodemval = "bodemval",
  Coupure = "coupure",
  Ponton = "ponton",
  Voorde = "voorde",
  Hoogspanningsmast = "hoogspanningsmast",
  Gemaal = "gemaal",
  Perron = "perron",
  Sluis = "sluis",
  Strekdam = "strekdam",
  Steiger = "steiger",
  Stuw = "stuw",
}

export interface ObjectMaatschappelijkeActiviteit {
  /**
   * kvk nummer
   * Landelijk uniek identificerend administratienummer van een MAATSCHAPPELIJKE ACTIVITEIT zoals toegewezen door de Kamer van Koophandel (KvK).
   * @maxLength 8
   */
  kvkNummer: string;
  /**
   * handelsnaam
   * De naam waaronder de onderneming handelt.
   * @maxLength 200
   */
  handelsnaam: string;
}

export interface ObjectOpenbareRuimte {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * wpl woonplaats naam
   * @maxLength 80
   */
  wplWoonplaatsNaam: string;
  /**
   * gor openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  gorOpenbareRuimteNaam: string;
}

export interface ObjectOverige {
  /** overige data */
  overigeData: Record<string, any>;
}

export interface ObjectPand {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
}

export interface ObjectSpoorbaandeel {
  /**
   * type
   * Specificatie van het soort Spoorbaan
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `breedspoor` - breedspoor
   * * `normaalspoor` - normaalspoor
   * * `smalspoor` - smalspoor
   * * `spoorbaan` - spoorbaan
   */
  type: ObjectSpoorbaandeelTypeEnum;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * De benaming van het OBJECT
   * @maxLength 500
   */
  naam?: string;
}

export enum ObjectSpoorbaandeelTypeEnum {
  Breedspoor = "breedspoor",
  Normaalspoor = "normaalspoor",
  Smalspoor = "smalspoor",
  Spoorbaan = "spoorbaan",
}

export interface ObjectTerreinGebouwdObject {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /** adresAanduidingGrp */
  adresAanduidingGrp?: TerreinGebouwdObjectAdres | null;
}

export interface ObjectTerreindeel {
  /**
   * type
   * @maxLength 40
   */
  type: string;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * De benaming van het OBJECT
   * @maxLength 500
   */
  naam?: string;
}

export enum ObjectTypeEnum {
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

export interface ObjectTypeOverigeDefinitie {
  /**
   * Objecttype-URL
   * URL-referentie naar de objecttype resource in een API. Deze resource moet de [JSON-schema](https://json-schema.org/)-definitie van het objecttype bevatten.
   * @format uri
   * @maxLength 1000
   */
  url: string;
  /**
   * schema-pad
   * Een geldige [jq](http://stedolan.github.io/jq/) expressie. Dit wordt gecombineerd met de resource uit het `url`-attribuut om het schema van het objecttype uit te lezen. Bijvoorbeeld: `.jsonSchema`.
   * @maxLength 100
   */
  schema: string;
  /**
   * objectgegevens-pad
   * Een geldige [jq](http://stedolan.github.io/jq/) expressie. Dit wordt gecombineerd met de JSON data uit de OBJECT url om de objectgegevens uit te lezen en de vorm van de gegevens tegen het schema te valideren. Bijvoorbeeld: `.record.data`.
   * @maxLength 100
   */
  objectData: string;
}

export interface ObjectWaterdeel {
  /**
   * type waterdeel
   * Specificatie van het soort water
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `zee` - Zee
   * * `waterloop` - Waterloop
   * * `watervlakte` - Watervlakte
   * * `greppel_droge_sloot` - Greppel, droge sloot
   */
  typeWaterdeel: TypeWaterdeelEnum;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * De benaming van het OBJECT
   * @maxLength 500
   */
  naam?: string;
}

export interface ObjectWegdeel {
  /**
   * type
   * @maxLength 100
   */
  type: string;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * naam
   * De benaming van het OBJECT
   * @maxLength 500
   */
  naam?: string;
}

export interface ObjectWijk {
  /**
   * wijk code
   * De code behorende bij de naam van de wijk.
   * @maxLength 2
   */
  wijkCode: string;
  /**
   * wijk naam
   * De naam van de wijk, zoals die door het CBS wordt gebruikt.
   * @maxLength 40
   */
  wijkNaam: string;
  /**
   * gem gemeente code
   * Een numerieke aanduiding waarmee een Nederlandse gemeente uniek wordt aangeduid
   * @maxLength 4
   */
  gemGemeenteCode: string;
}

export interface ObjectWoonplaats {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * woonplaats naam
   * De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
   * @maxLength 80
   */
  woonplaatsNaam: string;
}

export interface ObjectWozDeelobject {
  /**
   * nummer woz deel object
   * Uniek identificatienummer voor het deelobject binnen een WOZ-object.
   * @maxLength 6
   */
  nummerWozDeelObject: string;
  /** isOnderdeelVan */
  isOnderdeelVan?: ObjectWozObject;
}

export interface ObjectWozObject {
  /**
   * woz object nummer
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  wozObjectNummer: string;
  /** aanduidingWozObject */
  aanduidingWozObject?: WozObjectAdres | null;
}

export interface ObjectWozWaarde {
  /**
   * waardepeildatum
   * De datum waarnaar de waarde van het WOZ-object wordt bepaald.
   * @maxLength 9
   */
  waardepeildatum: string;
  /** isVoor */
  isVoor?: ObjectWozObject;
}

export interface ObjectZakelijkRecht {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  identificatie: string;
  /**
   * avg aard
   * aanduiding voor de aard van het recht
   * @maxLength 1000
   */
  avgAard: string;
  /** heeftBetrekkingOp */
  heeftBetrekkingOp?: ObjectKadastraleOnroerendeZaak;
  /** heeftAlsGerechtigde */
  heeftAlsGerechtigde?: ZakelijkRechtHeeftAlsGerechtigde;
}

/** Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK */
export type Opschorting = {
  /**
   * indicatie opschorting
   * Aanduiding of de behandeling van de ZAAK tijdelijk is opgeschort.
   */
  indicatie: boolean;
  /**
   * reden opschorting
   * Omschrijving van de reden voor het opschorten van de behandeling van de zaak.
   * @maxLength 200
   */
  reden: string;
} | null;

export interface PaginatedKlantContactList {
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
  results?: KlantContact[];
}

export interface PaginatedResultaatList {
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
  results?: Resultaat[];
}

export interface PaginatedRolList {
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
  results?: Rol[];
}

export interface PaginatedStatusList {
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
  results?: Status[];
}

export interface PaginatedZaakList {
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
  results?: ZaakExpanded[];
}

export interface PaginatedZaakObjectList {
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
  results?: ZaakObject[];
}

export interface PatchedResultaat {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid?: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak?: string;
  /**
   * resultaattype
   * URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  resultaattype?: string;
  /**
   * toelichting
   * Een toelichting op wat het resultaat van de zaak inhoudt.
   * @maxLength 1000
   */
  toelichting?: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface PatchedZaak {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid?: string;
  /**
   * identificatie
   * De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @maxLength 9
   */
  bronorganisatie?: string;
  /**
   * omschrijving
   * Een korte omschrijving van de zaak.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * toelichting
   * Een toelichting op de zaak.
   * @maxLength 1000
   */
  toelichting?: string;
  /**
   * zaaktype
   * URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
   * @format uri
   * @maxLength 1000
   */
  zaaktype?: string;
  /**
   * registratiedatum
   * De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
   * @format date
   */
  registratiedatum?: string;
  /**
   * verantwoordelijke organisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @maxLength 9
   */
  verantwoordelijkeOrganisatie?: string;
  /**
   * startdatum
   * De datum waarop met de uitvoering van de zaak is gestart
   * @format date
   */
  startdatum?: string;
  /**
   * einddatum
   * De datum waarop de uitvoering van de zaak afgerond is.
   * @format date
   */
  einddatum?: string | null;
  /**
   * einddatum gepland
   * De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
   * @format date
   */
  einddatumGepland?: string | null;
  /**
   * uiterlijke einddatum afdoening
   * De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
   * @format date
   */
  uiterlijkeEinddatumAfdoening?: string | null;
  /**
   * publicatiedatum
   * Datum waarop (het starten van) de zaak gepubliceerd is of wordt.
   * @format date
   */
  publicatiedatum?: string | null;
  /**
   * communicatiekanaal
   * Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen.
   * @format uri
   * @maxLength 1000
   */
  communicatiekanaal?: string;
  /**
   * producten of diensten
   * De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn.
   */
  productenOfDiensten?: string[];
  /**
   * Vertrouwlijkheidaanduiding
   * Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft.
   */
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum;
  /**
   * betalingsindicatie
   * Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten.
   * * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald.
   * * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald.
   * * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald.
   */
  betalingsindicatie?: BetalingsindicatieEnum | BlankEnum;
  /**
   * betalingsindicatieWeergave
   * Uitleg bij `betalingsindicatie`.
   */
  betalingsindicatieWeergave?: string;
  /**
   * laatste betaaldatum
   * De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak.
   * @format date-time
   */
  laatsteBetaaldatum?: string | null;
  /**
   * zaakgeometrie
   * Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON.
   */
  zaakgeometrie?: GeoJSONGeometry | null;
  /**
   * verlenging
   * Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK
   */
  verlenging?: Verlenging | null;
  /**
   * opschorting
   * Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK
   */
  opschorting?: Opschorting | null;
  /**
   * selectielijstklasse
   * URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak.
   * @format uri
   * @maxLength 1000
   */
  selectielijstklasse?: string;
  /**
   * Is deelzaak van
   * URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  hoofdzaak?: string | null;
  /**
   * is deelzaak van
   * URL-referenties naar deel ZAAKen.
   * @uniqueItems true
   */
  deelzaken?: string[];
  /**
   * zaak
   * Een lijst van relevante andere zaken.
   */
  relevanteAndereZaken?: RelevanteZaak[];
  /**
   * zaak
   * @uniqueItems true
   */
  eigenschappen?: string[];
  /**
   * zaak
   * @uniqueItems true
   */
  rollen?: string[];
  /**
   * status
   * Indien geen status bekend is, dan is de waarde 'null'
   * @format uri
   */
  status?: string | null;
  /**
   * zaak
   * @uniqueItems true
   */
  zaakinformatieobjecten?: string[];
  /**
   * zaak
   * @uniqueItems true
   */
  zaakobjecten?: string[];
  /**
   * zaak
   * Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`.
   */
  kenmerken?: ZaakKenmerk[];
  /**
   * archiefnominatie
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
   * * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
   */
  archiefnominatie?: ArchiefnominatieEnum | BlankEnum | NullEnum | null;
  /**
   * archiefstatus
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
   * * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
   * * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
   * * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
   */
  archiefstatus?: ArchiefstatusEnum;
  /**
   * archiefactiedatum
   * De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
   * @format date
   */
  archiefactiedatum?: string | null;
  /**
   * resultaat
   * URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null'
   * @format uri
   */
  resultaat?: string | null;
  /**
   * opdrachtgevende organisatie
   * De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft.
   * @maxLength 9
   */
  opdrachtgevendeOrganisatie?: string;
  /**
   * Procesobjectaard
   * Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft.
   * @maxLength 200
   */
  processobjectaard?: string | null;
  /**
   * startdatum bewaartermijn
   * De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden.
   * @format date
   */
  startdatumBewaartermijn?: string | null;
  /**
   * processobject
   * Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn.
   */
  processobject?: Processobject | null;
}

/**
 * A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
 * of primary key relationships.  Specifically:
 *
 * * A 'url' field is included instead of the 'id' field.
 * * Relationships to other instances are hyperlinks, instead of primary keys.
 *
 * NOTE: this only works with DRF 3.1.0 and above.
 */
export interface PatchedZaakEigenschap {
  /**
   * url
   * @format uri
   */
  url?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid?: string;
  /**
   * zaak
   * @format uri
   */
  zaak?: string;
  /**
   * eigenschap
   * URL-referentie naar de EIGENSCHAP (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  eigenschap?: string;
  /**
   *  naam
   * De naam van de EIGENSCHAP (overgenomen uit de Catalogi API).
   */
  naam?: string;
  /** waarde */
  waarde?: string;
}

export interface PatchedZaakInformatieObject {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid?: string;
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
   * @format uri
   * @maxLength 1000
   */
  informatieobject?: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak?: string;
  /** aardRelatieWeergave */
  aardRelatieWeergave?: AardRelatieWeergaveEnum;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is.
   * @maxLength 200
   */
  titel?: string;
  /**
   * beschrijving
   * Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT.
   */
  beschrijving?: string;
  /**
   * registratiedatum
   * De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd.
   * @format date-time
   */
  registratiedatum?: string;
  /**
   * vernietigingsdatum
   * De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden.
   * @format date-time
   */
  vernietigingsdatum?: string | null;
  /**
   * status
   * De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  status?: string | null;
}

export type PatchedZaakObject = BasePatchedZaakObject &
  (
    | BasePatchedZaakObjectObjectTypeMapping<"adres", AdresPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"besluit", BesluitPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"buurt", BuurtPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"enkelvoudig_document", EnkelvoudigDocumentPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"gemeente", GemeentePatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<
        "gemeentelijke_openbare_ruimte",
        GemeentelijkeOpenbareRuimtePatchedZaakObject
      >
    | BasePatchedZaakObjectObjectTypeMapping<"huishouden", HuishoudenPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"inrichtingselement", InrichtingselementPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"kadastrale_onroerende_zaak", KadastraleOnroerendeZaakPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"kunstwerkdeel", KunstwerkdeelPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"maatschappelijke_activiteit", MaatschappelijkeActiviteitPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"medewerker", MedewerkerPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"natuurlijk_persoon", NatuurlijkPersoonPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"niet_natuurlijk_persoon", NietNatuurlijkPersoonPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"openbare_ruimte", OpenbareRuimtePatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"organisatorische_eenheid", OrganisatorischeEenheidPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"pand", PandPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"spoorbaandeel", SpoorbaandeelPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"status", StatusPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"terreindeel", TerreindeelPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"terrein_gebouwd_object", TerreinGebouwdObjectPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"vestiging", VestigingPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"waterdeel", WaterdeelPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"wegdeel", WegdeelPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"wijk", WijkPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"woonplaats", WoonplaatsPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"woz_deelobject", WozDeelobjectPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"woz_object", WozObjectPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"woz_waarde", WozWaardePatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"zakelijk_recht", ZakelijkRechtPatchedZaakObject>
    | BasePatchedZaakObjectObjectTypeMapping<"overige", OverigePatchedZaakObject>
  );

/**
 * Point
 * GeoJSON point geometry
 */
export type Point = Geometry & {
  coordinates: Point2D;
};

/**
 * Point2D
 * @maxItems 2
 * @minItems 2
 */
export type Point2D = number[];

/**
 * Polygon
 * GeoJSON polygon geometry
 */
export type Polygon = Geometry & {
  coordinates: Point2D[][];
};

/** Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn. */
export type Processobject = {
  /**
   * datumkenmerk
   * De naam van de attribuutsoort van het procesobject dat bepalend is voor het einde van de procestermijn.
   * @maxLength 250
   */
  datumkenmerk: string;
  /**
   * identificatie
   * De unieke aanduiding van het procesobject.
   * @maxLength 250
   */
  identificatie: string;
  /**
   * objecttype
   * Het soort object dat het procesobject representeert.
   * @maxLength 250
   */
  objecttype: string;
  /**
   * registratie
   * De naam van de registratie waarvan het procesobject deel uit maakt.
   * @maxLength 250
   */
  registratie: string;
} | null;

export interface RelevanteZaak {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   * @maxLength 1000
   */
  url: string;
  /**
   * aard relatie
   * Benamingen van de aard van de relaties van andere zaken tot (onderhanden) zaken.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `vervolg` - De andere zaak gaf aanleiding tot het starten van de onderhanden zaak.
   * * `onderwerp` - De andere zaak is relevant voor cq. is onderwerp van de onderhanden zaak.
   * * `bijdrage` - Aan het bereiken van de uitkomst van de andere zaak levert de onderhanden zaak een bijdrage.
   */
  aardRelatie: AardRelatieEnum;
}

export interface Resultaat {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * resultaattype
   * URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  resultaattype: string;
  /**
   * toelichting
   * Een toelichting op wat het resultaat van de zaak inhoudt.
   * @maxLength 1000
   */
  toelichting?: string;
}

export type ResultaatExpanded = Resultaat & {
  _expand?: ResultaatEmbedded;
};

export interface ResultaatEmbedded {
  zaak?: ZaakExpanded;
  resultaattype?: any;
}

export interface Rol {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * betrokkene
   * URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
   * @format uri
   * @maxLength 1000
   */
  betrokkene?: string;
  /**
   * betrokkene type
   * Type van de `betrokkene`.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `natuurlijk_persoon` - Natuurlijk persoon
   * * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon
   * * `vestiging` - Vestiging
   * * `organisatorische_eenheid` - Organisatorische eenheid
   * * `medewerker` - Medewerker
   */
  betrokkeneType: BetrokkeneTypeEnum;
  /**
   * afwijkende naam betrokkene
   * De naam van de betrokkene waaronder deze in relatie tot de zaak aangesproken wil worden.
   * @maxLength 625
   */
  afwijkendeNaamBetrokkene?: string;
  /**
   * roltype
   * URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK.
   * @format uri
   * @maxLength 1000
   */
  roltype: string;
  /**
   * omschrijving
   * Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE.
   */
  omschrijving: string;
  /**
   * omschrijving generiek
   * Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
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
  omschrijvingGeneriek: string;
  /**
   * roltoelichting
   * @maxLength 1000
   */
  roltoelichting: string;
  /**
   * registratiedatum
   * De datum waarop dit object is geregistreerd.
   * @format date-time
   */
  registratiedatum: string;
  /**
   * indicatie machtiging
   * Indicatie machtiging
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `gemachtigde` - De betrokkene in de rol bij de zaak is door een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
   * * `machtiginggever` - De betrokkene in de rol bij de zaak heeft een andere betrokkene bij dezelfde zaak gemachtigd om namens hem of haar te handelen
   */
  indicatieMachtiging?: IndicatieMachtigingEnum | BlankEnum;
  /**
   * contactpersoonRol
   * De gegevens van de persoon die anderen desgevraagd in contact brengt met medewerkers van de BETROKKENE, een NIET-NATUURLIJK PERSOON of VESTIGING zijnde, of met BETROKKENE zelf, een NATUURLIJK PERSOON zijnde , vanuit het belang van BETROKKENE in haar ROL bij een ZAAK.
   */
  contactpersoonRol?: ContactPersoonRol | null;
  /**
   * statussen
   * De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
   * @uniqueItems true
   */
  statussen: string[];
  _expand?: RolEmbedded;
}

export type RolExpanded = Rol & {
  _expand?: RolEmbedded;
};

export interface RolEmbedded {
  /** @example {} */
  zaak?: ZaakExpanded;
  roltype?: any;
  statussen?: StatusExpanded[];
}

export interface RolMedewerker {
  /**
   * identificatie
   * Een korte unieke aanduiding van de MEDEWERKER.
   * @maxLength 24
   */
  identificatie?: string;
  /**
   * achternaam
   * De achternaam zoals de MEDEWERKER die in het dagelijkse verkeer gebruikt.
   * @maxLength 200
   */
  achternaam?: string;
  /**
   * voorletters
   * De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
   * @maxLength 20
   */
  voorletters?: string;
  /**
   * voorvoegsel achternaam
   * Dat deel van de geslachtsnaam dat voorkomt in Tabel 36 (GBA), voorvoegseltabel, en door een spatie van de geslachtsnaam is
   * @maxLength 10
   */
  voorvoegselAchternaam?: string;
}

export interface RolNatuurlijkPersoon {
  /**
   * inp bsn
   * Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
   * @maxLength 9
   */
  inpBsn?: string;
  /**
   * anp identificatie
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
   * @maxLength 17
   */
  anpIdentificatie?: string;
  /**
   * inp a nummer
   * Het administratienummer van de persoon, bedoeld in de Wet BRP
   * @maxLength 10
   * @pattern ^[1-9][0-9]{9}$
   */
  inpA_nummer?: string;
  /**
   * geslachtsnaam
   * De stam van de geslachtsnaam.
   * @maxLength 200
   */
  geslachtsnaam?: string;
  /**
   * voorvoegsel geslachtsnaam
   * @maxLength 80
   */
  voorvoegselGeslachtsnaam?: string;
  /**
   * voorletters
   * De verzameling letters die gevormd wordt door de eerste letter van alle in volgorde voorkomende voornamen.
   * @maxLength 20
   */
  voorletters?: string;
  /**
   * voornamen
   * Voornamen bij de naam die de persoon wenst te voeren.
   * @maxLength 200
   */
  voornamen?: string;
  /**
   * geslachtsaanduiding
   * Een aanduiding die aangeeft of de persoon een man of een vrouw is, of dat het geslacht nog onbekend is.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `m` - Man
   * * `v` - Vrouw
   * * `o` - Onbekend
   */
  geslachtsaanduiding?: GeslachtsaanduidingEnum | BlankEnum;
  /**
   * geboortedatum
   * @maxLength 18
   */
  geboortedatum?: string;
  /** verblijfsadres */
  verblijfsadres?: VerblijfsAdres | null;
  /** subVerblijfBuitenland */
  subVerblijfBuitenland?: SubVerblijfBuitenland | null;
}

export interface RolNietNatuurlijkPersoon {
  /**
   * inn nnp id
   * Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
   * @maxLength 9
   */
  innNnpId?: string;
  /**
   * ann identificatie
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
   * @maxLength 17
   */
  annIdentificatie?: string;
  /**
   * statutaire naam
   * Naam van de niet-natuurlijke persoon zoals deze is vastgelegd in de statuten (rechtspersoon) of in de vennootschapsovereenkomst is overeengekomen (Vennootschap onder firma of Commanditaire vennootschap).
   * @maxLength 500
   */
  statutaireNaam?: string;
  /**
   * inn rechtsvorm
   * De juridische vorm van de NIET-NATUURLIJK PERSOON.
   */
  innRechtsvorm?: InnRechtsvormEnum | BlankEnum;
  /**
   * bezoekadres
   * De gegevens over het adres van de NIET-NATUURLIJK PERSOON
   * @maxLength 1000
   */
  bezoekadres?: string;
  /** subVerblijfBuitenland */
  subVerblijfBuitenland?: SubVerblijfBuitenland | null;
}

export interface RolOrganisatorischeEenheid {
  /**
   * identificatie
   * Een korte identificatie van de organisatorische eenheid.
   * @maxLength 24
   */
  identificatie?: string;
  /**
   * naam
   * De feitelijke naam van de organisatorische eenheid.
   * @maxLength 50
   */
  naam?: string;
  /**
   * is gehuisvest in
   * @maxLength 24
   */
  isGehuisvestIn?: string;
}

export interface RolVestiging {
  /**
   * vestigings nummer
   * Een korte unieke aanduiding van de Vestiging.
   * @maxLength 24
   */
  vestigingsNummer?: string;
  /**
   * handelsnaam
   * De naam van de vestiging waaronder gehandeld wordt.
   */
  handelsnaam?: string[];
  /** verblijfsadres */
  verblijfsadres?: VerblijfsAdres | null;
  /** subVerblijfBuitenland */
  subVerblijfBuitenland?: SubVerblijfBuitenland | null;
  /**
   * kvk nummer
   * Een uniek nummer gekoppeld aan de onderneming.
   * @maxLength 8
   */
  kvkNummer?: string;
}

export interface Status {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * statustype
   * URL-referentie naar het STATUSTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  statustype: string;
  /**
   * datum status gezet
   * De datum waarop de ZAAK de status heeft verkregen.
   * @format date-time
   */
  datumStatusGezet: string;
  /**
   * statustoelichting
   * Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
   * @maxLength 1000
   */
  statustoelichting?: string;
  /**
   * indicatieLaatstGezetteStatus
   * Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak.
   */
  indicatieLaatstGezetteStatus: boolean;
  /**
   * Gezet door
   * De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
   * @format uri
   * @maxLength 200
   */
  gezetdoor?: string;
  /**
   * zaakInformatieobjecten
   * @uniqueItems true
   */
  zaakinformatieobjecten: string[];
}

export type StatusExpanded = Status & {
  _expand?: StatusEmbedded;
};

export interface StatusEmbedded {
  statustype?: any;
  gezetdoor?: Rol;
  zaakinformatieobjecten?: ZaakInformatieObject[];
}

export interface StatusRequestbody {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * statustype
   * URL-referentie naar het STATUSTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  statustype: string;
  /**
   * datum status gezet
   * De datum waarop de ZAAK de status heeft verkregen.
   * @format date-time
   */
  datumStatusGezet: string;
  /**
   * statustoelichting
   * Een, voor de initiator van de zaak relevante, toelichting op de status van een zaak.
   * @maxLength 1000
   */
  statustoelichting?: string;
  /**
   * indicatieLaatstGezetteStatus
   * Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak.
   */
  indicatieLaatstGezetteStatus: boolean;
  /**
   * Gezet door
   * De BETROKKENE die in zijn/haar ROL in een ZAAK heeft geregistreerd dat STATUSsen in die ZAAK bereikt zijn.
   * @format uri
   * @maxLength 200
   */
  gezetdoor?: string;
}

export interface SubVerblijfBuitenland {
  /**
   * lnd landcode
   * De code, behorende bij de landnaam, zoals opgenomen in de Land/Gebied-tabel van de BRP.
   * @maxLength 4
   */
  lndLandcode: string;
  /**
   * lnd landnaam
   * De naam van het land, zoals opgenomen in de Land/Gebied-tabel van de BRP.
   * @maxLength 40
   */
  lndLandnaam: string;
  /**
   * sub adres buitenland 1
   * @maxLength 35
   */
  subAdresBuitenland_1?: string;
  /**
   * sub adres buitenland 2
   * @maxLength 35
   */
  subAdresBuitenland_2?: string;
  /**
   * sub adres buitenland 3
   * @maxLength 35
   */
  subAdresBuitenland_3?: string;
}

export interface TerreinGebouwdObjectAdres {
  /**
   * num identificatie
   * @maxLength 100
   */
  numIdentificatie?: string;
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  oaoIdentificatie: string;
  /**
   * wpl woonplaats naam
   * @maxLength 80
   */
  wplWoonplaatsNaam: string;
  /**
   * gor openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  gorOpenbareRuimteNaam: string;
  /**
   * postcode
   * @maxLength 7
   */
  aoaPostcode?: string;
  /**
   * huisnummer
   * @min 0
   * @max 99999
   */
  aoaHuisnummer: number;
  /**
   * huisletter
   * @maxLength 1
   */
  aoaHuisletter?: string;
  /**
   * huisnummertoevoeging
   * @maxLength 4
   */
  aoaHuisnummertoevoeging?: string;
  /**
   * locatie aanduiding
   * @maxLength 100
   */
  ogoLocatieAanduiding?: string;
}

export enum TypeWaterdeelEnum {
  Zee = "zee",
  Waterloop = "waterloop",
  Watervlakte = "watervlakte",
  GreppelDrogeSloot = "greppel_droge_sloot",
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

export interface VerblijfsAdres {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  aoaIdentificatie: string;
  /**
   * wpl woonplaats naam
   * @maxLength 80
   */
  wplWoonplaatsNaam: string;
  /**
   * gor openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  gorOpenbareRuimteNaam: string;
  /**
   * postcode
   * @maxLength 7
   */
  aoaPostcode?: string;
  /**
   * huisnummer
   * @min 0
   * @max 99999
   */
  aoaHuisnummer: number;
  /**
   * huisletter
   * @maxLength 1
   */
  aoaHuisletter?: string;
  /**
   * huisnummertoevoeging
   * @maxLength 4
   */
  aoaHuisnummertoevoeging?: string;
  /**
   * locatie omschrijving
   * @maxLength 1000
   */
  inpLocatiebeschrijving?: string;
}

/** Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK */
export type Verlenging = {
  /**
   * reden verlenging
   * Omschrijving van de reden voor het verlengen van de behandeling van de zaak.
   * @maxLength 200
   */
  reden: string;
  /**
   * duur verlenging
   * Het aantal werkbare dagen waarmee de doorlooptijd van de behandeling van de ZAAK is verlengd (of verkort) ten opzichte van de eerder gecommuniceerde doorlooptijd.
   * @format duration
   */
  duur: string;
} | null;

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

export interface Wijzigingen {
  /**
   * oud
   * Volledige JSON body van het object zoals dat bestond voordat de actie heeft plaatsgevonden.
   */
  oud?: Record<string, any>;
  /**
   * nieuw
   * Volledige JSON body van het object na de actie.
   */
  nieuw?: Record<string, any>;
}

export interface WozObjectAdres {
  /**
   * identificatie
   * De unieke identificatie van het OBJECT
   * @maxLength 100
   */
  aoaIdentificatie: string;
  /**
   * wpl woonplaats naam
   * @maxLength 80
   */
  wplWoonplaatsNaam: string;
  /**
   * gor openbare ruimte naam
   * Een door het bevoegde gemeentelijke orgaan aan een OPENBARE RUIMTE toegekende benaming
   * @maxLength 80
   */
  gorOpenbareRuimteNaam: string;
  /**
   * postcode
   * @maxLength 7
   */
  aoaPostcode?: string;
  /**
   * huisnummer
   * @min 0
   * @max 99999
   */
  aoaHuisnummer: number;
  /**
   * huisletter
   * @maxLength 1
   */
  aoaHuisletter?: string;
  /**
   * huisnummertoevoeging
   * @maxLength 4
   */
  aoaHuisnummertoevoeging?: string;
  /**
   * locatie omschrijving
   * @maxLength 1000
   */
  locatieOmschrijving?: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface Zaak {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * identificatie
   * De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * omschrijving
   * Een korte omschrijving van de zaak.
   * @maxLength 80
   */
  omschrijving?: string;
  /**
   * toelichting
   * Een toelichting op de zaak.
   * @maxLength 1000
   */
  toelichting?: string;
  /**
   * zaaktype
   * URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
   * @format uri
   * @maxLength 1000
   */
  zaaktype: string;
  /**
   * registratiedatum
   * De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
   * @format date
   */
  registratiedatum?: string;
  /**
   * verantwoordelijke organisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die eindverantwoordelijk is voor de behandeling van de zaak. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @maxLength 9
   */
  verantwoordelijkeOrganisatie: string;
  /**
   * startdatum
   * De datum waarop met de uitvoering van de zaak is gestart
   * @format date
   */
  startdatum: string;
  /**
   * einddatum
   * De datum waarop de uitvoering van de zaak afgerond is.
   * @format date
   */
  einddatum: string | null;
  /**
   * einddatum gepland
   * De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
   * @format date
   */
  einddatumGepland?: string | null;
  /**
   * uiterlijke einddatum afdoening
   * De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
   * @format date
   */
  uiterlijkeEinddatumAfdoening?: string | null;
  /**
   * publicatiedatum
   * Datum waarop (het starten van) de zaak gepubliceerd is of wordt.
   * @format date
   */
  publicatiedatum?: string | null;
  /**
   * communicatiekanaal
   * Het medium waarlangs de aanleiding om een zaak te starten is ontvangen. URL naar een communicatiekanaal in de VNG-Referentielijst van communicatiekanalen.
   * @format uri
   * @maxLength 1000
   */
  communicatiekanaal?: string;
  /**
   * producten of diensten
   * De producten en/of diensten die door de zaak worden voortgebracht. Dit zijn URLs naar de resources zoals die door de producten- en dienstencatalogus-API wordt ontsloten. De producten/diensten moeten bij het zaaktype vermeld zijn.
   */
  productenOfDiensten?: string[];
  /**
   * Vertrouwlijkheidaanduiding
   * Aanduiding van de mate waarin het zaakdossier van de ZAAK voor de openbaarheid bestemd is. Optioneel - indien geen waarde gekozen wordt, dan wordt de waarde van het ZAAKTYPE overgenomen. Dit betekent dat de API _altijd_ een waarde teruggeeft.
   */
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum;
  /**
   * betalingsindicatie
   * Indicatie of de, met behandeling van de zaak gemoeide, kosten betaald zijn door de desbetreffende betrokkene.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `nvt` - Er is geen sprake van te betalen, met de zaak gemoeide, kosten.
   * * `nog_niet` - De met de zaak gemoeide kosten zijn (nog) niet betaald.
   * * `gedeeltelijk` - De met de zaak gemoeide kosten zijn gedeeltelijk betaald.
   * * `geheel` - De met de zaak gemoeide kosten zijn geheel betaald.
   */
  betalingsindicatie?: BetalingsindicatieEnum | BlankEnum;
  /**
   * betalingsindicatieWeergave
   * Uitleg bij `betalingsindicatie`.
   */
  betalingsindicatieWeergave: string;
  /**
   * laatste betaaldatum
   * De datum waarop de meest recente betaling is verwerkt van kosten die gemoeid zijn met behandeling van de zaak.
   * @format date-time
   */
  laatsteBetaaldatum?: string | null;
  /**
   * zaakgeometrie
   * Punt, lijn of (multi-)vlak geometrie-informatie, in GeoJSON.
   */
  zaakgeometrie?: GeoJSONGeometry | null;
  /**
   * verlenging
   * Gegevens omtrent het verlengen van de doorlooptijd van de behandeling van de ZAAK
   */
  verlenging?: Verlenging | null;
  /**
   * opschorting
   * Gegevens omtrent het tijdelijk opschorten van de behandeling van de ZAAK
   */
  opschorting?: Opschorting | null;
  /**
   * selectielijstklasse
   * URL-referentie naar de categorie in de gehanteerde 'Selectielijst Archiefbescheiden' die, gezien het zaaktype en het resultaattype van de zaak, bepalend is voor het archiefregime van de zaak.
   * @format uri
   * @maxLength 1000
   */
  selectielijstklasse?: string;
  /**
   * Is deelzaak van
   * URL-referentie naar de ZAAK, waarom verzocht is door de initiator daarvan, die behandeld wordt in twee of meer separate ZAAKen waarvan de onderhavige ZAAK er één is.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  hoofdzaak?: string | null;
  /**
   * is deelzaak van
   * URL-referenties naar deel ZAAKen.
   * @uniqueItems true
   */
  deelzaken: string[];
  /**
   * zaak
   * Een lijst van relevante andere zaken.
   */
  relevanteAndereZaken?: RelevanteZaak[];
  /**
   * zaak
   * @uniqueItems true
   */
  eigenschappen: string[];
  /**
   * zaak
   * @uniqueItems true
   */
  rollen: string[];
  /**
   * status
   * Indien geen status bekend is, dan is de waarde 'null'
   * @format uri
   */
  status: string | null;
  /**
   * zaak
   * @uniqueItems true
   */
  zaakinformatieobjecten: string[];
  /**
   * zaak
   * @uniqueItems true
   */
  zaakobjecten: string[];
  /**
   * zaak
   * Lijst van kenmerken. Merk op dat refereren naar gerelateerde objecten beter kan via `ZaakObject`.
   */
  kenmerken?: ZaakKenmerk[];
  /**
   * archiefnominatie
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats.
   * * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
   */
  archiefnominatie?: ArchiefnominatieEnum | BlankEnum | NullEnum | null;
  /**
   * archiefstatus
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd.
   * * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt.
   * * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden.
   * * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
   */
  archiefstatus?: ArchiefstatusEnum;
  /**
   * archiefactiedatum
   * De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
   * @format date
   */
  archiefactiedatum?: string | null;
  /**
   * resultaat
   * URL-referentie naar het RESULTAAT. Indien geen resultaat bekend is, dan is de waarde 'null'
   * @format uri
   */
  resultaat: string | null;
  /**
   * opdrachtgevende organisatie
   * De krachtens publiekrecht ingestelde rechtspersoon dan wel ander niet-natuurlijk persoon waarbinnen het (bestuurs)orgaan zetelt dat opdracht heeft gegeven om taken uit te voeren waaraan de zaak invulling geeft.
   * @maxLength 9
   */
  opdrachtgevendeOrganisatie?: string;
  /**
   * Procesobjectaard
   * Omschrijving van het object, subject of gebeurtenis waarop, vanuit archiveringsoptiek, de zaak betrekking heeft.
   * @maxLength 200
   */
  processobjectaard?: string | null;
  /**
   * startdatum bewaartermijn
   * De datum die de start markeert van de termijn waarop het zaakdossier vernietigd moet worden.
   * @format date
   */
  startdatumBewaartermijn?: string | null;
  /**
   * processobject
   * Specificatie van de attribuutsoort van het object, subject of gebeurtenis  waarop, vanuit archiveringsoptiek, de zaak betrekking heeft en dat bepalend is voor de start van de archiefactietermijn.
   */
  processobject?: Processobject | null;
}

export type ZaakExpanded = Zaak & {
  /** <b>Let op</b>: de definities van onderstaande attributen kunnen recursie bevatten en worden mogelijk niet goed weergegeven in de gegenereerde voorbeeldberichten van Redoc of Swagger.  Check altijd de yaml-specificitie voor correcte interpretatie en gebruik de referentie-implementatie om correcte responsberichten te genereren. */
  _expand?: ZaakEmbedded;
};

/** <b>Let op</b>: de definities van onderstaande attributen kunnen recursie bevatten en worden mogelijk niet goed weergegeven in de gegenereerde voorbeeldberichten van Redoc of Swagger.  Check altijd de yaml-specificitie voor correcte interpretatie en gebruik de referentie-implementatie om correcte responsberichten te genereren. */
export interface ZaakEmbedded {
  zaaktype?: any;
  /** @example {} */
  hoofdzaak?: ZaakExpanded | EmptyObject;
  /** @example [{}] */
  deelzaken?: ZaakExpanded[];
  /** @example [{}] */
  relevanteAndereZaken?: ZaakExpanded[];
  eigenschappen?: ZaakEigenschap[];
  rollen?: RolExpanded[];
  status?: StatusExpanded | EmptyObject;
  zaakobjecten?: ZaakObject[];
  resultaat?: ResultaatExpanded | EmptyObject;
}

/**
 * Leeg object. Dit wordt teruggeven indien het te expanderen veld een null waarde heeft.
 * @example {}
 */
export type EmptyObject = object;

/**
 * A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
 * of primary key relationships.  Specifically:
 *
 * * A 'url' field is included instead of the 'id' field.
 * * Relationships to other instances are hyperlinks, instead of primary keys.
 *
 * NOTE: this only works with DRF 3.1.0 and above.
 */
export interface ZaakBesluit {
  /**
   * url
   * @format uri
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * besluit
   * URL-referentie naar het BESLUIT (in de Besluiten API), waar ook de relatieinformatie opgevraagd kan worden.
   * @format uri
   * @maxLength 1000
   */
  besluit: string;
}

export interface ZaakContactMoment {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * contactmoment
   * URL-referentie naar het CONTACTMOMENT (in de Klantinteractie API)
   * @format uri
   * @maxLength 1000
   */
  contactmoment: string;
}

/**
 * A type of `ModelSerializer` that uses hyperlinked relationships with compound keys instead
 * of primary key relationships.  Specifically:
 *
 * * A 'url' field is included instead of the 'id' field.
 * * Relationships to other instances are hyperlinks, instead of primary keys.
 *
 * NOTE: this only works with DRF 3.1.0 and above.
 */
export interface ZaakEigenschap {
  /**
   * url
   * @format uri
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * @format uri
   */
  zaak: string;
  /**
   * eigenschap
   * URL-referentie naar de EIGENSCHAP (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  eigenschap: string;
  /**
   *  naam
   * De naam van de EIGENSCHAP (overgenomen uit de Catalogi API).
   */
  naam: string;
  /** waarde */
  waarde: string;
}

export interface ZaakInformatieObject {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
   * @format uri
   * @maxLength 1000
   */
  informatieobject: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /** aardRelatieWeergave */
  aardRelatieWeergave: AardRelatieWeergaveEnum;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT binnen het OBJECT bekend is.
   * @maxLength 200
   */
  titel?: string;
  /**
   * beschrijving
   * Een op het object gerichte beschrijving van de inhoud vanhet INFORMATIEOBJECT.
   */
  beschrijving?: string;
  /**
   * registratiedatum
   * De datum waarop de behandelende organisatie het INFORMATIEOBJECT heeft geregistreerd bij het OBJECT. Geldige waardes zijn datumtijden gelegen op of voor de huidige datum en tijd.
   * @format date-time
   */
  registratiedatum: string;
  /**
   * vernietigingsdatum
   * De datum waarop het informatieobject uit het zaakdossier verwijderd moet worden.
   * @format date-time
   */
  vernietigingsdatum?: string | null;
  /**
   * status
   * De bij de desbetreffende ZAAK behorende STATUS waarvoor het ZAAK-INFORMATIEOBJECT relevant is (geweest) met het oog op het bereiken van die STATUS en/of de communicatie daarover.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  status?: string | null;
}

export type ZaakInformatieObjectExpanded = ZaakInformatieObject & {
  _expand?: ZaakInformatieObjectEmbedded;
};

export interface ZaakInformatieObjectEmbedded {
  status?: StatusExpanded;
}

export interface ZaakKenmerk {
  /**
   * kenmerk
   * Identificeert uniek de zaak in een andere administratie.
   * @maxLength 40
   */
  kenmerk: string;
  /**
   * bron
   * De aanduiding van de administratie waar het kenmerk op slaat.
   * @maxLength 40
   */
  bron: string;
}

export type ZaakObject = BaseZaakObject &
  (
    | BaseZaakObjectObjectTypeMapping<"adres", AdresZaakObject>
    | BaseZaakObjectObjectTypeMapping<"besluit", BesluitZaakObject>
    | BaseZaakObjectObjectTypeMapping<"buurt", BuurtZaakObject>
    | BaseZaakObjectObjectTypeMapping<"enkelvoudig_document", EnkelvoudigDocumentZaakObject>
    | BaseZaakObjectObjectTypeMapping<"gemeente", GemeenteZaakObject>
    | BaseZaakObjectObjectTypeMapping<"gemeentelijke_openbare_ruimte", GemeentelijkeOpenbareRuimteZaakObject>
    | BaseZaakObjectObjectTypeMapping<"huishouden", HuishoudenZaakObject>
    | BaseZaakObjectObjectTypeMapping<"inrichtingselement", InrichtingselementZaakObject>
    | BaseZaakObjectObjectTypeMapping<"kadastrale_onroerende_zaak", KadastraleOnroerendeZaakZaakObject>
    | BaseZaakObjectObjectTypeMapping<"kunstwerkdeel", KunstwerkdeelZaakObject>
    | BaseZaakObjectObjectTypeMapping<"maatschappelijke_activiteit", MaatschappelijkeActiviteitZaakObject>
    | BaseZaakObjectObjectTypeMapping<"medewerker", MedewerkerZaakObject>
    | BaseZaakObjectObjectTypeMapping<"natuurlijk_persoon", NatuurlijkPersoonZaakObject>
    | BaseZaakObjectObjectTypeMapping<"niet_natuurlijk_persoon", NietNatuurlijkPersoonZaakObject>
    | BaseZaakObjectObjectTypeMapping<"openbare_ruimte", OpenbareRuimteZaakObject>
    | BaseZaakObjectObjectTypeMapping<"organisatorische_eenheid", OrganisatorischeEenheidZaakObject>
    | BaseZaakObjectObjectTypeMapping<"pand", PandZaakObject>
    | BaseZaakObjectObjectTypeMapping<"spoorbaandeel", SpoorbaandeelZaakObject>
    | BaseZaakObjectObjectTypeMapping<"status", StatusZaakObject>
    | BaseZaakObjectObjectTypeMapping<"terreindeel", TerreindeelZaakObject>
    | BaseZaakObjectObjectTypeMapping<"terrein_gebouwd_object", TerreinGebouwdObjectZaakObject>
    | BaseZaakObjectObjectTypeMapping<"vestiging", VestigingZaakObject>
    | BaseZaakObjectObjectTypeMapping<"waterdeel", WaterdeelZaakObject>
    | BaseZaakObjectObjectTypeMapping<"wegdeel", WegdeelZaakObject>
    | BaseZaakObjectObjectTypeMapping<"wijk", WijkZaakObject>
    | BaseZaakObjectObjectTypeMapping<"woonplaats", WoonplaatsZaakObject>
    | BaseZaakObjectObjectTypeMapping<"woz_deelobject", WozDeelobjectZaakObject>
    | BaseZaakObjectObjectTypeMapping<"woz_object", WozObjectZaakObject>
    | BaseZaakObjectObjectTypeMapping<"woz_waarde", WozWaardeZaakObject>
    | BaseZaakObjectObjectTypeMapping<"zakelijk_recht", ZakelijkRechtZaakObject>
    | BaseZaakObjectObjectTypeMapping<"overige", OverigeZaakObject>
  );

export type ZaakObjectExpanded = ZaakObject & {
  _expand?: ZaakObjectEmbedded;
};

export interface ZaakObjectEmbedded {
  zaakobjecttype?: any;
}

export interface ZaakVerzoek {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * verzoek
   * URL-referentie naar het VERZOEK (in de Klantinteractie API)
   * @format uri
   * @maxLength 1000
   */
  verzoek: string;
}

export interface ZaakZoek {
  zaakgeometrie?: GeoWithin;
  /**
   * Array of unieke resource identifiers (UUID4)
   * @example ["e80b7507-199a-484c-ad49-c41a1e43a6e7","78e12133-c467-4202-91ba-4417baa52801"]
   */
  uuid__in?: string[];
  /**
   * Identificatie
   * De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
   * @example "zaak123"
   */
  identificatie?: string;
  /**
   * Bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @example "000000000"
   */
  bronorganisatie?: string;
  /**
   * Array van bronorganisaties.
   * @example ["000000000","479559740","875883461"]
   */
  bronorganisatie__in?: string[];
  /**
   * Zaaktype
   * URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
   * @example "https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/e80b7507-199a-484c-ad49-c41a1e43a6e7"
   */
  zaaktype?: string;
  /**
   * Array van zaaktypen.
   * @example ["https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/e80b7507-199a-484c-ad49-c41a1e43a6e7","https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/78e12133-c467-4202-91ba-4417baa52801"]
   */
  zaaktype__in?: string[];
  /**
   * Archiefnominatie
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `blijvend_bewaren` - Het zaakdossier moet bewaard blijven en op de Archiefactiedatum overgedragen worden naar een archiefbewaarplaats. * `vernietigen` - Het zaakdossier moet op of na de Archiefactiedatum vernietigd worden.
   * @example "blijvend_bewaren"
   */
  archiefnominatie?: "blijvend_bewaren" | "vernietigen";
  /**
   * Archiefnominatie in
   * Multiple values may be separated by commas.
   * @example ["blijvend_bewaren","vernietigen"]
   */
  archiefnominatie__in?: string[];
  /**
   * Archiefactiedatum
   * De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
   * @example "2019-01-02"
   */
  archiefactiedatum?: string;
  /**
   * Archiefactiedatum is leeg
   * @example false
   */
  archiefactiedatum__isnull?: boolean;
  /**
   * Archiefactiedatum kleiner dan
   * @example "2020-01-02"
   */
  archiefactiedatum__lt?: string;
  /**
   * Archiefactiedatum  groter dan
   * @example "2018-01-02"
   */
  archiefactiedatum__gt?: string;
  /**
   * Archiefstatus
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden. Uitleg bij mogelijke waarden: * `nog_te_archiveren` - De zaak cq. het zaakdossier is nog niet als geheel gearchiveerd. * `gearchiveerd` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt. * `gearchiveerd_procestermijn_onbekend` - De zaak cq. het zaakdossier is als geheel niet-wijzigbaar bewaarbaar gemaakt maar de vernietigingsdatum kan nog niet bepaald worden. * `overgedragen` - De zaak cq. het zaakdossier is overgebracht naar een archiefbewaarplaats.
   * @example "nog_te_archiveren"
   */
  archiefstatus?: "nog_te_archiveren" | "gearchiveerd" | "gearchiveerd_procestermijn_onbekend" | "overgedragen";
  /**
   * Archiefstatus in
   * Multiple values may be separated by commas.
   * @example ["nog_te_archiveren","gearchiveerd","gearchiveerd_procestermijn_onbekend","overgedragen"]
   */
  archiefstatus__in?: string[];
  /**
   * Startdatum
   * De datum waarop met de uitvoering van de zaak is gestart
   * @example "2017-01-02"
   */
  startdatum?: string;
  /**
   * Startdatum groter dan
   * @example "2018-01-02"
   */
  startdatum__gt?: string;
  /**
   * Startdatum groter dan of gelijk
   * @example "2016-01-02"
   */
  startdatum__gte?: string;
  /**
   * Startdatum kleiner dan
   * @example "2018-01-02"
   */
  startdatum__lt?: string;
  /**
   * Startdatum kleiner dan of gelijk
   * @example "2018-01-02"
   */
  startdatum__lte?: string;
  /**
   * Registratiedatum
   * De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
   * @example "2015-01-02"
   */
  registratiedatum?: string;
  /**
   * Registratiedatum groter dan
   * @example "2014-01-02"
   */
  registratiedatum__gt?: string;
  /**
   * Registratiedatum kleiner dan
   * @example "2016-01-02"
   */
  registratiedatum__lt?: string;
  /**
   * Einddatum
   * De datum waarop de uitvoering van de zaak afgerond is.
   * @example "2022-01-02"
   */
  einddatum?: string;
  /**
   * Einddatum is leeg
   * @example false
   */
  einddatum__isnull?: boolean;
  /**
   * Einddatum groter dan
   * @example "2021-01-02"
   */
  einddatum__gt?: string;
  /**
   * Einddatum kleiner dan
   * @minLength 1
   * @example "2023-01-02"
   */
  einddatum__lt?: string;
  /**
   * Einddatum gepland
   * De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
   * @example "2022-01-02"
   */
  einddatumGepland?: string;
  /**
   * Einddatum gepland groter dan
   * @example "2021-01-02"
   */
  einddatumGepland__gt?: string;
  /**
   * Einddatum gepland kleiner dan
   * @example "2024-01-02"
   */
  einddatumGepland__lt?: string;
  /**
   * Uiterlijke einddatumAfdoening
   * De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
   * @example "2024-01-02"
   */
  uiterlijkeEinddatumAfdoening?: string;
  /**
   * Uiterlijke einddatumAfdoening groter dan
   * @example "2023-01-02"
   */
  uiterlijkeEinddatumAfdoening__gt?: string;
  /**
   * Uiterlijke einddatumAfdoening kleiner dan
   * @example "2025-01-02"
   */
  uiterlijkeEinddatumAfdoening__lt?: string;
  /**
   * Rol  betrokkenetype
   * Type van de `betrokkene`. Uitleg bij mogelijke waarden: * `natuurlijk_persoon` - Natuurlijk persoon * `niet_natuurlijk_persoon` - Niet-natuurlijk persoon * `vestiging` - Vestiging * `organisatorische_eenheid` - Organisatorische eenheid * `medewerker` - Medewerker
   * @example "natuurlijk_persoon"
   */
  rol__betrokkeneType?:
    | "natuurlijk_persoon"
    | "niet_natuurlijk_persoon"
    | "vestiging"
    | "organisatorische_eenheid"
    | "medewerker";
  /**
   * Rol  betrokkene
   * URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
   * @example "https://example.com"
   */
  rol__betrokkene?: string;
  /**
   * Rol  omschrijvinggeneriek
   * Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
   * @example "initiator"
   */
  rol__omschrijvingGeneriek?:
    | "adviseur"
    | "behandelaar"
    | "belanghebbende"
    | "beslisser"
    | "initiator"
    | "klantcontacter"
    | "zaakcoordinator"
    | "mede_initiator";
  /**
   * Maximalevertrouwelijkheidaanduiding
   * Zaken met een vertrouwelijkheidaanduiding die beperkter is dan de aangegeven aanduiding worden uit de resultaten gefiltered.
   * @example "zaakvertrouwelijk"
   */
  maximaleVertrouwelijkheidaanduiding?:
    | "openbaar"
    | "beperkt_openbaar"
    | "intern"
    | "zaakvertrouwelijk"
    | "vertrouwelijk"
    | "confidentieel"
    | "geheim"
    | "zeer_geheim";
  /**
   * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpbsn
   * Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
  /**
   * Rol  betrokkeneidentificatie  natuurlijkpersoon  anpidentificatie
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
  /**
   * Rol  betrokkeneidentificatie  natuurlijkpersoon  inpa nummer
   * Het administratienummer van de persoon, bedoeld in de Wet BRP
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
  /**
   * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  innnnpid
   * Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
  /**
   * Rol  betrokkeneidentificatie  nietnatuurlijkpersoon  annidentificatie
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
  /**
   * Rol  betrokkeneidentificatie  vestiging  vestigingsnummer
   * Een korte unieke aanduiding van de Vestiging.
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
  /**
   * Rol  betrokkeneidentificatie  medewerker  identificatie
   * Een korte unieke aanduiding van de MEDEWERKER.
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__medewerker__identificatie?: string;
  /**
   * Rol  betrokkeneidentificatie  organisatorischeeenheid  identificatie
   * Een korte identificatie van de organisatorische eenheid.
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
  /**
   * expand
   * Examples:
   * `expand=zaaktype, status, status.statustype, hoofdzaak.status.statustype,'  hoofdzaak.deelzaken.status.statustype`Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt.
   * @example "zaaktype, status, status.statustype, hoofdzaak.status.statustype, hoofdzaak.deelzaken.status.statustype"
   */
  expand?: string;
  /**
   * Ordering
   * Het veld waarop de resultaten geordend worden. Het minnetje betekent omgekeerde volgorde.
   * @example "-startdatum"
   */
  ordering?:
    | "startdatum"
    | "-startdatum"
    | "einddatum"
    | "-einddatum"
    | "publicatiedatum"
    | "-publicatiedatum"
    | "archiefactiedatum"
    | "-archiefactiedatum"
    | "registratiedatum"
    | "-registratiedatum"
    | "identificatie"
    | "-identificatie";
}

export interface ZakelijkRechtHeeftAlsGerechtigde {
  /** natuurlijkPersoon */
  natuurlijkPersoon?: RolNatuurlijkPersoon;
  /** nietNatuurlijkPersoon */
  nietNatuurlijkPersoon?: RolNietNatuurlijkPersoon;
}

export type AdresZaakObject = BaseZaakObject & ObjectIdentificatieObjectAdres;

export type AdresPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectAdres;

export type BesluitZaakObject = BaseZaakObject;

export type BesluitPatchedZaakObject = BasePatchedZaakObject;

export interface BetrokkeneIdentificatieRolMedewerker {
  /** betrokkeneIdentificatie */
  betrokkeneIdentificatie?: RolMedewerker;
}

export interface BetrokkeneIdentificatieRolNatuurlijkPersoon {
  /** betrokkeneIdentificatie */
  betrokkeneIdentificatie?: RolNatuurlijkPersoon;
}

export interface BetrokkeneIdentificatieRolNietNatuurlijkPersoon {
  /** betrokkeneIdentificatie */
  betrokkeneIdentificatie?: RolNietNatuurlijkPersoon;
}

export interface BetrokkeneIdentificatieRolOrganisatorischeEenheid {
  /** betrokkeneIdentificatie */
  betrokkeneIdentificatie?: RolOrganisatorischeEenheid;
}

export interface BetrokkeneIdentificatieRolVestiging {
  /** betrokkeneIdentificatie */
  betrokkeneIdentificatie?: RolVestiging;
}

export type BuurtZaakObject = BaseZaakObject & ObjectIdentificatieObjectBuurt;

export type BuurtPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectBuurt;

export type EnkelvoudigDocumentZaakObject = BaseZaakObject;

export type EnkelvoudigDocumentPatchedZaakObject = BasePatchedZaakObject;

export type GemeenteZaakObject = BaseZaakObject & ObjectIdentificatieObjectGemeente;

export type GemeentePatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectGemeente;

export type GemeentelijkeOpenbareRuimteZaakObject = BaseZaakObject &
  ObjectIdentificatieObjectGemeentelijkeOpenbareRuimte;

export type GemeentelijkeOpenbareRuimtePatchedZaakObject = BasePatchedZaakObject &
  ObjectIdentificatieObjectGemeentelijkeOpenbareRuimte;

export type HuishoudenZaakObject = BaseZaakObject & ObjectIdentificatieObjectHuishouden;

export type HuishoudenPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectHuishouden;

export type InrichtingselementZaakObject = BaseZaakObject & ObjectIdentificatieObjectInrichtingselement;

export type InrichtingselementPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectInrichtingselement;

export type KadastraleOnroerendeZaakZaakObject = BaseZaakObject & ObjectIdentificatieObjectKadastraleOnroerendeZaak;

export type KadastraleOnroerendeZaakPatchedZaakObject = BasePatchedZaakObject &
  ObjectIdentificatieObjectKadastraleOnroerendeZaak;

export type KunstwerkdeelZaakObject = BaseZaakObject & ObjectIdentificatieObjectKunstwerkdeel;

export type KunstwerkdeelPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectKunstwerkdeel;

export type MaatschappelijkeActiviteitZaakObject = BaseZaakObject & ObjectIdentificatieObjectMaatschappelijkeActiviteit;

export type MaatschappelijkeActiviteitPatchedZaakObject = BasePatchedZaakObject &
  ObjectIdentificatieObjectMaatschappelijkeActiviteit;

export type MedewerkerRol = Rol & BetrokkeneIdentificatieRolMedewerker;

export type MedewerkerZaakObject = BaseZaakObject & BetrokkeneIdentificatieRolMedewerker;

export type MedewerkerPatchedZaakObject = BasePatchedZaakObject & BetrokkeneIdentificatieRolMedewerker;

export type NatuurlijkPersoonRol = Rol & BetrokkeneIdentificatieRolNatuurlijkPersoon;

export type NatuurlijkPersoonZaakObject = BaseZaakObject & BetrokkeneIdentificatieRolNatuurlijkPersoon;

export type NatuurlijkPersoonPatchedZaakObject = BasePatchedZaakObject & BetrokkeneIdentificatieRolNatuurlijkPersoon;

export type NietNatuurlijkPersoonRol = Rol & BetrokkeneIdentificatieRolNietNatuurlijkPersoon;

export type NietNatuurlijkPersoonZaakObject = BaseZaakObject & BetrokkeneIdentificatieRolNietNatuurlijkPersoon;

export type NietNatuurlijkPersoonPatchedZaakObject = BasePatchedZaakObject &
  BetrokkeneIdentificatieRolNietNatuurlijkPersoon;

export interface ObjectIdentificatieObjectAdres {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectAdres;
}

export interface ObjectIdentificatieObjectBuurt {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectBuurt;
}

export interface ObjectIdentificatieObjectGemeente {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectGemeente;
}

export interface ObjectIdentificatieObjectGemeentelijkeOpenbareRuimte {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectGemeentelijkeOpenbareRuimte;
}

export interface ObjectIdentificatieObjectHuishouden {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectHuishouden;
}

export interface ObjectIdentificatieObjectInrichtingselement {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectInrichtingselement;
}

export interface ObjectIdentificatieObjectKadastraleOnroerendeZaak {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectKadastraleOnroerendeZaak;
}

export interface ObjectIdentificatieObjectKunstwerkdeel {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectKunstwerkdeel;
}

export interface ObjectIdentificatieObjectMaatschappelijkeActiviteit {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectMaatschappelijkeActiviteit;
}

export interface ObjectIdentificatieObjectOpenbareRuimte {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectOpenbareRuimte;
}

export interface ObjectIdentificatieObjectOverige {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectOverige;
}

export interface ObjectIdentificatieObjectPand {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectPand;
}

export interface ObjectIdentificatieObjectSpoorbaandeel {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectSpoorbaandeel;
}

export interface ObjectIdentificatieObjectTerreinGebouwdObject {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectTerreinGebouwdObject;
}

export interface ObjectIdentificatieObjectTerreindeel {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectTerreindeel;
}

export interface ObjectIdentificatieObjectWaterdeel {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWaterdeel;
}

export interface ObjectIdentificatieObjectWegdeel {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWegdeel;
}

export interface ObjectIdentificatieObjectWijk {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWijk;
}

export interface ObjectIdentificatieObjectWoonplaats {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWoonplaats;
}

export interface ObjectIdentificatieObjectWozDeelobject {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWozDeelobject;
}

export interface ObjectIdentificatieObjectWozObject {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWozObject;
}

export interface ObjectIdentificatieObjectWozWaarde {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectWozWaarde;
}

export interface ObjectIdentificatieObjectZakelijkRecht {
  /** objectIdentificatie */
  objectIdentificatie?: ObjectZakelijkRecht;
}

export interface ObjectIdentificatieRolMedewerker {
  /** objectIdentificatie */
  objectIdentificatie?: RolMedewerker;
}

export interface ObjectIdentificatieRolNatuurlijkPersoon {
  /** objectIdentificatie */
  objectIdentificatie?: RolNatuurlijkPersoon;
}

export interface ObjectIdentificatieRolNietNatuurlijkPersoon {
  /** objectIdentificatie */
  objectIdentificatie?: RolNietNatuurlijkPersoon;
}

export interface ObjectIdentificatieRolOrganisatorischeEenheid {
  /** objectIdentificatie */
  objectIdentificatie?: RolOrganisatorischeEenheid;
}

export interface ObjectIdentificatieRolVestiging {
  /** objectIdentificatie */
  objectIdentificatie?: RolVestiging;
}

export type OpenbareRuimteZaakObject = BaseZaakObject & ObjectIdentificatieObjectOpenbareRuimte;

export type OpenbareRuimtePatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectOpenbareRuimte;

export type OrganisatorischeEenheidRol = Rol & BetrokkeneIdentificatieRolOrganisatorischeEenheid;

export type OrganisatorischeEenheidZaakObject = BaseZaakObject & BetrokkeneIdentificatieRolOrganisatorischeEenheid;

export type OrganisatorischeEenheidPatchedZaakObject = BasePatchedZaakObject &
  BetrokkeneIdentificatieRolOrganisatorischeEenheid;

export type OverigeZaakObject = BaseZaakObject & ObjectIdentificatieObjectOverige;

export type OverigePatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectOverige;

export type PandZaakObject = BaseZaakObject & ObjectIdentificatieObjectPand;

export type PandPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectPand;

export type SpoorbaandeelZaakObject = BaseZaakObject & ObjectIdentificatieObjectSpoorbaandeel;

export type SpoorbaandeelPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectSpoorbaandeel;

export type StatusZaakObject = BaseZaakObject;

export type StatusPatchedZaakObject = BasePatchedZaakObject;

export type TerreinGebouwdObjectZaakObject = BaseZaakObject & ObjectIdentificatieObjectTerreinGebouwdObject;

export type TerreinGebouwdObjectPatchedZaakObject = BasePatchedZaakObject &
  ObjectIdentificatieObjectTerreinGebouwdObject;

export type TerreindeelZaakObject = BaseZaakObject & ObjectIdentificatieObjectTerreindeel;

export type TerreindeelPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectTerreindeel;

export type VestigingRol = Rol & BetrokkeneIdentificatieRolVestiging;

export type VestigingZaakObject = BaseZaakObject & BetrokkeneIdentificatieRolVestiging;

export type VestigingPatchedZaakObject = BasePatchedZaakObject & BetrokkeneIdentificatieRolVestiging;

export type WaterdeelZaakObject = BaseZaakObject & ObjectIdentificatieObjectWaterdeel;

export type WaterdeelPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWaterdeel;

export type WegdeelZaakObject = BaseZaakObject & ObjectIdentificatieObjectWegdeel;

export type WegdeelPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWegdeel;

export type WijkZaakObject = BaseZaakObject & ObjectIdentificatieObjectWijk;

export type WijkPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWijk;

export type WoonplaatsZaakObject = BaseZaakObject & ObjectIdentificatieObjectWoonplaats;

export type WoonplaatsPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWoonplaats;

export type WozDeelobjectZaakObject = BaseZaakObject & ObjectIdentificatieObjectWozDeelobject;

export type WozDeelobjectPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWozDeelobject;

export type WozObjectZaakObject = BaseZaakObject & ObjectIdentificatieObjectWozObject;

export type WozObjectPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWozObject;

export type WozWaardeZaakObject = BaseZaakObject & ObjectIdentificatieObjectWozWaarde;

export type WozWaardePatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectWozWaarde;

export type ZakelijkRechtZaakObject = BaseZaakObject & ObjectIdentificatieObjectZakelijkRecht;

export type ZakelijkRechtPatchedZaakObject = BasePatchedZaakObject & ObjectIdentificatieObjectZakelijkRecht;

interface BasePatchedZaakObject {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid?: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak?: string;
  /**
   * object
   * URL-referentie naar de resource die het OBJECT beschrijft.
   * @format uri
   * @maxLength 1000
   */
  object?: string;
  /**
   * zaakobjecttype
   * URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  zaakobjecttype?: string;
  /**
   * object type
   * Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.
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
  objectType?: ObjectTypeEnum;
  /**
   * object type overige
   * Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft.
   * @maxLength 100
   * @pattern [a-z\_]+
   */
  objectTypeOverige?: string;
  /**
   * definitie object type overige
   * Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.
   *
   * * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/).
   * * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat.
   * * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.
   *
   * Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype.
   */
  objectTypeOverigeDefinitie?: ObjectTypeOverigeDefinitie | null;
  /**
   * relatieomschrijving
   * Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
   * @maxLength 80
   */
  relatieomschrijving?: string;
}

type BasePatchedZaakObjectObjectTypeMapping<Key, Type> = {
  objectType: Key;
} & Type;

interface BaseZaakObject {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
  /**
   * zaak
   * URL-referentie naar de ZAAK.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  zaak: string;
  /**
   * object
   * URL-referentie naar de resource die het OBJECT beschrijft.
   * @format uri
   * @maxLength 1000
   */
  object?: string;
  /**
   * zaakobjecttype
   * URL-referentie naar het ZAAKOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 1000
   */
  zaakobjecttype?: string;
  /**
   * object type
   * Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`.
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
  objectType: ObjectTypeEnum;
  /**
   * object type overige
   * Beschrijft het type OBJECT als `objectType` de waarde "overige" heeft.
   * @maxLength 100
   * @pattern [a-z\_]+
   */
  objectTypeOverige?: string;
  /**
   * definitie object type overige
   * Verwijzing naar het schema van het type OBJECT als `objectType` de waarde "overige" heeft.
   *
   * * De URL referentie moet naar een JSON endpoint   wijzen waarin het objecttype gedefinieerd is, inclusief het   [JSON-schema](https://json-schema.org/).
   * * Gebruik het `schema` attribuut om te verwijzen naar het schema binnen   de objecttype resource (deze gebruikt het   [jq](http://stedolan.github.io/jq/) formaat.
   * * Gebruik het `objectData` attribuut om te verwijzen naar de gegevens   binnen het OBJECT. Deze gebruikt ook het   [jq](http://stedolan.github.io/jq/) formaat.
   *
   * Indien je hier gebruikt van maakt, dan moet je een OBJECT url opgeven en is het gebruik van objectIdentificatie niet mogelijk. De opgegeven OBJECT url wordt gevalideerd tegen het schema van het opgegeven objecttype.
   */
  objectTypeOverigeDefinitie?: ObjectTypeOverigeDefinitie | null;
  /**
   * relatieomschrijving
   * Omschrijving van de betrekking tussen de ZAAK en het OBJECT.
   * @maxLength 80
   */
  relatieomschrijving?: string;
  _expand?: ZaakObjectEmbedded;
}

type BaseZaakObjectObjectTypeMapping<Key, Type> = {
  objectType: Key;
} & Type;

export interface KlantcontactListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type KlantcontactListData = PaginatedKlantContactList;

export type KlantcontactCreateData = KlantContact;

export type KlantcontactRetrieveData = KlantContact;

export interface ResultaatListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar het RESULTAATTYPE (in de Catalogi API).
   * @format uri
   */
  resultaattype?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ResultaatListData = PaginatedResultaatList;

export type ResultaatCreateData = Resultaat;

export type ResultaatRetrieveData = Resultaat;

export type ResultaatUpdateData = Resultaat;

export type ResultaatPartialUpdateData = Resultaat;

export type ResultaatDestroyData = any;

export type ResultaatHeadersData = any;

export interface RolListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
   * @format uri
   */
  betrokkene?: string;
  /** Type van de `betrokkene`. */
  betrokkeneType?:
    | "natuurlijk_persoon"
    | "niet_natuurlijk_persoon"
    | "vestiging"
    | "organisatorische_eenheid"
    | "medewerker";
  /** Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer. */
  betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
  /** Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON */
  betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
  /** Het administratienummer van de persoon, bedoeld in de Wet BRP */
  betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
  /** Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON */
  betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
  /** Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON */
  betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
  /** Een korte unieke aanduiding van de Vestiging. */
  betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
  /** Een korte identificatie van de organisatorische eenheid. */
  betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
  /** Een korte unieke aanduiding van de MEDEWERKER. */
  betrokkeneIdentificatie__medewerker__identificatie?: string;
  /**
   * URL-referentie naar een roltype binnen het ZAAKTYPE van de ZAAK.
   * @format uri
   */
  roltype?: string;
  /** Omschrijving van de aard van de ROL, afgeleid uit het ROLTYPE. */
  omschrijving?: string;
  /** Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE. */
  omschrijvingGeneriek?:
    | "adviseur"
    | "behandelaar"
    | "belanghebbende"
    | "beslisser"
    | "initiator"
    | "klantcontacter"
    | "zaakcoordinator"
    | "mede_initiator";
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type RolListData = PaginatedRolList;

export type RolCreateData = Rol;

export type RolRetrieveData = Rol;

export type RolDestroyData = any;

export type RolHeadersData = any;

export interface StatusListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar het STATUSTYPE (in de Catalogi API).
   * @format uri
   */
  statustype?: string;
  /** Het gegeven is afleidbaar uit de historie van de attribuutsoort Datum status gezet van van alle statussen bij de desbetreffende zaak. */
  indicatieLaatstGezetteStatus?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type StatusListData = PaginatedStatusList;

export type StatusCreateData = StatusRequestbody;

export type StatusRetrieveData = Status;

export type StatusHeadersData = any;

export interface ZaakcontactmomentListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar het CONTACTMOMENT (in de Klantinteractie API)
   * @format uri
   */
  contactmoment?: string;
}

export type ZaakcontactmomentListData = ZaakContactMoment[];

export type ZaakcontactmomentCreateData = ZaakContactMoment;

export type ZaakcontactmomentRetrieveData = ZaakContactMoment;

export type ZaakcontactmomentDestroyData = any;

export interface ZaakinformatieobjectListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar het INFORMATIEOBJECT (in de Documenten API), waar ook de relatieinformatie opgevraagd kan worden.
   * @format uri
   */
  informatieobject?: string;
}

export type ZaakinformatieobjectListData = ZaakInformatieObject[];

export type ZaakinformatieobjectCreateData = ZaakInformatieObject;

export type ZaakinformatieobjectRetrieveData = ZaakInformatieObject;

export type ZaakinformatieobjectUpdateData = ZaakInformatieObject;

export type ZaakinformatieobjectPartialUpdateData = ZaakInformatieObject;

export type ZaakinformatieobjectDestroyData = any;

export type ZaakinformatieobjectHeadersData = any;

export interface ZaakobjectListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar de resource die het OBJECT beschrijft.
   * @format uri
   */
  object?: string;
  /** Beschrijft het type OBJECT gerelateerd aan de ZAAK. Als er geen passend type is, dan moet het type worden opgegeven onder `objectTypeOverige`. */
  objectType?:
    | "adres"
    | "besluit"
    | "buurt"
    | "enkelvoudig_document"
    | "gemeente"
    | "gemeentelijke_openbare_ruimte"
    | "huishouden"
    | "inrichtingselement"
    | "kadastrale_onroerende_zaak"
    | "kunstwerkdeel"
    | "maatschappelijke_activiteit"
    | "medewerker"
    | "natuurlijk_persoon"
    | "niet_natuurlijk_persoon"
    | "openbare_ruimte"
    | "organisatorische_eenheid"
    | "pand"
    | "spoorbaandeel"
    | "status"
    | "terreindeel"
    | "terrein_gebouwd_object"
    | "vestiging"
    | "waterdeel"
    | "wegdeel"
    | "wijk"
    | "woonplaats"
    | "woz_deelobject"
    | "woz_object"
    | "woz_waarde"
    | "zakelijk_recht"
    | "overige";
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ZaakobjectListData = PaginatedZaakObjectList;

export type ZaakobjectCreateData = ZaakObject;

export type ZaakobjectRetrieveData = ZaakObject;

export type ZaakobjectUpdateData = ZaakObject;

export type ZaakobjectPartialUpdateData = ZaakObject;

export type ZaakobjectDestroyData = any;

export type ZaakobjectHeadersData = any;

export interface ZaakverzoekListParams {
  /**
   * URL-referentie naar de ZAAK.
   * @format uri
   */
  zaak?: string;
  /**
   * URL-referentie naar het VERZOEK (in de Klantinteractie API)
   * @format uri
   */
  verzoek?: string;
}

export type ZaakverzoekListData = ZaakVerzoek[];

export type ZaakverzoekCreateData = ZaakVerzoek;

export type ZaakverzoekRetrieveData = ZaakVerzoek;

export type ZaakverzoekDestroyData = any;

export interface ZaakListParams {
  /**
   * De unieke identificatie van de ZAAK binnen de organisatie die verantwoordelijk is voor de behandeling van de ZAAK.
   * @example "zaak123"
   */
  identificatie?: string;
  /**
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die de zaak heeft gecreeerd. Dit moet een geldig RSIN zijn van 9 nummers en voldoen aan https://nl.wikipedia.org/wiki/Burgerservicenummer#11-proef
   * @example "000000000"
   */
  bronorganisatie?: string;
  /**
   * Multiple values may be separated by commas.
   * @example ["000000000","479559740","875883461"]
   */
  bronorganisatie__in?: string[];
  /**
   * URL-referentie naar het ZAAKTYPE (in de Catalogi API) in de CATALOGUS waar deze voorkomt
   * @format uri
   * @example "https://catalogi-api.test.vng.cloud/api/v1/zaaktypen/e80b7507-199a-484c-ad49-c41a1e43a6e7"
   */
  zaaktype?: string;
  /**
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   * @example "blijvend_bewaren"
   */
  archiefnominatie?: "blijvend_bewaren" | "vernietigen";
  /**
   * Multiple values may be separated by commas.
   * @example ["blijvend_bewaren","vernietigen"]
   */
  archiefnominatie__in?: string[];
  /**
   * De datum waarop het gearchiveerde zaakdossier vernietigd moet worden dan wel overgebracht moet worden naar een archiefbewaarplaats. Wordt automatisch berekend bij het aanmaken of wijzigen van een RESULTAAT aan deze ZAAK indien nog leeg.
   * @example "2019-01-02"
   */
  archiefactiedatum?: string;
  /**
   * De archiefactiedatum is leeg.
   * @example false
   */
  archiefactiedatum__isnull?: boolean;
  /**
   * De archiefactiedatum is kleiner dan de opgegeven datum.
   * @example "2020-01-02"
   */
  archiefactiedatum__lt?: string;
  /**
   * De archiefactiedatum is groter dan de opgegeven datum.
   * @example "2018-01-02"
   */
  archiefactiedatum__gt?: string;
  /**
   * Aanduiding of het zaakdossier blijvend bewaard of na een bepaalde termijn vernietigd moet worden.
   * @example "nog_te_archiveren"
   */
  archiefstatus?: "nog_te_archiveren" | "gearchiveerd" | "gearchiveerd_procestermijn_onbekend" | "overgedragen";
  /**
   * Multiple values may be separated by commas.
   * @example ["nog_te_archiveren","gearchiveerd","gearchiveerd_procestermijn_onbekend","overgedragen"]
   */
  archiefstatus__in?: string[];
  /**
   * De datum waarop met de uitvoering van de zaak is gestart
   * @example "2017-01-02"
   */
  startdatum?: string;
  /**
   * De startdatum is groter dan de opgegeven datum.
   * @example "2018-01-02"
   */
  startdatum__gt?: string;
  /**
   * De startdatum is groter dan of gelijk dan de opgegeven datum.
   * @example "2016-01-02"
   */
  startdatum__gte?: string;
  /**
   * De startdatum is kleiner dan de opgegeven datum.
   * @example "2018-01-02"
   */
  startdatum__lt?: string;
  /**
   * De startdatum is kleiner of gelijk dan de opgegeven datum.
   * @example "2018-01-02"
   */
  startdatum__lte?: string;
  /**
   * De datum waarop de zaakbehandelende organisatie de ZAAK heeft geregistreerd. Indien deze niet opgegeven wordt, wordt de datum van vandaag gebruikt.
   * @example "2015-01-02"
   */
  registratiedatum?: string;
  /**
   * De registratiedatum is groter dan de opgegeven datum.
   * @example "2014-01-02"
   */
  registratiedatum__gt?: string;
  /**
   * De registratiedatum is kleiner dan de opgegeven datum.
   * @example "2016-01-02"
   */
  registratiedatum__lt?: string;
  /**
   * De datum waarop de uitvoering van de zaak afgerond is.
   * @example "2022-01-02"
   */
  einddatum?: string;
  /**
   * De einddatum is leeg.
   * @example false
   */
  einddatum__isnull?: boolean;
  /**
   * De einddatum is groter dan de opgegeven datum.
   * @example "2021-01-02"
   */
  einddatum__gt?: string;
  /**
   * De einddatum is kleiner dan de opgegeven datum.
   * @example "2023-01-02"
   */
  einddatum__lt?: string;
  /**
   * De datum waarop volgens de planning verwacht wordt dat de zaak afgerond wordt.
   * @example "2022-01-02"
   */
  einddatumGepland?: string;
  /**
   * De geplande einddatum is groter dan de opgegeven datum.
   * @example "2021-01-02"
   */
  einddatumGepland__gt?: string;
  /**
   * De geplande einddatum is kleiner dan de opgegeven datum.
   * @example "2024-01-02"
   */
  einddatumGepland__lt?: string;
  /**
   * De laatste datum waarop volgens wet- en regelgeving de zaak afgerond dient te zijn.
   * @example "2024-01-02"
   */
  uiterlijkeEinddatumAfdoening?: string;
  /**
   * De uiterlijke einddatumafdoening is groter dan de opgegeven datum.
   * @example "2023-01-02"
   */
  uiterlijkeEinddatumAfdoening__gt?: string;
  /**
   * De uiterlijke einddatumafdoening is kleiner dan de opgegeven datum.
   * @example "2025-01-02"
   */
  uiterlijkeEinddatumAfdoening__lt?: string;
  /**
   * Type van de `betrokkene`.
   * @example "natuurlijk_persoon"
   */
  rol__betrokkeneType?:
    | "natuurlijk_persoon"
    | "niet_natuurlijk_persoon"
    | "vestiging"
    | "organisatorische_eenheid"
    | "medewerker";
  /**
   * URL-referentie naar een betrokkene gerelateerd aan de ZAAK.
   * @format uri
   * @example "https://example.com"
   */
  rol__betrokkene?: string;
  /**
   * Algemeen gehanteerde benaming van de aard van de ROL, afgeleid uit het ROLTYPE.
   * @example "initiator"
   */
  rol__omschrijvingGeneriek?:
    | "adviseur"
    | "behandelaar"
    | "belanghebbende"
    | "beslisser"
    | "initiator"
    | "klantcontacter"
    | "zaakcoordinator"
    | "mede_initiator";
  /**
   * Zaken met een vertrouwelijkheidaanduiding die beperkter is dan de aangegeven aanduiding worden uit de resultaten gefiltered.
   * @example "zaakvertrouwelijk"
   */
  maximaleVertrouwelijkheidaanduiding?:
    | "openbaar"
    | "beperkt_openbaar"
    | "intern"
    | "zaakvertrouwelijk"
    | "vertrouwelijk"
    | "confidentieel"
    | "geheim"
    | "zeer_geheim";
  /**
   * Het burgerservicenummer, bedoeld in artikel 1.1 van de Wet algemene bepalingen burgerservicenummer.
   * @maxLength 9
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__inpBsn?: string;
  /**
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NATUURLIJK PERSOON
   * @maxLength 17
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__anpIdentificatie?: string;
  /**
   * Het administratienummer van de persoon, bedoeld in de Wet BRP
   * @maxLength 10
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__natuurlijkPersoon__inpA_nummer?: string;
  /**
   * Het door een kamer toegekend uniek nummer voor de INGESCHREVEN NIET-NATUURLIJK PERSOON
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__innNnpId?: string;
  /**
   * Het door de gemeente uitgegeven unieke nummer voor een ANDER NIET-NATUURLIJK PERSOON
   * @maxLength 17
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__nietNatuurlijkPersoon__annIdentificatie?: string;
  /**
   * Een korte unieke aanduiding van de Vestiging.
   * @maxLength 24
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__vestiging__vestigingsNummer?: string;
  /**
   * Een korte unieke aanduiding van de MEDEWERKER.
   * @maxLength 24
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__medewerker__identificatie?: string;
  /**
   * Een korte identificatie van de organisatorische eenheid.
   * @example "123456789"
   */
  rol__betrokkeneIdentificatie__organisatorischeEenheid__identificatie?: string;
  /**
   * Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt.
   * @example "zaaktype, status, status.statustype, hoofdzaak.status.statustype, hoofdzaak.deelzaken.status.statustype"
   */
  expand?: string;
  /** Het veld waarop de resultaten geordend worden. Het minnetje betekent omgekeerde volgorde. */
  ordering?: (
    | "startdatum"
    | "-startdatum"
    | "einddatum"
    | "-einddatum"
    | "publicatiedatum"
    | "-publicatiedatum"
    | "archiefactiedatum"
    | "-archiefactiedatum"
    | "registratiedatum"
    | "-registratiedatum"
    | "identificatie"
    | "-identificatie"
  )[];
  /**
   * Een pagina binnen de gepagineerde set resultaten.
   * @example 1
   */
  page?: number;
}

export type ZaakListData = PaginatedZaakList;

export type ZaakCreateData = Zaak;

export interface ZaakRetrieveParams {
  /**
   * Haal details van gelinkte resources direct op. Als je meerdere resources tegelijk wilt ophalen kun je deze scheiden met een komma. Voor het ophalen van resources die een laag dieper genest zijn wordt de punt-notatie gebruikt.
   * @example "zaaktype, status, status.statustype, hoofdzaak.status.statustype, hoofdzaak.deelzaken.status.statustype"
   */
  expand?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
}

export type ZaakRetrieveData = ZaakExpanded;

export type ZaakUpdateData = Zaak;

export type ZaakPartialUpdateData = Zaak;

export type ZaakDestroyData = any;

export type ZaakHeadersData = any;

export type AudittrailListData = AuditTrail[];

export type AudittrailRetrieveData = AuditTrail;

export type ZaakbesluitListData = ZaakBesluit[];

export type ZaakbesluitCreateData = ZaakBesluit;

export type ZaakbesluitRetrieveData = ZaakBesluit;

export type ZaakbesluitDestroyData = any;

export type ZaakeigenschapListData = ZaakEigenschap[];

export type ZaakeigenschapCreateData = ZaakEigenschap;

export type ZaakeigenschapRetrieveData = ZaakEigenschap;

export type ZaakeigenschapUpdateData = ZaakEigenschap;

export type ZaakeigenschapPartialUpdateData = ZaakEigenschap;

export type ZaakeigenschapDestroyData = any;

export type ZaakeigenschapHeadersData = any;

export interface ZaakZoekParams {
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type ZaakZoekData = PaginatedZaakList;
