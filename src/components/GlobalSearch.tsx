// @ts-nocheck
'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search as SearchIcon, 
  X, 
  Filter,
  Eye,
  User,
  Building2,
  Landmark,
  Users,
  FileText,
  Scale,
  DollarSign,
  Clock,
  ChevronRight,
  AlertTriangle,
  Hash,
  Loader2
} from 'lucide-react';
import investigationDatabase from '@/data/investigations';
import type { InvestigationData } from '@/data/investigations/types';

interface SearchResult {
  type: 'investigation' | 'entity' | 'statute' | 'source' | 'defendant';
  title: string;
  subtitle?: string;
  href: string;
  relevance: number;
  matchContext?: string;
  category?: string;
  severity?: string;
}

const typeConfig = {
  investigation: { icon: Eye, color: 'text-zinc-400', bg: 'bg-zinc-500/20' },
  entity: { icon: User, color: 'text-blood-400', bg: 'bg-blood-500/20' },
  statute: { icon: Scale, color: 'text-red-300', bg: 'bg-red-500/20' },
  source: { icon: FileText, color: 'text-red-400', bg: 'bg-red-500/20' },
  defendant: { icon: User, color: 'text-red-400', bg: 'bg-red-500/20' },
};

/**
 * Calculate relevance score based on matches
 */
function calculateRelevance(query: string, ...fields: (string | undefined)[]): number {
  const q = query.toLowerCase();
  let score = 0;
  
  fields.forEach((field, idx) => {
    if (!field) return;
    const f = field.toLowerCase();
    
    // Exact match in title (highest weight)
    if (idx === 0 && f === q) score += 100;
    // Contains exact phrase
    else if (f.includes(q)) score += 50 / (idx + 1);
    // Word match
    else if (q.split(' ').some(word => f.includes(word))) score += 20 / (idx + 1);
  });
  
  return score;
}

/**
 * Extract context around match
 */
function extractContext(text: string, query: string, contextLength: number = 100): string | undefined {
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const idx = lowerText.indexOf(lowerQuery);
  
  if (idx === -1) return undefined;
  
  const start = Math.max(0, idx - contextLength / 2);
  const end = Math.min(text.length, idx + query.length + contextLength / 2);
  
  let context = text.slice(start, end);
  if (start > 0) context = '...' + context;
  if (end < text.length) context = context + '...';
  
  return context;
}

/**
 * Search across all data
 */
function performSearch(query: string, filters: SearchFilters): SearchResult[] {
  if (query.length < 2) return [];
  
  const results: SearchResult[] = [];
  const q = query.toLowerCase();
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    // Search investigations
    if (filters.types.includes('investigation') || filters.types.length === 0) {
      const relevance = calculateRelevance(q, inv.title, inv.subtitle, inv.summary, inv.category);
      if (relevance > 0) {
        results.push({
          type: 'investigation',
          title: inv.title,
          subtitle: inv.category,
          href: `/investigations/${slug}`,
          relevance,
          matchContext: extractContext(inv.summary, query),
          category: inv.category,
          severity: inv.severity,
        });
      }
      
      // Also search content paragraphs
      inv.content.forEach((para, idx) => {
        const paraRelevance = calculateRelevance(q, para);
        if (paraRelevance > 0 && paraRelevance < relevance) {
          // Only add if not already found via title
          const existing = results.find(r => r.href === `/investigations/${slug}`);
          if (!existing) {
            results.push({
              type: 'investigation',
              title: inv.title,
              subtitle: inv.category,
              href: `/investigations/${slug}`,
              relevance: paraRelevance * 0.5,
              matchContext: extractContext(para, query),
              category: inv.category,
              severity: inv.severity,
            });
          }
        }
      });
    }
    
    // Search entities (from affiliations)
    if (filters.types.includes('entity') || filters.types.length === 0) {
      inv.affiliations.forEach(aff => {
        const relevance = calculateRelevance(q, aff.name, aff.relationship);
        if (relevance > 0) {
          results.push({
            type: 'entity',
            title: aff.name,
            subtitle: `${aff.type} - ${aff.relationship}`,
            href: aff.href || '#',
            relevance,
            category: aff.type,
          });
        }
      });
    }
    
    // Search statutes
    if ((filters.types.includes('statute') || filters.types.length === 0) && inv.statutes) {
      inv.statutes.forEach(statute => {
        const relevance = calculateRelevance(q, statute.name, statute.code, statute.description);
        if (relevance > 0) {
          results.push({
            type: 'statute',
            title: statute.name,
            subtitle: statute.code,
            href: `/statutes#${statute.code.replace(/[^a-zA-Z0-9]/g, '-')}`,
            relevance,
            matchContext: statute.description.slice(0, 100) + '...',
          });
        }
      });
    }
    
    // Search sources
    if ((filters.types.includes('source') || filters.types.length === 0)) {
      inv.sources.forEach(source => {
        const relevance = calculateRelevance(q, source.title, source.type);
        if (relevance > 0) {
          results.push({
            type: 'source',
            title: source.title,
            subtitle: source.type,
            href: source.url,
            relevance,
          });
        }
      });
    }
    
    // Search defendants
    if ((filters.types.includes('defendant') || filters.types.length === 0) && inv.defendants) {
      inv.defendants.forEach(def => {
        const relevance = calculateRelevance(q, def.name, def.role, def.charges?.join(' '));
        if (relevance > 0) {
          results.push({
            type: 'defendant',
            title: def.name,
            subtitle: `${def.status} - ${def.role}`,
            href: `/convictions#${def.name.replace(/\s+/g, '-').toLowerCase()}`,
            relevance,
          });
        }
      });
    }
  });
  
  // Deduplicate by href
  const seen = new Set<string>();
  const deduped = results.filter(r => {
    if (seen.has(r.href)) return false;
    seen.add(r.href);
    return true;
  });
  
  // Sort by relevance
  return deduped.sort((a, b) => b.relevance - a.relevance);
}

interface SearchFilters {
  types: SearchResult['type'][];
  severity?: string;
  category?: string;
}

interface GlobalSearchProps {
  /** Initial query */
  initialQuery?: string;
  /** Show inline results */
  inline?: boolean;
  /** Placeholder text */
  placeholder?: string;
  /** Auto-focus on mount */
  autoFocus?: boolean;
  /** Callback when result is selected */
  onSelect?: (result: SearchResult) => void;
  /** Max results to show */
  maxResults?: number;
}

export default function GlobalSearch({
  initialQuery = '',
  inline = false,
  placeholder = 'Search investigations, entities, statutes...',
  autoFocus = false,
  onSelect,
  maxResults = 20,
}: GlobalSearchProps) {
  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<SearchFilters>({ types: [] });
  const [showFilters, setShowFilters] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  
  const results = useMemo(() => {
    return performSearch(query, filters).slice(0, maxResults);
  }, [query, filters, maxResults]);
  
  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  // Keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
      inputRef.current?.blur();
    }
    if (e.key === 'Enter' && results.length > 0) {
      const first = results[0];
      if (first.href.startsWith('http')) {
        window.open(first.href, '_blank');
      } else {
        router.push(first.href);
      }
      setIsOpen(false);
      onSelect?.(first);
    }
  }, [results, router, onSelect]);
  
  const handleResultClick = (result: SearchResult) => {
    setIsOpen(false);
    onSelect?.(result);
  };
  
  const toggleTypeFilter = (type: SearchResult['type']) => {
    setFilters(prev => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter(t => t !== type)
        : [...prev.types, type],
    }));
  };
  
  return (
    <div ref={containerRef} className={`relative ${inline ? '' : 'max-w-2xl mx-auto'}`}>
      {/* Search Input */}
      <div className="relative">
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-20 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 text-sm"
        />
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
          {query && (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1.5 text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-1.5 transition-colors ${
              showFilters || filters.types.length > 0 
                ? 'text-zinc-400' 
                : 'text-zinc-500 hover:text-white'
            }`}
          >
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      {/* Filters */}
      {showFilters && (
        <div className="absolute top-full left-0 right-0 mt-1 p-3 bg-zinc-900 border border-zinc-800 z-50">
          <div className="text-xs text-zinc-500 mb-2">Filter by type:</div>
          <div className="flex flex-wrap gap-1">
            {Object.entries(typeConfig).map(([type, config]) => {
              const Icon = config.icon;
              const isSelected = filters.types.includes(type as SearchResult['type']);
              return (
                <button
                  key={type}
                  onClick={() => toggleTypeFilter(type as SearchResult['type'])}
                  className={`px-2 py-1 text-xs flex items-center gap-1 transition-colors ${
                    isSelected
                      ? `${config.bg} ${config.color} border border-current`
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700 hover:border-zinc-600'
                  }`}
                >
                  <Icon className="w-3 h-3" />
                  {type}
                </button>
              );
            })}
          </div>
        </div>
      )}
      
      {/* Results Dropdown */}
      {isOpen && query.length >= 2 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zinc-900 border border-zinc-800 max-h-96 overflow-y-auto z-50 shadow-xl">
          {results.length === 0 ? (
            <div className="p-4 text-center text-zinc-500">
              <AlertTriangle className="w-6 h-6 mx-auto mb-2 opacity-50" />
              <p className="text-sm">No results found for "{query}"</p>
            </div>
          ) : (
            <>
              <div className="px-3 py-2 text-xs text-zinc-500 border-b border-zinc-800">
                {results.length} result{results.length !== 1 ? 's' : ''}
              </div>
              {results.map((result, idx) => {
                const config = typeConfig[result.type];
                const Icon = config.icon;
                const isExternal = result.href.startsWith('http');
                
                return (
                  <Link
                    key={idx}
                    href={isExternal ? '#' : result.href}
                    onClick={(e) => {
                      if (isExternal) {
                        e.preventDefault();
                        window.open(result.href, '_blank');
                      }
                      handleResultClick(result);
                    }}
                    className="flex items-start gap-3 p-3 hover:bg-zinc-800/20 border-b border-zinc-800/50 last:border-0"
                  >
                    <div className={`shrink-0 w-8 h-8 ${config.bg} flex items-center justify-center`}>
                      <Icon className={`w-4 h-4 ${config.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-white font-medium truncate">{result.title}</span>
                        {result.severity && (
                          <span className={`px-1.5 py-0.5 text-xs ${
                            result.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                            result.severity === 'high' ? 'bg-red-400/20 text-red-400' :
                            'bg-zinc-800 text-zinc-400'
                          }`}>
                            {result.severity}
                          </span>
                        )}
                      </div>
                      {result.subtitle && (
                        <div className="text-xs text-zinc-500 truncate">{result.subtitle}</div>
                      )}
                      {result.matchContext && (
                        <div className="text-xs text-zinc-600 mt-1 line-clamp-1">{result.matchContext}</div>
                      )}
                    </div>
                    <ChevronRight className="w-4 h-4 text-zinc-600 shrink-0" />
                  </Link>
                );
              })}
            </>
          )}
        </div>
      )}
    </div>
  );
}

/**
 * Compact search bar for header
 */
export function HeaderSearch() {
  return (
    <GlobalSearch 
      inline 
      placeholder="Search..." 
      maxResults={8}
    />
  );
}

/**
 * Full search page component
 */
export function SearchPage() {
  return (
    <div className="min-h-[60vh]">
      <GlobalSearch autoFocus maxResults={50} />
      <div className="mt-4 text-center text-xs text-zinc-600">
        Try searching for: "Trump", "obstruction", "campaign finance", "Russia"
      </div>
    </div>
  );
}
