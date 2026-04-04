'use client';

import React, { useState, useEffect, useCallback, useMemo, useRef, memo } from 'react';
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
  getBezierPath,
  EdgeLabelRenderer,
  getNodesBounds,
  getViewportForBounds,
  type Node,
  type Edge,
  type EdgeProps,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import ELK from 'elkjs/lib/elk.bundled.js';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { toPng } from 'html-to-image';
import {
  Search, X, Filter, Network, Building2, DollarSign,
  Target, Shield, ChevronDown, ChevronRight,
  Activity, Users, Eye, ArrowUpRight,
  Maximize2, Minimize2, RotateCcw, FoldVertical, UnfoldVertical,
  Download,
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
  isSearchMatch?: boolean;
  hasActiveSearch?: boolean;
  [key: string]: unknown;
}

interface MoneyEdgeData {
  amount: string;
  totalCount: number;
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
  critical: '#ef4444',
  high: '#dc2626',
  medium: '#b91c1c',
  low: '#991b1b',
};

const SEVERITY_PULSE_SPEED: Record<string, number> = {
  critical: 1.2,
  high: 2,
  medium: 3,
  low: 4.5,
};

const PERSON_TIER_COLORS: Record<PersonTier, string> = {
  'Primary Defendant': '#ef4444',
  'Co-Conspirator': '#f97316',
  Politician: '#8b5cf6',
  Regulator: '#06b6d4',
  Whistleblower: '#22c55e',
  Other: '#a1a1aa',
};

const ORG_TIER_COLORS: Record<OrgTier, string> = {
  Corporation: '#eab308',
  Agency: '#3b82f6',
  Organization: '#10b981',
};

const STATUS_COLORS: Record<string, string> = {
  convicted: '#ef4444',
  incarcerated: '#f97316',
  indicted: '#f59e0b',
  charged: '#eab308',
  pending: '#71717a',
  settled: '#64748b',
  acquitted: '#22c55e',
  pardoned: '#a855f7',
  appealing: '#06b6d4',
  released: '#14b8a6',
};

const NODE_DIMENSIONS: Record<string, { width: number; height: number }> = {
  rootNode: { width: 400, height: 80 },
  categoryNode: { width: 170, height: 48 },
  tierNode: { width: 190, height: 42 },
  personNode: { width: 240, height: 115 },
  orgNode: { width: 240, height: 100 },
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
      'elk.algorithm': 'mrtree',
      'elk.direction': 'DOWN',
      'elk.spacing.nodeNode': '20',
      'elk.spacing.edgeNode': '12',
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
// MONEY FLOW EDGE MATCHING
// ============================================================

function findMatchingNode(term: string, nodes: AppNode[]): AppNode | undefined {
  const t = term.toLowerCase();
  // Exact name match
  let match = nodes.find(n => ((n.data.name as string) || '').toLowerCase() === t);
  if (match) return match;
  // Name appears inside the term
  match = nodes.find(n => {
    const name = ((n.data.name as string) || '').toLowerCase();
    return name.length > 3 && t.includes(name);
  });
  if (match) return match;
  // Last name match
  return nodes.find(n => {
    const name = ((n.data.name as string) || '').toLowerCase();
    const lastName = name.split(' ').pop() || '';
    return lastName.length > 3 && t.includes(lastName);
  });
}

function buildMoneyFlowEdges(moneyTrail: MoneyTransaction[], visibleNodes: AppNode[]): AppEdge[] {
  const leafNodes = visibleNodes.filter(n => n.data.nodeType === 'person' || n.data.nodeType === 'org');
  if (leafNodes.length === 0 || moneyTrail.length === 0) return [];

  const edgeMap = new Map<string, { sourceId: string; targetId: string; amounts: string[]; count: number }>();

  for (const txn of moneyTrail) {
    const sourceNode = findMatchingNode(txn.from, leafNodes);
    const targetNode = findMatchingNode(txn.to, leafNodes);
    if (sourceNode && targetNode && sourceNode.id !== targetNode.id) {
      const key = `${sourceNode.id}|${targetNode.id}`;
      if (!edgeMap.has(key)) {
        edgeMap.set(key, { sourceId: sourceNode.id, targetId: targetNode.id, amounts: [], count: 0 });
      }
      const entry = edgeMap.get(key)!;
      entry.amounts.push(txn.amount);
      entry.count++;
    }
  }

  return Array.from(edgeMap.values()).map((entry) => ({
    id: `money-${entry.sourceId}-${entry.targetId}`,
    source: entry.sourceId,
    target: entry.targetId,
    sourceHandle: 'money-out',
    targetHandle: 'money-in',
    type: 'moneyFlow',
    data: { amount: entry.amounts[0], totalCount: entry.count } as MoneyEdgeData,
    markerEnd: { type: MarkerType.ArrowClosed, color: '#eab308', width: 10, height: 10 },
  }));
}

// ============================================================
// BUILD GRAPH DATA (tree structure)
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
// CUSTOM EDGE: MONEY FLOW
// ============================================================

function MoneyFlowEdge({
  sourceX, sourceY, targetX, targetY,
  sourcePosition, targetPosition, data, markerEnd,
}: EdgeProps) {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX, sourceY, sourcePosition,
    targetX, targetY, targetPosition,
  });
  const edgeData = data as MoneyEdgeData | undefined;
  const amount = edgeData?.amount;
  const count = edgeData?.totalCount || 1;

  return (
    <>
      <path d={edgePath} fill="none" stroke="rgba(234,179,8,0.10)" strokeWidth={8} />
      <path
        d={edgePath}
        fill="none"
        stroke="#eab308"
        strokeWidth={1.5}
        strokeDasharray="6 4"
        strokeOpacity={0.7}
        className="money-flow-animate"
        markerEnd={markerEnd as string}
      />
      {amount && (
        <EdgeLabelRenderer>
          <div
            style={{
              position: 'absolute',
              transform: `translate(-50%, -50%) translate(${labelX}px, ${labelY}px)`,
              pointerEvents: 'none',
            }}
            className="nodrag nopan"
          >
            <span
              className="text-[7px] font-mono font-bold text-red-400/90 bg-black/90 px-1.5 py-0.5 border border-red-900/40 whitespace-nowrap"
              style={{ borderRadius: 8 }}
            >
              $ {amount}{count > 1 ? ` (×${count})` : ''}
            </span>
          </div>
        </EdgeLabelRenderer>
      )}
    </>
  );
}

// ============================================================
// CUSTOM NODE COMPONENTS
// ============================================================

const glassBase: React.CSSProperties = {
  background: 'linear-gradient(160deg, #080808 0%, #020202 40%, #060606 100%)',
  borderRadius: 8,
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function RootNode({ data, selected }: any) {
  const sevColor = SEVERITY_COLORS[data.severity] || '#dc2626';
  const pulseSpeed = SEVERITY_PULSE_SPEED[data.severity as string] || 3;

  return (
    <>
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div className="relative">
        {/* Severity pulse rings */}
        <div className="absolute -inset-4 pointer-events-none overflow-visible">
          <div
            className="absolute inset-0"
            style={{
              border: `2px solid ${sevColor}`,
              borderRadius: 8,
              animation: `severityPulse ${pulseSpeed}s ease-out infinite`,
            }}
          />
          <div
            className="absolute inset-0"
            style={{
              border: `1px solid ${sevColor}`,
              borderRadius: 8,
              animation: `severityPulse ${pulseSpeed}s ease-out infinite`,
              animationDelay: `${pulseSpeed / 2}s`,
            }}
          />
        </div>
        {/* Node content */}
        <div
          className={`px-6 py-4 transition-all duration-200 ${selected ? 'ring-2 ring-white/30' : ''}`}
          style={{
            ...glassBase,
            border: `2px solid ${sevColor}40`,
            boxShadow: selected ? `0 0 30px ${sevColor}30` : `0 0 15px ${sevColor}15`,
            minWidth: 420,
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-3 h-3 rounded-sm animate-pulse" style={{ backgroundColor: sevColor, boxShadow: `0 0 8px ${sevColor}` }} />
            <span className="text-sm font-black text-white uppercase tracking-wider leading-tight">
              {data.title}
            </span>
          </div>
          <div className="flex items-center gap-4 text-[10px] font-mono">
            <span style={{ color: sevColor }} className="font-bold uppercase tracking-wider">{(data.severity as string)?.toUpperCase()}</span>
            <span className="text-zinc-500">{data.entityCount} entities</span>
            <span className="text-zinc-500">{data.defendantCount} defendants</span>
            <span className="text-zinc-500">{data.transactionCount} txns</span>
          </div>
        </div>
      </div>
    </>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CategoryNode({ data, selected }: any) {
  const color = data.color as string;
  const isCollapsed = data.isCollapsed as boolean;
  const hasSearch = data.hasActiveSearch as boolean | undefined;
  const isMatch = data.isSearchMatch as boolean | undefined;
  const dimStyle: React.CSSProperties = hasSearch && !isMatch ? { opacity: 0.2, filter: 'grayscale(0.5)' } : {};
  const glowStyle: React.CSSProperties = isMatch ? { boxShadow: `0 0 20px rgba(251,146,60,0.4), 0 0 40px rgba(251,146,60,0.15)`, borderColor: '#fb923c' } : {};

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`px-5 py-3 flex items-center gap-3 cursor-pointer transition-all duration-300 ${selected ? 'ring-2 ring-white/20' : ''}`}
        style={{ ...glassBase, border: `1.5px solid ${color}40`, boxShadow: `0 0 10px ${color}10`, ...dimStyle, ...glowStyle }}
      >
        <Users className="w-4 h-4 flex-shrink-0" style={{ color }} />
        <span className="text-xs font-black text-white uppercase tracking-wider">{data.category}</span>
        <span className="text-[10px] font-mono px-2 py-0.5" style={{ color, backgroundColor: `${color}15`, border: `1px solid ${color}30`, borderRadius: 8 }}>
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
  const hasSearch = data.hasActiveSearch as boolean | undefined;
  const isMatch = data.isSearchMatch as boolean | undefined;
  const dimStyle: React.CSSProperties = hasSearch && !isMatch ? { opacity: 0.2, filter: 'grayscale(0.5)' } : {};
  const glowStyle: React.CSSProperties = isMatch ? { boxShadow: `0 0 20px rgba(251,146,60,0.4), 0 0 40px rgba(251,146,60,0.15)`, borderColor: '#fb923c' } : {};

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Bottom} className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`px-4 py-2.5 flex items-center gap-2 cursor-pointer transition-all duration-300 ${selected ? 'ring-1 ring-white/15' : ''}`}
        style={{ ...glassBase, background: `linear-gradient(160deg, ${color}08 0%, #020202 100%)`, border: `1px solid ${color}30`, borderRadius: 8, ...dimStyle, ...glowStyle }}
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

  const hasSearch = data.hasActiveSearch as boolean | undefined;
  const isMatch = data.isSearchMatch as boolean | undefined;
  const dimStyle: React.CSSProperties = hasSearch && !isMatch ? { opacity: 0.15, filter: 'grayscale(0.6)', transform: 'scale(0.97)' } : {};
  const glowStyle: React.CSSProperties = isMatch
    ? { boxShadow: `0 0 25px rgba(251,146,60,0.5), 0 0 50px rgba(251,146,60,0.2), 0 4px 20px ${tierColor}20`, borderColor: '#fb923c', transform: 'scale(1.02)' }
    : {};

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Right} id="money-out" className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} id="money-in" className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`p-4 transition-all duration-300 ${selected ? 'ring-2 ring-white/25' : ''}`}
        style={{
          ...glassBase,
          border: `1px solid ${selected ? tierColor : 'rgba(184, 0, 0, 0.20)'}`,
          boxShadow: selected ? `0 4px 20px ${tierColor}20, 0 0 1px ${tierColor}40` : '0 2px 8px rgba(0,0,0,0.3)',
          width: 230,
          ...dimStyle,
          ...glowStyle,
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            {statusColor && (
              <div className="w-2 h-2 rounded-full flex-shrink-0 animate-pulse" style={{ backgroundColor: statusColor, boxShadow: `0 0 6px ${statusColor}` }} />
            )}
            <span className="text-[11px] font-bold text-white">{data.name}</span>
          </div>
          {status && (
            <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider flex-shrink-0"
              style={{ color: statusColor, border: `1px solid ${statusColor}50`, borderRadius: 8 }}>
              {status}
            </span>
          )}
        </div>
        {data.role && <p className="text-[9px] text-zinc-500 leading-relaxed mb-2">{data.role}</p>}
        <div className="h-px mb-2" style={{ background: `linear-gradient(to right, ${tierColor}20, transparent)` }} />
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider"
            style={{ color: tierColor, border: `1px solid ${tierColor}30`, borderRadius: 8, backgroundColor: `${tierColor}08` }}>
            {tier}
          </span>
          {data.charges && (data.charges as string[]).length > 0 && (
            <span className="text-[8px] text-red-500/60 font-mono">{(data.charges as string[]).length} charges</span>
          )}
          {totalMoney > 0 && (
            <span className="text-[8px] text-red-500/60 font-mono flex items-center gap-0.5">
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

  const hasSearch = data.hasActiveSearch as boolean | undefined;
  const isMatch = data.isSearchMatch as boolean | undefined;
  const dimStyle: React.CSSProperties = hasSearch && !isMatch ? { opacity: 0.15, filter: 'grayscale(0.6)', transform: 'scale(0.97)' } : {};
  const glowStyle: React.CSSProperties = isMatch
    ? { boxShadow: `0 0 25px rgba(251,146,60,0.5), 0 0 50px rgba(251,146,60,0.2), 0 4px 20px ${tierColor}20`, borderColor: '#fb923c', transform: 'scale(1.02)' }
    : {};

  return (
    <>
      <Handle type="target" position={Position.Top} className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="source" position={Position.Right} id="money-out" className="!bg-transparent !border-0 !w-0 !h-0" />
      <Handle type="target" position={Position.Left} id="money-in" className="!bg-transparent !border-0 !w-0 !h-0" />
      <div
        className={`p-4 transition-all duration-300 ${selected ? 'ring-2 ring-white/25' : ''}`}
        style={{
          ...glassBase,
          border: `1px solid ${selected ? tierColor : 'rgba(184, 0, 0, 0.20)'}`,
          boxShadow: selected ? `0 4px 20px ${tierColor}20, 0 0 1px ${tierColor}40` : '0 2px 8px rgba(0,0,0,0.3)',
          width: 230,
          ...dimStyle,
          ...glowStyle,
        }}
      >
        <div className="flex items-start justify-between gap-2 mb-1.5">
          <div className="flex items-center gap-2 min-w-0">
            <Building2 className="w-3 h-3 flex-shrink-0" style={{ color: tierColor }} />
            <span className="text-[11px] font-bold text-white">{data.name}</span>
          </div>
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider flex-shrink-0"
            style={{ color: tierColor, border: `1px solid ${tierColor}40`, borderRadius: 8 }}>
            {data.entityType}
          </span>
        </div>
        {data.role && <p className="text-[9px] text-zinc-500 leading-relaxed mb-2">{data.role}</p>}
        <div className="h-px mb-2" style={{ background: `linear-gradient(to right, ${tierColor}20, transparent)` }} />
        <div className="flex items-center gap-2">
          <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider"
            style={{ color: tierColor, border: `1px solid ${tierColor}30`, borderRadius: 8, backgroundColor: `${tierColor}08` }}>
            {tier}
          </span>
          {totalMoney > 0 && (
            <span className="text-[8px] text-red-500/60 font-mono flex items-center gap-0.5">
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
// NODE TYPES & EDGE TYPES
// ============================================================

const nodeTypes = {
  rootNode: memo(RootNode),
  categoryNode: memo(CategoryNode),
  tierNode: memo(TierNode),
  personNode: memo(PersonNode),
  orgNode: memo(OrgNode),
};

const edgeTypes = {
  moneyFlow: memo(MoneyFlowEdge),
};

// ============================================================
// GLASS PANEL (collapsible wrapper)
// ============================================================

function GlassPanel({
  title,
  icon,
  defaultOpen = false,
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
  const router = useRouter();
  const graphRef = useRef<HTMLDivElement>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState<AppNode>([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState<AppEdge>([]);
  const [isLayouting, setIsLayouting] = useState(true);

  // State
  const [collapsedNodes, setCollapsedNodes] = useState<Set<string>>(new Set());
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPeople, setShowPeople] = useState(true);
  const [showOrgs, setShowOrgs] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [freshLayout, setFreshLayout] = useState(false);

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

  // ------- DISPLAY NODES (search highlighting) -------
  const displayNodes = useMemo(() => {
    if (!searchQuery.trim()) return nodes;
    const q = searchQuery.toLowerCase().trim();
    return nodes.map(n => ({
      ...n,
      data: {
        ...n.data,
        hasActiveSearch: true,
        isSearchMatch: ((n.data.name || n.data.label || '') as string).toLowerCase().includes(q),
      },
    }));
  }, [nodes, searchQuery]);

  // ------- MONEY FLOW EDGES (overlay, not in ELK) -------
  const moneyFlowEdges = useMemo(() => {
    return buildMoneyFlowEdges(moneyTrail, nodes);
  }, [moneyTrail, nodes]);

  // ------- ALL EDGES (tree + money flow) -------
  const allEdges = useMemo(() => [...edges, ...moneyFlowEdges], [edges, moneyFlowEdges]);

  // ------- ELK LAYOUT COMPUTATION -------
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
          setFreshLayout(true);
          setTimeout(() => {
            reactFlow.fitView({ padding: 0.15, duration: 400 });
          }, 80);
          setTimeout(() => setFreshLayout(false), 900);
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

  // ------- NODE CLICK (single click: toggle collapse or select) -------
  const onNodeClick = useCallback((_event: React.MouseEvent, node: AppNode) => {
    const data = node.data;
    if (data.nodeType === 'category' || data.nodeType === 'tier') {
      setCollapsedNodes(prev => {
        const next = new Set(prev);
        if (next.has(node.id)) next.delete(node.id);
        else next.add(node.id);
        return next;
      });
    }
    if (data.nodeType === 'person' || data.nodeType === 'org') {
      setSelectedNodeId(prev => prev === node.id ? null : node.id);
      if (data.href) {
        router.push(data.href as string);
      }
    }
  }, []);

  // ------- NODE DOUBLE CLICK (navigate to entity profile) -------
  const onNodeDoubleClick = useCallback((_event: React.MouseEvent, node: AppNode) => {
    if (node.data.href) {
      router.push(node.data.href as string);
    }
  }, [router]);

  // ------- SEARCH -------
  const searchMatches = useMemo(() => {
    if (!searchQuery) return 0;
    const q = searchQuery.toLowerCase();
    return nodes.filter(n => ((n.data.name || n.data.label || '') as string).toLowerCase().includes(q)).length;
  }, [searchQuery, nodes]);

  // ------- STATS -------
  const stats = useMemo(() => ({
    people: nodes.filter(n => n.data.nodeType === 'person').length,
    orgs: nodes.filter(n => n.data.nodeType === 'org').length,
    total: nodes.filter(n => n.data.nodeType === 'person' || n.data.nodeType === 'org').length,
    moneyEdges: moneyFlowEdges.length,
  }), [nodes, moneyFlowEdges]);

  // ------- ACTIONS -------
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

  // ------- KEYBOARD NAVIGATION -------
  const navigateToNearest = useCallback((direction: 'up' | 'down' | 'left' | 'right') => {
    if (!selectedNodeId) return;
    const current = nodes.find(n => n.id === selectedNodeId);
    if (!current) return;

    const cx = current.position.x;
    const cy = current.position.y;

    const candidates = nodes.filter(n => {
      if (n.id === selectedNodeId) return false;
      if (n.data.nodeType === 'root') return false;
      const dx = n.position.x - cx;
      const dy = n.position.y - cy;
      switch (direction) {
        case 'right': return dx > 30;
        case 'left': return dx < -30;
        case 'down': return dy > 30;
        case 'up': return dy < -30;
      }
    });

    if (candidates.length === 0) return;

    candidates.sort((a, b) => {
      const distA = Math.hypot(a.position.x - cx, a.position.y - cy);
      const distB = Math.hypot(b.position.x - cx, b.position.y - cy);
      return distA - distB;
    });

    const target = candidates[0];
    setSelectedNodeId(target.id);

    const dims = NODE_DIMENSIONS[target.type || 'personNode'] || { width: 280, height: 100 };
    reactFlow.setCenter(
      target.position.x + dims.width / 2,
      target.position.y + dims.height / 2,
      { zoom: 1.2, duration: 400 },
    );
  }, [selectedNodeId, nodes, reactFlow]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      // Don't intercept when typing in inputs
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      switch (e.key) {
        case 'Escape':
          if (isFullscreen) document.exitFullscreen().catch(() => {});
          else setSelectedNodeId(null);
          break;
        case 'ArrowRight':
          if (!selectedNodeId) return;
          e.preventDefault();
          navigateToNearest('right');
          break;
        case 'ArrowLeft':
          if (!selectedNodeId) return;
          e.preventDefault();
          navigateToNearest('left');
          break;
        case 'ArrowUp':
          if (!selectedNodeId) return;
          e.preventDefault();
          navigateToNearest('up');
          break;
        case 'ArrowDown':
          if (!selectedNodeId) return;
          e.preventDefault();
          navigateToNearest('down');
          break;
        case 'Enter':
          if (selectedNodeId) {
            const node = nodes.find(n => n.id === selectedNodeId);
            if (node?.data.nodeType === 'category' || node?.data.nodeType === 'tier') {
              setCollapsedNodes(prev => {
                const next = new Set(prev);
                if (next.has(node.id)) next.delete(node.id);
                else next.add(node.id);
                return next;
              });
            } else if (node?.data.href) {
              router.push(node.data.href as string);
            }
          }
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigateToNearest, selectedNodeId, isFullscreen, nodes, router]);

  // ------- FULLSCREEN -------
  const toggleFullscreen = useCallback(async () => {
    if (!graphRef.current) return;
    try {
      if (!document.fullscreenElement) {
        await graphRef.current.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  }, []);

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handler);
    return () => document.removeEventListener('fullscreenchange', handler);
  }, []);

  // ------- EXPORT PNG -------
  const exportPng = useCallback(() => {
    const viewport = graphRef.current?.querySelector('.react-flow__viewport') as HTMLElement;
    if (!viewport || nodes.length === 0) return;

    const nodesBounds = getNodesBounds(nodes);
    const imageWidth = Math.max(nodesBounds.width + 200, 1200);
    const imageHeight = Math.max(nodesBounds.height + 200, 800);
    const vp = getViewportForBounds(nodesBounds, imageWidth, imageHeight, 0.5, 2, 0.1);

    toPng(viewport, {
      backgroundColor: '#000000',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: `${imageWidth}px`,
        height: `${imageHeight}px`,
        transform: `translate(${vp.x}px, ${vp.y}px) scale(${vp.zoom})`,
      },
    }).then(dataUrl => {
      const a = document.createElement('a');
      a.href = dataUrl;
      a.download = `network-${investigation.slug}.png`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }).catch(err => console.error('PNG export failed:', err));
  }, [nodes, investigation.slug]);

  // ------- SELECT FROM ROSTER -------
  const selectDefendant = useCallback((def: Defendant) => {
    const personId = `person-${slugifyName(def.name)}`;
    const tier = classifyPerson(def, null);
    const tierId = `tier-${slugifyName(tier)}`;
    setCollapsedNodes(prev => {
      const next = new Set(prev);
      next.delete('people');
      next.delete(tierId);
      return next;
    });
    setSelectedNodeId(personId);
    setTimeout(() => {
      const node = reactFlow.getNode(personId);
      if (node) {
        const dims = NODE_DIMENSIONS.personNode;
        reactFlow.setCenter(node.position.x + dims.width / 2, node.position.y + dims.height / 2, { zoom: 1.2, duration: 600 });
      }
    }, 300);
  }, [reactFlow]);

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
        @keyframes severityPulse {
          0% { transform: scale(1); opacity: 0.4; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes moneyFlowDash {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -20; }
        }
        @keyframes edgeDraw {
          from { stroke-dasharray: 500; stroke-dashoffset: 500; }
          to { stroke-dasharray: 500; stroke-dashoffset: 0; }
        }
        .money-flow-animate { animation: moneyFlowDash 1s linear infinite; }
        .edge-fresh .react-flow__edge-path { animation: edgeDraw 0.8s ease-out forwards; }
        .react-flow__minimap { background: #020202 !important; border: 1px solid rgba(184,0,0,0.20) !important; border-radius: 8px !important; }
        .react-flow__controls { gap: 4px !important; }
        .react-flow__controls button { background: #080808 !important; border: 1px solid rgba(184,0,0,0.20) !important; border-radius: 6px !important; color: #a1a1aa !important; }
        .react-flow__controls button:hover { background: #0a0000 !important; border-color: rgba(184,0,0,0.45) !important; color: #e4e4e7 !important; }
        .react-flow__controls button svg { fill: currentColor !important; }
        .react-flow__node { transition: transform 0.3s ease-out, opacity 0.3s ease-out !important; }
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
              ELK LAYOUT ENGINE // CLICK TO EXPAND // DOUBLE-CLICK TO NAVIGATE // ARROW KEYS TO TRAVERSE // ESC TO DESELECT
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
                <span className="text-[10px] font-mono font-bold text-red-400">{searchMatches} found</span>
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
          <GlassPanel title="Controls" icon={<Filter className="w-4 h-4" />} defaultOpen={true}>
            <div className="space-y-3">
              {/* People / Orgs toggles */}
              <div className="flex gap-2">
                <button onClick={() => setShowPeople(!showPeople)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showPeople ? 'border-red-800/40 text-red-400 bg-red-950/20' : 'border-zinc-800 text-zinc-600'
                  }`} style={{ borderRadius: 8 }}>
                  <Users className="w-3 h-3" /> People
                </button>
                <button onClick={() => setShowOrgs(!showOrgs)}
                  className={`flex-1 flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2 py-2 border transition-all ${
                    showOrgs ? 'border-red-800/40 text-red-400 bg-red-950/20' : 'border-zinc-800 text-zinc-600'
                  }`} style={{ borderRadius: 8 }}>
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
                    style={{ borderRadius: 8 }}>
                    <Icon className="w-3 h-3" /> {label}
                  </button>
                ))}
              </div>
              {/* Fullscreen + Export */}
              <div className="flex gap-2">
                <button onClick={toggleFullscreen}
                  className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase tracking-wider px-2 py-2 border border-zinc-800 hover:border-red-900/40 hover:text-red-400 transition-all"
                  style={{ borderRadius: 8 }}>
                  {isFullscreen ? <Minimize2 className="w-3 h-3" /> : <Maximize2 className="w-3 h-3" />}
                  {isFullscreen ? 'Exit FS' : 'Fullscreen'}
                </button>
                <button onClick={exportPng}
                  className="flex-1 flex items-center justify-center gap-1.5 text-[9px] font-bold text-zinc-500 uppercase tracking-wider px-2 py-2 border border-zinc-800 hover:border-red-900/40 hover:text-red-400 transition-all"
                  style={{ borderRadius: 8 }}>
                  <Download className="w-3 h-3" /> Export
                </button>
              </div>
              {/* Keyboard hint */}
              <p className="text-[8px] text-zinc-700 font-mono leading-relaxed text-center">
                ↑↓←→ Navigate &bull; Enter Open &bull; Esc Deselect &bull; Click to View Profile
              </p>
            </div>
          </GlassPanel>

          <GlassPanel title="Statistics" icon={<Activity className="w-4 h-4" />} defaultOpen={true}>
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-2">
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 8 }}>
                  <div className="text-lg font-black text-white font-mono">{stats.total}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">Total</div>
                </div>
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 8 }}>
                  <div className="text-lg font-black text-red-400 font-mono">{stats.people}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">People</div>
                </div>
                <div className="text-center p-2 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]" style={{ borderRadius: 8 }}>
                  <div className="text-lg font-black text-red-400 font-mono">{stats.orgs}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">Orgs</div>
                </div>
              </div>
              {stats.moneyEdges > 0 && (
                <div className="text-center p-2 bg-[rgba(234,179,8,0.04)] border border-[rgba(234,179,8,0.12)]" style={{ borderRadius: 8 }}>
                  <div className="text-sm font-black text-red-400 font-mono">{stats.moneyEdges}</div>
                  <div className="text-[8px] text-zinc-600 uppercase font-bold">Money Flow Connections</div>
                </div>
              )}
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
        <div
          ref={graphRef}
          className={`glass-card relative ${isFullscreen ? 'h-screen' : 'min-h-[600px] h-[75vh] max-h-[1100px]'} ${freshLayout ? 'edge-fresh' : ''}`}
          style={{
            overflow: 'hidden',
            background: '#020202',
            ...(isFullscreen ? { borderRadius: 8 } : {}),
          }}
        >
          {isLayouting && (
            <div className="absolute inset-0 z-20 flex items-center justify-center bg-black/50" style={{ borderRadius: 8 }}>
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-8 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                <span className="text-[10px] text-red-400 font-mono uppercase tracking-wider">Computing Layout...</span>
              </div>
            </div>
          )}
          <ReactFlow
            nodes={displayNodes}
            edges={allEdges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onNodeClick={onNodeClick}
            onNodeDoubleClick={onNodeDoubleClick}
            nodeTypes={nodeTypes}
            edgeTypes={edgeTypes}
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
            <Background variant={BackgroundVariant.Dots} gap={30} size={0.5} color="rgba(184, 0, 0, 0.06)" />
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
          <GlassPanel title="Legend" icon={<Shield className="w-4 h-4" />} defaultOpen={true}>
            <div className="space-y-3">
              <div>
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">People Tiers</p>
                {(Object.entries(PERSON_TIER_COLORS) as [PersonTier, string][]).map(([tier, color]) => (
                  <div key={tier} className="flex items-center gap-2 py-0.5">
                    <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color, borderRadius: 8 }} />
                    <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Organization Types</p>
                {(Object.entries(ORG_TIER_COLORS) as [OrgTier, string][]).map(([tier, color]) => (
                  <div key={tier} className="flex items-center gap-2 py-0.5">
                    <div className="w-2.5 h-2.5 flex-shrink-0" style={{ backgroundColor: color, borderRadius: 8 }} />
                    <span className="text-[10px] text-zinc-400 font-mono">{tier}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-2">Edge Types</p>
                <div className="flex items-center gap-2 py-0.5">
                  <div className="w-6 h-0 border-t-2 border-red-500/40 flex-shrink-0" />
                  <span className="text-[10px] text-zinc-400 font-mono">Hierarchy</span>
                </div>
                <div className="flex items-center gap-2 py-0.5">
                  <div className="w-6 h-0 border-t-2 border-dashed border-red-500/70 flex-shrink-0" />
                  <span className="text-[10px] text-zinc-400 font-mono">Money Flow</span>
                </div>
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

          <GlassPanel title="Node Details" icon={<Target className="w-4 h-4" />} defaultOpen={true}
            badge={selectedNodeData ? <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" /> : undefined}>
            {selectedNodeData ? (
              <div className="space-y-3">
                <div>
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h4 className="text-sm font-bold text-white">{selectedNodeData.name || selectedNodeData.label}</h4>
                    {selectedNodeData.status && (
                      <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase border flex-shrink-0"
                        style={{ color: STATUS_COLORS[selectedNodeData.status] || '#777', borderColor: `${STATUS_COLORS[selectedNodeData.status] || '#777'}60`, borderRadius: 8 }}>
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
                          borderRadius: 8,
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
                    <p className="text-[11px] text-red-400/80">{selectedNodeData.fine}</p>
                  </div>
                )}

                {((selectedNodeData.moneyIn as MoneyTransaction[])?.length > 0 || (selectedNodeData.moneyOut as MoneyTransaction[])?.length > 0) && (
                  <div className="border-t border-[rgba(255,255,255,0.04)] pt-2">
                    <p className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mb-1">Financial Links</p>
                    {(selectedNodeData.moneyIn as MoneyTransaction[])?.map((m, i) => (
                      <p key={`in-${i}`} className="text-[10px] text-red-400/70 py-0.5 flex items-start gap-1.5">
                        <span className="text-red-600 flex-shrink-0">&#9650;</span> {m.amount} from {m.from}
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
        <GlassPanel title={`Defendants (${defendants.length})`} icon={<Users className="w-4 h-4" />} defaultOpen={false}>
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
                    <span className="text-[11px] font-bold text-white">{def.name}</span>
                    <span className="text-[8px] px-1 py-0.5 font-bold uppercase flex-shrink-0"
                      style={{ color: statusColor, border: `1px solid ${statusColor}40`, borderRadius: 8 }}>
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
        <GlassPanel title={`Organizations (${orgAffiliations.length})`} icon={<Building2 className="w-4 h-4" />} defaultOpen={false}>
          <div className="max-h-72 overflow-y-auto space-y-1 pr-1 custom-scrollbar">
            {orgAffiliations.map((aff, i) => {
              const tier = classifyOrg(aff);
              const color = ORG_TIER_COLORS[tier];
              const isSelected = selectedNodeId === `org-${slugifyName(aff.name)}`;
              return (
                <button key={i} onClick={() => selectOrg(aff)}
                  className={`w-full text-left p-2.5 border transition-all ${
                    isSelected ? 'border-red-700/50 bg-red-950/20' : 'border-[rgba(184,0,0,0.10)] hover:border-[rgba(184,0,0,0.30)]'
                  }`} style={{ borderRadius: 8 }}>
                  <div className="flex items-center justify-between mb-0.5">
                    <span className="text-[11px] font-bold text-white">{aff.name}</span>
                    <span className="text-[8px] px-1 py-0.5 font-bold uppercase flex-shrink-0"
                      style={{ color, border: `1px solid ${color}40`, borderRadius: 8 }}>
                      {aff.type}
                    </span>
                  </div>
                  <p className="text-[9px] text-zinc-500">{aff.relationship}</p>
                </button>
              );
            })}
          </div>
        </GlassPanel>

        {/* Money Trail */}
        <GlassPanel title={`Money Trail (${moneyTrail.length})`} icon={<DollarSign className="w-4 h-4" />} defaultOpen={false}>
          <div className="max-h-72 overflow-y-auto space-y-1.5 pr-1 custom-scrollbar">
            {moneyTrail.map((txn, i) => (
              <div key={i} className="p-2.5 border border-[rgba(184,0,0,0.10)]" style={{ borderRadius: 8 }}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-zinc-500 font-mono">{txn.date}</span>
                  <span className="text-[10px] font-bold text-red-400">{txn.amount}</span>
                </div>
                <div className="text-[9px] space-y-0.5">
                  <p className="text-zinc-500">
                    <span className="text-red-400/60">From:</span> {txn.from}
                  </p>
                  <p className="text-zinc-500">
                    <span className="text-red-400/60">To:</span> {txn.to}
                  </p>
                </div>
                <p className="text-[8px] text-zinc-600 mt-1">{txn.purpose}</p>
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
