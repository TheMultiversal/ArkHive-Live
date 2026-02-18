/**
 * useResizeObserver Hook
 * Observes element size changes
 */

import { useState, useEffect, useRef, type RefObject } from 'react';

interface Size {
  width: number;
  height: number;
}

interface UseResizeObserverOptions {
  /** Initial size before measurement */
  initialSize?: Size;
  /** Enable/disable observer */
  enabled?: boolean;
}

export function useResizeObserver<T extends HTMLElement = HTMLElement>(
  options: UseResizeObserverOptions = {}
): [RefObject<T | null>, Size] {
  const { initialSize = { width: 0, height: 0 }, enabled = true } = options;
  
  const ref = useRef<T>(null);
  const [size, setSize] = useState<Size>(initialSize);

  useEffect(() => {
    if (!enabled) return;

    const element = ref.current;
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        setSize({ width, height });
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, [enabled]);

  return [ref, size];
}

/**
 * useElementSize - Alias with simpler return
 */
export function useElementSize<T extends HTMLElement = HTMLElement>(): {
  ref: RefObject<T | null>;
  width: number;
  height: number;
} {
  const [ref, { width, height }] = useResizeObserver<T>();
  return { ref, width, height };
}

export default useResizeObserver;
