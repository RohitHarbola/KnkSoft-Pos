import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { Coffee, Cake, MessageSquare, QrCode, Sparkles, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cafe & Bakery POS Software | KNK POS India',
  description: 'Specialized POS software for Indian cafes, coffee shops, and artisanal bakeries: custom modifiers, combo pricing, and WhatsApp loyalty by KNK:SOFT.',
};

export default function CafeIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Cafes, Bakeries & Coffee Shops"
      badge="Artisanal Cafe Edition"
      headline="Designed for Modern Indian Cafes & Artisanal Bakeries"
      subheadline="Streamline Custom Coffee Modifiers, Advance Cake Bookings & Instant WhatsApp Invoices"
      overview="Whether you operate a specialty coffee roaster, a quick neighborhood bakery, or a dessert parlor, KNK POS provides lightning combo billing, milk & syrup modifier management, custom cake advance booking tokens, and automated loyalty rewards."
      painPoints={[
        {
          problem: 'Complicated beverage customizations (Oat Milk, Hazelnut Syrup, Extra Shot) causing billing delays and barista mistakes.',
          solution: '1-tap visual modifier selection on the billing screen that prints exact recipe instructions on the cup sticker printer.'
        },
        {
          problem: 'Advance birthday cake orders written on paper registers getting misplaced or prepared with incorrect weight/messages.',
          solution: 'Digital Cake Booking module with customer photo attachments, pickup date/time calendar, and advance payment tracking.'
        },
        {
          problem: 'Young customers not carrying cash or cards, causing friction at the checkout counter.',
          solution: 'High-speed dynamic UPI QR code with Soundbox audio confirmation in under 2 seconds.'
        }
      ]}
      keyFeatures={[
        {
          title: 'Beverage & Bakery Modifiers',
          desc: 'Easily customize temperature (Hot/Iced), milk type (Almond/Oat/Dairy), sweetness, and flavor syrups.',
          icon: <Coffee className="w-5 h-5" />
        },
        {
          title: 'Advance Custom Cake Orders',
          desc: 'Record custom cake weight, flavor, greeting message, delivery slot, and advance token deposits with automated SMS updates.',
          icon: <Cake className="w-5 h-5" />
        },
        {
          title: 'Combo Billing & Upsell Promos',
          desc: 'Auto-suggest combos (e.g. Cappuccino + Croissant for ₹249) to boost average counter ticket size by 25%.',
          icon: <Sparkles className="w-5 h-5" />
        },
        {
          title: 'Cup / Pastry Label Sticker Printing',
          desc: 'Print adhesive thermal labels with customer names, order details, and pickup numbers directly for baristas.',
          icon: <QrCode className="w-5 h-5" />
        },
        {
          title: 'WhatsApp Stamp Card Loyalty',
          desc: 'Reward regular coffee lovers (e.g. Buy 5 coffees, get the 6th free) via automated WhatsApp tracking.',
          icon: <Heart className="w-5 h-5" />
        },
        {
          title: 'Paperless Digital Bills',
          desc: 'Send aesthetic, eco-friendly digital invoices directly to customer phones via WhatsApp.',
          icon: <MessageSquare className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Artisan Roast & Bakery',
        owner: 'Siddharth Menon',
        city: 'Bengaluru (Indiranagar)',
        metric: '32% Higher Repeat Customer Visits & Zero Custom Cake Mix-ups',
        quote: 'KNK POS gives our baristas exact modifier tickets. Advance cake booking is completely digitized, and WhatsApp loyalty turned our weekend walk-ins into daily regulars.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Touch Cafe Billing Terminal',
          desc: 'Sleek white finish matching modern cafe aesthetic.',
          price: '₹18,499'
        },
        {
          name: '2" Sticky Cup Label Barcode Printer',
          desc: 'Prints peelable order labels for coffee cups & pastry boxes.',
          price: '₹5,499'
        },
        {
          name: 'Dynamic UPI QR Soundbox Device',
          desc: 'Dual-display customer screen with instant audio announcement.',
          price: '₹2,999'
        }
      ]}
      faqs={[
        {
          question: 'Can we track shelf-life and daily expiry for fresh pastries and cakes?',
          answer: 'Yes! You can set end-of-day expiry tags on fresh items and generate evening discount promotions to minimize bakery discard wastage.'
        },
        {
          question: 'Does it support takeaway packaging charges and custom delivery fees?',
          answer: 'Yes, packaging and delivery fees can be auto-applied or toggled with a single touch on the billing screen.'
        }
      ]}
    />
  );
}
