'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Shield,
  CheckCircle2,
  AlertCircle,
  AlertTriangle,
  HelpCircle,
  XCircle,
  ExternalLink,
  Star,
  Search,
  X,
  TrendingUp,
  BarChart3,
  FileText,
  Building2,
  Newspaper,
  BookOpen,
  Eye
} from 'lucide-react';
import type { InvestigationSource } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

/** Credibility tiers with detailed definitions */
export const CREDIBILITY_TIERS = {
  primary: {
    label: 'Primary Source',
    description: 'Original source document, official record, or direct evidence',
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/20',
    border: 'border-emerald-500/50',
    icon: CheckCircle2,
    score: 100,
    examples: ['Court filings', 'Government reports', 'Official transcripts', 'Direct recordings'],
  },
  verified: {
    label: 'Verified',
    description: 'Confirmed by multiple independent reliable sources',
    color: 'text-green-400',
    bg: 'bg-green-500/20',
    border: 'border-green-500/50',
    icon: Shield,
    score: 90,
    examples: ['Corroborated news reports', 'Fact-checked investigations', 'Peer-reviewed analysis'],
  },
  reporting: {
    label: 'Quality Reporting',
    description: 'Professional journalism with sourcing standards',
    color: 'text-blood-400',
    bg: 'bg-blood-500/20',
    border: 'border-blood-500/50',
    icon: Newspaper,
    score: 75,
    examples: ['Major news organizations', 'Investigative journalism', 'Wire services'],
  },
  analysis: {
    label: 'Analysis',
    description: 'Interpretive or opinion-based content from credible authors',
    color: 'text-purple-400',
    bg: 'bg-purple-500/20',
    border: 'border-purple-500/50',
    icon: BookOpen,
    score: 60,
    examples: ['Expert commentary', 'Think tank reports', 'Academic analysis'],
  },
  unverified: {
    label: 'Unverified',
    description: 'Claims not yet independently verified',
    color: 'text-yellow-400',
    bg: 'bg-yellow-500/20',
    border: 'border-yellow-500/50',
    icon: HelpCircle,
    score: 40,
    examples: ['Social media posts', 'Anonymous sources', 'Unconfirmed reports'],
  },
} as const;

export type CredibilityTier = keyof typeof CREDIBILITY_TIERS;

interface SourceWithContext {
  source: InvestigationSource;
  investigationSlug: string;
  investigationTitle: string;
  inferredCredibility: CredibilityTier;
}

/**
 * Infer credibility from source type when not explicitly set
 */
function inferCredibility(source: InvestigationSource): CredibilityTier {
  if (source.credibility) return source.credibility;
  
  const type = source.type.toLowerCase();
  const url = source.url.toLowerCase();
  
  // Primary sources
  if (type.includes('court') || type.includes('filing') || type.includes('indictment') || 
      type.includes('government report') || type.includes('official') || 
      url.includes('.gov') || url.includes('justice.gov') || url.includes('congress.gov')) {
    return 'primary';
  }
  
  // Verified - specific trusted sources
  if (url.includes('govinfo.gov') || url.includes('senate.gov') || url.includes('house.gov') ||
      type.includes('inspector general') || type.includes('congressional')) {
    return 'verified';
  }
  
  // Quality reporting
  if (url.includes('nytimes.com') || url.includes('washingtonpost.com') || url.includes('reuters.com') ||
      url.includes('apnews.com') || url.includes('propublica.org') ||
      type.includes('investigation') || type.includes('news report')) {
    return 'reporting';
  }
  
  // Analysis
  if (type.includes('analysis') || type.includes('opinion') || type.includes('commentary') ||
      url.includes('brookings') || url.includes('heritage') || url.includes('brennancenter')) {
    return 'analysis';
  }
  
  // Default to unverified for unknown sources
  return 'unverified';
}

/**
 * Aggregate all sources from investigations
 */
function aggregateSources(): SourceWithContext[] {
  const sources: SourceWithContext[] = [];
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    inv.sources.forEach(source => {
      sources.push({
        source,
        investigationSlug: slug,
        investigationTitle: inv.title,
        inferredCredibility: inferCredibility(source),
      });
    });
  });
  
  return sources;
}

interface CredibilityBadgeProps {
  credibility: CredibilityTier;
  showLabel?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export function CredibilityBadge({ credibility, showLabel = true, size = 'md' }: CredibilityBadgeProps) {
  const config = CREDIBILITY_TIERS[credibility];
  const Icon = config.icon;
  
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  };
  
  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base',
  };
  
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 ${config.bg} ${config.border} border`}>
      <Icon className={`${sizeClasses[size]} ${config.color}`} />
      {showLabel && (
        <span className={`${textSizeClasses[size]} ${config.color}`}>{config.label}</span>
      )}
    </span>
  );
}

interface SourceCardProps {
  item: SourceWithContext;
  showInvestigation?: boolean;
}

function SourceCard({ item, showInvestigation = true }: SourceCardProps) {
  const config = CREDIBILITY_TIERS[item.inferredCredibility];
  const Icon = config.icon;
  
  return (
    <div className={`glass-card border ${config.border} p-4`}>
      <div className="flex items-start gap-3">
        <div className={`shrink-0 w-10 h-10 ${config.bg} ${config.border} border flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${config.color}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <a
            href={item.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-white font-medium flex items-center gap-1"
          >
            {item.source.title}
            <ExternalLink className="w-3.5 h-3.5 shrink-0" />
          </a>
          
          <div className="flex flex-wrap items-center gap-2 mt-2 text-xs text-zinc-500">
            <span className="px-1.5 py-0.5 bg-zinc-800">{item.source.type}</span>
            <CredibilityBadge credibility={item.inferredCredibility} size="sm" />
            {item.source.datePublished && (
              <span>{item.source.datePublished}</span>
            )}
            {item.source.author && (
              <span>by {item.source.author}</span>
            )}
          </div>
          
          {showInvestigation && (
            <Link
              href={`/investigations/${item.investigationSlug}`}
              className="text-xs text-zinc-400 hover:text-white mt-2 inline-block"
            >
              {item.investigationTitle} →
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

interface SourceCredibilityDashboardProps {
  /** Filter by investigation */
  investigationSlug?: string;
  /** Show compact view */
  compact?: boolean;
  /** Limit results */
  limit?: number;
}

export default function SourceCredibilityDashboard({ 
  investigationSlug, 
  compact = false, 
  limit 
}: SourceCredibilityDashboardProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [credibilityFilter, setCredibilityFilter] = useState<CredibilityTier | 'all'>('all');
  const [sortBy, setSortBy] = useState<'credibility' | 'recent' | 'title'>('credibility');
  
  const allSources = useMemo(() => aggregateSources(), []);
  
  const filteredSources = useMemo(() => {
    let sources = [...allSources];
    
    // Filter by investigation
    if (investigationSlug) {
      sources = sources.filter(s => s.investigationSlug === investigationSlug);
    }
    
    // Filter by credibility
    if (credibilityFilter !== 'all') {
      sources = sources.filter(s => s.inferredCredibility === credibilityFilter);
    }
    
    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      sources = sources.filter(s =>
        s.source.title.toLowerCase().includes(q) ||
        s.source.type.toLowerCase().includes(q) ||
        s.investigationTitle.toLowerCase().includes(q)
      );
    }
    
    // Sort
    sources.sort((a, b) => {
      if (sortBy === 'credibility') {
        return CREDIBILITY_TIERS[b.inferredCredibility].score - CREDIBILITY_TIERS[a.inferredCredibility].score;
      }
      if (sortBy === 'title') {
        return a.source.title.localeCompare(b.source.title);
      }
      return 0;
    });
    
    // Apply limit
    if (limit) {
      sources = sources.slice(0, limit);
    }
    
    return sources;
  }, [allSources, investigationSlug, credibilityFilter, searchQuery, sortBy, limit]);
  
  // Stats
  const stats = useMemo(() => {
    const byCredibility: Record<CredibilityTier, number> = {
      primary: 0,
      verified: 0,
      reporting: 0,
      analysis: 0,
      unverified: 0,
    };
    
    allSources.forEach(s => {
      byCredibility[s.inferredCredibility]++;
    });
    
    const avgScore = allSources.length > 0 
      ? Math.round(allSources.reduce((sum, s) => sum + CREDIBILITY_TIERS[s.inferredCredibility].score, 0) / allSources.length)
      : 0;
    
    return { byCredibility, total: allSources.length, avgScore };
  }, [allSources]);
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredSources.slice(0, 5).map((item, idx) => {
          const config = CREDIBILITY_TIERS[item.inferredCredibility];
          const Icon = config.icon;
          return (
            <div key={idx} className="flex items-center gap-2 p-2 bg-zinc-900/50">
              <Icon className={`w-4 h-4 ${config.color}`} />
              <div className="flex-1 min-w-0">
                <div className="text-sm text-zinc-300 truncate">{item.source.title}</div>
                <div className="text-xs text-zinc-500">{config.label}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-6 h-6 text-zinc-300" />
            Source Credibility Dashboard
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {stats.total} sources • Average credibility: {stats.avgScore}/100
          </p>
        </div>
        
        <div className="ml-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-1.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 focus:outline-none focus:border-zinc-600"
          >
            <option value="credibility">By Credibility</option>
            <option value="title">Alphabetical</option>
          </select>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        {Object.entries(CREDIBILITY_TIERS).map(([key, config]) => {
          const count = stats.byCredibility[key as CredibilityTier];
          const Icon = config.icon;
          return (
            <button
              key={key}
              onClick={() => setCredibilityFilter(credibilityFilter === key ? 'all' : key as CredibilityTier)}
              className={`glass-card border p-3 transition-colors ${
                credibilityFilter === key ? `${config.border} ${config.bg}` : 'border-zinc-800 hover:border-zinc-700'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <Icon className={`w-4 h-4 ${config.color}`} />
                <span className={`text-lg font-bold ${config.color}`}>{count}</span>
              </div>
              <div className="text-xs text-zinc-500 truncate">{config.label}</div>
            </button>
          );
        })}
      </div>
      
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search sources..."
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
      
      {/* Credibility Legend */}
      <div className="glass-card border border-zinc-800 p-4">
        <h3 className="text-sm font-semibold text-zinc-400 mb-3">Credibility Scale</h3>
        <div className="grid md:grid-cols-5 gap-3">
          {Object.entries(CREDIBILITY_TIERS).map(([key, config]) => {
            const Icon = config.icon;
            return (
              <div key={key} className="text-xs">
                <div className="flex items-center gap-1.5 mb-1">
                  <Icon className={`w-3.5 h-3.5 ${config.color}`} />
                  <span className={config.color}>{config.label}</span>
                  <span className="text-zinc-600">{config.score}</span>
                </div>
                <p className="text-zinc-600 line-clamp-2">{config.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-3">
        {filteredSources.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No sources found</p>
          </div>
        ) : (
          filteredSources.map((item, idx) => (
            <SourceCard key={idx} item={item} />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Widget showing overall source credibility
 */
export function SourceCredibilityWidget() {
  const sources = aggregateSources();
  const primary = sources.filter(s => s.inferredCredibility === 'primary').length;
  const verified = sources.filter(s => s.inferredCredibility === 'verified').length;
  const highQuality = primary + verified;
  const percentage = sources.length > 0 ? Math.round((highQuality / sources.length) * 100) : 0;
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <Shield className="w-4 h-4" />
        Source Quality
      </h3>
      <div className="flex items-center gap-4">
        <div className="text-center">
          <div className="text-2xl font-bold text-emerald-400">{percentage}%</div>
          <div className="text-xs text-zinc-500">High Quality</div>
        </div>
        <div className="flex-1 h-2 bg-zinc-800">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 to-green-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}
