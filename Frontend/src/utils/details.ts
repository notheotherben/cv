import {IContactDetails} from '../config/details';

export class ContactDetailIconValueConverter {
    toView(contactDetail: IContactDetails) {
        switch(contactDetail.type) {
            case 'Phone': return 'phone';
            case 'Email': return 'mail_outline';
            case 'Website': return 'http';
            case 'GitHub': return 'code';
            default: return '';
        }
    }
}

export class ContactDetailColourValueConverter {
    toView(contactDetail: IContactDetails) {
        switch(contactDetail.type) {
            case 'Phone': return 'orange darken-4 white-text';
            case 'Email': return 'light-blue darken-1';
            case 'Website': return 'indigo darken-4 white-text';
            case 'GitHub': return 'black white-text';
            default: return '';
        }
    }
}