import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { Zap, WifiOff, Printer, QrCode, ShieldCheck, Keyboard } from 'lucide-react';

export const metadata: Metadata = {
  title: 'High-Speed POS & Fast Billing Software | KNK POS India',
  description: 'Sub-2 second thermal bill generation with offline mode, barcode scanner support, GST auto-calculation, and multi-lingual receipt printing by KNK:SOFT.',
};

export default function PosBillingPage() {
  return (
    <ProductPageTemplate
      title="POS & High-Speed Billing"
      badge="Sub-2 Second Checkout"
      subtitle="The Fastest Invoicing Engine Built for High-Volume Indian Rush Hours"
      description="Never let counter lines pile up. KNK POS combines lightning keyboard hotkeys, barcode gun scanning, and instant thermal printing with an offline-first architecture that never stops during internet cuts."
      breadcrumbs={[{ label: 'POS & Fast Billing' }]}
      keyHighlights={[
        {
          title: 'Sub-2 Second Billing',
          desc: 'Hotkeys for common items, quick quantity multipliers, and instant cash tender calculation eliminate cashier friction.',
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: '100% Offline-First Mode',
          desc: 'All billing logic lives on your local device. Bills continue printing even if WiFi or internet disconnects.',
          icon: <WifiOff className="w-5 h-5" />
        },
        {
          title: 'Multi-Lingual Thermal Printing',
          desc: 'Print crisp 2-inch and 3-inch receipts in English, Hindi, Tamil, Telugu, Kannada, Marathi, or Gujarati.',
          icon: <Printer className="w-5 h-5" />
        },
        {
          title: 'Dynamic UPI QR & Cashier Tokens',
          desc: 'Display dynamic UPI QR codes for exact bill amounts and generate kitchen KOTs or customer order tokens automatically.',
          icon: <QrCode className="w-5 h-5" />
        },
        {
          title: 'GST Slabs & HSN Auto-Classification',
          desc: 'Built-in 20,000+ HSN database automatically applies 0%, 5%, 12%, 18%, or 28% GST with CGST/SGST split.',
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: 'Barcode & Weighing Scale Sync',
          desc: 'Compatible with standard USB barcode scanners, Bluetooth scanners, and electronic weighing scales.',
          icon: <Keyboard className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Billing Speed per Invoice', knkPos: '1.2 - 2.0 seconds', traditional: '8 - 15 seconds' },
        { feature: 'Works Without Internet', knkPos: '100% full offline mode', traditional: 'Crashes or freezes' },
        { feature: 'Thermal Printer Setup', knkPos: 'Plug & Play (zero driver)', traditional: 'Manual driver config' },
        { feature: 'UPI Payment Verification', knkPos: 'Instant Soundbox & QR sync', traditional: 'Manual cashier check' },
        { feature: 'Cashier Onboarding Time', knkPos: '5 minutes', traditional: '3 to 5 days training' }
      ]}
      faqs={[
        {
          question: 'What happens when internet connection goes down while billing?',
          answer: 'KNK POS continues to work seamlessly offline. Invoices are saved locally in the secure local database and printed instantly. When the internet is restored, all data automatically syncs with your cloud dashboard with zero data loss.'
        },
        {
          question: 'Which thermal printers are supported?',
          answer: 'All standard 2-inch (58mm) and 3-inch (80mm) thermal printers with USB, Bluetooth, LAN, or WiFi interfaces are supported, including EPSON, TVS-E, NGX, Posiflex, Retsol, and Xprinter.'
        },
        {
          question: 'Can I split a single bill into Cash and UPI?',
          answer: 'Yes. Cashiers can split payments across multiple modes (e.g. ₹200 in Cash and ₹350 via UPI QR) with exact ledger tracking for shift closing.'
        }
      ]}
    />
  );
}
