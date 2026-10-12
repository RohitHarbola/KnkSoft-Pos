'use client';

import React, { useState } from 'react';
import { X, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { openDemoModal } = useDemoModal();

  if (!isVisible) return null;

  return (
    <div className="announcement-bar">
      <div className="announcement-bar-inner">
        {/* Left Trust items (desktop only) */}
        <div className="announcement-trust-group hidden lg:flex">
         
          <span className="announcement-dot" />
          <span className="announcement-trust-item">
            <ShieldCheck style={{ width: 13, height: 13, color: '#0284C7' }} />
            100% Offline Billing Mode
          </span>
          <span className="announcement-dot" />
          <span className="announcement-trust-item">
            <PhoneCall style={{ width: 13, height: 13, color: '#0284C7' }} />
            24/7 Support: +91 9891-578-609
          </span>
        </div>

        {/* Center message */}
        <div className="announcement-content">
          <span className="announcement-badge">
            KNK POS v1.0
          </span>
          <span className="announcement-text">
            <span className="announcement-text-desktop hidden sm:inline">
              High-Speed Touch POS &amp; Instant UPI Soundbox Integration
            </span>
            <span className="announcement-text-mobile sm:hidden">
              Touch POS &amp; UPI Soundbox
            </span>
          </span>
          <button
            type="button"
            onClick={() => openDemoModal('14-Day Free Trial')}
            className="announcement-cta"
          >
            <span className="hidden sm:inline">Claim 14-Day Free Trial</span>
            <span className="sm:hidden">Free Trial</span>
            <ArrowRight className="announcement-cta-icon" />
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
