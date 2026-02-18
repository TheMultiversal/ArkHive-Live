/**
 * useLongPress Hook
 * Detects long press on an element
 */

import { useCallback, useRef, useState } from 'react';

interface UseLongPressOptions {
  /** Threshold in ms to trigger long press */
  threshold?: number;
  /** Callback on long press */
  onLongPress?: (event: React.MouseEvent | React.TouchEvent) => void;
  /** Callback on regular press/click */
  onClick?: (event: React.MouseEvent | React.TouchEvent) => void;
  /** Callback when press starts */
  onStart?: (event: React.MouseEvent | React.TouchEvent) => void;
  /** Callback when press ends */
  onFinish?: (event: React.MouseEvent | React.TouchEvent, isLongPress: boolean) => void;
  /** Callback when press is cancelled (e.g., mouse leaves) */
  onCancel?: (event: React.MouseEvent | React.TouchEvent) => void;
}

interface LongPressResult {
  onMouseDown: (e: React.MouseEvent) => void;
  onMouseUp: (e: React.MouseEvent) => void;
  onMouseLeave: (e: React.MouseEvent) => void;
  onTouchStart: (e: React.TouchEvent) => void;
  onTouchEnd: (e: React.TouchEvent) => void;
}

export function useLongPress(options: UseLongPressOptions = {}): LongPressResult {
  const {
    threshold = 400,
    onLongPress,
    onClick,
    onStart,
    onFinish,
    onCancel,
  } = options;

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const isLongPressRef = useRef(false);
  const startEvent = useRef<React.MouseEvent | React.TouchEvent | null>(null);

  const start = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      startEvent.current = event;
      onStart?.(event);
      
      isLongPressRef.current = false;
      timerRef.current = setTimeout(() => {
        isLongPressRef.current = true;
        onLongPress?.(event);
      }, threshold);
    },
    [onLongPress, onStart, threshold]
  );

  const cancel = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      
      if (startEvent.current && !isLongPressRef.current) {
        onCancel?.(event);
      }
    },
    [onCancel]
  );

  const end = useCallback(
    (event: React.MouseEvent | React.TouchEvent) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      if (!isLongPressRef.current && onClick) {
        onClick(event);
      }

      onFinish?.(event, isLongPressRef.current);
      startEvent.current = null;
    },
    [onClick, onFinish]
  );

  return {
    onMouseDown: start,
    onMouseUp: end,
    onMouseLeave: cancel,
    onTouchStart: start,
    onTouchEnd: end,
  };
}

/**
 * useLongPressState - Returns long press state
 */
export function useLongPressState(threshold = 400): {
  isPressed: boolean;
  isLongPress: boolean;
  bind: LongPressResult;
} {
  const [isPressed, setIsPressed] = useState(false);
  const [isLongPress, setIsLongPress] = useState(false);

  const bind = useLongPress({
    threshold,
    onStart: () => {
      setIsPressed(true);
      setIsLongPress(false);
    },
    onLongPress: () => {
      setIsLongPress(true);
    },
    onFinish: () => {
      setIsPressed(false);
    },
    onCancel: () => {
      setIsPressed(false);
    },
  });

  return { isPressed, isLongPress, bind };
}

export default useLongPress;
