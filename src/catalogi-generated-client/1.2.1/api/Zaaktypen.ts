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
  PatchedZaakType,
  ValidatieFout,
  ZaakType,
  ZaaktypeCreateData,
  ZaaktypeDestroyData,
  ZaaktypeHeadersData,
  ZaaktypeListData,
  ZaaktypeListParams,
  ZaaktypePartialUpdateData,
  ZaaktypePublishData,
  ZaaktypeRetrieveData,
  ZaaktypeUpdateData,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Zaaktypen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters.
   *
   * @tags zaaktypen
   * @name ZaaktypeList
   * @summary Alle ZAAKTYPEn opvragen.
   * @request GET:/zaaktypen
   * @secure
   */
  zaaktypeList = (query: ZaaktypeListParams, params: RequestParams = {}) =>
    this.http.request<ZaaktypeListData, ValidatieFout | Fout>({
      path: `/zaaktypen`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Er wordt gevalideerd op: - geldigheid `catalogus` URL, dit moet een catalogus binnen dezelfde API zijn - Uniciteit `catalogus` en `zaaktypeidentificatie`. Dezelfde zaaktypeidentificatie mag enkel  opnieuw gebruikt worden als het zaaktype een andere geldigheidsperiode  kent dan bestaande zaaktypen. - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
   *
   * @tags zaaktypen
   * @name ZaaktypeCreate
   * @summary Maak een ZAAKTYPE aan.
   * @request POST:/zaaktypen
   * @secure
   */
  zaaktypeCreate = (data: Partial<ZaakType>, params: RequestParams = {}) =>
    this.http.request<ZaaktypeCreateData, ValidatieFout | Fout>({
      path: `/zaaktypen`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke ZAAKTYPE opvragen.
   *
   * @tags zaaktypen
   * @name ZaaktypeRetrieve
   * @summary Een specifieke ZAAKTYPE opvragen.
   * @request GET:/zaaktypen/{uuid}
   * @secure
   */
  zaaktypeRetrieve = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaaktypeRetrieveData, Fout>({
      path: `/zaaktypen/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKTYPE in zijn geheel bij. Dit kan alleen als het een concept betreft. Er wordt gevalideerd op: - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
   *
   * @tags zaaktypen
   * @name ZaaktypeUpdate
   * @summary Werk een ZAAKTYPE in zijn geheel bij.
   * @request PUT:/zaaktypen/{uuid}
   * @secure
   */
  zaaktypeUpdate = (uuid: string, data: Partial<ZaakType>, params: RequestParams = {}) =>
    this.http.request<ZaaktypeUpdateData, ValidatieFout | Fout>({
      path: `/zaaktypen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Werk een ZAAKTYPE deels bij. Dit kan alleen als het een concept betreft. Er wordt gevalideerd op: - `deelzaaktypen` moeten tot dezelfde catalogus behoren als het ZAAKTYPE.
   *
   * @tags zaaktypen
   * @name ZaaktypePartialUpdate
   * @summary Werk een ZAAKTYPE deels bij.
   * @request PATCH:/zaaktypen/{uuid}
   * @secure
   */
  zaaktypePartialUpdate = (uuid: string, data: Partial<PatchedZaakType>, params: RequestParams = {}) =>
    this.http.request<ZaaktypePartialUpdateData, ValidatieFout | Fout>({
      path: `/zaaktypen/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een ZAAKTYPE. Dit kan alleen als het een concept betreft.
   *
   * @tags zaaktypen
   * @name ZaaktypeDestroy
   * @summary Verwijder een ZAAKTYPE.
   * @request DELETE:/zaaktypen/{uuid}
   * @secure
   */
  zaaktypeDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaaktypeDestroyData, Fout>({
      path: `/zaaktypen/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags zaaktypen
   * @name ZaaktypeHeaders
   * @summary De headers voor een specifiek(e) ZAAKTYPE opvragen
   * @request HEAD:/zaaktypen/{uuid}
   */
  zaaktypeHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<ZaaktypeHeadersData, any>({
      path: `/zaaktypen/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Publiceren van het zaaktype zorgt ervoor dat dit in een Zaken API kan gebruiktworden. Na het publiceren van een zaaktype zijn geen inhoudelijke wijzigingenmeer mogelijk - ook niet de statustypen, eigenschappen... etc. Indien er na hetpubliceren nog wat gewijzigd moet worden, dan moet je een nieuwe versieaanmaken.
   *
   * @tags zaaktypen
   * @name ZaaktypePublish
   * @summary Publiceer het concept ZAAKTYPE.
   * @request POST:/zaaktypen/{uuid}/publish
   * @secure
   */
  zaaktypePublish = (uuid: string, data: Partial<ZaakType>, params: RequestParams = {}) =>
    this.http.request<ZaaktypePublishData, any>({
      path: `/zaaktypen/${uuid}/publish`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
