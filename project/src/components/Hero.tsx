import React from 'react';
import { Github, Linkedin, Mail, FileDown } from 'lucide-react';
import { TypedText } from './TypedText';

export function Hero() {
  const roles = [
    'Innovation Practitioner',
    'Software Developer',
    'GenAI Enthusiast',
    'Gold Medalist in CSE'
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black to-gray-900 dark:from-black dark:to-gray-900">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent">
            Chirag Sahani
          </h1>
          <div className="h-16">
            <TypedText 
              strings={roles}
              className="text-xl md:text-2xl text-gray-400"
            />
          </div>
          <div className="flex justify-center space-x-4 mb-8">
            <a href="tel:+919528299664" className="text-gray-400 hover:text-gray-300">
              +91 9528299664
            </a>
            <span className="text-gray-600">|</span>
            <a href="mailto:chiragsahani093@gmail.com" className="text-gray-400 hover:text-gray-300">
              chiragsahani093@gmail.com
            </a>
          </div>
          <div className="flex justify-center space-x-4 mb-12">
            <a href="https://github.com/chiragSahani" target="_blank" rel="noopener noreferrer" 
               className="p-2 rounded-full border border-gray-700 hover:border-gray-300 hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/chiragsahani" target="_blank" rel="noopener noreferrer"
               className="p-2 rounded-full border border-gray-700 hover:border-gray-300 hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:chiragsahani093@gmail.com"
               className="p-2 rounded-full border border-gray-700 hover:border-gray-300 hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
          <div className="flex justify-center space-x-4">
            <a href="#projects" 
               className="px-8 py-3 text-lg font-medium text-white bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-800 border border-gray-700 rounded-full transition-all">
              Explore My Work
            </a>
            <a href="https://res.cloudinary.com/dlyctssmy/image/upload/v1734763895/chirag_cse5_bzigwi.pdf" 
               download
               className="px-8 py-3 text-lg font-medium text-white flex items-center space-x-2 border border-gray-700 rounded-full hover:bg-gray-800 transition-all">
              <FileDown size={20} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}