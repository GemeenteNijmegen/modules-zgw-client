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
  PatchedVerzendingRequest,
  ValidatieFout,
  VerzendingCreateData,
  VerzendingDestroyData,
  VerzendingHeadersData,
  VerzendingListData,
  VerzendingListParams,
  VerzendingPartialUpdateData,
  VerzendingRequest,
  VerzendingRetrieveData,
  VerzendingRetrieveParams,
  VerzendingUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Verzendingen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags verzendingen
   * @name VerzendingList
   * @summary Alle VERZENDINGen opvragen.
   * @request GET:/verzendingen
   */
  verzendingList = (query: VerzendingListParams, params: RequestParams = {}) =>
    this.http.request<VerzendingListData, ValidatieFout | Fout>({
      path: `/verzendingen`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Voeg VERZENDINGen toe voor een INFORMATIEOBJECT en een BETROKKENE.
   *
   * @tags verzendingen
   * @name VerzendingCreate
   * @summary Maak een VERZENDING aan.
   * @request POST:/verzendingen
   */
  verzendingCreate = (data: VerzendingRequest, params: RequestParams = {}) =>
    this.http.request<VerzendingCreateData, ValidatieFout | Fout>({
      path: `/verzendingen`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke VERZENDING opvragen.
   *
   * @tags verzendingen
   * @name VerzendingRetrieve
   * @summary Een specifieke VERZENDING opvragen.
   * @request GET:/verzendingen/{uuid}
   */
  verzendingRetrieve = ({ uuid, ...query }: VerzendingRetrieveParams, params: RequestParams = {}) =>
    this.http.request<VerzendingRetrieveData, Fout>({
      path: `/verzendingen/${uuid}`,
      method: "GET",
      query: query,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een VERZENDING in zijn geheel bij.
   *
   * @tags verzendingen
   * @name VerzendingUpdate
   * @summary Werk een VERZENDING in zijn geheel bij.
   * @request PUT:/verzendingen/{uuid}
   */
  verzendingUpdate = (uuid: string, data: VerzendingRequest, params: RequestParams = {}) =>
    this.http.request<VerzendingUpdateData, ValidatieFout | Fout>({
      path: `/verzendingen/${uuid}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een VERZENDING relatie deels bij.
   *
   * @tags verzendingen
   * @name VerzendingPartialUpdate
   * @summary Werk een VERZENDING relatie deels bij.
   * @request PATCH:/verzendingen/{uuid}
   */
  verzendingPartialUpdate = (uuid: string, data: PatchedVerzendingRequest, params: RequestParams = {}) =>
    this.http.request<VerzendingPartialUpdateData, ValidatieFout | Fout>({
      path: `/verzendingen/${uuid}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een VERZENDING.
   *
   * @tags verzendingen
   * @name VerzendingDestroy
   * @summary Verwijder een VERZENDING
   * @request DELETE:/verzendingen/{uuid}
   */
  verzendingDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<VerzendingDestroyData, Fout>({
      path: `/verzendingen/${uuid}`,
      method: "DELETE",
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags verzendingen
   * @name VerzendingHeaders
   * @summary De headers voor een specifiek(e) VERZENDING opvragen
   * @request HEAD:/verzendingen/{uuid}
   */
  verzendingHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<VerzendingHeadersData, any>({
      path: `/verzendingen/${uuid}`,
      method: "HEAD",
      format: "json",
      ...params,
    });
}
