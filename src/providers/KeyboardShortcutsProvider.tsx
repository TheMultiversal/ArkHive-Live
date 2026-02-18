'use client';

import {
  createContext,
  useContext,
  useEffect,
  useCallback,
  useState,
  ReactNode,
} from 'react';

// ============================================================
// Types
// ============================================================

interface KeyboardShortcut {
  key: string;
  ctrlKey?: boolean;
  metaKey?: boolean;
  shiftKey?: boolean;
  altKey?: boolean;
  description: string;
  action: () => void;
  global?: boolean; // Works even when focused on input
}

interface KeyboardShortcutsContextValue {
  registerShortcut: (id: string, shortcut: KeyboardShortcut) => void;
  unregisterShortcut: (id: string) => void;
  shortcuts: Map<string, KeyboardShortcut>;
  isHelpOpen: boolean;
  setHelpOpen: (open: boolean) => void;
}

// ============================================================
// Context
// ============================================================

const KeyboardShortcutsContext = createContext<KeyboardShortcutsContextValue | null>(null);

// ============================================================
// Provider
// ============================================================

interface KeyboardShortcutsProviderProps {
  children: ReactNode;
}

export function KeyboardShortcutsProvider({ children }: KeyboardShortcutsProviderProps) {
  const [shortcuts, setShortcuts] = useState<Map<string, KeyboardShortcut>>(new Map());
  const [isHelpOpen, setHelpOpen] = useState(false);

  const registerShortcut = useCallback((id: string, shortcut: KeyboardShortcut) => {
    setShortcuts((prev) => {
      const next = new Map(prev);
      next.set(id, shortcut);
      return next;
    });
  }, []);

  const unregisterShortcut = useCallback((id: string) => {
    setShortcuts((prev) => {
      const next = new Map(prev);
      next.delete(id);
      return next;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Check if we're in an input element
      const isInputFocused =
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        event.target instanceof HTMLSelectElement ||
        (event.target as HTMLElement)?.isContentEditable;

      // Toggle help with ?
      if (event.key === '?' && event.shiftKey && !isInputFocused) {
        event.preventDefault();
        setHelpOpen((prev) => !prev);
        return;
      }

      // Check each shortcut
      for (const [, shortcut] of shortcuts) {
        // Skip non-global shortcuts when input is focused
        if (isInputFocused && !shortcut.global) continue;

        const ctrlOrMeta =
          (shortcut.ctrlKey && event.ctrlKey) ||
          (shortcut.metaKey && event.metaKey) ||
          (!shortcut.ctrlKey && !shortcut.metaKey);

        const shiftMatch = shortcut.shiftKey ? event.shiftKey : !event.shiftKey;
        const altMatch = shortcut.altKey ? event.altKey : !event.altKey;

        if (
          event.key.toLowerCase() === shortcut.key.toLowerCase() &&
          ctrlOrMeta &&
          shiftMatch &&
          altMatch
        ) {
          event.preventDefault();
          shortcut.action();
          return;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [shortcuts]);

  return (
    <KeyboardShortcutsContext.Provider
      value={{
        registerShortcut,
        unregisterShortcut,
        shortcuts,
        isHelpOpen,
        setHelpOpen,
      }}
    >
      {children}
      {isHelpOpen && <KeyboardShortcutsHelp onClose={() => setHelpOpen(false)} />}
    </KeyboardShortcutsContext.Provider>
  );
}

// ============================================================
// Hook
// ============================================================

export function useKeyboardShortcuts() {
  const context = useContext(KeyboardShortcutsContext);
  if (!context) {
    throw new Error('useKeyboardShortcuts must be used within KeyboardShortcutsProvider');
  }
  return context;
}

// Register a shortcut with automatic cleanup
export function useKeyboardShortcut(
  id: string,
  shortcut: KeyboardShortcut,
  deps: unknown[] = []
) {
  const { registerShortcut, unregisterShortcut } = useKeyboardShortcuts();

  useEffect(() => {
    registerShortcut(id, shortcut);
    return () => unregisterShortcut(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, registerShortcut, unregisterShortcut, ...deps]);
}

// ============================================================
// Help Modal
// ============================================================

interface KeyboardShortcutsHelpProps {
  onClose: () => void;
}

function KeyboardShortcutsHelp({ onClose }: KeyboardShortcutsHelpProps) {
  const { shortcuts } = useKeyboardShortcuts();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const formatKey = (shortcut: KeyboardShortcut): string => {
    const parts: string[] = [];
    if (shortcut.ctrlKey) parts.push('Ctrl');
    if (shortcut.metaKey) parts.push('⌘');
    if (shortcut.shiftKey) parts.push('Shift');
    if (shortcut.altKey) parts.push('Alt');
    parts.push(shortcut.key.toUpperCase());
    return parts.join(' + ');
  };

  const shortcutList = Array.from(shortcuts.entries());

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-zinc-900 border border-zinc-800 w-full max-w-lg max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h2 className="text-lg font-semibold text-white">Keyboard Shortcuts</h2>
          <button
            onClick={onClose}
            aria-label="Close shortcuts modal"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {shortcutList.length === 0 ? (
            <p className="text-zinc-500 text-center py-8">
              No shortcuts registered
            </p>
          ) : (
            <div className="space-y-2">
              {shortcutList.map(([id, shortcut]) => (
                <div
                  key={id}
                  className="flex items-center justify-between py-2 border-b border-zinc-800 last:border-0"
                >
                  <span className="text-zinc-300">{shortcut.description}</span>
                  <kbd className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-zinc-400 text-sm font-mono">
                    {formatKey(shortcut)}
                  </kbd>
                </div>
              ))}
            </div>
          )}

          {/* Default shortcuts */}
          <div className="mt-6 pt-4 border-t border-zinc-800">
            <h3 className="text-sm font-semibold text-zinc-400 mb-3">Default Shortcuts</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">Show this help</span>
                <kbd className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-500 font-mono">
                  Shift + ?
                </kbd>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-zinc-400">Close modal/overlay</span>
                <kbd className="px-2 py-0.5 bg-zinc-800 border border-zinc-700 text-zinc-500 font-mono">
                  Esc
                </kbd>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-800 bg-zinc-900/50">
          <p className="text-xs text-zinc-500 text-center">
            Press <kbd className="px-1 bg-zinc-800 border border-zinc-700">Esc</kbd> to close
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// Prebuilt Shortcuts Hook
// ============================================================

export function useCommonShortcuts() {
  const { registerShortcut, unregisterShortcut } = useKeyboardShortcuts();

  useEffect(() => {
    // Navigation shortcuts
    const navShortcuts: [string, KeyboardShortcut][] = [
      ['nav-home', {
        key: 'h',
        altKey: true,
        description: 'Go to Home',
        action: () => window.location.href = '/',
      }],
      ['nav-investigations', {
        key: 'i',
        altKey: true,
        description: 'Go to Investigations',
        action: () => window.location.href = '/investigations',
      }],
      ['nav-entities', {
        key: 'e',
        altKey: true,
        description: 'Go to Entities',
        action: () => window.location.href = '/entities',
      }],
      ['nav-search', {
        key: 'k',
        ctrlKey: true,
        description: 'Open Search',
        action: () => window.location.href = '/search',
        global: true,
      }],
      ['nav-dashboard', {
        key: 'd',
        altKey: true,
        description: 'Go to Dashboard',
        action: () => window.location.href = '/dashboard',
      }],
    ];

    navShortcuts.forEach(([id, shortcut]) => registerShortcut(id, shortcut));

    return () => {
      navShortcuts.forEach(([id]) => unregisterShortcut(id));
    };
  }, [registerShortcut, unregisterShortcut]);
}

export default KeyboardShortcutsProvider;
