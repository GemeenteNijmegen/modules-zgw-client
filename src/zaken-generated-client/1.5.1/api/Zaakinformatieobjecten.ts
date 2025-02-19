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
  Fout,
  PatchedZaakInformatieObject,
  ValidatieFout,
  ZaakInformatieObject,
  ZaakinformatieobjectCreateData,
  ZaakinformatieobjectDestroyData,
  ZaakinformatieobjectHeadersData,
  ZaakinformatieobjectListData,
  ZaakinformatieobjectListParams,
  ZaakinformatieobjectPartialUpdateData,
  ZaakinformatieobjectRetrieveData,
  ZaakinformatieobjectUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaakinformatieobjecten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectList
   * @summary Alle ZAAK-INFORMATIEOBJECT relaties opvragen
   * @request GET:/zaakinformatieobjecten
   * @secure
   */
  zaakinformatieobjectList = (query: ZaakinformatieobjectListParams, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectListData, ValidatieFout | Fout>({
      path: `/zaakinformatieobjecten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ZAAK-INFORMATIEOBJECT relatie aan. **Er wordt gevalideerd op** - geldigheid zaak URL - geldigheid informatieobject URL - `zaak.archiefstatus` moet gelijk zijn aan 'nog_te_archiveren' - de combinatie informatieobject en zaak moet uniek zijn **Opmerkingen** - De registratiedatum wordt door het systeem op 'NU' gezet. De `aardRelatie` wordt ook door het systeem gezet. - Bij het aanmaken wordt ook in de Documenten API de gespiegelde relatie aangemaakt, echter zonder de relatie-informatie.
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectCreate
   * @summary Maak een ZAAK-INFORMATIEOBJECT relatie aan.
   * @request POST:/zaakinformatieobjecten
   * @secure
   */
  zaakinformatieobjectCreate = (data: Partial<ZaakInformatieObject>, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectCreateData, ValidatieFout | Fout>({
      path: `/zaakinformatieobjecten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectRetrieve
   * @summary Een specifieke ZAAK-INFORMATIEOBJECT relatie opvragen.
   * @request GET:/zaakinformatieobjecten/{uuid}
   * @secure
   */
  zaakinformatieobjectRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectRetrieveData, Fout>({
      path: `/zaakinformatieobjecten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen. **Er wordt gevalideerd op** - informatieobject URL en zaak URL mogen niet veranderen
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectUpdate
   * @summary Werk een ZAAK-INFORMATIEOBJECT relatie in zijn geheel bij.
   * @request PUT:/zaakinformatieobjecten/{uuid}
   * @secure
   */
  zaakinformatieobjectUpdate = (uuid: string, data: Partial<ZaakInformatieObject>, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectUpdateData, ValidatieFout | Fout>({
      path: `/zaakinformatieobjecten/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Je mag enkel de gegevens van de relatie bewerken, en niet de relatie zelf aanpassen. **Er wordt gevalideerd op** - informatieobject URL en zaak URL mogen niet veranderen
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectPartialUpdate
   * @summary Werk een ZAAK-INFORMATIEOBJECT relatie deels bij.
   * @request PATCH:/zaakinformatieobjecten/{uuid}
   * @secure
   */
  zaakinformatieobjectPartialUpdate = (
    uuid: string,
    data: Partial<PatchedZaakInformatieObject>,
    params: RequestParams = {},
  ) =>
    this.http.request<ZaakinformatieobjectPartialUpdateData, ValidatieFout | Fout>({
      path: `/zaakinformatieobjecten/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description De gespiegelde relatie in de Documenten API wordt door de Zaken API verwijderd. Consumers kunnen dit niet handmatig doen.
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectDestroy
   * @summary Verwijder een ZAAK-INFORMATIEOBJECT relatie.
   * @request DELETE:/zaakinformatieobjecten/{uuid}
   * @secure
   */
  zaakinformatieobjectDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectDestroyData, Fout>({
      path: `/zaakinformatieobjecten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaakinformatieobjecten
   * @name ZaakinformatieobjectHeaders
   * @summary De headers voor een specifiek(e) ZAAKINFORMATIEOBJECT opvragen
   * @request HEAD:/zaakinformatieobjecten/{uuid}
   */
  zaakinformatieobjectHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjectHeadersData, any>({
      path: `/zaakinformatieobjecten/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
