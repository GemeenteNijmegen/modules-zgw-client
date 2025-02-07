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
  Eigenschap,
  EigenschapCreateData,
  EigenschapDestroyData,
  EigenschapHeadersData,
  EigenschapListData,
  EigenschapListParams,
  EigenschapPartialUpdateData,
  EigenschapRetrieveData,
  EigenschapUpdateData,
  Fout,
  PatchedEigenschap,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Eigenschappen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags eigenschappen
   * @name EigenschapList
   * @summary Alle EIGENSCHAPpen opvragen.
   * @request GET:/eigenschappen
   * @secure
   */
  eigenschapList = (query: EigenschapListParams, params: RequestParams = {}) =>
    this.http.request<EigenschapListData, ValidatieFout | Fout>({
      path: `/eigenschappen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een EIGENSCHAP aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags eigenschappen
   * @name EigenschapCreate
   * @summary Maak een EIGENSCHAP aan.
   * @request POST:/eigenschappen
   * @secure
   */
  eigenschapCreate = (data: Eigenschap, params: RequestParams = {}) =>
    this.http.request<EigenschapCreateData, ValidatieFout | Fout>({
      path: `/eigenschappen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke EIGENSCHAP opvragen.
   *
   * @tags eigenschappen
   * @name EigenschapRetrieve
   * @summary Een specifieke EIGENSCHAP opvragen.
   * @request GET:/eigenschappen/{uuid}
   * @secure
   */
  eigenschapRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EigenschapRetrieveData, Fout>({
      path: `/eigenschappen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een EIGENSCHAP in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags eigenschappen
   * @name EigenschapUpdate
   * @summary Werk een EIGENSCHAP in zijn geheel bij.
   * @request PUT:/eigenschappen/{uuid}
   * @secure
   */
  eigenschapUpdate = (uuid: string, data: Eigenschap, params: RequestParams = {}) =>
    this.http.request<EigenschapUpdateData, ValidatieFout | Fout>({
      path: `/eigenschappen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een EIGENSCHAP deels bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags eigenschappen
   * @name EigenschapPartialUpdate
   * @summary Werk een EIGENSCHAP deels bij.
   * @request PATCH:/eigenschappen/{uuid}
   * @secure
   */
  eigenschapPartialUpdate = (uuid: string, data: PatchedEigenschap, params: RequestParams = {}) =>
    this.http.request<EigenschapPartialUpdateData, ValidatieFout | Fout>({
      path: `/eigenschappen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een EIGENSCHAP. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft.
   *
   * @tags eigenschappen
   * @name EigenschapDestroy
   * @summary Verwijder een EIGENSCHAP.
   * @request DELETE:/eigenschappen/{uuid}
   * @secure
   */
  eigenschapDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EigenschapDestroyData, Fout>({
      path: `/eigenschappen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags eigenschappen
   * @name EigenschapHeaders
   * @summary De headers voor een specifiek(e) EIGENSCHAP opvragen
   * @request HEAD:/eigenschappen/{uuid}
   */
  eigenschapHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EigenschapHeadersData, any>({
      path: `/eigenschappen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
