import React from 'react';
import { Metadata } from 'next';
import { PricingPreview } from '@/components/sections/PricingPreview';
import { FAQ } from '@/components/sections/FAQ';
import { Badge } from '@/ui/Badge';
import { Sparkles, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'India POS Pricing Plans | ₹999/mo | 14-Day Free Trial | KNK POS',
  description: 'Transparent India-friendly POS pricing starting at ₹999/mo. Zero setup fees, free assisted data migration, and full 14-day free trial from KNK POS.',
};

export default function PricingPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Transparent &amp; Fair Indian Pricing
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Simple, India-Friendly Pricing for Every Scale
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Choose the plan that fits your counter volume. All plans include 14 days of free unlimited access with complimentary data migration from your old POS.
          </p>
        </div>
      </section>

      {/* Pricing Component */}
      <PricingPreview />

      {/* Detailed Feature Matrix */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-black text-pos-navy">
              Detailed Plan Feature Comparison
            </h2>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead className="bg-pos-navy text-white font-bold">
                <tr>
                  <th className="p-4 sm:p-5">Feature Breakdown</th>
                  <th className="p-4 sm:p-5 text-center">Starter (₹999/mo)</th>
                  <th className="p-4 sm:p-5 text-center bg-pos-orange text-white">Growth (₹2,499/mo)</th>
                  <th className="p-4 sm:p-5 text-center">Enterprise (Custom)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-800">
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Active Billing Counters</td>
                  <td className="p-4 sm:p-5 text-center">1 Counter</td>
                  <td className="p-4 sm:p-5 text-center font-bold bg-orange-50/40">Up to 3 Counters</td>
                  <td className="p-4 sm:p-5 text-center">Unlimited</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">100% Offline Mode Billing</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">GST 2.0 Invoicing &amp; HSN Auto</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Dynamic UPI QR &amp; Soundbox</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ Yes</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Yes</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Swiggy &amp; Zomato 2-Way Sync</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">Optional Add-on</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Kitchen KDS &amp; Captain Waiter App</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ Included</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Included</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">WhatsApp Digital Bills &amp; Loyalty</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">Basic SMS</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold bg-orange-50/40">✓ WhatsApp PDF</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Custom WhatsApp</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Multi-Store Central Warehouse &amp; P&amp;L</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400">—</td>
                  <td className="p-4 sm:p-5 text-center text-slate-400 bg-orange-50/40">—</td>
                  <td className="p-4 sm:p-5 text-center text-emerald-600 font-bold">✓ Full Hub</td>
                </tr>
                <tr>
                  <td className="p-4 sm:p-5 font-bold text-pos-navy">Customer Support SLA</td>
                  <td className="p-4 sm:p-5 text-center">Standard Phone (9-8)</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-pos-orange bg-orange-50/40">24/7 Priority Phone</td>
                  <td className="p-4 sm:p-5 text-center font-bold text-pos-navy">Dedicated Account Mgr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />
    </div>
  );
}
