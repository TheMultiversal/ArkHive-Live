"use client";

import Link from"next/link";
import { ArrowRight, Shield, AlertTriangle, Eye, FileText, Users, ChevronRight, Skull, Search, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import StatsDisplay from"@/components/ui/StatsDisplay";
import CrystalButton from"@/components/ui/CrystalButton";
import BiohazardIcon from"@/components/ui/BiohazardIcon";
import { GovernmentIcon, CorporationIcon, IndividualIcon, OrganizationIcon, VaultSubmitIcon } from"@/components/ui/CategoryIcons";
import GlitchDivider from"@/components/ui/GlitchDivider";
import { GlitchParagraph } from"@/components/effects/GlitchText";
import TypewriterText from"@/components/effects/TypewriterText";
import FlatlineLoader from"@/components/effects/FlatlineLoader";
import SharpBleedingPyramid from"@/components/ui/SharpBleedingPyramid";
import SimpleTypingText from"@/components/effects/SimpleTypingText";
import AnimatedLetters from"@/components/effects/AnimatedLetters";

// Top investigation files, curated most intriguing cases
const FEATURED_INVESTIGATIONS: {
 slug: string;
 title: string;
 subtitle: string;
 severity: 'critical' | 'high' | 'medium';
}[] = [
 { slug: 'elite-trafficking', title: 'Elite Trafficking Networks', subtitle: 'Powerful predators protected by wealth and influence', severity: 'critical' },
 { slug: 'treason', title: 'Treason & Foreign Collusion', subtitle: 'Systematic betrayal of national interests for personal gain', severity: 'critical' },
 { slug: 'torture-program', title: 'CIA Torture Program', subtitle: 'Black sites, waterboarding, and zero accountability', severity: 'critical' },
 { slug: 'emf-assault', title: 'Havana Syndrome & Directed Energy Attacks', subtitle: 'Unexplained weapons targeting US personnel worldwide', severity: 'critical' },
 { slug: 'mkultra-full-declassification-analysis', title: 'MKUltra Declassification', subtitle: 'CIA mind control experiments on unwitting subjects', severity: 'critical' },
 { slug: 'military-industrial', title: 'Military Industrial Complex', subtitle: '$900B war economy Eisenhower warned about', severity: 'critical' },
 { slug: 'surveillance-state', title: 'The Surveillance State', subtitle: 'Mass domestic spying infrastructure exposed', severity: 'critical' },
 { slug: 'trump-tower-moscow', title: 'Trump Tower Moscow Project', subtitle: 'Secret Russian deal during presidential campaign', severity: 'critical' },
 { slug: 'election-disinformation', title: 'Election Disinformation Campaign', subtitle: 'Manufactured lies to overthrow democratic outcomes', severity: 'critical' },
 { slug: 'genocide-palestine', title: 'Gaza Genocide', subtitle: 'Systematic destruction enabled by US weapons', severity: 'critical' },
 { slug: 'stormy-daniels-hush-money', title: 'Stormy Daniels Hush Money', subtitle: '34 felony convictions and campaign finance fraud', severity: 'high' },
 { slug: 'seychelles-meeting', title: 'Seychelles Secret Meeting', subtitle: 'Covert back-channel with Russia and UAE', severity: 'high' },
 { slug: 'fox-disinformation', title: 'Fox News Disinformation Machine', subtitle: 'Propaganda network coordinating with political power', severity: 'high' },
 { slug: 'scotus-ethics', title: 'Supreme Court Ethics Crisis', subtitle: 'Undisclosed gifts, conflicts, and bought justices', severity: 'high' },
 { slug: 'mind-control-programs-modern-era', title: 'Mind Control Programs: Modern Era', subtitle: 'Behavioral influence operations beyond MKUltra', severity: 'high' },
 { slug: 'insider-trading-congressional-members', title: 'Congressional Insider Trading', subtitle: 'Lawmakers profiting from classified briefings', severity: 'high' },
 { slug: 'foster-care-to-trafficking-pipeline', title: 'Foster Care to Trafficking Pipeline', subtitle: 'Children disappearing from state custody into exploitation', severity: 'critical' },
 { slug: 'forced-sterilization-historical-patterns', title: 'Forced Sterilization Programs', subtitle: 'Government eugenics programs targeting minorities', severity: 'critical' },
 { slug: 'flint-water', title: 'Flint Water Crisis', subtitle: 'Government poisoned a city and covered it up', severity: 'critical' },
 { slug: 'fbi-assassinations', title: 'FBI Assassinations', subtitle: 'COINTELPRO, targeted killings, and state violence', severity: 'critical' },
];

const SEVERITY_COLORS: Record<string, string> = {
 critical: 'border-l-red-600 hover:border-l-red-400',
 high: 'border-l-red-700 hover:border-l-red-500',
 medium: 'border-l-red-800 hover:border-l-red-600',
};

const SEVERITY_DOTS: Record<string, string> = {
 critical: 'bg-red-500',
 high: 'bg-red-500',
 medium: 'bg-red-600',
};


// Real statistics from the archive - fetched dynamically from API
function useStats() {
 const [stats, setStats] = useState({
  totalInvestigations: 0,
  entitiesTracked: 0,
  individuals: 0,
  agencies: 0,
  corporations: 0,
  organizations: 0,
  connections: 0,
  documentsArchived: 0,
  activeAlerts: 0,
 });
 useEffect(() => {
  fetch('/api/stats').then(r => r.json()).then(data => {
   setStats({
    totalInvestigations: data.totalInvestigations || data.entities?.investigations?.count || 0,
    entitiesTracked: data.totalProfiles || data.entitiesTracked || 0,
    individuals: data.entities?.individuals?.count || 0,
    agencies: data.entities?.agencies?.count || 0,
    corporations: data.entities?.corporations?.count || 0,
    organizations: data.entities?.organizations?.count || 0,
    connections: data.connections || 0,
    documentsArchived: data.documentsArchived || 0,
    activeAlerts: data.activeAlerts || 0,
   });
  }).catch(() => {});
 }, []);
 return stats;
}

// ── Featured Investigations Grid (compact tile layout) ────────
function FeaturedInvestigationsGrid() {
 const router = useRouter();

 return (
  <section className="py-12 lg:py-16">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between mb-6">
     <div>
      <TypewriterText
       text="Featured Investigations"
       element="h2"
       className="text-2xl lg:text-3xl font-bold glass-text mb-2"
       speed={50}
      />
      <p className="glass-text-muted">
       Classified files demanding immediate attention
      </p>
     </div>
     <Link
      href="/investigations"
      className="hidden sm:flex items-center gap-2 text-zinc-600 hover:text-zinc-500 font-medium transition-colors"
     >
      View All
      <ChevronRight className="w-5 h-5"/>
     </Link>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
     {FEATURED_INVESTIGATIONS.map((inv, i) => (
      <motion.button
       key={inv.slug}
       onClick={() => router.push(`/investigations/${inv.slug}`)}
       className={`
        text-left p-3 border-l-2 ${SEVERITY_COLORS[inv.severity]}
        bg-gradient-to-br from-[#080808] to-[#020202] border border-[rgba(184,0,0,0.18)]
        hover:from-[#0a0202] hover:to-[#050505] hover:border-[rgba(184,0,0,0.40)]
        hover:shadow-[0_0_12px_rgba(184,0,0,0.12)]
        active:scale-[0.98]
        transition-all duration-200 cursor-pointer select-none group gloss-hover
       `}
       style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}
       initial={{ opacity: 0, y: 8 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ delay: i * 0.03 }}
       whileHover={{ x: 2 }}
       whileTap={{ scale: 0.98 }}
      >
       <div className="flex items-start justify-between gap-2">
        <div className="min-w-0 flex-1">
         <div className="flex items-center gap-1.5 mb-0.5">
          <div className={`w-1.5 h-1.5 ${SEVERITY_DOTS[inv.severity]} shrink-0`} />
          <span className="text-xs font-semibold text-zinc-300 group-hover:text-white transition-colors truncate">
           {inv.title}
          </span>
         </div>
         <p className="text-[10px] leading-tight text-zinc-600 group-hover:text-zinc-500 transition-colors line-clamp-2">
          {inv.subtitle}
         </p>
        </div>
        <svg
         className="w-3 h-3 text-zinc-700 group-hover:text-white group-hover:translate-x-0.5 transition-all duration-200 mt-0.5 shrink-0"
         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"
        >
         <path strokeLinecap="square" d="M9 5l7 7-7 7" />
        </svg>
       </div>
      </motion.button>
     ))}
    </div>

    <div className="mt-4 text-center sm:hidden">
     <Link
      href="/investigations"
      className="inline-flex items-center gap-2 text-zinc-600 font-medium"
     >
      View All Investigations
      <ChevronRight className="w-5 h-5"/>
     </Link>
    </div>
   </div>
  </section>
 );
}

export default function Home() {
 const stats = useStats();
 return (
 <div className="min-h-screen pt-20 lg:pt-24">
 {/* Hero Section */}
 <div className="mt-3 sm:mt-4">
 <section className="relative py-16 lg:py-24 overflow-hidden">
 {/* Crystal Clear Background */}
 <div className="absolute inset-0 overflow-hidden pointer-events-none">
 {/* Subtle radial glow from center */}
 <svg className="absolute inset-0 w-full h-full opacity-10">
 <defs>
 <radialGradient id="centerGlow"cx="50%"cy="50%"r="50%">
 <stop offset="0%"stopColor="#5a5a5a"stopOpacity="0.3"/>
 <stop offset="100%"stopColor="#5a5a5a"stopOpacity="0"/>
 </radialGradient>
 </defs>
 <circle cx="50%"cy="50%"r="200"fill="url(#centerGlow)"/>
 </svg>
 </div>

 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center max-w-4xl mx-auto">
 {/* Large Bleeding Pyramid Logo, Sharp & Clear */}
 <div className="flex justify-center mb-8">
 <SharpBleedingPyramid size={120} showWords={true} />
 </div>

 {/* Alert Badge, Sharp edges */}
 <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#080808] to-[#0a0202] border border-[rgba(184,0,0,0.25)] text-zinc-400 text-sm font-medium mb-8 animate-fade-in gloss" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}>
 <span className="w-2 h-2 bg-zinc-700 animate-pulse"/>
 <span className="glass-text-subtle">Investigative Archive, Documentation Platform</span>
 </div>

 {/* Main Headline, Dramatic Stacked Layout */}
 <div className="mb-6 animate-fade-in">
 <div className="space-y-1">
 {/* Line 1 */}
 <p className="text-lg sm:text-3xl lg:text-4xl font-bold glass-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em]">
 The Crimes They Think
 </p>
 {/* Line 2 (HIDDEN) emphasized */}
 <p className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight">
 <span className="text-blood-500" style={{ filter: 'drop-shadow(0 0 20px rgba(184, 0, 0, 0.6)) drop-shadow(0 0 50px rgba(184, 0, 0, 0.3))', textShadow: '0 0 40px rgba(184, 0, 0, 0.4), 0 0 80px rgba(184, 0, 0, 0.15)' }}>
 YOU&apos;LL NEVER
 </span>
 </p>
 {/* Line 3 */}
 <p className="text-lg sm:text-3xl lg:text-4xl font-bold glass-text-muted uppercase tracking-[0.1em] sm:tracking-[0.2em]">
 Find Out About
 </p>
 </div>
 
 {/* Subtext */}
 <div className="mt-4 flex items-center justify-center gap-4">
 <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-zinc-700"/>
 <span className="text-xs sm:text-sm glass-text-muted uppercase tracking-[0.3em]">
 Exposed • Documented • Preserved
 </span>
 <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-zinc-700"/>
 </div>
 </div>

 {/* Call to Action, Urgent Countdown Style */}
 <div className="mb-8 animate-fade-in "style={{ animationDelay:"150ms"}}>
 <div className="inline-block">
 {/* Top line */}
 <div className="flex items-center justify-center gap-3 mb-2">
 <span className="h-[1px] w-8 bg-zinc-700"/>
 <span className="text-xs glass-text-muted uppercase tracking-[0.3em]">Our Mission</span>
 <span className="h-[1px] w-8 bg-zinc-700"/>
 </div>
 
 {/* Main question, stacked dramatic */}
 <div className="relative">
 <p className="text-2xl sm:text-4xl lg:text-5xl font-black glass-text tracking-tight">
 FOLLOW THE <span className="text-zinc-500">EVIDENCE</span>
 </p>
 <p className="text-base sm:text-2xl lg:text-3xl font-bold glass-text-muted mt-1">
 Connect the dots they don&apos;t want connected.
 </p>
 </div>

 {/* Three pillars */}
 <div className="flex flex-wrap justify-center gap-2 mt-4">
 <span className="relative overflow-hidden px-3 sm:px-4 py-2 border border-[rgba(184,0,0,0.25)] bg-gradient-to-br from-[#080808] to-[#020202] text-zinc-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}>
 Primary Sources
 </span>
 <span className="relative overflow-hidden px-3 sm:px-4 py-2 border border-[rgba(184,0,0,0.25)] bg-gradient-to-br from-[#080808] to-[#020202] text-zinc-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}>
 Court Documents
 </span>
 <span className="relative overflow-hidden px-3 sm:px-4 py-2 border border-[rgba(184,0,0,0.25)] bg-gradient-to-br from-[#080808] to-[#020202] text-zinc-400 text-[10px] sm:text-xs uppercase tracking-wider font-bold" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}>
 Verified Evidence
 </span>
 </div>
 </div>
 </div>

 {/* Opening Declaration, Crystal Clear */}
 <div className="max-w-3xl mx-auto mb-8 bg-gradient-to-br from-[#080808] to-[#020202] border border-[rgba(184,0,0,0.25)] p-4 sm:p-6 gloss" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08), 0 4px 20px rgba(0,0,0,0.3)'}}>
 <p className="text-base sm:text-xl glass-text-subtle leading-relaxed">
 <span className="text-zinc-500 font-black uppercase">91 criminal charges.</span>
 <br />
 4 indictments. $454 million in fraud judgments.
 <br />
 <span className="glass-text font-bold">And that&apos;s just one person.</span>
 </p>
 <p className="text-base sm:text-lg glass-text-muted mt-4 leading-relaxed">
 Every day, institutions designed to protect you{" "}
 <span className="text-zinc-500 font-bold">betray that trust</span>{" "}
 while burying the evidence. We dig it up.{" "}
 <span className="glass-text font-bold italic">We document everything.</span>
 </p>
 <div className="mt-4 pt-4 border-t border-[rgba(255,255,255,0.15)]">
 <p className="text-sm glass-text-muted uppercase tracking-wide sm:tracking-widest">
 No conspiracy theories. <span className="text-zinc-500 font-bold">Just court records and primary sources.</span>
 </p>
 </div>
 </div>
 
 {/* ArkHive Introduction, Enhanced Crystal Clear Box */}
 <div className="max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay:"250ms"}}>
 <div className="border-0 sm:border sm:border-[rgba(184,0,0,0.25)] bg-transparent sm:bg-gradient-to-br sm:from-[#080808] sm:to-[#020202] p-0 sm:p-6 lg:p-8 gloss" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08), 0 4px 25px rgba(0,0,0,0.25)'}}>
 {/* Header */}
 <div className="text-center mb-4 sm:mb-6">
 <h2 className="text-2xl sm:text-3xl font-black text-zinc-500 mb-2 tracking-wider uppercase">
 Welcome to <span className="text-white">ArkHive®</span>
 </h2>
 <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto mb-4"/>
 <p className="text-base sm:text-lg glass-text-subtle leading-relaxed max-w-2xl mx-auto">
 The uncensored archive. The evidence they delete. The truth they bury.
 <br />
 And the crimes they commit in your name with your money while you sleep.
 </p>
 </div>

 {/* What We Document */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-6">
 {[
 { title:"Government Crimes", desc:"State-sponsored atrocities hidden from public view", href:"/investigations?category=Government+Abuse"},
 { title:"Corporate Malfeasance", desc:"Profit over people, cover-ups and collusion", href:"/investigations?category=Corporate+Crime"},
 { title:"Medical Tyranny", desc:"Forced treatments, experimental injections, pharma fraud", href:"/investigations?category=Public+Health"},
 { title:"Civil Liberty Violations", desc:"Constitutional erosion, surveillance, censorship", href:"/investigations?category=Civil+Rights+%26+Justice"},
 ].map((item, i) => (
 <Link key={i} href={item.href} className="text-center p-3 border border-[rgba(184,0,0,0.18)] bg-gradient-to-br from-[#080808] to-[#020202] hover:border-[rgba(184,0,0,0.40)] hover:from-[#0a0202] hover:to-[#050505] transition-all group gloss-hover" style={{boxShadow: 'inset 0 1px 0 rgba(184,0,0,0.08)'}}>
 <span className="block w-2 h-2 bg-zinc-600 mx-auto mb-2 group-hover:bg-zinc-600 transition-colors"/>
 <h3 className="text-sm font-bold text-zinc-400 uppercase tracking-wider mb-1 group-hover:text-white transition-colors">{item.title}</h3>
 <p className="text-xs glass-text-muted leading-tight">{item.desc}</p>
 </Link>
 ))}
 </div>

 {/* Mission Statement */}
 <div className="border-t border-[rgba(184,0,0,0.18)] pt-5">
 <div className="grid md:grid-cols-3 gap-4 text-center">
 <div>
 <span className="text-2xl font-black text-zinc-500">EXPOSE</span>
 <p className="text-xs glass-text-muted mt-1">Classified operations, black sites, and secret programs</p>
 </div>
 <div>
 <span className="text-2xl font-black glass-text">DOCUMENT</span>
 <p className="text-xs glass-text-muted mt-1">Primary sources, leaked files, and witness testimony</p>
 </div>
 <div>
 <span className="text-2xl font-black text-zinc-500">PRESERVE</span>
 <p className="text-xs glass-text-muted mt-1">Before they scrub it from existence forever</p>
 </div>
 </div>
 </div>

 {/* Warning */}
 <div className="mt-6 p-3 border border-[rgba(184,0,0,0.18)] bg-[#020202] text-center">
 <p className="text-xs glass-text-muted uppercase tracking-wide sm:tracking-widest">
 ⚠ This archive contains disturbing truths. Proceed with open eyes. ⚠
 </p>
 </div>
 </div>
 </div>

 {/* Tiered Investigation Categories */}
 <div className="max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay:"350ms"}}>
 {/* Tier 1: Documented, Court Records */}
 <div className="mb-4">
 <div className="flex items-center gap-2 mb-2">
 <span className="w-3 h-3 bg-zinc-700"/>
 <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">Documented, Court Records & Indictments</p>
 </div>
 <div className="flex flex-wrap gap-2 text-xs">
 {[
 { name:"Election Interference", href:"/investigations?tag=election+interference"},
 { name:"Financial Fraud", href:"/investigations?category=Financial+Crimes"},
 { name:"Human Trafficking", href:"/investigations?category=Trafficking+%26+Sexual+Crimes"},
 { name:"RICO Violations", href:"/investigations?tag=racketeering"},
 { name:"Seditious Conspiracy", href:"/investigations?tag=seditious+conspiracy"},
 { name:"Obstruction of Justice", href:"/investigations?tag=obstruction+of+justice"},
 { name:"Tax Evasion", href:"/investigations?tag=tax+evasion"},
 { name:"Wire Fraud", href:"/investigations?tag=wire+fraud"},
 { name:"Campaign Finance Crimes", href:"/investigations?tag=campaign+finance"},
 { name:"Bribery", href:"/investigations?category=Corruption+%26+Ethics"},
 { name:"Bank Fraud", href:"/investigations?tag=bank+fraud"},
 { name:"Securities Fraud", href:"/investigations?tag=securities+fraud"},
 { name:"Money Laundering", href:"/investigations?tag=money+laundering"},
 { name:"Perjury", href:"/investigations?tag=perjury"},
 { name:"Sexual Assault", href:"/investigations?tag=sexual+assault"},
 { name:"Racketeering", href:"/investigations?tag=racketeering"},
 { name:"Witness Tampering", href:"/investigations?tag=witness+tampering"},
 { name:"Conspiracy to Defraud the US", href:"/investigations?tag=conspiracy"},
 { name:"Insurance Fraud", href:"/investigations?tag=insurance+fraud"},
 { name:"Defamation", href:"/investigations?tag=defamation"},
 { name:"Emoluments Violations", href:"/investigations?tag=emoluments"},
 { name:"False Statements", href:"/investigations?tag=false+statements"},
 { name:"Espionage Act Violations", href:"/investigations?tag=espionage"},
 { name:"Mishandling Classified Documents", href:"/investigations?tag=classified+documents"},
 ].map((crime, i) => (
 <Link key={i} href={crime.href} className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:border-zinc-600 transition-colors">
 {crime.name}
 </Link>
 ))}
 </div>
 </div>

 {/* Tier 2: Declassified, Government Programs */}
 <div className="mb-4">
 <div className="flex items-center gap-2 mb-2">
 <span className="w-3 h-3 bg-zinc-500"/>
 <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">Declassified, Proven Government Programs</p>
 </div>
 <div className="flex flex-wrap gap-2 text-xs">
 {[
 { name:"MKUltra", href:"/investigations/mkultra-cia-human-experimentation"},
 { name:"COINTELPRO", href:"/investigations/cointelpro-domestic-surveillance-legacy"},
 { name:"Operation Mockingbird", href:"/investigations/operation-mockingbird-media-infiltration"},
 { name:"Tuskegee Experiments", href:"/investigations/tuskegee-syphilis-experiment"},
 { name:"Operation Northwoods", href:"/investigations/operation-northwoods-false-flag-planning"},
 { name:"Gulf of Tonkin", href:"/investigations/gulf-of-tonkin-fabricated-incident"},
 { name:"Iran-Contra", href:"/investigations/iran-contra-scandal"},
 { name:"CIA Torture Program", href:"/investigations/cia-black-site-torture-program"},
 { name:"NSA Mass Surveillance", href:"/investigations/nsa-mass-surveillance-constitutional-erosion"},
 { name:"Operation Paperclip", href:"/investigations/operation-paperclip-nazi-scientists"},
 { name:"Phoenix Program", href:"/investigations/phoenix-program-vietnam-assassination"},
 { name:"Operation CHAOS", href:"/investigations/operation-chaos"},
 { name:"Project SHAMROCK", href:"/investigations/project-shamrock-communications-surveillance"},
 { name:"Operation Condor", href:"/investigations/operation-condor-latin-america-terror"},
 { name:"Operation Gladio", href:"/investigations/operation-gladio-stay-behind-networks"},
 { name:"PRISM", href:"/investigations/prism-surveillance-program"},
 { name:"Project Artichoke", href:"/investigations/project-artichoke-interrogation-program"},
 { name:"Operation Midnight Climax", href:"/investigations/operation-midnight-climax-lsd-experiments"},
 ].map((program, i) => (
 <Link key={i} href={program.href} className="px-2 py-1 bg-[#020202] border border-[rgba(184,0,0,0.18)] text-zinc-400 hover:bg-[#080808] hover:border-[rgba(184,0,0,0.40)] transition-colors">
 {program.name}
 </Link>
 ))}
 </div>
 </div>

 {/* Tier 3: Active Investigations & Documented Patterns */}
 <div className="mb-4">
 <div className="flex items-center gap-2 mb-2">
 <span className="w-3 h-3 bg-zinc-500/70"/>
 <p className="text-sm text-zinc-500/90 font-bold uppercase tracking-wider">Active Investigations & Documented Patterns</p>
 </div>
 <div className="flex flex-wrap gap-2 text-xs">
 {[
 { name:"Pharmaceutical Influence", href:"/investigations/big-pharma-price-gouging-crisis"},
 { name:"Regulatory Capture", href:"/investigations/regulatory-capture"},
 { name:"Media Manipulation", href:"/investigations/media-manipulation"},
 { name:"Water Contamination", href:"/investigations/water-privatization-crisis"},
 { name:"Food Industry Fraud", href:"/investigations"},
 { name:"Prison Industrial Complex", href:"/investigations/prison-industrial-complex"},
 { name:"Medical Experimentation", href:"/investigations/tuskegee-syphilis-experiment"},
 { name:"Fluoride Research Suppression", href:"/investigations"},
 { name:"Vaccine Injury Documentation", href:"/investigations"},
 { name:"Atmospheric Modification & Geoengineering", href:"/investigations"},
 { name:"Electromagnetic Radiation Health Research", href:"/investigations"},
 { name:"Opioid Crisis Accountability", href:"/investigations"},
 { name:"Corporate Environmental Crimes", href:"/investigations"},
 { name:"Police Misconduct Patterns", href:"/investigations"},
 ].map((pattern, i) => (
 <Link key={i} href={pattern.href} className="px-2 py-1 bg-zinc-900 border border-zinc-700 text-zinc-500/80 hover:bg-zinc-800 hover:border-zinc-500 transition-colors">
 {pattern.name}
 </Link>
 ))}
 </div>
 </div>

 {/* Tier 4: Patterns Requiring Investigation */}
 <div>
 <div className="flex items-center gap-2 mb-2">
 <span className="w-3 h-3 bg-zinc-800"/>
 <p className="text-sm text-zinc-300/80 font-bold uppercase tracking-wider">Patterns Requiring Investigation</p>
 </div>
 <div className="flex flex-wrap gap-2 text-xs">
 {[
 { name:"Population Control Programs", href:"/investigations"},
 { name:"Modern Mind Influence Programs", href:"/investigations/mkultra-cia-human-experimentation"},
 { name:"Mass Surveillance Expansion", href:"/investigations/nsa-mass-surveillance-constitutional-erosion"},
 { name:"Economic Control Systems", href:"/investigations"},
 { name:"Controlled Opposition Networks", href:"/investigations"},
 { name:"Predictive Programming in Media", href:"/investigations"},
 { name:"Central Bank Digital Currency Risks", href:"/investigations"},
 { name:"Social Credit System Development", href:"/investigations"},
 ].map((topic, i) => (
 <Link key={i} href={topic.href} className="px-2 py-1 bg-zinc-900 border border-zinc-800 text-zinc-300/70 hover:bg-zinc-800 hover:border-zinc-700 transition-colors">
 {topic.name}
 </Link>
 ))}
 </div>
 </div>
 </div>

 {/* CTA Buttons, Crystal Clear Style */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay:"300ms"}}>
 <CrystalButton
 href="/investigations"
 variant="primary"
 size="lg"
 icon={<Search className="w-4 h-4"/>}
 >
 View Investigations
 </CrystalButton>
 <CrystalButton
 href="/submit"
 variant="secondary"
 size="lg"
 icon={<Send className="w-4 h-4"/>}
 >
 Submit Information
 </CrystalButton>
 </div>
 </div>
 </div>
 </section>
 </div>

 <GlitchDivider />

 {/* Stats Section */}
 <div className="mt-3 sm:mt-4">
 <section className="py-8 lg:py-12 relative overflow-hidden">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
 <StatsDisplay stats={stats} />
 </div>
 </section>
 </div>

 <GlitchDivider showLabel label="CLASSIFIED"/>

 {/* Featured Investigations Section */}
 <div className="mt-3 sm:mt-4">
 <FeaturedInvestigationsGrid />
 </div>

 <GlitchDivider showLabel label="BIOHAZARD"/>

 {/* Entity Categories Section */}
 <div className="mt-3 sm:mt-4">
 <section className="py-8 lg:py-12">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="text-center mb-12">
 <TypewriterText
 text="Track the Players"
 element="h2"
 className="text-2xl lg:text-3xl font-bold glass-text mb-4"
 speed={60}
 />
 <GlitchParagraph className="glass-text-muted max-w-2xl mx-auto">
 Every investigation connects to specific entities. Track agencies, corporations, 
 and individuals across multiple investigations to see the full picture.
 </GlitchParagraph>
 </div>

 {/* Category Cards with Biohazard Icons */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-12">
 <Link href="/entities/agencies"className="glass-card p-4 sm:p-8 text-center group">
 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 12px rgba(150, 150, 150, 0.5)) drop-shadow(0 0 24px rgba(100, 100, 100, 0.25))'}}>
 <GovernmentIcon size={48} className="text-zinc-300"/>
 </div>
 <h3 className="text-xl font-bold glass-text mb-2 group-hover:text-zinc-600 transition-colors">
 Government Agencies
 </h3>
 <p className="glass-text-muted text-sm mb-4">
 Federal, state, and local agencies with documented involvement
 </p>
 <span className="text-zinc-600 text-sm font-medium flex items-center justify-center gap-1">
 Explore <ChevronRight className="w-4 h-4"/>
 </span>
 </Link>

 <Link href="/entities/corporations"className="glass-card p-4 sm:p-8 text-center group">
 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 12px rgba(150, 150, 150, 0.5)) drop-shadow(0 0 24px rgba(100, 100, 100, 0.25))'}}>
 <CorporationIcon size={48} className="text-zinc-300"/>
 </div>
 <h3 className="text-xl font-bold glass-text mb-2 group-hover:text-zinc-600 transition-colors">
 Corporations
 </h3>
 <p className="glass-text-muted text-sm mb-4">
 Companies and corporate entities connected to investigations
 </p>
 <span className="text-zinc-600 text-sm font-medium flex items-center justify-center gap-1">
 Explore <ChevronRight className="w-4 h-4"/>
 </span>
 </Link>

 <Link href="/entities/individuals"className="glass-card p-4 sm:p-8 text-center group">
 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 12px rgba(150, 150, 150, 0.5)) drop-shadow(0 0 24px rgba(100, 100, 100, 0.25))'}}>
 <IndividualIcon size={48} className="text-zinc-300"/>
 </div>
 <h3 className="text-xl font-bold glass-text mb-2 group-hover:text-zinc-600 transition-colors">
 Key Individuals
 </h3>
 <p className="glass-text-muted text-sm mb-4">
 Decision-makers and key figures across investigations
 </p>
 <span className="text-zinc-600 text-sm font-medium flex items-center justify-center gap-1">
 Explore <ChevronRight className="w-4 h-4"/>
 </span>
 </Link>

 <Link href="/entities/organizations"className="glass-card p-4 sm:p-8 text-center group">
 <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform" style={{filter: 'drop-shadow(0 0 12px rgba(150, 150, 150, 0.5)) drop-shadow(0 0 24px rgba(100, 100, 100, 0.25))'}}>
 <OrganizationIcon size={48} className="text-zinc-300"/>
 </div>
 <h3 className="text-xl font-bold glass-text mb-2 group-hover:text-zinc-600 transition-colors">
 Organizations
 </h3>
 <p className="glass-text-muted text-sm mb-4">
 Groups, networks, and organizations connected to investigations
 </p>
 <span className="text-zinc-600 text-sm font-medium flex items-center justify-center gap-1">
 Explore <ChevronRight className="w-4 h-4"/>
 </span>
 </Link>
 </div>
 </div>
 </section>
 </div>

 <GlitchDivider showLabel label="ALERT"/>

 {/* Call to Action Section */}
 <div className="mt-3 sm:mt-4">
 <section className="py-12 lg:py-16">
 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
 <div className="glass-card p-4 sm:p-8 lg:p-12 text-center relative overflow-hidden">
 {/* Sharp geometric accent instead of blur */}
 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-zinc-700/50 to-transparent"/>
 <div className="absolute top-0 left-1/2 -translate-x-1/2">
 <div className="w-32 h-32 border border-zinc-800 rotate-45 transform -translate-y-16"/>
 </div>

 <div className="relative">
 <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center" style={{filter: 'drop-shadow(0 0 16px rgba(150, 150, 150, 0.6)) drop-shadow(0 0 32px rgba(100, 100, 100, 0.3))'}}>
 <VaultSubmitIcon size={56} className="text-zinc-300"/>
 </div>

 <TypewriterText
 text="Help Build the Archive"
 element="h2"
 className="text-2xl sm:text-3xl lg:text-4xl font-bold glass-text mb-8"
 speed={40}
 />
 <p className="glass-text-muted text-lg max-w-2xl mx-auto mb-4">
 Have information that should be documented?
 </p>
 <p className="glass-text-muted text-lg max-w-2xl mx-auto mb-4">
 Evidence of wrongdoing?
 </p>
 <p className="glass-text-subtle text-base max-w-2xl mx-auto mb-12">
 Submit your information securely to help expose the truth.
 </p>

 <CrystalButton
 href="/submit"
 variant="danger"
 size="lg"
 icon={<Send className="w-4 h-4"/>}
 className="mx-auto"
 >
 Submit Information
 </CrystalButton>
 </div>
 </div>
 </div>
 </section>
 </div>

 {/* Flatline Loader Demo (hidden, but shows on page load) */}
 <div className="fixed bottom-4 right-4 z-50 opacity-0 pointer-events-none">
 <FlatlineLoader size="sm"/>
 </div>
 </div>
 );
}
