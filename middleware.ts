import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Simple password gate middleware.
// - Set SITE_PASSWORD in your environment to change the password (defaults to "Knowledge").
// - The auth cookie name is `site_auth` and is HttpOnly.
// - Excludes _next, api, static files, and the /enter route itself.

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // allow internal/asset/api routes and the password entry page
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname === '/enter' ||
    pathname === '/favicon.ico' ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get('site_auth')?.value;
  const sitePassword = process.env.SITE_PASSWORD || 'Knowledge';

  // simple check: cookie must equal the configured password
  if (cookie && cookie === sitePassword) return NextResponse.next();

  const url = req.nextUrl.clone();
  url.pathname = '/enter';
  return NextResponse.redirect(url);
}

export const config = {
  // run middleware for all routes except static/api/_next (logic above also guards)
  matcher: ['/:path*'],
};