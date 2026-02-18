'use client';

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Download,
  Printer,
  Search,
  RotateCw,
  Maximize2,
  Minimize2,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface PDFViewerProps {
  url: string;
  title?: string;
  initialPage?: number;
  showToolbar?: boolean;
  showPageNumbers?: boolean;
  enableDownload?: boolean;
  enablePrint?: boolean;
  className?: string;
  onPageChange?: (page: number) => void;
  onLoadSuccess?: (numPages: number) => void;
  onLoadError?: (error: Error) => void;
}

// ============================================================
// Component
// ============================================================

export default function PDFViewer({
  url,
  title,
  initialPage = 1,
  showToolbar = true,
  showPageNumbers = true,
  enableDownload = true,
  enablePrint = true,
  className,
  onPageChange,
  onLoadSuccess,
  onLoadError,
}: PDFViewerProps) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [numPages, setNumPages] = useState<number | null>(null);
  const [zoom, setZoom] = useState(100);
  const [rotation, setRotation] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // For demonstration, we'll use an iframe-based viewer
  // In a real implementation, you'd use pdf.js or react-pdf
  const viewerUrl = `${url}#page=${currentPage}&zoom=${zoom}`;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= (numPages || 1)) {
      setCurrentPage(page);
      onPageChange?.(page);
    }
  };

  const handleZoomIn = () => setZoom((z) => Math.min(z + 25, 300));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 25, 25));
  const handleRotate = () => setRotation((r) => (r + 90) % 360);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = url;
    link.download = title || 'document.pdf';
    link.click();
  };

  const handlePrint = () => {
    if (iframeRef.current?.contentWindow) {
      iframeRef.current.contentWindow.print();
    } else {
      window.open(url, '_blank');
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement && containerRef.current) {
      containerRef.current.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () =>
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Simulate PDF loading
  useEffect(() => {
    setLoading(true);
    setError(null);

    // Simulating PDF load - in real implementation use pdf.js
    const timer = setTimeout(() => {
      setLoading(false);
      const simulatedPages = 10;
      setNumPages(simulatedPages);
      onLoadSuccess?.(simulatedPages);
    }, 1000);

    return () => clearTimeout(timer);
  }, [url, onLoadSuccess]);

  return (
    <div
      ref={containerRef}
      className={cn(
        'flex flex-col bg-zinc-900 border border-zinc-800',
        isFullscreen && 'fixed inset-0 z-50',
        className
      )}
    >
      {/* Toolbar */}
      {showToolbar && (
        <div className="flex items-center justify-between p-2 border-b border-zinc-800 bg-zinc-800/50">
          {/* Left: Title and page info */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-white">
              <FileText className="w-4 h-4 text-blood-500" />
              <span className="text-sm truncate max-w-[200px]">
                {title || 'Document'}
              </span>
            </div>

            {showPageNumbers && numPages && (
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage <= 1}
                  className="p-1 text-zinc-400 hover:text-white disabled:opacity-50 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-1 text-sm">
                  <input
                    type="number"
                    value={currentPage}
                    onChange={(e) => handlePageChange(parseInt(e.target.value) || 1)}
                    min={1}
                    max={numPages}
                    className="w-12 px-2 py-1 bg-zinc-700 border border-zinc-600 text-white text-center focus:outline-none focus:border-blood-500"
                  />
                  <span className="text-zinc-500">/ {numPages}</span>
                </div>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage >= numPages}
                  className="p-1 text-zinc-400 hover:text-white disabled:opacity-50 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Center: Zoom controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleZoomOut}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="Zoom out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <span className="text-xs text-zinc-400 w-12 text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="Zoom in"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <div className="w-px h-4 bg-zinc-700 mx-2" />
            <button
              onClick={handleRotate}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title="Rotate"
            >
              <RotateCw className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setShowSearch(!showSearch)}
              className={cn(
                'p-1.5 transition-colors',
                showSearch
                  ? 'text-blood-500'
                  : 'text-zinc-400 hover:text-white'
              )}
              title="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            {enablePrint && (
              <button
                onClick={handlePrint}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="Print"
              >
                <Printer className="w-4 h-4" />
              </button>
            )}
            {enableDownload && (
              <button
                onClick={handleDownload}
                className="p-1.5 text-zinc-400 hover:text-white transition-colors"
                title="Download"
              >
                <Download className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={toggleFullscreen}
              className="p-1.5 text-zinc-400 hover:text-white transition-colors"
              title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
            >
              {isFullscreen ? (
                <Minimize2 className="w-4 h-4" />
              ) : (
                <Maximize2 className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      )}

      {/* Search bar */}
      {showSearch && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="border-b border-zinc-800 bg-zinc-800/30"
        >
          <div className="flex items-center gap-2 p-2">
            <Search className="w-4 h-4 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search in document..."
              className="flex-1 px-2 py-1 bg-transparent text-white placeholder-zinc-500 focus:outline-none"
            />
          </div>
        </motion.div>
      )}

      {/* PDF Content */}
      <div className="flex-1 relative overflow-auto">
        {/* Loading state */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <div className="flex flex-col items-center gap-3">
              <Loader2 className="w-8 h-8 text-blood-500 animate-spin" />
              <span className="text-sm text-zinc-400">Loading document...</span>
            </div>
          </div>
        )}

        {/* Error state */}
        {error && (
          <div className="absolute inset-0 flex items-center justify-center bg-zinc-900">
            <div className="flex flex-col items-center gap-3 text-center p-6">
              <AlertCircle className="w-12 h-12 text-red-500" />
              <div>
                <p className="text-white font-medium">Failed to load document</p>
                <p className="text-sm text-zinc-400 mt-1">{error}</p>
              </div>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-zinc-800 text-white hover:bg-zinc-700 transition-colors"
              >
                Try again
              </button>
            </div>
          </div>
        )}

        {/* PDF iframe (fallback viewer) */}
        {!loading && !error && (
          <div
            className="min-h-full flex items-center justify-center p-4"
            style={{
              transform: `rotate(${rotation}deg)`,
              transformOrigin: 'center center',
            }}
          >
            <iframe
              ref={iframeRef}
              src={viewerUrl}
              className="w-full bg-white"
              style={{
                height: `${Math.max(600, 600 * (zoom / 100))}px`,
                maxWidth: `${100 * (zoom / 100)}%`,
              }}
              title={title || 'PDF Document'}
            />
          </div>
        )}
      </div>

      {/* Page thumbnails sidebar (optional) */}
      {numPages && numPages > 1 && (
        <div className="border-t border-zinc-800 bg-zinc-800/50 p-2">
          <div className="flex gap-2 overflow-x-auto">
            {Array.from({ length: Math.min(numPages, 10) }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={cn(
                  'flex-shrink-0 w-12 h-16 flex items-center justify-center text-xs transition-all',
                  currentPage === i + 1
                    ? 'bg-blood-500 text-white'
                    : 'bg-zinc-700 text-zinc-400 hover:bg-zinc-600'
                )}
              >
                {i + 1}
              </button>
            ))}
            {numPages > 10 && (
              <span className="flex items-center text-xs text-zinc-500 px-2">
                +{numPages - 10} more
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export { PDFViewer };
