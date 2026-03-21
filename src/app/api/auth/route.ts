import { NextResponse } from 'next/server';
import { timingSafeEqual } from 'crypto';

export const dynamic = 'force-dynamic';

const AUTH_TOKEN = 'site_authenticated';

export async function GET() {
  return NextResponse.json({ message: 'Use POST to authenticate' });
}

export async function POST(req: Request) {
 try {
 const body = await req.json();
 const password = String(body?.password || '');
 const SITE_PASSWORD = process.env.SITE_PASSWORD;

 if (!SITE_PASSWORD) {
 return NextResponse.json({ message: 'Authentication not configured' }, { status: 503 });
 }

 const a = Buffer.from(password);
 const b = Buffer.from(SITE_PASSWORD);
 if (a.length === b.length && timingSafeEqual(a, b)) {
 const res = NextResponse.json({ ok: true });
 res.cookies.set({
 name: 'site_auth',
 value: AUTH_TOKEN,
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
