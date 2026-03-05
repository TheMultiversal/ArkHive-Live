import { NextResponse } from 'next/server';
import { getAllEntities } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
 const entities = getAllEntities();

 return NextResponse.json({
  data: entities,
  total: entities.length,
 });
}
