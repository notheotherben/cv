import {bindable, computedFrom} from 'aurelia-framework';
import {ChartData, ChartOptions} from './chart';
import {Technology} from '../config/technologies';

@bindable('technology')
export class TechnologyCard {
    technology: Technology;
    
    @computedFrom('technology')
    get enjoymentData(): ChartData {
        return {
            series: [this.technology.enjoyment]
        };
    }
    
    @computedFrom('technology')
    get proficiencyData(): ChartData {
        return {
            series: [this.technology.proficiency]
        };
    }
    
    chartOptions: ChartOptions = {
        height: 150,
        width: 200,
        donut: true,
        donutWidth: 20,
        total: 10,
        showLabel: false
    };
}