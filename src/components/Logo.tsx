import React from 'react';

interface LogoProps {
  className?: string;
  light?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', light = false }) => {
  return (
    <a href="#home" className={`inline-flex items-center group focus:outline-none ${className}`}>
      <img
        src="/images/logo.png"
        alt="Vertex Cricket Academy"
        className={`h-14 sm:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105 ${
          light ? 'brightness-0 invert' : ''
        }`}
      />
    </a>
  );
};
