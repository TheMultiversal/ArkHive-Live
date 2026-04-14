import type { AccountabilityData } from '@/types/accountability';

export const whiteSupremacistViolenceAccountability: AccountabilityData = {
  investigationSlug: 'white-supremacist-violence',
  crimeSummary: 'White supremacist terrorism is the deadliest domestic terrorism threat in the United States, per FBI and DHS assessments. This investigation tracks the ecosystem: the August 2017 "Unite the Right" rally in Charlottesville where James Alex Fields Jr. drove a car into counter-protesters killing Heather Heyer; the El Paso Walmart massacre (August 2019) where Patrick Crusius murdered 23 people targeting Hispanic shoppers, writing a manifesto about a "Hispanic invasion"; the Christchurch-inspired radicalization pipeline connecting American, European, and Australian white supremacist movements; and the organizational infrastructure  -  Patriot Front, Atomwaffen Division, The Base, Proud Boys, Oath Keepers  -  that recruits, radicalizes, and deploys. The FBI has repeatedly identified white supremacist extremism as the most persistent and lethal domestic terrorism threat, yet resource allocation remains disproportionately focused on international terrorism.',
  totalHarm: 'Hundreds killed in white supremacist attacks since 2015. Charlottesville: 1 killed (Heather Heyer), dozens injured. El Paso: 23 murdered, 23 wounded. Tree of Life: 11 murdered. Buffalo: 10 murdered. Thousands of hate incidents annually. Entire communities living in fear. FBI identifies this as the #1 domestic terrorism threat  -  yet law enforcement resource allocation doesn\'t match the assessment.',
  victimsAffected: 'Heather Heyer (Charlottesville). 23 El Paso victims. Targeted communities: Hispanic, Black, Jewish, Muslim, Asian, LGBTQ+ Americans. Counter-protesters and activists. Law enforcement officers killed by white supremacist extremists. Communities where attacks occurred.',
  primaryTargets: [
    {
      name: 'White Supremacist Organizations',
      role: 'Organized groups that recruit, radicalize, and deploy: Patriot Front (rebranded from Vanguard America after Charlottesville), Atomwaffen Division/National Socialist Order (accelerationist neo-Nazi group linked to 5+ murders), The Base (accelerationist group whose leader was arrested), Rise Above Movement, Active Clubs (distributed cell model). These organizations have formal recruitment, training, and propaganda operations.',
      currentStatus: 'Multiple groups designated by SPLC. Some leaders arrested. But the movement is decentralizing  -  moving from organizations to "leaderless resistance" model and online radicalization. Telegram, Gab, and other platforms serve as recruitment infrastructure.',
      accountabilityPath: 'Domestic terrorism statute (currently none). Material support charges adapted from international terrorism framework. State-level gang enhancement statutes applied to white supremacist organizations.',
      obstacles: ['No federal domestic terrorism statute', 'First Amendment protection for ideology', 'Decentralized structure resists organizational prosecution', 'Political resistance to labeling domestic threats'],
    },
    {
      name: 'James Alex Fields Jr.',
      role: 'Drove a car into counter-protesters at the Charlottesville Unite the Right rally on August 12, 2017, killing Heather Heyer (32) and injuring dozens. Fields had marched with Vanguard America earlier that day.',
      currentStatus: 'Convicted of federal hate crimes (29 counts) and first-degree murder in state court. Sentenced to life in prison plus 419 years. One of the few white supremacist attackers to receive a sentence proportionate to the crime.',
      accountabilityPath: 'Fully convicted in both state and federal courts.',
      obstacles: [],
    },
    {
      name: 'Patrick Crusius',
      role: 'Drove 650 miles from Allen, Texas to El Paso to target Hispanic shoppers at a Walmart. Murdered 23 people and wounded 23 others. Posted a manifesto on 8chan referencing the Christchurch shooter and warning of a "Hispanic invasion of Texas."',
      currentStatus: 'Pleaded guilty to 90 federal charges including hate crimes resulting in death (July 2023). Sentenced to 90 consecutive life sentences. Separately pleaded guilty to state capital murder charges.',
      accountabilityPath: 'Fully convicted. The case demonstrates the international radicalization pipeline.',
      obstacles: [],
    },
  ],
  legalMechanisms: [
    { name: 'Federal Hate Crimes', statute: '18 U.S.C. § 249 (Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act)', description: 'Both Fields and Crusius convicted under federal hate crime statutes. Provides federal jurisdiction when violence is motivated by race, religion, national origin, etc.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'Domestic Terrorism Statute (Proposed)', statute: 'Domestic Terrorism Prevention Act (proposed)', description: 'Currently no federal domestic terrorism charge exists. The FBI tracks domestic terrorism but lacks a specific prosecutorial tool. Proposed legislation would create a domestic terrorism offense and require DHS/DOJ/FBI to produce joint reports on domestic terrorism.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
    { name: 'Racketeer Influenced and Corrupt Organizations Act (RICO)', statute: '18 U.S.C. § 1961-1968', description: 'RICO can be applied to white supremacist organizations operating as criminal enterprises. Successfully used against the Aryan Brotherhood. Could be applied to Atomwaffen, Patriot Front, and similar groups.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'White Supremacist Fundraising Infrastructure', relationship: 'Financial support for extremist ecosystem', transferMethod: 'White supremacist organizations fundraise through cryptocurrency, crowdfunding (often kicked off mainstream platforms), merchandise, and anonymous donations. The Daily Stormer generated significant ad revenue. Proud Boys merchandise operation. Infrastructure includes encrypted financial channels, crypto mixing, and offshore accounts. Unite the Right rally was partially crowdfunded.', estimatedValue: 'Millions annually across the ecosystem (decentralized, difficult to track)', legalEntities: ['Various extremist organizations', 'Crypto wallets', 'Offshore entities'], recoveryMechanisms: ['Financial intelligence tracking', 'Platform deplatforming', 'Civil suits (Sines v. Kessler resulted in $26M judgment)'] },
  ],
  authoritiesWithPower: [
    { name: 'FBI', title: 'FBI Counterterrorism Division  -  Domestic Terrorism Operations', jurisdiction: 'Domestic terrorism', powers: ['Investigate white supremacist networks', 'Disrupt planned attacks', 'JTTF coordination'] },
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Federal legislation', powers: ['Pass domestic terrorism statute', 'Mandate resource allocation to domestic threats', 'Require threat reporting'] },
    { name: 'DHS', title: 'Department of Homeland Security', jurisdiction: 'Domestic threat assessment', powers: ['Threat assessment reports', 'Grant programs for targeted communities', 'Countering violent extremism programs'] },
  ],
  successCriteria: [
    'Federal domestic terrorism statute enacted, providing prosecutorial tools equivalent to international terrorism charges, with mandatory threat reporting and resource allocation requirements',
    'Sines v. Kessler model replicated, civil RICO suits bankrupting organized white supremacist groups nationwide, stripping them of operational funding and real estate',
    'FBI counterterrorism resource allocation matching the threat assessment, equal or greater resources devoted to domestic white supremacist terrorism as to international terrorism',
    'Platform accountability laws requiring algorithmic auditing for radicalization pathways and mandatory reporting of extremist recruitment activity to law enforcement',
    'Every white supremacist mass casualty attack prosecuted as both a federal hate crime and state murder/terrorism charge, with sentences proportionate to the crime (Fields and Crusius as minimum standard)',
    'Deradicalization programs funded at scale, Life After Hate and similar organizations receiving federal grants proportionate to the prevention mandate',
    'Complete mapping and public documentation of the white supremacist organizational infrastructure: leadership, funding, recruitment pipelines, international connections, and law enforcement infiltration',
    'Mandatory tracking and annual public reporting of domestic terrorism statistics by ideology, currently the government does not publish comprehensive data on white supremacist violence, making the threat invisible in policy debates',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'White supremacist terrorism is the FBI\'s #1 domestic threat. It killed more Americans than jihadist terrorism in recent years. It is not treated with equivalent urgency.',
      urgency: 'immediate',
      relevantMechanisms: ['Domestic Terrorism Statute (Proposed)', 'Federal Hate Crimes'],
      steps: [
        {
          step: 1,
          title: 'Report Threats',
          description: 'If you see extremist recruitment, threats, or radicalization, online or in person, report it to the FBI tip line (tips.fbi.gov) and local law enforcement. Document what you see with screenshots and timestamps.',
          estimatedTime: '15 minutes',
          filingTarget: 'FBI Internet Crime Complaint Center (tips.fbi.gov); Local FBI field office; Local law enforcement',
        },
        {
          step: 2,
          title: 'Counter Radicalization',
          description: 'Support deradicalization organizations like Life After Hate (founded by former extremists). If someone you know is being radicalized, reach out before it\'s too late. These organizations provide intervention services.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Demand Domestic Terrorism Legislation',
          description: 'Contact your representatives to demand passage of the Domestic Terrorism Prevention Act. The FBI says white supremacist terrorism is the #1 domestic threat but has no domestic terrorism statute to prosecute it.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your House and Senate representatives; House and Senate Judiciary Committees',
          templateText: 'Dear [Representative/Senator],\n\nThe FBI identifies white supremacist extremism as the deadliest domestic terrorism threat. Yet there is no federal domestic terrorism statute. The El Paso massacre (23 killed), the Tree of Life shooting (11 killed), the Buffalo shooting (10 killed), all prosecuted under hate crime statutes because no domestic terrorism charge exists.\n\nI urge you to:\n1. Pass the Domestic Terrorism Prevention Act\n2. Mandate resource allocation matching the threat assessment\n3. Require annual public reporting of domestic terrorism statistics by ideology\n\nSincerely,\n[Your Name]',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Map the radicalization pipeline. Document the ecosystem, from mainstream amplification to recruitment to attack.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Hate Crimes', 'Domestic Terrorism Statute (Proposed)'],
      steps: [
        {
          step: 1,
          title: 'Radicalization Pipeline Investigation',
          description: 'Investigate the recruitment and radicalization infrastructure: how do young men go from mainstream internet to extremist violence? Map the pathway from YouTube algorithms to Reddit communities to Telegram channels to 8chan/4chan to real-world violence.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Organizational Infrastructure',
          description: 'Document the organizational structure of active white supremacist groups: Patriot Front, Active Clubs, Proud Boys chapters, Oath Keepers remnants. Map leadership, funding, recruitment operations, and law enforcement connections.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'International Connections',
          description: 'Investigate the international white supremacist network: connections between American groups and European/Australian movements. The Christchurch shooter inspired El Paso; the Breivik manifesto influenced multiple American attackers. Map the cross-border radicalization pipeline.',
          estimatedTime: '12-18 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Civil RICO suits against white supremacist organizations. The Sines v. Kessler $26M Charlottesville verdict proves it works.',
      urgency: 'high',
      relevantMechanisms: ['Racketeer Influenced and Corrupt Organizations Act (RICO)', 'Federal Hate Crimes'],
      steps: [
        {
          step: 1,
          title: 'Civil RICO Litigation',
          description: 'Build on the Sines v. Kessler precedent to bring civil RICO actions against white supremacist organizations. Target organizational assets, leadership personal assets, and donor networks. The Charlottesville verdict demonstrated that civil RICO can bankrupt extremist groups.',
          legalBasis: ['18 U.S.C. Section 1964(c)', 'State conspiracy statutes', 'Sines v. Kessler (W.D. Va. 2021)'],
          estimatedTime: '24-48 months',
        },
        {
          step: 2,
          title: 'Platform Liability Litigation',
          description: 'Develop legal theories for holding social media platforms liable when their algorithms demonstrably radicalize users who commit violence. Challenge Section 230 immunity where platforms actively recommend extremist content through algorithmic amplification.',
          legalBasis: ['Section 230 exceptions for editorial conduct', 'Negligence', 'Products liability'],
          estimatedTime: '24-48 months',
        },
        {
          step: 3,
          title: 'Victim Representation',
          description: 'Represent survivors and families of white supremacist attacks in civil suits against perpetrators, organizations, and enablers. Seek damages that serve both compensatory and deterrent functions.',
          legalBasis: ['State wrongful death', 'Intentional infliction of emotional distress', 'Civil conspiracy'],
          estimatedTime: '12-36 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass domestic terrorism statute. Allocate resources proportionate to the threat. Fund prevention programs.',
      urgency: 'immediate',
      relevantMechanisms: ['Domestic Terrorism Statute (Proposed)', 'Federal Hate Crimes'],
      steps: [
        {
          step: 1,
          title: 'Domestic Terrorism Prevention Act',
          description: 'Pass comprehensive domestic terrorism legislation that: creates a domestic terrorism offense, mandates resource allocation proportionate to the threat assessment, requires joint DHS/DOJ/FBI annual threat reports, and funds prevention and deradicalization programs.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Mandate Threat Reporting',
          description: 'Require the FBI, DHS, and DOJ to publish annual comprehensive statistics on domestic terrorism by ideology. The current lack of standardized public data makes the threat invisible in policy debates and budget allocation.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Fund Prevention Programs',
          description: 'Appropriate federal funding for deradicalization and prevention programs (Life After Hate, Moonshot CVE). Current funding is negligible compared to international counterterrorism programs despite the domestic threat being assessed as more lethal.',
          estimatedTime: '6-12 months appropriations cycle',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Allocate resources to the #1 threat. The FBI\'s own assessment says white supremacist terrorism is the most lethal domestic threat, resource accordingly.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Hate Crimes', 'Racketeer Influenced and Corrupt Organizations Act (RICO)'],
      steps: [
        {
          step: 1,
          title: 'Resource Reallocation',
          description: 'Reallocate counterterrorism resources to match the threat assessment. White supremacist terrorism has been identified as the most persistent and lethal domestic threat, resource allocation must match. Create dedicated domestic terrorism units in every field office.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'RICO Prosecution of Organizations',
          description: 'Apply RICO to white supremacist organizations operating as criminal enterprises. The Aryan Brotherhood prosecution provides precedent. Target Atomwaffen/NSO, Patriot Front, and Active Club networks as racketeering enterprises.',
          estimatedTime: '12-24 months per case',
        },
        {
          step: 3,
          title: 'Infiltration and Internal Threat Assessment',
          description: 'Address white supremacist infiltration of law enforcement. The FBI\'s own 2006 intelligence assessment warned of white supremacist infiltration of police departments. Implement mandatory screening, ongoing monitoring, and zero-tolerance policies.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Require platform transparency on extremist content. Mandate algorithmic auditing for radicalization pathways.',
      urgency: 'high',
      relevantMechanisms: ['Domestic Terrorism Statute (Proposed)'],
      steps: [
        {
          step: 1,
          title: 'Platform Transparency Requirements',
          description: 'Require social media platforms to publish quarterly reports on: extremist content volume, algorithmic amplification of extremist material, enforcement actions taken, and radicalization pathway data. Model on EU Digital Services Act transparency requirements.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Algorithmic Auditing',
          description: 'Mandate independent algorithmic audits of recommendation systems for radicalization pathways. Require platforms to demonstrate that their algorithms do not progressively funnel users toward extremist content.',
          estimatedTime: '12-18 months',
        },
        {
          step: 3,
          title: 'Financial Deplatforming Enforcement',
          description: 'Coordinate with FinCEN, OFAC, and financial regulators to ensure white supremacist organizations cannot use the financial system for fundraising. Require payment processors and cryptocurrency exchanges to implement enhanced due diligence for designated hate groups.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
