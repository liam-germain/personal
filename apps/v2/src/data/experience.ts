import { StaticImageData } from "next/image";

export interface ExperienceItem {
    id: string;
    title: string;
    company: string;
    startDate: string;
    endDate?: string;
    color: string;
    description: string;
    technologies: string[];
    logo?: StaticImageData;
    url?: string;
}

export const experiences: ExperienceItem[] = [
    // Balyasny Asset Management
    {
        id: "bam",
        title: "Consultant",
        company: "Balyasny Asset Management",
        startDate: "2022-10",
        endDate: "2023-06",
        color: "bg-blue-500",
        description: "Researched alternative asset classes.",
        technologies: ["Python", "Pandas", "NumPy"],
        url: "https://www.bamfunds.com/"
    },
    // The Rocks
    {
        id: "the-rocks",
        title: "Bartender",
        company: "The Rocks",
        startDate: "2021-06",
        endDate: "2021-09",
        color: "bg-green-500",
        description: "Worked as a bartender and server.",
        technologies: ["Vodka", "Tequila", "Rum"]
    },
    // Locol
    {
        id: "locol",
        title: "CEO & Co-Founder",
        company: "Locol",
        startDate: "2020-09",
        endDate: "2021-11",
            color: "bg-yellow-500",
        description: "Co-Founded a Social Commerce Startup.",
        technologies: ["Swift", "React", "TypeScript", "Node.js"]
    },
    // Red Lodge Mountain
    {
        id: "red-lodge",
        title: "Ticket and Product Lead",
        company: "Red Lodge Mountain",
        startDate: "2023-12",
        color: "bg-gray-500",
        description: "Developed and maintained internal software systems.",
        technologies: ["SQL"],
        url: "https://www.redlodgemountain.com/"
    },
    // Simplikeys
    {
        id: "simplikeys",
        title: "Frontend Engineer",
        company: "Simplikeys",
        startDate: "2023-08",
        color: "bg-red-400",
        description: "Worked on UI components and front-end architecture.",
        technologies: ["Next.js", "React", "TypeScript", "Figma"],
        url: "https://www.simplikeys.com/"
    },
    // Pennrose
    {
        id: "pennrose",
        title: "Intern",
        company: "Pennrose",
        startDate: "2020-07",
        endDate: "2020-12",
        color: "bg-red-400",
        description: "Worked in the asset management department",
        technologies: ["Microsoft Excel", "Microsoft Word"],
        url: "https://www.pennrose.com/"
    }
];