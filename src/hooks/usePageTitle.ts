'use client';

import { useEffect, useCallback } from 'react';

/**
 * Custom hook to dynamically update the document title
 * Automatically restores the original title on unmount
 * 
 * @param title - The title to set (will be suffixed with " | ArkHive")
 * @param restoreOnUnmount - Whether to restore original title when component unmounts (default: true)
 * 
 * @example
 * ```tsx
 * function InvestigationPage({ investigation }) {
 *   usePageTitle(investigation.title);
 *   
 *   return <div>...</div>;
 * }
 * ```
 */
export function usePageTitle(title: string, restoreOnUnmount = true): void {
  useEffect(() => {
    const originalTitle = document.title;
    const suffix = ' | ArkHive';
    
    // Don't add suffix if it's already there
    const newTitle = title.includes('ArkHive') ? title : `${title}${suffix}`;
    document.title = newTitle;

    return () => {
      if (restoreOnUnmount) {
        document.title = originalTitle;
      }
    };
  }, [title, restoreOnUnmount]);
}

/**
 * Hook to create a function that updates the page title
 * Useful when title needs to change based on user actions
 * 
 * @returns Function to update the page title
 * 
 * @example
 * ```tsx
 * function SearchPage() {
 *   const setPageTitle = useSetPageTitle();
 *   
 *   const handleSearch = (query: string) => {
 *     setPageTitle(`Search: ${query}`);
 *   };
 *   
 *   return <input onChange={(e) => handleSearch(e.target.value)} />;
 * }
 * ```
 */
export function useSetPageTitle() {
  const setPageTitle = useCallback((title: string) => {
    const suffix = ' | ArkHive';
    const newTitle = title.includes('ArkHive') ? title : `${title}${suffix}`;
    document.title = newTitle;
  }, []);

  return setPageTitle;
}
