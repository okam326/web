import React from 'react';
import { Truck, PhoneCall, MessageSquare, MapPin, Clock } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
}

export const Footer: React.FC<FooterProps> = ({ config }) => {
  return (
    <footer className="bg-neutral-950 border-t border-neutral-800 pt-10 pb-24 sm:pt-14 sm:pb-28 text-neutral-400 text-xs sm:text-sm text-right">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-neutral-800/80">
          {/* Brand & About */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5 text-white font-bold text-lg">
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-neutral-950 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <span>{config.brandName}</span>
            </div>
            <p className="text-neutral-400 text-xs leading-relaxed max-w-md">
              {config.brandTagline}. أسرع خدمة ونش إنقاذ سيارات في محافظة القاهرة (القاهرة الجديدة، مدينة نصر، المقطم، المعادي، ومصر الجديدة) بأعلى درجات الأمان.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs text-neutral-300">
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                <span>{config.workingHours}</span>
              </div>
              <span aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>محافظة القاهرة</span>
              </div>
            </div>
          </div>

          {/* Emergency Contacts: 01093018585 */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">التواصل المباشر مع ونش الرواد</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="block text-neutral-500 text-[11px]">رقم الاتصال المباشر:</span>
                <a href={`tel:${config.phonePrimary}`} className="text-amber-400 hover:underline font-mono font-bold text-sm dir-ltr inline-block">
                  {config.phonePrimary}
                </a>
              </li>
              <li>
                <span className="block text-neutral-500 text-[11px]">واتساب الطلبات السريعة:</span>
                <a
                  href={`https://wa.me/${config.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-mono text-sm dir-ltr inline-block"
                >
                  {config.phonePrimary}
                </a>
              </li>
              <li className="text-[11px] text-neutral-500 pt-1">
                خدمة متوفرة 24 ساعة طوال أيام الأسبوع
              </li>
            </ul>
          </div>

          {/* Quick Navigation & Site Config */}
          <div>
            <h4 className="font-bold text-white text-sm mb-3">أقسام الموقع</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-amber-400 transition-colors">خدمات ونش إنقاذ سيارات</a>
              </li>
              <li>
                <a href="#coverage" className="hover:text-amber-400 transition-colors">مناطق التغطية في القاهرة</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-amber-400 transition-colors">آراء وتقييمات العملاء</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">الأسئلة الشائعة</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom notices */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div className="text-right sm:text-right">
            <p>© {new Date().getFullYear()} {config.brandName}. جميع الحقوق محفوظة لخدمات ونش إنقاذ سيارات في القاهرة.</p>
            <p className="mt-1 text-neutral-300 font-medium text-xs">تصميم وتنفيذ محمد عبده</p>
            <a
              href="tel:01149149235"
              className="mt-0.5 text-amber-400 hover:text-amber-300 font-mono font-bold text-xs dir-ltr inline-flex items-center gap-1.5 hover:underline transition-colors"
              title="اتصال بالمصمم محمد عبده"
            >
              <span>01149149235</span>
              <PhoneCall className="w-3 h-3" />
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span>ونش إنقاذ سيارات مجهز</span>
            <span aria-hidden="true">·</span>
            <span>تغطية القاهرة الكبرى</span>
            <span aria-hidden="true">·</span>
            <span>استجابة فورية</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
