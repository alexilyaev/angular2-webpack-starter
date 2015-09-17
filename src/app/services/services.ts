/// <reference path="../../typings/_custom.d.ts" />

import {bind} from 'angular2/angular2';

import {DAL_BINDINGS} from './DalService';

// Include injectables that you want to have globally throughout our app
export let APP_SERVICES_BINDINGS: Array<any> = [
	DAL_BINDINGS
];
