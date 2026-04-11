import type { AccountabilityData } from '@/types/accountability';

export const antisemiticViolenceAccountability: AccountabilityData = {
  investigationSlug: 'antisemitic-violence',
  crimeSummary: 'A documented surge in antisemitic violence across America, anchored by the October 27, 2018 Tree of Life synagogue massacre in Pittsburgh, where Robert Bowers murdered 11 congregants during Shabbat services  -  the deadliest attack on Jewish people in American history. The broader investigation tracks the rise of antisemitic conspiracy theories from online platforms to real-world violence, including the Poway synagogue shooting (2019), Monsey Hanukkah machete attack (2019), Jersey City kosher market attack (2019), and the Colleyville synagogue hostage situation (2022). ADL documented 3,697 antisemitic incidents in 2022 alone  -  a 36% increase from 2021 and the highest number since tracking began in 1979.',
  totalHarm: '11 murdered at Tree of Life, dozens more killed or wounded in related attacks. Thousands of antisemitic incidents annually  -  harassment, vandalism, assault. Jewish communities forced to militarize their houses of worship with armed guards, bulletproof glass, and active shooter training for congregants.',
  victimsAffected: 'Joyce Fienberg (75), Richard Gottfried (65), Rose Mallinger (97), Jerry Rabinowitz (66), Cecil Rosenthal (59), David Rosenthal (54), Bernice Simon (84), Sylvan Simon (86), Daniel Stein (71), Melvin Wax (87), Irving Younger (69)  -  all murdered at Tree of Life. Jewish communities nationwide. Survivors with permanent trauma.',
  primaryTargets: [
    {
      name: 'Robert Bowers',
      role: 'Tree of Life synagogue shooter. Radicalized on Gab, an alternative social media platform where he posted virulent antisemitic content. Posted "I can\'t sit by and watch my people get slaughtered" before the attack, echoing replacement theory and accusing HIAS (Hebrew Immigrant Aid Society) of bringing "invaders."',
      currentStatus: 'Convicted on 63 federal counts including hate crimes resulting in death. Sentenced to death (June 2023).',
      accountabilityPath: 'Fully convicted. Focus shifts to radicalization infrastructure and prevention.',
      obstacles: [],
    },
    {
      name: 'Online Radicalization Infrastructure',
      role: 'Gab, 4chan, 8kun, and Telegram channels where antisemitic conspiracy theories (ZOG, blood libel, Holocaust denial) are propagated. Bowers was active on Gab. Mainstream platforms algorithmically amplify adjacent content.',
      currentStatus: 'Gab continues to operate. Minimal platform accountability. Section 230 shields intermediaries.',
      accountabilityPath: 'Platform accountability legislation. Advertiser campaigns. Community pressure.',
      obstacles: ['First Amendment protection', 'Section 230 immunity', 'Decentralized nature of extremist content'],
    },
  ],
  legalMechanisms: [
    { name: 'Federal Hate Crime Act', statute: '18 U.S.C. § 249 (Matthew Shepard and James Byrd Jr. Hate Crimes Prevention Act)', description: 'Bowers convicted on hate crime charges resulting in death. Federal framework for prosecuting bias-motivated violence.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'Domestic Terrorism Enhancement', statute: '18 U.S.C. § 2332a (proposed expansion)', description: 'No federal domestic terrorism statute currently exists. Proposed legislation would create one, enabling better tracking and prosecution.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
    { name: 'Nonprofit Security Grant Program', statute: 'DHS NSGP (6 U.S.C. § 609a)', description: 'Federal program providing security funding to at-risk nonprofits, including houses of worship. Funding increased but remains insufficient to meet demand.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DHS', 'FEMA'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'Security Costs to Jewish Communities', relationship: 'Forced expenditure due to threat environment', transferMethod: 'Synagogues and Jewish institutions spending millions annually on armed guards, surveillance systems, bulletproof materials, and security consultants. The cost of antisemitism is borne by its targets.', estimatedValue: 'Hundreds of millions annually across Jewish institutions', legalEntities: ['Synagogues', 'Jewish Community Centers', 'Jewish schools'], recoveryMechanisms: ['NSGP grants', 'Federal funding'] },
  ],
  authoritiesWithPower: [
    { name: 'FBI', title: 'FBI Domestic Terrorism Operations', jurisdiction: 'Domestic terrorism and hate crimes', powers: ['Investigate extremist networks', 'Disrupt planned attacks', 'Monitor online radicalization'] },
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Federal legislation', powers: ['Pass domestic terrorism statute', 'Increase NSGP funding', 'Platform accountability legislation'] },
  ],
  successCriteria: [
    'Full funding of the Nonprofit Security Grant Program (NSGP) at levels matching the threat -- current funding covers a fraction of applicant requests, leaving Jewish institutions and other targeted communities unprotected',
    'Federal domestic terrorism statute enacted with provisions specifically addressing ideologically motivated mass casualty attacks on houses of worship and community institutions',
    'Platform accountability legislation requiring social media companies to assess and mitigate radicalization risk -- Bowers was radicalized on Gab, and algorithmic amplification of replacement theory content on mainstream platforms feeds the pipeline',
    'Every antisemitic mass casualty attack prosecuted as both a federal hate crime and, where applicable, under any future domestic terrorism statute -- with sentences reflecting the severity of targeting people at prayer',
    'Mandatory annual FBI/DHS reporting on antisemitic threat indicators: incident counts by type, online threat assessment, organizational tracking, and resource allocation proportionate to the threat',
    'Comprehensive school and community education programs on the history of antisemitism, the Holocaust, and how conspiracy theories lead to violence -- ADL\'s 3,697 incidents in 2022 reflect a society that has failed at education',
    'Interstate coordination for threat identification -- the Colleyville synagogue hostage situation (2022) demonstrated that threats may originate across state lines, requiring coordinated intelligence sharing',
    'Complete public documentation of the radicalization pipeline for each major attack: what content was consumed, on what platforms, through what algorithmic recommendations, leading to what violent action',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Eleven Jews were murdered during Sabbath prayers. Antisemitic incidents are at record levels. Silence is complicity.',
      urgency: 'immediate',
      relevantMechanisms: ['Nonprofit Security Grant Program', 'Federal Hate Crime Act'],
      steps: [
        {
          step: 1,
          title: 'Report and Document Incidents',
          description: 'Report antisemitic incidents to the ADL (adl.org/reportincident), local police, and the FBI (tips.fbi.gov). Documentation creates the data that drives policy. Every unreported incident makes the threat statistically invisible.',
          estimatedTime: '15 minutes per incident',
          filingTarget: 'ADL (adl.org/reportincident); FBI (tips.fbi.gov); Local law enforcement',
        },
        {
          step: 2,
          title: 'Show Solidarity',
          description: 'Attend interfaith events. Visit synagogues. Show up for Jewish communities the way they show up for others. After Tree of Life, non-Jewish communities rallied around Pittsburgh synagogues -- this solidarity must be sustained, not just reactive.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Demand NSGP Full Funding',
          description: 'Contact your representatives to demand full funding of the Nonprofit Security Grant Program. Jewish institutions and other targeted communities need physical security -- armed guards, surveillance, bulletproof glass, active shooter protocols. The cost of antisemitism should not be borne by its targets.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your House and Senate representatives; House and Senate Appropriations Committees',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Map the radicalization pipeline. Document how replacement theory travels from mainstream media to extremist forums to mass murder.',
      urgency: 'high',
      relevantMechanisms: ['Federal Hate Crime Act', 'Domestic Terrorism Enhancement'],
      steps: [
        {
          step: 1,
          title: 'Radicalization Pathway Documentation',
          description: 'Investigate how Bowers and other antisemitic attackers were radicalized. What content did they consume? What platforms served it? What algorithms recommended it? Map the pathway from mainstream replacement theory rhetoric to extremist antisemitic content to mass violence.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Mainstream Amplification Investigation',
          description: 'Document how mainstream media figures and politicians amplify replacement theory and conspiracy theories that feed antisemitic violence. The Tree of Life shooter\'s manifesto echoed mainstream talking points about "invasion" -- trace the pipeline from cable news to Gab to the synagogue.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Security Burden Documentation',
          description: 'Document the financial and psychological burden that antisemitic violence places on Jewish communities: the cost of armed guards at Shabbat services, bulletproof glass in synagogues, active shooter drills for children, and the trauma of worshipping in fear.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Challenge platform immunity when algorithms amplify antisemitic content leading to violence.',
      urgency: 'high',
      relevantMechanisms: ['Federal Hate Crime Act', 'Domestic Terrorism Enhancement'],
      steps: [
        {
          step: 1,
          title: 'Platform Liability Litigation',
          description: 'Develop legal theories holding platforms liable when their algorithms amplify antisemitic content that demonstrably radicalizes users to violence. Challenge Section 230 immunity where platforms actively recommend extremist content.',
          legalBasis: ['Section 230 editorial conduct exception', 'Negligence per se', 'Products liability for recommendation algorithms'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Civil Suits Against Extremist Platforms',
          description: 'File civil suits against platforms (Gab, 8kun) that serve as primary radicalization venues for antisemitic violence. Use the Sines v. Kessler model to target platforms that knowingly host incitement to violence.',
          legalBasis: ['Civil conspiracy', 'Aiding and abetting tortious conduct', 'State anti-terrorism statutes'],
          estimatedTime: '12-36 months',
        },
        {
          step: 3,
          title: 'Victim Representation',
          description: 'Represent survivors and families of antisemitic attacks in civil litigation against perpetrators, enablers, and institutional failures. Ensure that civil recovery complements criminal prosecution.',
          legalBasis: ['State wrongful death', 'Intentional infliction of emotional distress', '18 U.S.C. Section 249 civil provisions'],
          estimatedTime: '12-36 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass federal domestic terrorism statute. Fully fund NSGP. Drive platform accountability legislation.',
      urgency: 'immediate',
      relevantMechanisms: ['Domestic Terrorism Enhancement', 'Nonprofit Security Grant Program'],
      steps: [
        {
          step: 1,
          title: 'Federal Domestic Terrorism Statute',
          description: 'Pass comprehensive domestic terrorism legislation that creates a domestic terrorism offense, mandates threat reporting, and requires resource allocation proportionate to the threat assessment.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Full NSGP Funding',
          description: 'Appropriate full funding for the Nonprofit Security Grant Program at levels matching the threat assessment. Current funding meets a fraction of applicant demand. Jewish institutions, mosques, Black churches, and other targeted communities need physical security now.',
          estimatedTime: 'Appropriations cycle',
        },
        {
          step: 3,
          title: 'Platform Accountability Legislation',
          description: 'Pass legislation requiring social media platforms to: assess radicalization risk from recommendation algorithms, report extremist content metrics, and face liability when algorithmic amplification contributes to mass violence.',
          estimatedTime: '6-12 months legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Prioritize domestic white supremacist terrorism -- FBI\'s own assessment identifies it as the top threat. Fund prevention over response.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Hate Crime Act', 'Domestic Terrorism Enhancement'],
      steps: [
        {
          step: 1,
          title: 'Threat Prevention Resource Allocation',
          description: 'Resource domestic terrorism prevention commensurate with the threat. The FBI identifies white supremacist terrorism as the #1 domestic threat -- allocate counterterrorism resources accordingly, with specific focus on antisemitic threat indicators.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Online Monitoring and Intervention',
          description: 'Monitor online platforms where antisemitic radicalization occurs (Gab, Telegram channels, 4chan/8kun). Develop intervention protocols for individuals exhibiting pre-attack indicators identified by the FBI\'s behavioral analysis unit.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'House of Worship Security Coordination',
          description: 'Establish direct coordination between FBI field offices and at-risk houses of worship. Provide threat briefings, security assessments, and rapid notification when credible threats are identified against religious institutions.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Require platforms to assess and mitigate radicalization risk from algorithmic amplification.',
      urgency: 'high',
      relevantMechanisms: ['Domestic Terrorism Enhancement'],
      steps: [
        {
          step: 1,
          title: 'Algorithmic Radicalization Auditing',
          description: 'Mandate independent audits of recommendation algorithms for radicalization risk. Require platforms to demonstrate that their systems do not progressively funnel users toward antisemitic or other extremist content.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Extremist Content Transparency',
          description: 'Require quarterly public reporting on extremist content metrics: volume of antisemitic content, enforcement actions, appeals, algorithmic amplification data, and coordination with law enforcement on credible threats.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Financial Infrastructure Enforcement',
          description: 'Coordinate with payment processors, crowdfunding platforms, and cryptocurrency exchanges to prevent antisemitic organizations from using financial infrastructure. Ensure that platforms like Gab cannot monetize hate through advertising and donations.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
