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
  Mail,
  MessageSquare,
  AlertCircle,
  Loader2,
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
    email: '',
    businessName: '',
    city: 'New Delhi NCR',
    industry: selectedIndustry || 'Restaurant / QSR / Cafe',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setFormData({
        name: '',
        phone: '',
        email: '',
        businessName: '',
        city: 'New Delhi NCR',
        industry: selectedIndustry || 'Restaurant / QSR / Cafe',
        message: '',
      });
      setErrors({});
      setServerError(null);
      setSubmitted(false);
    }
  }, [isOpen, selectedIndustry]);

  if (!isOpen) return null;

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your full name.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Full name must be at least 2 characters.';
    }

    const cleanPhone = formData.phone.replace(/\D/g, '');
    if (!cleanPhone) {
      newErrors.phone = 'Please enter your 10-digit mobile number.';
    } else if (cleanPhone.length !== 10) {
      newErrors.phone = 'Mobile number must be exactly 10 digits.';
    } else if (!/^[6-9]\d{9}$/.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid Indian mobile number starting with 6, 7, 8, or 9.';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address (e.g. name@company.com).';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/demo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Failed to submit demo request.');
      }

      setSubmitted(true);
    } catch (err: any) {
      console.error('Demo booking error:', err);
      setServerError(
        err.message || 'Unable to connect to the demo scheduling server. Please try again or WhatsApp us directly.'
      );
    } finally {
      setLoading(false);
    }
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setServerError(null);
    setErrors({});
    setFormData({
      name: '',
      phone: '',
      email: '',
      businessName: '',
      city: 'New Delhi NCR',
      industry: selectedIndustry || 'Restaurant / QSR / Cafe',
      message: '',
    });
    closeDemoModal();
  };

  return (
    <div className="demo-modal-overlay" onClick={handleResetAndClose}>
      <div
        className="demo-modal-panel max-h-[90vh] overflow-y-auto"
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

        {/* Modal Header */}
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
                Demo Request Submitted!
              </h4>
              <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="font-bold text-slate-900">{formData.name}</span>! Our POS specialist has received your request and will contact you on{' '}
                <span className="font-bold text-slate-900">+91 {formData.phone}</span> within 15 minutes.
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
            <form onSubmit={handleSubmit} className="space-y-3" noValidate>
              {serverError && (
                <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-800 text-xs flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                  <span>{serverError}</span>
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="demo-modal-label">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-2.5" />
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Rajesh Sharma"
                    className={`demo-modal-input pl-10 ${errors.name ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                  />
                </div>
                {errors.name && (
                  <p className="text-rose-500 text-[11px] font-medium mt-1">{errors.name}</p>
                )}
              </div>

              {/* WhatsApp / Phone & Email Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div>
                  <label className="demo-modal-label">
                    WhatsApp / Mobile <span className="text-rose-500">*</span>
                  </label>
                  <div className="flex">
                    <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-50 text-slate-700 text-xs font-bold">
                      +91
                    </span>
                    <input
                      type="tel"
                      required
                      maxLength={10}
                      value={formData.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10);
                        setFormData({ ...formData, phone: val });
                        if (errors.phone) setErrors({ ...errors, phone: '' });
                      }}
                      placeholder="9876543210"
                      className={`demo-modal-input rounded-l-none border-l-0 ${errors.phone ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-rose-500 text-[11px] font-medium mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="demo-modal-label">
                    Business Email <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      placeholder="e.g. rajesh@example.com"
                      className={`demo-modal-input pl-9 ${errors.email ? 'border-rose-400 ring-1 ring-rose-400' : ''}`}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-rose-500 text-[11px] font-medium mt-1">{errors.email}</p>
                  )}
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
                      placeholder="e.g. Chai Point Cafe / Royal Sweets"
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

              {/* Optional Requirements / Message */}
              <div>
                <label className="demo-modal-label">
                  Special Requirements <span className="text-slate-400 text-[10px] font-normal">(Optional)</span>
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="e.g. Need barcode scanners and weighing scale for 2 billing counters"
                    className="demo-modal-input pl-9"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="demo-modal-btn flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Scheduling Your Live Demo...</span>
                    </>
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
