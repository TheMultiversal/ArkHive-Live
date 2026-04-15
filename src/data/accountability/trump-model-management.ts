import type { AccountabilityData } from '@/types/accountability';

export const trumpModelManagementAccountability: AccountabilityData = {
  investigationSlug: 'trump-model-management',
  crimeSummary: 'Trump Model Management, a subsidiary of the Trump Organization, systematically brought foreign models to the United States on tourist visas that prohibited employment, coached them to deceive customs officials, housed them in overcrowded apartments at inflated rents, charged exploitative agency fees that left many in debt, and operated with impunity for nearly two decades. The agency recruited minors as young as 14 from developing countries. The operation exhibited multiple labor trafficking indicators under the TVPA. Despite extensive media documentation, no federal, state, or local law enforcement agency ever investigated or prosecuted the immigration fraud, labor violations, or tax evasion. The agency closed quietly in April 2017 three months after its owner became president.',
  totalHarm: 'Estimated $50M+ in total agency revenue generated through systematic immigration fraud over 18 years; hundreds of foreign models exploited through debt bondage, wage theft, and substandard housing; minors as young as 14 subjected to exploitative conditions without parental protection; significant unpaid federal and state taxes from unreported employment; evidentiary records potentially destroyed upon agency closure in 2017',
  victimsAffected: 'Hundreds of foreign models, many from developing countries, exploited over 18 years of agency operations (1999-2017); minors as young as 14 recruited without proper work authorization or child labor protections; specifically vulnerable population of non-citizen young women with language barriers, immigration status leverage, and complete financial dependence on the agency',

  primaryTargets: [
    {
      name: 'Donald Trump',
      role: 'Owner and namesake of Trump Model Management; drew revenue from operations built on systematic immigration fraud while campaigning against undocumented workers',
      currentStatus: 'Never investigated or charged for immigration fraud at his modeling agency; served as president; agency closed during presidency',
      accountabilityPath: 'DOJ investigation of 8 U.S.C. 1324 violations; IRS investigation of unreported employment; civil litigation by former models; congressional investigation of pattern across Trump Organization',
      obstacles: [
        'Agency closed in 2017, potentially destroying evidence',
        'Political barriers to prosecuting former president',
        'Statute of limitations likely expired for most offenses',
        'Victims fear deportation if they cooperate with authorities'
      ]
    },
    {
      name: 'Trump Organization',
      role: 'Parent company operating broader pattern of employing undocumented workers across modeling agency, golf courses, hotels, and construction projects',
      currentStatus: 'Convicted of tax fraud in 2022 (separate case); never charged for immigration fraud pattern',
      accountabilityPath: 'NY AG investigation of labor practices; IRS investigation of employment tax evasion; DOL enforcement of wage and hour violations',
      obstacles: [
        'Private company with no public financial reporting',
        'Multiple subsidiaries create corporate veil protection',
        'Agency dissolution may have destroyed critical records',
        'Pattern spans decades and multiple jurisdictions'
      ]
    },
    {
      name: 'ICE / DHS',
      role: 'Failed to investigate or enforce immigration law against Trump Model Management despite published media reports documenting systematic visa fraud',
      currentStatus: 'Never opened investigation into modeling agency immigration fraud; no accountability for enforcement failure',
      accountabilityPath: 'Congressional oversight investigation; DHS Inspector General review; advocacy for mandatory investigation protocols when media documents immigration fraud',
      obstacles: [
        'No obligation to investigate specific media reports',
        'Resource allocation decisions are discretionary',
        'Political sensitivity of investigating presidential businesses',
        'Modeling industry visa fraud treated as low priority'
      ]
    }
  ],

  legalMechanisms: [
    {
      name: 'Harboring Unauthorized Aliens',
      statute: '8 U.S.C. 1324',
      description: 'Criminalizes knowingly bringing aliens into the U.S. for unauthorized employment, concealing, harboring, or shielding; up to 10 years imprisonment per count',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for most counts; 10 years if serious bodily injury results',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'ICE', 'FBI'],
      applicability: 'directly_applicable' as const,
      notes: 'Statute of limitations has likely expired for most offenses given agency closure in 2017 and operations dating to 1999'
    },
    {
      name: 'Trafficking Victims Protection Act',
      statute: '18 U.S.C. 1589-1592',
      description: 'Prohibits obtaining labor through threats, fraud, abuse of legal process, or debt bondage; provides civil remedies for victims with longer statute of limitations',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years for criminal prosecution; civil action within 10 years of last violation',
      reachesHeirs: false,
      authorizedActors: ['DOJ Human Trafficking Prosecution Unit', 'FBI', 'Victims (civil action)'],
      applicability: 'potentially_applicable' as const,
      notes: 'TVPA civil cause of action may still be available to some victims given 10-year limitation period and operations through 2017'
    },
    {
      name: 'Fair Labor Standards Act',
      statute: '29 U.S.C. 206-207',
      description: 'Minimum wage and overtime requirements; applies regardless of immigration status under Supreme Court precedent',
      hasStatuteOfLimitations: true,
      limitationPeriod: '2 years (3 years for willful violations)',
      reachesHeirs: false,
      authorizedActors: ['DOL Wage and Hour Division', 'Affected workers (private action)'],
      applicability: 'directly_applicable' as const,
      notes: 'Short statute of limitations has expired; mechanism remains relevant for documenting violations and reforming industry practices'
    },
    {
      name: 'New York Modeling Agency Regulation',
      statute: 'Proposed legislation (introduced multiple sessions)',
      description: 'Proposed state licensing and regulation of modeling agencies; would require work authorization verification, prohibit debt bondage practices, and mandate minimum housing standards',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['New York State Legislature', 'NY Department of Consumer and Worker Protection'],
      applicability: 'requires_new_action' as const,
      notes: 'New York does not currently require modeling agency licensing, unlike California'
    }
  ],

  wealthTrace: [
    {
      name: 'Trump Organization (Parent Company)',
      relationship: 'Received 18 years of subsidiary revenue from operations built on immigration fraud and labor exploitation',
      transferMethod: 'Normal corporate revenue flows from Trump Model Management subsidiary to Trump Organization parent',
      estimatedValue: '$50,000,000+ in total modeling agency revenue (estimated)',
      legalEntities: ['Trump Model Management LLC', 'Trump Organization LLC'],
      recoveryMechanisms: ['IRS investigation of unreported employment income', 'NY AG investigation', 'Civil litigation by former models under TVPA']
    },
    {
      name: 'Unpaid Tax Revenue',
      relationship: 'Federal and state tax revenue lost from 18 years of employing foreign workers without proper tax reporting',
      transferMethod: 'Failure to withhold and remit employment taxes; failure to issue tax documents to workers',
      estimatedValue: 'Significant but unquantified; 18 years of unreported employment across hundreds of workers',
      legalEntities: ['IRS', 'NY State Tax Department'],
      recoveryMechanisms: ['IRS audit and enforcement', 'State tax investigation', 'Whistleblower IRS claims']
    }
  ],

  authoritiesWithPower: [
    {
      name: 'New York State Legislature',
      title: 'NY State Senate and Assembly',
      jurisdiction: 'Authority to regulate modeling agencies operating in New York State',
      powers: [
        'Enact modeling agency licensing requirements (as California already has)',
        'Mandate work authorization verification for all modeling industry employment',
        'Prohibit debt bondage practices in talent management',
        'Establish minimum housing standards for agency-provided accommodations'
      ]
    },
    {
      name: 'DOJ Human Trafficking Prosecution Unit',
      title: 'Section Chief, Human Trafficking Prosecution Unit',
      jurisdiction: 'Prosecution of labor trafficking and forced labor under TVPA',
      powers: [
        'Investigate and prosecute labor trafficking in the modeling industry',
        'Coordinate with FBI and ICE on industry-wide trafficking investigation',
        'Pursue civil forfeiture of proceeds from trafficking operations',
        'Protect victim-witnesses under TVPA provisions'
      ]
    },
    {
      name: 'Department of Labor',
      title: 'Wage and Hour Division Administrator',
      jurisdiction: 'Enforcement of FLSA minimum wage and overtime requirements regardless of immigration status',
      powers: [
        'Investigate modeling industry for systemic worker misclassification',
        'Enforce minimum wage requirements for models classified as independent contractors',
        'Issue guidance on modeling industry employment relationships',
        'Coordinate with IRS on employment tax enforcement'
      ]
    },
    {
      name: 'New York Attorney General',
      title: 'NY State Attorney General',
      jurisdiction: 'State consumer protection, labor law enforcement, and business regulation',
      powers: [
        'Investigate Trump Organization labor practices across subsidiaries',
        'Pursue civil penalties for wage theft and labor law violations',
        'Coordinate with federal agencies on immigration fraud',
        'Support legislative reform of modeling industry regulation'
      ]
    }
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Support modeling industry reform and protections for vulnerable workers',
      steps: [
        { step: 1, title: 'Demand New York modeling agency licensing', description: 'Contact NY state legislators to demand licensing requirements for modeling agencies, including mandatory work authorization verification and minimum housing standards' },
        { step: 2, title: 'Support anti-trafficking organizations', description: 'Donate to and volunteer with organizations like the Polaris Project and National Center for Missing and Exploited Children that address labor trafficking in industries exploiting young people' },
        { step: 3, title: 'Consumer pressure on fashion industry', description: 'Demand transparency from fashion brands about their supply chain including work authorization verification for models; support brands that commit to ethical practices' }
      ],
      relevantMechanisms: ['NY licensing legislation', 'Consumer advocacy', 'Anti-trafficking organizations'],
      urgency: 'standard' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate the full scope of exploitation and document the accountability failure',
      steps: [
        { step: 1, title: 'Locate and interview additional former models', description: 'Find former Trump Model Management models willing to share their experiences; use encrypted communications and source protection to address fears of retaliation and deportation' },
        { step: 2, title: 'Investigate agency closure and record destruction', description: 'Determine what happened to Trump Model Management records when the agency closed in 2017; investigate whether evidence was preserved or destroyed' },
        { step: 3, title: 'Document industry-wide visa fraud', description: 'Expand investigation beyond Trump Model Management to document scope of visa fraud across the modeling industry to support legislative reform' },
        { step: 4, title: 'FOIA ICE non-investigation', description: 'File FOIA requests with ICE/DHS to document the non-investigation of Trump Model Management and any political interference in enforcement decisions' }
      ],
      relevantMechanisms: ['FOIA', 'Source protection', 'Investigative journalism'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Pursue civil remedies for former models and advocate for industry reform',
      steps: [
        { step: 1, title: 'TVPA civil litigation', description: 'Evaluate feasibility of civil claims under the Trafficking Victims Protection Act for former models who were subjected to labor trafficking indicators including debt bondage and immigration fraud' },
        { step: 2, title: 'Class action for wage theft', description: 'Develop class action litigation against Trump Organization for wage theft and labor law violations affecting models treated as independent contractors' },
        { step: 3, title: 'Pro bono immigration assistance', description: 'Provide immigration legal assistance to former models who may be eligible for T-visas (trafficking victims) or U-visas (crime victims who cooperate with law enforcement)' }
      ],
      relevantMechanisms: ['TVPA civil cause of action', 'FLSA wage claims', 'T-visa and U-visa programs'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Enact modeling industry protections and strengthen enforcement against labor exploitation',
      steps: [
        { step: 1, title: 'Pass modeling agency licensing', description: 'Enact New York state legislation requiring modeling agency licensing with mandatory work authorization verification, housing standards, and financial transparency' },
        { step: 2, title: 'Strengthen TVPA enforcement', description: 'Increase DOJ funding for labor trafficking prosecution and require investigation of industries documented as trafficking-prone including modeling, agriculture, and domestic work' },
        { step: 3, title: 'Mandate employer accountability', description: 'Strengthen employer sanctions for immigration fraud under 8 U.S.C. 1324a and eliminate loopholes that allow corporate officer immunity' }
      ],
      relevantMechanisms: ['NY modeling agency licensing', 'TVPA enforcement funding', 'Employer sanctions reform'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Use existing regulatory authority to address modeling industry exploitation',
      steps: [
        { step: 1, title: 'DOL industry investigation', description: 'Conduct Department of Labor investigation of modeling industry employment practices including worker misclassification, wage theft, and housing conditions' },
        { step: 2, title: 'IRS employment tax enforcement', description: 'Investigate modeling agencies for employment tax violations related to misclassification of workers as independent contractors and failure to withhold taxes for foreign workers' },
        { step: 3, title: 'ICE industry enforcement', description: 'Conduct ICE investigation of visa fraud in the modeling industry to establish enforcement precedent and deter future violations' }
      ],
      relevantMechanisms: ['DOL enforcement authority', 'IRS employment tax audits', 'ICE worksite enforcement'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Investigate labor trafficking patterns in the modeling and talent management industries',
      steps: [
        { step: 1, title: 'FBI labor trafficking investigation', description: 'Open FBI investigation into labor trafficking patterns in the modeling industry using trafficking indicators documented by Polaris Project and media investigations' },
        { step: 2, title: 'Victim identification and protection', description: 'Identify and protect victims of modeling industry trafficking; provide T-visa certifications and connect victims with support services' },
        { step: 3, title: 'Interagency task force', description: 'Establish interagency task force including FBI, ICE, DOL, and state agencies to address labor exploitation in industries that exploit immigration status vulnerability' }
      ],
      relevantMechanisms: ['FBI trafficking investigation authority', 'TVPA victim protections', 'Interagency coordination'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'New York enacts modeling agency licensing requirements with mandatory work authorization verification and minimum housing standards',
    'DOJ investigates and prosecutes labor trafficking in the modeling industry to establish enforcement precedent',
    'Former Trump Model Management models receive immigration relief through T-visa or U-visa programs',
    'Trump Organization faces civil consequences for pattern of employing undocumented workers across subsidiaries',
    'Industry-wide reform adopted requiring fashion clients to verify work authorization of models they hire',
    'Federal legislation strengthens employer accountability for immigration fraud including corporate officer liability',
    'Full investigation of Trump Model Management record destruction upon agency closure in 2017',
    'International standards for model protection (comparable to EU) adopted in U.S. modeling industry'
  ]
};
