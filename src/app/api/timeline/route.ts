import { NextResponse } from 'next/server';
import investigationData from '@/data/investigations';

export const dynamic = 'force-static';

export async function GET() {
  const allInvestigations = Object.values(investigationData);

  const events = allInvestigations
    .filter((inv) => inv.date)
    .map((inv) => ({
      slug: inv.slug,
      title: inv.title,
      date: inv.date,
      category: inv.category,
      severity: inv.severity,
    }))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return NextResponse.json({ events, total: events.length });
}
