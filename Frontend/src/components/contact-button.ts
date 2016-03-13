import {autoinject} from 'aurelia-framework';
import {Details} from '../config/details';

@autoinject
export class ContactButton {
    constructor(public details: Details) {
        
    }
}