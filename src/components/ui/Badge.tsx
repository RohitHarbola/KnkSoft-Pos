'use client';

import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'orange' | 'navy' | 'teal';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  icon,
  className,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-medium rounded-full transition-colors';

  const variantStyles = {
    success: 'bg-pos-teal-light text-pos-teal border border-teal-200/80',
    teal: 'bg-pos-teal-light text-pos-teal border border-teal-200/80',
    warning: 'bg-amber-50 text-amber-800 border border-amber-200',
    danger: 'bg-pos-red-light text-pos-red border border-red-200',
    info: 'bg-pos-navy-light text-pos-navy border border-blue-200/70',
    neutral: 'bg-slate-100 text-pos-text-secondary border border-slate-200',
    orange: 'bg-pos-orange-light text-pos-orange border border-orange-200/80',
    navy: 'bg-pos-navy text-white border border-pos-navy',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5 gap-1',
    md: 'text-xs px-3 py-1 gap-1.5 font-semibold',
    lg: 'text-sm px-3.5 py-1.5 gap-2 font-semibold',
  };

  return (
    <span
      className={twMerge(clsx(baseStyles, variantStyles[variant], sizeStyles[size], className))}
      {...props}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </span>
  );
};
