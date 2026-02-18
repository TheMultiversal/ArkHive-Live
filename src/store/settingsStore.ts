'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  UserSettings,
  ThemeSettings,
  NotificationSettings,
  PrivacySettings,
  SecuritySettings,
  DisplaySettings,
  WorkspaceSettings,
  EditorSettings,
  AccessibilitySettings,
} from '@/types/settings';
import {
  DEFAULT_THEME_SETTINGS,
  DEFAULT_NOTIFICATION_SETTINGS,
  DEFAULT_PRIVACY_SETTINGS,
  DEFAULT_SECURITY_SETTINGS,
  DEFAULT_DISPLAY_SETTINGS,
  DEFAULT_WORKSPACE_SETTINGS,
  DEFAULT_EDITOR_SETTINGS,
  DEFAULT_ACCESSIBILITY_SETTINGS,
} from '@/types/settings';

// ============================================================
// Store State Interface
// ============================================================

interface SettingsState extends UserSettings {
  // Actions
  setTheme: (theme: Partial<ThemeSettings>) => void;
  setNotifications: (notifications: Partial<NotificationSettings>) => void;
  setPrivacy: (privacy: Partial<PrivacySettings>) => void;
  setSecurity: (security: Partial<SecuritySettings>) => void;
  setDisplay: (display: Partial<DisplaySettings>) => void;
  setWorkspace: (workspace: Partial<WorkspaceSettings>) => void;
  setEditor: (editor: Partial<EditorSettings>) => void;
  setAccessibility: (accessibility: Partial<AccessibilitySettings>) => void;
  resetSettings: () => void;
  resetSection: (section: keyof UserSettings) => void;
  importSettings: (settings: Partial<UserSettings>) => void;
  exportSettings: () => UserSettings;
}

// ============================================================
// Initial State
// ============================================================

const initialState: Omit<SettingsState, 
  'setTheme' | 'setNotifications' | 'setPrivacy' | 'setSecurity' |
  'setDisplay' | 'setWorkspace' | 'setEditor' | 'setAccessibility' |
  'resetSettings' | 'resetSection' | 'importSettings' | 'exportSettings'
> = {
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

// ============================================================
// Store Definition
// ============================================================

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set, get) => ({
      ...initialState,

      // Theme settings
      setTheme: (theme) =>
        set((state) => ({
          theme: { ...state.theme, ...theme },
          updatedAt: new Date(),
        })),

      // Notification settings
      setNotifications: (notifications) =>
        set((state) => ({
          notifications: {
            ...state.notifications,
            ...notifications,
            email: { ...state.notifications.email, ...(notifications.email || {}) },
            push: { ...state.notifications.push, ...(notifications.push || {}) },
            inApp: { ...state.notifications.inApp, ...(notifications.inApp || {}) },
          },
          updatedAt: new Date(),
        })),

      // Privacy settings
      setPrivacy: (privacy) =>
        set((state) => ({
          privacy: { ...state.privacy, ...privacy },
          updatedAt: new Date(),
        })),

      // Security settings
      setSecurity: (security) =>
        set((state) => ({
          security: { ...state.security, ...security },
          updatedAt: new Date(),
        })),

      // Display settings
      setDisplay: (display) =>
        set((state) => ({
          display: { ...state.display, ...display },
          updatedAt: new Date(),
        })),

      // Workspace settings
      setWorkspace: (workspace) =>
        set((state) => ({
          workspace: { ...state.workspace, ...workspace },
          updatedAt: new Date(),
        })),

      // Editor settings
      setEditor: (editor) =>
        set((state) => ({
          editor: { ...state.editor, ...editor },
          updatedAt: new Date(),
        })),

      // Accessibility settings
      setAccessibility: (accessibility) =>
        set((state) => ({
          accessibility: { ...state.accessibility, ...accessibility },
          updatedAt: new Date(),
        })),

      // Reset all settings
      resetSettings: () =>
        set({
          ...initialState,
          updatedAt: new Date(),
        }),

      // Reset specific section
      resetSection: (section) => {
        const defaults: Record<keyof UserSettings, unknown> = {
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

        set({
          [section]: defaults[section],
          updatedAt: new Date(),
        });
      },

      // Import settings
      importSettings: (settings) =>
        set((state) => ({
          ...state,
          ...settings,
          updatedAt: new Date(),
        })),

      // Export settings
      exportSettings: () => {
        const state = get();
        return {
          theme: state.theme,
          notifications: state.notifications,
          privacy: state.privacy,
          security: state.security,
          display: state.display,
          workspace: state.workspace,
          editor: state.editor,
          accessibility: state.accessibility,
          updatedAt: state.updatedAt,
        };
      },
    }),
    {
      name: 'arkhive-settings',
      partialize: (state) => ({
        theme: state.theme,
        notifications: state.notifications,
        privacy: state.privacy,
        security: state.security,
        display: state.display,
        workspace: state.workspace,
        editor: state.editor,
        accessibility: state.accessibility,
        updatedAt: state.updatedAt,
      }),
    }
  )
);

// ============================================================
// Selectors
// ============================================================

export const selectTheme = (state: SettingsState) => state.theme;
export const selectNotifications = (state: SettingsState) => state.notifications;
export const selectPrivacy = (state: SettingsState) => state.privacy;
export const selectSecurity = (state: SettingsState) => state.security;
export const selectDisplay = (state: SettingsState) => state.display;
export const selectWorkspace = (state: SettingsState) => state.workspace;
export const selectEditor = (state: SettingsState) => state.editor;
export const selectAccessibility = (state: SettingsState) => state.accessibility;

export default useSettingsStore;
