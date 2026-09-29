import React from 'react';
import { Metadata } from 'next';
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
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Industry POS Solutions for India | KNK POS by KNK:SOFT',
  description: 'Specialized POS software and hardware tailored for Indian Restaurants, Cafes, QSRs, Retail Apparel, Kirana & Supermarkets, Pharmacies, and Salons.',
};

const INDUSTRY_LIST = [
  {
    title: 'Restaurants & Fine Dining',
    href: '/industries/restaurant',
    icon: UtensilsCrossed,
    badge: 'F&B Specialist',
    desc: 'Table layout management, Captain ordering app, multi-kitchen KDS, and direct Swiggy/Zomato order sync.',
    stats: '60% faster table turnaround'
  },
  {
    title: 'Cafes & Bakeries',
    href: '/industries/cafe',
    icon: Coffee,
    badge: 'Quick Service',
    desc: 'Custom beverage modifiers, combo billing, recipe ingredient tracking, and digital WhatsApp receipts.',
    stats: 'Zero ingredient wastage'
  },
  {
    title: 'Quick Service (QSR) & Food Courts',
    href: '/industries/qsr',
    icon: UtensilsCrossed,
    badge: 'High Speed',
    desc: 'Rapid 3-second counter billing, order token display screens, and UPI soundbox voice announcements.',
    stats: '150+ bills/hour capability'
  },
  {
    title: 'Retail & Apparel Stores',
    href: '/industries/retail',
    icon: ShoppingBag,
    badge: 'Retail Matrix',
    desc: 'Size-color-brand barcode matrix, custom barcode printing, instant exchanges, and customer loyalty points.',
    stats: '100% SKU stock accuracy'
  },
  {
    title: 'Kirana & Supermarkets',
    href: '/industries/grocery',
    icon: Store,
    badge: 'Kirana Ready',
    desc: 'Electronic weighing scale auto-sync, 50,000+ preloaded FMCG barcodes, offline quick tap, and customer Khata ledger.',
    stats: 'Zero checkout queue delay'
  },
  {
    title: 'Pharmacy & Medical Stores',
    href: '/industries/pharmacy',
    icon: Pill,
    badge: 'Schedule H Ready',
    desc: 'Batch-wise expiry date alerts, strip-to-tablet fraction billing, salt substitute lookup, and GST drug compliance.',
    stats: 'Zero expired drug loss'
  },
  {
    title: 'Salons, Spas & Beauty Clinics',
    href: '/industries/salon',
    icon: Scissors,
    badge: 'Appointment Pro',
    desc: 'Visual stylist appointment calendar, automated therapist commissions, prepaid packages, and WhatsApp reminders.',
    stats: '40% repeat bookings'
  }
];

export default function IndustriesIndexPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero Header */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Tailored For Indian Trade
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Built for Your Industry&apos;s Specific Workflow
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Every business operates differently. Explore how KNK POS solves the specific daily bottlenecks in your trade category.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INDUSTRY_LIST.map((ind) => {
              const Icon = ind.icon;
              return (
                <div
                  key={ind.title}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-pos-card hover:shadow-xl hover:border-pos-orange/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-pos-orange flex items-center justify-center group-hover:bg-pos-orange group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {ind.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-black text-pos-navy group-hover:text-pos-orange transition-colors">
                      {ind.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-pos-text-secondary mt-2 leading-relaxed">
                      {ind.desc}
                    </p>

                    <div className="mt-4 p-3 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-900 font-semibold">
                      ⚡ <strong>Proven Impact:</strong> {ind.stats}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={ind.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pos-navy group-hover:text-pos-orange transition-colors"
                    >
                      View {ind.title} Solutions <ArrowRight className="w-4 h-4" />
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
