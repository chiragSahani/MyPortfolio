import React from 'react';
import { Section } from '../layout/Section';
import { ProjectCard } from './ProjectCard';
import { projects } from './projectsData';

export function Projects() {
  return (
    <Section id="projects" title="Featured Projects" className="bg-black">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </Section>
  );
}