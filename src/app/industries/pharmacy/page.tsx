import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { Pill, AlertTriangle, ShieldCheck, Search, FileText, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Pharmacy & Medical Store POS Software | KNK POS India',
  description: 'Batch expiry tracking, strip-to-tablet fraction billing, generic salt substitute search, Schedule H compliance, and GST drug invoicing by KNK:SOFT.',
};

export default function PharmacyIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Pharmacy & Medical Stores"
      badge="Pharma Compliance Certified"
      headline="Engineered for Indian Retail Chemists & Pharmacy Chains"
      subheadline="Batch Expiry Alerts, Strip-to-Tablet Fraction Billing & Generic Salt Substitute Finder"
      overview="Pharmacy billing requires precision compliance. KNK POS handles batch numbers, manufacturing/expiry dates, fractional tablet cutting from strips, generic salt chemical substitute lookups, Schedule H/H1 regulatory registers, and GST drug tax slabs."
      painPoints={[
        {
          problem: 'Expired medicines sitting on pharmacy shelves leading to major inventory losses and regulatory audit fines.',
          solution: 'Color-coded batch expiry tracking with 30/60/90-day warning alerts and FIFO automatic stock rotation.'
        },
        {
          problem: 'Selling 4 tablets out of a 10-tablet strip causing pricing errors and inventory decimal discrepancies.',
          solution: 'Native strip-to-tablet fractional billing. Automatically calculates fraction prices and updates tablet inventory counts.'
        },
        {
          problem: 'Doctor prescribed brand is out of stock, leading to lost customer sales.',
          solution: 'Instant Generic Salt Substitute Lookup (e.g. Paracetamol 650mg) displays all matching in-stock brands and price comparisons.'
        }
      ]}
      keyFeatures={[
        {
          title: 'Batch & Expiry Date Management',
          desc: 'Track every batch number, manufacturing date, and expiry date. Alerts cashier if an expired batch is accidentally scanned.',
          icon: <AlertTriangle className="w-5 h-5" />
        },
        {
          title: 'Fractional Strip & Tablet Billing',
          desc: 'Bill individual tablets, capsules, or ml syrups from larger packs with automated fractional price & stock calculation.',
          icon: <Pill className="w-5 h-5" />
        },
        {
          title: 'Generic Salt Substitute Finder',
          desc: 'Search by chemical salt formulation (e.g. Pantoprazole 40mg + Domperidone 30mg) to suggest available alternative brands.',
          icon: <Search className="w-5 h-5" />
        },
        {
          title: 'Schedule H, H1 & Narcotic Registers',
          desc: 'Auto-generates government inspection drug registers with prescribing doctor details and patient contact logs.',
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: 'Prescription Upload & Patient History',
          desc: 'Attach customer prescription photos and maintain chronic medication refill schedules with automated WhatsApp reminders.',
          icon: <FileText className="w-5 h-5" />
        },
        {
          title: '100,000+ Pre-Loaded Medicine Database',
          desc: 'Search from a comprehensive Indian pharma catalog with manufacturers, packaging types, and GST tax slabs.',
          icon: <Database className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Sanjivani Medicos & Wellness',
        owner: 'Dr. Alok Verma',
        city: 'Lucknow (Hazratganj)',
        metric: 'Zero Expired Stock Losses & 100% Schedule H Compliance',
        quote: 'KNK POS saved our pharmacy over ₹1.4 Lakhs in expired drug returns in the first 6 months. The generic salt finder helps our staff recommend alternatives instantly.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Medical Touch POS Terminal',
          desc: 'High-clarity display with multi-tab prescription view.',
          price: '₹18,499'
        },
        {
          name: '2D Medicine Barcode Scanner',
          desc: 'Rapid scanning of tiny 2D matrix pharma barcodes.',
          price: '₹2,499'
        },
        {
          name: '3" Thermal GST Receipt Printer',
          desc: 'Prints complete batch, expiry, and doctor details.',
          price: '₹4,499'
        }
      ]}
      faqs={[
        {
          question: 'Does KNK POS generate Schedule H and H1 compliance registers for drug inspectors?',
          answer: 'Yes! All Schedule H, H1, and TB notification registers are automatically generated in the exact format required by state FDA drug inspectors.'
        },
        {
          question: 'Can we send refill reminders to chronic disease patients on WhatsApp?',
          answer: 'Yes. For recurring diabetes, BP, or cardiac medications, you can schedule automated WhatsApp refill reminders 3 days before their medicine runs out.'
        }
      ]}
    />
  );
}
