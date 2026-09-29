'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Monitor,
  Printer,
  FileSpreadsheet,
  CheckCircle2,
  TrendingUp,
  ShieldCheck,
  Zap,
  Boxes,
  ArrowRight,
  Download,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

interface ShowcaseSlide {
  id: string;
  badge: string;
  badgeIcon: React.ElementType;
  tabLabel: string;
  title: string;
  description: string;
  features: string[];
  ctaText: string;
  renderPreview: (hoveredCard: string | null, setHoveredCard: (id: string | null) => void) => React.ReactNode;
}

export const ProductUIShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const { openDemoModal } = useDemoModal();

  const SLIDES: ShowcaseSlide[] = [
    {
      id: 'dashboard',
      badge: 'Modern Store Dashboard',
      badgeIcon: Monitor,
      tabLabel: 'Store Dashboard',
      title: 'Real-Time Pulse of Your Entire Business in One View',
      description:
        'Track live net sales, cash-in-drawer reconciliations, active table counts, and hourly sales velocity directly from your billing counter or owner smartphone app.',
      features: [
        'Live cash vs digital UPI payment split with zero reconciliation errors',
        'Cashier shift opening & closing balance tracking with anti-theft audits',
        'Peak hour customer surge predictions and automated staff dispatch',
        'Multi-outlet remote sync for instant franchise overview',
      ],
      ctaText: 'See Live Dashboard Demo',
      renderPreview: (hovered, setHovered) => (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 relative overflow-hidden group">
          {/* Outlet Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200/80">
            <div>
              <div className="text-xs text-slate-500 font-medium">KNK POS: Connaught Place Outlet #01</div>
              <div className="text-xl font-bold text-slate-900 flex items-center gap-2">
                Daily Live Summary <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">
              ● 14 Tables Active
            </span>
          </div>

          {/* Interactive Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
            <div
              onMouseEnter={() => setHovered('revenue')}
              onMouseLeave={() => setHovered(null)}
              className={`p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                hovered === 'revenue'
                  ? 'bg-orange-50/90 border-[#FF4C00] shadow-sm -translate-y-0.5'
                  : 'bg-[#FFF3EF] border-[#FFD5C2]'
              }`}
            >
              <div className="text-xs font-bold text-[#FF4C00] uppercase tracking-wider">Today&apos;s Revenue</div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">₹ 74,850</div>
              <div className="text-xs text-emerald-700 font-medium mt-1 flex items-center gap-1">
                ↑ 24% vs yesterday
              </div>
            </div>

            <div
              onMouseEnter={() => setHovered('invoices')}
              onMouseLeave={() => setHovered(null)}
              className={`p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                hovered === 'invoices'
                  ? 'bg-slate-100 border-slate-400 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">Total Invoices</div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">218 Bills</div>
              <div className="text-xs text-slate-500 font-medium mt-1">Avg ₹343 / bill</div>
            </div>

            <div
              onMouseEnter={() => setHovered('upi')}
              onMouseLeave={() => setHovered(null)}
              className={`p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 cursor-pointer ${
                hovered === 'upi'
                  ? 'bg-emerald-50 border-emerald-400 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="text-xs font-bold text-[#FF4C00] uppercase tracking-wider">UPI / Digital %</div>
              <div className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">82.4%</div>
              <div className="text-xs text-emerald-700 font-medium mt-1">Zero manual error</div>
            </div>
          </div>

          {/* Peak Hour Forecast Bar */}
          <div
            onMouseEnter={() => setHovered('forecast')}
            onMouseLeave={() => setHovered(null)}
            className={`p-4 rounded-xl sm:rounded-2xl bg-slate-900 text-white flex items-center justify-between transition-all duration-300 ${
              hovered === 'forecast' ? 'ring-2 ring-[#FF4C00] shadow-md -translate-y-0.5' : ''
            }`}
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-[#FF4C00] flex items-center justify-center font-bold">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Peak Hour Forecast</div>
                <div className="text-sm font-bold text-white">8:00 PM - 10:30 PM (Dinner Rush)</div>
              </div>
            </div>
            <span className="text-xs font-bold bg-[#FF4C00] text-white px-3 py-1.5 rounded-full shadow-sm">
              Staff Ready
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'billing',
      badge: '0.8s High-Speed Engine',
      badgeIcon: Zap,
      tabLabel: '0.8s Fast Billing',
      title: 'Sub-Second GST Thermal Billing with Dynamic UPI QR',
      description:
        'Equip cashiers with lightning-fast keyboard shortcuts, barcode auto-scanning, and instant print routing to EPSON, TVS, and NGX thermal printers.',
      features: [
        'One-key search by barcode, item name, or short code',
        'Automatic split calculation for CGST, SGST, Cess and round-offs',
        'Customer-facing dynamic UPI QR code generated directly on receipts',
        'Full compatibility with USB, Bluetooth, Ethernet & WiFi printers',
      ],
      ctaText: 'Try Billing Simulator',
      renderPreview: (hovered, setHovered) => (
        <div className="bg-[#0D1117] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white shadow-xl border border-white/10 relative overflow-hidden group">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <Printer className="w-4 h-4 text-[#FF4C00]" />
              <span>KNK THERMAL BILLING ENGINE (EPSON / TVS)</span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-1 rounded-full border border-emerald-500/30">
              ⚡ 0.8s PRINT SPEED
            </span>
          </div>

          {/* Realistic Thermal Receipt Mockup */}
          <div
            onMouseEnter={() => setHovered('receipt')}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white text-slate-900 font-mono text-xs p-5 rounded-2xl shadow-xl max-w-sm mx-auto space-y-2 border transition-all duration-300 ${
              hovered === 'receipt' ? 'scale-[1.02] shadow-2xl ring-2 ring-[#FF4C00]' : 'border-slate-300'
            }`}
          >
            <div className="text-center font-bold pb-2 border-b border-dashed border-slate-400">
              <div className="text-sm font-bold text-slate-900">ANNAPOORNA DELIGHTS</div>
              <div className="text-[10px] text-slate-600">GSTIN: 07AAAAA1111A1Z8 • New Delhi</div>
              <div className="text-[10px] text-slate-500">Tax Invoice • Bill #KNK-9812</div>
            </div>

            <div className="space-y-1 py-2 border-b border-dashed border-slate-400">
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>2x Masala Dosa [HSN:2106]</span>
                <span className="font-bold">₹180.00</span>
              </div>
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>2x Filter Coffee [HSN:0901]</span>
                <span className="font-bold">₹90.00</span>
              </div>
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>1x Ghee Podi Idli [HSN:2106]</span>
                <span className="font-bold">₹85.00</span>
              </div>
            </div>

            <div className="space-y-0.5 pt-1 text-[11px]">
              <div className="flex justify-between text-slate-600">
                <span>Item Subtotal:</span>
                <span>₹355.00</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>CGST (2.5%):</span>
                <span>₹8.88</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>SGST (2.5%):</span>
                <span>₹8.88</span>
              </div>
              <div className="flex justify-between font-bold text-sm pt-1 border-t border-slate-400 text-slate-900">
                <span>TOTAL AMOUNT:</span>
                <span className="text-[#FF4C00]">₹373.00</span>
              </div>
            </div>

            <div className="text-center text-[10px] text-slate-600 pt-2 border-t border-dashed border-slate-400">
              <div className="font-semibold text-emerald-700">✓ Paid via Dynamic UPI QR</div>
              <div className="font-bold text-slate-900 mt-0.5">*** POWERED BY KNK POS ***</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'gst',
      badge: '100% Tax Compliant',
      badgeIcon: ShieldCheck,
      tabLabel: 'GST Tax Engine',
      title: 'CA-Ready GST Reports & E-Invoicing in a Single Click',
      description:
        'Eliminate tedious weekend manual tax reconciliation. Export clean JSON, Excel, and XML files formatted directly for government GST filing portals and accounting suites.',
      features: [
        'Auto-segregated B2B (with buyer GSTIN) and B2C sales ledgers',
        'HSN-wise tax summary with automatic slab breakdown (5%, 12%, 18%, 28%)',
        '1-click direct integration into Tally ERP, Tally Prime & Marg ERP',
        'Automated E-Invoicing with IRN & QR code generation on high-value bills',
      ],
      ctaText: 'Schedule Tax Report Demo',
      renderPreview: (hovered, setHovered) => (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <FileSpreadsheet className="w-5 h-5 text-[#FF4C00]" />
              <span className="font-bold text-slate-900">KNK GSTR-1 Monthly Filing Preview</span>
            </div>
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
              Govt. Offline Tool v3.1
            </span>
          </div>

          {/* Interactive GSTR-1 Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase">
                <tr>
                  <th className="p-2.5 rounded-l-lg">Table Section</th>
                  <th className="p-2.5">Invoice Count</th>
                  <th className="p-2.5">Taxable Value</th>
                  <th className="p-2.5 rounded-r-lg">Total Tax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 font-medium text-slate-900">
                <tr
                  onMouseEnter={() => setHovered('b2b')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'b2b' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2.5 text-slate-900">4A - B2B Regular Invoices</td>
                  <td className="p-2.5 font-bold">42</td>
                  <td className="p-2.5 font-mono">₹ 3,42,800</td>
                  <td className="p-2.5 font-mono text-emerald-700 font-bold">₹ 17,140</td>
                </tr>
                <tr
                  onMouseEnter={() => setHovered('b2c')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'b2c' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2.5 text-slate-900">7 - B2C (Others / Retail)</td>
                  <td className="p-2.5 font-bold">1,280</td>
                  <td className="p-2.5 font-mono">₹ 14,20,500</td>
                  <td className="p-2.5 font-mono text-emerald-700 font-bold">₹ 71,025</td>
                </tr>
                <tr
                  onMouseEnter={() => setHovered('hsn')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'hsn' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2.5 text-slate-900">12 - HSN-Wise Summary</td>
                  <td className="p-2.5 font-bold">64 SKUs</td>
                  <td className="p-2.5 font-mono">₹ 17,63,300</td>
                  <td className="p-2.5 font-mono text-emerald-700 font-bold">₹ 88,165</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-xs text-emerald-800 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 0 Validation Errors Detected. Ready for 1-Click Upload.
            </span>
            <span className="font-bold text-emerald-900 bg-white px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> Download JSON
            </span>
          </div>
        </div>
      ),
    },
    {
      id: 'inventory',
      badge: 'Live Stock Engine',
      badgeIcon: Boxes,
      tabLabel: 'Live Inventory Hub',
      title: 'Batch Expiry Alerts, Matrix Barcodes & Automated Re-Orders',
      description:
        'Never run out of best-sellers or lose money on expired medicine/perishables. Track inventory at the unit, batch, and variant level with automated supplier purchase orders.',
      features: [
        'Color-coded batch expiry alerts with automatic FEFO/FIFO dispatch',
        'Size-Color-Brand barcode matrix generator for apparel and retail',
        'Automated purchase orders generated when stock hits safe threshold',
        'Recipe-level ingredient consumption deduction for F&B restaurants',
      ],
      ctaText: 'Book Inventory Walkthrough',
      renderPreview: (hovered, setHovered) => (
        <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-sm border border-slate-200/80 space-y-4 relative overflow-hidden group">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center gap-2">
              <Boxes className="w-5 h-5 text-[#FF4C00]" />
              <span className="font-bold text-slate-900">Live Inventory Audit &amp; Low-Stock Alerts</span>
            </div>
            <span className="text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
              Auto-Audit Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200/80">
              <div className="text-xs text-slate-500 font-medium">Total Tracked SKUs</div>
              <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-0.5">4,820 Items</div>
              <div className="text-xs text-emerald-700 font-medium mt-0.5">99.8% Accuracy</div>
            </div>
            <div className="p-3.5 bg-amber-50 rounded-xl border border-amber-200">
              <div className="text-xs text-amber-800 font-medium">Low Stock Threshold</div>
              <div className="text-xl sm:text-2xl font-bold text-amber-900 mt-0.5">12 SKUs</div>
              <div className="text-xs text-amber-700 font-medium mt-0.5">Auto-PO Generated</div>
            </div>
            <div className="p-3.5 bg-rose-50 rounded-xl border border-rose-200 col-span-2 sm:col-span-1">
              <div className="text-xs text-rose-800 font-medium">Near Expiry Alert</div>
              <div className="text-xl sm:text-2xl font-bold text-rose-900 mt-0.5">3 Batches</div>
              <div className="text-xs text-rose-700 font-medium mt-0.5">Discount Suggested</div>
            </div>
          </div>

          {/* Stock items preview */}
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl p-4 text-white space-y-2">
            <div className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Fastest Moving SKUs (Today)</span>
              <span className="text-[#FF4C00] text-xs font-medium">Real-time cloud sync</span>
            </div>
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                <span className="font-mono">Amul Gold Milk 500ml</span>
                <span className="text-emerald-400 font-bold">142 Units Sold • 28 In Stock</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-2 rounded-lg">
                <span className="font-mono">Fortune Sunflower Oil 1L</span>
                <span className="text-emerald-400 font-bold">64 Units Sold • 48 In Stock</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  const totalSlides = SLIDES.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentSlide ? 1 : -1);
    setCurrentSlide(idx);
  };

  // Automatic carousel autoplay in 15 seconds (15000ms)
  useEffect(() => {
    autoplayTimerRef.current = setInterval(() => {
      nextSlide();
    }, 15000);

    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [nextSlide]);

  const activeSlide = SLIDES[currentSlide];
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <div className="bg-slate-50/70 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/80 shadow-sm" id="showcase">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header matching FAQ.tsx */}
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 lg:mb-6 text-slate-900">
          See KNK POS in&nbsp;
          <span className="text-[#FF4C00] mt-2 inline-block">Action</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-normal lg:text-lg text-slate-600 text-center mb-10 leading-relaxed">
          Intuitive touch interface crafted by KNK:SOFT INFOTECH so any cashier or store staff can master billing in 5 minutes with zero training.
        </p>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === currentSlide;
              const Icon = slide.badgeIcon;
              return (
                <button
                  key={slide.id}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  onMouseEnter={() => goToSlide(idx)}
                  className={`inline-flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#FF4C00] text-white shadow-md shadow-orange-500/25 scale-100'
                      : 'bg-white text-slate-700 border border-slate-200/80 hover:border-slate-300 hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-500'}`} />
                  <span>{slide.tabLabel}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Animated Slide Body */}
        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: direction * 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -35 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center"
            >
              {/* Left Column: Explanatory copy and interactive triggers */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-[#FF4C00] border border-orange-200 text-xs font-bold uppercase tracking-wider">
                  <BadgeIcon className="w-3.5 h-3.5" /> {activeSlide.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
                  {activeSlide.title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
                  {activeSlide.description}
                </p>

                {/* Checklist Features */}
                <ul className="space-y-2.5 pt-1">
                  {activeSlide.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700"
                    >
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-[#25C45A] border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA Button */}
                <div className="pt-2 sm:pt-3">
                  <button
                    type="button"
                    onClick={() => openDemoModal(activeSlide.tabLabel)}
                    className="inline-flex items-center gap-2 bg-[#FF4C00] hover:bg-[#DE3700] text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
                  >
                    {activeSlide.ctaText} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Right Column: UI Mockup Window */}
              <div className="lg:col-span-7">
                {activeSlide.renderPreview(hoveredCard, setHoveredCard)}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default ProductUIShowcase;
