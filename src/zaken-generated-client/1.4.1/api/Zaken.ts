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

import {
  AudittrailListData,
  AudittrailRetrieveData,
  Fout,
  PatchedZaak,
  PatchedZaakEigenschap,
  ValidatieFout,
  Zaak,
  ZaakBesluit,
  ZaakCreateData,
  ZaakDestroyData,
  ZaakEigenschap,
  ZaakHeadersData,
  ZaakListData,
  ZaakListParams,
  ZaakPartialUpdateData,
  ZaakRetrieveData,
  ZaakUpdateData,
  ZaakZoek,
  ZaakZoekData,
  ZaakZoekParams,
  ZaakbesluitCreateData,
  ZaakbesluitDestroyData,
  ZaakbesluitListData,
  ZaakbesluitRetrieveData,
  ZaakeigenschapCreateData,
  ZaakeigenschapDestroyData,
  ZaakeigenschapHeadersData,
  ZaakeigenschapListData,
  ZaakeigenschapPartialUpdateData,
  ZaakeigenschapRetrieveData,
  ZaakeigenschapUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaken<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaken
   * @name ZaakList
   * @summary Alle ZAAKen opvragen.
   * @request GET:/zaken
   * @secure
   */
  zaakList = (query: ZaakListParams, params: RequestParams = {}) =>
    this.http.request<ZaakListData, ValidatieFout | Fout>({
      path: `/zaken`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd. De identificatie moet uniek zijn binnen de bronorganisatie. **Er wordt gevalideerd op:** - geldigheid `zaaktype` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een ZAAKTYPE hebben. - `zaaktype` is geen concept (`zaaktype.concept = False`) - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `barchiefnominatie` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien archiefstatus niet de waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren" hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut `status` de waarde "gearchiveerd" heeft.
   *
   * @tags zaken
   * @name ZaakCreate
   * @summary Maak een ZAAK aan.
   * @request POST:/zaken
   * @secure
   */
  zaakCreate = (data: Zaak, params: RequestParams = {}) =>
    this.http.request<ZaakCreateData, ValidatieFout | Fout>({
      path: `/zaken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAK opvragen.
   *
   * @tags zaken
   * @name ZaakRetrieve
   * @summary Een specifieke ZAAK opvragen.
   * @request GET:/zaken/{uuid}
   * @secure
   */
  zaakRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakRetrieveData, Fout>({
      path: `/zaken/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - `zaaktype` mag niet gewijzigd worden. - `identificatie` mag niet gewijzigd worden. - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren" hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut `status` de waarde "gearchiveerd" heeft. **Opmerkingen** - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd bent. - indien een zaak heropend moet worden, doe dit dan door een nieuwe status toe te voegen die NIET de eindstatus is. Zie de `Status` resource.
   *
   * @tags zaken
   * @name ZaakUpdate
   * @summary Werk een ZAAK in zijn geheel bij.
   * @request PUT:/zaken/{uuid}
   * @secure
   */
  zaakUpdate = (uuid: string, data: Zaak, params: RequestParams = {}) =>
    this.http.request<ZaakUpdateData, ValidatieFout | Fout>({
      path: `/zaken/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - `zaaktype` mag niet gewijzigd worden. - `identificatie` mag niet gewijzigd worden. - `laatsteBetaaldatum` mag niet in de toekomst liggen. - `laatsteBetaaldatum` mag niet gezet worden als de betalingsindicatie "nvt" is. - `archiefnominatie` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefactiedatum` moet een waarde hebben indien `archiefstatus` niet de waarde "nog_te_archiveren" heeft. - `archiefstatus` kan alleen een waarde anders dan "nog_te_archiveren" hebben indien van alle gerelateeerde INFORMATIEOBJECTen het attribuut `status` de waarde "gearchiveerd" heeft. **Opmerkingen** - er worden enkel zaken getoond van de zaaktypes waar u toe geautoriseerd bent. - indien een zaak heropend moet worden, doe dit dan door een nieuwe status toe te voegen die NIET de eindstatus is. Zie de `Status` resource.
   *
   * @tags zaken
   * @name ZaakPartialUpdate
   * @summary Werk een ZAAK deels bij.
   * @request PATCH:/zaken/{uuid}
   * @secure
   */
  zaakPartialUpdate = (uuid: string, data: PatchedZaak, params: RequestParams = {}) =>
    this.http.request<ZaakPartialUpdateData, ValidatieFout | Fout>({
      path: `/zaken/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description ***De gerelateerde resources zijn hierbij*** - `zaak` - de deelzaken van de verwijderde hoofzaak - `status` - alle statussen van de verwijderde zaak - `resultaat` - het resultaat van de verwijderde zaak - `rol` - alle rollen bij de zaak - `zaakobject` - alle zaakobjecten bij de zaak - `zaakeigenschap` - alle eigenschappen van de zaak - `zaakkenmerk` - alle kenmerken van de zaak - `zaakinformatieobject` - dit moet door-cascaden naar de Documenten API, zie ook: https://github.com/VNG-Realisatie/gemma-zaken/issues/791 (TODO) - `klantcontact` - alle klantcontacten bij een zaak
   *
   * @tags zaken
   * @name ZaakDestroy
   * @summary Verwijder een ZAAK.
   * @request DELETE:/zaken/{uuid}
   * @secure
   */
  zaakDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakDestroyData, Fout>({
      path: `/zaken/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaken
   * @name ZaakHeaders
   * @summary De headers voor een specifiek(e) ZAAK opvragen
   * @request HEAD:/zaken/{uuid}
   */
  zaakHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakHeadersData, any>({
      path: `/zaken/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Alle audit trail regels behorend bij de ZAAK.
   *
   * @tags zaken
   * @name AudittrailList
   * @summary Alle audit trail regels behorend bij de ZAAK.
   * @request GET:/zaken/{zaak_uuid}/audittrail
   * @secure
   */
  audittrailList = (zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<AudittrailListData, Fout>({
      path: `/zaken/${zaakUuid}/audittrail`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke audit trail regel opvragen.
   *
   * @tags zaken
   * @name AudittrailRetrieve
   * @summary Een specifieke audit trail regel opvragen
   * @request GET:/zaken/{zaak_uuid}/audittrail/{uuid}
   * @secure
   */
  audittrailRetrieve = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<AudittrailRetrieveData, Fout>({
      path: `/zaken/${zaakUuid}/audittrail/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Alle ZAAKBESLUITen opvragen.
   *
   * @tags zaken
   * @name ZaakbesluitList
   * @summary Alle ZAAKBESLUITen opvragen.
   * @request GET:/zaken/{zaak_uuid}/besluiten
   * @secure
   */
  zaakbesluitList = (zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakbesluitListData, Fout>({
      path: `/zaken/${zaakUuid}/besluiten`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.** De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd. **Er wordt gevalideerd op:** - geldigheid URL naar de ZAAK
   *
   * @tags zaken
   * @name ZaakbesluitCreate
   * @summary Maak een ZAAKBESLUIT aan.
   * @request POST:/zaken/{zaak_uuid}/besluiten
   * @secure
   */
  zaakbesluitCreate = (zaakUuid: string, data: ZaakBesluit, params: RequestParams = {}) =>
    this.http.request<ZaakbesluitCreateData, ValidatieFout | Fout>({
      path: `/zaken/${zaakUuid}/besluiten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifiek ZAAKBESLUIT opvragen.
   *
   * @tags zaken
   * @name ZaakbesluitRetrieve
   * @summary Een specifiek ZAAKBESLUIT opvragen
   * @request GET:/zaken/{zaak_uuid}/besluiten/{uuid}
   * @secure
   */
  zaakbesluitRetrieve = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakbesluitRetrieveData, Fout>({
      path: `/zaken/${zaakUuid}/besluiten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description ***LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.*** De Besluiten API gebruikt dit endpoint om relaties te synchroniseren, daarom is dit endpoint in de Zaken API geimplementeerd.
   *
   * @tags zaken
   * @name ZaakbesluitDestroy
   * @summary Verwijder een ZAAKBESLUIT.
   * @request DELETE:/zaken/{zaak_uuid}/besluiten/{uuid}
   * @secure
   */
  zaakbesluitDestroy = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakbesluitDestroyData, Fout>({
      path: `/zaken/${zaakUuid}/besluiten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Alle ZAAKEIGENSCHAPpen opvragen.
   *
   * @tags zaken
   * @name ZaakeigenschapList
   * @summary Alle ZAAKEIGENSCHAPpen opvragen.
   * @request GET:/zaken/{zaak_uuid}/zaakeigenschappen
   * @secure
   */
  zaakeigenschapList = (zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapListData, Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ZAAKEIGENSCHAP aan. **Er wordt gevalideerd op:** - geldigheid `eigenschap` URL - de resource moet opgevraagd kunnen worden uit de Catalogi API en de vorm van een EIGENSCHAP hebben. - de `eigenschap` moet bij het `ZAAK.zaaktype` horen
   *
   * @tags zaken
   * @name ZaakeigenschapCreate
   * @summary Maak een ZAAKEIGENSCHAP aan.
   * @request POST:/zaken/{zaak_uuid}/zaakeigenschappen
   * @secure
   */
  zaakeigenschapCreate = (zaakUuid: string, data: ZaakEigenschap, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapCreateData, ValidatieFout | Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAKEIGENSCHAP opvragen.
   *
   * @tags zaken
   * @name ZaakeigenschapRetrieve
   * @summary Een specifieke ZAAKEIGENSCHAP opvragen.
   * @request GET:/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}
   * @secure
   */
  zaakeigenschapRetrieve = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapRetrieveData, Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - Alleen de `waarde` mag gewijzigd worden
   *
   * @tags zaken
   * @name ZaakeigenschapUpdate
   * @summary Werk een ZAAKEIGENSCHAP in zijn geheel bij.
   * @request PUT:/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}
   * @secure
   */
  zaakeigenschapUpdate = (uuid: string, zaakUuid: string, data: ZaakEigenschap, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapUpdateData, ValidatieFout | Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - Alleen de `waarde` mag gewijzigd worden
   *
   * @tags zaken
   * @name ZaakeigenschapPartialUpdate
   * @summary Werk een ZAAKEIGENSCHAP deels bij.
   * @request PATCH:/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}
   * @secure
   */
  zaakeigenschapPartialUpdate = (
    uuid: string,
    zaakUuid: string,
    data: PatchedZaakEigenschap,
    params: RequestParams = {},
  ) =>
    this.http.request<ZaakeigenschapPartialUpdateData, ValidatieFout | Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAKEIGENSCHAP
   *
   * @tags zaken
   * @name ZaakeigenschapDestroy
   * @summary Verwijder een ZAAKEIGENSCHAP.
   * @request DELETE:/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}
   * @secure
   */
  zaakeigenschapDestroy = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapDestroyData, Fout>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaken
   * @name ZaakeigenschapHeaders
   * @summary De headers voor een specifiek(e) ZAAKEIGENSCHAP opvragen
   * @request HEAD:/zaken/{zaak_uuid}/zaakeigenschappen/{uuid}
   */
  zaakeigenschapHeaders = (uuid: string, zaakUuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakeigenschapHeadersData, any>({
      path: `/zaken/${zaakUuid}/zaakeigenschappen/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Zoeken/filteren gaat normaal via de `list` operatie, deze is echter niet geschikt voor geo-zoekopdrachten.
   *
   * @tags zaken
   * @name ZaakZoek
   * @summary Voer een (geo)-zoekopdracht uit op ZAAKen.
   * @request POST:/zaken/_zoek
   * @secure
   */
  zaakZoek = (query: ZaakZoekParams, data: ZaakZoek, params: RequestParams = {}) =>
    this.http.request<ZaakZoekData, ValidatieFout | Fout>({
      path: `/zaken/_zoek`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
