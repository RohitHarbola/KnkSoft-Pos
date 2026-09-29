import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { Globe, QrCode, Bike, ChefHat, Sparkles, Smartphone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Direct Online Ordering & QR Table Menu | KNK POS India',
  description: 'Zero commission direct customer ordering, interactive QR code table ordering, and seamless Swiggy & Zomato aggregator sync by KNK:SOFT.',
};

export default function OnlineOrderingProductPage() {
  return (
    <ProductPageTemplate
      title="Online Ordering & QR Table Menus"
      badge="0% Commission Direct Orders"
      subtitle="Commission-Free Digital Storefronts, Contactless QR Menus & Swiggy/Zomato Sync"
      description="Own your customer relationships without surrendering 30% aggregator margins. KNK POS provides your brand with a customized direct ordering website, contactless QR table ordering, and 2-way Swiggy/Zomato synchronization."
      breadcrumbs={[{ label: 'Online Ordering' }]}
      keyHighlights={[
        {
          title: 'Direct Commission-Free Storefront',
          desc: 'Get your own branded website (e.g. order.yourbrand.com) to accept direct home delivery and pickup orders with zero commissions.',
          icon: <Globe className="w-5 h-5" />
        },
        {
          title: 'Contactless QR Table Ordering',
          desc: 'Diners scan table QR codes, browse high-res photos, customize addons, and order directly into your kitchen KDS.',
          icon: <QrCode className="w-5 h-5" />
        },
        {
          title: '2-Way Swiggy & Zomato Integration',
          desc: 'Auto-accept aggregator orders directly into your POS, update menu items in real time, and toggle out-of-stock items instantly.',
          icon: <Bike className="w-5 h-5" />
        },
        {
          title: 'Direct Kitchen KDS Dispatch',
          desc: 'Whether an order comes from Table 4, Swiggy, or your website, all tickets are prioritized on digital kitchen displays.',
          icon: <ChefHat className="w-5 h-5" />
        },
        {
          title: '3rd Party Delivery Fleet Dispatch',
          desc: 'Automate 1-click delivery rider dispatch with Dunzo, Shadowfax, Borzo, and Porter directly from your order management screen.',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'ONDC Network Selling',
          desc: 'Publish your menu directly on the government-backed Open Network for Digital Commerce (ONDC) to capture nearby buyers.',
          icon: <Sparkles className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Commission per Direct Order', knkPos: '0% (Zero platform commission)', traditional: '20% to 35% on food aggregators' },
        { feature: 'Swiggy / Zomato Order Entry', knkPos: 'Direct auto-punch to kitchen', traditional: 'Manual re-typing from merchant tabs' },
        { feature: 'Customer Data Ownership', knkPos: '100% direct customer phone list', traditional: 'Masked data from aggregators' },
        { feature: 'Table QR Ordering', knkPos: 'Instant browser ordering (no app)', traditional: 'Paper physical menus' }
      ]}
      faqs={[
        {
          question: 'Do diners need to install an app to use QR table ordering?',
          answer: 'No! Customers simply point their phone camera at the QR code on the table. The digital menu opens instantly in mobile browsers (Chrome, Safari) without app installation.'
        },
        {
          question: 'Can I change menu prices for online delivery vs dine-in?',
          answer: 'Yes, you can configure different price tiers for Dine-in, Takeaway, Direct Delivery, Swiggy, and Zomato.'
        }
      ]}
    />
  );
}
