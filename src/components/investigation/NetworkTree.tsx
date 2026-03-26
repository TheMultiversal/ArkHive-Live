'use client';

import React, { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown, Search, X, Maximize2, RotateCcw,
  Eye, EyeOff, Filter, Network, Building2, DollarSign,
  ArrowUpRight, Activity, Target, Shield,
  FoldVertical, UnfoldVertical, Crosshair,
} from 'lucide-react';

// ============================================================
// TYPES
// ============================================================

interface Defendant {
  name: string;
  role: string;
  status: string;
  charges?: string[];
  sentence?: string;
  fine?: string;
  restitution?: string;
  notes?: string;
}

interface Affiliation {
  id: string;
  name: string;
  type: 'individual' | 'agency' | 'corporation' | 'organization';
  relationship: string;
  href?: string;
}

interface MoneyTransaction {
  date: string;
  from: string;
  to: string;
  amount: string;
  purpose: string;
  documented: boolean;
}

interface InvestigationData {
  title: string;
  slug: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  defendants?: Defendant[];
  affiliations?: Affiliation[];
  moneyTrail?: MoneyTransaction[];
  timeline?: { date: string; event: string; type?: string }[];
}

type PersonTier =
  | 'Primary Defendant'
  | 'Co-Conspirator'
  | 'Regulator'
  | 'Politician'
  | 'Whistleblower'
  | 'Other';

type OrgTier = 'Corporation' | 'Agency' | 'Organization';

interface TreeNodeData {
  name: string;
  role?: string;
  tier: PersonTier | OrgTier;
  status?: string;
  charges?: string[];
  sentence?: string;
  fine?: string;
  restitution?: string;
  notes?: string;
  relationship?: string;
  href?: string;
  moneyIn?: MoneyTransaction[];
  moneyOut?: MoneyTransaction[];
  side: 'left' | 'right' | 'root';
  children?: TreeNodeData[];
  _children?: TreeNodeData[];
}

// ============================================================
// COLORS & CLASSIFICATION
// ============================================================

const PERSON_TIER_COLORS: Record<PersonTier, string> = {
  'Primary Defendant': '#d64545',
  'Co-Conspirator': '#b83030',
  'Regulator': '#6366f1',
  'Politician': '#8b5cf6',
  'Whistleblower': '#22d3ee',
  'Other': '#71717a',
};

const ORG_TIER_COLORS: Record<OrgTier, string> = {
  'Corporation': '#eab308',
  'Agency': '#3b82f6',
  'Organization': '#a855f7',
};

const STATUS_COLORS: Record<string, string> = {
  convicted: '#dc2626',
  incarcerated: '#b91c1c',
  indicted: '#ea580c',
  charged: '#d97706',
  pending: '#ca8a04',
  settled: '#71717a',
  acquitted: '#059669',
  pardoned: '#7c3aed',
  appealing: '#2563eb',
  released: '#525252',
};

function classifyPerson(def: Defendant | null, aff: Affiliation | null): PersonTier {
  if (def) {
    const role = def.role.toLowerCase();
    if (def.status === 'convicted' || def.status === 'incarcerated' || def.status === 'indicted' || def.status === 'charged') return 'Primary Defendant';
    if (role.includes('governor') || role.includes('senator') || role.includes('lieutenant') || role.includes('representative') || role.includes('commissioner') || role.includes('chair') || role.includes('chairman')) {
      if (role.includes('commission') || role.includes('puct') || role.includes('regulatory') || role.includes('puc')) return 'Regulator';
      return 'Politician';
    }
    if (role.includes('ceo') || role.includes('chief') || role.includes('president') || role.includes('director')) return 'Co-Conspirator';
    return 'Primary Defendant';
  }
  if (aff) {
    const rel = aff.relationship.toLowerCase();
    if (rel.includes('whistleblower') || rel.includes('exposed')) return 'Whistleblower';
    if (aff.type === 'individual') {
      if (rel.includes('regulat') || rel.includes('oversight') || rel.includes('enforcement')) return 'Regulator';
      if (rel.includes('governor') || rel.includes('senator') || rel.includes('politic')) return 'Politician';
      return 'Other';
    }
  }
  return 'Other';
}

function classifyOrg(aff: Affiliation): OrgTier {
  if (aff.type === 'corporation') return 'Corporation';
  if (aff.type === 'agency') return 'Agency';
  return 'Organization';
}

// ============================================================
// DATA BUILDER
// ============================================================

function buildTreeData(investigation: InvestigationData): TreeNodeData {
  const { defendants = [], affiliations = [], moneyTrail = [] } = investigation;

  const personMap = new Map<string, TreeNodeData>();

  for (const def of defendants) {
    const tier = classifyPerson(def, null);
    const matchingAff = affiliations.find(a => a.name === def.name && a.type === 'individual');
    personMap.set(def.name, {
      name: def.name,
      role: def.role,
      tier,
      status: def.status,
      charges: def.charges,
      sentence: def.sentence,
      fine: def.fine,
      restitution: (def as Defendant).restitution,
      notes: def.notes,
      relationship: matchingAff?.relationship,
      href: matchingAff?.href,
      moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      side: 'left',
    });
  }

  for (const aff of affiliations) {
    if (aff.type === 'individual' && !personMap.has(aff.name)) {
      const tier = classifyPerson(null, aff);
      personMap.set(aff.name, {
        name: aff.name,
        role: aff.relationship,
        tier,
        relationship: aff.relationship,
        href: aff.href,
        moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(aff.name.split(' ').pop()!.toLowerCase())),
        moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(aff.name.split(' ').pop()!.toLowerCase())),
        side: 'left',
      });
    }
  }

  const personsByTier = new Map<PersonTier, TreeNodeData[]>();
  for (const person of personMap.values()) {
    const tier = person.tier as PersonTier;
    if (!personsByTier.has(tier)) personsByTier.set(tier, []);
    personsByTier.get(tier)!.push(person);
  }

  const personTierOrder: PersonTier[] = ['Primary Defendant', 'Co-Conspirator', 'Politician', 'Regulator', 'Whistleblower', 'Other'];
  const personGroups: TreeNodeData[] = personTierOrder
    .filter(tier => personsByTier.has(tier))
    .map(tier => ({
      name: tier,
      tier,
      side: 'left' as const,
      children: personsByTier.get(tier)!,
    }));

  const orgAffs = affiliations.filter(a => a.type !== 'individual');
  const orgsByTier = new Map<OrgTier, TreeNodeData[]>();
  for (const aff of orgAffs) {
    const tier = classifyOrg(aff);
    if (!orgsByTier.has(tier)) orgsByTier.set(tier, []);
    orgsByTier.get(tier)!.push({
      name: aff.name,
      role: aff.relationship,
      tier,
      relationship: aff.relationship,
      href: aff.href,
      moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(aff.name.toLowerCase())),
      moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(aff.name.toLowerCase())),
      side: 'right',
    });
  }

  const orgTierOrder: OrgTier[] = ['Corporation', 'Agency', 'Organization'];
  const orgGroups: TreeNodeData[] = orgTierOrder
    .filter(tier => orgsByTier.has(tier))
    .map(tier => ({
      name: tier,
      tier,
      side: 'right' as const,
      children: orgsByTier.get(tier)!,
    }));

  return {
    name: investigation.title,
    tier: 'Other',
    side: 'root',
    children: [
      { name: 'People', tier: 'Other', side: 'left', children: personGroups },
      { name: 'Organizations', tier: 'Other', side: 'right', children: orgGroups },
    ],
  };
}

// ============================================================
// COLLAPSIBLE GLASS PANEL
// ============================================================

function GlassPanel({
  title,
  icon,
  defaultOpen = true,
  badge,
  children,
  className = '',
}: {
  title: string;
  icon: React.ReactNode;
  defaultOpen?: boolean;
  badge?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className={`glass-card ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-2.5">
          <span className="text-red-400 flex-shrink-0">{icon}</span>
          <span className="text-sm font-bold text-white uppercase tracking-wider">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          {badge}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </motion.div>
        </div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4 border-t border-[rgba(184,0,0,0.10)] pt-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// SLUGIFY
// ============================================================

function slugifyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ============================================================
// NETWORK TREE COMPONENT
// ============================================================

interface NetworkTreeProps {
  investigation: InvestigationData;
}

export default function NetworkTree({ investigation }: NetworkTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 600 });

  // Controls
  const [depth, setDepth] = useState(3);
  const [showPeople, setShowPeople] = useState(true);
  const [showOrgs, setShowOrgs] = useState(true);
  const [filterTier, setFilterTier] = useState<string>('all');
  const [nodeScale, setNodeScale] = useState(80);
  const [linkOpacity, setLinkOpacity] = useState(60);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState(0);

  // Expand/collapse state (path-based)
  const [collapsedPaths, setCollapsedPaths] = useState<Set<string>>(new Set());
  const [expandedPaths, setExpandedPaths] = useState<Set<string>>(new Set());

  // Selection & tooltip
  const [selectedNode, setSelectedNode] = useState<TreeNodeData | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: TreeNodeData } | null>(null);

  // Stats
  const [stats, setStats] = useState({ total: 0, people: 0, orgs: 0 });

  // Build tree data
  const treeData = useMemo(() => buildTreeData(investigation), [investigation]);

  // Available tiers
  const availableTiers = useMemo(() => {
    const tiers = new Set<string>();
    function walk(node: TreeNodeData) {
      if (node.side === 'left' && node.tier && node.tier !== 'Other' && !node.children?.some(c => c.children)) {
        tiers.add(node.tier);
      }
      node.children?.forEach(walk);
    }
    walk(treeData);
    return Array.from(tiers);
  }, [treeData]);

  // Derived data for detail panels
  const defendants = investigation.defendants || [];
  const affiliations = investigation.affiliations || [];
  const orgAffiliations = affiliations.filter(a => a.type !== 'individual');
  const moneyTrail = investigation.moneyTrail || [];

  const tierCounts = useMemo(() => {
    const map = new Map<string, number>();
    defendants.forEach(d => {
      const tier = classifyPerson(d, null);
      map.set(tier, (map.get(tier) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [defendants]);

  const statusCounts = useMemo(() => {
    const map = new Map<string, number>();
    defendants.forEach(d => {
      map.set(d.status, (map.get(d.status) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [defendants]);

  // Reset manual overrides when depth slider changes
  useEffect(() => {
    setCollapsedPaths(new Set());
    setExpandedPaths(new Set());
  }, [depth]);

  // Resize observer
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) setDimensions({ width, height });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  // ============================================================
  // D3 RENDER
  // ============================================================

  const renderTree = useCallback(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const { width, height } = dimensions;
    const centerX = width / 2;
    const centerY = height / 2;
    const scale = nodeScale / 100;

    const g = svg.append('g').attr('class', 'tree-container');

    // Zoom
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.15, 5])
      .on('zoom', (event) => g.attr('transform', event.transform.toString()));
    svg.call(zoom);

    // Defs
    const defs = svg.append('defs');

    const gridPattern = defs.append('pattern')
      .attr('id', 'net-grid').attr('width', 40).attr('height', 40)
      .attr('patternUnits', 'userSpaceOnUse');
    gridPattern.append('rect').attr('width', 40).attr('height', 40).attr('fill', 'none');
    gridPattern.append('path')
      .attr('d', 'M 40 0 L 0 0 0 40')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(184, 0, 0, 0.04)')
      .attr('stroke-width', 0.5);

    svg.insert('rect', ':first-child')
      .attr('width', '100%').attr('height', '100%').attr('fill', '#020202');
    svg.insert('rect', 'g')
      .attr('width', '100%').attr('height', '100%').attr('fill', 'url(#net-grid)');

    // Glow filters
    const makeGlow = (id: string, blur: number) => {
      const f = defs.append('filter').attr('id', id);
      f.append('feGaussianBlur').attr('stdDeviation', String(blur)).attr('result', 'glow');
      const m = f.append('feMerge');
      m.append('feMergeNode').attr('in', 'glow');
      m.append('feMergeNode').attr('in', 'SourceGraphic');
      return f;
    };

    makeGlow('search-glow', 6);
    makeGlow('select-glow', 5);
    const pulseFilter = makeGlow('pulse-glow', 3);
    pulseFilter.select('feGaussianBlur')
      .append('animate')
      .attr('attributeName', 'stdDeviation')
      .attr('values', '3;6;3')
      .attr('dur', '2s')
      .attr('repeatCount', 'indefinite');

    // Deep clone
    function deepClone(node: TreeNodeData): TreeNodeData {
      return { ...node, children: node.children?.map(deepClone), _children: node._children?.map(deepClone) };
    }

    const rootData = deepClone(treeData);
    const leftData = rootData.children?.[0];
    const rightData = rootData.children?.[1];
    if (!leftData || !rightData) return;

    // Apply visibility based on depth + manual overrides
    function applyVisibility(node: TreeNodeData, parentPath: string, currentDepth: number): void {
      const allChildren = node.children || node._children;
      if (!allChildren || allChildren.length === 0) return;

      const nodePath = parentPath ? `${parentPath}/${node.name}` : node.name;
      const isCollapsed = collapsedPaths.has(nodePath);
      const isExpanded = expandedPaths.has(nodePath);

      if (isCollapsed) {
        node._children = allChildren;
        node.children = undefined;
        return;
      }

      if (isExpanded || currentDepth < depth) {
        node.children = allChildren;
        node._children = undefined;
        for (const child of allChildren) {
          applyVisibility(child, nodePath, currentDepth + 1);
        }
      } else {
        node._children = allChildren;
        node.children = undefined;
      }
    }

    applyVisibility(leftData, '', 0);
    applyVisibility(rightData, '', 0);

    // Apply filters
    function filterNodes(node: TreeNodeData, side: 'left' | 'right'): TreeNodeData | null {
      if (side === 'left' && !showPeople) return null;
      if (side === 'right' && !showOrgs) return null;

      if (node.children) {
        const filtered = node.children.map(c => filterNodes(c, side)).filter(Boolean) as TreeNodeData[];
        if (filterTier !== 'all' && side === 'left') {
          const tierFiltered = filtered.filter(c => {
            if (c.children) return c.children.length > 0;
            return c.tier === filterTier;
          });
          if (tierFiltered.length === 0 && node.tier !== filterTier && node.name !== 'People') return null;
          return { ...node, children: tierFiltered.length > 0 ? tierFiltered : undefined };
        }
        return filtered.length > 0 ? { ...node, children: filtered } : { ...node, children: undefined };
      }

      if (filterTier !== 'all' && side === 'left' && node.tier !== filterTier) return null;
      return node;
    }

    const filteredLeft = filterNodes(leftData, 'left');
    const filteredRight = filterNodes(rightData, 'right');

    // Layout settings
    const treeHeight = Math.max(height - 80, 400);
    const treeSideWidth = Math.max((width / 2) - 140, 200);
    let totalPeople = 0;
    let totalOrgs = 0;

    function countLeaves(node: TreeNodeData, side: 'left' | 'right') {
      if (!node.children || node.children.length === 0) {
        if (side === 'left') totalPeople++;
        else totalOrgs++;
      }
      node.children?.forEach(c => countLeaves(c, side));
    }

    function getNodePath(d: d3.HierarchyNode<TreeNodeData>): string {
      return d.ancestors().reverse().map(a => (a.data as TreeNodeData).name).join('/');
    }

    const selectedName = selectedNode?.name || null;

    // === RENDER SIDE HELPER ===
    function renderSide(
      data: TreeNodeData | null,
      side: 'left' | 'right',
    ) {
      if (!data) return;

      const hierarchy = d3.hierarchy(data, d => d.children);
      const layout = d3.tree<TreeNodeData>().size([treeHeight, treeSideWidth]);
      layout(hierarchy);

      countLeaves(data, side);

      // Position nodes
      hierarchy.each(d => {
        const point = d as d3.HierarchyPointNode<TreeNodeData>;
        if (side === 'left') {
          point.y = centerX - point.y;
        } else {
          point.y = centerX + point.y;
        }
      });

      const tierColors = side === 'left' ? PERSON_TIER_COLORS : ORG_TIER_COLORS;
      const branchLabel = side === 'left' ? 'People' : 'Organizations';
      const branchStroke = side === 'left' ? '#d64545' : '#eab308';

      // Links
      g.append('g').attr('class', `${side}-links`)
        .selectAll('path')
        .data(hierarchy.links())
        .join('path')
        .attr('d', d => {
          const s = d.source as d3.HierarchyPointNode<TreeNodeData>;
          const t = d.target as d3.HierarchyPointNode<TreeNodeData>;
          return `M${s.y},${s.x} C${(s.y + t.y) / 2},${s.x} ${(s.y + t.y) / 2},${t.x} ${t.y},${t.x}`;
        })
        .attr('fill', 'none')
        .attr('stroke', d => {
          const tier = (d.target.data as TreeNodeData).tier;
          return (tierColors as Record<string, string>)[tier] || '#444';
        })
        .attr('stroke-opacity', linkOpacity / 100)
        .attr('stroke-width', 1.5);

      // Nodes
      const nodeGroups = g.append('g').attr('class', `${side}-nodes`)
        .selectAll('g')
        .data(hierarchy.descendants())
        .join('g')
        .attr('transform', d => {
          const p = d as d3.HierarchyPointNode<TreeNodeData>;
          return `translate(${p.y},${p.x})`;
        })
        .attr('cursor', 'pointer');

      // Circles
      nodeGroups.append('circle')
        .attr('r', d => {
          const data = d.data as TreeNodeData;
          if (data.name === branchLabel) return 14 * scale;
          if (data.children || data._children) return 10 * scale;
          return 8 * scale;
        })
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (data.name === branchLabel) return '#0a0000';
          const color = (tierColors as Record<string, string>)[data.tier];
          return color ? `${color}33` : '#1a1a1a';
        })
        .attr('stroke', d => {
          const data = d.data as TreeNodeData;
          if (selectedName && data.name === selectedName) return '#ffffff';
          if (data.name === branchLabel) return branchStroke;
          if (data.status) return STATUS_COLORS[data.status] || '#555';
          return (tierColors as Record<string, string>)[data.tier] || '#555';
        })
        .attr('stroke-width', d => {
          const data = d.data as TreeNodeData;
          if (selectedName && data.name === selectedName) return 3;
          if (data.status === 'convicted' || data.status === 'incarcerated') return 3;
          return 2;
        })
        .attr('filter', d => {
          const data = d.data as TreeNodeData;
          if (selectedName && data.name === selectedName) return 'url(#select-glow)';
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return 'url(#search-glow)';
          if (data.status === 'pending') return 'url(#pulse-glow)';
          return 'none';
        });

      // Labels
      nodeGroups.append('text')
        .attr('dx', d => {
          const data = d.data as TreeNodeData;
          const r = data.name === branchLabel ? 14 : (data.children || data._children) ? 10 : 8;
          return side === 'left' ? -(r * scale + 8) : (r * scale + 8);
        })
        .attr('dy', 4)
        .attr('text-anchor', side === 'left' ? 'end' : 'start')
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (selectedName && data.name === selectedName) return '#ffffff';
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return '#f97316';
          return '#e4e4e7';
        })
        .attr('font-size', d => {
          const data = d.data as TreeNodeData;
          if (data.name === branchLabel) return `${13 * scale}px`;
          if (data.children || data._children) return `${11 * scale}px`;
          return `${10 * scale}px`;
        })
        .attr('font-family', 'monospace')
        .attr('font-weight', d => {
          const data = d.data as TreeNodeData;
          return (data.children || data._children || data.name === branchLabel) ? 'bold' : 'normal';
        })
        .text(d => {
          const name = (d.data as TreeNodeData).name;
          const maxLen = side === 'left' ? 28 : 32;
          return name.length > maxLen ? name.substring(0, maxLen - 2) + '..' : name;
        });

      // Collapsed indicator (+) and status dots
      nodeGroups.each(function (d) {
        const data = d.data as TreeNodeData;
        if (data._children && data._children.length > 0) {
          d3.select(this).append('text')
            .attr('x', 0).attr('y', 4)
            .attr('text-anchor', 'middle')
            .attr('fill', side === 'left' ? '#d64545' : '#eab308')
            .attr('font-size', `${12 * scale}px`)
            .attr('font-weight', 'bold')
            .text('+');
        }
        if (data.status) {
          const r = (data.children || data._children) ? 10 : 8;
          const xOff = side === 'left' ? (r * scale + 2) : -(r * scale + 2);
          d3.select(this).append('circle')
            .attr('r', 3 * scale)
            .attr('cx', xOff)
            .attr('cy', -(6 * scale))
            .attr('fill', STATUS_COLORS[data.status] || '#555');
        }
      });

      // Click handlers
      nodeGroups.on('click', function (event, d) {
        event.stopPropagation();
        const data = d.data as TreeNodeData;
        const path = getNodePath(d);

        if (data.children || data._children) {
          const hasVisible = !!data.children;
          if (hasVisible) {
            setCollapsedPaths(prev => { const s = new Set(prev); s.add(path); return s; });
            setExpandedPaths(prev => { const s = new Set(prev); s.delete(path); return s; });
          } else {
            setExpandedPaths(prev => { const s = new Set(prev); s.add(path); return s; });
            setCollapsedPaths(prev => { const s = new Set(prev); s.delete(path); return s; });
          }
        }

        if (data.name !== branchLabel) {
          setSelectedNode(data);
        }
      });

      // Tooltip on hover
      nodeGroups.on('mouseenter', function (event, d) {
        const data = d.data as TreeNodeData;
        if (data.name === branchLabel || (data.children && !data.role)) return;
        const [x, y] = d3.pointer(event, containerRef.current);
        setTooltip({ x, y, data });
      });
      nodeGroups.on('mouseleave', () => setTooltip(null));
    }

    // Render both sides
    if (showPeople) renderSide(filteredLeft, 'left');
    if (showOrgs) renderSide(filteredRight, 'right');

    // === ROOT NODE ===
    const severityColor = { critical: '#dc2626', high: '#ea580c', medium: '#ca8a04', low: '#71717a' }[investigation.severity] || '#dc2626';
    const rootGroup = g.append('g').attr('transform', `translate(${centerX}, ${centerY})`);

    rootGroup.append('circle')
      .attr('r', 24 * scale).attr('fill', 'none').attr('stroke', severityColor)
      .attr('stroke-width', 1).attr('stroke-opacity', 0.3)
      .append('animate')
      .attr('attributeName', 'r')
      .attr('values', `${24 * scale};${30 * scale};${24 * scale}`)
      .attr('dur', '3s').attr('repeatCount', 'indefinite');

    rootGroup.append('circle')
      .attr('r', 20 * scale).attr('fill', '#0a0000')
      .attr('stroke', severityColor).attr('stroke-width', 2.5);

    rootGroup.append('text')
      .attr('y', -(24 * scale + 10)).attr('text-anchor', 'middle')
      .attr('fill', '#ffffff').attr('font-size', `${11 * scale}px`)
      .attr('font-family', 'monospace').attr('font-weight', 'bold')
      .text(investigation.title.length > 50 ? investigation.title.substring(0, 48) + '..' : investigation.title);

    rootGroup.append('text')
      .attr('y', 24 * scale + 16).attr('text-anchor', 'middle')
      .attr('fill', severityColor).attr('font-size', `${9 * scale}px`)
      .attr('font-family', 'monospace').attr('font-weight', 'bold')
      .attr('letter-spacing', '0.15em')
      .text(`SEVERITY: ${investigation.severity.toUpperCase()}`);

    const crossLen = 30 * scale;
    rootGroup.append('line').attr('x1', -crossLen).attr('x2', crossLen).attr('y1', 0).attr('y2', 0)
      .attr('stroke', severityColor).attr('stroke-width', 0.5).attr('stroke-opacity', 0.2);
    rootGroup.append('line').attr('x1', 0).attr('x2', 0).attr('y1', -crossLen).attr('y2', crossLen)
      .attr('stroke', severityColor).attr('stroke-width', 0.5).attr('stroke-opacity', 0.2);

    // Stats
    setStats({ total: totalPeople + totalOrgs, people: totalPeople, orgs: totalOrgs });

    // Search matches
    if (searchQuery) {
      let matches = 0;
      function countMatches(node: TreeNodeData) {
        if (node.name.toLowerCase().includes(searchQuery.toLowerCase())) matches++;
        node.children?.forEach(countMatches);
        node._children?.forEach(countMatches);
      }
      countMatches(treeData);
      setSearchMatches(matches);
    } else {
      setSearchMatches(0);
    }

    // Auto-fit zoom
    const bounds = (g.node() as SVGGElement)?.getBBox();
    if (bounds) {
      const fullWidth = bounds.width + 100;
      const fullHeight = bounds.height + 100;
      const s = Math.min(width / fullWidth, height / fullHeight, 1);
      const tx = (width - fullWidth * s) / 2 - bounds.x * s;
      const ty = (height - fullHeight * s) / 2 - bounds.y * s;
      svg.call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
    }

  }, [dimensions, treeData, depth, showPeople, showOrgs, filterTier, nodeScale, linkOpacity, searchQuery, collapsedPaths, expandedPaths, selectedNode, investigation.severity, investigation.title]);

  useEffect(() => { renderTree(); }, [renderTree]);

  // ============================================================
  // ACTIONS
  // ============================================================

  const fitView = useCallback(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const g = svg.select('.tree-container');
    const bounds = (g.node() as SVGGElement)?.getBBox();
    if (!bounds) return;
    const { width, height } = dimensions;
    const fullWidth = bounds.width + 100;
    const fullHeight = bounds.height + 100;
    const s = Math.min(width / fullWidth, height / fullHeight, 1);
    const tx = (width - fullWidth * s) / 2 - bounds.x * s;
    const ty = (height - fullHeight * s) / 2 - bounds.y * s;
    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.15, 5]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (svg.transition().duration(500) as any).call(zoom.transform, d3.zoomIdentity.translate(tx, ty).scale(s));
  }, [dimensions]);

  const expandAll = useCallback(() => {
    setCollapsedPaths(new Set());
    setExpandedPaths(new Set());
    setDepth(3);
  }, []);

  const collapseAll = useCallback(() => {
    setCollapsedPaths(new Set());
    setExpandedPaths(new Set());
    setDepth(1);
  }, []);

  const resetAll = useCallback(() => {
    setDepth(3);
    setShowPeople(true);
    setShowOrgs(true);
    setFilterTier('all');
    setNodeScale(80);
    setLinkOpacity(60);
    setSearchQuery('');
    setSelectedNode(null);
    setCollapsedPaths(new Set());
    setExpandedPaths(new Set());
  }, []);

  const selectDefendant = useCallback((def: Defendant) => {
    const tier = classifyPerson(def, null);
    const matchingAff = investigation.affiliations?.find(a => a.name === def.name && a.type === 'individual');
    setSelectedNode({
      name: def.name,
      role: def.role,
      tier,
      status: def.status,
      charges: def.charges,
      sentence: def.sentence,
      fine: def.fine,
      restitution: def.restitution,
      notes: def.notes,
      href: matchingAff?.href,
      moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      side: 'left',
    });
    setExpandedPaths(prev => { const s = new Set(prev); s.add('People'); s.add(`People/${tier}`); return s; });
    setCollapsedPaths(prev => { const s = new Set(prev); s.delete('People'); s.delete(`People/${tier}`); return s; });
  }, [investigation.affiliations, moneyTrail]);

  const selectOrg = useCallback((aff: Affiliation) => {
    const tier = classifyOrg(aff);
    setSelectedNode({
      name: aff.name,
      role: aff.relationship,
      tier,
      relationship: aff.relationship,
      href: aff.href,
      moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(aff.name.toLowerCase())),
      moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(aff.name.toLowerCase())),
      side: 'right',
    });
    setExpandedPaths(prev => { const s = new Set(prev); s.add('Organizations'); s.add(`Organizations/${tier}`); return s; });
    setCollapsedPaths(prev => { const s = new Set(prev); s.delete('Organizations'); s.delete(`Organizations/${tier}`); return s; });
  }, [moneyTrail]);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="mb-8 space-y-4"
    >
      {/* === HEADER + SEARCH === */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Network className="w-5 h-5 text-red-400" />
              Network Analysis
            </h2>
            <p className="text-xs text-zinc-500 font-mono tracking-wider mt-1">
              DUAL-TREE VISUALIZATION // CLICK NODES TO EXPAND // DRAG TO PAN // SCROLL TO ZOOM
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search nodes..."
              className="w-full bg-[#050505] border border-[rgba(184,0,0,0.20)] text-zinc-300 text-sm font-mono pl-10 pr-20 py-2.5 focus:border-red-700/50 focus:outline-none placeholder:text-zinc-700"
            />
            {searchQuery && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-orange-400">{searchMatches} found</span>
                <button onClick={() => setSearchQuery('')} className="text-zinc-600 hover:text-white">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === MAIN GRID: Controls | Tree | Legend + Details === */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-4">

        {/* ---- LEFT COLUMN ---- */}
        <div className="space-y-4">

          {/* Controls Panel */}
          <GlassPanel title="Controls" icon={<Filter className="w-4 h-4" />}>
            <div className="space-y-4">
              {/* Depth */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Depth</label>
                  <span className="text-[10px] text-zinc-400 font-mono">{depth}</span>
                </div>
                <input type="range" min={1} max={3} step={1} value={depth}
                  onChange={(e) => setDepth(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600" />
              </div>

              {/* People / Orgs toggles */}
              <div className="flex gap-2">
                <button onClick={() => setShowPeople(!showPeople)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showPeople ? 'border-red-800/40 text-red-400 bg-red-950/20' : 'border-zinc-800 text-zinc-600'
                  }`}>
                  {showPeople ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  People
                </button>
                <button onClick={() => setShowOrgs(!showOrgs)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showOrgs ? 'border-yellow-800/40 text-yellow-400 bg-yellow-950/20' : 'border-zinc-800 text-zinc-600'
                  }`}>
                  {showOrgs ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
                  Orgs
                </button>
              </div>

              {/* Filter Tier */}
              <div>
                <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-1.5">Filter Tier</label>
                <select value={filterTier} onChange={(e) => setFilterTier(e.target.value)}
                  className="w-full bg-[#050505] border border-zinc-800 text-zinc-300 text-[11px] px-2.5 py-2 font-mono focus:border-red-800/50 focus:outline-none">
                  <option value="all">All Tiers</option>
                  {availableTiers.map(tier => <option key={tier} value={tier}>{tier}</option>)}
                </select>
              </div>

              {/* Node Size */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Node Size</label>
                  <span className="text-[10px] text-zinc-400 font-mono">{nodeScale}%</span>
                </div>
                <input type="range" min={60} max={100} step={5} value={nodeScale}
                  onChange={(e) => setNodeScale(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600" />
              </div>

              {/* Link Opacity */}
              <div>
                <div className="flex justify-between mb-1.5">
                  <label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Link Opacity</label>
                  <span className="text-[10px] text-zinc-400 font-mono">{linkOpacity}%</span>
                </div>
                <input type="range" min={10} max={100} step={5} value={linkOpacity}
                  onChange={(e) => setLinkOpacity(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600" />
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-2">
                <button onClick={fitView}
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider py-2 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
                  <Maximize2 className="w-3.5 h-3.5" /> Fit
                </button>
                <button onClick={resetAll}
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider py-2 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
                  <RotateCcw className="w-3.5 h-3.5" /> Reset
                </button>
                <button onClick={expandAll}
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider py-2 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
                  <UnfoldVertical className="w-3.5 h-3.5" /> Open All
                </button>
                <button onClick={collapseAll}
                  className="flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider py-2 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all">
                  <FoldVertical className="w-3.5 h-3.5" /> Collapse
                </button>
              </div>
            </div>
          </GlassPanel>

          {/* Statistics Panel */}
          <GlassPanel title="Statistics" icon={<Activity className="w-4 h-4" />}
            badge={<span className="text-[9px] px-1.5 py-0.5 bg-red-950/30 border border-red-900/30 text-red-400 font-mono">{stats.total}</span>}>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-[#050505] border border-[rgba(184,0,0,0.10)]">
                  <div className="text-lg font-black text-white font-mono">{stats.total}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider">Total</div>
                </div>
                <div className="text-center p-2 bg-[#050505] border border-[rgba(184,0,0,0.10)]">
                  <div className="text-lg font-black text-red-400 font-mono">{stats.people}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider">People</div>
                </div>
                <div className="text-center p-2 bg-[#050505] border border-[rgba(184,0,0,0.10)]">
                  <div className="text-lg font-black text-yellow-400 font-mono">{stats.orgs}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider">Orgs</div>
                </div>
              </div>

              {tierCounts.length > 0 && (
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1.5">By Tier</p>
                  {tierCounts.map(([tier, count]) => (
                    <div key={tier} className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 flex-shrink-0" style={{ backgroundColor: PERSON_TIER_COLORS[tier as PersonTier] || '#555' }} />
                        <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                      </div>
                      <span className="text-[10px] text-zinc-300 font-mono font-bold">{count}</span>
                    </div>
                  ))}
                </div>
              )}

              {statusCounts.length > 0 && (
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1.5">By Status</p>
                  {statusCounts.map(([status, count]) => (
                    <div key={status} className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: STATUS_COLORS[status] || '#555' }} />
                        <span className="text-[10px] text-zinc-400 font-mono capitalize">{status}</span>
                      </div>
                      <span className="text-[10px] text-zinc-300 font-mono font-bold">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </GlassPanel>
        </div>

        {/* ---- CENTER: TREE SVG ---- */}
        <div ref={containerRef} className="glass-card p-0 relative overflow-hidden" style={{ minHeight: '600px' }}>
          <svg
            ref={svgRef}
            width={dimensions.width}
            height={dimensions.height}
            className="w-full h-full"
          />

          {/* Tooltip overlay */}
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="absolute z-30 pointer-events-none"
                style={{
                  left: Math.min(tooltip.x + 16, dimensions.width - 260),
                  top: Math.min(tooltip.y - 10, dimensions.height - 120),
                  maxWidth: '250px',
                }}
              >
                <div className="bg-[#0a0a0a] border border-[rgba(184,0,0,0.40)] p-3 shadow-2xl">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="font-bold text-white text-xs font-mono">{tooltip.data.name}</span>
                    {tooltip.data.status && (
                      <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase border"
                        style={{ color: STATUS_COLORS[tooltip.data.status] || '#777', borderColor: `${STATUS_COLORS[tooltip.data.status] || '#777'}60` }}>
                        {tooltip.data.status}
                      </span>
                    )}
                  </div>
                  {tooltip.data.role && <p className="text-[10px] text-zinc-400 leading-relaxed">{tooltip.data.role}</p>}
                  <p className="text-[9px] text-red-400/50 mt-1 font-mono">Click for full details</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ---- RIGHT COLUMN ---- */}
        <div className="space-y-4">

          {/* Legend Panel */}
          <GlassPanel title="Legend" icon={<Shield className="w-4 h-4" />}>
            <div className="space-y-3">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">People Tiers</p>
                {(Object.entries(PERSON_TIER_COLORS) as [PersonTier, string][])
                  .filter(([tier]) => availableTiers.includes(tier))
                  .map(([tier, color]) => (
                    <div key={tier} className="flex items-center gap-2 py-0.5">
                      <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color }} />
                      <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                    </div>
                  ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Organization Types</p>
                {(Object.entries(ORG_TIER_COLORS) as [OrgTier, string][]).map(([tier, color]) => (
                  <div key={tier} className="flex items-center gap-2 py-0.5">
                    <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Defendant Status</p>
                {Object.entries(STATUS_COLORS).map(([status, color]) => (
                  <div key={status} className="flex items-center gap-2 py-0.5">
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                    <span className="text-[10px] text-zinc-500 font-mono capitalize">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </GlassPanel>

          {/* Selected Node Details Panel */}
          <GlassPanel title="Node Details" icon={<Target className="w-4 h-4" />}
            badge={selectedNode ? <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> : undefined}>
            {selectedNode ? (
              <div className="space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{selectedNode.name}</h4>
                    {selectedNode.status && (
                      <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase border flex-shrink-0"
                        style={{ color: STATUS_COLORS[selectedNode.status] || '#777', borderColor: `${STATUS_COLORS[selectedNode.status] || '#777'}60` }}>
                        {selectedNode.status}
                      </span>
                    )}
                  </div>
                  {selectedNode.role && <p className="text-[11px] text-zinc-400 leading-relaxed">{selectedNode.role}</p>}
                  <div className="flex items-center gap-2 mt-1.5">
                    <span className="text-[9px] px-1.5 py-0.5 border font-bold uppercase"
                      style={{
                        color: (PERSON_TIER_COLORS[selectedNode.tier as PersonTier] || ORG_TIER_COLORS[selectedNode.tier as OrgTier] || '#555'),
                        borderColor: `${PERSON_TIER_COLORS[selectedNode.tier as PersonTier] || ORG_TIER_COLORS[selectedNode.tier as OrgTier] || '#555'}40`,
                      }}>
                      {selectedNode.tier}
                    </span>
                  </div>
                </div>

                {selectedNode.charges && selectedNode.charges.length > 0 && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Charges</p>
                    {selectedNode.charges.map((c, i) => (
                      <p key={i} className="text-[10px] text-red-400/80 py-0.5 flex items-start gap-1.5">
                        <span className="text-red-600 mt-0.5 flex-shrink-0">&#9632;</span> {c}
                      </p>
                    ))}
                  </div>
                )}

                {selectedNode.sentence && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Outcome</p>
                    <p className="text-[11px] text-zinc-300">{selectedNode.sentence}</p>
                  </div>
                )}

                {selectedNode.fine && (
                  <div>
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Fine</p>
                    <p className="text-[11px] text-yellow-400/80">{selectedNode.fine}</p>
                  </div>
                )}

                {selectedNode.restitution && (
                  <div>
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Restitution</p>
                    <p className="text-[11px] text-yellow-400/80">{selectedNode.restitution}</p>
                  </div>
                )}

                {selectedNode.notes && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Notes</p>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{selectedNode.notes}</p>
                  </div>
                )}

                {selectedNode.relationship && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Relationship</p>
                    <p className="text-[11px] text-zinc-400 leading-relaxed">{selectedNode.relationship}</p>
                  </div>
                )}

                {(selectedNode.moneyIn?.length || selectedNode.moneyOut?.length) ? (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Financial Connections</p>
                    {selectedNode.moneyIn?.map((m, i) => (
                      <p key={`in-${i}`} className="text-[10px] text-green-400/70 py-0.5">
                        IN: {m.amount} from {m.from}
                      </p>
                    ))}
                    {selectedNode.moneyOut?.map((m, i) => (
                      <p key={`out-${i}`} className="text-[10px] text-red-400/70 py-0.5">
                        OUT: {m.amount} to {m.to}
                      </p>
                    ))}
                  </div>
                ) : null}

                {selectedNode.href && (
                  <Link
                    href={selectedNode.href}
                    className="flex items-center gap-2 text-[11px] text-red-400 hover:text-red-300 font-mono pt-2 border-t border-[rgba(255,255,255,0.04)]"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" /> View Entity Page
                  </Link>
                )}
              </div>
            ) : (
              <p className="text-[11px] text-zinc-600 italic">Click a node in the tree to view full details here.</p>
            )}
          </GlassPanel>
        </div>
      </div>

      {/* === BOTTOM ROW: Detail Rosters === */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {/* Defendant Roster */}
        {defendants.length > 0 && (
          <GlassPanel title="Defendant Roster" icon={<Crosshair className="w-4 h-4" />}
            badge={<span className="text-[9px] px-1.5 py-0.5 bg-red-950/30 border border-red-900/30 text-red-400 font-mono">{defendants.length}</span>}>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(184,0,0,0.2) transparent' }}>
              {defendants.map((def, idx) => (
                <button
                  key={idx}
                  onClick={() => selectDefendant(def)}
                  className={`w-full text-left p-3 border transition-all ${
                    selectedNode?.name === def.name
                      ? 'bg-red-950/20 border-red-800/40'
                      : 'bg-[#050505] border-[rgba(184,0,0,0.10)] hover:border-[rgba(184,0,0,0.30)]'
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <span className="text-[11px] font-bold text-white">{def.name}</span>
                    <span className="text-[8px] px-1 py-0.5 border font-bold uppercase flex-shrink-0"
                      style={{ color: STATUS_COLORS[def.status] || '#777', borderColor: `${STATUS_COLORS[def.status] || '#777'}40` }}>
                      {def.status}
                    </span>
                  </div>
                  <p className="text-[10px] text-zinc-500 leading-relaxed">{def.role}</p>
                  {def.charges && def.charges.length > 0 && (
                    <p className="text-[9px] text-red-400/50 mt-1">{def.charges.length} charge{def.charges.length !== 1 ? 's' : ''}</p>
                  )}
                </button>
              ))}
            </div>
          </GlassPanel>
        )}

        {/* Organization Directory */}
        {orgAffiliations.length > 0 && (
          <GlassPanel title="Organization Directory" icon={<Building2 className="w-4 h-4" />}
            badge={<span className="text-[9px] px-1.5 py-0.5 bg-yellow-950/30 border border-yellow-900/30 text-yellow-400 font-mono">{orgAffiliations.length}</span>}>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(184,0,0,0.2) transparent' }}>
              {orgAffiliations.map((aff, idx) => {
                const tier = classifyOrg(aff);
                const color = ORG_TIER_COLORS[tier];
                return (
                  <button
                    key={idx}
                    onClick={() => selectOrg(aff)}
                    className={`w-full text-left p-3 border transition-all ${
                      selectedNode?.name === aff.name
                        ? 'bg-yellow-950/10 border-yellow-800/30'
                        : 'bg-[#050505] border-[rgba(184,0,0,0.10)] hover:border-[rgba(184,0,0,0.30)]'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="text-[11px] font-bold text-white">{aff.name}</span>
                      <span className="text-[8px] px-1 py-0.5 border font-bold uppercase flex-shrink-0"
                        style={{ color, borderColor: `${color}40` }}>
                        {aff.type}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500 leading-relaxed">{aff.relationship}</p>
                  </button>
                );
              })}
            </div>
          </GlassPanel>
        )}

        {/* Money Trail */}
        {moneyTrail.length > 0 && (
          <GlassPanel title="Money Trail" icon={<DollarSign className="w-4 h-4" />}
            badge={<span className="text-[9px] px-1.5 py-0.5 bg-green-950/30 border border-green-900/30 text-green-400 font-mono">{moneyTrail.length}</span>}>
            <div className="space-y-2 max-h-80 overflow-y-auto pr-1" style={{ scrollbarWidth: 'thin', scrollbarColor: 'rgba(184,0,0,0.2) transparent' }}>
              {moneyTrail.map((tx, idx) => (
                <div key={idx} className="p-3 bg-[#050505] border border-[rgba(184,0,0,0.10)]">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] text-zinc-500 font-mono">{tx.date}</span>
                    <span className="text-[11px] font-bold text-white font-mono">{tx.amount}</span>
                  </div>
                  <div className="text-[10px] mb-0.5">
                    <span className="text-zinc-600">From: </span>
                    <span className="text-zinc-300">{tx.from}</span>
                  </div>
                  <div className="text-[10px] mb-1">
                    <span className="text-zinc-600">To: </span>
                    <span className="text-zinc-300">{tx.to}</span>
                  </div>
                  <p className="text-[9px] text-zinc-500">{tx.purpose}</p>
                  {!tx.documented && (
                    <span className="inline-block mt-1 text-[8px] text-yellow-600 uppercase font-bold border border-yellow-800/40 px-1 py-0.5">Unverified</span>
                  )}
                </div>
              ))}
            </div>
          </GlassPanel>
        )}
      </div>
    </motion.div>
  );
}
