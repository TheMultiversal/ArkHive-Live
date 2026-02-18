'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ZoomOut, Maximize2 } from 'lucide-react';

export interface GraphNode {
  id: string;
  label: string;
  type: 'agency' | 'corporation' | 'individual' | 'organization';
  riskLevel?: 'critical' | 'high' | 'medium' | 'low';
  x?: number;
  y?: number;
}

export interface GraphEdge {
  source: string;
  target: string;
  label?: string;
  strength?: number; // 1-5
}

interface RelationshipGraphProps {
  nodes: GraphNode[];
  edges: GraphEdge[];
  selectedNodeId?: string;
  onNodeClick?: (node: GraphNode) => void;
  width?: number;
  height?: number;
  className?: string;
}

const typeColors = {
  agency: '#3b82f6',      // blue
  corporation: '#8b5cf6', // purple
  individual: '#f59e0b',  // amber
  organization: '#10b981', // emerald
};

const riskColors = {
  critical: '#ef4444',
  high: '#f97316',
  medium: '#eab308',
  low: '#22c55e',
};

export default function RelationshipGraph({
  nodes,
  edges,
  selectedNodeId,
  onNodeClick,
  width = 800,
  height = 600,
  className = '',
}: RelationshipGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  // Calculate node positions using a simple force-directed layout
  const [nodePositions, setNodePositions] = useState<Map<string, { x: number; y: number }>>(new Map());

  useEffect(() => {
    // Simple circular layout for now
    const positions = new Map<string, { x: number; y: number }>();
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 3;

    nodes.forEach((node, index) => {
      const angle = (2 * Math.PI * index) / nodes.length - Math.PI / 2;
      positions.set(node.id, {
        x: node.x ?? centerX + radius * Math.cos(angle),
        y: node.y ?? centerY + radius * Math.sin(angle),
      });
    });

    setNodePositions(positions);
  }, [nodes, width, height]);

  // Get position for a node
  const getNodePosition = useCallback((nodeId: string) => {
    return nodePositions.get(nodeId) || { x: width / 2, y: height / 2 };
  }, [nodePositions, width, height]);

  // Handle zoom
  const handleZoomIn = () => setZoom(z => Math.min(z * 1.2, 3));
  const handleZoomOut = () => setZoom(z => Math.max(z / 1.2, 0.3));
  const handleResetZoom = () => {
    setZoom(1);
    setPan({ x: 0, y: 0 });
  };

  // Handle pan
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Get connected nodes for highlighting
  const getConnectedNodes = (nodeId: string): Set<string> => {
    const connected = new Set<string>();
    edges.forEach(edge => {
      if (edge.source === nodeId) connected.add(edge.target);
      if (edge.target === nodeId) connected.add(edge.source);
    });
    return connected;
  };

  const connectedToHovered = hoveredNode ? getConnectedNodes(hoveredNode) : new Set<string>();

  return (
    <div className={`relative bg-zinc-950 border border-zinc-800 overflow-hidden ${className}`}>
      {/* Controls */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <button
          onClick={handleZoomIn}
          className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
          aria-label="Zoom in"
        >
          <ZoomIn className="w-4 h-4" />
        </button>
        <button
          onClick={handleZoomOut}
          className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
          aria-label="Zoom out"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
        <button
          onClick={handleResetZoom}
          className="p-2 bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 transition-colors"
          aria-label="Reset view"
        >
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>

      {/* Legend */}
      <div className="absolute bottom-4 left-4 z-10 p-3 bg-zinc-900/90 border border-zinc-800 text-xs">
        <p className="font-bold mb-2 text-zinc-400">Entity Types</p>
        <div className="space-y-1">
          {Object.entries(typeColors).map(([type, color]) => (
            <div key={type} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
              <span className="capitalize text-zinc-300">{type}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SVG Graph */}
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className={`cursor-${isDragging ? 'grabbing' : 'grab'}`}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
          {/* Edges */}
          {edges.map((edge, index) => {
            const sourcePos = getNodePosition(edge.source);
            const targetPos = getNodePosition(edge.target);
            const isHighlighted = 
              hoveredNode === edge.source || 
              hoveredNode === edge.target ||
              selectedNodeId === edge.source ||
              selectedNodeId === edge.target;
            
            return (
              <g key={`edge-${index}`}>
                <line
                  x1={sourcePos.x}
                  y1={sourcePos.y}
                  x2={targetPos.x}
                  y2={targetPos.y}
                  stroke={isHighlighted ? '#dc2626' : '#3f3f46'}
                  strokeWidth={isHighlighted ? 2 : 1}
                  strokeOpacity={hoveredNode && !isHighlighted ? 0.2 : 0.6}
                  strokeDasharray={edge.strength && edge.strength < 3 ? '4,4' : undefined}
                />
                {edge.label && isHighlighted && (
                  <text
                    x={(sourcePos.x + targetPos.x) / 2}
                    y={(sourcePos.y + targetPos.y) / 2 - 10}
                    fill="#a1a1aa"
                    fontSize="10"
                    textAnchor="middle"
                    className="pointer-events-none"
                  >
                    {edge.label}
                  </text>
                )}
              </g>
            );
          })}

          {/* Nodes */}
          {nodes.map((node) => {
            const pos = getNodePosition(node.id);
            const isHovered = hoveredNode === node.id;
            const isSelected = selectedNodeId === node.id;
            const isConnectedToHovered = connectedToHovered.has(node.id);
            const isActive = isHovered || isSelected || isConnectedToHovered;
            const baseColor = typeColors[node.type];
            const ringColor = node.riskLevel ? riskColors[node.riskLevel] : baseColor;

            return (
              <g
                key={node.id}
                transform={`translate(${pos.x}, ${pos.y})`}
                className="cursor-pointer"
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() => onNodeClick?.(node)}
                style={{
                  opacity: hoveredNode && !isActive ? 0.3 : 1,
                  transition: 'opacity 0.2s',
                }}
              >
                {/* Outer ring for risk level */}
                <circle
                  r={isActive ? 28 : 24}
                  fill="none"
                  stroke={ringColor}
                  strokeWidth={isActive ? 3 : 1}
                  strokeOpacity={0.5}
                />
                {/* Node circle */}
                <circle
                  r={isActive ? 20 : 16}
                  fill={baseColor}
                  fillOpacity={isActive ? 1 : 0.8}
                />
                {/* Label */}
                <text
                  y={isActive ? 36 : 30}
                  fill="#ffffff"
                  fontSize={isActive ? 12 : 10}
                  fontWeight={isActive ? 'bold' : 'normal'}
                  textAnchor="middle"
                  className="pointer-events-none select-none"
                >
                  {node.label.length > 15 ? `${node.label.substring(0, 12)}...` : node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>

      {/* Tooltip */}
      <AnimatePresence>
        {hoveredNode && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-4 left-4 p-3 bg-zinc-900 border border-zinc-700 shadow-lg z-20 max-w-xs"
          >
            {(() => {
              const node = nodes.find(n => n.id === hoveredNode);
              if (!node) return null;
              return (
                <>
                  <p className="font-bold text-white">{node.label}</p>
                  <p className="text-xs text-zinc-400 capitalize">{node.type}</p>
                  {node.riskLevel && (
                    <p className="text-xs mt-1">
                      <span className="text-zinc-500">Risk: </span>
                      <span style={{ color: riskColors[node.riskLevel] }} className="capitalize font-medium">
                        {node.riskLevel}
                      </span>
                    </p>
                  )}
                  <p className="text-xs text-zinc-500 mt-2">
                    Connected to {connectedToHovered.size} entities
                  </p>
                </>
              );
            })()}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
