/// <reference path="../typings/_custom.d.ts" />
import {bind} from 'angular2/angular2';
import {
  LocationStrategy,
  HashLocationStrategy,
  HTML5LocationStrategy
} from 'angular2/router';

export let HTML5_LOCATION_BINDINGS = [
  bind(LocationStrategy).toClass(HTML5LocationStrategy)
];

export let HASH_LOCATION_BINDINGS = [
  bind(LocationStrategy).toClass(HashLocationStrategy)
];
