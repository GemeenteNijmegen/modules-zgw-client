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
  PatchedZaakObjectType,
  ValidatieFout,
  ZaakObjectType,
  ZaakobjecttypeCreateData,
  ZaakobjecttypeDestroyData,
  ZaakobjecttypeHeadersData,
  ZaakobjecttypeListData,
  ZaakobjecttypeListParams,
  ZaakobjecttypePartialUpdateData,
  ZaakobjecttypeRetrieveData,
  ZaakobjecttypeUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaakobjecttypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeList
   * @summary Alle ZAAKOBJECTTYPEn opvragen.
   * @request GET:/zaakobjecttypen
   * @secure
   */
  zaakobjecttypeList = (query: ZaakobjecttypeListParams, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeListData, ValidatieFout | Fout>({
      path: `/zaakobjecttypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ZAAKOBJECTTYPE aan.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeCreate
   * @summary Maak een ZAAKOBJECTTYPE aan.
   * @request POST:/zaakobjecttypen
   * @secure
   */
  zaakobjecttypeCreate = (data: ZaakObjectType, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeCreateData, ValidatieFout | Fout>({
      path: `/zaakobjecttypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAKOBJECTTYPE opvragen.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeRetrieve
   * @summary Een specifieke ZAAKOBJECTTYPE opvragen.
   * @request GET:/zaakobjecttypen/{uuid}
   * @secure
   */
  zaakobjecttypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeRetrieveData, Fout>({
      path: `/zaakobjecttypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKOBJECTTYPE in zijn geheel bij.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeUpdate
   * @summary Werk een ZAAKOBJECTTYPE in zijn geheel bij.
   * @request PUT:/zaakobjecttypen/{uuid}
   * @secure
   */
  zaakobjecttypeUpdate = (uuid: string, data: ZaakObjectType, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeUpdateData, ValidatieFout | Fout>({
      path: `/zaakobjecttypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKOBJECTTYPE deels bij.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypePartialUpdate
   * @summary Werk een ZAAKOBJECTTYPE deels bij.
   * @request PATCH:/zaakobjecttypen/{uuid}
   * @secure
   */
  zaakobjecttypePartialUpdate = (uuid: string, data: PatchedZaakObjectType, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypePartialUpdateData, ValidatieFout | Fout>({
      path: `/zaakobjecttypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAKOBJECTTYPE.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeDestroy
   * @summary Verwijder een ZAAKOBJECTTYPE.
   * @request DELETE:/zaakobjecttypen/{uuid}
   * @secure
   */
  zaakobjecttypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeDestroyData, Fout>({
      path: `/zaakobjecttypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaakobjecttypen
   * @name ZaakobjecttypeHeaders
   * @summary De headers voor een specifiek(e) ZAAKOBJECTTYPE opvragen
   * @request HEAD:/zaakobjecttypen/{uuid}
   */
  zaakobjecttypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakobjecttypeHeadersData, any>({
      path: `/zaakobjecttypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
