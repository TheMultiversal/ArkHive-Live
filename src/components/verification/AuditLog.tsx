"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  History,
  User,
  Calendar,
  Clock,
  Filter,
  Search,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FileText,
  Link2,
  Download,
  Eye,
  Edit,
  Trash2,
  Shield,
  Hash,
  RefreshCw,
  Plus,
  ArrowUpRight,
  Activity,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type AuditAction =
  | "create"
  | "update"
  | "delete"
  | "verify"
  | "reject"
  | "archive"
  | "restore"
  | "export"
  | "access"
  | "hash_generate"
  | "hash_verify"
  | "source_add"
  | "source_remove"
  | "confidence_update";

export type AuditCategory =
  | "evidence"
  | "source"
  | "verification"
  | "access"
  | "system";

export interface AuditEntry {
  id: string;
  timestamp: Date;
  action: AuditAction;
  category: AuditCategory;
  userId: string;
  userName: string;
  userRole?: string;
  targetId: string;
  targetType: string;
  targetName: string;
  details: string;
  metadata?: Record<string, unknown>;
  previousValue?: string;
  newValue?: string;
  ipAddress?: string;
  success: boolean;
  errorMessage?: string;
}

interface AuditLogProps {
  entries: AuditEntry[];
  onEntryClick?: (entry: AuditEntry) => void;
  onExport?: () => void;
  className?: string;
}

// ============================================================================
// UTILITIES
// ============================================================================

const actionIcons: Record<AuditAction, React.ReactNode> = {
  create: <Plus className="w-4 h-4" />,
  update: <Edit className="w-4 h-4" />,
  delete: <Trash2 className="w-4 h-4" />,
  verify: <CheckCircle className="w-4 h-4" />,
  reject: <XCircle className="w-4 h-4" />,
  archive: <History className="w-4 h-4" />,
  restore: <RefreshCw className="w-4 h-4" />,
  export: <Download className="w-4 h-4" />,
  access: <Eye className="w-4 h-4" />,
  hash_generate: <Hash className="w-4 h-4" />,
  hash_verify: <Shield className="w-4 h-4" />,
  source_add: <Link2 className="w-4 h-4" />,
  source_remove: <Link2 className="w-4 h-4" />,
  confidence_update: <Activity className="w-4 h-4" />,
};

const actionColors: Record<AuditAction, string> = {
  create: "text-emerald-400 bg-emerald-500/10",
  update: "text-amber-400 bg-amber-500/10",
  delete: "text-red-400 bg-red-500/10",
  verify: "text-emerald-400 bg-emerald-500/10",
  reject: "text-red-400 bg-red-500/10",
  archive: "text-zinc-400 bg-zinc-500/10",
  restore: "text-blue-400 bg-blue-500/10",
  export: "text-purple-400 bg-purple-500/10",
  access: "text-zinc-400 bg-zinc-500/10",
  hash_generate: "text-cyan-400 bg-cyan-500/10",
  hash_verify: "text-emerald-400 bg-emerald-500/10",
  source_add: "text-blue-400 bg-blue-500/10",
  source_remove: "text-orange-400 bg-orange-500/10",
  confidence_update: "text-amber-400 bg-amber-500/10",
};

const actionLabels: Record<AuditAction, string> = {
  create: "Created",
  update: "Updated",
  delete: "Deleted",
  verify: "Verified",
  reject: "Rejected",
  archive: "Archived",
  restore: "Restored",
  export: "Exported",
  access: "Accessed",
  hash_generate: "Generated Hash",
  hash_verify: "Verified Hash",
  source_add: "Added Source",
  source_remove: "Removed Source",
  confidence_update: "Updated Confidence",
};

const categoryLabels: Record<AuditCategory, string> = {
  evidence: "Evidence",
  source: "Source",
  verification: "Verification",
  access: "Access",
  system: "System",
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

// ============================================================================
// AUDIT ENTRY ROW
// ============================================================================

interface AuditEntryRowProps {
  entry: AuditEntry;
  expanded: boolean;
  onToggle: () => void;
  onClick?: () => void;
}

function AuditEntryRow({
  entry,
  expanded,
  onToggle,
  onClick,
}: AuditEntryRowProps) {
  return (
    <div
      className={`border-b border-zinc-800/50 last:border-0 ${
        !entry.success ? "bg-red-500/5" : ""
      }`}
    >
      <div
        className="flex items-center gap-3 p-3 cursor-pointer hover:bg-zinc-900/50 transition-colors"
        onClick={onToggle}
      >
        {/* Expand toggle */}
        <button
          className="text-zinc-500 hover:text-zinc-300 transition-colors"
          aria-label={expanded ? "Collapse" : "Expand"}
        >
          {expanded ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
        </button>

        {/* Action icon */}
        <span className={`p-2 ${actionColors[entry.action]}`}>
          {actionIcons[entry.action]}
        </span>

        {/* Action info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-white">
              {actionLabels[entry.action]}
            </span>
            <span className="text-zinc-400">
              {entry.targetType}: {entry.targetName}
            </span>
            {!entry.success && (
              <span className="px-1.5 py-0.5 text-xs bg-red-500/20 text-red-400 border border-red-500/30">
                FAILED
              </span>
            )}
          </div>
          <div className="text-sm text-zinc-500 truncate">{entry.details}</div>
        </div>

        {/* User */}
        <div className="flex items-center gap-2 text-sm">
          <div className="w-6 h-6 bg-zinc-800 flex items-center justify-center">
            <User className="w-3.5 h-3.5 text-zinc-500" />
          </div>
          <div className="hidden sm:block">
            <div className="text-zinc-300">{entry.userName}</div>
            {entry.userRole && (
              <div className="text-xs text-zinc-500">{entry.userRole}</div>
            )}
          </div>
        </div>

        {/* Time */}
        <div className="text-right text-sm hidden md:block">
          <div className="text-zinc-400">{formatRelativeTime(entry.timestamp)}</div>
          <div className="text-xs text-zinc-500">
            {entry.timestamp.toLocaleTimeString()}
          </div>
        </div>

        {/* View detail */}
        {onClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="p-2 text-zinc-500 hover:text-blood-400 transition-colors"
            aria-label="View details"
          >
            <ArrowUpRight className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Expanded details */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden bg-zinc-900/30"
          >
            <div className="p-4 pl-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Entry ID */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Entry ID
                </div>
                <div className="text-sm text-zinc-300 font-mono">
                  {entry.id}
                </div>
              </div>

              {/* Category */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Category
                </div>
                <div className="text-sm text-zinc-300">
                  {categoryLabels[entry.category]}
                </div>
              </div>

              {/* Timestamp */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                  Timestamp
                </div>
                <div className="text-sm text-zinc-300">
                  {entry.timestamp.toISOString()}
                </div>
              </div>

              {/* IP Address */}
              {entry.ipAddress && (
                <div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    IP Address
                  </div>
                  <div className="text-sm text-zinc-300 font-mono">
                    {entry.ipAddress}
                  </div>
                </div>
              )}

              {/* Value changes */}
              {(entry.previousValue || entry.newValue) && (
                <div className="col-span-2 md:col-span-4">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                    Changes
                  </div>
                  <div className="flex items-center gap-4">
                    {entry.previousValue && (
                      <div className="flex-1 p-2 bg-red-500/10 border border-red-500/20">
                        <div className="text-xs text-red-400 mb-1">Previous</div>
                        <div className="text-sm text-zinc-300 font-mono break-all">
                          {entry.previousValue}
                        </div>
                      </div>
                    )}
                    {entry.newValue && (
                      <div className="flex-1 p-2 bg-emerald-500/10 border border-emerald-500/20">
                        <div className="text-xs text-emerald-400 mb-1">New</div>
                        <div className="text-sm text-zinc-300 font-mono break-all">
                          {entry.newValue}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Error message */}
              {entry.errorMessage && (
                <div className="col-span-2 md:col-span-4">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Error
                  </div>
                  <div className="p-2 bg-red-500/10 border border-red-500/20 text-sm text-red-300">
                    {entry.errorMessage}
                  </div>
                </div>
              )}

              {/* Metadata */}
              {entry.metadata && Object.keys(entry.metadata).length > 0 && (
                <div className="col-span-2 md:col-span-4">
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mb-1">
                    Metadata
                  </div>
                  <pre className="p-2 bg-zinc-900 border border-zinc-800 text-xs text-zinc-400 overflow-x-auto">
                    {JSON.stringify(entry.metadata, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// AUDIT LOG FILTERS
// ============================================================================

interface AuditFiltersProps {
  actions: AuditAction[];
  selectedActions: Set<AuditAction>;
  categories: AuditCategory[];
  selectedCategories: Set<AuditCategory>;
  searchQuery: string;
  dateRange: { start?: Date; end?: Date };
  onActionToggle: (action: AuditAction) => void;
  onCategoryToggle: (category: AuditCategory) => void;
  onSearchChange: (query: string) => void;
  onDateRangeChange: (range: { start?: Date; end?: Date }) => void;
  onClear: () => void;
}

function AuditFilters({
  actions,
  selectedActions,
  categories,
  selectedCategories,
  searchQuery,
  onActionToggle,
  onCategoryToggle,
  onSearchChange,
  onClear,
}: AuditFiltersProps) {
  const [showFilters, setShowFilters] = useState(false);

  const activeFilterCount =
    selectedActions.size + selectedCategories.size + (searchQuery ? 1 : 0);

  return (
    <div className="border-b border-zinc-800">
      <div className="flex items-center gap-3 p-3">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            placeholder="Search audit log..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 transition-colors"
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
          Filters
          {activeFilterCount > 0 && (
            <span className="px-1.5 py-0.5 text-xs bg-blood-600 text-white">
              {activeFilterCount}
            </span>
          )}
        </button>

        {/* Clear filters */}
        {activeFilterCount > 0 && (
          <button
            onClick={onClear}
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            Clear
          </button>
        )}
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
              {/* Actions */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Actions
                </div>
                <div className="flex flex-wrap gap-2">
                  {actions.map((action) => (
                    <button
                      key={action}
                      onClick={() => onActionToggle(action)}
                      className={`px-2 py-1 text-sm border transition-colors ${
                        selectedActions.has(action)
                          ? `${actionColors[action]} border-current`
                          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {actionLabels[action]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Categories
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => onCategoryToggle(category)}
                      className={`px-2 py-1 text-sm border transition-colors ${
                        selectedCategories.has(category)
                          ? "bg-blood-600/20 border-blood-500/50 text-blood-400"
                          : "bg-zinc-900 border-zinc-700 text-zinc-400 hover:text-white"
                      }`}
                    >
                      {categoryLabels[category]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MAIN AUDIT LOG COMPONENT
// ============================================================================

export default function AuditLog({
  entries,
  onEntryClick,
  onExport,
  className = "",
}: AuditLogProps) {
  const [expandedEntries, setExpandedEntries] = useState<Set<string>>(new Set());
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedActions, setSelectedActions] = useState<Set<AuditAction>>(
    new Set()
  );
  const [selectedCategories, setSelectedCategories] = useState<Set<AuditCategory>>(
    new Set()
  );
  const [dateRange, setDateRange] = useState<{ start?: Date; end?: Date }>({});

  // Get unique actions and categories
  const availableActions = useMemo(
    () => [...new Set(entries.map((e) => e.action))],
    [entries]
  );
  const availableCategories = useMemo(
    () => [...new Set(entries.map((e) => e.category))],
    [entries]
  );

  // Filter entries
  const filteredEntries = useMemo(() => {
    return entries.filter((entry) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (
          !entry.details.toLowerCase().includes(query) &&
          !entry.targetName.toLowerCase().includes(query) &&
          !entry.userName.toLowerCase().includes(query)
        ) {
          return false;
        }
      }

      // Action filter
      if (selectedActions.size > 0 && !selectedActions.has(entry.action)) {
        return false;
      }

      // Category filter
      if (
        selectedCategories.size > 0 &&
        !selectedCategories.has(entry.category)
      ) {
        return false;
      }

      // Date range filter
      if (dateRange.start && entry.timestamp < dateRange.start) {
        return false;
      }
      if (dateRange.end && entry.timestamp > dateRange.end) {
        return false;
      }

      return true;
    });
  }, [entries, searchQuery, selectedActions, selectedCategories, dateRange]);

  // Group entries by date
  const groupedEntries = useMemo(() => {
    const groups: Record<string, AuditEntry[]> = {};

    filteredEntries.forEach((entry) => {
      const dateKey = entry.timestamp.toLocaleDateString();
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(entry);
    });

    return groups;
  }, [filteredEntries]);

  const toggleEntry = useCallback((entryId: string) => {
    setExpandedEntries((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(entryId)) {
        newSet.delete(entryId);
      } else {
        newSet.add(entryId);
      }
      return newSet;
    });
  }, []);

  const handleActionToggle = useCallback((action: AuditAction) => {
    setSelectedActions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(action)) {
        newSet.delete(action);
      } else {
        newSet.add(action);
      }
      return newSet;
    });
  }, []);

  const handleCategoryToggle = useCallback((category: AuditCategory) => {
    setSelectedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(category)) {
        newSet.delete(category);
      } else {
        newSet.add(category);
      }
      return newSet;
    });
  }, []);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setSelectedActions(new Set());
    setSelectedCategories(new Set());
    setDateRange({});
  }, []);

  return (
    <div className={`glass-card ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-zinc-800">
        <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
          <History className="w-5 h-5 text-blood-500" />
          Audit Log
        </h3>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-500">
            {filteredEntries.length} of {entries.length} entries
          </span>
          {onExport && (
            <button
              onClick={onExport}
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 text-zinc-300 hover:text-white transition-colors text-sm"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          )}
        </div>
      </div>

      {/* Filters */}
      <AuditFilters
        actions={availableActions}
        selectedActions={selectedActions}
        categories={availableCategories}
        selectedCategories={selectedCategories}
        searchQuery={searchQuery}
        dateRange={dateRange}
        onActionToggle={handleActionToggle}
        onCategoryToggle={handleCategoryToggle}
        onSearchChange={setSearchQuery}
        onDateRangeChange={setDateRange}
        onClear={clearFilters}
      />

      {/* Entries */}
      <div className="max-h-[600px] overflow-y-auto">
        {Object.keys(groupedEntries).length === 0 ? (
          <div className="p-8 text-center">
            <History className="w-12 h-12 text-zinc-600 mx-auto mb-4" />
            <p className="text-zinc-400">No audit entries found</p>
          </div>
        ) : (
          Object.entries(groupedEntries).map(([date, dateEntries]) => (
            <div key={date}>
              {/* Date header */}
              <div className="sticky top-0 z-10 flex items-center gap-2 px-4 py-2 bg-zinc-900/95 border-b border-zinc-800">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span className="text-sm font-medium text-zinc-400">{date}</span>
                <span className="text-xs text-zinc-600">
                  ({dateEntries.length} entries)
                </span>
              </div>

              {/* Date entries */}
              {dateEntries.map((entry) => (
                <AuditEntryRow
                  key={entry.id}
                  entry={entry}
                  expanded={expandedEntries.has(entry.id)}
                  onToggle={() => toggleEntry(entry.id)}
                  onClick={onEntryClick ? () => onEntryClick(entry) : undefined}
                />
              ))}
            </div>
          ))
        )}
      </div>
    </div>
  );
}

// ============================================================================
// AUDIT TIMELINE
// ============================================================================

interface AuditTimelineProps {
  entries: AuditEntry[];
  limit?: number;
  className?: string;
}

export function AuditTimeline({
  entries,
  limit = 10,
  className = "",
}: AuditTimelineProps) {
  const displayEntries = entries.slice(0, limit);

  return (
    <div className={className}>
      <div className="relative pl-6 border-l border-zinc-800">
        {displayEntries.map((entry, index) => (
          <div key={entry.id} className="relative pb-6 last:pb-0">
            {/* Timeline dot */}
            <div
              className={`absolute -left-[25px] w-4 h-4 border-2 border-zinc-900 ${
                entry.success
                  ? actionColors[entry.action].split(" ")[1]
                  : "bg-red-500"
              }`}
            />

            {/* Content */}
            <div className="ml-4">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`p-1 ${actionColors[entry.action]}`}>
                  {actionIcons[entry.action]}
                </span>
                <span className="font-medium text-white">
                  {actionLabels[entry.action]}
                </span>
                <span className="text-zinc-400">{entry.targetName}</span>
              </div>

              <p className="text-sm text-zinc-500 mt-1">{entry.details}</p>

              <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
                <span className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {entry.userName}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {formatRelativeTime(entry.timestamp)}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {entries.length > limit && (
        <p className="text-center text-sm text-zinc-500 mt-4">
          + {entries.length - limit} more entries
        </p>
      )}
    </div>
  );
}

// ============================================================================
// AUDIT STATS
// ============================================================================

interface AuditStatsProps {
  entries: AuditEntry[];
  className?: string;
}

export function AuditStats({ entries, className = "" }: AuditStatsProps) {
  const stats = useMemo(() => {
    const actionCounts: Record<AuditAction, number> = {} as Record<
      AuditAction,
      number
    >;
    let successCount = 0;
    let failureCount = 0;

    entries.forEach((entry) => {
      actionCounts[entry.action] = (actionCounts[entry.action] || 0) + 1;
      if (entry.success) {
        successCount++;
      } else {
        failureCount++;
      }
    });

    // Get top actions
    const topActions = Object.entries(actionCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 5);

    return {
      total: entries.length,
      success: successCount,
      failure: failureCount,
      successRate:
        entries.length > 0
          ? Math.round((successCount / entries.length) * 100)
          : 0,
      topActions,
    };
  }, [entries]);

  return (
    <div className={`glass-card p-4 ${className}`}>
      <h4 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-4">
        Audit Statistics
      </h4>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        <div className="p-3 bg-zinc-900/50 border border-zinc-800">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-zinc-500">Total Actions</div>
        </div>
        <div className="p-3 bg-emerald-500/10 border border-emerald-500/30">
          <div className="text-2xl font-bold text-emerald-400">
            {stats.success}
          </div>
          <div className="text-xs text-emerald-400/70">Successful</div>
        </div>
        <div className="p-3 bg-red-500/10 border border-red-500/30">
          <div className="text-2xl font-bold text-red-400">{stats.failure}</div>
          <div className="text-xs text-red-400/70">Failed</div>
        </div>
        <div className="p-3 bg-zinc-900/50 border border-zinc-800">
          <div className="text-2xl font-bold text-white">
            {stats.successRate}%
          </div>
          <div className="text-xs text-zinc-500">Success Rate</div>
        </div>
      </div>

      <div>
        <div className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
          Top Actions
        </div>
        <div className="space-y-2">
          {stats.topActions.map(([action, count]) => (
            <div key={action} className="flex items-center gap-3">
              <span className={`p-1.5 ${actionColors[action as AuditAction]}`}>
                {actionIcons[action as AuditAction]}
              </span>
              <span className="flex-1 text-sm text-zinc-300">
                {actionLabels[action as AuditAction]}
              </span>
              <span className="text-sm font-medium text-zinc-400">{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
