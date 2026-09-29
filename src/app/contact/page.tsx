'use client';

import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Building2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Headphones,
} from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
    interestedServices: 'POS & Fast Billing',
    launchTimeline: 'immediately',
    budget: 15000,
    aboutProject: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-white">
      {/* 1. Hero Banner with Overlay */}
      <section className="relative h-[32vh] sm:h-[40vh] lg:h-[46vh] flex items-center justify-center overflow-hidden bg-slate-950">
        {/* Background Gradient & Ambient Pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-hero-pattern opacity-20 z-0" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent/20 rounded-full blur-3xl pointer-events-none" />

        {/* Banner Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white text-xs sm:text-sm font-semibold mb-4 shadow-lg">
            <Headphones className="w-3.5 h-3.5 text-orange-400" />
            <span>24/7 Support Desk by KNK:SOFT INFOTECH</span>
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Contact &amp; Expert Consultation
          </h1>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg mt-3 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our POS engineers &amp; software specialists for customized demos, GST setup, and enterprise solutions.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid (Exact Layout from KNK:SOFT Website) */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-14 items-start">
            
            {/* LEFT COLUMN: Contact Details & Office Information */}
            <div className="space-y-8 max-w-xl">
              <div className="space-y-4">
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl text-foreground">
                  Get in Touch with{' '}
                  <span className="text-primary block text-4xl sm:text-5xl md:text-6xl font-black mt-1">
                    Our Experts
                  </span>
                </h2>
                <p className="text-muted-foreground font-normal text-sm sm:text-base leading-relaxed">
                  Have questions about KNK POS billing, inventory setup, hardware compatibility, or GST 2.0 compliance? Our engineers and support specialists are here to help. Contact us today to schedule your consultation.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-5">
                {/* 1. Visit Us */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 shadow-xs hover:border-primary/40 transition-colors">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 flex-shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-base text-foreground">Visit Us</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-0.5 leading-relaxed">
                      734/39-B, Block-E,<br />
                      Molarband-Badarpur,<br />
                      New Delhi, INDIA - 110044
                    </p>
                  </div>
                </div>

                {/* 2. Call Us */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 shadow-xs hover:border-primary/40 transition-colors">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 flex-shrink-0">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-base text-foreground">Call Us</h3>
                    <div className="space-y-1 mt-1">
                      <a
                        href="tel:+919891578609"
                        className="block text-muted-foreground text-xs sm:text-sm font-semibold hover:text-primary transition-colors"
                      >
                        +91 9891-578-609
                      </a>
                      <a
                        href="tel:+916370782646"
                        className="block text-muted-foreground text-xs sm:text-sm font-semibold hover:text-primary transition-colors"
                      >
                        +91 6370-782-646
                      </a>
                    </div>
                  </div>
                </div>

                {/* 3. Email Us */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 shadow-xs hover:border-primary/40 transition-colors">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 flex-shrink-0">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-base text-foreground">Email Us</h3>
                    <a
                      href="mailto:info@knksoftinfotech.com"
                      className="block text-muted-foreground text-xs sm:text-sm mt-1 hover:text-primary hover:underline transition-colors"
                    >
                      info@knksoftinfotech.com
                    </a>
                  </div>
                </div>

                {/* 4. Working Hours */}
                <div className="flex items-start gap-4 p-4 rounded-xl bg-card border border-border/60 shadow-xs hover:border-primary/40 transition-colors">
                  <div className="rounded-xl bg-primary/10 text-primary p-3 flex-shrink-0">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm lg:text-base text-foreground">Working Hours</h3>
                    <p className="text-muted-foreground text-xs sm:text-sm mt-1">
                      Mon - Fri: 9:00 AM - 7:00 PM
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm">
                      Saturday: 9:00 AM - 5:00 PM
                    </p>
                    <p className="text-muted-foreground text-xs sm:text-sm font-medium text-emerald-600">
                      Emergency 24/7 AnyDesk Remote Support
                    </p>
                  </div>
                </div>

                {/* WhatsApp Instant Desk Box */}
                <a
                  href="https://wa.me/919891578609"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-emerald-50/80 border border-emerald-300 text-emerald-900 hover:bg-emerald-100 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0 shadow-sm">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-emerald-800 uppercase tracking-wider">
                        Instant WhatsApp Chat
                      </div>
                      <div className="text-sm font-black text-emerald-950">
                        +91 9891-578-609
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-700 group-hover:translate-x-1 transition-transform">
                    Chat Now →
                  </span>
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: Interactive Form Card */}
            <div className="rounded-2xl border border-border bg-card p-6 shadow-xl md:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-foreground">
                    Thank you, {formData.name}!
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                    Your inquiry for <span className="font-semibold text-foreground">{formData.interestedServices}</span> has been received. Our KNK POS specialist will contact you on <span className="font-semibold text-foreground">+91 {formData.phone}</span> within 15 minutes.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors text-sm"
                    >
                      Submit Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="border-b border-border pb-3 mb-2">
                    <h3 className="text-xl font-bold text-foreground">
                      Request Consultation &amp; Free Trial
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      Tell us about your requirements and our team will get back to you promptly.
                    </p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rajesh Kumar"
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Business Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@store.com"
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Phone & Company Name Row */}
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Phone Number *
                      </label>
                      <div className="flex mt-1.5">
                        <span className="inline-flex items-center px-3 rounded-l-lg border border-r-0 border-border bg-muted text-muted-foreground text-xs font-bold">
                          🇮🇳 +91
                        </span>
                        <input
                          type="tel"
                          required
                          pattern="[0-9]{10}"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="98915 78609"
                          className="w-full rounded-r-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Company / Store Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        placeholder="e.g. Chai Point / Apex Retail"
                        className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      />
                    </div>
                  </div>

                  {/* Solution of Interest */}
                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                      What solution / service are you interested in? *
                    </label>
                    <select
                      required
                      value={formData.interestedServices}
                      onChange={(e) => setFormData({ ...formData, interestedServices: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="POS & Fast Billing">POS &amp; Fast Billing Software</option>
                      <option value="Inventory & Stock Alerts">Inventory &amp; Multi-Store Stock</option>
                      <option value="GST & E-Way Compliance">GST 2.0 Invoicing &amp; Compliance</option>
                      <option value="UPI & Soundbox Payments">UPI Soundbox &amp; Payment Gateway</option>
                      <option value="CRM & Customer Loyalty">CRM &amp; WhatsApp Digital Invoicing</option>
                      <option value="Online Ordering & QR Menu">Online Ordering &amp; Aggregators</option>
                      <option value="Multi-Store & Franchise Hub">Multi-Store &amp; Franchise Hub</option>
                      <option value="Hardware Ecosystem">POS Hardware &amp; Thermal Printers</option>
                      <option value="Custom Software Development">Custom Software Development (KNK:SOFT)</option>
                    </select>
                  </div>

                  {/* Launch Timeline */}
                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                      When do you want to launch a solution? *
                    </label>
                    <select
                      required
                      value={formData.launchTimeline}
                      onChange={(e) => setFormData({ ...formData, launchTimeline: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    >
                      <option value="immediately">Immediately (Within 24-48 Hours)</option>
                      <option value="1-3months">Within 1 - 2 Weeks</option>
                      <option value="3-6months">1 - 3 Months</option>
                      <option value="6+months">Exploring options for future rollout</option>
                    </select>
                  </div>

                  {/* Budget Slider */}
                  <div>
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                        Estimated Budget / Volume
                      </label>
                      <span className="text-xs font-extrabold text-primary">
                        ₹{Number(formData.budget).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <div className="mt-2 space-y-1.5">
                      <input
                        type="range"
                        min="2000"
                        max="50000"
                        step="1000"
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: Number(e.target.value) })}
                        className="w-full accent-primary h-2 bg-input rounded-lg cursor-pointer"
                      />
                      <div className="flex justify-between text-[11px] text-muted-foreground">
                        <span>Starter (₹2,000/mo)</span>
                        <span>Enterprise (₹50,000+)</span>
                      </div>
                    </div>
                  </div>

                  {/* About Project */}
                  <div>
                    <label className="text-xs font-bold text-foreground uppercase tracking-wider">
                      About Project / Requirements (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.aboutProject}
                      onChange={(e) => setFormData({ ...formData, aboutProject: e.target.value })}
                      className="mt-1.5 w-full rounded-lg border border-border bg-input px-3.5 py-2.5 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                      placeholder="Tell us about your counters, item catalog size, or existing POS migration..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-3 px-6 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Submitting...
                      </span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-muted-foreground text-center pt-1">
                    🔒 Zero spam. 100% confidential consultation by KNK:SOFT INFOTECH Pvt Ltd.
                  </p>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
