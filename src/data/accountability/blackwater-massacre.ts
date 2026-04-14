import type { AccountabilityData } from '@/types/accountability';

export const blackwaterAccountability: AccountabilityData = {
  investigationSlug: 'blackwater-massacre',

  crimeSummary: 'On September 16, 2007, Blackwater USA military contractors opened fire in Nisour Square, Baghdad, killing 17 Iraqi civilians and wounding 20 more in an unprovoked massacre. The Blackwater convoy, codenamed "Raven 23," entered the traffic circle and began shooting at civilians in their cars, including women and children. Witness accounts from both Iraqi civilians and U.S. military personnel confirmed the attack was entirely unprovoked. The youngest victim was 9-year-old Ali Kinani, shot in the head while sitting in his father\'s car. Blackwater founder Erik Prince had built a billion-dollar private military empire through no-bid State Department contracts, creating an armed force that operated outside U.S. military chain of command and Iraqi law (under CPA Order 17 granting contractor immunity). Four Blackwater guards were eventually convicted: Nicholas Slatten (first-degree murder, life sentence), Paul Slough, Evan Liberty, and Dustin Heard (manslaughter, 30 years each). In December 2020, President Trump pardoned all four men. Erik Prince was never charged and went on to found new private military ventures.',

  totalHarm: '17 Iraqi civilians killed, 20+ wounded in the Nisour Square massacre alone. Blackwater was involved in 195 shooting incidents in Iraq between 2005-2007, in 163 of which Blackwater fired first. The broader harm includes the fundamental undermining of accountability for military operations through privatization  -  creating a shadow military that operated outside the laws of war and beyond congressional oversight. The pardons erased the only accountability ever achieved.',

  victimsAffected: '17 killed at Nisour Square including 9-year-old Ali Kinani. 20+ wounded. Families of victims who spent 13 years pursuing justice only to see convictions pardoned. The broader Iraqi population subjected to unaccountable armed contractors. U.S. military personnel whose mission was undermined by contractor misconduct. American taxpayers who funded over $1 billion in Blackwater contracts.',

  primaryTargets: [
    {
      name: 'Erik Prince',
      role: 'Founder and CEO of Blackwater USA/Worldwide. Built the private military empire, secured the no-bid contracts, and created the culture of impunity that led to the massacre.',
      currentStatus: 'Never criminally charged for Nisour Square or any Blackwater operations. Sold Blackwater (renamed Xe Services, then Academi, now part of Constellis). Founded Frontier Services Group with Chinese backing. Has proposed privatizing the war in Afghanistan to Trump administration. Reportedly involved in setting up private military operations in Libya, Mozambique, and UAE. Estimated net worth: $2+ billion (inherited and earned). Sister is Betsy DeVos, former Secretary of Education.',
      accountabilityPath: 'Prince created the organizational conditions for the massacre through a culture of aggression, inadequate training, lack of accountability mechanisms, and aggressive pursuit of no-bid contracts. Congressional investigation into his knowledge of contractor misconduct. Tax fraud investigation (no SOL). Investigation of alleged arms trafficking violations. State Department IG investigation of contract fraud. The fact that the CEO of a company whose employees committed mass murder was never personally held accountable is an indictment of the entire privatized military model.',
      obstacles: [
        'Never charged personally for Nisour Square',
        'Contractor immunity under CPA Order 17',
        'Extraordinary political connections (DeVos family)',
        'Operations increasingly conducted overseas through foreign entities',
        'Massive personal wealth enables indefinite legal defense',
      ],
    },
    {
      name: 'Nicholas Slatten',
      role: 'Blackwater contractor who fired the first shots at Nisour Square, killing the driver of the first car (a medical student).',
      currentStatus: 'Convicted of first-degree murder in 2014. Retried in 2018, convicted again. Sentenced to life in prison. PARDONED by President Trump on December 22, 2020. Free.',
      accountabilityPath: 'Slatten\'s pardon was among the most controversial of the Trump presidency. He was convicted twice by juries of his peers for first-degree murder. The pardon power is constitutionally absolute, but the political accountability for granting it is not. Congressional investigation into the pardon decision process. Civil wrongful death actions by victims\' families (pardons do not affect civil liability).',
      obstacles: [
        'Presidential pardon eliminates criminal liability',
        'Double jeopardy prevents re-prosecution for same charges',
        'Civil actions face jurisdictional challenges',
      ],
    },
    {
      name: 'Paul Slough, Evan Liberty, Dustin Heard',
      role: 'Blackwater contractors convicted of voluntary manslaughter and attempted manslaughter for their roles in the Nisour Square massacre.',
      currentStatus: 'Each convicted and sentenced to 30 years. All three PARDONED by President Trump on December 22, 2020. Free.',
      accountabilityPath: 'Same as Slatten  -  pardons eliminate criminal liability but not civil. Civil wrongful death claims. International accountability mechanisms. Political accountability for the pardons.',
      obstacles: [
        'Presidential pardons eliminate criminal liability',
        'Civil jurisdiction challenges',
      ],
    },
    {
      name: 'U.S. State Department (Contract Authority)',
      role: 'Issued over $1 billion in contracts to Blackwater without adequate oversight, accountability mechanisms, or rules of engagement.',
      currentStatus: 'State Department eventually terminated Blackwater\'s Iraq contract but the company simply renamed itself and continued receiving government contracts. The systemic failure of oversight has never been fully addressed.',
      accountabilityPath: 'Congressional investigation into the contracting process. Who approved the no-bid contracts? What oversight was performed? Why was Blackwater retained after documented patterns of shooting civilians? Inspector General audit of all private military contracts.',
      obstacles: [
        'Government sovereign immunity',
        'Classification of contract details',
        'Revolving door between contractors and oversight bodies',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'Alien Tort Statute (ATS)',
      statute: '28 U.S.C. § 1350',
      description: 'Allows foreign nationals to sue in U.S. courts for torts committed in violation of international law. Iraqi victims and families can pursue civil claims.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years',
      reachesHeirs: true,
      authorizedActors: ['Victims\' families', 'Human rights organizations'],
      applicability: 'directly_applicable',
      notes: 'Civil claims are not affected by presidential pardons. Families of Nisour Square victims can pursue wrongful death claims.',
    },
    {
      name: 'Military Extraterritorial Jurisdiction Act (MEJA)',
      statute: '18 U.S.C. §§ 3261-3267',
      description: 'Extends federal criminal jurisdiction to contractor personnel supporting DoD missions. This was the statute under which the Blackwater guards were originally charged.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for most offenses; no SOL for murder',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI'],
      applicability: 'directly_applicable',
      notes: 'Pardons prevented continued criminal accountability. But MEJA jurisdiction over other Blackwater incidents (195 shootings) may not be foreclosed.',
    },
    {
      name: 'War Crimes Act',
      statute: '18 U.S.C. § 2441',
      description: 'Criminalizes grave breaches of the Geneva Conventions by U.S. nationals, including willful killing of protected persons.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'Military prosecutors'],
      applicability: 'potentially_applicable',
      notes: 'No statute of limitations for war crimes. Question of whether Nisour Square constitutes a grave breach under Geneva Conventions. Pardoned individuals cannot be re-tried for the same conduct, but other incidents and other individuals could be investigated.',
    },
    {
      name: 'Congressional Subpoena Power',
      statute: 'U.S. Constitution Art. I, § 8',
      description: 'Congress can investigate the entire Blackwater contracting arrangement, the culture of impunity, and the pardon decision process.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['House Oversight Committee', 'Senate Armed Services Committee'],
      applicability: 'directly_applicable',
      notes: 'Rep. Henry Waxman conducted significant hearings in 2007. Further investigation needed into privatized military accountability.',
    },
    {
      name: 'International Criminal Court',
      statute: 'Rome Statute (though U.S. is not a party)',
      description: 'ICC has jurisdiction over war crimes. While the U.S. has not ratified the Rome Statute, ICC can exercise jurisdiction over crimes committed on the territory of state parties or through Security Council referral.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['ICC Prosecutor'],
      applicability: 'potentially_applicable',
      notes: 'Iraq is not an ICC state party either, but ICC has investigated contractor conduct in other contexts. Political and practical obstacles to ICC jurisdiction are significant.',
    },
  ],

  wealthTrace: [
    {
      name: 'Erik Prince / Prince Family Wealth',
      relationship: 'Founder of Blackwater, recipient of over $1 billion in government contracts',
      transferMethod: 'Prince inherited an estimated $500 million from his father Edgar Prince (auto parts fortune). Built Blackwater into a billion-dollar government contractor. Sold company in 2010. Founded Frontier Services Group (Hong Kong-listed) with Chinese state-linked backing. Investment in private military ventures in Africa, Middle East.',
      estimatedValue: 'Estimated net worth: $2+ billion',
      legalEntities: ['Frontier Services Group (HKEX: 0500)', 'Various private military entities', 'Prince family trusts', 'DeVos family connections'],
      recoveryMechanisms: ['Civil Wrongful Death', 'Corporate Veil Piercing', 'Tax Fraud Investigation'],
    },
    {
      name: 'Blackwater / Academi / Constellis',
      relationship: 'Corporate successor entities that inherited Blackwater\'s contracts and profits',
      transferMethod: 'Blackwater renamed to Xe Services (2009), then Academi (2011), then acquired by Constellis Holdings (2014). Name changes designed to escape brand toxicity while retaining government contracts.',
      estimatedValue: 'Constellis reportedly valued at $1+ billion',
      legalEntities: ['Constellis Holdings', 'Triple Canopy', 'Former Academi assets'],
      recoveryMechanisms: ['Successor Liability', 'Civil Claims Against Corporate Assets'],
    },
    {
      name: 'Government Contract Payments',
      relationship: 'Taxpayer funds that flowed to Blackwater for private military services',
      transferMethod: 'State Department paid Blackwater over $1 billion through Worldwide Personal Protective Services (WPPS) contract. Additional contracts with CIA, DoD, and other agencies. Exact total unknown due to classified contracts.',
      estimatedValue: '$1+ billion documented; total including classified contracts unknown',
      legalEntities: ['State Department WPPS contract', 'Various DoD task orders', 'CIA contracts (classified)'],
      recoveryMechanisms: ['Congressional Investigation', 'Inspector General Audit', 'False Claims Act'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'House Oversight Committee',
      title: 'U.S. House Committee on Oversight and Accountability',
      jurisdiction: 'Federal congressional oversight',
      powers: [
        'Investigate private military contracting practices',
        'Subpoena Blackwater/Constellis records',
        'Investigate the pardon decision process',
        'Hold hearings on contractor accountability reform',
      ],
    },
    {
      name: 'State Department Inspector General',
      title: 'IG, U.S. Department of State',
      jurisdiction: 'State Department contract oversight',
      powers: [
        'Audit all private security contracts',
        'Investigate contracting officer decisions',
        'Refer findings to DOJ for prosecution',
        'Recommend structural reforms',
      ],
    },
    {
      name: 'Senate Armed Services Committee',
      title: 'U.S. Senate Armed Services Committee',
      jurisdiction: 'Military operations and contracting',
      powers: [
        'Investigate military contractor oversight',
        'Reform MEJA jurisdiction and enforcement',
        'Mandate rules of engagement for private contractors',
      ],
    },
    {
      name: 'International Criminal Court Prosecutor',
      title: 'Prosecutor of the ICC',
      jurisdiction: 'International criminal jurisdiction',
      powers: [
        'Investigate war crimes committed by U.S. contractors',
        'Issue arrest warrants for individuals accused of grave breaches',
      ],
    },
  ],
  successCriteria: [
    'Civil wrongful death judgments against Blackwater/Academi/Constellis and Erik Prince personally for the 17 civilians murdered at Nisour Square, pardons do not extinguish civil liability',
    'Congressional investigation of the pardon process, who lobbied for the pardons, what role did Erik Prince play, and what was the DOJ recommendation that was overridden',
    'Legislation mandating UCMJ jurisdiction over all private military contractors operating in conflict zones, closing the accountability gap that allowed Blackwater to operate outside military law',
    'Investigation of all 195 Blackwater shooting incidents in Iraq, Nisour Square was only one of hundreds of incidents, most never investigated',
    'Full financial accounting of Erik Prince\'s current private military operations through Frontier Services Group and other entities operating in Libya, Mozambique, UAE, and China',
    'Arms trafficking investigation into allegations of unauthorized Blackwater weapons transfers in violation of the Arms Export Control Act',
    'Piercing the corporate veil of Blackwater/Xe/Academi/Constellis to reach Erik Prince\'s personal assets, he renamed the company three times to evade accountability',
    'International criminal court referral for the Nisour Square massacre and other contractor killings that constitute war crimes under international humanitarian law',
    'Transparent contracting requirements for all future private military engagements including mandatory incident reporting, independent investigation authority, and binding rules of engagement',
    'Reparations for all Iraqi civilian victims of private military contractor violence, not just Nisour Square but the full scope of contractor killings across the Iraq war',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'Seventeen civilians were murdered, including a child. Four men were convicted. A president pardoned them all. As a citizen, demand accountability for the pardon, support reform of private military contracting, and honor the victims.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Subpoena Power', 'Alien Tort Statute (ATS)'],
      steps: [
        {
          step: 1,
          title: 'Demand Congressional Investigation of Pardons',
          description: 'Contact your representatives demanding investigation into the decision to pardon four convicted war criminals. Reference the destruction of 13 years of legal accountability.',
          filingTarget: 'https://www.congress.gov/members/find-your-member',
          estimatedTime: '30 minutes',
        },
        {
          step: 2,
          title: 'Support Private Military Contractor Reform',
          description: 'Support legislation requiring private military contractors to operate under the same rules of engagement, oversight, and accountability as uniformed military personnel.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Support Victims\' Families',
          description: 'Support organizations representing Nisour Square victims\' families in their continued pursuit of civil justice.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Erik Prince has never been held accountable. His new ventures in private military operations across Africa, the Middle East, and Asia remain largely uninvestigated. The pardon process has never been fully examined.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Subpoena Power', 'War Crimes Act'],
      steps: [
        {
          step: 1,
          title: 'Track Erik Prince Current Operations',
          description: 'Investigate Prince\'s current private military and intelligence ventures through Frontier Services Group and other entities. Track operations in Libya, Mozambique, UAE, and China connections.',
          estimatedTime: '4-8 weeks',
        },
        {
          step: 2,
          title: 'Investigate Pardon Decision',
          description: 'Who lobbied for the pardons? What was the process? Did Erik Prince play a role? What was the DOJ recommendation?',
          estimatedTime: '2-4 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Pardons do not extinguish civil liability. Wrongful death claims, civil RICO, and international human rights litigation remain available.',
      urgency: 'high',
      relevantMechanisms: ['Alien Tort Statute (ATS)', 'Military Extraterritorial Jurisdiction Act (MEJA)'],
      steps: [
        {
          step: 1,
          title: 'Civil Wrongful Death Actions',
          description: 'Pursue civil wrongful death claims on behalf of Nisour Square victims\' families. Presidential pardons do not affect civil liability. ATS provides federal jurisdiction.',
          legalBasis: ['28 U.S.C. § 1350', 'State wrongful death statutes'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Corporate Veil Piercing',
          description: 'Pierce the corporate veil of Blackwater/Xe/Academi/Constellis to reach Erik Prince personally for corporate culture that enabled the massacre.',
          legalBasis: ['State corporate law', 'Common law alter ego doctrine'],
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'The privatization of military force created a shadow army that operated outside constitutional accountability. The pardons erased the only justice ever achieved. Congressional action is imperative.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Subpoena Power', 'War Crimes Act'],
      steps: [
        {
          step: 1,
          title: 'Contractor Accountability Act',
          description: 'Introduce legislation mandating UCMJ jurisdiction over all private military contractors operating in conflict zones. Close the accountability gap that allowed Blackwater to operate outside military law.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'Pardon Transparency',
          description: 'Investigate the pardon process. Subpoena White House records regarding lobbying for the Blackwater pardons.',
          estimatedTime: '2-4 months',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Pardons foreclose criminal prosecution for the pardoned conduct. But other Blackwater incidents (195 shootings), financial crimes, and arms trafficking allegations remain investigable.',
      urgency: 'standard',
      relevantMechanisms: ['Military Extraterritorial Jurisdiction Act (MEJA)', 'War Crimes Act'],
      steps: [
        {
          step: 1,
          title: 'Investigate Other Blackwater Incidents',
          description: 'Blackwater was involved in 195 shooting incidents in Iraq. Only Nisour Square was prosecuted. Investigate other incidents where civilians were killed or wounded.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Arms Trafficking Investigation',
          description: 'Investigate allegations of Blackwater arms trafficking and unauthorized weapons transfers.',
          legalBasis: ['Arms Export Control Act', '22 U.S.C. § 2778'],
          estimatedTime: '6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Reform private military contractor oversight to prevent future Nisour Squares. Mandate accountability mechanisms, transparent contracting, and rules of engagement.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Subpoena Power'],
      steps: [
        {
          step: 1,
          title: 'Contractor Oversight Framework',
          description: 'Develop and implement comprehensive oversight framework for private military contractors including mandatory incident reporting, independent investigation authority, and binding rules of engagement.',
          estimatedTime: '12-18 months',
        },
        {
          step: 2,
          title: 'Contractor Licensing Requirements',
          description: 'Implement licensing requirements for private military companies including mandatory insurance, background checks for all armed personnel, and revocation authority for companies with patterns of civilian harm.',
          estimatedTime: '12-18 months',
        },
        {
          step: 3,
          title: 'Cost-Benefit Analysis of Privatization',
          description: 'Conduct comprehensive analysis of private military contracting costs vs. using uniformed military personnel. The supposed cost savings of privatization disappeared when accounting for the hidden costs of impunity and civilian harm.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
