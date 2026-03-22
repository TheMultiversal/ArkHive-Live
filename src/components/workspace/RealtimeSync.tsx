"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  RefreshCw,
  Cloud,
  CloudOff,
  Wifi,
  WifiOff,
  Check,
  AlertTriangle,
  Clock,
  ArrowUp,
  ArrowDown,
  Loader2,
  Circle,
  X,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type SyncStatus =
  | "synced"
  | "syncing"
  | "pending"
  | "conflict"
  | "error"
  | "offline";

export type ChangeType = "create" | "update" | "delete";

export interface SyncChange<T = unknown> {
  id: string;
  type: ChangeType;
  entityType: string;
  entityId: string;
  data: T;
  timestamp: Date;
  userId: string;
  version: number;
  synced: boolean;
  error?: string;
}

export interface SyncState {
  status: SyncStatus;
  lastSynced: Date | null;
  pendingChanges: number;
  isOnline: boolean;
  isSyncing: boolean;
  error: string | null;
}

export interface ConflictResolution<T = unknown> {
  change: SyncChange<T>;
  serverVersion: T;
  localVersion: T;
  resolution: "local" | "server" | "merge" | null;
  mergedData?: T;
}

// ============================================================================
// SYNC HOOK
// ============================================================================

interface UseSyncOptions {
  endpoint?: string;
  pollingInterval?: number;
  retryAttempts?: number;
  retryDelay?: number;
}

interface UseSyncReturn<T> {
  status: SyncStatus;
  lastSynced: Date | null;
  pendingChanges: SyncChange<T>[];
  conflicts: ConflictResolution<T>[];
  isOnline: boolean;
  isSyncing: boolean;
  error: string | null;
  sync: () => Promise<void>;
  addChange: (change: Omit<SyncChange<T>, "id" | "timestamp" | "synced">) => void;
  resolveConflict: (
    conflictId: string,
    resolution: "local" | "server" | "merge",
    mergedData?: T
  ) => void;
  clearPending: () => void;
}

export function useSync<T = unknown>(
  options: UseSyncOptions = {}
): UseSyncReturn<T> {
  const { pollingInterval = 30000, retryAttempts = 3, retryDelay = 1000 } = options;

  const [status, setStatus] = useState<SyncStatus>("synced");
  const [lastSynced, setLastSynced] = useState<Date | null>(null);
  const [pendingChanges, setPendingChanges] = useState<SyncChange<T>[]>([]);
  const [conflicts, setConflicts] = useState<ConflictResolution<T>[]>([]);
  const [isOnline, setIsOnline] = useState(true);
  const [isSyncing, setIsSyncing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const syncTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const retryCountRef = useRef(0);

  // Monitor online status
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      setStatus((prev) => (prev === "offline" ? "pending" : prev));
    };
    const handleOffline = () => {
      setIsOnline(false);
      setStatus("offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    setIsOnline(navigator.onLine);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // Polling
  useEffect(() => {
    if (pollingInterval > 0 && isOnline) {
      syncTimeoutRef.current = setInterval(() => {
        if (!isSyncing && pendingChanges.length > 0) {
          sync();
        }
      }, pollingInterval);
    }

    return () => {
      if (syncTimeoutRef.current) {
        clearInterval(syncTimeoutRef.current);
      }
    };
  }, [pollingInterval, isOnline, isSyncing, pendingChanges.length]);

  const sync = useCallback(async () => {
    if (isSyncing || !isOnline) return;

    setIsSyncing(true);
    setStatus("syncing");
    setError(null);

    try {
      // Simulate sync - in real app, this would call the API
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mark all pending changes as synced
      setPendingChanges((prev) =>
        prev.map((change) => ({ ...change, synced: true }))
      );

      // Clear synced changes
      setPendingChanges((prev) => prev.filter((c) => !c.synced));

      setLastSynced(new Date());
      setStatus("synced");
      retryCountRef.current = 0;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Sync failed";
      setError(errorMessage);

      if (retryCountRef.current < retryAttempts) {
        retryCountRef.current++;
        setTimeout(() => sync(), retryDelay * retryCountRef.current);
      } else {
        setStatus("error");
      }
    } finally {
      setIsSyncing(false);
    }
  }, [isSyncing, isOnline, retryAttempts, retryDelay]);

  const addChange = useCallback(
    (change: Omit<SyncChange<T>, "id" | "timestamp" | "synced">) => {
      const newChange: SyncChange<T> = {
        ...change,
        id: `change-${Date.now()}-${Math.random().toString(36).slice(2)}`,
        timestamp: new Date(),
        synced: false,
      };

      setPendingChanges((prev) => [...prev, newChange]);
      setStatus("pending");
    },
    []
  );

  const resolveConflict = useCallback(
    (
      conflictId: string,
      resolution: "local" | "server" | "merge",
      mergedData?: T
    ) => {
      setConflicts((prev) =>
        prev.map((c) =>
          c.change.id === conflictId
            ? { ...c, resolution, mergedData }
            : c
        )
      );

      // Remove resolved conflicts
      setConflicts((prev) => prev.filter((c) => c.resolution === null));
    },
    []
  );

  const clearPending = useCallback(() => {
    setPendingChanges([]);
    setStatus(conflicts.length > 0 ? "conflict" : "synced");
  }, [conflicts.length]);

  return {
    status,
    lastSynced,
    pendingChanges,
    conflicts,
    isOnline,
    isSyncing,
    error,
    sync,
    addChange,
    resolveConflict,
    clearPending,
  };
}

// ============================================================================
// SYNC STATUS INDICATOR
// ============================================================================

interface SyncStatusIndicatorProps {
  status: SyncStatus;
  lastSynced: Date | null;
  pendingChanges: number;
  isOnline: boolean;
  onSync?: () => void;
  compact?: boolean;
  className?: string;
}

export function SyncStatusIndicator({
  status,
  lastSynced,
  pendingChanges,
  isOnline,
  onSync,
  compact = false,
  className = "",
}: SyncStatusIndicatorProps) {
  const statusConfig: Record<
    SyncStatus,
    { icon: React.ReactNode; color: string; label: string }
  > = {
    synced: {
      icon: <Check className="w-4 h-4" />,
      color: "text-emerald-400",
      label: "Synced",
    },
    syncing: {
      icon: <Loader2 className="w-4 h-4 animate-spin" />,
      color: "text-blood-400",
      label: "Syncing...",
    },
    pending: {
      icon: <Clock className="w-4 h-4" />,
      color: "text-amber-400",
      label: `${pendingChanges} pending`,
    },
    conflict: {
      icon: <AlertTriangle className="w-4 h-4" />,
      color: "text-red-400",
      label: "Conflict",
    },
    error: {
      icon: <X className="w-4 h-4" />,
      color: "text-red-400",
      label: "Error",
    },
    offline: {
      icon: <WifiOff className="w-4 h-4" />,
      color: "text-zinc-400",
      label: "Offline",
    },
  };

  const config = statusConfig[status];

  if (compact) {
    return (
      <button
        onClick={onSync}
        disabled={status === "syncing" || !isOnline}
        className={`p-2 ${config.color} hover:bg-zinc-800 transition-colors disabled:opacity-50 ${className}`}
        title={config.label}
      >
        {config.icon}
      </button>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className={`flex items-center gap-2 ${config.color}`}>
        {config.icon}
        <span className="text-sm">{config.label}</span>
      </div>

      {lastSynced && status === "synced" && (
        <span className="text-xs text-zinc-500">
          Last: {lastSynced.toLocaleTimeString()}
        </span>
      )}

      {onSync && status !== "syncing" && isOnline && (
        <button
          onClick={onSync}
          className="p-1 text-zinc-500 hover:text-white transition-colors"
          title="Sync now"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      )}

      <span
        className={`flex items-center gap-1 text-xs ${
          isOnline ? "text-emerald-400" : "text-zinc-500"
        }`}
      >
        {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
      </span>
    </div>
  );
}

// ============================================================================
// PENDING CHANGES PANEL
// ============================================================================

interface PendingChangesPanelProps<T> {
  changes: SyncChange<T>[];
  onSync: () => void;
  onClear: () => void;
  onRemoveChange?: (changeId: string) => void;
  isSyncing: boolean;
  className?: string;
}

export function PendingChangesPanel<T>({
  changes,
  onSync,
  onClear,
  onRemoveChange,
  isSyncing,
  className = "",
}: PendingChangesPanelProps<T>) {
  const [expanded, setExpanded] = useState(false);

  const changeTypeConfig: Record<
    ChangeType,
    { icon: React.ReactNode; color: string }
  > = {
    create: { icon: <ArrowUp className="w-3 h-3" />, color: "text-emerald-400" },
    update: { icon: <RefreshCw className="w-3 h-3" />, color: "text-amber-400" },
    delete: { icon: <X className="w-3 h-3" />, color: "text-red-400" },
  };

  if (changes.length === 0) return null;

  return (
    <div className={`glass-card ${className}`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-3 text-left"
      >
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-amber-400" />
          <span className="text-sm text-white">
            {changes.length} pending change{changes.length !== 1 ? "s" : ""}
          </span>
        </div>
        <motion.span
          animate={{ rotate: expanded ? 180 : 0 }}
          className="text-zinc-500"
        >
          <ArrowDown className="w-4 h-4" />
        </motion.span>
      </button>

      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-zinc-800"
          >
            <div className="p-3 max-h-60 overflow-y-auto space-y-2">
              {changes.map((change) => {
                const config = changeTypeConfig[change.type];
                return (
                  <div
                    key={change.id}
                    className="flex items-center gap-3 p-2 bg-zinc-900/50 border border-zinc-800"
                  >
                    <span className={`p-1 bg-zinc-800 ${config.color}`}>
                      {config.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-white truncate">
                        {change.entityType}: {change.entityId}
                      </div>
                      <div className="text-xs text-zinc-500">
                        {change.timestamp.toLocaleTimeString()}
                      </div>
                    </div>
                    {onRemoveChange && (
                      <button
                        onClick={() => onRemoveChange(change.id)}
                        className="p-1 text-zinc-500 hover:text-red-400 transition-colors"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="flex items-center gap-2 p-3 border-t border-zinc-800">
              <button
                onClick={onSync}
                disabled={isSyncing}
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors disabled:opacity-50"
              >
                {isSyncing ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <ArrowUp className="w-4 h-4" />
                )}
                {isSyncing ? "Syncing..." : "Sync Now"}
              </button>
              <button
                onClick={onClear}
                className="px-3 py-2 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-600 transition-colors"
              >
                Clear
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// CONFLICT RESOLUTION DIALOG
// ============================================================================

interface ConflictResolutionDialogProps<T> {
  conflict: ConflictResolution<T>;
  renderValue: (value: T) => React.ReactNode;
  onResolve: (resolution: "local" | "server" | "merge", mergedData?: T) => void;
  onCancel: () => void;
  className?: string;
}

export function ConflictResolutionDialog<T>({
  conflict,
  renderValue,
  onResolve,
  onCancel,
  className = "",
}: ConflictResolutionDialogProps<T>) {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 ${className}`}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-card w-full max-w-2xl mx-4"
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
          <AlertTriangle className="w-6 h-6 text-red-400" />
          <div>
            <h3 className="text-lg font-semibold text-white">
              Sync Conflict Detected
            </h3>
            <p className="text-sm text-zinc-400">
              Choose which version to keep or merge the changes
            </p>
          </div>
        </div>

        {/* Comparison */}
        <div className="grid grid-cols-2 gap-4 p-4">
          <div className="p-4 bg-zinc-900 border border-zinc-800">
            <h4 className="flex items-center gap-2 text-sm font-medium text-zinc-400 mb-3">
              <Cloud className="w-4 h-4" />
              Server Version
            </h4>
            <div className="text-sm text-zinc-300">
              {renderValue(conflict.serverVersion)}
            </div>
          </div>

          <div className="p-4 bg-zinc-900 border border-zinc-800">
            <h4 className="flex items-center gap-2 text-sm font-medium text-zinc-400 mb-3">
              <Circle className="w-4 h-4" />
              Local Version
            </h4>
            <div className="text-sm text-zinc-300">
              {renderValue(conflict.localVersion)}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3 p-4 border-t border-zinc-800">
          <button
            onClick={onCancel}
            className="px-4 py-2 text-zinc-400 hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onResolve("server")}
            className="px-4 py-2 border border-blood-500/50 text-blood-400 hover:bg-blood-500/10 transition-colors"
          >
            Use Server
          </button>
          <button
            onClick={() => onResolve("local")}
            className="px-4 py-2 border border-amber-500/50 text-amber-400 hover:bg-amber-500/10 transition-colors"
          >
            Use Local
          </button>
          <button
            onClick={() => onResolve("merge")}
            className="px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
          >
            Merge Changes
          </button>
        </div>
      </motion.div>
    </div>
  );
}

// ============================================================================
// SYNC ACTIVITY LOG
// ============================================================================

interface SyncActivityLogProps {
  activities: Array<{
    id: string;
    type: "sync" | "conflict" | "error" | "offline" | "online";
    message: string;
    timestamp: Date;
  }>;
  maxItems?: number;
  className?: string;
}

export function SyncActivityLog({
  activities,
  maxItems = 10,
  className = "",
}: SyncActivityLogProps) {
  const displayActivities = activities.slice(0, maxItems);

  const typeConfig = {
    sync: { icon: <Check className="w-3 h-3" />, color: "text-emerald-400" },
    conflict: {
      icon: <AlertTriangle className="w-3 h-3" />,
      color: "text-red-400",
    },
    error: { icon: <X className="w-3 h-3" />, color: "text-red-400" },
    offline: { icon: <CloudOff className="w-3 h-3" />, color: "text-zinc-400" },
    online: { icon: <Cloud className="w-3 h-3" />, color: "text-emerald-400" },
  };

  return (
    <div className={`glass-card ${className}`}>
      <div className="p-3 border-b border-zinc-800">
        <h4 className="text-sm font-medium text-zinc-400">Sync Activity</h4>
      </div>
      <div className="max-h-48 overflow-y-auto">
        {displayActivities.length === 0 ? (
          <div className="p-4 text-center text-sm text-zinc-500">
            No recent activity
          </div>
        ) : (
          displayActivities.map((activity) => {
            const config = typeConfig[activity.type];
            return (
              <div
                key={activity.id}
                className="flex items-start gap-2 p-3 border-b border-zinc-800/50 last:border-0"
              >
                <span className={`p-1 ${config.color}`}>{config.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-zinc-300">{activity.message}</p>
                  <span className="text-xs text-zinc-500">
                    {activity.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
