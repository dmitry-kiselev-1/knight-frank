import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

export abstract class BaseService {

  protected apiRoutePrefix: string;

  constructor(
    protected uiDomain: string = 'http://138.68.173.251:4200',
    protected apiDomain: string = 'http://138.68.173.251:3000',
    protected requestOptions = new RequestOptions(),
    private headers =
      new Headers(
        {
          'Content-Type': 'application/json; charset=utf-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Access-Control-Allow-Origin': uiDomain,
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
          'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
          'Access-Control-Allow-Credentials': true
          /*'Origin': uiDomain*/
          /*Access-Control-Request-Method: POST*/
          /*Access-Control-Request-Headers: X-Custom-Header*/
        })
  ) {
    this.requestOptions.headers = this.headers;
  }

  protected handleError(error: any): Promise<any> {
    console.log(error);
    return Promise.reject(error);
  }
}
