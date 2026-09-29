import React from 'react';
import { Metadata } from 'next';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Badge } from '@/ui/Badge';
import { Sparkles, Star, TrendingUp, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Indian Customer Case Studies & Results | KNK POS India',
  description: 'Read real success stories from Indian restaurant owners, retail chains, supermarkets, and pharmacies using KNK POS.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Proven Business Impact
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            How 10,000+ Indian Businesses Grow Faster with KNK POS
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Read real stories of how store owners reduced counter billing times, eliminated inventory leakage, and streamlined GST compliance.
          </p>
        </div>
      </section>

      {/* Case Studies Component */}
      <CaseStudies />

      {/* Additional Stats Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-pos-orange">60%</div>
              <div className="text-base font-bold text-pos-navy mt-2">Average Reduction in Billing Time</div>
              <p className="text-xs text-pos-text-secondary mt-1">Faster queue clearances during peak festival and weekend rush hours.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-pos-teal">₹1.5L+</div>
              <div className="text-base font-bold text-pos-navy mt-2">Average Annual Wastage Saved</div>
              <p className="text-xs text-pos-text-secondary mt-1">Through automated ingredient tracking, batch alerts, and FIFO management.</p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200">
              <div className="text-4xl sm:text-5xl font-black text-pos-navy">35%</div>
              <div className="text-base font-bold text-pos-navy mt-2">Increase in Repeat Customer Walk-ins</div>
              <p className="text-xs text-pos-text-secondary mt-1">Driven by WhatsApp digital invoices, cashback points, and birthday promotions.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
