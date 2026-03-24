'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ChevronDown, ChevronUp, X, List, Grid3X3, Skull, AlertTriangle, FileText, Archive, ArrowRight } from 'lucide-react';
import investigationDatabase from '@/data/investigations';

// Convert database to array format
const allInvestigations = Object.entries(investigationDatabase).map(([slug, data]) => ({
  slug,
  title: data.title,
  severity: data.severity,
  category: data.category,
  eventOriginDate: data.eventOriginDate,
  lastActivityDate: data.lastActivityDate,
}));

// Group investigations by first letter
function groupByLetter(investigations: typeof allInvestigations) {
  const groups: Record<string, typeof allInvestigations> = {};
  
  investigations.forEach(inv => {
    const firstLetter = inv.title[0].toUpperCase();
    const key = /[A-Z]/.test(firstLetter) ? firstLetter : '#';
    if (!groups[key]) groups[key] = [];
    groups[key].push(inv);
  });
  
  // Sort each group alphabetically
  Object.keys(groups).forEach(key => {
    groups[key].sort((a, b) => a.title.localeCompare(b.title));
  });
  
  return groups;
}

// Severity badge colors
const severityConfig = {
  critical: { bg: 'bg-zinc-800/80', text: 'text-zinc-400', icon: Skull },
  high: { bg: 'bg-zinc-900/80', text: 'text-zinc-300', icon: AlertTriangle },
  medium: { bg: 'bg-zinc-800/80', text: 'text-zinc-400', icon: FileText },
  low: { bg: 'bg-zinc-900/80', text: 'text-zinc-500', icon: Archive },
};

interface InvestigationIndexProps {
  /** Show as modal overlay */
  isModal?: boolean;
  /** Close handler for modal mode */
  onClose?: () => void;
  /** Filter by severity */
  severityFilter?: 'critical' | 'high' | 'medium' | 'low' | '';
  /** Compact mode for sidebar use */
  compact?: boolean;
}

export default function InvestigationIndex({ 
  isModal = false, 
  onClose,
  severityFilter = '',
  compact = false 
}: InvestigationIndexProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedLetters, setExpandedLetters] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'alpha' | 'recent'>('alpha');

  // Filter and group investigations
  const { groupedInvestigations, alphabetStats, totalCount } = useMemo(() => {
    let filtered = allInvestigations;
    
    // Apply severity filter
    if (severityFilter) {
      filtered = filtered.filter(inv => inv.severity === severityFilter);
    }
    
    // Apply search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(inv => 
        inv.title.toLowerCase().includes(q) ||
        inv.category.toLowerCase().includes(q)
      );
    }
    
    const grouped = groupByLetter(filtered);
    
    // Calculate stats per letter
    const stats: Record<string, { total: number; critical: number }> = {};
    Object.entries(grouped).forEach(([letter, invs]) => {
      stats[letter] = {
        total: invs.length,
        critical: invs.filter(i => i.severity === 'critical').length,
      };
    });
    
    return { 
      groupedInvestigations: grouped, 
      alphabetStats: stats,
      totalCount: filtered.length 
    };
  }, [severityFilter, searchQuery]);

  // Recent investigations view
  const recentInvestigations = useMemo(() => {
    return [...allInvestigations]
      .filter(inv => inv.lastActivityDate)
      .sort((a, b) => {
        const dateA = a.lastActivityDate || '0';
        const dateB = b.lastActivityDate || '0';
        return dateB.localeCompare(dateA);
      })
      .slice(0, 50);
  }, []);

  const toggleLetter = (letter: string) => {
    setExpandedLetters(prev => {
      const next = new Set(prev);
      if (next.has(letter)) {
        next.delete(letter);
      } else {
        next.add(letter);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedLetters(new Set(Object.keys(groupedInvestigations)));
  };

  const collapseAll = () => {
    setExpandedLetters(new Set());
  };

  // Alphabet bar
  const alphabet = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  const containerClasses = isModal 
    ? 'fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4'
    : compact 
      ? 'bg-zinc-950 border border-zinc-800/30'
      : 'bg-zinc-950 border border-zinc-800/30 p-4';

  const contentClasses = isModal
    ? 'bg-zinc-950 border border-zinc-800/50 w-full max-w-4xl max-h-[85vh] overflow-hidden flex flex-col'
    : '';

  return (
    <div className={containerClasses}>
      <div className={contentClasses}>
        {/* Header */}
        <div className={`flex items-center justify-between gap-4 ${isModal ? 'p-4 border-b border-zinc-800/30' : compact ? 'p-3' : 'mb-4'}`}>
          <div className="flex items-center gap-3">
            <h2 className={`font-mono font-bold tracking-wide text-zinc-200 ${compact ? 'text-sm' : 'text-lg'}`}>
              INVESTIGATION INDEX
            </h2>
            <span className="text-xs text-zinc-300 font-mono">
              {totalCount} RECORDS
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            {/* View toggle */}
            <div className="flex border border-zinc-800/30 divide-x divide-zinc-800/30">
              <button
                onClick={() => setViewMode('alpha')}
                className={`p-1.5 ${viewMode === 'alpha' ? 'bg-zinc-800/30 text-zinc-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Alphabetical"
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('recent')}
                className={`p-1.5 ${viewMode === 'recent' ? 'bg-zinc-800/30 text-zinc-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                title="Recent Activity"
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
            </div>
            
            {isModal && onClose && (
              <button
                onClick={onClose}
                className="p-1.5 text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>

        {/* Search */}
        <div className={`${isModal ? 'px-4 pb-3' : compact ? 'px-3 pb-2' : 'mb-4'}`}>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search investigations..."
              className="w-full pl-10 pr-4 py-2 bg-black/50 border border-zinc-800/30 text-zinc-200 placeholder:text-zinc-600 text-sm font-mono focus:outline-none focus:border-zinc-700"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Alphabet quick-jump bar */}
        {viewMode === 'alpha' && (
          <div className={`flex flex-wrap gap-1 ${isModal ? 'px-4 pb-3' : compact ? 'px-3 pb-2' : 'mb-4'}`}>
            {alphabet.map(letter => {
              const hasInvestigations = groupedInvestigations[letter]?.length > 0;
              const hasCritical = alphabetStats[letter]?.critical > 0;
              
              return (
                <button
                  key={letter}
                  onClick={() => {
                    if (hasInvestigations) {
                      document.getElementById(`letter-${letter}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                      setExpandedLetters(prev => new Set([...prev, letter]));
                    }
                  }}
                  disabled={!hasInvestigations}
                  className={`w-7 h-7 text-xs font-mono font-bold flex items-center justify-center transition-colors
                    ${hasInvestigations 
                      ? hasCritical
                        ? 'bg-zinc-800/30 text-zinc-400 hover:bg-zinc-800/50 border border-zinc-700/50'
                        : 'bg-zinc-900/50 text-zinc-400 hover:bg-zinc-800 border border-zinc-800'
                      : 'bg-zinc-950 text-zinc-700 cursor-not-allowed border border-zinc-900'
                    }`}
                >
                  {letter}
                </button>
              );
            })}
          </div>
        )}

        {/* Expand/Collapse controls */}
        {viewMode === 'alpha' && !compact && (
          <div className={`flex gap-2 text-xs ${isModal ? 'px-4 pb-3' : 'mb-4'}`}>
            <button
              onClick={expandAll}
              className="px-2 py-1 text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700"
            >
              <ChevronDown className="w-3 h-3 inline mr-1" />
              Expand All
            </button>
            <button
              onClick={collapseAll}
              className="px-2 py-1 text-zinc-500 hover:text-zinc-300 border border-zinc-800 hover:border-zinc-700"
            >
              <ChevronUp className="w-3 h-3 inline mr-1" />
              Collapse All
            </button>
          </div>
        )}

        {/* Investigation list */}
        <div className={`overflow-y-auto ${isModal ? 'flex-1 px-4 pb-4' : compact ? 'px-3 pb-3 max-h-[60vh]' : 'max-h-[70vh]'}`}>
          {viewMode === 'alpha' ? (
            // Alphabetical view
            <div className="space-y-2">
              {Object.entries(groupedInvestigations)
                .sort(([a], [b]) => {
                  if (a === '#') return -1;
                  if (b === '#') return 1;
                  return a.localeCompare(b);
                })
                .map(([letter, investigations]) => (
                  <div key={letter} id={`letter-${letter}`} className="border border-zinc-800/20">
                    {/* Letter header */}
                    <button
                      onClick={() => toggleLetter(letter)}
                      className="w-full flex items-center justify-between px-3 py-2 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl font-bold font-mono text-zinc-300">{letter}</span>
                        <span className="text-xs text-zinc-500 font-mono">
                          {investigations.length} investigations
                        </span>
                        {alphabetStats[letter]?.critical > 0 && (
                          <span className="text-xs bg-zinc-800/50 text-zinc-400 px-1.5 py-0.5 font-mono">
                            {alphabetStats[letter].critical} CRITICAL
                          </span>
                        )}
                      </div>
                      {expandedLetters.has(letter) ? (
                        <ChevronUp className="w-4 h-4 text-zinc-500" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-zinc-500" />
                      )}
                    </button>
                    
                    {/* Investigation list for this letter */}
                    {expandedLetters.has(letter) && (
                      <div className="divide-y divide-zinc-900">
                        {investigations.map(inv => {
                          const severity = severityConfig[inv.severity];
                          const SeverityIcon = severity.icon;
                          
                          return (
                            <Link
                              key={inv.slug}
                              href={`/investigations/${inv.slug}`}
                              className="flex items-center justify-between px-3 py-2 hover:bg-black/50 transition-colors group"
                            >
                              <div className="flex items-center gap-3 min-w-0 flex-1">
                                <SeverityIcon className={`w-4 h-4 flex-shrink-0 ${severity.text}`} />
                                <span className="text-sm text-zinc-300 group-hover:text-zinc-100 truncate">
                                  {inv.title}
                                </span>
                              </div>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <span className={`text-xs px-1.5 py-0.5 ${severity.bg} ${severity.text} font-mono uppercase`}>
                                  {inv.severity}
                                </span>
                                <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors" />
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ))}
            </div>
          ) : (
            // Recent activity view
            <div className="space-y-1">
              <div className="text-xs text-zinc-500 font-mono mb-2">
                SORTED BY MOST RECENT ACTIVITY
              </div>
              {recentInvestigations.map(inv => {
                const severity = severityConfig[inv.severity];
                const SeverityIcon = severity.icon;
                
                return (
                  <Link
                    key={inv.slug}
                    href={`/investigations/${inv.slug}`}
                    className="flex items-center justify-between px-3 py-2 border border-zinc-900 hover:bg-black/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0 flex-1">
                      <SeverityIcon className={`w-4 h-4 flex-shrink-0 ${severity.text}`} />
                      <div className="min-w-0">
                        <span className="text-sm text-zinc-300 group-hover:text-zinc-100 truncate block">
                          {inv.title}
                        </span>
                        {inv.lastActivityDate && (
                          <span className="text-xs text-zinc-600 font-mono">
                            {inv.lastActivityDate}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-zinc-600 group-hover:text-white transition-colors flex-shrink-0" />
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// Export a button component to trigger the modal
export function InvestigationIndexButton({ className = '' }: { className?: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`flex items-center gap-2 px-3 py-2 bg-zinc-900 border border-zinc-800/30 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors font-mono text-sm ${className}`}
      >
        <List className="w-4 h-4" />
        INDEX
      </button>
      
      {isOpen && (
        <InvestigationIndex isModal onClose={() => setIsOpen(false)} />
      )}
    </>
  );
}
