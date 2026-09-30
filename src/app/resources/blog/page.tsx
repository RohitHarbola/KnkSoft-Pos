import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, User, ArrowRight, Sparkles, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'KNK POS Blog | Retail, Restaurant & GST Invoicing Insights India',
  description: 'Articles, practical tips, and news on Indian retail POS trends, GST rate changes, UPI payments, and inventory management by KNK POS.',
};

const BLOG_POSTS = [
  {
    slug: 'gst-2-rate-changes-hsn-guide',
    title: 'Complete Guide to Indian GST 2.0 Invoicing & HSN Slabs for Retail and Food Outlets',
    excerpt: 'Understand how recent GST rate updates affect your restaurant service tax, apparel slabs under vs over ₹1000, and how to export GSTR-1 without errors.',
    date: 'Sep 20, 2026',
    readTime: '6 min read',
    author: 'Sunita Raman (Tax Lead)',
    category: 'GST & Tax'
  },
  {
    slug: 'offline-pos-architecture-importance',
    title: 'Why Offline-First Billing Architecture is Essential for Indian Store Counters',
    excerpt: 'Fiber internet cuts and WiFi glitches are unavoidable. Here is how local SQLite storage and auto-cloud syncing protect your business from downtime.',
    date: 'Sep 14, 2026',
    readTime: '5 min read',
    author: 'Kiran Desai (CTO)',
    category: 'Tech & Architecture'
  },
  {
    slug: 'swiggy-zomato-pos-integration-benefits',
    title: 'How 2-Way Swiggy and Zomato POS Sync Eliminates Food Delivery Chaos',
    excerpt: 'Stop maintaining 3 separate merchant tablets. Direct API order routing to your kitchen display speeds up delivery prep by 40%.',
    date: 'Sep 08, 2026',
    readTime: '4 min read',
    author: 'Amartya Sen (F&B Consultant)',
    category: 'Restaurant Growth'
  },
  {
    slug: 'whatsapp-digital-invoicing-vs-paper-receipts',
    title: 'The Shift to WhatsApp Digital Receipts: Saving Paper and Boosting Customer Retention',
    excerpt: 'How Indian retail stores are cutting thermal paper costs by 65% while acquiring verified phone numbers for loyalty campaigns.',
    date: 'Aug 29, 2026',
    readTime: '5 min read',
    author: 'Neha Roy (Product Growth)',
    category: 'CRM & Loyalty'
  }
];

export default function BlogIndexPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-white pt-8 pb-10 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF3EF] text-[#FF4C00] text-[10.5px] font-bold uppercase tracking-wider border border-[#FFD5C2]">
            <BookOpen className="w-3 h-3" /> Knowledge Articles
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight leading-tight">
            Articles &amp; Practical Business Insights
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
            Actionable strategies on retail management, GST compliance, UPI payments, and inventory optimization for Indian store owners.
          </p>
        </div>
      </section>

      {/* Editorial List (Zero Cards, Compact Spacing) */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="divide-y divide-slate-100 border-y border-slate-100">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="py-5 group hover:bg-slate-50/70 px-3 rounded-xl transition-colors space-y-1.5"
              >
                <div className="flex items-center gap-2.5 text-[11px]">
                  <span className="font-bold px-2 py-0.2 rounded-full bg-orange-50 text-[#FF4C00] border border-orange-200 text-[10px]">
                    {post.category}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{post.date}</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500">{post.readTime}</span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#FF4C00] transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-600 leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>

                <div className="pt-1 flex items-center justify-between text-xs">
                  <span className="text-slate-500 text-[11px]">By {post.author}</span>
                  <span className="font-bold text-[#FF4C00] text-xs flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
