import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { SiteConfig } from '../types';

interface TestimonialsProps {
  config: SiteConfig;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ config }) => {
  return (
    <section id="reviews" className="py-12 sm:py-20 bg-neutral-900/40 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase mb-1.5 sm:mb-2 block">
            تجارب حقيقية وموثقة
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3">
            ثقة أصحاب السيارات في خدمات إنقاذنا
          </h2>
          <p className="text-neutral-400 text-xs sm:text-base leading-relaxed">
            أنقذنا آلاف السيارات على مدار سنوات في أصعب أوقات الليل ومحاور الطرق السريعة بشهادة عملائنا.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {config.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-4 sm:p-7 flex flex-col justify-between shadow-sm hover:border-neutral-700 transition-all text-right"
            >
              <div>
                {/* Rating Stars & Time */}
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-500 font-mono">{t.timeAgo}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed mb-4 sm:mb-6">
                  "{t.comment}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-3 sm:pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-white text-xs sm:text-sm">{t.author}</h4>
                  <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 mt-0.5">
                    <span className="text-amber-400/90 font-medium">{t.car}</span>
                    <span aria-hidden="true">·</span>
                    <span>{t.location}</span>
                  </div>
                </div>
                <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-emerald-400 flex items-center justify-center shrink-0" title="خدمة مؤكدة">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
