'use client';

import { useState, useCallback } from 'react';
import { useFetch } from './useFetch';
import { useDebounce } from './useDebounce';
import { ROUTES } from '@/lib/routes';

// ============================================================
// Types
// ============================================================

interface SearchResult {
  id: string;
  type: 'investigation' | 'entity' | 'document' | 'workspace';
  title: string;
  description: string;
  url: string;
  score: number;
  highlights: string[];
}

interface SearchResponse {
  data: SearchResult[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasMore: boolean;
  };
  suggestions: string[];
  facets: {
    types: Record<string, number>;
  };
}

interface UseSearchOptions {
  debounceMs?: number;
  minLength?: number;
  types?: string[];
  page?: number;
  limit?: number;
}

// ============================================================
// useSearch Hook
// ============================================================

export function useSearch(options: UseSearchOptions = {}) {
  const {
    debounceMs = 300,
    minLength = 2,
    types,
    page = 1,
    limit = 20,
  } = options;

  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, debounceMs);

  // Build URL
  const params = new URLSearchParams();
  params.set('q', debouncedQuery);
  params.set('page', String(page));
  params.set('limit', String(limit));
  if (types?.length) params.set('types', types.join(','));

  const shouldFetch = debouncedQuery.length >= minLength;
  const url = shouldFetch ? `${ROUTES.API.SEARCH}?${params.toString()}` : null;

  const { data, loading, error, refetch } = useFetch<SearchResponse>(url, {
    cache: true,
    cacheTime: 30000, // 30 seconds
  });

  const search = useCallback((newQuery: string) => {
    setQuery(newQuery);
  }, []);

  const clear = useCallback(() => {
    setQuery('');
  }, []);

  return {
    query,
    debouncedQuery,
    results: data?.data || [],
    pagination: data?.pagination,
    suggestions: data?.suggestions || [],
    facets: data?.facets,
    loading: loading && shouldFetch,
    error,
    search,
    clear,
    refetch,
    isEmpty: !loading && shouldFetch && (!data?.data || data.data.length === 0),
  };
}

// ============================================================
// useQuickSearch Hook (simpler version)
// ============================================================

export function useQuickSearch(initialQuery = '') {
  const [query, setQuery] = useState(initialQuery);
  const debouncedQuery = useDebounce(query, 200);

  const shouldFetch = debouncedQuery.length >= 2;
  const url = shouldFetch 
    ? `${ROUTES.API.SEARCH}?q=${encodeURIComponent(debouncedQuery)}&limit=5` 
    : null;

  const { data, loading } = useFetch<SearchResponse>(url);

  return {
    query,
    setQuery,
    results: data?.data || [],
    loading: loading && shouldFetch,
    hasResults: (data?.data?.length || 0) > 0,
  };
}

export default useSearch;
