/**
 * Array Utility Functions
 * Common array manipulation operations
 */

/**
 * Check if array is empty
 */
export function isEmpty<T>(arr: T[] | null | undefined): boolean {
  return !arr || arr.length === 0;
}

/**
 * Get first element of array
 */
export function first<T>(arr: T[]): T | undefined {
  return arr[0];
}

/**
 * Get last element of array
 */
export function last<T>(arr: T[]): T | undefined {
  return arr[arr.length - 1];
}

/**
 * Get random element from array
 */
export function random<T>(arr: T[]): T | undefined {
  if (isEmpty(arr)) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

/**
 * Get multiple random elements from array
 */
export function sample<T>(arr: T[], count: number): T[] {
  if (isEmpty(arr) || count <= 0) return [];
  const shuffled = shuffle([...arr]);
  return shuffled.slice(0, Math.min(count, arr.length));
}

/**
 * Shuffle array (Fisher-Yates algorithm)
 */
export function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Remove duplicates from array
 */
export function unique<T>(arr: T[]): T[] {
  return [...new Set(arr)];
}

/**
 * Remove duplicates by key
 */
export function uniqueBy<T, K>(arr: T[], keyFn: (item: T) => K): T[] {
  const seen = new Set<K>();
  return arr.filter(item => {
    const key = keyFn(item);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

/**
 * Chunk array into smaller arrays
 */
export function chunk<T>(arr: T[], size: number): T[][] {
  if (size <= 0) return [];
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}

/**
 * Flatten nested array by one level
 */
export function flatten<T>(arr: T[][]): T[] {
  return arr.flat();
}

/**
 * Flatten deeply nested array
 */
export function flattenDeep<T>(arr: unknown[]): T[] {
  return arr.flat(Infinity) as T[];
}

/**
 * Group array items by key
 */
export function groupBy<T, K extends string | number | symbol>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  return arr.reduce((groups, item) => {
    const key = keyFn(item);
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {} as Record<K, T[]>);
}

/**
 * Count occurrences of items
 */
export function countBy<T, K extends string | number | symbol>(
  arr: T[],
  keyFn: (item: T) => K
): Record<K, number> {
  return arr.reduce((counts, item) => {
    const key = keyFn(item);
    counts[key] = (counts[key] || 0) + 1;
    return counts;
  }, {} as Record<K, number>);
}

/**
 * Partition array into two based on predicate
 */
export function partition<T>(arr: T[], predicate: (item: T) => boolean): [T[], T[]] {
  const truthy: T[] = [];
  const falsy: T[] = [];
  
  for (const item of arr) {
    if (predicate(item)) {
      truthy.push(item);
    } else {
      falsy.push(item);
    }
  }
  
  return [truthy, falsy];
}

/**
 * Sort array by key (stable sort)
 */
export function sortBy<T>(arr: T[], keyFn: (item: T) => number | string, order: 'asc' | 'desc' = 'asc'): T[] {
  const sorted = [...arr].sort((a, b) => {
    const aKey = keyFn(a);
    const bKey = keyFn(b);
    
    if (aKey < bKey) return -1;
    if (aKey > bKey) return 1;
    return 0;
  });
  
  return order === 'desc' ? sorted.reverse() : sorted;
}

/**
 * Sort array by multiple keys
 */
export function sortByMultiple<T>(
  arr: T[],
  comparators: Array<{
    keyFn: (item: T) => number | string;
    order?: 'asc' | 'desc';
  }>
): T[] {
  return [...arr].sort((a, b) => {
    for (const { keyFn, order = 'asc' } of comparators) {
      const aKey = keyFn(a);
      const bKey = keyFn(b);
      
      let comparison = 0;
      if (aKey < bKey) comparison = -1;
      if (aKey > bKey) comparison = 1;
      
      if (comparison !== 0) {
        return order === 'desc' ? -comparison : comparison;
      }
    }
    return 0;
  });
}

/**
 * Find intersection of arrays
 */
export function intersection<T>(...arrays: T[][]): T[] {
  if (arrays.length === 0) return [];
  if (arrays.length === 1) return [...arrays[0]];
  
  return arrays.reduce((result, arr) => 
    result.filter(item => arr.includes(item))
  );
}

/**
 * Find difference between arrays (items in first but not in second)
 */
export function difference<T>(arr1: T[], arr2: T[]): T[] {
  const set2 = new Set(arr2);
  return arr1.filter(item => !set2.has(item));
}

/**
 * Find symmetric difference (items in either but not both)
 */
export function symmetricDifference<T>(arr1: T[], arr2: T[]): T[] {
  return [
    ...difference(arr1, arr2),
    ...difference(arr2, arr1),
  ];
}

/**
 * Find union of arrays
 */
export function union<T>(...arrays: T[][]): T[] {
  return unique(arrays.flat());
}

/**
 * Find min value in array
 */
export function min<T>(arr: T[], keyFn?: (item: T) => number): T | undefined {
  if (isEmpty(arr)) return undefined;
  
  if (keyFn) {
    return arr.reduce((min, item) => 
      keyFn(item) < keyFn(min) ? item : min
    );
  }
  
  return arr.reduce((min, item) => 
    item < min ? item : min
  );
}

/**
 * Find max value in array
 */
export function max<T>(arr: T[], keyFn?: (item: T) => number): T | undefined {
  if (isEmpty(arr)) return undefined;
  
  if (keyFn) {
    return arr.reduce((max, item) => 
      keyFn(item) > keyFn(max) ? item : max
    );
  }
  
  return arr.reduce((max, item) => 
    item > max ? item : max
  );
}

/**
 * Sum of numbers in array
 */
export function sum(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}

/**
 * Sum by key
 */
export function sumBy<T>(arr: T[], keyFn: (item: T) => number): number {
  return arr.reduce((total, item) => total + keyFn(item), 0);
}

/**
 * Average of numbers in array
 */
export function average(arr: number[]): number {
  if (isEmpty(arr)) return 0;
  return sum(arr) / arr.length;
}

/**
 * Move item in array from one index to another
 */
export function move<T>(arr: T[], fromIndex: number, toIndex: number): T[] {
  const result = [...arr];
  const [item] = result.splice(fromIndex, 1);
  result.splice(toIndex, 0, item);
  return result;
}

/**
 * Insert item at index
 */
export function insert<T>(arr: T[], index: number, item: T): T[] {
  const result = [...arr];
  result.splice(index, 0, item);
  return result;
}

/**
 * Remove item at index
 */
export function removeAt<T>(arr: T[], index: number): T[] {
  return arr.filter((_, i) => i !== index);
}

/**
 * Remove item from array
 */
export function remove<T>(arr: T[], item: T): T[] {
  return arr.filter(i => i !== item);
}

/**
 * Update item at index
 */
export function updateAt<T>(arr: T[], index: number, item: T): T[] {
  return arr.map((current, i) => (i === index ? item : current));
}

/**
 * Create range of numbers
 */
export function range(start: number, end: number, step = 1): number[] {
  const result: number[] = [];
  for (let i = start; step > 0 ? i < end : i > end; i += step) {
    result.push(i);
  }
  return result;
}

/**
 * Zip multiple arrays together
 */
export function zip<T>(...arrays: T[][]): T[][] {
  const maxLength = Math.max(...arrays.map(arr => arr.length));
  return range(0, maxLength).map(i => arrays.map(arr => arr[i]));
}

/**
 * Create object from array of key-value pairs
 */
export function fromPairs<K extends string | number | symbol, V>(pairs: [K, V][]): Record<K, V> {
  return Object.fromEntries(pairs) as Record<K, V>;
}

/**
 * Find index of item matching predicate
 */
export function findIndex<T>(arr: T[], predicate: (item: T, index: number) => boolean): number {
  for (let i = 0; i < arr.length; i++) {
    if (predicate(arr[i], i)) return i;
  }
  return -1;
}

/**
 * Find last index of item matching predicate
 */
export function findLastIndex<T>(arr: T[], predicate: (item: T, index: number) => boolean): number {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (predicate(arr[i], i)) return i;
  }
  return -1;
}
