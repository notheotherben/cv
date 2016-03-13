import {LogManager, Aurelia} from 'aurelia-framework';
import {ConsoleAppender} from 'aurelia-logging-console';

LogManager.addAppender(new ConsoleAppender());
LogManager.setLevel(LogManager.logLevel.debug);

export function configure(aurelia) {
    aurelia.use.standardConfiguration();
    
    aurelia.use
        .globalResources('app/utils/code')
        .globalResources('app/utils/dates')
        .globalResources('app/utils/details')
        .globalResources('app/utils/filters')
        .globalResources('app/utils/technologies');
    
    aurelia.start().then(a => a.setRoot());
}