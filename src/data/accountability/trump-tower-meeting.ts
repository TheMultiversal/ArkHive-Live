import type { AccountabilityData } from '@/types/accountability';

export const trumpTowerMeetingAccountability: AccountabilityData = {
  investigationSlug: 'trump-tower-meeting',
  crimeSummary: 'On June 9, 2016, the three most senior Trump campaign officials met with Russian nationals at Trump Tower after being explicitly promised damaging information on Hillary Clinton as "part of Russia and its government\'s support for Mr. Trump." Donald Trump Jr. enthusiastically accepted the offer. The campaign never reported the foreign government approach to the FBI. When exposed in 2017, Trump personally dictated a misleading cover story. Mueller declined prosecution citing difficulty proving willful violation of the foreign contribution ban and valuing opposition research, creating a precedent gap that effectively permits campaigns to accept foreign government election assistance. The Senate Intelligence Committee called it "one of the most significant contacts between the Trump Campaign and individuals connected to the Russian government."',
  totalHarm: 'Fundamental damage to electoral integrity and national security; demonstrated campaign willingness to accept hostile foreign government election interference; created precedent gap permitting future foreign influence operations; cover-up constituted potential obstruction of justice; Manafort\'s parallel sharing of campaign data with Russian intelligence represented "grave counterintelligence threat"',
  victimsAffected: 'All American voters whose electoral process was compromised by foreign government interference; U.S. national security interests undermined by campaign receptivity to hostile intelligence operations; rule of law damaged by obstruction and cover-up; future elections endangered by unresolved legal precedent',

  primaryTargets: [
    {
      name: 'Donald Trump Jr.',
      role: 'Organized and attended the meeting after receiving email explicitly stating material was "part of Russia and its government\'s support for Mr. Trump"; responded "I love it"; initially lied about meeting purpose',
      currentStatus: 'No charges filed; Mueller declined prosecution; continues public life and political involvement',
      accountabilityPath: 'Congressional referral for false statements; FEC investigation of foreign contribution solicitation; future prosecution if precedent on opposition research as "thing of value" is established',
      obstacles: [
        'Mueller decline to prosecute creates strong precedent against future prosecution',
        'Statute of limitations has expired for most potential charges',
        'Difficulty proving "willful" violation of campaign finance law',
        'Political environment makes prosecution appear partisan'
      ]
    },
    {
      name: 'Donald Trump',
      role: 'Dictated misleading Air Force One statement; lawyers falsely denied involvement; evidence of possible foreknowledge including calls to blocked number and public promise of Clinton speech timed to meeting',
      currentStatus: 'Served as president; pardoned Manafort; no charges related to meeting; DOJ policy prevented prosecution while in office',
      accountabilityPath: 'Congressional investigation of obstruction; state-level investigation of false statements; historical accountability through public record',
      obstacles: [
        'Former president with broad political support and legal resources',
        'DOJ OLC opinion on sitting president prosecution delayed action past limitations periods',
        'Presidential pardon power used to eliminate Manafort cooperation leverage',
        'Political polarization makes accountability appear partisan'
      ]
    },
    {
      name: 'Paul Manafort',
      role: 'Campaign chairman who attended Trump Tower meeting while simultaneously sharing internal campaign polling data with Russian intelligence-linked Kilimnik; identified as "grave counterintelligence threat"',
      currentStatus: 'Convicted on financial crimes but pardoned by Trump in December 2020; pardon eliminated federal accountability',
      accountabilityPath: 'State-level prosecution for crimes not covered by federal pardon; civil litigation; continued counterintelligence monitoring',
      obstacles: [
        'Presidential pardon eliminated federal criminal liability',
        'Pardon removed leverage for cooperation on Trump Tower meeting testimony',
        'State charges face double jeopardy complications',
        'Key counterintelligence information remains classified'
      ]
    }
  ],

  legalMechanisms: [
    {
      name: 'SHIELD Act (Stopping Harmful Interference in Elections for a Lasting Democracy)',
      statute: 'Proposed legislation (introduced multiple Congresses)',
      description: 'Would require campaigns to report foreign contacts to the FBI and explicitly define opposition research as a "thing of value" under campaign finance law, closing the gap Mueller identified',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'President'],
      applicability: 'requires_new_action' as const,
      notes: 'Would directly address the legal gap that prevented prosecution of the Trump Tower meeting participants'
    },
    {
      name: 'Foreign Contribution Ban Enforcement',
      statute: '52 U.S.C. 30121',
      description: 'Existing prohibition on foreign national contributions; FEC and DOJ have authority to investigate and prosecute violations; Mueller identified evidentiary challenges but did not find the statute inapplicable',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for criminal prosecution; 5 years for civil penalty',
      reachesHeirs: false,
      authorizedActors: ['FEC', 'DOJ'],
      applicability: 'directly_applicable' as const,
      notes: 'Statute of limitations has likely expired for the June 2016 meeting; mechanism remains applicable to future incidents'
    },
    {
      name: 'False Statements to Congress',
      statute: '18 U.S.C. 1001',
      description: 'Criminalizes materially false statements to congressional committees; relevant to discrepancies in Don Jr.\'s testimony about whether he informed his father of the meeting',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'Congressional committees'],
      applicability: 'potentially_applicable' as const,
      notes: 'Don Jr. testified he could not recall discussing the meeting with his father despite circumstantial evidence of calls to a blocked number'
    },
    {
      name: 'Foreign Agents Registration Act (FARA)',
      statute: '22 U.S.C. 611',
      description: 'Requires registration by agents acting on behalf of foreign governments in U.S. political activities; relevant to Russian delegation members\' undisclosed government connections',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ National Security Division', 'FBI'],
      applicability: 'directly_applicable' as const,
      notes: 'Veselnitskaya and Akhmetshin were acting on behalf of Russian government interests without FARA registration'
    }
  ],

  wealthTrace: [
    {
      name: 'Manafort Financial Empire (Partially Forfeited)',
      relationship: 'Campaign chairman attended Trump Tower meeting while maintaining financial ties to Russian-aligned oligarchs creating counterintelligence vulnerability',
      transferMethod: 'Ukrainian oligarch payments through Cyprus shell companies and offshore bank accounts',
      estimatedValue: '$65,000,000+ in payments; $24,000,000 ordered forfeited; $16,000,000 collected',
      legalEntities: ['Global Highway Ltd', 'Pericles Emerging Markets', 'DMP International LLC', 'Various Cyprus entities'],
      recoveryMechanisms: ['State-level prosecution and asset forfeiture', 'IRS enforcement for unreported accounts', 'Civil litigation by defrauded parties']
    },
    {
      name: 'Trump-Agalarov Business Revenue',
      relationship: 'Business partnership between Trump Organization and Kremlin-connected Agalarov family provided channel for Russian government approach to campaign',
      transferMethod: 'Miss Universe licensing deal and related business arrangements',
      estimatedValue: '$20,000,000+ from Moscow pageant and related deals',
      legalEntities: ['Miss Universe LLC', 'Crocus Group', 'Trump Organization'],
      recoveryMechanisms: ['Congressional investigation of business-political nexus', 'Emoluments enforcement', 'State AG investigations']
    },
    {
      name: 'Anti-Magnitsky Lobbying Campaign',
      relationship: 'Russian government-funded campaign that was the meeting\'s primary Russian objective, representing potential quid pro quo for election assistance',
      transferMethod: 'Lobbying firms, legal defense funds, and influence operations',
      estimatedValue: '$4,000,000+ in documented lobbying expenditures',
      legalEntities: ['Baker Hostetler', 'Fusion GPS', 'Various registered and unregistered lobbyists'],
      recoveryMechanisms: ['FARA enforcement', 'Lobbying disclosure compliance', 'DOJ foreign influence investigations']
    }
  ],

  authoritiesWithPower: [
    {
      name: 'U.S. Congress',
      title: 'Senate and House Judiciary and Intelligence Committees',
      jurisdiction: 'Legislative authority to close campaign finance loopholes exposed by Mueller\'s analysis of the Trump Tower meeting',
      powers: [
        'Pass SHIELD Act requiring campaign reporting of foreign contacts and defining opposition research as thing of value',
        'Strengthen FARA enforcement and penalties',
        'Mandate counterintelligence briefings for campaigns',
        'Establish legal duty to report foreign government election approaches to FBI'
      ]
    },
    {
      name: 'Federal Election Commission',
      title: 'FEC Commissioners',
      jurisdiction: 'Campaign finance law enforcement including foreign contribution prohibition',
      powers: [
        'Issue advisory opinions clarifying opposition research as "thing of value" under 52 U.S.C. 30121',
        'Investigate and impose civil penalties for foreign contribution violations',
        'Issue regulations requiring campaigns to report foreign government contacts',
        'Coordinate with DOJ on criminal referrals'
      ]
    },
    {
      name: 'Department of Justice',
      title: 'Attorney General; National Security Division',
      jurisdiction: 'Criminal enforcement of campaign finance law, FARA, false statements, and obstruction statutes',
      powers: [
        'Prosecute future violations using precedent-setting interpretation of "thing of value"',
        'Enforce FARA against unregistered foreign agents',
        'Investigate and prosecute obstruction of justice',
        'Conduct counterintelligence investigations of foreign campaign contacts'
      ]
    },
    {
      name: 'FBI',
      title: 'FBI Director; Counterintelligence Division',
      jurisdiction: 'Counterintelligence protection of electoral process; investigation of foreign contacts with political campaigns',
      powers: [
        'Conduct counterintelligence briefings for campaign personnel',
        'Investigate unreported foreign government contacts with campaigns',
        'Monitor and disrupt foreign intelligence approaches to political campaigns',
        'Coordinate with intelligence community on election security threats'
      ]
    }
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Demand legislative reforms to prevent future campaigns from accepting foreign government election assistance',
      steps: [
        { step: 1, title: 'Support SHIELD Act passage', description: 'Contact senators and representatives demanding passage of the SHIELD Act to require foreign contact reporting and define opposition research as "thing of value" under campaign finance law' },
        { step: 2, title: 'Demand FEC reform', description: 'Support FEC reform legislation to ensure the commission can function effectively; the FEC\'s current structure with frequent deadlocks prevents enforcement of foreign contribution bans' },
        { step: 3, title: 'Monitor campaign foreign contacts', description: 'Support transparency organizations tracking campaign foreign contacts and reporting suspicious interactions to relevant authorities' },
        { step: 4, title: 'Educate on election security', description: 'Share information about the Trump Tower meeting precedent and its implications for future elections; support civic education on foreign interference threats' }
      ],
      relevantMechanisms: ['SHIELD Act', '52 U.S.C. 30121', 'FEC reform'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate remaining questions about the Trump Tower meeting and document the legal precedent gap it created',
      steps: [
        { step: 1, title: 'FOIA remaining classified material', description: 'File Freedom of Information Act requests for declassified intelligence assessments, FBI counterintelligence files, and other classified materials related to the meeting and broader Russian contacts' },
        { step: 2, title: 'Document the precedent gap', description: 'Report on how Mueller\'s decision not to prosecute has created a legal safe harbor for campaigns to accept foreign government assistance; track whether any campaigns are exploiting this gap' },
        { step: 3, title: 'Investigate Agalarov connections', description: 'Report on the ongoing relationships between the Agalarov family, Russian government, and American political and business figures' },
        { step: 4, title: 'Track Don Jr. testimony discrepancies', description: 'Investigate the unresolved question of the blocked number calls and whether Trump had advance knowledge of the meeting' }
      ],
      relevantMechanisms: ['FOIA', 'Congressional testimony records', 'Intelligence community assessments'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Develop legal strategies to close the precedent gap and pursue accountability through available mechanisms',
      steps: [
        { step: 1, title: 'FEC enforcement complaints', description: 'File detailed FEC complaints establishing a record of the commission\'s failure to enforce the foreign contribution ban in connection with the Trump Tower meeting' },
        { step: 2, title: 'Develop "thing of value" precedent', description: 'Bring test cases establishing that opposition research constitutes a "thing of value" under campaign finance law to close the gap Mueller identified' },
        { step: 3, title: 'FARA enforcement advocacy', description: 'Push DOJ to strengthen FARA enforcement to ensure foreign agents participating in U.S. political activities are registered and transparent' },
        { step: 4, title: 'State-level Manafort prosecution', description: 'Support state-level prosecution of Manafort for crimes not covered by the presidential pardon, preserving some measure of accountability' }
      ],
      relevantMechanisms: ['52 U.S.C. 30121', 'FARA', 'State criminal jurisdiction'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Close the legal gaps exposed by the Trump Tower meeting through legislation',
      steps: [
        { step: 1, title: 'Pass the SHIELD Act', description: 'Enact legislation requiring campaigns to report foreign contacts to the FBI and explicitly defining opposition research as a "thing of value" under the foreign contribution ban' },
        { step: 2, title: 'Mandate campaign counterintelligence briefings', description: 'Require all presidential campaigns to receive FBI counterintelligence briefings and establish a duty to report suspicious foreign approaches' },
        { step: 3, title: 'Reform the FEC', description: 'Restructure the FEC with an odd number of commissioners to prevent partisan deadlocks that prevent enforcement of the foreign contribution prohibition' },
        { step: 4, title: 'Strengthen pardon oversight', description: 'Legislate transparency requirements for presidential pardons in cases connected to investigations involving the president, to prevent pardons from being used to obstruct justice' }
      ],
      relevantMechanisms: ['SHIELD Act', 'FEC reform', 'Pardon transparency'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Use existing regulatory authority to strengthen election security protections against foreign interference',
      steps: [
        { step: 1, title: 'FEC advisory opinion on opposition research', description: 'Issue advisory opinion explicitly classifying opposition research from foreign government sources as a "contribution" under 52 U.S.C. 30121' },
        { step: 2, title: 'DOJ prosecution guidelines', description: 'Develop clear prosecution guidelines for foreign contribution cases that address the "willfulness" and "valuation" issues Mueller identified' },
        { step: 3, title: 'FARA enforcement enhancement', description: 'Increase FARA enforcement resources and pursue registration requirements for foreign nationals engaging in U.S. political activities' }
      ],
      relevantMechanisms: ['FEC advisory opinions', 'DOJ prosecution guidelines', 'FARA enforcement'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Protect future elections from foreign government interference through proactive counterintelligence',
      steps: [
        { step: 1, title: 'Proactive campaign briefings', description: 'Conduct comprehensive counterintelligence briefings for all presidential campaigns early in the election cycle, including specific guidance on reporting foreign government approaches' },
        { step: 2, title: 'Monitor foreign intermediary networks', description: 'Track networks of intermediaries used by foreign intelligence services to approach political campaigns, including business relationships that can serve as cover for influence operations' },
        { step: 3, title: 'Investigate unreported foreign contacts', description: 'Develop investigative protocols for identifying and pursuing cases where campaign officials fail to report foreign government contacts' }
      ],
      relevantMechanisms: ['FBI counterintelligence authority', 'National security investigation protocols', 'Campaign briefing programs'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'SHIELD Act enacted requiring campaigns to report foreign government contacts to FBI and defining opposition research as "thing of value" under campaign finance law',
    'FEC reformed with odd number of commissioners to prevent partisan deadlocks in enforcement of foreign contribution prohibition',
    'FEC issues advisory opinion or Congress legislates that opposition research from foreign government sources constitutes a "contribution" under 52 U.S.C. 30121',
    'Mandatory FBI counterintelligence briefings established for all presidential campaigns with legal duty to report suspicious foreign approaches',
    'FARA enforcement strengthened to ensure all foreign agents engaged in U.S. political activities are registered and transparent',
    'Presidential pardon transparency requirements enacted for cases connected to investigations involving the president',
    'Full declassification of remaining intelligence materials related to the Trump Tower meeting and broader Russian interference operation',
    'Legal precedent established that campaigns cannot meet with foreign government representatives offering election assistance without violating federal law'
  ]
};
