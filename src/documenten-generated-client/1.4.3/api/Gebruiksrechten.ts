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
  GebruiksrechtenCreateData,
  GebruiksrechtenDestroyData,
  GebruiksrechtenHeadersData,
  GebruiksrechtenListData,
  GebruiksrechtenListParams,
  GebruiksrechtenPartialUpdateData,
  GebruiksrechtenRequest,
  GebruiksrechtenRetrieveData,
  GebruiksrechtenRetrieveParams,
  GebruiksrechtenUpdateData,
  PatchedGebruiksrechtenRequest,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Gebruiksrechten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenList
   * @summary Alle GEBRUIKSRECHTen opvragen.
   * @request GET:/gebruiksrechten
   * @secure
   */
  gebruiksrechtenList = (query: GebruiksrechtenListParams, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenListData, ValidatieFout | Fout>({
      path: `/gebruiksrechten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Voeg GEBRUIKSRECHTen toe voor een INFORMATIEOBJECT. **Opmerkingen** - Het toevoegen van gebruiksrechten zorgt ervoor dat de  `indicatieGebruiksrecht` op het informatieobject op `true` gezet wordt.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenCreate
   * @summary Maak een GEBRUIKSRECHT aan.
   * @request POST:/gebruiksrechten
   * @secure
   */
  gebruiksrechtenCreate = (data: Partial<GebruiksrechtenRequest>, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenCreateData, ValidatieFout | Fout>({
      path: `/gebruiksrechten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke GEBRUIKSRECHT opvragen.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenRetrieve
   * @summary Een specifieke GEBRUIKSRECHT opvragen.
   * @request GET:/gebruiksrechten/{uuid}
   * @secure
   */
  gebruiksrechtenRetrieve = ({ uuid, ...query }: GebruiksrechtenRetrieveParams, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenRetrieveData, Fout>({
      path: `/gebruiksrechten/${uuid}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een GEBRUIKSRECHT in zijn geheel bij.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenUpdate
   * @summary Werk een GEBRUIKSRECHT in zijn geheel bij.
   * @request PUT:/gebruiksrechten/{uuid}
   * @secure
   */
  gebruiksrechtenUpdate = (uuid: string, data: Partial<GebruiksrechtenRequest>, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenUpdateData, ValidatieFout | Fout>({
      path: `/gebruiksrechten/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een GEBRUIKSRECHT relatie deels bij.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenPartialUpdate
   * @summary Werk een GEBRUIKSRECHT relatie deels bij.
   * @request PATCH:/gebruiksrechten/{uuid}
   * @secure
   */
  gebruiksrechtenPartialUpdate = (
    uuid: string,
    data: Partial<PatchedGebruiksrechtenRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<GebruiksrechtenPartialUpdateData, ValidatieFout | Fout>({
      path: `/gebruiksrechten/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description **Opmerkingen** - Indien het laatste GEBRUIKSRECHT van een INFORMATIEOBJECT verwijderd  wordt, dan wordt de `indicatieGebruiksrecht` van het INFORMATIEOBJECT op`null` gezet.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenDestroy
   * @summary Verwijder een GEBRUIKSRECHT.
   * @request DELETE:/gebruiksrechten/{uuid}
   * @secure
   */
  gebruiksrechtenDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenDestroyData, Fout>({
      path: `/gebruiksrechten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags gebruiksrechten
   * @name GebruiksrechtenHeaders
   * @summary De headers voor een specifiek(e) GEBRUIKSRECHT INFORMATIEOBJECT opvragen
   * @request HEAD:/gebruiksrechten/{uuid}
   */
  gebruiksrechtenHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<GebruiksrechtenHeadersData, any>({
      path: `/gebruiksrechten/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
