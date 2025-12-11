import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'dark';
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  className = '',
  id,
  background = 'white'
}) => {
  const bgClasses = {
    white: 'bg-white',
    light: 'bg-gray-50',
    dark: 'gradient-dark text-white'
  };

  return (
    <section id={id} className={`py-20 md:py-32 ${bgClasses[background]} ${className}`}>
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl">
        {children}
      </div>
    </section>
  );
};
