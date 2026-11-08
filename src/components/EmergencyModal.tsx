import React, { useState } from 'react';
import { X, MessageSquare, Truck, PhoneCall } from 'lucide-react';
import { SiteConfig, EmergencyRequest } from '../types';

interface EmergencyModalProps {
  isOpen: boolean;
  onClose: () => void;
  config: SiteConfig;
  initialData?: Partial<EmergencyRequest>;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  isOpen,
  onClose,
  config,
  initialData,
}) => {
  const [fromLocation, setFromLocation] = useState(initialData?.fromLocation || '');
  const [toLocation, setToLocation] = useState(initialData?.toLocation || '');
  const [phone, setPhone] = useState(initialData?.phone || '');
  const [carType, setCarType] = useState(initialData?.carType || '');
  const [condition, setCondition] = useState<'عطل' | 'حادث'>(initialData?.condition || 'عطل');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = encodeURIComponent(
      `🚨 *طلب ونش إنقاذ سيارات - ${config.brandName}*\n\n` +
      `📍 *من (مكان التحميل):* ${fromLocation || 'غير محدد'}\n` +
      `🎯 *إلي (مكان التوصيل):* ${toLocation || 'غير محدد'}\n` +
      `📞 *رقم الهاتف:* ${phone || 'غير مدخل'}\n` +
      `🚗 *نوع السياره:* ${carType || 'غير محدد'}\n` +
      `⚠️ *الحالة:* ${condition === 'عطل' ? 'عطل في السيارة' : 'حادث طريق'}\n\n` +
      `برجاء إرسال أقرب ونش إنقاذ سيارات فوراً.`
    );

    window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-sm animate-fade-in text-right">
      <div className="relative w-full max-w-lg bg-neutral-900 border border-neutral-700 rounded-2xl p-4 sm:p-7 shadow-2xl overflow-y-auto max-h-[92vh]">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 sm:pb-4 mb-4 border-b border-neutral-800">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
              <Truck className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white">طلب ونش إنقاذ فوري</h3>
              <p className="text-[11px] sm:text-xs text-neutral-400">إرسال تفاصيل طلبك مباشرة لواتساب ونش الرواد</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="إغلاق النافذة"
            className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
          {/* 1. من */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              من (مكان التحميل) *
            </label>
            <input
              type="text"
              required
              value={fromLocation}
              onChange={(e) => setFromLocation(e.target.value)}
              placeholder="مثال: التجمع الخامس، القاهرة الجديدة، المقطم..."
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
            />
          </div>

          {/* 2. إلي */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              إلي (مكان التوصيل) *
            </label>
            <input
              type="text"
              required
              value={toLocation}
              onChange={(e) => setToLocation(e.target.value)}
              placeholder="مثال: مدينة نصر، المعادي، مركز الصيانة..."
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
            />
          </div>

          {/* 3. رقم الهاتف */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              رقم الهاتف للتواصل *
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

          {/* 4. نوع السياره */}
          <div>
            <label className="block text-xs font-semibold text-neutral-200 mb-1">
              نوع السياره *
            </label>
            <input
              type="text"
              required
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
              placeholder="مثال: تويوتا كورولا، كيا سبورتاج..."
              className="w-full bg-neutral-950 border border-neutral-700 rounded-xl px-3 py-2.5 text-sm text-neutral-100 placeholder:text-neutral-500 focus:outline-none focus:border-amber-500 min-h-[44px]"
            />
          </div>

          {/* 5. الحاله (عطل ولا حادث) */}
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

          {/* Actions */}
          <div className="pt-2 sm:pt-3 space-y-2">
            <button
              type="submit"
              className="w-full py-3.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-sm sm:text-base rounded-xl shadow-lg shadow-emerald-600/25 transition-all flex items-center justify-center gap-2 min-h-[48px]"
            >
              <MessageSquare className="w-5 h-5 text-white shrink-0" />
              <span>إرسال الطلب فوراً عبر واتساب ({config.phonePrimary})</span>
            </button>

            <a
              href={`tel:${config.phonePrimary}`}
              className="w-full py-2.5 sm:py-3 px-4 bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-amber-400 font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center justify-center gap-2 min-h-[44px]"
            >
              <PhoneCall className="w-4 h-4 text-amber-400 shrink-0" />
              <span>أو اتصال هاتفي مباشر ({config.phonePrimary})</span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
