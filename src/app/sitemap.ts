import { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.iamtowork.com';
  
  // Base static routes
  const staticRoutes = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/solutions', priority: 0.9, changeFrequency: 'weekly' as const },
    { path: '/work', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/pricing', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/about', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
    { path: '/terms', priority: 0.3, changeFrequency: 'yearly' as const },
  ];

  // Dynamic service routes
  const serviceRoutes = SERVICES.map((service) => ({
    path: service.slug,
    priority: 0.9,
    changeFrequency: 'weekly' as const,
  }));

  const allRoutes = [...staticRoutes, ...serviceRoutes];

  return allRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
