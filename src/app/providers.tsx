'use client';

import { ReactNode, useState } from 'react';
import { ToastProvider } from '@/components/ui/Toast';
import CommandPalette, { useCommandPalette } from '@/components/ui/CommandPalette';

interface ProvidersProps {
  children: ReactNode;
}

function CommandPaletteWrapper() {
  const { isOpen, close } = useCommandPalette();
  return <CommandPalette isOpen={isOpen} onClose={close} />;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ToastProvider>
      {children}
      <CommandPaletteWrapper />
    </ToastProvider>
  );
}
