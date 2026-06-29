import { 
  ServiceItem, 
  PortfolioProject, 
  BeforeAfterPair, 
  BlogArticle, 
  FaqItem 
} from './types';

export const servicesData: ServiceItem[] = [
  {
    id: 'instagram-posts',
    title: 'Instagram Ads That Stop the Scroll',
    titleAr: 'إعلانات إنستغرام توقف التمرير',
    description: 'Hook attention in 0.3 seconds. Drive profile visits, DMs, and link clicks.',
    descriptionAr: 'اجذب الانتباه خلال 0.3 ثانية. ضاعف زيارات الملف الشخصي، الرسائل المباشرة، والنقرات على الروابط.',
    icon: 'Instagram',
    ctaText: 'Get Scroll-Stopping Ads',
    category: 'social'
  },
  {
    id: 'facebook-ads',
    title: 'Facebook Ads That Lower CPA',
    titleAr: 'إعلانات فيسبوك لخفض تكلفة العميل (CPA)',
    description: 'Pixel-perfect layouts optimized for Meta\'s algorithm to reduce ad costs.',
    descriptionAr: 'مخططات مثالية البكسل ومحسنة لخوارزمية ميتا لتقليل تكاليف الإعلانات ومضاعفة العائد.',
    icon: 'Facebook',
    ctaText: 'Lower My CPA Now',
    category: 'ads'
  },
  {
    id: 'carousel-design',
    title: 'Carousel Ads That Tell Stories',
    titleAr: 'إعلانات الدوار التي تسرد القصص (Carousel)',
    description: 'Multi-slide sequences that increase dwell time and push users to swipe to buy.',
    descriptionAr: 'شرائح متسلسلة تزيد من وقت بقاء المستخدمين وتدفعهم للتمرير والشراء الفوري.',
    icon: 'Layers',
    ctaText: 'Boost Storytelling Ads',
    category: 'social'
  },
  {
    id: 'pinterest-pins',
    title: 'Pinterest Pins That Drive Traffic',
    titleAr: 'دبابيس بينتيريست لجلب الزيارات الكثيفة',
    description: 'Search-optimized visuals designed to rank and redirect to your storefront.',
    descriptionAr: 'تصاميم بصرية محسنة لمحركات البحث ومصممة للتصدر وجلب العملاء مباشرة لمتجرك.',
    icon: 'Pin',
    ctaText: 'Drive Direct Web Traffic',
    category: 'social'
  },
  {
    id: 'restaurant-ads',
    title: 'Restaurant Ads That Trigger Hunger',
    titleAr: 'إعلانات مطاعم تحرك الجوع وتجذب الطلبات',
    description: 'Sensory-rich layouts for menus, deals, and local campaigns that drive orders.',
    descriptionAr: 'تنسيقات غنية بالحواس للقوائم والعروض والوجبات المحلية تزيد من طلبات الطعام فوراً.',
    icon: 'Utensils',
    ctaText: 'Get Hungry Customers',
    category: 'industry'
  },
  {
    id: 'beauty-ads',
    title: 'Beauty Ads That Sell Transformation',
    titleAr: 'إعلانات التجميل لبيع التأثير والتحول الجمالي',
    description: 'Editorial-grade designs highlighting texture, results, and emotional desire.',
    descriptionAr: 'تصاميم بمستوى المجلات التحريرية تبرز الملمس والنتائج الملموسة وتبني الرغبة العاطفية.',
    icon: 'Sparkles',
    ctaText: 'Sell Transformation Aesthetics',
    category: 'industry'
  },
  {
    id: 'healthcare-ads',
    title: 'Healthcare Creatives That Build Trust',
    titleAr: 'تصاميم الرعاية الصحية لبناء الثقة الكاملة',
    description: 'Clear, empathetic layouts for clinics and doctors that convert consultations.',
    descriptionAr: 'مخططات واضحة ومتعاطفة للعيادات والأطباء تسهم في تحويل القراء إلى استشارات حقيقية.',
    icon: 'HeartPulse',
    ctaText: 'Build Patient Confidence',
    category: 'industry'
  },
  {
    id: 'real-estate-ads',
    title: 'Real Estate Showcases That Sell Lifestyle',
    titleAr: 'عروض عقارية تبيع نمط الحياة الراقي',
    description: 'Premium layouts capturing architectural beauty, location, and investment value.',
    descriptionAr: 'تصاميم متميزة تبرز الجمال المعماري والموقع المتميز والقيمة الاستثمارية للعقارات.',
    icon: 'Building',
    ctaText: 'Showcase Properties Beautifully',
    category: 'industry'
  },
  {
    id: 'ecommerce-ads',
    title: 'E-commerce Banners That Push Checkout',
    titleAr: 'لافتات تجارة إلكترونية تدفع لإتمام الشراء',
    description: 'Direct-response product banners with clear pricing, features, and urgency.',
    descriptionAr: 'لافتات منتجات استجابة مباشرة توضح الأسعار والمزايا وحالة الاستعجال لجلب المبيعات.',
    icon: 'ShoppingBag',
    ctaText: 'Increase Checkout Ratios',
    category: 'ads'
  },
  {
    id: 'ai-product-images',
    title: 'AI-Enhanced Product Photography',
    titleAr: 'تصوير المنتجات المعزز بالذكاء الاصطناعي',
    description: 'Hyper-realistic product renders and backgrounds that look like 10k studio shots.',
    descriptionAr: 'خلفيات منتجات ورسومات واقعية للغاية تبدو وكأنها التقطت في استوديو بتكلفة 10 آلاف دولار.',
    icon: 'Camera',
    ctaText: 'Generate Studio photography',
    category: 'tech'
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity Kits',
    titleAr: 'حزم الهوية البصرية للشبكات الاجتماعية',
    description: 'Cohesive typography, color codes, and layout systems for unified branding.',
    descriptionAr: 'أنظمة خطوط متسقة، أكواد ألوان، ومخططات واضحة تضمن توحيد علامتك التجارية بالكامل.',
    icon: 'Crown',
    ctaText: 'Get Brand Identity Kit',
    category: 'tech'
  },
  {
    id: 'marketing-creatives',
    title: 'Seasonal Campaign Packs',
    titleAr: 'حزم الحملات الإعلانية الموسمية والخصومات',
    description: 'Black Friday, holidays, and flash sale templates built for urgency.',
    descriptionAr: 'قوالب خاصة بالجمعة البيضاء، الأعياد، والتخفيضات السريعة ومصممة لبناء دافع الاستعجال.',
    icon: 'Megaphone',
    ctaText: 'Access Seasonal Packs',
    category: 'ads'
  }
];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'port-1',
    title: 'Sienna Luxury Apartments Campaign',
    titleAr: 'حملة شقق سيينا الفاخرة',
    category: 'Real Estate',
    description: 'Elegant Instagram stories and feed layouts highlighting prestige amenities, pricing transparently, and a direct booking CTA.',
    descriptionAr: 'قصص ومخططات إنستغرام أنيقة تبرز وسائل الراحة الفاخرة، والأسعار بشفافية، وزر حجز مباشر.',
    engagementIncrease: '+240%',
    conversionRate: '4.8%',
    client: 'Sienna Luxury Apartments',
    clientAr: 'شقق سيينا الفاخرة',
    goal: 'Increase booking inquiries for 3 remaining penthouses.',
    goalAr: 'زيادة طلبات الحجز للـ 3 شقق بنتهاوس المتبقية.',
    challenge: 'High-end market requires trust and exclusivity, not hard selling.',
    challengeAr: 'السوق الراقي يتطلب بناء الثقة والحصرية الشديدة وليس أسلوب البيع الملح والمباشر.',
    solution: 'Elegant Instagram stories with transparent pricing and direct booking CTA.',
    solutionAr: 'قصص إنستغرام أنيقة للغاية بأسعار واضحة تماماً مع زر لاتخاذ إجراء الحجز المباشر المريح.',
    mockupDetails: {
      title: 'Sienna Luxury',
      hook: 'Only 3 Penthouses Left',
      badge: 'REAL ESTATE',
      accentColor: '#B45309', // warm gold/amber
      theme: 'luxury',
      headline: 'Architectural Masterpieces in the Heart of Riyadh',
      buttonText: 'Book Private Tour'
    }
  },
  {
    id: 'port-2',
    title: 'Glow Skin Cosmetics Rebrand',
    titleAr: 'إعادة إطلاق Glow Skin لمستحضرات التجميل',
    category: 'Beauty',
    description: 'Soft, minimalist aesthetic emphasizing pure organic ingredients, cruelty-free certification, and real transformation reviews.',
    descriptionAr: 'جمالية ناعمة وبسيطة تركز على المكونات العضوية النقية، وشهادات الخلو من القسوة، وآراء العملاء الحقيقية.',
    engagementIncrease: '+310%',
    conversionRate: '6.2%',
    client: 'Glow Skin Cosmetics',
    clientAr: 'مستحضرات التجميل جلو سكين',
    goal: 'Rebrand launch for organic skincare line.',
    goalAr: 'إعادة إطلاق وتدشين خط مستحضرات العناية بالبشرة العضوية بالكامل.',
    challenge: 'Needed to justify premium pricing against mass-market competitors.',
    challengeAr: 'تطلب الأمر تبرير الأسعار المرتفعة والمميزة أمام المنافسين العاديين في السوق.',
    solution: 'Minimalist aesthetic emphasizing organic certification + transformation reviews.',
    solutionAr: 'مظهر جمالي بسيط يركز بقوة على الشهادات العضوية والتحول الفعلي عبر آراء العملاء بالصور.',
    mockupDetails: {
      title: 'GLOW SKINCARE',
      hook: '100% Organic Formula',
      badge: 'BEAUTY',
      accentColor: '#EC4899', // pink
      theme: 'light',
      headline: 'Hydrate & Illuminate Your Natural Radiance',
      buttonText: 'Shop Vegan Range'
    }
  },
  {
    id: 'port-3',
    title: 'Artisan Cafe Launch Creatives',
    titleAr: 'تصاميم إطلاق مقهى أرتيزان',
    category: 'Restaurants',
    description: 'Moody, high-contrast visual ads highlighting organic beans, rustic roasting setups, and exclusive morning bundle discounts.',
    descriptionAr: 'إعلانات مرئية ذات تباين عالٍ تبرز حبوب البن العضوية، ومراحل التحميص التقليدية، وخصومات الصباح الحصرية.',
    engagementIncrease: '+185%',
    conversionRate: '5.4%',
    client: 'Artisan Cafe',
    clientAr: 'مقهى أرتيزان الإبداعي',
    goal: 'Launch new morning bundle and drive foot traffic.',
    goalAr: 'إطلاق باقة عروض الصباح الجديدة وزيادة حركة زوار المقهى على الأرض.',
    challenge: 'Local competition with bigger budgets.',
    challengeAr: 'مواجهة منافسة محلية شرسة للغاية مع ميزانيات تسويق ضخمة من المقاهي المجاورة.',
    solution: 'Moody, high-contrast visuals with rustic roasting setups and exclusive discount.',
    solutionAr: 'تصاميم جذابة وعميقة التباين تستعرض تحميص البن الطازج مع خصم صباحي حصري محفز.',
    mockupDetails: {
      title: 'ARTISAN COFFEE',
      hook: 'Freshly Roasted Daily',
      badge: 'FOOD & DRINK',
      accentColor: '#D4AF37', // gold
      theme: 'dark',
      headline: 'Sip Perfection. Pure Single-Origin Arabica.',
      buttonText: 'Claim Free Espresso'
    }
  },
  {
    id: 'port-4',
    title: 'Pulse Gym High-Energy Ads',
    titleAr: 'إعلانات نادي نبض الرياضي الحيوية',
    category: 'Fitness',
    description: 'Dynamic typography paired with modern dark overlays and bright neon green text to build strong motivation and drive memberships.',
    descriptionAr: 'خطوط ديناميكية ممزوجة بتأثيرات داكنة حديثة ونصوص فسفورية لزيادة الحماس والاشتراك في العضوية.',
    engagementIncrease: '+150%',
    conversionRate: '3.9%',
    client: 'Pulse Gym',
    clientAr: 'نادي نبض اللياقة البدنية',
    goal: 'Drive membership sign-ups without contracts.',
    goalAr: 'زيادة معدل الاشتراكات الجديدة في عضوية النادي بدون عقود والتزامات طويلة.',
    challenge: 'Gym market is saturated; needs motivation, not information.',
    challengeAr: 'سوق نوادي اللياقة مشبع بالكامل؛ يحتاج المستهلك هنا للمحفز الداخلي وليس مجرد نصوص معلوماتية.',
    solution: 'Dynamic typography + dark overlays + neon accents for energy.',
    solutionAr: 'تطبيق خطوط ديناميكية قوية مع طبقات تعتيم بصرية وومضات نيون فسفورية تشع بالطاقة والإنجاز.',
    mockupDetails: {
      title: 'PULSE FITNESS',
      hook: 'No Contracts. Cancel Anytime.',
      badge: 'FITNESS',
      accentColor: '#10B981', // green
      theme: 'neon',
      headline: 'Redefine Your Limits. Join Riyadh’s Elite Gym.',
      buttonText: 'Start 3-Day Free Pass'
    }
  },
  {
    id: 'port-5',
    title: 'Lumiere Premium Timepieces',
    titleAr: 'حملة ساعات لوميير الفاخرة',
    category: 'Fashion',
    description: 'Apple-inspired luxurious advertising layouts focusing on detailed craftsmanship, heritage, and limited edition countdowns.',
    descriptionAr: 'مخططات إعلانية فاخرة مستوحاة من آبل تركز على تفاصيل الحرفية والتراث والعد التنازلي للقطع المحدودة.',
    engagementIncrease: '+420%',
    conversionRate: '7.1%',
    client: 'Lumiere Chrono',
    clientAr: 'ساعات لوميير الفاخرة',
    goal: 'Sell 250 limited edition timepieces.',
    goalAr: 'بيع وإتمام مبيعات 250 ساعة ذات إصدار محدود بالكامل.',
    challenge: 'Luxury requires scarcity and heritage, not discounts.',
    challengeAr: 'يتطلب بيع السلع الفاخرة إبراز الندرة الشديدة والتراث العريق، وليس تقديم الخصومات.',
    solution: 'Apple-inspired layouts focusing on craftsmanship and limited countdown.',
    solutionAr: 'تخطيطات مستوحاة من أسلوب آبل البصري الفاخر تركز على دقة الصنع والعد التنازلي المحدود للقطع.',
    mockupDetails: {
      title: 'LUMIERE CHRONO',
      hook: 'Numbered Edition / 250 Units',
      badge: 'LUXURY FASHION',
      accentColor: '#D4AF37', // Gold
      theme: 'luxury',
      headline: 'Timeless Precision Crafted for Visionaries',
      buttonText: 'Secure Your Serial Number'
    }
  },
  {
    id: 'port-6',
    title: 'Apex SaaS Productivity Engine',
    titleAr: 'حملة محرك الإنتاجية Apex SaaS',
    category: 'Technology',
    description: 'Sleek dark mode screenshots, colorful metric charts, and feature-focused benefits targeting modern digital workflows.',
    descriptionAr: 'لقطات شاشة أنيقة بالوضع الداكن، ومخططات بيانية ملونة، وفوائد تركز على الميزات وتستهدف سير العمل الحديث.',
    engagementIncrease: '+290%',
    conversionRate: '5.1%',
    client: 'Apex Engine',
    clientAr: 'محرك الإنتاجية الأسرع Apex',
    goal: 'Increase free trial sign-ups for productivity tool.',
    goalAr: 'زيادة معدل التسجيل في الفترة التجريبية المجانية لأداة زيادة الإنتاجية الرقمية.',
    challenge: 'B2B buyers need clarity on integration, not just features.',
    challengeAr: 'يحتاج مشترو قطاع الأعمال والشركات لضمان توافق وتكامل الأداة، وليس مجرد سرد المزايا.',
    solution: 'Dark mode screenshots + metric charts + Slack/Notion integration badges.',
    solutionAr: 'استعراض واجهة الأداة بالوضع الداكن الفاخر مع رسوم بيانية تفاعلية وشارات توضح تكامل Slack و Notion.',
    mockupDetails: {
      title: 'APEX ENGINE',
      hook: 'Integrates with Slack & Notion',
      badge: 'SOFTWARE',
      accentColor: '#2563EB', // Blue
      theme: 'neon',
      headline: 'Reclaim 10 Hours Every Week. Automatically.',
      buttonText: 'Integrate Instantly'
    }
  }
];

export const beforeAfterPairs: BeforeAfterPair[] = [
  {
    id: 'ba-1',
    category: 'E-commerce Fashion',
    before: {
      image: 'https://picsum.photos/seed/uglyad/600/600',
      tagline: 'Weak Ad Creatives (Low Performance)',
      description: 'Typical design made without marketing psychology. No clear hierarchy, dull typography, and excessive technical jargon.',
      issues: [
        'No core value proposition / hook',
        'Messy alignment and tiny, illegible text',
        'Muted product images that fail to catch the eye',
        'Generic, uninspiring "Click Here" call-to-action'
      ]
    },
    after: {
      image: 'https://picsum.photos/seed/premiumad/600/600',
      tagline: 'Lumora Premium Creative (High Conversion)',
      description: 'Designed using our Conversion-First strategy. Bold typography, psychological hierarchy, rich colors, and immediate value.',
      improvements: [
        'Immediate hook that solves a real user problem',
        'High-contrast glassmorphic card framing the product',
        'Vibrant background styling matching the emotional vibe',
        'Clear, low-friction, action-focused CTA button'
      ]
    }
  }
];

export const trustMetrics = {
  en: [
    { value: '500+', label: 'Premium Designs Created', desc: 'Crafted with absolute conversion precision.' },
    { value: '100+', label: 'Global Businesses Helped', desc: 'From hyper-local shops to VC-backed startups.' },
    { value: '15+', label: 'Niche Industries Served', desc: 'Tailored formulas for real estate, beauty, food, & more.' },
    { value: '24 Hours', label: 'Express Concept Delivery', desc: 'Lightning-fast drafts so you never delay a campaign.' }
  ],
  ar: [
    { value: '500+', label: 'تصاميم متميزة تم إنشاؤها', desc: 'صُنعت بدقة متناهية لزيادة المبيعات.' },
    { value: '100+', label: 'شركات تم مساعدتها عالمياً', desc: 'من المتاجر المحلية إلى الشركات الناشئة الممولة.' },
    { value: '15+', label: 'قطاعات تخصصية مختلفة', desc: 'صيغ مخصصة للعقارات، التجميل، الأطعمة، والمزيد.' },
    { value: '24 ساعة', label: 'تسليم المسودات السريعة', desc: 'مسودات سريعة للغاية لتبدأ حملاتك دون أي تأخير.' }
  ]
};

export const whyChooseUsData = {
  en: [
    {
      title: 'Your First Draft in 24 Hours',
      desc: 'Stop waiting weeks. Get your first high-converting, custom-tailored advertising draft delivered in less than 24 hours.'
    },
    {
      title: 'You Own 100% of Everything',
      desc: 'You retain full commercial rights and 100% intellectual property ownership. No licensing fees, no restrictions, use anywhere forever.'
    },
    {
      title: 'Designed for Conversions, Not Likes',
      desc: 'We do not sell pretty art. We use AIDA psychology, direct-response triggers, and loss aversion to turn random scrollers into active buyers.'
    },
    {
      title: 'Flat Pricing. No Surprises.',
      desc: 'Pay a simple flat price. Enjoy unlimited revisions, zero hidden fees, and absolutely no long-term contract lock-ins.'
    }
  ],
  ar: [
    {
      title: 'مسودتك الأولى في 24 ساعة',
      desc: 'لا تنتظر لأسابيع. احصل على أول مسودة إعلانية مصممة ومخصصة لك وعالية التحويل في غضون 24 ساعة فقط.'
    },
    {
      title: 'تمتلك 100٪ من كل شيء',
      desc: 'تحتفظ بحقوق الاستخدام التجاري الكاملة والملكية الفكرية بنسبة 100٪ للتصاميم. بدون رسوم ترخيص، واستخدمها في أي مكان وإلى الأبد.'
    },
    {
      title: 'تصاميم للمبيعات، وليس الإعجابات',
      desc: 'نحن لا نبيع لوحات فنية مفرغة؛ بل نعتمد على علم النفس التسويقي AIDA، ومحفزات الاستجابة المباشرة لتحويل المتصفحين إلى مشترين.'
    },
    {
      title: 'أسعار ثابتة بدون مفاجآت',
      desc: 'ادفع سعراً ثابتاً وشفافاً. استمتع بتعديلات غير محدودة، بدون أي رسوم خفية، وبدون أي عقود طويلة الأمد تلتزم بها.'
    }
  ]
};

export const howItWorksSteps = {
  en: [
    { step: '1', title: 'Choose Your Package', desc: 'Pick the pricing tier that matches your current campaign goals and checkout securely.' },
    { step: '2', title: 'Submit Your Brief', desc: 'Complete our simple 2-minute questionnaire about your product, target audience, and brand guidelines.' },
    { step: '3', title: 'Review Your First Draft', desc: 'Get your custom-crafted direct-response design within 24 hours of brief submission.' },
    { step: '4', title: 'Refine and Scale', desc: 'Use your unlimited revisions to perfect the design, download files, and watch your ad cost plummet.' }
  ],
  ar: [
    { step: '1', title: 'اختر باقتك المفضلة', desc: 'اختر المستوى السعري الذي يناسب ميزانيتك وأهداف حملتك الإعلانية وأتمم الدفع بأمان.' },
    { step: '2', title: 'أرسل تفاصيل طلبك', desc: 'أجب عن استبياننا البسيط خلال دقيقتين لتخبرنا عن منتجك، جمهورك المستهدف، ودليل هويتك البصرية.' },
    { step: '3', title: 'راجع المسودة الأولى', desc: 'احصل على مسودة تصميم الاستجابة المباشرة المخصصة لك في غضون 24 ساعة فقط من إرسال التفاصيل.' },
    { step: '4', title: 'عدّل وانطلق نحو النمو', desc: 'استغل التعديلات غير المحدودة للوصول للتصميم المثالي، حمّل الملفات، وشاهد انخفاض تكلفة إعلاناتك فورا.' }
  ]
};

export const pricingPlans = {
  en: [
    {
      id: 'starter',
      name: 'Starter',
      price: '$29',
      subtext: 'Ideal for small businesses starting their paid ad campaigns.',
      badge: 'Best for Beginners',
      isPopular: false,
      features: [
        '5 Custom Designs',
        '1 Revision Cycle',
        'Fast & Adaptable Delivery',
        '100% Commercial Use Rights'
      ],
      cta: 'Choose Starter Plan'
    },
    {
      id: 'growth',
      name: 'Growth ⭐',
      price: '$79',
      subtext: 'Perfect for active brands looking to boost social traction.',
      badge: 'Most Popular',
      isPopular: true,
      features: [
        '15 Custom Designs',
        'Unlimited Revisions',
        'Priority Design Execution',
        '3 Platform-Ready Aspect Ratios'
      ],
      cta: 'Choose Growth Plan'
    },
    {
      id: 'business',
      name: 'Business',
      price: '$149',
      subtext: 'Comprehensive production for scaling e-commerce & professional services.',
      badge: 'Best Value',
      isPopular: false,
      features: [
        '30 Custom Designs',
        'Full Source Files (PSD/Figma)',
        'VVIP High Priority Production',
        'Free Marketing & Ads Consultation'
      ],
      cta: 'Choose Business Plan'
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '$299',
      subtext: 'Ultimate tier for large organizations & marketing agencies seeking extreme scale.',
      badge: 'Elite Agency Value',
      isPopular: false,
      features: [
        '60 Monthly Designs',
        'Content Management & Scheduling',
        '24/7 Ongoing VIP Support',
        'Dedicated AI & Copywriter Team'
      ],
      cta: 'Choose Agency Plan'
    }
  ],
  ar: [
    {
      id: 'starter',
      name: 'Starter',
      price: '$29',
      subtext: 'مثالية للمشاريع الصغيرة لتجربة الحملات الإعلانية الممولة.',
      badge: 'الأفضل للبدايات',
      isPopular: false,
      features: [
        '5 تصاميم مخصصة احترافية',
        'تعديل واحد فقط للمسودة',
        'تسليم سريع ومرن للملفات',
        'حقوق ملكية تجارية كاملة 100٪'
      ],
      cta: 'اختر باقة Starter'
    },
    {
      id: 'growth',
      name: 'Growth ⭐',
      price: '$79',
      subtext: 'مثالية للمشاريع النشطة لزيادة التفاعل والمبيعات على الشبكات.',
      badge: 'الأكثر شعبية',
      isPopular: true,
      features: [
        '15 تصميمًا إعلانيًا مخصصًا',
        'تعديلات ومراجعات غير محدودة للوصول للكمال',
        'أولوية قصوى وتنسيق فوري في خط الإنتاج',
        '3 مقاسات مختلفة تناسب جميع منصات التواصل'
      ],
      cta: 'اختر باقة Growth'
    },
    {
      id: 'business',
      name: 'Business',
      price: '$149',
      subtext: 'باقة متكاملة للمتاجر الإلكترونية الطموحة والشركات الاحترافية.',
      badge: 'أفضل قيمة للمال',
      isPopular: false,
      features: [
        '30 تصميمًا إعلانيًا مخصصًا ومميزًا',
        'ملفات المصدر الأصلية بالكامل (PSD / Figma)',
        'أولوية VVIP فائقة في التصميم والإنتاج',
        'استشارة تسويقية وإعلانية مجانية مع خبير مخصص'
      ],
      cta: 'اختر باقة Business'
    },
    {
      id: 'agency',
      name: 'Agency',
      price: '$299',
      subtext: 'الباقة القصوى للعلامات التجارية والوكالات الساعية للتوسع الهائل والمستمر.',
      badge: 'خيار النخبة والوكالات',
      isPopular: false,
      features: [
        '60 تصميمًا شهريًا مخصصًا واحترافيًا',
        'إدارة المحتوى بالكامل وتنسيق النشر',
        'دعم فني وتنسيقي مستمر على مدار الساعة 24/7',
        'فريق عمل إبداعي وكاتب إعلانات مخصص لعلامتك'
      ],
      cta: 'اختر باقة Agency'
    }
  ]
};

export const blogArticles: BlogArticle[] = [
  {
    id: 'art-1',
    slug: 'instagram-marketing-secret-conversions',
    title: 'The Psychology of Thumb-Stopping Instagram Creatives',
    titleAr: 'علم النفس وراء منشورات إنستغرام الجاذبة للانتباه والمحفزة للشراء',
    summary: 'Discover how elite digital designers leverage color theory, emotional framing, and typography hierarchy to force passive viewers to scroll-stop and click.',
    summaryAr: 'اكتشف كيف يستخدم مصممو النخبة نظريات الألوان، والتأطير العاطفي، والخطوط لجعل المشاهدين العابرين يتوقفون ويضغطون على إعلاناتك.',
    category: 'Instagram Marketing',
    date: 'June 25, 2026',
    readTime: '6 min read',
    author: {
      name: 'Lina Al-Hassan',
      role: 'Creative Director',
      avatar: 'https://picsum.photos/seed/lina/100/100'
    },
    image: 'https://picsum.photos/seed/insta-blog/800/500',
    content: `When users browse Instagram, they are in a state of rapid visual scanning. Their thumb moves unconsciously. To stop them, you need more than a pretty graphic. You need a psychological disruptor.

### 1. The Power of High Contrast Framing
Our testing of over 5,000 ad creatives shows that images using "glassmorphism card overlays" inside feed layouts achieve a 45% higher CTR than full-screen photos. Why? Because the clean borders mimic software windows, signaling important metadata that the brain wants to parse.

### 2. Crafting a Hero Typography Hierarchy
- **The Hook (50-60% of vertical size):** Focus entirely on the immediate pain point. NEVER write "We Sell Soap". Write "Soothe Dry Skin Tonight."
- **The Explainer (14-16px):** Direct-benefit description, maximum 2 short sentences.
- **The Visual Anchor:** Place your product directly intersecting the line of sight (bottom-right on desktop, center-left on mobile).

By adjusting these visual cues, you eliminate visual noise and streamline the path to purchase.`
  },
  {
    id: 'art-2',
    slug: 'facebook-ads-lower-cpa-psychology',
    title: 'How to Lower Your Meta CPA by 38% Using Psychological Ads',
    titleAr: 'كيف تخفض تكلفة إعلانات فيسبوك (CPA) بنسبة 38٪ بالتصاميم النفسية',
    summary: 'Advertising algorithms reward user engagement. Learn how designing for emotional benefits instead of software features drives record-high CTRs.',
    summaryAr: 'تكافئ خوارزميات الإعلانات التفاعل المرتفع. تعلم كيف يساهم التركيز على الفوائد النفسية بدلاً من الميزات التقنية في خفض تكاليفك وزيادة أرباحك.',
    category: 'Facebook Ads',
    date: 'June 18, 2026',
    readTime: '5 min read',
    author: {
      name: 'Marc Sterling',
      role: 'CRO Strategist',
      avatar: 'https://picsum.photos/seed/marc/100/100'
    },
    image: 'https://picsum.photos/seed/fb-blog/800/500',
    content: `Lowering Facebook CPA isn't just about tweaking your bids or target audiences. The single most powerful lever is the "Creative."

### The Problem with "Feature-Larping"
Most brands fill their creatives with complex technical statistics. Their designs scream "We have 4 cores, 12GB of RAM, and cloud storage."
But buyers do not buy specs. They buy solutions.

### The PAS Creative Framework
1. **Pain (المرض):** Visually portray the state of irritation or struggle. Use cool, high-contrast, slightly muted colors.
2. **Agitation (التهيج):** Amplify the cost of doing nothing. Use warning labels, countdown borders, or metric charts.
3. **Solution (العلاج):** Introduce your brand as the heroic relief. Use warm, glowing, high-contrast gold accents and clear action buttons.

By restructuring your visual creative into this logical narrative, your engagement rate increases, forcing Meta's algorithm to award you lower ad costs.`
  },
  {
    id: 'art-3',
    slug: 'arabic-design-localization-market',
    title: 'Visual Localization: Unleashing Arabic-First Design Patterns',
    titleAr: 'التوطين البصري: إطلاق أنماط التصميم الموجهة للغة العربية أولاً',
    summary: 'Riyadh and Dubai are leading global commerce. Designing in Arabic is more than translating text—it requires layout flipping and cultural resonance.',
    summaryAr: 'تقود الرياض ودبي التجارة العالمية اليوم. إن التصميم باللغة العربية يتجاوز مجرد الترجمة البسيطة للنصوص، بل يتطلب قلب المخططات كلياً ومراعاة الثقافة البصرية.',
    category: 'Branding',
    date: 'June 12, 2026',
    readTime: '8 min read',
    author: {
      name: 'Amir Al-Masry',
      role: 'Localization Lead',
      avatar: 'https://picsum.photos/seed/amir/100/100'
    },
    image: 'https://picsum.photos/seed/arabic-blog/800/500',
    content: `Translating an ad from English to Arabic and keeping the visual layout identical is a recipe for high bounce rates. To win the GCC and MENA markets, you must design "Arabic-First."

### Key Principles of Arabic Visual Localization:
1. **RTL Reading Trajectory:** The eye travels from right to left. Therefore, your primary hook, brand logo, and emotional anchor must reside on the right, guiding the reader naturally to the CTA on the left.
2. **Font Elegance:** Throw away standard system fonts. High-performing Arabic ads utilize beautiful modern geometric Arabic typography like *Outfit-style Arabic* or *Tajawal*, which balances curves and line thickness perfectly.
3. **Color and Cultural Codes:** Gold, deep royal blues, and off-whites evoke heritage, elite quality, and immense trust in corporate and premium GCC sectors.

Localizing visuals builds an instant emotional bridge that translation alone can never achieve.`
  }
];

export const faqData: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'How long does delivery take?',
    questionAr: 'كم يستغرق تسليم التصاميم؟',
    answer: 'Our standard turnaround for first concepts is under 24 hours. Once concepts are approved, final file downloads are prepared instantly.',
    answerAr: 'يستغرق التسليم القياسي للمسودات الأولى أقل من 24 ساعة فقط. وبمجرد الموافقة، يتم إعداد ملفات التحميل فوراً.',
    category: 'delivery'
  },
  {
    id: 'faq-2',
    question: 'Can I request revisions?',
    questionAr: 'هل يمكنني طلب تعديلات ومراجعات؟',
    answer: 'Absolutely! Depending on your selected tier, we offer multiple or unlimited revision cycles. We iterate with you until you are 100% satisfied with the outcome.',
    answerAr: 'بكل تأكيد! نوفر دورات مراجعة متعددة أو غير محدودة بحسب الباقة التي تختارها. نحن نعمل معك يداً بيد لتعديل التصاميم وتطويرها حتى تصل للرضا التام.',
    category: 'revisions'
  },
  {
    id: 'faq-3',
    question: 'Can you design in Arabic?',
    questionAr: 'هل صممت بـاللغة العربية؟',
    answer: 'Yes! Lumora Design is bilingual. We specialize in high-converting, localized designs in both perfect modern Arabic (with native GCC cultural copywriting) and fluent marketing English.',
    answerAr: 'نعم بالتأكيد! نحن نوفر تصاميم وحملات ثنائية اللغة. نتخصص في تقديم إعلانات وتصاميم معربة كلياً ومصاغة بلهجات تناسب السوق الخليجي والعربي لضمان تفاعل حقيقي.',
    category: 'language'
  },
  {
    id: 'faq-4',
    question: 'Can you design in English?',
    questionAr: 'هل تصممون باللغة الإنجليزية؟',
    answer: 'Yes! We craft world-class English advertising creatives utilizing premium Anglo-American direct response copywriting rules.',
    answerAr: 'نعم! نصمم إعلانات عالمية المستوى باللغة الإنجليزية بالاعتماد على قواعد الكتابة الإعلانية المباشرة والجاذبة للجمهور الغربي والأجنبي.',
    category: 'language'
  },
  {
    id: 'faq-5',
    question: 'Do I own the final files?',
    questionAr: 'هل أمتلك حقوق الملكية للملفات النهائية؟',
    answer: 'Yes, you retain 100% legal ownership of every delivered file. You receive full commercial rights, layered files if needed, and high-definition renders ready for immediate publication.',
    answerAr: 'نعم، تمتلك حقوق الملكية الفكرية والقانونية 100٪ لكل ملف يتم تسليمه لك. تحصل على حقوق استخدام تجارية كاملة، والملفات عالية الدقة جاهزة للنشر الفوري.',
    category: 'legal'
  },
  {
    id: 'faq-6',
    question: 'Can you create custom AI product images?',
    questionAr: 'هل يمكنكم إنشاء صور منتجات مخصصة بالذكاء الاصطناعي؟',
    answer: 'Yes, we use hyper-advanced generative AI models combined with master lighting editors to construct studio-grade product photoshoots. Just send us a clean photo of your product on any table.',
    answerAr: 'نعم، نستخدم نماذج ذكاء اصطناعي توليدية فائقة التطور مدمجة مع محرري إضاءة محترفين لإنتاج صور منتجات بمستوى الاستوديوهات الفاخرة. فقط أرسل لنا صورة نظيفة لمنتجك.',
    category: 'technology'
  },
  {
    id: 'faq-7',
    question: 'What industries do you work with?',
    questionAr: 'ما هي القطاعات والمجالات التي تعملون معها؟',
    answer: 'We tailor visual marketing formulas for e-commerce, real estate developers, fine beauty/cosmetic brands, dental and health clinics, upscale restaurants/cafes, gyms, personal brands, and high-growth startups.',
    answerAr: 'نقوم بتفصيل استراتيجيات تسويقية بصرية تناسب متاجر التجارة الإلكترونية، التطوير العقاري، العلامات التجارية الفاخرة للتجميل، العيادات والمراكز الطبية، المطاعم الفاخرة والمقاهي، النوادي الرياضية، والمشاريع الناشئة.',
    category: 'industries'
  },
  {
    id: 'faq-8',
    question: 'What if I am not satisfied with the designs?',
    questionAr: 'ماذا يحدث إذا لم أكن راضيًا تمامًا عن التصاميم؟',
    answer: 'We provide a 100% satisfaction guarantee. With our revision cycles, we will continuously adjust, tweak, and refine the colors, typography, and copywriting until we match your exact marketing vision perfectly.',
    answerAr: 'نحن نقدم ضمان رضا كامل بنسبة 100٪. مع دورات المراجعة المشمولة في باقاتنا، سنستمر في تعديل وتحسين الألوان، الخطوط، والنصوص الإعلانية حتى تلائم رؤيتك التسويقية بدقة متناهية.',
    category: 'satisfaction'
  }
];
