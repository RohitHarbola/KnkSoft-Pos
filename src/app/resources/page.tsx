'use client';

import React from 'react';
import Link from 'next/link';
import { useDemoModal } from '@/context/DemoModalContext';
import {
  BookOpen,
  FileText,
  Video,
  Download,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Printer,
  Receipt,
  CheckCircle2,
  PhoneCall,
  MessageCircle,
} from 'lucide-react';

const RESOURCES = [
  {
    title: 'Indian GST 2.0 Invoicing & HSN Rate Guide (2026 Edition)',
    type: 'Guide & Cheat Sheet',
    category: 'GST & Compliance',
    desc: 'Complete overview of 0%, 5%, 12%, 18%, and 28% GST tax slabs, HSN/SAC codes for F&B, Apparel, Grocery, and Pharma with CA filing checklist.',
    icon: FileText,
    badge: '2026 Edition',
    downloads: '14,200+ Downloads',
    link: '/resources/blog'
  },
  {
    title: 'Thermal Receipt Printer & Barcode Scanner Setup Manual',
    type: 'Hardware Setup',
    category: 'Hardware Manuals',
    desc: 'Step-by-step driverless setup guide for EPSON, TVS, NGX, Retsol, and Bluetooth printers with sample print test files.',
    icon: Printer,
    badge: 'Hardware Guide',
    downloads: '8,900+ Downloads',
    link: '/hardware'
  },
  {
    title: 'Restaurant Recipe Costing & Kitchen Wastage Control',
    type: 'F&B Best Practices',
    category: 'Operations Playbooks',
    desc: 'How leading Indian cafes and QSR chains reduce raw material pilferage, standardize portion sizes, and calculate true food costs.',
    icon: BookOpen,
    badge: 'Operations Guide',
    downloads: '6,400+ Downloads',
    link: '/resources/blog'
  },
  {
    title: 'Swiggy & Zomato Aggregator Menu Optimization Playbook',
    type: 'Delivery Strategy',
    category: 'Operations Playbooks',
    desc: 'Strategies to maximize visibility, create high-converting combo descriptions, and maintain consistent ratings on food delivery apps.',
    icon: Video,
    badge: 'Growth Playbook',
    downloads: '11,700+ Downloads',
    link: '/resources/blog'
  },
  {
    title: '100% Offline POS Data Backup & Cloud Disaster Recovery',
    type: 'Security & Backup',
    category: 'Security & IT',
    desc: 'How KNK POS encrypts local SQLite transaction journals and automatically synchronizes with multi-region AWS cloud instances upon internet reconnection.',
    icon: ShieldCheck,
    badge: 'Technical Paper',
    downloads: '4,100+ Downloads',
    link: '/resources/blog'
  },
  {
    title: 'UPI Soundbox & Dual Screen QR Setup Guide for Indian Retail',
    type: 'Payment Hardware',
    category: 'Hardware Manuals',
    desc: 'Detailed blueprint on setting up real-time audio confirmation speakers and customer-facing QR payment screens with 0% MDR routing.',
    icon: Receipt,
    badge: 'Setup Manual',
    downloads: '9,800+ Downloads',
    link: '/resources/blog'
  }
];

export default function ResourcesPage() {
  const { openDemoModal } = useDemoModal();
  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="bg-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
            <Sparkles className="w-3 h-3" /> Knowledge &amp; Training Hub
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            GST Guides, Setup Manuals &amp; <span className="text-[#FF4C00]">Retail Playbooks</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Free downloadable resources, hardware setup walk-throughs, and operational guides crafted by KNK:SOFT specialists for Indian merchants and accountants.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <Link
              href="/resources/blog"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Read Knowledge Articles</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <button
              type="button"
              onClick={() => openDemoModal('Resources & Guides Support')}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF4C00]" />
              <span>Contact Support / Demo</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. EDITORIAL DIRECTORY LIST (Clean White Theme, Compact Spacing) */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Curated Documentation &amp; Guides
            </h2>
            <p className="text-xs text-slate-500">
              Download complete setup manuals and checklists.
            </p>
          </div>

          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {RESOURCES.map((res, idx) => {
              const Icon = res.icon;
              return (
                <div
                  key={idx}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group hover:bg-slate-50/70 px-3 rounded-xl transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF3EF] text-[#FF4C00] flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4C00] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-0.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[9.5px] font-bold text-[#FF4C00] uppercase tracking-wider">
                          {res.category}
                        </span>
                        <span className="text-[9.5px] font-semibold px-2 py-0.2 rounded-full bg-slate-100 text-slate-600">
                          {res.badge}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 group-hover:text-[#FF4C00] transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-xs text-slate-500 max-w-lg leading-relaxed">
                        {res.desc}
                      </p>
                    </div>
                  </div>

                  <div className="flex sm:flex-col items-center sm:items-end justify-between sm:justify-center gap-1.5 flex-shrink-0 pt-1 sm:pt-0">
                    <span className="text-[10.5px] font-semibold text-emerald-700">
                      {res.downloads}
                    </span>
                    <Link
                      href={res.link}
                      className="inline-flex items-center gap-1 text-xs font-bold text-slate-900 group-hover:text-[#FF4C00] transition-colors"
                    >
                      <span>Read Guide</span>
                      <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. BOTTOM SUPPORT (Pure White Background) */}
      <section className="py-8 bg-white border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-2.5">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Need Dedicated Setup Assistance?
          </h3>
          <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
            Our POS deployment specialists provide free hardware configuration, item catalog bulk upload, and staff training.
          </p>
          <div className="pt-1">
            <a
              href="https://wa.me/919891578609?text=Hi%20KNK%20POS%20team%2C%20I%20need%20help%20setting%20up%20my%20POS"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-xs hover:bg-[#de3700] transition-colors"
            >
              <span>Connect with Support on WhatsApp</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
