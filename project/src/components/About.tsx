import React from 'react';
import { Award, Code, Briefcase, GraduationCap } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Goal-oriented and passionate Software Developer with expertise in MERN stack, Python, and JavaScript. 
              A gold medalist in Computer Science Engineering at Chandigarh Group of Colleges with a proven track record of 
              building innovative projects and achieving excellence in academic and technical challenges.
            </p>
            
            <div className="space-y-4">
              {[
                { 
                  icon: GraduationCap, 
                  title: "Education",
                  text: "B.Tech in Computer Science Engineering (8.7 CGPA)" 
                },
                { 
                  icon: Briefcase, 
                  title: "Experience",
                  text: "Technical Content Developer at upGrad" 
                },
                { 
                  icon: Award, 
                  title: "Achievements",
                  text: "Gold Medalist in CSE, Silver Medalist in Skill India" 
                },
                { 
                  icon: Code, 
                  title: "Skills",
                  text: "MERN Stack, Python, AI/ML, GenAI" 
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="p-2 bg-gray-800 rounded-lg">
                    <item.icon size={20} className="text-gray-300" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-200">{item.title}</h3>
                    <span className="text-gray-400">{item.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Tech workspace"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg opacity-20 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}