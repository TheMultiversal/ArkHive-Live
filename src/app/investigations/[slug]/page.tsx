'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Users, FileText,
  ExternalLink, ShieldAlert, DollarSign, Building2,
  Gavel, BookOpen, Megaphone, Mail, Share2, Copy,
  CheckCircle, Eye, ArrowUpRight, Landmark, ClipboardCheck,
  Crosshair, Globe, ChevronDown, Shield, Calendar,
  Fingerprint, Scale, Clock, TrendingUp,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const NetworkTree = dynamic(() => import('@/components/investigation/NetworkTree'), { ssr: false });

/* ================================================================
   CONSTANTS
   ================================================================ */

const severityConfig: Record<string, {
  color: string; glow: string; bg: string; border: string;
  label: string; level: string; gradient: string;
}> = {
  critical: {
    color: '#ef4444', glow: 'rgba(239,68,68,0.12)', bg: 'rgba(239,68,68,0.06)',
    border: 'rgba(239,68,68,0.30)', label: 'CRITICAL', level: 'I',
    gradient: 'linear-gradient(135deg, rgba(239,68,68,0.08) 0%, transparent 60%)',
  },
  high: {
    color: '#f97316', glow: 'rgba(249,115,22,0.12)', bg: 'rgba(249,115,22,0.06)',
    border: 'rgba(249,115,22,0.30)', label: 'HIGH', level: 'II',
    gradient: 'linear-gradient(135deg, rgba(249,115,22,0.08) 0%, transparent 60%)',
  },
  medium: {
    color: '#eab308', glow: 'rgba(234,179,8,0.10)', bg: 'rgba(234,179,8,0.05)',
    border: 'rgba(234,179,8,0.25)', label: 'ELEVATED', level: 'III',
    gradient: 'linear-gradient(135deg, rgba(234,179,8,0.06) 0%, transparent 60%)',
  },
  low: {
    color: '#71717a', glow: 'rgba(113,113,122,0.08)', bg: 'rgba(113,113,122,0.04)',
    border: 'rgba(113,113,122,0.20)', label: 'STANDARD', level: 'IV',
    gradient: 'linear-gradient(135deg, rgba(113,113,122,0.05) 0%, transparent 60%)',
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

const trackMeta: Record<OpTrack, { label: string; directive: string; icon: typeof Crosshair; color: string }> = {
  expose: { label: 'EXPOSE', directive: 'Mass awareness. Make the evidence impossible to suppress.', icon: Crosshair, color: '#ef4444' },
  investigate: { label: 'INVESTIGATE', directive: 'Extract records. Build the evidence chain.', icon: ClipboardCheck, color: '#3b82f6' },
  legal: { label: 'PROSECUTE', directive: 'Use every legal mechanism that exists.', icon: Gavel, color: '#a855f7' },
  pressure: { label: 'PRESSURE', directive: 'Force the system to respond or expose its collapse.', icon: Landmark, color: '#ea580c' },
  economic: { label: 'DISRUPT', directive: 'Target the financial structures protecting them.', icon: DollarSign, color: '#eab308' },
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
   REUSABLE GLASS COMPONENTS
   ================================================================ */

function GlassPanel({ children, className = '', style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div className={`glass-card p-6 sm:p-8 ${className}`} style={style}>
      {children}
    </div>
  );
}

function SectionHeader({ number, title, count, icon }: {
  number: string;
  title: string;
  count?: number;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.15)]">
        <span className="text-[10px] font-mono font-bold text-red-500/70">{number}</span>
      </div>
      {icon && <span className="text-zinc-500">{icon}</span>}
      <h2 className="text-sm font-black text-white uppercase tracking-[0.15em]">{title}</h2>
      {typeof count === 'number' && (
        <span className="ml-auto text-[10px] font-mono text-zinc-600 bg-zinc-900/50 px-2.5 py-1 rounded-md border border-zinc-800/50">
          {count}
        </span>
      )}
    </div>
  );
}

function CollapsibleGlass({
  title, number, icon, children, defaultOpen = true, count, badge,
}: {
  title: string;
  number: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  count?: number;
  badge?: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="glass-card overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 p-5 sm:p-6 cursor-pointer select-none group"
      >
        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.15)] flex-shrink-0">
          <span className="text-[10px] font-mono font-bold text-red-500/70">{number}</span>
        </div>
        <span className="text-zinc-500 flex-shrink-0">{icon}</span>
        <h2 className="text-sm font-black text-white uppercase tracking-[0.15em]">{title}</h2>
        {typeof count === 'number' && (
          <span className="text-[10px] font-mono text-zinc-600 bg-zinc-900/50 px-2 py-0.5 rounded-md border border-zinc-800/50 ml-1">
            {count}
          </span>
        )}
        <div className="flex-1" />
        {badge}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
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
            <div className="px-5 sm:px-6 pb-6 border-t border-[rgba(184,0,0,0.08)] pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function InnerCard({ children, className = '', style }: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      className={`rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.06)] p-4 transition-all duration-300 hover:border-[rgba(184,0,0,0.20)] hover:bg-[#080808] ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

/* ================================================================
   ACCOUNTABILITY ENGINE
   ================================================================ */

function AccountabilitySection({ content, slug, title }: { content: string; slug: string; title: string }) {
  const [actionsTaken, setActionsTaken] = useState(0);
  const [hasTakenAction, setHasTakenAction] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    const key = `arkhive_accountability_${slug}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      const data = JSON.parse(stored);
      setActionsTaken(data.actions || 0);
      setHasTakenAction(data.userActed || false);
    }
    const viewKey = `arkhive_views_${slug}`;
    const views = parseInt(localStorage.getItem(viewKey) || '0', 10) + 1;
    localStorage.setItem(viewKey, String(views));
    setViewCount(views);
  }, [slug]);

  const handleTakeAction = () => {
    if (hasTakenAction) return;
    const key = `arkhive_accountability_${slug}`;
    const newCount = actionsTaken + 1;
    setActionsTaken(newCount);
    setHasTakenAction(true);
    localStorage.setItem(key, JSON.stringify({ actions: newCount, userActed: true }));
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

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

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://arkhive.live/investigations/${slug}`;
  const tweetText = `Exposed: ${title}. Read the full investigation and take action.`;
  const emailSubject = `Investigation: ${title}`;
  const emailBody = `I wanted to share this investigation with you:\n\n${title}\n\nRead more: ${shareUrl}\n\nThis investigation details critical findings that demand public attention.`;

  return (
    <div className="space-y-5">
      {/* Engine header */}
      <div className="glass-card overflow-hidden relative">
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative z-10 p-6 sm:p-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.20)] flex-shrink-0">
              <Crosshair className="w-5 h-5 text-red-400" />
            </div>
            <div>
              <h2 className="text-lg font-black text-white uppercase tracking-[0.15em]">Accountability Engine</h2>
              <p className="text-[11px] text-red-400/50 font-mono tracking-wider mt-0.5">
                {operations.length} DIRECTIVES LOADED
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-3xl">
            These are not suggestions. These are operations. Each directive targets a specific
            vulnerability in the system that allowed this to happen.
          </p>
        </div>
      </div>

      {/* Operation tracks */}
      {trackOrder.map(track => {
        const trackOps = grouped[track];
        if (!trackOps) return null;
        const meta = trackMeta[track];
        const TrackIcon = meta.icon;
        return (
          <div key={track} className="glass-card p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg border flex-shrink-0"
                style={{ borderColor: `${meta.color}30`, background: `${meta.color}08` }}>
                <TrackIcon className="w-3.5 h-3.5" style={{ color: meta.color }} />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.15em]">{meta.label}</h3>
                <p className="text-[10px] font-mono" style={{ color: `${meta.color}70` }}>{meta.directive}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {trackOps.map((op) => (
                <InnerCard key={op.id}>
                  <div className="flex items-start gap-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider mt-0.5 flex-shrink-0"
                      style={{ color: `${meta.color}80` }}>
                      {String(op.id + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm text-zinc-300 leading-relaxed mb-2">{op.text}</p>
                      {op.urls.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {op.urls.map((u, ui) => (
                            <a key={ui} href={u.url} target="_blank" rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold rounded-md text-red-400 bg-red-950/40 border border-red-900/30 hover:bg-red-900/30 hover:border-red-800/50 transition-all">
                              <ArrowUpRight className="w-3 h-3" />{u.domain}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </InnerCard>
              ))}
            </div>
          </div>
        );
      })}

      {/* Supplementary arsenal */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {[
          { icon: FileText, title: 'Open Records', desc: 'Force disclosure of internal communications, decision logs, and financial records.' },
          { icon: Megaphone, title: 'Media Amplification', desc: 'Send evidence packages to investigative journalists and independent outlets.' },
          { icon: ShieldAlert, title: 'Evidence Preservation', desc: 'Archive everything. Screenshots, documents, public statements, financial disclosures.' },
          { icon: Globe, title: 'International Pressure', desc: 'When domestic institutions are captured, international scrutiny becomes leverage.' },
        ].map((card, i) => {
          const CardIcon = card.icon;
          return (
            <div key={i} className="glass-card p-4 sm:p-5">
              <div className="flex items-center gap-2 mb-2.5">
                <CardIcon className="w-4 h-4 text-red-500/60" />
                <span className="text-[10px] font-black text-zinc-300 uppercase tracking-wider">{card.title}</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">{card.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Dashboard + Amplification */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <Eye className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-[0.12em]">Operations Dashboard</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <InnerCard className="text-center">
              <div className="text-2xl font-black text-white font-mono">{viewCount}</div>
              <div className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mt-1">Views</div>
            </InnerCard>
            <InnerCard className="text-center">
              <div className="text-2xl font-black text-red-400 font-mono">{actionsTaken}</div>
              <div className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mt-1">Ops Executed</div>
            </InnerCard>
          </div>
          <button onClick={handleTakeAction} disabled={hasTakenAction}
            className={`w-full py-3 text-sm font-black uppercase tracking-[0.12em] transition-all duration-300 flex items-center justify-center gap-2 rounded-xl ${
              hasTakenAction
                ? 'bg-[rgba(184,0,0,0.08)] border border-[rgba(184,0,0,0.20)] text-red-400/50 cursor-default'
                : 'bg-gradient-to-r from-red-950/60 to-red-900/30 border border-red-800/40 text-red-300 hover:from-red-900/60 hover:to-red-800/40 hover:border-red-700/60 hover:shadow-[0_0_24px_rgba(184,0,0,0.12)]'
            }`}>
            {hasTakenAction
              ? <><CheckCircle className="w-4 h-4" />Operation Logged</>
              : <><Crosshair className="w-4 h-4" />Log Operation Complete</>}
          </button>
        </div>

        <div className="glass-card p-5 sm:p-6">
          <div className="flex items-center gap-3 mb-5">
            <Share2 className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-[0.12em]">Amplification Network</h3>
          </div>
          <div className="space-y-2">
            {[
              { label: 'Copy Investigation Link', icon: Copy, text: shareUrl, key: 'link' },
              { label: 'Copy Post Text', icon: Share2, text: `${tweetText} ${shareUrl}`, key: 'tweet' },
            ].map(item => (
              <button key={item.key} onClick={() => copyToClipboard(item.text, item.key)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(184,0,0,0.25)] hover:bg-[#080808] transition-all text-left">
                <item.icon className="w-4 h-4 text-zinc-600 flex-shrink-0" />
                <span className="text-zinc-300 flex-1">{item.label}</span>
                {copied === item.key && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
              </button>
            ))}
            <a href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(184,0,0,0.25)] hover:bg-[#080808] transition-all">
              <Mail className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Email This Investigation</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-700" />
            </a>
            <button onClick={() => {
              const allOps = operations.map((o, i) => `[OP-${String(i + 1).padStart(2, '0')}] ${o.text}${o.urls.length > 0 ? ' -- ' + o.urls.map(u => u.url).join(', ') : ''}`).join('\n');
              copyToClipboard(`${title}\n\nAccountability Operations:\n${allOps}\n\nSource: ${shareUrl}`, 'ops');
            }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.06)] hover:border-[rgba(184,0,0,0.25)] hover:bg-[#080808] transition-all text-left">
              <ClipboardCheck className="w-4 h-4 text-zinc-600 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Copy All Operations</span>
              {copied === 'ops' && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
            </button>
          </div>
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
            <p className="text-zinc-500 mb-8">The investigation &ldquo;{slug}&rdquo; could not be located.</p>
            <Link href="/investigations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all text-sm font-bold">
              <ArrowLeft className="w-4 h-4" /> Back to Investigations
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
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ══════════════════════════════════════════════════════════
            HERO — Glass panel with severity gradient, massive title
            ══════════════════════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-card overflow-hidden relative mb-6"
        >
          {/* Severity color wash */}
          <div className="absolute inset-0 pointer-events-none" style={{ background: sevCfg.gradient }} />
          <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-xl" style={{
            background: `linear-gradient(90deg, transparent 5%, ${sevCfg.color}40 30%, ${sevCfg.color}60 50%, ${sevCfg.color}40 70%, transparent 95%)`,
          }} />
          <motion.div
            className="absolute left-0 right-0 h-px pointer-events-none"
            style={{ background: `linear-gradient(90deg, transparent, ${sevCfg.color}08, transparent)` }}
            animate={{ top: ['0%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          />

          <div className="relative z-10 p-6 sm:p-8 lg:p-10">
            {/* Navigation + severity badge */}
            <div className="flex items-center justify-between mb-8">
              <Link href="/investigations"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-mono tracking-wider">
                <ArrowLeft className="w-3.5 h-3.5" /> INVESTIGATIONS
              </Link>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
                style={{ border: `1px solid ${sevCfg.border}`, background: sevCfg.bg }}>
                <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: sevCfg.color, boxShadow: `0 0 8px ${sevCfg.color}` }} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: sevCfg.color }}>
                  {sevCfg.label} — LVL {sevCfg.level}
                </span>
              </div>
            </div>

            {/* Category + date */}
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.15em] bg-zinc-900/50 px-2.5 py-1 rounded-md border border-zinc-800/50">
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

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-[0.95] tracking-tight mb-6">
              <GlitchText text={investigation.title} />
            </h1>

            {/* Subtitle */}
            {investigation.subtitle && (
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-4xl mb-8">
                {investigation.subtitle}
              </p>
            )}

            {/* Stats bar */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {[
                defendants.length > 0 && { v: defendants.length, l: 'Defendants', c: '#ef4444', icon: <Users className="w-3.5 h-3.5" /> },
                affiliations.length > 0 && { v: affiliations.length, l: 'Entities', c: sevCfg.color, icon: <Building2 className="w-3.5 h-3.5" /> },
                moneyTrail.length > 0 && { v: moneyTrail.length, l: 'Transactions', c: '#eab308', icon: <DollarSign className="w-3.5 h-3.5" /> },
                statutes.length > 0 && { v: statutes.length, l: 'Statutes', c: '#71717a', icon: <Scale className="w-3.5 h-3.5" /> },
                sources.length > 0 && { v: sources.length, l: 'Sources', c: '#52525b', icon: <FileText className="w-3.5 h-3.5" /> },
              ].filter(Boolean).map((s: any, i: number) => (
                <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#060606] border border-[rgba(255,255,255,0.05)]">
                  <span style={{ color: s.c }}>{s.icon}</span>
                  <span className="text-lg font-black font-mono text-white">{s.v}</span>
                  <span className="text-[9px] text-zinc-600 uppercase tracking-wider font-bold">{s.l}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ══════════════════════════════════════════════════════════
            SUMMARY + CASE FILE — Two glass panels side by side
            ══════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-5 mb-6">
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }}>
            <GlassPanel>
              <SectionHeader number="01" title="Executive Summary" icon={<FileText className="w-4 h-4" />} />
              <p className="text-base text-zinc-300 leading-[1.85]">
                {investigation.summary}
              </p>
            </GlassPanel>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <div className="glass-card p-6 sm:p-7 lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-5">
                <Fingerprint className="w-4 h-4 text-red-400/70" />
                <h3 className="text-xs font-black text-white uppercase tracking-[0.15em]">Case File</h3>
              </div>
              <div className="space-y-3">
                {[
                  { l: 'Date Filed', v: investigation.date },
                  { l: 'Last Updated', v: investigation.lastUpdated },
                  { l: 'Event Origin', v: investigation.eventOriginDate },
                  { l: 'Last Activity', v: investigation.lastActivityDate },
                ].filter(r => r.v).map(row => (
                  <div key={row.l} className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                    <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">{row.l}</span>
                    <span className="text-zinc-400 font-mono text-xs">{row.v}</span>
                  </div>
                ))}
                <div className="flex justify-between items-center py-1.5 border-b border-white/[0.03]">
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Severity</span>
                  <span className="text-xs font-black uppercase" style={{ color: sevCfg.color }}>{sev}</span>
                </div>
                <div className="flex justify-between items-center py-1.5">
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Category</span>
                  <span className="text-zinc-400 text-xs">{investigation.category}</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mt-5 pt-4 border-t border-white/[0.04]">
                {[
                  { v: affiliations.length, l: 'Entities', c: sevCfg.color },
                  { v: defendants.length, l: 'Defendants', c: '#ef4444' },
                  { v: moneyTrail.length, l: 'Txns', c: '#eab308' },
                ].map((stat, i) => (
                  <InnerCard key={i} className="text-center !p-2.5">
                    <div className="text-lg font-black font-mono text-white">{stat.v}</div>
                    <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider">{stat.l}</div>
                  </InnerCard>
                ))}
              </div>

              {/* Tags */}
              {investigation.tags?.length > 0 && (
                <div className="mt-5 pt-4 border-t border-white/[0.04]">
                  <div className="flex flex-wrap gap-1.5">
                    {investigation.tags.map((tag: string, idx: number) => (
                      <Link key={idx} href={`/investigations?tag=${encodeURIComponent(tag)}`}
                        className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md bg-[#060606] border border-[rgba(255,255,255,0.06)] text-zinc-500 hover:text-zinc-300 hover:border-[rgba(184,0,0,0.25)] transition-all">
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
            CONNECTED ENTITIES — Collapsible glass, grouped by type
            ══════════════════════════════════════════════════════════ */}
        {affiliations.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.12 }} className="mb-6">
            <CollapsibleGlass
              number="02"
              title="Connected Entities"
              icon={<Users className="w-4 h-4" />}
              count={affiliations.length}
              badge={
                <div className="flex items-center gap-1.5">
                  {entityGroups.map(g => (
                    <span key={g.type} className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-md"
                      style={{ color: g.config.color, background: g.config.bg, border: `1px solid ${g.config.color}25` }}>
                      {g.items.length}
                    </span>
                  ))}
                </div>
              }
            >
              <div className="space-y-6">
                {entityGroups.map(group => {
                  const TypeIcon = group.config.icon;
                  const typePlural = group.type === 'agency' ? 'Agencies' : group.type === 'corporation' ? 'Corporations' : group.type === 'individual' ? 'Individuals' : 'Organizations';
                  return (
                    <div key={group.type}>
                      <div className="flex items-center gap-2 mb-3">
                        <TypeIcon className="w-3.5 h-3.5" style={{ color: group.config.color }} />
                        <span className="text-[11px] font-black uppercase tracking-[0.15em]" style={{ color: group.config.color }}>{typePlural}</span>
                        <span className="text-[10px] font-mono text-zinc-700">({group.items.length})</span>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                        {group.items.map((aff: any, idx: number) => (
                          <InnerCard key={idx} style={{ borderLeftWidth: 3, borderLeftColor: `${group.config.color}40` }}>
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
                                style={{ color: group.config.color, background: group.config.bg, border: `1px solid ${group.config.color}20` }}>
                                {group.config.label}
                              </span>
                            </div>
                            <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2">{aff.relationship}</p>
                            {aff.href && (
                              <Link href={aff.href}
                                className="inline-flex items-center gap-1 mt-2 text-[10px] text-zinc-600 hover:text-red-400 transition-colors font-mono">
                                View Profile <ArrowUpRight className="w-3 h-3" />
                              </Link>
                            )}
                          </InnerCard>
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
            NETWORK ANALYSIS — Glass panel wrapper
            ══════════════════════════════════════════════════════════ */}
        {(defendants.length > 0 || affiliations.length > 0) && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} className="mb-6">
            <GlassPanel>
              <SectionHeader number="03" title="Network Analysis" icon={<TrendingUp className="w-4 h-4" />} />
              <NetworkTree investigation={{
                title: investigation.title,
                slug,
                severity: investigation.severity || 'medium',
                defendants: investigation.defendants,
                affiliations: investigation.affiliations,
                moneyTrail: investigation.moneyTrail,
                timeline: investigation.timeline,
              }} />
            </GlassPanel>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            DEFENDANTS & CHARGES — Collapsible glass with inner cards
            ══════════════════════════════════════════════════════════ */}
        {defendants.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }} className="mb-6">
            <CollapsibleGlass
              number="04"
              title="Defendants & Charges"
              icon={<Gavel className="w-4 h-4" />}
              count={defendants.length}
              badge={
                <span className="text-[10px] font-mono text-zinc-600">
                  {defendants.filter((d: any) => d.status === 'pending').length} pending
                </span>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {defendants.map((def: any, idx: number) => {
                  const st = statusColors[def.status] || statusColors.pending;
                  return (
                    <InnerCard key={idx} style={{ borderTop: `2px solid ${st.dot}` }}>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <Link href={`/entities/individuals/${slugifyName(def.name)}`}
                          className="font-bold text-white text-sm hover:text-red-400 transition-colors">
                          {def.name}
                        </Link>
                        <div className="flex items-center gap-1.5 flex-shrink-0 px-2 py-0.5 rounded-md"
                          style={{ background: st.bg, border: `1px solid ${st.border}` }}>
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: st.dot }} />
                          <span className="text-[9px] font-bold uppercase" style={{ color: st.text }}>{def.status}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-500 mb-3 leading-relaxed">{def.role}</p>

                      {def.charges?.length > 0 && (
                        <div className="mb-3">
                          <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">Charges</span>
                          <div className="space-y-1">
                            {def.charges.map((charge: string, ci: number) => (
                              <div key={ci} className="flex items-start gap-2 text-[11px] text-zinc-400 leading-relaxed">
                                <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: st.dot }} />
                                {charge}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {(def.sentence || def.fine || def.restitution) && (
                        <div className="pt-2.5 border-t border-white/[0.04] space-y-1">
                          {def.sentence && (
                            <div className="text-[11px]">
                              <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider mr-1.5">Outcome:</span>
                              <span className="text-zinc-300">{def.sentence}</span>
                            </div>
                          )}
                          {def.fine && (
                            <div className="text-[11px]">
                              <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider mr-1.5">Fine:</span>
                              <span className="text-yellow-400/80">{def.fine}</span>
                            </div>
                          )}
                          {def.restitution && (
                            <div className="text-[11px]">
                              <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider mr-1.5">Restitution:</span>
                              <span className="text-yellow-400/80">{def.restitution}</span>
                            </div>
                          )}
                        </div>
                      )}

                      {def.notes && (
                        <p className="text-[10px] text-zinc-600 mt-2 pt-2 border-t border-white/[0.03] italic leading-relaxed">{def.notes}</p>
                      )}
                    </InnerCard>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            APPLICABLE LAWS — Collapsible glass
            ══════════════════════════════════════════════════════════ */}
        {statutes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.18 }} className="mb-6">
            <CollapsibleGlass
              number="05"
              title="Applicable Laws & Statutes"
              icon={<Scale className="w-4 h-4" />}
              count={statutes.length}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {statutes.map((statute: { code: string; description?: string }, idx: number) => (
                  <InnerCard key={idx}>
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 flex items-center justify-center flex-shrink-0 rounded-lg bg-[rgba(184,0,0,0.06)] border border-[rgba(184,0,0,0.10)] mt-0.5">
                        <BookOpen className="w-3 h-3 text-zinc-600" />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-zinc-200">{statute.code}</p>
                        {statute.description && (
                          <p className="text-[11px] text-zinc-500 leading-relaxed mt-0.5">{statute.description}</p>
                        )}
                      </div>
                    </div>
                  </InnerCard>
                ))}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            ACCOUNTABILITY ENGINE
            ══════════════════════════════════════════════════════════ */}
        {accountabilityContent && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
            <AccountabilitySection content={accountabilityContent} slug={slug} title={investigation.title} />
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            MONEY TRAIL — Collapsible glass with table layout
            ══════════════════════════════════════════════════════════ */}
        {moneyTrail.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.22 }} className="mb-6">
            <CollapsibleGlass
              number="07"
              title="Money Trail"
              icon={<DollarSign className="w-4 h-4" />}
              count={moneyTrail.length}
              badge={<span className="text-[10px] font-mono text-yellow-500/50">{moneyTrail.length} flows</span>}
            >
              {/* Table header */}
              <div className="hidden md:grid grid-cols-[100px_1fr_28px_1fr_120px] gap-3 px-4 py-2 text-[9px] font-mono text-zinc-600 uppercase tracking-wider mb-1">
                <span>Date</span><span>From</span><span /><span>To</span><span className="text-right">Amount</span>
              </div>

              <div className="space-y-1.5">
                {moneyTrail.map((item: any, idx: number) => (
                  <InnerCard key={idx} className="!p-3">
                    <div className="grid grid-cols-1 md:grid-cols-[100px_1fr_28px_1fr_120px] gap-2 md:gap-3 items-center">
                      <span className="text-[11px] font-mono text-zinc-600">{item.date}</span>
                      <span className="text-sm text-zinc-300 truncate">{item.from}</span>
                      <span className="hidden md:block text-zinc-700 text-center text-xs">→</span>
                      <span className="text-sm text-zinc-300 truncate">{item.to}</span>
                      <div className="md:text-right flex items-center md:justify-end gap-2">
                        <span className="text-sm font-bold font-mono text-yellow-400/80">{item.amount}</span>
                        {!item.documented && (
                          <span className="text-[8px] text-yellow-700/60 uppercase font-bold tracking-wider rounded-md px-1.5 py-0.5 bg-yellow-500/[0.05] border border-yellow-500/10">unverified</span>
                        )}
                      </div>
                    </div>
                  </InnerCard>
                ))}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            INVESTIGATION DETAILS — Glass panel, reading column
            ══════════════════════════════════════════════════════════ */}
        {mainContent?.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }} className="mb-6">
            <CollapsibleGlass
              number="08"
              title="Full Investigation"
              icon={<FileText className="w-4 h-4" />}
            >
              <div className="max-w-4xl space-y-6">
                {mainContent.map((paragraph: string, idx: number) => {
                  const colonIdx = paragraph.indexOf(':');
                  const hasHeader = colonIdx > 0 && colonIdx < 60
                    && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase()
                    && !/\d/.test(paragraph.substring(0, colonIdx));

                  if (hasHeader) {
                    const heading = paragraph.substring(0, colonIdx);
                    const body = paragraph.substring(colonIdx + 1).trim();
                    return (
                      <div key={idx} className="mt-8 first:mt-0">
                        <InnerCard style={{ borderLeftWidth: 3, borderLeftColor: `${sevCfg.color}40` }} className="!bg-[#040404]">
                          <h3 className="text-xs font-black uppercase tracking-[0.15em] mb-3" style={{ color: sevCfg.color }}>{heading}</h3>
                          <p className="text-sm text-zinc-300 leading-[1.85]">{body}</p>
                        </InnerCard>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className={`text-sm text-zinc-300 leading-[1.85] ${idx === 0 ? 'text-base text-zinc-200' : ''}`}>
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            TIMELINE — Collapsible glass with vertical tracker
            ══════════════════════════════════════════════════════════ */}
        {timeline.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.26 }} className="mb-6">
            <CollapsibleGlass
              number="09"
              title="Timeline"
              icon={<Calendar className="w-4 h-4" />}
              count={timeline.length}
              defaultOpen={timeline.length <= 25}
            >
              <div className="relative pl-6">
                <div className="absolute left-[3px] top-1 bottom-1 w-px rounded-full" style={{
                  background: `linear-gradient(to bottom, ${sevCfg.color}25, ${sevCfg.color}06)`,
                }} />

                <div className="space-y-0">
                  {timeline.map((item: any, idx: number) => {
                    const typeColors: Record<string, string> = {
                      critical: '#ef4444',
                      legal: '#a855f7',
                      political: '#8b5cf6',
                      financial: '#eab308',
                      default: '#3f3f46',
                    };
                    const dotColor = typeColors[item.type || 'default'] || typeColors.default;
                    const isMajor = item.type === 'critical' || item.type === 'legal';

                    return (
                      <div key={idx} className="relative flex items-start gap-5 py-2.5 group">
                        <div className="absolute -left-6 mt-[7px] w-[7px] h-[7px] rounded-full"
                          style={{ backgroundColor: dotColor, boxShadow: isMajor ? `0 0 8px ${dotColor}40` : 'none' }}
                        />
                        <span className="text-[10px] text-zinc-600 font-mono w-24 flex-shrink-0 pt-0.5">{item.date}</span>
                        <p className={`text-sm leading-relaxed ${isMajor ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>
                          {item.event}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* ══════════════════════════════════════════════════════════
            SOURCES — Collapsible glass with numbered grid
            ══════════════════════════════════════════════════════════ */}
        {sources.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28 }} className="mb-6">
            <CollapsibleGlass
              number="10"
              title="Sources & Documentation"
              icon={<ExternalLink className="w-4 h-4" />}
              count={sources.length}
              defaultOpen={sources.length <= 20}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sources.map((source: any, idx: number) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 rounded-xl bg-[#060606] border border-[rgba(255,255,255,0.05)] hover:border-[rgba(184,0,0,0.20)] hover:bg-[#080808] transition-all">
                    <span className="text-[10px] text-zinc-700 font-mono mt-0.5 flex-shrink-0 w-5 text-right">{idx + 1}</span>
                    <div className="min-w-0 flex-1">
                      <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors block truncate">
                        {source.title}
                      </span>
                      <span className="text-[10px] text-zinc-700 font-mono uppercase tracking-wider">{source.type}</span>
                    </div>
                    <ExternalLink className="w-3 h-3 text-zinc-800 group-hover:text-red-400 transition-colors mt-1 flex-shrink-0" />
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
