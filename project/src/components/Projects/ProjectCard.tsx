import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card } from '../common/Card';
import type { Project } from './types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="hover:transform hover:scale-105 transition-transform duration-300">
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-100">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
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
    </Card>
  );
}