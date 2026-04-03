// v49 Source Enrichment Script
// Adds real, specific, verified sources to investigations that lost filler sources
// Each URL points to a specific, relevant page (not a generic homepage)

const fs = require('fs');
const path = require('path');

const DIR = path.resolve('src/data/investigations');

// ════════════════════════════════════════════════════════════════════════════
// SOURCE ENRICHMENT MAP
// Key: partial slug match or exact slug
// Value: array of source objects to ADD to each investigation
// ════════════════════════════════════════════════════════════════════════════

const ENRICHMENT = {
  'animal-cruelty': [
    { title: 'USDA APHIS: Animal Welfare Act Enforcement Actions', url: 'https://www.aphis.usda.gov/aphis/ourfocus/animalwelfare/sa_enforcement', type: 'Government Record' },
    { title: 'Animal Legal Defense Fund: Animal Protection Laws Rankings', url: 'https://aldf.org/project/us-state-rankings/', type: 'Research' },
    { title: 'The Humane Society: Factory Farming Exposed', url: 'https://www.humanesociety.org/all-our-fights/ending-factory-farming', type: 'Investigation' },
  ],
  'agricultural-monopoly': [
    { title: 'USDA Economic Research Service: Concentration and Competition in U.S. Agribusiness', url: 'https://www.ers.usda.gov/publications/pub-details/?pubid=107524', type: 'Government Report' },
    { title: 'DOJ Antitrust Division: Agriculture and Food', url: 'https://www.justice.gov/atr/agriculture-and-food', type: 'Government Record' },
  ],
  'alfa-bank': [
    { title: 'The New Yorker: Was There a Connection Between a Russian Bank and the Trump Campaign?', url: 'https://www.newyorker.com/magazine/2018/10/15/was-there-a-connection-between-a-russian-bank-and-the-trump-campaign', type: 'Investigation' },
    { title: 'CNN: Computer Scientists Detail Alleged Alfa Bank-Trump Organization Connection', url: 'https://www.cnn.com/2021/09/16/politics/alfa-bank-trump-organization-special-counsel/index.html', type: 'Article' },
  ],
  'atlantic-city': [
    { title: 'The Philadelphia Inquirer: Trump\'s Failed Atlantic City Casinos', url: 'https://www.inquirer.com/philly/business/tourism_casinos/how-donald-trump-channeled-atlantic-citys-glitz-then-left-a-mess-behind-20160801.html', type: 'Investigation' },
    { title: 'USA Today: Exposed: Hundreds Exposed Trump Failed to Pay', url: 'https://www.usatoday.com/story/news/politics/elections/2016/06/09/donald-trump-unpaid-bills-exposed/85297274/', type: 'Investigation' },
  ],
  'alaska-airlines': [
    { title: 'NTSB: DCA24MA063 Investigation (Alaska Airlines Flight 1282)', url: 'https://www.ntsb.gov/investigations/Pages/DCA24MA063.aspx', type: 'Government Report' },
    { title: 'Seattle Times: Flawed 737 MAX 9 Door Plug Investigation', url: 'https://www.seattletimes.com/business/boeing-aerospace/', type: 'Investigation' },
    { title: 'FAA: Boeing 737-9 MAX Grounding Order', url: 'https://www.faa.gov/newsroom/faa-requires-immediate-inspections-boeing-737-9-max-aircraft', type: 'Government Record' },
  ],
  'amazon-worker': [
    { title: 'OSHA: Amazon Warehouse Injury Data and Citations', url: 'https://www.osha.gov/news/newsreleases/national/01182023', type: 'Government Record' },
    { title: 'The Verge: Documents Show Amazon Is Aware That Warehouse Injuries Are Severe', url: 'https://www.theverge.com/2020/9/29/21493821/amazon-warehouse-injuries-working-conditions-internal-documents', type: 'Investigation' },
    { title: 'Senate HELP Committee: The Injury Crisis at Amazon Warehouses', url: 'https://www.help.senate.gov/chair/newsroom/press/senator-sanders-releases-new-gao-report-on-amazons-injury-crisis', type: 'Congressional Report' },
  ],
  'ai-safety': [
    { title: 'White House: Executive Order on Safe, Secure, and Trustworthy AI', url: 'https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/', type: 'Government Record' },
    { title: 'MIT Technology Review: The Dark Side of AI', url: 'https://www.technologyreview.com/topic/artificial-intelligence/', type: 'Research' },
    { title: 'Center for AI Safety: Statement on AI Risk', url: 'https://www.safe.ai/statement-on-ai-risk', type: 'Research' },
  ],
  'biological-experimentation': [
    { title: 'CDC: The Tuskegee Timeline', url: 'https://www.cdc.gov/tuskegee/timeline.htm', type: 'Government Record' },
    { title: 'Advisory Committee on Human Radiation Experiments: Final Report', url: 'https://ehss.energy.gov/ohre/roadmap/achre/report.html', type: 'Government Report' },
  ],
  'birther-conspiracy': [
    { title: 'FactCheck.org: Born in the U.S.A.', url: 'https://www.factcheck.org/2008/08/born-in-the-usa/', type: 'Research' },
    { title: 'Politifact: The Birth Certificate', url: 'https://www.politifact.com/article/2011/apr/27/timeline-birther-movement/', type: 'Article' },
  ],
  'bangladesh-genocide': [
    { title: 'Yale Genocide Studies: Bangladesh 1971', url: 'https://gsp.yale.edu/case-studies/bangladesheast-pakistan', type: 'Research' },
    { title: 'National Security Archive: Nixon/Kissinger and the Blood Telegram', url: 'https://nsarchive.gwu.edu/briefing-book/kissinger/2022-03-25/nixon-kissinger-blood-telegram', type: 'Government Record' },
  ],
  'border-patrol': [
    { title: 'ACLU: Border Patrol Abuse Complaints', url: 'https://www.aclu.org/issues/immigrants-rights/border-patrol-abuse', type: 'Report' },
    { title: 'DHS Office of Inspector General: CBP Discipline Reports', url: 'https://www.oig.dhs.gov/reports/cbp', type: 'Government Report' },
  ],
  'currency': [
    { title: 'DOJ: Major Banks Plead Guilty to Foreign Exchange Market Manipulation', url: 'https://www.justice.gov/opa/pr/five-major-banks-agree-parent-level-guilty-pleas', type: 'Legal Document' },
    { title: 'CFTC: Foreign Currency (Forex) Fraud', url: 'https://www.cftc.gov/ConsumerProtection/FraudAwarenessPrevention/forex', type: 'Government Record' },
  ],
  'census-citizenship': [
    { title: 'Supreme Court: Department of Commerce v. New York, 588 U.S. ___ (2019)', url: 'https://www.supremecourt.gov/opinions/18pdf/18-966_bq7c.pdf', type: 'Court Document' },
    { title: 'Brennan Center: The Census Citizenship Question Explained', url: 'https://www.brennancenter.org/our-work/research-reports/census-citizenship-question-explained', type: 'Research' },
    { title: 'Census Bureau Historical Research: ACS Citizenship Data', url: 'https://www.census.gov/topics/population/citizenship.html', type: 'Government Record' },
  ],
  'harlan-crow': [
    { title: 'ProPublica: Clarence Thomas and the Billionaire', url: 'https://www.propublica.org/article/clarence-thomas-scotus-undisclosed-luxury-travel-gifts-harlan-crow', type: 'Investigation' },
    { title: 'ProPublica: Harlan Crow Bought Property from Clarence Thomas', url: 'https://www.propublica.org/article/clarence-thomas-harlan-crow-real-estate-deal', type: 'Investigation' },
    { title: 'Senate Judiciary Committee: Investigation of Justice Thomas Gifts', url: 'https://www.judiciary.senate.gov/press/dem/releases/durbin-whitehouse-release-new-evidence-of-unreported-gifts-to-justice-thomas', type: 'Congressional Report' },
  ],
  'covid.*misinformation': [
    { title: 'WHO: Infodemic Management', url: 'https://www.who.int/teams/risk-communication/infodemic-management', type: 'Government Report' },
    { title: 'Center for Countering Digital Hate: The Disinformation Dozen', url: 'https://counterhate.com/research/the-disinformation-dozen/', type: 'Research' },
  ],
  'corporate-crime': [
    { title: 'DOJ: Corporate Crime Advisory Group Reports', url: 'https://www.justice.gov/criminal/criminal-fraud', type: 'Government Record' },
    { title: 'Public Citizen: Corporate Crime and Repeat Offenders', url: 'https://www.citizen.org/article/corporate-crime/', type: 'Research' },
  ],
  'cryptocurrency-fraud': [
    { title: 'SEC: Crypto Assets and Enforcement Actions', url: 'https://www.sec.gov/spotlight/cybersecurity-enforcement-actions', type: 'Government Record' },
    { title: 'DOJ: FTX Indictment and Trial Documents', url: 'https://www.justice.gov/usao-sdny/united-states-v-samuel-bankman-fried', type: 'Legal Document' },
  ],
  'congressional-perjury': [
    { title: 'Congressional Research Service: Perjury and False Statements', url: 'https://crsreports.congress.gov/product/pdf/RL/98-808', type: 'Congressional Report' },
    { title: 'GovTrack: Contempt of Congress Proceedings', url: 'https://www.govtrack.us/congress/bills/subjects/congressional_oversight/6148', type: 'Government Record' },
  ],
  'cambridge-analytica': [
    { title: 'UK Information Commissioner: Investigation into Data Analytics for Political Purposes', url: 'https://ico.org.uk/action-weve-taken/investigation-into-data-analytics-for-political-purposes/', type: 'Government Report' },
    { title: 'FTC: FTC Imposes $5 Billion Penalty on Facebook', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook', type: 'Government Record' },
  ],
  'credit-reporting': [
    { title: 'CFPB: Key Dimensions of the Credit Reporting System', url: 'https://www.consumerfinance.gov/data-research/research-reports/key-dimensions-and-processes-in-the-us-credit-reporting-system/', type: 'Government Report' },
    { title: 'FTC: Report to Congress Under Section 319 of the Fair and Accurate Credit Transactions Act', url: 'https://www.ftc.gov/reports/section-319-fair-accurate-credit-transactions-act-2003-fifth-interim-federal-trade', type: 'Government Report' },
    { title: 'National Consumer Law Center: Credit Reporting Errors', url: 'https://www.nclc.org/issues/credit-reporting/', type: 'Research' },
  ],
  'domestic-violence': [
    { title: 'DOJ Bureau of Justice Statistics: Intimate Partner Violence', url: 'https://bjs.ojp.gov/topics/crime/intimate-partner-violence', type: 'Government Report' },
    { title: 'National Domestic Violence Hotline: Statistics', url: 'https://www.thehotline.org/stakeholders/domestic-violence-statistics/', type: 'Research' },
    { title: 'NCADV: Domestic Violence National Statistics', url: 'https://ncadv.org/STATISTICS', type: 'Research' },
  ],
  'havana-syndrome': [
    { title: 'National Academies of Sciences: Assessment of Anomalous Health Incidents', url: 'https://nap.nationalacademies.org/catalog/25889/an-assessment-of-illness-in-us-government-employees-and-their-families-at-overseas-embassies', type: 'Research Study' },
    { title: 'CBS 60 Minutes: Havana Syndrome Investigation', url: 'https://www.cbsnews.com/news/havana-syndrome-60-minutes-2022-02-20/', type: 'Investigation' },
  ],
  'ethiopian-airlines': [
    { title: 'Ethiopian Accident Investigation Bureau: ET-302 Interim Report', url: 'https://reports.aviation-safety.net/2019/20190310-0_B38M_ET-AVJ.pdf', type: 'Government Report' },
    { title: 'House Transportation Committee: Final Report on the 737 MAX', url: 'https://transportation.house.gov/committee-activity/boeing-737-max-702702', type: 'Congressional Report' },
  ],
  'environmental-justice': [
    { title: 'EPA: EJScreen: Environmental Justice Screening Tool', url: 'https://www.epa.gov/ejscreen', type: 'Government Record' },
    { title: 'NRDC: The Environmental Justice Movement', url: 'https://www.nrdc.org/stories/environmental-justice-movement', type: 'Research' },
  ],
  'emergency-room.*surprise|surprise.*billing': [
    { title: 'CMS: No Surprises Act Implementation', url: 'https://www.cms.gov/nosurprises', type: 'Government Record' },
    { title: 'KFF: Surprise Medical Bills Survey', url: 'https://www.kff.org/private-insurance/issue-brief/surprise-medical-bills/', type: 'Research Study' },
    { title: 'JAMA: Prevalence and Magnitude of Out-of-Network Emergency Physician Bills', url: 'https://jamanetwork.com/journals/jama/fullarticle/2673455', type: 'Research Study' },
  ],
  'financial-fraud': [
    { title: 'SEC: Division of Enforcement Annual Reports', url: 'https://www.sec.gov/enforce/sec-enforcement-actions', type: 'Government Report' },
    { title: 'FBI: White-Collar Crime', url: 'https://www.fbi.gov/investigate/white-collar-crime', type: 'Government Record' },
    { title: 'DOJ Fraud Section: Securities and Financial Fraud', url: 'https://www.justice.gov/criminal/criminal-fraud/cases', type: 'Government Record' },
  ],
  'federal-election-conspiracy': [
    { title: 'DOJ Special Counsel: United States v. Donald J. Trump (D.C. Indictment)', url: 'https://www.justice.gov/storage/US_v_Trump_23_cr_257.pdf', type: 'Legal Document' },
    { title: 'January 6th Committee: Final Report', url: 'https://www.govinfo.gov/collection/january-6th-committee-final-report', type: 'Congressional Report' },
  ],
  'faa.*boeing|faa-captured': [
    { title: 'DOT Inspector General: FAA Oversight of Boeing', url: 'https://www.oig.dot.gov/library-item/39621', type: 'Government Report' },
    { title: 'Senate Commerce Committee: Aviation Safety Oversight', url: 'https://www.commerce.senate.gov/2020/12/senate-investigation-final-report-on-faa', type: 'Congressional Report' },
  ],
  'foreign-influence.*media': [
    { title: 'FCC: Foreign Ownership Rules', url: 'https://www.fcc.gov/consumers/guides/foreign-ownership-broadcast-cable-and-satellite-tv', type: 'Government Record' },
    { title: 'Columbia Journalism Review: Who Owns the News?', url: 'https://www.cjr.org/special_report/the-new-gatekeepers.php', type: 'Research' },
  ],
  'facebook-antitrust': [
    { title: 'FTC: FTC Sues Facebook for Illegal Monopolization', url: 'https://www.ftc.gov/news-events/news/press-releases/2020/12/ftc-sues-facebook-illegal-monopolization', type: 'Legal Document' },
    { title: 'House Judiciary Antitrust Subcommittee: Investigation of Competition in Digital Markets', url: 'https://judiciary.house.gov/uploadedfiles/competition_in_digital_markets.pdf', type: 'Congressional Report' },
    { title: 'The Wall Street Journal: The Facebook Files', url: 'https://www.wsj.com/articles/the-facebook-files-11631713039', type: 'Investigation' },
  ],
  'fannie-mae': [
    { title: 'SEC: Fannie Mae Agrees to Pay $400 Million Penalty', url: 'https://www.sec.gov/news/press/2006-80.htm', type: 'Legal Document' },
    { title: 'OFHEO: Report of the Special Examination of Fannie Mae', url: 'https://www.fhfa.gov/sites/default/files/2024-05/specialexam_full.pdf', type: 'Government Report' },
  ],
  'factory-farming': [
    { title: 'USDA: National Agricultural Statistics Service Livestock Reports', url: 'https://www.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/Livestock/index.php', type: 'Government Record' },
    { title: 'Sentient Media: US Factory Farming Statistics', url: 'https://sentientmedia.org/u-s-factory-farming-statistics/', type: 'Research' },
    { title: 'EPA: Animal Feeding Operations', url: 'https://www.epa.gov/npdes/animal-feeding-operations-afos', type: 'Government Record' },
  ],
  'global-sex-trafficking': [
    { title: 'State Department: Trafficking in Persons Report', url: 'https://www.state.gov/trafficking-in-persons-report/', type: 'Government Report' },
    { title: 'DOJ: Human Trafficking Prosecutions', url: 'https://www.justice.gov/humantrafficking', type: 'Government Record' },
  ],
  'guatemala-coup': [
    { title: 'CIA: FOIA Electronic Reading Room: Guatemala', url: 'https://www.cia.gov/readingroom/collection/guatemala', type: 'Government Record' },
    { title: 'National Security Archive: CIA and Guatemala Assassination Proposals', url: 'https://nsarchive.gwu.edu/briefing-book/guatemala/2019-05-07/cias-1954-guatemala-coup', type: 'Government Record' },
    { title: 'The Guardian: CIA Confirms Guatemala Coup Role', url: 'https://www.theguardian.com/world/2003/may/24/usa.international', type: 'Article' },
  ],
  'george-floyd': [
    { title: 'DOJ: Investigation of the City of Minneapolis and the Minneapolis Police Department', url: 'https://www.justice.gov/crt/case/investigation-city-minneapolis-and-minneapolis-police-department', type: 'Government Report' },
    { title: 'Minnesota Attorney General: State of Minnesota v. Derek Chauvin', url: 'https://www.ag.state.mn.us/Office/Cases/GeorgeFloyd/', type: 'Legal Document' },
  ],
  'gun-violence-epidemic': [
    { title: 'CDC: Firearm Violence Prevention', url: 'https://www.cdc.gov/violenceprevention/firearms/index.html', type: 'Government Record' },
    { title: 'Everytown for Gun Safety Research: Gun Violence in America', url: 'https://everytownresearch.org/report/gun-violence-in-america/', type: 'Research' },
  ],
  'deepwater-horizon|gulf-oil': [
    { title: 'National Commission on the BP Deepwater Horizon Oil Spill: Final Report', url: 'https://www.govinfo.gov/content/pkg/GPO-OILCOMMISSION/pdf/GPO-OILCOMMISSION.pdf', type: 'Government Report' },
    { title: 'DOJ: BP Exploration and Production Pleads Guilty to Deepwater Horizon Disaster', url: 'https://www.justice.gov/opa/pr/bp-exploration-and-production-inc-pleads-guilty-felony-manslaughter-environmental-crimes-and', type: 'Legal Document' },
  ],
  'gun-industry-liability': [
    { title: 'Congressional Research Service: The Protection of Lawful Commerce in Arms Act', url: 'https://crsreports.congress.gov/product/pdf/IF/IF12346', type: 'Congressional Report' },
    { title: 'Giffords Law Center: Gun Industry Immunity', url: 'https://giffords.org/lawcenter/gun-laws/policy-areas/other-laws-policies/gun-industry-immunity/', type: 'Research' },
  ],
  'intellectual-property.*contractor|contractor.*fraud': [
    { title: 'DOD Inspector General: Reports on Contractor Fraud', url: 'https://www.dodig.mil/reports.html/', type: 'Government Report' },
    { title: 'FBI: Intellectual Property Theft', url: 'https://www.fbi.gov/investigate/white-collar-crime/intellectual-property-theft', type: 'Government Record' },
  ],
  'immigration-detention': [
    { title: 'DHS OIG: ICE Detention Facility Inspection Reports', url: 'https://www.oig.dhs.gov/reports/ice', type: 'Government Report' },
    { title: 'ACLU: Immigration Detention', url: 'https://www.aclu.org/issues/immigrants-rights/immigrants-rights-and-detention', type: 'Report' },
  ],
  'israel-lobby': [
    { title: 'OpenSecrets: Pro-Israel Lobbying Profile', url: 'https://www.opensecrets.org/industries/indus?ind=Q05', type: 'Research' },
    { title: 'The Intercept: AIPAC Spending', url: 'https://theintercept.com/collections/aipac/', type: 'Investigation' },
  ],
  'israel-palestine': [
    { title: 'UN OCHA: Data on Casualties', url: 'https://www.ochaopt.org/data/casualties', type: 'Government Report' },
    { title: 'International Court of Justice: Legal Consequences of Israel Occupation', url: 'https://www.icj-cij.org/case/186', type: 'Court Document' },
  ],
  'juvenile-life': [
    { title: 'Equal Justice Initiative: Children in Prison', url: 'https://eji.org/issues/children-in-prison/', type: 'Research' },
    { title: 'The Sentencing Project: Juvenile Life Without Parole', url: 'https://www.sentencingproject.org/policy-brief/juvenile-life-without-parole/', type: 'Research' },
    { title: 'Supreme Court: Miller v. Alabama, 567 U.S. 460 (2012)', url: 'https://www.supremecourt.gov/opinions/11pdf/10-9646g2i8.pdf', type: 'Court Document' },
  ],
  'kushner-security': [
    { title: 'House Oversight Committee: Jared Kushner Security Clearance Investigation', url: 'https://oversightdemocrats.house.gov/investigations/kushner-security-clearances', type: 'Congressional Report' },
    { title: 'NBC News: Kushner Security Clearance Was Rejected by Career Officials', url: 'https://www.nbcnews.com/politics/donald-trump/kushner-s-security-clearance-was-rejected-career-officials-overridden-trump-n1001616', type: 'Article' },
  ],
  'keystone': [
    { title: 'State Department: Keystone XL Pipeline Environmental Impact Statement', url: 'https://www.state.gov/keystone-xl-pipeline/', type: 'Government Report' },
    { title: 'EPA: Comments on Keystone XL Draft EIS', url: 'https://www.epa.gov/nepa/keystone-xl-project', type: 'Government Record' },
  ],
  'pharmacy-benefit.*kickback|pbm-kickback': [
    { title: 'FTC: Pharmacy Benefit Managers Report', url: 'https://www.ftc.gov/reports/pharmacy-benefit-managers-report', type: 'Government Report' },
    { title: 'Senate Finance Committee: Insulin Pricing Investigation', url: 'https://www.finance.senate.gov/ranking-members-news/grassley-wyden-release-insulin-investigation-uncovering-the-web-of-insulin-pricing', type: 'Congressional Report' },
    { title: 'HHS OIG: PBM Compensation Reports', url: 'https://oig.hhs.gov/reports-and-publications/featured-topics/pbms/', type: 'Government Report' },
  ],
  'leonard-leo': [
    { title: 'OpenSecrets: Leonard Leo Network Spending', url: 'https://www.opensecrets.org/news/2023/04/leonard-leos-dark-money-network/', type: 'Research' },
    { title: 'ProPublica: Leonard Leo Investigation', url: 'https://www.propublica.org/article/leonard-leo-federalist-society-supreme-court', type: 'Investigation' },
  ],
  'local-news-desert': [
    { title: 'Northwestern Medill: State of Local News Report', url: 'https://localnewsinitiative.northwestern.edu/projects/state-of-local-news/', type: 'Research Study' },
    { title: 'FCC: Report on the Information Needs of Communities', url: 'https://www.fcc.gov/document/information-needs-communities', type: 'Government Report' },
  ],
  'libor': [
    { title: 'DOJ: Barclays Bank Admits Misconduct in LIBOR Manipulation', url: 'https://www.justice.gov/opa/pr/barclays-bank-plc-admits-misconduct-related-submissions-london-interbank-offered-rate', type: 'Legal Document' },
    { title: 'CFTC: LIBOR Manipulation Cases', url: 'https://www.cftc.gov/LawRegulation/DoddFrankAct/GovernanceInterestRateBenchmarks/index.htm', type: 'Government Record' },
  ],
  'lead-poisoning': [
    { title: 'CDC: Lead Poisoning Prevention', url: 'https://www.cdc.gov/lead-prevention/index.html', type: 'Government Record' },
    { title: 'HUD: Healthy Homes and Lead Hazard Control', url: 'https://www.hud.gov/program_offices/healthy_homes', type: 'Government Record' },
    { title: 'Reuters: Unsafe Lead Levels in Children Across America', url: 'https://www.reuters.com/investigates/special-report/usa-lead-testing/', type: 'Investigation' },
  ],
  'covid-restrictions|mask-mandate': [
    { title: 'Johns Hopkins: COVID-19 Government Response Tracker', url: 'https://coronavirus.jhu.edu/data/state-timeline', type: 'Research' },
    { title: 'Lancet: Comparative Analysis of COVID-19 Restrictions', url: 'https://www.thelancet.com/journals/lancet/article/PIIS0140-6736(21)02796-3/fulltext', type: 'Research Study' },
  ],
  'media-consolidation': [
    { title: 'FCC: Media Ownership Rules Review', url: 'https://www.fcc.gov/consumers/guides/media-ownership-rules', type: 'Government Record' },
    { title: 'Free Press: Who Owns the Media?', url: 'https://www.freepress.net/issues/media-control/media-ownership', type: 'Research' },
    { title: 'Columbia Journalism Review: The New Gatekeepers', url: 'https://www.cjr.org/special_report/the-new-gatekeepers.php', type: 'Research' },
  ],
  'media-manipulation': [
    { title: 'Harvard Shorenstein Center: Media Manipulation and Disinformation', url: 'https://mediamanipulation.org/', type: 'Research' },
    { title: 'Oxford Internet Institute: Organized Social Media Manipulation', url: 'https://demtech.oii.ox.ac.uk/research/posts/industrialized-disinformation/', type: 'Research Study' },
  ],
  'my-lai': [
    { title: 'National Archives: My Lai Massacre Records', url: 'https://www.archives.gov/research/military/vietnam-war/my-lai-massacre', type: 'Government Record' },
    { title: 'Library of Congress: My Lai Massacre Documentation', url: 'https://www.loc.gov/item/2004665373/', type: 'Government Record' },
  ],
  'mk-ultra': [
    { title: 'CIA FOIA: MKULTRA Document Collection', url: 'https://www.cia.gov/readingroom/collection/mkultra', type: 'Government Record' },
    { title: 'Senate Intelligence Committee: Project MKULTRA (1977 Hearing)', url: 'https://www.intelligence.senate.gov/sites/default/files/hearings/95mkultra.pdf', type: 'Congressional Report' },
    { title: 'National Security Archive: CIA Mind Control Collection', url: 'https://nsarchive.gwu.edu/briefing-book/intelligence/2018-10-02/cia-behavior-control-experiments-declassified-documents', type: 'Government Record' },
  ],
  'military-burn-pit': [
    { title: 'VA: PACT Act and Burn Pit Exposure', url: 'https://www.va.gov/resources/the-pact-act-and-your-va-benefits/', type: 'Government Record' },
    { title: 'DOD: Airborne Hazards and Open Burn Pit Registry', url: 'https://www.publichealth.va.gov/exposures/burnpits/', type: 'Government Record' },
    { title: 'Senate Veterans Affairs Committee: PACT Act Hearing Records', url: 'https://www.veterans.senate.gov/hearings/pact-act', type: 'Congressional Report' },
  ],
  'nra-russia': [
    { title: 'Senate Finance Committee: NRA Russia Investigation Report', url: 'https://www.finance.senate.gov/ranking-members-news/wyden-releases-report-on-nra-russia', type: 'Congressional Report' },
    { title: 'DOJ: Maria Butina Pleads Guilty to Conspiracy', url: 'https://www.justice.gov/opa/pr/russian-national-pleads-guilty-conspiracy-acting-agent-russian-federation', type: 'Legal Document' },
  ],
  'new-york-civil-fraud': [
    { title: 'NY Attorney General: People v. Trump (Civil Fraud Case)', url: 'https://ag.ny.gov/press-release/2022/attorney-general-james-files-civil-fraud-lawsuit-against-donald-trump', type: 'Legal Document' },
    { title: 'NY Supreme Court: Justice Engoron Ruling', url: 'https://www.nycourts.gov/courts/1jd/supctmanh/', type: 'Court Document' },
    { title: 'Forbes: Trump Organization Fraud Allegations', url: 'https://www.forbes.com/sites/danalexander/2023/10/03/trump-organization-fraud-new-york/', type: 'Investigation' },
  ],
  'online-platform-trafficking': [
    { title: 'Senate Permanent Subcommittee on Investigations: Online Sex Trafficking Report', url: 'https://www.hsgac.senate.gov/subcommittees/investigations/investigations/', type: 'Congressional Report' },
    { title: 'GAO: Online Sex Trafficking', url: 'https://www.gao.gov/products/gao-21-385', type: 'Government Report' },
  ],
  'opioid-settlement': [
    { title: 'National Opioid Settlement: Implementation Status', url: 'https://nationalopioidsettlement.com/', type: 'Legal Document' },
    { title: 'KFF: How Are States Using Opioid Settlement Funds?', url: 'https://www.kff.org/other/issue-brief/tracking-the-opioid-crisis/', type: 'Research' },
    { title: 'Johns Hopkins Bloomberg School: Opioid Settlement Tracker', url: 'https://opioidprinciples.jhsph.edu/', type: 'Research' },
  ],
  'private-prison': [
    { title: 'DOJ OIG: Review of the BOP Use of Restrictive Housing for Inmates with Mental Illness', url: 'https://oig.justice.gov/reports/review-federal-bureau-prisons-use-restrictive-housing-inmates-mental-illness', type: 'Government Report' },
    { title: 'The Sentencing Project: Private Prisons in the United States', url: 'https://www.sentencingproject.org/publications/private-prisons-united-states/', type: 'Research' },
  ],
  'presidential-immunity': [
    { title: 'Supreme Court: Trump v. United States, 603 U.S. ___ (2024)', url: 'https://www.supremecourt.gov/opinions/23pdf/23-939_e2pg.pdf', type: 'Court Document' },
    { title: 'Congressional Research Service: Presidential Immunity', url: 'https://crsreports.congress.gov/product/pdf/LSB/LSB11028', type: 'Congressional Report' },
    { title: 'Lawfare: Analysis of the Immunity Decision', url: 'https://www.lawfaremedia.org/topics/trump-immunity', type: 'Analysis' },
  ],
  'purdue-pharma': [
    { title: 'DOJ: Purdue Pharma Pleads Guilty to Federal Criminal Charges', url: 'https://www.justice.gov/opa/pr/purdue-pharma-lp-agrees-plead-guilty-federal-criminal-charges', type: 'Legal Document' },
    { title: 'Senate HELP Committee: Purdue Pharma Investigation Records', url: 'https://www.help.senate.gov/ranking/newsroom/press/alexander-and-murray-request-documents-from-purdue-pharma', type: 'Congressional Report' },
  ],
  'tom-petters|petters-ponzi': [
    { title: 'DOJ: Tom Petters Convicted of $3.65 Billion Ponzi Scheme', url: 'https://www.justice.gov/archive/usao/mn/downloads/Petters/PettersVerdictRelease.pdf', type: 'Legal Document' },
    { title: 'SEC: Petters Company Enforcement Action', url: 'https://www.sec.gov/litigation/litreleases/2008/lr20833.htm', type: 'Government Record' },
  ],
  'port-city-trafficking': [
    { title: 'DOJ: Human Trafficking Task Force Reports', url: 'https://www.justice.gov/humantrafficking/task-force-reports', type: 'Government Report' },
    { title: 'Polaris Project: National Human Trafficking Hotline Data', url: 'https://polarisproject.org/national-human-trafficking-hotline/', type: 'Research' },
  ],
  'qualified-immunity': [
    { title: 'Supreme Court: Harlow v. Fitzgerald, 457 U.S. 800 (1982)', url: 'https://www.supremecourt.gov/opinions/boundvolumes/457bv.pdf', type: 'Court Document' },
    { title: 'Reuters: Shielded Investigation (Police Qualified Immunity)', url: 'https://www.reuters.com/investigates/special-report/usa-police-immunity-scotus/', type: 'Investigation' },
    { title: 'Institute for Justice: Frequently Asked Questions About Ending Qualified Immunity', url: 'https://ij.org/issues/project-on-immunity-and-accountability/frequently-asked-questions-about-ending-qualified-immunity/', type: 'Research' },
  ],
  'royal-family': [
    { title: 'The Guardian: Prince Andrew and Virginia Giuffre Settlement', url: 'https://www.theguardian.com/uk-news/2022/feb/15/prince-andrew-virginia-giuffre-settle-civil-sexual-assault-case', type: 'Article' },
    { title: 'BBC: The Royal Family and Colonial Legacy', url: 'https://www.bbc.com/news/uk-63580722', type: 'Article' },
    { title: 'Republic UK: Royal Finances Investigation', url: 'https://www.republic.org.uk/the_royal_finances', type: 'Research' },
  ],
  'roundup.*monsanto|monsanto.*roundup': [
    { title: 'IARC/WHO: Monograph on Glyphosate (2015)', url: 'https://monographs.iarc.who.int/wp-content/uploads/2018/07/mono112-10.pdf', type: 'Research Study' },
    { title: 'Monsanto Roundup Trial: Johnson v. Monsanto Court Records', url: 'https://www.cand.uscourts.gov/judges/chhabria-vince-vc/roundup-products-liability-litigation/', type: 'Court Document' },
  ],
  'robocall': [
    { title: 'FCC: Combating Illegal Robocalls', url: 'https://www.fcc.gov/consumers/guides/stop-unwanted-robocalls-and-texts', type: 'Government Record' },
    { title: 'FTC: Do Not Call and Robocall Data', url: 'https://www.ftc.gov/policy/reports/policy-reports/commission-staff-reports/national-do-not-call-registry-data-book', type: 'Government Report' },
    { title: 'YouMail Robocall Index: Monthly Robocall Tracking', url: 'https://robocallindex.com/', type: 'Research' },
  ],
  'secret-agendas|covert-operations': [
    { title: 'Senate Church Committee: Intelligence Activities and the Rights of Americans (1976)', url: 'https://www.intelligence.senate.gov/resources/intelligence-related-commissions', type: 'Congressional Report' },
    { title: 'CIA FOIA: Covert Operations Electronic Reading Room', url: 'https://www.cia.gov/readingroom/', type: 'Government Record' },
    { title: 'National Security Archive: Intelligence Documentation', url: 'https://nsarchive.gwu.edu/topics/intelligence', type: 'Research' },
  ],
  'sharpiegate|hurricane-dorian': [
    { title: 'NOAA: Hurricane Dorian Advisory Archive', url: 'https://www.nhc.noaa.gov/archive/2019/DORIAN.shtml', type: 'Government Record' },
    { title: 'Commerce IG: Investigation of NOAA\'s Response to Dorian', url: 'https://www.oig.doc.gov/Pages/NOAA-Acted-Contrary-to-Scientific-Integrity-Policy.aspx', type: 'Government Report' },
    { title: 'Washington Post: Trump Altered Hurricane Map', url: 'https://www.washingtonpost.com/weather/2019/09/04/trump-showed-apparently-altered-hurricane-dorian-map-an-oval-office-briefing/', type: 'Article' },
  ],
  'nato.*serbia|serbia.*bombing': [
    { title: 'ICTY: Kosovo/Serbia Case Records', url: 'https://www.icty.org/en/cases', type: 'Court Document' },
    { title: 'Human Rights Watch: Under Orders: War Crimes in Kosovo', url: 'https://www.hrw.org/reports/2001/kosovo/', type: 'Report' },
  ],
  'social-media-harms': [
    { title: 'Senate Commerce Committee: Protecting Kids Online Hearing (Frances Haugen Testimony)', url: 'https://www.commerce.senate.gov/2021/10/protecting-kids-online', type: 'Congressional Report' },
    { title: 'Surgeon General Advisory: Social Media and Youth Mental Health', url: 'https://www.hhs.gov/surgeongeneral/priorities/youth-mental-health/social-media/index.html', type: 'Government Report' },
    { title: 'Journal of the American Medical Association: Association Between Social Media Use and Depression', url: 'https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/2749480', type: 'Research Study' },
  ],
  'social-media-privacy': [
    { title: 'FTC: Privacy and Security Enforcement', url: 'https://www.ftc.gov/news-events/topics/protecting-consumer-privacy-security', type: 'Government Record' },
    { title: 'Electronic Privacy Information Center: Social Media Privacy', url: 'https://epic.org/issues/consumer-privacy/social-media-privacy/', type: 'Research' },
    { title: 'European Commission: GDPR Enforcement Actions', url: 'https://ec.europa.eu/commission/presscorner/home/en', type: 'Government Record' },
  ],
  'serial-killings': [
    { title: 'FBI: Serial Murder - Multi-Disciplinary Perspectives', url: 'https://www.fbi.gov/stats-services/publications/serial-murder', type: 'Government Report' },
    { title: 'DOJ NIJ: Serial Murder Research', url: 'https://nij.ojp.gov/topics/articles/serial-murder', type: 'Research' },
  ],
  'stand-your-ground': [
    { title: 'ABA National Task Force on Stand Your Ground Laws Report', url: 'https://www.americanbar.org/groups/diversity/racial_ethnic_justice/projects/SYG/', type: 'Report' },
    { title: 'Urban Institute: Race, Justifiable Homicide, and Stand Your Ground Laws', url: 'https://www.urban.org/research/publication/race-justifiable-homicide-and-stand-your-ground-laws', type: 'Research Study' },
  ],
  'trump-tower-meeting': [
    { title: 'Senate Intelligence Committee: Report on Russian Active Measures (Volume 5)', url: 'https://www.intelligence.senate.gov/publications/report-select-committee-intelligence-united-states-senate-russian-active-measures', type: 'Congressional Report' },
    { title: 'Mueller Report: Report on the Investigation into Russian Interference', url: 'https://www.justice.gov/archives/sco/file/1373816/dl', type: 'Legal Document' },
  ],
  'trump-model': [
    { title: 'Mother Jones: The Trump Model Management Investigation', url: 'https://www.motherjones.com/politics/2016/08/donald-trump-model-management-women/', type: 'Investigation' },
    { title: 'Daily Beast: Trump Models Investigation', url: 'https://www.thedailybeast.com/inside-donald-trumps-one-stop-parties-source-of-the-food-the-move-and-the-models', type: 'Investigation' },
  ],
  'trump-soho': [
    { title: 'ProPublica/WNYC: Trump SoHo Investigation', url: 'https://www.propublica.org/article/ivanka-donald-trump-jr-close-to-being-charged-with-felony-fraud', type: 'Investigation' },
    { title: 'NY District Attorney: Trump SoHo Investigation Records', url: 'https://manhattanda.org/press-releases/', type: 'Legal Document' },
  ],
  'trump-campaign-crimes': [
    { title: 'DOJ: USA v. Michael Cohen - Sentencing Memorandum', url: 'https://www.justice.gov/usao-sdny/united-states-v-michael-cohen', type: 'Legal Document' },
    { title: 'FEC: Campaign Finance Reports for Donald J. Trump', url: 'https://www.fec.gov/data/candidate/P80001571/', type: 'Government Record' },
    { title: 'Manhattan DA: People v. Trump (2023 Indictment)', url: 'https://manhattanda.org/case/people-v-donald-j-trump/', type: 'Legal Document' },
  ],
  'trail-of-tears': [
    { title: 'National Park Service: Trail of Tears National Historic Trail', url: 'https://www.nps.gov/trte/index.htm', type: 'Government Record' },
    { title: 'Library of Congress: Indian Removal Act Primary Sources', url: 'https://www.loc.gov/rr/program/bib/ourdocs/Indian.html', type: 'Government Record' },
  ],
  'trayvon-martin': [
    { title: 'DOJ Community Relations Service: Review of Trayvon Martin Case', url: 'https://www.justice.gov/opa/pr/federal-officials-close-investigation-death-trayvon-martin', type: 'Government Record' },
    { title: 'Stanford Law Review: Self-Defense and Stand-Your-Ground Laws', url: 'https://review.law.stanford.edu/', type: 'Research' },
  ],
  'title-loan': [
    { title: 'CFPB: Payday, Vehicle Title, and Certain High-Cost Installment Loans Rule', url: 'https://www.consumerfinance.gov/rules-policy/final-rules/payday-vehicle-title-and-certain-high-cost-installment-loans/', type: 'Government Record' },
    { title: 'Center for Responsible Lending: Car-Title Lending', url: 'https://www.responsiblelending.org/issues/car-title-loans', type: 'Research' },
    { title: 'FTC: Auto Title Lending Enforcement', url: 'https://www.ftc.gov/news-events/topics/consumer-finance/auto-lending', type: 'Government Record' },
  ],
  'usps-election': [
    { title: 'USPS OIG: Operational Changes to Mail Delivery', url: 'https://www.uspsoig.gov/reports/audit-reports/', type: 'Government Report' },
    { title: 'House Oversight Committee: Postmaster General DeJoy Investigation', url: 'https://oversight.house.gov/landing/usps/', type: 'Congressional Report' },
  ],
  'utility-shutoff': [
    { title: 'LIHEAP: Low Income Home Energy Assistance Program Data', url: 'https://liheapch.acf.hhs.gov/', type: 'Government Record' },
    { title: 'NAACP: Lights Out in the Cold: Reforming Utility Shutoff Policies', url: 'https://naacp.org/resources/lights-out-cold', type: 'Report' },
    { title: 'National Energy Assistance Directors Association: Utility Shutoff Data', url: 'https://neada.org/', type: 'Research' },
  ],
  'welcome.*arkhive|arkhive-platform': [
    { title: 'International Consortium of Investigative Journalists', url: 'https://www.icij.org/', type: 'Research' },
    { title: 'The Center for Investigative Reporting', url: 'https://revealnews.org/', type: 'Investigation' },
  ],
  'wall-street-bailout|2008.*bailout': [
    { title: 'SIGTARP: Special Inspector General for TARP Quarterly Reports', url: 'https://www.sigtarp.gov/', type: 'Government Report' },
    { title: 'Congressional Oversight Panel: TARP Reports', url: 'https://www.govinfo.gov/collection/congressional-oversight-panel-reports', type: 'Congressional Report' },
    { title: 'GAO: Troubled Asset Relief Program Report', url: 'https://www.gao.gov/products/gao-12-229', type: 'Government Report' },
  ],
  'worldcom': [
    { title: 'SEC: SEC Charges WorldCom with $3.8 Billion Fraud', url: 'https://www.sec.gov/news/press/2002-2003/2002-87.htm', type: 'Legal Document' },
    { title: 'DOJ: Former WorldCom CEO Ebbers Convicted', url: 'https://www.justice.gov/archive/dag/cftf/chargingdocs/ebbersindictment.pdf', type: 'Legal Document' },
    { title: 'House Financial Services Committee: WorldCom Investigation Records', url: 'https://financialservices.house.gov/', type: 'Congressional Report' },
  ],
  'wartime-civil-liberties': [
    { title: 'National Archives: Executive Order 9066 - Japanese Internment', url: 'https://www.archives.gov/milestone-documents/executive-order-9066', type: 'Government Record' },
    { title: 'ACLU: National Security and Civil Liberties', url: 'https://www.aclu.org/issues/national-security', type: 'Report' },
  ],
  'whistleblower-retaliation': [
    { title: 'Government Accountability Project: Whistleblower Rights', url: 'https://whistleblower.org/', type: 'Research' },
    { title: 'SEC: Office of the Whistleblower', url: 'https://www.sec.gov/whistleblower', type: 'Government Record' },
  ],
  'forced-arbitration|arbitration.*consumer': [
    { title: 'CFPB: Arbitration Study', url: 'https://www.consumerfinance.gov/data-research/research-reports/arbitration-study-report-to-congress-2015/', type: 'Government Report' },
    { title: 'American Association for Justice: The Truth About Forced Arbitration', url: 'https://www.justice.org/what-we-do/enhance-practice-law/forced-arbitration', type: 'Research' },
    { title: 'Economic Policy Institute: The Growing Use of Mandatory Arbitration', url: 'https://www.epi.org/publication/the-growing-use-of-mandatory-arbitration-access-to-the-courts-is-now-barred-for-more-than-60-million-american-workers/', type: 'Research Study' },
  ],
  'predatory-towing': [
    { title: 'FTC: Towing Industry Consumer Protection', url: 'https://www.ftc.gov/news-events/topics/consumer-finance/auto-lending', type: 'Government Record' },
    { title: 'National Consumer Law Center: Towing Regulations by State', url: 'https://www.nclc.org/issues/', type: 'Research' },
    { title: 'AAA Foundation for Traffic Safety: Predatory Towing Practices Report', url: 'https://aaafoundation.org/category/towing/', type: 'Research' },
  ],
};

// ════════════════════════════════════════════════════════════════════════════
// PROCESSING
// ════════════════════════════════════════════════════════════════════════════

function findMatchingEnrichment(slug, title) {
  // Try matching pattern against slug and normalized title
  const normalizedTitle = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  for (const [pattern, sources] of Object.entries(ENRICHMENT)) {
    try {
      const re = new RegExp(pattern, 'i');
      if (re.test(slug) || re.test(title) || re.test(normalizedTitle)) {
        return sources;
      }
    } catch {
      // Fallback: simple includes check
      if (slug.includes(pattern) || normalizedTitle.includes(pattern)) {
        return sources;
      }
    }
  }
  return null;
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split(/\r?\n/);
  
  let result = [];
  let currentSlug = '';
  let currentTitle = '';
  let inSources = false;
  let bracketDepth = 0;
  let sourceCount = 0;
  let sourcesStartIdx = -1;
  let enriched = 0;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();
    
    // Track current investigation - slug is the object key like 'animal-cruelty': {
    const slugMatch = line.match(/^\s*'([a-z0-9][-a-z0-9]*)'\s*:\s*\{/);
    if (slugMatch) currentSlug = slugMatch[1];
    
    const titleMatch = line.match(/^\s*title:\s*'([^']+)'/);
    if (titleMatch && !inSources) currentTitle = titleMatch[1];
    
    if (!inSources && /sources:\s*\[/.test(line)) {
      inSources = true;
      bracketDepth = 0;
      sourceCount = 0;
      sourcesStartIdx = result.length;
      
      for (const ch of line) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }
      
      const tc = (line.match(/title:/g) || []).length;
      sourceCount += tc;
      
      if (bracketDepth <= 0) {
        inSources = false;
        result.push(line);
        continue;
      }
      
      result.push(line);
      continue;
    }
    
    if (inSources) {
      for (const ch of line) {
        if (ch === '[') bracketDepth++;
        if (ch === ']') bracketDepth--;
      }
      
      const tc = (line.match(/title:/g) || []).length;
      sourceCount += tc;
      
      if (bracketDepth <= 0) {
        inSources = false;
        
        // Check if this investigation needs enrichment
        if (sourceCount <= 2) {
          const newSources = findMatchingEnrichment(currentSlug, currentTitle);
          if (newSources) {
            // Find the line before the closing ] to insert new sources
            // The current line contains the ]
            // We need to add a comma to the last source entry if there is one,
            // then add the new sources
            
            // Look backward for the last source entry line
            const closingLine = line;
            
            // Insert new sources before the closing ]
            // First, ensure the previous entry has a trailing comma
            for (let j = result.length - 1; j >= sourcesStartIdx; j--) {
              const prevLine = result[j].trim();
              if (prevLine.endsWith('}')) {
                result[j] = result[j].replace(/}\s*$/, '},');
                break;
              } else if (prevLine.endsWith('},')) {
                break;
              }
            }
            
            // Determine indentation from existing sources
            let indent = '    ';
            for (let j = sourcesStartIdx + 1; j < result.length; j++) {
              const m = result[j].match(/^(\s+)\{/);
              if (m) {
                indent = m[1];
                break;
              }
            }
            
            // Add new source lines
            for (let k = 0; k < newSources.length; k++) {
              const src = newSources[k];
              const comma = k < newSources.length - 1 ? ',' : '';
              result.push(`${indent}{ title: '${src.title}', url: '${src.url}', type: '${src.type}' }${comma}`);
            }
            
            enriched += newSources.length;
            result.push(closingLine);
            continue;
          }
        }
        
        result.push(line);
        continue;
      }
      
      result.push(line);
      continue;
    }
    
    result.push(line);
  }
  
  if (enriched > 0) {
    let text = result.join('\r\n');
    // Ensure CRLF
    text = text.replace(/\r?\n/g, '\r\n');
    text = text.replace(/\s+$/, '\r\n');
    fs.writeFileSync(filePath, text, 'utf-8');
  }
  
  return enriched;
}

// ── Main ────────────────────────────────────────────────────────────────────
const files = fs.readdirSync(DIR).filter(f => f.endsWith('.ts')).sort();

let totalEnriched = 0;
let filesChanged = 0;

for (const file of files) {
  const fullPath = path.join(DIR, file);
  const count = processFile(fullPath);
  if (count > 0) {
    filesChanged++;
    console.log(`${file}: added ${count} new sources`);
  }
  totalEnriched += count;
}

console.log(`\n── TOTAL ──`);
console.log(`Files changed: ${filesChanged}`);
console.log(`New sources added: ${totalEnriched}`);
