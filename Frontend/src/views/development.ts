import {autoinject} from 'aurelia-framework';
import {Technologies} from '../config/technologies';

@autoinject
export class Development {
    constructor(public technologies: Technologies) {
        
    }
}