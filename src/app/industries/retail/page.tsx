import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { ShoppingBag, ScanBarcode, Layers, RefreshCw, Users, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Retail & Apparel Store POS Software | KNK POS India',
  description: 'Manage size-color-matrix inventory, custom barcode tag printing, fast item exchanges, and customer WhatsApp loyalty points with KNK POS by KNK:SOFT.',
};

export default function RetailIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Retail & Apparel Stores"
      badge="Retail Matrix Solution"
      headline="Engineered for Fashion Boutiques, Footwear & Apparel Retail"
      subheadline="Master Size-Color-Brand Matrix SKUs, Custom Barcode Label Printing & Instant Item Exchanges"
      overview="Running an apparel, footwear, or lifestyle store requires managing thousands of variants across sizes (S, M, L, XL, XXL) and colors. KNK POS streamlines variant inventory, prints custom garment price tags, handles fast size exchanges, and boosts repeat footfalls with WhatsApp loyalty."
      painPoints={[
        {
          problem: 'Entering hundreds of individual SKU entries for each size and color variation of the same shirt or dress.',
          solution: 'Matrix SKU Generator creates all size x color permutations in 1 click with unique barcode numbers.'
        },
        {
          problem: 'Complicated customer returns and exchanges creating inventory mismatch and messy cash ledgers.',
          solution: '1-click return/exchange button scans the old bill, updates stock instantly, and adjusts the bill difference.'
        },
        {
          problem: 'Lack of customer contact information preventing store owners from sending new season collection alerts.',
          solution: 'Captures verified WhatsApp numbers at checkout and triggers targeted new arrival lookbooks.'
        }
      ]}
      keyFeatures={[
        {
          title: 'Size-Color-Fit Matrix Management',
          desc: 'Manage garment styles across colors, waist/chest sizes, fits, and fabrics without creating messy duplicate products.',
          icon: <Layers className="w-5 h-5" />
        },
        {
          title: 'Custom Garment Barcode Label Printing',
          desc: 'Print professional price tags with store logo, MRP, discount price, size, fabric type, and scannable barcode.',
          icon: <ScanBarcode className="w-5 h-5" />
        },
        {
          title: 'Fast Exchanges & Credit Notes',
          desc: 'Process garment exchanges in 5 seconds. Issue digital credit notes with unique OTP codes redeemable on next purchase.',
          icon: <RefreshCw className="w-5 h-5" />
        },
        {
          title: 'Multi-Outlet Stock Visibility',
          desc: 'Check if a specific size is available in another branch or central warehouse right from the cashier billing screen.',
          icon: <ShoppingBag className="w-5 h-5" />
        },
        {
          title: 'Cashback & VIP Member Loyalty',
          desc: 'Automatic cashback points and tier upgrades (Silver, Gold, Platinum) with WhatsApp point balance alerts.',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: 'GST Slabs by MRP Value (5% vs 12%)',
          desc: 'Auto-applies 5% GST for garments/footwear under ₹1,000 and 12% GST for items above ₹1,000 as per Indian tax laws.',
          icon: <ShieldCheck className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Vogue Hub & Ethnic',
        owner: 'Sunil Agarwal',
        city: 'Jaipur (MI Road)',
        metric: '100% Barcode Scanning & 38% Growth in Repeat Walk-ins',
        quote: 'KNK POS made barcode labeling so easy. Managing size variations is completely effortless, and the GST 5% vs 12% auto-switch saves us from tax calculation mistakes.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Retail POS Counter PC',
          desc: 'Crisp display with high-speed barcode gun interface.',
          price: '₹18,499'
        },
        {
          name: '2D Barcode Scanner Gun with Stand',
          desc: 'Fast omnidirectional scan for curved tags and hangtags.',
          price: '₹2,499'
        },
        {
          name: 'Thermal Barcode Sticker Tag Printer',
          desc: 'Prints wash-proof, smudge-free jewelry and apparel tags.',
          price: '₹6,999'
        }
      ]}
      faqs={[
        {
          question: 'Can we print jewelry tags and dumbbell barcodes?',
          answer: 'Yes! KNK POS supports custom small label formats, jewelry dumbbell tags, and standard garment hang tags.'
        },
        {
          question: 'Does it support end-of-season sales (EOSS) like Buy 2 Get 1 Free?',
          answer: 'Yes, our built-in promotions engine supports Buy X Get Y, Flat % discounts, mix-and-match bundles, and minimum cart value discounts.'
        }
      ]}
    />
  );
}
