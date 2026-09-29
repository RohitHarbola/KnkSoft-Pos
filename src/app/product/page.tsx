import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import {
  Receipt,
  Boxes,
  ShieldCheck,
  CreditCard,
  Users,
  BarChart3,
  Globe,
  Store,
  ArrowRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'KNK POS Software Modules & Features | KNK:SOFT INFOTECH India',
  description: 'Explore KNK POS software suite: High-speed billing, offline mode, multi-outlet inventory, GST 2.0 e-invoicing, UPI Soundbox, and WhatsApp CRM.',
};

const ALL_MODULES = [
  {
    title: 'POS & Fast Billing',
    href: '/product/pos-billing',
    icon: Receipt,
    badge: 'Under 2-Sec Bills',
    desc: 'Sub-second touchscreen and barcode billing with 100% offline local mode, thermal printing, and token displays.',
    bullets: ['Instant keyboard hotkeys', 'Offline billing database', 'Multi-lingual thermal receipts', 'Split UPI / Card / Cash']
  },
  {
    title: 'Inventory & Stock Alerts',
    href: '/product/inventory',
    icon: Boxes,
    badge: 'Real-Time Sync',
    desc: 'Automated recipe deduction, batch-wise expiry tracking, purchase order generation, and central warehouse transfers.',
    bullets: ['Batch, Lot & Expiry tracking', 'Automated low stock alerts', 'Recipe & raw material deduction', 'Multi-outlet stock transfers']
  },
  {
    title: 'GST & E-Way Compliance',
    href: '/product/gst-compliance',
    icon: ShieldCheck,
    badge: '100% Tax Compliant',
    desc: 'Automated CGST/SGST/IGST breakdown, built-in 20,000+ HSN database, 1-click GSTR-1/3B export to Tally and Marg.',
    bullets: ['Pre-loaded HSN directory', '1-Click GSTR-1 / 3B JSON', 'B2B GST E-invoicing (IRN)', 'Tally Prime & ERP 9 XML Sync']
  },
  {
    title: 'UPI & Multi-Mode Payments',
    href: '/product/payments',
    icon: CreditCard,
    badge: 'Instant Audio Sync',
    desc: 'Dynamic UPI QR codes on dual screens with real-time soundbox audio notifications in 8 regional Indian languages.',
    bullets: ['Dynamic bill-amount UPI QR', 'Connected soundbox alerts', 'Card swipe (Pine Labs, Paytm)', '0% MDR UPI setup']
  },
  {
    title: 'CRM & Customer Loyalty',
    href: '/product/crm-loyalty',
    icon: Users,
    badge: '35% Repeat Walk-ins',
    desc: 'Paperless WhatsApp digital receipts, automatic cashback points, birthday promos, and customer VIP tier segmentation.',
    bullets: ['WhatsApp green-tick invoices', 'Cashback loyalty wallet', 'Automated birthday deal SMS', 'Customer purchase ledger']
  },
  {
    title: 'Analytics & GST Reports',
    href: '/product/analytics',
    icon: BarChart3,
    badge: 'Live Dashboards',
    desc: 'Owner mobile app with real-time revenue, gross profit margins, peak hourly heatmaps, and cashier audit logs.',
    bullets: ['Daily morning WhatsApp report', 'Gross profit per dish/SKU', 'Hourly rush heatmaps', 'Franchise branch benchmarks']
  },
  {
    title: 'Online Ordering & QR Menu',
    href: '/product/online-ordering',
    icon: Globe,
    badge: 'Zero Commissions',
    desc: 'Direct digital QR menu for contactless dine-in or pickup, plus seamless 2-way Swiggy and Zomato order sync.',
    bullets: ['Contactless table QR menu', 'Swiggy/Zomato direct punch', 'Direct customer delivery portal', 'Kitchen KDS integration']
  },
  {
    title: 'Multi-Store & Franchise Hub',
    href: '/product/multi-store',
    icon: Store,
    badge: 'Franchise Control',
    desc: 'Centralized control for multi-city outlets: push global menu pricing, monitor branch P&L, and track inter-store transfers.',
    bullets: ['Central pricing & tax push', 'Inter-store stock transfers', 'Outlet consolidated P&L', 'Role-based cashier permissions']
  }
];

export default function ProductIndexPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero Header */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Comprehensive POS Software Suite
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Engineered by KNK:SOFT to Run Every Aspect of Your Indian Business
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Explore KNK POS modular software components designed for speed, offline reliability, Indian GST regulations, and multi-mode payment collections.
          </p>
        </div>
      </section>

      {/* Grid of All Modules */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALL_MODULES.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.title}
                  className="bg-white rounded-3xl p-7 border border-slate-200 shadow-pos-card hover:shadow-xl hover:border-pos-orange/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-orange-50 text-pos-orange flex items-center justify-center group-hover:bg-pos-orange group-hover:text-white transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                        {mod.badge}
                      </span>
                    </div>

                    <h2 className="text-xl font-black text-pos-navy group-hover:text-pos-orange transition-colors">
                      {mod.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-pos-text-secondary mt-2 leading-relaxed">
                      {mod.desc}
                    </p>

                    <div className="mt-4 pt-4 border-t border-slate-100 space-y-1.5">
                      {mod.bullets.map((b, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <Link
                      href={mod.href}
                      className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-pos-navy group-hover:text-pos-orange transition-colors"
                    >
                      Explore {mod.title} Details <ArrowRight className="w-4 h-4" />
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
