import React, { useState } from 'react';
import { PhoneCall, MessageCircle, ShieldCheck, Clock, Zap, CheckCircle2 } from 'lucide-react';
import { SiteConfig } from '../types';
import rowadHeroImg from '../assets/images/rowad_winch_side.jpeg';
import rowadRearImg from '../assets/images/rowad_winch_rear.jpeg';
import rowadFrontImg from '../assets/images/rowad_winch_front.jpeg';
import rowadPromoBanner from '../assets/images/rowad_promo_banner.jpg';

interface HeroProps {
  config: SiteConfig;
}

export const Hero: React.FC<HeroProps> = ({ config }) => {
  // 5 required fields: من - إلي - رقم الهاتف - نوع السيارة - الحالة (عطل ولا حادث)
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [carType, setCarType] = useState('');
  const [condition, setCondition] = useState<'عطل' | 'حادث'>('عطل');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = encodeURIComponent(
      `🚨 *طلب ونش إنقاذ فوري - ${config.brandName}*\n\n` +
      `📍 *من (مكان التحميل):* ${fromLocation || 'غير محدد'}\n` +
      `🎯 *إلي (مكان التوصيل):* ${toLocation || 'غير محدد'}\n` +
      `📞 *رقم الهاتف:* ${phone || 'غير مدخل'}\n` +
      `🚗 *نوع السيارة:* ${carType || 'غير محدد'}\n` +
      `⚠️ *الحالة:* ${condition === 'عطل' ? 'عطل في السيارة' : 'حادث طريق'}\n\n` +
      `برجاء إرسال أقرب ونش إنقاذ سيارات لموقعي فوراً.`
    );

    window.open(`https://wa.me/${config.whatsappNumber}?text=${message}`, '_blank');
  };

  const defaultWhatsappMessage = encodeURIComponent(
    `السلام عليكم، أود إرسال اللوكيشن الخاص بموقعي لطلب ونش إنقاذ سيارات عاجل من ${config.brandName}.`
  );

  return (
    <section id="hero" className="relative pt-4 pb-12 sm:pt-8 sm:pb-20 overflow-hidden">
      {/* Background Ambience & Real Towing Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={rowadHeroImg}
          alt="ونش الرواد لانقاذ السيارات في القاهرة"
          className="w-full h-full object-cover object-center brightness-25 filter"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/85 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/95 via-neutral-950/70 to-neutral-950/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Emergency Live Alert Bar (Mobile friendly layout) */}
        <div className="mb-4 sm:mb-6 inline-flex flex-wrap items-center gap-2 bg-neutral-900/90 border border-amber-500/30 backdrop-blur-md rounded-xl sm:rounded-full py-2 px-3 sm:px-4 text-xs sm:text-sm text-neutral-200 w-full sm:w-auto">
          <span className="flex h-2.5 w-2.5 relative shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
          </span>
          <span className="font-bold text-amber-400 shrink-0">حالة أوناش الإنقاذ:</span>
          <span className="text-neutral-300 font-medium">{config.emergencyNotice}</span>
        </div>

        {/* Hero Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          {/* Headline Column */}
          <div className="lg:col-span-6 text-right">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-snug sm:leading-tight tracking-tight mb-3 sm:mb-4">
              {config.heroHeadline}
            </h1>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-2xl mb-6">
              {config.heroSubheadline}
            </p>

            {/* Direct Action Buttons for Mobile & Desktop */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-6">
              <a
                href={`tel:${config.phonePrimary}`}
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm sm:text-base font-extrabold text-neutral-950 bg-amber-500 hover:bg-amber-400 shadow-lg shadow-amber-500/25 transition-all transform active:scale-98 min-h-[48px]"
              >
                <PhoneCall className="w-5 h-5 text-neutral-950 shrink-0" />
                <span>اتصل بالونش الآن ({config.phonePrimary})</span>
              </a>

              <a
                href={`https://wa.me/${config.whatsappNumber}?text=${defaultWhatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-xl text-sm sm:text-base font-bold text-white bg-emerald-600 hover:bg-emerald-500 border border-emerald-500 shadow-md shadow-emerald-600/20 transition-all transform active:scale-98 min-h-[48px]"
              >
                <MessageCircle className="w-5 h-5 text-white shrink-0" />
                <span className="text-right">ارسال اللوكيشن علي الوتساب</span>
              </a>
            </div>

            {/* Real Fleet Showcase Photo on Mobile & Desktop */}
            <div className="mb-6 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/80 shadow-xl group max-w-lg mx-auto lg:mx-0">
              <div className="relative aspect-square w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                <img
                  src={rowadPromoBanner}
                  alt="ونش الرواد لإنقاذ السيارات - إنقاذ السيارات الفارهة والسريعة بأمان تام 24 ساعة"
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                />
                <div className="absolute top-2.5 right-2.5 bg-neutral-950/85 backdrop-blur-md border border-amber-500/40 text-amber-400 text-[11px] sm:text-xs px-2.5 py-1 rounded-lg font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>خدمة 24/7 سريعة</span>
                </div>
              </div>
            </div>

            {/* Mobile Trust Markers (Clean 3-column micro grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 border-t border-neutral-800/80 pt-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>وصول خلال {config.averageEtaMinutes} دقيقة</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60">
                <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                <span>ونش إنقاذ سيارات مجهز بأعلى مستوى من الأمان</span>
              </div>
              <div className="flex items-center gap-2 bg-neutral-900/60 p-2.5 rounded-lg border border-neutral-800/60">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>تغطية فورية بالقاهرة 24h</span>
              </div>
            </div>
          </div>

          {/* Form Column: طلب ونش انقاذ فوري (Mobile Touch Optimized) */}
          <div className="lg:col-span-6 w-full">
            <div className="bg-neutral-900/95 border border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-2xl backdrop-blur-xl relative text-right">
              <div className="flex items-center justify-between pb-3 sm:pb-4 mb-3 sm:mb-4 border-b border-neutral-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                  <h2 className="text-base sm:text-xl font-bold text-white">طلب ونش إنقاذ فوري</h2>
                </div>
                <span className="text-[11px] sm:text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-2 py-0.5 rounded-md">
                  إرسال مباشر للواتساب
                </span>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-3">
                {/* 1. من & 2. إلي */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-200 mb-1">
                      من (مكان التحميل) *
                    </label>
                    <input
                      type="text"
                      required
                      value={fromLocation}
                      onChange={(e) => setFromLocation(e.target.value)}
                      placeholder="مثال: التجمع الخامس، شارع التسعين"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-200 mb-1">
                      إلي (مكان التوصيل) *
                    </label>
                    <input
                      type="text"
                      required
                      value={toLocation}
                      onChange={(e) => setToLocation(e.target.value)}
                      placeholder="مثال: مدينة نصر، مركز صيانة"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                {/* 3. رقم الهاتف & 4. نوع السياره */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-200 mb-1">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="مثال: 01012345678"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 font-mono dir-ltr text-right min-h-[44px]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-200 mb-1">
                      نوع السياره *
                    </label>
                    <input
                      type="text"
                      required
                      value={carType}
                      onChange={(e) => setCarType(e.target.value)}
                      placeholder="مثال: كيا سبورتاج، هيونداي إلنترا"
                      className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
                    />
                  </div>
                </div>

                {/* 5. الحاله (عطل ولا حادث) - الخانة الوحيدة المنسدلة */}
                <div>
                  <label className="block text-xs font-semibold text-neutral-200 mb-1">
                    الحالة (عطل ولا حادث) *
                  </label>
                  <select
                    value={condition}
                    onChange={(e) => setCondition(e.target.value as 'عطل' | 'حادث')}
                    className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 focus:outline-none focus:border-amber-500 cursor-pointer font-medium min-h-[44px]"
                  >
                    <option value="عطل">عطل في السيارة</option>
                    <option value="حادث">حادث طريق لا قدر الله</option>
                  </select>
                </div>

                {/* Submit Action Button */}
                <button
                  type="submit"
                  className="w-full mt-2 py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 transform active:scale-98 min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>إرسال الطلب عبر واتساب ({config.phonePrimary})</span>
                </button>

                <div className="pt-2 flex flex-col xs:flex-row items-center justify-between gap-2 text-xs text-neutral-400">
                  <span>خدمة سريعة على مدار 24 ساعة</span>
                  <a
                    href={`tel:${config.phonePrimary}`}
                    className="text-amber-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>اتصال فوري: {config.phonePrimary}</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
