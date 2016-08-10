export class Technologies {
    technologies: Technology[] = [
        {
            name: 'Go',
            type: 'Language',
            url: 'http://golang.org',
            enjoyment: 9,
            proficiency: 7
        },
        {
            name: 'C#',
            type: 'Language',
            url: 'https://msdn.microsoft.com/en-us/library/z1zx9t92.aspx',
            enjoyment: 7,
            proficiency: 9
        },
        {
            name: 'C++',
            type: 'Language',
            url: 'https://en.wikipedia.org/wiki/C%2B%2B',
            enjoyment: 7,
            proficiency: 6
        },
        {
            name: 'JavaScript',
            type: 'Language',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
            enjoyment: 8,
            proficiency: 8
        },
        {
            name: 'TypeScript',
            type: 'Language',
            url: 'http://www.typescriptlang.org/',
            enjoyment: 9,
            proficiency: 8
        },
        {
            name: 'F#',
            type: 'Language',
            url: 'http://www.fsharp.org/',
            enjoyment: 7,
            proficiency: 4
        },
        {
            name: 'Java',
            type: 'Language',
            url: 'https://en.wikipedia.org/wiki/Java_(programming_language)',
            enjoyment: 3,
            proficiency: 6
        },
        {
            name: 'Python',
            type: 'Language',
            url: 'http://python.org',
            enjoyment: 5,
            proficiency: 6
        },
        {
            name: 'Qt',
            type: 'Framework',
            url: 'http://qt.io',
            enjoyment: 7,
            proficiency: 8
        },
        {
            name: 'ASP.NET',
            type: 'Framework',
            url: 'http://www.asp.net/',
            enjoyment: 4,
            proficiency: 7
        },
        {
            name: 'Angular.js',
            type: 'Framework',
            url: 'http://www.angularjs.org/',
            enjoyment: 5,
            proficiency: 8
        },
        {
            name: 'Aurelia',
            type: 'Framework',
            url: 'http://www.aurelia.io/',
            enjoyment: 9,
            proficiency: 9
        },
        {
            name: 'MongoDB',
            type: 'Database',
            url: 'http://mongodb.org',
            enjoyment: 9,
            proficiency: 8
        },
        {
            name: 'PostgreSQL',
            type: 'Database',
            url: 'http://www.postgresql.org/',
            enjoyment: 7,
            proficiency: 6
        },
        {
            name: 'MySQL',
            type: 'Database',
            url: 'http://www.mysql.com/',
            enjoyment: 6,
            proficiency: 4
        },
        {
            name: 'Microsoft SQL Server',
            type: 'Database',
            url: 'http://www.microsoft.com/en/server-cloud/products/sql-server/',
            enjoyment: 5,
            proficiency: 7
        },
        {
            name: 'Redis',
            type: 'Database',
            url: 'http://redis.io',
            enjoyment: 8,
            proficiency: 6
        },
        {
            name: 'Ansible',
            type: 'Automation',
            url: 'http:/www.ansible.com',
            enjoyment: 9,
            proficiency: 7
        },
        {
            name: 'Chef',
            type: 'Automation',
            url: 'http://chef.io',
            enjoyment: 2,
            proficiency: 5
        },
        {
            name: 'Docker',
            type: 'Automation',
            url: 'https://www.docker.com',
            enjoyment: 10,
            proficiency: 7
        },
        {
            name: 'Mesosphere DC/OS',
            type: 'Automation',
            url: 'http://dcos.io/',
            enjoyment: 8,
            proficiency: 6
        },
        {
            name: 'Kubernetes',
            type: 'Automation',
            url: 'http://kubernetes.io/',
            enjoyment: 7,
            proficiency: 6
        },
        {
            name: 'Rancher',
            type: 'Automation',
            url: 'http://rancher.com/',
            enjoyment: 8,
            proficiency: 6
        },
        {
            name: 'NGINX',
            type: 'Web Server',
            url: 'https://www.nginx.com/',
            enjoyment: 7,
            proficiency: 8
        },
        {
            name: 'HAProxy',
            type: 'Web Server',
            url: 'http://www.haproxy.org',
            enjoyment: 8,
            proficiency: 7
        },
        {
            name: 'Microsoft IIS',
            type: 'Web Server',
            url: 'https://www.iis.net',
            enjoyment: 4,
            proficiency: 7
        },
        {
            name: 'Consul',
            type: 'Infrastructure Tool',
            url: 'http://consul.io',
            enjoyment: 8,
            proficiency: 7
        },
        {
            name: 'CentOS',
            type: 'Operating System',
            url: 'https://www.centos.org',
            enjoyment: 8,
            proficiency: 7
        },
        {
            name: 'CoreOS',
            type: 'Operating System',
            url: 'https://www.coreos.com',
            enjoyment: 9,
            proficiency: 7
        },
        {
            name: 'SmartOS',
            type: 'Operating System',
            url: 'https://smartos.org',
            enjoyment: 6,
            proficiency: 6
        },
        {
            name: 'Windows Server',
            type: 'Operating System',
            url: 'https://en.wikipedia.org/wiki/Windows_Server',
            enjoyment: 7,
            proficiency: 8
        },
        {
            name: 'Gulp',
            type: 'Build Tool',
            url: 'http://gulpjs.com',
            enjoyment: 7,
            proficiency: 6
        },
        {
            name: 'Git',
            type: 'Source Control',
            url: 'http://git-scm.com',
            enjoyment: 8,
            proficiency: 7
        }
    ];
    
    subset(...names: string[]): Technology[] {
        return this.technologies.filter(x => !!~names.indexOf(x.name));
    }
}

export interface Technology {
    name: string;
    type: string;
    url: string;
    enjoyment: number;
    proficiency: number;
}