'use client';

import React, { useState } from 'react';
import {
  ShoppingBag,
  Receipt,
  ChefHat,
  QrCode,
  Boxes,
  MessageSquare,
  BarChart3,
  Sparkles,
} from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: 'Order Placed',
    desc: 'Touch POS counter, QR table menu, or Waiter Captain App',
    icon: ShoppingBag,
    color: 'orange'
  },
  {
    step: '02',
    title: 'GST Billing',
    desc: 'Auto-applied GST slab, HSN classification & discounts',
    icon: Receipt,
    color: 'navy'
  },
  {
    step: '03',
    title: 'Staff / KDS',
    desc: 'Instant KOT sent to kitchen display or fulfillment packer',
    icon: ChefHat,
    color: 'teal'
  },
  {
    step: '04',
    title: 'Instant UPI / Cash',
    desc: 'Dynamic QR scan with real-time Soundbox audio alert',
    icon: QrCode,
    color: 'orange'
  },
  {
    step: '05',
    title: 'Stock Auto-Sync',
    desc: 'Ingredients & inventory deducted across all outlets live',
    icon: Boxes,
    color: 'navy'
  },
  {
    step: '06',
    title: 'WhatsApp E-Bill',
    desc: 'Eco-friendly digital GST bill & loyalty points sent',
    icon: MessageSquare,
    color: 'teal'
  },
  {
    step: '07',
    title: 'Live Reports',
    desc: 'Sales, gross margins & GSTR-1 automatically updated',
    icon: BarChart3,
    color: 'orange'
  }
];

export const Workflow: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="workflow-section">
      <div className="workflow-bg" />

      <div className="workflow-inner">

        {/* Section Header */}
        <div className="workflow-header">
          <div className="workflow-eyebrow">
            <Sparkles style={{ width: 13, height: 13 }} />
            End-to-End Automation
          </div>
          <h2 className="workflow-title">
            How KNK POS Powers Every Transaction
          </h2>
          <p className="workflow-subtitle">
            From the moment an order is entered to tax report generation, KNK POS handles everything automatically in less than 3 seconds.
          </p>
        </div>

        {/* Desktop Interactive Horizontal Stepper */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(7,1fr)', gap: 12, position: 'relative' }}>
          <div style={{ position: 'absolute', top: '36px', left: 60, right: 60, height: 1, background: 'linear-gradient(90deg, rgba(255,76,0,0.2), rgba(255,76,0,0.5), rgba(255,76,0,0.2))', zIndex: 0 }} />

          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                style={{
                  position: 'relative',
                  zIndex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  padding: '1.25rem 0.75rem',
                  borderRadius: 18,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  border: `1px solid ${isCurrent ? '#FF4C00' : 'rgba(255,255,255,0.06)'}`,
                  background: isCurrent ? 'rgba(255,76,0,0.08)' : 'rgba(255,255,255,0.03)',
                  transform: isCurrent ? 'translateY(-6px)' : 'none',
                  boxShadow: isCurrent ? '0 8px 32px rgba(255,76,0,0.2)' : 'none',
                }}
              >
                <span className="workflow-step-tag">
                  STEP {step.step}
                </span>
                <div style={{
                  width: 44, height: 44, borderRadius: 13,
                  background: isCurrent ? '#FF4C00' : 'rgba(255,255,255,0.06)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: isCurrent ? '#fff' : 'rgba(255,255,255,0.45)',
                  marginBottom: 10, transition: 'all 0.3s ease',
                }}>
                  <Icon style={{ width: 20, height: 20 }} />
                </div>
                <div className="workflow-step-title">{step.title}</div>
                <div className="workflow-step-desc">{step.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Stepper */}
        <div className="lg:hidden workflow-steps" style={{ gridTemplateColumns: '1fr' }}>
          {WORKFLOW_STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="workflow-step">
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 6 }}>
                  <div style={{ width: 38, height: 38, borderRadius: 11, background: '#FF4C00', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', flexShrink: 0 }}>
                    <Icon style={{ width: 18, height: 18 }} />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#FF7A3D', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>STEP {step.step}</span>
                    <span className="workflow-step-title" style={{ display: 'block' }}>{step.title}</span>
                  </div>
                </div>
                <p className="workflow-step-desc">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div style={{ marginTop: '2.5rem', textAlign: 'center', padding: '1rem', borderRadius: 16, background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', fontSize: '0.875rem', color: 'rgba(255,255,255,0.5)' }}>
          ⚡ <strong style={{ color: 'rgba(255,255,255,0.8)' }}>Total time elapsed:</strong> Order to thermal print & UPI confirmation takes less than <span style={{ color: '#FF4C00', fontWeight: 700 }}>2.4 seconds</span>.
        </div>

      </div>
    </section>
  );
};

