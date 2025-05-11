
import React from 'react';

interface LogoProps {
  size?: number;
  showBackground?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 40, showBackground = true }) => {
  return (
    <div 
      className={`rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden ${
        showBackground ? 'bg-gradient-primary' : ''
      }`}
      style={{ width: size, height: size }}
    >
      <svg 
        width={size * 0.7} 
        height={size * 0.7} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Token shape */}
        <circle cx="50" cy="50" r="40" fill="white" />
        <path 
          d="M50 10C28.95 10 12 26.95 12 48C12 69.05 28.95 86 50 86C71.05 86 88 69.05 88 48C88 26.95 71.05 10 50 10ZM50 78C33.43 78 20 64.57 20 48C20 31.43 33.43 18 50 18C66.57 18 80 31.43 80 48C80 64.57 66.57 78 50 78Z" 
          fill="#4C1D95" 
        />
        {/* C letter for cToken */}
        <path 
          d="M60 36H42C38.69 36 36 38.69 36 42V54C36 57.31 38.69 60 42 60H60" 
          stroke="#2563EB" 
          strokeWidth="8" 
          strokeLinecap="round" 
        />
        {/* ZK hint */}
        <path 
          d="M44 68L56 68M44 68L56 54M44 68L56 54M56 68L44 54"
          stroke="#4C1D95" 
          strokeWidth="4" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      </svg>
    </div>
  );
};

export default Logo;
