import React from 'react';
import { Metadata } from 'next';
import { Hardware } from '@/components/sections/Hardware';
import { Badge } from '@/components/ui/Badge';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'BIS Certified POS Hardware Ecosystem | KNK POS India',
  description: 'Rugged, commercial-grade POS terminals, thermal printers, 2D barcode scanners, dynamic UPI soundboxes, and kitchen display systems by KNK:SOFT.',
};

export default function HardwarePage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-teal-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="teal" size="md" className="mb-3">
            <ShieldCheck className="w-3.5 h-3.5 mr-1" /> BIS Certified Indian Hardware
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Rugged Commercial POS Hardware Built for Indian Workflows
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Tested to endure continuous counter billing, kitchen grease, power spikes, and high footfall rush across Indian retail and restaurant environments.
          </p>
        </div>
      </section>

      {/* Main Hardware Catalog */}
      <Hardware />

      {/* Bring Your Own Device / Software Only Section */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-pos-card">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <Badge variant="orange" size="sm" className="mb-3">
                  Hardware-Agnostic Software
                </Badge>
                <h2 className="text-3xl font-black text-pos-navy tracking-tight">
                  Already Own Computers, Tablets, or Thermal Printers?
                </h2>
                <p className="text-pos-text-secondary text-sm sm:text-base mt-3 leading-relaxed">
                  You are not locked into buying proprietary hardware. KNK POS runs smoothly on your existing Windows PC (Win 10/11), Android tablet, or existing TVS/Epson/NGX printers.
                </p>

                <div className="mt-6 space-y-2.5 text-xs sm:text-sm text-slate-700 font-semibold">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Runs on any Windows 10/11 laptop or desktop</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Android tablet and POS mobile app compatibility</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Supports all USB, Bluetooth, Ethernet &amp; WiFi thermal receipt printers</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Free AnyDesk remote printer configuration support included</span>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-3xl p-6 text-white border border-slate-700 shadow-xl space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-pos-orange uppercase">Hardware Compatibility Check</span>
                  <span className="text-emerald-400 font-mono text-[11px]">100% READY</span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between items-center">
                    <span>Windows PCs &amp; Laptops</span>
                    <span className="text-emerald-400 font-bold">✓ Full Support</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between items-center">
                    <span>Android Tablets &amp; Phones</span>
                    <span className="text-emerald-400 font-bold">✓ Full Support</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between items-center">
                    <span>Epson / TVS / Retsol Thermal Printers</span>
                    <span className="text-emerald-400 font-bold">✓ Full Support</span>
                  </div>
                  <div className="p-3 bg-slate-800 rounded-xl flex justify-between items-center">
                    <span>Electronic Weighing Scales</span>
                    <span className="text-emerald-400 font-bold">✓ Full Support</span>
                  </div>
                </div>

                <div className="pt-2 text-center">
                  <Link
                    href="/contact"
                    className="text-xs text-pos-orange font-bold hover:underline"
                  >
                    Need assistance setting up existing hardware? Contact Support →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
