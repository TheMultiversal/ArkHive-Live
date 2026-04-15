import type { AccountabilityData } from '@/types/accountability';

export const chinaCyberEspionageAccountability: AccountabilityData = {
  investigationSlug: 'china-cyber-espionage',
  crimeSummary: 'Systematic Chinese state-sponsored cyber espionage campaigns targeting U.S. government agencies, critical infrastructure, defense contractors, and private sector companies, resulting in the theft of over 22 million federal personnel records from the Office of Personnel Management, hundreds of billions in intellectual property theft, and persistent infiltration of telecommunications and energy grid infrastructure through operations including APT1/PLA Unit 61398, Volt Typhoon, Salt Typhoon, and APT10 Cloud Hopper.',
  totalHarm: 'Estimated $200-600 billion annually in intellectual property theft; 22.1 million federal personnel records compromised in OPM breach; 145.5 million Americans exposed in Equifax breach linked to Chinese military hackers; critical infrastructure pre-positioned for potential sabotage; defense technology advantages eroded across fighter jet, stealth, and nuclear weapons programs; telecommunications networks of major carriers compromised',
  victimsAffected: 'Over 22 million current and former federal employees and security clearance applicants (OPM breach); 145.5 million Americans (Equifax breach); thousands of companies across every major industry sector; defense and intelligence community personnel exposed to foreign targeting; American workers displaced by stolen trade secrets; taxpayers funding defense R&D transferred to adversary nation',
  primaryTargets: [
    {
      name: 'People\'s Liberation Army Unit 61398 / Chinese Military Intelligence',
      role: 'Primary operational unit conducting cyber espionage campaigns against U.S. targets, with identified hackers including Wang Dong, Sun Kailiang, and other PLA officers indicted in 2014',
      currentStatus: 'Operating with impunity from China; indicted individuals remain beyond U.S. extradition; unit reorganized under Strategic Support Force but operations continue and have expanded in scope',
      accountabilityPath: 'Continued criminal indictments to establish legal record; expanded economic sanctions targeting PLA-affiliated entities; diplomatic pressure through multilateral coalitions; enhanced cyber deterrence through demonstrated offensive capability',
      obstacles: ['China refuses extradition of accused hackers', 'Diplomatic considerations limit aggressive responses', 'Attribution complexity provides deniability', 'Economic interdependence constrains sanctions']
    },
    {
      name: 'Office of Personnel Management Leadership',
      role: 'Failed to implement basic cybersecurity measures despite repeated warnings from inspectors general, allowing the catastrophic breach of 22.1 million personnel records including SF-86 security clearance applications',
      currentStatus: 'Former Director Katherine Archuleta resigned June 2015 but faced no legal accountability; OPM has implemented partial security improvements but fundamental vulnerabilities persist across federal IT infrastructure',
      accountabilityPath: 'Congressional oversight enforcement; inspector general referrals for negligence; civil liability for failure to protect personally identifiable information; systemic reform of federal cybersecurity governance',
      obstacles: ['Government officials rarely face personal liability for institutional failures', 'Sovereign immunity limits civil suits against agencies', 'Revolving door between government and private sector', 'Classification of breach details limits public accountability']
    },
    {
      name: 'Equifax Inc.',
      role: 'Failed to patch known Apache Struts vulnerability for months despite alerts, enabling Chinese military hackers to steal personal and financial data of 145.5 million Americans in 2017',
      currentStatus: 'Settled with FTC for $700 million in 2019; four PLA members indicted in 2020; Equifax continues operating as major credit bureau with improved but still questioned security practices',
      accountabilityPath: 'Continued regulatory oversight by FTC and CFPB; state attorney general enforcement actions; criminal referrals for executives who sold stock before breach disclosure; support for federal data privacy legislation',
      obstacles: ['Settlement amount inadequate relative to harm', 'Credit bureau oligopoly limits market accountability', 'No federal data privacy law with strong enforcement', 'Executive stock sales investigated but no charges filed']
    }
  ],
  legalMechanisms: [
    {
      name: 'Economic Espionage Act',
      statute: '18 U.S.C. 1831',
      description: 'Federal law criminalizing theft of trade secrets for the benefit of a foreign government, with penalties up to 15 years imprisonment and $5 million in fines for individuals, $10 million for organizations',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ National Security Division', 'FBI Counterintelligence Division'],
      applicability: 'directly_applicable',
      notes: 'Used in 2014 PLA Unit 61398 indictments; first-ever charges against state actors for cyber economic espionage'
    },
    {
      name: 'Computer Fraud and Abuse Act',
      statute: '18 U.S.C. 1030',
      description: 'Primary federal statute criminalizing unauthorized access to computer systems, used in virtually all cyber espionage prosecutions including the Equifax breach indictments',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (10 years for certain offenses)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Criminal Division', 'FBI Cyber Division', 'U.S. Secret Service'],
      applicability: 'directly_applicable'
    },
    {
      name: 'International Emergency Economic Powers Act (Cyber Sanctions)',
      statute: 'Executive Order 13694',
      description: 'Presidential authority to impose economic sanctions on individuals and entities engaged in significant malicious cyber-enabled activities, including blocking property and restricting financial transactions',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['President', 'Treasury Department OFAC', 'State Department'],
      applicability: 'directly_applicable',
      notes: 'Obama signed EO 13694 in 2015; used sparingly against Chinese entities due to economic interdependence'
    },
    {
      name: 'CISA Binding Operational Directives',
      statute: '44 U.S.C. 3553',
      description: 'Cybersecurity and Infrastructure Security Agency authority to issue binding directives requiring federal agencies to mitigate known vulnerabilities within specified timeframes',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['CISA Director', 'DHS Secretary'],
      applicability: 'directly_applicable',
      notes: 'BOD 22-01 established Known Exploited Vulnerabilities catalog; agencies required to patch within deadlines'
    }
  ],
  wealthTrace: [
    {
      name: 'Chinese Defense Industrial Base',
      relationship: 'Primary beneficiary of stolen defense technology including F-35 fighter jet designs, nuclear weapons data, and stealth technology',
      transferMethod: 'Cyber theft of classified and proprietary defense contractor data transferred to Chinese military and state-owned enterprises for weapons development',
      estimatedValue: '$100-300 billion in avoided R&D costs',
      legalEntities: ['PLA Strategic Support Force', 'Aviation Industry Corporation of China', 'China Aerospace Science and Technology Corporation'],
      recoveryMechanisms: ['Sanctions on beneficiary entities', 'Trade restrictions on derived products', 'International technology control regimes']
    },
    {
      name: 'Chinese State-Owned Enterprises',
      relationship: 'Received stolen trade secrets and intellectual property across manufacturing, technology, and energy sectors',
      transferMethod: 'MSS and PLA cyber units exfiltrated corporate data and transferred to SOEs through Ministry of State Security technology transfer programs',
      estimatedValue: '$200-600 billion annually in IP theft across all sectors',
      legalEntities: ['Huawei Technologies', 'ZTE Corporation', 'Various SOEs across targeted sectors'],
      recoveryMechanisms: ['Entity List export restrictions', 'Section 301 tariffs on derived products', 'WTO dispute resolution']
    },
    {
      name: 'Chinese Intelligence Services (MSS/PLA)',
      relationship: 'Operational beneficiary of OPM breach data enabling identification of U.S. intelligence officers and assets',
      transferMethod: 'Direct exfiltration of 22.1 million SF-86 security clearance forms and associated biographic and biometric data from OPM systems',
      estimatedValue: 'Incalculable intelligence value; enabled targeting of CIA officers and human sources globally',
      legalEntities: ['Ministry of State Security', 'PLA Strategic Support Force', 'PLA Intelligence Bureau'],
      recoveryMechanisms: ['Counterintelligence operations to protect exposed personnel', 'Diplomatic consequences', 'Cyber deterrence operations']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'FBI Director',
      title: 'Director, Federal Bureau of Investigation',
      jurisdiction: 'Lead federal agency for cyber threat investigations and counterintelligence',
      powers: ['Investigate cyber espionage cases', 'Coordinate with intelligence community on attribution', 'Refer cases to DOJ for prosecution', 'Issue joint advisories with CISA on active threats'],
      contactMethod: 'FBI Internet Crime Complaint Center (IC3) at ic3.gov'
    },
    {
      name: 'Attorney General',
      title: 'U.S. Attorney General',
      jurisdiction: 'Federal prosecution authority including National Security Division cyber cases',
      powers: ['File criminal indictments against foreign hackers', 'Authorize FISA surveillance for counterintelligence', 'Coordinate with international law enforcement', 'Pursue asset forfeiture of proceeds from stolen IP'],
      contactMethod: 'DOJ National Security Division public affairs'
    },
    {
      name: 'CISA Director',
      title: 'Director, Cybersecurity and Infrastructure Security Agency',
      jurisdiction: 'Federal civilian cybersecurity and critical infrastructure protection',
      powers: ['Issue binding operational directives to federal agencies', 'Coordinate incident response for critical infrastructure', 'Maintain Known Exploited Vulnerabilities catalog', 'Provide threat intelligence to private sector'],
      contactMethod: 'CISA central contact at central@cisa.dhs.gov'
    },
    {
      name: 'Senate Intelligence Committee Chair',
      title: 'Chair, Senate Select Committee on Intelligence',
      jurisdiction: 'Congressional oversight of intelligence community cyber operations and counterintelligence',
      powers: ['Subpoena intelligence community officials', 'Hold classified and public hearings', 'Direct GAO investigations', 'Authorize intelligence community spending'],
      contactMethod: 'Senate Intelligence Committee website contact form'
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Citizens can protect themselves from espionage-derived threats, support federal cybersecurity policy, and demand accountability for institutional failures that left their data exposed.',
      steps: [
        { step: 1, title: 'Check OPM and Equifax Breach Exposure', description: 'Determine if your data was compromised in the OPM breach (if current or former federal employee) or Equifax breach. Freeze credit reports with all three bureaus and monitor for identity theft.', estimatedTime: '2-4 hours' },
        { step: 2, title: 'Support Federal Data Privacy Legislation', description: 'Contact members of Congress to support comprehensive federal data privacy and security legislation that holds companies and agencies accountable for failing to protect personal information.', filingTarget: 'U.S. House and Senate representatives', estimatedTime: '1-2 hours' },
        { step: 3, title: 'Demand Supply Chain Security', description: 'Advocate for removing Chinese-manufactured telecommunications equipment from U.S. networks through the FCC rip-and-replace program and support full funding for small carrier compliance.', estimatedTime: 'Ongoing advocacy' }
      ],
      relevantMechanisms: ['IEEPA Cyber Sanctions', 'CISA Binding Operational Directives'],
      urgency: 'immediate'
    },
    {
      role: 'journalist',
      overview: 'Journalists can investigate the full scope of Chinese cyber espionage, expose institutional failures, and examine the gap between known threats and government response.',
      steps: [
        { step: 1, title: 'FOIA Federal Cybersecurity Failures', description: 'File FOIA requests with OPM, DHS, and DOD for inspector general reports on cybersecurity compliance failures, breach response timelines, and vulnerability remediation records.', filingTarget: 'OPM, DHS, DOD FOIA offices', estimatedTime: '3-12 months for responses' },
        { step: 2, title: 'Investigate Critical Infrastructure Pre-Positioning', description: 'Report on Volt Typhoon and Salt Typhoon operations targeting water, energy, and telecommunications infrastructure, and examine whether utility companies have addressed known vulnerabilities.', estimatedTime: '3-6 months' },
        { step: 3, title: 'Trace Stolen IP to Chinese Products', description: 'Investigate specific cases where stolen American intellectual property appeared in Chinese military equipment or commercial products, documenting the economic and security impact.', estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['Economic Espionage Act', 'Computer Fraud and Abuse Act'],
      urgency: 'high'
    },
    {
      role: 'lawyer',
      overview: 'Attorneys can pursue civil liability for negligent data protection, support prosecution of identified cyber actors, and develop legal frameworks for deterring state-sponsored espionage.',
      steps: [
        { step: 1, title: 'Pursue Civil Liability for Data Breaches', description: 'Represent victims of OPM and Equifax breaches in civil litigation seeking damages for negligent data protection, particularly focusing on executives who failed to act on known vulnerabilities.', legalBasis: ['State data breach notification laws', 'FTC Section 5 unfairness authority'], estimatedTime: '1-3 years' },
        { step: 2, title: 'Support Trade Secret Litigation', description: 'Represent companies that have been victims of Chinese IP theft in civil actions under the Defend Trade Secrets Act to recover damages and obtain injunctive relief.', legalBasis: ['18 U.S.C. 1836 Defend Trade Secrets Act'], estimatedTime: '2-4 years' },
        { step: 3, title: 'Challenge Government Classification Overreach', description: 'File suits challenging over-classification of breach details and government response information that prevents public accountability for institutional cybersecurity failures.', legalBasis: ['FOIA exemption challenges', 'First Amendment'], estimatedTime: '1-3 years' }
      ],
      relevantMechanisms: ['Computer Fraud and Abuse Act', 'Economic Espionage Act'],
      urgency: 'high'
    },
    {
      role: 'elected_official',
      overview: 'Elected officials can strengthen federal cybersecurity mandates, fund critical infrastructure protection, and impose meaningful consequences for state-sponsored cyber espionage.',
      steps: [
        { step: 1, title: 'Pass Comprehensive Cybersecurity Legislation', description: 'Advance legislation mandating minimum cybersecurity standards for federal agencies and critical infrastructure operators, with personal liability for executives who ignore known vulnerabilities.', requirements: ['Committee jurisdiction over homeland security and intelligence'], estimatedTime: '1-2 congressional sessions' },
        { step: 2, title: 'Fund Critical Infrastructure Protection', description: 'Fully fund the CISA rip-and-replace program for Chinese telecommunications equipment and authorize additional resources for Volt Typhoon/Salt Typhoon remediation across water, energy, and telecom sectors.', requirements: ['Appropriations committee membership or floor vote'], estimatedTime: '1 appropriations cycle' },
        { step: 3, title: 'Strengthen Cyber Deterrence Framework', description: 'Develop and authorize a comprehensive cyber deterrence strategy with clear consequences for state-sponsored espionage, including automatic sanctions triggers and offensive cyber response authorities.', requirements: ['Armed Services or Intelligence committee membership'], estimatedTime: '1-2 years' }
      ],
      relevantMechanisms: ['IEEPA Cyber Sanctions', 'CISA Binding Operational Directives'],
      urgency: 'immediate'
    },
    {
      role: 'law_enforcement',
      overview: 'Federal law enforcement can pursue criminal cases against identified hackers, disrupt ongoing operations, and build international coalitions for cyber enforcement.',
      steps: [
        { step: 1, title: 'Continue Naming and Indicting Operatives', description: 'Expand the practice of publicly indicting identified Chinese cyber operatives to establish legal records, deter future operations, and enable sanctions against named individuals and associated entities.', filingTarget: 'U.S. District Courts', estimatedTime: 'Ongoing' },
        { step: 2, title: 'Disrupt Active Infrastructure', description: 'Execute court-authorized operations to disrupt Chinese botnet infrastructure and pre-positioned access to critical infrastructure, as demonstrated in the 2024 Volt Typhoon takedown operations.', legalBasis: ['CFAA', 'Federal court authorization for infrastructure disruption'], estimatedTime: 'Ongoing operational tempo' },
        { step: 3, title: 'Coordinate International Law Enforcement', description: 'Work with Five Eyes and allied nation law enforcement to jointly investigate and disrupt Chinese cyber operations, share threat intelligence, and coordinate legal actions against identified actors.', estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['Computer Fraud and Abuse Act', 'Economic Espionage Act', 'IEEPA Cyber Sanctions'],
      urgency: 'immediate'
    },
    {
      role: 'regulator',
      overview: 'Regulators can enforce data protection standards, mandate vulnerability remediation, and impose costs on organizations that fail to protect critical data and infrastructure.',
      steps: [
        { step: 1, title: 'Enforce Breach Notification and Security Standards', description: 'Use existing FTC, SEC, and sector-specific regulatory authority to impose meaningful penalties on organizations that fail to implement basic cybersecurity measures or timely patch known vulnerabilities.', filingTarget: 'FTC, SEC, sector-specific regulators', estimatedTime: 'Ongoing enforcement' },
        { step: 2, title: 'Mandate Supply Chain Security Reviews', description: 'Require critical infrastructure operators to conduct and report supply chain security assessments, particularly for telecommunications equipment and software from adversary nations.', legalBasis: ['Sector-specific regulatory authority', 'EO 13873 (Securing Information and Communications Technology)'], estimatedTime: '1-2 years for implementation' },
        { step: 3, title: 'Coordinate Vulnerability Disclosure Requirements', description: 'Establish mandatory vulnerability disclosure and remediation timelines for critical infrastructure operators, with escalating penalties for non-compliance.', estimatedTime: '1-2 years for rulemaking' }
      ],
      relevantMechanisms: ['CISA Binding Operational Directives', 'IEEPA Cyber Sanctions'],
      urgency: 'immediate'
    }
  ],
  successCriteria: [
    'Meaningful diplomatic and economic consequences imposed for each major cyber espionage campaign attributed to China',
    'All Chinese-manufactured telecommunications equipment removed from U.S. critical infrastructure networks',
    'Federal agencies achieve and maintain compliance with CISA cybersecurity directives for patching known exploited vulnerabilities',
    'Comprehensive federal data privacy legislation enacted with strong enforcement mechanisms and personal liability provisions',
    'Victims of OPM and Equifax breaches receive adequate identity protection and compensation',
    'International coalition established for joint attribution and consequences for state-sponsored cyber operations',
    'Demonstrated U.S. cyber deterrence capability that measurably reduces Chinese intrusion attempts'
  ]
};
