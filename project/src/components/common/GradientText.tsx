import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function GradientText({ children, className = '' }: GradientTextProps) {
  return (
    <span className={`bg-gradient-to-r from-gray-100 to-gray-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}