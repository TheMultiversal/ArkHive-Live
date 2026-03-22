'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Scale, 
  User, 
  AlertTriangle, 
  Shield,
  Gavel,
  Calendar,
  DollarSign,
  Clock,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  Filter,
  ExternalLink,
  Award
} from 'lucide-react';
import type { Defendant, ConvictionStatus } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

const statusConfig: Record<ConvictionStatus, { label: string; color: string; bg: string; border: string }> = {
  convicted: { label: 'Convicted', color: 'text-red-500', bg: 'bg-red-500/20', border: 'border-red-500/50' },
  indicted: { label: 'Indicted', color: 'text-orange-500', bg: 'bg-orange-500/20', border: 'border-orange-500/50' },
  charged: { label: 'Charged', color: 'text-yellow-500', bg: 'bg-yellow-500/20', border: 'border-yellow-500/50' },
  acquitted: { label: 'Acquitted', color: 'text-blood-400', bg: 'bg-blood-500/20', border: 'border-blood-500/50' },
  pardoned: { label: 'Pardoned', color: 'text-purple-500', bg: 'bg-purple-500/20', border: 'border-purple-500/50' },
  pending: { label: 'Pending', color: 'text-zinc-400', bg: 'bg-zinc-500/20', border: 'border-zinc-500/50' },
  settled: { label: 'Settled', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/50' },
  appealing: { label: 'Appealing', color: 'text-cyan-400', bg: 'bg-cyan-500/20', border: 'border-cyan-500/50' },
  incarcerated: { label: 'Incarcerated', color: 'text-red-700', bg: 'bg-red-700/20', border: 'border-red-700/50' },
  released: { label: 'Released', color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/50' },
};

interface DefendantWithContext extends Defendant {
  investigationSlug: string;
  investigationTitle: string;
}

/**
 * Aggregate all defendants from investigation database
 */
function aggregateDefendants(): DefendantWithContext[] {
  const defendants: DefendantWithContext[] = [];
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    if (inv.defendants) {
      inv.defendants.forEach(def => {
        defendants.push({
          ...def,
          investigationSlug: slug,
          investigationTitle: inv.title,
        });
      });
    }
  });
  
  return defendants;
}

interface DefendantCardProps {
  defendant: DefendantWithContext;
  isExpanded: boolean;
  onToggle: () => void;
}

function DefendantCard({ defendant, isExpanded, onToggle }: DefendantCardProps) {
  const status = statusConfig[defendant.status];
  
  return (
    <div className={`glass-card border ${status.border}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-zinc-800/10 transition-colors"
      >
        <div className={`shrink-0 w-10 h-10 ${status.bg} ${status.border} border flex items-center justify-center`}>
          <User className={`w-5 h-5 ${status.color}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold">{defendant.name}</h3>
            <span className={`px-2 py-0.5 text-xs ${status.bg} ${status.color} ${status.border} border`}>
              {status.label}
            </span>
            {defendant.status === 'pardoned' && (
              <span className="flex items-center gap-1" title="Pardoned">
                <Award className="w-3.5 h-3.5 text-purple-400" />
              </span>
            )}
          </div>
          
          <p className="text-sm text-zinc-500">{defendant.role}</p>
          
          <div className="flex flex-wrap items-center gap-3 mt-2 text-xs text-zinc-500">
            {defendant.sentence && (
              <span className="flex items-center gap-1">
                <Scale className="w-3 h-3" />
                {defendant.sentence}
              </span>
            )}
            {defendant.convictionDate && (
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {defendant.convictionDate}
              </span>
            )}
            {(defendant.fine || defendant.restitution) && (
              <span className="flex items-center gap-1">
                <DollarSign className="w-3 h-3" />
                {defendant.fine || defendant.restitution}
              </span>
            )}
          </div>
        </div>
        
        <div className="shrink-0 flex items-center gap-2">
          <Link
            href={`/investigations/${defendant.investigationSlug}`}
            onClick={(e) => e.stopPropagation()}
            className="text-xs text-zinc-400 hover:text-white px-2 py-1 hover:bg-zinc-800/30 transition-colors"
          >
            View Case →
          </Link>
          {isExpanded ? (
            <ChevronDown className="w-4 h-4 text-zinc-500" />
          ) : (
            <ChevronRight className="w-4 h-4 text-zinc-500" />
          )}
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800/30 bg-black/30 p-4 space-y-4">
          {/* Charges */}
          {defendant.charges && defendant.charges.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-2 flex items-center gap-1">
                <Gavel className="w-3 h-3" /> Charges
              </h4>
              <ul className="space-y-1">
                {defendant.charges.map((charge, idx) => (
                  <li key={idx} className="text-sm text-zinc-400 flex items-start gap-2">
                    <span className="text-zinc-300 mt-1">•</span>
                    {charge}
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {/* Timeline */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {defendant.indictmentDate && (
              <div className="bg-zinc-900/50 p-2">
                <div className="text-xs text-zinc-500">Indictment</div>
                <div className="text-sm text-zinc-300">{defendant.indictmentDate}</div>
              </div>
            )}
            {defendant.convictionDate && (
              <div className="bg-zinc-900/50 p-2">
                <div className="text-xs text-zinc-500">Conviction</div>
                <div className="text-sm text-zinc-300">{defendant.convictionDate}</div>
              </div>
            )}
            {defendant.pardonDate && (
              <div className="bg-purple-900/30 p-2">
                <div className="text-xs text-purple-400">Pardoned</div>
                <div className="text-sm text-purple-300">{defendant.pardonDate}</div>
                {defendant.pardonedBy && (
                  <div className="text-xs text-purple-400/70 mt-1">By: {defendant.pardonedBy}</div>
                )}
              </div>
            )}
            {defendant.releaseDate && (
              <div className="bg-zinc-900/50 p-2">
                <div className="text-xs text-zinc-500">Released</div>
                <div className="text-sm text-zinc-300">{defendant.releaseDate}</div>
              </div>
            )}
          </div>
          
          {/* Financial penalties */}
          {(defendant.fine || defendant.restitution) && (
            <div>
              <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-2 flex items-center gap-1">
                <DollarSign className="w-3 h-3" /> Financial Penalties
              </h4>
              <div className="flex gap-4 text-sm">
                {defendant.fine && (
                  <div>
                    <span className="text-zinc-500">Fine: </span>
                    <span className="text-green-400">{defendant.fine}</span>
                  </div>
                )}
                {defendant.restitution && (
                  <div>
                    <span className="text-zinc-500">Restitution: </span>
                    <span className="text-green-400">{defendant.restitution}</span>
                  </div>
                )}
              </div>
            </div>
          )}
          
          {/* Appeal Status */}
          {defendant.appealStatus && (
            <div className="flex items-center gap-2 text-sm">
              <span className="text-zinc-500">Appeal:</span>
              <span className={
                defendant.appealStatus === 'granted' ? 'text-green-400' :
                defendant.appealStatus === 'denied' ? 'text-red-400' :
                defendant.appealStatus === 'pending' ? 'text-yellow-400' : 'text-cyan-400'
              }>
                {defendant.appealStatus.charAt(0).toUpperCase() + defendant.appealStatus.slice(1)}
              </span>
            </div>
          )}
          
          {/* Notes */}
          {defendant.notes && (
            <div className="text-sm text-zinc-400 italic border-l-2 border-zinc-700 pl-3">
              {defendant.notes}
            </div>
          )}
          
          {/* Investigation link */}
          <Link
            href={`/investigations/${defendant.investigationSlug}`}
            className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            {defendant.investigationTitle}
          </Link>
        </div>
      )}
    </div>
  );
}

interface ConvictionTrackerProps {
  /** Only show defendants from specific investigation */
  investigationSlug?: string;
  /** Show compact view */
  compact?: boolean;
  /** Limit results */
  limit?: number;
}

export default function ConvictionTracker({ investigationSlug, compact = false, limit }: ConvictionTrackerProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ConvictionStatus | 'all'>('all');
  const [expandedCards, setExpandedCards] = useState<Set<string>>(new Set());
  
  const defendants = useMemo(() => {
    let list = aggregateDefendants();
    
    // Filter by investigation if provided
    if (investigationSlug) {
      list = list.filter(d => d.investigationSlug === investigationSlug);
    }
    
    // Filter by status
    if (statusFilter !== 'all') {
      list = list.filter(d => d.status === statusFilter);
    }
    
    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(d => 
        d.name.toLowerCase().includes(q) ||
        d.role.toLowerCase().includes(q) ||
        d.investigationTitle.toLowerCase().includes(q)
      );
    }
    
    // Apply limit
    if (limit) {
      list = list.slice(0, limit);
    }
    
    return list;
  }, [investigationSlug, statusFilter, searchQuery, limit]);
  
  const toggleCard = (id: string) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };
  
  // Statistics
  const allDefendants = aggregateDefendants();
  const stats = {
    total: allDefendants.length,
    convicted: allDefendants.filter(d => d.status === 'convicted' || d.status === 'incarcerated').length,
    pardoned: allDefendants.filter(d => d.status === 'pardoned').length,
    pending: allDefendants.filter(d => d.status === 'pending' || d.status === 'indicted' || d.status === 'charged').length,
  };
  
  if (compact) {
    return (
      <div className="space-y-2">
        {defendants.length === 0 ? (
          <p className="text-sm text-zinc-500 italic">No conviction data available</p>
        ) : (
          defendants.slice(0, 5).map(def => {
            const status = statusConfig[def.status];
            return (
              <div key={`${def.investigationSlug}-${def.name}`} className="flex items-center gap-2 p-2 bg-zinc-900/50">
                <div className={`w-6 h-6 ${status.bg} flex items-center justify-center`}>
                  <User className={`w-3 h-3 ${status.color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-zinc-300 truncate">{def.name}</div>
                  <div className="text-xs text-zinc-500">{status.label}</div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      {!investigationSlug && (
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Scale className="w-6 h-6 text-zinc-300" />
              Conviction Tracker
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              {stats.total} defendants tracked • {stats.convicted} convicted • {stats.pardoned} pardoned
            </p>
          </div>
        </div>
      )}
      
      {/* Stats Cards */}
      {!investigationSlug && stats.total > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div className="glass-card border border-zinc-800 p-4">
            <div className="text-2xl font-bold text-white">{stats.total}</div>
            <div className="text-xs text-zinc-500">Total Defendants</div>
          </div>
          <div className="glass-card border border-red-500/30 p-4">
            <div className="text-2xl font-bold text-red-500">{stats.convicted}</div>
            <div className="text-xs text-zinc-500">Convicted</div>
          </div>
          <div className="glass-card border border-purple-500/30 p-4">
            <div className="text-2xl font-bold text-purple-500">{stats.pardoned}</div>
            <div className="text-xs text-zinc-500">Pardoned</div>
          </div>
          <div className="glass-card border border-yellow-500/30 p-4">
            <div className="text-2xl font-bold text-yellow-500">{stats.pending}</div>
            <div className="text-xs text-zinc-500">Pending/Charged</div>
          </div>
        </div>
      )}
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        {/* Search */}
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search defendants..."
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
        
        {/* Status Filter */}
        <div className="flex gap-1 flex-wrap">
          <button
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-2 text-xs transition-colors ${
              statusFilter === 'all'
                ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-600'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            All
          </button>
          {Object.entries(statusConfig).slice(0, 6).map(([key, config]) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key as ConvictionStatus)}
              className={`px-3 py-2 text-xs transition-colors ${
                statusFilter === key
                  ? `${config.bg} ${config.color} border ${config.border}`
                  : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {config.label}
            </button>
          ))}
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-3">
        {defendants.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No defendants found</p>
            <p className="text-sm mt-1">Add defendant data to investigations to populate this tracker</p>
          </div>
        ) : (
          defendants.map(def => (
            <DefendantCard
              key={`${def.investigationSlug}-${def.name}`}
              defendant={def}
              isExpanded={expandedCards.has(`${def.investigationSlug}-${def.name}`)}
              onToggle={() => toggleCard(`${def.investigationSlug}-${def.name}`)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Widget showing conviction summary
 */
export function ConvictionSummaryWidget() {
  const defendants = aggregateDefendants();
  const convicted = defendants.filter(d => d.status === 'convicted' || d.status === 'incarcerated');
  const pardoned = defendants.filter(d => d.status === 'pardoned');
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <Scale className="w-4 h-4" />
        Accountability Tracker
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="text-xl font-bold text-red-500">{convicted.length}</div>
          <div className="text-xs text-zinc-500">Convicted</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-purple-500">{pardoned.length}</div>
          <div className="text-xs text-zinc-500">Pardoned</div>
        </div>
      </div>
    </div>
  );
}
