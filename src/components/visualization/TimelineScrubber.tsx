"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Calendar, ZoomIn, ZoomOut, Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description?: string;
  type?: "critical" | "legal" | "political" | "financial" | "default";
  href?: string;
}

interface TimelineScrubberProps {
  events: TimelineEvent[];
  onDateChange?: (startDate: Date, endDate: Date) => void;
  onEventSelect?: (event: TimelineEvent) => void;
  className?: string;
  title?: string;
}

// Parse various date formats
function parseDate(dateStr: string): Date | null {
  // Try ISO format first
  let date = new Date(dateStr);
  if (!isNaN(date.getTime())) return date;
  
  // Try "Month YYYY" format
  const monthYearMatch = dateStr.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{4})$/i);
  if (monthYearMatch) {
    const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    const month = months[monthYearMatch[1].toLowerCase().substring(0, 3) as keyof typeof months];
    return new Date(parseInt(monthYearMatch[2]), month, 1);
  }
  
  // Try "YYYY" format for year-only
  const yearMatch = dateStr.match(/^(\d{4})$/);
  if (yearMatch) {
    return new Date(parseInt(yearMatch[1]), 0, 1);
  }
  
  // Try "Month DD, YYYY" format
  const fullDateMatch = dateStr.match(/^(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]* (\d{1,2}),? (\d{4})$/i);
  if (fullDateMatch) {
    const months = { jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5, jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11 };
    const month = months[fullDateMatch[1].toLowerCase().substring(0, 3) as keyof typeof months];
    return new Date(parseInt(fullDateMatch[3]), month, parseInt(fullDateMatch[2]));
  }
  
  return null;
}

// Format date for display
function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short" });
}

// Event type colors
const eventTypeColors = {
  critical: "#ef4444",
  legal: "#b80000",
  political: "#a855f7",
  financial: "#f59e0b",
  default: "#f97316",
};

export default function TimelineScrubber({
  events,
  onDateChange,
  onEventSelect,
  className = "",
  title = "Timeline Navigator",
}: TimelineScrubberProps) {
  const [rangeStart, setRangeStart] = useState(0);
  const [rangeEnd, setRangeEnd] = useState(100);
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const playIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // Process and sort events by date
  const processedEvents = useMemo(() => {
    return events
      .map(event => ({
        ...event,
        parsedDate: parseDate(event.date),
      }))
      .filter(event => event.parsedDate !== null)
      .sort((a, b) => a.parsedDate!.getTime() - b.parsedDate!.getTime());
  }, [events]);
  
  // Calculate date range
  const dateRange = useMemo(() => {
    if (processedEvents.length === 0) return { min: new Date(), max: new Date(), span: 0 };
    const dates = processedEvents.map(e => e.parsedDate!.getTime());
    const min = new Date(Math.min(...dates));
    const max = new Date(Math.max(...dates));
    return { min, max, span: max.getTime() - min.getTime() };
  }, [processedEvents]);
  
  // Calculate position for an event
  const getEventPosition = (date: Date): number => {
    if (dateRange.span === 0) return 50;
    return ((date.getTime() - dateRange.min.getTime()) / dateRange.span) * 100;
  };
  
  // Get filtered events based on range
  const filteredEvents = useMemo(() => {
    return processedEvents.filter(event => {
      const pos = getEventPosition(event.parsedDate!);
      return pos >= rangeStart && pos <= rangeEnd;
    });
  }, [processedEvents, rangeStart, rangeEnd, dateRange]);
  
  // Notify parent of date changes
  useEffect(() => {
    if (onDateChange && dateRange.span > 0) {
      const startDate = new Date(dateRange.min.getTime() + (rangeStart / 100) * dateRange.span);
      const endDate = new Date(dateRange.min.getTime() + (rangeEnd / 100) * dateRange.span);
      onDateChange(startDate, endDate);
    }
  }, [rangeStart, rangeEnd, dateRange, onDateChange]);
  
  // Auto-play functionality
  useEffect(() => {
    if (isPlaying) {
      playIntervalRef.current = setInterval(() => {
        setRangeStart(prev => {
          const next = prev + 1;
          if (next >= 95) {
            setIsPlaying(false);
            return prev;
          }
          return next;
        });
        setRangeEnd(prev => Math.min(prev + 1, 100));
      }, 300);
    } else {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    }
    
    return () => {
      if (playIntervalRef.current) {
        clearInterval(playIntervalRef.current);
      }
    };
  }, [isPlaying]);
  
  const handleZoomIn = () => {
    const mid = (rangeStart + rangeEnd) / 2;
    const span = (rangeEnd - rangeStart) / 2;
    const newSpan = Math.max(span * 0.7, 5);
    setRangeStart(Math.max(0, mid - newSpan));
    setRangeEnd(Math.min(100, mid + newSpan));
    setZoomLevel(z => z + 0.2);
  };
  
  const handleZoomOut = () => {
    const mid = (rangeStart + rangeEnd) / 2;
    const span = (rangeEnd - rangeStart) / 2;
    const newSpan = Math.min(span * 1.4, 50);
    setRangeStart(Math.max(0, mid - newSpan));
    setRangeEnd(Math.min(100, mid + newSpan));
    setZoomLevel(z => Math.max(z - 0.2, 0.5));
  };
  
  const handlePanLeft = () => {
    const span = rangeEnd - rangeStart;
    const shift = span * 0.2;
    setRangeStart(Math.max(0, rangeStart - shift));
    setRangeEnd(Math.max(span, rangeEnd - shift));
  };
  
  const handlePanRight = () => {
    const span = rangeEnd - rangeStart;
    const shift = span * 0.2;
    setRangeStart(Math.min(100 - span, rangeStart + shift));
    setRangeEnd(Math.min(100, rangeEnd + shift));
  };
  
  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEventId(event.id === selectedEventId ? null : event.id);
    if (onEventSelect) {
      onEventSelect(event);
    }
  };
  
  if (events.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800 p-8 ${className}`}>
        <Calendar className="w-8 h-8 text-zinc-700 mb-2" />
        <span className="text-zinc-500 text-sm">No timeline data available</span>
      </div>
    );
  }
  
  return (
    <div className={`bg-zinc-950 border border-zinc-800/30 ${className}`}>
      {/* Header */}
      <div className="border-b border-zinc-800/30 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-zinc-300" />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">{title}</h3>
        </div>
        
        {/* Controls */}
        <div className="flex items-center gap-1">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
          <button
            onClick={handlePanLeft}
            className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Pan Left"
          >
            <ChevronLeft className="w-3 h-3" />
          </button>
          <button
            onClick={handlePanRight}
            className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Pan Right"
          >
            <ChevronRight className="w-3 h-3" />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3 h-3" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-1.5 bg-black/80 border border-zinc-700 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3 h-3" />
          </button>
        </div>
      </div>
      
      {/* Date range display */}
      <div className="px-4 py-2 flex items-center justify-between text-xs text-zinc-500 border-b border-zinc-800/50">
        <span>{formatDate(new Date(dateRange.min.getTime() + (rangeStart / 100) * dateRange.span))}</span>
        <span>{filteredEvents.length} events</span>
        <span>{formatDate(new Date(dateRange.min.getTime() + (rangeEnd / 100) * dateRange.span))}</span>
      </div>
      
      {/* Timeline track */}
      <div className="p-4">
        <div 
          ref={trackRef}
          className="relative h-16 bg-zinc-900 border border-zinc-800"
        >
          {/* Selection range */}
          <div
            className="absolute top-0 bottom-0 bg-zinc-800/30 border-x border-zinc-700"
            style={{
              left: `${rangeStart}%`,
              width: `${rangeEnd - rangeStart}%`,
            }}
          />
          
          {/* Event markers */}
          {processedEvents.map((event) => {
            const pos = getEventPosition(event.parsedDate!);
            const isSelected = event.id === selectedEventId;
            const isInRange = pos >= rangeStart && pos <= rangeEnd;
            const color = eventTypeColors[event.type || "default"];
            
            return (
              <button
                key={event.id}
                onClick={() => handleEventClick(event)}
                className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-200 ${
                  isSelected ? "scale-150 z-10" : isInRange ? "scale-100" : "scale-75 opacity-50"
                }`}
                style={{
                  left: `${pos}%`,
                  backgroundColor: color,
                  boxShadow: isSelected ? `0 0 10px ${color}` : undefined,
                }}
                title={`${event.date}: ${event.title}`}
              />
            );
          })}
          
          {/* Year markers */}
          {(() => {
            const years: number[] = [];
            const startYear = dateRange.min.getFullYear();
            const endYear = dateRange.max.getFullYear();
            for (let y = startYear; y <= endYear; y++) {
              years.push(y);
            }
            return years.map(year => {
              const yearDate = new Date(year, 0, 1);
              const pos = getEventPosition(yearDate);
              if (pos < 0 || pos > 100) return null;
              return (
                <div
                  key={year}
                  className="absolute top-0 bottom-0 w-px bg-zinc-700/50"
                  style={{ left: `${pos}%` }}
                >
                  <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] text-zinc-600">
                    {year}
                  </span>
                </div>
              );
            });
          })()}
        </div>
      </div>
      
      {/* Selected event detail */}
      {selectedEventId && (() => {
        const event = processedEvents.find(e => e.id === selectedEventId);
        if (!event) return null;
        
        return (
          <div className="px-4 pb-4">
            <div className="bg-black/50 border border-zinc-800 p-3">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <span className="text-xs text-zinc-500">{event.date}</span>
                  <h4 className="text-sm font-medium text-white mt-0.5">{event.title}</h4>
                  {event.description && (
                    <p className="text-xs text-zinc-400 mt-1">{event.description}</p>
                  )}
                </div>
                <span
                  className="w-3 h-3 rounded-full flex-shrink-0"
                  style={{ backgroundColor: eventTypeColors[event.type || "default"] }}
                />
              </div>
            </div>
          </div>
        );
      })()}
      
      {/* Legend */}
      <div className="border-t border-zinc-800 px-4 py-2 flex flex-wrap items-center gap-3 text-[10px]">
        {Object.entries(eventTypeColors).map(([type, color]) => (
          <div key={type} className="flex items-center gap-1">
            <span 
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: color }}
            />
            <span className="text-zinc-500 capitalize">{type}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
