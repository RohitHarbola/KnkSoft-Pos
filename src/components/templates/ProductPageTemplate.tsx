'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  WifiOff,
  Zap,
  Check,
  X,
  MessageCircle,
} from 'lucide-react';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { useDemoModal } from '@/context/DemoModalContext';
import './ProductPageTemplate.css';

export interface ProductPageProps {
  title: string;
  badge: string;
  subtitle: string;
  description: string;
  breadcrumbs: { label: string; href?: string }[];
  keyHighlights: { title: string; desc: string; icon?: React.ReactNode }[];
  mockupContent?: React.ReactNode;
  comparisonFeatures: { feature: string; knkPos: string; traditional: string }[];
  faqs: AccordionItem[];
}

export const ProductPageTemplate: React.FC<ProductPageProps> = ({
  title,
  badge,
  subtitle,
  description,
  breadcrumbs,
  keyHighlights,
  mockupContent,
  comparisonFeatures,
  faqs,
}) => {
  const { openDemoModal } = useDemoModal();

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="product-template-section border-b border-slate-100">
        <div className="product-template-inner">
          {/* LEFT COLUMN */}
          <div className="min-w-0 text-left">
            <nav className="product-template-breadcrumb">
              <Link href="/">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/product">Product</Link>
              {breadcrumbs.map((b, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-slate-400" />
                  {b.href ? (
                    <Link href={b.href}>{b.label}</Link>
                  ) : (
                    <span className="product-template-breadcrumb-active">{b.label}</span>
                  )}
                </React.Fragment>
              ))}
            </nav>

            <div className="product-template-pill">
              <span className="product-template-pill-dot" />
              <Sparkles className="w-3 h-3 inline mr-1" />
              {badge}
            </div>

            <h1 className="product-template-headline">
              {title.split(' ')[0]}{' '}
              <span className="product-template-accent">
                {title.split(' ').slice(1).join(' ')}
              </span>
            </h1>

            <p className="product-template-subtitle">
              {subtitle}
            </p>

            <p className="product-template-description">
              {description}
            </p>

            <div className="product-template-cta-group">
              <button
                type="button"
                onClick={() => openDemoModal(title)}
                className="product-template-cta-primary"
              >
                <span>Take a free demo</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/919891578609?text=Hi%20KNK%20POS%20team%2C%20I%20want%20to%20know%20more%20about%20your%20POS"
                target="_blank"
                rel="noreferrer"
                className="product-template-cta-secondary"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#FF4C00]" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-3 text-[11px] font-semibold text-slate-500">
              <span className="flex items-center gap-1 text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" /> 100% Offline Capable
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600">
                <ShieldCheck className="w-3.5 h-3.5 text-[#FF4C00]" /> GST 2.0 &amp; E-Way Ready
              </span>
              <span>•</span>
              <span>14-Day Free Trial</span>
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
                  <span className="font-bold text-slate-800 ml-1.5 text-xs">{title}</span>
                </div>
                <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                  ● ACTIVE MODULE
                </span>
              </div>

              {mockupContent ? (
                mockupContent
              ) : (
                <div className="space-y-2.5">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div className="text-[10px] text-[#FF4C00] font-bold uppercase tracking-wider">
                      KNK:SOFT High-Speed Engine
                    </div>
                    <div className="text-sm font-bold text-slate-900 mt-0.5">
                      Sub-2s Counter Billing
                    </div>
                    <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                      Continuous local database processing with instant thermal print and zero network latency.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-[9.5px] text-slate-400 uppercase font-semibold">Offline Status</div>
                      <div className="text-emerald-700 font-bold text-xs mt-0.5">100% Operational</div>
                    </div>
                    <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                      <div className="text-[9.5px] text-slate-400 uppercase font-semibold">GST Compliance</div>
                      <div className="text-[#FF4C00] font-bold text-xs mt-0.5">Auto CGST + SGST</div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => openDemoModal(title)}
                    className="w-full py-2 rounded-lg bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors flex items-center justify-center gap-1 shadow-xs"
                  >
                    <span>Test In Free 1-on-1 Demo</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 2. STORYTELLING WALKTHROUGH ROWS (Clean White Theme, Compact Spacing) */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
              <Sparkles className="w-3 h-3" /> Features
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
              How {title} Powers Your Counter
            </h2>
            <p className="text-xs text-slate-500">
              Engineered to eliminate counter bottlenecks and maintain complete GST compliance.
            </p>
          </div>

          <div className="space-y-2 divide-y divide-slate-100">
            {keyHighlights.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className={`product-story-row ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                  {/* Text Column */}
                  <div className="space-y-2 text-left">
                    <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[10px] font-bold uppercase">
                      Capability {idx + 1}
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                    <div className="pt-1 flex items-center gap-1.5 text-xs font-semibold text-[#FF4C00]">
                      <Check className="w-3.5 h-3.5" /> Built-in and ready with zero manual config
                    </div>
                  </div>

                  {/* Visual Simulation Column */}
                  <div className="product-story-visual-panel">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs">
                      <span className="text-[#FF4C00] font-bold flex items-center gap-1 text-xs">
                        <Zap className="w-3.5 h-3.5" /> {item.title}
                      </span>
                      <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded font-bold">
                        ● VERIFIED
                      </span>
                    </div>
                    <div className="py-2.5 space-y-2 text-xs text-slate-600">
                      <p className="leading-relaxed text-xs">
                        {item.desc}
                      </p>
                      <div className="p-2 bg-slate-50 rounded-lg border border-slate-100 text-slate-800 text-[11px] flex items-center justify-between font-semibold">
                        <span>Status:</span>
                        <span className="text-emerald-700 font-mono">100% Sync (0 Errors)</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. COMPARISON MATRIX (Clean White Table) */}
      {comparisonFeatures && comparisonFeatures.length > 0 && (
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                KNK POS vs Legacy Software
              </h2>
              <p className="text-xs text-slate-500">
                Comparison of daily counter capabilities.
              </p>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                    <th className="p-3 sm:p-3.5">Capability</th>
                    <th className="p-3 sm:p-3.5 bg-orange-50/50 text-[#FF4C00]">KNK POS</th>
                    <th className="p-3 sm:p-3.5 text-slate-500">Traditional POS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="p-3 sm:p-3.5 font-semibold text-slate-900">{row.feature}</td>
                      <td className="p-3 sm:p-3.5 text-emerald-800 font-semibold bg-orange-50/20">
                        <span className="inline-flex items-center gap-1 text-emerald-700">
                          <Check className="w-3.5 h-3.5 text-emerald-600" /> {row.knkPos}
                        </span>
                      </td>
                      <td className="p-3 sm:p-3.5 text-slate-500">
                        <span className="inline-flex items-center gap-1 text-slate-500">
                          <X className="w-3 h-3 text-rose-500" /> {row.traditional}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* 4. FAQS */}
      {faqs && faqs.length > 0 && (
        <section className="py-10 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 space-y-1">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <p className="text-xs text-slate-500">
                Implementation and hardware compatibility details.
              </p>
            </div>
            <Accordion items={faqs} defaultOpenIndex={0} />
          </div>
        </section>
      )}

      {/* 5. BOTTOM CTA (Clean White Background) */}
      <section className="py-10 bg-white border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            See <span className="text-[#FF4C00]">{title}</span> in Your Store
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Book a 15-minute customized live demo today with KNK:SOFT specialists.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => openDemoModal(title)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Schedule Free Demonstration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductPageTemplate;
