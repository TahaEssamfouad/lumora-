import React, { useState, useEffect } from 'react';
import { ActiveTab } from './types';
import Navigation from './components/Navigation';
import BeforeAfterSlider from './components/BeforeAfterSlider';
import PricingCalculator from './components/PricingCalculator';
import PortfolioShowroom from './components/PortfolioShowroom';
import FreeSampleWizard from './components/FreeSampleWizard';
import AdminPortal from './components/AdminPortal';
import BlogShowcase from './components/BlogShowcase';
import HeroMiniForm from './components/HeroMiniForm';
import { getWhatsAppLink } from './utils/whatsapp';
import { 
  servicesData, 
  whyChooseUsData, 
  howItWorksSteps, 
  pricingPlans, 
  faqData,
  trustMetrics 
} from './data';
import { 
  Sparkles, 
  ArrowRight, 
  ChevronRight, 
  Star, 
  Check, 
  Phone, 
  ShieldCheck, 
  Send, 
  HelpCircle, 
  Plus, 
  Minus, 
  TrendingUp, 
  Lock, 
  Award,
  Globe,
  Instagram,
  Facebook,
  Sparkle,
  Layers,
  Sparkle as Pin,
  Utensils,
  HeartPulse,
  Building,
  ShoppingBag,
  Camera,
  Crown,
  Megaphone
} from 'lucide-react';

// Map icon strings to Lucide elements
const iconMap: Record<string, React.ComponentType<any>> = {
  Instagram,
  Facebook,
  Layers,
  Pin,
  Utensils,
  Sparkles,
  HeartPulse,
  Building,
  ShoppingBag,
  Camera,
  Crown,
  Megaphone
};

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  
  // FAQs expanded state
  const [expandedFaqId, setExpandedFaqId] = useState<string | null>(null);
  
  // Contact Form state
  const [contactName, setContactName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [contactBizName, setContactBizName] = useState<string>('');
  const [contactMessage, setContactMessage] = useState<string>('');
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [isSubmittingContact, setIsSubmittingContact] = useState<boolean>(false);
  const [lastContactWaLink, setLastContactWaLink] = useState<string>('');

  const isRtl = lang === 'ar';

  // Apply RTL direction to html tag
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  // Centralized scroll handler for navigation and section routing
  useEffect(() => {
    if (activeTab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (
      activeTab === 'about' ||
      activeTab === 'services' ||
      activeTab === 'portfolio' ||
      activeTab === 'pricing' ||
      activeTab === 'faq' ||
      activeTab === 'contact'
    ) {
      // Small timeout to allow the landing view to render if the user is switching from a separate tab
      const timer = setTimeout(() => {
        const element = document.getElementById(`${activeTab}-section`);
        if (element) {
          const offset = 100; // Offset for the elegant sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 120);
      return () => clearTimeout(timer);
    } else {
      // For separate full views (free-sample, blog, admin-portal)
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeTab]);

  const handleSelectPlanFromCalc = (planId: string) => {
    setActiveTab('free-sample');
    // Pre-fill context if needed, scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getContactWhatsAppText = () => {
    const header = isRtl 
      ? `السلام عليكم، أود التواصل ومناقشة مشروع مخصص مع لومورا للتصميم.`
      : `Hello Lumora, I would like to inquire about custom design services.`;

    const detailsLabel = isRtl ? `تفاصيل التواصل للاستشارة:` : `Contact Details:`;
    const nameLabel = isRtl ? `الاسم بالكامل` : `Name`;
    const emailLabel = isRtl ? `البريد الإلكتروني` : `Email`;
    const bizLabel = isRtl ? `اسم الشركة` : `Company`;
    const msgLabel = isRtl ? `تفاصيل الاستفسار` : `Message / Inquiry`;

    const footer = isRtl 
      ? `شكراً لكم، أتطلع للتواصل!`
      : `Thank you! I look forward to your reply.`;

    return `${header}

${detailsLabel}
• ${nameLabel}: ${contactName}
• ${emailLabel}: ${contactEmail}
• ${bizLabel}: ${contactBizName || (isRtl ? 'غير متوفر' : 'N/A')}
• ${msgLabel}: ${contactMessage}

${footer}`;
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactName.trim() || !contactEmail.trim() || !contactMessage.trim()) return;

    setIsSubmittingContact(true);

    const waText = getContactWhatsAppText();
    const waLink = getWhatsAppLink("201050300190", waText);
    setLastContactWaLink(waLink);

    setTimeout(() => {
      const newSubmission = {
        id: 'con-' + Date.now(),
        name: contactName,
        email: contactEmail,
        businessName: contactBizName || 'N/A',
        message: contactMessage,
        createdAt: new Date().toLocaleString(isRtl ? 'ar-EG' : 'en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        }),
        status: 'new'
      };

      const existing = localStorage.getItem('lumora_contact_submissions');
      const list = existing ? JSON.parse(existing) : [];
      list.unshift(newSubmission);
      localStorage.setItem('lumora_contact_submissions', JSON.stringify(list));

      setIsSubmittingContact(false);
      setContactSubmitted(true);
      setContactName('');
      setContactEmail('');
      setContactBizName('');
      setContactMessage('');

      // Attempt to open WhatsApp directly
      try {
        window.open(waLink, '_blank');
      } catch (err) {
        console.error('Popup blocked:', err);
      }
    }, 1200);
  };

  // Quick helper to route services CTAs to form
  const handleServiceClick = (serviceTitle: string) => {
    setActiveTab('free-sample');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-sans selection:bg-blue-500 selection:text-white" id="root-layout">
      
      {/* Dynamic Header / Navigation */}
      <Navigation 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        lang={lang} 
        setLang={setLang} 
      />

      {/* Hero Banner Overlay Background Decor */}
      <div className="absolute top-20 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.06),transparent_50%)] pointer-events-none"></div>

      {/* ----------------- CORE TABS / SUBPAGES RENDER ----------------- */}

      {/* 1. FREE SAMPLE VIEW */}
      {activeTab === 'free-sample' && (
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
          <div className="text-center mb-10">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
              {isRtl ? 'تجربة حقيقية خالية من المخاطر' : 'TEST DRIVE OUR QUALITY'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal tracking-tight mb-4">
              {isRtl ? 'جرب جودة تصاميمنا الفاخرة بنفسك قبل الشراء' : 'Experience Our Design Quality Before You Buy'}
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              {isRtl 
                ? 'لا نطلب بطاقة ائتمان. فقط أخبرنا قليلاً عن مشروعك وسنبتكر لك أول عينة إعلانية مخصصة نفسياً لزيادة مبيعاتك خلال 24 ساعة.'
                : 'No credit card required. Give us a brief overview of your target audience and core product, and receive a tailor-made social ad layout in 24 hours.'}
            </p>
          </div>

          <FreeSampleWizard 
            lang={lang} 
            onSubmitSuccess={() => {
              // Direct client to see their ticket
              setActiveTab('admin-portal');
            }} 
          />
        </main>
      )}

      {/* 2. INSIGHTS / BLOG VIEW */}
      {activeTab === 'blog' && (
        <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
          <div className="text-center mb-12">
            <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
              {isRtl ? 'أسرار واستراتيجيات النمو البصري' : 'Direct-Response Knowledge Hub'}
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal tracking-tight mb-4">
              {isRtl ? 'مدونة المعرفة والتسويق الرقمي' : 'Lumora Insights & Strategy Blog'}
            </h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base">
              {isRtl 
                ? 'مقالات متعمقة ودراسات حالة حقيقية حول زيادة المبيعات بالدوافع النفسية البصرية وأحدث أدوات الذكاء الاصطناعي.'
                : 'Expert visual frameworks, psychology triggers, and strategic marketing updates built to scale modern businesses.'}
            </p>
          </div>

          <BlogShowcase lang={lang} />
        </main>
      )}

      {/* 3. ADMIN PORTAL VIEW */}
      {activeTab === 'admin-portal' && (
        <main className="flex-grow py-12 w-full animate-in fade-in duration-300">
          <AdminPortal lang={lang} />
        </main>
      )}

      {/* 4. MAIN LANDING PAGE VIEW (HOME, ABOUT, SERVICES, PORTFOLIO, PRICING, FAQ, CONTACT) */}
      {activeTab !== 'free-sample' && activeTab !== 'blog' && activeTab !== 'admin-portal' && (
        <main className="flex-grow">
          
          {/* HERO SECTION */}
          <section className="relative pt-8 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="hero-section">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
              
              {/* Box 1: Core Value Proposition (Light Bento Box) - Span 8 */}
              <div className="lg:col-span-8 flex flex-col justify-between p-8 sm:p-12 bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] relative overflow-hidden group hover:shadow-[0_20px_50px_rgba(37,99,235,0.05)] transition-all duration-300">
                {/* Decorative background radial gradient */}
                <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
                
                <div className="space-y-6 relative z-10">
                  {/* Visual Accent Badge */}
                  <div className="flex justify-start">
                    <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-brand-primary border border-blue-100 text-xs font-extrabold font-mono tracking-wider">
                      <Sparkles className="w-4 h-4 text-brand-accent animate-pulse" />
                      {isRtl ? 'تصاميم إعلانية نفسية مدعومة بالذكاء الاصطناعي' : 'AI-POWERED DIRECT RESPONSE CREATIVES'}
                    </span>
                  </div>

                  {/* Main Psychological Headline */}
                  <h1 className="text-3xl sm:text-5xl font-display font-black text-brand-charcoal leading-tight tracking-tight max-w-2xl">
                    {isRtl 
                      ? 'تصاميم إعلانية نفسية تحول المشاهدات إلى عملاء دائمين'
                      : 'AI-Powered Social Media Designs That Turn Views Into Customers'}
                  </h1>

                  {/* Emotional subheadline */}
                  <p className="text-slate-500 text-sm sm:text-base max-w-xl leading-relaxed">
                    {isRtl 
                      ? 'نحن لا نبيع مجرد "تصاميم فنية باهتة"؛ نحن نصمم محفزات بصرية مخصصة تزيد التفاعل وتبني ثقة عميقة وتسرع نمو مبيعاتك.'
                      : 'Professional advertising creatives designed to increase engagement, build trust and help your business grow faster.'}
                  </p>
                </div>

                {/* Sub layout containing actions & image showcase Side-by-Side inside Bento Box 1 */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pt-8 mt-8 border-t border-slate-100 relative z-10">
                  <div className="md:col-span-6 space-y-6">
                    {/* Actions / Double CTAs */}
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch gap-3" id="hero-ctas">
                      <button
                        onClick={() => setActiveTab('free-sample')}
                        className="px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-extrabold text-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all flex items-center justify-center gap-2 group duration-300"
                        id="hero-primary-cta"
                      >
                        <span>{isRtl ? 'احصل على عينة مجانية' : 'Get Your Free Sample'}</span>
                        <Sparkles className="w-4.5 h-4.5 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
                      </button>

                      <button
                        onClick={() => {
                          const el = document.getElementById('portfolio-section');
                          if (el) el.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="px-6 py-4 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 text-slate-600 hover:text-slate-900 font-bold text-sm transition-all shadow-sm flex items-center justify-center gap-1.5"
                        id="hero-secondary-cta"
                      >
                        <span>{isRtl ? 'تصفح باقة أعمالنا' : 'View Portfolio'}</span>
                        <ChevronRight className={`w-4 h-4 ${isRtl ? 'rotate-180' : ''}`} />
                      </button>
                    </div>

                    {/* Trust proofs below CTAs */}
                    <div className="space-y-1.5 text-xs text-slate-400 font-semibold pt-2">
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{isRtl ? 'لا يتطلب بطاقة ائتمان' : 'No Credit Card Needed'}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{isRtl ? 'تسليم مسودة خلال 24 ساعة' : 'First Draft under 24H'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="md:col-span-6 flex justify-center">
                    <div className="relative w-full max-w-[320px] rounded-2xl overflow-hidden shadow-lg border border-slate-100 bg-slate-950 group">
                      <img 
                        src="/src/assets/images/lumora_hero_banner_1782700088039.jpg" 
                        alt="Lumora Premium AI Design Mockup Showcase" 
                        className="w-full aspect-[4/3] object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="p-3.5 bg-slate-950 text-white border-t border-white/10 flex justify-between items-center">
                        <span className="text-[9px] font-mono font-bold tracking-wider text-amber-400">★ CTR +180%</span>
                        <span className="text-[8px] text-slate-400">{isRtl ? 'تصميم مخصص بالذكاء الاصطناعي' : 'AI-Optimized'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Box 2: Dark Golden Metrics (Premium Dark Bento Box) - Span 4 */}
              <div className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-10 bg-[#0F172A] text-white rounded-[2.5rem] border-[3px] border-[#D4AF37]/20 shadow-2xl relative group overflow-hidden">
                <div className="absolute -top-12 -right-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
                
                <div>
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[9px] font-bold uppercase tracking-wider inline-block mb-6">
                    {isRtl ? 'علم الأرقام والنتائج' : 'PERFORMANCE LEDGER'}
                  </span>
                  
                  <div className="space-y-6">
                    <div>
                      <span className="block text-4xl sm:text-5xl font-display font-black text-amber-400">500+</span>
                      <h5 className="text-sm font-extrabold text-slate-200 mt-1">{isRtl ? 'إعلانات تم تسليمها' : 'High-Converting Ads Shipped'}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{isRtl ? 'تصاميم مخصصة نفسياً لزيادة تفاعل المتابعين والمبيعات.' : 'Tailored directly for paid channels to stop scroll and lower CPA.'}</p>
                    </div>
                    
                    <div className="border-t border-white/10 pt-5">
                      <span className="block text-4xl sm:text-5xl font-display font-black text-blue-400">100+</span>
                      <h5 className="text-sm font-extrabold text-slate-200 mt-1">{isRtl ? 'مشاريع مبيعات تم توسيعها' : 'E-commerce Brands Scaled'}</h5>
                      <p className="text-xs text-slate-400 leading-relaxed mt-0.5">{isRtl ? 'شركات صغيرة وناشئة ومتاجر إلكترونية ضاعفت أرباحها.' : 'Small businesses and startups globally scaling their marketing.'}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono mt-6">
                  <span>SYSTEM FEED: ACTIVE</span>
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                </div>
              </div>

              {/* Box 3: Fast-Track Growth interactive mini form - Span 4 */}
              <div className="lg:col-span-4 flex flex-col justify-between p-8 sm:p-10 bg-white rounded-[2.5rem] border border-blue-50 shadow-[0_20px_50px_rgba(37,99,235,0.06)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none"></div>
                
                <div>
                  <div className="mb-6">
                    <span className="px-2.5 py-1 rounded-full bg-blue-50 text-brand-primary border border-blue-100 text-[9px] font-bold uppercase tracking-wider inline-block mb-3">
                      {isRtl ? 'حجز عينة فورية' : 'Fast-Track Request'}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-black text-brand-charcoal">
                      {isRtl ? 'عينة مجانية' : 'Fast-Track'} <span className="text-brand-primary">{isRtl ? 'سريعة' : 'Growth'}</span>
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">
                      {isRtl ? 'احجز مسودة إعلانية مجانية مخصصة لعملك اليوم.' : 'Request your free direct-response draft.'}
                    </p>
                  </div>

                  {/* MINI FORM PERSISTED IN LOCALSTORAGE */}
                  <HeroMiniForm lang={lang} onRegister={() => setActiveTab('admin-portal')} />
                </div>
              </div>

              {/* Box 4: Mini channels Grid - Span 8 */}
              <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-primary flex items-center justify-center font-bold">
                    IG
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs sm:text-sm font-display font-extrabold text-brand-charcoal">
                      {isRtl ? 'منشورات إنستغرام' : 'Instagram Ads'}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">{isRtl ? 'توقف التمرير فوراً' : 'Viral aesthetics.'}</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                    FB
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs sm:text-sm font-display font-extrabold text-brand-charcoal">
                      {isRtl ? 'إعلانات فيسبوك' : 'Facebook Ads'}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">{isRtl ? 'معدل نقر CTR فائق' : 'Lower CPA.'}</p>
                  </div>
                </div>

                <div className="bg-white rounded-3xl p-5 border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    CR
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs sm:text-sm font-display font-extrabold text-brand-charcoal">
                      {isRtl ? 'شرائح الدوار' : 'Sales Carousels'}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">{isRtl ? 'سرد قصصي جذاب' : 'Story-driven swipes.'}</p>
                  </div>
                </div>

                <div className="bg-[#0F172A] text-white rounded-3xl p-5 border border-white/5 shadow-sm flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                  <div className="w-8 h-8 rounded-lg bg-amber-400/20 text-amber-400 flex items-center justify-center font-bold">
                    ★
                  </div>
                  <div className="mt-4">
                    <h4 className="text-xs sm:text-sm font-display font-extrabold text-amber-400">
                      {isRtl ? '+8 أسواق أخرى' : '8+ Industries'}
                    </h4>
                    <p className="text-[10px] text-slate-400 mt-1">{isRtl ? 'تغطية عالمية شاملة' : 'Global strategy.'}</p>
                  </div>
                </div>
              </div>

            </div>
          </section>


          {/* TRUST / METRICS SECTION */}
          <section className="bg-white border-y border-slate-200/50 py-16 px-4" id="trust-section">
            <div className="max-w-7xl mx-auto space-y-12">
              
              {/* Partner Logos Title */}
              <div className="text-center">
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest font-mono block mb-4">
                  {isRtl ? 'شركات تثق بنا حول العالم' : 'TRUSTED BY INNOVATIVE BRANDS WORLDWIDE'}
                </span>
                
                {/* Responsive Client Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-items-center opacity-65 filter grayscale hover:grayscale-0 transition-all duration-300">
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Sienna Homes</span>
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Glow Care</span>
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Artisan Co.</span>
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Pulse Fitness</span>
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Apex Engine</span>
                  <span className="font-display font-extrabold text-lg text-slate-500 font-mono tracking-tight">Lumiere Watch</span>
                </div>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-slate-100" id="metrics-grid">
                {(isRtl ? trustMetrics.ar : trustMetrics.en).map((m, i) => (
                  <div key={i} className="text-center p-4 space-y-2">
                    <span className="block text-3xl sm:text-4xl font-display font-black text-brand-primary">
                      {m.value}
                    </span>
                    <h5 className="text-sm font-extrabold text-brand-charcoal">{m.label}</h5>
                    <p className="text-xs text-slate-400 max-w-xs mx-auto leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>

            </div>
          </section>


          {/* ABOUT / WHY CHOOSE US SECTION */}
          <section className="py-20 sm:py-28 px-4 max-w-7xl mx-auto" id="about-section">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                {isRtl ? 'علم الجمال والتحويل الرقمي' : 'THE LUMORA STRATEGY'}
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                {isRtl ? 'لماذا نحن؟ دمج الذكاء الاصطناعي بعلم النفس التسويقي' : 'Why Businesses Choose Lumora Over General Designers'}
              </h2>
              <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                {isRtl 
                  ? 'غالبية المصممين يصنعون "لوحات فنية جميلة" تسر العين، لكنها لا تبيع. نحن نصمم محفزات بصرية مدروسة نفسياً لتحويل العاطفة إلى قرار شراء فوري.'
                  : 'Most agencies sell artistic layouts. We build high-converting direct-response campaign elements scientifically proven to attract more customers.'}
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6" id="why-choose-us-grid">
              {(isRtl ? whyChooseUsData.ar : whyChooseUsData.en).map((item, idx) => {
                const isDarkGoldCard = idx === 0;
                const isPrimaryBlueCard = idx === 3;
                const cardSpan = isDarkGoldCard || isPrimaryBlueCard ? 'md:col-span-7' : 'md:col-span-5';
                const cardStyle = isDarkGoldCard 
                  ? 'bg-[#0F172A] text-white border-[3px] border-[#D4AF37]/20 shadow-2xl rounded-[2.5rem]' 
                  : isPrimaryBlueCard
                    ? 'bg-gradient-to-tr from-[#2563EB] to-[#1E40AF] text-white border-2 border-blue-400/10 shadow-xl rounded-[2.5rem]'
                    : 'bg-white text-brand-charcoal border border-slate-200/60 shadow-sm rounded-[2.5rem]';

                return (
                  <div 
                    key={idx} 
                    className={`p-8 hover:scale-[1.01] hover:shadow-xl transition-all duration-300 flex flex-col justify-between ${cardSpan} ${cardStyle}`}
                  >
                    <div className="space-y-4">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${
                        isDarkGoldCard 
                          ? 'bg-amber-400/20 text-amber-300' 
                          : isPrimaryBlueCard 
                            ? 'bg-white/20 text-white' 
                            : 'bg-blue-50 text-brand-primary'
                      }`}>
                        {idx + 1}
                      </div>
                      <h4 className={`text-lg font-display font-extrabold ${isDarkGoldCard || isPrimaryBlueCard ? 'text-white' : 'text-brand-charcoal'}`}>{item.title}</h4>
                      <p className={`text-xs sm:text-sm leading-relaxed ${isDarkGoldCard || isPrimaryBlueCard ? 'text-slate-300' : 'text-slate-500'}`}>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>


          {/* SERVICES SECTION */}
          <section className="py-20 sm:py-28 bg-white border-y border-slate-200/50 px-4" id="services-section">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                  {isRtl ? 'حلولنا لتسريع نموك' : 'SCALE YOUR ADVERTISING'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                  {isRtl ? 'تصاميم إبداعية مخصصة تخدم أهدافك الإعلانية' : 'Every Visual Asset You Need to Dominate Paid Channels'}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {isRtl 
                    ? 'اكتشف خدماتنا المتخصصة والمصممة لتسهيل وصولك لجمهورك المستهدف وزيادة نقرات ومبيعات حملاتك الرقمية.'
                    : 'From pixel-perfect Instagram posts to AI-assisted cosmetics renders. Access world-class direct-response design assets.'}
                </p>
              </div>

              {/* Services cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="services-cards-grid">
                {servicesData.map((ser) => {
                  const IconComponent = iconMap[ser.icon] || Sparkles;
                  return (
                    <div 
                      key={ser.id}
                      className="group p-6 sm:p-8 bg-slate-50/50 hover:bg-white rounded-3xl border border-slate-200/60 hover:border-brand-primary/20 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                      id={`service-card-${ser.id}`}
                    >
                      <div className="space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-white text-brand-primary flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                          <IconComponent className="w-6 h-6" />
                        </div>
                        <h4 className="text-lg font-display font-extrabold text-brand-charcoal group-hover:text-blue-600 transition-colors">
                          {isRtl ? ser.titleAr : ser.title}
                        </h4>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                          {isRtl ? ser.descriptionAr : ser.description}
                        </p>
                      </div>

                      <div className="pt-6">
                        <button
                          onClick={() => handleServiceClick(ser.title)}
                          className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-brand-primary/50 text-slate-600 hover:text-brand-primary hover:bg-blue-50/10 font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                          id={`service-cta-btn-${ser.id}`}
                        >
                          <span>{isRtl ? 'اطلب تصميم الآن' : ser.ctaText}</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>


          {/* BEFORE & AFTER COMPARISON */}
          <section className="py-20 sm:py-28 px-4 bg-slate-50" id="before-after-section">
            <BeforeAfterSlider lang={lang} />
          </section>


          {/* HOW IT WORKS SECTION */}
          <section className="py-20 sm:py-28 px-4 bg-white border-y border-slate-200/50" id="how-it-works-section">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                  {isRtl ? 'خطوات بسيطة ونتائج مبهرة' : 'SIMPLE RHYTHMIC FLOW'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                  {isRtl ? 'كيف نعمل؟ طريقتنا لتسريع نمو علامتك' : 'How We Deliver Premium Visuals in 4 Simple Steps'}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {isRtl 
                    ? 'تجنب المفاوضات المعقدة والاجتماعات الطويلة المملة. عملنا منظم للغاية لتحصل على نتائج ملموسة فورا.'
                    : 'Say goodbye to slow, bloated design meetings. Our client-focused workflow operates on hyper-speed precision.'}
                </p>
              </div>

              {/* Progress Steps Grid */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative" id="how-it-works-grid">
                
                {/* Connecting Line Decor (Desktop only) */}
                <div className="hidden md:block absolute top-12 left-12 right-12 h-0.5 bg-dashed bg-slate-100 z-0"></div>

                {(isRtl ? howItWorksSteps.ar : howItWorksSteps.en).map((step, idx) => (
                  <div key={idx} className="relative z-10 text-center space-y-4 p-4" id={`how-step-${idx}`}>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-brand-primary to-brand-secondary text-white font-mono font-black text-xl flex items-center justify-center mx-auto shadow-lg shadow-blue-500/10 border-4 border-white">
                      {step.step}
                    </div>
                    <h4 className="text-base font-display font-extrabold text-brand-charcoal">{step.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                  </div>
                ))}

              </div>

            </div>
          </section>


          {/* PORTFOLIO SHOWCASE SECTION */}
          <section className="py-20 sm:py-28 px-4" id="portfolio-section">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                  {isRtl ? 'باقة من التصاميم المنجزة' : 'LUXURY SHOWCASE'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                  {isRtl ? 'تصفح أعمالنا وقصص نجاح عملائنا الفاخرة' : 'Our Direct-Response Creatives & Success Cases'}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {isRtl 
                    ? 'شاهد كيف ساهمت تصاميمنا النفسية والمقاييس المدروسة في زيادة مبيعات وتفاعل المتاجر الإلكترونية والعقارات ومستحضرات التجميل.'
                    : 'Explore the high-converting templates built for our beauty, real estate, restaurant, and SaaS clients worldwide.'}
                </p>
              </div>

              <PortfolioShowroom 
                lang={lang} 
                onRequestSample={() => {
                  setActiveTab('free-sample');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }} 
              />

            </div>
          </section>


          {/* PRICING SECTION */}
          <section className="py-20 sm:py-28 px-4 bg-slate-50 border-y border-slate-200/50" id="pricing-section">
            <div className="max-w-7xl mx-auto">
              
              <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                  {isRtl ? 'خيارات استثمارية مرنة' : 'TRANSPARENT VALUE'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                  {isRtl ? 'أسعار باقات واضحة ومناسبة لميزانيتك' : 'Simple Flat Pricing Designed to Help You Scale'}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  {isRtl 
                    ? 'بدون عقود طويلة الأمد أو مصاريف خفية. حدد الباقة الإعلانية المناسبة لعلامتك التجارية وابدأ فوراً.'
                    : 'Choose a direct-response plan tailored to your campaign speed. No setup fees, cancel or scale anytime.'}
                </p>
              </div>

              {/* Pricing Cards Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16" id="pricing-cards-grid">
                {(isRtl ? pricingPlans.ar : pricingPlans.en).map((plan) => (
                  <div 
                    key={plan.id}
                    className={`relative rounded-3xl p-6 sm:p-8 bg-white border shadow-lg overflow-hidden flex flex-col justify-between ${
                      plan.isPopular 
                        ? 'border-blue-600 lg:scale-105 z-10 shadow-xl shadow-blue-500/5' 
                        : 'border-slate-200/60'
                    }`}
                    id={`pricing-card-${plan.id}`}
                  >
                    
                    {/* Popular Badge */}
                    {plan.isPopular && (
                      <span className="absolute top-4 right-4 bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                        {isRtl ? 'الأكثر شعبية' : 'MOST POPULAR'}
                      </span>
                    )}

                    <div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">{plan.badge}</span>
                      <h4 className="text-lg font-display font-black text-brand-charcoal">{plan.name}</h4>
                      
                      <div className="flex items-baseline gap-1 my-4">
                        <span className="text-4xl font-mono font-black text-brand-charcoal">{plan.price}</span>
                        <span className="text-slate-400 text-xs font-bold">/ {isRtl ? 'باقة كاملة' : 'package'}</span>
                      </div>

                      <p className="text-slate-500 text-xs mb-6 font-medium leading-relaxed">{plan.subtext}</p>
                      
                      <hr className="border-slate-100 mb-6" />

                      <ul className="space-y-3 mb-8" id={`pricing-features-${plan.id}`}>
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-semibold">
                            <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => {
                        setActiveTab('free-sample');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`w-full py-3.5 rounded-xl text-center text-xs font-extrabold transition-all duration-300 ${
                        plan.isPopular 
                          ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/10' 
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {plan.cta}
                    </button>

                  </div>
                ))}
              </div>

              {/* Calculator Section Block */}
              <div className="mt-20">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-brand-charcoal">
                    {isRtl ? 'احسب العائد التقريبي لأرباحك قبل الشراء' : 'Calculate Your Brand Conversion Return Lift'}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm">
                    {isRtl 
                      ? 'قم بمحاكاة معدلات نمو نقرات الشراء شهرياً واكتشف صافي العائد من استثمار الباقة.'
                      : 'Input your order details and simulate estimated campaign gains below.'}
                  </p>
                </div>
                <PricingCalculator lang={lang} onSelectPlan={handleSelectPlanFromCalc} />
              </div>

            </div>
          </section>


          {/* FAQ SECTION */}
          <section className="py-20 sm:py-28 px-4 bg-white" id="faq-section">
            <div className="max-w-4xl mx-auto">
              
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="px-3.5 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-3">
                  {isRtl ? 'إجابات واضحة ومباشرة' : 'RESOLVING FRICTION'}
                </span>
                <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-brand-charcoal mb-4">
                  {isRtl ? 'الأسئلة الشائعة واستفسارات العملاء' : 'Frequently Asked Client Inquiries'}
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {isRtl 
                    ? 'اعثر على إجابات سريعة حول التسليم، اللغات، التعديلات، وحقوق الملكية القانونية لتصاميمنا.'
                    : 'Explore deep technical answers on licensing, custom AI models, local GCC copy translation, and deliverable ratios.'}
                </p>
              </div>

              {/* FAQ Accordion Grid */}
              <div className="space-y-4" id="faq-accordion-panel">
                {faqData.map((item) => {
                  const isExpanded = expandedFaqId === item.id;
                  return (
                    <div 
                      key={item.id}
                      className="border border-slate-200/60 rounded-2xl bg-slate-50/30 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => setExpandedFaqId(isExpanded ? null : item.id)}
                        className="w-full p-5 text-left font-display font-extrabold text-sm sm:text-base text-brand-charcoal hover:bg-slate-50 flex justify-between items-center gap-4"
                        style={{ textAlign: isRtl ? 'right' : 'left' }}
                      >
                        <span>{isRtl ? item.questionAr : item.question}</span>
                        <div className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:text-brand-charcoal">
                          {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                      
                      {isExpanded && (
                        <div className="p-5 border-t border-slate-100 bg-white text-slate-500 text-xs sm:text-sm leading-relaxed animate-in slide-in-from-top-2 duration-300">
                          {isRtl ? item.answerAr : item.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

            </div>
          </section>


          {/* CONTACT & SUBMISSIONS SECTION */}
          <section className="py-20 sm:py-28 px-4 bg-slate-50 border-t border-slate-200/50" id="contact-section">
            <div className="max-w-5xl mx-auto">
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                
                {/* Visual Direct Contact Details */}
                <div className="lg:col-span-5 space-y-6">
                  <span className="px-3 py-1 rounded-full text-xs font-bold font-mono tracking-widest bg-amber-50 text-brand-accent border border-amber-200 uppercase inline-block mb-2">
                    {isRtl ? 'قنوات تواصل VIP مباشرة' : 'IMMEDIATE VIP CONTACT'}
                  </span>
                  <h3 className="text-3xl font-display font-black text-brand-charcoal">
                    {isRtl ? 'هل تود مناقشة مشروع إعلاني مخصص؟' : 'Let’s Design Your Record Campaign'}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {isRtl 
                      ? 'لدينا خط دعم كبار الشخصيات لمناقشة التفاصيل الهندسية لحملات المتاجر، العقارات، ومستحضرات التجميل.'
                      : 'Speak directly with a direct-response strategist to define your custom branding layouts and lower CPA costs.'}
                  </p>

                  <div className="space-y-4 pt-4" id="direct-contact-channels">
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'خط كبار الشخصيات الهاتفي' : 'VIP Direct Call'}</span>
                        <span className="font-mono text-sm font-extrabold text-brand-charcoal">+20 10 5030 0190</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3.5">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-primary flex items-center justify-center">
                        <Phone className="w-5 h-5 text-emerald-500" />
                      </div>
                      <div>
                        <span className="block text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'قناة واتساب الفورية' : 'Instant WhatsApp'}</span>
                        <a href={getWhatsAppLink("201050300190")} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-mono text-sm font-extrabold">
                          wa.me/201050300190
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-slate-700 text-xs leading-relaxed max-w-sm">
                    ★ <strong>{isRtl ? 'عرض لفترة محدودة:' : 'Limited Offer:'}</strong>{' '}
                    {isRtl 
                      ? 'احجز باقة المحترفين اليوم واحصل على تحليل وتدقيق بوعي بصرى مجاني للمنافسين بقيمة $300.'
                      : 'Lock in our Professional Tier today to secure a free $300 visual audit of your closest competitors.'}
                  </div>
                </div>

                {/* Interactive Contact Form Panel */}
                <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/60 shadow-xl p-6 sm:p-10">
                  {contactSubmitted ? (
                    <div className="text-center py-10 space-y-4 animate-in zoom-in-95 duration-200" id="contact-success-panel">
                      <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mx-auto border border-emerald-200">
                        <Check className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-display font-extrabold text-brand-charcoal">
                        {isRtl ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                      </h4>
                      <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                        {isRtl 
                          ? 'شكراً لك! سيتواصل معك أحد مستشارينا الإعلانيين كبار الشخصيات هاتفياً أو عبر البريد الإلكتروني في أقل من ساعتين.'
                          : 'Thank you for reaching out. A dedicated strategist will follow up directly in less than 2 hours.'}
                      </p>

                      {/* Direct WhatsApp Message Send backup button */}
                      {lastContactWaLink && (
                        <div className="p-5 bg-emerald-50 border border-emerald-100 rounded-2xl max-w-md mx-auto space-y-2.5">
                          <p className="text-xs font-bold text-emerald-800 leading-relaxed">
                            {isRtl 
                              ? '⚡ أرسل رسالتك الآن مباشرة لمسؤول الواتساب للتواصل الفوري وبدء مناقشة تفاصيل مشروعك فوراً!' 
                              : '⚡ Send your message directly to our WhatsApp representative to guarantee an instant consultation right away!'}
                          </p>
                          <a
                            href={lastContactWaLink}
                            target="_blank"
                            rel="noreferrer"
                            className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                            id="whatsapp-direct-send-contact"
                          >
                            <svg className="w-4.5 h-4.5 fill-white" viewBox="0 0 24 24">
                              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                            </svg>
                            <span>{isRtl ? 'إرسال الرسالة عبر واتساب الآن' : 'Send via WhatsApp Now'}</span>
                          </a>
                        </div>
                      )}

                      <div className="pt-2">
                        <button
                          onClick={() => setContactSubmitted(false)}
                          className="px-4 py-2 border border-slate-200 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-50 transition-all"
                        >
                          {isRtl ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                        </button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleContactSubmit} className="space-y-4" id="contact-marketing-form">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{isRtl ? 'الاسم بالكامل *' : 'Your Name *'}</label>
                          <input 
                            type="text" 
                            required
                            placeholder={isRtl ? 'مثال: فيصل الشمري' : 'e.g. Faisal Al-Shammari'}
                            value={contactName}
                            onChange={(e) => setContactName(e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-xs font-semibold outline-none"
                            id="contact-form-name"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{isRtl ? 'البريد الإلكتروني *' : 'Work Email *'}</label>
                          <input 
                            type="email" 
                            required
                            placeholder="faisal@business.sa"
                            value={contactEmail}
                            onChange={(e) => setContactEmail(e.target.value)}
                            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-xs font-semibold outline-none"
                            id="contact-form-email"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{isRtl ? 'اسم الشركة (إن وجد)' : 'Business Name (Optional)'}</label>
                        <input 
                          type="text" 
                          placeholder={isRtl ? 'مثال: شركة نخبة العطور' : 'e.g. Elite Oud Products'}
                          value={contactBizName}
                          onChange={(e) => setContactBizName(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-xs font-semibold outline-none"
                          id="contact-form-biz"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">{isRtl ? 'ما هو استفسارك؟ *' : 'Describe Your Project / Inquiry *'}</label>
                        <textarea 
                          rows={4} 
                          required
                          placeholder={isRtl 
                            ? 'اكتب لنا تفاصيل مشروعك أو حدد الباقة التي تود حجزها لتصميم هويتك وحملاتك البصرية...' 
                            : 'Specify your marketing requirements, timelines, budget, or preferred branding colors...'}
                          value={contactMessage}
                          onChange={(e) => setContactMessage(e.target.value)}
                          className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 focus:border-brand-primary rounded-xl text-xs font-semibold outline-none"
                          id="contact-form-msg"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmittingContact}
                        className="w-full py-3.5 bg-brand-primary hover:bg-brand-secondary text-white rounded-xl text-xs font-extrabold flex items-center justify-center gap-2 shadow-md hover:shadow-lg disabled:opacity-50"
                        id="contact-form-submit"
                      >
                        {isSubmittingContact ? (
                          <>
                            <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            <span>{isRtl ? 'جاري الإرسال للتسجيل...' : 'Recording Message...'}</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-3.5 h-3.5" />
                            <span>{isRtl ? 'إرسال واستشارتي مجانية الآن' : 'Send Message & Book Consultation'}</span>
                          </>
                        )}
                      </button>

                    </form>
                  )}
                </div>

              </div>

            </div>
          </section>

        </main>
      )}

      {/* ----------------- GLOBAL FOOTER SECTION ----------------- */}
      <footer className="bg-slate-950 text-white border-t border-slate-900 py-16 px-4" id="main-footer">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            
            {/* Logo and desc */}
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white">
                  <Sparkles className="w-4.5 h-4.5 text-amber-300" />
                </div>
                <span className="font-display font-extrabold text-lg text-white">
                  Lumora<span className="text-brand-accent">Design</span>
                </span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
                {isRtl 
                  ? 'لومورا تساعد الشركات في تسريع نموها وجذب العملاء عبر تصاميم إعلانية نفسية مخصصة ومبنية للتحويل المباشر لوسائل التواصل الاجتماعي.'
                  : 'We help businesses attract more customers through high-converting visual marketing. Direct response advertising creatives built to outperform.'}
              </p>
              <div className="text-[10px] text-slate-500 font-mono">
                {isRtl ? 'توقيت الرياض المحلي المحدث' : 'Riyadh Local System: 2026 UTC'}
              </div>
            </div>

            {/* Links Columns */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 md:col-span-7">
              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{isRtl ? 'خدماتنا' : 'Services'}</h5>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><button onClick={() => { setActiveTab('services'); const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'منشورات إنستغرام' : 'Instagram Posts'}</button></li>
                  <li><button onClick={() => { setActiveTab('services'); const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'إعلانات فيسبوك' : 'Facebook Ads'}</button></li>
                  <li><button onClick={() => { setActiveTab('services'); const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'لافتات المتاجر' : 'Ecommerce Ads'}</button></li>
                  <li><button onClick={() => { setActiveTab('services'); const el = document.getElementById('services-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'صور بالذكاء الاصطناعي' : 'AI Product Photos'}</button></li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{isRtl ? 'علامة لومورا' : 'Brand Info'}</h5>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><button onClick={() => { setActiveTab('about'); const el = document.getElementById('about-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'لماذا لومورا' : 'Why Choose Us'}</button></li>
                  <li><button onClick={() => { setActiveTab('portfolio'); const el = document.getElementById('portfolio-section'); if (el) el.scrollIntoView({ behavior: 'smooth' }); }} className="hover:text-white transition-colors">{isRtl ? 'حزم الأعمال' : 'Our Portfolio'}</button></li>
                  <li><button onClick={() => { setActiveTab('blog'); }} className="hover:text-white transition-colors">{isRtl ? 'مقالات المعرفة' : 'Insights Blog'}</button></li>
                  <li><button onClick={() => { setActiveTab('admin-portal'); }} className="hover:text-white transition-colors">{isRtl ? 'بوابة إدارة العملاء' : 'Leads Desk'}</button></li>
                </ul>
              </div>

              <div>
                <h5 className="text-xs font-bold text-white uppercase tracking-wider mb-4">{isRtl ? 'الخصوصية والقانونية' : 'Legal'}</h5>
                <ul className="space-y-2 text-xs text-slate-400">
                  <li><a href="#privacy" className="hover:text-white transition-colors">{isRtl ? 'سياسة الخصوصية' : 'Privacy Policy'}</a></li>
                  <li><a href="#terms" className="hover:text-white transition-colors">{isRtl ? 'شروط الخدمة' : 'Terms of Service'}</a></li>
                  <li><a href="#license" className="hover:text-white transition-colors">{isRtl ? 'تراخيص الاستخدام' : 'Commercial License'}</a></li>
                </ul>
              </div>
            </div>

          </div>

          <hr className="border-slate-900 my-8" />

          {/* Copyrights and bottom layout bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold" id="footer-bottom-bar">
            <span>
              &copy; {new Date().getFullYear()} Lumora Design. {isRtl ? 'كافة الحقوق محفوظة.' : 'All Rights Reserved.'}
            </span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <Globe className="w-3.5 h-3.5 text-brand-primary" />
                <span>{isRtl ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia'}</span>
              </span>
              <span>&bull;</span>
              <span>{isRtl ? 'اللغة الحالية: العربية' : 'Current Language: English'}</span>
            </div>
          </div>

        </div>
      </footer>

      {/* Floating mobile instant WhatsApp CTA */}
      <a 
        href={getWhatsAppLink("201050300190")} 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 text-white p-3.5 rounded-full shadow-2xl hover:bg-emerald-600 transition-all active:scale-95 flex items-center justify-center hover:shadow-emerald-500/10 hover:shadow-xl"
        title="Chat on WhatsApp"
        id="floating-whatsapp"
      >
        <Phone className="w-5.5 h-5.5 animate-pulse fill-white" />
      </a>

      {/* Persistent sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 p-3 bg-white/95 border-t border-slate-200 backdrop-blur flex justify-between items-center" id="mobile-persistent-sticky-cta">
        <div className="text-left font-sans pl-1">
          <span className="block text-[8px] font-mono text-slate-400 font-bold uppercase leading-none">{isRtl ? 'اختبار الجودة مجاناً' : 'TEST DRIVE QUALITY'}</span>
          <span className="text-xs font-black text-brand-charcoal leading-tight">{isRtl ? 'احصلي على عينة مجانية' : 'Sample Ad in 24H'}</span>
        </div>
        <button
          onClick={() => {
            setActiveTab('free-sample');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white text-xs font-extrabold flex items-center gap-1 shadow-md shadow-blue-500/10"
        >
          <span>{isRtl ? 'طلب عينة مجانية' : 'Get Free Sample'}</span>
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
        </button>
      </div>

    </div>
  );
}
