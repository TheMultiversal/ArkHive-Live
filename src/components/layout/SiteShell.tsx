'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SumerianMatrixRain from '@/components/effects/SumerianMatrixRain';
import RandomWordPopups from '@/components/effects/RandomWordPopups';
import { SurveillanceWarning, DataCorruption, TimestampOverlay } from '@/components/effects/ParanoiaEffects';
import BackToTop from '@/components/ui/BackToTop';

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isSplash = pathname === '/' || pathname === '/enter';
  const isHome = pathname === '/home';

  // On /enter - render children only (fullscreen splash, no chrome)
  if (isSplash) {
    return <>{children}</>;
  }

  // Normal pages - full site shell
  return (
    <>
      <SumerianMatrixRain />
      <RandomWordPopups frequency={12000} />
      <SurveillanceWarning />
      <DataCorruption />
      <TimestampOverlay />
      <Header />

      <main id="main-content" className="flex-1 relative z-10">
        {isHome ? (
          <div className="mx-2 my-4 sm:mx-4 sm:my-6 lg:mx-8">
            {children}
          </div>
        ) : (
          <div className="glass-panel mx-2 my-4 p-2 sm:mx-4 sm:my-6 sm:p-4 lg:mx-8 lg:p-6">
            {children}
          </div>
        )}
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
