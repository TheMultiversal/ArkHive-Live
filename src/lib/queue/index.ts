'use client';

/**
 * Queue System for Background Processing
 * Handles async tasks like evidence verification, document processing, notifications
 */

// ============================================================================
// Types
// ============================================================================

export type JobStatus = 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled' | 'retrying';

export type JobPriority = 'low' | 'normal' | 'high' | 'critical';

export interface Job<T = unknown, R = unknown> {
  id: string;
  type: string;
  payload: T;
  priority: JobPriority;
  status: JobStatus;
  result?: R;
  error?: string;
  attempts: number;
  maxAttempts: number;
  createdAt: number;
  startedAt?: number;
  completedAt?: number;
  scheduledFor?: number;
  progress?: number;
  metadata?: Record<string, unknown>;
}

export type JobHandler<T = unknown, R = unknown> = (
  job: Job<T, R>,
  context: JobContext
) => Promise<R>;

export interface JobContext {
  updateProgress: (progress: number) => void;
  log: (message: string) => void;
  isCancelled: () => boolean;
}

export interface QueueConfig {
  name: string;
  concurrency?: number;
  defaultPriority?: JobPriority;
  maxAttempts?: number;
  retryDelay?: number;
  processInterval?: number;
  onJobComplete?: (job: Job) => void;
  onJobFailed?: (job: Job, error: Error) => void;
}

export interface QueueStats {
  pending: number;
  processing: number;
  completed: number;
  failed: number;
  total: number;
  avgProcessingTime: number;
  throughput: number;
}

// ============================================================================
// Priority Queue Implementation
// ============================================================================

class PriorityQueue<T> {
  private items: Array<{ item: T; priority: number }> = [];

  enqueue(item: T, priority: number): void {
    const element = { item, priority };
    let added = false;

    for (let i = 0; i < this.items.length; i++) {
      if (priority > this.items[i].priority) {
        this.items.splice(i, 0, element);
        added = true;
        break;
      }
    }

    if (!added) {
      this.items.push(element);
    }
  }

  dequeue(): T | undefined {
    return this.items.shift()?.item;
  }

  peek(): T | undefined {
    return this.items[0]?.item;
  }

  remove(predicate: (item: T) => boolean): T | undefined {
    const index = this.items.findIndex(({ item }) => predicate(item));
    if (index !== -1) {
      return this.items.splice(index, 1)[0].item;
    }
    return undefined;
  }

  get size(): number {
    return this.items.length;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  toArray(): T[] {
    return this.items.map(({ item }) => item);
  }

  clear(): void {
    this.items = [];
  }
}

// ============================================================================
// Job Queue
// ============================================================================

const PRIORITY_VALUES: Record<JobPriority, number> = {
  low: 1,
  normal: 2,
  high: 3,
  critical: 4,
};

export class JobQueue {
  private name: string;
  private handlers: Map<string, JobHandler> = new Map();
  private queue: PriorityQueue<Job> = new PriorityQueue();
  private processing: Map<string, Job> = new Map();
  private completed: Job[] = [];
  private failed: Job[] = [];
  private cancelled: Set<string> = new Set();
  private config: Required<QueueConfig>;
  private isRunning = false;
  private processTimer: NodeJS.Timeout | null = null;
  private processingTimes: number[] = [];
  private listeners: Map<string, Set<(job: Job) => void>> = new Map();

  constructor(config: QueueConfig) {
    this.name = config.name;
    this.config = {
      concurrency: 3,
      defaultPriority: 'normal',
      maxAttempts: 3,
      retryDelay: 1000,
      processInterval: 100,
      onJobComplete: () => {},
      onJobFailed: () => {},
      ...config,
    };
  }

  // Handler Registration
  register<T = unknown, R = unknown>(type: string, handler: JobHandler<T, R>): void {
    this.handlers.set(type, handler as JobHandler);
  }

  unregister(type: string): void {
    this.handlers.delete(type);
  }

  // Job Management
  add<T = unknown>(
    type: string,
    payload: T,
    options?: {
      priority?: JobPriority;
      maxAttempts?: number;
      scheduledFor?: number;
      metadata?: Record<string, unknown>;
    }
  ): Job<T> {
    const job: Job<T> = {
      id: this.generateId(),
      type,
      payload,
      priority: options?.priority ?? this.config.defaultPriority,
      status: 'pending',
      attempts: 0,
      maxAttempts: options?.maxAttempts ?? this.config.maxAttempts,
      createdAt: Date.now(),
      scheduledFor: options?.scheduledFor,
      metadata: options?.metadata,
    };

    this.queue.enqueue(job as Job, PRIORITY_VALUES[job.priority]);
    this.emit('job:added', job as Job);
    
    return job;
  }

  cancel(jobId: string): boolean {
    // Check if in queue
    const removed = this.queue.remove(job => job.id === jobId);
    if (removed) {
      removed.status = 'cancelled';
      this.emit('job:cancelled', removed);
      return true;
    }

    // Check if processing
    if (this.processing.has(jobId)) {
      this.cancelled.add(jobId);
      return true;
    }

    return false;
  }

  retry(jobId: string): boolean {
    const failed = this.failed.find(job => job.id === jobId);
    if (failed) {
      failed.status = 'pending';
      failed.attempts = 0;
      failed.error = undefined;
      this.failed = this.failed.filter(j => j.id !== jobId);
      this.queue.enqueue(failed, PRIORITY_VALUES[failed.priority]);
      return true;
    }
    return false;
  }

  getJob(jobId: string): Job | undefined {
    // Check queue
    const inQueue = this.queue.toArray().find(job => job.id === jobId);
    if (inQueue) return inQueue;

    // Check processing
    if (this.processing.has(jobId)) {
      return this.processing.get(jobId);
    }

    // Check completed
    const completed = this.completed.find(job => job.id === jobId);
    if (completed) return completed;

    // Check failed
    return this.failed.find(job => job.id === jobId);
  }

  // Queue Control
  start(): void {
    if (this.isRunning) return;
    this.isRunning = true;
    this.processLoop();
  }

  stop(): void {
    this.isRunning = false;
    if (this.processTimer) {
      clearTimeout(this.processTimer);
      this.processTimer = null;
    }
  }

  pause(): void {
    this.isRunning = false;
  }

  resume(): void {
    if (!this.isRunning) {
      this.isRunning = true;
      this.processLoop();
    }
  }

  clear(): void {
    this.queue.clear();
    this.processing.clear();
    this.completed = [];
    this.failed = [];
    this.cancelled.clear();
  }

  // Processing
  private async processLoop(): Promise<void> {
    if (!this.isRunning) return;

    await this.processNext();

    this.processTimer = setTimeout(() => {
      this.processLoop();
    }, this.config.processInterval);
  }

  private async processNext(): Promise<void> {
    if (this.processing.size >= this.config.concurrency) return;
    if (this.queue.isEmpty()) return;

    const job = this.queue.dequeue();
    if (!job) return;

    // Check if scheduled for later
    if (job.scheduledFor && job.scheduledFor > Date.now()) {
      this.queue.enqueue(job, PRIORITY_VALUES[job.priority]);
      return;
    }

    await this.processJob(job);
  }

  private async processJob(job: Job): Promise<void> {
    const handler = this.handlers.get(job.type);
    if (!handler) {
      job.status = 'failed';
      job.error = `No handler registered for job type: ${job.type}`;
      this.failed.push(job);
      this.emit('job:failed', job);
      return;
    }

    job.status = 'processing';
    job.startedAt = Date.now();
    job.attempts++;
    this.processing.set(job.id, job);
    this.emit('job:started', job);

    const context: JobContext = {
      updateProgress: (progress: number) => {
        job.progress = Math.max(0, Math.min(100, progress));
        this.emit('job:progress', job);
      },
      log: (message: string) => {
        console.log(`[Job ${job.id}] ${message}`);
      },
      isCancelled: () => this.cancelled.has(job.id),
    };

    try {
      const result = await handler(job, context);
      
      if (this.cancelled.has(job.id)) {
        job.status = 'cancelled';
        this.cancelled.delete(job.id);
        this.emit('job:cancelled', job);
      } else {
        job.status = 'completed';
        job.result = result;
        job.completedAt = Date.now();
        job.progress = 100;
        
        const processingTime = job.completedAt - (job.startedAt || job.createdAt);
        this.processingTimes.push(processingTime);
        if (this.processingTimes.length > 100) {
          this.processingTimes.shift();
        }
        
        this.completed.push(job);
        this.config.onJobComplete?.(job);
        this.emit('job:completed', job);
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      
      if (job.attempts < job.maxAttempts) {
        job.status = 'retrying';
        job.error = errorMessage;
        this.emit('job:retrying', job);
        
        setTimeout(() => {
          job.status = 'pending';
          this.queue.enqueue(job, PRIORITY_VALUES[job.priority]);
        }, this.config.retryDelay * Math.pow(2, job.attempts - 1));
      } else {
        job.status = 'failed';
        job.error = errorMessage;
        job.completedAt = Date.now();
        this.failed.push(job);
        this.config.onJobFailed?.(job, error instanceof Error ? error : new Error(errorMessage));
        this.emit('job:failed', job);
      }
    } finally {
      this.processing.delete(job.id);
    }
  }

  // Statistics
  getStats(): QueueStats {
    const completedCount = this.completed.length;
    const avgProcessingTime = this.processingTimes.length > 0
      ? this.processingTimes.reduce((a, b) => a + b, 0) / this.processingTimes.length
      : 0;
    
    // Calculate throughput (jobs per minute)
    const recentCompleted = this.completed.filter(
      job => job.completedAt && Date.now() - job.completedAt < 60000
    );
    const throughput = recentCompleted.length;

    return {
      pending: this.queue.size,
      processing: this.processing.size,
      completed: completedCount,
      failed: this.failed.length,
      total: this.queue.size + this.processing.size + completedCount + this.failed.length,
      avgProcessingTime,
      throughput,
    };
  }

  getJobs(status?: JobStatus): Job[] {
    if (!status) {
      return [
        ...this.queue.toArray(),
        ...Array.from(this.processing.values()),
        ...this.completed,
        ...this.failed,
      ];
    }

    switch (status) {
      case 'pending':
        return this.queue.toArray().filter(j => j.status === 'pending');
      case 'processing':
        return Array.from(this.processing.values());
      case 'completed':
        return this.completed;
      case 'failed':
        return this.failed;
      default:
        return [];
    }
  }

  // Events
  on(event: string, callback: (job: Job) => void): () => void {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, new Set());
    }
    this.listeners.get(event)!.add(callback);
    
    return () => {
      this.listeners.get(event)?.delete(callback);
    };
  }

  private emit(event: string, job: Job): void {
    this.listeners.get(event)?.forEach(callback => {
      try {
        callback(job);
      } catch (error) {
        console.error(`Error in queue event listener:`, error);
      }
    });
  }

  private generateId(): string {
    return `${this.name}-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
  }
}

// ============================================================================
// Pre-defined Job Types
// ============================================================================

export const JOB_TYPES = {
  VERIFY_EVIDENCE: 'verify_evidence',
  PROCESS_DOCUMENT: 'process_document',
  EXTRACT_ENTITIES: 'extract_entities',
  ARCHIVE_URL: 'archive_url',
  GENERATE_HASH: 'generate_hash',
  SEND_NOTIFICATION: 'send_notification',
  SYNC_DATA: 'sync_data',
  EXPORT_REPORT: 'export_report',
  ANALYZE_CONNECTIONS: 'analyze_connections',
  CHECK_TAMPERING: 'check_tampering',
} as const;

export type JobType = typeof JOB_TYPES[keyof typeof JOB_TYPES];

// Job payload types
export interface VerifyEvidencePayload {
  evidenceId: string;
  documentUrl: string;
  verificationType: 'hash' | 'archive' | 'source';
}

export interface ProcessDocumentPayload {
  documentId: string;
  fileUrl: string;
  extractText: boolean;
  extractMetadata: boolean;
}

export interface ExtractEntitiesPayload {
  documentId: string;
  text: string;
  entityTypes: ('person' | 'organization' | 'location' | 'date')[];
}

export interface ArchiveUrlPayload {
  url: string;
  evidenceId: string;
  saveScreenshot: boolean;
}

export interface GenerateHashPayload {
  content: string;
  algorithm: 'sha256' | 'sha512' | 'md5';
}

export interface SendNotificationPayload {
  userId: string;
  type: 'email' | 'push' | 'in-app';
  title: string;
  message: string;
  data?: Record<string, unknown>;
}

// ============================================================================
// React Integration
// ============================================================================

import { useState, useEffect, useCallback, useMemo, createContext, useContext } from 'react';
import React from 'react';

// Queue Context
interface QueueContextValue {
  queue: JobQueue | null;
  stats: QueueStats;
  addJob: <T>(type: string, payload: T, options?: { priority?: JobPriority }) => Job<T> | undefined;
}

export const QueueContext = createContext<QueueContextValue>({
  queue: null,
  stats: { pending: 0, processing: 0, completed: 0, failed: 0, total: 0, avgProcessingTime: 0, throughput: 0 },
  addJob: () => undefined,
});

// Hook: Use queue
export function useQueue(): QueueContextValue {
  return useContext(QueueContext);
}

// Hook: Job tracking
export function useJob(jobId: string | undefined): {
  job: Job | undefined;
  isLoading: boolean;
  progress: number;
} {
  const { queue } = useQueue();
  const [job, setJob] = useState<Job | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!queue || !jobId) {
      setIsLoading(false);
      return;
    }

    // Initial fetch
    setJob(queue.getJob(jobId));
    setIsLoading(false);

    // Listen for updates
    const events = ['job:progress', 'job:completed', 'job:failed', 'job:cancelled'];
    const cleanups = events.map(event =>
      queue.on(event, (updatedJob) => {
        if (updatedJob.id === jobId) {
          setJob({ ...updatedJob });
        }
      })
    );

    return () => cleanups.forEach(cleanup => cleanup());
  }, [queue, jobId]);

  return {
    job,
    isLoading,
    progress: job?.progress ?? 0,
  };
}

// Hook: Queue stats
export function useQueueStats(): QueueStats {
  const { queue } = useQueue();
  const [stats, setStats] = useState<QueueStats>({
    pending: 0,
    processing: 0,
    completed: 0,
    failed: 0,
    total: 0,
    avgProcessingTime: 0,
    throughput: 0,
  });

  useEffect(() => {
    if (!queue) return;

    const updateStats = () => {
      setStats(queue.getStats());
    };

    updateStats();
    const interval = setInterval(updateStats, 1000);

    return () => clearInterval(interval);
  }, [queue]);

  return stats;
}

// ============================================================================
// UI Components
// ============================================================================

import { Clock, CheckCircle, XCircle, Loader2, AlertTriangle, PauseCircle } from 'lucide-react';

interface JobStatusBadgeProps {
  status: JobStatus;
}

export function JobStatusBadge({ status }: JobStatusBadgeProps): React.ReactElement {
  const config: Record<JobStatus, { icon: React.ReactNode; color: string; label: string }> = {
    pending: {
      icon: <Clock className="w-3 h-3" />,
      color: 'bg-zinc-700 text-zinc-300',
      label: 'Pending',
    },
    processing: {
      icon: <Loader2 className="w-3 h-3 animate-spin" />,
      color: 'bg-blue-900/50 text-blue-400',
      label: 'Processing',
    },
    completed: {
      icon: <CheckCircle className="w-3 h-3" />,
      color: 'bg-emerald-900/50 text-emerald-400',
      label: 'Completed',
    },
    failed: {
      icon: <XCircle className="w-3 h-3" />,
      color: 'bg-zinc-800/50 text-zinc-400',
      label: 'Failed',
    },
    cancelled: {
      icon: <PauseCircle className="w-3 h-3" />,
      color: 'bg-zinc-700 text-zinc-400',
      label: 'Cancelled',
    },
    retrying: {
      icon: <AlertTriangle className="w-3 h-3" />,
      color: 'bg-yellow-900/50 text-yellow-400',
      label: 'Retrying',
    },
  };

  const { icon, color, label } = config[status];

  return (
    <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs ${color}`}>
      {icon}
      {label}
    </span>
  );
}

interface JobProgressBarProps {
  progress: number;
  status: JobStatus;
}

export function JobProgressBar({ progress, status }: JobProgressBarProps): React.ReactElement {
  const colorClasses: Record<JobStatus, string> = {
    pending: 'bg-zinc-600',
    processing: 'bg-blue-500',
    completed: 'bg-emerald-500',
    failed: 'bg-zinc-600',
    cancelled: 'bg-zinc-500',
    retrying: 'bg-yellow-500',
  };

  return (
    <div className="w-full h-2 bg-zinc-800">
      <div
        className={`h-full transition-all duration-300 ${colorClasses[status]}`}
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

interface JobCardProps {
  job: Job;
  onCancel?: () => void;
  onRetry?: () => void;
}

export function JobCard({ job, onCancel, onRetry }: JobCardProps): React.ReactElement {
  return (
    <div className="bg-zinc-900 border border-zinc-800 p-4">
      <div className="flex items-start justify-between mb-3">
        <div>
          <span className="text-sm font-mono text-zinc-400">{job.type}</span>
          <p className="text-xs text-zinc-600 mt-0.5">
            ID: {job.id.slice(0, 12)}...
          </p>
        </div>
        <JobStatusBadge status={job.status} />
      </div>

      {(job.status === 'processing' || job.status === 'retrying') && (
        <div className="mb-3">
          <div className="flex justify-between text-xs text-zinc-500 mb-1">
            <span>Progress</span>
            <span>{job.progress ?? 0}%</span>
          </div>
          <JobProgressBar progress={job.progress ?? 0} status={job.status} />
        </div>
      )}

      {job.error && (
        <p className="text-xs text-zinc-400 mb-3 font-mono">
          Error: {job.error}
        </p>
      )}

      <div className="flex items-center justify-between text-xs text-zinc-600">
        <span>
          Attempt {job.attempts}/{job.maxAttempts}
        </span>
        <div className="flex gap-2">
          {job.status === 'processing' && onCancel && (
            <button
              onClick={onCancel}
              className="text-zinc-400 hover:text-white"
            >
              Cancel
            </button>
          )}
          {job.status === 'failed' && onRetry && (
            <button
              onClick={onRetry}
              className="text-zinc-400 hover:text-emerald-400"
            >
              Retry
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

interface QueueStatsDisplayProps {
  stats: QueueStats;
}

export function QueueStatsDisplay({ stats }: QueueStatsDisplayProps): React.ReactElement {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <p className="text-xs text-zinc-500 uppercase tracking-wider">Pending</p>
        <p className="text-2xl font-mono text-zinc-300 mt-1">{stats.pending}</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <p className="text-xs text-zinc-500 uppercase tracking-wider">Processing</p>
        <p className="text-2xl font-mono text-blue-400 mt-1">{stats.processing}</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <p className="text-xs text-zinc-500 uppercase tracking-wider">Completed</p>
        <p className="text-2xl font-mono text-emerald-400 mt-1">{stats.completed}</p>
      </div>
      <div className="bg-zinc-900 border border-zinc-800 p-4">
        <p className="text-xs text-zinc-500 uppercase tracking-wider">Failed</p>
        <p className="text-2xl font-mono text-zinc-400 mt-1">{stats.failed}</p>
      </div>
    </div>
  );
}

interface JobListProps {
  jobs: Job[];
  onCancel?: (jobId: string) => void;
  onRetry?: (jobId: string) => void;
}

export function JobList({ jobs, onCancel, onRetry }: JobListProps): React.ReactElement {
  if (jobs.length === 0) {
    return (
      <div className="text-center py-8 text-zinc-500">
        No jobs in queue
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {jobs.map(job => (
        <JobCard
          key={job.id}
          job={job}
          onCancel={onCancel ? () => onCancel(job.id) : undefined}
          onRetry={onRetry ? () => onRetry(job.id) : undefined}
        />
      ))}
    </div>
  );
}

// ============================================================================
// Factory
// ============================================================================

export function createQueue(name: string, options?: Partial<QueueConfig>): JobQueue {
  return new JobQueue({ name, ...options });
}

// Default export
export default JobQueue;
