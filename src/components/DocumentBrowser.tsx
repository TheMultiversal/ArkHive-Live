// @ts-nocheck
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  FileText, 
  ExternalLink, 
  Search, 
  X, 
  Tag,
  Calendar,
  User,
  Shield,
  Archive,
  ChevronDown,
  ChevronRight,
  Filter,
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  HelpCircle
} from 'lucide-react';
import type { InvestigationSource, DocumentTag } from '@/data/investigations/types';
import { DOCUMENT_TAG_CONFIG } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

interface DocumentWithContext extends InvestigationSource {
  investigationSlug: string;
  investigationTitle: string;
}

/**
 * Aggregate all documents across investigations
 */
function aggregateDocuments(): DocumentWithContext[] {
  const docs: DocumentWithContext[] = [];
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    if (!inv.sources || inv.sources.length === 0) return;
    
    inv.sources.forEach(source => {
      docs.push({
        ...source,
        investigationSlug: slug,
        investigationTitle: inv.title
      });
    });
  });
  
  // Sort by credibility (primary first) then by title
  return docs.sort((a, b) => {
    const credOrder = { primary: 0, verified: 1, reporting: 2, analysis: 3, unverified: 4 };
    const aOrder = credOrder[a.credibility || 'unverified'] ?? 4;
    const bOrder = credOrder[b.credibility || 'unverified'] ?? 4;
    if (aOrder !== bOrder) return aOrder - bOrder;
    return a.title.localeCompare(b.title);
  });
}

const credibilityConfig = {
  primary: { label: 'Primary Source', color: 'text-red-400', bg: 'bg-red-500/10', icon: CheckCircle },
  verified: { label: 'Verified', color: 'text-red-300', bg: 'bg-red-400/10', icon: Shield },
  reporting: { label: 'News Reporting', color: 'text-red-400/80', bg: 'bg-red-400/10', icon: FileText },
  analysis: { label: 'Analysis', color: 'text-red-300/70', bg: 'bg-red-300/10', icon: AlertCircle },
  unverified: { label: 'Unverified', color: 'text-zinc-400', bg: 'bg-zinc-500/10', icon: HelpCircle },
};

interface DocumentCardProps {
  doc: DocumentWithContext;
  isExpanded: boolean;
  onToggle: () => void;
}

function DocumentCard({ doc, isExpanded, onToggle }: DocumentCardProps) {
  const cred = credibilityConfig[doc.credibility || 'unverified'];
  const CredIcon = cred.icon;
  
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
            <FileText className="w-4 h-4 text-zinc-300 shrink-0" />
            <h3 className="text-white font-semibold truncate">{doc.title}</h3>
          </div>
          
          <div className="flex items-center gap-3 text-sm text-zinc-500 mb-2">
            <span className="px-2 py-0.5 bg-zinc-900 text-zinc-400 text-xs">{doc.type}</span>
            <Link
              href={`/investigations/${doc.investigationSlug}`}
              className="text-zinc-400 hover:text-white truncate"
              onClick={(e) => e.stopPropagation()}
            >
              {doc.investigationTitle}
            </Link>
          </div>
          
          {/* Tags */}
          {doc.documentTags && doc.documentTags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mt-2">
              {doc.documentTags.map(tag => {
                const tagConfig = DOCUMENT_TAG_CONFIG[tag];
                return (
                  <span 
                    key={tag}
                    className={`text-xs px-2 py-0.5 ${tagConfig.color} bg-zinc-900/80 border border-zinc-800`}
                  >
                    {tagConfig.label}
                  </span>
                );
              })}
            </div>
          )}
        </div>
        
        {/* Credibility badge */}
        <div className={`shrink-0 flex items-center gap-1.5 px-2 py-1 ${cred.bg} ${cred.color} text-xs`}>
          <CredIcon className="w-3 h-3" />
          {cred.label}
        </div>
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800/30 bg-black/30 p-4 space-y-3">
          {/* Metadata */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            {doc.author && (
              <div>
                <p className="text-xs text-zinc-500 mb-1">Author</p>
                <p className="text-zinc-300 flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {doc.author}
                </p>
              </div>
            )}
            {doc.datePublished && (
              <div>
                <p className="text-xs text-zinc-500 mb-1">Published</p>
                <p className="text-zinc-300 flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  {doc.datePublished}
                </p>
              </div>
            )}
            {doc.archived && (
              <div>
                <p className="text-xs text-zinc-500 mb-1">Archived</p>
                <p className="text-red-400 flex items-center gap-1">
                  <Archive className="w-3 h-3" />
                  Yes
                </p>
              </div>
            )}
          </div>
          
          {/* Links */}
          <div className="flex gap-3 pt-2">
            <a
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800/30 text-zinc-400 hover:bg-zinc-800/50 text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Source
            </a>
            {doc.archiveUrl && (
              <a
                href={doc.archiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 text-zinc-400 hover:bg-zinc-800 text-sm transition-colors"
              >
                <Archive className="w-4 h-4" />
                Archive Link
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface DocumentBrowserProps {
  /** Filter to show only documents from a specific investigation */
  investigationSlug?: string;
  /** Show compact view */
  compact?: boolean;
  /** Maximum documents to show */
  limit?: number;
}

export default function DocumentBrowser({ 
  investigationSlug,
  compact = false,
  limit
}: DocumentBrowserProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<Set<DocumentTag>>(new Set());
  const [selectedCredibility, setSelectedCredibility] = useState<string>('all');
  const [expandedDocs, setExpandedDocs] = useState<Set<string>>(new Set());
  
  const allDocs = useMemo(() => aggregateDocuments(), []);
  
  const filteredDocs = useMemo(() => {
    let filtered = allDocs;
    
    // Filter by investigation
    if (investigationSlug) {
      filtered = filtered.filter(d => d.investigationSlug === investigationSlug);
    }
    
    // Filter by search
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(d => 
        d.title.toLowerCase().includes(query) ||
        d.type.toLowerCase().includes(query) ||
        d.investigationTitle.toLowerCase().includes(query) ||
        d.author?.toLowerCase().includes(query)
      );
    }
    
    // Filter by tags
    if (selectedTags.size > 0) {
      filtered = filtered.filter(d => 
        d.documentTags?.some(tag => selectedTags.has(tag))
      );
    }
    
    // Filter by credibility
    if (selectedCredibility !== 'all') {
      filtered = filtered.filter(d => d.credibility === selectedCredibility);
    }
    
    // Apply limit
    if (limit) {
      filtered = filtered.slice(0, limit);
    }
    
    return filtered;
  }, [allDocs, investigationSlug, searchQuery, selectedTags, selectedCredibility, limit]);
  
  const toggleExpanded = (key: string) => {
    setExpandedDocs(prev => {
      const next = new Set(prev);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      return next;
    });
  };
  
  const toggleTag = (tag: DocumentTag) => {
    setSelectedTags(prev => {
      const next = new Set(prev);
      if (next.has(tag)) {
        next.delete(tag);
      } else {
        next.add(tag);
      }
      return next;
    });
  };
  
  // Count documents by tag
  const tagCounts = useMemo(() => {
    const counts = new Map<DocumentTag, number>();
    allDocs.forEach(doc => {
      doc.documentTags?.forEach(tag => {
        counts.set(tag, (counts.get(tag) || 0) + 1);
      });
    });
    return counts;
  }, [allDocs]);
  
  // Stats
  const primaryCount = allDocs.filter(d => d.credibility === 'primary').length;
  const totalInvestigations = new Set(allDocs.map(d => d.investigationSlug)).size;
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredDocs.slice(0, 5).map((doc, idx) => (
          <a
            key={`${doc.investigationSlug}-${idx}`}
            href={doc.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 p-2 bg-zinc-900/50 hover:bg-zinc-800/20 transition-colors text-sm group"
          >
            <FileText className="w-4 h-4 text-zinc-300" />
            <span className="text-zinc-300 truncate flex-1">{doc.title}</span>
            <span className="text-xs text-zinc-500">{doc.type}</span>
            <ExternalLink className="w-3 h-3 text-zinc-600 group-hover:text-white" />
          </a>
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
            <FileText className="w-6 h-6 text-zinc-300" />
            Document Archive
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {allDocs.length} documents • {primaryCount} primary sources • {totalInvestigations} investigations
          </p>
        </div>
      </div>
      
      {/* Filters */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-3">
          {/* Search */}
          <div className="relative flex-1 min-w-[200px] max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search documents..."
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
          
          {/* Credibility Filter */}
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
            <select
              value={selectedCredibility}
              onChange={(e) => setSelectedCredibility(e.target.value)}
              className="pl-10 pr-8 py-2 bg-zinc-900 border border-zinc-800 text-white text-sm appearance-none cursor-pointer focus:outline-none focus:border-zinc-600"
            >
              <option value="all">All Credibility</option>
              {Object.entries(credibilityConfig).map(([key, info]) => (
                <option key={key} value={key}>{info.label}</option>
              ))}
            </select>
          </div>
        </div>
        
        {/* Tag filters */}
        <div className="flex flex-wrap gap-2">
          <span className="text-xs text-zinc-500 mr-2 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            Filter by tag:
          </span>
          {Object.entries(DOCUMENT_TAG_CONFIG)
            .filter(([tag]) => tagCounts.has(tag as DocumentTag))
            .sort(([, a], [, b]) => a.label.localeCompare(b.label))
            .map(([tag, config]) => {
              const isSelected = selectedTags.has(tag as DocumentTag);
              const count = tagCounts.get(tag as DocumentTag) || 0;
              return (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag as DocumentTag)}
                  className={`text-xs px-2 py-1 transition-colors flex items-center gap-1 ${
                    isSelected
                      ? `${config.color} bg-zinc-800 border border-zinc-600`
                      : 'text-zinc-500 bg-zinc-900 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {config.label}
                  <span className="text-zinc-600">{count}</span>
                </button>
              );
            })}
        </div>
      </div>
      
      {/* Results */}
      <div className="space-y-3">
        {filteredDocs.length === 0 ? (
          <div className="text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No documents matching your criteria</p>
          </div>
        ) : (
          filteredDocs.map((doc, idx) => (
            <DocumentCard
              key={`${doc.investigationSlug}-${idx}`}
              doc={doc}
              isExpanded={expandedDocs.has(`${doc.investigationSlug}-${idx}`)}
              onToggle={() => toggleExpanded(`${doc.investigationSlug}-${idx}`)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Widget for investigation pages showing sources
 */
export function InvestigationDocuments({ slug }: { slug: string }) {
  const investigation = investigationDatabase[slug];
  if (!investigation?.sources || investigation.sources.length === 0) {
    return null;
  }
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <FileText className="w-4 h-4" />
        Source Documents ({investigation.sources.length})
      </h3>
      <DocumentBrowser
        investigationSlug={slug}
        compact
        limit={5}
      />
    </div>
  );
}
