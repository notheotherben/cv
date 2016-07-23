import * as moment from 'moment';

export class DateFormatValueConverter {
    toView(value: Date, format: string = 'YYYY-MM-DD[T]HH:mm:ss.SSSZZ'): string {
        return moment.utc(value).format(format);
    }
    
    fromView(value: string, format: string = 'YYYY-MM-DD[T]HH:mm:ss.SSSZZ'): Date {
        return moment.utc(value, format).toDate();
    }
}