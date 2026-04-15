import type { AccountabilityData } from '@/types/accountability';

export const tradeBasedMoneyLaunderingSchemesAccountability: AccountabilityData = {
  investigationSlug: 'trade-based-money-laundering-schemes',
  crimeSummary: 'Trade-Based Money Laundering moves an estimated $1.6 trillion in illicit funds annually through over-invoicing, under-invoicing, phantom shipments, and multiple invoicing of international trade transactions. Despite being the largest money laundering channel globally, TBML receives less than 5% of AML compliance spending. Drug cartels, terrorist organizations, sanctions evaders, and corrupt officials exploit the structural gap between customs agencies and financial regulators to move trillions undetected through apparently legitimate commerce.',
  totalHarm: '$1.6 trillion annually in illicit financial flows; $8.7 trillion in trade misinvoicing from developing countries over 2004-2013; finances drug trafficking killing 100,000+ Americans annually, terrorism, corruption, and human trafficking',
  victimsAffected: 'Global population affected through drug trafficking, terrorism financing, tax revenue loss in developing countries, legitimate businesses undercut by mispriced imports, workers in exploited industries',
  primaryTargets: [
    {
      name: 'Free Trade Zone Operators (Colon FZ, Jebel Ali, Tri-Border Area)',
      role: 'Critical TBML infrastructure nodes where goods are re-documented and re-valued between import and export with minimal oversight',
      currentStatus: 'Operating with minimal beneficial ownership verification or trade value scrutiny despite repeated FATF and State Department warnings',
      accountabilityPath: 'International pressure through FATF mutual evaluations, U.S. bilateral trade transparency agreements, targeted sanctions on complicit FTZ entities',
      obstacles: ['Sovereign jurisdiction over FTZs', 'Commercial confidentiality protections', 'Economic dependence on FTZ revenue', 'Lack of international enforcement mechanisms']
    },
    {
      name: 'FinCEN and CBP (Regulatory Gap)',
      role: 'Structural failure: FinCEN regulates financial institutions but not trade pricing; CBP inspects goods but not financial crime indicators; neither agency has mandate to assess commercial reasonableness of trade invoices',
      currentStatus: 'No specific TBML guidance issued for financial institutions; Trade Transparency Units understaffed; Corporate Transparency Act implementation delayed by legal challenges',
      accountabilityPath: 'Congressional mandate for trade finance AML requirements, FinCEN rulemaking requiring banks to assess commercial reasonableness, CBP integration of financial crime analysis',
      obstacles: ['Institutional turf between agencies', 'Banking industry lobbying against trade finance AML requirements', 'Complexity of trade data analysis', 'Political sensitivity of trade enforcement']
    },
    {
      name: 'Major Trade Finance Banks (Wolfsberg Group Members)',
      role: 'Process letters of credit and documentary collections for systematically mispriced trade invoices without assessing commercial reasonableness; treat trade finance as low AML risk',
      currentStatus: 'No BSA requirement to verify trade invoice pricing; Wolfsberg Group principles focus on sanctions screening only; banks knowingly process suspicious trade transactions after filing SARs',
      accountabilityPath: 'FinCEN rulemaking requiring commercial reasonableness assessment for trade finance, enhanced examination procedures by OCC and Federal Reserve, enforcement actions for willful blindness',
      obstacles: ['Banking industry political influence', 'Claimed impossibility of price verification', 'Revenue from trade finance processing fees', 'Lack of regulatory precedent']
    }
  ],
  legalMechanisms: [
    {
      name: 'Money Laundering Prosecution',
      statute: '18 U.S.C. 1956',
      description: 'Federal money laundering statute applicable to trade-based laundering of proceeds from specified unlawful activities including drug trafficking, fraud, and terrorism',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (10 years for certain violations)',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'HSI', 'DEA'],
      applicability: 'directly_applicable' as const,
      notes: 'Requires proof that defendant knew funds were proceeds of specified unlawful activity; trade complexity makes proving knowledge challenging'
    },
    {
      name: 'Customs Fraud Prosecution',
      statute: '18 U.S.C. 542',
      description: 'Entry of goods by means of false statements; directly applicable to trade misinvoicing where goods are entered with fraudulent valuations',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['CBP', 'HSI', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Underutilized for TBML; customs fraud cases typically focus on tariff evasion rather than money laundering through misinvoicing'
    },
    {
      name: 'Bank Secrecy Act Trade Finance Requirements',
      statute: '31 U.S.C. 5311',
      description: 'BSA requirements for financial institutions could be extended through FinCEN rulemaking to require commercial reasonableness assessment for trade finance transactions',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FinCEN', 'OCC', 'Federal Reserve', 'FDIC'],
      applicability: 'requires_new_action' as const,
      notes: 'Current BSA does not specifically require trade transaction price analysis; FinCEN rulemaking authority exists but has not been exercised'
    },
    {
      name: 'IEEPA Sanctions Enforcement',
      statute: '50 U.S.C. 1701',
      description: 'International Emergency Economic Powers Act enables sanctions against entities using TBML for sanctions evasion including Iranian, North Korean, and designated terrorist organizations',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['OFAC', 'Treasury', 'DOJ', 'State Department'],
      applicability: 'directly_applicable' as const,
      notes: 'Used against specific sanctioned entities but not applied broadly to TBML infrastructure; FTZ operators and complicit banks rarely designated'
    }
  ],
  wealthTrace: [
    {
      name: 'Global Real Estate Markets',
      relationship: 'Primary end destination for laundered trade proceeds across Miami, New York, London, Vancouver, and Dubai',
      transferMethod: 'TBML proceeds enter banking system as legitimate trade revenue then invested through anonymous shell companies in luxury and commercial real estate',
      estimatedValue: 'Hundreds of billions in total holdings globally',
      legalEntities: ['Anonymous LLC purchasers', 'Shell company property investors', 'Foreign trust structures'],
      recoveryMechanisms: ['FinCEN Geographic Targeting Order expansion', 'Beneficial ownership disclosure requirements', 'Civil forfeiture proceedings']
    },
    {
      name: 'Drug Cartel Financial Infrastructure',
      relationship: 'Cartels using Black Market Peso Exchange and China trade misinvoicing to integrate drug proceeds',
      transferMethod: 'BMPE converting drug dollars to local currency through complicit importers; Mexico-China trade routes moving billions through mispriced shipments',
      estimatedValue: '$5-10 billion annually from Colombian/Mexican cartels alone',
      legalEntities: ['Cartel-controlled import/export companies', 'BMPE money brokers', 'Complicit trade intermediaries'],
      recoveryMechanisms: ['DEA/HSI joint investigations', 'Trade Transparency Unit analysis', 'Asset forfeiture of identified proceeds']
    },
    {
      name: 'Chinese Underground Value Transfer System',
      relationship: 'Massive informal value transfer combining capital flight and criminal proceeds through trade invoicing',
      transferMethod: 'Over- and under-invoicing of bilateral trade to settle informal banking debts without wire transfers',
      estimatedValue: '$100-200 billion annually',
      legalEntities: ['Underground banking brokers in U.S. and China', 'Complicit import/export companies', 'Informal money service businesses'],
      recoveryMechanisms: ['Bilateral trade data sharing agreements', 'BSA enforcement against complicit U.S. entities', 'Treasury designations']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Andrea Gacki',
      title: 'Director, Financial Crimes Enforcement Network',
      jurisdiction: 'Federal',
      powers: ['Issue trade finance AML rulemaking', 'Require commercial reasonableness assessment for trade transactions', 'Designate trade finance as higher AML risk category', 'Issue advisories on TBML red flags'],
      contactMethod: 'FinCEN regulatory comments process'
    },
    {
      name: 'Troy Miller',
      title: 'Acting Commissioner, Customs and Border Protection',
      jurisdiction: 'Federal',
      powers: ['Expand cargo inspection rates', 'Integrate financial crime analysis into customs enforcement', 'Expand Trade Transparency Unit operations', 'Increase bilateral trade data sharing agreements'],
      contactMethod: 'CBP public affairs and congressional oversight'
    },
    {
      name: 'Senate Banking Committee Chair',
      title: 'Chair, Senate Committee on Banking, Housing, and Urban Affairs',
      jurisdiction: 'Federal',
      powers: ['Legislate trade finance AML requirements', 'Mandate commercial reasonableness assessment', 'Fund Trade Transparency Units', 'Accelerate Corporate Transparency Act implementation'],
      contactMethod: 'Congressional office; committee hearings'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Advocate for regulatory reform closing the gap between customs and financial crime enforcement',
      steps: [
        { step: 1, title: 'Understand TBML mechanisms', description: 'Research how trade-based money laundering works through over-invoicing, under-invoicing, and phantom shipments using GFI and FATF public reports', estimatedTime: '2-4 hours' },
        { step: 2, title: 'Contact elected representatives', description: 'Write to Senate Banking Committee and House Financial Services Committee members demanding trade finance AML legislation requiring banks to assess commercial reasonableness of trade transactions', legalBasis: ['First Amendment petition rights'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Support transparency organizations', description: 'Donate to and amplify the work of Global Financial Integrity, Transparency International, and similar organizations researching and publicizing illicit financial flows', estimatedTime: 'Ongoing' },
        { step: 4, title: 'Comment on FinCEN rulemaking', description: 'When FinCEN issues proposed rules related to Corporate Transparency Act or AML requirements, submit public comments demanding trade finance coverage', legalBasis: ['Administrative Procedure Act public comment rights'], estimatedTime: '2-4 hours per comment period' }
      ],
      relevantMechanisms: ['BSA rulemaking authority', 'Congressional legislation', 'Corporate Transparency Act implementation'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate and expose the scale of TBML and the regulatory failures enabling it',
      steps: [
        { step: 1, title: 'Analyze bilateral trade data', description: 'Compare U.S. Census Bureau import data with partner country export data to identify systematic discrepancies indicating TBML; focus on high-risk sectors like textiles, gold, and electronics', estimatedTime: '2-4 weeks' },
        { step: 2, title: 'FOIA trade enforcement records', description: 'Request HSI Trade Transparency Unit case statistics, CBP trade misinvoicing referrals, and FinCEN trade finance SAR aggregates through Freedom of Information Act', legalBasis: ['5 U.S.C. 552 - Freedom of Information Act'], estimatedTime: '3-12 months' },
        { step: 3, title: 'Investigate Free Trade Zone operations', description: 'Document goods entering and leaving major FTZs with different valuations; investigate beneficial ownership of FTZ-based companies flagged in FATF and State Department reports', estimatedTime: '1-3 months' },
        { step: 4, title: 'Publish investigation findings', description: 'Report on the systemic regulatory gap between customs and financial crime enforcement, with specific cases showing how trade misinvoicing launders billions', estimatedTime: '2-4 weeks for publication' }
      ],
      relevantMechanisms: ['FOIA', 'Census Bureau trade data', 'FATF mutual evaluation reports'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Close the structural gap between trade regulation and financial crime enforcement',
      steps: [
        { step: 1, title: 'Issue trade finance AML guidance', description: 'FinCEN should issue specific guidance requiring financial institutions to assess the commercial reasonableness of trade finance transactions, not just screen parties against sanctions lists', legalBasis: ['31 U.S.C. 5311 - BSA rulemaking authority'], estimatedTime: '6-12 months for rulemaking' },
        { step: 2, title: 'Expand Trade Transparency Units', description: 'HSI should expand bilateral trade data sharing agreements beyond current handful of partner countries and increase TTU staffing for systematic trade anomaly analysis', estimatedTime: '1-2 years for full expansion' },
        { step: 3, title: 'Integrate customs and financial analysis', description: 'Create interagency task force combining CBP trade data, FinCEN financial intelligence, and HSI investigative resources to systematically identify and investigate TBML', estimatedTime: '1-2 years' },
        { step: 4, title: 'Implement Corporate Transparency Act', description: 'Accelerate beneficial ownership database implementation to enable identification of shell companies used in TBML schemes despite ongoing legal challenges', legalBasis: ['31 U.S.C. 5336 - Corporate Transparency Act'], estimatedTime: '1-2 years' }
      ],
      relevantMechanisms: ['BSA rulemaking', 'Bilateral trade agreements', 'Corporate Transparency Act', 'Interagency coordination'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'FinCEN issues specific trade finance AML guidance requiring commercial reasonableness assessment',
    'Bilateral trade data sharing agreements expanded to at least 20 countries',
    'Trade Transparency Units staffing and budget tripled from current levels',
    'Measurable reduction in bilateral trade data discrepancies in high-risk sectors',
    'Corporate Transparency Act beneficial ownership database fully operational',
    'At least 3 major enforcement actions per year against TBML infrastructure operators',
    'Free Trade Zone transparency requirements adopted through FATF standards'
  ]
};
