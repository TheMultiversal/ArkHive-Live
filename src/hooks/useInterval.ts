/**
 * useInterval Hook
 * Sets up an interval that is properly cleaned up
 */

import { useEffect, useRef, useCallback } from 'react';

export function useInterval(
  callback: () => void,
  delay: number | null
): void {
  const savedCallback = useRef(callback);

  // Remember the latest callback
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval
  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => {
      savedCallback.current();
    }, delay);

    return () => clearInterval(id);
  }, [delay]);
}

/**
 * useIntervalFn - Returns control functions
 */
export function useIntervalFn(
  callback: () => void,
  delay: number
): {
  start: () => void;
  stop: () => void;
  isActive: boolean;
} {
  const savedCallback = useRef(callback);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isActiveRef = useRef(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      isActiveRef.current = false;
    }
  }, []);

  const start = useCallback(() => {
    stop();
    intervalRef.current = setInterval(() => {
      savedCallback.current();
    }, delay);
    isActiveRef.current = true;
  }, [delay, stop]);

  // Cleanup on unmount
  useEffect(() => {
    return stop;
  }, [stop]);

  return {
    start,
    stop,
    isActive: isActiveRef.current,
  };
}

export default useInterval;
