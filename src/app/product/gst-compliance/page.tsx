import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { ShieldCheck, FileSpreadsheet, FileCheck, CheckCircle2, Lock, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'GST Compliance & E-Way Invoicing | KNK POS India',
  description: '100% compliant Indian GST billing, GSTR-1 and GSTR-3B CA-ready reports, HSN/SAC classification, and instant B2B e-invoicing by KNK:SOFT.',
};

export default function GstComplianceProductPage() {
  return (
    <ProductPageTemplate
      title="GST & E-Way Bill Compliance"
      badge="100% Tax Compliant"
      subtitle="CA-Ready GSTR-1 / 3B Reports, HSN Classification & Automated E-Invoicing"
      description="Eliminate tax filing anxiety. KNK POS handles all Indian GST slabs (0%, 5%, 12%, 18%, 28%), generates B2B IRN e-invoices, and exports verified JSON/Excel files compatible with Tally, Marg ERP, and the GSTN portal."
      breadcrumbs={[{ label: 'GST Compliance' }]}
      keyHighlights={[
        {
          title: 'Automated GST Slabs & HSN Directory',
          desc: 'Over 20,000+ Indian HSN and SAC codes pre-configured with accurate CGST, SGST, IGST, and Cess rates.',
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: '1-Click GSTR-1 & GSTR-3B Export',
          desc: 'Export monthly returns formatted for the government offline utility tool, ClearTax, and Chartered Accountants.',
          icon: <FileSpreadsheet className="w-5 h-5" />
        },
        {
          title: 'B2B GST Invoicing & IRN Generation',
          desc: 'Validate buyer GSTIN numbers instantly, generate QR code e-invoices, and push IRNs to the government portal.',
          icon: <FileCheck className="w-5 h-5" />
        },
        {
          title: 'E-Way Bill Generation (> ₹50,000)',
          desc: 'Automatically generate E-Way bills for inter-state or bulk goods transportation directly from the dispatch screen.',
          icon: <ArrowUpRight className="w-5 h-5" />
        },
        {
          title: 'Seamless Tally & Marg Export',
          desc: 'Export XML sales ledgers and purchase vouchers formatted specifically for Tally Prime, ERP 9, and Marg ERP.',
          icon: <CheckCircle2 className="w-5 h-5" />
        },
        {
          title: 'Input Tax Credit (ITC) Tracker',
          desc: 'Reconcile purchase invoices against vendor GSTR-2B statements to maximize eligible input tax credits.',
          icon: <Lock className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'GSTR-1 Monthly Preparation Time', knkPos: '10 seconds (1-click export)', traditional: '3 to 5 days manual Excel work' },
        { feature: 'HSN Tax Classification', knkPos: 'Pre-loaded & auto-applied', traditional: 'Manual lookup per item' },
        { feature: 'B2B E-Invoicing (IRN)', knkPos: 'Direct automated generation', traditional: 'Third-party portal copy-pasting' },
        { feature: 'Tally Prime Integration', knkPos: 'Direct XML export', traditional: 'Manual voucher re-entry' }
      ]}
      faqs={[
        {
          question: 'Can my Chartered Accountant directly access GST reports?',
          answer: 'Yes. You can grant read-only CA access to your portal, allowing them to download GSTR-1, GSTR-3B, and HSN summary JSON files in one click.'
        },
        {
          question: 'Does it support composite tax scheme and regular GST taxpayers?',
          answer: 'Yes, KNK POS supports both Regular (tax invoice with input tax credit) and Composition (Bill of Supply with flat rate) GST dealers.'
        }
      ]}
    />
  );
}
