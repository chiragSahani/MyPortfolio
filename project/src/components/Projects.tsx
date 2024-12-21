import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: "StrideAPI",
    description: "A robust API development project with advanced backend architecture, real-time processing, and performance optimization.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Ideation", "FastAPI", "LLM", "NLP","Innovation"],
    demo: "https://strideapi.wegic.app/page-1"
  },
  {
    title: "Stroke Prediction AI",
    description: "Machine learning model for early stroke prediction using advanced algorithms and healthcare data analysis with 95% accuracy.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    github: "https://github.com/chiragSahani/Heart_disease.git"
  },
  {
    title: "Netflix Clone",
    description: "Full-stack Netflix clone with modern UI/UX, real-time streaming, and personalized recommendations.",
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Html", "CSS", "Bootstrap", "Flex"],
    demo: "https://netchir95.ccbp.tech/"
  },
  {
    title: "NestTravels",
    description: "AI-powered travel planning platform with personalized itineraries and real-time booking integration.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Html", "CSS", "Java-Script", "Bootstrap"],
    github: "https://github.com/chiragSahani/Gogaga-Holidays.git",
    demo: "https://nesttravels99.ccbp.tech/"
  },
  {
    title: "AI Voicebot",
    description: "Advanced conversational AI system with natural language processing and voice recognition capabilities.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "TensorFlow", "NLP", "WebRTC"],
    github: "hhttps://github.com/chiragSahani/AI_Voice_Alexa.git"
  },
  {
    title: "Nxt Trendz",
    description: "Nxt Trends is a modern, responsive e-commerce application designed to provide users with a seamless online shopping experience. The platform is built with a robust backend and an intuitive frontend, ensuring performance, scalability, and user-friendliness",
  image:"https://res.cloudinary.com/dlyctssmy/image/upload/v1734764669/Screenshot_202_ocrd70.png",
    tags: ["React", "Jwt Authentication", "E-commerce"],
    github: "https://github.com/chiragSahani/ecommQuadB.git",
    demo: "https://chiragtech.ccbp.tech/"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:transform hover:scale-105 transition-transform duration-300 border border-gray-800">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 text-sm bg-gray-800 text-gray-300 rounded-full border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-gray-100"
                  >
                    <Github size={20} />
                    <span>Code</span>
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-100"
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}