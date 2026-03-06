'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface StatsData {
 totalInvestigations: number;
 entitiesTracked: number;
 individuals: number;
 agencies: number;
 corporations: number;
 organizations: number;
 connections: number;
 documentsArchived: number;
 activeAlerts: number;
}

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

// ── Animated counter that ticks up from old value to new ──────
function AnimatedNumber({ value, duration = 1200 }: { value: number; duration?: number }) {
 const [display, setDisplay] = useState(value);
 const [prevValue, setPrevValue] = useState(value);

 useEffect(() => {
  if (value === prevValue) return;
  const start = prevValue;
  const diff = value - start;
  const startTime = performance.now();

  const tick = (now: number) => {
   const elapsed = now - startTime;
   const progress = Math.min(elapsed / duration, 1);
   // Ease out cubic
   const eased = 1 - Math.pow(1 - progress, 3);
   setDisplay(Math.round(start + diff * eased));
   if (progress < 1) requestAnimationFrame(tick);
   else setPrevValue(value);
  };
  requestAnimationFrame(tick);
 }, [value, prevValue, duration]);

 return <>{display.toLocaleString()}</>;
}

// ── SVG Icons ─────────────────────────────────────────────────

function InvestigationIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.circle cx="12" cy="12" r="8" stroke="#ef4444" strokeWidth="1.5" fill="none"
    animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.circle cx="12" cy="12" r="4" stroke="#dc2626" strokeWidth="1.5" fill="none"
    animate={{ scale: [1.1, 1, 1.1] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.circle cx="12" cy="12" r="1.5" fill="#ef4444"
    animate={{ opacity: [1, 0.5, 1] }} transition={{ duration: 1, repeat: Infinity }} />
   <motion.g stroke="#dc2626" strokeWidth="1" opacity="0.7">
    <line x1="12" y1="2" x2="12" y2="6" />
    <line x1="12" y1="18" x2="12" y2="22" />
    <line x1="2" y1="12" x2="6" y2="12" />
    <line x1="18" y1="12" x2="22" y2="12" />
   </motion.g>
  </svg>
 );
}

function EntitiesIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.circle cx="12" cy="6" r="3" fill="#dc2626"
    animate={{ y: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.circle cx="5" cy="18" r="3" fill="#b91c1c"
    animate={{ x: [0, -1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
   <motion.circle cx="19" cy="18" r="3" fill="#991b1b"
    animate={{ x: [0, 1, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
   <motion.g stroke="#ef4444" strokeWidth="1.5" opacity="0.6"
    animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
    <line x1="12" y1="9" x2="6" y2="15" />
    <line x1="12" y1="9" x2="18" y2="15" />
    <line x1="8" y1="18" x2="16" y2="18" />
   </motion.g>
  </svg>
 );
}

function AgencyIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.path d="M3 21V10L12 3L21 10V21H3Z" stroke="#dc2626" strokeWidth="1.5" fill="none"
    animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.rect x="8" y="12" width="3" height="4" fill="#991b1b" opacity="0.8"
    animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity }} />
   <motion.rect x="13" y="12" width="3" height="4" fill="#991b1b" opacity="0.8"
    animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
   <motion.line x1="12" y1="3" x2="12" y2="7" stroke="#ef4444" strokeWidth="1.5"
    animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 1, repeat: Infinity }} />
  </svg>
 );
}

function CorporationIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.rect x="4" y="4" width="16" height="18" stroke="#dc2626" strokeWidth="1.5" fill="none"
    animate={{ scale: [1, 1.02, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
   {[8, 12, 16].map((y, i) => (
    <motion.g key={y} opacity="0.7"
     animate={{ opacity: [0.5, 1, 0.5] }}
     transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}>
     <rect x="7" y={y - 1} width="3" height="2" fill="#b91c1c" />
     <rect x="14" y={y - 1} width="3" height="2" fill="#b91c1c" />
    </motion.g>
   ))}
  </svg>
 );
}

function OrganizationIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.circle cx="12" cy="8" r="4" stroke="#dc2626" strokeWidth="1.5" fill="none"
    animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.circle cx="5" cy="16" r="3" stroke="#b91c1c" strokeWidth="1" fill="none"
    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} />
   <motion.circle cx="19" cy="16" r="3" stroke="#b91c1c" strokeWidth="1" fill="none"
    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} />
   <motion.g stroke="#ef4444" strokeWidth="1" opacity="0.5"
    animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
    <line x1="9" y1="11" x2="7" y2="13" />
    <line x1="15" y1="11" x2="17" y2="13" />
   </motion.g>
  </svg>
 );
}

function IndividualsIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.circle cx="12" cy="7" r="4" fill="#dc2626"
    animate={{ scale: [1, 1.05, 1] }} transition={{ duration: 2, repeat: Infinity }} />
   <motion.path d="M4 21C4 16.5817 7.58172 13 12 13C16.4183 13 20 16.5817 20 21"
    stroke="#dc2626" strokeWidth="1.5" fill="none"
    animate={{ opacity: [0.6, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
 );
}

function ConnectionsIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   {/* Nodes */}
   <motion.circle cx="4" cy="12" r="2" fill="#dc2626"
    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity }} />
   <motion.circle cx="12" cy="4" r="2" fill="#b91c1c"
    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }} />
   <motion.circle cx="20" cy="12" r="2" fill="#991b1b"
    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }} />
   <motion.circle cx="12" cy="20" r="2" fill="#7f1d1d"
    animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.9 }} />
   {/* Lines */}
   <motion.g stroke="#ef4444" strokeWidth="1" opacity="0.5"
    animate={{ opacity: [0.3, 0.8, 0.3] }} transition={{ duration: 2, repeat: Infinity }}>
    <line x1="6" y1="11" x2="11" y2="6" />
    <line x1="13" y1="6" x2="18" y2="11" />
    <line x1="18" y1="13" x2="13" y2="18" />
    <line x1="11" y1="18" x2="6" y2="13" />
    <line x1="6" y1="12" x2="18" y2="12" />
    <line x1="12" y1="6" x2="12" y2="18" />
   </motion.g>
  </svg>
 );
}

function DocumentsIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.rect x="5" y="4" width="14" height="16" rx="1" fill="#991b1b"
    animate={{ y: [0, -0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
   <motion.rect x="6" y="3" width="12" height="16" rx="1" fill="#b91c1c"
    animate={{ y: [0, -0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.1 }} />
   <motion.rect x="7" y="2" width="10" height="16" rx="1" fill="#dc2626" stroke="#ef4444" strokeWidth="0.5"
    animate={{ y: [0, -0.5, 0] }} transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }} />
   <motion.g stroke="#fff" strokeWidth="1" opacity="0.6"
    animate={{ opacity: [0.4, 0.8, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
    <line x1="9" y1="6" x2="15" y2="6" />
    <line x1="9" y1="9" x2="14" y2="9" />
    <line x1="9" y1="12" x2="13" y2="12" />
   </motion.g>
  </svg>
 );
}

function AlertsIcon() {
 return (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
   <motion.path d="M12 2 L22 20 L2 20 Z" fill="none" stroke="#dc2626" strokeWidth="2"
    animate={{
     scale: [1, 1.05, 1],
     filter: ['drop-shadow(0 0 2px #dc2626)', 'drop-shadow(0 0 8px #dc2626)', 'drop-shadow(0 0 2px #dc2626)']
    }}
    transition={{ duration: 1, repeat: Infinity }}
    style={{ transformOrigin: '12px 14px' }} />
   <motion.path d="M12 2 L22 20 L2 20 Z" fill="#dc2626" opacity="0.3"
    animate={{ opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 1, repeat: Infinity }} />
   <motion.g fill="#fff" animate={{ opacity: [1, 0.6, 1] }} transition={{ duration: 0.5, repeat: Infinity }}>
    <rect x="11" y="8" width="2" height="6" rx="1" />
    <circle cx="12" cy="16" r="1" />
   </motion.g>
  </svg>
 );
}

// ── Live status indicator ─────────────────────────────────────

function LiveIndicator({ isLive }: { isLive: boolean }) {
 return (
  <div className="flex items-center gap-2 text-xs">
   <motion.div
    className={`w-2 h-2 ${isLive ? 'bg-green-500' : 'bg-zinc-600'}`}
    animate={isLive ? { opacity: [1, 0.3, 1], scale: [1, 1.3, 1] } : {}}
    transition={{ duration: 1.5, repeat: Infinity }}
   />
   <span className={isLive ? 'text-green-500/80' : 'text-zinc-600'}>
    {isLive ? 'LIVE DATA' : 'STATIC'}
   </span>
  </div>
 );
}

// ── Main Component ────────────────────────────────────────────

export default function StatsDisplay({ stats: initialStats }: StatsDisplayProps) {
 const [stats, setStats] = useState<StatsData>({
  totalInvestigations: initialStats.totalInvestigations,
  entitiesTracked: initialStats.entitiesTracked,
  individuals: initialStats.individuals || 0,
  agencies: initialStats.agencies || 0,
  corporations: initialStats.corporations || 0,
  organizations: initialStats.organizations || 0,
  connections: initialStats.connections || 0,
  documentsArchived: initialStats.documentsArchived,
  activeAlerts: initialStats.activeAlerts,
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
    documentsArchived: d.documentsArchived,
    activeAlerts: d.activeAlerts,
   });
   setIsLive(true);
   setLastUpdated(json.meta?.generatedAt || new Date().toISOString());
  } catch {
   // Silently fail — keep showing last known values
  }
 }, []);

 useEffect(() => {
  // Fetch immediately on mount
  fetchStats();
  // Then refresh every 30 seconds
  const interval = setInterval(fetchStats, 30000);
  return () => clearInterval(interval);
 }, [fetchStats]);

 // Primary stats row (big numbers)
 const primaryStats = [
  { label: 'Active Investigations', value: stats.totalInvestigations, Icon: InvestigationIcon, href: '/investigations' },
  { label: 'Entities Tracked', value: stats.entitiesTracked, Icon: EntitiesIcon, href: '/entities' },
  { label: 'Connections Mapped', value: stats.connections, Icon: ConnectionsIcon, href: '/entities' },
  { label: 'Active Alerts', value: stats.activeAlerts, Icon: AlertsIcon, href: '/investigations' },
 ];

 // Secondary stats row (entity breakdowns)
 const secondaryStats = [
  { label: 'Individuals', value: stats.individuals, Icon: IndividualsIcon, href: '/entities/individuals' },
  { label: 'Agencies', value: stats.agencies, Icon: AgencyIcon, href: '/entities/agencies' },
  { label: 'Corporations', value: stats.corporations, Icon: CorporationIcon, href: '/entities/corporations' },
  { label: 'Organizations', value: stats.organizations, Icon: OrganizationIcon, href: '/entities/organizations' },
 ];

 return (
  <div className="space-y-6">
   {/* Live indicator */}
   <div className="flex items-center justify-between">
    <LiveIndicator isLive={isLive} />
    {lastUpdated && (
     <span className="text-xs text-zinc-600">
      Updated {new Date(lastUpdated).toLocaleTimeString()}
     </span>
    )}
   </div>

   {/* Primary stats — 4 big numbers */}
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
    {primaryStats.map((item, index) => (
     <motion.div
      key={item.label}
      role="button"
      tabIndex={0}
      onClick={() => router.push(item.href)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(item.href); }}
      className="glass-card p-5 group cursor-pointer h-full border border-blood-900/30 hover:border-blood-600/60 hover:bg-blood-950/20 hover:shadow-[0_0_15px_rgba(214,69,69,0.15)] active:scale-[0.98] transition-all duration-200 select-none"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
     >
      <div className="flex items-center justify-between mb-3">
       <div className="w-12 h-12 bg-gradient-to-br from-blood-900/50 to-blood-950/50 border border-blood-600/20 flex items-center justify-center group-hover:border-blood-600/50 transition-colors">
        <item.Icon />
       </div>
       <svg className="w-5 h-5 text-zinc-700 group-hover:text-blood-500 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="square" d="M9 5l7 7-7 7" />
       </svg>
      </div>
      <motion.div
       className="text-3xl font-bold text-white mb-1"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       transition={{ delay: index * 0.1 + 0.3 }}
      >
       <AnimatedNumber value={item.value} />
      </motion.div>
      <div className="text-sm text-zinc-500 group-hover:text-blood-500 transition-colors">
       {item.label} →
      </div>
     </motion.div>
    ))}
   </div>

   {/* Secondary stats — entity breakdown */}
   <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
    <AnimatePresence>
     {secondaryStats.map((item, index) => (
      <motion.div
       key={item.label}
       role="button"
       tabIndex={0}
       onClick={() => router.push(item.href)}
       onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') router.push(item.href); }}
       className="glass-card p-4 group cursor-pointer h-full border border-blood-900/20 hover:border-blood-600/50 hover:bg-blood-950/20 hover:shadow-[0_0_12px_rgba(214,69,69,0.1)] active:scale-[0.98] transition-all duration-200 select-none"
       initial={{ opacity: 0, y: 10 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: 0.5 + index * 0.08 }}
       whileHover={{ scale: 1.03 }}
       whileTap={{ scale: 0.97 }}
      >
       <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
         <div className="w-8 h-8 bg-gradient-to-br from-blood-900/30 to-blood-950/30 border border-blood-700/10 flex items-center justify-center group-hover:border-blood-600/40 transition-colors">
          <div className="scale-75"><item.Icon /></div>
         </div>
         <div className="text-xs text-zinc-600 group-hover:text-zinc-400 uppercase tracking-wider transition-colors">{item.label}</div>
        </div>
        <svg className="w-4 h-4 text-zinc-700 group-hover:text-blood-500 group-hover:translate-x-1 transition-all duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
         <path strokeLinecap="square" d="M9 5l7 7-7 7" />
        </svg>
       </div>
       <motion.div
        className="text-2xl font-bold text-zinc-300 group-hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 + index * 0.08 }}
       >
        <AnimatedNumber value={item.value} />
       </motion.div>
      </motion.div>
     ))}
    </AnimatePresence>
   </div>
  </div>
 );
}

