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
  ZaakVerzoek,
  ZaakverzoekCreateData,
  ZaakverzoekDestroyData,
  ZaakverzoekListData,
  ZaakverzoekListParams,
  ZaakverzoekRetrieveData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaakverzoeken<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Alle ZAAK-VERZOEKen opvragen.
   *
   * @tags zaakverzoeken
   * @name ZaakverzoekList
   * @summary Alle ZAAK-VERZOEKen opvragen.
   * @request GET:/zaakverzoeken
   * @secure
   */
  zaakverzoekList = (query: ZaakverzoekListParams, params: RequestParams = {}) =>
    this.http.request<ZaakverzoekListData, ValidatieFout | Fout>({
      path: `/zaakverzoeken`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - geldigheid URL naar de VERZOEK
   *
   * @tags zaakverzoeken
   * @name ZaakverzoekCreate
   * @summary Maak een ZAAK-VERZOEK aan.
   * @request POST:/zaakverzoeken
   * @secure
   */
  zaakverzoekCreate = (data: ZaakVerzoek, params: RequestParams = {}) =>
    this.http.request<ZaakverzoekCreateData, ValidatieFout | Fout>({
      path: `/zaakverzoeken`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAK-VERZOEK opvragen.
   *
   * @tags zaakverzoeken
   * @name ZaakverzoekRetrieve
   * @summary Een specifieke ZAAK-VERZOEK opvragen.
   * @request GET:/zaakverzoeken/{uuid}
   * @secure
   */
  zaakverzoekRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakverzoekRetrieveData, Fout>({
      path: `/zaakverzoeken/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAK-VERZOEK.
   *
   * @tags zaakverzoeken
   * @name ZaakverzoekDestroy
   * @summary Verwijder een ZAAK-VERZOEK.
   * @request DELETE:/zaakverzoeken/{uuid}
   * @secure
   */
  zaakverzoekDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakverzoekDestroyData, Fout>({
      path: `/zaakverzoeken/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
}
