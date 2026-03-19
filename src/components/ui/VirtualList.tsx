"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from "react";

/**
 * Virtual List Component
 * Efficiently renders large lists by only rendering visible items
 * Uses windowing technique for optimal performance
 */

interface VirtualListProps<T> {
  items: T[];
  itemHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  containerHeight?: number;
  overscan?: number;
  className?: string;
  onEndReached?: () => void;
  endReachedThreshold?: number;
  emptyState?: React.ReactNode;
  loadingState?: React.ReactNode;
  isLoading?: boolean;
}

export default function VirtualList<T>({
  items,
  itemHeight,
  renderItem,
  containerHeight = 600,
  overscan = 3,
  className = "",
  onEndReached,
  endReachedThreshold = 200,
  emptyState,
  loadingState,
  isLoading = false,
}: VirtualListProps<T>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollTop, setScrollTop] = useState(0);
  const [hasReachedEnd, setHasReachedEnd] = useState(false);

  // Calculate visible range
  const { startIndex, endIndex, offsetY, totalHeight, visibleCount } = useMemo(() => {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const totalHeight = items.length * itemHeight;
    
    const startIndex = Math.max(0, Math.floor(scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.floor(scrollTop / itemHeight) + visibleCount + overscan
    );
    
    const offsetY = startIndex * itemHeight;
    
    return { startIndex, endIndex, offsetY, totalHeight, visibleCount };
  }, [scrollTop, items.length, itemHeight, containerHeight, overscan]);

  // Handle scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    setScrollTop(target.scrollTop);
    
    // Check if near end
    const distanceFromEnd = totalHeight - (target.scrollTop + containerHeight);
    if (distanceFromEnd < endReachedThreshold && !hasReachedEnd && onEndReached) {
      setHasReachedEnd(true);
      onEndReached();
    } else if (distanceFromEnd >= endReachedThreshold && hasReachedEnd) {
      setHasReachedEnd(false);
    }
  }, [totalHeight, containerHeight, endReachedThreshold, hasReachedEnd, onEndReached]);

  // Reset end reached when items change
  useEffect(() => {
    setHasReachedEnd(false);
  }, [items.length]);

  // Visible items
  const visibleItems = useMemo(() => {
    return items.slice(startIndex, endIndex + 1);
  }, [items, startIndex, endIndex]);

  // Empty state
  if (items.length === 0 && !isLoading) {
    return (
      <div className={`flex items-center justify-center ${className}`} style={{ height: containerHeight }}>
        {emptyState || (
          <div className="text-center text-zinc-500">
            <p className="text-sm uppercase tracking-wider">No items found</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`overflow-auto ${className}`}
      style={{ height: containerHeight }}
      onScroll={handleScroll}
      role="list"
      aria-label={`List with ${items.length} items`}
    >
      {/* Total height spacer */}
      <div 
        style={{ height: totalHeight, position: "relative" }}
        aria-hidden="true"
      >
        {/* Positioned content */}
        <div 
          style={{ 
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            transform: `translateY(${offsetY}px)`,
          }}
        >
          {visibleItems.map((item, idx) => (
            <div 
              key={startIndex + idx}
              style={{ height: itemHeight }}
              role="listitem"
              aria-setsize={items.length}
              aria-posinset={startIndex + idx + 1}
            >
              {renderItem(item, startIndex + idx)}
            </div>
          ))}
        </div>
      </div>

      {/* Loading state */}
      {isLoading && (
        <div className="flex items-center justify-center py-4">
          {loadingState || (
            <div className="flex items-center gap-2 text-zinc-500">
              <div className="w-4 h-4 border-2 border-blood-600 border-t-transparent rounded-full animate-spin" />
              <span className="text-sm uppercase tracking-wider">Loading...</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Hook for virtual scrolling with dynamic heights
 * For variable height items
 */
interface DynamicVirtualConfig {
  itemCount: number;
  estimatedItemHeight: number;
  containerHeight: number;
  overscan?: number;
}

interface DynamicVirtualResult {
  scrollTop: number;
  setScrollTop: (top: number) => void;
  visibleRange: { start: number; end: number };
  totalHeight: number;
  getItemOffset: (index: number) => number;
  measureItem: (index: number, height: number) => void;
}

export function useDynamicVirtualList({
  itemCount,
  estimatedItemHeight,
  containerHeight,
  overscan = 3,
}: DynamicVirtualConfig): DynamicVirtualResult {
  const [scrollTop, setScrollTop] = useState(0);
  const [measuredHeights, setMeasuredHeights] = useState<Map<number, number>>(new Map());

  const measureItem = useCallback((index: number, height: number) => {
    setMeasuredHeights(prev => {
      const next = new Map(prev);
      next.set(index, height);
      return next;
    });
  }, []);

  const getItemHeight = useCallback((index: number): number => {
    return measuredHeights.get(index) ?? estimatedItemHeight;
  }, [measuredHeights, estimatedItemHeight]);

  const getItemOffset = useCallback((index: number): number => {
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += getItemHeight(i);
    }
    return offset;
  }, [getItemHeight]);

  const totalHeight = useMemo(() => {
    let height = 0;
    for (let i = 0; i < itemCount; i++) {
      height += getItemHeight(i);
    }
    return height;
  }, [itemCount, getItemHeight]);

  const visibleRange = useMemo(() => {
    // Find start index
    let start = 0;
    let accHeight = 0;
    while (start < itemCount && accHeight < scrollTop) {
      accHeight += getItemHeight(start);
      start++;
    }
    start = Math.max(0, start - 1 - overscan);

    // Find end index
    let end = start;
    accHeight = getItemOffset(start);
    while (end < itemCount && accHeight < scrollTop + containerHeight) {
      accHeight += getItemHeight(end);
      end++;
    }
    end = Math.min(itemCount - 1, end + overscan);

    return { start, end };
  }, [scrollTop, itemCount, containerHeight, getItemHeight, getItemOffset, overscan]);

  return {
    scrollTop,
    setScrollTop,
    visibleRange,
    totalHeight,
    getItemOffset,
    measureItem,
  };
}

/**
 * Simple infinite scroll trigger component
 */
interface InfiniteScrollTriggerProps {
  onTrigger: () => void;
  isLoading?: boolean;
  hasMore?: boolean;
  threshold?: number;
}

export function InfiniteScrollTrigger({
  onTrigger,
  isLoading = false,
  hasMore = true,
  threshold = 100,
}: InfiniteScrollTriggerProps) {
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hasMore || isLoading) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          onTrigger();
        }
      },
      { rootMargin: `${threshold}px` }
    );

    if (triggerRef.current) {
      observer.observe(triggerRef.current);
    }

    return () => observer.disconnect();
  }, [onTrigger, isLoading, hasMore, threshold]);

  if (!hasMore) return null;

  return (
    <div ref={triggerRef} className="flex items-center justify-center py-4">
      {isLoading && (
        <div className="flex items-center gap-2 text-zinc-500">
          <div className="w-4 h-4 border-2 border-blood-600 border-t-transparent rounded-full animate-spin" />
          <span className="text-sm uppercase tracking-wider">Loading more...</span>
        </div>
      )}
    </div>
  );
}
