import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

// Mock data for search results
const mockInvestigations = [
 {
 id: 'project-nightshade',
 type: 'investigation',
 title: 'Project Nightshade',
 description: 'FDA approval irregularities in pharmaceutical trials',
 severity: 'critical',
 date: '2024-12-01',
 tags: ['pharmaceutical', 'fda', 'health']
 },
 {
 id: 'silent-erosion',
 type: 'investigation',
 title: 'Silent Erosion',
 description: 'Environmental regulation rollbacks and their consequences',
 severity: 'high',
 date: '2024-11-15',
 tags: ['environmental', 'epa', 'regulations']
 },
 {
 id: 'operation-blackwater',
 type: 'investigation',
 title: 'Operation Blackwater',
 description: 'Defense contractor accountability gaps',
 severity: 'critical',
 date: '2024-10-20',
 tags: ['defense', 'military', 'contractors']
 }
];

const mockEntities = [
 {
 id: 'fda',
 type: 'entity',
 entityType: 'agency',
 title: 'Food and Drug Administration',
 description: 'Federal agency responsible for drug approval and safety',
 riskLevel: 'high',
 tags: ['federal', 'health', 'regulatory']
 },
 {
 id: 'meridian-chemical',
 type: 'entity',
 entityType: 'corporation',
 title: 'Meridian Chemical Corp',
 description: 'Major chemical manufacturer with environmental violations',
 riskLevel: 'critical',
 tags: ['chemical', 'manufacturing', 'environmental']
 },
 {
 id: 'epa',
 type: 'entity',
 entityType: 'agency',
 title: 'Environmental Protection Agency',
 description: 'Federal environmental regulatory agency',
 riskLevel: 'medium',
 tags: ['federal', 'environmental', 'regulatory']
 }
];

const mockDocuments = [
 {
 id: 'fda-memo-001',
 type: 'document',
 title: 'FDA Internal Memo - Drug Approval Fast-Track',
 description: 'Internal communications regarding expedited approval process',
 classification: 'public',
 date: '2024-11-15',
 tags: ['fda', 'pharmaceutical', 'internal']
 },
 {
 id: 'epa-waiver-002',
 type: 'document',
 title: 'EPA Waiver Documentation - Chemical Plant',
 description: 'Environmental protection waivers granted to Meridian Chemical',
 classification: 'public',
 date: '2024-09-12',
 tags: ['epa', 'environmental', 'waiver']
 }
];

export async function GET() {
 try {
 // Combine all mock data
 const results: Array<{
 id: string;
 type: string;
 title: string;
 description: string;
 [key: string]: unknown;
 }> = [...mockInvestigations, ...mockEntities, ...mockDocuments];

 const page = 1;
 const limit = 20;

 // Pagination
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
