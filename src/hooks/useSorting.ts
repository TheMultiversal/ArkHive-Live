'use client';

import { useState, useCallback, useMemo } from 'react';

// ============================================================
// Types
// ============================================================

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  direction: SortDirection;
  label?: string;
  comparator?: (a: unknown, b: unknown) => number;
}

export interface UseSortingOptions<T> {
  data: T[];
  initialSort?: SortConfig | null;
  multiSort?: boolean;
  maxSortFields?: number;
}

export interface UseSortingReturn<T> {
  sortedData: T[];
  sortConfig: SortConfig[];
  sortBy: (field: string, direction?: SortDirection) => void;
  toggleSort: (field: string) => void;
  clearSort: () => void;
  removeSortField: (field: string) => void;
  getSortDirection: (field: string) => SortDirection | null;
  getSortIndex: (field: string) => number;
  isSorted: (field: string) => boolean;
}

// ============================================================
// Default Comparator
// ============================================================

function defaultComparator(a: unknown, b: unknown): number {
  // Handle null/undefined
  if (a === null || a === undefined) return 1;
  if (b === null || b === undefined) return -1;

  // Handle dates
  if (a instanceof Date && b instanceof Date) {
    return a.getTime() - b.getTime();
  }

  // Handle numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a - b;
  }

  // Handle booleans
  if (typeof a === 'boolean' && typeof b === 'boolean') {
    return a === b ? 0 : a ? -1 : 1;
  }

  // Default to string comparison
  const strA = String(a).toLowerCase();
  const strB = String(b).toLowerCase();
  return strA.localeCompare(strB);
}

function getNestedValue(obj: unknown, path: string): unknown {
  return path.split('.').reduce((acc: unknown, part: string) => {
    if (acc && typeof acc === 'object' && part in acc) {
      return (acc as Record<string, unknown>)[part];
    }
    return undefined;
  }, obj);
}

// ============================================================
// Hook Implementation
// ============================================================

export function useSorting<T>(options: UseSortingOptions<T>): UseSortingReturn<T> {
  const {
    data,
    initialSort = null,
    multiSort = false,
    maxSortFields = 3,
  } = options;

  const [sortConfig, setSortConfig] = useState<SortConfig[]>(
    initialSort ? [initialSort] : []
  );

  // Sort data
  const sortedData = useMemo(() => {
    if (sortConfig.length === 0) {
      return data;
    }

    return [...data].sort((a, b) => {
      for (const config of sortConfig) {
        const valueA = getNestedValue(a, config.field);
        const valueB = getNestedValue(b, config.field);
        
        const comparator = config.comparator || defaultComparator;
        const result = comparator(valueA, valueB);

        if (result !== 0) {
          return config.direction === 'asc' ? result : -result;
        }
      }
      return 0;
    });
  }, [data, sortConfig]);

  // Sort by field
  const sortBy = useCallback(
    (field: string, direction?: SortDirection) => {
      setSortConfig((prev) => {
        const existingIndex = prev.findIndex((s) => s.field === field);
        const newDirection = direction || 'asc';

        if (multiSort) {
          if (existingIndex >= 0) {
            // Update existing
            const updated = [...prev];
            updated[existingIndex] = { ...updated[existingIndex], direction: newDirection };
            return updated;
          } else if (prev.length < maxSortFields) {
            // Add new
            return [...prev, { field, direction: newDirection }];
          }
          return prev;
        } else {
          // Single sort mode
          return [{ field, direction: newDirection }];
        }
      });
    },
    [multiSort, maxSortFields]
  );

  // Toggle sort direction
  const toggleSort = useCallback(
    (field: string) => {
      setSortConfig((prev) => {
        const existingIndex = prev.findIndex((s) => s.field === field);

        if (existingIndex >= 0) {
          const current = prev[existingIndex];
          if (current.direction === 'asc') {
            // Switch to desc
            const updated = [...prev];
            updated[existingIndex] = { ...current, direction: 'desc' };
            return updated;
          } else {
            // Remove sort (was desc, now unsorted)
            return prev.filter((_, i) => i !== existingIndex);
          }
        } else {
          // Add new ascending sort
          if (multiSort && prev.length < maxSortFields) {
            return [...prev, { field, direction: 'asc' }];
          }
          return [{ field, direction: 'asc' }];
        }
      });
    },
    [multiSort, maxSortFields]
  );

  // Clear all sorting
  const clearSort = useCallback(() => {
    setSortConfig([]);
  }, []);

  // Remove specific sort field
  const removeSortField = useCallback((field: string) => {
    setSortConfig((prev) => prev.filter((s) => s.field !== field));
  }, []);

  // Get sort direction for field
  const getSortDirection = useCallback(
    (field: string): SortDirection | null => {
      const config = sortConfig.find((s) => s.field === field);
      return config?.direction || null;
    },
    [sortConfig]
  );

  // Get sort index (for multi-sort)
  const getSortIndex = useCallback(
    (field: string): number => {
      return sortConfig.findIndex((s) => s.field === field);
    },
    [sortConfig]
  );

  // Check if field is sorted
  const isSorted = useCallback(
    (field: string): boolean => {
      return sortConfig.some((s) => s.field === field);
    },
    [sortConfig]
  );

  return {
    sortedData,
    sortConfig,
    sortBy,
    toggleSort,
    clearSort,
    removeSortField,
    getSortDirection,
    getSortIndex,
    isSorted,
  };
}

export default useSorting;
