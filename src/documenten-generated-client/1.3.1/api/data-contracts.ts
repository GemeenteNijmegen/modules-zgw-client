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
  Afzender = "afzender",
  Geadresseerde = "geadresseerde",
}

export enum AlgoritmeEnum {
  Crc16 = "crc_16",
  Crc32 = "crc_32",
  Crc64 = "crc_64",
  Fletcher4 = "fletcher_4",
  Fletcher8 = "fletcher_8",
  Fletcher16 = "fletcher_16",
  Fletcher32 = "fletcher_32",
  Hmac = "hmac",
  Md5 = "md5",
  Sha1 = "sha_1",
  Sha256 = "sha_256",
  Sha512 = "sha_512",
  Sha3 = "sha_3",
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

export interface BestandsDeel {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * volgnummer
   * Een volgnummer dat de volgorde van de bestandsdelen aangeeft.
   */
  volgnummer: number;
  /**
   * omvang
   * De grootte van dit specifieke bestandsdeel.
   */
  omvang: number;
  /**
   * voltooid
   * Indicatie of dit bestandsdeel volledig is geupload. Dat wil zeggen: het aantal bytes dat staat genoemd bij grootte is daadwerkelijk ontvangen.
   */
  voltooid: boolean;
  /**
   * lock
   * Hash string, which represents id of the lock of related informatieobject
   */
  lock: string;
}

export interface BestandsDeelRequest {
  /**
   * inhoud
   * De (binaire) bestandsinhoud van dit specifieke bestandsdeel.
   * @format binary
   */
  inhoud?: File;
  /**
   * lock
   * Hash string, which represents id of the lock of related informatieobject
   * @minLength 1
   */
  lock: string;
}

export interface BestandsDeelResponse {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * lock
   * Hash string, which represents id of the lock of related informatieobject
   */
  lock: string;
  /**
   * omvang
   * De grootte van dit specifieke bestandsdeel.
   */
  omvang?: number;
  /**
   * inhoud
   * De URL naar de bestandsinhoud van dit specifieke bestandsdeel.
   * @format uri
   */
  inhoud?: string;
  /**
   * voltooid
   * Indicatie of dit bestandsdeel volledig is geupload. Dat wil zeggen: het aantal bytes dat staat genoemd bij grootte is daadwerkelijk ontvangen.
   */
  voltooid?: boolean;
  /**
   * volgnummer
   * Een volgnummer dat de volgorde van de bestandsdelen aangeeft.
   */
  volgnummer?: number;
}

/** Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE. */
export type BinnenlandsCorrespondentieadresVerzending = {
  /**
   * huisletter
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.
   * @maxLength 1
   */
  huisletter?: string;
  /**
   * huisnummer
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nummering.
   * @min 1
   * @max 99999
   */
  huisnummer: number;
  /**
   * huisnummer toevoeging
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.
   * @maxLength 4
   */
  huisnummerToevoeging?: string;
  /**
   * naam openbare ruimte
   * Een door het bevoegde gemeentelijke orgaan aan een GEMEENTELIJKE  OPENBARE RUIMTE toegekende benaming.
   * @maxLength 80
   */
  naamOpenbareRuimte: string;
  /**
   * postcode
   * De door TNT Post vastgestelde code behorende bij een bepaalde combinatie van een naam van een woonplaats, naam van een openbare ruimte en een huisnummer.
   * @maxLength 6
   */
  postcode?: string;
  /**
   * woonplaatsnaam
   * De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
   * @maxLength 80
   */
  woonplaatsnaam: string;
} | null;

/** Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE. */
export type BinnenlandsCorrespondentieadresVerzendingRequest = {
  /**
   * huisletter
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende toevoeging aan een huisnummer in de vorm van een alfanumeriek teken.
   * @maxLength 1
   */
  huisletter?: string;
  /**
   * huisnummer
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nummering.
   * @min 1
   * @max 99999
   */
  huisnummer: number;
  /**
   * huisnummer toevoeging
   * Een door of namens het bevoegd gemeentelijk orgaan ten aanzien van een adresseerbaar object toegekende nadere toevoeging aan een huisnummer of een combinatie van huisnummer en huisletter.
   * @maxLength 4
   */
  huisnummerToevoeging?: string;
  /**
   * naam openbare ruimte
   * Een door het bevoegde gemeentelijke orgaan aan een GEMEENTELIJKE  OPENBARE RUIMTE toegekende benaming.
   * @minLength 1
   * @maxLength 80
   */
  naamOpenbareRuimte: string;
  /**
   * postcode
   * De door TNT Post vastgestelde code behorende bij een bepaalde combinatie van een naam van een woonplaats, naam van een openbare ruimte en een huisnummer.
   * @maxLength 6
   */
  postcode?: string;
  /**
   * woonplaatsnaam
   * De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
   * @minLength 1
   * @maxLength 80
   */
  woonplaatsnaam: string;
} | null;

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

/** De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
export type BuitenlandsCorrespondentieadresVerzending = {
  /**
   * adres buitenland 1
   * Het eerste deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @maxLength 35
   */
  adresBuitenland1: string;
  /**
   * adres buitenland 2
   * Het tweede deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @maxLength 35
   */
  adresBuitenland2?: string;
  /**
   * adres buitenland 3
   * Het derde deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @maxLength 35
   */
  adresBuitenland3?: string;
  /**
   * land postadres
   * Het LAND dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @format uri
   * @maxLength 200
   */
  landPostadres: string;
} | null;

/** De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
export type BuitenlandsCorrespondentieadresVerzendingRequest = {
  /**
   * adres buitenland 1
   * Het eerste deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @minLength 1
   * @maxLength 35
   */
  adresBuitenland1: string;
  /**
   * adres buitenland 2
   * Het tweede deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @maxLength 35
   */
  adresBuitenland2?: string;
  /**
   * adres buitenland 3
   * Het derde deel dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @maxLength 35
   */
  adresBuitenland3?: string;
  /**
   * land postadres
   * Het LAND dat behoort bij het afwijkend buitenlandse correspondentieadres van de betrokkene in zijn/haar rol bij de zaak.
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  landPostadres: string;
} | null;

/** De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
export type BuitenlandsCorrespondentiepostadresVerzending = {
  /**
   * Postbus-of antwoordnummer
   * De numerieke aanduiding zoals deze door de Nederlandse PTT is vastgesteld voor postbusadressen en antwoordnummeradressen.
   * @min 1
   * @max 9999
   */
  postBusOfAntwoordnummer: number;
  /**
   * postadres postcode
   * De officiële Nederlandse PTT codering, bestaande uit een numerieke woonplaatscode en een alfabetische lettercode.
   * @maxLength 6
   */
  postadresPostcode: string;
  /**
   * Postadrestype
   * Aanduiding van het soort postadres.
   */
  postadresType: PostadresTypeEnum;
  /**
   * woonplaatsnaam
   * De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
   * @maxLength 80
   */
  woonplaatsnaam: string;
} | null;

/** De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE. */
export type BuitenlandsCorrespondentiepostadresVerzendingRequest = {
  /**
   * Postbus-of antwoordnummer
   * De numerieke aanduiding zoals deze door de Nederlandse PTT is vastgesteld voor postbusadressen en antwoordnummeradressen.
   * @min 1
   * @max 9999
   */
  postBusOfAntwoordnummer: number;
  /**
   * postadres postcode
   * De officiële Nederlandse PTT codering, bestaande uit een numerieke woonplaatscode en een alfabetische lettercode.
   * @minLength 1
   * @maxLength 6
   */
  postadresPostcode: string;
  /**
   * Postadrestype
   * Aanduiding van het soort postadres.
   */
  postadresType: PostadresTypeEnum;
  /**
   * woonplaatsnaam
   * De door het bevoegde gemeentelijke orgaan aan een WOONPLAATS toegekende benaming.
   * @minLength 1
   * @maxLength 80
   */
  woonplaatsnaam: string;
} | null;

export interface EIOZoekRequest {
  /**
   * uuid__in
   * Array of unieke resource identifiers (UUID4)
   */
  uuid_In: string[];
}

/** Serializer for the EnkelvoudigInformatieObject model */
export interface EnkelvoudigInformatieObject {
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
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @maxLength 200
   */
  titel: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 200
   */
  auteur: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal: string;
  /**
   * versie
   * Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
   */
  versie: number;
  /**
   * begin registratie
   * Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
   * @format date-time
   */
  beginRegistratie: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Download URL van de binaire inhoud.
   * @format uri
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: Ondertekening | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: Integriteit | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 200
   */
  informatieobjecttype: string;
  /**
   * locked
   * Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
   */
  locked: boolean;
  /** bestandsdelen */
  bestandsdelen: BestandsDeel[];
}

/**
 * This serializer class is used by EnkelvoudigInformatieObjectViewSet for
 * create operation for large files
 */
export interface EnkelvoudigInformatieObjectCreateLock {
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
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @maxLength 200
   */
  titel: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 200
   */
  auteur: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal: string;
  /**
   * versie
   * Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
   */
  versie: number;
  /**
   * begin registratie
   * Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
   * @format date-time
   */
  beginRegistratie: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Download URL van de binaire inhoud.
   * @format uri
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: Ondertekening | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: Integriteit | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 200
   */
  informatieobjecttype: string;
  /**
   * locked
   * Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
   */
  locked: boolean;
  /** bestandsdelen */
  bestandsdelen: BestandsDeel[];
  /**
   * lock
   * Lock id generated if the large file is created and should be used while updating the document. Documents with base64 encoded files are created without lock
   */
  lock: string;
}

/**
 * This serializer class is used by EnkelvoudigInformatieObjectViewSet for
 * create operation for large files
 */
export interface EnkelvoudigInformatieObjectCreateLockRequest {
  /**
   * identificatie
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @minLength 1
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @minLength 1
   * @maxLength 200
   */
  titel: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @minLength 1
   * @maxLength 200
   */
  auteur: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Binaire inhoud, in base64 geëncodeerd.
   * @format byte
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: OndertekeningRequest | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: IntegriteitRequest | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  informatieobjecttype: string;
}

/**
 * This serializer class is used by EnkelvoudigInformatieObjectViewSet for
 * update and partial_update operations
 */
export interface EnkelvoudigInformatieObjectWithLock {
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
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @maxLength 200
   */
  titel: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 200
   */
  auteur: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal: string;
  /**
   * versie
   * Het (automatische) versienummer van het INFORMATIEOBJECT. Deze begint bij 1 als het INFORMATIEOBJECT aangemaakt wordt.
   */
  versie: number;
  /**
   * begin registratie
   * Een datumtijd in ISO8601 formaat waarop deze versie van het INFORMATIEOBJECT is aangemaakt of gewijzigd.
   * @format date-time
   */
  beginRegistratie: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Download URL van de binaire inhoud.
   * @format uri
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: Ondertekening | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: Integriteit | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @maxLength 200
   */
  informatieobjecttype: string;
  /**
   * locked
   * Geeft aan of het document gelocked is. Alleen als een document gelocked is, mogen er aanpassingen gemaakt worden.
   */
  locked: boolean;
  /** bestandsdelen */
  bestandsdelen: BestandsDeel[];
}

/**
 * This serializer class is used by EnkelvoudigInformatieObjectViewSet for
 * update and partial_update operations
 */
export interface EnkelvoudigInformatieObjectWithLockRequest {
  /**
   * identificatie
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @minLength 1
   * @maxLength 9
   */
  bronorganisatie: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @minLength 1
   * @maxLength 200
   */
  titel: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @minLength 1
   * @maxLength 200
   */
  auteur: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Binaire inhoud, in base64 geëncodeerd.
   * @format byte
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: OndertekeningRequest | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: IntegriteitRequest | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  informatieobjecttype: string;
  /**
   * lock
   * Tijdens het updaten van een document (PATCH, PUT) moet het `lock` veld opgegeven worden. Bij het aanmaken (POST) mag het geen waarde hebben.
   * @minLength 1
   */
  lock: string;
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

export interface Gebruiksrechten {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject: string;
  /**
   * startdatum
   * Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum.
   * @format date-time
   */
  startdatum: string;
  /**
   * Startdatum
   * Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn.
   * @format date-time
   */
  einddatum?: string | null;
  /**
   * omschrijving voorwaarden
   * Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
   */
  omschrijvingVoorwaarden: string;
}

export interface GebruiksrechtenRequest {
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject: string;
  /**
   * startdatum
   * Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum.
   * @format date-time
   */
  startdatum: string;
  /**
   * Startdatum
   * Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn.
   * @format date-time
   */
  einddatum?: string | null;
  /**
   * omschrijving voorwaarden
   * Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
   * @minLength 1
   */
  omschrijvingVoorwaarden: string;
}

/** Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand. */
export type Integriteit = {
  /**
   * integriteit algoritme
   * Aanduiding van algoritme, gebruikt om de checksum te maken.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `crc_16` - CRC-16
   * * `crc_32` - CRC-32
   * * `crc_64` - CRC-64
   * * `fletcher_4` - Fletcher-4
   * * `fletcher_8` - Fletcher-8
   * * `fletcher_16` - Fletcher-16
   * * `fletcher_32` - Fletcher-32
   * * `hmac` - HMAC
   * * `md5` - MD5
   * * `sha_1` - SHA-1
   * * `sha_256` - SHA-256
   * * `sha_512` - SHA-512
   * * `sha_3` - SHA-3
   */
  algoritme: AlgoritmeEnum;
  /**
   * integriteit waarde
   * De waarde van de checksum.
   * @maxLength 128
   */
  waarde: string;
  /**
   * integriteit datum
   * Datum waarop de checksum is gemaakt.
   * @format date
   */
  datum: string;
} | null;

/** Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand. */
export type IntegriteitRequest = {
  /**
   * integriteit algoritme
   * Aanduiding van algoritme, gebruikt om de checksum te maken.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `crc_16` - CRC-16
   * * `crc_32` - CRC-32
   * * `crc_64` - CRC-64
   * * `fletcher_4` - Fletcher-4
   * * `fletcher_8` - Fletcher-8
   * * `fletcher_16` - Fletcher-16
   * * `fletcher_32` - Fletcher-32
   * * `hmac` - HMAC
   * * `md5` - MD5
   * * `sha_1` - SHA-1
   * * `sha_256` - SHA-256
   * * `sha_512` - SHA-512
   * * `sha_3` - SHA-3
   */
  algoritme: AlgoritmeEnum;
  /**
   * integriteit waarde
   * De waarde van de checksum.
   * @minLength 1
   * @maxLength 128
   */
  waarde: string;
  /**
   * integriteit datum
   * Datum waarop de checksum is gemaakt.
   * @format date
   */
  datum: string;
} | null;

/**
 * Serializer for the lock action of EnkelvoudigInformatieObjectCanonical
 * model
 */
export interface LockEnkelvoudigInformatieObject {
  /**
   * lock
   * Hash string, wordt gebruikt als ID voor de lock
   */
  lock: string;
}

export interface ObjectInformatieObject {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject: string;
  /**
   * object
   * URL-referentie naar het gerelateerde OBJECT (in deze of een andere API).
   * @format uri
   * @maxLength 1000
   */
  object: string;
  /**
   * Objecttype
   * Het type van het gerelateerde OBJECT.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `besluit` - Besluit
   * * `zaak` - Zaak
   */
  objectType: ObjectTypeEnum;
}

export interface ObjectInformatieObjectRequest {
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject: string;
  /**
   * object
   * URL-referentie naar het gerelateerde OBJECT (in deze of een andere API).
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  object: string;
  /**
   * Objecttype
   * Het type van het gerelateerde OBJECT.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `besluit` - Besluit
   * * `zaak` - Zaak
   */
  objectType: ObjectTypeEnum;
}

export enum ObjectTypeEnum {
  Besluit = "besluit",
  Zaak = "zaak",
  Verzoek = "verzoek",
}

/** Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft. */
export type Ondertekening = {
  /**
   * Ondertekeningsoort
   * Aanduiding van de wijze van ondertekening van het INFORMATIEOBJECT
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `analoog` - Analoog
   * * `digitaal` - Digitaal
   * * `pki` - PKI
   */
  soort: SoortEnum;
  /**
   * Ondertekeningdatum
   * De datum waarop de ondertekening van het INFORMATIEOBJECT heeft plaatsgevonden.
   * @format date
   */
  datum: string;
} | null;

/** Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft. */
export type OndertekeningRequest = {
  /**
   * Ondertekeningsoort
   * Aanduiding van de wijze van ondertekening van het INFORMATIEOBJECT
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `analoog` - Analoog
   * * `digitaal` - Digitaal
   * * `pki` - PKI
   */
  soort: SoortEnum;
  /**
   * Ondertekeningdatum
   * De datum waarop de ondertekening van het INFORMATIEOBJECT heeft plaatsgevonden.
   * @format date
   */
  datum: string;
} | null;

export interface PaginatedEnkelvoudigInformatieObjectList {
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
  results?: EnkelvoudigInformatieObject[];
}

export interface PaginatedVerzendingList {
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
  results?: Verzending[];
}

/**
 * This serializer class is used by EnkelvoudigInformatieObjectViewSet for
 * update and partial_update operations
 */
export interface PatchedEnkelvoudigInformatieObjectWithLockRequest {
  /**
   * identificatie
   * Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT.
   * @maxLength 40
   */
  identificatie?: string;
  /**
   * bronorganisatie
   * Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd.
   * @minLength 1
   * @maxLength 9
   */
  bronorganisatie?: string;
  /**
   * creatiedatum
   * Een datum of een gebeurtenis in de levenscyclus van het INFORMATIEOBJECT.
   * @format date
   */
  creatiedatum?: string;
  /**
   * titel
   * De naam waaronder het INFORMATIEOBJECT formeel bekend is.
   * @minLength 1
   * @maxLength 200
   */
  titel?: string;
  /**
   * vertrouwelijkheidaanduiding
   * Aanduiding van de mate waarin het INFORMATIEOBJECT voor de openbaarheid bestemd is.
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
  vertrouwelijkheidaanduiding?: VertrouwelijkheidaanduidingEnum | BlankEnum;
  /**
   * auteur
   * De persoon of organisatie die in de eerste plaats verantwoordelijk is voor het creëren van de inhoud van het INFORMATIEOBJECT.
   * @minLength 1
   * @maxLength 200
   */
  auteur?: string;
  /**
   * status
   * Aanduiding van de stand van zaken van een INFORMATIEOBJECT. De waarden 'in bewerking' en 'ter vaststelling' komen niet voor als het attribuut `ontvangstdatum` van een waarde is voorzien. Wijziging van de Status in 'gearchiveerd' impliceert dat het informatieobject een duurzaam, niet-wijzigbaar Formaat dient te hebben.
   *
   * Uitleg bij mogelijke waarden:
   *
   * * `in_bewerking` - (In bewerking) Aan het informatieobject wordt nog gewerkt.
   * * `ter_vaststelling` - (Ter vaststelling) Informatieobject gereed maar moet nog vastgesteld worden.
   * * `definitief` - (Definitief) Informatieobject door bevoegd iets of iemand vastgesteld dan wel ontvangen.
   * * `gearchiveerd` - (Gearchiveerd) Informatieobject duurzaam bewaarbaar gemaakt; een gearchiveerd informatie-element.
   */
  status?: StatusEnum | BlankEnum;
  /**
   * formaat
   * Het "Media Type" (voorheen "MIME type") voor de wijze waaropde inhoud van het INFORMATIEOBJECT is vastgelegd in een computerbestand. Voorbeeld: `application/msword`. Zie: https://www.iana.org/assignments/media-types/media-types.xhtml
   * @maxLength 255
   */
  formaat?: string;
  /**
   * taal
   * Een ISO 639-2/B taalcode waarin de inhoud van het INFORMATIEOBJECT is vastgelegd. Voorbeeld: `dut`. Zie: https://www.iso.org/standard/4767.html
   * @minLength 3
   * @maxLength 3
   */
  taal?: string;
  /**
   * bestandsnaam
   * De naam van het fysieke bestand waarin de inhoud van het informatieobject is vastgelegd, inclusief extensie.
   * @maxLength 255
   */
  bestandsnaam?: string;
  /**
   * inhoud
   * Binaire inhoud, in base64 geëncodeerd.
   * @format byte
   */
  inhoud?: string | null;
  /**
   * bestandsomvang
   * Aantal bytes dat de inhoud van INFORMATIEOBJECT in beslag neemt.
   * @format int64
   * @min 0
   * @max 9223372036854776000
   */
  bestandsomvang?: number | null;
  /**
   * link
   * De URL waarmee de inhoud van het INFORMATIEOBJECT op te vragen is.
   * @format uri
   * @maxLength 200
   */
  link?: string;
  /**
   * beschrijving
   * Een generieke beschrijving van de inhoud van het INFORMATIEOBJECT.
   * @maxLength 1000
   */
  beschrijving?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * indicatie gebruiksrecht
   * Indicatie of er beperkingen gelden aangaande het gebruik van het informatieobject anders dan raadpleging. Dit veld mag `null` zijn om aan te geven dat de indicatie nog niet bekend is. Als de indicatie gezet is, dan kan je de gebruiksrechten die van toepassing zijn raadplegen via de GEBRUIKSRECHTen resource.
   */
  indicatieGebruiksrecht?: boolean | null;
  /**
   * verschijningsvorm
   * De essentiële opmaakaspecten van een INFORMATIEOBJECT.
   */
  verschijningsvorm?: string;
  /**
   * ondertekening
   * Aanduiding van de rechtskracht van een informatieobject. Mag niet van een waarde zijn voorzien als de `status` de waarde 'in bewerking' of 'ter vaststelling' heeft.
   */
  ondertekening?: OndertekeningRequest | null;
  /**
   * integriteit
   * Uitdrukking van mate van volledigheid en onbeschadigd zijn van digitaal bestand.
   */
  integriteit?: IntegriteitRequest | null;
  /**
   * informatieobjecttype
   * URL-referentie naar het INFORMATIEOBJECTTYPE (in de Catalogi API).
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  informatieobjecttype?: string;
  /**
   * lock
   * Tijdens het updaten van een document (PATCH, PUT) moet het `lock` veld opgegeven worden. Bij het aanmaken (POST) mag het geen waarde hebben.
   * @minLength 1
   */
  lock?: string;
}

export interface PatchedGebruiksrechtenRequest {
  /**
   * informatieobject
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject?: string;
  /**
   * startdatum
   * Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum.
   * @format date-time
   */
  startdatum?: string;
  /**
   * Startdatum
   * Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn.
   * @format date-time
   */
  einddatum?: string | null;
  /**
   * omschrijving voorwaarden
   * Omschrijving van de van toepassing zijnde voorwaarden aan het gebruik anders dan raadpleging
   * @minLength 1
   */
  omschrijvingVoorwaarden?: string;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface PatchedVerzendingRequest {
  /**
   * betrokkene
   * URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  betrokkene?: string;
  /**
   * informatieobject
   * URL-referentie naar het informatieobject dat is ontvangen of verzonden.
   * @format uri
   */
  informatieobject?: string;
  /**
   * aard relatie
   * Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
   */
  aardRelatie?: AardRelatieEnum;
  /**
   * toelichting
   * Verduidelijking van de afzender- of geadresseerde-relatie.
   * @maxLength 200
   */
  toelichting?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * Contactpersoon
   * URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  contactPersoon?: string;
  /**
   * contactpersoonnaam
   * De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @maxLength 40
   */
  contactpersoonnaam?: string;
  /**
   * binnenlandsCorrespondentieadres
   * Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
   */
  binnenlandsCorrespondentieadres?: BinnenlandsCorrespondentieadresVerzendingRequest | null;
  /**
   * buitenlandsCorrespondentieadres
   * De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  buitenlandsCorrespondentieadres?: BuitenlandsCorrespondentieadresVerzendingRequest | null;
  /**
   * correspondentiePostadres
   * De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  correspondentiePostadres?: BuitenlandsCorrespondentiepostadresVerzendingRequest | null;
  /**
   * faxnummer
   * faxnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  faxnummer?: string | null;
  /**
   * emailadres
   * emailadres van de ontvanger of afzender.
   * @maxLength 100
   */
  emailadres?: string | null;
  /**
   * mijn overheid
   * is het informatieobject verzonden via mijnOverheid naar de ontvanger.
   */
  mijnOverheid?: boolean;
  /**
   * telefoonnummer
   * telefoonnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  telefoonnummer?: string | null;
}

export enum PostadresTypeEnum {
  Antwoordnummer = "antwoordnummer",
  Postbusnummer = "postbusnummer",
}

export enum SoortEnum {
  Analoog = "analoog",
  Digitaal = "digitaal",
  Pki = "pki",
}

export enum StatusEnum {
  InBewerking = "in_bewerking",
  TerVaststelling = "ter_vaststelling",
  Definitief = "definitief",
  Gearchiveerd = "gearchiveerd",
}

/**
 * Serializer for the unlock action of EnkelvoudigInformatieObjectCanonical
 * model
 */
export interface UnlockEnkelvoudigInformatieObjectRequest {
  /**
   * lock
   * Hash string, wordt gebruikt als ID voor de lock
   * @maxLength 100
   */
  lock?: string;
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

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface Verzending {
  /**
   * url
   * URL-referentie naar dit object. Dit is de unieke identificatie en locatie van dit object.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  url: string;
  /**
   * betrokkene
   * URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
   * @format uri
   * @maxLength 200
   */
  betrokkene: string;
  /**
   * informatieobject
   * URL-referentie naar het informatieobject dat is ontvangen of verzonden.
   * @format uri
   */
  informatieobject: string;
  /**
   * aard relatie
   * Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
   */
  aardRelatie: AardRelatieEnum;
  /**
   * toelichting
   * Verduidelijking van de afzender- of geadresseerde-relatie.
   * @maxLength 200
   */
  toelichting?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * Contactpersoon
   * URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @format uri
   * @maxLength 1000
   */
  contactPersoon: string;
  /**
   * contactpersoonnaam
   * De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @maxLength 40
   */
  contactpersoonnaam?: string;
  /**
   * binnenlandsCorrespondentieadres
   * Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
   */
  binnenlandsCorrespondentieadres?: BinnenlandsCorrespondentieadresVerzending | null;
  /**
   * buitenlandsCorrespondentieadres
   * De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  buitenlandsCorrespondentieadres?: BuitenlandsCorrespondentieadresVerzending | null;
  /**
   * correspondentiePostadres
   * De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  correspondentiePostadres?: BuitenlandsCorrespondentiepostadresVerzending | null;
  /**
   * faxnummer
   * faxnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  faxnummer?: string | null;
  /**
   * emailadres
   * emailadres van de ontvanger of afzender.
   * @maxLength 100
   */
  emailadres?: string | null;
  /**
   * mijn overheid
   * is het informatieobject verzonden via mijnOverheid naar de ontvanger.
   */
  mijnOverheid?: boolean;
  /**
   * telefoonnummer
   * telefoonnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  telefoonnummer?: string | null;
}

/**
 * Set gegevensgroepdata from validated nested data.
 *
 * Usage: include the mixin on the ModelSerializer that has gegevensgroepen.
 */
export interface VerzendingRequest {
  /**
   * betrokkene
   * URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
   * @format uri
   * @minLength 1
   * @maxLength 200
   */
  betrokkene: string;
  /**
   * informatieobject
   * URL-referentie naar het informatieobject dat is ontvangen of verzonden.
   * @format uri
   */
  informatieobject: string;
  /**
   * aard relatie
   * Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT.
   */
  aardRelatie: AardRelatieEnum;
  /**
   * toelichting
   * Verduidelijking van de afzender- of geadresseerde-relatie.
   * @maxLength 200
   */
  toelichting?: string;
  /**
   * ontvangstdatum
   * De datum waarop het INFORMATIEOBJECT ontvangen is. Verplicht te registreren voor INFORMATIEOBJECTen die van buiten de zaakbehandelende organisatie(s) ontvangen zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'afzender' heeft.
   * @format date
   */
  ontvangstdatum?: string | null;
  /**
   * verzenddatum
   * De datum waarop het INFORMATIEOBJECT verzonden is, zoals deze op het INFORMATIEOBJECT vermeld is. Dit geldt voor zowel inkomende als uitgaande INFORMATIEOBJECTen. Eenzelfde informatieobject kan niet tegelijk inkomend en uitgaand zijn. Ontvangst en verzending is voorbehouden aan documenten die van of naar andere personen ontvangen of verzonden zijn waarbij die personen niet deel uit maken van de behandeling van de zaak waarin het document een rol speelt. Vervangt het gelijknamige attribuut uit Informatieobject. Verplicht gevuld wanneer aardRelatie de waarde 'geadresseerde' heeft.
   * @format date
   */
  verzenddatum?: string | null;
  /**
   * Contactpersoon
   * URL-referentie naar de persoon die als aanspreekpunt fungeert voor de BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @format uri
   * @minLength 1
   * @maxLength 1000
   */
  contactPersoon: string;
  /**
   * contactpersoonnaam
   * De opgemaakte naam van de persoon die als aanspreekpunt fungeert voorde BETROKKENE inzake het ontvangen of verzonden INFORMATIEOBJECT.
   * @maxLength 40
   */
  contactpersoonnaam?: string;
  /**
   * binnenlandsCorrespondentieadres
   * Het correspondentieadres, betreffende een adresseerbaar object, van de BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT indien dat afwijkt van het reguliere binnenlandse correspondentieadres van BETROKKENE.
   */
  binnenlandsCorrespondentieadres?: BinnenlandsCorrespondentieadresVerzendingRequest | null;
  /**
   * buitenlandsCorrespondentieadres
   * De gegevens van het adres in het buitenland van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  buitenlandsCorrespondentieadres?: BuitenlandsCorrespondentieadresVerzendingRequest | null;
  /**
   * correspondentiePostadres
   * De gegevens die tezamen een postbusadres of antwoordnummeradres vormen van BETROKKENE, zijnde afzender of geadresseerde, zoals vermeld in het ontvangen of verzonden INFORMATIEOBJECT en dat afwijkt van de reguliere correspondentiegegevens van BETROKKENE.
   */
  correspondentiePostadres?: BuitenlandsCorrespondentiepostadresVerzendingRequest | null;
  /**
   * faxnummer
   * faxnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  faxnummer?: string | null;
  /**
   * emailadres
   * emailadres van de ontvanger of afzender.
   * @maxLength 100
   */
  emailadres?: string | null;
  /**
   * mijn overheid
   * is het informatieobject verzonden via mijnOverheid naar de ontvanger.
   */
  mijnOverheid?: boolean;
  /**
   * telefoonnummer
   * telefoonnummer van de ontvanger of afzender.
   * @maxLength 15
   */
  telefoonnummer?: string | null;
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

export type BestandsdeelUpdateData = BestandsDeelResponse;

export interface EnkelvoudiginformatieobjectListParams {
  /** Een binnen een gegeven context ondubbelzinnige referentie naar het INFORMATIEOBJECT. */
  identificatie?: string;
  /** Het RSIN van de Niet-natuurlijk persoon zijnde de organisatie die het informatieobject heeft gecreëerd of heeft ontvangen en als eerste in een samenwerkingsketen heeft vastgelegd. */
  bronorganisatie?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type EnkelvoudiginformatieobjectListData = PaginatedEnkelvoudigInformatieObjectList;

export type EnkelvoudiginformatieobjectCreateData = EnkelvoudigInformatieObjectCreateLock;

export type AudittrailListData = AuditTrail[];

export type AudittrailRetrieveData = AuditTrail;

export interface EnkelvoudiginformatieobjectRetrieveParams {
  /** Het (automatische) versienummer van het INFORMATIEOBJECT. */
  versie?: number;
  /** Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
  registratieOp?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
}

export type EnkelvoudiginformatieobjectRetrieveData = EnkelvoudigInformatieObject;

export type EnkelvoudiginformatieobjectUpdateData = EnkelvoudigInformatieObjectWithLock;

export type EnkelvoudiginformatieobjectPartialUpdateData = EnkelvoudigInformatieObjectWithLock;

export type EnkelvoudiginformatieobjectDestroyData = any;

export type EnkelvoudiginformatieobjectHeadersData = EnkelvoudigInformatieObject;

export interface EnkelvoudiginformatieobjectDownloadParams {
  /** Het (automatische) versienummer van het INFORMATIEOBJECT. */
  versie?: number;
  /** Een datumtijd in ISO8601 formaat. De versie van het INFORMATIEOBJECT die qua `begin_registratie` het kortst hiervoor zit wordt opgehaald. */
  registratieOp?: string;
  /**
   * uuid
   * Unieke resource identifier (UUID4)
   * @format uuid
   */
  uuid: string;
}

/** @format binary */
export type EnkelvoudiginformatieobjectDownloadData = File;

export type EnkelvoudiginformatieobjectLockData = LockEnkelvoudigInformatieObject;

export type EnkelvoudiginformatieobjectUnlockData = any;

export interface EnkelvoudiginformatieobjectZoekParams {
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type EnkelvoudiginformatieobjectZoekData = PaginatedEnkelvoudigInformatieObjectList;

export interface GebruiksrechtenListParams {
  /**
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject?: string;
  /** Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
  startdatum__lt?: string;
  /** Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
  startdatum__lte?: string;
  /** Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
  startdatum__gt?: string;
  /** Begindatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. Doorgaans is de datum van creatie van het informatieobject de startdatum. */
  startdatum__gte?: string;
  /** Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
  einddatum__lt?: string;
  /** Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
  einddatum__lte?: string;
  /** Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
  einddatum__gt?: string;
  /** Einddatum van de periode waarin de gebruiksrechtvoorwaarden van toepassing zijn. */
  einddatum__gte?: string;
}

export type GebruiksrechtenListData = Gebruiksrechten[];

export type GebruiksrechtenCreateData = Gebruiksrechten;

export type GebruiksrechtenRetrieveData = Gebruiksrechten;

export type GebruiksrechtenUpdateData = Gebruiksrechten;

export type GebruiksrechtenPartialUpdateData = Gebruiksrechten;

export type GebruiksrechtenDestroyData = any;

export type GebruiksrechtenHeadersData = Gebruiksrechten;

export interface ObjectinformatieobjectListParams {
  /**
   * URL-referentie naar het gerelateerde OBJECT (in deze of een andere API).
   * @format uri
   */
  object?: string;
  /**
   * URL-referentie naar het INFORMATIEOBJECT.
   * @format uri
   */
  informatieobject?: string;
}

export type ObjectinformatieobjectListData = ObjectInformatieObject[];

export type ObjectinformatieobjectCreateData = ObjectInformatieObject;

export type ObjectinformatieobjectRetrieveData = ObjectInformatieObject;

export type ObjectinformatieobjectDestroyData = any;

export type ObjectinformatieobjectHeadersData = ObjectInformatieObject;

export interface VerzendingListParams {
  /** Omschrijving van de aard van de relatie van de BETROKKENE tot het INFORMATIEOBJECT. */
  aardRelatie?: "afzender" | "geadresseerde";
  /**
   * URL-referentie naar het informatieobject dat is ontvangen of verzonden.
   * @format uri
   */
  informatieobject?: string;
  /**
   * URL-referentie naar de betrokkene waarvan het informatieobject is ontvangen of waaraan dit is verzonden.
   * @format uri
   */
  betrokkene?: string;
  /** Een pagina binnen de gepagineerde set resultaten. */
  page?: number;
}

export type VerzendingListData = PaginatedVerzendingList;

export type VerzendingCreateData = Verzending;

export type VerzendingRetrieveData = Verzending;

export type VerzendingUpdateData = Verzending;

export type VerzendingPartialUpdateData = Verzending;

export type VerzendingDestroyData = any;

export type VerzendingHeadersData = Verzending;
