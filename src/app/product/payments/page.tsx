import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { CreditCard, QrCode, Volume2, ShieldCheck, Zap, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'UPI & Multi-Mode Payment Solutions | KNK POS India',
  description: 'Dynamic UPI QR codes, real-time Soundbox audio announcements, integrated card EDC swipe, and split payment management by KNK:SOFT.',
};

export default function PaymentsProductPage() {
  return (
    <ProductPageTemplate
      title="UPI & Multi-Mode Payments"
      badge="0% MDR UPI Support"
      subtitle="Dynamic UPI QR Display, Smart Soundbox & Integrated Card Swipe"
      description="Prevent payment fraud and manual entry mistakes. KNK POS displays dynamic QR codes matching the exact bill amount and delivers instant voice confirmation through connected smart speakers in 8 Indian languages."
      breadcrumbs={[{ label: 'Payments & UPI' }]}
      keyHighlights={[
        {
          title: 'Dynamic Bill-Amount UPI QR',
          desc: 'Customers scan the QR code and the exact amount is pre-filled. No manual amount entry and zero incorrect payments.',
          icon: <QrCode className="w-5 h-5" />
        },
        {
          title: 'Instant Soundbox Audio Confirmation',
          desc: 'High-volume voice alert ("Received ₹450 on KNK POS UPI") in Hindi, English, Tamil, Telugu, Kannada, Marathi & Gujarati.',
          icon: <Volume2 className="w-5 h-5" />
        },
        {
          title: 'Integrated Card Swipe (Pine Labs, Paytm, MSwipe)',
          desc: 'Swipe or tap Visa, Mastercard, RuPay, and contactless NFC cards directly linked to POS invoice settlement.',
          icon: <CreditCard className="w-5 h-5" />
        },
        {
          title: 'Split Billing & Multi-Tender',
          desc: 'Accept part cash, part UPI, part card, or gift vouchers in a single bill with precise shift closing reconciliation.',
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: 'Customer Payment Display (Dual Screen)',
          desc: 'Show items, GST breakup, and dynamic UPI QR code on a second customer-facing monitor or Android tablet.',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'Khata & Credit Customer Ledger',
          desc: 'Track regular customer credit balances (Khata/Udhaar) with automated WhatsApp payment reminder links.',
          icon: <ShieldCheck className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'UPI Verification Speed', knkPos: 'Instant (automated webhook sync)', traditional: 'Cashier checks customer phone screen' },
        { feature: 'Audio Confirmation', knkPos: 'Built-in multi-lingual soundbox', traditional: 'Separate stand-alone speaker' },
        { feature: 'Dynamic QR Generation', knkPos: 'Exact bill amount pre-loaded', traditional: 'Static printed sticker' },
        { feature: 'Card Machine Reconciliation', knkPos: 'Auto-settled with POS invoice', traditional: 'Manual daily paper charge slips' }
      ]}
      faqs={[
        {
          question: 'Can I connect my existing Paytm or PhonePe soundbox?',
          answer: 'Yes! KNK POS connects with standard Paytm, PhonePe, and BharatPe smart soundbox hardware via webhook APIs.'
        },
        {
          question: 'Is there any transaction fee on UPI payments?',
          answer: 'KNK POS charges 0% transaction fee on standard UPI QR payments. Funds settle directly into your linked bank current account.'
        }
      ]}
    />
  );
}
