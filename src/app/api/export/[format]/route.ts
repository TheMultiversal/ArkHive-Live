import { NextRequest, NextResponse } from 'next/server';
import investigationDatabase from '@/data/investigations';

export const dynamic = 'force-dynamic';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ format: string }> }
) {
  const { format } = await params;

  if (!['json', 'csv'].includes(format)) {
    return NextResponse.json(
      { error: `Unsupported format: ${format}. Supported: json, csv` },
      { status: 400 }
    );
  }

  const { searchParams } = request.nextUrl;
  const slug = searchParams.get('slug');
  const category = searchParams.get('category');

  let entries = Object.entries(investigationDatabase);

  if (slug) {
    entries = entries.filter(([s]) => s === slug);
    if (entries.length === 0) {
      return NextResponse.json({ error: 'Investigation not found' }, { status: 404 });
    }
  }

  if (category) {
    entries = entries.filter(([, inv]) => inv.category.toLowerCase() === category.toLowerCase());
  }

  if (format === 'json') {
    const data = Object.fromEntries(
      entries.map(([s, inv]) => [s, {
        title: inv.title,
        subtitle: inv.subtitle,
        severity: inv.severity,
        category: inv.category,
        date: inv.date,
        lastUpdated: inv.lastUpdated,
        summary: inv.summary,
        tags: inv.tags,
      }])
    );
    return NextResponse.json({ data, count: entries.length });
  }

  // CSV
  const headers = ['slug', 'title', 'severity', 'category', 'date', 'lastUpdated', 'tags'];
  const rows = entries.map(([s, inv]) => [
    s,
    `"${inv.title.replace(/"/g, '""')}"`,
    inv.severity,
    inv.category,
    inv.date,
    inv.lastUpdated,
    `"${inv.tags.join('; ')}"`,
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
  return new NextResponse(csv, {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': `attachment; filename="arkhive-export-${Date.now()}.csv"`,
    },
  });
}
