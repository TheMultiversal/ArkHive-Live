'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Notification } from '@/types/notifications';

// ============================================================
// Types
// ============================================================

interface NotificationState {
  notifications: Notification[];
  unreadCount: number;
  isOpen: boolean;
  loading: boolean;
  error: string | null;
  
  // Actions
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp' | 'read'>) => void;
  removeNotification: (id: string) => void;
  markAsRead: (id: string) => void;
  markAllAsRead: () => void;
  clearAll: () => void;
  clearByType: (type: Notification['type']) => void;
  setOpen: (isOpen: boolean) => void;
  toggleOpen: () => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
}

// ============================================================
// Store Definition
// ============================================================

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],
      unreadCount: 0,
      isOpen: false,
      loading: false,
      error: null,

      // Add notification
      addNotification: (notification) => {
        const newNotification: Notification = {
          ...notification,
          id: `notif_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          createdAt: new Date().toISOString(),
          read: false,
        };

        set((state) => ({
          notifications: [newNotification, ...state.notifications].slice(0, 100), // Keep max 100
          unreadCount: state.unreadCount + 1,
        }));
      },

      // Remove notification
      removeNotification: (id) =>
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id);
          return {
            notifications: state.notifications.filter((n) => n.id !== id),
            unreadCount: notification && !notification.read
              ? state.unreadCount - 1
              : state.unreadCount,
          };
        }),

      // Mark as read
      markAsRead: (id) =>
        set((state) => {
          const notification = state.notifications.find((n) => n.id === id);
          if (!notification || notification.read) return state;

          return {
            notifications: state.notifications.map((n) =>
              n.id === id ? { ...n, read: true } : n
            ),
            unreadCount: Math.max(0, state.unreadCount - 1),
          };
        }),

      // Mark all as read
      markAllAsRead: () =>
        set((state) => ({
          notifications: state.notifications.map((n) => ({ ...n, read: true })),
          unreadCount: 0,
        })),

      // Clear all notifications
      clearAll: () =>
        set({
          notifications: [],
          unreadCount: 0,
        }),

      // Clear by type
      clearByType: (type) =>
        set((state) => {
          const remaining = state.notifications.filter((n) => n.type !== type);
          const unreadRemaining = remaining.filter((n) => !n.read).length;
          return {
            notifications: remaining,
            unreadCount: unreadRemaining,
          };
        }),

      // Toggle open
      setOpen: (isOpen) => set({ isOpen }),
      toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),

      // Loading/Error
      setLoading: (loading) => set({ loading }),
      setError: (error) => set({ error }),
    }),
    {
      name: 'arkhive-notifications',
      partialize: (state) => ({
        notifications: state.notifications,
      }),
      merge: (persisted, current) => {
        const persistedState = persisted as Record<string, unknown>;
        const notifications = (persistedState?.notifications as Notification[]) || [];
        
        return {
          ...current,
          notifications: notifications,
          unreadCount: notifications.filter((n) => !n.read).length,
        };
      },
    }
  )
);

// ============================================================
// Selectors
// ============================================================

export const selectUnreadNotifications = (state: NotificationState) =>
  state.notifications.filter((n) => !n.read);

export const selectNotificationsByType = (type: Notification['type']) =>
  (state: NotificationState) =>
    state.notifications.filter((n) => n.type === type);

export const selectRecentNotifications = (count: number) =>
  (state: NotificationState) =>
    state.notifications.slice(0, count);

export default useNotificationStore;
