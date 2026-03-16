'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: 'Agent Orange',
 subtitle: '20 Million Gallons of Toxic Herbicide Sprayed on Vietnam: 4 Million+ Exposed, Birth Defects for Generations',
 severity: 'critical',
 status: 'CONFIRMED, ONGOING HEALTH CRISIS',
 summary: 'Between 1962 and 1971, the United States military sprayed approximately 20 million gallons of tactical herbicides (primarily Agent Orange containing the highly toxic dioxin TCDD) over 4.5 million acres of Vietnam, Laos, and Cambodia during Operation Ranch Hand. The goal was to destroy forest cover and crops used by the Viet Cong, but the campaign exposed an estimated 4.8 million Vietnamese and hundreds of thousands of American, Australian, New Zealand, and South Korean troops to one of the most toxic substances ever created. Agent Orange has been linked to cancers, diabetes, Parkinson\'s disease, and severe birth defects that continue to affect third and fourth generation Vietnamese. US chemical manufacturers including Dow Chemical and Monsanto knew about dioxin contamination but concealed the risks. While US veterans eventually received some compensation, the Vietnamese victims have received almost nothing.',
 keyFigures: [
 { name: 'Robert McNamara', role: 'Secretary of Defense who authorized Operation Ranch Hand herbicide campaign', href: '/entities/individuals/robert-mcnamara', status: 'Deceased (2009)' },
 { name: 'Alvin Young', role: 'Air Force scientist and Agent Orange consultant, accused of minimizing health risks', href: '/entities/individuals/alvin-young', status: 'Active' },
 { name: 'Admiral Elmo Zumwalt Jr.', role: 'Navy commander who ordered Agent Orange spraying, his own son died from exposure', href: '/entities/individuals/elmo-zumwalt', status: 'Deceased (2000)' },
 { name: 'Elmo Zumwalt III', role: 'Navy lieutenant exposed to Agent Orange ordered by his father, died of cancer', href: '/entities/individuals/elmo-zumwalt-iii', status: 'Deceased (1988)' },
 { name: 'Maude DeVictor', role: 'VA benefits counselor who first connected veteran illness to Agent Orange exposure', href: '/entities/individuals/maude-devictor', status: 'Unknown' },
 { name: 'Ton That Tung', role: 'Vietnamese surgeon who documented Agent Orange health effects in Vietnamese population', href: '/entities/individuals/ton-that-tung', status: 'Deceased (1982)' },
 { name: 'Carl Oechsner', role: 'Dow Chemical executive who knew about dioxin risks but suppressed information', href: '/entities/individuals/carl-oechsner', status: 'Deceased' },
 { name: 'Jack Weinstein', role: 'Federal judge who approved $180M Agent Orange class action settlement', href: '/entities/individuals/jack-weinstein', status: 'Deceased (2021)' },
 { name: 'Nguyen Viet Nhan', role: 'Vietnamese physician documenting multigenerational effects of Agent Orange', href: '/entities/individuals/nguyen-viet-nhan', status: 'Active' },
 { name: 'Bobby Muller', role: 'Vietnam Veterans of America founder, led campaign for Agent Orange recognition', href: '/entities/individuals/bobby-muller', status: 'Active' },
 ],
 timeline: [
 { date: '1943', event: 'US military begins developing herbicidal warfare agents at Fort Detrick' },
 { date: '1961', event: 'President Kennedy approves limited herbicide testing in Vietnam' },
 { date: 'January 1962', event: 'Operation Ranch Hand begins, first spray missions over Vietnamese forests' },
 { date: '1962-1964', event: 'Herbicide spraying expands across South Vietnam, primarily Agent Purple and Agent Orange' },
 { date: '1965', event: 'Dow Chemical internal memo acknowledges dioxin contamination in Agent Orange is a health hazard' },
 { date: '1965-1970', event: 'Peak spraying years; 6+ million acres sprayed, destroying 20% of South Vietnam\'s forests' },
 { date: '1966', event: 'American Academy of Sciences protests use of herbicides in Vietnam as potential war crime' },
 { date: '1969', event: 'NIEHS study finds 2,4,5-T causes birth defects in laboratory animals' },
 { date: 'April 1970', event: 'Deputy Secretary of Defense David Packard restricts use of Agent Orange' },
 { date: 'February 1971', event: 'Operation Ranch Hand officially ends, last spray mission flown' },
 { date: '1978', event: 'VA employee Maude DeVictor finds pattern of illnesses among Agent Orange-exposed veterans' },
 { date: '1979', event: 'Class action lawsuit filed against chemical companies, Ivy v. Diamond Shamrock' },
 { date: '1984', event: '$180 million class action settlement reached, criticized as grossly inadequate' },
 { date: '1991', event: 'Agent Orange Act requires VA to presume certain diseases connected to herbicide exposure' },
 { date: '1993', event: 'National Academy of Sciences confirms link between Agent Orange and multiple cancers' },
 { date: '2004', event: 'Vietnamese Association for Victims of Agent Orange files lawsuit in US court, dismissed' },
 { date: '2010', event: 'US begins $110M cleanup of Danang airbase dioxin hotspot' },
 { date: '2023', event: 'Third and fourth generation Vietnamese continue to be born with Agent Orange-related birth defects' },
 ],
 legalOutcomes: [
 { defendant: 'Dow Chemical, Monsanto, et al.', charge: 'Agent Orange class action (US veterans)', outcome: '$180M settlement in 1984; approximately $1,200 per veteran' },
 { defendant: 'Chemical Companies', charge: 'Vietnamese victims lawsuit', outcome: 'Dismissed by US courts, companies claimed government contractor defense' },
 { defendant: 'US Government', charge: 'Feres Doctrine bars military personnel lawsuits', outcome: 'Veterans cannot sue for wartime injuries, blocked by sovereign immunity' },
 { defendant: 'Dow Chemical', charge: 'Concealing dioxin contamination health risks', outcome: 'No criminal prosecution despite internal documents showing knowledge' },
 { defendant: 'Department of Veterans Affairs', charge: 'Denying claims of Agent Orange-exposed veterans', outcome: 'Agent Orange Act of 1991 forced presumptive coverage for some diseases' },
 { defendant: 'United States', charge: 'Failure to clean up contaminated sites in Vietnam', outcome: 'Partial cleanup beginning 2012, but most contamination remains' },
 { defendant: 'Monsanto', charge: 'Knowledge of dioxin contamination', outcome: 'No criminal liability, company later acquired by Bayer' },
 { defendant: 'US Government', charge: 'Failure to compensate Vietnamese victims', outcome: 'No compensation, US refuses to acknowledge legal obligation' },
 ],
 charges: [
 { statute: 'Geneva Protocol of 1925', description: 'Use of chemical weapons (herbicidal warfare) in armed conflict', count: '20 million gallons sprayed over 4.5 million acres' },
 { statute: '18 U.S.C. § 2441: War Crimes Act', description: 'Employment of weapons calculated to cause unnecessary suffering', count: '4.8 million Vietnamese exposed, birth defects ongoing' },
 { statute: '18 U.S.C. § 1001: False Statements', description: 'Chemical companies concealed known dioxin contamination from government and public', count: 'Decades of documented deception' },
 { statute: 'FIFRA: 7 U.S.C. § 136', description: 'Manufacture and use of herbicides known to contain toxic contaminants', count: 'All Agent Orange batches contained dioxin TCDD' },
 { statute: 'NEPA: 42 U.S.C. § 4321', description: 'No environmental assessment of herbicide campaign\'s long-term ecological impact', count: '20% of South Vietnam\'s forests destroyed' },
 { statute: '42 U.S.C. § 9601: CERCLA/Superfund', description: 'Massive dioxin contamination of Vietnamese land and water requiring cleanup', count: 'Contamination persists 50+ years later' },
 { statute: 'Convention on Environmental Modification', description: 'Deliberate large-scale environmental destruction as method of warfare', count: 'Entire ecosystems destroyed across Southeast Asia' },
 { statute: '18 U.S.C. § 1111: Negligent Homicide', description: 'Deaths resulting from knowing exposure of troops and civilians to carcinogenic dioxin', count: 'Hundreds of thousands of deaths attributed to exposure' },
 ],
 coverup: [
 'Dow Chemical\'s own 1965 internal memo documented that dioxin contamination in Agent Orange caused severe liver damage and skin disease, but the company continued production without changes',
 'The military classified health studies on herbicide-exposed troops and suppressed findings linking Agent Orange to cancer and birth defects for over a decade',
 'The VA systematically denied disability claims from Agent Orange-exposed veterans for years, requiring the 1991 Agent Orange Act to force presumptive coverage',
 'Chemical manufacturers including Dow and Monsanto fraudulently manipulated studies to downplay dioxin\'s toxicity to avoid liability and continue profiting from herbicide sales',
 'The US government refused to participate in international studies on Agent Orange\'s effects on Vietnamese populations, claiming insufficient evidence of harm',
 'Agent Orange was also tested and sprayed in the US and Canada (at military bases, along roadsides, and in national forests) exposing domestic populations without disclosure',
 'Ranch Hand veterans who participated in Air Force health studies were pressured to attribute health problems to non-service causes',
 'The $180M class action settlement was designed to shield chemical companies from future lawsuits while providing each veteran only about $1,200',
 'Vietnamese victims\' lawsuit was dismissed based on the"government contractor defense"- an argument that manufacturers were simply following military orders',
 ],
 sources: [
 { title: 'Institute of Medicine, Veterans and Agent Orange: Health Effects', url: 'https://nap.nationalacademies.org/catalog/25137/veterans-and-agent-orange-update-11-2018', date: '2018' },
 { title: 'Stellman et al.: The Extent and Patterns of Usage of Agent Orange in Vietnam', url: 'https://www.nature.com/articles/nature01537', date: '2003' },
 { title: 'VA Agent Orange Registry and Compensation Data', url: 'https://www.va.gov/disability/eligibility/hazardous-materials-exposure/agent-orange/', date: 'Ongoing' },
 { title: 'ProPublica, The VA\'s Broken Promise to Thousands of Vietnam Veterans', url: 'https://www.propublica.org/article/the-vas-broken-promise-to-thousands-of-vietnam-vets-exposed-to-agent-orange', date: '2016' },
 { title: 'Young & Reggiani, Agent Orange and Its Associated Dioxin', url: 'https://www.sciencedirect.com/book/9780444809711/agent-orange-and-its-associated-dioxin', date: '1988' },
 { title: 'Fred Wilcox, Scorched Earth: Legacies of Chemical Warfare in Vietnam', url: 'https://www.sevenstories.com/books/3185-scorched-earth', date: '2011' },
 { title: 'USAID, Environmental Remediation of Dioxin Contamination at Danang Airport', url: 'https://www.usaid.gov/vietnam/environmental-remediation', date: '2018' },
 { title: 'New York Times, Agent Orange\'s Long Legacy for Vietnam and Veterans', url: 'https://www.nytimes.com/2014/05/12/us/agent-oranges-long-legacy-for-vietnam-and-veterans.html', date: 'May 11, 2014' },
 ],
};

export default function AgentOrangePage() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-[rgba(0,12,35,0.65)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-blood-500/30 bg-blood-500/20 text-blood-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-blood-950/20 border border-blood-500/30"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-blood-500"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[rgba(0,30,80,0.40)] text-zinc-400 border border-[rgba(60,160,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-blood-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-blood-500"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(60,160,255,0.12)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-blood-500"/><p className="text-xs text-blood-500 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-blood-500"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[rgba(0,20,55,0.40)] border border-[rgba(60,160,255,0.12)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-blood-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-[rgba(0,20,55,0.40)] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
