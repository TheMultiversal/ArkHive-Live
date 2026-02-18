'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';

// ============================================================
// Types
// ============================================================

export interface Notification {
  id: string;
  type: 'info' | 'success' | 'warning' | 'error' | 'investigation' | 'entity' | 'document' | 'workspace' | 'system';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, unknown>;
}

export interface NotificationPreferences {
  email: boolean;
  push: boolean;
  inApp: boolean;
  sound: boolean;
  types: {
    [key in Notification['type']]?: boolean;
  };
}

export interface UseNotificationsOptions {
  maxNotifications?: number;
  autoMarkRead?: boolean;
  soundEnabled?: boolean;
  persistKey?: string;
}

export interface UseNotificationsReturn {
  notifications: Notification[];
  unreadCount: number;
  loading: boolean;
  error: Error | null;
  preferences: NotificationPreferences;
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  updatePreferences: (prefs: Partial<NotificationPreferences>) => void;
  refresh: () => Promise<void>;
}

// ============================================================
// Default Values
// ============================================================

const DEFAULT_PREFERENCES: NotificationPreferences = {
  email: true,
  push: true,
  inApp: true,
  sound: true,
  types: {
    info: true,
    success: true,
    warning: true,
    error: true,
    investigation: true,
    entity: true,
    document: true,
    workspace: true,
    system: true,
  },
};

// ============================================================
// Hook Implementation
// ============================================================

export function useNotifications(
  options: UseNotificationsOptions = {}
): UseNotificationsReturn {
  const {
    maxNotifications = 50,
    autoMarkRead = false,
    soundEnabled = true,
    persistKey = 'arkhive_notifications',
  } = options;

  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [preferences, setPreferences] = useState<NotificationPreferences>(DEFAULT_PREFERENCES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Load from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem(persistKey);
      if (stored) {
        const parsed = JSON.parse(stored);
        setNotifications(
          parsed.notifications.map((n: Notification) => ({
            ...n,
            timestamp: new Date(n.timestamp),
          }))
        );
        setPreferences({ ...DEFAULT_PREFERENCES, ...parsed.preferences });
      }
    } catch (err) {
      console.error('Failed to load notifications:', err);
    } finally {
      setLoading(false);
    }
  }, [persistKey]);

  // Persist to localStorage
  useEffect(() => {
    if (!loading) {
      localStorage.setItem(
        persistKey,
        JSON.stringify({ notifications, preferences })
      );
    }
  }, [notifications, preferences, persistKey, loading]);

  // Calculate unread count
  const unreadCount = useMemo(
    () => notifications.filter((n) => !n.read).length,
    [notifications]
  );

  // Add notification
  const addNotification = useCallback(
    (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => {
      // Check if type is enabled
      if (!preferences.types[notification.type]) return;

      const newNotification: Notification = {
        ...notification,
        id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        timestamp: new Date(),
        read: false,
      };

      setNotifications((prev) => {
        const updated = [newNotification, ...prev].slice(0, maxNotifications);
        return updated;
      });

      // Play sound
      if (soundEnabled && preferences.sound) {
        const audio = new Audio('/sounds/notification.mp3');
        audio.volume = 0.5;
        audio.play().catch(() => {});
      }
    },
    [maxNotifications, soundEnabled, preferences]
  );

  // Remove notification
  const removeNotification = useCallback((id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  }, []);

  // Mark as read
  const markAsRead = useCallback((id: string) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  // Mark all as read
  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  // Clear all
  const clearAll = useCallback(() => {
    setNotifications([]);
  }, []);

  // Update preferences
  const updatePreferences = useCallback(
    (prefs: Partial<NotificationPreferences>) => {
      setPreferences((prev) => ({ ...prev, ...prefs }));
    },
    []
  );

  // Refresh (simulate API call)
  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      // In a real app, this would fetch from API
      await new Promise((resolve) => setTimeout(resolve, 500));
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to refresh'));
    } finally {
      setLoading(false);
    }
  }, []);

  // Auto mark read on view
  useEffect(() => {
    if (autoMarkRead && unreadCount > 0) {
      const timeout = setTimeout(markAllAsRead, 5000);
      return () => clearTimeout(timeout);
    }
  }, [autoMarkRead, unreadCount, markAllAsRead]);

  return {
    notifications,
    unreadCount,
    loading,
    error,
    preferences,
    addNotification,
    removeNotification,
    markAsRead,
    markAllAsRead,
    clearAll,
    updatePreferences,
    refresh,
  };
}

export default useNotifications;
