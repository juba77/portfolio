export type Project = {
    starting_date: string;
    ending_date: string;
    title: string;
    location: string;
    missions: string[];
    link?: string;
    git?: string;
    tags?: string[];
}