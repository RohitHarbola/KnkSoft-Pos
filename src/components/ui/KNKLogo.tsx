'use client';

import React from 'react';
import Image from 'next/image';

interface KNKLogoProps {
  variant?: 'light' | 'dark' | 'white';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  showTagline?: boolean;
}

export const KNKLogo: React.FC<KNKLogoProps> = ({
  variant = 'dark',
  size = 'md',
  className = '',
  showTagline = true,
}) => {
  const isLight = variant === 'light' || variant === 'white';

  // Sizing definitions for the knksoftlogo.svg (aspect ratio ~ 3.96:1)
  const dimensions = {
    sm: { height: 26, width: 103, posText: 'text-base font-black' },
    md: { height: 34, width: 135, posText: 'text-xl font-black' },
    lg: { height: 42, width: 166, posText: 'text-2xl font-black' },
    xl: { height: 52, width: 206, posText: 'text-3xl font-black' },
  };

  const dim = dimensions[size] || dimensions.md;

  return (
    <div
      className={`inline-flex items-center gap-1.5 select-none group transition-transform duration-200 hover:opacity-95 ${className}`}
    >
      {/* KNKSOFT Logo SVG from public folder */}
      <div
        className={`relative inline-flex items-center justify-center ${
          isLight
            ? 'bg-white/95 px-2.5 py-1 rounded-xl shadow-sm border border-white/20 transition-colors group-hover:bg-white'
            : 'px-0.5'
        }`}
      >
        <Image
          src="/knksoftlogo.svg"
          alt="KNK:SOFT"
          width={dim.width}
          height={dim.height}
          className="object-contain h-auto"
          style={{ height: `${dim.height}px`, width: 'auto' }}
          priority
        />
      </div>

      {/* -POS Brand Indicator */}
      <div className="flex items-center leading-none">
        <span
          className={`tracking-tight leading-none ${dim.posText} flex items-center ${
            isLight ? 'text-white' : 'text-slate-900'
          }`}
        >
        </span>
      </div>
    </div>
  );
};
