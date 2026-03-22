import { NextResponse } from 'next/server';
import investigationDatabase from '@/data/investigations';
import agencyDatabase from '@/data/agencies';
import corporationDatabase from '@/data/corporations';
import organizationDatabase from '@/data/organizations';

export const dynamic = 'force-dynamic';

export async function GET() {
 try {
 const results: Array<{
 id: string;
 type: string;
 title: string;
 description: string;
 [key: string]: unknown;
 }> = [];

 // Add investigations
 for (const [slug, inv] of Object.entries(investigationDatabase)) {
 results.push({
 id: slug,
 type: 'investigation',
 title: inv.title,
 description: inv.summary,
 severity: inv.severity,
 category: inv.category,
 date: inv.date,
 tags: inv.tags,
 });
 }

 // Add agencies
 for (const [slug, agency] of Object.entries(agencyDatabase)) {
 results.push({
 id: slug,
 type: 'entity',
 entityType: 'agency',
 title: (agency as { name?: string }).name || slug,
 description: (agency as { description?: string }).description || '',
 });
 }

 // Add corporations
 for (const [slug, corp] of Object.entries(corporationDatabase)) {
 results.push({
 id: slug,
 type: 'entity',
 entityType: 'corporation',
 title: (corp as { name?: string }).name || slug,
 description: (corp as { description?: string }).description || '',
 });
 }

 // Add organizations
 for (const [slug, org] of Object.entries(organizationDatabase)) {
 results.push({
 id: slug,
 type: 'entity',
 entityType: 'organization',
 title: (org as { name?: string }).name || slug,
 description: (org as { description?: string }).description || '',
 });
 }

 const page = 1;
 const limit = 50;
 const total = results.length;
 const start = (page - 1) * limit;
 const paginatedResults = results.slice(start, start + limit);

 return NextResponse.json({
 success: true,
 data: {
 results: paginatedResults,
 pagination: {
 page,
 limit,
 total,
 totalPages: Math.ceil(total / limit),
 hasMore: start + limit < total
 },
 meta: {
 query: '',
 type: 'all',
 filters: {}
 }
 }
 });
 } catch (error) {
 console.error('Search error:', error);
 return NextResponse.json(
 { success: false, error: 'Search failed' },
 { status: 500 }
 );
 }
}
