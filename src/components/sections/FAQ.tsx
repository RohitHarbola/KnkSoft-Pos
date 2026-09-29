'use client';

import React, { useState, useRef, useMemo, memo } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ChevronDown,
  Receipt,
  Cloud,
  ShieldCheck,
  Printer,
  Smartphone,
  RotateCcw,
  Headphones,
  Boxes,
  Zap,
  Building2,
} from 'lucide-react';

interface FaqItemData {
  question: string;
  answer: string;
  icon: React.ReactNode;
}

const FAQS_DATA: FaqItemData[] = [
  {
    question: 'What custom POS billing solutions do you offer?',
    answer:
      'We offer comprehensive Point of Sale solutions including Fast Retail Billing, Restaurant Table & Captain App, Kitchen Display System (KDS), Pharmacy Batch Management, and Multi-Store Cloud ERP. Our system is optimized for lightning-fast checkouts and zero-lag operations.',
    icon: <Receipt className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4C00] flex-shrink-0" />,
  },
  {
    question: 'Does KNK POS work offline during internet or power cuts?',
    answer:
      'Yes, 100%. KNK POS features an offline-first local database architecture. You can continue taking orders, generating GST tax bills, printing thermal receipts, and processing cash payments without any active internet connection. As soon as your internet reconnects, all sales automatically sync with the cloud in the background with zero data loss.',
    icon: <Cloud className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />,
  },
  {
    question: 'Is the software fully GST 2.0 compliant with HSN and E-Way bills?',
    answer:
      'Absolutely. KNK POS comes pre-loaded with over 20,000+ Indian HSN and SAC codes with correct GST tax slabs (0%, 5%, 12%, 18%, 28%). It auto-calculates CGST, SGST, IGST, and Cess. At the end of the month, you can export 100% CA-ready JSON and Excel reports for GSTR-1 and GSTR-3B, or generate instant E-Invoices and E-Way bills.',
    icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4C00] flex-shrink-0" />,
  },
  {
    question: 'What hardware and thermal printers are supported?',
    answer:
      'KNK POS runs smoothly on any existing Windows laptop/desktop (Windows 10/11), Android tablet, or touch POS terminal. It is compatible with all standard 2-inch and 3-inch thermal receipt printers (EPSON, TVS, NGX, Posiflex, Retsol), USB/wireless barcode scanners, cash drawers, and electronic weighing scales.',
    icon: <Printer className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />,
  },
  {
    question: 'Can KNK POS integrate with Swiggy and Zomato online orders?',
    answer:
      'Yes. Our restaurant and food module has direct 2-way API integration with Swiggy and Zomato. Online orders automatically ring into your POS counter and print kitchen KOTs without requiring separate merchant tablets. You can also toggle item availability or update menu prices across aggregators in real time.',
    icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4C00] flex-shrink-0" />,
  },
  {
    question: 'How long does setup take, and do you provide free data migration?',
    answer:
      'Setup takes less than 10 to 15 minutes. Our onboarding team provides 100% free assisted data migration. Simply share your item list, menu, or customer database in Excel, CSV, or an export from Vyapar, Marg ERP, Tally, or Petpooja — we will import and configure everything for you so your store is ready to bill on day one.',
    icon: <RotateCcw className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />,
  },
  {
    question: 'What kind of customer support is provided?',
    answer:
      'KNK:SOFT INFOTECH provides 24/7 dedicated support via phone (+91 9891-578-609 / +91 6370-782-646), WhatsApp, and remote AnyDesk desktop access. Our support engineers are fluent in Hindi, English, Tamil, Telugu, Kannada, Marathi, and Gujarati with average response times under 5 minutes.',
    icon: <Headphones className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4C00] flex-shrink-0" />,
  },
  {
    question: 'Can I manage multi-store branches and central inventory?',
    answer:
      'Yes. Our enterprise multi-store hub gives you centralized cloud control to manage menus, pricing, promotional campaigns, and inter-store inventory stock transfers with consolidated branch-wise profit and loss reporting across all outlets.',
    icon: <Boxes className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />,
  },
  {
    question: 'What industries and business verticals do you specialize in?',
    answer:
      'We build specialized POS workflows tailored for Restaurants, Cafes & QSRs, Retail & Apparel Boutiques, Pharmacies & Chemists, Kirana & Supermarkets, Beauty Salons & Spas, and Multi-Outlet Franchise Chains.',
    icon: <Building2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#FF4C00] flex-shrink-0" />,
  },
  {
    question: 'How can I get started with KNK POS?',
    answer:
      'You can get started immediately by scheduling a free live demo or contacting our support team via phone or WhatsApp. We will understand your store operations, configure your custom setup, and deliver a tailored POS billing solution.',
    icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500 flex-shrink-0" />,
  },
];

interface FAQItemProps {
  faq: FaqItemData;
  index: number;
  isActive: boolean;
  setActiveIndex: (index: number | null) => void;
}

const FAQItem = memo(({ faq, index, isActive, setActiveIndex }: FAQItemProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '100px 0px',
  });

  return (
    <motion.div
      ref={ref}
      className="bg-white overflow-hidden shadow-sm rounded-sm sm:rounded-lg mb-4 border border-slate-200/80 hover:border-slate-300 transition-colors"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{
        duration: 0.3,
        delay: index * 0.05,
        ease: 'easeOut',
      }}
    >
      <motion.button
        type="button"
        className="w-full px-4 py-5 sm:p-6 text-left focus:outline-none cursor-pointer"
        onClick={() => setActiveIndex(isActive ? null : index)}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center">
            {faq.icon}
            <span
              className={`ml-3 text-sm lg:text-base xl:text-lg font-medium transition-colors duration-300 ${
                isActive ? 'text-[#FF4C00] font-bold' : 'text-slate-900'
              }`}
            >
              {faq.question}
            </span>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-[#FF4C00] flex-shrink-0 transition-transform duration-300 ${
              isActive ? 'transform rotate-180' : ''
            }`}
          />
        </div>
      </motion.button>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="px-4 pb-5 sm:px-6 sm:pb-6"
          >
            <motion.p
              className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
});

FAQItem.displayName = 'FAQItem';

export const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(() => null);

  const firstHalf = useMemo(
    () => FAQS_DATA.slice(0, Math.ceil(FAQS_DATA.length / 2)),
    []
  );

  const secondHalf = useMemo(
    () => FAQS_DATA.slice(Math.ceil(FAQS_DATA.length / 2)),
    []
  );

  return (
    <div className="bg-slate-50/70 py-16 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/80 shadow-sm" id="faq">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4 lg:mb-6 text-slate-900">
          Frequently Asked&nbsp;
          <span className="text-[#FF4C00] mt-2 inline-block">Questions</span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-normal lg:text-lg text-slate-600 text-center mb-10 leading-relaxed">
          We are a company with a DNA of entrepreneurship, and hence, we value
          the time and money invested by our clients.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          <div className="space-y-4">
            {firstHalf.map((faq, index) => (
              <FAQItem
                key={`faq-${index}`}
                faq={faq}
                index={index}
                isActive={activeIndex === index}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
          <div className="space-y-4">
            {secondHalf.map((faq, index) => (
              <FAQItem
                key={`faq-${index + firstHalf.length}`}
                faq={faq}
                index={index + firstHalf.length}
                isActive={activeIndex === index + firstHalf.length}
                setActiveIndex={setActiveIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
