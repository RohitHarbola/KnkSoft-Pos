'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { useDemoModal } from '@/context/DemoModalContext';

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
    <div className="bg-pos-bg min-h-screen">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-pos-navy">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/product" className="hover:text-pos-navy">Product</Link>
            {breadcrumbs.map((b, idx) => (
              <React.Fragment key={idx}>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
                {b.href ? (
                  <Link href={b.href} className="hover:text-pos-navy">{b.label}</Link>
                ) : (
                  <span className="text-pos-navy font-bold">{b.label}</span>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>

      {/* Hero Header */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/40 to-pos-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5 text-left">
              <Badge variant="orange" size="md">
                <Sparkles className="w-3.5 h-3.5 mr-1" /> {badge}
              </Badge>

              <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
                {title}
              </h1>

              <p className="text-lg text-slate-700 font-medium">
                {subtitle}
              </p>

              <p className="text-sm sm:text-base text-pos-text-secondary leading-relaxed">
                {description}
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => openDemoModal(title)}
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Book Live Demo
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  href="/pricing"
                >
                  View Pricing Plans
                </Button>
              </div>

              <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 pt-2">
                <span className="flex items-center gap-1 text-emerald-600">
                  <CheckCircle2 className="w-4 h-4" /> 100% Offline Capable
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-teal-700">
                  <ShieldCheck className="w-4 h-4" /> GST 2.0 Ready
                </span>
                <span>•</span>
                <span className="text-slate-600">14-Day Free Trial by KNK:SOFT</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              {mockupContent ? (
                mockupContent
              ) : (
                <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-700 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                    <span className="font-bold text-pos-orange">KNK POS Active Module</span>
                    <span className="text-emerald-400 font-mono text-[11px]">● LIVE SYSTEM</span>
                  </div>
                  <div className="p-4 bg-slate-800 rounded-2xl">
                    <div className="text-xs text-slate-400 uppercase font-semibold">Standard Configuration</div>
                    <div className="text-xl font-bold text-white mt-1">{title}</div>
                    <p className="text-xs text-slate-300 mt-2">
                      Engineered for high reliability under intense Indian rush hour volume.
                    </p>
                  </div>
                  <div className="p-3 bg-slate-950 rounded-xl flex items-center justify-between text-xs">
                    <span>GST Slab Verification</span>
                    <span className="text-emerald-400 font-mono font-bold">Passed (0 Errors)</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Key Features & Architecture Breakdown */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-pos-navy tracking-tight">
              Key Capabilities &amp; Built-in Features
            </h2>
            <p className="text-sm sm:text-base text-pos-text-secondary mt-2">
              Designed to solve practical daily bottlenecks faced by store operators across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyHighlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-pos-orange/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-pos-orange flex items-center justify-center font-bold text-sm mb-4">
                  {item.icon || (idx + 1)}
                </div>
                <h3 className="text-base font-black text-pos-navy mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-pos-text-secondary leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table vs Traditional / Old POS */}
      {comparisonFeatures && comparisonFeatures.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-pos-navy tracking-tight">
                Why Indian Stores Choose KNK POS over Traditional Software
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
              <table className="w-full text-xs sm:text-sm text-left">
                <thead className="bg-pos-navy text-white font-bold">
                  <tr>
                    <th className="p-4 sm:p-5">Feature Comparison</th>
                    <th className="p-4 sm:p-5 bg-pos-orange text-white">KNK POS</th>
                    <th className="p-4 sm:p-5 text-slate-300">Traditional / Legacy ERP</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                  {comparisonFeatures.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="p-4 sm:p-5 font-bold text-pos-navy">{row.feature}</td>
                      <td className="p-4 sm:p-5 text-emerald-800 font-semibold bg-orange-50/30">
                        ✓ {row.knkPos}
                      </td>
                      <td className="p-4 sm:p-5 text-slate-500">
                        ✗ {row.traditional}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      {/* Module Specific FAQ */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-white border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-pos-navy">
                Questions About {title}
              </h2>
            </div>
            <Accordion items={faqs} defaultOpenIndex={0} />
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-14 bg-pos-navy text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h3 className="text-2xl sm:text-3xl font-black mb-3">
            See {title} Live in Your Store
          </h3>
          <p className="text-slate-300 text-sm max-w-xl mx-auto mb-6">
            Get a tailored walkthrough with your exact menu, product catalog, and hardware setup by KNK:SOFT specialists.
          </p>
          <Button
            variant="primary"
            size="lg"
            onClick={() => openDemoModal(title)}
            className="font-bold shadow-lg"
          >
            Schedule Free Demonstration
          </Button>
        </div>
      </section>
    </div>
  );
};
