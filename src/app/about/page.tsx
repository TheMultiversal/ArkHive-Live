import type { Metadata } from "next";
import Link from"next/link";
import { Skull, Target, Eye, FileText, Users, Lock, ArrowRight, Database, Shield, AlertTriangle, Globe, Scale, Zap } from "lucide-react";

export const metadata: Metadata = {
 title:"About ArkHive, The Accountability Archive",
 description:"826 investigations. 2,615 tracked entities. 3,140 mapped connections. ArkHive is the largest open-source investigative accountability platform on the internet.",
 openGraph: {
 title:"About ArkHive, The Accountability Archive",
 description:"826 investigations. 2,615 tracked entities. 3,140 mapped connections. ArkHive is the largest open-source investigative accountability platform on the internet.",
 },
};

export default function AboutPage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
 {/* Header */}
 <div className="py-12">
 <div className="border-2 border-blood-800/60 bg-[#190800] p-8 lg:p-12 text-center">
 <div className="w-20 h-20 mx-auto mb-6 border-2 border-blood-800 bg-blood-950 flex items-center justify-center">
 <Skull className="w-10 h-10 text-blood-700"/>
 </div>
 <h1 className="text-4xl lg:text-5xl font-black glass-text uppercase tracking-wider mb-4">
 ABOUT <span className="text-blood-600">ARKHIVE<sup className="text-blood-700 text-lg">®</sup></span>
 </h1>
 <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
 The largest open-source investigative accountability platform on the internet.
 826 investigations. 2,615 tracked entities. 3,140 mapped connections. Zero corporate sponsors. Zero government approval.
 </p>
 {/* Live Stats Bar */}
 <div className="flex flex-wrap justify-center gap-4 text-xs font-mono">
 <div className="flex items-center gap-2 px-3 py-1.5 border border-blood-900 bg-black">
 <span className="text-blood-500 font-bold">826</span>
 <span className="text-zinc-500">Investigations</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-1.5 border border-blood-900 bg-black">
 <span className="text-blood-500 font-bold">2,110</span>
 <span className="text-zinc-500">Individuals Tracked</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-1.5 border border-blood-900 bg-black">
 <span className="text-blood-500 font-bold">141</span>
 <span className="text-zinc-500">Agencies</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-1.5 border border-blood-900 bg-black">
 <span className="text-blood-500 font-bold">209</span>
 <span className="text-zinc-500">Corporations</span>
 </div>
 <div className="flex items-center gap-2 px-3 py-1.5 border border-blood-900 bg-black">
 <span className="text-blood-500 font-bold">155</span>
 <span className="text-zinc-500">Organizations</span>
 </div>
 </div>
 </div>
 </div>

 {/* What Is ArkHive */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
 <div className="flex items-center gap-3 mb-4">
 <Database className="w-6 h-6 text-blood-700"/>
 <h2 className="text-xl font-black glass-text uppercase tracking-wider">What Is ArkHive</h2>
 </div>
 <p className="text-zinc-400 leading-relaxed mb-4">
 <span className="glass-text font-bold">ArkHive®</span> is a comprehensive investigative accountability
 database that documents institutional crimes, systemic corruption, and abuses of power across governments,
 corporations, intelligence agencies, and the individuals who operate them. Every investigation is
 cross-referenced with named entities; creating an interconnected map of who did what, when, and with whom.
 </p>
 <p className="text-zinc-400 leading-relaxed mb-4">
 This is not opinion. This is not commentary. Every file in this archive is built on court records,
 congressional reports, FOIA documents, leaked materials, declassified intelligence, investigative
 journalism, and sworn testimony. Sources are cited. Names are named.
 </p>
 <p className="text-zinc-400 leading-relaxed">
 We exist because the information is already public; scattered across thousands of documents,
 buried in footnotes, spread across decades. ArkHive brings it together in one place, connected,
 searchable, and permanent. The truth was never hidden. It was just never organized.
 </p>
 </section>

 {/* Mission */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
 <div className="flex items-center gap-3 mb-4">
 <Target className="w-6 h-6 text-blood-700"/>
 <h2 className="text-xl font-black glass-text uppercase tracking-wider">Our Mission</h2>
 </div>
 <div className="space-y-4">
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <div className="w-2 bg-blood-700 shrink-0"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Permanent Documentation</h3>
 <p className="text-zinc-500 text-sm">Create an indestructible public record of institutional crimes that cannot be memory-holed, redacted, or classified away. Once it&apos;s in the archive, it stays.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <div className="w-2 bg-blood-700 shrink-0"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Connection Mapping</h3>
 <p className="text-zinc-500 text-sm">Reveal how power operates through networks. A single investigation is a story. 826 investigations cross-referenced with 2,615 entities across 3,140 mapped connections is a map of systemic corruption.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <div className="w-2 bg-blood-700 shrink-0"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Public Accessibility</h3>
 <p className="text-zinc-500 text-sm">No paywalls. No subscriptions. No donor-influenced editorial boards. The archive is free because accountability shouldn&apos;t have a price tag.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <div className="w-2 bg-blood-700 shrink-0"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Pattern Recognition</h3>
 <p className="text-zinc-500 text-sm">Individual crimes look like anomalies. Documented patterns reveal systems. The same corporations, the same agencies, the same individuals; appearing across decades of investigations.</p>
 </div>
 </div>
 </div>
 </section>

{/* What We Cover */}
            <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-6 h-6 text-blood-700"/>
                <h2 className="text-xl font-black glass-text uppercase tracking-wider">What We Cover</h2>
              </div>
              <p className="text-zinc-500 text-sm mb-2">
                Investigations span <span className="text-blood-500 font-bold">138+ categories</span> across every major domain of institutional power. Below are the primary domains and representative coverage areas:
              </p>
              <p className="text-zinc-600 text-xs mb-5">
                Each investigation is tagged with specific categories. Many cross multiple domains; a single case of corporate fraud may also involve government corruption, environmental crime, and whistleblower retaliation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  { label:"Government Corruption & Abuse of Power", desc:"Obstruction of justice, ethics violations, conflicts of interest, institutional corruption, oligarchy, abuse of power" },
                  { label:"Elections & Democracy", desc:"Voter suppression, election interference, election subversion, election crimes, election security, democracy" },
                  { label:"War Crimes & Military Operations", desc:"Crimes against humanity, genocide, military-industrial complex, covert operations, civilian casualties" },
                  { label:"Financial & Economic Crimes", desc:"Money laundering, market manipulation, financial fraud, economic exploitation, economic concentration" },
                  { label:"Corporate Crime & Accountability", desc:"Corporate fraud, corporate homicide, corporate negligence, regulatory capture, regulatory failure, contractor corruption" },
                  { label:"Civil Rights & Racial Justice", desc:"Systemic racism, civil liberties, racial justice, hate crimes, criminal justice, systemic injustice" },
                  { label:"Human Rights & Trafficking", desc:"Human rights violations, human trafficking, abuse & exploitation, institutional abuse, crimes against humanity" },
                  { label:"Intelligence & Covert Operations", desc:"Intelligence failures, intelligence abuse, intelligence manipulation, covert operations, foreign intelligence" },
                  { label:"Surveillance, Technology & Privacy", desc:"Mass surveillance, digital rights, data exploitation, platform accountability, technology & privacy" },
                  { label:"National Security & Terrorism", desc:"Domestic terrorism, state violence, political violence, mass shootings, gun violence, mass violence" },
                  { label:"Law & Constitutional Crises", desc:"Judicial corruption, constitutional violations, constitutional crisis, legal accountability" },
                  { label:"Foreign Affairs & Geopolitics", desc:"Foreign influence, foreign collusion, international law, international corruption, geopolitics, global governance" },
                  { label:"Environmental Crimes & Justice", desc:"Environmental crime, environmental justice, climate cover-ups, energy, toxic exposure" },
                  { label:"Public Health & Safety", desc:"Pharmaceutical fraud, research ethics, food & agriculture, global health, healthcare, public safety" },
                  { label:"Media & Disinformation", desc:"Propaganda networks, information warfare, media corruption, media manipulation, disinformation accountability" },
                  { label:"Sexual Crimes & Misconduct", desc:"Sexual assault, sexual harassment, sex crimes, trafficking rings, institutional cover-ups" },
                  { label:"Labor Rights & Exploitation", desc:"Labor abuse, labor rights, worker exploitation, economic exploitation" },
                  { label:"Political Extremism & Corruption", desc:"Political extremism, radicalization, political finance, political corruption, January 6 response" },
                  { label:"Whistleblower & Transparency", desc:"Whistleblower retaliation, transparency, accountability, cover-ups" },
                  { label:"Animal Welfare & Other", desc:"Animal welfare, assassination, food & agriculture, research ethics" },
 ].map((item) => (
 <div key={item.label} className="flex gap-3 p-3 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <span className="w-1.5 h-1.5 bg-blood-700 shrink-0 mt-1.5"/>
 <div>
 <span className="text-zinc-300 text-xs font-semibold">{item.label}</span>
 <p className="text-zinc-600 text-[10px] leading-tight mt-0.5">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* How It Works */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
 <div className="flex items-center gap-3 mb-6">
 <Eye className="w-6 h-6 text-blood-700"/>
 <h2 className="text-xl font-black glass-text uppercase tracking-wider">How The Archive Works</h2>
 </div>
 <div className="space-y-4">
 {[
 { num:"01", title:"INTELLIGENCE GATHERING", desc:"Investigations are built from publicly available records: court filings, congressional testimony, FOIA releases, declassified documents, inspector general reports, and award-winning investigative journalism. Every source is cited." },
 { num:"02", title:"ENTITY IDENTIFICATION", desc:"Every person, agency, corporation, and organization connected to an investigation is identified and catalogued. We track 2,110 individuals, 141 government agencies, 209 corporations, and 155 organizations." },
 { num:"03", title:"CROSS-REFERENCING", desc:"Entities are linked across investigations. When the same corporation appears in a 1990s environmental crime and a 2020s financial fraud, that connection is mapped. Patterns emerge that no single investigation reveals." },
 { num:"04", title:"SEVERITY CLASSIFICATION", desc:"Every investigation is rated by severity: Critical (ongoing serious harm), High (significant documented damage), Medium (systemic issues), or Low (historical documentation). This helps prioritize what demands attention." },
 { num:"05", title:"PERMANENT ARCHIVAL", desc:"Published investigations become part of the permanent archive. They are updated when new information emerges (court rulings, new documents, additional entities identified) but never deleted." },
 ].map((step) => (
 <div key={step.num} className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <div className="text-blood-600 font-black text-xl">{step.num}</div>
 <div>
 <h3 className="font-bold glass-text mb-1 uppercase tracking-wider">{step.title}</h3>
 <p className="text-zinc-500 text-sm">{step.desc}</p>
 </div>
 </div>
 ))}
 </div>
 </section>

 {/* Entity Tracking */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
 <div className="flex items-center gap-3 mb-4">
 <Users className="w-6 h-6 text-blood-700"/>
 <h2 className="text-xl font-black glass-text uppercase tracking-wider">Entity Tracking System</h2>
 </div>
 <p className="text-zinc-400 leading-relaxed mb-6">
 Every investigation connects to named entities. When you open a file, you see exactly who is involved.
 When you open an entity profile, you see every investigation they appear in. The network becomes visible.
 </p>
 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
 <Link href="/entities/individuals" className="p-5 border border-blood-900/50 bg-blood-950 hover:bg-blood-950 transition-colors group">
 <div className="flex items-center justify-between mb-2">
 <h3 className="text-blood-600 font-bold uppercase tracking-wider">Individuals</h3>
 <span className="text-blood-500 font-mono text-sm font-bold">2,110</span>
 </div>
 <p className="text-zinc-500 text-sm mb-2">Presidents, executives, intelligence directors, judges, lobbyists; the people who made the decisions, signed the orders, and took the money.</p>
 <span className="text-blood-700 text-xs font-medium flex items-center gap-1 group-hover:text-blood-500 transition-colors">
 Browse Individuals <ArrowRight className="w-3 h-3"/>
 </span>
 </Link>
 <Link href="/entities/agencies" className="p-5 border border-blood-900/50 bg-blood-950 hover:bg-blood-950 transition-colors group">
 <div className="flex items-center justify-between mb-2">
 <h3 className="text-blood-600 font-bold uppercase tracking-wider">Government Agencies</h3>
 <span className="text-blood-500 font-mono text-sm font-bold">141</span>
 </div>
 <p className="text-zinc-500 text-sm mb-2">CIA, FBI, NSA, DOJ, EPA, DOD, FCC, SEC, FDA; federal, state, and international agencies with documented involvement in institutional crimes.</p>
 <span className="text-blood-700 text-xs font-medium flex items-center gap-1 group-hover:text-blood-500 transition-colors">
 Browse Agencies <ArrowRight className="w-3 h-3"/>
 </span>
 </Link>
 <Link href="/entities/corporations" className="p-5 border border-blood-900/50 bg-blood-950 hover:bg-blood-950 transition-colors group">
 <div className="flex items-center justify-between mb-2">
 <h3 className="text-blood-600 font-bold uppercase tracking-wider">Corporations</h3>
 <span className="text-blood-500 font-mono text-sm font-bold">209</span>
 </div>
 <p className="text-zinc-500 text-sm mb-2">Defense contractors, pharmaceutical giants, Wall Street banks, Big Tech, fossil fuel companies, media conglomerates; profiting from the systems they corrupt.</p>
 <span className="text-blood-700 text-xs font-medium flex items-center gap-1 group-hover:text-blood-500 transition-colors">
 Browse Corporations <ArrowRight className="w-3 h-3"/>
 </span>
 </Link>
 <Link href="/entities/organizations" className="p-5 border border-blood-900/50 bg-blood-950 hover:bg-blood-950 transition-colors group">
 <div className="flex items-center justify-between mb-2">
 <h3 className="text-blood-600 font-bold uppercase tracking-wider">Organizations</h3>
 <span className="text-blood-500 font-mono text-sm font-bold">155</span>
 </div>
 <p className="text-zinc-500 text-sm mb-2">Think tanks, PACs, lobbying groups, extremist networks, NGOs, and international organizations connected to documented investigations.</p>
 <span className="text-blood-700 text-xs font-medium flex items-center gap-1 group-hover:text-blood-500 transition-colors">
 Browse Organizations <ArrowRight className="w-3 h-3"/>
 </span>
 </Link>
 </div>
 </section>

 {/* Principles */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-8 mb-6">
 <div className="flex items-center gap-3 mb-6">
 <Scale className="w-6 h-6 text-blood-700"/>
 <h2 className="text-xl font-black glass-text uppercase tracking-wider">Editorial Principles</h2>
 </div>
 <div className="space-y-4">
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <Shield className="w-5 h-5 text-blood-700 shrink-0 mt-0.5"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Source-Based Documentation</h3>
 <p className="text-zinc-500 text-sm">Every investigation cites its sources: court records, government reports, congressional testimony, FOIA documents, and investigative journalism from established outlets. We link to primary documents whenever possible.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <Globe className="w-5 h-5 text-blood-700 shrink-0 mt-0.5"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Non-Partisan Accountability</h3>
 <p className="text-zinc-500 text-sm">Corruption has no political party. The archive documents crimes regardless of who committed them: Democrat, Republican, foreign government, multinational corporation. Power is the common denominator.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <AlertTriangle className="w-5 h-5 text-blood-700 shrink-0 mt-0.5"/>
 <div>
 <h3 className="font-bold glass-text mb-1">Living Documents</h3>
 <p className="text-zinc-500 text-sm">Investigations are updated as new information surfaces: new court rulings, declassified documents, whistleblower testimony, or newly identified entities. The archive grows and the picture gets clearer.</p>
 </div>
 </div>
 <div className="flex gap-4 p-4 border border-[rgba(255, 80, 80,0.15)] bg-zinc-900">
 <Zap className="w-5 h-5 text-blood-700 shrink-0 mt-0.5"/>
 <div>
 <h3 className="font-bold glass-text mb-1">No Advertising. No Sponsors. No Compromise.</h3>
 <p className="text-zinc-500 text-sm">ArkHive accepts no advertising revenue, corporate sponsorship, or government funding. An accountability platform funded by the people it investigates is not an accountability platform.</p>
 </div>
 </div>
 </div>
 </section>

 {/* Disclaimer */}
 <section className="border border-[rgba(255, 80, 80,0.15)] bg-[#190800] p-6 mb-6">
 <p className="text-zinc-600 text-xs leading-relaxed">
 <span className="text-zinc-500 font-bold">DISCLAIMER:</span> ArkHive is a documentation and research platform.
 Investigations compile publicly available information from cited sources including government reports,
 court records, investigative journalism, and declassified documents. Inclusion of any entity does not
 constitute an accusation of criminal conduct unless specifically documented through legal proceedings.
 Severity ratings reflect the assessed impact of documented events, not legal determinations. All persons
 are presumed innocent until proven guilty in a court of law.
 </p>
 </section>

 {/* CTA */}
 <section className="border-2 border-blood-800/60 bg-[#190800] p-8 text-center">
 <div className="w-12 h-12 border-2 border-blood-800 flex items-center justify-center mx-auto mb-4">
 <Lock className="w-6 h-6 text-blood-700"/>
 </div>
 <h2 className="text-2xl font-black glass-text uppercase tracking-wider mb-4">
 Help Build The Archive
 </h2>
 <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
 Have documents, leads, or information that should be in the archive?
 Court records we missed? Entities we haven&apos;t connected? Submit it.
 </p>
 <Link
 href="/submit"
 className="inline-flex items-center gap-2 px-8 py-4 border-2 border-blood-700 bg-transparent text-blood-600 font-bold uppercase tracking-wider hover:bg-blood-950 transition-all"
 >
 Submit Information
 <ArrowRight className="w-5 h-5"/>
 </Link>
 </section>
 </div>
 </div>
 );
}
