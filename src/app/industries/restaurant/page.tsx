import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { UtensilsCrossed, ChefHat, Smartphone, QrCode, Bike, Receipt } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Restaurant & Fine Dining POS Software | KNK POS India',
  description: 'India’s most powerful restaurant POS by KNK:SOFT with table layouts, waiter captain app, kitchen display system (KDS), and Swiggy & Zomato sync.',
};

export default function RestaurantIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Restaurants & Fine Dining"
      badge="F&B Specialist Solution"
      headline="Engineered for High-Energy Indian Restaurants & Bars"
      subheadline="Speed Up Table Turnaround, Automate Kitchen Orders & Sync Swiggy/Zomato in Real Time"
      overview="From fine dining family restaurants to bustling multi-floor breweries, KNK POS provides waiter Captain ordering apps, color-coded table management, kitchen display systems (KDS), recipe ingredient deduction, and split billing."
      painPoints={[
        {
          problem: 'Captains writing paper KOTs causing kitchen delays and missing dish orders during weekend dinner rush.',
          solution: 'Android Captain App sends instant digital KOTs directly to kitchen display screens (KDS) and thermal printers.'
        },
        {
          problem: 'Managing separate tablets for Swiggy, Zomato, and dine-in creating cashier confusion and order mix-ups.',
          solution: 'Direct 2-way API auto-accepts delivery orders straight into your POS and sends tickets to the kitchen.'
        },
        {
          problem: 'Split bills and large group checkout arguments slowing down table turnaround times.',
          solution: '1-click split bill by item, cover, or equal amount with dynamic UPI QR code on the guest bill folio.'
        }
      ]}
      keyFeatures={[
        {
          title: 'Color-Coded Visual Floor Plan',
          desc: 'Monitor vacant, occupied, billed, and reserved tables in real time across multiple floors and outdoor seating sections.',
          icon: <UtensilsCrossed className="w-5 h-5" />
        },
        {
          title: 'Captain Mobile Ordering App',
          desc: 'Waiters take orders on inexpensive Android phones. Instant modifier choices (e.g. Less Spicy, Jain, Extra Cheese).',
          icon: <Smartphone className="w-5 h-5" />
        },
        {
          title: 'Kitchen Display System (KDS)',
          desc: 'Eliminate lost paper tickets. Chefs view item cooking timers, course pacing (Starters vs Mains), and special notes.',
          icon: <ChefHat className="w-5 h-5" />
        },
        {
          title: 'Swiggy & Zomato Aggregator Sync',
          desc: 'Update menu items, pricing, and toggle 86 out-of-stock dishes across all delivery platforms from a single dashboard.',
          icon: <Bike className="w-5 h-5" />
        },
        {
          title: 'Recipe & Raw Material Costing',
          desc: 'Automatically track inventory down to grams of paneer, chicken, cheese, and cooking oil to prevent kitchen pilferage.',
          icon: <Receipt className="w-5 h-5" />
        },
        {
          title: 'Dynamic QR Table Dine-In Ordering',
          desc: 'Allow guests to browse photo menus, place repeat drink orders, and pay with UPI directly from their smartphone.',
          icon: <QrCode className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Royal Punjab Kitchen & Bar',
        owner: 'Amandeep Chawla',
        city: 'Chandigarh (Sector 26)',
        metric: '45% Faster Table Turnover & ₹95,000 Monthly Wastage Saved',
        quote: 'KNK POS transformed our 120-cover restaurant. The Captain app eliminated kitchen order shouting, and our weekend table turnover increased by nearly double.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Touch POS Counter Terminal',
          desc: 'Splash-proof capacitive screen built for grease and spills.',
          price: '₹18,499'
        },
        {
          name: '3" Kitchen KOT Thermal Printer',
          desc: 'High-volume auto-cutter printer with loud buzzer alert.',
          price: '₹4,499'
        },
        {
          name: 'Handheld Android Captain Tablet',
          desc: 'Drop-tested 5.5" mobile terminal with all-day battery.',
          price: '₹7,999'
        }
      ]}
      faqs={[
        {
          question: 'Can we print separate KOTs for Bar and Kitchen?',
          answer: 'Yes! KNK POS supports multi-station routing. Food items route automatically to the Kitchen KOT printer while drinks and cocktails print at the Bar counter.'
        },
        {
          question: 'Does it support service charges, discounts, and restaurant GST rates?',
          answer: 'Yes, it natively supports 5% restaurant GST (without ITC) and 18% (with ITC / AC bars), along with optional service charge toggles and custom promotional discounts.'
        }
      ]}
    />
  );
}
