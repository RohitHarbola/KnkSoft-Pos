'use client';

import React from 'react';
import Link from 'next/link';
import {
  UtensilsCrossed,
  ShoppingBag,
  Pill,
  Store,
  Scissors,
  Layers,
  ArrowRight,
  Sparkles,
  Check
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useDemoModal } from '@/context/DemoModalContext';

const INDUSTRIES_DATA = [
  {
    id: 'restaurant',
    name: 'Restaurants, Cafes & QSR',
    icon: UtensilsCrossed,
    color: 'orange',
    href: '/industries/restaurant',
    painPoint: 'Order delays during rush hours, Swiggy/Zomato menu mismatches, kitchen miscommunication.',
    solution: '3-second Captain app ordering, Kitchen Display System (KDS), and direct aggregator sync.',
    features: ['Table & Token Management', 'Swiggy / Zomato Auto-Punch', 'Recipe & Ingredient Wastage', 'Split Bill & UPI Soundbox'],
    badge: 'F&B Specialist'
  },
  {
    id: 'retail',
    name: 'Retail & Apparel Stores',
    icon: ShoppingBag,
    color: 'navy',
    href: '/industries/retail',
    painPoint: 'Size/color/brand SKU chaos, slow barcode scanning during weekends, inventory shrinkage.',
    solution: 'Matrix barcode generation, instant exchange/credit notes, and loyalty WhatsApp integration.',
    features: ['Size-Color-Brand Matrix', 'Custom Barcode Printing', 'Fast Exchange & Credit Note', 'Customer Points via WhatsApp'],
    badge: 'High-Volume'
  },
  {
    id: 'pharmacy',
    name: 'Pharmacy & Medical Stores',
    icon: Pill,
    color: 'teal',
    href: '/industries/pharmacy',
    painPoint: 'Expiring drug losses, strict Schedule H/H1 drug compliance, manual strip/tablet conversion.',
    solution: 'Batch-wise expiry auto-alerts, salt substitute lookup, and 100% compliant GST drug invoicing.',
    features: ['Batch & Expiry Date Alerts', 'Strip to Tab Fraction Billing', 'Schedule H Compliance', 'Generic Substitute Finder'],
    badge: 'Pharma Certified'
  },
  {
    id: 'grocery',
    name: 'Kirana & Supermarkets',
    icon: Store,
    color: 'orange',
    href: '/industries/grocery',
    painPoint: 'Long checkout queues, manual weighing of pulses/grains, loose inventory loss.',
    solution: 'Direct electronic weighing scale sync, 50,000+ pre-loaded FMCG barcode database.',
    features: ['Weighing Scale Auto-Sync', '50,000+ Pre-loaded FMCG SKUs', 'Offline Kirana Quick Tap', 'Khata & Credit Ledger'],
    badge: 'Kirana Friendly'
  },
  {
    id: 'salon',
    name: 'Salon, Spa & Beauty Clinics',
    icon: Scissors,
    color: 'teal',
    href: '/industries/salon',
    painPoint: 'Double-booked stylists, confusing therapist commission calculations, forgotten client memberships.',
    solution: 'Visual appointment calendar, automated therapist payouts, and membership package tracking.',
    features: ['Staff Commission Auto-Calc', 'WhatsApp Appointment Reminders', 'Pre-paid Package / Wallet', 'Client Service History'],
    badge: 'Service & Spa'
  },
  {
    id: 'multistore',
    name: 'Multi-Store & Franchise Hub',
    icon: Layers,
    color: 'navy',
    href: '/product/multi-store',
    painPoint: 'Discrepancies across outlets, delayed consolidated sales reports, inconsistent pricing.',
    solution: 'Centralized cloud control for menu, pricing, stock transfers, and branch-wise profit tracking.',
    features: ['Central Warehouse & Stock Transfer', 'Outlet-Wise Profit & Loss', 'Global Menu / Price Push', 'Role-Based Staff Permissions'],
    badge: 'Enterprise Hub'
  }
];

export const IndustrySelector: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="industry-selector-section">
      <div className="industry-selector-inner">
        
        {/* Section Header */}
        <div className="industry-selector-header">
          <div className="industry-selector-eyebrow">
            <Sparkles style={{ width: 14, height: 14 }} /> Tailored For Indian Trade
          </div>
          <h2 className="industry-selector-title">
            Built for Your Specific Industry Workflow
          </h2>
          <p className="industry-selector-subtitle">
            One size doesn&apos;t fit all. Whether you run a high-table restaurant, a kirana store, or a 10-outlet retail chain, KNK POS comes customized for your daily operations.
          </p>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="industry-cards-grid">
          {INDUSTRIES_DATA.map((ind) => {
            const Icon = ind.icon;
            return (
              <div
                key={ind.id}
                className="industry-card flex flex-col justify-between"
              >
                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="industry-card-icon-wrap">
                      <Icon style={{ width: 24, height: 24 }} />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#f9f5f3] text-[#565352] border border-[#e8e2de]">
                      {ind.badge}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="industry-card-name">
                    {ind.name}
                  </h3>

                  {/* Pain Point Callout */}
                  <div className="industry-card-feat-preview">
                    <strong className="text-[#1A1918] block mb-0.5 font-bold">Solves the bottleneck of:</strong>
                    {ind.painPoint}
                  </div>

                  {/* Key Features list */}
                  <div className="mt-4 space-y-2">
                    {ind.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-[#565352]">
                        <Check style={{ width: 14, height: 14, color: '#FF4C00', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="pt-5 mt-5 border-t border-[#e8e2de] flex items-center justify-between">
                  <Link
                    href={ind.href}
                    className="industry-card-link"
                  >
                    View Features <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>

                  <button
                    onClick={() => openDemoModal(ind.name)}
                    className="text-xs font-bold text-[#FF4C00] hover:text-[#DE3700] cursor-pointer"
                  >
                    Free Demo
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
