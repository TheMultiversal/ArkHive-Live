'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Japanese American Internment',
  subtitle: 'The unconstitutional mass imprisonment of 120,000+ Japanese Americans — U.S. citizens and legal residents stripped of rights, property, and dignity during World War II',
  severity: 'critical',
  status: 'Confirmed — Reparations Paid',
  summary: 'On February 19, 1942, President Franklin D. Roosevelt signed Executive Order 9066, authorizing the forced removal and incarceration of approximately 120,000 people of Japanese ancestry — roughly two-thirds of whom were American citizens — from the West Coast of the United States. Without due process, trial, or any evidence of disloyalty, entire families were uprooted from their homes, businesses, and communities and transported to ten War Relocation Authority (WRA) concentration camps scattered across desolate regions of the American interior: Manzanar and Tule Lake in California, Heart Mountain in Wyoming, Topaz in Utah, Poston and Gila River in Arizona, Minidoka in Idaho, Amache (Granada) in Colorado, Rohwer and Jerome in Arkansas. Property losses exceeded $400 million (1940s dollars), equivalent to billions today. Internees were subjected to loyalty questionnaires demanding they forswear allegiance to the Japanese Emperor — a grotesque demand for American citizens who had never held such allegiance. Those who refused or answered equivocally were segregated at Tule Lake as \'disloyals.\' Meanwhile, the 442nd Regimental Combat Team, composed almost entirely of Japanese American volunteers — many recruited directly from the camps — became the most decorated unit in U.S. military history for its size and length of service, suffering a casualty rate of 314%. The Supreme Court upheld the constitutionality of internment in Korematsu v. United States (1944), a decision that stood for over 40 years until Fred Korematsu\'s conviction was vacated in 1983 via coram nobis proceedings after government attorneys were found to have suppressed exculpatory evidence. Lieutenant General John L. DeWitt, commanding the Western Defense Command, justified the mass removal with explicitly racist testimony, stating that \'the Japanese race is an enemy race\' and that \'a Jap\'s a Jap.\' Internal government reports — including the Ringle Report from the Office of Naval Intelligence — concluded that Japanese Americans posed no security threat, but these findings were deliberately concealed from the Supreme Court. The Commission on Wartime Relocation and Internment of Civilians (CWRIC) concluded in 1983 that internment was motivated by \'race prejudice, war hysteria, and a failure of political leadership.\' The Civil Liberties Act of 1988, signed by President Reagan, formally apologized and authorized $20,000 in reparations to each surviving internee — a belated and inadequate acknowledgment of one of the gravest civil liberties violations in American history.',
  coverup: [
    'The Office of Naval Intelligence\'s Ringle Report (1942), which concluded Japanese Americans posed no military threat, was deliberately suppressed and withheld from the Supreme Court during Korematsu v. United States proceedings.',
    'Solicitor General Charles Fahy knowingly presented false and misleading information to the Supreme Court, concealing evidence that contradicted claims of military necessity for internment.',
    'The FCC\'s report debunking claims of Japanese American shore-to-ship radio signaling was suppressed by General DeWitt\'s Western Defense Command to maintain the pretext of espionage threats.',
    'The government destroyed or classified key documents related to the MAGIC cables intelligence intercepts to prevent public knowledge that no evidence of Japanese American espionage existed.',
    'The War Department\'s own Final Report by General DeWitt was recalled and revised after officials recognized its overtly racist justifications would undermine the legal defense of internment.',
    'The term \'relocation center\' was deliberately adopted as a euphemism to obscure the reality that these were concentration camps surrounded by barbed wire, guard towers, and armed soldiers with shoot-to-kill orders.',
    'President Roosevelt\'s personal correspondence revealed he privately acknowledged the racial motivations behind internment but publicly maintained the fiction of military necessity.',
    'California Attorney General Earl Warren — later Chief Justice — actively promoted internment using fabricated claims of Japanese American sabotage networks, arguing that the absence of sabotage was itself proof of a coordinated conspiracy.',
    'The War Relocation Authority systematically downplayed conditions in the camps in propaganda films and press releases, portraying internment as a benign and voluntary \'relocation\' program.',
    'Records of property theft and forced sales of Japanese American assets at pennies on the dollar were poorly documented or destroyed, making full restitution impossible.'
  ],
  keyFigures: [
    { name: 'Franklin D. Roosevelt', role: 'President of the United States — signed Executive Order 9066 on February 19, 1942, authorizing the forced removal and incarceration of Japanese Americans without due process or evidence of disloyalty', status: 'Deceased', href: '/entities/individuals/franklin-d-roosevelt' },
    { name: 'John L. DeWitt', role: 'Lieutenant General, Commanding General of Western Defense Command — primary architect and advocate of mass removal, made explicitly racist statements including \'a Jap\'s a Jap\' to justify incarceration', status: 'Deceased', href: '/entities/individuals/john-l-dewitt' },
    { name: 'Dillon S. Myer', role: 'Director of the War Relocation Authority (WRA) — oversaw the administration of ten internment camps housing 120,000+ Japanese Americans, later headed the Bureau of Indian Affairs where he applied similar authoritarian policies', status: 'Deceased', href: '/entities/individuals/dillon-s-myer' },
    { name: 'Earl Warren', role: 'California Attorney General (later Chief Justice of the Supreme Court) — aggressively lobbied for internment, arguing the absence of sabotage proved a future coordinated attack was being planned', status: 'Deceased', href: '/entities/individuals/earl-warren' },
    { name: 'Karl Bendetsen', role: 'Colonel, U.S. Army — key War Department architect of the internment program, drafted the implementation plans for Executive Order 9066 and helped design the removal logistics', status: 'Deceased', href: '/entities/individuals/karl-bendetsen' },
    { name: 'Milton Eisenhower', role: 'First Director of the War Relocation Authority — initially oversaw camp operations before resigning after three months, later expressing deep regret and calling internment \'an inhuman mistake\'', status: 'Deceased', href: '/entities/individuals/milton-eisenhower' },
    { name: 'Fred Korematsu', role: 'Japanese American civil rights activist — defied internment orders and was convicted in 1942; his case reached the Supreme Court in Korematsu v. United States (1944); conviction vacated in 1983 when government misconduct was revealed', status: 'Deceased — Presidential Medal of Freedom (1998)', href: '/entities/individuals/fred-korematsu' },
    { name: 'Gordon Hirabayashi', role: 'Japanese American university student — challenged curfew and exclusion orders; convicted and imprisoned; conviction overturned in 1987 when courts found the government had suppressed evidence', status: 'Deceased', href: '/entities/individuals/gordon-hirabayashi' },
    { name: 'Minoru Yasui', role: 'Japanese American attorney — deliberately violated military curfew orders to create a test case challenging their constitutionality; convicted in 1942; conviction vacated posthumously in 1984', status: 'Deceased', href: '/entities/individuals/minoru-yasui' },
    { name: 'Norman Mineta', role: 'Japanese American politician — interned at Heart Mountain as a child at age 10; later served as U.S. Secretary of Transportation and U.S. Secretary of Commerce; key advocate for the Civil Liberties Act of 1988', status: 'Deceased', href: '/entities/individuals/norman-mineta' },
    { name: 'Mike Masaoka', role: 'National Secretary of the Japanese American Citizens League (JACL) — controversial figure who advocated cooperation with the government and promoted the loyalty questionnaire, drawing criticism from within the Japanese American community', status: 'Deceased', href: '/entities/individuals/mike-masaoka' },
    { name: 'Charles Fahy', role: 'U.S. Solicitor General — suppressed exculpatory evidence and presented misleading arguments to the Supreme Court in Korematsu and Hirabayashi cases to uphold the constitutionality of internment', status: 'Deceased', href: '/entities/individuals/charles-fahy' },
    { name: 'Henry Stimson', role: 'U.S. Secretary of War — approved and implemented the military orders for Japanese American removal despite internal reports indicating no military necessity', status: 'Deceased', href: '/entities/individuals/henry-stimson' },
    { name: 'Francis Biddle', role: 'U.S. Attorney General — initially opposed mass internment but ultimately acquiesced to War Department pressure, later calling his failure to resist one of his deepest regrets', status: 'Deceased', href: '/entities/individuals/francis-biddle' }
  ],
  timeline: [
    { date: 'December 7, 1941', event: 'Japan attacks Pearl Harbor; within hours, FBI begins arresting Japanese American community leaders, Buddhist priests, Japanese-language teachers, and newspaper editors — over 1,200 detained without charges in the first 48 hours' },
    { date: 'January 1942', event: 'Lt. Gen. John DeWitt begins lobbying the War Department for mass removal of all persons of Japanese ancestry from the West Coast, citing unsubstantiated claims of espionage and sabotage' },
    { date: 'February 19, 1942', event: 'President Roosevelt signs Executive Order 9066, authorizing the Secretary of War to designate military areas and exclude any persons from them — the legal foundation for mass internment' },
    { date: 'March 2, 1942', event: 'General DeWitt issues Public Proclamation No. 1, designating the western halves of Washington, Oregon, and California and the southern third of Arizona as Military Area No. 1, from which Japanese Americans will be excluded' },
    { date: 'March 18, 1942', event: 'Executive Order 9102 establishes the War Relocation Authority (WRA) to manage the forced removal and detention of Japanese Americans; Milton Eisenhower appointed first director' },
    { date: 'March 24, 1942', event: 'DeWitt begins issuing Civilian Exclusion Orders, giving Japanese American families as little as 48 hours to dispose of homes, businesses, and possessions before reporting to assembly centers' },
    { date: 'March–October 1942', event: 'Approximately 120,000 Japanese Americans are forcibly relocated — first to temporary assembly centers (racetracks, fairgrounds) and then to ten permanent WRA camps in remote, desolate locations across seven states' },
    { date: 'May 16, 1942', event: 'Fred Korematsu is arrested in San Leandro, California, for defying the exclusion order; his case will eventually reach the U.S. Supreme Court' },
    { date: 'February 1943', event: 'The War Department introduces the controversial \'loyalty questionnaire\' (Form DSS 304A) requiring internees to swear allegiance and forswear any loyalty to the Japanese Emperor — tearing families apart and creating deep divisions within camps' },
    { date: 'January 1944', event: 'The War Department reinstates the military draft for Japanese Americans, conscripting men directly from the internment camps — those who resist are tried and imprisoned as draft resisters' },
    { date: 'June 1944', event: 'The 442nd Regimental Combat Team enters combat in Italy, beginning a campaign that will make it the most decorated unit for its size and length of service in U.S. military history, while the soldiers\' families remain imprisoned in camps' },
    { date: 'December 18, 1944', event: 'The Supreme Court rules 6-3 in Korematsu v. United States that the exclusion order is constitutional, one of the most reviled decisions in Supreme Court history; Justice Frank Murphy dissents, calling it the \'legalization of racism\'' },
    { date: 'December 18, 1944', event: 'On the same day as the Korematsu decision, the Court unanimously rules in Ex parte Endo that the government cannot continue to detain a citizen whose loyalty has been established, effectively forcing the closure of camps' },
    { date: 'January 2, 1945', event: 'The exclusion orders are rescinded and Japanese Americans are permitted to return to the West Coast — many return to find their homes, farms, and businesses stolen, vandalized, or destroyed' },
    { date: 'March 20, 1946', event: 'Tule Lake, the last internment camp, officially closes; former internees face widespread anti-Japanese hostility, housing discrimination, and economic devastation' },
    { date: '1948', event: 'The Japanese American Evacuation Claims Act is signed, allowing internees to file claims for property losses — but the process is slow and inadequate, ultimately compensating less than 10 cents on the dollar' },
    { date: '1980–1983', event: 'The Commission on Wartime Relocation and Internment of Civilians (CWRIC) holds hearings across the country; over 750 witnesses testify; the Commission concludes internment was driven by \'race prejudice, war hysteria, and a failure of political leadership\'' },
    { date: 'November 10, 1983', event: 'Federal judge Marilyn Hall Patel vacates Fred Korematsu\'s conviction via writ of error coram nobis after evidence emerges that the government suppressed and destroyed evidence contradicting claims of military necessity' },
    { date: 'August 10, 1988', event: 'President Reagan signs the Civil Liberties Act of 1988, formally apologizing on behalf of the United States and authorizing $20,000 in reparations to each surviving internee — approximately 82,000 individuals' },
    { date: 'October 9, 1990', event: 'The first reparations payments are distributed, accompanied by a signed letter of apology from President George H.W. Bush acknowledging that the internment was \'a grave wrong\'' },
    { date: 'January 15, 1998', event: 'President Clinton awards the Presidential Medal of Freedom to Fred Korematsu, recognizing his lifelong fight for civil rights and justice' },
    { date: 'June 26, 2018', event: 'In Trump v. Hawaii, the Supreme Court formally repudiates Korematsu v. United States, with Chief Justice Roberts writing that \'Korematsu was gravely wrong the day it was decided\' — though critics note it has never been formally overruled' }
  ],
  legalOutcomes: [
    { defendant: 'Fred Korematsu', charge: 'Violation of Civilian Exclusion Order No. 34 — remaining in a military area contrary to military orders', outcome: 'Convicted 1942; Supreme Court upheld conviction 6-3 in Korematsu v. United States (1944); conviction vacated via coram nobis in 1983 after government suppression of evidence was proven' },
    { defendant: 'Gordon Hirabayashi', charge: 'Violation of military curfew and exclusion orders imposed on persons of Japanese ancestry', outcome: 'Convicted 1942; Supreme Court upheld conviction unanimously in Hirabayashi v. United States (1943); conviction overturned by Ninth Circuit in 1987' },
    { defendant: 'Minoru Yasui', charge: 'Deliberate violation of military curfew order to create constitutional test case', outcome: 'Convicted 1942; Supreme Court upheld conviction in Yasui v. United States (1943); conviction vacated posthumously via coram nobis in 1984' },
    { defendant: 'Mitsuye Endo', charge: 'Habeas corpus petition challenging continued detention of a loyal U.S. citizen', outcome: 'Supreme Court ruled unanimously in Ex parte Endo (1944) that the government could not detain loyal citizens — effectively ordered the closure of internment camps' },
    { defendant: 'U.S. Government', charge: 'Systematic violation of civil liberties of 120,000+ persons of Japanese ancestry through mass incarceration without due process', outcome: 'Civil Liberties Act of 1988: Formal presidential apology and $20,000 reparations to each surviving internee; CWRIC found internment motivated by racial prejudice, not military necessity' },
    { defendant: 'Heart Mountain Draft Resisters (63 individuals)', charge: 'Refusal to comply with Selective Service orders while imprisoned in internment camps without restoration of civil rights', outcome: 'Convicted in the largest mass trial in Wyoming history (1944); pardoned by President Truman in 1947; formally recognized for their principled stand by the JACL in 2002' }
  ],
  charges: [
    { statute: 'Fifth Amendment — Due Process Clause', description: 'The forced removal and incarceration of 120,000+ persons without individual hearings, charges, or evidence of wrongdoing constituted a wholesale deprivation of liberty without due process of law.', count: 'Approximately 120,000 individuals deprived of liberty without any form of due process' },
    { statute: 'Fifth Amendment — Equal Protection (Reverse Incorporation)', description: 'The internment program targeted individuals solely based on their Japanese ancestry, constituting invidious racial discrimination by the federal government in violation of equal protection principles.', count: 'Entire Japanese American population of the West Coast subjected to race-based exclusion' },
    { statute: 'Fourteenth Amendment — Equal Protection Clause', description: 'State officials, particularly in California, actively participated in and facilitated the racially discriminatory removal and incarceration program, violating the equal protection rights of Japanese American citizens.', count: 'State-level enforcement of discriminatory curfew, exclusion, and property seizure orders' },
    { statute: 'Fourth Amendment — Unreasonable Searches and Seizures', description: 'Warrantless raids on Japanese American homes, confiscation of personal property including radios, cameras, and firearms, and forced entry into dwellings without probable cause or judicial authorization.', count: 'Thousands of warrantless searches and property seizures conducted in the weeks following Pearl Harbor' },
    { statute: 'Article I, Section 9 — Suspension of Habeas Corpus', description: 'Japanese Americans were imprisoned without the ability to meaningfully challenge their detention, effectively suspending the writ of habeas corpus without the congressional authorization required by the Constitution.', count: 'Mass detention without access to meaningful habeas review for the duration of imprisonment' },
    { statute: 'Geneva Convention (III) — Treatment of Prisoners', description: 'While classified as civilian detainees rather than prisoners of war, internees were held in conditions that violated international standards: armed guards, barbed wire, shoot-to-kill orders, inadequate housing, and forced labor details.', count: 'Systematic violations across all ten WRA camps from 1942 to 1946' },
    { statute: '18 U.S.C. § 242 — Deprivation of Rights Under Color of Law', description: 'Government officials willfully deprived Japanese Americans of their constitutional rights under the authority of Executive Order 9066 and subsequent military orders, knowing the action was racially motivated and unsupported by evidence.', count: 'Systematic deprivation carried out by military and civilian officials at all levels of government' },
    { statute: '18 U.S.C. § 1001 — False Statements / Fraud Upon the Court', description: 'Solicitor General Charles Fahy and other government attorneys knowingly presented false information and suppressed exculpatory evidence before the Supreme Court in Korematsu, Hirabayashi, and Yasui cases.', count: 'Multiple instances of deliberate misrepresentation in at least three Supreme Court cases' }
  ],
  sources: [
    { title: 'National Archives: Executive Order 9066 and Japanese American Internment', url: 'https://www.archives.gov/education/lessons/japanese-relocation', date: 'National Archives' },
    { title: 'Commission on Wartime Relocation — Personal Justice Denied (Full Report)', url: 'https://www.archives.gov/research/japanese-americans/justice-denied', date: 'CWRIC, 1983' },
    { title: 'Densho Digital Repository — Japanese American Incarceration History and Testimony', url: 'https://densho.org/', date: 'Densho Encyclopedia' },
    { title: 'National Park Service: Manzanar National Historic Site', url: 'https://www.nps.gov/manz/learn/historyculture/index.htm', date: 'National Park Service' },
    { title: 'Library of Congress: Japanese American Internment Collection', url: 'https://www.loc.gov/collections/japanese-american-internment-camp-newspapers/', date: 'Library of Congress' },
    { title: 'Fred T. Korematsu Institute — Case History and Civil Rights Legacy', url: 'https://www.korematsuinstitute.org/', date: 'Korematsu Institute' },
    { title: 'Korematsu v. United States, 323 U.S. 214 (1944) — Supreme Court Opinion', url: 'https://supreme.justia.com/cases/federal/us/323/214/', date: 'Justia, 1944' },
    { title: 'Smithsonian National Museum of American History: Japanese American Incarceration', url: 'https://americanhistory.si.edu/righting-wrong-japanese-americans-and-world-war-ii', date: 'Smithsonian' },
    { title: 'University of Washington: Camp Harmony and Minidoka Exhibit', url: 'https://www.lib.washington.edu/exhibits/harmony/', date: 'University of Washington Libraries' },
    { title: 'Civil Liberties Act of 1988 — Full Text (Public Law 100-383)', url: 'https://www.congress.gov/bill/100th-congress/house-bill/442', date: 'Congress.gov, 1988' }
  ]
};

export default function JapaneseInternmentPage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-blood-500" />The Cover-Up &amp; Denial</h2>
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
