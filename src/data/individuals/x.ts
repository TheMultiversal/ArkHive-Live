// Individual profile data shard
import type { IndividualProfile } from './types';

const profiles: Record<string, IndividualProfile> = {
 'xi-jinping': {
 name: 'Xi Jinping',
 title: 'President of the People\'s Republic of China',
 role: 'General Secretary of CPC, President of PRC, Chairman of CMC (2012-present)',
 riskLevel: 'critical',
 description: 'Xi Jinping is the paramount leader of China, holding the titles of General Secretary of the Communist Party, President of the People\'s Republic, and Chairman of the Central Military Commission. He has consolidated more power than any leader since Mao, abolished presidential term limits, overseen the mass detention of over one million Uyghurs in Xinjiang, crushed Hong Kong\'s democratic movement, expanded surveillance technology globally, and presided over economic coercion campaigns against multiple nations.',
 birthDate: 'June 15, 1953',
 birthPlace: 'Beijing, China',
 netWorth: 'Unknown (family reported wealth of $1.5 billion)',
 education: ['Doctor of Law, Tsinghua University (2002)', 'Chemical Engineering, Tsinghua University (1979)'],
 affiliations: [
 { name: 'Chinese Communist Party', role: 'General Secretary (2012-present)', type: 'organization' },
 { name: 'People\'s Republic of China', role: 'President (2013-present)', type: 'agency' },
 { name: 'Central Military Commission', role: 'Chairman (2012-present)', type: 'agency' },
 ],
 controversies: [
 'UYGHUR GENOCIDE: Over one million Uyghurs detained in concentration camps in Xinjiang, forced labor, forced sterilization, cultural erasure',
 'HONG KONG CRACKDOWN: Imposed National Security Law (2020) crushing democratic movement, arrested hundreds of activists',
 'TERM LIMIT ABOLITION: Removed presidential term limits in 2018, enabling indefinite rule',
 'SURVEILLANCE STATE: Built world\'s most extensive surveillance system, social credit scoring, facial recognition tracking',
 'COVID COVER-UP: Initial suppression of COVID-19 information, silencing of whistleblower doctors, WHO obstruction',
 'SOUTH CHINA SEA MILITARIZATION: Built military islands in disputed waters, violating international tribunal ruling',
 'TAIWAN THREATS: Escalating military provocations against Taiwan',
 'ECONOMIC COERCION: Trade restrictions against Australia, Lithuania, and others for political disagreements',
 'DISAPPEARANCES: Tennis star Peng Shuai, billionaire Jack Ma, and others disappeared or silenced after crossing party lines',
 'TIBET REPRESSION: Continued cultural and religious suppression of Tibetan people',
 ],
 charges: [
 { statute: 'Geneva Convention / Genocide Convention', description: 'Uyghur mass detention, forced sterilization, and cultural genocide in Xinjiang', category: 'Genocide' },
 { statute: 'International Covenant on Civil and Political Rights', description: 'Systematic repression of free speech, assembly, and democratic participation', category: 'Human Rights' },
 ],
 relatedInvestigations: [
 { title: 'Uyghur Genocide', slug: 'uyghur-genocide', severity: 'critical' },
 { title: 'Surveillance State', slug: 'surveillance-state', severity: 'critical' },
 ],
 timeline: [
 { date: '1953', event: 'Born in Beijing to revolutionary family (father Xi Zhongxun was CPC leader)' },
 { date: '1969', event: 'Sent to rural Shaanxi province during Cultural Revolution' },
 { date: '1974', event: 'Joins Chinese Communist Party' },
 { date: '2007', event: 'Elevated to Politburo Standing Committee' },
 { date: '2012', event: 'Becomes General Secretary of CPC and Chairman of CMC' },
 { date: '2013', event: 'Becomes President of PRC, launches anti-corruption campaign targeting rivals' },
 { date: '2017', event: '"Xi Jinping Thought" enshrined in party constitution' },
 { date: '2018', event: 'Abolishes presidential term limits' },
 { date: '2019', event: 'Hong Kong protests begin; crackdown follows' },
 { date: '2020', event: 'COVID-19 emerges from Wuhan; initial cover-up' },
 { date: '2020', event: 'National Security Law imposed on Hong Kong' },
 { date: '2021', event: 'Declared "common prosperity" campaign, crackdowns on tech sector' },
 { date: '2022', event: 'Secures unprecedented third term' },
 ],
 socialMedia: [],
 sources: [
 { title: 'Xinjiang Police Files', url: 'https://www.xinjiangpolicefiles.org/', date: '2022' },
 { title: 'China Cables (ICIJ)', url: 'https://www.icij.org/investigations/china-cables/', date: '2019' },
 ],
 aliases: ['Xi Dada', 'Chairman Xi'],
 knownAssociates: [
 { name: 'Vladimir Putin', relationship: 'Strategic partner, "no limits" friendship declared', href: '/entities/individuals/vladimir-putin' },
 ],
 },

 'xanana-gusmao': {
 name: 'Xanana Gusmão',
 title: 'East Timorese Independence Leader and President',
 role: 'Resistance Commander; Political Prisoner; First President of East Timor',
 riskLevel: 'low',
 description: 'Kay Rala Xanana Gusmão is an East Timorese revolutionary leader who commanded the armed resistance against Indonesia\'s brutal 24-year occupation of East Timor (1975-1999). Indonesia invaded East Timor on December 7; 1975; with the tacit approval of U.S. President Gerald Ford and Secretary of State Henry Kissinger; who had visited Jakarta the day before and gave Suharto a green light. The occupation killed an estimated 100;000 to 180;000 East Timorese out of a population of roughly 600;000; representing one of the worst genocides per capita in the 20th century. Gusmão led the Falintil guerrilla forces from 1981 until his capture by Indonesian forces in 1992; after which he was sentenced to life in prison (later reduced to 20 years). From prison; he continued to lead the resistance movement. The November 12; 1991 Santa Cruz massacre; where Indonesian troops opened fire on a peaceful memorial procession killing at least 250 people; was filmed by journalist Max Stahl and broadcast internationally; finally bringing global attention to the occupation. After the 1999 UN-supervised independence referendum (78.5% voted for independence); Indonesian military-backed militias conducted a scorched-earth campaign destroying 70% of the country\'s infrastructure. An Australian-led international force (INTERFET) intervened. Gusmão was released from prison; served as the first President of East Timor (2002-2007); then as Prime Minister (2007-2015; 2023-present). The U.S.; UK; and Australia supplied Indonesia with weapons throughout the occupation; with the U.S. providing approximately $1.1 billion in military aid between 1975 and 1999.',
 birthDate: 'June 20, 1946',
 birthPlace: 'Manatuto, Portuguese Timor',
 education: ['Jesuit Seminary (did not complete)', 'Self-educated resistance leader'],
 affiliations: [
 { name: 'Falintil', role: 'Commander of Armed Resistance (1981-1999)', type: 'organization' },
 { name: 'CNRT (National Congress for Timorese Reconstruction)', role: 'President', type: 'organization' },
 { name: 'Government of East Timor', role: 'First President (2002-2007); Prime Minister (2007-2015; 2023-present)', type: 'agency' },
 ],
 controversies: [
 'The Indonesian occupation he resisted killed 100;000-180;000 East Timorese (one-quarter to one-third of the population); one of the worst genocides per capita in the 20th century',
 'The U.S. provided approximately $1.1 billion in military aid to Indonesia during the 24-year occupation; with Ford and Kissinger giving Suharto a green light for the 1975 invasion',
 'The 1991 Santa Cruz massacre of 250+ peaceful mourners by Indonesian troops was filmed and broadcast internationally; finally generating global outrage after 16 years of silence',
 'After the 1999 independence referendum; Indonesian-backed militias destroyed 70% of East Timor\'s infrastructure in a scorched-earth campaign; killing approximately 1;400 more people',
 'Australia; the UK; and other Western nations continued arms sales to Indonesia throughout the occupation; prioritizing access to Timor Sea oil and gas over human rights',
 'As Prime Minister; Gusmão faced criticism for authoritarian tendencies; centralizing power; and the slow pace of economic development in one of Asia\'s poorest nations',
 ],
 charges: [
 { statute: 'Indonesian Military Court', description: 'Sentenced to life imprisonment for rebellion (1993); reduced to 20 years; released 1999', category: 'Political Prisoner' },
 ],
 relatedInvestigations: [
 { title: 'East Timor Genocide', slug: 'east-timor-genocide', severity: 'critical' },
 ],
 timeline: [
 { date: 'June 20, 1946', event: 'Born in Manatuto; Portuguese Timor' },
 { date: 'December 7, 1975', event: 'Indonesia invades East Timor; one day after Ford and Kissinger visit Jakarta' },
 { date: '1981', event: 'Becomes commander of Falintil resistance forces' },
 { date: 'November 12, 1991', event: 'Santa Cruz massacre: Indonesian troops kill 250+ at peaceful memorial; filmed by Max Stahl' },
 { date: 'November 20, 1992', event: 'Captured by Indonesian forces; later sentenced to life in prison' },
 { date: 'August 30, 1999', event: 'UN-supervised referendum: 78.5% vote for independence' },
 { date: 'September 1999', event: 'Indonesian-backed militias destroy 70% of infrastructure; INTERFET international force intervenes' },
 { date: 'May 20, 2002', event: 'East Timor becomes independent; Gusmão inaugurated as first President' },
 { date: '2007', event: 'Becomes Prime Minister' },
 { date: '2023', event: 'Returns as Prime Minister for a new term' },
 ],
 socialMedia: [],
 sources: [
 { title: 'CAVR (Commission for Reception, Truth and Reconciliation): Chega! Report', url: 'https://www.etan.org/news/2006/cavr.htm', date: '2005' },
 { title: 'National Security Archive: East Timor Declassified', url: 'https://nsarchive2.gwu.edu/NSAEBB/NSAEBB62/', date: '2001' },
 { title: 'UN Security Council: East Timor', url: 'https://www.un.org/en/', date: '1999' },
 ],
 aliases: ['Kay Rala Xanana Gusmão'],
 knownAssociates: [
 { name: 'Jose Ramos-Horta', relationship: 'Fellow East Timorese independence leader; Nobel Peace Prize laureate; current President', href: '/entities/individuals/jose-ramos-horta' },
 { name: 'Suharto', relationship: 'Indonesian dictator who ordered the invasion and occupation of East Timor', href: '/entities/individuals/suharto' },
 { name: 'Henry Kissinger', relationship: 'U.S. Secretary of State who greenlit the Indonesian invasion', href: '/entities/individuals/henry-kissinger' },
 ],
 },

 'xavier-becerra': {
 name: 'Xavier Becerra',
 title: 'U.S. Secretary of Health and Human Services',
 role: 'HHS Secretary; Former California Attorney General',
 riskLevel: 'medium',
 description: 'Xavier Becerra served as the 25th U.S. Secretary of Health and Human Services from 2021 to 2024 under President Biden; previously serving as California Attorney General (2017-2021) and as a U.S. Representative from California for 24 years (1993-2017). As HHS Secretary; Becerra oversaw the federal COVID-19 pandemic response during its later stages; including vaccine distribution; booster campaigns; and the eventual end of the public health emergency declaration in May 2023. Critics argued that HHS under his leadership was slow to adapt COVID guidance; maintained institutional inertia; and failed to adequately address the mental health crisis exacerbated by the pandemic. As California AG; Becerra was a strong advocate for the Affordable Care Act; leading multi-state coalitions to defend it in court; and pursued enforcement actions against healthcare fraud. However; his tenure drew controversy for aggressive prosecution of investigative journalist David Daleiden; who secretly recorded Planned Parenthood officials discussing fetal tissue procurement. Daleiden and the Center for Medical Progress were charged with 15 felony counts of invasion of privacy; which critics from press freedom organizations argued was a chilling attack on undercover journalism. The charges were eventually reduced. Becerra\'s 24-year congressional career included service on the Ways and Means Committee and a leadership position as chairman of the House Democratic Caucus; but he was criticized for a lack of healthcare management experience when nominated to lead HHS during a pandemic.',
 birthDate: 'January 26, 1958',
 birthPlace: 'Sacramento, California',
 education: ['Stanford University, BA Economics', 'Stanford Law School, JD'],
 affiliations: [
 { name: 'U.S. Department of Health and Human Services', role: '25th Secretary (2021-2024)', type: 'agency' },
 { name: 'State of California', role: 'Attorney General (2017-2021)', type: 'agency' },
 { name: 'U.S. House of Representatives', role: 'Representative, CA-34 (1993-2017)', type: 'agency' },
 ],
 controversies: [
 'Prosecuted investigative journalist David Daleiden with 15 felony counts for secretly recording Planned Parenthood officials; press freedom advocates called it a chilling attack on undercover journalism',
 'Nominated to lead HHS during a pandemic despite having no healthcare administration or public health management experience; his background was entirely in law and politics',
 'HHS was criticized for slow adaptation of COVID-19 guidance; maintaining outdated recommendations on masking; testing; and quarantine protocols longer than warranted by evolving evidence',
 'As AG; received campaign contributions from Planned Parenthood while simultaneously deciding to prosecute the journalist who investigated Planned Parenthood; creating appearance of conflict of interest',
 'Oversaw HHS during the end of the COVID public health emergency in May 2023; which resulted in millions losing Medicaid coverage during the "unwinding" process; 15+ million disenrolled',
 'As a congressman; was named in the Awan brothers IT scandal when former staffers were investigated for unauthorized access to congressional computer systems; though Becerra was not personally charged',
 ],
 charges: [],
 relatedInvestigations: [
 { title: 'COVID-19 Pandemic Response', slug: 'covid-pandemic-response', severity: 'critical' },
 ],
 timeline: [
 { date: 'January 26, 1958', event: 'Born in Sacramento; California' },
 { date: '1993', event: 'Elected to U.S. House of Representatives from California\'s 30th (later 34th) district' },
 { date: '2013', event: 'Became chairman of the House Democratic Caucus' },
 { date: '2017', event: 'Appointed California Attorney General by Governor Jerry Brown' },
 { date: '2017', event: 'Filed 15 felony charges against journalist David Daleiden over Planned Parenthood recordings' },
 { date: '2021', event: 'Confirmed as 25th Secretary of Health and Human Services' },
 { date: 'May 2023', event: 'Oversaw end of COVID-19 public health emergency; triggering Medicaid unwinding that disenrolled 15+ million' },
 { date: '2024', event: 'Left HHS at end of Biden administration' },
 ],
 socialMedia: [],
 sources: [
 { title: 'HHS: Secretary Biography', url: 'https://www.hhs.gov/about/leadership/secretary/', date: '2023' },
 { title: 'KFF: Medicaid Unwinding Tracker', url: 'https://www.kff.org/medicaid/issue-brief/medicaid-enrollment-and-unwinding-tracker/', date: '2023' },
 ],
 aliases: [],
 knownAssociates: [
 { name: 'Joe Biden', relationship: 'Nominated him as HHS Secretary', href: '/entities/individuals/joe-biden' },
 ],
 },






};

export default profiles;
