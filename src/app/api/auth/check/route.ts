import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export const dynamic = 'force-dynamic';

const AUTH_TOKEN = 'site_authenticated';

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get('site_auth')?.value;

  if (token === AUTH_TOKEN) {
    return NextResponse.json({ authenticated: true });
  }

  return NextResponse.json({ authenticated: false });
}
