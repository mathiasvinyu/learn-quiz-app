import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className = '', hover = true }) => {
  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-xl transition-all duration-300'
    : '';

  return (
    <div className={`bg-white rounded-xl shadow-lg p-8 ${hoverClasses} ${className}`}>
      {children}
    </div>
  );
};
