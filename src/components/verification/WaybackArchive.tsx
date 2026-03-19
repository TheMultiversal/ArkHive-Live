"use client";

import { useState, useEffect, useCallback } from "react";
import { Archive, ExternalLink, Clock, CheckCircle, XCircle, Loader2, RefreshCw } from "lucide-react";

/**
 * Wayback Machine Integration
 * Archive.org integration for permanent source preservation
 */

const WAYBACK_API = "https://archive.org/wayback/available";
const WAYBACK_SAVE_URL = "https://web.archive.org/save/";
const WAYBACK_VIEW_URL = "https://web.archive.org/web/";

/**
 * Generate Wayback Machine archive URL
 */
export function getWaybackUrl(url: string, timestamp?: string): string {
  if (timestamp) {
    return `${WAYBACK_VIEW_URL}${timestamp}/${url}`;
  }
  return `${WAYBACK_VIEW_URL}*/${url}`;
}

/**
 * Generate URL to save page to Wayback Machine
 */
export function getSaveToWaybackUrl(url: string): string {
  return `${WAYBACK_SAVE_URL}${url}`;
}

/**
 * Archive snapshot data
 */
interface WaybackSnapshot {
  url: string;
  timestamp: string;
  status: string;
}

interface WaybackResponse {
  url: string;
  archived_snapshots: {
    closest?: WaybackSnapshot;
  };
}

/**
 * Check if URL is archived in Wayback Machine
 */
export async function checkWaybackArchive(url: string): Promise<WaybackSnapshot | null> {
  try {
    const response = await fetch(`${WAYBACK_API}?url=${encodeURIComponent(url)}`);
    if (!response.ok) return null;
    
    const data: WaybackResponse = await response.json();
    return data.archived_snapshots?.closest || null;
  } catch {
    return null;
  }
}

/**
 * Format Wayback timestamp to readable date
 */
export function formatWaybackTimestamp(timestamp: string): string {
  // Wayback timestamp format: YYYYMMDDHHmmss
  if (timestamp.length < 8) return timestamp;
  
  const year = timestamp.substring(0, 4);
  const month = timestamp.substring(4, 6);
  const day = timestamp.substring(6, 8);
  
  const date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  return date.toLocaleDateString("en-US", { 
    year: "numeric", 
    month: "short", 
    day: "numeric" 
  });
}

/**
 * Hook to check Wayback archive status
 */
interface UseWaybackArchiveResult {
  snapshot: WaybackSnapshot | null;
  isLoading: boolean;
  error: Error | null;
  refetch: () => void;
}

export function useWaybackArchive(url: string): UseWaybackArchiveResult {
  const [snapshot, setSnapshot] = useState<WaybackSnapshot | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const fetchArchive = useCallback(async () => {
    if (!url) {
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await checkWaybackArchive(url);
      setSnapshot(result);
    } catch (e) {
      setError(e instanceof Error ? e : new Error("Failed to check archive"));
    } finally {
      setIsLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchArchive();
  }, [fetchArchive]);

  return {
    snapshot,
    isLoading,
    error,
    refetch: fetchArchive,
  };
}

/**
 * Archive Status Badge Component
 */
interface ArchiveStatusProps {
  url: string;
  showSaveButton?: boolean;
  compact?: boolean;
  className?: string;
}

export function ArchiveStatus({ 
  url, 
  showSaveButton = true,
  compact = false,
  className = "" 
}: ArchiveStatusProps) {
  const { snapshot, isLoading, refetch } = useWaybackArchive(url);

  if (isLoading) {
    return (
      <span className={`inline-flex items-center gap-1 text-zinc-500 ${className}`}>
        <Loader2 className="w-3 h-3 animate-spin" />
        {!compact && <span className="text-[10px] uppercase tracking-wider">Checking archive...</span>}
      </span>
    );
  }

  if (snapshot) {
    return (
      <div className={`inline-flex items-center gap-2 ${className}`}>
        <a
          href={getWaybackUrl(url, snapshot.timestamp)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-900/50 border border-emerald-700 text-emerald-400 hover:bg-emerald-900/70 transition-colors"
          title={`Archived on ${formatWaybackTimestamp(snapshot.timestamp)}`}
          aria-label={`View archived version from ${formatWaybackTimestamp(snapshot.timestamp)}`}
        >
          <CheckCircle className="w-3 h-3" />
          {!compact && (
            <>
              <span className="text-[10px] font-bold uppercase tracking-wider">Archived</span>
              <span className="text-[10px] text-emerald-500">{formatWaybackTimestamp(snapshot.timestamp)}</span>
            </>
          )}
        </a>
        <button
          onClick={refetch}
          className="p-1 text-zinc-600 hover:text-zinc-400 transition-colors"
          title="Refresh archive status"
          aria-label="Refresh archive status"
        >
          <RefreshCw className="w-3 h-3" />
        </button>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span className="inline-flex items-center gap-1 px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-500">
        <XCircle className="w-3 h-3" />
        {!compact && <span className="text-[10px] font-bold uppercase tracking-wider">Not Archived</span>}
      </span>
      {showSaveButton && (
        <a
          href={getSaveToWaybackUrl(url)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 px-2 py-1 bg-blood-950 border border-blood-800 text-blood-400 hover:bg-blood-900 hover:text-blood-300 transition-colors text-[10px] font-bold uppercase tracking-wider"
          title="Save to Wayback Machine"
          aria-label="Save this URL to Wayback Machine"
        >
          <Archive className="w-3 h-3" />
          Save
        </a>
      )}
    </div>
  );
}

/**
 * Archive Link Component
 * Simple link to archived version
 */
interface ArchiveLinkProps {
  url: string;
  timestamp?: string;
  children?: React.ReactNode;
  className?: string;
}

export function ArchiveLink({ url, timestamp, children, className = "" }: ArchiveLinkProps) {
  return (
    <a
      href={getWaybackUrl(url, timestamp)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-1 text-blood-500 hover:text-blood-400 transition-colors ${className}`}
      aria-label="View archived version (opens in new tab)"
    >
      <Clock className="w-3 h-3" />
      {children || "View Archive"}
      <ExternalLink className="w-3 h-3" />
    </a>
  );
}

/**
 * Source Archive Panel
 * Full panel showing archive information for a source
 */
interface SourceArchivePanelProps {
  url: string;
  title?: string;
  className?: string;
}

export function SourceArchivePanel({ url, title, className = "" }: SourceArchivePanelProps) {
  const { snapshot, isLoading, refetch } = useWaybackArchive(url);

  return (
    <div className={`bg-zinc-950 border border-zinc-800 p-4 ${className}`}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <Archive className="w-4 h-4 text-blood-600" />
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Archive Status</h4>
        </div>
        <button
          onClick={refetch}
          disabled={isLoading}
          className="p-1 text-zinc-600 hover:text-zinc-400 disabled:opacity-50 transition-colors"
          title="Refresh archive status"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
        </button>
      </div>

      {title && (
        <p className="text-sm text-zinc-400 mb-2 truncate">{title}</p>
      )}

      <p className="text-[10px] text-zinc-600 mb-3 truncate" title={url}>{url}</p>

      {isLoading ? (
        <div className="flex items-center gap-2 text-zinc-500">
          <Loader2 className="w-4 h-4 animate-spin" />
          <span className="text-sm">Checking Wayback Machine...</span>
        </div>
      ) : snapshot ? (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-emerald-400">
            <CheckCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Archived</span>
          </div>
          <p className="text-xs text-zinc-500">
            Last captured: {formatWaybackTimestamp(snapshot.timestamp)}
          </p>
          <div className="flex gap-2 mt-3">
            <a
              href={getWaybackUrl(url, snapshot.timestamp)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-emerald-900/50 border border-emerald-700 text-emerald-400 hover:bg-emerald-900/70 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <ExternalLink className="w-3 h-3" />
              View Archive
            </a>
            <a
              href={getWaybackUrl(url)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-zinc-900 border border-zinc-700 text-zinc-400 hover:bg-zinc-800 text-xs font-bold uppercase tracking-wider transition-colors"
            >
              <Clock className="w-3 h-3" />
              All Captures
            </a>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-zinc-500">
            <XCircle className="w-4 h-4" />
            <span className="text-sm font-medium">Not in Wayback Machine</span>
          </div>
          <p className="text-xs text-zinc-600">
            This source has not been archived yet.
          </p>
          <a
            href={getSaveToWaybackUrl(url)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-3 py-2 mt-3 bg-blood-950 border border-blood-800 text-blood-400 hover:bg-blood-900 text-xs font-bold uppercase tracking-wider transition-colors"
          >
            <Archive className="w-3 h-3" />
            Save to Archive
          </a>
        </div>
      )}
    </div>
  );
}

export default ArchiveStatus;
