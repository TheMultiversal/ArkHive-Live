import type { AccountabilityData } from '@/types/accountability';

export const droneAssassinationsAccountability: AccountabilityData = {
  investigationSlug: 'drone-assassinations',
  crimeSummary: 'Since 2002, the United States has conducted thousands of drone strikes across at least seven countries (Pakistan, Yemen, Somalia, Afghanistan, Iraq, Syria, Libya) killing an estimated 8,858 to 16,901 people, including 910 to 2,200 civilians and 283 to 454 children. The Obama administration institutionalized a secret "disposition matrix" (kill list) where the President personally selected individuals for assassination during "Terror Tuesday" meetings. The program killed U.S. citizens without trial, conducted "signature strikes" killing unidentified people based on behavioral patterns, and redefined "combatant" to mean any military-age male in a strike zone to suppress civilian casualty counts. The CIA and JSOC operated parallel kill programs with minimal oversight. Multiple independent investigations found evidence of war crimes. No U.S. official has ever been held accountable.',
  totalHarm: 'An estimated 8,858-16,901 people killed including 910-2,200 confirmed civilians and 283-454 children across 7 countries; at least 4 U.S. citizens killed without trial including a 16-year-old and an 8-year-old; communities across Pakistan, Yemen, and Somalia terrorized by constant drone surveillance; double-tap strikes targeting first responders and funeral gatherings; drone operators suffering epidemic PTSD rates; Pakistan sovereignty violated through 430+ unauthorized strikes; whistleblower Daniel Hale sentenced to 45 months for exposing civilian casualties; legal framework of unchecked executive killing power established as precedent; over $15 billion in defense industry profits from drone manufacturing',
  victimsAffected: 'Thousands of families across Pakistan, Yemen, Somalia, Afghanistan, Iraq, Syria, and Libya who lost civilians to drone strikes; communities in FATA (Pakistan Tribal Areas) living under constant surveillance and terror; the al-Awlaki family (3 U.S. citizens killed across 3 strikes); Zemari Ahmadi family (10 killed including 7 children in 2021 Kabul strike); 30 pine nut farmers killed in Afghanistan (2019); 70 women and children killed in Baghuz, Syria (2019); 42 tribal elders killed at Datta Khel jirga (2011); drone operators including Brandon Bryant (1,626 remote kills, severe PTSD); whistleblower Daniel Hale (imprisoned 45 months)',
  primaryTargets: [
    {
      name: 'Barack Obama',
      role: 'President who dramatically expanded the drone program, institutionalized the disposition matrix kill list, personally approved targets during Terror Tuesday meetings, authorized killing of U.S. citizens without trial',
      currentStatus: 'Former president; no legal accountability; continues public life without facing consequences for extrajudicial killings',
      accountabilityPath: 'Congressional investigation into extrajudicial killing of U.S. citizens; declassification of OLC memos; historical commission on targeted killing program',
      obstacles: ['Presidential immunity', 'State secrets privilege', 'Bipartisan support for drone program', 'Classification of evidence']
    },
    {
      name: 'John Brennan',
      role: 'CIA Director (2013-2017) and chief architect of drone program as counterterrorism advisor; managed disposition matrix; publicly lied about zero civilian casualties in June 2011',
      currentStatus: 'Retired; media commentator; never investigated for false public statements about civilian casualties',
      accountabilityPath: 'Congressional investigation into false statements; examination of civilian casualty suppression; ethics investigation',
      obstacles: ['Classification of evidence', 'Statute of limitations for false statements', 'Intelligence community solidarity', 'Media rehabilitation']
    },
    {
      name: 'CIA (Institutional)',
      role: 'Operated parallel drone program under Title 50 covert action authorities in Pakistan, Yemen, and Somalia with minimal congressional oversight',
      currentStatus: 'Program continues with reduced transparency; no institutional accountability for civilian casualties',
      accountabilityPath: 'Congressional oversight reform; FOIA litigation for declassification; Inspector General investigation of civilian casualty suppression',
      obstacles: ['Covert action classification', 'State secrets privilege', 'Congressional deference to intelligence agencies']
    },
    {
      name: 'General Atomics',
      role: 'Manufacturer of MQ-1 Predator and MQ-9 Reaper drones; received $7.5 billion+ in contracts; spent $3.1 million annually lobbying to expand drone warfare',
      currentStatus: 'Continues manufacturing armed drones; expanding international sales; lobbying for autonomous weapons systems',
      accountabilityPath: 'Congressional investigation into war profiteering; examination of lobbying influence on drone policy; arms export controls',
      obstacles: ['Defense industry lobbying power', 'Bipartisan support for defense spending', 'National security arguments']
    },
    {
      name: 'Donald Trump',
      role: 'Revoked Obama-era civilian casualty reporting requirements in 2019; loosened rules of engagement; authorized 2,243 strikes in first 2 years; SEAL raid killed 8-year-old Nawar al-Awlaki',
      currentStatus: 'Former and current president; no legal accountability for civilian casualties or transparency rollbacks',
      accountabilityPath: 'Congressional investigation into reporting revocation; restoration of civilian casualty transparency requirements',
      obstacles: ['Presidential immunity', 'Executive authority claims', 'Classification of strike data']
    },
    {
      name: 'David Barron / Office of Legal Counsel',
      role: 'Authored the classified OLC memo authorizing the extrajudicial killing of U.S. citizen Anwar al-Awlaki, arguing due process does not require judicial process',
      currentStatus: 'Federal appellate judge (First Circuit); rewarded with lifetime appointment despite authoring legal justification for killing Americans without trial',
      accountabilityPath: 'Judicial ethics investigation; congressional investigation into OLC opinion process; declassification of all targeting memos',
      obstacles: ['Judicial immunity', 'Classification of memos', 'Legal opinion immunity doctrine']
    }
  ],
  legalMechanisms: [
    {
      name: 'Fifth Amendment Due Process Challenge',
      statute: 'Fifth Amendment to the U.S. Constitution',
      description: 'No person shall be deprived of life without due process of law. The targeted killing of U.S. citizens Anwar al-Awlaki, Abdulrahman al-Awlaki, Nawar al-Awlaki, and Ahmed Farouq without any judicial process violated the most fundamental constitutional guarantee.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      applicability: 'directly_applicable',
      authorizedActors: ['Federal judiciary', 'Congress', 'ACLU', 'Center for Constitutional Rights'],
      notes: 'Al-Aulaqi v. Obama (2010) and Al-Aulaqi v. Panetta (2014) dismissed on standing and political question grounds. New litigation strategies needed.'
    },
    {
      name: 'War Crimes Act',
      statute: '18 U.S.C. 2441',
      description: 'Prohibits grave breaches of the Geneva Conventions including willful killing of civilians. Signature strikes on unidentified targets and double-tap strikes on rescuers constitute willful killing.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['DOJ Criminal Division', 'Special counsel', 'International Criminal Court'],
      notes: 'No statute of limitations for war crimes. The ICC could theoretically exercise jurisdiction over strikes in Afghanistan under its existing investigation.'
    },
    {
      name: 'Geneva Conventions Common Article 3',
      statute: 'Geneva Conventions of 1949, Common Article 3',
      description: 'Prohibits violence to life, murder, and cruel treatment of persons taking no active part in hostilities. Drone strikes on weddings, funerals, tribal gatherings, and rescuers violate these protections.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['International Criminal Court', 'Universal jurisdiction courts', 'International Court of Justice'],
      notes: 'The U.S. has not ratified the Rome Statute but ICC has jurisdiction in Afghanistan. Multiple European nations could exercise universal jurisdiction.'
    },
    {
      name: 'FOIA Declassification',
      statute: 'Freedom of Information Act (5 U.S.C. 552)',
      description: 'Provides public right of access to government records. Classification has been systematically used to conceal evidence of civilian casualties and program illegality.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['Any person or organization', 'Federal courts for enforcement', 'Interagency Security Classification Appeals Panel'],
      notes: 'Key documents remain classified: full OLC targeting memos, CIA civilian casualty assessments, Pentagon Civilian Casualty Files, Operation Haymaker documents, Baghuz strike assessment'
    },
    {
      name: 'Foreign Murder of U.S. Nationals',
      statute: '18 U.S.C. 1119',
      description: 'Federal law criminalizing the killing of U.S. nationals abroad. The government killed at least 4 American citizens via drone without criminal charges, indictments, or trial.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'No statute of limitations for murder',
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['DOJ Criminal Division', 'Federal grand jury', 'Special counsel'],
      notes: 'The government argues AUMF authorization supersedes this statute. No court has ruled on this claim in a contested proceeding.'
    },
    {
      name: 'Torture Victim Protection Act',
      statute: '28 U.S.C. 1350 note',
      description: 'Provides civil remedy for victims of extrajudicial killing carried out under color of foreign law. Double-tap strikes deliberately targeting first responders constitute extrajudicial killing.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years',
      reachesHeirs: true,
      applicability: 'potentially_applicable',
      authorizedActors: ['Private plaintiffs', 'Human rights organizations', 'Federal courts'],
      notes: 'Application to U.S. government actions abroad is contested. State secrets privilege has blocked similar claims.'
    },
    {
      name: 'UN Charter Article 2(4)',
      statute: 'UN Charter Article 2(4)',
      description: 'Prohibits the use of force against the territorial integrity of sovereign states. Drone strikes in Pakistan, Yemen, and Somalia conducted without meaningful consent violated international law on use of force.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['UN Security Council', 'International Court of Justice', 'UN General Assembly', 'UN Human Rights Council'],
      notes: 'Pakistan parliament unanimously demanded end to strikes in 2013. Yemen and Somalia governments arguably coerced into consent.'
    }
  ],
  wealthTrace: [
    {
      name: 'General Atomics Aeronautical Systems',
      relationship: 'Primary manufacturer of MQ-1 Predator and MQ-9 Reaper armed drones',
      transferMethod: 'Defense procurement contracts',
      estimatedValue: '$7.5 billion+ in drone contracts',
      legalEntities: ['General Atomics Aeronautical Systems Inc.', 'General Atomics'],
      recoveryMechanisms: ['War profiteering investigation', 'Congressional oversight of defense procurement', 'Arms export controls enforcement']
    },
    {
      name: 'Lockheed Martin (Hellfire Missiles)',
      relationship: 'Manufacturer of AGM-114 Hellfire missiles used in virtually all armed drone strikes at $150,000 per missile',
      transferMethod: 'Munitions procurement contracts',
      estimatedValue: '$4.2 billion in Hellfire missile sales',
      legalEntities: ['Lockheed Martin Corporation'],
      recoveryMechanisms: ['Congressional oversight of munitions spending', 'Arms trade treaty enforcement']
    },
    {
      name: 'CIA Black Budget (Drone Operations)',
      relationship: 'Classified funding for parallel CIA drone program in Pakistan, Yemen, and Somalia',
      transferMethod: 'Classified appropriations through intelligence budget',
      estimatedValue: '$2-4 billion annually during peak operations',
      legalEntities: ['Central Intelligence Agency'],
      recoveryMechanisms: ['Congressional intelligence budget oversight', 'Inspector General audit', 'FOIA litigation for budget breakdowns']
    },
    {
      name: 'JSOC Operations Budget',
      relationship: 'Funding for Joint Special Operations Command targeted killing operations',
      transferMethod: 'Defense appropriations and classified supplements',
      estimatedValue: '$3 billion+ annually',
      legalEntities: ['Joint Special Operations Command', 'Department of Defense'],
      recoveryMechanisms: ['Congressional defense oversight', 'Pentagon audit enforcement', 'GAO investigation']
    },
    {
      name: 'L3Harris Technologies',
      relationship: 'Provided sensor systems, communications infrastructure, and intelligence analysis for drone operations',
      transferMethod: 'Defense subcontracts and direct procurement',
      estimatedValue: '$2.1 billion in drone-related contracts',
      legalEntities: ['L3Harris Technologies Inc.'],
      recoveryMechanisms: ['Contract audit', 'Congressional defense oversight']
    },
    {
      name: 'General Atomics Political Lobbying',
      relationship: 'Lobbied to expand drone warfare, increase procurement, and weaken civilian casualty reporting requirements',
      transferMethod: 'Direct lobbying expenditures and campaign contributions',
      estimatedValue: '$3.1 million+ annually in lobbying',
      legalEntities: ['General Atomics'],
      recoveryMechanisms: ['Lobbying disclosure enforcement', 'Campaign finance reform', 'Congressional ethics review']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Senate Armed Services Committee',
      title: 'SASC Chairman',
      jurisdiction: 'Oversight of Department of Defense drone operations and rules of engagement',
      powers: ['Subpoena power', 'Budget authorization', 'Confirmation authority over senior military officers', 'Oversight hearings', 'Rules of engagement review']
    },
    {
      name: 'Senate Select Committee on Intelligence',
      title: 'SSCI Chairman',
      jurisdiction: 'Oversight of CIA drone program and covert action',
      powers: ['Access to classified programs', 'Covert action notification rights', 'Budget authorization for intelligence activities', 'Confirmation of CIA Director']
    },
    {
      name: 'Inspector General of the Intelligence Community',
      title: 'IC Inspector General',
      jurisdiction: 'Investigation of waste, fraud, and abuse across intelligence community',
      powers: ['Investigate CIA drone program civilian casualties', 'Receive whistleblower complaints', 'Issue reports to Congress', 'Recommend criminal referrals']
    },
    {
      name: 'International Criminal Court',
      title: 'ICC Prosecutor',
      jurisdiction: 'War crimes and crimes against humanity including those committed in Afghanistan',
      powers: ['Investigate war crimes', 'Issue arrest warrants', 'Prosecute individuals for attacks on civilians'],
      contactMethod: 'ICC Office of the Prosecutor, The Hague'
    },
    {
      name: 'UN Special Rapporteur on Extrajudicial Killings',
      title: 'Special Rapporteur',
      jurisdiction: 'Investigation of state-sponsored killings outside judicial process',
      powers: ['Country visits', 'Thematic reports to UN Human Rights Council', 'Communications to governments', 'Public advocacy']
    },
    {
      name: 'Attorney General of the United States',
      title: 'Attorney General',
      jurisdiction: 'Federal criminal enforcement including war crimes',
      powers: ['Prosecute violations of War Crimes Act', 'Appoint special counsel', 'Authorize declassification for prosecution', 'Investigate 18 U.S.C. 1119 violations']
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Citizens can demand accountability for drone killings through political engagement, support legal challenges, and pressure elected officials to exercise oversight authority they have abdicated for two decades',
      steps: [
        { step: 1, title: 'Understand the Drone Program', description: 'Read The Intercept\'s Drone Papers, the NYT Civilian Casualty Files, and Bureau of Investigative Journalism database to understand the scale of civilian killing. These are primary source documents establishing that the government killed thousands of people it could not identify.', requirements: ['Internet access'], estimatedTime: '4-8 hours' },
        { step: 2, title: 'Contact Elected Representatives', description: 'Demand that your senators and representative support: AUMF repeal and replacement with narrow authorization, mandatory warrant requirement for targeted killings of U.S. citizens, restoration of civilian casualty reporting requirements, and full declassification of OLC targeting memos.', requirements: ['Knowledge of representatives'], filingTarget: 'Congressional offices', estimatedTime: '30 minutes per contact' },
        { step: 3, title: 'Support Accountability Organizations', description: 'Donate to and volunteer with organizations pursuing drone accountability: ACLU, Reprieve, Airwars, Bureau of Investigative Journalism, Center for Constitutional Rights, Columbia Law School Human Rights Clinic.', requirements: ['Financial resources'], estimatedTime: 'Ongoing' },
        { step: 4, title: 'Support Whistleblower Defense', description: 'Support the legal defense and public advocacy for drone program whistleblowers including Daniel Hale. Demand clemency for those imprisoned for revealing evidence of war crimes.', requirements: ['Awareness of whistleblower cases'], estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['Fifth Amendment', 'FOIA', 'AUMF reform'],
      urgency: 'high' as const
    },
    {
      role: 'journalist',
      overview: 'Journalists can investigate ongoing drone operations, track civilian casualties independently, protect sources within the military and intelligence community, and prevent the normalization of extrajudicial killing',
      steps: [
        { step: 1, title: 'Investigate Current Strike Operations', description: 'File FOIA requests for drone strike data, civilian casualty assessments, and rules of engagement documents. Cross-reference official claims with Airwars, BIJ, and local reporting. Investigate the gap between Trump-era reporting revocation and actual civilian casualties.', requirements: ['FOIA expertise', 'National security reporting experience'], filingTarget: 'DoD FOIA Office, CIA FOIA Coordinator', estimatedTime: '6-18 months per request' },
        { step: 2, title: 'Track Defense Industry Lobbying', description: 'Investigate General Atomics, Lockheed Martin, and other drone manufacturers\' lobbying expenditures, campaign contributions, and revolving-door employment with Pentagon and CIA officials who shape drone policy.', requirements: ['Financial investigation skills'], estimatedTime: '3-6 months' },
        { step: 3, title: 'Document Victim Stories', description: 'Work with organizations like Reprieve and Airwars to document and publish firsthand accounts of civilian drone strike victims. Counter the abstract language of "collateral damage" with human stories and names.', requirements: ['Translation support', 'Travel capability', 'Source protection protocols'], estimatedTime: '6-12 months' },
        { step: 4, title: 'Investigate Drone Operator Testimony', description: 'Interview current and former drone operators about targeting procedures, civilian casualty awareness, PTSD rates, and institutional pressure to classify civilian deaths as militant kills. Brandon Bryant and other former operators have spoken publicly.', requirements: ['Source protection capabilities', 'SecureDrop'], estimatedTime: '3-6 months' }
      ],
      relevantMechanisms: ['FOIA', 'First Amendment'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer',
      overview: 'Legal professionals can challenge the constitutional and international law framework enabling extrajudicial killing, represent victims\' families, pursue FOIA enforcement, and develop novel legal theories to overcome standing and state secrets barriers',
      steps: [
        { step: 1, title: 'Develop New Standing Theories', description: 'Al-Aulaqi v. Obama and Al-Aulaqi v. Panetta were dismissed on standing and political question grounds. Develop novel theories based on Bivens actions, Fifth Amendment substantive due process, and international human rights law to establish standing for U.S. citizen victims\' families.', requirements: ['Constitutional law expertise', 'National security law background'], filingTarget: 'Federal district courts', legalBasis: ['Fifth Amendment', 'Bivens v. Six Unknown Named Agents'], estimatedTime: '3-5 years' },
        { step: 2, title: 'Pursue Universal Jurisdiction Cases', description: 'File cases in European courts with universal jurisdiction over war crimes. Germany, France, and the UK have mechanisms for investigating war crimes committed by any nation. Faisal bin Ali Jaber v. Germany established precedent for challenging drone operations through allied courts.', requirements: ['International law expertise', 'European court access'], filingTarget: 'German Federal Administrative Court, European Court of Human Rights', legalBasis: ['Geneva Conventions', 'German Basic Law'], estimatedTime: '2-5 years' },
        { step: 3, title: 'FOIA Litigation for OLC Memos', description: 'File FOIA lawsuits to compel full unredacted release of all OLC memos authorizing targeted killing, civilian casualty assessments, and internal legal analyses. Challenge every redaction.', requirements: ['FOIA litigation experience'], filingTarget: 'U.S. District Court for the District of Columbia', legalBasis: ['5 U.S.C. 552'], estimatedTime: '1-3 years' },
        { step: 4, title: 'Represent Whistleblowers', description: 'Provide legal representation to intelligence and military whistleblowers who can testify about civilian casualty suppression, unlawful targeting, and chain of command responsibility. Challenge Espionage Act prosecutions.', requirements: ['National security law expertise', 'Security clearance'], filingTarget: 'Federal courts', estimatedTime: '1-5 years' }
      ],
      relevantMechanisms: ['Fifth Amendment', '18 U.S.C. 2441', 'Geneva Conventions', 'FOIA'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official',
      overview: 'Elected officials have unique power to repeal the AUMF, restore transparency requirements, investigate civilian casualties, and establish precedent that extrajudicial killing by the executive branch requires meaningful oversight',
      steps: [
        { step: 1, title: 'Repeal and Replace the 2001 AUMF', description: 'The 60-word 2001 AUMF has been stretched to authorize killing operations against organizations and in countries that did not exist on 9/11. Introduce narrow replacement authorization with geographic limits, target specificity, sunset provisions, and congressional notification requirements.', requirements: ['Co-sponsors', 'Legislative drafting support'], filingTarget: 'Senate and House floor', estimatedTime: '1-2 congressional sessions' },
        { step: 2, title: 'Restore Civilian Casualty Reporting', description: 'Introduce legislation requiring mandatory, public reporting of all U.S. military and intelligence community strikes and civilian casualties, reversing Trump\'s 2019 revocation. Include independent verification requirements.', requirements: ['Committee jurisdiction'], filingTarget: 'Armed Services and Intelligence committees', estimatedTime: '6-12 months' },
        { step: 3, title: 'Commission Comprehensive Investigation', description: 'Establish a bipartisan commission with full subpoena power and classified access to investigate the full scope of the drone assassination program, civilian casualties, targeting methodology, and institutional suppression of casualty data.', requirements: ['Bipartisan support', 'Full subpoena authority'], filingTarget: 'Joint congressional resolution', estimatedTime: '12-24 months' },
        { step: 4, title: 'Require Judicial Review for U.S. Citizen Targeting', description: 'Introduce legislation requiring FISA Court or Article III court review before any U.S. citizen can be placed on a targeting list, with emergency provisions requiring post-hoc review within 72 hours.', requirements: ['Constitutional law expertise', 'Co-sponsors'], filingTarget: 'Judiciary and Intelligence committees', estimatedTime: '1-2 sessions' }
      ],
      relevantMechanisms: ['AUMF', 'Congressional oversight authority', 'Fifth Amendment'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement',
      overview: 'Law enforcement at the Inspector General and DOJ levels can investigate war crimes, civilian casualty suppression, false public statements, and ensure compliance with existing legal prohibitions on unlawful killing',
      steps: [
        { step: 1, title: 'Investigate War Crimes Act Violations', description: 'Investigate whether specific drone strikes -- particularly the Datta Khel jirga attack, double-tap strikes on rescuers, Baghuz strike killing 70+ women and children, and signature strikes on unidentified targets -- constitute violations of 18 U.S.C. 2441 (War Crimes Act).', requirements: ['DOJ Criminal Division authority', 'Security clearance'], filingTarget: 'Federal grand jury', legalBasis: ['18 U.S.C. 2441'], estimatedTime: '1-3 years' },
        { step: 2, title: 'Audit Civilian Casualty Reporting', description: 'Conduct comprehensive IG audit comparing internal military and CIA civilian casualty data with independent investigations. Document the systematic gap between official claims and reality. Identify who ordered the suppression of casualty data.', requirements: ['DoD IG or IC IG authority'], filingTarget: 'IG report to Congress', estimatedTime: '12-18 months' },
        { step: 3, title: 'Investigate Whistleblower Retaliation', description: 'Investigate whether the prosecution of Daniel Hale and targeting of other drone program whistleblowers constituted illegal retaliation for revealing evidence of war crimes and civilian casualties.', requirements: ['IG authority', 'Prosecutorial discretion'], filingTarget: 'IG investigative findings', estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['18 U.S.C. 2441', '18 U.S.C. 1119', 'Intelligence Community Whistleblower Protection Act'],
      urgency: 'high' as const
    },
    {
      role: 'regulator',
      overview: 'International regulatory bodies, arms export authorities, and human rights institutions can establish norms against extrajudicial killing, restrict drone technology proliferation, and create accountability mechanisms',
      steps: [
        { step: 1, title: 'Arms Export Control Enforcement', description: 'Review and restrict drone technology exports to countries with poor human rights records. The proliferation of armed drone technology threatens to replicate the U.S. targeted killing model globally.', requirements: ['ITAR/EAR regulatory authority'], filingTarget: 'State Department Directorate of Defense Trade Controls', estimatedTime: '6-12 months' },
        { step: 2, title: 'UN Human Rights Council Investigation', description: 'Support and expand the UN Special Rapporteur mandate to conduct a comprehensive investigation into U.S. drone strikes, civilian casualties, and compliance with international humanitarian law. Multiple rapporteurs have found violations.', requirements: ['UN member state support'], filingTarget: 'UN Human Rights Council resolution', estimatedTime: '12-24 months' },
        { step: 3, title: 'Establish International Norms on Autonomous Targeting', description: 'Develop binding international norms requiring human judgment in all lethal targeting decisions, prohibiting signature strikes, and requiring post-strike assessment and transparency for all armed drone operations.', requirements: ['International diplomatic support'], filingTarget: 'UN General Assembly, multilateral negotiations', estimatedTime: '2-5 years' }
      ],
      relevantMechanisms: ['UN Charter Article 2(4)', 'Geneva Conventions', 'Arms Trade Treaty'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Repeal of the 2001 AUMF and replacement with narrow authorization requiring specific targets, geographic limits, and sunset provisions',
    'Mandatory judicial review before any U.S. citizen can be placed on a targeted killing list, with emergency provisions for post-hoc review',
    'Full declassification of all OLC memos authorizing targeted killing, CIA civilian casualty assessments, and Pentagon Civilian Casualty Files',
    'Restoration and strengthening of mandatory public civilian casualty reporting for all U.S. strikes, with independent verification',
    'Bipartisan congressional commission investigation into the full scope of the drone program with subpoena power and authority to declassify findings',
    'Criminal investigation into strikes that constitute potential war crimes under 18 U.S.C. 2441, including signature strikes and double-tap attacks',
    'Clemency for Daniel Hale and legal protections for drone program whistleblowers who revealed evidence of civilian casualties',
    'Establishment of a victim compensation fund for families of confirmed civilian drone strike victims across all countries affected',
    'International agreement restricting armed drone proliferation and requiring transparency in all targeted killing operations',
    'Reform of the military-age male counting methodology to accurately reflect civilian casualties rather than suppress them'
  ]
};
