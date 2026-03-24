"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { ZoomIn, ZoomOut, Maximize2, X } from "lucide-react";

interface NetworkNode {
  id: string;
  name: string;
  type: "individual" | "agency" | "corporation" | "organization" | "investigation";
  href?: string;
  weight?: number;
}

interface NetworkEdge {
  source: string;
  target: string;
  relationship?: string;
  weight?: number;
}

interface NetworkGraphProps {
  nodes: NetworkNode[];
  edges: NetworkEdge[];
  centerNode?: string;
  width?: number;
  height?: number;
  className?: string;
}

// Node type to color mapping
const nodeColors: Record<string, string> = {
  individual: "#ef4444", // red-500
  agency: "#b80000", // blood-500
  corporation: "#22c55e", // green-500
  organization: "#a855f7", // purple-500
  investigation: "#f97316", // orange-500
};

// Simple force simulation for node positioning
function calculateLayout(
  nodes: NetworkNode[],
  edges: NetworkEdge[],
  width: number,
  height: number,
  centerNode?: string
): Map<string, { x: number; y: number }> {
  const positions = new Map<string, { x: number; y: number }>();
  
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = Math.min(width, height) * 0.35;
  
  // Find center node or use first node
  const center = centerNode && nodes.find(n => n.id === centerNode) 
    ? nodes.find(n => n.id === centerNode)!
    : nodes[0];
  
  if (center) {
    positions.set(center.id, { x: centerX, y: centerY });
  }
  
  // Separate nodes into connected and unconnected
  const connectedToCenter = new Set<string>();
  edges.forEach(edge => {
    if (edge.source === center?.id) connectedToCenter.add(edge.target);
    if (edge.target === center?.id) connectedToCenter.add(edge.source);
  });
  
  // Position connected nodes in a circle around center
  const connectedNodes = nodes.filter(n => n.id !== center?.id && connectedToCenter.has(n.id));
  connectedNodes.forEach((node, index) => {
    const angle = (2 * Math.PI * index) / connectedNodes.length - Math.PI / 2;
    positions.set(node.id, {
      x: centerX + radius * Math.cos(angle),
      y: centerY + radius * Math.sin(angle),
    });
  });
  
  // Position remaining nodes in outer ring
  const outerNodes = nodes.filter(n => n.id !== center?.id && !connectedToCenter.has(n.id));
  const outerRadius = radius * 1.6;
  outerNodes.forEach((node, index) => {
    const angle = (2 * Math.PI * index) / Math.max(outerNodes.length, 1) - Math.PI / 2;
    positions.set(node.id, {
      x: centerX + outerRadius * Math.cos(angle),
      y: centerY + outerRadius * Math.sin(angle),
    });
  });
  
  return positions;
}

export default function NetworkGraph({
  nodes,
  edges,
  centerNode,
  width = 600,
  height = 400,
  className = "",
}: NetworkGraphProps) {
  const [zoom, setZoom] = useState(1);
  const [selectedNode, setSelectedNode] = useState<NetworkNode | null>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Calculate node positions
  const positions = useMemo(
    () => calculateLayout(nodes, edges, width, height, centerNode),
    [nodes, edges, width, height, centerNode]
  );
  
  // Get connected edges for a node
  const getConnectedEdges = (nodeId: string) => {
    return edges.filter(e => e.source === nodeId || e.target === nodeId);
  };
  
  const handleZoomIn = () => setZoom(z => Math.min(z + 0.2, 3));
  const handleZoomOut = () => setZoom(z => Math.max(z - 0.2, 0.5));
  const handleReset = () => setZoom(1);
  
  if (nodes.length === 0) {
    return (
      <div className={`flex items-center justify-center bg-zinc-950 border border-zinc-800 ${className}`} style={{ width, height }}>
        <span className="text-zinc-500 text-sm">No network data available</span>
      </div>
    );
  }
  
  return (
    <div className={`relative bg-zinc-950 border border-zinc-800/30 overflow-hidden ${className}`}>
      {/* Controls */}
      <div className="absolute top-2 right-2 z-10 flex items-center gap-1">
        <button
          onClick={handleZoomIn}
          className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          title="Zoom In"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          title="Zoom Out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleReset}
          className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
          title="Reset"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
      
      {/* Legend */}
      <div className="absolute bottom-2 left-2 z-10 flex flex-wrap gap-2 text-[10px]">
        {Object.entries(nodeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1 text-zinc-500">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="capitalize">{type}</span>
          </div>
        ))}
      </div>
      
      {/* SVG Canvas */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        className="cursor-grab active:cursor-grabbing"
      >
        <g transform={`scale(${zoom}) translate(${(width * (1 - zoom)) / (2 * zoom)}, ${(height * (1 - zoom)) / (2 * zoom)})`}>
          {/* Edges */}
          {edges.map((edge, index) => {
            const sourcePos = positions.get(edge.source);
            const targetPos = positions.get(edge.target);
            if (!sourcePos || !targetPos) return null;
            
            const isHighlighted = hoveredNode === edge.source || hoveredNode === edge.target;
            
            return (
              <g key={`edge-${index}`}>
                <line
                  x1={sourcePos.x}
                  y1={sourcePos.y}
                  x2={targetPos.x}
                  y2={targetPos.y}
                  stroke={isHighlighted ? "#6b6b6b" : "#333"}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeOpacity={isHighlighted ? 1 : 0.5}
                  className="transition-all duration-200"
                />
                {/* Edge label */}
                {edge.relationship && isHighlighted && (
                  <text
                    x={(sourcePos.x + targetPos.x) / 2}
                    y={(sourcePos.y + targetPos.y) / 2}
                    fill="#888"
                    fontSize="9"
                    textAnchor="middle"
                    className="pointer-events-none"
                  >
                    {edge.relationship}
                  </text>
                )}
              </g>
            );
          })}
          
          {/* Nodes */}
          {nodes.map((node) => {
            const pos = positions.get(node.id);
            if (!pos) return null;
            
            const isCenter = node.id === centerNode;
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode && getConnectedEdges(hoveredNode).some(
              e => e.source === node.id || e.target === node.id
            );
            const radius = isCenter ? 18 : 12;
            const color = nodeColors[node.type] || "#666";
            
            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => setSelectedNode(node)}
              >
                {/* Glow effect */}
                {(isHovered || isCenter) && (
                  <circle
                    r={radius + 4}
                    fill={color}
                    opacity={0.3}
                    className="animate-pulse"
                  />
                )}
                
                {/* Node circle */}
                <circle
                  r={radius}
                  fill={isHovered || isConnected ? color : `${color}99`}
                  stroke={isCenter ? "#fff" : color}
                  strokeWidth={isCenter ? 2 : 1}
                  className="transition-all duration-200"
                />
                
                {/* Node label */}
                <text
                  y={radius + 14}
                  fill={isHovered || isConnected ? "#fff" : "#888"}
                  fontSize="10"
                  textAnchor="middle"
                  className="pointer-events-none transition-all duration-200"
                >
                  {node.name.length > 15 ? node.name.substring(0, 15) + "..." : node.name}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
      
      {/* Node Detail Panel */}
      {selectedNode && (
        <div className="absolute top-12 left-2 right-2 sm:right-auto sm:w-64 bg-black/95 border border-zinc-700/50 p-3 z-20">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h4 className="text-sm font-bold text-white">{selectedNode.name}</h4>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-zinc-500 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <p className="text-xs text-zinc-500 capitalize mb-2">
            Type: {selectedNode.type}
          </p>
          {selectedNode.href && (
            <Link
              href={selectedNode.href}
              className="inline-block text-xs text-zinc-300 hover:text-white"
            >
              View Profile →
            </Link>
          )}
          <div className="mt-2 pt-2 border-t border-zinc-800">
            <p className="text-[10px] text-zinc-600">
              Connections: {getConnectedEdges(selectedNode.id).length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * Helper to convert investigation affiliations to network graph format
 */
export function affiliationsToNetwork(
  investigationSlug: string,
  investigationTitle: string,
  affiliations: Array<{
    id: string;
    name: string;
    type: string;
    relationship: string;
    href: string;
  }>
): { nodes: NetworkNode[]; edges: NetworkEdge[] } {
  const nodes: NetworkNode[] = [
    {
      id: investigationSlug,
      name: investigationTitle,
      type: "investigation",
      href: `/investigations/${investigationSlug}`,
    },
    ...affiliations.map((a) => ({
      id: a.id,
      name: a.name,
      type: a.type as NetworkNode["type"],
      href: a.href,
    })),
  ];

  const edges: NetworkEdge[] = affiliations.map((a) => ({
    source: investigationSlug,
    target: a.id,
    relationship: a.relationship,
  }));

  return { nodes, edges };
}
