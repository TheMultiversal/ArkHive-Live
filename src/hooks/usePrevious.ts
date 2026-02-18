import { useRef, useEffect } from 'react';

/**
 * Hook to track the previous value of a state or prop
 * Useful for comparing current vs previous values
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

export default usePrevious;
