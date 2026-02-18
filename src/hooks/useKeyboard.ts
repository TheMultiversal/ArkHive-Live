/**
 * useKeyboard Hook
 * Handles keyboard event listeners
 */

import { useEffect, useCallback } from 'react';

type KeyHandler = (event: KeyboardEvent) => void;
type KeyFilter = string | string[] | ((event: KeyboardEvent) => boolean);

interface UseKeyboardOptions {
  /** Key or keys to listen for */
  key?: KeyFilter;
  /** Event type to listen for */
  event?: 'keydown' | 'keyup' | 'keypress';
  /** Only trigger when target is document */
  global?: boolean;
  /** Prevent default behavior */
  preventDefault?: boolean;
  /** Stop propagation */
  stopPropagation?: boolean;
  /** Only trigger when no modifier keys are pressed */
  ignoreModifiers?: boolean;
  /** Only trigger when ctrl/cmd is pressed */
  ctrl?: boolean;
  /** Only trigger when shift is pressed */
  shift?: boolean;
  /** Only trigger when alt is pressed */
  alt?: boolean;
  /** Only trigger when meta is pressed */
  meta?: boolean;
  /** Enable/disable the listener */
  enabled?: boolean;
}

export function useKeyboard(
  handler: KeyHandler,
  options: UseKeyboardOptions = {}
): void {
  const {
    key,
    event = 'keydown',
    global = true,
    preventDefault = false,
    stopPropagation = false,
    ignoreModifiers = false,
    ctrl = false,
    shift = false,
    alt = false,
    meta = false,
    enabled = true,
  } = options;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      // Check if enabled
      if (!enabled) return;

      // Check key filter
      if (key) {
        if (typeof key === 'string') {
          if (e.key !== key && e.code !== key) return;
        } else if (Array.isArray(key)) {
          if (!key.includes(e.key) && !key.includes(e.code)) return;
        } else if (typeof key === 'function') {
          if (!key(e)) return;
        }
      }

      // Check modifier requirements
      if (ignoreModifiers) {
        if (e.ctrlKey || e.shiftKey || e.altKey || e.metaKey) return;
      }

      if (ctrl && !e.ctrlKey && !e.metaKey) return;
      if (shift && !e.shiftKey) return;
      if (alt && !e.altKey) return;
      if (meta && !e.metaKey) return;

      // Handle event modifiers
      if (preventDefault) {
        e.preventDefault();
      }
      if (stopPropagation) {
        e.stopPropagation();
      }

      handler(e);
    },
    [handler, key, enabled, ignoreModifiers, ctrl, shift, alt, meta, preventDefault, stopPropagation]
  );

  useEffect(() => {
    if (!enabled) return;

    const target = global ? document : window;
    target.addEventListener(event, handleKey as EventListener);

    return () => {
      target.removeEventListener(event, handleKey as EventListener);
    };
  }, [event, global, handleKey, enabled]);
}

/**
 * useEscape - Shortcut for escape key
 */
export function useEscape(handler: () => void, enabled = true): void {
  useKeyboard(() => handler(), { key: 'Escape', enabled });
}

/**
 * useEnter - Shortcut for enter key
 */
export function useEnter(handler: () => void, enabled = true): void {
  useKeyboard(() => handler(), { key: 'Enter', enabled });
}

/**
 * useHotkey - Combination keyboard shortcut
 */
export function useHotkey(
  combo: string,
  handler: () => void,
  enabled = true
): void {
  const parts = combo.toLowerCase().split('+');
  const key = parts.pop() || '';
  const ctrl = parts.includes('ctrl') || parts.includes('cmd');
  const shift = parts.includes('shift');
  const alt = parts.includes('alt');
  const meta = parts.includes('meta');

  useKeyboard(() => handler(), {
    key,
    ctrl,
    shift,
    alt,
    meta,
    preventDefault: true,
    enabled,
  });
}

export default useKeyboard;
