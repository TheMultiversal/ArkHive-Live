import type { AccountabilityData } from '@/types/accountability';

export const nraRussiaAccountability: AccountabilityData = {
  investigationSlug: 'nra-russia',
  crimeSummary: 'Russian intelligence operatives infiltrated the National Rifle Association to establish a back-channel to Republican political leadership and potentially funnel foreign money into the 2016 U.S. presidential election. Maria Butina, operating under the direction of Russian Central Bank deputy governor Alexander Torshin, cultivated relationships with NRA leadership and Republican politicians over multiple years. The NRA spent over $30 million supporting Trump in 2016, nearly triple its 2012 spending, with the source of the additional funds never determined. The NRA obstructed congressional investigation, and the full extent of Russian money flowing through the organization into American elections remains unknown. Despite Butina\'s conviction, no NRA official was ever charged, key records were destroyed, and Trump pardoned co-conspirator Paul Erickson.',
  totalHarm: 'Compromise of American electoral sovereignty through foreign infiltration of a major political organization; $30+ million in political spending from opaque sources influencing the 2016 presidential election; creation of an unsanctioned back-channel between Russian intelligence and incoming U.S. administration; destruction of evidence that could have revealed full scope of foreign election interference; normalization of foreign influence through nonprofit dark money structures; erosion of public trust in campaign finance system.',
  victimsAffected: 'American voters whose electoral choices were influenced by foreign interference; NRA members whose dues were used to facilitate Russian access; the integrity of U.S. elections and democratic self-governance; FARA enforcement credibility; future generations exposed to the same unaddressed vulnerabilities in campaign finance law.',

  primaryTargets: [
    { name: 'National Rifle Association', role: 'Tax-exempt organization that served as vehicle for Russian influence and dark money in elections', currentStatus: 'Weakened by legal battles and corruption scandals; no charges brought for facilitating Russian access', accountabilityPath: 'IRS tax-exempt status revocation for financing influence operations; FEC investigation of 2016 spending sources; congressional subpoena of financial records; state AG dissolution action', obstacles: ['501(c)(4) donor privacy protections', 'Republican opposition to NRA investigation', 'Evidence destruction'] },
    { name: 'Wayne LaPierre', role: 'NRA CEO who presided over Russian infiltration and obstructed congressional investigation', currentStatus: 'Resigned January 2024; found liable for $4.35M in diverted funds, but never charged for facilitating Russian access', accountabilityPath: 'State criminal prosecution for obstruction; civil liability for NRA members whose organization was compromised; deposition in ongoing civil cases', obstacles: ['Resigned from NRA reducing leverage', 'No criminal referral for obstruction', 'Statute of limitations concerns'] },
    { name: 'Donald Trump', role: 'Candidate who benefited from $30M+ in NRA spending from opaque sources and pardoned co-conspirator Erickson', currentStatus: 'Current president; pardoned Paul Erickson despite his role in Russian intelligence operation', accountabilityPath: 'Congressional investigation of pardon abuse; civil litigation from campaign finance reform organizations; FEC complaint regarding knowledge of foreign source funds', obstacles: ['Presidential immunity while in office', 'DOJ policy against indicting sitting president', 'Political support prevents congressional action'] },
    { name: 'Republican Congressional Leadership', role: 'Blocked investigation into Russian money in NRA while receiving NRA political support', currentStatus: 'Continue to oppose investigation and donor disclosure legislation', accountabilityPath: 'Electoral accountability; public exposure of obstruction; ethics complaints for accepting support from compromised organization', obstacles: ['Gerrymandered districts insulate from electoral pressure', 'First Amendment protections for political activity', 'No legal obligation to investigate'] },
    { name: 'NRA Board of Directors', role: 'Failed to exercise oversight during Russian infiltration of the organization they were charged with governing', currentStatus: 'Some replaced; no individual accountability', accountabilityPath: 'Civil breach of fiduciary duty claims by NRA members; deposition in NY AG action; public exposure', obstacles: ['Qualified immunity arguments', 'Voluntary board with limited legal duty', 'Many have left the board'] },
  ],

  legalMechanisms: [
    { name: 'IRS Revocation of 501(c)(4) Status', statute: '26 U.S.C. Section 501(c)(4)', description: 'IRS can revoke the NRA\'s tax-exempt status for using nonprofit structure to facilitate foreign influence operations and conceal the origin of political spending.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['regulator', 'citizen'], applicability: 'directly_applicable' as const },
    { name: 'FEC Investigation of 2016 Spending Sources', statute: '52 U.S.C. Section 30121', description: 'Federal Election Commission can investigate whether the NRA\'s $30+ million in 2016 spending included foreign-sourced funds prohibited by federal election law.', hasStatuteOfLimitations: true, limitationPeriod: '5 years from violation', reachesHeirs: false, authorizedActors: ['regulator', 'citizen'], applicability: 'directly_applicable' as const },
    { name: 'FARA Criminal Prosecution', statute: '22 U.S.C. Section 611', description: 'NRA officials who knowingly facilitated unregistered foreign agent activities could face FARA charges. The statute applies to anyone who acts as a foreign agent without registration.', hasStatuteOfLimitations: true, limitationPeriod: '5 years', reachesHeirs: false, authorizedActors: ['law_enforcement', 'regulator'], applicability: 'potentially_applicable' as const },
    { name: 'Congressional Subpoena Power', statute: 'U.S. Constitution Article I', description: 'Congress can subpoena NRA financial records, compel testimony from NRA leadership, and hold individuals in contempt for refusal to comply.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['elected_official', 'journalist'], applicability: 'directly_applicable' as const },
    { name: 'FOIA Litigation for FBI Investigation Records', statute: '5 U.S.C. Section 552', description: 'Freedom of Information Act requests can force disclosure of FBI counterintelligence findings on Russian money in the NRA, subject to national security redactions.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['citizen', 'journalist', 'lawyer'], applicability: 'directly_applicable' as const },
    { name: 'Donor Disclosure Legislation (DISCLOSE Act)', statute: 'Proposed S. 443 / H.R. 1', description: 'Proposed legislation requiring 501(c)(4) organizations spending in elections to disclose donors over $10,000, closing the dark money loophole exploited in the NRA-Russia scheme.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['elected_official', 'citizen'], applicability: 'requires_new_action' as const },
    { name: 'NY AG Nonprofit Dissolution', statute: 'N.Y. Not-For-Profit Corporation Law Section 112', description: 'New York Attorney General\'s ongoing action to dissolve or reform the NRA for financial misconduct, which can also address the organizational failures that enabled Russian infiltration.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['regulator', 'elected_official'], applicability: 'directly_applicable' as const },
    { name: 'Civil RICO Claims', statute: '18 U.S.C. Section 1961-1968', description: 'Civil racketeering claims against entities that participated in a pattern of unlawful activity including conspiracy to violate FARA and federal election law.', hasStatuteOfLimitations: true, limitationPeriod: '4 years from discovery of injury', reachesHeirs: false, authorizedActors: ['citizen', 'lawyer'], applicability: 'potentially_applicable' as const },
    { name: 'Obstruction of Congress', statute: '18 U.S.C. Section 1505', description: 'Criminal prosecution for NRA officials who obstructed congressional investigation by destroying records, providing false testimony, or refusing to comply with lawful requests.', hasStatuteOfLimitations: true, limitationPeriod: '5 years', reachesHeirs: false, authorizedActors: ['law_enforcement', 'elected_official'], applicability: 'potentially_applicable' as const },
    { name: 'Evidence Destruction', statute: '18 U.S.C. Section 1519', description: 'Criminal prosecution for destruction of NRA financial records during federal investigation, which carries up to 20 years imprisonment.', hasStatuteOfLimitations: true, limitationPeriod: '5 years', reachesHeirs: false, authorizedActors: ['law_enforcement'], applicability: 'potentially_applicable' as const },
  ],

  wealthTrace: [
    { name: 'NRA Independent Expenditures (2016)', relationship: 'Political spending from opaque sources supporting Trump', transferMethod: '501(c)(4) independent expenditures not requiring donor disclosure', estimatedValue: '$30,300,000+', legalEntities: ['NRA-ILA', 'NRA Political Victory Fund'], recoveryMechanisms: ['FEC investigation', 'Congressional donor disclosure legislation'] },
    { name: 'NRA Legal Defense Spending', relationship: 'Organizational funds diverted to fight investigations into Russian connection', transferMethod: 'Legal retainer payments to Brewer Attorneys & Counselors and other firms', estimatedValue: '$50,000,000+', legalEntities: ['Brewer Attorneys & Counselors'], recoveryMechanisms: ['NY AG disgorgement order'] },
    { name: 'LaPierre Personal Enrichment', relationship: 'NRA CEO diverted funds during period of Russian infiltration', transferMethod: 'Fraudulent expense claims, luxury travel, yacht, wardrobe', estimatedValue: '$4,350,000', legalEntities: ['Wayne LaPierre personal accounts'], recoveryMechanisms: ['NY civil judgment ordered $4.35M repayment'] },
    { name: 'Ackerman McQueen PR Contracts', relationship: 'NRA PR firm that enabled financial opacity', transferMethod: 'Advertising and public relations contracts with minimal oversight', estimatedValue: '$40,000,000+', legalEntities: ['Ackerman McQueen Inc.'], recoveryMechanisms: ['NRA lawsuit against firm'] },
    { name: 'Unidentified Dark Money Source (2016 Increase)', relationship: 'Unexplained $18M spending increase from 2012 to 2016', transferMethod: 'Anonymous donations through 501(c)(4) structure', estimatedValue: '$18,000,000+', recoveryMechanisms: ['Congressional subpoena of NRA records', 'DISCLOSE Act legislation'] },
    { name: 'Russian Government Operational Funding', relationship: 'State funding for Butina/Torshin infiltration operation', transferMethod: 'Russian Central Bank and government channels to Torshin', estimatedValue: 'Unknown', recoveryMechanisms: ['No recovery mechanism from Russian state'] },
  ],

  authoritiesWithPower: [
    { name: 'FEC Commissioners', title: 'Federal Election Commission', jurisdiction: 'Federal campaign finance enforcement', powers: ['Investigate NRA 2016 spending sources', 'Issue civil penalties for FECA violations', 'Subpoena financial records', 'Refer criminal violations to DOJ'], contactMethod: 'Federal Election Commission, 1050 First Street NE, Washington, DC 20463' },
    { name: 'IRS Commissioner', title: 'Commissioner of Internal Revenue', jurisdiction: 'Tax-exempt organization oversight', powers: ['Revoke 501(c)(4) status', 'Investigate tax fraud', 'Audit NRA financials', 'Refer criminal tax violations'] },
    { name: 'Letitia James', title: 'Attorney General of New York', jurisdiction: 'New York nonprofit law', powers: ['Continue dissolution/reform action against NRA', 'Subpoena financial records', 'Seek court-ordered reforms to NRA governance'] },
    { name: 'Senate Finance Committee', title: 'U.S. Senate Committee on Finance', jurisdiction: 'Tax-exempt organizations and campaign finance', powers: ['Subpoena NRA financial records', 'Compel testimony', 'Issue bipartisan report', 'Refer for prosecution'] },
    { name: 'DOJ National Security Division', title: 'Assistant Attorney General for National Security', jurisdiction: 'FARA enforcement and counterintelligence', powers: ['Investigate FARA violations by NRA officials', 'Prosecute obstruction of federal investigation', 'Unseal classified counterintelligence findings'] },
    { name: 'FBI Counterintelligence Division', title: 'FBI Counterintelligence Division', jurisdiction: 'Foreign intelligence threat assessment', powers: ['Continue investigation of Russian money in NRA', 'Coordinate with international partners', 'Brief Congress on findings'] },
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can demand campaign finance reform, support FOIA litigation to unseal FBI findings, file FEC complaints, and hold elected officials accountable for blocking investigation of foreign influence.',
      steps: [
        { step: 1, title: 'Support DISCLOSE Act Legislation', description: 'Contact representatives demanding passage of the DISCLOSE Act requiring 501(c)(4) organizations to disclose donors when spending in elections', filingTarget: 'U.S. Congress' },
        { step: 2, title: 'File FOIA Requests', description: 'Submit Freedom of Information Act requests to FBI and DOJ for counterintelligence investigation findings on Russian money in the NRA', legalBasis: ['5 U.S.C. 552'] },
        { step: 3, title: 'Support FEC Reform', description: 'Advocate for full FEC commissioner appointments and enforcement authority to investigate dark money in elections', filingTarget: 'White House, Senate' },
        { step: 4, title: 'Electoral Accountability', description: 'Support candidates committed to campaign finance transparency and foreign influence prevention in federal and state elections' }
      ],
      relevantMechanisms: ['Donor Disclosure Legislation (DISCLOSE Act)', 'FOIA Litigation for FBI Investigation Records', 'FEC Investigation of 2016 Spending Sources'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can FOIA FBI investigation records, investigate the NRA\'s destroyed financial documents, track the dark money sources, and expose congressional obstruction of the investigation.',
      steps: [
        { step: 1, title: 'FOIA FBI Counterintelligence Findings', description: 'File comprehensive FOIA requests for all FBI counterintelligence materials related to Russian money in the NRA, including informant reports and financial analysis', legalBasis: ['5 U.S.C. 552'] },
        { step: 2, title: 'Investigate Destroyed Records', description: 'Investigate reports that NRA financial records were destroyed during the congressional investigation, including identifying potential witnesses and obtaining backup copies' },
        { step: 3, title: 'Track Dark Money Sources', description: 'Use campaign finance databases, nonprofit filings, and financial records to trace the unexplained $18M increase in NRA 2016 spending' }
      ],
      relevantMechanisms: ['FOIA Litigation for FBI Investigation Records', 'Congressional Subpoena Power'],
      urgency: 'immediate' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Attorneys can pursue civil RICO claims, challenge 501(c)(4) donor anonymity in court, represent NRA members in breach of fiduciary duty claims, and support campaign finance litigation.',
      steps: [
        { step: 1, title: 'File Civil RICO Claims', description: 'Pursue civil RICO litigation against entities that participated in pattern of unlawful activity including FARA violations and election law violations connected to the NRA-Russia operation', legalBasis: ['18 U.S.C. 1961-1968'], filingTarget: 'U.S. District Court for the District of Columbia' },
        { step: 2, title: 'NRA Member Breach of Fiduciary Duty', description: 'Represent NRA members in claims against the board of directors for failing to exercise oversight during Russian infiltration of the organization', legalBasis: ['N.Y. Not-For-Profit Corporation Law'] },
        { step: 3, title: 'Challenge 501(c)(4) Donor Anonymity', description: 'Bring constitutional challenge to 501(c)(4) donor anonymity when spending in elections, arguing the compelling government interest in preventing foreign influence overrides donor privacy', legalBasis: ['52 U.S.C. 30121', 'First Amendment balancing test'] }
      ],
      relevantMechanisms: ['Civil RICO Claims', 'NY AG Nonprofit Dissolution', 'FEC Investigation of 2016 Spending Sources'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials can pass the DISCLOSE Act, strengthen FARA enforcement, subpoena NRA financial records, and reform the FEC to enable enforcement against dark money.',
      steps: [
        { step: 1, title: 'Pass the DISCLOSE Act', description: 'Advance and pass legislation requiring disclosure of donors over $10,000 to 501(c)(4) organizations that spend in elections', legalBasis: ['Congressional legislative authority'] },
        { step: 2, title: 'Subpoena NRA Financial Records', description: 'Use Senate Finance Committee authority to subpoena complete NRA financial records from 2012-2016, including donor lists and internal communications', legalBasis: ['U.S. Constitution Article I'] },
        { step: 3, title: 'Strengthen FARA Enforcement', description: 'Pass legislation increasing DOJ FARA unit funding, mandating proactive enforcement, and creating penalties for organizations that facilitate unregistered foreign agent activity', legalBasis: ['22 U.S.C. 611'] },
        { step: 4, title: 'Reform FEC', description: 'Restructure the FEC with an odd number of commissioners and mandatory enforcement deadlines to prevent partisan deadlock from blocking investigations', legalBasis: ['52 U.S.C. 30106'] }
      ],
      relevantMechanisms: ['Donor Disclosure Legislation (DISCLOSE Act)', 'Congressional Subpoena Power', 'FARA Criminal Prosecution'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement can investigate evidence destruction, pursue FARA charges against NRA officials, and coordinate with international partners on the Torshin money laundering networks.',
      steps: [
        { step: 1, title: 'Investigate Evidence Destruction', description: 'Open criminal investigation into destruction of NRA financial records during federal investigation under 18 U.S.C. 1519', legalBasis: ['18 U.S.C. 1519'], filingTarget: 'U.S. District Court for the District of Columbia' },
        { step: 2, title: 'Pursue FARA Charges Against NRA Officials', description: 'Investigate NRA officials who may have knowingly facilitated Butina\'s unregistered foreign agent activities', legalBasis: ['22 U.S.C. 611'] },
        { step: 3, title: 'Coordinate with Spanish Investigation', description: 'Work with Spanish law enforcement to obtain full Torshin money laundering investigation documents for use in U.S. proceedings', legalBasis: ['Mutual Legal Assistance Treaty'] }
      ],
      relevantMechanisms: ['Evidence Destruction', 'FARA Criminal Prosecution', 'Obstruction of Congress'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can revoke the NRA\'s tax-exempt status, investigate foreign money in the organization, and establish precedents for nonprofit accountability when organizations are compromised by foreign influence.',
      steps: [
        { step: 1, title: 'Revoke NRA Tax-Exempt Status', description: 'IRS should revoke the NRA\'s 501(c)(4) status based on the organization\'s use of tax-exempt structure to facilitate foreign influence operations', legalBasis: ['26 U.S.C. 501(c)(4)'], filingTarget: 'IRS Exempt Organizations Division' },
        { step: 2, title: 'FEC Investigation of 2016 Spending', description: 'Conduct comprehensive FEC investigation of the sources of the NRA\'s $30M+ in 2016 political spending, including subpoena authority for donor records', legalBasis: ['52 U.S.C. 30121'], filingTarget: 'Federal Election Commission' },
        { step: 3, title: 'Establish Nonprofit Foreign Influence Screening', description: 'Create regulatory framework requiring nonprofits spending in elections to certify that no foreign money is included in political spending', legalBasis: ['26 U.S.C. 501', '52 U.S.C. 30121'] }
      ],
      relevantMechanisms: ['IRS Revocation of 501(c)(4) Status', 'FEC Investigation of 2016 Spending Sources', 'NY AG Nonprofit Dissolution'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'Full disclosure of the source of the NRA\'s $30+ million in 2016 spending, including identification of all donors over $10,000 during the 2015-2016 cycle',
    'IRS revocation of the NRA\'s 501(c)(4) tax-exempt status for using nonprofit structure to facilitate foreign influence operations',
    'FEC enforcement action establishing that foreign money flowed through the NRA into American elections',
    'Congressional passage of the DISCLOSE Act requiring donor disclosure by nonprofits spending in elections',
    'Criminal prosecution of NRA officials who destroyed financial records during federal investigation',
    'Declassification and public release of FBI counterintelligence findings on Russian money in the NRA',
    'FARA enforcement reform including increased DOJ resources and mandatory proactive investigation of potential unregistered agents',
    'Court-ordered reform of NRA governance structure to prevent future foreign infiltration and financial misconduct',
    'FEC restructuring to enable enforcement against dark money including an odd number of commissioners and mandatory enforcement deadlines',
    'Complete accounting of the Torshin money laundering network connecting Russian organized crime to American political organizations',
    'Establishment of regulatory framework requiring nonprofits spending in elections to certify the domestic origin of funds',
    'Congressional investigation documenting the full timeline of Republican obstruction of the NRA-Russia investigation',
  ]
};
