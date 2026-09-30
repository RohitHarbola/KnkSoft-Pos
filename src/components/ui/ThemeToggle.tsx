'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', size = 'md' }) => {
  const { isDark, toggleTheme } = useTheme();

  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-10 h-10 text-base',
  };

  const iconSizes = {
    sm: 'w-3.5 h-3.5',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      className={`inline-flex items-center justify-center rounded-full border transition-all duration-200 cursor-pointer shadow-xs active:scale-95 ${
        isDark
          ? 'bg-slate-800 border-slate-700 text-amber-400 hover:text-amber-300 hover:border-slate-600 hover:bg-slate-700'
          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-[#FF4C00] hover:border-orange-200 hover:bg-orange-50/40'
      } ${sizeClasses[size]} ${className}`}
    >
      {isDark ? (
        <Sun className={`${iconSizes[size]} transition-transform duration-200 rotate-0`} />
      ) : (
        <Moon className={`${iconSizes[size]} transition-transform duration-200 rotate-0 text-slate-700`} />
      )}
    </button>
  );
};
