'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Menu,
  X,
  ChevronDown,
  Sparkles,
  Store,
  Receipt,
  Boxes,
  ShieldCheck,
  CreditCard,
  Users,
  BarChart3,
  Globe,
  UtensilsCrossed,
  Coffee,
  ShoppingBag,
  Pill,
  Scissors,
  ArrowRight,
  MessageCircle,
  Cpu,
  Layers,
  BookOpen,
  FileText,
  PhoneCall,
  LogIn,
} from 'lucide-react';
import { KNKLogo } from '@/ui/KNKLogo';
import { useDemoModal } from '@/context/DemoModalContext';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'product' | 'industries' | null>(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<'product' | 'industries' | null>(null);
  const { openDemoModal } = useDemoModal();
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedTab(null);
  }, [pathname]);

  // Click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveDropdown(null);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Hover with bridge timeout helper
  const handleMouseEnter = (menu: 'product' | 'industries') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 150);
  };

  // 1. Product software modules
  const productLinks = [
    { name: 'POS & Fast Billing', href: '/product/pos-billing', desc: 'Sub-second thermal billing, barcode & offline sync', icon: Receipt },
    { name: 'Inventory & Stock Alerts', href: '/product/inventory', desc: 'Real-time multi-location stock & wastage control', icon: Boxes },
    { name: 'GST & E-Way Compliance', href: '/product/gst-compliance', desc: 'Automated GSTR-1/3B reports & HSN lookup', icon: ShieldCheck },
    { name: 'UPI & Multi-Mode Payments', href: '/product/payments', desc: 'QR code soundbox, cards & split payments', icon: CreditCard },
    { name: 'CRM & Customer Loyalty', href: '/product/crm-loyalty', desc: 'WhatsApp bills, points & personalized promos', icon: Users },
    { name: 'Analytics & GST Reports', href: '/product/analytics', desc: 'Outlet comparison, staff & tax dashboards', icon: BarChart3 },
    { name: 'Online Ordering & QR Menu', href: '/product/online-ordering', desc: 'Direct digital ordering & Swiggy/Zomato sync', icon: Globe },
    { name: 'Multi-Store & Franchise Hub', href: '/product/multi-store', desc: 'Centralized price, menu & inventory control', icon: Store },
  ];

  // 2. Industry segments
  const industryLinks = [
    { name: 'Restaurant & Fine Dining', href: '/industries/restaurant', desc: 'Table management, KDS & Captain ordering', icon: UtensilsCrossed },
    { name: 'Cafe & Bakery', href: '/industries/cafe', desc: 'Recipe management, combo billing & custom addons', icon: Coffee },
    { name: 'QSR & Fast Food Counter', href: '/industries/qsr', desc: '3-second rapid billing & order token displays', icon: UtensilsCrossed },
    { name: 'Retail & Apparel Store', href: '/industries/retail', desc: 'Size-color-matrix, barcode printing & exchanges', icon: ShoppingBag },
    { name: 'Kirana & Supermarket', href: '/industries/grocery', desc: 'Loose item weighing scale & barcode batch lookup', icon: Store },
    { name: 'Pharmacy & Medical Store', href: '/industries/pharmacy', desc: 'Expiry alerts, batch tracking & Schedule H compliance', icon: Pill },
    { name: 'Salon, Spa & Wellness', href: '/industries/salon', desc: 'Appointment booking, therapist commissions & packages', icon: Scissors },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-sm py-2.5 border-b border-slate-200/80'
            : 'py-3 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between" ref={navRef}>
            
            {/* Left Brand + Navigation Section */}
            <div className="flex items-center gap-6 xl:gap-8">
              {/* Logo */}
              <Link href="/" className="flex-shrink-0" onClick={() => setActiveDropdown(null)}>
                <KNKLogo variant="dark" size="md" />
              </Link>

              {/* Desktop Navigation Tabs */}
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14.5px] font-semibold text-slate-800">
                
                {/* 1. Product Dropdown (Click & Hover Functional) */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('product')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                      pathname.startsWith('/product') || activeDropdown === 'product'
                        ? 'text-pos-orange font-bold bg-orange-50/60'
                        : 'text-slate-800 hover:text-pos-orange hover:bg-slate-50'
                    }`}
                    aria-expanded={activeDropdown === 'product'}
                  >
                    Product
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === 'product' ? 'rotate-180 text-pos-orange' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Container */}
                  {activeDropdown === 'product' && (
                    <div
                      className="absolute top-full left-0 w-[620px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 grid grid-cols-2 gap-2 mt-1 animate-fadeIn z-50 pt-4 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                      onMouseEnter={() => handleMouseEnter('product')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-pos-orange uppercase tracking-wider">
                          Core Software Modules
                        </span>
                        <Link
                          href="/product"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs text-slate-700 font-bold hover:text-pos-orange transition-colors flex items-center gap-1"
                        >
                          Explore All Features <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {productLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-orange-50/50 transition-colors group cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-orange-50 text-pos-orange flex items-center justify-center flex-shrink-0 group-hover:bg-pos-orange group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-pos-orange transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* 2. Industries Dropdown (Click & Hover Functional) */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                      pathname.startsWith('/industries') || activeDropdown === 'industries'
                        ? 'text-pos-orange font-bold bg-orange-50/60'
                        : 'text-slate-800 hover:text-pos-orange hover:bg-slate-50'
                    }`}
                    aria-expanded={activeDropdown === 'industries'}
                  >
                    Industries
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === 'industries' ? 'rotate-180 text-pos-orange' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Dropdown Menu Container */}
                  {activeDropdown === 'industries' && (
                    <div
                      className="absolute top-full left-0 w-[580px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-5 grid grid-cols-2 gap-2 mt-1 animate-fadeIn z-50 pt-4 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                      onMouseEnter={() => handleMouseEnter('industries')}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-bold text-pos-teal uppercase tracking-wider">
                          Tailored for Indian Outlets
                        </span>
                        <Link
                          href="/industries"
                          onClick={() => setActiveDropdown(null)}
                          className="text-xs text-slate-700 font-bold hover:text-pos-teal transition-colors flex items-center gap-1"
                        >
                          All Outlets <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>

                      {industryLinks.map((item) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setActiveDropdown(null)}
                            className="flex items-start gap-2.5 p-2.5 rounded-xl hover:bg-teal-50/50 transition-colors group cursor-pointer"
                          >
                            <div className="w-8 h-8 rounded-lg bg-teal-50 text-pos-teal flex items-center justify-center flex-shrink-0 group-hover:bg-pos-teal group-hover:text-white transition-colors">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-pos-teal transition-colors">
                                {item.name}
                              </div>
                              <div className="text-[11px] text-slate-500 leading-snug line-clamp-1">
                                {item.desc}
                              </div>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* 4. Integrations Tab */}
                <Link
                  href="/integrations"
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    pathname === '/integrations'
                      ? 'text-pos-orange font-bold bg-orange-50/60'
                      : 'text-slate-800 hover:text-pos-orange hover:bg-slate-50'
                  }`}
                >
                  Integrations
                </Link>

                {/* 5. Pricing Tab */}
                <Link
                  href="/pricing"
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    pathname === '/pricing'
                      ? 'text-pos-orange font-bold bg-orange-50/60'
                      : 'text-slate-800 hover:text-pos-orange hover:bg-slate-50'
                  }`}
                >
                  Pricing
                </Link>

                {/* 7. Resources Tab */}
                <Link
                  href="/resources"
                  className={`px-3 py-2 rounded-lg transition-colors cursor-pointer ${
                    pathname.startsWith('/resources')
                      ? 'text-pos-orange font-bold bg-orange-50/60'
                      : 'text-slate-800 hover:text-pos-orange hover:bg-slate-50'
                  }`}
                >
                  Resources
                </Link>

              </nav>
            </div>

            {/* Right Side Navigation & Action Button */}
            <div className="hidden lg:flex items-center gap-4 text-[14.5px] font-semibold text-slate-800">

              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-700 hover:text-[#FF4C00] transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-orange-50/50"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </Link>

              {/* Book A Demo Button (Toast POS Style Solid Orange Pill) */}
              <button
                type="button"
                onClick={() => openDemoModal()}
                className="bg-[#FF4C00] hover:bg-[#DE3700] text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                Book A Demo
              </button>
            </div>

            {/* Mobile Hamburger toggle */}
            <div className="flex lg:hidden items-center gap-2.5">
              <button
                type="button"
                onClick={() => openDemoModal()}
                className="bg-[#FF4C00] hover:bg-[#DE3700] text-white px-4 py-2 rounded-full font-bold text-xs transition-colors cursor-pointer shadow-sm"
              >
                Book A Demo
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordions */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-fadeIn max-h-[85vh] overflow-y-auto shadow-2xl">
            
            {/* Products Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpandedTab(mobileExpandedTab === 'product' ? null : 'product')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <Receipt className="w-4 h-4 text-pos-orange" /> Product Software
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedTab === 'product' ? 'rotate-180 text-pos-orange' : 'text-slate-400'}`} />
              </button>

              {mobileExpandedTab === 'product' && (
                <div className="pl-6 space-y-1 pt-1 pb-2">
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-slate-600 hover:text-pos-orange"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/product"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-pos-orange"
                  >
                    View All Features →
                  </Link>
                </div>
              )}
            </div>

            {/* Industries Accordion */}
            <div className="border-b border-slate-100 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpandedTab(mobileExpandedTab === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between py-2 text-sm font-bold text-slate-900"
              >
                <span className="flex items-center gap-2">
                  <Store className="w-4 h-4 text-pos-teal" /> Industry Solutions
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpandedTab === 'industries' ? 'rotate-180 text-pos-teal' : 'text-slate-400'}`} />
              </button>

              {mobileExpandedTab === 'industries' && (
                <div className="pl-6 space-y-1 pt-1 pb-2">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-slate-600 hover:text-pos-teal"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-pos-teal"
                  >
                    View All Outlets →
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-1 text-sm font-semibold text-slate-800">
              <Link
                href="/hardware"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Hardware Ecosystem
              </Link>
              <Link
                href="/integrations"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Integrations (UPI, Swiggy, Tally)
              </Link>
              <Link
                href="/pricing"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Pricing Plans
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Customer Case Studies
              </Link>
              <Link
                href="/resources"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Resources &amp; GST Guides
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-xl hover:bg-slate-50"
              >
                Contact &amp; 24/7 Support
              </Link>
            </div>

            {/* Action Buttons in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full py-3 bg-[#FF4C00] hover:bg-[#DE3700] text-white rounded-full font-bold text-sm text-center transition-colors cursor-pointer shadow-md"
              >
                Book A Demo
              </button>
              <a
                href="https://wa.me/919891578609"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-50 text-emerald-800 font-bold py-2.5 rounded-full border border-emerald-300 text-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                WhatsApp: +91 9891-578-609
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-2.5 flex items-center gap-2 shadow-2xl">
        <a
          href="https://wa.me/919891578609"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-emerald-50 text-emerald-800 border border-emerald-300 rounded-full text-xs font-bold"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" /> WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openDemoModal()}
          className="flex-[2] py-2.5 bg-[#FF4C00] hover:bg-[#DE3700] text-white font-bold rounded-full text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
        >
          <Sparkles className="w-3.5 h-3.5" /> Book A Demo
        </button>
      </div>
    </>
  );
};
