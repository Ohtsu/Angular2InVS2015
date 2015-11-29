/// <reference path="../typings/angular2/angular2.d.ts" />
/// <reference path="../typings/angular2/http.d.ts" />
/// <reference path="../typings/angular2/router.d.ts" />
/// <reference path="../typings/es6-shim/es6-shim.d.ts" />

import {Component, View,bind,NgFor, bootstrap,FORM_DIRECTIVES} from 'angular2/angular2';
import {Http} from "angular2/http";
import {RouteConfig,RouterOutlet,RouterLink,Router} from "angular2/router";

@Component({
    selector: 'my-app'
})

@View({
    directives: [FORM_DIRECTIVES],
    templateUrl: 'templates/tmpAppComponent.html'
})

class AppComponent {
    name: string;
    job: string;
    checkJob(): void {
        alert("Your job is  " + this.job);
    }
    checkName(): void {
        alert("Your Name is  " + this.name);
    }
    constructor() {
        this.name = "Input your name";
        this.job  = "Input your job";
    }
}


bootstrap(AppComponent);
