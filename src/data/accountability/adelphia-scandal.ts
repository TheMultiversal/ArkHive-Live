import type { AccountabilityData } from '@/types/accountability';

export const adelphiaScandalAccountability: AccountabilityData = {
  investigationSlug: 'adelphia-scandal',
  crimeSummary: 'The Rigas family systematically looted Adelphia Communications of $3.1 billion through concealed off-balance-sheet debt, personal use of company funds, and undisclosed related-party transactions. External auditor Deloitte & Touche failed to detect the fraud. The scandal destroyed 5,700 jobs and billions in shareholder value, contributing to the passage of Sarbanes-Oxley.',
  totalHarm: '$3.1 billion looted from company; $2.3 billion in hidden liabilities; $21.5 billion in bankruptcy debt; 5,700 jobs destroyed; billions in shareholder value wiped out',
  victimsAffected: '5,700 employees who lost jobs; thousands of shareholders who lost life savings; retirees with reduced pensions; communities in northern Pennsylvania who lost largest employer',
  primaryTargets: [
    {
      name: 'John Rigas',
      role: 'Founder and CEO who treated publicly traded Adelphia as personal treasury; convicted of conspiracy and securities fraud',
      currentStatus: 'Released from prison in 2016 on compassionate grounds after serving approximately 8 years of 15-year sentence',
      accountabilityPath: 'Sentence was served; SEC forfeiture of $1.5B in family assets; further recovery limited',
      obstacles: ['Already released from prison', 'Most recoverable assets already forfeited', 'Statute of limitations expired on additional claims']
    },
    {
      name: 'Timothy Rigas',
      role: 'CFO who engineered concealment of $2.3 billion in off-balance-sheet debt and arranged $252 million in undisclosed personal loans',
      currentStatus: 'Convicted and sentenced to 20 years federal prison',
      accountabilityPath: 'Serving sentence; assets forfeited in SEC settlement',
      obstacles: ['Already convicted and sentenced']
    },
    {
      name: 'Deloitte & Touche LLP',
      role: 'External auditor that issued clean audit opinions for years despite massive related-party fraud and $2.3B in undisclosed liabilities',
      currentStatus: 'Settled class action for $167.5M; continues operating as major audit firm without structural reform',
      accountabilityPath: 'PCAOB inspection enforcement; SEC sanctions for audit failures; legislative reform of auditor liability',
      obstacles: ['Settlement included no admission of wrongdoing', 'No individual partners charged', 'Big Four accounting firms considered systemically important', 'Audit industry lobbying against stricter liability']
    }
  ],
  legalMechanisms: [
    {
      name: 'Securities Fraud (Rule 10b-5)',
      statute: '15 U.S.C. 78j(b)',
      description: 'Primary securities fraud statute under which Rigas family was prosecuted for fraudulent financial statements and concealed liabilities',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for SEC enforcement; 2 years for private actions (5 years from violation)',
      reachesHeirs: false,
      authorizedActors: ['SEC', 'DOJ', 'Private plaintiffs'],
      applicability: 'directly_applicable' as const,
      notes: 'Successfully applied; John and Timothy Rigas convicted'
    },
    {
      name: 'Sarbanes-Oxley Act',
      statute: 'Pub.L. 107-204',
      description: 'Corporate governance reform enacted in direct response to Adelphia and contemporaneous frauds; mandates independent audit committees, CEO/CFO certifications, and internal controls',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['SEC', 'PCAOB', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Enacted as direct legislative response to Adelphia fraud; ongoing enforcement through SEC and PCAOB'
    },
    {
      name: 'PCAOB Audit Oversight',
      statute: 'Pub.L. 107-204 Title I',
      description: 'Public Company Accounting Oversight Board established by Sarbanes-Oxley to inspect and regulate audit firms; provides mechanism for holding auditors accountable',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['PCAOB', 'SEC oversight'],
      applicability: 'directly_applicable' as const,
      notes: 'Created in direct response to audit failures like Deloitte\'s at Adelphia'
    }
  ],
  wealthTrace: [
    {
      name: 'Comcast and Warner Bros. Discovery (formerly Time Warner)',
      relationship: 'Jointly acquired Adelphia cable assets at bankruptcy prices, consolidating cable industry',
      transferMethod: 'Corporate acquisition of bankrupt company assets for $17.6 billion',
      estimatedValue: '$17.6 billion in cable infrastructure now integrated into industry duopoly',
      legalEntities: ['Comcast Corporation', 'Warner Bros. Discovery'],
      recoveryMechanisms: ['FCC ownership review', 'Antitrust enforcement']
    },
    {
      name: 'Rigas family pre-fraud wealth and trust transfers',
      relationship: 'Portions of family wealth transferred to trusts before SEC settlement finalization',
      transferMethod: 'Asset transfers to family trusts and related entities conducted before and during enforcement',
      estimatedValue: 'Undetermined; SEC recovered $1.5B but total looted was $3.1B',
      legalEntities: ['Rigas family trusts', 'Highland Holdings'],
      recoveryMechanisms: ['Fraudulent transfer actions', 'Trust piercing litigation']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'PCAOB Chair',
      title: 'Chair of the Public Company Accounting Oversight Board',
      jurisdiction: 'Federal oversight of audit firms conducting public company audits',
      powers: ['Inspect audit firm practices', 'Impose sanctions for audit failures', 'Establish auditing standards for related-party transaction review'],
      contactMethod: 'pcaobus.org'
    },
    {
      name: 'SEC Division of Enforcement',
      title: 'Director of SEC Enforcement',
      jurisdiction: 'Federal securities fraud enforcement and corporate governance regulation',
      powers: ['Investigate securities fraud', 'Enforce Sarbanes-Oxley compliance', 'Pursue disgorgement and penalties against fraudulent executives'],
      contactMethod: 'sec.gov/tcr'
    }
  ],
  actionPaths: [
    {
      role: 'regulator' as const,
      overview: 'Regulators can strengthen enforcement of corporate governance requirements enacted in response to the Adelphia scandal.',
      steps: [
        { step: 1, title: 'Strengthen PCAOB inspection of related-party transactions', description: 'Enhance audit inspection focus on related-party transaction verification, the specific area where Deloitte failed at Adelphia', requirements: ['PCAOB rulemaking authority'], legalBasis: ['Pub.L. 107-204 Title I'], estimatedTime: '12 months rulemaking' },
        { step: 2, title: 'Enforce dual-class stock governance requirements', description: 'Require enhanced governance protections for companies using dual-class stock structures that concentrate voting power like Adelphia\'s', requirements: ['SEC rulemaking or stock exchange listing reforms'], legalBasis: ['15 U.S.C. 78j(b)', 'Pub.L. 107-204'], estimatedTime: '18 months policy development' }
      ],
      relevantMechanisms: ['Sarbanes-Oxley Act', 'PCAOB inspection authority', 'SEC corporate governance rules'],
      urgency: 'standard' as const
    },
    {
      role: 'citizen' as const,
      overview: 'Investors and citizens can advocate for stronger corporate governance protections and audit accountability.',
      steps: [
        { step: 1, title: 'Support shareholder governance proposals', description: 'Vote for shareholder proposals requiring independent board majorities, elimination of dual-class stock structures, and enhanced audit committee oversight', requirements: ['Shareholder proxy access'], estimatedTime: 'Annual proxy season' },
        { step: 2, title: 'Advocate for auditor liability reform', description: 'Push congressional representatives to strengthen auditor liability for failure to detect material fraud', requirements: ['Congressional advocacy'], legalBasis: ['Pub.L. 107-204'], estimatedTime: 'Ongoing advocacy' }
      ],
      relevantMechanisms: ['Shareholder proxy voting', 'Congressional legislative process'],
      urgency: 'standard' as const
    }
  ],
  successCriteria: [
    'Enhanced PCAOB inspection standards for related-party transaction auditing',
    'Mandatory sunset provisions for dual-class stock structures at public companies',
    'Strengthened auditor liability making Big Four firms genuinely accountable for audit failures',
    'Consistent enforcement of Sarbanes-Oxley Section 302 CEO/CFO certification requirements'
  ]
};
