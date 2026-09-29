import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { Store, Scale, Barcode, WifiOff, FileText, CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Kirana & Supermarket POS Billing Software | KNK POS India',
  description: 'Pre-loaded 50,000+ FMCG barcodes, weighing scale integration, loose grain billing, offline mode, and customer Khata ledger by KNK:SOFT.',
};

export default function GroceryIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Kirana, Grocery & Supermarkets"
      badge="Kirana-Optimized"
      headline="Designed for Indian Kirana Stores & Supermarkets"
      subheadline="Pre-Loaded 50,000+ FMCG Barcodes, Weighing Scale Auto-Sync & Digital Khata Ledger"
      overview="Speed through long checkout lines without manually typing product names. KNK POS comes pre-loaded with over 50,000+ Indian FMCG barcodes, auto-reads weights from connected weighing scales for loose pulses/vegetables, works 100% offline, and tracks customer credit ledgers (Khata)."
      painPoints={[
        {
          problem: 'Entering new product names, MRPs, and barcodes manually during initial store setup taking weeks.',
          solution: '50,000+ pre-loaded Indian FMCG barcode database (Amul, Britannia, Tata, Nestle, ITC, Unilever, etc.). Scan and bill instantly.'
        },
        {
          problem: 'Manual calculation of loose grains, rice, dal, and vegetables causing weighing errors and slow queues.',
          solution: 'Direct electronic weighing scale sync. Place items on scale and the exact weight & price calculate instantly.'
        },
        {
          problem: 'Managing customer credit (Khata / Udhaar) in paper diaries leading to forgotten payments and bad debts.',
          solution: 'Built-in Digital Khata with 1-click WhatsApp payment reminders with dynamic UPI payment links.'
        }
      ]}
      keyFeatures={[
        {
          title: '50,000+ Pre-Loaded FMCG Database',
          desc: 'Scan any packaged grocery product in India; KNK POS auto-fills item name, HSN code, GST rate, and standard pack sizes.',
          icon: <Barcode className="w-5 h-5" />
        },
        {
          title: 'Direct Electronic Weighing Scale Sync',
          desc: 'Connect USB/RS-232 weighing scales. Automatically transfers exact gram weights for loose sugar, flour, dal, and spices.',
          icon: <Scale className="w-5 h-5" />
        },
        {
          title: '100% Offline Kirana Billing',
          desc: 'Never worry about fiber internet cuts or power outages. Continue fast barcode scanning with zero disruption.',
          icon: <WifiOff className="w-5 h-5" />
        },
        {
          title: 'Digital Customer Khata & Credit Ledger',
          desc: 'Maintain customer credit ledgers with balance limits. Send automated WhatsApp reminders with UPI payment links.',
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: 'Multiple MRPs for Same Barcode',
          desc: 'Easily manage batch stock where the manufacturer increased MRP from ₹90 to ₹100 without messing up inventory.',
          icon: <Store className="w-5 h-5" />
        },
        {
          title: 'Low Stock & Fast Reordering',
          desc: 'Proactive alerts when essential staple inventory is running low with 1-click supplier Purchase Order generation.',
          icon: <CheckCircle2 className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Mahalaxmi Super Mart',
        owner: 'Pravin Shah',
        city: 'Pune (Kothrud)',
        metric: '3x Faster Checkout Speed & ₹3.2L Recovered from Khata WhatsApp Reminders',
        quote: 'The pre-loaded FMCG barcodes allowed us to start billing on day one without typing thousands of products. KNK POS weighing scale sync cut our queue times in half.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Supermarket POS Station',
          desc: 'Rugged heavy-duty counter terminal with metal base.',
          price: '₹18,499'
        },
        {
          name: 'Heavy-Duty Certified Weighing Scale (30kg)',
          desc: 'Direct RS-232 / USB auto-tare & zero weight sync.',
          price: '₹5,999'
        },
        {
          name: 'Hands-Free 2D Desktop Barcode Scanner',
          desc: 'Omnidirectional multi-line rapid scanner for checkout.',
          price: '₹4,999'
        }
      ]}
      faqs={[
        {
          question: 'Do we have to enter all 50,000 FMCG products from scratch?',
          answer: 'No! The FMCG database is already pre-configured. When you scan a product, the software recognizes it immediately. You only need to enter your selling price.'
        },
        {
          question: 'Can we connect multiple billing counters to one inventory stock?',
          answer: 'Yes. You can have 2, 3, or more checkout counters in your supermarket all sharing the same live inventory and barcode database.'
        }
      ]}
    />
  );
}
