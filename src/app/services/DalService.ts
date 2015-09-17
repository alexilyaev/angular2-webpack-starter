/// <reference path="../../typings/_custom.d.ts" />

import {bind, Inject, Injectable} from 'angular2/angular2';

import {Http, Headers} from 'angular2/http';

@Injectable()
export class DalService {
  options: Object;

  constructor(public http: Http) {

  }

  get(options) {
    let headers = new Headers(options.headers);

    return this.http
      .get(options.url, {
        headers: headers
      })
      .toRx()
      .map(res => res.json()
    );//end http
  }


}//DalService

// export our injectables for this module
export var DAL_BINDINGS: Array<any> = [
  bind(DalService).toClass(DalService)
];
