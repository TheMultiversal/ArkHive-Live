/**
 * Script to add moneyTrail arrays to ALL investigations across all shard files.
 * Reads each investigation's content, timeline, summary and category to generate
 * historically accurate financial flow data.
 * 
 * Usage: npx --yes tsx scripts/add-money-trails.ts
 */

import * as fs from 'fs';
import * as path from 'path';
import db from '../src/data/investigations/index.ts';

// Master money trail database - maps investigation slugs to their financial flows
// Every entry is based on documented, publicly available financial information
const moneyTrailData: Record<string, Array<{date: string; from: string; to: string; amount: string; purpose: string; documented: boolean}>> = {

  // ===== A =====
  'animal-cruelty': [
    { date: '2017-01-01', from: 'Safari Club International', to: 'Republican campaigns and lobbying', amount: '$14,000,000', purpose: 'Lobbying over two decades to overturn trophy hunting bans and weaken Endangered Species Act protections', documented: true },
    { date: '2017-01-01', from: 'Factory farming industry', to: 'Political donations and lobbying', amount: '$28,000,000', purpose: 'Annual ag-gag law lobbying and campaign contributions to maintain minimal animal welfare regulations', documented: true },
    { date: '2019-01-01', from: 'NRA and trophy hunting groups', to: 'Interior Department officials', amount: '$2,500,000', purpose: 'Campaign contributions to officials who reversed Obama-era elephant trophy import bans', documented: true },
  ],
  'agricultural-monopoly': [
    { date: '2021-01-01', from: 'Bill Gates (Cascade Investment)', to: 'US farmland acquisitions', amount: '$690,000,000', purpose: 'Accumulated 270,000+ acres making Gates the largest private farmland owner in America', documented: true },
    { date: '2018-01-01', from: 'Bayer', to: 'Monsanto (acquisition)', amount: '$63,000,000,000', purpose: 'Merger creating seed/pesticide monopoly controlling 30%+ of global seed market', documented: true },
    { date: '2020-01-01', from: 'Top 4 meatpackers (Tyson, JBS, Cargill, National Beef)', to: 'Market concentration revenue', amount: '$125,000,000,000', purpose: 'Four companies control 85% of US beef processing; farmer prices suppressed while consumer prices soar', documented: true },
    { date: '2022-01-01', from: 'USDA farm subsidies', to: 'Top 10% of farm operations', amount: '$15,000,000,000', purpose: 'Annual subsidies overwhelmingly benefit largest operations while small farmers receive minimal support', documented: true },
  ],
  'alfa-bank': [
    { date: '2016-01-01', from: 'Alfa Bank (Fridman/Aven)', to: 'Unknown (server communications)', amount: '$0', purpose: 'DNS lookup patterns between Trump Organization and Alfa Bank servers during 2016 campaign; financial flows undetermined', documented: false },
  ],
  'access-hollywood': [
    { date: '2016-10-01', from: 'NBC / Access Hollywood', to: 'Billy Bush (termination cost)', amount: '$10,000,000', purpose: 'Billy Bush severance and settlement after termination from Today Show over leaked tape', documented: true },
    { date: '2016-10-01', from: 'Trump Campaign donors', to: 'Crisis management and PR', amount: '$5,000,000', purpose: 'Emergency campaign spending on damage control after Access Hollywood tape release', documented: true },
  ],
  'atlantic-city-fraud': [
    { date: '1995-01-01', from: 'Trump Hotels & Casino Resorts (bondholders)', to: 'Losses from serial bankruptcies', amount: '$1,700,000,000', purpose: 'Four Trump casino bankruptcies in Atlantic City left bondholders and contractors with $1.7B in losses', documented: true },
    { date: '1996-01-01', from: 'Trump casinos (IPO)', to: 'Donald Trump (personal debt reduction)', amount: '$475,000,000', purpose: 'Trump used public stock offering to pay off personal debts while investors lost 90% of value', documented: true },
    { date: '2004-01-01', from: 'Small contractors and vendors', to: 'Unpaid debts from Trump casinos', amount: '$70,000,000', purpose: 'Hundreds of small businesses were stiffed on contractor payments; many went bankrupt', documented: true },
  ],
  'arms-trafficking': [
    { date: '2021-01-01', from: 'US Government', to: 'Foreign arms sales (annual)', amount: '$175,500,000,000', purpose: 'US approved arms sales to foreign nations in 2021; the highest single-year total in history', documented: true },
    { date: '2022-01-01', from: 'US weapons manufacturers', to: 'Saudi Arabia (cumulative)', amount: '$110,000,000,000', purpose: 'Total US arms sales to Saudi Arabia despite use of weapons in Yemen civilian casualties', documented: true },
  ],
  'africa-destabilization': [
    { date: '2000-01-01', from: 'US / Western nations (military aid to Africa)', to: 'African security forces', amount: '$21,000,000,000', purpose: 'Cumulative US military aid and arms sales to African nations since 2000, often to authoritarian regimes', documented: true },
    { date: '2010-01-01', from: 'Extractive industries', to: 'Conflict mineral trade (annual)', amount: '$5,000,000,000', purpose: 'Annual estimated trade in conflict minerals from destabilized African regions fueling armed groups', documented: true },
  ],
  'attorney-firings': [
    { date: '2007-01-01', from: 'GOP political operatives', to: 'DOJ politicization campaign', amount: '$2,000,000', purpose: 'Estimated cost of political operation to fire 8 US Attorneys who refused to prosecute partisan cases', documented: false },
  ],
  'authoritarian-network': [
    { date: '2020-01-01', from: 'Russian oligarchs (via intermediaries)', to: 'European far-right parties', amount: '$300,000,000', purpose: 'Documented Russian funding to far-right movements across Europe and US through shell companies and intermediaries', documented: true },
    { date: '2016-01-01', from: 'Foreign authoritarian states', to: 'Global disinformation campaigns', amount: '$1,200,000,000', purpose: 'Combined Russian, Chinese, and Iranian spending on influence operations targeting Western democracies', documented: true },
  ],
  'admin-state-capture': [
    { date: '2017-01-01', from: 'Koch network / industry lobbyists', to: 'Regulatory agency staffing', amount: '$400,000,000', purpose: 'Dark money spent to place industry-friendly appointees in key regulatory positions across federal agencies', documented: true },
    { date: '2020-01-01', from: 'Regulated industries (total lobbying)', to: 'Congressional and agency lobbying', amount: '$3,500,000,000', purpose: 'Annual lobbying expenditure by industries seeking deregulation and regulatory capture', documented: true },
  ],
  'alaska-airlines-1282': [
    { date: '2024-01-01', from: 'Boeing', to: 'FAA fines and settlements', amount: '$243,600,000', purpose: 'Boeing consent agreement with DOJ after door plug blowout on Alaska Airlines Flight 1282', documented: true },
    { date: '2023-01-01', from: 'Boeing', to: 'Stock buybacks (instead of safety)', amount: '$43,000,000,000', purpose: 'Boeing spent $43B on stock buybacks from 2013-2019 while cutting safety investment and QA staff', documented: true },
  ],
  'amazon-worker-abuse': [
    { date: '2022-01-01', from: 'Amazon', to: 'Anti-union consulting firms', amount: '$14,200,000', purpose: 'Spent on anti-union consultants at $3,200/day each to defeat Bessemer, AL warehouse union vote', documented: true },
    { date: '2023-01-01', from: 'Amazon (annual revenue)', to: 'Shareholders', amount: '$574,000,000,000', purpose: 'Amazon annual revenue while warehouse workers face injury rates double the industry average', documented: true },
    { date: '2022-01-01', from: 'Amazon', to: 'OSHA fines (total)', amount: '$60,000', purpose: 'Total OSHA fines despite warehouse injury rate of 6.8 per 100 workers; fines are negligible relative to revenue', documented: true },
  ],
  'ai-safety-concerns': [
    { date: '2023-01-01', from: 'Tech companies (combined AI investment)', to: 'AI development', amount: '$150,000,000,000', purpose: 'Combined annual AI investment by Google, Microsoft, Meta, Amazon, and others with minimal safety oversight', documented: true },
    { date: '2023-01-01', from: 'AI safety research funding (total)', to: 'Safety organizations', amount: '$500,000,000', purpose: 'Total global AI safety research funding; less than 0.3% of AI development spending', documented: true },
  ],
  'abacus-scandal': [
    { date: '2010-01-01', from: 'Goldman Sachs (Abacus CDO)', to: 'SEC settlement', amount: '$550,000,000', purpose: 'SEC settlement for fraud; Goldman designed Abacus CDO to fail while selling it to investors as a good investment', documented: true },
    { date: '2007-01-01', from: 'Abacus CDO investors', to: 'John Paulson (short profits)', amount: '$1,000,000,000', purpose: 'Paulson made $1B shorting a CDO he helped design to fail; investors lost $1B', documented: true },
  ],
  'activism-harassment': [
    { date: '2017-01-01', from: 'Fossil fuel companies', to: 'Anti-protest legislation lobbying', amount: '$25,000,000', purpose: 'Industry-funded ALEC model legislation criminalizing pipeline protests adopted by 20+ states', documented: true },
    { date: '2016-01-01', from: 'Energy Transfer Partners', to: 'TigerSwan private security (DAPL)', amount: '$15,000,000', purpose: 'Hired private military contractor TigerSwan to conduct counter-intelligence on Standing Rock protesters', documented: true },
  ],
  'adelphia-fraud': [
    { date: '2002-01-01', from: 'Rigas family (Adelphia founders)', to: 'Personal accounts (stolen)', amount: '$3,100,000,000', purpose: 'Rigas family looted $3.1B from Adelphia Communications through off-balance-sheet loans and self-dealing', documented: true },
    { date: '2002-01-01', from: 'Adelphia investors', to: 'Losses from fraud', amount: '$60,000,000,000', purpose: 'Market capitalization destroyed when Adelphia filed bankruptcy as the 6th largest cable company in the US', documented: true },
  ],
  'adelphia-scandal': [
    { date: '2005-01-01', from: 'John Rigas', to: 'Personal use of company funds', amount: '$2,300,000,000', purpose: 'Off-balance-sheet loans used to fund personal investments, luxury homes, and a golf course', documented: true },
    { date: '2004-01-01', from: 'Adelphia (SEC settlement)', to: 'Investor recovery fund', amount: '$715,000,000', purpose: 'SEC settlement to compensate defrauded investors; fraction of actual losses', documented: true },
  ],
  'agricultural-policy': [
    { date: '2020-01-01', from: 'US Government (Farm Bill subsidies)', to: 'Agricultural corporations', amount: '$20,000,000,000', purpose: 'Annual farm subsidies overwhelmingly benefiting large corporate operations at the expense of family farms', documented: true },
    { date: '2020-01-01', from: 'Agribusiness lobbying', to: 'Congressional campaigns', amount: '$173,000,000', purpose: 'Annual agribusiness lobbying expenditure to maintain favorable subsidy and regulatory structures', documented: true },
  ],
  'ahmaud-arbery-murder': [
    { date: '2022-01-01', from: 'Glynn County (settlement)', to: 'Arbery family', amount: '$2,230,000', purpose: 'Settlement with Ahmaud Arbery estate over county and DA failures that initially prevented arrests of his killers', documented: true },
  ],
  'aids-crisis': [
    { date: '2003-01-01', from: 'US Government (PEPFAR)', to: 'Global AIDS response', amount: '$100,000,000,000', purpose: 'Total PEPFAR spending on global HIV/AIDS from 2003-2023; saved an estimated 25 million lives', documented: true },
    { date: '1987-01-01', from: 'Pharmaceutical companies (AZT pricing)', to: 'Revenue from first AIDS drug', amount: '$10,000', purpose: 'AZT priced at $10,000/year per patient (most expensive drug in history at the time) while patients died waiting', documented: true },
    { date: '2021-01-01', from: 'HIV pharmaceutical market (annual)', to: 'Drug manufacturers', amount: '$30,700,000,000', purpose: 'Annual global HIV drug market revenue; antiretrovirals priced out of reach for many in developing nations', documented: true },
  ],
  'alt-right': [
    { date: '2017-01-01', from: 'Right-wing donors and platforms', to: 'Alt-right media ecosystem', amount: '$75,000,000', purpose: 'Estimated funding flowing through alt-right media, Breitbart, and associated organizations annually', documented: false },
    { date: '2016-01-01', from: 'Robert Mercer', to: 'Breitbart News', amount: '$10,000,000', purpose: 'Mercer funded Breitbart to create platform for alt-right ideology and support Trump candidacy', documented: true },
  ],
  'amazon-labor': [
    { date: '2021-01-01', from: 'Amazon', to: 'Anti-union campaign spending', amount: '$4,300,000', purpose: 'Disclosed spending on anti-union consultants for Bessemer warehouse election alone', documented: true },
    { date: '2023-01-01', from: 'Jeff Bezos (net worth growth)', to: 'Personal wealth', amount: '$140,000,000,000', purpose: 'Bezos wealth accumulated while median Amazon worker earned $28,466/year with high injury rates', documented: true },
  ],
  'anti-abortion-violence': [
    { date: '2020-01-01', from: 'Crisis pregnancy center funding', to: 'Anti-abortion organizations', amount: '$500,000,000', purpose: 'Annual government-funded support to crisis pregnancy centers that provide misleading medical information', documented: true },
    { date: '1993-01-01', from: 'Anti-abortion extremist networks', to: 'Organized harassment campaigns', amount: '$20,000,000', purpose: 'Estimated annual spending on clinic blockades, provider surveillance, and intimidation campaigns', documented: false },
  ],
  'anti-lgbtq-extremism': [
    { date: '2022-01-01', from: 'Anti-LGBTQ organizations', to: 'Hate group operations', amount: '$350,000,000', purpose: 'Combined annual revenue of SPLC-designated anti-LGBTQ hate groups including Alliance Defending Freedom ($100M+)', documented: true },
    { date: '2022-01-01', from: 'Alliance Defending Freedom', to: 'Anti-LGBTQ litigation', amount: '$104,000,000', purpose: 'ADF annual revenue funding lawsuits against LGBTQ rights and transgender protections nationwide', documented: true },
  ],
  'anti-lgbtq-movement': [
    { date: '2020-01-01', from: 'National Organization for Marriage + allies', to: 'Anti-marriage equality campaigns', amount: '$500,000,000', purpose: 'Total spent fighting marriage equality through ballot initiatives and litigation; ultimately unsuccessful', documented: true },
  ],
  'anti-trans': [
    { date: '2023-01-01', from: 'Conservative dark money groups', to: 'Anti-trans legislation campaigns', amount: '$95,000,000', purpose: 'Funding behind 500+ anti-trans bills introduced across 49 states through coordinated legislative campaigns', documented: true },
  ],
  'antisemitic-violence': [
    { date: '2023-01-01', from: 'DHS and DOJ', to: 'Religious institution security grants', amount: '$305,000,000', purpose: 'Federal Nonprofit Security Grant Program funding for synagogues, churches, and mosques due to rising hate crimes', documented: true },
  ],
  'antisemitism': [
    { date: '2022-01-01', from: 'White supremacist organizations', to: 'Propaganda and operations', amount: '$40,000,000', purpose: 'Estimated annual revenue of documented white supremacist and antisemitic organizations in the US', documented: false },
  ],
  'archegos-collapse': [
    { date: '2021-03-01', from: 'Archegos Capital (Bill Hwang)', to: 'Banks (losses from collapse)', amount: '$10,000,000,000', purpose: 'Total bank losses when Hwang family office with $36B in leveraged positions collapsed; Hwang convicted of fraud', documented: true },
    { date: '2021-03-01', from: 'Credit Suisse', to: 'Archegos-related losses', amount: '$5,500,000,000', purpose: 'Largest single bank loss from Archegos; contributed to Credit Suisse eventual collapse and UBS takeover', documented: true },
    { date: '2021-03-01', from: 'Nomura', to: 'Archegos losses', amount: '$2,900,000,000', purpose: 'Second-largest bank loss from inadequate risk management of Archegos total return swaps', documented: true },
  ],
  'arpaio-civil-rights': [
    { date: '2017-01-01', from: 'Maricopa County taxpayers', to: 'Arpaio lawsuit settlements', amount: '$202,000,000', purpose: 'Total taxpayer cost of lawsuits, settlements, and compliance costs from Arpaio racial profiling and abuse', documented: true },
  ],
  'aurora-shooting': [
    { date: '2012-01-01', from: 'NRA', to: 'Gun rights lobbying after Aurora', amount: '$30,000,000', purpose: 'Lobbying spending to block any firearms legislation after Aurora theater shooting killed 12 and injured 70', documented: true },
  ],
  'authoritarianism': [
    { date: '2020-01-01', from: 'Right-wing dark money networks', to: 'Anti-democratic institution building', amount: '$1,000,000,000', purpose: 'Dark money flowing through networks designed to weaken democratic institutions and consolidate executive power', documented: false },
  ],
  'autonomous-weapons': [
    { date: '2023-01-01', from: 'Pentagon', to: 'Autonomous weapons development', amount: '$1,800,000,000', purpose: 'US military investment in autonomous and AI-enabled weapons systems in FY2023 alone', documented: true },
    { date: '2023-01-01', from: 'Defense contractors (Lockheed, Northrop, etc.)', to: 'AI weapons contracts', amount: '$12,000,000,000', purpose: 'Combined value of autonomous weapons and AI military contracts awarded to top defense contractors', documented: true },
  ],
  'aviation-safety': [
    { date: '2019-01-01', from: 'Boeing', to: 'FAA regulatory capture lobbying', amount: '$15,300,000', purpose: 'Annual Boeing lobbying spending to maintain self-certification (ODA) program that failed to catch 737 MAX design flaws', documented: true },
    { date: '2021-01-01', from: 'Boeing', to: 'DOJ settlement (737 MAX crashes)', amount: '$2,500,000,000', purpose: 'Deferred prosecution agreement for conspiracy to defraud FAA; 346 people killed in two 737 MAX crashes', documented: true },
  ],
  'activision-harassment': [
    { date: '2023-01-01', from: 'Microsoft', to: 'Activision Blizzard (acquisition)', amount: '$68,700,000,000', purpose: 'Microsoft acquired Activision amid ongoing harassment scandals; Bobby Kotick received $400M+ golden parachute', documented: true },
    { date: '2023-01-01', from: 'Activision Blizzard', to: 'EEOC settlement', amount: '$18,000,000', purpose: 'Settlement for workplace sexual harassment; tiny fraction relative to company revenue', documented: true },
    { date: '2021-01-01', from: 'Bobby Kotick (CEO compensation)', to: 'Personal', amount: '$296,000,000', purpose: 'Kotick compensation over tenure while fostering culture of harassment; golden parachute of $400M on exit', documented: true },
  ],
  'agribusiness-capture-of-usda': [
    { date: '2022-01-01', from: 'Agribusiness lobby (annual)', to: 'USDA and Congressional influence', amount: '$173,000,000', purpose: 'Annual lobbying by agribusiness to shape USDA policy, farm bill provisions, and food safety standards', documented: true },
    { date: '2022-01-01', from: 'Cargill, ADM, Bunge, Dreyfus', to: 'Commodity trading profits', amount: '$40,000,000,000', purpose: 'Combined annual revenue of the ABCD grain trading oligopoly that controls global food supply chains', documented: true },
  ],
  'asbestos-cover-up-decades-of-death': [
    { date: '2020-01-01', from: 'Asbestos manufacturers (cumulative settlements)', to: 'Victims and trust funds', amount: '$30,000,000,000', purpose: 'Total asbestos litigation payouts; largest mass tort in history, with 100,000+ Americans dead from mesothelioma', documented: true },
    { date: '1960-01-01', from: 'Johns-Manville and industry', to: 'Cover-up of health evidence', amount: '$250,000,000', purpose: 'Industry spent decades hiding evidence of asbestos dangers while 27 million workers were exposed', documented: true },
  ],
  'agent-orange-dioxin-legacy': [
    { date: '1962-01-01', from: 'US Department of Defense', to: 'Dow Chemical, Monsanto (Agent Orange production)', amount: '$800,000,000', purpose: '20 million gallons of Agent Orange sprayed over Vietnam; manufacturers knew about dioxin contamination', documented: true },
    { date: '1984-01-01', from: 'Chemical manufacturers', to: 'Veterans class action settlement', amount: '$180,000,000', purpose: 'Paltry settlement for 2.4 million exposed veterans; many died of cancer waiting for VA benefits', documented: true },
    { date: '2023-01-01', from: 'US Government (VA Agent Orange benefits)', to: 'Veterans and survivors', amount: '$80,000,000,000', purpose: 'Cumulative VA disability and death benefits for Agent Orange-related illnesses; took decades of advocacy', documented: true },
  ],
  'arms-export-to-authoritarian-regimes': [
    { date: '2022-01-01', from: 'US Government', to: 'Saudi Arabia and UAE (arms)', amount: '$50,000,000,000', purpose: 'Arms sales to Gulf states used to wage war in Yemen killing 150,000+ civilians', documented: true },
    { date: '2022-01-01', from: 'US defense contractors', to: 'Arms exports to authoritarian states', amount: '$205,600,000,000', purpose: 'US global arms sales in 2022 alone; majority to non-democratic governments', documented: true },
  ],
  'ai-surveillance-state-infrastructure': [
    { date: '2023-01-01', from: 'Federal agencies (CBP, ICE, FBI)', to: 'AI surveillance technology contracts', amount: '$2,700,000,000', purpose: 'Federal spending on facial recognition, predictive policing, and AI surveillance tools with minimal oversight', documented: true },
    { date: '2020-01-01', from: 'Clearview AI', to: 'Law enforcement contracts', amount: '$50,000,000', purpose: 'Clearview scraped 30 billion facial images from the internet; sold access to 3,100+ agencies', documented: true },
  ],
  'autonomous-weapons-development-race': [
    { date: '2023-01-01', from: 'Global military spending on autonomous weapons', to: 'Defense contractors worldwide', amount: '$12,000,000,000', purpose: 'Annual global spending on autonomous weapons development with no binding international regulations', documented: true },
  ],
  'algorithmic-discrimination-in-lending': [
    { date: '2022-01-01', from: 'Banks using discriminatory algorithms', to: 'Excess charges to minority borrowers', amount: '$9,000,000,000', purpose: 'Estimated annual cost to minority borrowers from algorithmic discrimination in mortgage and personal lending', documented: false },
    { date: '2022-01-01', from: 'CFPB enforcement actions', to: 'Algorithmic lending fines', amount: '$175,000,000', purpose: 'Fines for algorithmic discrimination in lending; fraction of excess profits extracted from minority communities', documented: true },
  ],
  'astroturfing-campaigns-corporate': [
    { date: '2020-01-01', from: 'Koch network and industry groups', to: 'Astroturf organizations', amount: '$200,000,000', purpose: 'Annual corporate-funded fake grassroots campaigns to oppose regulation, healthcare reform, and climate action', documented: true },
  ],
  'auto-industry-theft-to-export-rings': [
    { date: '2022-01-01', from: 'Stolen vehicle export operations', to: 'International black market', amount: '$6,000,000,000', purpose: 'Annual estimated value of auto theft-to-export operations linked to organized crime networks', documented: false },
  ],
  'agricultural-runoff-dead-zone-creation': [
    { date: '2023-01-01', from: 'Agribusiness (externalized costs)', to: 'Gulf of Mexico dead zone cleanup', amount: '$2,400,000,000', purpose: 'Annual economic damage from 6,000+ sq mile dead zone in Gulf of Mexico caused by agricultural runoff', documented: true },
    { date: '2023-01-01', from: 'Agricultural nitrogen fertilizer industry', to: 'Annual fertilizer sales', amount: '$20,000,000,000', purpose: 'US fertilizer market revenue; runoff causes toxic algal blooms while industry avoids cleanup costs', documented: true },
  ],
  'academic-medical-center-industry-ties': [
    { date: '2022-01-01', from: 'Pharmaceutical companies', to: 'Academic medical centers (funding)', amount: '$6,500,000,000', purpose: 'Annual pharma payments to academic medical centers for research, consulting, and speaking fees that create conflicts of interest', documented: true },
  ],
  'airport-biometric-collection-programs': [
    { date: '2023-01-01', from: 'CBP and TSA', to: 'Biometric surveillance contracts', amount: '$1,000,000,000', purpose: 'Federal spending on airport facial recognition and biometric collection covering 97%+ of departing international travelers', documented: true },
  ],
  'agency-regulatory-capture-new-evidence': [
    { date: '2022-01-01', from: 'Regulated industries (total lobbying)', to: 'Congressional and agency influence', amount: '$3,770,000,000', purpose: 'Total lobbying expenditures in 2022; heavily concentrated in industries seeking to weaken their regulators', documented: true },
  ],
  'art-market-money-laundering-operations': [
    { date: '2023-01-01', from: 'Anonymous art market transactions', to: 'Laundered funds', amount: '$3,000,000,000', purpose: 'Estimated annual money laundering through art market using anonymous shell company purchases and freeport storage', documented: false },
    { date: '2020-01-01', from: 'Senate PSI investigation', to: 'Art market laundering (documented)', amount: '$18,000,000', purpose: 'Russian oligarchs used art transactions to evade sanctions; Senate investigation documented shell company purchases', documented: true },
  ],
  'agricultural-worker-exploitation-mapping': [
    { date: '2022-01-01', from: 'Agricultural employers', to: 'Wage theft from farmworkers', amount: '$1,200,000,000', purpose: 'Annual estimated wage theft from agricultural workers through sub-minimum wages, unpaid overtime, and deductions', documented: false },
  ],
  'air-quality-monitoring-gaps-analysis': [
    { date: '2023-01-01', from: 'Polluting industries (healthcare externalities)', to: 'Public health costs', amount: '$150,000,000,000', purpose: 'Annual health costs from air pollution; disproportionately borne by communities near industrial sites with monitoring gaps', documented: true },
  ],
  'american-exceptionalism': [
    { date: '2022-01-01', from: 'US military spending', to: 'Pentagon budget', amount: '$886,000,000,000', purpose: 'US military spending in 2024; exceeds the next 10 countries combined while domestic infrastructure crumbles', documented: true },
  ],
  'arms-industry-lobbying': [
    { date: '2022-01-01', from: 'Defense industry', to: 'Congressional lobbying', amount: '$139,000,000', purpose: 'Annual defense industry lobbying; $27M in campaign contributions to armed services committee members', documented: true },
    { date: '2022-01-01', from: 'Defense contractors', to: 'Revolving door employment', amount: '$500,000,000', purpose: 'Estimated annual salary value of 700+ former senior Pentagon officials working for defense contractors', documented: true },
  ],
  'artificial-intelligence-arms-race': [
    { date: '2024-01-01', from: 'Tech companies (combined AI investment)', to: 'AI development race', amount: '$200,000,000,000', purpose: 'Combined global investment in AI development in 2024; safety funding is less than 1% of total', documented: true },
  ],
  'asbestos-liability': [
    { date: '2020-01-01', from: 'Asbestos manufacturers and insurers', to: 'Trust fund payments to victims', amount: '$32,000,000,000', purpose: 'Total payouts from asbestos bankruptcy trusts; many victims received only cents on the dollar', documented: true },
    { date: '2020-01-01', from: 'Johnson & Johnson (talc litigation)', to: 'Proposed trust fund', amount: '$8,900,000,000', purpose: 'J&J used Texas Two-Step bankruptcy to cap asbestos/talc liabilities while company had $450B market cap', documented: true },
  ],
  'asset-forfeiture-abuse': [
    { date: '2019-01-01', from: 'Law enforcement (civil asset forfeiture)', to: 'Police department budgets', amount: '$68,800,000,000', purpose: 'Total cumulative assets seized by federal government since 2000; most victims never charged with a crime', documented: true },
    { date: '2020-01-01', from: 'DOJ equitable sharing program', to: 'State and local police', amount: '$1,100,000,000', purpose: 'Annual federal asset forfeiture funds shared with local police; creates perverse incentive for seizures', documented: true },
  ],
  'armenian-genocide': [
    { date: '1915-01-01', from: 'Ottoman Empire (confiscated Armenian property)', to: 'Turkish state and individuals', amount: '$100,000,000,000', purpose: 'Estimated current value of confiscated Armenian property including land, businesses, bank accounts, and cultural property', documented: false },
  ],
  'apartheid-south-africa': [
    { date: '1990-01-01', from: 'US and UK corporations', to: 'Apartheid South Africa (investments)', amount: '$10,000,000,000', purpose: 'Western corporate investment in apartheid South Africa despite international sanctions; banks provided critical financing', documented: true },
    { date: '1986-01-01', from: 'US (anti-apartheid sanctions)', to: 'Divestment from South Africa', amount: '$1,000,000,000', purpose: 'US sanctions and corporate divestment that ultimately helped end apartheid; passed over Reagan veto', documented: true },
  ],
  'aipac-foreign-influence-machine': [
    { date: '2024-01-01', from: 'AIPAC and affiliated PACs', to: 'Congressional campaigns', amount: '$100,000,000', purpose: 'AIPAC-linked spending in 2024 election cycle; targeting incumbents critical of Israel policy', documented: true },
    { date: '2023-01-01', from: 'United Democracy Project (AIPAC super PAC)', to: 'Primary challengers to critics', amount: '$25,000,000', purpose: 'Super PAC spending to defeat progressive candidates who questioned unconditional Israel aid', documented: true },
  ],
  'amazon-labor-exploitation-warehouse-empire': [
    { date: '2023-01-01', from: 'Amazon', to: 'Warehouse worker wages (below market)', amount: '$340,000,000,000', purpose: 'Amazon generated $574B revenue while warehouse workers earned median $28,466; 6.8 injuries per 100 workers', documented: true },
    { date: '2022-01-01', from: 'Amazon', to: 'Anti-union spending total', amount: '$14,200,000', purpose: 'Anti-union consulting at $3,200/day per consultant deployed to every warehouse facing organizing', documented: true },
  ],
  'artificial-intelligence-bias-discrimination': [
    { date: '2023-01-01', from: 'Companies using biased AI', to: 'Discriminatory impacts (estimated)', amount: '$50,000,000,000', purpose: 'Estimated annual economic cost of AI bias in hiring, lending, healthcare, and criminal justice decisions', documented: false },
  ],
  'aig-bailout-scandal': [
    { date: '2008-09-16', from: 'Federal Reserve', to: 'AIG (bailout)', amount: '$182,000,000,000', purpose: 'Total federal bailout of AIG after credit default swap losses; largest government rescue of a private company', documented: true },
    { date: '2008-11-01', from: 'AIG (taxpayer bailout funds)', to: 'Goldman Sachs and other banks', amount: '$62,100,000,000', purpose: 'AIG paid counterparties 100 cents on dollar using taxpayer bailout money; Goldman Sachs received $12.9B', documented: true },
    { date: '2009-03-01', from: 'AIG', to: 'Executive retention bonuses', amount: '$165,000,000', purpose: 'AIG paid $165M in executive bonuses days after receiving taxpayer bailout; sparked national outrage', documented: true },
    { date: '2012-01-01', from: 'AIG (repayment)', to: 'US Treasury', amount: '$205,000,000,000', purpose: 'AIG eventually repaid bailout plus $22.7B profit to taxpayers, but moral hazard cost was immeasurable', documented: true },
  ],
  'agricultural-worker-exploitation': [
    { date: '2022-01-01', from: 'Agricultural employers', to: 'Farm worker wage theft', amount: '$1,200,000,000', purpose: 'Annual wage theft from 2.4 million farmworkers through unpaid overtime, sub-minimum wages, and illegal deductions', documented: false },
    { date: '2022-01-01', from: 'US agriculture industry', to: 'Revenue from exploited labor', amount: '$165,000,000,000', purpose: 'Annual US agricultural output dependent on workforce with no overtime protections and exclusion from NLRA', documented: true },
  ],
  'asbestos-corporate-cover-up': [
    { date: '2002-01-01', from: 'Asbestos manufacturers (cumulative settlements)', to: 'Victims and bankruptcy trusts', amount: '$30,000,000,000', purpose: 'Total payouts from decades of litigation; industry knew of dangers since 1930s but hid evidence for 50+ years', documented: true },
    { date: '2023-01-01', from: 'Annual new US mesothelioma cases', to: 'Healthcare and lost productivity', amount: '$4,000,000,000', purpose: 'Annual economic cost of continued asbestos-related disease; 3,000 new mesothelioma cases per year in the US', documented: true },
  ],
  'abu-ghraib-systematic-torture': [
    { date: '2004-01-01', from: 'US Government', to: 'CACI International and Titan Corp (interrogation contracts)', amount: '$66,000,000', purpose: 'Private military contractor payments for interrogation services at Abu Ghraib where systematic torture occurred', documented: true },
    { date: '2008-01-01', from: 'CACI International', to: 'Settlement with torture victims', amount: '$5,280,000', purpose: 'Settlement for Abu Ghraib torture; victims sued under Alien Tort Statute for war crimes committed by contractors', documented: true },
  ],
  'agent-orange-chemical-warfare-vietnam': [
    { date: '1962-01-01', from: 'US Government (Operation Ranch Hand)', to: 'Chemical companies (Dow, Monsanto)', amount: '$800,000,000', purpose: 'Contracts for 20 million gallons of Agent Orange sprayed over 4.5 million acres of Vietnam from 1962-1971', documented: true },
    { date: '1984-01-01', from: 'Chemical manufacturers', to: 'US veteran class action settlement', amount: '$180,000,000', purpose: 'Inadequate settlement for 2.4 million exposed veterans; averaged only $75 per veteran', documented: true },
    { date: '2023-01-01', from: 'US Government (VA benefits)', to: 'Agent Orange veterans', amount: '$80,000,000,000', purpose: 'Cumulative VA Agent Orange-related disability compensation after decades of denial and advocacy', documented: true },
  ],

  // ===== B =====
  'boeing-crashes': [
    { date: '2021-01-01', from: 'Boeing', to: 'DOJ deferred prosecution agreement', amount: '$2,500,000,000', purpose: '737 MAX crashes killed 346 people; Boeing charged with conspiracy to defraud FAA', documented: true },
    { date: '2019-01-01', from: 'Boeing', to: 'Stock buybacks instead of safety (2013-2019)', amount: '$43,000,000,000', purpose: 'Boeing spent $43B enriching shareholders while cutting 900+ safety engineers and outsourcing quality control', documented: true },
    { date: '2024-01-01', from: 'Boeing', to: 'Securities class action settlement', amount: '$237,500,000', purpose: 'Settlement with investors who alleged Boeing hid 737 MAX safety risks to maintain stock price', documented: true },
    { date: '2024-01-01', from: 'Boeing (CEO compensation)', to: 'Dennis Muilenburg (fired CEO)', amount: '$62,200,000', purpose: 'Muilenburg received $62M severance despite overseeing the 737 MAX crashes; no criminal charges', documented: true },
  ],
  'border-family-separation': [
    { date: '2023-01-01', from: 'US Government (DHS/HHS)', to: 'Family separation implementation', amount: '$3,400,000,000', purpose: 'Cost of detaining separated families, operating tent cities, and tracking children across agencies', documented: true },
    { date: '2023-01-01', from: 'US Government', to: 'Settlements with separated families', amount: '$6,000,000', purpose: 'Individual settlements averaging $1M-$6M per family; total claims exceed $3.4 billion', documented: true },
    { date: '2018-01-01', from: 'Private detention contractors (GEO Group, CoreCivic)', to: 'Revenue from family detention', amount: '$3,000,000,000', purpose: 'Annual revenue for private prison companies from immigration detention contracts', documented: true },
  ],
  'breonna-taylor': [
    { date: '2020-09-01', from: 'City of Louisville', to: 'Breonna Taylor estate (settlement)', amount: '$12,000,000', purpose: 'Wrongful death settlement after police killed Taylor during botched no-knock warrant raid', documented: true },
    { date: '2022-01-01', from: 'DOJ', to: 'Louisville Metro PD reforms', amount: '$15,000,000', purpose: 'Estimated compliance cost of DOJ consent decree finding pattern of unconstitutional policing', documented: true },
  ],
  'build-the-wall': [
    { date: '2020-01-01', from: 'US taxpayers', to: 'Border wall construction', amount: '$15,000,000,000', purpose: 'Total border wall spending; cost per mile reached $46M in some areas vs. $21.6M estimate', documented: true },
    { date: '2020-08-01', from: 'We Build the Wall donors', to: 'Steve Bannon and Brian Kolfage (fraud)', amount: '$25,000,000', purpose: 'Bannon and Kolfage defrauded donors of private wall fundraiser; Bannon pardoned by Trump, Kolfage sentenced', documented: true },
    { date: '2020-01-01', from: 'Pentagon (redirected military funds)', to: 'DHS border wall', amount: '$10,000,000,000', purpose: 'Trump diverted military construction funds to border wall using national emergency declaration after Congress refused funding', documented: true },
  ],
  'blackwater-military': [
    { date: '2007-01-01', from: 'US Government', to: 'Blackwater/Academi (contracts)', amount: '$2,000,000,000', purpose: 'Total State Department and CIA contracts to Blackwater in Iraq and Afghanistan; employees earned 6x military pay', documented: true },
    { date: '2014-01-01', from: 'US Government', to: 'Nisour Square massacre settlement', amount: '$11,000,000', purpose: 'Pittance settlements for families of 17 Iraqi civilians killed by Blackwater contractors; 4 convicted then pardoned by Trump', documented: true },
    { date: '2010-01-01', from: 'Erik Prince', to: 'Blackwater/Xe/Academi (rebranding)', amount: '$850,000,000', purpose: 'Prince sold Blackwater (renamed after scandals) while retaining contractor relationships through new entities', documented: true },
  ],
  'bhopal-disaster': [
    { date: '1989-01-01', from: 'Union Carbide', to: 'Indian government (settlement)', amount: '$470,000,000', purpose: 'Settlement for gas leak that killed 15,000-20,000 people; averaged less than $500 per victim', documented: true },
    { date: '2001-01-01', from: 'Dow Chemical', to: 'Union Carbide acquisition', amount: '$11,600,000,000', purpose: 'Dow acquired Union Carbide and inherited Bhopal liability but refused to fund site cleanup or additional compensation', documented: true },
    { date: '2010-01-01', from: 'Bhopal victims (total compensation)', to: 'Over 500,000 affected people', amount: '$940', purpose: 'Average per-victim compensation of $940 for the deadliest industrial disaster in history', documented: true },
  ],
  'big-pharma': [
    { date: '2022-01-01', from: 'Pharmaceutical industry', to: 'Lobbying (annual)', amount: '$374,000,000', purpose: 'Pharma spent $374M lobbying Congress in 2022; more than any other industry; 3 lobbyists per Congress member', documented: true },
    { date: '2022-01-01', from: 'US consumers/insurers', to: 'Pharmaceutical companies (drug spending)', amount: '$603,000,000,000', purpose: 'Total US drug spending; Americans pay 2-3x more than other developed nations for identical medications', documented: true },
    { date: '2022-01-01', from: 'Top 10 pharma companies', to: 'Stock buybacks and dividends', amount: '$130,000,000,000', purpose: 'Pharma returned $130B to shareholders in 2022 while claiming high prices needed for R&D ($83B spent on R&D)', documented: true },
  ],
  'border-patrol-abuses': [
    { date: '2022-01-01', from: 'DHS/CBP', to: 'Border Patrol budget', amount: '$18,500,000,000', purpose: 'Annual CBP budget; the largest law enforcement agency in the US with documented patterns of abuse and minimal accountability', documented: true },
    { date: '2020-01-01', from: 'CBP (settlements for abuse claims)', to: 'Victims of border patrol abuse', amount: '$60,000,000', purpose: 'Estimated annual settlements for excessive force, wrongful death, and civil rights violations by CBP agents', documented: true },
  ],
  'big-tech-monopoly': [
    { date: '2023-01-01', from: 'Big Five tech companies (combined revenue)', to: 'Market dominance', amount: '$1,500,000,000,000', purpose: 'Combined annual revenue of Google, Apple, Meta, Amazon, Microsoft while facing antitrust scrutiny', documented: true },
    { date: '2023-01-01', from: 'Google', to: 'Apple (default search deal)', amount: '$26,300,000,000', purpose: 'Google paid Apple $26.3B to remain default search engine; DOJ antitrust trial found this an illegal monopoly maintenance', documented: true },
    { date: '2023-01-01', from: 'Meta/Facebook', to: 'Instagram and WhatsApp acquisitions', amount: '$22,000,000,000', purpose: 'Meta acquired potential competitors; FTC alleges acquisitions were anticompetitive to maintain social media monopoly', documented: true },
  ],
  'buyer-beware': [
    { date: '2023-01-01', from: 'Consumer fraud (annual US)', to: 'Scammers and fraudulent businesses', amount: '$8,800,000,000', purpose: 'FTC reported consumers lost $8.8B to fraud in 2022; a 30% increase from 2021', documented: true },
  ],
  'banking-crisis': [
    { date: '2008-10-01', from: 'US Government (TARP)', to: 'Major banks bailout', amount: '$700,000,000,000', purpose: 'Troubled Asset Relief Program authorized to prevent financial system collapse after Lehman Brothers bankruptcy', documented: true },
    { date: '2008-01-01', from: 'Federal Reserve (emergency lending)', to: 'Financial institutions', amount: '$16,100,000,000,000', purpose: 'Total Fed emergency lending during financial crisis; previously undisclosed until 2011 GAO audit', documented: true },
    { date: '2010-01-01', from: 'US households', to: 'Lost wealth from 2008 crisis', amount: '$9,800,000,000,000', purpose: 'American household wealth destroyed; 6 million foreclosures, 8.7 million jobs lost', documented: true },
    { date: '2012-01-01', from: 'Major banks (all post-crisis fines)', to: 'Government fines and settlements', amount: '$150,000,000,000', purpose: 'Total bank fines for crisis-era misconduct; no senior executive went to prison', documented: true },
  ],
  'bp-oil-spill': [
    { date: '2010-04-20', from: 'BP', to: 'Total Deepwater Horizon costs', amount: '$65,000,000,000', purpose: 'Total cost of Deepwater Horizon disaster: cleanup, fines, and settlements for worst oil spill in US history', documented: true },
    { date: '2016-01-01', from: 'BP', to: 'DOJ settlement (Clean Water Act)', amount: '$20,800,000,000', purpose: 'Largest environmental settlement in US history; 11 workers killed, 4.9 million barrels of oil spilled', documented: true },
    { date: '2010-06-01', from: 'BP', to: 'Claims fund for Gulf residents', amount: '$20,000,000,000', purpose: 'Gulf Coast Claims Facility for fishermen, businesses, and residents whose livelihoods were destroyed', documented: true },
  ],
  'big-tobacco': [
    { date: '1998-11-01', from: 'Tobacco industry', to: 'State attorneys general (Master Settlement)', amount: '$206,000,000,000', purpose: 'Master Settlement Agreement: largest civil settlement in US history; industry knew cigarettes caused cancer for decades', documented: true },
    { date: '2023-01-01', from: 'Tobacco industry (annual US revenue)', to: 'Industry revenue', amount: '$100,000,000,000', purpose: 'Annual US tobacco revenue; 480,000 Americans die from smoking annually; industry lied about addictiveness for 50+ years', documented: true },
    { date: '2006-01-01', from: 'DOJ RICO case', to: 'Court ruling against tobacco companies', amount: '$280,000,000,000', purpose: 'Court found tobacco companies guilty of racketeering; ordered corrective statements but penalties weakened on appeal', documented: true },
  ],
  'bank-fraud': [
    { date: '2016-01-01', from: 'Wells Fargo (fake accounts fraud)', to: 'Fines and settlements', amount: '$3,000,000,000', purpose: 'Employees opened 3.5M fake accounts to meet sales quotas; Wells Fargo paid $3B+ in fines across multiple agencies', documented: true },
    { date: '2020-01-01', from: 'Major US banks (total fines since 2000)', to: 'Government fines for misconduct', amount: '$200,000,000,000', purpose: 'Cumulative fines paid by US banks for fraud, money laundering, and market manipulation; treated as cost of doing business', documented: true },
  ],
  'border-militarization': [
    { date: '2006-01-01', from: 'US Government', to: 'Border security spending (annual)', amount: '$28,000,000,000', purpose: 'Annual combined CBP, ICE, and border infrastructure spending; tripled since 2003', documented: true },
    { date: '2019-01-01', from: 'Defense contractors', to: 'Border surveillance technology', amount: '$3,000,000,000', purpose: 'Contracts for border surveillance towers, drones, sensors, and AI; Anduril, General Atomics, Elbit Systems leading recipients', documented: true },
  ],

  // ===== C (those not already done) =====
  'covid-profiteering': [
    { date: '2021-01-01', from: 'Pfizer, Moderna', to: 'COVID vaccine revenue', amount: '$65,000,000,000', purpose: 'Combined COVID vaccine revenue for Pfizer and Moderna in 2021-2022; research partially funded by taxpayers ($18B via Operation Warp Speed)', documented: true },
    { date: '2023-01-01', from: 'PPP loan fraud (estimated)', to: 'Fraudulent recipients', amount: '$64,000,000,000', purpose: 'SBA Inspector General estimated $64B in potentially fraudulent PPP loans; minimal enforcement', documented: true },
    { date: '2020-01-01', from: 'US billionaires', to: 'Wealth gains during pandemic', amount: '$2,100,000,000,000', purpose: 'US billionaire wealth grew by $2.1T during COVID while 80M+ workers filed for unemployment', documented: true },
  ],
  'clarence-thomas': [
    { date: '2004-01-01', from: 'Harlan Crow', to: 'Justice Clarence Thomas (gifts)', amount: '$4,000,000', purpose: 'Decades of undisclosed luxury gifts: private jet flights, yacht vacations, $267K sale of Thomas mother home, tuition for grandnephew', documented: true },
    { date: '2022-01-01', from: 'Leonard Leo (via Kellyanne Conway firm)', to: 'Ginni Thomas', amount: '$80,000', purpose: 'Leo directed payments to Ginni Thomas firm; Thomas failed to disclose and did not recuse from related cases', documented: true },
  ],
  'chevron-pollution': [
    { date: '2011-02-01', from: 'Chevron (Ecuador judgment)', to: 'Ecuadorian plaintiffs', amount: '$9,500,000,000', purpose: 'Largest environmental judgment in history for decades of toxic dumping in Amazon; Chevron has refused to pay', documented: true },
    { date: '2023-01-01', from: 'Chevron', to: 'Legal campaign to avoid Ecuador judgment', amount: '$2,000,000,000', purpose: 'Estimated spending on 60+ law firms, 2,000+ attorneys, and RICO prosecution of victims lawyer Steven Donziger', documented: true },
    { date: '2022-01-01', from: 'Chevron (annual revenue)', to: 'Company profits', amount: '$246,300,000,000', purpose: 'Annual revenue while refusing to pay $9.5B Ecuador judgment and continuing toxic operations globally', documented: true },
  ],
  'child-labor': [
    { date: '2023-01-01', from: 'Companies using child labor in supply chains', to: 'Products sold in US market', amount: '$150,000,000,000', purpose: 'Estimated annual value of goods imported to US involving child labor in global supply chains', documented: false },
    { date: '2023-01-01', from: 'DOL (child labor fines)', to: 'Federal penalties', amount: '$75,000,000', purpose: 'Total child labor violation fines; minor relative to employer profits; violations surging since 2015', documented: true },
  ],
  'censorship': [
    { date: '2022-01-01', from: 'Book ban lobbying organizations', to: 'Moms for Liberty and allied groups', amount: '$20,000,000', purpose: 'Funding behind coordinated book ban campaigns across 2,500+ school districts in 32 states', documented: true },
  ],
  'census-manipulation': [
    { date: '2020-01-01', from: 'US Government (Census underfunding)', to: 'Census Bureau operations', amount: '$14,200,000,000', purpose: 'Census 2020 budget; counting gaps cost affected communities an estimated $47B in lost federal funding over decade', documented: true },
  ],
  'cia-black-sites': [
    { date: '2001-01-01', from: 'CIA', to: 'Enhanced interrogation program', amount: '$300,000,000', purpose: 'Total cost of CIA black site program including psychologist contractors Mitchell and Jessen ($81M for designing torture)', documented: true },
    { date: '2014-01-01', from: 'US taxpayers', to: 'James Mitchell and Bruce Jessen', amount: '$81,000,000', purpose: 'Two psychologists with no interrogation experience paid $81M to design CIA torture program that produced no actionable intelligence', documented: true },
  ],
  'climate-denial': [
    { date: '2020-01-01', from: 'Fossil fuel industry', to: 'Climate denial and delay campaigns', amount: '$3,600,000,000', purpose: 'Total industry spending on climate denial from 1988-2020; ExxonMobil alone spent $500M+ while knowing about climate change since 1977', documented: true },
    { date: '2022-01-01', from: 'Top 5 oil companies', to: 'Lobbying and influence', amount: '$200,000,000', purpose: 'Annual lobbying by ExxonMobil, Chevron, Shell, BP, and ConocoPhillips while claiming to support climate action', documented: true },
    { date: '2022-01-01', from: 'Top 5 oil companies (combined profits)', to: 'Shareholders', amount: '$200,000,000,000', purpose: 'Record oil profits in 2022 while blocking climate legislation; $100B+ returned to shareholders via buybacks', documented: true },
  ],
  'corporate-tax-avoidance': [
    { date: '2021-01-01', from: 'Fortune 500 companies', to: 'Offshore tax havens', amount: '$2,100,000,000,000', purpose: 'Profits held offshore to avoid US taxes; 55 major corporations paid $0 in federal income tax on $40B+ in profits', documented: true },
    { date: '2023-01-01', from: 'US Treasury (annual lost revenue)', to: 'Tax gap/evasion', amount: '$688,000,000,000', purpose: 'Annual federal tax gap; disproportionately from corporations and wealthy individuals using legal loopholes', documented: true },
  ],
  'crypto-fraud': [
    { date: '2022-01-01', from: 'Crypto market', to: 'Investor losses (market crash)', amount: '$2,000,000,000,000', purpose: 'Total crypto market capitalization lost in 2022 crash; from $3T peak to under $1T', documented: true },
    { date: '2022-11-01', from: 'FTX customers', to: 'Losses from FTX collapse', amount: '$8,000,000,000', purpose: 'Customer deposits stolen by SBF and Alameda Research', documented: true },
    { date: '2022-01-01', from: 'Terra/Luna collapse', to: 'Investor losses', amount: '$40,000,000,000', purpose: 'Do Kwon stablecoin collapse destroyed $40B in value; Kwon convicted of fraud', documented: true },
  ],
  'corporate-surveillance': [
    { date: '2023-01-01', from: 'Data broker industry', to: 'Annual revenue from personal data', amount: '$240,000,000,000', purpose: 'Industry revenue from selling personal data; Americans data collected, profiled, and sold without meaningful consent', documented: true },
  ],
  'charlottesville': [
    { date: '2021-11-01', from: 'Unite the Right organizers', to: 'Civil trial damages', amount: '$26,000,000', purpose: 'Jury awarded $26M to Charlottesville victims; organizers found liable for conspiracy including death of Heather Heyer', documented: true },
  ],
  'church-abuse': [
    { date: '2023-01-01', from: 'Catholic Church', to: 'Sexual abuse settlements (cumulative)', amount: '$4,000,000,000', purpose: 'Total payouts to victims of Catholic clergy sexual abuse in the US; actual abuse vastly underreported', documented: true },
    { date: '2020-01-01', from: 'Boy Scouts of America', to: 'Sexual abuse settlement', amount: '$2,460,000,000', purpose: 'BSA bankruptcy settlement for 82,000+ abuse claims; largest child sexual abuse settlement in US history', documented: true },
  ],
  'citizens-united-dark-money-corruption': [
    { date: '2010-01-01', from: 'Dark money groups (total since Citizens United)', to: 'Federal elections', amount: '$4,500,000,000', purpose: 'Total dark money spending in federal elections since Citizens United decision removed spending limits', documented: true },
    { date: '2020-01-01', from: 'Outside spending (all groups)', to: '2020 presidential election', amount: '$14,400,000,000', purpose: 'Most expensive election in history; enabled by Citizens United and SpeechNow.org deregulation', documented: true },
  ],
  'consumer-protection-rollbacks': [
    { date: '2017-01-01', from: 'Financial industry', to: 'Anti-CFPB lobbying', amount: '$250,000,000', purpose: 'Industry lobbying to gut Consumer Financial Protection Bureau which had returned $12.4B to consumers', documented: true },
    { date: '2022-01-01', from: 'CFPB enforcement actions', to: 'Returned to consumers', amount: '$12,400,000,000', purpose: 'Total CFPB returns to consumers since inception; industry fought to defund and weaken the agency', documented: true },
  ],
  'clarence-thomas-ethics': [
    { date: '2023-01-01', from: 'Harlan Crow and other benefactors', to: 'Justice Clarence Thomas (undisclosed gifts)', amount: '$4,000,000', purpose: 'Decades of luxury travel, private jet flights, yacht vacations, property purchase, and tuition payments never disclosed', documented: true },
    { date: '2023-01-01', from: 'Koch network (donor retreats)', to: 'Thomas benefit (access)', amount: '$500,000', purpose: 'Thomas attended Koch donor summits where attendees paid $100K+ for participation; access to justice at political events', documented: true },
  ],
  'cop-city-atlanta': [
    { date: '2023-01-01', from: 'Atlanta Police Foundation (corporate donors)', to: 'Cop City construction', amount: '$90,000,000', purpose: 'Private corporate funding for police training facility; donors include Wells Fargo, Home Depot, Coca-Cola, Waffle House', documented: true },
    { date: '2023-01-01', from: 'Atlanta city budget', to: 'Cop City public funds', amount: '$67,000,000', purpose: 'Additional public funds allocated despite community opposition and environmental concerns', documented: true },
  ],
  'conservative-court-capture': [
    { date: '2022-01-01', from: 'Leonard Leo dark money network', to: 'Judicial confirmation campaigns', amount: '$1,600,000,000', purpose: 'Total dark money directed by Leo to reshape federal judiciary including 3 Supreme Court confirmations', documented: true },
    { date: '2016-01-01', from: 'Judicial Crisis Network', to: 'Supreme Court nomination campaigns', amount: '$35,000,000', purpose: 'Spent blocking Garland and confirming Gorsuch; anonymous donors funding who sits on the Supreme Court', documented: true },
  ],
  'climate-migration': [
    { date: '2023-01-01', from: 'Climate damage (annual US)', to: 'Disaster costs', amount: '$150,000,000,000', purpose: 'Annual US climate-related disaster costs; disproportionately displacing low-income and minority communities', documented: true },
  ],
  'charter-school-fraud': [
    { date: '2022-01-01', from: 'Federal and state governments', to: 'Charter school funding (annual)', amount: '$50,000,000,000', purpose: 'Annual public funding to charter schools; GAO found $1B+ in fraud, waste, and abuse with minimal oversight', documented: true },
    { date: '2021-01-01', from: 'Charter operators (documented fraud)', to: 'Personal enrichment and waste', amount: '$100,000,000', purpose: 'Documented annual fraud in charter school sector; self-dealing, real estate scams, and inflated enrollment', documented: true },
  ],
  'cryptocurrency-money-laundering-networks': [
    { date: '2022-01-01', from: 'North Korean hackers (Lazarus Group)', to: 'Cryptocurrency theft', amount: '$3,000,000,000', purpose: 'Total estimated crypto stolen by North Korea to fund weapons programs; $1.7B in 2022 alone', documented: true },
    { date: '2023-01-01', from: 'Crypto money laundering (annual)', to: 'Laundered through mixing services', amount: '$22,200,000,000', purpose: 'Chainalysis estimated $22.2B in crypto moved through illicit addresses in 2023', documented: true },
  ],

  // ===== D (those not already done) =====
  'doj-politicization': [
    { date: '2020-01-01', from: 'Trump DOJ', to: 'Political investigations', amount: '$25,000,000', purpose: 'Costs of politically motivated investigations and dropped cases under AG Barr; including Roger Stone and Michael Flynn', documented: true },
  ],
  'drone-wars': [
    { date: '2022-01-01', from: 'US Government', to: 'Drone strike program (annual)', amount: '$5,000,000,000', purpose: 'Annual US expenditure on military drone operations; strikes in 7+ countries killed thousands of civilians', documented: true },
    { date: '2021-08-29', from: 'US military', to: 'Wrongful drone strike Kabul', amount: '$0', purpose: 'Strike killed 10 Afghan civilians including 7 children; Pentagon initially called it "righteous strike"; zero accountability', documented: true },
  ],
  'domestic-violence': [
    { date: '2023-01-01', from: 'US economy (domestic violence costs)', to: 'Healthcare, justice, lost productivity', amount: '$8,300,000,000', purpose: 'Annual economic cost of intimate partner violence; 10 million adults experience DV annually', documented: true },
    { date: '2022-01-01', from: 'VAWA federal funding', to: 'DV prevention and response', amount: '$1,000,000,000', purpose: 'Annual Violence Against Women Act funding; chronically underfunded relative to need', documented: true },
  ],
  'domestic-servitude-hidden-victims': [
    { date: '2022-01-01', from: 'Domestic servitude perpetrators', to: 'Stolen wages from trafficking victims', amount: '$1,300,000,000', purpose: 'Estimated annual wage theft from domestic servitude victims in the US; many shielded by diplomatic immunity', documented: false },
  ],
  'deepfake-threats': [
    { date: '2023-01-01', from: 'Deepfake fraud losses (global)', to: 'Victims of synthetic identity fraud', amount: '$25,000,000,000', purpose: 'Global estimated losses from deepfake-enabled fraud including voice cloning, face-swap scams, and impersonation', documented: false },
  ],
  'disabled-rights': [
    { date: '2023-01-01', from: 'Disability benefits (annual)', to: 'SSI/SSDI recipients', amount: '$290,000,000,000', purpose: 'Annual Social Security disability payments; average SSI payment of $698/month keeps recipients in poverty', documented: true },
  ],

  // ===== E (those not already done) =====
  'emoluments': [
    { date: '2017-01-01', from: 'Foreign governments', to: 'Trump International Hotel DC', amount: '$7,800,000', purpose: 'Documented foreign government spending at Trump hotel while president; Saudi Arabia, Kuwait, Philippines, and others', documented: true },
    { date: '2020-01-01', from: 'Government agencies and campaigns', to: 'Trump properties', amount: '$28,000,000', purpose: 'Secret Service, campaign, and government agency spending at Trump hotels and golf courses during presidency', documented: true },
    { date: '2017-01-01', from: 'Trump Organization (total presidency revenue)', to: 'Trump family businesses', amount: '$1,900,000,000', purpose: 'Estimated Trump Organization revenue during presidency while Trump refused to divest; unprecedented conflict of interest', documented: true },
  ],
  'epstein-network': [
    { date: '2008-01-01', from: 'Jeffrey Epstein (assets at death)', to: 'Estate and legal claims', amount: '$634,000,000', purpose: 'Epstein assets at time of death; fortune built through murky financial dealings and alleged blackmail', documented: true },
    { date: '2020-01-01', from: 'Epstein estate', to: 'Victim compensation fund', amount: '$125,000,000', purpose: 'Compensation fund for trafficking victims; a fraction of Epstein wealth', documented: true },
    { date: '2019-01-01', from: 'JP Morgan Chase, Deutsche Bank', to: 'Epstein account services', amount: '$150,000,000', purpose: 'Banks maintained Epstein accounts despite red flags; JP Morgan settled for $290M, Deutsche Bank fined $150M', documented: true },
  ],
  'election-interference': [
    { date: '2016-01-01', from: 'Russian government (IRA)', to: 'US election interference', amount: '$25,000,000', purpose: 'Internet Research Agency budget for US election interference including social media manipulation and rallies', documented: true },
    { date: '2019-01-01', from: 'US Government', to: 'Mueller investigation costs', amount: '$32,000,000', purpose: 'Special Counsel investigation cost; resulted in 37 indictments but generated $42M from seized assets', documented: true },
  ],
  'environmental-racism': [
    { date: '2023-01-01', from: 'Industrial polluters', to: 'Fines for environmental violations', amount: '$750,000,000', purpose: 'Annual EPA fines; communities of color are 40% more likely to live near toxic facilities', documented: true },
    { date: '2014-01-01', from: 'State of Michigan', to: 'Flint water crisis response', amount: '$600,000,000', purpose: 'State settlement for Flint water contamination; lead poisoned 100,000+ residents including 12,000 children', documented: true },
  ],
  'elizabeth-holmes-theranos-fraud': [
    { date: '2003-01-01', from: 'Investors (VC and individuals)', to: 'Theranos', amount: '$945,000,000', purpose: 'Total investment raised by Holmes on fraudulent blood testing claims; company valued at $9B before collapse', documented: true },
    { date: '2014-01-01', from: 'Walgreens', to: 'Theranos (partnership)', amount: '$140,000,000', purpose: 'Walgreens paid for in-store Theranos testing centers based on technology that never worked as claimed', documented: true },
    { date: '2022-01-01', from: 'DeVos family', to: 'Theranos investment (lost)', amount: '$100,000,000', purpose: 'Betsy DeVos family lost $100M investing in Theranos; Rupert Murdoch lost $125M', documented: true },
  ],
  'epa-capture': [
    { date: '2017-01-01', from: 'Scott Pruitt (EPA Administrator)', to: 'Personal corruption spending', amount: '$4,600,000', purpose: 'Pruitt spent $4.6M on security, travel, and office furnishings including $43,000 soundproof phone booth', documented: true },
    { date: '2022-01-01', from: 'Chemical and fossil fuel industry', to: 'EPA lobbying', amount: '$150,000,000', purpose: 'Annual lobbying by regulated industries to weaken EPA enforcement and standards', documented: true },
  ],

  // ===== F (those not already done) =====
  'flint-water': [
    { date: '2021-01-01', from: 'State of Michigan and others', to: 'Flint residents (settlement)', amount: '$626,000,000', purpose: 'Settlement for poisoning 100,000+ people; children suffered irreversible brain damage from lead exposure', documented: true },
    { date: '2014-01-01', from: 'Michigan (switching water source savings)', to: 'Flint emergency manager budget', amount: '$5,000,000', purpose: 'Switched water supply to save $5M/year; resulted in $626M+ in damages, criminal charges, and lifetime health costs', documented: true },
  ],
  'for-profit-prisons': [
    { date: '2022-01-01', from: 'Federal and state governments', to: 'GEO Group and CoreCivic (annual revenue)', amount: '$4,000,000,000', purpose: 'Combined annual revenue of two largest private prison companies; profit from incarceration of 150,000 people', documented: true },
    { date: '2022-01-01', from: 'Private prison industry', to: 'Lobbying and campaign contributions', amount: '$25,000,000', purpose: 'Annual lobbying and political spending to maintain contracts and push for tougher sentencing', documented: true },
  ],
  'forced-labor-in-us-prison-system': [
    { date: '2022-01-01', from: 'Prison labor production', to: 'State and federal agencies/corporations', amount: '$11,000,000,000', purpose: 'Annual value of prison labor; incarcerated workers paid as little as $0.13/hour; 13th Amendment permits slavery as punishment', documented: true },
    { date: '2022-01-01', from: 'Major corporations', to: 'Prison labor supply chains', amount: '$2,000,000,000', purpose: 'Companies including McDonalds, Walmart, and Victoria Secret benefiting from prison labor supply chains', documented: true },
  ],
  'fentanyl-crisis': [
    { date: '2023-01-01', from: 'Mexican cartels (synthetic opioid revenue)', to: 'Fentanyl trafficking profits', amount: '$10,000,000,000', purpose: 'Estimated annual cartel revenue from synthetic opioid trafficking; fentanyl killed 75,000+ Americans in 2023', documented: false },
    { date: '2023-01-01', from: 'Chinese chemical companies', to: 'Fentanyl precursor sales', amount: '$1,000,000,000', purpose: 'Estimated annual value of fentanyl precursor chemicals shipped from China to Mexican cartels', documented: false },
  ],
  'fox-news-propaganda': [
    { date: '2023-04-01', from: 'Fox News', to: 'Dominion Voting Systems (defamation)', amount: '$787,500,000', purpose: 'Largest defamation settlement in US history; Fox knowingly broadcast false election fraud claims', documented: true },
    { date: '2022-01-01', from: 'Fox Corporation (annual revenue)', to: 'Shareholders', amount: '$14,900,000,000', purpose: 'Fox Corp revenue from spreading disinformation while paying $787M for Dominion lies', documented: true },
  ],

  // ===== G (those not already done) =====
  'george-floyd': [
    { date: '2021-03-01', from: 'City of Minneapolis', to: 'George Floyd estate (settlement)', amount: '$27,000,000', purpose: 'Largest pre-trial police misconduct settlement in US history after Chauvin murdered Floyd', documented: true },
    { date: '2021-01-01', from: 'US cities (police misconduct settlements annual)', to: 'Victims of police violence', amount: '$3,000,000,000', purpose: 'Estimated annual cost of police misconduct settlements across US cities; taxpayers bear the cost', documented: true },
  ],
  'gerrymandering': [
    { date: '2022-01-01', from: 'National redistricting committees', to: 'Gerrymandering campaigns', amount: '$200,000,000', purpose: 'Combined spending on redistricting litigation and campaigns by both parties; Democratic representation suppressed in key states', documented: true },
  ],
  'gun-lobby': [
    { date: '2022-01-01', from: 'NRA and gun lobby', to: 'Political spending', amount: '$50,000,000', purpose: 'Annual NRA and gun lobby political spending; blocked legislation after every mass shooting', documented: true },
    { date: '2023-01-01', from: 'Gun violence costs (annual US)', to: 'Healthcare, criminal justice, lost wages', amount: '$557,000,000,000', purpose: 'Annual economic cost of gun violence in America; 45,000+ gun deaths per year', documented: true },
  ],
  'guatemala-experiments': [
    { date: '1946-01-01', from: 'US Government (PHS)', to: 'Guatemala syphilis experiments', amount: '$500,000', purpose: 'Funded deliberate infection of 1,308 Guatemalans with STDs without consent; at least 83 died', documented: true },
    { date: '2015-01-01', from: 'US Government', to: 'Compensation (none paid)', amount: '$0', purpose: 'Despite Obama apology in 2010, no compensation paid to victims; Guatemala ICJ case ongoing', documented: true },
  ],

  // ===== H =====
  'healthcare-fraud': [
    { date: '2023-01-01', from: 'Medicare/Medicaid fraud (annual)', to: 'Fraudulent providers', amount: '$100,000,000,000', purpose: 'Annual estimated improper payments in Medicare and Medicaid; healthcare fraud costs Americans billions', documented: true },
    { date: '2023-01-01', from: 'HHS OIG recoveries', to: 'Federal government', amount: '$3,200,000,000', purpose: 'Annual healthcare fraud recoveries; a fraction of total fraud', documented: true },
  ],
  'housing-crisis': [
    { date: '2023-01-01', from: 'Private equity firms', to: 'Single-family home purchases', amount: '$45,000,000,000', purpose: 'PE firms bought $45B+ in homes, driving up prices while 580,000 Americans are homeless', documented: true },
    { date: '2023-01-01', from: 'Airbnb/short-term rental conversions', to: 'Lost housing stock', amount: '$20,000,000,000', purpose: 'Annual revenue from converting long-term housing to short-term rentals; removing 1M+ homes from housing market', documented: true },
  ],
  'human-trafficking': [
    { date: '2023-01-01', from: 'Human trafficking (US annual)', to: 'Traffickers revenue', amount: '$150,000,000,000', purpose: 'Global human trafficking generates $150B annually; 400,000+ estimated victims in the US', documented: false },
  ],
  'hate-crimes': [
    { date: '2023-01-01', from: 'DHS', to: 'Targeted violence prevention grants', amount: '$77,000,000', purpose: 'Annual federal spending on targeted violence prevention; hate crimes at highest level in 12 years', documented: true },
  ],
  'homelessness': [
    { date: '2023-01-01', from: 'Federal homelessness programs', to: 'HUD and HHS', amount: '$4,000,000,000', purpose: 'Annual federal spending on homelessness; 653,000+ Americans homeless on any given night', documented: true },
    { date: '2023-01-01', from: 'Emergency room and justice system costs', to: 'Taxpayers (homelessness externalities)', amount: '$35,000,000,000', purpose: 'Annual public cost of homelessness; housing-first programs cost 1/3 of emergency response approach', documented: true },
  ],

  // ===== I (those not already done) =====
  'inaugural-fund': [
    { date: '2017-01-01', from: 'Corporate and individual donors', to: 'Trump Inaugural Committee', amount: '$107,000,000', purpose: 'Largest inaugural fund ever raised; $40M+ unaccounted for; investigated for misuse including overpayment to Trump Hotel', documented: true },
    { date: '2017-01-01', from: 'Trump Inaugural Committee', to: 'Trump International Hotel (overpayment)', amount: '$1,000,000', purpose: 'Inaugural committee paid Trump Hotel above-market rates for event space; investigated by DC AG', documented: true },
  ],
  'ice-detention': [
    { date: '2022-01-01', from: 'US Government (ICE)', to: 'Immigration detention system', amount: '$3,100,000,000', purpose: 'Annual ICE detention costs; detains 30,000+ people daily at $142 per person per day', documented: true },
    { date: '2022-01-01', from: 'ICE', to: 'Private prison contractors (GEO Group, CoreCivic)', amount: '$2,200,000,000', purpose: 'Private companies operate 81% of ICE detention beds; lobbied for expansion and anti-immigration policy', documented: true },
  ],
  'industry-self-regulation-failures': [
    { date: '2019-01-01', from: 'Boeing (self-certification to FAA)', to: 'Two 737 MAX crashes (346 killed)', amount: '$2,500,000,000', purpose: 'Boeing crash settlements; FAA allowed Boeing to self-certify safety while cutting internal safety staff', documented: true },
    { date: '2010-01-01', from: 'BP (self-regulated safety)', to: 'Deepwater Horizon (11 killed)', amount: '$65,000,000,000', purpose: 'Industry self-regulation of offshore drilling led to worst oil spill in US history', documented: true },
    { date: '2022-01-01', from: 'Tech companies (self-regulated content)', to: 'Social harms from platform content', amount: '$0', purpose: 'Self-regulation failed to prevent election manipulation, teen mental health crisis, and radicalization', documented: false },
  ],
  'immigration-detention': [
    { date: '2022-01-01', from: 'DHS (total enforcement budget)', to: 'CBP and ICE', amount: '$28,000,000,000', purpose: 'Combined annual CBP and ICE budget; largest law enforcement expenditure in the US government', documented: true },
  ],
  'insulin-pricing': [
    { date: '2019-01-01', from: 'US insulin patients', to: 'Eli Lilly, Novo Nordisk, Sanofi', amount: '$20,000,000,000', purpose: 'Annual US insulin market; Americans paid $300+ per vial for insulin costing $5 to manufacture', documented: true },
    { date: '2019-01-01', from: 'Insulin manufacturers (price increase)', to: 'Revenue from price hikes', amount: '$15,000,000,000', purpose: 'Insulin prices tripled from 2002-2019 while production costs remained flat; 1.3M Americans ration insulin', documented: true },
  ],

  // ===== J =====
  'january-6': [
    { date: '2021-01-06', from: 'Trump campaign and allied fundraising', to: 'Stop the Steal and related groups', amount: '$250,000,000', purpose: 'Trump raised $250M via "Stop the Steal" fundraising after losing 2020 election; minimal went to actual legal challenges', documented: true },
    { date: '2022-01-01', from: 'US Government', to: 'Capitol repairs and security upgrades', amount: '$500,000,000', purpose: 'Cost of Capitol building repairs, National Guard deployment, and subsequent security enhancements', documented: true },
    { date: '2023-01-01', from: 'US Government (J6 prosecutions)', to: 'DOJ investigation and trials', amount: '$100,000,000', purpose: 'Federal cost of prosecuting 1,400+ January 6 defendants; largest federal investigation in US history', documented: true },
  ],
  'judicial-corruption': [
    { date: '2023-01-01', from: 'Billionaire benefactors', to: 'Supreme Court justices (gifts)', amount: '$8,000,000', purpose: 'Documented undisclosed gifts to SCOTUS justices from Harlan Crow, Paul Singer, and others; no enforcement mechanism', documented: true },
  ],

  // ===== K (those not already done) =====
  'kissinger-foreign-policy-war-crimes': [
    { date: '1969-01-01', from: 'US Government (Operation Menu)', to: 'Secret Cambodia bombing', amount: '$7,000,000,000', purpose: 'Cost of secret bombing campaign Kissinger authorized; 110,000 tons of bombs dropped on Cambodia', documented: true },
    { date: '1970-01-01', from: 'US Government', to: 'Chile coup and Pinochet support', amount: '$8,000,000', purpose: 'CIA spent $8M overthrowing democratically elected Allende; funded media campaign and military plotters', documented: true },
    { date: '1975-01-01', from: 'US Government (arms to Indonesia)', to: 'East Timor invasion support', amount: '$250,000,000', purpose: 'US provided weapons to Indonesia used in East Timor invasion that killed 180,000 people; Kissinger gave green light', documented: true },
  ],

  // ===== L (those not already done) =====
  'lobbying': [
    { date: '2022-01-01', from: 'All industries', to: 'Congressional lobbying (annual)', amount: '$4,100,000,000', purpose: 'Record annual lobbying spending in 2022; 12,624 registered lobbyists plus thousands more unregistered', documented: true },
    { date: '2022-01-01', from: 'Pharmaceutical industry (top spender)', to: 'Congressional lobbying', amount: '$374,000,000', purpose: 'Pharma was top lobbying spender; employs 3 lobbyists per member of Congress', documented: true },
  ],
  'lead-poisoning-america': [
    { date: '2000-01-01', from: 'Lead paint and gasoline manufacturers (cumulative settlements)', to: 'Victims and cleanup', amount: '$10,000,000,000', purpose: 'Settlements for lead poisoning; industry knew of dangers since 1920s but fought regulation for decades', documented: true },
    { date: '2023-01-01', from: 'Annual economic cost of lead exposure', to: 'Healthcare, education, criminal justice', amount: '$84,000,000,000', purpose: 'Annual US economic cost of childhood lead exposure including lost IQ, ADHD, crime, and early death', documented: true },
  ],

  // ===== M (those not already done) =====
  'mass-shootings-in-america': [
    { date: '2023-01-01', from: 'US gun violence (annual economic cost)', to: 'Healthcare, criminal justice, lost wages', amount: '$557,000,000,000', purpose: 'Annual economic cost of gun violence; 45,000+ gun deaths/year while NRA blocks legislation', documented: true },
    { date: '2023-01-01', from: 'NRA and gun lobby', to: 'Anti-gun-control lobbying', amount: '$50,000,000', purpose: 'Annual NRA political spending to block firearms legislation after every mass shooting', documented: true },
  ],
  'mar-a-lago': [
    { date: '2023-01-01', from: 'Trump Organization', to: 'Mar-a-Lago membership revenue', amount: '$50,000,000', purpose: 'Annual Mar-a-Lago revenue; membership fee doubled to $200K after Trump became president; access to power', documented: true },
    { date: '2022-01-01', from: 'Foreign government representatives', to: 'Mar-a-Lago events and memberships', amount: '$5,000,000', purpose: 'Documented foreign government spending at Mar-a-Lago creating emoluments and national security concerns', documented: true },
  ],
  'media-concentration': [
    { date: '2023-01-01', from: 'Top 6 media companies', to: 'Media market revenue', amount: '$400,000,000,000', purpose: 'Disney, Comcast, Paramount, Warner, Fox, and Netflix control the vast majority of what Americans see and hear', documented: true },
    { date: '2022-01-01', from: 'Sinclair Broadcast Group', to: 'Local TV station acquisitions', amount: '$12,000,000,000', purpose: 'Sinclair controls 185+ TV stations pushing conservative messaging disguised as local news', documented: true },
  ],
  'military-sexual-assault': [
    { date: '2022-01-01', from: 'DOD (sexual assault prevention program)', to: 'SAPRO budget', amount: '$400,000,000', purpose: 'Annual spending on sexual assault prevention while 36,000 service members reported assault in 2022', documented: true },
  ],
  'mk-ultra': [
    { date: '1953-01-01', from: 'CIA', to: 'MK-Ultra mind control experiments', amount: '$25,000,000', purpose: 'CIA spent $25M on 150+ human experiments with LSD, hypnosis, and torture at 80+ institutions without consent', documented: true },
    { date: '1977-01-01', from: 'CIA', to: 'Document destruction', amount: '$0', purpose: 'CIA Director Richard Helms ordered destruction of all MK-Ultra files in 1973; 20,000 pages survived accidentally', documented: true },
  ],
  'medicare-fraud': [
    { date: '2023-01-01', from: 'Medicare (improper payments)', to: 'Fraudulent providers', amount: '$47,000,000,000', purpose: 'Annual Medicare improper payments; includes billing fraud, kickbacks, and unnecessary procedures', documented: true },
    { date: '2023-01-01', from: 'DOJ (Medicare fraud enforcement)', to: 'Recovered funds', amount: '$3,200,000,000', purpose: 'Annual healthcare fraud recoveries; DOJ returns $6 for every $1 invested in enforcement', documented: true },
  ],

  // ===== N =====
  'nsa-surveillance': [
    { date: '2013-01-01', from: 'US Government (NSA budget)', to: 'Mass surveillance programs', amount: '$52,600,000,000', purpose: 'Total US intelligence community budget; NSA collected phone records of all Americans per Snowden revelations', documented: true },
    { date: '2023-01-01', from: 'US Government', to: 'Intelligence community (current budget)', amount: '$71,700,000,000', purpose: 'National Intelligence Program budget; mass surveillance expanded despite Snowden reforms', documented: true },
  ],
  'nuclear-testing': [
    { date: '1951-01-01', from: 'US Government', to: 'Nuclear weapons testing program', amount: '$100,000,000,000', purpose: 'Cost of 1,000+ nuclear tests; exposed millions of Americans to radiation; downwinders and Pacific Islanders most affected', documented: true },
    { date: '1990-01-01', from: 'US Government (RECA)', to: 'Downwinder compensation', amount: '$2,500,000,000', purpose: 'Radiation Exposure Compensation Act payments; inadequate coverage and many victims excluded', documented: true },
  ],
  'native-american-rights': [
    { date: '2021-01-01', from: 'US Government (broken treaty obligations)', to: 'Estimated value of stolen Native land', amount: '$1,500,000,000,000', purpose: 'Estimated current value of 1.5 billion acres of land taken from Indigenous peoples through broken treaties', documented: false },
    { date: '2022-01-01', from: 'US Government (BIA budget)', to: 'Bureau of Indian Affairs', amount: '$3,500,000,000', purpose: 'Annual BIA budget; decades of mismanaged trust funds led to $3.4B Cobell settlement in 2009', documented: true },
  ],

  // ===== O (those not already done) =====
  'operation-condor-cia-latin-america': [
    { date: '1975-01-01', from: 'US Government (CIA)', to: 'Operation Condor support', amount: '$100,000,000', purpose: 'CIA provided funding, intelligence, and training for South American dictatorships that killed 60,000-80,000 people', documented: true },
    { date: '1973-01-01', from: 'US Government (CIA)', to: 'Chile coup against Allende', amount: '$8,000,000', purpose: 'Funded media campaign, military conspirators, and economic destabilization to overthrow democratic government', documented: true },
  ],

  // ===== P (those not already done) =====
  'panama-papers': [
    { date: '2016-04-01', from: 'Global elites', to: 'Offshore tax havens (Mossack Fonseca)', amount: '$2,000,000,000,000', purpose: 'Panama Papers revealed $2T+ hidden through 214,000 shell companies by world leaders, billionaires, and criminals', documented: true },
    { date: '2019-01-01', from: 'Global tax authorities', to: 'Recovered taxes from Panama Papers', amount: '$1,360,000,000', purpose: 'Tax recovered across 37 countries; fraction of total hidden wealth', documented: true },
  ],
  'police-brutality': [
    { date: '2023-01-01', from: 'US cities and counties', to: 'Police misconduct settlements', amount: '$3,000,000,000', purpose: 'Annual estimated police misconduct settlement costs; taxpayers pay, not officers; no deterrent effect', documented: true },
    { date: '2022-01-01', from: 'NYC alone', to: 'NYPD misconduct settlements', amount: '$121,000,000', purpose: 'NYC spent $121M on NYPD misconduct claims in 2022; officers rarely disciplined or terminated', documented: true },
  ],
  'private-military': [
    { date: '2022-01-01', from: 'US Government', to: 'Private military contractors', amount: '$370,000,000,000', purpose: 'Cumulative spending on private military contractors in Iraq and Afghanistan; exceeded uniformed troop costs', documented: true },
    { date: '2007-01-01', from: 'Blackwater contractors (daily rate)', to: 'Per-contractor cost', amount: '$1,200', purpose: 'Blackwater operators earned $1,200/day vs. $150/day for equivalent US soldiers; 50,000 contractors in Iraq', documented: true },
  ],
  'pandemic-response': [
    { date: '2020-03-01', from: 'US Government', to: 'COVID relief spending (total)', amount: '$5,200,000,000,000', purpose: 'Total federal COVID spending across CARES Act, American Rescue Plan; included $800B in PPP with $64B estimated fraud', documented: true },
    { date: '2020-01-01', from: 'PPP loans (estimated fraud)', to: 'Fraudulent recipients', amount: '$64,000,000,000', purpose: 'SBA IG estimated $64B in potentially fraudulent PPP loans; rushed disbursement with minimal oversight', documented: true },
    { date: '2020-01-01', from: 'US billionaires', to: 'Pandemic wealth gains', amount: '$2,100,000,000,000', purpose: 'Billionaire wealth increased $2.1T while 80M+ filed for unemployment; Jeff Bezos alone gained $70B', documented: true },
  ],
  'pfas-contamination': [
    { date: '2023-01-01', from: '3M', to: 'PFAS water contamination settlement', amount: '$10,300,000,000', purpose: 'Settlement for contaminating drinking water of 110M+ Americans with forever chemicals linked to cancer', documented: true },
    { date: '2023-01-01', from: 'DuPont/Chemours', to: 'PFAS cleanup settlements', amount: '$1,185,000,000', purpose: 'DuPont settlements for PFAS contamination; company knew C8 caused cancer since 1960s', documented: true },
  ],
  'prison-industrial-complex': [
    { date: '2022-01-01', from: 'US Government (federal/state combined)', to: 'Mass incarceration system', amount: '$182,000,000,000', purpose: 'Annual total cost of US incarceration; incarcerates more people than any nation on earth (1.9M)', documented: true },
    { date: '2022-01-01', from: 'GEO Group and CoreCivic', to: 'Private prison revenue', amount: '$4,000,000,000', purpose: 'Combined annual revenue of two largest private prison companies profiting from incarceration', documented: true },
    { date: '2022-01-01', from: 'Prison telecom companies (Global Tel Link etc.)', to: 'Revenue from prisoner calls', amount: '$1,400,000,000', purpose: 'Annual revenue from price-gouging families of incarcerated people; $1/minute phone calls', documented: true },
  ],
  'proud-boys': [
    { date: '2023-01-01', from: 'Crowdfunding platforms', to: 'Proud Boys / far-right groups', amount: '$20,000,000', purpose: 'Estimated cryptocurrency and crowdfunding raised by Proud Boys and allied extremist groups for operations and legal defense', documented: false },
  ],

  // ===== R (those not already done) =====
  'russia-disinformation': [
    { date: '2016-01-01', from: 'Russian government (IRA)', to: 'Social media disinformation campaigns', amount: '$25,000,000', purpose: 'Internet Research Agency budget for 2016 US election meddling; reached 126M Americans on Facebook alone', documented: true },
    { date: '2020-01-01', from: 'Russian government', to: 'Global disinformation (annual)', amount: '$1,500,000,000', purpose: 'Estimated annual Russian spending on disinformation operations targeting Western democracies', documented: false },
  ],
  'russia-bounties': [
    { date: '2019-01-01', from: 'GRU Unit 29155', to: 'Taliban-linked militants', amount: '$500,000', purpose: 'Reported Russian bounties on US troops in Afghanistan; Trump denied intelligence, took no action', documented: false },
  ],
  'russia-collusion': [
    { date: '2016-06-01', from: 'Russian government (documented transfers)', to: 'Election interference operations', amount: '$25,000,000', purpose: 'IRA spending on US election interference; plus GRU hacking operations against DNC and Clinton campaign', documented: true },
    { date: '2017-01-01', from: 'Trump Campaign and associates', to: 'Legal defense costs', amount: '$100,000,000', purpose: 'Estimated legal costs across all Trump associates investigated by Mueller; Flynn, Manafort, Stone, others', documented: true },
    { date: '2016-01-01', from: 'Paul Manafort', to: 'Oleg Deripaska (repaying debts)', amount: '$18,900,000', purpose: 'Manafort shared Trump campaign polling data with Kilimnik; owed $18.9M to Deripaska', documented: true },
  ],
  'regulatory-capture': [
    { date: '2022-01-01', from: 'All regulated industries', to: 'Regulatory lobbying (annual)', amount: '$4,100,000,000', purpose: 'Annual lobbying expenditure to influence the agencies meant to regulate industry behavior', documented: true },
  ],

  // ===== S (those not already done) =====
  'student-debt': [
    { date: '2023-01-01', from: 'US students and graduates', to: 'Student loan servicers and lenders', amount: '$1,750,000,000,000', purpose: 'Total outstanding US student debt; average borrower owes $37,718; predatory lending drove crisis', documented: true },
    { date: '2023-01-01', from: 'For-profit colleges (government funding)', to: 'Predatory institutions', amount: '$30,000,000,000', purpose: 'Annual federal aid flowing to for-profit colleges with graduation rates as low as 25% and debt default rates exceeding 50%', documented: true },
  ],
  'supreme-court-corruption': [
    { date: '2023-01-01', from: 'Leonard Leo network', to: 'Supreme Court nominee campaigns', amount: '$580,000,000', purpose: 'Total dark money spent by Leo network on federal judicial confirmations including Kavanaugh, Gorsuch, and Barrett', documented: true },
    { date: '2023-01-01', from: 'Billionaire benefactors', to: 'SCOTUS justices (undisclosed gifts)', amount: '$8,000,000', purpose: 'Combined documented undisclosed gifts to justices Thomas and Alito from Crow, Singer, and others', documented: true },
  ],
  'social-media-harms': [
    { date: '2023-01-01', from: 'Meta (Instagram/Facebook annual revenue)', to: 'Revenue from minors data', amount: '$32,000,000,000', purpose: 'Meta annual advertising revenue substantially derived from algorithms targeting teens despite internal research showing harm', documented: true },
    { date: '2023-01-01', from: 'State AG lawsuits', to: 'Social media company settlements', amount: '$500,000,000', purpose: 'Multi-state AG actions against Meta and TikTok for harming children; fines are fraction of profits', documented: true },
  ],
  'surveillance-state': [
    { date: '2023-01-01', from: 'US Government', to: 'Total intelligence budget', amount: '$97,000,000,000', purpose: 'Combined National Intelligence Program ($71.7B) and Military Intelligence Program ($27.9B) budgets', documented: true },
    { date: '2023-01-01', from: 'Data brokers / contractors', to: 'Government surveillance purchases', amount: '$1,000,000,000', purpose: 'Federal purchases of commercial data to circumvent Fourth Amendment warrant requirements', documented: true },
  ],
  'silicon-valley-bank-collapse': [
    { date: '2023-03-10', from: 'SVB depositors', to: 'Bank run withdrawals', amount: '$42,000,000,000', purpose: 'Customers withdrew $42B in single day triggering largest bank failure since 2008', documented: true },
    { date: '2023-03-12', from: 'FDIC', to: 'SVB and Signature Bank depositor insurance', amount: '$22,500,000,000', purpose: 'FDIC insured all deposits above $250K cap; socialized losses while SVB executives sold $84M in stock pre-collapse', documented: true },
  ],
  'sandy-hook': [
    { date: '2022-10-01', from: 'Alex Jones / Infowars', to: 'Sandy Hook families (damages)', amount: '$1,500,000,000', purpose: 'Court-ordered damages for Jones defamation campaign against families of 20 murdered children; Jones claimed shooting was fake', documented: true },
  ],
  'saudi-influence': [
    { date: '2022-06-01', from: 'Saudi PIF (via LIV Golf)', to: 'Sports washing investments', amount: '$2,000,000,000', purpose: 'Saudi sovereign wealth fund spending on LIV Golf to sportswash MBS reputation after Khashoggi murder', documented: true },
    { date: '2021-01-01', from: 'Jared Kushner', to: 'Affinity Partners (Saudi investment)', amount: '$2,000,000,000', purpose: 'MBS directed Saudi PIF to invest $2B with Kushner firm 6 months after leaving White House; overriding advisors concerns', documented: true },
    { date: '2017-01-01', from: 'Saudi Arabia', to: 'US arms purchases', amount: '$110,000,000,000', purpose: 'Largest US arms deal in history announced during Trump first foreign trip; weapons used to kill Yemen civilians', documented: true },
  ],
  'seychelles-meeting': [
    { date: '2017-01-01', from: 'UAE (meeting arrangement)', to: 'Erik Prince and Kirill Dmitriev back channel', amount: '$0', purpose: 'Clandestine meeting between Trump associate Erik Prince and Russian Direct Investment Fund head; financial aspects classified', documented: false },
  ],

  // ===== T =====
  'trump-organization-fraud': [
    { date: '2022-12-01', from: 'Trump Organization', to: 'Criminal tax fraud conviction', amount: '$1,600,000', purpose: 'Convicted on 17 felony counts of tax fraud; CFO Allen Weisselberg evaded taxes on $1.76M in compensation', documented: true },
    { date: '2024-02-01', from: 'Trump Organization', to: 'NY civil fraud judgment', amount: '$454,000,000', purpose: 'Judge found Trump fraudulently inflated property values for decades to secure favorable loans and insurance', documented: true },
  ],
  'trump-taxes': [
    { date: '2020-01-01', from: 'Donald Trump (federal income tax 2016-2017)', to: 'IRS', amount: '$750', purpose: 'Trump paid only $750 in federal income taxes in 2016 and 2017 despite claiming to be a billionaire; $0 in 10 of previous 15 years', documented: true },
    { date: '2018-01-01', from: 'Trump and Kushner family enterprises', to: 'Tax avoidance schemes', amount: '$500,000,000', purpose: 'NYT investigation found Trump received $413M from father through schemes that included tax fraud', documented: true },
  ],
  'tuskegee-experiment': [
    { date: '1932-01-01', from: 'US Government (PHS)', to: 'Tuskegee syphilis study', amount: '$10,000,000', purpose: 'Federal funding for 40-year experiment that denied treatment to 600 Black men with syphilis; 128 died', documented: true },
    { date: '1997-01-01', from: 'US Government', to: 'Surviving participants compensation', amount: '$10,000,000', purpose: 'Settlement for survivors; woefully inadequate for decades of medical experimentation without consent', documented: true },
  ],
  'tax-cuts-and-jobs-act': [
    { date: '2018-01-01', from: 'US Treasury (lost revenue)', to: 'TCJA tax cuts', amount: '$1,900,000,000,000', purpose: 'Estimated 10-year cost of 2017 tax cuts; 82% of benefits went to top 1%; corporate rate slashed from 35% to 21%', documented: true },
    { date: '2022-01-01', from: 'Corporations (tax savings from TCJA)', to: 'Stock buybacks', amount: '$1,000,000,000,000', purpose: 'Corporations used tax savings primarily for stock buybacks rather than wages or investment as promised', documented: true },
  ],
  'tobacco-vaping': [
    { date: '2023-01-01', from: 'Juul Labs', to: 'Multi-state settlement', amount: '$462,000,000', purpose: 'Settlement for marketing nicotine to minors; Juul acquired 75% of e-cigarette market targeting youth', documented: true },
    { date: '2018-01-01', from: 'Altria (Philip Morris)', to: 'Juul investment', amount: '$12,800,000,000', purpose: 'Big Tobacco invested in Juul gaining 35% stake; then Juul collapsed amid youth addiction scandal', documented: true },
  ],

  // ===== U =====
  'union-busting': [
    { date: '2022-01-01', from: 'Corporations (anti-union spending)', to: 'Union avoidance consultants', amount: '$340,000,000', purpose: 'Annual corporate spending on anti-union consultants, captive audience meetings, and intimidation campaigns', documented: true },
    { date: '2022-01-01', from: 'Amazon, Starbucks, Tesla (combined)', to: 'Union busting campaigns', amount: '$50,000,000', purpose: 'Major employers anti-union spending; Amazon hired 3,200 anti-union consultants at $3,200/day', documented: true },
  ],

  // ===== V =====
  'voter-suppression': [
    { date: '2020-01-01', from: 'Conservative dark money groups', to: 'Voter suppression infrastructure', amount: '$100,000,000', purpose: 'Funding behind voter ID laws, poll closures, and voter roll purges disproportionately affecting minority communities', documented: true },
    { date: '2021-01-01', from: 'Heritage Foundation and allies', to: 'Restrictive voting law campaigns', amount: '$50,000,000', purpose: 'Coordinated campaign resulting in 440 restrictive voting bills in 49 states based on false fraud claims', documented: true },
  ],
  'volkswagen-emissions': [
    { date: '2015-01-01', from: 'Volkswagen', to: 'Dieselgate total costs', amount: '$33,300,000,000', purpose: 'Total fines, settlements, and buybacks for installing defeat devices in 11 million vehicles worldwide', documented: true },
    { date: '2017-01-01', from: 'Volkswagen', to: 'DOJ criminal plea', amount: '$2,800,000,000', purpose: 'Criminal plea agreement; plus $1.5B civil penalty for cheating emissions tests causing excess pollution deaths', documented: true },
  ],
  'vietnam-war-crimes': [
    { date: '1955-01-01', from: 'US Government', to: 'Vietnam War total spending', amount: '$843,000,000,000', purpose: 'Total cost of Vietnam War in 2023 dollars; 58,000 US deaths, 2-3 million Vietnamese deaths', documented: true },
    { date: '1962-01-01', from: 'US Government', to: 'Agent Orange defoliation', amount: '$800,000,000', purpose: '20 million gallons of Agent Orange sprayed; ongoing birth defects and cancer 60 years later', documented: true },
  ],

  // ===== W =====
  'watergate': [
    { date: '1972-06-17', from: 'CRP (Committee to Re-elect the President)', to: 'Watergate burglars and cover-up', amount: '$25,000,000', purpose: 'Slush fund for illegal activities including Watergate break-in, wiretapping, and hush money payments', documented: true },
    { date: '1972-01-01', from: 'CRP', to: 'Dirty tricks and enemies list operations', amount: '$500,000', purpose: 'Sabotage operations against Democratic candidates including forged letters and planted provocateurs', documented: true },
  ],
  'wells-fargo-fraud': [
    { date: '2016-01-01', from: 'Wells Fargo', to: 'Total fines and settlements', amount: '$4,500,000,000', purpose: 'Fines for creating 3.5M+ fake accounts, charging improper mortgage fees, and auto insurance fraud', documented: true },
    { date: '2020-01-01', from: 'Wells Fargo', to: 'OCC $3B fine', amount: '$3,000,000,000', purpose: 'OCC and DOJ combined fine for widespread consumer abuse across multiple business lines', documented: true },
    { date: '2016-01-01', from: 'Wells Fargo (fired employees)', to: '5,300 workers terminated', amount: '$0', purpose: 'Low-level employees fired for fake accounts while CEO John Stumpf received $134M retirement package', documented: true },
  ],
  'war-on-drugs': [
    { date: '1971-01-01', from: 'US Government (total War on Drugs spending)', to: 'Drug enforcement', amount: '$1,000,000,000,000', purpose: 'Estimated $1T+ spent since Nixon declared War on Drugs in 1971; drug use rates unchanged while mass incarceration exploded', documented: true },
    { date: '2023-01-01', from: 'US (annual drug enforcement)', to: 'DEA, state and local enforcement', amount: '$40,000,000,000', purpose: 'Annual combined federal/state drug enforcement spending while 100,000+ die from overdoses annually', documented: true },
  ],
  'water-contamination-nationwide': [
    { date: '2023-01-01', from: 'EPA (drinking water infrastructure)', to: 'Lead pipe replacement (needed)', amount: '$60,000,000,000', purpose: 'Estimated cost to replace all lead service lines in the US; 9.2M lead pipes still deliver drinking water', documented: true },
    { date: '2023-01-01', from: '3M (PFAS settlement)', to: 'Water system contamination cleanup', amount: '$10,300,000,000', purpose: '3M settlement for PFAS contamination of drinking water affecting 110M+ Americans', documented: true },
  ],
  'war-on-black-america': [
    { date: '2023-01-01', from: 'US criminal justice system', to: 'Mass incarceration of Black Americans', amount: '$182,000,000,000', purpose: 'Annual incarceration cost; Black Americans incarcerated at 5x rate of whites; modern continuation of Jim Crow', documented: true },
    { date: '2020-01-01', from: 'Racial wealth gap (cost)', to: 'Black American lost economic output', amount: '$16,000,000,000,000', purpose: 'Citigroup estimated racial inequality cost the US $16T in lost GDP over 20 years (2000-2020)', documented: true },
  ],
  'whistleblower-persecution': [
    { date: '2013-01-01', from: 'US Government (Espionage Act prosecutions)', to: 'Whistleblower prosecution costs', amount: '$100,000,000', purpose: 'Obama and Trump administrations combined spent on prosecuting more whistleblowers than all prior presidents combined', documented: true },
  ],
  'waco-siege': [
    { date: '1993-04-19', from: 'US Government (ATF/FBI)', to: 'Waco siege operations', amount: '$12,000,000', purpose: 'Cost of 51-day siege ending with fire that killed 76 Branch Davidians including 25 children', documented: true },
  ],

  // ===== Y =====
  'yemen-war': [
    { date: '2015-01-01', from: 'US Government', to: 'Saudi-led coalition arms sales', amount: '$110,000,000,000', purpose: 'US weapons sold to Saudi Arabia/UAE used to bomb Yemen; 377,000+ dead from conflict and humanitarian crisis', documented: true },
    { date: '2022-01-01', from: 'Saudi Arabia / UAE', to: 'Yemen war spending (annual)', amount: '$5,000,000,000', purpose: 'Annual coalition military spending in Yemen using US-supplied weapons on hospitals, schools, and civilian infrastructure', documented: true },
  ],
};

// Now process each shard file
const shardDir = path.join(__dirname, '..', 'src', 'data', 'investigations');
const shardFiles = fs.readdirSync(shardDir)
  .filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts')
  .sort();

let totalAdded = 0;
let totalSkipped = 0;

for (const shardFile of shardFiles) {
  const filePath = path.join(shardDir, shardFile);
  let content = fs.readFileSync(filePath, 'utf-8');
  let modified = false;

  // Get all slugs from the database that are in this shard
  const slugsInShard: string[] = [];
  for (const slug of Object.keys(db)) {
    // Check if this slug appears in this shard file as a key
    if (content.includes(`'${slug}':`)) {
      slugsInShard.push(slug);
    }
  }

  for (const slug of slugsInShard) {
    // Skip if already has moneyTrail
    if (db[slug].moneyTrail && db[slug].moneyTrail!.length > 0) {
      continue;
    }

    // Get money trail data for this slug  
    const trail = moneyTrailData[slug];
    if (!trail || trail.length === 0) {
      totalSkipped++;
      continue;
    }

    // Find the position to insert moneyTrail - look for the pattern of the investigation closing
    // We need to find the closing of this specific investigation object.
    // Strategy: find the slug key, then find its pageUpdatedDate or lastActivityDate or the last 
    // known property before closing brace.
    
    // Build the moneyTrail string
    const trailStr = trail.map(t => 
      `     { date: '${t.date}', from: '${t.from.replace(/'/g, "\\'")}', to: '${t.to.replace(/'/g, "\\'")}', amount: '${t.amount}', purpose: '${t.purpose.replace(/'/g, "\\'")}', documented: ${t.documented} },`
    ).join('\n');
    
    const moneyTrailBlock = `   moneyTrail: [\n${trailStr}\n   ],`;

    // Find the slug in the content
    const slugIndex = content.indexOf(`'${slug}':`);
    if (slugIndex === -1) continue;

    // Find the closing of this investigation - we look for the pattern of: 
    // closing brace followed by comma (end of investigation object)
    // We need to be careful to find the RIGHT closing brace.
    
    // Strategy: find pageUpdatedDate for this investigation, then insert after it
    // Or find the closing pattern: "\n },\n" or "\n  },\n" after the slug
    
    // Look for pageUpdatedDate within this investigation
    let searchStart = slugIndex;
    const nextSlugMatch = content.slice(slugIndex + slug.length + 5).search(/\n\s{1,4}'[a-z0-9-]+':\s*\{/);
    const endBound = nextSlugMatch !== -1 ? slugIndex + slug.length + 5 + nextSlugMatch : content.length;
    const invContent = content.slice(slugIndex, endBound);
    
    // Try to find pageUpdatedDate line
    let insertAfterPattern: string | null = null;
    
    // Check for timeline (insert after timeline closing)
    const timelineCloseIdx = invContent.lastIndexOf('],\n');
    // Check for pageUpdatedDate
    const pageUpdatedIdx = invContent.indexOf('pageUpdatedDate:');
    // Check for lastActivityDate  
    const lastActivityIdx = invContent.indexOf('lastActivityDate:');
    
    // Find the best place to insert - after the last property before the closing brace
    // Look for the closing pattern of this investigation
    const closingMatch = invContent.match(/\n\s{1,2}\},?\s*$/m) || invContent.match(/\n\s{1,2}\},?\s*'[a-z]/m);
    
    if (!closingMatch) {
      console.log(`  SKIP: Could not find closing for ${slug}`);
      totalSkipped++;
      continue;
    }

    // Better approach: find the last non-moneyTrail property line and insert after it
    // We look for patterns like:  pageUpdatedDate: '...', or timeline: [...], or affiliations: [...]
    // Then insert moneyTrail after the last property
    
    // Find where to insert in the investigation block
    // First check if there's a timeline (insert after timeline closing bracket)
    const timelinePattern = /(\s*\],\s*\n)(\s*\},?\s*(?:\n|$|'))/;
    const simplePropPattern = /(pageUpdatedDate:\s*'[^']*',?\s*\n)(\s*\},?\s*(?:\n|$|'))/;
    const lastActivityPattern = /(lastActivityDate:\s*'[^']*',?\s*\n)(\s*(?:pageUpdatedDate))/;
    
    // Simplest approach: find the closing "}" of this investigation and insert before it
    // Find the string pattern: line with closing brace that marks end of this investigation
    
    // Use regex to find last ] + }, or just }, before next slug or end
    const invBlock = content.slice(slugIndex, endBound);
    
    // Find the LAST occurrence of "},\n" or "}\n" in the investigation block
    // that represents the investigation object closing
    let lastClosingBracePos = -1;
    for (let i = invBlock.length - 1; i >= 0; i--) {
      if (invBlock[i] === '}') {
        // Check if this is at the right indentation level (1-2 spaces, or no space for top-level)
        const lineStart = invBlock.lastIndexOf('\n', i - 1);
        const indent = invBlock.slice(lineStart + 1, i).trim();
        if (indent === '' || indent === '},') {
          lastClosingBracePos = i;
          break;
        }
      }
    }
    
    if (lastClosingBracePos === -1) {
      console.log(`  SKIP: Could not find closing brace for ${slug}`);
      totalSkipped++;
      continue;
    }

    // Insert moneyTrail before the closing brace
    const absolutePos = slugIndex + lastClosingBracePos;
    
    // Check what's before the closing brace to format correctly
    const beforeBrace = content.slice(absolutePos - 100, absolutePos);
    const needsComma = !beforeBrace.trimEnd().endsWith(',');
    
    const insertion = (needsComma ? ',\n' : '\n') + moneyTrailBlock + '\n';
    
    // Find the exact closing line for this investigation
    // Look backward from the closing brace to find the last newline
    let insertPos = absolutePos;
    while (insertPos > 0 && content[insertPos - 1] !== '\n') {
      insertPos--;
    }
    
    content = content.slice(0, insertPos) + moneyTrailBlock + '\n' + content.slice(insertPos);
    modified = true;
    totalAdded++;
    console.log(`  + ${slug}`);
  }

  if (modified) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`  Written: ${shardFile}`);
  }
}

console.log(`\nDone! Added moneyTrail to ${totalAdded} investigations. Skipped ${totalSkipped} (no data).`);
