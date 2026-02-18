'use client';

import { useState, useCallback, useMemo } from 'react';

// ============================================================
// Types
// ============================================================

export type FilterOperator =
  | 'equals'
  | 'notEquals'
  | 'contains'
  | 'notContains'
  | 'startsWith'
  | 'endsWith'
  | 'gt'
  | 'gte'
  | 'lt'
  | 'lte'
  | 'between'
  | 'in'
  | 'notIn'
  | 'isNull'
  | 'isNotNull';

export interface Filter {
  id: string;
  field: string;
  operator: FilterOperator;
  value: unknown;
  label?: string;
  enabled?: boolean;
}

export interface FilterGroup {
  id: string;
  logic: 'and' | 'or';
  filters: (Filter | FilterGroup)[];
}

export interface UseFiltersOptions<T> {
  data: T[];
  initialFilters?: Filter[];
  caseSensitive?: boolean;
}

export interface UseFiltersReturn<T> {
  filters: Filter[];
  filteredData: T[];
  activeFilterCount: number;
  addFilter: (filter: Omit<Filter, 'id'>) => void;
  removeFilter: (id: string) => void;
  updateFilter: (id: string, updates: Partial<Filter>) => void;
  toggleFilter: (id: string) => void;
  clearFilters: () => void;
  setFilters: (filters: Filter[]) => void;
  hasFilter: (field: string) => boolean;
  getFilterByField: (field: string) => Filter | undefined;
}

// ============================================================
// Filter Evaluation
// ============================================================

function evaluateFilter<T>(item: T, filter: Filter, caseSensitive: boolean): boolean {
  const fieldValue = getNestedValue(item, filter.field);
  const filterValue = filter.value;

  // Handle null checks first
  if (filter.operator === 'isNull') {
    return fieldValue === null || fieldValue === undefined;
  }
  if (filter.operator === 'isNotNull') {
    return fieldValue !== null && fieldValue !== undefined;
  }

  // If field value is null/undefined and we're not checking for null, filter out
  if (fieldValue === null || fieldValue === undefined) {
    return false;
  }

  // String operations
  const strFieldValue = caseSensitive
    ? String(fieldValue)
    : String(fieldValue).toLowerCase();
  const strFilterValue = caseSensitive
    ? String(filterValue)
    : String(filterValue).toLowerCase();

  switch (filter.operator) {
    case 'equals':
      return strFieldValue === strFilterValue;
    case 'notEquals':
      return strFieldValue !== strFilterValue;
    case 'contains':
      return strFieldValue.includes(strFilterValue);
    case 'notContains':
      return !strFieldValue.includes(strFilterValue);
    case 'startsWith':
      return strFieldValue.startsWith(strFilterValue);
    case 'endsWith':
      return strFieldValue.endsWith(strFilterValue);
    case 'gt':
      return Number(fieldValue) > Number(filterValue);
    case 'gte':
      return Number(fieldValue) >= Number(filterValue);
    case 'lt':
      return Number(fieldValue) < Number(filterValue);
    case 'lte':
      return Number(fieldValue) <= Number(filterValue);
    case 'between': {
      const [min, max] = filterValue as [number, number];
      const numValue = Number(fieldValue);
      return numValue >= min && numValue <= max;
    }
    case 'in': {
      const values = filterValue as unknown[];
      return values.some((v) =>
        caseSensitive
          ? String(v) === String(fieldValue)
          : String(v).toLowerCase() === strFieldValue
      );
    }
    case 'notIn': {
      const values = filterValue as unknown[];
      return !values.some((v) =>
        caseSensitive
          ? String(v) === String(fieldValue)
          : String(v).toLowerCase() === strFieldValue
      );
    }
    default:
      return true;
  }
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

export function useFilters<T>(options: UseFiltersOptions<T>): UseFiltersReturn<T> {
  const { data, initialFilters = [], caseSensitive = false } = options;

  const [filters, setFilters] = useState<Filter[]>(initialFilters);

  // Apply filters to data
  const filteredData = useMemo(() => {
    const activeFilters = filters.filter((f) => f.enabled !== false);

    if (activeFilters.length === 0) {
      return data;
    }

    return data.filter((item) =>
      activeFilters.every((filter) => evaluateFilter(item, filter, caseSensitive))
    );
  }, [data, filters, caseSensitive]);

  // Count active filters
  const activeFilterCount = useMemo(
    () => filters.filter((f) => f.enabled !== false).length,
    [filters]
  );

  // Add filter
  const addFilter = useCallback((filter: Omit<Filter, 'id'>) => {
    const newFilter: Filter = {
      ...filter,
      id: `filter_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      enabled: filter.enabled ?? true,
    };
    setFilters((prev) => [...prev, newFilter]);
  }, []);

  // Remove filter
  const removeFilter = useCallback((id: string) => {
    setFilters((prev) => prev.filter((f) => f.id !== id));
  }, []);

  // Update filter
  const updateFilter = useCallback((id: string, updates: Partial<Filter>) => {
    setFilters((prev) =>
      prev.map((f) => (f.id === id ? { ...f, ...updates } : f))
    );
  }, []);

  // Toggle filter
  const toggleFilter = useCallback((id: string) => {
    setFilters((prev) =>
      prev.map((f) => (f.id === id ? { ...f, enabled: !f.enabled } : f))
    );
  }, []);

  // Clear all filters
  const clearFilters = useCallback(() => {
    setFilters([]);
  }, []);

  // Check if filter exists for field
  const hasFilter = useCallback(
    (field: string) => filters.some((f) => f.field === field),
    [filters]
  );

  // Get filter by field
  const getFilterByField = useCallback(
    (field: string) => filters.find((f) => f.field === field),
    [filters]
  );

  return {
    filters,
    filteredData,
    activeFilterCount,
    addFilter,
    removeFilter,
    updateFilter,
    toggleFilter,
    clearFilters,
    setFilters,
    hasFilter,
    getFilterByField,
  };
}

export default useFilters;
