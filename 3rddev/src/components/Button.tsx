import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  href?: string;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  href,
  className = ''
}) => {
  const baseClasses = 'px-8 py-4 rounded-lg font-semibold transition-all duration-300 inline-block text-center';

  const variantClasses = {
    primary: 'gradient-primary text-white hover:scale-105 hover:glow-primary shadow-lg',
    secondary: 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};
