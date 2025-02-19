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
  ObjectinformatieobjectCreateData,
  ObjectinformatieobjectDestroyData,
  ObjectinformatieobjectHeadersData,
  ObjectinformatieobjectListData,
  ObjectinformatieobjectListParams,
  ObjectInformatieObjectRequest,
  ObjectinformatieobjectRetrieveData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Objectinformatieobjecten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description  Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags objectinformatieobjecten
   * @name ObjectinformatieobjectList
   * @summary Alle OBJECT-INFORMATIEOBJECT relaties opvragen.
   * @request GET:/objectinformatieobjecten
   * @secure
   */
  objectinformatieobjectList = (query: ObjectinformatieobjectListParams, params: RequestParams = {}) =>
    this.http.request<ObjectinformatieobjectListData, ValidatieFout | Fout>({
      path: `/objectinformatieobjecten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.** Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit endpoint bij het synchroniseren van relaties. **Er wordt gevalideerd op** - geldigheid `informatieobject` URL - de combinatie `informatieobject` en `object` moet uniek zijn - bestaan van `object` URL
   *
   * @tags objectinformatieobjecten
   * @name ObjectinformatieobjectCreate
   * @summary Maak een OBJECT-INFORMATIEOBJECT relatie aan.
   * @request POST:/objectinformatieobjecten
   * @secure
   */
  objectinformatieobjectCreate = (data: Partial<ObjectInformatieObjectRequest>, params: RequestParams = {}) =>
    this.http.request<ObjectinformatieobjectCreateData, ValidatieFout | Fout>({
      path: `/objectinformatieobjecten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
   *
   * @tags objectinformatieobjecten
   * @name ObjectinformatieobjectRetrieve
   * @summary Een specifieke OBJECT-INFORMATIEOBJECT relatie opvragen.
   * @request GET:/objectinformatieobjecten/{uuid}
   * @secure
   */
  objectinformatieobjectRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ObjectinformatieobjectRetrieveData, Fout>({
      path: `/objectinformatieobjecten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **LET OP: Dit endpoint hoor je als consumer niet zelf aan te spreken.** Andere API's, zoals de Zaken API en de Besluiten API, gebruiken dit endpoint bij het synchroniseren van relaties.
   *
   * @tags objectinformatieobjecten
   * @name ObjectinformatieobjectDestroy
   * @summary Verwijder een OBJECT-INFORMATIEOBJECT relatie.
   * @request DELETE:/objectinformatieobjecten/{uuid}
   * @secure
   */
  objectinformatieobjectDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ObjectinformatieobjectDestroyData, Fout>({
      path: `/objectinformatieobjecten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags objectinformatieobjecten
   * @name ObjectinformatieobjectHeaders
   * @summary De headers voor een specifiek(e) OOBJECT-INFORMATIEOBJECT opvragen
   * @request HEAD:/objectinformatieobjecten/{uuid}
   */
  objectinformatieobjectHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ObjectinformatieobjectHeadersData, any>({
      path: `/objectinformatieobjecten/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
