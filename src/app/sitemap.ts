import { MetadataRoute } from 'next';
import investigationDatabase from '@/data/investigations';
import agencyData from '@/data/agencies';
import corporationData from '@/data/corporations';
import individualData from '@/data/individuals';
import organizationData from '@/data/organizations';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
 const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arkhive.live';

 // Static pages
 const staticPages = [
 '',
 '/investigations',
 '/entities',
 '/entities/agencies',
 '/entities/corporations',
 '/entities/individuals',
 '/entities/organizations',
 '/timeline',
 '/workspaces',
 '/about',
 '/submit',
 '/search',
 '/recent',
 '/network',
 '/sources',
 '/statutes',
 '/money-trail',
 '/categories',
 '/tags',
 '/themes',
 '/evidence',
 '/geography',
 '/documents',
 '/convictions',
 '/archives',
 '/export',
 '/faq',
 '/privacy',
 '/terms',
 '/methodology',
 '/contact',
 ];

 const staticEntries = staticPages.map((route) => ({
 url: `${baseUrl}${route}`,
 lastModified: new Date(),
 changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
 priority: route === '' ? 1 : route.includes('entities') ? 0.8 : 0.7,
 }));

 // Dynamic investigation pages
 const investigationEntries = Object.entries(investigationDatabase).map(([slug, inv]) => ({
 url: `${baseUrl}/investigations/${slug}`,
 lastModified: new Date(inv.lastUpdated || inv.date || new Date()),
 changeFrequency: 'weekly' as const,
 priority: 0.9,
 }));

 // Dynamic entity pages
 const agencyEntries = Object.keys(agencyData).map((slug) => ({
 url: `${baseUrl}/entities/agencies/${slug}`,
 lastModified: new Date(),
 changeFrequency: 'monthly' as const,
 priority: 0.7,
 }));

 const corporationEntries = Object.keys(corporationData).map((slug) => ({
 url: `${baseUrl}/entities/corporations/${slug}`,
 lastModified: new Date(),
 changeFrequency: 'monthly' as const,
 priority: 0.7,
 }));

 const individualEntries = Object.keys(individualData).map((slug) => ({
 url: `${baseUrl}/entities/individuals/${slug}`,
 lastModified: new Date(),
 changeFrequency: 'monthly' as const,
 priority: 0.7,
 }));

 const organizationEntries = Object.keys(organizationData || {}).map((slug) => ({
 url: `${baseUrl}/entities/organizations/${slug}`,
 lastModified: new Date(),
 changeFrequency: 'monthly' as const,
 priority: 0.7,
 }));

 return [
 ...staticEntries,
 ...investigationEntries,
 ...agencyEntries,
 ...corporationEntries,
 ...individualEntries,
 ...organizationEntries,
 ];
}
