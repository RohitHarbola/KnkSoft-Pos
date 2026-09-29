'use client';

import React, { useEffect, useRef } from 'react';
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  PhoneCall,
  WifiOff,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export const FinalCTA: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 3D Particle Sphere Animation (Squarespace Signature Effect)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let cssWidth = 0;
    let cssHeight = 0;

    const resize = () => {
      if (!canvas || !canvas.parentElement) return;
      const rect = canvas.getBoundingClientRect();
      cssWidth = rect.width || canvas.parentElement.clientWidth || 900;
      cssHeight = rect.height || canvas.parentElement.clientHeight || 680;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0); // reset transform
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Particle setup on a 3D Sphere (Fibonacci distribution for uniform coverage)
    const particleCount = 850;
    const particles: { x: number; y: number; z: number; size: number; alpha: number }[] = [];

    for (let i = 0; i < particleCount; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * (i + 0.5);

      // Normalized coordinates on unit sphere
      const nx = Math.sin(phi) * Math.cos(theta);
      const ny = Math.cos(phi);
      const nz = Math.sin(phi) * Math.sin(theta);

      particles.push({
        x: nx,
        y: ny,
        z: nz,
        size: Math.random() * 1.5 + 0.6,
        alpha: Math.random() * 0.45 + 0.55,
      });
    }

    let rotX = 0;
    let rotY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2);
      const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2);
      mouseX = x * 0.0006;
      mouseY = y * 0.0006;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const fov = 400;

    const render = () => {
      ctx.clearRect(0, 0, cssWidth, cssHeight);

      rotY += 0.0035 + mouseX;
      rotX += 0.0012 + mouseY;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      const centerX = cssWidth / 2;
      const centerY = cssHeight / 2;
      const sphereRadius = Math.min(cssWidth, cssHeight) * 0.42;

      // Calculate projected 3D particles
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        const px = p.x * sphereRadius;
        const py = p.y * sphereRadius;
        const pz = p.z * sphereRadius;

        // Rotate Y
        const x1 = px * cosY - pz * sinY;
        const z1 = pz * cosY + px * sinY;

        // Rotate X
        const y2 = py * cosX - z1 * sinX;
        const z2 = z1 * cosX + py * sinX;

        // 3D Perspective Projection
        const scale = fov / (fov + z2 + sphereRadius * 0.15);
        const projX = centerX + x1 * scale;
        const projY = centerY + y2 * scale;

        // Depth brightness calculation
        const depthFactor = Math.max(0.08, Math.min(1, (z2 + sphereRadius) / (sphereRadius * 2)));

        projected.push({
          x: projX,
          y: projY,
          z: z2,
          size: p.size * scale,
          alpha: p.alpha * depthFactor,
        });
      }

      // Sort by depth (back to front) for accurate 3D layering
      projected.sort((a, b) => a.z - b.z);

      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, Math.max(0.5, p.size), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha * 0.9})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="final-cta-section" id="get-started">
      {/* 3D Particle Sphere Canvas Background — Centered in absolute background */}
      <canvas ref={canvasRef} className="final-cta-sphere-canvas" />

      {/* Subtle radial ambient vignette */}
      <div className="final-cta-vignette" />

      <div className="final-cta-inner">

        {/* Eyebrow badge */}
        <div className="final-cta-eyebrow">
          <Sparkles style={{ width: 14, height: 14 }} />
          Join 10,000+ Fast-Growing Indian Stores &amp; Restaurants on KNK POS
        </div>

        {/* Squarespace-style Centered Bold Headline */}
        <h2 className="final-cta-title">
          Ready to Speed Up Your Billing and{' '}
          <span className="final-cta-title-accent">Automate Your Entire Store?</span>
        </h2>

        {/* Subtext */}
        <p className="final-cta-description">
          Book a 15-minute customized live demo today with KNK:SOFT INFOTECH. See real touchscreen billing, UPI soundbox integration, and offline sync tailored for your business.
        </p>

        {/* Squarespace signature CTA Buttons */}
        <div className="final-cta-buttons">
          <button
            type="button"
            onClick={() => openDemoModal()}
            className="final-cta-primary"
          >
            <span>Schedule Free 1-on-1 Demo</span>
            <ArrowRight style={{ width: 16, height: 16 }} />
          </button>

          <a
            href="https://wa.me/919891578609?text=Hi%20KNK%20POS%20team%2C%20I%20want%20to%20know%20more%20about%20your%20POS"
            target="_blank"
            rel="noreferrer"
            className="final-cta-secondary"
          >
            <MessageCircle style={{ width: 16, height: 16 }} />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Trust items */}
        <div className="final-cta-trust">
          <div className="final-cta-trust-item">
            <CheckCircle2 className="final-cta-trust-icon" style={{ width: 14, height: 14 }} />
            No Credit Card Required • Cancel Anytime
          </div>
          <div className="final-cta-trust-item">
            <WifiOff className="final-cta-trust-icon" style={{ width: 14, height: 14, color: '#F59E0B' }} />
            100% Offline Billing
          </div>
          <div className="final-cta-trust-item">
            <ShieldCheck className="final-cta-trust-icon" style={{ width: 14, height: 14 }} />
            GST 2.0 &amp; E-Way Compliant
          </div>
          <div className="final-cta-trust-item">
            <PhoneCall className="final-cta-trust-icon" style={{ width: 14, height: 14, color: '#FF4C00' }} />
            24/7 Regional Support
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalCTA;
