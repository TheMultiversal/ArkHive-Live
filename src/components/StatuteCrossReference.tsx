'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  ChevronDown, 
  ChevronRight, 
  Search, 
  X,
  ExternalLink,
  AlertTriangle,
  Gavel,
  FileText,
  Filter,
  Link2,
  Info
} from 'lucide-react';
import { 
  FEDERAL_STATUTES, 
  STATUTE_CATEGORIES, 
  type StatuteInfo,
  type StatuteCategory,
  findStatute,
  normalizeStatuteCode
} from '@/data/statutes';
import investigationDatabase from '@/data/investigations';

interface InvestigationWithStatute {
  slug: string;
  title: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  statutes: string[];
}

interface StatuteWithInvestigations {
  statute: StatuteInfo;
  investigations: InvestigationWithStatute[];
  count: number;
}

/**
 * Build index of which investigations cite which statutes
 */
function buildStatuteIndex(): Map<string, InvestigationWithStatute[]> {
  const index = new Map<string, InvestigationWithStatute[]>();
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    if (!inv.statutes || inv.statutes.length === 0) return;
    
    const invRef: InvestigationWithStatute = {
      slug,
      title: inv.title,
      severity: inv.severity,
      statutes: inv.statutes.map(s => normalizeStatuteCode(s.code))
    };
    
    inv.statutes.forEach(statute => {
      const normalized = normalizeStatuteCode(statute.code);
      const existing = index.get(normalized) || [];
      existing.push(invRef);
      index.set(normalized, existing);
    });
  });
  
  return index;
}

/**
 * Get statutes with their investigation cross-references
 */
function getStatutesWithInvestigations(): StatuteWithInvestigations[] {
  const index = buildStatuteIndex();
  const result: StatuteWithInvestigations[] = [];
  
  // Add known statutes with their investigations
  FEDERAL_STATUTES.forEach(statute => {
    const normalized = normalizeStatuteCode(statute.code);
    const investigations = index.get(normalized) || [];
    result.push({
      statute,
      investigations,
      count: investigations.length
    });
  });
  
  // Sort by investigation count (most cross-referenced first)
  return result.sort((a, b) => b.count - a.count);
}

const severityConfig = {
  critical: { color: 'text-zinc-300', bg: 'bg-zinc-500/10' },
  high: { color: 'text-red-400', bg: 'bg-red-400/10' },
  medium: { color: 'text-red-400', bg: 'bg-red-400/10' },
  low: { color: 'text-zinc-400', bg: 'bg-zinc-400/10' }
};

interface StatuteCardProps {
  data: StatuteWithInvestigations;
  isExpanded: boolean;
  onToggle: () => void;
}

function StatuteCard({ data, isExpanded, onToggle }: StatuteCardProps) {
  const { statute, investigations, count } = data;
  const categoryInfo = STATUTE_CATEGORIES[statute.category];
  
  return (
    <div className="glass-card border border-zinc-800/30">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-zinc-800/10 transition-colors"
      >
        <div className="shrink-0 mt-1">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-zinc-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-zinc-500" />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <Scale className="w-4 h-4 text-zinc-300" />
            <code className="text-zinc-400 font-mono text-sm">{statute.code}</code>
          </div>
          
          <h3 className="text-white font-semibold mb-1">{statute.title}</h3>
          
          <p className="text-zinc-400 text-sm line-clamp-2">{statute.description}</p>
          
          <div className="flex items-center gap-3 mt-2">
            <span className={`text-xs px-2 py-0.5 ${categoryInfo.color} bg-zinc-900 border border-zinc-800`}>
              {categoryInfo.name}
            </span>
            
            {statute.maxPenalty && (
              <span className="text-xs text-zinc-500">
                <Gavel className="w-3 h-3 inline mr-1" />
                {statute.maxPenalty}
              </span>
            )}
            
            {count > 0 && (
              <span className="text-xs text-zinc-400 flex items-center gap-1">
                <Link2 className="w-3 h-3" />
                {count} investigation{count !== 1 ? 's' : ''}
              </span>
            )}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800/30 bg-black/30 p-4">
          {count > 0 ? (
            <div className="space-y-3">
              <h4 className="text-sm font-semibold text-zinc-400 flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Related Investigations
              </h4>
              <div className="grid gap-2">
                {investigations.map(inv => (
                  <Link
                    key={inv.slug}
                    href={`/investigations/${inv.slug}`}
                    className="flex items-center gap-3 p-2 bg-zinc-900/50 hover:bg-zinc-800/20 transition-colors group"
                  >
                    <span className={`w-2 h-2 ${severityConfig[inv.severity].bg} ${severityConfig[inv.severity].color}`} />
                    <span className="text-sm text-zinc-300 group-hover:text-white flex-1 truncate">
                      {inv.title}
                    </span>
                    <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <p className="text-sm text-zinc-500 italic">
              No investigations currently linked to this statute.
            </p>
          )}
          
          {statute.civilPenalty && (
            <div className="mt-3 pt-3 border-t border-zinc-800">
              <p className="text-xs text-zinc-500">
                <Info className="w-3 h-3 inline mr-1" />
                Civil Penalty: {statute.civilPenalty}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

interface StatuteCrossReferenceProps {
  /** Filter to show only statutes linked to a specific investigation */
  investigationSlug?: string;
  /** Filter to show only specific statute codes */
  statuteCodes?: string[];
  /** Show compact view */
  compact?: boolean;
  /** Maximum items to show */
  limit?: number;
}

export default function StatuteCrossReference({ 
  investigationSlug,
  statuteCodes,
  compact = false,
  limit
}: StatuteCrossReferenceProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState<StatuteCategory | 'all'>('all');
  const [showLinkedOnly, setShowLinkedOnly] = useState(false);
  const [expandedCodes, setExpandedCodes] = useState<Set<string>>(new Set());
  
  const allStatutesWithInvs = useMemo(() => getStatutesWithInvestigations(), []);
  
  const filteredStatutes = useMemo(() => {
    let filtered = allStatutesWithInvs;
    
    // Filter by specific investigation if provided
    if (investigationSlug) {
      const inv = investigationDatabase[investigationSlug];
      if (inv?.statutes) {
        const codes = new Set(inv.statutes.map(s => normalizeStatuteCode(s.code)));
        filtered = filtered.filter(s => codes.has(normalizeStatuteCode(s.statute.code)));
      }
    }
    
    // Filter by specific statute codes if provided
    if (statuteCodes && statuteCodes.length > 0) {
      const normalizedCodes = new Set(statuteCodes.map(normalizeStatuteCode));
      filtered = filtered.filter(s => 
        normalizedCodes.has(normalizeStatuteCode(s.statute.code))
      );
    }
    
    // Filter by category
    if (categoryFilter !== 'all') {
      filtered = filtered.filter(s => s.statute.category === categoryFilter);
    }
    
    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(s => 
        s.statute.code.toLowerCase().includes(query) ||
        s.statute.title.toLowerCase().includes(query) ||
        s.statute.shortName.toLowerCase().includes(query) ||
        s.statute.description.toLowerCase().includes(query)
      );
    }
    
    // Show only linked statutes
    if (showLinkedOnly) {
      filtered = filtered.filter(s => s.count > 0);
    }
    
    // Apply limit
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    return filtered;
  }, [allStatutesWithInvs, investigationSlug, statuteCodes, categoryFilter, searchQuery, showLinkedOnly, limit]);
  
  const toggleExpanded = (code: string) => {
    setExpandedCodes(prev => {
      const next = new Set(prev);
      if (next.has(code)) {
        next.delete(code);
      } else {
        next.add(code);
      }
      return next;
    });
  };
  
  const expandAll = () => {
    setExpandedCodes(new Set(filteredStatutes.map(s => s.statute.code)));
  };
  
  const collapseAll = () => {
    setExpandedCodes(new Set());
  };
  
  // Stats
  const linkedCount = allStatutesWithInvs.filter(s => s.count > 0).length;
  const totalInvLinks = allStatutesWithInvs.reduce((sum, s) => sum + s.count, 0);
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredStatutes.map(data => (
          <Link
            key={data.statute.code}
            href={`/statutes#${encodeURIComponent(data.statute.code)}`}
            className="flex items-center gap-2 p-2 bg-zinc-900/50 hover:bg-zinc-800/20 transition-colors group"
          >
            <Scale className="w-4 h-4 text-zinc-300" />
            <code className="text-xs text-zinc-400 font-mono">{data.statute.code}</code>
            <span className="text-sm text-zinc-400 truncate flex-1">{data.statute.shortName}</span>
            {data.count > 0 && (
              <span className="text-xs text-zinc-300">+{data.count}</span>
            )}
          </Link>
        ))}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Scale className="w-6 h-6 text-zinc-300" />
            Federal Statute Reference
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {FEDERAL_STATUTES.length} statutes • {linkedCount} with investigations • {totalInvLinks} total links
          </p>
        </div>
        
        <div className="flex gap-2 ml-auto">
          <button
            onClick={expandAll}
            className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Expand All
          </button>
          <button
            onClick={collapseAll}
            className="px-3 py-1.5 text-xs text-zinc-400 hover:text-white bg-zinc-900 hover:bg-zinc-800 transition-colors"
          >
            Collapse All
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search statutes..."
            className="w-full pl-10 pr-8 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
        
        {/* Category Filter */}
        <div className="relative">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value as StatuteCategory | 'all')}
            className="pl-10 pr-8 py-2 bg-zinc-900 border border-zinc-800 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-zinc-600"
          >
            <option value="all">All Categories</option>
            {Object.entries(STATUTE_CATEGORIES).map(([key, info]) => (
              <option key={key} value={key}>{info.name}</option>
            ))}
          </select>
        </div>
        
        {/* Linked Only Toggle */}
        <button
          onClick={() => setShowLinkedOnly(!showLinkedOnly)}
          className={`px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
            showLinkedOnly 
              ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-600'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <Link2 className="w-4 h-4" />
          Linked Only
        </button>
      </div>
      
      {/* Results */}
      <div className="space-y-3">
        {filteredStatutes.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No statutes found matching your criteria</p>
          </div>
        ) : (
          filteredStatutes.map(data => (
            <StatuteCard
              key={data.statute.code}
              data={data}
              isExpanded={expandedCodes.has(data.statute.code)}
              onToggle={() => toggleExpanded(data.statute.code)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Compact inline component to show statute badges that link to full reference
 */
export function StatuteBadges({ codes }: { codes: string[] }) {
  const statutes = codes.map(findStatute).filter(Boolean) as StatuteInfo[];
  
  if (statutes.length === 0) return null;
  
  return (
    <div className="flex flex-wrap gap-2">
      {statutes.map(statute => {
        const categoryInfo = STATUTE_CATEGORIES[statute.category];
        return (
          <Link
            key={statute.code}
            href={`/statutes#${encodeURIComponent(statute.code)}`}
            className={`inline-flex items-center gap-1.5 px-2 py-1 text-xs ${categoryInfo.color} bg-zinc-900/80 border border-zinc-800 hover:border-zinc-600 transition-colors`}
            title={statute.title}
          >
            <Scale className="w-3 h-3" />
            {statute.shortName}
          </Link>
        );
      })}
    </div>
  );
}

/**
 * Widget for investigation pages showing related statutes
 */
export function InvestigationStatutes({ slug }: { slug: string }) {
  const investigation = investigationDatabase[slug];
  if (!investigation?.statutes || investigation.statutes.length === 0) {
    return null;
  }
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <Scale className="w-4 h-4" />
        Related Statutes
      </h3>
      <StatuteCrossReference
        investigationSlug={slug}
        compact
      />
    </div>
  );
}
