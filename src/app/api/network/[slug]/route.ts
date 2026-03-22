import { NextRequest, NextResponse } from 'next/server';
import investigationDatabase from '@/data/investigations';

export const dynamic = 'force-dynamic';

interface NetworkNode {
  id: string;
  label: string;
  type: 'investigation' | 'agency' | 'corporation' | 'individual' | 'organization';
  severity?: string;
}

interface NetworkEdge {
  source: string;
  target: string;
  relationship: string;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const investigation = investigationDatabase[slug];

  if (!investigation) {
    return NextResponse.json({ error: 'Investigation not found' }, { status: 404 });
  }

  const nodes: NetworkNode[] = [];
  const edges: NetworkEdge[] = [];
  const nodeIds = new Set<string>();

  // Central node: the investigation itself
  const centerNodeId = `inv:${slug}`;
  nodes.push({
    id: centerNodeId,
    label: investigation.title,
    type: 'investigation',
    severity: investigation.severity,
  });
  nodeIds.add(centerNodeId);

  // Add affiliated entities as nodes + edges
  if (investigation.affiliations) {
    for (const aff of investigation.affiliations) {
      const entityId = `entity:${aff.name.toLowerCase().replace(/\s+/g, '-')}`;
      if (!nodeIds.has(entityId)) {
        nodes.push({
          id: entityId,
          label: aff.name,
          type: (aff.type as NetworkNode['type']) || 'organization',
        });
        nodeIds.add(entityId);
      }
      edges.push({
        source: centerNodeId,
        target: entityId,
        relationship: aff.relationship || 'affiliated',
      });
    }
  }

  // Find other investigations sharing the same entities
  for (const [otherSlug, otherInv] of Object.entries(investigationDatabase)) {
    if (otherSlug === slug) continue;
    if (!otherInv.affiliations) continue;

    const sharedEntities = otherInv.affiliations.filter(a =>
      investigation.affiliations?.some(b =>
        b.name.toLowerCase() === a.name.toLowerCase()
      )
    );

    if (sharedEntities.length > 0) {
      const otherNodeId = `inv:${otherSlug}`;
      if (!nodeIds.has(otherNodeId)) {
        nodes.push({
          id: otherNodeId,
          label: otherInv.title,
          type: 'investigation',
          severity: otherInv.severity,
        });
        nodeIds.add(otherNodeId);
      }

      for (const shared of sharedEntities) {
        const entityId = `entity:${shared.name.toLowerCase().replace(/\s+/g, '-')}`;
        if (!nodeIds.has(entityId)) {
          nodes.push({
            id: entityId,
            label: shared.name,
            type: (shared.type as NetworkNode['type']) || 'organization',
          });
          nodeIds.add(entityId);
        }
        edges.push({
          source: otherNodeId,
          target: entityId,
          relationship: shared.relationship || 'affiliated',
        });
      }
    }
  }

  return NextResponse.json({
    slug,
    title: investigation.title,
    nodes,
    edges,
    stats: {
      totalNodes: nodes.length,
      totalEdges: edges.length,
      entityCount: nodes.filter(n => n.type !== 'investigation').length,
      connectedInvestigations: nodes.filter(n => n.type === 'investigation').length - 1,
    },
  });
}
