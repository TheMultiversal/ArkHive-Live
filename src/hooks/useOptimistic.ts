'use client';

import { useState, useCallback, useRef } from 'react';

// ============================================================
// Types
// ============================================================

export interface OptimisticUpdate<T> {
  id: string;
  timestamp: number;
  previousValue: T;
  optimisticValue: T;
  mutation: () => Promise<T>;
  onSuccess?: (result: T) => void;
  onError?: (error: Error) => void;
  rollback?: () => void;
}

export interface UseOptimisticOptions<T> {
  initialValue: T;
  onMutate?: (optimisticValue: T) => void;
  onSuccess?: (result: T) => void;
  onError?: (error: Error, rollback: () => void) => void;
  retryCount?: number;
  retryDelay?: number;
}

export interface UseOptimisticReturn<T> {
  value: T;
  isPending: boolean;
  error: Error | null;
  pendingCount: number;
  mutate: (
    optimisticValue: T,
    mutation: () => Promise<T>,
    options?: {
      onSuccess?: (result: T) => void;
      onError?: (error: Error) => void;
      rollbackOnError?: boolean;
    }
  ) => Promise<T | null>;
  setValue: (value: T) => void;
  rollback: () => void;
  clearError: () => void;
}

// ============================================================
// Hook Implementation
// ============================================================

export function useOptimistic<T>(
  options: UseOptimisticOptions<T>
): UseOptimisticReturn<T> {
  const {
    initialValue,
    onMutate,
    onSuccess,
    onError,
    retryCount = 0,
    retryDelay = 1000,
  } = options;

  const [value, setValue] = useState<T>(initialValue);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [pendingCount, setPendingCount] = useState(0);

  const previousValueRef = useRef<T>(initialValue);
  const pendingUpdatesRef = useRef<Map<string, OptimisticUpdate<T>>>(new Map());

  // Mutate with optimistic update
  const mutate = useCallback(
    async (
      optimisticValue: T,
      mutation: () => Promise<T>,
      mutateOptions?: {
        onSuccess?: (result: T) => void;
        onError?: (error: Error) => void;
        rollbackOnError?: boolean;
      }
    ): Promise<T | null> => {
      const updateId = `update_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      const previousValue = value;

      // Store the update
      pendingUpdatesRef.current.set(updateId, {
        id: updateId,
        timestamp: Date.now(),
        previousValue,
        optimisticValue,
        mutation,
        onSuccess: mutateOptions?.onSuccess,
        onError: mutateOptions?.onError,
      });

      // Apply optimistic update
      previousValueRef.current = previousValue;
      setValue(optimisticValue);
      setIsPending(true);
      setPendingCount((c) => c + 1);
      setError(null);

      onMutate?.(optimisticValue);

      // Retry logic
      let lastError: Error | null = null;
      for (let attempt = 0; attempt <= retryCount; attempt++) {
        try {
          if (attempt > 0) {
            await new Promise((resolve) => setTimeout(resolve, retryDelay * attempt));
          }

          const result = await mutation();

          // Update with actual result
          setValue(result);
          setIsPending(false);
          setPendingCount((c) => Math.max(0, c - 1));
          pendingUpdatesRef.current.delete(updateId);

          // Call success callbacks
          mutateOptions?.onSuccess?.(result);
          onSuccess?.(result);

          return result;
        } catch (err) {
          lastError = err instanceof Error ? err : new Error('Mutation failed');

          // Only rollback on final attempt
          if (attempt === retryCount) {
            const rollbackOnError = mutateOptions?.rollbackOnError ?? true;

            if (rollbackOnError) {
              setValue(previousValue);
            }

            setError(lastError);
            setIsPending(false);
            setPendingCount((c) => Math.max(0, c - 1));
            pendingUpdatesRef.current.delete(updateId);

            // Call error callbacks
            mutateOptions?.onError?.(lastError);
            onError?.(lastError, () => setValue(previousValue));
          }
        }
      }

      return null;
    },
    [value, retryCount, retryDelay, onMutate, onSuccess, onError]
  );

  // Rollback to previous value
  const rollback = useCallback(() => {
    setValue(previousValueRef.current);
    setIsPending(false);
    setPendingCount(0);
    pendingUpdatesRef.current.clear();
  }, []);

  // Clear error
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    value,
    isPending,
    error,
    pendingCount,
    mutate,
    setValue,
    rollback,
    clearError,
  };
}

// ============================================================
// List Optimistic Hook
// ============================================================

export interface UseOptimisticListReturn<T> {
  items: T[];
  isPending: boolean;
  error: Error | null;
  addItem: (item: T, mutation: () => Promise<T>) => Promise<void>;
  updateItem: (
    id: string | number,
    updates: Partial<T>,
    mutation: () => Promise<T>
  ) => Promise<void>;
  removeItem: (
    id: string | number,
    mutation: () => Promise<void>
  ) => Promise<void>;
  setItems: (items: T[]) => void;
}

export function useOptimisticList<T extends { id: string | number }>(
  initialItems: T[]
): UseOptimisticListReturn<T> {
  const [items, setItems] = useState<T[]>(initialItems);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const previousItemsRef = useRef<T[]>(initialItems);

  const addItem = useCallback(async (item: T, mutation: () => Promise<T>) => {
    previousItemsRef.current = items;
    setItems((prev) => [...prev, item]);
    setIsPending(true);
    setError(null);

    try {
      const result = await mutation();
      setItems((prev) =>
        prev.map((i) => (i.id === item.id ? result : i))
      );
    } catch (err) {
      setItems(previousItemsRef.current);
      setError(err instanceof Error ? err : new Error('Failed to add item'));
    } finally {
      setIsPending(false);
    }
  }, [items]);

  const updateItem = useCallback(
    async (
      id: string | number,
      updates: Partial<T>,
      mutation: () => Promise<T>
    ) => {
      previousItemsRef.current = items;
      setItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, ...updates } : item
        )
      );
      setIsPending(true);
      setError(null);

      try {
        const result = await mutation();
        setItems((prev) =>
          prev.map((item) => (item.id === id ? result : item))
        );
      } catch (err) {
        setItems(previousItemsRef.current);
        setError(err instanceof Error ? err : new Error('Failed to update item'));
      } finally {
        setIsPending(false);
      }
    },
    [items]
  );

  const removeItem = useCallback(
    async (id: string | number, mutation: () => Promise<void>) => {
      previousItemsRef.current = items;
      setItems((prev) => prev.filter((item) => item.id !== id));
      setIsPending(true);
      setError(null);

      try {
        await mutation();
      } catch (err) {
        setItems(previousItemsRef.current);
        setError(err instanceof Error ? err : new Error('Failed to remove item'));
      } finally {
        setIsPending(false);
      }
    },
    [items]
  );

  return {
    items,
    isPending,
    error,
    addItem,
    updateItem,
    removeItem,
    setItems,
  };
}

export default useOptimistic;
