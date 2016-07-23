export class Details implements IDetails {
    get fullname() {
        return [this.firstname].concat(this.middlenames).concat(this.lastname).join(' ');
    }
    
    firstname = "Benjamin";
    middlenames = ["Matthew"];
    lastname = "Pannell";
    gender = "Male";
    
    citizenship = ["South African", "Irish"];
    location: ILocation = {
        city: 'Stellenbosch',
        postalCode: 7600,
        province: 'Western Cape',
        country: 'South Africa'
    };
    
    timeline: ITimelineEntry[] = [
        {
            title: 'SRE/Monitoring',
            location: 'Demonware Pty (Ltd), Dublin, Ireland',
            description: 'Working to develop a next-generation monitoring system for Activision built on Docker, Mesos and Marathon.',
            type: 'code',
            colour: 'green',
            startDate: new Date('2016-09-19T00:00:00Z')
        },{
            title: 'Software Developer',
            location: 'EMSS Consulting Pty (Ltd), Stellenbosch, South Africa',
            description: 'Worked as a software developer on a number of projects, including FarmTrack and FieldSense.',
            type: 'code',
            colour: 'green',
            startDate: new Date('2015-01-05T00:00:00Z'),
            endDate: new Date('2016-09-16T00:00:00Z')
        },{
            title: 'Studying Engineering',
            location: 'Stellenbosch University, Stellenbosch, South Africa',
            description: 'Received my honours degree in Electrical and Electronic engineering, specializing in Informatics.',
            type: 'school',
            colour: 'red darken-4',
            startDate: new Date('2011-01-31T00:00:00Z'),
            endDate: new Date('2014-11-21T00:00:00Z')
        },{
            title: 'Software Developer',
            location: 'Waterex Pty (Ltd), Perth, Australia',
            description: 'Spent a month developing a pin bed clarifier sizing tool for Waterex Pty (Ltd) while spending time with my cousins.',
            type: 'code',
            colour: 'deep-orange',
            startDate: new Date('2010-10-02T00:00:00Z'),
            endDate: new Date('2010-11-07T00:00:00Z')
        },{
            title: 'Firesky Game Farm',
            location: 'Limpopo, South Africa',
            description: 'Worked on a game farm, repairing electrical fences, feeding animals and operating a JCB.',
            type: 'pets',
            colour: 'orange',
            startDate: new Date('2010-07-01T00:00:00Z'),
            endDate: new Date('2010-10-01T00:00:00Z')
        },{
            title: 'Computer Technician',
            location: 'Wingate Computers, Johannesburg, South Africa',
            description: 'Spent a couple of months working as a computer technician for a local store, saving money for my travels later in the year.',
            type: 'build',
            colour: 'light-blue',
            startDate: new Date('2010-02-01T00:00:00Z'),
            endDate: new Date('2010-05-30T00:00:00Z')
        },{
            title: 'Cambridge A-Levels',
            location: 'British International College, Johannesburg, South Africa',
            description: 'Completed three full credit and an additional two half credit modules.',
            type: 'school',
            colour: 'blue',
            startDate: new Date('2008-01-14T00:00:00Z'),
            endDate: new Date('2009-11-27T00:00:00Z')
        },{
            title: 'Cambridge IGCSE',
            location: 'British International College, Johannesburg, South Africa',
            description: "Completed 11 IGCSE modules, learning a number of languages I've since forgotten...",
            type: 'school',
            colour: 'blue',
            startDate: new Date('2006-01-16T00:00:00Z'),
            endDate: new Date('2007-11-30T00:00:00Z')
        }
    ];
    
    gravatarID = "54766faa1dec71848897d1259847b637";
    
    contactDetails: IContactDetails[] = [
        {
            type: "Email",
            url: "mailto:benjamin.pannell@gmail.com",
            address: "Benjamin.Pannell@gmail.com"
        },
        {
            type: "Phone",
            url: "tel:27728642055",
            address: "(+27) 072 864 2055"
        },
        {
            type: "Website",
            url: "https://sierrasoftworks.com",
            address: "sierrasoftworks.com"
        },
        {
            type: "GitHub",
            url: "https://github.com/spartan563",
            address: "spartan563"
        }
    ];
}

export interface IDetails {
    fullname: string;
    
    firstname: string;
    middlenames: string[];
    lastname: string;
    gender: string;
    
    citizenship: string[];
    location: ILocation;
    timeline: ITimelineEntry[];
    
    gravatarID: string;
}

export interface ITimelineEntry {
    title: string;
    description: string;
    location: string;
    type: string;
    colour: string;
    
    startDate: Date;
    endDate?: Date;
}

export interface ILocation {
    city: string;
    postalCode: number;
    province: string;
    country: string;
}

export interface IContactDetails {
    type: string;
    url: string;
    address: string;
}