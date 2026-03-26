'use client';

import { useRef, useEffect, useState, useCallback, useMemo } from 'react';
import * as d3 from 'd3';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ChevronDown, ChevronRight, Search, X, Maximize2, RotateCcw,
  ChevronLeft, Eye, EyeOff, Filter, Minimize2, Network,
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

interface TimelineEvent {
  date: string;
  event: string;
  type?: string;
}

interface InvestigationData {
  title: string;
  slug: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  defendants?: Defendant[];
  affiliations?: Affiliation[];
  moneyTrail?: MoneyTransaction[];
  timeline?: TimelineEvent[];
}

// === TREE NODE TYPES ===

type PersonTier =
  | 'Primary Defendant'
  | 'Co-Conspirator'
  | 'Regulator'
  | 'Politician'
  | 'Whistleblower'
  | 'Other';

type OrgTier =
  | 'Corporation'
  | 'Agency'
  | 'Organization';

interface TreeNodeData {
  name: string;
  role?: string;
  tier: PersonTier | OrgTier;
  status?: string;
  charges?: string[];
  sentence?: string;
  fine?: string;
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
// TIER CLASSIFICATION
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

  // Build person nodes (left side)
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
      notes: def.notes,
      relationship: matchingAff?.relationship,
      href: matchingAff?.href,
      moneyIn: moneyTrail.filter(m => m.to.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      moneyOut: moneyTrail.filter(m => m.from.toLowerCase().includes(def.name.split(' ').pop()!.toLowerCase())),
      side: 'left',
    });
  }

  // Add individual affiliations not already in defendants
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

  // Group people by tier
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

  // Build org nodes (right side)
  const orgAffiliations = affiliations.filter(a => a.type !== 'individual');
  const orgsByTier = new Map<OrgTier, TreeNodeData[]>();

  for (const aff of orgAffiliations) {
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
// COMPONENT
// ============================================================

interface NetworkTreeProps {
  investigation: InvestigationData;
}

export default function NetworkTree({ investigation }: NetworkTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1200, height: 700 });

  // HUD State
  const [controlsOpen, setControlsOpen] = useState(true);
  const [legendOpen, setLegendOpen] = useState(true);
  const [depth, setDepth] = useState(3);
  const [showPeople, setShowPeople] = useState(true);
  const [showOrgs, setShowOrgs] = useState(true);
  const [filterTier, setFilterTier] = useState<string>('all');
  const [nodeScale, setNodeScale] = useState(80);
  const [linkOpacity, setLinkOpacity] = useState(60);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMatches, setSearchMatches] = useState(0);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; data: TreeNodeData } | null>(null);

  // Stats
  const [stats, setStats] = useState({ total: 0, people: 0, orgs: 0, visible: 0 });

  // Build the tree data
  const treeData = useMemo(() => buildTreeData(investigation), [investigation]);

  // Collect available tiers from data
  const availableTiers = useMemo(() => {
    const tiers = new Set<string>();
    function walk(node: TreeNodeData) {
      if (node.side === 'left' && node.tier && !['Other'].includes(node.tier) && !node.children?.some(c => c.children)) {
        tiers.add(node.tier);
      }
      node.children?.forEach(walk);
    }
    walk(treeData);
    return Array.from(tiers);
  }, [treeData]);

  // Resize observer
  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
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

    // Create the main group
    const g = svg.append('g').attr('class', 'tree-container');

    // Zoom behavior
    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.2, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform.toString());
      });

    svg.call(zoom);

    // Background grid pattern
    const defs = svg.append('defs');

    // Grid pattern
    const gridPattern = defs.append('pattern')
      .attr('id', 'network-grid')
      .attr('width', 40)
      .attr('height', 40)
      .attr('patternUnits', 'userSpaceOnUse');
    gridPattern.append('rect').attr('width', 40).attr('height', 40).attr('fill', 'none');
    gridPattern.append('path')
      .attr('d', 'M 40 0 L 0 0 0 40')
      .attr('fill', 'none')
      .attr('stroke', 'rgba(184, 0, 0, 0.04)')
      .attr('stroke-width', 0.5);

    svg.insert('rect', ':first-child')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', '#020202');
    svg.insert('rect', 'g')
      .attr('width', '100%')
      .attr('height', '100%')
      .attr('fill', 'url(#network-grid)');

    // Glow filters
    const glowFilter = defs.append('filter').attr('id', 'node-glow');
    glowFilter.append('feGaussianBlur').attr('stdDeviation', '4').attr('result', 'glow');
    glowFilter.append('feMerge')
      .selectAll('feMergeNode')
      .data(['glow', 'SourceGraphic'])
      .join('feMergeNode')
      .attr('in', d => d);

    const searchGlow = defs.append('filter').attr('id', 'search-glow');
    searchGlow.append('feGaussianBlur').attr('stdDeviation', '6').attr('result', 'glow');
    const searchMerge = searchGlow.append('feMerge');
    searchMerge.append('feMergeNode').attr('in', 'glow');
    searchMerge.append('feMergeNode').attr('in', 'SourceGraphic');

    // Pulse animation
    const pulseFilter = defs.append('filter').attr('id', 'pulse-glow');
    const pulseBlur = pulseFilter.append('feGaussianBlur').attr('stdDeviation', '3').attr('result', 'glow');
    pulseFilter.append('feMerge')
      .selectAll('feMergeNode')
      .data(['glow', 'SourceGraphic'])
      .join('feMergeNode')
      .attr('in', d => d);

    // Animate pulse
    pulseBlur.append('animate')
      .attr('attributeName', 'stdDeviation')
      .attr('values', '3;6;3')
      .attr('dur', '2s')
      .attr('repeatCount', 'indefinite');

    // === BUILD HIERARCHIES ===

    // Deep clone for manipulation
    function deepClone(node: TreeNodeData): TreeNodeData {
      return {
        ...node,
        children: node.children?.map(deepClone),
        _children: node._children?.map(deepClone),
      };
    }

    const rootData = deepClone(treeData);
    const leftData = rootData.children?.[0]; // People
    const rightData = rootData.children?.[1]; // Organizations

    if (!leftData || !rightData) return;

    // Apply filters
    function filterNodes(node: TreeNodeData, side: 'left' | 'right'): TreeNodeData | null {
      if (side === 'left' && !showPeople) return null;
      if (side === 'right' && !showOrgs) return null;

      if (node.children) {
        const filteredChildren = node.children
          .map(c => filterNodes(c, side))
          .filter(Boolean) as TreeNodeData[];

        // Filter by tier
        if (filterTier !== 'all' && side === 'left') {
          const tierFiltered = filteredChildren.filter(c => {
            if (c.children) return c.children.length > 0;
            return c.tier === filterTier;
          });
          if (tierFiltered.length === 0 && !node.children?.some(c => c.tier === filterTier)) {
            // This is a tier group node; only keep if it matches
            if (node.tier === filterTier || node.name === 'People') {
              return { ...node, children: filteredChildren.length > 0 ? filteredChildren : undefined };
            }
            return filteredChildren.length > 0 ? { ...node, children: filteredChildren } : null;
          }
          return { ...node, children: tierFiltered.length > 0 ? tierFiltered : undefined };
        }

        return filteredChildren.length > 0 ? { ...node, children: filteredChildren } : { ...node, children: undefined };
      }

      if (filterTier !== 'all' && side === 'left' && node.tier !== filterTier) return null;

      return node;
    }

    const filteredLeft = filterNodes(leftData, 'left');
    const filteredRight = filterNodes(rightData, 'right');

    // Apply depth limits
    function limitDepth(node: TreeNodeData, currentDepth: number): TreeNodeData {
      if (currentDepth >= depth) {
        if (node.children) {
          return { ...node, _children: node.children, children: undefined };
        }
        return node;
      }
      return {
        ...node,
        children: node.children?.map(c => limitDepth(c, currentDepth + 1)),
      };
    }

    // Tree layout settings
    const treeHeight = Math.max(height - 80, 400);
    const treeSideWidth = Math.max((width / 2) - 140, 200);

    // Count visible nodes for stats
    let totalPeople = 0;
    let totalOrgs = 0;
    let visibleCount = 0;

    function countNodes(node: TreeNodeData, isCounting: boolean) {
      if (isCounting) visibleCount++;
      if (node.side === 'left' && !node.children?.some(c => c.children !== undefined || c._children !== undefined)) totalPeople++;
      if (node.side === 'right' && !node.children?.some(c => c.children !== undefined || c._children !== undefined)) totalOrgs++;
      node.children?.forEach(c => countNodes(c, true));
    }

    // === RENDER LEFT TREE (People) ===
    if (filteredLeft && showPeople) {
      const leftLimited = limitDepth(filteredLeft, 0);
      const leftHierarchy = d3.hierarchy(leftLimited, d => d.children);
      const leftLayout = d3.tree<TreeNodeData>().size([treeHeight, treeSideWidth]);
      leftLayout(leftHierarchy);

      countNodes(leftLimited, false);

      // Mirror x coordinates for left side
      leftHierarchy.each(d => {
        (d as d3.HierarchyPointNode<TreeNodeData>).y = centerX - (d as d3.HierarchyPointNode<TreeNodeData>).y;
      });

      // Render left links
      const leftLinks = g.append('g').attr('class', 'left-links');
      leftLinks.selectAll('path')
        .data(leftHierarchy.links())
        .join('path')
        .attr('d', d => {
          const s = d.source as d3.HierarchyPointNode<TreeNodeData>;
          const t = d.target as d3.HierarchyPointNode<TreeNodeData>;
          return `M${s.y},${s.x} C${(s.y + t.y) / 2},${s.x} ${(s.y + t.y) / 2},${t.x} ${t.y},${t.x}`;
        })
        .attr('fill', 'none')
        .attr('stroke', d => {
          const tier = (d.target.data as TreeNodeData).tier as PersonTier;
          return PERSON_TIER_COLORS[tier] || '#444';
        })
        .attr('stroke-opacity', linkOpacity / 100)
        .attr('stroke-width', 1.5);

      // Render left nodes
      const leftNodes = g.append('g').attr('class', 'left-nodes');
      const leftNodeGroups = leftNodes.selectAll('g')
        .data(leftHierarchy.descendants())
        .join('g')
        .attr('transform', d => `translate(${(d as d3.HierarchyPointNode<TreeNodeData>).y},${(d as d3.HierarchyPointNode<TreeNodeData>).x})`)
        .attr('cursor', 'pointer');

      // Node circles
      leftNodeGroups.append('circle')
        .attr('r', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'People') return 14 * scale;
          if (data.children || data._children) return 10 * scale;
          return 8 * scale;
        })
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'People') return '#0a0000';
          const tier = data.tier as PersonTier;
          const color = PERSON_TIER_COLORS[tier];
          return color ? `${color}33` : '#1a1a1a';
        })
        .attr('stroke', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'People') return '#d64545';
          if (data.status) return STATUS_COLORS[data.status] || '#555';
          const tier = data.tier as PersonTier;
          return PERSON_TIER_COLORS[tier] || '#555';
        })
        .attr('stroke-width', d => {
          const data = d.data as TreeNodeData;
          return (data.status === 'convicted' || data.status === 'incarcerated') ? 3 : 2;
        })
        .attr('filter', d => {
          const data = d.data as TreeNodeData;
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return 'url(#search-glow)';
          if (data.status === 'pending') return 'url(#pulse-glow)';
          return 'none';
        });

      // Node labels
      leftNodeGroups.append('text')
        .attr('dx', d => {
          const data = d.data as TreeNodeData;
          const r = data.name === 'People' ? 14 : (data.children || data._children) ? 10 : 8;
          return -(r * scale + 8);
        })
        .attr('dy', 4)
        .attr('text-anchor', 'end')
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return '#f97316';
          return '#e4e4e7';
        })
        .attr('font-size', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'People') return `${13 * scale}px`;
          if (data.children || data._children) return `${11 * scale}px`;
          return `${10 * scale}px`;
        })
        .attr('font-family', 'monospace')
        .attr('font-weight', d => {
          const data = d.data as TreeNodeData;
          return (data.children || data._children) ? 'bold' : 'normal';
        })
        .text(d => {
          const data = d.data as TreeNodeData;
          return data.name.length > 28 ? data.name.substring(0, 26) + '..' : data.name;
        });

      // Status indicator dots
      leftNodeGroups.each(function(d) {
        const data = d.data as TreeNodeData;
        if (data.status) {
          d3.select(this).append('circle')
            .attr('r', 3 * scale)
            .attr('cx', (data.name === 'People' ? 14 : (data.children || data._children) ? 10 : 8) * scale + 2)
            .attr('cy', -(8 * scale - 2))
            .attr('fill', STATUS_COLORS[data.status] || '#555');
        }
      });

      // Click handlers for collapse/expand
      leftNodeGroups.on('click', function(event, d) {
        event.stopPropagation();
        const data = d.data as TreeNodeData;
        if (data.children) {
          data._children = data.children;
          data.children = undefined;
        } else if (data._children) {
          data.children = data._children;
          data._children = undefined;
        }
        renderTree();
      });

      // Hover for tooltip
      leftNodeGroups.on('mouseenter', function(event, d) {
        const data = d.data as TreeNodeData;
        if (data.name === 'People' || (data.children && !data.role)) return;
        const [x, y] = d3.pointer(event, containerRef.current);
        setTooltip({ x, y, data });
      });
      leftNodeGroups.on('mouseleave', () => setTooltip(null));
    }

    // === RENDER RIGHT TREE (Organizations) ===
    if (filteredRight && showOrgs) {
      const rightLimited = limitDepth(filteredRight, 0);
      const rightHierarchy = d3.hierarchy(rightLimited, d => d.children);
      const rightLayout = d3.tree<TreeNodeData>().size([treeHeight, treeSideWidth]);
      rightLayout(rightHierarchy);

      // Position right side
      rightHierarchy.each(d => {
        (d as d3.HierarchyPointNode<TreeNodeData>).y = centerX + (d as d3.HierarchyPointNode<TreeNodeData>).y;
      });

      countNodes(rightLimited, false);

      // Render right links
      const rightLinks = g.append('g').attr('class', 'right-links');
      rightLinks.selectAll('path')
        .data(rightHierarchy.links())
        .join('path')
        .attr('d', d => {
          const s = d.source as d3.HierarchyPointNode<TreeNodeData>;
          const t = d.target as d3.HierarchyPointNode<TreeNodeData>;
          return `M${s.y},${s.x} C${(s.y + t.y) / 2},${s.x} ${(s.y + t.y) / 2},${t.x} ${t.y},${t.x}`;
        })
        .attr('fill', 'none')
        .attr('stroke', d => {
          const tier = (d.target.data as TreeNodeData).tier as OrgTier;
          return ORG_TIER_COLORS[tier] || '#444';
        })
        .attr('stroke-opacity', linkOpacity / 100)
        .attr('stroke-width', 1.5);

      // Render right nodes
      const rightNodes = g.append('g').attr('class', 'right-nodes');
      const rightNodeGroups = rightNodes.selectAll('g')
        .data(rightHierarchy.descendants())
        .join('g')
        .attr('transform', d => `translate(${(d as d3.HierarchyPointNode<TreeNodeData>).y},${(d as d3.HierarchyPointNode<TreeNodeData>).x})`)
        .attr('cursor', 'pointer');

      rightNodeGroups.append('circle')
        .attr('r', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'Organizations') return 14 * scale;
          if (data.children || data._children) return 10 * scale;
          return 8 * scale;
        })
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'Organizations') return '#0a0000';
          const tier = data.tier as OrgTier;
          const color = ORG_TIER_COLORS[tier];
          return color ? `${color}33` : '#1a1a1a';
        })
        .attr('stroke', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'Organizations') return '#eab308';
          const tier = data.tier as OrgTier;
          return ORG_TIER_COLORS[tier] || '#555';
        })
        .attr('stroke-width', 2)
        .attr('filter', d => {
          const data = d.data as TreeNodeData;
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return 'url(#search-glow)';
          return 'none';
        });

      rightNodeGroups.append('text')
        .attr('dx', d => {
          const data = d.data as TreeNodeData;
          const r = data.name === 'Organizations' ? 14 : (data.children || data._children) ? 10 : 8;
          return r * scale + 8;
        })
        .attr('dy', 4)
        .attr('text-anchor', 'start')
        .attr('fill', d => {
          const data = d.data as TreeNodeData;
          if (searchQuery && data.name.toLowerCase().includes(searchQuery.toLowerCase())) return '#f97316';
          return '#e4e4e7';
        })
        .attr('font-size', d => {
          const data = d.data as TreeNodeData;
          if (data.name === 'Organizations') return `${13 * scale}px`;
          if (data.children || data._children) return `${11 * scale}px`;
          return `${10 * scale}px`;
        })
        .attr('font-family', 'monospace')
        .attr('font-weight', d => {
          const data = d.data as TreeNodeData;
          return (data.children || data._children) ? 'bold' : 'normal';
        })
        .text(d => {
          const data = d.data as TreeNodeData;
          return data.name.length > 32 ? data.name.substring(0, 30) + '..' : data.name;
        });

      // Click handlers
      rightNodeGroups.on('click', function(event, d) {
        event.stopPropagation();
        const data = d.data as TreeNodeData;
        if (data.children) {
          data._children = data.children;
          data.children = undefined;
        } else if (data._children) {
          data.children = data._children;
          data._children = undefined;
        }
        renderTree();
      });

      rightNodeGroups.on('mouseenter', function(event, d) {
        const data = d.data as TreeNodeData;
        if (data.name === 'Organizations' || (data.children && !data.role)) return;
        const [x, y] = d3.pointer(event, containerRef.current);
        setTooltip({ x, y, data });
      });
      rightNodeGroups.on('mouseleave', () => setTooltip(null));
    }

    // === ROOT NODE ===
    const rootGroup = g.append('g')
      .attr('transform', `translate(${centerX}, ${centerY})`)
      .attr('cursor', 'pointer');

    // Outer severity ring
    const severityColor = {
      critical: '#dc2626',
      high: '#ea580c',
      medium: '#ca8a04',
      low: '#71717a',
    }[investigation.severity] || '#dc2626';

    // Animated ring
    rootGroup.append('circle')
      .attr('r', 24 * scale)
      .attr('fill', 'none')
      .attr('stroke', severityColor)
      .attr('stroke-width', 1)
      .attr('stroke-opacity', 0.3)
      .append('animate')
      .attr('attributeName', 'r')
      .attr('values', `${24 * scale};${30 * scale};${24 * scale}`)
      .attr('dur', '3s')
      .attr('repeatCount', 'indefinite');

    rootGroup.append('circle')
      .attr('r', 20 * scale)
      .attr('fill', '#0a0000')
      .attr('stroke', severityColor)
      .attr('stroke-width', 2.5);

    // Root label
    rootGroup.append('text')
      .attr('y', -(24 * scale + 8))
      .attr('text-anchor', 'middle')
      .attr('fill', '#ffffff')
      .attr('font-size', `${12 * scale}px`)
      .attr('font-family', 'monospace')
      .attr('font-weight', 'bold')
      .text(investigation.title.length > 50 ? investigation.title.substring(0, 48) + '..' : investigation.title);

    // Severity label below root
    rootGroup.append('text')
      .attr('y', 24 * scale + 16)
      .attr('text-anchor', 'middle')
      .attr('fill', severityColor)
      .attr('font-size', `${9 * scale}px`)
      .attr('font-family', 'monospace')
      .attr('font-weight', 'bold')
      .attr('letter-spacing', '0.15em')
      .text(`SEVERITY: ${investigation.severity.toUpperCase()}`);

    // Cross-hair lines from root
    const crossLen = 30 * scale;
    rootGroup.append('line').attr('x1', -crossLen).attr('x2', crossLen).attr('y1', 0).attr('y2', 0)
      .attr('stroke', severityColor).attr('stroke-width', 0.5).attr('stroke-opacity', 0.2);
    rootGroup.append('line').attr('x1', 0).attr('x2', 0).attr('y1', -crossLen).attr('y2', crossLen)
      .attr('stroke', severityColor).attr('stroke-width', 0.5).attr('stroke-opacity', 0.2);

    // Update stats
    setStats({ total: totalPeople + totalOrgs, people: totalPeople, orgs: totalOrgs, visible: visibleCount });

    // Count search matches
    if (searchQuery) {
      let matches = 0;
      function countMatches(node: TreeNodeData) {
        if (node.name.toLowerCase().includes(searchQuery.toLowerCase())) matches++;
        node.children?.forEach(countMatches);
      }
      countMatches(treeData);
      setSearchMatches(matches);
    } else {
      setSearchMatches(0);
    }

    // Initial zoom fit
    const bounds = (g.node() as SVGGElement)?.getBBox();
    if (bounds) {
      const fullWidth = bounds.width + 100;
      const fullHeight = bounds.height + 100;
      const scaleToFit = Math.min(width / fullWidth, height / fullHeight, 1);
      const translateX = (width - fullWidth * scaleToFit) / 2 - bounds.x * scaleToFit;
      const translateY = (height - fullHeight * scaleToFit) / 2 - bounds.y * scaleToFit;

      svg.call(zoom.transform, d3.zoomIdentity.translate(translateX, translateY).scale(scaleToFit));
    }

  }, [dimensions, treeData, depth, showPeople, showOrgs, filterTier, nodeScale, linkOpacity, searchQuery, investigation.severity, investigation.title]);

  useEffect(() => {
    renderTree();
  }, [renderTree]);

  // === FIT VIEW ===
  const fitView = useCallback(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const g = svg.select('.tree-container');
    const bounds = (g.node() as SVGGElement)?.getBBox();
    if (!bounds) return;

    const { width, height } = dimensions;
    const fullWidth = bounds.width + 100;
    const fullHeight = bounds.height + 100;
    const scaleToFit = Math.min(width / fullWidth, height / fullHeight, 1);
    const translateX = (width - fullWidth * scaleToFit) / 2 - bounds.x * scaleToFit;
    const translateY = (height - fullHeight * scaleToFit) / 2 - bounds.y * scaleToFit;

    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.2, 4]);
    svg.transition().duration(500).call(
      zoom.transform as never,
      d3.zoomIdentity.translate(translateX, translateY).scale(scaleToFit) as never
    );
  }, [dimensions]);

  // ============================================================
  // RENDER
  // ============================================================

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.12 }}
      className="glass-card mb-8 relative overflow-hidden"
    >
      {/* Section Header */}
      <div className="p-6 pb-0">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-1 flex items-center gap-2">
          <Network className="w-5 h-5 text-red-400" />
          Network Analysis
        </h2>
        <p className="text-xs text-zinc-500 font-mono tracking-wider mb-4">
          DUAL-TREE VISUALIZATION // CLICK NODES TO EXPAND/COLLAPSE // SCROLL TO ZOOM // DRAG TO PAN
        </p>
      </div>

      {/* Main visualization container */}
      <div ref={containerRef} className="relative w-full" style={{ height: '700px' }}>

        {/* SVG Canvas */}
        <svg
          ref={svgRef}
          width={dimensions.width}
          height={dimensions.height}
          className="w-full h-full"
          style={{ background: '#020202' }}
        />

        {/* === HUD: CONTROLS PANEL (top-left) === */}
        <div className="absolute top-3 left-3 z-20" style={{ maxWidth: '260px' }}>
          <div className="bg-[#080808]/95 border border-[rgba(184,0,0,0.25)] backdrop-blur-sm">
            <button
              onClick={() => setControlsOpen(!controlsOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors"
            >
              <span>Controls</span>
              {controlsOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
            <AnimatePresence>
              {controlsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-3 pb-3 space-y-3 border-t border-[rgba(184,0,0,0.12)]">
                    {/* Depth */}
                    <div className="pt-2.5">
                      <label className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">
                        Depth: {depth}
                      </label>
                      <input
                        type="range" min={1} max={3} step={1} value={depth}
                        onChange={(e) => setDepth(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600"
                      />
                    </div>

                    {/* Show People / Orgs */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setShowPeople(!showPeople)}
                        className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2 py-1 border transition-all ${
                          showPeople ? 'border-red-800/40 text-red-400 bg-red-900/10' : 'border-zinc-800 text-zinc-600'
                        }`}
                      >
                        {showPeople ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        People
                      </button>
                      <button
                        onClick={() => setShowOrgs(!showOrgs)}
                        className={`flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-wider px-2 py-1 border transition-all ${
                          showOrgs ? 'border-yellow-800/40 text-yellow-400 bg-yellow-900/10' : 'border-zinc-800 text-zinc-600'
                        }`}
                      >
                        {showOrgs ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        Orgs
                      </button>
                    </div>

                    {/* Filter by Tier */}
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">
                        <Filter className="w-3 h-3 inline mr-1" />
                        Filter Tier
                      </label>
                      <select
                        value={filterTier}
                        onChange={(e) => setFilterTier(e.target.value)}
                        className="w-full bg-[#0a0a0a] border border-zinc-800 text-zinc-300 text-[10px] px-2 py-1.5 font-mono focus:border-red-800/50 focus:outline-none"
                      >
                        <option value="all">All Tiers</option>
                        {availableTiers.map(tier => (
                          <option key={tier} value={tier}>{tier}</option>
                        ))}
                      </select>
                    </div>

                    {/* Node Size */}
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">
                        Node Size: {nodeScale}%
                      </label>
                      <input
                        type="range" min={60} max={100} step={5} value={nodeScale}
                        onChange={(e) => setNodeScale(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600"
                      />
                    </div>

                    {/* Link Opacity */}
                    <div>
                      <label className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">
                        Link Opacity: {linkOpacity}%
                      </label>
                      <input
                        type="range" min={10} max={100} step={5} value={linkOpacity}
                        onChange={(e) => setLinkOpacity(Number(e.target.value))}
                        className="w-full h-1 bg-zinc-800 appearance-none cursor-pointer accent-red-600"
                      />
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      <button
                        onClick={fitView}
                        className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-1 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
                      >
                        <Maximize2 className="w-3 h-3" />
                        Fit
                      </button>
                      <button
                        onClick={() => { setDepth(3); setShowPeople(true); setShowOrgs(true); setFilterTier('all'); setNodeScale(80); setLinkOpacity(60); setSearchQuery(''); }}
                        className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider px-2 py-1 border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-600 transition-all"
                      >
                        <RotateCcw className="w-3 h-3" />
                        Reset
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* === HUD: SEARCH BAR (top-center) === */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20" style={{ width: '280px' }}>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-zinc-600" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search nodes..."
              className="w-full bg-[#080808]/95 border border-[rgba(184,0,0,0.20)] text-zinc-300 text-[11px] font-mono pl-8 pr-16 py-2 focus:border-red-700/50 focus:outline-none placeholder:text-zinc-700"
            />
            {searchQuery && (
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[9px] font-mono font-bold text-orange-400">{searchMatches} found</span>
                <button onClick={() => setSearchQuery('')} className="text-zinc-600 hover:text-white">
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* === HUD: LEGEND PANEL (top-right) === */}
        <div className="absolute top-3 right-3 z-20" style={{ maxWidth: '200px' }}>
          <div className="bg-[#080808]/95 border border-[rgba(184,0,0,0.25)] backdrop-blur-sm">
            <button
              onClick={() => setLegendOpen(!legendOpen)}
              className="w-full flex items-center justify-between px-3 py-2 text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-400 hover:text-white transition-colors"
            >
              <span>Legend</span>
              {legendOpen ? <ChevronDown className="w-3 h-3" /> : <ChevronRight className="w-3 h-3" />}
            </button>
            <AnimatePresence>
              {legendOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-3 pb-3 border-t border-[rgba(184,0,0,0.12)]">
                    <div className="pt-2.5 space-y-1">
                      <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">People Tiers</p>
                      {(Object.entries(PERSON_TIER_COLORS) as [PersonTier, string][])
                        .filter(([tier]) => availableTiers.includes(tier))
                        .map(([tier, color]) => (
                          <div key={tier} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="text-[9px] text-zinc-400 font-mono">{tier}</span>
                          </div>
                        ))}

                      <div className="border-t border-[rgba(255,255,255,0.04)] pt-2 mt-2">
                        <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Org Types</p>
                        {(Object.entries(ORG_TIER_COLORS) as [OrgTier, string][]).map(([tier, color]) => (
                          <div key={tier} className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="text-[9px] text-zinc-400 font-mono">{tier}</span>
                          </div>
                        ))}
                      </div>

                      <div className="border-t border-[rgba(255,255,255,0.04)] pt-2 mt-2">
                        <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Status</p>
                        {Object.entries(STATUS_COLORS).slice(0, 6).map(([status, color]) => (
                          <div key={status} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: color }} />
                            <span className="text-[9px] text-zinc-500 font-mono capitalize">{status}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* === HUD: STATS BAR (bottom) === */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="bg-[#080808]/95 border-t border-[rgba(184,0,0,0.18)] px-4 py-2 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-500" />
                <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Nodes: <span className="text-zinc-300">{stats.total}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-red-400" />
                <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  People: <span className="text-zinc-300">{stats.people}</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-yellow-500" />
                <span className="text-[9px] font-mono font-bold text-zinc-500 uppercase tracking-wider">
                  Orgs: <span className="text-zinc-300">{stats.orgs}</span>
                </span>
              </div>
            </div>
            <span className="text-[9px] font-mono text-zinc-700">
              {investigation.slug} // NETWORK ANALYSIS v1.0
            </span>
          </div>
        </div>

        {/* === TOOLTIP === */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="absolute z-30 pointer-events-none"
              style={{
                left: Math.min(tooltip.x + 16, dimensions.width - 300),
                top: Math.min(tooltip.y - 10, dimensions.height - 200),
                maxWidth: '280px',
              }}
            >
              <div className="bg-[#0a0a0a] border border-[rgba(184,0,0,0.35)] p-3 shadow-2xl">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-bold text-white text-xs font-mono">{tooltip.data.name}</span>
                  {tooltip.data.status && (
                    <span
                      className="text-[8px] px-1.5 py-0.5 font-bold uppercase border"
                      style={{
                        color: STATUS_COLORS[tooltip.data.status] || '#777',
                        borderColor: `${STATUS_COLORS[tooltip.data.status] || '#777'}60`,
                      }}
                    >
                      {tooltip.data.status}
                    </span>
                  )}
                </div>
                {tooltip.data.role && (
                  <p className="text-[10px] text-zinc-400 mb-2 leading-relaxed">{tooltip.data.role}</p>
                )}
                {tooltip.data.charges && tooltip.data.charges.length > 0 && (
                  <div className="mb-2">
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Charges:</span>
                    {tooltip.data.charges.slice(0, 3).map((c, i) => (
                      <p key={i} className="text-[9px] text-red-400/80 mt-0.5">- {c}</p>
                    ))}
                    {tooltip.data.charges.length > 3 && (
                      <p className="text-[9px] text-zinc-600 mt-0.5">+{tooltip.data.charges.length - 3} more</p>
                    )}
                  </div>
                )}
                {tooltip.data.sentence && (
                  <p className="text-[9px] text-zinc-500"><span className="text-zinc-600">Outcome:</span> {tooltip.data.sentence}</p>
                )}
                {(tooltip.data.moneyIn?.length || tooltip.data.moneyOut?.length) ? (
                  <div className="mt-2 pt-2 border-t border-[rgba(255,255,255,0.05)]">
                    <span className="text-[8px] text-zinc-600 uppercase font-bold">Money Trail:</span>
                    {tooltip.data.moneyIn?.slice(0, 2).map((m, i) => (
                      <p key={`in-${i}`} className="text-[9px] text-green-400/70 mt-0.5">IN: {m.amount} from {m.from}</p>
                    ))}
                    {tooltip.data.moneyOut?.slice(0, 2).map((m, i) => (
                      <p key={`out-${i}`} className="text-[9px] text-red-400/70 mt-0.5">OUT: {m.amount} to {m.to}</p>
                    ))}
                  </div>
                ) : null}
                {tooltip.data.href && (
                  <p className="text-[9px] text-red-400/60 mt-2 font-mono">Click to view entity page</p>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
