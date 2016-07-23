import {autoinject, bindable} from 'aurelia-framework';
import {EventAggregator} from "aurelia-event-aggregator";
import {Router} from 'aurelia-router';

@autoinject
@bindable('router')
export class MenuBar {
    constructor(private eventAggregator: EventAggregator) {
        eventAggregator.subscribe("router:navigation:processing", () => this.hideMobileMenu());
    }

    router: Router;

    @bindable edge: "left"|"right" = "left";
    mobileMenuOpen: boolean = false;
    
    attached() {
        
    }

    showMobileMenu() {
        this.mobileMenuOpen = true;
    }

    hideMobileMenu(event?: MouseEvent) {
        this.mobileMenuOpen = false;
    }
}