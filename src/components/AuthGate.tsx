'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

/**
 * Client-side auth gate.
 * Checks /api/auth/check — if not authenticated, redirects to /enter.
 * The /enter page itself is excluded from the check.
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
  const pathname = usePathname();
  const router = useRouter();
  const [authed, setAuthed] = useState<boolean | null>(null);

  const isEnterPage = pathname === '/enter';

  useEffect(() => {
    if (isEnterPage) {
      setAuthed(true);
      return;
    }

    fetch('/api/auth/check')
      .then((r) => r.json())
      .then((data) => {
        if (data.authenticated) {
          setAuthed(true);
        } else {
          router.replace('/enter');
        }
      })
      .catch(() => {
        router.replace('/enter');
      });
  }, [pathname, isEnterPage, router]);

  // While checking auth, show nothing (prevents flash of content)
  if (authed === null && !isEnterPage) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-zinc-500 text-sm animate-pulse">Verifying access...</div>
      </div>
    );
  }

  // On /enter page, render children only (no header/footer)
  if (isEnterPage) {
    return <>{children}</>;
  }

  // Authenticated — render full site
  return (
    <>
      {header}
      {children}
      {footer}
    </>
  );
}
