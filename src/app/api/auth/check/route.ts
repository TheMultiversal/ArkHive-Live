import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('site_auth')?.value;
  const SITE_PASSWORD = process.env.SITE_PASSWORD || 'Knowledge';

  if (token && token.toLowerCase() === SITE_PASSWORD.toLowerCase()) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false });
}
