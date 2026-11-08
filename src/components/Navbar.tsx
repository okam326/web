import React from 'react';
import { PhoneCall, Truck } from 'lucide-react';
import { SiteConfig } from '../types';

interface NavbarProps {
  config: SiteConfig;
  onRequestEmergency: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onRequestEmergency }) => {
  return (
    <header className="sticky top-0 z-40 bg-neutral-950/95 backdrop-blur-md border-b border-neutral-800 transition-colors">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-6 h-16 sm:h-20">
          {/* Zone 1: Brand Wordmark (Responsive) */}
          <a
            href="#hero"
            className="flex items-center gap-2 sm:gap-3 text-white hover:text-amber-400 transition-colors shrink-0 group"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-500 flex items-center justify-center text-neutral-950 shadow-md group-hover:bg-amber-400 transition-all shrink-0">
              <Truck className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-extrabold text-sm sm:text-xl leading-tight line-clamp-1">{config.brandName}</span>
              <span className="hidden sm:inline text-[11px] font-normal text-amber-400 tracking-wide">خدمة 24 ساعة في القاهرة</span>
            </div>
          </a>

          {/* Zone 2: Navigation Links (Hidden on mobile, clean text on desktop) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-neutral-300">
            <a href="#services" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              الخدمات
            </a>
            <a href="#coverage" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              مناطق التغطية بالقاهرة
            </a>
            <a href="#reviews" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              آراء العملاء
            </a>
            <a href="#faq" className="hover:text-amber-400 transition-colors whitespace-nowrap shrink-0">
              الأسئلة الشائعة
            </a>
          </nav>

          {/* Zone 3: Actions (Mobile Optimized Touch Targets) */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct Phone Emergency Hotline */}
            <a
              href={`tel:${config.phonePrimary}`}
              className="flex items-center justify-center gap-1.5 px-3 py-2 sm:px-4 sm:py-2 text-xs sm:text-sm font-black text-neutral-950 bg-amber-500 hover:bg-amber-400 rounded-lg shadow-md hover:shadow-amber-500/20 transition-all shrink-0 min-h-[38px]"
              aria-label={`اتصال طوارئ ${config.phonePrimary}`}
            >
              <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
              <span className="hidden xs:inline sm:inline">اتصل:</span>
              <span className="font-mono text-xs sm:text-sm dir-ltr tracking-wide">{config.phonePrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
