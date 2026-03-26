'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Users, FileText,
  ExternalLink, ShieldAlert, DollarSign, Building2,
  Gavel, BookOpen, Megaphone, Mail, Share2, Copy,
  CheckCircle, Eye, ArrowUpRight, Landmark, ClipboardCheck,
  Crosshair, Globe, ChevronDown, ChevronRight, Shield,
  Fingerprint,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const NetworkTree = dynamic(() => import('@/components/investigation/NetworkTree'), { ssr: false });

/* ================================================================
   CONSTANTS
   ================================================================ */

const severityConfig: Record<string, { color: string; glow: string; bg: string; border: string; label: string; level: string }> = {
  critical: { color: '#dc2626', glow: 'rgba(220,38,38,0.15)', bg: 'rgba(220,38,38,0.06)', border: 'rgba(220,38,38,0.35)', label: 'CRITICAL THREAT', level: 'I' },
  high: { color: '#ea580c', glow: 'rgba(234,88,12,0.15)', bg: 'rgba(234,88,12,0.06)', border: 'rgba(234,88,12,0.35)', label: 'HIGH THREAT', level: 'II' },
  medium: { color: '#ca8a04', glow: 'rgba(202,138,4,0.15)', bg: 'rgba(202,138,4,0.06)', border: 'rgba(202,138,4,0.35)', label: 'ELEVATED THREAT', level: 'III' },
  low: { color: '#71717a', glow: 'rgba(113,113,122,0.10)', bg: 'rgba(113,113,122,0.06)', border: 'rgba(113,113,122,0.30)', label: 'STANDARD', level: 'IV' },
};

const statusColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  convicted: { bg: 'rgba(220,38,38,0.12)', text: '#fca5a5', border: 'rgba(220,38,38,0.40)', dot: '#dc2626' },
  incarcerated: { bg: 'rgba(153,27,27,0.15)', text: '#fecaca', border: 'rgba(153,27,27,0.50)', dot: '#991b1b' },
  indicted: { bg: 'rgba(234,88,12,0.12)', text: '#fdba74', border: 'rgba(234,88,12,0.40)', dot: '#ea580c' },
  charged: { bg: 'rgba(217,119,6,0.12)', text: '#fcd34d', border: 'rgba(217,119,6,0.40)', dot: '#d97706' },
  pending: { bg: 'rgba(234,179,8,0.08)', text: '#fde047', border: 'rgba(234,179,8,0.30)', dot: '#eab308' },
  settled: { bg: 'rgba(113,113,122,0.10)', text: '#a1a1aa', border: 'rgba(113,113,122,0.30)', dot: '#71717a' },
  acquitted: { bg: 'rgba(16,185,129,0.10)', text: '#6ee7b7', border: 'rgba(16,185,129,0.30)', dot: '#10b981' },
  pardoned: { bg: 'rgba(139,92,246,0.10)', text: '#c4b5fd', border: 'rgba(139,92,246,0.30)', dot: '#8b5cf6' },
  appealing: { bg: 'rgba(59,130,246,0.10)', text: '#93c5fd', border: 'rgba(59,130,246,0.30)', dot: '#3b82f6' },
  released: { bg: 'rgba(156,163,175,0.08)', text: '#d1d5db', border: 'rgba(156,163,175,0.25)', dot: '#9ca3af' },
};

const entityTypeConfig: Record<string, { color: string; icon: typeof Building2 }> = {
  agency: { color: '#06b6d4', icon: Shield },
  corporation: { color: '#eab308', icon: Building2 },
  individual: { color: '#ef4444', icon: Fingerprint },
  organization: { color: '#a855f7', icon: Users },
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
    <div className="space-y-4">
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #0a0000 0%, #020202 50%, #0a0000 100%)', border: '1px solid rgba(184,0,0,0.30)' }}>
        <motion.div
          className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
          animate={{ top: ['-10%', '110%'] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <div className="relative z-10 p-6">
          <div className="flex items-center gap-4 mb-3">
            <div className="relative w-12 h-12 flex items-center justify-center flex-shrink-0">
              <div className="absolute inset-0 border border-red-900/40" />
              <div className="absolute top-0 left-0 w-2 h-[2px] bg-red-500/70" />
              <div className="absolute top-0 left-0 w-[2px] h-2 bg-red-500/70" />
              <div className="absolute top-0 right-0 w-2 h-[2px] bg-red-500/70" />
              <div className="absolute top-0 right-0 w-[2px] h-2 bg-red-500/70" />
              <div className="absolute bottom-0 left-0 w-2 h-[2px] bg-red-500/70" />
              <div className="absolute bottom-0 left-0 w-[2px] h-2 bg-red-500/70" />
              <div className="absolute bottom-0 right-0 w-2 h-[2px] bg-red-500/70" />
              <div className="absolute bottom-0 right-0 w-[2px] h-2 bg-red-500/70" />
              <Crosshair className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white uppercase tracking-[0.2em]">Accountability Engine</h2>
              <p className="text-[11px] text-red-400/60 font-mono tracking-wider mt-0.5">
                STRATEGIC OPERATIONS // {operations.length} DIRECTIVES LOADED
              </p>
            </div>
          </div>
          <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
            These are not suggestions. These are operations. Each directive targets a specific
            vulnerability in the system that allowed this to happen. Execute systematically.
          </p>
        </div>
      </div>

      {trackOrder.map(track => {
        const trackOps = grouped[track];
        if (!trackOps) return null;
        const meta = trackMeta[track];
        const TrackIcon = meta.icon;
        return (
          <div key={track}>
            <div className="flex items-center gap-3 mb-3 px-1">
              <div className="w-8 h-8 flex items-center justify-center border border-red-900/30 relative flex-shrink-0" style={{ filter: 'drop-shadow(0 0 4px rgba(184,0,0,0.3))' }}>
                <TrackIcon className="w-3.5 h-3.5" style={{ color: meta.color }} />
              </div>
              <div>
                <h3 className="text-sm font-black text-white uppercase tracking-[0.15em]">{meta.label}</h3>
                <p className="text-[11px] font-mono" style={{ color: `${meta.color}80` }}>{meta.directive}</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {trackOps.map((op) => (
                <motion.div key={op.id} whileHover={{ x: 3 }}
                  className="group relative p-4 bg-[#020202] border border-[rgba(184,0,0,0.15)] hover:border-[rgba(184,0,0,0.40)] transition-all overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] group-hover:bg-red-600/60 transition-colors" style={{ backgroundColor: `${meta.color}40` }} />
                  <div className="pl-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider mb-2 block" style={{ color: `${meta.color}90` }}>
                      OP-{String(op.id + 1).padStart(2, '0')}
                    </span>
                    <p className="text-sm text-zinc-300 leading-relaxed mb-2">{op.text}</p>
                    {op.urls.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {op.urls.map((u, ui) => (
                          <a key={ui} href={u.url} target="_blank" rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-red-400 bg-red-900/20 border border-red-800/30 hover:bg-red-900/40 hover:border-red-700/50 transition-all">
                            <ArrowUpRight className="w-3 h-3" />{u.domain}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );
      })}

      <div>
        <div className="flex items-center gap-2 mb-3 px-1">
          <span className="text-[10px] font-mono font-bold text-red-600/50 tracking-[0.2em]">SUPPLEMENTARY ARSENAL</span>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-red-900/30 to-transparent" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {[
            { icon: FileText, title: 'OPEN RECORDS WARFARE', desc: 'File mass public information requests. Force disclosure of internal communications, decision logs, and financial records.' },
            { icon: Megaphone, title: 'MEDIA AMPLIFICATION', desc: 'Send evidence packages to investigative journalists, documentary filmmakers, and independent outlets.' },
            { icon: ShieldAlert, title: 'EVIDENCE PRESERVATION', desc: 'Archive everything. Screenshots, documents, public statements, financial disclosures. Create redundant copies.' },
            { icon: Globe, title: 'INTERNATIONAL PRESSURE', desc: 'When domestic institutions are captured, international scrutiny becomes critical leverage.' },
          ].map((card, i) => {
            const CardIcon = card.icon;
            return (
              <motion.div key={i} whileHover={{ y: -2 }}
                className="p-4 bg-[#020202] border border-[rgba(184,0,0,0.12)] hover:border-[rgba(184,0,0,0.30)] transition-all">
                <div className="flex items-center gap-2 mb-2">
                  <CardIcon className="w-4 h-4 text-red-500/70" />
                  <span className="text-[10px] font-black text-red-400/80 uppercase tracking-wider">{card.title}</span>
                </div>
                <p className="text-[11px] text-zinc-500 leading-relaxed">{card.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="p-5 bg-[#020202] border border-[rgba(184,0,0,0.18)]">
          <div className="flex items-center gap-3 mb-4">
            <Eye className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-[0.15em]">Operations Dashboard</h3>
          </div>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]">
              <div className="text-2xl font-black text-white font-mono">{viewCount}</div>
              <div className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mt-1">Intelligence Views</div>
            </div>
            <div className="text-center p-3 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)]">
              <div className="text-2xl font-black text-red-400 font-mono">{actionsTaken}</div>
              <div className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider mt-1">Ops Executed</div>
            </div>
          </div>
          <button onClick={handleTakeAction} disabled={hasTakenAction}
            className={`w-full py-3 text-sm font-black uppercase tracking-[0.15em] transition-all duration-300 flex items-center justify-center gap-2 ${
              hasTakenAction
                ? 'bg-[rgba(184,0,0,0.10)] border border-[rgba(184,0,0,0.25)] text-red-400/60 cursor-default'
                : 'bg-gradient-to-r from-red-900/50 to-red-800/30 border border-red-700/40 text-red-300 hover:from-red-900/70 hover:to-red-800/50 hover:border-red-600/60 hover:shadow-[0_0_20px_rgba(184,0,0,0.15)]'
            }`}>
            {hasTakenAction
              ? <><CheckCircle className="w-4 h-4" />Operation Logged</>
              : <><Crosshair className="w-4 h-4" />Log Operation Complete</>}
          </button>
        </div>

        <div className="p-5 bg-[#020202] border border-[rgba(184,0,0,0.18)]">
          <div className="flex items-center gap-3 mb-4">
            <Share2 className="w-4 h-4 text-red-400" />
            <h3 className="text-sm font-black text-white uppercase tracking-[0.15em]">Amplification Network</h3>
          </div>
          <div className="space-y-2.5">
            {[
              { label: 'Copy Investigation Link', icon: Copy, text: shareUrl, key: 'link' },
              { label: 'Copy Post Text', icon: Share2, text: `${tweetText} ${shareUrl}`, key: 'tweet' },
            ].map(item => (
              <button key={item.key} onClick={() => copyToClipboard(item.text, item.key)}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all text-left">
                <item.icon className="w-4 h-4 text-zinc-500 flex-shrink-0" />
                <span className="text-zinc-300 flex-1">{item.label}</span>
                {copied === item.key && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
              </button>
            ))}
            <a href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all">
              <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Email This Investigation</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>
            <button onClick={() => {
              const allOps = operations.map((o, i) => `[OP-${String(i + 1).padStart(2, '0')}] ${o.text}${o.urls.length > 0 ? ' -- ' + o.urls.map(u => u.url).join(', ') : ''}`).join('\n');
              copyToClipboard(`${title}\n\nAccountability Operations:\n${allOps}\n\nSource: ${shareUrl}`, 'ops');
            }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all text-left">
              <ClipboardCheck className="w-4 h-4 text-zinc-500 flex-shrink-0" />
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

  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const toggleSection = (key: string) => {
    setExpandedSections(prev => ({ ...prev, [key]: !prev[key] }));
  };

  if (!investigation) {
    return (
      <div className="min-h-screen pt-20 lg:pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
          <AlertTriangle className="w-16 h-16 text-zinc-600 mx-auto mb-6" />
          <h1 className="text-3xl font-black text-white uppercase tracking-wider mb-4">Investigation Not Found</h1>
          <p className="text-zinc-400 mb-8">The investigation &ldquo;{slug}&rdquo; could not be located in the database.</p>
          <Link href="/investigations" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Investigations
          </Link>
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
    <div className="min-h-screen">

      {/* ────────────────────────────────────────────────────────────
          HERO — Full-bleed, massive typography, cinematic whitespace
          ──────────────────────────────────────────────────────────── */}
      <div className="relative min-h-[72vh] flex flex-col justify-end overflow-hidden">
        <div className="absolute inset-0" style={{
          background: `radial-gradient(ellipse at 15% 85%, ${sevCfg.color}06 0%, transparent 50%), linear-gradient(180deg, #000 0%, #030303 100%)`,
        }} />
        <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
          background: `linear-gradient(90deg, transparent 10%, ${sevCfg.color}50 50%, transparent 90%)`,
        }} />
        <motion.div
          className="absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${sevCfg.color}12, transparent)` }}
          animate={{ top: ['0%', '100%'] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-20">
          <div className="flex items-center justify-between mb-20">
            <Link href="/investigations" className="flex items-center gap-2 text-zinc-600 hover:text-white transition-colors text-xs font-mono tracking-wider">
              <ArrowLeft className="w-3.5 h-3.5" /> INVESTIGATIONS
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: sevCfg.color, boxShadow: `0 0 10px ${sevCfg.color}` }} />
              <span className="text-[10px] font-black tracking-[0.3em]" style={{ color: sevCfg.color }}>{sevCfg.label}</span>
            </div>
          </div>

          <div className="mb-5">
            <span className="text-[11px] font-mono text-zinc-600 tracking-[0.15em]">{investigation.category}</span>
            {investigation.date && <span className="text-zinc-800 mx-3">·</span>}
            {investigation.date && <span className="text-[11px] font-mono text-zinc-700">{investigation.date}</span>}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] font-black text-white uppercase leading-[0.92] tracking-tight mb-8">
            <GlitchText text={investigation.title} />
          </h1>

          {investigation.subtitle && (
            <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed max-w-4xl font-light mb-16">
              {investigation.subtitle}
            </p>
          )}

          <div className="flex flex-wrap items-center">
            {[
              defendants.length > 0 && { v: defendants.length, l: 'Defendants', c: '#ef4444' },
              affiliations.length > 0 && { v: affiliations.length, l: 'Entities', c: sevCfg.color },
              moneyTrail.length > 0 && { v: moneyTrail.length, l: 'Transactions', c: '#eab308' },
              statutes.length > 0 && { v: statutes.length, l: 'Statutes', c: '#71717a' },
              sources.length > 0 && { v: sources.length, l: 'Sources', c: '#52525b' },
            ].filter(Boolean).map((s: any, i: number) => (
              <div key={i} className="flex items-center">
                {i > 0 && <div className="w-px h-8 bg-zinc-800/50 mx-5 sm:mx-8" />}
                <div>
                  <div className="text-2xl sm:text-3xl font-black font-mono" style={{ color: s.c }}>{s.v}</div>
                  <div className="text-[8px] text-zinc-600 uppercase tracking-[0.2em] font-bold">{s.l}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px" style={{
          background: `linear-gradient(90deg, transparent 5%, ${sevCfg.color}15 50%, transparent 95%)`,
        }} />
      </div>

      {/* ────────────────────────────────────────────────────────────
          01 — EXECUTIVE SUMMARY
          Open editorial with sticky case file sidebar
          ──────────────────────────────────────────────────────────── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">01</span>
                <div className="w-4 h-px bg-zinc-800" />
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Executive Summary</span>
              </div>
              <p className="text-xl text-zinc-300 leading-[1.9] font-light">
                {investigation.summary}
              </p>
            </div>

            <div className="lg:sticky lg:top-28 self-start">
              <div className="relative pl-5" style={{ borderLeft: `2px solid ${sevCfg.color}35` }}>
                <span className="text-[9px] font-mono text-zinc-700 uppercase tracking-[0.3em] block mb-6">Case File</span>
                <div className="space-y-4">
                  {[
                    { l: 'Filed', v: investigation.date },
                    { l: 'Updated', v: investigation.lastUpdated },
                    { l: 'Origin', v: investigation.eventOriginDate },
                    { l: 'Last Activity', v: investigation.lastActivityDate },
                  ].filter(r => r.v).map(row => (
                    <div key={row.l}>
                      <div className="text-[9px] text-zinc-700 uppercase tracking-wider font-mono">{row.l}</div>
                      <div className="text-sm text-zinc-400 font-mono mt-0.5">{row.v}</div>
                    </div>
                  ))}
                  <div>
                    <div className="text-[9px] text-zinc-700 uppercase tracking-wider font-mono">Severity</div>
                    <div className="text-sm font-black uppercase mt-0.5" style={{ color: sevCfg.color }}>{sev}</div>
                  </div>
                  <div>
                    <div className="text-[9px] text-zinc-700 uppercase tracking-wider font-mono">Category</div>
                    <div className="text-sm text-zinc-400 mt-0.5">{investigation.category}</div>
                  </div>
                </div>
                {investigation.tags && investigation.tags.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-zinc-900/50">
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {investigation.tags.map((tag: string, i: number) => (
                        <Link key={i} href={`/investigations?tag=${encodeURIComponent(tag)}`}
                          className="text-[10px] text-zinc-600 hover:text-zinc-300 transition-colors font-mono">
                          #{tag}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────
          02 — CONNECTED ENTITIES
          Grouped by type with colored accents, dark band bg
          ──────────────────────────────────────────────────────────── */}
      {affiliations.length > 0 && (
        <section className="py-16" style={{ background: '#030303' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">02</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Connected Entities</span>
              <div className="flex-1" />
              <span className="text-[10px] font-mono text-zinc-700">{affiliations.length} total</span>
            </div>

            <div className="space-y-10">
              {entityGroups.map(group => {
                const TypeIcon = group.config.icon;
                const typePlural = group.type === 'agency' ? 'Agencies' : group.type === 'corporation' ? 'Corporations' : group.type === 'individual' ? 'Individuals' : 'Organizations';
                return (
                  <div key={group.type}>
                    <div className="flex items-center gap-2.5 mb-4">
                      <TypeIcon className="w-4 h-4" style={{ color: group.config.color }} />
                      <span className="text-xs font-black uppercase tracking-[0.2em]" style={{ color: group.config.color }}>
                        {typePlural}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-700">({group.items.length})</span>
                      <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(90deg, ${group.config.color}15, transparent)` }} />
                    </div>

                    <div className="space-y-0.5">
                      {group.items.map((aff: any, idx: number) => (
                        <div key={idx}
                          className="flex items-center gap-4 py-3 px-4 hover:bg-white/[0.015] transition-colors group"
                          style={{ borderLeft: `2px solid ${group.config.color}30` }}
                        >
                          <span className="text-sm text-zinc-200 font-medium flex-shrink-0 min-w-[200px]">
                            {aff.href ? (
                              <Link href={aff.href} className="hover:text-white transition-colors">{aff.name}</Link>
                            ) : aff.name}
                          </span>
                          <span className="text-[11px] text-zinc-600 flex-1 truncate">{aff.relationship}</span>
                          {aff.href && (
                            <Link href={aff.href}
                              className="text-[10px] text-zinc-700 hover:text-zinc-300 transition-colors font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 flex-shrink-0">
                              View <ChevronRight className="w-3 h-3" />
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          03 — NETWORK ANALYSIS
          Full width, minimal wrapper
          ──────────────────────────────────────────────────────────── */}
      {(defendants.length > 0 || affiliations.length > 0) && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">03</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Network Analysis</span>
            </div>
            <NetworkTree investigation={{
              title: investigation.title,
              slug,
              severity: investigation.severity || 'medium',
              defendants: investigation.defendants,
              affiliations: investigation.affiliations,
              moneyTrail: investigation.moneyTrail,
              timeline: investigation.timeline,
            }} />
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          04 — DEFENDANTS & CHARGES
          Horizontal bars, status-coded, dark band
          ──────────────────────────────────────────────────────────── */}
      {defendants.length > 0 && (
        <section className="py-16" style={{ background: '#020202' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">04</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Defendants & Charges</span>
              <div className="flex-1" />
              <span className="text-[10px] font-mono text-zinc-700">{defendants.length} defendants</span>
            </div>

            <div className="space-y-3">
              {defendants.map((def: any, idx: number) => {
                const st = statusColors[def.status] || statusColors.pending;
                return (
                  <div key={idx}
                    className="flex flex-col md:flex-row md:items-start gap-4 p-5 transition-colors hover:bg-white/[0.008]"
                    style={{ borderLeft: `3px solid ${st.dot}`, background: st.bg }}
                  >
                    <div className="flex items-center gap-2 md:w-28 flex-shrink-0">
                      <div className="w-2 h-2 animate-pulse" style={{ backgroundColor: st.dot }} />
                      <span className="text-[11px] font-black uppercase tracking-wider" style={{ color: st.text }}>{def.status}</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                        <Link href={`/entities/individuals/${slugifyName(def.name)}`}
                          className="text-lg font-bold text-white hover:text-red-400 transition-colors">
                          {def.name}
                        </Link>
                        <span className="text-[11px] text-zinc-600">{def.role}</span>
                      </div>

                      {def.charges?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-2">
                          {def.charges.map((charge: string, ci: number) => (
                            <span key={ci} className="text-[10px] text-zinc-400 border border-zinc-800/50 px-2 py-0.5">{charge}</span>
                          ))}
                        </div>
                      )}

                      {(def.sentence || def.fine || def.restitution) && (
                        <div className="flex flex-wrap gap-x-5 gap-y-1 mt-3 text-[11px]">
                          {def.sentence && (
                            <span className="text-zinc-400">
                              <span className="text-zinc-600 font-mono text-[9px] uppercase mr-1.5">Outcome:</span>
                              {def.sentence}
                            </span>
                          )}
                          {def.fine && (
                            <span className="text-yellow-400/70">
                              <span className="text-zinc-600 font-mono text-[9px] uppercase mr-1.5">Fine:</span>
                              {def.fine}
                            </span>
                          )}
                          {def.restitution && (
                            <span className="text-yellow-400/70">
                              <span className="text-zinc-600 font-mono text-[9px] uppercase mr-1.5">Restitution:</span>
                              {def.restitution}
                            </span>
                          )}
                        </div>
                      )}

                      {def.notes && <p className="text-[10px] text-zinc-700 mt-2 italic">{def.notes}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          05 — APPLICABLE LAWS & STATUTES
          Clean numbered list, no cards, narrow width
          ──────────────────────────────────────────────────────────── */}
      {statutes.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">05</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Applicable Laws & Statutes</span>
            </div>

            <div className="space-y-4">
              {statutes.map((statute: { code: string; description?: string }, idx: number) => (
                <div key={idx} className="flex items-start gap-4 group">
                  <span className="text-[10px] font-mono text-zinc-800 mt-1 flex-shrink-0 w-6 text-right">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="text-sm font-bold text-zinc-200 group-hover:text-white transition-colors">{statute.code}</span>
                    {statute.description && (
                      <p className="text-xs text-zinc-500 mt-0.5 leading-relaxed">{statute.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          06 — ACCOUNTABILITY ENGINE
          Dark band, self-contained component
          ──────────────────────────────────────────────────────────── */}
      {accountabilityContent && (
        <section className="py-16" style={{ background: '#030303' }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">06</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Accountability Engine</span>
            </div>
            <AccountabilitySection content={accountabilityContent} slug={slug} title={investigation.title} />
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          07 — MONEY TRAIL
          Table / ledger format with gold accents
          ──────────────────────────────────────────────────────────── */}
      {moneyTrail.length > 0 && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-12">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">07</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Money Trail</span>
              <div className="flex-1" />
              <span className="text-[10px] font-mono text-yellow-600/50">{moneyTrail.length} transactions tracked</span>
            </div>

            {/* Table header */}
            <div className="hidden md:grid grid-cols-[110px_1fr_32px_1fr_130px] gap-4 px-4 py-2 text-[9px] font-mono text-zinc-700 uppercase tracking-wider border-b border-zinc-800/50 mb-1">
              <span>Date</span>
              <span>From</span>
              <span />
              <span>To</span>
              <span className="text-right">Amount</span>
            </div>

            <div className="divide-y divide-zinc-900/40">
              {moneyTrail.map((item: any, idx: number) => (
                <div key={idx}
                  className="grid grid-cols-1 md:grid-cols-[110px_1fr_32px_1fr_130px] gap-2 md:gap-4 px-4 py-3.5 hover:bg-yellow-500/[0.015] transition-colors items-center"
                >
                  <span className="text-[11px] font-mono text-zinc-600">{item.date}</span>
                  <span className="text-sm text-zinc-300">{item.from}</span>
                  <span className="hidden md:block text-zinc-700 text-center text-xs">→</span>
                  <span className="text-sm text-zinc-300">{item.to}</span>
                  <div className="md:text-right flex items-center md:justify-end gap-2">
                    <span className="text-sm font-bold font-mono text-yellow-400/80">{item.amount}</span>
                    {!item.documented && (
                      <span className="text-[8px] text-yellow-700/60 uppercase font-bold tracking-wider">unverified</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {moneyTrail.length > 0 && (
              <div className="mt-4 pt-3 border-t border-zinc-800/30 flex items-center gap-2 text-[10px] text-zinc-700 font-mono">
                <DollarSign className="w-3 h-3" />
                <span>{moneyTrail.length} financial flows documented</span>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          08 — INVESTIGATION DETAILS
          Centered reading column, magazine article style
          ──────────────────────────────────────────────────────────── */}
      {mainContent && mainContent.length > 0 && (
        <section className="py-20" style={{ background: '#020202' }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-14">
              <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">08</span>
              <div className="w-4 h-px bg-zinc-800" />
              <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Full Investigation</span>
            </div>

            <div className="space-y-8">
              {mainContent.map((paragraph: string, idx: number) => {
                const colonIdx = paragraph.indexOf(':');
                const hasHeader = colonIdx > 0 && colonIdx < 60
                  && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase()
                  && !/\d/.test(paragraph.substring(0, colonIdx));

                if (hasHeader) {
                  const heading = paragraph.substring(0, colonIdx);
                  const body = paragraph.substring(colonIdx + 1).trim();
                  return (
                    <div key={idx} className="mt-14 mb-8">
                      <div className="w-10 h-px mb-4" style={{ backgroundColor: `${sevCfg.color}40` }} />
                      <h3 className="text-xs font-black uppercase tracking-[0.2em] mb-4" style={{ color: sevCfg.color }}>
                        {heading}
                      </h3>
                      <p className="text-[15px] text-zinc-300 leading-[2]">{body}</p>
                    </div>
                  );
                }

                return (
                  <p key={idx} className={`text-[15px] text-zinc-300 leading-[2] ${idx === 0 ? 'text-lg text-zinc-200 leading-[1.9]' : ''}`}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          09 — TIMELINE
          Open layout, vertical line, expandable
          ──────────────────────────────────────────────────────────── */}
      {timeline.length > 0 && (
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">09</span>
                <div className="w-4 h-px bg-zinc-800" />
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Timeline</span>
                <span className="text-[10px] font-mono text-zinc-800 ml-2">{timeline.length} events</span>
              </div>
              {timeline.length > 20 && (
                <button onClick={() => toggleSection('timeline')}
                  className="text-[10px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors flex items-center gap-1">
                  {expandedSections.timeline ? 'Collapse' : `Show all ${timeline.length}`}
                  <ChevronDown className={`w-3 h-3 transition-transform ${expandedSections.timeline ? 'rotate-180' : ''}`} />
                </button>
              )}
            </div>

            <div className="relative pl-8">
              <div className="absolute left-[3px] top-2 bottom-2 w-px" style={{
                background: `linear-gradient(to bottom, ${sevCfg.color}25, ${sevCfg.color}06)`,
              }} />

              <div className="space-y-0">
                {(timeline.length > 20 && !expandedSections.timeline ? timeline.slice(0, 20) : timeline)
                  .map((item: any, idx: number) => {
                    const typeColors: Record<string, string> = {
                      critical: '#dc2626',
                      legal: '#a855f7',
                      political: '#8b5cf6',
                      financial: '#eab308',
                      default: '#3f3f46',
                    };
                    const dotColor = typeColors[item.type || 'default'] || typeColors.default;
                    const isMajor = item.type === 'critical' || item.type === 'legal';

                    return (
                      <div key={idx} className="relative flex items-start gap-6 py-2.5 group">
                        <div className="absolute -left-8 mt-[7px] w-[7px] h-[7px]"
                          style={{ backgroundColor: dotColor, boxShadow: isMajor ? `0 0 8px ${dotColor}50` : 'none' }}
                        />
                        <span className="text-[10px] text-zinc-600 font-mono w-24 flex-shrink-0 pt-0.5">{item.date}</span>
                        <p className={`text-sm leading-relaxed ${isMajor ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>
                          {item.event}
                        </p>
                      </div>
                    );
                  })}
              </div>

              {timeline.length > 20 && !expandedSections.timeline && (
                <button onClick={() => toggleSection('timeline')}
                  className="mt-6 text-[11px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors flex items-center gap-2 pl-0">
                  <ChevronDown className="w-3.5 h-3.5" />
                  Show remaining {timeline.length - 20} events
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* ────────────────────────────────────────────────────────────
          10 — SOURCES & DOCUMENTATION
          Compact numbered grid, dark band
          ──────────────────────────────────────────────────────────── */}
      {sources.length > 0 && (
        <section className="py-16" style={{ background: '#030303' }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-mono text-zinc-700 tracking-[0.3em]">10</span>
                <div className="w-4 h-px bg-zinc-800" />
                <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">Sources & Documentation</span>
              </div>
              <span className="text-[10px] font-mono text-zinc-700">{sources.length} sources</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-0">
              {(sources.length > 30 && !expandedSections.sources ? sources.slice(0, 30) : sources)
                .map((source: any, idx: number) => (
                <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer"
                  className="flex items-start gap-3 py-2.5 group hover:bg-white/[0.01] transition-colors -mx-2 px-2 border-b border-zinc-900/30">
                  <span className="text-[10px] text-zinc-800 font-mono mt-0.5 flex-shrink-0 w-5 text-right">{idx + 1}</span>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm text-zinc-400 group-hover:text-zinc-200 transition-colors block truncate">
                      {source.title}
                    </span>
                    <span className="text-[10px] text-zinc-700 font-mono uppercase tracking-wider">{source.type}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-zinc-800 group-hover:text-zinc-400 transition-colors mt-1 flex-shrink-0" />
                </a>
              ))}
            </div>

            {sources.length > 30 && !expandedSections.sources && (
              <button onClick={() => toggleSection('sources')}
                className="mt-4 text-[11px] font-mono text-zinc-600 hover:text-zinc-300 transition-colors flex items-center gap-2">
                <ChevronDown className="w-3.5 h-3.5" />
                Show remaining {sources.length - 30} sources
              </button>
            )}
          </div>
        </section>
      )}

      <div className="h-20" />
    </div>
  );
}
