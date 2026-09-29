'use client';

import React from 'react';
import { clsx } from 'clsx';

export interface StatCardProps {
  value: string;
  label: string;
  subtext?: string;
  icon?: React.ReactNode;
  highlight?: boolean;
}

export const StatCard: React.FC<StatCardProps> = ({
  value,
  label,
  subtext,
  icon,
  highlight = false,
}) => {
  return (
    <div
      className={clsx(
        'p-6 rounded-2xl border transition-all duration-300 text-center relative flex flex-col items-center justify-center',
        highlight
          ? 'bg-gradient-to-b from-orange-50/80 to-white border-orange-200 shadow-pos-card'
          : 'bg-white border-slate-200/80 shadow-sm hover:shadow-md'
      )}
    >
      {icon && (
        <div className="w-12 h-12 rounded-2xl bg-orange-100/70 text-pos-orange flex items-center justify-center mb-3">
          {icon}
        </div>
      )}
      <div className="text-3xl lg:text-4xl font-black text-pos-navy tracking-tight">{value}</div>
      <div className="text-sm font-bold text-pos-text-primary mt-1">{label}</div>
      {subtext && <div className="text-xs text-pos-text-secondary mt-1">{subtext}</div>}
    </div>
  );
};
