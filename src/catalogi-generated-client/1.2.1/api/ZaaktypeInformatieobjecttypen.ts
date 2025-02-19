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
  PatchedZaakTypeInformatieObjectType,
  ValidatieFout,
  ZaakTypeInformatieObjectType,
  ZaakinformatieobjecttypeCreateData,
  ZaakinformatieobjecttypeDestroyData,
  ZaakinformatieobjecttypeHeadersData,
  ZaakinformatieobjecttypeListData,
  ZaakinformatieobjecttypeListParams,
  ZaakinformatieobjecttypePartialUpdateData,
  ZaakinformatieobjecttypeRetrieveData,
  ZaakinformatieobjecttypeUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class ZaaktypeInformatieobjecttypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeList
   * @summary Alle ZAAKTYPE-INFORMATIEOBJECTTYPE relaties opvragen.
   * @request GET:/zaaktype-informatieobjecttypen
   * @secure
   */
  zaakinformatieobjecttypeList = (query: ZaakinformatieobjecttypeListParams, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjecttypeListData, ValidatieFout | Fout>({
      path: `/zaaktype-informatieobjecttypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Maak een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie aan. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op: - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeCreate
   * @summary Maak een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie aan.
   * @request POST:/zaaktype-informatieobjecttypen
   * @secure
   */
  zaakinformatieobjecttypeCreate = (data: Partial<ZaakTypeInformatieObjectType>, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjecttypeCreateData, ValidatieFout | Fout>({
      path: `/zaaktype-informatieobjecttypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAKTYPE-INFORMATIEOBJECTTYPE relatie opvragen.
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeRetrieve
   * @summary Een specifieke ZAAKTYPE-INFORMATIEOBJECTTYPE relatie opvragen.
   * @request GET:/zaaktype-informatieobjecttypen/{uuid}
   * @secure
   */
  zaakinformatieobjecttypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjecttypeRetrieveData, Fout>({
      path: `/zaaktype-informatieobjecttypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie in zijn geheel bij. Dit kan alleen als het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op: - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeUpdate
   * @summary Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie in zijn geheel bij.
   * @request PUT:/zaaktype-informatieobjecttypen/{uuid}
   * @secure
   */
  zaakinformatieobjecttypeUpdate = (
    uuid: string,
    data: Partial<ZaakTypeInformatieObjectType>,
    params: RequestParams = {},
  ) =>
    this.http.request<ZaakinformatieobjecttypeUpdateData, ValidatieFout | Fout>({
      path: `/zaaktype-informatieobjecttypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie deels bij. Dit kan alleen  als het bijbehorende ZAAKTYPE een concept betreft.  Er wordt gevalideerd op: - `zaaktype` en `informatieobjecttype` behoren tot dezelfde `catalogus`
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypePartialUpdate
   * @summary Werk een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie deels bij.
   * @request PATCH:/zaaktype-informatieobjecttypen/{uuid}
   * @secure
   */
  zaakinformatieobjecttypePartialUpdate = (
    uuid: string,
    data: Partial<PatchedZaakTypeInformatieObjectType>,
    params: RequestParams = {},
  ) =>
    this.http.request<ZaakinformatieobjecttypePartialUpdateData, ValidatieFout | Fout>({
      path: `/zaaktype-informatieobjecttypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie. Dit kan alleen als  het bijbehorende ZAAKTYPE een concept betreft. Er wordt gevalideerd op: - `zaaktype` of `informatieobjecttype` is nog niet gepubliceerd
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeDestroy
   * @summary Verwijder een ZAAKTYPE-INFORMATIEOBJECTTYPE relatie.
   * @request DELETE:/zaaktype-informatieobjecttypen/{uuid}
   * @secure
   */
  zaakinformatieobjecttypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjecttypeDestroyData, Fout>({
      path: `/zaaktype-informatieobjecttypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaaktype-informatieobjecttypen
   * @name ZaakinformatieobjecttypeHeaders
   * @summary De headers voor een specifiek(e) ZAAK-INFORMATIEOBJECT-TYPE opvragen
   * @request HEAD:/zaaktype-informatieobjecttypen/{uuid}
   */
  zaakinformatieobjecttypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaakinformatieobjecttypeHeadersData, any>({
      path: `/zaaktype-informatieobjecttypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
}
