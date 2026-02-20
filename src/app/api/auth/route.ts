import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const password = String(body?.password || '');
    const SITE_PASSWORD = process.env.SITE_PASSWORD || 'Knowledge';

    if (password === SITE_PASSWORD) {
      // set cookie via NextResponse (works consistently in route handlers)
      const res = NextResponse.json({ ok: true });
      res.cookies.set({
        name: 'site_auth',
        value: SITE_PASSWORD,
        httpOnly: true,
        path: '/',
        maxAge: 60 * 60 * 24, // 1 day
        sameSite: 'lax',
      });
      return res;
    }

    return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ message: 'Bad request' }, { status: 400 });
  }
}
