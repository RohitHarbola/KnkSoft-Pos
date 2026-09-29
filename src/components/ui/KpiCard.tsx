'use client';

import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface KpiCardProps {
  label: string;
  value: string;
  trend?: string;
  trendUp?: boolean;
  icon?: React.ReactNode;
  variant?: 'orange' | 'navy' | 'teal' | 'white';
  sublabel?: string;
  className?: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  label,
  value,
  trend,
  trendUp = true,
  icon,
  variant = 'white',
  sublabel,
  className = '',
}) => {
  const variantStyles = {
    white: 'bg-white/95 text-slate-900 border border-slate-200/80 shadow-pos-elevated backdrop-blur-md',
    orange: 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-orange-500/25 border-orange-400',
    navy: 'bg-gradient-to-br from-slate-900 to-pos-navy text-white shadow-slate-900/30 border-slate-700',
    teal: 'bg-gradient-to-br from-teal-600 to-teal-700 text-white shadow-teal-600/25 border-teal-500',
  };

  const isDark = variant !== 'white';

  return (
    <div className={clsx('rounded-2xl p-4 transition-all duration-300', variantStyles[variant], className)}>
      <div className="flex items-center justify-between gap-3 mb-2">
        <div className="flex items-center gap-2.5">
          {icon && (
            <div
              className={clsx(
                'w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm',
                isDark ? 'bg-white/20 text-white' : 'bg-orange-50 text-pos-orange border border-orange-100'
              )}
            >
              {icon}
            </div>
          )}
          <span className={clsx('text-xs font-semibold uppercase tracking-wider', isDark ? 'text-white/80' : 'text-pos-text-secondary')}>
            {label}
          </span>
        </div>

        {trend && (
          <span
            className={clsx(
              'inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full gap-0.5',
              isDark
                ? 'bg-white/20 text-white'
                : trendUp
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-rose-50 text-rose-700 border border-rose-200'
            )}
          >
            {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {trend}
          </span>
        )}
      </div>

      <div className="mt-1">
        <div className={clsx('text-2xl font-black tracking-tight', isDark ? 'text-white' : 'text-pos-text-primary')}>
          {value}
        </div>
        {sublabel && (
          <div className={clsx('text-xs mt-0.5', isDark ? 'text-white/70' : 'text-pos-text-muted')}>
            {sublabel}
          </div>
        )}
      </div>
    </div>
  );
};
