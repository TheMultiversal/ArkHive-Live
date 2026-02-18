import { NextResponse } from 'next/server';
import { getInvestigations, searchInvestigations, getInvestigationsBySeverity, getInvestigationsByCategory } from '@/lib/data';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const query = searchParams.get('q');
  const severity = searchParams.get('severity');
  const category = searchParams.get('category');

  let investigations = getInvestigations();

  // Apply filters
  if (query) {
    investigations = searchInvestigations(query);
  }
  
  if (severity) {
    investigations = investigations.filter(inv => inv.severity === severity);
  }
  
  if (category) {
    investigations = investigations.filter(inv => inv.category === category);
  }

  return NextResponse.json({
    data: investigations,
    total: investigations.length,
  });
}
