declare const DEVELOPMENT: boolean;
declare const SENTRY_DSN: string;

import '../styles/styles.less';

import {LogManager, Aurelia} from 'aurelia-framework';
import * as Log from "aurelia-logging";
import {RavenLogAppender} from "./loggers/raven";

export function configure(aurelia) {
    Log.setLevel(Log.logLevel.info);

    if (DEVELOPMENT) {
        Log.setLevel(Log.logLevel.debug);
        aurelia.use
            .developmentLogging();
    } else if (SENTRY_DSN) {
        Log.addAppender(aurelia.container.get(RavenLogAppender));
    }

    aurelia.use.standardConfiguration();
    
    aurelia.use
        .globalResources('utils/code')
        .globalResources('utils/dates')
        .globalResources('utils/details')
        .globalResources('utils/filters')
        .globalResources('utils/technologies');
    
    aurelia.start().then(a => a.setRoot('app'));
}