import React, { useState, useEffect } from 'react';
import { FreeSampleRequest, ContactSubmission } from '../types';
import { ShieldCheck, Sparkles, Trash2, CheckCircle2, RotateCcw, Award, Star, Download, Eye, Layers } from 'lucide-react';

interface AdminPortalProps {
  lang: 'en' | 'ar';
}

export default function AdminPortal({ lang }: AdminPortalProps) {
  const [requests, setRequests] = useState<FreeSampleRequest[]>([]);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [activeTab, setActiveTab] = useState<'samples' | 'contacts'>('samples');
  
  const [selectedRequest, setSelectedRequest] = useState<FreeSampleRequest | null>(null);
  const [deliveryMockupCode, setDeliveryMockupCode] = useState<string>('');
  
  const isRtl = lang === 'ar';

  const loadLocalData = () => {
    // Load free sample requests
    const localSamples = localStorage.getItem('lumora_free_samples');
    if (localSamples) {
      setRequests(JSON.parse(localSamples));
    } else {
      // Seed initial dummy requests so it doesn't look empty and gives a gorgeous demo!
      const initialSeed: FreeSampleRequest[] = [
        {
          id: 'req-seed1',
          businessName: 'Artisan Cafe',
          website: 'https://artisancafe.com',
          whatsapp: '+201012345678',
          industry: 'restaurant',
          requestDetails: 'We want a modern high-contrast coffee design featuring freshly roasted beans and our signature latte.',
          createdAt: new Date(Date.now() - 3600000 * 4).toLocaleString(isRtl ? 'ar-EG' : 'en-US'),
          status: 'designed'
        },
        {
          id: 'req-seed2',
          businessName: 'Apex SaaS',
          website: 'https://apex-engine.io',
          whatsapp: '+201087654321',
          industry: 'technology',
          requestDetails: 'Sleek dark mode ad for Slack & Notion integrations. Hook should emphasize time-saving metrics.',
          createdAt: new Date(Date.now() - 3600000 * 24).toLocaleString(isRtl ? 'ar-EG' : 'en-US'),
          status: 'pending'
        }
      ];
      localStorage.setItem('lumora_free_samples', JSON.stringify(initialSeed));
      setRequests(initialSeed);
    }

    // Load contact submissions
    const localContacts = localStorage.getItem('lumora_contact_submissions');
    if (localContacts) {
      setSubmissions(JSON.parse(localContacts));
    } else {
      const initialSeedContacts: ContactSubmission[] = [
        {
          id: 'con-seed1',
          name: 'Ahmed Riyadh',
          email: 'ahmed@riyadhinvest.sa',
          businessName: 'Riyadh Elite Properties',
          message: 'Interested in booking the Professional package for our upcoming luxury villa launches. Let’s schedule a brief call.',
          createdAt: new Date(Date.now() - 3600000 * 12).toLocaleString(isRtl ? 'ar-EG' : 'en-US'),
          status: 'new'
        }
      ];
      localStorage.setItem('lumora_contact_submissions', JSON.stringify(initialSeedContacts));
      setSubmissions(initialSeedContacts);
    }
  };

  useEffect(() => {
    loadLocalData();
  }, [lang]);

  const handleDeleteRequest = (id: string) => {
    const updated = requests.filter(r => r.id !== id);
    setRequests(updated);
    localStorage.setItem('lumora_free_samples', JSON.stringify(updated));
    if (selectedRequest?.id === id) setSelectedRequest(null);
  };

  const handleDeleteSubmission = (id: string) => {
    const updated = submissions.filter(s => s.id !== id);
    setSubmissions(updated);
    localStorage.setItem('lumora_contact_submissions', JSON.stringify(updated));
  };

  const handleUpdateStatus = (id: string, newStatus: FreeSampleRequest['status']) => {
    const updated = requests.map(r => {
      if (r.id === id) {
        return { ...r, status: newStatus };
      }
      return r;
    });
    setRequests(updated);
    localStorage.setItem('lumora_free_samples', JSON.stringify(updated));
    
    if (selectedRequest?.id === id) {
      setSelectedRequest({ ...selectedRequest, status: newStatus });
    }
  };

  const handleClearAll = () => {
    if (window.confirm(isRtl ? 'هل أنت متأكد من رغبتك في مسح كافة البيانات المحفوظة محلياً؟' : 'Are you sure you want to clear all local data?')) {
      localStorage.removeItem('lumora_free_samples');
      localStorage.removeItem('lumora_contact_submissions');
      loadLocalData();
      setSelectedRequest(null);
    }
  };

  // Status badges
  const getStatusBadge = (status: FreeSampleRequest['status']) => {
    switch (status) {
      case 'pending':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-yellow-50 text-yellow-700 border border-yellow-200 uppercase font-mono">{isRtl ? 'قيد المراجعة' : 'Pending'}</span>;
      case 'reviewing':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-blue-50 text-blue-700 border border-blue-200 uppercase font-mono">{isRtl ? 'قيد التحليل' : 'Reviewing'}</span>;
      case 'designed':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-purple-50 text-purple-700 border border-purple-200 uppercase font-mono">{isRtl ? 'تم التصميم' : 'Designed'}</span>;
      case 'delivered':
        return <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 uppercase font-mono">{isRtl ? 'تم التسليم' : 'Delivered'}</span>;
    }
  };

  // Stats calculation
  const totalLeads = requests.length + submissions.length;
  const designedCount = requests.filter(r => r.status === 'designed' || r.status === 'delivered').length;

  return (
    <div className="w-full max-w-6xl mx-auto px-4" id="admin-hub-wrapper">
      
      {/* Banner / Title Header */}
      <div className="bg-gradient-to-r from-slate-900 via-brand-secondary to-slate-900 rounded-3xl p-6 sm:p-10 text-white flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl mb-10 border border-slate-800">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-6 h-6 text-brand-accent animate-pulse" />
            <span className="px-3 py-1 bg-white/10 text-brand-accent border border-white/10 text-[10px] font-bold font-mono tracking-widest uppercase rounded-full">
              {isRtl ? 'لوحة إدارة العينات محلياً' : 'CLIENT LEAD DESK'}
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-white">
            {isRtl ? 'مركز إدارة طلبات العملاء' : 'Lumora Lead Management Hub'}
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
            {isRtl 
              ? 'تتم مزامنة هذه البيانات وحفظها محلياً في جهازك (localStorage). يمكنك محاكاة دورة حياة الطلبات وتسليم العينات.'
              : 'Requests and messages are synchronized locally in real-time. Use this portal to track client submissions and manage lead status.'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleClearAll}
            className="px-4 py-2.5 bg-red-600/20 hover:bg-red-600/30 text-red-300 border border-red-500/20 hover:border-red-500/40 rounded-xl text-xs font-bold transition-all flex items-center gap-1"
          >
            <RotateCcw className="w-4 h-4" />
            <span>{isRtl ? 'إعادة ضبط البيانات' : 'Reset System Seeds'}</span>
          </button>
        </div>
      </div>

      {/* Stats Dashboard Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8" id="admin-stats-bento">
        <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm text-center">
          <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">{isRtl ? 'إجمالي الطلبات' : 'Total Client Leads'}</span>
          <span className="block text-2xl font-mono font-extrabold text-brand-charcoal mt-1">{totalLeads}</span>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm text-center">
          <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">{isRtl ? 'عينات تم تصميمها' : 'Designs Rendered'}</span>
          <span className="block text-2xl font-mono font-extrabold text-purple-600 mt-1">{designedCount}</span>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm text-center">
          <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">{isRtl ? 'قيد المراجعة' : 'Pending Review'}</span>
          <span className="block text-2xl font-mono font-extrabold text-yellow-600 mt-1">
            {requests.filter(r => r.status === 'pending').length}
          </span>
        </div>
        <div className="p-5 bg-white rounded-2xl border border-slate-200/60 shadow-sm text-center">
          <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">{isRtl ? 'رسائل الاتصال' : 'Inquiries'}</span>
          <span className="block text-2xl font-mono font-extrabold text-blue-600 mt-1">{submissions.length}</span>
        </div>
      </div>

      {/* Main split dashboard panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left column: List of leads */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200/60 shadow-lg overflow-hidden">
          
          {/* Section Tabs */}
          <div className="flex border-b border-slate-100 bg-slate-50/50">
            <button
              onClick={() => setActiveTab('samples')}
              className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                activeTab === 'samples' 
                  ? 'border-brand-primary text-brand-primary bg-white' 
                  : 'border-transparent text-slate-500 hover:text-brand-charcoal'
              }`}
            >
              {isRtl ? 'طلبات العينات المجانية' : 'Free Sample Tickets'} ({requests.length})
            </button>
            <button
              onClick={() => setActiveTab('contacts')}
              className={`flex-1 py-4 text-center text-xs font-bold uppercase tracking-wider transition-all border-b-2 ${
                activeTab === 'contacts' 
                  ? 'border-brand-primary text-brand-primary bg-white' 
                  : 'border-transparent text-slate-500 hover:text-brand-charcoal'
              }`}
            >
              {isRtl ? 'رسائل استفسار العملاء' : 'Contact Inquiries'} ({submissions.length})
            </button>
          </div>

          {/* List items container */}
          <div className="divide-y divide-slate-100 max-h-[500px] overflow-y-auto no-scrollbar" id="leads-list-scrollable">
            
            {activeTab === 'samples' && (
              requests.length === 0 ? (
                <div className="p-10 text-center text-slate-400 text-xs">
                  {isRtl ? 'لا يوجد طلبات عينات حالية.' : 'No free sample requests found yet.'}
                </div>
              ) : (
                requests.map((r) => (
                  <div 
                    key={r.id}
                    onClick={() => setSelectedRequest(r)}
                    className={`p-5 hover:bg-slate-50/50 cursor-pointer transition-all ${
                      selectedRequest?.id === r.id ? 'bg-blue-50/30 border-l-4 border-l-blue-600' : ''
                    }`}
                  >
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h4 className="font-display font-extrabold text-sm text-brand-charcoal">{r.businessName}</h4>
                        <span className="text-[10px] text-slate-400 font-mono">{r.createdAt}</span>
                      </div>
                      {getStatusBadge(r.status)}
                    </div>
                    <p className="text-slate-500 text-xs line-clamp-2 mt-2">{r.requestDetails}</p>
                    
                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100/50">
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono uppercase">
                        {r.industry}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteRequest(r.id);
                        }}
                        className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all"
                        title={isRtl ? 'حذف هذا الطلب' : 'Delete Ticket'}
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))
              )
            )}

            {activeTab === 'contacts' && (
              submissions.length === 0 ? (
                <div className="p-10 text-center text-slate-400 text-xs">
                  {isRtl ? 'لا يوجد رسائل اتصل بنا حالية.' : 'No contact inquiries found.'}
                </div>
              ) : (
                submissions.map((s) => (
                  <div key={s.id} className="p-5 hover:bg-slate-50/50">
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <div>
                        <h4 className="font-display font-extrabold text-sm text-brand-charcoal">{s.name}</h4>
                        <span className="text-[10px] text-slate-400 font-mono block">{s.email}</span>
                        <span className="text-[10px] text-slate-400 font-mono">{s.createdAt}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-200">
                        {s.businessName || 'General'}
                      </span>
                    </div>
                    <p className="text-slate-600 text-xs leading-relaxed bg-slate-50 p-3 rounded-xl mt-3 border border-slate-100">
                      {s.message}
                    </p>
                    <div className="flex justify-end mt-3">
                      <button
                        onClick={() => handleDeleteSubmission(s.id)}
                        className="text-red-500 hover:text-red-700 p-1 rounded-lg hover:bg-red-50 transition-all flex items-center gap-1 text-xs font-bold"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'حذف الرسالة' : 'Delete Inscription'}</span>
                      </button>
                    </div>
                  </div>
                ))
              )
            )}

          </div>

        </div>

        {/* Right column: Action simulator & ticket details */}
        <div className="lg:col-span-5">
          
          {selectedRequest ? (
            <div className="bg-white rounded-3xl border border-slate-200/60 shadow-lg p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200" id="lead-details-card">
              
              <div className="border-b border-slate-100 pb-4">
                <div className="flex justify-between items-start mb-2">
                  <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest font-mono">
                    TICKET DETAILS
                  </span>
                  {getStatusBadge(selectedRequest.status)}
                </div>
                <h4 className="text-xl font-display font-extrabold text-brand-charcoal">
                  {selectedRequest.businessName}
                </h4>
                <p className="text-slate-400 text-xs font-mono mt-1">{selectedRequest.createdAt}</p>
              </div>

              {/* Data Table details */}
              <div className="space-y-3 text-xs">
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'الموقع الإلكتروني' : 'Website'}</span>
                  <a href={selectedRequest.website} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-mono">
                    {selectedRequest.website}
                  </a>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'رقم الواتساب' : 'WhatsApp Number'}</span>
                  <span className="font-mono text-brand-charcoal">{selectedRequest.whatsapp}</span>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase">{isRtl ? 'تفاصيل الطلب والخصائص' : 'Request Requirements'}</span>
                  <p className="text-slate-600 font-medium leading-relaxed bg-slate-50 p-3 rounded-xl border border-slate-100 mt-1">
                    {selectedRequest.requestDetails}
                  </p>
                </div>
              </div>

              {/* Status Simulator panel */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <span className="block text-[10px] font-bold text-slate-400 uppercase">
                  {isRtl ? 'محاكاة حالة الطلب لتجربة العميل' : 'Simulate Lifecycle State'}
                </span>
                
                <div className="grid grid-cols-2 gap-2" id="admin-status-grid">
                  <button
                    onClick={() => handleUpdateStatus(selectedRequest.id, 'reviewing')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedRequest.status === 'reviewing' 
                        ? 'bg-blue-600 border-blue-600 text-white' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {isRtl ? 'بدء التحليل البصري' : 'Analyze / Review'}
                  </button>
                  <button
                    onClick={() => handleUpdateStatus(selectedRequest.id, 'designed')}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      selectedRequest.status === 'designed' 
                        ? 'bg-purple-600 border-purple-600 text-white shadow-md' 
                        : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    {isRtl ? 'إنهاء تصميم العينة' : 'Mockup Designed'}
                  </button>
                </div>

                {selectedRequest.status === 'designed' && (
                  <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 space-y-3 animate-in slide-in-from-top-2 duration-200">
                    <p className="text-slate-700 text-xs font-medium leading-relaxed">
                      ★ {isRtl 
                        ? 'العينة جاهزة للتسليم محلياً! اضغط أدناه لمحاكاة تسليم الملفات بجودة فائقة للعميل.' 
                        : 'The design mockup is completed. Simulate delivery to grant client access to premium files.'}
                    </p>
                    <button
                      onClick={() => handleUpdateStatus(selectedRequest.id, 'delivered')}
                      className="w-full py-2.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <CheckCircle2 className="w-4 h-4" />
                      <span>{isRtl ? 'محاكاة تسليم الملفات' : 'Simulate Client Delivery'}</span>
                    </button>
                  </div>
                )}

                {selectedRequest.status === 'delivered' && (
                  <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-3 text-center animate-in zoom-in-95 duration-200">
                    <Award className="w-8 h-8 text-emerald-500 mx-auto" />
                    <h5 className="font-display font-extrabold text-sm text-emerald-800">{isRtl ? 'تم تسليم العينة بنجاح!' : 'Creative Delivered!'}</h5>
                    <p className="text-slate-600 text-xs">
                      {isRtl 
                        ? 'تم تسليم الإعلانات المخصصة والملفات المفتوحة بنجاح للعميل للموافقة والبدء.' 
                        : 'Your client received direct notifications and high-resolution commercial templates.'}
                    </p>
                    <div className="flex gap-2 justify-center">
                      <button
                        className="px-3 py-1.5 bg-white border border-emerald-200 text-emerald-700 font-bold rounded-lg text-[10px] flex items-center gap-1"
                        onClick={() => alert(isRtl ? 'تحميل ملفات التصميم الوهمية عالية الجودة...' : 'Downloading premium vector bundle...')}
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>{isRtl ? 'تحميل الملفات المصممة' : 'Download Output'}</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>

            </div>
          ) : (
            <div className="bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200 p-8 text-center text-slate-400 space-y-3">
              <Layers className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-xs font-semibold">
                {isRtl ? 'حدد تذكرة عميل من القائمة اليسرى لعرض تفاصيلها ومحاكاة مراحلها.' : 'Select a ticket on the left to review requirements and simulate statuses.'}
              </p>
            </div>
          )}

        </div>

      </div>
    </div>
  );
}
