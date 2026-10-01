'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Store,
  UtensilsCrossed,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

interface ShowcaseCard {
  id: string;
  title: string;
  subtitle: string;
  images: string[];
  widgetType?:
  | 'pos'
  | 'toast-iq-restaurant'
  | 'hardware-dock'
  | 'online-ordering-restaurant'
  | 'loyalty-30'
  | 'kds'
  | 'integrations'
  | 'payments-puck'
  | 'toast-retail-scan'
  | 'toast-iq-retail'
  | 'hardware-dual'
  | 'catering-invoice'
  | 'loyalty-45'
  | 'retail-mobile-order'
  | 'handheld-pos';
}

const RESTAURANT_CARDS: ShowcaseCard[] = [
  {
    id: 'rest-pos',
    title: 'Point of sale',
    subtitle: 'Packed with 1,000 powerful features.',
    images: ['/showcase/pos-terminal.jpg', '/modules/pos.png', '/showcase/dual-screen.jpg'],
    widgetType: 'pos',
  },
  {
    id: 'rest-iq',
    title: 'KNK IQ',
    subtitle: 'AI assistant that gets stuff done.',
    images: ['/showcase/analytics-ai.jpg', '/modules/analytics.png'],
    widgetType: 'toast-iq-restaurant',
  },
  {
    id: 'rest-hardware',
    title: 'Hardware',
    subtitle: 'Battle-tested in busy businesses.',
    images: ['/showcase/handheld-dock.jpg', '/showcase/dual-screen.jpg', '/showcase/Knkshowcase.png'],
    widgetType: 'hardware-dock',
  },
  {
    id: 'rest-online-ordering',
    title: 'Online ordering',
    subtitle: 'Add a revenue stream, commission-free.',
    images: ['/showcase/online-ordering.jpg', '/modules/crm.png'],
    widgetType: 'online-ordering-restaurant',
  },
  {
    id: 'rest-marketing',
    title: 'Marketing',
    subtitle: 'SMS, email, loyalty, gift cards, and more.',
    images: ['/showcase/loyalty-rewards.jpg', '/modules/crm.png', '/showcase/analytics-ai.jpg'],
    widgetType: 'loyalty-30',
  },
  {
    id: 'rest-kds',
    title: 'Kitchen display system',
    subtitle: 'Every order from every channel in one place.',
    images: ['/showcase/kds-display.jpg', '/modules/Kitchen.png', '/showcase/handheld-dock.jpg'],
    widgetType: 'kds',
  },
  {
    id: 'rest-integrations',
    title: 'Integrations',
    subtitle: 'Extended capabilities with 300+ partners.',
    images: ['/showcase/online-ordering.jpg', '/showcase/pos-terminal.jpg', '/modules/payments.png'],
    widgetType: 'integrations',
  },
  {
    id: 'rest-payments',
    title: 'Payments',
    subtitle: 'Integrated, PCI-compliant.',
    images: ['/showcase/Knkshowcase.png', '/showcase/handheld-dock.jpg', '/modules/payments.png'],
    widgetType: 'payments-puck',
  },
];

const RETAIL_CARDS: ShowcaseCard[] = [
  {
    id: 'ret-pos',
    title: 'Point of sale',
    subtitle: 'Packed with 1,000 powerful features.',
    images: ['/showcase/dual-screen.jpg', '/showcase/pos-terminal.jpg', '/modules/pos.png'],
    widgetType: 'pos',
  },
  {
    id: 'ret-retail',
    title: 'KNK Retail',
    subtitle: 'Run your store from one connected place.',
    images: ['/showcase/retail-scanner.jpg', '/showcase/dual-screen.jpg', '/modules/retail.png'],
    widgetType: 'toast-retail-scan',
  },
  {
    id: 'ret-iq',
    title: 'KNK IQ',
    subtitle: 'AI for the ins and outs of retail.',
    images: ['/showcase/analytics-ai.jpg', '/modules/analytics.png', '/showcase/retail-scanner.jpg'],
    widgetType: 'toast-iq-retail',
  },
  {
    id: 'ret-hardware',
    title: 'Hardware',
    subtitle: 'Flexible and fast with automatic offline mode.',
    images: ['/showcase/dual-screen.jpg', '/showcase/handheld-dock.jpg', '/showcase/retail-scanner.jpg'],
    widgetType: 'hardware-dual',
  },
  {
    id: 'ret-catering',
    title: 'Catering and events',
    subtitle: 'Simplify catering, from BEOs to billing.',
    images: ['/showcase/online-ordering.jpg', '/modules/catering.png', '/showcase/dual-screen.jpg'],
    widgetType: 'catering-invoice',
  },
  {
    id: 'ret-marketing',
    title: 'Marketing',
    subtitle: 'Bring customers in and bring them back.',
    images: ['/showcase/loyalty-rewards.jpg', '/modules/crm.png', '/showcase/analytics-ai.jpg'],
    widgetType: 'loyalty-45',
  },
  {
    id: 'ret-online-ordering',
    title: 'Online ordering',
    subtitle: 'Add commission-free revenue streams.',
    images: ['/showcase/online-ordering.jpg', '/modules/inventory.png', '/showcase/pos-terminal.jpg'],
    widgetType: 'retail-mobile-order',
  },
  {
    id: 'ret-handheld',
    title: 'Handheld POS',
    subtitle: 'Lightning fast, with smart features built in.',
    images: ['/showcase/handheld-dock.jpg', '/showcase/retail-scanner.jpg', '/showcase/Knkshowcase.png'],
    widgetType: 'handheld-pos',
  },
];

interface BrandPartner {
  id: string;
  name: string;
  tagline: string;
  logo: string;
}

/** Official Brand Partner data for prominent Indian QSR and restaurant chains */
const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: 'barista',
    name: 'BARISTA COFFEE',
    tagline: 'Your Premium Coffee Ritual',
    logo: '/brands/barista.svg',
  },
  {
    id: 'wow-momo',
    name: 'WOW! MOMO',
    tagline: "Flavours That Wow Always",
    logo: '/brands/wow-momo.svg',
  },
  {
    id: 'goli-vada-pav',
    name: 'GOLI VADA PAV',
    tagline: "India’s Ultimate Native Burger",
    logo: '/brands/goli-vada-pav.svg',
  },
  {
    id: 'burger-singh',
    name: 'BURGER SINGH',
    tagline: "Big Desi Craft Burgers",
    logo: '/brands/burger-singh.svg',
  },
  {
    id: 'biryani-blues',
    name: 'BIRYANI BLUES',
    tagline: 'Authentic Dum Biryani Perfection',
    logo: '/brands/biryani-blues.svg',
  },
  {
    id: 'jumboking',
    name: 'JUMBOKING',
    tagline: "Pure On-The-Go Satisfaction",
    logo: '/brands/jumboking.svg',
  },
];

/** Interactive Modern Card with Multi-Image Cursor Scrubbing, 3D Parallax Tilt, and Cursor Spotlight */
const InteractiveShowcaseCard: React.FC<{
  card: ShowcaseCard;
  onOpenDemo: () => void;
}> = ({ card, onOpenDemo }) => {
  const [activeImgIdx, setActiveImgIdx] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [glow, setGlow] = useState({ x: 50, y: 50 });
  const cardRef = useRef<HTMLDivElement>(null);

  const images = card.images && card.images.length > 0 ? card.images : ['/modules/pos.png'];

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const width = rect.width;
    const height = rect.height;

    // Multi-Image vertical scrubbing: moves image from bottom to top as cursor moves
    const segmentHeight = height / images.length;
    const newIdx = Math.min(images.length - 1, Math.max(0, Math.floor(y / segmentHeight)));
    setActiveImgIdx(newIdx);

    // 3D Parallax Tilt calculation
    const centerX = width / 2;
    const centerY = height / 2;
    const rx = ((y - centerY) / centerY) * -5.5;
    const ry = ((x - centerX) / centerX) * 5.5;
    setTilt({ rx, ry });

    // Spotlight glow coordinates
    setGlow({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ rx: 0, ry: 0 });
    setActiveImgIdx(0);
  };

  return (
    <div
      ref={cardRef}
      className={`toast-feature-card ${isHovered ? 'is-hovered' : ''}`}
      onClick={onOpenDemo}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="button"
      tabIndex={0}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${tilt.rx.toFixed(2)}deg) rotateY(${tilt.ry.toFixed(2)}deg) translateY(-8px) scale3d(1.02, 1.02, 1.02)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)',
      }}
    >
      {/* Dynamic Cursor Ambient Spotlight Follower */}
      <div
        className="toast-card-spotlight"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(320px circle at ${glow.x}px ${glow.y}px, rgba(255, 255, 255, 0.22), transparent 70%)`,
        }}
      />

      {/* Hover Pop Arrow Button */}
      <div className="toast-card-arrow-badge" aria-hidden="true">
        <ArrowRight style={{ width: 16, height: 16, strokeWidth: 2.5 }} />
      </div>

      {/* Full-Bleed Card Media Area */}
      <div className="toast-card-media-wrapper">
        <div className="toast-card-bg-gradient" />

        {/* Stacked Multi-Image Layers with Smooth Bottom-to-Top Slide */}
        {images.map((imgSrc, idx) => {
          const isActive = idx === activeImgIdx;
          const isPast = idx < activeImgIdx;
          const isFuture = idx > activeImgIdx;

          let translateY = '0%';
          if (isPast) translateY = '-100%';
          if (isFuture) translateY = '100%';

          return (
            <div
              key={idx}
              className={`toast-card-img-layer ${isActive ? 'is-active' : ''}`}
              style={{
                transform: `translateY(${translateY}) scale(${isActive ? 1.02 : 0.98})`,
                opacity: isActive ? 1 : 0,
                zIndex: isActive ? 3 : 1,
              }}
              aria-hidden={!isActive}
            >
              <Image
                src={imgSrc}
                alt={`${card.title} preview ${idx + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="toast-card-img"
              />
            </div>
          );
        })}

      </div>

      {/* Card Footer Text */}
      <div className="toast-card-footer">
        <h3 className="toast-card-title">{card.title}</h3>
        <p className="toast-card-subtitle">{card.subtitle}</p>
      </div>
    </div>
  );
};

export const TrustBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'restaurants' | 'retail'>('restaurants');
  const [hoveredBrandId, setHoveredBrandId] = useState<string | null>(null);
  const { openDemoModal } = useDemoModal();

  const cards = activeTab === 'restaurants' ? RESTAURANT_CARDS : RETAIL_CARDS;

  return (
    <section className="toast-trustbar-section" id="platform">
      <div className="toast-trustbar-inner">
        {/* ============================================================
            1. DUAL BRAND TICKERS (Row 1: Right-to-Left, Row 2: Left-to-Right)
           ============================================================ */}
        <div className="toast-brand-ticker-container">
          {/* Row 1: Right-to-Left Ticker */}
          <div className={`toast-brand-ticker-track ${hoveredBrandId ? 'has-hover' : ''}`}>
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => {
              const isHovered = hoveredBrandId === `r1-${brand.id}-${idx}`;
              return (
                <div
                  key={`r1-${brand.id}-${idx}`}
                  className={`toast-brand-logo-item ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredBrandId(`r1-${brand.id}-${idx}`)}
                  onMouseLeave={() => setHoveredBrandId(null)}
                >
                  {/* Brand Logo Image */}
                  <div className="toast-brand-logo-display flex items-center justify-center h-10 w-44">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={176}
                      height={44}
                      className="h-9 w-auto max-w-[170px] object-contain transition-all duration-300 filter contrast-125"
                    />
                  </div>

                  {/* Hover Popup Tooltip Card (Exact Interactive Design) */}
                  <div className={`toast-logo-hover-card ${isHovered ? 'show' : ''}`}>
                    <div className="toast-logo-hover-name">{brand.name}</div>
                    <div className="toast-logo-hover-tagline">{brand.tagline}</div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2: Left-to-Right Ticker (Reverse Movement) */}
          <div className={`toast-brand-ticker-track-reverse ${hoveredBrandId ? 'has-hover' : ''}`}>
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => {
              const isHovered = hoveredBrandId === `r2-${brand.id}-${idx}`;
              return (
                <div
                  key={`r2-${brand.id}-${idx}`}
                  className={`toast-brand-logo-item ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredBrandId(`r2-${brand.id}-${idx}`)}
                  onMouseLeave={() => setHoveredBrandId(null)}
                >
                  {/* Brand Logo Image */}
                  <div className="toast-brand-logo-display flex items-center justify-center h-10 w-44">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      width={176}
                      height={44}
                      className="h-9 w-auto max-w-[170px] object-contain transition-all duration-300 filter contrast-125"
                    />
                  </div>

                  {/* Hover Popup Tooltip Card (Exact Interactive Design) */}
                  <div className={`toast-logo-hover-card ${isHovered ? 'show' : ''}`}>
                    <div className="toast-logo-hover-name">{brand.name}</div>
                    <div className="toast-logo-hover-tagline">{brand.tagline}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            2. SECTION HEADER: Headline + Segmented Toggle
           ============================================================ */}
        <div className="toast-trustbar-header">
          <div className="toast-trustbar-title-wrap">
            <h2 className="toast-trustbar-main-headline">
              Get busy. Stay busy. Run busy.
            </h2>
            <p className="toast-trustbar-sub-headline">
              Meet the platform that runs real-world business.
            </p>
          </div>

          <div className="toast-segmented-toggle" role="tablist" aria-label="Business Type">
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'restaurants'}
              onClick={() => setActiveTab('restaurants')}
              className={`toast-toggle-btn ${activeTab === 'restaurants' ? 'active' : ''}`}
            >
              <UtensilsCrossed style={{ width: 15, height: 15 }} />
              <span>Restaurants</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'retail'}
              onClick={() => setActiveTab('retail')}
              className={`toast-toggle-btn ${activeTab === 'retail' ? 'active' : ''}`}
            >
              <Store style={{ width: 15, height: 15 }} />
              <span>Retail</span>
            </button>
          </div>
        </div>

        {/* ============================================================
            3. 8 COMPACT SHOWCASE CARDS (Toast POS 4x2 Grid)
           ============================================================ */}
        <div className="toast-cards-grid">
          {cards.map((card) => (
            <InteractiveShowcaseCard
              key={card.id}
              card={card}
              onOpenDemo={() => openDemoModal()}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
