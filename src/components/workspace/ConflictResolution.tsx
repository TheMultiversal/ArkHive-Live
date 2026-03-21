"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  AlertTriangle,
  GitMerge,
  GitPullRequest,
  Check,
  X,
  ChevronDown,
  ChevronRight,
  Clock,
  User,
  ArrowLeftRight,
  ArrowRight,
  ArrowLeft,
  Layers,
  Undo2,
  History,
  FileText,
  Eye,
  EyeOff,
  Copy,
  Diff,
  Split,
  Maximize2,
} from "lucide-react";

// ============================================================================
// TYPES
// ============================================================================

export type ConflictType = 
  | "edit" 
  | "delete" 
  | "move"
  | "concurrent"
  | "schema";

export type ResolutionStrategy =
  | "keep_local"
  | "keep_remote"
  | "merge"
  | "manual"
  | "skip";

export interface ConflictField {
  name: string;
  localValue: string;
  remoteValue: string;
  baseValue?: string;
  mergedValue?: string;
  resolution?: "local" | "remote" | "custom";
}

export interface Conflict {
  id: string;
  type: ConflictType;
  entityType: string;
  entityId: string;
  entityName: string;
  description: string;
  localVersion: {
    userId: string;
    userName: string;
    timestamp: Date;
    version: number;
  };
  remoteVersion: {
    userId: string;
    userName: string;
    timestamp: Date;
    version: number;
  };
  baseVersion?: {
    timestamp: Date;
    version: number;
  };
  fields: ConflictField[];
  resolved: boolean;
  resolution?: ResolutionStrategy;
  resolvedAt?: Date;
  resolvedBy?: string;
}

// ============================================================================
// UTILITIES
// ============================================================================

const conflictTypeLabels: Record<ConflictType, string> = {
  edit: "Edit Conflict",
  delete: "Delete Conflict",
  move: "Move Conflict",
  concurrent: "Concurrent Edit",
  schema: "Schema Conflict",
};

const conflictTypeColors: Record<ConflictType, string> = {
  edit: "text-amber-400 bg-amber-500/10 border-amber-500/30",
  delete: "text-red-400 bg-red-500/10 border-red-500/30",
  move: "text-blue-400 bg-blue-500/10 border-blue-500/30",
  concurrent: "text-purple-400 bg-purple-500/10 border-purple-500/30",
  schema: "text-orange-400 bg-orange-500/10 border-orange-500/30",
};

const strategyLabels: Record<ResolutionStrategy, string> = {
  keep_local: "Keep My Changes",
  keep_remote: "Keep Their Changes",
  merge: "Merge Changes",
  manual: "Manual Resolution",
  skip: "Skip for Now",
};

function computeDiff(local: string, remote: string): { added: string[]; removed: string[] } {
  const localWords = local.split(/\s+/);
  const remoteWords = remote.split(/\s+/);
  
  const added = remoteWords.filter(w => !localWords.includes(w));
  const removed = localWords.filter(w => !remoteWords.includes(w));
  
  return { added, removed };
}

// ============================================================================
// CONFLICT BADGE
// ============================================================================

interface ConflictBadgeProps {
  type: ConflictType;
  count?: number;
  className?: string;
}

export function ConflictBadge({
  type,
  count,
  className = "",
}: ConflictBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2 py-0.5 border text-xs ${conflictTypeColors[type]} ${className}`}
    >
      <AlertTriangle className="w-3 h-3" />
      {conflictTypeLabels[type]}
      {count !== undefined && count > 0 && (
        <span className="ml-1 px-1 bg-current/20">{count}</span>
      )}
    </span>
  );
}

// ============================================================================
// DIFF VIEW
// ============================================================================

interface DiffViewProps {
  localValue: string;
  remoteValue: string;
  baseValue?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function DiffView({
  localValue,
  remoteValue,
  baseValue,
  showLineNumbers = true,
  className = "",
}: DiffViewProps) {
  const [viewMode, setViewMode] = useState<"split" | "unified">("split");
  
  const localLines = localValue.split("\n");
  const remoteLines = remoteValue.split("\n");
  const maxLines = Math.max(localLines.length, remoteLines.length);

  if (viewMode === "unified") {
    const allLines: Array<{ line: string; type: "same" | "added" | "removed" }> = [];
    
    for (let i = 0; i < maxLines; i++) {
      const local = localLines[i] || "";
      const remote = remoteLines[i] || "";
      
      if (local === remote) {
        allLines.push({ line: local, type: "same" });
      } else {
        if (local) allLines.push({ line: local, type: "removed" });
        if (remote) allLines.push({ line: remote, type: "added" });
      }
    }

    return (
      <div className={`glass-card overflow-hidden ${className}`}>
        <div className="flex items-center justify-between p-2 border-b border-zinc-800 bg-zinc-900/50">
          <span className="text-xs text-zinc-500">Unified View</span>
          <button
            onClick={() => setViewMode("split")}
            className="text-zinc-500 hover:text-white transition-colors"
          >
            <Split className="w-4 h-4" />
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-mono">
            <tbody>
              {allLines.map((item, i) => (
                <tr
                  key={i}
                  className={
                    item.type === "added"
                      ? "bg-emerald-500/10"
                      : item.type === "removed"
                      ? "bg-red-500/10"
                      : ""
                  }
                >
                  {showLineNumbers && (
                    <td className="w-10 px-2 py-0.5 text-right text-zinc-600 select-none border-r border-zinc-800">
                      {i + 1}
                    </td>
                  )}
                  <td className="px-3 py-0.5">
                    <span
                      className={
                        item.type === "added"
                          ? "text-emerald-400"
                          : item.type === "removed"
                          ? "text-red-400"
                          : "text-zinc-300"
                      }
                    >
                      {item.type === "added" && "+ "}
                      {item.type === "removed" && "- "}
                      {item.line || " "}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  return (
    <div className={`glass-card overflow-hidden ${className}`}>
      <div className="flex items-center justify-between p-2 border-b border-zinc-800 bg-zinc-900/50">
        <span className="text-xs text-zinc-500">Split View</span>
        <button
          onClick={() => setViewMode("unified")}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          <Layers className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-2">
        {/* Local */}
        <div className="border-r border-zinc-800">
          <div className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/50 border-b border-zinc-800">
            Your Changes
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <tbody>
                {localLines.map((line, i) => {
                  const isDifferent = line !== (remoteLines[i] || "");
                  return (
                    <tr
                      key={i}
                      className={isDifferent ? "bg-amber-500/10" : ""}
                    >
                      {showLineNumbers && (
                        <td className="w-10 px-2 py-0.5 text-right text-zinc-600 select-none border-r border-zinc-800">
                          {i + 1}
                        </td>
                      )}
                      <td className="px-3 py-0.5 text-zinc-300">{line || " "}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Remote */}
        <div>
          <div className="px-3 py-1.5 text-xs font-medium text-zinc-400 bg-zinc-900/50 border-b border-zinc-800">
            Their Changes
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm font-mono">
              <tbody>
                {remoteLines.map((line, i) => {
                  const isDifferent = line !== (localLines[i] || "");
                  return (
                    <tr
                      key={i}
                      className={isDifferent ? "bg-cyan-500/10" : ""}
                    >
                      {showLineNumbers && (
                        <td className="w-10 px-2 py-0.5 text-right text-zinc-600 select-none border-r border-zinc-800">
                          {i + 1}
                        </td>
                      )}
                      <td className="px-3 py-0.5 text-zinc-300">{line || " "}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// FIELD RESOLVER
// ============================================================================

interface FieldResolverProps {
  field: ConflictField;
  onResolve: (resolution: "local" | "remote" | "custom", customValue?: string) => void;
  className?: string;
}

export function FieldResolver({
  field,
  onResolve,
  className = "",
}: FieldResolverProps) {
  const [showCustom, setShowCustom] = useState(false);
  const [customValue, setCustomValue] = useState(field.mergedValue || "");
  const [showDiff, setShowDiff] = useState(false);

  const hasChanges = field.localValue !== field.remoteValue;

  if (!hasChanges) {
    return (
      <div className={`p-3 bg-zinc-900/50 border border-zinc-800 ${className}`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-zinc-400">{field.name}</span>
          <span className="text-xs text-emerald-400 flex items-center gap-1">
            <Check className="w-3 h-3" />
            No conflict
          </span>
        </div>
        <p className="text-sm text-zinc-300">{field.localValue}</p>
      </div>
    );
  }

  return (
    <div className={`p-3 bg-zinc-900/50 border border-amber-500/30 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-amber-400">{field.name}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowDiff(!showDiff)}
            className={`p-1 transition-colors ${
              showDiff ? "text-white" : "text-zinc-500 hover:text-white"
            }`}
            title="Show diff"
          >
            <Diff className="w-4 h-4" />
          </button>
          {field.resolution && (
            <span className="text-xs text-emerald-400 flex items-center gap-1">
              <Check className="w-3 h-3" />
              Resolved
            </span>
          )}
        </div>
      </div>

      {showDiff ? (
        <DiffView
          localValue={field.localValue}
          remoteValue={field.remoteValue}
          className="mb-3"
        />
      ) : (
        <div className="grid grid-cols-2 gap-3 mb-3">
          <button
            onClick={() => onResolve("local")}
            className={`p-3 border transition-colors text-left ${
              field.resolution === "local"
                ? "border-emerald-500/50 bg-emerald-500/10"
                : "border-zinc-700 hover:border-zinc-600"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-zinc-500">Your Changes</span>
              <ArrowLeft className="w-3 h-3 text-zinc-500" />
            </div>
            <p className="text-sm text-zinc-300 line-clamp-2">{field.localValue}</p>
          </button>

          <button
            onClick={() => onResolve("remote")}
            className={`p-3 border transition-colors text-left ${
              field.resolution === "remote"
                ? "border-emerald-500/50 bg-emerald-500/10"
                : "border-zinc-700 hover:border-zinc-600"
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs text-zinc-500">Their Changes</span>
              <ArrowRight className="w-3 h-3 text-zinc-500" />
            </div>
            <p className="text-sm text-zinc-300 line-clamp-2">{field.remoteValue}</p>
          </button>
        </div>
      )}

      {/* Custom resolution */}
      <div>
        <button
          onClick={() => setShowCustom(!showCustom)}
          className="flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors"
        >
          {showCustom ? (
            <ChevronDown className="w-4 h-4" />
          ) : (
            <ChevronRight className="w-4 h-4" />
          )}
          Edit manually
        </button>

        <AnimatePresence>
          {showCustom && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden mt-2"
            >
              <textarea
                value={customValue}
                onChange={(e) => setCustomValue(e.target.value)}
                className="w-full p-3 bg-zinc-900 border border-zinc-700 text-white text-sm font-mono resize-none focus:outline-none focus:border-zinc-600"
                rows={4}
              />
              <div className="flex justify-end mt-2">
                <button
                  onClick={() => onResolve("custom", customValue)}
                  className="px-3 py-1.5 bg-zinc-700 text-white text-sm hover:bg-zinc-600 transition-colors"
                >
                  Use This
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ============================================================================
// CONFLICT CARD
// ============================================================================

interface ConflictCardProps {
  conflict: Conflict;
  onResolve: (conflictId: string, strategy: ResolutionStrategy, resolvedFields?: ConflictField[]) => void;
  onSkip: (conflictId: string) => void;
  expanded?: boolean;
  className?: string;
}

export function ConflictCard({
  conflict,
  onResolve,
  onSkip,
  expanded: initialExpanded = false,
  className = "",
}: ConflictCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const [resolvedFields, setResolvedFields] = useState<Map<string, ConflictField>>(
    new Map()
  );

  const handleFieldResolve = (
    fieldName: string,
    resolution: "local" | "remote" | "custom",
    customValue?: string
  ) => {
    const field = conflict.fields.find((f) => f.name === fieldName);
    if (!field) return;

    const resolvedField: ConflictField = {
      ...field,
      resolution,
      mergedValue:
        resolution === "custom"
          ? customValue
          : resolution === "local"
          ? field.localValue
          : field.remoteValue,
    };

    setResolvedFields(new Map(resolvedFields.set(fieldName, resolvedField)));
  };

  const allFieldsResolved = conflict.fields.every(
    (f) => f.localValue === f.remoteValue || resolvedFields.has(f.name)
  );

  const handleResolveAll = (strategy: ResolutionStrategy) => {
    const resolved = conflict.fields.map((f) => {
      if (resolvedFields.has(f.name)) {
        return resolvedFields.get(f.name)!;
      }
      return {
        ...f,
        resolution: strategy === "keep_local" ? "local" : "remote",
        mergedValue: strategy === "keep_local" ? f.localValue : f.remoteValue,
      } as ConflictField;
    });
    onResolve(conflict.id, strategy, resolved);
  };

  return (
    <div
      className={`glass-card overflow-hidden ${
        conflict.resolved ? "opacity-60" : ""
      } ${className}`}
    >
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b border-zinc-800">
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-zinc-500 hover:text-white transition-colors"
        >
          {expanded ? (
            <ChevronDown className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>

        <div className={`p-2 ${conflictTypeColors[conflict.type]}`}>
          <AlertTriangle className="w-5 h-5" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-medium text-white">{conflict.entityName}</span>
            <ConflictBadge type={conflict.type} />
            {conflict.resolved && (
              <span className="px-2 py-0.5 text-xs bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Resolved
              </span>
            )}
          </div>
          <p className="text-sm text-zinc-500 truncate">{conflict.description}</p>
        </div>

        <div className="flex items-center gap-3">
          {/* Version info */}
          <div className="text-right text-xs">
            <div className="flex items-center gap-2 text-zinc-400">
              <User className="w-3 h-3" />
              {conflict.localVersion.userName} vs {conflict.remoteVersion.userName}
            </div>
            <div className="text-zinc-500 mt-0.5">
              {conflict.fields.length} field{conflict.fields.length !== 1 ? "s" : ""}
            </div>
          </div>
        </div>
      </div>

      {/* Expanded content */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            {/* Version timeline */}
            <div className="p-4 bg-zinc-900/30 border-b border-zinc-800">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <Clock className="w-3 h-3 text-zinc-500" />
                  <span className="text-zinc-400">
                    Your edit: {conflict.localVersion.timestamp.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-zinc-400">
                    Their edit: {conflict.remoteVersion.timestamp.toLocaleString()}
                  </span>
                  <Clock className="w-3 h-3 text-zinc-500" />
                </div>
              </div>
            </div>

            {/* Fields */}
            <div className="p-4 space-y-4">
              {conflict.fields.map((field) => (
                <FieldResolver
                  key={field.name}
                  field={resolvedFields.get(field.name) || field}
                  onResolve={(resolution, customValue) =>
                    handleFieldResolve(field.name, resolution, customValue)
                  }
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between p-4 border-t border-zinc-800 bg-zinc-900/30">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleResolveAll("keep_local")}
                  className="flex items-center gap-2 px-3 py-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors text-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Keep All Mine
                </button>
                <button
                  onClick={() => handleResolveAll("keep_remote")}
                  className="flex items-center gap-2 px-3 py-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors text-sm"
                >
                  Keep All Theirs
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => onSkip(conflict.id)}
                  className="px-3 py-2 text-zinc-500 hover:text-white transition-colors text-sm"
                >
                  Skip
                </button>
                <button
                  onClick={() => {
                    const resolved = Array.from(resolvedFields.values());
                    onResolve(conflict.id, "merge", resolved);
                  }}
                  disabled={!allFieldsResolved}
                  className="flex items-center gap-2 px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <GitMerge className="w-4 h-4" />
                  Resolve Conflict
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// MAIN CONFLICT RESOLUTION PANEL
// ============================================================================

interface ConflictResolutionPanelProps {
  conflicts: Conflict[];
  onResolve: (conflictId: string, strategy: ResolutionStrategy, resolvedFields?: ConflictField[]) => void;
  onSkip: (conflictId: string) => void;
  onResolveAll?: (strategy: ResolutionStrategy) => void;
  className?: string;
}

export default function ConflictResolutionPanel({
  conflicts,
  onResolve,
  onSkip,
  onResolveAll,
  className = "",
}: ConflictResolutionPanelProps) {
  const unresolvedConflicts = conflicts.filter((c) => !c.resolved);
  const resolvedConflicts = conflicts.filter((c) => c.resolved);

  if (conflicts.length === 0) {
    return (
      <div className={`glass-card p-8 text-center ${className}`}>
        <Check className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-white mb-2">No Conflicts</h3>
        <p className="text-sm text-zinc-400">
          All changes are in sync. No conflicts to resolve.
        </p>
      </div>
    );
  }

  return (
    <div className={className}>
      {/* Header */}
      <div className="glass-card mb-4">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-500/10 text-amber-400">
              <GitPullRequest className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-white">
                Conflict Resolution
              </h2>
              <p className="text-sm text-zinc-400">
                {unresolvedConflicts.length} conflict
                {unresolvedConflicts.length !== 1 ? "s" : ""} to resolve
              </p>
            </div>
          </div>

          {onResolveAll && unresolvedConflicts.length > 1 && (
            <div className="flex items-center gap-2">
              <button
                onClick={() => onResolveAll("keep_local")}
                className="px-3 py-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors text-sm"
              >
                Keep All Mine
              </button>
              <button
                onClick={() => onResolveAll("keep_remote")}
                className="px-3 py-2 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-600 transition-colors text-sm"
              >
                Keep All Theirs
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Unresolved conflicts */}
      <div className="space-y-4 mb-6">
        {unresolvedConflicts.map((conflict, index) => (
          <ConflictCard
            key={conflict.id}
            conflict={conflict}
            onResolve={onResolve}
            onSkip={onSkip}
            expanded={index === 0}
          />
        ))}
      </div>

      {/* Resolved conflicts */}
      {resolvedConflicts.length > 0 && (
        <div>
          <h3 className="text-sm font-medium text-zinc-400 uppercase tracking-wider mb-3 flex items-center gap-2">
            <History className="w-4 h-4" />
            Resolved ({resolvedConflicts.length})
          </h3>
          <div className="space-y-2">
            {resolvedConflicts.map((conflict) => (
              <ConflictCard
                key={conflict.id}
                conflict={conflict}
                onResolve={onResolve}
                onSkip={onSkip}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
