import {autoinject} from 'aurelia-framework';
import {Technology, Technologies} from './technologies';

@autoinject
export class Projects {
    constructor(protected tech: Technologies) {
        
    }
    
    public projects: Project[] = [
        {
            id: 'farmtrack',
            name: 'FarmTrack',
            url: 'http://farmtracksa.com',
            summary: 'A realtime GPS data analytics platform providing fruit farmers with actionable intelligence on the application of their vehicles to crop spraying.',
            technologies: this.tech.subset('TypeScript', 'JavaScript', 'Aurelia', 'MongoDB', 'Redis','Ansible', 'Gulp', 'Git','NGINX', 'HAProxy','Consul', 'CentOS'),
            story: true
        }, {
            id: 'netcon',
            name: 'IXUS Netcon',
            summary: "A redesign of EMSS's legacy Vodacom network database import tool to alleviate scaling issues and allow for future extensibility.",
            technologies: this.tech.subset('C#', 'Microsoft SQL Server', 'Git', 'Windows Server'),
            story: true
        }, {
            id: 'fieldsense',
            name: 'FieldSense',
            url: 'http://fieldsense.com',
            summary: 'A native application responsible for extracting electromagnetic field exposure data from the FieldSense 2.0 for later review.',
            technologies: this.tech.subset('C++', 'Qt', 'Git'),
            story: true
        }, {
            id: 'antennaportal',
            name: 'AntennaPortal',
            url: 'https://antennaportal.com',
            summary: 'An antenna model database for the IXUS EMF Acreditation software suite, providing a powerful structured search engine and automating much of the antenna model QA process.',
            technologies: this.tech.subset('C#', 'ASP.NET', 'Angular.js', 'Microsoft SQL Server', 'Microsoft IIS', 'Git', 'Windows Server'),
            story: false
        }, {
            id: 'frontier',
            name: 'Frontier',
            url: 'https://auth.sierrasoftworks.com',
            summary: 'A federated authentication protocol, server and client implementation developed to address the needs of developers writing small, secure applications.',
            technologies: this.tech.subset('JavaScript', 'MongoDB', 'Redis', 'Angular.js', 'NGINX', 'Git', 'CentOS', 'SmartOS'),
            story: false
        }, {
            id: 'iridium',
            name: 'Iridium',
            url: 'http://sierrasoftworks.github.io/Iridium',
            summary: 'A popular MongoDB ORM for Node.js which was designed to take advantage of TypeScript while offering exceptional performance and an easy to remember API.',
            technologies: this.tech.subset('TypeScript', 'JavaScript', 'Gulp', 'Git', 'MongoDB'),
            story: true
        }
    ];
}

export interface Project {
    id: string;
    name: string;
    url?: string;
    summary: string;
    technologies: Technology[];
    story?: boolean;
}