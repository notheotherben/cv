import {autoinject} from 'aurelia-framework';
import {Details} from '../config/details';

@autoinject
export class About {
    constructor(public details: Details) {
        
    }
}