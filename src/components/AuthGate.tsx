'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Client-side auth gate.
 * Calls /api/auth/check on mount — if not authenticated, redirects to /enter.
 * Shows a blank black screen while checking so no page content leaks.
 * Skipped entirely on the /enter route itself to avoid redirect loops.
 */
export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<'checking' | 'authed' | 'denied'>('checking');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Don't gate the /enter page or API routes
    if (pathname === '/enter' || pathname.startsWith('/api')) {
      setStatus('authed');
      return;
    }

    // Check auth status
    fetch('/api/auth/check', { cache: 'no-store' })
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) {
          setStatus('authed');
        } else {
          setStatus('denied');
          router.replace('/enter');
        }
      })
      .catch(() => {
        setStatus('denied');
        router.replace('/enter');
      });
  }, [pathname, router]);

  // While checking or denied, render an opaque black screen
  // so server-rendered page content is never visible
  if (status !== 'authed') {
    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          backgroundColor: '#000',
        }}
      />
    );
  }

  return <>{children}</>;
}
