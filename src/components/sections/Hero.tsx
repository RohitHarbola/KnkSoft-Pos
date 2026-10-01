'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import {
      ShieldCheck,
      Zap,
      WifiOff,
      CheckCircle2,
      ArrowRight,
      Play,
      Receipt,
      Trash2,
      QrCode,
      Printer,
      Check,
      LayoutDashboard,
      Calculator,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

interface CartItem {
      id: number;
      name: string;
      price: number;
      qty: number;
      gstRate: number;
}

const SAMPLE_ITEMS = [
      { id: 1, name: 'Special Masala Dosa', price: 120, category: 'Food', gstRate: 5 },
      { id: 2, name: 'Cold Brew Coffee', price: 180, category: 'Beverage', gstRate: 5 },
      { id: 3, name: 'Paneer Butter Masala', price: 290, category: 'Main', gstRate: 5 },
      { id: 4, name: 'Mineral Water 1L', price: 20, category: 'Drinks', gstRate: 18 },
      { id: 5, name: 'Cotton Kurti (M)', price: 899, category: 'Apparel', gstRate: 5 },
      { id: 6, name: 'Paracetamol 650mg', price: 32, category: 'Pharma', gstRate: 12 },
];

export const Hero: React.FC = () => {
      const { openDemoModal } = useDemoModal();
      const [screenView, setScreenView] = useState<'dashboard' | 'terminal'>('dashboard');
      const [cart, setCart] = useState<CartItem[]>([
            { id: 1, name: 'Special Masala Dosa', price: 120, qty: 2, gstRate: 5 },
            { id: 2, name: 'Cold Brew Coffee', price: 180, qty: 1, gstRate: 5 },
      ]);
      const [paymentDone, setPaymentDone] = useState(false);
      const [activeMode, setActiveMode] = useState<'restaurant' | 'retail' | 'pharma'>('restaurant');

      // 3D Card Tilt with Framer Motion Springs
      const cardRef = useRef<HTMLDivElement>(null);
      const mouseX = useMotionValue(0);
      const mouseY = useMotionValue(0);
      const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
      const [isHovered, setIsHovered] = useState(false);

      const springConfig = { damping: 20, stiffness: 240, mass: 0.8 };
      const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
      const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

      const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const clientX = e.clientX - rect.left;
            const clientY = e.clientY - rect.top;

            // Normalized coordinates [-0.5, 0.5]
            const normX = clientX / rect.width - 0.5;
            const normY = clientY / rect.height - 0.5;

            mouseX.set(normX);
            mouseY.set(normY);
            setSpotlightPos({ x: clientX, y: clientY });
      };

      const handleMouseEnter = () => {
            setIsHovered(true);
      };

      const handleMouseLeave = () => {
            setIsHovered(false);
            mouseX.set(0);
            mouseY.set(0);
      };

      const addItem = (item: typeof SAMPLE_ITEMS[0]) => {
            setCart((prev) => {
                  const existing = prev.find((i) => i.id === item.id);
                  if (existing) {
                        return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
                  }
                  return [...prev, { id: item.id, name: item.name, price: item.price, qty: 1, gstRate: item.gstRate }];
            });
            setPaymentDone(false);
      };

      const removeItem = (id: number) => {
            setCart((prev) => prev.filter((i) => i.id !== id));
      };

      const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
      const gstAmount = Math.round(subtotal * 0.05);
      const total = subtotal + gstAmount;

      const handleSimulatePayment = () => {
            setPaymentDone(true);
            setTimeout(() => {
                  setPaymentDone(false);
            }, 4000);
      };

      return (
            <section className="hero-section">
                  {/* Ambient background layers — white theme */}
                  <div className="hero-bg-image-container" aria-hidden="true">
                        <div className="hero-bg-dark-overlay" />
                        <div className="hero-bg-radial-glow" />
                        <div className="hero-grid-pattern" />
                  </div>

                  <div className="hero-inner">

                        {/* LEFT COLUMN: Animated Entrance */}
                        <motion.div
                              className="hero-content"
                              initial={{ opacity: 0, y: 24 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.6, ease: 'easeOut' }}
                        >

                              {/* Trust Pill */}
                              <div className="hero-pill">
                                    <span className="hero-pill-dot" />
                                    GST 2.0 Compliant | 100% Offline-First Architecture
                              </div>

                              {/* Main Headline */}
                              <h1 className="hero-headline">
                                    POS software made{' '}
                                    <span className="hero-headline-accent">simple!</span>
                              </h1>

                              {/* Subtext */}
                              <p className="hero-description">
                                    Built by <strong>KNK:SOFT INFOTECH</strong>. Manages all your restaurant and retail billing, inventory, and GST operations efficiently so that you can focus on growing your brand like a real boss!
                              </p>

                              {/* Feature Chips */}
                              <div className="hero-chips">
                                    <div className="hero-chip">
                                          <WifiOff className="hero-chip-icon" />
                                          Works 100% Offline
                                    </div>
                                    <div className="hero-chip">
                                          <ShieldCheck className="hero-chip-icon" />
                                          1-Click GSTR-1 / 3B
                                    </div>
                                    <div className="hero-chip">
                                          <Zap className="hero-chip-icon" />
                                          3-Sec UPI Audio Sync
                                    </div>
                              </div>

                              {/* CTA Buttons */}
                              <div className="hero-cta-group">
                                    <button
                                          onClick={() => openDemoModal()}
                                          className="hero-cta-primary"
                                    >
                                          <span>Take a free demo</span>
                                          <ArrowRight style={{ width: 16, height: 16 }} />
                                    </button>

                                    <button
                                          onClick={() => setScreenView(screenView === 'dashboard' ? 'terminal' : 'dashboard')}
                                          className="hero-cta-secondary"
                                    >
                                          <Play style={{ width: 16, height: 16 }} />
                                          <span>{screenView === 'dashboard' ? 'Try Billing Simulator' : 'View POS Dashboard'}</span>
                                    </button>
                              </div>

                              {/* Trust Strip */}
                              <div className="hero-trust-strip">
                                    <div className="hero-trust-item">
                                          <CheckCircle2 className="hero-trust-icon" style={{ width: 14, height: 14 }} />
                                          No Credit Card Required
                                    </div>
                                    <div className="hero-trust-item">
                                          <CheckCircle2 className="hero-trust-icon" style={{ width: 14, height: 14 }} />
                                          Trusted by 10,000+ Indian Stores
                                    </div>
                                    <div className="hero-trust-item">
                                          <CheckCircle2 className="hero-trust-icon" style={{ width: 14, height: 14 }} />
                                          14-Day Free Trial
                                    </div>
                              </div>
                        </motion.div>

                        {/* RIGHT COLUMN: 3D INTERACTIVE POS CARD (NO BADGES) */}
                        <div
                              className="hero-visual hero-3d-perspective-container"
                              id="interactive-demo"
                              ref={cardRef}
                              onMouseMove={handleMouseMove}
                              onMouseEnter={handleMouseEnter}
                              onMouseLeave={handleMouseLeave}
                        >
                              {/* 3D Motion Card with Layered Depth */}
                              <motion.div
                                    className="hero-screen-card hero-3d-card"
                                    style={{
                                          rotateX,
                                          rotateY,
                                          transformStyle: 'preserve-3d',
                                    }}
                                    animate={!isHovered ? {
                                          y: [0, -7, 0],
                                    } : { y: 0 }}
                                    transition={{
                                          duration: 6,
                                          repeat: Infinity,
                                          ease: 'easeInOut',
                                    }}
                              >
                                    {/* 3D Dynamic Specular Sheen Spotlight */}
                                    <div
                                          className="hero-3d-spotlight"
                                          style={{
                                                background: isHovered
                                                      ? `radial-gradient(400px circle at ${spotlightPos.x}px ${spotlightPos.y}px, rgba(255, 76, 0, 0.14), transparent 70%)`
                                                      : 'none',
                                                opacity: isHovered ? 1 : 0,
                                          }}
                                    />
                                    {/* Topbar with View Switcher */}
                                    <div className="hero-screen-topbar">
                                          <span className="hero-screen-dot" style={{ background: '#EF4444' }} />
                                          <span className="hero-screen-dot" style={{ background: '#F59E0B' }} />
                                          <span className="hero-screen-dot" style={{ background: '#22C55E' }} />

                                          <div className="flex items-center gap-1.5 ml-2 bg-black/40 p-0.5 rounded-lg border border-white/10">
                                                <button
                                                      type="button"
                                                      onClick={() => setScreenView('dashboard')}
                                                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors flex items-center gap-1 cursor-pointer ${screenView === 'dashboard' ? 'bg-[#FF4C00] text-white' : 'text-white/50 hover:text-white'
                                                            }`}
                                                >
                                                      <LayoutDashboard style={{ width: 12, height: 12 }} /> Dashboard
                                                </button>
                                                <button
                                                      type="button"
                                                      onClick={() => setScreenView('terminal')}
                                                      className={`px-2.5 py-1 rounded text-[11px] font-bold transition-colors flex items-center gap-1 cursor-pointer ${screenView === 'terminal' ? 'bg-[#FF4C00] text-white' : 'text-white/50 hover:text-white'
                                                            }`}
                                                >
                                                      <Calculator style={{ width: 12, height: 12 }} /> Quick Billing
                                                </button>
                                          </div>

                                          <span style={{ marginLeft: 'auto', fontSize: '0.65rem', background: 'rgba(34,197,94,0.15)', color: '#22C55E', border: '1px solid rgba(34,197,94,0.25)', borderRadius: 100, padding: '2px 8px', fontWeight: 700 }}>
                                                ● GSTN LIVE
                                          </span>
                                    </div>

                                    {/* SCREEN VIEW 1: FULL HIGH-RESOLUTION POS DASHBOARD IMAGE */}
                                    {screenView === 'dashboard' ? (
                                          <div className="hero-dashboard-preview">
                                                <div className="hero-dashboard-img-wrapper">
                                                      <Image
                                                            src="/hero-dashboard.png"
                                                            alt="KNK Soft POS Dashboard Interface"
                                                            width={1200}
                                                            height={550}
                                                            priority
                                                            sizes="(max-width: 1024px) 100vw, 50vw"
                                                            className="hero-dashboard-img"
                                                      />
                                                </div>
                                                <div className="hero-dashboard-bar">
                                                      <span style={{ fontWeight: 600, color: 'rgba(255,255,255,0.9)' }}>
                                                            KNK:SOFT POS Operations Hub & Dashboard
                                                      </span>
                                                      <button
                                                            type="button"
                                                            onClick={() => setScreenView('terminal')}
                                                            className="hero-dashboard-switch-btn"
                                                      >
                                                            Open Live Counter Simulator →
                                                      </button>
                                                </div>
                                          </div>
                                    ) : (
                                          /* SCREEN VIEW 2: INTERACTIVE LIVE POS BILLING SIMULATOR */
                                          <div className="hero-screen-body">
                                                {/* Mode Switcher */}
                                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6, background: 'rgba(255,255,255,0.04)', borderRadius: 12, padding: 4, marginBottom: 12 }}>
                                                      {(['restaurant', 'retail', 'pharma'] as const).map((mode) => (
                                                            <button
                                                                  key={mode}
                                                                  onClick={() => setActiveMode(mode)}
                                                                  style={{
                                                                        padding: '6px 4px',
                                                                        borderRadius: 8,
                                                                        border: 'none',
                                                                        cursor: 'pointer',
                                                                        fontSize: '0.68rem',
                                                                        fontWeight: 700,
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        transition: 'all 0.2s',
                                                                        background: activeMode === mode ? '#FF4C00' : 'transparent',
                                                                        color: activeMode === mode ? '#fff' : 'rgba(255,255,255,0.4)',
                                                                  }}
                                                            >
                                                                  {mode === 'restaurant' ? '🍽️ Restaurant' : mode === 'retail' ? '👕 Retail' : '💊 Pharma'}
                                                            </button>
                                                      ))}
                                                </div>

                                                {/* Quick-tap menu */}
                                                <div style={{ marginBottom: 10 }}>
                                                      <div style={{ fontSize: '0.65rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.07em', color: 'rgba(255,255,255,0.35)', marginBottom: 6, display: 'flex', justifyContent: 'space-between' }}>
                                                            <span>Quick Tap Menu</span>
                                                            <span style={{ color: '#FF4C00' }}>Click item to add +</span>
                                                      </div>
                                                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 6 }}>
                                                            {SAMPLE_ITEMS.map((item) => (
                                                                  <button
                                                                        key={item.id}
                                                                        onClick={() => addItem(item)}
                                                                        style={{
                                                                              padding: '8px 6px',
                                                                              borderRadius: 10,
                                                                              background: 'rgba(255,255,255,0.05)',
                                                                              border: '1px solid rgba(255,255,255,0.07)',
                                                                              cursor: 'pointer',
                                                                              textAlign: 'left',
                                                                              transition: 'all 0.2s',
                                                                              fontFamily: 'Inter, sans-serif',
                                                                        }}
                                                                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,76,0,0.4)'; }}
                                                                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.07)'; }}
                                                                  >
                                                                        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'rgba(255,255,255,0.75)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                                              {item.name}
                                                                        </div>
                                                                        <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#F59E0B', marginTop: 2 }}>
                                                                              ₹{item.price}
                                                                        </div>
                                                                  </button>
                                                            ))}
                                                      </div>
                                                </div>

                                                {/* Cart & Bill */}
                                                <div style={{ background: 'rgba(0,0,0,0.35)', borderRadius: 14, padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                                                      <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: 8, borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '0.65rem', fontWeight: 700, color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                                                            <span>Items In Bill ({cart.length})</span>
                                                            <span>GST (5%)</span>
                                                      </div>

                                                      <div style={{ maxHeight: 110, overflowY: 'auto', margin: '6px 0' }}>
                                                            {cart.length === 0 ? (
                                                                  <div style={{ textAlign: 'center', padding: '12px 0', fontSize: '0.72rem', color: 'rgba(255,255,255,0.3)' }}>
                                                                        Cart is empty. Tap items above to bill!
                                                                  </div>
                                                            ) : (
                                                                  cart.map((item) => (
                                                                        <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                                                              <div style={{ display: 'flex', alignItems: 'center', gap: 6, overflow: 'hidden' }}>
                                                                                    <button onClick={() => removeItem(item.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#EF4444', padding: 0, flexShrink: 0 }}>
                                                                                          <Trash2 style={{ width: 12, height: 12 }} />
                                                                                    </button>
                                                                                    <span style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.name}</span>
                                                                              </div>
                                                                              <div style={{ display: 'flex', gap: 8, flexShrink: 0 }}>
                                                                                    <span style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.35)' }}>x{item.qty}</span>
                                                                                    <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#fff', fontFamily: 'monospace' }}>₹{item.price * item.qty}</span>
                                                                              </div>
                                                                        </div>
                                                                  ))
                                                            )}
                                                      </div>

                                                      {/* Totals */}
                                                      <div style={{ paddingTop: 8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginBottom: 3 }}>
                                                                  <span>Taxable Subtotal:</span>
                                                                  <span style={{ fontFamily: 'monospace' }}>₹{subtotal.toLocaleString('en-IN')}</span>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginBottom: 6 }}>
                                                                  <span>CGST+SGST (5%):</span>
                                                                  <span style={{ color: '#22C55E', fontFamily: 'monospace' }}>+₹{gstAmount.toLocaleString('en-IN')}</span>
                                                            </div>
                                                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', fontWeight: 800, color: '#fff', paddingTop: 6, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                                                                  <span style={{ color: '#F59E0B' }}>Grand Total:</span>
                                                                  <span style={{ fontFamily: 'monospace', color: '#22C55E' }}>₹{total.toLocaleString('en-IN')}</span>
                                                            </div>
                                                      </div>

                                                      {/* Action Buttons */}
                                                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
                                                            <button
                                                                  onClick={handleSimulatePayment}
                                                                  disabled={cart.length === 0}
                                                                  style={{
                                                                        padding: '10px 8px',
                                                                        borderRadius: 10,
                                                                        border: 'none',
                                                                        cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                                                                        fontWeight: 700,
                                                                        fontSize: '0.72rem',
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        gap: 6,
                                                                        transition: 'all 0.2s',
                                                                        background: paymentDone ? '#16a34a' : '#FF4C00',
                                                                        color: '#fff',
                                                                        opacity: cart.length === 0 ? 0.45 : 1,
                                                                  }}
                                                            >
                                                                  {paymentDone ? (
                                                                        <><Check style={{ width: 14, height: 14 }} /> ₹{total} Paid via UPI</>
                                                                  ) : (
                                                                        <><QrCode style={{ width: 14, height: 14 }} /> Quick UPI & Cash</>
                                                                  )}
                                                            </button>
                                                            <button
                                                                  onClick={() => alert(`Printing KNK POS GST Tax Invoice for ₹${total} (Token #42)`)}
                                                                  disabled={cart.length === 0}
                                                                  style={{
                                                                        padding: '10px 8px',
                                                                        borderRadius: 10,
                                                                        border: '1px solid rgba(255,255,255,0.1)',
                                                                        cursor: cart.length === 0 ? 'not-allowed' : 'pointer',
                                                                        fontWeight: 700,
                                                                        fontSize: '0.72rem',
                                                                        fontFamily: 'Inter, sans-serif',
                                                                        display: 'flex',
                                                                        alignItems: 'center',
                                                                        justifyContent: 'center',
                                                                        gap: 6,
                                                                        background: 'rgba(255,255,255,0.05)',
                                                                        color: 'rgba(255,255,255,0.7)',
                                                                        opacity: cart.length === 0 ? 0.45 : 1,
                                                                  }}
                                                            >
                                                                  <Printer style={{ width: 14, height: 14, color: '#F59E0B' }} /> Print GST Bill
                                                            </button>
                                                      </div>

                                                      {paymentDone && (
                                                            <div style={{ marginTop: 8, textAlign: 'center', fontSize: '0.68rem', fontWeight: 600, color: '#22C55E', background: 'rgba(34,197,94,0.08)', padding: '6px', borderRadius: 8, border: '1px solid rgba(34,197,94,0.2)' }}>
                                                                  🔊 Soundbox: &quot;Received ₹{total} on KNK POS UPI QR&quot;
                                                            </div>
                                                      )}
                                                </div>
                                          </div>
                                    )}
                              </motion.div>
                        </div>
                  </div>
            </section>
      );
};