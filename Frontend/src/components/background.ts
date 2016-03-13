import {customElement, autoinject} from 'aurelia-framework';
import {GradientProvider, GradientTransitionConfig, Gradient} from '../config/gradients';

@autoinject
@customElement('background')
export class Background {
    constructor(public gradients: GradientProvider, public config: GradientTransitionConfig) {
        this.bottomGradient = gradients.getNext();
    }
    
    attached() {
        this.intervalHandle = setInterval(() => this.animateNext(), this.config.transitionTime + this.config.transitionPause);
    }
    
    detached() {
        clearInterval(this.intervalHandle);
    }
    
    topVisible: boolean = false;
    topGradient: Gradient;
    bottomGradient: Gradient;
    intervalHandle: number;
    
    animateNext() {
        if(!this.topVisible) {
            this.topGradient = this.gradients.getNext();
            this.topVisible = true;
        } else {
            this.bottomGradient = this.gradients.getNext();
            this.topVisible = false;
        }
    }
}
