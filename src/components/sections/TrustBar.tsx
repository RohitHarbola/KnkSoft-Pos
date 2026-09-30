'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  Check,
  MessageSquare,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  ShoppingBag,
  Receipt,
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
    images: ['/showcase/pos-terminal.jpg', '/showcase/dual-screen.jpg', '/modules/pos.png'],
    widgetType: 'pos',
  },
  {
    id: 'rest-iq',
    title: 'KNK IQ',
    subtitle: 'AI assistant that gets stuff done.',
    images: ['/showcase/analytics-ai.jpg', '/modules/analytics.png', '/showcase/pos-terminal.jpg'],
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
    images: ['/showcase/online-ordering.jpg', '/modules/crm.png', '/showcase/pos-terminal.jpg'],
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
    images: ['/showcase/kds-display.jpg', '/modules/pos.png', '/showcase/handheld-dock.jpg'],
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
    images: ['/showcase/retail-scanner.jpg', '/showcase/dual-screen.jpg', '/modules/inventory.png'],
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
    images: ['/showcase/online-ordering.jpg', '/modules/gst.png', '/showcase/dual-screen.jpg'],
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
  styledName: React.ReactNode;
}

/** Official Brand Ticker matching pos.KNKtab.com with Interactive Hover Popups */
const BRAND_PARTNERS: BrandPartner[] = [
  {
    id: 'french-laundry',
    name: 'THE FRENCH LAUNDRY',
    tagline: '3 Michelin-starred icon',
    styledName: <span className="brand-french-laundry">FRENCH <span className="bold-letter">L</span>AUNDRY</span>,
  },
  {
    id: 'mendocino-farms',
    name: 'MENDOCINO FARMS',
    tagline: 'Fresh craft sandwich & salad leader',
    styledName: <span className="brand-mendocino">Mendocino <span className="small-farms">Farms</span></span>,
  },
  {
    id: 'the-varsity',
    name: 'THE VARSITY',
    tagline: "World's largest drive-in restaurant",
    styledName: <span className="brand-varsity">THE <strong>VARSITY</strong></span>,
  },
  {
    id: 'marea',
    name: 'MAREA',
    tagline: 'Michelin-starred coastal dining',
    styledName: <span className="brand-marea">marea <span className="marea-sub">NEW YORK</span></span>,
  },
  {
    id: 'trick-dog',
    name: 'TRICK DOG',
    tagline: "World's 50 Best Bars honoree",
    styledName: <span className="brand-trick-dog">✛ TRICK DOG ✛</span>,
  },
  {
    id: 'ushg',
    name: 'UNION SQUARE HOSPITALITY GROUP',
    tagline: 'Hospitality industry leader',
    styledName: <span className="brand-ushg">UNION SQUARE <span className="ushg-sub">HOSPITALITY GROUP</span></span>,
  },
  {
    id: 'hh-bagels',
    name: 'H&H BAGELS',
    tagline: 'Legendary NYC bagel brand',
    styledName: <span className="brand-hh">H&H <span className="hh-sub">BAGELS</span></span>,
  },
  {
    id: 'giordanos',
    name: "GIORDANO'S",
    tagline: 'Chicago deep-dish icon',
    styledName: <span className="brand-giordanos">Giordano&apos;s</span>,
  },
  {
    id: 'hungry-howies',
    name: "HUNGRY HOWIE'S",
    tagline: 'Top 10 national pizza franchise',
    styledName: <span className="brand-hungry-howies">Hungry Howie&apos;s</span>,
  },
  {
    id: 'alinea',
    name: 'THE ALINEA GROUP',
    tagline: '3 Michelin-starred culinary giant',
    styledName: <span className="brand-alinea">THE ALINEA GROUP</span>,
  },
  {
    id: 'canlis',
    name: 'CANLIS',
    tagline: 'Pacific Northwest icon',
    styledName: <span className="brand-canlis">CANLIS</span>,
  },
  {
    id: 'zabars',
    name: "ZABAR'S",
    tagline: 'NYC gourmet food legend',
    styledName: <span className="brand-zabars">ZABAR&apos;S</span>,
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

        {/* ==========================================
            RESTAURANT WIDGETS
           ========================================== */}
        {card.widgetType === 'toast-iq-restaurant' && (
          <div className="toast-widget-iq" onClick={(e) => e.stopPropagation()}>
            <div className="toast-widget-iq-header">
              <Sparkles style={{ width: 11, height: 11, color: '#FF4C00' }} />
              <span>Update Menu Item Stock</span>
            </div>
            <div className="toast-widget-iq-content">
              <div className="toast-widget-iq-row">
                <span>Item</span>
                <span>New Status</span>
              </div>
              <div className="toast-widget-iq-row val">
                <span>Lobster Ravioli</span>
                <span className="stock-tag">Out of stock</span>
              </div>
            </div>
            <button type="button" className="toast-widget-save-btn">
              <Check style={{ width: 11, height: 11, strokeWidth: 3 }} /> Save
            </button>
          </div>
        )}

        {card.widgetType === 'online-ordering-restaurant' && (
          <div className="toast-widget-notification" onClick={(e) => e.stopPropagation()}>
            <div className="toast-widget-notification-icon">
              <MessageSquare style={{ width: 14, height: 14, color: '#ffffff' }} />
            </div>
            <div className="toast-widget-notification-content">
              <div className="toast-widget-notification-top">
                <span className="toast-widget-app-name">Toast Taqueria</span>
                <span className="toast-widget-time">1:55 PM</span>
              </div>
              <p className="toast-widget-msg">Thanks for your order! Pick up at counter.</p>
            </div>
          </div>
        )}

        {card.widgetType === 'loyalty-30' && (
          <div className="toast-widget-loyalty" onClick={(e) => e.stopPropagation()}>
            <div className="toast-loyalty-pts">30 Points</div>
            <div className="toast-loyalty-sub">Loyalty balance</div>
          </div>
        )}

        {card.widgetType === 'integrations' && (
          <div className="toast-widget-integrations" onClick={(e) => e.stopPropagation()}>
            <div className="toast-integration-item">
              <span className="toast-int-tag">Uber Eats</span>
              <p className="toast-int-text">Drive new demand for your restaurant on Uber Eats.</p>
              <span className="toast-int-btn">Add App</span>
            </div>
          </div>
        )}

        {/* ==========================================
            RETAIL WIDGETS
           ========================================== */}
        {card.widgetType === 'toast-retail-scan' && (
          <div className="toast-widget-phone-scan" onClick={(e) => e.stopPropagation()}>
            <div className="toast-phone-scanner-line" />
            <div className="toast-phone-barcode-badge">Barcode Scanned</div>
          </div>
        )}

        {card.widgetType === 'toast-iq-retail' && (
          <div className="toast-widget-iq-retail" onClick={(e) => e.stopPropagation()}>
            <div className="toast-iq-prompt-item">Daily sales trends for this month</div>
            <div className="toast-iq-prompt-item">List top 10 items by gross sales</div>
          </div>
        )}

        {card.widgetType === 'catering-invoice' && (
          <div className="toast-widget-catering" onClick={(e) => e.stopPropagation()}>
            <div className="toast-catering-top">
              <strong>Toast Market</strong>
              <span>Catering</span>
            </div>
            <div className="toast-catering-row">
              <span>Assorted Sandwich Tray</span>
              <span>$185.00</span>
            </div>
            <div className="toast-catering-total">
              <span>Total</span>
              <strong>$524.00</strong>
            </div>
          </div>
        )}

        {card.widgetType === 'loyalty-45' && (
          <div className="toast-widget-loyalty" onClick={(e) => e.stopPropagation()}>
            <div className="toast-loyalty-badge">You earned 15 points!</div>
            <div className="toast-loyalty-pts">45 Points</div>
            <div className="toast-loyalty-sub">Loyalty balance</div>
          </div>
        )}
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
            1. TOAST BRAND TICKER (With Interactive Hover Popups)
           ============================================================ */}
        <div className="toast-brand-ticker-container">
          <div className={`toast-brand-ticker-track ${hoveredBrandId ? 'has-hover' : ''}`}>
            {[...BRAND_PARTNERS, ...BRAND_PARTNERS, ...BRAND_PARTNERS].map((brand, idx) => {
              const isHovered = hoveredBrandId === `${brand.id}-${idx}`;
              return (
                <div
                  key={`${brand.id}-${idx}`}
                  className={`toast-brand-logo-item ${isHovered ? 'is-hovered' : ''}`}
                  onMouseEnter={() => setHoveredBrandId(`${brand.id}-${idx}`)}
                  onMouseLeave={() => setHoveredBrandId(null)}
                >
                  {/* Styled Brand Logo Text */}
                  <div className="toast-brand-logo-display">
                    {brand.styledName}
                  </div>

                  {/* Hover Popup Tooltip Card (Toast POS exact design) */}
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
