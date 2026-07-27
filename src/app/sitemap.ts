import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://iamtowork.com';
  const routes = [
    '',
    '/services',
    '/services/websites',
    '/services/automation',
    '/services/content-design',
    '/services/ai-marketing',
    '/solutions',
    '/work',
    '/pricing',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
