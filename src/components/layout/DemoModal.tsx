'use client';

import React, { useState } from 'react';
import { useDemoModal } from '@/context/DemoModalContext';
import {
  X,
  CheckCircle,
  Sparkles,
  MapPin,
  Building2,
  User,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';

const INDUSTRIES = [
  'Restaurant / QSR / Cafe',
  'Retail / Apparel / Footwear',
  'Kirana / Grocery / Supermarket',
  'Pharmacy / Medical Store',
  'Salon / Spa / Wellness',
  'Multi-Store / Franchise Brand',
];

const MAJOR_CITIES = [
  'New Delhi NCR',
  'Mumbai',
  'Bengaluru',
  'Hyderabad',
  'Chennai',
  'Pune',
  'Ahmedabad',
  'Kolkata',
  'Jaipur',
  'Surat',
  'Lucknow',
  'Chandigarh',
  'Other City',
];

export const DemoModal: React.FC = () => {
  const { isOpen, closeDemoModal, selectedIndustry } = useDemoModal();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    businessName: '',
    city: 'New Delhi NCR',
    industry: selectedIndustry || 'Restaurant / QSR / Cafe',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (selectedIndustry) {
      setFormData((prev) => ({ ...prev, industry: selectedIndustry }));
    }
  }, [selectedIndustry]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    closeDemoModal();
  };

  return (
    <div className="demo-modal-overlay" onClick={handleResetAndClose}>
      <div
        className="demo-modal-panel"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="demo-modal-close"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header — White Background */}
        <div className="demo-modal-header">
          <div className="demo-modal-eyebrow">
            <Sparkles className="w-3 h-3" /> 1-on-1 Live Demo
          </div>
          <h3 className="demo-modal-title">
            Book Your Free KNK POS&nbsp;
            <span className="text-[#FF4C00] inline-block">Demo</span>
          </h3>
          <p className="demo-modal-subtitle">
            See how KNK POS speeds up your billing by 3x and simplifies GST &amp; UPI.
          </p>
        </div>

        {/* Modal Body */}
        <div className="demo-modal-body">
          {submitted ? (
            <div className="text-center py-3 space-y-3">
              <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner border border-emerald-200">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900 tracking-tight">
                Demo Booked Successfully!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! A KNK POS specialist will contact you on <span className="font-bold text-slate-900">+91 {formData.phone}</span> within 15 minutes.
              </p>

              <div className="bg-[#FFF3EF] p-3.5 rounded-2xl border border-[#FFD5C2] text-left text-xs space-y-1.5 mt-3">
                <div className="font-bold text-[#FF4C00] flex items-center gap-1.5 text-xs">
                  <ShieldCheck className="w-4 h-4" /> What to expect in your demo:
                </div>
                <ul className="list-disc pl-4 space-y-1 text-slate-700 font-normal text-[11px]">
                  <li>Live barcode &amp; touchscreen billing simulation</li>
                  <li>Instant WhatsApp GST e-bill delivery setup</li>
                  <li>Offline mode demo during internet disconnection</li>
                  <li>Tailored hardware recommendations for {formData.industry}</li>
                </ul>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  className="demo-modal-btn"
                  onClick={handleResetAndClose}
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              {/* Full Name */}
              <div>
                <label className="demo-modal-label">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="demo-modal-input pl-10"
                  />
                </div>
              </div>

              {/* WhatsApp / Phone */}
              <div>
                <label className="demo-modal-label">
                  WhatsApp / Mobile Number *
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="9874561230"
                    className="demo-modal-input rounded-l-none border-l-0"
                  />
                </div>
              </div>

              {/* Business Name & City Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="demo-modal-label">
                    Store / Brand Name
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Chai Point Cafe"
                      className="demo-modal-input pl-9"
                    />
                  </div>
                </div>

                <div>
                  <label className="demo-modal-label">
                    City
                  </label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="demo-modal-select pl-9"
                    >
                      {MAJOR_CITIES.map((c) => (
                        <option key={c} value={c}>
                          {c}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div>
                <label className="demo-modal-label">
                  Business Category
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                  className="demo-modal-select"
                >
                  {INDUSTRIES.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <div className="pt-1.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="demo-modal-btn"
                >
                  {loading ? (
                    'Scheduling...'
                  ) : (
                    <>
                      <span>Schedule Free Live Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[10.5px] text-center text-slate-400 font-normal">
                🔒 Zero obligation. 100% Free Consultation by KNK:SOFT INFOTECH.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default DemoModal;
