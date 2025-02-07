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
  PatchedResultaat,
  Resultaat,
  ResultaatCreateData,
  ResultaatDestroyData,
  ResultaatHeadersData,
  ResultaatListData,
  ResultaatListParams,
  ResultaatPartialUpdateData,
  ResultaatRetrieveData,
  ResultaatUpdateData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Resultaten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags resultaten
   * @name ResultaatList
   * @summary Alle RESULTAATen van ZAAKen opvragen.
   * @request GET:/resultaten
   * @secure
   */
  resultaatList = (query: ResultaatListParams, params: RequestParams = {}) =>
    this.http.request<ResultaatListData, ValidatieFout | Fout>({
      path: `/resultaten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op:** - geldigheid URL naar de ZAAK - geldigheid URL naar het RESULTAATTYPE
   *
   * @tags resultaten
   * @name ResultaatCreate
   * @summary Maak een RESULTAAT bij een ZAAK aan.
   * @request POST:/resultaten
   * @secure
   */
  resultaatCreate = (data: Resultaat, params: RequestParams = {}) =>
    this.http.request<ResultaatCreateData, ValidatieFout | Fout>({
      path: `/resultaten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke RESULTAAT opvragen.
   *
   * @tags resultaten
   * @name ResultaatRetrieve
   * @summary Een specifieke RESULTAAT opvragen.
   * @request GET:/resultaten/{uuid}
   * @secure
   */
  resultaatRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaatRetrieveData, Fout>({
      path: `/resultaten/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - geldigheid URL naar de ZAAK - het RESULTAATTYPE mag niet gewijzigd worden
   *
   * @tags resultaten
   * @name ResultaatUpdate
   * @summary Werk een RESULTAAT in zijn geheel bij.
   * @request PUT:/resultaten/{uuid}
   * @secure
   */
  resultaatUpdate = (uuid: string, data: Resultaat, params: RequestParams = {}) =>
    this.http.request<ResultaatUpdateData, ValidatieFout | Fout>({
      path: `/resultaten/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - geldigheid URL naar de ZAAK - het RESULTAATTYPE mag niet gewijzigd worden
   *
   * @tags resultaten
   * @name ResultaatPartialUpdate
   * @summary Werk een RESULTAAT deels bij.
   * @request PATCH:/resultaten/{uuid}
   * @secure
   */
  resultaatPartialUpdate = (uuid: string, data: PatchedResultaat, params: RequestParams = {}) =>
    this.http.request<ResultaatPartialUpdateData, ValidatieFout | Fout>({
      path: `/resultaten/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een RESULTAAT van een ZAAK.
   *
   * @tags resultaten
   * @name ResultaatDestroy
   * @summary Verwijder een RESULTAAT van een ZAAK.
   * @request DELETE:/resultaten/{uuid}
   * @secure
   */
  resultaatDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaatDestroyData, Fout>({
      path: `/resultaten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags resultaten
   * @name ResultaatHeaders
   * @summary De headers voor een specifiek(e) RESULTAAT opvragen
   * @request HEAD:/resultaten/{uuid}
   */
  resultaatHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaatHeadersData, any>({
      path: `/resultaten/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
