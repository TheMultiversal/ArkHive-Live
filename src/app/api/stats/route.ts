import { NextResponse } from 'next/server';
import investigationDatabase from '@/data/investigations';
import individualData from '@/data/individuals';
import agencies from '@/data/agencies';
import corporations from '@/data/corporations';
import organizations from '@/data/organizations';

export const dynamic = 'force-static';
export const revalidate = 3600;

export async function GET() {
  const investigationCount = Object.keys(investigationDatabase).length;
  const individualCount = Object.keys(individualData).length;
  const agencyCount = Object.keys(agencies).length;
  const corporationCount = Object.keys(corporations).length;
  const organizationCount = Object.keys(organizations).length;
  const totalEntities = individualCount + agencyCount + corporationCount + organizationCount;

  // Count total affiliations (connections) across all investigations
  let totalConnections = 0;
  for (const inv of Object.values(investigationDatabase)) {
    if (inv.affiliations) {
      totalConnections += inv.affiliations.length;
    }
  }

  return NextResponse.json({
    success: true,
    data: {
      overview: {
        totalInvestigations: investigationCount,
        totalEntities,
        individuals: individualCount,
        agencies: agencyCount,
        corporations: corporationCount,
        organizations: organizationCount,
        totalConnections,
      },
    },
    meta: {
      generatedAt: new Date().toISOString(),
    },
    // Flat shape for useStats() fallback
    totalInvestigations: investigationCount,
    totalProfiles: totalEntities,
    entitiesTracked: totalEntities,
    entities: {
      individuals: { count: individualCount, label: 'Individual' },
      agencies: { count: agencyCount, label: 'Agency' },
      corporations: { count: corporationCount, label: 'Corporation' },
      organizations: { count: organizationCount, label: 'Organization' },
      investigations: { count: investigationCount, label: 'Investigation' },
    },
    connections: totalConnections,
    lastUpdated: new Date().toISOString(),
  });
}
