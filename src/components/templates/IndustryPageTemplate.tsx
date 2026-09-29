'use client';

import React from 'react';
import Link from 'next/link';
import {
  ChevronRight,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Star
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Accordion, AccordionItem } from '@/components/ui/Accordion';
import { useDemoModal } from '@/context/DemoModalContext';

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
    <div className="bg-pos-bg min-h-screen">
      {/* Breadcrumbs */}
      <div className="bg-white border-b border-slate-200/80 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <Link href="/" className="hover:text-pos-navy">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <Link href="/industries" className="hover:text-pos-navy">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-pos-navy font-bold">{industryName}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/40 via-white to-pos-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-5">
            <Badge variant="orange" size="md">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> {badge}
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
              {headline}
            </h1>

            <p className="text-lg text-slate-700 font-medium">
              {subheadline}
            </p>

            <p className="text-sm sm:text-base text-pos-text-secondary leading-relaxed">
              {overview}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button
                variant="primary"
                size="lg"
                onClick={() => openDemoModal(industryName)}
                icon={<ArrowRight className="w-4 h-4" />}
                className="font-bold shadow-lg"
              >
                Book Free {industryName} Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                href="/pricing"
              >
                View Plans &amp; Hardware
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Indian Pain Points vs Solutions */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-pos-navy tracking-tight">
              Common Challenges We Solve for {industryName}
            </h2>
            <p className="text-sm text-pos-text-secondary mt-2">
              Say goodbye to daily operational friction and revenue leakage with KNK POS.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 bg-rose-50 border border-rose-200/80 rounded-2xl text-xs text-rose-900 font-semibold mb-4">
                    <strong className="text-rose-700 block text-xs uppercase mb-0.5">The Bottleneck:</strong>
                    {item.problem}
                  </div>

                  <div className="p-3 bg-emerald-50 border border-emerald-200/80 rounded-2xl text-xs text-emerald-900 font-semibold">
                    <strong className="text-emerald-700 block text-xs uppercase mb-0.5">KNK POS Fix:</strong>
                    {item.solution}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Deep Dive */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-pos-navy tracking-tight">
              Specialized Features for {industryName}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-100 text-pos-orange flex items-center justify-center font-bold text-sm mb-4">
                  {feat.icon || <CheckCircle2 className="w-5 h-5 text-pos-orange" />}
                </div>
                <h3 className="text-base font-black text-pos-navy mb-2">{feat.title}</h3>
                <p className="text-xs sm:text-sm text-pos-text-secondary leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Indian Customer Spotlight */}
      <section className="py-16 bg-pos-navy text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-800/80 rounded-3xl p-8 sm:p-10 border border-slate-700 flex flex-col md:flex-row items-center gap-8">
            <div className="w-20 h-20 rounded-3xl bg-pos-orange text-white flex items-center justify-center text-3xl font-black flex-shrink-0 shadow-lg">
              {caseStudy.brandName[0]}
            </div>
            <div className="space-y-3 flex-1">
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                  Verified KNK POS Merchant
                </span>
              </div>

              <div className="text-xl sm:text-2xl font-bold text-amber-300">
                &ldquo;{caseStudy.metric}&rdquo;
              </div>

              <p className="text-sm sm:text-base text-slate-300 italic">
                &ldquo;{caseStudy.quote}&rdquo;
              </p>

              <div className="pt-2 text-xs text-slate-400">
                <span className="font-bold text-white text-sm">{caseStudy.owner}</span> • {caseStudy.brandName}, {caseStudy.city}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Hardware */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-pos-navy">
              Recommended Hardware Setup
            </h2>
            <p className="text-xs sm:text-sm text-pos-text-secondary mt-1">
              Plug-and-play accessories pre-tested for {industryName} by KNK:SOFT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recommendedHardware.map((hw, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center">
                <div className="text-sm font-black text-pos-navy">{hw.name}</div>
                <div className="text-xs text-pos-text-secondary mt-1 min-h-[32px]">{hw.desc}</div>
                <div className="text-base font-bold text-pos-orange mt-3">{hw.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry FAQs */}
      {faqs && faqs.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-black text-pos-navy">
                Frequently Asked Questions: {industryName}
              </h2>
            </div>
            <Accordion items={faqs} defaultOpenIndex={0} />
          </div>
        </section>
      )}

      {/* Final Bottom CTA */}
      <section className="py-16 bg-gradient-to-r from-pos-navy to-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <h3 className="text-3xl font-black">
            Get Started with KNK POS for {industryName}
          </h3>
          <p className="text-slate-300 text-sm">
            Book a free 1-on-1 demo today with KNK:SOFT INFOTECH and get 14 days full trial with complimentary data import.
          </p>
          <div className="pt-2">
            <Button
              variant="primary"
              size="lg"
              onClick={() => openDemoModal(industryName)}
              className="font-bold shadow-xl"
            >
              Book Free 1-on-1 Demo
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
