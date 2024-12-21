import React from 'react';
import { GradientText } from '../common/GradientText';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, children, className = '' }: SectionProps) {
  return (
    <section id={id} className={`py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          <GradientText>{title}</GradientText>
        </h2>
        {children}
      </div>
    </section>
  );
}