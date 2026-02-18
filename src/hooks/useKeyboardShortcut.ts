'use client';

import { useEffect, useCallback } from 'react';

type KeyCombo = {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
};

/**
 * Hook for registering keyboard shortcuts
 * @param keyCombo - Key combination to listen for
 * @param callback - Function to call when shortcut is pressed
 * @param enabled - Whether the shortcut is active (default: true)
 * 
 * @example
 * ```tsx
 * // Ctrl/Cmd + K to open search
 * useKeyboardShortcut(
 *   { key: 'k', ctrlKey: true },
 *   () => setSearchOpen(true)
 * );
 * 
 * // Escape to close modal
 * useKeyboardShortcut(
 *   { key: 'Escape' },
 *   () => setModalOpen(false),
 *   isModalOpen // Only active when modal is open
 * );
 * ```
 */
export function useKeyboardShortcut(
  keyCombo: KeyCombo | KeyCombo[],
  callback: (event: KeyboardEvent) => void,
  enabled: boolean = true
): void {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      const combos = Array.isArray(keyCombo) ? keyCombo : [keyCombo];

      for (const combo of combos) {
        const keyMatches = event.key.toLowerCase() === combo.key.toLowerCase();
        const ctrlMatches = combo.ctrlKey ? (event.ctrlKey || event.metaKey) : !event.ctrlKey;
        const metaMatches = combo.metaKey ? event.metaKey : true;
        const shiftMatches = combo.shiftKey ? event.shiftKey : !event.shiftKey;
        const altMatches = combo.altKey ? event.altKey : !event.altKey;

        if (keyMatches && ctrlMatches && metaMatches && shiftMatches && altMatches) {
          event.preventDefault();
          callback(event);
          return;
        }
      }
    },
    [keyCombo, callback, enabled]
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, enabled]);
}

export default useKeyboardShortcut;
