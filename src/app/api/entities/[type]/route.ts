import { NextRequest, NextResponse } from 'next/server';
import agencyData from '@/data/agencies';
import corporationData from '@/data/corporations';
import individualData from '@/data/individuals';
import organizationData from '@/data/organizations';

export const dynamic = 'force-static';

const dataMap: Record<string, Record<string, unknown>> = {
  agencies: agencyData,
  corporations: corporationData,
  individuals: individualData,
  organizations: organizationData,
};

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ type: string }> }
) {
  const { type } = await params;
  const data = dataMap[type];

  if (!data) {
    return NextResponse.json({ error: 'Invalid entity type' }, { status: 404 });
  }

  const entities = Object.entries(data).map(([slug, entity]) => ({
    slug,
    ...(entity as Record<string, unknown>),
  }));

  return NextResponse.json({ type, entities, total: entities.length });
}
