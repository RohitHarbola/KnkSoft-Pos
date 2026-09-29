import React from 'react';
import { Metadata } from 'next';
import { Integrations } from '@/components/sections/Integrations';
import { Badge } from '@/components/ui/Badge';
import { Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: '200+ Integrations: UPI, Swiggy, Zomato, Tally & GST | KNK POS India',
  description: 'Connect KNK POS with UPI payments, Swiggy, Zomato, Tally Prime, Marg ERP, ClearTax, WhatsApp Business, and Shopify by KNK:SOFT.',
};

export default function IntegrationsPage() {
  return (
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="pt-8 pb-12 sm:pt-10 sm:pb-14 lg:pt-12 lg:pb-16 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Unified Ecosystem
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Connects With 200+ Indian Payment, Delivery &amp; Accounting Tools
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Eliminate duplicate data entry. Seamlessly synchronize KNK POS with UPI soundboxes, food aggregators, accounting software, and GST filing portals.
          </p>
        </div>
      </section>

      {/* Main Integrations Grid */}
      <Integrations />
    </div>
  );
}
