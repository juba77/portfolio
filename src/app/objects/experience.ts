export type Experience = {
    company: string;
    starting_date: string;
    ending_date: string;
    title: string;
    location: string;
    missions: string[];
    tags?: string[];
    logo: string;
    url?: string;
    duration: string;
}

export type Experiences = {
    experiences : Experience[];
}