import {autoinject} from 'aurelia-framework';
import {Details, ITimelineEntry} from '../config/details';

import * as moment from "moment";

@autoinject
export class About {
    constructor(public details: Details) {
        
    }

    isUpcoming(entry: ITimelineEntry): boolean {
        return moment(entry.startDate).isAfter();
    }

    isCurrent(entry: ITimelineEntry): boolean {
        return moment(entry.startDate).isBefore() && !entry.endDate;
    }

    isPrevious(entry: ITimelineEntry): boolean {
        return entry.startDate && !!entry.endDate;
    }
}