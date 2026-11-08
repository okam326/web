import React, { useState } from 'react';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { SiteConfig } from '../types';

interface FaqSectionProps {
  config: SiteConfig;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ config }) => {
  const [openId, setOpenId] = useState<string | null>(config.faqs[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 sm:py-20 bg-neutral-950 border-b border-neutral-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase mb-1.5 sm:mb-2 block">
            إجابات واضحة ومباشرة
          </span>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight mb-2 sm:mb-3">
            الأسئلة الشائعة حول خدمات ونش إنقاذ السيارات
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm">
            كل ما تود معرفته عن أسلوب الرفع، مواعيد الوصول، والتغطية في القاهرة
          </p>
        </div>

        <div className="space-y-2.5 sm:space-y-3">
          {config.faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-6 text-right flex items-center justify-between gap-3 text-white hover:text-amber-400 transition-colors min-h-[48px]"
                >
                  <span className="font-bold text-xs sm:text-base leading-snug">
                    {faq.question}
                  </span>
                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-neutral-950 flex items-center justify-center text-neutral-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-amber-400' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-6 pb-4 pt-1 sm:pb-6 text-neutral-300 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/80">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-8 sm:mt-10 p-4 sm:p-6 bg-neutral-900 border border-neutral-800 rounded-2xl text-right flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">لديك استفسار خاص بنوع سيارتك أو مسافة سفر طويلة؟</h4>
            <p className="text-[11px] sm:text-xs text-neutral-400">فريق خدمة العملاء جاهز للرد الفوري على كل أسئلتك على مدار الـ 24 ساعة.</p>
          </div>
          <a
            href={`tel:${config.phonePrimary}`}
            className="w-full sm:w-auto px-4 py-2.5 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-amber-400 font-bold text-xs rounded-xl transition-colors whitespace-nowrap flex items-center justify-center gap-2 min-h-[44px]"
          >
            <PhoneCall className="w-4 h-4 shrink-0" />
            <span>اتصل للاستفسار ({config.phonePrimary})</span>
          </a>
        </div>
      </div>
    </section>
  );
};
