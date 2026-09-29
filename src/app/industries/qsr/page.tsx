import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { Zap, Monitor, Volume2, Flame, RefreshCw, QrCode } from 'lucide-react';

export const metadata: Metadata = {
  title: 'QSR & Fast Food Counter POS System | KNK POS India',
  description: 'Sub-3 second fast food counter billing, token status display screens, and instant kitchen order routing by KNK:SOFT.',
};

export default function QsrIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Quick Service (QSR) & Food Courts"
      badge="Ultra-Fast Counter POS"
      headline="Built for Lightning-Fast Counter Checkout & Token Queuing"
      subheadline="Process Over 180 Bills per Hour with Zero Counter Lag and Instant Token Status Displays"
      overview="In high-volume fast food counters, momo stalls, chaat outlets, and mall food courts, speed is everything. KNK POS processes entire orders in 2 to 3 seconds with instant token number generation, automated kitchen routing, and UPI voice validation."
      painPoints={[
        {
          problem: 'Long counter queues during lunch hours driving impatient customers away to neighboring stalls.',
          solution: 'Hotkeyed 1-touch menu layout generates thermal bill, tax calculation, and order token in 2 seconds.'
        },
        {
          problem: 'Customers crowding around pickup counters asking "Is Token 42 ready?" causing staff distraction.',
          solution: 'Large HDMI Order Token Display Screen (Preparing vs Ready to Collect) with loud chime audio alerts.'
        },
        {
          problem: 'Slow UPI payment verification creating counter bottlenecks during peak mall footfalls.',
          solution: 'Soundbox audio announcements automatically validate payment without cashier checking screens.'
        }
      ]}
      keyFeatures={[
        {
          title: '3-Second Rapid Billing Engine',
          desc: 'High-speed touch screen interface with zero unnecessary clicks. Pre-set combos, quick cash keys, and hotkey search.',
          icon: <Zap className="w-5 h-5" />
        },
        {
          title: 'HDMI Customer Token Display',
          desc: 'Plug any standard TV or monitor to display live &quot;Preparing&quot; and &quot;Ready for Pickup&quot; order token numbers.',
          icon: <Monitor className="w-5 h-5" />
        },
        {
          title: 'Multi-Lingual UPI Soundbox',
          desc: 'Instant voice confirmation of payment on smart speaker in Hindi, English, and regional Indian languages.',
          icon: <Volume2 className="w-5 h-5" />
        },
        {
          title: 'High-Volume Kitchen KOT Printing',
          desc: 'Dual-station thermal routing for kitchen frying counter and beverage dispenser with auto-cutter paper output.',
          icon: <Flame className="w-5 h-5" />
        },
        {
          title: 'Combo & Addon Upsell Engine',
          desc: 'Prompt cashier with 1-click upsells: &quot;Add Fries &amp; Drink for ₹79?&quot; to maximize average order value.',
          icon: <RefreshCw className="w-5 h-5" />
        },
        {
          title: 'Food Court Smart Card / RFID Sync',
          desc: 'Compatible with food court smart cards, NFC tokens, and digital prepaid balances for seamless multi-stall checkouts.',
          icon: <QrCode className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Chaat Junction & Rolls',
        owner: 'Vikram Joshi',
        city: 'Mumbai (Malad Food Court)',
        metric: '180+ Invoices per Hour & Zero Peak Hour Counter Lag',
        quote: 'During Saturday mall rushes, KNK POS handled 600+ orders without a hiccup. The Token Display screen saved our kitchen staff from shouting numbers.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Fast Touch QSR Terminal',
          desc: 'Commercial Intel i5 processor with instant responsiveness.',
          price: '₹19,999'
        },
        {
          name: '3" High-Speed 250mm/s Receipt Printer',
          desc: 'Cuts receipt in 0.8 seconds with heavy-duty cutter.',
          price: '₹4,499'
        },
        {
          name: 'HDMI TV Token Box Adapter',
          desc: 'Connects to any TV screen to show real-time token status.',
          price: '₹3,499'
        }
      ]}
      faqs={[
        {
          question: 'Can KNK POS run in a mall food court with shared prepaid cards?',
          answer: 'Yes, KNK POS integrates with standard food court central card balance readers and mall management POS integrations.'
        },
        {
          question: 'What happens if we lose internet connection at the food counter?',
          answer: 'KNK POS works 100% offline. Counter bills, kitchen KOTs, and token numbers continue uninterrupted and sync automatically when internet restores.'
        }
      ]}
    />
  );
}
