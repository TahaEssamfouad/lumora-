import React, { useState } from 'react';
import { portfolioProjects } from '../data';
import { Sparkles, ArrowRight, Eye, Smartphone, Flame, Star } from 'lucide-react';

interface PortfolioShowroomProps {
  lang: 'en' | 'ar';
  onRequestSample: () => void;
}

export default function PortfolioShowroom({ lang, onRequestSample }: PortfolioShowroomProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const isRtl = lang === 'ar';

  const categories = isRtl
    ? ['الكل', 'المطاعم', 'التجميل', 'العقارات', 'التكنولوجيا', 'الأزياء', 'اللياقة البدنية']
    : ['All', 'Restaurants', 'Beauty', 'Real Estate', 'Technology', 'Fashion', 'Fitness'];

  const mapCategoryEn = (cat: string): string => {
    switch (cat) {
      case 'الكل': return 'All';
      case 'المطاعم': return 'Restaurants';
      case 'التجميل': return 'Beauty';
      case 'العقارات': return 'Real Estate';
      case 'التكنولوجيا': return 'Technology';
      case 'الأزياء': return 'Fashion';
      case 'اللياقة البدنية': return 'Fitness';
      default: return cat;
    }
  };

  const filteredProjects = portfolioProjects.filter((p) => {
    const enCat = mapCategoryEn(selectedCategory);
    if (enCat === 'All') return true;
    return p.category.toLowerCase() === enCat.toLowerCase();
  });

  return (
    <div className="w-full" id="portfolio-showroom-module">
      
      {/* Category selector */}
      <div className="flex justify-start md:justify-center items-center overflow-x-auto pb-4 mb-10 gap-2 no-scrollbar px-4" id="portfolio-category-bar">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                isSelected
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/10 scale-105'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
              id={`portfolio-cat-${cat}`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Showroom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4" id="portfolio-project-grid">
        {filteredProjects.map((project) => {
          const details = project.mockupDetails;
          const isHovered = hoveredProjectId === project.id;
          
          return (
            <div
              key={project.id}
              className="group bg-white rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
              onMouseEnter={() => setHoveredProjectId(project.id)}
              onMouseLeave={() => setHoveredProjectId(null)}
              id={`portfolio-card-${project.id}`}
            >
              
              {/* Card visual showcase wrapper (Simulated Premium Ad) */}
              <div className="p-5 bg-slate-50 border-b border-slate-100 flex-1 flex flex-col justify-center">
                
                {/* Simulated Social Media Feed Mockup Frame */}
                <div className="w-full max-w-[320px] mx-auto rounded-2xl border border-slate-200 shadow-xl overflow-hidden bg-white">
                  
                  {/* Feed Header */}
                  <div className="px-3.5 py-2.5 bg-white border-b border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center text-[10px] font-bold text-white">
                        {details.title.substring(0, 1)}
                      </div>
                      <div className="flex flex-col leading-none">
                        <span className="text-[10px] font-bold text-slate-900">{details.title}</span>
                        <span className="text-[8px] text-slate-400 font-sans">Sponsored • Ad</span>
                      </div>
                    </div>
                    <span className="text-[14px] text-slate-400 tracking-wider">•••</span>
                  </div>

                  {/* Feed Creative Canvas (Fully CSS Styled Ads) */}
                  <div 
                    className={`relative aspect-square w-full flex flex-col justify-between p-4 ${
                      details.theme === 'dark' 
                        ? 'bg-slate-950 text-white' 
                        : details.theme === 'neon'
                        ? 'bg-slate-900 text-white'
                        : details.theme === 'luxury'
                        ? 'bg-slate-900 text-white'
                        : 'bg-white text-slate-900'
                    }`}
                  >
                    {/* Background glow effects for premium styling */}
                    {details.theme === 'neon' && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]"></div>
                    )}
                    {details.theme === 'luxury' && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.1),transparent_60%)]"></div>
                    )}
                    {details.theme === 'light' && (
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(236,72,153,0.05),transparent_60%)]"></div>
                    )}

                    {/* Ad Header Info */}
                    <div className="flex justify-between items-start relative z-10">
                      <span 
                        className="px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider font-mono border"
                        style={{ 
                          borderColor: `${details.accentColor}40`, 
                          backgroundColor: `${details.accentColor}15`,
                          color: details.accentColor 
                        }}
                      >
                        {details.badge}
                      </span>
                      <Sparkles className="w-3 h-3 text-amber-300" />
                    </div>

                    {/* Creative Message */}
                    <div className="my-auto relative z-10 text-center px-2">
                      <span 
                        className="text-[9px] font-bold tracking-wide uppercase font-mono"
                        style={{ color: details.accentColor }}
                      >
                        {details.hook}
                      </span>
                      <h5 className="text-[15px] font-display font-extrabold tracking-tight mt-1 leading-snug">
                        {details.headline}
                      </h5>
                    </div>

                    {/* Ad Footer / Bottom Bar CTA */}
                    <div className="flex justify-between items-center pt-2 border-t border-slate-100/10 relative z-10">
                      <span className="text-[7px] opacity-60 uppercase tracking-widest font-mono">
                        Powered by Lumora
                      </span>
                      <button 
                        className="px-3 py-1.5 rounded text-[8px] font-bold text-white transition-all shadow-md"
                        style={{ backgroundColor: details.accentColor }}
                      >
                        {details.buttonText}
                      </button>
                    </div>

                  </div>
                  
                  {/* Bottom interactions (like/comment/share) */}
                  <div className="px-3.5 py-2.5 bg-white border-t border-slate-100 flex items-center justify-between text-slate-500 text-[10px]">
                    <div className="flex items-center gap-2 font-semibold">
                      <span>♥ {Math.floor(Math.random() * 500) + 500}</span>
                      <span>💬 {Math.floor(Math.random() * 50) + 15}</span>
                    </div>
                    <span className="font-bold text-blue-600">{isRtl ? 'أداء مرتفع للغاية' : 'High Conversion'}</span>
                  </div>

                </div>
              </div>

              {/* Card Meta & Success Metrics */}
              <div className="p-6">
                
                {/* Category & Title */}
                <span className="text-[10px] font-bold text-brand-accent uppercase tracking-wider block mb-1">
                  {project.category}
                </span>
                <h4 className="text-base font-display font-extrabold text-brand-charcoal mb-3 group-hover:text-blue-600 transition-colors">
                  {isRtl ? project.titleAr : project.title}
                </h4>
                <p className="text-slate-500 text-xs leading-relaxed mb-4">
                  {isRtl ? project.descriptionAr : project.description}
                </p>

                {/* Conversion Performance Metrics Strip */}
                <div className="grid grid-cols-2 gap-2 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50 text-center mb-4">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {isRtl ? 'زيادة التفاعل' : 'Engagement Lift'}
                    </span>
                    <span className="text-sm font-mono font-extrabold text-brand-primary flex items-center justify-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-orange-500" />
                      {project.engagementIncrease}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                      {isRtl ? 'معدل التحويل' : 'Conversion Rate'}
                    </span>
                    <span className="text-sm font-mono font-extrabold text-brand-secondary flex items-center justify-center gap-1">
                      <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                      {project.conversionRate}
                    </span>
                  </div>
                </div>

                {/* Micro CTA */}
                <button
                  onClick={onRequestSample}
                  className="w-full py-2.5 rounded-xl border border-slate-200 hover:border-brand-primary text-slate-600 hover:text-brand-primary font-bold text-xs transition-all flex items-center justify-center gap-1.5"
                  id={`portfolio-cta-btn-${project.id}`}
                >
                  <span>{isRtl ? 'اطلب تصميم مشابه لمشروعك' : 'Request Similar Free Sample'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
