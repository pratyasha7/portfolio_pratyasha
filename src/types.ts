export interface Project {
  id: string;
  title: string;
  category: 'Systems/Backend' | 'AI/ML';
  description: string;
  bullets: string[];
  technologies: string[];
  githubUrl?: string;
  gitlabUrl?: string;
  demoUrl?: string;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  bullets: string[];
  linkedinUrl?: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
}

export interface CertificationItem {
  name: string;
  provider: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  metric?: string;
  iconName: string;
}
