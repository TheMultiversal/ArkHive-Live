import { NextResponse } from 'next/server';
import { getInvestigations } from '@/lib/data';

export const dynamic = 'force-dynamic';

export async function GET() {
 const investigations = getInvestigations();

 return NextResponse.json({
  data: investigations,
  total: investigations.length,
 });
}
