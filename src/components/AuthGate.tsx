'use client';

import { useEffect, useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';

/**
 * Client-side auth gate.
 * - On /enter: renders ONLY the page content (no Header/Footer/effects).
 * - On any other route: checks /api/auth/check; if not authenticated shows
 *   a black screen and redirects to /enter. If authenticated, renders the
 *   full site shell.
 *
 * Props:
 *   `header`   – everything above <main> (effects, Header, etc.)
 *   `footer`   – everything below <main> (Footer, BackToTop, etc.)
 *   `children` – the <main> page content
 */
export default function AuthGate({
  children,
  header,
  footer,
}: {
  children: React.ReactNode;
  header: React.ReactNode;
  footer: React.ReactNode;
}) {
  const [status, setStatus] = useState<'checking' | 'authed' | 'denied'>('checking');
  const router = useRouter();
  const pathname = usePathname();

  // Is this the password entry page?
  const isEnterPage = pathname === '/enter';

  useEffect(() => {
    if (isEnterPage || pathname.startsWith('/api')) {
      setStatus('authed');
      return;
    }

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
  }, [pathname, router, isEnterPage]);

  // On the /enter page: render ONLY the page content — no site chrome
  if (isEnterPage) {
    return <>{children}</>;
  }

  // While checking or denied: opaque black screen (hides SSR content)
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

  // Authenticated: show the full site
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
