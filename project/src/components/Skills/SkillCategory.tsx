import React from 'react';
import type { SkillItem } from './types';

interface SkillCategoryProps {
  title: string;
  skills: SkillItem[];
}

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
      <h3 className="text-xl font-semibold text-gray-100 mb-4">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 text-gray-300 bg-gray-800 rounded-lg p-2"
          >
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-400 to-gray-300"></div>
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}