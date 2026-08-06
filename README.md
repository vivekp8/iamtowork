# I Am To Work — Official Website

Production website for [iamtowork.com](https://iamtowork.com) — an AI-powered services business helping businesses build, automate, create, and grow.

## The Core Idea

The traditional agency model is slow, expensive, and bloated. **I Am To Work** is built on a different philosophy: a lean, AI-first consultancy that cuts out the fluff. The goal of this project is to provide small-to-medium businesses with rapid, high-quality digital solutions that directly impact their bottom line, rather than just selling them hours. 

We focus on three practical pillars:
1. **Building** modern, conversion-focused websites.
2. **Automating** repetitive, time-consuming business processes.
3. **Growing** brands using AI-driven content and marketing systems.

The website itself serves as a lead-generation tool that reflects these values—it is fast, straightforward, transparent about pricing and process, and designed to convert visitors into consultations.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Styling:** Vanilla CSS Modules (no Tailwind)
- **Icons:** Lucide React
- **Deployment Target:** Cloudflare Pages → iamtowork.com

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Homepage
│   ├── layout.tsx          # Root layout (Nav + Footer)
│   ├── services/           # Service pages (websites, automation, content-design, ai-marketing)
│   ├── solutions/          # Solutions page
│   ├── work/               # Portfolio page
│   ├── pricing/            # Pricing page
│   ├── about/              # About page
│   ├── contact/            # Contact/enquiry page
│   ├── privacy/            # Privacy policy
│   ├── terms/              # Terms of service
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── robots.ts           # robots.txt
├── components/
│   ├── Navigation.tsx      # Sticky header navigation
│   ├── Footer.tsx          # Site footer
│   ├── Button.tsx          # Reusable button primitive
│   ├── Badge.tsx           # Project type badges (concept/client)
│   └── sections/           # Homepage section components
└── lib/
    └── config.ts           # Central data — services, FAQs, tools, etc.
```

## Central Configuration

All site data lives in `src/lib/config.ts`. Update this file to change:
- Brand info, contact details
- Services & descriptions
- Portfolio projects
- FAQ content & tools list

## Deployment (Cloudflare Pages)

```bash
npm run build
```

Push to GitHub and connect to Cloudflare Pages:
- **Build command:** `npm run build`
- **Build output directory:** `.next`
- **Node version:** 20+

## First Git Push

```bash
git add .
git commit -m "feat: I Am To Work website v1"
git remote add origin https://github.com/YOUR_USERNAME/iamtowork-website.git
git push -u origin main
```
