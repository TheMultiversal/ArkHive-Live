import { NextResponse } from 'next/server';
import { getAllEntities, getEntitiesByType, searchEntities, getEntitiesByRiskLevel } from '@/lib/data';
import type { Entity } from '@/types';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  
  const query = searchParams.get('q');
  const type = searchParams.get('type') as Entity['type'] | null;
  const riskLevel = searchParams.get('riskLevel') as Entity['riskLevel'] | null;

  let entities = getAllEntities();

  // Apply filters
  if (type) {
    entities = getEntitiesByType(type);
  }
  
  if (query) {
    const searchResults = searchEntities(query);
    entities = entities.filter(e => searchResults.some(r => r.id === e.id));
  }
  
  if (riskLevel) {
    entities = entities.filter(e => e.riskLevel === riskLevel);
  }

  return NextResponse.json({
    data: entities,
    total: entities.length,
  });
}
