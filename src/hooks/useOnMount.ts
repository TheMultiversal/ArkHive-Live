/**
 * useOnMount Hook
 * Runs effect only on component mount
 */

import { useEffect, useRef } from 'react';

export function useOnMount(callback: () => void | (() => void)): void {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;
    return callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

/**
 * useOnUnmount - Runs cleanup on unmount only
 */
export function useOnUnmount(callback: () => void): void {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    return () => {
      callbackRef.current();
    };
  }, []);
}

/**
 * useIsFirstRender - Returns true on first render only
 */
export function useIsFirstRender(): boolean {
  const isFirst = useRef(true);

  if (isFirst.current) {
    isFirst.current = false;
    return true;
  }

  return false;
}

/**
 * useIsMounted - Returns whether component is currently mounted
 */
export function useIsMounted(): () => boolean {
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);

  return () => isMounted.current;
}

export default useOnMount;
