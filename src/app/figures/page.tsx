'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function FiguresPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace('/network');
  }, [router]);

  return (
    <main className="min-h-screen bg-black text-white pt-24 pb-16 flex items-center justify-center">
      <p className="text-zinc-500 text-sm">Redirecting to Network...</p>
    </main>
  );
}
