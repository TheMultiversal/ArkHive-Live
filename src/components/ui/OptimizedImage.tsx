"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";

/**
 * Optimized Image component wrapper around Next.js Image
 * Features:
 * - Lazy loading by default
 * - Blur placeholder support
 * - Error fallback
 * - ARIA labels
 * - Blood-red error state styling
 */

interface OptimizedImageProps extends Omit<ImageProps, "onError" | "onLoad"> {
  fallbackSrc?: string;
  showLoadingState?: boolean;
}

export default function OptimizedImage({
  src,
  alt,
  fallbackSrc = "/images/placeholder.svg",
  showLoadingState = true,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(src);

  const handleLoad = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Loading skeleton */}
      {showLoadingState && isLoading && (
        <div 
          className="absolute inset-0 bg-zinc-900 animate-pulse"
          aria-hidden="true"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-900 animate-shimmer" />
        </div>
      )}

      {/* Error state */}
      {hasError && currentSrc === fallbackSrc && (
        <div 
          className="absolute inset-0 bg-zinc-950 flex items-center justify-center"
          role="img"
          aria-label={`Image unavailable: ${alt}`}
        >
          <div className="text-center p-4">
            <svg 
              className="w-8 h-8 text-blood-800 mx-auto mb-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={1.5} 
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
            <span className="text-zinc-600 text-xs uppercase tracking-wider">
              Image Unavailable
            </span>
          </div>
        </div>
      )}

      <Image
        src={currentSrc}
        alt={alt}
        onLoad={handleLoad}
        onError={handleError}
        className={`
          transition-opacity duration-300 
          ${isLoading ? "opacity-0" : "opacity-100"}
        `}
        loading="lazy"
        {...props}
      />
    </div>
  );
}

/**
 * Entity avatar image with proper sizing
 */
interface EntityAvatarProps {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const avatarSizes = {
  sm: { width: 32, height: 32, className: "w-8 h-8" },
  md: { width: 48, height: 48, className: "w-12 h-12" },
  lg: { width: 80, height: 80, className: "w-20 h-20" },
};

export function EntityAvatar({ 
  src, 
  alt, 
  size = "md",
  className = "" 
}: EntityAvatarProps) {
  const sizeConfig = avatarSizes[size];

  if (!src) {
    return (
      <div 
        className={`${sizeConfig.className} bg-blood-950 border border-blood-900/50 flex items-center justify-center ${className}`}
        role="img"
        aria-label={alt}
      >
        <span className="text-blood-700 font-black text-lg uppercase">
          {alt.charAt(0)}
        </span>
      </div>
    );
  }

  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={sizeConfig.width}
      height={sizeConfig.height}
      className={`${sizeConfig.className} object-cover ${className}`}
      showLoadingState={false}
    />
  );
}

/**
 * Investigation cover image with aspect ratio
 */
interface CoverImageProps {
  src?: string;
  alt: string;
  aspectRatio?: "video" | "square" | "wide";
  priority?: boolean;
  className?: string;
}

const aspectRatios = {
  video: "aspect-video",
  square: "aspect-square",
  wide: "aspect-[21/9]",
};

export function CoverImage({
  src,
  alt,
  aspectRatio = "video",
  priority = false,
  className = "",
}: CoverImageProps) {
  if (!src) {
    return (
      <div 
        className={`${aspectRatios[aspectRatio]} bg-gradient-to-br from-zinc-950 to-black ${className}`}
        role="img"
        aria-label={alt}
      >
        <div 
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `linear-gradient(rgba(184, 0, 0, 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(184, 0, 0, 0.5) 1px, transparent 1px)`,
            backgroundSize: '16px 16px'
          }}
        />
      </div>
    );
  }

  return (
    <div className={`relative ${aspectRatios[aspectRatio]} ${className}`}>
      <OptimizedImage
        src={src}
        alt={alt}
        fill
        className="object-cover"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
