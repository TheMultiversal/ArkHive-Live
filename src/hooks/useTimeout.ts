/**
 * useTimeout Hook
 * Sets up a timeout that is properly cleaned up
 */

import { useEffect, useRef, useCallback, useState } from 'react';

export function useTimeout(
  callback: () => void,
  delay: number | null
): void {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => {
      savedCallback.current();
    }, delay);

    return () => clearTimeout(id);
  }, [delay]);
}

/**
 * useTimeoutFn - Returns control functions
 */
export function useTimeoutFn(
  callback: () => void,
  delay: number
): {
  start: () => void;
  stop: () => void;
  isActive: boolean;
} {
  const savedCallback = useRef(callback);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
      setIsActive(false);
    }
  }, []);

  const start = useCallback(() => {
    stop();
    setIsActive(true);
    timeoutRef.current = setTimeout(() => {
      savedCallback.current();
      setIsActive(false);
    }, delay);
  }, [delay, stop]);

  useEffect(() => {
    return stop;
  }, [stop]);

  return {
    start,
    stop,
    isActive,
  };
}

/**
 * useDelayedValue - Returns value after delay
 */
export function useDelayedValue<T>(value: T, delay: number): T {
  const [delayedValue, setDelayedValue] = useState(value);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDelayedValue(value);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, delay]);

  return delayedValue;
}

export default useTimeout;
