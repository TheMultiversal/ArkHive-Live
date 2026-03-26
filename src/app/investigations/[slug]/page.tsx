'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, DollarSign, Building2, Gavel, BookOpen, Megaphone, Phone, Mail, Share2, Copy, CheckCircle, Eye, ArrowUpRight, Landmark, ClipboardCheck } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';
import investigationDatabase from '@/data/investigations';

const severityColors: Record<string, string> = {
  critical: 'border-red-600 text-red-400',
  high: 'border-orange-600 text-orange-400',
  medium: 'border-yellow-600 text-yellow-400',
  low: 'border-zinc-600 text-zinc-400',
};

const severityBg: Record<string, string> = {
  critical: 'bg-red-950/30',
  high: 'bg-orange-950/30',
  medium: 'bg-yellow-950/30',
  low: 'bg-zinc-900/30',
};

const statusColors: Record<string, string> = {
  convicted: 'bg-red-900/60 text-red-300 border-red-700',
  incarcerated: 'bg-red-900/80 text-red-200 border-red-600',
  indicted: 'bg-orange-900/60 text-orange-300 border-orange-700',
  charged: 'bg-orange-900/40 text-orange-300 border-orange-700',
  pending: 'bg-yellow-900/40 text-yellow-300 border-yellow-700',
  settled: 'bg-zinc-800/60 text-zinc-300 border-zinc-600',
  acquitted: 'bg-emerald-900/40 text-emerald-300 border-emerald-700',
  pardoned: 'bg-purple-900/40 text-purple-300 border-purple-700',
  appealing: 'bg-blue-900/40 text-blue-300 border-blue-700',
  released: 'bg-zinc-800/40 text-zinc-400 border-zinc-700',
};

const entityTypeColors: Record<string, string> = {
  agency: 'border-blue-700/60 text-blue-400',
  corporation: 'border-yellow-700/60 text-yellow-400',
  individual: 'border-red-700/60 text-red-400',
  organization: 'border-purple-700/60 text-purple-400',
};

// Extract inline URLs from accountability text
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

// Map action text to an icon
function getActionIcon(text: string) {
  const lower = text.toLowerCase();
  if (lower.includes('file') || lower.includes('complaint') || lower.includes('report')) return FileText;
  if (lower.includes('contact') || lower.includes('call') || lower.includes('representative') || lower.includes('legislat') || lower.includes('congress') || lower.includes('senator')) return Phone;
  if (lower.includes('vote') || lower.includes('elect') || lower.includes('ballot')) return Landmark;
  if (lower.includes('legal') || lower.includes('attorney') || lower.includes('lawyer') || lower.includes('lawsuit') || lower.includes('court')) return Scale;
  if (lower.includes('email') || lower.includes('write') || lower.includes('letter')) return Mail;
  if (lower.includes('share') || lower.includes('spread') || lower.includes('social')) return Share2;
  if (lower.includes('donate') || lower.includes('fund') || lower.includes('support')) return DollarSign;
  if (lower.includes('document') || lower.includes('evidence') || lower.includes('foia') || lower.includes('request')) return ClipboardCheck;
  if (lower.includes('watch') || lower.includes('monitor') || lower.includes('track')) return Eye;
  return Megaphone;
}

// Slugify a name for URL
function slugifyName(name: string): string {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// === ACCOUNTABILITY SECTION COMPONENT ===
function AccountabilitySection({ content, slug, title }: { content: string; slug: string; title: string }) {
  const [actionsTaken, setActionsTaken] = useState(0);
  const [hasTakenAction, setHasTakenAction] = useState(false);
  const [copied, setCopied] = useState<string | null>(null);
  const [viewCount, setViewCount] = useState(0);

  // Load from localStorage
  useEffect(() => {
    const key = `arkhive_accountability_${slug}`;
    const stored = localStorage.getItem(key);
    if (stored) {
      const data = JSON.parse(stored);
      setActionsTaken(data.actions || 0);
      setHasTakenAction(data.userActed || false);
    }
    // Increment view count
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

  // Parse actions from content
  const rawActions = content
    .replace(/^\s*WHAT YOU CAN DO TO HOLD THEM ACCOUNTABLE:\s*/i, '')
    .split(/\(\d+\)\s*/)
    .filter(Boolean);

  const actions = rawActions.map((action, idx) => {
    const { text, urls } = extractUrls(action.trim());
    const IconComponent = getActionIcon(text);
    return { id: idx, text, urls, Icon: IconComponent };
  });

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://arkhive.live/investigations/${slug}`;
  const tweetText = `Exposed: ${title}. Read the full investigation and take action.`;
  const emailSubject = `Investigation: ${title}`;
  const emailBody = `I wanted to share this investigation with you:\n\n${title}\n\nRead more: ${shareUrl}\n\nThis investigation details important findings that deserve public attention.`;

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="mb-8">
      {/* Main accountability header */}
      <div className="border-2 border-red-900/40 bg-[rgba(100,0,0,0.08)] rounded-xl p-6 mb-4">
        <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
          <Megaphone className="w-5 h-5 text-red-400" />
          Hold Them Accountable
        </h2>
        <p className="text-sm text-zinc-500">Take direct action. Every step counts.</p>
      </div>

      {/* Option A: Interactive Action Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
        {actions.map((action) => {
          const ActionIcon = action.Icon;
          return (
            <motion.div
              key={action.id}
              whileHover={{ scale: 1.01 }}
              className="p-4 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl hover:border-[rgba(184,0,0,0.40)] transition-all group"
            >
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-red-900/30 border border-red-800/40 rounded-lg group-hover:bg-red-900/50 transition-colors">
                  <ActionIcon className="w-4 h-4 text-red-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-[10px] font-bold text-red-500/60 uppercase">Step {action.id + 1}</span>
                  </div>
                  <p className="text-sm text-zinc-300 leading-relaxed mb-2">{action.text}</p>
                  {action.urls.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {action.urls.map((u, ui) => (
                        <a
                          key={ui}
                          href={u.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-semibold text-red-400 bg-red-900/20 border border-red-800/30 rounded-lg hover:bg-red-900/40 hover:border-red-700/50 transition-all"
                        >
                          <ArrowUpRight className="w-3 h-3" />
                          {u.domain}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Option B: Impact Counter + Option C: Share Kit */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Impact Counter */}
        <div className="p-5 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Eye className="w-4 h-4 text-red-400" />
            Impact Tracker
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="text-center p-3 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)] rounded-lg">
              <div className="text-2xl font-black text-white font-mono">{viewCount}</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold mt-1">Views</div>
            </div>
            <div className="text-center p-3 bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.12)] rounded-lg">
              <div className="text-2xl font-black text-red-400 font-mono">{actionsTaken}</div>
              <div className="text-[10px] text-zinc-500 uppercase font-bold mt-1">Actions Taken</div>
            </div>
          </div>
          <button
            onClick={handleTakeAction}
            disabled={hasTakenAction}
            className={`w-full py-3 text-sm font-bold uppercase tracking-wider rounded-xl transition-all duration-300 flex items-center justify-center gap-2 ${
              hasTakenAction
                ? 'bg-[rgba(184,0,0,0.10)] border border-[rgba(184,0,0,0.25)] text-red-400/60 cursor-default'
                : 'bg-gradient-to-r from-red-900/50 to-red-800/30 border border-red-700/40 text-red-300 hover:from-red-900/70 hover:to-red-800/50 hover:border-red-600/60 hover:shadow-[0_0_20px_rgba(184,0,0,0.15)]'
            }`}
          >
            {hasTakenAction ? (
              <>
                <CheckCircle className="w-4 h-4" />
                Action Recorded
              </>
            ) : (
              <>
                <Megaphone className="w-4 h-4" />
                I&apos;ve Taken Action
              </>
            )}
          </button>
        </div>

        {/* Share Kit */}
        <div className="p-5 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <Share2 className="w-4 h-4 text-red-400" />
            Share This Investigation
          </h3>
          <div className="space-y-2.5">
            {/* Copy link */}
            <button
              onClick={() => copyToClipboard(shareUrl, 'link')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] rounded-xl hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all text-left"
            >
              <Copy className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Copy Investigation Link</span>
              {copied === 'link' && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
            </button>

            {/* Copy tweet */}
            <button
              onClick={() => copyToClipboard(`${tweetText} ${shareUrl}`, 'tweet')}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] rounded-xl hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all text-left"
            >
              <Share2 className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Copy Post Text</span>
              {copied === 'tweet' && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
            </button>

            {/* Email template */}
            <a
              href={`mailto:?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] rounded-xl hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all"
            >
              <Mail className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Email This Investigation</span>
              <ArrowUpRight className="w-3 h-3 text-zinc-600" />
            </a>

            {/* Copy all action steps */}
            <button
              onClick={() => {
                const allSteps = actions.map((a, i) => `(${i + 1}) ${a.text}${a.urls.length > 0 ? ' - ' + a.urls.map(u => u.url).join(', ') : ''}`).join('\n');
                copyToClipboard(`${title}\n\nAction Steps:\n${allSteps}\n\nSource: ${shareUrl}`, 'steps');
              }}
              className="w-full flex items-center gap-3 px-4 py-3 text-sm bg-[rgba(184,0,0,0.04)] border border-[rgba(184,0,0,0.15)] rounded-xl hover:border-[rgba(184,0,0,0.35)] hover:bg-[rgba(184,0,0,0.08)] transition-all text-left"
            >
              <ClipboardCheck className="w-4 h-4 text-zinc-500 flex-shrink-0" />
              <span className="text-zinc-300 flex-1">Copy All Action Steps</span>
              {copied === 'steps' && <span className="text-[10px] text-red-400 font-bold uppercase">Copied!</span>}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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
          <Link href="/investigations" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 border border-zinc-700 rounded-xl text-zinc-300 hover:text-white hover:border-zinc-500 transition-all">
            <ArrowLeft className="w-4 h-4" />
            Back to Investigations
          </Link>
        </div>
      </div>
    );
  }

  const sev = investigation.severity || 'medium';

  // Detect accountability paragraph from content (starts with "WHAT YOU CAN DO")
  const accountabilityIdx = investigation.content.findIndex(p => p.startsWith('WHAT YOU CAN DO'));
  const accountabilityContent = accountabilityIdx >= 0 ? investigation.content[accountabilityIdx] : null;
  const mainContent = accountabilityIdx >= 0
    ? investigation.content.filter((_, i) => i !== accountabilityIdx)
    : investigation.content;

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Link */}
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-card p-6 lg:p-8 mb-8">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[sev]} ${severityBg[sev]}`}>
              {sev}
            </span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900/50 text-zinc-400">
              {investigation.category}
            </span>
            {investigation.date && (
              <span className="text-xs text-zinc-500 font-mono">{investigation.date}</span>
            )}
            {investigation.lastUpdated && (
              <span className="text-xs text-zinc-600 font-mono">Updated: {investigation.lastUpdated}</span>
            )}
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          {investigation.subtitle && (
            <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
          )}
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>

        {/* === TOP ROW: Connected Entities + Investigation Info === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">

          {/* Connected Entities - 2/3 width */}
          {investigation.affiliations && investigation.affiliations.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="lg:col-span-2 glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-red-400" />
                Connected Entities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {investigation.affiliations.map((aff, idx) => (
                  <div key={idx} className="p-3 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl hover:border-[rgba(184,0,0,0.35)] transition-colors">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      {aff.href ? (
                        <Link href={aff.href} className="font-bold text-sm text-zinc-200 hover:text-white transition-colors">
                          {aff.name}
                        </Link>
                      ) : (
                        <span className="font-bold text-sm text-zinc-200">{aff.name}</span>
                      )}
                      <span className={`text-[9px] px-1.5 py-0.5 border whitespace-nowrap uppercase font-bold ${entityTypeColors[aff.type] || 'border-zinc-700 text-zinc-500'}`}>
                        {aff.type}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{aff.relationship}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Investigation Info Sidebar - 1/3 width */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Case File</h3>
            <div className="space-y-3 text-sm">
              {investigation.date && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Date</span>
                  <span className="text-zinc-300 font-mono">{investigation.date}</span>
                </div>
              )}
              {investigation.lastUpdated && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Last Updated</span>
                  <span className="text-zinc-300 font-mono">{investigation.lastUpdated}</span>
                </div>
              )}
              {investigation.eventOriginDate && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Event Origin</span>
                  <span className="text-zinc-300 font-mono">{investigation.eventOriginDate}</span>
                </div>
              )}
              {investigation.lastActivityDate && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Last Activity</span>
                  <span className="text-zinc-300 font-mono">{investigation.lastActivityDate}</span>
                </div>
              )}
              <div className="border-t border-[rgba(255,255,255,0.06)] pt-3">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Severity</span>
                  <span className={`font-bold uppercase text-xs ${severityColors[sev]}`}>{sev}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Category</span>
                <span className="text-zinc-300">{investigation.category}</span>
              </div>
              {investigation.affiliations && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Entities</span>
                  <span className="text-zinc-300">{investigation.affiliations.length}</span>
                </div>
              )}
              {investigation.defendants && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Defendants</span>
                  <span className="text-zinc-300">{investigation.defendants.length}</span>
                </div>
              )}
              {investigation.statutes && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Statutes</span>
                  <span className="text-zinc-300">{investigation.statutes.length}</span>
                </div>
              )}
              {investigation.moneyTrail && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Transactions</span>
                  <span className="text-zinc-300">{investigation.moneyTrail.length}</span>
                </div>
              )}
              {investigation.sources && (
                <div className="flex justify-between">
                  <span className="text-zinc-500">Sources</span>
                  <span className="text-zinc-300">{investigation.sources.length}</span>
                </div>
              )}

              {/* Tags inline */}
              {investigation.tags && investigation.tags.length > 0 && (
                <div className="border-t border-[rgba(255,255,255,0.06)] pt-3">
                  <div className="flex flex-wrap gap-1.5">
                    {investigation.tags.map((tag, idx) => (
                      <Link
                        key={idx}
                        href={`/investigations?tag=${encodeURIComponent(tag)}`}
                        className="px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-[#020202] border border-[rgba(184,0,0,0.15)] text-zinc-500 hover:text-white hover:border-[rgba(184,0,0,0.35)] transition-all rounded-md"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>

        {/* === DEFENDANTS / CHARGES === */}
        {investigation.defendants && investigation.defendants.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-red-400" />
              Defendants & Charges
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {investigation.defendants.map((def, idx) => (
                <div key={idx} className="p-4 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <Link href={`/entities/individuals/${slugifyName(def.name)}`} className="font-bold text-white text-sm hover:text-red-400 transition-colors underline decoration-red-900/30 hover:decoration-red-400/60">
                      {def.name}
                    </Link>
                    <span className={`text-[9px] px-2 py-0.5 border font-bold uppercase whitespace-nowrap ${statusColors[def.status] || 'bg-zinc-800 text-zinc-400 border-zinc-700'}`}>
                      {def.status}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mb-2">{def.role}</p>
                  {def.charges && def.charges.length > 0 && (
                    <div className="mb-2">
                      <span className="text-[10px] text-zinc-600 uppercase font-bold">Charges:</span>
                      <ul className="mt-1 space-y-0.5">
                        {def.charges.map((charge, ci) => (
                          <li key={ci} className="text-xs text-red-400/80 flex items-start gap-1.5">
                            <span className="text-red-600 mt-0.5">&#9632;</span>
                            {charge}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {def.sentence && (
                    <div className="text-xs">
                      <span className="text-zinc-600">Outcome: </span>
                      <span className="text-zinc-300">{def.sentence}</span>
                    </div>
                  )}
                  {def.fine && (
                    <div className="text-xs mt-1">
                      <span className="text-zinc-600">Fine: </span>
                      <span className="text-yellow-400/80">{def.fine}</span>
                    </div>
                  )}
                  {def.restitution && (
                    <div className="text-xs mt-1">
                      <span className="text-zinc-600">Restitution: </span>
                      <span className="text-yellow-400/80">{def.restitution}</span>
                    </div>
                  )}
                  {def.notes && (
                    <p className="text-[11px] text-zinc-500 mt-2 border-t border-[rgba(255,255,255,0.04)] pt-2">{def.notes}</p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* === APPLICABLE LAWS & STATUTES === */}
        {investigation.statutes && investigation.statutes.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <Scale className="w-5 h-5 text-red-400" />
              Applicable Laws & Statutes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {investigation.statutes.map((statute, idx) => (
                <div key={idx} className="p-3 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl flex items-start gap-3">
                  <BookOpen className="w-4 h-4 text-zinc-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-bold text-zinc-200">{statute.code}</p>
                    {statute.description && (
                      <p className="text-xs text-zinc-500 mt-1">{statute.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* === HOLD THEM ACCOUNTABLE: Interactive Action Center === */}
        {accountabilityContent && (
          <AccountabilitySection content={accountabilityContent} slug={slug} title={investigation.title} />
        )}

        {/* === MONEY TRAIL === */}
        {investigation.moneyTrail && investigation.moneyTrail.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-red-400" />
              Money Trail
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {investigation.moneyTrail.map((item, idx) => (
                <div key={idx} className="p-4 bg-[#020202] border border-[rgba(184,0,0,0.18)] rounded-xl">
                  <div className="flex flex-wrap justify-between items-start gap-1 mb-2">
                    <span className="font-mono text-zinc-500 text-xs">{item.date}</span>
                    <span className="text-white font-bold text-sm">{item.amount}</span>
                  </div>
                  <div className="text-sm mb-1">
                    <span className="text-zinc-600">From: </span>
                    <span className="text-zinc-300">{item.from}</span>
                  </div>
                  <div className="text-sm mb-2">
                    <span className="text-zinc-600">To: </span>
                    <span className="text-zinc-300">{item.to}</span>
                  </div>
                  <p className="text-xs text-zinc-500">{item.purpose}</p>
                  {!item.documented && (
                    <span className="inline-block mt-1.5 text-[10px] text-yellow-600 uppercase font-bold border border-yellow-800/40 px-1.5 py-0.5 rounded-md">Unverified</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* === INVESTIGATION DETAILS (full content) === */}
        {mainContent && mainContent.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <FileText className="w-5 h-5 text-red-400" />
              Investigation Details
            </h2>
            <div className="space-y-5">
              {mainContent.map((paragraph, idx) => {
                const colonIdx = paragraph.indexOf(':');
                const hasHeader = colonIdx > 0 && colonIdx < 60 && paragraph.substring(0, colonIdx) === paragraph.substring(0, colonIdx).toUpperCase() && !/\d/.test(paragraph.substring(0, colonIdx));
                if (hasHeader) {
                  const heading = paragraph.substring(0, colonIdx);
                  const body = paragraph.substring(colonIdx + 1).trim();
                  return (
                    <div key={idx} className="border-l-2 border-red-900/40 pl-4">
                      <h3 className="text-sm font-bold text-red-400/80 uppercase tracking-wider mb-2">{heading}</h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">{body}</p>
                    </div>
                  );
                }
                return <p key={idx} className="text-sm text-zinc-300 leading-relaxed">{paragraph}</p>;
              })}
            </div>
          </motion.div>
        )}

        {/* === TIMELINE (full-width) === */}
        {investigation.timeline && investigation.timeline.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-red-400" />
              Timeline
            </h2>
            <div className="space-y-0">
              {investigation.timeline.map((item, idx) => {
                const typeColors: Record<string, string> = {
                  critical: 'border-red-600 bg-red-600',
                  legal: 'border-red-800 bg-red-800',
                  political: 'border-purple-600 bg-purple-600',
                  financial: 'border-yellow-600 bg-yellow-600',
                  default: 'border-zinc-600 bg-zinc-600',
                };
                const colors = typeColors[item.type || 'default'] || typeColors.default;
                const borderColor = colors.split(' ')[0];
                const dotColor = colors.split(' ')[1];
                return (
                  <div key={idx} className={`relative pl-6 pb-6 border-l-2 ${borderColor} last:pb-0`}>
                    <div className={`absolute -left-[5px] top-1 w-2 h-2 ${dotColor}`} />
                    <div className="flex items-start gap-4">
                      <span className="text-xs text-zinc-500 font-mono w-24 flex-shrink-0">{item.date}</span>
                      <p className="text-sm text-zinc-300 leading-relaxed">{item.event}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {/* === SOURCES === */}
        {investigation.sources && investigation.sources.length > 0 && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45 }} className="glass-card p-6 mb-8">
            <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-5 flex items-center gap-2">
              <ExternalLink className="w-5 h-5 text-red-400" />
              Sources & Documentation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {investigation.sources.map((source, idx) => (
                <a
                  key={idx}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 p-3 text-sm text-zinc-400 hover:text-white hover:bg-[rgba(255,255,255,0.02)] border border-transparent hover:border-[rgba(255,255,255,0.06)] transition-all"
                >
                  <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 text-zinc-600" />
                  <div>
                    <span className="text-zinc-300">{source.title}</span>
                    <span className="text-zinc-600 ml-2 text-xs">({source.type})</span>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  );
}
