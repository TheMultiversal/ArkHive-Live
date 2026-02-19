import { MetadataRoute } from 'next';

// Mock data - replace with actual database queries in production
const getInvestigations = () => [
  { slug: 'welcome-to-arkhive', lastUpdated: '2026-01-31' },
];

const getEntities = () => [
  { slug: 'nsa', type: 'agencies', lastUpdated: '2026-01-15' },
  { slug: 'nexus-holdings', type: 'corporations', lastUpdated: '2026-01-20' },
  { slug: 'donald-trump', type: 'individuals', lastUpdated: '2026-01-25' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arkhive.org';

  // Static pages
  const staticPages = [
    '',
    '/investigations',
    '/entities',
    '/entities/agencies',
    '/entities/corporations',
    '/entities/individuals',
    '/timeline',
    '/workspaces',
    '/about',
    '/submit',
    '/search',
    '/analytics',
    '/faq',
    '/privacy',
    '/terms',
    '/methodology',
    '/team',
    '/contact',
  ];

  const staticEntries = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : route.includes('entities') ? 0.8 : 0.7,
  }));

  // Dynamic investigation pages
  const investigations = getInvestigations();
  const investigationEntries = investigations.map((inv) => ({
    url: `${baseUrl}/investigations/${inv.slug}`,
    lastModified: new Date(inv.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }));

  // Dynamic entity pages
  const entities = getEntities();
  const entityEntries = entities.map((entity) => ({
    url: `${baseUrl}/entities/${entity.type}/${entity.slug}`,
    lastModified: new Date(entity.lastUpdated),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [...staticEntries, ...investigationEntries, ...entityEntries];
}
