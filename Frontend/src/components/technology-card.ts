import {bindable, computedFrom} from 'aurelia-framework';
import {Technology} from '../config/technologies';

@bindable('technology')
export class TechnologyCard {
    technology: Technology;
    
    @computedFrom('technology')
    get enjoymentData() {
        return {
            series: [this.technology.enjoyment]
        };
    }
    
    @computedFrom('technology')
    get proficiencyData() {
        return {
            series: [this.technology.proficiency]
        };
    }
    
    chartOptions = {
        height: 150,
        width: 200,
        donut: true,
        donutWidth: 20,
        total: 10,
        showLabel: false
    };
}