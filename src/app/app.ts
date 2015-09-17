/// <reference path="../typings/_custom.d.ts" />

/*
 * Angular 2 decorators and services
 */
import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {RouteConfig, Router} from 'angular2/router';
import {Http, Headers} from 'angular2/http';

/*
 * Angular Directives
 */
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';

import {XLarge} from './components/x-large';

// import appView from './app.html';
let appView = require('./app.html');
let appStyle = require('./app.css');

// console.log(appView);

/*
 * App Component
 * Top Level Component
 */
@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'app'
  selector: 'app' // <app></app>
})

@View({
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    CORE_DIRECTIVES,
    FORM_DIRECTIVES,
    ROUTER_DIRECTIVES,
    XLarge
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [appStyle],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: appView
})

export class App {
  // These are member type
  title: string;
  data: Array<any> = []; // default data

  constructor(public http: Http) {
    this.title = 'Angular 2';

    // Our API
    // npm run express-install
    // npm run express

    const BASE_URL = 'http://localhost:3001';
    const TODO_API_URL = '/api/todos';
    const JSON_HEADERS = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    this.http
      .get(BASE_URL + TODO_API_URL, {
        headers: JSON_HEADERS
      })
      .toRx()
      .map(res => res.json())
      .subscribe(
        // onNext callback
        data => this.serverData(data),
        // onError callback
        err  => this.errorMessage(err)
      );//end http
  }

  serverData(data) {
    console.log('data', data);
    this.data = data;
  }//serverData

  errorMessage(err) {
    if (err && (/Unexpected token/).test(err.message) || err.status === 0) {
      console.info(`${'\n'
        } // You must run these commands for the Http API to work in another process ${'\n'
        } npm run express-install ${'\n'
        } npm run express
      `);
    }//end err.message
  }//errorMessage

}



/*
 * Please review the examples/ folder for more angular app examples
 * For help or questions please contact us at @AngularClass on twitter
 * or via chat on gitter at https://gitter.im/angular-class/angular2-webpack-starter
 */

