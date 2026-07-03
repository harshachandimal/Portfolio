export type Accent = "emerald" | "cyan" | "violet";

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  accent: Accent;
  visual: "codemind" | "demandflow" | "fifa" | "autofix";
  highlights: string[];
  links?: {
    live?: string;
    github?: string;
  };
  featured: boolean;
}

export interface SkillGroup {
  category: string;
  accent: Accent;
  skills: string[];
}

export interface ExperienceItem {
  period: string;
  title: string;
  organization: string;
  description: string;
  tags: string[];
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "mail" | "twitter";
}