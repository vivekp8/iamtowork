import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://iamtowork.com';
  
  // Base static routes
  const staticRoutes = [
    '',
    '/services',
    '/solutions',
    '/work',
    '/pricing',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
  ];

  // Dynamic service routes
  const serviceRoutes = SERVICES.map(service => service.slug);

  // Combine all routes
  const routes = [...staticRoutes, ...serviceRoutes];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
