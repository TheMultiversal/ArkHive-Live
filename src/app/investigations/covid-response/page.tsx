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
  Skull,
  Activity,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigationData = {
  title: 'COVID-19 Response Failures',
  subtitle: '500,000+ Preventable American Deaths Through Deliberate Negligence',
  severity: 'critical' as const,
  status: 'Documented - Ongoing Consequences',
  lastUpdated: 'February 2026',
  summary: `The Trump administration's response to the COVID-19 pandemic represents one of the greatest failures of federal governance in American history. Despite early warnings, the administration deliberately downplayed the virus, promoted unproven treatments, politicized mask-wearing, undermined public health officials, and created critical shortages of PPE and testing. Conservative estimates suggest 400,000-500,000 American deaths were preventable with competent federal leadership. Trump privately acknowledged the virus was "deadly stuff" while publicly comparing it to the flu.`,
  
  deathToll: {
    total: '1,100,000+',
    preventable: '400,000-500,000',
    childrenOrphaned: '200,000+',
    healthcareWorkerDeaths: '3,600+',
  },

  keyFigures: [
    { name: 'Donald Trump', role: 'President - Downplayed pandemic, promoted false cures', href: '/entities/individuals/donald-trump' },
    { name: 'Jared Kushner', role: 'Task Force - PPE distribution failures, "their problem" states', href: '/entities/individuals/jared-kushner' },
    { name: 'Alex Azar', role: 'HHS Secretary - Warned Trump, later enabled denialism', href: '/entities/individuals/alex-azar' },
    { name: 'Deborah Birx', role: 'Coronavirus Task Force Coordinator', href: '/entities/individuals/deborah-birx' },
    { name: 'Scott Atlas', role: 'Advisor - Promoted herd immunity strategy', href: '/entities/individuals/scott-atlas' },
  ],

  timeline: [
    { date: 'January 3, 2020', event: 'CDC Director Redfield notified of virus in China' },
    { date: 'January 18, 2020', event: 'HHS Secretary Azar briefs Trump - Trump dismisses concerns' },
    { date: 'January 22, 2020', event: 'Trump: "We have it totally under control"' },
    { date: 'January 28, 2020', event: 'National Security Advisor warns of pandemic, Trump ignores' },
    { date: 'February 7, 2020', event: 'Trump tells Bob Woodward virus is "deadly stuff" - 5x flu' },
    { date: 'February 10, 2020', event: 'Trump: "Looks like by April, when it gets warm, it will go away"' },
    { date: 'February 24, 2020', event: 'Trump: "Stock market starting to look very good to me!"' },
    { date: 'February 26, 2020', event: 'Trump: "15 cases, within a couple days going to be down to zero"' },
    { date: 'February 27, 2020', event: 'Trump: "It\'s going to disappear. One day, like a miracle"' },
    { date: 'March 6, 2020', event: 'Trump at CDC: "Anybody that needs a test gets a test" (false)' },
    { date: 'March 9, 2020', event: 'Trump compares COVID to flu: "Nothing is shut down"' },
    { date: 'March 13, 2020', event: 'National emergency declared - 7 weeks after first briefing' },
    { date: 'March 19, 2020', event: 'Trump tells Woodward: "I wanted to always play it down"' },
    { date: 'March 24, 2020', event: 'Trump wants country "opened up by Easter"' },
    { date: 'April 2020', event: 'Kushner task force abandons national testing plan' },
    { date: 'April 23, 2020', event: 'Trump suggests injecting disinfectant, UV light inside body' },
    { date: 'May 2020', event: 'Trump promotes hydroxychloroquine despite no evidence' },
    { date: 'June 2020', event: 'Trump orders slowing of testing to reduce case numbers' },
    { date: 'July 2020', event: 'White House sidelines CDC, takes over data reporting' },
    { date: 'October 2, 2020', event: 'Trump tests positive, hospitalized, receives experimental treatment' },
    { date: 'October 5, 2020', event: 'Trump: "Don\'t be afraid of Covid. Don\'t let it dominate your life"' },
    { date: 'November 2020', event: 'Trump refuses to attend COVID meetings during transition' },
    { date: 'December 2020', event: 'Trump undermines vaccine confidence with conspiracies' },
    { date: 'January 20, 2021', event: 'Trump leaves office with 400,000+ dead, no distribution plan' },
  ],

  failures: [
    {
      category: 'Early Warning Ignored',
      details: [
        'Intelligence briefings warned of pandemic in January 2020',
        'Trump dismissed warnings from HHS Secretary Alex Azar',
        'National Security Council pandemic team disbanded in 2018',
        'Pandemic playbook from Obama administration ignored',
        '7 weeks of denial while virus spread unchecked',
      ],
    },
    {
      category: 'Testing Catastrophe',
      details: [
        'CDC test kits contaminated, delayed deployment',
        'Refused WHO tests offered in February',
        '"Anybody who wants a test can get a test" was false',
        'Kushner team abandoned national testing plan',
        'Trump ordered testing slowdown to reduce case numbers',
      ],
    },
    {
      category: 'PPE & Supply Chain',
      details: [
        'National stockpile depleted, not replenished',
        'States forced to bid against each other and FEMA',
        'Kushner called stockpile "ours" not states\'',
        'Healthcare workers wore trash bags',
        'Ventilator shortages in hard-hit areas',
      ],
    },
    {
      category: 'Misinformation Campaign',
      details: [
        'Promoted hydroxychloroquine with no evidence',
        'Suggested injecting disinfectant',
        'Promised virus would "disappear like a miracle"',
        'Politicized mask-wearing',
        'Undermined Dr. Fauci and CDC',
        'Hosted super-spreader events at White House',
      ],
    },
    {
      category: 'Political Interference',
      details: [
        'CDC guidance edited for political reasons',
        'Pressured FDA for emergency authorizations',
        'Took over hospital data from CDC',
        'Punished states with Democratic governors',
        'Made PPE distribution political',
      ],
    },
  ],

  quotes: [
    { quote: 'I wanted to always play it down. I still like playing it down, because I don\'t want to create a panic.', source: 'Trump to Bob Woodward, March 19, 2020', context: 'Admitted deliberate downplaying while virus killed Americans' },
    { quote: 'This is deadly stuff... You just breathe the air and that\'s how it\'s passed... This is more deadly than even your strenuous flus.', source: 'Trump to Bob Woodward, February 7, 2020', context: 'Privately acknowledged deadliness while publicly comparing to flu' },
    { quote: 'And then I see the disinfectant where it knocks it out in a minute. One minute. And is there a way we can do something like that, by injection inside?', source: 'Trump White House briefing, April 23, 2020', context: 'Poison control calls spiked after this suggestion' },
    { quote: 'The federal stockpile is ours. It\'s not supposed to be states\' stockpiles that they then use.', source: 'Jared Kushner, April 2, 2020', context: 'Revealed administration viewed states as adversaries' },
    { quote: 'When you test, you create cases.', source: 'Trump, May 2020', context: 'Ordered slowdown in testing to reduce reported cases' },
  ],

  comparisons: [
    { country: 'United States', deathsPer100k: 338, context: 'Trump response' },
    { country: 'Canada', deathsPer100k: 130, context: 'Competent federal response' },
    { country: 'Germany', deathsPer100k: 175, context: 'Strong public health measures' },
    { country: 'South Korea', deathsPer100k: 67, context: 'Aggressive testing and tracing' },
    { country: 'Australia', deathsPer100k: 81, context: 'Border controls and lockdowns' },
    { country: 'New Zealand', deathsPer100k: 54, context: 'Early decisive action' },
  ],

  sources: [
    { title: 'Woodward Recordings: Trump Admitted Downplaying', url: 'https://www.cnn.com/2020/09/09/politics/bob-woodward-rage-book-trump-coronavirus/index.html', type: 'Audio Recording' },
    { title: 'Lancet Commission: 40% of US Deaths Preventable', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(20)32545-9/fulltext', type: 'Medical Journal' },
    { title: 'House Select Subcommittee COVID Report', url: 'https://coronavirus.house.gov/news/reports', type: 'Congressional Report' },
    { title: 'CDC Death Statistics', url: 'https://covid.cdc.gov/covid-data-tracker/', type: 'Government Data' },
    { title: 'Trump COVID Timeline - Washington Post', url: 'https://www.washingtonpost.com/graphics/2020/politics/trump-covid-pandemic-dark-winter/', type: 'Investigative Report' },
    { title: 'Kushner Testing Plan Abandonment - Vanity Fair', url: 'https://www.vanityfair.com/news/2020/07/how-jared-kushners-secret-testing-plan-went-poof-into-thin-air', type: 'Investigative Report' },
    { title: 'Orphaned Children Study - Pediatrics', url: 'https://publications.aap.org/pediatrics/article/148/6/e2021053760/183446/', type: 'Medical Journal' },
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-orange-600/20 text-orange-400 border-orange-600/30',
  medium: 'bg-yellow-600/20 text-yellow-400 border-yellow-600/30',
  low: 'bg-green-600/20 text-green-400 border-green-600/30',
};

export default function CovidResponsePage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

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
            <span className="text-blood-500">COVID-19 Response</span>
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
        {/* Death Toll Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-6 text-center border-l-4 border-blood-600">
              <Skull className="w-8 h-8 text-blood-500 mx-auto mb-2" />
              <p className="text-3xl font-black text-blood-500">{investigationData.deathToll.total}</p>
              <p className="text-sm text-zinc-400">Total US Deaths</p>
            </div>
            <div className="glass-card p-6 text-center border-l-4 border-blood-600">
              <AlertTriangle className="w-8 h-8 text-blood-500 mx-auto mb-2" />
              <p className="text-3xl font-black text-blood-500">{investigationData.deathToll.preventable}</p>
              <p className="text-sm text-zinc-400">Preventable Deaths</p>
            </div>
            <div className="glass-card p-6 text-center border-l-4 border-orange-600">
              <Users className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-3xl font-black text-orange-500">{investigationData.deathToll.childrenOrphaned}</p>
              <p className="text-sm text-zinc-400">Children Orphaned</p>
            </div>
            <div className="glass-card p-6 text-center border-l-4 border-orange-600">
              <Activity className="w-8 h-8 text-orange-500 mx-auto mb-2" />
              <p className="text-3xl font-black text-orange-500">{investigationData.deathToll.healthcareWorkerDeaths}</p>
              <p className="text-sm text-zinc-400">Healthcare Worker Deaths</p>
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

        {/* Damning Quotes */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-card p-6 mb-8 border-l-4 border-blood-600"
        >
          <h2 className="text-xl font-bold mb-4">Damning Quotes - In Their Own Words</h2>
          <div className="space-y-6">
            {investigationData.quotes.map((item, index) => (
              <div key={index} className="border-b border-zinc-800 pb-4 last:border-0">
                <blockquote className="text-lg text-zinc-200 italic mb-2">
                  &quot;{item.quote}&quot;
                </blockquote>
                <p className="text-sm text-blood-400 font-medium">{item.source}</p>
                <p className="text-xs text-zinc-500 mt-1">{item.context}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Failures by Category */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-blood-500" />
            Documented Failures
          </h2>
          <div className="space-y-4">
            {investigationData.failures.map((failure, index) => (
              <div key={index} className="border border-zinc-800">
                <button
                  onClick={() => setExpandedCategory(expandedCategory === failure.category ? null : failure.category)}
                  className="w-full flex items-center justify-between p-4 hover:bg-zinc-900/50 transition-colors"
                >
                  <span className="font-bold text-blood-400">{failure.category}</span>
                  <ChevronRight className={`w-5 h-5 transition-transform ${expandedCategory === failure.category ? 'rotate-90' : ''}`} />
                </button>
                {expandedCategory === failure.category && (
                  <div className="px-4 pb-4">
                    <ul className="space-y-2">
                      {failure.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-300">
                          <span className="text-blood-500 mt-1">•</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.section>

        {/* International Comparison */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4">International Death Rate Comparison</h2>
          <p className="text-sm text-zinc-500 mb-4">Deaths per 100,000 population</p>
          <div className="space-y-3">
            {investigationData.comparisons.map((comp, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="w-32 text-sm font-medium">{comp.country}</span>
                <div className="flex-1 bg-zinc-900 h-6 relative">
                  <div 
                    className={`h-full ${comp.country === 'United States' ? 'bg-blood-600' : 'bg-zinc-600'}`}
                    style={{ width: `${(comp.deathsPer100k / 340) * 100}%` }}
                  />
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs font-mono">
                    {comp.deathsPer100k}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-zinc-500 mt-4">
            If the US had Germany&apos;s death rate, approximately 400,000 fewer Americans would have died.
          </p>
        </motion.section>

        {/* Timeline */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="glass-card p-6 mb-8"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blood-500" />
            Timeline of Negligence
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
          transition={{ delay: 0.4 }}
          className="glass-card p-6"
        >
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-blood-500" />
            Sources & Documentation
          </h2>
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
