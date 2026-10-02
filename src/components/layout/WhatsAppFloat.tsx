'use client';

import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const phoneNumber = '919891578609';
  const defaultMessage = encodeURIComponent('Hi KNK POS team, I want to know more about KNK POS system and schedule a demo.');

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${defaultMessage}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Pop-up bubble for high conversion */}
      {isTooltipOpen && (
        <div className="mb-3 p-4 bg-white rounded-2xl shadow-2xl border border-emerald-100 max-w-xs animate-fadeIn text-slate-800 text-xs sm:text-sm">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-bold text-slate-900">KNK POS Expert Online</span>
            </div>
            <button
              onClick={() => setIsTooltipOpen(false)}
              className="text-slate-400 hover:text-slate-600 p-0.5 rounded"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
          <p className="text-slate-600 mb-3 leading-relaxed">
            Need a live demo, hardware quotes, or GST setup advice? Chat with KNK:SOFT experts instantly!
          </p>
          <button
            onClick={handleWhatsAppClick}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
          >
            <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
          </button>
        </div>
      )}

      {/* Floating Action Button (56px green circle) */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          onMouseEnter={() => setIsTooltipOpen(true)}
          aria-label="Chat with KNK POS on WhatsApp"
          className="w-14 h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all duration-300 relative focus:outline-none focus:ring-4 focus:ring-emerald-300"
        >
          <MessageCircle className="w-7 h-7 fill-current" />
          
          {/* Notification Ping Badge */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-pos-orange border-2 border-white"></span>
          </span>
        </button>

        {/* Tooltip on hover */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden group-hover:flex items-center bg-slate-900 text-white text-xs font-semibold py-1.5 px-3 rounded-xl shadow-lg whitespace-nowrap">
          Chat on WhatsApp: +91 9891-578-609
        </div>
      </div>
    </div>
  );
};
