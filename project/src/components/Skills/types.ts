export interface SkillItem {
  name: string;
  level?: number;
}

export interface SkillCategory {
  title: string;
  skills: SkillItem[];
}