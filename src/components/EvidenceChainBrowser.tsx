'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  Link2, 
  FileText, 
  Video, 
  Mic, 
  Camera,
  Database,
  AlertTriangle,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  CheckCircle,
  Shield,
  Clock,
  Hash
} from 'lucide-react';
import type { InvestigationSource, InvestigationData } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

interface EvidenceItem {
  source: InvestigationSource;
  contentExcerpt: string;
  investigationSlug: string;
  investigationTitle: string;
  evidenceType: 'document' | 'video' | 'audio' | 'photo' | 'database' | 'testimony' | 'other';
}

interface EvidenceChain {
  claim: string;
  claimSource: string;
  evidence: EvidenceItem[];
  confidence: 'verified' | 'corroborated' | 'single-source' | 'disputed';
}

const evidenceTypeConfig = {
  document: { icon: FileText, color: 'text-blue-400', label: 'Document' },
  video: { icon: Video, color: 'text-pink-400', label: 'Video' },
  audio: { icon: Mic, color: 'text-rose-400', label: 'Audio' },
  photo: { icon: Camera, color: 'text-fuchsia-400', label: 'Photo' },
  database: { icon: Database, color: 'text-indigo-400', label: 'Database' },
  testimony: { icon: FileText, color: 'text-purple-400', label: 'Testimony' },
  other: { icon: FileText, color: 'text-zinc-400', label: 'Other' },
};

const confidenceConfig = {
  verified: { label: 'Verified', color: 'text-green-400', bg: 'bg-green-500/20', border: 'border-green-500/50', description: 'Confirmed by multiple independent primary sources' },
  corroborated: { label: 'Corroborated', color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50', description: 'Supported by multiple sources' },
  'single-source': { label: 'Single Source', color: 'text-yellow-400', bg: 'bg-yellow-500/20', border: 'border-yellow-500/50', description: 'Based on one source, awaiting corroboration' },
  disputed: { label: 'Disputed', color: 'text-red-400', bg: 'bg-red-500/20', border: 'border-red-500/50', description: 'Conflicting evidence exists' },
};

/**
 * Determine evidence type from source info
 */
function determineEvidenceType(source: InvestigationSource): EvidenceItem['evidenceType'] {
  const typeStr = (source.type || 'document').toLowerCase();
  if (typeStr.includes('video')) return 'video';
  if (typeStr.includes('audio')) return 'audio';
  if (typeStr.includes('photo') || typeStr.includes('image')) return 'photo';
  if (typeStr.includes('database') || typeStr.includes('data')) return 'database';
  if (typeStr.includes('testimony') || typeStr.includes('deposition')) return 'testimony';
  if (typeStr.includes('document') || typeStr.includes('report') || typeStr.includes('filing') || typeStr.includes('court')) return 'document';
  return 'document';
}

/**
 * Build evidence chains from investigation data
 */
function buildEvidenceChains(): EvidenceChain[] {
  const chains: EvidenceChain[] = [];
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    // Extract key claims from content
    inv.content.forEach((paragraph, idx) => {
      // Look for factual claims - sentences with dates, numbers, or strong assertions
      const sentences = paragraph.split(/(?<=[.!?])\s+/);
      sentences.forEach((sentence, sentIdx) => {
        // Check if sentence looks like a key claim (contains dates, quotes, specific numbers)
        const hasDate = /\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4}|(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},?\s+\d{4}|\d{4}/.test(sentence);
        const hasQuote = /"[^"]+"|'[^']+'/.test(sentence);
        const hasNumber = /\$[\d,]+|\d+\s*(?:percent|%|million|billion|thousand)|\d{2,}/i.test(sentence);
        
        if ((hasDate && hasNumber) || hasQuote || sentence.length > 100) {
          // Link to sources that might support this claim
          const relevantSources = inv.sources.filter(src => {
            // Check if source type seems relevant
            const srcType = (src.type || '').toLowerCase();
            return srcType.includes('document') || 
                   srcType.includes('report') ||
                   srcType.includes('evidence') ||
                   srcType.includes('court') ||
                   srcType.includes('video');
          }).slice(0, 3);
          
          if (relevantSources.length > 0 && sentence.length > 50) {
            const evidenceItems: EvidenceItem[] = relevantSources.map(src => ({
              source: src,
              contentExcerpt: paragraph.slice(0, 200) + '...',
              investigationSlug: slug,
              investigationTitle: inv.title,
              evidenceType: determineEvidenceType(src),
            }));
            
            chains.push({
              claim: sentence.slice(0, 300) + (sentence.length > 300 ? '...' : ''),
              claimSource: inv.title,
              evidence: evidenceItems,
              confidence: relevantSources.length >= 2 ? 'corroborated' : 
                         relevantSources.some(s => s.credibility === 'primary') ? 'verified' : 'single-source',
            });
          }
        }
      });
    });
  });
  
  // Limit and dedupe
  const seen = new Set<string>();
  return chains.filter(chain => {
    const key = chain.claim.slice(0, 100);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  }).slice(0, 100);
}

interface EvidenceChainCardProps {
  chain: EvidenceChain;
  isExpanded: boolean;
  onToggle: () => void;
}

function EvidenceChainCard({ chain, isExpanded, onToggle }: EvidenceChainCardProps) {
  const confConfig = confidenceConfig[chain.confidence];
  
  return (
    <div className={`glass-card border ${confConfig.border}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-blood-900/10 transition-colors"
      >
        <div className={`shrink-0 w-10 h-10 ${confConfig.bg} ${confConfig.border} border flex items-center justify-center`}>
          {chain.confidence === 'verified' ? (
            <CheckCircle className={`w-5 h-5 ${confConfig.color}`} />
          ) : chain.confidence === 'disputed' ? (
            <AlertTriangle className={`w-5 h-5 ${confConfig.color}`} />
          ) : (
            <Link2 className={`w-5 h-5 ${confConfig.color}`} />
          )}
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className={`px-2 py-0.5 text-xs ${confConfig.bg} ${confConfig.color} ${confConfig.border} border`}>
              {confConfig.label}
            </span>
            <span className="text-xs text-zinc-500">
              {chain.evidence.length} source{chain.evidence.length !== 1 ? 's' : ''}
            </span>
          </div>
          
          <p className="text-sm text-zinc-300 line-clamp-2">{chain.claim}</p>
          
          <div className="flex items-center gap-2 mt-2 text-xs text-zinc-500">
            <span>From: {chain.claimSource}</span>
          </div>
        </div>
        
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
        ) : (
          <ChevronRight className="w-4 h-4 text-zinc-500 shrink-0" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-blood-900/30 bg-black/30 p-4 space-y-4">
          {/* Claim Display */}
          <div className="bg-zinc-900/50 p-3">
            <div className="text-xs text-zinc-500 mb-1">CLAIM</div>
            <p className="text-sm text-zinc-300">{chain.claim}</p>
          </div>
          
          {/* Evidence Chain */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-3 flex items-center gap-1">
              <Link2 className="w-3 h-3" /> Supporting Evidence
            </h4>
            <div className="space-y-2">
              {chain.evidence.map((item, idx) => {
                const typeConfig = evidenceTypeConfig[item.evidenceType];
                const Icon = typeConfig.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-2 bg-zinc-900/30">
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs text-zinc-600">{idx + 1}</span>
                      <div className="w-px h-4 bg-zinc-800" />
                      <Icon className={`w-4 h-4 ${typeConfig.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <a 
                        href={item.source.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-zinc-300 hover:text-blood-400 flex items-center gap-1"
                      >
                        {item.source.title}
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                      <div className="flex items-center gap-2 mt-1 text-xs text-zinc-500">
                        <span>{item.source.type}</span>
                        {item.source.credibility && (
                          <span className="px-1.5 py-0.5 bg-zinc-800">
                            {item.source.credibility}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Confidence explanation */}
          <div className="text-xs text-zinc-500 flex items-center gap-2">
            <Shield className="w-3 h-3" />
            {confConfig.description}
          </div>
          
          {/* Link to investigation */}
          {chain.evidence[0] && (
            <Link
              href={`/investigations/${chain.evidence[0].investigationSlug}`}
              className="inline-flex items-center gap-2 text-sm text-blood-400 hover:text-blood-300"
            >
              View Full Investigation →
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

interface EvidenceChainBrowserProps {
  /** Filter by investigation */
  investigationSlug?: string;
  /** Show compact view */
  compact?: boolean;
  /** Limit results */
  limit?: number;
}

export default function EvidenceChainBrowser({ investigationSlug, compact = false, limit }: EvidenceChainBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [confidenceFilter, setConfidenceFilter] = useState<EvidenceChain['confidence'] | 'all'>('all');
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  
  const allChains = useMemo(() => buildEvidenceChains(), []);
  
  const filteredChains = useMemo(() => {
    let chains = [...allChains];
    
    // Filter by investigation
    if (investigationSlug) {
      chains = chains.filter(c => 
        c.evidence.some(e => e.investigationSlug === investigationSlug)
      );
    }
    
    // Filter by confidence
    if (confidenceFilter !== 'all') {
      chains = chains.filter(c => c.confidence === confidenceFilter);
    }
    
    // Search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      chains = chains.filter(c => 
        c.claim.toLowerCase().includes(q) ||
        c.claimSource.toLowerCase().includes(q) ||
        c.evidence.some(e => e.source.title.toLowerCase().includes(q))
      );
    }
    
    // Apply limit
    if (limit) {
      chains = chains.slice(0, limit);
    }
    
    return chains;
  }, [allChains, investigationSlug, confidenceFilter, searchQuery, limit]);
  
  const toggleCard = (idx: number) => {
    setExpandedCards(prev => {
      const next = new Set(prev);
      if (next.has(idx)) {
        next.delete(idx);
      } else {
        next.add(idx);
      }
      return next;
    });
  };
  
  // Stats
  const stats = {
    total: allChains.length,
    verified: allChains.filter(c => c.confidence === 'verified').length,
    corroborated: allChains.filter(c => c.confidence === 'corroborated').length,
    singleSource: allChains.filter(c => c.confidence === 'single-source').length,
  };
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredChains.slice(0, 5).map((chain, idx) => {
          const confConfig = confidenceConfig[chain.confidence];
          return (
            <div key={idx} className="flex items-start gap-2 p-2 bg-zinc-900/50">
              <Link2 className={`w-4 h-4 mt-0.5 ${confConfig.color}`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-zinc-300 truncate">{chain.claim}</p>
                <div className="text-xs text-zinc-500">{chain.evidence.length} sources</div>
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
            <Link2 className="w-6 h-6 text-blood-500" />
            Evidence Chain Browser
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {stats.total} documented claims • {stats.verified + stats.corroborated} corroborated
          </p>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="glass-card border border-zinc-800 p-4">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-zinc-500">Total Claims</div>
        </div>
        <div className="glass-card border border-green-500/30 p-4">
          <div className="text-2xl font-bold text-green-500">{stats.verified}</div>
          <div className="text-xs text-zinc-500">Verified</div>
        </div>
        <div className="glass-card border border-blue-500/30 p-4">
          <div className="text-2xl font-bold text-blue-500">{stats.corroborated}</div>
          <div className="text-xs text-zinc-500">Corroborated</div>
        </div>
        <div className="glass-card border border-yellow-500/30 p-4">
          <div className="text-2xl font-bold text-yellow-500">{stats.singleSource}</div>
          <div className="text-xs text-zinc-500">Single Source</div>
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
            placeholder="Search claims..."
            className="w-full pl-10 pr-8 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-blood-500 text-sm"
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
        
        {/* Confidence Filter */}
        <div className="flex gap-1">
          {['all', 'verified', 'corroborated', 'single-source'].map(conf => {
            const config = conf === 'all' ? null : confidenceConfig[conf as EvidenceChain['confidence']];
            const isSelected = confidenceFilter === conf;
            return (
              <button
                key={conf}
                onClick={() => setConfidenceFilter(conf as typeof confidenceFilter)}
                className={`px-3 py-2 text-xs capitalize transition-colors ${
                  isSelected
                    ? config ? `${config.bg} ${config.color} border ${config.border}` : 'bg-blood-500/20 text-blood-400 border border-blood-500'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {conf === 'single-source' ? 'Single' : conf}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-3">
        {filteredChains.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No evidence chains found</p>
          </div>
        ) : (
          filteredChains.map((chain, idx) => (
            <EvidenceChainCard
              key={idx}
              chain={chain}
              isExpanded={expandedCards.has(idx)}
              onToggle={() => toggleCard(idx)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Widget showing evidence verification stats
 */
export function EvidenceVerificationWidget() {
  const chains = buildEvidenceChains();
  const verified = chains.filter(c => c.confidence === 'verified').length;
  const corroborated = chains.filter(c => c.confidence === 'corroborated').length;
  
  return (
    <div className="glass-card border border-blood-900/30 p-4">
      <h3 className="text-sm font-semibold text-blood-400 mb-3 flex items-center gap-2">
        <Link2 className="w-4 h-4" />
        Evidence Verification
      </h3>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="text-xl font-bold text-green-500">{verified}</div>
          <div className="text-xs text-zinc-500">Verified</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-blue-500">{corroborated}</div>
          <div className="text-xs text-zinc-500">Corroborated</div>
        </div>
      </div>
    </div>
  );
}
