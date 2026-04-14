import type { AccountabilityData } from '@/types/accountability';

export const auroraShootingAccountability: AccountabilityData = {
  investigationSlug: 'aurora-shooting',
  crimeSummary: 'On July 20, 2012, James Holmes entered a midnight screening of "The Dark Knight Rises" at Century 16 theater in Aurora, Colorado, set off tear gas grenades and opened fire on the audience, murdering 12 people and wounding 70 others  -  the deadliest mass shooting in Colorado history at the time. Holmes had legally purchased four firearms and 6,000+ rounds of ammunition online over a two-month period despite no background issues. He had been seeing a University of Colorado psychiatrist, Dr. Lynne Fenton, who was concerned enough about his homicidal ideation to contact campus police; however, Holmes withdrew from the university, ending potential intervention. The investigation examines the systemic failures in threat intervention, mental health reporting gaps, and the ease of acquiring an arsenal designed for mass casualty events.',
  totalHarm: '12 murdered, 70 wounded (the largest number of victims in a single shooting incident at the time). $80+ million in medical costs. Lifetime trauma for hundreds in the theater. Subsequent lawsuit against ammunition sellers dismissed. Theater chain Cinemark sued by victims  -  jury found no liability. Victims\' families ordered to pay Cinemark\'s legal fees, adding insult to injury.',
  victimsAffected: 'Jonathan Blunk (26), Alexander Boik (18), Jesse Childress (29), Gordon Cowden (51), Jessica Ghawi (24), John Larimer (27), Matt McQuinn (27), Micayla Medek (23), Veronica Moser-Sullivan (6  -  youngest victim), Alex Sullivan (27), Alexander Teves (24), Rebecca Wingo (32). 70 wounded. Theater audience members and their families.',
  primaryTargets: [
    {
      name: 'James Holmes',
      role: 'Sole perpetrator. Graduate student in neuroscience at University of Colorado who meticulously planned the attack over months. Purchased weapons legally. Booby-trapped his apartment with explosives.',
      currentStatus: 'Convicted on 165 counts including 24 counts of first-degree murder (2 per victim). Sentenced to 12 consecutive life sentences plus 3,318 years. Currently incarcerated at USP Allenwood, Pennsylvania.',
      accountabilityPath: 'Individual fully convicted. Systemic accountability remains unaddressed.',
      obstacles: [],
    },
    {
      name: 'Systemic Intervention Failures',
      role: 'Dr. Lynne Fenton, Holmes\'s psychiatrist, identified homicidal ideation and alerted campus police threat assessment team. When Holmes withdrew from school, the process simply stopped. No reporting to law enforcement. No mechanism to flag firearms purchases.',
      currentStatus: 'No changes to mandatory reporting laws in Colorado for mental health providers concerned about imminent violence. University settled with victims for $1.5 million.',
      accountabilityPath: 'Extreme risk protection orders (red flag laws) later passed in Colorado (2019). Federal red flag incentive funding in Bipartisan Safer Communities Act (2022).',
      obstacles: ['HIPAA limitations on mental health disclosures', 'No mandatory threat reporting requirements', 'Privacy concerns vs. public safety balance'],
    },
  ],
  legalMechanisms: [
    { name: 'State Murder and Attempted Murder', statute: 'Colorado Revised Statutes § 18-3-102', description: 'Holmes convicted on 165 counts. Jury rejected insanity defense but deadlocked on death penalty, resulting in life sentences.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Colorado DA'], applicability: 'directly_applicable' },
    { name: 'Extreme Risk Protection Orders (Red Flag Laws)', statute: 'Colorado HB 19-1177; Federal: Bipartisan Safer Communities Act (2022)', description: 'Allows courts to temporarily remove firearms from individuals posing danger. Did not exist at the time of the shooting. Colorado passed its law in 2019.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Courts', 'Law enforcement', 'Family members'], applicability: 'potentially_applicable' },
    { name: 'Online Ammunition Sales Regulation', statute: 'Proposed legislation (various)', description: 'Holmes purchased 6,000+ rounds of ammunition online with no verification. Proposed laws would require ID verification for ammunition purchases.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress', 'State legislatures'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'Firearms and Ammunition Industry Profits', relationship: 'Legal sales that enabled mass murder', transferMethod: 'Holmes legally purchased a Smith & Wesson M&P15 rifle, a Remington 870 shotgun, and two Glock pistols plus 6,000+ rounds of ammunition from online retailers. Gun industry revenue exceeds $19 billion annually. After every mass shooting, industry profits surge from panic buying.', estimatedValue: '$19 billion+ annual firearms industry revenue; sales spike after mass shootings', legalEntities: ['Smith & Wesson', 'Remington', 'Glock', 'Online ammunition retailers'], recoveryMechanisms: ['PLCAA repeal would allow lawsuits', 'State consumer protection', 'Tax on firearms/ammunition'] },
  ],
  authoritiesWithPower: [
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Federal firearm legislation', powers: ['Assault weapons ban', 'Online ammunition regulation', 'Universal background checks', 'Red flag law incentives'] },
    { name: 'Colorado Legislature', title: 'Colorado General Assembly', jurisdiction: 'State firearms regulation', powers: ['Passed red flag law (2019)', 'High-capacity magazine ban', 'State assault weapons regulation'] },
  ],
  successCriteria: [
    'Universal background checks for all firearms sales including private sales, gun shows, and online transactions, Holmes passed his background checks, but the current system has no mechanism to flag concerning purchase patterns',
    'Online ammunition sales regulated with ID verification, purchase volume tracking, and suspicious activity reporting, Holmes purchased 6,000+ rounds online with zero verification or flags',
    'Extreme risk protection orders (red flag laws) enacted in all 50 states, Colorado passed its law in 2019, seven years after Aurora. Had red flag laws existed and Dr. Fenton had been able to petition, the massacre might have been prevented',
    'Threat assessment continuity reform: when a mental health professional identifies homicidal ideation, the threat assessment process must not terminate simply because the subject leaves an institutional context (as happened when Holmes withdrew from CU)',
    'PLCAA repeal or reform allowing victims of mass shootings to sue firearms manufacturers and ammunition sellers whose products and sales practices facilitated mass casualty events',
    'High-capacity magazine bans enacted federally, Holmes used a 100-round drum magazine that jammed during the attack, likely saving additional lives',
    'Cinemark-style liability reform ensuring that venues cannot force shooting victims\' families to pay the venue\'s legal fees when victims\' lawsuits are unsuccessfully brought, the Aurora victims\' families were ordered to pay Cinemark\'s attorney costs',
    'Comprehensive public documentation of every systemic failure: the legal purchase of an arsenal, the online ammunition with zero oversight, the mental health intervention that stopped when Holmes withdrew, and the legal immunity that prevented civil accountability',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'A man legally purchased an arsenal online and murdered 12 people in a movie theater, including a 6-year-old girl. The system worked exactly as designed.',
      urgency: 'immediate',
      relevantMechanisms: ['Extreme Risk Protection Orders (Red Flag Laws)', 'Online Ammunition Sales Regulation'],
      steps: [
        {
          step: 1,
          title: 'Support Red Flag Laws',
          description: 'Advocate for extreme risk protection order laws in your state. In states that have them, learn how to petition. Red flag laws allow courts to temporarily remove firearms from individuals posing a danger, had they existed in 2012, Dr. Fenton\'s concerns about Holmes could have triggered an ERPO.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your state legislators; Governor\'s office',
          templateText: 'Dear [State Legislator],\n\nOn July 20, 2012, James Holmes legally purchased four firearms and 6,000+ rounds of ammunition, then murdered 12 people in an Aurora, Colorado movie theater. His psychiatrist had identified homicidal ideation but had no legal mechanism to intervene.\n\nI urge you to:\n1. Pass an extreme risk protection order (red flag) law\n2. Regulate online ammunition sales with ID verification\n3. Support universal background checks for all firearms sales\n\n12 people died. Veronica Moser-Sullivan was 6 years old.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Demand Online Ammunition Regulation',
          description: 'Contact federal representatives to demand regulation of online ammunition sales: ID verification, purchase volume tracking, and suspicious activity reporting. Holmes purchased 6,000+ rounds online with zero oversight.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your House and Senate representatives; House and Senate Judiciary Committees',
        },
        {
          step: 3,
          title: 'Support Survivors and Families',
          description: 'Support Aurora survivor organizations and gun violence prevention groups: Everytown, Moms Demand Action, Sandy Hook Promise. The Aurora families were ordered to pay Cinemark\'s legal fees after their lawsuit failed, the system punished them for seeking accountability.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document how the firearms industry profits from the cycle of mass shootings and panic buying. Follow the money.',
      urgency: 'high',
      relevantMechanisms: ['Online Ammunition Sales Regulation', 'Extreme Risk Protection Orders (Red Flag Laws)'],
      steps: [
        {
          step: 1,
          title: 'Firearms Industry Profit Cycle',
          description: 'Track firearms industry stock performance and revenue around mass shooting events. Document the profit cycle: mass shooting occurs, media coverage drives fear, panic buying surges, industry profits increase. The industry has a financial incentive against regulation.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Online Ammunition Market Investigation',
          description: 'Investigate the online ammunition market. How many retailers sell ammunition with no identity verification? What volume limits exist? How are suspicious purchases flagged? Holmes purchased 6,000+ rounds, did any retailer question the order?',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Threat Assessment Gap Documentation',
          description: 'Investigate how many mass shooters had prior mental health contacts that failed to trigger intervention. Holmes is not unique, document the pattern of mental health professionals identifying danger but lacking legal tools to prevent it.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Challenge PLCAA. Develop novel theories for manufacturer and seller liability. Protect victims from retaliatory legal fees.',
      urgency: 'high',
      relevantMechanisms: ['Online Ammunition Sales Regulation', 'Extreme Risk Protection Orders (Red Flag Laws)'],
      steps: [
        {
          step: 1,
          title: 'PLCAA Challenges',
          description: 'Develop novel legal theories to challenge PLCAA immunity, following the Sandy Hook/Remington settlement model. Target manufacturers\' marketing practices and sellers\' failure to implement reasonable purchase verification for mass-quantity online ammunition sales.',
          legalBasis: ['State consumer protection statutes', 'Marketing negligence (predatory marketing exception)', 'Sandy Hook/Remington precedent'],
          estimatedTime: '12-36 months',
        },
        {
          step: 2,
          title: 'Anti-SLAPP and Fee-Shifting Protection',
          description: 'Advocate for legislation protecting mass shooting victims\' families from retaliatory legal fee awards. The Aurora families being ordered to pay Cinemark\'s legal fees was an injustice that deters future accountability litigation.',
          legalBasis: ['State anti-SLAPP reform', 'Federal civil rights fee provisions'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Mental Health Reporting Framework',
          description: 'Develop model legislation balancing HIPAA privacy protections with public safety reporting when mental health professionals identify imminent danger. The gap that allowed Holmes to fall through the threat assessment system must be closed.',
          legalBasis: ['HIPAA threat-to-safety exception', 'Tarasoff duty to warn (state variations)', 'Red flag law petition standing'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass universal background checks, online ammunition regulation, assault weapons ban, and high-capacity magazine ban.',
      urgency: 'immediate',
      relevantMechanisms: ['Online Ammunition Sales Regulation', 'Extreme Risk Protection Orders (Red Flag Laws)'],
      steps: [
        {
          step: 1,
          title: 'Universal Background Checks',
          description: 'Pass legislation requiring background checks for all firearms sales including private sales, gun show sales, and online transactions. Close the loopholes that allow firearms to be purchased without any verification.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Online Ammunition Regulation',
          description: 'Pass legislation requiring ID verification, purchase volume tracking, and suspicious activity reporting for online ammunition sales. Holmes purchased 6,000+ rounds online with zero flags, this must be made impossible.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'High-Capacity Magazine Ban',
          description: 'Reinstate and strengthen the federal assault weapons ban including a ban on high-capacity magazines. Holmes used a 100-round drum magazine, its malfunction saved lives. Legislation should ensure such magazines are not legally available.',
          estimatedTime: '6-12 months legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Improve threat assessment protocols. When mental health professionals flag concerns, ensure continuity of intervention even when a subject leaves an institutional context.',
      urgency: 'immediate',
      relevantMechanisms: ['Extreme Risk Protection Orders (Red Flag Laws)'],
      steps: [
        {
          step: 1,
          title: 'Threat Assessment Continuity Protocol',
          description: 'Ensure threat assessment does not stop when a subject withdraws from an institution. When Holmes withdrew from CU, the threat assessment process ended. Develop protocols for transferring threat assessment to community-based agencies when institutional contexts change.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Purchase Pattern Monitoring',
          description: 'Work with firearms retailers and online ammunition sellers to develop alert systems for suspicious purchase patterns. The legal purchase of an arsenal over a two-month period should trigger a review, not proceed silently.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Red Flag Law Utilization',
          description: 'In states with ERPO/red flag laws, actively train law enforcement and mental health professionals on petition procedures. Ensure that when a mental health professional identifies danger, there is a clear, fast pathway to court-ordered firearms removal.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Regulate online ammunition sales with the same rigor as firearms. Require verification and quantity limits.',
      urgency: 'high',
      relevantMechanisms: ['Online Ammunition Sales Regulation'],
      steps: [
        {
          step: 1,
          title: 'Online Ammunition Sale Standards',
          description: 'Implement ID verification and age verification requirements for all online ammunition sales. Require sellers to verify purchaser identity and eligibility before shipping ammunition.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Purchase Volume Tracking',
          description: 'Implement purchase volume tracking and suspicious activity reporting for ammunition sales. Require sellers to flag purchases exceeding reasonable personal use quantities, 6,000+ rounds purchased by a single individual over two months should trigger an automatic review.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Venue Security Standards',
          description: 'Develop voluntary security standards for entertainment venues that are potential mass casualty targets. Include emergency exit protocols, communication systems, and coordination with local law enforcement for threat response.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
