'use client';

import React from 'react';
import Link from 'next/link';
import {
  Star,
  MapPin,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const CASE_STUDIES = [
  {
    name: 'Sardarji Dhaba & Grill',
    owner: 'Gurpreet Singh',
    city: 'New Delhi (Karol Bagh)',
    type: 'Multi-Floor Restaurant',
    metric: '60% Faster Billing',
    metricSub: 'Table turnaround time dropped from 45 min to 28 min',
    quote:
      'During Sunday dinner rush, our captains used to struggle with paper KOTs and order mix-ups. KNK POS captain app directly syncs with the kitchen display and UPI soundbox. Zero missed orders!',
    badge: 'F&B Case Study',
    color: 'orange'
  },
  {
    name: 'Shree Balaji Supermarket',
    owner: 'Ramesh Patel',
    city: 'Ahmedabad (Satellite)',
    type: '3-Counter Supermarket',
    metric: '₹1.8L Saved Monthly',
    metricSub: 'Zero shrinkage with auto weighing scale sync & batch expiry',
    quote:
      'The FMCG barcode library and electronic weighing scale integration eliminated checkout lines. Our cashier scans 20 items in 30 seconds. Plus, KNK POS offline mode saved us when our fiber internet snapped.',
    badge: 'Retail Case Study',
    color: 'teal'
  },
  {
    name: 'Kashvi Fashion & Ethnic',
    owner: 'Priyanka Iyer',
    city: 'Bengaluru (Jayanagar)',
    type: 'Apparel & Boutique Chain (4 Outlets)',
    metric: '100% Stock Accuracy',
    metricSub: 'Central warehouse inventory transfers & size-matrix barcodes',
    quote:
      'Before KNK POS, finding if a Medium size Kurti was in our Indiranagar or Jayanagar outlet took 15 minutes of calling. Now it’s on our screen in 1 second. WhatsApp loyalty doubled repeat walk-ins.',
    badge: 'Apparel Chain',
    color: 'navy'
  }
];

export const CaseStudies: React.FC = () => {
  return (
    <section className="case-studies-section">
      <div className="case-studies-inner">
        
        {/* Section Header */}
        <div className="case-studies-header">
          <div className="case-studies-eyebrow">
            <Sparkles style={{ width: 14, height: 14 }} /> Real Indian Success Stories
          </div>
          <h2 className="case-studies-title">
            Trusted by Store Owners Across India
          </h2>
          <p className="case-studies-subtitle">
            Discover how retail shops, cafes, and multi-outlet chains transformed their daily billing speed, inventory control, and profit margins with KNK POS by KNK:SOFT.
          </p>
        </div>

        {/* 3-Column Case Studies Grid */}
        <div className="case-studies-grid">
          {CASE_STUDIES.map((item, idx) => (
            <div
              key={idx}
              className="case-study-card flex flex-col justify-between"
            >
              <div>
                {/* Header & Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] border border-[#FFD5C2]">
                    {item.badge}
                  </span>
                  <div className="case-study-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="case-study-star fill-current" />
                    ))}
                  </div>
                </div>

                {/* Big Result Metric Highlight */}
                <div className="p-4 rounded-2xl bg-[#f9f5f3] border border-[#e8e2de] mb-5">
                  <div className="text-2xl font-black text-[#1A1918]">{item.metric}</div>
                  <div className="text-xs font-medium text-[#565352] mt-0.5">{item.metricSub}</div>
                </div>

                {/* Quote */}
                <p className="case-study-quote">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Owner Info & City */}
              <div className="pt-4 border-t border-[#e8e2de]">
                <div className="font-bold text-[#1A1918] text-sm">{item.owner}</div>
                <div className="text-xs font-semibold text-[#FF4C00]">{item.name}</div>
                <div className="text-xs text-[#9b9089] flex items-center gap-1 mt-1">
                  <MapPin style={{ width: 14, height: 14 }} />
                  <span>{item.city}</span>
                </div>

                <div className="mt-4 pt-3 border-t border-[#e8e2de] flex items-center justify-between">
                  <Link
                    href="/case-studies"
                    className="text-xs font-bold text-[#1A1918] hover:text-[#FF4C00] flex items-center gap-1 transition-colors"
                  >
                    Read Full Story <ArrowRight style={{ width: 14, height: 14 }} />
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Proof Bottom Strip */}
        <div className="mt-12 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#1A1918] hover:text-[#FF4C00] transition-colors"
          >
            Explore all 50+ Indian customer interviews &amp; video testimonials <ArrowRight style={{ width: 16, height: 16 }} />
          </Link>
        </div>

      </div>
    </section>
  );
};
