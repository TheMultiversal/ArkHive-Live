'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Users, FileText,
  ExternalLink, ShieldAlert, DollarSign, Building2,
  Gavel, BookOpen, Megaphone, Mail, Share2, Copy,
  Eye, ArrowUpRight, Landmark, ClipboardCheck,
  Crosshair, Globe, ChevronDown, Shield, Calendar,
  Fingerprint, Scale, Clock, TrendingUp, Check,
  Zap, Target, ArrowRight,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const NetworkTree = dynamic(() => import('@/components/investigation/NetworkTree'), { ssr: false });

/* ================================================================
   CONSTANTS & CONFIG
   ================================================================ */

const severityConfig: Record<string, {
  color: string; glow: string; bg: string; border: string;
  label: string; level: string; gradient: string; accentDark: string;
}> = {
  critical: {
    color: '#ef4444', glow: 'rgba(239,68,68,0.15)', bg: 'rgba(239,68,68,0.06)',
    border: 'rgba(239,68,68,0.30)', label: 'CRITICAL', level: 'I',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.10) 0%, transparent 50%)',
    accentDark: 'rgba(239,68,68,0.04)',
  },
  high: {
    color: '#f97316', glow: 'rgba(249,115,22,0.15)', bg: 'rgba(249,115,22,0.06)',
    border: 'rgba(249,115,22,0.30)', label: 'HIGH', level: 'II',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.10) 0%, transparent 50%)',
    accentDark: 'rgba(249,115,22,0.04)',
  },
  medium: {
    color: '#eab308', glow: 'rgba(234,179,8,0.12)', bg: 'rgba(234,179,8,0.05)',
    border: 'rgba(234,179,8,0.25)', label: 'ELEVATED', level: 'III',
    gradient: 'linear-gradient(135deg, rgba(234,179,8,0.08) 0%, transparent 50%)',
    accentDark: 'rgba(234,179,8,0.03)',
  },
  low: {
    color: '#71717a', glow: 'rgba(113,113,122,0.10)', bg: 'rgba(113,113,122,0.04)',
    border: 'rgba(113,113,122,0.20)', label: 'STANDARD', level: 'IV',
    gradient: 'linear-gradient(135deg, rgba(113,113,122,0.06) 0%, transparent 50%)',
    accentDark: 'rgba(113,113,122,0.03)',
  },
};

const statusColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  convicted: { bg: 'rgba(220,38,38,0.10)', text: '#fca5a5', border: 'rgba(220,38,38,0.35)', dot: '#dc2626' },
  incarcerated: { bg: 'rgba(153,27,27,0.12)', text: '#fecaca', border: 'rgba(153,27,27,0.40)', dot: '#991b1b' },
  indicted: { bg: 'rgba(234,88,12,0.10)', text: '#fdba74', border: 'rgba(234,88,12,0.35)', dot: '#ea580c' },
  charged: { bg: 'rgba(217,119,6,0.10)', text: '#fcd34d', border: 'rgba(217,119,6,0.35)', dot: '#d97706' },
  pending: { bg: 'rgba(234,179,8,0.06)', text: '#fde047', border: 'rgba(234,179,8,0.25)', dot: '#eab308' },
  settled: { bg: 'rgba(113,113,122,0.08)', text: '#a1a1aa', border: 'rgba(113,113,122,0.25)', dot: '#71717a' },
  acquitted: { bg: 'rgba(16,185,129,0.08)', text: '#6ee7b7', border: 'rgba(16,185,129,0.25)', dot: '#10b981' },
  pardoned: { bg: 'rgba(139,92,246,0.08)', text: '#c4b5fd', border: 'rgba(139,92,246,0.25)', dot: '#8b5cf6' },
  appealing: { bg: 'rgba(59,130,246,0.08)', text: '#93c5fd', border: 'rgba(59,130,246,0.25)', dot: '#3b82f6' },
  released: { bg: 'rgba(156,163,175,0.06)', text: '#d1d5db', border: 'rgba(156,163,175,0.20)', dot: '#9ca3af' },
};

const entityTypeConfig: Record<string, { color: string; bg: string; icon: typeof Building2; label: string }> = {
  agency: { color: '#22d3ee', bg: 'rgba(34,211,238,0.06)', icon: Shield, label: 'Agency' },
  corporation: { color: '#facc15', bg: 'rgba(250,204,21,0.06)', icon: Building2, label: 'Corporation' },
  individual: { color: '#f87171', bg: 'rgba(248,113,113,0.06)', icon: Fingerprint, label: 'Individual' },
  organization: { color: '#c084fc', bg: 'rgba(192,132,252,0.06)', icon: Users, label: 'Organization' },
};

/* ================================================================
   HELPERS
   ================================================================ */

function extractUrls(text: string): { text: string; urls: { url: string; domain: string }[] } {
  const urlRegex = /(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+(?:\.[a-zA-Z]{2,})+(?:\/[^\s,.)]*)?)/g;
  const urls: { url: string; domain: string }[] = [];
  let cleanText = text;
  let match;
  while ((match = urlRegex.exec(text)) !== null) {
    const fullMatch = match[0];
    const domain = match[1].split('/')[0];
    const url = fullMatch.startsWith('http') ? fullMatch : `https://${fullMatch}`;
    urls.push({ url, domain });
    cleanText = cleanText.replace(fullMatch, '').trim();
  }
  return { text: cleanText.replace(/\s{2,}/g, ' ').trim(), urls };
}

type OpTrack = 'expose' | 'investigate' | 'legal' | 'pressure' | 'economic';
const trackOrder: OpTrack[] = ['expose', 'investigate', 'legal', 'pressure', 'economic'];

const trackMeta: Record<OpTrack, { label: string; directive: string; icon: typeof Crosshair; color: string; urgency: string }> = {
  expose: { label: 'EXPOSE', directive: 'Mass awareness. Make the evidence impossible to suppress.', icon: Crosshair, color: '#ef4444', urgency: 'IMMEDIATE' },
  investigate: { label: 'INVESTIGATE', directive: 'Extract records. Build the evidence chain.', icon: ClipboardCheck, color: '#3b82f6', urgency: 'PRIORITY' },
  legal: { label: 'PROSECUTE', directive: 'Use every legal mechanism that exists.', icon: Gavel, color: '#a855f7', urgency: 'STRATEGIC' },
  pressure: { label: 'PRESSURE', directive: 'Force the system to respond or expose its collapse.', icon: Landmark, color: '#ea580c', urgency: 'ONGOING' },
  economic: { label: 'DISRUPT', directive: 'Target the financial structures protecting them.', icon: DollarSign, color: '#eab308', urgency: 'SUSTAINED' },
};

function categorizeOp(text: string): OpTrack {
  const lower = text.toLowerCase();
  if (lower.includes('support org') || lower.includes('organizations working')) return 'expose';
  if (lower.includes('public information') || lower.includes('foia') || lower.includes('submit') || lower.includes('open record')) return 'investigate';
  if (lower.includes('legal') || lower.includes('attorney') || lower.includes('lawsuit') || lower.includes('court') || lower.includes('wrongful') || lower.includes('legal aid') || lower.includes('price goug') || lower.includes('consumer complaint') || lower.includes('file complaint') || lower.includes('complaint')) return 'legal';
  if (lower.includes('vote') || lower.includes('elect') || lower.includes('contact') || lower.includes('representative') || lower.includes('senator') || lower.includes('legislat') || lower.includes('demand') || lower.includes('state rep') || lower.includes('congress')) return 'pressure';
  if (lower.includes('donate') || lower.includes('fund') || lower.includes('boycott') || lower.includes('divest')) return 'economic';
  if (lower.includes('share') || lower.includes('spread') || lower.includes('social') || lower.includes('media')) return 'expose';
  return 'expose';
}

function slugifyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/* ================================================================
   COLLAPSIBLE GLASS WRAPPER
   ================================================================ */

function CollapsibleGlass({
  title, number, icon, children, defaultOpen = true, count, badge, accentColor,
}: {
  title: string;
  number: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  count?: number;
  badge?: React.ReactNode;
  accentColor?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-6 sm:p-7 cursor-pointer select-none group"
      >
        <div className="flex items-center justify-center w-9 h-9 rounded-lg flex-shrink-0"
          style={{
            background: accentColor ? `${accentColor}08` : 'rgba(184,0,0,0.08)',
            border: `1px solid ${accentColor ? `${accentColor}20` : 'rgba(184,0,0,0.15)'}`,
          }}>
          <span className="text-[10px] font-mono font-bold" style={{ color: accentColor || 'rgba(239,68,68,0.7)' }}>{number}</span>
        </div>
        <span className="text-zinc-500 flex-shrink-0">{icon}</span>
        <h2 className="text-sm font-black text-white uppercase tracking-[0.15em]">{title}</h2>
        {typeof count === 'number' && (
          <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-md ml-1"
            style={{
              color: accentColor || '#71717a',
              background: accentColor ? `${accentColor}08` : 'rgba(113,113,122,0.08)',
              border: `1px solid ${accentColor ? `${accentColor}15` : 'rgba(113,113,122,0.15)'}`,
            }}>
            {count}
          </span>
        )}
        <div className="flex-1" />
        {badge}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 sm:px-7 pb-7 border-t border-[rgba(184,0,0,0.06)] pt-6">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================
   ACCOUNTABILITY ENGINE — Complete Combat System
   ================================================================ */

function AccountabilityEngine({ content, slug, title, summary }: {
  content: string; slug: string; title: string; summary: string;
}) {
  const [completedOps, setCompletedOps] = useState<Set<number>>(new Set());
  const [viewCount, setViewCount] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);

  useEffect(() => {
    const opsKey = `arkhive_ops_${slug}`;
    const stored = localStorage.getItem(opsKey);
    if (stored) {
      try {
        const data = JSON.parse(stored);
        setCompletedOps(new Set(data.completed || []));
      } catch { /* ignore corrupt data */ }
    }
    const viewKey = `arkhive_views_${slug}`;
    const views = parseInt(localStorage.getItem(viewKey) || '0', 10) + 1;
    localStorage.setItem(viewKey, String(views));
    setViewCount(views);
  }, [slug]);

  const toggleOp = useCallback((opId: number) => {
    setCompletedOps(prev => {
      const next = new Set(prev);
      if (next.has(opId)) next.delete(opId); else next.add(opId);
      localStorage.setItem(`arkhive_ops_${slug}`, JSON.stringify({ completed: Array.from(next) }));
      return next;
    });
  }, [slug]);

  const copyText = useCallback((text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  }, []);

  // Parse operations
  const rawActions = content
    .replace(/^\s*WHAT YOU CAN DO TO HOLD THEM ACCOUNTABLE:\s*/i, '')
    .split(/\(\d+\)\s*/)
    .filter(Boolean);

  const operations = rawActions.map((action, idx) => {
    const { text, urls } = extractUrls(action.trim());
    const track = categorizeOp(text);
    return { id: idx, text, urls, track };
  });

  const grouped = trackOrder.reduce((acc, track) => {
    const ops = operations.filter(op => op.track === track);
    if (ops.length > 0) acc[track] = ops;
    return acc;
  }, {} as Partial<Record<OpTrack, typeof operations>>);

  const progress = operations.length > 0 ? (completedOps.size / operations.length) * 100 : 0;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://arkhive.live/investigations/${slug}`;

  // Pre-built templates
  const socialPost = `EXPOSED: ${title}\n\n${summary.slice(0, 180)}${summary.length > 180 ? '...' : ''}\n\nFull investigation + action plan:\n${shareUrl}\n\n#ArkHive #Accountability #Justice`;

  const emailTemplate = `Subject: Urgent Constituent Concern — ${title}\n\nDear [Representative Name],\n\nI am writing as a concerned constituent to bring your attention to documented findings in the investigation "${title}."\n\n${summary.slice(0, 300)}${summary.length > 300 ? '...' : ''}\n\nI respectfully urge you to:\n1. Open an official inquiry into the matters documented\n2. Request all relevant records through appropriate channels\n3. Ensure all applicable laws are being enforced\n4. Provide a public response addressing these findings\n\nThe complete investigation with ${operations.length} documented accountability measures and sourced evidence is available at:\n${shareUrl}\n\nI will be following this matter closely and expect a response within 30 days.\n\nRespectfully,\n[Your Name]\n[Your Address]`;

  const pressTip = `PRESS TIP — For Immediate Investigation\n\nSubject: ${title}\n\n${summary}\n\nThis investigation documents specific allegations with sourced evidence, including named defendants, financial trails, and applicable statutes.\n\nFull evidence package: ${shareUrl}\n\nThis tip is submitted through ArkHive (arkhive.live), an open accountability platform.`;

  return (
    <div className="space-y-5">
      {/* ── ENGINE HEADER ── */}
      <div className="glass-card overflow-hidden relative">
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'linear-gradient(135deg, rgba(184,0,0,0.06) 0%, transparent 40%, rgba(184,0,0,0.03) 100%)',
        }} />
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(184,0,0,0.15), transparent)' }}
          animate={{ top: ['-5%', '105%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative z-10 p-7 sm:p-9">
          <div className="flex items-start gap-5 mb-6">
            <div className="relative w-14 h-14 flex items-center justify-center rounded-xl bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.25)] flex-shrink-0">
              <Target className="w-6 h-6 text-red-400" />
              <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-red-500 animate-pulse" />
            </div>
            <div className="flex-1 min-w-0">
              <h2 className="text-xl sm:text-2xl font-black text-white uppercase tracking-[0.1em] mb-1">
                Accountability Engine
              </h2>
              <p className="text-xs font-mono tracking-wider" style={{ color: 'rgba(239,68,68,0.5)' }}>
                {operations.length} OPERATIONS ACROSS {Object.keys(grouped).length} TRACKS — {completedOps.size} EXECUTED
              </p>
            </div>
          </div>

          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl mb-6">
            Every operation below targets a specific vulnerability in the system that enabled this.
            These are not suggestions — they are documented pressure points. Check off each operation as you complete it.
            Your progress is tracked locally.
          </p>

          {/* Progress bar */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-zinc-900/80 rounded-full overflow-hidden border border-zinc-800/50">
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'linear-gradient(90deg, #991b1b, #dc2626, #ef4444)' }}
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>
            <span className="text-sm font-mono font-bold text-zinc-400 flex-shrink-0">
              <span className="text-white">{completedOps.size}</span>
              <span className="text-zinc-700 mx-1">/</span>
              {operations.length}
            </span>
          </div>
        </div>
      </div>

      {/* ── OPERATION TRACKS ── */}
      {trackOrder.map(track => {
        const trackOps = grouped[track];
        if (!trackOps) return null;
        const meta = trackMeta[track];
        const TrackIcon = meta.icon;
        const trackCompleted = trackOps.filter(op => completedOps.has(op.id)).length;

        return (
          <div key={track} className="glass-card overflow-hidden">
            {/* Track header */}
            <div className="p-6 sm:p-7 pb-0">
              <div className="flex items-center gap-3 mb-1">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg border flex-shrink-0"
                  style={{ borderColor: `${meta.color}25`, background: `${meta.color}08` }}>
                  <TrackIcon className="w-4 h-4" style={{ color: meta.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-black text-white uppercase tracking-[0.12em]">{meta.label}</h3>
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ color: meta.color, background: `${meta.color}10`, border: `1px solid ${meta.color}20` }}>
                      {meta.urgency}
                    </span>
                  </div>
                  <p className="text-[11px] font-mono mt-0.5" style={{ color: `${meta.color}60` }}>{meta.directive}</p>
                </div>
                <span className="text-xs font-mono text-zinc-600 flex-shrink-0">
                  {trackCompleted}/{trackOps.length}
                </span>
              </div>
            </div>

            {/* Operations list */}
            <div className="p-5 sm:p-6 pt-4 space-y-2">
              {trackOps.map((op) => {
                const isComplete = completedOps.has(op.id);
                return (
                  <div key={op.id}
                    className={`relative rounded-xl border p-4 transition-all duration-300 ${
                      isComplete
                        ? 'bg-[#030303] border-zinc-800/30'
                        : 'bg-[#060606] border-[rgba(255,255,255,0.06)] hover:border-[rgba(184,0,0,0.18)] hover:bg-[#080808]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {/* Checkbox */}
                      <button
                        onClick={() => toggleOp(op.id)}
                        className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-200 ${
                          isComplete
                            ? 'border-red-600/40 bg-red-500/10'
                            : 'border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/50'
                        }`}
                        aria-label={isComplete ? 'Mark incomplete' : 'Mark complete'}
                      >
                        {isComplete && <Check className="w-3.5 h-3.5 text-red-400" />}
                      </button>

                      {/* Op number */}
                      <span className="text-[10px] font-mono font-bold tracking-wider mt-1.5 flex-shrink-0 w-5 text-right"
                        style={{ color: isComplete ? `${meta.color}30` : `${meta.color}60` }}>
                        {String(op.id + 1).padStart(2, '0')}
                      </span>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm leading-relaxed transition-all duration-300 ${
                          isComplete ? 'text-zinc-600 line-through decoration-zinc-700' : 'text-zinc-200'
                        }`}>
                          {op.text}
                        </p>

                        {/* Action links + Copy */}
                        <div className="flex flex-wrap items-center gap-2 mt-3">
                          {op.urls.map((u, ui) => (
                            <a key={ui} href={u.url} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg transition-all duration-200"
                              style={{
                                color: meta.color,
                                background: `${meta.color}10`,
                                border: `1px solid ${meta.color}25`,
                              }}
                              onMouseEnter={e => {
                                e.currentTarget.style.background = `${meta.color}20`;
                                e.currentTarget.style.borderColor = `${meta.color}40`;
                              }}
                              onMouseLeave={e => {
                                e.currentTarget.style.background = `${meta.color}10`;
                                e.currentTarget.style.borderColor = `${meta.color}25`;
                              }}>
                              <ArrowUpRight className="w-3 h-3" />
                              {u.domain}
                            </a>
                          ))}
                          <button
                            onClick={() => copyText(
                              `${op.text}${op.urls.length > 0 ? '\n\nLinks:\n' + op.urls.map(u => u.url).join('\n') : ''}`,
                              `op-${op.id}`
                            )}
                            className="inline-flex items-center gap-1 px-2.5 py-1.5 text-[11px] font-bold rounded-lg text-zinc-500 bg-zinc-900/50 border border-zinc-800/40 hover:text-zinc-300 hover:border-zinc-700 transition-all"
                          >
                            {copied === `op-${op.id}` ? <><Check className="w-3 h-3" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* ── READY-TO-DEPLOY TEMPLATES ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {[
          {
            icon: Share2,
            title: 'Social Media Post',
            desc: 'Pre-written. Copy and deploy to any platform.',
            content: socialPost,
            key: 'social',
            color: '#ef4444',
          },
          {
            icon: Mail,
            title: 'Letter to Representative',
            desc: 'Professional template. Fill in your name and representative.',
            content: emailTemplate,
            key: 'email',
            color: '#3b82f6',
          },
          {
            icon: Megaphone,
            title: 'Press Tip Template',
            desc: 'Send directly to investigative journalists.',
            content: pressTip,
            key: 'press',
            color: '#a855f7',
          },
        ].map(tmpl => {
          const TmplIcon = tmpl.icon;
          return (
            <div key={tmpl.key} className="glass-card p-5 sm:p-6 flex flex-col">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-lg"
                  style={{ background: `${tmpl.color}10`, border: `1px solid ${tmpl.color}20` }}>
                  <TmplIcon className="w-3.5 h-3.5" style={{ color: tmpl.color }} />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">{tmpl.title}</h4>
                  <p className="text-[10px] text-zinc-600 mt-0.5">{tmpl.desc}</p>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-[#040404] border border-zinc-800/30 p-3 mb-3 max-h-32 overflow-y-auto">
                <pre className="text-[10px] text-zinc-500 font-mono whitespace-pre-wrap leading-relaxed">{tmpl.content.slice(0, 300)}...</pre>
              </div>
              <button
                onClick={() => copyText(tmpl.content, tmpl.key)}
                className="w-full py-2.5 text-xs font-black uppercase tracking-wider rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
                style={{
                  background: `${tmpl.color}10`,
                  border: `1px solid ${tmpl.color}20`,
                  color: tmpl.color,
                }}>
                {copied === tmpl.key ? <><Check className="w-3.5 h-3.5" /> Copied to Clipboard</> : <><Copy className="w-3.5 h-3.5" /> Copy Full Template</>}
              </button>
            </div>
          );
        })}
      </div>

      {/* ── OPERATIONS DASHBOARD ── */}
      <div className="glass-card p-6 sm:p-7">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-5">
          {[
            { v: viewCount, l: 'Investigation Views', c: '#71717a' },
            { v: completedOps.size, l: 'Ops Executed', c: '#ef4444' },
            { v: operations.length - completedOps.size, l: 'Remaining', c: '#eab308' },
            { v: Object.keys(grouped).length, l: 'Active Tracks', c: '#3b82f6' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-3 rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.04)]">
              <div className="text-2xl font-black font-mono" style={{ color: i === 0 ? '#fff' : stat.c }}>{stat.v}</div>
              <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider mt-1">{stat.l}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            { label: 'Copy Investigation Link', icon: Copy, text: shareUrl, key: 'link' },
            { label: 'Copy All Operations', icon: ClipboardCheck, text: operations.map((o, i) => `[${String(i + 1).padStart(2, '0')}] ${o.text}${o.urls.length > 0 ? '\n    → ' + o.urls.map(u => u.url).join('\n    → ') : ''}`).join('\n\n') + `\n\nSource: ${shareUrl}`, key: 'all-ops' },
          ].map(item => (
            <button key={item.key} onClick={() => copyText(item.text, item.key)}
              className="flex items-center gap-3 px-4 py-3 text-sm rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(184,0,0,0.20)] hover:bg-[#080808] transition-all text-left">
              <item.icon className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              <span className="text-zinc-400 flex-1 text-xs font-bold">{item.label}</span>
              {copied === item.key && <span className="text-[10px] text-red-400 font-bold">COPIED</span>}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */

export default function InvestigationPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const investigation = investigationDatabase[slug];

  if (!investigation) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <div className="glass-card p-12">
            <AlertTriangle className="w-12 h-12 text-zinc-600 mx-auto mb-6" />
            <h1 className="text-2xl font-black text-white uppercase tracking-wider mb-4">Investigation Not Found</h1>
            <p className="text-zinc-500 mb-8">The investigation &ldquo;{slug}&rdquo; could not be located in the archive.</p>
            <Link href="/investigations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all text-sm font-bold">
              <ArrowLeft className="w-4 h-4" /> Return to Archive
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const sev = investigation.severity || 'medium';
  const sevCfg = severityConfig[sev] || severityConfig.medium;
  const defendants = investigation.defendants || [];
  const affiliations = investigation.affiliations || [];
  const moneyTrail = investigation.moneyTrail || [];
  const timeline = investigation.timeline || [];
  const statutes = investigation.statutes || [];
  const sources = investigation.sources || [];

  const accountabilityIdx = investigation.content.findIndex((p: string) => p.startsWith('WHAT YOU CAN DO'));
  const accountabilityContent = accountabilityIdx >= 0 ? investigation.content[accountabilityIdx] : null;
  const mainContent = accountabilityIdx >= 0
    ? investigation.content.filter((_: string, i: number) => i !== accountabilityIdx)
    : investigation.content;

  const entityGroups = ['agency', 'corporation', 'individual', 'organization']
    .map(type => ({
      type,
      items: affiliations.filter((a: { type: string }) => a.type === type),
      config: entityTypeConfig[type],
    }))
    .filter(g => g.items.length > 0);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════════════════════
            HERO — Cinematic severity-coded opening
            ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="glass-card overflow-hidden relative mb-8"
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: sevCfg.gradient }} />
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-xl" style={{
            background: `linear-gradient(90deg, transparent 3%, ${sevCfg.color}50 25%, ${sevCfg.color}70 50%, ${sevCfg.color}50 75%, transparent 97%)`,
          }} />
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${sevCfg.color}10, transparent)` }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 p-7 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between mb-10">
              <Link href="/investigations"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-mono tracking-wider group">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> INVESTIGATIONS
              </Link>
              <div className="flex items-center gap-2.5 px-4 py-2 rounded-lg"
                style={{ border: `1px solid ${sevCfg.border}`, background: sevCfg.bg }}>
                <div className="w-2 h-2 rounded-full" style={{
                  backgroundColor: sevCfg.color,
                  boxShadow: `0 0 8px ${sevCfg.color}, 0 0 16px ${sevCfg.color}50`,
                  animation: 'bloodPulse 2s ease-in-out infinite',
                }} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: sevCfg.color }}>
                  {sevCfg.label} — LEVEL {sevCfg.level}
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.2em] bg-zinc-900/60 px-3 py-1.5 rounded-md border border-zinc-800/50">
                {investigation.category}
              </span>
              {investigation.date && (
                <span className="text-[11px] text-zinc-600 font-mono flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" /> {investigation.date}
                </span>
              )}
              {investigation.lastUpdated && (
                <span className="text-[11px] text-zinc-700 font-mono flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> Updated {investigation.lastUpdated}
                </span>
              )}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.92] tracking-tight mb-8">
              <GlitchText text={investigation.title} />
            </h1>

            {investigation.subtitle && (
              <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-4xl mb-10 font-light">
                {investigation.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center gap-3">
              {[
                defendants.length > 0 && { v: defendants.length, l: 'Defendants', c: '#ef4444', icon: <Users className="w-3.5 h-3.5" /> },
                affiliations.length > 0 && { v: affiliations.length, l: 'Entities', c: sevCfg.color, icon: <Building2 className="w-3.5 h-3.5" /> },
                moneyTrail.length > 0 && { v: moneyTrail.length, l: 'Transactions', c: '#eab308', icon: <DollarSign className="w-3.5 h-3.5" /> },
                statutes.length > 0 && { v: statutes.length, l: 'Statutes', c: '#a855f7', icon: <Scale className="w-3.5 h-3.5" /> },
                sources.length > 0 && { v: sources.length, l: 'Sources', c: '#52525b', icon: <FileText className="w-3.5 h-3.5" /> },
              ].filter(Boolean).map((s: any, i: number) => (
                <div key={i} className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-[#050505] border border-[rgba(255,255,255,0.04)]">
                  <span style={{ color: s.c }}>{s.icon}</span>
                  <span className="text-xl font-black font-mono text-white">{s.v}</span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-wider font-bold">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            EXECUTIVE SUMMARY + CASE FILE DOSSIER
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 mb-8">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            <div className="glass-card p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.15)]">
                  <span className="text-[10px] font-mono font-bold text-red-500/70">01</span>
                </div>
                <FileText className="w-4 h-4 text-zinc-500" />
                <h2 className="text-sm font-black text-white uppercase tracking-[0.15em]">Executive Summary</h2>
              </div>
              <div className="max-w-3xl">
                <p className="text-lg text-zinc-300 leading-[1.9] font-light">
                  <span className="text-5xl font-black text-white float-left mr-4 mt-1 leading-[0.85]" style={{
                    textShadow: `0 0 30px ${sevCfg.color}20`,
                  }}>
                    {investigation.summary.charAt(0)}
                  </span>
                  {investigation.summary.slice(1)}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }}>
            <div className="glass-card p-6 sm:p-7 lg:sticky lg:top-28">
              <div className="flex items-center gap-2.5 mb-6">
                <Fingerprint className="w-4 h-4 text-red-400/60" />
                <h3 className="text-xs font-black text-white uppercase tracking-[0.2em]">Case Dossier</h3>
              </div>

              <div className="space-y-0">
                {[
                  { l: 'Filed', v: investigation.date },
                  { l: 'Updated', v: investigation.lastUpdated },
                  { l: 'Page Updated', v: investigation.pageUpdatedDate },
                  { l: 'Event Origin', v: investigation.eventOriginDate },
                  { l: 'Last Activity', v: investigation.lastActivityDate },
                ].filter(r => r.v).map((row, i) => (
                  <div key={row.l} className={`flex justify-between items-center py-2.5 ${i > 0 ? 'border-t border-white/[0.03]' : ''}`}>
                    <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">{row.l}</span>
                    <span className="text-zinc-400 font-mono text-xs">{row.v}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-2.5 border-t border-white/[0.03]">
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Severity</span>
                  <span className="text-xs font-black uppercase tracking-wider" style={{ color: sevCfg.color }}>{sev}</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-t border-white/[0.03]">
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Category</span>
                  <span className="text-zinc-400 text-xs">{investigation.category}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2.5 mt-6 pt-5 border-t border-white/[0.04]">
                {[
                  { v: affiliations.length, l: 'Entities', c: sevCfg.color },
                  { v: defendants.length, l: 'Defendants', c: '#ef4444' },
                  { v: moneyTrail.length, l: 'Txns', c: '#eab308' },
                ].map((stat, i) => (
                  <div key={i} className="text-center py-2.5 rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.04)]">
                    <div className="text-xl font-black font-mono text-white">{stat.v}</div>
                    <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider mt-0.5">{stat.l}</div>
                  </div>
                ))}
              </div>

              {investigation.tags?.length > 0 && (
                <div className="mt-5 pt-5 border-t border-white/[0.04]">
                  <div className="flex flex-wrap gap-1.5">
                    {investigation.tags.map((tag: string, idx: number) => (
                      <Link key={idx} href={`/investigations?tag=${encodeURIComponent(tag)}`}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#060606] border border-[rgba(255,255,255,0.05)] text-zinc-500 hover:text-zinc-300 hover:border-[rgba(184,0,0,0.25)] transition-all">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            CONNECTED ENTITIES — Grouped by type
            ══════════════════════════════════════════════════════════ */}
        {affiliations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="mb-8">
            <CollapsibleGlass
              number="02" title="Connected Entities" icon={<Users className="w-4 h-4" />}
              count={affiliations.length}
              badge={
                <div className="flex items-center gap-1.5">
                  {entityGroups.map(g => (
                    <span key={g.type} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ color: g.config.color, background: g.config.bg, border: `1px solid ${g.config.color}20` }}>
                      {g.items.length}
                    </span>
                  ))}
                </div>
              }
            >
              <div className="space-y-7">
                {entityGroups.map(group => {
                  const TypeIcon = group.config.icon;
                  const plural = group.type === 'agency' ? 'Agencies' : group.type === 'corporation' ? 'Corporations' : group.type === 'individual' ? 'Individuals' : 'Organizations';
                  return (
                    <div key={group.type}>
                      <div className="flex items-center gap-2.5 mb-3">
                        <TypeIcon className="w-3.5 h-3.5" style={{ color: group.config.color }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.2em]" style={{ color: group.config.color }}>{plural}</span>
                        <div className="flex-1 h-px ml-2" style={{ background: `${group.config.color}12` }} />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {group.items.map((aff: any, idx: number) => (
                          <div key={idx}
                            className="rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.05)] p-4 transition-all duration-300 hover:border-[rgba(184,0,0,0.18)] hover:bg-[#080808] group/card"
                            style={{ borderLeftWidth: 3, borderLeftColor: `${group.config.color}35` }}>
                            <div className="flex items-start justify-between gap-2 mb-1.5">
                              <div className="min-w-0">
                                {aff.href ? (
                                  <Link href={aff.href} className="font-bold text-sm text-zinc-200 hover:text-white transition-colors block truncate">
                                    {aff.name}
                                  </Link>
                                ) : (
                                  <span className="font-bold text-sm text-zinc-200 block truncate">{aff.name}</span>
                                )}
                              </div>
                              <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase tracking-wider rounded-md flex-shrink-0"
                                style={{ color: group.config.color, background: group.config.bg, border: `1px solid ${group.config.color}18` }}>
                                {group.config.label}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">{aff.relationship}</p>
                            {aff.href && (
                              <Link href={aff.href}
                                className="inline-flex items-center gap-1 mt-2.5 text-[10px] text-zinc-600 hover:text-red-400 transition-colors font-mono opacity-0 group-hover/card:opacity-100">
                                View Profile <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            NETWORK ANALYSIS
            ══════════════════════════════════════════════════════════ */}
        {(defendants.length > 0 || affiliations.length > 0) && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mb-8">
            <div className="glass-card p-7 sm:p-9">
              <div className="flex items-center gap-3 mb-7">
                <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.15)]">
                  <span className="text-[10px] font-mono font-bold text-red-500/70">03</span>
                </div>
                <TrendingUp className="w-4 h-4 text-zinc-500" />
                <h2 className="text-sm font-black text-white uppercase tracking-[0.15em]">Network Analysis</h2>
              </div>
              <NetworkTree investigation={{
                title: investigation.title, slug,
                severity: investigation.severity || 'medium',
                defendants: investigation.defendants,
                affiliations: investigation.affiliations,
                moneyTrail: investigation.moneyTrail,
                timeline: investigation.timeline,
              }} />
            </div>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            DEFENDANTS — Full-width individual dossier cards
            ══════════════════════════════════════════════════════════ */}
        {defendants.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mb-8">
            <CollapsibleGlass
              number="04" title="Defendants & Charges" icon={<Gavel className="w-4 h-4" />}
              count={defendants.length} accentColor="#ef4444"
              badge={
                <div className="flex items-center gap-2">
                  {Object.entries(defendants.reduce((acc: Record<string, number>, d: any) => {
                    acc[d.status] = (acc[d.status] || 0) + 1; return acc;
                  }, {})).map(([status, count]) => {
                    const st = statusColors[status] || statusColors.pending;
                    return (
                      <span key={status} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md"
                        style={{ color: st.text, background: st.bg, border: `1px solid ${st.border}` }}>
                        {count as number} {status}
                      </span>
                    );
                  })}
                </div>
              }
            >
              <div className="space-y-4">
                {defendants.map((def: any, idx: number) => {
                  const st = statusColors[def.status] || statusColors.pending;
                  return (
                    <div key={idx} className="rounded-xl bg-[#050505] border border-[rgba(255,255,255,0.05)] overflow-hidden hover:border-[rgba(184,0,0,0.15)] transition-all duration-300">
                      <div className="h-[3px] w-full" style={{ background: `linear-gradient(90deg, ${st.dot}, ${st.dot}60, transparent)` }} />
                      <div className="p-5 sm:p-6">
                        {/* Header row */}
                        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                          <div>
                            <Link href={`/entities/individuals/${slugifyName(def.name)}`}
                              className="text-lg sm:text-xl font-black text-white hover:text-red-400 transition-colors uppercase tracking-wide">
                              {def.name}
                            </Link>
                            <p className="text-sm text-zinc-500 mt-1">{def.role}</p>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                              style={{ background: st.bg, border: `1px solid ${st.border}` }}>
                              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: st.dot, boxShadow: `0 0 6px ${st.dot}` }} />
                              <span className="text-[10px] font-black uppercase tracking-wider" style={{ color: st.text }}>{def.status}</span>
                            </div>
                            {def.appealStatus && (
                              <span className="text-[9px] font-mono font-bold px-2 py-1 rounded-md bg-blue-500/[0.06] border border-blue-500/20 text-blue-400/80 uppercase">
                                Appeal: {def.appealStatus}
                              </span>
                            )}
                          </div>
                        </div>

                        {/* Charges */}
                        {def.charges?.length > 0 && (
                          <div className="mb-4">
                            <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-[0.15em] block mb-2">Charges</span>
                            <div className="flex flex-wrap gap-2">
                              {def.charges.map((charge: string, ci: number) => (
                                <span key={ci} className="text-xs text-zinc-300 px-3 py-1.5 rounded-lg bg-[rgba(220,38,38,0.04)] border border-[rgba(220,38,38,0.12)]">
                                  {charge}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Outcomes + Dates grid */}
                        {(def.sentence || def.fine || def.restitution || def.indictmentDate || def.convictionDate || def.releaseDate || def.pardonDate) && (
                          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 pt-4 border-t border-white/[0.04]">
                            {def.sentence && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Sentence</span>
                                <span className="text-sm text-zinc-200 font-semibold">{def.sentence}</span>
                              </div>
                            )}
                            {def.fine && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Fine</span>
                                <span className="text-sm text-yellow-400/80 font-mono font-bold">{def.fine}</span>
                              </div>
                            )}
                            {def.restitution && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Restitution</span>
                                <span className="text-sm text-yellow-400/80 font-mono font-bold">{def.restitution}</span>
                              </div>
                            )}
                            {def.indictmentDate && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Indicted</span>
                                <span className="text-xs text-zinc-400 font-mono">{def.indictmentDate}</span>
                              </div>
                            )}
                            {def.convictionDate && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Convicted</span>
                                <span className="text-xs text-zinc-400 font-mono">{def.convictionDate}</span>
                              </div>
                            )}
                            {def.releaseDate && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Released</span>
                                <span className="text-xs text-zinc-400 font-mono">{def.releaseDate}</span>
                              </div>
                            )}
                            {def.pardonDate && (
                              <div className="py-2">
                                <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Pardoned</span>
                                <span className="text-xs text-zinc-400 font-mono">{def.pardonDate}</span>
                                {def.pardonedBy && <span className="text-[10px] text-purple-400/60 block mt-0.5">by {def.pardonedBy}</span>}
                              </div>
                            )}
                          </div>
                        )}

                        {def.notes && (
                          <p className="text-[11px] text-zinc-600 mt-3 pt-3 border-t border-white/[0.03] italic leading-relaxed">{def.notes}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            APPLICABLE LAWS & STATUTES
            ══════════════════════════════════════════════════════════ */}
        {statutes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-8">
            <CollapsibleGlass
              number="05" title="Applicable Laws & Statutes" icon={<Scale className="w-4 h-4" />}
              count={statutes.length} accentColor="#a855f7"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {statutes.map((statute: { code: string; description?: string }, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.05)] hover:border-purple-500/15 transition-all">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 rounded-lg bg-purple-500/[0.06] border border-purple-500/[0.12] mt-0.5">
                      <BookOpen className="w-3.5 h-3.5 text-purple-400/60" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-200">{statute.code}</p>
                      {statute.description && (
                        <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">{statute.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            ACCOUNTABILITY ENGINE
            ══════════════════════════════════════════════════════════ */}
        {accountabilityContent && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mb-8">
            <AccountabilityEngine content={accountabilityContent} slug={slug} title={investigation.title} summary={investigation.summary} />
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            MONEY TRAIL — Forensic financial ledger
            ══════════════════════════════════════════════════════════ */}
        {moneyTrail.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mb-8">
            <CollapsibleGlass
              number="07" title="Money Trail" icon={<DollarSign className="w-4 h-4" />}
              count={moneyTrail.length} accentColor="#eab308"
              badge={
                <span className="text-[10px] font-mono text-yellow-500/40">
                  {moneyTrail.filter((m: any) => !m.documented).length > 0 &&
                    `${moneyTrail.filter((m: any) => !m.documented).length} unverified`
                  }
                </span>
              }
            >
              {/* Table header */}
              <div className="hidden lg:grid grid-cols-[90px_1fr_32px_1fr_1fr_130px] gap-3 px-4 py-2.5 text-[9px] font-mono text-zinc-600 uppercase tracking-wider mb-2 border-b border-white/[0.03]">
                <span>Date</span><span>From</span><span /><span>To</span><span>Purpose</span><span className="text-right">Amount</span>
              </div>

              <div className="space-y-1">
                {moneyTrail.map((item: any, idx: number) => (
                  <div key={idx} className={`rounded-xl p-4 transition-all duration-200 hover:bg-[#080808] ${
                    idx % 2 === 0 ? 'bg-[#050505]' : 'bg-[#040404]'
                  } border border-transparent hover:border-yellow-500/[0.08]`}>
                    {/* Desktop layout */}
                    <div className="hidden lg:grid grid-cols-[90px_1fr_32px_1fr_1fr_130px] gap-3 items-center">
                      <span className="text-[11px] font-mono text-zinc-600">{item.date}</span>
                      <span className="text-sm text-zinc-300 truncate">{item.from}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-yellow-500/30 mx-auto" />
                      <span className="text-sm text-zinc-300 truncate">{item.to}</span>
                      <span className="text-[11px] text-zinc-500 truncate">{item.purpose}</span>
                      <div className="text-right flex items-center justify-end gap-2">
                        <span className="text-base font-black font-mono text-yellow-400/90">{item.amount}</span>
                        {!item.documented && (
                          <span className="text-[7px] text-yellow-600/50 uppercase font-bold tracking-wider px-1.5 py-0.5 bg-yellow-500/[0.04] border border-yellow-500/10 rounded-md">!</span>
                        )}
                      </div>
                    </div>
                    {/* Mobile layout */}
                    <div className="lg:hidden space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-mono text-zinc-600">{item.date}</span>
                        <span className="text-base font-black font-mono text-yellow-400/90">{item.amount}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-zinc-300 truncate">{item.from}</span>
                        <ArrowRight className="w-3 h-3 text-yellow-500/30 flex-shrink-0" />
                        <span className="text-zinc-300 truncate">{item.to}</span>
                      </div>
                      {item.purpose && <p className="text-[11px] text-zinc-500">{item.purpose}</p>}
                      {!item.documented && <span className="text-[9px] text-yellow-600/50 uppercase">Unverified</span>}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            FULL INVESTIGATION — Editorial reading experience
            ══════════════════════════════════════════════════════════ */}
        {mainContent?.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="mb-8">
            <CollapsibleGlass
              number="08" title="Full Investigation" icon={<FileText className="w-4 h-4" />}
            >
              <div className="max-w-4xl space-y-7">
                {mainContent.map((paragraph: string, idx: number) => {
                  const colonIdx = paragraph.indexOf(':');
                  const hasHeader = colonIdx > 0 && colonIdx < 60
                    && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase()
                    && !/\d/.test(paragraph.substring(0, colonIdx));

                  if (hasHeader) {
                    const heading = paragraph.substring(0, colonIdx);
                    const body = paragraph.substring(colonIdx + 1).trim();
                    return (
                      <div key={idx} className="mt-10 first:mt-0">
                        <div className="rounded-xl bg-[#040404] border border-[rgba(255,255,255,0.04)] p-5 sm:p-6"
                          style={{ borderLeftWidth: 3, borderLeftColor: `${sevCfg.color}35` }}>
                          <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: sevCfg.color }}>{heading}</h3>
                          <p className="text-[15px] text-zinc-300 leading-[1.9]">{body}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className={`leading-[1.9] ${
                      idx === 0
                        ? 'text-[17px] text-zinc-200 font-light'
                        : 'text-[15px] text-zinc-400'
                    }`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            TIMELINE — Vertical tracker with event types
            ══════════════════════════════════════════════════════════ */}
        {timeline.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mb-8">
            <CollapsibleGlass
              number="09" title="Timeline" icon={<Calendar className="w-4 h-4" />}
              count={timeline.length} defaultOpen={timeline.length <= 25}
            >
              <div className="relative pl-7">
                <div className="absolute left-[4px] top-2 bottom-2 w-px" style={{
                  background: `linear-gradient(to bottom, ${sevCfg.color}30, ${sevCfg.color}08)`,
                }} />

                {timeline.map((item: any, idx: number) => {
                  const typeColors: Record<string, string> = {
                    critical: '#ef4444', legal: '#a855f7', political: '#8b5cf6', financial: '#eab308', default: '#3f3f46',
                  };
                  const dotColor = typeColors[item.type || 'default'] || typeColors.default;
                  const isMajor = item.type === 'critical' || item.type === 'legal';

                  return (
                    <div key={idx} className={`relative flex items-start gap-5 py-3 group ${
                      isMajor ? '' : 'opacity-80 hover:opacity-100 transition-opacity'
                    }`}>
                      <div className="absolute -left-7 mt-[8px]">
                        <div className={`rounded-full ${isMajor ? 'w-[9px] h-[9px]' : 'w-[7px] h-[7px]'}`}
                          style={{
                            backgroundColor: dotColor,
                            boxShadow: isMajor ? `0 0 10px ${dotColor}50, 0 0 20px ${dotColor}20` : 'none',
                            marginLeft: isMajor ? '-1px' : '0',
                          }}
                        />
                      </div>
                      <span className="text-[10px] text-zinc-600 font-mono w-28 flex-shrink-0 pt-0.5 tabular-nums">{item.date}</span>
                      <div className="flex-1 min-w-0">
                        <p className={`text-sm leading-relaxed ${isMajor ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>
                          {item.event}
                        </p>
                        {item.type && item.type !== 'default' && (
                          <span className="text-[8px] font-mono uppercase tracking-wider mt-1 inline-block" style={{ color: `${dotColor}60` }}>
                            {item.type}
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            SOURCES & DOCUMENTATION
            ══════════════════════════════════════════════════════════ */}
        {sources.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mb-8">
            <CollapsibleGlass
              number="10" title="Sources & Documentation" icon={<ExternalLink className="w-4 h-4" />}
              count={sources.length} defaultOpen={sources.length <= 20}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sources.map((source: any, idx: number) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3.5 rounded-xl bg-[#050505] border border-[rgba(255,255,255,0.04)] hover:border-[rgba(184,0,0,0.18)] hover:bg-[#080808] transition-all duration-200">
                    <span className="text-[10px] text-zinc-700 font-mono mt-0.5 flex-shrink-0 w-6 text-right tabular-nums">{idx + 1}</span>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors block truncate leading-snug">
                        {source.title}
                      </span>
                      <span className="text-[9px] text-zinc-700 font-mono uppercase tracking-wider mt-0.5 block">
                        {source.type}
                      </span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-800 group-hover:text-red-400 transition-colors mt-0.5 flex-shrink-0" />
                  </a>
                ))}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

      </div>
    </div>
  );
}
