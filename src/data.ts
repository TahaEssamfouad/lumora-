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
    title: 'Instagram Post Design',
    titleAr: 'تصميم منشورات إنستغرام',
    description: 'Stop the scroll with thumb-stopping aesthetics that turn followers into brand advocates and loyal customers.',
    descriptionAr: 'منشورات جذابة توقف التمرير، وتحول المتابعين إلى مروجين للعلامة التجارية وعملاء مخلصين.',
    icon: 'Instagram',
    ctaText: 'Get Custom Instagram Designs',
    category: 'social'
  },
  {
    id: 'facebook-ads',
    title: 'Facebook Ad Creatives',
    titleAr: 'إعلانات فيسبوك الإبداعية',
    description: 'High-converting ad designs optimized for Meta’s algorithm to lower your CPA and skyrocket purchases.',
    descriptionAr: 'تصاميم إعلانية عالية التحويل ومحسنة لخوارزمية ميتا لتقليل تكلفة الاكتساب وزيادة المبيعات.',
    icon: 'Facebook',
    ctaText: 'Optimize My Facebook Ads',
    category: 'ads'
  },
  {
    id: 'carousel-design',
    title: 'Engaging Carousel Slides',
    titleAr: 'تصميم شرائح الدوار (Carousel)',
    description: 'Story-driven multi-slide graphics that keep users swiping, increasing dwell time and brand recall.',
    descriptionAr: 'رسومات متعددة الشرائح تعتمد على السرد القصصي لتشجيع المستخدمين على التمرير وزيادة وقت التفاعل.',
    icon: 'Layers',
    ctaText: 'Boost My Engagement',
    category: 'social'
  },
  {
    id: 'pinterest-pins',
    title: 'Viral Pinterest Pins',
    titleAr: 'تصميم دبابيس بينتيريست',
    description: 'Elegant, search-optimized visual assets designed to drive massive organic traffic directly to your storefront.',
    descriptionAr: 'أصول مرئية أنيقة ومحسنة لمحركات البحث مصممة لجلب زيارات مجانية ضخمة مباشرة إلى متجرك.',
    icon: 'Pin',
    ctaText: 'Drive Organic Traffic',
    category: 'social'
  },
  {
    id: 'restaurant-ads',
    title: 'Mouth-Watering Restaurant Ads',
    titleAr: 'إعلانات المطاعم الشهية',
    description: 'Sensory-rich layouts for menus, deals, and local campaigns that make food lovers order instantly.',
    descriptionAr: 'مخططات غنية بالتفاصيل الحسية للقوائم والعروض والأسعار تجعل محبي الطعام يطلبون على الفور.',
    icon: 'Utensils',
    ctaText: 'Fill Your Tables',
    category: 'industry'
  },
  {
    id: 'beauty-ads',
    title: 'Luxury Beauty & Cosmetics Ads',
    titleAr: 'إعلانات مستحضرات التجميل الفاخرة',
    description: 'Minimal, editorial-grade designs highlighting texture, premium quality, and emotional transformations.',
    descriptionAr: 'تصاميم تحريرية بسيطة وراقية تسلط الضوء على التفاصيل والجودة الفائقة والتأثير الجمالي.',
    icon: 'Sparkles',
    ctaText: 'Elevate Your Beauty Brand',
    category: 'industry'
  },
  {
    id: 'healthcare-ads',
    title: 'Empathetic Healthcare Creatives',
    titleAr: 'إعلانات الرعاية الصحية المتعاطفة',
    description: 'Trust-first educational layouts for clinics, doctors, and wellness programs designed with clarity and care.',
    descriptionAr: 'مخططات تعليمية تركز على بناء الثقة للعيادات والأطباء والبرامج الصحية مصممة بوضوح وعناية.',
    icon: 'HeartPulse',
    ctaText: 'Build Patient Trust',
    category: 'industry'
  },
  {
    id: 'real-estate-ads',
    title: 'Prestige Real Estate Showcases',
    titleAr: 'تصاميم العقارات الفاخرة',
    description: 'Premium layouts that capture architectural beauty, property metrics, and elite lifestyle benefits.',
    descriptionAr: 'تصاميم متميزة تبرز الجمال المعماري، وتفاصيل العقارات، ومزايا نمط الحياة الفاخر.',
    icon: 'Building',
    ctaText: 'Sell Your Properties',
    category: 'industry'
  },
  {
    id: 'ecommerce-ads',
    title: 'High-Yield E-commerce Banners',
    titleAr: 'لافتات التجارة الإلكترونية عالية العائد',
    description: 'Direct-response product banners styled to feature clear pricing, features, and urgent social proof.',
    descriptionAr: 'لافتات منتجات للاستجابة المباشرة مصممة لعرض الأسعار والمميزات والضمانات بوضوح.',
    icon: 'ShoppingBag',
    ctaText: 'Scale E-commerce Sales',
    category: 'ads'
  },
  {
    id: 'ai-product-images',
    title: 'AI Product Photography & Editing',
    titleAr: 'تصوير وتحرير المنتجات بالذكاء الاصطناعي',
    description: 'Hyper-realistic AI-enhanced product backgrounds and context renders that look like a $10,000 studio shoot.',
    descriptionAr: 'خلفيات منتجات واقعية للغاية ومعززة بالذكاء الاصطناعي تبدو وكأنها جلسة تصوير في استوديو فاخر.',
    icon: 'Camera',
    ctaText: 'Generate Premium Photos',
    category: 'tech'
  },
  {
    id: 'brand-identity',
    title: 'Social Brand Identity Kits',
    titleAr: 'حزم الهوية البصرية للشبكات الاجتماعية',
    description: 'Cohesive guidelines covering custom typography, color codes, layouts, and styles for unified branding.',
    descriptionAr: 'إرشادات متماسكة تشمل الخطوط المخصصة، الألوان، والمخططات للحفاظ على هوية موحدة لعلامتك التجارية.',
    icon: 'Crown',
    ctaText: 'Align Your Branding',
    category: 'tech'
  },
  {
    id: 'marketing-creatives',
    title: 'Seasonal Marketing Campaigns',
    titleAr: 'الحملات التسويقية الموسمية',
    description: 'Highly responsive and conversion-focused templates for Black Friday, holidays, and flash sales.',
    descriptionAr: 'قوالب سريعة الاستجابة ومحسنة للتحويل لمناسبات مثل الجمعة البيضاء، والأعياد، والتخفيضات السريعة.',
    icon: 'Megaphone',
    ctaText: 'Launch Your Campaign',
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
      title: 'AI + Human Creativity',
      desc: 'We merge hyper-intelligent AI asset generation with elite human copywriting to create creatives that outperform competitors.'
    },
    {
      title: '24-Hour Draft Turnaround',
      desc: 'Stop waiting weeks. Get your first high-converting advertising draft delivered in less than 24 hours.'
    },
    {
      title: 'Commercial Use Rights',
      desc: 'You retain 100% intellectual property ownership of every single design. Ready for digital, print, and paid amplification.'
    },
    {
      title: 'Unlimited Creative Control',
      desc: 'With our premium packages, we adapt to your feedback instantly until you are 100% proud of the final campaign.'
    },
    {
      title: 'Premium Support Desk',
      desc: 'Direct, VIP communication channel with your dedicated strategist. No middle managers or slow email tickets.'
    },
    {
      title: 'Conversion-Focused Strategy',
      desc: 'We do not sell pretty art. We design high-performing psychological triggers that turn random viewers into cash customers.'
    },
    {
      title: 'Fair & Transparent Pricing',
      desc: 'No hidden fees, no long contracts, and no onboarding charges. Pay a simple flat price tailored to your actual workload.'
    },
    {
      title: 'Modern Marketing Copywriting',
      desc: 'Our headlines leverage professional AIDA (Attention, Interest, Desire, Action) formulas to force readers to read every line.'
    }
  ],
  ar: [
    {
      title: 'الذكاء الاصطناعي + الإبداع البشري',
      desc: 'ندمج تقنيات التوليد المتطورة بالذكاء الاصطناعي مع الصياغة الإبداعية البشرية لإنتاج إعلانات تتفوق على جميع منافسيك.'
    },
    {
      title: 'تسليم المسودة خلال 24 ساعة',
      desc: 'توقف عن الانتظار لأسابيع. استلم أول مسودة إعلانية عالية التحويل في أقل من 24 ساعة فقط.'
    },
    {
      title: 'حقوق الاستخدام التجاري الكاملة',
      desc: 'تمتلك 100٪ من حقوق الملكية الفكرية لكل تصميم نقوم بإنتاجه. جاهز للاستخدام الرقمي، والمطبوع، والحملات الممولة.'
    },
    {
      title: 'خيارات إبداعية بلا حدود',
      desc: 'مع باقاتنا المتميزة، نعدل ونطور التصاميم بناءً على ملاحظاتك فوراً حتى تصل إلى الرضا الكامل عن النتيجة.'
    },
    {
      title: 'دعم فني متميز ومباشر',
      desc: 'قناة اتصال مباشرة وسريعة مع الاستراتيجي المخصص لعلامتك التجارية دون أي وسطاء أو تذاكر دعم بطيئة.'
    },
    {
      title: 'تصميم يركز على زيادة المبيعات',
      desc: 'نحن لا نقدم مجرد لوحات فنية جميلة؛ بل نصمم محفزات نفسية مجربة تحول المشاهدين العابرين إلى عملاء يدفعون.'
    },
    {
      title: 'أسعار واضحة وعادلة',
      desc: 'بدون رسوم خفية، أو عقود طويلة الأمد، أو تكاليف بدء تشغيل غامضة. ادفع مبلغاً ثابتاً ومناسباً لحجم عملك الفعلي.'
    },
    {
      title: 'كتابة إعلانية تسويقية حديثة',
      desc: 'تعتمد عناويننا على صيغ تسويقية احترافية مثل AIDA (الانتباه، الاهتمام، الرغبة، الإجراء) لإجبار القراء على التفاعل.'
    }
  ]
};

export const howItWorksSteps = {
  en: [
    { step: '1', title: 'Tell us about your brand', desc: 'Share your business website, target audience, and current advertising challenges through our simple form.' },
    { step: '2', title: 'Receive your first concepts', desc: 'Our team crafts a custom AI-driven psychological creative layout and delivers it within 24 hours.' },
    { step: '3', title: 'Request dynamic adjustments', desc: 'Provide notes on layouts, headlines, or brand elements. We adapt instantly to perfection.' },
    { step: '4', title: 'Download files & scale', desc: 'Receive your high-definition, commercial-ready digital assets and watch your conversions skyrocket.' }
  ],
  ar: [
    { step: '1', title: 'أخبرنا عن عملك وعلامتك', desc: 'شاركنا رابط موقعك، جمهورك المستهدف، وتحدياتك الإعلانية الحالية من خلال نموذج بسيط.' },
    { step: '2', title: 'استلم المسودات الأولى', desc: 'يقوم فريقنا بابتكار تصميم نفسي مخصص ومدعوم بالذكاء الاصطناعي ويسلمه لك في غضون 24 ساعة.' },
    { step: '3', title: 'اطلب التعديلات والتطوير', desc: 'أضف ملاحظاتك على المخططات، العناوين، أو عناصر الهوية البصرية. سنقوم بتحديثها فوراً.' },
    { step: '4', title: 'حمّل الملفات وابدأ النمو', desc: 'احصل على ملفاتك بجودة فائقة الجودة وجاهزة للاستخدام التجاري وراقب نمو مبيعاتك وتفاعلك.' }
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
  }
];
