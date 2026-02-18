// ============================================================
// Notification Types
// ============================================================

export type NotificationType =
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'investigation'
  | 'entity'
  | 'document'
  | 'workspace'
  | 'system';

export type NotificationPriority = 'low' | 'normal' | 'high' | 'urgent';

export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  message?: string;
  read: boolean;
  createdAt: string;
  updatedAt?: string;
  expiresAt?: string;
  priority?: NotificationPriority;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, unknown>;
  sender?: NotificationSender;
  groupId?: string;
  dismissible?: boolean;
}

export interface NotificationSender {
  id: string;
  name: string;
  avatar?: string;
  type: 'user' | 'system' | 'bot';
}

export interface NotificationGroup {
  id: string;
  type: NotificationType;
  title: string;
  count: number;
  latestNotification: Notification;
  notifications: Notification[];
}

export interface NotificationPreferences {
  email: {
    enabled: boolean;
    digest: 'instant' | 'daily' | 'weekly' | 'never';
    types: NotificationType[];
  };
  push: {
    enabled: boolean;
    types: NotificationType[];
  };
  inApp: {
    enabled: boolean;
    sound: boolean;
    desktop: boolean;
    types: NotificationType[];
  };
}

export interface NotificationFilter {
  types?: NotificationType[];
  read?: boolean;
  priority?: NotificationPriority[];
  dateRange?: {
    from?: string;
    to?: string;
  };
  search?: string;
}

export interface NotificationStats {
  total: number;
  unread: number;
  byType: Record<NotificationType, number>;
  byPriority: Record<NotificationPriority, number>;
}

// ============================================================
// API Types
// ============================================================

export interface CreateNotificationRequest {
  type: NotificationType;
  title: string;
  message?: string;
  priority?: NotificationPriority;
  actionUrl?: string;
  actionLabel?: string;
  metadata?: Record<string, unknown>;
  recipients?: string[];
  expiresAt?: string;
}

export interface UpdateNotificationRequest {
  read?: boolean;
  metadata?: Record<string, unknown>;
}

export interface NotificationResponse {
  notification: Notification;
}

export interface NotificationsListResponse {
  notifications: Notification[];
  total: number;
  unreadCount: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface MarkReadRequest {
  notificationIds: string[];
}

export interface BulkDeleteRequest {
  notificationIds: string[];
}

// ============================================================
// Event Types
// ============================================================

export type NotificationEventType =
  | 'notification:created'
  | 'notification:updated'
  | 'notification:deleted'
  | 'notification:read'
  | 'notification:unread'
  | 'notifications:cleared';

export interface NotificationEvent {
  type: NotificationEventType;
  payload: {
    notificationId?: string;
    notificationIds?: string[];
    notification?: Notification;
  };
  timestamp: string;
}
