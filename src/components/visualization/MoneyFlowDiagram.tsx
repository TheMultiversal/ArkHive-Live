"use client";

import { useMemo } from "react";
import { DollarSign } from "lucide-react";

interface MoneyFlowNode {
  id: string;
  name: string;
  type: "source" | "intermediary" | "destination";
  total?: number;
}

interface MoneyFlowLink {
  source: string;
  target: string;
  amount: number;
  description?: string;
  date?: string;
}

interface MoneyFlowDiagramProps {
  nodes: MoneyFlowNode[];
  links: MoneyFlowLink[];
  width?: number;
  height?: number;
  className?: string;
  title?: string;
}

// Format currency
function formatCurrency(amount: number): string {
  if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
  if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
  if (amount >= 1e3) return `$${(amount / 1e3).toFixed(1)}K`;
  return `$${amount.toLocaleString()}`;
}

export default function MoneyFlowDiagram({
  nodes,
  links,
  width = 800,
  height = 400,
  className = "",
  title = "Money Flow Analysis",
}: MoneyFlowDiagramProps) {
  // Calculate node positions and sizes
  const layout = useMemo(() => {
    // Separate nodes by type
    const sources = nodes.filter(n => n.type === "source");
    const intermediaries = nodes.filter(n => n.type === "intermediary");
    const destinations = nodes.filter(n => n.type === "destination");
    
    // Calculate totals for each node
    const nodeInflows = new Map<string, number>();
    const nodeOutflows = new Map<string, number>();
    
    links.forEach(link => {
      nodeOutflows.set(link.source, (nodeOutflows.get(link.source) || 0) + link.amount);
      nodeInflows.set(link.target, (nodeInflows.get(link.target) || 0) + link.amount);
    });
    
    // Calculate max flow for scaling
    const maxFlow = Math.max(
      ...Array.from(nodeOutflows.values()),
      ...Array.from(nodeInflows.values())
    );
    
    // Node positioning
    const padding = 40;
    const nodeWidth = 20;
    const columnWidth = (width - padding * 2) / 3;
    
    const nodePositions = new Map<string, { x: number; y: number; height: number }>();
    
    // Position sources on left
    const sourceSpacing = (height - padding * 2) / (sources.length || 1);
    sources.forEach((node, i) => {
      const flow = Math.max(nodeOutflows.get(node.id) || 0, node.total || 0);
      const nodeHeight = Math.max(20, (flow / maxFlow) * 80);
      nodePositions.set(node.id, {
        x: padding,
        y: padding + i * sourceSpacing + sourceSpacing / 2,
        height: nodeHeight,
      });
    });
    
    // Position intermediaries in middle
    const interSpacing = (height - padding * 2) / (intermediaries.length || 1);
    intermediaries.forEach((node, i) => {
      const inflow = nodeInflows.get(node.id) || 0;
      const outflow = nodeOutflows.get(node.id) || 0;
      const flow = Math.max(inflow, outflow, node.total || 0);
      const nodeHeight = Math.max(20, (flow / maxFlow) * 80);
      nodePositions.set(node.id, {
        x: padding + columnWidth,
        y: padding + i * interSpacing + interSpacing / 2,
        height: nodeHeight,
      });
    });
    
    // Position destinations on right
    const destSpacing = (height - padding * 2) / (destinations.length || 1);
    destinations.forEach((node, i) => {
      const flow = Math.max(nodeInflows.get(node.id) || 0, node.total || 0);
      const nodeHeight = Math.max(20, (flow / maxFlow) * 80);
      nodePositions.set(node.id, {
        x: padding + columnWidth * 2,
        y: padding + i * destSpacing + destSpacing / 2,
        height: nodeHeight,
      });
    });
    
    return {
      nodePositions,
      nodeOutflows,
      nodeInflows,
      maxFlow,
    };
  }, [nodes, links, width, height]);
  
  // Generate curved path for links
  const generateLinkPath = (link: MoneyFlowLink) => {
    const sourcePos = layout.nodePositions.get(link.source);
    const targetPos = layout.nodePositions.get(link.target);
    
    if (!sourcePos || !targetPos) return "";
    
    const startX = sourcePos.x + 20; // After node rect
    const startY = sourcePos.y;
    const endX = targetPos.x;
    const endY = targetPos.y;
    
    // Control points for bezier curve
    const midX = (startX + endX) / 2;
    
    return `M ${startX} ${startY} C ${midX} ${startY}, ${midX} ${endY}, ${endX} ${endY}`;
  };
  
  // Calculate link thickness based on amount
  const getLinkThickness = (amount: number) => {
    return Math.max(2, Math.min(20, (amount / layout.maxFlow) * 20));
  };
  
  if (nodes.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800 p-8 ${className}`}>
        <DollarSign className="w-8 h-8 text-zinc-700 mb-2" />
        <span className="text-zinc-500 text-sm">No money flow data available</span>
      </div>
    );
  }
  
  return (
    <div className={`bg-zinc-950 border border-zinc-800/30 ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800/30 px-4 py-3 flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-zinc-300" />
        <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
      </div>
      
      {/* Column Labels */}
      <div className="flex justify-between px-4 py-2 border-b border-zinc-800/50 text-[10px] text-zinc-500 uppercase tracking-wider">
        <span className="w-1/3 text-center">Sources</span>
        <span className="w-1/3 text-center">Intermediaries</span>
        <span className="w-1/3 text-center">Destinations</span>
      </div>
      
      {/* SVG Diagram */}
      <svg width={width} height={height} className="w-full">
        <defs>
          {/* Gradient for links */}
          <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#ef4444" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        
        {/* Links (rendered first so nodes appear on top) */}
        {links.map((link, index) => {
          const thickness = getLinkThickness(link.amount);
          const path = generateLinkPath(link);
          
          if (!path) return null;
          
          return (
            <g key={`link-${index}`} className="group cursor-pointer">
              {/* Hover highlight */}
              <path
                d={path}
                fill="none"
                stroke="transparent"
                strokeWidth={thickness + 10}
                className="group-hover:stroke-zinc-400/20"
              />
              {/* Main link */}
              <path
                d={path}
                fill="none"
                stroke="url(#flowGradient)"
                strokeWidth={thickness}
                className="transition-all duration-200 group-hover:stroke-zinc-400"
              />
              {/* Amount label on hover */}
              <title>
                {formatCurrency(link.amount)}
                {link.description ? `: ${link.description}` : ""}
                {link.date ? ` (${link.date})` : ""}
              </title>
            </g>
          );
        })}
        
        {/* Nodes */}
        {nodes.map((node) => {
          const pos = layout.nodePositions.get(node.id);
          if (!pos) return null;
          
          const inflow = layout.nodeInflows.get(node.id) || 0;
          const outflow = layout.nodeOutflows.get(node.id) || 0;
          const total = Math.max(inflow, outflow, node.total || 0);
          
          const colors = {
            source: { fill: "#f59e0b", border: "#d97706" },
            intermediary: { fill: "#f97316", border: "#ea580c" },
            destination: { fill: "#ef4444", border: "#dc2626" },
          };
          
          const nodeColor = colors[node.type] || colors.intermediary;
          
          return (
            <g key={node.id} className="cursor-pointer">
              {/* Node rectangle */}
              <rect
                x={pos.x}
                y={pos.y - pos.height / 2}
                width={20}
                height={pos.height}
                fill={nodeColor.fill}
                stroke={nodeColor.border}
                strokeWidth={1}
                rx={2}
                className="transition-all duration-200 hover:brightness-125"
              />
              
              {/* Node label */}
              <text
                x={node.type === "destination" ? pos.x + 28 : pos.x + 28}
                y={pos.y + 4}
                fill="#fff"
                fontSize="11"
                fontWeight="500"
                textAnchor={node.type === "source" ? "start" : node.type === "destination" ? "start" : "start"}
              >
                {node.name.length > 20 ? node.name.substring(0, 20) + "..." : node.name}
              </text>
              
              {/* Amount label */}
              {total > 0 && (
                <text
                  x={node.type === "destination" ? pos.x + 28 : pos.x + 28}
                  y={pos.y + 16}
                  fill="#888"
                  fontSize="9"
                  textAnchor={node.type === "source" ? "start" : node.type === "destination" ? "start" : "start"}
                >
                  {formatCurrency(total)}
                </text>
              )}
            </g>
          );
        })}
      </svg>
      
      {/* Total Summary */}
      <div className="border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-xs">
        <span className="text-zinc-500">
          Total tracked: {formatCurrency(links.reduce((sum, l) => sum + l.amount, 0))}
        </span>
        <span className="text-zinc-600">
          {links.length} transactions
        </span>
      </div>
    </div>
  );
}

/**
 * Helper to convert moneyTrail data to flow diagram format
 */
export function moneyTrailToFlow(
  moneyTrail: Array<{
    date: string;
    from: string;
    to: string;
    amount: string;
    purpose: string;
    documented: boolean;
  }>
): { nodes: MoneyFlowNode[]; links: MoneyFlowLink[] } {
  const nodeSet = new Map<string, MoneyFlowNode>();
  const links: MoneyFlowLink[] = [];
  
  // Track which entities appear as sources/targets
  const appearsAsSource = new Set<string>();
  const appearsAsTarget = new Set<string>();
  
  moneyTrail.forEach(tx => {
    appearsAsSource.add(tx.from);
    appearsAsTarget.add(tx.to);
  });
  
  moneyTrail.forEach(tx => {
    // Parse amount string to number
    const amountMatch = tx.amount.match(/[\d,]+(?:\.\d+)?/);
    const amount = amountMatch ? parseFloat(amountMatch[0].replace(/,/g, "")) : 0;
    
    // Determine node types
    const fromType = appearsAsTarget.has(tx.from) 
      ? "intermediary" 
      : "source";
    const toType = appearsAsSource.has(tx.to) 
      ? "intermediary" 
      : "destination";
    
    // Add source node
    if (!nodeSet.has(tx.from)) {
      nodeSet.set(tx.from, {
        id: tx.from,
        name: tx.from,
        type: fromType as MoneyFlowNode["type"],
      });
    }
    
    // Add target node
    if (!nodeSet.has(tx.to)) {
      nodeSet.set(tx.to, {
        id: tx.to,
        name: tx.to,
        type: toType as MoneyFlowNode["type"],
      });
    }
    
    // Add link
    links.push({
      source: tx.from,
      target: tx.to,
      amount,
      description: tx.purpose,
      date: tx.date,
    });
  });
  
  return {
    nodes: Array.from(nodeSet.values()),
    links,
  };
}
