'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';

// ============================================================
// Types
// ============================================================

export interface VirtualItem<T> {
  index: number;
  data: T;
  style: React.CSSProperties;
}

export interface UseVirtualizationOptions<T> {
  items: T[];
  itemHeight: number | ((index: number, data: T) => number);
  containerHeight: number;
  overscan?: number;
  getItemKey?: (item: T, index: number) => string | number;
}

export interface UseVirtualizationReturn<T> {
  virtualItems: VirtualItem<T>[];
  totalHeight: number;
  scrollTop: number;
  setScrollTop: (scrollTop: number) => void;
  visibleRange: { start: number; end: number };
  scrollToIndex: (index: number, align?: 'start' | 'center' | 'end') => void;
  scrollToItem: (item: T) => void;
  isItemVisible: (index: number) => boolean;
  containerProps: {
    onScroll: (e: React.UIEvent<HTMLElement>) => void;
    style: React.CSSProperties;
  };
  contentProps: {
    style: React.CSSProperties;
  };
}

// ============================================================
// Hook Implementation
// ============================================================

export function useVirtualization<T>(
  options: UseVirtualizationOptions<T>
): UseVirtualizationReturn<T> {
  const {
    items,
    itemHeight,
    containerHeight,
    overscan = 3,
    getItemKey = (_, index) => index,
  } = options;

  const [scrollTop, setScrollTop] = useState(0);

  // Calculate item heights and positions
  const itemMetrics = useMemo(() => {
    const metrics: Array<{ offset: number; height: number }> = [];
    let totalOffset = 0;

    for (let i = 0; i < items.length; i++) {
      const height =
        typeof itemHeight === 'function' ? itemHeight(i, items[i]) : itemHeight;
      metrics.push({ offset: totalOffset, height });
      totalOffset += height;
    }

    return { metrics, totalHeight: totalOffset };
  }, [items, itemHeight]);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    const { metrics, totalHeight } = itemMetrics;

    if (metrics.length === 0) {
      return { start: 0, end: 0 };
    }

    // Binary search to find start index
    let start = 0;
    let end = metrics.length - 1;

    while (start < end) {
      const mid = Math.floor((start + end) / 2);
      if (metrics[mid].offset + metrics[mid].height < scrollTop) {
        start = mid + 1;
      } else {
        end = mid;
      }
    }

    const startIndex = Math.max(0, start - overscan);

    // Find end index
    let endIndex = startIndex;
    const maxOffset = scrollTop + containerHeight;

    while (
      endIndex < metrics.length &&
      metrics[endIndex].offset < maxOffset
    ) {
      endIndex++;
    }

    endIndex = Math.min(metrics.length, endIndex + overscan);

    return { start: startIndex, end: endIndex };
  }, [scrollTop, containerHeight, itemMetrics, overscan]);

  // Generate virtual items
  const virtualItems = useMemo<VirtualItem<T>[]>(() => {
    const { metrics } = itemMetrics;
    const result: VirtualItem<T>[] = [];

    for (let i = visibleRange.start; i < visibleRange.end; i++) {
      const item = items[i];
      const metric = metrics[i];

      result.push({
        index: i,
        data: item,
        style: {
          position: 'absolute',
          top: metric.offset,
          left: 0,
          width: '100%',
          height: metric.height,
        },
      });
    }

    return result;
  }, [items, itemMetrics, visibleRange]);

  // Handle scroll
  const handleScroll = useCallback((e: React.UIEvent<HTMLElement>) => {
    setScrollTop(e.currentTarget.scrollTop);
  }, []);

  // Scroll to index
  const scrollToIndex = useCallback(
    (index: number, align: 'start' | 'center' | 'end' = 'start') => {
      const { metrics } = itemMetrics;
      const metric = metrics[index];
      if (!metric) return;

      let offset = metric.offset;

      switch (align) {
        case 'center':
          offset = metric.offset - containerHeight / 2 + metric.height / 2;
          break;
        case 'end':
          offset = metric.offset - containerHeight + metric.height;
          break;
      }

      setScrollTop(Math.max(0, Math.min(offset, itemMetrics.totalHeight - containerHeight)));
    },
    [itemMetrics, containerHeight]
  );

  // Scroll to item
  const scrollToItem = useCallback(
    (item: T) => {
      const index = items.indexOf(item);
      if (index !== -1) {
        scrollToIndex(index);
      }
    },
    [items, scrollToIndex]
  );

  // Check if item is visible
  const isItemVisible = useCallback(
    (index: number) => {
      return index >= visibleRange.start && index < visibleRange.end;
    },
    [visibleRange]
  );

  return {
    virtualItems,
    totalHeight: itemMetrics.totalHeight,
    scrollTop,
    setScrollTop,
    visibleRange,
    scrollToIndex,
    scrollToItem,
    isItemVisible,
    containerProps: {
      onScroll: handleScroll,
      style: {
        overflow: 'auto',
        height: containerHeight,
        position: 'relative',
      },
    },
    contentProps: {
      style: {
        height: itemMetrics.totalHeight,
        position: 'relative',
      },
    },
  };
}

export default useVirtualization;
