'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Scale, Shield, Eye, Megaphone, Landmark, Users,
  FileText, ExternalLink, ChevronDown, ChevronUp,
  AlertTriangle, Phone, Gavel,
  Lock, BookOpen, ArrowRight, Search,
  ClipboardList, Building2,
  Briefcase, Target, CheckCircle2, Globe,
} from 'lucide-react';
import CrystalButton from '@/components/ui/CrystalButton';

/* ================================================================
   TYPES
   ================================================================ */

interface ActionStep {
  title: string;
  description: string;
  tools: { label: string; href: string; external?: boolean }[];
}

interface ActionRole {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
  steps: ActionStep[];
  resources: { title: string; url: string; type: string }[];
  legalProtections?: string[];
}

/* ================================================================
   ROLE DEFINITIONS
   ================================================================ */

const roles: ActionRole[] = [
  {
    id: 'citizens',
    title: 'Citizens & Activists',
    subtitle: 'You have more power than you think',
    icon: Users,
    color: 'text-blue-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-900/40',
    description: 'As a citizen, your voice and your vote are the foundation of accountability. Every investigation on ArkHive includes documented evidence, named defendants, and specific statute violations that you can bring directly to your elected representatives, local media, and public hearings.',
    steps: [
      {
        title: 'Research the Investigation',
        description: 'Start by reading the full investigation page. Each one documents who did what, when they did it, what laws were broken, and who is still unaccountable. Focus on the defendants section and the accountability engine.',
        tools: [
          { label: 'Browse All Investigations', href: '/investigations' },
          { label: 'Search by Category', href: '/categories' },
          { label: 'View the Timeline', href: '/timeline' },
        ],
      },
      {
        title: 'Contact Your Representatives',
        description: 'Write, call, or visit your local, state, and federal representatives. Reference the specific investigation, the statutes violated, and the named defendants. Demand hearings, subpoenas, and legislative action. Congress.gov lets you find every representative by zip code.',
        tools: [
          { label: 'Find Your Representative', href: 'https://www.congress.gov/members/find-your-member', external: true },
          { label: 'View Documented Statutes', href: '/statutes' },
        ],
      },
      {
        title: 'File a FOIA Request',
        description: 'The Freedom of Information Act gives every citizen the right to request government records. Target agencies involved in the investigations you care about. ArkHive documents which agencies are involved in each case.',
        tools: [
          { label: 'FOIA Request Portal', href: 'https://www.foia.gov/', external: true },
          { label: 'View Source Documents', href: '/documents' },
        ],
      },
      {
        title: 'Share the Evidence',
        description: 'Download investigation PDF dossiers and share them on social media, at town halls, and with journalists. Each dossier contains the complete evidence file including defendants, money trails, and violated statutes. You can also generate accountability templates directly from any investigation page.',
        tools: [
          { label: 'Browse Investigations', href: '/investigations' },
          { label: 'Submit New Evidence', href: '/submit' },
        ],
      },
      {
        title: 'Attend Public Hearings',
        description: 'Congressional hearings, town halls, and city council meetings are public forums where you can raise documented concerns on the record. Bring printed dossiers. Ask specific questions about specific defendants.',
        tools: [
          { label: 'Congressional Hearing Schedule', href: 'https://www.congress.gov/committee-schedule', external: true },
        ],
      },
    ],
    resources: [
      { title: 'FOIA Request Portal', url: 'https://www.foia.gov/', type: 'Government' },
      { title: 'Congress.gov: Find Your Representative', url: 'https://www.congress.gov/members/find-your-member', type: 'Government' },
      { title: 'OpenSecrets: Money in Politics', url: 'https://www.opensecrets.org/', type: 'Research' },
      { title: 'GovTrack: Congressional Voting Records', url: 'https://www.govtrack.us/', type: 'Research' },
      { title: 'ACLU: Know Your Rights', url: 'https://www.aclu.org/know-your-rights', type: 'Legal Guide' },
    ],
  },
  {
    id: 'whistleblowers',
    title: 'Whistleblowers',
    subtitle: 'Protected channels for reporting wrongdoing',
    icon: Eye,
    color: 'text-amber-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-900/40',
    description: 'If you have inside knowledge of government or corporate wrongdoing, federal and state laws protect you. Multiple federal statutes guarantee financial rewards and retaliation protections. Follow these steps in order to protect yourself and maximize the impact of your disclosure.',
    steps: [
      {
        title: 'Document Everything Securely',
        description: 'Before disclosing anything, create timestamped copies of all evidence. Use encrypted storage like VeraCrypt or an encrypted USB drive. Never use work devices, work email, or work networks. Photograph physical documents rather than copying them digitally when possible. Create detailed notes of what you witnessed, including dates, names, and locations.',
        tools: [
          { label: 'VeraCrypt (Encryption)', href: 'https://www.veracrypt.fr/', external: true },
          { label: 'Signal (Encrypted Messaging)', href: 'https://signal.org/', external: true },
        ],
      },
      {
        title: 'Consult a Whistleblower Attorney',
        description: 'Before making any disclosure, consult a lawyer who specializes in whistleblower cases. The Government Accountability Project and National Whistleblower Center provide free legal consultations. An attorney can advise on which protections apply to your specific situation and which disclosure channels will best protect you.',
        tools: [
          { label: 'Government Accountability Project', href: 'https://whistleblower.org/', external: true },
          { label: 'National Whistleblower Center', href: 'https://www.whistleblowers.org/', external: true },
        ],
      },
      {
        title: 'Choose Your Disclosure Channel',
        description: 'The right channel depends on your situation. For government misconduct, file with the appropriate Inspector General. For financial crimes, the SEC and CFTC whistleblower programs offer financial rewards of 10 to 30 percent of sanctions over one million dollars. For intelligence community matters, use the Intelligence Community Whistleblower Protection Act channels.',
        tools: [
          { label: 'Inspector General Network', href: 'https://www.ignet.gov/', external: true },
          { label: 'SEC Whistleblower Program', href: 'https://www.sec.gov/whistleblower', external: true },
          { label: 'CFTC Whistleblower Program', href: 'https://www.whistleblower.gov/', external: true },
        ],
      },
      {
        title: 'Contact Investigative Journalists',
        description: 'If official channels fail or if you fear retaliation through government reporting systems, SecureDrop allows anonymous encrypted communication with major newsrooms including The Intercept, Washington Post, and New York Times. Journalists can amplify your disclosure and provide public accountability pressure.',
        tools: [
          { label: 'SecureDrop Directory', href: 'https://securedrop.org/directory', external: true },
          { label: 'Submit Evidence to ArkHive', href: '/submit' },
        ],
      },
    ],
    resources: [
      { title: 'Government Accountability Project', url: 'https://whistleblower.org/', type: 'Legal Aid' },
      { title: 'National Whistleblower Center', url: 'https://www.whistleblowers.org/', type: 'Legal Aid' },
      { title: 'SEC Whistleblower Program', url: 'https://www.sec.gov/whistleblower', type: 'Government' },
      { title: 'SecureDrop Directory', url: 'https://securedrop.org/directory', type: 'Security' },
      { title: 'Inspector General Network', url: 'https://www.ignet.gov/', type: 'Government' },
    ],
    legalProtections: [
      'Whistleblower Protection Act (5 U.S.C. § 2302): Protects federal employees from retaliation for reporting waste, fraud, or abuse.',
      'Dodd-Frank Act § 922: SEC whistleblower rewards of 10 to 30 percent of sanctions over $1 million, plus anti-retaliation provisions.',
      'False Claims Act qui tam provisions (31 U.S.C. § 3730): Allows private citizens to sue on behalf of the government and receive 15 to 30 percent of recovered funds.',
      'Sarbanes-Oxley Act § 806: Protects employees of publicly traded companies who report securities fraud.',
      'Intelligence Community Whistleblower Protection Act: Protected channels for reporting classified misconduct.',
      'National Defense Authorization Act: Protects military contractor whistleblowers from retaliation.',
    ],
  },
  {
    id: 'lawyers',
    title: 'Lawyers & Legal Professionals',
    subtitle: 'Pursue accountability through the courts',
    icon: Scale,
    color: 'text-emerald-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-900/40',
    description: 'Every ArkHive investigation documents specific federal statute violations, named defendants with their current legal status, financial trails with amounts and dates, and comprehensive evidence sourcing. This data is designed to serve as a starting point for litigation, regulatory complaints, amicus briefs, and FOIA lawsuits.',
    steps: [
      {
        title: 'Identify Statute Violations and Defendants',
        description: 'The statutes page compiles every federal law cited across all investigations. Each investigation page lists the specific statutes violated and every defendant along with their charges, conviction status, and current legal standing. Start here to identify viable legal theories.',
        tools: [
          { label: 'Browse All Statutes', href: '/statutes' },
          { label: 'View Convictions Database', href: '/convictions' },
          { label: 'Browse Investigations', href: '/investigations' },
        ],
      },
      {
        title: 'Generate Legal Templates',
        description: 'Every investigation with an accountability file includes an Accountability Engine that generates pre-drafted legal demand templates, Inspector General complaint letters, FOIA requests, and regulatory filings. These templates cite the relevant statutes, defendants, and evidence sources for that specific investigation.',
        tools: [
          { label: 'Browse Investigations', href: '/investigations' },
        ],
      },
      {
        title: 'File Regulatory Complaints',
        description: 'Use the documented evidence to file complaints with relevant regulatory agencies. For financial crimes, file with the SEC, CFTC, or OCC. For environmental violations, file with the EPA. For civil rights violations, file with the DOJ Civil Rights Division. Each investigation identifies the responsible agencies.',
        tools: [
          { label: 'SEC Tips and Complaints', href: 'https://www.sec.gov/tcr', external: true },
          { label: 'EPA Enforcement Complaints', href: 'https://www.epa.gov/enforcement/report-environmental-violations', external: true },
          { label: 'DOJ Civil Rights Division', href: 'https://civilrights.justice.gov/report/', external: true },
        ],
      },
      {
        title: 'Initiate FOIA Litigation',
        description: 'When agencies fail to respond to FOIA requests within statutory deadlines of 20 business days, you can file suit in federal district court under 5 U.S.C. § 552. The Reporters Committee for Freedom of the Press provides a comprehensive FOIA litigation guide. ArkHive investigations document which agencies hold relevant records.',
        tools: [
          { label: 'RCFP FOIA Litigation Guide', href: 'https://www.rcfp.org/open-government-guide/', external: true },
          { label: 'PACER (Court Records)', href: 'https://www.pacer.gov/', external: true },
        ],
      },
      {
        title: 'Pursue Class Action or Impact Litigation',
        description: 'Many documented investigations involve harm to large populations, making them candidates for class action litigation. Environmental contamination cases, financial fraud schemes, civil rights violations, and consumer protection failures often support class certification. The money trail and defendant data provides the financial evidence foundation.',
        tools: [
          { label: 'Trace the Money Trail', href: '/money-trail' },
          { label: 'Map Entity Connections', href: '/network' },
        ],
      },
    ],
    resources: [
      { title: 'PACER: Federal Court Records', url: 'https://www.pacer.gov/', type: 'Government' },
      { title: 'Reporters Committee FOIA Guide', url: 'https://www.rcfp.org/open-government-guide/', type: 'Legal Guide' },
      { title: 'Cornell Legal Information Institute', url: 'https://www.law.cornell.edu/', type: 'Legal Reference' },
      { title: 'DOJ Office of Professional Responsibility', url: 'https://www.justice.gov/opr', type: 'Government' },
      { title: 'SEC EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar', type: 'Government' },
    ],
    legalProtections: [
      '28 U.S.C. § 1331: Federal question jurisdiction for constitutional and statutory violations.',
      'Fed. R. Civ. P. 23: Class action certification for claims common to large groups of affected parties.',
      '5 U.S.C. § 552: FOIA litigation when agencies fail to produce records within statutory deadlines.',
      '42 U.S.C. § 1983: Civil action for deprivation of rights under color of state law.',
      '28 C.F.R. Part 77: Procedures for reporting attorney misconduct to the DOJ Office of Professional Responsibility.',
    ],
  },
  {
    id: 'journalists',
    title: 'Journalists & Researchers',
    subtitle: 'Investigate, verify, and amplify',
    icon: Megaphone,
    color: 'text-purple-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-900/40',
    description: 'ArkHive investigations serve as deeply sourced leads for independent reporting. Every entry includes primary sources, document references, timelines with specific dates, financial flows with dollar amounts, and named figures ready for verification and expansion. Use this data as a foundation for your own investigative work.',
    steps: [
      {
        title: 'Identify Your Lead',
        description: 'Search investigations by category, by named entity, by timeline period, or by geographic region. The network page maps connections between people, agencies, and corporations across multiple investigations, revealing patterns that may not be visible in any single case.',
        tools: [
          { label: 'Browse Investigations', href: '/investigations' },
          { label: 'Map Entity Networks', href: '/network' },
          { label: 'Search the Archive', href: '/search' },
          { label: 'Browse by Category', href: '/categories' },
        ],
      },
      {
        title: 'Verify Primary Sources',
        description: 'Every investigation includes primary source citations. Independently verify these sources through PACER (court records), EDGAR (SEC filings), the Federal Register, and government archives. Cross-reference with additional public records, corporate filings, and congressional testimony.',
        tools: [
          { label: 'View All Sources', href: '/sources' },
          { label: 'Browse Documents', href: '/documents' },
        ],
      },
      {
        title: 'Follow the Money',
        description: 'The money trail page aggregates financial data across all investigations, tracking funds from origin through intermediaries to final destinations. Cross-reference with OpenSecrets for political donations, SEC filings for corporate disclosures, and FEC records for campaign finance to build the complete financial picture.',
        tools: [
          { label: 'Follow the Money Trail', href: '/money-trail' },
          { label: 'OpenSecrets', href: 'https://www.opensecrets.org/', external: true },
          { label: 'SEC EDGAR', href: 'https://www.sec.gov/cgi-bin/browse-edgar', external: true },
        ],
      },
      {
        title: 'File Targeted FOIA Requests',
        description: 'Use documented timelines and named officials to craft precise FOIA requests. Batch requests across multiple agencies often reveal inter-agency coordination or cover-ups. The investigation timelines identify exactly which agencies were involved and when.',
        tools: [
          { label: 'FOIA.gov Portal', href: 'https://www.foia.gov/', external: true },
          { label: 'MuckRock (FOIA Filing Tool)', href: 'https://www.muckrock.com/', external: true },
        ],
      },
      {
        title: 'Submit Your Findings',
        description: 'If your reporting uncovers new evidence, new defendants, or corrections to existing documentation, submit it through our evidence system. ArkHive is a living database that grows stronger with every contribution.',
        tools: [
          { label: 'Submit Evidence', href: '/submit' },
          { label: 'Contact the Team', href: '/contact' },
        ],
      },
    ],
    resources: [
      { title: 'DocumentCloud', url: 'https://www.documentcloud.org/', type: 'Research Tool' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org/', type: 'Database' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', type: 'Database' },
      { title: 'MuckRock (FOIA Platform)', url: 'https://www.muckrock.com/', type: 'Research Tool' },
      { title: 'SEC EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar', type: 'Government' },
    ],
  },
  {
    id: 'law-enforcement',
    title: 'Law Enforcement & Military',
    subtitle: 'Duty, honor, and the law apply to everyone',
    icon: Shield,
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-900/40',
    description: 'Active and retired law enforcement, military, and intelligence professionals who witness misconduct have both a legal duty and legal protection to report it. ArkHive investigations document specific statute violations and name specific officials, providing the evidentiary foundation for internal referrals, IG complaints, and congressional disclosures.',
    steps: [
      {
        title: 'Review Documented Violations',
        description: 'Multiple investigations document misconduct by law enforcement agencies, military branches, and intelligence services. Review the specific statute violations, named officials, and evidence chains to determine whether your knowledge corroborates or extends existing documentation.',
        tools: [
          { label: 'Browse Investigations', href: '/investigations' },
          { label: 'View All Statutes', href: '/statutes' },
          { label: 'Convictions Database', href: '/convictions' },
        ],
      },
      {
        title: 'Report to the Inspector General',
        description: 'Every federal agency and military branch has an Inspector General office. IG complaints are legally protected disclosures under the Inspector General Act and the Whistleblower Protection Act. For military matters, the DoD IG handles fraud, waste, abuse, and misconduct.',
        tools: [
          { label: 'DoD Inspector General', href: 'https://www.dodig.mil/', external: true },
          { label: 'Inspector General Network', href: 'https://www.ignet.gov/', external: true },
        ],
      },
      {
        title: 'Refer to FBI Public Corruption Unit',
        description: 'The FBI Public Corruption Unit investigates fraud, bribery, extortion, and civil rights violations by government officials at all levels. File detailed referrals that cite specific statute violations, specific officials, and specific evidence documented in ArkHive investigations.',
        tools: [
          { label: 'FBI Tips Portal', href: 'https://tips.fbi.gov/', external: true },
        ],
      },
      {
        title: 'Disclose to Congressional Intelligence Committees',
        description: 'For classified misconduct, the Intelligence Community Whistleblower Protection Act provides protected channels for disclosure to the Senate Select Committee on Intelligence and the House Permanent Select Committee on Intelligence. You do not need permission from your chain of command to make these disclosures.',
        tools: [
          { label: 'Senate Intelligence Committee', href: 'https://www.intelligence.senate.gov/', external: true },
          { label: 'House Intelligence Committee', href: 'https://intelligence.house.gov/', external: true },
        ],
      },
      {
        title: 'Preserve the Chain of Evidence',
        description: 'If you possess evidence of misconduct, document the chain of custody immediately. Use proper evidence handling procedures. Consult legal counsel about classification issues before making any disclosure. If evidence is at risk of destruction, the urgency of preservation may require immediate action through protected channels.',
        tools: [
          { label: 'Military Whistleblower Protection Guide', href: 'https://www.law.cornell.edu/uscode/text/10/1034', external: true },
        ],
      },
    ],
    resources: [
      { title: 'DoD Inspector General', url: 'https://www.dodig.mil/', type: 'Government' },
      { title: 'FBI Tips Portal', url: 'https://tips.fbi.gov/', type: 'Government' },
      { title: 'Military Whistleblower Protection (10 U.S.C. § 1034)', url: 'https://www.law.cornell.edu/uscode/text/10/1034', type: 'Legal Reference' },
      { title: 'GAO Reports Database', url: 'https://www.gao.gov/reports-testimonies', type: 'Government' },
    ],
    legalProtections: [
      '10 U.S.C. § 1034: Protects members of the Armed Forces from reprisal for reporting violations of law or regulation.',
      'Intelligence Community Whistleblower Protection Act (50 U.S.C. § 3033): Protected disclosure channels for intelligence community personnel.',
      'Inspector General Act of 1978 (5 U.S.C. App.): IG complaints are legally protected disclosures.',
      'Whistleblower Protection Act (5 U.S.C. § 2302): Covers federal civilian employees across all agencies.',
      'Military Justice Improvement Act: Additional protections for reporting military justice system failures.',
    ],
  },
  {
    id: 'legislators',
    title: 'Legislators & Government Officials',
    subtitle: 'You have subpoena power. Use it.',
    icon: Landmark,
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-900/40',
    description: 'Elected officials and government staff have constitutional authority to investigate, subpoena, legislate, and hold the executive branch accountable. ArkHive investigations document specific policy failures, specific officials, and specific statutory gaps that can be addressed through oversight hearings, legislative reform, and investigative subpoenas.',
    steps: [
      {
        title: 'Review Documented Investigations',
        description: 'Begin with the investigations most relevant to your committee jurisdiction. Each investigation includes a complete timeline, named officials, violated statutes, and documented policy failures that identify specific gaps in oversight and enforcement.',
        tools: [
          { label: 'Browse Investigations', href: '/investigations' },
          { label: 'Browse by Theme', href: '/themes' },
          { label: 'View All Statutes', href: '/statutes' },
        ],
      },
      {
        title: 'Convene Oversight Hearings',
        description: 'ArkHive investigations provide ready-made foundations for oversight hearings. The timelines identify key dates, the defendants section identifies witnesses to subpoena, and the evidence trail identifies documents to demand. Every investigation names the specific agencies and officials responsible.',
        tools: [
          { label: 'Congressional Schedule', href: 'https://www.congress.gov/committee-schedule', external: true },
          { label: 'Browse Investigations', href: '/investigations' },
        ],
      },
      {
        title: 'Draft Reform Legislation',
        description: 'Many investigations reveal systemic gaps in oversight, enforcement, and transparency. Use the documented statute violations to identify where existing law failed, and draft targeted reforms. The statutes page shows every federal law cited across all investigations and where enforcement has broken down.',
        tools: [
          { label: 'View Statute Landscape', href: '/statutes' },
          { label: 'Congressional Research Service', href: 'https://crsreports.congress.gov/', external: true },
        ],
      },
      {
        title: 'Request GAO Investigations',
        description: 'Request the Government Accountability Office to investigate specific agencies and programs documented in ArkHive investigations. GAO reports carry significant bipartisan weight and provide independent verification of documented misconduct.',
        tools: [
          { label: 'GAO Reports Database', href: 'https://www.gao.gov/', external: true },
        ],
      },
      {
        title: 'Strengthen Whistleblower Protections',
        description: 'Many documented cover-ups succeeded because whistleblowers lacked adequate protection. Push for expanded protections, particularly for national security and intelligence community personnel. The whistleblower section above documents the current gaps in protection.',
        tools: [
          { label: 'Federal Register', href: 'https://www.federalregister.gov/', external: true },
        ],
      },
    ],
    resources: [
      { title: 'Congressional Research Service', url: 'https://crsreports.congress.gov/', type: 'Government' },
      { title: 'Government Accountability Office', url: 'https://www.gao.gov/', type: 'Government' },
      { title: 'Congress.gov: Legislation Tracker', url: 'https://www.congress.gov/', type: 'Government' },
      { title: 'Federal Register', url: 'https://www.federalregister.gov/', type: 'Government' },
    ],
  },
];

/* ================================================================
   ROLE CARD COMPONENT
   ================================================================ */

function RoleCard({ role }: { role: ActionRole }) {
  const [expanded, setExpanded] = useState(false);
  const Icon = role.icon;

  return (
    <div className={`border ${role.borderColor} bg-[#080808] transition-all duration-300 hover:border-zinc-600 rounded-xl`}>
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 lg:p-8 flex items-start gap-4 text-left"
        aria-expanded={expanded}
        aria-label={`${role.title}: ${expanded ? 'collapse' : 'expand'} actions`}
      >
        <div className={`p-3 border border-zinc-800 bg-zinc-900/50 ${role.color} rounded-lg`}>
          <Icon className="w-6 h-6" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-zinc-100 tracking-wide">{role.title}</h3>
          <p className="text-sm text-zinc-500 mt-1">{role.subtitle}</p>
          <p className="text-zinc-400 mt-3 text-sm leading-relaxed">{role.description}</p>
        </div>
        <div className="text-zinc-600 mt-1 flex-shrink-0">
          {expanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
        </div>
      </button>

      {expanded && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-zinc-800/50">
          <div className="mt-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2">
              <ClipboardList className="w-4 h-4" />
              Step-by-Step Actions
            </h4>
            <div className="space-y-4">
              {role.steps.map((step, i) => (
                <div key={i} className="border border-zinc-800/40 bg-zinc-900/30 p-5 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className={`w-7 h-7 flex items-center justify-center border border-zinc-700 ${role.bgColor} text-xs font-mono ${role.color} rounded-full flex-shrink-0 mt-0.5`}>
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <h5 className="text-zinc-200 font-semibold text-sm">{step.title}</h5>
                      <p className="text-zinc-500 text-sm mt-1.5 leading-relaxed">{step.description}</p>
                      {step.tools.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {step.tools.map((tool, j) => (
                            <Link
                              key={j}
                              href={tool.href}
                              target={tool.external ? '_blank' : undefined}
                              rel={tool.external ? 'noopener noreferrer' : undefined}
                              className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 border border-zinc-700/50 bg-zinc-800/30 ${role.color} hover:bg-zinc-800/60 transition-colors rounded-md`}
                            >
                              {tool.external ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                              {tool.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {role.legalProtections && role.legalProtections.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Lock className="w-3.5 h-3.5" />
                Legal Protections
              </h4>
              <div className="border border-zinc-800/40 bg-zinc-900/30 p-4 rounded-lg">
                <ul className="space-y-3">
                  {role.legalProtections.map((statute, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <Gavel className="w-3 h-3 text-zinc-600 mt-1 flex-shrink-0" />
                      <span className="text-zinc-400">{statute}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <div className="mt-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5" />
              Key Resources
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {role.resources.map((resource, i) => (
                <a
                  key={i}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 border border-zinc-800/40 bg-zinc-900/20 p-3 hover:bg-zinc-800/40 transition-colors rounded-lg"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-zinc-600 flex-shrink-0" />
                  <div className="min-w-0">
                    <div className="text-sm text-zinc-300 truncate">{resource.title}</div>
                    <div className="text-xs text-zinc-600">{resource.type}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================
   QUICK ACCESS TOOLS
   ================================================================ */

function QuickAccessTools() {
  const tools = [
    { icon: Search, label: 'Search Investigations', href: '/search', desc: 'Find any investigation, person, or entity' },
    { icon: FileText, label: 'Download PDF Dossiers', href: '/investigations', desc: 'Generate evidence dossiers from any investigation' },
    { icon: Target, label: 'Accountability Engine', href: '/investigations', desc: 'Generate legal templates from investigation data' },
    { icon: Globe, label: 'Entity Network Map', href: '/network', desc: 'Visualize connections between people and organizations' },
    { icon: Briefcase, label: 'Money Trail', href: '/money-trail', desc: 'Follow the financial flows across all investigations' },
    { icon: Building2, label: 'Statutes Database', href: '/statutes', desc: 'Every federal law cited across all investigations' },
  ];

  return (
    <div className="border border-zinc-800/60 bg-[#080808] p-6 lg:p-8 mb-8 rounded-xl">
      <h2 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4 flex items-center gap-2">
        <CheckCircle2 className="w-4 h-4 text-blood-500" />
        Quick Access Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {tools.map((tool, i) => {
          const Icon = tool.icon;
          return (
            <Link
              key={i}
              href={tool.href}
              className="flex items-start gap-3 border border-zinc-800/40 bg-zinc-900/20 p-4 hover:bg-zinc-800/40 hover:border-zinc-700 transition-colors rounded-lg group"
            >
              <Icon className="w-4 h-4 text-zinc-500 group-hover:text-blood-400 transition-colors mt-0.5 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-sm text-zinc-300 font-medium">{tool.label}</div>
                <div className="text-xs text-zinc-600 mt-0.5">{tool.desc}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

/* ================================================================
   MAIN PAGE
   ================================================================ */

export default function TakeActionPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-2 border-zinc-800/60 bg-[#080808] p-8 lg:p-12 mb-8 rounded-xl">
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Accountability Actions</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-zinc-100 glass-text uppercase tracking-wider">
            Take Action
          </h1>
          <p className="text-zinc-400 mt-4 leading-relaxed max-w-2xl">
            Knowledge without action is complicity. Every investigation documented on ArkHive includes
            evidence, statute violations, and named defendants. Below are role-specific guides with
            step-by-step instructions, direct links to tools, and external resources for turning
            documented wrongdoing into real accountability.
          </p>
          <div className="flex flex-wrap gap-3 mt-6">
            {roles.map(role => {
              const Icon = role.icon;
              return (
                <a
                  key={role.id}
                  href={`#${role.id}`}
                  className={`inline-flex items-center gap-2 px-3 py-1.5 border border-zinc-800 bg-zinc-900/50 text-xs ${role.color} hover:bg-zinc-800/50 transition-colors rounded-lg`}
                >
                  <Icon className="w-3 h-3" />
                  {role.title}
                </a>
              );
            })}
          </div>
        </div>

        <div className="border border-red-900/40 bg-red-950/10 p-6 mb-8 rounded-xl">
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-red-300 uppercase tracking-wider">Immediate Danger?</h3>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                If you are in immediate danger as a whistleblower or witness, contact the{' '}
                <a href="https://whistleblower.org/urgent-help/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline">
                  Government Accountability Project emergency line
                </a>{' '}
                or call 911. If you fear government surveillance, use a clean device on a public network.
              </p>
            </div>
          </div>
        </div>

        <QuickAccessTools />

        <div className="space-y-4">
          {roles.map(role => (
            <div key={role.id} id={role.id}>
              <RoleCard role={role} />
            </div>
          ))}
        </div>

        <div className="border border-zinc-800/60 bg-[#080808] p-8 mt-8 text-center rounded-xl">
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wider mb-3">
            Ready to Act?
          </h3>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto mb-6">
            Every investigation on ArkHive includes an Accountability Engine with pre-drafted
            templates, sourced evidence, and step-by-step workflows for every role.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CrystalButton href="/investigations" variant="primary">
              Browse Investigations
            </CrystalButton>
            <CrystalButton href="/submit" variant="secondary">
              Submit Evidence
            </CrystalButton>
          </div>
        </div>
      </div>
    </div>
  );
}
