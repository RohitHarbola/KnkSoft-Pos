'use client';

import React, { useState, useEffect } from 'react';
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
  CheckCircle2
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const CATEGORIES = [
  { id: 'all', name: 'All 200+ Integrations' },
  { id: 'payments', name: 'Payments & UPI', icon: CreditCard },
  { id: 'delivery', name: 'Food & Parcel Delivery', icon: Truck },
  { id: 'accounting', name: 'Tally & Accounting', icon: FileSpreadsheet },
  { id: 'gst', name: 'GST & E-Way Portals', icon: ShieldCheck },
  { id: 'messaging', name: 'WhatsApp & SMS', icon: MessageSquare },
  { id: 'ecommerce', name: 'E-Commerce & ONDC', icon: ShoppingBag },
];

const INTEGRATIONS_DATA = [
  // Payments
  { name: 'UPI & BharatQR', cat: 'payments', desc: 'Direct dynamic QR codes with 0% MDR support', badge: 'Pre-Integrated' },
  { name: 'Paytm Business', cat: 'payments', desc: 'Soundbox audio + EDC card swipe terminal', badge: 'Official Partner' },
  { name: 'PhonePe PG & POS', cat: 'payments', desc: 'QR display, smart speaker and fast checkout', badge: 'Official Partner' },
  { name: 'Razorpay POS', cat: 'payments', desc: 'Card swipe, net banking and link payment collection', badge: 'Instant Sync' },
  { name: 'Pine Labs Plutus', cat: 'payments', desc: 'Bank credit card EMI and reward points redemption', badge: 'Enterprise' },
 { name: 'Easy Liner', cat: 'payments', desc: 'Bank credit card EMI and reward points redemption', badge: 'Enterprise' },
  // Delivery
  { name: 'Swiggy Food & Instamart', cat: 'delivery', desc: 'Auto-accept orders & live menu inventory sync', badge: 'Real-Time' },
  { name: 'Zomato Dining & Delivery', cat: 'delivery', desc: 'Direct order punching into kitchen KDS & POS', badge: 'Real-Time' },
  { name: 'Dunzo & Borzo Logistics', cat: 'delivery', desc: '1-click rider dispatch for direct customer orders', badge: 'Fast Dispatch' },
  { name: 'ONDC Network', cat: 'delivery', desc: 'Sell on open Indian digital commerce network', badge: 'Govt Supported' },

  // Accounting
  { name: 'Tally Prime & ERP 9', cat: 'accounting', desc: 'Automatic day-end sales, purchase & ledger sync', badge: '1-Click XML' },
  { name: 'Marg ERP 9+', cat: 'accounting', desc: 'Pharma and FMCG inventory & tax book posting', badge: 'Direct Export' },
  { name: 'Busy Accounting', cat: 'accounting', desc: 'Batch and serial number ledger reconciliation', badge: 'Verified' },
  { name: 'Zoho Books', cat: 'accounting', desc: 'Cloud chart of accounts and journal entries sync', badge: 'Cloud Sync' },

  // GST
  { name: 'GSTN Official Portal', cat: 'gst', desc: 'Direct API filing of GSTR-1, GSTR-3B & GSTR-9', badge: 'Govt Compliant' },
  { name: 'ClearTax GST', cat: 'gst', desc: 'Automated 2B reconciliation & vendor tax tracking', badge: 'Tax Pro' },
  { name: 'NIC E-Way Bill Portal', cat: 'gst', desc: 'Generate E-way bills for goods moving above ₹50,000', badge: 'Automated' },

  // Messaging
  { name: 'WhatsApp Business API', cat: 'messaging', desc: 'Official green-tick bill PDF delivery & loyalty alerts', badge: 'High Open Rate' },
  { name: 'Gupshup SMS Gateway', cat: 'messaging', desc: 'DLT-compliant transactional and promotional SMS', badge: 'DLT Approved' },
  { name: 'Kaleyra & Exotel', cat: 'messaging', desc: 'Interactive voice response (IVR) & feedback calls', badge: 'Telecom' },

  // E-Commerce
  { name: 'Shopify India', cat: 'ecommerce', desc: 'Omnichannel inventory sync between physical store & site', badge: 'Omnichannel' },
  { name: 'WooCommerce', cat: 'ecommerce', desc: 'Live stock level sync for WordPress online storefronts', badge: '2-Way Sync' },
  { name: 'KNK Digital Catalog', cat: 'ecommerce', desc: 'QR digital catalog for contactless order-ahead', badge: 'Quick Setup' }
];

export const Integrations: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#integrations') {
      const el = document.getElementById('integrations');
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const filtered = INTEGRATIONS_DATA.filter((item) => {
    const matchesCat = selectedCat === 'all' || item.cat === selectedCat;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="integrations-section" id="integrations">
      <div className="integrations-inner">

        {/* Section Header */}
        <div className="integrations-header">
          <div className="integrations-eyebrow">
            <Sparkles style={{ width: 14, height: 14 }} /> 200+ Plug-and-Play Integrations
          </div>
          <h2 className="integrations-title">
            Connects Seamlessly With Your Existing Tools
          </h2>
          <p className="integrations-subtitle">
            From Swiggy and Zomato to Tally, UPI Soundboxes, and GST portals — KNK POS integrates with the entire Indian software ecosystem out of the box.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCat(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${selectedCat === cat.id
                  ? 'bg-[#FF4C00] text-white shadow-sm'
                  : 'bg-[#f9f5f3] text-[#565352] hover:bg-[#FFF3EF] hover:text-[#FF4C00] border border-[#e8e2de]'
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-3.5" />
          <input
            type="text"
            placeholder="Search integration (e.g. Swiggy, Tally, Paytm)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-[#ffffff] border border-[#e8e2de] text-sm focus:outline-none focus:border-[#FF4C00] shadow-sm"
          />
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#ffffff] p-5 rounded-2xl border border-[#e8e2de] hover:border-[#FF4C00] hover:shadow-md hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="text-base font-bold text-[#1A1918]">{item.name}</div>
                  <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#FFF3EF] text-[#FF4C00] border border-[#FFD5C2]">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-[#565352] font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#e8e2de] flex items-center justify-between text-xs text-[#565352]">
                <span className="flex items-center gap-1 text-[#25C45A] font-semibold text-[11px]">
                  <CheckCircle2 style={{ width: 14, height: 14 }} /> Ready in 1-Click
                </span>
                <Link href="/integrations" className="text-[#FF4C00] font-bold hover:underline">
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
