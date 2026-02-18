import { NextRequest, NextResponse } from 'next/server';

// Mock statistics data
const stats = {
  overview: {
    totalInvestigations: 47,
    activeInvestigations: 24,
    completedInvestigations: 18,
    archivedInvestigations: 5,
    totalEntities: 342,
    totalDocuments: 1847,
    totalCollaborators: 156,
    activeWorkspaces: 34
  },
  investigations: {
    bySeverity: {
      critical: 8,
      high: 12,
      medium: 18,
      low: 9
    },
    byStatus: {
      active: 24,
      pending: 5,
      completed: 18
    },
    recentlyUpdated: [
      { id: 'project-nightshade', title: 'Project Nightshade', updatedAt: '2024-01-15T10:30:00Z' },
      { id: 'silent-erosion', title: 'Silent Erosion', updatedAt: '2024-01-15T08:15:00Z' },
      { id: 'operation-blackwater', title: 'Operation Blackwater', updatedAt: '2024-01-14T22:45:00Z' }
    ]
  },
  entities: {
    byType: {
      agency: 45,
      corporation: 127,
      individual: 98,
      organization: 72
    },
    byRisk: {
      critical: 23,
      high: 67,
      medium: 134,
      low: 118
    }
  },
  documents: {
    byClassification: {
      public: 1245,
      restricted: 412,
      sensitive: 190
    },
    byType: {
      pdf: 1102,
      image: 423,
      archive: 187,
      text: 135
    },
    recentlyAdded: [
      { id: 'doc-001', title: 'FDA Internal Memo', addedAt: '2024-01-15T09:00:00Z' },
      { id: 'doc-002', title: 'Financial Records Q4', addedAt: '2024-01-14T16:30:00Z' },
      { id: 'doc-003', title: 'Testimony Transcript', addedAt: '2024-01-14T11:00:00Z' }
    ]
  },
  activity: {
    daily: [
      { date: '2024-01-09', views: 1234, downloads: 89, submissions: 12 },
      { date: '2024-01-10', views: 1456, downloads: 112, submissions: 8 },
      { date: '2024-01-11', views: 1678, downloads: 134, submissions: 15 },
      { date: '2024-01-12', views: 1234, downloads: 98, submissions: 6 },
      { date: '2024-01-13', views: 987, downloads: 67, submissions: 4 },
      { date: '2024-01-14', views: 2345, downloads: 178, submissions: 23 },
      { date: '2024-01-15', views: 2567, downloads: 201, submissions: 18 }
    ],
    topInvestigations: [
      { id: 'project-nightshade', title: 'Project Nightshade', views: 12456 },
      { id: 'silent-erosion', title: 'Silent Erosion', views: 9823 },
      { id: 'operation-blackwater', title: 'Operation Blackwater', views: 8765 },
      { id: 'meridian-files', title: 'The Meridian Files', views: 6543 },
      { id: 'shadow-protocol', title: 'Shadow Protocol', views: 5432 }
    ]
  },
  trends: {
    investigationsChange: 12, // percentage
    documentsChange: 23,
    entitiesChange: 8,
    collaboratorsChange: 15
  }
};

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category'); // overview, investigations, entities, documents, activity
  const period = searchParams.get('period') || '7d'; // 7d, 30d, 90d, 1y

  try {
    let responseData: Record<string, unknown>;

    if (category && category !== 'all') {
      // Return specific category
      responseData = {
        [category]: stats[category as keyof typeof stats] || null,
        trends: stats.trends,
        period
      };
    } else {
      // Return all stats
      responseData = {
        ...stats,
        period
      };
    }

    return NextResponse.json({
      success: true,
      data: responseData,
      meta: {
        generatedAt: new Date().toISOString(),
        period,
        category: category || 'all'
      }
    });
  } catch (error) {
    console.error('Stats error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch statistics' },
      { status: 500 }
    );
  }
}
