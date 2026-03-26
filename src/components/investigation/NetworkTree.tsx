'use client';

import React, { useState, useEffect, useCallback, useMemo, memo } from 'react';
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
  useReactFlow,
  ReactFlowProvider,
  Handle,
  Position,
  MarkerType,
  type Node,
  type Edge,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  Search, X, Filter, Network, Building2, DollarSign,
  Target, Shield, ChevronDown, ChevronRight,
  Activity, Users, Eye, ArrowUpRight,
  Maximize2, RotateCcw, FoldVertical, UnfoldVertical,
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
  timeline?: { date: string; event: string }[];
}

interface NodeData {
  label: string;
  nodeType: 'root' | 'category' | 'tier' | 'person' | 'org';
  name?: string;
  role?: string;
  tier?: string;
  status?: string;
  charges?: string[];
  sentence?: string;
  fine?: string;
  restitution?: string;
  notes?: string;
  href?: string;
  entityType?: string;
  moneyIn?: MoneyTransaction[];
  moneyOut?: MoneyTransaction[];
  category?: string;
  count?: number;
  color?: string;
  side?: string;
  isCollapsed?: boolean;
  severity?: string;
  defendantCount?: number;
  entityCount?: number;
  transactionCount?: number;
  relationship?: string;
  title?: string;
  [key: string]: unknown;
}

type AppNode = Node<NodeData>;
type AppEdge = Edge;

// ============================================================
// CONSTANTS
// ============================================================

type PersonTier = 'Primary Defendant' | 'Co-Conspirator' | 'Politician' | 'Regulator' | 'Whistleblower' | 'Other';
type OrgTier = 'Corporation' | 'Agency' | 'Organization';

const SEVERITY_COLORS: Record<string, string> = {
  critical: '#dc2626',
  high: '#ea580c',
  medium: '#ca8a04',
  low: '#71717a',
};

const PERSON_TIER_COLORS: Record<PersonTier, string> = {
  'Primary Defendant': '#ef4444',
  'Co-Conspirator': '#f97316',
  Politician: '#a855f7',
  Regulator: '#3b82f6',
  Whistleblower: '#22c55e',
  Other: '#6b7280',
};

const ORG_TIER_COLORS: Record<OrgTier, string> = {
  Corporation: '#eab308',
  Agency: '#06b6d4',
  Organization: '#8b5cf6',
};

const STATUS_COLORS: Record<string, string> = {
  convicted: '#dc2626',
  incarcerated: '#991b1b',
  indicted: '#ea580c',
  charged: '#d97706',
  pending: '#eab308',
  settled: '#6b7280',
  acquitted: '#10b981',
  pardoned: '#8b5cf6',
  appealing: '#3b82f6',
  released: '#9ca3af',
};

const NODE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  rootNode: { width: 400, height: 90 },
  categoryNode: { width: 190, height: 52 },
  tierNode: { width: 210, height: 46 },
  personNode: { width: 280, height: 112 },
  orgNode: { width: 280, height: 92 },
};

// ============================================================
// CLASSIFICATION FUNCTIONS
// ============================================================

function classifyPerson(def: Defendant | null, aff: Affiliation | null): PersonTier {
  const status = def?.status?.toLowerCase() || '';
  const role = (def?.role || aff?.relationship || '').toLowerCase();

  if (['convicted', 'incarcerated', 'indicted', 'charged', 'settled', 'pending'].includes(status)) {
    if (/ceo|chair|president|director|chief|head|leader/.test(role)) return 'Primary Defendant';
    return def?.charges?.length ? 'Primary Defendant' : 'Co-Conspirator';
  }
  if (/governor|senator|representative|mayor|lt\. governor|lieutenant governor|congress/.test(role)) return 'Politician';
  if (/commissioner|regulator|inspector|administrator|oversight/.test(role)) return 'Regulator';
  if (/whistleblower|witness|informant|testified/.test(role)) return 'Whistleblower';
  return 'Other';
}

function classifyOrg(aff: Affiliation): OrgTier {
  if (aff.type === 'corporation') return 'Corporation';
  if (aff.type === 'agency') return 'Agency';
  return 'Organization';
}

function slugifyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// ============================================================
// ELK LAYOUT
// ============================================================

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const elk = new (ELK as any)();

async function computeElkLayout(
  nodes: AppNode[],
  edges: AppEdge[],
): Promise<AppNode[]> {
  const elkNodes = nodes.map(node => {
    const type = node.type || 'personNode';
    const dims = NODE_DIMENSIONS[type] || { width: 250, height: 80 };
    return { id: node.id, width: dims.width, height: dims.height };
  });

  const elkEdges = edges.map(edge => ({
    id: edge.id,
    sources: [edge.source],
    targets: [edge.target],
  }));

  const graph = {
    id: 'elk-root',
    layoutOptions: {
      'elk.algorithm': 'layered',
      'elk.direction': 'RIGHT',
      'elk.spacing.nodeNode': '35',
      'elk.layered.spacing.nodeNodeBetweenLayers': '70',
      'elk.spacing.edgeNode': '30',
      'elk.spacing.edgeEdge': '20',
      'elk.layered.nodePlacement.strategy': 'BRANDES_KOEPF',
      'elk.layered.crossingMinimization.strategy': 'LAYER_SWEEP',
      'elk.edgeRouting': 'SPLINES',
      'elk.layered.mergeEdges': 'false',
    },
    children: elkNodes,
    edges: elkEdges,
  };

  const layouted = await elk.layout(graph);

  return nodes.map(node => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const elkNode = layouted.children?.find((n: any) => n.id === node.id);
    return elkNode
      ? { ...node, position: { x: elkNode.x ?? 0, y: elkNode.y ?? 0 } }
      : node;
  });
}

// ============================================================
// BUILD GRAPH DATA
// ============================================================

function buildGraphData(
  investigation: InvestigationData,
  collapsedNodes: Set<string>,
  showPeople: boolean,
  showOrgs: boolean,
): { nodes: AppNode[]; edges: AppEdge[] } {
  const nodes: AppNode[] = [];
  const edges: AppEdge[] = [];

  const defendants = investigation.defendants || [];
  const affiliations = investigation.affiliations || [];
  const moneyTrail = investigation.moneyTrail || [];

  // --- ROOT ---
  nodes.push({
    id: 'root',
    type: 'rootNode',
    position: { x: 0, y: 0 },
    data: {
      label: investigation.title,
      nodeType: 'root',
      title: investigation.title,
      severity: investigation.severity,
      defendantCount: defendants.length,
      entityCount: affiliations.length,
      transactionCount: moneyTrail.length,
    },
  });

  // --- PEOPLE ---
  const personMap = new Map<string, { def?: Defendant; aff?: Affiliation; tier: PersonTier }>();
  for (const def of defendants) {
    const matchingAff = affiliations.find(a => a.name === def.name && a.type === 'individual');
    personMap.set(def.name, { def, aff: matchingAff, tier: classifyPerson(def, matchingAff || null) });
  }
  for (const aff of affiliations.filter(a => a.type === 'individual')) {
    if (!personMap.has(aff.name)) {
      personMap.set(aff.name, { aff, tier: classifyPerson(null, aff) });
    }
  }

  if (showPeople && personMap.size > 0) {
    const peopleCollapsed = collapsedNodes.has('people');
    nodes.push({
      id: 'people',
      type: 'categoryNode',
      position: { x: 0, y: 0 },
      data: {
        label: 'People',
        nodeType: 'category',
        category: 'People',
        count: personMap.size,
        color: '#d64545',
        isCollapsed: peopleCollapsed,
      },
    });
    edges.push({
      id: 'e-root-people',
      source: 'root',
      target: 'people',
      type: 'smoothstep',
      style: { stroke: '#d64545', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#d64545', width: 14, height: 14 },
    });

    if (!peopleCollapsed) {
      const personsByTier = new Map<PersonTier, { name: string; def?: Defendant; aff?: Affiliation }[]>();
      for (const [name, data] of personMap) {
        if (!personsByTier.has(data.tier)) personsByTier.set(data.tier, []);
        personsByTier.get(data.tier)!.push({ name, def: data.def, aff: data.aff });
      }

      const tierOrder: PersonTier[] = ['Primary Defendant', 'Co-Conspirator', 'Politician', 'Regulator', 'Whistleblower', 'Other'];
      for (const tier of tierOrder) {
        const people = personsByTier.get(tier);
        if (!people) continue;

        const tierId = `tier-${slugifyName(tier)}`;
        const tierCollapsed = collapsedNodes.has(tierId);
        const color = PERSON_TIER_COLORS[tier];

        nodes.push({
          id: tierId,
          type: 'tierNode',
          position: { x: 0, y: 0 },
          data: { label: tier, nodeType: 'tier', tier, count: people.length, color, side: 'left', isCollapsed: tierCollapsed },
        });
        edges.push({
          id: `e-people-${tierId}`,
          source: 'people',
          target: tierId,
          type: 'smoothstep',
          style: { stroke: color, strokeWidth: 1.5, strokeOpacity: 0.6 },
        });

        if (!tierCollapsed) {
          for (const person of people) {
            const personId = `person-${slugifyName(person.name)}`;
            const moneyIn = moneyTrail.filter(m => m.to.toLowerCase().includes(person.name.split(' ').pop()!.toLowerCase()));
            const moneyOut = moneyTrail.filter(m => m.from.toLowerCase().includes(person.name.split(' ').pop()!.toLowerCase()));

            nodes.push({
              id: personId,
              type: 'personNode',
              position: { x: 0, y: 0 },
              data: {
                label: person.name,
                nodeType: 'person',
                name: person.name,
                role: person.def?.role || person.aff?.relationship || '',
                tier,
                status: person.def?.status,
                charges: person.def?.charges,
                sentence: person.def?.sentence,
                fine: person.def?.fine,
                restitution: (person.def as Defendant | undefined)?.restitution,
                notes: person.def?.notes,
                href: person.aff?.href,
                moneyIn,
                moneyOut,
                relationship: person.aff?.relationship,
              },
            });
            edges.push({
              id: `e-${tierId}-${personId}`,
              source: tierId,
              target: personId,
              type: 'smoothstep',
              style: { stroke: color, strokeWidth: 1, strokeOpacity: 0.4 },
              animated: person.def?.status === 'pending',
            });
          }
        }
      }
    }
  }

  // --- ORGANIZATIONS ---
  const orgAffs = affiliations.filter(a => a.type !== 'individual');

  if (showOrgs && orgAffs.length > 0) {
    const orgsCollapsed = collapsedNodes.has('orgs');
    nodes.push({
      id: 'orgs',
      type: 'categoryNode',
      position: { x: 0, y: 0 },
      data: {
        label: 'Organizations',
        nodeType: 'category',
        category: 'Organizations',
        count: orgAffs.length,
        color: '#eab308',
        isCollapsed: orgsCollapsed,
      },
    });
    edges.push({
      id: 'e-root-orgs',
      source: 'root',
      target: 'orgs',
      type: 'smoothstep',
      style: { stroke: '#eab308', strokeWidth: 2 },
      markerEnd: { type: MarkerType.ArrowClosed, color: '#eab308', width: 14, height: 14 },
    });

    if (!orgsCollapsed) {
      const orgsByTier = new Map<OrgTier, Affiliation[]>();
      for (const aff of orgAffs) {
        const tier = classifyOrg(aff);
        if (!orgsByTier.has(tier)) orgsByTier.set(tier, []);
        orgsByTier.get(tier)!.push(aff);
      }

      const orgTierOrder: OrgTier[] = ['Corporation', 'Agency', 'Organization'];
      for (const tier of orgTierOrder) {
        const orgs = orgsByTier.get(tier);
        if (!orgs) continue;

        const tierId = `org-tier-${slugifyName(tier)}`;
        const tierCollapsed = collapsedNodes.has(tierId);
        const color = ORG_TIER_COLORS[tier];

        nodes.push({
          id: tierId,
          type: 'tierNode',
          position: { x: 0, y: 0 },
          data: { label: tier, nodeType: 'tier', tier, count: orgs.length, color, side: 'right', isCollapsed: tierCollapsed },
        });
        edges.push({
          id: `e-orgs-${tierId}`,
          source: 'orgs',
          target: tierId,
          type: 'smoothstep',
          style: { stroke: color, strokeWidth: 1.5, strokeOpacity: 0.6 },
        });

        if (!tierCollapsed) {
          for (const org of orgs) {
            const orgId = `org-${slugifyName(org.name)}`;
            const moneyIn = moneyTrail.filter(m => m.to.toLowerCase().includes(org.name.toLowerCase()));
            const moneyOut = moneyTrail.filter(m => m.from.toLowerCase().includes(org.name.toLowerCase()));

            nodes.push({
              id: orgId,
              type: 'orgNode',
              position: { x: 0, y: 0 },
              data: {
                label: org.name,
                nodeType: 'org',
                name: org.name,
                entityType: org.type,
                role: org.relationship,
                tier,
                href: org.href,
                moneyIn,
                moneyOut,
                relationship: org.relationship,
              },
            });
            edges.push({
              id: `e-${tierId}-${orgId}`,
              source: tierId,
              target: orgId,
              type: 'smoothstep',
              style: { stroke: color, strokeWidth: 1, strokeOpacity: 0.4 },
            });
          }
        }
      }
    }
  }

  return { nodes, edges };
}

// ============================================================
// CUSTOM NODE COMPONENTS
// ============================================================

const glassBase: React.CSSProperties = {
  background: 'linear-gradient(160deg, #080808 0%, #020202 40%, #060606 100%)',
  borderRadius: 12,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RootNode({ data, selected }: any) {
  const sevColor = SEVERITY_COLORS[data.severity] || '#dc2626';
  return (
    <>
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`px-6 py-4 transition-all duration-200 ${selected ? 'ring-2 ring-white/30' : ''}`}
        style={{
          ...glassBase,
          border: `2px solid ${sevColor}40`,
          boxShadow: selected ? `0 0 30px ${sevColor}30` : `0 0 15px ${sevColor}15`,
          minWidth: 380,
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-3 h-3 rounded-sm animate-pulse" style={{ backgroundColor: sevColor, boxShadow: `0 0 8px ${sevColor}` }} />
          <span className="text-sm font-black text-white uppercase tracking-wider leading-tight" style={{ maxWidth: 320 }}>
            {(data.title as string)?.length > 55 ? (data.title as string).substring(0, 53) + '..' : data.title}
          </span>
        </div>
        <div className="flex items-center gap-4 text-[10px] font-mono">
          <span style={{ color: sevColor }} className="font-bold uppercase tracking-wider">{(data.severity as string)?.toUpperCase()}</span>
          <span className="text-zinc-500">{data.entityCount} entities</span>
          <span className="text-zinc-500">{data.defendantCount} defendants</span>
          <span className="text-zinc-500">{data.transactionCount} txns</span>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CategoryNode({ data, selected }: any) {
  const color = data.color as string;
  const isCollapsed = data.isCollapsed as boolean;
  return (
    <>
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`px-5 py-3 flex items-center gap-3 cursor-pointer transition-all duration-200 ${selected ? 'ring-2 ring-white/20' : ''}`}
        style={{ ...glassBase, border: `1.5px solid ${color}40`, boxShadow: `0 0 10px ${color}10` }}
      >
        <Users className="w-4 h-4 flex-shrink-0" style={{ color }} />
        <span className="text-xs font-black text-white uppercase tracking-wider">{data.category}</span>
        <span className="text-[10px] font-mono px-2 py-0.5" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30`, borderRadius: 6 }}>
          {data.count}
        </span>
        {isCollapsed
          ? <ChevronRight className="w-3.5 h-3.5 text-zinc-600 ml-auto" />
          : <ChevronDown className="w-3.5 h-3.5 text-zinc-600 ml-auto" />}
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TierNode({ data, selected }: any) {
  const color = data.color as string;
  const isCollapsed = data.isCollapsed as boolean;
  return (
    <>
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Right} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`px-4 py-2.5 flex items-center gap-2 cursor-pointer transition-all duration-200 ${selected ? 'ring-1 ring-white/15' : ''}`}
        style={{ ...glassBase, background: `linear-gradient(160deg, ${color}08 0%, #020202 100%)`, border: `1px solid ${color}30`, borderRadius: 8 }}
      >
        <div className="w-2 h-2 rounded-sm flex-shrink-0" style={{ backgroundColor: color }} />
        <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">{data.tier}</span>
        <span className="text-[9px] font-mono text-zinc-600 ml-auto mr-1">{data.count}</span>
        {isCollapsed
          ? <ChevronRight className="w-3 h-3 text-zinc-700" />
          : <ChevronDown className="w-3 h-3 text-zinc-700" />}
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function PersonNode({ data, selected }: any) {
  const tier = data.tier as string;
  const status = data.status as string | undefined;
  const tierColor = (PERSON_TIER_COLORS as Record<string, string>)[tier] || '#6b7280';
  const statusColor = status ? STATUS_COLORS[status] || '#555' : undefined;
  const moneyIn = (data.moneyIn as MoneyTransaction[]) || [];
  const moneyOut = (data.moneyOut as MoneyTransaction[]) || [];
  const totalMoney = moneyIn.length + moneyOut.length;

  return (
    <>
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`p-4 transition-all duration-200 ${selected ? 'ring-2 ring-white/25' : ''}`}
        style={{
          ...glassBase,
          border: `1px solid ${selected ? tierColor : 'rgba(184, 0, 0, 0.20)'}`,
          boxShadow: selected ? `0 4px 20px ${tierColor}20, 0 0 1px ${tierColor}40` : '0 2px 8px rgba(0,0,0,0.3)',
          width: 270,
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            {statusColor && (
              <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: statusColor, boxShadow: `0 0 6px ${statusColor}` }} />
            )}
            <span className="text-[11px] font-bold text-white truncate">{data.name}</span>
          </div>
          {status && (
            <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider flex-shrink-0"
              style={{ color: statusColor, border: `1px solid ${statusColor}50`, borderRadius: 4 }}>
              {status}
            </span>
          )}
        </div>
        {data.role && <p className="text-[9px] text-zinc-500 leading-relaxed mb-2 line-clamp-2">{data.role}</p>}
        <div className="h-px mb-2" style={{ background: `linear-gradient(to right, ${tierColor}20, transparent)` }} />
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider"
            style={{ color: tierColor, border: `1px solid ${tierColor}30`, borderRadius: 4, backgroundColor: `${tierColor}08` }}>
            {tier}
          </span>
          {data.charges && (data.charges as string[]).length > 0 && (
            <span className="text-[8px] text-red-500/60 font-mono">{(data.charges as string[]).length} charges</span>
          )}
          {totalMoney > 0 && (
            <span className="text-[8px] text-yellow-500/60 font-mono flex items-center gap-0.5">
              <DollarSign className="w-2.5 h-2.5" />{totalMoney}
            </span>
          )}
          {data.href && <ArrowUpRight className="w-3 h-3 text-zinc-700 ml-auto" />}
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function OrgNode({ data, selected }: any) {
  const tier = data.tier as string;
  const tierColor = (ORG_TIER_COLORS as Record<string, string>)[tier] || '#6b7280';
  const moneyIn = (data.moneyIn as MoneyTransaction[]) || [];
  const moneyOut = (data.moneyOut as MoneyTransaction[]) || [];
  const totalMoney = moneyIn.length + moneyOut.length;

  return (
    <>
      <Handle type="target" position={Position.Left} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`p-4 transition-all duration-200 ${selected ? 'ring-2 ring-white/25' : ''}`}
        style={{
          ...glassBase,
          border: `1px solid ${selected ? tierColor : 'rgba(184, 0, 0, 0.20)'}`,
          boxShadow: selected ? `0 4px 20px ${tierColor}20, 0 0 1px ${tierColor}40` : '0 2px 8px rgba(0,0,0,0.3)',
          width: 270,
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <Building2 className="w-3 h-3 flex-shrink-0" style={{ color: tierColor }} />
            <span className="text-[11px] font-bold text-white truncate">{data.name}</span>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider flex-shrink-0"
            style={{ color: tierColor, border: `1px solid ${tierColor}40`, borderRadius: 4 }}>
            {data.entityType}
          </span>
        </div>
        {data.role && <p className="text-[9px] text-zinc-500 leading-relaxed mb-2 line-clamp-2">{data.role}</p>}
        <div className="h-px mb-2" style={{ background: `linear-gradient(to right, ${tierColor}20, transparent)` }} />
        <div className="flex items-center gap-2">
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider"
            style={{ color: tierColor, border: `1px solid ${tierColor}30`, borderRadius: 4, backgroundColor: `${tierColor}08` }}>
            {tier}
          </span>
          {totalMoney > 0 && (
            <span className="text-[8px] text-yellow-500/60 font-mono flex items-center gap-0.5">
              <DollarSign className="w-2.5 h-2.5" />{totalMoney} txns
            </span>
          )}
          {data.href && <ArrowUpRight className="w-3 h-3 text-zinc-700 ml-auto" />}
        </div>
      </div>
    </>
  );
}

// ============================================================
// NODE TYPES (defined outside component to prevent re-creation)
// ============================================================

const nodeTypes = {
  rootNode: memo(RootNode),
  categoryNode: memo(CategoryNode),
  tierNode: memo(TierNode),
  personNode: memo(PersonNode),
  orgNode: memo(OrgNode),
};

// ============================================================
// GLASS PANEL (collapsible wrapper)
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
    <div className={className} style={{ ...glassBase, border: '1px solid rgba(184, 0, 0, 0.25)' }}>
      <button onClick={() => setIsOpen(!isOpen)} className="w-full flex items-center justify-between p-4 cursor-pointer select-none group">
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
            <div className="px-4 pb-4 border-t border-[rgba(184,0,0,0.10)] pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================
// MINIMAP NODE COLOR
// ============================================================

function minimapNodeColor(node: AppNode): string {
  const d = node.data;
  if (d.nodeType === 'root') return SEVERITY_COLORS[d.severity || 'critical'] || '#dc2626';
  if (d.nodeType === 'category') return (d.color as string) || '#555';
  if (d.nodeType === 'tier') return (d.color as string) || '#444';
  if (d.nodeType === 'person') return (PERSON_TIER_COLORS as Record<string, string>)[d.tier || ''] || '#555';
  if (d.nodeType === 'org') return (ORG_TIER_COLORS as Record<string, string>)[d.tier || ''] || '#555';
  return '#333';
}

// ============================================================
// MAIN CONTENT COMPONENT
// ============================================================

function NetworkTreeContent({ investigation }: { investigation: InvestigationData }) {
  const reactFlow = useReactFlow();
  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<AppEdge>([]);
  const [isLayouting, setIsLayouting] = useState(true);

  // State
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPeople, setShowPeople] = useState(true);
  const [showOrgs, setShowOrgs] = useState(true);

  // Derived data
  const defendants = investigation.defendants || [];
  const affiliations = investigation.affiliations || [];
  const moneyTrail = investigation.moneyTrail || [];
  const orgAffiliations = affiliations.filter(a => a.type !== 'individual');

  // Selected node data
  const selectedNodeData = useMemo(() => {
    if (!selectedNodeId) return null;
    return nodes.find(n => n.id === selectedNodeId)?.data || null;
  }, [selectedNodeId, nodes]);

  // Tier / status counts
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
    defendants.forEach(d => map.set(d.status, (map.get(d.status) || 0) + 1));
    return Array.from(map.entries()).sort((a, b) => b[1] - a[1]);
  }, [defendants]);

  // ELK layout computation
  useEffect(() => {
    let cancelled = false;
    async function layout() {
      setIsLayouting(true);
      const { nodes: graphNodes, edges: graphEdges } = buildGraphData(investigation, collapsedNodes, showPeople, showOrgs);

      try {
        const layoutedNodes = await computeElkLayout(graphNodes, graphEdges);
        if (!cancelled) {
          setNodes(layoutedNodes);
          setEdges(graphEdges);
          setTimeout(() => {
            reactFlow.fitView({ padding: 0.15, duration: 400 });
          }, 80);
        }
      } catch (err) {
        console.error('ELK layout failed:', err);
        if (!cancelled) {
          setNodes(graphNodes);
          setEdges(graphEdges);
        }
      }
      if (!cancelled) setIsLayouting(false);
    }
    layout();
    return () => { cancelled = true; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [investigation, collapsedNodes, showPeople, showOrgs]);

  // Node click handler
  const onNodeClick = useCallback((_event: React.MouseEvent, node: AppNode) => {
    const data = node.data;

    // Toggle collapse for category/tier nodes
    if (data.nodeType === 'category' || data.nodeType === 'tier') {
      setCollapsedNodes(prev => {
        const next = new Set(prev);
        if (next.has(node.id)) next.delete(node.id);
        else next.add(node.id);
        return next;
      });
    }

    // Select person/org nodes
    if (data.nodeType === 'person' || data.nodeType === 'org') {
      setSelectedNodeId(prev => prev === node.id ? null : node.id);
    }
  }, []);

  // Search
  const searchMatches = useMemo(() => {
    if (!searchQuery) return 0;
    const q = searchQuery.toLowerCase();
    return nodes.filter(n => ((n.data.name || n.data.label || '') as string).toLowerCase().includes(q)).length;
  }, [searchQuery, nodes]);

  // Stats
  const stats = useMemo(() => ({
    people: nodes.filter(n => n.data.nodeType === 'person').length,
    orgs: nodes.filter(n => n.data.nodeType === 'org').length,
    total: nodes.filter(n => n.data.nodeType === 'person' || n.data.nodeType === 'org').length,
  }), [nodes]);

  // Actions
  const handleFitView = () => reactFlow.fitView({ padding: 0.15, duration: 500 });
  const handleExpandAll = () => setCollapsedNodes(new Set());
  const handleCollapseAll = () => {
    const ids = new Set<string>();
    ids.add('people');
    ids.add('orgs');
    setCollapsedNodes(ids);
  };
  const handleReset = () => {
    setCollapsedNodes(new Set());
    setShowPeople(true);
    setShowOrgs(true);
    setSearchQuery('');
    setSelectedNodeId(null);
  };

  // Select defendant from roster
  const selectDefendant = useCallback((def: Defendant) => {
    const personId = `person-${slugifyName(def.name)}`;
    // Expand path to this node
    const tier = classifyPerson(def, null);
    const tierId = `tier-${slugifyName(tier)}`;
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      next.delete('people');
      next.delete(tierId);
      return next;
    });
    setSelectedNodeId(personId);
    // Center on node after layout
    setTimeout(() => {
      const node = reactFlow.getNode(personId);
      if (node) {
        const dims = NODE_DIMENSIONS.personNode;
        reactFlow.setCenter(node.position.x + dims.width / 2, node.position.y + dims.height / 2, { zoom: 1.2, duration: 600 });
      }
    }, 300);
  }, [reactFlow]);

  // Select org from directory
  const selectOrg = useCallback((aff: Affiliation) => {
    const orgId = `org-${slugifyName(aff.name)}`;
    const tier = classifyOrg(aff);
    const tierId = `org-tier-${slugifyName(tier)}`;
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      next.delete('orgs');
      next.delete(tierId);
      return next;
    });
    setSelectedNodeId(orgId);
    setTimeout(() => {
      const node = reactFlow.getNode(orgId);
      if (node) {
        const dims = NODE_DIMENSIONS.orgNode;
        reactFlow.setCenter(node.position.x + dims.width / 2, node.position.y + dims.height / 2, { zoom: 1.2, duration: 600 });
      }
    }, 300);
  }, [reactFlow]);

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
      {/* === CUSTOM STYLES === */}
      <style>{`
        .react-flow__minimap { background: #020202 !important; border: 1px solid rgba(184,0,0,0.20) !important; border-radius: 8px !important; }
        .react-flow__controls { gap: 4px !important; }
        .react-flow__controls button { background: #080808 !important; border: 1px solid rgba(184,0,0,0.20) !important; border-radius: 6px !important; color: #a1a1aa !important; }
        .react-flow__controls button:hover { background: #0a0000 !important; border-color: rgba(184,0,0,0.45) !important; color: #e4e4e7 !important; }
        .react-flow__controls button svg { fill: currentColor !important; }
        .react-flow__node { transition: transform 0.3s ease-out !important; }
        .react-flow__edge path { transition: d 0.3s ease-out !important; }
        .react-flow__attribution { display: none !important; }
        .react-flow__background { opacity: 1 !important; }
      `}</style>

      {/* === HEADER + SEARCH === */}
      <div style={{ ...glassBase, border: '1px solid rgba(184, 0, 0, 0.25)' }} className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Network className="w-5 h-5 text-red-400" />
              Network Analysis
            </h2>
            <p className="text-xs text-zinc-500 font-mono tracking-wider mt-1">
              REACT FLOW + ELK LAYOUT ENGINE // CLICK GROUPS TO EXPAND/COLLAPSE // DRAG TO PAN // SCROLL TO ZOOM
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
              style={{ borderRadius: 8 }}
            />
            {searchQuery && (
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold text-orange-400">{searchMatches} found</span>
                <button onClick={() => setSearchQuery('')} className="text-zinc-600 hover:text-white"><X className="w-3.5 h-3.5" /></button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* === MAIN GRID === */}
      <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr_260px] gap-4">

        {/* ---- LEFT COLUMN ---- */}
        <div className="space-y-4">
          <GlassPanel title="Controls" icon={<Filter className="w-4 h-4" />}>
            <div className="space-y-3">
              {/* People / Orgs toggles */}
              <div className="flex gap-2">
                <button onClick={() => setShowPeople(!showPeople)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showPeople ? 'border-red-800/40 text-red-400 bg-red-950/20' : 'border-zinc-800 text-zinc-600'
                  }`} style={{ borderRadius: 6 }}>
                  <Users className="w-3 h-3" /> People
                </button>
                <button onClick={() => setShowOrgs(!showOrgs)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showOrgs ? 'border-yellow-800/40 text-yellow-400 bg-yellow-950/20' : 'border-zinc-800 text-zinc-600'
                  }`} style={{ borderRadius: 6 }}>
                  <Building2 className="w-3 h-3" /> Orgs
                </button>
              </div>
              {/* Action buttons */}
              <div className="grid grid-cols-2 gap-2">
                {[
                  { label: 'Fit View', icon: Maximize2, fn: handleFitView },
                  { label: 'Reset', icon: RotateCcw, fn: handleReset },
                  { label: 'Expand All', icon: UnfoldVertical, fn: handleExpandAll },
                  { label: 'Collapse', icon: FoldVertical, fn: handleCollapseAll },
                ].map(({ label, icon: Icon, fn }) => (
                  <button key={label} onClick={fn}
                    className="flex items-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase tracking-wider px-2 py-2 border border-zinc-800 hover:border-red-900/40 hover:text-red-400 transition-all"
                    style={{ borderRadius: 6 }}>
                    <Icon className="w-3 h-3" /> {label}
                  </button>
                ))}
              </div>
            </div>
          </GlassPanel>

          <GlassPanel title="Statistics" icon={<Activity className="w-4 h-4" />}>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 6 }}>
                  <div className="text-lg font-black text-white font-mono">{stats.total}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">Total</div>
                </div>
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 6 }}>
                  <div className="text-lg font-black text-red-400 font-mono">{stats.people}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">People</div>
                </div>
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 6 }}>
                  <div className="text-lg font-black text-yellow-400 font-mono">{stats.orgs}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">Orgs</div>
                </div>
              </div>
              {tierCounts.length > 0 && (
                <div>
                  <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1.5">By Tier</p>
                  {tierCounts.map(([tier, count]) => {
                    const color = (PERSON_TIER_COLORS as Record<string, string>)[tier] || '#555';
                    return (
                      <div key={tier} className="flex items-center justify-between py-0.5">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
                          <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                        </div>
                        <span className="text-[10px] font-mono font-bold" style={{ color }}>{count}</span>
                      </div>
                    );
                  })}
                </div>
              )}
              {statusCounts.length > 0 && (
                <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                  <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1.5">By Status</p>
                  {statusCounts.map(([status, count]) => (
                    <div key={status} className="flex items-center justify-between py-0.5">
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: STATUS_COLORS[status] || '#555' }} />
                        <span className="text-[10px] text-zinc-500 font-mono capitalize">{status}</span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-400">{count}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </GlassPanel>
        </div>

        {/* ---- CENTER: GRAPH ---- */}
        <div className="relative min-h-[500px] h-[60vh] max-h-[800px]" style={{ ...glassBase, border: '1px solid rgba(184, 0, 0, 0.25)', overflow: 'hidden' }}>
          {isLayouting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50" style={{ borderRadius: 12 }}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-[10px] text-red-400 font-mono uppercase tracking-wider">Computing Layout...</span>
              </div>
            </div>
          )}
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            nodeTypes={nodeTypes}
            colorMode="dark"
            fitView
            minZoom={0.08}
            maxZoom={3}
            defaultEdgeOptions={{
              type: 'smoothstep',
              style: { strokeWidth: 1.5 },
            }}
            proOptions={{ hideAttribution: true }}
          >
            <Background variant={BackgroundVariant.Lines} gap={40} size={0.5} color="rgba(184, 0, 0, 0.04)" />
            <MiniMap
              nodeColor={minimapNodeColor}
              nodeStrokeWidth={2}
              style={{ background: '#020202', borderRadius: 8, border: '1px solid rgba(184,0,0,0.20)' }}
              maskColor="rgba(0, 0, 0, 0.7)"
            />
            <Controls showInteractive={false} />
          </ReactFlow>
        </div>

        {/* ---- RIGHT COLUMN ---- */}
        <div className="space-y-4">
          <GlassPanel title="Legend" icon={<Shield className="w-4 h-4" />}>
            <div className="space-y-3">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">People Tiers</p>
                {(Object.entries(PERSON_TIER_COLORS) as [PersonTier, string][]).map(([tier, color]) => (
                  <div key={tier} className="flex items-center gap-2 py-0.5">
                    <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color, borderRadius: 2 }} />
                    <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Organization Types</p>
                {(Object.entries(ORG_TIER_COLORS) as [OrgTier, string][]).map(([tier, color]) => (
                  <div key={tier} className="flex items-center gap-2 py-0.5">
                    <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color, borderRadius: 2 }} />
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

          <GlassPanel title="Node Details" icon={<Target className="w-4 h-4" />}
            badge={selectedNodeData ? <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> : undefined}>
            {selectedNodeData ? (
              <div className="space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{selectedNodeData.name || selectedNodeData.label}</h4>
                    {selectedNodeData.status && (
                      <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase border flex-shrink-0"
                        style={{ color: STATUS_COLORS[selectedNodeData.status] || '#777', borderColor: `${STATUS_COLORS[selectedNodeData.status] || '#777'}60`, borderRadius: 4 }}>
                        {selectedNodeData.status}
                      </span>
                    )}
                  </div>
                  {selectedNodeData.role && <p className="text-[11px] text-zinc-400 leading-relaxed">{selectedNodeData.role}</p>}
                  {selectedNodeData.tier && (
                    <div className="flex items-center gap-2 mt-1.5">
                      <span className="text-[9px] px-1.5 py-0.5 border font-bold uppercase"
                        style={{
                          color: (PERSON_TIER_COLORS as Record<string, string>)[selectedNodeData.tier] || (ORG_TIER_COLORS as Record<string, string>)[selectedNodeData.tier] || '#555',
                          borderColor: `${(PERSON_TIER_COLORS as Record<string, string>)[selectedNodeData.tier] || (ORG_TIER_COLORS as Record<string, string>)[selectedNodeData.tier] || '#555'}40`,
                          borderRadius: 4,
                        }}>
                        {selectedNodeData.tier}
                      </span>
                    </div>
                  )}
                </div>

                {selectedNodeData.charges && (selectedNodeData.charges as string[]).length > 0 && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Charges</p>
                    {(selectedNodeData.charges as string[]).map((c, i) => (
                      <p key={i} className="text-[10px] text-red-400/80 py-0.5 flex items-start gap-1.5">
                        <span className="text-red-600 mt-0.5 flex-shrink-0">&#9632;</span> {c}
                      </p>
                    ))}
                  </div>
                )}

                {selectedNodeData.sentence && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Outcome</p>
                    <p className="text-[11px] text-zinc-300">{selectedNodeData.sentence}</p>
                  </div>
                )}

                {selectedNodeData.fine && (
                  <div>
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Fine</p>
                    <p className="text-[11px] text-yellow-400/80">{selectedNodeData.fine}</p>
                  </div>
                )}

                {((selectedNodeData.moneyIn as MoneyTransaction[])?.length > 0 || (selectedNodeData.moneyOut as MoneyTransaction[])?.length > 0) && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Financial Links</p>
                    {(selectedNodeData.moneyIn as MoneyTransaction[])?.map((m, i) => (
                      <p key={`in-${i}`} className="text-[10px] text-green-400/70 py-0.5 flex items-start gap-1.5">
                        <span className="text-green-600 flex-shrink-0">&#9650;</span> {m.amount} from {m.from}
                      </p>
                    ))}
                    {(selectedNodeData.moneyOut as MoneyTransaction[])?.map((m, i) => (
                      <p key={`out-${i}`} className="text-[10px] text-red-400/70 py-0.5 flex items-start gap-1.5">
                        <span className="text-red-600 flex-shrink-0">&#9660;</span> {m.amount} to {m.to}
                      </p>
                    ))}
                  </div>
                )}

                {selectedNodeData.href && (
                  <Link href={selectedNodeData.href as string}
                    className="flex items-center gap-1.5 text-[10px] text-red-400 hover:text-red-300 font-mono mt-2 transition-colors">
                    <Eye className="w-3 h-3" /> View Full Profile <ArrowUpRight className="w-3 h-3" />
                  </Link>
                )}
              </div>
            ) : (
              <p className="text-[11px] text-zinc-600 italic">Click a person or organization node to view details</p>
            )}
          </GlassPanel>
        </div>
      </div>

      {/* === BOTTOM PANELS === */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Defendant Roster */}
        <GlassPanel title={`Defendants (${defendants.length})`} icon={<Users className="w-4 h-4" />} defaultOpen={defendants.length <= 10}>
          <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {defendants.map((def, i) => {
              const tier = classifyPerson(def, null);
              const color = PERSON_TIER_COLORS[tier];
              const statusColor = STATUS_COLORS[def.status] || '#555';
              const isSelected = selectedNodeId === `person-${slugifyName(def.name)}`;
              return (
                <button key={i} onClick={() => selectDefendant(def)}
                  className={`w-full text-left p-2.5 border transition-all ${
                    isSelected ? 'border-red-700/50 bg-red-950/20' : 'border-[rgba(184,0,0,0.10)] hover:border-[rgba(184,0,0,0.30)]'
                  }`} style={{ borderRadius: 8 }}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-bold text-white truncate">{def.name}</span>
                    <span className="text-[8px] px-1 py-0.5 font-bold uppercase flex-shrink-0"
                      style={{ color: statusColor, border: `1px solid ${statusColor}40`, borderRadius: 3 }}>
                      {def.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[8px] font-bold uppercase" style={{ color }}>{tier}</span>
                    {def.charges && <span className="text-[8px] text-zinc-600 font-mono">{def.charges.length} charges</span>}
                  </div>
                </button>
              );
            })}
          </div>
        </GlassPanel>

        {/* Organization Directory */}
        <GlassPanel title={`Organizations (${orgAffiliations.length})`} icon={<Building2 className="w-4 h-4" />} defaultOpen={orgAffiliations.length <= 10}>
          <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {orgAffiliations.map((aff, i) => {
              const tier = classifyOrg(aff);
              const color = ORG_TIER_COLORS[tier];
              const isSelected = selectedNodeId === `org-${slugifyName(aff.name)}`;
              return (
                <button key={i} onClick={() => selectOrg(aff)}
                  className={`w-full text-left p-2.5 border transition-all ${
                    isSelected ? 'border-yellow-700/50 bg-yellow-950/20' : 'border-[rgba(184,0,0,0.10)] hover:border-[rgba(184,0,0,0.30)]'
                  }`} style={{ borderRadius: 8 }}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-bold text-white truncate">{aff.name}</span>
                    <span className="text-[8px] px-1 py-0.5 font-bold uppercase flex-shrink-0"
                      style={{ color, border: `1px solid ${color}40`, borderRadius: 3 }}>
                      {aff.type}
                    </span>
                  </div>
                  <p className="text-[9px] text-zinc-500 line-clamp-1">{aff.relationship}</p>
                </button>
              );
            })}
          </div>
        </GlassPanel>

        {/* Money Trail */}
        <GlassPanel title={`Money Trail (${moneyTrail.length})`} icon={<DollarSign className="w-4 h-4" />} defaultOpen={moneyTrail.length <= 8}>
          <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
            {moneyTrail.map((txn, i) => (
              <div key={i} className="p-2.5 border border-[rgba(184,0,0,0.10)]" style={{ borderRadius: 8 }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-500 font-mono">{txn.date}</span>
                  <span className="text-[10px] font-bold text-yellow-400">{txn.amount}</span>
                </div>
                <div className="text-[9px] space-y-0.5">
                  <p className="text-zinc-500">
                    <span className="text-red-400/60">From:</span> {txn.from.length > 40 ? txn.from.substring(0, 38) + '..' : txn.from}
                  </p>
                  <p className="text-zinc-500">
                    <span className="text-green-400/60">To:</span> {txn.to.length > 40 ? txn.to.substring(0, 38) + '..' : txn.to}
                  </p>
                </div>
                <p className="text-[8px] text-zinc-600 mt-1 line-clamp-2">{txn.purpose}</p>
              </div>
            ))}
          </div>
        </GlassPanel>
      </div>
    </motion.div>
  );
}

// ============================================================
// EXPORTED WRAPPER
// ============================================================

interface NetworkTreeProps {
  investigation: InvestigationData;
}

export default function NetworkTree({ investigation }: NetworkTreeProps) {
  return (
    <ReactFlowProvider>
      <NetworkTreeContent investigation={investigation} />
    </ReactFlowProvider>
  );
}
