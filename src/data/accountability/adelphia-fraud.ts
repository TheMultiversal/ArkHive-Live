import type { AccountabilityData } from '@/types/accountability';

export const adelphiaFraudAccountability: AccountabilityData = {
  investigationSlug: 'adelphia-fraud',
  crimeSummary: 'The Rigas family siphoned $3.1 billion from publicly traded Adelphia Communications through off-balance-sheet co-borrowing arrangements, using corporate credit to fund a personal golf course, luxury condominiums, timberlands, the Buffalo Sabres NHL team, and other personal assets. Deloitte & Touche issued clean audit opinions on fraudulent financial statements while the SEC failed to detect the fraud through routine filing review. The sixth-largest bankruptcy in U.S. history wiped out shareholders and devastated the Coudersport, Pennsylvania community.',
  totalHarm: '$3.1 billion in co-borrowing fraud; $6+ billion in shareholder losses; $21.5 billion bankruptcy; thousands of jobs lost in rural Pennsylvania',
  victimsAffected: 'Adelphia shareholders wiped out, employees who lost jobs and 401(k) retirement savings invested in company stock, Coudersport community dependent on Adelphia as largest employer, creditors who lost billions',
  primaryTargets: [
    {
      name: 'Rigas Family (John, Timothy, Michael, James)',
      role: 'Orchestrated and executed $3.1 billion co-borrowing fraud using Adelphia credit facilities for personal enrichment while concealing related-party debt from shareholders',
      currentStatus: 'John Rigas deceased 2023; Timothy Rigas released 2021 after 17 years; family retained significant assets despite $715M SEC disgorgement; full asset recovery never achieved',
      accountabilityPath: 'Additional civil recovery actions against remaining Rigas family assets, trusts, and hidden holdings not reached by SEC disgorgement',
      obstacles: ['John Rigas deceased', 'Complex family trust structures', 'Time elapsed since fraud', 'Settlement confidentiality']
    },
    {
      name: 'Deloitte & Touche',
      role: 'External auditor that issued unqualified opinions on Adelphia\'s 1999-2001 financial statements containing billions in undisclosed related-party co-borrowing debt',
      currentStatus: 'Settled claims with bankruptcy estate; no individual partners charged; continues as Big Four accounting firm with no lasting consequences',
      accountabilityPath: 'PCAOB enforcement for audit quality failures, SEC enforcement against individual partners who approved fraudulent audits, state board of accountancy actions',
      obstacles: ['Settlement released most claims', 'Statute of limitations expired', 'PCAOB inspection process lacks transparency', 'Accounting industry political influence']
    },
    {
      name: 'Lending Banks (Wachovia, Bank of America, JPMorgan Chase)',
      role: 'Extended billions in co-borrowing credit facilities to Rigas family entities without questioning related-party nature or whether shareholders were informed',
      currentStatus: 'Settled with bankruptcy estate for hundreds of millions; no individual bankers charged; structural enablement of co-borrowing never addressed',
      accountabilityPath: 'Regulatory guidance requiring banks to assess governance implications of related-party lending; enhanced due diligence for controlled company credit facilities',
      obstacles: ['Banks settled and released from claims', 'No regulatory requirement for governance assessment in lending', 'Banking industry lobbying']
    }
  ],
  legalMechanisms: [
    {
      name: 'Securities Fraud Prosecution',
      statute: '15 U.S.C. 78j(b) / Rule 10b-5',
      description: 'Federal securities fraud statute used to convict John and Timothy Rigas for material misstatements in Adelphia\'s financial filings concealing $3.1 billion in related-party debt',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['SEC', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Successfully used in Adelphia prosecution; SEC also obtained civil disgorgement of $715 million'
    },
    {
      name: 'Sarbanes-Oxley Act Enforcement',
      statute: '15 U.S.C. 7241',
      description: 'CEO/CFO certification requirements enacted directly in response to Adelphia and similar frauds; creates criminal liability for false certifications of financial statements',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years for willful violations',
      reachesHeirs: false,
      authorizedActors: ['SEC', 'DOJ', 'PCAOB'],
      applicability: 'directly_applicable' as const,
      notes: 'Enacted after Adelphia fraud; would apply to future similar schemes but has not prevented subsequent corporate frauds'
    },
    {
      name: 'Bank Fraud Prosecution',
      statute: '18 U.S.C. 1344',
      description: 'Bank fraud charges used against John and Timothy Rigas for false representations to lenders regarding the nature and purpose of co-borrowing arrangements',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI'],
      applicability: 'directly_applicable' as const,
      notes: 'Key charge in Rigas prosecution; co-borrowing arrangements constituted fraud on lending banks as well as shareholders'
    },
    {
      name: 'PCAOB Audit Quality Enforcement',
      statute: '15 U.S.C. 7215',
      description: 'PCAOB authority to inspect and discipline audit firms for quality failures; applicable to Deloitte\'s failure to detect or report Adelphia\'s co-borrowing fraud',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['PCAOB', 'SEC'],
      applicability: 'directly_applicable' as const,
      notes: 'PCAOB created by Sarbanes-Oxley in response to Adelphia and similar audit failures; inspection reports now identify audit deficiencies at major firms'
    }
  ],
  wealthTrace: [
    {
      name: 'Rigas Family Retained Assets',
      relationship: 'Assets remaining after $715 million SEC disgorgement from $3.1 billion theft',
      transferMethod: 'Complex network of family trusts, private entities, and real estate holdings shielded significant assets from recovery; Coudersport estate and various properties retained',
      estimatedValue: 'Tens of millions in remaining assets',
      legalEntities: ['Rigas family trusts', 'Coudersport real estate', 'Highland Holdings remnants'],
      recoveryMechanisms: ['Fraudulent transfer claims', 'Trust piercing actions', 'Additional civil litigation']
    },
    {
      name: 'Time Warner Cable / Comcast (Adelphia Cable Systems)',
      relationship: 'Purchasers of Adelphia infrastructure in bankruptcy',
      transferMethod: 'Adelphia cable systems sold for $17.6 billion in 2006; proceeds distributed to creditors; buyers absorbed 5.6 million subscriber base',
      estimatedValue: '$17.6 billion sale price',
      legalEntities: ['Time Warner Cable (now Charter)', 'Comcast Corporation'],
      recoveryMechanisms: ['Bankruptcy distribution completed', 'No further recovery available from buyers']
    },
    {
      name: 'Shareholder Losses (Unrecovered)',
      relationship: 'Public shareholders who lost investment when stock went to zero',
      transferMethod: 'Stock collapsed from $20+ to worthless after fraud disclosure; employee 401(k) plans heavily invested in company stock also wiped out',
      estimatedValue: '$6+ billion in total shareholder losses',
      legalEntities: ['Public shareholders', 'Employee retirement plan participants'],
      recoveryMechanisms: ['Minimal bankruptcy distribution received', 'Class action settlements (fraction of losses)']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'SEC Division of Enforcement',
      title: 'Securities and Exchange Commission Enforcement Division',
      jurisdiction: 'Federal',
      powers: ['Investigate and prosecute securities fraud', 'Obtain disgorgement and civil penalties', 'Bar individuals from serving as officers/directors', 'Seek asset freezes'],
      contactMethod: 'SEC complaint portal; Congressional oversight of SEC'
    },
    {
      name: 'PCAOB',
      title: 'Public Company Accounting Oversight Board',
      jurisdiction: 'Federal',
      powers: ['Inspect registered audit firms', 'Discipline auditors for quality failures', 'Issue auditing standards', 'Investigate audit failures'],
      contactMethod: 'PCAOB tip line and public comment process'
    },
    {
      name: 'Senate Banking Committee',
      title: 'Senate Committee on Banking, Housing, and Urban Affairs',
      jurisdiction: 'Federal',
      powers: ['Oversight of SEC and PCAOB', 'Legislate corporate governance requirements', 'Restrict dual-class share structures', 'Strengthen auditor independence requirements'],
      contactMethod: 'Congressional office; committee hearings'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Advocate for corporate governance reforms preventing controlling shareholders from looting public companies',
      steps: [
        { step: 1, title: 'Understand dual-class share risks', description: 'Research how dual-class share structures like Adelphia\'s enable controlling shareholders to operate public companies as personal vehicles with minimal accountability to public shareholders', estimatedTime: '2-3 hours' },
        { step: 2, title: 'Support governance reform advocacy', description: 'Contact SEC commissioners and congressional representatives demanding restrictions on dual-class share structures and enhanced related-party transaction disclosure requirements', legalBasis: ['First Amendment petition rights'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Demand audit quality accountability', description: 'Submit public comments when PCAOB proposes audit quality standards, demanding that audit firms face meaningful consequences for failing to detect fraud in related-party transactions', legalBasis: ['Administrative Procedure Act public comment rights'], estimatedTime: '2-4 hours per comment period' }
      ],
      relevantMechanisms: ['SEC rulemaking authority', 'PCAOB standard-setting', 'Congressional legislation'],
      urgency: 'standard' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate whether Adelphia-style governance weaknesses persist at current dual-class companies',
      steps: [
        { step: 1, title: 'Survey current dual-class companies', description: 'Identify publicly traded companies with dual-class share structures and assess the extent of related-party transactions, family control, and audit committee independence', estimatedTime: '2-4 weeks' },
        { step: 2, title: 'FOIA SEC examination records', description: 'Request SEC examination records and enforcement referrals related to dual-class companies and related-party transaction review through Freedom of Information Act', legalBasis: ['5 U.S.C. 552 - Freedom of Information Act'], estimatedTime: '3-12 months' },
        { step: 3, title: 'Interview Adelphia victims', description: 'Document the ongoing impact on Coudersport community, former employees who lost retirement savings, and shareholders who were never made whole', estimatedTime: '1-2 weeks' },
        { step: 4, title: 'Publish accountability assessment', description: 'Report on whether the Sarbanes-Oxley reforms actually prevent Adelphia-style fraud or whether structural governance weaknesses persist at current companies', estimatedTime: '2-4 weeks' }
      ],
      relevantMechanisms: ['FOIA', 'SEC EDGAR filings', 'PCAOB inspection reports'],
      urgency: 'standard' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Strengthen corporate governance protections to prevent controlling shareholder self-dealing',
      steps: [
        { step: 1, title: 'Restrict dual-class share structures', description: 'SEC should propose rules limiting the duration or scope of dual-class share structures for newly public companies, with sunset provisions requiring periodic shareholder reapproval', legalBasis: ['15 U.S.C. 78j(b) - SEC rulemaking authority'], estimatedTime: '12-18 months for rulemaking' },
        { step: 2, title: 'Enhanced related-party transaction requirements', description: 'Require independent committee approval and enhanced disclosure for all related-party transactions above materiality thresholds at companies with controlling shareholders', estimatedTime: '6-12 months' },
        { step: 3, title: 'Strengthen PCAOB enforcement', description: 'Increase PCAOB enforcement budget and authority to impose meaningful penalties on audit firms that fail to detect related-party fraud, including firm-level sanctions', estimatedTime: '1-2 years' },
        { step: 4, title: 'Bank lending governance review', description: 'Issue inter-agency guidance requiring banks to assess corporate governance implications before extending credit facilities that can be co-borrowed by controlling shareholder entities', legalBasis: ['12 U.S.C. 1818 - Bank examination authority'], estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['SEC rulemaking', 'PCAOB enforcement', 'Bank examination authority', 'Corporate Transparency Act'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'SEC proposes restrictions on dual-class share structures with sunset provisions',
    'Enhanced related-party transaction disclosure and approval requirements for controlled companies',
    'PCAOB imposes meaningful sanctions on audit firms that fail to detect related-party fraud',
    'Inter-agency guidance issued requiring banks to assess governance in lending to controlled companies',
    'Public awareness increases regarding risks of investing in dual-class share companies with family control',
    'Full accounting of Rigas family retained assets published and remaining recoverable assets pursued'
  ]
};
