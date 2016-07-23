import {autoinject, bindable} from 'aurelia-framework';

@autoinject
export class Photo {
    constructor() {
        
    }
    
    @bindable src: string;
    @bindable alt: string;
    @bindable title: string;
    @bindable subtitle: string;
    
    image: Element;
    
    attached() {
        
    }
}