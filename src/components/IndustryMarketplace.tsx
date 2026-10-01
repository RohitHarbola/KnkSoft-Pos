'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, type Variants } from 'framer-motion';
import {
  UtensilsCrossed,
  ShoppingBag,
  Pill,
  Store,
  Scissors,
  Layers,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Coffee,
  Flame,
  ChefHat,
  Shirt,
  Footprints,
  Tv,
  Stethoscope,
  Activity,
  Apple,
  Boxes,
  Smile,
  ShieldCheck,
  Building2,
  Truck,
  Warehouse
} from 'lucide-react';
import { IndustryMarketplaceCard, type IndustryMarketplaceItem } from './IndustryMarketplaceCard';

export interface IndustryMarketplaceTab {
  id: string;
  label: string;
  tabImage: string;
  tagline: string;
  items: IndustryMarketplaceItem[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: (i: number = 0) => ({
    opacity: 0,
    y: 35,
    transition: {
      delay: i * 0.08,
    },
  }),
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.45,
      ease: 'easeOut',
    },
  }),
};

export const INDUSTRY_MARKETPLACE_TABS: IndustryMarketplaceTab[] = [
  {
    id: 'restaurant',
    label: 'Restaurants, Cafes & QSR',
    tagline: 'Engineered for high-volume F&B speed, automated aggregator sync, and zero order chaos.',
    tabImage: '/home/hp-vision1.png',
    items: [
      {
        id: 'rest-1',
        name: 'Dine-In & Casual Restaurants',
        desc: '3-second Captain app ordering, interactive table layout, and split billing with instant UPI soundbox sync.',
        painPoint: 'Order delays during rush hours and kitchen miscommunication.',
        solution: 'Direct Captain-to-KDS order dispatch with zero handwritten KOT errors.',
        features: ['Table & Token Management', 'Recipe Wastage Tracking', 'Split Bill & Soundbox Sync'],
        badge: 'F&B Specialist',
        icon: UtensilsCrossed,
        href: '/industries/restaurant',
      },
      {
        id: 'rest-2',
        name: 'QSR & Fast Food Counters',
        desc: 'Lightning-fast token generation, live kitchen display screens (KDS), and self-order kiosk sync.',
        painPoint: 'Long counter queues and delayed food delivery tokens.',
        solution: 'Touch-optimized 2-tap billing and automated kitchen token dispatch.',
        features: ['2-Second Quick Billing', 'Kitchen Display System (KDS)', 'Self-Order Kiosk Ready'],
        badge: 'Fast Counter',
        icon: Flame,
        href: '/industries/qsr',
      },
    ],
  },
  {
    id: 'retail',
    label: 'Retail & Apparel Stores',
    tagline: 'Matrix barcode generation, instant size-color lookup, and fast weekend checkout counters.',
    tabImage: '/home/hp-vision2.png',
    items: [
      {
        id: 'ret-1',
        name: 'Fashion & Garment Boutiques',
        desc: 'Matrix barcode generation for size, color, and fabric with instant exchange and credit note management.',
        painPoint: 'Size/color SKU chaos and inventory shrinkage.',
        solution: 'Variant barcode printing with automated stock audits.',
        features: ['Size-Color-Brand Matrix', 'Custom Barcode Printing', 'Fast Exchange & Credit Note'],
        badge: 'High-Volume',
        icon: Shirt,
        href: '/industries/retail',
      },
      {
        id: 'ret-2',
        name: 'Footwear & Accessories Outlets',
        desc: 'Single barcode scanning for box & pair matching, seasonal discount rules, and automated re-ordering triggers.',
        painPoint: 'Mismatched pair returns and slow stock replenishment.',
        solution: 'Pair verification barcodes and vendor purchase orders.',
        features: ['Pair & Box Barcode Scan', 'Dynamic Promotional Pricing', 'Automated Purchase Orders'],
        badge: 'Footwear POS',
        icon: Footprints,
        href: '/industries/retail',
      },
    ],
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy & Medical Stores',
    tagline: '100% compliant drug retail with batch expiry alerts, salt substitution, and Schedule H records.',
    tabImage: '/home/hp-vision3.png',
    items: [
      {
        id: 'pharma-1',
        name: 'Retail Chemists & Druggists',
        desc: 'Batch-wise expiry auto-alerts, salt substitute lookup, and fraction billing for loose tablets & strips.',
        painPoint: 'Expiring drug losses and manual strip-to-tablet calculations.',
        solution: 'Real-time color-coded expiry alerts and instant salt substitute finder.',
        features: ['Batch & Expiry Date Alerts', 'Strip to Tab Fraction Billing', 'Generic Substitute Finder'],
        badge: 'Pharma Certified',
        icon: Pill,
        href: '/industries/pharmacy',
      },
      {
        id: 'pharma-2',
        name: 'Schedule H / H1 Regulatory Compliance',
        desc: 'Automatic doctor prescription recording, narcotic registry logs, and audit-ready drug authority reports.',
        painPoint: 'Strict compliance penalties and manual drug registers.',
        solution: 'Digital doctor & patient prescription linkage during billing.',
        features: ['Schedule H / H1 Logs', 'Doctor & Rx Verification', 'Audit-Ready Drug Reports'],
        badge: '100% Compliant',
        icon: ShieldCheck,
        href: '/industries/pharmacy',
      },
    ],
  },
  {
    id: 'salon',
    label: 'Salon, Spa & Beauty Clinics',
    tagline: 'Visual appointment calendar, automated therapist commission payouts, and membership package wallets.',
    tabImage: '/home/hp-vision2.png',
    items: [
      {
        id: 'sal-1',
        name: 'Hair Salons & Beauty Parlours',
        desc: 'Visual stylist appointment calendar, automated staff commission payouts, and service package management.',
        painPoint: 'Double-booked stylists and confusing commission calculations.',
        solution: 'Color-coded appointment grid with automatic therapist commission splits.',
        features: ['Staff Commission Auto-Calc', 'WhatsApp Reminders', 'Pre-paid Package / Wallet'],
        badge: 'Service & Spa',
        icon: Scissors,
        href: '/industries/salon',
      },
      {
        id: 'sal-2',
        name: 'Luxury Spa & Wellness Centers',
        desc: 'Therapy room allocation, consumable product usage deduction, and customized package packages.',
        painPoint: 'Unrecorded massage oil consumables and room scheduling overlap.',
        solution: 'Automated consumable inventory deduction per treatment.',
        features: ['Room & Bed Allocation', 'Service Consumable Deduction', 'Custom Wellness Packages'],
        badge: 'Spa Hub',
        icon: Smile,
        href: '/industries/salon',
      },
    ],
  },
];

export const IndustryMarketplace: React.FC = () => {
  const [activeTab, setActiveTab] = useState('restaurant');
  const [showScrollButtons, setShowScrollButtons] = useState(false);
  const tabsListRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (tabsListRef.current) {
        const { scrollWidth, clientWidth } = tabsListRef.current;
        setShowScrollButtons(scrollWidth > clientWidth);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTabClick = useCallback((id: string) => {
    setActiveTab(id);
  }, []);

  const handleTabHover = useCallback(
    (id: string) => {
      if (isDesktop) {
        setActiveTab(id);
      }
    },
    [isDesktop]
  );

  const scrollTabs = useCallback((direction: 'left' | 'right') => {
    if (tabsListRef.current) {
      const scrollAmount = 240;
      const currentScroll = tabsListRef.current.scrollLeft;
      tabsListRef.current.scrollTo({
        left: direction === 'left' ? currentScroll - scrollAmount : currentScroll + scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  const currentTab =
    INDUSTRY_MARKETPLACE_TABS.find((tab) => tab.id === activeTab) ||
    INDUSTRY_MARKETPLACE_TABS[0];

  return (
    <section className="py-10 sm:py-12 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-b border-slate-200/80 relative overflow-hidden" id="industries">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 text-[#FF8C00] border border-orange-200/60 text-[11px] font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" /> Tailored For Indian Trade &amp; Retail
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            Our Innovative Solutions For Every{' '}
            <span className="text-[#FF8C00] block sm:inline">Industry &amp; Marketplace</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-normal leading-relaxed">
            We specialize in transforming complex trade workflows into effortless billing realities. Explore tailored POS architectures crafted specifically for your industry.
          </p>
        </div>

        {/* Scrollable Tabs Navigation */}
        <div className="relative mb-6 sm:mb-7">
          {showScrollButtons && (
            <>
              <button
                type="button"
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-md hover:bg-white text-slate-700 hover:text-[#FF8C00] border border-slate-200 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-1.5 rounded-full shadow-md hover:bg-white text-slate-700 hover:text-[#FF8C00] border border-slate-200 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          )}

          <div
            ref={tabsListRef}
            className="overflow-x-auto scrollbar-hide py-1.5 px-1 flex items-center justify-start lg:justify-center gap-2"
          >
            <div className="inline-flex p-1 bg-slate-200/60 backdrop-blur-sm rounded-full border border-slate-200 gap-1 shadow-inner">
              {INDUSTRY_MARKETPLACE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    onMouseEnter={() => handleTabHover(tab.id)}
                    className={`px-3.5 py-1.5 sm:px-4.5 sm:py-2 rounded-full text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#FF8C00] text-white shadow-sm shadow-orange-500/30 scale-100'
                        : 'bg-transparent text-slate-700 hover:text-slate-900 hover:bg-white/60'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Tab Content & 2-Column Showcase */}
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
            {/* Left 2-Card Grid (7 Columns on large screens) */}
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 items-start"
            >
              {currentTab.items.slice(0, 2).map((item, index) => (
                <IndustryMarketplaceCard
                  key={item.id}
                  item={item}
                  variants={itemVariants}
                  custom={index}
                />
              ))}
            </motion.div>

            {/* Right Visual Showcase Card (5 Columns on large screens) */}
            <motion.div
              key={`showcase-${activeTab}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:flex flex-col justify-center bg-white border border-slate-200/90 rounded-2xl p-3 sm:p-4 shadow-sm relative overflow-hidden self-stretch"
            >
              {/* Showcase Image */}
              <div className="relative flex-1 rounded-xl overflow-hidden bg-slate-50 border border-slate-200/80 p-1 flex items-center justify-center min-h-[220px]">
                <Image
                  src={currentTab.tabImage}
                  alt={`${currentTab.label} showcase`}
                  width={500}
                  height={320}
                  className="w-full h-full object-contain rounded-lg transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
