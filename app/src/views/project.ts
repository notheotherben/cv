import {autoinject} from 'aurelia-framework';
import {Projects, Project as IProject} from '../config/projects';

@autoinject
export class Project {
    constructor(public projects: Projects) {
        
    }
    
    project: IProject;
    
    activate(params) {
        this.project = this.projects.projects.find(p => p.id === params.id);
    }
}