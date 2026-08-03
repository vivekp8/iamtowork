// ============================================================
// CENTRAL SITE CONFIGURATION — single source of truth
// ============================================================

export const SITE = {
  name: 'I Am To Work',
  tagline: 'Build Faster. Automate Smarter. Grow with AI.',
  description:
    'I Am To Work helps businesses build modern websites, automate repetitive workflows, create better content, and implement practical AI solutions.',
  url: 'https://iamtowork.com',
};

export const CONTACT = {
  email: 'vivekp@iamtowork.com',
  whatsapp: '', // fill when ready
  companyLinkedin: 'https://www.linkedin.com/company/143035530/',
  personalLinkedin: 'https://www.linkedin.com/in/vivek-potnuru-302677200/',
  bookingUrl: '', // fill when ready (e.g., Calendly)
};

export const SERVICES = [
  {
    id: 'websites',
    slug: '/services/websites',
    pillar: 'BUILD',
    label: 'Website Building',
    headline: 'Modern Websites Built for Real Business Goals',
    description:
      'We build professional, responsive websites that help businesses attract clients, communicate clearly, and convert visitors into enquiries.',
    items: [
      'Business Websites',
      'Landing Pages',
      'Restaurant Websites',
      'Professional Websites',
      'Startup Websites',
      'Portfolio Websites',
      'Website Redesigns',
    ],
  },
  {
    id: 'automation',
    slug: '/services/automation',
    pillar: 'AUTOMATE',
    label: 'Business Automation',
    headline: 'Automate Repetitive Work. Free Your Time.',
    description:
      'We design and implement practical automation workflows that eliminate manual tasks and let your business run smarter.',
    items: [
      'n8n Workflows',
      'Make Workflows',
      'Lead Automation',
      'Email Automation',
      'Form Processing',
      'Notifications',
      'AI Workflows',
      'Business Process Automation',
    ],
  },
  {
    id: 'content-design',
    slug: '/services/content-design',
    pillar: 'CREATE',
    label: 'AI Content & Design',
    headline: 'Professional Content Created with AI Intelligence',
    description:
      'From copywriting to social media content, we produce high-quality creative work powered by AI tools and refined by human judgment.',
    items: [
      'AI Content Writing',
      'Social Media Content',
      'Copywriting',
      'AI Design & Graphics',
      'Presentations',
      'Marketing Creatives',
      'Video Content',
    ],
  },
  {
    id: 'ai-marketing',
    slug: '/services/ai-marketing',
    pillar: 'GROW',
    label: 'AI Marketing & Growth',
    headline: 'Grow Your Business with AI-Assisted Marketing',
    description:
      'We help businesses build content systems, lead generation flows, and marketing automation that consistently drive growth.',
    items: [
      'AI Marketing Strategy',
      'Content Systems',
      'Lead Systems',
      'Social Media Management',
      'Marketing Automation',
      'Business AI Implementation',
    ],
  },
];

export const PILLARS = [
  {
    id: 'create',
    label: 'CREATE',
    tagline: 'AI-Assisted Creative Services',
    description:
      'Content, copy, design, and media — produced with AI tools and refined for real business use.',
    href: '/services/content-design',
    color: '#06B6D4',
  },
  {
    id: 'build',
    label: 'BUILD',
    tagline: 'Digital Products & Experiences',
    description:
      'Modern websites, landing pages, apps, and internal tools built to achieve real business goals.',
    href: '/services/websites',
    color: '#2563EB',
  },
  {
    id: 'automate',
    label: 'AUTOMATE',
    tagline: 'Business Automation',
    description:
      'Eliminate repetitive work with smart n8n and Make workflows, AI agents, and process automation.',
    href: '/services/automation',
    color: '#8B5CF6',
  },
  {
    id: 'grow',
    label: 'GROW',
    tagline: 'AI-Assisted Growth Solutions',
    description:
      'Marketing systems, content engines, and lead generation that help businesses scale.',
    href: '/services/ai-marketing',
    color: '#10B981',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Understand your business, goals, and the specific problem we need to solve.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Determine the most appropriate solution — technology, approach, and scope.',
  },
  {
    number: '03',
    title: 'Design',
    description: 'Plan the experience, content structure, or workflow in detail.',
  },
  {
    number: '04',
    title: 'Build',
    description: 'Implement the solution with precision and care.',
  },
  {
    number: '05',
    title: 'Review',
    description: 'Test, refine, and validate against the original brief.',
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Deploy to production with proper setup and configuration.',
  },
  {
    number: '07',
    title: 'Support',
    description: 'Provide agreed post-launch support and guidance.',
  },
];

export const TOOLS = [
  'ChatGPT', 'Gemini', 'Claude', 'Canva', 'n8n', 'Make',
  'Lovable', 'Bolt', 'Figma', 'Supabase', 'Firebase',
  'Framer', 'CapCut', 'ElevenLabs', 'NotebookLM',
];

export const FAQS = [
  {
    q: 'What services do you provide?',
    a: 'We provide website building, business automation, AI content & design, and AI-assisted marketing and growth solutions.',
  },
  {
    q: 'Can you build my business website?',
    a: 'Yes. We build professional, responsive websites for businesses of all types — from simple landing pages to complete business sites.',
  },
  {
    q: 'Can you redesign my current website?',
    a: 'Absolutely. If your current website no longer reflects your business or is underperforming, we can redesign it with a modern approach.',
  },
  {
    q: 'Can you automate my current workflow?',
    a: 'Yes. We assess your existing processes and design automation workflows using tools like n8n and Make that reduce manual work.',
  },
  {
    q: 'Do I need any technical knowledge?',
    a: 'No. We handle all the technical work. We communicate in plain language and guide you through every step of the process.',
  },
  {
    q: 'How much does a project cost?',
    a: 'Pricing depends on the scope and complexity of your project. We provide detailed quotes after understanding your requirements. Contact us to discuss.',
  },
  {
    q: 'How long does a project take?',
    a: 'Timelines vary by project. A straightforward landing page may take 5–10 days. A full business website typically takes 2–4 weeks.',
  },
  {
    q: 'Which AI technologies do you use?',
    a: 'We use the best AI tool for each task — including ChatGPT, Gemini, Claude, n8n, Make, Canva AI, and others depending on the requirement.',
  },
  {
    q: 'Do you provide support after launch?',
    a: 'Yes. We provide agreed post-launch support depending on the project. This is discussed and defined before we start work.',
  },
  {
    q: 'How do I start a project?',
    a: 'Simply contact us, tell us what you need, and we will respond with next steps. There is no commitment required at the enquiry stage.',
  },
];

export const WHY_US = [
  {
    title: 'AI-First Execution',
    description:
      'We use modern AI tools where they genuinely improve quality, speed, and outcomes — not as a marketing claim, but as our actual working method.',
  },
  {
    title: 'Business-Focused',
    description:
      'Every project starts with your actual business goal. We build what you need, not what is technically impressive.',
  },
  {
    title: 'Modern Technology',
    description:
      'We work with current AI, automation, and development technologies — not outdated tools or legacy approaches.',
  },
  {
    title: 'Flexible Solutions',
    description:
      'We select the right technology for your requirements rather than forcing every client onto the same platform.',
  },
  {
    title: 'Built to Grow',
    description:
      'We design solutions with future expansion in mind so your investment continues to serve you as your business grows.',
  },
  {
    title: 'Transparent Process',
    description:
      'Clear communication, honest timelines, and no surprises. You always know what is happening and why.',
  },
];

export const OUTCOMES = [
  { label: 'Launch a Website', href: '/services/websites', icon: 'Globe' },
  { label: 'Automate My Work', href: '/services/automation', icon: 'Zap' },
  { label: 'Create Better Content', href: '/services/content-design', icon: 'PenLine' },
  { label: 'Improve Marketing', href: '/services/ai-marketing', icon: 'TrendingUp' },
  { label: 'Build an AI Solution', href: '/solutions', icon: 'Bot' },
  { label: 'Improve Business Operations', href: '/services/automation', icon: 'Settings2' },
];

export const PORTFOLIO_PROJECTS = [
  {
    id: 'restaurant-concept',
    title: 'Restaurant Website',
    category: 'Websites',
    type: 'concept' as const,
    description: 'A modern, mobile-first restaurant website with online menu, reservations flow, and location integration.',
    technologies: ['Next.js', 'CSS Modules', 'Vercel'],
    image: null,
  },
  {
    id: 'gym-concept',
    title: 'Gym & Fitness Studio',
    category: 'Websites',
    type: 'concept' as const,
    description: 'A high-energy fitness studio website with class scheduling, trainer profiles, and membership CTA.',
    technologies: ['Next.js', 'Framer Motion', 'CSS Modules'],
    image: null,
  },
  {
    id: 'consultant-concept',
    title: 'Consultant Portfolio',
    category: 'Websites',
    type: 'concept' as const,
    description: 'A minimal, professional portfolio site for an independent consultant. Clean, fast, and conversion-focused.',
    technologies: ['Next.js', 'CSS Modules'],
    image: null,
  },
  {
    id: 'lead-automation-concept',
    title: 'Real Estate Lead Automation',
    category: 'Automation',
    type: 'concept' as const,
    description: 'An n8n workflow that captures form leads, sends instant WhatsApp notifications, and logs to a CRM.',
    technologies: ['n8n', 'WhatsApp API', 'Airtable'],
    image: null,
  },
  {
    id: 'founder-content-concept',
    title: 'Founder Content System',
    category: 'Content',
    type: 'concept' as const,
    description: 'A Make workflow that repurposes a weekly voice note into LinkedIn posts, email newsletters, and social captions.',
    technologies: ['Make', 'ChatGPT', 'Notion'],
    image: null,
  },
];
