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
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 relative overflow-hidden group">
          {/* Outlet Header */}
          <div className="flex items-center justify-between pb-2.5 mb-3.5 border-b border-slate-200/80">
            <div>
              <div className="text-[10px] text-slate-500 font-medium">KNK POS: Connaught Place Outlet #01</div>
              <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                Daily Live Summary <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-sm">
              ● 14 Tables Active
            </span>
          </div>

          {/* Interactive Metric Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-3.5">
            <div
              onMouseEnter={() => setHovered('revenue')}
              onMouseLeave={() => setHovered(null)}
              className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                hovered === 'revenue'
                  ? 'bg-orange-50/90 border-[#FF4C00] shadow-sm -translate-y-0.5'
                  : 'bg-[#FFF3EF] border-[#FFD5C2]'
              }`}
            >
              <div className="text-[10px] font-bold text-[#FF4C00] uppercase tracking-wider">Today&apos;s Revenue</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">₹ 74,850</div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5 flex items-center gap-0.5">
                ↑ 24% vs yesterday
              </div>
            </div>

            <div
              onMouseEnter={() => setHovered('invoices')}
              onMouseLeave={() => setHovered(null)}
              className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                hovered === 'invoices'
                  ? 'bg-slate-100 border-slate-400 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">Total Invoices</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">218 Bills</div>
              <div className="text-[10px] text-slate-500 font-medium mt-0.5">Avg ₹343 / bill</div>
            </div>

            <div
              onMouseEnter={() => setHovered('upi')}
              onMouseLeave={() => setHovered(null)}
              className={`p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                hovered === 'upi'
                  ? 'bg-emerald-50 border-emerald-400 shadow-sm -translate-y-0.5'
                  : 'bg-slate-50 border-slate-200/80'
              }`}
            >
              <div className="text-[10px] font-bold text-[#FF4C00] uppercase tracking-wider">UPI / Digital %</div>
              <div className="text-lg sm:text-xl font-bold text-slate-900 mt-0.5">82.4%</div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5">Zero manual error</div>
            </div>
          </div>

          {/* Peak Hour Forecast Bar */}
          <div
            onMouseEnter={() => setHovered('forecast')}
            onMouseLeave={() => setHovered(null)}
            className={`p-3 rounded-xl bg-slate-900 text-white flex items-center justify-between transition-all duration-300 ${
              hovered === 'forecast' ? 'ring-2 ring-[#FF4C00] shadow-md -translate-y-0.5' : ''
            }`}
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-[#FF4C00] flex items-center justify-center font-bold">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Peak Hour Forecast</div>
                <div className="text-xs font-bold text-white">8:00 PM - 10:30 PM (Dinner Rush)</div>
              </div>
            </div>
            <span className="text-[10px] font-bold bg-[#FF4C00] text-white px-2.5 py-1 rounded-full shadow-sm">
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
        <div className="bg-[#0D1117] rounded-xl sm:rounded-2xl p-4 sm:p-5 text-white shadow-lg border border-white/10 relative overflow-hidden group">
          {/* Header */}
          <div className="flex items-center justify-between pb-2.5 mb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-400">
              <Printer className="w-3.5 h-3.5 text-[#FF4C00]" />
              <span>KNK THERMAL BILLING (EPSON / TVS)</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-500/30">
              ⚡ 0.8s PRINT SPEED
            </span>
          </div>

          {/* Realistic Thermal Receipt Mockup */}
          <div
            onMouseEnter={() => setHovered('receipt')}
            onMouseLeave={() => setHovered(null)}
            className={`bg-white text-slate-900 font-mono text-xs p-3.5 rounded-xl shadow-md max-w-xs mx-auto space-y-1.5 border transition-all duration-300 ${
              hovered === 'receipt' ? 'scale-[1.01] shadow-xl ring-2 ring-[#FF4C00]' : 'border-slate-300'
            }`}
          >
            <div className="text-center font-bold pb-1.5 border-b border-dashed border-slate-300">
              <div className="text-xs font-bold text-slate-900">ANNAPOORNA DELIGHTS</div>
              <div className="text-[9px] text-slate-600">GSTIN: 07AAAAA1111A1Z8 • New Delhi</div>
              <div className="text-[9px] text-slate-500">Tax Invoice • Bill #KNK-9812</div>
            </div>

            <div className="space-y-0.5 py-1.5 border-b border-dashed border-slate-300 text-[10px]">
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>2x Masala Dosa [2106]</span>
                <span className="font-bold">₹180.00</span>
              </div>
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>2x Filter Coffee [0901]</span>
                <span className="font-bold">₹90.00</span>
              </div>
              <div className="flex justify-between hover:bg-orange-50 px-1 rounded transition-colors">
                <span>1x Ghee Podi Idli [2106]</span>
                <span className="font-bold">₹85.00</span>
              </div>
            </div>

            <div className="space-y-0.5 pt-0.5 text-[9px]">
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
              <div className="flex justify-between font-bold text-xs pt-0.5 border-t border-slate-300 text-slate-900">
                <span>TOTAL AMOUNT:</span>
                <span className="text-[#FF4C00]">₹373.00</span>
              </div>
            </div>

            <div className="text-center text-[9px] text-slate-600 pt-1.5 border-t border-dashed border-slate-300">
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
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 space-y-3 relative overflow-hidden group">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
            <div className="flex items-center gap-1.5">
              <FileSpreadsheet className="w-4 h-4 text-[#FF4C00]" />
              <span className="text-xs sm:text-sm font-bold text-slate-900">KNK GSTR-1 Monthly Filing</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              Govt. Offline Tool v3.1
            </span>
          </div>

          {/* Interactive GSTR-1 Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-[11px] text-left">
              <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[10px]">
                <tr>
                  <th className="p-2 rounded-l-lg">Table Section</th>
                  <th className="p-2">Count</th>
                  <th className="p-2">Taxable Value</th>
                  <th className="p-2 rounded-r-lg">Total Tax</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/80 font-medium text-slate-900">
                <tr
                  onMouseEnter={() => setHovered('b2b')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'b2b' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2 text-slate-900">4A - B2B Regular</td>
                  <td className="p-2 font-bold">42</td>
                  <td className="p-2 font-mono">₹ 3,42,800</td>
                  <td className="p-2 font-mono text-emerald-700 font-bold">₹ 17,140</td>
                </tr>
                <tr
                  onMouseEnter={() => setHovered('b2c')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'b2c' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2 text-slate-900">7 - B2C Retail</td>
                  <td className="p-2 font-bold">1,280</td>
                  <td className="p-2 font-mono">₹ 14,20,500</td>
                  <td className="p-2 font-mono text-emerald-700 font-bold">₹ 71,025</td>
                </tr>
                <tr
                  onMouseEnter={() => setHovered('hsn')}
                  onMouseLeave={() => setHovered(null)}
                  className={`transition-colors cursor-pointer ${hovered === 'hsn' ? 'bg-orange-50/70 font-bold' : ''}`}
                >
                  <td className="p-2 text-slate-900">12 - HSN-Wise</td>
                  <td className="p-2 font-bold">64 SKUs</td>
                  <td className="p-2 font-mono">₹ 17,63,300</td>
                  <td className="p-2 font-mono text-emerald-700 font-bold">₹ 88,165</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-2.5 bg-emerald-50 rounded-xl border border-emerald-200 flex items-center justify-between text-[11px] text-emerald-800 font-medium">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> 0 Errors Detected. Ready for Upload.
            </span>
            <span className="font-bold text-emerald-900 bg-white px-2.5 py-0.5 rounded-full shadow-sm flex items-center gap-1 text-[10px]">
              <Download className="w-3 h-3" /> Download JSON
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
        <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-5 shadow-sm border border-slate-200/80 space-y-3 relative overflow-hidden group">
          <div className="flex items-center justify-between pb-2 border-b border-slate-200/80">
            <div className="flex items-center gap-1.5">
              <Boxes className="w-4 h-4 text-[#FF4C00]" />
              <span className="text-xs sm:text-sm font-bold text-slate-900">Live Inventory Audit &amp; Alerts</span>
            </div>
            <span className="text-[10px] font-bold text-orange-700 bg-orange-50 px-2 py-0.5 rounded-full border border-orange-200">
              Auto-Audit Active
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200/80">
              <div className="text-[10px] text-slate-500 font-medium">Total SKUs</div>
              <div className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">4,820 Items</div>
              <div className="text-[10px] text-emerald-700 font-medium mt-0.5">99.8% Accuracy</div>
            </div>
            <div className="p-2.5 bg-amber-50 rounded-lg border border-amber-200">
              <div className="text-[10px] text-amber-800 font-medium">Low Stock</div>
              <div className="text-base sm:text-lg font-bold text-amber-900 mt-0.5">12 SKUs</div>
              <div className="text-[10px] text-amber-700 font-medium mt-0.5">Auto-PO Ready</div>
            </div>
            <div className="p-2.5 bg-rose-50 rounded-lg border border-rose-200 col-span-2 sm:col-span-1">
              <div className="text-[10px] text-rose-800 font-medium">Near Expiry</div>
              <div className="text-base sm:text-lg font-bold text-rose-900 mt-0.5">3 Batches</div>
              <div className="text-[10px] text-rose-700 font-medium mt-0.5">Discount Suggested</div>
            </div>
          </div>

          {/* Stock items preview */}
          <div className="bg-slate-900 rounded-xl p-3 text-white space-y-1.5">
            <div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
              <span>Fastest Moving SKUs</span>
              <span className="text-[#FF4C00] text-[10px] font-medium">Real-time sync</span>
            </div>
            <div className="space-y-1 text-[10px]">
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded">
                <span className="font-mono">Amul Gold Milk 500ml</span>
                <span className="text-emerald-400 font-bold">142 Sold • 28 Stock</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-1.5 rounded">
                <span className="font-mono">Fortune Sunflower Oil 1L</span>
                <span className="text-emerald-400 font-bold">64 Sold • 48 Stock</span>
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
    <div className="bg-slate-50/70 py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/80 shadow-sm" id="showcase">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Header */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center tracking-tight mb-2 text-slate-900">
          See KNK POS in&nbsp;
          <span className="text-[#FF4C00] inline-block">Action</span>
        </h2>
        <p className="mt-1.5 max-w-2xl mx-auto text-xs sm:text-sm text-slate-600 text-center mb-6 leading-relaxed font-normal">
          Intuitive touch interface crafted by KNK:SOFT INFOTECH so any cashier or store staff can master billing in 5 minutes with zero training.
        </p>

        {/* Category Navigation Pills */}
        <div className="flex items-center justify-center mb-6 sm:mb-8">
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
        <div className="relative min-h-[420px]">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, x: direction * 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -30 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center"
            >
              {/* Left Column: Explanatory copy and interactive triggers */}
              <div className="lg:col-span-5 space-y-3 sm:space-y-4">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 text-[#FF4C00] border border-orange-200 text-[10px] font-bold uppercase tracking-wider">
                  <BadgeIcon className="w-3 h-3" /> {activeSlide.badge}
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-tight">
                  {activeSlide.title}
                </h3>

                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-normal">
                  {activeSlide.description}
                </p>

                {/* Checklist Features */}
                <ul className="space-y-1.5 pt-0.5">
                  {activeSlide.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs font-medium text-slate-700"
                    >
                      <div className="w-4 h-4 rounded-full bg-emerald-50 text-[#25C45A] border border-emerald-200 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <CheckCircle2 className="w-2.5 h-2.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom CTA Button */}
                <div className="pt-2.5">
                  <button
                    type="button"
                    onClick={() => openDemoModal(activeSlide.tabLabel)}
                    className="inline-flex items-center gap-2 bg-[#FF4C00] hover:bg-[#DE3700] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:scale-[1.02] cursor-pointer"
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
