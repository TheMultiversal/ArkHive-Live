"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

interface UseKeyboardNavigationProps {
  /** Array of slugs or hrefs to navigate between */
  items: string[];
  /** Current item slug or href */
  currentItem: string;
  /** Base path for navigation (e.g., '/investigations/') */
  basePath?: string;
  /** Enable/disable keyboard navigation */
  enabled?: boolean;
}

/**
 * Hook for j/k keyboard navigation between items
 * Press 'j' to go to next item, 'k' to go to previous item
 * Press 'h' to go back to listing page
 */
export function useKeyboardNavigation({
  items,
  currentItem,
  basePath = "",
  enabled = true,
}: UseKeyboardNavigationProps) {
  const router = useRouter();
  
  const currentIndex = items.indexOf(currentItem);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;
  const previousItem = hasPrevious ? items[currentIndex - 1] : null;
  const nextItem = hasNext ? items[currentIndex + 1] : null;
  
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      // Don't trigger if user is typing in an input
      if (
        event.target instanceof HTMLInputElement ||
        event.target instanceof HTMLTextAreaElement ||
        (event.target as HTMLElement).isContentEditable
      ) {
        return;
      }
      
      // Don't trigger with modifier keys
      if (event.ctrlKey || event.metaKey || event.altKey) {
        return;
      }
      
      switch (event.key.toLowerCase()) {
        case "j":
          // Next item
          if (nextItem) {
            event.preventDefault();
            router.push(`${basePath}${nextItem}`);
          }
          break;
        case "k":
          // Previous item
          if (previousItem) {
            event.preventDefault();
            router.push(`${basePath}${previousItem}`);
          }
          break;
        case "h":
          // Go back to listing (remove last segment from basePath)
          if (basePath) {
            event.preventDefault();
            const listingPath = basePath.replace(/\/$/, "");
            router.push(listingPath);
          }
          break;
      }
    },
    [nextItem, previousItem, basePath, router]
  );
  
  useEffect(() => {
    if (!enabled) return;
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [enabled, handleKeyDown]);
  
  return {
    currentIndex,
    totalItems: items.length,
    hasPrevious,
    hasNext,
    previousItem,
    nextItem,
  };
}

interface KeyboardNavIndicatorProps {
  hasPrevious: boolean;
  hasNext: boolean;
  currentIndex: number;
  totalItems: number;
  className?: string;
}

/**
 * Visual indicator component showing keyboard navigation hints
 */
export function KeyboardNavIndicator({
  hasPrevious,
  hasNext,
  currentIndex,
  totalItems,
  className = "",
}: KeyboardNavIndicatorProps) {
  if (totalItems <= 1) return null;
  
  return (
    <div className={`flex items-center gap-3 text-xs text-zinc-500 ${className}`}>
      <span className="text-zinc-600">
        {currentIndex + 1} of {totalItems}
      </span>
      <div className="flex items-center gap-1.5">
        <kbd
          className={`px-1.5 py-0.5 border text-[10px] font-mono ${
            hasPrevious
              ? "border-zinc-700 text-zinc-400 bg-zinc-900"
              : "border-zinc-800 text-zinc-700 bg-zinc-950"
          }`}
        >
          K
        </kbd>
        <span className="text-zinc-600">prev</span>
        <kbd
          className={`px-1.5 py-0.5 border text-[10px] font-mono ml-1 ${
            hasNext
              ? "border-zinc-700 text-zinc-400 bg-zinc-900"
              : "border-zinc-800 text-zinc-700 bg-zinc-950"
          }`}
        >
          J
        </kbd>
        <span className="text-zinc-600">next</span>
        <kbd className="px-1.5 py-0.5 border border-zinc-700 text-zinc-400 bg-zinc-900 text-[10px] font-mono ml-1">
          H
        </kbd>
        <span className="text-zinc-600">list</span>
      </div>
    </div>
  );
}
