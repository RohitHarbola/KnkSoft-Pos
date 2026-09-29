'use client';

import React, { useState } from 'react';
import {
  Check,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { useDemoModal } from '@/context/DemoModalContext';

export const PricingPreview: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const { openDemoModal } = useDemoModal();

  const pricingPlans = [
    {
      id: 'starter',
      name: 'Starter Counter',
      tagline: 'Ideal for single-counter retail shops & quick cafes',
      monthlyPrice: 1299,
      annualPrice: 999,
      popular: false,
      features: [
        '1 Active POS Billing Terminal',
        '100% Offline Mode with Auto Cloud Sync',
        'GST-Compliant Invoicing (HSN auto-slab)',
        'Dynamic UPI QR Payment Generation',
        'Basic Inventory & Stock In/Out tracking',
        'Thermal Printing (2" & 3" paper support)',
        'Phone & WhatsApp Support (9 AM - 8 PM)',
      ],
      ctaText: 'Start 14-Day Free Trial',
    },
    {
      id: 'growth',
      name: 'Growth Outlet',
      tagline: 'Best for busy restaurants, supermarkets & apparel stores',
      monthlyPrice: 2999,
      annualPrice: 2499,
      popular: true,
      badge: '★ Most Popular Across India',
      features: [
        'Up to 3 Simultaneous Billing Counters',
        'Advanced Inventory with Batch, Expiry & Recipe Wastage',
        'Swiggy & Zomato Real-Time Aggregator Sync',
        'Kitchen Display System (KDS) & Waiter Captain App',
        'WhatsApp Digital E-Bills & Customer Loyalty Program',
        'Soundbox & Card Swipe Machine Integration',
        '1-Click CA-Ready GSTR-1 / 3B Export to Tally',
        'Priority 24/7 Phone, WhatsApp & Regional Support'
      ],
      ctaText: 'Start 14-Day Free Trial',
    },
    {
      id: 'enterprise',
      name: 'Enterprise & Multi-Store',
      tagline: 'For fast-scaling franchise brands & multi-city chains',
      monthlyPrice: 5999,
      annualPrice: 4999,
      popular: false,
      features: [
        'Unlimited Counters & Multiple Branch Outlets',
        'Central Warehouse & Inter-Branch Stock Transfers',
        'Global Menu & Centralized Price / Tax Control',
        'Multi-Store Consolidated P&L & Franchise Royalty Hub',
        'Custom ERP / SAP & API Integrations',
        'Dedicated Technical Account Manager & On-Site Setup',
        '99.99% Guaranteed SLA Uptime & Custom Backup Server'
      ],
      ctaText: 'Talk to Sales / Custom Quote',
    }
  ];

  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-inner">
        
        {/* Section Header */}
        <div className="pricing-header">
          <div className="pricing-eyebrow">
            <Sparkles style={{ width: 14, height: 14 }} /> Transparent India Pricing
          </div>
          <h2 className="pricing-title">
            Simple, India-Friendly Pricing. Zero Hidden Fees.
          </h2>
          <p className="pricing-subtitle">
            All plans include a full 14-day free trial with complimentary data import by KNK:SOFT experts. No credit card required.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm font-bold ${!isAnnual ? 'text-[#1A1918]' : 'text-[#9b9089]'}`}>
              Monthly Billing
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-[#1A1918] p-1 transition-colors relative focus:outline-none focus:ring-2 focus:ring-[#FF4C00] cursor-pointer"
              aria-label="Toggle annual pricing"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#FF4C00] transition-transform duration-200 ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#1A1918]' : 'text-[#9b9089]'}`}>
              Annual Billing
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-[#E8FBF0] text-[#1A8041] border border-[#BBF0D1]">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="pricing-cards">
          {pricingPlans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const isGrowth = plan.popular;

            return (
              <div
                key={plan.id}
                className={`pricing-card ${isGrowth ? 'featured' : ''} flex flex-col justify-between`}
              >
                {/* Popular Pill */}
                {isGrowth && (
                  <div className="pricing-popular-badge">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <h3 className="pricing-plan-name">{plan.name}</h3>

                  <p className="pricing-plan-desc min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="pricing-amount">
                    <span className="pricing-amount-currency">₹</span>
                    <span className="pricing-amount-value font-mono">
                      {price.toLocaleString('en-IN')}
                    </span>
                    <span className="pricing-amount-period">/ month</span>
                  </div>
                  <div className="text-[11px] text-[#9b9089] -mt-3 mb-4">
                    {isAnnual ? 'Billed annually (₹' + (price * 12).toLocaleString('en-IN') + '/yr + GST)' : 'Billed monthly + GST'}
                  </div>

                  <hr className="pricing-divider" />

                  {/* Features List */}
                  <div className="mt-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#9b9089] mb-3">
                      What&apos;s Included:
                    </div>
                    <ul className="pricing-features">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="pricing-feature-item">
                          <div className="pricing-feature-check">
                            <Check style={{ width: 12, height: 12, strokeWidth: 3 }} />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card CTA */}
                <div className="mt-6 pt-4 border-t border-[#e8e2de]">
                  <button
                    type="button"
                    onClick={() => openDemoModal(plan.name)}
                    className="pricing-cta"
                  >
                    {plan.ctaText}
                  </button>
                  <p className="text-[11px] text-center text-[#9b9089] mt-2 font-medium">
                    ✓ 14-day free access • Instant setup
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Free Migration Guarantee Strip */}
        <div className="mt-12 p-5 rounded-2xl bg-[#FFF3EF] border border-[#FFD5C2] text-center flex flex-col sm:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-[#565352] font-medium">
          <span className="flex items-center gap-1.5 font-bold text-[#FF4C00]">
            <ShieldCheck style={{ width: 20, height: 20 }} /> 100% Free Assisted Data Migration:
          </span>
          <span>We will transfer all your items, customers, and menu data from Excel, Vyapar, Marg, or Petpooja for free.</span>
        </div>

      </div>
    </section>
  );
};
