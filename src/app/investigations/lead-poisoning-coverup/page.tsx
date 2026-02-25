'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Lead Poisoning Cover-Up',
  subtitle: 'Industry Knew Since the 1920s  -  Leaded Gas, Paint, and Water Poisoned Millions for Profit',
  severity: 'critical',
  status: 'CONFIRMED - INDUSTRY DOCUMENTS EXPOSED',
  summary: 'The lead industry  -  led by companies including Ethyl Corporation, National Lead Company (Dutch Boy), Lead Industries Association, and oil giants  -  orchestrated one of the longest-running corporate cover-ups in American history. Internal documents show the industry knew lead was toxic to humans as early as the 1920s, yet spent decades promoting leaded gasoline, lead paint, and lead plumbing while systematically attacking scientists who documented the health effects. Lead exposure has been linked to reduced IQ, behavioral disorders, organ damage, and death  -  with children and communities of color disproportionately affected. An estimated 170 million Americans were overexposed to lead from leaded gasoline alone. Despite the phase-out of leaded gas in 1996 and lead paint in 1978, millions of American homes still contain lead paint, and cities like Flint, Michigan and Newark, New Jersey continue to discover lead-contaminated water systems. The industry spent over a century prioritizing profits over the health of millions.',
  keyFigures: [
    { name: 'Thomas Midgley Jr.', role: 'Inventor of tetraethyl lead gasoline additive  -  knew of its toxicity', href: '/entities/individuals/thomas-midgley', status: 'Deceased (1944)' },
    { name: 'Charles Kettering', role: 'GM Research VP who promoted leaded gasoline despite knowing health risks', href: '/entities/individuals/charles-kettering', status: 'Deceased (1958)' },
    { name: 'Robert Kehoe', role: 'Industry-funded scientist who defended lead safety for decades', href: '/entities/individuals/robert-kehoe', status: 'Deceased (1992)' },
    { name: 'Clair Patterson', role: 'Caltech geochemist who proved lead contamination was man-made and fought industry', href: '/entities/individuals/clair-patterson', status: 'Deceased (1995)' },
    { name: 'Herbert Needleman', role: 'Researcher who proved low-level lead exposure harmed children\'s IQ  -  industry tried to destroy his career', href: '/entities/individuals/herbert-needleman', status: 'Deceased (2017)' },
    { name: 'Felix Wormser', role: 'Lead Industries Association Secretary who orchestrated industry defense', href: '/entities/individuals/felix-wormser', status: 'Deceased' },
    { name: 'J.C. Robert', role: 'Ethyl Corporation executive who promoted leaded gasoline safety claims', href: '/entities/individuals/jc-robert', status: 'Deceased' },
    { name: 'Alice Hamilton', role: 'Harvard physician who documented lead poisoning in workers in the 1910s-1920s', href: '/entities/individuals/alice-hamilton', status: 'Deceased (1970)' },
    { name: 'Marc Edwards', role: 'Virginia Tech engineer who exposed Flint, Michigan water contamination', href: '/entities/individuals/marc-edwards', status: 'Active' },
    { name: 'Mona Hanna-Attisha', role: 'Flint pediatrician who documented elevated blood lead levels in children', href: '/entities/individuals/mona-hanna-attisha', status: 'Active' },
  ],
  timeline: [
    { date: '1786', event: 'Benjamin Franklin writes letter warning about the dangers of lead poisoning' },
    { date: '1897', event: 'Australian doctors document lead paint poisoning in children eating paint chips' },
    { date: '1921', event: 'Thomas Midgley Jr. at GM discovers tetraethyl lead as antiknock gasoline additive' },
    { date: '1924', event: 'Five workers die and 35 are hospitalized at Standard Oil\'s TEL production plant in New Jersey' },
    { date: '1925', event: 'Surgeon General holds conference on leaded gasoline  -  industry promises to study safety, delays regulation' },
    { date: '1928', event: 'Lead Industries Association formed to promote lead products and combat regulation' },
    { date: '1943', event: 'LIA begins campaign to blame "slum conditions" rather than lead paint for childhood poisoning' },
    { date: '1954', event: 'LIA publishes manual for defending against lead paint lawsuits', count: '' },
    { date: '1965', event: 'Clair Patterson publishes groundbreaking paper proving atmospheric lead contamination is man-made' },
    { date: '1966', event: 'Lead industry successfully pressures US Public Health Service to remove Patterson from advisory panel' },
    { date: '1971', event: 'Lead-Based Paint Poisoning Prevention Act passed  -  industry continues selling lead paint for exterior use' },
    { date: '1978', event: 'Consumer Product Safety Commission bans lead paint in residential applications' },
    { date: '1979', event: 'Herbert Needleman publishes landmark study linking low-level lead exposure to IQ deficits in children' },
    { date: '1986', event: 'Safe Drinking Water Act amendments ban lead in drinking water systems' },
    { date: '1991', event: 'EPA Lead and Copper Rule established for public water systems' },
    { date: '1996', event: 'Leaded gasoline banned for on-road vehicles in the United States' },
    { date: '2014-2015', event: 'Flint, Michigan water crisis reveals ongoing lead contamination in US water infrastructure' },
    { date: '2021', event: 'Bipartisan Infrastructure Law allocates $15 billion for lead service line replacement nationwide' },
  ],
  legalOutcomes: [
    { defendant: 'Lead Paint Manufacturers (RI case)', charge: 'Public nuisance  -  lead paint in Rhode Island homes', outcome: 'Jury verdict for state overturned  -  state supreme court threw out public nuisance theory' },
    { defendant: 'NL Industries (formerly National Lead)', charge: 'Childhood lead poisoning from lead paint products', outcome: 'Settled some individual cases  -  never held broadly liable' },
    { defendant: 'Sherwin-Williams, ConAgra, NL Industries (CA)', charge: 'Public nuisance  -  lead paint in California homes', outcome: 'Ordered to pay $1.15B for lead paint abatement in 10 California counties (reduced on appeal to $305M)' },
    { defendant: 'Ethyl Corporation', charge: 'Marketing known toxic product (leaded gasoline)', outcome: 'Never prosecuted  -  eventually phased out product after regulation' },
    { defendant: 'Lead Industries Association', charge: 'Conspiracy to conceal health hazards of lead products', outcome: 'Dissolved  -  some architects found liable in individual lawsuits' },
    { defendant: 'Michigan Officials (Flint crisis)', charge: 'Involuntary manslaughter, willful neglect of duty', outcome: 'Charges filed then dropped, refiled  -  cases largely stalled' },
    { defendant: 'DuPont / GM', charge: 'Knowledge of TEL toxicity during development', outcome: 'No criminal prosecution despite documented worker deaths' },
    { defendant: 'Multiple Paint Companies', charge: 'Baltimore, Milwaukee, St. Louis childhood lead poisoning suits', outcome: 'Various settlements  -  total industry liability fraction of harm caused' },
  ],
  charges: [
    { statute: '15 U.S.C. § 1261 - Federal Hazardous Substances Act', description: 'Manufacturing and selling products known to contain hazardous levels of lead', count: 'Millions of homes with lead paint, billions of gallons of leaded gas' },
    { statute: '42 U.S.C. § 4851 - Residential Lead-Based Paint Hazard Reduction Act', description: 'Failure to disclose known lead hazards in residential properties', count: '24 million US homes still contain lead paint' },
    { statute: '18 U.S.C. § 1001 - False Statements', description: 'Industry systematically misrepresented safety of lead products to government agencies', count: 'Decades of documented deception' },
    { statute: '18 U.S.C. § 371 - Conspiracy', description: 'Industry-wide conspiracy through Lead Industries Association to suppress health research and attack scientists', count: '70+ years of coordinated suppression' },
    { statute: 'RICO - 18 U.S.C. § 1961', description: 'Pattern of racketeering through systematic fraud, witness tampering, and obstruction of research', count: 'Multi-decade enterprise across companies' },
    { statute: 'Safe Drinking Water Act - 42 U.S.C. § 300f', description: 'Ongoing lead contamination of public water systems', count: 'Millions of lead service lines still in use' },
    { statute: '18 U.S.C. § 1111 - Manslaughter', description: 'Continued sale of products known to cause death, particularly in children', count: 'Estimated 5,000+ annual deaths from lead exposure at peak' },
    { statute: 'FTC Act - 15 U.S.C. § 45', description: 'False and deceptive advertising of lead paint as safe for children\'s rooms', count: 'Dutch Boy and others marketed paint for nurseries' },
  ],
  coverup: [
    'The Lead Industries Association maintained a "Lead Hygiene and Safety" campaign for decades that actively promoted lead products as safe while suppressing contrary research',
    'Industry-funded researcher Robert Kehoe established an artificially high "threshold" for lead poisoning that allowed ongoing exposure while appearing scientifically legitimate',
    'When Clair Patterson proved lead contamination was industrial and not natural, the lead industry successfully pressured his funding sources and had him removed from advisory panels',
    'Herbert Needleman was subjected to an industry-orchestrated campaign to discredit his research  -  including anonymous complaints to his university and demands for his raw data',
    'The Lead Industries Association published an internal manual in 1954 instructing member companies on how to defend against lead paint lawsuits and blame parents for childhood poisoning',
    'Dutch Boy paint company marketed lead paint with images of children and advertised it as safe for nurseries, knowing it was toxic to children who ingested paint chips',
    'Standard Oil and GM suppressed information about the 1924 New Jersey factory where five workers died and 35 were hospitalized from tetraethyl lead exposure',
    'The lead industry successfully delayed the phase-out of leaded gasoline for decades by funding doubt-manufacturing research similar to tobacco industry tactics',
    'After lead paint was banned, the industry fought against remediation requirements, arguing that the cost of removing lead paint from homes was excessive',
  ],
  sources: [
    { title: 'Gerald Markowitz & David Rosner  -  Deceit and Denial: The Deadly Politics of Industrial Pollution', url: 'https://www.ucpress.edu/book/9780520275829/deceit-and-denial', date: '2013' },
    { title: 'Herbert Needleman  -  Low-Level Lead Exposure and Children\'s IQ (NEJM)', url: 'https://www.nejm.org/doi/full/10.1056/NEJM197903293001301', date: '1979' },
    { title: 'Clair Patterson  -  Contaminated and Natural Lead Environments of Man', url: 'https://authors.library.caltech.edu/25024/1/Patterson_1965.pdf', date: '1965' },
    { title: 'CDC  -  Lead Poisoning Prevention Program', url: 'https://www.cdc.gov/nceh/lead/', date: 'Ongoing' },
    { title: 'NRDC  -  Lead Pipes and Environmental Justice', url: 'https://www.nrdc.org/stories/lead-pipes-are-widespread-and-used-every-state', date: '2021' },
    { title: 'Christian Warren  -  Brush with Death: A Social History of Lead Poisoning', url: 'https://www.press.jhu.edu/books/title/7468/brush-death', date: '2000' },
    { title: 'Mona Hanna-Attisha  -  What the Eyes Don\'t See (Flint Water Crisis)', url: 'https://www.penguinrandomhouse.com/books/558047/what-the-eyes-dont-see-by-mona-hanna-attisha/', date: '2018' },
    { title: 'EPA  -  Lead Regulations and Guidance', url: 'https://www.epa.gov/lead/lead-regulations', date: 'Ongoing' },
  ],
};

export default function LeadPoisoningPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4" />Back to Investigations</Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up</h2>
          <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-red-950/20 border border-red-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500" />Key Figures</h2>
              <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold text-white">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Applicable Charges &amp; Statutes</h2>
              <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-red-400 mt-1">{charge.count}</p></div>))}</div>
            </motion.div>
          </div>
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500" />Timeline</h3>
              <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-zinc-800"><div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" /><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500" />Legal Outcomes</h3>
              <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800"><p className="font-bold text-white text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" /><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
