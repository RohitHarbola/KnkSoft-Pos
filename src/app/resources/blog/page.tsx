import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/ui/Badge';
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
    author: 'Sunita Raman (Tax & Compliance Lead)',
    category: 'GST & Tax'
  },
  {
    slug: 'offline-pos-architecture-importance',
    title: 'Why Offline-First Billing Architecture is Essential for Indian Store Counters',
    excerpt: 'Fiber internet cuts and WiFi glitches are unavoidable. Here is how local SQLite storage and auto-cloud syncing protect your business from downtime.',
    date: 'Sep 14, 2026',
    readTime: '5 min read',
    author: 'Kiran Desai (Chief Technology Officer)',
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
    <div className="bg-pos-bg min-h-screen">
      {/* Hero */}
      <section className="py-16 lg:py-20 bg-gradient-to-b from-orange-50/50 via-white to-pos-bg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <Badge variant="orange" size="md" className="mb-3">
            <BookOpen className="w-3.5 h-3.5 mr-1" /> KNK POS Knowledge Hub
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-pos-navy tracking-tight leading-tight">
            Articles &amp; Practical Business Insights
          </h1>
          <p className="text-base sm:text-lg text-pos-text-secondary mt-3 leading-relaxed">
            Actionable strategies on retail management, GST compliance, UPI payments, and inventory optimization for Indian store owners.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-3xl p-7 border border-slate-200 shadow-pos-card hover:shadow-xl hover:border-pos-orange/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-orange-50 text-pos-orange border border-orange-200">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-1 text-xs text-slate-400 font-semibold">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl font-black text-pos-navy group-hover:text-pos-orange transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-pos-text-secondary mt-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span className="font-semibold text-slate-700">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 text-pos-orange font-bold">
                    Read Article →
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
