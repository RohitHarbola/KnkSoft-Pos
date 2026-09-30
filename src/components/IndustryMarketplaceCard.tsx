'use client';

import React from 'react';
import Link from 'next/link';
import { motion, type Variants } from 'framer-motion';
import { LucideIcon, ArrowRight, Check } from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export interface IndustryMarketplaceItem {
  id: string;
  name: string;
  desc: string;
  painPoint?: string;
  solution?: string;
  features?: string[];
  badge?: string;
  icon: LucideIcon;
  href?: string;
}

interface IndustryMarketplaceCardProps {
  item: IndustryMarketplaceItem;
  variants?: Variants;
  custom?: number;
}

export const IndustryMarketplaceCard: React.FC<IndustryMarketplaceCardProps> = ({
  item,
  variants,
  custom = 0,
}) => {
  const { openDemoModal } = useDemoModal();
  const Icon = item.icon;

  return (
    <motion.div
      variants={variants}
      custom={custom}
      className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-0.5 h-full"
    >
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-3">
          <div className="p-2 sm:p-2.5 bg-orange-500/10 rounded-lg sm:rounded-xl text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors duration-300">
            <Icon className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
          </div>
          {item.badge && (
            <span className="text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-[#f9f5f3] text-[#565352] border border-[#e8e2de]">
              {item.badge}
            </span>
          )}
        </div>

        {/* Content Body */}
        <div>
          <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1.5 group-hover:text-[#FF8C00] transition-colors line-clamp-1">
            {item.name}
          </h3>
          <p className="text-slate-600 text-xs leading-relaxed mb-2.5 font-normal line-clamp-2">
            {item.desc || item.solution}
          </p>

          {/* Solves Bottleneck Callout */}
          {item.painPoint && (
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 mb-2.5 text-[11px] text-slate-600">
              <strong className="text-slate-900 block font-semibold mb-0.5 text-[11px]">Solves bottleneck:</strong>
              <span className="line-clamp-2">{item.painPoint}</span>
            </div>
          )}

          {/* Key Features Bullet List */}
          {item.features && item.features.length > 0 && (
            <div className="space-y-1 mb-3">
              {item.features.slice(0, 3).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-[11px] font-medium text-slate-700">
                  <Check className="w-3 h-3 text-[#FF8C00] flex-shrink-0" />
                  <span className="line-clamp-1">{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between mt-auto">
        {item.href ? (
          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-slate-800 hover:text-[#FF8C00] transition-colors"
          >
            View Features <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={() => openDemoModal(item.name)}
          className="text-xs sm:text-sm font-bold text-[#FF8C00] hover:text-[#DE3700] transition-colors cursor-pointer px-1.5 py-0.5"
        >
          Free Demo
        </button>
      </div>
    </motion.div>
  );
};
