import {autoinject, bindable} from 'aurelia-framework';
import {Router} from 'aurelia-router';

@autoinject
@bindable('router')
export class MenuBar {
    router: Router;
    
    attached() {
        $('.button-collapse').sideNav();
    }
}