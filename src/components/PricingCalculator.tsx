import React, { useState } from 'react';
import { TrendingUp, Sparkles, HelpCircle, DollarSign, ArrowRight } from 'lucide-react';

interface PricingCalculatorProps {
  lang: 'en' | 'ar';
  onSelectPlan: (planId: string) => void;
}

export default function PricingCalculator({ lang, onSelectPlan }: PricingCalculatorProps) {
  const [selectedPlan, setSelectedPlan] = useState<'starter' | 'growth' | 'business' | 'agency'>('growth');
  const [avgOrderValue, setAvgOrderValue] = useState<number>(100);
  const [monthlyTraffic, setMonthlyTraffic] = useState<number>(5000);
  const [industry, setIndustry] = useState<string>('ecommerce');

  const isRtl = lang === 'ar';

  const industryMultipliers: Record<string, { name: string, nameAr: string, conversion: number }> = {
    ecommerce: { name: 'E-commerce & Retail', nameAr: 'التجارة الإلكترونية والتجزئة', conversion: 0.02 },
    beauty: { name: 'Beauty & Fashion', nameAr: 'الجمال والأزياء والمكياج', conversion: 0.025 },
    restaurant: { name: 'Restaurants & Coffee Shops', nameAr: 'المطاعم والمقاهي والأغذية', conversion: 0.03 },
    realestate: { name: 'Real Estate Prestige', nameAr: 'العقارات والخدمات العقارية', conversion: 0.008 },
    healthcare: { name: 'Healthcare & Dental', nameAr: 'الرعاية الصحية وطب الأسنان', conversion: 0.015 },
    personal: { name: 'Personal Brand & Agency', nameAr: 'العلامة الشخصية والخدمات', conversion: 0.02 },
  };

  const planTiers = {
    starter: { price: 29, boost: 0.20, creatives: 5 },
    growth: { price: 79, boost: 0.45, creatives: 15 },
    business: { price: 149, boost: 0.65, creatives: 30 },
    agency: { price: 299, boost: 0.90, creatives: 60 }
  };

  // ROI Math
  const baseConversion = industryMultipliers[industry]?.conversion || 0.02;
  const planPrice = planTiers[selectedPlan].price;
  const creativeBoost = planTiers[selectedPlan].boost;
  
  // Baseline stats
  const baseConversions = Math.round(monthlyTraffic * baseConversion);
  const baseRevenue = baseConversions * avgOrderValue;

  // Lumora Boosted stats
  const boostedConversion = baseConversion * (1 + creativeBoost);
  const boostedConversions = Math.round(monthlyTraffic * boostedConversion);
  const boostedRevenue = boostedConversions * avgOrderValue;

  const extraConversions = boostedConversions - baseConversions;
  const revenueGain = boostedRevenue - baseRevenue;
  const netProfitGain = revenueGain - planPrice;
  const roiMultiplier = planPrice > 0 ? (netProfitGain / planPrice) * 100 : 0;

  return (
    <div className="w-full max-w-5xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden mt-12" id="roi-calculator-container">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        
        {/* Left Side: Inputs */}
        <div className="lg:col-span-7 p-6 sm:p-10 bg-slate-50/50 border-r border-slate-100">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="w-5 h-5 text-brand-primary" />
            <h4 className="text-lg font-display font-bold text-brand-charcoal">
              {isRtl ? 'محاكي العائد على الاستثمار الإعلاني' : 'Campaign ROI Estimator'}
            </h4>
          </div>
          
          <p className="text-slate-500 text-xs sm:text-sm mb-6 leading-relaxed">
            {isRtl 
              ? 'توقع كيف يساهم تصميم إعلان مخصص نفسياً وعالي الجودة في زيادة معدلات التحويل وزيادة الإيرادات الإضافية.'
              : 'Our design philosophy aims to optimize psychological engagement. Simulate your conversion lift and calculate estimated monthly returns.'}
          </p>

          <div className="space-y-6">
            
            {/* Industry Selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'قطاع العمل الخاص بك' : 'Your Business Sector'}
              </label>
              <select 
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-800 shadow-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary outline-none"
                id="calc-industry"
              >
                {Object.entries(industryMultipliers).map(([key, value]) => (
                  <option key={key} value={key}>
                    {isRtl ? value.nameAr : value.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Target Package */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {isRtl ? 'باقة تصاميم لومورا المحددة' : 'Target Lumora Package'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="calc-package-selector">
                {(['starter', 'growth', 'business', 'agency'] as const).map((plan) => (
                  <button
                    key={plan}
                    onClick={() => setSelectedPlan(plan)}
                    className={`py-3 px-1.5 sm:px-2.5 text-center rounded-xl border text-[11px] font-bold transition-all ${
                      selectedPlan === plan 
                        ? 'bg-blue-600 border-blue-600 text-white shadow-md shadow-blue-500/10' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <span className="block capitalize">{plan}</span>
                    <span className="block opacity-80 font-mono mt-0.5">${planTiers[plan].price}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Avg Order Value Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {isRtl ? 'متوسط قيمة الطلب / العميل' : 'Avg. Customer / Order Value'}
                </label>
                <span className="text-sm font-mono font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                  ${avgOrderValue}
                </span>
              </div>
              <input 
                type="range"
                min="10"
                max="1000"
                step="10"
                value={avgOrderValue}
                onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                className="w-full accent-brand-primary"
                id="calc-aov"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>$10</span>
                <span>$500</span>
                <span>$1000</span>
              </div>
            </div>

            {/* Estimated Monthly Traffic/Ad Clicks Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  {isRtl ? 'حجم الزوار أو النقرات شهرياً' : 'Monthly Traffic (Ad Clicks)'}
                </label>
                <span className="text-sm font-mono font-bold text-brand-primary bg-blue-50 px-2 py-0.5 rounded">
                  {monthlyTraffic.toLocaleString()}
                </span>
              </div>
              <input 
                type="range"
                min="1000"
                max="100000"
                step="1000"
                value={monthlyTraffic}
                onChange={(e) => setMonthlyTraffic(Number(e.target.value))}
                className="w-full accent-brand-primary"
                id="calc-traffic"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>1,000</span>
                <span>50,000</span>
                <span>100,000</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Output Results */}
        <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-950 text-white flex flex-col justify-between relative overflow-hidden">
          
          {/* Decorative glowing backdrops */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl"></div>

          <div className="relative z-10">
            <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[9px] font-bold uppercase tracking-wider inline-block mb-4">
              {isRtl ? 'تقدير الأداء المحسّن' : 'ESTIMATED PERFORMANCE LIFT'}
            </span>

            <div className="space-y-6">
              
              {/* Conversion Lift */}
              <div>
                <span className="block text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {isRtl ? 'الزيادة في معدل التحويل' : 'Estimated Conversion Lift'}
                </span>
                <span className="text-3xl sm:text-4xl font-display font-extrabold text-white flex items-center gap-2">
                  +{(planTiers[selectedPlan].boost * 100)}%
                  <Sparkles className="w-5 h-5 text-amber-300 animate-pulse inline" />
                </span>
                <p className="text-slate-400 text-xs mt-1">
                  {isRtl 
                    ? `من ${ (baseConversion * 100).toFixed(1) }% إلى ${ (boostedConversion * 100).toFixed(1) }% معدل نقرات وشراء جديد`
                    : `Increases your baseline CR from ${(baseConversion * 100).toFixed(1)}% to ${(boostedConversion * 100).toFixed(1)}%`}
                </p>
              </div>

              <hr className="border-white/10" />

              {/* Extra Sales & Revenue */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    {isRtl ? 'مبيعات شهرية إضافية' : 'New Monthly Sales'}
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-white">
                    +{extraConversions}
                  </span>
                </div>
                <div>
                  <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                    {isRtl ? 'زيادة الإيرادات المقدرة' : 'Est. Revenue Lift'}
                  </span>
                  <span className="text-xl sm:text-2xl font-mono font-bold text-emerald-400">
                    +${revenueGain.toLocaleString()}
                  </span>
                </div>
              </div>

              <hr className="border-white/10" />

              {/* Net Return Gain */}
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                <span className="block text-slate-400 text-[10px] font-bold uppercase tracking-wider mb-1">
                  {isRtl ? 'صافي العائد الإضافي (شهرياً)' : 'Est. Net Return Gain (Monthly)'}
                </span>
                <span className="text-2xl sm:text-3xl font-mono font-extrabold text-amber-300">
                  +${netProfitGain.toLocaleString()}
                </span>
                <span className="block text-slate-400 text-[10px] mt-1">
                  {isRtl 
                    ? `مخصوماً منها تكلفة باقة تصاميم لومورا البالغة $${planPrice}`
                    : `After deducting Lumora package cost of $${planPrice}`}
                </span>
              </div>

            </div>
          </div>

          <div className="relative z-10 mt-8 pt-4 border-t border-white/10">
            <button
              onClick={() => onSelectPlan(selectedPlan)}
              className="w-full py-3.5 bg-gradient-to-r from-brand-primary to-blue-500 hover:from-blue-600 hover:to-blue-500 text-white font-bold text-sm rounded-xl hover:shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group"
              id="calc-cta-btn"
            >
              <span>{isRtl ? 'احجز هذه الباقة وابدأ حملتك' : `Get ${selectedPlan.toUpperCase()} Plan Now`}</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
