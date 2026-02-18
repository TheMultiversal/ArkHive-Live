/**
 * useHover Hook
 * Tracks hover state of an element
 */

import { useState, useRef, useCallback, type RefObject } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>(): [
  RefObject<T | null>,
  boolean
] {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const handleMouseEnter = useCallback(() => setIsHovered(true), []);
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  // Create a ref callback that attaches listeners
  const setRef = useCallback((node: T | null) => {
    if (ref.current) {
      ref.current.removeEventListener('mouseenter', handleMouseEnter);
      ref.current.removeEventListener('mouseleave', handleMouseLeave);
    }

    ref.current = node;

    if (node) {
      node.addEventListener('mouseenter', handleMouseEnter);
      node.addEventListener('mouseleave', handleMouseLeave);
    }
  }, [handleMouseEnter, handleMouseLeave]);

  // Return a ref-like object with the setter
  const callbackRef = useRef<T | null>(null);
  
  return [
    {
      get current() { return callbackRef.current; },
      set current(node: T | null) {
        setRef(node);
        callbackRef.current = node;
      }
    } as RefObject<T | null>,
    isHovered
  ];
}

/**
 * useHoverState - Returns more detailed hover info
 */
export function useHoverState<T extends HTMLElement = HTMLElement>(): {
  ref: RefObject<T | null>;
  isHovered: boolean;
  bind: {
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  };
} {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<T>(null);

  const bind = {
    onMouseEnter: useCallback(() => setIsHovered(true), []),
    onMouseLeave: useCallback(() => setIsHovered(false), []),
  };

  return { ref, isHovered, bind };
}

export default useHover;
