'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft, AlertTriangle, Users, FileText,
  ExternalLink, ShieldAlert, DollarSign, Building2,
  Gavel, BookOpen, Megaphone, Share2, Copy,
  ArrowUpRight, Landmark, ClipboardCheck,
  Crosshair, ChevronDown, Shield, Calendar,
  Fingerprint, Scale, Clock, TrendingUp, Check,
  Target, ArrowRight, Eye, Lock,
  Maximize2, Minimize2, ChevronUp, Download,
} from 'lucide-react';
import { pdf } from '@react-pdf/renderer';
import GlitchText from '@/components/effects/GlitchText';
import CrystalButton from '@/components/ui/CrystalButton';
import EvidenceTierBadge from '@/components/ui/EvidenceTierBadge';
import investigationDatabase from '@/data/investigations';
import investigationDefendants from '@/data/investigations/investigationDefendants';
import accountabilityDatabase from '@/data/accountability';
import InvestigationDossierPDF from '@/components/investigation/InvestigationDossierPDF';
import { getArkHiveSealPngDataUri } from '@/components/ui/ArkHiveSeal';

const NetworkTree = dynamic(() => import('@/components/investigation/NetworkTree'), { ssr: false });
const AccountabilityActionCenter = dynamic(() => import('@/components/investigation/AccountabilityActionCenter'), { ssr: false });

/* ================================================================
   SEVERITY & STATUS CONFIG
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
    color: '#dc2626', glow: 'rgba(220,38,38,0.15)', bg: 'rgba(220,38,38,0.06)',
    border: 'rgba(220,38,38,0.30)', label: 'HIGH', level: 'II',
    gradient: 'linear-gradient(135deg, rgba(220,38,38,0.10) 0%, transparent 50%)',
    accentDark: 'rgba(220,38,38,0.04)',
  },
  medium: {
    color: '#b91c1c', glow: 'rgba(185,28,28,0.12)', bg: 'rgba(185,28,28,0.05)',
    border: 'rgba(185,28,28,0.25)', label: 'ELEVATED', level: 'III',
    gradient: 'linear-gradient(135deg, rgba(185,28,28,0.08) 0%, transparent 50%)',
    accentDark: 'rgba(185,28,28,0.03)',
  },
  low: {
    color: '#991b1b', glow: 'rgba(153,27,27,0.10)', bg: 'rgba(153,27,27,0.04)',
    border: 'rgba(153,27,27,0.20)', label: 'STANDARD', level: 'IV',
    gradient: 'linear-gradient(135deg, rgba(153,27,27,0.06) 0%, transparent 50%)',
    accentDark: 'rgba(153,27,27,0.03)',
  },
};

const statusColors: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  convicted:    { bg: 'rgba(239,68,68,0.10)',  text: '#fca5a5', border: 'rgba(239,68,68,0.35)', dot: '#ef4444' },
  incarcerated: { bg: 'rgba(220,38,38,0.12)',  text: '#fecaca', border: 'rgba(220,38,38,0.40)', dot: '#dc2626' },
  indicted:     { bg: 'rgba(185,28,28,0.10)',  text: '#fca5a5', border: 'rgba(185,28,28,0.35)', dot: '#b91c1c' },
  charged:      { bg: 'rgba(153,27,27,0.10)',  text: '#fecaca', border: 'rgba(153,27,27,0.35)', dot: '#991b1b' },
  pending:      { bg: 'rgba(127,29,29,0.08)',  text: '#fca5a5', border: 'rgba(127,29,29,0.30)', dot: '#7f1d1d' },
  settled:      { bg: 'rgba(113,113,122,0.08)', text: '#a1a1aa', border: 'rgba(113,113,122,0.25)', dot: '#71717a' },
  acquitted:    { bg: 'rgba(107,33,33,0.08)',  text: '#fecaca', border: 'rgba(107,33,33,0.25)', dot: '#6b2121' },
  pardoned:     { bg: 'rgba(159,18,57,0.08)',  text: '#fda4af', border: 'rgba(159,18,57,0.25)', dot: '#9f1239' },
  appealing:    { bg: 'rgba(190,18,60,0.08)',  text: '#fda4af', border: 'rgba(190,18,60,0.25)', dot: '#be123c' },
  released:     { bg: 'rgba(136,19,55,0.06)',  text: '#fecdd3', border: 'rgba(136,19,55,0.20)', dot: '#881337' },
};

const entityTypeConfig: Record<string, { color: string; bg: string; icon: typeof Building2; label: string }> = {
  agency:       { color: '#ef4444', bg: 'rgba(239,68,68,0.06)',   icon: Shield, label: 'Agency' },
  corporation:  { color: '#dc2626', bg: 'rgba(220,38,38,0.06)',   icon: Building2, label: 'Corporation' },
  individual:   { color: '#b91c1c', bg: 'rgba(185,28,28,0.06)',   icon: Fingerprint, label: 'Individual' },
  organization: { color: '#991b1b', bg: 'rgba(153,27,27,0.06)',   icon: Users, label: 'Organization' },
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

type OpTrack = 'legal' | 'direct' | 'investigate' | 'expose' | 'economic';
const trackOrder: OpTrack[] = ['legal', 'direct', 'investigate', 'expose', 'economic'];

const trackMeta: Record<OpTrack, { label: string; directive: string; icon: typeof Crosshair; color: string; urgency: string }> = {
  legal:       { label: 'PROSECUTE',     directive: 'File suits. Petition grand juries. Use every legal weapon available.',      icon: Gavel,          color: '#ef4444', urgency: 'MAXIMUM' },
  direct:      { label: 'DIRECT ACTION', directive: 'File formal complaints with enforcement bodies and independent watchdogs.', icon: Target,         color: '#dc2626', urgency: 'IMMEDIATE' },
  investigate: { label: 'INVESTIGATE',   directive: 'Extract records. Submit FOIA requests. Build unbreakable evidence chains.', icon: ClipboardCheck, color: '#b91c1c', urgency: 'PRIORITY' },
  expose:      { label: 'EXPOSE',        directive: 'Document everything. Archive. Make suppression impossible.',                icon: Crosshair,      color: '#991b1b', urgency: 'ONGOING' },
  economic:    { label: 'DISRUPT',       directive: 'Target the financial infrastructure. Boycott. Divest. Defund.',             icon: DollarSign,     color: '#7f1d1d', urgency: 'SUSTAINED' },
};

function categorizeOp(text: string): OpTrack {
  const lower = text.toLowerCase();
  if (lower.includes('legal') || lower.includes('attorney') || lower.includes('lawsuit') || lower.includes('court') || lower.includes('wrongful') || lower.includes('legal aid') || lower.includes('sue') || lower.includes('litigation') || lower.includes('class action') || lower.includes('grand jury') || lower.includes('qui tam') || lower.includes('death claim') || lower.includes('legal assistance') || lower.includes('legal services')) return 'legal';
  if (lower.includes('file complaint') || lower.includes('complaint') || lower.includes('consumer complaint') || lower.includes('inspector general') || lower.includes('attorney general') || lower.includes('report price') || lower.includes('price goug') || lower.includes('whistleblow') || lower.includes('tip line') || lower.includes('enforcement') || lower.includes('commission') || lower.includes('regulatory')) return 'direct';
  if (lower.includes('public information') || lower.includes('foia') || lower.includes('open record') || lower.includes('records request') || lower.includes('information request') || lower.includes('information act') || lower.includes('submit') || lower.includes('document') || lower.includes('audit')) return 'investigate';
  if (lower.includes('donate') || lower.includes('fund') || lower.includes('boycott') || lower.includes('divest') || lower.includes('defund') || lower.includes('shareholder') || lower.includes('disinvest')) return 'economic';
  if (lower.includes('share') || lower.includes('spread') || lower.includes('social') || lower.includes('media') || lower.includes('support org') || lower.includes('organizations working')) return 'expose';
  if (lower.includes('vote') || lower.includes('elect') || lower.includes('contact') || lower.includes('representative') || lower.includes('senator') || lower.includes('legislat') || lower.includes('demand') || lower.includes('state rep') || lower.includes('congress')) return 'expose';
  return 'expose';
}

function slugifyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

/* ================================================================
   ENFORCEMENT PORTALS
   ================================================================ */

const enforcementPortals = [
  { name: 'FBI Crime Tips', url: 'https://tips.fbi.gov/', icon: Shield, desc: 'Submit evidence of federal crimes directly to the FBI.', color: '#ef4444' },
  { name: 'DOJ Report Crime', url: 'https://www.justice.gov/actioncenter/report-crime', icon: Gavel, desc: 'File criminal reports with the Department of Justice.', color: '#dc2626' },
  { name: 'Inspector General Directory', url: 'https://www.ignet.gov/content/inspectors-general-directory', icon: ShieldAlert, desc: 'File complaints with agency IGs. Independent federal watchdogs with subpoena power.', color: '#b91c1c' },
  { name: 'State Attorney General', url: 'https://www.naag.org/find-my-ag/', icon: Scale, desc: 'File complaints with your State AG. Real prosecution and subpoena authority.', color: '#991b1b' },
  { name: 'File FOIA Request', url: 'https://www.foia.gov/', icon: FileText, desc: 'Force disclosure of government records under the Freedom of Information Act.', color: '#ef4444' },
  { name: 'SEC Whistleblower', url: 'https://www.sec.gov/whistleblower', icon: DollarSign, desc: 'Report securities violations. Whistleblowers receive 10-30% of sanctions over $1M.', color: '#dc2626' },
  { name: 'IRS Whistleblower', url: 'https://www.irs.gov/compliance/whistleblower-office', icon: TrendingUp, desc: 'Report tax fraud over $2M. Awards of 15-30% of collected proceeds.', color: '#b91c1c' },
  { name: 'FTC Report Fraud', url: 'https://reportfraud.ftc.gov/', icon: AlertTriangle, desc: 'Report fraud, scams, and unfair business to the Federal Trade Commission.', color: '#991b1b' },
  { name: 'International Criminal Court', url: 'https://www.icc-cpi.int/about/otp/otp-contact', icon: Landmark, desc: 'Submit evidence of crimes against humanity and war crimes to the ICC.', color: '#7f1d1d' },
];

/* ================================================================
   ANIMATED COUNTER
   ================================================================ */

function AnimatedCount({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView || value === 0) { if (value === 0) setDisplay(0); return; }
    const timeout = setTimeout(() => {
      const duration = 1200;
      const start = performance.now();
      const step = (now: number) => {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        setDisplay(Math.round(eased * value));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }, delay * 1000);
    return () => clearTimeout(timeout);
  }, [inView, value, delay]);

  return <span ref={ref}>{display}</span>;
}

/* ================================================================
   STAGGER ANIMATION VARIANTS
   ================================================================ */

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
};

const fadeSlideUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeSlideLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/* ================================================================
   SCROLL PROGRESS
   ================================================================ */

function ScrollProgress({ color }: { color: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = scrollHeight - clientHeight;
      setProgress(max > 0 ? scrollTop / max : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <motion.div
        className="h-full origin-left"
        style={{
          background: `linear-gradient(90deg, ${color}, ${color}90)`,
          scaleX: progress,
          boxShadow: `0 0 12px ${color}30, 0 0 4px ${color}50`,
        }}
      />
    </div>
  );
}

/* ================================================================
   SECTION NAVIGATOR
   ================================================================ */

function SectionNav({
  sections,
  activeId,
  sevColor,
}: {
  sections: { id: string; number: string; label: string; icon: React.ElementType }[];
  activeId: string;
  sevColor: string;
}) {
  return (
    <motion.nav
      className="fixed left-3 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-0.5 py-3"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      {/* Vertical connecting line */}
      <div className="absolute left-1/2 -translate-x-1/2 top-3 bottom-3 w-px bg-white/[0.03]" />

      {sections.map((section) => {
        const Icon = section.icon;
        const isActive = activeId === section.id;
        return (
          <button
            key={section.id}
            onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
            className="group relative flex items-center z-10"
            title={section.label}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center transition-all duration-300 ${
                isActive
                  ? 'border bg-white/[0.04]'
                  : 'border border-transparent hover:bg-white/[0.02]'
              }`}
              style={isActive ? { borderColor: `${sevColor}40` } : undefined}
            >
              <span
                className={`text-[8px] font-mono font-black transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-zinc-700 group-hover:text-zinc-500'
                }`}
              >
                {section.number}
              </span>
            </div>

            {/* Active pip */}
            {isActive && (
              <motion.div
                className="absolute -left-1.5 w-[3px] h-3"
                style={{ background: sevColor }}
                layoutId="section-nav-pip"
                transition={{ type: 'spring', stiffness: 500, damping: 35 }}
              />
            )}

            {/* Hover tooltip */}
            <div className="absolute left-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900 border border-white/[0.08]">
                <Icon className="w-3 h-3 text-zinc-500" />
                <span className="text-[10px] font-bold text-zinc-300 uppercase tracking-wider">{section.label}</span>
              </div>
            </div>
          </button>
        );
      })}
    </motion.nav>
  );
}

/* ================================================================
   COLLAPSIBLE GLASS
   ================================================================ */

function CollapsibleGlass({
  title, number, icon, children, defaultOpen = false, count, badge, accentColor,
  expandTrigger = 0, collapseTrigger = 0, sectionId,
}: {
  title: string; number: string; icon: React.ReactNode; children: React.ReactNode;
  defaultOpen?: boolean; count?: number; badge?: React.ReactNode; accentColor?: string;
  expandTrigger?: number; collapseTrigger?: number; sectionId?: string;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const accent = accentColor || 'rgba(184,0,0,0.50)';

  useEffect(() => { if (expandTrigger > 0) setIsOpen(true); }, [expandTrigger]);
  useEffect(() => { if (collapseTrigger > 0) setIsOpen(false); }, [collapseTrigger]);

  return (
    <div className="glass-card overflow-hidden relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-2 p-1.5 sm:p-2 cursor-pointer select-none group relative z-10"
      >
        <div className="flex items-center justify-center w-6 h-6 flex-shrink-0 relative"
          style={{
            background: accentColor ? `${accentColor}06` : 'rgba(184,0,0,0.04)',
            border: `1px solid ${accentColor ? `${accentColor}18` : 'rgba(184,0,0,0.10)'}`,
          }}>
          <span className="text-[9px] font-mono font-black tracking-wider" style={{ color: accent }}>{number}</span>
        </div>
        <span className="text-zinc-600 flex-shrink-0">{icon}</span>
        <div className="flex flex-col items-start">
          <h2 className="text-sm font-black text-white uppercase tracking-[0.2em] leading-tight">{title}</h2>
          {typeof count === 'number' && (
            <span className="text-[9px] font-mono mt-0.5"
              style={{ color: accentColor ? `${accentColor}60` : 'rgba(82,82,91,0.7)' }}>
              {count} {count === 1 ? 'RECORD' : 'RECORDS'}
            </span>
          )}
        </div>
        <div className="flex-1" />
        {badge}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <ChevronDown className="w-4 h-4 text-zinc-700 group-hover:text-zinc-400 transition-colors duration-200" />
        </motion.div>
      </button>

      {/* Animated accent line below header */}
      <motion.div
        className="h-px mx-1.5 sm:mx-2"
        style={{ background: `linear-gradient(90deg, ${accent}, transparent 80%)`, transformOrigin: 'left' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      />

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-1.5 sm:px-2 pb-2 pt-1.5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ================================================================
   ACCOUNTABILITY ENGINE
   ================================================================ */

function AccountabilityEngine({ content, slug, investigation }: {
  content: string; slug: string; investigation: any;
}) {
  const [completedOps, setCompletedOps] = useState<Set<number>>(new Set());
  const [viewCount, setViewCount] = useState(0);
  const [copied, setCopied] = useState<string | null>(null);
  const [expandedTemplate, setExpandedTemplate] = useState<string | null>(null);

  const title = investigation.title;
  const summary = investigation.summary;
  const defendants = investigation.defendants || [];
  const sources = investigation.sources || [];
  const moneyTrail = investigation.moneyTrail || [];
  const statutes = investigation.statutes || [];
  const affiliations = investigation.affiliations || [];

  useEffect(() => {
    const stored = localStorage.getItem(`arkhive_ops_${slug}`);
    if (stored) {
      try { setCompletedOps(new Set(JSON.parse(stored).completed || [])); } catch { /* */ }
    }
    const views = parseInt(localStorage.getItem(`arkhive_views_${slug}`) || '0', 10) + 1;
    localStorage.setItem(`arkhive_views_${slug}`, String(views));
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

  const downloadText = useCallback((text: string, filename: string) => {
    const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const rawActions = content.replace(/^\s*WHAT YOU CAN DO TO HOLD THEM ACCOUNTABLE:\s*/i, '').split(/\(\d+\)\s*/).filter(Boolean);
  const operations = rawActions.map((action, idx) => {
    const { text, urls } = extractUrls(action.trim());
    return { id: idx, text, urls, track: categorizeOp(text) };
  });
  const grouped = trackOrder.reduce((acc, track) => {
    const ops = operations.filter(op => op.track === track);
    if (ops.length > 0) acc[track] = ops;
    return acc;
  }, {} as Partial<Record<OpTrack, typeof operations>>);

  const progress = operations.length > 0 ? (completedOps.size / operations.length) * 100 : 0;
  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://arkhive.live/investigations/${slug}`;

  /* Template Generation */

  const socialPost = `EXPOSED: ${title}\n\n${summary}${defendants.length > 0 ? `\n\nNamed defendants: ${defendants.map((d: any) => d.name).join(', ')}` : ''}${statutes.length > 0 ? `\nLaws violated: ${statutes.map((s: any) => s.code).join(', ')}` : ''}\n\nFull investigation // ${sources.length} sourced references:\n${shareUrl}\n\nThe evidence speaks for itself.\n\n#ArkHive #Accountability`;

  const legalDemand = `FORMAL LEGAL DEMAND AND NOTICE OF EVIDENCE PRESERVATION\n\nTO: [Responsible Party / Entity Name]\nFROM: [Your Full Legal Name]\nDATE: [Date]\nRE: ${title}\n\n${'-'.repeat(60)}\n\nDear Sir/Madam,\n\nThis letter constitutes formal notice regarding documented evidence of misconduct and/or legal violations as detailed in the investigation referenced above.\n\nFACTUAL BASIS:\n${summary}\n${defendants.length > 0 ? `\nNAMED PARTIES (${defendants.length}):\n${defendants.map((d: any) => `* ${d.name} | ${d.role} [Status: ${d.status.toUpperCase()}]${d.charges?.length ? '\n  Charges: ' + d.charges.join('; ') : ''}`).join('\n')}\n` : ''}${statutes.length > 0 ? `\nAPPLICABLE LEGAL PROVISIONS:\n${statutes.map((s: any) => `* ${s.code}${s.description ? ': ' + s.description : ''}`).join('\n')}\n` : ''}\nDEMANDS:\n1. Immediate preservation of ALL documents, communications, electronic records, and physical evidence related to the above matter\n2. Full disclosure of all information relevant to the documented violations\n3. Immediate cessation of any ongoing conduct constituting a violation of the laws cited above\n4. Written acknowledgment of receipt of this demand within ten (10) business days\n\nNOTICE OF ESCALATION:\nFailure to comply with these demands within thirty (30) days will result in escalation to appropriate enforcement bodies, including but not limited to:\n- The Office of the Inspector General for the relevant agency\n- The State Attorney General\n- The United States Department of Justice\n- Applicable federal regulatory agencies\n- Private legal action as permitted under applicable statutes\n\nThis letter creates a legal record. You are now on formal notice of these documented findings.\n\nEvidentiary Record: ${sources.length} sourced references\n${shareUrl}\n\nRespectfully,\n[Your Full Legal Name]\n[Your Address]\n[Your Contact Information]\n[Date]`;

  const agencies = affiliations.filter((a: any) => a.type === 'agency');

  const igComplaint = `FORMAL COMPLAINT TO THE OFFICE OF INSPECTOR GENERAL\n\n${agencies.length > 0 ? `Agency: ${agencies.map((a: any) => a.name).join(', ')}\n` : 'Agency: [Relevant Federal Agency]\n'}Inspector General Office: [Locate at ignet.gov/content/inspectors-general-directory]\n\n${'-'.repeat(60)}\n\nCOMPLAINANT INFORMATION:\nName: [Your Name]\nAddress: [Your Address]\nEmail: [Your Email]\nPhone: [Your Phone]\n\nCOMPLAINT:\nI hereby file a formal complaint regarding documented misconduct related to:\n\n"${title}"\n\nSUMMARY OF ALLEGATIONS:\n${summary}\n${defendants.length > 0 ? `\nSUBJECTS OF COMPLAINT (${defendants.length}):\n${defendants.map((d: any) => `* ${d.name}: ${d.role}\n  Current status: ${d.status.toUpperCase()}${d.charges?.length ? '\n  Known charges: ' + d.charges.join('; ') : ''}`).join('\n')}\n` : ''}${statutes.length > 0 ? `\nLAWS AND REGULATIONS POTENTIALLY VIOLATED:\n${statutes.map((s: any) => `* ${s.code}${s.description ? ': ' + s.description : ''}`).join('\n')}\n` : ''}${moneyTrail.length > 0 ? `\nFINANCIAL IRREGULARITIES:\n${moneyTrail.length} documented financial transactions between implicated parties are detailed in the full investigation.\n` : ''}\nEVIDENCE:\nThis complaint is supported by ${sources.length} independently sourced references, all available at:\n${shareUrl}\n\nREQUESTED ACTION:\n1. Formal investigation into the allegations described above\n2. Preservation of all relevant agency records and communications\n3. Referral to the Department of Justice if criminal conduct is substantiated\n4. Written response regarding the disposition of this complaint\n\nSubmitted on: [Date]\n[Your Signature]\n[Your Printed Name]`;

  const pressTip = `PRESS TIP: For Immediate Investigation\n\nSubject: ${title}\n\n${summary}\n${defendants.length > 0 ? `\nNAMED SUBJECTS (${defendants.length}):\n${defendants.map((d: any) => `* ${d.name} | ${d.role} [${d.status.toUpperCase()}]`).join('\n')}\n` : ''}${moneyTrail.length > 0 ? `\nFINANCIAL TRAIL: ${moneyTrail.length} documented transactions\n` : ''}${statutes.length > 0 ? `\nAPPLICABLE LAWS:\n${statutes.map((s: any) => `* ${s.code}`).join('\n')}\n` : ''}\nThis investigation includes ${sources.length} sourced references, documented evidence, and applicable statutes.\n\nFull evidence package: ${shareUrl}\n\nSubmitted via ArkHive (arkhive.live) // Open accountability platform.`;

  const foiaTemplate = agencies.length > 0 ? `Freedom of Information Act Request\n\nTo: FOIA Officer\n${agencies.map((a: any) => a.name).join(', ')}\n\nDear FOIA Officer,\n\nPursuant to the Freedom of Information Act, 5 U.S.C. § 552, I am requesting access to and copies of all records related to:\n\n"${title}"\n\nSpecifically, I request:\n1. All internal communications, memoranda, and emails related to the above matter\n2. All reports, studies, and analyses concerning the above\n3. All correspondence with external parties regarding the above\n4. All financial records and transaction logs related to the above\n5. All records of enforcement actions taken or declined regarding the above\n\nI am willing to pay reasonable duplication fees. If fees exceed $25, please notify me before processing.\n\nIf you deny this request in whole or in part, please cite the specific exemption(s) and notify me of appeal procedures available under 5 U.S.C. § 552(a)(6).\n\nThank you for your prompt attention to this matter.\n\n[Your Name]\n[Your Address]\n[Your Email]\n[Date]` : null;

  const evidencePackage = `${'='.repeat(60)}\nINVESTIGATION FILE: ${title}\nSeverity: ${(investigation.severity || 'medium').toUpperCase()} | Category: ${investigation.category}\nSource: ArkHive (arkhive.live)\n${'='.repeat(60)}\n\nSUMMARY\n${summary}\n${defendants.length > 0 ? `\nNAMED DEFENDANTS (${defendants.length})\n${defendants.map((d: any) => `> ${d.name} | ${d.role} [${d.status.toUpperCase()}]${d.charges?.length ? '\n  Charges: ' + d.charges.join(', ') : ''}`).join('\n')}\n` : ''}${moneyTrail.length > 0 ? `\nFINANCIAL TRAIL (${moneyTrail.length} transactions)\n${moneyTrail.map((m: any) => `> ${m.date}: ${m.from} -> ${m.to} | ${m.amount}${m.purpose ? ' | ' + m.purpose : ''}`).join('\n')}\n` : ''}${statutes.length > 0 ? `\nAPPLICABLE LAWS\n${statutes.map((s: any) => `> ${s.code}${s.description ? ': ' + s.description : ''}`).join('\n')}\n` : ''}\nSOURCED EVIDENCE (${sources.length} references)\n${sources.map((s: any, i: number) => `[${i + 1}] ${s.title} | ${s.url}`).join('\n')}\n\nFULL INVESTIGATION\n${shareUrl}\n\n${'='.repeat(60)}\nCompiled from ArkHive (arkhive.live)\nOpen-source accountability platform\n${'='.repeat(60)}`;

  const templates = [
    { icon: Scale, title: 'Legal Demand Notice', desc: 'Formal demand letter with evidence preservation notice. Carries legal weight.', content: legalDemand, key: 'legal', color: '#ef4444' },
    { icon: ShieldAlert, title: 'Inspector General Complaint', desc: 'Formal complaint to the independent federal watchdog with subpoena power.', content: igComplaint, key: 'ig', color: '#dc2626' },
    { icon: Megaphone, title: 'Press Tip', desc: 'Formatted for investigative journalists. Send to any newsroom.', content: pressTip, key: 'press', color: '#b91c1c' },
    { icon: Share2, title: 'Social Media Post', desc: 'Shareable post with key facts and evidence link.', content: socialPost, key: 'social', color: '#991b1b' },
    ...(foiaTemplate ? [{ icon: FileText, title: 'FOIA Request', desc: `Pre-addressed to: ${agencies.map((a: any) => a.name).join(', ')}`, content: foiaTemplate, key: 'foia', color: '#7f1d1d' }] : []),
  ];

  return (
    <div className="space-y-1.5">
      {/* ENGINE HEADER */}
      <div className="glass-card overflow-hidden">
        <div className="p-2 sm:p-2.5">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 flex items-center justify-center bg-red-500/[0.06] border border-red-500/15 flex-shrink-0">
              <Target className="w-3.5 h-3.5 text-red-400" />
            </div>
            <h2 className="text-sm font-black uppercase tracking-[0.15em] text-white leading-none">Accountability Engine</h2>
            <div className="flex-1" />
            <div className="flex items-center gap-2.5">
              <span className="text-[10px] font-mono tabular-nums text-zinc-600">
                <span className="text-white font-bold">{completedOps.size}</span>/{operations.length}
              </span>
              <div className="w-20 h-1 bg-zinc-900 overflow-hidden">
                <motion.div
                  className="h-full"
                  style={{ background: 'linear-gradient(90deg, #7f1d1d, #ef4444)' }}
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* OPERATION TRACKS — always visible */}
      {trackOrder.map(track => {
        const trackOps = grouped[track];
        if (!trackOps) return null;
        const meta = trackMeta[track];
        const TrackIcon = meta.icon;
        const trackCompleted = trackOps.filter(op => completedOps.has(op.id)).length;
        const trackProgress = (trackCompleted / trackOps.length) * 100;

        return (
          <motion.div
            key={track}
            className="glass-card overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Track accent bar */}
            <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${meta.color}50, ${meta.color}15, transparent)` }} />

            <div className="p-1.5 sm:p-2 pb-0">
              <div className="flex items-center gap-2 mb-1.5">
                <div className="w-6 h-6 flex items-center justify-center border flex-shrink-0 relative"
                  style={{ borderColor: `${meta.color}20`, background: `${meta.color}06` }}>
                  <TrackIcon className="w-3.5 h-3.5" style={{ color: meta.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-black text-white uppercase tracking-[0.15em]">{meta.label}</h3>
                    <span className="text-[10px] font-mono tabular-nums ml-auto" style={{ color: `${meta.color}60` }}>
                      {trackCompleted}/{trackOps.length}
                    </span>
                  </div>
                  <p className="text-[11px] mt-1 leading-relaxed" style={{ color: `${meta.color}40` }}>{meta.directive}</p>
                  {/* Track mini-progress */}
                  <div className="h-px mt-2 bg-zinc-900/50 overflow-hidden">
                    <motion.div
                      className="h-full"
                      style={{ background: meta.color }}
                      initial={{ width: 0 }}
                      animate={{ width: `${trackProgress}%` }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="p-1.5 sm:p-2 pt-1 space-y-0.5">
              {trackOps.map(op => {
                const isComplete = completedOps.has(op.id);
                return (
                  <motion.div
                    key={op.id}
                    className={`relative border p-2 sm:p-2.5 transition-all duration-300 group/op ${
                      isComplete
                        ? 'bg-[rgba(255,255,255,0.01)] border-zinc-800/20'
                        : 'bg-[rgba(255,255,255,0.015)] border-[rgba(255,255,255,0.05)] hover:border-[rgba(184,0,0,0.18)] hover:bg-[rgba(255,255,255,0.03)]'
                    }`}
                    style={isComplete ? { borderLeftWidth: 3, borderLeftColor: `${meta.color}25` } : { borderLeftWidth: 3, borderLeftColor: 'transparent' }}
                    whileHover={!isComplete ? { borderLeftColor: `${meta.color}40` } : undefined}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleOp(op.id)}
                        className={`w-6 h-6 border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 ${
                          isComplete ? 'border-red-600/40 bg-red-500/10' : 'border-zinc-700/50 hover:border-zinc-500 hover:bg-zinc-800/30'
                        }`}
                        aria-label={isComplete ? 'Mark incomplete' : 'Mark complete'}
                      >
                        <motion.div
                          initial={false}
                          animate={{ scale: isComplete ? 1 : 0, opacity: isComplete ? 1 : 0 }}
                          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                        >
                          <Check className="w-3 h-3 text-red-400" />
                        </motion.div>
                      </button>

                      <span className="text-[10px] font-mono font-black tracking-wider mt-1.5 flex-shrink-0 w-6 text-right tabular-nums"
                        style={{ color: isComplete ? `${meta.color}20` : `${meta.color}45` }}>
                        {String(op.id + 1).padStart(2, '0')}
                      </span>

                      <div className="flex-1 min-w-0">
                        <p className={`text-xs leading-[1.7] transition-all duration-300 ${
                          isComplete ? 'text-zinc-600 line-through decoration-zinc-700/50' : 'text-zinc-200'
                        }`}>{op.text}</p>

                        {op.urls.length > 0 && (
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {op.urls.map((u, ui) => (
                              <a key={ui} href={u.url} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold transition-all duration-200 group/link"
                                style={{ color: meta.color, background: `${meta.color}06`, border: `1px solid ${meta.color}12` }}
                                onMouseEnter={e => { e.currentTarget.style.background = `${meta.color}15`; e.currentTarget.style.borderColor = `${meta.color}35`; }}
                                onMouseLeave={e => { e.currentTarget.style.background = `${meta.color}06`; e.currentTarget.style.borderColor = `${meta.color}12`; }}>
                                <ArrowUpRight className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />{u.domain}
                              </a>
                            ))}
                            <button
                              onClick={() => copyText(`${op.text}${op.urls.length > 0 ? '\n\n' + op.urls.map(u => u.url).join('\n') : ''}`, `op-${op.id}`)}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[10px] font-bold text-zinc-600 bg-zinc-900/50 border border-zinc-800/30 hover:text-zinc-300 hover:border-zinc-700 transition-all duration-200">
                              {copied === `op-${op.id}` ? <><Check className="w-2.5 h-2.5" /> Copied</> : <><Copy className="w-2.5 h-2.5" /> Copy</>}
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        );
      })}

      {/* READY-TO-DEPLOY ARSENAL */}
      <motion.div
        className="glass-card p-2 sm:p-2.5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[rgba(184,0,0,0.06)] border border-[rgba(184,0,0,0.12)] flex-shrink-0">
            <Lock className="w-3 h-3 text-red-400/70" />
          </div>
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Ready-to-Deploy Arsenal</h3>
            <p className="text-[8px] text-zinc-600 mt-0.5">Legal demands, formal complaints, and evidence packages.</p>
          </div>
        </div>

        <div className="space-y-1.5">
          {templates.map(tmpl => {
            const TmplIcon = tmpl.icon;
            const isExpanded = expandedTemplate === tmpl.key;
            return (
              <div key={tmpl.key} className="border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.015)] overflow-hidden transition-all duration-300 hover:border-[rgba(255,255,255,0.08)]">
                <button
                  onClick={() => setExpandedTemplate(isExpanded ? null : tmpl.key)}
                  className="w-full flex items-center gap-2.5 p-2.5 text-left group cursor-pointer select-none"
                  aria-expanded={isExpanded}
                  aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${tmpl.title}`}
                >
                  <div className="w-6 h-6 flex items-center justify-center flex-shrink-0 transition-all duration-300"
                    style={{ background: `${tmpl.color}06`, border: `1px solid ${tmpl.color}12` }}>
                    <TmplIcon className="w-4 h-4" style={{ color: tmpl.color }} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-black text-white uppercase tracking-[0.15em] block">{tmpl.title}</span>
                    <span className="text-[10px] text-zinc-600 mt-0.5 block leading-relaxed">{tmpl.desc}</span>
                  </div>
                  <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.25 }}>
                    <ChevronDown className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 transition-colors" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 border-t border-[rgba(255,255,255,0.03)]">
                        <div className="bg-[#020202] border border-zinc-800/20 p-5 mt-4 max-h-[600px] overflow-y-auto">
                          <pre className="text-[11px] text-zinc-400 font-mono whitespace-pre-wrap leading-[1.7]">{tmpl.content}</pre>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2 mt-4">
                          <CrystalButton
                            variant="danger"
                            size="sm"
                            icon={copied === tmpl.key ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                            onClick={() => copyText(tmpl.content, tmpl.key)}
                          >
                            {copied === tmpl.key ? 'Copied to Clipboard' : `Copy ${tmpl.title}`}
                          </CrystalButton>
                          <CrystalButton
                            variant="secondary"
                            size="sm"
                            icon={<Download className="w-3.5 h-3.5" />}
                            onClick={() => downloadText(tmpl.content, `ArkHive_${tmpl.key}_${slug}.txt`)}
                          >
                            Download .txt
                          </CrystalButton>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ENFORCEMENT PORTALS */}
      <motion.div
        className="glass-card p-2 sm:p-2.5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-2.5 mb-1.5">
          <div className="w-6 h-6 flex items-center justify-center bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.15)] flex-shrink-0">
            <ShieldAlert className="w-3 h-3 text-red-400/70" />
          </div>
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Enforcement Portals</h3>
            <p className="text-[8px] text-zinc-600 mt-0.5">Independent watchdogs and enforcement bodies with real investigative power.</p>
          </div>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {enforcementPortals.map(portal => {
            const PortalIcon = portal.icon;
            return (
              <motion.a
                key={portal.name}
                href={portal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 p-2 bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.04)] transition-all duration-300 group relative overflow-hidden"
                variants={fadeSlideUp}
                whileHover={{ borderColor: `${portal.color}30`, y: -2 }}
              >
                {/* Left accent */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100"
                  style={{ background: portal.color }} />
                <div className="w-6 h-6 flex items-center justify-center flex-shrink-0"
                  style={{ background: `${portal.color}06`, border: `1px solid ${portal.color}12` }}>
                  <PortalIcon className="w-3 h-3" style={{ color: portal.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-zinc-300 group-hover:text-white transition-colors block leading-snug">{portal.name}</span>
                  <span className="text-[7px] text-zinc-600 block mt-0.5 leading-relaxed">{portal.desc}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-800 group-hover:text-red-400 transition-all mt-0.5 flex-shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>

      {/* EVIDENCE COMPILATION */}
      <motion.div
        className="glass-card p-2 sm:p-2.5"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-6 h-6 flex items-center justify-center bg-[rgba(239,68,68,0.06)] border border-[rgba(239,68,68,0.12)] flex-shrink-0">
            <ClipboardCheck className="w-3 h-3 text-red-400/70" />
          </div>
          <div>
            <h3 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">Evidence Compilation</h3>
            <p className="text-[8px] text-zinc-600 mt-0.5">Compile the full evidence chain into a single package for filing or sharing.</p>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 mb-2">
          {[
            { v: viewCount, l: 'Views', c: '#52525b' },
            { v: completedOps.size, l: 'Deployed', c: '#ef4444' },
            { v: operations.length - completedOps.size, l: 'Remaining', c: '#b91c1c' },
            { v: sources.length, l: 'Sources', c: '#991b1b' },
          ].map((stat, i) => (
            <div key={i} className="text-center py-2 bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.04)]">
              <div className="text-lg font-black font-mono tabular-nums" style={{ color: i === 0 ? '#fff' : stat.c }}>
                <AnimatedCount value={stat.v} delay={0.1 * i} />
              </div>
              <div className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.2em] mt-1">{stat.l}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-2">
          <CrystalButton
            variant="danger"
            size="sm"
            icon={copied === 'evidence' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            onClick={() => copyText(evidencePackage, 'evidence')}
          >
            {copied === 'evidence' ? 'Evidence Package Copied' : 'Copy Full Evidence Package'}
          </CrystalButton>
          <CrystalButton
            variant="secondary"
            size="sm"
            icon={copied === 'link' ? <Check className="w-3.5 h-3.5" /> : <Share2 className="w-3.5 h-3.5" />}
            onClick={() => copyText(shareUrl, 'link')}
          >
            {copied === 'link' ? 'Link Copied' : 'Copy Investigation Link'}
          </CrystalButton>
        </div>
      </motion.div>
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
          <div className="glass-card p-16">
            <AlertTriangle className="w-14 h-14 text-zinc-700 mx-auto mb-8" />
            <h1 className="text-3xl font-black text-white uppercase tracking-[0.15em] mb-4">Investigation Not Found</h1>
            <p className="text-zinc-500 mb-10 text-lg">The investigation &ldquo;{slug}&rdquo; could not be located in the archive.</p>
            <Link href="/investigations"
              className="inline-flex items-center gap-3 px-8 py-4 bg-zinc-900 border border-zinc-700/50 text-zinc-300 hover:text-white hover:border-zinc-600 transition-all text-sm font-bold uppercase tracking-wider">
              <ArrowLeft className="w-4 h-4" /> Return to Archive
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const sev = investigation.severity || 'medium';
  const sevCfg = severityConfig[sev] || severityConfig.medium;
  const rawDefendants = investigation.defendants || [];
  const defendantImages = investigationDefendants[slug] || [];
  const defendants = rawDefendants.map((d: any) => {
    const match = defendantImages.find((x: any) => x.name === d.name);
    return match?.imageUrl ? { ...d, imageUrl: match.imageUrl } : d;
  });
  const affiliations = investigation.affiliations || [];
  const moneyTrail = investigation.moneyTrail || [];
  const whereIsTheMoneyNow = investigation.whereIsTheMoneyNow || [];
  const timeline = investigation.timeline || [];
  const statutes = investigation.statutes || [];
  const sources = investigation.sources || [];

  const accountabilityIdx = investigation.content.findIndex((p: string) => p.startsWith('WHAT YOU CAN DO'));
  const accountabilityContent = accountabilityIdx >= 0 ? investigation.content[accountabilityIdx] : null;
  const accountabilityData = accountabilityDatabase[slug] || null;
  const mainContent = accountabilityIdx >= 0
    ? investigation.content.filter((_: string, i: number) => i !== accountabilityIdx)
    : investigation.content;

  const existingIndividualNames = new Set(
    affiliations.filter((a: any) => a.type === 'individual').map((a: any) => a.name?.toLowerCase())
  );
  const defendantEntities = defendants
    .filter((d: any) => !existingIndividualNames.has(d.name?.toLowerCase()))
    .map((d: any) => ({
      name: d.name,
      type: 'individual',
      relationship: d.role || 'Defendant',
      href: `/entities/individuals/${slugifyName(d.name)}`,
    }));
  const allEntities = [...affiliations, ...defendantEntities];

  const entityGroups = ['agency', 'corporation', 'individual', 'organization']
    .map(type => ({ type, items: allEntities.filter((a: { type: string }) => a.type === type), config: entityTypeConfig[type] }))
    .filter(g => g.items.length > 0);

  /* Section navigation state */
  const [activeSection, setActiveSection] = useState('hero');
  const [expandTrigger, setExpandTrigger] = useState(0);
  const [collapseTrigger, setCollapseTrigger] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [generatingPDF, setGeneratingPDF] = useState(false);

  const handleDownloadDossierPDF = useCallback(async () => {
    setGeneratingPDF(true);
    try {
      const sealUri = await getArkHiveSealPngDataUri();
      const doc = (
        <InvestigationDossierPDF
          investigation={investigation}
          slug={slug}
          sealDataUri={sealUri}
        />
      );
      const blob = await pdf(doc).toBlob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `ArkHive-Investigation-Dossier-${slug}.pdf`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setGeneratingPDF(false);
    }
  }, [investigation, slug]);

  const visibleSections = useMemo(() => {
    const s: { id: string; number: string; label: string; icon: React.ElementType }[] = [
      { id: 'hero', number: '01', label: 'Briefing', icon: Target },
      { id: 'summary', number: '02', label: 'Summary', icon: FileText },
    ];
    let n = 3;
    if (defendants.length > 0) s.push({ id: 'defendants', number: String(n++).padStart(2, '0'), label: 'Defendants', icon: Gavel });
    if (statutes.length > 0) s.push({ id: 'statutes', number: String(n++).padStart(2, '0'), label: 'Statutes', icon: Scale });
    if (accountabilityContent) s.push({ id: 'engine', number: String(n++).padStart(2, '0'), label: 'Engine', icon: Crosshair });
    if (mainContent?.length > 0) s.push({ id: 'investigation', number: String(n++).padStart(2, '0'), label: 'Investigation', icon: FileText });
    if (moneyTrail.length > 0) s.push({ id: 'money', number: String(n++).padStart(2, '0'), label: 'Money Trail', icon: DollarSign });
    if (whereIsTheMoneyNow.length > 0) s.push({ id: 'money-now', number: String(n++).padStart(2, '0'), label: 'Where Is The Money Now', icon: Landmark });
    if (affiliations.length > 0 || defendants.length > 0) s.push({ id: 'entities', number: String(n++).padStart(2, '0'), label: 'Network', icon: Users });
    if (defendants.length > 0 || affiliations.length > 0) s.push({ id: 'network', number: String(n++).padStart(2, '0'), label: 'Analysis', icon: Eye });
    if (accountabilityData) s.push({ id: 'action-center', number: String(n++).padStart(2, '0'), label: 'Action Center', icon: Megaphone });
    if (timeline.length > 0) s.push({ id: 'timeline', number: String(n++).padStart(2, '0'), label: 'Timeline', icon: Calendar });
    if (sources.length > 0) s.push({ id: 'sources', number: String(n++).padStart(2, '0'), label: 'Sources', icon: ExternalLink });
    return s;
  }, [defendants.length, statutes.length, accountabilityContent, accountabilityData, mainContent?.length, moneyTrail.length, whereIsTheMoneyNow.length, affiliations.length, timeline.length, sources.length]);

  const secNum = useCallback((id: string) => visibleSections.find(s => s.id === id)?.number || '??', [visibleSections]);

  /* IntersectionObserver for active section tracking */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter(e => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) => a.intersectionRatio > b.intersectionRatio ? a : b);
          setActiveSection(top.target.id);
        }
      },
      { rootMargin: '-15% 0px -75% 0px', threshold: [0, 0.1, 0.5] }
    );
    visibleSections.forEach(s => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [visibleSections]);

  /* Back to top visibility */
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 800);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const readingTime = useMemo(() => {
    const words = (investigation.summary + ' ' + mainContent.join(' ')).split(/\s+/).length;
    return Math.max(1, Math.ceil(words / 200));
  }, [investigation.summary, mainContent]);

  const threatIndex = useMemo(() => {
    let score = 0;
    score += Math.min(30, defendants.length * 5);
    score += Math.min(20, sources.length * 2);
    score += Math.min(15, statutes.length * 3);
    score += Math.min(15, moneyTrail.length * 3);
    score += Math.min(10, affiliations.length * 2);
    score += sev === 'critical' ? 10 : sev === 'high' ? 7 : sev === 'medium' ? 4 : 2;
    return Math.min(100, score);
  }, [defendants.length, sources.length, statutes.length, moneyTrail.length, affiliations.length, sev]);

  return (
    <div className="min-h-screen pt-12 lg:pt-14 pb-6 relative">
      {/* Scroll progress indicator */}
      <ScrollProgress color={sevCfg.color} />

      {/* Section navigator (desktop) */}
      <SectionNav sections={visibleSections} activeId={activeSection} sevColor={sevCfg.color} />

      {/* Back to top button */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-40 w-10 h-10 flex items-center justify-center bg-zinc-900/90 border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 group"
            style={{ boxShadow: `0 0 20px ${sevCfg.color}10` }}
          >
            <ChevronUp className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Severity atmospheric overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: `radial-gradient(ellipse 120% 50% at 50% -10%, ${sevCfg.color}03 0%, transparent 100%)`,
      }} />

      <div className="mx-auto px-2 sm:px-4 lg:px-5 xl:px-6 relative z-10">

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 01 // HERO Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        <motion.div
          id="hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="glass-card gloss-hover overflow-hidden relative"
        >
          <div className="absolute inset-0 pointer-events-none" style={{ background: sevCfg.gradient }} />
          {/* Top severity bar */}
          <div className="absolute top-0 left-0 right-0 h-[2px]" style={{
            background: `linear-gradient(90deg, transparent 2%, ${sevCfg.color}40 20%, ${sevCfg.color}70 50%, ${sevCfg.color}40 80%, transparent 98%)`,
          }} />

          <div className="relative z-10 p-2 sm:p-2.5 lg:p-3">
            {/* Navigation + severity badge */}
            <div className="flex items-center justify-between mb-1.5">
              <Link href="/investigations"
                className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-[11px] font-mono tracking-[0.2em] group">
                <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> INVESTIGATIONS
              </Link>
              <div className="flex items-center gap-2 flex-wrap justify-end">
                <EvidenceTierBadge investigation={investigation} size="hero" />
                <div className="flex items-center gap-3 px-4 py-2"
                  style={{ border: `1px solid ${sevCfg.border}`, background: sevCfg.bg }}>
                  <div className="w-2 h-2" style={{
                    backgroundColor: sevCfg.color,
                    boxShadow: `0 0 8px ${sevCfg.color}, 0 0 20px ${sevCfg.color}40`,
                    animation: 'bloodPulse 2s ease-in-out infinite',
                  }} />
                  <span className="text-[9px] font-black uppercase tracking-[0.3em]" style={{ color: sevCfg.color }}>
                    {sevCfg.label}
                  </span>
                  <div className="w-px h-3" style={{ background: `${sevCfg.color}25` }} />
                  <span className="text-[9px] font-mono text-zinc-500 tracking-widest">
                    LVL {sevCfg.level}
                  </span>
                </div>
              </div>
            </div>

            {/* Category + dates */}
            <motion.div
              className="flex flex-wrap items-center gap-2 mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-[0.2em] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 border border-[rgba(255,255,255,0.06)]">{investigation.category}</span>
              {investigation.date && (
                <span className="text-[10px] text-zinc-600 font-mono flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {investigation.date}</span>
              )}
              {investigation.lastUpdated && (
                <span className="text-[10px] text-zinc-700 font-mono flex items-center gap-1.5"><Clock className="w-3 h-3" /> Updated {investigation.lastUpdated}</span>
              )}
            </motion.div>

            {/* Title */}
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white uppercase leading-[0.85] tracking-tight mb-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <GlitchText text={investigation.title} />
            </motion.h1>

            {investigation.subtitle && (
              <motion.p
                className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-2 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {investigation.subtitle}
              </motion.p>
            )}

            {/* Hero stats with animated counters + Threat Index */}
            <motion.div
              className="flex flex-wrap items-center gap-2"
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.08, delayChildren: 0.5 } } }}
            >
              {/* Threat Index Badge */}
              <motion.div
                className="flex items-center gap-2 px-3 py-1.5 border relative overflow-hidden"
                style={{ borderColor: `${sevCfg.color}35`, background: `${sevCfg.color}08` }}
                variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } } }}
              >
                <span className="text-[7px] font-mono font-bold uppercase tracking-[0.2em] text-zinc-500">Threat</span>
                <span className="text-lg font-black font-mono tabular-nums leading-none" style={{ color: sevCfg.color }}>
                  <AnimatedCount value={threatIndex} delay={0.5} />
                </span>
                <span className="text-[8px] font-mono text-zinc-700">/100</span>
                {/* Subtle animated glow bar at bottom */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ background: `linear-gradient(90deg, ${sevCfg.color}, ${sevCfg.color}40)` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${threatIndex}%` }}
                  transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
              </motion.div>

              {[
                defendants.length > 0 && { v: defendants.length, l: 'Defendants', c: '#ef4444', icon: <Users className="w-3.5 h-3.5" /> },
                allEntities.length > 0 && { v: allEntities.length, l: 'Entities', c: sevCfg.color, icon: <Building2 className="w-3.5 h-3.5" /> },
                moneyTrail.length > 0 && { v: moneyTrail.length, l: 'Transactions', c: '#dc2626', icon: <DollarSign className="w-3.5 h-3.5" /> },
                statutes.length > 0 && { v: statutes.length, l: 'Statutes', c: '#b91c1c', icon: <Scale className="w-3.5 h-3.5" /> },
                sources.length > 0 && { v: sources.length, l: 'Sources', c: '#991b1b', icon: <FileText className="w-3.5 h-3.5" /> },
              ].filter(Boolean).map((s: any, i: number) => (
                  <motion.div
                  key={i}
                  className="flex items-center gap-1.5 px-2 py-1 bg-black/50 border border-[rgba(255,255,255,0.05)]"
                  variants={{ hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } } }}
                >
                  <span style={{ color: s.c }}>{s.icon}</span>
                  <span className="text-sm font-black font-mono text-white tabular-nums leading-none">
                    <AnimatedCount value={s.v} delay={0.6 + i * 0.1} />
                  </span>
                  <span className="text-[7px] text-zinc-500 uppercase tracking-[0.15em] font-bold">{s.l}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Divider removed for density */}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â DOSSIER CONTROLS Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        <motion.div
          className="flex items-center justify-between py-1.5 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-1 h-5" style={{ background: `${sevCfg.color}40` }} />
            <span className="text-[9px] font-mono text-zinc-300 uppercase tracking-[0.3em]">
              Dossier // {visibleSections.length} Sections // ~{readingTime} min read
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadDossierPDF}
              disabled={generatingPDF}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold text-zinc-300 hover:text-white border border-white/[0.05] hover:border-white/[0.12] transition-all uppercase tracking-wider"
              style={generatingPDF ? { opacity: 0.5 } : {}}
            >
              <Download className="w-3 h-3" /> {generatingPDF ? 'Generating...' : 'Download PDF'}
            </button>
            <button
              onClick={() => setExpandTrigger(v => v + 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold text-zinc-300 hover:text-white border border-white/[0.05] hover:border-white/[0.12] transition-all uppercase tracking-wider"
            >
              <Maximize2 className="w-3 h-3" /> Expand All
            </button>
            <button
              onClick={() => setCollapseTrigger(v => v + 1)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold text-zinc-300 hover:text-white border border-white/[0.05] hover:border-white/[0.12] transition-all uppercase tracking-wider"
            >
              <Minimize2 className="w-3 h-3" /> Collapse All
            </button>
          </div>
        </motion.div>

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 02 // EXECUTIVE SUMMARY Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        <motion.div
          id="summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-1"
        >
          <CollapsibleGlass
            number={secNum('summary')} title="Executive Summary" icon={<FileText className="w-4 h-4" />}
            accentColor={sevCfg.color}
            expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
            badge={
              <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-wider">
                ~{readingTime} min read
              </span>
            }
          >
            <div>
              <p className="text-xs sm:text-sm text-zinc-300 leading-[1.7] font-light">
                <span className="text-4xl sm:text-5xl font-black text-white float-left mr-3 mt-1 leading-[0.75]" style={{
                  textShadow: `0 0 60px ${sevCfg.color}12`,
                }}>{investigation.summary.charAt(0)}</span>
                {investigation.summary.slice(1)}
              </p>
            </div>

            {investigation.tags?.length > 0 && (
              <div className="mt-3 pt-3 border-t border-white/[0.04] flex flex-wrap gap-1">
                {investigation.tags.map((tag: string, idx: number) => (
                  <Link key={idx} href={`/investigations?tag=${encodeURIComponent(tag)}`}
                    className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider bg-[rgba(255,255,255,0.02)] border border-[rgba(255,255,255,0.05)] text-zinc-500 hover:text-zinc-300 hover:border-[rgba(184,0,0,0.20)] transition-all duration-200">
                    {tag}
                  </Link>
                ))}
              </div>
            )}
          </CollapsibleGlass>
        </motion.div>

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 03 // DEFENDANTS Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {defendants.length > 0 && (
          <>
            <motion.div
              id="defendants"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-1"
            >
              <CollapsibleGlass
                number={secNum('defendants')} title="Defendants & Charges" icon={<Gavel className="w-4 h-4" />}
                count={defendants.length} accentColor="#ef4444"
                expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
                badge={
                  <div className="flex items-center gap-1.5">
                    {Object.entries(defendants.reduce((acc: Record<string, number>, d: any) => {
                      acc[d.status] = (acc[d.status] || 0) + 1; return acc;
                    }, {})).map(([status, count]) => {
                      const st = statusColors[status] || statusColors.pending;
                      return (
                        <span key={status} className="text-[8px] font-mono font-bold px-1.5 py-0.5"
                          style={{ color: st.text, background: st.bg, border: `1px solid ${st.border}` }}>
                          {count as number} {status}
                        </span>
                      );
                    })}
                  </div>
                }
              >
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1.5"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={staggerContainer}
                >
                  {defendants.map((def: any, idx: number) => {
                    const st = statusColors[def.status] || statusColors.pending;
                    const initials = def.name.split(/\s+/).filter(Boolean).map((w: string) => w[0]).join('').slice(0, 2).toUpperCase();
                    return (
                      <motion.div key={idx} variants={fadeSlideLeft}
                        className="bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.05)] overflow-hidden hover:border-[rgba(184,0,0,0.18)] transition-all duration-300 group">
                        <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${st.dot}, ${st.dot}40, transparent)` }} />
                        <div className="p-2.5">
                          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                            <div className="flex items-start gap-3">
                              {/* Defendant photo or initials monogram */}
                              {def.imageUrl ? (
                                <img src={def.imageUrl} alt={def.name}
                                  className="w-12 h-12 object-cover border border-white/10 flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-500" />
                              ) : (
                                <div className="w-12 h-12 bg-white/[0.04] border border-white/10 flex items-center justify-center flex-shrink-0">
                                  <span className="text-sm font-black text-zinc-500 tracking-widest">{initials}</span>
                                </div>
                              )}
                              <div>
                                <Link href={`/entities/individuals/${slugifyName(def.name)}`}
                                  className="text-base font-black text-white hover:text-red-400 transition-colors uppercase tracking-wide leading-tight">
                                  {def.name}
                                </Link>
                                <p className="text-xs text-zinc-500 mt-1">{def.role}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 flex-shrink-0">
                              <div className="flex items-center gap-2 px-4 py-2" style={{ background: st.bg, borderLeft: `3px solid ${st.dot}` }}>
                                <div className="w-2 h-2 animate-pulse" style={{ backgroundColor: st.dot, boxShadow: `0 0 8px ${st.dot}` }} />
                                <span className="text-[10px] font-black uppercase tracking-[0.15em]" style={{ color: st.text }}>{def.status}</span>
                              </div>
                              {def.appealStatus && (
                                <span className="text-[8px] font-mono font-bold px-2 py-1.5 bg-red-500/[0.06] border border-red-500/15 text-red-400/70 uppercase tracking-wider">
                                  Appeal: {def.appealStatus}
                                </span>
                              )}
                            </div>
                          </div>

                          {def.charges?.length > 0 && (
                            <div className="mb-2">
                              <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-[0.25em] block mb-2">Charges</span>
                              <div className="space-y-1">
                                {def.charges.map((charge: string, ci: number) => (
                                  <div key={ci} className="flex items-start gap-3 py-1.5 px-3 bg-[rgba(255,255,255,0.01)] border-l-2 border-l-red-500/15">
                                    <span className="text-[10px] font-mono text-red-500/30 mt-0.5 flex-shrink-0 tabular-nums">{String(ci + 1).padStart(2, '0')}</span>
                                    <span className="text-sm text-zinc-300 leading-relaxed">{charge}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {(def.sentence || def.fine || def.restitution || def.indictmentDate || def.convictionDate || def.releaseDate || def.pardonDate) && (
                            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 pt-3 border-t border-white/[0.04]">
                              {def.sentence && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Sentence</span>
                                  <span className="text-xs text-zinc-200 font-bold">{def.sentence}</span>
                                </div>
                              )}
                              {def.fine && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Fine</span>
                                  <span className="text-sm font-black font-mono text-red-400/80 tabular-nums">{def.fine}</span>
                                </div>
                              )}
                              {def.restitution && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Restitution</span>
                                  <span className="text-sm font-black font-mono text-red-400/80 tabular-nums">{def.restitution}</span>
                                </div>
                              )}
                              {def.indictmentDate && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Indicted</span>
                                  <span className="text-[11px] text-zinc-400 font-mono tabular-nums">{def.indictmentDate}</span>
                                </div>
                              )}
                              {def.convictionDate && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Convicted</span>
                                  <span className="text-[11px] text-zinc-400 font-mono tabular-nums">{def.convictionDate}</span>
                                </div>
                              )}
                              {def.releaseDate && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Released</span>
                                  <span className="text-[11px] text-zinc-400 font-mono tabular-nums">{def.releaseDate}</span>
                                </div>
                              )}
                              {def.pardonDate && (
                                <div className="flex items-baseline gap-1.5">
                                  <span className="text-[7px] text-zinc-600 uppercase font-bold tracking-[0.25em]">Pardoned</span>
                                  <span className="text-[11px] text-zinc-400 font-mono tabular-nums">{def.pardonDate}</span>
                                  {def.pardonedBy && <span className="text-[9px] text-red-400/50 ml-1">by {def.pardonedBy}</span>}
                                </div>
                              )}
                            </div>
                          )}

                          {def.notes && (
                            <p className="text-[10px] text-zinc-600 mt-3 pt-3 border-t border-white/[0.03] italic leading-[1.8]">{def.notes}</p>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </CollapsibleGlass>
            </motion.div>
          </>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 04 // APPLICABLE LAWS & STATUTES Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {statutes.length > 0 && (
          <motion.div
            id="statutes"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass
              number={secNum('statutes')} title="Applicable Laws & Statutes" icon={<Scale className="w-4 h-4" />}
              count={statutes.length} accentColor="#ef4444"
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
            >
              <motion.div
                className="space-y-1.5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                {statutes.map((statute: { code: string; description?: string }, idx: number) => (
                  <motion.div key={idx} variants={fadeSlideUp}
                    className="flex items-start gap-3 p-2.5 bg-[rgba(255,255,255,0.012)] border-l-[3px] border-l-red-500/20 hover:border-l-red-500/50 hover:bg-[rgba(255,255,255,0.03)] transition-all duration-300">
                    <BookOpen className="w-3.5 h-3.5 text-red-400/30 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-bold text-zinc-200 leading-snug">{statute.code}</p>
                      {statute.description && <p className="text-[11px] text-zinc-500 leading-[1.7] mt-1">{statute.description}</p>}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 05 // ACCOUNTABILITY ENGINE Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {accountabilityContent && (
          <>
            <motion.div
              id="engine"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-1"
            >
              <CollapsibleGlass
                number={secNum('engine')} title="Accountability Engine" icon={<Crosshair className="w-4 h-4" />}
                accentColor="#ef4444"
                expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
              >
                <AccountabilityEngine content={accountabilityContent} slug={slug} investigation={investigation} />
              </CollapsibleGlass>
            </motion.div>
          </>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 06 // FULL INVESTIGATION Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {mainContent?.length > 0 && (
          <motion.div
            id="investigation"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass number={secNum('investigation')} title="Full Investigation" icon={<FileText className="w-4 h-4" />}
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}>
              <div className="space-y-4">
                {mainContent.map((paragraph: string, idx: number) => {
                  const colonIdx = paragraph.indexOf(':');
                  const hasHeader = colonIdx > 0 && colonIdx < 60
                    && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase()
                    && !/\d/.test(paragraph.substring(0, colonIdx));

                  if (hasHeader) {
                    const heading = paragraph.substring(0, colonIdx);
                    const body = paragraph.substring(colonIdx + 1).trim();
                    return (
                      <div key={idx} className="mt-4 first:mt-0">
                        <div className="bg-[rgba(255,255,255,0.012)] border border-[rgba(255,255,255,0.04)] p-3 sm:p-4"
                          style={{ borderLeftWidth: 3, borderLeftColor: `${sevCfg.color}30` }}>
                          <h3 className="text-[11px] font-black uppercase tracking-[0.25em] mb-3" style={{ color: sevCfg.color }}>{heading}</h3>
                          <p className="text-sm text-zinc-300 leading-[1.8]">{body}</p>
                        </div>
                      </div>
                    );
                  }

                  return (
                    <p key={idx} className={`leading-[1.8] ${
                      idx === 0 ? 'text-base text-zinc-200 font-light' : 'text-sm text-zinc-400'
                    }`}>{paragraph}</p>
                  );
                })}
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 07 // MONEY TRAIL Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {moneyTrail.length > 0 && (
          <>
            <motion.div
              id="money"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-1"
            >
              <CollapsibleGlass
                number={secNum('money')} title="Money Trail" icon={<DollarSign className="w-4 h-4" />}
                count={moneyTrail.length} accentColor="#dc2626"
                expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
                badge={
                  moneyTrail.filter((m: any) => !m.documented).length > 0
                    ? <span className="text-[9px] font-mono text-red-500/40">{moneyTrail.filter((m: any) => !m.documented).length} unverified</span>
                    : undefined
                }
              >
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                >
                  {moneyTrail.map((item: any, idx: number) => (
                    <motion.div
                      key={idx}
                      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                      className={`p-3 sm:p-4 transition-all duration-200 hover:bg-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.012)] border border-white/[0.04] hover:border-red-500/[0.08]`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono text-zinc-500 tabular-nums">{item.date}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-lg font-black font-mono text-red-400/90 tabular-nums">{item.amount}</span>
                          {!item.documented && <span className="text-[6px] text-red-600/40 uppercase font-bold px-1 py-0.5 bg-red-500/[0.04] border border-red-500/10">!</span>}
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm mb-1.5">
                        <span className="text-zinc-300 break-words min-w-0">{item.from}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-red-500/30 flex-shrink-0" />
                        <span className="text-zinc-300 break-words min-w-0">{item.to}</span>
                      </div>
                      {item.purpose && <p className="text-[10px] text-zinc-500 break-words">{item.purpose}</p>}
                    </motion.div>
                  ))}
                </motion.div>
              </CollapsibleGlass>
            </motion.div>
          </>
        )}

        {/* WHERE IS THE MONEY NOW */}
        {whereIsTheMoneyNow.length > 0 && (
          <>
            <motion.div
              id="money-now"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-1"
            >
              <CollapsibleGlass
                number={secNum('money-now')} title="Where Is The Money Now" icon={<Landmark className="w-4 h-4" />}
                count={whereIsTheMoneyNow.length} accentColor="#b91c1c"
                expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
                badge={
                  (() => {
                    const evaded = whereIsTheMoneyNow.filter((w: any) => w.restitutionStatus === 'evaded').length;
                    return evaded > 0
                      ? <span className="text-[9px] font-mono text-red-500/60">{evaded} evaded</span>
                      : undefined;
                  })()
                }
              >
                <div className="mb-4 p-3 bg-red-500/[0.03] border border-red-500/[0.08]">
                  <p className="text-[10px] text-zinc-400 leading-relaxed">
                    <span className="text-red-400/80 font-bold uppercase tracking-wider text-[9px]">Wealth Tracing</span>
                    <span className="mx-2 text-zinc-600">&mdash;</span>
                    Tracks where the money from these crimes ultimately ended up. Includes current holders, transfer methods, legal entities used, and available recovery mechanisms.
                  </p>
                </div>
                <motion.div
                  className="space-y-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.04 } } }}
                >
                  {whereIsTheMoneyNow.map((entry: any, idx: number) => {
                    const statusColors: Record<string, { text: string; bg: string; border: string; label: string }> = {
                      paid: { text: 'text-emerald-400/80', bg: 'bg-emerald-500/[0.06]', border: 'border-emerald-500/20', label: 'PAID' },
                      partial: { text: 'text-yellow-400/80', bg: 'bg-yellow-500/[0.06]', border: 'border-yellow-500/20', label: 'PARTIAL' },
                      unpaid: { text: 'text-red-400/80', bg: 'bg-red-500/[0.06]', border: 'border-red-500/20', label: 'UNPAID' },
                      evaded: { text: 'text-red-500', bg: 'bg-red-500/[0.08]', border: 'border-red-500/30', label: 'EVADED' },
                      unknown: { text: 'text-zinc-400/80', bg: 'bg-zinc-500/[0.06]', border: 'border-zinc-500/20', label: 'UNKNOWN' },
                    };
                    const status = entry.restitutionStatus ? statusColors[entry.restitutionStatus] || statusColors.unknown : null;
                    return (
                      <motion.div
                        key={idx}
                        variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                        className="p-3 sm:p-4 transition-all duration-200 hover:bg-[rgba(255,255,255,0.03)] bg-[rgba(255,255,255,0.012)] border border-white/[0.04] hover:border-red-500/[0.08]"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                          <div className="flex items-center gap-2 min-w-0">
                            <Landmark className="w-3.5 h-3.5 text-red-500/40 flex-shrink-0" />
                            <span className="text-sm font-bold text-zinc-200 break-words">{entry.name}</span>
                          </div>
                          <div className="flex items-center gap-2 flex-shrink-0">
                            {status && (
                              <span className={`text-[7px] font-black uppercase tracking-[0.15em] px-1.5 py-0.5 ${status.text} ${status.bg} border ${status.border}`}>
                                {status.label}
                              </span>
                            )}
                            {entry.estimatedValue && (
                              <span className="text-sm font-black font-mono text-red-400/90 tabular-nums">{entry.estimatedValue}</span>
                            )}
                          </div>
                        </div>
                        <p className="text-[10px] text-zinc-500 mb-2">{entry.relationship}</p>
                        <div className="mb-2 p-2 bg-zinc-900/40 border border-white/[0.03]">
                          <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Transfer Method</span>
                          <p className="text-[10px] text-zinc-400 leading-relaxed">{entry.transferMethod}</p>
                        </div>
                        {(entry.orderedAmount || entry.collectedAmount) && (
                          <div className="flex gap-4 mb-2 text-[10px]">
                            {entry.orderedAmount && (
                              <div>
                                <span className="text-zinc-600 uppercase text-[8px] font-bold tracking-wider">Ordered: </span>
                                <span className="text-zinc-300 font-mono tabular-nums">{entry.orderedAmount}</span>
                              </div>
                            )}
                            {entry.collectedAmount && (
                              <div>
                                <span className="text-zinc-600 uppercase text-[8px] font-bold tracking-wider">Collected: </span>
                                <span className="text-zinc-300 font-mono tabular-nums">{entry.collectedAmount}</span>
                              </div>
                            )}
                          </div>
                        )}
                        {entry.legalEntities && entry.legalEntities.length > 0 && (
                          <div className="mb-2">
                            <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Legal Entities</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.legalEntities.map((le: string, i: number) => (
                                <span key={i} className="text-[9px] font-mono text-zinc-400 bg-zinc-800/50 border border-white/[0.04] px-1.5 py-0.5">
                                  {le}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        {entry.recoveryMechanisms && entry.recoveryMechanisms.length > 0 && (
                          <div>
                            <span className="text-[8px] text-zinc-600 uppercase font-bold tracking-wider block mb-1">Recovery Mechanisms</span>
                            <div className="flex flex-wrap gap-1">
                              {entry.recoveryMechanisms.map((rm: string, i: number) => (
                                <span key={i} className="text-[9px] font-mono text-red-400/60 bg-red-500/[0.04] border border-red-500/[0.08] px-1.5 py-0.5">
                                  {rm}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    );
                  })}
                </motion.div>
              </CollapsibleGlass>
            </motion.div>
          </>
        )}


        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 08 // CONNECTED ENTITIES Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {(affiliations.length > 0 || defendants.length > 0) && (
          <>
            <motion.div
              id="entities"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mb-1"
            >
              <CollapsibleGlass
                number={secNum('entities')} title="Connected Entities" icon={<Users className="w-4 h-4" />}
                count={allEntities.length}
                expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
                badge={
                  <div className="flex items-center gap-1.5">
                    {entityGroups.map(g => (
                      <span key={g.type} className="text-[8px] font-mono font-bold px-1.5 py-0.5"
                        style={{ color: g.config.color, background: g.config.bg, border: `1px solid ${g.config.color}15` }}>
                        {g.items.length}
                      </span>
                    ))}
                  </div>
                }
              >
                <div className="space-y-4">
                  {entityGroups.map(group => {
                    const TypeIcon = group.config.icon;
                    const plural = group.type === 'agency' ? 'Agencies' : group.type === 'corporation' ? 'Corporations' : group.type === 'individual' ? 'Individuals' : 'Organizations';
                    return (
                      <div key={group.type}>
                        <div className="flex items-center gap-2.5 mb-2.5">
                          <TypeIcon className="w-3.5 h-3.5" style={{ color: group.config.color }} />
                          <span className="text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: group.config.color }}>{plural}</span>
                          <div className="flex-1 h-px ml-2" style={{ background: `${group.config.color}10` }} />
                          <span className="text-[9px] font-mono" style={{ color: `${group.config.color}40` }}>{group.items.length}</span>
                        </div>
                        <motion.div
                          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1.5"
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={staggerContainer}
                        >
                          {group.items.map((aff: any, idx: number) => (
                            <motion.div key={idx}
                              variants={fadeSlideUp}
                              className="bg-[rgba(255,255,255,0.015)] border border-[rgba(255,255,255,0.05)] p-2 transition-all duration-300 hover:bg-[rgba(255,255,255,0.03)] group/card relative overflow-hidden"
                              style={{ borderLeftWidth: 3, borderLeftColor: `${group.config.color}25` }}
                              whileHover={{ borderLeftColor: group.config.color }}
                            >
                              <div className="flex items-start justify-between gap-2 mb-1.5">
                                {aff.href ? (
                                  <Link href={aff.href} className="font-bold text-[14px] text-zinc-200 hover:text-white transition-colors block leading-snug">{aff.name}</Link>
                                ) : (
                                  <span className="font-bold text-[14px] text-zinc-200 block leading-snug">{aff.name}</span>
                                )}
                                <span className="text-[7px] px-1.5 py-0.5 font-bold uppercase tracking-wider flex-shrink-0"
                                  style={{ color: group.config.color, background: group.config.bg, border: `1px solid ${group.config.color}15` }}>
                                  {group.config.label}
                                </span>
                              </div>
                              <p className="text-[10px] text-zinc-500 leading-[1.7]">{aff.relationship}</p>
                              {aff.href && (
                                <Link href={aff.href}
                                  className="inline-flex items-center gap-1 mt-2.5 text-[9px] text-zinc-700 hover:text-red-400 transition-all font-mono opacity-0 group-hover/card:opacity-100 duration-200">
                                  View Profile <ArrowUpRight className="w-2.5 h-2.5" />
                                </Link>
                              )}
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    );
                  })}
                </div>
              </CollapsibleGlass>
            </motion.div>
          </>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 09 // NETWORK ANALYSIS Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {(defendants.length > 0 || affiliations.length > 0) && (
          <motion.div
            id="network"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass
              number={secNum('network')} title="Network Analysis" icon={<Eye className="w-4 h-4" />}
              accentColor={sevCfg.color}
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
            >
              <NetworkTree investigation={{
                title: investigation.title, slug,
                severity: investigation.severity || 'medium',
                defendants: investigation.defendants,
                affiliations: investigation.affiliations,
                moneyTrail: investigation.moneyTrail,
                timeline: investigation.timeline,
              }} />
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 10 // TIMELINE Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        
        {/* ACCOUNTABILITY ACTION CENTER */}
        {accountabilityData && (
          <motion.div
            id="action-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass
              number={secNum('action-center')} title="Accountability Action Center" icon={<Megaphone className="w-4 h-4" />}
              accentColor={sevCfg.color}
              count={accountabilityData.actionPaths.length}
              badge={
                <span className="text-[8px] font-mono text-zinc-700 uppercase tracking-wider">
                  {accountabilityData.actionPaths.length} role paths
                </span>
              }
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
              defaultOpen
            >
              <AccountabilityActionCenter
                data={accountabilityData}
                investigationTitle={investigation.title}
                accentColor={sevCfg.color}
                investigation={investigation}
              />
            </CollapsibleGlass>
          </motion.div>
        )}

        {timeline.length > 0 && (
          <motion.div
            id="timeline"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass
              number={secNum('timeline')} title="Timeline" icon={<Calendar className="w-4 h-4" />}
              count={timeline.length}
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
            >
              <div className="relative pl-8">
                <div className="absolute left-[3px] top-2 bottom-2 w-px" style={{
                  background: `linear-gradient(to bottom, ${sevCfg.color}30, ${sevCfg.color}06)`,
                }} />

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={{ visible: { transition: { staggerChildren: 0.03 } } }}
                >
                  {timeline.map((item: any, idx: number) => {
                    const typeColors: Record<string, string> = {
                      critical: '#ef4444', legal: '#dc2626', political: '#b91c1c', financial: '#991b1b', default: '#27272a',
                    };
                    const dotColor = typeColors[item.type || 'default'] || typeColors.default;
                    const isMajor = item.type === 'critical' || item.type === 'legal';

                    return (
                      <motion.div
                        key={idx}
                        className={`relative flex items-start gap-4 py-1 ${
                          isMajor ? '' : 'opacity-60 hover:opacity-100 transition-opacity duration-300'
                        }`}
                        variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: isMajor ? 1 : 0.6, x: 0, transition: { duration: 0.35 } } }}
                      >
                        <div className="absolute -left-8 mt-[7px]">
                          <div className={`${isMajor ? 'w-[9px] h-[9px]' : 'w-[6px] h-[6px]'}`}
                            style={{
                              backgroundColor: dotColor,
                              boxShadow: isMajor ? `0 0 10px ${dotColor}50, 0 0 20px ${dotColor}20` : 'none',
                              marginLeft: isMajor ? '-1.5px' : '0',
                            }}
                          />
                        </div>
                        <span className="text-[9px] text-zinc-600 font-mono w-24 flex-shrink-0 pt-0.5 tabular-nums">{item.date}</span>
                        <div className="flex-1 min-w-0">
                          <p className={`text-sm leading-[1.7] ${isMajor ? 'text-zinc-100 font-medium' : 'text-zinc-500'}`}>{item.event}</p>
                          {item.type && item.type !== 'default' && (
                            <span className="text-[7px] font-mono uppercase tracking-[0.2em] mt-0.5 inline-block" style={{ color: `${dotColor}45` }}>{item.type}</span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              </div>
            </CollapsibleGlass>
          </motion.div>
        )}

        {/* Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â 11 // SOURCES & DOCUMENTATION Ã¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢ÂÃ¢â€¢Â */}
        {sources.length > 0 && (
          <motion.div
            id="sources"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-1"
          >
            <CollapsibleGlass
              number={secNum('sources')} title="Sources & Documentation" icon={<ExternalLink className="w-4 h-4" />}
              count={sources.length}
              expandTrigger={expandTrigger} collapseTrigger={collapseTrigger}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-px"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ visible: { transition: { staggerChildren: 0.015 } } }}
              >
                {sources.map((source: any, idx: number) => (
                  <motion.a
                    key={idx}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 px-2 py-1.5 transition-all duration-200 hover:bg-[rgba(255,255,255,0.04)] bg-[rgba(255,255,255,0.01)] border border-white/[0.03]"
                    variants={fadeSlideUp}
                  >
                    <span className="text-[8px] text-zinc-700 font-mono flex-shrink-0 w-5 text-right tabular-nums">{idx + 1}</span>
                    <div className="min-w-0 flex-1">
                      <span className="text-[11px] text-zinc-400 group-hover:text-zinc-200 transition-colors block leading-snug">{source.title}</span>
                    </div>
                    <span className="text-[7px] text-zinc-800 font-mono uppercase tracking-wider hidden sm:block flex-shrink-0">{source.type}</span>
                    <ExternalLink className="w-3 h-3 text-zinc-800 group-hover:text-red-400 transition-colors flex-shrink-0" />
                  </motion.a>
                ))}
              </motion.div>
            </CollapsibleGlass>
          </motion.div>
        )}

      </div>
    </div>
  );
}
