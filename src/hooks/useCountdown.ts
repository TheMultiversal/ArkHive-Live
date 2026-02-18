/**
 * useCountdown Hook
 * Countdown timer functionality
 */

import { useState, useCallback, useEffect, useRef } from 'react';

interface CountdownOptions {
  /** Interval in ms (default: 1000) */
  interval?: number;
  /** Callback when countdown ends */
  onEnd?: () => void;
  /** Auto start countdown */
  autoStart?: boolean;
}

interface CountdownResult {
  /** Remaining time in ms */
  remaining: number;
  /** Remaining days */
  days: number;
  /** Remaining hours */
  hours: number;
  /** Remaining minutes */
  minutes: number;
  /** Remaining seconds */
  seconds: number;
  /** Whether countdown is running */
  isRunning: boolean;
  /** Whether countdown has ended */
  isEnded: boolean;
  /** Start the countdown */
  start: () => void;
  /** Pause the countdown */
  pause: () => void;
  /** Reset to initial time */
  reset: () => void;
  /** Set new target time */
  setTarget: (ms: number) => void;
}

export function useCountdown(
  /** Target time in ms (or Date) */
  targetMs: number | Date,
  options: CountdownOptions = {}
): CountdownResult {
  const { interval = 1000, onEnd, autoStart = true } = options;

  const getTargetMs = useCallback(
    () => (targetMs instanceof Date ? targetMs.getTime() : targetMs),
    [targetMs]
  );

  const calculateRemaining = useCallback(() => {
    const target = getTargetMs();
    const now = Date.now();
    return Math.max(0, target - now);
  }, [getTargetMs]);

  const [remaining, setRemaining] = useState(calculateRemaining);
  const [isRunning, setIsRunning] = useState(autoStart);
  const [isEnded, setIsEnded] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    if (remaining > 0) {
      setIsRunning(true);
      setIsEnded(false);
    }
  }, [remaining]);

  const pause = useCallback(() => {
    setIsRunning(false);
    clear();
  }, [clear]);

  const reset = useCallback(() => {
    setRemaining(calculateRemaining());
    setIsEnded(false);
    if (autoStart) {
      setIsRunning(true);
    }
  }, [calculateRemaining, autoStart]);

  const setTarget = useCallback((ms: number) => {
    setRemaining(Math.max(0, ms - Date.now()));
    setIsEnded(false);
  }, []);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setRemaining(prev => {
        const next = Math.max(0, prev - interval);
        if (next === 0) {
          setIsRunning(false);
          setIsEnded(true);
          onEnd?.();
        }
        return next;
      });
    }, interval);

    return clear;
  }, [isRunning, interval, onEnd, clear]);

  // Calculate time components
  const seconds = Math.floor((remaining / 1000) % 60);
  const minutes = Math.floor((remaining / 1000 / 60) % 60);
  const hours = Math.floor((remaining / 1000 / 60 / 60) % 24);
  const days = Math.floor(remaining / 1000 / 60 / 60 / 24);

  return {
    remaining,
    days,
    hours,
    minutes,
    seconds,
    isRunning,
    isEnded,
    start,
    pause,
    reset,
    setTarget,
  };
}

/**
 * useTimer - Counts up instead of down
 */
export function useTimer(
  options: Omit<CountdownOptions, 'onEnd'> = {}
): {
  elapsed: number;
  seconds: number;
  minutes: number;
  hours: number;
  isRunning: boolean;
  start: () => void;
  pause: () => void;
  reset: () => void;
} {
  const { interval = 1000, autoStart = false } = options;

  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(autoStart);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const clear = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  const start = useCallback(() => setIsRunning(true), []);
  const pause = useCallback(() => {
    setIsRunning(false);
    clear();
  }, [clear]);
  const reset = useCallback(() => {
    setElapsed(0);
    if (!autoStart) setIsRunning(false);
  }, [autoStart]);

  useEffect(() => {
    if (!isRunning) return;

    intervalRef.current = setInterval(() => {
      setElapsed(prev => prev + interval);
    }, interval);

    return clear;
  }, [isRunning, interval, clear]);

  const seconds = Math.floor((elapsed / 1000) % 60);
  const minutes = Math.floor((elapsed / 1000 / 60) % 60);
  const hours = Math.floor(elapsed / 1000 / 60 / 60);

  return {
    elapsed,
    seconds,
    minutes,
    hours,
    isRunning,
    start,
    pause,
    reset,
  };
}

export default useCountdown;
