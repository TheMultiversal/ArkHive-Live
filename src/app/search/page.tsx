'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Search, Filter, SlidersHorizontal, Grid, List, X, Calendar, AlertTriangle, Building, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/useDebounce';

// Mock search results
const mockResults: { investigations: SearchResult[]; entities: SearchResult[]; documents: SearchResult[] } = {
  investigations: [
    {
      id: '1',
      type: 'investigation',
      title: 'Operation Nightfall: CIA Black Sites',
      description: 'Classified documents reveal network of secret detention facilities across Eastern Europe.',
      severity: 'critical',
      date: '2024-01-15',
      tags: ['CIA', 'Black Sites', 'Torture'],
    },
    {
      id: '2',
      type: 'investigation',
      title: 'Pharma Price Fixing Scandal',
      description: 'Exposing how pharmaceutical companies coordinated pricing strategies.',
      severity: 'high',
      date: '2024-02-20',
      tags: ['Healthcare', 'Corruption', 'Pharmaceuticals'],
    },
  ],
  entities: [
    {
      id: '3',
      type: 'entity',
      entityType: 'agency',
      title: 'Central Intelligence Agency',
      description: 'United States foreign intelligence service',
      riskLevel: 'high',
    },
    {
      id: '4',
      type: 'entity',
      entityType: 'corporation',
      title: 'Blackwater/Academi',
      description: 'Private military company with documented human rights violations',
      riskLevel: 'critical',
    },
  ],
  documents: [
    {
      id: '5',
      type: 'document',
      title: 'FOIA Response - Surveillance Programs',
      description: 'Declassified documents on domestic surveillance',
      date: '2023-11-10',
    },
  ],
};

type ResultType = 'all' | 'investigations' | 'entities' | 'documents';
type SortOption = 'relevance' | 'date' | 'severity';

const severityColors = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500',
};

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [resultType, setResultType] = useState<ResultType>('all');
  const [sortBy, setSortBy] = useState<SortOption>('relevance');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
  const [showFilters, setShowFilters] = useState(false);
  const [dateRange, setDateRange] = useState<{ from: string; to: string }>({ from: '', to: '' });
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const debouncedQuery = useDebounce(query, 300);

  // Filter and sort results
  const results = useMemo(() => {
    let allResults: SearchResult[] = [];
    
    if (resultType === 'all' || resultType === 'investigations') {
      allResults = [...allResults, ...mockResults.investigations];
    }
    if (resultType === 'all' || resultType === 'entities') {
      allResults = [...allResults, ...mockResults.entities];
    }
    if (resultType === 'all' || resultType === 'documents') {
      allResults = [...allResults, ...mockResults.documents];
    }

    // Filter by query
    if (debouncedQuery) {
      const q = debouncedQuery.toLowerCase();
      allResults = allResults.filter(
        (r) =>
          r.title.toLowerCase().includes(q) ||
          r.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === 'date') {
      allResults.sort((a, b) => {
        const dateA = a.date || '';
        const dateB = b.date || '';
        return dateB.localeCompare(dateA);
      });
    }

    return allResults;
  }, [debouncedQuery, resultType, sortBy]);

  const resultCounts = {
    all: mockResults.investigations.length + mockResults.entities.length + mockResults.documents.length,
    investigations: mockResults.investigations.length,
    entities: mockResults.entities.length,
    documents: mockResults.documents.length,
  };

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Search Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-6">Search</h1>
          
          {/* Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search investigations, entities, documents..."
              className="w-full pl-12 pr-12 py-4 bg-zinc-900 border border-zinc-800 text-white text-lg placeholder-zinc-500 focus:outline-none focus:border-blood-500 transition-colors"
              autoFocus
            />
            {query && (
              <button
                onClick={() => setQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          {/* Type Tabs */}
          <div className="flex gap-2">
            {(['all', 'investigations', 'entities', 'documents'] as const).map((type) => (
              <button
                key={type}
                onClick={() => setResultType(type)}
                className={cn(
                  'px-4 py-2 text-sm font-medium transition-colors',
                  resultType === type
                    ? 'bg-blood-600 text-white'
                    : 'bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800'
                )}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
                <span className="ml-2 text-xs opacity-70">({resultCounts[type]})</span>
              </button>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={cn(
                'flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                showFilters
                  ? 'bg-blood-600 text-white'
                  : 'bg-zinc-900 text-zinc-400 hover:text-white'
              )}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="px-4 py-2 bg-zinc-900 border border-zinc-800 text-zinc-300 text-sm focus:outline-none focus:border-blood-500"
            >
              <option value="relevance">Sort by Relevance</option>
              <option value="date">Sort by Date</option>
              <option value="severity">Sort by Severity</option>
            </select>

            <div className="flex border border-zinc-800">
              <button
                onClick={() => setViewMode('list')}
                className={cn(
                  'p-2 transition-colors',
                  viewMode === 'list' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
                )}
              >
                <List className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={cn(
                  'p-2 transition-colors',
                  viewMode === 'grid' ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-white'
                )}
              >
                <Grid className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Expanded Filters */}
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="bg-zinc-900 border border-zinc-800 p-6 mb-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Date Range */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Date Range
                </label>
                <div className="flex gap-2">
                  <input
                    type="date"
                    value={dateRange.from}
                    onChange={(e) => setDateRange({ ...dateRange, from: e.target.value })}
                    className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 text-white text-sm"
                  />
                  <input
                    type="date"
                    value={dateRange.to}
                    onChange={(e) => setDateRange({ ...dateRange, to: e.target.value })}
                    className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 text-white text-sm"
                  />
                </div>
              </div>

              {/* Severity */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  <AlertTriangle className="w-4 h-4 inline mr-2" />
                  Severity
                </label>
                <div className="flex flex-wrap gap-2">
                  {['critical', 'high', 'medium', 'low'].map((sev) => (
                    <button
                      key={sev}
                      className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 hover:bg-zinc-700 capitalize"
                    >
                      {sev}
                    </button>
                  ))}
                </div>
              </div>

              {/* Entity Type */}
              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Entity Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {['agency', 'corporation', 'individual'].map((type) => (
                    <button
                      key={type}
                      className="px-3 py-1 text-xs bg-zinc-800 text-zinc-300 hover:bg-zinc-700 capitalize"
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results */}
        <div className="text-sm text-zinc-500 mb-4">
          {results.length} result{results.length !== 1 ? 's' : ''}
          {debouncedQuery && ` for "${debouncedQuery}"`}
        </div>

        {results.length === 0 ? (
          <div className="text-center py-16">
            <Search className="w-16 h-16 text-zinc-700 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-zinc-400 mb-2">No results found</h2>
            <p className="text-zinc-500">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className={cn(
            viewMode === 'grid'
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
              : 'space-y-4'
          )}>
            {results.map((result, index) => (
              <motion.div
                key={result.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <SearchResultCard result={result} viewMode={viewMode} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// Define result type at module level
interface SearchResult {
  id: string;
  type: string;
  title: string;
  description: string;
  severity?: 'critical' | 'high' | 'medium' | 'low';
  date?: string;
  tags?: string[];
  entityType?: string;
  riskLevel?: string;
}

function SearchResultCard({ 
  result, 
  viewMode 
}: { 
  result: SearchResult; 
  viewMode: 'grid' | 'list';
}) {
  const getLink = () => {
    switch (result.type) {
      case 'investigation':
        return `/investigations/${result.id}`;
      case 'entity':
        return `/entities/${result.entityType}s/${result.id}`;
      case 'document':
        return `/documents/${result.id}`;
      default:
        return '#';
    }
  };

  const getIcon = () => {
    switch (result.type) {
      case 'investigation':
        return <AlertTriangle className="w-5 h-5" />;
      case 'entity':
        return result.entityType === 'individual' ? <User className="w-5 h-5" /> : <Building className="w-5 h-5" />;
      default:
        return <Search className="w-5 h-5" />;
    }
  };

  return (
    <Link
      href={getLink()}
      className={cn(
        'block bg-zinc-900/50 border border-zinc-800 p-4 hover:border-blood-500/50 transition-colors group',
        viewMode === 'list' && 'flex gap-4'
      )}
    >
      <div className={cn(
        'flex items-center justify-center bg-zinc-800 text-zinc-400 group-hover:text-blood-500 transition-colors',
        viewMode === 'grid' ? 'w-full h-24 mb-4' : 'w-12 h-12 flex-shrink-0'
      )}>
        {getIcon()}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 capitalize">
            {result.type}
          </span>
          {result.severity && (
            <span className={cn(
              'w-2 h-2 rounded-full',
              severityColors[result.severity]
            )} />
          )}
        </div>
        <h3 className="font-semibold text-white group-hover:text-blood-400 transition-colors truncate">
          {result.title}
        </h3>
        <p className="text-sm text-zinc-500 mt-1 line-clamp-2">
          {result.description}
        </p>
        {result.date && (
          <p className="text-xs text-zinc-600 mt-2">{result.date}</p>
        )}
      </div>
    </Link>
  );
}
