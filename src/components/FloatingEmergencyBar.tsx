import React from 'react';
import { PhoneCall, MessageCircle, Truck } from 'lucide-react';
import { SiteConfig } from '../types';

interface FloatingEmergencyBarProps {
  config: SiteConfig;
  onRequestEmergency: () => void;
}

export const FloatingEmergencyBar: React.FC<FloatingEmergencyBarProps> = ({ config, onRequestEmergency }) => {
  const whatsappUrl = `https://wa.me/${config.whatsappNumber}?text=${encodeURIComponent(
    `السلام عليكم، أود إرسال اللوكيشن الخاص بموقعي لطلب ونش إنقاذ سيارات عاجل من ${config.brandName}.`
  )}`;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-neutral-950/95 border-t border-neutral-800 p-2 sm:p-3 backdrop-blur-md shadow-2xl transition-all">
      <div className="max-w-4xl mx-auto flex items-center justify-between gap-2 sm:gap-3">
        {/* Quick Emergency Call Button: 01093018585 */}
        <a
          href={`tel:${config.phonePrimary}`}
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 bg-amber-500 hover:bg-amber-400 text-neutral-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95 min-h-[44px]"
        >
          <PhoneCall className="w-4 h-4 shrink-0 animate-bounce" />
          <span className="hidden xs:inline">طوارئ:</span>
          <span className="font-mono text-xs sm:text-sm dir-ltr tracking-wide">{config.phonePrimary}</span>
        </a>

        {/* WhatsApp Dispatch Button: 01093018585 */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 sm:gap-2 py-2.5 px-2 sm:px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-transform active:scale-95 min-h-[44px]"
          title="إرسال اللوكيشن على الواتس 01093018585"
        >
          <MessageCircle className="w-4 h-4 shrink-0 text-white" />
          <span className="whitespace-nowrap">إرسال اللوكيشن على الواتس</span>
        </a>

        {/* Quick Request Trigger on desktop */}
        <button
          onClick={onRequestEmergency}
          className="hidden md:flex items-center justify-center gap-1.5 py-2.5 px-4 bg-neutral-900 hover:bg-neutral-800 border border-neutral-700 text-neutral-200 font-bold text-xs rounded-xl transition-colors whitespace-nowrap min-h-[44px]"
        >
          <Truck className="w-4 h-4 text-amber-400 shrink-0" />
          <span>طلب ونش فوري</span>
        </button>
      </div>
    </div>
  );
};
