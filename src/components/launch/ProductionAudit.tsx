'use client';

/**
 * Production Readiness Audit
 * Final deployment validation with automated scanning and reporting
 */

import React, { useState, useCallback, ReactElement } from 'react';
import { 
  Shield, 
  Zap, 
  Eye, 
  Search, 
  Server, 
  FileText,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  RefreshCw,
  Download,
  BarChart3,
} from 'lucide-react';

// ============================================================================
// Types
// ============================================================================

export type AuditStatus = 'idle' | 'running' | 'complete' | 'error';
export type SeverityLevel = 'critical' | 'high' | 'medium' | 'low' | 'info';
export type AuditCategory = 'security' | 'performance' | 'accessibility' | 'seo' | 'infrastructure' | 'compliance';

export interface AuditFinding {
  id: string;
  category: AuditCategory;
  severity: SeverityLevel;
  title: string;
  description: string;
  recommendation: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  automated: boolean;
}

export interface AuditScore {
  category: AuditCategory;
  score: number;
  maxScore: number;
  findings: AuditFinding[];
}

export interface AuditResult {
  timestamp: number;
  duration: number;
  overallScore: number;
  status: 'pass' | 'fail' | 'warning';
  categories: AuditScore[];
  criticalCount: number;
  highCount: number;
  mediumCount: number;
  lowCount: number;
}

export interface AuditConfig {
  runSecurityAudit?: boolean;
  runPerformanceAudit?: boolean;
  runAccessibilityAudit?: boolean;
  runSeoAudit?: boolean;
  runInfrastructureAudit?: boolean;
  runComplianceAudit?: boolean;
}

// ============================================================================
// Audit Checks
// ============================================================================

const runSecurityChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check HTTPS
  if (typeof window !== 'undefined' && window.location.protocol !== 'https:') {
    findings.push({
      id: 'sec-https',
      category: 'security',
      severity: 'critical',
      title: 'Site not served over HTTPS',
      description: 'The site is being served over an insecure HTTP connection.',
      recommendation: 'Configure your server to redirect all HTTP traffic to HTTPS.',
      impact: 'User data and credentials can be intercepted.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for exposed sensitive data
  const pageContent = document.body.innerHTML.toLowerCase();
  if (pageContent.includes('api_key=') || pageContent.includes('secret=')) {
    findings.push({
      id: 'sec-exposed-keys',
      category: 'security',
      severity: 'critical',
      title: 'Potential API keys exposed in HTML',
      description: 'Detected patterns that may indicate exposed API keys or secrets.',
      recommendation: 'Move all sensitive data to environment variables and server-side code.',
      impact: 'API keys can be stolen and abused.',
      effort: 'medium',
      automated: true,
    });
  }

  // Check CSP
  const cspMeta = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
  if (!cspMeta) {
    findings.push({
      id: 'sec-csp',
      category: 'security',
      severity: 'high',
      title: 'No Content Security Policy detected',
      description: 'CSP header or meta tag not found.',
      recommendation: 'Add CSP headers to prevent XSS and injection attacks.',
      impact: 'Site is vulnerable to cross-site scripting attacks.',
      effort: 'medium',
      automated: true,
    });
  }

  // Check for inline event handlers
  const inlineHandlers = document.querySelectorAll('[onclick], [onmouseover], [onerror]');
  if (inlineHandlers.length > 0) {
    findings.push({
      id: 'sec-inline-handlers',
      category: 'security',
      severity: 'medium',
      title: 'Inline event handlers detected',
      description: `Found ${inlineHandlers.length} inline event handlers in the DOM.`,
      recommendation: 'Move event handlers to separate JavaScript files.',
      impact: 'Makes CSP implementation more difficult.',
      effort: 'medium',
      automated: true,
    });
  }

  return findings;
};

const runPerformanceChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check for large images
  const images = document.querySelectorAll('img');
  let largeImageCount = 0;
  images.forEach(img => {
    if (img.naturalWidth > 1920 || img.naturalHeight > 1920) {
      largeImageCount++;
    }
  });
  if (largeImageCount > 0) {
    findings.push({
      id: 'perf-large-images',
      category: 'performance',
      severity: 'medium',
      title: 'Large images detected',
      description: `Found ${largeImageCount} images larger than 1920px.`,
      recommendation: 'Resize and compress images for web use.',
      impact: 'Slow page load times and wasted bandwidth.',
      effort: 'medium',
      automated: true,
    });
  }

  // Check for lazy loading
  const imagesWithoutLazy = document.querySelectorAll('img:not([loading="lazy"])');
  if (imagesWithoutLazy.length > 5) {
    findings.push({
      id: 'perf-no-lazy',
      category: 'performance',
      severity: 'low',
      title: 'Images without lazy loading',
      description: `${imagesWithoutLazy.length} images don't have lazy loading enabled.`,
      recommendation: 'Add loading="lazy" to images below the fold.',
      impact: 'Unnecessary resource loading on page load.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for render-blocking scripts
  const blockingScripts = document.querySelectorAll('script:not([async]):not([defer]):not([type="module"])');
  if (blockingScripts.length > 2) {
    findings.push({
      id: 'perf-blocking-scripts',
      category: 'performance',
      severity: 'medium',
      title: 'Render-blocking scripts',
      description: `Found ${blockingScripts.length} potentially render-blocking scripts.`,
      recommendation: 'Add async or defer attributes to non-critical scripts.',
      impact: 'Delays page rendering.',
      effort: 'low',
      automated: true,
    });
  }

  return findings;
};

const runAccessibilityChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check for missing alt attributes
  const imagesWithoutAlt = document.querySelectorAll('img:not([alt])');
  if (imagesWithoutAlt.length > 0) {
    findings.push({
      id: 'a11y-no-alt',
      category: 'accessibility',
      severity: 'high',
      title: 'Images missing alt text',
      description: `${imagesWithoutAlt.length} images don't have alt attributes.`,
      recommendation: 'Add descriptive alt text to all meaningful images.',
      impact: 'Screen reader users cannot understand image content.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for form labels
  const inputsWithoutLabels = document.querySelectorAll('input:not([aria-label]):not([aria-labelledby])');
  let unlabeledInputs = 0;
  inputsWithoutLabels.forEach(input => {
    const id = input.getAttribute('id');
    if (!id || !document.querySelector(`label[for="${id}"]`)) {
      unlabeledInputs++;
    }
  });
  if (unlabeledInputs > 0) {
    findings.push({
      id: 'a11y-no-labels',
      category: 'accessibility',
      severity: 'high',
      title: 'Form inputs without labels',
      description: `${unlabeledInputs} form inputs lack proper labels.`,
      recommendation: 'Add labels or ARIA labels to all form inputs.',
      impact: 'Users cannot understand form field purposes.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for heading hierarchy
  const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  let hasH1 = false;
  let hierarchyIssue = false;
  let lastLevel = 0;
  
  headings.forEach(h => {
    const level = parseInt(h.tagName[1]);
    if (level === 1) hasH1 = true;
    if (level > lastLevel + 1 && lastLevel > 0) {
      hierarchyIssue = true;
    }
    lastLevel = level;
  });

  if (!hasH1) {
    findings.push({
      id: 'a11y-no-h1',
      category: 'accessibility',
      severity: 'medium',
      title: 'Missing H1 heading',
      description: 'Page does not have an H1 heading.',
      recommendation: 'Add a single H1 heading to define the page topic.',
      impact: 'Page structure unclear to screen reader users.',
      effort: 'low',
      automated: true,
    });
  }

  if (hierarchyIssue) {
    findings.push({
      id: 'a11y-heading-hierarchy',
      category: 'accessibility',
      severity: 'medium',
      title: 'Heading hierarchy issues',
      description: 'Headings skip levels (e.g., H2 followed by H4).',
      recommendation: 'Ensure headings follow proper hierarchy without skipping levels.',
      impact: 'Confusing navigation for screen reader users.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for focus outlines
  const style = getComputedStyle(document.body);
  if (style.outline === 'none' || style.outlineWidth === '0px') {
    findings.push({
      id: 'a11y-focus-outline',
      category: 'accessibility',
      severity: 'medium',
      title: 'Focus outlines may be suppressed',
      description: 'Global styles may remove focus indicators.',
      recommendation: 'Ensure visible focus indicators on all interactive elements.',
      impact: 'Keyboard users cannot see focused elements.',
      effort: 'low',
      automated: true,
    });
  }

  return findings;
};

const runSeoChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check title
  const title = document.title;
  if (!title || title.length < 10) {
    findings.push({
      id: 'seo-title-short',
      category: 'seo',
      severity: 'high',
      title: 'Page title too short or missing',
      description: `Title: "${title}" (${title?.length || 0} characters)`,
      recommendation: 'Add a descriptive title between 30-60 characters.',
      impact: 'Poor search engine visibility.',
      effort: 'low',
      automated: true,
    });
  } else if (title.length > 70) {
    findings.push({
      id: 'seo-title-long',
      category: 'seo',
      severity: 'low',
      title: 'Page title may be too long',
      description: `Title is ${title.length} characters. May be truncated in search results.`,
      recommendation: 'Keep title under 60 characters for best display.',
      impact: 'Title may be cut off in search results.',
      effort: 'low',
      automated: true,
    });
  }

  // Check meta description
  const metaDesc = document.querySelector('meta[name="description"]');
  const descContent = metaDesc?.getAttribute('content') || '';
  if (!descContent || descContent.length < 50) {
    findings.push({
      id: 'seo-meta-desc',
      category: 'seo',
      severity: 'high',
      title: 'Meta description missing or too short',
      description: `Description is ${descContent.length} characters.`,
      recommendation: 'Add a compelling description between 120-160 characters.',
      impact: 'Search engines may generate inferior snippets.',
      effort: 'low',
      automated: true,
    });
  }

  // Check canonical URL
  const canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    findings.push({
      id: 'seo-canonical',
      category: 'seo',
      severity: 'medium',
      title: 'No canonical URL specified',
      description: 'Canonical link tag not found.',
      recommendation: 'Add a canonical URL to prevent duplicate content issues.',
      impact: 'Potential duplicate content penalties.',
      effort: 'low',
      automated: true,
    });
  }

  // Check Open Graph
  const ogTitle = document.querySelector('meta[property="og:title"]');
  const ogImage = document.querySelector('meta[property="og:image"]');
  if (!ogTitle || !ogImage) {
    findings.push({
      id: 'seo-og-tags',
      category: 'seo',
      severity: 'medium',
      title: 'Open Graph tags incomplete',
      description: 'Missing og:title or og:image tags.',
      recommendation: 'Add complete Open Graph meta tags for social sharing.',
      impact: 'Poor appearance when shared on social media.',
      effort: 'low',
      automated: true,
    });
  }

  return findings;
};

const runInfrastructureChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check for service worker
  if ('serviceWorker' in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    if (registrations.length === 0) {
      findings.push({
        id: 'infra-sw',
        category: 'infrastructure',
        severity: 'info',
        title: 'No service worker registered',
        description: 'Service workers enable offline functionality and caching.',
        recommendation: 'Consider adding a service worker for improved performance.',
        impact: 'No offline support or advanced caching.',
        effort: 'high',
        automated: true,
      });
    }
  }

  // Check viewport meta
  const viewport = document.querySelector('meta[name="viewport"]');
  if (!viewport) {
    findings.push({
      id: 'infra-viewport',
      category: 'infrastructure',
      severity: 'high',
      title: 'Viewport meta tag missing',
      description: 'No viewport configuration found.',
      recommendation: 'Add viewport meta tag for responsive design.',
      impact: 'Poor mobile device experience.',
      effort: 'low',
      automated: true,
    });
  }

  // Check charset
  const charset = document.querySelector('meta[charset]');
  if (!charset) {
    findings.push({
      id: 'infra-charset',
      category: 'infrastructure',
      severity: 'medium',
      title: 'Character encoding not specified',
      description: 'No charset meta tag found.',
      recommendation: 'Add <meta charset="UTF-8"> to document head.',
      impact: 'Character display issues possible.',
      effort: 'low',
      automated: true,
    });
  }

  return findings;
};

const runComplianceChecks = async (): Promise<AuditFinding[]> => {
  const findings: AuditFinding[] = [];

  // Check for privacy policy link
  const privacyLink = document.querySelector('a[href*="privacy"]');
  if (!privacyLink) {
    findings.push({
      id: 'comp-privacy',
      category: 'compliance',
      severity: 'high',
      title: 'Privacy policy link not found',
      description: 'No visible link to privacy policy detected.',
      recommendation: 'Add a link to privacy policy in footer.',
      impact: 'GDPR and legal compliance issues.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for terms of service
  const termsLink = document.querySelector('a[href*="terms"]');
  if (!termsLink) {
    findings.push({
      id: 'comp-terms',
      category: 'compliance',
      severity: 'medium',
      title: 'Terms of service link not found',
      description: 'No visible link to terms of service detected.',
      recommendation: 'Add a link to terms of service.',
      impact: 'Legal protection gaps.',
      effort: 'low',
      automated: true,
    });
  }

  // Check for cookie notice
  const cookieNotice = document.querySelector('[class*="cookie"], [id*="cookie"], [aria-label*="cookie"]');
  if (!cookieNotice) {
    findings.push({
      id: 'comp-cookies',
      category: 'compliance',
      severity: 'medium',
      title: 'No cookie consent detected',
      description: 'Cookie consent banner not found.',
      recommendation: 'Implement cookie consent for GDPR compliance.',
      impact: 'GDPR non-compliance risk.',
      effort: 'medium',
      automated: true,
    });
  }

  return findings;
};

// ============================================================================
// Score Calculation
// ============================================================================

const calculateCategoryScore = (findings: AuditFinding[], category: AuditCategory): AuditScore => {
  const categoryFindings = findings.filter(f => f.category === category);
  
  let deductions = 0;
  categoryFindings.forEach(f => {
    switch (f.severity) {
      case 'critical': deductions += 25; break;
      case 'high': deductions += 15; break;
      case 'medium': deductions += 8; break;
      case 'low': deductions += 3; break;
      case 'info': deductions += 0; break;
    }
  });

  const score = Math.max(0, 100 - deductions);
  
  return {
    category,
    score,
    maxScore: 100,
    findings: categoryFindings,
  };
};

// ============================================================================
// Components
// ============================================================================

const CATEGORY_ICONS: Record<AuditCategory, ReactElement> = {
  security: <Shield className="w-5 h-5" />,
  performance: <Zap className="w-5 h-5" />,
  accessibility: <Eye className="w-5 h-5" />,
  seo: <Search className="w-5 h-5" />,
  infrastructure: <Server className="w-5 h-5" />,
  compliance: <FileText className="w-5 h-5" />,
};

const SEVERITY_COLORS: Record<SeverityLevel, string> = {
  critical: 'bg-blood-900/50 text-blood-300 border-blood-700',
  high: 'bg-orange-900/50 text-orange-300 border-orange-700',
  medium: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
  low: 'bg-blue-900/50 text-blue-300 border-blue-700',
  info: 'bg-zinc-800 text-zinc-400 border-zinc-700',
};

interface FindingCardProps {
  finding: AuditFinding;
}

function FindingCard({ finding }: FindingCardProps): ReactElement {
  return (
    <div className="p-4 bg-black/30 border border-zinc-800">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className={`text-xs px-2 py-0.5 border ${SEVERITY_COLORS[finding.severity]}`}>
              {finding.severity}
            </span>
            <span className="text-xs text-zinc-500">{finding.category}</span>
          </div>
          <h4 className="text-white font-medium">{finding.title}</h4>
          <p className="text-sm text-zinc-400 mt-1">{finding.description}</p>
          <div className="mt-3 space-y-2 text-sm">
            <p><span className="text-zinc-500">Recommendation:</span> <span className="text-zinc-300">{finding.recommendation}</span></p>
            <p><span className="text-zinc-500">Impact:</span> <span className="text-zinc-300">{finding.impact}</span></p>
            <p><span className="text-zinc-500">Effort:</span> <span className="text-zinc-300 capitalize">{finding.effort}</span></p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ScoreCardProps {
  score: AuditScore;
}

function ScoreCard({ score }: ScoreCardProps): ReactElement {
  const getScoreColor = () => {
    if (score.score >= 90) return 'text-green-400';
    if (score.score >= 70) return 'text-yellow-400';
    if (score.score >= 50) return 'text-orange-400';
    return 'text-blood-400';
  };

  return (
    <div className="p-4 bg-zinc-900 border border-zinc-800">
      <div className="flex items-center gap-3 mb-3">
        <div className="text-zinc-400">{CATEGORY_ICONS[score.category]}</div>
        <span className="text-white font-medium capitalize">{score.category}</span>
      </div>
      <div className={`text-3xl font-bold ${getScoreColor()}`}>
        {score.score}
      </div>
      <div className="text-xs text-zinc-500 mt-1">
        {score.findings.length} findings
      </div>
      <div className="mt-3 h-2 bg-black/50">
        <div 
          className={`h-full transition-all duration-500 ${score.score >= 90 ? 'bg-green-600' : score.score >= 70 ? 'bg-yellow-600' : score.score >= 50 ? 'bg-orange-600' : 'bg-blood-600'}`}
          style={{ width: `${score.score}%` }}
        />
      </div>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export interface ProductionAuditProps {
  config?: AuditConfig;
  onComplete?: (result: AuditResult) => void;
}

export function ProductionAudit({ config = {}, onComplete }: ProductionAuditProps): ReactElement {
  const [status, setStatus] = useState<AuditStatus>('idle');
  const [result, setResult] = useState<AuditResult | null>(null);
  const [progress, setProgress] = useState(0);

  const runAudit = useCallback(async () => {
    setStatus('running');
    setProgress(0);
    const startTime = Date.now();

    try {
      const allFindings: AuditFinding[] = [];

      const auditSteps = [
        { run: config.runSecurityAudit !== false, fn: runSecurityChecks, name: 'Security' },
        { run: config.runPerformanceAudit !== false, fn: runPerformanceChecks, name: 'Performance' },
        { run: config.runAccessibilityAudit !== false, fn: runAccessibilityChecks, name: 'Accessibility' },
        { run: config.runSeoAudit !== false, fn: runSeoChecks, name: 'SEO' },
        { run: config.runInfrastructureAudit !== false, fn: runInfrastructureChecks, name: 'Infrastructure' },
        { run: config.runComplianceAudit !== false, fn: runComplianceChecks, name: 'Compliance' },
      ];

      const activeSteps = auditSteps.filter(s => s.run);
      let completed = 0;

      for (const step of activeSteps) {
        const findings = await step.fn();
        allFindings.push(...findings);
        completed++;
        setProgress((completed / activeSteps.length) * 100);
      }

      // Calculate scores
      const categories: AuditScore[] = [
        calculateCategoryScore(allFindings, 'security'),
        calculateCategoryScore(allFindings, 'performance'),
        calculateCategoryScore(allFindings, 'accessibility'),
        calculateCategoryScore(allFindings, 'seo'),
        calculateCategoryScore(allFindings, 'infrastructure'),
        calculateCategoryScore(allFindings, 'compliance'),
      ];

      const overallScore = Math.round(
        categories.reduce((sum, c) => sum + c.score, 0) / categories.length
      );

      const criticalCount = allFindings.filter(f => f.severity === 'critical').length;
      const highCount = allFindings.filter(f => f.severity === 'high').length;
      const mediumCount = allFindings.filter(f => f.severity === 'medium').length;
      const lowCount = allFindings.filter(f => f.severity === 'low').length;

      const auditResult: AuditResult = {
        timestamp: Date.now(),
        duration: Date.now() - startTime,
        overallScore,
        status: criticalCount > 0 ? 'fail' : highCount > 3 ? 'warning' : 'pass',
        categories,
        criticalCount,
        highCount,
        mediumCount,
        lowCount,
      };

      setResult(auditResult);
      setStatus('complete');
      onComplete?.(auditResult);
    } catch (error) {
      setStatus('error');
    }
  }, [config, onComplete]);

  const exportReport = () => {
    if (!result) return;
    
    const report = {
      ...result,
      generatedAt: new Date().toISOString(),
      url: window.location.href,
    };
    
    const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `production-audit-${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Production Readiness Audit</h2>
          <p className="text-zinc-500">Comprehensive deployment validation</p>
        </div>
        
        <div className="flex items-center gap-3">
          {result && (
            <button
              onClick={exportReport}
              className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
          )}
          <button
            onClick={runAudit}
            disabled={status === 'running'}
            className="px-4 py-2 bg-blood-600 text-white hover:bg-blood-500 disabled:opacity-50 transition-colors flex items-center gap-2"
          >
            {status === 'running' ? (
              <RefreshCw className="w-4 h-4 animate-spin" />
            ) : (
              <BarChart3 className="w-4 h-4" />
            )}
            {status === 'running' ? 'Running...' : 'Run Audit'}
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      {status === 'running' && (
        <div className="bg-zinc-900 p-4 border border-zinc-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-zinc-400">Analyzing...</span>
            <span className="text-zinc-500">{Math.round(progress)}%</span>
          </div>
          <div className="h-2 bg-black/50">
            <div 
              className="h-full bg-blood-600 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {/* Results */}
      {result && status === 'complete' && (
        <>
          {/* Overall Score */}
          <div className="bg-zinc-900 p-6 border border-zinc-800">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <div className={`text-5xl font-bold ${result.overallScore >= 90 ? 'text-green-400' : result.overallScore >= 70 ? 'text-yellow-400' : result.overallScore >= 50 ? 'text-orange-400' : 'text-blood-400'}`}>
                    {result.overallScore}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">Overall Score</div>
                </div>
                
                <div className="h-16 w-px bg-zinc-800" />
                
                <div className="flex items-center gap-4">
                  {result.status === 'pass' && (
                    <div className="flex items-center gap-2 text-green-400">
                      <CheckCircle2 className="w-6 h-6" />
                      <span className="font-medium">Ready to Deploy</span>
                    </div>
                  )}
                  {result.status === 'warning' && (
                    <div className="flex items-center gap-2 text-yellow-400">
                      <AlertTriangle className="w-6 h-6" />
                      <span className="font-medium">Review Recommended</span>
                    </div>
                  )}
                  {result.status === 'fail' && (
                    <div className="flex items-center gap-2 text-blood-400">
                      <XCircle className="w-6 h-6" />
                      <span className="font-medium">Critical Issues Found</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm">
                {result.criticalCount > 0 && (
                  <span className="text-blood-400">{result.criticalCount} Critical</span>
                )}
                {result.highCount > 0 && (
                  <span className="text-orange-400">{result.highCount} High</span>
                )}
                {result.mediumCount > 0 && (
                  <span className="text-yellow-400">{result.mediumCount} Medium</span>
                )}
                {result.lowCount > 0 && (
                  <span className="text-blue-400">{result.lowCount} Low</span>
                )}
                <span className="text-zinc-500">
                  <Clock className="w-4 h-4 inline mr-1" />
                  {result.duration}ms
                </span>
              </div>
            </div>
          </div>

          {/* Category Scores */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {result.categories.map(score => (
              <ScoreCard key={score.category} score={score} />
            ))}
          </div>

          {/* Findings */}
          {result.categories.some(c => c.findings.length > 0) && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-white">Findings</h3>
              {result.categories
                .filter(c => c.findings.length > 0)
                .map(category => (
                  <div key={category.category}>
                    <h4 className="text-lg text-zinc-300 capitalize mb-3 flex items-center gap-2">
                      {CATEGORY_ICONS[category.category]}
                      {category.category}
                    </h4>
                    <div className="space-y-2">
                      {category.findings.map(finding => (
                        <FindingCard key={finding.id} finding={finding} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          )}
        </>
      )}

      {/* Idle State */}
      {status === 'idle' && !result && (
        <div className="text-center py-12 text-zinc-500">
          <BarChart3 className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Click "Run Audit" to analyze your site</p>
        </div>
      )}
    </div>
  );
}

export default ProductionAudit;
