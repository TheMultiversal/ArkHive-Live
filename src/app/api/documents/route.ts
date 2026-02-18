import { NextRequest, NextResponse } from 'next/server';

interface Document {
  id: string;
  title: string;
  description: string;
  type: 'pdf' | 'image' | 'archive' | 'text';
  classification: 'public' | 'restricted' | 'sensitive';
  date: string;
  size: string;
  sizeBytes: number;
  category: string;
  investigation?: string;
  downloadCount: number;
  previewAvailable: boolean;
  url?: string;
  tags: string[];
}

// Mock document database
const documents: Document[] = [
  {
    id: 'doc-001',
    title: 'FDA Internal Memo - Drug Approval Fast-Track',
    description: 'Internal communications regarding expedited approval process for experimental treatments.',
    type: 'pdf',
    classification: 'public',
    date: '2024-11-15',
    size: '2.4 MB',
    sizeBytes: 2516582,
    category: 'Health',
    investigation: 'project-nightshade',
    downloadCount: 1247,
    previewAvailable: true,
    tags: ['fda', 'pharmaceutical', 'approval', 'internal-memo']
  },
  {
    id: 'doc-002',
    title: 'Corporate Lobbying Expenditure Report Q3 2024',
    description: 'Detailed breakdown of pharmaceutical industry lobbying spending.',
    type: 'pdf',
    classification: 'public',
    date: '2024-10-28',
    size: '856 KB',
    sizeBytes: 876544,
    category: 'Corporate',
    downloadCount: 892,
    previewAvailable: true,
    tags: ['lobbying', 'pharmaceutical', 'financial', 'report']
  },
  {
    id: 'doc-003',
    title: 'EPA Waiver Documentation - Chemical Plant',
    description: 'Environmental protection waivers granted to Meridian Chemical facilities.',
    type: 'archive',
    classification: 'public',
    date: '2024-09-12',
    size: '15.7 MB',
    sizeBytes: 16462028,
    category: 'Environmental',
    investigation: 'silent-erosion',
    downloadCount: 567,
    previewAvailable: false,
    tags: ['epa', 'environmental', 'waiver', 'meridian']
  },
  {
    id: 'doc-004',
    title: 'Classified Budget Allocation - Defense Department',
    description: 'Redacted portions of defense spending for black budget programs.',
    type: 'pdf',
    classification: 'restricted',
    date: '2024-08-03',
    size: '1.1 MB',
    sizeBytes: 1153434,
    category: 'Government',
    downloadCount: 2341,
    previewAvailable: true,
    tags: ['defense', 'budget', 'classified', 'military']
  },
  {
    id: 'doc-005',
    title: 'Internal Clinical Trial Data - Adverse Events',
    description: 'Unreported adverse events from Phase 3 clinical trials.',
    type: 'pdf',
    classification: 'sensitive',
    date: '2024-07-22',
    size: '4.8 MB',
    sizeBytes: 5033165,
    category: 'Health',
    investigation: 'project-nightshade',
    downloadCount: 3156,
    previewAvailable: true,
    tags: ['clinical-trial', 'adverse-events', 'pharmaceutical', 'health']
  },
  {
    id: 'doc-006',
    title: 'Financial Transaction Records - Shell Companies',
    description: 'Bank records linking offshore entities to domestic operations.',
    type: 'archive',
    classification: 'sensitive',
    date: '2024-06-15',
    size: '23.4 MB',
    sizeBytes: 24536678,
    category: 'Financial',
    downloadCount: 1834,
    previewAvailable: false,
    tags: ['financial', 'offshore', 'shell-company', 'transactions']
  },
  {
    id: 'doc-007',
    title: 'Satellite Imagery - Facility Construction',
    description: 'Time-lapse satellite images showing undisclosed facility construction.',
    type: 'image',
    classification: 'public',
    date: '2024-05-08',
    size: '45.2 MB',
    sizeBytes: 47395635,
    category: 'Government',
    downloadCount: 723,
    previewAvailable: true,
    tags: ['satellite', 'imagery', 'facility', 'construction']
  },
  {
    id: 'doc-008',
    title: 'Whistleblower Testimony Transcript',
    description: 'Anonymized testimony from former agency employee.',
    type: 'text',
    classification: 'restricted',
    date: '2024-04-19',
    size: '156 KB',
    sizeBytes: 159744,
    category: 'Government',
    downloadCount: 4521,
    previewAvailable: true,
    tags: ['whistleblower', 'testimony', 'transcript', 'anonymous']
  }
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';
  const category = searchParams.get('category');
  const classification = searchParams.get('classification');
  const type = searchParams.get('type');
  const investigation = searchParams.get('investigation');
  const sortBy = searchParams.get('sortBy') || 'date';
  const sortOrder = searchParams.get('sortOrder') || 'desc';
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '20');

  try {
    let results = [...documents];

    // Filter by query
    if (query) {
      const lowerQuery = query.toLowerCase();
      results = results.filter(doc =>
        doc.title.toLowerCase().includes(lowerQuery) ||
        doc.description.toLowerCase().includes(lowerQuery) ||
        doc.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      );
    }

    // Filter by category
    if (category && category !== 'all') {
      results = results.filter(doc => doc.category === category);
    }

    // Filter by classification
    if (classification && classification !== 'all') {
      results = results.filter(doc => doc.classification === classification);
    }

    // Filter by type
    if (type && type !== 'all') {
      results = results.filter(doc => doc.type === type);
    }

    // Filter by investigation
    if (investigation) {
      results = results.filter(doc => doc.investigation === investigation);
    }

    // Sort
    results.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'title':
          comparison = a.title.localeCompare(b.title);
          break;
        case 'downloads':
          comparison = a.downloadCount - b.downloadCount;
          break;
        case 'size':
          comparison = a.sizeBytes - b.sizeBytes;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

    // Pagination
    const total = results.length;
    const start = (page - 1) * limit;
    const paginatedResults = results.slice(start, start + limit);

    // Get available categories
    const categories = [...new Set(documents.map(d => d.category))];

    return NextResponse.json({
      success: true,
      data: {
        documents: paginatedResults,
        pagination: {
          page,
          limit,
          total,
          totalPages: Math.ceil(total / limit),
          hasMore: start + limit < total
        },
        meta: {
          categories,
          totalDocuments: documents.length,
          totalSize: documents.reduce((acc, d) => acc + d.sizeBytes, 0),
          classifications: {
            public: documents.filter(d => d.classification === 'public').length,
            restricted: documents.filter(d => d.classification === 'restricted').length,
            sensitive: documents.filter(d => d.classification === 'sensitive').length
          }
        }
      }
    });
  } catch (error) {
    console.error('Documents error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch documents' },
      { status: 500 }
    );
  }
}

// Get single document by ID
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { documentId } = body;

    if (!documentId) {
      return NextResponse.json(
        { success: false, error: 'Document ID is required' },
        { status: 400 }
      );
    }

    const document = documents.find(d => d.id === documentId);

    if (!document) {
      return NextResponse.json(
        { success: false, error: 'Document not found' },
        { status: 404 }
      );
    }

    // In a real app, you would check authentication for restricted/sensitive docs
    // and generate a signed URL for download

    return NextResponse.json({
      success: true,
      data: {
        ...document,
        downloadUrl: `/api/documents/download/${document.id}`, // Mock URL
        previewUrl: document.previewAvailable ? `/api/documents/preview/${document.id}` : null
      }
    });
  } catch (error) {
    console.error('Document fetch error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch document' },
      { status: 500 }
    );
  }
}
