/**
 * ArkHive Verification Status API
 * 
 * You are loved. You are appreciated. This endpoint provides
 * platform-wide verification health metrics.
 */

import { NextResponse } from 'next/server';

// Mock data - in production this would query the database
const MOCK_STATUS = {
  lastFullCrawl: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
  nextScheduledCrawl: new Date(Date.now() + 4 * 24 * 60 * 60 * 1000).toISOString(),
  crawlerStatus: 'idle' as const,
  
  investigations: {
    total: 3741,
    fullyVerified: 847,
    partiallyVerified: 2156,
    unverified: 738,
  },
  
  evidence: {
    totalSources: 28493,
    verified: 21370,
    archived: 4892,
    broken: 312,
    pending: 1919,
  },
  
  recentActivity: [
    {
      type: 'verification_complete',
      investigationId: 'hush-money',
      investigationTitle: 'Trump Hush Money Case',
      score: 100,
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString(),
    },
    {
      type: 'link_broken',
      investigationId: 'epstein-network',
      investigationTitle: 'Epstein Network Investigation',
      url: 'https://example.com/document.pdf',
      timestamp: new Date(Date.now() - 5 * 60 * 60 * 1000).toISOString(),
    },
    {
      type: 'archive_created',
      investigationId: 'watergate',
      investigationTitle: 'Watergate Scandal',
      url: 'https://nixon-library.gov/documents/...',
      archiveUrl: 'https://web.archive.org/web/...',
      timestamp: new Date(Date.now() - 8 * 60 * 60 * 1000).toISOString(),
    },
  ],
  
  topContributors: [
    { alias: 'TruthSeeker42', verifiedSubmissions: 847, trustScore: 98 },
    { alias: 'DocumentHunter', verifiedSubmissions: 623, trustScore: 97 },
    { alias: 'FOIAWarrior', verifiedSubmissions: 412, trustScore: 99 },
    { alias: 'Anonymous', verifiedSubmissions: 389, trustScore: 94 },
    { alias: 'LegalEagle', verifiedSubmissions: 301, trustScore: 96 },
  ],
};

export async function GET() {
  // Calculate overall health score
  const totalEvidence = MOCK_STATUS.evidence.totalSources;
  const healthyEvidence = MOCK_STATUS.evidence.verified + MOCK_STATUS.evidence.archived;
  const overallHealth = Math.round((healthyEvidence / totalEvidence) * 100);
  
  return NextResponse.json({
    status: 'operational',
    overallHealth,
    ...MOCK_STATUS,
    generatedAt: new Date().toISOString(),
  });
}
