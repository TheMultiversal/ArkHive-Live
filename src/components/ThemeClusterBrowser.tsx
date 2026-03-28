'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Tag, 
  Grid, 
  List, 
  ChevronRight, 
  TrendingUp,
  AlertTriangle,
  Layers,
  Search,
  Filter,
  Eye,
  Scale,
  DollarSign,
  Users,
  Shield,
  Globe,
  Vote,
  FileText,
  Briefcase,
  Lock,
  Building2
} from 'lucide-react';

// Import investigation database
import investigationDatabase from '@/data/investigations';
import type { InvestigationData } from '@/data/investigations/types';

// Theme definitions with keywords for auto-classification
export interface Theme {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  keywords: string[];
}

export const THEME_DEFINITIONS: Theme[] = [
  {
    id: 'executive-power',
    name: 'Executive Power Abuse',
    description: 'Investigations into misuse of presidential and executive authority',
    icon: Shield,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['executive', 'president', 'pardon', 'executive order', 'obstruction', 'abuse of power', 'impeachment', 'white house']
  },
  {
    id: 'election-integrity',
    name: 'Election Integrity',
    description: 'Cases involving election interference, voter fraud claims, and certification',
    icon: Vote,
    color: 'text-blood-500',
    bgColor: 'bg-blood-500/10',
    keywords: ['election', 'vote', 'voter', 'ballot', 'certification', 'january 6', 'electoral', 'poll', 'campaign']
  },
  {
    id: 'financial-crimes',
    name: 'Financial Crimes',
    description: 'Money laundering, fraud, tax evasion, and financial misconduct',
    icon: DollarSign,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['fraud', 'money', 'financial', 'tax', 'launder', 'embezzle', 'bank', 'wire fraud', 'securities']
  },
  {
    id: 'foreign-influence',
    name: 'Foreign Influence',
    description: 'Foreign government interference and undisclosed foreign relationships',
    icon: Globe,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['russia', 'china', 'foreign', 'agent', 'fara', 'espionage', 'interference', 'collusion', 'saudi', 'ukraine']
  },
  {
    id: 'civil-rights',
    name: 'Civil Rights',
    description: 'Violations of constitutional rights and civil liberties',
    icon: Scale,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['civil rights', 'discrimination', 'constitutional', 'voting rights', 'segregation', 'police', 'brutality']
  },
  {
    id: 'corruption',
    name: 'Public Corruption',
    description: 'Bribery, kickbacks, and public officials misconduct',
    icon: Briefcase,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['bribery', 'corrupt', 'kickback', 'quid pro quo', 'emoluments', 'conflict of interest', 'ethics']
  },
  {
    id: 'national-security',
    name: 'National Security',
    description: 'Classified documents, intelligence leaks, and security breaches',
    icon: Lock,
    color: 'text-red-600',
    bgColor: 'bg-red-600/10',
    keywords: ['classified', 'secret', 'security clearance', 'intelligence', 'espionage', 'documents', 'mar-a-lago', 'leak']
  },
  {
    id: 'corporate-malfeasance',
    name: 'Corporate Malfeasance',
    description: 'Corporate fraud, regulatory violations, and business crimes',
    icon: Building2,
    color: 'text-zinc-400',
    bgColor: 'bg-zinc-500/10',
    keywords: ['corporate', 'company', 'business', 'organization', 'trump org', 'enterprise', 'racketeering', 'rico']
  },
  {
    id: 'obstruction',
    name: 'Obstruction of Justice',
    description: 'Witness tampering, evidence destruction, and hindering investigations',
    icon: Eye,
    color: 'text-pink-500',
    bgColor: 'bg-pink-500/10',
    keywords: ['obstruction', 'witness', 'tamper', 'evidence', 'destroy', 'intimidate', 'hinder', 'cover-up']
  },
  {
    id: 'conspiracy',
    name: 'Conspiracy',
    description: 'Coordinated unlawful activities involving multiple actors',
    icon: Users,
    color: 'text-red-500',
    bgColor: 'bg-red-500/10',
    keywords: ['conspiracy', 'coordinate', 'scheme', 'plot', 'seditious', 'insurrection', 'organized']
  }
];

// Classify investigation into themes based on keywords
function classifyInvestigation(investigation: InvestigationData): string[] {
  const themes: string[] = [];
  const searchText = `
    ${investigation.title} 
    ${investigation.summary} 
    ${investigation.content} 
    ${investigation.tags?.join(' ') || ''}
    ${investigation.sources?.map(s => s.title || '').join(' ') || ''}
  `.toLowerCase();

  for (const theme of THEME_DEFINITIONS) {
    const matchCount = theme.keywords.filter(kw => searchText.includes(kw.toLowerCase())).length;
    // Require at least 2 keyword matches for strong classification
    if (matchCount >= 2) {
      themes.push(theme.id);
    }
  }

  // Ensure at least one theme
  if (themes.length === 0) {
    themes.push('corruption'); // Default fallback
  }

  return themes;
}

interface ClusteredInvestigation {
  investigation: InvestigationData;
  slug: string;
  themes: string[];
  primaryTheme: string;
}

interface ThemeCluster {
  theme: Theme;
  investigations: ClusteredInvestigation[];
  totalSeverity: number;
}

// Main component
export function ThemeClusterBrowser() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedTheme, setSelectedTheme] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'count' | 'severity' | 'name'>('count');

  // Process all investigations
  const clusteredData = useMemo(() => {
    const entries = Object.entries(investigationDatabase);
    
    // Classify each investigation
    const classified: ClusteredInvestigation[] = entries.map(([slug, inv]) => {
      const themes = classifyInvestigation(inv);
      return {
        investigation: inv,
        slug,
        themes,
        primaryTheme: themes[0]
      };
    });

    // Group by theme
    const clusters: Record<string, ThemeCluster> = {};
    
    for (const theme of THEME_DEFINITIONS) {
      const themeInvestigations = classified.filter(c => c.themes.includes(theme.id));
      const severityScore = themeInvestigations.reduce((sum, c) => {
        const severity = c.investigation.severity;
        return sum + (severity === 'critical' ? 4 : severity === 'high' ? 3 : severity === 'medium' ? 2 : 1);
      }, 0);

      clusters[theme.id] = {
        theme,
        investigations: themeInvestigations,
        totalSeverity: severityScore
      };
    }

    return { classified, clusters };
  }, []);

  // Filter clusters
  const filteredClusters = useMemo(() => {
    let clusters = Object.values(clusteredData.clusters);

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      clusters = clusters.filter(c => 
        c.theme.name.toLowerCase().includes(query) ||
        c.theme.description.toLowerCase().includes(query) ||
        c.investigations.some(inv => 
          inv.investigation.title.toLowerCase().includes(query)
        )
      );
    }

    // Sort
    clusters.sort((a, b) => {
      switch (sortBy) {
        case 'count':
          return b.investigations.length - a.investigations.length;
        case 'severity':
          return b.totalSeverity - a.totalSeverity;
        case 'name':
          return a.theme.name.localeCompare(b.theme.name);
        default:
          return 0;
      }
    });

    return clusters;
  }, [clusteredData.clusters, searchQuery, sortBy]);

  // Get selected theme details
  const selectedCluster = selectedTheme ? clusteredData.clusters[selectedTheme] : null;

  const severityColors: Record<string, string> = {
    critical: 'bg-red-500',
    high: 'bg-red-500',
    medium: 'bg-red-500',
    low: 'bg-red-500'
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Layers className="w-6 h-6 text-zinc-300" />
          <h2 className="text-2xl font-bold text-white">Theme Clusters</h2>
          <span className="px-2 py-1 bg-zinc-500/20 text-zinc-400 text-sm border border-zinc-600/30">
            {THEME_DEFINITIONS.length} themes · {Object.values(investigationDatabase).length} investigations
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-700 text-white 
                       placeholder-zinc-500 focus:outline-none focus:border-zinc-600 w-48"
            />
          </div>

          {/* Sort */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-white focus:outline-none"
          >
            <option value="count">By Count</option>
            <option value="severity">By Severity</option>
            <option value="name">By Name</option>
          </select>

          {/* View modes */}
          <div className="flex border border-zinc-700">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 ${viewMode === 'grid' ? 'bg-zinc-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white'}`}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 ${viewMode === 'list' ? 'bg-zinc-600 text-white' : 'bg-zinc-900 text-zinc-400 hover:text-white'}`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Theme Grid / List */}
      {!selectedTheme && (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
          : 'space-y-3'
        }>
          {filteredClusters.map(cluster => {
            const Icon = cluster.theme.icon;
            const criticalCount = cluster.investigations.filter(
              i => i.investigation.severity === 'critical'
            ).length;

            return (
              <button
                key={cluster.theme.id}
                onClick={() => setSelectedTheme(cluster.theme.id)}
                className={`glass-card p-4 text-left transition-all hover:border-zinc-600 group
                  ${viewMode === 'list' ? 'flex items-center gap-4' : ''}`}
              >
                {/* Icon */}
                <div className={`${cluster.theme.bgColor} p-3 inline-block mb-3 ${viewMode === 'list' ? 'mb-0' : ''}`}>
                  <Icon className={`w-6 h-6 ${cluster.theme.color}`} />
                </div>

                {/* Content */}
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-white font-semibold group-hover:text-white transition-colors">
                      {cluster.theme.name}
                    </h3>
                    <span className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs">
                      {cluster.investigations.length}
                    </span>
                    {criticalCount > 0 && (
                      <span className="px-2 py-0.5 bg-red-500/20 text-red-400 text-xs flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3" />
                        {criticalCount} critical
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-zinc-500 line-clamp-2">
                    {cluster.theme.description}
                  </p>
                </div>

                {/* Severity bar */}
                <div className={`mt-3 flex gap-1 ${viewMode === 'list' ? 'mt-0 ml-4' : ''}`}>
                  {cluster.investigations.slice(0, 8).map((inv, idx) => (
                    <div 
                      key={idx}
                      className={`w-2 h-6 ${severityColors[inv.investigation.severity]}`}
                      title={inv.investigation.title}
                    />
                  ))}
                  {cluster.investigations.length > 8 && (
                    <div className="w-6 h-6 bg-zinc-700 flex items-center justify-center text-xs text-zinc-400">
                      +{cluster.investigations.length - 8}
                    </div>
                  )}
                </div>

                <ChevronRight className={`w-5 h-5 text-zinc-600 group-hover:text-white transition-colors
                  ${viewMode === 'list' ? '' : 'absolute right-4 top-1/2 -translate-y-1/2'}`} 
                />
              </button>
            );
          })}
        </div>
      )}

      {/* Theme Detail View */}
      {selectedCluster && (
        <div className="space-y-4">
          {/* Back button and header */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedTheme(null)}
              className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-zinc-400 
                       hover:text-white hover:border-zinc-600 transition-colors"
            >
              ← Back to Themes
            </button>
            <div className={`${selectedCluster.theme.bgColor} p-2`}>
              {React.createElement(selectedCluster.theme.icon, { 
                className: `w-5 h-5 ${selectedCluster.theme.color}` 
              })}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{selectedCluster.theme.name}</h3>
              <p className="text-sm text-zinc-500">{selectedCluster.theme.description}</p>
            </div>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap gap-2">
            <span className="text-sm text-zinc-500">Keywords:</span>
            {selectedCluster.theme.keywords.map(kw => (
              <span key={kw} className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs">
                {kw}
              </span>
            ))}
          </div>

          {/* Investigation list */}
          <div className="grid gap-3">
            {selectedCluster.investigations.map(({ investigation, slug, themes }) => (
              <Link
                key={slug}
                href={`/investigations/${slug}`}
                className="glass-card p-4 flex items-center gap-4 hover:border-zinc-600 transition-colors group"
              >
                {/* Severity indicator */}
                <div className={`w-2 h-12 ${severityColors[investigation.severity]}`} />

                {/* Content */}
                <div className="flex-1">
                  <h4 className="font-semibold text-white group-hover:text-white transition-colors">
                    {investigation.title}
                  </h4>
                  <p className="text-sm text-zinc-500 line-clamp-1">
                    {investigation.summary}
                  </p>
                  {/* Cross-theme tags */}
                  {themes.length > 1 && (
                    <div className="flex gap-1 mt-2">
                      {themes.filter(t => t !== selectedTheme).slice(0, 3).map(themeId => {
                        const theme = THEME_DEFINITIONS.find(t => t.id === themeId);
                        if (!theme) return null;
                        return (
                          <span 
                            key={themeId}
                            className={`px-2 py-0.5 text-xs ${theme.bgColor} ${theme.color}`}
                          >
                            {theme.name}
                          </span>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Status */}
                <div className="text-right">
                  <span className={`px-2 py-1 text-xs uppercase ${
                    investigation.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                    investigation.severity === 'high' ? 'bg-red-500/20 text-red-400' :
                    investigation.severity === 'medium' ? 'bg-red-500/20 text-red-400' :
                    'bg-red-500/20 text-red-400'
                  }`}>
                    {investigation.severity}
                  </span>
                  <p className="text-xs text-zinc-600 mt-1">
                    {investigation.category}
                  </p>
                </div>

                <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Compact widget for sidebars
export function TopThemesWidget({ limit = 5 }: { limit?: number }) {
  const clusters = useMemo(() => {
    const investigations = Object.values(investigationDatabase);
    
    const themeCounts: Record<string, number> = {};
    for (const inv of investigations) {
      const themes = classifyInvestigation(inv);
      for (const theme of themes) {
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
      }
    }

    return THEME_DEFINITIONS
      .map(theme => ({
        theme,
        count: themeCounts[theme.id] || 0
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, limit);
  }, [limit]);

  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <Layers className="w-4 h-4 text-zinc-300" />
        <h3 className="font-semibold text-white">Top Themes</h3>
      </div>

      <div className="space-y-2">
        {clusters.map(({ theme, count }) => {
          const Icon = theme.icon;
          return (
            <div key={theme.id} className="flex items-center gap-3">
              <div className={`${theme.bgColor} p-1.5`}>
                <Icon className={`w-3 h-3 ${theme.color}`} />
              </div>
              <span className="flex-1 text-sm text-zinc-300">{theme.name}</span>
              <span className="text-xs text-zinc-500">{count}</span>
            </div>
          );
        })}
      </div>

      <Link 
        href="/themes"
        className="block mt-4 text-center text-sm text-zinc-300 hover:text-white"
      >
        View All Themes →
      </Link>
    </div>
  );
}

// Theme distribution chart
export function ThemeDistributionChart() {
  const distribution = useMemo(() => {
    const investigations = Object.values(investigationDatabase);
    
    const themeCounts: Record<string, number> = {};
    let total = 0;

    for (const inv of investigations) {
      const themes = classifyInvestigation(inv);
      for (const theme of themes) {
        themeCounts[theme] = (themeCounts[theme] || 0) + 1;
        total++;
      }
    }

    return THEME_DEFINITIONS
      .map(theme => ({
        theme,
        count: themeCounts[theme.id] || 0,
        percentage: total > 0 ? ((themeCounts[theme.id] || 0) / total * 100) : 0
      }))
      .sort((a, b) => b.count - a.count);
  }, []);

  const maxCount = Math.max(...distribution.map(d => d.count), 1);

  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-4 h-4 text-zinc-300" />
        <h3 className="font-semibold text-white">Theme Distribution</h3>
      </div>

      <div className="space-y-3">
        {distribution.map(({ theme, count, percentage }) => {
          const Icon = theme.icon;
          const barWidth = (count / maxCount) * 100;

          return (
            <div key={theme.id}>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-2">
                  <Icon className={`w-3 h-3 ${theme.color}`} />
                  <span className="text-sm text-zinc-300">{theme.name}</span>
                </div>
                <span className="text-xs text-zinc-500">{count} ({percentage.toFixed(1)}%)</span>
              </div>
              <div className="h-2 bg-zinc-800">
                <div 
                  className={`h-full ${theme.bgColor.replace('/10', '')}`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ThemeClusterBrowser;
