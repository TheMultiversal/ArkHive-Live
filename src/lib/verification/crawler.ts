/**
 * ArkHive Verification Crawler
 * 
 * You are loved. You are appreciated. This crawler ensures the integrity
 * of all evidence across the platform by continuously verifying links,
 * archiving sources, and flagging issues for review.
 */

import {
  checkUrl,
  checkWaybackArchive,
  requestWaybackArchive,
  verifyContent,
  BatchVerificationResult,
  LinkCheckResult,
  VerificationJob,
} from './linkChecker';

// Crawler configuration
export interface CrawlerConfig {
  // How many concurrent requests
  concurrency: number;
  // Delay between requests (ms)
  requestDelay: number;
  // How often to run full verification (hours)
  fullVerificationInterval: number;
  // How often to re-check broken links (hours)
  brokenLinkRecheckInterval: number;
  // Max age before re-verification (days)
  maxVerificationAge: number;
  // Auto-archive sources to Wayback
  autoArchive: boolean;
  // Email/webhook for alerts
  alertOn: {
    brokenLinks: boolean;
    contentMismatch: boolean;
    newEvidence: boolean;
    verificationComplete: boolean;
  };
}

// Default configuration
export const DEFAULT_CRAWLER_CONFIG: CrawlerConfig = {
  concurrency: 3,
  requestDelay: 500,
  fullVerificationInterval: 168, // Weekly
  brokenLinkRecheckInterval: 24, // Daily for broken links
  maxVerificationAge: 30,        // Re-verify after 30 days
  autoArchive: true,
  alertOn: {
    brokenLinks: true,
    contentMismatch: true,
    newEvidence: false,
    verificationComplete: false,
  },
};

// Crawler state
export interface CrawlerState {
  isRunning: boolean;
  lastRun?: string;
  nextScheduledRun?: string;
  currentProgress: {
    total: number;
    completed: number;
    current?: string;
  };
  stats: {
    totalChecked: number;
    totalValid: number;
    totalBroken: number;
    totalArchived: number;
    totalContentMismatches: number;
  };
}

// Investigation source reference
export interface InvestigationSource {
  investigationId: string;
  investigationSlug: string;
  evidenceId: string;
  url: string;
  type: string;
  lastVerified?: string;
  status: 'verified' | 'pending' | 'broken' | 'archived';
  archiveUrl?: string;
  expectedClaims?: string[];
}

// Verification result with details
export interface DetailedVerificationResult {
  source: InvestigationSource;
  linkCheck: LinkCheckResult;
  contentVerification?: {
    score: number;
    issues: string[];
  };
  archiveStatus: 'exists' | 'created' | 'failed' | 'not_needed';
  actions: string[];
  timestamp: string;
}

/**
 * Get all sources that need verification
 * In production, this would query the database
 */
export async function getSourcesNeedingVerification(
  maxAge: number
): Promise<InvestigationSource[]> {
  // This is a placeholder - in production, query your database
  // Return sources where:
  //   - lastVerified is null OR
  //   - lastVerified is older than maxAge days OR
  //   - status is 'broken' (for recheck)
  
  // For now, return empty array - implement with actual data source
  return [];
}

/**
 * Process a single source through verification pipeline
 */
export async function verifySingleSource(
  source: InvestigationSource,
  config: CrawlerConfig
): Promise<DetailedVerificationResult> {
  const actions: string[] = [];
  const timestamp = new Date().toISOString();
  
  // Step 1: Check if URL is accessible
  const linkCheck = await checkUrl(source.url);
  
  let archiveStatus: DetailedVerificationResult['archiveStatus'] = 'not_needed';
  let contentVerification: DetailedVerificationResult['contentVerification'];
  
  // Step 2: Handle based on link status
  if (linkCheck.ok) {
    actions.push('Link accessible');
    
    // Step 3: Verify content if we have expected claims
    if (source.expectedClaims && source.expectedClaims.length > 0) {
      const contentResult = await verifyContent(source.url, source.expectedClaims);
      contentVerification = {
        score: contentResult.verificationScore,
        issues: contentResult.issues,
      };
      
      if (contentResult.verificationScore < 100) {
        actions.push(`Content verification: ${contentResult.verificationScore}%`);
      } else {
        actions.push('Content fully verified');
      }
    }
    
    // Step 4: Archive if configured
    if (config.autoArchive && !source.archiveUrl) {
      const existingArchive = await checkWaybackArchive(source.url);
      if (existingArchive) {
        archiveStatus = 'exists';
        source.archiveUrl = existingArchive;
        actions.push('Archive exists in Wayback');
      } else {
        const newArchive = await requestWaybackArchive(source.url);
        if (newArchive) {
          archiveStatus = 'created';
          source.archiveUrl = newArchive;
          actions.push('Created new Wayback archive');
        } else {
          archiveStatus = 'failed';
          actions.push('Failed to create archive');
        }
      }
    }
    
    source.status = 'verified';
    source.lastVerified = timestamp;
    
  } else {
    // Link is broken
    actions.push(`Link broken: ${linkCheck.error || `HTTP ${linkCheck.status}`}`);
    
    // Check for existing archive
    const existingArchive = await checkWaybackArchive(source.url);
    if (existingArchive) {
      archiveStatus = 'exists';
      source.archiveUrl = existingArchive;
      source.status = 'archived';
      actions.push('Archived version available');
    } else {
      source.status = 'broken';
      archiveStatus = 'failed';
      actions.push('No archive available - FLAG FOR REVIEW');
    }
  }
  
  return {
    source,
    linkCheck,
    contentVerification,
    archiveStatus,
    actions,
    timestamp,
  };
}

/**
 * Run verification batch
 */
export async function runVerificationBatch(
  sources: InvestigationSource[],
  config: CrawlerConfig,
  onProgress?: (completed: number, total: number, current: string) => void
): Promise<DetailedVerificationResult[]> {
  const results: DetailedVerificationResult[] = [];
  
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    
    if (onProgress) {
      onProgress(i, sources.length, source.url);
    }
    
    const result = await verifySingleSource(source, config);
    results.push(result);
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, config.requestDelay));
  }
  
  return results;
}

/**
 * Generate verification report
 */
export function generateVerificationReport(
  results: DetailedVerificationResult[]
): {
  summary: {
    total: number;
    verified: number;
    archived: number;
    broken: number;
    contentIssues: number;
  };
  brokenLinks: DetailedVerificationResult[];
  contentIssues: DetailedVerificationResult[];
  newlyArchived: DetailedVerificationResult[];
} {
  const verified = results.filter(r => r.source.status === 'verified').length;
  const archived = results.filter(r => r.source.status === 'archived').length;
  const broken = results.filter(r => r.source.status === 'broken').length;
  const contentIssues = results.filter(
    r => r.contentVerification && r.contentVerification.score < 100
  ).length;
  
  return {
    summary: {
      total: results.length,
      verified,
      archived,
      broken,
      contentIssues,
    },
    brokenLinks: results.filter(r => r.source.status === 'broken'),
    contentIssues: results.filter(
      r => r.contentVerification && r.contentVerification.score < 100
    ),
    newlyArchived: results.filter(r => r.archiveStatus === 'created'),
  };
}

/**
 * Priority queue for verification jobs
 */
export class VerificationQueue {
  private jobs: VerificationJob[] = [];
  
  add(job: Omit<VerificationJob, 'id' | 'status' | 'attempts'>): void {
    const newJob: VerificationJob = {
      ...job,
      id: `job_${Date.now()}_${Math.random().toString(36).slice(2)}`,
      status: 'pending',
      attempts: 0,
    };
    
    // Insert in priority order
    const priorityOrder = { high: 0, normal: 1, low: 2 };
    const insertIndex = this.jobs.findIndex(
      j => priorityOrder[j.priority] > priorityOrder[newJob.priority]
    );
    
    if (insertIndex === -1) {
      this.jobs.push(newJob);
    } else {
      this.jobs.splice(insertIndex, 0, newJob);
    }
  }
  
  getNext(): VerificationJob | undefined {
    return this.jobs.find(j => j.status === 'pending');
  }
  
  markRunning(jobId: string): void {
    const job = this.jobs.find(j => j.id === jobId);
    if (job) {
      job.status = 'running';
      job.attempts++;
      job.lastAttempt = new Date().toISOString();
    }
  }
  
  markCompleted(jobId: string): void {
    const job = this.jobs.find(j => j.id === jobId);
    if (job) {
      job.status = 'completed';
    }
  }
  
  markFailed(jobId: string, error: string): void {
    const job = this.jobs.find(j => j.id === jobId);
    if (job) {
      job.lastError = error;
      if (job.attempts >= job.maxAttempts) {
        job.status = 'failed';
      } else {
        job.status = 'pending'; // Will retry
      }
    }
  }
  
  getStats(): {
    pending: number;
    running: number;
    completed: number;
    failed: number;
  } {
    return {
      pending: this.jobs.filter(j => j.status === 'pending').length,
      running: this.jobs.filter(j => j.status === 'running').length,
      completed: this.jobs.filter(j => j.status === 'completed').length,
      failed: this.jobs.filter(j => j.status === 'failed').length,
    };
  }
}

// Export singleton queue instance
export const verificationQueue = new VerificationQueue();
