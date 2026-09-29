import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { Boxes, AlertTriangle, RefreshCw, Layers, ShieldCheck, Truck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Real-Time Inventory & Stock Management | KNK POS India',
  description: 'Prevent shrinkage, track raw ingredients, batch expiry dates, and manage multi-outlet stock transfers with KNK POS by KNK:SOFT.',
};

export default function InventoryProductPage() {
  return (
    <ProductPageTemplate
      title="Real-Time Inventory & Stock Alerts"
      badge="Zero Shrinkage & Loss"
      subtitle="Total Control Over Raw Materials, Finished Goods & Multi-Outlet Stock"
      description="Stop food spoilage and inventory leakage. KNK POS provides automated recipe-level stock deductions, low-stock threshold triggers, batch-wise expiry monitoring, and seamless central warehouse transfers."
      breadcrumbs={[{ label: 'Inventory & Stock' }]}
      keyHighlights={[
        {
          title: 'Automated Recipe Deduction',
          desc: 'When a dish or combo is billed, every raw ingredient (paneer, milk, oil, spices) is deducted from inventory in real time.',
          icon: <RefreshCw className="w-5 h-5" />
        },
        {
          title: 'Batch, Lot & Expiry Alerts',
          desc: 'Monitor pharmaceutical and FMCG expiration dates. Automatically apply FIFO (First In First Out) so older batches sell first.',
          icon: <AlertTriangle className="w-5 h-5" />
        },
        {
          title: 'Auto Purchase Orders (PO)',
          desc: 'Set minimum safety stock levels. KNK POS auto-generates supplier purchase orders when inventory dips below thresholds.',
          icon: <Boxes className="w-5 h-5" />
        },
        {
          title: 'Multi-Store Stock Transfers',
          desc: 'Transfer inventory between central warehouse and retail branches with digital challan and dispatch tracking.',
          icon: <Truck className="w-5 h-5" />
        },
        {
          title: 'Dead Stock & Shrinkage Audits',
          desc: 'Identify slow-moving stock tying up your capital and track unauthorized inventory wastage with variance reports.',
          icon: <ShieldCheck className="w-5 h-5" />
        },
        {
          title: 'Barcode Printing & Batch Generation',
          desc: 'Generate customized sticker barcodes for loose items, apparel size-colors, and custom packaged foods.',
          icon: <Layers className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Stock Update Frequency', knkPos: 'Real-time on every bill', traditional: 'End-of-day manual tally' },
        { feature: 'Recipe Ingredient Deduction', knkPos: 'Automated fractional sync', traditional: 'Not supported' },
        { feature: 'Expiry Alerts', knkPos: 'Color-coded proactive alerts', traditional: 'Discovered after expiry' },
        { feature: 'Inter-Branch Stock Movement', knkPos: '1-Click digital challan', traditional: 'Manual phone calls & Excel' }
      ]}
      faqs={[
        {
          question: 'How does recipe management work for restaurants and bakeries?',
          answer: 'You define the raw ingredients for each menu item (e.g. 1 Pizza = 150g flour, 80g cheese, 40g sauce). When the pizza is billed, the exact ingredient weights are deducted automatically.'
        },
        {
          question: 'Can I track barcode serial numbers and expiry dates?',
          answer: 'Yes, KNK POS supports batch numbers, manufacturing dates, expiry dates, and unique serial numbers for electronics, pharma, and packaged FMCG products.'
        }
      ]}
    />
  );
}
