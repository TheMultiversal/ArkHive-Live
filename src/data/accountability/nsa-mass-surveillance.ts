import type { AccountabilityData } from '@/types/accountability';

export const nsaMassSurveillanceAccountability: AccountabilityData = {
  investigationSlug: 'nsa-mass-surveillance',
  crimeSummary: 'The National Security Agency and cooperating intelligence agencies conducted unconstitutional mass surveillance of billions of people worldwide, including hundreds of millions of Americans, through programs including STELLARWIND, PRISM, XKeyscore, MUSCULAR, and bulk metadata collection. The programs violated the Fourth Amendment, the Foreign Intelligence Surveillance Act, and the Wiretap Act. Senior officials lied to Congress about the programs, classified evidence of illegality, and prosecuted whistleblowers who tried to expose them through official channels.',
  totalHarm: 'Constitutional rights of hundreds of millions of Americans violated through warrantless surveillance; global communications infrastructure compromised through encryption backdoors (BULLRUN); $35-180 billion in economic losses to the US tech industry; chilling effects on free speech, press freedom, and political association; whistleblowers prosecuted and persecuted while architects of illegal programs faced zero consequences; democratic oversight rendered impossible through classification abuse',
  victimsAffected: 'Hundreds of millions of Americans whose phone records, emails, internet activity, and communications were collected without warrants; billions of people worldwide subjected to NSA surveillance; journalists and sources whose communications were monitored; Muslim-American communities disproportionately targeted; whistleblowers Thomas Drake, William Binney, Kirk Wiebe, Ed Loomis, and Diane Roark who were raided and investigated for reporting illegality through proper channels',
  primaryTargets: [
    {
      name: 'Keith B. Alexander',
      role: 'NSA Director (2005-2014) who oversaw the most aggressive expansion of surveillance programs',
      currentStatus: 'Retired; founded IronNet Cybersecurity charging $600,000/month consulting fees based on classified knowledge',
      accountabilityPath: 'Congressional investigation into whether surveillance expansion violated statutory authority; examination of revolving-door enrichment from classified programs',
      obstacles: ['State secrets privilege blocks litigation', 'Classification prevents evidence disclosure', 'Statute of limitations concerns', 'Bipartisan support for surveillance programs']
    },
    {
      name: 'James R. Clapper',
      role: 'Director of National Intelligence who committed perjury before Congress denying mass surveillance',
      currentStatus: 'Never prosecuted despite irrefutable evidence of false testimony; retired with full benefits; CNN national security analyst',
      accountabilityPath: 'Criminal referral for perjury (18 U.S.C. 1001); congressional censure; ethics investigation',
      obstacles: ['DOJ declined prosecution', 'Statute of limitations has expired for original testimony', 'Political establishment reluctance to prosecute former intelligence chiefs']
    },
    {
      name: 'Michael Hayden',
      role: 'NSA Director (1999-2005) and CIA Director (2006-2009) who authorized and implemented STELLARWIND',
      currentStatus: 'Retired; private sector consulting and media commentary; no legal accountability',
      accountabilityPath: 'Congressional investigation into STELLARWIND authorization without statutory basis; civil litigation by affected individuals',
      obstacles: ['State secrets privilege', 'Retroactive legalization through FISA Amendments Act', 'Classification of evidence']
    },
    {
      name: 'George W. Bush',
      role: 'President who secretly authorized STELLARWIND warrantless surveillance in October 2001',
      currentStatus: 'Former president; no legal accountability; presidential immunity claims',
      accountabilityPath: 'Historical accountability through congressional commission; declassification of STELLARWIND authorization documents',
      obstacles: ['Presidential immunity', 'National security classification', 'Bipartisan consensus against prosecution of former presidents for national security decisions']
    },
    {
      name: 'AT&T / Verizon / Major Telecoms',
      role: 'Provided bulk access to customer communications and installed NSA interception equipment',
      currentStatus: 'Granted retroactive legal immunity by Congress in 2008 FISA Amendments Act',
      accountabilityPath: 'Legislative repeal of retroactive immunity; FCC regulatory action; shareholder litigation',
      obstacles: ['Congressional immunity grant', 'State secrets privilege killed 40+ lawsuits', 'Ongoing classified cooperation agreements']
    },
    {
      name: 'John Yoo / Office of Legal Counsel',
      role: 'Authored secret legal opinions claiming presidential authority to override FISA warrant requirements',
      currentStatus: 'Law professor at UC Berkeley; no disciplinary action',
      accountabilityPath: 'State bar disciplinary proceedings; academic accountability; congressional investigation into OLC opinion process',
      obstacles: ['Legal opinions given wide immunity', 'Classification of underlying opinions', 'Academic freedom claims']
    }
  ],
  legalMechanisms: [
    {
      name: 'Fourth Amendment Constitutional Challenge',
      statute: 'Fourth Amendment to the U.S. Constitution',
      description: 'Prohibits unreasonable searches and seizures; requires warrants based on probable cause. Multiple federal courts have ruled NSA programs violated the Fourth Amendment.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['Federal judiciary', 'Congress', 'State attorneys general'],
      notes: 'Federal courts in ACLU v. Clapper, Klayman v. Obama, and United States v. Moalin all found programs illegal or unconstitutional'
    },
    {
      name: 'FISA Criminal Penalties',
      statute: '50 U.S.C. 1809',
      description: 'Makes it a crime to engage in electronic surveillance not authorized by statute. Carries penalties of up to 5 years imprisonment per violation.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years from each act of unauthorized surveillance',
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['DOJ Criminal Division', 'Special counsel', 'Inspector General'],
      notes: 'STELLARWIND operated without any statutory authorization from 2001-2007. The FISA Court itself found the NSA systematically violated even the permissive orders it had issued.'
    },
    {
      name: 'False Statements to Congress',
      statute: '18 U.S.C. 1001',
      description: 'Criminalizes making materially false statements to Congress. Clapper denied under oath that the NSA collected data on millions of Americans.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (expired for Clapper testimony)',
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['DOJ', 'Congressional referral'],
      notes: 'Clapper was given the question in advance and chose to provide a false answer. DOJ declined prosecution.'
    },
    {
      name: 'Wiretap Act Violations',
      statute: '18 U.S.C. 2511',
      description: 'Prohibits intentional interception of wire, oral, or electronic communications without lawful authorization.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years criminal; 2 years civil from discovery',
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['DOJ', 'Private civil action', 'State attorneys general'],
      notes: 'MUSCULAR tapped private fiber-optic cables without court orders. Upstream Collection intercepted content transiting internet backbone infrastructure.'
    },
    {
      name: 'Whistleblower Retaliation Protection',
      statute: 'Intelligence Community Whistleblower Protection Act',
      description: 'Provides protections for intelligence community employees who report waste, fraud, abuse, or violations of law through proper channels.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['Intelligence Community Inspector General', 'Congressional intelligence committees', 'Office of Special Counsel'],
      notes: 'Drake, Binney, Wiebe, Loomis, and Roark were raided and prosecuted in retaliation for reporting illegality through official channels'
    },
    {
      name: 'FOIA Declassification',
      statute: 'Freedom of Information Act (5 U.S.C. 552)',
      description: 'Provides public right of access to government records. Classification was systematically used to conceal evidence of illegality.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['Any person or organization', 'Federal courts for enforcement', 'Interagency Security Classification Appeals Panel'],
      notes: 'Key documents remain classified including STELLARWIND IG report, FISA Court opinions, and NSA internal audits'
    },
    {
      name: 'Civil Rights Action',
      statute: '42 U.S.C. 1983',
      description: 'Allows civil suits against government officials who violate constitutional rights under color of law.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state (typically 2-3 years); discovery rule may extend',
      reachesHeirs: false,
      applicability: 'potentially_applicable',
      authorizedActors: ['Private plaintiffs', 'Civil rights organizations', 'Public interest law firms'],
      notes: 'Qualified immunity is a barrier but not absolute for clearly established constitutional violations'
    }
  ],
  wealthTrace: [
    {
      name: 'Booz Allen Hamilton',
      relationship: 'Primary NSA contractor providing thousands of cleared personnel including Snowden',
      transferMethod: 'Government contracts',
      estimatedValue: '$5.8 billion annually in intelligence contracts',
      legalEntities: ['Booz Allen Hamilton Holding Corporation', 'The Carlyle Group (former majority owner)'],
      recoveryMechanisms: ['Contract fraud investigation', 'False Claims Act qui tam actions', 'Congressional oversight of contractor spending']
    },
    {
      name: 'AT&T (FAIRVIEW Program)',
      relationship: 'Provided NSA direct access to internet backbone infrastructure',
      transferMethod: 'Classified cooperation agreements and government payments',
      estimatedValue: '$188 million+ annually',
      legalEntities: ['AT&T Inc.'],
      recoveryMechanisms: ['Repeal of retroactive immunity', 'FCC regulatory action', 'State consumer protection actions']
    },
    {
      name: 'NSA Utah Data Center',
      relationship: 'Massive facility built to store intercepted communications data',
      transferMethod: 'Federal construction appropriations',
      estimatedValue: '$1.5 billion construction, hundreds of millions annually to operate',
      legalEntities: ['US Army Corps of Engineers', 'National Security Agency'],
      recoveryMechanisms: ['Congressional defunding', 'Data destruction orders from courts', 'Legislative mandates for data minimization']
    },
    {
      name: 'IronNet Cybersecurity (Keith Alexander)',
      relationship: 'Former NSA Director converted classified knowledge into private profit',
      transferMethod: 'Private equity, government advisory contracts, IPO',
      estimatedValue: 'Company valued at $1.2 billion at IPO; Alexander charged $600,000/month consulting fees',
      legalEntities: ['IronNet Cybersecurity Inc.'],
      recoveryMechanisms: ['Ethics investigation into revolving door enrichment', 'Congressional investigation of post-government monetization of classified knowledge']
    },
    {
      name: 'Defense Intelligence Contractor Complex',
      relationship: 'Private companies operating classified surveillance infrastructure',
      transferMethod: 'Government contracts consuming over 70% of intelligence budget',
      estimatedValue: 'Tens of billions annually across Raytheon, Northrop Grumman, Palantir, Leidos',
      legalEntities: ['Raytheon Technologies', 'Northrop Grumman', 'Palantir Technologies', 'Leidos Holdings'],
      recoveryMechanisms: ['Contract audit and reform', 'False Claims Act', 'Congressional oversight']
    },
    {
      name: 'Five Eyes Intelligence Alliance',
      relationship: 'Resource sharing arrangement to circumvent domestic surveillance restrictions',
      transferMethod: 'Intelligence sharing agreements and joint operations',
      estimatedValue: 'Classified, billions collectively across US, UK, Australia, Canada, New Zealand',
      legalEntities: ['GCHQ (UK)', 'Australian Signals Directorate', 'Communications Security Establishment (Canada)', 'Government Communications Security Bureau (New Zealand)'],
      recoveryMechanisms: ['Treaty renegotiation', 'Legislative restrictions on intelligence sharing', 'International court challenges']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Inspector General of the Intelligence Community',
      title: 'IC Inspector General',
      jurisdiction: 'All intelligence community agencies including NSA',
      powers: ['Investigate waste, fraud, and abuse across intelligence community', 'Receive and investigate whistleblower complaints', 'Issue reports to Congress', 'Recommend criminal referrals to DOJ']
    },
    {
      name: 'Senate Select Committee on Intelligence',
      title: 'SSCI Chairman and Ranking Member',
      jurisdiction: 'Congressional oversight of all intelligence activities',
      powers: ['Subpoena power', 'Access to classified programs', 'Confirm intelligence community leadership', 'Authorize intelligence budgets', 'Conduct investigations and public hearings']
    },
    {
      name: 'House Permanent Select Committee on Intelligence',
      title: 'HPSCI Chairman',
      jurisdiction: 'House oversight of intelligence activities',
      powers: ['Subpoena power', 'Budget authorization', 'Oversight hearings', 'Declassification authority for committee reports']
    },
    {
      name: 'Privacy and Civil Liberties Oversight Board (PCLOB)',
      title: 'PCLOB Chairman',
      jurisdiction: 'Review of counterterrorism programs for civil liberties compliance',
      powers: ['Access to all classified programs', 'Subpoena power', 'Issue public reports', 'Recommend program changes or termination']
    },
    {
      name: 'Foreign Intelligence Surveillance Court',
      title: 'FISA Court Presiding Judge',
      jurisdiction: 'Judicial oversight of foreign intelligence surveillance',
      powers: ['Approve or deny surveillance applications', 'Issue orders requiring program modifications', 'Find agencies in violation of court orders', 'Appoint amici curiae for significant legal questions']
    },
    {
      name: 'Attorney General of the United States',
      title: 'Attorney General',
      jurisdiction: 'Federal criminal enforcement including intelligence community crimes',
      powers: ['Prosecute violations of FISA, Wiretap Act, and false statements statutes', 'Appoint special counsel', 'Issue criminal referrals', 'Authorize declassification for prosecution purposes']
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Citizens can demand surveillance reform through political engagement, support legal challenges, protect their own communications through encryption, and build political coalitions for accountability',
      steps: [
        { step: 1, title: 'Understand Your Surveillance Exposure', description: 'Review the Snowden documents and PCLOB reports to understand which programs affect your communications. All major email, phone, and internet services have been subject to NSA collection.', requirements: ['Internet access'], estimatedTime: '2-4 hours' },
        { step: 2, title: 'Adopt Communications Security', description: 'Use end-to-end encrypted messaging (Signal), encrypted email (ProtonMail), VPN services, and the Tor browser. Encryption is the single most effective individual defense against mass surveillance.', requirements: ['Technical literacy', 'Encrypted communication tools'], estimatedTime: '1-2 hours setup' },
        { step: 3, title: 'Contact Elected Representatives', description: 'Contact your senators and representative demanding: opposition to Section 702 expansion, support for warrant requirements for government access to communications, and investigation of intelligence community officials who lied to Congress.', requirements: ['Knowledge of representatives', 'Awareness of current legislation'], filingTarget: 'Congressional offices', estimatedTime: '30 minutes per contact' },
        { step: 4, title: 'Support Reform Organizations', description: 'Donate to and volunteer with organizations leading surveillance reform litigation and advocacy: EFF, ACLU, Freedom of the Press Foundation, Brennan Center for Justice.', requirements: ['Financial resources'], estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['Fourth Amendment', 'FOIA'],
      urgency: 'high' as const
    },
    {
      role: 'journalist',
      overview: 'Journalists play a critical role in exposing ongoing surveillance abuses, protecting sources through operational security, and investigating the revolving door between intelligence agencies and private contractors',
      steps: [
        { step: 1, title: 'Adopt Source Protection Protocols', description: 'Use SecureDrop for source communication, air-gapped computers for classified documents, and proper operational security. The prosecution of NSA whistleblowers demonstrates the real risks sources face.', requirements: ['SecureDrop instance', 'Air-gapped hardware', 'OPSEC training'], estimatedTime: 'Ongoing' },
        { step: 2, title: 'Investigate Current Surveillance Programs', description: 'File FOIA requests for NSA, FBI, and CIA records related to surveillance programs, FISA Court opinions, and internal compliance reports. Challenge classification decisions through administrative appeals and litigation.', requirements: ['FOIA expertise', 'Legal support'], filingTarget: 'NSA FOIA Office, ODNI, FBI Records Management', estimatedTime: '6-18 months per request' },
        { step: 3, title: 'Examine the Intelligence-Industrial Complex', description: 'Investigate financial relationships between intelligence agencies and contractors like Booz Allen Hamilton, Palantir, and IronNet. Track revolving-door employment and lobbying. Follow procurement contracts.', requirements: ['Financial investigation skills', 'FOIA access'], estimatedTime: '3-6 months' },
        { step: 4, title: 'Document Ongoing Constitutional Violations', description: 'Report on Section 702 reauthorization, FBI backdoor searches, data broker purchases, and fusion center surveillance. Document the gap between reform rhetoric and actual surveillance practice.', requirements: ['National security reporting expertise', 'Congressional sources'], estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['FOIA', 'First Amendment'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer',
      overview: 'Legal professionals can challenge surveillance programs through constitutional litigation, represent whistleblowers, pursue FOIA enforcement, and advocate for legislative reform',
      steps: [
        { step: 1, title: 'Challenge Standing Barriers', description: 'Develop novel standing theories to overcome the Catch-22 identified in Clapper v. Amnesty International, where plaintiffs could not prove they were surveilled because the programs were secret. Snowden disclosures provide new evidentiary basis.', requirements: ['Constitutional law expertise', 'National security clearance helpful'], filingTarget: 'Federal district courts', legalBasis: ['Fourth Amendment', 'Bivens actions', '42 U.S.C. 1983'], estimatedTime: '2-5 years' },
        { step: 2, title: 'Pursue FOIA Litigation', description: 'File FOIA lawsuits to compel declassification of FISA Court opinions, NSA IG reports, and internal compliance audits. Challenge improper classification decisions.', requirements: ['FOIA litigation experience'], filingTarget: 'U.S. District Court for the District of Columbia', legalBasis: ['5 U.S.C. 552'], estimatedTime: '1-3 years' },
        { step: 3, title: 'Represent Whistleblowers', description: 'Provide legal representation to intelligence community whistleblowers. Challenge Espionage Act prosecutions that prevent whistleblowers from explaining their motives to juries.', requirements: ['National security law expertise', 'Security clearance'], filingTarget: 'Federal courts', legalBasis: ['Intelligence Community Whistleblower Protection Act'], estimatedTime: '1-5 years' },
        { step: 4, title: 'Advocate for Legislative Reform', description: 'Draft model legislation requiring warrants for all government access to communications, ending Section 702 backdoor searches, and providing meaningful whistleblower protections for intelligence community employees.', requirements: ['Legislative drafting expertise', 'Congressional relationships'], filingTarget: 'Congressional committees', estimatedTime: '1-2 congressional sessions' }
      ],
      relevantMechanisms: ['Fourth Amendment', '50 U.S.C. 1809', '18 U.S.C. 2511', 'FOIA'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official',
      overview: 'Elected officials have unique power to conduct oversight, declassify information, reform surveillance authorities, and hold intelligence officials accountable through confirmation and budgetary processes',
      steps: [
        { step: 1, title: 'Demand Comprehensive Intelligence Oversight', description: 'Use committee positions to demand full briefings on current surveillance programs, compliance violations, and the scope of Section 702 collection of Americans communications. Reference the PCLOB findings that bulk collection was illegal.', requirements: ['Intelligence committee membership or leadership'], filingTarget: 'Intelligence committee proceedings', estimatedTime: 'Ongoing' },
        { step: 2, title: 'Introduce Warrant Requirement Legislation', description: 'Introduce and champion legislation requiring individualized warrants for all government access to Americans communications, closing the Section 702 backdoor search loophole, and requiring court approval for data broker purchases.', requirements: ['Legislative drafting support', 'Co-sponsors'], filingTarget: 'Senate and House floor', legalBasis: ['Constitutional authority'], estimatedTime: '1-2 congressional sessions' },
        { step: 3, title: 'Declassify Key Documents', description: 'Use congressional authority to declassify FISA Court opinions, NSA IG reports, and internal audits documenting constitutional violations. The public cannot debate surveillance policy when the facts are classified.', requirements: ['Committee chairmanship or classification authority'], filingTarget: 'Committee proceedings', estimatedTime: '3-6 months' },
        { step: 4, title: 'Block Confirmations Until Accountability', description: 'Use confirmation hearing leverage to demand that intelligence community nominees commit to transparency, compliance with court orders, and cooperation with oversight. Block nominees who refuse.', requirements: ['Senate confirmation authority'], filingTarget: 'Senate confirmation proceedings', estimatedTime: 'Per nomination cycle' }
      ],
      relevantMechanisms: ['Constitutional congressional authority', 'Intelligence authorization and appropriations'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement',
      overview: 'Law enforcement officials at the Inspector General and DOJ Criminal Division levels can investigate surveillance abuses, protect whistleblowers, and ensure compliance with court orders',
      steps: [
        { step: 1, title: 'Conduct Criminal Investigation of FISA Violations', description: 'Investigate whether specific surveillance activities violated 50 U.S.C. 1809 (unauthorized electronic surveillance) and 18 U.S.C. 2511 (Wiretap Act). The FISA Court itself documented systematic violations.', requirements: ['DOJ Criminal Division authority', 'Security clearance'], filingTarget: 'Federal grand jury', legalBasis: ['50 U.S.C. 1809', '18 U.S.C. 2511'], estimatedTime: '1-3 years' },
        { step: 2, title: 'Investigate Whistleblower Retaliation', description: 'Investigate whether the prosecution of Thomas Drake, raid on William Binney, and investigation of Diane Roark constituted illegal retaliation against protected whistleblower activity.', requirements: ['Inspector General authority'], filingTarget: 'IG investigative report', estimatedTime: '6-12 months' },
        { step: 3, title: 'Audit Current Compliance', description: 'Conduct comprehensive audit of current FBI Section 702 query compliance, NSA minimization procedures, and adherence to FISA Court orders. Document and refer violations for prosecution or administrative action.', requirements: ['IG or PCLOB authority', 'Classified access'], filingTarget: 'Compliance report to Congress', estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['50 U.S.C. 1809', '18 U.S.C. 2511', 'IC Whistleblower Protection Act'],
      urgency: 'high' as const
    },
    {
      role: 'regulator',
      overview: 'Regulatory bodies including the PCLOB, FCC, and FTC can investigate surveillance practices, enforce privacy protections, and recommend program modifications or terminations',
      steps: [
        { step: 1, title: 'PCLOB Comprehensive Section 702 Review', description: 'Conduct a comprehensive review of Section 702 implementation under the 2024 reauthorization, including the expanded definition of "electronic communications service provider" and its impact on Americans privacy rights.', requirements: ['Full PCLOB membership', 'Classified access'], filingTarget: 'Public report with classified annex', estimatedTime: '12-18 months' },
        { step: 2, title: 'FCC Investigation of Telecom Cooperation', description: 'Investigate the scope of ongoing telecom company cooperation with intelligence agencies and whether it complies with communications privacy regulations and customer agreements.', requirements: ['FCC enforcement authority'], filingTarget: 'FCC enforcement action', estimatedTime: '6-12 months' },
        { step: 3, title: 'Recommend Program Modifications', description: 'Issue formal recommendations for surveillance program modifications including mandatory warrant requirements, enhanced minimization, independent compliance auditing, and meaningful penalties for violations.', requirements: ['Regulatory authority', 'Technical expertise'], filingTarget: 'Congressional testimony and public reports', estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['PCLOB enabling legislation', 'FCC regulatory authority'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Warrant requirement enacted for all government access to Americans communications, closing the Section 702 backdoor search loophole',
    'Full declassification of FISA Court opinions, NSA IG reports, and internal compliance audits documenting surveillance illegality',
    'Criminal investigation into whether specific surveillance activities constituted violations of FISA and the Wiretap Act',
    'Meaningful whistleblower protections enacted for intelligence community employees, including Espionage Act reform to allow public interest defense',
    'Independent compliance auditing mechanism established with authority to sanction violations and refer for prosecution',
    'Repeal of retroactive telecom immunity from the 2008 FISA Amendments Act',
    'Congressional investigation into the revolving door between intelligence agencies and private contractors, with ethics reform',
    'Edward Snowden charges resolved in a manner that acknowledges the public interest served by his disclosures and the illegality of the programs he exposed',
    'Comprehensive reform of the classification system to prevent the use of secrecy to conceal illegality',
    'Data minimization requirements enacted requiring destruction of unlawfully collected communications of Americans'
  ]
};
