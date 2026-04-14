import type { AccountabilityData } from '@/types/accountability';

export const cambridgeAnalyticaAccountability: AccountabilityData = {
  investigationSlug: 'cambridge-analytica-global-operations',

  crimeSummary: 'Cambridge Analytica harvested personal data from up to 87 million Facebook users without consent through a personality quiz app developed by researcher Aleksandr Kogan. The data was used to build psychographic voter profiles and target political advertising in the 2016 U.S. presidential election, the 2016 Brexit referendum, and elections in multiple countries. Facebook knew of the data harvesting as early as 2015 but took minimal action beyond asking Cambridge Analytica to delete the data  -  which it falsely certified it had done. CEO Mark Zuckerberg\'s testimony before Congress revealed systemic failures in Facebook\'s data protection. Cambridge Analytica\'s parent company SCL Group had previously conducted influence operations in developing countries. The scandal exposed the fundamental business model of surveillance capitalism  -  mass data harvesting for behavioral manipulation  -  as a threat to democratic governance.',

  totalHarm: '87 million Facebook users\' data harvested without consent. Democratic processes in the U.S., UK, and multiple other countries potentially manipulated. Facebook\'s $5 billion FTC fine (largest privacy fine in history). Cambridge Analytica dissolved. The broader harm: the normalization of mass surveillance as a business model and the weaponization of personal data against democratic processes.',

  victimsAffected: '87 million Facebook users whose data was harvested. Voters in the U.S., UK, and other countries targeted with psychographic manipulation. Democratic institutions undermined by data-driven manipulation. Developing countries where SCL Group conducted influence operations. Facebook shareholders who sustained losses from the scandal.',

  primaryTargets: [
    {
      name: 'Mark Zuckerberg / Meta (Facebook)',
      role: 'CEO of Facebook (now Meta). Platform\'s business model enabled the mass data harvesting. Knew of the breach in 2015 and failed to protect users or notify them.',
      currentStatus: 'Facebook paid $5 billion FTC fine (2019). Zuckerberg testified before Congress. No personal criminal charges. Meta continues to operate the same surveillance capitalism business model. Zuckerberg personal net worth: $180+ billion.',
      accountabilityPath: 'The $5B fine was less than one month\'s revenue. No structural reform required. No individual executive accountability. The business model that enabled the breach continues unchanged. Further regulatory action, EU enforcement, and potential antitrust breakup.',
      obstacles: [
        'FTC settlement included broad release',
        'No individual executive liability',
        'Massive lobbying budget ($20M+/year)',
        'Business model unchanged',
      ],
    },
    {
      name: 'Alexander Nix',
      role: 'CEO of Cambridge Analytica. Oversaw the data harvesting and psychographic targeting operations.',
      currentStatus: 'Suspended as CEO in March 2018. Cambridge Analytica dissolved in May 2018. UK Information Commissioner\'s Office fined Cambridge Analytica £500,000 (maximum at the time). Nix faced no criminal charges. Key staff moved to new companies (Emerdata, Auspex International).',
      accountabilityPath: 'UK ICO investigation. Parliamentary investigation (DCMS Committee). Investigation of successor companies. Track where CA\'s data and methodologies went after dissolution.',
      obstacles: [
        'Cambridge Analytica dissolved  -  corporate shell disappeared',
        'Staff moved to new entities',
        'Data may have been retained despite deletion claims',
      ],
    },
    {
      name: 'Aleksandr Kogan',
      role: 'Cambridge University researcher who built the "thisisyourdigitallife" app that harvested data from users and all their Facebook friends.',
      currentStatus: 'Settled with FTC. Changed his name to Aleksandr Spectre. Continued academic career. No criminal charges.',
      accountabilityPath: 'FTC settlement. Investigation of whether similar data harvesting continues through other apps or entities.',
      obstacles: [
        'FTC settlement limits further federal action',
        'Academic protections',
      ],
    },
    {
      name: 'Steve Bannon / Robert Mercer',
      role: 'Bannon served on Cambridge Analytica\'s board and was its VP. Robert Mercer provided $15 million in funding. Both saw CA as a tool for political warfare.',
      currentStatus: 'Bannon subsequently convicted of contempt of Congress and fraud (Build the Wall). Mercer continues as a major political donor with diminished public profile. Neither faced consequences specific to Cambridge Analytica.',
      accountabilityPath: 'Investigation of Mercer\'s role in funding and directing the operation. Congressional investigation of political operatives\' involvement in data weaponization.',
      obstacles: [
        'Political influence',
        'Bannon\'s other convictions may overshadow CA involvement',
        'Mercer operates through opaque funding structures',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'FTC Act  -  Unfair and Deceptive Practices',
      statute: '15 U.S.C. § 45',
      description: 'Facebook\'s $5B FTC settlement for violating a 2012 consent decree by allowing Cambridge Analytica access to user data.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['FTC'],
      applicability: 'directly_applicable',
      notes: 'The $5B fine sounds large but was less than one month revenue. The consent order that accompanied it has been criticized as toothless. FTC can enforce the consent order for violations.',
    },
    {
      name: 'EU General Data Protection Regulation (GDPR)',
      statute: 'Regulation (EU) 2016/679',
      description: 'GDPR came into force May 2018  -  shortly after the Cambridge Analytica scandal broke. EU data protection authorities have investigated Facebook/Meta extensively. Fines of up to 4% of global annual turnover.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['EU data protection authorities', 'Irish DPC (Meta\'s EU base)'],
      applicability: 'directly_applicable',
      notes: 'Meta has been fined over €2.5 billion by EU regulators for various data protection violations. GDPR provides the strongest regulatory framework. Irish DPC has been criticized for slow enforcement.',
    },
    {
      name: 'Computer Fraud and Abuse Act (CFAA)',
      statute: '18 U.S.C. § 1030',
      description: 'Unauthorized access to computer systems. The harvesting of data from 87 million users through a deceptive app may constitute unauthorized access.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (criminal); 2 years (civil)',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI'],
      applicability: 'potentially_applicable',
      notes: 'CFAA applicability depends on whether Facebook\'s Terms of Service violations constitute "unauthorized access"  -  a contested legal question.',
    },
    {
      name: 'State Privacy Laws',
      statute: 'Various; e.g., California Consumer Privacy Act (CCPA), Illinois BIPA',
      description: 'State privacy laws provide additional enforcement mechanisms. Illinois BIPA has been particularly effective with statutory damages.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state',
      reachesHeirs: true,
      authorizedActors: ['State AGs', 'Private plaintiffs'],
      applicability: 'directly_applicable',
      notes: 'The Cambridge Analytica scandal was a major catalyst for state privacy legislation, including CCPA.',
    },
  ],

  wealthTrace: [
    {
      name: 'Meta / Zuckerberg Wealth',
      relationship: 'Platform that enabled mass data harvesting',
      transferMethod: 'Facebook\'s business model  -  selling targeted advertising based on surveilled user data  -  generates $100+ billion annual revenue. The Cambridge Analytica scandal temporarily reduced market cap by $100 billion. $5B fine paid. Business model unchanged. Zuckerberg controls Meta through dual-class stock structure.',
      estimatedValue: 'Meta market cap: $1.4+ trillion. Zuckerberg net worth: $180+ billion.',
      legalEntities: ['Meta Platforms, Inc. (NASDAQ: META)', 'Chan Zuckerberg Initiative'],
      recoveryMechanisms: ['EU GDPR enforcement', 'FTC consent order enforcement', 'Antitrust breakup'],
    },
    {
      name: 'Cambridge Analytica / SCL Group',
      relationship: 'Data weaponization company',
      transferMethod: 'Dissolved in 2018 claiming insolvency. Staff and methodologies transferred to successor entities including Emerdata Ltd. and Auspex International. Physical assets sold. Ultimate fate of the 87 million-person dataset unknown.',
      estimatedValue: 'Dissolved; assets transferred to successor entities',
      legalEntities: ['Emerdata Limited (UK)', 'Auspex International'],
      recoveryMechanisms: ['UK ICO investigation', 'Successor entity investigation'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'FTC',
      title: 'Federal Trade Commission',
      jurisdiction: 'Consumer protection and privacy',
      powers: [
        'Enforce 2019 consent order',
        'Investigate ongoing data practices',
        'Seek additional penalties for violations',
      ],
    },
    {
      name: 'EU Data Protection Authorities',
      title: 'GDPR enforcement bodies',
      jurisdiction: 'EU data protection',
      powers: [
        'Fine Meta up to 4% of global annual turnover',
        'Order data processing changes',
        'Suspend data transfers',
      ],
    },
    {
      name: 'Congress',
      title: 'U.S. Congress',
      jurisdiction: 'Legislation and oversight',
      powers: [
        'Pass federal privacy legislation',
        'Investigate political data operations',
        'Regulate algorithmic targeting in elections',
      ],
    },
  ],
  successCriteria: [
    'Comprehensive federal privacy law enacted with private right of action, opt-in consent requirements, data minimization mandates, and meaningful penalties for violations',
    'Full accounting of the 87 million-person dataset, confirmation of deletion or identification of successor entities possessing the data',
    'Criminal prosecution of individuals who facilitated unauthorized data harvesting and weaponized psychographic profiles for election manipulation across multiple countries',
    'Effective enforcement of Meta\'s FTC consent decree with structural remedies beyond financial penalties for subsequent violations',
    'Algorithmic transparency requirements forcing social media platforms to disclose how behavioral data is used for political targeting and content amplification',
    'Mandatory independent audits of political data operations during election cycles, no more self-policing by platforms with inherent conflicts of interest',
    'Successor entity accountability, Emerdata, Auspex International, and all organizations where Cambridge Analytica staff reconstituted must be investigated and monitored',
    'International cooperation framework for investigating cross-border data exploitation, Cambridge Analytica operated in 68 countries',
    'Personal liability for Mark Zuckerberg and Meta executives who were warned about platform data abuse and failed to act, as documented in internal communications',
    'Ban on psychological profiling for political advertising without explicit informed consent, the weaponization of personality data against democratic processes must be prohibited',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'Your data is the product. 87 million people\'s data was harvested without consent and used to manipulate elections. Demand privacy protections and audit your own data exposure.',
      urgency: 'high',
      relevantMechanisms: ['State Privacy Laws', 'FTC Act  -  Unfair and Deceptive Practices'],
      steps: [
        {
          step: 1,
          title: 'Audit Your Data',
          description: 'Check your Facebook privacy settings. Download your data archive. Review and revoke app permissions. Understand what data is being collected.',
          estimatedTime: '1 hour',
        },
        {
          step: 2,
          title: 'Demand Federal Privacy Law',
          description: 'The U.S. is the only major democracy without a comprehensive federal privacy law. Contact your representatives to demand one.',
          filingTarget: 'https://www.congress.gov/members/find-your-member',
          estimatedTime: '30 minutes',
        },
        {
          step: 3,
          title: 'Support Platform Alternatives',
          description: 'Use privacy-respecting alternatives to surveillance advertising platforms. Support decentralized social media. Every user who leaves reduces the data pool available for exploitation.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Cambridge Analytica dissolved but its people and methods moved to new companies. The surveillance advertising model remains. Follow the people and the data.',
      urgency: 'high',
      relevantMechanisms: ['FTC Act  -  Unfair and Deceptive Practices'],
      steps: [
        {
          step: 1,
          title: 'Track Successor Entities',
          description: 'Investigate Emerdata, Auspex International, and other entities where Cambridge Analytica staff landed. Are they running the same operations under new names?',
          estimatedTime: '4-6 weeks',
        },
        {
          step: 2,
          title: 'Map the 68-Country Operation',
          description: 'Cambridge Analytica operated in 68 countries. Most have never been investigated. Document election interference operations in Kenya, Nigeria, Trinidad, India, and other nations where CA deployed psychographic targeting.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Investigate Meta Internal Warnings',
          description: 'Internal Facebook documents show executives were warned about platform data abuse years before the public disclosure. Obtain and publish the full internal communications timeline showing what Meta knew and when.',
          estimatedTime: '4-8 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'GDPR enforcement. State privacy law claims. FTC consent order enforcement. Class actions for data breach victims.',
      urgency: 'standard',
      relevantMechanisms: ['EU General Data Protection Regulation (GDPR)', 'State Privacy Laws'],
      steps: [
        {
          step: 1,
          title: 'GDPR Class Action',
          description: 'Pursue GDPR-authorized collective action against Meta for ongoing data protection violations in EU jurisdictions.',
          legalBasis: ['GDPR Art. 80(1)'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'FTC Consent Order Enforcement',
          description: 'Monitor and enforce the $5 billion FTC consent order against Meta. File motions for contempt if violations are discovered. The order requires specific data governance reforms that must be independently verified.',
          legalBasis: ['15 U.S.C. § 45'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'State Privacy Law Claims',
          description: 'File claims under California CCPA, Illinois BIPA, and other state privacy laws on behalf of users whose data was harvested and weaponized without consent.',
          legalBasis: ['Cal. Civ. Code § 1798.100', '740 ILCS 14'],
          estimatedTime: '12-18 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass a comprehensive federal privacy law. Regulate algorithmic targeting in elections. Break up surveillance monopolies.',
      urgency: 'immediate',
      relevantMechanisms: ['State Privacy Laws', 'FTC Act  -  Unfair and Deceptive Practices'],
      steps: [
        {
          step: 1,
          title: 'Federal Privacy Legislation',
          description: 'Pass comprehensive federal privacy legislation with: private right of action, opt-in consent requirement, data minimization, algorithmic transparency, and meaningful penalties.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'Ban Psychographic Political Targeting',
          description: 'Prohibit the use of psychological profiling and behavioral prediction models for political advertising without explicit informed consent. The weaponization of personality data against voters is incompatible with democracy.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 3,
          title: 'Platform Structural Remedies',
          description: 'Consider structural remedies for platforms that have repeatedly demonstrated inability to self-regulate, including separation of advertising and social networking functions.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Investigate successor entities. Enforce existing consent orders. Prosecute data trafficking.',
      urgency: 'standard',
      relevantMechanisms: ['Computer Fraud and Abuse Act (CFAA)'],
      steps: [
        {
          step: 1,
          title: 'Data Trafficking Investigation',
          description: 'Investigate whether the 87 million-person dataset was truly deleted or transferred to successor entities.',
          legalBasis: ['18 U.S.C. § 1030'],
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'International Cooperation on Election Interference',
          description: 'Coordinate with UK, EU, and other jurisdictions where Cambridge Analytica operated to share evidence and pursue prosecution of individuals who interfered in elections across multiple countries.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Prosecution of Key Individuals',
          description: 'Pursue criminal charges against Alexander Nix, Brittany Kaiser, and other principals who directed data harvesting and election interference operations. UK proceedings have not resulted in meaningful accountability.',
          legalBasis: ['18 U.S.C. § 1030', 'Wire fraud'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Enforce existing privacy frameworks aggressively. The Cambridge Analytica model has been replicated. Surveillance advertising must be regulated.',
      urgency: 'high',
      relevantMechanisms: ['FTC Act  -  Unfair and Deceptive Practices', 'EU General Data Protection Regulation (GDPR)'],
      steps: [
        {
          step: 1,
          title: 'Algorithmic Audit Requirements',
          description: 'Mandate independent audits of algorithmic targeting systems used in political advertising. Require transparency in psychographic profiling.',
          estimatedTime: '12-18 months for rulemaking',
        },
        {
          step: 2,
          title: 'FTC Enforcement Escalation',
          description: 'Pursue structural remedies against Meta for ongoing consent order violations. The $5 billion fine had zero measurable impact on the company\'s behavior. Escalate to operational restrictions.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Data Broker Registration and Oversight',
          description: 'Implement mandatory registration and oversight requirements for data brokers who sell personal data for political targeting. Require disclosure of data sources, methods, and purchasers.',
          estimatedTime: '12-18 months for rulemaking',
        },
      ],
    },
  ],
};
