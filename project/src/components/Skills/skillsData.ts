import type { SkillCategory } from './types';

export const skillsData: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "Java", level: 80 },
      { name: "C++", level: 75 },
      { name: "C", level: 75 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "VS Code" },
      { name: "Eclipse" },
      { name: "Google Cloud Platform" },
      { name: "Git" },
      { name: "Docker" }
    ]
  },
  {
    title: "Technologies & Frameworks",
    skills: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "Data Structures" },
      { name: "OOPs" },
      { name: "Linux" }
    ]
  },
  {
    title: "AI & Design Tools",
    skills: [
      { name: "GenAI" },
      { name: "PowerBI" },
      { name: "Figma" },
      { name: "AI/ML" },
      { name: "TensorFlow" },
      { name: "PyTorch" }
    ]
  }
];