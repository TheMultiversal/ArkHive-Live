'use client';

/**
 * Launch Checklist Component
 * Pre-launch verification UI with automated checks and manual confirmations
 */

import React, { useState, useEffect, useCallback, ReactElement } from 'react';
import { 
  CheckCircle2, 
  XCircle, 
  AlertCircle, 
  Clock, 
  Play,
  RefreshCw,
  ExternalLink,
  ChevronDown,
  ChevronRight,
} from 'lucide-react';

// ============================================================================
// Types
// ============================================================================

export type CheckStatus = 'pending' | 'running' | 'passed' | 'failed' | 'warning' | 'skipped';

export interface CheckItem {
  id: string;
  name: string;
  description: string;
  category: string;
  priority: 'critical' | 'high' | 'medium' | 'low';
  type: 'auto' | 'manual';
  status: CheckStatus;
  message?: string;
  duration?: number;
  documentation?: string;
  runCheck?: () => Promise<{ passed: boolean; message?: string }>;
}

export interface CheckCategory {
  id: string;
  name: string;
  description: string;
  items: CheckItem[];
}

export interface LaunchChecklistProps {
  categories: CheckCategory[];
  onComplete?: (results: CheckItem[]) => void;
  onExport?: (results: CheckItem[]) => void;
}

// ============================================================================
// Default Check Categories
// ============================================================================

export const DEFAULT_CATEGORIES: CheckCategory[] = [
  {
    id: 'security',
    name: 'Security',
    description: 'Authentication, authorization, and data protection',
    items: [
      {
        id: 'sec-https',
        name: 'HTTPS Enabled',
        description: 'All traffic uses secure HTTPS connections',
        category: 'security',
        priority: 'critical',
        type: 'auto',
        status: 'pending',
        runCheck: async () => ({
          passed: typeof window !== 'undefined' && window.location.protocol === 'https:',
          message: 'Site is served over HTTPS',
        }),
      },
      {
        id: 'sec-csp',
        name: 'Content Security Policy',
        description: 'CSP headers properly configured',
        category: 'security',
        priority: 'high',
        type: 'manual',
        status: 'pending',
        documentation: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',
      },
      {
        id: 'sec-auth',
        name: 'Authentication System',
        description: 'User authentication working correctly',
        category: 'security',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'sec-sensitive-data',
        name: 'Sensitive Data Protected',
        description: 'No API keys or secrets in client code',
        category: 'security',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
    ],
  },
  {
    id: 'performance',
    name: 'Performance',
    description: 'Page speed, loading times, and optimization',
    items: [
      {
        id: 'perf-lcp',
        name: 'Largest Contentful Paint < 2.5s',
        description: 'Main content loads quickly',
        category: 'performance',
        priority: 'high',
        type: 'manual',
        status: 'pending',
        documentation: 'https://web.dev/lcp/',
      },
      {
        id: 'perf-cls',
        name: 'Cumulative Layout Shift < 0.1',
        description: 'Visual stability of page content',
        category: 'performance',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
        documentation: 'https://web.dev/cls/',
      },
      {
        id: 'perf-bundle',
        name: 'JavaScript Bundle Size',
        description: 'Main bundle under budget',
        category: 'performance',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'perf-images',
        name: 'Images Optimized',
        description: 'Images properly sized and compressed',
        category: 'performance',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
      },
    ],
  },
  {
    id: 'accessibility',
    name: 'Accessibility',
    description: 'WCAG compliance and assistive technology support',
    items: [
      {
        id: 'a11y-keyboard',
        name: 'Keyboard Navigation',
        description: 'All interactive elements accessible via keyboard',
        category: 'accessibility',
        priority: 'high',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'a11y-aria',
        name: 'ARIA Labels',
        description: 'Proper ARIA attributes on interactive elements',
        category: 'accessibility',
        priority: 'high',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'a11y-contrast',
        name: 'Color Contrast',
        description: 'Text meets WCAG contrast requirements',
        category: 'accessibility',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'a11y-skip-links',
        name: 'Skip Navigation Links',
        description: 'Skip links available for keyboard users',
        category: 'accessibility',
        priority: 'medium',
        type: 'auto',
        status: 'pending',
        runCheck: async () => {
          const skipLink = document.querySelector('[href="#main-content"], .skip-link');
          return {
            passed: !!skipLink,
            message: skipLink ? 'Skip link found' : 'No skip link detected',
          };
        },
      },
    ],
  },
  {
    id: 'seo',
    name: 'SEO & Metadata',
    description: 'Search engine optimization and social sharing',
    items: [
      {
        id: 'seo-title',
        name: 'Page Titles',
        description: 'Unique, descriptive titles for each page',
        category: 'seo',
        priority: 'high',
        type: 'auto',
        status: 'pending',
        runCheck: async () => {
          const title = document.title;
          const passed = title.length >= 10 && title.length <= 70;
          return {
            passed,
            message: `Title: "${title}" (${title.length} chars)`,
          };
        },
      },
      {
        id: 'seo-meta',
        name: 'Meta Descriptions',
        description: 'Meta descriptions present and optimized',
        category: 'seo',
        priority: 'high',
        type: 'auto',
        status: 'pending',
        runCheck: async () => {
          const meta = document.querySelector('meta[name="description"]');
          const content = meta?.getAttribute('content') || '';
          const passed = content.length >= 50 && content.length <= 160;
          return {
            passed,
            message: content ? `Description: ${content.length} chars` : 'No meta description',
          };
        },
      },
      {
        id: 'seo-og',
        name: 'Open Graph Tags',
        description: 'OG tags for social media sharing',
        category: 'seo',
        priority: 'medium',
        type: 'auto',
        status: 'pending',
        runCheck: async () => {
          const ogTitle = document.querySelector('meta[property="og:title"]');
          const ogImage = document.querySelector('meta[property="og:image"]');
          const passed = !!(ogTitle && ogImage);
          return {
            passed,
            message: passed ? 'OG tags present' : 'Missing OG tags',
          };
        },
      },
      {
        id: 'seo-robots',
        name: 'Robots.txt',
        description: 'Robots.txt file properly configured',
        category: 'seo',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
      },
    ],
  },
  {
    id: 'functionality',
    name: 'Core Functionality',
    description: 'Main features and user flows working correctly',
    items: [
      {
        id: 'func-forms',
        name: 'Form Submissions',
        description: 'All forms submit and validate correctly',
        category: 'functionality',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'func-navigation',
        name: 'Navigation Working',
        description: 'All navigation links functional',
        category: 'functionality',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'func-error-handling',
        name: 'Error Handling',
        description: 'Graceful error handling throughout',
        category: 'functionality',
        priority: 'high',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'func-404',
        name: '404 Page',
        description: 'Custom 404 page displays correctly',
        category: 'functionality',
        priority: 'medium',
        type: 'manual',
        status: 'pending',
      },
    ],
  },
  {
    id: 'deployment',
    name: 'Deployment',
    description: 'Hosting, DNS, and infrastructure',
    items: [
      {
        id: 'deploy-dns',
        name: 'DNS Configuration',
        description: 'Domain resolves correctly',
        category: 'deployment',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'deploy-env',
        name: 'Environment Variables',
        description: 'Production environment variables configured',
        category: 'deployment',
        priority: 'critical',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'deploy-backup',
        name: 'Backup Strategy',
        description: 'Database and file backups configured',
        category: 'deployment',
        priority: 'high',
        type: 'manual',
        status: 'pending',
      },
      {
        id: 'deploy-monitoring',
        name: 'Error Monitoring',
        description: 'Error tracking service configured',
        category: 'deployment',
        priority: 'high',
        type: 'manual',
        status: 'pending',
      },
    ],
  },
];

// ============================================================================
// Status Components
// ============================================================================

function StatusIcon({ status }: { status: CheckStatus }): ReactElement {
  switch (status) {
    case 'passed':
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case 'failed':
      return <XCircle className="w-5 h-5 text-zinc-300" />;
    case 'warning':
      return <AlertCircle className="w-5 h-5 text-yellow-500" />;
    case 'running':
      return <RefreshCw className="w-5 h-5 text-blood-500 animate-spin" />;
    case 'skipped':
      return <Clock className="w-5 h-5 text-zinc-500" />;
    default:
      return <Clock className="w-5 h-5 text-zinc-600" />;
  }
}

function PriorityBadge({ priority }: { priority: CheckItem['priority'] }): ReactElement {
  const colors: Record<string, string> = {
    critical: 'bg-zinc-800/50 text-zinc-300 border-zinc-700',
    high: 'bg-orange-900/50 text-orange-300 border-orange-700',
    medium: 'bg-yellow-900/50 text-yellow-300 border-yellow-700',
    low: 'bg-zinc-800 text-zinc-400 border-zinc-700',
  };

  return (
    <span className={`text-xs px-2 py-0.5 border ${colors[priority]}`}>
      {priority}
    </span>
  );
}

// ============================================================================
// Check Item Component
// ============================================================================

interface CheckItemRowProps {
  item: CheckItem;
  onRun?: () => void;
  onToggle?: (passed: boolean) => void;
}

function CheckItemRow({ item, onRun, onToggle }: CheckItemRowProps): ReactElement {
  return (
    <div className="flex items-center justify-between p-3 bg-black/30 border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div className="flex items-center gap-3">
        <StatusIcon status={item.status} />
        <div>
          <div className="flex items-center gap-2">
            <span className="text-white font-medium">{item.name}</span>
            <PriorityBadge priority={item.priority} />
            <span className="text-xs text-zinc-600">
              {item.type === 'auto' ? 'Auto' : 'Manual'}
            </span>
          </div>
          <p className="text-sm text-zinc-500">{item.description}</p>
          {item.message && (
            <p className="text-xs text-zinc-400 mt-1">{item.message}</p>
          )}
        </div>
      </div>
      
      <div className="flex items-center gap-2">
        {item.documentation && (
          <a
            href={item.documentation}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-zinc-500 hover:text-white transition-colors"
            aria-label="View documentation"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        )}
        
        {item.type === 'auto' && item.status === 'pending' && onRun && (
          <button
            onClick={onRun}
            className="p-2 text-zinc-500 hover:text-white transition-colors"
            aria-label="Run check"
          >
            <Play className="w-4 h-4" />
          </button>
        )}
        
        {item.type === 'manual' && item.status !== 'running' && onToggle && (
          <div className="flex gap-1">
            <button
              onClick={() => onToggle(true)}
              className={`px-3 py-1 text-xs border transition-colors ${
                item.status === 'passed'
                  ? 'bg-green-900/50 border-green-700 text-green-300'
                  : 'border-zinc-700 text-zinc-400 hover:border-green-700 hover:text-green-400'
              }`}
            >
              Pass
            </button>
            <button
              onClick={() => onToggle(false)}
              className={`px-3 py-1 text-xs border transition-colors ${
                item.status === 'failed'
                  ? 'bg-zinc-800/50 border-zinc-700 text-zinc-300'
                  : 'border-zinc-700 text-zinc-400 hover:border-zinc-700 hover:text-white'
              }`}
            >
              Fail
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Category Component
// ============================================================================

interface CategorySectionProps {
  category: CheckCategory;
  items: CheckItem[];
  onRunCheck: (itemId: string) => void;
  onToggleCheck: (itemId: string, passed: boolean) => void;
}

function CategorySection({ 
  category, 
  items, 
  onRunCheck, 
  onToggleCheck 
}: CategorySectionProps): ReactElement {
  const [expanded, setExpanded] = useState(true);

  const passedCount = items.filter(i => i.status === 'passed').length;
  const failedCount = items.filter(i => i.status === 'failed').length;
  const totalCount = items.length;

  return (
    <div className="border border-zinc-800">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-4 bg-zinc-900/50 hover:bg-zinc-900 transition-colors"
      >
        <div className="flex items-center gap-3">
          {expanded ? (
            <ChevronDown className="w-5 h-5 text-zinc-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-zinc-500" />
          )}
          <div className="text-left">
            <h3 className="text-lg font-medium text-white">{category.name}</h3>
            <p className="text-sm text-zinc-500">{category.description}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {passedCount > 0 && (
            <span className="text-sm text-green-400">{passedCount} passed</span>
          )}
          {failedCount > 0 && (
            <span className="text-sm text-zinc-400">{failedCount} failed</span>
          )}
          <span className="text-sm text-zinc-500">
            {passedCount}/{totalCount}
          </span>
        </div>
      </button>

      {expanded && (
        <div className="space-y-1 p-2">
          {items.map(item => (
            <CheckItemRow
              key={item.id}
              item={item}
              onRun={() => onRunCheck(item.id)}
              onToggle={(passed) => onToggleCheck(item.id, passed)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================

export function LaunchChecklist({ 
  categories = DEFAULT_CATEGORIES,
  onComplete,
  onExport,
}: LaunchChecklistProps): ReactElement {
  const [checkItems, setCheckItems] = useState<CheckItem[]>(() =>
    categories.flatMap(c => c.items)
  );

  const updateItem = useCallback((id: string, updates: Partial<CheckItem>) => {
    setCheckItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  }, []);

  const runCheck = useCallback(async (itemId: string) => {
    const item = checkItems.find(i => i.id === itemId);
    if (!item?.runCheck) return;

    updateItem(itemId, { status: 'running' });

    try {
      const startTime = Date.now();
      const result = await item.runCheck();
      const duration = Date.now() - startTime;

      updateItem(itemId, {
        status: result.passed ? 'passed' : 'failed',
        message: result.message,
        duration,
      });
    } catch (error) {
      updateItem(itemId, {
        status: 'failed',
        message: error instanceof Error ? error.message : 'Check failed',
      });
    }
  }, [checkItems, updateItem]);

  const toggleCheck = useCallback((itemId: string, passed: boolean) => {
    updateItem(itemId, {
      status: passed ? 'passed' : 'failed',
    });
  }, [updateItem]);

  const runAllAuto = useCallback(async () => {
    const autoItems = checkItems.filter(i => i.type === 'auto' && i.runCheck);
    for (const item of autoItems) {
      await runCheck(item.id);
    }
  }, [checkItems, runCheck]);

  const getProgress = () => {
    const total = checkItems.length;
    const completed = checkItems.filter(i => 
      i.status === 'passed' || i.status === 'failed' || i.status === 'skipped'
    ).length;
    const passed = checkItems.filter(i => i.status === 'passed').length;
    const failed = checkItems.filter(i => i.status === 'failed').length;
    const critical = checkItems.filter(i => 
      i.priority === 'critical' && i.status === 'failed'
    ).length;

    return { total, completed, passed, failed, critical };
  };

  const progress = getProgress();
  const isReady = progress.critical === 0 && progress.completed === progress.total;

  useEffect(() => {
    if (progress.completed === progress.total && onComplete) {
      onComplete(checkItems);
    }
  }, [progress.completed, progress.total, checkItems, onComplete]);

  const handleExport = () => {
    if (onExport) {
      onExport(checkItems);
    } else {
      const report = {
        timestamp: new Date().toISOString(),
        summary: progress,
        items: checkItems,
      };
      const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `launch-checklist-${Date.now()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Launch Checklist</h2>
          <p className="text-zinc-500">
            {progress.completed} of {progress.total} checks completed
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <button
            onClick={runAllAuto}
            className="px-4 py-2 bg-zinc-800 border border-zinc-700 text-white hover:bg-zinc-700 transition-colors flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            Run All Auto Checks
          </button>
          <button
            onClick={handleExport}
            className="px-4 py-2 bg-zinc-700 text-white hover:bg-zinc-600 transition-colors"
          >
            Export Report
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="bg-zinc-900 p-4 border border-zinc-800">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-4">
            <span className="text-green-400">{progress.passed} passed</span>
            <span className="text-zinc-400">{progress.failed} failed</span>
            <span className="text-zinc-500">
              {progress.total - progress.completed} pending
            </span>
          </div>
          
          {isReady ? (
            <span className="text-green-400 font-medium">Ready to Launch</span>
          ) : progress.critical > 0 ? (
            <span className="text-zinc-400 font-medium">
              {progress.critical} critical issues
            </span>
          ) : (
            <span className="text-yellow-400 font-medium">In Progress</span>
          )}
        </div>
        
        <div className="h-3 bg-black/50 flex overflow-hidden">
          <div 
            className="h-full bg-green-600 transition-all duration-300"
            style={{ width: `${(progress.passed / progress.total) * 100}%` }}
          />
          <div 
            className="h-full bg-zinc-700 transition-all duration-300"
            style={{ width: `${(progress.failed / progress.total) * 100}%` }}
          />
        </div>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        {categories.map(category => (
          <CategorySection
            key={category.id}
            category={category}
            items={checkItems.filter(i => i.category === category.id)}
            onRunCheck={runCheck}
            onToggleCheck={toggleCheck}
          />
        ))}
      </div>
    </div>
  );
}

export default LaunchChecklist;
