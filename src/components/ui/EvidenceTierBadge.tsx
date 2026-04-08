'use client';

import { motion } from 'framer-motion';
import { Gavel, Scale, FileCheck, Shield, Search } from 'lucide-react';
import type { InvestigationData } from '@/data/investigations/types';

/* ================================================================
   EVIDENCE TIER SYSTEM
   ================================================================
   Tier 1: Court Records   — Verified court documents & judicial outcomes
   Tier 2: Active Cases     — Active criminal / regulatory proceedings
   Tier 3: Documented       — Declassified / officially acknowledged
   Tier 4: Under Review     — Civil suits, ongoing investigations
   Tier 5: Monitoring       — Patterns with supporting evidence

   Nothing is dismissed. Everything has a home based on evidence level.
   Items move UP tiers as evidence accumulates.
   ================================================================ */

export type EvidenceTier = 1 | 2 | 3 | 4 | 5;

const tierConfig: Record<EvidenceTier, {
  label: string;
  desc: string;
  color: string;
  bg: string;
  border: string;
  icon: typeof Gavel;
}> = {
  1: {
    label: 'COURT RECORDS',
    desc: 'Verified court documents & judicial outcomes on file',
    color: '#ef4444',
    bg: 'rgba(239,68,68,0.08)',
    border: 'rgba(239,68,68,0.25)',
    icon: Gavel,
  },
  2: {
    label: 'ACTIVE CASES',
    desc: 'Active criminal / regulatory proceedings',
    color: '#f97316',
    bg: 'rgba(249,115,22,0.08)',
    border: 'rgba(249,115,22,0.25)',
    icon: Scale,
  },
  3: {
    label: 'DOCUMENTED',
    desc: 'Officially acknowledged / declassified',
    color: '#eab308',
    bg: 'rgba(234,179,8,0.08)',
    border: 'rgba(234,179,8,0.25)',
    icon: FileCheck,
  },
  4: {
    label: 'UNDER REVIEW',
    desc: 'Civil suits / ongoing investigations',
    color: '#3b82f6',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.25)',
    icon: Shield,
  },
  5: {
    label: 'MONITORING',
    desc: 'Patterns with supporting evidence',
    color: '#8b5cf6',
    bg: 'rgba(139,92,246,0.08)',
    border: 'rgba(139,92,246,0.25)',
    icon: Search,
  },
};

export function computeEvidenceTier(investigation: InvestigationData): EvidenceTier {
  const defendants = investigation.defendants || [];
  const statutes = investigation.statutes || [];
  const sources = investigation.sources || [];
  const timeline = investigation.timeline || [];

  // Tier 1: Any defendant convicted or incarcerated
  if (defendants.some(d => d.status === 'convicted' || d.status === 'incarcerated')) return 1;

  // Tier 2: Any defendant indicted, charged, or appealing
  if (defendants.some(d => d.status === 'indicted' || d.status === 'charged' || d.status === 'appealing')) return 2;

  // Tier 3: Settled/acquitted/pardoned/released defendants, or documented with strong statutory basis
  if (defendants.some(d => d.status === 'settled' || d.status === 'acquitted' || d.status === 'pardoned' || d.status === 'released')) return 3;
  if (statutes.length > 0 && sources.length >= 5) return 3;

  // Tier 4: Pending defendants, or legal timeline events with good sourcing
  if (defendants.some(d => d.status === 'pending')) return 4;
  if (timeline.some(t => t.type === 'legal') && sources.length >= 3) return 4;
  if (sources.length >= 8 && statutes.length > 0) return 4;

  // Tier 5: Everything else (patterns and allegations with supporting evidence)
  return 5;
}

export function getTierConfig(tier: EvidenceTier) {
  return tierConfig[tier];
}

export default function EvidenceTierBadge({
  investigation,
  tier: tierOverride,
  size = 'default',
}: {
  investigation?: InvestigationData;
  tier?: EvidenceTier;
  size?: 'default' | 'compact' | 'hero';
}) {
  const tier = tierOverride ?? (investigation ? computeEvidenceTier(investigation) : 5);
  const cfg = tierConfig[tier];
  const Icon = cfg.icon;

  if (size === 'compact') {
    return (
      <div
        className="inline-flex items-center gap-1.5 px-2 py-1"
        style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
      >
        <Icon className="w-3 h-3" style={{ color: cfg.color }} />
        <span
          className="text-[8px] font-black uppercase tracking-[0.2em]"
          style={{ color: cfg.color }}
        >
          Tier {tier}
        </span>
      </div>
    );
  }

  if (size === 'hero') {
    return (
      <motion.div
        className="flex items-center gap-2.5 px-4 py-2"
        style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25, duration: 0.45 }}
      >
        <Icon className="w-4 h-4 flex-shrink-0" style={{ color: cfg.color }} />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span
              className="text-[9px] font-black uppercase tracking-[0.25em]"
              style={{ color: cfg.color }}
            >
              Evidence Tier {tier}
            </span>
            <div className="w-px h-3" style={{ background: `${cfg.color}25` }} />
            <span
              className="text-[9px] font-black uppercase tracking-[0.2em]"
              style={{ color: cfg.color }}
            >
              {cfg.label}
            </span>
          </div>
          <span className="text-[7px] text-zinc-500 mt-0.5">{cfg.desc}</span>
        </div>
      </motion.div>
    );
  }

  // Default size
  return (
    <motion.div
      className="flex items-center gap-2 px-3 py-1.5"
      style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.4 }}
    >
      <Icon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cfg.color }} />
      <span
        className="text-[9px] font-black uppercase tracking-[0.2em]"
        style={{ color: cfg.color }}
      >
        Tier {tier}: {cfg.label}
      </span>
    </motion.div>
  );
}
