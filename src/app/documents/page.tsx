'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
 FileText, Download, Eye, Filter, Search, Grid, List,
 Calendar, Tag, Lock, Unlock, File, FileImage, FileArchive,
 SortAsc, SortDesc, ChevronDown
} from 'lucide-react';

interface Document {
 id: string;
 title: string;
 description: string;
 type: 'pdf' | 'image' | 'archive' | 'text';
 classification: 'public' | 'restricted' | 'sensitive';
 date: string;
 size: string;
 category: string;
 investigation?: string;
 downloadCount: number;
 previewAvailable: boolean;
}

const documents: Document[] = [
 {
 id: '1',
 title: 'FDA Internal Memo, Drug Approval Fast-Track',
 description: 'Internal communications regarding expedited approval process for experimental treatments.',
 type: 'pdf',
 classification: 'public',
 date: '2024-11-15',
 size: '2.4 MB',
 category: 'Health',
 investigation: 'Project Nightshade',
 downloadCount: 1247,
 previewAvailable: true
 },
 {
 id: '2',
 title: 'Corporate Lobbying Expenditure Report Q3 2024',
 description: 'Detailed breakdown of pharmaceutical industry lobbying spending.',
 type: 'pdf',
 classification: 'public',
 date: '2024-10-28',
 size: '856 KB',
 category: 'Corporate',
 downloadCount: 892,
 previewAvailable: true
 },
 {
 id: '3',
 title: 'EPA Waiver Documentation, Chemical Plant',
 description: 'Environmental protection waivers granted to Meridian Chemical facilities.',
 type: 'archive',
 classification: 'public',
 date: '2024-09-12',
 size: '15.7 MB',
 category: 'Environmental',
 investigation: 'Silent Erosion',
 downloadCount: 567,
 previewAvailable: false
 },
 {
 id: '4',
 title: 'Classified Budget Allocation, Defense Department',
 description: 'Redacted portions of defense spending for black budget programs.',
 type: 'pdf',
 classification: 'restricted',
 date: '2024-08-03',
 size: '1.1 MB',
 category: 'Government',
 downloadCount: 2341,
 previewAvailable: true
 },
 {
 id: '5',
 title: 'Internal Clinical Trial Data, Adverse Events',
 description: 'Unreported adverse events from Phase 3 clinical trials.',
 type: 'pdf',
 classification: 'sensitive',
 date: '2024-07-22',
 size: '4.8 MB',
 category: 'Health',
 investigation: 'Project Nightshade',
 downloadCount: 3156,
 previewAvailable: true
 },
 {
 id: '6',
 title: 'Financial Transaction Records, Shell Companies',
 description: 'Bank records linking offshore entities to domestic operations.',
 type: 'archive',
 classification: 'sensitive',
 date: '2024-06-15',
 size: '23.4 MB',
 category: 'Financial',
 downloadCount: 1834,
 previewAvailable: false
 },
 {
 id: '7',
 title: 'Satellite Imagery, Facility Construction',
 description: 'Time-lapse satellite images showing undisclosed facility construction.',
 type: 'image',
 classification: 'public',
 date: '2024-05-08',
 size: '45.2 MB',
 category: 'Government',
 downloadCount: 723,
 previewAvailable: true
 },
 {
 id: '8',
 title: 'Whistleblower Testimony Transcript',
 description: 'Anonymized testimony from former agency employee.',
 type: 'text',
 classification: 'restricted',
 date: '2024-04-19',
 size: '156 KB',
 category: 'Government',
 downloadCount: 4521,
 previewAvailable: true
 },

 // === Investigation Documents (auto-generated) ===
 {
 id: '9',
 title: 'People of New York v. Trump - 34-Count Felony Indictment',
 description: 'Manhattan DA indictment for falsifying business records to conceal hush money payments.',
 type: 'pdf',
 classification: 'public',
 date: '2023-03-30',
 size: '2.1 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 3795,
 previewAvailable: true
 },
 {
 id: '10',
 title: 'United States v. Trump, Classified Documents Indictment',
 description: 'Federal indictment for willful retention of national defense information and obstruction.',
 type: 'pdf',
 classification: 'public',
 date: '2023-06-08',
 size: '3.4 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 4366,
 previewAvailable: true
 },
 {
 id: '11',
 title: 'United States v. Trump, Jan 6 Superseding Indictment',
 description: 'Federal indictment for conspiracy to defraud the United States and obstruct an official proceeding.',
 type: 'pdf',
 classification: 'public',
 date: '2023-08-01',
 size: '2.8 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 1673,
 previewAvailable: true
 },
 {
 id: '12',
 title: 'State of Georgia v. Trump et al. - RICO Indictment',
 description: 'Fulton County RICO indictment charging 19 defendants with conspiracy to overturn 2020 election.',
 type: 'pdf',
 classification: 'public',
 date: '2023-08-14',
 size: '5.2 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 3418,
 previewAvailable: true
 },
 {
 id: '13',
 title: 'NY AG Civil Fraud Judgment - $454M',
 description: 'Justice Engoron ruling finding persistent fraud in Trump Organization financial statements.',
 type: 'pdf',
 classification: 'public',
 date: '2024-02-16',
 size: '1.9 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 367,
 previewAvailable: true
 },
 {
 id: '14',
 title: 'Mueller Report, Volume I: Russian Interference',
 description: 'Special Counsel investigation into Russian interference in 2016 presidential election.',
 type: 'pdf',
 classification: 'public',
 date: '2019-04-18',
 size: '12.3 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 4851,
 previewAvailable: true
 },
 {
 id: '15',
 title: 'Mueller Report, Volume II: Obstruction of Justice',
 description: 'Analysis of potential obstruction of justice by President Trump, documenting 10 episodes.',
 type: 'pdf',
 classification: 'public',
 date: '2019-04-18',
 size: '8.7 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 4165,
 previewAvailable: true
 },
 {
 id: '16',
 title: 'Trump Financial Disclosure Forms (2015-2024)',
 description: 'Compiled personal financial disclosure forms filed with the Office of Government Ethics.',
 type: 'archive',
 classification: 'public',
 date: '2024-05-15',
 size: '34.5 MB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 3782,
 previewAvailable: false
 },
 {
 id: '17',
 title: 'Access Hollywood Tape Transcript',
 description: 'Complete transcript of 2005 recording released in October 2016.',
 type: 'text',
 classification: 'public',
 date: '2016-10-07',
 size: '45 KB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 5015,
 previewAvailable: true
 },
 {
 id: '18',
 title: 'Trump Org Criminal Tax Fraud Verdict',
 description: 'NY jury conviction on 17 felony counts of tax fraud, conspiracy, and falsifying records.',
 type: 'pdf',
 classification: 'public',
 date: '2022-12-06',
 size: '890 KB',
 category: 'Legal',
 investigation: 'The Trump Criminal Compendium',
 downloadCount: 4514,
 previewAvailable: true
 },
 {
 id: '19',
 title: 'Jeffrey Epstein 2006 Non-Prosecution Agreement',
 description: 'Secret plea deal arranged by Alexander Acosta granting immunity to co-conspirators.',
 type: 'pdf',
 classification: 'public',
 date: '2006-09-24',
 size: '1.2 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 1970,
 previewAvailable: true
 },
 {
 id: '20',
 title: 'Ghislaine Maxwell Trial Transcripts',
 description: 'Complete trial transcripts from SDNY sex trafficking prosecution.',
 type: 'archive',
 classification: 'public',
 date: '2021-12-29',
 size: '45.8 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 4424,
 previewAvailable: false
 },
 {
 id: '21',
 title: 'Epstein Flight Logs (Lolita Express)',
 description: 'FAA flight records for Epstein private aircraft N908JE documenting passengers.',
 type: 'pdf',
 classification: 'public',
 date: '2015-01-05',
 size: '8.9 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 915,
 previewAvailable: true
 },
 {
 id: '22',
 title: 'Virginia Giuffre Deposition',
 description: 'Sealed deposition naming powerful individuals connected to trafficking network.',
 type: 'pdf',
 classification: 'restricted',
 date: '2016-03-21',
 size: '3.4 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 1024,
 previewAvailable: true
 },
 {
 id: '23',
 title: 'Epstein Black Book (Redacted)',
 description: 'Contact book containing names of over 1,000 associates, partially redacted.',
 type: 'pdf',
 classification: 'sensitive',
 date: '2015-01-06',
 size: '2.1 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 1612,
 previewAvailable: true
 },
 {
 id: '24',
 title: 'Medical Examiner Report, Epstein Death',
 description: 'NYC Chief Medical Examiner ruling of suicide by hanging at MCC Manhattan.',
 type: 'pdf',
 classification: 'public',
 date: '2019-08-16',
 size: '567 KB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 1598,
 previewAvailable: true
 },
 {
 id: '25',
 title: 'Epstein Island Property Records',
 description: 'USVI property records for Little St. James and Great St. James islands.',
 type: 'archive',
 classification: 'public',
 date: '2019-07-08',
 size: '15.2 MB',
 category: 'Legal',
 investigation: 'Epstein Network Investigation',
 downloadCount: 1019,
 previewAvailable: false
 },
 {
 id: '26',
 title: 'J6 Select Committee Final Report',
 description: 'Final report of the House Select Committee to Investigate the January 6th Attack, 845 pages.',
 type: 'pdf',
 classification: 'public',
 date: '2022-12-22',
 size: '28.4 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 363,
 previewAvailable: true
 },
 {
 id: '27',
 title: 'DOJ Capitol Breach Investigation Summary',
 description: 'Department of Justice prosecution statistics and case summaries for 1,400+ defendants.',
 type: 'pdf',
 classification: 'public',
 date: '2024-01-06',
 size: '5.6 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 1854,
 previewAvailable: true
 },
 {
 id: '28',
 title: 'Proud Boys Seditious Conspiracy Verdict',
 description: 'Jury verdict convicting Proud Boys leaders of seditious conspiracy.',
 type: 'pdf',
 classification: 'public',
 date: '2023-05-04',
 size: '1.3 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 138,
 previewAvailable: true
 },
 {
 id: '29',
 title: 'Oath Keepers Trial Evidence Compilation',
 description: 'Key evidence exhibits from seditious conspiracy prosecution of Stewart Rhodes et al.',
 type: 'archive',
 classification: 'public',
 date: '2022-11-29',
 size: '67.3 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 854,
 previewAvailable: false
 },
 {
 id: '30',
 title: 'Capitol Police After-Action Report',
 description: 'Internal review of USCP response and security failures on January 6, 2021.',
 type: 'pdf',
 classification: 'restricted',
 date: '2021-04-15',
 size: '4.2 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 1293,
 previewAvailable: true
 },
 {
 id: '31',
 title: 'Secret Service Text Messages (Recovered)',
 description: 'Partially recovered Secret Service communications from January 5-6, 2021.',
 type: 'archive',
 classification: 'sensitive',
 date: '2022-07-14',
 size: '890 KB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 699,
 previewAvailable: false
 },
 {
 id: '32',
 title: 'National Guard Deployment Timeline',
 description: 'Minute-by-minute timeline of requests for and deployment of DC National Guard.',
 type: 'pdf',
 classification: 'public',
 date: '2021-03-03',
 size: '2.1 MB',
 category: 'Government',
 investigation: 'January 6 Insurrection',
 downloadCount: 114,
 previewAvailable: true
 },
 {
 id: '33',
 title: 'CIA MKULTRA Collection (Declassified)',
 description: 'Complete collection of 20,000+ declassified CIA documents on mind control experiments.',
 type: 'archive',
 classification: 'public',
 date: '1977-08-03',
 size: '456 MB',
 category: 'Government',
 investigation: 'MKUltra',
 downloadCount: 4537,
 previewAvailable: false
 },
 {
 id: '34',
 title: 'Church Committee Report, Intelligence Activities',
 description: 'Senate Select Committee findings on illegal CIA domestic activities including MKULTRA.',
 type: 'pdf',
 classification: 'public',
 date: '1975-11-20',
 size: '34.5 MB',
 category: 'Government',
 investigation: 'MKUltra',
 downloadCount: 378,
 previewAvailable: true
 },
 {
 id: '35',
 title: 'Dr. Sidney Gottlieb Testimony',
 description: 'Congressional testimony of MKULTRA program director regarding LSD experiments.',
 type: 'text',
 classification: 'public',
 date: '1977-09-21',
 size: '234 KB',
 category: 'Government',
 investigation: 'MKUltra',
 downloadCount: 2128,
 previewAvailable: true
 },
 {
 id: '36',
 title: 'Subproject 68 - Dr. Ewen Cameron',
 description: 'Declassified records of psychic driving experiments at Allan Memorial Institute, Montreal.',
 type: 'pdf',
 classification: 'public',
 date: '1977-08-03',
 size: '12.8 MB',
 category: 'Government',
 investigation: 'MKUltra',
 downloadCount: 2709,
 previewAvailable: true
 },
 {
 id: '37',
 title: 'FBI COINTELPRO Files (Declassified)',
 description: 'Declassified FBI files documenting counterintelligence programs targeting domestic organizations.',
 type: 'archive',
 classification: 'public',
 date: '1971-03-08',
 size: '234 MB',
 category: 'Government',
 investigation: 'COINTELPRO',
 downloadCount: 1004,
 previewAvailable: false
 },
 {
 id: '38',
 title: 'Church Committee, COINTELPRO Findings',
 description: 'Senate committee report on FBI COINTELPRO operations against civil rights and antiwar movements.',
 type: 'pdf',
 classification: 'public',
 date: '1976-04-28',
 size: '18.9 MB',
 category: 'Government',
 investigation: 'COINTELPRO',
 downloadCount: 210,
 previewAvailable: true
 },
 {
 id: '39',
 title: 'FBI Memo, MLK Suicide Letter',
 description: 'Declassified FBI letter sent to Martin Luther King Jr. encouraging his suicide.',
 type: 'image',
 classification: 'public',
 date: '1964-11-21',
 size: '2.3 MB',
 category: 'Government',
 investigation: 'COINTELPRO',
 downloadCount: 646,
 previewAvailable: true
 },
 {
 id: '40',
 title: 'Fred Hampton Raid, Internal FBI Documents',
 description: 'FBI planning documents for December 4, 1969 raid that killed Black Panther leader.',
 type: 'pdf',
 classification: 'public',
 date: '1969-12-04',
 size: '5.6 MB',
 category: 'Government',
 investigation: 'COINTELPRO',
 downloadCount: 5085,
 previewAvailable: true
 },
 {
 id: '41',
 title: 'Ad Hoc Advisory Panel Final Report',
 description: 'HEW panel report condemning the Tuskegee Syphilis Study as ethically unjustified.',
 type: 'pdf',
 classification: 'public',
 date: '1973-04-28',
 size: '4.5 MB',
 category: 'Health',
 investigation: 'Tuskegee Experiment',
 downloadCount: 4353,
 previewAvailable: true
 },
 {
 id: '42',
 title: 'Original Study Documentation (1932-1972)',
 description: 'USPHS records from 40-year study of untreated syphilis in African American men.',
 type: 'archive',
 classification: 'public',
 date: '1972-07-25',
 size: '89.3 MB',
 category: 'Health',
 investigation: 'Tuskegee Experiment',
 downloadCount: 272,
 previewAvailable: false
 },
 {
 id: '43',
 title: 'Bill Clinton Presidential Apology',
 description: 'Transcript and recording of presidential apology to Tuskegee study survivors.',
 type: 'text',
 classification: 'public',
 date: '1997-05-16',
 size: '156 KB',
 category: 'Health',
 investigation: 'Tuskegee Experiment',
 downloadCount: 1206,
 previewAvailable: true
 },
 {
 id: '44',
 title: 'Snowden NSA Slides, PRISM Program',
 description: 'Leaked NSA slides describing PRISM surveillance program collecting data from tech companies.',
 type: 'image',
 classification: 'public',
 date: '2013-06-06',
 size: '23.4 MB',
 category: 'Government',
 investigation: 'NSA Mass Surveillance',
 downloadCount: 1709,
 previewAvailable: true
 },
 {
 id: '45',
 title: 'FISA Court Order, Verizon Metadata Collection',
 description: 'Classified court order requiring Verizon to provide all call detail records to NSA.',
 type: 'pdf',
 classification: 'public',
 date: '2013-06-05',
 size: '890 KB',
 category: 'Government',
 investigation: 'NSA Mass Surveillance',
 downloadCount: 2423,
 previewAvailable: true
 },
 {
 id: '46',
 title: 'NSA Inspector General Report, Stellar Wind',
 description: 'IG report on warrantless surveillance program authorized after September 11, 2001.',
 type: 'pdf',
 classification: 'restricted',
 date: '2009-03-24',
 size: '6.7 MB',
 category: 'Government',
 investigation: 'NSA Mass Surveillance',
 downloadCount: 3534,
 previewAvailable: true
 },
 {
 id: '47',
 title: 'XKeyscore Training Slides',
 description: 'Leaked NSA training materials for XKeyscore real-time internet surveillance system.',
 type: 'pdf',
 classification: 'public',
 date: '2013-07-31',
 size: '15.3 MB',
 category: 'Government',
 investigation: 'NSA Mass Surveillance',
 downloadCount: 146,
 previewAvailable: true
 },
 {
 id: '48',
 title: 'USA FREEDOM Act Legislative History',
 description: 'Congressional record of NSA reform legislation ending bulk telephone metadata collection.',
 type: 'pdf',
 classification: 'public',
 date: '2015-06-02',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'NSA Mass Surveillance',
 downloadCount: 4519,
 previewAvailable: true
 },
 {
 id: '49',
 title: 'Tower Commission Report',
 description: 'Presidential review board findings on Iran-Contra arms sales and diversion of funds.',
 type: 'pdf',
 classification: 'public',
 date: '1987-02-26',
 size: '18.7 MB',
 category: 'Government',
 investigation: 'Iran-Contra Affair',
 downloadCount: 2199,
 previewAvailable: true
 },
 {
 id: '50',
 title: 'Walsh Independent Counsel Final Report',
 description: 'Six-year investigation report on Iran-Contra criminal proceedings.',
 type: 'pdf',
 classification: 'public',
 date: '1993-08-04',
 size: '45.2 MB',
 category: 'Government',
 investigation: 'Iran-Contra Affair',
 downloadCount: 2623,
 previewAvailable: true
 },
 {
 id: '51',
 title: 'Oliver North Congressional Testimony',
 description: 'Transcript of Lt. Col. North testimony before joint congressional committees.',
 type: 'text',
 classification: 'public',
 date: '1987-07-07',
 size: '567 KB',
 category: 'Government',
 investigation: 'Iran-Contra Affair',
 downloadCount: 3348,
 previewAvailable: true
 },
 {
 id: '52',
 title: 'CIA Inspector General Report, Contra Drug Links',
 description: 'IG investigation into allegations of CIA-Contra drug trafficking connections.',
 type: 'pdf',
 classification: 'public',
 date: '1998-01-29',
 size: '8.9 MB',
 category: 'Government',
 investigation: 'Iran-Contra Affair',
 downloadCount: 2106,
 previewAvailable: true
 },
 {
 id: '53',
 title: 'Nixon White House Tapes (Transcripts)',
 description: 'Transcripts of secretly recorded Oval Office conversations including smoking gun tape.',
 type: 'archive',
 classification: 'public',
 date: '1974-08-05',
 size: '123 MB',
 category: 'Government',
 investigation: 'Watergate',
 downloadCount: 4677,
 previewAvailable: false
 },
 {
 id: '54',
 title: 'Senate Watergate Committee Final Report',
 description: 'Select Committee on Presidential Campaign Activities final report.',
 type: 'pdf',
 classification: 'public',
 date: '1974-06-27',
 size: '34.5 MB',
 category: 'Government',
 investigation: 'Watergate',
 downloadCount: 1581,
 previewAvailable: true
 },
 {
 id: '55',
 title: 'Articles of Impeachment, Richard Nixon',
 description: 'House Judiciary Committee approved articles of impeachment.',
 type: 'pdf',
 classification: 'public',
 date: '1974-07-27',
 size: '456 KB',
 category: 'Government',
 investigation: 'Watergate',
 downloadCount: 1959,
 previewAvailable: true
 },
 {
 id: '56',
 title: 'Deep Throat FBI Files',
 description: 'FBI files related to W. Mark Felt (Deep Throat) and Watergate investigation.',
 type: 'archive',
 classification: 'public',
 date: '2005-05-31',
 size: '12.8 MB',
 category: 'Government',
 investigation: 'Watergate',
 downloadCount: 3248,
 previewAvailable: false
 },
 {
 id: '57',
 title: 'Purdue Pharma DOJ Settlement Agreement',
 description: '$8.3 billion settlement for criminal and civil liability related to OxyContin marketing.',
 type: 'pdf',
 classification: 'public',
 date: '2020-10-21',
 size: '3.4 MB',
 category: 'Health',
 investigation: 'Opioid Crisis',
 downloadCount: 2885,
 previewAvailable: true
 },
 {
 id: '58',
 title: 'Sackler Family Deposition Transcripts',
 description: 'Deposition testimony of Sackler family members regarding OxyContin marketing decisions.',
 type: 'archive',
 classification: 'public',
 date: '2019-09-12',
 size: '67.8 MB',
 category: 'Health',
 investigation: 'Opioid Crisis',
 downloadCount: 3346,
 previewAvailable: false
 },
 {
 id: '59',
 title: 'McKinsey Consulting Reports for Purdue',
 description: 'Internal McKinsey documents advising Purdue on strategies to boost OxyContin sales.',
 type: 'pdf',
 classification: 'public',
 date: '2019-02-01',
 size: '23.4 MB',
 category: 'Health',
 investigation: 'Opioid Crisis',
 downloadCount: 2932,
 previewAvailable: true
 },
 {
 id: '60',
 title: 'FDA OxyContin Approval Records',
 description: 'FDA review documents for original 1995 OxyContin approval and labeling decisions.',
 type: 'pdf',
 classification: 'public',
 date: '1995-12-28',
 size: '8.9 MB',
 category: 'Health',
 investigation: 'Opioid Crisis',
 downloadCount: 4812,
 previewAvailable: true
 },
 {
 id: '61',
 title: 'CDC Opioid Prescribing Guidelines',
 description: 'CDC guidelines responding to epidemic of opioid overdose deaths.',
 type: 'pdf',
 classification: 'public',
 date: '2016-03-15',
 size: '2.3 MB',
 category: 'Health',
 investigation: 'Opioid Crisis',
 downloadCount: 659,
 previewAvailable: true
 },
 {
 id: '62',
 title: 'EPA Emergency Order, Flint Michigan',
 description: 'EPA emergency administrative order finding imminent health hazard in Flint water supply.',
 type: 'pdf',
 classification: 'public',
 date: '2016-01-21',
 size: '1.8 MB',
 category: 'Environmental',
 investigation: 'Flint Water Crisis',
 downloadCount: 2871,
 previewAvailable: true
 },
 {
 id: '63',
 title: 'Michigan Civil Rights Commission Report',
 description: 'Finding that Flint water crisis was result of systemic racism.',
 type: 'pdf',
 classification: 'public',
 date: '2017-02-17',
 size: '5.6 MB',
 category: 'Environmental',
 investigation: 'Flint Water Crisis',
 downloadCount: 1708,
 previewAvailable: true
 },
 {
 id: '64',
 title: 'Lead Testing Results, Flint Residences',
 description: 'Virginia Tech research team water testing results showing dangerous lead levels.',
 type: 'archive',
 classification: 'public',
 date: '2015-09-01',
 size: '34.5 MB',
 category: 'Environmental',
 investigation: 'Flint Water Crisis',
 downloadCount: 646,
 previewAvailable: false
 },
 {
 id: '65',
 title: 'Criminal Indictments, Flint Officials',
 description: 'Criminal charges against Michigan Governor Snyder and 8 other officials.',
 type: 'pdf',
 classification: 'public',
 date: '2021-01-14',
 size: '2.3 MB',
 category: 'Environmental',
 investigation: 'Flint Water Crisis',
 downloadCount: 2468,
 previewAvailable: true
 },
 {
 id: '66',
 title: 'Boeing 737 MAX MCAS Design Documents',
 description: 'Internal Boeing documents on Maneuvering Characteristics Augmentation System design decisions.',
 type: 'pdf',
 classification: 'public',
 date: '2019-03-27',
 size: '12.3 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 1078,
 previewAvailable: true
 },
 {
 id: '67',
 title: 'Lion Air 610 Crash Investigation Report',
 description: 'Indonesian KNKT final report on October 2018 737 MAX crash killing 189.',
 type: 'pdf',
 classification: 'public',
 date: '2019-10-25',
 size: '18.9 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 1916,
 previewAvailable: true
 },
 {
 id: '68',
 title: 'Ethiopian Airlines 302 Accident Report',
 description: 'Ethiopian Accident Investigation Bureau report on March 2019 crash killing 157.',
 type: 'pdf',
 classification: 'public',
 date: '2020-03-09',
 size: '15.6 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 3617,
 previewAvailable: true
 },
 {
 id: '69',
 title: 'Boeing Internal Messages, Employee Concerns',
 description: 'Internal communications showing employees raised safety concerns about 737 MAX.',
 type: 'archive',
 classification: 'public',
 date: '2020-01-09',
 size: '8.4 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 529,
 previewAvailable: false
 },
 {
 id: '70',
 title: 'FAA Certification Review - 737 MAX',
 description: 'DOT IG report on FAA certification process and delegation to Boeing.',
 type: 'pdf',
 classification: 'public',
 date: '2020-02-11',
 size: '6.7 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 827,
 previewAvailable: true
 },
 {
 id: '71',
 title: 'Boeing Deferred Prosecution Agreement',
 description: 'DOJ agreement resolving criminal charge of conspiracy to defraud the FAA.',
 type: 'pdf',
 classification: 'public',
 date: '2021-01-07',
 size: '1.2 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 3837,
 previewAvailable: true
 },
 {
 id: '72',
 title: 'Alaska Airlines 1282 Door Plug Failure Report',
 description: 'NTSB preliminary report on January 2024 mid-flight door plug blowout.',
 type: 'pdf',
 classification: 'public',
 date: '2024-02-06',
 size: '4.5 MB',
 category: 'Corporate',
 investigation: 'Boeing Safety Crisis',
 downloadCount: 4007,
 previewAvailable: true
 },
 {
 id: '73',
 title: 'CIA Family Jewels (Declassified)',
 description: 'Compilation of CIA illegal activities including media manipulation operations.',
 type: 'archive',
 classification: 'public',
 date: '2007-06-25',
 size: '67.8 MB',
 category: 'Government',
 investigation: 'Operation Mockingbird',
 downloadCount: 213,
 previewAvailable: false
 },
 {
 id: '74',
 title: 'Carl Bernstein, CIA and the Media',
 description: 'Rolling Stone investigation documenting CIA relationships with American journalists.',
 type: 'pdf',
 classification: 'public',
 date: '1977-10-20',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'Operation Mockingbird',
 downloadCount: 960,
 previewAvailable: true
 },
 {
 id: '75',
 title: 'Church Committee, CIA Media Operations',
 description: 'Senate committee findings on CIA influence over domestic and foreign media outlets.',
 type: 'pdf',
 classification: 'public',
 date: '1976-04-26',
 size: '8.9 MB',
 category: 'Government',
 investigation: 'Operation Mockingbird',
 downloadCount: 299,
 previewAvailable: true
 },
 {
 id: '76',
 title: 'NSA Declassified Gulf of Tonkin Documents',
 description: 'NSA historical study revealing that second Gulf of Tonkin incident never occurred.',
 type: 'pdf',
 classification: 'public',
 date: '2005-11-30',
 size: '12.3 MB',
 category: 'Government',
 investigation: 'Gulf of Tonkin',
 downloadCount: 2395,
 previewAvailable: true
 },
 {
 id: '77',
 title: 'Pentagon Papers, Vietnam Decisionmaking',
 description: 'McNamara-commissioned study of US political-military involvement in Vietnam 1945-1967.',
 type: 'archive',
 classification: 'public',
 date: '1971-06-13',
 size: '234 MB',
 category: 'Government',
 investigation: 'Gulf of Tonkin',
 downloadCount: 2711,
 previewAvailable: false
 },
 {
 id: '78',
 title: 'Gulf of Tonkin Resolution',
 description: 'Joint resolution authorizing military force in Southeast Asia without declaration of war.',
 type: 'pdf',
 classification: 'public',
 date: '1964-08-10',
 size: '234 KB',
 category: 'Government',
 investigation: 'Gulf of Tonkin',
 downloadCount: 1928,
 previewAvailable: true
 },
 {
 id: '79',
 title: 'Executive Order 9066',
 description: 'Presidential order authorizing internment of 120,000 Japanese Americans during WWII.',
 type: 'pdf',
 classification: 'public',
 date: '1942-02-19',
 size: '345 KB',
 category: 'Government',
 investigation: 'Japanese American Internment',
 downloadCount: 427,
 previewAvailable: true
 },
 {
 id: '80',
 title: 'Commission on Wartime Relocation Report',
 description: 'Personal Justice Denied: findings that internment was motivated by racial prejudice.',
 type: 'pdf',
 classification: 'public',
 date: '1983-02-24',
 size: '15.6 MB',
 category: 'Government',
 investigation: 'Japanese American Internment',
 downloadCount: 3669,
 previewAvailable: true
 },
 {
 id: '81',
 title: 'Korematsu v. United States, Dissent',
 description: 'Justice Murphy dissent calling internment a legalization of racism.',
 type: 'pdf',
 classification: 'public',
 date: '1944-12-18',
 size: '890 KB',
 category: 'Government',
 investigation: 'Japanese American Internment',
 downloadCount: 1942,
 previewAvailable: true
 },
 {
 id: '82',
 title: 'Nixon Aide John Ehrlichman Interview',
 description: 'Admission that war on drugs targeted Black communities and antiwar left.',
 type: 'text',
 classification: 'public',
 date: '2016-03-22',
 size: '89 KB',
 category: 'Government',
 investigation: 'War on Drugs',
 downloadCount: 2498,
 previewAvailable: true
 },
 {
 id: '83',
 title: 'CIA Inspector General, Drug Trafficking',
 description: 'Report on CIA involvement with drug traffickers during Contra operations.',
 type: 'pdf',
 classification: 'public',
 date: '1998-01-29',
 size: '23.4 MB',
 category: 'Government',
 investigation: 'War on Drugs',
 downloadCount: 4705,
 previewAvailable: true
 },
 {
 id: '84',
 title: 'DOJ Sentencing Disparity Analysis',
 description: 'Analysis of 100:1 crack-to-powder cocaine sentencing disparity and racial impact.',
 type: 'pdf',
 classification: 'public',
 date: '2002-05-01',
 size: '5.6 MB',
 category: 'Government',
 investigation: 'War on Drugs',
 downloadCount: 4690,
 previewAvailable: true
 },
 {
 id: '85',
 title: 'SEC v. Enron, Complaint and Findings',
 description: 'SEC enforcement action documenting massive financial fraud at Enron Corporation.',
 type: 'pdf',
 classification: 'public',
 date: '2002-07-08',
 size: '4.5 MB',
 category: 'Financial',
 investigation: 'Enron Scandal',
 downloadCount: 969,
 previewAvailable: true
 },
 {
 id: '86',
 title: 'Enron Internal Memos, California Energy Crisis',
 description: 'Internal communications showing deliberate manipulation of California energy markets.',
 type: 'archive',
 classification: 'public',
 date: '2002-05-06',
 size: '34.5 MB',
 category: 'Financial',
 investigation: 'Enron Scandal',
 downloadCount: 2404,
 previewAvailable: false
 },
 {
 id: '87',
 title: 'Arthur Andersen Obstruction Indictment',
 description: 'Federal indictment for obstruction of justice in destroying Enron audit documents.',
 type: 'pdf',
 classification: 'public',
 date: '2002-03-14',
 size: '1.2 MB',
 category: 'Financial',
 investigation: 'Enron Scandal',
 downloadCount: 4789,
 previewAvailable: true
 },
 {
 id: '88',
 title: 'Sherron Watkins Memo to Ken Lay',
 description: 'Whistleblower memo warning of accounting irregularities that could implode Enron.',
 type: 'text',
 classification: 'public',
 date: '2001-08-15',
 size: '123 KB',
 category: 'Financial',
 investigation: 'Enron Scandal',
 downloadCount: 4760,
 previewAvailable: true
 },
 {
 id: '89',
 title: 'Financial Crisis Inquiry Commission Report',
 description: 'National commission findings that the crisis was avoidable, caused by failures in regulation and Wall Street.',
 type: 'pdf',
 classification: 'public',
 date: '2011-01-27',
 size: '28.4 MB',
 category: 'Financial',
 investigation: '2008 Financial Crisis',
 downloadCount: 4162,
 previewAvailable: true
 },
 {
 id: '90',
 title: 'Senate PSI Report, Wall Street and the Financial Crisis',
 description: 'Levin-Coburn investigation of Goldman Sachs, Deutsche Bank, and rating agencies.',
 type: 'pdf',
 classification: 'public',
 date: '2011-04-13',
 size: '45.2 MB',
 category: 'Financial',
 investigation: '2008 Financial Crisis',
 downloadCount: 3162,
 previewAvailable: true
 },
 {
 id: '91',
 title: 'AIG Bailout Terms and Counterparty Payments',
 description: 'Federal Reserve disclosure of $182 billion AIG bailout and payments to Goldman Sachs et al.',
 type: 'pdf',
 classification: 'public',
 date: '2009-03-15',
 size: '6.7 MB',
 category: 'Financial',
 investigation: '2008 Financial Crisis',
 downloadCount: 270,
 previewAvailable: true
 },
 {
 id: '92',
 title: 'Goldman Sachs Abacus CDO SEC Settlement',
 description: 'SEC settlement for misleading investors in synthetic CDO tied to mortgage market.',
 type: 'pdf',
 classification: 'public',
 date: '2010-07-15',
 size: '2.3 MB',
 category: 'Financial',
 investigation: '2008 Financial Crisis',
 downloadCount: 1158,
 previewAvailable: true
 },
 {
 id: '93',
 title: 'EPA Notice of Violation, VW Clean Air Act',
 description: 'EPA findings that VW installed defeat devices in 11 million diesel vehicles worldwide.',
 type: 'pdf',
 classification: 'public',
 date: '2015-09-18',
 size: '3.4 MB',
 category: 'Corporate',
 investigation: 'Volkswagen Emissions Scandal',
 downloadCount: 628,
 previewAvailable: true
 },
 {
 id: '94',
 title: 'VW Plea Agreement, Criminal Fraud',
 description: 'Volkswagen guilty plea to conspiracy, obstruction, and Clean Air Act violations.',
 type: 'pdf',
 classification: 'public',
 date: '2017-03-10',
 size: '2.1 MB',
 category: 'Corporate',
 investigation: 'Volkswagen Emissions Scandal',
 downloadCount: 458,
 previewAvailable: true
 },
 {
 id: '95',
 title: 'West Virginia University Emissions Testing',
 description: 'Original research discovering discrepancy between lab and real-world emissions.',
 type: 'pdf',
 classification: 'public',
 date: '2014-05-15',
 size: '4.5 MB',
 category: 'Corporate',
 investigation: 'Volkswagen Emissions Scandal',
 downloadCount: 4347,
 previewAvailable: true
 },
 {
 id: '96',
 title: 'CFPB Consent Order, Fake Accounts',
 description: 'CFPB enforcement action for creation of millions of unauthorized customer accounts.',
 type: 'pdf',
 classification: 'public',
 date: '2016-09-08',
 size: '1.8 MB',
 category: 'Financial',
 investigation: 'Wells Fargo Fraud',
 downloadCount: 4561,
 previewAvailable: true
 },
 {
 id: '97',
 title: 'Senate Banking Committee Hearing, Stumpf',
 description: 'Transcript of CEO John Stumpf testimony on unauthorized account creation scandal.',
 type: 'text',
 classification: 'public',
 date: '2016-09-20',
 size: '345 KB',
 category: 'Financial',
 investigation: 'Wells Fargo Fraud',
 downloadCount: 4050,
 previewAvailable: true
 },
 {
 id: '98',
 title: 'OCC $500M Penalty Assessment',
 description: 'OCC civil money penalty for unsafe and unsound practices in auto lending and mortgage rate locks.',
 type: 'pdf',
 classification: 'public',
 date: '2018-04-20',
 size: '2.3 MB',
 category: 'Financial',
 investigation: 'Wells Fargo Fraud',
 downloadCount: 3229,
 previewAvailable: true
 },
 {
 id: '99',
 title: 'Senate Intelligence Committee Torture Report',
 description: 'Executive summary of 6,700-page study on CIA enhanced interrogation program.',
 type: 'pdf',
 classification: 'public',
 date: '2014-12-09',
 size: '18.9 MB',
 category: 'Government',
 investigation: 'CIA Torture Program',
 downloadCount: 1512,
 previewAvailable: true
 },
 {
 id: '100',
 title: 'Abu Ghraib Investigation, Taguba Report',
 description: 'Army investigation documenting systematic abuse of detainees at Abu Ghraib prison.',
 type: 'pdf',
 classification: 'public',
 date: '2004-03-12',
 size: '8.4 MB',
 category: 'Government',
 investigation: 'CIA Torture Program',
 downloadCount: 4117,
 previewAvailable: true
 },
 {
 id: '101',
 title: 'OLC Torture Memos, Yoo/Bybee',
 description: 'Office of Legal Counsel memos authorizing enhanced interrogation techniques.',
 type: 'pdf',
 classification: 'public',
 date: '2002-08-01',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'CIA Torture Program',
 downloadCount: 2565,
 previewAvailable: true
 },
 {
 id: '102',
 title: 'ICRC Report on Treatment of Detainees',
 description: 'International Red Cross findings of torture and cruel treatment at CIA black sites.',
 type: 'pdf',
 classification: 'restricted',
 date: '2007-02-14',
 size: '5.6 MB',
 category: 'Government',
 investigation: 'CIA Torture Program',
 downloadCount: 2223,
 previewAvailable: true
 },
 {
 id: '103',
 title: 'JIOA Operation Paperclip Files (Declassified)',
 description: 'Joint Intelligence Objectives Agency records on recruitment of Nazi scientists.',
 type: 'archive',
 classification: 'public',
 date: '2010-08-15',
 size: '89.3 MB',
 category: 'Government',
 investigation: 'Operation Paperclip',
 downloadCount: 765,
 previewAvailable: false
 },
 {
 id: '104',
 title: 'Wernher von Braun Security Files',
 description: 'Background investigations on former SS officer recruited for US rocket program.',
 type: 'pdf',
 classification: 'public',
 date: '2014-12-04',
 size: '12.3 MB',
 category: 'Government',
 investigation: 'Operation Paperclip',
 downloadCount: 3076,
 previewAvailable: true
 },
 {
 id: '105',
 title: 'GAO Report, Nazi War Criminals in America',
 description: 'Government Accountability Office investigation into Nazi immigrants in the United States.',
 type: 'pdf',
 classification: 'public',
 date: '1985-05-28',
 size: '6.7 MB',
 category: 'Government',
 investigation: 'Operation Paperclip',
 downloadCount: 1891,
 previewAvailable: true
 },
 {
 id: '106',
 title: 'Indian Removal Act of 1830 - Legislative Record',
 description: 'Congressional debate and passage of forced relocation of Native peoples.',
 type: 'text',
 classification: 'public',
 date: '1830-05-28',
 size: '234 KB',
 category: 'Government',
 investigation: 'Native American Genocide',
 downloadCount: 3536,
 previewAvailable: true
 },
 {
 id: '107',
 title: 'DOI Federal Indian Boarding School Initiative',
 description: 'Interior Department investigation documenting deaths at 408+ boarding school sites.',
 type: 'pdf',
 classification: 'public',
 date: '2022-05-11',
 size: '15.6 MB',
 category: 'Government',
 investigation: 'Native American Genocide',
 downloadCount: 4191,
 previewAvailable: true
 },
 {
 id: '108',
 title: 'Wounded Knee Investigation Report',
 description: 'Military records documenting 1890 massacre of 250-300 Lakota men, women, and children.',
 type: 'pdf',
 classification: 'public',
 date: '1891-02-12',
 size: '4.5 MB',
 category: 'Government',
 investigation: 'Native American Genocide',
 downloadCount: 2876,
 previewAvailable: true
 },
 {
 id: '109',
 title: 'Trail of Tears Death Records',
 description: 'Compiled records documenting 4,000+ Cherokee deaths during forced relocation.',
 type: 'archive',
 classification: 'public',
 date: '1839-03-15',
 size: '23.4 MB',
 category: 'Government',
 investigation: 'Native American Genocide',
 downloadCount: 2318,
 previewAvailable: false
 },
 {
 id: '110',
 title: '9/11 Commission Report',
 description: 'Final report of the National Commission on Terrorist Attacks Upon the United States.',
 type: 'pdf',
 classification: 'public',
 date: '2004-07-22',
 size: '28.4 MB',
 category: 'Government',
 investigation: '9/11 Commission',
 downloadCount: 4567,
 previewAvailable: true
 },
 {
 id: '111',
 title: '28 Pages, Saudi Connection (Declassified)',
 description: 'Previously classified section of Joint Inquiry detailing Saudi government connections.',
 type: 'pdf',
 classification: 'public',
 date: '2016-07-15',
 size: '5.6 MB',
 category: 'Government',
 investigation: '9/11 Commission',
 downloadCount: 697,
 previewAvailable: true
 },
 {
 id: '112',
 title: 'CIA Inspector General 9/11 Accountability Report',
 description: 'IG review of CIA actions and failures prior to September 11, 2001.',
 type: 'pdf',
 classification: 'restricted',
 date: '2005-06-01',
 size: '8.9 MB',
 category: 'Government',
 investigation: '9/11 Commission',
 downloadCount: 916,
 previewAvailable: true
 },
 {
 id: '113',
 title: 'Harris Corp Stingray NDA Template',
 description: 'Non-disclosure agreement police departments sign to hide cell-site simulator use.',
 type: 'pdf',
 classification: 'public',
 date: '2015-03-27',
 size: '890 KB',
 category: 'Government',
 investigation: 'Stingray Surveillance',
 downloadCount: 848,
 previewAvailable: true
 },
 {
 id: '114',
 title: 'ACLU Stingray Tracking Report',
 description: 'Comprehensive documentation of police use of cell-site simulators across 75+ agencies.',
 type: 'pdf',
 classification: 'public',
 date: '2016-11-08',
 size: '12.3 MB',
 category: 'Government',
 investigation: 'Stingray Surveillance',
 downloadCount: 707,
 previewAvailable: true
 },
 {
 id: '115',
 title: 'DOJ Policy Guidance, Cell-Site Simulators',
 description: 'Department of Justice policy requiring warrants for federal use of Stingray devices.',
 type: 'pdf',
 classification: 'public',
 date: '2015-09-03',
 size: '1.2 MB',
 category: 'Government',
 investigation: 'Stingray Surveillance',
 downloadCount: 4867,
 previewAvailable: true
 },
 {
 id: '116',
 title: 'Citizens United v. FEC, Supreme Court Decision',
 description: 'Landmark ruling allowing unlimited corporate spending in elections.',
 type: 'pdf',
 classification: 'public',
 date: '2010-01-21',
 size: '4.5 MB',
 category: 'Financial',
 investigation: 'Dark Money in Politics',
 downloadCount: 4608,
 previewAvailable: true
 },
 {
 id: '117',
 title: 'OpenSecrets Dark Money Database',
 description: 'Compiled records of politically active nonprofits spending without donor disclosure.',
 type: 'archive',
 classification: 'public',
 date: '2024-06-15',
 size: '56.7 MB',
 category: 'Financial',
 investigation: 'Dark Money in Politics',
 downloadCount: 4246,
 previewAvailable: false
 },
 {
 id: '118',
 title: 'IRS 501(c)(4) Political Spending Analysis',
 description: 'Analysis of tax-exempt organizations engaged in undisclosed political spending.',
 type: 'pdf',
 classification: 'public',
 date: '2023-11-08',
 size: '8.9 MB',
 category: 'Financial',
 investigation: 'Dark Money in Politics',
 downloadCount: 4825,
 previewAvailable: true
 },
 {
 id: '119',
 title: 'DOJ Investigation Report, Waco',
 description: 'Department of Justice report on ATF and FBI operations at Branch Davidian compound.',
 type: 'pdf',
 classification: 'public',
 date: '1993-10-08',
 size: '18.9 MB',
 category: 'Government',
 investigation: 'Waco Siege',
 downloadCount: 4200,
 previewAvailable: true
 },
 {
 id: '120',
 title: 'Danforth Report, Waco Special Counsel',
 description: 'Independent counsel finding no government wrongdoing but documenting failures.',
 type: 'pdf',
 classification: 'public',
 date: '2000-07-21',
 size: '12.3 MB',
 category: 'Government',
 investigation: 'Waco Siege',
 downloadCount: 2525,
 previewAvailable: true
 },
 {
 id: '121',
 title: 'FLIR Footage Analysis',
 description: 'Forward-looking infrared footage from April 19, 1993 final assault.',
 type: 'image',
 classification: 'public',
 date: '1993-04-19',
 size: '45.2 MB',
 category: 'Government',
 investigation: 'Waco Siege',
 downloadCount: 2874,
 previewAvailable: true
 },
 {
 id: '122',
 title: 'ICIJ Panama Papers Database',
 description: 'Searchable database of 11.5 million leaked documents from Mossack Fonseca.',
 type: 'archive',
 classification: 'public',
 date: '2016-04-03',
 size: '2.6 GB',
 category: 'Financial',
 investigation: 'Panama Papers',
 downloadCount: 2953,
 previewAvailable: false
 },
 {
 id: '123',
 title: 'Mossack Fonseca Shell Company Registry',
 description: 'Registry of 214,488 offshore entities created by Panamanian law firm.',
 type: 'archive',
 classification: 'public',
 date: '2016-05-09',
 size: '345 MB',
 category: 'Financial',
 investigation: 'Panama Papers',
 downloadCount: 1544,
 previewAvailable: false
 },
 {
 id: '124',
 title: 'ICIJ Investigation Summary, World Leaders',
 description: 'Analysis identifying 12 current/former heads of state in leaked documents.',
 type: 'pdf',
 classification: 'public',
 date: '2016-04-03',
 size: '8.9 MB',
 category: 'Financial',
 investigation: 'Panama Papers',
 downloadCount: 3382,
 previewAvailable: true
 },
 {
 id: '125',
 title: 'SEC v. Bankman-Fried Complaint',
 description: 'SEC complaint alleging fraud in FTX crypto exchange defrauding investors of billions.',
 type: 'pdf',
 classification: 'public',
 date: '2022-12-13',
 size: '2.3 MB',
 category: 'Financial',
 investigation: 'FTX Collapse',
 downloadCount: 3389,
 previewAvailable: true
 },
 {
 id: '126',
 title: 'FTX Bankruptcy Examiner Report',
 description: 'Detailed examination of FTX collapse, commingling of funds, and corporate governance failures.',
 type: 'pdf',
 classification: 'public',
 date: '2023-04-09',
 size: '15.6 MB',
 category: 'Financial',
 investigation: 'FTX Collapse',
 downloadCount: 2310,
 previewAvailable: true
 },
 {
 id: '127',
 title: 'SBF Trial Verdict and Sentencing',
 description: 'Jury verdict and 25-year sentence for Sam Bankman-Fried on 7 fraud counts.',
 type: 'pdf',
 classification: 'public',
 date: '2024-03-28',
 size: '890 KB',
 category: 'Financial',
 investigation: 'FTX Collapse',
 downloadCount: 319,
 previewAvailable: true
 },
 {
 id: '128',
 title: 'Tobacco Industry Internal Documents',
 description: 'Legacy Tobacco Documents Library, millions of internal industry documents released through litigation.',
 type: 'archive',
 classification: 'public',
 date: '1998-11-23',
 size: '1.2 GB',
 category: 'Health',
 investigation: 'Big Tobacco',
 downloadCount: 4384,
 previewAvailable: false
 },
 {
 id: '129',
 title: 'DOJ v. Philip Morris, RICO Judgment',
 description: 'Judge Kessler ruling that tobacco companies conspired to deceive the public about smoking dangers.',
 type: 'pdf',
 classification: 'public',
 date: '2006-08-17',
 size: '18.9 MB',
 category: 'Health',
 investigation: 'Big Tobacco',
 downloadCount: 1800,
 previewAvailable: true
 },
 {
 id: '130',
 title: 'Master Settlement Agreement',
 description: '1998 settlement between 46 states and major tobacco companies totaling $206 billion.',
 type: 'pdf',
 classification: 'public',
 date: '1998-11-23',
 size: '8.4 MB',
 category: 'Health',
 investigation: 'Big Tobacco',
 downloadCount: 2692,
 previewAvailable: true
 },
 {
 id: '131',
 title: 'Surgeon General Reports on Smoking (1964-2020)',
 description: 'Collected Surgeon General reports on health consequences of tobacco use.',
 type: 'archive',
 classification: 'public',
 date: '2020-01-01',
 size: '345 MB',
 category: 'Health',
 investigation: 'Big Tobacco',
 downloadCount: 2688,
 previewAvailable: false
 },
 {
 id: '132',
 title: 'Union Carbide Internal Safety Audit',
 description: 'Internal audit identifying safety deficiencies months before December 1984 gas leak.',
 type: 'pdf',
 classification: 'public',
 date: '1984-05-01',
 size: '4.5 MB',
 category: 'Corporate',
 investigation: 'Bhopal Disaster',
 downloadCount: 2895,
 previewAvailable: true
 },
 {
 id: '133',
 title: 'Indian Government Death Toll Analysis',
 description: 'Government records documenting 3,787 immediate deaths and 16,000+ eventual fatalities.',
 type: 'pdf',
 classification: 'public',
 date: '2010-06-07',
 size: '6.7 MB',
 category: 'Corporate',
 investigation: 'Bhopal Disaster',
 downloadCount: 132,
 previewAvailable: true
 },
 {
 id: '134',
 title: 'CBI Charges Against Warren Anderson',
 description: 'Indian criminal charges against Union Carbide CEO for culpable homicide.',
 type: 'pdf',
 classification: 'public',
 date: '1991-02-01',
 size: '1.2 MB',
 category: 'Corporate',
 investigation: 'Bhopal Disaster',
 downloadCount: 2634,
 previewAvailable: true
 },
 {
 id: '135',
 title: 'Facebook Internal Research, Teen Mental Health',
 description: 'Internal Instagram research showing platform worsens body image issues in teenage girls.',
 type: 'pdf',
 classification: 'public',
 date: '2021-09-14',
 size: '23.4 MB',
 category: 'Corporate',
 investigation: 'Facebook Mental Health Crisis',
 downloadCount: 3107,
 previewAvailable: true
 },
 {
 id: '136',
 title: 'Frances Haugen SEC Complaints',
 description: 'Whistleblower SEC filings with supporting internal Facebook documents.',
 type: 'archive',
 classification: 'public',
 date: '2021-10-03',
 size: '45.2 MB',
 category: 'Corporate',
 investigation: 'Facebook Mental Health Crisis',
 downloadCount: 4336,
 previewAvailable: false
 },
 {
 id: '137',
 title: 'Senate Commerce Committee Hearing Transcript',
 description: 'Mark Zuckerberg testimony on child safety failures across Meta platforms.',
 type: 'text',
 classification: 'public',
 date: '2024-01-31',
 size: '456 KB',
 category: 'Corporate',
 investigation: 'Facebook Mental Health Crisis',
 downloadCount: 2900,
 previewAvailable: true
 },
 {
 id: '138',
 title: 'WHO International Code of Marketing of Breast-milk Substitutes',
 description: 'WHO code adopted in response to aggressive formula marketing in developing nations.',
 type: 'pdf',
 classification: 'public',
 date: '1981-05-21',
 size: '2.3 MB',
 category: 'Corporate',
 investigation: 'Nestle Baby Formula Scandal',
 downloadCount: 5043,
 previewAvailable: true
 },
 {
 id: '139',
 title: 'IBFAN Breaking the Rules Report',
 description: 'Documentation of Nestle violations of WHO code in developing countries.',
 type: 'pdf',
 classification: 'public',
 date: '2014-01-15',
 size: '8.9 MB',
 category: 'Corporate',
 investigation: 'Nestle Baby Formula Scandal',
 downloadCount: 4856,
 previewAvailable: true
 },
 {
 id: '140',
 title: 'State v. Derek Chauvin, Murder Conviction',
 description: 'Verdict finding Chauvin guilty of murder and manslaughter in death of George Floyd.',
 type: 'pdf',
 classification: 'public',
 date: '2021-04-20',
 size: '1.8 MB',
 category: 'Legal',
 investigation: 'George Floyd Murder',
 downloadCount: 2269,
 previewAvailable: true
 },
 {
 id: '141',
 title: 'DOJ Investigation, Minneapolis Police',
 description: 'Pattern and practice investigation finding systemic use of excessive force and discrimination.',
 type: 'pdf',
 classification: 'public',
 date: '2023-06-16',
 size: '12.3 MB',
 category: 'Legal',
 investigation: 'George Floyd Murder',
 downloadCount: 335,
 previewAvailable: true
 },
 {
 id: '142',
 title: 'Medical Examiner Report, George Floyd',
 description: 'Autopsy report ruling death a homicide caused by law enforcement subdual.',
 type: 'pdf',
 classification: 'restricted',
 date: '2020-06-01',
 size: '3.4 MB',
 category: 'Legal',
 investigation: 'George Floyd Murder',
 downloadCount: 4346,
 previewAvailable: true
 },
 {
 id: '143',
 title: 'Exxon Internal Climate Research (1977-2003)',
 description: 'Internal Exxon documents showing company knew about climate change decades before public denial.',
 type: 'archive',
 classification: 'public',
 date: '2015-09-16',
 size: '89.3 MB',
 category: 'Corporate',
 investigation: 'Climate Denial',
 downloadCount: 484,
 previewAvailable: false
 },
 {
 id: '144',
 title: 'API Global Climate Science Communications Plan',
 description: 'American Petroleum Institute memo outlining strategy to manufacture doubt about climate science.',
 type: 'pdf',
 classification: 'public',
 date: '1998-04-01',
 size: '2.3 MB',
 category: 'Corporate',
 investigation: 'Climate Denial',
 downloadCount: 4850,
 previewAvailable: true
 },
 {
 id: '145',
 title: 'House Oversight Committee, Big Oil Climate Deception',
 description: 'Congressional investigation into fossil fuel industry disinformation campaigns.',
 type: 'pdf',
 classification: 'public',
 date: '2022-09-14',
 size: '15.6 MB',
 category: 'Corporate',
 investigation: 'Climate Denial',
 downloadCount: 2450,
 previewAvailable: true
 },
 {
 id: '146',
 title: 'DOJ White Paper, Targeted Killing of US Citizens',
 description: 'Legal justification for extrajudicial killing of American citizens by drone strike.',
 type: 'pdf',
 classification: 'public',
 date: '2013-02-04',
 size: '1.2 MB',
 category: 'Government',
 investigation: 'Drone Assassination Program',
 downloadCount: 849,
 previewAvailable: true
 },
 {
 id: '147',
 title: 'The Drone Papers, The Intercept',
 description: 'Leaked military documents revealing kill chain process and civilian casualty rates.',
 type: 'archive',
 classification: 'public',
 date: '2015-10-15',
 size: '34.5 MB',
 category: 'Government',
 investigation: 'Drone Assassination Program',
 downloadCount: 1458,
 previewAvailable: false
 },
 {
 id: '148',
 title: 'Bureau of Investigative Journalism Drone Database',
 description: 'Compiled records of US drone strikes in Pakistan, Yemen, and Somalia.',
 type: 'archive',
 classification: 'public',
 date: '2024-01-01',
 size: '23.4 MB',
 category: 'Government',
 investigation: 'Drone Assassination Program',
 downloadCount: 439,
 previewAvailable: false
 },
 {
 id: '149',
 title: 'DOJ Inspector General, Private Prison Safety',
 description: 'IG report finding federal private prisons more dangerous than BOP facilities.',
 type: 'pdf',
 classification: 'public',
 date: '2016-08-11',
 size: '6.7 MB',
 category: 'Government',
 investigation: 'Prison Industrial Complex',
 downloadCount: 2539,
 previewAvailable: true
 },
 {
 id: '150',
 title: 'CoreCivic/GEO Group Political Contributions',
 description: 'Analysis of private prison industry campaign contributions and lobbying expenditures.',
 type: 'pdf',
 classification: 'public',
 date: '2023-03-15',
 size: '4.5 MB',
 category: 'Government',
 investigation: 'Prison Industrial Complex',
 downloadCount: 1923,
 previewAvailable: true
 },
 {
 id: '151',
 title: 'Sentencing Project Mass Incarceration Report',
 description: 'Analysis documenting US as world leader in incarceration with 2 million people imprisoned.',
 type: 'pdf',
 classification: 'public',
 date: '2023-09-01',
 size: '8.9 MB',
 category: 'Government',
 investigation: 'Prison Industrial Complex',
 downloadCount: 2066,
 previewAvailable: true
 },
 {
 id: '152',
 title: 'Collateral Murder Video, Baghdad Airstrike',
 description: 'Classified Apache helicopter footage showing killing of Reuters journalists in Iraq.',
 type: 'image',
 classification: 'public',
 date: '2010-04-05',
 size: '89.3 MB',
 category: 'Government',
 investigation: 'WikiLeaks Disclosures',
 downloadCount: 3739,
 previewAvailable: true
 },
 {
 id: '153',
 title: 'Iraq War Logs',
 description: '391,832 US Army field reports documenting civilian casualties and torture.',
 type: 'archive',
 classification: 'public',
 date: '2010-10-22',
 size: '456 MB',
 category: 'Government',
 investigation: 'WikiLeaks Disclosures',
 downloadCount: 4790,
 previewAvailable: false
 },
 {
 id: '154',
 title: 'Vault 7 - CIA Hacking Tools',
 description: 'Leaked CIA cyber weapons and surveillance tools documentation.',
 type: 'archive',
 classification: 'public',
 date: '2017-03-07',
 size: '234 MB',
 category: 'Government',
 investigation: 'WikiLeaks Disclosures',
 downloadCount: 4960,
 previewAvailable: false
 },
 {
 id: '155',
 title: 'Bush v. Gore, Supreme Court Decision',
 description: 'Per curiam decision halting Florida recount and effectively deciding 2000 presidential election.',
 type: 'pdf',
 classification: 'public',
 date: '2000-12-12',
 size: '2.3 MB',
 category: 'Government',
 investigation: '2000 Election',
 downloadCount: 3734,
 previewAvailable: true
 },
 {
 id: '156',
 title: 'NORC Florida Ballot Project',
 description: 'National Opinion Research Center comprehensive review of 175,010 uncounted Florida ballots.',
 type: 'pdf',
 classification: 'public',
 date: '2001-11-12',
 size: '8.9 MB',
 category: 'Government',
 investigation: '2000 Election',
 downloadCount: 4491,
 previewAvailable: true
 },
 {
 id: '157',
 title: 'US Civil Rights Commission, Florida Election Report',
 description: 'Finding of widespread voter disenfranchisement of Black voters in Florida.',
 type: 'pdf',
 classification: 'public',
 date: '2001-06-01',
 size: '5.6 MB',
 category: 'Government',
 investigation: '2000 Election',
 downloadCount: 463,
 previewAvailable: true
 },
 {
 id: '158',
 title: 'Guantanamo Bay Detainee Files (WikiLeaks)',
 description: 'Leaked classified assessments of 779 Guantanamo detainees.',
 type: 'archive',
 classification: 'public',
 date: '2011-04-24',
 size: '123 MB',
 category: 'Government',
 investigation: 'Guantanamo Bay Detention',
 downloadCount: 893,
 previewAvailable: false
 },
 {
 id: '159',
 title: 'Senate Armed Services Committee Torture Report',
 description: 'Investigation into treatment of detainees in US custody.',
 type: 'pdf',
 classification: 'public',
 date: '2008-12-11',
 size: '12.3 MB',
 category: 'Government',
 investigation: 'Guantanamo Bay Detention',
 downloadCount: 2542,
 previewAvailable: true
 },
 {
 id: '160',
 title: 'Shelby County v. Holder, Gutting VRA',
 description: 'Supreme Court decision invalidating preclearance requirement of Voting Rights Act.',
 type: 'pdf',
 classification: 'public',
 date: '2013-06-25',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'Voter Suppression',
 downloadCount: 2228,
 previewAvailable: true
 },
 {
 id: '161',
 title: 'Brennan Center, Voter Purge Analysis',
 description: 'Analysis of voter roll purges that disproportionately affect minority voters.',
 type: 'pdf',
 classification: 'public',
 date: '2023-08-01',
 size: '6.7 MB',
 category: 'Government',
 investigation: 'Voter Suppression',
 downloadCount: 1169,
 previewAvailable: true
 },
 {
 id: '162',
 title: 'Georgia SB 202 Impact Assessment',
 description: 'Analysis of restrictive voting law signed after 2020 election targeting minority access.',
 type: 'pdf',
 classification: 'public',
 date: '2021-03-25',
 size: '4.5 MB',
 category: 'Government',
 investigation: 'Voter Suppression',
 downloadCount: 1078,
 previewAvailable: true
 },
 {
 id: '163',
 title: 'VAERS Database Annual Reports',
 description: 'Vaccine Adverse Event Reporting System compiled annual data and analysis reports.',
 type: 'archive',
 classification: 'public',
 date: '2024-01-01',
 size: '234 MB',
 category: 'Health',
 investigation: 'Vaccine Injury Documentation',
 downloadCount: 4285,
 previewAvailable: false
 },
 {
 id: '164',
 title: 'National Vaccine Injury Compensation Claims',
 description: 'HRSA data on claims filed and compensated through the National Vaccine Injury Compensation Program.',
 type: 'pdf',
 classification: 'public',
 date: '2024-06-01',
 size: '12.3 MB',
 category: 'Health',
 investigation: 'Vaccine Injury Documentation',
 downloadCount: 1151,
 previewAvailable: true
 },
 {
 id: '165',
 title: 'Pfizer Post-Authorization Adverse Events Report',
 description: 'Cumulative analysis of post-authorization adverse event reports through February 2021.',
 type: 'pdf',
 classification: 'public',
 date: '2021-04-30',
 size: '8.9 MB',
 category: 'Health',
 investigation: 'Vaccine Injury Documentation',
 downloadCount: 2477,
 previewAvailable: true
 },
 {
 id: '166',
 title: 'NTP Fluoride Neurotoxicity Systematic Review',
 description: 'National Toxicology Program review associating fluoride exposure with lower IQ in children.',
 type: 'pdf',
 classification: 'public',
 date: '2024-08-22',
 size: '15.6 MB',
 category: 'Health',
 investigation: 'Fluoride Research',
 downloadCount: 3446,
 previewAvailable: true
 },
 {
 id: '167',
 title: 'TSCA Fluoride Lawsuit, EPA Court Ruling',
 description: 'Federal court ruling that fluoridation poses unreasonable risk of neurotoxicity injury.',
 type: 'pdf',
 classification: 'public',
 date: '2024-09-24',
 size: '3.4 MB',
 category: 'Health',
 investigation: 'Fluoride Research',
 downloadCount: 4469,
 previewAvailable: true
 },
 {
 id: '168',
 title: 'Operation Popeye, Declassified Records',
 description: 'Declassified records of US military cloud seeding operations over Vietnam and Laos.',
 type: 'pdf',
 classification: 'public',
 date: '1974-03-20',
 size: '8.9 MB',
 category: 'Environmental',
 investigation: 'Weather Modification Programs',
 downloadCount: 1086,
 previewAvailable: true
 },
 {
 id: '169',
 title: 'NOAA Weather Modification Activity Reports',
 description: 'Annual reports on permitted weather modification activities in the United States.',
 type: 'archive',
 classification: 'public',
 date: '2024-01-01',
 size: '23.4 MB',
 category: 'Environmental',
 investigation: 'Weather Modification Programs',
 downloadCount: 2761,
 previewAvailable: false
 },
 {
 id: '170',
 title: 'ENMOD Convention, UN Treaty',
 description: 'Convention on the Prohibition of Military Use of Environmental Modification Techniques.',
 type: 'pdf',
 classification: 'public',
 date: '1978-10-05',
 size: '1.2 MB',
 category: 'Environmental',
 investigation: 'Weather Modification Programs',
 downloadCount: 2550,
 previewAvailable: true
 },
 {
 id: '171',
 title: 'DHS OIG, Immigration Detention Conditions',
 description: 'Inspector General reports documenting inhumane conditions in ICE detention facilities.',
 type: 'pdf',
 classification: 'public',
 date: '2019-07-02',
 size: '15.6 MB',
 category: 'Government',
 investigation: 'Immigration Detention',
 downloadCount: 4031,
 previewAvailable: true
 },
 {
 id: '172',
 title: 'Family Separation Zero-Tolerance Memo',
 description: 'DOJ memo implementing policy resulting in separation of 5,500+ children from parents.',
 type: 'pdf',
 classification: 'public',
 date: '2018-04-06',
 size: '890 KB',
 category: 'Government',
 investigation: 'Immigration Detention',
 downloadCount: 4018,
 previewAvailable: true
 },
 {
 id: '173',
 title: 'ICE Hysterectomy Whistleblower Complaint',
 description: 'Nurse Dawn Wooten complaint alleging forced medical procedures at Irwin County facility.',
 type: 'pdf',
 classification: 'public',
 date: '2020-09-14',
 size: '2.3 MB',
 category: 'Government',
 investigation: 'Immigration Detention',
 downloadCount: 2352,
 previewAvailable: true
 },
 {
 id: '174',
 title: 'OSHA Citations, Amazon Warehouse Safety',
 description: 'OSHA findings of willful violations causing worker injuries at Amazon fulfillment centers.',
 type: 'pdf',
 classification: 'public',
 date: '2023-01-18',
 size: '4.5 MB',
 category: 'Corporate',
 investigation: 'Amazon Worker Abuse',
 downloadCount: 774,
 previewAvailable: true
 },
 {
 id: '175',
 title: 'Senate HELP Committee, Amazon Safety Report',
 description: 'Investigation finding Amazon warehouses cause injuries at double industry average rate.',
 type: 'pdf',
 classification: 'public',
 date: '2023-04-12',
 size: '8.9 MB',
 category: 'Corporate',
 investigation: 'Amazon Worker Abuse',
 downloadCount: 3933,
 previewAvailable: true
 },
 {
 id: '176',
 title: 'Breonna Taylor Wrongful Death Settlement',
 description: 'Louisville Metro settlement and police reform agreement following no-knock raid killing.',
 type: 'pdf',
 classification: 'public',
 date: '2020-09-15',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'Police Violence & No-Knock Raids',
 downloadCount: 972,
 previewAvailable: true
 },
 {
 id: '177',
 title: 'DOJ Pattern and Practice Investigations',
 description: 'Compiled findings from federal investigations into police departments nationwide.',
 type: 'archive',
 classification: 'public',
 date: '2024-01-01',
 size: '234 MB',
 category: 'Government',
 investigation: 'Police Violence & No-Knock Raids',
 downloadCount: 4267,
 previewAvailable: false
 },
 {
 id: '178',
 title: 'Mapping Police Violence Database',
 description: 'Comprehensive database documenting police killings with 10,000+ entries since 2013.',
 type: 'archive',
 classification: 'public',
 date: '2024-12-31',
 size: '56.7 MB',
 category: 'Government',
 investigation: 'Police Violence & No-Knock Raids',
 downloadCount: 466,
 previewAvailable: false
 },
 {
 id: '179',
 title: 'House Select Committee, COVID Origins Report',
 description: 'Congressional investigation into origins of SARS-CoV-2, lab leak vs. natural spillover.',
 type: 'pdf',
 classification: 'public',
 date: '2023-03-08',
 size: '12.3 MB',
 category: 'Health',
 investigation: 'COVID Origins Investigation',
 downloadCount: 2799,
 previewAvailable: true
 },
 {
 id: '180',
 title: 'NIH-EcoHealth Alliance Grant Documents',
 description: 'FOIA-obtained grant applications and progress reports for Wuhan gain-of-function research.',
 type: 'archive',
 classification: 'public',
 date: '2021-09-07',
 size: '34.5 MB',
 category: 'Health',
 investigation: 'COVID Origins Investigation',
 downloadCount: 883,
 previewAvailable: false
 },
 {
 id: '181',
 title: 'WHO Mission Report, Wuhan',
 description: 'Joint WHO-China study team report on COVID-19 origins.',
 type: 'pdf',
 classification: 'public',
 date: '2021-03-30',
 size: '8.9 MB',
 category: 'Health',
 investigation: 'COVID Origins Investigation',
 downloadCount: 2925,
 previewAvailable: true
 },
 {
 id: '182',
 title: 'Senate HELP Committee Biosafety Report',
 description: 'Investigation into US-funded gain-of-function research and biosafety oversight.',
 type: 'pdf',
 classification: 'public',
 date: '2024-06-11',
 size: '6.7 MB',
 category: 'Health',
 investigation: 'COVID Origins Investigation',
 downloadCount: 1312,
 previewAvailable: true
 },
 {
 id: '183',
 title: 'NTP Cell Phone Radiation Study',
 description: 'National Toxicology Program finding clear evidence of carcinogenic activity from cell phone RF radiation.',
 type: 'pdf',
 classification: 'public',
 date: '2018-11-01',
 size: '18.9 MB',
 category: 'Health',
 investigation: '5G Health Research',
 downloadCount: 497,
 previewAvailable: true
 },
 {
 id: '184',
 title: 'Ramazzini Institute Replication Study',
 description: 'Italian institute confirming NTP findings of RF radiation cancer link at lower exposure levels.',
 type: 'pdf',
 classification: 'public',
 date: '2018-03-22',
 size: '8.9 MB',
 category: 'Health',
 investigation: '5G Health Research',
 downloadCount: 258,
 previewAvailable: true
 },
 {
 id: '185',
 title: 'FCC RF Exposure Guidelines (Outdated Since 1996)',
 description: 'Current FCC RF safety guidelines last updated in 1996, set based on thermal effects only.',
 type: 'pdf',
 classification: 'public',
 date: '1996-08-01',
 size: '2.3 MB',
 category: 'Health',
 investigation: '5G Health Research',
 downloadCount: 4415,
 previewAvailable: true
 },
 {
 id: '186',
 title: 'DC Circuit Court, FCC Guidelines Inadequate',
 description: 'Court ruling that FCC failed to adequately explain why 1996 RF guidelines remain protective.',
 type: 'pdf',
 classification: 'public',
 date: '2021-08-13',
 size: '4.5 MB',
 category: 'Health',
 investigation: '5G Health Research',
 downloadCount: 225,
 previewAvailable: true
 },
 {
 id: '187',
 title: 'CDC Gun Violence Research Funding Ban (Dickey Amendment)',
 description: 'History and impact of congressional ban on CDC gun violence research funding.',
 type: 'pdf',
 classification: 'public',
 date: '2019-12-20',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'Gun Violence',
 downloadCount: 1076,
 previewAvailable: true
 },
 {
 id: '188',
 title: 'Sandy Hook Families v. Remington Settlement',
 description: '$73 million settlement in wrongful death lawsuit against AR-15 manufacturer.',
 type: 'pdf',
 classification: 'public',
 date: '2022-02-15',
 size: '5.6 MB',
 category: 'Government',
 investigation: 'Gun Violence',
 downloadCount: 3794,
 previewAvailable: true
 },
 {
 id: '189',
 title: 'DNI Intelligence Community Assessment',
 description: 'ICA finding that Russia interfered in 2016 election to help Trump win presidency.',
 type: 'pdf',
 classification: 'public',
 date: '2017-01-06',
 size: '6.7 MB',
 category: 'Government',
 investigation: 'Russian Election Interference',
 downloadCount: 2862,
 previewAvailable: true
 },
 {
 id: '190',
 title: 'Senate Intelligence Committee, Russian Active Measures',
 description: 'Bipartisan report confirming Russian interference and Trump campaign contacts.',
 type: 'pdf',
 classification: 'public',
 date: '2020-08-18',
 size: '18.9 MB',
 category: 'Government',
 investigation: 'Russian Election Interference',
 downloadCount: 3867,
 previewAvailable: true
 },
 {
 id: '191',
 title: 'Internet Research Agency Indictment',
 description: 'DOJ indictment of 13 Russians and 3 entities for conspiracy to defraud the US.',
 type: 'pdf',
 classification: 'public',
 date: '2018-02-16',
 size: '2.3 MB',
 category: 'Government',
 investigation: 'Russian Election Interference',
 downloadCount: 2845,
 previewAvailable: true
 },
 {
 id: '192',
 title: 'GRU Officers Indictment, DNC Hack',
 description: 'DOJ indictment of 12 GRU officers for hacking DNC and DCCC.',
 type: 'pdf',
 classification: 'public',
 date: '2018-07-13',
 size: '3.4 MB',
 category: 'Government',
 investigation: 'Russian Election Interference',
 downloadCount: 3226,
 previewAvailable: true
 },
 {
 id: '193',
 title: 'NAS Report, Reflecting Sunlight',
 description: 'National Academies report on solar radiation management and stratospheric aerosol injection.',
 type: 'pdf',
 classification: 'public',
 date: '2021-03-25',
 size: '12.3 MB',
 category: 'Environmental',
 investigation: 'Aerosol Geoengineering Programs',
 downloadCount: 4677,
 previewAvailable: true
 },
 {
 id: '194',
 title: 'Harvard Solar Geoengineering Research Program',
 description: 'SCoPEx stratospheric aerosol injection experiment documentation and protocols.',
 type: 'pdf',
 classification: 'public',
 date: '2022-01-15',
 size: '8.9 MB',
 category: 'Environmental',
 investigation: 'Aerosol Geoengineering Programs',
 downloadCount: 2767,
 previewAvailable: true
 },
 {
 id: '195',
 title: 'Congressional Research Service, Geoengineering',
 description: 'CRS analysis of federal research and governance gaps in climate intervention.',
 type: 'pdf',
 classification: 'public',
 date: '2023-06-01',
 size: '4.5 MB',
 category: 'Environmental',
 investigation: 'Aerosol Geoengineering Programs',
 downloadCount: 1980,
 previewAvailable: true
 },
 {
 id: '196',
 title: 'Nisour Square Massacre Investigation',
 description: 'FBI investigation of September 2007 Blackwater shooting killing 17 Iraqi civilians.',
 type: 'pdf',
 classification: 'public',
 date: '2008-12-08',
 size: '8.9 MB',
 category: 'Government',
 investigation: 'Blackwater/Academi War Crimes',
 downloadCount: 4055,
 previewAvailable: true
 },
 {
 id: '197',
 title: 'House Oversight Committee, Blackwater Report',
 description: 'Congressional investigation into Blackwater USA operations in Iraq.',
 type: 'pdf',
 classification: 'public',
 date: '2007-10-01',
 size: '15.6 MB',
 category: 'Government',
 investigation: 'Blackwater/Academi War Crimes',
 downloadCount: 3783,
 previewAvailable: true
 },
 {
 id: '198',
 title: 'Revolving Door Database, Federal Agencies',
 description: 'Analysis of 4,000+ moves between government regulatory positions and regulated industries.',
 type: 'archive',
 classification: 'public',
 date: '2024-01-01',
 size: '23.4 MB',
 category: 'Corporate',
 investigation: 'Regulatory Capture',
 downloadCount: 1973,
 previewAvailable: false
 },
 {
 id: '199',
 title: 'GAO Report, Financial Regulatory Gaps',
 description: 'Government Accountability Office analysis of regulatory capture in financial oversight.',
 type: 'pdf',
 classification: 'public',
 date: '2023-03-15',
 size: '6.7 MB',
 category: 'Corporate',
 investigation: 'Regulatory Capture',
 downloadCount: 1083,
 previewAvailable: true
 },
 {
 id: '200',
 title: 'SEC v. WorldCom, Complaint',
 description: 'SEC enforcement action for $11 billion accounting fraud, largest in US history at time.',
 type: 'pdf',
 classification: 'public',
 date: '2002-06-26',
 size: '3.4 MB',
 category: 'Financial',
 investigation: 'WorldCom Fraud',
 downloadCount: 3778,
 previewAvailable: true
 },
 {
 id: '201',
 title: 'Thornburgh Report, WorldCom Investigation',
 description: 'Court-appointed examiner report on corporate governance failures.',
 type: 'pdf',
 classification: 'public',
 date: '2004-03-31',
 size: '18.9 MB',
 category: 'Financial',
 investigation: 'WorldCom Fraud',
 downloadCount: 4741,
 previewAvailable: true
 },
];

const typeIcons = {
 pdf: FileText,
 image: FileImage,
 archive: FileArchive,
 text: File
};

const categories = ['All', 'Health', 'Corporate', 'Environmental', 'Government', 'Financial'];
const classifications = ['All', 'public', 'restricted', 'sensitive'];
const sortOptions = ['date', 'title', 'downloads'] as const;

export default function DocumentsPage() {
 const [searchQuery, setSearchQuery] = useState('');
 const [selectedCategory, setSelectedCategory] = useState('All');
 const [selectedClassification, setSelectedClassification] = useState('All');
 const [sortBy, setSortBy] = useState<typeof sortOptions[number]>('date');
 const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');
 const [viewMode, setViewMode] = useState<'grid' | 'list'>('list');
 const [showFilters, setShowFilters] = useState(false);

 const filteredDocuments = useMemo(() => {
 let filtered = documents.filter(doc => {
 const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
 doc.description.toLowerCase().includes(searchQuery.toLowerCase());
 const matchesCategory = selectedCategory === 'All' || doc.category === selectedCategory;
 const matchesClassification = selectedClassification === 'All' || 
 doc.classification === selectedClassification;
 return matchesSearch && matchesCategory && matchesClassification;
 });

 // Sort
 filtered.sort((a, b) => {
 let comparison = 0;
 switch (sortBy) {
 case 'date':
 comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
 break;
 case 'title':
 comparison = a.title.localeCompare(b.title);
 break;
 case 'downloads':
 comparison = a.downloadCount - b.downloadCount;
 break;
 }
 return sortOrder === 'desc' ? -comparison : comparison;
 });

 return filtered;
 }, [searchQuery, selectedCategory, selectedClassification, sortBy, sortOrder]);

 return (
 <div className="min-h-screen pt-24 pb-16">
 <div className="max-w-7xl mx-auto px-4">
 {/* Header */}
 <motion.div
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 className="mb-8"
 >
 <h1 className="text-4xl font-bold text-white mb-4">
 Document <span className="text-blood-500">Library</span>
 </h1>
 <p className="text-lg text-zinc-400 max-w-2xl">
 Primary source documents from our investigations. Download, verify, and use 
 in your own research.
 </p>
 </motion.div>

 {/* Classification Warning */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.1 }}
 className="bg-zinc-800/20 border border-zinc-600/50 p-4 mb-8"
 >
 <p className="text-zinc-300/90 text-sm">
 <strong>Note:</strong> Some documents contain sensitive information. 
 Restricted documents require account verification. Please handle all 
 materials responsibly.
 </p>
 </motion.div>

 {/* Search and Controls */}
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 transition={{ delay: 0.15 }}
 className="mb-6 space-y-4"
 >
 {/* Main controls row */}
 <div className="flex flex-col md:flex-row gap-4">
 {/* Search */}
 <div className="relative flex-1">
 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500"/>
 <input
 type="text"
 placeholder="Search documents..."
 value={searchQuery}
 onChange={(e) => setSearchQuery(e.target.value)}
 className="w-full bg-zinc-900 border border-zinc-800 text-white pl-10 pr-4 py-2.5 placeholder-zinc-500 focus:border-blood-500 focus:outline-none"
 />
 </div>

 {/* Filter toggle */}
 <button
 onClick={() => setShowFilters(!showFilters)}
 className={`flex items-center gap-2 px-4 py-2.5 border transition-colors ${
 showFilters
 ? 'bg-blood-500/20 border-blood-500 text-blood-400'
 : 'bg-zinc-900 border-zinc-800 text-zinc-400 hover:border-zinc-600'
 }`}
 >
 <Filter className="w-5 h-5"/>
 Filters
 <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
 </button>

 {/* Sort */}
 <div className="flex items-center gap-2">
 <select
 value={sortBy}
 onChange={(e) => setSortBy(e.target.value as typeof sortOptions[number])}
 className="bg-zinc-900 border border-zinc-800 text-white px-4 py-2.5 focus:border-blood-500 focus:outline-none"
 >
 <option value="date">Date</option>
 <option value="title">Title</option>
 <option value="downloads">Downloads</option>
 </select>
 <button
 onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
 className="p-2.5 bg-zinc-900 border border-zinc-800 text-zinc-400 hover:border-zinc-600"
 >
 {sortOrder === 'asc' ? <SortAsc className="w-5 h-5"/> : <SortDesc className="w-5 h-5"/>}
 </button>
 </div>

 {/* View mode */}
 <div className="flex border border-zinc-800">
 <button
 onClick={() => setViewMode('grid')}
 className={`p-2.5 ${viewMode === 'grid' ? 'bg-blood-500/20 text-blood-400' : 'bg-zinc-900 text-zinc-400'}`}
 >
 <Grid className="w-5 h-5"/>
 </button>
 <button
 onClick={() => setViewMode('list')}
 className={`p-2.5 ${viewMode === 'list' ? 'bg-blood-500/20 text-blood-400' : 'bg-zinc-900 text-zinc-400'}`}
 >
 <List className="w-5 h-5"/>
 </button>
 </div>
 </div>

 {/* Expandable filters */}
 <AnimatePresence>
 {showFilters && (
 <motion.div
 initial={{ height: 0, opacity: 0 }}
 animate={{ height: 'auto', opacity: 1 }}
 exit={{ height: 0, opacity: 0 }}
 className="overflow-hidden"
 >
 <div className="bg-zinc-900/50 border border-zinc-800 p-4 flex flex-wrap gap-6">
 <div>
 <label className="block text-sm text-zinc-400 mb-2">Category</label>
 <select
 value={selectedCategory}
 onChange={(e) => setSelectedCategory(e.target.value)}
 className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none"
 >
 {categories.map(cat => (
 <option key={cat} value={cat}>{cat}</option>
 ))}
 </select>
 </div>
 <div>
 <label className="block text-sm text-zinc-400 mb-2">Classification</label>
 <select
 value={selectedClassification}
 onChange={(e) => setSelectedClassification(e.target.value)}
 className="bg-zinc-800 border border-zinc-700 text-white px-3 py-2 focus:border-blood-500 focus:outline-none"
 >
 {classifications.map(cls => (
 <option key={cls} value={cls}>
 {cls === 'All' ? 'All' : cls.charAt(0).toUpperCase() + cls.slice(1)}
 </option>
 ))}
 </select>
 </div>
 </div>
 </motion.div>
 )}
 </AnimatePresence>
 </motion.div>

 {/* Results count */}
 <div className="text-sm text-zinc-500 mb-4">
 {filteredDocuments.length} documents found
 </div>

 {/* Documents */}
 {viewMode === 'list' ? (
 <div className="space-y-2">
 {filteredDocuments.map((doc, index) => {
 const TypeIcon = typeIcons[doc.type];
 return (
 <motion.div
 key={doc.id}
 initial={{ opacity: 0, x: -20 }}
 animate={{ opacity: 1, x: 0 }}
 transition={{ delay: index * 0.03 }}
 className="bg-zinc-900/50 border border-zinc-800 p-4 hover:border-zinc-700 transition-colors"
 >
 <div className="flex items-start gap-4">
 <div className="bg-zinc-800 p-3">
 <TypeIcon className="w-6 h-6 text-zinc-400"/>
 </div>
 <div className="flex-1 min-w-0">
 <div className="flex items-start justify-between gap-4">
 <div>
 <h3 className="text-white font-semibold mb-1">{doc.title}</h3>
 <p className="text-zinc-500 text-sm line-clamp-1">{doc.description}</p>
 </div>
 <div className="flex items-center gap-2 shrink-0">
 {doc.classification === 'public' ? (
 <Unlock className="w-4 h-4 text-blood-500"/>
 ) : (
 <Lock className={`w-4 h-4 ${
 doc.classification === 'sensitive' ? 'text-blood-500' : 'text-zinc-400'
 }`} />
 )}
 <span className={`px-2 py-0.5 text-xs ${
 doc.classification === 'public'
 ? 'bg-blood-500/20 text-blood-400'
 : doc.classification === 'restricted'
 ? 'bg-zinc-400/20 text-zinc-300'
 : 'bg-blood-500/20 text-blood-400'
 }`}>
 {doc.classification}
 </span>
 </div>
 </div>
 <div className="flex items-center gap-4 mt-3 text-xs text-zinc-500">
 <span className="flex items-center gap-1">
 <Calendar className="w-3.5 h-3.5"/>
 {doc.date}
 </span>
 <span className="flex items-center gap-1">
 <Tag className="w-3.5 h-3.5"/>
 {doc.category}
 </span>
 <span>{doc.size}</span>
 <span>{doc.downloadCount.toLocaleString()} downloads</span>
 </div>
 </div>
 <div className="flex items-center gap-2">
 {doc.previewAvailable && (
 <button className="p-2 bg-zinc-800 text-zinc-400 hover:text-white transition-colors">
 <Eye className="w-5 h-5"/>
 </button>
 )}
 <button className="p-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 transition-colors">
 <Download className="w-5 h-5"/>
 </button>
 </div>
 </div>
 </motion.div>
 );
 })}
 </div>
 ) : (
 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
 {filteredDocuments.map((doc, index) => {
 const TypeIcon = typeIcons[doc.type];
 return (
 <motion.div
 key={doc.id}
 initial={{ opacity: 0, y: 20 }}
 animate={{ opacity: 1, y: 0 }}
 transition={{ delay: index * 0.05 }}
 className="bg-zinc-900/50 border border-zinc-800 p-5 hover:border-zinc-700 transition-colors"
 >
 <div className="flex items-start justify-between mb-3">
 <div className="bg-zinc-800 p-2">
 <TypeIcon className="w-5 h-5 text-zinc-400"/>
 </div>
 <span className={`px-2 py-0.5 text-xs ${
 doc.classification === 'public'
 ? 'bg-blood-500/20 text-blood-400'
 : doc.classification === 'restricted'
 ? 'bg-zinc-400/20 text-zinc-300'
 : 'bg-blood-500/20 text-blood-400'
 }`}>
 {doc.classification}
 </span>
 </div>
 <h3 className="text-white font-semibold mb-2 line-clamp-2">{doc.title}</h3>
 <p className="text-zinc-500 text-sm mb-4 line-clamp-2">{doc.description}</p>
 <div className="flex items-center justify-between text-xs text-zinc-500">
 <span>{doc.date}</span>
 <span>{doc.size}</span>
 </div>
 <div className="flex items-center gap-2 mt-4">
 {doc.previewAvailable && (
 <button className="flex-1 py-2 bg-zinc-800 text-zinc-400 hover:text-white text-sm transition-colors flex items-center justify-center gap-2">
 <Eye className="w-4 h-4"/>
 Preview
 </button>
 )}
 <button className="flex-1 py-2 bg-blood-500/20 text-blood-400 hover:bg-blood-500/30 text-sm transition-colors flex items-center justify-center gap-2">
 <Download className="w-4 h-4"/>
 Download
 </button>
 </div>
 </motion.div>
 );
 })}
 </div>
 )}

 {filteredDocuments.length === 0 && (
 <motion.div
 initial={{ opacity: 0 }}
 animate={{ opacity: 1 }}
 className="text-center py-16"
 >
 <FileText className="w-12 h-12 text-zinc-700 mx-auto mb-4"/>
 <p className="text-zinc-400">No documents match your search criteria</p>
 </motion.div>
 )}
 </div>
 </div>
 );
}
