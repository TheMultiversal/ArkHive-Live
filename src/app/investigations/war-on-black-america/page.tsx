'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'War on Black America',
  subtitle: 'Four Centuries of Systematic Oppression: From Slavery Through Jim Crow to Mass Incarceration',
  severity: 'critical',
  status: 'ONGOING',
  summary: 'The systematic oppression of Black Americans is not a series of isolated injustices but a continuous, deliberate, institutionalized war waged by American power structures across four centuries. From chattel slavery (1619-1865) to Black Codes and convict leasing (1865-1940s) to Jim Crow segregation (1877-1964) to the War on Drugs and mass incarceration (1971-present), each era has deployed new mechanisms to maintain white supremacy and extract Black labor and wealth. The Tulsa Race Massacre (1921) destroyed "Black Wall Street" — $200 million in property destroyed by white mobs with government complicity. Redlining systematically denied Black families homeownership, the primary wealth-building mechanism in America. Today, the median white household holds $171,000 in wealth compared to $17,150 for Black households — a 10:1 ratio directly traceable to government policy. The school-to-prison pipeline, environmental racism, voter suppression, and police violence continue this war by other means. The United States has never fully acknowledged, let alone remediated, this systematic campaign of racial subjugation.',
  keyFigures: [
    { name: 'Richard Nixon', role: 'President who launched the War on Drugs explicitly targeting Black communities — confirmed by aide John Ehrlichman', href: '/entities/individuals/richard-nixon', status: 'Deceased (1994)' },
    { name: 'Ronald Reagan', role: 'President who escalated mass incarceration with Anti-Drug Abuse Act creating 100:1 crack cocaine sentencing disparity', href: '/entities/individuals/ronald-reagan', status: 'Deceased (2004)' },
    { name: 'Bill Clinton', role: 'President who signed 1994 Crime Bill expanding mass incarceration and welfare reform devastating Black families', href: '/entities/individuals/bill-clinton', status: 'Active' },
    { name: 'J. Edgar Hoover', role: 'FBI Director who ran COINTELPRO against Black leaders, called MLK the "most dangerous Negro in America"', href: '/entities/individuals/j-edgar-hoover', status: 'Deceased (1972)' },
    { name: 'George Wallace', role: 'Alabama Governor who stood in schoolhouse door to block integration; "Segregation now, segregation forever"', href: '/entities/individuals/george-wallace', status: 'Deceased (1998)' },
    { name: 'Bull Connor', role: 'Birmingham Public Safety Commissioner who unleashed dogs and fire hoses on civil rights marchers including children', href: '/entities/individuals/bull-connor', status: 'Deceased (1973)' },
    { name: 'Woodrow Wilson', role: 'President who re-segregated the federal government and screened Birth of a Nation at the White House', href: '/entities/individuals/woodrow-wilson', status: 'Deceased (1924)' },
    { name: 'John Ehrlichman', role: 'Nixon aide who confessed in 1994 that the War on Drugs was designed to target Black people and anti-war leftists', href: '/entities/individuals/john-ehrlichman', status: 'Deceased (1999)' },
    { name: 'Fred Hampton', role: 'Black Panther chairman assassinated at age 21 by Chicago police in FBI COINTELPRO operation', href: '/entities/individuals/fred-hampton', status: 'Assassinated (1969)' },
    { name: 'Medgar Evers', role: 'NAACP field secretary assassinated in his driveway in Jackson, Mississippi; killer not convicted until 1994', href: '/entities/individuals/medgar-evers', status: 'Assassinated (1963)' },
    { name: 'Emmett Till', role: '14-year-old boy lynched in Mississippi in 1955; his open-casket funeral catalyzed the civil rights movement', href: '/entities/individuals/emmett-till', status: 'Murdered (1955)' },
    { name: 'Lee Atwater', role: 'Republican strategist who admitted the Southern Strategy used coded racial appeals to win white voters', href: '/entities/individuals/lee-atwater', status: 'Deceased (1991)' },
    { name: 'Joe Arpaio', role: 'Maricopa County Sheriff convicted of racially profiling Latino residents; pardoned by Trump', href: '/entities/individuals/joe-arpaio', status: 'Active' },
    { name: 'Michelle Alexander', role: 'Author of "The New Jim Crow" documenting mass incarceration as racial control system', href: '/entities/individuals/michelle-alexander', status: 'Active' },
  ],
  timeline: [
    { date: '1619', event: 'First enslaved Africans brought to English colony at Jamestown, Virginia — beginning 246 years of chattel slavery' },
    { date: '1705', event: 'Virginia Slave Codes codify racial slavery into law, establishing legal framework replicated across colonies' },
    { date: '1857', event: 'Dred Scott v. Sandford: Supreme Court rules Black people "are not and can never be citizens" of the United States' },
    { date: '1865', event: '13th Amendment abolishes slavery except as punishment for crime — loophole that enables convict leasing system' },
    { date: '1866', event: 'Black Codes enacted across Southern states, criminalizing Black freedom of movement, labor, and assembly' },
    { date: '1877', event: 'Compromise of 1877 ends Reconstruction; federal troops withdraw from South; Jim Crow era begins' },
    { date: '1896', event: 'Plessy v. Ferguson: Supreme Court upholds "separate but equal" doctrine, legalizing segregation for 58 years' },
    { date: '1921-MAY-31', event: 'Tulsa Race Massacre: white mobs destroy Black Wall Street, killing 300+ and leaving 10,000 homeless; covered up for decades' },
    { date: '1934', event: 'Federal Housing Administration creates redlining maps, systematically denying mortgages in Black neighborhoods' },
    { date: '1955-AUG-28', event: 'Emmett Till, 14, is lynched in Money, Mississippi; his mother\'s decision to hold open-casket funeral galvanizes civil rights movement' },
    { date: '1963', event: 'Medgar Evers assassinated; 16th Street Baptist Church bombing kills four girls; police attack Birmingham marchers' },
    { date: '1964', event: 'Civil Rights Act passed, outlawing discrimination — but systemic racism continues through economic and carceral mechanisms' },
    { date: '1968', event: 'Fair Housing Act passed; same year, MLK assassinated; FBI\'s COINTELPRO intensifies against Black organizations' },
    { date: '1969-DEC-04', event: 'Fred Hampton assassinated by Chicago police in FBI-coordinated raid; drugged by informant before shooting' },
    { date: '1971', event: 'Nixon launches War on Drugs — later confirmed by aide as targeting "Black people and hippies"' },
    { date: '1986', event: 'Anti-Drug Abuse Act creates 100:1 crack-to-powder cocaine sentencing disparity, targeting Black communities' },
    { date: '1994', event: 'Clinton signs Violent Crime Control Act, fueling mass incarceration; U.S. prison population doubles in a decade' },
    { date: '2013', event: 'Shelby County v. Holder guts Voting Rights Act; states immediately pass voter suppression laws targeting Black voters' },
    { date: '2020', event: 'George Floyd murdered by Minneapolis police, sparking largest civil rights protests in U.S. history' },
    { date: '2021', event: 'Federal Reserve data confirms median white household wealth ($171K) is 10x median Black household wealth ($17K)' },
  ],
  legalOutcomes: [
    { defendant: 'United States Government', charge: 'Systematic enslavement, Jim Crow segregation, voter suppression, mass incarceration of Black Americans', outcome: 'No reparations paid; H.R. 40 reparations study bill has never passed Congress despite decades of advocacy' },
    { defendant: 'Byron De La Beckwith', charge: 'Murder of NAACP leader Medgar Evers in 1963', outcome: 'Two all-white juries deadlocked in 1964; finally convicted in 1994 — 31 years after the murder' },
    { defendant: 'City of Tulsa', charge: 'Complicity in 1921 Tulsa Race Massacre; destruction of Black Wall Street', outcome: 'Oklahoma Supreme Court dismissed last survivors\' lawsuit in 2023; no reparations paid' },
    { defendant: 'FBI / Chicago Police', charge: 'Assassination of Fred Hampton in coordinated COINTELPRO raid', outcome: '$1.85 million settlement in 1982; no criminal charges against officers or FBI agents' },
    { defendant: 'Derek Chauvin', charge: 'Murder of George Floyd by kneeling on his neck for 9 minutes and 29 seconds', outcome: 'Convicted of second-degree murder (2021); sentenced to 22.5 years state, 21 years federal' },
    { defendant: 'J.W. Milam & Roy Bryant', charge: 'Murder of 14-year-old Emmett Till', outcome: 'Acquitted by all-white jury in 67 minutes in 1955; later confessed to Look magazine' },
    { defendant: 'Federal Housing Administration', charge: 'Systematic redlining denying Black families homeownership from 1934 onward', outcome: 'Fair Housing Act (1968) outlawed practice but never remediated the $16 trillion stolen in Black wealth' },
    { defendant: 'State Voter Suppression Laws', charge: 'Targeting Black voters through ID requirements, poll closures, purges after Shelby County v. Holder', outcome: 'Ongoing litigation; courts have struck down multiple laws as racially discriminatory' },
  ],
  charges: [
    { statute: 'UN Convention on the Prevention and Punishment of Genocide (Article II)', description: 'Deliberately inflicting conditions of life calculated to bring about physical destruction of a racial group', count: '246 years of slavery (12.5 million enslaved, 2 million died in Middle Passage); 4,000+ documented lynchings 1882-1968' },
    { statute: '13th Amendment (Slavery Exception)', description: 'Slavery is abolished "except as a punishment for crime" — loophole used to create convict leasing system re-enslaving Black Americans', count: 'Hundreds of thousands of Black Americans re-enslaved through convict leasing 1865-1940s' },
    { statute: 'Civil Rights Act of 1964 (ongoing violations)', description: 'Prohibits discrimination based on race — systematically violated through mass incarceration, policing, housing, and employment', count: 'Black Americans incarcerated at 5x rate of whites; 33% of Black men will be imprisoned in their lifetime' },
    { statute: 'Voting Rights Act of 1965 (gutted 2013)', description: 'Shelby County v. Holder struck down preclearance requirement, enabling new wave of voter suppression targeting Black voters', count: '1,688 polling places closed in formerly covered jurisdictions within 6 years of Shelby decision' },
    { statute: '14th Amendment — Equal Protection Clause', description: 'Systematic denial of equal protection through redlining, segregation, sentencing disparities, and environmental racism', count: 'Ongoing; racial wealth gap of 10:1 directly attributable to government policy' },
    { statute: 'Fair Housing Act (42 U.S.C. § 3601)', description: 'Despite 1968 prohibition, housing discrimination continues through algorithmic bias, steering, and appraisal discrimination', count: 'Black homeownership rate (44%) still below 1960s levels despite Fair Housing Act' },
    { statute: 'International Convention on the Elimination of All Forms of Racial Discrimination', description: 'United States ratified in 1994 but UN Committee repeatedly finds ongoing systemic violations against Black Americans', count: 'UN has issued multiple reports documenting systematic racial discrimination in U.S.' },
    { statute: 'Anti-Drug Abuse Act of 1986 — 100:1 Sentencing Disparity', description: 'Created sentencing rules where 5 grams of crack (used predominantly by Black Americans) equaled 500 grams of powder cocaine', count: 'Over 2 million Black Americans incarcerated under racially disparate drug laws since 1986' },
  ],
  coverup: [
    'The Tulsa Race Massacre was deliberately covered up for over 75 years — removed from Oklahoma history textbooks, mass graves left unexcavated, survivors silenced',
    'Nixon aide John Ehrlichman\'s 1994 confession that the War on Drugs targeted "Black people" was not published until 2016, 22 years after the interview, by Harper\'s Magazine',
    'The FBI\'s COINTELPRO program targeting Black leaders and organizations was only exposed through the 1971 break-in of an FBI office in Media, Pennsylvania — the government never voluntarily disclosed it',
    'Exposed during the Church Committee hearings (1975), the FBI sent an anonymous letter to Martin Luther King Jr. urging him to commit suicide — the government tried to keep this secret for decades',
    'The FHA\'s redlining maps, which denied Black families trillions in wealth-building through homeownership, were classified for decades and only fully disclosed through FOIA requests',
    'Lee Atwater\'s 1981 interview admitting the Republican Southern Strategy used coded racial appeals was kept private until leaked in 2012, 21 years after his death',
    'Exposed convict leasing records show Southern states sold Black prisoners to corporations as slave labor after the Civil War — generating revenue while maintaining racial oppression under the 13th Amendment exception',
    'The 100:1 crack-to-powder cocaine sentencing disparity was known to be racially discriminatory when enacted in 1986, but Congress maintained it for 24 years until the Fair Sentencing Act of 2010 reduced it to 18:1',
    'Multiple mass graves from the Tulsa Race Massacre were identified but remain largely unexcavated as of 2024, with city officials resisting full investigation',
  ],
  sources: [
    { title: 'Alexander, Michelle — The New Jim Crow: Mass Incarceration in the Age of Colorblindness', url: 'https://newjimcrow.com/', date: '2010' },
    { title: 'Equal Justice Initiative — Lynching in America: Confronting the Legacy of Racial Terror', url: 'https://lynchinginamerica.eji.org/', date: '2017' },
    { title: 'Rothstein, Richard — The Color of Law: A Forgotten History of How Our Government Segregated America', url: 'https://wwnorton.com/books/The-Color-of-Law/', date: '2017' },
    { title: 'The Sentencing Project — Report to the United Nations on Racial Disparities in the U.S. Criminal Justice System', url: 'https://www.sentencingproject.org/reports/report-to-the-united-nations-on-racial-disparities-in-the-u-s-criminal-justice-system/', date: '2018' },
    { title: 'Federal Reserve — Disparities in Wealth by Race and Ethnicity in the 2019 Survey of Consumer Finances', url: 'https://www.federalreserve.gov/econres/notes/feds-notes/disparities-in-wealth-by-race-and-ethnicity-in-the-2019-survey-of-consumer-finances-20200928.html', date: '2020' },
    { title: 'Harper\'s Magazine — Legalize It All: How to Win the War on Drugs (Ehrlichman confession)', url: 'https://harpers.org/archive/2016/04/legalize-it-all/', date: '2016-04' },
    { title: 'Tulsa Historical Society — 1921 Tulsa Race Massacre', url: 'https://www.tulsahistory.org/exhibit/1921-tulsa-race-massacre/', date: '2023' },
    { title: 'NAACP — Criminal Justice Fact Sheet', url: 'https://naacp.org/resources/criminal-justice-fact-sheet', date: '2023' },
    { title: 'Blackmon, Douglas — Slavery by Another Name: The Re-Enslavement of Black Americans from the Civil War to World War II', url: 'https://www.penguinrandomhouse.com/books/290182/slavery-by-another-name-by-douglas-a-blackmon/', date: '2008' },
  ],
};

export default function WarOnBlackAmericaPage() {
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
