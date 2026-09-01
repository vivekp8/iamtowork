export const siteConfig = {
  name: "I Am To Work",
  description: "Custom websites and intelligent workflow automation built for modern growing businesses.",
  url: "https://www.iamtowork.com",
  contact: {
    email: "vivekp@iamtowork.com",
    linkedinCompany: "https://www.linkedin.com/company/143035530/",
    linkedinFounder: "https://www.linkedin.com/in/vivek-potnuru-302677200/"
  },
  pillars: [
    {
      id: "build",
      title: "Digital Products & Experiences",
      tagline: "BUILD",
      description: "Modern websites, landing pages, and digital tools built to achieve real business goals. Clean, fast, and conversion-focused.",
      features: [
        "Sub-second mobile loading with Next.js",
        "Conversion-focused UI & lead capture forms",
        "Custom tailored design with zero bloat"
      ],
      link: "/services/websites",
      color: "blue"
    },
    {
      id: "automate",
      title: "Business Automation",
      tagline: "AUTOMATE",
      description: "Eliminate repetitive tasks with custom n8n and Make workflows. Connect your tools, save hours every week, and reduce errors.",
      features: [
        "Save 15+ hours weekly on manual busywork",
        "Instant lead notifications via WhatsApp & CRM",
        "Reliable n8n & Make custom workflow integrations"
      ],
      link: "/services/automation",
      color: "purple"
    },
    {
      id: "grow",
      title: "AI-Assisted Growth Solutions",
      tagline: "GROW",
      description: "Marketing systems, content engines, and lead generation setups that help you attract more clients and scale.",
      features: [
        "Multi-channel AI content repurposing engines",
        "Automated email nurture & follow-up pipelines",
        "Scalable customer acquisition systems"
      ],
      link: "/services/ai-marketing",
      color: "emerald"
    }
  ],
  sectors: [
    {
      id: "real-estate",
      title: "Real Estate & Property",
      description: "Automate lead routing, send instant WhatsApp follow-ups, and sync CRM data so agents can focus on closing deals."
    },
    {
      id: "hospitality",
      title: "Hospitality & Dining",
      description: "High-performance digital menus and direct booking/reservation flows to avoid 3rd-party platform fees."
    },
    {
      id: "consultants",
      title: "Consultants & Advisors",
      description: "High-authority portfolios with automated Calendly & HubSpot onboarding flows."
    },
    {
      id: "ecommerce",
      title: "E-Commerce & Brands",
      description: "Fast-loading storefronts, automated review analysis, and AI product description workflows."
    }
  ],
  pricing: [
    {
      tier: "Starter",
      description: "For new businesses needing a foundational presence or basic automation.",
      features: ["Single-page high-converting site", "Basic automation workflow (e.g. Lead -> Email)", "Standard support"]
    },
    {
      tier: "Growth",
      isPopular: true,
      description: "For established teams looking to scale with integrated systems.",
      features: ["Multi-page custom Next.js website", "Multi-step automation (CRM + WhatsApp)", "Basic SEO setup"]
    },
    {
      tier: "Business",
      description: "Advanced solutions for complex operations and heavy lead flow.",
      features: ["Full-stack web application", "Advanced AI content/marketing systems", "Priority support & maintenance"]
    }
  ]
};
