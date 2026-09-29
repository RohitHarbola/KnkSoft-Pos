import React from 'react';
import { Metadata } from 'next';
import { ProductPageTemplate } from '@/components/templates/ProductPageTemplate';
import { MessageSquare, Users, Gift, Smartphone, Sparkles, Send } from 'lucide-react';

export const metadata: Metadata = {
  title: 'WhatsApp CRM & Customer Loyalty | KNK POS India',
  description: 'Digital GST receipts on WhatsApp, cashback points, birthday promos, and customer retention tools by KNK:SOFT.',
};

export default function CrmLoyaltyProductPage() {
  return (
    <ProductPageTemplate
      title="WhatsApp CRM & Loyalty Program"
      badge="35% Increase in Repeat Sales"
      subtitle="Paperless WhatsApp Invoices, Cashback Wallets & Automated Retention Offers"
      description="Turn one-time shoppers into lifelong regulars. Collect verified phone numbers effortlessly at checkout, send official WhatsApp GST bills, and trigger personalized discounts on birthdays, anniversaries, and festive occasions with KNK POS."
      breadcrumbs={[{ label: 'CRM & Loyalty' }]}
      keyHighlights={[
        {
          title: 'Official WhatsApp Digital Bills',
          desc: 'Deliver branded PDF tax invoices to customer WhatsApp numbers instantly. Saves paper roll costs and delights eco-conscious buyers.',
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: 'Customizable Cashback Points Wallet',
          desc: 'Reward loyal shoppers with cashback points (e.g. 5% cashback on every purchase) redeemable on subsequent store visits.',
          icon: <Gift className="w-5 h-5" />
        },
        {
          title: 'Automated Birthday & Anniversary Deals',
          desc: 'Trigger personalized WhatsApp/SMS greetings and discount coupons on customer milestones with zero manual intervention.',
          icon: <Sparkles className="w-5 h-5" />
        },
        {
          title: 'Customer Purchase History & RFM',
          desc: 'View customer lifetime value, favorite items, and last visit dates directly on the cashier screen during checkout.',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: 'Broadcast Marketing Campaigns',
          desc: 'Send targeted festive offers (Diwali, Eid, Christmas, Independence Day) to inactive customers to revive footfalls.',
          icon: <Send className="w-5 h-5" />
        },
        {
          title: 'Pre-Paid Packages & Memberships',
          desc: 'Sell prepaid store credit, salon packages, or coffee subscriptions with automated balance deductions upon visits.',
          icon: <Smartphone className="w-5 h-5" />
        }
      ]}
      comparisonFeatures={[
        { feature: 'Bill Delivery Method', knkPos: 'Official WhatsApp PDF receipt', traditional: 'Only paper thermal slips' },
        { feature: 'Phone Number Capture Rate', knkPos: '85% (frictionless at billing)', traditional: '< 20% on paper register' },
        { feature: 'Loyalty Rewards Calculation', knkPos: 'Automated points ledger', traditional: 'Paper punch cards' },
        { feature: 'Automated Birthday SMS', knkPos: '100% automated with discount', traditional: 'Manual or forgotten' }
      ]}
      faqs={[
        {
          question: 'Do customers need to download a separate mobile app to earn points?',
          answer: 'No! The loyalty program runs entirely on the customer’s phone number. Points and balances are automatically updated and sent via WhatsApp message.'
        },
        {
          question: 'Is WhatsApp messaging DLT compliant in India?',
          answer: 'Yes, KNK POS integrates with official Meta WhatsApp Business Cloud APIs and DLT-approved telecom gateways.'
        }
      ]}
    />
  );
}
