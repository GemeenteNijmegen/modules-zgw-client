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
  Catalogus,
  CatalogusCreateData,
  CatalogusHeadersData,
  CatalogusListData,
  CatalogusListParams,
  CatalogusRetrieveData,
  Fout,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Catalogussen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags catalogussen
   * @name CatalogusList
   * @summary Alle CATALOGUSsen opvragen.
   * @request GET:/catalogussen
   * @secure
   */
  catalogusList = (query: CatalogusListParams, params: RequestParams = {}) =>
    this.http.request<CatalogusListData, ValidatieFout | Fout>({
      path: `/catalogussen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een CATALOGUS aan.
   *
   * @tags catalogussen
   * @name CatalogusCreate
   * @summary Maak een CATALOGUS aan.
   * @request POST:/catalogussen
   * @secure
   */
  catalogusCreate = (data: Catalogus, params: RequestParams = {}) =>
    this.http.request<CatalogusCreateData, ValidatieFout | Fout>({
      path: `/catalogussen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke CATALOGUS opvragen.
   *
   * @tags catalogussen
   * @name CatalogusRetrieve
   * @summary Een specifieke CATALOGUS opvragen.
   * @request GET:/catalogussen/{uuid}
   * @secure
   */
  catalogusRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<CatalogusRetrieveData, Fout>({
      path: `/catalogussen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags catalogussen
   * @name CatalogusHeaders
   * @summary De headers voor een specifiek(e) CATALOGUS opvragen
   * @request HEAD:/catalogussen/{uuid}
   */
  catalogusHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<CatalogusHeadersData, any>({
      path: `/catalogussen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
