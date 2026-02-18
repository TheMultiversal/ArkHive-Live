// ============================================================
// Settings Types
// Types for user preferences and application settings
// ============================================================

// ============================================================
// Theme Settings
// ============================================================

export type ThemeMode = 'dark' | 'light' | 'system';
export type AccentColor = 'blood' | 'blue' | 'green' | 'purple' | 'orange';

export interface ThemeSettings {
  mode: ThemeMode;
  accentColor: AccentColor;
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large';
}

// ============================================================
// Notification Settings
// ============================================================

export interface NotificationSettings {
  enabled: boolean;
  email: {
    enabled: boolean;
    digest: 'instant' | 'daily' | 'weekly' | 'never';
    investigations: boolean;
    workspaces: boolean;
    mentions: boolean;
    system: boolean;
  };
  push: {
    enabled: boolean;
    investigations: boolean;
    workspaces: boolean;
    mentions: boolean;
    system: boolean;
  };
  inApp: {
    enabled: boolean;
    sound: boolean;
    desktop: boolean;
  };
}

// ============================================================
// Privacy Settings
// ============================================================

export interface PrivacySettings {
  profileVisibility: 'public' | 'private' | 'contacts';
  activityVisibility: 'public' | 'private' | 'contacts';
  showOnlineStatus: boolean;
  allowDirectMessages: boolean;
  allowMentions: boolean;
  analyticsOptIn: boolean;
  personalizationOptIn: boolean;
}

// ============================================================
// Security Settings
// ============================================================

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  twoFactorMethod: 'app' | 'sms' | 'email' | null;
  sessionTimeout: number; // minutes
  rememberDevices: boolean;
  trustedDevices: TrustedDevice[];
  loginNotifications: boolean;
  suspiciousActivityAlerts: boolean;
}

export interface TrustedDevice {
  id: string;
  name: string;
  type: 'desktop' | 'mobile' | 'tablet';
  browser: string;
  os: string;
  lastUsed: Date;
  location?: string;
  trusted: boolean;
}

// ============================================================
// Display Settings
// ============================================================

export interface DisplaySettings {
  language: string;
  timezone: string;
  dateFormat: 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD';
  timeFormat: '12h' | '24h';
  weekStartsOn: 0 | 1 | 6; // Sunday, Monday, Saturday
  compactMode: boolean;
  sidebarCollapsed: boolean;
  showHelpTips: boolean;
}

// ============================================================
// Workspace Settings
// ============================================================

export interface WorkspaceSettings {
  defaultView: 'grid' | 'list' | 'board';
  autoSave: boolean;
  autoSaveInterval: number; // seconds
  showCompletedTasks: boolean;
  taskSortOrder: 'priority' | 'dueDate' | 'created' | 'alphabetical';
  enableCollaboration: boolean;
  enableVersionHistory: boolean;
}

// ============================================================
// Editor Settings
// ============================================================

export interface EditorSettings {
  defaultMode: 'edit' | 'preview' | 'split';
  tabSize: 2 | 4;
  wordWrap: boolean;
  lineNumbers: boolean;
  spellCheck: boolean;
  autoComplete: boolean;
  autoFormat: boolean;
  markdownShortcuts: boolean;
}

// ============================================================
// Accessibility Settings
// ============================================================

export interface AccessibilitySettings {
  screenReaderOptimized: boolean;
  keyboardNavigation: boolean;
  focusIndicators: boolean;
  reduceTransparency: boolean;
  increaseContrast: boolean;
  largeText: boolean;
  cursorSize: 'small' | 'medium' | 'large';
}

// ============================================================
// Combined User Settings
// ============================================================

export interface UserSettings {
  theme: ThemeSettings;
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  security: SecuritySettings;
  display: DisplaySettings;
  workspace: WorkspaceSettings;
  editor: EditorSettings;
  accessibility: AccessibilitySettings;
  updatedAt: Date;
}

// ============================================================
// Default Settings
// ============================================================

export const DEFAULT_THEME_SETTINGS: ThemeSettings = {
  mode: 'dark',
  accentColor: 'blood',
  reducedMotion: false,
  highContrast: false,
  fontSize: 'medium',
};

export const DEFAULT_NOTIFICATION_SETTINGS: NotificationSettings = {
  enabled: true,
  email: {
    enabled: true,
    digest: 'daily',
    investigations: true,
    workspaces: true,
    mentions: true,
    system: true,
  },
  push: {
    enabled: true,
    investigations: true,
    workspaces: true,
    mentions: true,
    system: false,
  },
  inApp: {
    enabled: true,
    sound: true,
    desktop: false,
  },
};

export const DEFAULT_PRIVACY_SETTINGS: PrivacySettings = {
  profileVisibility: 'public',
  activityVisibility: 'contacts',
  showOnlineStatus: true,
  allowDirectMessages: true,
  allowMentions: true,
  analyticsOptIn: false,
  personalizationOptIn: true,
};

export const DEFAULT_SECURITY_SETTINGS: SecuritySettings = {
  twoFactorEnabled: false,
  twoFactorMethod: null,
  sessionTimeout: 60,
  rememberDevices: true,
  trustedDevices: [],
  loginNotifications: true,
  suspiciousActivityAlerts: true,
};

export const DEFAULT_DISPLAY_SETTINGS: DisplaySettings = {
  language: 'en',
  timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  dateFormat: 'MM/DD/YYYY',
  timeFormat: '12h',
  weekStartsOn: 0,
  compactMode: false,
  sidebarCollapsed: false,
  showHelpTips: true,
};

export const DEFAULT_WORKSPACE_SETTINGS: WorkspaceSettings = {
  defaultView: 'grid',
  autoSave: true,
  autoSaveInterval: 30,
  showCompletedTasks: false,
  taskSortOrder: 'priority',
  enableCollaboration: true,
  enableVersionHistory: true,
};

export const DEFAULT_EDITOR_SETTINGS: EditorSettings = {
  defaultMode: 'edit',
  tabSize: 2,
  wordWrap: true,
  lineNumbers: true,
  spellCheck: true,
  autoComplete: true,
  autoFormat: true,
  markdownShortcuts: true,
};

export const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  screenReaderOptimized: false,
  keyboardNavigation: true,
  focusIndicators: true,
  reduceTransparency: false,
  increaseContrast: false,
  largeText: false,
  cursorSize: 'medium',
};

export const DEFAULT_USER_SETTINGS: UserSettings = {
  theme: DEFAULT_THEME_SETTINGS,
  notifications: DEFAULT_NOTIFICATION_SETTINGS,
  privacy: DEFAULT_PRIVACY_SETTINGS,
  security: DEFAULT_SECURITY_SETTINGS,
  display: DEFAULT_DISPLAY_SETTINGS,
  workspace: DEFAULT_WORKSPACE_SETTINGS,
  editor: DEFAULT_EDITOR_SETTINGS,
  accessibility: DEFAULT_ACCESSIBILITY_SETTINGS,
  updatedAt: new Date(),
};
