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
  KlantContact,
  KlantcontactCreateData,
  KlantcontactListData,
  KlantcontactListParams,
  KlantcontactRetrieveData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Klantcontacten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Alle KLANTCONTACTen opvragen. **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
   *
   * @tags klantcontacten
   * @name KlantcontactList
   * @summary Alle KLANTCONTACTen opvragen.
   * @request GET:/klantcontacten
   * @deprecated
   * @secure
   */
  klantcontactList = (query: KlantcontactListParams, params: RequestParams = {}) =>
    this.http.request<KlantcontactListData, ValidatieFout | Fout>({
      path: `/klantcontacten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Indien geen identificatie gegeven is, dan wordt deze automatisch gegenereerd. **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
   *
   * @tags klantcontacten
   * @name KlantcontactCreate
   * @summary Maak een KLANTCONTACT bij een ZAAK aan.
   * @request POST:/klantcontacten
   * @deprecated
   * @secure
   */
  klantcontactCreate = (data: KlantContact, params: RequestParams = {}) =>
    this.http.request<KlantcontactCreateData, ValidatieFout | Fout>({
      path: `/klantcontacten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke KLANTCONTACT opvragen. **DEPRECATED**: gebruik de contactmomenten API in plaats van deze endpoint.
   *
   * @tags klantcontacten
   * @name KlantcontactRetrieve
   * @summary Een specifieke KLANTCONTACT opvragen.
   * @request GET:/klantcontacten/{uuid}
   * @deprecated
   * @secure
   */
  klantcontactRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<KlantcontactRetrieveData, Fout>({
      path: `/klantcontacten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
