import React, { useState } from 'react';
import { ActiveTab } from '../types';
import { Globe, Menu, X, Sparkles, ShieldCheck } from 'lucide-react';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  lang: 'en' | 'ar';
  setLang: (lang: 'en' | 'ar') => void;
}

export default function Navigation({ activeTab, setActiveTab, lang, setLang }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', labelAr: 'الرئيسية' },
    { id: 'about', label: 'Why Us', labelAr: 'لماذا نحن' },
    { id: 'services', label: 'Services', labelAr: 'خدماتنا' },
    { id: 'portfolio', label: 'Portfolio', labelAr: 'أعمالنا' },
    { id: 'pricing', label: 'Pricing', labelAr: 'الأسعار' },
    { id: 'blog', label: 'Insights', labelAr: 'المدونة' },
    { id: 'faq', label: 'FAQ', labelAr: 'الأسئلة الشائعة' },
    { id: 'contact', label: 'Contact', labelAr: 'اتصل بنا' },
  ];

  const handleNavClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    setIsOpen(false);
    
    // Force immediate smooth scroll to the section if it exists on the page
    setTimeout(() => {
      if (tabId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(`${tabId}-section`);
        if (element) {
          const offset = 100; // Offset for sticky navbar
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }, 50);
  };

  const isRtl = lang === 'ar';

  return (
    <nav className="sticky top-4 z-50 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-[calc(100%-2rem)] bg-white/80 backdrop-blur-md border border-slate-200/50 rounded-3xl sm:rounded-[2rem] transition-all duration-300 shadow-lg shadow-slate-200/30" id="main-nav">
      <div className="w-full">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer group" onClick={() => handleNavClick('home')} id="nav-logo">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-brand-primary to-brand-secondary flex items-center justify-center text-white shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform duration-300">
              <Sparkles className="w-5 h-5 text-amber-300 animate-pulse" />
            </div>
            <div className={`flex flex-col ${isRtl ? 'text-right mr-3' : 'text-left ml-1'}`}>
              <span className="font-display font-extrabold text-xl text-brand-charcoal tracking-tight flex items-center gap-1.5">
                Lumora
                <span className="text-brand-accent font-light">Design</span>
              </span>
              <span className="text-[10px] text-slate-500 uppercase tracking-widest font-mono font-bold leading-none">
                {isRtl ? 'ذكاء اصطناعي + إبداع' : 'AI + CREATIVE HUB'}
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1" id="nav-desktop-links">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as ActiveTab)}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-50 text-brand-primary shadow-sm'
                      : 'text-slate-600 hover:text-brand-primary hover:bg-slate-50'
                  }`}
                  id={`nav-item-${item.id}`}
                >
                  {isRtl ? item.labelAr : item.label}
                </button>
              );
            })}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center space-x-3" id="nav-actions">
            {/* Lang Toggle */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:border-slate-300 rounded-lg text-slate-600 hover:text-slate-950 transition-all text-xs font-bold bg-white/50"
              title={lang === 'en' ? 'Switch to Arabic' : 'تغيير إلى الإنجليزية'}
              id="lang-toggle-desktop"
            >
              <Globe className="w-4 h-4 text-brand-primary" />
              <span>{lang === 'en' ? 'العربية' : 'English'}</span>
            </button>

            {/* Hidden admin access icon */}
            <button
              onClick={() => handleNavClick('admin-portal')}
              className={`p-2 rounded-lg transition-all ${
                activeTab === 'admin-portal' ? 'bg-amber-50 text-brand-accent' : 'text-slate-400 hover:text-slate-600 hover:bg-slate-50'
              }`}
              title={isRtl ? 'بوابة إدارة العملاء' : 'Leads Portal (Admin)'}
              id="admin-portal-trigger"
            >
              <ShieldCheck className="w-4.5 h-4.5" />
            </button>

            {/* High Converting Free Sample CTA */}
            <button
              onClick={() => handleNavClick('free-sample')}
              className="relative overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/20 active:scale-98 transition-all group duration-300"
              id="nav-free-sample-cta"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {isRtl ? 'احصل على عينة مجانية' : 'Get Free Sample'}
                <Sparkles className="w-4 h-4 text-amber-300 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-brand-secondary to-brand-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </button>
          </div>

          {/* Mobile Menu & Language Toggle & Admin Toggle */}
          <div className="flex items-center space-x-2 lg:hidden" id="nav-mobile-controls">
            {/* Lang Toggle Mobile */}
            <button
              onClick={() => setLang(lang === 'en' ? 'ar' : 'en')}
              className="p-2 border border-slate-200 rounded-lg text-slate-600 bg-white/50"
              id="lang-toggle-mobile"
            >
              <Globe className="w-4 h-4 text-brand-primary" />
            </button>

            {/* Admin Toggle Mobile */}
            <button
              onClick={() => handleNavClick('admin-portal')}
              className={`p-2 rounded-lg border ${
                activeTab === 'admin-portal' ? 'bg-amber-50 border-amber-200 text-brand-accent' : 'border-slate-200 text-slate-500'
              }`}
              id="admin-toggle-mobile"
            >
              <ShieldCheck className="w-4 h-4" />
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100/50 transition-all"
              id="mobile-menu-hamburger"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200" id="mobile-drawer">
          <div className="px-4 py-6 space-y-2 max-h-[80vh] overflow-y-auto">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id as ActiveTab)}
                  className={`w-full ${isRtl ? 'text-right flex-row-reverse' : 'text-left'} px-4 py-3 rounded-xl text-base font-semibold flex items-center justify-between ${
                    isActive
                      ? 'bg-blue-50 text-brand-primary'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-brand-primary'
                  }`}
                  id={`mobile-nav-item-${item.id}`}
                >
                  <span>{isRtl ? item.labelAr : item.label}</span>
                </button>
              );
            })}
            
            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => handleNavClick('free-sample')}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-bold text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/15"
                id="mobile-cta-free-sample"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                {isRtl ? 'طلب عينة مجانية فورية' : 'Request Free Sample Now'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
