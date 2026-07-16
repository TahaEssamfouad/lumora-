import React, { useState } from 'react';
import { Sparkles, Check, Send } from 'lucide-react';
import { FreeSampleRequest } from '../types';
import { getWhatsAppLink } from '../utils/whatsapp';

interface HeroMiniFormProps {
  lang: 'en' | 'ar';
  onRegister: () => void;
}

export default function HeroMiniForm({ lang, onRegister }: HeroMiniFormProps) {
  const [businessName, setBusinessName] = useState<string>('');
  const [industry, setIndustry] = useState<string>('ecommerce');
  const [requestDetails, setRequestDetails] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const isRtl = lang === 'ar';

  const industries = [
    { value: 'ecommerce', label: 'E-commerce', labelAr: 'متجر إلكتروني' },
    { value: 'restaurant', label: 'Restaurant', labelAr: 'مطعم / مقهى' },
    { value: 'realestate', label: 'Real Estate', labelAr: 'عقارات' },
    { value: 'beauty', label: 'Beauty', labelAr: 'جمال وتجميل' },
    { value: 'other', label: 'Other niche', labelAr: 'مجال آخر' }
  ];

  const getWhatsAppText = () => {
    const selectedInd = industries.find(i => i.value === industry);
    const indText = selectedInd ? (isRtl ? selectedInd.labelAr : selectedInd.label) : industry;

    const header = isRtl 
      ? `السلام عليكم، أود طلب عينة إعلانية مجانية سريعة من لومورا للتصميم.`
      : `Hello Lumora, I would like to request a fast-track free sample ad creative.`;

    const detailsLabel = isRtl ? `تفاصيل الطلب السريع:` : `Fast-Track Request Details:`;
    const nameLabel = isRtl ? `اسم المشروع` : `Brand Name`;
    const industryLabel = isRtl ? `مجال العمل` : `Industry`;
    const descLabel = isRtl ? `تفاصيل العرض المطلوبة` : `Request Details`;

    const footer = isRtl 
      ? `يرجى إعلامي عند بدء التنفيذ، شكراً لكم!`
      : `Please let me know when execution starts, thank you!`;

    return `${header}

${detailsLabel}
• ${nameLabel}: ${businessName}
• ${industryLabel}: ${indText}
• ${descLabel}: ${requestDetails}

${footer}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName.trim()) {
      setError(isRtl ? 'اسم المشروع مطلوب' : 'Business name is required');
      return;
    }
    if (!requestDetails.trim()) {
      setError(isRtl ? 'التفاصيل مطلوبة' : 'Request details required');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const waText = getWhatsAppText();
    const waLink = getWhatsAppLink("201050300190", waText);

    setTimeout(() => {
      const newRequest: FreeSampleRequest = {
        id: 'req-' + Date.now(),
        businessName,
        website: 'Fast-Track Lead',
        whatsapp: 'N/A',
        industry,
        requestDetails,
        createdAt: new Date().toLocaleDateString(isRtl ? 'ar-EG' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'pending'
      };

      // Retrieve existing and save
      const existing = localStorage.getItem('lumora_free_samples');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newRequest);
      localStorage.setItem('lumora_free_samples', JSON.stringify(list));

      setIsSubmitting(false);
      setSuccess(true);

      // Attempt to open WhatsApp directly
      try {
        window.open(waLink, '_blank');
      } catch (err) {
        console.error('Popup blocked:', err);
      }
    }, 1200);
  };

  if (success) {
    return (
      <div className="space-y-4 py-4 text-center animate-in zoom-in-95 duration-300" id="hero-mini-success">
        <div className="w-12 h-12 bg-emerald-50 text-emerald-500 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
          <Check className="w-6 h-6" />
        </div>
        <div className="space-y-1">
          <h4 className="text-sm font-extrabold text-brand-charcoal">
            {isRtl ? 'تم تسجيل طلبك بنجاح!' : 'Draft Saved Successfully!'}
          </h4>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-xs mx-auto">
            {isRtl 
              ? 'مبارك! تم حفظ طلبك السريع. يمكنك إرساله ومتابعته عبر الواتساب فوراً لتسريع العمل.'
              : `Awesome! We saved the concept ticket for ${businessName}. Send it to WhatsApp for rapid processing.`}
          </p>
        </div>

        {/* Big prominent green WhatsApp send button */}
        <div className="px-2">
          <a
            href={getWhatsAppLink("201050300190", getWhatsAppText())}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-[11px] rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
            id="mini-success-whatsapp"
          >
            <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span>{isRtl ? 'أرسل الطلب إلى واتساب' : 'Send Request via WhatsApp'}</span>
          </a>
        </div>

        <button
          onClick={onRegister}
          className="mt-1 px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-[10px] rounded-lg transition-all"
        >
          {isRtl ? 'عرض طلباتي المحفوظة' : 'View Saved Requests'}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4" id="hero-mini-form">
      {/* Business Name */}
      <div>
        <input 
          type="text"
          placeholder={isRtl ? 'اسم مشروعك أو علامتك *' : 'Your Brand Name *'}
          value={businessName}
          onChange={(e) => {
            setBusinessName(e.target.value);
            if (error) setError('');
          }}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
          id="mini-business-name"
        />
      </div>

      {/* Industry Sector */}
      <div>
        <select 
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold text-slate-700 outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
          id="mini-industry"
        >
          {industries.map((ind) => (
            <option key={ind.value} value={ind.value}>
              {isRtl ? ind.labelAr : ind.label}
            </option>
          ))}
        </select>
      </div>

      {/* Target Offer / Request Details */}
      <div>
        <textarea 
          rows={2}
          placeholder={isRtl ? 'مثال: خصم 20% على باقة القهوة لعطلة نهاية الأسبوع...' : 'e.g. 20% off our products or list target colors...'}
          value={requestDetails}
          onChange={(e) => {
            setRequestDetails(e.target.value);
            if (error) setError('');
          }}
          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
          id="mini-request-details"
        />
      </div>

      {error && (
        <p className="text-[10px] text-red-500 font-semibold">{error}</p>
      )}

      {/* Request CTA Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#D4AF37] hover:bg-[#c29c2b] text-white py-3.5 rounded-xl font-bold shadow-[0_10px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_10px_25px_rgba(212,175,55,0.3)] transition-all uppercase tracking-wider text-[11px] flex items-center justify-center gap-1.5"
        id="mini-submit-btn"
      >
        {isSubmitting ? (
          <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
        ) : (
          <>
            <Send className="w-3 h-3 text-white" />
            <span>{isRtl ? 'احصل على عينة مجانية' : 'Request Free Sample'}</span>
          </>
        )}
      </button>
    </form>
  );
}
