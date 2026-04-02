// Investigation data shard
import type { InvestigationData } from './types';

const investigations_y: Record<string, InvestigationData> = {
  'yemen-war-crimes': {
 title: 'Yemen War Crimes: The Forgotten Genocide',
 subtitle: 'How the Saudi-led coalition, armed and supported by the United States and United Kingdom, killed over 150,000 people and created the world\'s worst humanitarian crisis in Yemen through a bombing campaign that deliberately targeted civilians and infrastructure.',
 severity: 'critical',
 category: 'War Crimes',
 date: 'June 6, 2023',
 lastUpdated: 'January 9, 2025',
 summary: 'The Saudi-led coalition\'s war in Yemen, backed by U.S. weapons, intelligence, and logistics, has killed over 150,000 people, created the world\'s worst humanitarian crisis affecting 24 million people, and involved systematic targeting of hospitals, schools, weddings, and civilian infrastructure.',
 content: [
 'The Saudi-led coalition began its air campaign in Yemen in March 2015, intervening in a civil war between the internationally recognized government and Houthi rebels. Over eight years of bombing, the coalition conducted over 25,000 airstrikes using American and British-supplied munitions. The Yemen Data Project documented that approximately one-third of all airstrikes hit non-military targets. Specific documented attacks on protected sites include a funeral hall in Sanaa (140 killed), a school bus in Dahyan (40 children killed), and repeated strikes on hospitals run by Doctors Without Borders.',
 'The United States provided critical support for the Saudi campaign including: precision-guided munitions (over $110 billion in arms sales to Saudi Arabia under the Obama and Trump administrations), aerial refueling for coalition aircraft (discontinued in 2018 after the Khashoggi murder), intelligence sharing including target identification, and maintenance of Saudi aircraft. U.S.-manufactured bombs were recovered from sites of strikes on civilians, including a Lockheed Martin bomb used on the school bus and Raytheon munitions found at a wedding site.',
 'The humanitarian catastrophe in Yemen is the world\'s worst. The UN estimated that 24 million people; 80% of Yemen\'s population; required humanitarian assistance. An estimated 85,000 children under five died from hunger and disease between 2015 and 2018 alone. The coalition imposed a naval and air blockade that restricted food, fuel, and medicine imports to a country that imports 90% of its food. Cholera outbreaks infected over 2.5 million people in the largest epidemic in modern history.',
 'Accountability has been virtually nonexistent. The UN Human Rights Council established a Group of Eminent Experts to investigate war crimes in Yemen, but Saudi Arabia successfully lobbied to end the investigation in 2021. A Saudi-established Joint Incidents Assessment Team, tasked with investigating coalition strikes, functioned as a whitewash mechanism that exonerated the coalition in nearly every case. Arms sales continued despite documented violations of international humanitarian law.',
 'The Yemen war exposed the complicity of Western democracies in atrocities committed by their allies. Congress passed bipartisan resolutions to end U.S. support for the Saudi campaign, which Trump vetoed. Biden pledged to end support but continued arms sales and defensive cooperation. The UK continued selling arms despite a Court of Appeal ruling that the sales were unlawful without proper assessment of civilian harm. The war demonstrated that major arms-exporting nations will prioritize weapons contracts and strategic alliances over civilian protection and international law.'
 ],
 tags: ['War Crimes', 'Yemen', 'Saudi Arabia', 'Arms Sales', 'Civilian Targeting', 'Humanitarian Crisis', 'US Complicity', 'Coalition Bombing'],
 sources: [
 { title: 'UN Group of Eminent Experts on Yemen Reports', url: 'https://www.ohchr.org/en/hr-bodies/hrc/yemen/index', type: 'Report' },
 { title: 'Yemen Data Project: Airstrike Database', url: 'https://yemendataproject.org/', type: 'Research' },
 { title: 'Mwatana for Human Rights (Yemeni NGO)', url: 'https://mwatana.org/en/', type: 'Report' },
 { title: 'AP Investigation: US Weapons in Yemen', url: 'https://apnews.com/hub/yemen', type: 'Investigation' },
 { title: 'CNN: Made in America Bombs in Yemen', url: 'https://www.cnn.com/interactive/2018/09/world/yemen-saudi-arms-intl/', type: 'Investigation' },
 { title: 'Senate Joint Resolution on Yemen War Powers', url: 'https://www.congress.gov/bill/116th-congress/senate-joint-resolution/7', type: 'Congressional Record' },
 { title: 'Arms Control Association: US Arms Sales to Saudi Arabia', url: 'https://www.armscontrol.org/', type: 'Research' }
 ],
 affiliations: [
 { id: '1', name: 'Saudi Arabia', type: 'organization', relationship: 'Led the coalition that conducted 25,000+ airstrikes; one-third hit non-military targets including hospitals, schools, weddings, and funerals', href: '/entities/organizations/saudi-arabian-government' },
 { id: '2', name: 'Raytheon Company (now RTX Corporation)', type: 'corporation', relationship: 'Manufactured precision-guided munitions found at sites of strikes on civilians, including the school bus attack in Dahyan that killed 40 children', href: '/entities/corporations/raytheon' },
 { id: '3', name: 'Pentagon', type: 'agency', relationship: 'Provided aerial refueling, intelligence sharing, target identification, and aircraft maintenance for Saudi coalition operations', href: '/entities/agencies/pentagon' },
 { id: '4', name: 'Lockheed Martin', type: 'corporation', relationship: 'Supplied bombs identified at civilian strike sites, including munitions used on the Dahyan school bus', href: '/entities/corporations/lockheed-martin' },
 { id: '5', name: 'United States Congress', type: 'agency', relationship: 'Passed bipartisan War Powers resolutions to end US support, which Trump vetoed. Continued approving arms sales to Saudi Arabia', href: '/entities/agencies/congress' }
 ],
   eventOriginDate: '2015-03-26',
   lastActivityDate: '2025-01-09',
   pageUpdatedDate: '2026-03-29',
   timeline: [
     { date: '2015-03-26', event: 'Saudi-led coalition launches Operation Decisive Storm, beginning airstrikes against Houthi targets in Yemen. The US provides intelligence, aerial refueling, and logistical support from day one', type: 'critical' },
     { date: '2016-10-08', event: 'Coalition airstrike hits a funeral hall in Sanaa, killing at least 140 mourners and wounding 500+. The US briefly suspends precision-guided munition sales but resumes within months', type: 'critical' },
     { date: '2017-01-29', event: 'First US military operation in Yemen under Trump: Navy SEAL raid in Yakla kills 30 civilians including 10 children under age 13. Trump authorizes expanded drone strikes', type: 'critical' },
     { date: '2018-08-09', event: 'Coalition airstrike using a US-manufactured Lockheed Martin bomb hits a school bus in Dahyan, killing 40 children on a field trip. CNN identifies the bomb by serial number', type: 'critical' },
     { date: '2018-11', event: 'US suspends aerial refueling for coalition aircraft after the Khashoggi murder, but continues arms sales, intelligence sharing, and maintenance support', type: 'political' },
     { date: '2019-04', event: 'Congress passes bipartisan War Powers Resolution (SJ Res 7) to end US military support for Saudi coalition. Trump vetoes it, the second veto of his presidency', type: 'political' },
     { date: '2021-02', event: 'Biden announces end of US support for "offensive operations" in Yemen but continues arms sales and "defensive" cooperation; Saudi strikes on civilians continue', type: 'political' },
     { date: '2021-10', event: 'Saudi Arabia lobbies successfully to end the UN Group of Eminent Experts investigation into Yemen war crimes, eliminating the only independent accountability mechanism', type: 'political' },
     { date: '2022-04', event: 'UN-brokered truce begins, reducing airstrikes significantly. An estimated 377,000 people have died, with 60% of deaths caused by hunger, disease, and lack of healthcare from the blockade', type: 'default' },
     { date: '2024', event: 'Houthi attacks on Red Sea shipping escalate after October 7; US and UK launch strikes on Houthi targets. The underlying humanitarian catastrophe affecting 24 million Yemenis remains unresolved', type: 'critical' }
   ],
 },
  'youtube-extremism': {
 title: 'YouTube\'s Radicalization Pipeline: How the Algorithm Breeds Extremism',
 subtitle: 'How YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content, creating a radicalization pipeline that contributed to mass shootings, conspiracy movements, and the erosion of shared reality.',
 severity: 'high',
 category: 'Media & Disinformation',
 date: 'June 9, 2020',
 lastUpdated: 'August 11, 2025',
 summary: 'YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content, creating a radicalization pipeline. Research found that users who watched conservative political content were progressively recommended white supremacist, conspiracy, and extremist material.',
 content: [
 'Research by Zeynep Tufekci, Guillaume Chaslot (a former YouTube engineer), and others documented that YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content. A user watching mainstream conservative content would be progressively recommended more radical material, from Fox News clips to conspiracy theories to white nationalist content. The algorithm optimized for "watch time"; extreme and outrageous content kept users engaged longer, so the algorithm promoted it.',
 'The radicalization pipeline had measurable real-world consequences. Multiple mass shooters and terrorists were radicalized partly through YouTube content, including the Christchurch attacker, the El Paso shooter, and numerous others. YouTube served as the primary platform for QAnon content before partial restrictions were implemented in 2020. Flat Earth conspiracy content, anti-vaccine misinformation, and climate change denial were amplified by recommendation algorithms to audiences of millions.',
 'YouTube\'s scale made the problem uniquely dangerous. With over 2 billion monthly users watching over 1 billion hours of video daily, YouTube\'s recommendation algorithm is the world\'s most powerful content distributor. An estimated 70% of watch time on the platform was driven by recommendations rather than user searches. This meant that YouTube\'s algorithm, not user choice, was the primary determinant of what billions of people watched, making the company\'s algorithmic choices a matter of public safety.',
 'Internal documents and whistleblower testimony revealed that YouTube was aware of the radicalization problem for years but resisted meaningful changes because extremist content drove engagement and advertising revenue. When researchers published findings about the recommendation pipeline, YouTube disputed the methodology rather than addressing the problem. Limited policy changes were implemented only after sustained public pressure and advertiser boycotts.',
 'YouTube\'s response has been incremental and insufficient. The company reduced recommendations of "borderline" content in 2019, removed some extremist channels, and added information panels to conspiracy-related videos. However, researchers found that the algorithm continued to recommend extremist content, particularly in non-English languages and in countries where YouTube devoted fewer moderation resources. The fundamental tension between an advertising-driven business model that rewards engagement and the public interest in preventing radicalization remained unresolved.'
 ],
 tags: ['YouTube', 'Radicalization', 'Algorithm', 'Extremism', 'QAnon', 'White Supremacy', 'Content Moderation', 'Platform Accountability'],
 sources: [
 { title: 'Zeynep Tufekci: YouTube Recommendation Algorithm Study', url: 'https://www.nytimes.com/2018/03/10/opinion/sunday/youtube-politics-radical.html', type: 'Research' },
 { title: 'Guillaume Chaslot: AlgoTransparency Project', url: 'https://www.algotransparency.org/', type: 'Research' },
 { title: 'Mozilla Foundation: YouTube Regrets Report', url: 'https://foundation.mozilla.org/en/youtube/findings/', type: 'Research' },
 { title: 'NYT: What YouTube Feeds Children', url: 'https://www.nytimes.com/2019/06/03/world/americas/youtube-pedophiles.html', type: 'Investigation' },
 { title: 'Christchurch Call: Eliminating Terrorist Content Online', url: 'https://www.christchurchcall.com/', type: 'Government Report' },
 { title: 'House Commerce Committee: Google/YouTube CEO Hearing', url: 'https://energycommerce.house.gov/', type: 'Congressional Record' }
 ],
 affiliations: [
 { id: '1', name: 'Google', type: 'corporation', relationship: 'YouTube parent company; designed and deployed the recommendation algorithm that drove 70% of watch time and systematically promoted extremist content for engagement', href: '/entities/corporations/google' },
 { id: '2', name: 'FTC', type: 'agency', relationship: 'Fined YouTube $170 million in 2019 for COPPA violations (collecting children data) but has not addressed algorithmic radicalization', href: '/entities/agencies/ftc' },
 { id: '3', name: 'United States Congress', type: 'agency', relationship: 'Held hearings on platform radicalization but has not passed comprehensive platform accountability legislation', href: '/entities/agencies/congress' }
 ],
   eventOriginDate: '2012-03-01',
   lastActivityDate: '2025-08-11',
   pageUpdatedDate: '2026-03-29',
      timeline: [
     { date: '2012-03', event: 'YouTube switches its recommendation algorithm from optimizing for clicks to optimizing for watch time, creating the structural incentive that would drive radicalization: extreme content keeps users engaged longer', type: 'critical' },
     { date: '2015', event: 'ISIS uses YouTube extensively for recruitment propaganda. YouTube begins removing content under its terrorism policy but the recommendation algorithm continues directing users toward extremist material', type: 'default' },
     { date: '2017', event: '"Adpocalypse": major advertisers pull spending after WSJ investigation finds ads running alongside extremist content. YouTube tightens monetization but does not change the underlying recommendation algorithm', type: 'financial' },
     { date: '2018-01', event: 'Former YouTube engineer Guillaume Chaslot launches AlgoTransparency project documenting how the recommendation algorithm systematically promoted conspiracy theories and extremist content', type: 'default' },
     { date: '2018-03', event: 'Zeynep Tufekci publishes NYT analysis showing YouTube acts as "one of the most powerful radicalizing instruments of the 21st century," directing users from mainstream to extreme content', type: 'critical' },
     { date: '2019-01', event: 'YouTube announces reduction in recommendations of "borderline" content, the first acknowledgment that its algorithm promoted harmful material. Effect is limited and does not apply to non-English content', type: 'political' },
     { date: '2019-03-15', event: 'Christchurch mosque shooter livestreams attack on Facebook and posts manifesto to 8chan. YouTube struggles to remove re-uploads, with copies appearing faster than automated systems can detect them', type: 'critical' },
     { date: '2019-09', event: 'FTC and NY AG fine YouTube $170 million for collecting personal information from children in violation of COPPA. The fine represents less than 2 days of Google ad revenue', type: 'financial' },
     { date: '2020-10', event: 'YouTube bans QAnon content after years of amplifying it through recommendations. By this point, QAnon has grown from a fringe conspiracy to a movement with followers elected to Congress', type: 'political' },
     { date: '2023', event: 'Mozilla Foundation "YouTube Regrets" research finds algorithm continues recommending harmful content at significant rates, particularly in non-English languages and developing countries with fewer moderation resources', type: 'default' }
     ],
 },
 'youth-incarceration-abuse': {
  title: 'Youth Incarceration and Juvenile Detention Abuse',
  subtitle: 'How the United States incarcerates more children than any other nation, with 36,000 youth in detention facilities where physical abuse, sexual assault, and solitary confinement are documented at epidemic levels',
  severity: 'critical' as const,
  category: 'Human Rights',
  date: '2024-08-01',
  lastUpdated: '2025-02-15',
  summary: 'The United States incarcerates approximately 36,000 young people on any given day in juvenile detention facilities, group homes, boot camps, and adult prisons. Black youth are incarcerated at 5 times the rate of white youth. DOJ investigations have found unconstitutional conditions in juvenile facilities in virtually every state examined, including routine physical abuse, sexual violence, excessive use of solitary confinement, and inadequate medical and mental health care. The "Kids for Cash" scandal in Pennsylvania revealed judges accepting $2.6 million in bribes to sentence children to for-profit detention facilities, but the systemic incentives that drive youth incarceration extend far beyond individual corruption.',
  content: [
   'The scale of youth incarceration in America dwarfs that of any peer nation. The U.S. incarcerates youth at 5 times the rate of the next highest nation. Approximately 36,000 young people are confined on any given day, and roughly 250,000 pass through the juvenile justice system annually. Black youth are incarcerated at 5 times the rate of white youth, Native American youth at 3 times the rate, and Latino youth at 1.5 times the rate. These disparities exist at every stage: arrest, referral, detention, adjudication, and commitment. A Black teenager is more likely to be arrested, charged, detained, and committed than a white teenager with identical offenses.',
   'Physical and sexual abuse in juvenile facilities is endemic. A DOJ survey (PREA data) found that 7.1% of youth in juvenile detention reported sexual victimization in the prior 12 months, with staff-on-youth victimization more common than youth-on-youth. In facilities under investigation, rates were much higher. DOJ consent decrees have been imposed on juvenile systems in Mississippi, Ohio, New York, Texas, and others after investigations found beatings, chemical spraying, prolonged isolation, denial of medical care, and sexual assault by staff. The closure of notorious facilities like Dozier School for Boys in Florida, where the remains of 55 children were found in unmarked graves, illustrates the historical depth of institutional abuse.',
   'Solitary confinement of children is widely practiced despite universal condemnation. An estimated 30-50% of juvenile facilities use solitary confinement, with some children isolated for weeks or months. The American Academy of Child and Adolescent Psychiatry, the AMA, and the DOJ have all declared that solitary confinement of juveniles is harmful and should be prohibited. Kalief Browder spent nearly two years in solitary at Rikers Island as a teenager and died by suicide after release. Despite these cases, most states have no binding limits on juvenile solitary confinement.',
   'The "Kids for Cash" scandal exposed the corruption that for-profit detention creates. Pennsylvania judges Mark Ciavarella and Michael Conahan accepted $2.6 million in payments from the builders and operators of two private juvenile detention facilities. In exchange, Ciavarella sentenced thousands of children to detention for minor offenses, many without legal representation. Children were sent to detention for schoolyard fights, creating a MySpace page mocking a principal, and stealing loose change. Ciavarella was sentenced to 28 years in prison. But the structural problem persists: private juvenile facilities operate in 26 states, creating financial incentives to fill beds.',
   'The evidence overwhelmingly shows that incarcerating youth is counterproductive. Incarcerated youth have recidivism rates of 70-80% within three years. Community-based alternatives including restorative justice programs, mentoring, family therapy, and diversion programs consistently produce better outcomes at lower cost. Missouri\'s juvenile justice model, which replaced large detention centers with small therapeutic communities, reduced recidivism by 50% and became a national model. Yet political resistance from facility operators, corrections employee unions, and "tough on crime" politicians prevents widespread adoption of evidence-based alternatives.'
  ],
  tags: ['youth incarceration', 'juvenile justice', 'Kids for Cash', 'racial disparity', 'solitary confinement', 'Kalief Browder', 'sexual abuse', 'detention', 'school-to-prison pipeline', 'restorative justice'],
  sources: [
   { title: 'DOJ PREA Juvenile Facility Survey', url: 'https://bjs.ojp.gov/library/publications/sexual-victimization-juvenile-facilities-reported-youth-2018', type: 'Government Report' },
   { title: 'Sentencing Project: Youth Justice Data', url: 'https://www.sentencingproject.org/reports/youth-justice-by-the-numbers/', type: 'Research' },
   { title: 'Annie E. Casey Foundation: JDAI', url: 'https://www.aecf.org/work/juvenile-justice', type: 'Research' },
   { title: 'DOJ Civil Rights Division: Juvenile Facility Investigations', url: 'https://www.justice.gov/crt/special-litigation-section-cases-and-matters/download', type: 'Government' },
   { title: 'NPR: Kids for Cash Judicial Corruption', url: 'https://www.npr.org/2014/03/08/287286626/kids-for-cash-captures-story-of-judicial-corruption', type: 'Investigation' },
   { title: 'New Yorker: Kalief Browder Story', url: 'https://www.newyorker.com/magazine/2014/10/06/before-the-law', type: 'Investigation' },
   { title: 'USF Forensic Investigation: Dozier School Unmarked Graves', url: 'https://www.usf.edu/arts-sciences/departments/anthropology/dozier/', type: 'Research' }
  ],
  affiliations: [
   { id: '1', name: 'DOJ', type: 'agency', relationship: 'Civil Rights Division investigates juvenile facilities and imposes consent decrees; has found unconstitutional conditions in virtually every state examined', href: '/entities/agencies/doj' },
   { id: '2', name: 'HHS', type: 'agency', relationship: 'Office of Juvenile Justice and Delinquency Prevention distributes $300M in grants without conditioning funding on eliminating solitary or racial disparities', href: '/entities/agencies/hhs' },
   { id: '3', name: 'Mark Ciavarella', type: 'individual', relationship: 'Pennsylvania judge sentenced to 28 years for accepting $2.6 million in bribes to sentence children to for-profit detention facilities in the Kids for Cash scandal', href: '/entities/individuals/mark-ciavarella' },
   { id: '4', name: 'Michael Conahan', type: 'individual', relationship: 'Co-conspirator judge who helped arrange the $2.6 million kickback scheme with private juvenile facility builders', href: '/entities/individuals/michael-conahan' }
  ],
  eventOriginDate: '1900-01-01',
  lastActivityDate: '2025-02-15',
  pageUpdatedDate: '2026-03-29',
   timeline: [
     { date: '1899', event: 'Illinois creates the first juvenile court in Cook County, establishing the principle that children should be treated differently from adults. The system rapidly expands nationwide but also creates new pathways for institutionalizing youth', type: 'legal' },
     { date: '1967', event: 'Supreme Court rules in In re Gault that juveniles have due process rights including right to counsel, right to notice of charges, and privilege against self-incrimination. Before this, children could be committed indefinitely without any hearing', type: 'legal' },
     { date: '1974', event: 'Juvenile Justice and Delinquency Prevention Act establishes OJJDP and requires deinstitutionalization of status offenders and separation of juveniles from adult inmates', type: 'legal' },
     { date: '2003', event: 'Pennsylvania judges Mark Ciavarella and Michael Conahan begin accepting $2.6 million in payments from builders of private juvenile facilities in exchange for sentencing thousands of children to detention', type: 'critical' },
     { date: '2009-02', event: 'Kids for Cash scandal exposed. Ciavarella convicted on 12 counts and sentenced to 28 years in federal prison. Pennsylvania Supreme Court vacates 4,000+ juvenile convictions', type: 'legal' },
     { date: '2010', event: 'University of South Florida forensic investigation discovers remains of 55 children in unmarked graves at Arthur G. Dozier School for Boys in Florida, which operated from 1900 to 2011', type: 'critical' },
     { date: '2015-06', event: 'Kalief Browder dies by suicide at age 22 after spending three years at Rikers Island, nearly two in solitary confinement, without trial for allegedly stealing a backpack. His case sparks national outrage', type: 'critical' },
     { date: '2016', event: 'DOJ issues formal guidance stating that solitary confinement of juveniles should be eliminated entirely in federal facilities. Most states ignore the guidance for their own systems', type: 'political' },
     { date: '2020', event: 'COVID-19 pandemic exposes conditions in juvenile facilities where social distancing is impossible. Advocates push for emergency releases; some jurisdictions reduce populations by 30-40% with no increase in youth crime', type: 'default' },
     { date: '2023', event: 'DOJ consent decrees continue to be imposed on juvenile systems; active investigations in multiple states find ongoing patterns of physical abuse, sexual assault, and excessive solitary confinement despite decades of reform efforts', type: 'legal' }
   ],
 },
 'predatory-towing-industry': {
  title: 'Predatory Towing Industry',
  subtitle: 'How Unregulated Tow Companies Exploit Drivers for Thousands',
  severity: 'high' as const,
  category: 'Consumer Protection',
  date: '2024-04-02',
  lastUpdated: '2025-01-16',
  summary: 'Predatory towing companies patrol parking lots, target low-income neighborhoods, and charge exorbitant fees that can triple within days. With minimal regulation in most states and cozy relationships with property owners and local officials, the industry extracts billions from drivers who have little recourse.',
  content: [
   'The towing industry operates in a regulatory vacuum that enables systematic predation. Non-consensual towing, where vehicles are removed from private property without the owners knowledge, generates an estimated $6 billion annually. Tow truck operators patrol parking lots, apartment complexes, and commercial areas, sometimes removing vehicles within minutes of a perceived violation. Drivers return to find their cars gone, then face towing fees, daily storage charges, and administrative costs that can climb from $300 to over $1,500 within a week.',
   'Fee structures are designed to maximize extraction. Many jurisdictions have no statutory caps on towing or storage rates, allowing operators to charge whatever the market will bear. When caps exist, they are often set through industry lobbying at levels far above actual costs. Storage fees accumulate by the day, and many companies require cash payment, creating additional barriers for people who arrive at impound lots after banks close. If a vehicle owner cannot pay within a specified period, the towing company can auction the vehicle, keeping the proceeds regardless of the cars value relative to the charges owed.',
   'Kickback arrangements between towing companies and property owners create perverse incentives. Tow companies pay property owners per-vehicle fees, sometimes $50 or more per tow, for the exclusive right to patrol their lots. This incentivizes property owners to keep signage minimal and rules obscure, maximizing the number of towable vehicles. In some documented cases, towing companies have moved signage, created fake violations, or towed vehicles that were fully in compliance. Apartment residents have had their own vehicles towed from their own parking spaces for minor sticker violations.',
   'Low-income communities bear disproportionate harm. When a minimum-wage worker loses their vehicle to a predatory tow, the cost of retrieval may represent an entire weeks wages. If they cannot pay within the storage window, they lose a vehicle worth thousands. Without transportation, they may lose employment, miss medical appointments, and be unable to transport children. A 2023 consumer advocacy study found that towing complaints correlate strongly with neighborhood income levels, with the highest predatory towing activity concentrated in low-income and minority neighborhoods.',
   'Regulatory reform faces an industry with outsized local political influence. Many towing companies maintain close relationships with local police departments, which assign them to rotation lists for accident and enforcement tows. These relationships create mutual dependencies that insulate the industry from regulation. State-level reform efforts have achieved some progress: several states now cap non-consensual towing fees, require photographic evidence of violations, mandate 24-hour vehicle retrieval access, and regulate signage requirements. However, enforcement remains weak, and the patchwork of local and state rules creates gaps that predatory operators exploit.'
  ],
  tags: ['predatory towing', 'consumer protection', 'impound fees', 'parking enforcement', 'low-income exploitation', 'vehicle seizure'],
  sources: [
   { title: 'Consumerreports Records', url: 'https://www.consumerreports.org/cars/car-maintenance/predatory-towing-what-to-know-a1098773498', type: 'Reference' },
   { title: 'FTC: Consumer Protection in Towing Industry', url: 'https://www.ftc.gov/news-events/topics/consumer-finance/auto-lending', type: 'Government Record' },
   { title: 'National Consumer Law Center: Towing Regulations', url: 'https://www.nclc.org/issues/', type: 'Research' }
  ],
  affiliations: [
   { id: '1', name: 'FTC', type: 'agency', relationship: 'Has authority over unfair and deceptive practices but has not prioritized towing industry; enforcement deferred to state attorneys general and local consumer protection offices' },
   { id: '2', name: 'DOT', type: 'agency', relationship: 'Regulates interstate motor carriers but non-consensual towing is primarily a local and state matter; no federal towing consumer protection standards exist' }
  ],
  eventOriginDate: '2023-01-01',
  lastActivityDate: '2025-01-16',
  pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2023', event: 'A 2023 consumer advocacy study found that towing complaints correlate strongly with neighborhood income levels, with the highest predatory towing activity concentrated in low-income and minority neighborhoods.', type: 'default' },
     { date: '2024', event: 'Subsequent developments in predatory towing industry reveal broader systemic patterns', type: 'default' }
   ],
 },
  'yemen-war': {
 title: 'Yemen War: America\'s Hidden Genocide',
 subtitle: 'U.S.-backed Saudi coalition killed 377,000+ people, created the world\'s worst humanitarian crisis',
 severity: 'critical',
 category: 'Military & Foreign Policy',
 date: '2014-01-01',
 lastUpdated: '2026-03-28',
 summary: 'Since 2015, the United States has provided extensive military support to a Saudi-led coalition waging war in Yemen, including weapons sales exceeding $100 billion, aerial refueling, intelligence sharing, and maintenance of warplanes. The coalition has systematically bombed hospitals, schools, weddings, funerals, school buses, and water treatment facilities. Over 377,000 people have died, including an estimated 150,000 children under five from starvation and preventable disease caused by the coalition\'s naval blockade. Yemen has been called the world\'s worst humanitarian crisis, with 80% of the population (24 million people) requiring aid. Despite clear evidence of war crimes, U.S. arms sales to Saudi Arabia continued under multiple administrations.',
 content: [
   'The Obama administration authorized U.S. support for the coalition partly to "placate" Saudi Arabia after the Iran nuclear deal, trading Yemeni lives for diplomatic capital.',
   'Secretary of State Pompeo falsely certified to Congress that Saudi Arabia was taking steps to minimize civilian casualties, directly contradicting evidence from the Pentagon\'s own assessments.',
   'When the State Department Inspector General began investigating the emergency arms sale declaration, Pompeo fired the IG, Steve Linick.',
   'U.S.-manufactured munitions have been found at the sites of attacks on civilian targets, but the Pentagon has consistently claimed it cannot track weapons after sale.',
   'Media coverage of Yemen has been minimal compared to other conflicts, a 2019 study found Yemen received less than 1% of the coverage given to comparable crises.',
   'The coalition has restricted journalist access to Yemen, making independent verification of casualties and conditions extremely difficult.',
   'The Trump administration declared a false "emergency" to bypass Congressional review of $8 billion in arms sales to Saudi Arabia and the UAE.',
   'Saudi Arabia\'s own internal investigation committee, the JIAT, has systematically cleared the coalition of wrongdoing in virtually every incident examined.',
   'The role of U.S. military personnel in selecting targets and providing real-time intelligence for coalition strikes has been systematically downplayed.'
 ],
 tags: ['military-foreign-policy', 'war'],
 sources: [
   { title: 'UNDP, Assessing the Impact of War on Development in Yemen', url: 'https://www.undp.org/yemen/publications/assessing-impact-war-yemen-pathways-recovery', type: 'Article' },
   { title: 'Human Rights Watch, Yemen: Coalition Bus Bombing Apparent War Crime', url: 'https://www.hrw.org/news/2018/09/02/yemen-coalition-bus-bombing-apparent-war-crime', type: 'Article' },
   { title: 'AP, Inside Yemen\'s Secret Prisons', url: 'https://apnews.com/article/4925f7f0fa654853bd523d1067e1132d', type: 'Article' },
   { title: 'CNN, Made in America: Shrapnel in Yemen Points to U.S.-Made Bomb', url: 'https://www.cnn.com/2018/08/17/middleeast/us-saudi-yemen-bus-bomb-intl/index.html', type: 'Article' },
   { title: 'UN Panel of Experts on Yemen Reports', url: 'https://www.securitycouncilreport.org/un-documents/yemen/', type: 'Article' },
   { title: 'Save the Children, Yemen: 85,000 Children May Have Died from Hunger', url: 'https://www.savethechildren.org/us/about-us/media-and-news/2018-press-releases/yemen-85000-children-may-have-died-from-starvation', type: 'Article' },
   { title: 'The Intercept, The Saudi Coalition\'s Attacks on Civilian Infrastructure', url: 'https://theintercept.com/collections/yemen/', type: 'Article' },
   { title: 'Mwatana for Human Rights, Day of Judgment Report', url: 'https://mwatana.org/en/day-of-judgment/', type: 'Article' }
 ],
 affiliations: [
   { id: 'barack-obama', name: 'Barack Obama', type: 'individual', relationship: 'President who authorized U.S. support for the Saudi-led coalition from 2015', href: '/entities/individuals/barack-obama' },
   { id: 'donald-trump', name: 'Donald Trump', type: 'individual', relationship: 'President who vetoed Congressional resolution to end U.S. involvement and expanded arms sales', href: '/entities/individuals/donald-trump' },
   { id: 'joe-biden', name: 'Joe Biden', type: 'individual', relationship: 'Initially paused arms sales but resumed them; approved $650M weapons deal in 2021', href: '/entities/individuals/joe-biden' },
   { id: 'mohammed-bin-salman', name: 'Mohammed bin Salman', type: 'individual', relationship: 'Saudi Crown Prince and architect of the Yemen war', href: '/entities/individuals/mohammed-bin-salman' },
   { id: 'mohammed-bin-zayed', name: 'Mohammed bin Zayed', type: 'individual', relationship: 'UAE Crown Prince who co-led coalition and backed separatist militias', href: '/entities/individuals/mohammed-bin-zayed' },
   { id: 'james-mattis', name: 'James Mattis', type: 'individual', relationship: 'Secretary of Defense who advocated continued support for Saudi coalition', href: '/entities/individuals/james-mattis' },
   { id: 'mike-pompeo', name: 'Mike Pompeo', type: 'individual', relationship: 'Secretary of State who certified Saudi efforts to minimize civilian casualties despite evidence', href: '/entities/individuals/mike-pompeo' },
   { id: 'raytheon-rtx', name: 'Raytheon / RTX', type: 'individual', relationship: 'Manufacturer of precision-guided munitions used in strikes on civilians', href: '/entities/corporations/raytheon' },
   { id: 'lockheed-martin', name: 'Lockheed Martin', type: 'individual', relationship: 'Manufacturer of F-15 jets and bombs used by Saudi coalition', href: '/entities/corporations/lockheed-martin' },
   { id: 'bernie-sanders', name: 'Bernie Sanders', type: 'individual', relationship: 'Senator who led effort to invoke War Powers Resolution to end U.S. involvement', href: '/entities/individuals/bernie-sanders' },
   { id: 'chris-murphy', name: 'Chris Murphy', type: 'individual', relationship: 'Senator who co-led bipartisan effort to halt arms sales to Saudi Arabia', href: '/entities/individuals/chris-murphy' }
 ],
 timeline: [
   { date: 'September 2014', event: 'Houthi forces capture Sana\'a, Yemen\'s capital' },
   { date: 'March 26, 2015', event: 'Saudi-led coalition begins bombing Yemen with U.S. logistical and intelligence support' },
   { date: 'April 2015', event: 'Coalition imposes naval and air blockade on Yemen, restricting food, fuel, and medicine' },
   { date: 'October 2015', event: 'MSF hospital in Haydan bombed by coalition; Saudi Arabia claims it was a"military target"' },
   { date: 'March 2016', event: 'Coalition bombs a market in Mastaba, killing 97 civilians including 25 children' },
   { date: 'October 8, 2016', event: 'Coalition bombs funeral in Sana\'a using U.S.-supplied Paveway bombs, killing 140 mourners' },
   { date: 'January 2017', event: 'Yemen declared worst cholera outbreak in history; 1 million+ cases by October' },
   { date: 'August 9, 2018', event: 'Coalition strikes school bus in Dahyan, killing 40 children; bomb identified as Lockheed Martin MK-82' },
   { date: 'October 2018', event: 'Khashoggi murder temporarily halts some arms sales; Congress passes War Powers Resolution' },
   { date: 'April 2019', event: 'Trump vetoes Congressional resolution invoking War Powers Act to end U.S. involvement in Yemen' },
   { date: 'September 2019', event: 'Houthi drone attacks on Saudi Aramco facilities temporarily disrupt global oil supply' },
   { date: 'February 2021', event: 'Biden announces end to "offensive" arms sales but approves $650M defensive weapons package' },
   { date: 'January 2022', event: 'Coalition airstrikes on detention facility in Saada kill at least 80 people' },
   { date: 'April 2022', event: 'UN-brokered truce begins; expired in October 2022' },
   { date: '2023', event: 'UN estimates 377,000+ have died from the conflict and its secondary effects' },
   { date: '2024', event: 'Houthi attacks on Red Sea shipping bring renewed international attention to Yemen conflict' },
   { date: 'Ongoing', event: 'An estimated 21 million Yemenis (70% of population) remain in need of humanitarian assistance' }
 ],
 statutes: [
   { code: 'Geneva Convention (IV): Art. 3 & 27', description: 'Protection of civilians; prohibition on violence, murder, and cruel treatment' },
   { code: 'Rome Statute, Art. 8(2)(b)(ii)', description: 'War crime of intentionally directing attacks against civilian objects (hospitals, schools, markets)' },
   { code: 'Rome Statute, Art. 8(2)(b)(xxv)', description: 'War crime of using starvation of civilians as a method of warfare' },
   { code: 'War Powers Resolution (50 U.S.C. § 1541)', description: 'U.S. military involvement without Congressional authorization' },
   { code: 'Arms Export Control Act (22 U.S.C. § 2778)', description: 'Arms may not be sold when likely to be used in violation of international law' },
   { code: 'Leahy Law (22 U.S.C. § 2378d)', description: 'Prohibition on military assistance to foreign units that commit gross human rights violations' },
   { code: 'Convention on the Rights of the Child', description: 'Protection of children in armed conflict' },
   { code: 'Protocol I, Art. 54: Starvation as Method of Warfare', description: 'Prohibition on attacking objects indispensable to the survival of the civilian population' }
 ],
 defendants: [
   { name: 'Saudi-led Coalition', role: 'Systematic bombing of civilian infrastructure', status: 'charged', notes: 'No accountability; U.S. continues to shield Saudi Arabia from international investigations' },
   { name: 'United States', role: 'Complicity in war crimes through arms sales, refueling, and intelligence sharing', status: 'charged', notes: 'Congress passed War Powers Resolution; Trump vetoed it' },
   { name: 'Mike Pompeo', role: 'False certification to Congress that Saudi Arabia was minimizing civilian casualties', status: 'charged', notes: 'State Department IG investigation was shut down by Pompeo himself' },
   { name: 'Raytheon / Lockheed Martin', role: 'Manufacturing weapons used in attacks on civilians, including children', status: 'charged', notes: 'Companies continued receiving contracts; stock prices rose' },
   { name: 'Saudi Arabia', role: 'Naval blockade causing mass starvation and disease', status: 'charged', notes: 'UN investigations yielded reports but no enforcement mechanism' },
   { name: 'UAE', role: 'Operating secret prisons in Yemen with reported torture', status: 'incarcerated', notes: 'AP investigation exposed prisons; no consequences for UAE' },
   { name: 'All Parties', role: 'Use of child soldiers', status: 'charged', notes: 'Documented by UN but no prosecutions' },
   { name: 'U.S. Government', role: 'Circumventing Congressional arms sale oversight through emergency declarations', status: 'charged', notes: 'Trump declared "emergency" to push $8B arms sales; challenged but not blocked' }
 ],
  },
};

export default investigations_y;
