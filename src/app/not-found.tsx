import Link from 'next/link';
import { Home, Sparkles } from 'lucide-react';
import { DemoModalTrigger } from '@/components/ui/DemoModalTrigger';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#FFF3EF] text-[#FF4C00] font-black text-3xl shadow-sm border border-[#FFD5C2]">
          404
        </div>
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Page Not Found
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FF4C00] text-white font-bold text-sm shadow-md hover:bg-[#e04300] transition-colors"
          >
            <Home className="w-4 h-4" />
            Back to Home
          </Link>
          <DemoModalTrigger
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-slate-200 bg-white text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FF4C00]" />
            Request Help / Demo
          </DemoModalTrigger>
        </div>
      </div>
    </div>
  );
}
