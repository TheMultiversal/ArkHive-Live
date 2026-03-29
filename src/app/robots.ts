/**
 * Robots.txt Configuration
 * Controls how search engine crawlers interact with the site
 */

import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
 const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://arkhive.live';

 return {
 rules: [
 {
 userAgent: '*',
 allow: '/',
 disallow: [
 '/api/',
 '/admin/',
 '/_next/',
 '/private/',
 '/*.json$',
 ],
 },
 {
 userAgent: 'GPTBot',
 disallow: '/',
 },
 {
 userAgent: 'ChatGPT-User',
 disallow: '/',
 },
 {
 userAgent: 'CCBot',
 disallow: '/',
 },
 {
 userAgent: 'anthropic-ai',
 disallow: '/',
 },
 ],
 sitemap: `${baseUrl}/sitemap.xml`,
 host: baseUrl,
 };
}
