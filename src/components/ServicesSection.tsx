import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { SiteConfig, WinchService } from '../types';
import rowadJeepBanner from '../assets/images/rowad_jeep_banner.jpg';
import rowadRearImg from '../assets/images/rowad_winch_rear.jpeg';
import rowadPorscheBanner from '../assets/images/rowad_porsche_banner.png';
import rowadPorscheCabrioBanner from '../assets/images/rowad_porsche_cabrio_banner.jpg';

interface ServicesSectionProps {
  config: SiteConfig;
  onSelectService: (service: WinchService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ config, onSelectService }) => {
  // Map index to real images imported directly:
  // Card 1 (index 0): Jeep on modern flatbed banner
  // Card 2 (index 1): Porsche Cabriolet banner
  // Card 3 (index 2): Porsche SUV banner
  // Card 4 (index 3): Winch rear hydraulic strapping photo
  const serviceImages = [
    rowadJeepBanner,
    rowadPorscheCabrioBanner,
    rowadPorscheBanner,
    rowadRearImg
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-neutral-900/60 border-b border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-14 gap-3 sm:gap-4 text-right">
          <div>
            <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase block mb-1.5 sm:mb-2">
              خدمات احترافية متكاملة
            </span>
            <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              خدمات أسطول ونش إنقاذ سيارات الرواد في القاهرة
            </h2>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm max-w-md leading-relaxed">
            صور حقيقية لأسطولنا المجهز بأحدث أنظمة التثبيت والرفع الهيدروليكي لنقل سيارتك بأمان فائق في كافة مناطق القاهرة.
          </p>
        </div>

        {/* 4-Card Fleet Grid with Full Mobile-Friendly Proportions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {config.services.map((service, index) => {
            const isSquareBanner = index === 0 || index === 1 || index === 2;
            const imgSrc = serviceImages[index] || rowadJeepBanner;

            return (
              <div
                key={service.id}
                className="group bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:border-neutral-700 hover:shadow-xl text-right"
              >
                {/* Image Container with Responsive Aspect Ratio */}
                <div className="relative overflow-hidden w-full bg-neutral-950 flex items-center justify-center aspect-square">
                  <img
                    src={imgSrc}
                    alt={service.title}
                    className={`w-full h-full group-hover:scale-102 transition-transform duration-500 ${
                      isSquareBanner ? 'object-contain' : 'object-cover'
                    }`}
                  />
                  {!isSquareBanner && (
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent pointer-events-none" />
                  )}
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-neutral-950/85 backdrop-blur-md border border-neutral-700 text-amber-400 text-xs px-2.5 py-1 rounded-lg font-semibold shadow">
                    {service.badge}
                  </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Editorial Numbering */}
                    <div className="flex items-center justify-between text-xs text-neutral-400 mb-2 sm:mb-3 font-mono">
                      <span>0{index + 1}. ونش إنقاذ سيارات معتمد</span>
                      <span className="text-emerald-400 font-semibold">{service.badge}</span>
                    </div>

                    <h3 className="text-base sm:text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-4 sm:mb-6">
                      {service.description}
                    </p>
                  </div>

                  <div className="pt-3 sm:pt-4 border-t border-neutral-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-neutral-400">
                      <span>أمان وتثبيت كامل</span>
                      <span aria-hidden="true">·</span>
                      <span>وصول 15 دقيقة</span>
                    </div>

                    <button
                      onClick={() => onSelectService(service)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-amber-400 hover:text-amber-300 transition-colors min-h-[36px]"
                    >
                      <span>طلب الخدمة عبر واتساب</span>
                      <ArrowLeft className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
