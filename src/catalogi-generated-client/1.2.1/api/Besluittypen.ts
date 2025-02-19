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
  BesluitType,
  BesluittypeCreateData,
  BesluittypeDestroyData,
  BesluittypeHeadersData,
  BesluittypeListData,
  BesluittypeListParams,
  BesluittypePartialUpdateData,
  BesluittypePublishData,
  BesluittypeRetrieveData,
  BesluittypeUpdateData,
  Fout,
  PatchedBesluitType,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Besluittypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags besluittypen
   * @name BesluittypeList
   * @summary Alle BESLUITTYPEn opvragen.
   * @request GET:/besluittypen
   * @secure
   */
  besluittypeList = (query: BesluittypeListParams, params: RequestParams = {}) =>
    this.http.request<BesluittypeListData, ValidatieFout | Fout>({
      path: `/besluittypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een BESLUITTYPE aan.
   *
   * @tags besluittypen
   * @name BesluittypeCreate
   * @summary Maak een BESLUITTYPE aan.
   * @request POST:/besluittypen
   * @secure
   */
  besluittypeCreate = (data: Partial<BesluitType>, params: RequestParams = {}) =>
    this.http.request<BesluittypeCreateData, ValidatieFout | Fout>({
      path: `/besluittypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke BESLUITTYPE opvragen.
   *
   * @tags besluittypen
   * @name BesluittypeRetrieve
   * @summary Een specifieke BESLUITTYPE opvragen.
   * @request GET:/besluittypen/{uuid}
   * @secure
   */
  besluittypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<BesluittypeRetrieveData, Fout>({
      path: `/besluittypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een BESLUITTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
   *
   * @tags besluittypen
   * @name BesluittypeUpdate
   * @summary Werk een BESLUITTYPE in zijn geheel bij.
   * @request PUT:/besluittypen/{uuid}
   * @secure
   */
  besluittypeUpdate = (uuid: string, data: Partial<BesluitType>, params: RequestParams = {}) =>
    this.http.request<BesluittypeUpdateData, ValidatieFout | Fout>({
      path: `/besluittypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een BESLUITTYPE deels bij. Dit kan alleen als het een concept betreft.
   *
   * @tags besluittypen
   * @name BesluittypePartialUpdate
   * @summary Werk een BESLUITTYPE deels bij.
   * @request PATCH:/besluittypen/{uuid}
   * @secure
   */
  besluittypePartialUpdate = (uuid: string, data: Partial<PatchedBesluitType>, params: RequestParams = {}) =>
    this.http.request<BesluittypePartialUpdateData, ValidatieFout | Fout>({
      path: `/besluittypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een BESLUITTYPE. Dit kan alleen als het een concept betreft.
   *
   * @tags besluittypen
   * @name BesluittypeDestroy
   * @summary Verwijder een BESLUITTYPE.
   * @request DELETE:/besluittypen/{uuid}
   * @secure
   */
  besluittypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<BesluittypeDestroyData, Fout>({
      path: `/besluittypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags besluittypen
   * @name BesluittypeHeaders
   * @summary De headers voor een specifiek(e) BESLUITTYPE opvragen
   * @request HEAD:/besluittypen/{uuid}
   */
  besluittypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<BesluittypeHeadersData, any>({
      path: `/besluittypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Publiceren van het besluittype zorgt ervoor dat dit in een Besluiten API kan gebruikt worden. Na het publiceren van een besluittype zijn geen inhoudelijke wijzigingen meer mogelijk. Indien er na het publiceren nog wat gewijzigd moet worden, dan moet je een nieuwe versie aanmaken.
   *
   * @tags besluittypen
   * @name BesluittypePublish
   * @summary Publiceer het concept BESLUITTYPE.
   * @request POST:/besluittypen/{uuid}/publish
   * @secure
   */
  besluittypePublish = (uuid: string, params: RequestParams = {}) =>
    this.http.request<BesluittypePublishData, ValidatieFout | Fout>({
      path: `/besluittypen/${uuid}/publish`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
