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

import { BestandsDeelRequest, BestandsdeelUpdateData, Fout, ValidatieFout } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Bestandsdelen<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * @description based on DRF mixin but without partial_update
   *
   * @tags bestandsdelen
   * @name BestandsdeelUpdate
   * @summary Upload een bestandsdeel.
   * @request PUT:/bestandsdelen/{uuid}
   * @secure
   */
  bestandsdeelUpdate = (uuid: string, data: BestandsDeelRequest, params: RequestParams = {}) =>
    this.http.request<BestandsdeelUpdateData, ValidatieFout | Fout>({
      path: `/bestandsdelen/${uuid}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.UrlEncoded,
      format: "json",
      ...params,
    });
}
