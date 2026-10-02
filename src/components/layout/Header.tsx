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
  BookOpen,
  FileText,
  PhoneCall,
  Printer,
  Zap,
  CheckCircle2,
  Video,
} from 'lucide-react';
import { KNKLogo } from '@/ui/KNKLogo';
import { useDemoModal } from '@/context/DemoModalContext';
import './Header.css';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'product' | 'industries' | 'resources' | null>(null);
  const [mobileExpandedTab, setMobileExpandedTab] = useState<'product' | 'industries' | 'resources' | null>(null);
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
  const handleMouseEnter = (menu: 'product' | 'industries' | 'resources') => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const handleIntegrationsClick = (e: React.MouseEvent) => {
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
    if (pathname === '/') {
      e.preventDefault();
      const el = document.getElementById('integrations');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // 1. Product software modules
  const productLinks = [
    { name: 'POS & Fast Billing', href: '/product/pos-billing', desc: 'Sub-second thermal billing, barcode & offline sync', icon: Receipt, tag: '⚡ Sub-2s' },
    { name: 'Inventory & Stock Alerts', href: '/product/inventory', desc: 'Real-time multi-location stock & wastage control', icon: Boxes, tag: '📦 Real-Time' },
    { name: 'GST & E-Way Compliance', href: '/product/gst-compliance', desc: 'Automated GSTR-1/3B reports & HSN lookup', icon: ShieldCheck, tag: '🛡️ GST 2.0' },
    { name: 'UPI & Multi-Mode Payments', href: '/product/payments', desc: 'QR code soundbox, cards & split payments', icon: CreditCard, tag: '🔊 Soundbox' },
    { name: 'CRM & Customer Loyalty', href: '/product/crm-loyalty', desc: 'WhatsApp bills, points & personalized promos', icon: Users, tag: '💬 WhatsApp' },
    { name: 'Analytics & GST Reports', href: '/product/analytics', desc: 'Outlet comparison, staff & tax dashboards', icon: BarChart3, tag: '📊 Heatmaps' },
    { name: 'Online Ordering & QR Menu', href: '/product/online-ordering', desc: 'Direct digital ordering & Swiggy/Zomato sync', icon: Globe, tag: '🌐 0% Comms' },
    { name: 'Multi-Store & Franchise Hub', href: '/product/multi-store', desc: 'Centralized price, menu & inventory control', icon: Store, tag: '🏢 Multi-Store' },
  ];

  // 2. Industry segments
  const industryLinks = [
    { name: 'Restaurant & Fine Dining', href: '/industries/restaurant', desc: 'Table management, KDS & Captain ordering', icon: UtensilsCrossed, tag: '🍽️ F&B' },
    { name: 'Cafe & Bakery', href: '/industries/cafe', desc: 'Recipe management, combo billing & custom addons', icon: Coffee, tag: '☕ Modifiers' },
    { name: 'QSR & Fast Food Counter', href: '/industries/qsr', desc: '3-second rapid billing & order token displays', icon: UtensilsCrossed, tag: '⚡ 3-Sec' },
    { name: 'Retail & Apparel Store', href: '/industries/retail', desc: 'Size-color-matrix, barcode printing & exchanges', icon: ShoppingBag, tag: '👕 Matrix' },
    { name: 'Kirana & Supermarket', href: '/industries/grocery', desc: 'Loose item weighing scale & barcode batch lookup', icon: Store, tag: '⚖️ Scale Sync' },
    { name: 'Pharmacy & Medical Store', href: '/industries/pharmacy', desc: 'Expiry alerts, batch tracking & Schedule H compliance', icon: Pill, tag: '💊 Expiry' },
    { name: 'Salon, Spa & Wellness', href: '/industries/salon', desc: 'Appointment booking, therapist commissions & packages', icon: Scissors, tag: '✂️ Scheduler' },
  ];

  // 3. Resources links
  const resourceLinks = [
    { name: 'GST 2.0 Invoicing & HSN Guide', href: '/resources/blog', desc: 'Complete tax slabs, HSN/SAC codes & CA checklist', icon: FileText, tag: 'Tax Guide' },
    { name: 'Thermal Printer & Scanner Setup', href: '/hardware', desc: 'Plug & play manual for EPSON, TVS, NGX & Bluetooth', icon: Printer, tag: 'Hardware' },
    { name: 'Restaurant Recipe & Costing Playbook', href: '/resources/blog', desc: 'Reduce wastage & calculate food margins', icon: BookOpen, tag: 'F&B Strategy' },
    { name: 'Swiggy & Zomato Optimization Playbook', href: '/resources/blog', desc: 'Maximize delivery ratings & menu combo conversions', icon: Video, tag: 'Growth' },
    { name: 'Knowledge Base & Video Guides', href: '/resources', desc: 'Step-by-step cashier training & owner tutorials', icon: Sparkles, tag: 'Tutorials' },
    { name: '24/7 Regional Technical Support', href: '', isDemo: true, desc: 'Direct WhatsApp and phone assistance across India', icon: PhoneCall, tag: 'Live Help' },
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-white dark:bg-[#0D1117] transition-all duration-200 ${
          isScrolled
            ? 'shadow-sm py-2 border-b border-slate-200/80 dark:border-slate-800'
            : 'py-2.5 border-b border-slate-100 dark:border-slate-800/80'
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
              <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-[14px] font-semibold text-slate-800 dark:text-slate-200">
                
                {/* 1. PRODUCT ANIMATED DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('product')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'product' ? null : 'product')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      pathname.startsWith('/product') || activeDropdown === 'product'
                        ? 'text-pos-orange font-bold bg-orange-50/60 dark:bg-orange-500/10'
                        : 'text-slate-800 dark:text-slate-200 hover:text-pos-orange dark:hover:text-pos-orange hover:bg-slate-50 dark:hover:bg-slate-800/60'
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

                  {/* Mega-Menu Dropdown Panel */}
                  {activeDropdown === 'product' && (
                    <div
                      className="absolute top-full left-0 w-[740px] bg-white dark:bg-[#151B26] rounded-2xl p-4 grid grid-cols-12 gap-4 mt-1 z-50 mega-menu-panel pt-4 border border-slate-200 dark:border-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                      onMouseEnter={() => handleMouseEnter('product')}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Left 8 Modules List */}
                      <div className="col-span-8 space-y-1">
                        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="text-[10.5px] font-bold text-[#FF4C00] uppercase tracking-wider flex items-center gap-1.5">
                            <span className="header-live-dot" /> Core POS Modules
                          </span>
                          <Link
                            href="/product"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-slate-700 dark:text-slate-300 font-bold hover:text-[#FF4C00] transition-colors flex items-center gap-1"
                          >
                            All Modules <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {productLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-2 p-1.5 rounded-lg mega-menu-item cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/80"
                              >
                                <div className="w-7 h-7 rounded-md bg-[#FFF3EF] dark:bg-slate-800 text-[#FF4C00] flex items-center justify-center flex-shrink-0 mega-menu-icon shadow-xs">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF4C00] transition-colors truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Feature Card */}
                      <div className="col-span-4 mega-menu-featured-card p-3.5 text-white flex flex-col justify-between">
                        <div className="mega-menu-featured-glow" />
                        <div className="space-y-1.5 relative z-10">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20 text-[#FF7A3D] text-[9.5px] font-bold uppercase">
                            <Zap className="w-2.5 h-2.5" /> Offline First
                          </div>
                          <div className="text-xs font-bold text-white leading-tight">
                            Zero Bills Lost During Internet Cuts
                          </div>
                          <p className="text-[10px] text-slate-300 leading-relaxed">
                            Continuous local database processing with instant thermal print.
                          </p>
                        </div>

                        <div className="pt-2 relative z-10">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown(null);
                              openDemoModal();
                            }}
                            className="w-full py-1.5 px-2.5 rounded-lg bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors shadow-xs flex items-center justify-center gap-1"
                          >
                            <span>Schedule Live Demo</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. INDUSTRIES ANIMATED DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('industries')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'industries' ? null : 'industries')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      pathname.startsWith('/industries') || activeDropdown === 'industries'
                        ? 'text-pos-orange font-bold bg-orange-50/60 dark:bg-orange-500/10'
                        : 'text-slate-800 dark:text-slate-200 hover:text-pos-orange dark:hover:text-pos-orange hover:bg-slate-50 dark:hover:bg-slate-800/60'
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

                  {/* Mega-Menu Dropdown Panel */}
                  {activeDropdown === 'industries' && (
                    <div
                      className="absolute top-full left-0 w-[720px] bg-white dark:bg-[#151B26] rounded-2xl p-4 grid grid-cols-12 gap-4 mt-1 z-50 mega-menu-panel pt-4 border border-slate-200 dark:border-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                      onMouseEnter={() => handleMouseEnter('industries')}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Left 7 Outlets List */}
                      <div className="col-span-8 space-y-1">
                        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="text-[10.5px] font-bold text-teal-700 dark:text-teal-400 uppercase tracking-wider flex items-center gap-1.5">
                            <span className="header-live-dot" /> Tailored for Indian Retail &amp; F&amp;B
                          </span>
                          <Link
                            href="/industries"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-slate-700 dark:text-slate-300 font-bold hover:text-teal-700 transition-colors flex items-center gap-1"
                          >
                            All Outlets <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {industryLinks.map((item) => {
                            const Icon = item.icon;
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-2 p-1.5 rounded-lg mega-menu-item cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/80"
                              >
                                <div className="w-7 h-7 rounded-md bg-teal-50 dark:bg-slate-800 text-teal-700 dark:text-teal-400 flex items-center justify-center flex-shrink-0 mega-menu-icon shadow-xs">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-teal-700 dark:group-hover:text-teal-400 transition-colors truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Feature Card */}
                      <div className="col-span-4 mega-menu-featured-card p-3.5 text-white flex flex-col justify-between">
                        <div className="mega-menu-featured-glow" />
                        <div className="space-y-1.5 relative z-10">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-teal-500/20 text-teal-300 text-[9.5px] font-bold uppercase">
                            <CheckCircle2 className="w-2.5 h-2.5" /> Pre-Configured
                          </div>
                          <div className="text-xs font-bold text-white leading-tight">
                            Custom Menus, HSN &amp; Barcodes Included
                          </div>
                          <p className="text-[10px] text-slate-300 leading-relaxed">
                            Complimentary data import and printer configuration.
                          </p>
                        </div>

                        <div className="pt-2 relative z-10">
                          <button
                            type="button"
                            onClick={() => {
                              setActiveDropdown(null);
                              openDemoModal();
                            }}
                            className="w-full py-1.5 px-2.5 rounded-lg bg-teal-600 text-white font-bold text-xs hover:bg-teal-700 transition-colors shadow-xs flex items-center justify-center gap-1"
                          >
                            <span>Explore Industry Setup</span>
                            <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. INTEGRATIONS LINK */}
                <Link
                  href="/#integrations"
                  onClick={handleIntegrationsClick}
                  className="px-3 py-1.5 rounded-lg transition-colors cursor-pointer text-slate-800 dark:text-slate-200 hover:text-pos-orange dark:hover:text-pos-orange hover:bg-slate-50 dark:hover:bg-slate-800/60"
                >
                  Integrations
                </Link>

                {/* 4. RESOURCES ANIMATED DROPDOWN */}
                <div
                  className="relative"
                  onMouseEnter={() => handleMouseEnter('resources')}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                    className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                      pathname.startsWith('/resources') || activeDropdown === 'resources'
                        ? 'text-pos-orange font-bold bg-orange-50/60 dark:bg-orange-500/10'
                        : 'text-slate-800 dark:text-slate-200 hover:text-pos-orange dark:hover:text-pos-orange hover:bg-slate-50 dark:hover:bg-slate-800/60'
                    }`}
                    aria-expanded={activeDropdown === 'resources'}
                  >
                    Resources
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${
                        activeDropdown === 'resources' ? 'rotate-180 text-pos-orange' : 'text-slate-400'
                      }`}
                    />
                  </button>

                  {/* Mega-Menu Dropdown Panel */}
                  {activeDropdown === 'resources' && (
                    <div
                      className="absolute top-full left-0 w-[700px] bg-white dark:bg-[#151B26] rounded-2xl p-4 grid grid-cols-12 gap-4 mt-1 z-50 mega-menu-panel pt-4 border border-slate-200 dark:border-slate-800 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-4 before:bg-transparent"
                      onMouseEnter={() => handleMouseEnter('resources')}
                      onMouseLeave={handleMouseLeave}
                    >
                      {/* Left 6 Resource Links */}
                      <div className="col-span-8 space-y-1">
                        <div className="flex items-center justify-between pb-1.5 mb-1.5 border-b border-slate-100 dark:border-slate-800">
                          <span className="text-[10.5px] font-bold text-[#FF4C00] uppercase tracking-wider flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" /> Guides &amp; Manuals
                          </span>
                          <Link
                            href="/resources"
                            onClick={() => setActiveDropdown(null)}
                            className="text-xs text-slate-700 dark:text-slate-300 font-bold hover:text-[#FF4C00] transition-colors flex items-center gap-1"
                          >
                            Resources Hub <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>

                        <div className="grid grid-cols-2 gap-1">
                          {resourceLinks.map((item) => {
                            const Icon = item.icon;
                            if (item.isDemo) {
                              return (
                                <button
                                  key={item.name}
                                  type="button"
                                  onClick={() => {
                                    setActiveDropdown(null);
                                    openDemoModal(item.name);
                                  }}
                                  className="w-full text-left flex items-start gap-2 p-1.5 rounded-lg mega-menu-item cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/80"
                                >
                                  <div className="w-7 h-7 rounded-md bg-orange-50 dark:bg-slate-800 text-[#FF4C00] flex items-center justify-center flex-shrink-0 mega-menu-icon shadow-xs">
                                    <Icon className="w-3.5 h-3.5" />
                                  </div>
                                  <div className="min-w-0">
                                    <div className="flex items-center gap-1">
                                      <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF4C00] transition-colors truncate">
                                        {item.name}
                                      </span>
                                    </div>
                                    <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                                      {item.desc}
                                    </div>
                                  </div>
                                </button>
                              );
                            }
                            return (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="flex items-start gap-2 p-1.5 rounded-lg mega-menu-item cursor-pointer group hover:bg-slate-50 dark:hover:bg-slate-800/80"
                              >
                                <div className="w-7 h-7 rounded-md bg-orange-50 dark:bg-slate-800 text-[#FF4C00] flex items-center justify-center flex-shrink-0 mega-menu-icon shadow-xs">
                                  <Icon className="w-3.5 h-3.5" />
                                </div>
                                <div className="min-w-0">
                                  <div className="flex items-center gap-1">
                                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-[#FF4C00] transition-colors truncate">
                                      {item.name}
                                    </span>
                                  </div>
                                  <div className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>

                      {/* Right Feature Card */}
                      <div className="col-span-4 mega-menu-featured-card p-3.5 text-white flex flex-col justify-between">
                        <div className="mega-menu-featured-glow" />
                        <div className="space-y-1.5 relative z-10">
                          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/20 text-[#FF7A3D] text-[9.5px] font-bold uppercase">
                            <FileText className="w-2.5 h-2.5" /> Free Checklist
                          </div>
                          <div className="text-xs font-bold text-white leading-tight">
                            2026 GST 2.0 Invoicing Guide
                          </div>
                          <p className="text-[10px] text-slate-300 leading-relaxed">
                            Master tax slabs, HSN codes, and CA audit checklists.
                          </p>
                        </div>

                        <div className="pt-2 relative z-10">
                          <Link
                            href="/resources/blog"
                            onClick={() => setActiveDropdown(null)}
                            className="w-full py-1.5 px-2.5 rounded-lg bg-[#FF4C00] text-white font-bold text-xs hover:bg-[#de3700] transition-colors shadow-xs flex items-center justify-center gap-1"
                          >
                            <span>Download Free PDF</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

              </nav>
            </div>

            {/* Right Side Navigation & Action Button */}
            <div className="hidden lg:flex items-center gap-3 text-[14px] font-semibold text-slate-800">
              {/* Book A Demo Button */}
              <button
                type="button"
                onClick={() => openDemoModal()}
                className="bg-[#FF4C00] hover:bg-[#DE3700] text-white px-5 py-2 rounded-full font-bold text-xs transition-all duration-200 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
              >
                Book A Demo
              </button>
            </div>

            {/* Mobile Hamburger toggle & Demo */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => openDemoModal()}
                className="bg-[#FF4C00] hover:bg-[#DE3700] text-white px-3 py-1.5 rounded-full font-bold text-xs transition-colors cursor-pointer shadow-sm"
              >
                Demo
              </button>
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-lg text-slate-800 hover:bg-slate-100 transition-colors cursor-pointer"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer with Accordions */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-[#0D1117] border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 animate-fadeIn max-h-[85vh] overflow-y-auto shadow-2xl">
            
            {/* Products Accordion */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpandedTab(mobileExpandedTab === 'product' ? null : 'product')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold text-slate-900 dark:text-white"
              >
                <span className="flex items-center gap-2">
                  <Receipt className="w-3.5 h-3.5 text-pos-orange" /> Product Software
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpandedTab === 'product' ? 'rotate-180 text-pos-orange' : 'text-slate-400'}`} />
              </button>

              {mobileExpandedTab === 'product' && (
                <div className="pl-5 space-y-1 pt-1 pb-2">
                  {productLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-pos-orange"
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
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpandedTab(mobileExpandedTab === 'industries' ? null : 'industries')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold text-slate-900 dark:text-white"
              >
                <span className="flex items-center gap-2">
                  <Store className="w-3.5 h-3.5 text-teal-700 dark:text-teal-400" /> Industry Solutions
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpandedTab === 'industries' ? 'rotate-180 text-teal-700' : 'text-slate-400'}`} />
              </button>

              {mobileExpandedTab === 'industries' && (
                <div className="pl-5 space-y-1 pt-1 pb-2">
                  {industryLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-teal-700"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/industries"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-teal-700 dark:text-teal-400"
                  >
                    View All Outlets →
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Accordion */}
            <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
              <button
                type="button"
                onClick={() => setMobileExpandedTab(mobileExpandedTab === 'resources' ? null : 'resources')}
                className="w-full flex items-center justify-between py-2 text-xs font-bold text-slate-900 dark:text-white"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-3.5 h-3.5 text-[#FF4C00]" /> Resources &amp; Guides
                </span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${mobileExpandedTab === 'resources' ? 'rotate-180 text-[#FF4C00]' : 'text-slate-400'}`} />
              </button>

              {mobileExpandedTab === 'resources' && (
                <div className="pl-5 space-y-1 pt-1 pb-2">
                  {resourceLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 hover:text-[#FF4C00]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/resources"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-1.5 text-xs font-bold text-[#FF4C00]"
                  >
                    Explore Knowledge Hub →
                  </Link>
                </div>
              )}
            </div>

            {/* Direct Links */}
            <div className="space-y-1 text-xs font-semibold text-slate-800 dark:text-slate-200">
              <Link
                href="/hardware"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Hardware Ecosystem
              </Link>
              <Link
                href="/#integrations"
                onClick={handleIntegrationsClick}
                className="block px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer"
              >
                Integrations (UPI, Swiggy, Tally)
              </Link>
              <Link
                href="/case-studies"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800"
              >
                Customer Case Studies
              </Link>
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal('Contact & 24/7 Support');
                }}
                className="w-full text-left block px-3 py-1.5 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 cursor-pointer text-slate-800 dark:text-slate-200"
              >
                Contact &amp; 24/7 Support
              </button>
            </div>

            {/* Action Buttons in Mobile Drawer */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openDemoModal();
                }}
                className="w-full py-2.5 bg-[#FF4C00] hover:bg-[#DE3700] text-white rounded-full font-bold text-xs text-center transition-colors cursor-pointer shadow-sm"
              >
                Book A Demo
              </button>
              <a
                href="https://wa.me/919891578609"
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-1.5 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 font-bold py-2 rounded-full border border-emerald-300 dark:border-emerald-800 text-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                WhatsApp: +91 9891-578-609
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Sticky Bottom CTA Bar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 dark:bg-[#0D1117]/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-2 flex items-center gap-2 shadow-2xl">
        <a
          href="https://wa.me/919891578609"
          target="_blank"
          rel="noreferrer"
          className="flex-1 flex items-center justify-center gap-1 py-2 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-800 rounded-full text-xs font-bold"
        >
          <MessageCircle className="w-3.5 h-3.5 text-emerald-600" /> WhatsApp
        </a>
        <button
          type="button"
          onClick={() => openDemoModal()}
          className="flex-[2] py-2 bg-[#FF4C00] hover:bg-[#DE3700] text-white font-bold rounded-full text-xs flex items-center justify-center gap-1 shadow-sm cursor-pointer"
        >
          <Sparkles className="w-3 h-3" /> Book A Demo
        </button>
      </div>
    </>
  );
};

export default Header;
