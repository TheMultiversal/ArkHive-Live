'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================
// Types
// ============================================================

export interface UseInfiniteScrollOptions<T> {
  initialData?: T[];
  pageSize?: number;
  threshold?: number;
  fetchData: (page: number, pageSize: number) => Promise<{ data: T[]; hasMore: boolean }>;
  enabled?: boolean;
}

export interface UseInfiniteScrollReturn<T> {
  data: T[];
  isLoading: boolean;
  isLoadingMore: boolean;
  error: Error | null;
  hasMore: boolean;
  loadMore: () => void;
  refresh: () => Promise<void>;
  reset: () => void;
  observerRef: (node: HTMLElement | null) => void;
}

// ============================================================
// Hook Implementation
// ============================================================

export function useInfiniteScroll<T>(
  options: UseInfiniteScrollOptions<T>
): UseInfiniteScrollReturn<T> {
  const {
    initialData = [],
    pageSize = 20,
    threshold = 100,
    fetchData,
    enabled = true,
  } = options;

  const [data, setData] = useState<T[]>(initialData);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [hasMore, setHasMore] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef(false);

  // Load initial data
  useEffect(() => {
    if (!enabled) return;

    const loadInitial = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const result = await fetchData(1, pageSize);
        setData(result.data);
        setHasMore(result.hasMore);
        setPage(1);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load data'));
      } finally {
        setIsLoading(false);
      }
    };

    loadInitial();
  }, [enabled, fetchData, pageSize]);

  // Load more data
  const loadMore = useCallback(async () => {
    if (loadingRef.current || !hasMore || isLoading) return;

    loadingRef.current = true;
    setIsLoadingMore(true);
    setError(null);

    try {
      const nextPage = page + 1;
      const result = await fetchData(nextPage, pageSize);
      setData((prev) => [...prev, ...result.data]);
      setHasMore(result.hasMore);
      setPage(nextPage);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to load more'));
    } finally {
      setIsLoadingMore(false);
      loadingRef.current = false;
    }
  }, [page, pageSize, hasMore, isLoading, fetchData]);

  // Refresh data
  const refresh = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const result = await fetchData(1, pageSize);
      setData(result.data);
      setHasMore(result.hasMore);
      setPage(1);
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to refresh'));
    } finally {
      setIsLoading(false);
    }
  }, [fetchData, pageSize]);

  // Reset state
  const reset = useCallback(() => {
    setData(initialData);
    setPage(1);
    setHasMore(true);
    setError(null);
  }, [initialData]);

  // Intersection observer callback
  const setObserverRef = useCallback(
    (node: HTMLElement | null) => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      if (!node) return;

      observerRef.current = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && hasMore && !isLoading && !isLoadingMore) {
            loadMore();
          }
        },
        {
          root: null,
          rootMargin: `${threshold}px`,
          threshold: 0,
        }
      );

      observerRef.current.observe(node);
    },
    [hasMore, isLoading, isLoadingMore, loadMore, threshold]
  );

  // Cleanup observer
  useEffect(() => {
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return {
    data,
    isLoading,
    isLoadingMore,
    error,
    hasMore,
    loadMore,
    refresh,
    reset,
    observerRef: setObserverRef,
  };
}

export default useInfiniteScroll;
