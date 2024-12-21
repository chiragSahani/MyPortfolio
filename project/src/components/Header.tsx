import React from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 border-b border-gray-200 dark:border-gray-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Chirag
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>

            <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
            <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
            <div className="flex flex-col space-y-4 p-4">
              <a href="#about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
              <a href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
              <a href="#achievements" className="hover:text-blue-600 dark:hover:text-blue-400">Achievements</a>
              <a href="#skills" className="hover:text-blue-600 dark:hover:text-blue-400">Skills</a>
              <a href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}