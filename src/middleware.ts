import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// ═══════════════════════════════════════════════════════════════════
//  PASSWORD GATE MIDDLEWARE
//  NOTE: Disabled for static export (GitHub Pages deployment).
//  Middleware does not run in `output: 'export'` mode.
//  The site is publicly accessible when deployed to GitHub Pages.
//  For local development with auth, use `npm run dev` without
//  `output: 'export'` in next.config.ts.
// ═══════════════════════════════════════════════════════════════════

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(req: NextRequest) {
  // Static export mode — allow everything through
  // The site is live and public on GitHub Pages
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
