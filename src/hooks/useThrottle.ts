import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook to throttle a value
 * Unlike debounce, throttle ensures the value updates at most once per interval
 */
export function useThrottle<T>(value: T, intervalMs: number = 500): T {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastUpdated = useRef<number>(Date.now());

  useEffect(() => {
    const now = Date.now();
    const timeSinceLastUpdate = now - lastUpdated.current;

    if (timeSinceLastUpdate >= intervalMs) {
      setThrottledValue(value);
      lastUpdated.current = now;
    } else {
      const timeoutId = setTimeout(() => {
        setThrottledValue(value);
        lastUpdated.current = Date.now();
      }, intervalMs - timeSinceLastUpdate);

      return () => clearTimeout(timeoutId);
    }
  }, [value, intervalMs]);

  return throttledValue;
}

/**
 * Hook to throttle a callback function
 * Ensures the callback is called at most once per interval
 */
export function useThrottledCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  intervalMs: number = 500
): T {
  const lastCalled = useRef<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastArgsRef = useRef<Parameters<T> | null>(null);

  const throttledCallback = useCallback((...args: Parameters<T>) => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCalled.current;

    lastArgsRef.current = args;

    if (timeSinceLastCall >= intervalMs) {
      callback(...args);
      lastCalled.current = now;
    } else if (!timeoutRef.current) {
      timeoutRef.current = setTimeout(() => {
        if (lastArgsRef.current) {
          callback(...lastArgsRef.current);
          lastCalled.current = Date.now();
        }
        timeoutRef.current = null;
      }, intervalMs - timeSinceLastCall);
    }
  }, [callback, intervalMs]) as T;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return throttledCallback;
}

export default useThrottle;
