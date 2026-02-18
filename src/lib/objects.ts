/**
 * Object Utility Functions
 * Common object manipulation operations
 */

/**
 * Check if value is a plain object
 */
export function isPlainObject(value: unknown): value is Record<string, unknown> {
  if (typeof value !== 'object' || value === null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === null || proto === Object.prototype;
}

/**
 * Check if object is empty
 */
export function isEmpty(obj: Record<string, unknown> | null | undefined): boolean {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
}

/**
 * Deep clone an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') return obj;
  
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Map) {
    return new Map(Array.from(obj.entries()).map(([k, v]) => [k, deepClone(v)])) as T;
  }
  
  if (obj instanceof Set) {
    return new Set(Array.from(obj).map(item => deepClone(item))) as T;
  }
  
  const cloned = {} as T;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

/**
 * Deep merge objects
 */
export function deepMerge<T extends Record<string, unknown>>(...objects: Partial<T>[]): T {
  const result = {} as Record<string, unknown>;
  
  for (const obj of objects) {
    if (!obj) continue;
    
    for (const key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const resultValue = result[key];
        const objValue = obj[key];
        
        if (isPlainObject(resultValue) && isPlainObject(objValue)) {
          result[key] = deepMerge(resultValue as Record<string, unknown>, objValue as Record<string, unknown>);
        } else {
          result[key] = objValue;
        }
      }
    }
  }
  
  return result as T;
}

/**
 * Pick specific keys from object
 */
export function pick<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> {
  const result = {} as Pick<T, K>;
  for (const key of keys) {
    if (key in obj) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Omit specific keys from object
 */
export function omit<T extends Record<string, unknown>, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> {
  const result = { ...obj } as Omit<T, K>;
  for (const key of keys) {
    delete (result as Record<string, unknown>)[key as string];
  }
  return result;
}

/**
 * Get nested value from object by path
 */
export function get<T = unknown>(
  obj: Record<string, unknown>,
  path: string | string[],
  defaultValue?: T
): T | undefined {
  const keys = typeof path === 'string' ? path.split('.') : path;
  let result: unknown = obj;
  
  for (const key of keys) {
    if (result === null || result === undefined) {
      return defaultValue;
    }
    result = (result as Record<string, unknown>)[key];
  }
  
  return (result === undefined ? defaultValue : result) as T | undefined;
}

/**
 * Set nested value in object by path (immutable)
 */
export function set<T extends Record<string, unknown>>(
  obj: T,
  path: string | string[],
  value: unknown
): T {
  const keys = typeof path === 'string' ? path.split('.') : path;
  const result = deepClone(obj);
  
  let current: Record<string, unknown> = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current) || !isPlainObject(current[key])) {
      current[key] = {};
    }
    current = current[key] as Record<string, unknown>;
  }
  
  current[keys[keys.length - 1]] = value;
  return result;
}

/**
 * Check if object has nested path
 */
export function has(obj: Record<string, unknown>, path: string | string[]): boolean {
  const keys = typeof path === 'string' ? path.split('.') : path;
  let current: unknown = obj;
  
  for (const key of keys) {
    if (current === null || current === undefined) return false;
    if (!Object.prototype.hasOwnProperty.call(current, key)) return false;
    current = (current as Record<string, unknown>)[key];
  }
  
  return true;
}

/**
 * Delete nested value from object by path (immutable)
 */
export function unset<T extends Record<string, unknown>>(obj: T, path: string | string[]): T {
  const keys = typeof path === 'string' ? path.split('.') : path;
  const result = deepClone(obj);
  
  let current: Record<string, unknown> = result;
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    if (!(key in current)) return result;
    current = current[key] as Record<string, unknown>;
  }
  
  delete current[keys[keys.length - 1]];
  return result;
}

/**
 * Map object values
 */
export function mapValues<T, U>(
  obj: Record<string, T>,
  fn: (value: T, key: string) => U
): Record<string, U> {
  const result: Record<string, U> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = fn(obj[key], key);
    }
  }
  return result;
}

/**
 * Map object keys
 */
export function mapKeys<T>(
  obj: Record<string, T>,
  fn: (key: string, value: T) => string
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[fn(key, obj[key])] = obj[key];
    }
  }
  return result;
}

/**
 * Filter object by predicate
 */
export function filterObject<T>(
  obj: Record<string, T>,
  predicate: (value: T, key: string) => boolean
): Record<string, T> {
  const result: Record<string, T> = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key) && predicate(obj[key], key)) {
      result[key] = obj[key];
    }
  }
  return result;
}

/**
 * Invert object keys and values
 */
export function invert<T extends string | number | symbol>(
  obj: Record<string, T>
): Record<T, string> {
  const result = {} as Record<T, string>;
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[obj[key]] = key;
    }
  }
  return result;
}

/**
 * Get object entries as array
 */
export function entries<T>(obj: Record<string, T>): [string, T][] {
  return Object.entries(obj);
}

/**
 * Create object from entries
 */
export function fromEntries<K extends string, V>(entries: [K, V][]): Record<K, V> {
  return Object.fromEntries(entries) as Record<K, V>;
}

/**
 * Get object keys
 */
export function keys<T extends Record<string, unknown>>(obj: T): (keyof T)[] {
  return Object.keys(obj) as (keyof T)[];
}

/**
 * Get object values
 */
export function values<T>(obj: Record<string, T>): T[] {
  return Object.values(obj);
}

/**
 * Deep equality check
 */
export function deepEqual(a: unknown, b: unknown): boolean {
  if (a === b) return true;
  
  if (typeof a !== typeof b) return false;
  
  if (a === null || b === null) return a === b;
  
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    return a.every((item, index) => deepEqual(item, b[index]));
  }
  
  if (typeof a === 'object' && typeof b === 'object') {
    const keysA = Object.keys(a as object);
    const keysB = Object.keys(b as object);
    
    if (keysA.length !== keysB.length) return false;
    
    return keysA.every(key => 
      deepEqual(
        (a as Record<string, unknown>)[key],
        (b as Record<string, unknown>)[key]
      )
    );
  }
  
  return false;
}

/**
 * Flatten nested object to dot-notation keys
 */
export function flatten(
  obj: Record<string, unknown>,
  prefix = '',
  separator = '.'
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const newKey = prefix ? `${prefix}${separator}${key}` : key;
      
      if (isPlainObject(value)) {
        Object.assign(result, flatten(value as Record<string, unknown>, newKey, separator));
      } else {
        result[newKey] = value;
      }
    }
  }
  
  return result;
}

/**
 * Unflatten dot-notation object to nested object
 */
export function unflatten(
  obj: Record<string, unknown>,
  separator = '.'
): Record<string, unknown> {
  const result: Record<string, unknown> = {};
  
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const keys = key.split(separator);
      let current = result;
      
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (!(k in current)) {
          current[k] = {};
        }
        current = current[k] as Record<string, unknown>;
      }
      
      current[keys[keys.length - 1]] = obj[key];
    }
  }
  
  return result;
}

/**
 * Remove null and undefined values from object
 */
export function compact<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return filterObject(obj, value => value !== null && value !== undefined) as Partial<T>;
}

/**
 * Default values for object
 */
export function defaults<T extends Record<string, unknown>>(
  obj: Partial<T>,
  defaultValues: T
): T {
  return { ...defaultValues, ...compact(obj) } as T;
}
