'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  Calendar,
  ChevronRight,
  ExternalLink,
  FileText,
  Users,
  Scale,
  Clock,
  Database,
  Globe,
  Target,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'Cambridge Analytica',
  subtitle: '87 Million Users Harvested, Psychographic Targeting, and Election Manipulation',
  severity: 'critical' as const,
  status: 'Documented - Company Dissolved',
  lastUpdated: 'February 2026',
  summary: `Cambridge Analytica, a data firm backed by billionaire Robert Mercer and led by Steve Bannon, harvested personal data from 87 million Facebook users without consent. The firm used this data to build psychographic profiles and target voters with tailored political messaging during the 2016 Trump campaign. The scandal revealed the weaponization of personal data for political manipulation, leading to congressional investigations, billions in Facebook fines, and Cambridge Analytica's dissolution.`,
  
  dataStats: {
    usersHarvested: '87 million',
    countriesAffected: '200+',
    facebookFine: '$5 billion',
    appUsers: '270,000',
    dataPoints: '5,000+ per user',
  },

  keyFigures: [
    { name: 'Steve Bannon', role: 'Vice President - Key figure in weaponizing data', href: '/entities/individuals/steve-bannon' },
    { name: 'Robert Mercer', role: 'Primary investor - Funded operation', href: '/entities/individuals/robert-mercer' },
    { name: 'Rebekah Mercer', role: 'Board member - Mercer family representative', href: '/entities/individuals/rebekah-mercer' },
    { name: 'Donald Trump', role: 'Client - Campaign used CA services', href: '/entities/individuals/donald-trump' },
    { name: 'Jared Kushner', role: 'Campaign digital director - Oversaw CA relationship', href: '/entities/individuals/jared-kushner' },
  ],

  dataHarvestingScheme: {
    method: 'Facebook app "thisisyourdigitallife"',
    developer: 'Aleksandr Kogan (Cambridge professor)',
    process: [
      'Paid 270,000 users to take personality quiz',
      'App harvested data from users AND their friends',
      'Accessed friends list, likes, private messages',
      'Turned 270K users into 87 million profiles',
      'Facebook API allowed this data access at the time',
    ],
    dataCollected: [
      'Personality profiles (OCEAN model)',
      'Political preferences',
      'Religious beliefs',
      'Friend networks',
      'Location data',
      'Private messages',
      'Likes and interests',
    ],
  },

  psychographicTargeting: {
    method: 'OCEAN personality model',
    categories: [
      'Openness',
      'Conscientiousness',
      'Extraversion',
      'Agreeableness',
      'Neuroticism',
    ],
    application: [
      'Identified persuadable voters',
      'Created targeted fear-based messaging',
      'Tailored ads to personality vulnerabilities',
      'Micro-targeted swing state voters',
      'Tested thousands of ad variations',
    ],
  },

  trumpCampaignUse: {
    client: 'Donald J. Trump for President',
    spending: '$5.9+ million',
    services: [
      'Voter targeting and modeling',
      'Psychographic profiling',
      'Ad placement and testing',
      'Swing state voter identification',
      'Digital strategy coordination',
    ],
    kushnerRole: 'Jared Kushner oversaw digital operations including CA relationship',
    bannonRole: 'Steve Bannon was CA vice president before joining campaign as CEO',
  },

  brexitConnection: {
    involvement: 'CA worked with Leave.EU campaign',
    claims: 'Nigel Farage and Arron Banks consulted with CA',
    denial: 'CA denied formal Brexit work, but connections documented',
    overlap: 'Shared personnel and methodology with Brexit campaigns',
  },

  whistleblowers: [
    {
      name: 'Christopher Wylie',
      role: 'Former director of research',
      revelations: [
        'Exposed data harvesting scheme to media',
        'Described CA as "psychological warfare"',
        'Revealed Bannon\'s role in weaponizing data',
        'Testified to US and UK parliaments',
      ],
    },
    {
      name: 'Brittany Kaiser',
      role: 'Former business development director',
      revelations: [
        'Confirmed Trump campaign work',
        'Revealed global manipulation campaigns',
        'Documented work for authoritarian regimes',
        'Testified to multiple investigations',
      ],
    },
  ],

  consequences: [
    { entity: 'Facebook', penalty: '$5 billion FTC fine', year: '2019' },
    { entity: 'Facebook', penalty: '$100 million SEC fine', year: '2019' },
    { entity: 'Cambridge Analytica', penalty: 'Dissolved', year: '2018' },
    { entity: 'Mark Zuckerberg', penalty: 'Congressional testimony', year: '2018' },
    { entity: 'UK ICO', penalty: '£500,000 fine for CA', year: '2018' },
  ],

  timeline: [
    { date: '2013', event: 'SCL Group creates Cambridge Analytica with Mercer funding' },
    { date: '2014', event: 'Steve Bannon joins as vice president' },
    { date: '2014', event: 'Aleksandr Kogan creates Facebook quiz app' },
    { date: '2014-2015', event: '87 million user profiles harvested' },
    { date: 'June 2015', event: 'Ted Cruz campaign hires Cambridge Analytica' },
    { date: 'August 2016', event: 'Trump campaign begins working with CA' },
    { date: 'August 2016', event: 'Bannon leaves CA to become Trump campaign CEO' },
    { date: 'November 2016', event: 'Trump wins election' },
    { date: 'March 2018', event: 'Christopher Wylie goes public as whistleblower' },
    { date: 'March 2018', event: 'Guardian/NY Times publish exposé' },
    { date: 'April 2018', event: 'Zuckerberg testifies before Congress' },
    { date: 'May 2018', event: 'Cambridge Analytica files for bankruptcy' },
    { date: 'July 2019', event: 'Facebook fined $5 billion by FTC' },
    { date: '2020', event: 'Netflix documentary "The Great Hack" released' },
  ],

  globalOperations: [
    { country: 'United States', campaign: 'Trump 2016, Cruz 2016' },
    { country: 'United Kingdom', campaign: 'Brexit-adjacent work' },
    { country: 'Kenya', campaign: 'Kenyatta campaigns' },
    { country: 'Nigeria', campaign: 'Multiple campaigns' },
    { country: 'Trinidad & Tobago', campaign: 'UNC party' },
    { country: 'India', campaign: 'BJP-related work alleged' },
  ],

  sources: [
    { title: 'Guardian: Cambridge Analytica Exposé', url: 'https://www.theguardian.com/news/series/cambridge-analytica-files', type: 'Investigation' },
    { title: 'NY Times: How Data Became a Tool', url: 'https://www.nytimes.com/2018/03/17/us/politics/cambridge-analytica-trump-campaign.html', type: 'Investigation' },
    { title: 'FTC Facebook Settlement', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook', type: 'Government Document' },
    { title: 'Christopher Wylie Testimony', url: 'https://www.judiciary.senate.gov/meetings/cambridge-analytica-and-the-future-of-data-privacy', type: 'Congressional Testimony' },
    { title: 'UK Parliament Digital Committee Report', url: 'https://publications.parliament.uk/pa/cm201719/cmselect/cmcumeds/1791/1791.pdf', type: 'Parliamentary Report' },
    { title: 'The Great Hack Documentary', url: 'https://www.netflix.com/title/80117542', type: 'Documentary' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function CambridgeAnalyticaPage() {
  const [expandedSection, setExpandedSection] = useState<string | null>('harvest');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-blood-500">Cambridge Analytica</span>
          </nav>

          <div className="flex items-center gap-4 mb-4">
            <span className={`px-3 py-1 text-xs font-bold uppercase border ${severityColors[investigationData.severity]}`}>
              {investigationData.severity} SEVERITY
            </span>
            <span className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
              {investigationData.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-black mb-4">
            <GlitchText>{investigationData.title}</GlitchText>
          </h1>
          <p className="text-xl text-zinc-400 mb-4">{investigationData.subtitle}</p>
          
          <div className="flex items-center gap-4 text-sm text-zinc-500">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Updated: {investigationData.lastUpdated}
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Database className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.dataStats.usersHarvested}</p>
              <p className="text-xs text-zinc-400">Users Harvested</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-blood-600">
              <Globe className="w-6 h-6 text-blood-500 mx-auto mb-2" />
              <p className="text-xl font-black text-blood-500">{investigationData.dataStats.countriesAffected}</p>
              <p className="text-xs text-zinc-400">Countries</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Scale className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.dataStats.facebookFine}</p>
              <p className="text-xs text-zinc-400">Facebook Fine</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-orange-600">
              <Users className="w-6 h-6 text-orange-500 mx-auto mb-2" />
              <p className="text-xl font-black text-orange-500">{investigationData.dataStats.appUsers}</p>
              <p className="text-xs text-zinc-400">Initial App Users</p>
            </div>
            <div className="glass-card p-4 text-center border-l-4 border-yellow-600">
              <Target className="w-6 h-6 text-yellow-500 mx-auto mb-2" />
              <p className="text-xl font-black text-yellow-500">{investigationData.dataStats.dataPoints}</p>
              <p className="text-xs text-zinc-400">Per User</p>
            </div>
          </div>
        </motion.section>

        {/* Summary */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blood-500" />
            Executive Summary
          </h2>
          <p className="text-zinc-300 leading-relaxed">{investigationData.summary}</p>
        </motion.section>

        {/* Key Figures */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-blood-500" />
            Key Figures
          </h2>
          <div className="space-y-3">
            {investigationData.keyFigures.map((figure, index) => (
              <Link
                key={index}
                href={figure.href}
                className="flex items-center justify-between p-4 bg-zinc-900/50 border border-zinc-800 hover:border-blood-500/50 transition-all"
              >
                <div>
                  <span className="font-medium text-blood-400">{figure.name}</span>
                  <p className="text-sm text-zinc-500">{figure.role}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600" />
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Data Harvesting Scheme */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">The Data Harvesting Scheme</h2>
          <div className="mb-4">
            <p className="text-xs text-zinc-500 uppercase">Method</p>
            <p className="text-zinc-200">{investigationData.dataHarvestingScheme.method}</p>
            <p className="text-sm text-zinc-400 mt-1">Developer: {investigationData.dataHarvestingScheme.developer}</p>
          </div>

          <p className="text-xs text-zinc-500 uppercase mb-2">Process</p>
          <ul className="space-y-1 mb-4">
            {investigationData.dataHarvestingScheme.process.map((step, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">{i + 1}.</span>
                {step}
              </li>
            ))}
          </ul>

          <p className="text-xs text-zinc-500 uppercase mb-2">Data Collected</p>
          <div className="flex flex-wrap gap-2">
            {investigationData.dataHarvestingScheme.dataCollected.map((data, i) => (
              <span key={i} className="px-2 py-1 bg-zinc-800 text-zinc-300 text-xs border border-zinc-700">
                {data}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Psychographic Targeting */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Psychographic Targeting</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">OCEAN Model Categories</p>
              <ul className="space-y-1">
                {investigationData.psychographicTargeting.categories.map((cat, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-blood-500">•</span>
                    {cat}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase mb-2">Application</p>
              <ul className="space-y-1">
                {investigationData.psychographicTargeting.application.map((app, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                    <span className="text-orange-500">•</span>
                    {app}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Trump Campaign Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Trump Campaign Use</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-xs text-zinc-500 uppercase">Client</p>
              <p className="text-zinc-200">{investigationData.trumpCampaignUse.client}</p>
            </div>
            <div>
              <p className="text-xs text-zinc-500 uppercase">Spending</p>
              <p className="text-blood-400 font-bold">{investigationData.trumpCampaignUse.spending}</p>
            </div>
          </div>

          <p className="text-xs text-zinc-500 uppercase mb-2">Services Provided</p>
          <ul className="space-y-1 mb-4">
            {investigationData.trumpCampaignUse.services.map((service, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                <span className="text-blood-500">•</span>
                {service}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="p-3 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500">Kushner Role</p>
              <p className="text-zinc-300">{investigationData.trumpCampaignUse.kushnerRole}</p>
            </div>
            <div className="p-3 bg-zinc-900/50 border border-zinc-800">
              <p className="text-xs text-zinc-500">Bannon Role</p>
              <p className="text-zinc-300">{investigationData.trumpCampaignUse.bannonRole}</p>
            </div>
          </div>
        </motion.section>

        {/* Whistleblowers */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">Whistleblowers</h2>
          <div className="space-y-4">
            {investigationData.whistleblowers.map((whistleblower, index) => (
              <div key={index} className="p-4 bg-zinc-900/50 border border-zinc-800">
                <div className="mb-2">
                  <span className="font-bold text-blood-400">{whistleblower.name}</span>
                  <p className="text-sm text-zinc-500">{whistleblower.role}</p>
                </div>
                <ul className="space-y-1">
                  {whistleblower.revelations.map((revelation, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                      <span className="text-blood-500">•</span>
                      {revelation}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Consequences */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Consequences
          </h2>
          <div className="space-y-3">
            {investigationData.consequences.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                <div>
                  <span className="font-medium text-blood-400">{item.entity}</span>
                  <p className="text-sm text-zinc-500">{item.penalty}</p>
                </div>
                <span className="text-xs text-zinc-500">{item.year}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Global Operations */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Globe className="w-5 h-5 text-blood-500" />
            Global Operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {investigationData.globalOperations.map((op, index) => (
              <div key={index} className="p-3 bg-zinc-900/50 border border-zinc-800">
                <span className="font-medium text-blood-400">{op.country}</span>
                <p className="text-xs text-zinc-500 mt-1">{op.campaign}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline
          </h2>
          <div className="space-y-4 max-h-96 overflow-y-auto">
            {investigationData.timeline.map((item, index) => (
              <div key={index} className="relative pl-4 border-l-2 border-zinc-800">
                <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                <p className="text-sm text-zinc-300">{item.event}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Sources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold mb-4">Sources & Documentation</h2>
          <div className="space-y-2">
            {investigationData.sources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 transition-colors"
              >
                <div>
                  <span className="text-zinc-200">{source.title}</span>
                  <span className="block text-xs text-zinc-500">{source.type}</span>
                </div>
                <ExternalLink className="w-4 h-4 text-zinc-600" />
              </a>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
