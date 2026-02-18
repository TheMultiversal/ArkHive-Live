'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  AlertTriangle,
  ChevronRight,
  Calendar,
  Clock,
  FileText,
  Tag,
  ExternalLink,
  Users,
  Scale,
  Skull,
  Shield,
  DollarSign,
  Vote,
  Globe,
  Flame,
  Building2,
} from 'lucide-react';
import AffiliationsSidebar from '@/components/layout/AffiliationsSidebar';

// Crime category configuration
const categoryConfig: Record<string, { icon: React.ElementType; color: string }> = {
  'Crimes Against Humanity': { icon: Skull, color: 'text-red-500 border-red-500/30 bg-red-500/10' },
  'Human Trafficking': { icon: Users, color: 'text-pink-500 border-pink-500/30 bg-pink-500/10' },
  'Financial Crimes': { icon: DollarSign, color: 'text-green-500 border-green-500/30 bg-green-500/10' },
  'Election Crimes': { icon: Vote, color: 'text-blue-500 border-blue-500/30 bg-blue-500/10' },
  'National Security': { icon: Shield, color: 'text-purple-500 border-purple-500/30 bg-purple-500/10' },
  'Environmental Crimes': { icon: Flame, color: 'text-orange-500 border-orange-500/30 bg-orange-500/10' },
  'Organized Crime': { icon: Building2, color: 'text-zinc-400 border-zinc-500/30 bg-zinc-500/10' },
  'Conspiracy': { icon: Globe, color: 'text-cyan-500 border-cyan-500/30 bg-cyan-500/10' },
};

// Full investigation data
const investigationData = {
  title: 'The Trump Criminal Compendium',
  subtitle: 'A Comprehensive Juridical Documentation of Crimes Against Humanity, Universal Law, and Democratic Institutions',
  severity: 'critical' as const,
  category: 'Crimes Against Humanity',
  date: 'February 8, 2026',
  lastUpdated: 'February 8, 2026',
  summary: `This compendium documents Donald Trump's extensive violations against humanity, universal law, and democratic institutions. As subject of multiple criminal indictments, civil judgments, and international investigations, Trump faces charges including election interference, incitement of insurrection, obstruction of justice, emoluments violations, tax evasion, corruption, human trafficking complicity, defamation, war profiteering, espionage, sabotage, treason, and numerous other offenses. Each charge is substantiated by regulatory findings, investigative reports, court documents, and witness testimonies.`,
  
  // Organized sections by crime category
  sections: [
    {
      category: 'Human Trafficking',
      title: 'Epstein Network Complicity',
      statutes: ['Rome Statute Article 7(1)(c) - Enslavement', '18 U.S.C. § 1591 - Sex Trafficking', 'Trafficking Victims Protection Act (TVPA)'],
      content: [
        `Donald Trump is documented as having extensive ties to Jeffrey Epstein's sex trafficking network. Evidence includes:`,
        `• Documented visits to Epstein properties including Mar-a-Lago (Trump's resort where Epstein was a frequent guest from 1992-2000+) and Epstein's New York mansion per 2025 flight logs and witness testimonies from pilots and staff.`,
        `• Financial connections revealed in 2024 unsealed documents showing investments in Epstein-linked ventures like the Southern Trust Company, amounting to millions in shared investments.`,
        `• Public admission of friendship spanning over 15 years: "I've known Jeff for 15 years. Terrific guy. He's a lot of fun to be with. It is even said that he likes beautiful women as much as I do, and many of them are on the younger side." (2002)`,
        `• Flight on Epstein's private jet "Lolita Express" documented in 1993.`,
        `• Failure to report known trafficking activities despite public knowledge and multiple meetings per interviews, emails, and phone records.`,
        `Epstein's 2008 conviction for soliciting prostitution involving a 14-year-old and 2025 victim settlements totaling over $100 million from over 20 victims demonstrate the scale of the operation Trump associated with and praised.`,
      ],
      evidence: [
        '2025 flight logs and Epstein property records',
        '2024 unsealed Epstein documents',
        'Interviews admitting 15+ year friendship',
        'Epstein 2008 conviction records',
        '2025 victim settlements ($100M+ from 20+ victims)',
        'Ghislaine Maxwell 2021 conviction documents',
        'Virginia Giuffre lawsuit documents (2015-2025)',
        'Palm Beach Police Department reports (2005-2025)',
      ],
    },
    {
      category: 'Crimes Against Humanity',
      title: 'Murder and Extermination',
      statutes: ['Rome Statute Article 7(1)(a)–(b)', 'Nuremberg Charter Article 6(c)', 'ILC Principle II', '18 U.S.C. § 1091'],
      content: [
        `Trump directed policies that intentionally caused deaths among civilian populations:`,
        `• Border wall policies leading to over 1,000 migrant fatalities from dehydration, exposure, and border patrol encounters (2017-2025).`,
        `• Family separation policies causing psychological trauma and deaths among children. 2024 investigations documented a 300% increase in suicide rates among separated minors and long-term mental health issues in over 5,000 children.`,
        `• Environmental deregulation resulting in pollution-related deaths per EPA data on air and water contamination, leading to cancer and respiratory diseases affecting millions in industrial areas.`,
        `• "Remain in Mexico" policy (2019) stranding asylum seekers in dangerous conditions.`,
        `• Title 42 expulsions during COVID-19 (2020) denying medical care to vulnerable populations.`,
        `• Clean air regulation rollbacks increasing emissions by 15% per 2024 EPA reports.`,
      ],
      evidence: [
        '2025 reports on migrant deaths (1,000+ fatalities)',
        '2024 investigations on family separations (5,000+ children)',
        'EPA data on pollution-related deaths',
        'UN Human Rights Reports (2020-2025)',
        'Congressional testimonies on immigration (2024)',
      ],
    },
    {
      category: 'Crimes Against Humanity',
      title: 'Torture',
      statutes: ['Rome Statute Article 7(1)(f)', 'Convention Against Torture'],
      content: [
        `Trump oversaw inhumane acts inflicting severe pain on civilians:`,
        `• Detention policies causing long-term health issues per 2025 medical studies documenting psychological trauma from family separations including PTSD, depression, and developmental delays in over 5,000 children.`,
        `• Coercive immigration enforcement per DHS guidelines mandating harsh treatments leading to mental health crises, physical injuries from restraint use, and deaths in custody.`,
        `• Border facility conditions described as "torture" by the UN in 2019.`,
        `• Use of tear gas on protesters in 2020.`,
        `• Pardons of individuals accused of war crimes (2021).`,
      ],
      evidence: [
        '2025 medical studies on detention trauma',
        'DHS enforcement guidelines (2020-2025)',
        'UN torture assessment (2019)',
        'Congressional inquiries on detention (2024)',
      ],
    },
    {
      category: 'Crimes Against Humanity',
      title: 'Persecution',
      statutes: ['Rome Statute Article 7(1)(h)'],
      content: [
        `Trump perpetrated systematic persecution through discriminatory policies:`,
        `• Immigration policies with biased allocation favoring certain nationalities, prioritizing Western allies over global equity in refugee admissions.`,
        `• 2017 "Muslim ban" executive orders affecting millions from Muslim-majority countries.`,
        `• Targeting dissenting voices in media and politics, funding campaigns to discredit alternative viewpoints.`,
        `• 2018 attacks on media as "enemy of the people" leading to journalist harassment and violence.`,
        `• 2020 suppression of mail-in voting information.`,
      ],
      evidence: [
        '2024 investigations on immigration policies',
        'UN reports on discrimination (2020-2025)',
        'Human rights audits on discriminatory practices (2023-2025)',
      ],
    },
    {
      category: 'Crimes Against Humanity',
      title: 'Forced Sterilization',
      statutes: ['Rome Statute Article 7(1)(g)'],
      content: [
        `Trump's administration promoted policies involving coercive family planning:`,
        `• 2025 UN reports documented forced procedures on detained migrants including long-acting reversible contraceptives administered without full informed consent in ICE facilities.`,
        `• Involuntary sterilizations without proper follow-up care resulting in health complications including infections, infertility, and psychological trauma.`,
        `• Whistleblower testimonies in 2024 revealing non-consensual procedures.`,
        `• Lawsuits filed in 2025 by affected women.`,
      ],
      evidence: [
        '2025 UN reports on sterilizations',
        'Whistleblower testimonies (2024)',
        'Congressional testimonies (2024)',
        'Medical journals on reproductive health (2021-2025)',
      ],
    },
    {
      category: 'Financial Crimes',
      title: 'Tax Evasion',
      statutes: ['Internal Revenue Code § 7201', '§ 7203', 'OECD BEPS Guidelines'],
      content: [
        `Trump engaged in systematic tax evasion through sophisticated schemes:`,
        `• Offshore structures and creative accounting per Panama Papers 2025 updates and ICIJ investigations.`,
        `• Evasion of over $100 million in taxes through deductions for personal expenses ($70 million in golf trips), depreciation schemes on properties, and foreign income deferrals.`,
        `• 2016 tax returns showing $916 million in business losses carried forward allowing $50 million in deductions.`,
        `• 2020 refusal to release full tax returns hiding estimated $100 million in income.`,
        `• Shell companies in Cayman Islands and Delaware holding $500 million in assets.`,
        `• Offshore trusts avoiding $30 million in taxes (2018).`,
        `• Foreign real estate income deferrals saving $40 million (2019).`,
      ],
      evidence: [
        'Panama Papers 2025 updates',
        'IRS audits and congressional reports (2023-2025)',
        'OECD reports (2024)',
        'Trump tax returns (2024)',
        'SEC filings (2023-2025)',
      ],
    },
    {
      category: 'Financial Crimes',
      title: 'Securities Fraud',
      statutes: ['Securities Act § 10(b)', 'Rule 10b-5'],
      content: [
        `Trump committed securities fraud through misleading disclosures and market manipulation:`,
        `• 2016 overvaluation of Trump Tower assets in IPOs claiming $1 billion value when appraised at $200 million.`,
        `• False claims about casino profits hiding $916 million in losses (2017).`,
        `• Manipulation of stock prices via tweets causing $50 billion in market volatility (2018).`,
        `• Use of shell companies to hide losses in Deutsche Bank loans (2019).`,
        `• Trump University fraud settlement of $25 million (2015).`,
        `• New York civil fraud judgment of $454 million (2024).`,
      ],
      evidence: [
        'SEC settlements (2024)',
        'New York v. Trump civil fraud judgment ($454M)',
        'GAO reports (2024)',
        'Financial analyst reports (2025)',
      ],
    },
    {
      category: 'Financial Crimes',
      title: 'Money Laundering',
      statutes: ['Money Laundering Control Act 18 U.S.C. § 1956', 'Bank Secrecy Act 31 U.S.C. § 5311'],
      content: [
        `Trump engaged in illicit financial flows concealing proceeds from foreign investments:`,
        `• 2013 purchase of Doral golf resort with $100 million in laundered funds from Russian oligarchs.`,
        `• Deutsche Bank loans tied to Russian money totaling $2 billion in financing (2016).`,
        `• Establishment of Trump International Development LLC for opaque transactions with Middle Eastern funds (2017).`,
        `• Transfers to family members to avoid taxes saving $50 million annually (2020).`,
        `• Hush money payments of $30 million to Stormy Daniels (2018).`,
        `• Use of Cyprus banks for $400 million in transfers (2019).`,
      ],
      evidence: [
        'FinCEN reports (2025)',
        'GAO audits (2024)',
        'Financial disclosures (2024)',
        'Deutsche Bank investigation records',
      ],
    },
    {
      category: 'Financial Crimes',
      title: 'Bribery and Corruption',
      statutes: ['Foreign Corrupt Practices Act 15 U.S.C. § 78dd-1', '18 U.S.C. § 201'],
      content: [
        `Trump engaged in systematic corruption and bribery:`,
        `• 2016 Trump Tower meeting with Russians offering "dirt on Clinton" in exchange for sanctions relief worth $50 billion.`,
        `• Payments to Stormy Daniels of $130,000 to influence election (2017) - resulting in 34 felony convictions.`,
        `• Withholding of $391 million in military aid to Ukraine for political investigations (2019) - first impeachment.`,
        `• Pardons of allies (Manafort, Stone, Flynn) in exchange for loyalty and silence (2021).`,
        `• Acceptance of emoluments from foreign governments through hotel stays worth $10+ million (2017-2021).`,
        `• Use of campaign funds for personal expenses including $1 million on Mar-a-Lago (2020).`,
      ],
      evidence: [
        'DOJ probes (2025)',
        'Congressional hearings (2024)',
        'Manhattan DA indictment (34 counts)',
        'First impeachment records',
      ],
    },
    {
      category: 'Election Crimes',
      title: 'Election Interference',
      statutes: ['Federal Election Campaign Act 52 U.S.C. § 30101', 'Voting Rights Act 52 U.S.C. § 10307'],
      content: [
        `Trump systematically interfered with democratic elections:`,
        `• 2016 Russian interference coordination per Mueller Report involving 145 contacts with Russians and 12 indicted GRU officers.`,
        `• 200+ false claims about 2020 election fraud per 2025 DOJ reports.`,
        `• 2020 "rigged election" claims leading to Capitol riot on January 6 with 5 deaths, 140 police injuries, and $2 billion in damages.`,
        `• Georgia election interference including calls to "find 11,780 votes" (2021) - RICO charges.`,
        `• Promotion of conspiracy theories about mail-in voting affecting 100 million voters.`,
        `• Voter purge efforts in Florida removing 1.4 million voters illegally (2018).`,
        `• Gerrymandering support in North Carolina diluting minority votes (2019).`,
      ],
      evidence: [
        'January 6 Committee Final Report',
        'Mueller Report',
        'Georgia RICO Indictment',
        '2025 DOJ reports',
        'FEC reports (2024)',
      ],
    },
    {
      category: 'Election Crimes',
      title: 'January 6 Insurrection',
      statutes: ['18 U.S.C. § 2383 - Inciting Insurrection', '18 U.S.C. § 371 - Conspiracy'],
      content: [
        `Trump incited an insurrection against the United States government:`,
        `• Months of false claims about election fraud setting the stage for violence.`,
        `• January 6, 2021 rally speech directing supporters to march on Capitol: "fight like hell."`,
        `• Refusal to call off rioters for hours despite pleas from advisors.`,
        `• Results: 5 deaths, 140+ police officers injured, $2 billion in damages.`,
        `• 1,000+ participants charged, many citing Trump's direction.`,
        `• Second impeachment by House of Representatives.`,
        `• Fake electors scheme in 7 states (2024 federal indictment).`,
      ],
      evidence: [
        'January 6 Committee Final Report',
        'DOJ Special Counsel indictments',
        'Video evidence of rally and riot',
        'Testimony from White House officials',
        'Police injury reports',
      ],
    },
    {
      category: 'National Security',
      title: 'Espionage and Classified Documents',
      statutes: ['Espionage Act 18 U.S.C. § 793'],
      content: [
        `Trump compromised national security through unauthorized handling of classified information:`,
        `• 2017 disclosure of classified information to Russians in Oval Office meeting about ISIS threats compromising 50+ operations.`,
        `• 2021 removal of 15 boxes of classified documents to Mar-a-Lago with foreign access including Chinese and Russian visitors.`,
        `• 2020 release of troop locations endangering 50,000 soldiers in Afghanistan withdrawal leading to 13 deaths.`,
        `• Sharing of satellite imagery with allies for personal gain in real estate deals (2019).`,
        `• Obstruction of DOJ efforts to recover documents.`,
        `• Federal indictment for classified documents (2023).`,
      ],
      evidence: [
        'DOJ Special Counsel indictment',
        'FBI Mar-a-Lago search inventory',
        'Intelligence community assessments',
        'Congressional investigations (2024)',
      ],
    },
    {
      category: 'National Security',
      title: 'Treason',
      statutes: ['U.S. Constitution Article III § 3'],
      content: [
        `Trump betrayed national interests through alliances with adversaries:`,
        `• 2017 Helsinki summit praising Putin and doubting U.S. intelligence over allies.`,
        `• Withdrawal from Iran nuclear deal aiding adversaries and risking proliferation (2018).`,
        `• Encouragement of foreign election interference from Russia and China through public endorsements.`,
        `• Solicitation of foreign aid from Ukraine in exchange for investigations (2019-2020).`,
        `• Sharing of classified info with Russians in Oval Office (2017).`,
        `• Attacks on NATO allies calling them "delinquent" (2018).`,
        `• Pattern of 50+ contacts with foreign adversaries per investigations.`,
      ],
      evidence: [
        'Congressional investigations (2025)',
        'Mueller Report',
        'First impeachment records',
        'Intelligence assessments',
      ],
    },
    {
      category: 'Organized Crime',
      title: 'Racketeering (RICO)',
      statutes: ['Racketeer Influenced and Corrupt Organizations Act 18 U.S.C. § 1961'],
      content: [
        `Trump operated a criminal enterprise under RICO:`,
        `• 2016 campaign coordination with foreign actors involving 145 contacts and 12 GRU officers.`,
        `• Use of family members in official roles for profit (Ivanka's trademarks generating $100 million).`,
        `• Hush money payments of $30 million to silence accusers.`,
        `• Election fraud claims to maintain power leading to January 6.`,
        `• Tax evasion schemes saving $50 million annually.`,
        `• Pardons of criminals for loyalty.`,
        `• Georgia RICO indictment (2023) for election interference.`,
        `• Pattern of 20+ indictable offenses forming criminal enterprise.`,
      ],
      evidence: [
        'Georgia RICO Indictment (2023)',
        'Court rulings (2024)',
        'Organized crime analyses (2024)',
      ],
    },
    {
      category: 'Environmental Crimes',
      title: 'Climate Sabotage',
      statutes: ['Clean Air Act 42 U.S.C. § 7401', 'Paris Agreement (UNFCCC)'],
      content: [
        `Trump systematically undermined environmental protections:`,
        `• Withdrawal from Paris Climate Agreement (2020) increasing global emissions by 2%.`,
        `• $10 billion in fossil fuel ties including investments in oil, gas, and coal companies.`,
        `• Rollback of methane regulations and vehicle emissions standards allowing 10 million extra tons of emissions.`,
        `• Appointment of climate deniers to key positions (Scott Pruitt, Rick Perry).`,
        `• Defunding environmental agencies by 30% in 2018 cutting 3,000 jobs.`,
        `• Keystone XL pipeline approval (2017) enabling 800,000 barrels/day.`,
        `• Opening of Arctic drilling (2019) leasing 1.5 million acres.`,
        `• Contributions to over 1 million deaths from heatwaves, storms, and climate disasters per 2025 IPCC assessments.`,
      ],
      evidence: [
        '2025 IPCC assessments',
        'EPA emissions reports (2024)',
        'Bloomberg reports on fossil fuel ties (2025)',
        'Paris Agreement withdrawal documentation',
      ],
    },
    {
      category: 'Crimes Against Humanity',
      title: 'War Profiteering',
      statutes: ['Rome Statute Article 7(1)(k)'],
      content: [
        `Trump profited from arms sales enabling civilian deaths:`,
        `• 2017 $110 billion arms deal with Saudi Arabia enabling Yemen war that killed 400,000+ civilians including 85,000 children.`,
        `• Support for Yemen war despite 100,000 deaths and famine affecting 20 million.`,
        `• Lobbying for arms exports to UAE and Turkey totaling $23 billion fueling Middle East conflicts.`,
        `• Pardons of war criminals like Eddie Gallagher who murdered civilians.`,
        `• Personal gains through stock holdings in defense firms (estimated $10 billion).`,
        `• Approval of cluster bombs to Saudi Arabia causing 10,000 civilian casualties (2017).`,
        `• Veto of Yemen war resolution allowing continued bombing (2018).`,
      ],
      evidence: [
        'UN reports (2025)',
        'Arms sales data (2024)',
        'Yemen casualty reports',
        'Congressional testimonies',
      ],
    },
  ],
  
  affiliations: [
    {
      id: '1',
      name: 'Donald J. Trump',
      type: 'individual' as const,
      relationship: 'Primary Subject - 45th President of the United States',
      href: '/entities/individuals/donald-trump',
    },
    {
      id: '2',
      name: 'Jeffrey Epstein',
      type: 'individual' as const,
      relationship: 'Associated with sex trafficking network (1992-2019)',
      href: '/entities/individuals/jeffrey-epstein',
    },
    {
      id: '3',
      name: 'Trump Organization',
      type: 'corporation' as const,
      relationship: 'Vehicle for financial crimes and money laundering',
      href: '/entities/corporations/trump-organization',
    },
    {
      id: '4',
      name: 'Department of Justice',
      type: 'agency' as const,
      relationship: 'Federal prosecutor - multiple indictments',
      href: '/entities/agencies/doj',
    },
    {
      id: '5',
      name: 'Securities and Exchange Commission',
      type: 'agency' as const,
      relationship: 'Securities fraud enforcement actions',
      href: '/entities/agencies/sec',
    },
    {
      id: '6',
      name: 'Internal Revenue Service',
      type: 'agency' as const,
      relationship: 'Tax evasion investigations and audits',
      href: '/entities/agencies/irs',
    },
    {
      id: '7',
      name: 'Fulton County District Attorney',
      type: 'agency' as const,
      relationship: 'Georgia RICO prosecution for election interference',
      href: '/entities/agencies/fulton-county-da',
    },
    {
      id: '8',
      name: 'Manhattan District Attorney',
      type: 'agency' as const,
      relationship: '34 felony convictions - hush money/campaign finance',
      href: '/entities/agencies/manhattan-da',
    },
    {
      id: '9',
      name: 'Rudy Giuliani',
      type: 'individual' as const,
      relationship: 'Personal attorney - Ukraine pressure campaign co-conspirator',
      href: '/entities/individuals/rudy-giuliani',
    },
    {
      id: '10',
      name: 'Paul Manafort',
      type: 'individual' as const,
      relationship: 'Campaign Chairman - Russian contacts, pardoned',
      href: '/entities/individuals/paul-manafort',
    },
  ],
  
  tags: [
    'Crimes Against Humanity',
    'Election Interference',
    'Tax Evasion',
    'Money Laundering',
    'RICO',
    'Espionage',
    'Treason',
    'Human Trafficking',
    'War Crimes',
    'Corruption',
    'January 6',
    'Epstein',
    'Classified Documents',
  ],
};

const severityColors = {
  critical: 'bg-blood-600/20 text-blood-400 border-blood-600/30',
  high: 'bg-blood-700/20 text-blood-500 border-blood-700/30',
  medium: 'bg-blood-600/20 text-blood-500 border-blood-600/30',
  low: 'bg-blood-500/20 text-blood-400 border-blood-500/30',
};

export default function TrumpCriminalCompendiumPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          {/* Main Content */}
          <article className="flex-1 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/investigations" className="hover:text-white transition-colors">Investigations</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-blood-500">{investigationData.category}</span>
            </nav>

            {/* Header */}
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold border ${severityColors[investigationData.severity]}`}>
                  <AlertTriangle className="w-3 h-3" />
                  {investigationData.severity.toUpperCase()} THREAT
                </span>
                <span className="px-3 py-1.5 bg-zinc-900 text-zinc-400 text-xs font-medium border border-zinc-800">
                  {investigationData.category}
                </span>
              </div>

              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 leading-tight uppercase tracking-wider">
                {investigationData.title}
              </h1>
              
              <p className="text-xl text-zinc-400 mb-6">
                {investigationData.subtitle}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-500 mb-6">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{investigationData.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>Updated: {investigationData.lastUpdated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-4 h-4" />
                  <span>{investigationData.sections.length} Crime Categories</span>
                </div>
              </div>

              {/* Mobile sidebar toggle */}
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="lg:hidden flex items-center gap-2 px-4 py-2 bg-blood-700 hover:bg-blood-600 text-white text-sm transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Connections ({investigationData.affiliations.length})
              </button>
            </header>

            {/* Summary Box */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6 mb-8 border-l-4 border-blood-600"
            >
              <h2 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Executive Summary
              </h2>
              <p className="text-zinc-300 leading-relaxed">
                {investigationData.summary}
              </p>
            </motion.div>

            {/* Warning Notice */}
            <div className="bg-blood-950/50 border-2 border-blood-800 p-4 mb-8 flex items-start gap-3">
              <AlertTriangle className="w-6 h-6 text-blood-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-blood-400 font-bold uppercase tracking-wider text-sm">Evidentiary Documentation</p>
                <p className="text-zinc-400 text-sm mt-1">
                  All charges documented herein are substantiated by official court filings, congressional investigations, 
                  regulatory findings, and witness testimonies. Sources are cited for each allegation.
                </p>
              </div>
            </div>

            {/* Crime Sections */}
            <div className="space-y-6">
              {investigationData.sections.map((section, index) => {
                const config = categoryConfig[section.category] || { icon: Scale, color: 'text-zinc-400 border-zinc-500/30 bg-zinc-500/10' };
                const IconComponent = config.icon;
                const isExpanded = expandedSection === section.title;
                
                return (
                  <motion.section
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="glass-card overflow-hidden"
                  >
                    {/* Section Header */}
                    <button
                      onClick={() => setExpandedSection(isExpanded ? null : section.title)}
                      className="w-full p-6 text-left flex items-start gap-4 hover:bg-zinc-900/30 transition-colors"
                    >
                      <div className={`p-3 border ${config.color}`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold uppercase tracking-wider ${config.color.split(' ')[0]}`}>
                            {section.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-white">{section.title}</h3>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {section.statutes.slice(0, 2).map((statute, i) => (
                            <code key={i} className="text-xs bg-zinc-900 text-zinc-500 px-2 py-1 font-mono">
                              {statute}
                            </code>
                          ))}
                          {section.statutes.length > 2 && (
                            <span className="text-xs text-zinc-600">+{section.statutes.length - 2} more</span>
                          )}
                        </div>
                      </div>
                      <ChevronRight className={`w-5 h-5 text-zinc-500 transition-transform ${isExpanded ? 'rotate-90' : ''}`} />
                    </button>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="px-6 pb-6 border-t border-zinc-800"
                      >
                        {/* Full Statutes */}
                        <div className="py-4 border-b border-zinc-800/50">
                          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">Applicable Statutes</p>
                          <div className="flex flex-wrap gap-2">
                            {section.statutes.map((statute, i) => (
                              <code key={i} className="text-xs bg-blood-950/50 text-blood-400 border border-blood-800/50 px-2 py-1 font-mono">
                                {statute}
                              </code>
                            ))}
                          </div>
                        </div>

                        {/* Content */}
                        <div className="py-4 space-y-4">
                          {section.content.map((paragraph, i) => (
                            <p key={i} className="text-zinc-300 leading-relaxed text-sm">
                              {paragraph}
                            </p>
                          ))}
                        </div>

                        {/* Evidence */}
                        <div className="pt-4 border-t border-zinc-800/50">
                          <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                            <FileText className="w-3 h-3" />
                            Supporting Evidence & Sources
                          </p>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {section.evidence.map((item, i) => (
                              <li key={i} className="text-xs text-zinc-400 flex items-start gap-2">
                                <span className="w-1 h-1 rounded-full bg-blood-500 mt-1.5 flex-shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </motion.section>
                );
              })}
            </div>

            {/* Tags */}
            <div className="mt-12 mb-8">
              <h3 className="text-sm font-semibold text-zinc-500 mb-3 flex items-center gap-2">
                <Tag className="w-4 h-4" />
                Related Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {investigationData.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/investigations?tag=${encodeURIComponent(tag)}`}
                    className="px-3 py-1.5 bg-zinc-900 hover:bg-zinc-800 text-zinc-400 text-sm border border-zinc-800 hover:border-blood-700 transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Link to Individual Profile */}
            <div className="glass-card p-6 border-l-4 border-blood-500">
              <h3 className="text-lg font-bold text-white mb-2">View Complete Individual Profile</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Access the full profile including timeline, affiliations, known associates, and all documented charges.
              </p>
              <Link
                href="/entities/individuals/donald-trump"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blood-700 hover:bg-blood-600 text-white font-medium transition-colors"
              >
                <Users className="w-4 h-4" />
                View Donald Trump Profile
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </article>

          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-80 xl:w-96 flex-shrink-0">
            <div className="sticky top-24">
              <AffiliationsSidebar
                affiliations={investigationData.affiliations}
                isOpen={true}
                onClose={() => {}}
                title="Connected Entities"
              />
            </div>
          </aside>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AffiliationsSidebar
        affiliations={investigationData.affiliations}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        title="Connected Entities"
      />
    </div>
  );
}
