'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ZoomIn,
  ZoomOut,
  Layers,
  Navigation,
  Search,
  X,
  Info,
  ExternalLink,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface MapMarker {
  id: string;
  lat: number;
  lng: number;
  title: string;
  description?: string;
  category?: string;
  color?: string;
  icon?: React.ReactNode;
  data?: Record<string, unknown>;
}

interface MapRegion {
  id: string;
  name: string;
  coordinates: Array<{ lat: number; lng: number }>;
  color?: string;
  fillOpacity?: number;
}

interface MapViewProps {
  markers?: MapMarker[];
  regions?: MapRegion[];
  center?: { lat: number; lng: number };
  zoom?: number;
  minZoom?: number;
  maxZoom?: number;
  onMarkerClick?: (marker: MapMarker) => void;
  onRegionClick?: (region: MapRegion) => void;
  onMapClick?: (coords: { lat: number; lng: number }) => void;
  showSearch?: boolean;
  showZoomControls?: boolean;
  showLayerControl?: boolean;
  className?: string;
}

// ============================================================
// Default Markers by Category
// ============================================================

const categoryColors: Record<string, string> = {
  investigation: '#d64545',
  entity: '#3b82f6',
  evidence: '#22c55e',
  incident: '#f59e0b',
  default: '#a855f7',
};

// ============================================================
// Simple Map (No external dependencies)
// ============================================================

export default function MapView({
  markers = [],
  regions = [],
  center = { lat: 39.8283, lng: -98.5795 }, // Center of US
  zoom: initialZoom = 4,
  minZoom = 1,
  maxZoom = 18,
  onMarkerClick,
  onRegionClick,
  onMapClick,
  showSearch = true,
  showZoomControls = true,
  showLayerControl = true,
  className,
}: MapViewProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState(initialZoom);
  const [mapCenter, setMapCenter] = useState(center);
  const [selectedMarker, setSelectedMarker] = useState<MapMarker | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredMarker, setHoveredMarker] = useState<string | null>(null);

  // Map dimensions
  const MAP_WIDTH = 1000;
  const MAP_HEIGHT = 600;

  // Convert lat/lng to pixel coordinates
  const latLngToPixel = useCallback(
    (lat: number, lng: number) => {
      // Simple Mercator projection
      const scale = Math.pow(2, zoom) * 50;
      const x = ((lng - mapCenter.lng) * scale) / 360 + MAP_WIDTH / 2;
      const latRad = (lat * Math.PI) / 180;
      const centerLatRad = (mapCenter.lat * Math.PI) / 180;
      const y =
        MAP_HEIGHT / 2 -
        (Math.log(Math.tan(Math.PI / 4 + latRad / 2)) -
          Math.log(Math.tan(Math.PI / 4 + centerLatRad / 2))) *
          scale *
          0.5;
      return { x, y };
    },
    [zoom, mapCenter, MAP_WIDTH, MAP_HEIGHT]
  );

  // Zoom controls
  const handleZoomIn = () => setZoom((z) => Math.min(z + 1, maxZoom));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 1, minZoom));

  // Mouse drag for panning
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const dx = e.clientX - dragStart.x;
    const dy = e.clientY - dragStart.y;
    const scale = Math.pow(2, zoom) * 50;

    setMapCenter((prev) => ({
      lat: prev.lat + (dy / scale) * 180,
      lng: prev.lng - (dx / scale) * 360,
    }));
    setDragStart({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => setIsDragging(false);

  // Handle marker click
  const handleMarkerClick = (marker: MapMarker) => {
    setSelectedMarker(marker);
    onMarkerClick?.(marker);
  };

  // Filter markers by search
  const filteredMarkers = markers.filter(
    (m) =>
      !searchQuery ||
      m.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      m.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative bg-zinc-900 border border-zinc-800 overflow-hidden',
        className
      )}
    >
      {/* Map Container */}
      <div
        className="relative cursor-grab active:cursor-grabbing"
        style={{ width: '100%', height: '500px' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {/* Background Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: `${20 * zoom}px ${20 * zoom}px`,
          }}
        />

        {/* Map visual (placeholder) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="relative"
            style={{ width: MAP_WIDTH, height: MAP_HEIGHT }}
          >
            {/* Markers */}
            {filteredMarkers.map((marker) => {
              const pos = latLngToPixel(marker.lat, marker.lng);
              const color = marker.color || categoryColors[marker.category || 'default'];

              // Check if marker is within bounds
              if (pos.x < 0 || pos.x > MAP_WIDTH || pos.y < 0 || pos.y > MAP_HEIGHT) {
                return null;
              }

              return (
                <motion.div
                  key={marker.id}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -translate-x-1/2 -translate-y-full cursor-pointer"
                  style={{ left: pos.x, top: pos.y }}
                  onMouseEnter={() => setHoveredMarker(marker.id)}
                  onMouseLeave={() => setHoveredMarker(null)}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleMarkerClick(marker);
                  }}
                >
                  {/* Marker pin */}
                  <div className="relative">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="flex flex-col items-center"
                    >
                      {marker.icon || (
                        <MapPin
                          className="w-8 h-8 drop-shadow-lg"
                          style={{ color }}
                          fill={color}
                        />
                      )}
                    </motion.div>

                    {/* Tooltip */}
                    <AnimatePresence>
                      {hoveredMarker === marker.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 5 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 5 }}
                          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-zinc-800 border border-zinc-700 whitespace-nowrap z-10"
                        >
                          <p className="text-xs text-white font-medium">
                            {marker.title}
                          </p>
                          {marker.category && (
                            <p className="text-[10px] text-zinc-500">
                              {marker.category}
                            </p>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Center crosshair */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <div className="w-4 h-px bg-zinc-600" />
          <div className="w-px h-4 bg-zinc-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Controls Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-start justify-between pointer-events-none">
        {/* Search */}
        {showSearch && (
          <div className="pointer-events-auto">
            <div className="flex items-center gap-2 bg-zinc-800 border border-zinc-700 px-3 py-2">
              <Search className="w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search locations..."
                className="bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none w-48"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-zinc-400 hover:text-white"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>
          </div>
        )}

        {/* Zoom controls */}
        {showZoomControls && (
          <div className="pointer-events-auto flex flex-col gap-1">
            <button
              onClick={handleZoomIn}
              disabled={zoom >= maxZoom}
              className="p-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-50 transition-colors"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="px-2 py-1 bg-zinc-800 border border-zinc-700 text-xs text-center text-zinc-400">
              {zoom}x
            </div>
            <button
              onClick={handleZoomOut}
              disabled={zoom <= minZoom}
              className="p-2 bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white disabled:opacity-50 transition-colors"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>

      {/* Coordinates display */}
      <div className="absolute bottom-4 left-4 px-2 py-1 bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
        {mapCenter.lat.toFixed(4)}°, {mapCenter.lng.toFixed(4)}°
      </div>

      {/* Marker count */}
      <div className="absolute bottom-4 right-4 px-2 py-1 bg-zinc-800/80 border border-zinc-700 text-xs text-zinc-400">
        {filteredMarkers.length} marker{filteredMarkers.length !== 1 && 's'}
      </div>

      {/* Selected Marker Panel */}
      <AnimatePresence>
        {selectedMarker && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="absolute top-4 right-16 w-64 bg-zinc-800 border border-zinc-700 shadow-lg"
          >
            <div className="flex items-start justify-between p-3 border-b border-zinc-700">
              <div>
                <h3 className="font-medium text-white">{selectedMarker.title}</h3>
                {selectedMarker.category && (
                  <span
                    className="text-xs px-1.5 py-0.5 mt-1 inline-block"
                    style={{
                      backgroundColor: `${categoryColors[selectedMarker.category]}20`,
                      color: categoryColors[selectedMarker.category],
                    }}
                  >
                    {selectedMarker.category}
                  </span>
                )}
              </div>
              <button
                onClick={() => setSelectedMarker(null)}
                className="p-1 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {selectedMarker.description && (
              <div className="p-3 border-b border-zinc-700">
                <p className="text-sm text-zinc-400">{selectedMarker.description}</p>
              </div>
            )}
            <div className="p-3">
              <div className="flex items-center gap-2 text-xs text-zinc-500">
                <MapPin className="w-3 h-3" />
                {selectedMarker.lat.toFixed(4)}°, {selectedMarker.lng.toFixed(4)}°
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Legend */}
      {showLayerControl && markers.length > 0 && (
        <div className="absolute bottom-12 left-4 bg-zinc-800/80 border border-zinc-700 p-2">
          <p className="text-xs text-zinc-500 mb-2">Categories</p>
          <div className="space-y-1">
            {Object.entries(categoryColors).map(([category, color]) => {
              const count = markers.filter((m) => m.category === category).length;
              if (count === 0 && category !== 'default') return null;
              return (
                <div key={category} className="flex items-center gap-2">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <span className="text-xs text-zinc-400 capitalize">
                    {category} ({count})
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export { MapView };
export type { MapMarker, MapRegion };
