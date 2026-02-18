'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, CheckCircle2, AlertTriangle, ExternalLink,
  Filter, SortAsc, Globe, FileText, Users, Building2,
  Scale, Search, Eye, Lock
} from 'lucide-react';
import Link from 'next/link';

interface Source {
  id: string;
  name: string;
  type: 'government' | 'nonprofit' | 'academic' | 'media' | 'legal';
  url: string;
  description: string;
  reliability: 'verified' | 'established' | 'developing';
  categories: string[];
}

const sources: Source[] = [
  {
    id: '1',
    name: 'PACER (Public Access to Court Electronic Records)',
    type: 'government',
    url: 'https://pacer.uscourts.gov',
    description: 'Federal court documents including civil, criminal, and bankruptcy cases.',
    reliability: 'verified',
    categories: ['Legal', 'Government']
  },
  {
    id: '2',
    name: 'SEC EDGAR',
    type: 'government',
    url: 'https://www.sec.gov/edgar',
    description: 'Corporate filings, financial reports, and securities disclosures.',
    reliability: 'verified',
    categories: ['Corporate', 'Financial']
  },
  {
    id: '3',
    name: 'OpenSecrets',
    type: 'nonprofit',
    url: 'https://www.opensecrets.org',
    description: 'Campaign finance data, lobbying records, and political money tracking.',
    reliability: 'verified',
    categories: ['Political', 'Financial']
  },
  {
    id: '4',
    name: 'USASpending.gov',
    type: 'government',
    url: 'https://www.usaspending.gov',
    description: 'Federal contract data, grants, and government spending information.',
    reliability: 'verified',
    categories: ['Government', 'Financial']
  },
  {
    id: '5',
    name: 'DocumentCloud',
    type: 'nonprofit',
    url: 'https://www.documentcloud.org',
    description: 'Repository of primary source documents from journalists worldwide.',
    reliability: 'established',
    categories: ['Documents', 'Media']
  },
  {
    id: '6',
    name: 'ProPublica Nonprofit Explorer',
    type: 'media',
    url: 'https://projects.propublica.org/nonprofits',
    description: 'IRS 990 forms and nonprofit organization financial data.',
    reliability: 'verified',
    categories: ['Nonprofit', 'Financial']
  },
  {
    id: '7',
    name: 'ICIJ Offshore Leaks Database',
    type: 'nonprofit',
    url: 'https://offshoreleaks.icij.org',
    description: 'Offshore companies, trusts, and foundations from major investigations.',
    reliability: 'verified',
    categories: ['Corporate', 'Financial', 'International']
  },
  {
    id: '8',
    name: 'LittleSis',
    type: 'nonprofit',
    url: 'https://littlesis.org',
    description: 'Database of connections between powerful people and organizations.',
    reliability: 'established',
    categories: ['Political', 'Corporate']
  },
  {
    id: '9',
    name: 'FDA Adverse Event Reporting System',
    type: 'government',
    url: 'https://www.fda.gov/drugs/surveillance/fda-adverse-event-reporting-system-faers',
    description: 'Reports of drug side effects and medication errors.',
    reliability: 'verified',
    categories: ['Health', 'Government']
  },
  {
    id: '10',
    name: 'EPA Enforcement and Compliance',
    type: 'government',
    url: 'https://echo.epa.gov',
    description: 'Environmental violations, inspections, and enforcement actions.',
    reliability: 'verified',
    categories: ['Environmental', 'Government']
  },
  {
    id: '11',
    name: 'OSHA Injury Tracking',
    type: 'government',
    url: 'https://www.osha.gov/injuryreporting',
    description: 'Workplace injury and illness data from employers.',
    reliability: 'verified',
    categories: ['Labor', 'Government']
  },
  {
    id: '12',
    name: 'GovTrack',
    type: 'nonprofit',
    url: 'https://www.govtrack.us',
    description: 'Congressional legislation tracking and voting records.',
    reliability: 'verified',
    categories: ['Political', 'Legal']
  }
];

const typeIcons = {
  government: Building2,
  nonprofit: Users,
  academic: FileText,
  media: Globe,
  legal: Scale
};

const typeLabels = {
  government: 'Government',
  nonprofit: 'Nonprofit',
  academic: 'Academic',
  media: 'Media',
  legal: 'Legal'
};

const categories = [
  'All',
  'Government',
  'Financial',
  'Corporate',
  'Political',
  'Legal',
  'Health',
  'Environmental',
  'Labor'
];

export default function SourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredSources = sources.filter(source => {
    const matchesSearch = source.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      source.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
      source.categories.includes(selectedCategory);
    const matchesType = !selectedType || source.type === selectedType;
    return matchesSearch && matchesCategory && matchesType;
  });

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Our <span className="text-blood-500">Sources</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl">
            We rely on verified, authoritative sources for our investigations. 
            Below are the primary databases and resources we use.
          </p>
        </motion.div>

        {/* Verification Badge Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-zinc-900/50 border border-zinc-800 p-4 mb-8"
        >
          <div className="flex flex-wrap gap-6 items-center">
            <span className="text-sm text-zinc-400">Reliability Rating:</span>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span className="text-sm text-zinc-300">Verified - Primary official source</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-zinc-300">Established - Reputable secondary source</span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-500" />
              <span className="text-sm text-zinc-300">Developing - Requires additional verification</span>
            </div>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="flex flex-col md:flex-row gap-4 mb-8"
        >
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search sources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-2.5 placeholder-zinc-500 focus:border-blood-500 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center gap-2">
            <Filter className="w-5 h-5 text-zinc-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            {(Object.keys(typeLabels) as Array<keyof typeof typeLabels>).map(type => {
              const Icon = typeIcons[type];
              return (
                <button
                  key={type}
                  onClick={() => setSelectedType(selectedType === type ? null : type)}
                  className={`p-2.5 border transition-colors ${
                    selectedType === type
                      ? 'bg-blood-500/20 border-blood-500 text-blood-400'
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600'
                  }`}
                  title={typeLabels[type]}
                >
                  <Icon className="w-5 h-5" />
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Results count */}
        <div className="text-sm text-zinc-500 mb-4">
          Showing {filteredSources.length} of {sources.length} sources
        </div>

        {/* Sources Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredSources.map((source, index) => {
              const Icon = typeIcons[source.type];
              return (
                <motion.div
                  key={source.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-zinc-800 p-2">
                        <Icon className="w-5 h-5 text-zinc-400" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold">{source.name}</h3>
                        <span className="text-xs text-zinc-500">{typeLabels[source.type]}</span>
                      </div>
                    </div>
                    <CheckCircle2 
                      className={`w-5 h-5 ${
                        source.reliability === 'verified' 
                          ? 'text-green-500'
                          : source.reliability === 'established'
                          ? 'text-blue-500'
                          : 'text-yellow-500'
                      }`}
                    />
                  </div>

                  <p className="text-zinc-400 text-sm mb-4">
                    {source.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {source.categories.map(cat => (
                        <span
                          key={cat}
                          className="px-2 py-0.5 bg-zinc-800 text-zinc-400 text-xs"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blood-400 hover:text-blood-300 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {filteredSources.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <Search className="w-12 h-12 text-zinc-700 mx-auto mb-4" />
            <p className="text-zinc-400">No sources match your filters</p>
          </motion.div>
        )}

        {/* Additional Resources */}
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-zinc-800"
        >
          <h2 className="text-2xl font-bold text-white mb-6">How We Protect Sources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-zinc-900/30 border border-zinc-800/50 p-5">
              <Lock className="w-8 h-8 text-blood-500 mb-3" />
              <h3 className="text-white font-semibold mb-2">Encryption</h3>
              <p className="text-zinc-500 text-sm">
                All communications use end-to-end encryption. We accept documents via SecureDrop.
              </p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800/50 p-5">
              <Shield className="w-8 h-8 text-blood-500 mb-3" />
              <h3 className="text-white font-semibold mb-2">Anonymity</h3>
              <p className="text-zinc-500 text-sm">
                We never require identification. Our systems are designed to protect anonymity.
              </p>
            </div>
            <div className="bg-zinc-900/30 border border-zinc-800/50 p-5">
              <Eye className="w-8 h-8 text-blood-500 mb-3" />
              <h3 className="text-white font-semibold mb-2">Legal Protection</h3>
              <p className="text-zinc-500 text-sm">
                We will fight any attempt to compel source disclosure through legal means.
              </p>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-zinc-400 mb-4">Have information to share?</p>
          <Link
            href="/submit"
            className="inline-block bg-blood-600 hover:bg-blood-700 text-white font-semibold px-6 py-3 transition-colors"
          >
            Submit a Tip Securely
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
