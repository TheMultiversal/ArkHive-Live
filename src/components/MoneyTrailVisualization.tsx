'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  DollarSign, 
  ArrowRight, 
  ChevronDown, 
  ChevronRight,
  Search,
  Filter,
  Calendar,
  FileCheck,
  FileX,
  TrendingUp,
  Building2,
  User,
  AlertTriangle,
  X
} from 'lucide-react';
import type { MoneyTransaction } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

interface MoneyFlow {
  from: string;
  to: string;
  totalAmount: number;
  transactions: Array<MoneyTransaction & { investigationSlug: string; investigationTitle: string }>;
}

interface PartyStats {
  name: string;
  sent: number;
  received: number;
  netFlow: number;
  transactionCount: number;
}

/**
 * Parse amount string to number (handles $1M, $500K, etc.)
 */
function parseAmount(amount: string): number {
  const cleaned = amount.replace(/[,$]/g, '').trim();
  
  // Handle millions
  const mMatch = cleaned.match(/([\d.]+)\s*M(?:illion)?/i);
  if (mMatch) return parseFloat(mMatch[1]) * 1_000_000;
  
  // Handle thousands
  const kMatch = cleaned.match(/([\d.]+)\s*K/i);
  if (kMatch) return parseFloat(kMatch[1]) * 1_000;
  
  // Handle billions
  const bMatch = cleaned.match(/([\d.]+)\s*B(?:illion)?/i);
  if (bMatch) return parseFloat(bMatch[1]) * 1_000_000_000;
  
  // Plain number
  const num = parseFloat(cleaned);
  return isNaN(num) ? 0 : num;
}

/**
 * Format number as currency
 */
function formatCurrency(amount: number): string {
  if (amount >= 1_000_000_000) {
    return `$${(amount / 1_000_000_000).toFixed(1)}B`;
  }
  if (amount >= 1_000_000) {
    return `$${(amount / 1_000_000).toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    return `$${(amount / 1_000).toFixed(0)}K`;
  }
  return `$${amount.toFixed(0)}`;
}

/**
 * Aggregate all money trails across investigations
 */
function aggregateMoneyFlows(): { flows: MoneyFlow[]; parties: PartyStats[] } {
  const flowMap = new Map<string, MoneyFlow>();
  const partyMap = new Map<string, PartyStats>();
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    if (!inv.moneyTrail || inv.moneyTrail.length === 0) return;
    
    inv.moneyTrail.forEach(tx => {
      // Create flow key (from -> to)
      const flowKey = `${tx.from}|${tx.to}`;
      const existing = flowMap.get(flowKey);
      const amount = parseAmount(tx.amount);
      
      if (existing) {
        existing.totalAmount += amount;
        existing.transactions.push({
          ...tx,
          investigationSlug: slug,
          investigationTitle: inv.title
        });
      } else {
        flowMap.set(flowKey, {
          from: tx.from,
          to: tx.to,
          totalAmount: amount,
          transactions: [{
            ...tx,
            investigationSlug: slug,
            investigationTitle: inv.title
          }]
        });
      }
      
      // Track party stats
      const updateParty = (name: string, sent: number, received: number) => {
        const party = partyMap.get(name) || { name, sent: 0, received: 0, netFlow: 0, transactionCount: 0 };
        party.sent += sent;
        party.received += received;
        party.netFlow = party.received - party.sent;
        party.transactionCount++;
        partyMap.set(name, party);
      };
      
      updateParty(tx.from, amount, 0);
      updateParty(tx.to, 0, amount);
    });
  });
  
  const flows = Array.from(flowMap.values()).sort((a, b) => b.totalAmount - a.totalAmount);
  const parties = Array.from(partyMap.values()).sort((a, b) => 
    Math.abs(b.netFlow) - Math.abs(a.netFlow)
  );
  
  return { flows, parties };
}

interface FlowCardProps {
  flow: MoneyFlow;
  isExpanded: boolean;
  onToggle: () => void;
}

function FlowCard({ flow, isExpanded, onToggle }: FlowCardProps) {
  return (
    <div className="glass-card border border-zinc-800/30">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center gap-4 text-left hover:bg-zinc-800/10 transition-colors"
      >
        <div className="shrink-0">
          {isExpanded ? (
            <ChevronDown className="w-5 h-5 text-zinc-300" />
          ) : (
            <ChevronRight className="w-5 h-5 text-zinc-500" />
          )}
        </div>
        
        {/* Flow visualization */}
        <div className="flex-1 flex items-center gap-3 min-w-0">
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <Building2 className="w-4 h-4 text-zinc-500 shrink-0" />
            <span className="text-sm text-zinc-300 truncate">{flow.from}</span>
          </div>
          
          <div className="flex items-center gap-1 shrink-0">
            <div className="h-[2px] w-8 bg-gradient-to-r from-zinc-800 to-zinc-500" />
            <ArrowRight className="w-4 h-4 text-zinc-300" />
            <div className="h-[2px] w-8 bg-gradient-to-r from-zinc-600 to-zinc-800" />
          </div>
          
          <div className="flex items-center gap-2 min-w-0 flex-1">
            <span className="text-sm text-zinc-300 truncate">{flow.to}</span>
            <User className="w-4 h-4 text-zinc-500 shrink-0" />
          </div>
        </div>
        
        {/* Amount */}
        <div className="shrink-0 text-right">
          <div className="text-lg font-bold text-zinc-400">
            {formatCurrency(flow.totalAmount)}
          </div>
          <div className="text-xs text-zinc-500">
            {flow.transactions.length} transaction{flow.transactions.length !== 1 ? 's' : ''}
          </div>
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800/30 bg-black/30 p-4 space-y-3">
          {flow.transactions.map((tx, idx) => (
            <div key={idx} className="flex items-start gap-3 text-sm">
              <div className="shrink-0 mt-0.5">
                {tx.documented ? (
                  <span title="Documented">
                    <FileCheck className="w-4 h-4 text-green-500" />
                  </span>
                ) : (
                  <span title="Undocumented">
                    <FileX className="w-4 h-4 text-orange-500" />
                  </span>
                )}
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  <span className="text-zinc-400">{tx.date}</span>
                  <span className="text-zinc-400 font-semibold">{tx.amount}</span>
                </div>
                <p className="text-zinc-400">{tx.purpose}</p>
                <Link
                  href={`/investigations/${tx.investigationSlug}`}
                  className="text-xs text-zinc-300 hover:text-white mt-1 inline-block"
                >
                  → {tx.investigationTitle}
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

interface MoneyTrailVisualizationProps {
  /** Filter to show only transactions from a specific investigation */
  investigationSlug?: string;
  /** Show compact view */
  compact?: boolean;
  /** Maximum flows to show */
  limit?: number;
}

export default function MoneyTrailVisualization({ 
  investigationSlug,
  compact = false,
  limit
}: MoneyTrailVisualizationProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showDocumentedOnly, setShowDocumentedOnly] = useState(false);
  const [expandedFlows, setExpandedFlows] = useState<Set<string>>(new Set());
  const [viewMode, setViewMode] = useState<'flows' | 'parties'>('flows');
  
  const { flows: allFlows, parties: allParties } = useMemo(() => aggregateMoneyFlows(), []);
  
  const filteredFlows = useMemo(() => {
    let filtered = allFlows;
    
    // Filter by investigation
    if (investigationSlug) {
      filtered = filtered.filter(f => 
        f.transactions.some(tx => tx.investigationSlug === investigationSlug)
      );
    }
    
    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(f => 
        f.from.toLowerCase().includes(query) ||
        f.to.toLowerCase().includes(query) ||
        f.transactions.some(tx => 
          tx.purpose.toLowerCase().includes(query) ||
          tx.investigationTitle.toLowerCase().includes(query)
        )
      );
    }
    
    // Filter documented only
    if (showDocumentedOnly) {
      filtered = filtered.filter(f => 
        f.transactions.some(tx => tx.documented)
      );
    }
    
    // Apply limit
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    return filtered;
  }, [allFlows, investigationSlug, searchQuery, showDocumentedOnly, limit]);
  
  const filteredParties = useMemo(() => {
    let filtered = allParties;
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => p.name.toLowerCase().includes(query));
    }
    
    return filtered;
  }, [allParties, searchQuery]);
  
  const toggleExpanded = (flowKey: string) => {
    setExpandedFlows(prev => {
      const next = new Set(prev);
      if (next.has(flowKey)) {
        next.delete(flowKey);
      } else {
        next.add(flowKey);
      }
      return next;
    });
  };
  
  // Calculate totals
  const { totalVolume, totalTransactions } = useMemo(() => {
    const vol = allFlows.reduce((sum, f) => sum + f.totalAmount, 0);
    const txs = allFlows.reduce((sum, f) => sum + f.transactions.length, 0);
    return { totalVolume: vol, totalTransactions: txs };
  }, [allFlows]);
  
  if (allFlows.length === 0) {
    return (
      <div className="glass-card border border-zinc-800 p-8 text-center">
        <DollarSign className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
        <p className="text-zinc-500">No money trail data available</p>
        <p className="text-sm text-zinc-600 mt-2">
          Add moneyTrail arrays to investigations to track financial flows
        </p>
      </div>
    );
  }
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredFlows.slice(0, 5).map(flow => (
          <div 
            key={`${flow.from}|${flow.to}`}
            className="flex items-center gap-2 p-2 bg-zinc-900/50 text-sm"
          >
            <DollarSign className="w-4 h-4 text-zinc-300" />
            <span className="text-zinc-400 truncate">{flow.from}</span>
            <ArrowRight className="w-3 h-3 text-zinc-600" />
            <span className="text-zinc-400 truncate">{flow.to}</span>
            <span className="text-zinc-400 ml-auto font-semibold">
              {formatCurrency(flow.totalAmount)}
            </span>
          </div>
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
            <DollarSign className="w-6 h-6 text-zinc-300" />
            Money Trail Analysis
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {formatCurrency(totalVolume)} tracked • {totalTransactions} transactions • {allParties.length} parties
          </p>
        </div>
        
        <div className="flex gap-2 ml-auto">
          <button
            onClick={() => setViewMode('flows')}
            className={`px-3 py-1.5 text-xs transition-colors ${
              viewMode === 'flows'
                ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-600'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            Flows
          </button>
          <button
            onClick={() => setViewMode('parties')}
            className={`px-3 py-1.5 text-xs transition-colors ${
              viewMode === 'parties'
                ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-600'
                : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
            }`}
          >
            Parties
          </button>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <div className="relative flex-1 min-w-[200px] max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search parties or purposes..."
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
        
        <button
          onClick={() => setShowDocumentedOnly(!showDocumentedOnly)}
          className={`px-4 py-2 text-sm flex items-center gap-2 transition-colors ${
            showDocumentedOnly 
              ? 'bg-green-500/20 text-green-400 border border-green-500'
              : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
          }`}
        >
          <FileCheck className="w-4 h-4" />
          Documented Only
        </button>
      </div>
      
      {/* Content */}
      {viewMode === 'flows' ? (
        <div className="space-y-3">
          {filteredFlows.length === 0 ? (
            <div className="text-center py-12 text-zinc-500">
              <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
              <p>No financial flows matching your criteria</p>
            </div>
          ) : (
            filteredFlows.map(flow => (
              <FlowCard
                key={`${flow.from}|${flow.to}`}
                flow={flow}
                isExpanded={expandedFlows.has(`${flow.from}|${flow.to}`)}
                onToggle={() => toggleExpanded(`${flow.from}|${flow.to}`)}
              />
            ))
          )}
        </div>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {filteredParties.map(party => (
            <div 
              key={party.name}
              className="glass-card border border-zinc-800/30 p-4"
            >
              <div className="flex items-start gap-3 mb-3">
                <Building2 className="w-5 h-5 text-zinc-500" />
                <h3 className="font-semibold text-white flex-1">{party.name}</h3>
                <span className="text-xs text-zinc-500">
                  {party.transactionCount} tx
                </span>
              </div>
              
              <div className="grid grid-cols-3 gap-2 text-sm">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Sent</p>
                  <p className="text-orange-400 font-semibold">
                    {formatCurrency(party.sent)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Received</p>
                  <p className="text-green-400 font-semibold">
                    {formatCurrency(party.received)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Net</p>
                  <p className={`font-semibold ${
                    party.netFlow >= 0 ? 'text-green-400' : 'text-orange-400'
                  }`}>
                    {party.netFlow >= 0 ? '+' : ''}{formatCurrency(party.netFlow)}
                  </p>
                </div>
              </div>
              
              {/* Net flow bar */}
              <div className="mt-3 h-2 bg-zinc-900 relative overflow-hidden">
                <div 
                  className={`absolute top-0 h-full ${
                    party.netFlow >= 0 ? 'bg-green-500/50 left-1/2' : 'bg-orange-500/50 right-1/2'
                  }`}
                  style={{
                    width: `${Math.min(50, Math.abs(party.netFlow) / (party.sent + party.received) * 100)}%`
                  }}
                />
                <div className="absolute top-0 left-1/2 w-[1px] h-full bg-zinc-700" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/**
 * Compact widget for investigation pages
 */
export function InvestigationMoneyTrail({ slug }: { slug: string }) {
  const investigation = investigationDatabase[slug];
  if (!investigation?.moneyTrail || investigation.moneyTrail.length === 0) {
    return null;
  }
  
  const total = investigation.moneyTrail.reduce(
    (sum, tx) => sum + parseAmount(tx.amount), 
    0
  );
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <DollarSign className="w-4 h-4" />
        Money Trail ({formatCurrency(total)})
      </h3>
      <div className="space-y-2">
        {investigation.moneyTrail.slice(0, 5).map((tx, idx) => (
          <div key={idx} className="flex items-center gap-2 text-sm">
            {tx.documented ? (
              <FileCheck className="w-3 h-3 text-green-500" />
            ) : (
              <FileX className="w-3 h-3 text-orange-500" />
            )}
            <span className="text-zinc-500 truncate flex-1">
              {tx.from} → {tx.to}
            </span>
            <span className="text-zinc-400 font-semibold">{tx.amount}</span>
          </div>
        ))}
        {investigation.moneyTrail.length > 5 && (
          <p className="text-xs text-zinc-500 text-center mt-2">
            +{investigation.moneyTrail.length - 5} more transactions
          </p>
        )}
      </div>
    </div>
  );
}
