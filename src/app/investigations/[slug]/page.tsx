'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Users, Calendar, FileText,
  ExternalLink, Scale, ShieldAlert, DollarSign, Building2,
  Gavel, BookOpen, Megaphone, Mail, Share2, Copy,
  CheckCircle, Eye, ArrowUpRight, Landmark, ClipboardCheck,
  Crosshair, Globe, ChevronDown, Shield,
  Clock, ArrowDown, Fingerprint,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const NetworkTree = dynamic(() => import('@/components/investigation/NetworkTree'), { ssr: false });

// ============================================================
// CONSTANTS
// ============================================================

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

// ============================================================
// HELPERS
// ============================================================

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

// ============================================================
// REUSABLE COMPONENTS
// ============================================================

function SectionDivider({ label, number }: { label: string; number: string }) {
  return (
    <div className="flex items-center gap-4 my-10">
      <div className="flex items-center gap-2">
        <span className="text-[10px] font-mono font-bold text-red-600/50 tracking-[0.3em]">{number}</span>
        <div className="w-[2px] h-4 bg-red-900/40" />
        <span className="text-[10px] font-mono font-bold text-zinc-600 uppercase tracking-[0.2em]">{label}</span>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-r from-red-900/30 via-red-900/10 to-transparent" />
    </div>
  );
}

function StatBlock({ value, label, color = '#dc2626' }: { value: string | number; label: string; color?: string }) {
  return (
    <div className="text-center p-3" style={{ background: `linear-gradient(135deg, ${color}06, transparent)`, border: `1px solid ${color}18` }}>
      <div className="text-xl font-black font-mono text-white">{value}</div>
      <div className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider mt-0.5">{label}</div>
    </div>
  );
}

function CollapsibleSection({
  title, icon, children, defaultOpen = true, badge, delay = 0,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
  badge?: React.ReactNode;
  delay?: number;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-card overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 cursor-pointer select-none group"
      >
        <div className="flex items-center gap-3">
          <span className="text-red-400 flex-shrink-0">{icon}</span>
          <h2 className="text-lg font-black text-white uppercase tracking-wider">{title}</h2>
        </div>
        <div className="flex items-center gap-3">
          {badge}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
            <ChevronDown className="w-5 h-5 text-zinc-600 group-hover:text-zinc-300 transition-colors" />
          </motion.div>
        </div>
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
            <div className="px-6 pb-6 border-t border-[rgba(184,0,0,0.10)] pt-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ============================================================
// ACCOUNTABILITY ENGINE
// ============================================================

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
      {/* Engine Header */}
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

      {/* Categorized Operations */}
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

      {/* Supplementary Arsenal */}
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

      {/* Dashboard + Amplification */}
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

// ============================================================
// MAIN PAGE
// ============================================================

export default function InvestigationPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const investigation = investigationDatabase[slug];

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

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      {/* ============================================================ */}
      {/* HERO HEADER */}
      {/* ============================================================ */}
      <div className="relative overflow-hidden mb-0">
        {/* Severity gradient backdrop */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: `radial-gradient(ellipse at 20% 50%, ${sevCfg.glow} 0%, transparent 60%), radial-gradient(ellipse at 80% 80%, ${sevCfg.glow} 0%, transparent 50%), linear-gradient(to bottom, rgba(0,0,0,0.3), #000000)`,
        }} />
        {/* Horizontal scan line */}
        <motion.div
          className="absolute left-0 right-0 h-[1px] z-10 pointer-events-none"
          style={{ background: `linear-gradient(90deg, transparent, ${sevCfg.color}30, transparent)` }}
          animate={{ top: ['-5%', '105%'] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-10">
          {/* Back + Classification strip */}
          <div className="flex items-center justify-between mb-8">
            <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-sm font-mono">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">INVESTIGATIONS</span>
            </Link>
            <div className="flex items-center gap-3">
              <span className="text-[10px] font-mono tracking-[0.3em] text-zinc-600">CLASSIFICATION</span>
              <div className="flex items-center gap-2 px-3 py-1.5" style={{ border: `1px solid ${sevCfg.border}`, background: sevCfg.bg }}>
                <div className="w-2 h-2 animate-pulse" style={{ backgroundColor: sevCfg.color, boxShadow: `0 0 6px ${sevCfg.color}` }} />
                <span className="text-[11px] font-black uppercase tracking-wider" style={{ color: sevCfg.color }}>{sevCfg.label}</span>
                <span className="text-[10px] font-mono text-zinc-600 ml-1">LVL {sevCfg.level}</span>
              </div>
            </div>
          </div>

          {/* Category + Date row */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 text-[10px] font-black uppercase tracking-wider border border-zinc-700/50 text-zinc-400 bg-zinc-900/30">
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
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-wider leading-[1.1] mb-5 max-w-5xl">
            <GlitchText text={investigation.title} />
          </h1>

          {/* Subtitle */}
          {investigation.subtitle && (
            <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed max-w-4xl mb-6" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.8)' }}>
              {investigation.subtitle}
            </p>
          )}

          {/* Key stats row */}
          <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono">
            {defendants.length > 0 && (
              <span className="flex items-center gap-1.5 text-red-400/70">
                <Users className="w-3.5 h-3.5" /> {defendants.length} defendants
              </span>
            )}
            {affiliations.length > 0 && (
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Building2 className="w-3.5 h-3.5" /> {affiliations.length} entities
              </span>
            )}
            {moneyTrail.length > 0 && (
              <span className="flex items-center gap-1.5 text-yellow-500/70">
                <DollarSign className="w-3.5 h-3.5" /> {moneyTrail.length} transactions
              </span>
            )}
            {statutes.length > 0 && (
              <span className="flex items-center gap-1.5 text-zinc-500">
                <Scale className="w-3.5 h-3.5" /> {statutes.length} statutes
              </span>
            )}
            {sources.length > 0 && (
              <span className="flex items-center gap-1.5 text-zinc-600">
                <FileText className="w-3.5 h-3.5" /> {sources.length} sources
              </span>
            )}
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="flex justify-center mt-8"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-4 h-4 text-zinc-700" />
          </motion.div>
        </div>
      </div>

      {/* ============================================================ */}
      {/* CONTENT */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ---- SUMMARY + CASE FILE ---- */}
        <SectionDivider number="01" label="Executive Summary" />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 mb-2">
          {/* Summary */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 lg:p-8">
            <p className="text-base text-zinc-300 leading-[1.8]">
              {investigation.summary}
            </p>
          </motion.div>

          {/* Case File */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }} className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Fingerprint className="w-4 h-4 text-red-400" />
              <h3 className="text-sm font-black text-white uppercase tracking-wider">Case File</h3>
            </div>
            <div className="space-y-2.5 text-sm">
              {[
                { label: 'Date Filed', value: investigation.date },
                { label: 'Last Updated', value: investigation.lastUpdated },
                { label: 'Event Origin', value: investigation.eventOriginDate },
                { label: 'Last Activity', value: investigation.lastActivityDate },
              ].filter(r => r.value).map(row => (
                <div key={row.label} className="flex justify-between items-center py-1 border-b border-[rgba(255,255,255,0.03)]">
                  <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">{row.label}</span>
                  <span className="text-zinc-400 font-mono text-xs">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center py-1 border-b border-[rgba(255,255,255,0.03)]">
                <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Severity</span>
                <span className="text-xs font-black uppercase" style={{ color: sevCfg.color }}>{sev}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-[10px] text-zinc-600 uppercase font-bold tracking-wider">Category</span>
                <span className="text-zinc-400 text-xs">{investigation.category}</span>
              </div>

              {/* Quick stats */}
              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-[rgba(255,255,255,0.04)]">
                <StatBlock value={affiliations.length} label="Entities" color={sevCfg.color} />
                <StatBlock value={defendants.length} label="Defendants" color="#ef4444" />
                <StatBlock value={moneyTrail.length} label="Txns" color="#eab308" />
              </div>

              {/* Tags */}
              {investigation.tags && investigation.tags.length > 0 && (
                <div className="pt-3 border-t border-[rgba(255,255,255,0.04)]">
                  <div className="flex flex-wrap gap-1.5">
                    {investigation.tags.map((tag: string, idx: number) => (
                      <Link key={idx} href={`/investigations?tag=${encodeURIComponent(tag)}`}
                        className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider bg-[#020202] border border-[rgba(184,0,0,0.12)] text-zinc-600 hover:text-zinc-300 hover:border-[rgba(184,0,0,0.30)] transition-all">
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* ---- CONNECTED ENTITIES ---- */}
        {affiliations.length > 0 && (
          <>
            <SectionDivider number="02" label="Connected Entities" />
            <CollapsibleSection
              title={`Connected Entities (${affiliations.length})`}
              icon={<Users className="w-5 h-5" />}
              delay={0.05}
              badge={
                <div className="flex items-center gap-1.5">
                  {['agency', 'corporation', 'individual', 'organization'].map(type => {
                    const count = affiliations.filter((a: { type: string }) => a.type === type).length;
                    if (!count) return null;
                    const cfg = entityTypeConfig[type];
                    return (
                      <span key={type} className="text-[9px] font-mono font-bold px-1.5 py-0.5" style={{ color: cfg.color, border: `1px solid ${cfg.color}30`, background: `${cfg.color}08` }}>
                        {count}
                      </span>
                    );
                  })}
                </div>
              }
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3">
                {affiliations.map((aff: { name: string; type: string; relationship: string; href?: string }, idx: number) => {
                  const cfg = entityTypeConfig[aff.type] || entityTypeConfig.organization;
                  const TypeIcon = cfg.icon;
                  return (
                    <div key={idx} className="group p-4 bg-[#020202] transition-all hover:translate-x-[2px]" style={{ borderLeft: `3px solid ${cfg.color}60`, border: `1px solid rgba(184,0,0,0.12)`, borderLeftWidth: 3, borderLeftColor: `${cfg.color}60` }}>
                      <div className="flex items-start justify-between gap-2 mb-1.5">
                        <div className="flex items-center gap-2 min-w-0">
                          <TypeIcon className="w-3.5 h-3.5 flex-shrink-0" style={{ color: cfg.color }} />
                          {aff.href ? (
                            <Link href={aff.href} className="font-bold text-sm text-zinc-200 hover:text-white transition-colors truncate">
                              {aff.name}
                            </Link>
                          ) : (
                            <span className="font-bold text-sm text-zinc-200 truncate">{aff.name}</span>
                          )}
                        </div>
                        <span className="text-[8px] px-1.5 py-0.5 font-bold uppercase whitespace-nowrap tracking-wider flex-shrink-0" style={{ color: cfg.color, border: `1px solid ${cfg.color}35`, background: `${cfg.color}08` }}>
                          {aff.type}
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-500 leading-relaxed line-clamp-2 pl-5">{aff.relationship}</p>
                      {aff.href && (
                        <div className="pl-5 mt-1.5">
                          <Link href={aff.href} className="inline-flex items-center gap-1 text-[10px] text-zinc-700 hover:text-red-400 transition-colors font-mono">
                            View Profile <ArrowUpRight className="w-3 h-3" />
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- NETWORK ANALYSIS ---- */}
        {(defendants.length > 0 || affiliations.length > 0) && (
          <>
            <SectionDivider number="03" label="Network Analysis" />
            <NetworkTree investigation={{
              title: investigation.title,
              slug,
              severity: investigation.severity || 'medium',
              defendants: investigation.defendants,
              affiliations: investigation.affiliations,
              moneyTrail: investigation.moneyTrail,
              timeline: investigation.timeline,
            }} />
          </>
        )}

        {/* ---- DEFENDANTS & CHARGES ---- */}
        {defendants.length > 0 && (
          <>
            <SectionDivider number="04" label="Defendants & Charges" />
            <CollapsibleSection
              title={`Defendants & Charges (${defendants.length})`}
              icon={<Gavel className="w-5 h-5" />}
              delay={0.1}
              badge={
                <span className="text-[10px] font-mono text-zinc-600">
                  {defendants.filter((d: { status: string }) => d.status === 'pending').length} pending
                </span>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {defendants.map((def: { name: string; status: string; role: string; charges?: string[]; sentence?: string; fine?: string; restitution?: string; notes?: string }, idx: number) => {
                  const st = statusColors[def.status] || statusColors.pending;
                  return (
                    <div key={idx} className="relative p-4 bg-[#020202] overflow-hidden" style={{ border: `1px solid ${st.border}` }}>
                      {/* Status indicator bar */}
                      <div className="absolute top-0 left-0 right-0 h-[2px]" style={{ background: `linear-gradient(90deg, ${st.dot}, transparent)` }} />

                      <div className="flex items-start justify-between gap-2 mb-2 pt-1">
                        <Link href={`/entities/individuals/${slugifyName(def.name)}`}
                          className="font-bold text-white text-sm hover:text-red-400 transition-colors">
                          {def.name}
                        </Link>
                        <div className="flex items-center gap-1.5 flex-shrink-0 px-2 py-0.5" style={{ background: st.bg, border: `1px solid ${st.border}` }}>
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: st.dot }} />
                          <span className="text-[9px] font-bold uppercase" style={{ color: st.text }}>{def.status}</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-500 mb-3 leading-relaxed">{def.role}</p>

                      {def.charges && def.charges.length > 0 && (
                        <div className="mb-3">
                          <span className="text-[9px] text-zinc-600 uppercase font-bold tracking-wider block mb-1.5">Charges ({def.charges.length})</span>
                          <div className="space-y-1">
                            {def.charges.map((charge: string, ci: number) => (
                              <div key={ci} className="flex items-start gap-2 text-[11px] text-red-400/80 leading-relaxed">
                                <div className="w-1 h-1 rounded-full mt-1.5 flex-shrink-0" style={{ backgroundColor: st.dot }} />
                                {charge}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {def.sentence && (
                        <div className="text-[11px] border-t border-[rgba(255,255,255,0.04)] pt-2 mb-1">
                          <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider">Outcome</span>
                          <p className="text-zinc-300 mt-0.5">{def.sentence}</p>
                        </div>
                      )}
                      {def.fine && (
                        <div className="text-[11px]">
                          <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider">Fine</span>
                          <p className="text-yellow-400/80 mt-0.5">{def.fine}</p>
                        </div>
                      )}
                      {def.restitution && (
                        <div className="text-[11px] mt-1">
                          <span className="text-zinc-600 font-bold text-[9px] uppercase tracking-wider">Restitution</span>
                          <p className="text-yellow-400/80 mt-0.5">{def.restitution}</p>
                        </div>
                      )}
                      {def.notes && (
                        <p className="text-[10px] text-zinc-600 mt-2 border-t border-[rgba(255,255,255,0.03)] pt-2 italic leading-relaxed">{def.notes}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- APPLICABLE LAWS ---- */}
        {statutes.length > 0 && (
          <>
            <SectionDivider number="05" label="Applicable Laws & Statutes" />
            <CollapsibleSection
              title={`Applicable Laws (${statutes.length})`}
              icon={<Scale className="w-5 h-5" />}
              delay={0.12}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {statutes.map((statute: { code: string; description?: string }, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-[#020202] border border-[rgba(184,0,0,0.12)] hover:border-[rgba(184,0,0,0.25)] transition-colors">
                    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0 border border-zinc-800 mt-0.5">
                      <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-zinc-200 mb-0.5">{statute.code}</p>
                      {statute.description && (
                        <p className="text-[11px] text-zinc-500 leading-relaxed">{statute.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- ACCOUNTABILITY ENGINE ---- */}
        {accountabilityContent && (
          <>
            <SectionDivider number="06" label="Accountability Engine" />
            <AccountabilitySection content={accountabilityContent} slug={slug} title={investigation.title} />
          </>
        )}

        {/* ---- MONEY TRAIL ---- */}
        {moneyTrail.length > 0 && (
          <>
            <SectionDivider number="07" label="Money Trail" />
            <CollapsibleSection
              title={`Money Trail (${moneyTrail.length} transactions)`}
              icon={<DollarSign className="w-5 h-5" />}
              delay={0.15}
              badge={
                <span className="text-[10px] font-mono text-yellow-500/60">
                  {moneyTrail.length} flows tracked
                </span>
              }
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {moneyTrail.map((item: { date: string; amount: string; from: string; to: string; purpose: string; documented: boolean }, idx: number) => (
                  <div key={idx} className="relative p-4 bg-[#020202] overflow-hidden" style={{ border: '1px solid rgba(234,179,8,0.15)' }}>
                    <div className="absolute top-0 left-0 right-0 h-[1px]" style={{ background: 'linear-gradient(90deg, rgba(234,179,8,0.30), transparent)' }} />
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <span className="font-mono text-zinc-600 text-[10px] flex items-center gap-1.5">
                        <Calendar className="w-3 h-3" /> {item.date}
                      </span>
                      <span className="text-white font-black text-sm font-mono">{item.amount}</span>
                    </div>
                    <div className="space-y-1.5 mb-2">
                      <div className="flex items-start gap-2 text-[11px]">
                        <span className="text-red-400/50 font-mono flex-shrink-0 w-10">FROM</span>
                        <span className="text-zinc-400">{item.from}</span>
                      </div>
                      <div className="flex items-start gap-2 text-[11px]">
                        <span className="text-green-400/50 font-mono flex-shrink-0 w-10">TO</span>
                        <span className="text-zinc-400">{item.to}</span>
                      </div>
                    </div>
                    <p className="text-[10px] text-zinc-600 leading-relaxed">{item.purpose}</p>
                    {!item.documented && (
                      <span className="inline-block mt-2 text-[9px] text-yellow-600 uppercase font-bold border border-yellow-800/30 px-1.5 py-0.5">Unverified</span>
                    )}
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- INVESTIGATION DETAILS (DEEP DIVE) ---- */}
        {mainContent && mainContent.length > 0 && (
          <>
            <SectionDivider number="08" label="Full Investigation" />
            <CollapsibleSection
              title="Investigation Details"
              icon={<FileText className="w-5 h-5" />}
              delay={0.18}
              defaultOpen={true}
            >
              <div className="max-w-4xl space-y-6">
                {mainContent.map((paragraph: string, idx: number) => {
                  const colonIdx = paragraph.indexOf(':');
                  const hasHeader = colonIdx > 0 && colonIdx < 60 && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase() && !/\d/.test(paragraph.substring(0, colonIdx));
                  if (hasHeader) {
                    const heading = paragraph.substring(0, colonIdx);
                    const body = paragraph.substring(colonIdx + 1).trim();
                    return (
                      <div key={idx} className="relative pl-5">
                        <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: `linear-gradient(to bottom, ${sevCfg.color}50, ${sevCfg.color}10)` }} />
                        <h3 className="text-xs font-black uppercase tracking-[0.15em] mb-2" style={{ color: `${sevCfg.color}90` }}>{heading}</h3>
                        <p className="text-sm text-zinc-300 leading-[1.9]">{body}</p>
                      </div>
                    );
                  }
                  return (
                    <p key={idx} className="text-sm text-zinc-300 leading-[1.9]">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- TIMELINE ---- */}
        {timeline.length > 0 && (
          <>
            <SectionDivider number="09" label="Timeline" />
            <CollapsibleSection
              title={`Timeline (${timeline.length} events)`}
              icon={<Calendar className="w-5 h-5" />}
              delay={0.2}
              defaultOpen={timeline.length <= 20}
            >
              <div className="relative">
                {/* Central vertical line */}
                <div className="absolute left-[87px] top-0 bottom-0 w-[1px]" style={{ background: `linear-gradient(to bottom, ${sevCfg.color}30, ${sevCfg.color}10, transparent)` }} />

                <div className="space-y-0">
                  {timeline.map((item: { date: string; event: string; type?: string }, idx: number) => {
                    const typeColors: Record<string, string> = {
                      critical: '#dc2626',
                      legal: '#a855f7',
                      political: '#8b5cf6',
                      financial: '#eab308',
                      default: '#52525b',
                    };
                    const dotColor = typeColors[item.type || 'default'] || typeColors.default;
                    const isMajor = item.type === 'critical' || item.type === 'legal';

                    return (
                      <div key={idx} className={`relative flex items-start gap-5 py-3 group ${isMajor ? 'pl-2' : ''}`}>
                        {/* Date */}
                        <span className="text-[10px] text-zinc-600 font-mono w-[75px] flex-shrink-0 text-right pt-0.5">{item.date}</span>
                        {/* Dot */}
                        <div className="relative flex-shrink-0 mt-1.5">
                          <div className="w-2.5 h-2.5" style={{ backgroundColor: dotColor, boxShadow: isMajor ? `0 0 6px ${dotColor}60` : 'none' }} />
                        </div>
                        {/* Event */}
                        <p className={`text-sm leading-relaxed flex-1 ${isMajor ? 'text-zinc-200 font-medium' : 'text-zinc-400'}`}>
                          {item.event}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* ---- SOURCES ---- */}
        {sources.length > 0 && (
          <>
            <SectionDivider number="10" label="Sources & Documentation" />
            <CollapsibleSection
              title={`Sources (${sources.length})`}
              icon={<ExternalLink className="w-5 h-5" />}
              delay={0.22}
              defaultOpen={sources.length <= 15}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sources.map((source: { url: string; title: string; type: string }, idx: number) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer"
                    className="group flex items-start gap-3 p-3 bg-[#020202] border border-[rgba(184,0,0,0.08)] hover:border-[rgba(184,0,0,0.25)] transition-all">
                    <div className="w-7 h-7 flex items-center justify-center border border-zinc-800 group-hover:border-red-900/40 transition-colors flex-shrink-0 mt-0.5">
                      <ExternalLink className="w-3 h-3 text-zinc-700 group-hover:text-red-400 transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-sm text-zinc-300 group-hover:text-white transition-colors block truncate">
                        {source.title}
                      </span>
                      <span className="text-[10px] text-zinc-700 font-mono uppercase tracking-wider">{source.type}</span>
                    </div>
                  </a>
                ))}
              </div>
            </CollapsibleSection>
          </>
        )}

        {/* Bottom spacer */}
        <div className="h-16" />
      </div>
    </div>
  );
}
