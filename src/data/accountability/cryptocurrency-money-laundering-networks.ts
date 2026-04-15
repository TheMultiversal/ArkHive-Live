import type { AccountabilityData } from '@/types/accountability';

export const cryptoMoneyLaunderingAccountability: AccountabilityData = {
  investigationSlug: 'cryptocurrency-money-laundering-networks',
  crimeSummary: 'Cryptocurrency has created the largest unregulated money laundering infrastructure in history, with $22.2 billion sent to illicit addresses in 2023 alone. Major exchanges like Binance processed $10+ billion in criminal transactions before enforcement. North Korean Lazarus Group stole $3+ billion for weapons programs. Mixing services like Tornado Cash laundered $7+ billion. Ransomware groups extracted $2+ billion from critical infrastructure. Regulatory fragmentation and the speed of crypto innovation have left enforcement permanently behind.',
  totalHarm: '$22.2 billion in illicit crypto transactions in 2023 alone; $3+ billion stolen by North Korea for nuclear weapons; $2+ billion in ransomware payments; billions more through DeFi exploits, OTC laundering, and dark web markets',
  victimsAffected: 'Ransomware victims including hospitals, schools, and critical infrastructure operators; exchange hack victims; fraud victims; global population threatened by North Korean weapons program funded by stolen crypto; legitimate crypto users harmed by industry reputation damage',
  primaryTargets: [
    {
      name: 'Unregulated/Under-regulated Crypto Exchanges',
      role: 'Process billions in criminal transactions with inadequate or deliberately insufficient AML/KYC controls; serve as primary on-ramp and off-ramp for laundered cryptocurrency',
      currentStatus: 'Binance paid $4.3 billion but continues operating; hundreds of smaller exchanges operate with minimal compliance in permissive jurisdictions',
      accountabilityPath: 'FinCEN enforcement against non-compliant exchanges, international coordination through FATF Travel Rule implementation, license revocation in non-compliant jurisdictions',
      obstacles: ['Jurisdictional arbitrage - exchanges relocate to avoid regulation', 'Decentralized exchanges have no central authority to regulate', 'Speed of new platform creation outpaces regulatory capacity']
    },
    {
      name: 'Lazarus Group / DPRK Cyber Operations',
      role: 'Stole $3+ billion in cryptocurrency through exchange hacks and DeFi exploits to fund North Korean nuclear weapons and ballistic missile programs',
      currentStatus: 'Continues to operate with increasing sophistication; represents the most prolific nation-state crypto theft operation in history',
      accountabilityPath: 'OFAC sanctions designations, international cooperation through UN Security Council resolutions, blockchain analysis to identify and freeze stolen funds, diplomatic pressure on China to shut down OTC cash-out networks',
      obstacles: ['North Korea operates outside international legal framework', 'China shields North Korean financial networks', 'Mixing services and privacy coins defeat tracing', 'Speed of theft-to-laundering pipeline']
    },
    {
      name: 'FinCEN / U.S. Regulatory Framework',
      role: 'Primary AML regulator that has failed to establish comprehensive crypto-specific requirements; patchwork of guidance, enforcement, and state licensing creates gaps',
      currentStatus: 'Travel Rule partially implemented; DeFi regulation nonexistent; privacy coin regulation absent; international coordination via FATF incomplete',
      accountabilityPath: 'Congressional legislation establishing comprehensive crypto AML framework, FinCEN rulemaking for DeFi protocols and privacy-enhancing technologies, international harmonization through FATF',
      obstacles: ['Crypto industry lobbying and political donations', 'Constitutional questions about code-as-speech', 'Pace of innovation exceeds regulatory capacity', 'Jurisdictional fragmentation']
    }
  ],
  legalMechanisms: [
    {
      name: 'Bank Secrecy Act Enforcement',
      statute: '31 U.S.C. 5311 / 5322',
      description: 'BSA AML/KYC requirements applied to virtual asset service providers (VASPs); basis for Binance $4.3 billion penalty and CZ guilty plea',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['FinCEN', 'DOJ', 'IRS-CI'],
      applicability: 'directly_applicable' as const,
      notes: 'Effectively applied to centralized exchanges; cannot reach decentralized protocols or privacy coin transactions'
    },
    {
      name: 'OFAC Sanctions',
      statute: '50 U.S.C. 1701 / 1705',
      description: 'IEEPA sanctions authority used to designate Tornado Cash, North Korean-linked wallets, and sanctioned country crypto operations',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['OFAC', 'Treasury', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Tornado Cash sanctions created landmark precedent for designating DeFi protocols; constitutional challenges ongoing'
    },
    {
      name: 'Money Laundering Prosecution',
      statute: '18 U.S.C. 1956',
      description: 'Federal money laundering statute used against crypto exchange operators, mixer developers, and individuals laundering stolen cryptocurrency',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'IRS-CI', 'HSI'],
      applicability: 'directly_applicable' as const,
      notes: 'Used in Tornado Cash developer prosecutions, BTC-e takedown, and Bitfinex hack laundering case'
    },
    {
      name: 'FATF Travel Rule for VASPs',
      statute: 'FATF Recommendation 16',
      description: 'International standard requiring VASPs to share sender and recipient information for crypto transactions above threshold; basis for global regulatory harmonization',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FinCEN', 'EU regulators', 'FATF member country regulators'],
      applicability: 'potentially_applicable' as const,
      notes: 'Fewer than half of FATF members have fully implemented as of 2025; enforcement depends on national implementation'
    }
  ],
  wealthTrace: [
    {
      name: 'North Korean Weapons Program',
      relationship: 'End destination for $3+ billion in stolen cryptocurrency',
      transferMethod: 'Exchange hacks and DeFi exploits, laundered through mixers and cross-chain bridges, converted to fiat through Chinese OTC brokers',
      estimatedValue: '$3+ billion cumulative',
      legalEntities: ['DPRK military and intelligence', 'Chinese OTC broker networks', 'Southeast Asian front companies'],
      recoveryMechanisms: ['OFAC designations', 'UN Security Council cooperation', 'Blockchain tracing and freeze orders']
    },
    {
      name: 'Ransomware Group Revenue',
      relationship: 'Cryptocurrency ransom payments held by cybercriminal organizations',
      transferMethod: 'Bitcoin or Monero ransom payments, laundered through mixers and privacy coins, converted through OTC brokers',
      estimatedValue: '$2+ billion cumulative',
      legalEntities: ['Conti/REvil/LockBit affiliate networks', 'Russian-speaking cybercriminal groups', 'Money mule operations'],
      recoveryMechanisms: ['FBI crypto seizure operations', 'International law enforcement cooperation', 'Exchange wallet freezing']
    },
    {
      name: 'OTC Broker Cash-Out Networks',
      relationship: 'Critical infrastructure converting laundered crypto to fiat currency',
      transferMethod: 'In-person and Telegram-based exchange operations processing tens of billions annually with minimal KYC',
      estimatedValue: 'Tens of billions annually',
      legalEntities: ['China/Hong Kong OTC networks', 'Southeast Asian money changers', 'Telegram-based broker operations'],
      recoveryMechanisms: ['Targeted law enforcement operations', 'Cross-border cooperation', 'Exchange identification of OTC wallets']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'FinCEN Director',
      title: 'Director, Financial Crimes Enforcement Network',
      jurisdiction: 'Federal',
      powers: ['Issue crypto-specific AML rulemaking', 'Enforce BSA against non-compliant VASPs', 'Designate DeFi protocols as financial institutions', 'Implement Travel Rule for crypto'],
      contactMethod: 'FinCEN regulatory comments process'
    },
    {
      name: 'OFAC Director',
      title: 'Director, Office of Foreign Assets Control',
      jurisdiction: 'Federal',
      powers: ['Sanction crypto addresses and protocols', 'Designate mixing services', 'Block sanctioned country crypto operations', 'Add crypto wallets to SDN list'],
      contactMethod: 'Treasury OFAC reporting portal'
    },
    {
      name: 'IRS Criminal Investigation Chief',
      title: 'Chief, IRS Criminal Investigation Division',
      jurisdiction: 'Federal',
      powers: ['Trace and seize cryptocurrency', 'Investigate tax evasion through crypto', 'Lead blockchain forensic investigations', 'Coordinate international crypto enforcement'],
      contactMethod: 'IRS-CI tip reporting'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Support comprehensive cryptocurrency regulation and report suspected crypto fraud',
      steps: [
        { step: 1, title: 'Report crypto fraud to FBI IC3', description: 'Report suspected cryptocurrency fraud, ransomware demands, or laundering activity to the FBI Internet Crime Complaint Center', legalBasis: ['IC3 is the primary federal reporting mechanism for cyber-enabled financial crime'], estimatedTime: '30-60 minutes' },
        { step: 2, title: 'Support regulatory reform', description: 'Contact congressional representatives demanding comprehensive crypto AML legislation closing gaps for DeFi, privacy coins, and cross-chain bridges', legalBasis: ['First Amendment petition rights'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Comment on FinCEN rulemaking', description: 'When FinCEN proposes crypto-related regulations, submit public comments supporting strong AML requirements for all virtual asset service providers', legalBasis: ['Administrative Procedure Act public comment rights'], estimatedTime: '2-4 hours per comment period' }
      ],
      relevantMechanisms: ['FBI IC3 reporting', 'Congressional advocacy', 'FinCEN rulemaking process'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate and expose the scale of crypto laundering and regulatory failures',
      steps: [
        { step: 1, title: 'Analyze blockchain data', description: 'Use publicly available blockchain explorers and Chainalysis/Elliptic reports to document patterns of illicit crypto transactions and laundering techniques', estimatedTime: '2-4 weeks' },
        { step: 2, title: 'FOIA enforcement records', description: 'Request FinCEN examination records, DOJ prosecution statistics, and OFAC designation analysis for crypto-related enforcement through Freedom of Information Act', legalBasis: ['5 U.S.C. 552 - Freedom of Information Act'], estimatedTime: '3-12 months' },
        { step: 3, title: 'Investigate OTC broker networks', description: 'Document the OTC broker ecosystem in China and Southeast Asia that serves as the critical fiat off-ramp for laundered cryptocurrency', estimatedTime: '1-3 months' },
        { step: 4, title: 'Publish findings', description: 'Report on the gap between crypto industry claims of compliance and the actual scale of illicit activity flowing through crypto infrastructure', estimatedTime: '2-4 weeks' }
      ],
      relevantMechanisms: ['FOIA', 'Blockchain analysis tools', 'Chainalysis crypto crime reports'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Close regulatory gaps enabling crypto laundering at scale',
      steps: [
        { step: 1, title: 'Issue DeFi AML requirements', description: 'FinCEN should designate DeFi protocols as financial institutions subject to BSA requirements, establishing compliance obligations for protocol governance', legalBasis: ['31 U.S.C. 5311 - BSA authority over money services'], estimatedTime: '12-18 months for rulemaking' },
        { step: 2, title: 'Implement full Travel Rule', description: 'Fully implement FATF Travel Rule for all VASPs with enforcement teeth; coordinate with international partners for universal adoption', estimatedTime: '6-12 months' },
        { step: 3, title: 'Address privacy coin risk', description: 'Issue guidance on enhanced due diligence requirements for exchanges that offer privacy coins; consider requiring delistings for coins designed to defeat AML analysis', estimatedTime: '6-12 months' },
        { step: 4, title: 'International OTC enforcement', description: 'Expand international cooperation to target OTC broker networks in China and Southeast Asia through bilateral agreements and FATF pressure', estimatedTime: '1-2 years' }
      ],
      relevantMechanisms: ['BSA rulemaking authority', 'FATF Travel Rule', 'OFAC sanctions authority', 'International cooperation agreements'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'Comprehensive federal crypto AML legislation enacted covering DeFi, mixers, and privacy coins',
    'FATF Travel Rule fully implemented by all major jurisdictions',
    'North Korean crypto theft reduced by 50% through enhanced exchange security and sanctions enforcement',
    'Ransomware payments decrease measurably through improved prevention and law enforcement response',
    'OTC broker networks in Asia disrupted through targeted international enforcement operations',
    'DeFi protocols implement compliant governance structures or face FinCEN enforcement'
  ]
};
