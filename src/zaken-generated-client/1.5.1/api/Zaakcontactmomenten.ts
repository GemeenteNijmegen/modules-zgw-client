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
  ValidatieFout,
  ZaakContactMoment,
  ZaakcontactmomentCreateData,
  ZaakcontactmomentDestroyData,
  ZaakcontactmomentListData,
  ZaakcontactmomentListParams,
  ZaakcontactmomentRetrieveData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaakcontactmomenten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Alle ZAAKCONTACTMOMENTen opvragen.
   *
   * @tags zaakcontactmomenten
   * @name ZaakcontactmomentList
   * @summary Alle ZAAKCONTACTMOMENTen opvragen.
   * @request GET:/zaakcontactmomenten
   * @secure
   */
  zaakcontactmomentList = (query: ZaakcontactmomentListParams, params: RequestParams = {}) =>
    this.http.request<ZaakcontactmomentListData, ValidatieFout | Fout>({
      path: `/zaakcontactmomenten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op:** - geldigheid URL naar het CONTACTMOMENT
   *
   * @tags zaakcontactmomenten
   * @name ZaakcontactmomentCreate
   * @summary Maak een ZAAKCONTACTMOMENT aan.
   * @request POST:/zaakcontactmomenten
   * @secure
   */
  zaakcontactmomentCreate = (data: Partial<ZaakContactMoment>, params: RequestParams = {}) =>
    this.http.request<ZaakcontactmomentCreateData, ValidatieFout | Fout>({
      path: `/zaakcontactmomenten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifiek ZAAKCONTACTMOMENT opvragen.
   *
   * @tags zaakcontactmomenten
   * @name ZaakcontactmomentRetrieve
   * @summary Een specifiek ZAAKCONTACTMOMENT opvragen
   * @request GET:/zaakcontactmomenten/{uuid}
   * @secure
   */
  zaakcontactmomentRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakcontactmomentRetrieveData, Fout>({
      path: `/zaakcontactmomenten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAKCONTACTMOMENT.
   *
   * @tags zaakcontactmomenten
   * @name ZaakcontactmomentDestroy
   * @summary Verwijder een ZAAKCONTACTMOMENT.
   * @request DELETE:/zaakcontactmomenten/{uuid}
   * @secure
   */
  zaakcontactmomentDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakcontactmomentDestroyData, Fout>({
      path: `/zaakcontactmomenten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
