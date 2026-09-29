'use client';

import React from 'react';
import Link from 'next/link';
import {
  Monitor,
  Printer,
  ScanBarcode,
  Volume2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HardDrive
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { useDemoModal } from '@/context/DemoModalContext';

const HARDWARE_ITEMS = [
  {
    id: 'terminal',
    name: 'All-in-One Touch POS Terminal',
    tagline: 'Heavy-duty commercial grade',
    icon: Monitor,
    price: 'Starting ₹18,499',
    badge: 'BIS Certified',
    specs: [
      '15.6" Full HD True-Flat Capacitive Touch',
      'IP54 Spill & Dust Resistant Aluminium Base',
      'Intel Core Processor + 8GB RAM + 128GB SSD',
      'Dual OS Support (Windows 11 / Android 13)'
    ]
  },
  {
    id: 'printer',
    name: 'High-Speed 3" Thermal Printer',
    tagline: '250mm/s auto-cutter engine',
    icon: Printer,
    price: 'Starting ₹4,299',
    badge: 'BIS Certified',
    specs: [
      '3-Inch (80mm) Thermal Paper with Auto-Cutter',
      'Triple Interface: USB + LAN Ethernet + Bluetooth',
      'Regional Font Support (Hindi, Tamil, Kannada)',
      '1.5 Million Cuts Heavy Duty Blade Life'
    ]
  },
  {
    id: 'scanner',
    name: 'Omni-Directional 2D Barcode Gun',
    tagline: 'Rapid screen & paper scanning',
    icon: ScanBarcode,
    price: 'Starting ₹2,499',
    badge: 'BIS Certified',
    specs: [
      'Reads 1D/2D Barcodes, QR Codes & UPI Pay Codes',
      'Scans Damaged, Crinkled & Mobile Phone Screens',
      'Hands-Free Auto-Sense Stand Included',
      'Plug & Play USB — Zero Driver Configuration'
    ]
  },
  {
    id: 'soundbox',
    name: 'Dynamic UPI Display & Soundbox',
    tagline: 'Instant audio payment verification',
    icon: Volume2,
    price: 'Starting ₹2,999',
    badge: 'BIS Certified',
    specs: [
      'Dual-Sided Dynamic QR Customer Screen',
      'Loud Speaker with Voice Alerts in 8 Languages',
      '4G SIM + WiFi Auto Failover Connectivity',
      'All-Day 2600mAh Rechargeable Battery'
    ]
  }
];

export const Hardware: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  return (
    <section className="hardware-section">
      <div className="hardware-inner">
        
        {/* Section Header */}
        <div className="hardware-header">
          <div className="hardware-eyebrow">
            <ShieldCheck style={{ width: 14, height: 14 }} /> Certified Indian Hardware
          </div>
          <h2 className="hardware-title">
            Rugged, BIS-Certified POS Hardware
          </h2>
          <p className="hardware-subtitle">
            Engineered to withstand kitchen grease, power fluctuations, and relentless rush-hour counter usage across Indian retail and restaurant environments.
          </p>
        </div>

        {/* 4-Column Hardware Grid */}
        <div className="hardware-grid">
          {HARDWARE_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="hardware-card flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="hardware-card-icon-wrap">
                      <Icon style={{ width: 28, height: 28 }} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-[#E8FBF0] text-[#1A8041] border border-[#BBF0D1]">
                      ✓ {item.badge}
                    </span>
                  </div>

                  <h3 className="hardware-card-name">
                    {item.name}
                  </h3>
                  <p className="hardware-card-desc">{item.tagline}</p>

                  <div className="text-base font-extrabold text-[#FF4C00] mt-3">
                    {item.price}
                  </div>

                  {/* Specs List */}
                  <div className="mt-4 pt-4 border-t border-[#e8e2de] space-y-2 text-left">
                    {item.specs.map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#565352] font-medium">
                        <CheckCircle2 style={{ width: 14, height: 14, color: '#FF4C00', flexShrink: 0, marginTop: 2 }} />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e8e2de]">
                  <button
                    onClick={() => openDemoModal(`Hardware: ${item.name}`)}
                    className="w-full py-2.5 rounded-full bg-[#ffffff] hover:bg-[#FF4C00] text-[#1A1918] hover:text-white border border-[#e8e2de] hover:border-[#FF4C00] font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm cursor-pointer"
                  >
                    Request Quote <ArrowRight style={{ width: 14, height: 14 }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bring Your Own Hardware Box */}
        <div className="mt-12 p-6 rounded-3xl bg-[#ffffff] border border-[#e8e2de] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FFF3EF] text-[#FF4C00] flex items-center justify-center flex-shrink-0 border border-[#FFD5C2]">
              <HardDrive style={{ width: 24, height: 24 }} />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#1A1918]">Already have a computer, laptop, tablet, or printer?</h4>
              <p className="text-xs sm:text-sm text-[#565352] mt-0.5">
                KNK POS is 100% hardware-agnostic. You can run our POS software on your existing Windows PC, Android tablet, or existing TVS/Epson printers.
              </p>
            </div>
          </div>

          <Link
            href="/hardware"
            className="text-xs sm:text-sm font-bold text-[#FF4C00] hover:text-[#DE3700] whitespace-nowrap flex items-center gap-1 transition-colors"
          >
            Check Compatibility <ArrowRight style={{ width: 14, height: 14 }} />
          </Link>
        </div>

      </div>
    </section>
  );
};
