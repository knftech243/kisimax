import React from 'react';

export default function Logo({ dark = false, className = '' }) {
  return (
    <a href="#top" className={`flex items-center gap-2.5 group transition-transform duration-200 hover:scale-[1.02] ${className}`}>
      {/* Kisimax SVG Mark */}
      <svg className="w-[34px] h-[34px] flex-shrink-0" viewBox="0 0 40 40" fill="none">
        <rect x="4" y="3" width="9" height="34" rx="2" fill="#1E9E4A" />
        <path d="M15 20L29 3H38L24 20L38 37H29L15 20Z" fill="#1E9E4A" />
        <path d="M15 20L29 3H34L20 20Z" fill="#15803D" opacity="0.9" />
      </svg>
      <div className="flex flex-col">
        <span className={`text-[22px] font-extrabold leading-none tracking-[-0.5px] ${dark ? 'text-white' : 'text-brand-ink'}`}>
          Kisimax
        </span>
        <span className={`text-[10px] font-medium mt-1 tracking-tight ${dark ? 'text-gray-400' : 'text-brand-muted'}`}>
          Votre boutique, en mieux
        </span>
      </div>
    </a>
  );
}
