import {autoinject} from 'aurelia-framework';
import {Details} from '../config/details';

@autoinject
export class Home {
    constructor(public details: Details) {
        
    }
}