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
  AudittrailListData,
  AudittrailRetrieveData,
  EIOZoekRequest,
  EnkelvoudiginformatieobjectCreateData,
  EnkelvoudigInformatieObjectCreateLockRequest,
  EnkelvoudiginformatieobjectDestroyData,
  EnkelvoudiginformatieobjectDownloadData,
  EnkelvoudiginformatieobjectDownloadParams,
  EnkelvoudiginformatieobjectHeadersData,
  EnkelvoudiginformatieobjectListData,
  EnkelvoudiginformatieobjectListParams,
  EnkelvoudiginformatieobjectLockData,
  EnkelvoudiginformatieobjectPartialUpdateData,
  EnkelvoudiginformatieobjectRetrieveData,
  EnkelvoudiginformatieobjectRetrieveParams,
  EnkelvoudiginformatieobjectUnlockData,
  EnkelvoudiginformatieobjectUpdateData,
  EnkelvoudigInformatieObjectWithLockRequest,
  EnkelvoudiginformatieobjectZoekData,
  EnkelvoudiginformatieobjectZoekParams,
  Fout,
  PatchedEnkelvoudigInformatieObjectWithLockRequest,
  UnlockEnkelvoudigInformatieObjectRequest,
  ValidatieFout,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Enkelvoudiginformatieobjecten<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description Deze lijst kan gefilterd wordt met query-string parameters. De objecten bevatten metadata over de documenten en de downloadlink (`inhoud`) naar de binary data. Alleen de laatste versie van elk(ENKELVOUDIG) INFORMATIEOBJECT wordt getoond. Specifieke versies kunnen alleen
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectList
   * @summary Alle (ENKELVOUDIGe) INFORMATIEOBJECTen opvragen.
   * @request GET:/enkelvoudiginformatieobjecten
   * @secure
   */
  enkelvoudiginformatieobjectList = (query: EnkelvoudiginformatieobjectListParams, params: RequestParams = {}) =>
    this.http.request<EnkelvoudiginformatieobjectListData, ValidatieFout | Fout>({
      path: `/enkelvoudiginformatieobjecten`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description **Er wordt gevalideerd op** - geldigheid `informatieobjecttype` URL - de resource moet opgevraagd kunnen worden uit de catalogi API en de vorm van een INFORMATIEOBJECTTYPE hebben. - publicatie `informatieobjecttype` - `concept` moet `false` zijn
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectCreate
   * @summary Maak een (ENKELVOUDIG) INFORMATIEOBJECT aan.
   * @request POST:/enkelvoudiginformatieobjecten
   * @secure
   */
  enkelvoudiginformatieobjectCreate = (
    data: Partial<EnkelvoudigInformatieObjectCreateLockRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectCreateData, ValidatieFout | Fout>({
      path: `/enkelvoudiginformatieobjecten`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Alle audit trail regels behorend bij het INFORMATIEOBJECT.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name AudittrailList
   * @summary Alle audit trail regels behorend bij het INFORMATIEOBJECT.
   * @request GET:/enkelvoudiginformatieobjecten/{enkelvoudiginformatieobject_uuid}/audittrail
   * @secure
   */
  audittrailList = (enkelvoudiginformatieobjectUuid: string, params: RequestParams = {}) =>
    this.http.request<AudittrailListData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${enkelvoudiginformatieobjectUuid}/audittrail`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Een specifieke audit trail regel opvragen.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name AudittrailRetrieve
   * @summary Een specifieke audit trail regel opvragen.
   * @request GET:/enkelvoudiginformatieobjecten/{enkelvoudiginformatieobject_uuid}/audittrail/{uuid}
   * @secure
   */
  audittrailRetrieve = (uuid: string, enkelvoudiginformatieobjectUuid: string, params: RequestParams = {}) =>
    this.http.request<AudittrailRetrieveData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${enkelvoudiginformatieobjectUuid}/audittrail/${uuid}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description  Het object bevat metadata over het document en de downloadlink (`inhoud`) naar de binary data. Dit geeft standaard de laatste versie van het (ENKELVOUDIG) INFORMATIEOBJECT. Specifieke versies kunnen middels query-string parameters worden opgevraagd.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectRetrieve
   * @summary Een specifiek (ENKELVOUDIG) INFORMATIEOBJECT opvragen.
   * @request GET:/enkelvoudiginformatieobjecten/{uuid}
   * @secure
   */
  enkelvoudiginformatieobjectRetrieve = (
    { uuid, ...query }: EnkelvoudiginformatieobjectRetrieveParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectRetrieveData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT. **Er wordt gevalideerd op** - correcte `lock` waarde - status NIET `definitief`
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectUpdate
   * @summary Werk een (ENKELVOUDIG) INFORMATIEOBJECT in zijn geheel bij.
   * @request PUT:/enkelvoudiginformatieobjecten/{uuid}
   * @secure
   */
  enkelvoudiginformatieobjectUpdate = (
    uuid: string,
    data: Partial<EnkelvoudigInformatieObjectWithLockRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectUpdateData, ValidatieFout | Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Dit creëert altijd een nieuwe versie van het (ENKELVOUDIG) INFORMATIEOBJECT. **Er wordt gevalideerd op** - correcte `lock` waarde - status NIET `definitief`
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectPartialUpdate
   * @summary Werk een (ENKELVOUDIG) INFORMATIEOBJECT deels bij.
   * @request PATCH:/enkelvoudiginformatieobjecten/{uuid}
   * @secure
   */
  enkelvoudiginformatieobjectPartialUpdate = (
    uuid: string,
    data: Partial<PatchedEnkelvoudigInformatieObjectWithLockRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectPartialUpdateData, ValidatieFout | Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}`,
      method: "PATCH",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * @description Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT en alle bijbehorende versies, samen met alle gerelateerde resources binnen deze API. Dit is alleen mogelijk als er geen OBJECTINFORMATIEOBJECTen relateerd zijn aan het (ENKELVOUDIG) INFORMATIEOBJECT. **Gerelateerde resources** - GEBRUIKSRECHTen - audit trail regels
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectDestroy
   * @summary Verwijder een (ENKELVOUDIG) INFORMATIEOBJECT.
   * @request DELETE:/enkelvoudiginformatieobjecten/{uuid}
   * @secure
   */
  enkelvoudiginformatieobjectDestroy = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EnkelvoudiginformatieobjectDestroyData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * @description Vraag de headers op die je bij een GET request zou krijgen.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectHeaders
   * @summary De headers voor een specifiek(e) ENKELVOUDIG INFORMATIE OBJECT opvragen
   * @request HEAD:/enkelvoudiginformatieobjecten/{uuid}
   */
  enkelvoudiginformatieobjectHeaders = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EnkelvoudiginformatieobjectHeadersData, any>({
      path: `/enkelvoudiginformatieobjecten/${uuid}`,
      method: "HEAD",
      ...params,
    });
  /**
   * @description Download de binaire data van het (ENKELVOUDIG) INFORMATIEOBJECT.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectDownload
   * @summary Download de binaire data van het (ENKELVOUDIG) INFORMATIEOBJECT.
   * @request GET:/enkelvoudiginformatieobjecten/{uuid}/download
   * @secure
   */
  enkelvoudiginformatieobjectDownload = (
    { uuid, ...query }: EnkelvoudiginformatieobjectDownloadParams,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectDownloadData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}/download`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * @description Voert een 'checkout' uit waardoor het (ENKELVOUDIG) INFORMATIEOBJECTvergrendeld wordt met een `lock` waarde. Alleen met deze waarde kan het(ENKELVOUDIG) INFORMATIEOBJECT bijgewerkt (`PUT`, `PATCH`) en weerontgrendeld worden.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectLock
   * @summary Vergrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
   * @request POST:/enkelvoudiginformatieobjecten/{uuid}/lock
   * @secure
   */
  enkelvoudiginformatieobjectLock = (uuid: string, params: RequestParams = {}) =>
    this.http.request<EnkelvoudiginformatieobjectLockData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}/lock`,
      method: "POST",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Heft de 'checkout' op waardoor het (ENKELVOUDIG) INFORMATIEOBJECTontgrendeld wordt.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectUnlock
   * @summary Ontgrendel een (ENKELVOUDIG) INFORMATIEOBJECT.
   * @request POST:/enkelvoudiginformatieobjecten/{uuid}/unlock
   * @secure
   */
  enkelvoudiginformatieobjectUnlock = (
    uuid: string,
    data: Partial<UnlockEnkelvoudigInformatieObjectRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectUnlockData, Fout>({
      path: `/enkelvoudiginformatieobjecten/${uuid}/unlock`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      ...params,
    });
  /**
   * @description Zoeken/filteren gaat normaal via de `list` operatie, deze is echter niet geschikt voor zoekopdrachten met UUIDs.
   *
   * @tags enkelvoudiginformatieobjecten
   * @name EnkelvoudiginformatieobjectZoek
   * @summary Voer een zoekopdracht uit op (ENKELVOUDIG) INFORMATIEOBJECTen.
   * @request POST:/enkelvoudiginformatieobjecten/_zoek
   * @secure
   */
  enkelvoudiginformatieobjectZoek = (
    query: EnkelvoudiginformatieobjectZoekParams,
    data: Partial<EIOZoekRequest>,
    params: RequestParams = {},
  ) =>
    this.http.request<EnkelvoudiginformatieobjectZoekData, ValidatieFout | Fout>({
      path: `/enkelvoudiginformatieobjecten/_zoek`,
      method: "POST",
      query: query,
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
}
