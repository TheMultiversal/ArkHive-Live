'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

// ============================================================
// Types
// ============================================================

export interface UseIdleOptions {
  timeout?: number;
  events?: string[];
  initialState?: boolean;
  onIdle?: () => void;
  onActive?: () => void;
}

export interface UseIdleReturn {
  isIdle: boolean;
  lastActiveTime: Date;
  idleDuration: number;
  reset: () => void;
}

// ============================================================
// Default Events
// ============================================================

const DEFAULT_EVENTS = [
  'mousemove',
  'mousedown',
  'keydown',
  'touchstart',
  'scroll',
  'wheel',
];

// ============================================================
// Hook Implementation
// ============================================================

export function useIdle(options: UseIdleOptions = {}): UseIdleReturn {
  const {
    timeout = 60000, // 1 minute default
    events = DEFAULT_EVENTS,
    initialState = false,
    onIdle,
    onActive,
  } = options;

  const [isIdle, setIsIdle] = useState(initialState);
  const [lastActiveTime, setLastActiveTime] = useState(new Date());
  const [idleDuration, setIdleDuration] = useState(0);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const callbacksRef = useRef({ onIdle, onActive });

  // Update callbacks ref
  useEffect(() => {
    callbacksRef.current = { onIdle, onActive };
  }, [onIdle, onActive]);

  // Handle activity
  const handleActivity = useCallback(() => {
    const wasIdle = isIdle;
    setIsIdle(false);
    setLastActiveTime(new Date());
    setIdleDuration(0);

    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Fire onActive callback
    if (wasIdle && callbacksRef.current.onActive) {
      callbacksRef.current.onActive();
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
      if (callbacksRef.current.onIdle) {
        callbacksRef.current.onIdle();
      }
    }, timeout);
  }, [isIdle, timeout]);

  // Reset idle state
  const reset = useCallback(() => {
    handleActivity();
  }, [handleActivity]);

  // Setup event listeners
  useEffect(() => {
    // Initial timeout
    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
      if (callbacksRef.current.onIdle) {
        callbacksRef.current.onIdle();
      }
    }, timeout);

    // Add event listeners
    events.forEach((event) => {
      window.addEventListener(event, handleActivity, { passive: true });
    });

    // Track idle duration
    intervalRef.current = setInterval(() => {
      if (isIdle) {
        setIdleDuration((prev) => prev + 1000);
      }
    }, 1000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      events.forEach((event) => {
        window.removeEventListener(event, handleActivity);
      });
    };
  }, [events, timeout, handleActivity, isIdle]);

  return {
    isIdle,
    lastActiveTime,
    idleDuration,
    reset,
  };
}

export default useIdle;
