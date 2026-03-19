"use client";

import { useState, useMemo } from "react";
import { MapPin, Info } from "lucide-react";

interface GeoIncident {
  id: string;
  location: string;
  state?: string;
  country?: string;
  count: number;
  severity: "critical" | "high" | "medium" | "low";
  description?: string;
  href?: string;
}

interface GeographicHeatMapProps {
  incidents: GeoIncident[];
  className?: string;
  title?: string;
}

// US State abbreviation to position mapping (simplified grid)
const US_STATES: Record<string, { row: number; col: number; name: string }> = {
  WA: { row: 0, col: 1, name: "Washington" },
  OR: { row: 1, col: 0, name: "Oregon" },
  CA: { row: 2, col: 0, name: "California" },
  NV: { row: 2, col: 1, name: "Nevada" },
  ID: { row: 1, col: 1, name: "Idaho" },
  MT: { row: 0, col: 2, name: "Montana" },
  WY: { row: 1, col: 2, name: "Wyoming" },
  UT: { row: 2, col: 2, name: "Utah" },
  AZ: { row: 3, col: 1, name: "Arizona" },
  CO: { row: 2, col: 3, name: "Colorado" },
  NM: { row: 3, col: 2, name: "New Mexico" },
  ND: { row: 0, col: 3, name: "North Dakota" },
  SD: { row: 1, col: 3, name: "South Dakota" },
  NE: { row: 1, col: 4, name: "Nebraska" },
  KS: { row: 2, col: 4, name: "Kansas" },
  OK: { row: 3, col: 3, name: "Oklahoma" },
  TX: { row: 4, col: 2, name: "Texas" },
  MN: { row: 0, col: 4, name: "Minnesota" },
  IA: { row: 1, col: 5, name: "Iowa" },
  MO: { row: 2, col: 5, name: "Missouri" },
  AR: { row: 3, col: 4, name: "Arkansas" },
  LA: { row: 4, col: 3, name: "Louisiana" },
  WI: { row: 0, col: 5, name: "Wisconsin" },
  IL: { row: 1, col: 6, name: "Illinois" },
  IN: { row: 1, col: 7, name: "Indiana" },
  MI: { row: 0, col: 6, name: "Michigan" },
  OH: { row: 1, col: 8, name: "Ohio" },
  KY: { row: 2, col: 6, name: "Kentucky" },
  TN: { row: 2, col: 7, name: "Tennessee" },
  MS: { row: 3, col: 5, name: "Mississippi" },
  AL: { row: 3, col: 6, name: "Alabama" },
  GA: { row: 3, col: 7, name: "Georgia" },
  FL: { row: 4, col: 7, name: "Florida" },
  SC: { row: 2, col: 8, name: "South Carolina" },
  NC: { row: 2, col: 9, name: "North Carolina" },
  VA: { row: 1, col: 9, name: "Virginia" },
  WV: { row: 1, col: 8, name: "West Virginia" },
  MD: { row: 1, col: 10, name: "Maryland" },
  DE: { row: 1, col: 11, name: "Delaware" },
  NJ: { row: 0, col: 10, name: "New Jersey" },
  PA: { row: 0, col: 9, name: "Pennsylvania" },
  NY: { row: 0, col: 8, name: "New York" },
  CT: { row: 0, col: 11, name: "Connecticut" },
  RI: { row: 0, col: 12, name: "Rhode Island" },
  MA: { row: -1, col: 11, name: "Massachusetts" },
  VT: { row: -1, col: 10, name: "Vermont" },
  NH: { row: -1, col: 9, name: "New Hampshire" },
  ME: { row: -2, col: 10, name: "Maine" },
  AK: { row: 5, col: 0, name: "Alaska" },
  HI: { row: 5, col: 2, name: "Hawaii" },
  DC: { row: 2, col: 10, name: "D.C." },
};

// Severity to color mapping
const severityColors = {
  critical: { bg: "#dc2626", text: "#fef2f2" },
  high: { bg: "#ea580c", text: "#fff7ed" },
  medium: { bg: "#ca8a04", text: "#fefce8" },
  low: { bg: "#4b5563", text: "#f9fafb" },
};

// Intensity gradient based on count
function getIntensityColor(count: number, maxCount: number, severity: string) {
  const baseColors = severityColors[severity as keyof typeof severityColors] || severityColors.medium;
  const intensity = Math.min(1, count / maxCount);
  return {
    bg: baseColors.bg,
    opacity: 0.3 + intensity * 0.7,
  };
}

export default function GeographicHeatMap({
  incidents,
  className = "",
  title = "Geographic Distribution",
}: GeographicHeatMapProps) {
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [hoveredState, setHoveredState] = useState<string | null>(null);
  
  // Group incidents by state
  const stateData = useMemo(() => {
    const data = new Map<string, { total: number; incidents: GeoIncident[]; maxSeverity: string }>();
    
    incidents.forEach(incident => {
      const state = incident.state?.toUpperCase();
      if (state && US_STATES[state]) {
        const existing = data.get(state) || { total: 0, incidents: [], maxSeverity: "low" };
        existing.total += incident.count;
        existing.incidents.push(incident);
        
        // Track max severity
        const severityOrder = { critical: 4, high: 3, medium: 2, low: 1 };
        if (severityOrder[incident.severity as keyof typeof severityOrder] > 
            severityOrder[existing.maxSeverity as keyof typeof severityOrder]) {
          existing.maxSeverity = incident.severity;
        }
        
        data.set(state, existing);
      }
    });
    
    return data;
  }, [incidents]);
  
  // Calculate max count for scaling
  const maxCount = useMemo(() => {
    return Math.max(...Array.from(stateData.values()).map(d => d.total), 1);
  }, [stateData]);
  
  // Get grid dimensions
  const minRow = Math.min(...Object.values(US_STATES).map(s => s.row));
  const maxRow = Math.max(...Object.values(US_STATES).map(s => s.row));
  const maxCol = Math.max(...Object.values(US_STATES).map(s => s.col));
  
  const rows = maxRow - minRow + 1;
  const cols = maxCol + 1;
  
  const selectedStateData = selectedState ? stateData.get(selectedState) : null;
  const hoveredStateInfo = hoveredState ? US_STATES[hoveredState] : null;
  const hoveredStateData = hoveredState ? stateData.get(hoveredState) : null;
  
  return (
    <div className={`bg-zinc-950 border border-blood-900/30 ${className}`}>
      {/* Header */}
      <div className="border-b border-blood-900/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-blood-500" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        {hoveredStateInfo && (
          <div className="text-xs text-zinc-400">
            {hoveredStateInfo.name}
            {hoveredStateData && (
              <span className="text-blood-400 ml-2">
                {hoveredStateData.total} incidents
              </span>
            )}
          </div>
        )}
      </div>
      
      {/* Map Grid */}
      <div className="p-4 overflow-x-auto">
        <div 
          className="grid gap-1 mx-auto"
          style={{ 
            gridTemplateColumns: `repeat(${cols}, minmax(32px, 40px))`,
            gridTemplateRows: `repeat(${rows}, minmax(24px, 30px))`,
            width: "fit-content",
          }}
        >
          {Object.entries(US_STATES).map(([abbr, pos]) => {
            const data = stateData.get(abbr);
            const hasData = !!data;
            const colorInfo = data 
              ? getIntensityColor(data.total, maxCount, data.maxSeverity)
              : null;
            const isSelected = selectedState === abbr;
            const isHovered = hoveredState === abbr;
            
            return (
              <button
                key={abbr}
                onClick={() => setSelectedState(isSelected ? null : abbr)}
                onMouseEnter={() => setHoveredState(abbr)}
                onMouseLeave={() => setHoveredState(null)}
                className={`
                  relative text-[10px] font-bold transition-all duration-200
                  ${hasData 
                    ? "cursor-pointer hover:scale-110 hover:z-10" 
                    : "cursor-default opacity-30"
                  }
                  ${isSelected ? "ring-2 ring-white ring-offset-1 ring-offset-black z-20" : ""}
                  ${isHovered && !isSelected ? "ring-1 ring-blood-500" : ""}
                `}
                style={{
                  gridRow: pos.row - minRow + 1,
                  gridColumn: pos.col + 1,
                  backgroundColor: colorInfo?.bg || "#27272a",
                  opacity: colorInfo?.opacity || 0.2,
                  color: hasData ? "#fff" : "#666",
                }}
              >
                {abbr}
                {hasData && data.total > 1 && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-blood-600 text-[7px] flex items-center justify-center rounded-full">
                    {data.total > 9 ? "9+" : data.total}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Legend */}
      <div className="border-t border-zinc-800 px-4 py-2 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-3">
          {Object.entries(severityColors).map(([level, colors]) => (
            <div key={level} className="flex items-center gap-1">
              <span 
                className="w-3 h-3" 
                style={{ backgroundColor: colors.bg }}
              />
              <span className="text-zinc-500 capitalize">{level}</span>
            </div>
          ))}
        </div>
        <span className="text-zinc-600">
          {stateData.size} states with incidents
        </span>
      </div>
      
      {/* Selected State Detail */}
      {selectedState && selectedStateData && (
        <div className="border-t border-blood-900/30 p-4 bg-black/50">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="text-sm font-bold text-white">
                {US_STATES[selectedState].name}
              </h4>
              <p className="text-xs text-zinc-500">
                {selectedStateData.total} total incidents
              </p>
            </div>
            <button
              onClick={() => setSelectedState(null)}
              className="text-xs text-zinc-600 hover:text-white"
            >
              ✕
            </button>
          </div>
          <div className="space-y-2 max-h-40 overflow-y-auto">
            {selectedStateData.incidents.map((incident, i) => (
              <div 
                key={incident.id || i}
                className="flex items-center gap-2 text-xs"
              >
                <span 
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: severityColors[incident.severity].bg }}
                />
                <span className="text-zinc-300 truncate flex-1">
                  {incident.location}: {incident.description || `${incident.count} incidents`}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {incidents.length === 0 && (
        <div className="flex flex-col items-center justify-center py-8 text-zinc-500">
          <Info className="w-8 h-8 mb-2" />
          <p className="text-sm">No geographic data available</p>
        </div>
      )}
    </div>
  );
}
