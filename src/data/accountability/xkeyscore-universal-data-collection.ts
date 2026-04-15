import type { AccountabilityData } from '@/types/accountability';

export const xkeyscoreUniversalDataCollectionAccountability: AccountabilityData = {
  investigationSlug: 'xkeyscore-universal-data-collection',
  crimeSummary: 'The NSA built and operates XKeyscore, a global surveillance system spanning 700+ servers across 150+ sites worldwide that collects and indexes virtually all internet activity, including emails, chats, browsing history, search queries, and keystrokes. NSA analysts can search this data using simple web forms with no warrant, no supervisor approval, and no probable cause. The FISA Court found the NSA engaged in "systematic overcollection" of domestic communications but classified the opinion. The FBI conducted 3.4 million warrantless searches of Americans\' data in 2021. Five Eyes partners share data to circumvent domestic legal restrictions. The DEA uses parallel construction to launder surveillance-derived evidence in criminal cases. Section 702 was reauthorized in 2024 with expanded authorities. No NSA official has been disciplined. Edward Snowden was charged under the Espionage Act for revealing the system.',
  totalHarm: 'Warrantless surveillance of billions of internet communications worldwide; incidental collection of millions of Americans\' communications without warrants; 2,776 documented privacy violations at Fort Meade alone in one year; LOVEINT abuses by analysts; chilling effect on journalism, legal representation, and political dissent; parallel construction denying defendants constitutional rights; $10B+ annually in taxpayer funding; diplomatic crises with allies; destruction of transatlantic data transfer frameworks',
  victimsAffected: 'Billions of internet users worldwide whose communications are collected; millions of Americans incidentally surveilled; journalists and sources chilled from communication; defendants in criminal cases denied knowledge of surveillance origins; Edward Snowden charged and exiled; whistleblower Thomas Drake prosecuted; Five Eyes citizens surveilled through mutual arrangement circumventing domestic protections; Mark Klein and other whistleblowers who faced retaliation',
  primaryTargets: [
    {
      name: 'National Security Agency (NSA)',
      role: 'Built and operates XKeyscore and related surveillance programs; systematically exceeded FISA Court authorized boundaries; misrepresented practices to Congress and the courts',
      currentStatus: 'Fully operational. XKeyscore and successor systems remain active across 150+ global sites. Section 702 reauthorized in 2024 with expanded authorities. No official disciplined.',
      accountabilityPath: 'Congressional legislation requiring warrants for U.S. person queries; FISA Court reform with adversarial process; declassification of surveillance scope; independent audit authority',
      obstacles: ['Classification prevents public assessment of surveillance scope', 'FISA Court operates in secret with no adversarial process', 'Intelligence community lobbying against reform', '2024 reauthorization expanded rather than restricted authorities']
    },
    {
      name: 'James Clapper (DNI 2010-2017)',
      role: 'Director of National Intelligence who testified to Congress that NSA did "not wittingly" collect data on Americans; later admitted the statement was "least untruthful"',
      currentStatus: 'Retired. Senator Wyden referred Clapper to DOJ for prosecution for false testimony. DOJ declined. Statute of limitations expired. No consequences.',
      accountabilityPath: 'Statute of limitations has expired for perjury; accountability limited to historical record and congressional censure mechanism',
      obstacles: ['Statute of limitations expired', 'DOJ declined prosecution when referral was timely', 'No political will to pursue former intelligence officials']
    },
    {
      name: 'FBI (Backdoor Searches)',
      role: 'Conducted 3.4 million warrantless backdoor searches of Section 702 data for U.S. person information in 2021; 278,000 improper queries revealed in FISC opinion',
      currentStatus: 'Backdoor search authority preserved in 2024 reauthorization. Warrant requirement narrowly defeated (212-212 tie). No agents disciplined.',
      accountabilityPath: 'Legislation requiring warrants for all U.S. person queries; FISC enforcement of querying standards; internal discipline for documented violations',
      obstacles: ['FBI argues warrant requirement would cripple national security investigations', 'Warrant amendment failed by single vote in 2024', 'FISC cannot independently verify compliance']
    }
  ],
  legalMechanisms: [
    {
      name: 'Fourth Amendment Challenge',
      statute: 'Fourth Amendment, U.S. Constitution',
      description: 'Mass warrantless collection of Americans\' internet communications and the backdoor search loophole raise fundamental Fourth Amendment questions that have never been definitively resolved by the Supreme Court',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Federal courts', 'Supreme Court', 'ACLU and EFF (standing plaintiffs)'],
      applicability: 'directly_applicable' as const,
      notes: 'Standing requirements have prevented many challenges from reaching merits; government invokes state secrets privilege to block discovery'
    },
    {
      name: 'Section 702 Warrant Requirement',
      statute: '50 U.S.C. 1881a (Section 702)',
      description: 'Legislative reform to require judicial approval before querying Section 702 data using U.S. person identifiers; narrowly defeated 212-212 in 2024 House vote',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress'],
      applicability: 'requires_new_action' as const,
      notes: 'Lost by single vote in 2024; next reauthorization opportunity provides leverage for reform'
    },
    {
      name: 'FISA Court Reform',
      statute: '50 U.S.C. 1801 et seq.',
      description: 'Reform of FISC to include adversarial proceedings, public advocates, and declassification of significant opinions; current 99.97% approval rate and secret proceedings undermine democratic accountability',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'Chief Justice (appointing authority for FISC judges)'],
      applicability: 'requires_new_action' as const
    },
    {
      name: 'Parallel Construction Challenge',
      statute: 'Fifth and Sixth Amendments; Brady v. Maryland (1963)',
      description: 'Defendants in criminal cases have constitutional right to know the true source of evidence; DEA parallel construction systematically violates this right by concealing NSA surveillance origins',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Federal courts', 'Criminal defense attorneys', 'DOJ Inspector General'],
      applicability: 'directly_applicable' as const,
      notes: 'Practice continues because defendants do not know to challenge evidence they cannot identify as surveillance-derived'
    },
    {
      name: 'Whistleblower Protection',
      statute: 'Intelligence Community Whistleblower Protection Act; various',
      description: 'Strengthening legal protections for intelligence community whistleblowers who reveal surveillance abuses; current framework drove Snowden to unauthorized disclosure',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'IC IG', 'PCLOB'],
      applicability: 'requires_new_action' as const,
      notes: 'Snowden testified he tried internal channels first; current law offers inadequate protection for intelligence whistleblowers'
    }
  ],
  wealthTrace: [
    {
      name: 'NSA Annual Surveillance Budget',
      relationship: '$10B+ annually in taxpayer funding sustains surveillance infrastructure with no meaningful democratic accountability or transparency',
      transferMethod: 'Classified and unclassified appropriations through intelligence community budget',
      estimatedValue: '$10,000,000,000+ annually',
      legalEntities: ['NSA', 'ODNI', 'Department of Defense'],
      recoveryMechanisms: ['Congressional appropriations reform', 'Budget transparency requirements', 'PCLOB oversight']
    },
    {
      name: 'Private Contractor Economy',
      relationship: 'Booz Allen Hamilton, Leidos, Raytheon, Palantir, and others derive billions from building and operating surveillance systems',
      transferMethod: 'Government contracts for intelligence infrastructure',
      estimatedValue: '$15,000,000,000+ annually across major contractors',
      legalEntities: ['Booz Allen Hamilton', 'Leidos', 'Raytheon', 'Palantir Technologies'],
      recoveryMechanisms: ['Contract reform', 'Revolving door legislation', 'Contractor accountability']
    },
    {
      name: 'Telecom Immunity Value',
      relationship: 'FISA Amendments Act granted retroactive immunity to AT&T, Verizon, and others, eliminating billions in potential liability',
      transferMethod: 'Congressional legislation killing pending lawsuits',
      estimatedValue: 'Billions in avoided liability',
      legalEntities: ['AT&T', 'Verizon', 'Sprint', 'Other telecoms'],
      recoveryMechanisms: ['Repeal of retroactive immunity', 'New litigation based on post-2008 conduct']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Senate Intelligence Committee',
      title: 'Committee Chair',
      jurisdiction: 'Congressional oversight of intelligence community and surveillance programs',
      powers: ['Oversight of NSA surveillance programs', 'Section 702 reauthorization conditions', 'FISA Court reform legislation', 'Declassification authority for committee reports'],
      contactMethod: 'Senate Intelligence Committee: (202) 224-1700'
    },
    {
      name: 'Privacy and Civil Liberties Oversight Board (PCLOB)',
      title: 'Board Chair',
      jurisdiction: 'Independent review of counterterrorism programs and civil liberties impact',
      powers: ['Independent review of Section 702 programs', 'Recommendations for surveillance reform', 'Access to classified programs', 'Public reporting on privacy impact'],
      contactMethod: 'PCLOB: pclob.gov; (202) 331-1986'
    },
    {
      name: 'Foreign Intelligence Surveillance Court',
      title: 'Presiding Judge',
      jurisdiction: 'Judicial oversight of government surveillance under FISA',
      powers: ['Approve or deny surveillance applications', 'Issue opinions on legality of surveillance programs', 'Enforce minimization procedures', 'Find compliance violations'],
      contactMethod: 'Via DOJ National Security Division (ex parte proceedings)'
    },
    {
      name: 'DOJ Inspector General',
      title: 'Inspector General',
      jurisdiction: 'Oversight of DOJ components including FBI surveillance activities',
      powers: ['Audit FBI backdoor searches of Section 702 data', 'Investigate parallel construction practices', 'Report on compliance with surveillance authorities'],
      contactMethod: 'DOJ IG Hotline: (800) 869-4499; oig.justice.gov'
    },
    {
      name: 'European Court of Justice',
      title: 'Court Judges',
      jurisdiction: 'EU law interpretation including data protection rights of European citizens',
      powers: ['Invalidated Safe Harbor and Privacy Shield; can invalidate Data Privacy Framework', 'Force changes to U.S. surveillance law through economic pressure on transatlantic data flows'],
      contactMethod: 'Via EU national courts (preliminary reference procedure)'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can demand surveillance reform, support privacy legislation, and use encryption tools to protect their communications',
      steps: [
        { step: 1, title: 'Demand Section 702 Warrant Requirement', description: 'Contact federal legislators to support requiring warrants before the FBI and other agencies can search Americans\' communications collected under Section 702; the amendment failed by a single vote in 2024', legalBasis: ['First Amendment right to petition', 'Fourth Amendment'], estimatedTime: '1-2 hours' },
        { step: 2, title: 'Support FISA Court Reform', description: 'Advocate for legislation requiring adversarial proceedings in the FISA Court, appointment of public advocates, and declassification of significant opinions; the current secret court with 99.97% approval rate is not meaningful oversight', legalBasis: ['First Amendment'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Use Encryption and Privacy Tools', description: 'Adopt end-to-end encrypted communications (Signal), encrypted email, VPNs, and privacy-focused browsers; widespread encryption adoption is the most effective technical countermeasure to mass surveillance', estimatedTime: '1-2 hours setup' },
        { step: 4, title: 'Support Whistleblower Protection', description: 'Advocate for stronger legal protections for intelligence community whistleblowers; the current framework drove Snowden to unauthorized disclosure because internal channels were ineffective', legalBasis: ['First Amendment'], estimatedTime: '1 hour' }
      ],
      relevantMechanisms: ['Section 702 reform', 'FISA Court reform', 'Encryption adoption', 'Whistleblower protection'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can investigate ongoing surveillance programs, the parallel construction pipeline, and the private contractor economy',
      steps: [
        { step: 1, title: 'Investigate Parallel Construction', description: 'Document specific criminal cases where parallel construction was used to launder NSA-derived evidence; file FOIA requests with DEA and DOJ for SOD policies and training materials', legalBasis: ['Freedom of Information Act (5 U.S.C. 552)'], filingTarget: 'DEA FOIA Office; DOJ Office of Information Policy' },
        { step: 2, title: 'Track Contractor Revolving Door', description: 'Document the revolving door between NSA leadership and surveillance contractors; quantify how former officials monetize classified knowledge and relationships', legalBasis: ['First Amendment freedom of press'] },
        { step: 3, title: 'FOIA Declassified FISC Opinions', description: 'File FOIA requests and mandatory declassification review requests for FISC opinions finding NSA violations; track which opinions remain classified and why', legalBasis: ['FOIA', 'Executive Order 13526 (mandatory declassification review)'], filingTarget: 'ODNI; DOJ National Security Division' },
        { step: 4, title: 'Secure Source Communications', description: 'Use SecureDrop, encrypted messaging, and air-gapped systems for source communications; surveillance awareness makes source protection a prerequisite for accountability journalism', legalBasis: ['First Amendment freedom of press'] }
      ],
      relevantMechanisms: ['FOIA', 'Mandatory declassification review', 'First Amendment', 'Source protection'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Legal professionals can challenge surveillance in court, demand disclosure of parallel construction, and represent surveillance targets',
      steps: [
        { step: 1, title: 'Fourth Amendment Litigation', description: 'Bring or support constitutional challenges to warrantless backdoor searches of Section 702 data; recent FISC revelations of FBI abuse strengthen standing arguments', legalBasis: ['Fourth Amendment', 'Katz v. United States (1967)', 'Carpenter v. United States (2018)'] },
        { step: 2, title: 'Challenge Parallel Construction', description: 'In criminal cases, demand disclosure of whether evidence originated from NSA surveillance; file motions requiring government to certify evidence provenance under Brady obligations', legalBasis: ['Brady v. Maryland', 'Fifth and Sixth Amendments'], filingTarget: 'Federal district courts' },
        { step: 3, title: 'FOIA Litigation', description: 'File FOIA lawsuits seeking declassification of FISC opinions, NSA IG reports on Section 702 compliance, and FBI backdoor search query logs', legalBasis: ['Freedom of Information Act', '50 U.S.C. 1872 (FISC transparency)'], filingTarget: 'U.S. District Court for the District of Columbia' },
        { step: 4, title: 'Represent Surveillance Targets', description: 'Represent individuals and organizations subjected to surveillance in civil rights actions; challenge state secrets privilege invocations that prevent discovery', legalBasis: ['42 U.S.C. 1983', 'Bivens v. Six Unknown Named Agents', 'Reynolds v. United States limitations'] }
      ],
      relevantMechanisms: ['Fourth Amendment', 'Brady disclosure', 'FOIA litigation', 'Civil rights actions'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials can reform surveillance law, strengthen FISA Court oversight, and close the backdoor search loophole',
      steps: [
        { step: 1, title: 'Pass Warrant Requirement for U.S. Person Queries', description: 'Introduce and pass legislation requiring judicial approval before any agency can query Section 702 data using U.S. person identifiers; lost by single vote (212-212) in 2024', legalBasis: ['Fourth Amendment', 'Congressional authority over intelligence oversight'] },
        { step: 2, title: 'Reform FISA Court', description: 'Enact FISA Court reform requiring adversarial proceedings, public advocates, declassification of significant opinions, and annual public reporting on surveillance scope', legalBasis: ['Congressional authority to restructure Article III court processes'] },
        { step: 3, title: 'Ban Parallel Construction', description: 'Prohibit the use of intelligence-derived evidence in criminal proceedings unless the surveillance origin is disclosed to the court and defense; end evidence laundering', legalBasis: ['Congressional authority over federal criminal procedure', 'Fifth and Sixth Amendment protections'] },
        { step: 4, title: 'Strengthen Whistleblower Protections', description: 'Expand intelligence community whistleblower protections to include public disclosure as a last resort; create independent channel outside the intelligence community chain of command', legalBasis: ['Congressional authority over intelligence community'] }
      ],
      relevantMechanisms: ['Section 702 reform', 'FISA Court reform', 'Parallel construction ban', 'Whistleblower protection expansion'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can enforce existing surveillance limitations, audit compliance, and recommend reforms',
      steps: [
        { step: 1, title: 'PCLOB Comprehensive Section 702 Review', description: 'Conduct updated comprehensive review of Section 702 programs including XKeyscore, assessing expanded authorities under 2024 reauthorization and the scope of incidental collection of Americans', legalBasis: ['42 U.S.C. 2000ee (PCLOB authorizing statute)'] },
        { step: 2, title: 'NSA IG Global Compliance Audit', description: 'Expand NSA IG compliance audits beyond Fort Meade to cover all 150+ XKeyscore sites worldwide; 2013 audit only covered headquarters while violations occurred globally', legalBasis: ['Inspector General Act of 1978', '50 U.S.C. 3033'] },
        { step: 3, title: 'DOJ IG FBI Query Audit', description: 'Conduct comprehensive audit of FBI backdoor searches including review of query justifications, compliance with minimization procedures, and disciplinary actions for violations', legalBasis: ['Inspector General Act', 'FISC querying requirements'] },
        { step: 4, title: 'Data Privacy Framework Enforcement', description: 'European data protection authorities should rigorously test U.S. compliance with Data Privacy Framework commitments and challenge Section 702 collection of European data', legalBasis: ['GDPR', 'EU-U.S. Data Privacy Framework'] }
      ],
      relevantMechanisms: ['PCLOB review authority', 'IG audit authority', 'GDPR enforcement', 'Data Privacy Framework'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement can investigate surveillance abuses, prosecute false testimony, and enforce compliance with FISC orders',
      steps: [
        { step: 1, title: 'Investigate LOVEINT and Personal Surveillance Abuses', description: 'Conduct criminal investigation of NSA analysts who used XKeyscore and other tools to surveil personal contacts; prior cases handled administratively rather than criminally', legalBasis: ['18 U.S.C. 2511 (Wiretap Act)', '18 U.S.C. 1030 (Computer Fraud and Abuse Act)'] },
        { step: 2, title: 'Audit Parallel Construction Pipeline', description: 'DOJ IG should audit the DEA Special Operations Division\'s parallel construction practices and determine how many criminal convictions relied on laundered surveillance evidence', legalBasis: ['Inspector General Act', 'Brady v. Maryland'] },
        { step: 3, title: 'Corporate Compliance Verification', description: 'Investigate whether telecom and technology companies complied with minimization procedures in their Section 702 cooperation and whether data collection exceeded authorized scope', legalBasis: ['FISC orders', '50 U.S.C. 1881a compliance requirements'] },
        { step: 4, title: 'Whistleblower Retaliation Investigation', description: 'Investigate retaliation against intelligence community whistleblowers who reported surveillance abuses through internal channels', legalBasis: ['Intelligence Community Whistleblower Protection Act', '5 U.S.C. 2302'] }
      ],
      relevantMechanisms: ['Wiretap Act', 'Computer fraud statutes', 'Inspector General authority', 'Whistleblower protection'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Federal legislation requiring warrants for all queries of Section 702 data using U.S. person identifiers',
    'FISA Court reform including adversarial proceedings, public advocates, and declassification of significant opinions',
    'Complete ban on parallel construction and mandatory disclosure of surveillance origins in criminal proceedings',
    'Comprehensive, publicly-available accounting of how many Americans\' communications are collected under Section 702',
    'Criminal prosecution of NSA analysts who abused surveillance tools for personal purposes',
    'Full declassification of all FISC opinions finding NSA violated authorized surveillance boundaries',
    'Stronger whistleblower protections that include safe harbor for intelligence community disclosures through authorized channels',
    'Revolving door legislation preventing intelligence officials from joining surveillance contractors within 5 years',
    'Independent audit of all 150+ XKeyscore sites worldwide with public reporting of compliance findings',
    'Resolution of Snowden case through negotiated return with guarantee of fair trial and ability to present public interest defense'
  ]
};
