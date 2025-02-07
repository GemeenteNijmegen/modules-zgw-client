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
  PatchedResultaatType,
  ResultaatType,
  ResultaattypeCreateData,
  ResultaattypeDestroyData,
  ResultaattypeHeadersData,
  ResultaattypeListData,
  ResultaattypeListParams,
  ResultaattypePartialUpdateData,
  ResultaattypeRetrieveData,
  ResultaattypeUpdateData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Resultaattypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags resultaattypen
   * @name ResultaattypeList
   * @summary Alle RESULTAATTYPEn opvragen.
   * @request GET:/resultaattypen
   * @secure
   */
  resultaattypeList = (query: ResultaattypeListParams, params: RequestParams = {}) =>
    this.http.request<ResultaattypeListData, ValidatieFout | Fout>({
      path: `/resultaattypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een RESULTAATTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags resultaattypen
   * @name ResultaattypeCreate
   * @summary Maak een RESULTAATTYPE aan.
   * @request POST:/resultaattypen
   * @secure
   */
  resultaattypeCreate = (data: ResultaatType, params: RequestParams = {}) =>
    this.http.request<ResultaattypeCreateData, ValidatieFout | Fout>({
      path: `/resultaattypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke RESULTAATTYPE opvragen.
   *
   * @tags resultaattypen
   * @name ResultaattypeRetrieve
   * @summary Een specifieke RESULTAATTYPE opvragen.
   * @request GET:/resultaattypen/{uuid}
   * @secure
   */
  resultaattypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaattypeRetrieveData, Fout>({
      path: `/resultaattypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een RESULTAATTYPE in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags resultaattypen
   * @name ResultaattypeUpdate
   * @summary Werk een RESULTAATTYPE in zijn geheel bij.
   * @request PUT:/resultaattypen/{uuid}
   * @secure
   */
  resultaattypeUpdate = (uuid: string, data: ResultaatType, params: RequestParams = {}) =>
    this.http.request<ResultaattypeUpdateData, ValidatieFout | Fout>({
      path: `/resultaattypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een RESULTAATTYPE deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags resultaattypen
   * @name ResultaattypePartialUpdate
   * @summary Werk een RESULTAATTYPE deels bij.
   * @request PATCH:/resultaattypen/{uuid}
   * @secure
   */
  resultaattypePartialUpdate = (uuid: string, data: PatchedResultaatType, params: RequestParams = {}) =>
    this.http.request<ResultaattypePartialUpdateData, ValidatieFout | Fout>({
      path: `/resultaattypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een RESULTAATTYPE. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags resultaattypen
   * @name ResultaattypeDestroy
   * @summary Verwijder een RESULTAATTYPE.
   * @request DELETE:/resultaattypen/{uuid}
   * @secure
   */
  resultaattypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaattypeDestroyData, Fout>({
      path: `/resultaattypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags resultaattypen
   * @name ResultaattypeHeaders
   * @summary De headers voor een specifiek(e) RESULTAATTYPE opvragen
   * @request HEAD:/resultaattypen/{uuid}
   */
  resultaattypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ResultaattypeHeadersData, any>({
      path: `/resultaattypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
