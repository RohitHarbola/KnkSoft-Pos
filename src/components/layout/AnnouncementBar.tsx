'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { openDemoModal } = useDemoModal();

  if (!isVisible) return null;

  return (
    <div className="announcement-bar" style={{ position: 'relative' }}>
      <div className="announcement-bar-inner">
        {/* Left Trust items */}
        <div style={{ display: 'none', alignItems: 'center', gap: 16 }} className="hidden md:flex">
          <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#0369A1', fontWeight: 700 }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#0284C7', display: 'inline-block' }} />
            GST 2.0 Ready
          </span>
          <span className="announcement-dot" />
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#0369A1' }}>
            <ShieldCheck style={{ width: 13, height: 13, color: '#0284C7' }} />
            100% Offline Billing Mode
          </span>
          <span className="announcement-dot" />
          <span style={{ display: 'flex', alignItems: 'center', gap: 4, color: '#0369A1' }}>
            <PhoneCall style={{ width: 13, height: 13, color: '#0284C7' }} />
            24/7 Support: +91 9891-578-609
          </span>
        </div>

        {/* Center message */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
          <span style={{ background: '#0284C7', color: '#ffffff', borderRadius: 100, padding: '2px 10px', fontSize: '0.7rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            KNK POS v1.0
          </span>
          <span style={{ color: '#0C4A6E', fontWeight: 600 }}>
            High-Speed Touch POS &amp; Instant UPI Soundbox Integration
          </span>
          <button
            type="button"
            onClick={() => openDemoModal('14-Day Free Trial')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 4, color: '#0284C7', fontWeight: 700, textDecoration: 'underline', fontSize: '0.8rem', background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            Claim 14-Day Free Trial <ArrowRight style={{ width: 12, height: 12 }} />
          </button>
        </div>

        {/* Right close */}
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Dismiss announcement"
          className="announcement-close"
        >
          <X style={{ width: 14, height: 14 }} />
        </button>
      </div>
    </div>
  );
};
