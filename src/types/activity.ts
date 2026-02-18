// ============================================================
// Activity Types
// ============================================================

export type ActivityType =
  | 'create'
  | 'update'
  | 'delete'
  | 'view'
  | 'comment'
  | 'share'
  | 'download'
  | 'upload'
  | 'login'
  | 'logout'
  | 'join'
  | 'leave'
  | 'invite'
  | 'approve'
  | 'reject'
  | 'publish'
  | 'archive';

export type ActivityTargetType =
  | 'investigation'
  | 'entity'
  | 'document'
  | 'workspace'
  | 'comment'
  | 'user'
  | 'report'
  | 'system';

export interface ActivityActor {
  id: string;
  name: string;
  email?: string;
  avatar?: string;
  type: 'user' | 'system' | 'bot';
}

export interface ActivityTarget {
  id: string;
  name: string;
  type: ActivityTargetType;
  url?: string;
  metadata?: Record<string, unknown>;
}

export interface ActivityEvent {
  id: string;
  type: ActivityType;
  description: string;
  actor: ActivityActor;
  target?: ActivityTarget;
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
  location?: {
    country?: string;
    city?: string;
    region?: string;
  };
  metadata?: Record<string, unknown>;
  changes?: ActivityChange[];
}

export interface ActivityChange {
  field: string;
  oldValue: unknown;
  newValue: unknown;
}

// ============================================================
// Filter & Query Types
// ============================================================

export interface ActivityFilter {
  types?: ActivityType[];
  actors?: string[];
  targets?: string[];
  targetTypes?: ActivityTargetType[];
  dateRange?: {
    from?: string;
    to?: string;
  };
  search?: string;
}

export interface ActivityQueryParams {
  filter?: ActivityFilter;
  page?: number;
  limit?: number;
  sortBy?: 'timestamp' | 'type' | 'actor';
  sortOrder?: 'asc' | 'desc';
}

// ============================================================
// API Response Types
// ============================================================

export interface ActivityListResponse {
  activities: ActivityEvent[];
  total: number;
  page: number;
  limit: number;
  hasMore: boolean;
}

export interface ActivityStatsResponse {
  total: number;
  today: number;
  thisWeek: number;
  thisMonth: number;
  byType: Record<ActivityType, number>;
  byActor: { actor: ActivityActor; count: number }[];
  timeline: { date: string; count: number }[];
}

// ============================================================
// Real-time Types
// ============================================================

export type ActivityEventType =
  | 'activity:new'
  | 'activity:updated'
  | 'activity:deleted';

export interface ActivitySocketEvent {
  type: ActivityEventType;
  payload: {
    activity?: ActivityEvent;
    activityId?: string;
  };
  timestamp: string;
}
