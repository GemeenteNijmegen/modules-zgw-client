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
  Rol,
  RolCreateData,
  RolDestroyData,
  RolHeadersData,
  RolListData,
  RolListParams,
  RolRetrieveData,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Rollen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags rollen
   * @name RolList
   * @summary Alle ROLlen bij ZAAKen opvragen.
   * @request GET:/rollen
   * @secure
   */
  rolList = (query: RolListParams, params: RequestParams = {}) =>
    this.http.request<RolListData, ValidatieFout | Fout>({
      path: `/rollen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ROL aan bij een ZAAK.
   *
   * @tags rollen
   * @name RolCreate
   * @summary Maak een ROL aan bij een ZAAK.
   * @request POST:/rollen
   * @secure
   */
  rolCreate = (data: Partial<Rol>, params: RequestParams = {}) =>
    this.http.request<RolCreateData, ValidatieFout | Fout>({
      path: `/rollen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ROL bij een ZAAK opvragen.
   *
   * @tags rollen
   * @name RolRetrieve
   * @summary Een specifieke ROL bij een ZAAK opvragen.
   * @request GET:/rollen/{uuid}
   * @secure
   */
  rolRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RolRetrieveData, Fout>({
      path: `/rollen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ROL van een ZAAK.
   *
   * @tags rollen
   * @name RolDestroy
   * @summary Verwijder een ROL van een ZAAK.
   * @request DELETE:/rollen/{uuid}
   * @secure
   */
  rolDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RolDestroyData, Fout>({
      path: `/rollen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags rollen
   * @name RolHeaders
   * @summary De headers voor een specifiek(e) ROL opvragen
   * @request HEAD:/rollen/{uuid}
   */
  rolHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<RolHeadersData, any>({
      path: `/rollen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
