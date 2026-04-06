'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Scale, Shield, Eye, Megaphone, Landmark, Users,
  FileText, ExternalLink, ChevronDown, ChevronUp,
  AlertTriangle, Download, Phone, Globe, Gavel,
  Lock, BookOpen, ArrowRight,
} from 'lucide-react';
import CrystalButton from '@/components/ui/CrystalButton';

/* ================================================================
   ROLE DEFINITIONS
   ================================================================ */

interface ActionRole {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  description: string;
  actions: {
    title: string;
    description: string;
    link?: string;
    external?: boolean;
  }[];
  resources: {
    title: string;
    url: string;
    type: string;
  }[];
  legalProtections?: string[];
}

const roles: ActionRole[] = [
  {
    id: 'citizens',
    title: 'Citizens & Activists',
    subtitle: 'Demand accountability from your representatives',
    icon: Users,
    color: 'text-blue-400',
    borderColor: 'border-blue-900/40',
    description: 'As a citizen, you have the power to demand transparency and accountability. Contact your representatives, file FOIA requests, attend public hearings, and spread documented facts.',
    actions: [
      {
        title: 'Contact Your Representatives',
        description: 'Write, call, or visit your local, state, and federal representatives. Reference specific investigations and demand action. Use our investigation templates to generate pre-drafted letters.',
        link: '/investigations',
      },
      {
        title: 'File FOIA Requests',
        description: 'The Freedom of Information Act gives you the right to request government records. Target agencies involved in documented investigations. FOIA.gov provides the request portal.',
        link: 'https://www.foia.gov/',
        external: true,
      },
      {
        title: 'Attend Public Hearings',
        description: 'Congressional hearings, town halls, and city council meetings are public forums where you can raise documented concerns and demand answers on the record.',
      },
      {
        title: 'Share Documented Evidence',
        description: 'Use our Accountability Engine templates to generate social media posts, press tips, and legal demands backed by sourced evidence. Every investigation includes shareable templates.',
        link: '/investigations',
      },
      {
        title: 'Support Investigative Organizations',
        description: 'Donate to and amplify the work of ProPublica, The Intercept, ACLU, EFF, and other organizations that conduct the investigations documented here.',
      },
    ],
    resources: [
      { title: 'FOIA Request Portal', url: 'https://www.foia.gov/', type: 'Government' },
      { title: 'Congress.gov - Find Your Representative', url: 'https://www.congress.gov/members/find-your-member', type: 'Government' },
      { title: 'OpenSecrets - Money in Politics', url: 'https://www.opensecrets.org/', type: 'Research' },
      { title: 'GovTrack - Congressional Voting Records', url: 'https://www.govtrack.us/', type: 'Research' },
    ],
  },
  {
    id: 'whistleblowers',
    title: 'Whistleblowers',
    subtitle: 'Protected channels for reporting wrongdoing',
    icon: Eye,
    color: 'text-amber-400',
    borderColor: 'border-amber-900/40',
    description: 'If you have inside knowledge of government or corporate wrongdoing, federal and state laws protect you. Use secure channels, document everything, and consult legal counsel before disclosing.',
    actions: [
      {
        title: 'Document Everything Securely',
        description: 'Before disclosing, create timestamped copies of evidence. Use encrypted storage (VeraCrypt, encrypted USB). Never use work devices or networks. Photograph documents rather than copying digitally when possible.',
      },
      {
        title: 'Consult a Whistleblower Attorney',
        description: 'Organizations like the Government Accountability Project and National Whistleblower Center provide free legal consultations. An attorney can advise on which protections apply to your situation.',
      },
      {
        title: 'File with the Inspector General',
        description: 'Each federal agency has an Inspector General who investigates fraud, waste, and abuse. IG complaints are legally protected disclosures under the Whistleblower Protection Act.',
        link: 'https://www.ignet.gov/',
        external: true,
      },
      {
        title: 'Report to the SEC or CFTC',
        description: 'For financial crimes and securities fraud, the SEC and CFTC whistleblower programs offer financial rewards of 10-30% of sanctions over $1 million and strong retaliation protections.',
        link: 'https://www.sec.gov/whistleblower',
        external: true,
      },
      {
        title: 'Contact Investigative Journalists',
        description: 'SecureDrop allows anonymous, encrypted communication with major newsrooms. The Intercept, Washington Post, and New York Times all operate SecureDrop instances.',
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
      'Whistleblower Protection Act (5 U.S.C. § 2302)',
      'Dodd-Frank Act § 922 (SEC whistleblower rewards)',
      'False Claims Act qui tam provisions (31 U.S.C. § 3730)',
      'Sarbanes-Oxley Act § 806 (corporate fraud whistleblowers)',
      'Intelligence Community Whistleblower Protection Act',
      'National Defense Authorization Act whistleblower provisions',
    ],
  },
  {
    id: 'lawyers',
    title: 'Lawyers & Legal Professionals',
    subtitle: 'Pursue accountability through the courts',
    icon: Scale,
    color: 'text-amber-400',
    borderColor: 'border-amber-900/40',
    description: 'Legal professionals can leverage our documented investigations as starting points for litigation, amicus briefs, FOIA lawsuits, and regulatory complaints. Every investigation includes sourced statutes and defendants.',
    actions: [
      {
        title: 'File Regulatory Complaints',
        description: 'Our investigations document specific statute violations. Use the Accountability Engine to generate legal demand templates citing relevant federal statutes, defendants, and evidence sources.',
        link: '/investigations',
      },
      {
        title: 'Initiate FOIA Litigation',
        description: 'When agencies fail to respond to FOIA requests within statutory deadlines, file suit in federal district court. Organizations like the Reporters Committee for Freedom of the Press provide FOIA litigation guides.',
      },
      {
        title: 'Pursue Class Action Litigation',
        description: 'Many documented investigations involve harm to large groups. Environmental contamination, financial fraud, and civil rights violations often support class action claims.',
      },
      {
        title: 'File Amicus Briefs',
        description: 'In cases involving documented government misconduct, file amicus briefs presenting the broader context of institutional failures documented across our investigations.',
      },
      {
        title: 'Report Attorney Misconduct',
        description: 'When investigations reveal attorneys who participated in wrongdoing, file complaints with state bar associations and the DOJ Office of Professional Responsibility.',
      },
    ],
    resources: [
      { title: 'PACER - Court Records', url: 'https://www.pacer.gov/', type: 'Government' },
      { title: 'Reporters Committee FOIA Guide', url: 'https://www.rcfp.org/open-government-guide/', type: 'Legal Guide' },
      { title: 'Cornell Law Institute', url: 'https://www.law.cornell.edu/', type: 'Legal Reference' },
      { title: 'DOJ Office of Professional Responsibility', url: 'https://www.justice.gov/opr', type: 'Government' },
    ],
  },
  {
    id: 'journalists',
    title: 'Journalists & Researchers',
    subtitle: 'Investigate and amplify documented wrongdoing',
    icon: Megaphone,
    color: 'text-purple-400',
    borderColor: 'border-purple-900/40',
    description: 'Journalists can use our investigations as leads for deeper reporting. Every entry includes sourced documents, timelines, key figures, and financial trails ready for verification and expansion.',
    actions: [
      {
        title: 'FOIA Batch Requests',
        description: 'Use documented investigation timelines and key figures to craft targeted FOIA requests. Batch requests across multiple agencies often reveal inter-agency coordination or cover-ups.',
        link: 'https://www.foia.gov/',
        external: true,
      },
      {
        title: 'Cross-Reference Investigations',
        description: 'Our Network page maps connections between entities across investigations. Use the affiliation graph to identify patterns of coordination between individuals, agencies, and corporations.',
        link: '/network',
      },
      {
        title: 'Source Verification',
        description: 'Every investigation includes primary sources. Independently verify these sources and build upon them with additional public records, court documents, and government databases.',
      },
      {
        title: 'Financial Trail Analysis',
        description: 'Many investigations include money trail data. Cross-reference with OpenSecrets, SEC filings, and FEC records to trace financial connections between documented actors.',
        link: '/money-trail',
      },
      {
        title: 'Submit New Evidence',
        description: 'If your reporting uncovers new evidence related to documented investigations, submit it through our secure submission system.',
        link: '/submit',
      },
    ],
    resources: [
      { title: 'DocumentCloud', url: 'https://www.documentcloud.org/', type: 'Research Tool' },
      { title: 'ICIJ Offshore Leaks Database', url: 'https://offshoreleaks.icij.org/', type: 'Database' },
      { title: 'ProPublica Nonprofit Explorer', url: 'https://projects.propublica.org/nonprofits/', type: 'Database' },
      { title: 'SEC EDGAR Filings', url: 'https://www.sec.gov/cgi-bin/browse-edgar', type: 'Government' },
    ],
  },
  {
    id: 'law-enforcement',
    title: 'Law Enforcement & DoD',
    subtitle: 'Pursue criminal accountability and national security violations',
    icon: Shield,
    color: 'text-red-400',
    borderColor: 'border-red-900/40',
    description: 'Active and retired law enforcement, military, and intelligence professionals who witness misconduct have both a duty and legal protection to report it. Our investigations document specific statute violations ready for referral.',
    actions: [
      {
        title: 'Report to Inspector General',
        description: 'Every federal agency and military branch has an Inspector General office. IG reports are protected disclosures. The DoD IG investigates military misconduct, waste, and fraud.',
        link: 'https://www.dodig.mil/',
        external: true,
      },
      {
        title: 'Refer to FBI Public Corruption Unit',
        description: 'The FBI Public Corruption Unit investigates fraud, bribery, and civil rights violations by government officials. File referrals citing specific statute violations documented in our investigations.',
        link: 'https://tips.fbi.gov/',
        external: true,
      },
      {
        title: 'Contact Congressional Intelligence Committees',
        description: 'For classified misconduct, the Intelligence Community Whistleblower Protection Act protects disclosures to the Senate and House Intelligence Committees.',
      },
      {
        title: 'File Military Whistleblower Complaints',
        description: 'Under 10 U.S.C. § 1034, members of the Armed Forces are protected from reprisal for reporting violations of law or regulation through the chain of command, IG, or Congress.',
      },
      {
        title: 'Preserve Chain of Evidence',
        description: 'Document the chain of custody for any evidence. Use proper evidence handling procedures. Consult legal counsel about classification issues before disclosure.',
      },
    ],
    resources: [
      { title: 'DoD Inspector General', url: 'https://www.dodig.mil/', type: 'Government' },
      { title: 'FBI Tips Portal', url: 'https://tips.fbi.gov/', type: 'Government' },
      { title: 'Military Whistleblower Protection (10 U.S.C. § 1034)', url: 'https://www.law.cornell.edu/uscode/text/10/1034', type: 'Legal Reference' },
      { title: 'GAO Reports Database', url: 'https://www.gao.gov/reports-testimonies', type: 'Government' },
    ],
    legalProtections: [
      '10 U.S.C. § 1034 (Military Whistleblower Protection)',
      'Intelligence Community Whistleblower Protection Act (50 U.S.C. § 3033)',
      'Inspector General Act of 1978 (5 U.S.C. App.)',
      'Military Justice Improvement Act provisions',
    ],
  },
  {
    id: 'legislators',
    title: 'Legislators & Government Officials',
    subtitle: 'Introduce oversight, reform, and accountability legislation',
    icon: Landmark,
    color: 'text-cyan-400',
    borderColor: 'border-cyan-900/40',
    description: 'Elected officials and government staff can use our documented investigations to draft legislation, convene hearings, and demand executive branch accountability. Every investigation includes specific policy failures and recommended reforms.',
    actions: [
      {
        title: 'Convene Congressional Hearings',
        description: 'Use documented investigations to justify oversight hearings. Our timelines, key figures, and evidence sources provide ready-made witness lists and lines of questioning.',
      },
      {
        title: 'Draft Reform Legislation',
        description: 'Many investigations reveal systemic gaps in oversight, enforcement, and transparency. Use documented policy failures as the basis for targeted legislative reforms.',
      },
      {
        title: 'Issue Subpoenas',
        description: 'Congressional committees have subpoena power to compel testimony and document production. Target specific officials and organizations documented in our investigations.',
      },
      {
        title: 'Request GAO Investigations',
        description: 'Request the Government Accountability Office to investigate specific agencies and programs documented in our investigations. GAO reports carry significant bipartisan weight.',
        link: 'https://www.gao.gov/',
        external: true,
      },
      {
        title: 'Strengthen Whistleblower Protections',
        description: 'Many documented cover-ups succeeded because whistleblowers lacked adequate protection. Push for expanded protections, particularly for national security and intelligence community personnel.',
      },
    ],
    resources: [
      { title: 'Congressional Research Service', url: 'https://crsreports.congress.gov/', type: 'Government' },
      { title: 'GAO - Government Accountability Office', url: 'https://www.gao.gov/', type: 'Government' },
      { title: 'Congress.gov - Legislation Tracker', url: 'https://www.congress.gov/', type: 'Government' },
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
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full p-6 lg:p-8 flex items-start gap-4 text-left"
        aria-expanded={expanded}
        aria-label={`${role.title} - ${expanded ? 'collapse' : 'expand'} actions`}
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

      {/* Expanded Content */}
      {expanded && (
        <div className="px-6 lg:px-8 pb-6 lg:pb-8 border-t border-zinc-800/50">
          {/* Actions */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-4">Actions You Can Take</h4>
            <div className="space-y-4">
              {role.actions.map((action, i) => (
                <div key={i} className="border border-zinc-800/40 bg-zinc-900/30 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <span className={`text-xs font-mono ${role.color} mt-1`}>{String(i + 1).padStart(2, '0')}</span>
                    <div className="flex-1">
                      <h5 className="text-zinc-200 font-semibold text-sm">{action.title}</h5>
                      <p className="text-zinc-500 text-sm mt-1 leading-relaxed">{action.description}</p>
                      {action.link && (
                        <Link
                          href={action.link}
                          target={action.external ? '_blank' : undefined}
                          rel={action.external ? 'noopener noreferrer' : undefined}
                          className={`inline-flex items-center gap-1.5 text-xs ${role.color} hover:underline mt-2`}
                        >
                          {action.external ? 'Visit Resource' : 'View on ArkHive'}
                          {action.external ? <ExternalLink className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Legal Protections */}
          {role.legalProtections && role.legalProtections.length > 0 && (
            <div className="mt-6">
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3">
                <Lock className="w-3 h-3 inline mr-1.5" />
                Legal Protections
              </h4>
              <div className="border border-zinc-800/40 bg-zinc-900/30 p-4 rounded-lg">
                <ul className="space-y-2">
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

          {/* Resources */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-3">
              <BookOpen className="w-3 h-3 inline mr-1.5" />
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
   MAIN PAGE
   ================================================================ */

export default function TakeActionPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            actionable evidence, statute violations, and responsible parties. Below are role-specific
            guides for turning documented wrongdoing into accountability.
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

        {/* Emergency Notice */}
        <div className="border border-red-900/40 bg-red-950/10 p-6 mb-8 rounded-xl">
          <div className="flex gap-3">
            <Phone className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm font-bold text-red-300 uppercase tracking-wider">Immediate Danger?</h3>
              <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                If you are in immediate danger as a whistleblower or witness, contact the
                <a href="https://whistleblower.org/urgent-help/" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:underline mx-1">
                  Government Accountability Project emergency line
                </a>
                or call 911. If you fear government surveillance, use a clean device on a public network.
              </p>
            </div>
          </div>
        </div>

        {/* Role Cards */}
        <div className="space-y-4">
          {roles.map(role => (
            <div key={role.id} id={role.id}>
              <RoleCard role={role} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border border-zinc-800/60 bg-[#080808] p-8 mt-8 text-center rounded-xl">
          <h3 className="text-lg font-bold text-zinc-200 uppercase tracking-wider mb-3">
            Ready to Act?
          </h3>
          <p className="text-zinc-500 text-sm max-w-lg mx-auto mb-6">
            Every investigation on ArkHive includes an Accountability Engine with pre-drafted
            templates for social media posts, press tips, legal demands, and more.
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
