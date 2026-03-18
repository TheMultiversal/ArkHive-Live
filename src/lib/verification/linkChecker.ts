/**
 * ArkHive Automated Link Checker & Content Verifier
 * 
 * You are loved. You are appreciated. This system ensures all evidence links
 * remain accessible and content is archived for permanent accountability.
 */

import { EvidenceItem, SourceStatus } from './scoring';

// Link check result
export interface LinkCheckResult {
  url: string;
  status: number;
  ok: boolean;
  redirected: boolean;
  finalUrl?: string;
  contentType?: string;
  contentLength?: number;
  lastModified?: string;
  etag?: string;
  archiveUrl?: string;
  checkedAt: string;
  error?: string;
}

// Content verification result
export interface ContentVerificationResult {
  evidenceId: string;
  url: string;
  expectedContent: string[];       // Key phrases/claims that should be present
  foundContent: boolean[];         // Which expected items were found
  verificationScore: number;       // 0-100
  archiveUrl?: string;
  checkedAt: string;
  issues: string[];
}

// Batch verification result
export interface BatchVerificationResult {
  investigationId: string;
  totalLinks: number;
  checkedLinks: number;
  validLinks: number;
  brokenLinks: number;
  archivedLinks: number;
  results: LinkCheckResult[];
  startedAt: string;
  completedAt: string;
}

/**
 * Check if a single URL is accessible
 */
export async function checkUrl(url: string): Promise<LinkCheckResult> {
  const checkedAt = new Date().toISOString();
  
  try {
    // Use HEAD request first to avoid downloading large files
    const response = await fetch(url, { 
      method: 'HEAD',
      redirect: 'follow',
      headers: {
        'User-Agent': 'ArkHive-LinkChecker/1.0 (accountability verification)',
      },
    });
    
    return {
      url,
      status: response.status,
      ok: response.ok,
      redirected: response.redirected,
      finalUrl: response.url !== url ? response.url : undefined,
      contentType: response.headers.get('Content-Type') || undefined,
      contentLength: parseInt(response.headers.get('Content-Length') || '0') || undefined,
      lastModified: response.headers.get('Last-Modified') || undefined,
      etag: response.headers.get('ETag') || undefined,
      checkedAt,
    };
  } catch (error) {
    return {
      url,
      status: 0,
      ok: false,
      redirected: false,
      checkedAt,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Check multiple URLs in parallel with rate limiting
 */
export async function checkUrlBatch(
  urls: string[], 
  concurrency: number = 5,
  delayMs: number = 200
): Promise<LinkCheckResult[]> {
  const results: LinkCheckResult[] = [];
  const queue = [...urls];
  
  const worker = async () => {
    while (queue.length > 0) {
      const url = queue.shift();
      if (!url) break;
      
      const result = await checkUrl(url);
      results.push(result);
      
      // Rate limiting
      await new Promise(resolve => setTimeout(resolve, delayMs));
    }
  };
  
  // Run workers in parallel
  const workers = Array(Math.min(concurrency, urls.length))
    .fill(null)
    .map(() => worker());
  
  await Promise.all(workers);
  
  return results;
}

/**
 * Check if URL exists in Wayback Machine
 */
export async function checkWaybackArchive(url: string): Promise<string | null> {
  try {
    const apiUrl = `https://archive.org/wayback/available?url=${encodeURIComponent(url)}`;
    const response = await fetch(apiUrl);
    const data = await response.json();
    
    if (data.archived_snapshots?.closest?.available) {
      return data.archived_snapshots.closest.url;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Request Wayback Machine to archive a URL
 */
export async function requestWaybackArchive(url: string): Promise<string | null> {
  try {
    // Submit save request
    const saveUrl = `https://web.archive.org/save/${url}`;
    const response = await fetch(saveUrl, { 
      method: 'GET',
      redirect: 'follow',
    });
    
    if (response.ok) {
      // The archived URL is typically in the Content-Location header or can be constructed
      const timestamp = new Date().toISOString().replace(/[-:T]/g, '').slice(0, 14);
      return `https://web.archive.org/web/${timestamp}/${url}`;
    }
    return null;
  } catch {
    return null;
  }
}

/**
 * Ensure URL is archived (check existing or create new)
 */
export async function ensureArchived(url: string): Promise<string | null> {
  // First check if already archived
  let archiveUrl = await checkWaybackArchive(url);
  
  if (!archiveUrl) {
    // Request new archive
    archiveUrl = await requestWaybackArchive(url);
  }
  
  return archiveUrl;
}

/**
 * Update evidence item status based on link check
 */
export function updateEvidenceStatus(
  evidence: EvidenceItem, 
  result: LinkCheckResult
): EvidenceItem {
  const updated = { ...evidence };
  
  if (result.ok) {
    updated.status = SourceStatus.VERIFIED;
    updated.dateVerified = result.checkedAt;
  } else if (result.archiveUrl) {
    updated.status = SourceStatus.ARCHIVED;
    updated.archiveUrl = result.archiveUrl;
    updated.dateVerified = result.checkedAt;
  } else {
    updated.status = SourceStatus.BROKEN;
  }
  
  return updated;
}

/**
 * Verify that content at URL contains expected claims/phrases
 */
export async function verifyContent(
  url: string,
  expectedClaims: string[]
): Promise<ContentVerificationResult> {
  const checkedAt = new Date().toISOString();
  const issues: string[] = [];
  
  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'ArkHive-ContentVerifier/1.0 (accountability verification)',
      },
    });
    
    if (!response.ok) {
      return {
        evidenceId: '',
        url,
        expectedContent: expectedClaims,
        foundContent: expectedClaims.map(() => false),
        verificationScore: 0,
        checkedAt,
        issues: [`Failed to fetch content: HTTP ${response.status}`],
      };
    }
    
    const contentType = response.headers.get('Content-Type') || '';
    
    // Only verify text-based content
    if (!contentType.includes('text/html') && !contentType.includes('text/plain') && !contentType.includes('application/pdf')) {
      return {
        evidenceId: '',
        url,
        expectedContent: expectedClaims,
        foundContent: expectedClaims.map(() => false),
        verificationScore: 0,
        checkedAt,
        issues: [`Cannot verify content type: ${contentType}`],
      };
    }
    
    const content = await response.text();
    const normalizedContent = content.toLowerCase();
    
    // Check for each expected claim
    const foundContent = expectedClaims.map(claim => {
      const normalizedClaim = claim.toLowerCase();
      const found = normalizedContent.includes(normalizedClaim);
      if (!found) {
        issues.push(`Expected content not found: "${claim}"`);
      }
      return found;
    });
    
    const foundCount = foundContent.filter(Boolean).length;
    const verificationScore = Math.round((foundCount / expectedClaims.length) * 100);
    
    // Try to archive
    const archiveUrl = await checkWaybackArchive(url);
    
    return {
      evidenceId: '',
      url,
      expectedContent: expectedClaims,
      foundContent,
      verificationScore,
      archiveUrl: archiveUrl || undefined,
      checkedAt,
      issues,
    };
  } catch (error) {
    return {
      evidenceId: '',
      url,
      expectedContent: expectedClaims,
      foundContent: expectedClaims.map(() => false),
      verificationScore: 0,
      checkedAt,
      issues: [`Error fetching content: ${error instanceof Error ? error.message : 'Unknown error'}`],
    };
  }
}

/**
 * Validate court case citation format (PACER-style)
 */
export function validateCaseNumber(caseNumber: string): boolean {
  // Federal case number format: [court]-[year]-cv|cr-[number]
  // e.g., 1:23-cv-12345, 23-cr-1234
  const federalPattern = /^(\d{1,2}:)?\d{2}-(cv|cr|mc|mj|po)-\d{1,6}(-[A-Z]+)?$/i;
  
  // State case number formats vary widely
  // New York: Indictment No. 71543-23
  const nyStatePattern = /^(Indictment|Docket)\s*No\.?\s*\d+-\d+$/i;
  
  // General number pattern
  const generalPattern = /^\d{2,4}-\d{2,6}$/;
  
  return federalPattern.test(caseNumber) || 
         nyStatePattern.test(caseNumber) || 
         generalPattern.test(caseNumber);
}

/**
 * Validate PubMed ID
 */
export function validatePubMedId(pmid: string): boolean {
  // PMID is a numeric identifier
  return /^PMID:\s*\d{1,10}$/i.test(pmid) || /^\d{1,10}$/.test(pmid);
}

/**
 * Validate DOI
 */
export function validateDoi(doi: string): boolean {
  // DOI format: 10.xxxx/xxxxx
  return /^(DOI:\s*)?10\.\d{4,}\/\S+$/i.test(doi);
}

/**
 * Validate patent number
 */
export function validatePatentNumber(patent: string): boolean {
  // US patent: US1234567, US 1,234,567, etc.
  return /^US\s*\d{1,3},?\d{3},?\d{3}[A-Z]?\d?$/i.test(patent) ||
         /^US\d{7,11}$/i.test(patent);
}

/**
 * Generate link health report for an investigation
 */
export async function generateLinkHealthReport(
  investigationId: string,
  evidenceItems: EvidenceItem[]
): Promise<BatchVerificationResult> {
  const startedAt = new Date().toISOString();
  const urls = evidenceItems.map(e => e.sourceUrl);
  
  const results = await checkUrlBatch(urls, 3, 500);
  
  // Check for archives of broken links
  for (const result of results) {
    if (!result.ok && !result.archiveUrl) {
      result.archiveUrl = await checkWaybackArchive(result.url) || undefined;
    }
  }
  
  const validLinks = results.filter(r => r.ok).length;
  const brokenLinks = results.filter(r => !r.ok && !r.archiveUrl).length;
  const archivedLinks = results.filter(r => !r.ok && r.archiveUrl).length;
  
  return {
    investigationId,
    totalLinks: urls.length,
    checkedLinks: results.length,
    validLinks,
    brokenLinks,
    archivedLinks,
    results,
    startedAt,
    completedAt: new Date().toISOString(),
  };
}

// Export verification job types for queue system
export interface VerificationJob {
  id: string;
  type: 'link_check' | 'content_verify' | 'archive_request';
  investigationId: string;
  evidenceId?: string;
  url: string;
  priority: 'high' | 'normal' | 'low';
  scheduledAt: string;
  attempts: number;
  maxAttempts: number;
  lastAttempt?: string;
  lastError?: string;
  status: 'pending' | 'running' | 'completed' | 'failed';
}
