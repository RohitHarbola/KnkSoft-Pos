import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { BarChart3, TrendingUp, DollarSign, Clock, ShieldAlert, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Smart Analytics & GST Tax Reports | KNK POS India',
  description: 'Owner mobile app with real-time revenue, gross profit margin per SKU, hourly rush heatmaps, and franchise comparison metrics by KNK:SOFT.',
};

export default function AnalyticsProductPage() {
  return (
    <ProductPageTemplate
      title="Smart Analytics & Financial Reports"
      badge="Total Visibility on Any Device"
      subtitle="Track Real-Time Sales, Profit Margins, Staff Efficiency & GST Liabilities"
      description="Make informed business decisions backed by clean, real-time data. Monitor hourly store footfalls, top-selling dishes, gross profit per category, and anti-theft cashier audit logs from anywhere using the KNK POS Owner App."
      breadcrumbs={[{ label: 'Smart Analytics' }]}
      keyHighlights={[
        {
          title: 'Daily Morning WhatsApp Digest',
          desc: 'Receive an automated summary every morning at 8:00 AM on your WhatsApp detailing yesterday’s net sales, cash vs UPI, and top items.',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'Gross Margin & Profit Per Dish / SKU',
          desc: 'Calculate exact net margin after raw material costs, GST slabs, and discount subsidies to eliminate loss-making items.',
          icon: <DollarSign className="w-5 h-5" />
        },
        {
          title: 'Peak Rush Hour Heatmaps',
          desc: 'Identify your busiest store hours (e.g. 1 PM - 3 PM and 8 PM - 10 PM) to optimize staff shifts and kitchen prep.',
          icon: <Clock className="w-5 h-5" />
        },
        {
          title: 'Cashier Discrepancy & Anti-Theft Audit',
          desc: 'Track canceled bills, deleted items, manual discounts, and cash drawer openings with timestamped cashier accountability logs.',
          icon: <ShieldAlert className="w-5 h-5" />
        },
        {
          title: 'Multi-Outlet Performance Benchmarks',
          desc: 'Compare revenue, footfalls, average ticket size, and inventory velocity across all branch locations on a single screen.',
          icon: <TrendingUp className="w-5 h-5" />
        },
        {
          title: 'Custom Date Range Financial P&L',
          desc: 'Generate comprehensive balance sheets, taxable turnovers, and expense reports ready for auditing and tax filing.',
          icon: <BarChart3 className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Access Reports From Anywhere', knkPos: 'Owner Mobile App & Web Portal', traditional: 'Only physically on the store computer' },
        { feature: 'Report Generation Speed', knkPos: 'Instant real-time calculations', traditional: 'Slow end-of-month consolidation' },
        { feature: 'WhatsApp Daily Digest', knkPos: 'Automated 8:00 AM morning push', traditional: 'Not available' },
        { feature: 'Cashier Fraud Detection', knkPos: 'Detailed audit logs for every void', traditional: 'Zero theft visibility' }
      ]}
      faqs={[
        {
          question: 'Can I view sales metrics on my iPhone or Android smartphone?',
          answer: 'Yes! The KNK POS Owner mobile app is available on both iOS and Android, allowing you to monitor live store metrics from anywhere in the world.'
        },
        {
          question: 'Can I prevent store cashiers from seeing total daily revenue?',
          answer: 'Yes. With granular role-based permissions, cashiers can only see their current shift transactions, while full revenue and profit metrics remain exclusive to the store owner.'
        }
      ]}
    />
  );
}
