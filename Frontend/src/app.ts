import {autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
    router: Router;
    
    configureRouter(config: RouterConfiguration, router: Router) {
        this.router = router;
        
        config.title = 'Benjamin Pannell';
        config.map([
            { route: '', name: 'welcome', moduleId: 'app/views/welcome', nav: false },
            { route: 'dev', name: 'development', moduleId: 'app/views/development', nav: false, title: 'Development' },
            { route: 'ops', name: 'operations', moduleId: 'app/views/operations', nav: false, title: 'Operations' },
            { route: 'engineer', name: 'engineering', moduleId: 'app/views/engineering', nav: false, title: 'Engineering' },
            { route: 'projects', name: 'projects', moduleId: 'app/views/projects', nav: true, title: 'Projects' },
            { route: 'technologies', name: 'technologies', moduleId: 'app/views/technologies', nav: true, title: 'Technologies' },
            { route: 'about', name: 'about', moduleId: 'app/views/about', nav: true, title: 'About' },
            
            { route: 'project/:id', name: 'project', moduleId: 'app/views/project', nav: false }
        ]);
    }
}
