import { useEffect, useRef, useCallback } from 'react';

/**
 * Hook to trap focus within a container element
 * Essential for accessible modals and dialogs
 */
export function useFocusTrap(isActive: boolean = true) {
  const containerRef = useRef<HTMLElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const getFocusableElements = useCallback(() => {
    if (!containerRef.current) return [];
    
    const focusableSelectors = [
      'button:not([disabled])',
      'a[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');

    return Array.from(
      containerRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter((el) => el.offsetParent !== null); // Filter out hidden elements
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    const focusableElements = getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  }, [getFocusableElements]);

  const activate = useCallback(() => {
    // Store current active element
    previousActiveElement.current = document.activeElement as HTMLElement;

    // Focus first focusable element
    setTimeout(() => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    }, 0);

    document.addEventListener('keydown', handleKeyDown);
  }, [getFocusableElements, handleKeyDown]);

  const deactivate = useCallback(() => {
    document.removeEventListener('keydown', handleKeyDown);
    
    // Restore focus to previous element
    if (previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
  }, [handleKeyDown]);

  useEffect(() => {
    if (isActive) {
      activate();
    } else {
      deactivate();
    }

    return () => {
      deactivate();
    };
  }, [isActive, activate, deactivate]);

  const setContainerRef = useCallback((element: HTMLElement | null) => {
    containerRef.current = element;
  }, []);

  return {
    containerRef: setContainerRef,
    activate,
    deactivate,
  };
}

export default useFocusTrap;
