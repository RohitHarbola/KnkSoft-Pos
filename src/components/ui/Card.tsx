'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'orange' | 'navy' | 'teal' | 'red' | 'glass';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  hoverEffect?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  hoverEffect = false,
  className,
  ...props
}) => {
  const baseStyles = 'rounded-2xl transition-all duration-300 relative overflow-hidden';

  const variantStyles = {
    default: 'bg-pos-surface border border-pos-border text-pos-text-primary shadow-pos-card',
    elevated: 'bg-pos-surface border border-slate-200/80 text-pos-text-primary shadow-pos-elevated',
    orange: 'bg-pos-orange-light border border-orange-200/70 text-slate-900',
    navy: 'bg-pos-navy border border-slate-700 text-white shadow-xl',
    teal: 'bg-pos-teal-light border border-teal-200/70 text-slate-900',
    red: 'bg-pos-red-light border border-red-200/70 text-slate-900',
    glass: 'pos-glass text-pos-text-primary shadow-pos-elevated',
  };

  const paddingStyles = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
    xl: 'p-10',
  };

  const hoverStyles = hoverEffect
    ? 'hover:-translate-y-1 hover:shadow-xl hover:border-pos-orange/40 cursor-pointer'
    : '';

  return (
    <div
      className={twMerge(clsx(baseStyles, variantStyles[variant], paddingStyles[padding], hoverStyles, className))}
      {...props}
    >
      {children}
    </div>
  );
};
