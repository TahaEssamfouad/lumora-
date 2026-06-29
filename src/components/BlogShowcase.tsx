import React, { useState } from 'react';
import { blogArticles } from '../data';
import { BlogArticle } from '../types';
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight, Share2, Search, CheckCircle } from 'lucide-react';

interface BlogShowcaseProps {
  lang: 'en' | 'ar';
}

export default function BlogShowcase({ lang }: BlogShowcaseProps) {
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const isRtl = lang === 'ar';

  const categories = isRtl
    ? ['الكل', 'التسويق عبر إنستغرام', 'إعلانات فيسبوك', 'الهوية البصرية والبراند']
    : ['All', 'Instagram Marketing', 'Facebook Ads', 'Branding'];

  const mapCategoryEn = (cat: string): string => {
    switch (cat) {
      case 'الكل': return 'All';
      case 'التسويق عبر إنستغرام': return 'Instagram Marketing';
      case 'إعلانات فيسبوك': return 'Facebook Ads';
      case 'الهوية البصرية والبراند': return 'Branding';
      default: return cat;
    }
  };

  const handleShare = (slug: string, id: string) => {
    const url = `${window.location.origin}/blog/${slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    });
  };

  const filteredArticles = blogArticles.filter((art) => {
    // Category filter
    const enCat = mapCategoryEn(selectedCategory);
    const matchesCategory = enCat === 'All' || art.category.toLowerCase() === enCat.toLowerCase();
    
    // Search filter
    const titleText = isRtl ? (art.titleAr || art.title) : art.title;
    const summaryText = isRtl ? (art.summaryAr || art.summary) : art.summary;
    const query = searchQuery.toLowerCase();
    const matchesSearch = titleText.toLowerCase().includes(query) || 
                          summaryText.toLowerCase().includes(query) ||
                          art.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="w-full" id="blog-showroom-container">
      
      {selectedArticle ? (
        /* Full Article Reader Layout */
        <article className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200/60 shadow-xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300" id="blog-article-full-view">
          
          {/* Cover Image */}
          <div className="relative aspect-[16/9] w-full">
            <img 
              src={selectedArticle.image} 
              alt={isRtl ? selectedArticle.titleAr : selectedArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 left-4 sm:top-6 sm:left-6 px-4 py-2 bg-white/90 text-brand-charcoal hover:bg-white rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-lg backdrop-blur-md transition-all active:scale-95"
              id="btn-back-to-blog"
            >
              {isRtl ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
              <span>{isRtl ? 'العودة للمقالات' : 'Back to Insights'}</span>
            </button>
          </div>

          {/* Article Meta */}
          <div className="p-6 sm:p-10 space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 font-medium">
              <span className="px-3 py-1 bg-blue-50 text-brand-primary font-bold rounded-full border border-blue-100">
                {selectedArticle.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {selectedArticle.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                {selectedArticle.readTime}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-4xl font-display font-extrabold text-brand-charcoal leading-tight">
              {isRtl ? selectedArticle.titleAr : selectedArticle.title}
            </h1>

            {/* Author bar */}
            <div className="flex items-center justify-between border-y border-slate-100 py-4">
              <div className="flex items-center gap-3">
                <img 
                  src={selectedArticle.author.avatar} 
                  alt={selectedArticle.author.name}
                  className="w-10 h-10 rounded-full border-2 border-brand-accent object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-brand-charcoal">{selectedArticle.author.name}</span>
                  <span className="text-[10px] text-slate-400 font-medium">{selectedArticle.author.role}</span>
                </div>
              </div>

              <button
                onClick={() => handleShare(selectedArticle.slug, selectedArticle.id)}
                className="p-2.5 rounded-xl border border-slate-200 hover:border-brand-primary text-slate-500 hover:text-brand-primary transition-all flex items-center gap-1.5 text-xs font-bold"
                id={`share-btn-${selectedArticle.id}`}
              >
                {copiedId === selectedArticle.id ? (
                  <>
                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                    <span className="text-emerald-500">{isRtl ? 'تم النسخ!' : 'Copied Link!'}</span>
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" />
                    <span>{isRtl ? 'مشاركة المقال' : 'Share Article'}</span>
                  </>
                )}
              </button>
            </div>

            {/* HTML/Markdown Content styling */}
            <div className="text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 whitespace-pre-line font-sans" id="blog-main-content">
              {selectedArticle.content}
            </div>

            {/* Call to action at bottom of article */}
            <div className="p-6 sm:p-8 bg-blue-50/50 rounded-3xl border border-blue-100/50 text-center space-y-4 mt-10">
              <h4 className="text-lg font-display font-extrabold text-brand-charcoal">
                {isRtl ? 'هل تريد تطبيق هذه الاستراتيجيات البصرية في حملاتك؟' : 'Ready to Apply These Psychological Triggers?'}
              </h4>
              <p className="text-slate-500 text-xs sm:text-sm max-w-md mx-auto">
                {isRtl 
                  ? 'دع فريق لومورا المحترف يبتكر لك تصاميم عالية التحويل تسلب انتباه عملائك وتزيد حجم مبيعاتك.'
                  : 'Let Lumora design expert visual advertising assets tailored to your products and watch conversions skyrocket.'}
              </p>
              <button
                onClick={() => {
                  setSelectedArticle(null);
                  // Global scroll to sample
                  const section = document.getElementById('free-sample');
                  if (section) section.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-brand-primary text-white font-bold rounded-xl text-sm hover:shadow-lg hover:shadow-blue-500/15 transition-all"
                id="blog-article-cta"
              >
                {isRtl ? 'ابدئي الآن بعينة مجانية' : 'Request Your Free Mockup Ad'}
              </button>
            </div>

          </div>

        </article>
      ) : (
        /* Blog Grid List View */
        <div className="space-y-10">
          
          {/* Filter and Search Bar */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between" id="blog-controls-wrapper">
            
            {/* Category Tags */}
            <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 no-scrollbar">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-300 ${
                      isSelected
                        ? 'bg-brand-primary text-white shadow-md'
                        : 'bg-white border border-slate-200 text-slate-500 hover:border-slate-300'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-slate-400" />
              <input
                type="text"
                placeholder={isRtl ? 'ابحث في مقالات المعرفة...' : 'Search insights & strategy...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-xs font-semibold outline-none focus:border-brand-primary"
                id="blog-search-input"
              />
            </div>

          </div>

          {/* Article Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-grid-cards">
            {filteredArticles.length === 0 ? (
              <div className="col-span-full text-center py-20 text-slate-400 text-sm">
                {isRtl ? 'لا توجد مقالات تطابق معايير البحث.' : 'No articles matched your criteria.'}
              </div>
            ) : (
              filteredArticles.map((art) => (
                <div
                  key={art.id}
                  className="group bg-white rounded-3xl border border-slate-200/60 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col justify-between"
                  id={`blog-card-${art.id}`}
                >
                  
                  {/* Article Card Cover */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img 
                      src={art.image} 
                      alt={isRtl ? art.titleAr : art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-white/90 text-brand-primary text-[10px] font-bold shadow backdrop-blur-md border border-slate-100">
                      {art.category}
                    </span>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 font-mono mb-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {art.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {art.readTime}
                        </span>
                      </div>

                      <h4 className="text-base sm:text-lg font-display font-extrabold text-brand-charcoal tracking-tight mb-2 group-hover:text-brand-primary transition-colors line-clamp-2">
                        {isRtl ? art.titleAr : art.title}
                      </h4>

                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {isRtl ? art.summaryAr : art.summary}
                      </p>
                    </div>

                    <div className="flex items-center justify-between border-t border-slate-100 pt-4 mt-2">
                      <div className="flex items-center gap-2">
                        <img 
                          src={art.author.avatar} 
                          alt={art.author.name}
                          className="w-8 h-8 rounded-full border border-slate-200 object-cover"
                          referrerPolicy="no-referrer"
                        />
                        <span className="text-xs font-bold text-slate-700">{art.author.name}</span>
                      </div>

                      <button
                        onClick={() => setSelectedArticle(art)}
                        className="text-xs font-bold text-brand-primary hover:text-brand-secondary flex items-center gap-0.5"
                      >
                        <span>{isRtl ? 'اقرأ المقال' : 'Read Article'}</span>
                        {isRtl ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>

                </div>
              ))
            )}
          </div>

        </div>
      )}

    </div>
  );
}
