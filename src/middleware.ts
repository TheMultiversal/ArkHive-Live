import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const SITE_PASSWORD = process.env.SITE_PASSWORD || 'Apples1!';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public paths: /enter, API routes, static assets
  if (
    pathname === '/enter' ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(.*)$/)
  ) {
    return NextResponse.next();
  }

  // Check for auth cookie
  const token = req.cookies.get('site_auth')?.value;
  if (token && token === SITE_PASSWORD) {
    return NextResponse.next();
  }

  // Redirect to /enter
  const enterUrl = req.nextUrl.clone();
  enterUrl.pathname = '/enter';
  return NextResponse.redirect(enterUrl);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
