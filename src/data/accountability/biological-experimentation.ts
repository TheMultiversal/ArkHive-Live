import type { AccountabilityData } from '@/types/accountability';

export const biologicalExperimentationAccountability: AccountabilityData = {
  investigationSlug: 'biological-experimentation',
  crimeSummary: 'The U.S. government conducted, funded, and covered up unethical biological and medical experiments on citizens for over a century. Tuskegee deliberately withheld syphilis treatment from 399 Black men for 40 years. MKUltra subjected thousands to LSD, torture, and mind control experiments. Over 60,000 Americans were forcibly sterilized. Thousands were exposed to radiation without consent. Guatemala experiments intentionally infected over 1,300 people with STDs. Today, gain-of-function research funding at the Wuhan Institute of Virology, pandemic preparedness dismantling, and emergency authorization processes raise continuing concerns about government accountability for biological harm.',
  totalHarm: '1.1 million+ COVID-19 deaths in the U.S.; 399 Tuskegee subjects denied treatment (28 died of syphilis, 100 of complications, 40 wives infected, 19 children born with congenital syphilis); 60,000+ forcibly sterilized; thousands subjected to MKUltra experimentation; 4,000+ radiation experiments on unsuspecting subjects; 1,300+ Guatemalans deliberately infected; 500,000+ opioid deaths from pharmaceutical deception; $4.5 trillion+ in pandemic response costs',
  victimsAffected: 'Tens of millions of Americans across generations: Tuskegee participants and families, MKUltra subjects, forced sterilization victims (disproportionately Black, Indigenous, and disabled), radiation experiment subjects, military personnel, prisoners, institutionalized persons, detained immigrants, and 330+ million Americans affected by pandemic preparedness failures',

  primaryTargets: [
    {
      name: 'U.S. Government (Institutional Pattern)',
      role: 'Conducted systematic unethical biological experimentation spanning from Tuskegee (1932) through gain-of-function research oversight failures; pattern of using captive and marginalized populations as test subjects',
      currentStatus: 'Historical programs ended but institutional structures enabling abuse remain; COVID origins investigation incomplete; classification and sovereign immunity block accountability',
      accountabilityPath: 'Congressional commission with subpoena power to comprehensively investigate all U.S. biological experimentation programs; declassification of remaining MKUltra, radiation, and bioweapons testing records; reparations for affected communities',
      obstacles: [
        'Sovereign immunity shields government from most lawsuits',
        'National security classification of biological research records',
        'Key evidence destroyed (MKUltra files, radiation records)',
        'Statute of limitations expired for historical crimes',
        'Institutional resistance to admitting ongoing vulnerability'
      ]
    },
    {
      name: 'EcoHealth Alliance / Peter Daszak',
      role: 'Received NIH grants and subgranted $600K to Wuhan Institute of Virology for bat coronavirus research; violated reporting requirements; organized Lancet letter suppressing lab leak hypothesis without disclosing conflicts',
      currentStatus: 'EcoHealth Alliance debarred from federal funding in 2024; Daszak faces congressional scrutiny but no criminal charges; full scope of WIV research collaboration not publicly known',
      accountabilityPath: 'Criminal referral to DOJ for false statements to NIH; full disclosure of all WIV research and communications; declassification of intelligence community COVID origins assessment',
      obstacles: [
        'China refuses access to WIV records and personnel',
        'Political polarization of lab leak question impedes objective investigation',
        'NIH institutional interest in protecting gain-of-function research framework',
        'Daszak\'s academic network defends him as legitimate researcher'
      ]
    },
    {
      name: 'Pharmaceutical Industry (Systemic)',
      role: 'Central partners in unethical experimentation from Tuskegee to modern era; Pfizer\'s unapproved Nigeria trial, Purdue\'s opioid deception, Operation Warp Speed profiteering on taxpayer-funded research',
      currentStatus: 'Industry pays settlements as cost of doing business while maintaining regulatory capture of FDA; patent monopoly on taxpayer-funded COVID vaccines generates hundreds of billions in revenue',
      accountabilityPath: 'Enforcement of Bayh-Dole march-in rights on taxpayer-funded research; FDA revolving door restrictions; criminal prosecution of executives for fraud; drug price negotiation expansion',
      obstacles: [
        '$370M+ annual lobbying budget maintains regulatory capture',
        'Revolving door between FDA and industry',
        'PREP Act liability shields during emergencies',
        'Campaign contributions to both parties ensure bipartisan protection'
      ]
    }
  ],

  legalMechanisms: [
    {
      name: 'Common Rule (Federal Research Protections)',
      statute: '45 CFR 46',
      description: 'Federal regulations requiring informed consent and IRB review for human subjects research; enacted in response to Tuskegee; provides framework for preventing future experimentation abuse',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['HHS Office for Human Research Protections', 'Research institutions', 'IRBs'],
      applicability: 'directly_applicable' as const,
      notes: 'Does not cover privately funded research or classified national security research; IRB system criticized for inconsistency'
    },
    {
      name: 'Biological Weapons Anti-Terrorism Act',
      statute: '18 U.S.C. 175',
      description: 'Prohibits development, production, and stockpiling of biological agents for use as weapons; applicable to anthrax attacks and potential gain-of-function violations',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'No limitation for offenses resulting in death',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'U.S. Attorneys'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'False Statements to Federal Agencies',
      statute: '18 U.S.C. 1001',
      description: 'Prohibits making false statements to federal agencies; applicable to EcoHealth Alliance reporting violations and potentially to NIH testimony regarding gain-of-function research oversight',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'Congressional committees'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Bayh-Dole Act March-In Rights',
      statute: '35 U.S.C. 203',
      description: 'Authorizes government to require licensing of patents arising from federally funded research when the contractor has not made the invention available on reasonable terms; applicable to COVID vaccines',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['NIH', 'HHS', 'Federal funding agencies'],
      applicability: 'potentially_applicable' as const,
      notes: 'March-in rights have never been exercised despite statutory authority; pharmaceutical industry lobbies heavily against their use'
    },
    {
      name: 'Federal Tort Claims Act (Waiver of Sovereign Immunity)',
      statute: '28 U.S.C. 1346(b), 2671-2680',
      description: 'Limited waiver of federal sovereign immunity allowing tort claims against the government; applicable to victims of government experimentation programs',
      hasStatuteOfLimitations: true,
      limitationPeriod: '2 years from discovery of claim',
      reachesHeirs: true,
      authorizedActors: ['Victims and their heirs', 'Class action representatives'],
      applicability: 'potentially_applicable' as const,
      notes: 'Discretionary function exception often shields government research decisions; Guatemala lawsuit dismissed on sovereign immunity'
    }
  ],

  wealthTrace: [
    {
      name: 'COVID Vaccine Patent Revenue',
      relationship: 'Pharmaceutical companies retained full patent rights on vaccines developed with $18B+ in taxpayer funding',
      transferMethod: 'Government contracts without price controls, patent sharing, or technology transfer requirements',
      estimatedValue: '$100,000,000,000+ in cumulative vaccine revenue (Moderna, Pfizer)',
      legalEntities: ['Moderna', 'Pfizer/BioNTech', 'Johnson and Johnson'],
      recoveryMechanisms: ['Bayh-Dole march-in rights', 'Compulsory licensing', 'Price negotiation under IRA expansion']
    },
    {
      name: 'Pharmaceutical Industry Lobbying Investment',
      relationship: 'Industry spends more than any other sector on lobbying to maintain regulatory capture and liability protections',
      transferMethod: 'Direct lobbying expenditures, campaign contributions, revolving door employment between FDA and industry',
      estimatedValue: '$370,000,000+ annually in federal lobbying',
      legalEntities: ['PhRMA', 'Individual pharmaceutical companies', 'Lobby firms'],
      recoveryMechanisms: ['Lobbying reform', 'Revolving door restrictions', 'Campaign finance reform']
    },
    {
      name: 'Pandemic Response Costs Borne by Taxpayers',
      relationship: 'Government failures in preparedness and response resulted in $4.5T+ in federal spending while responsible officials faced no accountability',
      transferMethod: 'Federal appropriations for emergency response, stimulus, and healthcare costs resulting from institutional failures',
      estimatedValue: '$4,500,000,000,000+ total pandemic response spending',
      legalEntities: ['Federal government', 'Contracted entities'],
      recoveryMechanisms: ['Congressional investigation', 'Clawback of contractor profits', 'Reform of emergency spending oversight']
    }
  ],

  authoritiesWithPower: [
    {
      name: 'House Select Subcommittee on the Coronavirus Pandemic',
      title: 'Subcommittee Chair',
      jurisdiction: 'Investigation of COVID origins, NIH grant oversight, and pandemic response failures',
      powers: [
        'Subpoena power for documents and testimony',
        'Criminal referral authority to DOJ',
        'Public hearings exposing institutional failures',
        'Legislative recommendations for research oversight reform'
      ]
    },
    {
      name: 'DOJ National Security Division',
      title: 'Assistant Attorney General for National Security',
      jurisdiction: 'Investigation of biological weapons violations and espionage related to biological research',
      powers: [
        'Criminal prosecution under Biological Weapons Act',
        'False statements prosecution for grant reporting violations',
        'Grand jury investigation authority',
        'Classified evidence handling capability'
      ]
    },
    {
      name: 'HHS Office for Human Research Protections',
      title: 'OHRP Director',
      jurisdiction: 'Oversight of human subjects research protections under Common Rule',
      powers: [
        'Compliance oversight of federally funded research',
        'Suspension of non-compliant research programs',
        'Investigation of informed consent violations',
        'Enforcement of IRB requirements'
      ]
    },
    {
      name: 'NIH Director',
      title: 'Director, National Institutes of Health',
      jurisdiction: 'Oversight of all NIH-funded research including gain-of-function and international collaborations',
      powers: [
        'Grant termination and debarment authority',
        'P3CO framework oversight for enhanced pathogen research',
        'Mandatory reporting requirements for funded research',
        'Referral to HHS Inspector General for compliance violations'
      ]
    },
    {
      name: 'Intelligence Community (ODNI)',
      title: 'Director of National Intelligence',
      jurisdiction: 'Classification authority over COVID origins intelligence; oversight of biological threat assessment',
      powers: [
        'Declassification of COVID origins assessment',
        'Coordination of intelligence community biological threat analysis',
        'Congressional briefing authority',
        'Foreign intelligence collection on WIV activities'
      ]
    }
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Demand transparency on biological research, COVID origins, and accountability for historical experimentation programs',
      steps: [
        { step: 1, title: 'Demand declassification', description: 'Contact members of Congress and the White House demanding full declassification of the intelligence community COVID origins assessment and remaining MKUltra and radiation experiment records' },
        { step: 2, title: 'Support reparations efforts', description: 'Advocate for reparations and compensation programs for communities affected by Tuskegee, forced sterilization, radiation experiments, and other government biological experimentation' },
        { step: 3, title: 'Advocate for research oversight', description: 'Support strengthening of the Common Rule to cover all human subjects research including privately funded and classified research' },
        { step: 4, title: 'Demand pharmaceutical accountability', description: 'Support enforcement of Bayh-Dole march-in rights on taxpayer-funded drug research; demand drug price negotiation expansion' }
      ],
      relevantMechanisms: ['Congressional advocacy', 'FOIA requests', 'Support for compensation legislation'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate and document biological experimentation programs, COVID origins, and continuing patterns of medical ethics violations',
      steps: [
        { step: 1, title: 'FOIA biological research records', description: 'File comprehensive FOIA requests with NIH, DOD, CIA, DOE for records related to biological experimentation programs, gain-of-function research oversight, and COVID origins investigation' },
        { step: 2, title: 'Track EcoHealth Alliance network', description: 'Map the research network connecting EcoHealth Alliance, WIV, and U.S. gain-of-function researchers; trace funding flows and reporting compliance' },
        { step: 3, title: 'Document modern experimentation', description: 'Investigate current conditions in ICE detention medical care, prison medical experimentation, and pharmaceutical trials in developing countries' },
        { step: 4, title: 'Interview survivors and families', description: 'Record testimony from survivors of government experimentation programs and their descendants to preserve historical record' }
      ],
      relevantMechanisms: ['FOIA to NIH, DOD, CIA', 'Congressional hearing transcripts', 'OHRP compliance records'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Pursue legal accountability for biological experimentation victims and challenge government secrecy',
      steps: [
        { step: 1, title: 'Federal Tort Claims Act litigation', description: 'File FTCA claims on behalf of experimentation victims and their heirs where statute of limitations has not expired or discovery is recent' },
        { step: 2, title: 'Challenge classification decisions', description: 'Use FOIA litigation to challenge classification of COVID origins intelligence and biological research records held by NIH, DOD, and intelligence agencies' },
        { step: 3, title: 'Support congressional referrals', description: 'Prepare legal analysis supporting criminal referrals for false statements, grant fraud, and reporting violations by EcoHealth Alliance and potentially NIH officials' },
        { step: 4, title: 'Bayh-Dole march-in litigation', description: 'File legal challenges to compel NIH to exercise march-in rights on taxpayer-funded vaccine patents being exploited for excessive profit' }
      ],
      relevantMechanisms: ['Federal Tort Claims Act', 'FOIA litigation', '18 U.S.C. 1001', 'Bayh-Dole Act'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Pass legislation strengthening research oversight, declassifying records, and providing compensation to experimentation victims',
      steps: [
        { step: 1, title: 'Declassify COVID origins assessment', description: 'Pass legislation requiring full declassification of all intelligence community assessments of COVID-19 origins within 180 days' },
        { step: 2, title: 'Strengthen research oversight', description: 'Expand the Common Rule to cover all human subjects research regardless of funding source; eliminate classified research exemptions; strengthen IRB independence' },
        { step: 3, title: 'Establish compensation programs', description: 'Create comprehensive compensation program for victims of all federal biological experimentation programs and their heirs' },
        { step: 4, title: 'Reform emergency authorization', description: 'Require price controls and technology transfer for products developed with federal emergency funding; close PREP Act liability shield loopholes' }
      ],
      relevantMechanisms: ['Legislative authority over research funding', 'Classification reform', 'Compensation legislation'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Strengthen enforcement of research ethics and oversight of biological research programs',
      steps: [
        { step: 1, title: 'Reform P3CO framework', description: 'Strengthen the Potential Pandemic Pathogen Care and Oversight framework to require independent review of all gain-of-function research with no institutional exemptions' },
        { step: 2, title: 'Enforce grant compliance', description: 'Implement real-time monitoring of NIH grants involving international collaborations and enhanced pathogen research; zero tolerance for reporting violations' },
        { step: 3, title: 'Exercise Bayh-Dole march-in rights', description: 'Use existing statutory authority to require reasonable pricing of products developed with federal research funding, starting with COVID vaccines' },
        { step: 4, title: 'Strengthen detention medical oversight', description: 'Implement mandatory independent medical review for all procedures performed in federal detention facilities; eliminate contractor self-oversight' }
      ],
      relevantMechanisms: ['P3CO Framework', 'Common Rule', 'Bayh-Dole Act', 'ICE detention oversight authorities'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Investigate and prosecute criminal violations related to biological experimentation and research fraud',
      steps: [
        { step: 1, title: 'Investigate grant fraud', description: 'Build criminal case for false statements to NIH regarding EcoHealth Alliance grant reporting violations and gain-of-function research characterization' },
        { step: 2, title: 'Investigate detention medical abuse', description: 'Criminal investigation of unnecessary medical procedures in ICE detention facilities; pursue charges against physicians and contractor management' },
        { step: 3, title: 'Assess biological weapons violations', description: 'Determine whether any gain-of-function research violated the Biological Weapons Anti-Terrorism Act by creating enhanced pathogens without proper authorization' },
        { step: 4, title: 'Preserve evidence', description: 'Ensure all records related to COVID origins, gain-of-function research, and EcoHealth Alliance communications are preserved under document hold orders' }
      ],
      relevantMechanisms: ['18 U.S.C. 175 (Biological Weapons)', '18 U.S.C. 1001 (False Statements)', '18 U.S.C. 242 (Deprivation of Rights)'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'Full declassification of intelligence community COVID-19 origins assessment and all related biological research records',
    'Criminal prosecution or accountability for EcoHealth Alliance grant reporting violations and conflict of interest in COVID origins investigation',
    'Comprehensive reparations program established for all victims of government biological experimentation programs',
    'Common Rule expanded to cover all human subjects research including privately funded and classified research',
    'P3CO framework reformed with mandatory independent review and no institutional exemptions for gain-of-function research',
    'Bayh-Dole march-in rights exercised on taxpayer-funded pharmaceutical patents to ensure affordable access',
    'Revolving door between FDA and pharmaceutical industry restricted with meaningful cooling-off periods',
    'Independent medical oversight established for all federal detention facilities eliminating contractor self-regulation',
    'Remaining classified MKUltra, radiation experiment, and biological weapons testing records declassified and made publicly accessible',
    'Pandemic preparedness infrastructure permanently funded and insulated from political interference'
  ]
};
