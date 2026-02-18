/**
 * useDocumentTitle Hook
 * Updates document title
 */

import { useEffect, useRef } from 'react';

interface UseDocumentTitleOptions {
  /** Restore original title on unmount */
  restoreOnUnmount?: boolean;
}

export function useDocumentTitle(
  title: string,
  options: UseDocumentTitleOptions = {}
): void {
  const { restoreOnUnmount = false } = options;
  const originalTitle = useRef(typeof document !== 'undefined' ? document.title : '');

  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.title = title;
    }
  }, [title]);

  useEffect(() => {
    // Store the original title in a local variable for cleanup
    const savedTitle = originalTitle.current;
    
    return () => {
      if (restoreOnUnmount && typeof document !== 'undefined') {
        document.title = savedTitle;
      }
    };
  }, [restoreOnUnmount]);
}

export default useDocumentTitle;
