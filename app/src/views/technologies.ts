import {autoinject} from 'aurelia-framework';
import {Technologies as Tech} from '../config/technologies';

@autoinject
export class Technologies {
    constructor(public technologies: Tech) {
        
    }
}