import React from 'react';
import { MapPin, Truck, PhoneCall, ArrowLeft } from 'lucide-react';
import { SiteConfig, CoverageArea } from '../types';

interface CoverageMapSectionProps {
  config: SiteConfig;
  onSelectArea: (area: CoverageArea) => void;
}

export const CoverageMapSection: React.FC<CoverageMapSectionProps> = ({ config, onSelectArea }) => {
  return (
    <section id="coverage" className="py-12 sm:py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase mb-1.5 sm:mb-2 block">
            تغطية كاملة لجميع أنحاء القاهرة
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3">
            مناطق تغطية ونش الرواد في محافظة القاهرة
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            سيارات ونش إنقاذ سيارات متمركزة في أهم مناطق القاهرة: القاهرة الجديدة، مدينة نصر، المقطم، المعادي، ومصر الجديدة لضمان أسرع وصول لموقعك.
          </p>
        </div>

        {/* Cairo Districts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {config.areas.map((area) => (
            <div
              key={area.id}
              onClick={() => onSelectArea(area)}
              className="group bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 rounded-2xl p-4 sm:p-5 cursor-pointer transition-all hover:bg-neutral-900/80 active:scale-98 text-right"
            >
              <div className="flex items-center justify-between gap-3 mb-2.5 sm:mb-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-neutral-950 transition-colors shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base group-hover:text-amber-400 transition-colors">
                      {area.name}
                    </h3>
                    <span className="text-[11px] text-neutral-400">محافظة القاهرة</span>
                  </div>
                </div>
                <span className="text-xs font-mono font-bold text-amber-400 bg-neutral-950 border border-neutral-800 px-2 py-1 rounded-md shrink-0">
                  {area.eta}
                </span>
              </div>

              <div className="flex items-center justify-between text-xs text-neutral-400 pt-2.5 sm:pt-3 border-t border-neutral-800/80">
                <div className="flex items-center gap-1.5 text-neutral-300">
                  <Truck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{area.availableTrucks} أوناش جاهزة</span>
                </div>

                <div className="flex items-center gap-1 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  <span>طلب ونش هنا</span>
                  <ArrowLeft className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cairo Quick Call Banner */}
        <div className="mt-8 sm:mt-12 bg-neutral-900 border border-amber-500/30 rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-right">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-white mb-1">
              سيارتك تعطلت الآن في أي منطقة بالقاهرة أو على الطريق الدائري؟
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
              أقرب ونش إنقاذ سيارات من ونش الرواد سيتحرك إليك فوراً بمجرد اتصالك أو مراسلتنا عبر الواتساب.
            </p>
          </div>
          <a
            href={`tel:${config.phonePrimary}`}
            className="w-full sm:w-auto px-5 py-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-amber-500/20 whitespace-nowrap shrink-0 flex items-center justify-center gap-2 min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>اتصال طوارئ القاهرة ({config.phonePrimary})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
