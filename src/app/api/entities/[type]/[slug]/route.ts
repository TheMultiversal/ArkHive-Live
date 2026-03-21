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
  { params }: { params: Promise<{ type: string; slug: string }> }
) {
  const { type, slug } = await params;
  const data = dataMap[type];

  if (!data) {
    return NextResponse.json({ error: 'Invalid entity type' }, { status: 404 });
  }

  const entity = data[slug];
  if (!entity) {
    return NextResponse.json({ error: 'Entity not found' }, { status: 404 });
  }

  return NextResponse.json({ type, slug, ...(entity as Record<string, unknown>) });
}
