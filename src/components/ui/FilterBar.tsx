'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronDown } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { SEVERITY_CONFIG, INVESTIGATION_CATEGORIES } from '@/lib/constants';

interface FilterBarProps {
  onSearchChange: (query: string) => void;
  onSeverityChange: (severity: string | null) => void;
  onCategoryChange: (category: string | null) => void;
  onSortChange: (sort: string) => void;
  currentSeverity?: string | null;
  currentCategory?: string | null;
  currentSort?: string;
  resultCount?: number;
  className?: string;
}

/**
 * Combined filter bar for investigations/entities
 */
export default function FilterBar({
  onSearchChange,
  onSeverityChange,
  onCategoryChange,
  onSortChange,
  currentSeverity,
  currentCategory,
  currentSort = 'date',
  resultCount,
  className = '',
}: FilterBarProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const debouncedSearch = useDebounce(searchQuery, 300);

  // Update parent when debounced search changes
  useMemo(() => {
    onSearchChange(debouncedSearch);
  }, [debouncedSearch, onSearchChange]);

  const activeFiltersCount = [currentSeverity, currentCategory].filter(Boolean).length;

  const clearFilters = () => {
    setSearchQuery('');
    onSearchChange('');
    onSeverityChange(null);
    onCategoryChange(null);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search and Filter Toggle */}
      <div className="flex gap-3">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search investigations..."
            className="w-full pl-11 pr-4 py-3 bg-black border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-600 hover:text-zinc-400"
              aria-label="Clear search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`flex items-center gap-2 px-4 py-3 border-2 transition-colors ${
            showFilters || activeFiltersCount > 0
              ? 'border-blood-700 bg-blood-950/30 text-blood-600'
              : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'
          }`}
        >
          <Filter className="w-4 h-4" />
          <span className="text-sm font-medium">Filters</span>
          {activeFiltersCount > 0 && (
            <span className="px-2 py-0.5 bg-blood-700 text-white text-xs font-bold">
              {activeFiltersCount}
            </span>
          )}
          <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* Filter Options */}
      {showFilters && (
        <div className="p-4 border-2 border-zinc-800 bg-black/60 space-y-4">
          <div className="flex flex-wrap gap-6">
            {/* Severity Filter */}
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-wider">Severity</label>
              <div className="flex flex-wrap gap-2">
                {Object.entries(SEVERITY_CONFIG).map(([key, config]) => (
                  <button
                    key={key}
                    onClick={() => onSeverityChange(currentSeverity === key ? null : key)}
                    className={`px-3 py-1.5 border text-xs font-medium transition-colors ${
                      currentSeverity === key
                        ? config.color
                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'
                    }`}
                  >
                    {config.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-wider">Category</label>
              <div className="flex flex-wrap gap-2">
                {INVESTIGATION_CATEGORIES.map((category) => (
                  <button
                    key={category}
                    onClick={() => onCategoryChange(currentCategory === category ? null : category)}
                    className={`px-3 py-1.5 border text-xs font-medium transition-colors ${
                      currentCategory === category
                        ? 'border-blood-700 bg-blood-950/30 text-blood-600'
                        : 'border-zinc-800 text-zinc-500 hover:border-zinc-700'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Sort */}
            <div className="space-y-2">
              <label className="text-xs text-zinc-500 uppercase tracking-wider">Sort By</label>
              <select
                value={currentSort}
                onChange={(e) => onSortChange(e.target.value)}
                className="px-3 py-1.5 bg-black border-2 border-zinc-800 text-zinc-400 text-sm focus:outline-none focus:border-blood-700"
              >
                <option value="date">Most Recent</option>
                <option value="severity">Severity</option>
                <option value="entities">Entity Count</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>

          {/* Clear Filters */}
          {activeFiltersCount > 0 && (
            <div className="pt-4 border-t border-zinc-800">
              <button
                onClick={clearFilters}
                className="text-sm text-zinc-500 hover:text-blood-600 transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      )}

      {/* Result Count */}
      {resultCount !== undefined && (
        <p className="text-sm text-zinc-600">
          {resultCount} {resultCount === 1 ? 'result' : 'results'} found
        </p>
      )}
    </div>
  );
}
