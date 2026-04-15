import type { AccountabilityData } from '@/types/accountability';

export const fannieMaeFraudAccountability: AccountabilityData = {
  investigationSlug: 'fannie-mae-fraud',
  crimeSummary: 'Fannie Mae executives systematically manipulated $10.6 billion in accounting entries from 1998 to 2004 to inflate earnings and trigger executive bonus payouts, while the company\'s implicit government guarantee allowed privatized profits and socialized losses that ultimately required a $187.5 billion taxpayer bailout.',
  totalHarm: '$10.6 billion in falsified earnings; $187.5 billion taxpayer bailout commitment; $80 billion in shareholder losses from conservatorship; $400 million SEC penalty paid by shareholders; 10+ million foreclosures in resulting housing crisis',
  victimsAffected: 'Fannie Mae shareholders who held securities based on fraudulent financials; 100+ community banks stressed by GSE preferred stock losses; 10+ million families who lost homes in 2007-2014 foreclosure crisis; all U.S. taxpayers who backstopped $187.5 billion bailout',
  primaryTargets: [
    {
      name: 'Franklin Raines',
      role: 'CEO who pressured controller\'s office to achieve earnings targets and received $90M in compensation tied to fraudulently inflated earnings',
      currentStatus: 'Settled SEC charges for $24.7M in surrendered stock options (no cash payment); no criminal charges; retained majority of compensation',
      accountabilityPath: 'DOJ criminal prosecution for securities fraud (statute of limitations expired); congressional subpoena for testimony on fraud mechanics; civil clawback of remaining compensation',
      obstacles: ['Statute of limitations expired for criminal prosecution', 'SEC settlement structured to avoid personal cash payment', 'Political connections from OMB Director tenure']
    },
    {
      name: 'KPMG (External Auditor)',
      role: 'Signed off on materially misstated financial statements for six years of annual audits, failing to detect $10.6 billion in accounting manipulations',
      currentStatus: 'Paid $115M settlement to Fannie Mae; continues operating as major global audit firm',
      accountabilityPath: 'PCAOB enforcement action; SEC enforcement for audit failures; professional liability litigation by investors',
      obstacles: ['Too Big to Fail audit firm', 'Settlement resolved without admissions', '$115M penalty immaterial to firm revenue']
    },
    {
      name: 'Congressional Enablers',
      role: 'Members who attacked OFHEO regulator at Fannie Mae\'s lobbying request, protecting the company from oversight that would have detected fraud earlier',
      currentStatus: 'No accountability; some continue serving in Congress; $170M in Fannie Mae lobbying bought systematic regulatory obstruction',
      accountabilityPath: 'Public exposure of specific members who intervened to protect Fannie Mae from regulatory oversight; ethics investigations',
      obstacles: ['Congressional privilege', 'Lobbying is legal', 'Revolving door between GSEs and government']
    }
  ],
  legalMechanisms: [
    {
      name: 'Securities Fraud (Exchange Act)',
      statute: '15 U.S.C. 78j(b) and Rule 10b-5',
      description: 'Prohibits material misstatements and omissions in connection with securities transactions; basis for SEC enforcement against Fannie Mae executives',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for SEC civil actions; 6 years for criminal prosecution',
      reachesHeirs: false,
      authorizedActors: ['SEC Enforcement Division', 'DOJ Criminal Division', 'Private investors (class actions)'],
      applicability: 'directly_applicable' as const,
      notes: 'Statute of limitations has expired for criminal prosecution of Fannie Mae fraud; pattern useful for future GSE accountability'
    },
    {
      name: 'Sarbanes-Oxley Act',
      statute: '18 U.S.C. 1348; 15 U.S.C. 7241-7242',
      description: 'Criminal securities fraud statute and CEO/CFO certification requirements enacted in 2002 to prevent accounting fraud; Fannie Mae was actively committing fraud when SOX passed',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years for criminal; 5 years for civil',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'SEC', 'PCAOB (audit oversight)'],
      applicability: 'directly_applicable' as const,
      notes: 'SOX was designed to prevent exactly the type of fraud Fannie Mae committed but failed to detect it in time'
    },
    {
      name: 'Housing Finance Reform Legislation',
      statute: '12 U.S.C. 4501-4642 (current); proposed reforms pending',
      description: 'Structural reform to eliminate the implicit government guarantee that created moral hazard enabling the fraud and subsequent bailout',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'FHFA', 'Treasury Department'],
      applicability: 'requires_new_action' as const,
      notes: 'Multiple reform proposals have failed in Congress since 2008; industry lobbying preserves current structure'
    }
  ],
  wealthTrace: [
    {
      name: 'Franklin Raines',
      relationship: 'CEO who received $90M in total compensation during fraud period',
      transferMethod: 'Executive compensation tied to fraudulently inflated EPS targets; SEC settlement reclaimed only $24.7M in stock options',
      estimatedValue: '$65+ million retained after settlement',
      legalEntities: ['Personal assets', 'Deferred compensation accounts'],
      recoveryMechanisms: ['Clawback provisions in future GSE compensation', 'Congressional testimony requirement']
    },
    {
      name: 'Fannie Mae Lobbying Infrastructure',
      relationship: '$170M spent on lobbying to prevent regulatory oversight (1998-2008)',
      transferMethod: 'Corporate lobbying expenditures, campaign contributions, Fannie Mae Foundation charitable grants',
      estimatedValue: '$170 million in direct lobbying',
      legalEntities: ['K Street lobbying firms', 'Fannie Mae Foundation', 'Congressional campaign committees'],
      recoveryMechanisms: ['GSE lobbying restrictions', 'Campaign finance reform', 'Revolving door cooling periods']
    },
    {
      name: 'U.S. Treasury (Conservatorship)',
      relationship: 'Taxpayer bailout after fraud masked risk-taking that contributed to 2008 collapse',
      transferMethod: 'Federal conservatorship preferred stock purchase agreements',
      estimatedValue: '$187.5 billion committed; $301 billion returned through net worth sweep',
      legalEntities: ['FHFA', 'U.S. Treasury', 'Federal National Mortgage Association'],
      recoveryMechanisms: ['Continued dividend payments under conservatorship', 'Housing finance reform legislation']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'SEC Chair',
      title: 'Chair, Securities and Exchange Commission',
      jurisdiction: 'Securities fraud enforcement and accounting standards oversight',
      powers: ['Bring civil enforcement actions for securities fraud', 'Require enhanced GSE disclosure', 'Coordinate with PCAOB on audit quality', 'Issue rules strengthening executive clawback provisions'],
      contactMethod: 'SEC Office of the Chair: (202) 551-2100'
    },
    {
      name: 'FHFA Director',
      title: 'Director, Federal Housing Finance Agency',
      jurisdiction: 'Safety and soundness regulation of Fannie Mae and Freddie Mac',
      powers: ['Set capital requirements', 'Approve or reject executive compensation', 'Manage conservatorship', 'Recommend structural reform to Congress'],
      contactMethod: 'FHFA: (202) 649-3800'
    },
    {
      name: 'Senate Banking Committee',
      title: 'Chair, Senate Committee on Banking, Housing, and Urban Affairs',
      jurisdiction: 'GSE oversight, housing finance reform legislation',
      powers: ['Hold oversight hearings', 'Subpoena GSE records and executives', 'Draft and advance housing finance reform legislation', 'Confirm FHFA Director and SEC Chair'],
      contactMethod: 'Senate Banking Committee: (202) 224-7391'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Demand housing finance reform and accountability for future GSE fraud through congressional engagement.',
      steps: [
        {
          step: 1,
          title: 'Contact congressional representatives',
          description: 'Write to your senators and representative demanding housing finance reform that eliminates the implicit government guarantee and requires genuine executive accountability.',
          requirements: ['Identify your congressional representatives', 'Reference specific reform proposals'],
          estimatedTime: '1-2 hours'
        },
        {
          step: 2,
          title: 'Support housing finance reform organizations',
          description: 'Support advocacy organizations pushing for structural reform of the GSE model, including elimination of the privatized-profits socialized-losses structure.',
          requirements: ['Research housing finance reform advocacy groups'],
          estimatedTime: 'Ongoing'
        }
      ],
      relevantMechanisms: ['Housing finance reform legislation', 'Congressional oversight'],
      urgency: 'standard' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate the ongoing conservatorship, lobbying against reform, and post-settlement wealth of Fannie Mae executives.',
      steps: [
        {
          step: 1,
          title: 'FOIA FHFA conservatorship records',
          description: 'File FOIA requests for FHFA internal analyses of housing finance reform options and communications with industry lobbyists opposing reform.',
          requirements: ['FOIA request preparation'],
          filingTarget: 'FHFA FOIA Office',
          estimatedTime: '2-4 weeks preparation; months for response'
        },
        {
          step: 2,
          title: 'Track post-settlement executive wealth',
          description: 'Investigate the current financial status of Franklin Raines, Timothy Howard, and other executives who profited from the fraud, documenting retained wealth versus settler amounts.',
          requirements: ['Public records research', 'Property and financial disclosure analysis'],
          estimatedTime: '2-4 weeks'
        }
      ],
      relevantMechanisms: ['FOIA requests', 'Public financial disclosures', 'Lobbying disclosure reports'],
      urgency: 'standard' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Strengthen executive accountability mechanisms and advance structural housing finance reform.',
      steps: [
        {
          step: 1,
          title: 'Implement enhanced clawback rules',
          description: 'SEC should finalize Dodd-Frank clawback provisions requiring disgorgement of executive compensation when financial statements are restated, regardless of personal fault.',
          requirements: ['Administrative Procedure Act rulemaking'],
          filingTarget: 'SEC Federal Register rulemaking',
          legalBasis: ['15 U.S.C. 78j-4 (Dodd-Frank clawback)'],
          estimatedTime: '1-2 years'
        },
        {
          step: 2,
          title: 'Advance housing finance reform',
          description: 'FHFA should develop and publish comprehensive plan for ending conservatorship that eliminates implicit guarantee moral hazard.',
          requirements: ['Interagency coordination with Treasury', 'Congressional engagement'],
          filingTarget: 'FHFA policy publication',
          legalBasis: ['12 U.S.C. 4501-4642'],
          estimatedTime: '2-5 years for legislative process'
        }
      ],
      relevantMechanisms: ['Dodd-Frank clawback provisions', 'Housing finance reform authority'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Housing finance reform legislation eliminating the implicit government guarantee and ending GSE conservatorship',
    'Mandatory clawback provisions for all GSE executive compensation tied to financial performance',
    'Independent audit requirements preventing auditor capture by major GSE clients',
    'Prohibition on GSE lobbying of Congress and regulators',
    'Criminal prosecution framework applicable to future GSE accounting manipulation'
  ]
};

export default fannieMaeFraudAccountability;
