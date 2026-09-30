'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Star,
  Check,
  AlertTriangle,
  MessageCircle,
  Zap,
  Printer,
} from 'lucide-react';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { useDemoModal } from '@/context/DemoModalContext';
import './IndustryPageTemplate.css';

export interface IndustryPageProps {
  industryName: string;
  badge: string;
  headline: string;
  subheadline: string;
  overview: string;
  painPoints: { problem: string; solution: string }[];
  keyFeatures: { title: string; desc: string; icon?: React.ReactNode }[];
  caseStudy: {
    brandName: string;
    owner: string;
    city: string;
    metric: string;
    quote: string;
  };
  recommendedHardware: { name: string; desc: string; price: string }[];
  faqs: AccordionItem[];
}

export const IndustryPageTemplate: React.FC<IndustryPageProps> = ({
  industryName,
  badge,
  headline,
  subheadline,
  overview,
  painPoints,
  keyFeatures,
  caseStudy,
  recommendedHardware,
  faqs,
}) => {
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="industry-template-section border-b border-slate-100">
        <div className="industry-template-inner">
          {/* LEFT COLUMN */}
          <div className="min-w-0 text-left">
            <nav className="industry-template-breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/industries">Industries</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="industry-template-breadcrumb-active">{industryName}</span>
            </nav>

            <div className="industry-template-pill">
              <span className="industry-template-pill-dot" />
              <Sparkles className="w-3 h-3 inline mr-1" />
              {badge}
            </div>

            <h1 className="industry-template-headline">
              {headline.split(' ').slice(0, 3).join(' ')}{' '}
              <span className="industry-template-accent">
                {headline.split(' ').slice(3).join(' ')}
              </span>
            </h1>

            <p className="industry-template-subtitle">
              {subheadline}
            </p>

            <p className="industry-template-description">
              {overview}
            </p>

            <div className="industry-template-cta-group">
              <button
                type="button"
                onClick={() => openDemoModal(industryName)}
                className="industry-template-cta-primary"
              >
                <span>Book Free {industryName} Demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/919891578609?text=Hi%20KNK%20POS%20team%2C%20I%20want%20to%20know%20more%20about%20your%20POS%20for%20my%20business"
                target="_blank"
                rel="noreferrer"
                className="industry-template-cta-secondary"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FF4C00]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3 text-[11px] font-semibold text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Offline Capable
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF4C00]" /> Pre-Configured GST
              </span>
              <span>•</span>
              <span>Free Data Import</span>
            </div>
          </div>

          {/* RIGHT COLUMN: LIGHT COMPACT TERMINAL PREVIEW */}
          <div className="relative">
            <div className="bg-white rounded-2xl border border-slate-200 p-4 sm:p-5 text-slate-900 shadow-sm space-y-3">
              <div className="flex items-center justify-between pb-2.5 border-b border-slate-100 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span className="w-2 h-2 rounded-full bg-amber-500" />
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-bold text-slate-800 ml-1.5 text-xs">{industryName} Terminal</span>
                </div>
                <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                  ● PRODUCTION
                </span>
              </div>

              <div className="space-y-2.5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-[#FF4C00] font-bold uppercase tracking-wider">
                    Custom Workflow Configuration
                  </div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">
                    Tailored for {industryName}
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    Category tax structures, rapid billing screens, multi-counter tokens, and regional language receipts.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-[9.5px] text-slate-400 uppercase font-semibold">Speed Per Bill</div>
                    <div className="text-emerald-700 font-bold text-xs mt-0.5">1.2 - 2.0 Seconds</div>
                  </div>
                  <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                    <div className="text-[9.5px] text-slate-400 uppercase font-semibold">Verified Impact</div>
                    <div className="text-[#FF4C00] font-bold text-xs mt-0.5">{caseStudy.metric}</div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => openDemoModal(industryName)}
                  className="w-full py-2 rounded-lg bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors flex items-center justify-center gap-1 shadow-xs"
                >
                  <span>Book Free 1-on-1 Walkthrough</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM VS SOLUTION STORYTELLING ROWS (No Box Cards, Compact Spacing) */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
              <Sparkles className="w-3 h-3" /> Optimization
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              Everyday Bottlenecks Solved in {industryName}
            </h2>
            <p className="text-xs text-slate-500">
              Replace counter friction with automated, reliable POS operations.
            </p>
          </div>

          <div className="space-y-2 divide-y divide-slate-100">
            {painPoints.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`industry-story-row ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Left Story Text */}
                  <div className="space-y-2 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 text-[10px] font-bold uppercase border border-rose-200">
                      <AlertTriangle className="w-3 h-3" /> Challenge {idx + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {item.problem}
                    </h3>
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 space-y-0.5">
                      <div className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider flex items-center gap-1">
                        <Check className="w-3.5 h-3.5 text-emerald-600" /> KNK POS Solution:
                      </div>
                      <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                        {item.solution}
                      </p>
                    </div>
                  </div>

                  {/* Right Module Visual */}
                  <div className="industry-story-visual-panel">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="text-emerald-700 font-bold flex items-center gap-1 text-xs">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Resolved by KNK POS
                      </span>
                      <span className="text-slate-400 font-mono text-[10px]">Auto Sync</span>
                    </div>
                    <div className="py-2.5 space-y-2 text-xs text-slate-600 leading-relaxed">
                      {item.solution}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VERIFIED MERCHANT SPOTLIGHT STRIP (Clean White Theme) */}
      <section className="py-8 bg-slate-50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#FF4C00] text-white flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-sm">
              {caseStudy.brandName[0]}
            </div>

            <div className="space-y-1.5 flex-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[10.5px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  Verified {industryName} Merchant
                </span>
              </div>

              <div className="text-base sm:text-lg font-bold text-slate-900">
                &ldquo;{caseStudy.metric}&rdquo;
              </div>

              <p className="text-xs sm:text-sm text-slate-600 italic leading-relaxed">
                &ldquo;{caseStudy.quote}&rdquo;
              </p>

              <div className="text-xs text-slate-500 pt-0.5">
                <span className="font-bold text-slate-800">{caseStudy.owner}</span> • {caseStudy.brandName}, {caseStudy.city}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. HARDWARE COMPATIBILITY MATRIX (Clean White Table) */}
      {recommendedHardware && recommendedHardware.length > 0 && (
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-6 space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Tested Hardware for {industryName}
              </h2>
              <p className="text-xs text-slate-500">
                Plug-and-play accessories pre-tested for {industryName} by KNK:SOFT engineers.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3 sm:p-3.5">Hardware Model</th>
                    <th className="p-3 sm:p-3.5">Compatibility &amp; Purpose</th>
                    <th className="p-3 sm:p-3.5 text-right bg-orange-50/50 text-[#FF4C00]">Starting Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {recommendedHardware.map((hw, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900 flex items-center gap-1.5">
                        <Printer className="w-3.5 h-3.5 text-[#FF4C00]" /> {hw.name}
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-600">{hw.desc}</td>
                      <td className="p-3 sm:p-3.5 font-bold text-[#FF4C00] text-right font-mono">{hw.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQS */}
      {faqs && faqs.length > 0 && (
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Frequently Asked Questions: {industryName}
              </h2>
              <p className="text-xs text-slate-500">
                Migration and onboarding details.
              </p>
            </div>
            <Accordion items={faqs} defaultOpenIndex={0} />
          </div>
        </section>
      )}

      {/* 6. BOTTOM CTA (Clean White Background) */}
      <section className="py-10 bg-white border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Ready to Upgrade Your <span className="text-[#FF4C00]">{industryName}</span> Operations?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Book a free 1-on-1 demo today with KNK:SOFT INFOTECH and get 14 days full trial with complimentary data import.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => openDemoModal(industryName)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Book Free 1-on-1 Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryPageTemplate;
