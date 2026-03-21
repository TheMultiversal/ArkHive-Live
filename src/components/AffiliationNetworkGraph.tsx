'use client';

import { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import { 
  Network, 
  User, 
  Building2, 
  Landmark, 
  Users,
  Search,
  X,
  ZoomIn,
  ZoomOut,
  Maximize,
  Filter,
  AlertTriangle,
  Link2,
  Eye
} from 'lucide-react';
import type { InvestigationAffiliation } from '@/data/investigations/types';
import investigationDatabase from '@/data/investigations';

interface NetworkNode {
  id: string;
  name: string;
  type: 'individual' | 'agency' | 'corporation' | 'organization' | 'investigation';
  href?: string;
  connections: number;
  investigations: string[];
}

interface NetworkEdge {
  source: string;
  target: string;
  relationship: string;
  investigation: string;
  investigationTitle: string;
}

/**
 * Build network graph from investigation data
 */
function buildNetwork(): { nodes: Map<string, NetworkNode>; edges: NetworkEdge[] } {
  const nodes = new Map<string, NetworkNode>();
  const edges: NetworkEdge[] = [];
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    // Add investigation as a node
    const invNodeId = `inv:${slug}`;
    nodes.set(invNodeId, {
      id: invNodeId,
      name: inv.title,
      type: 'investigation',
      href: `/investigations/${slug}`,
      connections: inv.affiliations.length,
      investigations: [slug]
    });
    
    // Process affiliations
    inv.affiliations.forEach(aff => {
      const entityNodeId = `${aff.type}:${aff.name.toLowerCase().replace(/\s+/g, '-')}`;
      
      // Add or update entity node
      const existing = nodes.get(entityNodeId);
      if (existing) {
        existing.connections++;
        if (!existing.investigations.includes(slug)) {
          existing.investigations.push(slug);
        }
      } else {
        nodes.set(entityNodeId, {
          id: entityNodeId,
          name: aff.name,
          type: aff.type,
          href: aff.href,
          connections: 1,
          investigations: [slug]
        });
      }
      
      // Add edge from entity to investigation
      edges.push({
        source: entityNodeId,
        target: invNodeId,
        relationship: aff.relationship,
        investigation: slug,
        investigationTitle: inv.title
      });
    });
  });
  
  return { nodes, edges };
}

const typeConfig = {
  individual: { icon: User, color: 'text-blue-400', bg: 'bg-blue-500/20', border: 'border-blue-500/50' },
  agency: { icon: Landmark, color: 'text-emerald-400', bg: 'bg-emerald-500/20', border: 'border-emerald-500/50' },
  corporation: { icon: Building2, color: 'text-orange-400', bg: 'bg-orange-500/20', border: 'border-orange-500/50' },
  organization: { icon: Users, color: 'text-purple-400', bg: 'bg-purple-500/20', border: 'border-purple-500/50' },
  investigation: { icon: Eye, color: 'text-zinc-400', bg: 'bg-zinc-500/20', border: 'border-zinc-600/50' },
};

interface NetworkNodeCardProps {
  node: NetworkNode;
  edges: NetworkEdge[];
  allNodes: Map<string, NetworkNode>;
  isExpanded: boolean;
  onToggle: () => void;
}

function NetworkNodeCard({ node, edges, allNodes, isExpanded, onToggle }: NetworkNodeCardProps) {
  const config = typeConfig[node.type as keyof typeof typeConfig] || typeConfig.individual;
  const Icon = config.icon;
  
  // Get connected nodes
  const connectedEdges = edges.filter(e => e.source === node.id || e.target === node.id);
  const connectedNodes = new Set<string>();
  connectedEdges.forEach(e => {
    if (e.source !== node.id) connectedNodes.add(e.source);
    if (e.target !== node.id) connectedNodes.add(e.target);
  });
  
  return (
    <div className={`glass-card border ${config.border}`}>
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-start gap-4 text-left hover:bg-zinc-800/10 transition-colors"
      >
        <div className={`shrink-0 w-10 h-10 ${config.bg} ${config.border} border flex items-center justify-center`}>
          <Icon className={`w-5 h-5 ${config.color}`} />
        </div>
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-white font-semibold truncate">{node.name}</h3>
            {node.investigations.length > 1 && (
              <span className="text-xs text-zinc-400 px-1.5 py-0.5 bg-zinc-500/10">
                {node.investigations.length} investigations
              </span>
            )}
          </div>
          
          <div className="flex items-center gap-3 text-sm text-zinc-500">
            <span className={`px-2 py-0.5 ${config.bg} ${config.color} text-xs capitalize`}>
              {node.type}
            </span>
            <span className="flex items-center gap-1">
              <Link2 className="w-3 h-3" />
              {node.connections} connections
            </span>
          </div>
        </div>
        
        {node.href && (
          <Link
            href={node.href}
            onClick={(e) => e.stopPropagation()}
            className="shrink-0 px-3 py-1.5 text-xs text-zinc-400 hover:bg-zinc-800/30 transition-colors"
          >
            View Profile →
          </Link>
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800/30 bg-black/30 p-4">
          <h4 className="text-xs font-semibold text-zinc-500 uppercase mb-3">Connections</h4>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {connectedEdges.slice(0, 20).map((edge, idx) => {
              const connectedId = edge.source === node.id ? edge.target : edge.source;
              const connectedNode = allNodes.get(connectedId);
              if (!connectedNode) return null;
              
              const connConfig = typeConfig[connectedNode.type as keyof typeof typeConfig] || typeConfig.individual;
              const ConnIcon = connConfig.icon;
              
              return (
                <div key={idx} className="flex items-start gap-2 text-sm">
                  <div className={`shrink-0 w-6 h-6 ${connConfig.bg} flex items-center justify-center`}>
                    <ConnIcon className={`w-3 h-3 ${connConfig.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-300 truncate">{connectedNode.name}</span>
                    </div>
                    <p className="text-xs text-zinc-500 truncate">{edge.relationship}</p>
                  </div>
                </div>
              );
            })}
            {connectedEdges.length > 20 && (
              <p className="text-xs text-zinc-500 text-center mt-2">
                +{connectedEdges.length - 20} more connections
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

interface AffiliationNetworkGraphProps {
  /** Center on specific entity */
  focusEntity?: string;
  /** Filter by entity type */
  entityType?: 'individual' | 'agency' | 'corporation' | 'organization' | 'all';
  /** Show compact view */
  compact?: boolean;
  /** Maximum nodes to show */
  limit?: number;
}

export default function AffiliationNetworkGraph({ 
  focusEntity,
  entityType = 'all',
  compact = false,
  limit
}: AffiliationNetworkGraphProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedType, setSelectedType] = useState<string>(entityType);
  const [sortBy, setSortBy] = useState<'connections' | 'investigations' | 'name'>('connections');
  const [expandedNodes, setExpandedNodes] = useState<Set<string>>(new Set());
  
  const { nodes: allNodes, edges } = useMemo(() => buildNetwork(), []);
  
  const filteredNodes = useMemo(() => {
    let nodeList = Array.from(allNodes.values());
    
    // Exclude investigation nodes for cleaner view (unless compact)
    if (!compact) {
      nodeList = nodeList.filter(n => n.type !== 'investigation');
    }
    
    // Filter by type
    if (selectedType !== 'all') {
      nodeList = nodeList.filter(n => n.type === selectedType);
    }
    
    // Focus on specific entity
    if (focusEntity) {
      const focusNode = nodeList.find(n => 
        n.name.toLowerCase().includes(focusEntity.toLowerCase()) ||
        n.id.includes(focusEntity.toLowerCase())
      );
      if (focusNode) {
        // Get all nodes connected to focus node
        const connectedIds = new Set<string>();
        edges.forEach(e => {
          if (e.source === focusNode.id) connectedIds.add(e.target);
          if (e.target === focusNode.id) connectedIds.add(e.source);
        });
        connectedIds.add(focusNode.id);
        nodeList = nodeList.filter(n => connectedIds.has(n.id));
      }
    }
    
    // Search filter
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      nodeList = nodeList.filter(n => 
        n.name.toLowerCase().includes(query)
      );
    }
    
    // Sort
    nodeList.sort((a, b) => {
      if (sortBy === 'connections') return b.connections - a.connections;
      if (sortBy === 'investigations') return b.investigations.length - a.investigations.length;
      return a.name.localeCompare(b.name);
    });
    
    // Apply limit
    if (limit) {
      nodeList = nodeList.slice(0, limit);
    }
    
    return nodeList;
  }, [allNodes, edges, selectedType, focusEntity, searchQuery, sortBy, limit, compact]);
  
  const toggleExpanded = (nodeId: string) => {
    setExpandedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      return next;
    });
  };
  
  // Stats
  const entityCount = Array.from(allNodes.values()).filter(n => n.type !== 'investigation').length;
  const highConnectors = Array.from(allNodes.values())
    .filter(n => n.type !== 'investigation')
    .filter(n => n.investigations.length >= 3).length;
  
  if (compact) {
    return (
      <div className="space-y-2">
        {filteredNodes.slice(0, 8).map(node => {
          const config = typeConfig[node.type as keyof typeof typeConfig] || typeConfig.individual;
          const Icon = config.icon;
          return (
            <div 
              key={node.id}
              className="flex items-center gap-2 p-2 bg-zinc-900/50 text-sm"
            >
              <Icon className={`w-4 h-4 ${config.color}`} />
              <span className="text-zinc-300 truncate flex-1">{node.name}</span>
              <span className="text-xs text-zinc-400">{node.connections}</span>
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header & Stats */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Network className="w-6 h-6 text-zinc-300" />
            Affiliation Network
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {entityCount} entities • {edges.length} connections • {highConnectors} appear in 3+ investigations
          </p>
        </div>
        
        <div className="flex gap-2 ml-auto">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
            className="px-3 py-1.5 text-xs bg-zinc-900 border border-zinc-800 text-zinc-400 focus:outline-none focus:border-zinc-600"
          >
            <option value="connections">Most Connected</option>
            <option value="investigations">Most Investigations</option>
            <option value="name">Alphabetical</option>
          </select>
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
            placeholder="Search entities..."
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
        
        {/* Type Filter */}
        <div className="flex gap-1">
          {['all', 'individual', 'agency', 'corporation', 'organization'].map(type => {
            const isSelected = selectedType === type;
            const config = type === 'all' ? null : typeConfig[type as keyof typeof typeConfig];
            return (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-3 py-2 text-xs capitalize transition-colors ${
                  isSelected
                    ? 'bg-zinc-500/20 text-zinc-400 border border-zinc-600'
                    : 'bg-zinc-900 text-zinc-400 border border-zinc-800 hover:border-zinc-700'
                }`}
              >
                {type}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Results */}
      <div className="grid gap-3 md:grid-cols-2">
        {filteredNodes.length === 0 ? (
          <div className="col-span-2 text-center py-12 text-zinc-500">
            <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No entities matching your criteria</p>
          </div>
        ) : (
          filteredNodes.map(node => (
            <NetworkNodeCard
              key={node.id}
              node={node}
              edges={edges}
              allNodes={allNodes}
              isExpanded={expandedNodes.has(node.id)}
              onToggle={() => toggleExpanded(node.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

/**
 * Widget showing top connected entities
 */
export function TopConnectedEntities({ limit = 5 }: { limit?: number }) {
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <Network className="w-4 h-4" />
        Most Connected Entities
      </h3>
      <AffiliationNetworkGraph compact limit={limit} />
    </div>
  );
}
