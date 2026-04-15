import type { AccountabilityData } from '@/types/accountability';

export const payrollTaxFraudAccountability: AccountabilityData = {
  investigationSlug: 'payroll-tax-fraud-industry-analysis',
  crimeSummary: 'Systematic payroll tax fraud costing $20-40 billion annually through worker misclassification as independent contractors, off-the-books labor payments, and shell company payroll pyramiding schemes, concentrated in construction, trucking, janitorial, home care, and gig economy industries, while IRS enforcement has been gutted to a 0.06% audit rate and penalties make fraud economically rational.',
  totalHarm: '$20-40 billion annually in lost federal and state tax revenue; $12-15 billion in federal Treasury losses from misclassification alone; $15 billion in annual wage theft from misclassified workers; $3,710 per worker annually in lost benefits; billions in cumulative Social Security and Medicare trust fund depletion; honest businesses driven out of competition',
  victimsAffected: 'Millions of misclassified workers across construction, trucking, home care, janitorial, gig economy, and agriculture sectors; 10-30% of all American workers estimated to be misclassified in some form; hundreds of millions of Social Security beneficiaries affected by trust fund depletion; legitimate businesses unable to compete with cheating competitors; taxpayers subsidizing fraud through higher taxes and reduced services',
  primaryTargets: [
    {
      name: 'Construction Industry Employers Engaging in Systematic Misclassification',
      role: 'Misclassify 25-40% of workers as independent contractors in multiple states, gaining 20-30% cost advantage over law-abiding competitors and driving honest businesses out of the market',
      currentStatus: 'Operating with virtual impunity due to 0.06% IRS audit rate; state enforcement task forces have identified billions in unreported wages but cover only a fraction of violations',
      accountabilityPath: 'Expanded state joint enforcement task forces; IRS employment tax audit capacity restoration; mandatory worker classification reporting; debarment from government contracts for violators',
      obstacles: ['IRS enforcement budget cuts', 'Political opposition to business regulation', 'Industry lobbying against classification reform', 'Fragmented state enforcement']
    },
    {
      name: 'Gig Economy Platforms (Uber, Lyft, DoorDash, Instacart)',
      role: 'Built multi-billion-dollar businesses on classification of millions of workers as independent contractors while controlling fundamental aspects of their work through algorithms and pricing',
      currentStatus: 'Spent $200M+ on Proposition 22 in California to override worker classification law; facing ongoing litigation and regulatory challenges in multiple states; estimated $413M annually in avoided unemployment insurance in California alone',
      accountabilityPath: 'Federal FLSA independent contractor rule enforcement; state reclassification litigation; reversal of Proposition 22 through courts or new legislation; DOL enforcement actions',
      obstacles: ['Massive corporate lobbying budgets ($200M+ on single ballot initiative)', 'Favorable court rulings on Proposition 22', 'Consumer dependency on platform services', 'Federal classification rules subject to administration changes']
    },
    {
      name: 'IRS and Congressional Leadership',
      role: 'Systematically defunded IRS enforcement capacity, reducing Criminal Investigation workforce from 3,000+ agents to fewer than 2,000, while failing to close misclassification loopholes or increase penalties',
      currentStatus: 'IRS conducts only 6,000 employment tax exams annually across 10 million employers; Voluntary Classification Settlement Program rewards past violators; Congress rescinded federal contractor labor disclosure requirements',
      accountabilityPath: 'Congressional restoration of IRS enforcement funding; GAO investigation of enforcement collapse; mandatory reporting of worker classification; increased criminal penalties for willful fraud',
      obstacles: ['Anti-IRS political constituency', 'Budget sequestration and competing priorities', 'Lobbying by industries that benefit from weak enforcement', 'Revolving door between Congress and industry']
    }
  ],
  legalMechanisms: [
    {
      name: 'Trust Fund Recovery Penalty',
      statute: '26 U.S.C. 6672',
      description: 'Allows IRS to hold responsible individuals personally liable for willful failure to collect, account for, and remit employment taxes withheld from workers',
      hasStatuteOfLimitations: true,
      limitationPeriod: '3 years from filing (10 years for collection)',
      reachesHeirs: false,
      authorizedActors: ['IRS', 'DOJ Tax Division'],
      applicability: 'directly_applicable',
      notes: 'Limited to 100% of unpaid amount with no additional punitive component; often settled for less than full amount'
    },
    {
      name: 'Criminal Tax Evasion - Employment Taxes',
      statute: '26 U.S.C. 7202',
      description: 'Federal criminal statute making willful failure to collect or pay over employment taxes a felony punishable by up to five years imprisonment and fines',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years',
      reachesHeirs: false,
      authorizedActors: ['IRS Criminal Investigation', 'DOJ Tax Division', 'U.S. Attorneys'],
      applicability: 'directly_applicable',
      notes: 'Rarely prosecuted due to IRS CI workforce reductions; reserved for most egregious cases'
    },
    {
      name: 'Fair Labor Standards Act Classification',
      statute: '29 U.S.C. 201 et seq.',
      description: 'Federal law establishing minimum wage, overtime, and worker classification standards; DOL has authority to investigate and enforce proper employee classification',
      hasStatuteOfLimitations: true,
      limitationPeriod: '2 years (3 years for willful violations)',
      reachesHeirs: false,
      authorizedActors: ['DOL Wage and Hour Division', 'State labor departments'],
      applicability: 'directly_applicable'
    },
    {
      name: 'State ABC Test Laws',
      statute: 'E.g., Cal. Lab. Code 2750.3 (AB5)',
      description: 'State laws establishing ABC test presumption that workers are employees unless the hiring entity proves all three prongs: worker is free from control, performs work outside usual business, and has independent established trade',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state',
      reachesHeirs: false,
      authorizedActors: ['State labor commissioners', 'State attorneys general', 'Workers through private right of action'],
      applicability: 'directly_applicable',
      notes: 'California AB5 partially overridden by Proposition 22 for app-based drivers; similar laws adopted in New Jersey, Massachusetts, and other states'
    }
  ],
  wealthTrace: [
    {
      name: 'Fraudulent Employer Accumulated Profits',
      relationship: 'Direct beneficiaries of payroll tax evasion through 20-40% cost savings',
      transferMethod: 'Savings from non-payment of FICA, FUTA, workers\' compensation, and benefits used as profit or to underbid legitimate competitors',
      estimatedValue: '$20-40 billion annually across all industries',
      legalEntities: ['Construction contractors', 'Staffing companies', 'Janitorial services', 'Agricultural operations'],
      recoveryMechanisms: ['IRS Trust Fund Recovery Penalty', 'State employment tax audits', 'Criminal prosecution and asset forfeiture']
    },
    {
      name: 'Gig Platform Market Capitalization',
      relationship: 'Companies valued at billions based on labor model dependent on worker misclassification',
      transferMethod: 'Classification of millions of workers as independent contractors eliminates unemployment insurance, workers\' compensation, benefits, and payroll tax obligations',
      estimatedValue: 'Hundreds of billions in combined market capitalization partially attributable to avoided labor costs',
      legalEntities: ['Uber Technologies', 'Lyft Inc.', 'DoorDash Inc.', 'Instacart'],
      recoveryMechanisms: ['Federal and state reclassification enforcement', 'Back-tax assessments', 'Private litigation by misclassified workers']
    },
    {
      name: 'Depleted Social Insurance Trust Funds',
      relationship: 'Social Security and Medicare losing billions in unpaid employer and employee contributions',
      transferMethod: 'Systematic non-remittance of FICA contributions diverts funds from trust funds to employer profits',
      estimatedValue: 'Tens of billions in cumulative losses accelerating trust fund insolvency',
      legalEntities: ['Social Security Trust Fund', 'Medicare Hospital Insurance Trust Fund'],
      recoveryMechanisms: ['Expanded IRS enforcement', 'Mandatory electronic payroll reporting', 'Congressional funding restoration']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'IRS Commissioner',
      title: 'Commissioner, Internal Revenue Service',
      jurisdiction: 'Federal tax compliance enforcement including employment taxes',
      powers: ['Conduct employment tax examinations', 'Assess Trust Fund Recovery Penalties', 'Refer cases for criminal prosecution', 'Issue Voluntary Classification Settlement agreements'],
      contactMethod: 'IRS Employment Tax Compliance hotline'
    },
    {
      name: 'Secretary of Labor',
      title: 'U.S. Secretary of Labor',
      jurisdiction: 'Federal labor law enforcement including worker classification under FLSA',
      powers: ['Issue independent contractor classification rules', 'Investigate misclassification complaints', 'Assess back wages and penalties', 'Coordinate with state labor agencies'],
      contactMethod: 'DOL Wage and Hour Division complaint line: 1-866-487-9243'
    },
    {
      name: 'State Attorneys General',
      title: 'State Attorneys General (all 50 states)',
      jurisdiction: 'State-level enforcement of employment tax, workers\' compensation, and labor classification laws',
      powers: ['Investigate employer misclassification', 'File civil and criminal charges', 'Coordinate joint enforcement task forces', 'Recover unpaid taxes and penalties'],
      contactMethod: 'State attorney general consumer protection division'
    },
    {
      name: 'Senate Finance Committee Chair',
      title: 'Chair, Senate Committee on Finance',
      jurisdiction: 'Congressional authority over federal tax policy and IRS oversight',
      powers: ['Authorize IRS enforcement funding', 'Close misclassification loopholes', 'Investigate employment tax enforcement gaps', 'Reform penalty structures to deter fraud'],
      contactMethod: 'Senate Finance Committee website'
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Workers can report misclassification, file claims for lost wages and benefits, and advocate for enforcement funding and classification reform.',
      steps: [
        { step: 1, title: 'Report Misclassification to IRS', description: 'File IRS Form SS-8 (Determination of Worker Status) if you believe you have been misclassified as an independent contractor. Also file Form 8919 to claim proper Social Security credits on misclassified wages.', filingTarget: 'IRS', estimatedTime: '2-3 hours' },
        { step: 2, title: 'File State Labor Complaint', description: 'Contact your state labor department to file a misclassification complaint. Many states have joint enforcement task forces that investigate employer classification practices.', filingTarget: 'State labor department', estimatedTime: '1-2 hours' },
        { step: 3, title: 'Advocate for IRS Enforcement Funding', description: 'Contact congressional representatives to support full IRS enforcement funding, particularly for employment tax compliance. The current 0.06% audit rate makes fraud a rational economic decision.', estimatedTime: 'Ongoing advocacy' }
      ],
      relevantMechanisms: ['Trust Fund Recovery Penalty', 'Fair Labor Standards Act Classification'],
      urgency: 'high'
    },
    {
      role: 'journalist',
      overview: 'Journalists can investigate the scope of payroll fraud in specific industries, document worker exploitation, and expose the enforcement collapse.',
      steps: [
        { step: 1, title: 'FOIA IRS Enforcement Capacity Data', description: 'File FOIA requests for detailed data on IRS employment tax examination rates, staffing levels, and outcomes by industry and state. Document the decline in enforcement capacity relative to the growth in fraud.', filingTarget: 'IRS FOIA office', estimatedTime: '3-12 months' },
        { step: 2, title: 'Investigate Industry-Specific Fraud Networks', description: 'Document construction industry payroll fraud in specific cities, tracing how shell companies cycle through identities, how legitimate contractors are undercut, and how workers are exploited.', estimatedTime: '6-12 months' },
        { step: 3, title: 'Track Gig Economy Classification Lobbying', description: 'Map the lobbying expenditures, political contributions, and ballot initiative spending by gig economy companies to maintain worker misclassification, and quantify the cost to workers and public revenue.', estimatedTime: '3-6 months' }
      ],
      relevantMechanisms: ['Criminal Tax Evasion - Employment Taxes', 'State ABC Test Laws'],
      urgency: 'high'
    },
    {
      role: 'lawyer',
      overview: 'Attorneys can pursue reclassification claims, class action litigation against platforms, and represent workers denied benefits due to misclassification.',
      steps: [
        { step: 1, title: 'File Class Action Misclassification Claims', description: 'Represent classes of misclassified workers in litigation seeking back wages, overtime, unemployment insurance contributions, and workers\' compensation coverage under FLSA and state law.', legalBasis: ['29 U.S.C. 216(b) FLSA collective action', 'State labor code private right of action'], estimatedTime: '1-3 years' },
        { step: 2, title: 'Challenge Proposition 22 and Similar Exemptions', description: 'Pursue constitutional and statutory challenges to ballot initiatives that exempt gig companies from worker classification requirements, building on Alameda County precedent.', legalBasis: ['State constitutional challenges', 'Preemption arguments under federal labor law'], estimatedTime: '2-4 years' },
        { step: 3, title: 'Pursue Qui Tam Actions for Government Revenue Recovery', description: 'File False Claims Act qui tam actions against government contractors who misclassify workers, defrauding the government of payroll tax revenue on taxpayer-funded projects.', legalBasis: ['31 U.S.C. 3730 False Claims Act qui tam provisions'], estimatedTime: '2-5 years' }
      ],
      relevantMechanisms: ['Fair Labor Standards Act Classification', 'State ABC Test Laws'],
      urgency: 'high'
    },
    {
      role: 'elected_official',
      overview: 'Elected officials can restore IRS enforcement capacity, close classification loopholes, and ensure penalties make fraud economically irrational.',
      steps: [
        { step: 1, title: 'Restore IRS Employment Tax Enforcement', description: 'Authorize and appropriate funding to increase IRS employment tax examinations from 6,000 to at least 60,000 annually, bringing the audit rate to a minimally deterrent level.', requirements: ['Finance or Appropriations committee membership'], estimatedTime: '1 appropriations cycle' },
        { step: 2, title: 'Close Misclassification Loopholes', description: 'Pass federal legislation adopting the ABC test for worker classification, eliminating the ambiguous common law test that employers exploit. Include explicit provisions covering gig economy platforms.', requirements: ['HELP or Finance committee jurisdiction'], estimatedTime: '1-2 congressional sessions' },
        { step: 3, title: 'Increase Fraud Penalties', description: 'Reform penalty structure to make payroll fraud economically irrational by imposing treble damages for willful violations, debarment from government contracts, and mandatory minimum sentences for repeat offenders.', requirements: ['Finance or Judiciary committee membership'], estimatedTime: '1 congressional session' }
      ],
      relevantMechanisms: ['Trust Fund Recovery Penalty', 'Criminal Tax Evasion - Employment Taxes'],
      urgency: 'high'
    },
    {
      role: 'law_enforcement',
      overview: 'Law enforcement can target the most egregious payroll fraud networks, particularly payroll pyramiding operations and employers who weaponize immigration enforcement against workers.',
      steps: [
        { step: 1, title: 'Target Payroll Pyramiding Networks', description: 'Dedicate IRS Criminal Investigation resources to identifying and dismantling shell company payroll pyramiding operations that cycle through dozens of entities to avoid tax collection.', legalBasis: ['26 U.S.C. 7202', '18 U.S.C. 371'], estimatedTime: 'Ongoing' },
        { step: 2, title: 'Prosecute Retaliatory Immigration Reporting', description: 'Investigate and prosecute employers who report workers to ICE in retaliation for filing wage theft or misclassification complaints, using witness tampering and obstruction statutes.', legalBasis: ['18 U.S.C. 1512 Witness tampering', '18 U.S.C. 1513 Retaliation against witnesses'], estimatedTime: 'Case-by-case' },
        { step: 3, title: 'Coordinate Federal-State Task Forces', description: 'Establish permanent multi-agency task forces combining IRS, DOL, state labor departments, and state tax agencies to share information and conduct coordinated enforcement operations.', estimatedTime: '6-12 months to establish' }
      ],
      relevantMechanisms: ['Criminal Tax Evasion - Employment Taxes', 'Trust Fund Recovery Penalty'],
      urgency: 'high'
    },
    {
      role: 'regulator',
      overview: 'Regulators can mandate electronic payroll reporting, enforce classification standards, and impose costs on non-compliant employers.',
      steps: [
        { step: 1, title: 'Mandate Real-Time Payroll Reporting', description: 'Require all employers to report payroll data electronically in real time, enabling automated cross-matching of worker classification, wage payments, and tax remittances across federal and state systems.', filingTarget: 'IRS, SSA, state tax agencies', estimatedTime: '2-3 years for implementation' },
        { step: 2, title: 'Enforce Government Contractor Compliance', description: 'Implement rigorous worker classification audits for all federal and state government contractors, with automatic debarment for verified misclassification violations.', estimatedTime: '1-2 years' },
        { step: 3, title: 'Publish Industry Compliance Data', description: 'Compile and publish annual state-by-state, industry-by-industry data on misclassification rates, enforcement actions, and recovered taxes to enable public accountability and academic research.', estimatedTime: '1 year for initial compilation' }
      ],
      relevantMechanisms: ['Fair Labor Standards Act Classification', 'State ABC Test Laws'],
      urgency: 'high'
    }
  ],
  successCriteria: [
    'IRS employment tax audit rate increased from 0.06% to at least 1%, creating meaningful deterrence',
    'Federal ABC test legislation adopted, closing misclassification loopholes exploited by construction and gig economy industries',
    'Annual payroll tax revenue losses reduced from $20-40 billion to under $5 billion through enforcement and compliance',
    'All gig economy workers properly classified with access to unemployment insurance, workers\' compensation, and Social Security contributions',
    'Penalties for willful payroll fraud increased to treble damages with mandatory debarment from government contracts',
    'State joint enforcement task forces established in all 50 states with adequate funding and federal data-sharing agreements',
    'Real-time electronic payroll reporting system operational for automated compliance monitoring'
  ]
};
