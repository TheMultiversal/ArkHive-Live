import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const type = searchParams.get('type') || 'all';
  const severity = searchParams.get('severity');
  const dateFrom = searchParams.get('dateFrom');
  const dateTo = searchParams.get('dateTo');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    // Combine all mock data
    let results: Array<{
      id: string;
      type: string;
      title: string;
      description: string;
      [key: string]: unknown;
    }> = [];

    if (type === 'all' || type === 'investigation') {
      results = [...results, ...mockInvestigations];
    }
    if (type === 'all' || type === 'entity') {
      results = [...results, ...mockEntities];
    }
    if (type === 'all' || type === 'document') {
      results = [...results, ...mockDocuments];
    }

    // Filter by query
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(item =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        (item.tags as string[])?.some((tag: string) => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by severity (for investigations)
    if (severity && severity !== 'all') {
      results = results.filter(item =>
        item.type !== 'investigation' || (item as typeof mockInvestigations[0]).severity === severity
      );
    }

    // Filter by date range
    if (dateFrom || dateTo) {
      results = results.filter(item => {
        if (!('date' in item)) return true;
        const itemDate = new Date(item.date as string);
        if (dateFrom && itemDate < new Date(dateFrom)) return false;
        if (dateTo && itemDate > new Date(dateTo)) return false;
        return true;
      });
    }

    // Sort by relevance (simple: exact matches first, then partial)
    if (query) {
      const lowerQuery = query.toLowerCase();
      results.sort((a, b) => {
        const aExact = a.title.toLowerCase() === lowerQuery ? 1 : 0;
        const bExact = b.title.toLowerCase() === lowerQuery ? 1 : 0;
        return bExact - aExact;
      });
    }

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
          query,
          type,
          filters: {
            severity,
            dateFrom,
            dateTo
          }
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
