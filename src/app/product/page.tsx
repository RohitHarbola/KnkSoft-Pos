'use client';

import React, { useState } from 'react';
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
  Zap,
  Check,
  MessageCircle,
  LayoutDashboard,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

const ALL_MODULES = [
  {
    id: 'pos-billing',
    title: 'POS & Fast Billing',
    href: '/product/pos-billing',
    icon: Receipt,
    badge: 'Under 2-Sec Bills',
    tag: 'Core Terminal',
    desc: 'Sub-second touchscreen and barcode billing with 100% offline local mode, thermal printing, and token displays.',
    bullets: ['Instant keyboard hotkeys', 'Offline billing database', 'Multi-lingual thermal receipts', 'Split UPI / Card / Cash'],
    simulation: {
      headline: 'Lightning Counter Engine',
      stat: '0.8s Latency',
      items: [
        { name: 'Special Masala Dosa', price: '₹140', detail: 'Token #42' },
        { name: 'Cold Brew Coffee', price: '₹180', detail: 'HSN 0901' },
      ],
      total: '₹336 (Incl. 5% GST)',
    }
  },
  {
    id: 'inventory',
    title: 'Inventory & Stock Alerts',
    href: '/product/inventory',
    icon: Boxes,
    badge: 'Real-Time Sync',
    tag: 'Stock Automation',
    desc: 'Automated recipe deduction, batch-wise expiry tracking, purchase order generation, and central warehouse transfers.',
    bullets: ['Batch, Lot & Expiry tracking', 'Automated low stock alerts', 'Recipe & raw material deduction', 'Multi-outlet stock transfers'],
    simulation: {
      headline: 'Live Recipe & Batch Deduction',
      stat: 'Zero Wastage',
      items: [
        { name: 'Arabica Coffee Beans', price: '14.2 kg', detail: 'Batch #B294' },
        { name: 'Farm Fresh Milk', price: '8.5 L', detail: 'Low Stock Alert' },
      ],
      total: 'Auto PO Generated',
    }
  },
  {
    id: 'gst-compliance',
    title: 'GST & E-Way Compliance',
    href: '/product/gst-compliance',
    icon: ShieldCheck,
    badge: '100% Tax Compliant',
    tag: 'GST 2.0 Ready',
    desc: 'Automated CGST/SGST/IGST breakdown, built-in 20,000+ HSN database, 1-click GSTR-1/3B export to Tally and Marg.',
    bullets: ['Pre-loaded HSN directory', '1-Click GSTR-1 / 3B JSON', 'B2B GST E-invoicing (IRN)', 'Tally Prime & ERP 9 XML Sync'],
    simulation: {
      headline: 'Automated Tax Slabs & IRN',
      stat: '100% Accuracy',
      items: [
        { name: 'Intra-State GST', price: 'CGST 2.5% + SGST 2.5%', detail: 'Auto Split' },
        { name: 'B2B e-Invoice IRN', price: 'Signed QR Code', detail: 'GSTN Live' },
      ],
      total: '1-Click GSTR-1 Export',
    }
  },
  {
    id: 'payments',
    title: 'UPI & Multi-Mode Payments',
    href: '/product/payments',
    icon: CreditCard,
    badge: 'Instant Audio Sync',
    tag: '0% MDR UPI',
    desc: 'Dynamic UPI QR codes on dual screens with real-time soundbox audio notifications in 8 regional Indian languages.',
    bullets: ['Dynamic bill-amount UPI QR', 'Connected soundbox alerts', 'Card swipe (Pine Labs, Paytm)', 'Zero reconciliation errors'],
    simulation: {
      headline: 'Dynamic UPI & Audio Sync',
      stat: '3-Sec Soundbox Broadcast',
      items: [
        { name: 'Dynamic Bill QR', price: 'Exact Amount ₹336', detail: 'Dual Screen' },
        { name: 'Regional Soundbox', price: '🔊 "₹336 Received"', detail: 'Hindi / Eng' },
      ],
      total: '0% Payment Surcharge',
    }
  },
  {
    id: 'crm-loyalty',
    title: 'CRM & Customer Loyalty',
    href: '/product/crm-loyalty',
    icon: Users,
    badge: '35% Repeat Walk-ins',
    tag: 'WhatsApp CRM',
    desc: 'Paperless WhatsApp digital receipts, automatic cashback points, birthday promos, and customer VIP tier segmentation.',
    bullets: ['WhatsApp green-tick invoices', 'Cashback loyalty wallet', 'Automated birthday deal SMS', 'Customer purchase ledger'],
    simulation: {
      headline: 'Green-Tick WhatsApp Invoicing',
      stat: '+35% Repeat Purchases',
      items: [
        { name: 'WhatsApp Bill Sent', price: '+91 98765 43210', detail: 'Delivered' },
        { name: 'Loyalty Coins', price: '+30 KNK Points', detail: 'Wallet Synced' },
      ],
      total: 'Zero Paper Cost',
    }
  },
  {
    id: 'analytics',
    title: 'Analytics & GST Reports',
    href: '/product/analytics',
    icon: BarChart3,
    badge: 'Live Dashboards',
    tag: 'Business Intelligence',
    desc: 'Owner mobile app with real-time revenue, gross profit margins, peak hourly heatmaps, and cashier audit logs.',
    bullets: ['Daily morning WhatsApp report', 'Gross profit per dish/SKU', 'Hourly rush heatmaps', 'Franchise branch benchmarks'],
    simulation: {
      headline: 'Real-Time Sales Telemetry',
      stat: 'Live Cloud Telemetry',
      items: [
        { name: "Today's Gross Sales", price: '₹48,250', detail: '+18% vs Last Week' },
        { name: 'Top Seller SKU', price: 'Masala Dosa (84 Qty)', detail: '68% Margin' },
      ],
      total: 'Owner App Synced',
    }
  },
  {
    id: 'online-ordering',
    title: 'Online Ordering & QR Menu',
    href: '/product/online-ordering',
    icon: Globe,
    badge: 'Zero Commissions',
    tag: 'Digital Channel',
    desc: 'Direct digital QR menu for contactless dine-in or pickup, plus seamless 2-way Swiggy and Zomato order sync.',
    bullets: ['Contactless table QR menu', 'Swiggy/Zomato direct punch', 'Direct customer delivery portal', 'Kitchen KDS integration'],
    simulation: {
      headline: 'Table QR & Swiggy/Zomato Sync',
      stat: '0% Direct Order Commission',
      items: [
        { name: 'Table 4 QR Order', price: 'Direct Punch → KOT', detail: 'Prepaid UPI' },
        { name: 'Zomato Live Order', price: 'Auto Accepted', detail: 'Rider Assigned' },
      ],
      total: 'Single KDS Screen',
    }
  },
  {
    id: 'multi-store',
    title: 'Multi-Store & Franchise Hub',
    href: '/product/multi-store',
    icon: Store,
    badge: 'Franchise Control',
    tag: 'Chain Management',
    desc: 'Centralized control for multi-city outlets: push global menu pricing, monitor branch P&L, and track inter-store transfers.',
    bullets: ['Central pricing & tax push', 'Inter-store stock transfers', 'Outlet consolidated P&L', 'Role-based cashier permissions'],
    simulation: {
      headline: 'Central Menu & Price Push',
      stat: 'Multi-City Enterprise Hub',
      items: [
        { name: 'Delhi NCR Outlet', price: '₹1,24,000 / day', detail: '3 Terminals' },
        { name: 'Mumbai Outlet', price: '₹1,86,000 / day', detail: '4 Terminals' },
      ],
      total: '1-Click Menu Update',
    }
  }
];

export default function ProductIndexPage() {
  const { openDemoModal } = useDemoModal();
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const activeModule = ALL_MODULES[activeModuleIndex];

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="bg-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
            <Sparkles className="w-3 h-3" /> POS Architecture &amp; Suite
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            POS Software Suite for <span className="text-[#FF4C00]">Every Store Counter</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Engineered by <strong>KNK:SOFT INFOTECH</strong>. Sub-2 second invoicing, dynamic UPI soundbox sync, batch-wise inventory, and automated GST 2.0 e-invoicing.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => openDemoModal()}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Schedule Free Live Demo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <a
              href="https://wa.me/919891578609?text=Hi%20KNK%20POS%20team%2C%20I%20want%20to%20know%20more%20about%20your%20POS%20software"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-800 font-semibold text-xs hover:bg-slate-50 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE MODULE SHOWCASE (Clean White Theme, No Dark Box, No Cards) */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-6 space-y-1">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
              Interactive Module Directory
            </h2>
            <p className="text-xs text-slate-500">
              Select a module tab to view its workflow and configuration details.
            </p>
          </div>

          {/* Module Selector Pill Tabs */}
          <div className="flex items-center justify-start lg:justify-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {ALL_MODULES.map((mod, idx) => {
              const Icon = mod.icon;
              const isActive = activeModuleIndex === idx;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActiveModuleIndex(idx)}
                  className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-[#FF4C00] text-white shadow-xs'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  <span>{mod.title}</span>
                </button>
              );
            })}
          </div>

          {/* Clean White Showcase Split Display */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Left Deep Dive Text */}
              <div className="md:col-span-6 space-y-3 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-orange-50 text-[#FF4C00] text-[10px] font-bold uppercase border border-orange-200">
                  {activeModule.tag}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {activeModule.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {activeModule.desc}
                </p>

                <div className="space-y-1.5 pt-1">
                  {activeModule.bullets.map((b, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={activeModule.href}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors"
                  >
                    <span>View {activeModule.title} Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Right Live Simulation Console */}
              <div className="md:col-span-6">
                <div className="bg-slate-50 rounded-xl p-4 sm:p-5 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-200 text-xs">
                    <span className="font-bold text-[#FF4C00] flex items-center gap-1 text-xs">
                      <LayoutDashboard className="w-3 h-3" /> {activeModule.simulation.headline}
                    </span>
                    <span className="text-emerald-700 font-mono text-[10px] bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 font-bold">
                      ● {activeModule.simulation.stat}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {activeModule.simulation.items.map((item: any, i) => (
                      <div
                        key={i}
                        className="p-2.5 bg-white rounded-lg flex items-center justify-between text-xs border border-slate-200"
                      >
                        <div className="space-y-0.5">
                          <div className="text-slate-800 font-semibold text-xs">{item.name}</div>
                          <div className="text-[10px] text-slate-400">{item.detail}</div>
                        </div>
                        <span className="font-mono font-bold text-[#FF4C00] text-xs">
                          {item.price}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="p-2.5 bg-white rounded-lg flex items-center justify-between text-xs border border-slate-200">
                    <span className="text-slate-500 text-xs">Total / Status:</span>
                    <span className="font-bold text-emerald-700 font-mono text-xs">{activeModule.simulation.total}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => openDemoModal(activeModule.title)}
                    className="w-full py-2 rounded-lg bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Schedule Demo for {activeModule.title}</span>
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
            Ready to Upgrade Your Entire Counter Experience?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Get a tailored 15-minute live demo with your exact menu, items, and hardware setup by KNK:SOFT specialists.
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
