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
  PatchedStatusType,
  StatusType,
  StatustypeCreateData,
  StatustypeDestroyData,
  StatustypeHeadersData,
  StatustypeListData,
  StatustypeListParams,
  StatustypePartialUpdateData,
  StatustypeRetrieveData,
  StatustypeUpdateData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Statustypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags statustypen
   * @name StatustypeList
   * @summary Alle STATUSTYPEn opvragen.
   * @request GET:/statustypen
   * @secure
   */
  statustypeList = (query: StatustypeListParams, params: RequestParams = {}) =>
    this.http.request<StatustypeListData, ValidatieFout | Fout>({
      path: `/statustypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een STATUSTYPE aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags statustypen
   * @name StatustypeCreate
   * @summary Maak een STATUSTYPE aan.
   * @request POST:/statustypen
   * @secure
   */
  statustypeCreate = (data: Partial<StatusType>, params: RequestParams = {}) =>
    this.http.request<StatustypeCreateData, ValidatieFout | Fout>({
      path: `/statustypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke STATUSTYPE opvragen.
   *
   * @tags statustypen
   * @name StatustypeRetrieve
   * @summary Een specifieke STATUSTYPE opvragen.
   * @request GET:/statustypen/{uuid}
   * @secure
   */
  statustypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<StatustypeRetrieveData, Fout>({
      path: `/statustypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een STATUSTYPE in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags statustypen
   * @name StatustypeUpdate
   * @summary Werk een STATUSTYPE in zijn geheel bij.
   * @request PUT:/statustypen/{uuid}
   * @secure
   */
  statustypeUpdate = (uuid: string, data: Partial<StatusType>, params: RequestParams = {}) =>
    this.http.request<StatustypeUpdateData, ValidatieFout | Fout>({
      path: `/statustypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een STATUSTYPE deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags statustypen
   * @name StatustypePartialUpdate
   * @summary Werk een STATUSTYPE deels bij.
   * @request PATCH:/statustypen/{uuid}
   * @secure
   */
  statustypePartialUpdate = (uuid: string, data: Partial<PatchedStatusType>, params: RequestParams = {}) =>
    this.http.request<StatustypePartialUpdateData, ValidatieFout | Fout>({
      path: `/statustypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een STATUSTYPE. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags statustypen
   * @name StatustypeDestroy
   * @summary Verwijder een STATUSTYPE.
   * @request DELETE:/statustypen/{uuid}
   * @secure
   */
  statustypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<StatustypeDestroyData, Fout>({
      path: `/statustypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags statustypen
   * @name StatustypeHeaders
   * @summary De headers voor een specifiek(e) STATUSTYPE opvragen
   * @request HEAD:/statustypen/{uuid}
   */
  statustypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<StatustypeHeadersData, any>({
      path: `/statustypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
