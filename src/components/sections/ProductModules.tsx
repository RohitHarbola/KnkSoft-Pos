'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import Image from 'next/image';
import {
  Receipt,
  Boxes,
  ShieldCheck,
  CreditCard,
  Users,
  BarChart3,
  ArrowRight,
  Zap,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export const MODULES = [
  {
    id: 'pos',
    name: 'POS & Fast Billing',
    icon: Receipt,
    image: '/home/hp-vision1.png',
    caption: 'Keep serving customers with instant barcode scan and offline billing.',
  },
  {
    id: 'inventory',
    name: 'Real-Time Inventory',
    icon: Boxes,
    image: '/home/hp-vision2.png',
    caption: 'Track every batch, SKU, and ingredient to prevent stockouts during peak rush.',
  },
  {
    id: 'gst',
    name: 'GST & Compliance',
    icon: ShieldCheck,
    image: '/home/hp-vision3.png',
    caption: '100% accurate GST calculations, e-invoicing & 1-click filing exports.',
  },
   {
    id: 'Multi Store',
    name: 'Multi-Store Management',
    icon: ShieldCheck,
    image: '/home/hp-vision3.png',
    caption: 'Seamless management of multiple locations with centralized control and reporting.',
  },
  {
    id: 'payments',
    name: 'UPI & Multi-Mode',
    icon: CreditCard,
    image: '/home/hp-vision4.png',
    caption: 'Instant dynamic UPI QR with multi-lingual audio confirmation.',
  },
  {
    id: 'crm',
    name: 'CRM & Loyalty',
    icon: Users,
    image: '/home/hp-vision2.png',
    caption: 'Zero-paper WhatsApp digital bills and automated customer loyalty points.',
  },
  {
    id: 'analytics',
    name: 'Smart Analytics',
    icon: BarChart3,
    image: '/home/hp-vision1.png',
    caption: 'Live sales heatmaps, margin analytics, and outlet comparisons in real time.',
  },
];

export const ProductModules: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const isHoveringRef = useRef(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { openDemoModal } = useDemoModal();

  const activeModule = MODULES[activeIndex] || MODULES[0];

  /**
   * Scroll Synchronization:
   * As the user scrolls through the track, calculates the scroll progress
   * through the pinned track and smoothly activates the respective module (0 to 5).
   */
  const handleScroll = useCallback(() => {
    // If user recently hovered on a tab with mouse, don't immediately override it with micro-scroll
    if (isHoveringRef.current) return;
    if (!trackRef.current) return;

    const rect = trackRef.current.getBoundingClientRect();
    const pinTop = 80;
    const card = trackRef.current.querySelector('.midshift-container');
    const cardHeight = card ? card.getBoundingClientRect().height : 540;

    const totalPinDistance = rect.height - cardHeight;
    if (totalPinDistance <= 0) return;

    const currentScrolled = pinTop - rect.top;

    if (currentScrolled >= 0 && currentScrolled <= totalPinDistance) {
      const progress = Math.max(0, Math.min(0.999, currentScrolled / totalPinDistance));
      const total = MODULES.length;
      const index = Math.floor(progress * total);
      setActiveIndex(Math.max(0, Math.min(total - 1, index)));
    } else if (currentScrolled < 0) {
      setActiveIndex(0);
    } else if (currentScrolled > totalPinDistance) {
      setActiveIndex(MODULES.length - 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, [handleScroll]);

  /**
   * Cursor Move / Hover Handler:
   * Instantly highlights the hovered module and displays its image and caption.
   */
  const handleMouseEnter = (idx: number) => {
    setActiveIndex(idx);
    isHoveringRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Re-enable scroll sync after cursor settles
    hoverTimeoutRef.current = setTimeout(() => {
      isHoveringRef.current = false;
    }, 600);
  };

  /**
   * Nav Item Click Handler:
   * Sets active index and smoothly scrolls the track to that item's position.
   */
  const handleNavClick = (idx: number) => {
    setActiveIndex(idx);
    isHoveringRef.current = true;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    hoverTimeoutRef.current = setTimeout(() => {
      isHoveringRef.current = false;
    }, 800);

    if (trackRef.current && window.innerWidth > 1024) {
      const rect = trackRef.current.getBoundingClientRect();
      const trackTop = window.scrollY + rect.top;
      const pinTop = 80;
      const card = trackRef.current.querySelector('.midshift-container');
      const cardHeight = card ? card.getBoundingClientRect().height : 540;
      const totalPinDistance = rect.height - cardHeight;
      if (totalPinDistance > 0) {
        const targetScrollY = trackTop - pinTop + (idx / (MODULES.length - 1)) * totalPinDistance + 5;
        window.scrollTo({ top: targetScrollY, behavior: 'smooth' });
      }
    }
  };

  // Vertical sliding offset for the list
  const listTranslateY = Math.max(0, (activeIndex - 1) * -52);

  return (
    <section className="product-modules-scroll-track" id="features" ref={trackRef}>
      <div className="midshift-sticky-pin">
        <div className="product-modules-inner">
          <div className="midshift-container">
            {/* ==============================
                LEFT COLUMN — Header & Sliding List
               ============================== */}
            <div className="midshift-left-col">
              <div className="midshift-header">
                <div className="product-modules-eyebrow">
                  <Zap style={{ width: 14, height: 14 }} /> All-in-One Operating System
                </div>
                <h2 className="product-modules-title">
                  Designed for what happens mid-shift
                </h2>
                <p className="product-modules-subtitle">
                  Lots of systems can do a little bit of everything. Our difference?
                  The details that make or break success.
                </p>
              </div>

              {/* Vertical Feature Sliding Viewport */}
              <div className="midshift-nav-viewport">
                <div
                  className="midshift-nav-list"
                  role="tablist"
                  aria-label="Feature Modules"
                  style={{
                    transform: `translateY(${listTranslateY}px)`,
                    transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {MODULES.map((mod, idx) => {
                    const isActive = idx === activeIndex;
                    return (
                      <div
                        key={mod.id}
                        className={`midshift-step-item ${isActive ? 'is-active' : ''}`}
                      >
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          onClick={() => handleNavClick(idx)}
                          onMouseEnter={() => handleMouseEnter(idx)}
                          onMouseMove={() => handleMouseEnter(idx)}
                          className={`midshift-nav-item ${isActive ? 'active' : ''}`}
                        >
                          <span className="midshift-nav-label">{mod.name}</span>
                          {isActive && (
                            <span className="midshift-nav-arrow" aria-hidden="true">
                              <ArrowRight style={{ width: 20, height: 20, strokeWidth: 2.5 }} />
                            </span>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* ==============================
                RIGHT COLUMN — Fixed Position Image Frame
               ============================== */}
            <div className="midshift-right-col">
              <div className="midshift-image-frame">
                {/* Stacked image layers with smooth crossfade */}
                {MODULES.map((mod, idx) => (
                  <div
                    key={mod.id}
                    className={`midshift-image-layer ${idx === activeIndex ? 'is-active' : ''}`}
                    aria-hidden={idx !== activeIndex}
                  >
                    <Image
                      src={mod.image}
                      alt={mod.name}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="midshift-image"
                    />
                  </div>
                ))}

                {/* Bottom Caption Overlay */}
                <div className="midshift-caption-banner">
                  <p className="midshift-caption-text">{activeModule.caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductModules;