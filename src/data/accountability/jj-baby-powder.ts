import type { AccountabilityData } from '@/types/accountability';

export const jjBabyPowderAccountability: AccountabilityData = {
  investigationSlug: 'jj-baby-powder',
  crimeSummary: 'Johnson & Johnson concealed evidence for over 40 years that its talc-based baby powder contained asbestos fibers linked to ovarian cancer and mesothelioma. Internal documents dating to 1957 showed company scientists identified asbestos-related minerals. By 1969, J&J was testing for asbestos but selecting methodologies that minimized positive results. Over 100,000 lawsuits filed. Landmark $4.69B jury verdict (2018). J&J attempted the Texas Two-Step bankruptcy maneuver, creating a shell subsidiary (LTL Management) to absorb liabilities while the $400B parent company remained untouched. The Third Circuit rejected this twice. The FDA found asbestos in J&J powder in 2019 but lacked authority to compel a recall. After discontinuing U.S. sales in 2020, J&J continued selling talc Baby Powder in developing countries until 2023.',
  totalHarm: 'Over 100,000 lawsuits for ovarian cancer and mesothelioma; unknown number of additional cancer cases never litigated; decades of consumer exposure to asbestos-contaminated product marketed as pure and safe; mine workers with elevated cancer rates from occupational exposure; $10B+ in litigation reserves; continued international sales exposed developing-world consumers after U.S. discontinuation',
  victimsAffected: 'Tens of thousands of women who developed ovarian cancer after regular talc use in genital area; mesothelioma patients with lifetime Baby Powder exposure; talc mine workers with occupational asbestos exposure; consumers in India, Asia, and Africa who continued using product after U.S. withdrawal; families of deceased victims denied timely compensation',
  primaryTargets: [
    {
      name: 'Johnson & Johnson',
      role: 'Manufactured and sold asbestos-contaminated baby powder for 60+ years while concealing evidence of contamination; attempted Texas Two-Step bankruptcy to cap victim payouts',
      currentStatus: 'Active. $400B+ market capitalization. Proposed $8.9B settlement rejected by claimants. Over 100,000 pending claims. Third Circuit rejected bankruptcy maneuver twice. Individual cases proceeding in state and federal courts.',
      accountabilityPath: 'Continued tort litigation; potential DOJ criminal investigation for fraudulent concealment; state attorney general enforcement; SEC investigation of disclosure failures; Congressional legislation preventing solvent-company bankruptcy abuse',
      obstacles: ['$400B market cap provides essentially unlimited legal resources', '50+ law firms retained simultaneously outspending plaintiffs', 'Texas Two-Step and settlement strategies designed to avoid jury trials', 'No individual executives charged despite decades of concealment']
    },
    {
      name: 'Alex Gorsky (CEO 2012-2022)',
      role: 'Led J&J during peak talc litigation; authorized continued sales and Texas Two-Step bankruptcy strategy; received $29M final year compensation',
      currentStatus: 'Retired with full honors. Named in individual talc lawsuits but faces no criminal charges.',
      accountabilityPath: 'Criminal referral for fraudulent concealment; SEC inquiry into misleading safety statements to investors; shareholder derivative litigation for breach of fiduciary duty; compensation clawback',
      obstacles: ['Layers of plausible deniability through corporate hierarchy', 'Retirement severs active duty to shareholders', 'Statute of limitations concerns on older conduct', 'No precedent for criminal prosecution of CEO in product liability concealment case']
    },
    {
      name: 'Imerys S.A.',
      role: 'Primary talc supplier that co-developed testing protocols minimizing asbestos detection and operated mines with known contamination',
      currentStatus: 'Filed Chapter 11 bankruptcy in 2019. Emerging from bankruptcy with talc liabilities addressed through settlement trust.',
      accountabilityPath: 'Bankruptcy trust claims; occupational health litigation by mine workers; international product liability claims',
      obstacles: ['Bankruptcy proceedings cap available recovery', 'French parent company complicates cross-border enforcement', 'Mine workers may be excluded from consumer settlement framework']
    },
    {
      name: 'FDA (Institutional)',
      role: 'Failed to regulate cosmetics for 50+ years; lacked authority to compel recalls or require pre-market safety testing until MoCRA (2022)',
      currentStatus: 'MoCRA provides limited new authority but still no pre-market approval for cosmetic ingredients. Implementation ongoing.',
      accountabilityPath: 'Congressional oversight of MoCRA implementation; expanded FDA cosmetic authority legislation; mandatory pre-market safety testing requirements',
      obstacles: ['Industry lobbying against expanded regulation', 'FDA resource constraints for cosmetic oversight', 'MoCRA still lacks pre-market testing requirement', 'Cosmetics industry frames regulation as unnecessary burden']
    }
  ],
  legalMechanisms: [
    {
      name: 'State Product Liability (Strict Liability)',
      statute: 'State product liability statutes; Restatement (Third) of Torts',
      description: 'Manufacturing defect, design defect, and failure to warn claims for selling consumer product contaminated with known carcinogen. No federal statute of limitations; governed by state law.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state (2-6 years from discovery, with discovery rule for latent diseases)',
      reachesHeirs: true,
      authorizedActors: ['Individual plaintiffs', 'Class action representatives', 'State attorneys general'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Bankruptcy Abuse Prevention',
      statute: '11 U.S.C. 101-1532 (Bankruptcy Code); Texas Business Organizations Code Ch. 10',
      description: 'Third Circuit\'s rejection of Texas Two-Step establishes precedent against solvent corporations using divisive mergers and subsidiary bankruptcy to cap mass tort liabilities',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Federal bankruptcy courts', 'U.S. Trustees', 'Congress (legislative reform)'],
      applicability: 'directly_applicable' as const,
      notes: 'Congressional legislation specifically banning Texas Two-Step for solvent companies is under consideration'
    },
    {
      name: 'Federal Cosmetics Regulation (MoCRA)',
      statute: 'Modernization of Cosmetics Regulation Act (2022); 21 U.S.C. 361',
      description: 'New FDA authority over cosmetics including mandatory adverse event reporting, facility registration, and recall authority; addresses 50-year regulatory gap that allowed J&J to sell contaminated product',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FDA Center for Food Safety and Applied Nutrition', 'Congress (expansion of authority)'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'State Consumer Protection Acts',
      statute: 'State UDAP/consumer protection statutes (all 50 states)',
      description: 'Unfair and deceptive trade practices claims for marketing asbestos-contaminated product as pure and safe; often provide treble damages and attorney fees',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state (3-6 years)',
      reachesHeirs: false,
      authorizedActors: ['State attorneys general', 'Individual consumers', 'Consumer advocacy organizations'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Federal Criminal Fraud Statutes',
      statute: '18 U.S.C. 1341/1343 (Mail/Wire Fraud); 18 U.S.C. 371 (Conspiracy)',
      description: 'Potentially applicable to decades of misleading safety claims about Baby Powder transmitted through commerce; never charged despite evidence of intentional concealment',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (10 years for financial institution fraud)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Criminal Division', 'FBI', 'U.S. Attorneys'],
      applicability: 'potentially_applicable' as const,
      notes: 'Statute of limitations is primary obstacle to criminal prosecution; ongoing concealment may extend limitations period'
    }
  ],
  wealthTrace: [
    {
      name: 'J&J Corporate Value',
      relationship: 'Parent company retained $400B+ market capitalization while attempting to cap talc liabilities',
      transferMethod: 'Texas Two-Step divisive merger designed to isolate shareholder value from tort victims',
      estimatedValue: '$400,000,000,000+ market capitalization',
      legalEntities: ['Johnson & Johnson', 'J&J shareholders', 'Institutional investors'],
      recoveryMechanisms: ['Direct tort litigation', 'State AG enforcement', 'Congressional bankruptcy reform']
    },
    {
      name: 'Baby Powder Revenue (60+ Years)',
      relationship: 'Cumulative revenue from selling contaminated product while concealing evidence',
      transferMethod: 'Consumer product sales through retail and international distribution',
      estimatedValue: 'Billions in cumulative revenue over 60+ years of sales',
      legalEntities: ['Johnson & Johnson Consumer Health Division', 'Kenvue (spun off 2023)'],
      recoveryMechanisms: ['Compensatory and punitive damages through tort litigation', 'Disgorgement through regulatory enforcement']
    },
    {
      name: 'Executive Compensation During Concealment',
      relationship: 'CEO and C-suite received full compensation while overseeing concealment and litigation defense',
      transferMethod: 'Salary, bonuses, stock options, retirement benefits',
      estimatedValue: 'Hundreds of millions in aggregate executive compensation',
      legalEntities: ['Alex Gorsky', 'Joaquin Duato', 'J&J Board of Directors'],
      recoveryMechanisms: ['Clawback provisions', 'Shareholder derivative litigation']
    },
    {
      name: 'Defense Legal Spending',
      relationship: '50+ law firms retained to delay and defend against accountability',
      transferMethod: 'Hourly billing and retainer agreements from operating revenue',
      estimatedValue: '$2,000,000,000+ cumulative defense costs',
      legalEntities: ['Jones Day', 'King & Spalding', 'Numerous additional defense firms'],
      recoveryMechanisms: ['No recovery mechanism; sunk legal costs']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'State Attorneys General (Multi-State)',
      title: 'Attorney General',
      jurisdiction: 'State consumer protection and product safety enforcement',
      powers: ['Consumer protection enforcement actions against J&J', 'Investigation of deceptive marketing claims', 'Coordination of multi-state enforcement', 'Support for federal bankruptcy reform legislation'],
      contactMethod: 'Individual state AG offices; National Association of Attorneys General: naag.org'
    },
    {
      name: 'FDA Center for Food Safety and Applied Nutrition',
      title: 'CFSAN Director',
      jurisdiction: 'Federal cosmetic product safety regulation under MoCRA',
      powers: ['Mandatory adverse event reporting enforcement', 'Cosmetic facility registration and inspection', 'Product recall authority (new under MoCRA)', 'Talc testing and safety monitoring'],
      contactMethod: 'FDA CFSAN: (240) 402-1600; fda.gov/cosmetics'
    },
    {
      name: 'DOJ Criminal Division',
      title: 'Assistant Attorney General for Criminal Division',
      jurisdiction: 'Federal criminal fraud prosecution',
      powers: ['Investigate long-running fraudulent concealment of product contamination', 'Prosecute mail/wire fraud for misleading safety claims', 'Investigate corporate officers for individual criminal liability'],
      contactMethod: 'DOJ Criminal Division: (202) 514-2601'
    },
    {
      name: 'Senate Judiciary Committee',
      title: 'Committee Chair',
      jurisdiction: 'Congressional oversight of bankruptcy system and corporate accountability',
      powers: ['Investigate Texas Two-Step bankruptcy abuse', 'Introduce legislation banning solvent-company divisive merger bankruptcy', 'Oversight of DOJ prosecution decisions', 'Expand FDA cosmetic authority'],
      contactMethod: 'Senate Judiciary: (202) 224-5225'
    },
    {
      name: 'Third Circuit Court of Appeals',
      title: 'Circuit Judges',
      jurisdiction: 'Federal appellate jurisdiction over bankruptcy cases in New Jersey',
      powers: ['Rejected J&J Texas Two-Step twice, establishing precedent', 'Can review future bankruptcy abuse attempts', 'Precedent influences other circuits considering similar maneuvers'],
      contactMethod: 'Via appellate filings (Third Circuit, 21400 U.S. Courthouse, Philadelphia, PA 19106)'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can support accountability by advocating for cosmetic safety reform, bankruptcy abuse prevention, and informed consumer choices',
      steps: [
        { step: 1, title: 'Support Cosmetic Safety Reform', description: 'Contact federal legislators to support expanding MoCRA to require pre-market safety testing for cosmetic ingredients, closing the regulatory gap that allowed J&J to sell contaminated product for 50+ years', legalBasis: ['First Amendment right to petition'], estimatedTime: '1-2 hours' },
        { step: 2, title: 'Demand Bankruptcy Abuse Prevention', description: 'Advocate for legislation specifically banning the Texas Two-Step and similar divisive merger strategies that allow solvent corporations to use bankruptcy to cap mass tort liabilities', legalBasis: ['First Amendment right to petition', 'Congressional bankruptcy authority'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Check Product Safety Records', description: 'Use FDA databases and Environmental Working Group resources to research ingredient safety of personal care products before purchase; support brands with transparent testing and ingredient disclosure', estimatedTime: '30 minutes' },
        { step: 4, title: 'Report Adverse Reactions', description: 'Report any adverse reactions to cosmetic products through the FDA\'s MedWatch system, helping build the safety data that MoCRA now requires', legalBasis: ['MoCRA adverse event reporting framework'], estimatedTime: '30 minutes' }
      ],
      relevantMechanisms: ['MoCRA expansion', 'Bankruptcy reform legislation', 'FDA MedWatch reporting'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can investigate testing fraud, international sales disparities, and the broader pattern of corporate concealment in consumer products',
      steps: [
        { step: 1, title: 'FOIA FDA Testing Records', description: 'File FOIA requests for complete FDA testing records and internal communications about talc safety before and after the 2019 positive asbestos finding', legalBasis: ['Freedom of Information Act (5 U.S.C. 552)'], filingTarget: 'FDA Center for Food Safety and Applied Nutrition' },
        { step: 2, title: 'Investigate International Sales Disparity', description: 'Document the continued sale of talc Baby Powder in developing countries after U.S. discontinuation; interview consumers, regulators, and advocates in India, Asia, and Africa', legalBasis: ['First Amendment freedom of press'] },
        { step: 3, title: 'Obtain Sealed Litigation Documents', description: 'Petition courts to unseal J&J internal documents currently under protective orders; public interest in product contamination evidence outweighs corporate confidentiality claims', legalBasis: ['First Amendment right of access to court records', 'Common law right of access'] },
        { step: 4, title: 'Track Executive Accountability Gap', description: 'Document the absence of individual criminal accountability for J&J executives despite decades of concealment; compare to criminal prosecutions in other product safety cases', legalBasis: ['First Amendment freedom of press'] }
      ],
      relevantMechanisms: ['FOIA', 'Court record access', 'First Amendment'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Legal professionals can pursue individual and class litigation, challenge bankruptcy abuse, and push for criminal referrals',
      steps: [
        { step: 1, title: 'Individual Tort Claims', description: 'Represent talc cancer victims in individual state court actions where jury verdicts have consistently exceeded proposed settlement values; focus on jurisdictions with strong discovery rules', legalBasis: ['State product liability law', 'State wrongful death statutes'], filingTarget: 'State courts; Multi-District Litigation (MDL) in New Jersey federal court' },
        { step: 2, title: 'Challenge Bankruptcy Maneuvers', description: 'Oppose any future J&J attempt to use bankruptcy structures to limit victim compensation; Third Circuit precedent provides strong foundation for opposition', legalBasis: ['11 U.S.C. 1112(b) (Bad faith dismissal)', 'Third Circuit LTL Management precedent'] },
        { step: 3, title: 'Criminal Referral', description: 'Prepare detailed criminal referral to DOJ documenting decades of fraudulent concealment, misleading safety claims, and obstruction of regulatory processes', legalBasis: ['18 U.S.C. 1341/1343 (Mail/Wire Fraud)', '18 U.S.C. 371 (Conspiracy)'], filingTarget: 'DOJ Criminal Division; relevant U.S. Attorney' },
        { step: 4, title: 'Mine Worker Occupational Claims', description: 'Represent talc mine workers with occupational asbestos exposure who may be excluded from consumer settlement frameworks', legalBasis: ['OSHA workplace safety violations', 'State workers compensation', 'Personal injury tort claims'] }
      ],
      relevantMechanisms: ['State product liability', 'Bankruptcy Code', 'Federal criminal fraud', 'OSHA'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials can close the regulatory gaps that allowed J&J to sell contaminated product for decades and prevent future bankruptcy abuse',
      steps: [
        { step: 1, title: 'Expand MoCRA to Require Pre-Market Testing', description: 'Introduce legislation expanding MoCRA to require pre-market safety testing for cosmetic ingredients, particularly minerals with known contamination risks', legalBasis: ['Commerce Clause', 'Congressional spending authority'] },
        { step: 2, title: 'Ban Texas Two-Step Bankruptcy Abuse', description: 'Pass legislation prohibiting solvent corporations from using divisive mergers and subsidiary bankruptcy to cap mass tort liabilities', legalBasis: ['Congressional bankruptcy authority (Art. I, Sec. 8)'] },
        { step: 3, title: 'Mandate Ingredient Transparency', description: 'Require full disclosure of cosmetic ingredient testing results, contamination history, and safety data to consumers', legalBasis: ['Commerce Clause regulatory authority'] },
        { step: 4, title: 'Strengthen DOJ Prosecution of Corporate Concealment', description: 'Direct DOJ attention to criminal prosecution of corporate officers who conceal product contamination evidence; close enforcement gaps in white-collar product safety cases', legalBasis: ['18 U.S.C. 1341/1343', 'Congressional oversight authority'] }
      ],
      relevantMechanisms: ['MoCRA expansion', 'Bankruptcy reform', 'Ingredient transparency', 'Criminal enforcement'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can implement MoCRA effectively, strengthen cosmetic safety oversight, and pursue enforcement actions',
      steps: [
        { step: 1, title: 'Implement MoCRA Talc-Specific Testing', description: 'Develop and implement FDA testing protocols specifically for asbestos contamination in talc-based cosmetic products using sensitive detection methods', legalBasis: ['MoCRA implementation authority', '21 U.S.C. 361'], filingTarget: 'FDA CFSAN' },
        { step: 2, title: 'Audit Industry Testing Standards', description: 'Review and audit ASTM International and Cosmetic Ingredient Review testing standards for adequacy; investigate whether industry-influenced standards minimized detection of contaminants', legalBasis: ['FDA regulatory authority', 'Administrative Procedure Act'] },
        { step: 3, title: 'International Coordination', description: 'Coordinate with international regulatory agencies to ensure that products discontinued in the U.S. for safety reasons are not continued to be sold abroad without disclosure', legalBasis: ['FDA international cooperation authority', 'WHO Codex Alimentarius'] },
        { step: 4, title: 'Criminal Referral for Concealment', description: 'Provide FDA evidence of J&J\'s decades-long concealment to DOJ for criminal investigation, including misleading regulatory communications and testing manipulation', legalBasis: ['21 U.S.C. 331 (Prohibited acts)', '18 U.S.C. 1001 (False statements)'] }
      ],
      relevantMechanisms: ['MoCRA', 'FDA cosmetic authority', 'International coordination', 'Criminal referral'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement can investigate and prosecute the criminal dimensions of decades-long concealment of product contamination',
      steps: [
        { step: 1, title: 'Investigate Fraudulent Concealment', description: 'Open federal investigation into J&J\'s decades of concealing asbestos contamination evidence, misleading regulators, and marketing contaminated product as safe', legalBasis: ['18 U.S.C. 1341/1343 (Mail/Wire Fraud)', '18 U.S.C. 371 (Conspiracy)'] },
        { step: 2, title: 'Examine Individual Officer Liability', description: 'Investigate individual J&J executives who directed concealment strategy, approved selective testing protocols, and authorized misleading public statements', legalBasis: ['18 U.S.C. 1341/1343', 'Responsible corporate officer doctrine'] },
        { step: 3, title: 'Investigate Industry Standard Manipulation', description: 'Investigate whether J&J\'s influence over ASTM and CIR testing standards constituted fraud or obstruction of product safety frameworks', legalBasis: ['18 U.S.C. 1512 (Obstruction)', '18 U.S.C. 1001 (False statements)'] },
        { step: 4, title: 'Coordinate with International Authorities', description: 'Share evidence with international law enforcement regarding continued sale of contaminated product in developing countries after U.S. discontinuation', legalBasis: ['Mutual Legal Assistance Treaties', 'International cooperation agreements'] }
      ],
      relevantMechanisms: ['Federal fraud statutes', 'Responsible corporate officer doctrine', 'International cooperation'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Full compensation for all talc cancer victims without the cap J&J seeks through settlement structures',
    'Criminal prosecution of J&J executives who directed the decades-long concealment of asbestos contamination evidence',
    'Federal legislation banning Texas Two-Step and similar divisive merger bankruptcy abuse by solvent corporations',
    'Expansion of MoCRA to require pre-market safety testing for cosmetic ingredients, closing the regulatory gap that enabled 50+ years of harm',
    'Public release of all J&J internal documents currently under protective orders, establishing complete historical record of corporate concealment',
    'International accountability for continued sale of talc Baby Powder in developing countries after U.S. discontinuation',
    'Compensation for talc mine workers with occupational asbestos exposure excluded from consumer settlement frameworks',
    'Reform of ASTM and CIR testing standards to prevent industry capture of product safety methodology',
    'Executive compensation clawback for officers who led J&J during concealment period',
    'FDA cosmetic testing protocols using most sensitive available methods for asbestos and other contaminant detection'
  ]
};
