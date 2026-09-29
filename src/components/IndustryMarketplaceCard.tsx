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
      className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
    >
      <div>
        {/* Top Header: Icon & Badge */}
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 bg-orange-500/10 rounded-xl text-[#FF8C00] group-hover:bg-[#FF8C00] group-hover:text-white transition-colors duration-300">
            <Icon className="w-6 h-6" />
          </div>
          {item.badge && (
            <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f9f5f3] text-[#565352] border border-[#e8e2de]">
              {item.badge}
            </span>
          )}
        </div>

        {/* Content Body */}
        <div>
          <h3 className="text-lg xl:text-xl font-bold text-slate-900 mb-2 group-hover:text-[#FF8C00] transition-colors">
            {item.name}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed mb-3 font-normal">
            {item.desc || item.solution}
          </p>

          {/* Solves Bottleneck Callout */}
          {item.painPoint && (
            <div className="bg-slate-50 border border-slate-100 rounded-lg p-2.5 mb-3 text-xs text-slate-600">
              <strong className="text-slate-900 block font-semibold mb-0.5">Solves bottleneck:</strong>
              {item.painPoint}
            </div>
          )}

          {/* Key Features Bullet List */}
          {item.features && item.features.length > 0 && (
            <div className="space-y-1.5 mb-4">
              {item.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                  <Check className="w-3.5 h-3.5 text-[#FF8C00] flex-shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Bottom Actions */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-2">
        {item.href ? (
          <Link
            href={item.href}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-800 hover:text-[#FF8C00] transition-colors"
          >
            View Features <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <span />
        )}
        <button
          type="button"
          onClick={() => openDemoModal(item.name)}
          className="text-xs font-bold text-[#FF8C00] hover:text-[#FF8C00] transition-colors cursor-pointer"
        >
          Free Demo
        </button>
      </div>
    </motion.div>
  );
};
