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
  InformatieObjectType,
  InformatieobjecttypeCreateData,
  InformatieobjecttypeDestroyData,
  InformatieobjecttypeHeadersData,
  InformatieobjecttypeListData,
  InformatieobjecttypeListParams,
  InformatieobjecttypePartialUpdateData,
  InformatieobjecttypePublishData,
  InformatieobjecttypeRetrieveData,
  InformatieobjecttypeUpdateData,
  PatchedInformatieObjectType,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Informatieobjecttypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeList
   * @summary Alle INFORMATIEOBJECTTYPEn opvragen.
   * @request GET:/informatieobjecttypen
   * @secure
   */
  informatieobjecttypeList = (query: InformatieobjecttypeListParams, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeListData, ValidatieFout | Fout>({
      path: `/informatieobjecttypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een INFORMATIEOBJECTTYPE aan.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeCreate
   * @summary Maak een INFORMATIEOBJECTTYPE aan.
   * @request POST:/informatieobjecttypen
   * @secure
   */
  informatieobjecttypeCreate = (data: InformatieObjectType, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeCreateData, ValidatieFout | Fout>({
      path: `/informatieobjecttypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke INFORMATIEOBJECTTYPE opvragen.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeRetrieve
   * @summary Een specifieke INFORMATIEOBJECTTYPE opvragen.
   * @request GET:/informatieobjecttypen/{uuid}
   * @secure
   */
  informatieobjecttypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeRetrieveData, Fout>({
      path: `/informatieobjecttypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een INFORMATIEOBJECTTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeUpdate
   * @summary Werk een INFORMATIEOBJECTTYPE in zijn geheel bij.
   * @request PUT:/informatieobjecttypen/{uuid}
   * @secure
   */
  informatieobjecttypeUpdate = (uuid: string, data: InformatieObjectType, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeUpdateData, ValidatieFout | Fout>({
      path: `/informatieobjecttypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een INFORMATIEOBJECTTYPE deels bij. Dit kan alleen als het een concept betreft.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypePartialUpdate
   * @summary      Werk een INFORMATIEOBJECTTYPE deels bij.
   * @request PATCH:/informatieobjecttypen/{uuid}
   * @secure
   */
  informatieobjecttypePartialUpdate = (uuid: string, data: PatchedInformatieObjectType, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypePartialUpdateData, ValidatieFout | Fout>({
      path: `/informatieobjecttypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een INFORMATIEOBJECTTYPE. Dit kan alleen als het een concept betreft.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeDestroy
   * @summary Verwijder een INFORMATIEOBJECTTYPE.
   * @request DELETE:/informatieobjecttypen/{uuid}
   * @secure
   */
  informatieobjecttypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeDestroyData, Fout>({
      path: `/informatieobjecttypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypeHeaders
   * @summary De headers voor een specifiek(e) INFORMATIEOBJECTTYPE opvragen
   * @request HEAD:/informatieobjecttypen/{uuid}
   */
  informatieobjecttypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypeHeadersData, any>({
      path: `/informatieobjecttypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Publiceren van het informatieobjecttype zorgt ervoor dat dit in een Documenten API kan gebruikt worden. Na het publiceren van een informatieobjecttype zijn geen inhoudelijke wijzigingen meer mogelijk. Indien er na het publiceren nog wat gewijzigd moet worden, dan moet je een nieuwe versie aanmaken.
   *
   * @tags informatieobjecttypen
   * @name InformatieobjecttypePublish
   * @summary Publiceer het concept INFORMATIEOBJECTTYPE.
   * @request POST:/informatieobjecttypen/{uuid}/publish
   * @secure
   */
  informatieobjecttypePublish = (uuid: string, params: RequestParams = {}) =>
    this.http.request<InformatieobjecttypePublishData, ValidatieFout | Fout>({
      path: `/informatieobjecttypen/${uuid}/publish`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
}
