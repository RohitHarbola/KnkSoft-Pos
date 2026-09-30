'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Store,
  Pill,
  Scissors,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Zap,
  Check,
  Building2,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

const INDUSTRY_LIST = [
  {
    id: 'restaurant',
    title: 'Restaurants & Fine Dining',
    href: '/industries/restaurant',
    icon: UtensilsCrossed,
    badge: 'F&B Specialist',
    desc: 'Table layout management, Captain ordering app, multi-kitchen KDS, and direct Swiggy/Zomato order sync.',
    stats: '60% faster table turnaround',
    features: ['Dine-in / Takeaway / Delivery management', 'Kitchen Order Tickets (KOT) on thermal printers', 'Captain Android App for table ordering', 'Direct Swiggy & Zomato order punch'],
    highlight: 'Zero Captain Wait Time & Fast KOT Delivery'
  },
  {
    id: 'cafe',
    title: 'Cafes & Bakeries',
    href: '/industries/cafe',
    icon: Coffee,
    badge: 'Quick Service',
    desc: 'Custom beverage modifiers, combo billing, recipe ingredient tracking, and digital WhatsApp receipts.',
    stats: 'Zero ingredient wastage',
    features: ['Add-ons & Size Modifiers (Sugar, Milk, Syrup)', 'Combo Bill Generation with 1-click punch', 'Recipe ingredient deduction (Flour, Butter, Coffee)', 'Paperless WhatsApp digital receipts'],
    highlight: 'Fractional Ingredient Deductions'
  },
  {
    id: 'qsr',
    title: 'Quick Service (QSR) & Food Courts',
    href: '/industries/qsr',
    icon: UtensilsCrossed,
    badge: 'High Speed',
    desc: 'Rapid 3-second counter billing, order token display screens, and UPI soundbox voice announcements.',
    stats: '150+ bills/hour capability',
    features: ['Sub-2 Second Billing with hotkeys', 'Order Token Call Screen for kitchen pickup', 'Dual Screen Customer Facing QR Display', 'Instant Regional Soundbox Audio Sync'],
    highlight: 'Queue Busting Invoicing'
  },
  {
    id: 'retail',
    title: 'Retail & Apparel Stores',
    href: '/industries/retail',
    icon: ShoppingBag,
    badge: 'Retail Matrix',
    desc: 'Size-color-brand barcode matrix, custom barcode printing, instant exchanges, and customer loyalty points.',
    stats: '100% SKU stock accuracy',
    features: ['Size-Color-Fit Matrix management', 'Custom Barcode & Price Tag Sticker Generator', 'Credit Note & Exchange handling', 'Cashback Loyalty points & VIP tiers'],
    highlight: 'Complete SKU & Size-Color Precision'
  },
  {
    id: 'grocery',
    title: 'Kirana & Supermarkets',
    href: '/industries/grocery',
    icon: Store,
    badge: 'Kirana Ready',
    desc: 'Electronic weighing scale auto-sync, 50,000+ preloaded FMCG barcodes, offline quick tap, and customer Khata ledger.',
    stats: 'Zero checkout queue delay',
    features: ['Electronic Weighing Scale Auto-Sync', '50,000+ Preloaded FMCG Barcodes', 'Customer Khata / Credit Ledger with SMS reminders', '100% Offline Billing Mode'],
    highlight: 'Weight Auto-Capture on Loose Items'
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy & Medical Stores',
    href: '/industries/pharmacy',
    icon: Pill,
    badge: 'Schedule H Ready',
    desc: 'Batch-wise expiry date alerts, strip-to-tablet fraction billing, salt substitute lookup, and GST drug compliance.',
    stats: 'Zero expired drug loss',
    features: ['Batch Number & Expiry Date Alert Engine', 'Substitute Salt Search for generic medicines', 'Doctor & Patient prescription registry', 'Schedule H & H1 Drug Audit reports'],
    highlight: 'Expiry Date FIFO Management'
  },
  {
    id: 'salon',
    title: 'Salons, Spas & Beauty Clinics',
    href: '/industries/salon',
    icon: Scissors,
    badge: 'Appointment Pro',
    desc: 'Visual stylist appointment calendar, automated therapist commissions, prepaid packages, and WhatsApp reminders.',
    stats: '40% repeat bookings',
    features: ['Visual Slot Scheduler for stylists and chairs', 'Therapist Commission Split calculation', 'Prepaid Packages & Membership wallets', 'Automated Appointment WhatsApp reminders'],
    highlight: 'Chair & Therapist Commission Split'
  }
];

export default function IndustriesIndexPage() {
  const { openDemoModal } = useDemoModal();
  const [activeIndIndex, setActiveIndIndex] = useState(0);
  const activeInd = INDUSTRY_LIST[activeIndIndex];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="bg-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
            <Sparkles className="w-3 h-3" /> Tailored For Indian Trade
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            Built for Your Industry&apos;s <span className="text-[#FF4C00]">Daily Counter Workflow</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Every trade operates differently. Discover how KNK POS eliminates manual bottlenecks, simplifies GST, and speeds up customer queues in your category.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Schedule Free Industry Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE INDUSTRY WORKFLOW SHOWCASE (Clean White Theme, No Dark Box, No Cards) */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Trade Category Switcher
            </h2>
            <p className="text-xs text-slate-500">
              Select your business type to inspect specific features and tax handling.
            </p>
          </div>

          {/* Industry Selector Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {INDUSTRY_LIST.map((ind, idx) => {
              const Icon = ind.icon;
              const isActive = activeIndIndex === idx;
              return (
                <button
                  key={ind.id}
                  onClick={() => setActiveIndIndex(idx)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FF4C00] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{ind.title}</span>
                </button>
              );
            })}
          </div>

          {/* Clean White Showcase Split Display */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Deep Dive Text */}
              <div className="md:col-span-6 space-y-3 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-teal-50 text-teal-700 text-[10px] font-bold uppercase border border-teal-200">
                  {activeInd.badge}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeInd.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeInd.desc}
                </p>

                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-200 text-xs text-emerald-900 font-semibold flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                  <span>Proven Impact: {activeInd.stats}</span>
                </div>

                <div className="space-y-1.5 pt-1">
                  {activeInd.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={activeInd.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors"
                  >
                    <span>Explore {activeInd.title} Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Right Live Simulation Console */}
              <div className="md:col-span-6">
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <span className="font-bold text-[#FF4C00] flex items-center gap-1 text-xs">
                      <Store className="w-3 h-3" /> {activeInd.title} Terminal
                    </span>
                    <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                      ● READY
                    </span>
                  </div>

                  <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <div className="text-xs font-bold text-slate-900">
                      Signature Feature for {activeInd.title}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {activeInd.highlight}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => openDemoModal(activeInd.title)}
                    className="w-full py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Schedule Demo for {activeInd.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA (Pure White Background) */}
      <section className="py-10 bg-white border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Ready to Automate Your Store Operations?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Get a tailored walkthrough with your exact menu, product catalog, and hardware setup by KNK:SOFT specialists.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Schedule Free 1-on-1 Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
