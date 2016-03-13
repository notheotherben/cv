import {autoinject} from 'aurelia-framework';
import {Projects} from '../config/projects';

@autoinject
export class Development {
    constructor(public projects: Projects) {
        
    }
}