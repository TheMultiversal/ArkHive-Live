import type { AccountabilityData } from '@/types/accountability';

export const bothamJeanAccountability: AccountabilityData = {
  investigationSlug: 'botham-jean-murder',
  crimeSummary: 'On September 6, 2018, off-duty Dallas Police Officer Amber Guyger entered Botham Jean\'s apartment  -  one floor above her own  -  and shot him dead while he was eating ice cream on his couch. Jean, a 26-year-old accountant from St. Lucia, was an active member of the Dallas West Church of Christ. Guyger initially claimed she thought she had entered her own apartment and mistook Jean for a burglar. Investigation revealed she had been sexting with her married police partner during and after the shooting, raising questions about her mental state. The case exposed how police officers receive preferential treatment in the legal system  -  Guyger was not arrested for three days, was initially charged only with manslaughter, and a search warrant was executed on JEAN\'S apartment (not Guyger\'s) seeking to find marijuana.',
  totalHarm: 'Botham Jean murdered at age 26 in his own home. His family permanently destroyed. The response  -  searching the VICTIM\'s apartment for drugs, three-day delay in arrest, preferential treatment  -  inflicted secondary harm on the Black community. The case became a symbol of how Black people are not safe even in their own homes.',
  victimsAffected: 'Botham Shem\'Akel Jean, age 26. Born in Castries, St. Lucia. Graduate of Harding University. Active church member. PricewaterhouseCoopers accountant. His mother Allison Jean. His father Bertrum Jean. His sister Allisa Findley. The Dallas Black community. Black Americans who saw their safety in their own homes questioned.',
  primaryTargets: [
    {
      name: 'Amber Guyger',
      role: 'Off-duty Dallas Police Officer who entered Botham Jean\'s apartment and shot him dead. Claimed she mistook his apartment for hers.',
      currentStatus: 'Convicted of murder (October 2019)  -  sentenced to 10 years in prison. In April 2024, Texas appellate court upheld the conviction. Eligible for parole after 5 years. The sentence was criticized as extraordinarily lenient for murder.',
      accountabilityPath: 'Convicted but sentence was lenient. Civil suit by Jean family settled with City of Dallas.',
      obstacles: ['Lenient sentence for murder', 'Early parole eligibility'],
    },
    {
      name: 'Dallas Police Department Initial Response',
      role: 'DPD response exhibited systematic bias: Guyger was not arrested for THREE DAYS after the shooting. She was allowed to leave the scene. A search warrant was executed on JEAN\'S apartment  -  the victim\'s home  -  where police found marijuana and publicized it, attempting to assassinate the character of the man they failed to protect.',
      currentStatus: 'Texas Rangers took over investigation from DPD due to conflict of interest. DPD faced no institutional consequences. The officers who executed the search warrant on Jean\'s apartment faced no discipline.',
      accountabilityPath: 'Systemic reform of DPD policies. External oversight of police-involved shootings.',
      obstacles: ['Police union protection', 'Blue wall of silence', 'Institutional resistance to reform'],
    },
  ],
  legalMechanisms: [
    { name: 'State Murder Prosecution', statute: 'Texas Penal Code § 19.02', description: 'Guyger convicted of murder (not manslaughter). The jury rejected her claim of self-defense. Sentenced to 10 years  -  far below the 5-99 year range for murder in Texas.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Dallas County DA'], applicability: 'directly_applicable' },
    { name: 'Civil Rights (42 U.S.C. § 1983)', statute: '42 U.S.C. § 1983', description: 'Jean family filed federal civil rights lawsuit against Guyger and the City of Dallas. The city settled  -  terms not fully public.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['Federal courts', 'DOJ'], applicability: 'directly_applicable' },
    { name: 'Police Accountability Reform', statute: 'Various proposed (George Floyd Justice in Policing Act)', description: 'National police accountability legislation would address qualified immunity, use of force standards, and mandatory independent investigations of police shootings.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'City of Dallas Settlement', relationship: 'Taxpayer-funded settlement for police misconduct', transferMethod: 'City of Dallas settled civil rights lawsuit with Jean family. Dallas taxpayers  -  not Officer Guyger  -  bore the financial cost. This is the standard pattern: officers commit misconduct, cities pay, taxpayers foot the bill, and police budgets are unaffected.', estimatedValue: 'Settlement amount not fully disclosed (estimated multimillions)', legalEntities: ['City of Dallas', 'Dallas Police Department'], recoveryMechanisms: ['Municipal insurance', 'Individual officer liability (rarely enforced)'] },
  ],
  authoritiesWithPower: [
    { name: 'Dallas County DA', title: 'Dallas County District Attorney', jurisdiction: 'Criminal prosecution', powers: ['Prosecute police officers', 'Empanel grand juries', 'Set charging decisions'] },
    { name: 'Texas Legislature', title: 'Texas State Legislature', jurisdiction: 'State law reform', powers: ['Reform castle doctrine', 'Mandate independent investigations', 'Police accountability legislation'] },
  ],
  successCriteria: [
    'Mandatory independent investigation of all police-involved killings by an agency entirely separate from the officer\'s department -- the DPD investigating its own officer\'s killing of Botham Jean was a structural conflict of interest',
    'Legislation prohibiting the search of a victim\'s home in officer-involved shootings without specific probable cause of criminal activity by the victim -- the search warrant executed on Jean\'s apartment to find marijuana was victim character assassination',
    'Same-day arrest protocols for officers involved in off-duty shootings -- Guyger was not arrested for three days, a privilege no civilian suspect would receive under identical circumstances',
    'Murder sentencing reform ensuring that 10 years for the murder of an unarmed man in his own home is not an available outcome -- the 5-99 year range in Texas should have resulted in a sentence reflecting the gravity of the crime',
    'Federal George Floyd Justice in Policing Act enacted, ending qualified immunity, establishing national use of force standards, and creating mandatory independent prosecution in police killings',
    'Dallas Police Department institutional reforms: mandatory bias training, independent civilian oversight board with subpoena power, and policy prohibiting the public release of victim\'s criminal history absent relevance to the shooting',
    'Complete public documentation of the differential treatment: three-day arrest delay, victim\'s apartment searched for drugs, officer allowed to leave the scene -- contrasted with how a civilian who entered the wrong apartment and killed a police officer would be treated',
    'Civil rights investigation by DOJ into DPD\'s pattern and practice of differential treatment of officer suspects versus civilian suspects in shooting investigations',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'A man was murdered eating ice cream in his own home. They searched HIS apartment for drugs. She got 10 years.',
      urgency: 'high',
      relevantMechanisms: ['Police Accountability Reform', 'Civil Rights (42 U.S.C. Section 1983)'],
      steps: [
        {
          step: 1,
          title: 'Demand Independent Investigations',
          description: 'Advocate for state laws requiring independent investigation of all police-involved shootings -- not investigation by the officer\'s own department. DPD investigated its own officer in the Jean case before the Texas Rangers took over.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your state legislators; city council; police oversight board',
          templateText: 'Dear [State Legislator],\n\nOn September 6, 2018, off-duty Dallas Police Officer Amber Guyger entered Botham Jean\'s apartment and murdered him. DPD\'s response: she was not arrested for three days. A search warrant was executed on JEAN\'S apartment -- to find marijuana. She received 10 years for murder.\n\nI urge you to:\n1. Pass mandatory independent investigation laws for police-involved killings\n2. Prohibit victim character assassination in officer-involved shooting investigations\n3. Require same-day arrest protocols for officer suspects\n\nBotham Jean deserved better. We all do.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Remember Botham Jean',
          description: 'Share Botham Jean\'s story. He was 26, from St. Lucia, a Harding University graduate, active church member, PricewaterhouseCoopers accountant. He was murdered eating ice cream in his own apartment. He is not a statistic -- he was a person.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Support Police Reform Organizations',
          description: 'Support organizations fighting for police accountability reform: Campaign Zero, NAACP Legal Defense Fund, Equal Justice Initiative. These organizations work on the systemic changes needed to prevent future Botham Jeans.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document systemic bias in police shooting investigations. How often are victims\' homes searched? How long are arrest delays?',
      urgency: 'high',
      relevantMechanisms: ['State Murder Prosecution', 'Police Accountability Reform'],
      steps: [
        {
          step: 1,
          title: 'Systemic Bias Investigation',
          description: 'FOIA investigation of police-involved shooting responses nationwide. Compare treatment of officer suspects to civilian suspects: time to arrest, search warrant targets, charges filed, sentences received.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Victim Character Assassination Pattern',
          description: 'Document how often victims of police violence have their criminal history, drug use, or personal life publicized as part of the investigation response. The search of Jean\'s apartment for marijuana was not unique -- it is a pattern designed to retroactively justify the killing.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Sentencing Disparity Analysis',
          description: 'Investigate sentencing disparities in police murder convictions versus civilian murder convictions for equivalent conduct. Guyger received 10 years for murdering an unarmed man in his home -- what sentence would a civilian receive for the same act?',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Challenge the pattern of investigating victims instead of officers. Push for mandatory independent prosecution in police shootings.',
      urgency: 'high',
      relevantMechanisms: ['Civil Rights (42 U.S.C. Section 1983)', 'Police Accountability Reform'],
      steps: [
        {
          step: 1,
          title: 'Independent Prosecution Legislation',
          description: 'Draft and advocate for state laws requiring independent prosecutors -- not DAs who work with police daily -- for all police shooting cases. The structural conflict of interest between DAs and police departments makes fair prosecution impossible.',
          legalBasis: ['Due Process Clause', 'Equal Protection Clause', 'Right to fair trial'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Qualified Immunity Challenges',
          description: 'Continue challenging qualified immunity in Section 1983 cases. The Jean family\'s civil suit required navigating qualified immunity -- a doctrine that protects officers who violate rights unless the violation was "clearly established" in nearly identical prior cases.',
          legalBasis: ['42 U.S.C. Section 1983', 'Harlow v. Fitzgerald, 457 U.S. 800 (1982)'],
          estimatedTime: '12-36 months',
        },
        {
          step: 3,
          title: 'Pattern and Practice Action',
          description: 'File or support DOJ pattern-and-practice investigations (42 U.S.C. Section 14141) into police departments that exhibit systemic differential treatment of officer suspects. DPD\'s response to the Jean shooting suggests institutional bias.',
          legalBasis: ['42 U.S.C. Section 14141 (Violent Crime Control Act)', 'Section 210401'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass mandatory independent investigation laws. End victim character assassination in police shooting cases.',
      urgency: 'high',
      relevantMechanisms: ['Police Accountability Reform'],
      steps: [
        {
          step: 1,
          title: 'Independent Investigation Mandate',
          description: 'Pass state legislation requiring an agency entirely independent of the involved officer\'s department to investigate all police-involved deaths. No department should investigate its own officers\' killings.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Victim Protection in Shooting Investigations',
          description: 'Pass legislation prohibiting search warrants targeting shooting victims\' homes absent specific probable cause that the victim committed a crime. Prohibit public release of victim criminal history, drug tests, or character information in officer-involved shooting investigations.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'George Floyd Justice in Policing Act',
          description: 'Support and vote for the George Floyd Justice in Policing Act at the federal level: end qualified immunity, create national use of force standards, ban chokeholds, mandate body cameras, and create a national police misconduct registry.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'The three-day arrest delay and victim apartment search destroyed public trust. Reform your own processes.',
      urgency: 'immediate',
      relevantMechanisms: ['State Murder Prosecution', 'Police Accountability Reform'],
      steps: [
        {
          step: 1,
          title: 'Same-Standard Arrest Protocols',
          description: 'Implement same-day arrest protocols for officers involved in off-duty shootings. Treat officer suspects identically to civilian suspects: immediate arrest, Miranda rights, search of the SUSPECT\'s residence, preserve evidence. No three-day delays.',
          estimatedTime: 'Immediate',
        },
        {
          step: 2,
          title: 'End Victim Investigation Bias',
          description: 'Prohibit the execution of search warrants on shooting victims\' homes absent articulable probable cause of victim criminal conduct relevant to the shooting. The marijuana found in Jean\'s apartment had nothing to do with his murder -- searching his home was designed to justify the killing.',
          estimatedTime: '1-3 months policy reform',
        },
        {
          step: 3,
          title: 'Automatic External Investigation Transfer',
          description: 'Implement automatic transfer of investigation to an external agency (state police, AG office) when an officer from the department is the suspect. DPD should never have been investigating its own officer\'s killing of a civilian.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Mandate independent civilian oversight of police-involved shooting investigations.',
      urgency: 'high',
      relevantMechanisms: ['Police Accountability Reform', 'Civil Rights (42 U.S.C. Section 1983)'],
      steps: [
        {
          step: 1,
          title: 'Independent Civilian Oversight Boards',
          description: 'Establish independent civilian oversight boards with subpoena power, independent investigation authority, and binding disciplinary recommendations for all police-involved deaths.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Use of Force Data Collection',
          description: 'Mandate comprehensive use of force data collection and public reporting. Include officer-involved shootings, arrest delays, search warrant targets, and charging disparities between officer and civilian suspects.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Sentencing Disparity Monitoring',
          description: 'Monitor and publish sentencing data for officer-involved killings versus civilian-on-civilian killings for equivalent conduct. The 10-year sentence for Guyger\'s murder of Jean should be compared to sentences for equivalent civilian conduct.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
  ],
};
