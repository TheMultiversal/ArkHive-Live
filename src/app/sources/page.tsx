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
,

 // === Expanded Sources ===
 {
 id: '13',
 name: 'National Archives (NARA)',
 type: 'government',
 url: 'https://www.archives.gov',
 description: 'Declassified documents, presidential records, and historical government files including CIA, FBI, and NSA releases.',
 reliability: 'verified',
 categories: ['Government', 'Documents']
 },
 {
 id: '14',
 name: 'FOIA.gov',
 type: 'government',
 url: 'https://www.foia.gov',
 description: 'Central portal for Freedom of Information Act requests across all federal agencies.',
 reliability: 'verified',
 categories: ['Government', 'Documents']
 },
 {
 id: '15',
 name: 'Congressional Record',
 type: 'government',
 url: 'https://www.congress.gov/congressional-record',
 description: 'Official record of proceedings and debates of the United States Congress.',
 reliability: 'verified',
 categories: ['Political', 'Legal', 'Government']
 },
 {
 id: '16',
 name: 'Federal Election Commission',
 type: 'government',
 url: 'https://www.fec.gov',
 description: 'Campaign contribution data, PAC filings, and election spending disclosure.',
 reliability: 'verified',
 categories: ['Political', 'Financial']
 },
 {
 id: '17',
 name: 'GAO Reports',
 type: 'government',
 url: 'https://www.gao.gov',
 description: 'Government Accountability Office reports on federal spending, waste, fraud, and program effectiveness.',
 reliability: 'verified',
 categories: ['Government', 'Financial']
 },
 {
 id: '18',
 name: 'Bureau of Justice Statistics',
 type: 'government',
 url: 'https://bjs.ojp.gov',
 description: 'Criminal justice data including incarceration rates, police use of force, and court statistics.',
 reliability: 'verified',
 categories: ['Criminal Justice', 'Government']
 },
 {
 id: '19',
 name: 'CDC WONDER Database',
 type: 'government',
 url: 'https://wonder.cdc.gov',
 description: 'Public health data including mortality, vaccine adverse events, and disease surveillance.',
 reliability: 'verified',
 categories: ['Health', 'Government']
 },
 {
 id: '20',
 name: 'FBI Vault',
 type: 'government',
 url: 'https://vault.fbi.gov',
 description: 'Declassified FBI files including COINTELPRO, civil rights, and domestic intelligence documents.',
 reliability: 'verified',
 categories: ['Government', 'Intelligence', 'Documents']
 },
 {
 id: '21',
 name: 'CIA Reading Room',
 type: 'government',
 url: 'https://www.cia.gov/readingroom',
 description: 'Declassified CIA documents including MKUltra, covert operations, and intelligence assessments.',
 reliability: 'verified',
 categories: ['Government', 'Intelligence', 'Documents']
 },
 {
 id: '22',
 name: 'DOJ Office of Inspector General',
 type: 'government',
 url: 'https://oig.justice.gov',
 description: 'Independent oversight reports on DOJ, FBI, ATF, and federal law enforcement.',
 reliability: 'verified',
 categories: ['Government', 'Legal', 'Criminal Justice']
 },
 {
 id: '23',
 name: 'Senate Intelligence Committee',
 type: 'government',
 url: 'https://www.intelligence.senate.gov',
 description: 'Intelligence oversight reports including the torture report and election interference findings.',
 reliability: 'verified',
 categories: ['Government', 'Intelligence']
 },
 {
 id: '24',
 name: 'VAERS (Vaccine Adverse Event Reporting)',
 type: 'government',
 url: 'https://vaers.hhs.gov',
 description: 'Co-managed by CDC and FDA, captures reports of adverse events following vaccination.',
 reliability: 'verified',
 categories: ['Health', 'Government']
 },
 {
 id: '25',
 name: 'Federal Reserve FRED',
 type: 'government',
 url: 'https://fred.stlouisfed.org',
 description: 'Economic data including bank reserves, interest rates, and monetary policy metrics.',
 reliability: 'verified',
 categories: ['Financial', 'Government']
 },
 {
 id: '26',
 name: 'Internet Archive / Wayback Machine',
 type: 'nonprofit',
 url: 'https://archive.org',
 description: 'Web archive preserving deleted pages, documents, and historical content from government and corporate sites.',
 reliability: 'verified',
 categories: ['Documents', 'Technology']
 },
 {
 id: '27',
 name: 'The Intercept',
 type: 'media',
 url: 'https://theintercept.com',
 description: 'Investigative journalism focused on war, surveillance, civil liberties, and government accountability.',
 reliability: 'established',
 categories: ['Media', 'Intelligence', 'Government']
 },
 {
 id: '28',
 name: 'MuckRock',
 type: 'nonprofit',
 url: 'https://www.muckrock.com',
 description: 'FOIA request filing service and repository of government document releases.',
 reliability: 'verified',
 categories: ['Government', 'Documents']
 },
 {
 id: '29',
 name: 'American Civil Liberties Union (ACLU)',
 type: 'nonprofit',
 url: 'https://www.aclu.org',
 description: 'Civil liberties litigation documents, policy analysis, and rights violation tracking.',
 reliability: 'verified',
 categories: ['Legal', 'Civil Rights']
 },
 {
 id: '30',
 name: 'Electronic Frontier Foundation',
 type: 'nonprofit',
 url: 'https://www.eff.org',
 description: 'Digital privacy, surveillance technology tracking, and tech policy research.',
 reliability: 'verified',
 categories: ['Technology', 'Civil Rights']
 },
 {
 id: '31',
 name: 'Wikileaks',
 type: 'nonprofit',
 url: 'https://wikileaks.org',
 description: 'Leaked classified documents including diplomatic cables, military logs, and intelligence files.',
 reliability: 'established',
 categories: ['Documents', 'Intelligence', 'Government']
 },
 {
 id: '32',
 name: 'Human Rights Watch',
 type: 'nonprofit',
 url: 'https://www.hrw.org',
 description: 'International human rights documentation, war crimes evidence, and abuse monitoring.',
 reliability: 'verified',
 categories: ['International', 'Legal', 'Civil Rights']
 },
 {
 id: '33',
 name: 'Amnesty International',
 type: 'nonprofit',
 url: 'https://www.amnesty.org',
 description: 'Global human rights abuse documentation, prisoner of conscience tracking, and torture monitoring.',
 reliability: 'verified',
 categories: ['International', 'Civil Rights']
 },
 {
 id: '34',
 name: 'Center for Constitutional Rights',
 type: 'nonprofit',
 url: 'https://ccrjustice.org',
 description: 'Legal advocacy and documentation on Guantanamo, torture, and civil rights violations.',
 reliability: 'verified',
 categories: ['Legal', 'Civil Rights']
 },
 {
 id: '35',
 name: 'Brennan Center for Justice',
 type: 'nonprofit',
 url: 'https://www.brennancenter.org',
 description: 'Voting rights, criminal justice reform, and democratic institution research.',
 reliability: 'verified',
 categories: ['Political', 'Legal', 'Civil Rights']
 },
 {
 id: '36',
 name: 'Southern Poverty Law Center',
 type: 'nonprofit',
 url: 'https://www.splcenter.org',
 description: 'Hate group tracking, extremism monitoring, and civil rights litigation documentation.',
 reliability: 'verified',
 categories: ['Civil Rights', 'Criminal Justice']
 },
 {
 id: '37',
 name: 'FollowTheMoney.org',
 type: 'nonprofit',
 url: 'https://www.followthemoney.org',
 description: 'State-level campaign finance data and political money tracking across all 50 states.',
 reliability: 'verified',
 categories: ['Political', 'Financial']
 },
 {
 id: '38',
 name: 'Organized Crime and Corruption Reporting Project',
 type: 'nonprofit',
 url: 'https://www.occrp.org',
 description: 'Cross-border investigation consortium exposing corruption, money laundering, and organized crime.',
 reliability: 'established',
 categories: ['International', 'Financial', 'Corporate']
 },
 {
 id: '39',
 name: 'Reprieve',
 type: 'nonprofit',
 url: 'https://reprieve.org',
 description: 'Documentation of drone strikes, death penalty cases, and secret detention programs.',
 reliability: 'established',
 categories: ['Legal', 'International', 'Civil Rights']
 },
 {
 id: '40',
 name: 'Bellingcat',
 type: 'nonprofit',
 url: 'https://www.bellingcat.com',
 description: 'Open-source intelligence investigations using satellite imagery, social media, and public data.',
 reliability: 'established',
 categories: ['Intelligence', 'International', 'Technology']
 },
 {
 id: '41',
 name: 'Stanford Internet Observatory',
 type: 'academic',
 url: 'https://cyber.fsi.stanford.edu/io',
 description: 'Research on disinformation, election interference, and platform manipulation.',
 reliability: 'verified',
 categories: ['Technology', 'Political']
 },
 {
 id: '42',
 name: 'Costs of War Project (Brown University)',
 type: 'academic',
 url: 'https://watson.brown.edu/costsofwar',
 description: 'Comprehensive analysis of post-9/11 war costs, casualties, and displacement.',
 reliability: 'verified',
 categories: ['International', 'Government', 'Financial']
 },
 {
 id: '43',
 name: 'Mapping Police Violence',
 type: 'academic',
 url: 'https://mappingpoliceviolence.us',
 description: 'Comprehensive database of police killings in the United States since 2013.',
 reliability: 'verified',
 categories: ['Criminal Justice', 'Civil Rights']
 },
 {
 id: '44',
 name: 'Equal Justice Initiative',
 type: 'nonprofit',
 url: 'https://eji.org',
 description: 'Historical documentation of racial terror lynchings, wrongful convictions, and mass incarceration.',
 reliability: 'verified',
 categories: ['Criminal Justice', 'Civil Rights']
 },
 {
 id: '45',
 name: 'The Sentencing Project',
 type: 'nonprofit',
 url: 'https://www.sentencingproject.org',
 description: 'Mass incarceration data, racial disparities in sentencing, and criminal justice reform research.',
 reliability: 'verified',
 categories: ['Criminal Justice', 'Civil Rights']
 },
 {
 id: '46',
 name: 'Climate Accountability Institute',
 type: 'academic',
 url: 'https://climateaccountability.org',
 description: 'Corporate climate responsibility tracking, carbon major database, and fossil fuel industry analysis.',
 reliability: 'verified',
 categories: ['Environmental', 'Corporate']
 },
 {
 id: '47',
 name: 'National Security Archive (GWU)',
 type: 'academic',
 url: 'https://nsarchive.gwu.edu',
 description: 'Declassified government documents obtained through FOIA, covering intelligence, foreign policy, and nuclear issues.',
 reliability: 'verified',
 categories: ['Government', 'Intelligence', 'Documents']
 },
 {
 id: '48',
 name: 'Death Penalty Information Center',
 type: 'nonprofit',
 url: 'https://deathpenaltyinfo.org',
 description: 'Wrongful conviction data, execution statistics, and death penalty case documentation.',
 reliability: 'verified',
 categories: ['Criminal Justice', 'Legal']
 },
 {
 id: '49',
 name: 'ProPublica',
 type: 'media',
 url: 'https://www.propublica.org',
 description: 'Nonprofit investigative newsroom covering government accountability, corporate fraud, and public interest.',
 reliability: 'verified',
 categories: ['Media', 'Government', 'Corporate']
 },
 {
 id: '50',
 name: 'Center for Investigative Reporting (Reveal)',
 type: 'media',
 url: 'https://revealnews.org',
 description: 'In-depth investigations on corporate malfeasance, environmental crime, and government abuse.',
 reliability: 'established',
 categories: ['Media', 'Corporate', 'Environmental']
 },
 {
 id: '51',
 name: 'POGO (Project on Government Oversight)',
 type: 'nonprofit',
 url: 'https://www.pogo.org',
 description: 'Federal contracting fraud, military waste, and government corruption investigations.',
 reliability: 'verified',
 categories: ['Government', 'Financial']
 },
 {
 id: '52',
 name: 'Global Witness',
 type: 'nonprofit',
 url: 'https://www.globalwitness.org',
 description: 'Natural resource corruption, conflict financing, and corporate accountability investigations.',
 reliability: 'established',
 categories: ['International', 'Environmental', 'Corporate']
 },
 {
 id: '53',
 name: 'Tax Justice Network',
 type: 'nonprofit',
 url: 'https://taxjustice.net',
 description: 'Corporate tax avoidance, offshore finance, and illicit financial flow tracking.',
 reliability: 'established',
 categories: ['Financial', 'Corporate', 'International']
 },
 {
 id: '54',
 name: 'Court Listener (RECAP)',
 type: 'legal',
 url: 'https://www.courtlistener.com',
 description: 'Free legal research tool with federal court opinions, oral arguments, and PACER document mirror.',
 reliability: 'verified',
 categories: ['Legal', 'Government']
 },
 {
 id: '55',
 name: 'International Criminal Court',
 type: 'legal',
 url: 'https://www.icc-cpi.int',
 description: 'War crimes prosecution documents, evidence submissions, and international criminal proceedings.',
 reliability: 'verified',
 categories: ['Legal', 'International']
 },
 {
 id: '56',
 name: 'UN Human Rights Council',
 type: 'legal',
 url: 'https://www.ohchr.org',
 description: 'International human rights monitoring, special rapporteur reports, and treaty body documentation.',
 reliability: 'verified',
 categories: ['International', 'Legal', 'Civil Rights']
 },
 {
 id: '57',
 name: 'Stanford Law School, Guantanamo Habeas Cases',
 type: 'legal',
 url: 'https://law.stanford.edu/projects/guantanamo-habeas-cases',
 description: 'Comprehensive database of Guantanamo detainee habeas corpus petitions and court filings.',
 reliability: 'verified',
 categories: ['Legal', 'Civil Rights']
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
 'Labor',
 'Documents',
 'Intelligence',
 'Criminal Justice',
 'Civil Rights',
 'International',
 'Technology',
 'Media'
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
 <div className="min-h-screen pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="mb-12"
 >
 <h1 className="text-2xl sm:text-4xl font-bold glass-text mb-4">
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
 className="bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)] p-4 mb-8"
 >
 <div className="flex flex-wrap gap-6 items-center">
 <span className="text-sm text-zinc-400">Reliability Rating:</span>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-blood-500"/>
 <span className="text-sm text-zinc-300">Verified; Primary official source</span>
 </div>
 <div className="flex items-center gap-2">
 <CheckCircle2 className="w-4 h-4 text-blood-500"/>
 <span className="text-sm text-zinc-300">Established; Reputable secondary source</span>
 </div>
 <div className="flex items-center gap-2">
 <AlertTriangle className="w-4 h-4 text-zinc-400"/>
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
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"/>
 <input
 type="text"
 placeholder="Search sources..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full bg-[rgba(0,10,28,0.85)] border border-[rgba(80,180,255,0.15)] text-white pl-10 pr-4 py-2.5 placeholder-zinc-500 focus:border-blood-500 focus:outline-none"
 />
 </div>

 {/* Category Filter */}
 <div className="flex items-center gap-2">
 <Filter className="w-5 h-5 text-zinc-500"/>
 <select
 value={selectedCategory}
 onChange={(e) => setSelectedCategory(e.target.value)}
 className="bg-[rgba(0,10,28,0.85)] border border-[rgba(80,180,255,0.15)] text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
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
 : 'bg-[rgba(0,10,28,0.85)] border-[rgba(80,180,255,0.15)] text-zinc-400 hover:border-zinc-600'
 }`}
 title={typeLabels[type]}
 >
 <Icon className="w-5 h-5"/>
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
 className="bg-[rgba(0,10,28,0.82)] border border-[rgba(80,180,255,0.15)] p-5 hover:border-[rgba(60,160,255,0.18)] transition-colors"
 >
 <div className="flex items-start justify-between mb-3">
 <div className="flex items-center gap-3">
 <div className="bg-[rgba(0,12,32,0.85)] p-2">
 <Icon className="w-5 h-5 text-zinc-400"/>
 </div>
 <div>
 <h3 className="text-white font-semibold">{source.name}</h3>
 <span className="text-xs text-zinc-500">{typeLabels[source.type]}</span>
 </div>
 </div>
 <CheckCircle2 
 className={`w-5 h-5 ${
 source.reliability === 'verified' 
 ? 'text-blood-500'
 : source.reliability === 'established'
 ? 'text-blood-500'
 : 'text-zinc-400'
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
 className="px-2 py-0.5 bg-[rgba(0,12,32,0.85)] text-zinc-400 text-xs"
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
 <ExternalLink className="w-5 h-5"/>
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
 <Search className="w-12 h-12 text-zinc-700 mx-auto mb-4"/>
 <p className="text-zinc-400">No sources match your filters</p>
 </motion.div>
 )}

 {/* Additional Resources */}
 <motion.section
 initial={{ opacity: 0 }}
 whileInView={{ opacity: 1 }}
 viewport={{ once: true }}
 className="mt-16 pt-8 border-t border-[rgba(80,180,255,0.15)]"
 >
 <h2 className="text-2xl font-bold glass-text mb-6">How We Protect Sources</h2>
 <div className="grid md:grid-cols-3 gap-4">
 <div className="bg-zinc-900/30 border border-[rgba(60,160,255,0.08)] p-5">
 <Lock className="w-8 h-8 text-blood-500 mb-3"/>
 <h3 className="text-white font-semibold mb-2">Encryption</h3>
 <p className="text-zinc-500 text-sm">
 All communications use end-to-end encryption. We accept documents via SecureDrop.
 </p>
 </div>
 <div className="bg-zinc-900/30 border border-[rgba(60,160,255,0.08)] p-5">
 <Shield className="w-8 h-8 text-blood-500 mb-3"/>
 <h3 className="text-white font-semibold mb-2">Anonymity</h3>
 <p className="text-zinc-500 text-sm">
 We never require identification. Our systems are designed to protect anonymity.
 </p>
 </div>
 <div className="bg-zinc-900/30 border border-[rgba(60,160,255,0.08)] p-5">
 <Eye className="w-8 h-8 text-blood-500 mb-3"/>
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
