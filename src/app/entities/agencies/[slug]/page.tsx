'use client';

import { useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Building2,
  ArrowLeft,
  ExternalLink,
  AlertTriangle,
  Calendar,
  Users,
  FileText,
  Globe,
  Shield,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

// Mock agency data - in production, this would come from API/database
const agencyData: Record<string, {
  name: string;
  acronym: string;
  type: string;
  riskLevel: 'critical' | 'high' | 'medium' | 'low';
  description: string;
  founded: string;
  headquarters: string;
  employees: string;
  budget: string;
  jurisdiction: string;
  parentAgency?: string;
  website?: string;
  controversies: string[];
  relatedInvestigations: { title: string; slug: string; severity: string }[];
  keyFigures: { name: string; position: string; href?: string }[];
}> = {
  'fbi': {
    name: 'Federal Bureau of Investigation',
    acronym: 'FBI',
    type: 'Intelligence & Law Enforcement',
    riskLevel: 'high',
    description: 'The FBI is the domestic intelligence and security service of the United States. It operates as both a federal criminal investigative body and an internal intelligence agency.',
    founded: 'July 26, 1908',
    headquarters: 'Washington, D.C.',
    employees: '35,000+',
    budget: '$10.8 billion (2023)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Justice',
    website: 'https://www.fbi.gov',
    controversies: [
      'COINTELPRO surveillance programs targeting civil rights activists',
      'Misuse of National Security Letters',
      'Controversial use of informants in domestic terrorism cases',
      'Data collection and privacy concerns',
    ],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russian-interference', severity: 'critical' },
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Christopher Wray', position: 'Director', href: '/entities/individuals/christopher-wray' },
    ],
  },
  'cia': {
    name: 'Central Intelligence Agency',
    acronym: 'CIA',
    type: 'Foreign Intelligence',
    riskLevel: 'critical',
    description: 'The CIA is a civilian foreign intelligence service of the federal government, tasked with gathering, processing, and analyzing national security information from around the world.',
    founded: 'September 18, 1947',
    headquarters: 'Langley, Virginia',
    employees: 'Classified',
    budget: 'Classified (estimated $15+ billion)',
    jurisdiction: 'Global',
    parentAgency: 'Director of National Intelligence',
    website: 'https://www.cia.gov',
    controversies: [
      'MKUltra mind control experiments',
      'Enhanced interrogation techniques (torture)',
      'Extraordinary rendition programs',
      'Drone strike programs',
      'Foreign government coups and interventions',
    ],
    relatedInvestigations: [
      { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'William Burns', position: 'Director' },
    ],
  },
  'nsa': {
    name: 'National Security Agency',
    acronym: 'NSA',
    type: 'Signals Intelligence',
    riskLevel: 'critical',
    description: 'The NSA is responsible for global monitoring, collection, and processing of information and data for foreign and domestic intelligence and counterintelligence purposes.',
    founded: 'November 4, 1952',
    headquarters: 'Fort Meade, Maryland',
    employees: 'Classified (estimated 30,000-40,000)',
    budget: 'Classified (estimated $10+ billion)',
    jurisdiction: 'Global',
    parentAgency: 'Department of Defense',
    website: 'https://www.nsa.gov',
    controversies: [
      'PRISM mass surveillance program',
      'Bulk collection of phone metadata',
      'Weakening encryption standards',
      'Surveillance of allied nations',
      'Edward Snowden revelations',
    ],
    relatedInvestigations: [
      { title: 'Voter Suppression', slug: 'voter-suppression', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Gen. Paul Nakasone', position: 'Director' },
    ],
  },
  'doj': {
    name: 'Department of Justice',
    acronym: 'DOJ',
    type: 'Federal Executive Department',
    riskLevel: 'critical',
    description: 'The Department of Justice is the executive branch agency responsible for enforcing federal law and administering justice in the United States. Under the Trump administration, it faced unprecedented allegations of political interference, obstruction of the Mueller investigation, and selective prosecution of political adversaries.',
    founded: 'July 1, 1870',
    headquarters: 'Robert F. Kennedy Building, Washington, D.C.',
    employees: '115,000+',
    budget: '$35.2 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.justice.gov',
    controversies: [
      'William Barr misrepresenting Mueller Report findings to Congress and public',
      'Unprecedented intervention in Roger Stone sentencing recommendation',
      'Dropping charges against Michael Flynn despite guilty plea',
      'Jeff Sessions forced recusal and eventual firing',
      'Trump demanding investigations of political opponents',
      'Politicization of U.S. Attorney offices nationwide',
      'Attempted seizure of Congress members\' phone records',
      'Rod Rosenstein offering to wear wire to record Trump',
      'Refusal to defend Affordable Care Act in court',
      'Secret subpoenas targeting journalists and Democrats',
    ],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russian-interference', severity: 'critical' },
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
      { title: 'Classified Documents Case', slug: 'mar-a-lago-documents', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'William Barr', position: 'Attorney General (2019-2020)', href: '/entities/individuals/bill-barr' },
      { name: 'Jeff Sessions', position: 'Attorney General (2017-2018)', href: '/entities/individuals/jeff-sessions' },
      { name: 'Rod Rosenstein', position: 'Deputy AG (2017-2019)', href: '/entities/individuals/rod-rosenstein' },
      { name: 'Matthew Whitaker', position: 'Acting AG (2018-2019)', href: '/entities/individuals/matthew-whitaker' },
    ],
  },
  'dhs': {
    name: 'Department of Homeland Security',
    acronym: 'DHS',
    type: 'Federal Executive Department',
    riskLevel: 'critical',
    description: 'The Department of Homeland Security oversees border security, immigration enforcement, cybersecurity, and disaster response. Under the Trump administration, DHS implemented the Muslim ban, family separation policy, and deployed federal agents against protesters.',
    founded: 'November 25, 2002',
    headquarters: 'Nebraska Avenue Complex, Washington, D.C.',
    employees: '240,000+',
    budget: '$60.4 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.dhs.gov',
    controversies: [
      'Family separation policy ("zero tolerance") traumatizing thousands of children',
      'Lost track of separated children - many still unaccounted for',
      'Muslim ban executive orders targeting seven countries',
      'CBP facilities called "concentration camps" by historians',
      'Children held in cages at border facilities',
      'Deaths of children in CBP custody',
      'Stephen Miller drafting immigration policies',
      'Portland federal agent deployment against protesters',
      'Creating "anarchist jurisdiction" designations',
      'ICE raids targeting sanctuary cities',
      'Whistleblower allegations of forced hysterectomies',
    ],
    relatedInvestigations: [
      { title: 'Family Separation Policy', slug: 'family-separation', severity: 'critical' },
      { title: 'Lafayette Square Crackdown', slug: 'lafayette-square', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Kirstjen Nielsen', position: 'Secretary (2017-2019)', href: '/entities/individuals/kirstjen-nielsen' },
      { name: 'Chad Wolf', position: 'Acting Secretary (2019-2021)', href: '/entities/individuals/chad-wolf' },
      { name: 'Ken Cuccinelli', position: 'Acting Deputy (2019-2021)', href: '/entities/individuals/ken-cuccinelli' },
      { name: 'Stephen Miller', position: 'Policy Architect', href: '/entities/individuals/stephen-miller' },
    ],
  },
  'ice': {
    name: 'Immigration and Customs Enforcement',
    acronym: 'ICE',
    type: 'Law Enforcement Agency',
    riskLevel: 'critical',
    description: 'ICE is the principal federal agency responsible for immigration enforcement and investigating transnational crime. Under Trump, ICE expanded interior enforcement, conducted workplace raids, and became the face of aggressive immigration policies.',
    founded: 'March 1, 2003',
    headquarters: 'Washington, D.C.',
    employees: '20,000+',
    budget: '$8.8 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Homeland Security',
    website: 'https://www.ice.gov',
    controversies: [
      'Workplace raids separating families',
      'Detention of asylum seekers',
      'Deaths in ICE custody',
      'Deportation of military veterans',
      'Targeting sensitive locations (courts, churches, schools)',
      'Use of private detention facilities',
      'Inadequate medical care in detention',
      'Forced sterilization allegations at Irwin County facility',
      'Deporting witnesses and victims of crimes',
      'Immigration court backlog exceeding 1 million cases',
    ],
    relatedInvestigations: [
      { title: 'Family Separation Policy', slug: 'family-separation', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Thomas Homan', position: 'Acting Director (2017-2018)' },
      { name: 'Matthew Albence', position: 'Acting Director (2019-2020)' },
    ],
  },
  'epa': {
    name: 'Environmental Protection Agency',
    acronym: 'EPA',
    type: 'Independent Federal Agency',
    riskLevel: 'high',
    description: 'The EPA is responsible for environmental protection and public health. Under the Trump administration, it rolled back over 100 environmental regulations, denied climate science, and was led by industry lobbyists.',
    founded: 'December 2, 1970',
    headquarters: 'Washington, D.C.',
    employees: '15,000+',
    budget: '$10.1 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.epa.gov',
    controversies: [
      'Scott Pruitt spending scandals ($43,000 soundproof booth)',
      'Pruitt meeting secretly with industry lobbyists',
      'Rolling back Clean Power Plan',
      'Withdrawing from Paris Climate Agreement',
      'Suppressing climate science reports',
      'Weakening fuel efficiency standards',
      'Easing coal plant pollution regulations',
      'Reducing enforcement actions by 84%',
      'Andrew Wheeler as coal lobbyist turned administrator',
      'Delisting endangered species for industry benefit',
      'Dismissing scientists from advisory boards',
    ],
    relatedInvestigations: [
      { title: 'COVID-19 Response', slug: 'covid-response', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Scott Pruitt', position: 'Administrator (2017-2018)', href: '/entities/individuals/scott-pruitt' },
      { name: 'Andrew Wheeler', position: 'Administrator (2018-2021)', href: '/entities/individuals/andrew-wheeler' },
    ],
  },
  'usps': {
    name: 'United States Postal Service',
    acronym: 'USPS',
    type: 'Independent Federal Agency',
    riskLevel: 'high',
    description: 'USPS is an independent agency responsible for postal service in the United States. In 2020, under Postmaster General Louis DeJoy, a major Trump donor, the agency faced accusations of sabotaging mail-in voting through operational changes.',
    founded: 'February 20, 1792',
    headquarters: 'Washington, D.C.',
    employees: '600,000+',
    budget: '$78.5 billion (2023)',
    jurisdiction: 'United States',
    website: 'https://www.usps.com',
    controversies: [
      'Louis DeJoy appointed despite conflicts of interest',
      'DeJoy holding investments in USPS competitors',
      'Removal of 671 high-speed mail sorting machines before election',
      'Removing collection boxes in Democratic-leaning areas',
      'Overtime and extra trips banned during election',
      'Mail delays during critical 2020 election period',
      'DeJoy refusing to testify to Congress',
      'Internal whistleblowers alleging intentional slowdowns',
      'Billions in delayed mail during holiday season',
      'DeJoy campaign finance fraud allegations in North Carolina',
    ],
    relatedInvestigations: [
      { title: 'Voter Suppression', slug: 'voter-suppression', severity: 'critical' },
      { title: 'Fake Electors Scheme', slug: 'fake-electors', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Louis DeJoy', position: 'Postmaster General (2020-present)', href: '/entities/individuals/louis-dejoy' },
    ],
  },
  'secret-service': {
    name: 'United States Secret Service',
    acronym: 'USSS',
    type: 'Federal Law Enforcement',
    riskLevel: 'high',
    description: 'The Secret Service provides protection for national leaders and investigates financial crimes. Under Trump, the agency faced scrutiny for deleted January 6th text messages and costs associated with Trump properties.',
    founded: 'April 14, 1865',
    headquarters: 'Washington, D.C.',
    employees: '7,000+',
    budget: '$2.9 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Homeland Security',
    website: 'https://www.secretservice.gov',
    controversies: [
      'Deletion of January 6th text messages',
      'Massive costs protecting Trump properties',
      'Agents paying inflated rates at Trump hotels',
      'Golf cart rentals at Mar-a-Lago',
      'Tony Ornato involvement in January 6th events',
      'Agents testifying about Trump lunging for steering wheel',
      'Security lapses during January 6th',
      'Conflicts of interest with Trump Organization',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Tony Ornato', position: 'Deputy Chief of Staff (detailed)' },
    ],
  },
  'state-department': {
    name: 'U.S. Department of State',
    acronym: 'DOS',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'The State Department conducts U.S. diplomacy and foreign policy. Under Trump, career diplomats were sidelined, the department was "hollowed out," and irregular channels (Giuliani) conducted shadow diplomacy leading to the first impeachment.',
    founded: 'July 27, 1789',
    headquarters: 'Harry S. Truman Building, Washington, D.C.',
    employees: '77,000+',
    budget: '$58 billion (2024)',
    jurisdiction: 'Global',
    website: 'https://www.state.gov',
    controversies: [
      'Rudy Giuliani shadow diplomacy in Ukraine',
      'Marie Yovanovitch recall and smear campaign',
      'Career diplomats sidelined and forced out',
      'Gordon Sondland "everyone was in the loop" testimony',
      'Saudi arms sales approved despite Congress objections',
      'Pompeo using staff for personal errands',
      'Hosting RNC speech from Jerusalem',
      'Failure to protect Jamal Khashoggi',
      'Emergency declaration to bypass Congress on arms sales',
    ],
    relatedInvestigations: [
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
      { title: 'Saudi Arms Deal', slug: 'saudi-arms-deal', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mike Pompeo', position: 'Secretary of State (2018-2021)', href: '/entities/individuals/mike-pompeo' },
      { name: 'Rex Tillerson', position: 'Secretary of State (2017-2018)', href: '/entities/individuals/rex-tillerson' },
      { name: 'Marie Yovanovitch', position: 'Ambassador to Ukraine (recalled)', href: '/entities/individuals/marie-yovanovitch' },
    ],
  },
  'gsa': {
    name: 'General Services Administration',
    acronym: 'GSA',
    type: 'Independent Federal Agency',
    riskLevel: 'medium',
    description: 'GSA manages federal property and provides workplaces for federal employees. The agency was responsible for the Trump DC Hotel lease and delayed certifying Biden\'s election win for weeks.',
    founded: 'July 1, 1949',
    headquarters: 'Washington, D.C.',
    employees: '11,500+',
    budget: '$30+ billion (manages)',
    jurisdiction: 'United States',
    website: 'https://www.gsa.gov',
    controversies: [
      'Allowed Trump to keep DC hotel lease despite conflicts',
      'Emily Murphy delayed transition ascertainment for weeks',
      'Trump Hotel received $72M+ while president',
      'Failure to enforce lease provisions on conflicts of interest',
      'Political interference in transition process',
    ],
    relatedInvestigations: [
      { title: 'Emoluments Violations', slug: 'emoluments', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Emily Murphy', position: 'Administrator (2017-2021)' },
    ],
  },
  'treasury': {
    name: 'U.S. Department of the Treasury',
    acronym: 'Treasury',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'Treasury manages federal finances, collects taxes through IRS, and enforces financial sanctions. Under Mnuchin, the department blocked Trump tax return releases and delivered COVID relief favoring large corporations.',
    founded: 'September 2, 1789',
    headquarters: 'Washington, D.C.',
    employees: '100,000+',
    budget: '$15.8 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.treasury.gov',
    controversies: [
      'Mnuchin blocking release of Trump tax returns to Congress',
      'PPP loans favoring large corporations over small businesses',
      'Sanctions relief benefiting Russian oligarchs (Deripaska)',
      'Mnuchin using military aircraft for personal travel',
      'Fort Knox visit with wife during eclipse',
      'FinCEN leaks showing suspicious Trump transactions',
      'Delay in distributing COVID stimulus checks',
    ],
    relatedInvestigations: [
      { title: 'Tax Evasion & Fraud', slug: 'tax-evasion', severity: 'critical' },
      { title: 'Trump Org Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Steven Mnuchin', position: 'Secretary (2017-2021)', href: '/entities/individuals/steven-mnuchin' },
    ],
  },
  'pentagon': {
    name: 'U.S. Department of Defense',
    acronym: 'DOD',
    type: 'Federal Executive Department',
    riskLevel: 'critical',
    description: 'The Department of Defense is the executive department overseeing the U.S. Armed Forces. Under Trump, the Pentagon saw unprecedented civilian interference, including delays in National Guard deployment on January 6th and Esper\'s firing after opposing using military against protesters.',
    founded: 'September 18, 1947',
    headquarters: 'The Pentagon, Arlington, VA',
    employees: '3+ million (military and civilian)',
    budget: '$886 billion (2024)',
    jurisdiction: 'Global',
    website: 'https://www.defense.gov',
    controversies: [
      'Delay in National Guard deployment on January 6th',
      'Mark Esper fired for opposing Insurrection Act use',
      'Milley apologizing for Lafayette Square appearance',
      'Trump installing loyalists in final weeks',
      'Kash Patel made Chief of Staff to Acting SecDef',
      'Border wall funding diverted from military projects',
      'Pardoning war criminals over Pentagon objections',
      'Syria withdrawal chaos',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
      { title: 'Saudi Arms Deal', slug: 'saudi-arms-deal', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mark Esper', position: 'Secretary of Defense (2019-2020, fired)', href: '/entities/individuals/mark-esper' },
      { name: 'Gen. Mark Milley', position: 'Chairman Joint Chiefs (2019-2023)', href: '/entities/individuals/mark-milley' },
      { name: 'Christopher Miller', position: 'Acting Secretary (Nov 2020-Jan 2021)', href: '/entities/individuals/christopher-miller' },
    ],
  },
  'hhs': {
    name: 'Department of Health and Human Services',
    acronym: 'HHS',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'HHS oversees public health and human services programs. Under Trump, the department was at the center of the catastrophic COVID-19 response, family separation trauma, and rollbacks of healthcare protections.',
    founded: 'April 11, 1953',
    headquarters: 'Washington, D.C.',
    employees: '80,000+',
    budget: '$1.7 trillion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.hhs.gov',
    controversies: [
      'Failed COVID-19 pandemic response',
      'Family separation policy - children in cages',
      'Lost track of separated children',
      'Suppression of CDC guidance',
      'Political interference in COVID data',
      'ACA sabotage attempts',
      'Opioid crisis inadequate response',
    ],
    relatedInvestigations: [
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
      { title: 'Family Separation', slug: 'family-separation', severity: 'critical' },
      { title: 'Opioid Crisis', slug: 'opioid-crisis', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Alex Azar', position: 'Secretary (2018-2021)', href: '/entities/individuals/alex-azar' },
      { name: 'Tom Price', position: 'Secretary (2017, resigned)', href: '/entities/individuals/tom-price' },
    ],
  },
  'doe': {
    name: 'Department of Energy',
    acronym: 'DOE',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'DOE oversees nuclear weapons, energy policy, and scientific research. Under Rick Perry, the department promoted fossil fuels while undermining renewable energy and climate science.',
    founded: 'August 4, 1977',
    headquarters: 'Washington, D.C.',
    employees: '100,000+',
    budget: '$48 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.energy.gov',
    controversies: [
      'Perry wanted to eliminate the department before leading it',
      'Promotion of coal and fossil fuels',
      'Undermining renewable energy programs',
      'Climate science denial',
      'Ukraine energy dealings (Perry involved in scandal)',
    ],
    relatedInvestigations: [
      { title: 'Climate Sabotage', slug: 'climate-sabotage', severity: 'critical' },
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Rick Perry', position: 'Secretary (2017-2019)', href: '/entities/individuals/rick-perry' },
    ],
  },
  'fema': {
    name: 'Federal Emergency Management Agency',
    acronym: 'FEMA',
    type: 'Disaster Response',
    riskLevel: 'high',
    description: 'FEMA coordinates disaster response and recovery. Under Trump, the agency was criticized for catastrophic failures in Puerto Rico after Hurricane Maria and inadequate COVID-19 response.',
    founded: 'April 1, 1979',
    headquarters: 'Washington, D.C.',
    employees: '20,000+',
    budget: '$30+ billion (varies)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Homeland Security',
    website: 'https://www.fema.gov',
    controversies: [
      'Puerto Rico Hurricane Maria - inadequate response',
      'Paper towel throwing incident',
      'Disputed death toll (3,000 vs "6 to 18")',
      'Delayed aid delivery',
      'COVID-19 supply chain failures',
      'Mismanagement of PPE distribution',
    ],
    relatedInvestigations: [
      { title: 'Puerto Rico Disaster Response', slug: 'puerto-rico', severity: 'critical' },
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Brock Long', position: 'Administrator (2017-2019)' },
      { name: 'Peter Gaynor', position: 'Administrator (2019-2021)' },
    ],
  },
  'cbp': {
    name: 'Customs and Border Protection',
    acronym: 'CBP',
    type: 'Law Enforcement',
    riskLevel: 'critical',
    description: 'CBP is the largest federal law enforcement agency, responsible for border security. Under Trump, it implemented family separations, built border wall sections, and faced accusations of widespread abuse and deaths in custody.',
    founded: 'March 1, 2003',
    headquarters: 'Washington, D.C.',
    employees: '60,000+',
    budget: '$19 billion (2024)',
    jurisdiction: 'U.S. Borders',
    parentAgency: 'Department of Homeland Security',
    website: 'https://www.cbp.gov',
    controversies: [
      'Family separations at the border',
      'Children in cages',
      'Deaths in custody',
      'Inhumane detention conditions',
      'Border wall construction',
      'Secret Facebook groups with racist content',
      'Tear gas at asylum seekers',
    ],
    relatedInvestigations: [
      { title: 'Family Separation', slug: 'family-separation', severity: 'critical' },
      { title: 'Forced Sterilization', slug: 'forced-sterilization', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mark Morgan', position: 'Acting Commissioner' },
      { name: 'Kevin McAleenan', position: 'Commissioner (2018-2019)' },
    ],
  },
  'fec': {
    name: 'Federal Election Commission',
    acronym: 'FEC',
    type: 'Independent Regulatory Agency',
    riskLevel: 'high',
    description: 'The FEC enforces campaign finance law. Under Trump, it was deliberately understaffed to prevent it from having a quorum to take enforcement action, effectively neutering campaign finance enforcement.',
    founded: 'February 7, 1975',
    headquarters: 'Washington, D.C.',
    employees: '350+',
    budget: '$75 million (2024)',
    jurisdiction: 'Federal Elections',
    website: 'https://www.fec.gov',
    controversies: [
      'Deliberately left without quorum for enforcement',
      'Unable to investigate campaign finance violations',
      'Don McGahn formerly served, neutered enforcement',
      'Trump campaign finance violations uninvestigated',
      'Dark money proliferation',
      'Foreign influence uninvestigated',
    ],
    relatedInvestigations: [
      { title: 'Hush Money Payments', slug: 'hush-money', severity: 'critical' },
      { title: 'Campaign Finance Violations', slug: 'voter-suppression', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Don McGahn', position: 'Former Commissioner, Trump counsel', href: '/entities/individuals/don-mcgahn' },
    ],
  },
  'gru': {
    name: 'GRU (Main Intelligence Directorate)',
    acronym: 'GRU',
    type: 'Foreign Intelligence Agency',
    riskLevel: 'critical',
    description: 'The GRU is the foreign military intelligence agency of the General Staff of the Armed Forces of the Russian Federation. GRU operatives were indicted for hacking the DNC and Clinton campaign in 2016. The GRU\'s Unit 26165 and Unit 74455 conducted the cyber operations that constituted Russian interference in the 2016 election.',
    founded: '1918',
    headquarters: 'Moscow, Russia',
    employees: 'Classified (est. 25,000+)',
    budget: 'Classified',
    jurisdiction: 'Global military intelligence operations',
    controversies: [
      '12 GRU officers indicted by Mueller for 2016 hacking',
      'Hacked DNC and Clinton campaign',
      'Released stolen emails via WikiLeaks',
      'Targeted election infrastructure in 50 states',
      'Unit 74455 (Sandworm) - cyber warfare operations',
      'Novichok poisoning operations',
    ],
    relatedInvestigations: [
      { title: 'Russian Interference', slug: 'russian-interference', severity: 'critical' },
      { title: 'Russia Investigation', slug: 'russia-investigation', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Viktor Netyksho', position: 'Indicted GRU officer' },
      { name: 'Boris Antonov', position: 'Indicted GRU officer' },
    ],
  },
  'national-archives': {
    name: 'National Archives and Records Administration',
    acronym: 'NARA',
    type: 'Independent Agency',
    riskLevel: 'medium',
    description: 'NARA is the official record keeper of the United States government. The agency discovered that Trump had taken classified documents to Mar-a-Lago after leaving office and attempted to recover them, eventually triggering an FBI investigation and search.',
    founded: '1934',
    headquarters: 'Washington, D.C.',
    employees: '2,700+',
    budget: '$400+ million',
    jurisdiction: 'Federal records management',
    controversies: [
      'Discovered Trump took classified documents',
      'Attempted recovery of presidential records',
      'Referred matter to DOJ leading to FBI search',
      'Trump attacked NARA for "working with DOJ"',
      'Found documents with highest classification markings',
    ],
    relatedInvestigations: [
      { title: 'Mar-a-Lago Documents', slug: 'mar-a-lago-documents', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Debra Steidel Wall', position: 'Acting Archivist' },
      { name: 'David Ferriero', position: 'Former Archivist' },
    ],
  },
  'irs': {
    name: 'Internal Revenue Service',
    acronym: 'IRS',
    type: 'Bureau of Treasury Department',
    riskLevel: 'high',
    description: 'The IRS is responsible for collecting taxes and enforcing tax law. The agency\'s handling of Trump\'s tax returns became a major controversy, with the mandatory audit program not functioning properly and Trump fighting release of his returns for years.',
    founded: '1862',
    headquarters: 'Washington, D.C.',
    employees: '80,000+',
    budget: '$13+ billion',
    jurisdiction: 'Federal tax collection and enforcement',
    parentAgency: 'Department of the Treasury',
    controversies: [
      'Failed to properly audit Trump\'s returns as President',
      'Trump fought release of tax returns for years',
      'Whistleblowers revealed audit failures',
      'Trump claimed audit prevented release (false)',
      'Returns showed years of minimal tax payments',
    ],
    relatedInvestigations: [
      { title: 'Tax Evasion & Fraud', slug: 'tax-evasion', severity: 'critical' },
      { title: 'Trump Org Financial Fraud', slug: 'trump-org-fraud', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Charles Rettig', position: 'Trump-appointed Commissioner' },
    ],
  },
  'park-police': {
    name: 'United States Park Police',
    acronym: 'USPP',
    type: 'Federal Law Enforcement',
    riskLevel: 'high',
    description: 'The USPP is a federal law enforcement agency that protects national parks. The agency was directly involved in the violent clearing of Lafayette Square on June 1, 2020, to enable Trump\'s photo op at St. John\'s Church.',
    founded: '1791',
    headquarters: 'Washington, D.C.',
    employees: '550+',
    budget: '$140+ million',
    jurisdiction: 'National parks and monuments',
    parentAgency: 'National Park Service / Interior Department',
    controversies: [
      'Violently cleared peaceful Lafayette Square protesters',
      'Used chemical agents on demonstrators',
      'Enabled Trump photo op at St. John\'s Church',
      'Inspector General found clearing pre-planned',
      'Questions about orders and command structure',
    ],
    relatedInvestigations: [
      { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Gregory Monahan', position: 'Acting Chief during Lafayette Square' },
    ],
  },
  'sec': {
    name: 'Securities and Exchange Commission',
    acronym: 'SEC',
    type: 'Independent Regulatory Agency',
    riskLevel: 'high',
    description: 'The SEC enforces securities laws and regulates financial markets. The agency has investigated Trump Organization financial dealings and Truth Social/DWAC merger while facing questions about enforcement priorities and political influence.',
    founded: 'June 6, 1934',
    headquarters: 'Washington, D.C.',
    employees: '4,500+',
    budget: '$2.2 billion (2024)',
    jurisdiction: 'U.S. securities markets',
    website: 'https://www.sec.gov',
    controversies: [
      'Trump Organization fraud investigations',
      'Truth Social/DWAC merger scrutiny',
      'Questions about enforcement against politically connected',
      'Cryptocurrency regulation controversies',
      'Market manipulation oversight failures',
    ],
    relatedInvestigations: [
      { title: 'Trump Org Fraud', slug: 'trump-org-fraud', severity: 'critical' },
      { title: 'Money Laundering', slug: 'money-laundering', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Jay Clayton', position: 'Chairman (2017-2020)' },
      { name: 'Gary Gensler', position: 'Chairman (2021-present)' },
    ],
  },
  'fda': {
    name: 'Food and Drug Administration',
    acronym: 'FDA',
    type: 'Federal Regulatory Agency',
    riskLevel: 'high',
    description: 'The FDA regulates food, drugs, and medical devices. During COVID-19, the agency faced unprecedented political pressure from the Trump administration to rush approvals and authorize unproven treatments like hydroxychloroquine.',
    founded: 'June 30, 1906',
    headquarters: 'Silver Spring, Maryland',
    employees: '18,000+',
    budget: '$7 billion (2024)',
    jurisdiction: 'Food, drugs, medical devices',
    parentAgency: 'Department of Health and Human Services',
    website: 'https://www.fda.gov',
    controversies: [
      'Political pressure to approve COVID treatments',
      'Hydroxychloroquine emergency authorization controversy',
      'Trump pressure on vaccine approval timing',
      'Commissioner resignations over political interference',
      'Emergency use authorization disputes',
    ],
    relatedInvestigations: [
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Stephen Hahn', position: 'Commissioner (2019-2021)' },
    ],
  },
  'cdc': {
    name: 'Centers for Disease Control and Prevention',
    acronym: 'CDC',
    type: 'Federal Public Health Agency',
    riskLevel: 'critical',
    description: 'The CDC is the nation\'s leading public health agency. During COVID-19, guidance was overruled and edited by the Trump White House. Historically, the CDC inherited the Tuskegee syphilis study in 1957 and allowed it to continue until 1972, contributing to medical experimentation on unwitting Black Americans.',
    founded: 'July 1, 1946',
    headquarters: 'Atlanta, Georgia',
    employees: '11,000+',
    budget: '$17 billion (2024)',
    jurisdiction: 'U.S. public health',
    parentAgency: 'Department of Health and Human Services',
    website: 'https://www.cdc.gov',
    controversies: [
      'Continued Tuskegee syphilis study from 1957-1972',
      'COVID guidance repeatedly overruled by White House',
      'Testing failures in early pandemic',
      'Political editing of scientific reports (MMWR)',
      'Muzzled scientists during pandemic',
      'Delayed and contradictory mask guidance',
      'Opioid guidelines influenced by pharmaceutical industry',
    ],
    relatedInvestigations: [
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
      { title: 'Tuskegee Experiment', slug: 'tuskegee-experiment', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Robert Redfield', position: 'Director (2018-2021)', href: '/entities/individuals/robert-redfield' },
      { name: 'Deborah Birx', position: 'White House Coordinator', href: '/entities/individuals/deborah-birx' },
    ],
  },
  'usda': {
    name: 'U.S. Department of Agriculture',
    acronym: 'USDA',
    type: 'Federal Executive Department',
    riskLevel: 'medium',
    description: 'USDA oversees agriculture policy, food safety, and nutrition programs. Under Trump, the department rolled back regulations, moved scientists out of D.C., and cut food assistance programs while subsidizing farmers hurt by trade wars.',
    founded: 'May 15, 1862',
    headquarters: 'Washington, D.C.',
    employees: '100,000+',
    budget: '$220 billion (2024)',
    jurisdiction: 'Agriculture, food, nutrition',
    website: 'https://www.usda.gov',
    controversies: [
      'Scientist exodus after forced relocation',
      'Food stamp work requirements',
      'School lunch nutrition rollbacks',
      'Farm bailouts from self-inflicted trade war',
      'Climate research suppression',
      'Meat processing plant COVID outbreaks',
    ],
    relatedInvestigations: [
      { title: 'COVID Response Failures', slug: 'covid-response', severity: 'critical' },
      { title: 'Climate Sabotage', slug: 'climate-sabotage', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Sonny Perdue', position: 'Secretary (2017-2021)' },
    ],
  },
  'fulton-county-da': {
    name: 'Fulton County District Attorney\'s Office',
    acronym: 'FCDA',
    type: 'Local Prosecutorial Office',
    riskLevel: 'high',
    description: 'The Fulton County District Attorney\'s Office prosecutes crimes in Fulton County, Georgia (including Atlanta). Under DA Fani Willis, the office brought RICO charges against Donald Trump and 18 co-defendants for their efforts to overturn the 2020 election results in Georgia.',
    founded: '1821',
    headquarters: 'Atlanta, Georgia',
    employees: '350+',
    budget: '$40+ million',
    jurisdiction: 'Fulton County, Georgia',
    controversies: [
      'Trump RICO indictment for election interference',
      '19 defendants charged including Trump',
      'Willis relationship controversy with prosecutor',
      'Defendant plea deals and cooperation',
      'Case delays and appeals',
    ],
    relatedInvestigations: [
      { title: 'Georgia RICO Case', slug: 'georgia-rico', severity: 'critical' },
      { title: 'Fake Electors Scheme', slug: 'fake-electors', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Fani Willis', position: 'District Attorney', href: '/entities/individuals/fani-willis' },
    ],
  },
  'manhattan-da': {
    name: 'Manhattan District Attorney\'s Office',
    acronym: 'DANY',
    type: 'Local Prosecutorial Office',
    riskLevel: 'high',
    description: 'The Manhattan District Attorney\'s Office prosecutes crimes in New York County. Under DA Alvin Bragg, the office secured the first criminal conviction of a former president, finding Trump guilty on 34 felony counts of falsifying business records in the hush money case.',
    founded: '1798',
    headquarters: 'New York City',
    employees: '1,500+',
    budget: '$125+ million',
    jurisdiction: 'New York County (Manhattan)',
    controversies: [
      'First indictment of a former president',
      '34 felony count conviction of Trump',
      'Hush money case prosecution',
      'Long investigation before charges',
      'Sentencing delays and appeals',
    ],
    relatedInvestigations: [
      { title: 'Hush Money Payments', slug: 'hush-money', severity: 'critical' },
      { title: 'Trump Org Fraud', slug: 'trump-org-fraud', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Alvin Bragg', position: 'District Attorney', href: '/entities/individuals/alvin-bragg' },
    ],
  },
  'interior-department': {
    name: 'U.S. Department of the Interior',
    acronym: 'DOI',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'The Interior Department manages federal lands and natural resources. Under Trump, the department aggressively expanded fossil fuel extraction, rolled back environmental protections, and was at the center of the Lafayette Square clearing operation.',
    founded: 'March 3, 1849',
    headquarters: 'Washington, D.C.',
    employees: '70,000+',
    budget: '$18 billion (2024)',
    jurisdiction: 'Federal lands, national parks, Native American affairs',
    website: 'https://www.doi.gov',
    controversies: [
      'Massive rollback of environmental protections',
      'Opening protected lands to drilling',
      'Lafayette Square protesters cleared under Interior jurisdiction',
      'Bears Ears and Grand Staircase monument reductions',
      'Endangered Species Act weakening',
      'Ryan Zinke ethics scandals',
    ],
    relatedInvestigations: [
      { title: 'Climate Sabotage', slug: 'climate-sabotage', severity: 'critical' },
      { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Ryan Zinke', position: 'Secretary (2017-2019)', href: '/entities/individuals/ryan-zinke' },
      { name: 'David Bernhardt', position: 'Secretary (2019-2021)' },
    ],
  },
  'usaid': {
    name: 'U.S. Agency for International Development',
    acronym: 'USAID',
    type: 'Independent Agency',
    riskLevel: 'medium',
    description: 'USAID administers foreign aid and development assistance. Under Trump, the agency faced budget cut proposals, had aid used as political leverage in the Ukraine scandal, and saw corruption in pandemic response contracts.',
    founded: 'November 3, 1961',
    headquarters: 'Washington, D.C.',
    employees: '10,000+',
    budget: '$28 billion (2024)',
    jurisdiction: 'Global foreign assistance',
    website: 'https://www.usaid.gov',
    controversies: [
      'Aid withheld from Ukraine in extortion scheme',
      'Budget cut proposals by Trump',
      'Pandemic response contract corruption',
      'Political appointees overriding career staff',
      'Climate program rollbacks',
    ],
    relatedInvestigations: [
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mark Green', position: 'Administrator (2017-2020)' },
    ],
  },
  'fsb': {
    name: 'Federal Security Service of Russia',
    acronym: 'FSB',
    type: 'Foreign Intelligence Agency',
    riskLevel: 'critical',
    description: 'The FSB is Russia\'s domestic security and intelligence agency, successor to the KGB. It has been directly implicated in election interference, cyberattacks, poisoning of dissidents, and coordination with Russian oligarchs connected to Trump associates.',
    founded: 'April 3, 1995',
    headquarters: 'Lubyanka Building, Moscow, Russia',
    employees: '250,000+ (estimated)',
    budget: 'Classified (billions)',
    jurisdiction: 'Russian Federation (with foreign operations)',
    website: 'http://www.fsb.ru',
    controversies: [
      'Coordinated 2016 election interference with GRU',
      'Cyberattacks on DNC and Clinton campaign',
      'Novichok poisonings of dissidents',
      'Navalny poisoning operation',
      'Surveillance of Trump opponents',
      'Connections to Trump Tower meeting attendees',
      'Infiltration operations in Western democracies',
      'Kompromat collection on American officials',
    ],
    relatedInvestigations: [
      { title: 'Russian Election Interference', slug: 'russian-interference', severity: 'critical' },
      { title: 'Ukraine Extortion', slug: 'ukraine-extortion', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Alexander Bortnikov', position: 'Director (2008-present)' },
      { name: 'Vladimir Putin', position: 'Former Director (1998-1999)', href: '/entities/individuals/vladimir-putin' },
    ],
  },
  'noaa': {
    name: 'National Oceanic and Atmospheric Administration',
    acronym: 'NOAA',
    type: 'Federal Scientific Agency',
    riskLevel: 'high',
    description: 'NOAA monitors weather, climate, and ocean conditions. The agency was at the center of the "Sharpiegate" scandal when Trump altered a hurricane forecast map with a Sharpie, and agency leadership was pressured to validate his false statements.',
    founded: 'October 3, 1970',
    headquarters: 'Silver Spring, Maryland',
    employees: '11,000+',
    budget: '$6.5 billion (2024)',
    jurisdiction: 'Weather, oceans, atmosphere',
    parentAgency: 'Department of Commerce',
    website: 'https://www.noaa.gov',
    controversies: [
      'SHARPIEGATE: Trump altered Hurricane Dorian map',
      'NOAA leadership pressured to validate false forecast',
      'Scientific integrity compromised by political pressure',
      'Climate data suppression and distortion',
      'NWS Birmingham rebuked for accurate forecast',
      'IG investigation into political interference',
      'Career scientists threatened for contradicting Trump',
    ],
    relatedInvestigations: [
      { title: 'Climate Sabotage', slug: 'climate-sabotage', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Neil Jacobs', position: 'Acting Administrator (2019-2021)' },
      { name: 'Wilbur Ross', position: 'Commerce Secretary (oversaw NOAA)', href: '/entities/individuals/wilbur-ross' },
    ],
  },
  'commerce-department': {
    name: 'U.S. Department of Commerce',
    acronym: 'DOC',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'The Commerce Department oversees trade, census, and economic policy. Under Wilbur Ross, the department attempted to add a citizenship question to the 2020 Census to suppress immigrant responses, and Ross personally profited from conflicts of interest.',
    founded: 'February 14, 1903',
    headquarters: 'Herbert C. Hoover Building, Washington, D.C.',
    employees: '43,000+',
    budget: '$16 billion (2024)',
    jurisdiction: 'Trade, census, weather, patents',
    website: 'https://www.commerce.gov',
    controversies: [
      'Attempted citizenship question on 2020 Census (blocked by SCOTUS)',
      'Wilbur Ross conflicts of interest ($2B holdings)',
      'Ross lied to Congress about census question origins',
      'NOAA "Sharpiegate" cover-up',
      'Trade policy benefiting Ross investments',
      'Census count manipulation attempts',
      'Short-selling while in office',
    ],
    relatedInvestigations: [
      { title: 'Emoluments Violations', slug: 'emoluments', severity: 'high' },
      { title: 'Voter Suppression', slug: 'voter-suppression', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Wilbur Ross', position: 'Secretary (2017-2021)', href: '/entities/individuals/wilbur-ross' },
    ],
  },
  'dea': {
    name: 'Drug Enforcement Administration',
    acronym: 'DEA',
    type: 'Law Enforcement',
    riskLevel: 'high',
    description: 'The DEA is a federal law enforcement agency tasked with combating drug trafficking and distribution. Created in 1973 as a tool of the War on Drugs, it has been instrumental in the mass incarceration of millions of Americans, disproportionately affecting Black and brown communities despite similar drug usage rates across racial groups.',
    founded: 'July 1, 1973',
    headquarters: 'Arlington, Virginia',
    employees: '10,000+',
    budget: '$3.2 billion (2024)',
    jurisdiction: 'United States and International',
    parentAgency: 'Department of Justice',
    website: 'https://www.dea.gov',
    controversies: [
      'Racial targeting in War on Drugs enforcement',
      'Mass incarceration of non-violent offenders',
      'Civil asset forfeiture abuse ($4+ billion seized)',
      'Cooperation with Mexican cartels and corruption',
      'Fast and Furious gun-walking scandal',
      'DEA agents having "sex parties" with prostitutes paid by cartels',
      'Misclassification of marijuana as Schedule I',
      'Opioid crisis failure - approved massive OxyContin production quotas',
    ],
    relatedInvestigations: [
      { title: 'War on Drugs', slug: 'war-on-drugs', severity: 'critical' },
      { title: 'Mass Incarceration', slug: 'mass-incarceration', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Anne Milgram', position: 'Administrator', href: '/entities/individuals/anne-milgram' },
    ],
  },
  'bop': {
    name: 'Bureau of Prisons',
    acronym: 'BOP',
    type: 'Correctional Services',
    riskLevel: 'high',
    description: 'The Federal Bureau of Prisons is responsible for the custody and care of federal inmates. It administers America\'s largest prison system, housing over 155,000 people in 122 facilities. The BOP has been plagued by understaffing, abuse, and corruption scandals including the death of Jeffrey Epstein under suspicious circumstances.',
    founded: 'May 14, 1930',
    headquarters: 'Washington, D.C.',
    employees: '36,000+',
    budget: '$8.5 billion (2024)',
    jurisdiction: 'Federal Correctional Facilities',
    parentAgency: 'Department of Justice',
    website: 'https://www.bop.gov',
    controversies: [
      'Jeffrey Epstein death under suspicious circumstances',
      'Systemic sexual abuse of inmates',
      'Chronic understaffing (30%+ vacancies)',
      'COVID-19 outbreak deaths (negligence)',
      'Solitary confinement torture practices',
      'Failure to provide medical care',
      'Contracting with private prisons',
      'Corruption and contraband smuggling by staff',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network', slug: 'epstein-network', severity: 'critical' },
      { title: 'Prison Industrial Complex', slug: 'prison-industrial-complex', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Colette Peters', position: 'Director', href: '/entities/individuals/colette-peters' },
    ],
  },
  'bia': {
    name: 'Bureau of Indian Affairs',
    acronym: 'BIA',
    type: 'Federal Administration',
    riskLevel: 'critical',
    description: 'The Bureau of Indian Affairs is responsible for the administration and management of land held in trust by the United States for Native Americans. Historically, the BIA administered forced assimilation programs, boarding schools that abused indigenous children, and continues to mismanage billions in trust funds owed to Native Americans.',
    founded: 'March 11, 1824',
    headquarters: 'Washington, D.C.',
    employees: '5,000+',
    budget: '$2.8 billion (2024)',
    jurisdiction: 'Indian Affairs and Trust Lands',
    parentAgency: 'Department of Interior',
    website: 'https://www.bia.gov',
    controversies: [
      'Administered forced relocation and genocide policies',
      'Operated boarding schools where thousands of children died',
      'Physical and sexual abuse at boarding schools',
      'Forced sterilization of Native American women',
      'Mismanagement of $137+ billion in trust funds (Cobell case)',
      'Loss of millions of acres of treaty-guaranteed land',
      'Failure to protect Missing and Murdered Indigenous Women',
      'Environmental degradation of reservation lands',
    ],
    relatedInvestigations: [
      { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'critical' },
      { title: 'Boarding Schools', slug: 'boarding-schools', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Bryan Newland', position: 'Assistant Secretary', href: '/entities/individuals/bryan-newland' },
    ],
  },
  'public-health-service': {
    name: 'U.S. Public Health Service',
    acronym: 'USPHS',
    type: 'Public Health',
    riskLevel: 'critical',
    description: 'The U.S. Public Health Service is a uniformed service responsible for protecting public health. It infamously conducted the Tuskegee syphilis experiment (1932-1972), deliberately withholding treatment from Black men with syphilis for 40 years to study disease progression. This remains one of the most egregious examples of government medical racism.',
    founded: 'July 16, 1798',
    headquarters: 'Rockville, Maryland',
    employees: '6,000+ commissioned officers',
    budget: 'Part of HHS budget',
    jurisdiction: 'Public Health',
    parentAgency: 'Department of Health and Human Services',
    website: 'https://www.usphs.gov',
    controversies: [
      'Tuskegee syphilis experiment - 40 years of deliberately withholding treatment',
      'Complicity in Native American forced sterilization',
      'Guatemala STD experiments on prisoners without consent',
      'Pellagra experiments on prisoners',
      'Failed response to AIDS epidemic in 1980s',
    ],
    relatedInvestigations: [
      { title: 'Tuskegee Experiment', slug: 'tuskegee-experiment', severity: 'critical' },
      { title: 'Guatemala Experiments', slug: 'guatemala-experiments', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Vivek Murthy', position: 'Surgeon General', href: '/entities/individuals/vivek-murthy' },
    ],
  },
  'michigan-deq': {
    name: 'Michigan Department of Environmental Quality',
    acronym: 'MDEQ',
    type: 'State Environmental Agency',
    riskLevel: 'critical',
    description: 'The Michigan DEQ was the state agency responsible for environmental protection. It was restructured into EGLE in 2019 after its catastrophic failure in the Flint water crisis, where officials manipulated testing, covered up lead contamination, and allowed 100,000 people to be poisoned for 18 months while claiming the water was safe.',
    founded: '1995',
    headquarters: 'Lansing, Michigan',
    employees: '1,500 (historical)',
    budget: 'Part of state budget',
    jurisdiction: 'Michigan environmental protection',
    parentAgency: 'State of Michigan',
    website: 'https://www.michigan.gov/egle',
    controversies: [
      'Flint water crisis - manipulated testing to hide lead contamination',
      'Told Flint the water was safe while knowing it was poisoned',
      'Attacked and discredited scientists exposing contamination',
      'Covered up Legionnaires\' disease outbreak',
      'Failed to implement corrosion control',
      'Environmental racism - majority-Black city suffered while state ignored warnings',
    ],
    relatedInvestigations: [
      { title: 'Flint Water Crisis', slug: 'flint-water-crisis', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Dan Wyant', position: 'Director (resigned in disgrace)', href: '/entities/individuals/dan-wyant' },
    ],
  },
  'minneapolis-pd': {
    name: 'Minneapolis Police Department',
    acronym: 'MPD',
    type: 'Municipal Law Enforcement',
    riskLevel: 'critical',
    description: 'The Minneapolis Police Department is the municipal police force responsible for law enforcement in Minneapolis, Minnesota. MPD officers murdered George Floyd on May 25, 2020, sparking the largest protests in U.S. history. A DOJ investigation found MPD engaged in a pattern of unconstitutional excessive force and discrimination.',
    founded: '1867',
    headquarters: 'Minneapolis, Minnesota',
    employees: '800+ officers',
    budget: '$193 million (2024)',
    jurisdiction: 'Minneapolis',
    website: 'https://www.minneapolismn.gov/government/departments/police/',
    controversies: [
      'Murder of George Floyd by officer Derek Chauvin',
      'Pattern of excessive force against Black residents',
      'Use of "warrior training" promoting aggressive tactics',
      'Officers with multiple complaints allowed to continue',
      'Union protection of abusive officers',
      'DOJ found unconstitutional practices and discrimination',
      'Use of chemical weapons against protesters',
    ],
    relatedInvestigations: [
      { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
      { title: 'George Floyd Murder', slug: 'george-floyd-murder', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Derek Chauvin', position: 'Officer (convicted murderer)', href: '/entities/individuals/derek-chauvin' },
      { name: 'Brian O\'Hara', position: 'Chief', href: '/entities/individuals/brian-ohara' },
    ],
  },
  'war-relocation-authority': {
    name: 'War Relocation Authority',
    acronym: 'WRA',
    type: 'Historical Federal Agency',
    riskLevel: 'critical',
    description: 'The War Relocation Authority was a U.S. government agency established in 1942 to administer the forced removal and incarceration of 120,000 Japanese Americans during World War II. WRA operated 10 concentration camps where American citizens and residents were imprisoned without charge or trial based solely on their ancestry. The agency was abolished in 1946.',
    founded: 'March 18, 1942',
    headquarters: 'Washington, D.C.',
    employees: '10,000+ (historical)',
    budget: '$250 million (1942-1946)',
    jurisdiction: 'Japanese American internment',
    website: 'https://www.archives.gov/research/japanese-americans/wra',
    controversies: [
      'Administered unconstitutional mass imprisonment of 120,000 people',
      'Operated 10 concentration camps in remote locations',
      'Forced removal of American citizens based on race',
      'Property seizures and economic devastation',
      'Inadequate facilities causing deaths and suffering',
      'Children imprisoned without education',
      'Collaboration with military in violating civil liberties',
    ],
    relatedInvestigations: [
      { title: 'Japanese American Internment', slug: 'japanese-internment', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Dillon S. Myer', position: 'Director', href: '/entities/individuals/dillon-myer' },
      { name: 'Milton Eisenhower', position: 'First Director', href: '/entities/individuals/milton-eisenhower' },
    ],
  },
  'us-army': {
    name: 'United States Army',
    acronym: 'USA',
    type: 'Military Branch',
    riskLevel: 'high',
    description: 'The United States Army is the land warfare service branch of the U.S. Armed Forces. While serving national defense, the Army has historically been involved in numerous atrocities including Native American genocide, My Lai massacre, Abu Ghraib torture, and countless civilian casualties in conflicts worldwide.',
    founded: 'June 14, 1775',
    headquarters: 'The Pentagon, Virginia',
    employees: '485,000+ active duty',
    budget: '$178 billion (2024)',
    jurisdiction: 'Land-based military operations',
    parentAgency: 'Department of Defense',
    website: 'https://www.army.mil',
    controversies: [
      'Native American genocide - Trail of Tears, Wounded Knee, Sand Creek Massacre',
      'My Lai Massacre - murder of 500+ Vietnamese civilians',
      'Abu Ghraib torture and prisoner abuse',
      'Civilian casualties in Iraq and Afghanistan',
      'Agent Orange use in Vietnam',
      'Nuclear testing on soldiers',
      'Tuskegee experiments on soldiers',
    ],
    relatedInvestigations: [
      { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'critical' },
      { title: 'Vietnam War Crimes', slug: 'vietnam-war-crimes', severity: 'critical' },
      { title: 'Abu Ghraib', slug: 'abu-ghraib', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Ryan McCarthy', position: 'Former Secretary (Jan 6)', href: '/entities/individuals/ryan-mccarthy' },
    ],
  },
  'doi': {
    name: 'Department of the Interior',
    acronym: 'DOI',
    type: 'Cabinet Department',
    riskLevel: 'high',
    description: 'The Department of the Interior manages federal lands and natural resources. It has a dark history of administering policies of Native American genocide, forced assimilation through Indian boarding schools, treaty violations, and land theft. The Bureau of Indian Affairs under DOI has been described as the most corrupt federal agency in history.',
    founded: 'March 3, 1849',
    headquarters: 'Washington, D.C.',
    employees: '70,000+',
    budget: '$18 billion (2024)',
    jurisdiction: 'Federal lands, Native American affairs, natural resources',
    website: 'https://www.doi.gov',
    controversies: [
      'Native American genocide through BIA policies',
      'Indian boarding schools - forced assimilation, abuse, deaths',
      'Treaty violations and land theft',
      'Mismanagement of tribal trust funds (billions unaccounted)',
      'Environmental destruction on federal lands',
      'Oil and gas industry corruption',
      'Endangered species rollbacks',
    ],
    relatedInvestigations: [
      { title: 'Native American Genocide', slug: 'native-american-genocide', severity: 'critical' },
      { title: 'Indian Boarding Schools', slug: 'indian-boarding-schools', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Deb Haaland', position: 'Secretary', href: '/entities/individuals/deb-haaland' },
    ],
  },
  'doj-civil-rights': {
    name: 'DOJ Civil Rights Division',
    acronym: 'CRT',
    type: 'Federal Division',
    riskLevel: 'medium',
    description: 'The Civil Rights Division of the Department of Justice is responsible for enforcing federal civil rights laws. It conducts pattern-or-practice investigations of police departments and can bring cases against civil rights violators. However, its effectiveness has varied dramatically based on administration priorities.',
    founded: '1957',
    headquarters: 'Washington, D.C.',
    employees: '600+',
    budget: 'Part of DOJ budget',
    jurisdiction: 'Civil rights enforcement',
    parentAgency: 'Department of Justice',
    website: 'https://www.justice.gov/crt',
    controversies: [
      'Inconsistent enforcement based on political administration',
      'Pattern-or-practice investigations dropped under Trump',
      'Slow response to police killings',
      'Limited prosecutions of civil rights violators',
      'Consent decrees often weakened or abandoned',
    ],
    relatedInvestigations: [
      { title: 'Police Brutality', slug: 'police-brutality', severity: 'critical' },
      { title: 'Voting Rights', slug: 'voting-rights', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Kristen Clarke', position: 'Assistant Attorney General', href: '/entities/individuals/kristen-clarke' },
    ],
  },
  'dod': {
    name: 'Department of Defense',
    acronym: 'DOD',
    type: 'Cabinet Department',
    riskLevel: 'critical',
    description: 'The Department of Defense is the executive department coordinating all U.S. military branches. It consumes over half of discretionary federal spending, oversees the largest employer in the world, and has been involved in wars, coups, torture programs, and countless civilian deaths. Its budget has never passed a full audit.',
    founded: 'September 18, 1947',
    headquarters: 'The Pentagon, Virginia',
    employees: '2.87 million military + civilian',
    budget: '$886 billion (2024)',
    jurisdiction: 'National defense, military operations',
    website: 'https://www.defense.gov',
    controversies: [
      'Gulf of Tonkin deception leading to Vietnam War',
      'Iraq WMD lies leading to invasion',
      'Abu Ghraib torture program',
      'CIA black sites and rendition',
      'Drone strikes killing civilians',
      'Afghanistan war failure after 20 years',
      'Massive cost overruns and contractor fraud',
      'Never passed a full audit despite trillions in spending',
    ],
    relatedInvestigations: [
      { title: 'Gulf of Tonkin', slug: 'gulf-of-tonkin', severity: 'critical' },
      { title: 'Iraq War', slug: 'iraq-war', severity: 'critical' },
      { title: 'Military Industrial Complex', slug: 'military-industrial-complex', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Lloyd Austin', position: 'Secretary of Defense', href: '/entities/individuals/lloyd-austin' },
    ],
  },
  'us-senate': {
    name: 'United States Senate',
    acronym: 'Senate',
    type: 'Legislative Body',
    riskLevel: 'high',
    description: 'The United States Senate is the upper chamber of Congress. The Senate has used procedural rules like the filibuster to block civil rights legislation, voting rights, and accountability measures for decades. It confirms judges, approves treaties, and has the sole power to try impeachments - powers often wielded to protect the powerful.',
    founded: 'March 4, 1789',
    headquarters: 'U.S. Capitol, Washington, D.C.',
    employees: '100 Senators + thousands of staff',
    budget: '$1 billion+ annually',
    jurisdiction: 'Federal legislation, confirmations, treaties',
    website: 'https://www.senate.gov',
    controversies: [
      'Filibuster blocking civil rights legislation for decades',
      'Refusal to hold vote on Merrick Garland nomination',
      'Acquittal of Trump in impeachment despite evidence',
      'Dark money influence on campaigns',
      'Obstruction of voting rights legislation',
      'Confirmation of unqualified judges',
      'Stock trading on insider knowledge',
    ],
    relatedInvestigations: [
      { title: 'Congressional Obstruction', slug: 'congressional-obstruction', severity: 'high' },
      { title: 'Dark Money', slug: 'dark-money', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Chuck Schumer', position: 'Majority Leader', href: '/entities/individuals/chuck-schumer' },
      { name: 'Mitch McConnell', position: 'Minority Leader', href: '/entities/individuals/mitch-mcconnell' },
    ],
  },
  'dina': {
    name: 'Dirección de Inteligencia Nacional',
    acronym: 'DINA',
    type: 'Secret Police (Dissolved)',
    riskLevel: 'critical',
    description: 'DINA was the Chilean secret police under Augusto Pinochet\'s military dictatorship (1973-1977). It was responsible for systematic torture, assassination, and forced disappearance of political opponents. DINA operated torture centers like Villa Grimaldi and coordinated with Operation Condor, a South American assassination network. DINA assassinated Orlando Letelier in Washington D.C. in 1976.',
    founded: 'June 14, 1974',
    headquarters: 'Santiago, Chile',
    employees: 'Estimated 4,000-5,000 agents',
    budget: 'Classified',
    jurisdiction: 'Chile (with international operations)',
    controversies: [
      'Systematic torture at Villa Grimaldi, Tejas Verdes, and other detention centers',
      'Assassination of Orlando Letelier in Washington D.C. (1976)',
      'Murder of General Carlos Prats in Buenos Aires (1974)',
      'Attempted assassination of Christian Democrat leader Bernardo Leighton in Rome',
      'Coordination with Operation Condor death squads',
      'Forced disappearance of 1,200+ political prisoners',
      'International assassination operations in multiple countries',
      'Use of electric shock, waterboarding, sexual violence as torture methods',
    ],
    relatedInvestigations: [
      { title: 'Operation Condor', slug: 'operation-condor', severity: 'critical' },
      { title: 'Chile Coup', slug: 'chile-coup', severity: 'critical' },
      { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Augusto Pinochet', position: 'Creator, Supreme Commander', href: '/entities/individuals/augusto-pinochet' },
      { name: 'Manuel Contreras', position: 'Director (1974-1977)', href: '/entities/individuals/manuel-contreras' },
    ],
  },
  'savak': {
    name: 'Sāzmān-e Ettelā\'āt va Amniyat-e Keshvar',
    acronym: 'SAVAK',
    type: 'Secret Police (Dissolved)',
    riskLevel: 'critical',
    description: 'SAVAK was the Iranian secret police and intelligence service under Shah Mohammad Reza Pahlavi (1957-1979). Trained and supported by the CIA and Mossad, SAVAK was infamous for brutal torture and suppression of dissent. It is estimated to have killed 100,000+ Iranians through execution, torture, and assassination. SAVAK\'s brutality helped fuel the 1979 Iranian Revolution.',
    founded: '1957',
    headquarters: 'Tehran, Iran',
    employees: 'Estimated 60,000 agents and informers',
    budget: 'Classified (funded by oil revenue)',
    jurisdiction: 'Iran (with international operations)',
    controversies: [
      'CIA and Mossad training and technical assistance',
      'Systematic torture including electric shock, burning, nail extraction',
      'Execution of political dissidents without trial',
      'Surveillance network of 60,000+ informers',
      'Assassinations of opposition figures abroad',
      'Evin Prison - notorious for torture and executions',
      'Suppression of leftist, religious, and democratic movements',
      'Joint operations with Israeli intelligence (Mossad)',
    ],
    relatedInvestigations: [
      { title: 'Iran Coup 1953', slug: 'iran-coup', severity: 'critical' },
      { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
      { title: 'US-Backed Dictators', slug: 'us-backed-dictators', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mohammad Reza Pahlavi', position: 'Shah, Supreme Authority', href: '/entities/individuals/shah-pahlavi' },
    ],
  },
  'oss': {
    name: 'Office of Strategic Services',
    acronym: 'OSS',
    type: 'Intelligence Agency (Dissolved)',
    riskLevel: 'high',
    description: 'The OSS was the wartime intelligence agency of the United States during World War II, the predecessor to the CIA. It conducted espionage, sabotage, and propaganda operations. After WWII, OSS recruited Nazi war criminals through Operation Paperclip and Operation Gladio. OSS veterans founded the CIA in 1947 and brought their covert action methodology with them.',
    founded: 'June 13, 1942',
    headquarters: 'Washington, D.C.',
    employees: '13,000+ at peak',
    budget: 'Classified',
    jurisdiction: 'Global (wartime)',
    controversies: [
      'Operation Paperclip - recruited Nazi scientists and war criminals',
      'Operation Gladio - established "stay-behind" networks that became far-right terror groups',
      'Collaboration with organized crime (Mafia) in Italy',
      'Some agents later implicated in CIA coups and assassinations',
      'Foundation for Operation Mockingbird media infiltration',
      'Post-war transition to Cold War CIA operations',
    ],
    relatedInvestigations: [
      { title: 'Operation Mockingbird', slug: 'operation-mockingbird', severity: 'critical' },
      { title: 'CIA Origins', slug: 'cia-origins', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Allen Dulles', position: 'Bern Station Chief, later CIA Director', href: '/entities/individuals/allen-dulles' },
      { name: 'Frank Wisner', position: 'OSS Officer, later CIA Deputy Director', href: '/entities/individuals/frank-wisner' },
    ],
  },
  'office-of-legal-counsel': {
    name: 'Office of Legal Counsel',
    acronym: 'OLC',
    type: 'DOJ Legal Advisory',
    riskLevel: 'critical',
    description: 'The Office of Legal Counsel provides legal advice to the President and executive branch agencies. OLC opinions have been used to justify torture ("enhanced interrogation"), warrantless surveillance, drone assassinations of American citizens, and presidential immunity from prosecution. The OLC memo stating a sitting president cannot be indicted has shielded presidents from criminal accountability.',
    founded: '1934',
    headquarters: 'Department of Justice, Washington, D.C.',
    employees: '50+ attorneys',
    budget: 'Part of DOJ budget',
    jurisdiction: 'Executive branch legal advice',
    website: 'https://www.justice.gov/olc',
    controversies: [
      'Torture Memos - John Yoo and Jay Bybee authorized "enhanced interrogation" (2002)',
      'Memo stating sitting president cannot be indicted (Mueller investigation barrier)',
      'Authorization of drone strikes on American citizens abroad',
      'STELLAR WIND warrantless surveillance program legal cover',
      'Unitary executive theory expanding presidential power',
      'Legal justification for extraordinary rendition',
      'Opinions shielding executive branch from accountability',
    ],
    relatedInvestigations: [
      { title: 'CIA Torture Program', slug: 'cia-torture', severity: 'critical' },
      { title: 'Presidential Immunity', slug: 'presidential-immunity', severity: 'critical' },
      { title: 'NSA Surveillance', slug: 'nsa-mass-surveillance', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'John Yoo', position: 'Deputy AG, Torture Memo Author', href: '/entities/individuals/john-yoo' },
      { name: 'Jay Bybee', position: 'Assistant AG, Torture Memo Signer', href: '/entities/individuals/jay-bybee' },
    ],
  },
  'supreme-court': {
    name: 'Supreme Court of the United States',
    acronym: 'SCOTUS',
    type: 'Judicial Branch',
    riskLevel: 'critical',
    description: 'The Supreme Court is the highest court in the United States. Recent rulings have granted presidents broad immunity from prosecution, overturned voting rights protections, eliminated abortion rights, and expanded corporate power. Multiple justices face ethics scandals involving unreported gifts, trips, and financial ties to parties before the court. The Court stopped the 2000 Florida recount, effectively selecting George W. Bush as president.',
    founded: 'September 24, 1789',
    headquarters: 'Supreme Court Building, Washington, D.C.',
    employees: '9 Justices + 400 staff',
    budget: '$97 million (2024)',
    jurisdiction: 'Final appellate jurisdiction, constitutional interpretation',
    website: 'https://www.supremecourt.gov',
    controversies: [
      'Bush v. Gore (2000) - Stopped Florida recount, selected Bush as president',
      'Citizens United (2010) - Corporations are people, unlimited dark money',
      'Shelby County (2013) - Gutted Voting Rights Act preclearance',
      'Dobbs (2022) - Overturned Roe v. Wade after 50 years',
      'Trump v. United States (2024) - Broad presidential immunity from prosecution',
      'Clarence Thomas undisclosed gifts from Harlan Crow',
      'Samuel Alito undisclosed trips, flag controversies',
      'Leonard Leo and Federalist Society influence on nominations',
      'Refusal to adopt binding ethics code',
    ],
    relatedInvestigations: [
      { title: 'Supreme Court Ethics', slug: 'scotus-ethics', severity: 'critical' },
      { title: 'Bush v. Gore', slug: 'bush-v-gore', severity: 'critical' },
      { title: 'Dark Money', slug: 'dark-money', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Clarence Thomas', position: 'Associate Justice', href: '/entities/individuals/clarence-thomas' },
      { name: 'Samuel Alito', position: 'Associate Justice', href: '/entities/individuals/samuel-alito' },
      { name: 'John Roberts', position: 'Chief Justice', href: '/entities/individuals/john-roberts' },
    ],
  },
  'capitol-police': {
    name: 'United States Capitol Police',
    acronym: 'USCP',
    type: 'Federal Law Enforcement',
    riskLevel: 'high',
    description: 'The United States Capitol Police is responsible for protecting Congress and the Capitol complex. On January 6, 2021, Capitol Police were overwhelmed by the insurrection, with some officers engaging with rioters while others fought desperately to protect members of Congress. Subsequent investigations revealed intelligence failures, delayed National Guard deployment, and questions about leadership decisions.',
    founded: '1828',
    headquarters: 'U.S. Capitol, Washington, D.C.',
    employees: '2,300+ officers',
    budget: '$602 million (2024)',
    jurisdiction: 'U.S. Capitol grounds',
    controversies: [
      'January 6, 2021 - Capitol breached despite advance intelligence warnings',
      'Delayed response and National Guard deployment',
      'Intelligence failures - warnings not acted upon',
      'Officer suicides following January 6 trauma',
      'Questions about leadership decisions on January 6',
      'Some officers posed for photos with rioters',
      'Video evidence deleted or missing',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Steven Sund', position: 'Chief (resigned Jan 7, 2021)', href: '/entities/individuals/steven-sund' },
    ],
  },
  'atf': {
    name: 'Bureau of Alcohol, Tobacco, Firearms and Explosives',
    acronym: 'ATF',
    type: 'Law Enforcement',
    riskLevel: 'high',
    description: 'The ATF enforces federal laws related to firearms, explosives, and alcohol/tobacco. The agency has been systematically weakened by NRA-backed legislation including the Tiahrt Amendment limiting gun trace data, prohibition on a permanent director for years, and the Protection of Lawful Commerce in Arms Act shielding gun manufacturers. The ATF lacks resources to inspect gun dealers and cannot maintain an electronic searchable database of gun sales.',
    founded: 'July 1, 1972',
    headquarters: 'Washington, D.C.',
    employees: '5,000+',
    budget: '$1.7 billion (2024)',
    jurisdiction: 'Federal firearms, explosives, arson, alcohol/tobacco',
    website: 'https://www.atf.gov',
    controversies: [
      'Tiahrt Amendment - Cannot share gun trace data publicly',
      'Cannot maintain electronic searchable gun sales database',
      'No permanent director for years due to NRA opposition',
      'Waco siege (1993) - 76 deaths including children',
      'Fast and Furious operation (2009-2011) - Guns to Mexican cartels',
      'Systematically underfunded and understaffed',
      'Can only inspect gun dealers once per year on average',
    ],
    relatedInvestigations: [
      { title: 'Gun Violence Epidemic', slug: 'gun-violence', severity: 'critical' },
      { title: 'NRA Capture', slug: 'nra-corruption', severity: 'high' },
    ],
    keyFigures: [],
  },
  'africom': {
    name: 'United States Africa Command',
    acronym: 'AFRICOM',
    type: 'Unified Combatant Command',
    riskLevel: 'high',
    description: 'AFRICOM is responsible for U.S. military operations, exercises, and security cooperation across Africa. It has been criticized for expanding military footprint in Africa, drone strikes, and supporting authoritarian regimes.',
    founded: 'October 1, 2007',
    headquarters: 'Kelley Barracks, Stuttgart, Germany',
    employees: '2,000+',
    budget: '$276 million (2024)',
    jurisdiction: 'African Continent',
    parentAgency: 'Department of Defense',
    website: 'https://www.africom.mil',
    controversies: [
      'Expanding secret military presence across Africa',
      'Drone strikes in Somalia and Libya',
      'Support for authoritarian regimes',
      'Lack of congressional oversight',
      'Niger ambush coverup concerns',
      'Civilian casualty allegations',
    ],
    relatedInvestigations: [
      { title: 'Drone Assassinations', slug: 'drone-assassinations', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Gen. Michael Langley', position: 'Commander' },
    ],
  },
  'army-corps': {
    name: 'U.S. Army Corps of Engineers',
    acronym: 'USACE',
    type: 'Federal Engineering Agency',
    riskLevel: 'medium',
    description: 'The Army Corps of Engineers provides engineering services including dam construction, flood control, and environmental management. It has faced criticism for projects that damage ecosystems and indigenous lands.',
    founded: 'June 16, 1775',
    headquarters: 'Washington, D.C.',
    employees: '37,000+',
    budget: '$8.7 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Defense',
    website: 'https://www.usace.army.mil',
    controversies: [
      'Standing Rock Dakota Access Pipeline permitting',
      'Environmental destruction from dam projects',
      'Louisiana coastal wetland loss',
      'Superfund site contamination',
      'Inadequate levee maintenance before Hurricane Katrina',
    ],
    relatedInvestigations: [
      { title: 'Environmental Crimes', slug: 'environmental-crimes', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Lt. Gen. Scott Spellmon', position: 'Chief of Engineers' },
    ],
  },
  'cfpb': {
    name: 'Consumer Financial Protection Bureau',
    acronym: 'CFPB',
    type: 'Independent Agency',
    riskLevel: 'low',
    description: 'The CFPB protects consumers from unfair financial practices. Created after the 2008 financial crisis, it has faced constant attacks from financial industry and Republican attempts to dismantle it.',
    founded: 'July 21, 2011',
    headquarters: 'Washington, D.C.',
    employees: '1,600+',
    budget: '$641 million (2023)',
    jurisdiction: 'United States',
    website: 'https://www.consumerfinance.gov',
    controversies: [
      'Political attempts to defund and dismantle',
      'Trump appointee Mick Mulvaney gutting enforcement',
      'Industry capture concerns',
      'Supreme Court challenge to funding structure',
    ],
    relatedInvestigations: [
      { title: 'Wall Street Bailout', slug: 'wall-street-bailout', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Rohit Chopra', position: 'Director' },
      { name: 'Mick Mulvaney', position: 'Former Acting Director', href: '/entities/individuals/mick-mulvaney' },
    ],
  },
  'cisa': {
    name: 'Cybersecurity and Infrastructure Security Agency',
    acronym: 'CISA',
    type: 'Federal Agency',
    riskLevel: 'medium',
    description: 'CISA is responsible for protecting critical infrastructure and election security. Its former director Chris Krebs was fired by Trump for affirming the 2020 election was secure.',
    founded: 'November 16, 2018',
    headquarters: 'Arlington, Virginia',
    employees: '3,000+',
    budget: '$2.9 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Homeland Security',
    website: 'https://www.cisa.gov',
    controversies: [
      'Chris Krebs fired for calling 2020 election "most secure"',
      'Political pressure to downplay election security',
      'Foreign interference warnings suppressed',
      'First Amendment concerns over "misinformation" work',
    ],
    relatedInvestigations: [
      { title: 'Election Denial', slug: 'election-denial', severity: 'critical' },
      { title: '2020 Election Overturn', slug: '2020-election-overturn', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Chris Krebs', position: 'Former Director (Fired)', href: '/entities/individuals/chris-krebs' },
      { name: 'Jen Easterly', position: 'Director' },
    ],
  },
  'congress': {
    name: 'United States Congress',
    acronym: 'Congress',
    type: 'Legislative Branch',
    riskLevel: 'critical',
    description: 'The legislative branch of the U.S. federal government, consisting of the Senate and House of Representatives. Congress has oversight authority over executive branch and power of impeachment.',
    founded: 'March 4, 1789',
    headquarters: 'United States Capitol, Washington, D.C.',
    employees: '30,000+',
    budget: '$5.9 billion (2024)',
    jurisdiction: 'United States',
    website: 'https://www.congress.gov',
    controversies: [
      'Failed to convict Trump in two impeachment trials',
      'Partisan gridlock preventing oversight',
      'Members involved in January 6 planning',
      'Stock trading based on insider information',
      'Dark money influencing legislation',
      'Filibuster blocking voting rights legislation',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
      { title: 'Trump Impeachment', slug: 'trump-impeachment', severity: 'critical' },
      { title: 'Democratic Backsliding', slug: 'democratic-backsliding', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Kevin McCarthy', position: 'Former Speaker', href: '/entities/individuals/kevin-mccarthy' },
      { name: 'Mitch McConnell', position: 'Senate Leader', href: '/entities/individuals/mitch-mcconnell' },
    ],
  },
  'department-of-defense': {
    name: 'United States Department of Defense',
    acronym: 'DOD',
    type: 'Federal Executive Department',
    riskLevel: 'critical',
    description: 'The Department of Defense is responsible for coordinating and supervising all agencies and functions of the government directly related to national security and the U.S. Armed Forces.',
    founded: 'September 18, 1947',
    headquarters: 'The Pentagon, Arlington, Virginia',
    employees: '3.2 million+',
    budget: '$886 billion (2024)',
    jurisdiction: 'Global',
    website: 'https://www.defense.gov',
    controversies: [
      'Failed audits - trillions in unaccounted spending',
      'Abu Ghraib torture scandal',
      'Civilian casualties from drone strikes',
      'Military-industrial complex waste',
      'Afghanistan withdrawal chaos',
      'Politicization under Trump',
      'Refusing to call January 6 National Guard',
    ],
    relatedInvestigations: [
      { title: 'Iraq War Crimes', slug: 'iraq-war-crimes', severity: 'critical' },
      { title: 'Drone Assassinations', slug: 'drone-assassinations', severity: 'critical' },
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mark Esper', position: 'Secretary (2019-2020)', href: '/entities/individuals/mark-esper' },
      { name: 'Christopher Miller', position: 'Acting Secretary (2020-2021)' },
    ],
  },
  'department-of-state': {
    name: 'United States Department of State',
    acronym: 'State',
    type: 'Federal Executive Department',
    riskLevel: 'high',
    description: 'The State Department conducts foreign policy and diplomacy. Under Trump, it was hollowed out, politicized, and used to pressure Ukraine leading to the first impeachment.',
    founded: 'July 27, 1789',
    headquarters: 'Harry S. Truman Building, Washington, D.C.',
    employees: '77,000+',
    budget: '$58 billion (2024)',
    jurisdiction: 'Global',
    website: 'https://www.state.gov',
    controversies: [
      'Hollowing out of career diplomats under Trump',
      'Ukraine pressure campaign for political investigations',
      'Pompeo using department for political purposes',
      'Blocking testimony during impeachment',
      'Hillary Clinton email server investigation',
      'Benghazi political exploitation',
    ],
    relatedInvestigations: [
      { title: 'Trump Impeachment', slug: 'trump-impeachment', severity: 'critical' },
      { title: 'Ukraine Pressure Campaign', slug: 'ukraine-extortion', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mike Pompeo', position: 'Secretary (2018-2021)', href: '/entities/individuals/mike-pompeo' },
      { name: 'Rex Tillerson', position: 'Secretary (2017-2018)', href: '/entities/individuals/rex-tillerson' },
      { name: 'Marie Yovanovitch', position: 'Ambassador (Fired)', href: '/entities/individuals/marie-yovanovitch' },
    ],
  },
  'fcc': {
    name: 'Federal Communications Commission',
    acronym: 'FCC',
    type: 'Independent Agency',
    riskLevel: 'high',
    description: 'The FCC regulates communications by radio, television, wire, satellite, and cable. It became controversial for repealing net neutrality and enabling media consolidation.',
    founded: 'June 19, 1934',
    headquarters: 'Washington, D.C.',
    employees: '1,500+',
    budget: '$388 million (2024)',
    jurisdiction: 'United States',
    website: 'https://www.fcc.gov',
    controversies: [
      'Repealing net neutrality protections',
      'Enabling media consolidation',
      'Fake comments in net neutrality proceeding',
      'Industry capture concerns',
      'Failing to address robocall epidemic',
      'Sinclair merger approval attempt',
    ],
    relatedInvestigations: [
      { title: 'Media Consolidation', slug: 'media-consolidation', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Ajit Pai', position: 'Former Chairman', href: '/entities/individuals/ajit-pai' },
    ],
  },
  'fisa-court': {
    name: 'Foreign Intelligence Surveillance Court',
    acronym: 'FISC',
    type: 'Federal Court',
    riskLevel: 'high',
    description: 'The FISA Court is a secret federal court that oversees surveillance warrants against foreign intelligence agents. It operates with minimal transparency and has been criticized as a rubber stamp.',
    founded: 'October 25, 1978',
    headquarters: 'Washington, D.C.',
    employees: 'Classified',
    budget: 'Classified',
    jurisdiction: 'United States',
    controversies: [
      'Approving nearly all government requests (rubber stamp)',
      'Carter Page FISA warrant errors',
      'NSA bulk surveillance authorization',
      'Lack of adversarial process',
      'Secret law interpretations',
      'Edward Snowden revelations on scope',
    ],
    relatedInvestigations: [
      { title: 'Russia Investigation', slug: 'russian-interference', severity: 'critical' },
      { title: 'FBI Surveillance', slug: 'fbi-surveillance', severity: 'high' },
    ],
    keyFigures: [
      { name: 'James Boasberg', position: 'Presiding Judge' },
    ],
  },
  'icc': {
    name: 'International Criminal Court',
    acronym: 'ICC',
    type: 'International Tribunal',
    riskLevel: 'low',
    description: 'The ICC is a permanent international court that prosecutes individuals for genocide, crimes against humanity, war crimes, and aggression. The U.S. has aggressively opposed ICC jurisdiction over American and allied personnel.',
    founded: 'July 1, 2002',
    headquarters: 'The Hague, Netherlands',
    employees: '900+',
    budget: '€169 million (2023)',
    jurisdiction: 'Global (States Parties)',
    website: 'https://www.icc-cpi.int',
    controversies: [
      'U.S. sanctions on ICC prosecutors investigating Afghanistan',
      'Trump administration threats against court',
      'Selective prosecution allegations',
      'Putin arrest warrant',
      'Netanyahu arrest warrant for Gaza',
      'U.S. refuses to ratify Rome Statute',
    ],
    relatedInvestigations: [
      { title: 'Iraq War Crimes', slug: 'iraq-war-crimes', severity: 'critical' },
      { title: 'CIA Assassinations', slug: 'cia-assassinations', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Karim Khan', position: 'Prosecutor' },
      { name: 'Fatou Bensouda', position: 'Former Prosecutor (Sanctioned)' },
    ],
  },
  'metropolitan-police': {
    name: 'Metropolitan Police Department of the District of Columbia',
    acronym: 'MPD',
    type: 'Municipal Police',
    riskLevel: 'high',
    description: 'The MPD is the primary law enforcement agency for Washington, D.C. Officers fought to defend the Capitol on January 6 and have testified about the violence they faced.',
    founded: '1861',
    headquarters: 'Washington, D.C.',
    employees: '3,800+',
    budget: '$580 million (2024)',
    jurisdiction: 'District of Columbia',
    website: 'https://mpdc.dc.gov',
    controversies: [
      'Officers assaulted defending Capitol on January 6',
      'Officer suicides following January 6',
      'Racial profiling allegations',
      'Use of force incidents',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
      { title: 'George Floyd Murder', slug: 'george-floyd-murder', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Michael Fanone', position: 'Officer (Assaulted Jan 6)', href: '/entities/individuals/michael-fanone' },
      { name: 'Daniel Hodges', position: 'Officer (Crushed Jan 6)' },
    ],
  },
  'ministry-of-state-security': {
    name: 'Ministry of State Security (China)',
    acronym: 'MSS',
    type: 'Foreign Intelligence Agency',
    riskLevel: 'critical',
    description: 'The MSS is China\'s intelligence and security agency responsible for counterintelligence, foreign intelligence, and political security. It conducts extensive espionage operations globally.',
    founded: 'July 1983',
    headquarters: 'Beijing, China',
    employees: 'Classified (estimated 100,000+)',
    budget: 'Classified',
    jurisdiction: 'China / Global Operations',
    controversies: [
      'Extensive cyber espionage operations',
      'Intellectual property theft',
      'Operation Fox Hunt targeting dissidents',
      'Uyghur surveillance and repression',
      'Hong Kong crackdown',
      'Infiltration of overseas Chinese communities',
    ],
    relatedInvestigations: [
      { title: 'Foreign Interference', slug: 'foreign-interference', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Chen Wenqing', position: 'Minister' },
    ],
  },
  'national-guard': {
    name: 'National Guard of the United States',
    acronym: 'National Guard',
    type: 'Reserve Military Force',
    riskLevel: 'high',
    description: 'The National Guard is a reserve military force controlled by state governors and can be federalized by the President. Its delayed deployment on January 6 has been investigated.',
    founded: 'December 13, 1636',
    headquarters: 'Arlington, Virginia (National Guard Bureau)',
    employees: '450,000+',
    budget: 'Part of DOD budget',
    jurisdiction: 'United States',
    parentAgency: 'Department of Defense / State Governors',
    website: 'https://www.nationalguard.mil',
    controversies: [
      'Delayed deployment on January 6',
      'Kent State shootings (1970)',
      'George Floyd protest deployments',
      'Lafayette Square clearing',
      'Border deployment under Trump',
      'COVID response failures',
    ],
    relatedInvestigations: [
      { title: 'January 6 Insurrection', slug: 'january-6-insurrection', severity: 'critical' },
      { title: 'Lafayette Square', slug: 'lafayette-square', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Gen. Daniel Hokanson', position: 'Chief' },
    ],
  },
  'nih': {
    name: 'National Institutes of Health',
    acronym: 'NIH',
    type: 'Medical Research Agency',
    riskLevel: 'medium',
    description: 'The NIH is the primary federal agency for biomedical and public health research. It became politicized during COVID-19 with attacks on Dr. Fauci and vaccine development.',
    founded: 'August 1887',
    headquarters: 'Bethesda, Maryland',
    employees: '47,000+',
    budget: '$47.5 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Health and Human Services',
    website: 'https://www.nih.gov',
    controversies: [
      'Political attacks on Dr. Fauci during COVID',
      'Wuhan lab funding controversy',
      'Gain-of-function research debates',
      'Vaccine development politicization',
      'Hydroxychloroquine pressure from White House',
    ],
    relatedInvestigations: [
      { title: 'COVID-19 Response', slug: 'covid-corruption', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Anthony Fauci', position: 'Former NIAID Director', href: '/entities/individuals/anthony-fauci' },
      { name: 'Francis Collins', position: 'Former Director' },
    ],
  },
  'osha': {
    name: 'Occupational Safety and Health Administration',
    acronym: 'OSHA',
    type: 'Regulatory Agency',
    riskLevel: 'medium',
    description: 'OSHA ensures safe and healthful working conditions by setting and enforcing standards. It has been criticized for inadequate enforcement and political interference.',
    founded: 'April 28, 1971',
    headquarters: 'Washington, D.C.',
    employees: '2,100+',
    budget: '$632 million (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Labor',
    website: 'https://www.osha.gov',
    controversies: [
      'Inadequate COVID workplace protections',
      'Understaffing allowing corporate violations',
      'Meat packing plant death coverups',
      'Amazon warehouse safety failures',
      'Political pressure to avoid enforcement',
    ],
    relatedInvestigations: [
      { title: 'COVID-19 Response', slug: 'covid-corruption', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Douglas Parker', position: 'Assistant Secretary' },
    ],
  },
  'saudi-arabia': {
    name: 'Kingdom of Saudi Arabia',
    acronym: 'KSA',
    type: 'Foreign Government',
    riskLevel: 'critical',
    description: 'Saudi Arabia is an absolute monarchy with significant U.S. ties. The Trump and Kushner relationships with the Kingdom, including the Khashoggi murder coverup and $2 billion Kushner investment, raise serious concerns.',
    founded: 'September 23, 1932',
    headquarters: 'Riyadh',
    employees: 'N/A',
    budget: '$320 billion (2024 government)',
    jurisdiction: 'Saudi Arabia',
    controversies: [
      'Jamal Khashoggi murder and dismemberment',
      'Trump and Kushner business ties',
      '$2 billion Saudi investment in Kushner fund',
      'Yemen war humanitarian crisis',
      '9/11 hijacker connections',
      'Human rights abuses',
      'Women\'s rights suppression',
      'LIV Golf sportswashing',
    ],
    relatedInvestigations: [
      { title: 'Khashoggi Murder', slug: 'khashoggi-murder', severity: 'critical' },
      { title: 'Trump Corruption', slug: 'trump-corruption', severity: 'critical' },
      { title: '9/11 Failures', slug: '9-11-failures', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Mohammed bin Salman', position: 'Crown Prince', href: '/entities/individuals/mohammed-bin-salman' },
      { name: 'King Salman', position: 'King of Saudi Arabia' },
    ],
  },
  'united-nations': {
    name: 'United Nations',
    acronym: 'UN',
    type: 'International Organization',
    riskLevel: 'low',
    description: 'The United Nations is an intergovernmental organization promoting international cooperation. The U.S. under Trump withdrew from multiple UN bodies and attacked the organization.',
    founded: 'October 24, 1945',
    headquarters: 'New York City',
    employees: '44,000+',
    budget: '$3.4 billion (2024 regular budget)',
    jurisdiction: 'Global',
    website: 'https://www.un.org',
    controversies: [
      'U.S. withdrawal from Human Rights Council under Trump',
      'U.S. withdrawal from UNESCO',
      'U.S. defunding UNRWA',
      'Security Council veto abuse',
      'Oil-for-Food scandal',
      'Peacekeeping mission abuses',
    ],
    relatedInvestigations: [
      { title: 'Climate Denial', slug: 'climate-denial', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'António Guterres', position: 'Secretary-General' },
      { name: 'Nikki Haley', position: 'Former U.S. Ambassador', href: '/entities/individuals/nikki-haley' },
    ],
  },
  'faa': {
    name: 'Federal Aviation Administration',
    acronym: 'FAA',
    type: 'Federal Regulatory Agency',
    riskLevel: 'critical',
    description: 'The FAA is responsible for regulating civil aviation in the United States. The agency has a documented history of regulatory capture spanning decades, systematically prioritizing industry profits over public safety. Most infamously, the FAA delegated safety certification to Boeing itself through the Organization Designation Authorization (ODA) program, allowing the company to self-certify the fatally flawed 737 MAX aircraft that killed 346 people in two crashes (Lion Air 610 and Ethiopian Airlines 302). Internal FAA whistleblowers and Boeing engineers warned of MCAS system dangers but were silenced or ignored. The "revolving door" between FAA leadership and airline/aerospace industry executives has created systematic failures in oversight. After the MAX crashes, the FAA was the LAST major aviation authority in the world to ground the aircraft, waiting days while China, Europe, and dozens of other countries acted immediately. Congressional investigations revealed FAA officials had been warned of likely future crashes but took no action. The DOJ granted Boeing a sweetheart deferred prosecution agreement that victims\' families called a "travesty of justice."',
    founded: 'August 23, 1958',
    headquarters: 'Washington, D.C.',
    employees: '45,000+',
    budget: '$18.8 billion (2024)',
    jurisdiction: 'United States',
    parentAgency: 'Department of Transportation',
    website: 'https://www.faa.gov',
    controversies: [
      'BOEING 737 MAX CRASHES (2018-2019): 346 people killed in Lion Air 610 and Ethiopian Airlines 302 - FAA certified plane with fatal MCAS flaw',
      'ORGANIZATION DESIGNATION AUTHORIZATION (ODA): Let Boeing employees certify their own planes - fox guarding henhouse',
      'IGNORED MCAS WARNINGS: Internal analysis predicted 15+ crashes over 737 MAX lifetime if not fixed - FAA took no action',
      'LAST TO GROUND MAX: FAA waited days after Ethiopian crash while 50+ countries grounded planes immediately',
      'MARK FORKNER EMAILS: Boeing pilot texted about deceiving FAA on MCAS - "I basically lied to the regulators (unknowingly)"',
      'ED PIERSON WHISTLEBLOWER: Former Boeing manager warned of 737 MAX factory chaos before crashes - ignored by FAA',
      'CURTIS EWBANK WHISTLEBLOWER: FAA engineer said certification was "criminally negligent" - was sidelined',
      'JOE JACOBSEN: FAA engineer who approved MCAS was previously Boeing employee who worked on the system',
      'ALI BAHRAMI: Head of aviation safety came directly from aerospace industry lobbying firm',
      'STEVE DICKSON: Administrator 2019-2022 was Delta Airlines VP - textbook revolving door',
      'PEGGY GILLIGAN: Associate Administrator signed off on MAX certification then retired',
      'EARL LAWRENCE: Exec Director of Aircraft Certification defended ODA after crashes',
      'VALUJET CRASH 1996: FAA ignored maintenance warnings about SabreTech - 110 killed in Everglades crash',
      'TWA 800 CONTROVERSY: 1996 crash investigation still disputed - FAA/NTSB rejected witness accounts',
      'ALASKA AIRLINES 261 (2000): FAA allowed extended inspection intervals on jackscrew - 88 killed',
      'AMERICAN AIRLINES 587 (2001): 265 killed - questions about rudder system certification',
      'COLGAN AIR 3407 (2009): FAA allowed regional carriers to use exhausted, undertrained pilots - 50 killed',
      'ASIANA 214 (2013): Crew over-relied on automation FAA approved without adequate training requirements - 3 killed',
      'BOEING 787 DREAMLINER: Approved despite battery fire risks - multiple groundings after fires',
      'ALASKA AIRLINES DOOR PLUG BLOWOUT (2024): Certification failures continued after MAX - panel blew off midflight',
      'SPIRIT AEROSYSTEMS: FAA failed to oversee Boeing supplier with known quality problems',
      'CHRONIC UNDERSTAFFING: Only 1 FAA inspector per 4,200 planes in some regions',
      'AIR TRAFFIC CONTROLLER SHORTAGE: ATC positions 3,000+ below required levels - nationwide delays',
      'RUNWAY INCURSION COVER-UP: Near-miss collisions increased 25% - FAA slow to release data',
      'AUSTIN NEAR-MISS (2023): FedEx plane came within 100 feet of Southwest jet - ATC error',
      'JFK NEAR-MISS (2023): Multiple runway incursions at major airports',
      'PILOT REST RULES: Failed to enforce adequate rest requirements - fatigue a factor in multiple crashes',
      'DRONE REGULATION DELAYS: Years behind on drone integration - creating safety hazards',
      'MAINTENANCE OUTSOURCING: Allowed critical aircraft maintenance to move offshore with minimal oversight',
      'SOUTHWEST AIRLINES 1380 (2018): Engine failure killed Jennifer Riordan - FAA delayed mandating inspections',
      'CONGRESSIONAL TESTIMONY: FAA officials repeatedly gave misleading testimony about MAX safety',
      'DOJ DEFERRED PROSECUTION: Boeing got sweetheart deal - $2.5B fine, no executives charged',
      'LOBBYING INFLUENCE: Airlines for America spent millions lobbying FAA and Congress',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
      { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
      { title: 'Corporate Influence', slug: 'corporate-influence', severity: 'high' },
      { title: 'Obstruction of Justice', slug: 'obstruction-of-justice', severity: 'critical' },
      { title: 'Whistleblower Persecution', slug: 'whistleblower-persecution', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Mike Whitaker', position: 'Administrator (2023-present)', href: '/entities/individuals/mike-whitaker' },
      { name: 'Steve Dickson', position: 'Former Administrator (2019-2022) - Former Delta Airlines VP', href: '/entities/individuals/steve-dickson' },
      { name: 'Ali Bahrami', position: 'Former Associate Administrator for Aviation Safety - Industry lobbyist', href: '/entities/individuals/ali-bahrami' },
      { name: 'Daniel Elwell', position: 'Former Deputy/Acting Administrator - Airlines for America lobbyist', href: '/entities/individuals/daniel-elwell' },
      { name: 'Michael Huerta', position: 'Former Administrator (2013-2018) - Oversaw MAX certification', href: '/entities/individuals/michael-huerta' },
      { name: 'Randy Babbitt', position: 'Former Administrator (2009-2011) - Former ALPA union head', href: '/entities/individuals/randy-babbitt' },
      { name: 'Marion Blakey', position: 'Former Administrator (2002-2007) - Later Aerospace Industries Association CEO', href: '/entities/individuals/marion-blakey' },
      { name: 'Jane Garvey', position: 'Former Administrator (1997-2002) - First female FAA chief', href: '/entities/individuals/jane-garvey' },
      { name: 'David Hinson', position: 'Former Administrator (1993-1996) - Former McDonnell Douglas exec', href: '/entities/individuals/david-hinson' },
      { name: 'Peggy Gilligan', position: 'Former Associate Administrator - Signed off on MAX certification', href: '/entities/individuals/peggy-gilligan' },
      { name: 'Earl Lawrence', position: 'Former Exec Director of Aircraft Certification - Defended ODA', href: '/entities/individuals/earl-lawrence' },
      { name: 'John Hickey', position: 'Former FAA Deputy Director of Aircraft Certification', href: '/entities/individuals/john-hickey' },
      { name: 'Joe Jacobsen', position: 'FAA Engineer who approved MCAS - Former Boeing employee', href: '/entities/individuals/joe-jacobsen' },
      { name: 'Curtis Ewbank', position: 'FAA Whistleblower - Called MAX certification "criminally negligent"', href: '/entities/individuals/curtis-ewbank' },
      { name: 'Ed Pierson', position: 'Boeing Whistleblower - Warned of 737 MAX factory problems', href: '/entities/individuals/ed-pierson' },
      { name: 'John Barnett', position: 'Boeing Whistleblower - Found dead during lawsuit (2024)', href: '/entities/individuals/john-barnett' },
      { name: 'Sam Mohawk', position: 'Boeing Whistleblower - Reported 787 oxygen system defects', href: '/entities/individuals/sam-mohawk' },
      { name: 'Dennis Muilenburg', position: 'Boeing CEO during MAX crashes - Fired 2019', href: '/entities/individuals/dennis-muilenburg' },
      { name: 'David Calhoun', position: 'Boeing CEO (2020-2024) - Oversaw continued safety failures', href: '/entities/individuals/david-calhoun' },
      { name: 'Kelly Ortberg', position: 'Current Boeing CEO (2024-present)', href: '/entities/individuals/kelly-ortberg' },
      { name: 'Jim McNerney', position: 'Former Boeing CEO (2005-2015) - Prioritized stock buybacks over safety', href: '/entities/individuals/jim-mcnerney' },
      { name: 'Harry Stonecipher', position: 'Former Boeing CEO (2003-2005) - McDonnell Douglas culture', href: '/entities/individuals/harry-stonecipher' },
      { name: 'Phil Condit', position: 'Former Boeing CEO (1996-2003) - Presided over MD merger', href: '/entities/individuals/phil-condit' },
      { name: 'Stan Deal', position: 'Former Boeing Commercial Airplanes CEO - Oversaw MAX production', href: '/entities/individuals/stan-deal' },
      { name: 'Mike Sinnett', position: 'Boeing VP who defended MCAS to media', href: '/entities/individuals/mike-sinnett' },
      { name: 'Mark Forkner', position: 'Boeing Pilot - Charged for deceiving FAA on MCAS', href: '/entities/individuals/mark-forkner' },
      { name: 'Patrick Shanahan', position: 'Former Boeing SVP - Later Deputy Secretary of Defense', href: '/entities/individuals/patrick-shanahan' },
      { name: 'Ray LaHood', position: 'Transportation Secretary (2009-2013) - Oversaw FAA during early ODA expansion', href: '/entities/individuals/ray-lahood' },
      { name: 'Elaine Chao', position: 'Transportation Secretary (2017-2021) - FAA under DOT during MAX crashes', href: '/entities/individuals/elaine-chao' },
      { name: 'Pete Buttigieg', position: 'Transportation Secretary (2021-present) - DOT oversight of FAA', href: '/entities/individuals/pete-buttigieg' },
      { name: 'Nicholas Calio', position: 'Airlines for America CEO - Chief airline industry lobbyist', href: '/entities/individuals/nicholas-calio' },
      { name: 'Ted Cruz', position: 'Senator - Blocked FAA reform legislation', href: '/entities/individuals/ted-cruz' },
      { name: 'Maria Cantwell', position: 'Senator - Senate Commerce Committee Chair', href: '/entities/individuals/maria-cantwell' },
      { name: 'Peter DeFazio', position: 'Former Rep - Led House investigation of Boeing/FAA', href: '/entities/individuals/peter-defazio' },
      { name: 'Sam Graves', position: 'Rep - House Transportation Committee Chair', href: '/entities/individuals/sam-graves' },
      { name: 'Robert Sumwalt', position: 'Former NTSB Chair - Investigated MAX crashes', href: '/entities/individuals/robert-sumwalt' },
      { name: 'Jennifer Homendy', position: 'NTSB Chair - Leading current investigations', href: '/entities/individuals/jennifer-homendy' },
      { name: 'Yared Getachew', position: 'Ethiopian 302 Captain - Fought MCAS until death', href: '/entities/individuals/yared-getachew' },
      { name: 'Bhavye Suneja', position: 'Lion Air 610 Captain - Fought MCAS until death', href: '/entities/individuals/bhavye-suneja' },
      { name: 'Michael Stumo', position: 'Victims Advocate - Lost daughter Samya in Ethiopian crash', href: '/entities/individuals/michael-stumo' },
      { name: 'Nadia Milleron', position: 'Victims Advocate - Lost daughter Samya in Ethiopian crash', href: '/entities/individuals/nadia-milleron' },
      { name: 'Paul Njoroge', position: 'Victims Advocate - Lost wife and three children in Ethiopian crash', href: '/entities/individuals/paul-njoroge' },
      { name: 'Zipporah Kuria', position: 'Victims Advocate - Lost father in Ethiopian crash', href: '/entities/individuals/zipporah-kuria' },
      { name: 'Ike Riffel', position: 'Victims Advocate - Lost son in Ethiopian crash', href: '/entities/individuals/ike-riffel' },
      { name: 'Naoise Ryan', position: 'Victims Advocate - Lost husband Mick in Ethiopian crash', href: '/entities/individuals/naoise-ryan' },
      { name: 'Mark Lindquist', position: 'Victims Attorney - Represents crash families', href: '/entities/individuals/mark-lindquist' },
      { name: 'Robert Clifford', position: 'Victims Attorney - Lead counsel for MAX families', href: '/entities/individuals/robert-clifford' },
      { name: 'Sanjiv Singh', position: 'Lion Air CEO - Blamed pilots instead of Boeing', href: '/entities/individuals/sanjiv-singh' },
      { name: 'Tewolde GebreMariam', position: 'Ethiopian Airlines CEO - Defended pilots, blamed Boeing', href: '/entities/individuals/tewolde-gebremariam' },
      { name: 'Larry Kellner', position: 'Boeing Board Chairman (2019-2024) - Oversaw crisis response', href: '/entities/individuals/larry-kellner' },
      { name: 'Caroline Kennedy', position: 'Boeing Board Member - Ambassador turned Boeing director', href: '/entities/individuals/caroline-kennedy' },
      { name: 'Nikki Haley', position: 'Former Boeing Board Member - Left for presidential run', href: '/entities/individuals/nikki-haley' },
      { name: 'Edmund Giambastiani', position: 'Boeing Board Member - Former Vice Chairman Joint Chiefs', href: '/entities/individuals/edmund-giambastiani' },
      { name: 'Ronald Williams', position: 'Boeing Board Member - Lead Independent Director', href: '/entities/individuals/ronald-williams' },
      { name: 'David Gitlin', position: 'Boeing Board Member - Collins Aerospace connection', href: '/entities/individuals/david-gitlin' },
      { name: 'Erin Keating', position: 'DOJ Prosecutor - Negotiated Boeing deferred prosecution', href: '/entities/individuals/erin-keating' },
      { name: 'Chad Readler', position: 'DOJ Official - Approved Boeing settlement', href: '/entities/individuals/chad-readler' },
      { name: 'Tom Kennedy', position: 'Spirit AeroSystems CEO - Oversaw 737 fuselage production', href: '/entities/individuals/tom-kennedy-spirit' },
      { name: 'Pat Shanahan', position: 'Spirit AeroSystems CEO (2024) - Former Boeing exec', href: '/entities/individuals/patrick-shanahan' },
      { name: 'John Plueger', position: 'Air Lease Corp CEO - Major Boeing customer/enabler', href: '/entities/individuals/john-plueger' },
      { name: 'Tim Clark', position: 'Emirates CEO - Publicly criticized Boeing quality', href: '/entities/individuals/tim-clark' },
      { name: 'Michael O\'Leary', position: 'Ryanair CEO - Major MAX customer, defended Boeing', href: '/entities/individuals/michael-oleary' },
      { name: 'Gary Kelly', position: 'Former Southwest CEO - Largest MAX operator', href: '/entities/individuals/gary-kelly' },
      { name: 'Bob Jordan', position: 'Southwest CEO - Continued MAX orders after crashes', href: '/entities/individuals/bob-jordan' },
      { name: 'Ed Bastian', position: 'Delta CEO - Competitor benefited from Boeing crisis', href: '/entities/individuals/ed-bastian' },
      { name: 'Scott Kirby', position: 'United CEO - Major Boeing customer', href: '/entities/individuals/scott-kirby' },
      { name: 'Robert Isom', position: 'American Airlines CEO - MAX customer', href: '/entities/individuals/robert-isom' },
      { name: 'Doug Parker', position: 'Former American Airlines CEO - Ordered MAX jets', href: '/entities/individuals/doug-parker' },
      { name: 'Tim Keating', position: 'Boeing SVP Government Operations - Chief lobbyist', href: '/entities/individuals/tim-keating' },
      { name: 'Ziad Ojakli', position: 'Former Boeing Government Relations - Ford/Boeing lobbyist', href: '/entities/individuals/ziad-ojakli' },
      { name: 'Ray Conner', position: 'Former Boeing Commercial CEO - Launched MAX program', href: '/entities/individuals/ray-conner' },
      { name: 'Kevin McAllister', position: 'Former Boeing Commercial CEO - Fired during crisis', href: '/entities/individuals/kevin-mcallister' },
      { name: 'John Hamilton', position: 'Boeing VP Engineering - Oversaw MAX certification', href: '/entities/individuals/john-hamilton' },
      { name: 'Keith Leverkuhn', position: 'Boeing 737 MAX Program Manager', href: '/entities/individuals/keith-leverkuhn' },
      { name: 'Michael Teal', position: 'Boeing 737 Chief Engineer during MAX development', href: '/entities/individuals/michael-teal' },
      { name: 'Richard Wyckoff', position: 'Boeing General Counsel - Legal strategy during crisis', href: '/entities/individuals/richard-wyckoff' },
      { name: 'Diana Sands', position: 'Boeing VP Internal Governance - Handled whistleblowers', href: '/entities/individuals/diana-sands' },
      { name: 'Greg Smith', position: 'Boeing CFO - Financial pressure for MAX shortcuts', href: '/entities/individuals/greg-smith-boeing' },
      { name: 'Bill McSherry', position: 'FAA Seattle Office - Front-line MAX oversight', href: '/entities/individuals/bill-mcsherry' },
      { name: 'Dorenda Baker', position: 'FAA Certification Manager - Direct MAX oversight', href: '/entities/individuals/dorenda-baker' },
      { name: 'Christopher Hart', position: 'Former NTSB Chair - Oversaw earlier safety issues', href: '/entities/individuals/christopher-hart' },
      { name: 'Scott Hamilton', position: 'Aviation Analyst - Early MAX critic', href: '/entities/individuals/scott-hamilton' },
      { name: 'Jon Ostrower', position: 'Aviation Journalist - Broke key MAX stories', href: '/entities/individuals/jon-ostrower' },
      { name: 'Dominic Gates', position: 'Seattle Times Reporter - Investigative reporting on Boeing', href: '/entities/individuals/dominic-gates' },
      { name: 'Indonesian KNKT', position: 'Indonesian Crash Investigation Authority', href: '/entities/agencies/knkt' },
      { name: 'Ethiopian AIB', position: 'Ethiopian Accident Investigation Bureau', href: '/entities/agencies/ethiopian-aib' },
      // Additional Boeing Executives
      { name: 'Brian West', position: 'Boeing CFO (2021-present) - Financial oversight during crisis', href: '/entities/individuals/brian-west' },
      { name: 'Ted Colbert', position: 'Boeing Defense CEO - Defense division head', href: '/entities/individuals/ted-colbert' },
      { name: 'Leanne Caret', position: 'Former Boeing Defense CEO - Led defense during MAX crisis', href: '/entities/individuals/leanne-caret' },
      { name: 'J. Michael Luttig', position: 'Boeing Counselor - Former federal judge advising Boeing', href: '/entities/individuals/j-michael-luttig' },
      { name: 'Stephanie Pope', position: 'Boeing Commercial CEO (2024) - Current commercial chief', href: '/entities/individuals/stephanie-pope' },
      { name: 'Elizabeth Lund', position: 'Boeing SVP Quality - Quality failures under her watch', href: '/entities/individuals/elizabeth-lund' },
      { name: 'Howard McKenzie', position: 'Boeing Chief Engineer - Engineering oversight', href: '/entities/individuals/howard-mckenzie' },
      { name: 'Lynn Good', position: 'Boeing Board Member - Duke Energy CEO on Boeing board', href: '/entities/individuals/lynn-good' },
      { name: 'Akhil Johri', position: 'Boeing Board Member - Finance committee oversight', href: '/entities/individuals/akhil-johri' },
      { name: 'Steven Mollenkopf', position: 'Boeing Board Member - Qualcomm CEO on Boeing board', href: '/entities/individuals/steven-mollenkopf' },
      { name: 'Robert Bradway', position: 'Boeing Board Member - Amgen CEO on Boeing board', href: '/entities/individuals/robert-bradway' },
      // More FAA Officials
      { name: 'Billy Nolen', position: 'FAA Acting Administrator (2022) - Between Dickson and Whitaker', href: '/entities/individuals/billy-nolen' },
      { name: 'David Boulter', position: 'FAA Deputy Associate Administrator - Certification oversight', href: '/entities/individuals/david-boulter' },
      { name: 'Lirio Liu', position: 'FAA Deputy Administrator - Second in command', href: '/entities/individuals/lirio-liu' },
      { name: 'Chris Rocheleau', position: 'FAA Acting Deputy Administrator - Leadership during crisis', href: '/entities/individuals/chris-rocheleau' },
      { name: 'Basil Barimo', position: 'Former FAA Director - Later worked for airline lobby group', href: '/entities/individuals/basil-barimo' },
      { name: 'Margaret Gilligan', position: 'Former FAA Executive - Long tenure during ODA expansion', href: '/entities/individuals/margaret-gilligan' },
      { name: 'Tony Ferrante', position: 'FAA Flight Standards Director - Pilot training oversight', href: '/entities/individuals/tony-ferrante' },
      // More Congressional Figures
      { name: 'Roger Wicker', position: 'Senator - Ranking member on Commerce Committee', href: '/entities/individuals/roger-wicker' },
      { name: 'Rick Larsen', position: 'Representative - Boeing district congressman', href: '/entities/individuals/rick-larsen' },
      { name: 'Norm Dicks', position: 'Former Rep - Long-time Boeing advocate', href: '/entities/individuals/norm-dicks' },
      { name: 'Jay Inslee', position: 'WA Governor - State leader during Boeing crisis', href: '/entities/individuals/jay-inslee' },
      { name: 'Patty Murray', position: 'Senator - Washington state, Boeing interests', href: '/entities/individuals/patty-murray' },
      { name: 'Adam Smith', position: 'Rep - Armed Services Chair, Boeing defense', href: '/entities/individuals/adam-smith' },
      { name: 'Denny Heck', position: 'Lt Governor WA - Former congressman, Boeing ties', href: '/entities/individuals/denny-heck' },
      // DOT Officials
      { name: 'Polly Trottenberg', position: 'DOT Deputy Secretary - Senior DOT leadership', href: '/entities/individuals/polly-trottenberg' },
      { name: 'Sean Duffy', position: 'Transportation Secretary (2025) - Current DOT head', href: '/entities/individuals/sean-duffy' },
      // More Whistleblowers
      { name: 'Santiago Paredes', position: 'Boeing Whistleblower - Reported quality issues', href: '/entities/individuals/santiago-paredes' },
      { name: 'Dean Bortniker', position: 'Boeing Whistleblower - Former quality inspector', href: '/entities/individuals/dean-bortniker' },
      { name: 'Cynthia Cole', position: 'Boeing Union Leader - SPEEA representing engineers', href: '/entities/individuals/cynthia-cole' },
      { name: 'Jon Holden', position: 'IAM Union Leader - Representing Boeing machinists', href: '/entities/individuals/jon-holden' },
      // More Airline Executives
      { name: 'Oscar Munoz', position: 'Former United CEO - MAX operator', href: '/entities/individuals/oscar-munoz' },
      { name: 'Richard Anderson', position: 'Former Delta CEO - No MAX orders decision', href: '/entities/individuals/richard-anderson' },
      { name: 'Willie Walsh', position: 'IATA Director General - Industry association head', href: '/entities/individuals/willie-walsh' },
      { name: 'Carsten Spohr', position: 'Lufthansa CEO - Major Boeing customer', href: '/entities/individuals/carsten-spohr' },
      { name: 'Alan Joyce', position: 'Former Qantas CEO - Boeing customer', href: '/entities/individuals/alan-joyce' },
      { name: 'Akbar Al Baker', position: 'Former Qatar Airways CEO - Criticized Boeing quality', href: '/entities/individuals/akbar-al-baker' },
      // International Regulators
      { name: 'Patrick Ky', position: 'EASA Executive Director - Refused to follow FAA on grounding', href: '/entities/individuals/patrick-ky' },
      { name: 'Nurcahyo Utomo', position: 'Indonesian KNKT Investigator - Led Lion Air probe', href: '/entities/individuals/nurcahyo-utomo' },
      { name: 'Amdye Ayalew', position: 'Ethiopian AIB Lead Investigator - Ethiopian 302', href: '/entities/individuals/amdye-ayalew' },
      { name: 'Aaron McCarter', position: 'Transport Canada Official - Reviewed FAA process', href: '/entities/individuals/aaron-mccarter' },
      // Boeing Supplier Executives
      { name: 'Patrick Shanahan Jr', position: 'Spirit AeroSystems CEO - Door plug crisis', href: '/entities/individuals/patrick-shanahan-jr' },
      { name: 'Tom Gentile', position: 'Former Spirit AeroSystems CEO - Quality failures', href: '/entities/individuals/tom-gentile' },
      { name: 'Larry Lawson', position: 'Former Spirit CEO - Built company culture', href: '/entities/individuals/larry-lawson' },
      { name: 'Chris Chadwick', position: 'Collins Aerospace President - Supplier oversight', href: '/entities/individuals/chris-chadwick' },
      { name: 'Gregory Hayes', position: 'RTX CEO - Collins parent company', href: '/entities/individuals/gregory-hayes' },
      // Institutional Investors
      { name: 'Larry Fink', position: 'BlackRock CEO - Major Boeing shareholder', href: '/entities/individuals/larry-fink' },
      { name: 'James Gorman', position: 'Morgan Stanley CEO - Boeing advisor/investor', href: '/entities/individuals/james-gorman' },
      { name: 'Jamie Dimon', position: 'JPMorgan CEO - Major Boeing banking relationship', href: '/entities/individuals/jamie-dimon' },
      // Insurance/Legal
      { name: 'Brian Whelan', position: 'Boeing Insurance Counsel - Claims management', href: '/entities/individuals/brian-whelan' },
      { name: 'David Reyes', position: 'Boeing Aviation Insurance Director', href: '/entities/individuals/david-reyes' },
      // More Victims Advocates
      { name: 'Chris Moore', position: 'Victims Advocate - Lost children in Ethiopian crash', href: '/entities/individuals/chris-moore' },
      { name: 'Clariss Moore', position: 'Victims Advocate - Lost children in Ethiopian crash', href: '/entities/individuals/clariss-moore' },
      { name: 'Adnaan Stumo', position: 'Victims Family - Brother lost in Ethiopian crash', href: '/entities/individuals/adnaan-stumo' },
      { name: 'Tor Stumo', position: 'Victims Family - Son lost in Ethiopian crash', href: '/entities/individuals/tor-stumo' },
      { name: 'Catherine Berthet', position: 'Victims Advocate - Lost daughter in Ethiopian crash', href: '/entities/individuals/catherine-berthet' },
      { name: 'Javier de Luis', position: 'Victims Family - Lost wife in Ethiopian crash', href: '/entities/individuals/javier-de-luis' },
      // Media/Analysts
      { name: 'Peter Robison', position: 'Bloomberg Journalist - "Flying Blind" author', href: '/entities/individuals/peter-robison' },
      { name: 'Natalie Kitroeff', position: 'NY Times Reporter - Boeing investigation', href: '/entities/individuals/natalie-kitroeff' },
      { name: 'David Gelles', position: 'NY Times Reporter - Boeing coverage', href: '/entities/individuals/david-gelles' },
      { name: 'Gregory Travis', position: 'Aviation Engineer/Writer - MCAS analysis', href: '/entities/individuals/gregory-travis' },
      { name: 'Björn Fehrm', position: 'Aviation Analyst - Technical analysis of MAX', href: '/entities/individuals/bjorn-fehrm' },
      // More DOJ Officials
      { name: 'Merrick Garland', position: 'Attorney General - DOJ head during Boeing case', href: '/entities/individuals/merrick-garland' },
      { name: 'Lisa Monaco', position: 'Deputy Attorney General - DOJ criminal enforcement', href: '/entities/individuals/lisa-monaco' },
      { name: 'Kenneth Polite', position: 'Assistant AG Criminal - Boeing prosecution oversight', href: '/entities/individuals/kenneth-polite' },
      // Historical Crashes
      { name: 'ValuJet 592 Victims', position: '110 killed 1996 - FAA ignored warnings', href: '/entities/individuals/valujet-592-victims' },
      { name: 'Alaska 261 Victims', position: '88 killed 2000 - Maintenance oversight failures', href: '/entities/individuals/alaska-261-victims' },
      { name: 'Colgan 3407 Families', position: '50 killed 2009 - Led to pilot rest rules', href: '/entities/individuals/colgan-3407-families' },
      // More Experts/Academics
      { name: 'William McGee', position: 'Aviation Consultant - Consumer advocate', href: '/entities/individuals/william-mcgee' },
      { name: 'Mary Schiavo', position: 'Former DOT IG - Aviation safety critic', href: '/entities/individuals/mary-schiavo' },
      { name: 'John Cox', position: 'Aviation Safety Expert - Former airline captain', href: '/entities/individuals/john-cox' },
      { name: 'Todd Curtis', position: 'AirSafe.com Founder - Safety data analyst', href: '/entities/individuals/todd-curtis' },
      { name: 'Christine Negroni', position: 'Aviation Author - Crash investigator', href: '/entities/individuals/christine-negroni' },
    ],
  },
  'federal-reserve': {
    name: 'Federal Reserve System',
    acronym: 'Fed',
    type: 'Central Bank',
    riskLevel: 'medium',
    description: 'The Federal Reserve is the central banking system of the United States. It controls monetary policy, regulates banks, and serves as lender of last resort. Critics argue it serves Wall Street over Main Street and enables wealth inequality through asset inflation.',
    founded: 'December 23, 1913',
    headquarters: 'Washington, D.C.',
    employees: '23,000+',
    budget: 'Self-funded',
    jurisdiction: 'United States',
    website: 'https://www.federalreserve.gov',
    controversies: [
      '2008 bailout of Wall Street banks',
      'Quantitative easing inflating asset prices',
      'Wealth inequality through monetary policy',
      'Trading scandal among Fed officials',
      'Slow response to inflation 2021-2022',
      'Bank regulation failures before 2008 crisis',
    ],
    relatedInvestigations: [
      { title: 'Wall Street Bailout', slug: 'wall-street-bailout', severity: 'critical' },
      { title: 'Regulatory Capture', slug: 'regulatory-capture', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Jerome Powell', position: 'Chair' },
    ],
  },
  'jsoc': {
    name: 'Joint Special Operations Command',
    acronym: 'JSOC',
    type: 'Military Command',
    riskLevel: 'critical',
    description: 'JSOC is the U.S. military command responsible for special operations missions. It conducts targeted killings, raids, and covert operations worldwide with minimal oversight. JSOC has been implicated in extrajudicial killings, torture, and civilian casualties.',
    founded: '1980',
    headquarters: 'Fort Liberty (formerly Bragg), North Carolina',
    employees: 'Classified',
    budget: 'Classified (estimated billions)',
    jurisdiction: 'Global',
    parentAgency: 'US Special Operations Command',
    controversies: [
      'Extrajudicial killings worldwide',
      'Drone assassination program',
      'Killing of U.S. citizen Anwar al-Awlaki without trial',
      'Night raids causing civilian casualties',
      'Torture and abuse at secret sites',
      'Minimal congressional oversight',
      'Involvement in Yemen operations',
    ],
    relatedInvestigations: [
      { title: 'Drone Assassinations', slug: 'drone-assassinations', severity: 'critical' },
      { title: 'War Crimes', slug: 'war-crimes', severity: 'critical' },
    ],
    keyFigures: [],
  },
  'mi6': {
    name: 'Secret Intelligence Service',
    acronym: 'MI6',
    type: 'Foreign Intelligence Agency',
    riskLevel: 'high',
    description: 'MI6 is the United Kingdom\'s foreign intelligence service. It has been involved in covert operations, regime change, and collaboration with CIA operations worldwide. MI6 was implicated in the Iraq War intelligence failures regarding WMDs.',
    founded: '1909',
    headquarters: 'Vauxhall Cross, London, UK',
    employees: '2,500+ (estimated)',
    budget: 'Classified (part of £3.9B UK intelligence budget)',
    jurisdiction: 'Global (foreign intelligence)',
    website: 'https://www.sis.gov.uk',
    controversies: [
      'Iraq War WMD intelligence failures',
      'Steele dossier on Trump-Russia',
      'Historic involvement in coups (Iran, etc.)',
      'Collaboration with CIA torture program',
      'Extraordinary rendition cooperation',
      'Colonial-era operations',
    ],
    relatedInvestigations: [
      { title: 'Iraq War Lies', slug: 'iraq-war-lies', severity: 'critical' },
      { title: 'CIA Coups', slug: 'cia-coups', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Richard Moore', position: 'Chief (C)' },
    ],
  },
  'knkt': {
    name: 'Komite Nasional Keselamatan Transportasi',
    acronym: 'KNKT',
    type: 'Crash Investigation Agency',
    riskLevel: 'low',
    description: 'KNKT is Indonesia\'s National Transportation Safety Committee, responsible for investigating transportation accidents. The agency led the investigation into Lion Air Flight 610, the first 737 MAX crash, producing a report that exposed the MCAS system and Boeing\'s failure to inform pilots. Their work was crucial in understanding the disaster.',
    founded: '1999',
    headquarters: 'Jakarta, Indonesia',
    employees: '100+',
    budget: 'Unknown',
    jurisdiction: 'Indonesia',
    website: 'https://knkt.dephub.go.id',
    controversies: [
      'LION AIR 610 INVESTIGATION: Exposed MCAS failures',
      'CRUCIAL FINDINGS: Showed Boeing concealed system from pilots',
      'PRESSURE: Faced pressure during investigation',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Nurcahyo Utomo', position: 'Lead Investigator', href: '/entities/individuals/nurcahyo-utomo' },
    ],
  },
  'ethiopian-aib': {
    name: 'Ethiopian Aircraft Accident Investigation Bureau',
    acronym: 'Ethiopian AIB',
    type: 'Crash Investigation Agency',
    riskLevel: 'low',
    description: 'The Ethiopian Aircraft Accident Investigation Bureau conducted the investigation into Ethiopian Airlines Flight 302, the second 737 MAX crash. Their preliminary and final reports confirmed MCAS as the cause and showed pilots followed correct procedures but could not overcome the system. Their work was essential to understanding the full extent of Boeing\'s failures.',
    founded: 'Unknown',
    headquarters: 'Addis Ababa, Ethiopia',
    employees: 'Unknown',
    budget: 'Unknown',
    jurisdiction: 'Ethiopia',
    controversies: [
      'ETHIOPIAN 302 INVESTIGATION: Confirmed MCAS as cause',
      'PILOT EXONERATION: Showed pilots followed procedures correctly',
      'BOEING EXPOSED: Report showed Boeing knew of risks',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Amdye Ayalew', position: 'Lead Investigator', href: '/entities/individuals/amdye-ayalew' },
    ],
  },
  'easa': {
    name: 'European Union Aviation Safety Agency',
    acronym: 'EASA',
    type: 'Aviation Regulatory Agency',
    riskLevel: 'low',
    description: 'EASA is the European Union\'s aviation safety authority. Crucially, EASA refused to blindly follow FAA guidance on the 737 MAX and was among the first regulators to ground the aircraft after Ethiopian 302 - while the FAA waited days. EASA conducted its own independent MAX review before allowing the aircraft to return to European service, demonstrating the FAA\'s failure to lead global aviation safety.',
    founded: '2002',
    headquarters: 'Cologne, Germany',
    employees: '900+',
    budget: '€200 million',
    jurisdiction: 'European Union',
    website: 'https://www.easa.europa.eu',
    controversies: [
      'MAX GROUNDING: Grounded MAX before FAA acted',
      'INDEPENDENT REVIEW: Did own certification review',
      'FAA DISTRUST: Lost confidence in FAA certification',
      'GLOBAL LEADERSHIP: Showed regulators need not defer to FAA',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Patrick Ky', position: 'Executive Director', href: '/entities/individuals/patrick-ky' },
    ],
  },
  'transport-canada': {
    name: 'Transport Canada Civil Aviation',
    acronym: 'TCCA',
    type: 'Aviation Regulatory Agency',
    riskLevel: 'low',
    description: 'Transport Canada Civil Aviation is Canada\'s aviation regulator. Like EASA, Canada conducted its own independent review of the 737 MAX and did not simply accept FAA certification. Canada\'s scrutiny showed the FAA\'s failure had eroded trust among allied nations\' regulators.',
    founded: '1996',
    headquarters: 'Ottawa, Canada',
    employees: '5,000+',
    budget: 'Unknown',
    jurisdiction: 'Canada',
    website: 'https://tc.canada.ca/en/aviation',
    controversies: [
      'MAX REVIEW: Independent certification review',
      'FAA DISTRUST: Lost confidence in FAA process',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
    ],
    keyFigures: [
      { name: 'Aaron McCarter', position: 'Official', href: '/entities/individuals/aaron-mccarter' },
    ],
  },
  'ntsb': {
    name: 'National Transportation Safety Board',
    acronym: 'NTSB',
    type: 'Independent Investigative Agency',
    riskLevel: 'low',
    description: 'The National Transportation Safety Board is an independent U.S. government investigative agency responsible for civil transportation accident investigations. The NTSB investigates aviation, highway, marine, railroad, and pipeline accidents. Unlike the FAA, NTSB has no regulatory authority and cannot be captured by industry. Its investigations of the 737 MAX crashes were critical in exposing Boeing and FAA failures.',
    founded: '1967',
    headquarters: 'Washington, D.C.',
    employees: '400+',
    budget: '$110 million',
    jurisdiction: 'United States',
    website: 'https://www.ntsb.gov/',
    controversies: [
      '737 MAX INVESTIGATION: Critical reports on Boeing and FAA failures',
      'BOEING DOOR BLOWOUT: 2024 investigation of Alaska Airlines incident',
      'INDEPENDENCE: One of few agencies not captured by industry',
      'RECOMMENDATIONS IGNORED: FAA often fails to implement NTSB safety recommendations',
      'CHRONICALLY UNDERFUNDED: Limited resources despite critical safety mission',
    ],
    relatedInvestigations: [
      { title: 'Boeing Safety Crisis', slug: 'boeing-safety-crisis', severity: 'critical' },
      { title: 'Boeing Safety Failures', slug: 'boeing-safety-failures', severity: 'critical' },
      { title: 'Aviation Safety', slug: 'aviation-safety', severity: 'high' },
    ],
    keyFigures: [
      { name: 'Jennifer Homendy', position: 'Chair', href: '/entities/individuals/jennifer-homendy' },
    ],
  },
};

const riskColors = {
  critical: 'text-red-500 bg-red-500/10 border-red-500/30',
  high: 'text-orange-500 bg-orange-500/10 border-orange-500/30',
  medium: 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30',
  low: 'text-green-500 bg-green-500/10 border-green-500/30',
};

const severityColors = {
  critical: 'bg-red-500/20 text-red-400',
  high: 'bg-orange-500/20 text-orange-400',
  medium: 'bg-yellow-500/20 text-yellow-400',
  low: 'bg-green-500/20 text-green-400',
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function AgencyDetailPage({ params }: PageProps) {
  const [slug, setSlug] = useState<string | null>(null);
  
  useEffect(() => {
    params.then((p) => setSlug(p.slug));
  }, [params]);

  if (!slug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-blood-500">Loading...</div>
      </div>
    );
  }

  const agency = agencyData[slug];

  if (!agency) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="border-b border-zinc-800">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <Link 
            href="/entities/agencies"
            className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Agencies
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <Building2 className="w-8 h-8 text-blood-500" />
                <span className={`px-3 py-1 text-xs font-bold uppercase border ${riskColors[agency.riskLevel]}`}>
                  {agency.riskLevel} risk
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-2">
                <GlitchText>{agency.name}</GlitchText>
              </h1>
              <p className="text-xl text-zinc-400">{agency.acronym}</p>
            </div>

            {agency.website && (
              <a
                href={agency.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                Official Website
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blood-500" />
                Overview
              </h2>
              <p className="text-zinc-300 leading-relaxed">{agency.description}</p>
            </motion.section>

            {/* Controversies */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-blood-500" />
                Known Controversies
              </h2>
              <ul className="space-y-3">
                {agency.controversies.map((controversy, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blood-500 mt-2 flex-shrink-0" />
                    <span className="text-zinc-300">{controversy}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Related Investigations */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6"
            >
              <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blood-500" />
                Related Investigations
              </h2>
              <div className="space-y-3">
                {agency.relatedInvestigations.map((investigation) => (
                  <Link
                    key={investigation.slug}
                    href={`/investigations/${investigation.slug}`}
                    className="flex items-center justify-between p-4 bg-zinc-900/50 hover:bg-zinc-800/50 border border-zinc-800 hover:border-blood-500/30 transition-all"
                  >
                    <span className="font-medium">{investigation.title}</span>
                    <span className={`px-2 py-1 text-xs font-bold uppercase ${severityColors[investigation.severity as keyof typeof severityColors]}`}>
                      {investigation.severity}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Facts */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-4">Quick Facts</h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Type</dt>
                  <dd className="text-zinc-300">{agency.type}</dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Founded</dt>
                  <dd className="text-zinc-300 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {agency.founded}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Headquarters</dt>
                  <dd className="text-zinc-300">{agency.headquarters}</dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Employees</dt>
                  <dd className="text-zinc-300 flex items-center gap-2">
                    <Users className="w-4 h-4" />
                    {agency.employees}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Budget</dt>
                  <dd className="text-zinc-300">{agency.budget}</dd>
                </div>
                <div>
                  <dt className="text-xs text-zinc-500 uppercase tracking-wider">Jurisdiction</dt>
                  <dd className="text-zinc-300">{agency.jurisdiction}</dd>
                </div>
                {agency.parentAgency && (
                  <div>
                    <dt className="text-xs text-zinc-500 uppercase tracking-wider">Parent Agency</dt>
                    <dd className="text-zinc-300">{agency.parentAgency}</dd>
                  </div>
                )}
              </dl>
            </motion.div>

            {/* Key Figures */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card p-6"
            >
              <h3 className="text-lg font-bold mb-4">Key Figures</h3>
              <div className="space-y-3">
                {agency.keyFigures.map((figure, index) => (
                  <Link 
                    key={index} 
                    href={figure.href || '#'}
                    className={`flex items-center gap-3 p-3 bg-zinc-900/50 border border-zinc-800 transition-colors ${figure.href ? 'hover:border-blood-500/50 hover:bg-zinc-800/50' : ''}`}
                  >
                    <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Users className="w-5 h-5 text-zinc-500" />
                    </div>
                    <div>
                      <p className={`font-medium ${figure.href ? 'text-blood-500' : ''}`}>{figure.name}</p>
                      <p className="text-xs text-zinc-500">{figure.position}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
