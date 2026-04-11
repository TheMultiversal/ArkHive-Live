import type { AccountabilityData } from '@/types/accountability';

export const trumpOrgAccountability: AccountabilityData = {
  investigationSlug: 'trump-org-fraud',

  crimeSummary: 'The Trump Organization, the private company controlled by Donald Trump und his family, was convicted of 17 felony counts of tax fraud, conspiracy, and falsifying business records by a New York jury in December 2022. The company\'s CFO Allen Weisselberg pled guilty to evading taxes on $1.76 million in off-the-books compensation. Separately, New York AG Letitia James brought a civil fraud case proving that Trump and the organization systematically inflated property values to obtain favorable bank loans and deflated values for tax purposes  -  a scheme spanning decades. In February 2024, Judge Arthur Engoron found Trump liable for persistent fraud and ordered $464 million in disgorgement (later reduced on appeal). Trump was also individually convicted of 34 felony counts of falsifying business records in Manhattan DA Alvin Bragg\'s "hush money" case related to payments to Stormy Daniels to suppress damaging information before the 2016 election.',

  totalHarm: 'Decades of financial fraud inflating assets by billions of dollars. Tax evasion through off-books compensation schemes. Bank fraud through misrepresented financial statements. The harm extends beyond financial losses to the fundamental principle that the law applies equally  -  the extended delay in accountability for a former president\'s business crimes threatens the rule of law itself. New York State: $464 million civil fraud judgment. Manhattan DA: 34 felony convictions. Trump Org criminal: 17 felony convictions. Hundreds of millions in potential unpaid taxes.',

  victimsAffected: 'Banks and insurance companies that relied on fraudulent financial statements (Deutsche Bank, Zurich Insurance, others). New York State and City taxpayers who subsidized fraudulent tax filings. Business competitors who operated honestly and were at a competitive disadvantage. The American public, whose trust in equal application of the law was tested by decades of delay in accountability.',

  primaryTargets: [
    {
      name: 'Donald J. Trump',
      role: 'Former President. Owner and controller of the Trump Organization. Found liable for persistent civil fraud by New York court. Convicted of 34 felonies in Manhattan.',
      currentStatus: 'Won 2024 presidential election. Civil fraud judgment of $464M under appeal. 34 felony convictions  -  sentencing stayed due to presidential immunity. Federal cases effectively paused during presidency. Georgia RICO case ongoing.',
      accountabilityPath: 'Civil fraud judgment enforcement upon leaving office. Felony sentencing upon leaving office. State charges not subject to presidential pardon. Asset seizure under civil judgment if not paid. Tax fraud investigation (no SOL). Business dissolution remedies.',
      obstacles: [
        'Presidential immunity while in office',
        'DOJ policy against prosecuting sitting president',
        'Pardon power for federal offenses',
        'Appeals of civil fraud judgment pending',
        'Political polarization affecting enforcement',
      ],
    },
    {
      name: 'Allen Weisselberg',
      role: 'CFO of Trump Organization for decades. Managed the off-books compensation scheme and financial statement fraud.',
      currentStatus: 'Pled guilty to tax fraud (2022), sentenced to 5 months at Rikers Island. Separately sentenced to 5 months for perjury in the civil fraud trial (2024). Has served both sentences. Reported to have received $2 million severance from Trump Org.',
      accountabilityPath: 'Weisselberg served time but his cooperation was limited  -  he refused to implicate Trump directly. His knowledge of decades of financial practices is extensive. Further investigation into whether his cooperation was suppressed through the severance arrangement.',
      obstacles: [
        'Already served sentences',
        'Severance agreement may include cooperation limitations',
        'Advanced age',
      ],
    },
    {
      name: 'Donald Trump Jr. & Eric Trump',
      role: 'Executive Vice Presidents of the Trump Organization who ran the company during Trump\'s presidency and participated in financial statement preparation.',
      currentStatus: 'Found liable in civil fraud case. Ordered to pay portions of the $464M judgment. No criminal charges. Continue to operate Trump Organization.',
      accountabilityPath: 'Civil fraud judgment enforcement. They signed financial statements that were found to be fraudulent. Investigation into individual tax liability.',
      obstacles: [
        'No criminal charges filed',
        'Civil judgment under appeal',
        'Father\'s presidential position complicates enforcement',
      ],
    },
    {
      name: 'Trump Organization (Corporate Entity)',
      role: 'The company itself, convicted of 17 felony counts.',
      currentStatus: 'Convicted December 2022. Fined $1.6 million (the maximum for a corporate entity under New York law). Civil fraud judgment of $464M. Ordered not to apply for loans from NY-registered institutions for 3 years. Independent monitor appointed.',
      accountabilityPath: 'Enforcement of the civil fraud judgment. Monitor oversight of business practices. Investigation of ongoing compliance. Business dissolution if fraud continues.',
      obstacles: [
        'Maximum corporate fine was only $1.6M',
        'Corporate structure allows asset shifting',
        'Political interference potential',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'New York Executive Law § 63(12)',
      statute: 'N.Y. Exec. Law § 63(12)',
      description: 'The statute under which AG James brought the civil fraud case. Authorizes the AG to seek dissolution of businesses engaged in persistent fraud, disgorgement of ill-gotten gains, and injunctive relief.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['New York Attorney General'],
      applicability: 'directly_applicable',
      notes: 'Judge Engoron found persistent fraud and ordered $464M disgorgement. The dissolution remedy was available but not imposed. Business restrictions for 3 years instead.',
    },
    {
      name: 'New York Penal Law  -  Falsifying Business Records',
      statute: 'N.Y. Penal Law § 175.10 (First Degree)',
      description: 'The charge underlying the 34 felony convictions in the hush money case. Trump falsified business records to conceal payments made to suppress information before the 2016 election.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (tolled during Trump\'s time out of state)',
      reachesHeirs: false,
      authorizedActors: ['Manhattan DA'],
      applicability: 'directly_applicable',
      notes: '34 convictions. Sentencing delayed by presidential immunity. Not subject to presidential pardon (state charges).',
    },
    {
      name: 'Tax Fraud  -  Federal and State',
      statute: '26 U.S.C. § 7201 (Federal); N.Y. Tax Law § 1804 (State)',
      description: 'No statute of limitations for civil tax fraud. Criminal tax fraud: 6 years federal, no limit for civil. Decades of asset value manipulation likely involved tax underreporting.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['IRS', 'NYS Department of Taxation and Finance'],
      applicability: 'directly_applicable',
      notes: 'If property values were inflated for loans and deflated for taxes, the tax authorities were defrauded for decades.',
    },
    {
      name: 'Constructive Trust',
      statute: 'Common law equitable remedy',
      description: 'No SOL. The $464M civil fraud judgment can be enforced through constructive trust on all assets traceable to the fraudulent schemes.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Any court of equity'],
      applicability: 'directly_applicable',
      notes: 'If civil judgment is upheld on appeal, enforcement mechanisms include liens on all New York properties.',
    },
  ],

  wealthTrace: [
    {
      name: 'Trump Organization Real Estate Portfolio',
      relationship: 'Assets whose values were systematically misrepresented',
      transferMethod: 'The Trump Organization controls a real estate portfolio including Trump Tower (NYC), Mar-a-Lago (Palm Beach), golf courses, hotels, and commercial properties. Property values were inflated by billions in financial statements to obtain favorable bank terms.',
      estimatedValue: 'Claimed net worth: $4+ billion. Actual value disputed. Civil fraud judgment: $464M.',
      legalEntities: ['Trump Organization LLC', 'Trump Old Post Office LLC', 'Various property-specific LLCs', 'Trump Revocable Trust'],
      recoveryMechanisms: ['Civil fraud judgment enforcement', 'Property liens', 'Constructive trust'],
    },
    {
      name: 'Off-Books Compensation Scheme',
      relationship: 'Tax evasion through unreported compensation',
      transferMethod: 'Senior executives received off-books compensation including apartment rent, car leases, school tuition, and other benefits not reported as taxable income.',
      estimatedValue: '$1.76 million documented (Weisselberg alone); likely much more across all executives',
      legalEntities: ['Individual executive accounts', 'Trump Organization payroll records'],
      recoveryMechanisms: ['IRS investigation', 'NYS tax authority claims'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'New York Attorney General',
      title: 'AG of the State of New York',
      jurisdiction: 'State civil and criminal enforcement',
      powers: [
        'Enforce $464M civil fraud judgment',
        'Monitor Trump Organization compliance',
        'Seek business dissolution if fraud continues',
      ],
    },
    {
      name: 'Manhattan District Attorney',
      title: 'DA, New York County',
      jurisdiction: 'State criminal prosecution',
      powers: [
        'Proceed to sentencing on 34 felony convictions when immunity waived',
        'Investigate additional financial crimes',
        'Not subject to presidential pardon',
      ],
    },
    {
      name: 'IRS',
      title: 'Internal Revenue Service',
      jurisdiction: 'Federal tax enforcement',
      powers: [
        'Audit Trump Organization and individual returns',
        'Investigate tax fraud arising from value manipulation',
        'No SOL for civil tax fraud',
      ],
    },
    {
      name: 'Independent Monitor',
      title: 'Court-appointed monitor of Trump Organization',
      jurisdiction: 'Oversight per court order',
      powers: [
        'Review all financial statements and valuations',
        'Report compliance violations to the court',
        'Access to company records',
      ],
    },
  ],
  successCriteria: [
    'Full enforcement and collection of the $464 million civil fraud judgment including interest -- no modifications, no reductions, no political interference in enforcement',
    'Sentencing in the 34-count felony falsifying business records conviction that reflects the gravity of the crimes and applies the same standards as any non-political defendant',
    'Comprehensive state tax fraud investigation examining decades of dual-valuation schemes -- inflating values for loans while deflating for taxes',
    'Independent monitor\'s full accounting of Trump Organization assets, valuations, and financial statements with public reporting of findings',
    'Personal criminal liability for all executives who signed or certified fraudulent financial statements -- not just entity-level penalties',
    'Deutsche Bank investigation into whether the bank knowingly accepted inflated valuations and failed to conduct adequate due diligence on Trump Organization loans',
    'Complete dissolution of the business registration fraud -- permanent ban on principals from serving as officers or directors of New York corporations as ordered by the court',
    'Legislation clarifying that sitting presidents and former presidents face the same criminal prosecution standards as any citizen in state courts',
    'Public database of all fraudulent financial statements submitted to banks, insurance companies, and tax authorities -- establishing the complete scope of the decadeslong scheme',
    'IRS criminal referral for tax fraud based on the discrepancy between property valuations used for loans vs. tax filings -- tax fraud has no statute of limitations',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'This is about whether the law applies equally regardless of wealth and political power. Support the enforcement of existing judgments and the independence of state prosecutors.',
      urgency: 'high',
      relevantMechanisms: ['New York Executive Law § 63(12)', 'New York Penal Law  -  Falsifying Business Records'],
      steps: [
        {
          step: 1,
          title: 'Support Prosecutorial Independence',
          description: 'State prosecutors are under extraordinary political pressure. Support their independence through advocacy and public attention.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Monitor Judgment Enforcement',
          description: 'Follow the enforcement of the $464M civil fraud judgment and the 34 felony sentencing. Public attention helps ensure accountability.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Report Financial Fraud Indicators',
          description: 'If you have knowledge of Trump Organization financial fraud -- whether as a former employee, contractor, or business partner -- report to the NY AG or Manhattan DA. Whistleblower protections apply.',
          filingTarget: 'NY AG: ag.ny.gov/report-complaint | Manhattan DA: manhattanda.org/report-a-crime',
          estimatedTime: '30 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The Trump Organization\'s financial practices span decades and involve hundreds of transactions. The full scope of the fraud has not been documented.',
      urgency: 'high',
      relevantMechanisms: ['Tax Fraud  -  Federal and State'],
      steps: [
        {
          step: 1,
          title: 'Tax Return Investigation',
          description: 'Trump\'s tax returns were obtained by Congress and partially reported by the New York Times. Full analysis of decades of returns against property valuations used for loans would reveal the full scope of the dual-valuation scheme.',
          estimatedTime: '4-8 weeks',
        },
        {
          step: 2,
          title: 'Deutsche Bank Due Diligence Investigation',
          description: 'Deutsche Bank lent hundreds of millions to the Trump Organization when other banks refused. What did Deutsche Bank know about the inflated valuations? Did they conduct real due diligence or look the other way?',
          estimatedTime: '6-8 weeks',
        },
        {
          step: 3,
          title: 'Insurance Fraud Documentation',
          description: 'The Trump Organization provided materially different property valuations to insurers vs. tax authorities vs. lenders  -  often in the same year. Document the full timeline and scale of insurance fraud across all properties.',
          estimatedTime: '4-6 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Civil fraud judgment enforcement. State criminal sentencing. Tax fraud investigation. All state-level mechanisms beyond presidential pardon power.',
      urgency: 'high',
      relevantMechanisms: ['Constructive Trust', 'New York Executive Law § 63(12)'],
      steps: [
        {
          step: 1,
          title: 'Judgment Enforcement',
          description: 'Pursue enforcement of the $464M judgment through property liens, bank levies, and seizure of assets if necessary.',
          legalBasis: ['N.Y. CPLR Article 52'],
          estimatedTime: '6-12 months post-appeal',
        },
        {
          step: 2,
          title: 'Challenge Bond and Appeals Delays',
          description: 'Oppose any attempts to reduce the judgment bond or further delay enforcement through procedural maneuvers. The judgment grows with interest every day.',
          legalBasis: ['N.Y. CPLR § 5519'],
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Insurance Fraud Civil Action',
          description: 'Represent insurance companies in civil recovery actions for premiums paid on policies where property valuations were materially fraudulent.',
          legalBasis: ['N.Y. Insurance Law', 'Common law fraud'],
          estimatedTime: '12-18 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'The case demonstrates the need for stronger financial fraud enforcement, mandatory external audits for large private companies, and clearer rules on presidential immunity.',
      urgency: 'high',
      relevantMechanisms: ['Tax Fraud  -  Federal and State'],
      steps: [
        {
          step: 1,
          title: 'Presidential Accountability Act',
          description: 'Introduce legislation clarifying that criminal proceedings continue during and after a presidency, and that state charges are not affected by federal office.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'Private Company Audit Requirements',
          description: 'Mandate independent external audits for large private companies seeking loans above a threshold amount. The Trump Organization operated for decades with no independent audit.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 3,
          title: 'Real Estate Valuation Reform',
          description: 'Require standardized valuation methodologies for real estate used as loan collateral, with personal liability for executives who certify materially false valuations.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Tax fraud investigation has no statute of limitations. State charges not subject to pardon. Enforcement of existing judgments.',
      urgency: 'standard',
      relevantMechanisms: ['Tax Fraud  -  Federal and State'],
      steps: [
        {
          step: 1,
          title: 'Comprehensive Tax Audit',
          description: 'Full audit of Trump Organization and individual returns against property valuations used in loan applications. Dual-valuation scheme is prima facie evidence of either tax fraud or bank fraud.',
          legalBasis: ['26 U.S.C. § 7201'],
          estimatedTime: '12-18 months',
        },
        {
          step: 2,
          title: 'Bank Fraud Investigation',
          description: 'Investigate whether the submission of fraudulent financial statements to lenders constitutes federal bank fraud. The 10-year statute of limitations for financial institution fraud extends prosecutability.',
          legalBasis: ['18 U.S.C. § 1344'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Witness Cooperation Development',
          description: 'Develop cooperation agreements with Trump Organization insiders, accountants, and former employees who can provide testimony about the direction to falsify financial records.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Banking regulators should investigate whether lenders conducted adequate due diligence on Trump Organization financial statements.',
      urgency: 'standard',
      relevantMechanisms: ['New York Executive Law § 63(12)'],
      steps: [
        {
          step: 1,
          title: 'Lender Due Diligence Investigation',
          description: 'Investigate whether banks (particularly Deutsche Bank) conducted adequate due diligence on Trump Organization financial statements, or whether they knowingly accepted inflated valuations.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Monitor Compliance Reforms',
          description: 'Ensure the court-appointed independent monitor\'s findings are acted upon. Review banking industry compliance with enhanced due diligence requirements for politically exposed persons.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Appraiser Accountability',
          description: 'Investigate appraisers who provided inflated property valuations used in the fraud scheme. Revoke licenses and pursue civil penalties against professionals who facilitated the deception.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
