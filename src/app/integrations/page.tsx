'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Truck,
  FileSpreadsheet,
  ShieldCheck,
  MessageSquare,
  ShoppingBag,
  ArrowRight,
  Sparkles,
  Search,
  CheckCircle2,
  Check,
  Zap,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

const CATEGORIES = [
  { id: 'all', name: 'All 200+ Integrations' },
  { id: 'payments', name: 'Payments & UPI', icon: CreditCard },
  { id: 'delivery', name: 'Delivery Aggregators', icon: Truck },
  { id: 'accounting', name: 'Tally & Accounting', icon: FileSpreadsheet },
  { id: 'gst', name: 'GST & E-Way Portals', icon: ShieldCheck },
  { id: 'messaging', name: 'WhatsApp & SMS', icon: MessageSquare },
  { id: 'ecommerce', name: 'E-Commerce & ONDC', icon: ShoppingBag },
];

const INTEGRATIONS_DATA = [
  // Payments
  { name: 'UPI & BharatQR', cat: 'payments', desc: 'Direct dynamic QR codes with 0% MDR support', badge: 'Pre-Integrated', time: 'Instant Setup' },
  { name: 'Paytm Business', cat: 'payments', desc: 'Soundbox audio + EDC card swipe terminal', badge: 'Official Partner', time: '1-Click Link' },
  { name: 'PhonePe PG & POS', cat: 'payments', desc: 'QR display, smart speaker and fast checkout', badge: 'Official Partner', time: 'Instant Sync' },
  { name: 'Razorpay POS', cat: 'payments', desc: 'Card swipe, net banking and link payment collection', badge: 'Instant Sync', time: 'Verified' },
  { name: 'Pine Labs Plutus', cat: 'payments', desc: 'Bank credit card EMI and reward points redemption', badge: 'Enterprise', time: 'Direct USB' },
  { name: 'Easy Liner POS', cat: 'payments', desc: 'Multi-bank EDC terminal settlement and reconciliation', badge: 'Enterprise', time: 'Pre-Tested' },

  // Delivery
  { name: 'Swiggy Food & Instamart', cat: 'delivery', desc: 'Auto-accept orders & live menu inventory sync', badge: 'Real-Time', time: '2-Way Sync' },
  { name: 'Zomato Dining & Delivery', cat: 'delivery', desc: 'Direct order punching into kitchen KDS & POS', badge: 'Real-Time', time: '2-Way Sync' },
  { name: 'Dunzo & Borzo Logistics', cat: 'delivery', desc: '1-click rider dispatch for direct customer orders', badge: 'Fast Dispatch', time: 'Instant' },
  { name: 'ONDC Network', cat: 'delivery', desc: 'Sell on open Indian digital commerce network', badge: 'Govt Supported', time: 'Govt Protocol' },

  // Accounting
  { name: 'Tally Prime & ERP 9', cat: 'accounting', desc: 'Automatic day-end sales, purchase & ledger sync', badge: '1-Click XML', time: 'Auto Sync' },
  { name: 'Marg ERP 9+', cat: 'accounting', desc: 'Pharma and FMCG inventory & tax book posting', badge: 'Direct Export', time: '1-Click' },
  { name: 'Busy Accounting', cat: 'accounting', desc: 'Batch and serial number ledger reconciliation', badge: 'Verified', time: 'Direct Sync' },
  { name: 'Zoho Books', cat: 'accounting', desc: 'Cloud chart of accounts and journal entries sync', badge: 'Cloud Sync', time: 'API Webhook' },

  // GST
  { name: 'GSTN Official Portal', cat: 'gst', desc: 'Direct API filing of GSTR-1, GSTR-3B & GSTR-9', badge: 'Govt Compliant', time: 'Direct IRN' },
  { name: 'ClearTax GST', cat: 'gst', desc: 'Automated 2B reconciliation & vendor tax tracking', badge: 'Tax Pro', time: 'Automated' },
  { name: 'NIC E-Way Bill Portal', cat: 'gst', desc: 'Generate E-way bills for goods moving above ₹50,000', badge: 'Automated', time: 'Real-Time' },

  // Messaging
  { name: 'WhatsApp Business API', cat: 'messaging', desc: 'Official green-tick bill PDF delivery & loyalty alerts', badge: 'High Open Rate', time: 'Official API' },
  { name: 'Gupshup SMS Gateway', cat: 'messaging', desc: 'DLT-compliant transactional and promotional SMS', badge: 'DLT Approved', time: 'DLT Ready' },
  { name: 'Kaleyra & Exotel', cat: 'messaging', desc: 'Interactive voice response (IVR) & feedback calls', badge: 'Telecom', time: 'Plug & Play' },

  // E-Commerce
  { name: 'Shopify India', cat: 'ecommerce', desc: 'Omnichannel inventory sync between physical store & site', badge: 'Omnichannel', time: '2-Way Webhook' },
  { name: 'WooCommerce', cat: 'ecommerce', desc: 'Live stock level sync for WordPress online storefronts', badge: '2-Way Sync', time: 'WordPress Plugin' },
  { name: 'KNK Digital Catalog', cat: 'ecommerce', desc: 'QR digital catalog for contactless order-ahead', badge: 'Quick Setup', time: 'Built-in' }
];

export default function IntegrationsPage() {
  const { openDemoModal } = useDemoModal();
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = INTEGRATIONS_DATA.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.cat === selectedCat;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION (Pure White Background, Compact Spacing) */}
      <section className="bg-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
            <Sparkles className="w-3 h-3" /> Unified Ecosystem
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto">
            Connects With 200+ <span className="text-[#FF4C00]">Indian Business Tools</span>
          </h1>

          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Eliminate duplicate data entry. Seamlessly synchronize KNK POS with UPI soundboxes, food aggregators, accounting software, and GST filing portals.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-2">
            <button
              type="button"
              onClick={() => openDemoModal('Integrations')}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Request Custom Integration</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. DIRECTORY SECTION (Clean White Theme, Compact List, No Box Cards) */}
      <section className="py-8 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-start sm:justify-center gap-1.5 overflow-x-auto pb-3 mb-6 no-scrollbar">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCat === cat.id
                    ? 'bg-[#FF4C00] text-white shadow-xs'
                    : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6 relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="Search integration (e.g. Swiggy, Tally, Paytm)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-full bg-white border border-slate-200 text-xs focus:outline-none focus:border-[#FF4C00] shadow-xs"
            />
          </div>

          {/* Clean Directory Table / List (Zero Box Cards) */}
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
            <table className="w-full text-xs text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <th className="p-3 sm:p-3.5">Platform / Tool</th>
                  <th className="p-3 sm:p-3.5">Function &amp; Sync Description</th>
                  <th className="p-3 sm:p-3.5">Type</th>
                  <th className="p-3 sm:p-3.5 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {filtered.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                    <td className="p-3 sm:p-3.5 font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                      <span>{item.name}</span>
                    </td>
                    <td className="p-3 sm:p-3.5 text-slate-600">{item.desc}</td>
                    <td className="p-3 sm:p-3.5">
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700">
                        {item.badge}
                      </span>
                    </td>
                    <td className="p-3 sm:p-3.5 text-right">
                      <span className="text-emerald-700 font-bold text-[11px] bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        {item.time}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-8 text-xs text-slate-500">
              No integrations match your search query &quot;{searchQuery}&quot;.
            </div>
          )}
        </div>
      </section>

      {/* 3. BOTTOM CTA (Pure White Background) */}
      <section className="py-10 bg-white border-t border-slate-100 text-center">
        <div className="max-w-2xl mx-auto px-4 space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            Need a Custom ERP or Aggregator Webhook?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
            Our engineering team builds custom bi-directional APIs for enterprise ERPs, warehouse WMS, and legacy databases.
          </p>
          <div className="pt-1">
            <button
              type="button"
              onClick={() => openDemoModal('Custom API Integration')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF4C00] text-white font-bold text-xs shadow-sm hover:bg-[#de3700] transition-colors"
            >
              <span>Talk to API Engineer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
