'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  ArrowRight,
  Check,
  TrendingUp,
  FileCheck2,
  PieChart,
} from 'lucide-react';
import { useDemoModal } from '@/context/DemoModalContext';

export const Analytics: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [activeRange, setActiveRange] = useState<'today' | 'week' | 'month'>('week');

  return (
    <section className="analytics-section" id="analytics">
      <div className="analytics-bg" />
      <div className="analytics-inner">
        
        {/* Left Column: Feature List & GST Summaries */}
        <div className="analytics-content space-y-4">
          <div className="analytics-eyebrow">
            <BarChart3 style={{ width: 13, height: 13 }} /> Data-Driven Growth
          </div>

          <h2 className="analytics-title">
            Actionable Business Intelligence at Your&nbsp;
            <span className="text-[#FF4C00] inline-block">Fingertips</span>
          </h2>

          <p className="analytics-subtitle">
            Stop guessing your profits. KNK POS crunches every invoice, discount, and return to give you clear visibility on what sells, who your top cashiers are, and your exact GST tax liabilities.
          </p>

          <div className="space-y-2.5 pt-0">
            <div className="analytics-feature-item">
              <div className="analytics-feature-icon">
                <FileCheck2 style={{ width: 15, height: 15, strokeWidth: 2.2 }} />
              </div>
              <div>
                <div className="analytics-feature-title">Daily &amp; Monthly GST Summaries</div>
                <div className="analytics-feature-desc">Instant net taxable turnover, CGST, SGST &amp; input credit reconciliation.</div>
              </div>
            </div>

            <div className="analytics-feature-item">
              <div className="analytics-feature-icon">
                <TrendingUp style={{ width: 15, height: 15, strokeWidth: 2.2 }} />
              </div>
              <div>
                <div className="analytics-feature-title">Outlet &amp; Franchise Performance</div>
                <div className="analytics-feature-desc">Compare revenue, average ticket size, and inventory velocity across all branches.</div>
              </div>
            </div>

            <div className="analytics-feature-item">
              <div className="analytics-feature-icon">
                <PieChart style={{ width: 15, height: 15, strokeWidth: 2.2 }} />
              </div>
              <div>
                <div className="analytics-feature-title">Dead Stock &amp; Food Wastage Insights</div>
                <div className="analytics-feature-desc">Identify slow-moving items early before they expire and erode your working capital.</div>
              </div>
            </div>
          </div>

          <div className="pt-3 flex flex-wrap items-center gap-3.5">
            <button
              type="button"
              onClick={() => openDemoModal('Analytics Reports')}
              className="bg-[#FF4C00] hover:bg-[#DE3700] text-white font-bold px-6 py-3 rounded-full text-sm transition-all shadow-md shadow-orange-500/20 hover:shadow-lg hover:scale-[1.02] cursor-pointer flex items-center gap-2"
            >
              Request Analytics Demo <ArrowRight style={{ width: 15, height: 15 }} />
            </button>
            <Link
              href="/product/analytics"
              className="text-sm font-bold text-slate-700 hover:text-[#FF4C00] flex items-center gap-1.5 transition-colors px-3 py-2"
            >
              View Full Metrics <ArrowRight style={{ width: 14, height: 14 }} />
            </Link>
          </div>
        </div>

        {/* Right Column: Live Interactive Dashboard Preview */}
        <div>
          <div className="analytics-visual">
            
            {/* Top Bar with Accent Line */}
            <div className="h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-orange-400 w-full" />

            {/* Filter range toggles */}
            <div className="analytics-visual-header">
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Consolidated POS Revenue</div>
                <div className="text-lg sm:text-xl font-extrabold text-slate-900 mt-0.5">
                  {activeRange === 'today' ? '₹ 84,200' : activeRange === 'week' ? '₹ 5,42,800' : '₹ 22,90,400'}
                </div>
              </div>

              <div className="flex bg-slate-100 p-1 rounded-full text-xs font-bold border border-slate-200">
                {(['today', 'week', 'month'] as const).map((range) => (
                  <button
                    key={range}
                    onClick={() => setActiveRange(range)}
                    className={`px-3 py-1.5 rounded-full capitalize transition-all duration-200 cursor-pointer text-xs font-bold ${
                      activeRange === range
                        ? 'bg-[#FF4C00] text-white shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div className="analytics-visual-body space-y-3.5">
              {/* Graphical Bar Simulation */}
              <div>
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-semibold text-slate-600">Weekly Revenue Trend (Mon - Sun)</span>
                  <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200 text-[10px]">
                    ↑ 18.6% vs previous week
                  </span>
                </div>

                <div className="grid grid-cols-7 gap-1.5 sm:gap-2 items-end h-28 pt-3 bg-slate-50/80 p-2.5 sm:p-3 rounded-xl border border-slate-200/80">
                  {[
                    { day: 'Mon', height: 'h-10', val: '₹62k' },
                    { day: 'Tue', height: 'h-14', val: '₹68k' },
                    { day: 'Wed', height: 'h-18', val: '₹74k' },
                    { day: 'Thu', height: 'h-16', val: '₹71k' },
                    { day: 'Fri', height: 'h-20', val: '₹89k' },
                    { day: 'Sat', height: 'h-24', val: '₹98k', peak: true },
                    { day: 'Sun', height: 'h-22', val: '₹92k' },
                  ].map((bar, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-1 h-full justify-end group">
                      <span className="text-[9px] text-slate-500 font-medium group-hover:text-[#FF4C00] transition-colors">{bar.val}</span>
                      <div
                        className={`w-full rounded-t-md transition-all duration-300 ${
                          bar.peak
                            ? 'bg-[#FF4C00] shadow-sm shadow-orange-500/30 scale-105'
                            : 'bg-slate-300 group-hover:bg-slate-400'
                        } ${bar.height}`}
                      />
                      <span className="text-[10px] font-bold text-slate-600">{bar.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 2 mini cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="analytics-kpi-card">
                  <div className="analytics-kpi-label">GSTR-3B Tax Liability</div>
                  <div className="analytics-kpi-value text-slate-900 text-sm sm:text-base">₹ 27,140</div>
                  <div className="analytics-kpi-sub text-emerald-600 flex items-center gap-1 text-[10px]">
                    <Check style={{ width: 12, height: 12 }} /> Auto-calculated • Ready
                  </div>
                </div>

                <div className="analytics-kpi-card">
                  <div className="analytics-kpi-label">Average Order Value</div>
                  <div className="analytics-kpi-value text-amber-600 text-sm sm:text-base">₹ 485.00</div>
                  <div className="analytics-kpi-sub text-slate-500 text-[10px]">
                    +₹45 after combo promos
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Analytics;
