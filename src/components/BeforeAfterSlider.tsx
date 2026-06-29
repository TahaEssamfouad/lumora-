import React, { useState, useRef, useEffect } from 'react';
import { ArrowLeftRight, Sparkles, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface BeforeAfterSliderProps {
  lang: 'en' | 'ar';
}

export default function BeforeAfterSlider({ lang }: BeforeAfterSliderProps) {
  const [sliderPercent, setSliderPercent] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isRtl = lang === 'ar';

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPercent(percent);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  const startDrag = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  return (
    <div className="w-full max-w-4xl mx-auto" id="before-after-module">
      <div className="text-center mb-8">
        <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
          {isRtl ? 'مقارنة الفعالية البصرية' : 'CONVERSION SIDE-BY-SIDE'}
        </span>
        <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-brand-charcoal mb-4">
          {isRtl ? 'اسحب لمشاهدة الفرق المذهل' : 'Slide to See the Transformation'}
        </h3>
        <p className="text-slate-500 max-w-xl mx-auto text-sm sm:text-base">
          {isRtl 
            ? 'قارن بين الإعلانات التقليدية العشوائية، والتصاميم المخصصة نفسياً من لومورا لزيادة النقرات والمبيعات.'
            : 'See how our Direct-Response Psychology outclasses the cluttered, low-contrast designs of typical social media templates.'}
        </p>
      </div>

      {/* Main Interactive Slider Area */}
      <div 
        ref={containerRef}
        className="relative w-full aspect-[4/3] sm:aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 select-none"
        id="slider-container"
      >
        
        {/* BEFORE DESIGN (Base Layer) */}
        <div className="absolute inset-0 w-full h-full bg-slate-100 flex flex-col justify-between p-6 sm:p-12 text-slate-800">
          
          {/* Header */}
          <div className="flex justify-between items-start">
            <div>
              <span className="px-2 py-1 rounded bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <AlertTriangle className="w-3 h-3" />
                {isRtl ? 'إعلان مكدس تقليدي' : 'Typical Cluttered Ad'}
              </span>
              <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-800 mt-2 font-sans">
                {isRtl ? 'كريم الوجه العادي للبيع' : 'Typical Cluttered Skincare Ad'}
              </h4>
            </div>
            <div className="text-right text-xs font-mono text-slate-500 font-bold">
              CPA: $45.00
            </div>
          </div>

          {/* Central Section - Cluttered, Bad Layout */}
          <div className="my-auto grid grid-cols-2 gap-4 items-center">
            <div className="space-y-2">
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs font-sans italic">
                {isRtl 
                  ? '"نحن نصنع كريمًا بمكونات جيدة وفيتامينات عالية وزيوت فاخرة..."'
                  : '"We make cream with good ingredients, high vitamins, premium oils..."'}
              </p>
            </div>
            <div className="flex justify-center">
              <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-lg bg-slate-300 border border-slate-400 flex items-center justify-center text-slate-500 text-xs text-center p-2 font-mono">
                [ {isRtl ? 'صورة منتج باهتة غير واضحة' : 'Blurry product on grey background'} ]
              </div>
            </div>
          </div>

          {/* Footer CTA */}
          <div className="flex justify-between items-center border-t border-slate-300 pt-4">
            <span className="text-xs text-slate-400 font-sans">{isRtl ? 'اضغط للشراء' : 'Click here to purchase'}</span>
            <button className="px-4 py-2 bg-slate-500 text-white rounded text-xs hover:bg-slate-600 font-bold font-sans">
              {isRtl ? 'اضغط هنا' : 'Click Here'}
            </button>
          </div>
          
          {/* Weakness Labels Overlay */}
          <div className="absolute bottom-16 right-4 sm:right-12 space-y-1 bg-red-600/90 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-lg font-bold">
            <p>✗ {isRtl ? 'لا يوجد عنوان نفسي مشوق' : 'No psychological hook'}</p>
            <p>✗ {isRtl ? 'عرض مرئي ضعيف للمنتج' : 'Weak product visualization'}</p>
            <p>✗ {isRtl ? 'زر اتخاذ إجراء مليء بالاحتكاك' : 'Friction-heavy call to action'}</p>
            <p>✗ {isRtl ? 'تباين منخفض وصعب القراءة على الجوال' : 'Low contrast, hard to read on mobile'}</p>
          </div>
        </div>

        {/* AFTER DESIGN (Slide Overlay Layer) */}
        <div 
          className="absolute inset-y-0 left-0 h-full overflow-hidden"
          style={{ width: `${sliderPercent}%` }}
        >
          {/* Wrapper to enforce consistent full width */}
          <div className="absolute inset-y-0 left-0 w-[42rem] sm:w-[56rem] md:w-[56rem] lg:w-[56rem] h-full bg-slate-950 text-white flex flex-col justify-between p-6 sm:p-12">
            
            {/* Background luxury gradient decoration */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl"></div>

            {/* Header */}
            <div className="flex justify-between items-start relative z-10">
              <div>
                <span className="px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1 w-fit">
                  <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                  {isRtl ? 'تصميم لومورا النفسي' : 'Lumora High-Converting Creative'}
                </span>
                <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-2 font-display">
                  {isRtl ? 'ودّعي جفاف البشرة الليلة' : 'Hydrate & Reveal Your Confidence'}
                </h4>
              </div>
              <div className="text-right text-xs font-mono font-bold text-amber-400">
                CPA: $18.50 (-58%)
              </div>
            </div>

            {/* Central Section - Apple-inspired Luxury Bento Mockup */}
            <div className="my-auto grid grid-cols-2 gap-4 items-center relative z-10">
              <div className="space-y-3">
                <p className="text-xs text-slate-300 leading-relaxed max-w-xs font-sans">
                  {isRtl 
                    ? 'تركيبة عضوية مركزة ترطب أعمق طبقات البشرة وتمنحك نضارة مشرقة تدوم 24 ساعة من أول استخدام.'
                    : 'A clinically active organic compound that drenches skin in cellular hydration, eliminating dry texture from night one.'}
                </p>
                
                {/* Visual Value Badges */}
                <div className="flex flex-wrap gap-2">
                  <span className="text-[9px] bg-white/10 text-slate-100 border border-white/15 px-2.5 py-1 rounded-full font-semibold font-sans">
                    ✓ {isRtl ? 'عضوي 100٪' : '100% Organic'}
                  </span>
                  <span className="text-[9px] bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2.5 py-1 rounded-full font-semibold font-sans">
                    ★ {isRtl ? 'الرائد مبيعاً' : 'Top Skincare Choice'}
                  </span>
                </div>
              </div>

              {/* Product Visual Mockup */}
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-2xl"></div>
                <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-2xl bg-gradient-to-tr from-white/10 to-white/5 border border-white/20 p-3 shadow-2xl flex flex-col justify-between backdrop-blur-md">
                  <div className="flex justify-between items-center">
                    <span className="text-[8px] bg-amber-400 text-slate-950 px-1.5 py-0.5 rounded-full font-bold">GLOW</span>
                    <Sparkles className="w-3 h-3 text-amber-300" />
                  </div>
                  {/* Mock Bottle Graphics */}
                  <div className="my-auto flex flex-col items-center">
                    <div className="w-8 h-12 bg-gradient-to-b from-blue-500 to-amber-400 rounded-lg opacity-90 flex items-center justify-center shadow-lg border border-white/30">
                      <div className="w-1.5 h-4 bg-white/40 rounded-full"></div>
                    </div>
                    <span className="text-[8px] font-mono tracking-widest text-slate-400 mt-1">SERUM V.2</span>
                  </div>
                  <div className="text-center text-[7px] font-sans text-slate-400">{isRtl ? 'مصمم باحترافية' : 'Designed by Lumora'}</div>
                </div>
              </div>
            </div>

            {/* Footer CTA */}
            <div className="flex justify-between items-center border-t border-white/10 pt-4 relative z-10">
              <span className="text-xs text-slate-400 font-mono flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                {isRtl ? 'ضمان رضا 100٪' : '100% Money-Back Guarantee'}
              </span>
              <button className="px-5 py-2.5 bg-gradient-to-r from-brand-primary to-blue-500 text-white rounded-xl text-xs font-extrabold hover:shadow-lg hover:shadow-blue-500/30 font-sans tracking-wide transition-all duration-300">
                {isRtl ? 'ابدئي النضارة الآن' : 'Start Glowing Tonight'}
              </button>
            </div>

            {/* Strength Highlights Overlay */}
            <div className="absolute bottom-16 left-4 sm:left-12 space-y-1 bg-emerald-600/90 text-white text-[10px] px-3 py-1.5 rounded-lg shadow-lg font-bold">
              <p>✓ {isRtl ? 'عنوان نفسي عاطفي جذاب' : 'High-converting emotional hook'}</p>
              <p>✓ {isRtl ? 'تصوير للمنتج بتأثير زجاجي ثلاثي الأبعاد فاخر' : 'Premium 3D glass effect product visualization'}</p>
              <p>✓ {isRtl ? 'مؤشرات ثقة وضمانات بارزة في الإعلان' : 'Prominent trust metrics and guarantee'}</p>
              <p>✓ {isRtl ? 'تباين لافت للانتباه ومحسن بالكامل للجوال' : 'Thumb-stopping contrast optimized for mobile'}</p>
            </div>

          </div>
        </div>

        {/* SLIDER HANDLE AND BAR */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 cursor-ew-resize z-30"
          style={{ left: `${sliderPercent}%` }}
          id="slider-divider"
        >
          <div 
            onMouseDown={startDrag}
            onTouchStart={startDrag}
            className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white text-slate-900 border-2 border-amber-400 shadow-2xl flex items-center justify-center cursor-ew-resize select-none active:scale-90 transition-transform duration-100 hover:bg-slate-50"
            id="slider-handle"
          >
            <ArrowLeftRight className="w-5 h-5 text-brand-primary animate-pulse" />
          </div>
        </div>

      </div>

      {/* Manual Quick Toggle Toggles */}
      <div className="flex justify-center gap-4 mt-6" id="slider-quick-toggles">
        <button 
          onClick={() => setSliderPercent(10)} 
          className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold hover:bg-slate-100 transition-all text-slate-600 bg-white shadow-sm"
          id="btn-show-before"
        >
          {isRtl ? 'عرض الإعلان الضعيف' : 'Show Weak Ad'}
        </button>
        <button 
          onClick={() => setSliderPercent(50)} 
          className="px-4 py-2 border border-amber-200 bg-amber-50 rounded-xl text-xs font-bold hover:bg-amber-100 transition-all text-brand-accent shadow-sm"
          id="btn-show-split"
        >
          {isRtl ? 'عرض مقارنة نصفية' : 'Show Split'}
        </button>
        <button 
          onClick={() => setSliderPercent(90)} 
          className="px-4 py-2 border border-blue-200 bg-blue-50 rounded-xl text-xs font-bold hover:bg-blue-100 transition-all text-brand-primary shadow-sm"
          id="btn-show-after"
        >
          {isRtl ? 'عرض إعلان لومورا' : 'Show Lumora Premium'}
        </button>
      </div>
    </div>
  );
}
