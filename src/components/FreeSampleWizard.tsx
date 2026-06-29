import React, { useState } from 'react';
import { FreeSampleRequest } from '../types';
import { Sparkles, Check, ChevronRight, ChevronLeft, Send, ShieldCheck } from 'lucide-react';

interface FreeSampleWizardProps {
  lang: 'en' | 'ar';
  onSubmitSuccess: () => void;
}

export default function FreeSampleWizard({ lang, onSubmitSuccess }: FreeSampleWizardProps) {
  const [step, setStep] = useState<number>(1);
  
  // Form fields
  const [businessName, setBusinessName] = useState<string>('');
  const [website, setWebsite] = useState<string>('');
  const [instagram, setInstagram] = useState<string>('');
  const [industry, setIndustry] = useState<string>('ecommerce');
  const [requestDetails, setRequestDetails] = useState<string>('');
  const [customIndustry, setCustomIndustry] = useState<string>('');
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isRtl = lang === 'ar';

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {};
    if (currentStep === 1) {
      if (!businessName.trim()) {
        newErrors.businessName = isRtl ? 'اسم المشروع مطلوب' : 'Business name is required';
      }
    }
    if (currentStep === 3) {
      if (!requestDetails.trim()) {
        newErrors.requestDetails = isRtl ? 'يرجى تقديم بعض التفاصيل حول التصميم المطلوب' : 'Please provide some details for your request';
      } else if (requestDetails.trim().length < 10) {
        newErrors.requestDetails = isRtl ? 'التفاصيل يجب أن تكون 10 أحرف على الأقل' : 'Details must be at least 10 characters';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const getSampleWhatsAppText = () => {
    const finalIndustry = industry === 'other' ? customIndustry : industries.find(i => i.value === industry)?.label || industry;
    const finalIndustryAr = industry === 'other' ? customIndustry : industries.find(i => i.value === industry)?.labelAr || industry;

    const header = isRtl 
      ? `السلام عليكم، أود الحصول على عينة إعلانية مجانية لمشروعي من لومورا للتصميم.`
      : `Hello Lumora, I would like to request a free sample ad creative for my business.`;
    
    const detailsLabel = isRtl ? `تفاصيل طلب العينة:` : `Sample Request Details:`;
    const nameLabel = isRtl ? `اسم المشروع` : `Brand Name`;
    const webLabel = isRtl ? `الموقع الإلكتروني` : `Website`;
    const instaLabel = isRtl ? `حساب إنستغرام` : `Instagram`;
    const industryLabel = isRtl ? `مجال العمل` : `Industry`;
    const descLabel = isRtl ? `تفاصيل التصميم المطلوب` : `Design Details`;
    
    const footer = isRtl 
      ? `شكراً لكم، أتطلع لاستلام المسودة الإعلانية قريباً!`
      : `Thank you! I look forward to receiving the ad concept draft soon.`;

    return `${header}

${detailsLabel}
• ${nameLabel}: ${businessName}
• ${webLabel}: ${website || (isRtl ? 'غير متوفر' : 'N/A')}
• ${instaLabel}: ${instagram || (isRtl ? 'غير متوفر' : 'N/A')}
• ${industryLabel}: ${isRtl ? finalIndustryAr : finalIndustry}
• ${descLabel}: ${requestDetails}

${footer}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;

    setIsSubmitting(true);

    const waText = getSampleWhatsAppText();
    const waLink = `https://wa.me/201050300190?text=${encodeURIComponent(waText)}`;

    // Simulate elite server response
    setTimeout(() => {
      const finalIndustry = industry === 'other' ? customIndustry : industry;
      const newRequest: FreeSampleRequest = {
        id: 'req-' + Date.now(),
        businessName,
        website: website || 'N/A',
        instagram: instagram || 'N/A',
        industry: finalIndustry,
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
      setStep(4);
      onSubmitSuccess();

      // Attempt to open WhatsApp directly
      try {
        window.open(waLink, '_blank');
      } catch (err) {
        console.error('Popup blocked:', err);
      }
    }, 1500);
  };

  const industries = [
    { value: 'ecommerce', label: 'E-commerce Store', labelAr: 'متجر إلكتروني' },
    { value: 'restaurant', label: 'Restaurant / Coffee Shop', labelAr: 'مطعم / مقهى' },
    { value: 'realestate', label: 'Real Estate / Property', labelAr: 'عقارات ومطور عقاري' },
    { value: 'beauty', label: 'Beauty, Hair & Cosmetics', labelAr: 'عيادة تجميل / منتجات تجميل' },
    { value: 'healthcare', label: 'Healthcare & Dental Care', labelAr: 'عيادة طبية / رعاية صحية' },
    { value: 'fitness', label: 'Gym & Personal Fitness', labelAr: 'نادي رياضي / مدرب شخصي' },
    { value: 'fashion', label: 'Fashion & Luxury Apparel', labelAr: 'أزياء وملابس فاخرة' },
    { value: 'technology', label: 'SaaS / Tech Startup', labelAr: 'برمجيات / شركة تكنولوجية ناشئة' },
    { value: 'other', label: 'Other niche business', labelAr: 'مجال مخصص آخر' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden" id="free-sample-form-wizard">
      
      {/* Header and Step Indicator */}
      <div className="bg-slate-950 text-white p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl"></div>
        <div className="relative z-10 flex justify-between items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-display font-extrabold flex items-center gap-1.5 text-white">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
              {isRtl ? 'بوابة طلب عينة مجانية' : 'Sample Request Wizard'}
            </h3>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              {isRtl ? 'اختبر تصاميمنا الإعلانية الفاخرة لعملك قبل الشراء' : 'Experience our high-converting creatives risk-free'}
            </p>
          </div>
          <span className="text-sm font-mono font-bold text-amber-400 bg-white/5 px-3 py-1.5 rounded-xl border border-white/10">
            {step < 4 ? `${isRtl ? 'خطوة' : 'Step'} ${step}/3` : '✓'}
          </span>
        </div>

        {/* Progress Bar */}
        {step < 4 && (
          <div className="w-full bg-white/10 h-1 rounded-full mt-6 relative">
            <div 
              className="bg-gradient-to-r from-brand-primary to-amber-400 h-1 rounded-full transition-all duration-500"
              style={{ width: `${((step - 1) / 2) * 100}%` }}
            ></div>
          </div>
        )}
      </div>

      {/* Wizard Content Panel */}
      <div className="p-6 sm:p-10" id="wizard-form-body">
        
        {step === 1 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h4 className="text-lg font-display font-bold text-brand-charcoal">
              {isRtl ? '1. أخبرنا عن عملك وعلامتك التجارية' : '1. Tell us about your brand'}
            </h4>
            
            {/* Business Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'اسم المشروع / الشركة *' : 'Business / Brand Name *'}
              </label>
              <input 
                type="text"
                placeholder={isRtl ? 'مثال: قهوة أرتيزان المختصة' : 'e.g. Artisan Coffee Roast'}
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary ${
                  errors.businessName ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-brand-primary'
                }`}
                id="form-business-name"
              />
              {errors.businessName && (
                <p className="text-xs text-red-500 mt-1">{errors.businessName}</p>
              )}
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'موقعك الإلكتروني (إن وجد)' : 'Business Website (Optional)'}
              </label>
              <input 
                type="url"
                placeholder="https://example.com"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-sm font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
                id="form-website"
              />
            </div>

            {/* Instagram Link */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'حساب إنستغرام الخاص بالشركة (إن وجد)' : 'Instagram Profile (Optional)'}
              </label>
              <input 
                type="text"
                placeholder="@mybusiness"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-sm font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
                id="form-instagram"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button 
                onClick={handleNext}
                className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold flex items-center gap-1 shadow-md hover:shadow-lg transition-all"
                id="btn-step1-next"
              >
                <span>{isRtl ? 'التالي' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6 animate-in fade-in duration-300">
            <h4 className="text-lg font-display font-bold text-brand-charcoal">
              {isRtl ? '2. حدد قطاع العمل والتخصص' : '2. Select Your Target Industry'}
            </h4>

            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'مجال أو قطاع العمل الرئيسي' : 'Business Sector'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2" id="industry-options-grid">
                {industries.map((ind) => (
                  <button
                    key={ind.value}
                    type="button"
                    onClick={() => setIndustry(ind.value)}
                    className={`p-3.5 rounded-xl border text-left text-sm font-semibold transition-all flex items-center justify-between ${
                      industry === ind.value 
                        ? 'bg-blue-50 border-blue-600 text-brand-primary shadow-sm' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span>{isRtl ? ind.labelAr : ind.label}</span>
                    {industry === ind.value && <div className="w-2 h-2 rounded-full bg-blue-600"></div>}
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Industry Input */}
            {industry === 'other' && (
              <div className="animate-in slide-in-from-top-2 duration-200">
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  {isRtl ? 'اكتب تخصص عملك هنا بالتفصيل' : 'Write your custom industry'}
                </label>
                <input 
                  type="text"
                  placeholder={isRtl ? 'مثال: محل حلويات فرنسية فاخرة' : 'e.g. Luxury French Pastry shop'}
                  value={customIndustry}
                  onChange={(e) => setCustomIndustry(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-sm font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary"
                  id="form-custom-industry"
                />
              </div>
            )}

            <div className="pt-4 flex justify-between">
              <button 
                onClick={handleBack}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold flex items-center gap-1"
                id="btn-step2-back"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isRtl ? 'السابق' : 'Back'}</span>
              </button>
              <button 
                onClick={handleNext}
                className="px-6 py-3 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-sm font-bold flex items-center gap-1 shadow-md hover:shadow-lg"
                id="btn-step2-next"
              >
                <span>{isRtl ? 'التالي' : 'Continue'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleSubmit} className="space-y-6 animate-in fade-in duration-300">
            <h4 className="text-lg font-display font-bold text-brand-charcoal">
              {isRtl ? '3. صف التفاصيل والطلب المطلوب' : '3. Describe Your Specific Request'}
            </h4>

            {/* Request Details textarea */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'ما الذي تود منا تصميمه لعملك؟ *' : 'Describe what you would like us to design *'}
              </label>
              <textarea 
                rows={5}
                placeholder={isRtl 
                  ? 'اكتب هنا ما تريده، مثلاً: "أريد تصميم منشور إعلاني على إنستغرام لخصم 25٪ على قائمة القهوة في عطلة نهاية الأسبوع لرواد الصباح بأسلوب فاخر ومودرن..."' 
                  : 'Describe your vision, product details, promo percentage, or exact colors you prefer. e.g. "We want a dark luxury ad for 20% off our penthouses targeting elite couples..."'}
                value={requestDetails}
                onChange={(e) => setRequestDetails(e.target.value)}
                className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm font-semibold outline-none focus:bg-white focus:ring-1 focus:ring-brand-primary ${
                  errors.requestDetails ? 'border-red-400 focus:ring-red-400' : 'border-slate-200 focus:border-brand-primary'
                }`}
                id="form-request-details"
              />
              {errors.requestDetails ? (
                <p className="text-xs text-red-500 mt-1">{errors.requestDetails}</p>
              ) : (
                <p className="text-xs text-slate-400 mt-1.5">
                  {isRtl 
                    ? 'يرجى تقديم تفاصيل واضحة لنتمكن من توفير أعلى جودة ممكنة ومطابقة لرؤيتك.'
                    : 'The more details you provide, the higher the conversion quality of our custom design mockup.'}
                </p>
              )}
            </div>

            {/* Compliance Guarantee Badge */}
            <div className="flex items-center gap-2.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-200/50 text-slate-500">
              <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
              <span className="text-[11px] leading-relaxed">
                {isRtl 
                  ? 'نضمن الخصوصية والأمان الكامل لبيانات ومعلومات عملك. لن نقوم بنشر أو بيع معلومات طلبك نهائياً.'
                  : 'We strictly protect your commercial privacy. Your submitted data is securely encrypted and used purely to customize your mockup.'}
              </span>
            </div>

            <div className="pt-4 flex justify-between">
              <button 
                type="button"
                onClick={handleBack}
                className="px-5 py-3 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-sm font-bold flex items-center gap-1"
                id="btn-step3-back"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>{isRtl ? 'السابق' : 'Back'}</span>
              </button>
              <button 
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-brand-primary to-brand-secondary hover:shadow-lg hover:shadow-blue-500/15 text-white rounded-xl text-sm font-bold flex items-center gap-2 disabled:opacity-50"
                id="btn-step3-submit"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>{isRtl ? 'جاري الإرسال للتسجيل...' : 'Analyzing & Saving...'}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-white" />
                    <span>{isRtl ? 'أرسل طلبي الآن مجاناً' : 'Request Free Sample'}</span>
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300" id="wizard-success-state">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 border border-emerald-200 rounded-full flex items-center justify-center mx-auto shadow-sm">
              <Check className="w-8 h-8" />
            </div>
            
            <div className="space-y-2">
              <h4 className="text-2xl font-display font-extrabold text-brand-charcoal">
                {isRtl ? 'تم استقبال طلبك بنجاح!' : 'Request Received Successfully!'}
              </h4>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                {isRtl 
                  ? 'يقوم الآن مصممونا بمراجعة وتحليل طلبك وصياغة المحفزات الإعلانية المناسبة لنشاطك التجاري.'
                  : `Thank you, ${businessName}! Our direct-response design analysts are reviewing your targets.`}
              </p>
            </div>

            {/* Direct WhatsApp Call-to-Action for instant execution */}
            <div className="p-6 bg-emerald-50 border border-emerald-100 rounded-3xl max-w-md mx-auto space-y-3.5">
              <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                {isRtl 
                  ? '⚡ أرسل تفاصيل طلبك الآن مباشرة لمسؤول الواتساب لتسريع المعاينة والتنفيذ الفوري في أقل من ساعتين!' 
                  : '⚡ Send your request details directly to our WhatsApp representative to guarantee expedited design execution in under 2 hours!'}
              </p>
              <a
                href={`https://wa.me/201050300190?text=${encodeURIComponent(getSampleWhatsAppText())}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs sm:text-sm rounded-xl transition-all shadow-md hover:shadow-lg hover:shadow-emerald-500/20 flex items-center justify-center gap-2"
                id="whatsapp-direct-send-wizard"
              >
                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span>{isRtl ? 'إرسال التفاصيل عبر واتساب' : 'Send details via WhatsApp'}</span>
              </a>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs font-mono space-y-1.5 text-slate-600">
              <p><span className="font-bold text-brand-charcoal">Request ID:</span> LMR-{Date.now().toString().substring(7)}</p>
              <p><span className="font-bold text-brand-charcoal">Est. Concept Draft Delivery:</span> Less than 24 Hours</p>
              <p><span className="font-bold text-brand-charcoal">Status:</span> Pending Review</p>
            </div>

            <div className="pt-4 flex justify-center gap-3">
              <button
                onClick={() => {
                  // Reset wizard for another submit if they want
                  setStep(1);
                  setBusinessName('');
                  setWebsite('');
                  setInstagram('');
                  setRequestDetails('');
                  setCustomIndustry('');
                }}
                className="px-5 py-2.5 border border-slate-200 hover:bg-slate-50 text-slate-600 rounded-xl text-xs font-bold"
                id="btn-submit-another"
              >
                {isRtl ? 'تقديم طلب مخصص آخر' : 'Submit Another Request'}
              </button>
              <button
                onClick={() => {
                  // Fire global tab switch event or callback
                  onSubmitSuccess();
                }}
                className="px-5 py-2.5 bg-brand-primary text-white hover:bg-brand-secondary rounded-xl text-xs font-bold"
                id="btn-goto-leads"
              >
                {isRtl ? 'عرض طلباتي المسجلة' : 'View Saved Requests'}
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
