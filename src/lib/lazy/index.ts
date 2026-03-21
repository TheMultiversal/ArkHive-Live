'use client';

/**
 * Lazy Loading System
 * Advanced code splitting and dynamic imports with preloading
 */

import React, { 
  Suspense, 
  lazy, 
  ComponentType, 
  ReactElement, 
  useState, 
  useEffect, 
  useRef,
  createContext,
  useContext,
  useCallback,
} from 'react';

// ============================================================================
// Types
// ============================================================================

export interface LazyComponentOptions {
  fallback?: ReactElement;
  errorFallback?: ReactElement | ((error: Error) => ReactElement);
  preload?: boolean;
  delay?: number; // Minimum loading time to prevent flash
  timeout?: number; // Maximum loading time before error
  retry?: number;
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export interface PreloadOptions {
  priority?: 'high' | 'low';
  when?: 'idle' | 'immediate' | 'visible' | 'hover' | 'focus';
}

export interface LazyModuleState {
  status: 'idle' | 'loading' | 'loaded' | 'error';
  error?: Error;
  loadTime?: number;
}

// ============================================================================
// Default Fallbacks
// ============================================================================

export function DefaultLoadingFallback(): ReactElement {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 border-2 border-zinc-600 border-t-transparent animate-spin" />
        <span className="text-sm text-zinc-500">Loading...</span>
      </div>
    </div>
  );
}

export function SkeletonFallback({ height = 200 }: { height?: number }): ReactElement {
  return (
    <div 
      className="bg-zinc-900 animate-pulse" 
      style={{ height: `${height}px` }}
    />
  );
}

export function DefaultErrorFallback({ error }: { error: Error }): ReactElement {
  return (
    <div className="flex items-center justify-center p-8 bg-zinc-800/20 border border-zinc-800">
      <div className="text-center">
        <p className="text-zinc-400 text-sm">Failed to load component</p>
        <p className="text-xs text-zinc-500 mt-1">{error.message}</p>
      </div>
    </div>
  );
}

// ============================================================================
// Lazy Component Factory
// ============================================================================

const moduleCache = new Map<string, Promise<{ default: ComponentType<unknown> }>>();
const preloadedModules = new Set<string>();

export function createLazyComponent<P extends object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  options: LazyComponentOptions = {}
): ComponentType<P> {
  const {
    fallback = <DefaultLoadingFallback />,
    errorFallback,
    delay = 0,
    timeout = 30000,
    retry = 2,
    onLoad,
    onError,
  } = options;

  // Create lazy component with retry logic
  const LazyComponent = lazy(async () => {
    const startTime = Date.now();
    let lastError: Error | undefined;

    for (let attempt = 0; attempt <= retry; attempt++) {
      try {
        // Race between import and timeout
        const result = await Promise.race([
          importFn(),
          new Promise<never>((_, reject) => 
            setTimeout(() => reject(new Error('Module load timeout')), timeout)
          ),
        ]);

        // Enforce minimum delay to prevent flash
        const elapsed = Date.now() - startTime;
        if (elapsed < delay) {
          await new Promise(resolve => setTimeout(resolve, delay - elapsed));
        }

        onLoad?.();
        return result as { default: ComponentType<P> };
      } catch (error) {
        lastError = error instanceof Error ? error : new Error(String(error));
        
        if (attempt < retry) {
          // Exponential backoff
          await new Promise(resolve => 
            setTimeout(resolve, Math.pow(2, attempt) * 1000)
          );
        }
      }
    }

    onError?.(lastError!);
    throw lastError;
  });

  // Wrapper component with error boundary behavior
  function LazyWrapper(props: P): ReactElement {
    const [error, setError] = useState<Error | null>(null);

    if (error) {
      if (typeof errorFallback === 'function') {
        return errorFallback(error);
      }
      return errorFallback || <DefaultErrorFallback error={error} />;
    }

    return (
      <Suspense fallback={fallback}>
        <ErrorCatcher onError={setError}>
          <LazyComponent {...props} />
        </ErrorCatcher>
      </Suspense>
    );
  }

  return LazyWrapper;
}

// Simple error catcher for lazy components
function ErrorCatcher({ 
  children, 
  onError 
}: { 
  children: React.ReactNode; 
  onError: (error: Error) => void;
}): ReactElement {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <></>;
  }

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

// ============================================================================
// Preloading
// ============================================================================

export function preloadComponent(
  importFn: () => Promise<{ default: ComponentType<unknown> }>,
  options: PreloadOptions = {}
): () => void {
  const { when = 'idle', priority = 'low' } = options;
  const key = importFn.toString();

  if (preloadedModules.has(key)) {
    return () => {};
  }

  const doPreload = () => {
    if (!moduleCache.has(key)) {
      const promise = importFn();
      moduleCache.set(key, promise);
      preloadedModules.add(key);
    }
  };

  switch (when) {
    case 'immediate':
      doPreload();
      break;
    
    case 'idle':
      if ('requestIdleCallback' in window) {
        const handle = requestIdleCallback(doPreload, {
          timeout: priority === 'high' ? 2000 : 5000,
        });
        return () => cancelIdleCallback(handle);
      } else {
        const timeout = setTimeout(doPreload, priority === 'high' ? 100 : 1000);
        return () => clearTimeout(timeout);
      }
    
    default:
      // For 'visible', 'hover', 'focus' - return a no-op
      // These are handled by hooks
      break;
  }

  return () => {};
}

export function preloadComponents(
  imports: Array<() => Promise<{ default: ComponentType<unknown> }>>,
  options: PreloadOptions = {}
): () => void {
  const cleanups = imports.map(fn => preloadComponent(fn, options));
  return () => cleanups.forEach(cleanup => cleanup());
}

// ============================================================================
// React Hooks
// ============================================================================

// Hook: Preload on visibility
export function usePreloadOnVisible(
  importFn: () => Promise<{ default: ComponentType<unknown> }>,
  elementRef: React.RefObject<Element>
): void {
  useEffect(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          preloadComponent(importFn, { when: 'immediate' });
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [importFn, elementRef]);
}

// Hook: Preload on hover
export function usePreloadOnHover(
  importFn: () => Promise<{ default: ComponentType<unknown> }>
): {
  onMouseEnter: () => void;
  onFocus: () => void;
} {
  const preloaded = useRef(false);

  const preload = useCallback(() => {
    if (!preloaded.current) {
      preloaded.current = true;
      preloadComponent(importFn, { when: 'immediate' });
    }
  }, [importFn]);

  return {
    onMouseEnter: preload,
    onFocus: preload,
  };
}

// Hook: Track lazy component state
export function useLazyComponentState(
  importFn: () => Promise<{ default: ComponentType<unknown> }>
): LazyModuleState {
  const [state, setState] = useState<LazyModuleState>({ status: 'idle' });

  useEffect(() => {
    const startTime = Date.now();
    setState({ status: 'loading' });

    importFn()
      .then(() => {
        setState({
          status: 'loaded',
          loadTime: Date.now() - startTime,
        });
      })
      .catch((error) => {
        setState({
          status: 'error',
          error: error instanceof Error ? error : new Error(String(error)),
        });
      });
  }, [importFn]);

  return state;
}

// ============================================================================
// Lazy Image Loading
// ============================================================================

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  placeholder?: string;
  blur?: boolean;
  threshold?: number;
  onLoadComplete?: () => void;
}

export function LazyImage({
  src,
  placeholder,
  blur = true,
  threshold = 0.1,
  onLoadComplete,
  className = '',
  ...props
}: LazyImageProps): ReactElement {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, [threshold]);

  const handleLoad = () => {
    setLoaded(true);
    onLoadComplete?.();
  };

  return (
    <div className="relative overflow-hidden">
      {placeholder && !loaded && (
        <img
          src={placeholder}
          className={`absolute inset-0 w-full h-full object-cover ${blur ? 'blur-lg scale-110' : ''}`}
          alt=""
          aria-hidden="true"
        />
      )}
      <img
        ref={imgRef}
        src={inView ? src : undefined}
        onLoad={handleLoad}
        className={`${className} transition-opacity duration-300 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...props}
      />
    </div>
  );
}

// ============================================================================
// Route-based Lazy Loading
// ============================================================================

type RouteComponent = ComponentType<unknown>;

interface RouteConfig {
  path: string;
  component: () => Promise<{ default: RouteComponent }>;
  preload?: boolean;
  prefetch?: string[]; // Paths to prefetch when this route loads
}

class RoutePreloader {
  private routes: Map<string, RouteConfig> = new Map();
  private preloaded: Set<string> = new Set();

  register(configs: RouteConfig[]): void {
    configs.forEach(config => {
      this.routes.set(config.path, config);
      if (config.preload) {
        this.preload(config.path);
      }
    });
  }

  preload(path: string): void {
    if (this.preloaded.has(path)) return;

    const config = this.routes.get(path);
    if (!config) return;

    this.preloaded.add(path);
    preloadComponent(config.component, { when: 'idle' });
  }

  preloadPrefetch(currentPath: string): void {
    const config = this.routes.get(currentPath);
    if (!config?.prefetch) return;

    config.prefetch.forEach(path => {
      this.preload(path);
    });
  }

  getComponent(path: string): RouteComponent | null {
    const config = this.routes.get(path);
    if (!config) return null;

    return createLazyComponent(config.component);
  }
}

export const routePreloader = new RoutePreloader();

// ============================================================================
// Context for Lazy Loading
// ============================================================================

interface LazyContextValue {
  registerComponent: (key: string, importFn: () => Promise<{ default: ComponentType<unknown> }>) => void;
  preload: (key: string) => void;
  preloadAll: () => void;
  isPreloaded: (key: string) => boolean;
}

const LazyContext = createContext<LazyContextValue>({
  registerComponent: () => {},
  preload: () => {},
  preloadAll: () => {},
  isPreloaded: () => false,
});

export function useLazyContext(): LazyContextValue {
  return useContext(LazyContext);
}

interface LazyProviderProps {
  children: React.ReactNode;
}

export function LazyProvider({ children }: LazyProviderProps): ReactElement {
  const components = useRef<Map<string, () => Promise<{ default: ComponentType<unknown> }>>>(new Map());
  const preloaded = useRef<Set<string>>(new Set());

  const registerComponent = useCallback((
    key: string, 
    importFn: () => Promise<{ default: ComponentType<unknown> }>
  ) => {
    components.current.set(key, importFn);
  }, []);

  const preload = useCallback((key: string) => {
    const importFn = components.current.get(key);
    if (!importFn || preloaded.current.has(key)) return;

    preloaded.current.add(key);
    preloadComponent(importFn, { when: 'immediate' });
  }, []);

  const preloadAll = useCallback(() => {
    components.current.forEach((_, key) => preload(key));
  }, [preload]);

  const isPreloaded = useCallback((key: string) => {
    return preloaded.current.has(key);
  }, []);

  return (
    <LazyContext.Provider value={{ registerComponent, preload, preloadAll, isPreloaded }}>
      {children}
    </LazyContext.Provider>
  );
}

// ============================================================================
// Utility Components
// ============================================================================

interface PreloadLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  importFn: () => Promise<{ default: ComponentType<unknown> }>;
  children: React.ReactNode;
}

export function PreloadLink({ importFn, children, ...props }: PreloadLinkProps): ReactElement {
  const hoverProps = usePreloadOnHover(importFn);

  return (
    <a {...props} {...hoverProps}>
      {children}
    </a>
  );
}

interface LazyBoundaryProps {
  fallback?: ReactElement;
  errorFallback?: ReactElement;
  children: React.ReactNode;
}

export function LazyBoundary({ 
  fallback = <DefaultLoadingFallback />,
  errorFallback,
  children 
}: LazyBoundaryProps): ReactElement {
  const [error, setError] = useState<Error | null>(null);

  if (error) {
    return errorFallback || <DefaultErrorFallback error={error} />;
  }

  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  );
}

// ============================================================================
// Exports
// ============================================================================

export default {
  createLazyComponent,
  preloadComponent,
  preloadComponents,
  LazyImage,
  PreloadLink,
  LazyBoundary,
  LazyProvider,
  routePreloader,
  DefaultLoadingFallback,
  SkeletonFallback,
  DefaultErrorFallback,
};
