"use client";

import { useState, useMemo, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Activity,
  Bell,
  BellOff,
  Check,
  X,
  Filter,
  Search,
  ChevronDown,
  MoreHorizontal,
  Eye,
  MessageSquare,
  FileText,
  Upload,
  Download,
  Edit,
  Trash2,
  UserPlus,
  UserMinus,
  Link2,
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  RefreshCw,
  Settings,
  FolderOpen,
  Star,
  Tag,
  Hash,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type ActivityType =
  | "evidence_added"
  | "evidence_updated"
  | "evidence_deleted"
  | "document_uploaded"
  | "document_deleted"
  | "comment_added"
  | "annotation_added"
  | "annotation_resolved"
  | "member_joined"
  | "member_left"
  | "member_role_changed"
  | "workspace_created"
  | "workspace_updated"
  | "investigation_linked"
  | "source_verified"
  | "source_rejected"
  | "export_completed"
  | "mention";

export type ActivityCategory =
  | "evidence"
  | "documents"
  | "comments"
  | "members"
  | "workspace"
  | "verification";

export interface ActivityItem {
  id: string;
  type: ActivityType;
  category: ActivityCategory;
  title: string;
  description?: string;
  userId: string;
  userName: string;
  userAvatar?: string;
  userColor: string;
  targetId?: string;
  targetName?: string;
  targetType?: string;
  metadata?: Record<string, unknown>;
  timestamp: Date;
  read: boolean;
  important: boolean;
}

export interface ActivityFilter {
  categories: Set<ActivityCategory>;
  types: Set<ActivityType>;
  unreadOnly: boolean;
  importantOnly: boolean;
  searchQuery: string;
  dateRange?: { start: Date; end: Date };
}

// ============================================================================
// UTILITIES
// ============================================================================

const activityIcons: Record<ActivityType, React.ReactNode> = {
  evidence_added: <Upload className="w-4 h-4" />,
  evidence_updated: <Edit className="w-4 h-4" />,
  evidence_deleted: <Trash2 className="w-4 h-4" />,
  document_uploaded: <FileText className="w-4 h-4" />,
  document_deleted: <Trash2 className="w-4 h-4" />,
  comment_added: <MessageSquare className="w-4 h-4" />,
  annotation_added: <Tag className="w-4 h-4" />,
  annotation_resolved: <CheckCircle className="w-4 h-4" />,
  member_joined: <UserPlus className="w-4 h-4" />,
  member_left: <UserMinus className="w-4 h-4" />,
  member_role_changed: <Shield className="w-4 h-4" />,
  workspace_created: <FolderOpen className="w-4 h-4" />,
  workspace_updated: <Settings className="w-4 h-4" />,
  investigation_linked: <Link2 className="w-4 h-4" />,
  source_verified: <CheckCircle className="w-4 h-4" />,
  source_rejected: <AlertTriangle className="w-4 h-4" />,
  export_completed: <Download className="w-4 h-4" />,
  mention: <Hash className="w-4 h-4" />,
};

const activityColors: Record<ActivityType, string> = {
  evidence_added: "text-emerald-400 bg-emerald-500/10",
  evidence_updated: "text-amber-400 bg-amber-500/10",
  evidence_deleted: "text-red-400 bg-red-500/10",
  document_uploaded: "text-blue-400 bg-blue-500/10",
  document_deleted: "text-red-400 bg-red-500/10",
  comment_added: "text-purple-400 bg-purple-500/10",
  annotation_added: "text-cyan-400 bg-cyan-500/10",
  annotation_resolved: "text-emerald-400 bg-emerald-500/10",
  member_joined: "text-emerald-400 bg-emerald-500/10",
  member_left: "text-zinc-400 bg-zinc-500/10",
  member_role_changed: "text-amber-400 bg-amber-500/10",
  workspace_created: "text-blood-400 bg-blood-500/10",
  workspace_updated: "text-zinc-400 bg-zinc-500/10",
  investigation_linked: "text-blue-400 bg-blue-500/10",
  source_verified: "text-emerald-400 bg-emerald-500/10",
  source_rejected: "text-red-400 bg-red-500/10",
  export_completed: "text-emerald-400 bg-emerald-500/10",
  mention: "text-blood-400 bg-blood-500/10",
};

const categoryLabels: Record<ActivityCategory, string> = {
  evidence: "Evidence",
  documents: "Documents",
  comments: "Comments",
  members: "Members",
  workspace: "Workspace",
  verification: "Verification",
};

function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  const diffHours = Math.floor(diffMs / 3600000);
  const diffDays = Math.floor(diffMs / 86400000);

  if (diffMins < 1) return "Just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  if (diffHours < 24) return `${diffHours}h ago`;
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString();
}

function groupActivitiesByDate(
  activities: ActivityItem[]
): Record<string, ActivityItem[]> {
  const groups: Record<string, ActivityItem[]> = {};

  activities.forEach((activity) => {
    const date = activity.timestamp.toDateString();
    const today = new Date().toDateString();
    const yesterday = new Date(Date.now() - 86400000).toDateString();

    let key: string;
    if (date === today) {
      key = "Today";
    } else if (date === yesterday) {
      key = "Yesterday";
    } else {
      key = activity.timestamp.toLocaleDateString("en-US", {
        weekday: "long",
        month: "short",
        day: "numeric",
      });
    }

    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(activity);
  });

  return groups;
}

// ============================================================================
// ACTIVITY ITEM COMPONENT
// ============================================================================

interface ActivityItemRowProps {
  activity: ActivityItem;
  onMarkRead?: () => void;
  onMarkImportant?: () => void;
  onClick?: () => void;
  compact?: boolean;
}

function ActivityItemRow({
  activity,
  onMarkRead,
  onMarkImportant,
  onClick,
  compact = false,
}: ActivityItemRowProps) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`group relative flex items-start gap-3 p-3 hover:bg-zinc-900/50 transition-colors cursor-pointer ${
        !activity.read ? "bg-blood-900/5" : ""
      }`}
      onClick={onClick}
    >
      {/* Unread indicator */}
      {!activity.read && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blood-500" />
      )}

      {/* Icon */}
      <div className={`p-2 ${activityColors[activity.type]}`}>
        {activityIcons[activity.type]}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <p className="text-sm text-white">
              <span
                className="font-medium"
                style={{ color: activity.userColor }}
              >
                {activity.userName}
              </span>{" "}
              {activity.title}
            </p>
            {!compact && activity.description && (
              <p className="text-xs text-zinc-500 mt-0.5 truncate">
                {activity.description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-1">
            {activity.important && (
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            )}
            <span className="text-xs text-zinc-500 whitespace-nowrap">
              {formatRelativeTime(activity.timestamp)}
            </span>
          </div>
        </div>

        {!compact && activity.targetName && (
          <div className="flex items-center gap-2 mt-2">
            <span className="text-xs text-zinc-600">{activity.targetType}:</span>
            <span className="text-xs text-zinc-400 px-2 py-0.5 bg-zinc-800">
              {activity.targetName}
            </span>
          </div>
        )}
      </div>

      {/* Actions menu */}
      <div className="relative opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
          className="p-1 text-zinc-500 hover:text-white transition-colors"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>

        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute right-0 top-full mt-1 w-40 bg-zinc-900 border border-zinc-800 shadow-xl z-10"
            >
              {onMarkRead && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkRead();
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  {activity.read ? (
                    <>
                      <Eye className="w-4 h-4" />
                      Mark unread
                    </>
                  ) : (
                    <>
                      <Check className="w-4 h-4" />
                      Mark read
                    </>
                  )}
                </button>
              )}
              {onMarkImportant && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onMarkImportant();
                    setShowMenu(false);
                  }}
                  className="w-full flex items-center gap-2 px-3 py-2 text-sm text-zinc-300 hover:bg-zinc-800 transition-colors"
                >
                  <Star
                    className={`w-4 h-4 ${
                      activity.important ? "text-amber-400 fill-amber-400" : ""
                    }`}
                  />
                  {activity.important ? "Unstar" : "Star"}
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

// ============================================================================
// ACTIVITY FILTERS
// ============================================================================

interface ActivityFiltersProps {
  filter: ActivityFilter;
  onFilterChange: (filter: ActivityFilter) => void;
  availableCategories: ActivityCategory[];
}

function ActivityFilters({
  filter,
  onFilterChange,
  availableCategories,
}: ActivityFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount =
    filter.categories.size +
    (filter.unreadOnly ? 1 : 0) +
    (filter.importantOnly ? 1 : 0) +
    (filter.searchQuery ? 1 : 0);

  const toggleCategory = (category: ActivityCategory) => {
    const newCategories = new Set(filter.categories);
    if (newCategories.has(category)) {
      newCategories.delete(category);
    } else {
      newCategories.add(category);
    }
    onFilterChange({ ...filter, categories: newCategories });
  };

  return (
    <div className="border-b border-zinc-800">
      <div className="flex items-center gap-3 p-3">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search activity..."
            value={filter.searchQuery}
            onChange={(e) =>
              onFilterChange({ ...filter, searchQuery: e.target.value })
            }
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 text-white text-sm placeholder-zinc-500 focus:outline-none focus:border-blood-500 transition-colors"
          />
        </div>

        {/* Filter toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-3 py-2 border transition-colors ${
            activeFilterCount > 0
              ? "bg-blood-600/20 border-blood-500/50 text-blood-400"
              : "bg-zinc-900 border-zinc-800 text-zinc-400 hover:text-white"
          }`}
        >
          <Filter className="w-4 h-4" />
          {activeFilterCount > 0 && (
            <span className="text-xs">{activeFilterCount}</span>
          )}
        </button>
      </div>

      {/* Filter options */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-800"
          >
            <div className="p-4 space-y-4">
              {/* Categories */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Categories
                </div>
                <div className="flex flex-wrap gap-2">
                  {availableCategories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-2 py-1 text-sm border transition-colors ${
                        filter.categories.has(category)
                          ? "bg-blood-600/20 border-blood-500/50 text-blood-400"
                          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {categoryLabels[category]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick filters */}
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filter.unreadOnly}
                    onChange={(e) =>
                      onFilterChange({ ...filter, unreadOnly: e.target.checked })
                    }
                    className="form-checkbox"
                  />
                  <span className="text-sm text-zinc-400">Unread only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filter.importantOnly}
                    onChange={(e) =>
                      onFilterChange({
                        ...filter,
                        importantOnly: e.target.checked,
                      })
                    }
                    className="form-checkbox"
                  />
                  <span className="text-sm text-zinc-400">Starred only</span>
                </label>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MAIN ACTIVITY FEED
// ============================================================================

interface ActivityFeedProps {
  activities: ActivityItem[];
  onMarkRead?: (activityId: string) => void;
  onMarkImportant?: (activityId: string) => void;
  onActivityClick?: (activity: ActivityItem) => void;
  onMarkAllRead?: () => void;
  loading?: boolean;
  className?: string;
}

export default function ActivityFeed({
  activities,
  onMarkRead,
  onMarkImportant,
  onActivityClick,
  onMarkAllRead,
  loading = false,
  className = "",
}: ActivityFeedProps) {
  const [filter, setFilter] = useState<ActivityFilter>({
    categories: new Set(),
    types: new Set(),
    unreadOnly: false,
    importantOnly: false,
    searchQuery: "",
  });

  const availableCategories = useMemo(() => {
    return [...new Set(activities.map((a) => a.category))];
  }, [activities]);

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      // Category filter
      if (
        filter.categories.size > 0 &&
        !filter.categories.has(activity.category)
      ) {
        return false;
      }

      // Unread filter
      if (filter.unreadOnly && activity.read) {
        return false;
      }

      // Important filter
      if (filter.importantOnly && !activity.important) {
        return false;
      }

      // Search filter
      if (filter.searchQuery) {
        const query = filter.searchQuery.toLowerCase();
        if (
          !activity.title.toLowerCase().includes(query) &&
          !activity.userName.toLowerCase().includes(query) &&
          !(activity.description || "").toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      return true;
    });
  }, [activities, filter]);

  const groupedActivities = useMemo(
    () => groupActivitiesByDate(filteredActivities),
    [filteredActivities]
  );

  const unreadCount = activities.filter((a) => !a.read).length;

  return (
    <div className={`glass-card flex flex-col ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h3 className="flex items-center gap-2 font-semibold text-white">
          <Activity className="w-5 h-5 text-blood-500" />
          Activity
          {unreadCount > 0 && (
            <span className="px-2 py-0.5 text-xs bg-blood-600 text-white">
              {unreadCount}
            </span>
          )}
        </h3>
        {onMarkAllRead && unreadCount > 0 && (
          <button
            onClick={onMarkAllRead}
            className="text-sm text-blood-400 hover:text-blood-300 transition-colors"
          >
            Mark all read
          </button>
        )}
      </div>

      {/* Filters */}
      <ActivityFilters
        filter={filter}
        onFilterChange={setFilter}
        availableCategories={availableCategories}
      />

      {/* Activity list */}
      <div className="flex-1 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <RefreshCw className="w-6 h-6 text-zinc-500 animate-spin" />
          </div>
        ) : filteredActivities.length === 0 ? (
          <div className="p-8 text-center">
            <Activity className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No activity yet</p>
          </div>
        ) : (
          Object.entries(groupedActivities).map(([date, dateActivities]) => (
            <div key={date}>
              <div className="sticky top-0 z-10 px-4 py-2 text-xs font-medium text-zinc-500 uppercase tracking-wider bg-zinc-900/95 border-b border-zinc-800">
                {date}
              </div>
              <AnimatePresence mode="popLayout">
                {dateActivities.map((activity) => (
                  <ActivityItemRow
                    key={activity.id}
                    activity={activity}
                    onMarkRead={
                      onMarkRead ? () => onMarkRead(activity.id) : undefined
                    }
                    onMarkImportant={
                      onMarkImportant
                        ? () => onMarkImportant(activity.id)
                        : undefined
                    }
                    onClick={
                      onActivityClick
                        ? () => onActivityClick(activity)
                        : undefined
                    }
                  />
                ))}
              </AnimatePresence>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ============================================================================
// COMPACT ACTIVITY WIDGET
// ============================================================================

interface ActivityWidgetProps {
  activities: ActivityItem[];
  maxItems?: number;
  onViewAll?: () => void;
  className?: string;
}

export function ActivityWidget({
  activities,
  maxItems = 5,
  onViewAll,
  className = "",
}: ActivityWidgetProps) {
  const recentActivities = activities.slice(0, maxItems);
  const unreadCount = activities.filter((a) => !a.read).length;

  return (
    <div className={`glass-card ${className}`}>
      <div className="flex items-center justify-between p-3 border-b border-zinc-800">
        <h4 className="flex items-center gap-2 text-sm font-medium text-white">
          <Activity className="w-4 h-4 text-blood-500" />
          Recent Activity
        </h4>
        {unreadCount > 0 && (
          <span className="px-1.5 py-0.5 text-xs bg-blood-600 text-white">
            {unreadCount}
          </span>
        )}
      </div>

      <div className="max-h-64 overflow-y-auto">
        {recentActivities.length === 0 ? (
          <div className="p-4 text-center text-sm text-zinc-500">
            No recent activity
          </div>
        ) : (
          recentActivities.map((activity) => (
            <ActivityItemRow
              key={activity.id}
              activity={activity}
              compact
            />
          ))
        )}
      </div>

      {onViewAll && activities.length > maxItems && (
        <button
          onClick={onViewAll}
          className="w-full flex items-center justify-center gap-2 p-3 text-sm text-blood-400 hover:text-blood-300 hover:bg-zinc-900/50 transition-colors border-t border-zinc-800"
        >
          View all activity
          <ArrowUpRight className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}

// ============================================================================
// NOTIFICATION BELL
// ============================================================================

interface NotificationBellProps {
  unreadCount: number;
  activities: ActivityItem[];
  onMarkAllRead?: () => void;
  onActivityClick?: (activity: ActivityItem) => void;
  className?: string;
}

export function NotificationBell({
  unreadCount,
  activities,
  onMarkAllRead,
  onActivityClick,
  className = "",
}: NotificationBellProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={`relative ${className}`} ref={panelRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2 text-zinc-400 hover:text-white transition-colors"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center text-xs bg-blood-600 text-white">
            {unreadCount > 99 ? "99+" : unreadCount}
          </span>
        )}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute right-0 top-full mt-2 w-80 glass-card shadow-2xl z-50"
          >
            <div className="flex items-center justify-between p-3 border-b border-zinc-800">
              <span className="text-sm font-medium text-white">
                Notifications
              </span>
              {onMarkAllRead && unreadCount > 0 && (
                <button
                  onClick={() => {
                    onMarkAllRead();
                    setIsOpen(false);
                  }}
                  className="text-xs text-blood-400 hover:text-blood-300 transition-colors"
                >
                  Mark all read
                </button>
              )}
            </div>

            <div className="max-h-80 overflow-y-auto">
              {activities.length === 0 ? (
                <div className="p-4 text-center text-sm text-zinc-500">
                  No notifications
                </div>
              ) : (
                activities.slice(0, 10).map((activity) => (
                  <ActivityItemRow
                    key={activity.id}
                    activity={activity}
                    onClick={() => {
                      onActivityClick?.(activity);
                      setIsOpen(false);
                    }}
                    compact
                  />
                ))
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
