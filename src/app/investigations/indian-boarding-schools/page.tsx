'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'American Indian Boarding Schools',
  subtitle: '"Kill the Indian, Save the Man" — A Century of Forced Assimilation, Mass Graves, and Cultural Genocide',
  severity: 'critical',
  status: 'SYSTEMATIC GENOCIDE',
  summary: 'For over a century, the United States government operated and funded a network of more than 400 Indian boarding schools designed to forcibly strip Native American, Alaska Native, and Native Hawaiian children of their languages, cultures, and identities. Under the doctrine of "Kill the Indian, Save the Man," coined by U.S. Army officer Richard Henry Pratt, children as young as four were ripped from their families at gunpoint and transported hundreds of miles away. They were beaten for speaking their native languages, sexually and physically abused by staff, malnourished, used as forced labor, subjected to medical experiments, and left to die of tuberculosis, measles, and neglect. The Department of the Interior\'s 2022 investigation identified over 500 child deaths across 53 marked and unmarked burial sites — a number officials acknowledge represents only a fraction of the true toll. Thousands of children simply vanished, their fates never recorded. Survivors carried lifelong trauma that cascaded through generations, contributing to disproportionate rates of poverty, addiction, suicide, and family dissolution in Native communities. The last federally operated boarding school did not close until 1969, and some continued under tribal or religious operation into the late 1990s. To this day, no individual has been criminally prosecuted for the systematic abuse and deaths of children in these institutions.',
  keyFigures: [
    { name: 'Richard Henry Pratt', role: 'Founder of Carlisle Indian Industrial School (1879). U.S. Army officer who coined "Kill the Indian, Save the Man." Architect of the forced assimilation model replicated across 400+ schools.', href: '/entities/individuals/richard-henry-pratt', status: 'Deceased (1924)' },
    { name: 'Deb Haaland', role: 'U.S. Secretary of the Interior (2021-2025). First Native American cabinet secretary. Launched the Federal Indian Boarding School Initiative in 2021 and oversaw the "Road to Healing" listening tour.', href: '/entities/individuals/deb-haaland', status: 'Former Secretary' },
    { name: 'Dillon Myer', role: 'Commissioner of the Bureau of Indian Affairs (1950-1953). Previously directed Japanese American internment camps. Accelerated termination and relocation policies that continued the boarding school legacy.', href: '/entities/individuals/dillon-myer', status: 'Deceased (1982)' },
    { name: 'Bryan Newland', role: 'Assistant Secretary for Indian Affairs. Led the Federal Indian Boarding School Initiative investigation and authored the landmark 2022 and 2024 investigative reports documenting deaths and burial sites.', href: '/entities/individuals/bryan-newland', status: 'Former Asst. Secretary' },
    { name: 'Henry Dawes', role: 'U.S. Senator (R-MA). Authored the Dawes Act of 1887, which dissolved tribal lands and was used as justification for expanding the boarding school system to "civilize" Native children.', href: '/entities/individuals/henry-dawes', status: 'Deceased (1903)' },
    { name: 'Carl Schurz', role: 'U.S. Secretary of the Interior (1877-1881). Approved and funded Pratt\'s Carlisle experiment, establishing federal policy of Indian child removal and forced education.', href: '/entities/individuals/carl-schurz', status: 'Deceased (1906)' },
    { name: 'Thomas Morgan', role: 'Commissioner of Indian Affairs (1889-1893). Systematized and massively expanded the boarding school network, making attendance compulsory and authorizing use of force for child removal.', href: '/entities/individuals/thomas-morgan', status: 'Deceased (1902)' },
    { name: 'Estelle Reel', role: 'Superintendent of Indian Schools (1898-1910). Standardized curriculum focused on manual labor, domestic service, and eradication of Native identity across all federal Indian schools.', href: '/entities/individuals/estelle-reel', status: 'Deceased (1959)' },
    { name: 'Milton Eisenhower', role: 'Brother of Dwight D. Eisenhower. Oversaw relocations of Native Americans and Japanese Americans. His brother\'s termination-era policies continued the boarding school system\'s legacy.', href: '/entities/individuals/milton-eisenhower', status: 'Deceased (1985)' },
    { name: 'John Collier', role: 'Commissioner of Indian Affairs (1933-1945). Implemented the Indian Reorganization Act of 1934, which slowed but did not end boarding schools. Credited with modest reforms while schools continued operating.', href: '/entities/individuals/john-collier', status: 'Deceased (1968)' },
    { name: 'Hiram Price', role: 'Commissioner of Indian Affairs (1881-1885). Oversaw rapid expansion of boarding schools during the early Carlisle era, authorized withholding of rations from families who refused to send children.', href: '/entities/individuals/hiram-price', status: 'Deceased (1901)' },
    { name: 'Ulysses S. Grant', role: '18th President. Initiated the "Peace Policy" of 1869 that gave religious denominations control over Indian reservations and schools, laying the groundwork for the boarding school system.', href: '/entities/individuals/ulysses-s-grant', status: 'Deceased (1885)' },
    { name: 'Andrew Jackson', role: '7th President. Signed the Indian Removal Act of 1830 and oversaw the Trail of Tears. His ideology of Indian removal directly preceded and justified the boarding school era.', href: '/entities/individuals/andrew-jackson', status: 'Deceased (1845)' },
    { name: 'Theodore Roosevelt', role: '26th President. Publicly praised the boarding school system and described the Dawes Act as "a mighty pulverizing engine to break up the tribal mass." Oversaw expansion of schools.', href: '/entities/individuals/theodore-roosevelt', status: 'Deceased (1919)' },
  ],
  timeline: [
    { date: '1819', event: 'Congress passes the Civilization Fund Act, allocating $10,000 annually to religious groups and societies to "civilize" Native Americans through education — the legal foundation for the boarding school system.' },
    { date: '1830', event: 'Indian Removal Act signed by Andrew Jackson, forcibly relocating southeastern tribes. Removal-era violence and family separation foreshadow the boarding school model.' },
    { date: '1869', event: 'President Grant\'s "Peace Policy" assigns Indian reservations to religious denominations, giving churches control over Native education and spiritual conversion.' },
    { date: 'November 1, 1879', event: 'Richard Henry Pratt opens the Carlisle Indian Industrial School in Pennsylvania — the first off-reservation federal boarding school. 82 Lakota children are among the first students.' },
    { date: '1882', event: 'Congress authorizes the Commissioner of Indian Affairs to enforce compulsory school attendance for Native children. Military force is authorized to remove children from families.' },
    { date: '1887', event: 'Dawes Act dissolves tribal land holdings, accelerating cultural destruction and making boarding school attendance a condition for land allotments to families.' },
    { date: '1891', event: 'Congress passes legislation making school attendance mandatory for all Native American children. Indian police authorized to forcibly remove children from homes.' },
    { date: '1898-1910', event: 'Superintendent Estelle Reel standardizes boarding school curriculum nationwide: half-day academics, half-day manual labor. Children forbidden from speaking Native languages under threat of severe punishment.' },
    { date: '1900-1930', event: 'Peak era of the boarding school system. Over 350 schools operate simultaneously. An estimated 83% of Native children are enrolled. Mortality rates at some schools exceed 50% due to tuberculosis, neglect, and abuse.' },
    { date: '1928', event: 'The Meriam Report exposes the horrific conditions in Indian boarding schools: malnutrition, overcrowding, child labor, rampant disease, and physical abuse. Calls for "radical" reform.' },
    { date: '1934', event: 'Indian Reorganization Act under Commissioner John Collier slows the most aggressive boarding school practices but does not end the system. Many schools continue to operate.' },
    { date: '1953', event: 'House Concurrent Resolution 108 establishes the "Termination Era," ending federal recognition of tribes and accelerating assimilation. Relocation programs move families to cities.' },
    { date: '1958-1967', event: 'The Indian Adoption Project and subsequent ARENA program systematically place Native children with white families, extending the "kill the Indian" philosophy beyond schooling.' },
    { date: '1969', event: 'The Kennedy Report (Indian Education: A National Tragedy — A National Challenge) documents ongoing failures and abuse in remaining boarding schools.' },
    { date: '1978', event: 'Indian Child Welfare Act (ICWA) passed, giving tribes jurisdiction over child welfare decisions and attempting to end the forced removal pipeline. Boarding school enrollment declines.' },
    { date: '2021', event: 'Secretary Deb Haaland launches the Federal Indian Boarding School Initiative, the first comprehensive federal investigation into the boarding school system.' },
    { date: 'May 2022', event: 'Interior Department releases Volume 1 of the investigative report, identifying over 400 federal Indian boarding schools and 53 burial sites containing the remains of children.' },
    { date: '2022-2024', event: '"Road to Healing" listening tour collects testimony from survivors and descendants across 12 events in Native communities.' },
    { date: 'July 2024', event: 'Volume 2 of the report released, documenting over 18,000 children who attended schools, 973 documented child deaths (likely a vast undercount), and expanded burial site count.' },
    { date: 'October 2024', event: 'President Biden issues a formal apology for the federal Indian boarding school system — 145 years after the first school opened at Carlisle.' },
  ],
  legalOutcomes: [
    { defendant: 'United States Government', charge: 'Systematic forced removal and institutionalization of Native children', outcome: 'No criminal prosecution. Formal presidential apology issued October 2024.' },
    { defendant: 'Bureau of Indian Affairs', charge: 'Operating 408+ schools with documented child deaths, abuse, and forced labor', outcome: 'Internal investigation only. No officials charged.' },
    { defendant: 'Religious Organizations', charge: 'Physical, sexual abuse, and cultural destruction at mission-operated schools', outcome: 'Some civil settlements. Catholic Church paid $467M in combined abuse settlements to tribes.' },
    { defendant: 'Individual School Administrators', charge: 'Physical abuse, sexual abuse, child neglect resulting in death', outcome: 'Zero criminal prosecutions in the entire history of the boarding school system.' },
    { defendant: 'State Governments', charge: 'Complicity in forced attendance laws and truancy enforcement targeting Native families', outcome: 'No accountability. Some states have issued apologies.' },
    { defendant: 'Canada (Comparison)', charge: 'Operated parallel residential school system', outcome: 'Truth and Reconciliation Commission (2008-2015). $1.9B CAD compensation fund established.' },
    { defendant: 'Carlisle Indian Industrial School', charge: 'Prototype institution. At least 189 documented child deaths. Forced labor. Systematic abuse.', outcome: 'Closed 1918. No prosecutions. Remains disinterred and repatriated beginning 2017.' },
    { defendant: 'Congress of the United States', charge: 'Authorized and funded compulsory child removal and boarding school system for over a century', outcome: 'Formal apology in 2009 Native American Apology Resolution (signed without ceremony).' },
  ],
  charges: [
    { statute: '18 U.S.C. § 1091 — Genocide', description: 'The systematic destruction of Native American cultures, languages, and identities through forced child removal meets the UN Genocide Convention\'s definition of genocide, specifically Article II(e): forcibly transferring children of the group to another group.', count: 'Estimated 100,000+ children subjected to forced transfer over 150 years' },
    { statute: '18 U.S.C. § 242 — Deprivation of Rights Under Color of Law', description: 'Federal agents and school administrators acting under government authority systematically deprived Native children of liberty, dignity, and bodily autonomy, including through forced labor, physical punishment, and sexual abuse.', count: 'Hundreds of thousands of victims across 408+ institutions' },
    { statute: '18 U.S.C. § 1589 — Forced Labor / Trafficking', description: 'Children were subjected to compulsory manual labor under the "outing system," working on farms, in factories, and as domestic servants. Labor was unpaid or wages were withheld by the school.', count: 'Systemic across all boarding schools — standard curriculum requirement' },
    { statute: '18 U.S.C. § 2241-2248 — Sexual Abuse', description: 'Widespread sexual abuse of children by school staff, administrators, and religious personnel documented across dozens of institutions over multiple decades.', count: 'Unknown — most cases never reported or investigated' },
    { statute: '18 U.S.C. § 1112 — Involuntary Manslaughter', description: 'Children died of preventable diseases, malnutrition, exposure, and medical neglect while in the mandatory custody of the federal government. Mortality rates at some schools exceeded 50%.', count: 'At minimum 973 documented deaths; actual toll estimated in the tens of thousands' },
    { statute: '18 U.S.C. § 1201 — Kidnapping', description: 'Children were forcibly removed from their families by federal Indian agents and police, transported across state lines, and held in institutions against their will and against the will of their parents.', count: 'Estimated 100,000+ children forcibly removed from families' },
    { statute: '25 U.S.C. § 3001 — NAGPRA Violations', description: 'Native American Graves Protection and Repatriation Act violations relating to the burial and concealment of children who died at boarding schools, with remains not returned to families for decades.', count: '53+ burial sites identified containing children\'s remains' },
    { statute: '18 U.S.C. § 241 — Conspiracy Against Rights', description: 'The coordinated federal, state, and religious institutional conspiracy to deprive Native Americans of fundamental rights to family integrity, cultural practice, language, and religious freedom.', count: 'Multi-generational conspiracy spanning 150+ years' },
    { statute: '13th Amendment — Involuntary Servitude', description: 'Children forced into unpaid labor under the "outing" system, working for white families and businesses as a form of education, constituting involuntary servitude.', count: 'Thousands of children placed in forced labor annually' },
  ],
  coverup: [
    'The Bureau of Indian Affairs systematically failed to maintain records of child deaths, illnesses, and abuse at boarding schools. Many children who died were buried in unmarked graves without notification to families.',
    'School administrators routinely falsified enrollment and attendance records to continue receiving per-capita federal funding, concealing the true number of runaways, deaths, and expelled students.',
    'Religious organizations operating boarding schools destroyed internal records documenting abuse, particularly the Catholic Church, which maintained parallel record-keeping systems that were not subject to federal oversight.',
    'The federal government classified and restricted access to boarding school records for decades, preventing tribal nations and families from learning the fates of their children.',
    'When the 1928 Meriam Report exposed horrific conditions, the government implemented cosmetic reforms while allowing the fundamental system of forced assimilation to continue for another 40+ years.',
    'Congress buried its own 2009 Native American Apology Resolution — President Obama signed it as a rider on a defense spending bill with no ceremony, no press conference, and no notification to tribal leaders.',
    'For over a century, no federal agency conducted a systematic investigation into deaths, abuse, or conditions at boarding schools until Secretary Haaland\'s 2021 initiative — 142 years after the first school opened.',
    'State and local governments participated in truancy enforcement against Native families, arresting parents who refused to surrender their children, while failing to investigate reports of abuse and deaths at schools.',
    'The U.S. government actively suppressed Native languages and spiritual practices as official policy, constituting cultural genocide under international law, yet no official has ever been held accountable for these policies.',
    'Mass grave sites at former boarding schools remain undiscovered and uninvestigated. The 53 identified burial sites are acknowledged as representing only a small fraction of the actual number of sites across the country.',
  ],
  sources: [
    { title: 'Federal Indian Boarding School Initiative Investigative Report, Volume 1', url: 'https://www.bia.gov/sites/default/files/dup/inline-files/bsi_investigative_report_may_2022_508.pdf', date: 'May 2022' },
    { title: 'Federal Indian Boarding School Initiative Investigative Report, Volume 2', url: 'https://www.bia.gov/sites/default/files/dup/inline-files/bsi_investigative_report_vol2_july_2024.pdf', date: 'July 2024' },
    { title: 'The Problem of Indian Administration (Meriam Report)', url: 'https://narf.org/nill/resources/meriam.html', date: '1928' },
    { title: 'Carlisle Indian Industrial School: History and Legacy', url: 'https://carlisleindian.dickinson.edu/', date: 'Ongoing' },
    { title: 'National Native American Boarding School Healing Coalition', url: 'https://boardingschoolhealing.org/', date: 'Ongoing' },
    { title: 'NPR: Interior Dept. Report Reveals Legacy of Trauma at Native American Boarding Schools', url: 'https://www.npr.org/2022/05/11/1098276649/boarding-schools-interior-department-report', date: 'May 11, 2022' },
    { title: 'New York Times: U.S. Report Identifies Burial Sites Linked to Indian Boarding Schools', url: 'https://www.nytimes.com/2022/05/11/us/politics/native-american-boarding-schools-report.html', date: 'May 11, 2022' },
    { title: 'Biden Apologizes for Federal Indian Boarding School Policy', url: 'https://www.whitehouse.gov/briefing-room/speeches-remarks/2024/10/25/', date: 'October 25, 2024' },
    { title: 'Indian Education: A National Tragedy — A National Challenge (Kennedy Report)', url: 'https://www.congress.gov/congressional-report/91st-congress/senate-report/501', date: '1969' },
    { title: 'PBS: Unspoken: America\'s Native American Boarding Schools', url: 'https://www.pbs.org/show/unspoken-americas-native-american-boarding-schools/', date: '2016' },
  ],
};

export default function IndianBoardingSchoolsPage() {
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
