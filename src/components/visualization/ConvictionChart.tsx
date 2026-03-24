"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Scale, ChevronDown, AlertTriangle } from "lucide-react";

interface ConvictionData {
  id: string;
  name: string;
  role?: string;
  status: "convicted" | "indicted" | "charged" | "acquitted" | "pardoned" | "pending" | "settled" | "appealing" | "incarcerated" | "released";
  charges?: string[];
  convictionDate?: string;
  sentence?: string;
  prisonTerm?: string; // e.g., "37 months", "10 years"
  fine?: string;
  restitution?: string;
  pardonDate?: string;
  pardonedBy?: string;
  href?: string;
}

interface ConvictionComparisonChartProps {
  defendants: ConvictionData[];
  className?: string;
  title?: string;
  sortBy?: "prisonTerm" | "fine" | "status" | "name";
}

// Parse prison term to months for comparison
function parsePrisonTerm(term?: string): number {
  if (!term) return 0;
  const lower = term.toLowerCase();
  
  // Match "X months" or "X years"
  const monthsMatch = lower.match(/(\d+)\s*months?/);
  const yearsMatch = lower.match(/(\d+)\s*years?/);
  const daysMatch = lower.match(/(\d+)\s*days?/);
  
  let months = 0;
  if (monthsMatch) months += parseInt(monthsMatch[1]);
  if (yearsMatch) months += parseInt(yearsMatch[1]) * 12;
  if (daysMatch) months += Math.floor(parseInt(daysMatch[1]) / 30);
  
  // Handle "life" sentences
  if (lower.includes("life")) return 600; // 50 years as proxy
  
  return months;
}

// Parse fine/restitution to number
function parseAmount(amount?: string): number {
  if (!amount) return 0;
  const match = amount.replace(/[,$]/g, "").match(/[\d.]+/);
  if (!match) return 0;
  
  let value = parseFloat(match[0]);
  if (amount.toLowerCase().includes("million") || amount.includes("M")) {
    value *= 1000000;
  } else if (amount.toLowerCase().includes("billion") || amount.includes("B")) {
    value *= 1000000000;
  } else if (amount.toLowerCase().includes("thousand") || amount.includes("K")) {
    value *= 1000;
  }
  
  return value;
}

// Format months to readable string
function formatMonths(months: number): string {
  if (months === 0) return "—";
  if (months >= 600) return "Life";
  if (months >= 12) {
    const years = Math.floor(months / 12);
    const remaining = months % 12;
    if (remaining === 0) return `${years}y`;
    return `${years}y ${remaining}m`;
  }
  return `${months}m`;
}

// Format currency
function formatCurrency(amount: number): string {
  if (amount === 0) return "—";
  if (amount >= 1e9) return `$${(amount / 1e9).toFixed(1)}B`;
  if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
  if (amount >= 1e3) return `$${(amount / 1e3).toFixed(0)}K`;
  return `$${amount.toLocaleString()}`;
}

// Status colors
const statusColors: Record<string, { bg: string; text: string; label: string }> = {
  convicted: { bg: "bg-red-900/50", text: "text-red-400", label: "Convicted" },
  incarcerated: { bg: "bg-red-900/70", text: "text-red-300", label: "Incarcerated" },
  indicted: { bg: "bg-orange-900/50", text: "text-orange-400", label: "Indicted" },
  charged: { bg: "bg-yellow-900/50", text: "text-yellow-400", label: "Charged" },
  pending: { bg: "bg-yellow-900/40", text: "text-yellow-500", label: "Pending" },
  appealing: { bg: "bg-amber-900/40", text: "text-amber-400", label: "Appealing" },
  pardoned: { bg: "bg-purple-900/50", text: "text-purple-400", label: "Pardoned" },
  acquitted: { bg: "bg-green-900/50", text: "text-green-400", label: "Acquitted" },
  settled: { bg: "bg-blood-900/50", text: "text-blood-400", label: "Settled" },
  released: { bg: "bg-zinc-800/50", text: "text-zinc-400", label: "Released" },
};

export default function ConvictionComparisonChart({
  defendants,
  className = "",
  title = "Conviction & Sentencing Comparison",
  sortBy = "prisonTerm",
}: ConvictionComparisonChartProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [currentSort, setCurrentSort] = useState(sortBy);
  
  // Process and sort defendants
  const processedData = useMemo(() => {
    const withValues = defendants.map(d => ({
      ...d,
      prisonMonths: parsePrisonTerm(d.prisonTerm),
      fineAmount: parseAmount(d.fine) + parseAmount(d.restitution),
    }));
    
    // Sort
    return [...withValues].sort((a, b) => {
      switch (currentSort) {
        case "prisonTerm":
          return b.prisonMonths - a.prisonMonths;
        case "fine":
          return b.fineAmount - a.fineAmount;
        case "status":
          const statusOrder = { incarcerated: 0, convicted: 1, indicted: 2, charged: 3, pending: 4, appealing: 5, pardoned: 6, settled: 7, acquitted: 8, released: 9 };
          return (statusOrder[a.status] || 10) - (statusOrder[b.status] || 10);
        case "name":
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });
  }, [defendants, currentSort]);
  
  // Calculate max values for scaling
  const maxPrisonMonths = Math.max(...processedData.map(d => d.prisonMonths), 1);
  const maxFine = Math.max(...processedData.map(d => d.fineAmount), 1);
  
  if (defendants.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800 p-8 ${className}`}>
        <Scale className="w-8 h-8 text-zinc-700 mb-2" />
        <span className="text-zinc-500 text-sm">No conviction data available</span>
      </div>
    );
  }
  
  return (
    <div className={`bg-zinc-950 border border-zinc-800/30 ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-zinc-300" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        
        {/* Sort selector */}
        <select
          value={currentSort}
          onChange={(e) => setCurrentSort(e.target.value as typeof currentSort)}
          className="text-xs bg-black border border-zinc-700 text-zinc-400 px-2 py-1 focus:outline-none focus:border-zinc-700"
        >
          <option value="prisonTerm">Sort by Prison Term</option>
          <option value="fine">Sort by Financial Penalty</option>
          <option value="status">Sort by Status</option>
          <option value="name">Sort by Name</option>
        </select>
      </div>
      
      {/* Chart */}
      <div className="divide-y divide-zinc-800/50">
        {processedData.map((defendant) => {
          const isExpanded = expandedId === defendant.id;
          const statusInfo = statusColors[defendant.status] || statusColors.pending;
          const prisonBarWidth = (defendant.prisonMonths / maxPrisonMonths) * 100;
          const fineBarWidth = (defendant.fineAmount / maxFine) * 100;
          
          return (
            <div key={defendant.id} className="relative">
              {/* Main row */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : defendant.id)}
                className="w-full p-4 hover:bg-zinc-800/80/20 transition-colors text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Status badge */}
                  <span className={`flex-shrink-0 px-2 py-0.5 text-[10px] font-bold uppercase ${statusInfo.bg} ${statusInfo.text}`}>
                    {statusInfo.label}
                  </span>
                  
                  {/* Name and role */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-white truncate">
                        {defendant.name}
                      </span>
                      {defendant.pardonDate && (
                        <span className="text-[10px] text-purple-400">
                          Pardoned {defendant.pardonDate}
                        </span>
                      )}
                    </div>
                    {defendant.role && (
                      <span className="text-xs text-zinc-500 truncate block">
                        {defendant.role}
                      </span>
                    )}
                  </div>
                  
                  {/* Prison term bar */}
                  <div className="w-32 hidden sm:block">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-3 bg-zinc-800/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-red-900 to-red-600 transition-all duration-300"
                          style={{ width: `${prisonBarWidth}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-400 w-12 text-right">
                        {formatMonths(defendant.prisonMonths)}
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-600">Prison</span>
                  </div>
                  
                  {/* Fine bar */}
                  <div className="w-32 hidden md:block">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-3 bg-zinc-800/50 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-green-900 to-green-600 transition-all duration-300"
                          style={{ width: `${fineBarWidth}%` }}
                        />
                      </div>
                      <span className="text-xs text-zinc-400 w-16 text-right">
                        {formatCurrency(defendant.fineAmount)}
                      </span>
                    </div>
                    <span className="text-[9px] text-zinc-600">Financial</span>
                  </div>
                  
                  {/* Expand icon */}
                  <ChevronDown 
                    className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isExpanded ? "rotate-180" : ""}`}
                  />
                </div>
              </button>
              
              {/* Expanded details */}
              {isExpanded && (
                <div className="px-4 pb-4 bg-black/30">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    {/* Charges */}
                    {defendant.charges && defendant.charges.length > 0 && (
                      <div>
                        <h5 className="text-zinc-500 uppercase tracking-wider mb-1">Charges</h5>
                        <ul className="space-y-0.5">
                          {defendant.charges.map((charge, i) => (
                            <li key={i} className="flex items-start gap-1.5 text-zinc-300">
                              <AlertTriangle className="w-3 h-3 text-zinc-300 mt-0.5 flex-shrink-0" />
                              <span>{charge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {/* Sentence details */}
                    <div className="space-y-2">
                      {defendant.sentence && (
                        <div>
                          <span className="text-zinc-500">Sentence: </span>
                          <span className="text-zinc-300">{defendant.sentence}</span>
                        </div>
                      )}
                      {defendant.prisonTerm && (
                        <div>
                          <span className="text-zinc-500">Prison: </span>
                          <span className="text-zinc-300">{defendant.prisonTerm}</span>
                        </div>
                      )}
                      {defendant.fine && (
                        <div>
                          <span className="text-zinc-500">Fine: </span>
                          <span className="text-zinc-300">{defendant.fine}</span>
                        </div>
                      )}
                      {defendant.restitution && (
                        <div>
                          <span className="text-zinc-500">Restitution: </span>
                          <span className="text-zinc-300">{defendant.restitution}</span>
                        </div>
                      )}
                      {defendant.pardonedBy && (
                        <div>
                          <span className="text-zinc-500">Pardoned by: </span>
                          <span className="text-purple-400">{defendant.pardonedBy}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Link to profile */}
                  {defendant.href && (
                    <Link
                      href={defendant.href}
                      className="inline-block mt-3 text-xs text-zinc-300 hover:text-white"
                    >
                      View full profile →
                    </Link>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
      
      {/* Summary footer */}
      <div className="border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-[10px] text-zinc-600">
        <span>
          {defendants.filter(d => d.status === "convicted" || d.status === "incarcerated").length} convicted
        </span>
        <span>
          {defendants.filter(d => d.pardonDate).length} pardoned
        </span>
        <span>
          Total: {formatCurrency(processedData.reduce((sum, d) => sum + d.fineAmount, 0))} in penalties
        </span>
      </div>
    </div>
  );
}
