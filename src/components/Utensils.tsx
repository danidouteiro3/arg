import React from 'react';

interface UtensilsProps {
  className?: string;
}

export default function Utensils({ className = "h-4 w-4" }: UtensilsProps) {
  return (
    <svg 
      className={className}
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24"
    >
      <path 
        strokeLinecap="round" 
        strokeLinejoin="round" 
        strokeWidth={2} 
        d="M3 3v18h18V3M8 8h8M8 12h8M8 16h8" 
      />
    </svg>
  );
}