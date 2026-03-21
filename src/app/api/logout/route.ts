import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json({ message: 'Use POST to logout' });
}

export async function POST() {
 const res = NextResponse.json({ ok: true });
 res.cookies.set({ name: 'site_auth', value: '', path: '/', maxAge: 0 });
 return res;
}
