export interface ContactInfo {
  phone: string;
  email: string;
  address: string;
  linkedIn: string;
  telegram?: string;
}

export interface ExperienceDutySection {
  title: string;
  duties: string[];
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  badge?: string;
  type?: string;
  location?: string;
  sections?: ExperienceDutySection[];
  highlights?: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location?: string;
  details?: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  badge: string;
  topics?: string[];
  description?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level?: number; // 1-100
    tag?: string;
  }[];
}

export interface ReferenceItem {
  name: string;
  role: string;
  company: string;
  phone: string;
  relation: string;
}

export interface MetricItem {
  label: string;
  value: string;
  description: string;
  icon: string;
  trend?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  headline: string;
  bio: string;
  contact: ContactInfo;
  metrics: MetricItem[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  skills: SkillCategory[];
  languages: { name: string; proficiency: string; level: number }[];
  references: ReferenceItem[];
}

