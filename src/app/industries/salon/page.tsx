import React from 'react';
import { Metadata } from 'next';
import { IndustryPageTemplate } from '@/components/templates/IndustryPageTemplate';
import { Scissors, Calendar, Users, DollarSign, MessageSquare, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Salon, Spa & Wellness POS Software | KNK POS India',
  description: 'Appointment booking calendar, stylist commission calculations, prepaid membership packages, and automated WhatsApp appointment reminders by KNK:SOFT.',
};

export default function SalonIndustryPage() {
  return (
    <IndustryPageTemplate
      industryName="Salons, Spas & Wellness Clinics"
      badge="Salon & Spa Edition"
      headline="Designed for Indian Hair Salons, Spas & Beauty Clinics"
      subheadline="Visual Stylist Appointment Calendar, Commission Calculations & Prepaid Membership Packages"
      overview="Eliminate booking overlaps and payroll disputes. KNK POS provides an intuitive drag-and-drop appointment schedule, automated service commission calculations for hair stylists and therapists, prepaid package tracking, and customer service history."
      painPoints={[
        {
          problem: 'Manual paper diaries leading to double-booked appointments and customer wait times on busy weekends.',
          solution: 'Visual color-coded appointment calendar with stylist chair allocation and instant WhatsApp booking confirmations.'
        },
        {
          problem: 'End-of-month stylist commission calculations taking hours of manual invoice cross-checking.',
          solution: 'Automated tiered commission calculation (e.g. 10% on hair color, 15% on spa packages, 5% on product retail sales).'
        },
        {
          problem: 'Managing pre-paid package cards and bridal salon vouchers leading to balance disputes.',
          solution: 'Digital membership wallet tracks sessions remaining (e.g. 3 of 6 facials used) with instant OTP validation.'
        }
      ]}
      keyFeatures={[
        {
          title: 'Visual Appointment Scheduling Calendar',
          desc: 'Manage multiple stylists, treatment rooms, and chairs with drag-and-drop rescheduling and slot blocking.',
          icon: <Calendar className="w-5 h-5" />
        },
        {
          title: 'Automated Stylist & Staff Commissions',
          desc: 'Auto-calculate commissions based on service type, product retail sales, and seniority tiers with detailed staff payout slips.',
          icon: <DollarSign className="w-5 h-5" />
        },
        {
          title: 'Prepaid Packages & Bridal Vouchers',
          desc: 'Sell high-value bridal and yearly wellness memberships with digital session tracking and expiration management.',
          icon: <Sparkles className="w-5 h-5" />
        },
        {
          title: 'Automated WhatsApp Reminders',
          desc: 'Send automated appointment reminders 2 hours before scheduled slots to reduce no-shows by 80%.',
          icon: <MessageSquare className="w-5 h-5" />
        },
        {
          title: 'Client Service Notes & Photo History',
          desc: 'Record client hair color formulation, skin sensitivities, and before/after photos for tailored consultations.',
          icon: <Users className="w-5 h-5" />
        },
        {
          title: 'Salon Product Retail & Consumption',
          desc: 'Track back-bar shampoo/color consumption versus front-counter retail product sales with live inventory deductions.',
          icon: <Scissors className="w-5 h-5" />
        }
      ]}
      caseStudy={{
        brandName: 'Bliss Studio Salon & Spa',
        owner: 'Megha Singhania',
        city: 'Hyderabad (Jubilee Hills)',
        metric: '40% Growth in Package Sales & Zero Appointment No-Shows',
        quote: 'KNK POS made staff commissions completely transparent, stopping all end-of-month arguments. WhatsApp appointment reminders cut our no-shows down to almost zero.'
      }}
      recommendedHardware={[
        {
          name: '15.6" Elegant Salon POS Terminal',
          desc: 'Slim aesthetic design matching modern salon decor.',
          price: '₹18,499'
        },
        {
          name: '3" Silent Thermal Invoicer',
          desc: 'Quiet receipt printer with customer service summary.',
          price: '₹4,299'
        },
        {
          name: 'Dynamic UPI QR Display Soundbox',
          desc: 'Instant audio validation for tip and service payments.',
          price: '₹2,999'
        }
      ]}
      faqs={[
        {
          question: 'Can clients book appointments online from our Instagram or Google page?',
          answer: 'Yes! You get a branded online booking link that can be placed on your Instagram bio, website, and Google Maps listing.'
        },
        {
          question: 'Does it support tip management for hair stylists and masseuses?',
          answer: 'Yes. Tips can be collected via cash, UPI, or card and allocated directly to the servicing staff member in their daily payout report.'
        }
      ]}
    />
  );
}
