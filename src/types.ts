export type ActiveTab = 
  | 'home' 
  | 'about' 
  | 'services' 
  | 'portfolio' 
  | 'pricing' 
  | 'blog' 
  | 'faq' 
  | 'contact' 
  | 'free-sample'
  | 'admin-portal';

export interface ServiceItem {
  id: string;
  title: string;
  titleAr?: string;
  description: string;
  descriptionAr?: string;
  icon: string;
  ctaText: string;
  category: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  titleAr?: string;
  category: string; // Restaurant, Beauty, Real Estate, Healthcare, Fashion, Ecommerce, Fitness, Technology, Food, Education
  description: string;
  descriptionAr?: string;
  engagementIncrease: string;
  conversionRate: string;
  client?: string;
  clientAr?: string;
  goal?: string;
  goalAr?: string;
  challenge?: string;
  challengeAr?: string;
  solution?: string;
  solutionAr?: string;
  mockupDetails: {
    title: string;
    hook: string;
    badge: string;
    accentColor: string;
    theme: 'light' | 'dark' | 'neon' | 'luxury';
    headline: string;
    buttonText: string;
    imageUrl?: string;
  };
}

export interface BeforeAfterPair {
  id: string;
  category: string;
  before: {
    image: string;
    tagline: string;
    description: string;
    issues: string[];
  };
  after: {
    image: string;
    tagline: string;
    description: string;
    improvements: string[];
  };
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: string;
  titleAr?: string;
  summary: string;
  summaryAr?: string;
  category: string; // Instagram Marketing, Facebook Ads, Pinterest Marketing, AI Design, Restaurant Marketing, Branding, Graphic Design, Small Business Marketing
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string; // Markdown or raw text
}

export interface FaqItem {
  id: string;
  question: string;
  questionAr?: string;
  answer: string;
  answerAr?: string;
  category: string;
}

export interface FreeSampleRequest {
  id: string;
  businessName: string;
  website: string;
  whatsapp: string;
  industry: string;
  requestDetails: string;
  createdAt: string;
  status: 'pending' | 'reviewing' | 'designed' | 'delivered';
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  businessName: string;
  message: string;
  createdAt: string;
  status: 'new' | 'replied';
}
