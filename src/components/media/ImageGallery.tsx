'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Image as ImageIcon,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCw,
  Download,
  Maximize2,
  Grid3X3,
  Columns,
} from 'lucide-react';
import { cn } from '@/lib/utils';

// ============================================================
// Types
// ============================================================

interface GalleryImage {
  id: string;
  src: string;
  thumbnail?: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  layout?: 'grid' | 'masonry' | 'carousel';
  columns?: 2 | 3 | 4 | 5;
  gap?: number;
  showTitles?: boolean;
  enableLightbox?: boolean;
  className?: string;
}

// ============================================================
// Gallery Component
// ============================================================

export default function ImageGallery({
  images,
  layout = 'grid',
  columns = 3,
  gap = 4,
  showTitles = false,
  enableLightbox = true,
  className,
}: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleSelect = (index: number) => {
    if (enableLightbox) {
      setSelectedIndex(index);
    }
  };

  const columnClasses = {
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4',
    5: 'grid-cols-5',
  };

  const gapClasses = {
    2: 'gap-2',
    4: 'gap-4',
    6: 'gap-6',
    8: 'gap-8',
  };

  return (
    <div className={className}>
      {/* Grid Layout */}
      {layout === 'grid' && (
        <div
          className={cn(
            'grid',
            columnClasses[columns],
            gapClasses[gap as keyof typeof gapClasses] || 'gap-4'
          )}
        >
          {images.map((image, index) => (
            <GalleryItem
              key={image.id}
              image={image}
              showTitle={showTitles}
              onClick={() => handleSelect(index)}
            />
          ))}
        </div>
      )}

      {/* Masonry Layout */}
      {layout === 'masonry' && (
        <div
          className={cn(
            'columns-2 md:columns-3 lg:columns-4',
            gapClasses[gap as keyof typeof gapClasses] || 'gap-4'
          )}
        >
          {images.map((image, index) => (
            <div key={image.id} className="break-inside-avoid mb-4">
              <GalleryItem
                image={image}
                showTitle={showTitles}
                onClick={() => handleSelect(index)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Carousel Layout */}
      {layout === 'carousel' && (
        <CarouselGallery
          images={images}
          onSelect={handleSelect}
          showTitles={showTitles}
        />
      )}

      {/* Lightbox */}
      {enableLightbox && selectedIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </div>
  );
}

// ============================================================
// Gallery Item
// ============================================================

interface GalleryItemProps {
  image: GalleryImage;
  showTitle?: boolean;
  onClick: () => void;
}

function GalleryItem({ image, showTitle, onClick }: GalleryItemProps) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative group cursor-pointer overflow-hidden bg-zinc-800"
      onClick={onClick}
    >
      {/* Loading placeholder */}
      {!loaded && !error && (
        <div className="aspect-square flex items-center justify-center bg-zinc-800">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          >
            <ImageIcon className="w-8 h-8 text-zinc-600" />
          </motion.div>
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="aspect-square flex items-center justify-center bg-zinc-800 text-zinc-500">
          <ImageIcon className="w-8 h-8" />
        </div>
      )}

      {/* Image */}
      <Image
        src={image.thumbnail || image.src}
        alt={image.alt}
        fill
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={cn(
          'object-cover transition-transform duration-300 group-hover:scale-110',
          !loaded && 'hidden'
        )}
        unoptimized
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileHover={{ opacity: 1, scale: 1 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Maximize2 className="w-8 h-8 text-white" />
        </motion.div>
      </div>

      {/* Title */}
      {showTitle && image.title && (
        <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-sm text-white truncate">{image.title}</p>
        </div>
      )}
    </motion.div>
  );
}

// ============================================================
// Carousel Gallery
// ============================================================

interface CarouselGalleryProps {
  images: GalleryImage[];
  onSelect: (index: number) => void;
  showTitles?: boolean;
}

function CarouselGallery({ images, onSelect, showTitles }: CarouselGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="relative">
      {/* Main Image */}
      <div
        className="relative aspect-video bg-zinc-900 cursor-pointer"
        onClick={() => onSelect(currentIndex)}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain"
          />
        </AnimatePresence>

        {/* Navigation */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            handlePrevious();
          }}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            handleNext();
          }}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Title overlay */}
        {showTitles && images[currentIndex].title && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
            <p className="text-white font-medium">{images[currentIndex].title}</p>
            {images[currentIndex].description && (
              <p className="text-sm text-zinc-300 mt-1">
                {images[currentIndex].description}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              'flex-shrink-0 w-16 h-16 overflow-hidden transition-all relative',
              index === currentIndex
                ? 'ring-2 ring-blood-500'
                : 'opacity-60 hover:opacity-100'
            )}
          >
            <Image
              src={image.thumbnail || image.src}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================
// Lightbox
// ============================================================

interface LightboxProps {
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function Lightbox({ images, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const currentImage = images[currentIndex];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') {
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
      }
      if (e.key === 'ArrowRight') {
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
      }
    },
    [currentIndex, images.length, onClose, onNavigate]
  );

  // Add keyboard listener
  useState(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.5, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.5, 0.5));
  const handleRotate = () => setRotation((r) => r + 90);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = currentImage.title || 'image';
    link.click();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col"
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="text-white">
          <span className="text-zinc-500">
            {currentIndex + 1} / {images.length}
          </span>
          {currentImage.title && (
            <span className="ml-4">{currentImage.title}</span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomOut}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="Zoom out"
          >
            <ZoomOut className="w-5 h-5" />
          </button>
          <button
            onClick={handleZoomIn}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="Zoom in"
          >
            <ZoomIn className="w-5 h-5" />
          </button>
          <button
            onClick={handleRotate}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="Rotate"
          >
            <RotateCw className="w-5 h-5" />
          </button>
          <button
            onClick={handleDownload}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
            title="Download"
          >
            <Download className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="p-2 text-zinc-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="flex-1 flex items-center justify-center overflow-hidden relative">
        <button
          onClick={() =>
            onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1)
          }
          className="absolute left-4 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>

        <motion.img
          key={currentIndex}
          src={currentImage.src}
          alt={currentImage.alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            transform: `scale(${zoom}) rotate(${rotation}deg)`,
          }}
          className="max-w-full max-h-full object-contain transition-transform duration-200"
        />

        <button
          onClick={() =>
            onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0)
          }
          className="absolute right-4 p-3 bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Description */}
      {currentImage.description && (
        <div className="p-4 text-center text-zinc-400 text-sm">
          {currentImage.description}
        </div>
      )}

      {/* Thumbnails */}
      <div className="flex justify-center gap-2 p-4 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={image.id}
            onClick={() => onNavigate(index)}
            className={cn(
              'flex-shrink-0 w-16 h-12 overflow-hidden transition-all relative',
              index === currentIndex
                ? 'ring-2 ring-blood-500'
                : 'opacity-40 hover:opacity-100'
            )}
          >
            <Image
              src={image.thumbnail || image.src}
              alt={image.alt}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>
    </motion.div>
  );
}

export { ImageGallery, GalleryItem, Lightbox };
