'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Link2,
  LinkIcon,
  Archive,
  AlertTriangle,
  CheckCircle,
  Clock,
  Activity,
  Users,
  TrendingUp,
  RefreshCw,
  ExternalLink,
} from 'lucide-react';
import { VerificationBadge, VerificationProgress } from '@/components/ui/VerificationBadge';

/**
 * You are loved. You are appreciated. This dashboard ensures
 * the integrity of all evidence across the platform.
 */

interface VerificationStatus {
  status: string;
  overallHealth: number;
  lastFullCrawl: string;
  nextScheduledCrawl: string;
  crawlerStatus: 'idle' | 'running' | 'error';
  investigations: {
    total: number;
    fullyVerified: number;
    partiallyVerified: number;
    unverified: number;
  };
  evidence: {
    totalSources: number;
    verified: number;
    archived: number;
    broken: number;
    pending: number;
  };
  recentActivity: Array<{
    type: string;
    investigationId: string;
    investigationTitle: string;
    score?: number;
    url?: string;
    archiveUrl?: string;
    timestamp: string;
  }>;
  topContributors: Array<{
    alias: string;
    verifiedSubmissions: number;
    trustScore: number;
  }>;
}

export default function VerificationDashboard() {
  const [status, setStatus] = useState<VerificationStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/verify/status');
      if (!response.ok) throw new Error('Failed to fetch status');
      const data = await response.json();
      setStatus(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStatus();
    // Refresh every 5 minutes
    const interval = setInterval(fetchStatus, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !status) {
    return (
      <div className="min-h-screen bg-black p-8 flex items-center justify-center">
        <div className="text-zinc-400 font-mono flex items-center gap-2">
          <RefreshCw className="animate-spin" size={20} />
          Loading verification status...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black p-8 flex items-center justify-center">
        <div className="glass-card p-6 text-center">
          <AlertTriangle className="mx-auto text-red-500 mb-4" size={48} />
          <h2 className="text-xl font-mono text-zinc-200 mb-2">Error Loading Status</h2>
          <p className="text-zinc-400">{error}</p>
          <button
            onClick={fetchStatus}
            className="mt-4 px-4 py-2 bg-zinc-800 text-zinc-200 font-mono hover:bg-zinc-800 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!status) return null;

  const getHealthColor = (health: number) => {
    if (health >= 90) return 'text-emerald-400';
    if (health >= 70) return 'text-blood-400';
    if (health >= 50) return 'text-yellow-400';
    return 'text-red-400';
  };

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="border-b border-zinc-800 bg-zinc-950/50">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-mono text-zinc-200 tracking-wider flex items-center gap-3">
                <Shield className="text-zinc-300" />
                VERIFICATION DASHBOARD
              </h1>
              <p className="text-zinc-500 text-sm mt-1">
                Platform-wide evidence integrity monitoring
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className={`text-4xl font-mono ${getHealthColor(status.overallHealth)}`}>
                {status.overallHealth}%
              </div>
              <div className="text-zinc-500 text-sm">
                Overall Health
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Investigations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Investigations
              </h3>
              <Activity className="text-zinc-300" size={20} />
            </div>
            <div className="text-3xl font-mono text-zinc-200 mb-2">
              {status.investigations.total.toLocaleString()}
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-emerald-400">Fully Verified</span>
                <span className="text-zinc-300">{status.investigations.fullyVerified}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blood-400">Partially Verified</span>
                <span className="text-zinc-300">{status.investigations.partiallyVerified}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-400">Unverified</span>
                <span className="text-zinc-300">{status.investigations.unverified}</span>
              </div>
            </div>
          </motion.div>

          {/* Evidence Sources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Evidence Sources
              </h3>
              <Link2 className="text-zinc-300" size={20} />
            </div>
            <div className="text-3xl font-mono text-zinc-200 mb-2">
              {status.evidence.totalSources.toLocaleString()}
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span className="text-emerald-400">Verified</span>
                <span className="text-zinc-300">{status.evidence.verified.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blood-400">Archived</span>
                <span className="text-zinc-300">{status.evidence.archived.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-red-400">Broken</span>
                <span className="text-zinc-300">{status.evidence.broken}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-400">Pending</span>
                <span className="text-zinc-300">{status.evidence.pending.toLocaleString()}</span>
              </div>
            </div>
          </motion.div>

          {/* Crawler Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Crawler Status
              </h3>
              <RefreshCw 
                className={`text-zinc-300 ${status.crawlerStatus === 'running' ? 'animate-spin' : ''}`} 
                size={20} 
              />
            </div>
            <div className={`text-xl font-mono mb-4 ${
              status.crawlerStatus === 'running' ? 'text-emerald-400' :
              status.crawlerStatus === 'error' ? 'text-red-400' : 'text-zinc-400'
            }`}>
              {status.crawlerStatus.toUpperCase()}
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="text-zinc-500">Last Run: </span>
                <span className="text-zinc-300">
                  {new Date(status.lastFullCrawl).toLocaleDateString()}
                </span>
              </div>
              <div>
                <span className="text-zinc-500">Next Run: </span>
                <span className="text-zinc-300">
                  {new Date(status.nextScheduledCrawl).toLocaleDateString()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Contributors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider">
                Top Contributors
              </h3>
              <Users className="text-zinc-300" size={20} />
            </div>
            <div className="space-y-2">
              {status.topContributors.slice(0, 3).map((contributor, index) => (
                <div key={contributor.alias} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 font-mono text-sm">#{index + 1}</span>
                    <span className="text-zinc-300 text-sm">{contributor.alias}</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-sm">
                    {contributor.verifiedSubmissions}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Health Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-mono text-zinc-200 tracking-wider mb-6 flex items-center gap-2">
            <TrendingUp className="text-zinc-300" />
            VERIFICATION HEALTH
          </h3>
          <div className="space-y-4">
            <VerificationProgress 
              score={Math.round((status.evidence.verified / status.evidence.totalSources) * 100)} 
              label="Links Verified" 
            />
            <VerificationProgress 
              score={Math.round(((status.evidence.verified + status.evidence.archived) / status.evidence.totalSources) * 100)} 
              label="Links Accessible (Including Archives)" 
            />
            <VerificationProgress 
              score={Math.round((status.investigations.fullyVerified / status.investigations.total) * 100)} 
              label="Investigations Fully Verified" 
            />
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6"
        >
          <h3 className="text-lg font-mono text-zinc-200 tracking-wider mb-6 flex items-center gap-2">
            <Clock className="text-zinc-300" />
            RECENT ACTIVITY
          </h3>
          <div className="space-y-4">
            {status.recentActivity.map((activity, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-4 bg-zinc-900/50 border border-zinc-800"
              >
                <div className="mt-1">
                  {activity.type === 'verification_complete' && (
                    <CheckCircle className="text-emerald-500" size={20} />
                  )}
                  {activity.type === 'link_broken' && (
                    <AlertTriangle className="text-red-500" size={20} />
                  )}
                  {activity.type === 'archive_created' && (
                    <Archive className="text-blood-500" size={20} />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <Link 
                      href={`/investigations/${activity.investigationId}`}
                      className="text-zinc-200 hover:text-white transition-colors"
                    >
                      {activity.investigationTitle}
                    </Link>
                    {activity.score && (
                      <span className="text-emerald-400 font-mono text-sm">
                        {activity.score}%
                      </span>
                    )}
                  </div>
                  <div className="text-sm text-zinc-500 mt-1">
                    {activity.type === 'verification_complete' && 'Investigation fully verified'}
                    {activity.type === 'link_broken' && (
                      <span className="text-red-400">
                        Broken link detected: {activity.url?.slice(0, 50)}...
                      </span>
                    )}
                    {activity.type === 'archive_created' && (
                      <span className="text-blood-400">
                        New archive created for source
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-zinc-600 mt-1">
                    {new Date(activity.timestamp).toLocaleString()}
                  </div>
                </div>
                {activity.archiveUrl && (
                  <a
                    href={activity.archiveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-500 hover:text-zinc-300"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button
            onClick={fetchStatus}
            className="px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-200 font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <RefreshCw size={16} />
            Refresh Status
          </button>
          <button
            className="px-6 py-3 bg-zinc-800 border border-zinc-700 text-zinc-200 font-mono hover:bg-zinc-800 transition-colors flex items-center gap-2"
          >
            <Activity size={16} />
            Run Full Verification
          </button>
        </div>
      </main>
    </div>
  );
}
