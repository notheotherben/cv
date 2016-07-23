import {Technology} from '../config/technologies';

export class TechnologyColourValueConverter {
    toView(technology: Technology) {
        if(!technology) return;
        switch(technology.type) {
            case 'Language': return 'blue darken-4 white-text';
            case 'Database':  return 'deep-purple white-text';
            case 'Framework':  return 'blue white-text';
            case 'Web Server':  return 'green white-text';
            case 'Build Tool': return 'cyan white-text';
            case 'Source Control': return 'yellow black-text';
            case 'Error Tracking': return 'red darken-4 white-text';
            case 'Automation':  return 'amber black-text';
            case 'Infrastructure Tool':  return 'deep-orange white-text';
            case 'Operating System': return 'blue-grey white-text';
            default: return '';
        }
    }
}

export class TechnologyIconValueConverter {
    toView(technology: Technology) {
        if(!technology) return;
        switch(technology.type) {
            case 'Language': return 'translate';
            case 'Database':  return 'save';
            case 'Framework':  return 'build';
            case 'Web Server':  return 'cloud_queue';
            case 'Build Tool': return 'system_update';
            case 'Source Control': return 'code';
            case 'Error Tracking': return 'bug_report';
            case 'Automation':  return 'android';
            case 'Infrastructure Tool':  return 'track_changes';
            case 'Operating System': return 'desktop_windows';
            default: return '';
        }
    }
}