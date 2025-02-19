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
  PatchedRolType,
  RolType,
  RoltypeCreateData,
  RoltypeDestroyData,
  RoltypeHeadersData,
  RoltypeListData,
  RoltypeListParams,
  RoltypePartialUpdateData,
  RoltypeRetrieveData,
  RoltypeUpdateData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Roltypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags roltypen
   * @name RoltypeList
   * @summary Alle ROLTYPEn opvragen.
   * @request GET:/roltypen
   * @secure
   */
  roltypeList = (query: RoltypeListParams, params: RequestParams = {}) =>
    this.http.request<RoltypeListData, ValidatieFout | Fout>({
      path: `/roltypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ROLTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags roltypen
   * @name RoltypeCreate
   * @summary Maak een ROLTYPE aan.
   * @request POST:/roltypen
   * @secure
   */
  roltypeCreate = (data: Partial<RolType>, params: RequestParams = {}) =>
    this.http.request<RoltypeCreateData, ValidatieFout | Fout>({
      path: `/roltypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ROLTYPE opvragen.
   *
   * @tags roltypen
   * @name RoltypeRetrieve
   * @summary Een specifieke ROLTYPE opvragen.
   * @request GET:/roltypen/{uuid}
   * @secure
   */
  roltypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RoltypeRetrieveData, Fout>({
      path: `/roltypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ROLTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
   *
   * @tags roltypen
   * @name RoltypeUpdate
   * @summary Werk een ROLTYPE in zijn geheel bij.
   * @request PUT:/roltypen/{uuid}
   * @secure
   */
  roltypeUpdate = (uuid: string, data: Partial<RolType>, params: RequestParams = {}) =>
    this.http.request<RoltypeUpdateData, ValidatieFout | Fout>({
      path: `/roltypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ROLTYPE deels bij. Dit kan alleen als het een concept betreft.
   *
   * @tags roltypen
   * @name RoltypePartialUpdate
   * @summary Werk een ROLTYPE deels bij.
   * @request PATCH:/roltypen/{uuid}
   * @secure
   */
  roltypePartialUpdate = (uuid: string, data: Partial<PatchedRolType>, params: RequestParams = {}) =>
    this.http.request<RoltypePartialUpdateData, ValidatieFout | Fout>({
      path: `/roltypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ROLTYPE. Dit kan alleen als het een concept betreft.
   *
   * @tags roltypen
   * @name RoltypeDestroy
   * @summary Verwijder een ROLTYPE.
   * @request DELETE:/roltypen/{uuid}
   * @secure
   */
  roltypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RoltypeDestroyData, Fout>({
      path: `/roltypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags roltypen
   * @name RoltypeHeaders
   * @summary De headers voor een specifiek(e) ROLTYPE opvragen
   * @request HEAD:/roltypen/{uuid}
   */
  roltypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RoltypeHeadersData, any>({
      path: `/roltypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
