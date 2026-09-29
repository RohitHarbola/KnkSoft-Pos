import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { Store, Layers, Building2, Truck, Users, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Multi-Store & Franchise Management Hub | KNK POS India',
  description: 'Centralized cloud control for multi-city retail chains and restaurant franchises: global menu pricing, central warehouse stock, and branch P&L by KNK:SOFT.',
};

export default function MultiStoreProductPage() {
  return (
    <ProductPageTemplate
      title="Multi-Store & Franchise Management"
      badge="Scale from 1 to 500+ Outlets"
      subtitle="Centralized Cloud Control for Multi-City Retail & Restaurant Chains"
      description="Run a cohesive, standardized brand across India. Push global price and tax updates across all outlets in one click, transfer inventory from your central commissary, and track branch-wise profit and loss from headquarters with KNK POS."
      breadcrumbs={[{ label: 'Multi-Store & Franchise' }]}
      keyHighlights={[
        {
          title: 'Centralized Master Catalog & Menu Push',
          desc: 'Create or update SKUs, prices, tax slabs, and recipes once at HQ and instantly push updates to all or selected branches.',
          icon: <Store className="w-5 h-5" />
        },
        {
          title: 'Commissary & Central Warehouse Hub',
          desc: 'Manage raw material preparation at central commissaries and dispatch stock to franchise branches with digital transfer challans.',
          icon: <Truck className="w-5 h-5" />
        },
        {
          title: 'Branch-Wise Consolidated P&L',
          desc: 'Compare revenue, top sellers, discounts, food cost percentages, and operating profitability across every store location.',
          icon: <Building2 className="w-5 h-5" />
        },
        {
          title: 'Franchise Royalty & Billing Ledger',
          desc: 'Calculate monthly franchise royalty fees, commissary sales bills, and automated credit limit thresholds per partner.',
          icon: <Layers className="w-5 h-5" />
        },
        {
          title: 'Granular Multi-Tier Permissions',
          desc: 'Assign specific roles: Super Admin, Regional Area Manager, Store Manager, Kitchen Chef, and Billing Cashier.',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: 'Centralized Customer Loyalty Pool',
          desc: 'Allow your customers to earn loyalty points at Store A and redeem them seamlessly at Store B in a different city.',
          icon: <ShieldCheck className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Price Update Across 10 Outlets', knkPos: '10 seconds (1-click push)', traditional: 'Manual update on each counter' },
        { feature: 'Warehouse Dispatch & Inwarding', knkPos: 'Digital barcode scanning', traditional: 'Paper challans & Excel records' },
        { feature: 'Consolidated Headquarter P&L', knkPos: 'Live real-time dashboards', traditional: '15 days delay after month end' },
        { feature: 'Universal Customer Loyalty', knkPos: 'Pan-India cross-outlet redemption', traditional: 'Limited to single store' }
      ]}
      faqs={[
        {
          question: 'Can I set different menu prices for different cities (e.g. Mumbai vs Tier-2 city)?',
          answer: 'Yes, KNK POS allows you to create pricing clusters (e.g. Metro vs Tier-2 pricing) and assign specific outlets to each tier.'
        },
        {
          question: 'Can franchise partners see other franchise stores’ financial data?',
          answer: 'No. Franchise store managers are strictly isolated to their own outlet data, while company executives have full visibility across all locations.'
        }
      ]}
    />
  );
}
