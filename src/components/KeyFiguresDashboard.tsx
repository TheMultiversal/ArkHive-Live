'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  User, 
  Users, 
  Search, 
  Grid, 
  List, 
  TrendingUp, 
  AlertTriangle,
  Scale,
  ChevronRight,
  FileText,
  Gavel,
  Building2,
  Star,
  Filter
} from 'lucide-react';

// Import investigation database
import investigationDatabase from '@/data/investigations';
import type { InvestigationData, Defendant } from '@/data/investigations/types';

// Interface for aggregated key figure data
export interface KeyFigure {
  name: string;
  normalizedName: string;
  role: string;
  party?: string;
  investigations: {
    investigation: InvestigationData;
    role: string;
    context?: string;
  }[];
  defendants: Defendant[];
  affiliations: number;
  riskScore: number;
  isConvicted: boolean;
  isPardoned: boolean;
  isIndicted: boolean;
}

// Normalize name for matching
function normalizeName(name: string): string {
  return name
    .toLowerCase()
    .replace(/['"]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/^(president|former president|senator|rep\.|representative|judge|justice|mr\.|mrs\.|ms\.|dr\.)\s+/i, '');
}

// Extract key figures from all investigations
function extractKeyFigures(): KeyFigure[] {
  const figureMap: Record<string, KeyFigure> = {};

  for (const investigation of Object.values(investigationDatabase)) {
    // Extract from defendants
    if (investigation.defendants) {
      for (const defendant of investigation.defendants) {
        const normalized = normalizeName(defendant.name);
        
        if (!figureMap[normalized]) {
          figureMap[normalized] = {
            name: defendant.name,
            normalizedName: normalized,
            role: defendant.role,
            investigations: [],
            defendants: [],
            affiliations: 0,
            riskScore: 0,
            isConvicted: false,
            isPardoned: false,
            isIndicted: false
          };
        }

        figureMap[normalized].defendants.push(defendant);
        
        // Update status flags
        if (defendant.status === 'convicted' || defendant.status === 'incarcerated') {
          figureMap[normalized].isConvicted = true;
        }
        if (defendant.status === 'pardoned') {
          figureMap[normalized].isPardoned = true;
        }
        if (defendant.status === 'indicted' || defendant.status === 'charged') {
          figureMap[normalized].isIndicted = true;
        }

        // Add investigation link
        const existingInv = figureMap[normalized].investigations.find(
          i => i.investigation.slug === investigation.slug
        );
        if (!existingInv) {
          figureMap[normalized].investigations.push({
            investigation,
            role: defendant.role,
            context: defendant.notes
          });
        }
      }
    }

    // Extract from affiliations
    if (investigation.affiliations) {
      for (const affiliation of investigation.affiliations) {
        if (affiliation.entityType === 'individual') {
          const normalized = normalizeName(affiliation.entityName);
          
          if (!figureMap[normalized]) {
            figureMap[normalized] = {
              name: affiliation.entityName,
              normalizedName: normalized,
              role: affiliation.relationship || 'Key Figure',
              investigations: [],
              defendants: [],
              affiliations: 0,
              riskScore: 0,
              isConvicted: false,
              isPardoned: false,
              isIndicted: false
            };
          }

          figureMap[normalized].affiliations++;

          const existingInv = figureMap[normalized].investigations.find(
            i => i.investigation.slug === investigation.slug
          );
          if (!existingInv) {
            figureMap[normalized].investigations.push({
              investigation,
              role: affiliation.relationship || 'Related',
              context: affiliation.description
            });
          }
        }
      }
    }

    // Extract from key facts (mention detection)
    const prominentNames = [
      'Donald Trump', 'Trump', 'Joe Biden', 'Rudy Giuliani', 'Mike Pence',
      'Steve Bannon', 'Roger Stone', 'Paul Manafort', 'Michael Flynn',
      'Michael Cohen', 'Jared Kushner', 'Ivanka Trump', 'Don Jr',
      'Mark Meadows', 'Jeffrey Clark', 'John Eastman', 'Sidney Powell'
    ];

    for (const name of prominentNames) {
      const searchText = (Array.isArray(investigation.content) ? investigation.content.join(' ') : (investigation.content || '')).toLowerCase();
      if (searchText.includes(name.toLowerCase())) {
        const normalized = normalizeName(name);
        
        if (!figureMap[normalized]) {
          figureMap[normalized] = {
            name: name,
            normalizedName: normalized,
            role: 'Mentioned',
            investigations: [],
            defendants: [],
            affiliations: 0,
            riskScore: 0,
            isConvicted: false,
            isPardoned: false,
            isIndicted: false
          };
        }

        const existingInv = figureMap[normalized].investigations.find(
          i => i.investigation.slug === investigation.slug
        );
        if (!existingInv) {
          figureMap[normalized].investigations.push({
            investigation,
            role: 'Mentioned',
            context: undefined
          });
        }
      }
    }
  }

  // Calculate risk scores
  for (const figure of Object.values(figureMap)) {
    let score = 0;
    
    // Points for investigation involvement
    for (const inv of figure.investigations) {
      const severity = inv.investigation.severity;
      score += severity === 'critical' ? 40 : severity === 'high' ? 25 : severity === 'medium' ? 15 : 5;
    }

    // Points for legal status
    if (figure.isConvicted) score += 50;
    if (figure.isIndicted) score += 30;
    if (figure.isPardoned) score += 20; // Still counts as involvement

    // Points for charges
    for (const defendant of figure.defendants) {
      score += (defendant.charges?.length || 0) * 10;
    }

    // Points for affiliations
    score += figure.affiliations * 5;

    figure.riskScore = score;
  }

  return Object.values(figureMap).sort((a, b) => b.riskScore - a.riskScore);
}

// Main component
export function KeyFiguresDashboard() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'convicted' | 'pardoned' | 'indicted'>('all');
  const [selectedFigure, setSelectedFigure] = useState<KeyFigure | null>(null);

  const keyFigures = useMemo(() => extractKeyFigures(), []);

  // Filter figures
  const filteredFigures = useMemo(() => {
    return keyFigures.filter(figure => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        if (!figure.name.toLowerCase().includes(query) &&
            !figure.role.toLowerCase().includes(query)) {
          return false;
        }
      }

      // Status filter
      if (statusFilter === 'convicted' && !figure.isConvicted) return false;
      if (statusFilter === 'pardoned' && !figure.isPardoned) return false;
      if (statusFilter === 'indicted' && !figure.isIndicted && !figure.isConvicted) return false;

      return true;
    });
  }, [keyFigures, searchQuery, statusFilter]);

  // Summary stats
  const stats = useMemo(() => ({
    total: keyFigures.length,
    convicted: keyFigures.filter(f => f.isConvicted).length,
    pardoned: keyFigures.filter(f => f.isPardoned).length,
    indicted: keyFigures.filter(f => f.isIndicted).length,
    highRisk: keyFigures.filter(f => f.riskScore >= 100).length
  }), [keyFigures]);

  const getRiskColor = (score: number) => {
    if (score >= 150) return 'bg-red-500';
    if (score >= 100) return 'bg-orange-500';
    if (score >= 50) return 'bg-yellow-500';
    return 'bg-zinc-500';
  };

  const getStatusBadges = (figure: KeyFigure) => {
    const badges = [];
    if (figure.isConvicted) badges.push({ text: 'Convicted', color: 'bg-red-500/20 text-red-400' });
    if (figure.isPardoned) badges.push({ text: 'Pardoned', color: 'bg-purple-500/20 text-purple-400' });
    if (figure.isIndicted && !figure.isConvicted) badges.push({ text: 'Indicted', color: 'bg-orange-500/20 text-orange-400' });
    return badges;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Users className="w-6 h-6 text-zinc-300" />
          <h2 className="text-2xl font-bold text-white">Key Figures</h2>
          <span className="px-2 py-1 bg-zinc-500/20 text-zinc-400 text-sm border border-zinc-600/30">
            {filteredFigures.length} individuals
          </span>
        </div>

        <div className="flex items-center gap-2">
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              placeholder="Search figures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 bg-zinc-900 border border-zinc-700 text-white 
                       placeholder-zinc-500 focus:outline-none focus:border-zinc-600 w-48"
            />
          </div>

          {/* Status filter */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value as typeof statusFilter)}
            className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-white focus:outline-none"
          >
            <option value="all">All Status</option>
            <option value="convicted">Convicted</option>
            <option value="pardoned">Pardoned</option>
            <option value="indicted">Indicted</option>
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

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-zinc-500">Total Figures</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-red-400">{stats.convicted}</div>
          <div className="text-xs text-zinc-500">Convicted</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-purple-400">{stats.pardoned}</div>
          <div className="text-xs text-zinc-500">Pardoned</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-orange-400">{stats.indicted}</div>
          <div className="text-xs text-zinc-500">Indicted</div>
        </div>
        <div className="glass-card p-4 text-center">
          <div className="text-2xl font-bold text-yellow-400">{stats.highRisk}</div>
          <div className="text-xs text-zinc-500">High Risk</div>
        </div>
      </div>

      {/* Figure list */}
      {!selectedFigure && (
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4' 
          : 'space-y-3'
        }>
          {filteredFigures.map(figure => {
            const badges = getStatusBadges(figure);
            
            return (
              <button
                key={figure.normalizedName}
                onClick={() => setSelectedFigure(figure)}
                className={`glass-card p-4 text-left transition-all hover:border-zinc-600 group
                  ${viewMode === 'list' ? 'flex items-center gap-4' : ''}`}
              >
                {/* Avatar / Risk indicator */}
                <div className={`relative ${viewMode === 'list' ? '' : 'mb-3'}`}>
                  <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
                    <User className="w-6 h-6 text-zinc-500" />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getRiskColor(figure.riskScore)}`} 
                       title={`Risk Score: ${figure.riskScore}`} />
                </div>

                {/* Content */}
                <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                  <h3 className="text-white font-semibold group-hover:text-white transition-colors">
                    {figure.name}
                  </h3>
                  <p className="text-sm text-zinc-500">{figure.role}</p>
                  
                  {/* Status badges */}
                  {badges.length > 0 && (
                    <div className="flex gap-1 mt-2">
                      {badges.map((badge, idx) => (
                        <span key={idx} className={`px-2 py-0.5 text-xs ${badge.color}`}>
                          {badge.text}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Investigation count */}
                  <div className="flex items-center gap-3 mt-2 text-xs text-zinc-500">
                    <span className="flex items-center gap-1">
                      <FileText className="w-3 h-3" />
                      {figure.investigations.length} investigations
                    </span>
                    {figure.defendants.length > 0 && (
                      <span className="flex items-center gap-1">
                        <Gavel className="w-3 h-3" />
                        {figure.defendants.reduce((sum, d) => sum + (d.charges?.length || 0), 0)} charges
                      </span>
                    )}
                  </div>
                </div>

                {/* Risk score */}
                <div className={`${viewMode === 'list' ? 'text-right' : 'mt-3 flex justify-between items-center'}`}>
                  <div className="text-sm">
                    <span className="text-zinc-500">Risk: </span>
                    <span className={`font-bold ${
                      figure.riskScore >= 150 ? 'text-red-400' :
                      figure.riskScore >= 100 ? 'text-orange-400' :
                      figure.riskScore >= 50 ? 'text-yellow-400' :
                      'text-zinc-400'
                    }`}>
                      {figure.riskScore}
                    </span>
                  </div>
                  <ChevronRight className="w-5 h-5 text-zinc-600 group-hover:text-white" />
                </div>
              </button>
            );
          })}
        </div>
      )}

      {/* Figure Detail View */}
      {selectedFigure && (
        <div className="space-y-4">
          {/* Back button and header */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSelectedFigure(null)}
              className="px-3 py-2 bg-zinc-900 border border-zinc-700 text-zinc-400 
                       hover:text-white hover:border-zinc-600 transition-colors"
            >
              ← Back to Figures
            </button>
            <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center">
              <User className="w-6 h-6 text-zinc-500" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{selectedFigure.name}</h3>
              <p className="text-sm text-zinc-500">{selectedFigure.role}</p>
            </div>
            <div className={`px-3 py-1 ${getRiskColor(selectedFigure.riskScore)} text-black text-sm font-bold`}>
              Risk: {selectedFigure.riskScore}
            </div>
          </div>

          {/* Status badges */}
          <div className="flex gap-2">
            {getStatusBadges(selectedFigure).map((badge, idx) => (
              <span key={idx} className={`px-3 py-1 ${badge.color}`}>
                {badge.text}
              </span>
            ))}
          </div>

          {/* Charges section */}
          {selectedFigure.defendants.length > 0 && (
            <div className="glass-card p-4">
              <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                <Gavel className="w-4 h-4 text-zinc-300" />
                Criminal Charges
              </h4>
              {selectedFigure.defendants.map((defendant, idx) => (
                <div key={idx} className="mb-4 last:mb-0">
                  {defendant.charges && defendant.charges.length > 0 && (
                    <ul className="space-y-1">
                      {defendant.charges.map((charge, cidx) => (
                        <li key={cidx} className="text-sm text-zinc-400 flex items-start gap-2">
                          <span className="text-zinc-300 mt-1">•</span>
                          {charge}
                        </li>
                      ))}
                    </ul>
                  )}
                  {defendant.sentence && (
                    <p className="text-sm text-zinc-500 mt-2">
                      <strong>Sentence:</strong> {defendant.sentence}
                    </p>
                  )}
                  {defendant.notes && (
                    <p className="text-sm text-zinc-600 mt-1 italic">{defendant.notes}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Investigations */}
          <div className="glass-card p-4">
            <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
              <FileText className="w-4 h-4 text-zinc-300" />
              Related Investigations ({selectedFigure.investigations.length})
            </h4>
            <div className="space-y-2">
              {selectedFigure.investigations.map(({ investigation, role, context }) => (
                <Link
                  key={investigation.slug}
                  href={`/investigations/${investigation.slug}`}
                  className="block p-3 bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="text-white font-medium hover:text-white">
                        {investigation.title}
                      </h5>
                      <p className="text-sm text-zinc-500">Role: {role}</p>
                    </div>
                    <span className={`px-2 py-0.5 text-xs uppercase ${
                      investigation.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                      investigation.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                      investigation.severity === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {investigation.severity}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Compact widget showing top figures
export function TopFiguresWidget({ limit = 5 }: { limit?: number }) {
  const keyFigures = useMemo(() => extractKeyFigures().slice(0, limit), [limit]);

  return (
    <div className="glass-card p-4">
      <div className="flex items-center gap-2 mb-4">
        <Star className="w-4 h-4 text-zinc-300" />
        <h3 className="font-semibold text-white">Top Key Figures</h3>
      </div>

      <div className="space-y-3">
        {keyFigures.map((figure, idx) => (
          <div key={figure.normalizedName} className="flex items-center gap-3">
            <span className="w-5 h-5 bg-zinc-800 text-zinc-500 text-xs flex items-center justify-center">
              {idx + 1}
            </span>
            <div className="flex-1">
              <div className="text-sm text-white">{figure.name}</div>
              <div className="text-xs text-zinc-500">
                {figure.investigations.length} investigations
              </div>
            </div>
            <div className={`w-2 h-6 ${
              figure.riskScore >= 150 ? 'bg-red-500' :
              figure.riskScore >= 100 ? 'bg-orange-500' :
              figure.riskScore >= 50 ? 'bg-yellow-500' :
              'bg-zinc-500'
            }`} />
          </div>
        ))}
      </div>

      <Link 
        href="/figures"
        className="block mt-4 text-center text-sm text-zinc-300 hover:text-white"
      >
        View All Figures →
      </Link>
    </div>
  );
}

export default KeyFiguresDashboard;
