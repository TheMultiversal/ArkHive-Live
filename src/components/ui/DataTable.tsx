'use client';

import { useState, useMemo, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Search, Filter, MoreHorizontal } from 'lucide-react';
import { cn } from '@/lib/utils';

// Types
export interface Column<T> {
  key: keyof T | string;
  header: string;
  sortable?: boolean;
  width?: string;
  align?: 'left' | 'center' | 'right';
  render?: (value: T[keyof T], row: T, index: number) => ReactNode;
}

export interface DataTableProps<T extends Record<string, unknown>> {
  data: T[];
  columns: Column<T>[];
  keyField: keyof T;
  pageSize?: number;
  searchable?: boolean;
  searchPlaceholder?: string;
  searchFields?: (keyof T)[];
  selectable?: boolean;
  onSelectionChange?: (selectedRows: T[]) => void;
  onRowClick?: (row: T) => void;
  emptyMessage?: string;
  loading?: boolean;
  stickyHeader?: boolean;
  striped?: boolean;
  hoverable?: boolean;
  compact?: boolean;
  className?: string;
  actions?: (row: T) => ReactNode;
}

type SortDirection = 'asc' | 'desc' | null;

export default function DataTable<T extends Record<string, unknown>>({
  data,
  columns,
  keyField,
  pageSize = 10,
  searchable = true,
  searchPlaceholder = 'Search...',
  searchFields,
  selectable = false,
  onSelectionChange,
  onRowClick,
  emptyMessage = 'No data available',
  loading = false,
  stickyHeader = false,
  striped = true,
  hoverable = true,
  compact = false,
  className,
  actions,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortColumn, setSortColumn] = useState<keyof T | string | null>(null);
  const [sortDirection, setSortDirection] = useState<SortDirection>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedRows, setSelectedRows] = useState<Set<T[keyof T]>>(new Set());

  // Filter data by search query
  const filteredData = useMemo(() => {
    if (!searchQuery) return data;
    
    const fields = searchFields || columns.map((c) => c.key as keyof T);
    const query = searchQuery.toLowerCase();
    
    return data.filter((row) =>
      fields.some((field) => {
        const value = row[field];
        return value !== null && value !== undefined && 
               String(value).toLowerCase().includes(query);
      })
    );
  }, [data, searchQuery, searchFields, columns]);

  // Sort data
  const sortedData = useMemo(() => {
    if (!sortColumn || !sortDirection) return filteredData;
    
    return [...filteredData].sort((a, b) => {
      const aValue = a[sortColumn as keyof T];
      const bValue = b[sortColumn as keyof T];
      
      if (aValue === null || aValue === undefined) return 1;
      if (bValue === null || bValue === undefined) return -1;
      
      let comparison = 0;
      if (typeof aValue === 'string' && typeof bValue === 'string') {
        comparison = aValue.localeCompare(bValue);
      } else if (typeof aValue === 'number' && typeof bValue === 'number') {
        comparison = aValue - bValue;
      } else {
        comparison = String(aValue).localeCompare(String(bValue));
      }
      
      return sortDirection === 'asc' ? comparison : -comparison;
    });
  }, [filteredData, sortColumn, sortDirection]);

  // Paginate data
  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, currentPage, pageSize]);

  const totalPages = Math.ceil(sortedData.length / pageSize);

  // Handle sort
  const handleSort = (column: keyof T | string) => {
    if (sortColumn === column) {
      if (sortDirection === 'asc') {
        setSortDirection('desc');
      } else if (sortDirection === 'desc') {
        setSortColumn(null);
        setSortDirection(null);
      }
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
    setCurrentPage(1);
  };

  // Handle selection
  const handleSelectAll = () => {
    if (selectedRows.size === paginatedData.length) {
      setSelectedRows(new Set());
      onSelectionChange?.([]);
    } else {
      const newSelected = new Set(paginatedData.map((row) => row[keyField]));
      setSelectedRows(newSelected);
      onSelectionChange?.(paginatedData);
    }
  };

  const handleSelectRow = (row: T) => {
    const newSelected = new Set(selectedRows);
    const key = row[keyField];
    
    if (newSelected.has(key)) {
      newSelected.delete(key);
    } else {
      newSelected.add(key);
    }
    
    setSelectedRows(newSelected);
    onSelectionChange?.(data.filter((r) => newSelected.has(r[keyField])));
  };

  const isSelected = (row: T) => selectedRows.has(row[keyField]);
  const isAllSelected = paginatedData.length > 0 && selectedRows.size === paginatedData.length;

  return (
    <div className={cn('w-full', className)}>
      {/* Search and filters */}
      {searchable && (
        <div className="flex items-center gap-4 mb-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder={searchPlaceholder}
              className="w-full pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
            />
          </div>
          <div className="text-sm text-zinc-500">
            {sortedData.length} result{sortedData.length !== 1 ? 's' : ''}
          </div>
        </div>
      )}

      {/* Table */}
      <div className="overflow-x-auto border border-zinc-800">
        <table className="w-full">
          <thead className={cn(
            'bg-zinc-900',
            stickyHeader && 'sticky top-0 z-10'
          )}>
            <tr>
              {selectable && (
                <th className="w-12 px-4 py-3 border-b border-zinc-800">
                  <input
                    type="checkbox"
                    checked={isAllSelected}
                    onChange={handleSelectAll}
                    className="w-4 h-4 bg-zinc-800 border-zinc-600 text-blood-500 focus:ring-blood-500 focus:ring-offset-0"
                  />
                </th>
              )}
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className={cn(
                    'px-4 border-b border-zinc-800 text-left text-xs font-semibold text-zinc-400 uppercase tracking-wider',
                    compact ? 'py-2' : 'py-3',
                    column.sortable && 'cursor-pointer hover:text-white transition-colors',
                    column.align === 'center' && 'text-center',
                    column.align === 'right' && 'text-right'
                  )}
                  style={{ width: column.width }}
                  onClick={() => column.sortable && handleSort(column.key)}
                >
                  <div className="flex items-center gap-2">
                    {column.header}
                    {column.sortable && (
                      <span className="text-zinc-600">
                        {sortColumn === column.key ? (
                          sortDirection === 'asc' ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )
                        ) : (
                          <div className="w-4 h-4 flex flex-col">
                            <ChevronUp className="w-4 h-2 -mb-1" />
                            <ChevronDown className="w-4 h-2" />
                          </div>
                        )}
                      </span>
                    )}
                  </div>
                </th>
              ))}
              {actions && (
                <th className={cn(
                  'w-12 px-4 border-b border-zinc-800',
                  compact ? 'py-2' : 'py-3'
                )}>
                  <span className="sr-only">Actions</span>
                </th>
              )}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {loading ? (
                // Loading skeleton
                Array.from({ length: pageSize }).map((_, index) => (
                  <tr key={`skeleton-${index}`}>
                    {selectable && (
                      <td className="px-4 py-4 border-b border-zinc-800/50">
                        <div className="w-4 h-4 bg-zinc-800 animate-pulse" />
                      </td>
                    )}
                    {columns.map((column) => (
                      <td key={String(column.key)} className="px-4 py-4 border-b border-zinc-800/50">
                        <div className="h-4 bg-zinc-800 animate-pulse w-3/4" />
                      </td>
                    ))}
                    {actions && (
                      <td className="px-4 py-4 border-b border-zinc-800/50">
                        <div className="w-6 h-6 bg-zinc-800 animate-pulse" />
                      </td>
                    )}
                  </tr>
                ))
              ) : paginatedData.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length + (selectable ? 1 : 0) + (actions ? 1 : 0)}
                    className="px-4 py-12 text-center text-zinc-500"
                  >
                    {emptyMessage}
                  </td>
                </tr>
              ) : (
                paginatedData.map((row, index) => (
                  <motion.tr
                    key={String(row[keyField])}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15, delay: index * 0.02 }}
                    className={cn(
                      'group',
                      striped && index % 2 === 1 && 'bg-zinc-900/30',
                      hoverable && 'hover:bg-zinc-800/50',
                      onRowClick && 'cursor-pointer',
                      isSelected(row) && 'bg-blood-900/20'
                    )}
                    onClick={() => onRowClick?.(row)}
                  >
                    {selectable && (
                      <td className={cn(
                        'px-4 border-b border-zinc-800/50',
                        compact ? 'py-2' : 'py-4'
                      )}>
                        <input
                          type="checkbox"
                          checked={isSelected(row)}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleSelectRow(row);
                          }}
                          className="w-4 h-4 bg-zinc-800 border-zinc-600 text-blood-500 focus:ring-blood-500 focus:ring-offset-0"
                        />
                      </td>
                    )}
                    {columns.map((column) => {
                      const value = row[column.key as keyof T];
                      return (
                        <td
                          key={String(column.key)}
                          className={cn(
                            'px-4 border-b border-zinc-800/50 text-sm text-zinc-300',
                            compact ? 'py-2' : 'py-4',
                            column.align === 'center' && 'text-center',
                            column.align === 'right' && 'text-right'
                          )}
                        >
                          {column.render
                            ? column.render(value, row, index)
                            : value !== null && value !== undefined
                              ? String(value)
                              : '-'}
                        </td>
                      );
                    })}
                    {actions && (
                      <td className={cn(
                        'px-4 border-b border-zinc-800/50',
                        compact ? 'py-2' : 'py-4'
                      )}>
                        <div onClick={(e) => e.stopPropagation()}>
                          {actions(row)}
                        </div>
                      </td>
                    )}
                  </motion.tr>
                ))
              )}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-zinc-500">
            Showing {(currentPage - 1) * pageSize + 1} to{' '}
            {Math.min(currentPage * pageSize, sortedData.length)} of{' '}
            {sortedData.length}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="p-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Page numbers */}
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.min(5, totalPages) }).map((_, i) => {
                let pageNum: number;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={cn(
                      'w-8 h-8 text-sm transition-colors',
                      currentPage === pageNum
                        ? 'bg-blood-600 text-white'
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800'
                    )}
                  >
                    {pageNum}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="p-2 text-zinc-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
