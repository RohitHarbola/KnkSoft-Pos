'use client';

import React from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  PhoneCall,
  Mail,
  MapPin,
  MessageCircle,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { KNKLogo } from '@/ui/KNKLogo';
import { useDemoModal } from '@/context/DemoModalContext';

export const Footer: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <footer className="footer-root" id="footer">
      <div className="footer-inner">
        
        {/* Top Trust & Migration Callout (Toast POS style) */}
        <div className="footer-cta-banner">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-orange-50 text-[#FF4C00] flex items-center justify-center flex-shrink-0 border border-orange-200/80">
              <Sparkles style={{ width: 22, height: 22 }} />
            </div>
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                Switch to KNK POS in under 10 minutes
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm mt-1 font-normal">
                100% Free assisted data migration from Vyapar, Marg ERP, Petpooja, Tally, or Excel.
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => openDemoModal()}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FF4C00] hover:bg-[#DE3700] text-white text-sm font-bold shadow-md shadow-orange-500/20 transition-all whitespace-nowrap flex items-center justify-center gap-2 cursor-pointer"
          >
            Get Free Migration &amp; Demo <ArrowRight style={{ width: 16, height: 16 }} />
          </button>
        </div>

        {/* Main 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10 pb-12 border-b border-slate-200">
          
          {/* Column 1: Brand & KNK Soft Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="inline-block">
              <KNKLogo variant="dark" size="md" />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm font-normal">
              India&apos;s most reliable Point of Sale and billing software by <strong className="text-slate-900 font-semibold">KNK:SOFT INFOTECH Pvt Ltd</strong>. Built for Indian retail, restaurants, pharmacies, and supermarkets with 100% offline stability, instant GST invoicing, and UPI soundbox integration.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="footer-badge" style={{ color: '#16a34a', borderColor: 'rgba(22, 163, 74, 0.3)', background: '#f0fdf4' }}>
                <CheckCircle2 style={{ width: 14, height: 14 }} /> GST 2.0 Compliant
              </span>
              <span className="footer-badge">
                <ShieldCheck style={{ width: 14, height: 14 }} /> BIS Certified Hardware
              </span>
              <span className="footer-badge" style={{ color: '#d97706', borderColor: 'rgba(217, 119, 6, 0.3)', background: '#fffbeb' }}>
                🇮🇳 100% Made in India
              </span>
            </div>

            <div className="pt-2 text-xs text-slate-600 space-y-2 font-normal">
              <div className="flex items-start gap-2.5">
                <MapPin style={{ width: 15, height: 15, color: '#FF4C00', flexShrink: 0, marginTop: 2 }} />
                <span>734/39-B, Block-E, Molarband-Badarpur, New Delhi, INDIA - 110044</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail style={{ width: 15, height: 15, color: '#FF4C00', flexShrink: 0 }} />
                <span>info@knksoftinfotech.com</span>
              </div>
            </div>
          </div>

          {/* Column 2: Product Software */}
          <div>
            <h5 className="footer-heading">
              POS Software
            </h5>
            <ul className="space-y-1">
              <li><Link href="/product/pos-billing" className="footer-link">Fast Thermal Billing</Link></li>
              <li><Link href="/product/inventory" className="footer-link">Inventory &amp; Batch Tracking</Link></li>
              <li><Link href="/product/gst-compliance" className="footer-link">GST Invoicing &amp; E-Way</Link></li>
              <li><Link href="/product/payments" className="footer-link">UPI Soundbox &amp; Card POS</Link></li>
              <li><Link href="/product/crm-loyalty" className="footer-link">WhatsApp CRM &amp; Loyalty</Link></li>
              <li><Link href="/product/analytics" className="footer-link">GST &amp; Profit Analytics</Link></li>
              <li><Link href="/product/online-ordering" className="footer-link">QR Ordering &amp; Swiggy Sync</Link></li>
              <li><Link href="/product/multi-store" className="footer-link">Franchise &amp; Multi-Store</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h5 className="footer-heading">
              Industries
            </h5>
            <ul className="space-y-1">
              <li><Link href="/industries/restaurant" className="footer-link">Restaurants &amp; Bars</Link></li>
              <li><Link href="/industries/cafe" className="footer-link">Cafes &amp; Bakeries</Link></li>
              <li><Link href="/industries/qsr" className="footer-link">Quick Service (QSR)</Link></li>
              <li><Link href="/industries/retail" className="footer-link">Retail &amp; Apparel Stores</Link></li>
              <li><Link href="/industries/grocery" className="footer-link">Kirana &amp; Supermarkets</Link></li>
              <li><Link href="/industries/pharmacy" className="footer-link">Pharmacy &amp; Medical</Link></li>
              <li><Link href="/industries/salon" className="footer-link">Salon, Spa &amp; Beauty</Link></li>
              <li><Link href="/hardware" className="footer-link">Hardware Bundles</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Direct Support */}
          <div>
            <h5 className="footer-heading">
              Direct Support
            </h5>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href="https://wa.me/919891578609"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 hover:bg-emerald-100/80 transition-colors"
              >
                <MessageCircle style={{ width: 18, height: 18, color: '#16a34a' }} />
                <div>
                  <div className="text-[10px] text-emerald-700 font-bold uppercase">WhatsApp Support</div>
                  <div className="font-semibold text-emerald-950">+91 9891-578-609</div>
                </div>
              </a>

              <a
                href="tel:+916370782646"
                className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-slate-700 hover:border-[#FF4C00] hover:bg-white transition-colors"
              >
                <PhoneCall style={{ width: 18, height: 18, color: '#FF4C00' }} />
                <div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase">Direct Phone Helpline</div>
                  <div className="font-semibold text-slate-900">+91 6370-782-646</div>
                </div>
              </a>

              <div className="pt-2 text-xs text-slate-600 space-y-1 font-normal">
                <div>Support Languages:</div>
                <div className="text-slate-900 font-semibold">
                  Hindi, English, Tamil, Telugu, Kannada, Marathi, Gujarati
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/contact"
                  className="text-xs text-[#FF4C00] hover:text-[#DE3700] font-bold flex items-center gap-1"
                >
                  Visit Support &amp; Helpdesk Center <ArrowRight style={{ width: 12, height: 12 }} />
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <div>
            © {new Date().getFullYear()} KNK:SOFT INFOTECH Pvt Ltd. All rights reserved. GSTIN: 07AAAAA0000A1Z5.
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/resources" className="hover:text-[#FF4C00] transition-colors">
              GST Knowledge Base
            </Link>
            <Link href="/pricing" className="hover:text-[#FF4C00] transition-colors">
              Pricing Plans
            </Link>
            <span className="text-slate-300">|</span>
            <Link href="/contact" className="hover:text-[#FF4C00] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-[#FF4C00] transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="hover:text-[#FF4C00] transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
