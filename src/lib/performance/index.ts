'use client';

/**
 * Performance Monitoring System
 * Real-time performance tracking and Web Vitals monitoring
 */

import React, { createContext, useContext, useEffect, useState, useRef, useCallback } from 'react';

// ============================================================================
// Types
// ============================================================================

export type MetricName = 
  | 'FCP' // First Contentful Paint
  | 'LCP' // Largest Contentful Paint
  | 'CLS' // Cumulative Layout Shift
  | 'FID' // First Input Delay
  | 'INP' // Interaction to Next Paint
  | 'TTFB' // Time to First Byte
  | 'TTI' // Time to Interactive
  | 'TBT' // Total Blocking Time
  | 'custom';

export type MetricRating = 'good' | 'needs-improvement' | 'poor';

export interface PerformanceMetric {
  name: MetricName;
  value: number;
  rating: MetricRating;
  timestamp: number;
  context?: Record<string, unknown>;
}

export interface PerformanceEntry {
  id: string;
  type: 'navigation' | 'resource' | 'paint' | 'longtask' | 'layout-shift' | 'first-input' | 'custom';
  name: string;
  startTime: number;
  duration: number;
  metadata?: Record<string, unknown>;
}

export interface PerformanceReport {
  url: string;
  timestamp: number;
  metrics: PerformanceMetric[];
  entries: PerformanceEntry[];
  memory?: MemoryInfo;
  connection?: ConnectionInfo;
  device?: DeviceInfo;
}

export interface MemoryInfo {
  usedJSHeapSize: number;
  totalJSHeapSize: number;
  jsHeapSizeLimit: number;
}

export interface ConnectionInfo {
  effectiveType: string;
  rtt: number;
  downlink: number;
  saveData: boolean;
}

export interface DeviceInfo {
  userAgent: string;
  platform: string;
  hardwareConcurrency: number;
  deviceMemory?: number;
  screenWidth: number;
  screenHeight: number;
  devicePixelRatio: number;
}

// ============================================================================
// Thresholds (Web Vitals)
// ============================================================================

export const METRIC_THRESHOLDS: Record<MetricName, { good: number; poor: number }> = {
  FCP: { good: 1800, poor: 3000 },
  LCP: { good: 2500, poor: 4000 },
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
  TTI: { good: 3800, poor: 7300 },
  TBT: { good: 200, poor: 600 },
  custom: { good: 1000, poor: 3000 },
};

export function getRating(name: MetricName, value: number): MetricRating {
  const threshold = METRIC_THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// ============================================================================
// Performance Observer
// ============================================================================

type MetricCallback = (metric: PerformanceMetric) => void;
type EntryCallback = (entry: PerformanceEntry) => void;

class PerformanceMonitor {
  private observers: PerformanceObserver[] = [];
  private metricCallbacks: Set<MetricCallback> = new Set();
  private entryCallbacks: Set<EntryCallback> = new Set();
  private metrics: Map<MetricName, PerformanceMetric> = new Map();
  private entries: PerformanceEntry[] = [];
  private isInitialized = false;

  init(): void {
    if (this.isInitialized || typeof window === 'undefined') return;
    this.isInitialized = true;

    this.observePaint();
    this.observeLCP();
    this.observeCLS();
    this.observeFID();
    this.observeLongTasks();
    this.observeResources();
    this.measureTTFB();
  }

  private observePaint(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.name === 'first-contentful-paint') {
            this.recordMetric('FCP', entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['paint'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private observeLCP(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        if (lastEntry) {
          this.recordMetric('LCP', lastEntry.startTime);
        }
      });
      observer.observe({ entryTypes: ['largest-contentful-paint'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private observeCLS(): void {
    try {
      let clsValue = 0;
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          // Skip entries without hadRecentInput
          if (!(entry as PerformanceEntry & { hadRecentInput?: boolean }).hadRecentInput) {
            clsValue += (entry as PerformanceEntry & { value?: number }).value ?? 0;
            this.recordMetric('CLS', clsValue);
          }
        }
      });
      observer.observe({ entryTypes: ['layout-shift'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private observeFID(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as PerformanceEntry & { processingStart?: number };
          if (fidEntry.processingStart) {
            this.recordMetric('FID', fidEntry.processingStart - entry.startTime);
          }
        }
      });
      observer.observe({ entryTypes: ['first-input'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private observeLongTasks(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          this.recordEntry({
            id: `longtask-${Date.now()}`,
            type: 'longtask',
            name: 'Long Task',
            startTime: entry.startTime,
            duration: entry.duration,
          });
        }
      });
      observer.observe({ entryTypes: ['longtask'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private observeResources(): void {
    try {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const resourceEntry = entry as PerformanceResourceTiming;
          this.recordEntry({
            id: `resource-${Date.now()}-${Math.random()}`,
            type: 'resource',
            name: resourceEntry.name,
            startTime: resourceEntry.startTime,
            duration: resourceEntry.duration,
            metadata: {
              initiatorType: resourceEntry.initiatorType,
              transferSize: resourceEntry.transferSize,
              encodedBodySize: resourceEntry.encodedBodySize,
              decodedBodySize: resourceEntry.decodedBodySize,
            },
          });
        }
      });
      observer.observe({ entryTypes: ['resource'] });
      this.observers.push(observer);
    } catch {
      // Browser doesn't support this observer
    }
  }

  private measureTTFB(): void {
    try {
      const navEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      if (navEntry) {
        const ttfb = navEntry.responseStart - navEntry.requestStart;
        this.recordMetric('TTFB', ttfb);
      }
    } catch {
      // Navigation timing not available
    }
  }

  recordMetric(name: MetricName, value: number, context?: Record<string, unknown>): void {
    const metric: PerformanceMetric = {
      name,
      value,
      rating: getRating(name, value),
      timestamp: Date.now(),
      context,
    };

    this.metrics.set(name, metric);
    this.metricCallbacks.forEach(cb => cb(metric));
  }

  recordEntry(entry: PerformanceEntry): void {
    this.entries.push(entry);
    this.entryCallbacks.forEach(cb => cb(entry));

    // Keep only last 100 entries
    if (this.entries.length > 100) {
      this.entries = this.entries.slice(-100);
    }
  }

  onMetric(callback: MetricCallback): () => void {
    this.metricCallbacks.add(callback);
    return () => this.metricCallbacks.delete(callback);
  }

  onEntry(callback: EntryCallback): () => void {
    this.entryCallbacks.add(callback);
    return () => this.entryCallbacks.delete(callback);
  }

  getMetrics(): PerformanceMetric[] {
    return Array.from(this.metrics.values());
  }

  getEntries(): PerformanceEntry[] {
    return this.entries;
  }

  getMemoryInfo(): MemoryInfo | undefined {
    const memory = (performance as Performance & { memory?: MemoryInfo }).memory;
    return memory;
  }

  getConnectionInfo(): ConnectionInfo | undefined {
    const nav = navigator as Navigator & { connection?: NetworkInformation };
    const connection = nav.connection;
    if (!connection) return undefined;
    
    return {
      effectiveType: connection.effectiveType || 'unknown',
      rtt: connection.rtt || 0,
      downlink: connection.downlink || 0,
      saveData: connection.saveData || false,
    };
  }

  getDeviceInfo(): DeviceInfo {
    return {
      userAgent: navigator.userAgent,
      platform: navigator.platform,
      hardwareConcurrency: navigator.hardwareConcurrency || 1,
      deviceMemory: (navigator as Navigator & { deviceMemory?: number }).deviceMemory,
      screenWidth: window.screen.width,
      screenHeight: window.screen.height,
      devicePixelRatio: window.devicePixelRatio,
    };
  }

  generateReport(): PerformanceReport {
    return {
      url: window.location.href,
      timestamp: Date.now(),
      metrics: this.getMetrics(),
      entries: this.getEntries(),
      memory: this.getMemoryInfo(),
      connection: this.getConnectionInfo(),
      device: this.getDeviceInfo(),
    };
  }

  destroy(): void {
    this.observers.forEach(o => o.disconnect());
    this.observers = [];
    this.metricCallbacks.clear();
    this.entryCallbacks.clear();
    this.isInitialized = false;
  }
}

// Network Information API type
interface NetworkInformation {
  effectiveType?: string;
  rtt?: number;
  downlink?: number;
  saveData?: boolean;
}

// Singleton instance
let monitorInstance: PerformanceMonitor | null = null;

export function getPerformanceMonitor(): PerformanceMonitor {
  if (!monitorInstance) {
    monitorInstance = new PerformanceMonitor();
  }
  return monitorInstance;
}

// ============================================================================
// Custom Timing
// ============================================================================

const timings = new Map<string, number>();

export function startTiming(name: string): void {
  timings.set(name, performance.now());
}

export function endTiming(name: string, record = true): number {
  const start = timings.get(name);
  if (start === undefined) {
    console.warn(`Timing "${name}" was not started`);
    return 0;
  }

  const duration = performance.now() - start;
  timings.delete(name);

  if (record) {
    getPerformanceMonitor().recordEntry({
      id: `custom-${Date.now()}`,
      type: 'custom',
      name,
      startTime: start,
      duration,
    });
  }

  return duration;
}

export function measureAsync<T>(name: string, fn: () => Promise<T>): Promise<T> {
  startTiming(name);
  return fn().finally(() => endTiming(name));
}

export function measure<T>(name: string, fn: () => T): T {
  startTiming(name);
  try {
    return fn();
  } finally {
    endTiming(name);
  }
}

// ============================================================================
// React Integration
// ============================================================================

interface PerformanceContextValue {
  metrics: PerformanceMetric[];
  entries: PerformanceEntry[];
  report: PerformanceReport | null;
  recordMetric: (name: MetricName, value: number) => void;
  generateReport: () => PerformanceReport;
}

const PerformanceContext = createContext<PerformanceContextValue>({
  metrics: [],
  entries: [],
  report: null,
  recordMetric: () => {},
  generateReport: () => ({
    url: '',
    timestamp: 0,
    metrics: [],
    entries: [],
  }),
});

export function usePerformance(): PerformanceContextValue {
  return useContext(PerformanceContext);
}

interface PerformanceProviderProps {
  children: React.ReactNode;
  onReport?: (report: PerformanceReport) => void;
}

export function PerformanceProvider({ children, onReport }: PerformanceProviderProps): React.ReactElement {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([]);
  const [entries, setEntries] = useState<PerformanceEntry[]>([]);
  const monitorRef = useRef<PerformanceMonitor | null>(null);

  useEffect(() => {
    monitorRef.current = getPerformanceMonitor();
    monitorRef.current.init();

    const unsubMetric = monitorRef.current.onMetric((metric) => {
      setMetrics(prev => {
        const existing = prev.findIndex(m => m.name === metric.name);
        if (existing >= 0) {
          const updated = [...prev];
          updated[existing] = metric;
          return updated;
        }
        return [...prev, metric];
      });
    });

    const unsubEntry = monitorRef.current.onEntry((entry) => {
      setEntries(prev => [...prev.slice(-99), entry]);
    });

    // Send report on page unload
    const handleUnload = () => {
      if (monitorRef.current && onReport) {
        onReport(monitorRef.current.generateReport());
      }
    };

    window.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'hidden') {
        handleUnload();
      }
    });

    return () => {
      unsubMetric();
      unsubEntry();
    };
  }, [onReport]);

  const recordMetric = useCallback((name: MetricName, value: number) => {
    monitorRef.current?.recordMetric(name, value);
  }, []);

  const generateReport = useCallback(() => {
    return monitorRef.current?.generateReport() || {
      url: '',
      timestamp: Date.now(),
      metrics: [],
      entries: [],
    };
  }, []);

  return (
    <PerformanceContext.Provider value={{
      metrics,
      entries,
      report: null,
      recordMetric,
      generateReport,
    }}>
      {children}
    </PerformanceContext.Provider>
  );
}

// Hook: Track component render time
export function useRenderTime(componentName: string): void {
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
    const renderNumber = renderCountRef.current;
    const timingName = `${componentName}-render-${renderNumber}`;
    
    startTiming(timingName);
    
    return () => {
      endTiming(timingName);
    };
  });
}

// ============================================================================
// UI Components
// ============================================================================

import { Activity, Gauge, Clock, Wifi, Smartphone, ChevronDown, ChevronUp } from 'lucide-react';

interface MetricCardProps {
  metric: PerformanceMetric;
}

export function MetricCard({ metric }: MetricCardProps): React.ReactElement {
  const ratingColors = {
    good: 'text-emerald-400 bg-emerald-900/30',
    'needs-improvement': 'text-yellow-400 bg-yellow-900/30',
    poor: 'text-zinc-400 bg-zinc-800/30',
  };

  const formatValue = (name: MetricName, value: number): string => {
    if (name === 'CLS') return value.toFixed(3);
    return `${Math.round(value)}ms`;
  };

  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-zinc-500 uppercase tracking-wider">{metric.name}</span>
        <span className={`px-2 py-0.5 text-xs ${ratingColors[metric.rating]}`}>
          {metric.rating}
        </span>
      </div>
      <p className="text-2xl font-mono text-zinc-200">
        {formatValue(metric.name, metric.value)}
      </p>
    </div>
  );
}

interface PerformanceDashboardProps {
  showDetails?: boolean;
}

export function PerformanceDashboard({ showDetails = false }: PerformanceDashboardProps): React.ReactElement {
  const { metrics, entries, generateReport } = usePerformance();
  const [expanded, setExpanded] = useState(showDetails);
  const [report, setReport] = useState<PerformanceReport | null>(null);

  const handleGenerateReport = () => {
    setReport(generateReport());
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-zinc-400" />
          <h2 className="text-lg font-medium text-zinc-200">Performance</h2>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-zinc-500 hover:text-zinc-400"
        >
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {metrics.map(metric => (
          <MetricCard key={metric.name} metric={metric} />
        ))}
      </div>

      {expanded && (
        <div className="space-y-4 mt-4">
          <div className="bg-zinc-900 border border-zinc-800 p-4">
            <h3 className="text-sm font-medium text-zinc-300 mb-3 flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Recent Entries ({entries.length})
            </h3>
            <div className="max-h-60 overflow-y-auto space-y-2">
              {entries.slice(-10).reverse().map(entry => (
                <div key={entry.id} className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 truncate max-w-[200px]">{entry.name}</span>
                  <span className="text-zinc-500">{entry.duration.toFixed(1)}ms</span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleGenerateReport}
            className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm flex items-center gap-2"
          >
            <Gauge className="w-4 h-4" />
            Generate Report
          </button>

          {report && (
            <div className="bg-zinc-900 border border-zinc-800 p-4">
              <h3 className="text-sm font-medium text-zinc-300 mb-3">Report Summary</h3>
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-zinc-500">URL:</span>
                  <p className="text-zinc-300 truncate">{report.url}</p>
                </div>
                <div>
                  <span className="text-zinc-500">Generated:</span>
                  <p className="text-zinc-300">{new Date(report.timestamp).toLocaleTimeString()}</p>
                </div>
                {report.connection && (
                  <div className="flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-zinc-500" />
                    <span className="text-zinc-300">{report.connection.effectiveType}</span>
                  </div>
                )}
                {report.device && (
                  <div className="flex items-center gap-1">
                    <Smartphone className="w-3 h-3 text-zinc-500" />
                    <span className="text-zinc-300">{report.device.screenWidth}x{report.device.screenHeight}</span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Exports
// ============================================================================

export default {
  getPerformanceMonitor,
  startTiming,
  endTiming,
  measure,
  measureAsync,
  getRating,
  METRIC_THRESHOLDS,
};
