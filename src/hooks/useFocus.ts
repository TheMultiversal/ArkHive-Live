/**
 * useFocus Hook
 * Manages focus state of an element
 */

import { useRef, useState, useCallback, useEffect, type RefCallback, type RefObject } from 'react';

interface UseFocusReturn<T extends HTMLElement> {
  ref: RefCallback<T>;
  isFocused: boolean;
  focus: () => void;
  blur: () => void;
}

export function useFocus<T extends HTMLElement = HTMLElement>(): UseFocusReturn<T> {
  const elementRef = useRef<T | null>(null);
  const [isFocused, setIsFocused] = useState(false);

  const focus = useCallback(() => {
    elementRef.current?.focus();
  }, []);

  const blur = useCallback(() => {
    elementRef.current?.blur();
  }, []);

  const ref: RefCallback<T> = useCallback((element: T | null) => {
    // Cleanup old element listeners
    if (elementRef.current) {
      elementRef.current.removeEventListener('focus', () => setIsFocused(true));
      elementRef.current.removeEventListener('blur', () => setIsFocused(false));
    }

    elementRef.current = element;

    // Attach listeners to new element
    if (element) {
      element.addEventListener('focus', () => setIsFocused(true));
      element.addEventListener('blur', () => setIsFocused(false));
      // Update state if element is already focused
      setIsFocused(document.activeElement === element);
    }
  }, []);

  return {
    ref,
    isFocused,
    focus,
    blur,
  };
}

/**
 * useFocusTrap - Traps focus within an element
 */
export function useFocusTrap<T extends HTMLElement = HTMLElement>(): RefObject<T | null> {
  const ref = useRef<T>(null);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab' || !ref.current) return;

    const focusableElements = ref.current.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement.focus();
        e.preventDefault();
      }
    }
  }, []);

  // Setup trap when mounted
  const originalActiveElement = useRef<Element | null>(null);

  const setupTrap = useCallback(() => {
    originalActiveElement.current = document.activeElement;
    document.addEventListener('keydown', handleKeyDown);
    
    // Focus first focusable element
    const focusableElements = ref.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    focusableElements?.[0]?.focus();
  }, [handleKeyDown]);

  const cleanupTrap = useCallback(() => {
    document.removeEventListener('keydown', handleKeyDown);
    (originalActiveElement.current as HTMLElement)?.focus?.();
  }, [handleKeyDown]);

  return {
    get current() { return ref.current; },
    set current(el: T | null) {
      if (ref.current && !el) {
        cleanupTrap();
      }
      ref.current = el;
      if (el) {
        setupTrap();
      }
    }
  } as RefObject<T | null>;
}

export default useFocus;
