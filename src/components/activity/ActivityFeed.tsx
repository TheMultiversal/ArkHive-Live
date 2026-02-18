'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity,
  Filter,
  RefreshCw,
  ChevronDown,
  Clock,
  FileText,
  Building,
  User,
  Users,
  MessageSquare,
  Edit,
  Trash2,
  Plus,
  Eye,
  Download,
  Upload,
  Link as LinkIcon,
  AlertTriangle,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';
import type { ActivityEvent, ActivityType } from '@/types/activity';

// ============================================================
// Types
// ============================================================

interface ActivityFeedProps {
  activities: ActivityEvent[];
  onLoadMore?: () => void;
  onRefresh?: () => void;
  loading?: boolean;
  hasMore?: boolean;
  filter?: ActivityType | 'all';
  onFilterChange?: (filter: ActivityType | 'all') => void;
  showFilters?: boolean;
  maxHeight?: number | string;
  className?: string;
}

// ============================================================
// Icon Map
// ============================================================

const activityIcons: Record<ActivityType, typeof Activity> = {
  create: Plus,
  update: Edit,
  delete: Trash2,
  view: Eye,
  comment: MessageSquare,
  share: LinkIcon,
  download: Download,
  upload: Upload,
  login: User,
  logout: User,
  join: Users,
  leave: Users,
  invite: Users,
  approve: Activity,
  reject: AlertTriangle,
  publish: FileText,
  archive: FileText,
};

const activityColors: Record<ActivityType, string> = {
  create: 'text-green-500 bg-green-500/10',
  update: 'text-blue-500 bg-blue-500/10',
  delete: 'text-red-500 bg-red-500/10',
  view: 'text-zinc-400 bg-zinc-500/10',
  comment: 'text-purple-500 bg-purple-500/10',
  share: 'text-cyan-500 bg-cyan-500/10',
  download: 'text-orange-500 bg-orange-500/10',
  upload: 'text-yellow-500 bg-yellow-500/10',
  login: 'text-green-500 bg-green-500/10',
  logout: 'text-zinc-500 bg-zinc-500/10',
  join: 'text-cyan-500 bg-cyan-500/10',
  leave: 'text-orange-500 bg-orange-500/10',
  invite: 'text-purple-500 bg-purple-500/10',
  approve: 'text-green-500 bg-green-500/10',
  reject: 'text-red-500 bg-red-500/10',
  publish: 'text-blood-500 bg-blood-500/10',
  archive: 'text-zinc-500 bg-zinc-500/10',
};

// ============================================================
// Component
// ============================================================

export default function ActivityFeed({
  activities,
  onLoadMore,
  onRefresh,
  loading = false,
  hasMore = false,
  filter = 'all',
  onFilterChange,
  showFilters = true,
  maxHeight = 600,
  className,
}: ActivityFeedProps) {
  const [showFilterMenu, setShowFilterMenu] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement>(null);

  // Infinite scroll
  useEffect(() => {
    if (!onLoadMore || !hasMore) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          onLoadMore();
        }
      },
      { threshold: 0.1 }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => observerRef.current?.disconnect();
  }, [onLoadMore, hasMore, loading]);

  const filterOptions: { value: ActivityType | 'all'; label: string }[] = [
    { value: 'all', label: 'All Activity' },
    { value: 'create', label: 'Created' },
    { value: 'update', label: 'Updated' },
    { value: 'delete', label: 'Deleted' },
    { value: 'comment', label: 'Comments' },
    { value: 'share', label: 'Shared' },
    { value: 'download', label: 'Downloads' },
    { value: 'upload', label: 'Uploads' },
  ];

  const filteredActivities =
    filter === 'all'
      ? activities
      : activities.filter((a) => a.type === filter);

  return (
    <div className={cn('bg-zinc-900 border border-zinc-800', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-blood-500" />
          <h3 className="font-semibold text-white">Activity Feed</h3>
          <span className="text-xs text-zinc-500">
            ({filteredActivities.length})
          </span>
        </div>
        <div className="flex items-center gap-2">
          {showFilters && (
            <div className="relative">
              <button
                onClick={() => setShowFilterMenu(!showFilterMenu)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-zinc-400 hover:text-white bg-zinc-800 hover:bg-zinc-700 transition-colors"
              >
                <Filter className="w-4 h-4" />
                {filter === 'all' ? 'All' : filter}
                <ChevronDown className="w-3 h-3" />
              </button>
              <AnimatePresence>
                {showFilterMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    className="absolute right-0 top-full mt-1 w-40 bg-zinc-800 border border-zinc-700 shadow-lg z-10"
                  >
                    {filterOptions.map((option) => (
                      <button
                        key={option.value}
                        onClick={() => {
                          onFilterChange?.(option.value);
                          setShowFilterMenu(false);
                        }}
                        className={cn(
                          'w-full px-3 py-2 text-left text-sm transition-colors',
                          filter === option.value
                            ? 'bg-blood-600 text-white'
                            : 'text-zinc-400 hover:bg-zinc-700 hover:text-white'
                        )}
                      >
                        {option.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
          {onRefresh && (
            <button
              onClick={onRefresh}
              disabled={loading}
              className="p-1.5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors disabled:opacity-50"
            >
              <RefreshCw className={cn('w-4 h-4', loading && 'animate-spin')} />
            </button>
          )}
        </div>
      </div>

      {/* Activity List */}
      <div
        className="overflow-y-auto"
        style={{ maxHeight }}
      >
        {filteredActivities.length === 0 ? (
          <div className="p-8 text-center">
            <Activity className="w-12 h-12 text-zinc-700 mx-auto mb-3" />
            <p className="text-zinc-500">No activity to show</p>
          </div>
        ) : (
          <div className="divide-y divide-zinc-800/50">
            <AnimatePresence initial={false}>
              {filteredActivities.map((activity, index) => (
                <ActivityItem
                  key={activity.id}
                  activity={activity}
                  isLast={index === filteredActivities.length - 1}
                />
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div
            ref={loadMoreRef}
            className="p-4 text-center"
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2 text-zinc-500">
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span className="text-sm">Loading more...</span>
              </div>
            ) : (
              <button
                onClick={onLoadMore}
                className="text-sm text-blood-500 hover:text-blood-400"
              >
                Load more
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================
// Activity Item
// ============================================================

interface ActivityItemProps {
  activity: ActivityEvent;
  isLast?: boolean;
}

function ActivityItem({ activity, isLast }: ActivityItemProps) {
  const Icon = activityIcons[activity.type] || Activity;
  const colorClass = activityColors[activity.type] || 'text-zinc-400 bg-zinc-500/10';

  const timeAgo = formatDistanceToNow(new Date(activity.timestamp), {
    addSuffix: true,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, height: 0 }}
      className="relative flex gap-3 p-4 hover:bg-zinc-800/30 transition-colors"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[30px] top-14 bottom-0 w-px bg-zinc-800" />
      )}

      {/* Icon */}
      <div className={cn('flex-shrink-0 w-8 h-8 flex items-center justify-center', colorClass)}>
        <Icon className="w-4 h-4" />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            {/* Actor */}
            <div className="flex items-center gap-2 mb-1">
              {activity.actor.avatar ? (
                <Image
                  src={activity.actor.avatar}
                  alt={activity.actor.name}
                  width={20}
                  height={20}
                  className="w-5 h-5 rounded-full"
                />
              ) : (
                <div className="w-5 h-5 bg-zinc-700 rounded-full flex items-center justify-center">
                  <User className="w-3 h-3 text-zinc-400" />
                </div>
              )}
              <span className="text-sm font-medium text-white">
                {activity.actor.name}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-400">
              {activity.description}
            </p>

            {/* Target */}
            {activity.target && (
              <a
                href={activity.target.url}
                className="inline-flex items-center gap-1 mt-1 text-xs text-blood-500 hover:text-blood-400"
              >
                {activity.target.type === 'investigation' && <FileText className="w-3 h-3" />}
                {activity.target.type === 'entity' && <Building className="w-3 h-3" />}
                {activity.target.type === 'document' && <FileText className="w-3 h-3" />}
                {activity.target.type === 'workspace' && <Users className="w-3 h-3" />}
                {activity.target.name}
              </a>
            )}
          </div>

          {/* Timestamp */}
          <div className="flex items-center gap-1 text-xs text-zinc-600 flex-shrink-0">
            <Clock className="w-3 h-3" />
            {timeAgo}
          </div>
        </div>

        {/* Metadata */}
        {activity.metadata && Object.keys(activity.metadata).length > 0 && (
          <div className="mt-2 p-2 bg-zinc-800/50 text-xs text-zinc-500">
            {Object.entries(activity.metadata).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <span className="text-zinc-600">{key}:</span>
                <span>{String(value)}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export { ActivityFeed, ActivityItem };
