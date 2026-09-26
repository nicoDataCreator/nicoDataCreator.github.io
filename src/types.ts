export interface JobExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  summary: string;
  achievements: string[];
  skills: string[];
  methodology?: {
    headline: string;
    points: string[];
  };
}

export interface RugbyMilestone {
  title: string;
  period: string;
  teams: string;
  countries: string;
  description: string;
  takeaways: {
    title: string;
    description: string;
  }[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  problem: string;
  solution: string;
  architecture: string[];
  stack: string[];
  images: {
    url: string;
    caption: string;
    aspect?: string;
  }[];
  interactiveType?: 'simulation' | 'calculator' | 'data' | 'map' | 'code';
}

export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  location: string;
  year: string;
  description: string;
  credlyBadgeId?: string;
  highlights: string[];
}

export interface CuriosityItem {
  iconName: string;
  title: string;
  category: string;
  description: string;
  detail: string;
}
