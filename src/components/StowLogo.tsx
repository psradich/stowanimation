import React from 'react';

export const StowLogo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`relative flex items-center justify-center bg-[#111625] rounded-full shadow-2xl ${className}`}>
      <svg viewBox="0 0 100 100" className="w-full h-full p-4" fill="none">
        <path
          d="M 75 25 L 35 25 C 25 25, 25 35, 25 45 C 25 55, 35 55, 45 55 L 65 55 C 75 55, 75 65, 75 75 C 75 85, 65 85, 55 85 L 25 85"
          stroke="white"
          strokeWidth="12"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="50" cy="55" r="9" fill="#14b8a6" />
      </svg>
    </div>
  );
};
