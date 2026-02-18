'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useDebounce } from '@/hooks/useDebounce';
import { useKeyboardShortcut } from '@/hooks/useKeyboardShortcut';

interface SearchSuggestion {
  id: string;
  text: string;
  category?: string;
  icon?: React.ReactNode;
  metadata?: string;
}

interface SearchInputProps {
  placeholder?: string;
  suggestions?: SearchSuggestion[];
  recentSearches?: string[];
  trendingSearches?: string[];
  onSearch: (query: string) => void;
  onSuggestionSelect?: (suggestion: SearchSuggestion) => void;
  onClear?: () => void;
  loading?: boolean;
  debounceMs?: number;
  minChars?: number;
  maxSuggestions?: number;
  showRecent?: boolean;
  showTrending?: boolean;
  autoFocus?: boolean;
  className?: string;
}

export default function SearchInput({
  placeholder = 'Search...',
  suggestions = [],
  recentSearches = [],
  trendingSearches = [],
  onSearch,
  onSuggestionSelect,
  onClear,
  loading = false,
  debounceMs = 300,
  minChars = 2,
  maxSuggestions = 8,
  showRecent = true,
  showTrending = true,
  autoFocus = false,
  className,
}: SearchInputProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const debouncedQuery = useDebounce(query, debounceMs);

  // Filter suggestions based on query
  const filteredSuggestions = useMemo(() => {
    if (query.length < minChars) return [];
    return suggestions
      .filter((s) => s.text.toLowerCase().includes(query.toLowerCase()))
      .slice(0, maxSuggestions);
  }, [suggestions, query, minChars, maxSuggestions]);

  // All display items
  const displayItems = useMemo(() => {
    if (query.length >= minChars) {
      return filteredSuggestions;
    }
    const items: SearchSuggestion[] = [];
    if (showRecent && recentSearches.length > 0) {
      recentSearches.slice(0, 3).forEach((text, i) => {
        items.push({ id: `recent-${i}`, text, category: 'Recent' });
      });
    }
    if (showTrending && trendingSearches.length > 0) {
      trendingSearches.slice(0, 3).forEach((text, i) => {
        items.push({ id: `trending-${i}`, text, category: 'Trending' });
      });
    }
    return items;
  }, [query, minChars, filteredSuggestions, showRecent, showTrending, recentSearches, trendingSearches]);

  // Call onSearch when debounced query changes
  useEffect(() => {
    if (debouncedQuery.length >= minChars) {
      onSearch(debouncedQuery);
    }
  }, [debouncedQuery, minChars, onSearch]);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setHighlightedIndex((prev) => 
          prev < displayItems.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setHighlightedIndex((prev) => 
          prev > 0 ? prev - 1 : displayItems.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (highlightedIndex >= 0 && displayItems[highlightedIndex]) {
          handleSelect(displayItems[highlightedIndex]);
        } else if (query) {
          handleSearch();
        }
        break;
      case 'Escape':
        setIsOpen(false);
        inputRef.current?.blur();
        break;
    }
  };

  const handleSelect = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    setIsOpen(false);
    onSuggestionSelect?.(suggestion);
    onSearch(suggestion.text);
  };

  const handleSearch = () => {
    if (query) {
      onSearch(query);
      setIsOpen(false);
    }
  };

  const handleClear = () => {
    setQuery('');
    setIsOpen(false);
    onClear?.();
    inputRef.current?.focus();
  };

  // Focus shortcut
  useKeyboardShortcut({ key: 'k', ctrlKey: true }, () => {
    inputRef.current?.focus();
    setIsOpen(true);
  });

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setHighlightedIndex(-1);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-12 pr-12 py-3 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 transition-colors"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-zinc-500 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
        {loading && (
          <div className="absolute right-12 top-1/2 -translate-y-1/2">
            <div className="w-4 h-4 border-2 border-blood-500 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
      </div>

      {/* Dropdown */}
      <AnimatePresence>
        {isOpen && displayItems.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-zinc-900 border border-zinc-800 shadow-xl max-h-96 overflow-y-auto"
          >
            {displayItems.map((item, index) => {
              const isHighlighted = index === highlightedIndex;
              const prevCategory = index > 0 ? displayItems[index - 1].category : null;
              const showCategoryHeader = item.category && item.category !== prevCategory;

              return (
                <div key={item.id}>
                  {showCategoryHeader && (
                    <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider bg-zinc-900/50">
                      {item.category === 'Recent' && <Clock className="w-3 h-3 inline mr-2" />}
                      {item.category === 'Trending' && <TrendingUp className="w-3 h-3 inline mr-2" />}
                      {item.category}
                    </div>
                  )}
                  <button
                    onClick={() => handleSelect(item)}
                    onMouseEnter={() => setHighlightedIndex(index)}
                    className={cn(
                      'w-full px-4 py-3 flex items-center gap-3 text-left transition-colors',
                      isHighlighted ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'
                    )}
                  >
                    {item.icon || <Search className="w-4 h-4 text-zinc-500 flex-shrink-0" />}
                    <div className="flex-1 min-w-0">
                      <HighlightedText text={item.text} query={query} />
                      {item.metadata && (
                        <p className="text-xs text-zinc-500 mt-0.5">{item.metadata}</p>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                  </button>
                </div>
              );
            })}

            {/* Search action */}
            {query.length >= minChars && (
              <button
                onClick={handleSearch}
                className="w-full px-4 py-3 flex items-center gap-3 text-left border-t border-zinc-800 hover:bg-zinc-800/50 transition-colors"
              >
                <Search className="w-4 h-4 text-blood-500" />
                <span className="text-zinc-300">
                  Search for &quot;<span className="text-white">{query}</span>&quot;
                </span>
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Keyboard hint */}
      <div className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 items-center gap-1 text-xs text-zinc-600 pointer-events-none">
        {!query && (
          <>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">⌘</kbd>
            <kbd className="px-1.5 py-0.5 bg-zinc-800 rounded">K</kbd>
          </>
        )}
      </div>
    </div>
  );
}

// Highlight matching text
function HighlightedText({ text, query }: { text: string; query: string }) {
  if (!query || query.length < 2) {
    return <span className="text-zinc-300">{text}</span>;
  }

  const parts = text.split(new RegExp(`(${query})`, 'gi'));

  return (
    <span className="text-zinc-300">
      {parts.map((part, i) =>
        part.toLowerCase() === query.toLowerCase() ? (
          <span key={i} className="text-white font-medium bg-blood-900/50">
            {part}
          </span>
        ) : (
          part
        )
      )}
    </span>
  );
}

// Compact search for headers
interface CompactSearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  className?: string;
}

export function CompactSearch({
  onSearch,
  placeholder = 'Search...',
  className,
}: CompactSearchProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isExpanded) {
      inputRef.current?.focus();
    }
  }, [isExpanded]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query) {
      onSearch(query);
    }
  };

  if (!isExpanded) {
    return (
      <button
        onClick={() => setIsExpanded(true)}
        className={cn(
          'p-2 text-zinc-400 hover:text-white transition-colors',
          className
        )}
        aria-label="Open search"
      >
        <Search className="w-5 h-5" />
      </button>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn('flex items-center gap-2', className)}>
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 200, opacity: 1 }}
        className="relative"
      >
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onBlur={() => {
            if (!query) setIsExpanded(false);
          }}
          placeholder={placeholder}
          className="w-full pl-3 pr-8 py-1.5 text-sm bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500"
        />
        <button
          type="button"
          onClick={() => {
            setQuery('');
            setIsExpanded(false);
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </motion.div>
    </form>
  );
}
