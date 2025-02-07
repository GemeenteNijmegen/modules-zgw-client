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
  Status,
  StatusCreateData,
  StatusHeadersData,
  StatusListData,
  StatusListParams,
  StatusRetrieveData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Statussen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags statussen
   * @name StatusList
   * @summary Alle STATUSsen bij ZAAKen opvragen.
   * @request GET:/statussen
   * @secure
   */
  statusList = (query: StatusListParams, params: RequestParams = {}) =>
    this.http.request<StatusListData, ValidatieFout | Fout>({
      path: `/statussen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - geldigheid URL naar de ZAAK - geldigheid URL naar het STATUSTYPE - indien het de eindstatus betreft, dan moet het attribuut `indicatieGebruiksrecht` gezet zijn op alle informatieobjecten dieaan de zaak gerelateerd zijn **Opmerkingen** - Indien het statustype de eindstatus is (volgens het ZTC), dan wordt de zaak afgesloten door de einddatum te zetten.
   *
   * @tags statussen
   * @name StatusCreate
   * @summary Maak een STATUS aan voor een ZAAK.
   * @request POST:/statussen
   * @secure
   */
  statusCreate = (data: Status, params: RequestParams = {}) =>
    this.http.request<StatusCreateData, ValidatieFout | Fout>({
      path: `/statussen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke STATUS van een ZAAK opvragen.
   *
   * @tags statussen
   * @name StatusRetrieve
   * @summary Een specifieke STATUS van een ZAAK opvragen.
   * @request GET:/statussen/{uuid}
   * @secure
   */
  statusRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<StatusRetrieveData, Fout>({
      path: `/statussen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags statussen
   * @name StatusHeaders
   * @summary De headers voor een specifiek(e) STATUS opvragen
   * @request HEAD:/statussen/{uuid}
   */
  statusHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<StatusHeadersData, any>({
      path: `/statussen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
