import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook to lock body scroll when active
 * Useful for modals, drawers, and overlays
 */
export function useScrollLock(isLocked: boolean = true) {
  const scrollPosition = useRef(0);
  const previousOverflow = useRef('');

  const lock = useCallback(() => {
    // Store current scroll position
    scrollPosition.current = window.scrollY;
    previousOverflow.current = document.body.style.overflow;

    // Lock the body
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition.current}px`;
    document.body.style.width = '100%';
  }, []);

  const unlock = useCallback(() => {
    // Restore styles
    document.body.style.overflow = previousOverflow.current;
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';

    // Restore scroll position
    window.scrollTo(0, scrollPosition.current);
  }, []);

  useEffect(() => {
    if (isLocked) {
      lock();
    } else {
      unlock();
    }

    return () => {
      unlock();
    };
  }, [isLocked, lock, unlock]);

  return { lock, unlock };
}

export default useScrollLock;
