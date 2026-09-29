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
        desc: '3-second Captain app ordering, interactive table status layout, and split billing with instant UPI soundbox receipts.',
        painPoint: 'Order delays during rush hours and kitchen miscommunication.',
        solution: 'Direct Captain-to-KDS order dispatch with zero handwritten KOT errors.',
        features: ['Table & Token Management', 'Recipe & Ingredient Wastage Tracking', 'Split Bill & UPI Soundbox Sync'],
        badge: 'F&B Specialist',
        icon: UtensilsCrossed,
        href: '/industries/restaurant',
      },
      {
        id: 'rest-2',
        name: 'QSR & Fast Food Counters',
        desc: 'Lightning-fast token generation, live kitchen display screens (KDS), and customer-facing order status displays.',
        painPoint: 'Long counter queues and delayed food delivery tokens.',
        solution: 'Touch-optimized 2-tap billing and automated kitchen token dispatch.',
        features: ['2-Second Quick Billing', 'Kitchen Display System (KDS)', 'Self-Order Kiosk Ready'],
        badge: 'Fast Counter',
        icon: Flame,
        href: '/industries/qsr',
      },
      {
        id: 'rest-3',
        name: 'Cafes, Bakeries & Desserts',
        desc: 'Combo pricing, custom modifier menus, barista ticket routing, and instant digital WhatsApp receipts.',
        painPoint: 'Complex beverage customizations and pastry expiry tracking.',
        solution: 'Modifier matrix for syrups/sizes and item-level shelf-life tracking.',
        features: ['Add-On & Modifier Matrix', 'Batch Expiry for Baked Goods', 'WhatsApp Loyalty Stamps'],
        badge: 'Cafe Ready',
        icon: Coffee,
        href: '/industries/cafe',
      },
      {
        id: 'rest-4',
        name: 'Cloud Kitchens & Dark Food Hubs',
        desc: 'Multi-brand single terminal order management with bi-directional Swiggy and Zomato auto-punching.',
        painPoint: 'Swiggy/Zomato menu mismatches and tablet clutter.',
        solution: 'Unified aggregator dashboard with auto-rider dispatch sync.',
        features: ['Swiggy / Zomato Auto-Punch', 'Central Menu & Price Control', 'Rider Handover Tracking'],
        badge: 'Multi-Brand',
        icon: ChefHat,
        href: '/industries/restaurant',
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
      {
        id: 'ret-3',
        name: 'Department & Lifestyle Stores',
        desc: 'High-throughput multi-lane checkout with thermal printer support, magnetic security tag alerts, and gift cards.',
        painPoint: 'Weekend checkout rush and gift coupon validation delays.',
        solution: 'Multi-cashier lane balancing and real-time coupon validation.',
        features: ['Multi-Lane Concurrent Billing', 'Gift Vouchers & Points', 'Staff Shift Handover Audit'],
        badge: 'Multi-Lane',
        icon: ShoppingBag,
        href: '/industries/retail',
      },
      {
        id: 'ret-4',
        name: 'Electronics & Hardware Retail',
        desc: 'Serial number and IMEI warranty tracking, AMC service contracts, and GST e-way bill generation.',
        painPoint: 'Warranty disputes and complex serial number logs.',
        solution: 'Instant IMEI search with warranty certificate printing on invoices.',
        features: ['Serial Number & IMEI Tracking', 'Automated Warranty Verification', 'E-Way Bill Direct Generation'],
        badge: 'Serial & IMEI',
        icon: Tv,
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
      {
        id: 'pharma-3',
        name: 'Clinic & Hospital Pharmacies',
        desc: 'IPD/OPD patient billing integration, insurance claim itemization, and doctor consultation sync.',
        painPoint: 'Disjointed hospital records and delayed insurance invoices.',
        solution: 'Central hospital management system (HMS) integration.',
        features: ['IPD / OPD Patient Sync', 'Insurance Itemized Invoices', 'Doctor Consultation Fees'],
        badge: 'Hospital Sync',
        icon: Stethoscope,
        href: '/industries/pharmacy',
      },
      {
        id: 'pharma-4',
        name: 'Surgical & Healthcare Supplies',
        desc: 'Bulk carton-to-unit conversion, GST rate split for medical equipment, and wholesale distribution billing.',
        painPoint: 'Complex mixed GST tax brackets and carton breakdown.',
        solution: 'Pre-configured GST rates with bulk master pack conversions.',
        features: ['Carton to Unit Breakdown', 'Mixed GST Tax Invoicing', 'Wholesale B2B Rate Slates'],
        badge: 'Surgical & B2B',
        icon: Activity,
        href: '/industries/pharmacy',
      },
    ],
  },
  // {
  //   id: 'grocery',
  //   label: 'Kirana & Supermarkets',
  //   tagline: 'Direct electronic weighing scale sync, 50,000+ FMCG barcode database, and offline khata ledgers.',
  //   tabImage: '/home/hp-vision4.png',
  //   items: [
  //     {
  //       id: 'groc-1',
  //       name: 'Modern Kirana & Provision Stores',
  //       desc: '50,000+ pre-loaded FMCG barcode database, 100% offline quick-tap billing, and customer Khata digital ledger.',
  //       painPoint: 'Slow barcode setup and loose inventory credit tracking.',
  //       solution: 'Ready-to-use FMCG catalog and automated WhatsApp payment reminders.',
  //       features: ['50,000+ Pre-loaded FMCG SKUs', 'Offline Kirana Quick Tap', 'Khata & Credit Ledger'],
  //       badge: 'Kirana Friendly',
  //       icon: Store,
  //       href: '/industries/grocery',
  //     },
  //     {
  //       id: 'groc-2',
  //       name: 'Multi-Aisle Supermarkets & Marts',
  //       desc: 'Barcode price computing scales, multi-counter lane sync, cash drawer reconciliation, and loyalty points.',
  //       painPoint: 'Long billing lines on weekends and cashier cash mismatches.',
  //       solution: 'High-speed barcode scanner integration and shift-end cash drawer reports.',
  //       features: ['Electronic Scale Integration', 'Multi-Lane Cashier Sync', 'Shift Cash Reconciliation'],
  //       badge: 'High-Volume Mart',
  //       icon: ShoppingBag,
  //       href: '/industries/grocery',
  //     },
  //     {
  //       id: 'groc-3',
  //       name: 'Organic & Fresh Fruit/Vegetable Marts',
  //       desc: 'Direct USB/Serial electronic weighing scale sync, tare weight auto-deduction, and perishable shrinkage logs.',
  //       painPoint: 'Manual weight entry errors and high vegetable wastage.',
  //       solution: 'Instant weight capture from scale and daily wastage markdown reports.',
  //       features: ['Direct Weighing Scale Sync', 'Auto Tare Weight Deduction', 'Perishable Spoilage Audit'],
  //       badge: 'Weighing Scale',
  //       icon: Apple,
  //       href: '/industries/grocery',
  //     },
  //     {
  //       id: 'groc-4',
  //       name: 'Wholesale FMCG & Grain Traders',
  //       desc: 'Bag/sack bulk quantity conversion, tiered wholesale pricing for regular retailers, and credit limits.',
  //       painPoint: 'Manual calculating of bag discounts and credit default risks.',
  //       solution: 'Tiered wholesale price levels and automated credit limit block.',
  //       features: ['Bag to Kg Unit Conversion', 'Tiered Customer Price Lists', 'Credit Limit Hard Stops'],
  //       badge: 'Wholesale B2B',
  //       icon: Boxes,
  //       href: '/industries/grocery',
  //     },
  //   ],
  // },
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
        features: ['Staff Commission Auto-Calc', 'WhatsApp Appointment Reminders', 'Pre-paid Package / Wallet'],
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
      {
        id: 'sal-3',
        name: 'Aesthetic & Skin Care Clinics',
        desc: 'Client skin consultation history, before/after photo records, doctor prescription integration, and follow-up reminders.',
        painPoint: 'Lost client treatment history and missed follow-up appointments.',
        solution: 'Digital client medical profile and automated WhatsApp follow-up alerts.',
        features: ['Client Treatment History', 'Automated WhatsApp Reminders', 'Doctor Consultation Fees'],
        badge: 'Clinical Care',
        icon: Stethoscope,
        href: '/industries/salon',
      },
      {
        id: 'sal-4',
        name: 'Unisex Grooming & Barber Studios',
        desc: 'Walk-in queue management tokens, fast chair billing, staff tips tracking, and loyalty stamp rewards.',
        painPoint: 'Crowded weekend waiting areas and untracked staff tip sharing.',
        solution: 'SMS queue notification tokens and transparent staff tips accounting.',
        features: ['Walk-in Token Queue', 'Transparent Staff Tip Tracking', 'Digital Loyalty Stamps'],
        badge: 'Quick Grooming',
        icon: Scissors,
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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50/70 border-t border-b border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 text-[#FF8C00] border border-orange-200/60 text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Tailored For Indian Trade &amp; Retail
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our Innovative Solutions For Every{' '}
            <span className="text-[#FF8C00] block sm:inline">Industry &amp; Marketplace</span>
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            We specialize in transforming complex trade workflows into effortless billing realities. Explore tailored POS architectures crafted specifically for your industry.
          </p>
        </div>

        {/* Scrollable Tabs Navigation */}
        <div className="relative mb-10 sm:mb-12">
          {showScrollButtons && (
            <>
              <button
                type="button"
                onClick={() => scrollTabs('left')}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white text-slate-700 hover:text-[#FF8C00] border border-slate-200 transition-all"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scrollTabs('right')}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/95 backdrop-blur-md p-2 rounded-full shadow-md hover:bg-white text-slate-700 hover:text-[#FF8C00] border border-slate-200 transition-all"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          <div
            ref={tabsListRef}
            className="overflow-x-auto scrollbar-hide py-2 px-1 flex items-center justify-start lg:justify-center gap-2"
          >
            <div className="inline-flex p-1.5 bg-slate-200/60 backdrop-blur-sm rounded-full border border-slate-200 gap-1.5 shadow-inner">
              {INDUSTRY_MARKETPLACE_TABS.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleTabClick(tab.id)}
                    onMouseEnter={() => handleTabHover(tab.id)}
                    className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? 'bg-[#FF8C00] text-white shadow-md shadow-orange-500/30 scale-100'
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
          {/* Tagline for active category */}
          {/* <div className="mb-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF8C00] bg-orange-100/60 px-3 py-1 rounded-md border border-orange-200/50 mr-2">
              {currentTab.label}
            </span>
            <span className="text-sm font-medium text-slate-600 mt-1 sm:mt-0 inline-block">
              {currentTab.tagline}
            </span>
          </div> */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 4-Card Grid (7 Columns on large screens) */}
            <motion.div
              key={activeTab}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5"
            >
              {currentTab.items.map((item, index) => (
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
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="lg:col-span-5 hidden lg:flex flex-col bg-white border border-slate-200/90 rounded-3xl p-6 shadow-lg relative overflow-hidden"
            >

              {/* Showcase Image */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/80 p-2 flex items-center justify-center">
                <Image
                  src={currentTab.tabImage}
                  alt={`${currentTab.label} showcase`}
                  width={520}
                  height={360}
                  className="w-full h-auto object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>

              {/* Quick highlight points */}
              <div className="mt-6 grid grid-cols-2 gap-3 pt-5 border-t border-slate-100">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-base font-black text-slate-900">0.5s</div>
                  <div className="text-[11px] text-slate-500 font-medium">Barcode Scan Speed</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-base font-black text-[#FF4C00]">100%</div>
                  <div className="text-[11px] text-slate-500 font-medium">GST &amp; Audit Ready</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};
