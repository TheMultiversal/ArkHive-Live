import type { AccountabilityData } from '@/types/accountability';

export const bigTobaccoAccountability: AccountabilityData = {
  investigationSlug: 'big-tobacco-lies',

  crimeSummary: 'For over 50 years, the major tobacco companies  -  Philip Morris, R.J. Reynolds, Lorillard, Liggett, Brown & Williamson, and the American Tobacco Company  -  engaged in one of the most extensive corporate fraud campaigns in history. Despite internal knowledge since the 1950s that smoking caused cancer and that nicotine was addictive, the industry funded fraudulent "research" to cast doubt on the science, manipulated nicotine levels to maximize addiction, targeted children with advertising (Joe Camel, Marlboro Man), and lied under oath to Congress. In 1998, 46 states settled the Master Settlement Agreement (MSA) for $206 billion over 25 years. In 2006, Judge Gladys Kessler found the tobacco industry guilty of RICO charges, ruling they had engaged in a decades-long conspiracy to deceive the public. Despite this, the industry continues to generate hundreds of billions in global revenue annually. Smoking kills over 480,000 Americans per year  -  more than all other preventable causes of death combined.',

  totalHarm: '480,000 American deaths per year. Over 20 million Americans have died from smoking since the 1964 Surgeon General\'s report. 16 million Americans live with smoking-related diseases. $300+ billion annual healthcare and productivity costs. Global: 8 million deaths per year worldwide. The industry targeted Black communities with menthol cigarettes and poor communities with discount brands. Total estimated U.S. death toll since industry knew of harm: 25-30 million.',

  victimsAffected: 'Every American who became addicted to nicotine based on industry lies about safety and addictiveness. 480,000 Americans who die annually from smoking. 16 million living with smoking-related diseases. 41,000 annual deaths from secondhand smoke. Children targeted by advertising. Communities of color disproportionately targeted with menthol marketing. Healthcare systems burdened with $170 billion in annual direct medical costs.',

  primaryTargets: [
    {
      name: 'Philip Morris (Altria Group)',
      role: 'The world\'s largest tobacco company outside China. Internal documents proved decades of deliberate deception about health effects and nicotine addiction. Manipulated nicotine delivery for maximum addictiveness.',
      currentStatus: 'Renamed parent company to Altria Group (2003). One of the most profitable companies in the world. Market cap: $90+ billion. Pays MSA obligations as a cost of doing business. Pivoting to "smoke-free" products (IQOS) while continuing to sell cigarettes globally through Philip Morris International.',
      accountabilityPath: 'Ongoing RICO enforcement (2006 judgment stands). State AG enforcement of MSA. Individual wrongful death litigation continues. International litigation in jurisdictions with less industry influence. Tax on excess profits. Corporate dissolution proceedings for entities found guilty of RICO conspiracy.',
      obstacles: [
        'Massive legal resources',
        'MSA treated as cost of business',
        'Political donations provide influence',
        'Industry pivoting to "harm reduction" narrative',
      ],
    },
    {
      name: 'R.J. Reynolds (Reynolds American / British American Tobacco)',
      role: 'Second largest U.S. tobacco company. Created Joe Camel  -  the most successful advertising campaign targeting children in history.',
      currentStatus: 'Acquired by British American Tobacco in 2017. Continues to sell cigarettes globally. BAT market cap: $70+ billion.',
      accountabilityPath: 'RICO judgment enforcement. MSA compliance. Civil litigation. International regulatory action.',
      obstacles: [
        'Now owned by UK-based BAT  -  jurisdictional complexity',
        'Massive resources for legal defense',
      ],
    },
    {
      name: 'Tobacco Industry Executives (Historical)',
      role: 'CEOs who testified under oath before Congress in 1994 that nicotine was not addictive  -  testimony that was perjury.',
      currentStatus: 'The seven CEOs who testified before Waxman in 1994 that "I believe nicotine is not addictive" were never charged with perjury. Most are deceased or retired. No individual executive has ever been criminally prosecuted for the decades of fraud.',
      accountabilityPath: 'Historical accountability. The perjury had no statute of limitations for purposes of congressional investigation. Documents and testimony preserved. No living executive has been held individually accountable.',
      obstacles: [
        'Most are deceased or elderly',
        'Statute of limitations for perjury has expired',
        'Industry settled rather than face individual liability',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'RICO Judgment (2006)',
      statute: '18 U.S.C. § 1961-1968; DOJ v. Philip Morris USA (D.D.C. 2006)',
      description: 'Judge Kessler found the tobacco industry guilty of RICO conspiracy. Ordered corrective statements, banned "light" and "low tar" descriptors. The judgment stands and requires ongoing compliance.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['DOJ', 'Federal courts'],
      applicability: 'directly_applicable',
      notes: 'The RICO judgment is permanent and enforceable. Compliance monitoring is ongoing. DOJ can seek contempt for violations. The corrective statements the industry was forced to publish  -  admitting they lied  -  are a powerful accountability tool.',
    },
    {
      name: 'Master Settlement Agreement (MSA)',
      statute: 'MSA (1998)  -  46 states, D.C., and territories',
      description: '$206 billion over 25 years. Restricted youth marketing. Dissolved industry front groups (Tobacco Institute, TIRC). Created truth campaign. Ongoing payment obligations.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['State AGs', 'NAAG'],
      applicability: 'directly_applicable',
      notes: 'MSA payments are ongoing but represent a fraction of industry profits. States have diverted most MSA funds to general budgets rather than cessation programs. Only 3% of MSA funds go to tobacco prevention.',
    },
    {
      name: 'Individual Wrongful Death / Engle Progeny',
      statute: 'State tort law; Engle v. Liggett Group (FL)',
      description: 'Florida class action (Engle) resulted in individual trials for thousands of plaintiffs using class-wide findings of fraud and addiction. Ongoing litigation.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state; Engle progeny claims have specific Florida deadlines',
      reachesHeirs: true,
      authorizedActors: ['Individual plaintiffs', 'Personal injury attorneys'],
      applicability: 'directly_applicable',
      notes: 'Thousands of individual Engle progeny cases have been tried in Florida, with mixed results. Collective verdicts total billions.',
    },
    {
      name: 'FDA Tobacco Regulation',
      statute: 'Family Smoking Prevention and Tobacco Control Act (2009); 21 U.S.C. § 387',
      description: 'Gave FDA authority to regulate tobacco products. Includes authority over nicotine levels, marketing, labeling, and new product authorization.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['FDA Center for Tobacco Products'],
      applicability: 'directly_applicable',
      notes: 'FDA has been slow to use its authority. Menthol ban proposed in 2022, repeatedly delayed. Graphic warning labels mandated but delayed by litigation. Industry continues to capture the regulatory process.',
    },
  ],

  wealthTrace: [
    {
      name: 'Altria Group (Philip Morris)',
      relationship: 'Rebranded entity of the most culpable tobacco company',
      transferMethod: 'Philip Morris renamed to Altria in 2003 to distance from tobacco brand. Continues to generate $20+ billion annual revenue. Paid $108 billion in MSA payments so far. Invested in Juul ($12.8 billion), Cronos Group (cannabis), and IQOS (heated tobacco). MSA payments are a tax-deductible cost of business.',
      estimatedValue: 'Market cap: $90+ billion. Annual revenue: $20+ billion.',
      legalEntities: ['Altria Group, Inc. (NYSE: MO)', 'Philip Morris USA Inc.', 'John Middleton Co.', 'U.S. Smokeless Tobacco Co.'],
      recoveryMechanisms: ['RICO enforcement', 'MSA compliance', 'Additional state litigation', 'Federal regulation'],
    },
    {
      name: 'MSA Fund Distribution',
      relationship: '$206 billion settlement  -  where did the money go?',
      transferMethod: 'States received $206 billion but the vast majority was diverted to general funds, not tobacco prevention. In many states, MSA funds were securitized  -  sold to Wall Street for upfront cash at deep discounts, forfeiting future payments.',
      estimatedValue: '$206 billion total; only ~3% directed to tobacco prevention',
      legalEntities: ['State general funds', 'MSA securitization bonds', 'Various state-created funds'],
      recoveryMechanisms: ['State legislative reform to direct MSA funds to cessation', 'Audit of securitization deals'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'FDA Center for Tobacco Products',
      title: 'Federal tobacco regulator',
      jurisdiction: 'Tobacco product regulation',
      powers: [
        'Reduce nicotine levels to non-addictive levels',
        'Ban menthol and flavored cigarettes',
        'Mandate graphic warning labels',
        'Deny marketing authorization for new products',
      ],
    },
    {
      name: 'DOJ  -  RICO Enforcement',
      title: 'Department of Justice',
      jurisdiction: 'Federal RICO judgment enforcement',
      powers: [
        'Monitor compliance with 2006 RICO judgment',
        'Seek contempt for violations',
        'Pursue additional corrective measures',
      ],
    },
    {
      name: 'State Attorneys General',
      title: 'State AGs who are parties to the MSA',
      jurisdiction: 'MSA enforcement and state consumer protection',
      powers: [
        'Enforce MSA compliance',
        'Pursue additional state-level litigation',
        'Redirect MSA funds to cessation programs',
      ],
    },
  ],
  successCriteria: [
    'FDA finalization of menthol cigarette ban -- the single policy that would save the most Black lives, delayed repeatedly under industry pressure since 2013',
    'FDA mandate reducing nicotine in cigarettes to non-addictive levels -- the authority exists under the Family Smoking Prevention and Tobacco Control Act and has never been exercised',
    'Full accounting and redirection of MSA funds to smoking cessation programs instead of state general budgets -- states currently spend less than 3% of MSA and tobacco tax revenue on cessation',
    'Strict enforcement of the 2006 RICO judgment corrective statement requirements and marketing restrictions with meaningful penalties for non-compliance',
    'Extension of the RICO fraud findings to cover industry pivot to vaping and heated tobacco products marketed to youth under "harm reduction" branding',
    'Criminal prosecution under state consumer fraud statutes for ongoing deception about nicotine addiction and youth marketing through social media influencers',
    'Personal liability for executives who directed marketing campaigns targeting minors after the MSA expressly prohibited such targeting',
    'Elimination of all remaining tobacco industry political donations and lobbying expenditures through strengthened campaign finance restrictions on convicted RICO enterprises',
    'Full compensation for Engle progeny plaintiffs in Florida and expansion of individual wrongful death litigation in other jurisdictions',
    'International accountability through WHO Framework Convention on Tobacco Control enforcement -- holding U.S. companies accountable for marketing tactics banned domestically that they deploy in developing nations',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'Tobacco kills 480,000 Americans annually  -  more than COVID did in its worst year. The industry that caused this still makes billions in profit. Demand regulatory action and proper use of settlement funds.',
      urgency: 'high',
      relevantMechanisms: ['FDA Tobacco Regulation', 'Master Settlement Agreement (MSA)'],
      steps: [
        {
          step: 1,
          title: 'Demand FDA Action on Menthol',
          description: 'FDA proposed banning menthol cigarettes in 2022 and has repeatedly delayed. Menthol is the tool used to target Black communities. Demand FDA finalize the ban.',
          filingTarget: 'FDA public comment: regulations.gov',
          estimatedTime: '30 minutes',
        },
        {
          step: 2,
          title: 'Demand MSA Funds for Cessation',
          description: 'Contact state legislators to demand MSA funds be directed to smoking cessation programs instead of general budgets.',
          estimatedTime: '30 minutes',
        },
        {
          step: 3,
          title: 'Report Youth Marketing Violations',
          description: 'Report any tobacco or vaping marketing targeting minors to the FDA and FTC. The industry has moved to social media influencers and flavored products designed to attract young users.',
          filingTarget: 'FDA: 1-877-CTP-1373 | FTC: reportfraud.ftc.gov',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The industry has pivoted to "harm reduction" marketing (vaping, heated tobacco) while continuing to sell traditional cigarettes. The MSA funds have been diverted. The regulatory capture continues.',
      urgency: 'high',
      relevantMechanisms: ['FDA Tobacco Regulation', 'RICO Judgment (2006)'],
      steps: [
        {
          step: 1,
          title: 'Investigate MSA Fund Diversion',
          description: 'Track where $206 billion in MSA funds actually went. How much goes to cessation vs. general budgets? States that securitized MSA payments sold future health for present cash.',
          estimatedTime: '4-6 weeks',
        },
        {
          step: 2,
          title: 'Expose Vaping Industry Tactics',
          description: 'The same tobacco companies own the major vaping brands. Investigate whether youth marketing through social media influencers and flavored products replicates the exact playbook the MSA was supposed to end.',
          estimatedTime: '3-4 weeks',
        },
        {
          step: 3,
          title: 'Track International Marketing',
          description: 'Document how U.S. tobacco companies use marketing tactics in developing nations that are banned domestically. The industry is replicating its entire 20th century playbook in Africa and Southeast Asia.',
          estimatedTime: '6-8 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'RICO judgment enforcement. Individual wrongful death. Engle progeny cases. State consumer protection.',
      urgency: 'standard',
      relevantMechanisms: ['RICO Judgment (2006)', 'Individual Wrongful Death / Engle Progeny'],
      steps: [
        {
          step: 1,
          title: 'RICO Compliance Challenge',
          description: 'Monitor and challenge industry compliance with the 2006 RICO corrective statement requirements and marketing restrictions.',
          legalBasis: ['18 U.S.C. § 1961-1968'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Engle Progeny Litigation',
          description: 'Continue individual wrongful death actions under the Florida Engle decertification framework. Each case allows jury findings on industry fraud, conspiracy, and concealment.',
          legalBasis: ['Engle v. Liggett Group (2006)'],
          estimatedTime: '6-12 months per case',
        },
        {
          step: 3,
          title: 'Vaping Product Liability',
          description: 'File product liability claims for youth vaping addiction, applying the same legal theories that succeeded against cigarette manufacturers to their vaping subsidiaries.',
          legalBasis: ['State product liability', 'Consumer protection statutes'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Ban menthol. Direct MSA funds to cessation. Give FDA real enforcement power. Increase tobacco taxes. Save lives.',
      urgency: 'immediate',
      relevantMechanisms: ['FDA Tobacco Regulation', 'Master Settlement Agreement (MSA)'],
      steps: [
        {
          step: 1,
          title: 'Federal Menthol Ban Legislation',
          description: 'If FDA continues to delay, pass legislation banning menthol cigarettes. 85% of Black smokers use menthol  -  the industry designed it that way.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'MSA Fund Accountability',
          description: 'Pass legislation requiring states to direct minimum percentages of MSA funds to tobacco cessation and prevention.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 3,
          title: 'Raise Federal Tobacco Tax',
          description: 'Increase the federal cigarette tax from $1.01 per pack to at least $3.00 per pack. Every 10% price increase reduces youth smoking by 7%. Dedicate revenue to cessation programs.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'RICO judgment is permanent. Monitor compliance. Investigate youth marketing violations.',
      urgency: 'standard',
      relevantMechanisms: ['RICO Judgment (2006)'],
      steps: [
        {
          step: 1,
          title: 'Youth Marketing Enforcement',
          description: 'Investigate violations of MSA youth marketing restrictions and FDA marketing regulations, particularly through social media and influencer marketing.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Illegal Sales Investigation',
          description: 'Enforce age verification requirements for online and retail tobacco and vaping sales. Conduct compliance checks and prosecute retailers who sell to minors.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'RICO Judgment Compliance Monitoring',
          description: 'Actively monitor industry compliance with the permanent RICO injunction. The judgment requires corrective statements and prohibits deceptive marketing. Refer violations to DOJ for contempt proceedings.',
          legalBasis: ['United States v. Philip Morris USA (2006)'],
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'FDA has the authority to end the tobacco epidemic. Use it. Reduce nicotine to non-addictive levels. Ban menthol. Enforce marketing restrictions.',
      urgency: 'immediate',
      relevantMechanisms: ['FDA Tobacco Regulation'],
      steps: [
        {
          step: 1,
          title: 'Nicotine Reduction Rule',
          description: 'FDA has the authority to mandate reduction of nicotine in cigarettes to non-addictive levels. This single action could save millions of lives. Issue the rule.',
          estimatedTime: '12-18 months for rulemaking',
        },
        {
          step: 2,
          title: 'Vaping Regulation',
          description: 'Enforce premarket review requirements for all vaping products. Deny marketing authorization for flavored products that primarily attract youth users.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Enhanced Graphic Warnings',
          description: 'Implement large graphic health warnings covering at least 50% of cigarette packaging, as required by law since 2009 but blocked by industry litigation for over a decade.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
