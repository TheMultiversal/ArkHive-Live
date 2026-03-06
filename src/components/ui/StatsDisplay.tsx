'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

// ── Types ─────────────────────────────────────────────────────
interface StatsDisplayProps {
 stats: {
  totalInvestigations: number;
  entitiesTracked: number;
  individuals: number;
  agencies: number;
  corporations: number;
  organizations: number;
  connections: number;
  documentsArchived: number;
  activeAlerts: number;
 };
}

interface LiveStats {
 totalInvestigations: number;
 entitiesTracked: number;
 individuals: number;
 agencies: number;
 corporations: number;
 organizations: number;
 connections: number;
}

// ── Animated counter ──────────────────────────────────────────
function AnimCount({ value }: { value: number }) {
 const [display, setDisplay] = useState(value);
 const [prev, setPrev] = useState(value);

 useEffect(() => {
  if (value === prev) return;
  const start = prev;
  const diff = value - start;
  const t0 = performance.now();
  const tick = (now: number) => {
   const p = Math.min((now - t0) / 1000, 1);
   const eased = 1 - Math.pow(1 - p, 3);
   setDisplay(Math.round(start + diff * eased));
   if (p < 1) requestAnimationFrame(tick);
   else setPrev(value);
  };
  requestAnimationFrame(tick);
 }, [value, prev]);

 return <>{display.toLocaleString()}</>;
}

// ── Investigation topics (the intriguing stuff) ───────────────
const TOPICS: {
 label: string;
 subtitle: string;
 href: string;
 severity: 'critical' | 'high' | 'medium';
}[] = [
 {
  label: 'Trafficking & Sexual Crimes',
  subtitle: 'Epstein networks, trafficking rings, institutional cover-ups',
  href: '/investigations?category=Trafficking+%26+Sexual+Crimes',
  severity: 'critical',
 },
 {
  label: 'War Crimes',
  subtitle: 'Covert operations, civilian casualties, contractor corruption',
  href: '/investigations?category=War+%26+Military',
  severity: 'critical',
 },
 {
  label: 'Financial Crimes',
  subtitle: 'Money laundering, market manipulation, offshore networks',
  href: '/investigations?category=Financial+Crimes',
  severity: 'high',
 },
 {
  label: 'Government Abuse',
  subtitle: 'Cover-ups, obstruction of justice, abuse of power',
  href: '/investigations?category=Government+Abuse',
  severity: 'critical',
 },
 {
  label: 'Elections & Democracy',
  subtitle: 'Voter suppression, election interference, stolen elections',
  href: '/investigations?category=Elections+%26+Democracy',
  severity: 'critical',
 },
 {
  label: 'Corporate Crime',
  subtitle: 'Fraud, labor abuse, whistleblower retaliation, regulatory capture',
  href: '/investigations?category=Corporate+Crime',
  severity: 'high',
 },
 {
  label: 'Human Rights Violations',
  subtitle: 'Genocide, crimes against humanity, international law',
  href: '/investigations?category=Human+Rights+Violations',
  severity: 'critical',
 },
 {
  label: 'Corruption & Ethics',
  subtitle: 'Judicial corruption, conflicts of interest, dark money',
  href: '/investigations?category=Corruption+%26+Ethics',
  severity: 'high',
 },
 {
  label: 'National Security',
  subtitle: 'Intelligence failures, surveillance overreach, classified leaks',
  href: '/investigations?category=National+Security',
  severity: 'high',
 },
 {
  label: 'Civil Rights & Justice',
  subtitle: 'Police violence, systemic racism, environmental racism',
  href: '/investigations?category=Civil+Rights+%26+Justice',
  severity: 'high',
 },
 {
  label: 'Foreign Affairs',
  subtitle: 'Foreign influence, collusion, geopolitical manipulation',
  href: '/investigations?category=Foreign+Affairs',
  severity: 'high',
 },
 {
  label: 'Constitutional Crises',
  subtitle: 'Authoritarian power grabs, oligarchic control, extremism',
  href: '/investigations?category=Constitutional+Crises',
  severity: 'critical',
 },
 {
  label: 'Media & Disinformation',
  subtitle: 'Propaganda networks, information warfare, media corruption',
  href: '/investigations?category=Media+%26+Disinformation',
  severity: 'medium',
 },
 {
  label: 'Environment',
  subtitle: 'Climate cover-ups, environmental crimes, toxic exposure',
  href: '/investigations?category=Environment',
  severity: 'medium',
 },
 {
  label: 'Public Health',
  subtitle: 'Pharmaceutical fraud, research ethics, health cover-ups',
  href: '/investigations?category=Public+Health',
  severity: 'medium',
 },
 {
  label: 'Technology & Privacy',
  subtitle: 'Mass surveillance, data exploitation, AI safety failures',
  href: '/investigations?category=Technology+%26+Privacy',
  severity: 'medium',
 },
];

const SEVERITY_COLORS = {
 critical: 'border-l-red-600 hover:border-l-red-400',
 high: 'border-l-orange-600 hover:border-l-orange-400',
 medium: 'border-l-yellow-600 hover:border-l-yellow-400',
};

const SEVERITY_DOTS = {
 critical: 'bg-red-500',
 high: 'bg-orange-500',
 medium: 'bg-yellow-600',
};

// ── Quick-nav items (compact number links) ────────────────────
const QUICK_NAV = [
 { label: 'Investigations', key: 'totalInvestigations' as const, href: '/investigations' },
 { label: 'Entities', key: 'entitiesTracked' as const, href: '/entities' },
 { label: 'Individuals', key: 'individuals' as const, href: '/entities/individuals' },
 { label: 'Agencies', key: 'agencies' as const, href: '/entities/agencies' },
 { label: 'Corporations', key: 'corporations' as const, href: '/entities/corporations' },
 { label: 'Organizations', key: 'organizations' as const, href: '/entities/organizations' },
 { label: 'Connections', key: 'connections' as const, href: '/entities' },
];

// ── Main Component ────────────────────────────────────────────
export default function StatsDisplay({ stats: initialStats }: StatsDisplayProps) {
 const [stats, setStats] = useState<LiveStats>({
  totalInvestigations: initialStats.totalInvestigations,
  entitiesTracked: initialStats.entitiesTracked,
  individuals: initialStats.individuals || 0,
  agencies: initialStats.agencies || 0,
  corporations: initialStats.corporations || 0,
  organizations: initialStats.organizations || 0,
  connections: initialStats.connections || 0,
 });
 const [isLive, setIsLive] = useState(false);
 const [lastUpdated, setLastUpdated] = useState<string | null>(null);
 const router = useRouter();

 const fetchStats = useCallback(async () => {
  try {
   const res = await fetch('/api/stats', { cache: 'no-store' });
   if (!res.ok) return;
   const json = await res.json();
   if (!json.success) return;
   const d = json.data.overview;
   setStats({
    totalInvestigations: d.totalInvestigations,
    entitiesTracked: d.totalEntities,
    individuals: d.individuals,
    agencies: d.agencies,
    corporations: d.corporations,
    organizations: d.organizations,
    connections: d.totalConnections,
   });
   setIsLive(true);
   setLastUpdated(json.meta?.generatedAt || new Date().toISOString());
  } catch {
   // keep last known values
  }
 }, []);

 useEffect(() => {
  fetchStats();
  const interval = setInterval(fetchStats, 30000);
  return () => clearInterval(interval);
 }, [fetchStats]);

 return (
  <div className="space-y-5">

   {/* ── Header: Live indicator + compact stat chips ───────── */}
   <div className="flex flex-col gap-3">
    <div className="flex items-center justify-between">
     <div className="flex items-center gap-2 text-xs">
      <motion.div
       className={`w-2 h-2 ${isLive ? 'bg-green-500' : 'bg-zinc-600'}`}
       animate={isLive ? { opacity: [1, 0.3, 1], scale: [1, 1.3, 1] } : {}}
       transition={{ duration: 1.5, repeat: Infinity }}
      />
      <span className={isLive ? 'text-green-500/80' : 'text-zinc-600'}>
       {isLive ? 'LIVE ARCHIVE' : 'STATIC'}
      </span>
     </div>
     {lastUpdated && (
      <span className="text-[10px] text-zinc-700 font-mono">
       {new Date(lastUpdated).toLocaleTimeString()}
      </span>
     )}
    </div>

    {/* Compact stat chips — wrapping row */}
    <div className="flex flex-wrap gap-2">
     {QUICK_NAV.map((item) => (
      <motion.button
       key={item.label}
       onClick={() => router.push(item.href)}
       className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono border border-blood-900/30 bg-black/40 text-zinc-400 hover:text-white hover:border-blood-600/60 hover:bg-blood-950/30 active:scale-[0.97] transition-all duration-150 cursor-pointer select-none"
       whileHover={{ scale: 1.03 }}
       whileTap={{ scale: 0.96 }}
      >
       <span className="text-blood-500 font-bold">
        <AnimCount value={stats[item.key]} />
       </span>
       <span>{item.label}</span>
      </motion.button>
     ))}
    </div>
   </div>

   {/* ── Topic Grid — the intriguing part ─────────────────── */}
   <div>
    <div className="flex items-center gap-2 mb-3">
     <div className="h-px flex-1 bg-gradient-to-r from-blood-600/40 to-transparent" />
     <span className="text-[10px] font-mono text-zinc-600 uppercase tracking-[0.2em]">
      Investigation Categories
     </span>
     <div className="h-px flex-1 bg-gradient-to-l from-blood-600/40 to-transparent" />
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
     {TOPICS.map((topic, i) => (
      <motion.button
       key={topic.label}
       onClick={() => router.push(topic.href)}
       className={`
        text-left p-3 border-l-2 ${SEVERITY_COLORS[topic.severity]}
        bg-black/30 border border-zinc-800/50
        hover:bg-blood-950/20 hover:border-blood-900/40
        hover:shadow-[0_0_10px_rgba(214,69,69,0.08)]
        active:scale-[0.98]
        transition-all duration-200 cursor-pointer select-none group
       `}
       initial={{ opacity: 0, y: 8 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: i * 0.03 }}
       whileHover={{ x: 2 }}
       whileTap={{ scale: 0.98 }}
      >
       <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
         <div className="flex items-center gap-1.5 mb-0.5">
          <div className={`w-1.5 h-1.5 ${SEVERITY_DOTS[topic.severity]} shrink-0`} />
          <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">
           {topic.label}
          </span>
         </div>
         <p className="text-[10px] leading-tight text-zinc-600 group-hover:text-zinc-500 transition-colors line-clamp-2">
          {topic.subtitle}
         </p>
        </div>
        <svg
         className="w-3 h-3 text-zinc-700 group-hover:text-blood-500 group-hover:translate-x-0.5 transition-all duration-200 mt-0.5 shrink-0"
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
        >
         <path strokeLinecap="square" d="M9 5l7 7-7 7" />
        </svg>
       </div>
      </motion.button>
     ))}
    </div>
   </div>

  </div>
 );
}

