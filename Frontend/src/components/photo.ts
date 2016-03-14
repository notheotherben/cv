import {bindable} from 'aurelia-framework';

export class Photo {
    @bindable src: string;
    @bindable alt: string;
    @bindable title: string;
    @bindable subtitle: string;
}