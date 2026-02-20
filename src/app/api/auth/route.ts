import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = String(body?.password || '');
    const SITE_PASSWORD = process.env.SITE_PASSWORD || 'Knowledge';

    if (password === SITE_PASSWORD) {
      // set an HttpOnly cookie for the site session (simple implementation)
      cookies().set({
        name: 'site_auth',
        value: SITE_PASSWORD,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: 'lax',
      });
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }
}
