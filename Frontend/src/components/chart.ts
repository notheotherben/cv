import {inject, bindable} from 'aurelia-framework';

@inject(Element)
@bindable({
  name: 'aspect',
  defaultValue: 'ct-perfect-fourth'
})
@bindable({
    name: 'data',
    changeHandler: 'onDataChanged'
})
@bindable({
    name: 'options',
    changeHandler: 'onOptionsChanged'
})
export class Chart {
    constructor(private element: Element) {
        
    }
    
    chart: any;
    
    data: ChartData;
    
    options: ChartOptions;
    
    attached() {
        this.update(this.data, this.options);
    }
    
    detached() {
        this.chart && this.chart.detach();
    }
    
    onDataChanged(data: ChartData) {
        this.update(data);
    }
    
    onOptionsChanged(options: ChartOptions) {
        this.update(null, options);
    }
    
    update(data: ChartData, options?: ChartOptions) {
        if(!this.chart) {
            this.chart = new Chartist.Pie(this.element.firstElementChild, this.data, this.options);
        }
        this.chart.update(data, options);
    }
}

export interface ChartData {
    series: number[]|number[][];
    labels?: string[];
}

export interface ChartOptions {
    axisX?: AxisOptions;
    axisY?: AxisOptions;
    width?: number;
    height?: number;
    high?: number;
    low?: number;
    onlyInteger?: number;
    chartPadding?: number|{
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    seriesBarDistance?: number;
    stackedBars?: boolean;
    stackMode?: string;
    horizontalBars?: boolean;
    distributeSeries?: boolean;
    reverseData?: boolean;
    classNames?: {
        chart?: string;
        horizontalBars?: string;
        label?: string;
        labelGroup?: string;
        series?: string;
        bar?: string;
        grid?: string;
        gridGroup?: string;
        vertical?: string;
        horizontal?: string;
        start?: string;
        end?: string;
    };
    total?: number;
    donut?: boolean;
    donutWidth?: number;
    showLabel?: boolean;
    labelOffset?: number;
    labelPosition?: string;
    labelInterpolationFnc?: () => string;
    labelDirection?: string;
}

export interface AxisOptions {
    offset?: number;
    position?: string;
    labelOffset?: { x: number; y: number; };
    showLabel?: boolean;
    showGrid?: boolean;
    labelInterpolationFnc?: () => string;
    scaleMinSpace?: number;
    onlyInteger?: boolean;
}