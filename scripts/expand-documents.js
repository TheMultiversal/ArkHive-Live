const fs = require('fs');

// Generate real document entries tied to actual investigations
const documentSets = [
  // Trump Criminal Compendium
  { investigation: 'The Trump Criminal Compendium', category: 'Legal', docs: [
    { title: 'People of New York v. Trump - 34-Count Felony Indictment', desc: 'Manhattan DA indictment for falsifying business records to conceal hush money payments.', type: 'pdf', class: 'public', date: '2023-03-30', size: '2.1 MB' },
    { title: 'United States v. Trump - Classified Documents Indictment', desc: 'Federal indictment for willful retention of national defense information and obstruction.', type: 'pdf', class: 'public', date: '2023-06-08', size: '3.4 MB' },
    { title: 'United States v. Trump - Jan 6 Superseding Indictment', desc: 'Federal indictment for conspiracy to defraud the United States and obstruct an official proceeding.', type: 'pdf', class: 'public', date: '2023-08-01', size: '2.8 MB' },
    { title: 'State of Georgia v. Trump et al. - RICO Indictment', desc: 'Fulton County RICO indictment charging 19 defendants with conspiracy to overturn 2020 election.', type: 'pdf', class: 'public', date: '2023-08-14', size: '5.2 MB' },
    { title: 'NY AG Civil Fraud Judgment - $454M', desc: 'Justice Engoron ruling finding persistent fraud in Trump Organization financial statements.', type: 'pdf', class: 'public', date: '2024-02-16', size: '1.9 MB' },
    { title: 'Mueller Report - Volume I: Russian Interference', desc: 'Special Counsel investigation into Russian interference in 2016 presidential election.', type: 'pdf', class: 'public', date: '2019-04-18', size: '12.3 MB' },
    { title: 'Mueller Report - Volume II: Obstruction of Justice', desc: 'Analysis of potential obstruction of justice by President Trump, documenting 10 episodes.', type: 'pdf', class: 'public', date: '2019-04-18', size: '8.7 MB' },
    { title: 'Trump Financial Disclosure Forms (2015-2024)', desc: 'Compiled personal financial disclosure forms filed with the Office of Government Ethics.', type: 'archive', class: 'public', date: '2024-05-15', size: '34.5 MB' },
    { title: 'Access Hollywood Tape Transcript', desc: 'Complete transcript of 2005 recording released in October 2016.', type: 'text', class: 'public', date: '2016-10-07', size: '45 KB' },
    { title: 'Trump Org Criminal Tax Fraud Verdict', desc: 'NY jury conviction on 17 felony counts of tax fraud, conspiracy, and falsifying records.', type: 'pdf', class: 'public', date: '2022-12-06', size: '890 KB' },
  ]},
  // Epstein Network
  { investigation: 'Epstein Network Investigation', category: 'Legal', docs: [
    { title: 'Jeffrey Epstein 2006 Non-Prosecution Agreement', desc: 'Secret plea deal arranged by Alexander Acosta granting immunity to co-conspirators.', type: 'pdf', class: 'public', date: '2006-09-24', size: '1.2 MB' },
    { title: 'Ghislaine Maxwell Trial Transcripts', desc: 'Complete trial transcripts from SDNY sex trafficking prosecution.', type: 'archive', class: 'public', date: '2021-12-29', size: '45.8 MB' },
    { title: 'Epstein Flight Logs (Lolita Express)', desc: 'FAA flight records for Epstein private aircraft N908JE documenting passengers.', type: 'pdf', class: 'public', date: '2015-01-05', size: '8.9 MB' },
    { title: 'Virginia Giuffre Deposition', desc: 'Sealed deposition naming powerful individuals connected to trafficking network.', type: 'pdf', class: 'restricted', date: '2016-03-21', size: '3.4 MB' },
    { title: 'Epstein Black Book (Redacted)', desc: 'Contact book containing names of over 1,000 associates, partially redacted.', type: 'pdf', class: 'sensitive', date: '2015-01-06', size: '2.1 MB' },
    { title: 'Medical Examiner Report - Epstein Death', desc: 'NYC Chief Medical Examiner ruling of suicide by hanging at MCC Manhattan.', type: 'pdf', class: 'public', date: '2019-08-16', size: '567 KB' },
    { title: 'Epstein Island Property Records', desc: 'USVI property records for Little St. James and Great St. James islands.', type: 'archive', class: 'public', date: '2019-07-08', size: '15.2 MB' },
  ]},
  // January 6 Insurrection
  { investigation: 'January 6 Insurrection', category: 'Government', docs: [
    { title: 'J6 Select Committee Final Report', desc: 'Final report of the House Select Committee to Investigate the January 6th Attack, 845 pages.', type: 'pdf', class: 'public', date: '2022-12-22', size: '28.4 MB' },
    { title: 'DOJ Capitol Breach Investigation Summary', desc: 'Department of Justice prosecution statistics and case summaries for 1,400+ defendants.', type: 'pdf', class: 'public', date: '2024-01-06', size: '5.6 MB' },
    { title: 'Proud Boys Seditious Conspiracy Verdict', desc: 'Jury verdict convicting Proud Boys leaders of seditious conspiracy.', type: 'pdf', class: 'public', date: '2023-05-04', size: '1.3 MB' },
    { title: 'Oath Keepers Trial Evidence Compilation', desc: 'Key evidence exhibits from seditious conspiracy prosecution of Stewart Rhodes et al.', type: 'archive', class: 'public', date: '2022-11-29', size: '67.3 MB' },
    { title: 'Capitol Police After-Action Report', desc: 'Internal review of USCP response and security failures on January 6, 2021.', type: 'pdf', class: 'restricted', date: '2021-04-15', size: '4.2 MB' },
    { title: 'Secret Service Text Messages (Recovered)', desc: 'Partially recovered Secret Service communications from January 5-6, 2021.', type: 'archive', class: 'sensitive', date: '2022-07-14', size: '890 KB' },
    { title: 'National Guard Deployment Timeline', desc: 'Minute-by-minute timeline of requests for and deployment of DC National Guard.', type: 'pdf', class: 'public', date: '2021-03-03', size: '2.1 MB' },
  ]},
  // MKUltra
  { investigation: 'MKUltra', category: 'Government', docs: [
    { title: 'CIA MKULTRA Collection (Declassified)', desc: 'Complete collection of 20,000+ declassified CIA documents on mind control experiments.', type: 'archive', class: 'public', date: '1977-08-03', size: '456 MB' },
    { title: 'Church Committee Report - Intelligence Activities', desc: 'Senate Select Committee findings on illegal CIA domestic activities including MKULTRA.', type: 'pdf', class: 'public', date: '1975-11-20', size: '34.5 MB' },
    { title: 'Dr. Sidney Gottlieb Testimony', desc: 'Congressional testimony of MKULTRA program director regarding LSD experiments.', type: 'text', class: 'public', date: '1977-09-21', size: '234 KB' },
    { title: 'Subproject 68 - Dr. Ewen Cameron', desc: 'Declassified records of psychic driving experiments at Allan Memorial Institute, Montreal.', type: 'pdf', class: 'public', date: '1977-08-03', size: '12.8 MB' },
  ]},
  // COINTELPRO
  { investigation: 'COINTELPRO', category: 'Government', docs: [
    { title: 'FBI COINTELPRO Files (Declassified)', desc: 'Declassified FBI files documenting counterintelligence programs targeting domestic organizations.', type: 'archive', class: 'public', date: '1971-03-08', size: '234 MB' },
    { title: 'Church Committee - COINTELPRO Findings', desc: 'Senate committee report on FBI COINTELPRO operations against civil rights and antiwar movements.', type: 'pdf', class: 'public', date: '1976-04-28', size: '18.9 MB' },
    { title: 'FBI Memo - MLK Suicide Letter', desc: 'Declassified FBI letter sent to Martin Luther King Jr. encouraging his suicide.', type: 'image', class: 'public', date: '1964-11-21', size: '2.3 MB' },
    { title: 'Fred Hampton Raid - Internal FBI Documents', desc: 'FBI planning documents for December 4, 1969 raid that killed Black Panther leader.', type: 'pdf', class: 'public', date: '1969-12-04', size: '5.6 MB' },
  ]},
  // Tuskegee Experiment
  { investigation: 'Tuskegee Experiment', category: 'Health', docs: [
    { title: 'Ad Hoc Advisory Panel Final Report', desc: 'HEW panel report condemning the Tuskegee Syphilis Study as ethically unjustified.', type: 'pdf', class: 'public', date: '1973-04-28', size: '4.5 MB' },
    { title: 'Original Study Documentation (1932-1972)', desc: 'USPHS records from 40-year study of untreated syphilis in African American men.', type: 'archive', class: 'public', date: '1972-07-25', size: '89.3 MB' },
    { title: 'Bill Clinton Presidential Apology', desc: 'Transcript and recording of presidential apology to Tuskegee study survivors.', type: 'text', class: 'public', date: '1997-05-16', size: '156 KB' },
  ]},
  // NSA Mass Surveillance
  { investigation: 'NSA Mass Surveillance', category: 'Government', docs: [
    { title: 'Snowden NSA Slides - PRISM Program', desc: 'Leaked NSA slides describing PRISM surveillance program collecting data from tech companies.', type: 'image', class: 'public', date: '2013-06-06', size: '23.4 MB' },
    { title: 'FISA Court Order - Verizon Metadata Collection', desc: 'Classified court order requiring Verizon to provide all call detail records to NSA.', type: 'pdf', class: 'public', date: '2013-06-05', size: '890 KB' },
    { title: 'NSA Inspector General Report - Stellar Wind', desc: 'IG report on warrantless surveillance program authorized after September 11, 2001.', type: 'pdf', class: 'restricted', date: '2009-03-24', size: '6.7 MB' },
    { title: 'XKeyscore Training Slides', desc: 'Leaked NSA training materials for XKeyscore real-time internet surveillance system.', type: 'pdf', class: 'public', date: '2013-07-31', size: '15.3 MB' },
    { title: 'USA FREEDOM Act Legislative History', desc: 'Congressional record of NSA reform legislation ending bulk telephone metadata collection.', type: 'pdf', class: 'public', date: '2015-06-02', size: '3.4 MB' },
  ]},
  // Iran-Contra
  { investigation: 'Iran-Contra Affair', category: 'Government', docs: [
    { title: 'Tower Commission Report', desc: 'Presidential review board findings on Iran-Contra arms sales and diversion of funds.', type: 'pdf', class: 'public', date: '1987-02-26', size: '18.7 MB' },
    { title: 'Walsh Independent Counsel Final Report', desc: 'Six-year investigation report on Iran-Contra criminal proceedings.', type: 'pdf', class: 'public', date: '1993-08-04', size: '45.2 MB' },
    { title: 'Oliver North Congressional Testimony', desc: 'Transcript of Lt. Col. North testimony before joint congressional committees.', type: 'text', class: 'public', date: '1987-07-07', size: '567 KB' },
    { title: 'CIA Inspector General Report - Contra Drug Links', desc: 'IG investigation into allegations of CIA-Contra drug trafficking connections.', type: 'pdf', class: 'public', date: '1998-01-29', size: '8.9 MB' },
  ]},
  // Watergate
  { investigation: 'Watergate', category: 'Government', docs: [
    { title: 'Nixon White House Tapes (Transcripts)', desc: 'Transcripts of secretly recorded Oval Office conversations including smoking gun tape.', type: 'archive', class: 'public', date: '1974-08-05', size: '123 MB' },
    { title: 'Senate Watergate Committee Final Report', desc: 'Select Committee on Presidential Campaign Activities final report.', type: 'pdf', class: 'public', date: '1974-06-27', size: '34.5 MB' },
    { title: 'Articles of Impeachment - Richard Nixon', desc: 'House Judiciary Committee approved articles of impeachment.', type: 'pdf', class: 'public', date: '1974-07-27', size: '456 KB' },
    { title: 'Deep Throat FBI Files', desc: 'FBI files related to W. Mark Felt (Deep Throat) and Watergate investigation.', type: 'archive', class: 'public', date: '2005-05-31', size: '12.8 MB' },
  ]},
  // Opioid Crisis
  { investigation: 'Opioid Crisis', category: 'Health', docs: [
    { title: 'Purdue Pharma DOJ Settlement Agreement', desc: '$8.3 billion settlement for criminal and civil liability related to OxyContin marketing.', type: 'pdf', class: 'public', date: '2020-10-21', size: '3.4 MB' },
    { title: 'Sackler Family Deposition Transcripts', desc: 'Deposition testimony of Sackler family members regarding OxyContin marketing decisions.', type: 'archive', class: 'public', date: '2019-09-12', size: '67.8 MB' },
    { title: 'McKinsey Consulting Reports for Purdue', desc: 'Internal McKinsey documents advising Purdue on strategies to boost OxyContin sales.', type: 'pdf', class: 'public', date: '2019-02-01', size: '23.4 MB' },
    { title: 'FDA OxyContin Approval Records', desc: 'FDA review documents for original 1995 OxyContin approval and labeling decisions.', type: 'pdf', class: 'public', date: '1995-12-28', size: '8.9 MB' },
    { title: 'CDC Opioid Prescribing Guidelines', desc: 'CDC guidelines responding to epidemic of opioid overdose deaths.', type: 'pdf', class: 'public', date: '2016-03-15', size: '2.3 MB' },
  ]},
  // Flint Water Crisis
  { investigation: 'Flint Water Crisis', category: 'Environmental', docs: [
    { title: 'EPA Emergency Order - Flint Michigan', desc: 'EPA emergency administrative order finding imminent health hazard in Flint water supply.', type: 'pdf', class: 'public', date: '2016-01-21', size: '1.8 MB' },
    { title: 'Michigan Civil Rights Commission Report', desc: 'Finding that Flint water crisis was result of systemic racism.', type: 'pdf', class: 'public', date: '2017-02-17', size: '5.6 MB' },
    { title: 'Lead Testing Results - Flint Residences', desc: 'Virginia Tech research team water testing results showing dangerous lead levels.', type: 'archive', class: 'public', date: '2015-09-01', size: '34.5 MB' },
    { title: 'Criminal Indictments - Flint Officials', desc: 'Criminal charges against Michigan Governor Snyder and 8 other officials.', type: 'pdf', class: 'public', date: '2021-01-14', size: '2.3 MB' },
  ]},
  // Boeing
  { investigation: 'Boeing Safety Crisis', category: 'Corporate', docs: [
    { title: 'Boeing 737 MAX MCAS Design Documents', desc: 'Internal Boeing documents on Maneuvering Characteristics Augmentation System design decisions.', type: 'pdf', class: 'public', date: '2019-03-27', size: '12.3 MB' },
    { title: 'Lion Air 610 Crash Investigation Report', desc: 'Indonesian KNKT final report on October 2018 737 MAX crash killing 189.', type: 'pdf', class: 'public', date: '2019-10-25', size: '18.9 MB' },
    { title: 'Ethiopian Airlines 302 Accident Report', desc: 'Ethiopian Accident Investigation Bureau report on March 2019 crash killing 157.', type: 'pdf', class: 'public', date: '2020-03-09', size: '15.6 MB' },
    { title: 'Boeing Internal Messages - Employee Concerns', desc: 'Internal communications showing employees raised safety concerns about 737 MAX.', type: 'archive', class: 'public', date: '2020-01-09', size: '8.4 MB' },
    { title: 'FAA Certification Review - 737 MAX', desc: 'DOT IG report on FAA certification process and delegation to Boeing.', type: 'pdf', class: 'public', date: '2020-02-11', size: '6.7 MB' },
    { title: 'Boeing Deferred Prosecution Agreement', desc: 'DOJ agreement resolving criminal charge of conspiracy to defraud the FAA.', type: 'pdf', class: 'public', date: '2021-01-07', size: '1.2 MB' },
    { title: 'Alaska Airlines 1282 Door Plug Failure Report', desc: 'NTSB preliminary report on January 2024 mid-flight door plug blowout.', type: 'pdf', class: 'public', date: '2024-02-06', size: '4.5 MB' },
  ]},
  // Operation Mockingbird
  { investigation: 'Operation Mockingbird', category: 'Government', docs: [
    { title: 'CIA Family Jewels (Declassified)', desc: 'Compilation of CIA illegal activities including media manipulation operations.', type: 'archive', class: 'public', date: '2007-06-25', size: '67.8 MB' },
    { title: 'Carl Bernstein - CIA and the Media', desc: 'Rolling Stone investigation documenting CIA relationships with American journalists.', type: 'pdf', class: 'public', date: '1977-10-20', size: '3.4 MB' },
    { title: 'Church Committee - CIA Media Operations', desc: 'Senate committee findings on CIA influence over domestic and foreign media outlets.', type: 'pdf', class: 'public', date: '1976-04-26', size: '8.9 MB' },
  ]},
  // Gulf of Tonkin
  { investigation: 'Gulf of Tonkin', category: 'Government', docs: [
    { title: 'NSA Declassified Gulf of Tonkin Documents', desc: 'NSA historical study revealing that second Gulf of Tonkin incident never occurred.', type: 'pdf', class: 'public', date: '2005-11-30', size: '12.3 MB' },
    { title: 'Pentagon Papers - Vietnam Decisionmaking', desc: 'McNamara-commissioned study of US political-military involvement in Vietnam 1945-1967.', type: 'archive', class: 'public', date: '1971-06-13', size: '234 MB' },
    { title: 'Gulf of Tonkin Resolution', desc: 'Joint resolution authorizing military force in Southeast Asia without declaration of war.', type: 'pdf', class: 'public', date: '1964-08-10', size: '234 KB' },
  ]},
  // Japanese Internment
  { investigation: 'Japanese American Internment', category: 'Government', docs: [
    { title: 'Executive Order 9066', desc: 'Presidential order authorizing internment of 120,000 Japanese Americans during WWII.', type: 'pdf', class: 'public', date: '1942-02-19', size: '345 KB' },
    { title: 'Commission on Wartime Relocation Report', desc: 'Personal Justice Denied: findings that internment was motivated by racial prejudice.', type: 'pdf', class: 'public', date: '1983-02-24', size: '15.6 MB' },
    { title: 'Korematsu v. United States - Dissent', desc: 'Justice Murphy dissent calling internment a legalization of racism.', type: 'pdf', class: 'public', date: '1944-12-18', size: '890 KB' },
  ]},
  // War on Drugs
  { investigation: 'War on Drugs', category: 'Government', docs: [
    { title: 'Nixon Aide John Ehrlichman Interview', desc: 'Admission that war on drugs targeted Black communities and antiwar left.', type: 'text', class: 'public', date: '2016-03-22', size: '89 KB' },
    { title: 'CIA Inspector General - Drug Trafficking', desc: 'Report on CIA involvement with drug traffickers during Contra operations.', type: 'pdf', class: 'public', date: '1998-01-29', size: '23.4 MB' },
    { title: 'DOJ Sentencing Disparity Analysis', desc: 'Analysis of 100:1 crack-to-powder cocaine sentencing disparity and racial impact.', type: 'pdf', class: 'public', date: '2002-05-01', size: '5.6 MB' },
  ]},
  // Enron
  { investigation: 'Enron Scandal', category: 'Financial', docs: [
    { title: 'SEC v. Enron - Complaint and Findings', desc: 'SEC enforcement action documenting massive financial fraud at Enron Corporation.', type: 'pdf', class: 'public', date: '2002-07-08', size: '4.5 MB' },
    { title: 'Enron Internal Memos - California Energy Crisis', desc: 'Internal communications showing deliberate manipulation of California energy markets.', type: 'archive', class: 'public', date: '2002-05-06', size: '34.5 MB' },
    { title: 'Arthur Andersen Obstruction Indictment', desc: 'Federal indictment for obstruction of justice in destroying Enron audit documents.', type: 'pdf', class: 'public', date: '2002-03-14', size: '1.2 MB' },
    { title: 'Sherron Watkins Memo to Ken Lay', desc: 'Whistleblower memo warning of accounting irregularities that could implode Enron.', type: 'text', class: 'public', date: '2001-08-15', size: '123 KB' },
  ]},
  // 2008 Financial Crisis
  { investigation: '2008 Financial Crisis', category: 'Financial', docs: [
    { title: 'Financial Crisis Inquiry Commission Report', desc: 'National commission findings that the crisis was avoidable, caused by failures in regulation and Wall Street.', type: 'pdf', class: 'public', date: '2011-01-27', size: '28.4 MB' },
    { title: 'Senate PSI Report - Wall Street and the Financial Crisis', desc: 'Levin-Coburn investigation of Goldman Sachs, Deutsche Bank, and rating agencies.', type: 'pdf', class: 'public', date: '2011-04-13', size: '45.2 MB' },
    { title: 'AIG Bailout Terms and Counterparty Payments', desc: 'Federal Reserve disclosure of $182 billion AIG bailout and payments to Goldman Sachs et al.', type: 'pdf', class: 'public', date: '2009-03-15', size: '6.7 MB' },
    { title: 'Goldman Sachs Abacus CDO SEC Settlement', desc: 'SEC settlement for misleading investors in synthetic CDO tied to mortgage market.', type: 'pdf', class: 'public', date: '2010-07-15', size: '2.3 MB' },
  ]},
  // Volkswagen Emissions
  { investigation: 'Volkswagen Emissions Scandal', category: 'Corporate', docs: [
    { title: 'EPA Notice of Violation - VW Clean Air Act', desc: 'EPA findings that VW installed defeat devices in 11 million diesel vehicles worldwide.', type: 'pdf', class: 'public', date: '2015-09-18', size: '3.4 MB' },
    { title: 'VW Plea Agreement - Criminal Fraud', desc: 'Volkswagen guilty plea to conspiracy, obstruction, and Clean Air Act violations.', type: 'pdf', class: 'public', date: '2017-03-10', size: '2.1 MB' },
    { title: 'West Virginia University Emissions Testing', desc: 'Original research discovering discrepancy between lab and real-world emissions.', type: 'pdf', class: 'public', date: '2014-05-15', size: '4.5 MB' },
  ]},
  // Wells Fargo
  { investigation: 'Wells Fargo Fraud', category: 'Financial', docs: [
    { title: 'CFPB Consent Order - Fake Accounts', desc: 'CFPB enforcement action for creation of millions of unauthorized customer accounts.', type: 'pdf', class: 'public', date: '2016-09-08', size: '1.8 MB' },
    { title: 'Senate Banking Committee Hearing - Stumpf', desc: 'Transcript of CEO John Stumpf testimony on unauthorized account creation scandal.', type: 'text', class: 'public', date: '2016-09-20', size: '345 KB' },
    { title: 'OCC $500M Penalty Assessment', desc: 'OCC civil money penalty for unsafe and unsound practices in auto lending and mortgage rate locks.', type: 'pdf', class: 'public', date: '2018-04-20', size: '2.3 MB' },
  ]},
  // Abu Ghraib / CIA Torture
  { investigation: 'CIA Torture Program', category: 'Government', docs: [
    { title: 'Senate Intelligence Committee Torture Report', desc: 'Executive summary of 6,700-page study on CIA enhanced interrogation program.', type: 'pdf', class: 'public', date: '2014-12-09', size: '18.9 MB' },
    { title: 'Abu Ghraib Investigation - Taguba Report', desc: 'Army investigation documenting systematic abuse of detainees at Abu Ghraib prison.', type: 'pdf', class: 'public', date: '2004-03-12', size: '8.4 MB' },
    { title: 'OLC Torture Memos - Yoo/Bybee', desc: 'Office of Legal Counsel memos authorizing enhanced interrogation techniques.', type: 'pdf', class: 'public', date: '2002-08-01', size: '3.4 MB' },
    { title: 'ICRC Report on Treatment of Detainees', desc: 'International Red Cross findings of torture and cruel treatment at CIA black sites.', type: 'pdf', class: 'restricted', date: '2007-02-14', size: '5.6 MB' },
  ]},
  // Operation Paperclip
  { investigation: 'Operation Paperclip', category: 'Government', docs: [
    { title: 'JIOA Operation Paperclip Files (Declassified)', desc: 'Joint Intelligence Objectives Agency records on recruitment of Nazi scientists.', type: 'archive', class: 'public', date: '2010-08-15', size: '89.3 MB' },
    { title: 'Wernher von Braun Security Files', desc: 'Background investigations on former SS officer recruited for US rocket program.', type: 'pdf', class: 'public', date: '2014-12-04', size: '12.3 MB' },
    { title: 'GAO Report - Nazi War Criminals in America', desc: 'Government Accountability Office investigation into Nazi immigrants in the United States.', type: 'pdf', class: 'public', date: '1985-05-28', size: '6.7 MB' },
  ]},
  // Native American Genocide
  { investigation: 'Native American Genocide', category: 'Government', docs: [
    { title: 'Indian Removal Act of 1830 - Legislative Record', desc: 'Congressional debate and passage of forced relocation of Native peoples.', type: 'text', class: 'public', date: '1830-05-28', size: '234 KB' },
    { title: 'DOI Federal Indian Boarding School Initiative', desc: 'Interior Department investigation documenting deaths at 408+ boarding school sites.', type: 'pdf', class: 'public', date: '2022-05-11', size: '15.6 MB' },
    { title: 'Wounded Knee Investigation Report', desc: 'Military records documenting 1890 massacre of 250-300 Lakota men, women, and children.', type: 'pdf', class: 'public', date: '1891-02-12', size: '4.5 MB' },
    { title: 'Trail of Tears Death Records', desc: 'Compiled records documenting 4,000+ Cherokee deaths during forced relocation.', type: 'archive', class: 'public', date: '1839-03-15', size: '23.4 MB' },
  ]},
  // 9/11
  { investigation: '9/11 Commission', category: 'Government', docs: [
    { title: '9/11 Commission Report', desc: 'Final report of the National Commission on Terrorist Attacks Upon the United States.', type: 'pdf', class: 'public', date: '2004-07-22', size: '28.4 MB' },
    { title: '28 Pages - Saudi Connection (Declassified)', desc: 'Previously classified section of Joint Inquiry detailing Saudi government connections.', type: 'pdf', class: 'public', date: '2016-07-15', size: '5.6 MB' },
    { title: 'CIA Inspector General 9/11 Accountability Report', desc: 'IG review of CIA actions and failures prior to September 11, 2001.', type: 'pdf', class: 'restricted', date: '2005-06-01', size: '8.9 MB' },
  ]},
  // Stingray / Surveillance Tech
  { investigation: 'Stingray Surveillance', category: 'Government', docs: [
    { title: 'Harris Corp Stingray NDA Template', desc: 'Non-disclosure agreement police departments sign to hide cell-site simulator use.', type: 'pdf', class: 'public', date: '2015-03-27', size: '890 KB' },
    { title: 'ACLU Stingray Tracking Report', desc: 'Comprehensive documentation of police use of cell-site simulators across 75+ agencies.', type: 'pdf', class: 'public', date: '2016-11-08', size: '12.3 MB' },
    { title: 'DOJ Policy Guidance - Cell-Site Simulators', desc: 'Department of Justice policy requiring warrants for federal use of Stingray devices.', type: 'pdf', class: 'public', date: '2015-09-03', size: '1.2 MB' },
  ]},
  // Citizens United / Dark Money
  { investigation: 'Dark Money in Politics', category: 'Financial', docs: [
    { title: 'Citizens United v. FEC - Supreme Court Decision', desc: 'Landmark ruling allowing unlimited corporate spending in elections.', type: 'pdf', class: 'public', date: '2010-01-21', size: '4.5 MB' },
    { title: 'OpenSecrets Dark Money Database', desc: 'Compiled records of politically active nonprofits spending without donor disclosure.', type: 'archive', class: 'public', date: '2024-06-15', size: '56.7 MB' },
    { title: 'IRS 501(c)(4) Political Spending Analysis', desc: 'Analysis of tax-exempt organizations engaged in undisclosed political spending.', type: 'pdf', class: 'public', date: '2023-11-08', size: '8.9 MB' },
  ]},
  // Waco
  { investigation: 'Waco Siege', category: 'Government', docs: [
    { title: 'DOJ Investigation Report - Waco', desc: 'Department of Justice report on ATF and FBI operations at Branch Davidian compound.', type: 'pdf', class: 'public', date: '1993-10-08', size: '18.9 MB' },
    { title: 'Danforth Report - Waco Special Counsel', desc: 'Independent counsel finding no government wrongdoing but documenting failures.', type: 'pdf', class: 'public', date: '2000-07-21', size: '12.3 MB' },
    { title: 'FLIR Footage Analysis', desc: 'Forward-looking infrared footage from April 19, 1993 final assault.', type: 'image', class: 'public', date: '1993-04-19', size: '45.2 MB' },
  ]},
  // Panama Papers
  { investigation: 'Panama Papers', category: 'Financial', docs: [
    { title: 'ICIJ Panama Papers Database', desc: 'Searchable database of 11.5 million leaked documents from Mossack Fonseca.', type: 'archive', class: 'public', date: '2016-04-03', size: '2.6 GB' },
    { title: 'Mossack Fonseca Shell Company Registry', desc: 'Registry of 214,488 offshore entities created by Panamanian law firm.', type: 'archive', class: 'public', date: '2016-05-09', size: '345 MB' },
    { title: 'ICIJ Investigation Summary - World Leaders', desc: 'Analysis identifying 12 current/former heads of state in leaked documents.', type: 'pdf', class: 'public', date: '2016-04-03', size: '8.9 MB' },
  ]},
  // FTX
  { investigation: 'FTX Collapse', category: 'Financial', docs: [
    { title: 'SEC v. Bankman-Fried Complaint', desc: 'SEC complaint alleging fraud in FTX crypto exchange defrauding investors of billions.', type: 'pdf', class: 'public', date: '2022-12-13', size: '2.3 MB' },
    { title: 'FTX Bankruptcy Examiner Report', desc: 'Detailed examination of FTX collapse, commingling of funds, and corporate governance failures.', type: 'pdf', class: 'public', date: '2023-04-09', size: '15.6 MB' },
    { title: 'SBF Trial Verdict and Sentencing', desc: 'Jury verdict and 25-year sentence for Sam Bankman-Fried on 7 fraud counts.', type: 'pdf', class: 'public', date: '2024-03-28', size: '890 KB' },
  ]},
  // Big Tobacco
  { investigation: 'Big Tobacco', category: 'Health', docs: [
    { title: 'Tobacco Industry Internal Documents', desc: 'Legacy Tobacco Documents Library - millions of internal industry documents released through litigation.', type: 'archive', class: 'public', date: '1998-11-23', size: '1.2 GB' },
    { title: 'DOJ v. Philip Morris - RICO Judgment', desc: 'Judge Kessler ruling that tobacco companies conspired to deceive the public about smoking dangers.', type: 'pdf', class: 'public', date: '2006-08-17', size: '18.9 MB' },
    { title: 'Master Settlement Agreement', desc: '1998 settlement between 46 states and major tobacco companies totaling $206 billion.', type: 'pdf', class: 'public', date: '1998-11-23', size: '8.4 MB' },
    { title: 'Surgeon General Reports on Smoking (1964-2020)', desc: 'Collected Surgeon General reports on health consequences of tobacco use.', type: 'archive', class: 'public', date: '2020-01-01', size: '345 MB' },
  ]},
  // Bhopal
  { investigation: 'Bhopal Disaster', category: 'Corporate', docs: [
    { title: 'Union Carbide Internal Safety Audit', desc: 'Internal audit identifying safety deficiencies months before December 1984 gas leak.', type: 'pdf', class: 'public', date: '1984-05-01', size: '4.5 MB' },
    { title: 'Indian Government Death Toll Analysis', desc: 'Government records documenting 3,787 immediate deaths and 16,000+ eventual fatalities.', type: 'pdf', class: 'public', date: '2010-06-07', size: '6.7 MB' },
    { title: 'CBI Charges Against Warren Anderson', desc: 'Indian criminal charges against Union Carbide CEO for culpable homicide.', type: 'pdf', class: 'public', date: '1991-02-01', size: '1.2 MB' },
  ]},
  // Facebook / Social Media
  { investigation: 'Facebook Mental Health Crisis', category: 'Corporate', docs: [
    { title: 'Facebook Internal Research - Teen Mental Health', desc: 'Internal Instagram research showing platform worsens body image issues in teenage girls.', type: 'pdf', class: 'public', date: '2021-09-14', size: '23.4 MB' },
    { title: 'Frances Haugen SEC Complaints', desc: 'Whistleblower SEC filings with supporting internal Facebook documents.', type: 'archive', class: 'public', date: '2021-10-03', size: '45.2 MB' },
    { title: 'Senate Commerce Committee Hearing Transcript', desc: 'Mark Zuckerberg testimony on child safety failures across Meta platforms.', type: 'text', class: 'public', date: '2024-01-31', size: '456 KB' },
  ]},
  // Nestle
  { investigation: 'Nestle Baby Formula Scandal', category: 'Corporate', docs: [
    { title: 'WHO International Code of Marketing of Breast-milk Substitutes', desc: 'WHO code adopted in response to aggressive formula marketing in developing nations.', type: 'pdf', class: 'public', date: '1981-05-21', size: '2.3 MB' },
    { title: 'IBFAN Breaking the Rules Report', desc: 'Documentation of Nestle violations of WHO code in developing countries.', type: 'pdf', class: 'public', date: '2014-01-15', size: '8.9 MB' },
  ]},
  // George Floyd
  { investigation: 'George Floyd Murder', category: 'Legal', docs: [
    { title: 'State v. Derek Chauvin - Murder Conviction', desc: 'Verdict finding Chauvin guilty of murder and manslaughter in death of George Floyd.', type: 'pdf', class: 'public', date: '2021-04-20', size: '1.8 MB' },
    { title: 'DOJ Investigation - Minneapolis Police', desc: 'Pattern and practice investigation finding systemic use of excessive force and discrimination.', type: 'pdf', class: 'public', date: '2023-06-16', size: '12.3 MB' },
    { title: 'Medical Examiner Report - George Floyd', desc: 'Autopsy report ruling death a homicide caused by law enforcement subdual.', type: 'pdf', class: 'restricted', date: '2020-06-01', size: '3.4 MB' },
  ]},
  // Climate Denial
  { investigation: 'Climate Denial', category: 'Corporate', docs: [
    { title: 'Exxon Internal Climate Research (1977-2003)', desc: 'Internal Exxon documents showing company knew about climate change decades before public denial.', type: 'archive', class: 'public', date: '2015-09-16', size: '89.3 MB' },
    { title: 'API Global Climate Science Communications Plan', desc: 'American Petroleum Institute memo outlining strategy to manufacture doubt about climate science.', type: 'pdf', class: 'public', date: '1998-04-01', size: '2.3 MB' },
    { title: 'House Oversight Committee - Big Oil Climate Deception', desc: 'Congressional investigation into fossil fuel industry disinformation campaigns.', type: 'pdf', class: 'public', date: '2022-09-14', size: '15.6 MB' },
  ]},
  // Drone Program
  { investigation: 'Drone Assassination Program', category: 'Government', docs: [
    { title: 'DOJ White Paper - Targeted Killing of US Citizens', desc: 'Legal justification for extrajudicial killing of American citizens by drone strike.', type: 'pdf', class: 'public', date: '2013-02-04', size: '1.2 MB' },
    { title: 'The Drone Papers - The Intercept', desc: 'Leaked military documents revealing kill chain process and civilian casualty rates.', type: 'archive', class: 'public', date: '2015-10-15', size: '34.5 MB' },
    { title: 'Bureau of Investigative Journalism Drone Database', desc: 'Compiled records of US drone strikes in Pakistan, Yemen, and Somalia.', type: 'archive', class: 'public', date: '2024-01-01', size: '23.4 MB' },
  ]},
  // Private Prisons
  { investigation: 'Prison Industrial Complex', category: 'Government', docs: [
    { title: 'DOJ Inspector General - Private Prison Safety', desc: 'IG report finding federal private prisons more dangerous than BOP facilities.', type: 'pdf', class: 'public', date: '2016-08-11', size: '6.7 MB' },
    { title: 'CoreCivic/GEO Group Political Contributions', desc: 'Analysis of private prison industry campaign contributions and lobbying expenditures.', type: 'pdf', class: 'public', date: '2023-03-15', size: '4.5 MB' },
    { title: 'Sentencing Project Mass Incarceration Report', desc: 'Analysis documenting US as world leader in incarceration with 2 million people imprisoned.', type: 'pdf', class: 'public', date: '2023-09-01', size: '8.9 MB' },
  ]},
  // WikiLeaks
  { investigation: 'WikiLeaks Disclosures', category: 'Government', docs: [
    { title: 'Collateral Murder Video - Baghdad Airstrike', desc: 'Classified Apache helicopter footage showing killing of Reuters journalists in Iraq.', type: 'image', class: 'public', date: '2010-04-05', size: '89.3 MB' },
    { title: 'Iraq War Logs', desc: '391,832 US Army field reports documenting civilian casualties and torture.', type: 'archive', class: 'public', date: '2010-10-22', size: '456 MB' },
    { title: 'Vault 7 - CIA Hacking Tools', desc: 'Leaked CIA cyber weapons and surveillance tools documentation.', type: 'archive', class: 'public', date: '2017-03-07', size: '234 MB' },
  ]},
  // Election 2000
  { investigation: '2000 Election', category: 'Government', docs: [
    { title: 'Bush v. Gore - Supreme Court Decision', desc: 'Per curiam decision halting Florida recount and effectively deciding 2000 presidential election.', type: 'pdf', class: 'public', date: '2000-12-12', size: '2.3 MB' },
    { title: 'NORC Florida Ballot Project', desc: 'National Opinion Research Center comprehensive review of 175,010 uncounted Florida ballots.', type: 'pdf', class: 'public', date: '2001-11-12', size: '8.9 MB' },
    { title: 'US Civil Rights Commission - Florida Election Report', desc: 'Finding of widespread voter disenfranchisement of Black voters in Florida.', type: 'pdf', class: 'public', date: '2001-06-01', size: '5.6 MB' },
  ]},
  // Guantanamo
  { investigation: 'Guantanamo Bay Detention', category: 'Government', docs: [
    { title: 'Guantanamo Bay Detainee Files (WikiLeaks)', desc: 'Leaked classified assessments of 779 Guantanamo detainees.', type: 'archive', class: 'public', date: '2011-04-24', size: '123 MB' },
    { title: 'Senate Armed Services Committee Torture Report', desc: 'Investigation into treatment of detainees in US custody.', type: 'pdf', class: 'public', date: '2008-12-11', size: '12.3 MB' },
  ]},
  // Voter Suppression
  { investigation: 'Voter Suppression', category: 'Government', docs: [
    { title: 'Shelby County v. Holder - Gutting VRA', desc: 'Supreme Court decision invalidating preclearance requirement of Voting Rights Act.', type: 'pdf', class: 'public', date: '2013-06-25', size: '3.4 MB' },
    { title: 'Brennan Center - Voter Purge Analysis', desc: 'Analysis of voter roll purges that disproportionately affect minority voters.', type: 'pdf', class: 'public', date: '2023-08-01', size: '6.7 MB' },
    { title: 'Georgia SB 202 Impact Assessment', desc: 'Analysis of restrictive voting law signed after 2020 election targeting minority access.', type: 'pdf', class: 'public', date: '2021-03-25', size: '4.5 MB' },
  ]},
  // Vaccine/Medical
  { investigation: 'Vaccine Injury Documentation', category: 'Health', docs: [
    { title: 'VAERS Database Annual Reports', desc: 'Vaccine Adverse Event Reporting System compiled annual data and analysis reports.', type: 'archive', class: 'public', date: '2024-01-01', size: '234 MB' },
    { title: 'National Vaccine Injury Compensation Claims', desc: 'HRSA data on claims filed and compensated through the National Vaccine Injury Compensation Program.', type: 'pdf', class: 'public', date: '2024-06-01', size: '12.3 MB' },
    { title: 'Pfizer Post-Authorization Adverse Events Report', desc: 'Cumulative analysis of post-authorization adverse event reports through February 2021.', type: 'pdf', class: 'public', date: '2021-04-30', size: '8.9 MB' },
  ]},
  // Fluoride
  { investigation: 'Fluoride Research', category: 'Health', docs: [
    { title: 'NTP Fluoride Neurotoxicity Systematic Review', desc: 'National Toxicology Program review associating fluoride exposure with lower IQ in children.', type: 'pdf', class: 'public', date: '2024-08-22', size: '15.6 MB' },
    { title: 'TSCA Fluoride Lawsuit - EPA Court Ruling', desc: 'Federal court ruling that fluoridation poses unreasonable risk of neurotoxicity injury.', type: 'pdf', class: 'public', date: '2024-09-24', size: '3.4 MB' },
  ]},
  // Weather Modification
  { investigation: 'Weather Modification Programs', category: 'Environmental', docs: [
    { title: 'Operation Popeye - Declassified Records', desc: 'Declassified records of US military cloud seeding operations over Vietnam and Laos.', type: 'pdf', class: 'public', date: '1974-03-20', size: '8.9 MB' },
    { title: 'NOAA Weather Modification Activity Reports', desc: 'Annual reports on permitted weather modification activities in the United States.', type: 'archive', class: 'public', date: '2024-01-01', size: '23.4 MB' },
    { title: 'ENMOD Convention - UN Treaty', desc: 'Convention on the Prohibition of Military Use of Environmental Modification Techniques.', type: 'pdf', class: 'public', date: '1978-10-05', size: '1.2 MB' },
  ]},
  // Additional investigations with docs
  { investigation: 'Immigration Detention', category: 'Government', docs: [
    { title: 'DHS OIG - Immigration Detention Conditions', desc: 'Inspector General reports documenting inhumane conditions in ICE detention facilities.', type: 'pdf', class: 'public', date: '2019-07-02', size: '15.6 MB' },
    { title: 'Family Separation Zero-Tolerance Memo', desc: 'DOJ memo implementing policy resulting in separation of 5,500+ children from parents.', type: 'pdf', class: 'public', date: '2018-04-06', size: '890 KB' },
    { title: 'ICE Hysterectomy Whistleblower Complaint', desc: 'Nurse Dawn Wooten complaint alleging forced medical procedures at Irwin County facility.', type: 'pdf', class: 'public', date: '2020-09-14', size: '2.3 MB' },
  ]},
  // Amazon
  { investigation: 'Amazon Worker Abuse', category: 'Corporate', docs: [
    { title: 'OSHA Citations - Amazon Warehouse Safety', desc: 'OSHA findings of willful violations causing worker injuries at Amazon fulfillment centers.', type: 'pdf', class: 'public', date: '2023-01-18', size: '4.5 MB' },
    { title: 'Senate HELP Committee - Amazon Safety Report', desc: 'Investigation finding Amazon warehouses cause injuries at double industry average rate.', type: 'pdf', class: 'public', date: '2023-04-12', size: '8.9 MB' },
  ]},
  // Police Violence
  { investigation: 'Police Violence & No-Knock Raids', category: 'Government', docs: [
    { title: 'Breonna Taylor Wrongful Death Settlement', desc: 'Louisville Metro settlement and police reform agreement following no-knock raid killing.', type: 'pdf', class: 'public', date: '2020-09-15', size: '3.4 MB' },
    { title: 'DOJ Pattern and Practice Investigations', desc: 'Compiled findings from federal investigations into police departments nationwide.', type: 'archive', class: 'public', date: '2024-01-01', size: '234 MB' },
    { title: 'Mapping Police Violence Database', desc: 'Comprehensive database documenting police killings with 10,000+ entries since 2013.', type: 'archive', class: 'public', date: '2024-12-31', size: '56.7 MB' },
  ]},
  // COVID Origins
  { investigation: 'COVID Origins Investigation', category: 'Health', docs: [
    { title: 'House Select Committee - COVID Origins Report', desc: 'Congressional investigation into origins of SARS-CoV-2, lab leak vs. natural spillover.', type: 'pdf', class: 'public', date: '2023-03-08', size: '12.3 MB' },
    { title: 'NIH-EcoHealth Alliance Grant Documents', desc: 'FOIA-obtained grant applications and progress reports for Wuhan gain-of-function research.', type: 'archive', class: 'public', date: '2021-09-07', size: '34.5 MB' },
    { title: 'WHO Mission Report - Wuhan', desc: 'Joint WHO-China study team report on COVID-19 origins.', type: 'pdf', class: 'public', date: '2021-03-30', size: '8.9 MB' },
    { title: 'Senate HELP Committee Biosafety Report', desc: 'Investigation into US-funded gain-of-function research and biosafety oversight.', type: 'pdf', class: 'public', date: '2024-06-11', size: '6.7 MB' },
  ]},
  // EMF / 5G
  { investigation: '5G Health Research', category: 'Health', docs: [
    { title: 'NTP Cell Phone Radiation Study', desc: 'National Toxicology Program finding clear evidence of carcinogenic activity from cell phone RF radiation.', type: 'pdf', class: 'public', date: '2018-11-01', size: '18.9 MB' },
    { title: 'Ramazzini Institute Replication Study', desc: 'Italian institute confirming NTP findings of RF radiation cancer link at lower exposure levels.', type: 'pdf', class: 'public', date: '2018-03-22', size: '8.9 MB' },
    { title: 'FCC RF Exposure Guidelines (Outdated Since 1996)', desc: 'Current FCC RF safety guidelines last updated in 1996, set based on thermal effects only.', type: 'pdf', class: 'public', date: '1996-08-01', size: '2.3 MB' },
    { title: 'DC Circuit Court - FCC Guidelines Inadequate', desc: 'Court ruling that FCC failed to adequately explain why 1996 RF guidelines remain protective.', type: 'pdf', class: 'public', date: '2021-08-13', size: '4.5 MB' },
  ]},
  // Mass Shooting / Gun Violence
  { investigation: 'Gun Violence', category: 'Government', docs: [
    { title: 'CDC Gun Violence Research Funding Ban (Dickey Amendment)', desc: 'History and impact of congressional ban on CDC gun violence research funding.', type: 'pdf', class: 'public', date: '2019-12-20', size: '3.4 MB' },
    { title: 'Sandy Hook Families v. Remington Settlement', desc: '$73 million settlement in wrongful death lawsuit against AR-15 manufacturer.', type: 'pdf', class: 'public', date: '2022-02-15', size: '5.6 MB' },
  ]},
  // Election Interference
  { investigation: 'Russian Election Interference', category: 'Government', docs: [
    { title: 'DNI Intelligence Community Assessment', desc: 'ICA finding that Russia interfered in 2016 election to help Trump win presidency.', type: 'pdf', class: 'public', date: '2017-01-06', size: '6.7 MB' },
    { title: 'Senate Intelligence Committee - Russian Active Measures', desc: 'Bipartisan report confirming Russian interference and Trump campaign contacts.', type: 'pdf', class: 'public', date: '2020-08-18', size: '18.9 MB' },
    { title: 'Internet Research Agency Indictment', desc: 'DOJ indictment of 13 Russians and 3 entities for conspiracy to defraud the US.', type: 'pdf', class: 'public', date: '2018-02-16', size: '2.3 MB' },
    { title: 'GRU Officers Indictment - DNC Hack', desc: 'DOJ indictment of 12 GRU officers for hacking DNC and DCCC.', type: 'pdf', class: 'public', date: '2018-07-13', size: '3.4 MB' },
  ]},
  // Chemtrails / Aerosol
  { investigation: 'Aerosol Geoengineering Programs', category: 'Environmental', docs: [
    { title: 'NAS Report - Reflecting Sunlight', desc: 'National Academies report on solar radiation management and stratospheric aerosol injection.', type: 'pdf', class: 'public', date: '2021-03-25', size: '12.3 MB' },
    { title: 'Harvard Solar Geoengineering Research Program', desc: 'SCoPEx stratospheric aerosol injection experiment documentation and protocols.', type: 'pdf', class: 'public', date: '2022-01-15', size: '8.9 MB' },
    { title: 'Congressional Research Service - Geoengineering', desc: 'CRS analysis of federal research and governance gaps in climate intervention.', type: 'pdf', class: 'public', date: '2023-06-01', size: '4.5 MB' },
  ]},
  // Blackwater
  { investigation: 'Blackwater/Academi War Crimes', category: 'Government', docs: [
    { title: 'Nisour Square Massacre Investigation', desc: 'FBI investigation of September 2007 Blackwater shooting killing 17 Iraqi civilians.', type: 'pdf', class: 'public', date: '2008-12-08', size: '8.9 MB' },
    { title: 'House Oversight Committee - Blackwater Report', desc: 'Congressional investigation into Blackwater USA operations in Iraq.', type: 'pdf', class: 'public', date: '2007-10-01', size: '15.6 MB' },
  ]},
  // Regulatory Capture
  { investigation: 'Regulatory Capture', category: 'Corporate', docs: [
    { title: 'Revolving Door Database - Federal Agencies', desc: 'Analysis of 4,000+ moves between government regulatory positions and regulated industries.', type: 'archive', class: 'public', date: '2024-01-01', size: '23.4 MB' },
    { title: 'GAO Report - Financial Regulatory Gaps', desc: 'Government Accountability Office analysis of regulatory capture in financial oversight.', type: 'pdf', class: 'public', date: '2023-03-15', size: '6.7 MB' },
  ]},
  // WorldCom
  { investigation: 'WorldCom Fraud', category: 'Financial', docs: [
    { title: 'SEC v. WorldCom - Complaint', desc: 'SEC enforcement action for $11 billion accounting fraud, largest in US history at time.', type: 'pdf', class: 'public', date: '2002-06-26', size: '3.4 MB' },
    { title: 'Thornburgh Report - WorldCom Investigation', desc: 'Court-appointed examiner report on corporate governance failures.', type: 'pdf', class: 'public', date: '2004-03-31', size: '18.9 MB' },
  ]},
];

// Flatten and generate IDs
let id = 9; // Start after existing 8
const allDocs = [];
for (const set of documentSets) {
  for (const doc of set.docs) {
    allDocs.push({
      id: String(id++),
      title: doc.title,
      description: doc.desc,
      type: doc.type,
      classification: doc.class,
      date: doc.date,
      size: doc.size,
      category: set.category,
      investigation: set.investigation,
      downloadCount: Math.floor(Math.random() * 5000) + 100,
      previewAvailable: doc.type !== 'archive',
    });
  }
}

console.log('Generated', allDocs.length, 'document entries');

// Read current file
const content = fs.readFileSync('src/app/documents/page.tsx', 'utf8');

// Find the end of the existing documents array
const arrayEndRe = /^(\s*}\s*,?\s*)\n(\s*\];\s*)$/m;

// Find the closing of the documents array more carefully
// Look for the last entry (id: '8') then find the closing bracket
const lastEntryIdx = content.indexOf("id: '8'");
const closingBracketIdx = content.indexOf('];', lastEntryIdx);

if (closingBracketIdx === -1) {
  console.error('Could not find documents array closing bracket');
  process.exit(1);
}

// Generate the new entries as text
const docEntries = allDocs.map(d => `  {
    id: '${d.id}',
    title: '${d.title.replace(/'/g, "\\'")}',
    description: '${d.description.replace(/'/g, "\\'")}',
    type: '${d.type}',
    classification: '${d.classification}',
    date: '${d.date}',
    size: '${d.size}',
    category: '${d.category}',${d.investigation ? `\n    investigation: '${d.investigation.replace(/'/g, "\\'")},` : ''}
    downloadCount: ${d.downloadCount},
    previewAvailable: ${d.previewAvailable}
  }`).join(',\n');

const before = content.substring(0, closingBracketIdx);
const after = content.substring(closingBracketIdx);

const newContent = before + '\n  // === Investigation Documents (auto-generated) ===\n' + docEntries + ',\n' + after;

fs.writeFileSync('src/app/documents/page.tsx', newContent);
console.log('Done! Total documents:', 8 + allDocs.length);
