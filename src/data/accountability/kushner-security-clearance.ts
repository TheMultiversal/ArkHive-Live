import type { AccountabilityData } from '@/types/accountability';

export const kushnerSecurityClearanceAccountability: AccountabilityData = {
  investigationSlug: 'kushner-security-clearance',
  crimeSummary: 'President Trump personally ordered Chief of Staff John Kelly to grant Jared Kushner top-secret/SCI security clearance after career White House officials and the CIA independently determined Kushner should be denied access. Kushner had omitted over 100 foreign contacts on his SF-86, proposed a secret back-channel to Moscow using Russian diplomatic facilities, and maintained extensive foreign financial entanglements including catastrophic debt on 666 Fifth Avenue. Kelly and White House Counsel Don McGahn both wrote contemporaneous memos documenting their objections. Whistleblower Tricia Newbold testified that 25 individuals received improperly overridden clearances. After leaving office, Kushner received a $2 billion investment from the Saudi sovereign wealth fund despite the fund\'s own screening panel recommending against it.',
  totalHarm: 'Systematic compromise of security clearance system designed to protect classified information; 25+ individuals given access to classified material despite career adjudicator denials; potential counterintelligence vulnerabilities at highest levels of government; complete obstruction of congressional oversight; Presidential Records Act violations through encrypted foreign leader communications; appearance of $2B+ foreign government payoff for favorable policy treatment',
  victimsAffected: 'U.S. intelligence community and national security infrastructure; career security professionals whose determinations were overridden; Tricia Newbold who faced retaliation for whistleblowing; Congressional oversight authority subverted by executive privilege claims; American public denied accountability for security compromise; future clearance applicants held to standards that senior officials bypassed',
  primaryTargets: [
    {
      name: 'Jared Kushner',
      role: 'Senior WH Advisor who omitted 100+ foreign contacts on SF-86; proposed Russian back-channel; received overridden clearance; subsequently received $2B Saudi investment',
      currentStatus: 'Running Affinity Partners with $3B+ AUM from Gulf sovereign wealth funds. No criminal charges for SF-86 omissions. No investigation into relationship between classified access and post-government investments.',
      accountabilityPath: 'DOJ prosecution for SF-86 false statements (18 U.S.C. 1001); Congressional investigation of Affinity Partners funding; counterintelligence damage assessment; revolving door legislation',
      obstacles: ['No active DOJ investigation', 'Statute of limitations concerns on SF-86 omissions', 'Executive privilege claims shield key evidence', 'Political alignment makes prosecution unlikely under current administration']
    },
    {
      name: 'Donald Trump',
      role: 'Ordered clearance override against career officials and CIA; publicly denied involvement in contradiction of documented facts',
      currentStatus: 'Returned to office January 2025. Clearance override precedent unaddressed. No legislative reform enacted.',
      accountabilityPath: 'Congressional legislation restricting presidential clearance override authority; mandatory disclosure of overrides to Intelligence Committees; historical accountability through declassification of Kelly/McGahn memos',
      obstacles: ['President currently in office', 'Classification authority derives from executive power', 'No statutory prohibition on president overriding clearance determinations', 'Congressional reform bills have not advanced']
    },
    {
      name: 'Carl Kline',
      role: 'WH Personnel Security Director who served as mechanism for overriding career adjudicators; defied congressional subpoena on White House direction',
      currentStatus: 'No longer in government. Held in contempt of Congress but never prosecuted. Testimony never compelled.',
      accountabilityPath: 'Criminal referral for contempt of Congress (already voted by committee); civil enforcement of subpoena',
      obstacles: ['Contempt referral never prosecuted by DOJ', 'Extended time since events reduces enforcement likelihood', 'Executive privilege claims still asserted over his knowledge']
    }
  ],
  legalMechanisms: [
    {
      name: 'False Statements on SF-86',
      statute: '18 U.S.C. 1001',
      description: 'Criminalizes materially false statements on government forms. Kushner omitted 100+ foreign contacts on SF-86 requiring three amendments. Others have been criminally prosecuted for far less significant SF-86 omissions.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years from date of false statement (potentially extended by continuing obligation to amend)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Criminal Division', 'FBI', 'U.S. Attorneys'],
      applicability: 'directly_applicable' as const,
      notes: 'Selective enforcement concern: lower-level applicants prosecuted for fewer omissions while Kushner was not charged'
    },
    {
      name: 'Presidential Records Act',
      statute: '44 U.S.C. 2201-2209',
      description: 'Requires preservation of all official presidential records. Kushner\'s use of WhatsApp with auto-delete to communicate with MBS and other foreign leaders during WH service violated preservation requirements.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['National Archives and Records Administration', 'Congress', 'Federal courts'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Congressional Contempt Power',
      statute: '2 U.S.C. 192',
      description: 'Carl Kline defied House Oversight Committee subpoena on White House direction; committee voted contempt but DOJ declined prosecution.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Duration of Congressional term that issued subpoena',
      reachesHeirs: false,
      authorizedActors: ['House of Representatives', 'DOJ (for criminal contempt)', 'Federal courts (for civil enforcement)'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Conflicts of Interest Statutes',
      statute: '18 U.S.C. 208; 5 U.S.C. App. (Ethics in Government Act)',
      description: 'Prohibits government officials from participating in matters affecting personal financial interests. Kushner shaped Middle East policy while his family sought foreign investment for 666 Fifth Avenue.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ Public Integrity Section', 'Office of Government Ethics', 'Congress'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Security Clearance Reform Legislation (Proposed)',
      statute: 'Security Clearance Improvement Act; Protecting Our Security Through Transparency Act (proposed)',
      description: 'Would restrict presidential authority to override career clearance determinations and mandate congressional notification of clearance overrides. Never enacted.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress'],
      applicability: 'requires_new_action' as const,
      notes: 'Legislative action needed to prevent recurrence; no current statutory prohibition on presidential clearance override'
    }
  ],
  wealthTrace: [
    {
      name: 'Affinity Partners ($3B+ AUM)',
      relationship: 'Kushner\'s post-WH private equity firm funded primarily by sovereign wealth funds from countries where he shaped U.S. policy with TS/SCI access',
      transferMethod: 'Direct sovereign wealth fund investments into PE fund vehicles',
      estimatedValue: '$3,000,000,000+ assets under management',
      legalEntities: ['Affinity Partners LLC', 'Jared Kushner', 'Various fund vehicles'],
      recoveryMechanisms: ['Congressional investigation', 'SEC review', 'Revolving door legislation']
    },
    {
      name: 'Saudi PIF $2B Investment',
      relationship: 'Crown Prince MBS overruled own screening panel to invest $2B in Kushner firm six months after WH departure',
      transferMethod: 'Sovereign wealth fund commitment despite advisory panel recommending against deal',
      estimatedValue: '$2,000,000,000',
      legalEntities: ['Saudi Public Investment Fund', 'Affinity Partners'],
      recoveryMechanisms: ['No U.S. jurisdiction over Saudi sovereign fund decisions; Congressional investigation authority']
    },
    {
      name: '666 Fifth Avenue Bailout',
      relationship: 'Brookfield resolved Kushner family catastrophic $1.8B debt through 99-year lease while managing Qatar-linked fund capital',
      transferMethod: '99-year lease agreement on flagship property',
      estimatedValue: '$1,300,000,000',
      legalEntities: ['Brookfield Asset Management', 'Kushner Companies', 'Qatar Investment Authority (indirect)'],
      recoveryMechanisms: ['Financial disclosure review', 'Ethics investigation']
    },
    {
      name: 'Annual Management Fees',
      relationship: 'Ongoing income from managing sovereign wealth fund investments built on WH relationships and classified access',
      transferMethod: 'PE fund management fees (estimated 1.25% AUM) plus carried interest on returns',
      estimatedValue: '$25,000,000-50,000,000 annually',
      legalEntities: ['Affinity Partners management company'],
      recoveryMechanisms: ['IRS audit', 'Revolving door ethics investigation']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'DOJ Criminal Division / Public Integrity Section',
      title: 'Assistant Attorney General for Criminal Division',
      jurisdiction: 'Federal criminal prosecution of false statements, conflicts of interest, and records violations',
      powers: ['Prosecute SF-86 false statements under 18 U.S.C. 1001', 'Investigate conflicts of interest under 18 U.S.C. 208', 'Investigate Presidential Records Act violations'],
      contactMethod: 'DOJ Criminal Division: (202) 514-2601; Public Integrity Section: (202) 514-1412'
    },
    {
      name: 'Senate Intelligence Committee',
      title: 'Committee Chair',
      jurisdiction: 'Congressional oversight of intelligence community and classification system',
      powers: ['Investigate clearance override process', 'Request counterintelligence damage assessment', 'Subpoena Kelly/McGahn memos', 'Legislation requiring congressional notification of overrides'],
      contactMethod: 'Senate Intelligence Committee: (202) 224-1700'
    },
    {
      name: 'Intelligence Community Inspector General',
      title: 'IC IG',
      jurisdiction: 'Oversight of intelligence community processes including clearance adjudication',
      powers: ['Conduct counterintelligence damage assessment', 'Investigate whether clearance override compromised sources/methods', 'Review whether intelligence accessed by Kushner was improperly handled'],
      contactMethod: 'IC IG Hotline: (855) 731-3260'
    },
    {
      name: 'National Archives and Records Administration',
      title: 'Archivist of the United States',
      jurisdiction: 'Presidential Records Act enforcement and preservation',
      powers: ['Investigate WhatsApp communication violations', 'Demand preservation of WH records', 'Refer violations for prosecution'],
      contactMethod: 'NARA: (866) 272-6272; archives.gov'
    },
    {
      name: 'SEC Division of Enforcement',
      title: 'Director of Enforcement',
      jurisdiction: 'Securities regulation and investment fund oversight',
      powers: ['Review Affinity Partners disclosures to investors', 'Investigate whether material non-public information from government service influenced fund strategy', 'Examine conflicts of interest in fund operations'],
      contactMethod: 'SEC Enforcement: (202) 551-4500'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can demand security clearance reform and accountability for the precedent of politically-motivated clearance overrides',
      steps: [
        { step: 1, title: 'Demand Clearance Reform Legislation', description: 'Contact federal legislators to support the Security Clearance Improvement Act and Protecting Our Security Through Transparency Act, which would restrict presidential clearance override authority and mandate congressional notification', legalBasis: ['First Amendment right to petition'], estimatedTime: '1-2 hours' },
        { step: 2, title: 'Support Revolving Door Reform', description: 'Advocate for legislation restricting senior government officials from receiving investments from foreign governments they dealt with during service, with mandatory cooling-off periods and disclosure requirements', legalBasis: ['First Amendment'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Demand Declassification', description: 'Petition for declassification of the Kelly and McGahn memos, the CIA assessment, and the identities of all 25 individuals who received improperly overridden clearances', legalBasis: ['Mandatory Declassification Review (Executive Order 13526)'], estimatedTime: '2-3 hours' }
      ],
      relevantMechanisms: ['Security clearance reform legislation', 'Revolving door legislation', 'Mandatory declassification review'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can investigate the classified dimensions, the Saudi financial nexus, and the 25 unidentified clearance overrides',
      steps: [
        { step: 1, title: 'FOIA CIA and ODNI Records', description: 'File FOIA requests for any unclassified portions of the CIA assessment, IC IG review, and ODNI records related to clearance overrides', legalBasis: ['Freedom of Information Act (5 U.S.C. 552)'], filingTarget: 'CIA FOIA Office; ODNI FOIA Office' },
        { step: 2, title: 'Identify the 25 Clearance Overrides', description: 'Investigate and identify the 25 individuals whose clearances were improperly granted per Newbold testimony; cross-reference with known WH political appointees and their subsequent careers', legalBasis: ['First Amendment freedom of press'] },
        { step: 3, title: 'Track Affinity Partners Investments', description: 'Follow the deployment of $3B+ in Affinity Partners capital across Middle East; identify portfolio companies, returns, and whether investment patterns correlate with policy decisions Kushner influenced', legalBasis: ['First Amendment freedom of press'] },
        { step: 4, title: 'Unseal Court Records', description: 'Petition to unseal any court records from litigation related to Kushner clearance; interview career security professionals willing to speak on background', legalBasis: ['First Amendment right of access to court records'] }
      ],
      relevantMechanisms: ['FOIA', 'Court record access', 'First Amendment'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Legal professionals can pursue SF-86 prosecution precedent, enforce congressional subpoenas, and challenge executive privilege claims',
      steps: [
        { step: 1, title: 'SF-86 Prosecution Referral', description: 'Prepare detailed criminal referral documenting Kushner\'s 100+ SF-86 omissions compared to cases where others were prosecuted for fewer omissions, establishing selective enforcement argument', legalBasis: ['18 U.S.C. 1001 (False Statements)'], filingTarget: 'DOJ Criminal Division' },
        { step: 2, title: 'Challenge Executive Privilege', description: 'Litigate to compel release of Kelly and McGahn memos and Kline testimony on grounds that executive privilege does not extend to evidence of potential crime or national security compromise', legalBasis: ['United States v. Nixon (1974)', 'In re Sealed Case (D.C. Circuit)'] },
        { step: 3, title: 'Counterintelligence Damage Assessment', description: 'Petition IC IG to conduct formal damage assessment of clearance overrides: what intelligence Kushner accessed, whether it was shared improperly, and whether it influenced his post-government business', legalBasis: ['50 U.S.C. 3033 (IC IG authority)'] },
        { step: 4, title: 'Ethics Litigation', description: 'File ethics complaints and civil actions regarding Kushner\'s concurrent policy and business roles, focusing on the 666 Fifth Ave resolution and subsequent Saudi investment', legalBasis: ['18 U.S.C. 208', 'Ethics in Government Act'] }
      ],
      relevantMechanisms: ['18 U.S.C. 1001', 'Executive privilege precedent', 'IC IG authority', 'Ethics statutes'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials can close the legal gap that allowed politically-motivated clearance overrides and establish accountability precedent',
      steps: [
        { step: 1, title: 'Pass Security Clearance Reform', description: 'Enact legislation requiring presidential clearance overrides to be reported to Intelligence Committees within 48 hours, with written justification addressing career adjudicator concerns', legalBasis: ['Article I legislative authority', 'Congressional control over classification framework'] },
        { step: 2, title: 'Mandate Counterintelligence Review', description: 'Direct the IC IG to conduct retroactive damage assessments of all 25 clearance overrides identified by Newbold, including analysis of whether compromised individuals caused intelligence losses', legalBasis: ['50 U.S.C. 3033', 'Congressional oversight authority'] },
        { step: 3, title: 'Revolving Door Legislation', description: 'Pass legislation requiring 5-year cooling-off period before senior officials can receive investments exceeding $1M from foreign governments they interacted with during service', legalBasis: ['Commerce Clause', 'Emoluments Clause framework'] },
        { step: 4, title: 'Strengthen SF-86 Enforcement', description: 'Direct DOJ to report on SF-86 prosecution patterns and explain disparities between prosecutions of lower-level applicants and non-prosecution of senior officials with more significant omissions', legalBasis: ['Congressional oversight of DOJ'] }
      ],
      relevantMechanisms: ['Clearance reform legislation', 'IC IG mandate', 'Revolving door legislation', 'SF-86 enforcement oversight'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can strengthen clearance adjudication processes, investigate financial flows, and implement post-government ethics enforcement',
      steps: [
        { step: 1, title: 'Strengthen Clearance Adjudication Independence', description: 'ODNI should implement regulations insulating career security adjudicators from political override, establishing formal escalation procedures that require documented justification', legalBasis: ['Executive Order 12968', 'ODNI regulatory authority'] },
        { step: 2, title: 'SEC Review of Affinity Partners', description: 'SEC should review Affinity Partners fund disclosures, fee structures, and whether material non-public information from government service influenced investment strategy', legalBasis: ['Securities Exchange Act of 1934', 'Investment Advisers Act'], filingTarget: 'SEC Division of Enforcement' },
        { step: 3, title: 'OGE Post-Employment Monitoring', description: 'Office of Government Ethics should investigate whether Kushner\'s post-government financial relationships violate post-employment restrictions and issue guidance on sovereign wealth fund investments', legalBasis: ['18 U.S.C. 207 (Post-employment restrictions)', 'Ethics in Government Act'] },
        { step: 4, title: 'NARA Records Enforcement', description: 'Investigate WhatsApp and encrypted messaging use during WH years; establish clear guidelines on encrypted communications with foreign leaders', legalBasis: ['Presidential Records Act', 'Federal Records Act'] }
      ],
      relevantMechanisms: ['ODNI regulations', 'SEC oversight', 'OGE enforcement', 'NARA records enforcement'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement can investigate the criminal dimensions of SF-86 fraud, presidential records violations, and potential counterintelligence compromise',
      steps: [
        { step: 1, title: 'SF-86 False Statement Investigation', description: 'Open investigation into Kushner\'s omission of 100+ foreign contacts on SF-86; compare to prosecution standards applied to other individuals for lesser omissions', legalBasis: ['18 U.S.C. 1001 (False Statements)'] },
        { step: 2, title: 'Counterintelligence Investigation', description: 'Conduct full counterintelligence assessment of whether classified information accessed via overridden clearance was compromised, shared with foreign nationals, or influenced post-government business', legalBasis: ['Executive Order 12333', '50 U.S.C. 3024'] },
        { step: 3, title: 'Records Destruction Investigation', description: 'Investigate whether WhatsApp messages with foreign leaders were deliberately destroyed to avoid Presidential Records Act requirements; determine if auto-delete was consciously enabled', legalBasis: ['18 U.S.C. 2071 (Concealment/destruction of records)', '44 U.S.C. 2209'] },
        { step: 4, title: 'Financial Investigation', description: 'Follow the financial trail from 666 Fifth Avenue debt crisis through Brookfield bailout to $2B Saudi investment; determine whether quid pro quo can be established between policy decisions and financial benefits', legalBasis: ['18 U.S.C. 201 (Bribery)', '18 U.S.C. 1956 (Money laundering)'] }
      ],
      relevantMechanisms: ['18 U.S.C. 1001', 'Counterintelligence authorities', '18 U.S.C. 2071', 'Financial crime statutes'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Criminal prosecution of SF-86 false statements, applying the same standards used to prosecute lower-level applicants',
    'Full declassification and public release of the Kelly memo, McGahn memo, and CIA assessment of Kushner counterintelligence vulnerabilities',
    'Congressional legislation restricting presidential clearance override authority and mandating Intelligence Committee notification',
    'Counterintelligence damage assessment of all 25 improperly overridden clearances identifying potential intelligence losses',
    'Identification and public disclosure of all 25 individuals who received improperly overridden clearances',
    'Federal investigation of whether Affinity Partners investment relationships were influenced by classified intelligence or policy decisions during WH tenure',
    'Revolving door legislation preventing senior officials from receiving foreign government investments within 5 years of service',
    'Enforcement of Presidential Records Act violations for encrypted messaging with foreign leaders',
    'Compelled testimony from Carl Kline and other witnesses who defied congressional subpoenas',
    'Reform of security clearance adjudication process to prevent political override of career professionals'
  ]
};
