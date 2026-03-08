'use client';

/**
 * Client-side auth gate.
 * Currently DISABLED — site is publicly accessible.
 * To re-enable, restore the auth check against /api/auth/check.
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
 // Auth gate disabled — render the full site for everyone
 return (
 <>
 {header}
 {children}
 {footer}
 </>
 );
}
