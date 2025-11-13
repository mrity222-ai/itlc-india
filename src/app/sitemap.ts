
import { MetadataRoute } from 'next';
import { NAV_LINKS, SERVICES_MEGA_MENU } from '@/lib/constants';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = 'https://itlcindia.com';

  const staticPages = NAV_LINKS.map((link) => ({
    url: `${siteUrl}${link.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: link.href === '/' ? 1 : 0.8,
  }));

  const servicePages = SERVICES_MEGA_MENU.map((service) => ({
    url: `${siteUrl}${service.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  const otherPages = [
    {
      url: `${siteUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${siteUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  return [...staticPages, ...servicePages, ...otherPages];
}
