export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  category: 'wireless-ai' | 'signal-processing' | 'embedded-vlsi' | 'software-systems';
  image: string;
  technologies: string[];
  metrics: string[];
  architectureOverview: string;
  challengesSolved: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  year: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Internship' | 'Contract' | 'Open Source';
  summary: string;
  responsibilities: string[];
  technologies: string[];
  highlights: string[];
}

export interface SkillCategory {
  name: string;
  skills: {
    name: string;
    level: 'Expert' | 'Advanced' | 'Proficient';
    experienceYears: string;
    iconName?: string;
    description: string;
  }[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  score?: string;
  location: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  credentialId?: string;
  url?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  linkedinUrl: string;
  githubUrl: string;
  bio: string;
  keyStats: {
    label: string;
    value: string;
    sublabel: string;
  }[];
  experiences: Experience[];
  projects: Project[];
  skillCategories: SkillCategory[];
  education: Education[];
  certifications: Certification[];
}
