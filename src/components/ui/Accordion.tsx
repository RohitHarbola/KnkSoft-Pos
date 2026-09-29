'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface AccordionItem {
  id?: string;
  question: string;
  answer: string | React.ReactNode;
  category?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  defaultOpenIndex?: number;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIndex = 0,
}) => {
  const [openIndices, setOpenIndices] = useState<number[]>(
    defaultOpenIndex !== undefined ? [defaultOpenIndex] : []
  );

  const toggleItem = (index: number) => {
    if (allowMultiple) {
      if (openIndices.includes(index)) {
        setOpenIndices(openIndices.filter((i) => i !== index));
      } else {
        setOpenIndices([...openIndices, index]);
      }
    } else {
      setOpenIndices(openIndices.includes(index) ? [] : [index]);
    }
  };

  return (
    <div className="space-y-3.5 max-w-3xl mx-auto w-full">
      {items.map((item, index) => {
        const isOpen = openIndices.includes(index);
        return (
          <div
            key={item.id || index}
            className={clsx(
              'rounded-2xl border transition-all duration-200 overflow-hidden',
              isOpen
                ? 'bg-pos-orange-light/60 border-l-4 border-l-pos-orange border-y-orange-200/80 border-r-orange-200/80 shadow-sm'
                : 'bg-white border-slate-200 hover:border-slate-300'
            )}
          >
            <button
              type="button"
              onClick={() => toggleItem(index)}
              aria-expanded={isOpen}
              className="w-full px-6 py-4.5 text-left flex items-center justify-between gap-4 font-semibold text-pos-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-pos-orange"
            >
              <span className="text-base md:text-lg leading-snug">{item.question}</span>
              <div
                className={clsx(
                  'w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300',
                  isOpen ? 'bg-pos-orange text-white rotate-180' : 'bg-slate-100 text-pos-navy'
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div
              className={clsx(
                'grid transition-all duration-300 ease-in-out',
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              )}
            >
              <div className="overflow-hidden">
                <div className="px-6 pb-5 pt-1 text-sm md:text-base text-pos-text-secondary leading-relaxed border-t border-orange-100/50">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
