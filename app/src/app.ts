import {autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        
        config.options.pushState = true;
        config.title = 'Benjamin Pannell';
        config.map([
            { route: '', name: 'welcome', moduleId: 'views/welcome', nav: false },
            { route: 'dev', name: 'development', moduleId: 'views/development', nav: false, title: 'Development' },
            { route: 'ops', name: 'operations', moduleId: 'views/operations', nav: false, title: 'Operations' },
            { route: 'engineer', name: 'engineering', moduleId: 'views/engineering', nav: false, title: 'Engineering' },
            { route: 'projects', name: 'projects', moduleId: 'views/projects', nav: true, title: 'Projects' },
            { route: 'technologies', name: 'technologies', moduleId: 'views/technologies', nav: true, title: 'Technologies' },
            { route: 'about', name: 'about', moduleId: 'views/about', nav: true, title: 'About' },
            
            { route: 'project/:id', name: 'project', moduleId: 'views/project', nav: false }
        ]);
    }
}
