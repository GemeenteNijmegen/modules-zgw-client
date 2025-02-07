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
  PatchedZaakObject,
  ValidatieFout,
  ZaakObject,
  ZaakobjectCreateData,
  ZaakobjectDestroyData,
  ZaakobjectHeadersData,
  ZaakobjectListData,
  ZaakobjectListParams,
  ZaakobjectPartialUpdateData,
  ZaakobjectRetrieveData,
  ZaakobjectUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaakobjecten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaakobjecten
   * @name ZaakobjectList
   * @summary Alle ZAAKOBJECTen opvragen.
   * @request GET:/zaakobjecten
   * @secure
   */
  zaakobjectList = (query: ZaakobjectListParams, params: RequestParams = {}) =>
    this.http.request<ZaakobjectListData, ValidatieFout | Fout>({
      path: `/zaakobjecten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ZAAKOBJECT aan. **Er wordt gevalideerd op** - Indien de `object` URL opgegeveven is, dan moet deze een geldige  response (HTTP 200) geven. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de `objectType` discriminator.
   *
   * @tags zaakobjecten
   * @name ZaakobjectCreate
   * @summary Maak een ZAAKOBJECT aan.
   * @request POST:/zaakobjecten
   * @secure
   */
  zaakobjectCreate = (data: ZaakObject, params: RequestParams = {}) =>
    this.http.request<ZaakobjectCreateData, ValidatieFout | Fout>({
      path: `/zaakobjecten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAKOBJECT opvragen.
   *
   * @tags zaakobjecten
   * @name ZaakobjectRetrieve
   * @summary Een specifieke ZAAKOBJECT opvragen.
   * @request GET:/zaakobjecten/{uuid}
   * @secure
   */
  zaakobjectRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjectRetrieveData, Fout>({
      path: `/zaakobjecten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.
   *
   * @tags zaakobjecten
   * @name ZaakobjectUpdate
   * @summary Werk een ZAAKOBJECT zijn geheel bij.
   * @request PUT:/zaakobjecten/{uuid}
   * @secure
   */
  zaakobjectUpdate = (uuid: string, data: ZaakObject, params: RequestParams = {}) =>
    this.http.request<ZaakobjectUpdateData, ValidatieFout | Fout>({
      path: `/zaakobjecten/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - De attributen `zaak`, `object` en `objectType` mogen niet gewijzigd worden. - Indien opgegeven, dan wordt `objectIdentificatie` gevalideerd tegen de objectType discriminator.
   *
   * @tags zaakobjecten
   * @name ZaakobjectPartialUpdate
   * @summary Werk een ZAAKOBJECT deels bij.
   * @request PATCH:/zaakobjecten/{uuid}
   * @secure
   */
  zaakobjectPartialUpdate = (uuid: string, data: PatchedZaakObject, params: RequestParams = {}) =>
    this.http.request<ZaakobjectPartialUpdateData, ValidatieFout | Fout>({
      path: `/zaakobjecten/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verbreek de relatie tussen een ZAAK en een OBJECT door de ZAAKOBJECT resource te verwijderen.
   *
   * @tags zaakobjecten
   * @name ZaakobjectDestroy
   * @summary Verwijder een ZAAKOBJECT.
   * @request DELETE:/zaakobjecten/{uuid}
   * @secure
   */
  zaakobjectDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjectDestroyData, Fout>({
      path: `/zaakobjecten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaakobjecten
   * @name ZaakobjectHeaders
   * @summary De headers voor een specifiek(e) ZAAKOBJECT opvragen
   * @request HEAD:/zaakobjecten/{uuid}
   */
  zaakobjectHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjectHeadersData, any>({
      path: `/zaakobjecten/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
