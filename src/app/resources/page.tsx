import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/ui/Badge';
import { BookOpen, FileText, Video, HelpCircle, ArrowRight, Sparkles, ShieldCheck, Download } from 'lucide-react';

export const metadata: Metadata = {
  title: 'POS & GST Resources, Setup Guides & Tutorials | KNK POS India',
  description: 'Download Indian GST compliance checklists, thermal printer setup manuals, video tutorials, and retail management guides by KNK POS.',
};

const RESOURCES = [
  {
    title: 'Indian GST 2.0 Invoicing & HSN Rate Guide (2026 Edition)',
    type: 'Guide & Cheat Sheet',
    desc: 'Complete overview of 0%, 5%, 12%, 18%, and 28% GST tax slabs, HSN/SAC codes for F&B, Apparel, Grocery, and Pharma with CA filing checklist.',
    icon: FileText,
    badge: 'Updated for 2026',
    link: '/resources/blog'
  },
  {
    title: 'Thermal Receipt Printer & Barcode Scanner Setup Manual',
    type: 'Hardware Setup',
    desc: 'Step-by-step driverless setup guide for EPSON, TVS, NGX, Retsol, and Bluetooth printers with sample print test files.',
    icon: Download,
    badge: 'Hardware Guide',
    link: '/hardware'
  },
  {
    title: 'Restaurant Recipe Costing & Kitchen Wastage Control',
    type: 'F&B Best Practices',
    desc: 'How leading Indian cafes and QSR chains reduce raw material pilferage, standardize portion sizes, and calculate true food costs.',
    icon: BookOpen,
    badge: 'Operations Guide',
    link: '/resources/blog'
  },
  {
    title: 'Swiggy & Zomato Aggregator Menu Optimization Playbook',
    type: 'Delivery Strategy',
    desc: 'Strategies to maximize visibility, create high-converting combo descriptions, and maintain consistent ratings on food delivery apps.',
    icon: Video,
    badge: 'Growth Playbook',
    link: '/resources/blog'
  }
];

export default function ResourcesPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Knowledge &amp; Training Hub
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            GST Guides, Setup Tutorials &amp; Retail Playbooks
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Free downloadable resources, hardware setup walk-throughs, and operational guides crafted for Indian merchants and accountants.
          </p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {RESOURCES.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-pos-card hover:shadow-xl hover:border-pos-orange/40 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-pos-orange flex items-center justify-center group-hover:bg-pos-orange group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {res.badge}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-pos-orange uppercase tracking-wider mb-1">
                      {res.type}
                    </div>

                    <h2 className="text-xl font-black text-pos-navy group-hover:text-pos-orange transition-colors">
                      {res.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-pos-text-secondary mt-2 leading-relaxed">
                      {res.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={res.link}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pos-navy group-hover:text-pos-orange transition-colors"
                    >
                      Read &amp; Download Free Guide <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
