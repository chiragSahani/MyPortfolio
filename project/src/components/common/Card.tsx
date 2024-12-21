import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return (
    <div className={`bg-gray-900 rounded-xl shadow-lg overflow-hidden border border-gray-800 ${className}`}>
      {children}
    </div>
  );
}