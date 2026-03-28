'use client';

import { Calendar, Clock, FileEdit, AlertCircle } from 'lucide-react';

interface DateDisplayProps {
  /** When the underlying event/crime occurred */
  eventOriginDate?: string;
  /** Most recent development (court date, verdict, etc.) */
  lastActivityDate?: string;
  /** When editors last updated this content */
  pageUpdatedDate?: string;
  /** Legacy date field for backward compatibility */
  legacyDate?: string;
  /** Legacy lastUpdated field for backward compatibility */
  legacyLastUpdated?: string;
  /** Display mode */
  variant?: 'full' | 'compact' | 'inline';
  /** Additional CSS classes */
  className?: string;
}

/**
 * Three-tier date display component
 * Shows event origin, last activity, and page updated dates
 * Falls back to legacy date fields when new fields aren't populated
 */
export default function DateDisplay({
  eventOriginDate,
  lastActivityDate,
  pageUpdatedDate,
  legacyDate,
  legacyLastUpdated,
  variant = 'full',
  className = '',
}: DateDisplayProps) {
  // Use new fields if available, otherwise fall back to legacy
  const effectiveEventDate = eventOriginDate || legacyDate;
  const effectiveActivityDate = lastActivityDate;
  const effectivePageDate = pageUpdatedDate || legacyLastUpdated;

  // Format date for display (handles both ISO and verbose formats)
  const formatDate = (dateStr: string | undefined): string => {
    if (!dateStr) return 'Unknown';
    
    // If it's already in a readable format (contains letters), return as-is
    if (/[a-zA-Z]/.test(dateStr)) {
      return dateStr;
    }
    
    // Try to parse ISO date
    try {
      const date = new Date(dateStr);
      if (isNaN(date.getTime())) return dateStr;
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      });
    } catch {
      return dateStr;
    }
  };

  // Check if dates are populated
  const hasEventDate = !!effectiveEventDate;
  const hasActivityDate = !!effectiveActivityDate;
  const hasPageDate = !!effectivePageDate;

  if (variant === 'inline') {
    // Single line display for cards
    const displayDate = effectiveActivityDate || effectiveEventDate;
    return (
      <div className={`flex items-center gap-2 text-zinc-600 text-[10px] uppercase tracking-widest font-bold ${className}`}>
        <Calendar className="w-3 h-3" />
        <span>{formatDate(displayDate)}</span>
        {effectiveActivityDate && (
          <span className="text-zinc-500">(Active)</span>
        )}
      </div>
    );
  }

  if (variant === 'compact') {
    // Three-line compact display
    return (
      <div className={`space-y-1 ${className}`}>
        {hasEventDate && (
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <AlertCircle className="w-3 h-3 text-zinc-500" />
            <span className="text-zinc-600 font-medium">Origin:</span>
            <span>{formatDate(effectiveEventDate)}</span>
          </div>
        )}
        {hasActivityDate && (
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <Clock className="w-3 h-3 text-red-600" />
            <span className="text-zinc-600 font-medium">Latest:</span>
            <span>{formatDate(effectiveActivityDate)}</span>
          </div>
        )}
        {hasPageDate && (
          <div className="flex items-center gap-2 text-zinc-500 text-xs">
            <FileEdit className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-600 font-medium">Updated:</span>
            <span>{formatDate(effectivePageDate)}</span>
          </div>
        )}
      </div>
    );
  }

  // Full display for detail pages
  return (
    <div className={`glass-card p-4 space-y-3 ${className}`}>
      <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 border-b border-zinc-800 pb-2">
        Timeline Status
      </h4>
      
      {/* Event Origin */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 border border-zinc-800 flex items-center justify-center">
          <AlertCircle className="w-4 h-4 text-zinc-300" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
            Event Origin
          </div>
          <div className="text-sm text-zinc-300">
            {hasEventDate ? formatDate(effectiveEventDate) : (
              <span className="text-zinc-600 italic">Not documented</span>
            )}
          </div>
          <div className="text-[10px] text-zinc-600 mt-0.5">
            When the misconduct occurred
          </div>
        </div>
      </div>

      {/* Last Activity */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-red-950 border border-red-800 flex items-center justify-center">
          <Clock className="w-4 h-4 text-red-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
            Last Activity
          </div>
          <div className="text-sm text-zinc-300">
            {hasActivityDate ? formatDate(effectiveActivityDate) : (
              <span className="text-zinc-600 italic">No recent activity</span>
            )}
          </div>
          <div className="text-[10px] text-zinc-600 mt-0.5">
            Most recent development
          </div>
        </div>
      </div>

      {/* Page Updated */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 bg-zinc-900 border border-zinc-700 flex items-center justify-center">
          <FileEdit className="w-4 h-4 text-zinc-500" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-[10px] font-bold uppercase tracking-wider text-zinc-600">
            Page Updated
          </div>
          <div className="text-sm text-zinc-300">
            {hasPageDate ? formatDate(effectivePageDate) : (
              <span className="text-zinc-600 italic">Unknown</span>
            )}
          </div>
          <div className="text-[10px] text-zinc-600 mt-0.5">
            Content freshness
          </div>
        </div>
      </div>
    </div>
  );
}
