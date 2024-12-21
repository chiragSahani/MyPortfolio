import React from 'react';

const skills = [
  { name: "Python", level: 90, category: "Programming" },
  { name: "C++", level: 90, category: "Programming" },
  { name: "Java", level: 90, category: "Programming" },
  { name: "Data Structures and Algorithms", level: 90, category: "Programming" },
  { name: "JavaScript", level: 85, category: "Programming" },
  { name: "React", level: 80, category: "Frontend" },
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "GenAI", level: 85, category: "AI/ML" },
  { name: "PowerBI", level: 60, category: "Design" }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.category}</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <div 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2.5 rounded-full transition-all duration-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}