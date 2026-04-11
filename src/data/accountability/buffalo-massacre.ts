import type { AccountabilityData } from '@/types/accountability';

export const buffaloMassacreAccountability: AccountabilityData = {
  investigationSlug: 'buffalo-massacre',
  crimeSummary: 'On May 14, 2022, 18-year-old white supremacist Payton Gendron drove 200 miles to a Tops Friendly Markets grocery store in a predominantly Black neighborhood in Buffalo, New York, and murdered 10 people, wounding 3 others. Gendron had been radicalized online, specifically by the "Great Replacement" conspiracy theory promoted by white nationalist circles and amplified by mainstream media figures like Tucker Carlson. He livestreamed the massacre on Twitch, wore body armor, and specifically chose a Black neighborhood to maximize casualties. His 180-page manifesto borrowed heavily from the Christchurch shooter\'s writings.',
  totalHarm: '10 murdered, 3 wounded. All 10 killed were Black: Ruth Whitfield (86), Roberta Drury (32), Andre Mackniel (53), Heyward Patterson (67), Geraldine Talley (62), Celestine Chaney (65), Katherine Massey (72), Margus Morrison (52), Pearl Young (77), Aaron Salter Jr. (55, retired police officer). A community\'s grocery store  -  a lifeline in a food desert  -  became a site of mass murder.',
  victimsAffected: '10 murdered, 3 wounded. The East Buffalo community lost both community members and access to their primary grocery store. Families of victims. Black Americans targeted by the Great Replacement ideology.',
  primaryTargets: [
    {
      name: 'Payton Gendron',
      role: 'Perpetrator. Self-radicalized through online white supremacist content. Specifically motivated by Great Replacement theory promoting the idea that white people are being "replaced" through immigration and demographics.',
      currentStatus: 'Pleaded guilty to state charges (2022)  -  sentenced to life without parole. Pleaded guilty to federal hate crime charges (2023)  -  sentenced to life in prison.',
      accountabilityPath: 'Fully convicted. Investigation should focus on the radicalization pipeline and prevention.',
      obstacles: [],
    },
    {
      name: 'Great Replacement Theory Amplifiers',
      role: 'Tucker Carlson devoted over 400 episodes to some version of the Great Replacement theory. White nationalist content on 4chan, 8kun, and other platforms directly radicalized Gendron. The theory was amplified from fringe to mainstream.',
      currentStatus: 'Carlson fired from Fox News (2023) but continues on X/Twitter. 4chan/8kun continue operating with minimal moderation. No accountability for amplification of radicalizing ideology.',
      accountabilityPath: 'Platform accountability. Advertiser pressure. Civil litigation exploring whether amplification of replacement theory constitutes material support for violence.',
      obstacles: ['First Amendment protection for speech', 'Causation difficult to prove legally', 'Section 230 protection for platforms'],
    },
  ],
  legalMechanisms: [
    { name: 'Federal Hate Crime', statute: '18 U.S.C. § 249', description: 'Gendron pleaded guilty to federal hate crimes. Sentenced to life.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'NY Domestic Terrorism Statute', statute: 'NY Penal Law § 490.25 (Domestic Act of Terrorism Motivated by Hate)', description: 'Gendron was the first person charged under New York\'s domestic terrorism statute, enacted in 2020.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['NY prosecutors'], applicability: 'directly_applicable' },
    { name: 'Assault Weapons Ban', statute: 'Proposed federal legislation; NY SAFE Act', description: 'Gendron used an AR-15 style rifle he illegally modified to accept high-capacity magazines despite NY\'s assault weapons ban.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'Victim Compensation and Community Recovery', relationship: 'Support for victims and community', transferMethod: 'Community donations, state victim compensation, and national fundraising. Tops rebuilt and reopened. Federal funding for community recovery.', estimatedValue: 'Millions in compensation and community investment', legalEntities: ['Tops Markets', 'Buffalo community organizations'], recoveryMechanisms: ['Crime Victims Fund', 'Civil litigation', 'Community investment'] },
  ],
  authoritiesWithPower: [
    { name: 'FBI', title: 'FBI Counterterrorism Division', jurisdiction: 'Domestic terrorism', powers: ['Investigate white supremacist networks', 'Monitor online radicalization', 'Prevent future attacks'] },
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Federal legislation', powers: ['Assault weapons ban', 'Domestic terrorism statute', 'Platform accountability legislation'] },
  ],
  successCriteria: [
    'Federal assault weapons ban enacted with high-capacity magazine prohibition -- Gendron used an AR-15 style rifle he illegally modified, and the availability of military-style weapons to 18-year-olds is a policy choice, not a constitutional requirement',
    'Federal domestic terrorism statute enacted providing law enforcement with the same tools for domestic white supremacist terrorism that exist for international terrorism -- the Buffalo massacre, El Paso, Pittsburgh, and Christchurch are the same ideology producing the same mass casualties',
    'Platform accountability legislation requiring algorithmic auditing and creating liability for recommendation engines that amplify radicalizing content -- Gendron was radicalized online through algorithmically amplified content',
    'Tucker Carlson and Fox News held civilly accountable for amplifying the Great Replacement theory across 400+ episodes -- the direct line from mainstream amplification to mass murder radicalization must be documented and litigated',
    'Comprehensive threat assessment reform ensuring that when an 18-year-old makes a threat at school (as Gendron did), the evaluation and follow-up are sufficient to prevent mass violence -- Gendron was flagged, briefly evaluated, and released',
    'Tops Friendly Markets location preserved as a memorial alongside full community investment -- the store was a lifeline in a food desert, and the community lost both neighbors and access to food',
    'Complete documentation of the mainstream-to-extremist radicalization pipeline that produced Gendron: every website, every video, every algorithm that moved an 18-year-old from curiosity to ideology to mass murder in a Black neighborhood 200 miles from his home',
    'Federal funding for community-based violence prevention programs specifically targeting online radicalization of young men by white supremacist ideology -- prevention must match the scale of the threat',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Ten Black Americans murdered while grocery shopping. The ideology that radicalized the killer is being broadcast on mainstream media.',
      urgency: 'immediate',
      relevantMechanisms: ['Assault Weapons Ban', 'Federal Hate Crime'],
      steps: [
        {
          step: 1,
          title: 'Support Assault Weapons Ban',
          description: 'Contact representatives to support federal assault weapons legislation with a high-capacity magazine ban. Gendron illegally modified his weapon to accept high-capacity magazines in New York -- but in most states, no modification would have been needed.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your House and Senate representatives; Senate Judiciary Committee',
        },
        {
          step: 2,
          title: 'Counter Replacement Theory',
          description: 'When you encounter Great Replacement rhetoric -- on TV, online, or in conversation -- challenge it directly. Contact advertisers on programs that amplify replacement theory. Report extremist content to platforms and the FBI (tips.fbi.gov).',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Support Buffalo Community',
          description: 'Support the families of the 10 victims and the East Buffalo community. Support organizations working to address the food desert conditions that made Tops the only grocery store accessible to many residents.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document the radicalization pipeline from mainstream media amplification to mass murder.',
      urgency: 'immediate',
      relevantMechanisms: ['NY Domestic Terrorism Statute', 'Federal Hate Crime'],
      steps: [
        {
          step: 1,
          title: 'Mainstream-to-Extremist Pipeline',
          description: 'Map the pipeline from Tucker Carlson\'s 400+ replacement theory episodes to 4chan/8kun content to Gendron\'s 180-page manifesto to mass murder. Document how mainstream amplification creates the ideological foundation for extremist violence.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Algorithmic Radicalization',
          description: 'Investigate how platform recommendation algorithms funnel users from mainstream conservative content to white supremacist extremism. Track the algorithmic pathway from curiosity to radicalization.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Threat Assessment Failure',
          description: 'Investigate the specific failure that allowed Gendron to be briefly evaluated after a school threat and released without follow-up. How many similar threat assessments produce similar non-results? What would a functional system look like?',
          estimatedTime: '2-4 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Push for platform accountability. Challenge Section 230 in cases involving algorithmic amplification of radicalizing content.',
      urgency: 'high',
      relevantMechanisms: ['Federal Hate Crime', 'NY Domestic Terrorism Statute'],
      steps: [
        {
          step: 1,
          title: 'Algorithmic Accountability Litigation',
          description: 'Develop legal theory for platform liability when recommendation algorithms amplify radicalizing content that directly contributes to mass violence. Gonzalez v. Google left the door open for cases involving algorithmic promotion beyond neutral hosting.',
          legalBasis: ['Section 230 exceptions for recommendation algorithms', 'State negligence theories', 'Gonzalez v. Google LLC (2023)'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Advertiser Accountability',
          description: 'Develop legal frameworks for holding media companies accountable when they knowingly amplify ideologies directly linked to mass violence. Explore whether Great Replacement amplification constitutes incitement or material support.',
          legalBasis: ['State tort law', 'Brandenburg v. Ohio incitement standard', 'Material support theories'],
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'Victim Family Representation',
          description: 'Represent victims\' families in civil actions against entities that contributed to Gendron\'s radicalization: platforms that hosted and amplified the content, and any entities that facilitated his access to weapons despite his known threat history.',
          legalBasis: ['Wrongful death', 'Negligence', 'NY domestic terrorism civil provisions'],
          estimatedTime: '24-48 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass assault weapons ban. Fund domestic terrorism prevention. Pass platform accountability legislation.',
      urgency: 'immediate',
      relevantMechanisms: ['Assault Weapons Ban', 'NY Domestic Terrorism Statute'],
      steps: [
        {
          step: 1,
          title: 'Federal Assault Weapons Ban',
          description: 'Pass comprehensive federal assault weapons legislation with a high-capacity magazine ban. The 1994 ban expired in 2004. Since then, mass shootings with assault-style weapons have increased dramatically. Gendron\'s choice of weapon was designed to maximize casualties.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Domestic Terrorism Statute',
          description: 'Pass a federal domestic terrorism statute providing the same investigative and prosecutorial tools for domestic white supremacist terrorism that currently exist for international terrorism. The asymmetry in tools is a policy choice.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Fund Prevention Programs',
          description: 'Appropriate dedicated federal funding for community-based violence prevention programs targeting online radicalization of young men. DHS Grant Programs for Targeted Violence and Terrorism Prevention need substantial expansion.',
          estimatedTime: 'Appropriations cycle',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Gendron was briefly evaluated after making a threat at school, then released. Improve threat assessment.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Hate Crime', 'NY Domestic Terrorism Statute'],
      steps: [
        {
          step: 1,
          title: 'Reform Threat Assessment Protocols',
          description: 'Overhaul threat assessment protocols to include mandatory follow-up after initial evaluation. Gendron was briefly evaluated and released -- the system failed at the most critical moment. Multi-disciplinary threat assessment teams with follow-up requirements are the minimum standard.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Online Radicalization Monitoring',
          description: 'Expand FBI domestic terrorism monitoring of online white supremacist radicalization spaces. The Christchurch, El Paso, and Buffalo shooters all announced their attacks or left manifesto breadcrumbs online. Detection must improve.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Domestic Terrorism Resource Parity',
          description: 'Allocate resources to domestic terrorism investigation proportionate to the threat. The FBI Director has acknowledged DVE as the top domestic threat -- resource allocation must match that assessment.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Mandate platform transparency on algorithmic amplification of extremist content.',
      urgency: 'high',
      relevantMechanisms: ['Assault Weapons Ban'],
      steps: [
        {
          step: 1,
          title: 'Algorithmic Transparency Requirements',
          description: 'Require platforms to disclose and allow independent auditing of recommendation algorithms that may amplify radicalizing content. If an algorithm moves a user from news to extremism, the platform must be able to detect and disclose that pathway.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Age Restrictions for Weapon Purchases',
          description: 'Raise the federal minimum age for semi-automatic rifle purchases to 21. Gendron was 18. Many mass shooters have been 18-20. If you cannot buy a handgun until 21, the same should apply to weapons capable of higher casualty rates.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Extremist Content Reporting Requirements',
          description: 'Require platforms to report to law enforcement when users access, create, or share content that constitutes specific, credible threats of mass violence -- similar to existing CSAM reporting requirements.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
