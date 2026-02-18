// ============================================================
// Constants Configuration
// Application-wide constants and configuration values
// ============================================================

// ============================================================
// Application Info
// ============================================================

export const APP_NAME = 'ArkHive';
export const APP_VERSION = '1.0.0';
export const APP_DESCRIPTION = 'Investigative Journalism Platform';
export const APP_URL = 'https://arkhive.io';

// ============================================================
// API Configuration
// ============================================================

export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '/api';
export const API_VERSION = 'v1';
export const API_TIMEOUT = 30000; // 30 seconds

// ============================================================
// Authentication
// ============================================================

export const AUTH = {
  SESSION_DURATION: 7 * 24 * 60 * 60 * 1000, // 7 days
  REMEMBER_ME_DURATION: 30 * 24 * 60 * 60 * 1000, // 30 days
  TOKEN_REFRESH_THRESHOLD: 5 * 60 * 1000, // 5 minutes before expiry
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000, // 15 minutes
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
} as const;

// ============================================================
// Pagination
// ============================================================

export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 20,
  MAX_PAGE_SIZE: 100,
  PAGE_SIZE_OPTIONS: [10, 20, 50, 100],
} as const;

// ============================================================
// File Upload
// ============================================================

export const FILE_UPLOAD = {
  MAX_FILE_SIZE: 50 * 1024 * 1024, // 50 MB
  MAX_TOTAL_SIZE: 200 * 1024 * 1024, // 200 MB
  MAX_FILES: 10,
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp', 'image/svg+xml'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    'text/plain',
    'text/csv',
  ],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/webm', 'video/ogg'],
  ALLOWED_AUDIO_TYPES: ['audio/mpeg', 'audio/wav', 'audio/ogg', 'audio/mp3'],
} as const;

// ============================================================
// Investigation Severity Levels
// ============================================================

export const SEVERITY_LEVELS = {
  critical: {
    label: 'Critical',
    color: '#ef4444',
    bgColor: '#ef444420',
    priority: 1,
  },
  high: {
    label: 'High',
    color: '#f97316',
    bgColor: '#f9731620',
    priority: 2,
  },
  medium: {
    label: 'Medium',
    color: '#eab308',
    bgColor: '#eab30820',
    priority: 3,
  },
  low: {
    label: 'Low',
    color: '#22c55e',
    bgColor: '#22c55e20',
    priority: 4,
  },
} as const;

// ============================================================
// Entity Types
// ============================================================

export const ENTITY_TYPES = {
  agency: {
    label: 'Agency',
    plural: 'Agencies',
    icon: 'building',
    color: '#3b82f6',
  },
  corporation: {
    label: 'Corporation',
    plural: 'Corporations',
    icon: 'briefcase',
    color: '#8b5cf6',
  },
  individual: {
    label: 'Individual',
    plural: 'Individuals',
    icon: 'user',
    color: '#ec4899',
  },
  organization: {
    label: 'Organization',
    plural: 'Organizations',
    icon: 'users',
    color: '#14b8a6',
  },
} as const;

// ============================================================
// Document Status
// ============================================================

export const DOCUMENT_STATUS = {
  draft: { label: 'Draft', color: '#6b7280' },
  pending: { label: 'Pending Review', color: '#f59e0b' },
  approved: { label: 'Approved', color: '#22c55e' },
  rejected: { label: 'Rejected', color: '#ef4444' },
  archived: { label: 'Archived', color: '#6b7280' },
} as const;

// ============================================================
// Workspace Roles
// ============================================================

export const WORKSPACE_ROLES = {
  owner: {
    label: 'Owner',
    permissions: ['*'],
    canInvite: true,
    canRemove: true,
    canEdit: true,
    canDelete: true,
  },
  admin: {
    label: 'Admin',
    permissions: ['read', 'write', 'invite', 'remove'],
    canInvite: true,
    canRemove: true,
    canEdit: true,
    canDelete: false,
  },
  member: {
    label: 'Member',
    permissions: ['read', 'write'],
    canInvite: false,
    canRemove: false,
    canEdit: true,
    canDelete: false,
  },
  viewer: {
    label: 'Viewer',
    permissions: ['read'],
    canInvite: false,
    canRemove: false,
    canEdit: false,
    canDelete: false,
  },
} as const;

// ============================================================
// Notification Types
// ============================================================

export const NOTIFICATION_TYPES = {
  info: { icon: 'info', color: '#3b82f6' },
  success: { icon: 'check-circle', color: '#22c55e' },
  warning: { icon: 'alert-triangle', color: '#f59e0b' },
  error: { icon: 'x-circle', color: '#ef4444' },
  investigation: { icon: 'search', color: '#8b5cf6' },
  entity: { icon: 'building', color: '#14b8a6' },
  document: { icon: 'file-text', color: '#ec4899' },
  workspace: { icon: 'users', color: '#3b82f6' },
  system: { icon: 'settings', color: '#6b7280' },
} as const;

// ============================================================
// Date/Time Formats
// ============================================================

export const DATE_FORMATS = {
  short: 'MM/dd/yyyy',
  long: 'MMMM d, yyyy',
  iso: "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
  display: 'MMM d, yyyy',
  displayWithTime: 'MMM d, yyyy h:mm a',
  time: 'h:mm a',
  time24: 'HH:mm',
} as const;

// ============================================================
// Keyboard Shortcuts
// ============================================================

export const KEYBOARD_SHORTCUTS = {
  // Navigation
  search: { key: 'k', modifiers: ['ctrl'] },
  home: { key: 'h', modifiers: ['ctrl', 'shift'] },
  settings: { key: ',', modifiers: ['ctrl'] },

  // Actions
  save: { key: 's', modifiers: ['ctrl'] },
  newInvestigation: { key: 'n', modifiers: ['ctrl'] },
  newEntity: { key: 'e', modifiers: ['ctrl', 'shift'] },

  // UI
  toggleSidebar: { key: 'b', modifiers: ['ctrl'] },
  toggleDarkMode: { key: 'd', modifiers: ['ctrl', 'shift'] },
  closeModal: { key: 'Escape', modifiers: [] },
} as const;

// ============================================================
// Animation Durations
// ============================================================

export const ANIMATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// ============================================================
// Breakpoints (matching Tailwind)
// ============================================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// ============================================================
// Z-Index Scale
// ============================================================

export const Z_INDEX = {
  base: 0,
  dropdown: 1000,
  sticky: 1100,
  fixed: 1200,
  modalBackdrop: 1300,
  modal: 1400,
  popover: 1500,
  tooltip: 1600,
  toast: 1700,
} as const;

// ============================================================
// Error Messages
// ============================================================

export const ERROR_MESSAGES = {
  generic: 'An unexpected error occurred. Please try again.',
  network: 'Unable to connect. Please check your internet connection.',
  unauthorized: 'You are not authorized to perform this action.',
  notFound: 'The requested resource was not found.',
  validation: 'Please check the form for errors.',
  timeout: 'The request timed out. Please try again.',
  serverError: 'A server error occurred. Please try again later.',
} as const;

// ============================================================
// Social Links
// ============================================================

export const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/arkhive',
  github: 'https://github.com/arkhive',
  discord: 'https://discord.gg/arkhive',
  linkedin: 'https://linkedin.com/company/arkhive',
} as const;

// ============================================================
// Color Palette (matching Tailwind config)
// ============================================================

export const COLORS = {
  blood: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#d64545',
    600: '#b93c3c',
    700: '#991b1b',
    800: '#7f1d1d',
    900: '#6b1515',
    950: '#450a0a',
  },
  dark: {
    50: '#f8fafc',
    100: '#f1f5f9',
    200: '#e2e8f0',
    300: '#cbd5e1',
    400: '#94a3b8',
    500: '#64748b',
    600: '#475569',
    700: '#334155',
    800: '#1e293b',
    900: '#0f172a',
    950: '#020617',
  },
} as const;
