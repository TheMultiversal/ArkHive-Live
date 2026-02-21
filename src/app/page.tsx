"use client";

import Link from "next/link";
import { ArrowRight, Shield, AlertTriangle, Eye, FileText, Users, ChevronRight, Skull, Search, Send } from "lucide-react";
import InvestigationCard, { Investigation } from "@/components/cards/InvestigationCard";
import EntityCard, { Entity } from "@/components/cards/EntityCard";
import StatsDisplay from "@/components/ui/StatsDisplay";
import CrystalButton from "@/components/ui/CrystalButton";
import BiohazardIcon from "@/components/ui/BiohazardIcon";
import GlitchDivider from "@/components/ui/GlitchDivider";
import { GlitchParagraph } from "@/components/effects/GlitchText";
import TypewriterText from "@/components/effects/TypewriterText";
import FlatlineLoader from "@/components/effects/FlatlineLoader";
import SharpBleedingPyramid from "@/components/ui/SharpBleedingPyramid";
import SimpleTypingText from "@/components/effects/SimpleTypingText";
import AnimatedLetters from "@/components/effects/AnimatedLetters";

// Featured investigations - Latest critical investigations
const featuredInvestigations: Investigation[] = [
  {
    id: "trump-1",
    slug: "trump-criminal-compendium",
    title: "The Trump Criminal Compendium",
    summary: "A comprehensive juridical documentation of Donald Trump's crimes against humanity, universal law, and democratic institutions. Includes 40+ charges spanning election interference, human trafficking complicity, financial crimes, espionage, and incitement of insurrection.",
    category: "Crimes Against Humanity",
    severity: "critical",
    date: "June 2015",
    entityCount: 28,
    tags: ["Election Interference", "Human Trafficking", "Tax Evasion", "RICO", "January 6", "Epstein"],
  },
  {
    id: "epstein-1",
    slug: "epstein-network",
    title: "Epstein Network Investigation",
    summary: "Comprehensive investigation into Jeffrey Epstein's global trafficking operation, his connections to Trump, and the network of powerful individuals who enabled decades of abuse.",
    category: "Human Trafficking",
    severity: "critical",
    date: "June 2008",
    entityCount: 15,
    tags: ["Epstein", "Maxwell", "Trump", "Trafficking", "Sexual Abuse"],
  },
  {
    id: "j6-1",
    slug: "january-6-insurrection",
    title: "January 6 Insurrection",
    summary: "The violent attack on American democracy: Trump incited a mob to storm the Capitol, resulting in deaths, injuries, and attempted overthrow of a lawful election. Includes criminal convictions and ongoing proceedings.",
    category: "Election Interference",
    severity: "critical",
    date: "January 2021",
    entityCount: 12,
    tags: ["January 6", "Insurrection", "Seditious Conspiracy", "Proud Boys", "Oath Keepers"],
  },
];

// Featured entities - Key players across investigations
const featuredEntities: Entity[] = [
  {
    id: "doj",
    slug: "doj",
    name: "Department of Justice",
    type: "agency",
    description: "Under Trump, the DOJ became a weapon of political persecution. AG William Barr misrepresented the Mueller Report, intervened in Roger Stone's sentencing, and dropped charges against Michael Flynn.",
    role: "Federal Executive Department",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "trump-org",
    slug: "trump-organization",
    name: "The Trump Organization",
    type: "corporation",
    description: "Convicted of 17 felonies. $454M fraud judgment. CFO imprisoned. Money laundering, tax fraud, hush money payments. Deutsche Bank received $2B+ despite red flags.",
    role: "Criminal Enterprise",
    investigationCount: 5,
    riskLevel: "extreme",
  },
  {
    id: "trump-1",
    slug: "donald-trump",
    name: "Donald J. Trump",
    type: "individual",
    description: "45th & 47th President of the United States. Convicted felon (34 counts). Subject of criminal indictments, civil judgments, and investigations spanning election interference, financial crimes, and incitement of insurrection.",
    role: "47th President, Convicted Felon",
    investigationCount: 39,
    riskLevel: "extreme",
  },
];

// Real statistics from the archive
const stats = {
  totalInvestigations: 74,
  entitiesTracked: 579,  // 50 agencies + 49 corporations + 37 organizations + 443 individuals
  documentsArchived: 2847,
  activeAlerts: 23,
};

export default function Home() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Crystal Clear Background - Sharp geometric accents */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sharp corner accents instead of blurry orbs */}
          <div className="absolute top-20 left-20 w-32 h-32 border-l-2 border-t-2 border-blood-700/20" />
          <div className="absolute top-20 right-20 w-32 h-32 border-r-2 border-t-2 border-blood-700/20" />
          <div className="absolute bottom-20 left-20 w-32 h-32 border-l-2 border-b-2 border-blood-700/20" />
          <div className="absolute bottom-20 right-20 w-32 h-32 border-r-2 border-b-2 border-blood-700/20" />
          
          {/* Sharp radial lines from center */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#dc2626" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Pre-computed positions to avoid hydration mismatch from Math.sin/cos floating point differences */}
            {[
              { x2: "100%", y2: "50%" },
              { x2: "93.3%", y2: "75%" },
              { x2: "75%", y2: "93.3%" },
              { x2: "50%", y2: "100%" },
              { x2: "25%", y2: "93.3%" },
              { x2: "6.7%", y2: "75%" },
              { x2: "0%", y2: "50%" },
              { x2: "6.7%", y2: "25%" },
              { x2: "25%", y2: "6.7%" },
              { x2: "50%", y2: "0%" },
              { x2: "75%", y2: "6.7%" },
              { x2: "93.3%", y2: "25%" },
            ].map((pos, i) => (
              <line
                key={i}
                x1="50%"
                y1="50%"
                x2={pos.x2}
                y2={pos.y2}
                stroke="#dc2626"
                strokeWidth="0.5"
                opacity="0.3"
              />
            ))}
            <circle cx="50%" cy="50%" r="200" fill="url(#centerGlow)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            {/* Large Bleeding Pyramid Logo - Sharp & Clear */}
            <div className="flex justify-center mb-8">
              <SharpBleedingPyramid size={160} showWords={true} />
            </div>

            {/* Alert Badge - Sharp edges */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blood-950/30 border border-blood-800/50 text-blood-600 text-sm font-medium mb-8 animate-fade-in">
              <span className="w-2 h-2 bg-blood-700 animate-pulse" />
              <span>Investigative Archive, Documentation Platform</span>
            </div>

            {/* Main Headline - Dramatic Stacked Layout */}
            <div className="mb-6 animate-fade-in">
              <div className="space-y-1">
                {/* Line 1 */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-500 uppercase tracking-[0.2em]">
                  The Crimes They Think
                </p>
                {/* Line 2 - HIDDEN - emphasized */}
                <p className="text-5xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight">
                  <span className="text-blood-600" style={{ filter: 'drop-shadow(0 0 30px rgba(153,27,27,0.7)) drop-shadow(0 0 60px rgba(127,29,29,0.4))' }}>
                    YOU&apos;LL NEVER
                  </span>
                </p>
                {/* Line 3 */}
                <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-500 uppercase tracking-[0.2em]">
                  Find Out About
                </p>
              </div>
              
              {/* Subtext */}
              <div className="mt-4 flex items-center justify-center gap-4">
                <span className="h-[1px] w-12 bg-gradient-to-r from-transparent to-blood-700" />
                <span className="text-xs sm:text-sm text-zinc-600 uppercase tracking-[0.3em]">
                  Exposed • Documented • Preserved
                </span>
                <span className="h-[1px] w-12 bg-gradient-to-l from-transparent to-blood-700" />
              </div>
            </div>

            {/* Call to Action - Urgent Countdown Style */}
            <div className="mb-8 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="inline-block">
                {/* Top line */}
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="h-[1px] w-8 bg-blood-700" />
                  <span className="text-xs text-zinc-500 uppercase tracking-[0.3em]">Our Mission</span>
                  <span className="h-[1px] w-8 bg-blood-700" />
                </div>
                
                {/* Main question - stacked dramatic */}
                <div className="relative">
                  <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                    FOLLOW THE <span className="text-blood-600">EVIDENCE</span>
                  </p>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-zinc-400 mt-1">
                    Connect the dots they don&apos;t want connected.
                  </p>
                </div>

                {/* Three pillars */}
                <div className="flex flex-wrap justify-center gap-2 mt-4">
                  <span className="px-4 py-2 border-2 border-blood-700 text-blood-600 text-xs uppercase tracking-wider font-bold">
                    Primary Sources
                  </span>
                  <span className="px-4 py-2 border-2 border-blood-700 text-blood-600 text-xs uppercase tracking-wider font-bold">
                    Court Documents
                  </span>
                  <span className="px-4 py-2 border-2 border-blood-700 text-blood-600 text-xs uppercase tracking-wider font-bold">
                    Verified Evidence
                  </span>
                </div>
              </div>
            </div>

            {/* Opening Declaration - Crystal Clear */}
            <div className="max-w-3xl mx-auto mb-8 bg-black/60 p-6">
              <p className="text-lg sm:text-xl text-zinc-300 leading-relaxed">
                <span className="text-blood-600 font-black uppercase">91 criminal charges.</span>
                <br />
                4 indictments. $454 million in fraud judgments.
                <br />
                <span className="text-white font-bold">And that&apos;s just one person.</span>
              </p>
              <p className="text-base sm:text-lg text-zinc-400 mt-4 leading-relaxed">
                Every day, institutions designed to protect you{" "}
                <span className="text-blood-600 font-bold">betray that trust</span>{" "}
                while burying the evidence. We dig it up.{" "}
                <span className="text-white font-bold italic">We document everything.</span>
              </p>
              <div className="mt-4 pt-4 border-t border-zinc-800">
                <p className="text-sm text-zinc-500 uppercase tracking-widest">
                  No conspiracy theories. <span className="text-blood-600 font-bold">Just court records and primary sources.</span>
                </p>
              </div>
            </div>
            
            {/* ArkHive Introduction - Enhanced Crystal Clear Box */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "250ms" }}>
              <div className="border-2 border-blood-800/60 bg-black/70 p-8">
                {/* Header */}
                <div className="text-center mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-blood-600 mb-2 tracking-wider uppercase">
                    Welcome to <span className="text-white">ArkHive®</span>
                  </h2>
                  <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blood-700 to-transparent mx-auto mb-4" />
                  <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
                    The uncensored archive. The evidence they delete. The truth they bury.
                    <br />
                    And the crimes they commit in your name with your money while you sleep.
                  </p>
                </div>

                {/* What We Document */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {[
                    { title: "Government Crimes", desc: "State-sponsored atrocities hidden from public view" },
                    { title: "Corporate Malfeasance", desc: "Profit over people, cover-ups and collusion" },
                    { title: "Medical Tyranny", desc: "Forced treatments, experimental injections, pharma fraud" },
                    { title: "Civil Liberty Violations", desc: "Constitutional erosion, surveillance, censorship" },
                  ].map((item, i) => (
                    <div key={i} className="text-center p-3 border border-blood-900/40 bg-blood-950/30">
                      <span className="block w-2 h-2 bg-blood-700 mx-auto mb-2" />
                      <h3 className="text-xs sm:text-sm font-bold text-blood-600 uppercase tracking-wider mb-1">{item.title}</h3>
                      <p className="text-[10px] sm:text-xs text-zinc-500 leading-tight">{item.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Mission Statement */}
                <div className="border-t border-blood-900/40 pt-5">
                  <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div>
                      <span className="text-2xl font-black text-blood-600">EXPOSE</span>
                      <p className="text-xs text-zinc-500 mt-1">Classified operations, black sites, and secret programs</p>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-white">DOCUMENT</span>
                      <p className="text-xs text-zinc-500 mt-1">Primary sources, leaked files, and witness testimony</p>
                    </div>
                    <div>
                      <span className="text-2xl font-black text-blood-600">PRESERVE</span>
                      <p className="text-xs text-zinc-500 mt-1">Before they scrub it from existence forever</p>
                    </div>
                  </div>
                </div>

                {/* Warning */}
                <div className="mt-6 p-3 border border-zinc-800 bg-zinc-900/50 text-center">
                  <p className="text-xs text-zinc-500 uppercase tracking-widest">
                    ⚠ This archive contains disturbing truths. Proceed with open eyes. ⚠
                  </p>
                </div>
              </div>
            </div>

            {/* Tiered Investigation Categories */}
            <div className="max-w-4xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "350ms" }}>
              {/* Tier 1: Documented - Court Records */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-blood-600" />
                  <p className="text-sm text-blood-600 font-bold uppercase tracking-wider">Documented, Court Records & Indictments</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Election Interference", "Financial Fraud", "Human Trafficking", "RICO Violations",
                    "Seditious Conspiracy", "Obstruction of Justice", "Tax Evasion", "Wire Fraud",
                    "Campaign Finance Crimes", "Bribery", "Bank Fraud", "Securities Fraud",
                    "Money Laundering", "Perjury", "Sexual Assault", "Racketeering"
                  ].map((crime, i) => (
                    <span key={i} className="px-2 py-1 bg-blood-950/50 border border-blood-700/50 text-blood-500 hover:bg-blood-900/30 transition-colors cursor-default">
                      {crime}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tier 2: Declassified - Government Programs */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-zinc-500" />
                  <p className="text-sm text-zinc-400 font-bold uppercase tracking-wider">Declassified, Proven Government Programs</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "MKUltra", "COINTELPRO", "Operation Mockingbird", "Tuskegee Experiments",
                    "Operation Northwoods", "Gulf of Tonkin", "Iran-Contra", "CIA Torture Program",
                    "NSA Mass Surveillance", "Operation Paperclip", "Phoenix Program"
                  ].map((program, i) => (
                    <span key={i} className="px-2 py-1 bg-zinc-900/50 border border-zinc-700/50 text-zinc-400 hover:bg-zinc-800/50 transition-colors cursor-default">
                      {program}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tier 3: Under Investigation - Patterns */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-amber-600/70" />
                  <p className="text-sm text-amber-600/90 font-bold uppercase tracking-wider">Under Investigation, Documented Patterns</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Pharmaceutical Influence", "Regulatory Capture", "Media Manipulation",
                    "Water Contamination", "Food Industry Fraud", "Prison Industrial Complex",
                    "Medical Experimentation", "Fluoride Research Suppression", "Vaccine Injury Concealment",
                    "Weather Modification Programs", "5G Health Research", "Chemtrail Aerosol Programs"
                  ].map((pattern, i) => (
                    <span key={i} className="px-2 py-1 bg-amber-950/30 border border-amber-800/40 text-amber-600/80 hover:bg-amber-900/30 transition-colors cursor-default">
                      {pattern}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tier 4: Suppressed - Requires Further Investigation */}
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 bg-purple-600/50" />
                  <p className="text-sm text-purple-500/80 font-bold uppercase tracking-wider">Suppressed Research, Requires Investigation</p>
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  {[
                    "Depopulation Agendas", "Mind Control Programs", "Mass Surveillance Networks",
                    "Economic Enslavement Systems", "Controlled Opposition", "Predictive Programming"
                  ].map((topic, i) => (
                    <span key={i} className="px-2 py-1 bg-purple-950/20 border border-purple-800/30 text-purple-500/70 hover:bg-purple-900/20 transition-colors cursor-default">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons - Crystal Clear Style */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <CrystalButton
                href="/investigations"
                variant="primary"
                size="lg"
                icon={<Search className="w-4 h-4" />}
              >
                View Investigations
              </CrystalButton>
              <CrystalButton
                href="/submit"
                variant="secondary"
                size="lg"
                icon={<Send className="w-4 h-4" />}
              >
                Submit Information
              </CrystalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Glitch Divider */}
      <GlitchDivider />

      {/* Stats Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <StatsDisplay stats={stats} />
        </div>
      </section>

      {/* Glitch Divider */}
      <GlitchDivider showLabel label="CLASSIFIED" />

      {/* Featured Investigations */}
      <section className="py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <TypewriterText
                text="Latest Investigations"
                element="h2"
                className="text-2xl lg:text-3xl font-bold text-white mb-2"
                speed={50}
              />
              <p className="text-dark-400">
                Recent documentation and exposés
              </p>
            </div>
            <Link
              href="/investigations"
              className="hidden sm:flex items-center gap-2 text-blood-700 hover:text-blood-600 font-medium transition-colors"
            >
              View All
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredInvestigations.map((investigation, index) => (
              <InvestigationCard
                key={investigation.id}
                investigation={investigation}
                featured={index === 0}
              />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/investigations"
              className="inline-flex items-center gap-2 text-blood-700 font-medium"
            >
              View All Investigations
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Glitch Divider */}
      <GlitchDivider showLabel label="BIOHAZARD" />

      {/* Entity Categories */}
      <section className="py-12 lg:py-16 bg-dark-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <TypewriterText
              text="Track the Players"
              element="h2"
              className="text-2xl lg:text-3xl font-bold text-white mb-4"
              speed={60}
            />
            <GlitchParagraph className="text-dark-400 max-w-2xl mx-auto">
              Every investigation connects to specific entities. Track agencies, corporations, 
              and individuals across multiple investigations to see the full picture.
            </GlitchParagraph>
          </div>

          {/* Category Cards with Biohazard Icons */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Link href="/entities/agencies" className="glass-card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blood-700 to-blood-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blood-900/30">
                <BiohazardIcon variant="nuclear" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blood-700 transition-colors">
                Government Agencies
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                Federal, state, and local agencies with documented involvement
              </p>
              <span className="text-blood-700 text-sm font-medium flex items-center justify-center gap-1">
                Explore <ChevronRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/entities/corporations" className="glass-card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blood-800 to-blood-900 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blood-900/30">
                <BiohazardIcon variant="pharmaceutical" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blood-700 transition-colors">
                Corporations
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                Companies and corporate entities connected to investigations
              </p>
              <span className="text-blood-700 text-sm font-medium flex items-center justify-center gap-1">
                Explore <ChevronRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/entities/individuals" className="glass-card p-8 text-center group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blood-700 to-blood-800 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-blood-900/30">
                <BiohazardIcon variant="biological" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blood-700 transition-colors">
                Key Individuals
              </h3>
              <p className="text-dark-400 text-sm mb-4">
                Decision-makers and key figures across investigations
              </p>
              <span className="text-blood-700 text-sm font-medium flex items-center justify-center gap-1">
                Explore <ChevronRight className="w-4 h-4" />
              </span>
            </Link>
          </div>

          {/* Featured Entities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredEntities.map((entity) => (
              <EntityCard key={entity.id} entity={entity} />
            ))}
          </div>
        </div>
      </section>

      {/* Glitch Divider */}
      <GlitchDivider showLabel label="ALERT" />

      {/* Call to Action */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-card p-8 lg:p-12 text-center relative overflow-hidden">
            {/* Sharp geometric accent instead of blur */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-blood-600/50 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <div className="w-32 h-32 border border-blood-600/10 rotate-45 transform -translate-y-16" />
            </div>

            <div className="relative">
              <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blood-700 to-blood-800 flex items-center justify-center shadow-lg shadow-blood-900/50">
                <BiohazardIcon variant="standard" size={40} className="text-white" />
              </div>

              <TypewriterText
                text="Help Build the Archive"
                element="h2"
                className="text-3xl lg:text-4xl font-bold text-white mb-4"
                speed={40}
              />
              <GlitchParagraph className="text-dark-300 max-w-2xl mx-auto mb-12">
                Have information that should be documented? Evidence of wrongdoing? 
                Submit your information securely to help expose the truth.
              </GlitchParagraph>

              <CrystalButton
                href="/submit"
                variant="danger"
                size="lg"
                icon={<Send className="w-4 h-4" />}
                className="mx-auto"
              >
                Submit Information
              </CrystalButton>
            </div>
          </div>
        </div>
      </section>

      {/* Flatline Loader Demo (hidden, but shows on page load) */}
      <div className="fixed bottom-4 right-4 z-50 opacity-0 pointer-events-none">
        <FlatlineLoader size="sm" />
      </div>
    </div>
  );
}
