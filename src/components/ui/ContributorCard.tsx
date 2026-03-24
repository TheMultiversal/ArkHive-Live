// @ts-nocheck
'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Shield, Award, Calendar, Activity } from 'lucide-react';
import { 
  Contributor, 
  ContributorVisibility, 
  getDisplayName, 
  calculateTrustScore,
  BADGES 
} from '@/lib/contributors/attribution';

/**
 * You are loved. You are appreciated. Contributors are the backbone of accountability.
 * This component displays contributor profiles with proper attribution and donation links.
 */

interface ContributorCardProps {
  contributor: Contributor;
  showDonationLinks?: boolean;
  showStats?: boolean;
  compact?: boolean;
}

export function ContributorCard({ 
  contributor, 
  showDonationLinks = true, 
  showStats = true,
  compact = false 
}: ContributorCardProps) {
  const displayName = getDisplayName(contributor);
  const trustScore = calculateTrustScore(contributor.contributions);

  const getTrustColor = (score: number): string => {
    if (score >= 90) return 'text-emerald-400';
    if (score >= 70) return 'text-blood-400';
    if (score >= 50) return 'text-yellow-400';
    return 'text-zinc-400';
  };

  if (compact) {
    return (
      <div className="flex items-center gap-2 text-sm">
        <div className="w-6 h-6 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
          <span className="text-xs font-mono text-zinc-400">
            {displayName.charAt(0).toUpperCase()}
          </span>
        </div>
        <span className="text-zinc-300">{displayName}</span>
        {contributor.visibility === ContributorVisibility.VERIFIED_ANONYMOUS && (
          <Shield size={12} className="text-emerald-500" title="Verified anonymous contributor" />
        )}
        <span className={`font-mono text-xs ${getTrustColor(trustScore)}`}>
          {trustScore}%
        </span>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card p-4 space-y-4"
    >
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-zinc-800 border border-zinc-700 flex items-center justify-center">
            <span className="text-xl font-mono text-zinc-400">
              {displayName.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-zinc-200 font-medium">{displayName}</h3>
              {contributor.visibility === ContributorVisibility.VERIFIED_ANONYMOUS && (
                <Shield size={14} className="text-emerald-500" title="Verified anonymous" />
              )}
            </div>
            <div className={`text-sm font-mono ${getTrustColor(trustScore)}`}>
              Trust Score: {trustScore}%
            </div>
          </div>
        </div>

        {/* Badges */}
        {contributor.badges.length > 0 && (
          <div className="flex gap-1">
            {contributor.badges.slice(0, 5).map((badge) => (
              <span
                key={badge.id}
                className="text-lg cursor-help"
                title={`${badge.name}: ${badge.description}`}
              >
                {badge.icon}
              </span>
            ))}
            {contributor.badges.length > 5 && (
              <span className="text-xs text-zinc-500 self-center">
                +{contributor.badges.length - 5}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Stats */}
      {showStats && (
        <div className="grid grid-cols-3 gap-4 py-2 border-t border-b border-zinc-800">
          <div className="text-center">
            <div className="text-lg font-mono text-zinc-200">{contributor.totalSubmissions}</div>
            <div className="text-xs text-zinc-500">Submissions</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-mono text-emerald-400">{contributor.verifiedSubmissions}</div>
            <div className="text-xs text-zinc-500">Verified</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-mono text-zinc-200">
              {Math.round((contributor.verifiedSubmissions / contributor.totalSubmissions) * 100) || 0}%
            </div>
            <div className="text-xs text-zinc-500">Accuracy</div>
          </div>
        </div>
      )}

      {/* Social Links */}
      {contributor.visibility === ContributorVisibility.PUBLIC && contributor.socialLinks && (
        <div className="flex gap-3">
          {contributor.socialLinks.twitter && (
            <a
              href={`https://twitter.com/${contributor.socialLinks.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Twitter/X"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          )}
          {contributor.socialLinks.github && (
            <a
              href={`https://github.com/${contributor.socialLinks.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
              title="GitHub"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
          )}
          {contributor.socialLinks.mastodon && (
            <a
              href={contributor.socialLinks.mastodon}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Mastodon"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.268 5.313c-.35-2.578-2.617-4.61-5.304-5.004C17.51.242 15.792 0 11.813 0h-.03c-3.98 0-4.835.242-5.288.309C3.882.692 1.496 2.518.917 5.127.64 6.412.61 7.837.661 9.143c.074 1.874.088 3.745.26 5.611.118 1.24.325 2.47.62 3.68.55 2.237 2.777 4.098 4.96 4.857 2.336.792 4.849.923 7.256.38.265-.061.527-.132.786-.213.585-.184 1.27-.39 1.774-.753a.057.057 0 00.023-.043v-1.809a.052.052 0 00-.02-.041.053.053 0 00-.046-.01 20.282 20.282 0 01-4.709.545c-2.73 0-3.463-1.284-3.674-1.818a5.593 5.593 0 01-.319-1.433.053.053 0 01.066-.054c1.517.363 3.072.546 4.632.546.376 0 .75 0 1.125-.01 1.57-.044 3.224-.124 4.768-.422.038-.008.077-.015.11-.024 2.435-.464 4.753-1.92 4.989-5.604.008-.145.03-1.52.03-1.67.002-.512.167-3.63-.024-5.545zm-3.748 9.195h-2.561V8.29c0-1.309-.55-1.976-1.67-1.976-1.23 0-1.846.79-1.846 2.35v3.403h-2.546V8.663c0-1.56-.617-2.35-1.848-2.35-1.112 0-1.668.668-1.668 1.977v6.218H4.822V8.102c0-1.31.337-2.35 1.011-3.12.696-.77 1.608-1.164 2.74-1.164 1.311 0 2.302.5 2.962 1.498l.638 1.06.638-1.06c.66-.999 1.65-1.498 2.96-1.498 1.13 0 2.043.395 2.74 1.164.675.77 1.012 1.81 1.012 3.12z" />
              </svg>
            </a>
          )}
          {contributor.socialLinks.website && (
            <a
              href={contributor.socialLinks.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 transition-colors"
              title="Website"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      )}

      {/* Donation Links */}
      {showDonationLinks && contributor.donationLinks && Object.keys(contributor.donationLinks).length > 0 && (
        <div className="pt-2 border-t border-zinc-800">
          <div className="text-xs text-zinc-500 mb-2">Support this contributor:</div>
          <div className="flex flex-wrap gap-2">
            {contributor.donationLinks.bitcoin && (
              <button
                onClick={() => navigator.clipboard.writeText(contributor.donationLinks!.bitcoin!)}
                className="px-2 py-1 bg-orange-900/30 text-orange-400 text-xs font-mono border border-orange-700 hover:bg-orange-900/50 transition-colors"
                title={`BTC: ${contributor.donationLinks.bitcoin}`}
              >
                BTC
              </button>
            )}
            {contributor.donationLinks.ethereum && (
              <button
                onClick={() => navigator.clipboard.writeText(contributor.donationLinks!.ethereum!)}
                className="px-2 py-1 bg-indigo-900/30 text-indigo-400 text-xs font-mono border border-indigo-700 hover:bg-indigo-900/50 transition-colors"
                title={`ETH: ${contributor.donationLinks.ethereum}`}
              >
                ETH
              </button>
            )}
            {contributor.donationLinks.lightning && (
              <button
                onClick={() => navigator.clipboard.writeText(contributor.donationLinks!.lightning!)}
                className="px-2 py-1 bg-yellow-900/30 text-yellow-400 text-xs font-mono border border-yellow-700 hover:bg-yellow-900/50 transition-colors"
                title="Lightning Network"
              >
                ⚡ LN
              </button>
            )}
            {contributor.donationLinks.kofi && (
              <a
                href={`https://ko-fi.com/${contributor.donationLinks.kofi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-pink-900/30 text-pink-400 text-xs font-mono border border-pink-700 hover:bg-pink-900/50 transition-colors"
              >
                Ko-fi
              </a>
            )}
            {contributor.donationLinks.patreon && (
              <a
                href={`https://patreon.com/${contributor.donationLinks.patreon}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 bg-red-900/30 text-red-400 text-xs font-mono border border-red-700 hover:bg-red-900/50 transition-colors"
              >
                Patreon
              </a>
            )}
          </div>
        </div>
      )}

      {/* Join/Activity Dates */}
      <div className="flex gap-4 text-xs text-zinc-500 font-mono">
        <div className="flex items-center gap-1">
          <Calendar size={12} />
          Joined {new Date(contributor.joinedDate).toLocaleDateString('en-US', { 
            month: 'short', 
            year: 'numeric' 
          })}
        </div>
        <div className="flex items-center gap-1">
          <Activity size={12} />
          Active {new Date(contributor.lastActive).toLocaleDateString('en-US', { 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </motion.div>
  );
}

interface ContributorListProps {
  contributors: Contributor[];
  title?: string;
}

export function ContributorList({ contributors, title = 'Contributors' }: ContributorListProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-mono text-zinc-200 tracking-wider flex items-center gap-2">
        <Award size={18} className="text-zinc-300" />
        {title}
      </h3>
      <div className="space-y-3">
        {contributors.map((contributor) => (
          <ContributorCard key={contributor.id} contributor={contributor} compact />
        ))}
      </div>
    </div>
  );
}

export default ContributorCard;
