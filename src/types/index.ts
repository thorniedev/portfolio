export interface Project {
  id: number | string;
  projectName: string;
  projectDesc: string;
  tags: string[];
  code?: string;
  demo?: string;
  image?: string;
}

export interface BlogPost {
  id: number | string;
  title: string;
  description: string;
  published_at?: string;
  date?: string;
  cover_image?: string;
  image?: string;
  canonical_url?: string;
  url?: string;
  tag_list?: string[];
  tags?: string[];
  reading_time_minutes?: number;
  positive_reactions_count?: number;
  comments_count?: number;
}

export interface ExperienceItem {
  id: number | string;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
  description?: string;
}

export interface EducationItem {
  id: number | string;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}

export interface ContactsData {
  email: string;
  phone: string;
  address: string;
  github: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  medium: string;
  stackOverflow: string;
  devUsername: string;
  githubUsername?: string;
}

export interface SocialsData {
  github?: string;
  facebook?: string;
  linkedIn?: string;
  twitter?: string;
  medium?: string;
  stackOverflow?: string;
  mail?: string;
}

export interface HeaderData {
  name: string;
  title: string;
  description: string;
  image: string;
  imagebw?: string;
  resumePdf?: string;
  roles: string[];
}

export interface AboutData {
  title: string;
  description1: string;
  description2: string;
}
