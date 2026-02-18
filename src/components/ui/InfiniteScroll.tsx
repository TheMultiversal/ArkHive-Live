/**
 * InfiniteScroll Component
 * Loads more content when scrolling to the bottom
 */

'use client';

import {
  forwardRef,
  useEffect,
  useRef,
  useCallback,
  type HTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface InfiniteScrollProps extends HTMLAttributes<HTMLDivElement> {
  /** Whether there are more items to load */
  hasMore: boolean;
  /** Whether currently loading */
  isLoading?: boolean;
  /** Callback to load more items */
  loadMore: () => void;
  /** Content to display */
  children: ReactNode;
  /** Loading indicator */
  loader?: ReactNode;
  /** End message when no more items */
  endMessage?: ReactNode;
  /** Threshold in pixels from bottom to trigger load */
  threshold?: number;
  /** Use window scroll instead of container */
  useWindow?: boolean;
  /** Reverse scroll direction (load more at top) */
  inverse?: boolean;
}

export const InfiniteScroll = forwardRef<HTMLDivElement, InfiniteScrollProps>(
  (
    {
      hasMore,
      isLoading = false,
      loadMore,
      children,
      loader,
      endMessage,
      threshold = 100,
      useWindow = false,
      inverse = false,
      className,
      ...props
    },
    ref
  ) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const loadingRef = useRef<HTMLDivElement>(null);

    const handleObserver = useCallback(
      (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      [hasMore, isLoading, loadMore]
    );

    useEffect(() => {
      const options = {
        root: useWindow ? null : containerRef.current,
        rootMargin: `${threshold}px`,
        threshold: 0.1,
      };

      observerRef.current = new IntersectionObserver(handleObserver, options);

      if (loadingRef.current) {
        observerRef.current.observe(loadingRef.current);
      }

      return () => {
        observerRef.current?.disconnect();
      };
    }, [handleObserver, threshold, useWindow]);

    const defaultLoader = (
      <div className="flex items-center justify-center py-4">
        <Loader2 className="w-6 h-6 animate-spin text-blood-500" />
        <span className="ml-2 text-zinc-500">Loading more...</span>
      </div>
    );

    const defaultEndMessage = (
      <div className="text-center py-4 text-zinc-500">
        No more items to load
      </div>
    );

    const content = (
      <>
        {inverse && (
          <div ref={loadingRef}>
            {isLoading && (loader || defaultLoader)}
            {!hasMore && !isLoading && (endMessage ?? defaultEndMessage)}
          </div>
        )}
        
        {children}
        
        {!inverse && (
          <div ref={loadingRef}>
            {isLoading && (loader || defaultLoader)}
            {!hasMore && !isLoading && (endMessage ?? defaultEndMessage)}
          </div>
        )}
      </>
    );

    if (useWindow) {
      return (
        <div ref={ref} className={className} {...props}>
          {content}
        </div>
      );
    }

    return (
      <div
        ref={(node) => {
          containerRef.current = node;
          if (typeof ref === 'function') ref(node);
          else if (ref) ref.current = node;
        }}
        className={cn('overflow-auto', className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);

InfiniteScroll.displayName = 'InfiniteScroll';

export default InfiniteScroll;
