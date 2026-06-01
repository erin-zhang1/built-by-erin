import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg?: string;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

const emptyProject = (id: string): ProjectInterface => ({
  id,
  companyName: "",
  type: "Personal",
  category: [],
  shortDescription: "",
  techStack: [],
  startDate: new Date(),
  endDate: new Date(),
  descriptionDetails: {
    paragraphs: [],
    bullets: [],
  },
  pagesInfoArr: [],
});

export const Projects: ProjectInterface[] = [
  emptyProject("project-1"),
  emptyProject("project-2"),
  emptyProject("project-3"),
];

export const featuredProjects = Projects.slice(0, 3);
