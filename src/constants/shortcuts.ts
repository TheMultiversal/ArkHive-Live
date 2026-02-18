/**
 * Keyboard shortcut definitions
 * Used by the KeyboardShortcutsProvider for global shortcuts
 */

export interface KeyboardShortcut {
  /** The key(s) to trigger the shortcut (e.g., 'k', 'Escape') */
  key: string;
  /** Whether Cmd (Mac) or Ctrl (Windows/Linux) is required */
  ctrlOrCmd?: boolean;
  /** Whether Shift is required */
  shift?: boolean;
  /** Whether Alt/Option is required */
  alt?: boolean;
  /** Description shown in the shortcuts help dialog */
  description: string;
  /** Category for grouping shortcuts */
  category: 'navigation' | 'search' | 'actions' | 'workspace';
}

/**
 * All keyboard shortcuts available in the application
 */
export const KEYBOARD_SHORTCUTS: Record<string, KeyboardShortcut> = {
  // Navigation
  goHome: {
    key: 'h',
    ctrlOrCmd: true,
    description: 'Go to home page',
    category: 'navigation',
  },
  goInvestigations: {
    key: 'i',
    ctrlOrCmd: true,
    description: 'Go to investigations',
    category: 'navigation',
  },
  goEntities: {
    key: 'e',
    ctrlOrCmd: true,
    description: 'Go to entities',
    category: 'navigation',
  },
  goTimeline: {
    key: 't',
    ctrlOrCmd: true,
    description: 'Go to timeline',
    category: 'navigation',
  },
  goWorkspaces: {
    key: 'w',
    ctrlOrCmd: true,
    description: 'Go to workspaces',
    category: 'navigation',
  },

  // Search
  openSearch: {
    key: 'k',
    ctrlOrCmd: true,
    description: 'Open search',
    category: 'search',
  },
  closeSearch: {
    key: 'Escape',
    description: 'Close search/modal',
    category: 'search',
  },

  // Actions
  showShortcuts: {
    key: '/',
    ctrlOrCmd: true,
    description: 'Show keyboard shortcuts',
    category: 'actions',
  },
  toggleDarkMode: {
    key: 'd',
    ctrlOrCmd: true,
    shift: true,
    description: 'Toggle dark mode',
    category: 'actions',
  },

  // Workspace
  newWorkspace: {
    key: 'n',
    ctrlOrCmd: true,
    description: 'Create new workspace',
    category: 'workspace',
  },
  saveWorkspace: {
    key: 's',
    ctrlOrCmd: true,
    description: 'Save workspace',
    category: 'workspace',
  },
};

/**
 * Group shortcuts by category
 */
export function getShortcutsByCategory() {
  const grouped: Record<string, KeyboardShortcut[]> = {
    navigation: [],
    search: [],
    actions: [],
    workspace: [],
  };

  Object.values(KEYBOARD_SHORTCUTS).forEach((shortcut) => {
    grouped[shortcut.category].push(shortcut);
  });

  return grouped;
}

/**
 * Format shortcut key for display
 */
export function formatShortcutKey(shortcut: KeyboardShortcut): string {
  const parts: string[] = [];
  const isMac = typeof navigator !== 'undefined' && navigator.platform.toUpperCase().includes('MAC');

  if (shortcut.ctrlOrCmd) {
    parts.push(isMac ? '⌘' : 'Ctrl');
  }
  if (shortcut.shift) {
    parts.push(isMac ? '⇧' : 'Shift');
  }
  if (shortcut.alt) {
    parts.push(isMac ? '⌥' : 'Alt');
  }
  parts.push(shortcut.key.toUpperCase());

  return parts.join(isMac ? '' : '+');
}
