import React from 'react';
import { SkillCategory } from './SkillCategory';
import { skillsData } from './skillsData';

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
}