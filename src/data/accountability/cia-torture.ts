import type { AccountabilityData } from '@/types/accountability';

export const ciaTortureAccountability: AccountabilityData = {
  investigationSlug: 'cia-torture',

  crimeSummary: 'Following 9/11, the CIA established a global network of secret "black site" prisons where detainees were subjected to systematic torture euphemistically called "enhanced interrogation techniques." Waterboarding, sleep deprivation for up to 180 hours, stress positions, rectal feeding, mock executions, confinement in coffin-sized boxes, and hypothermia were among the documented methods. The program was authorized by DOJ\'s Office of Legal Counsel through the infamous "torture memos" written by John Yoo and Jay Bybee, which provided legal cover for techniques that clearly violated the Geneva Conventions, the UN Convention Against Torture (ratified by the U.S.), and U.S. federal torture statutes. At least 119 individuals were held in black sites. The Senate Intelligence Committee\'s "Torture Report" (2014) found that the program was far more brutal than the CIA represented to Congress, that it produced no unique intelligence, and that the CIA systematically lied about its effectiveness. No CIA officer, contractor, or official has been criminally prosecuted for torture. The sole prosecution was of CIA officer John Kiriakou  -  who blew the whistle on the program and served 30 months in prison.',

  totalHarm: 'At least 119 individuals subjected to torture in CIA black sites. Unknown number rendered to foreign intelligence services for torture. At least 26 were wrongfully held (CIA later acknowledged they did not meet the standard for detention). Gul Rahman died of hypothermia at the "Salt Pit" black site in Afghanistan  -  no one was charged. The program shattered America\'s moral authority on human rights, provided propaganda to terrorist organizations, and undermined international cooperation on counterterrorism. It also corrupted the legal profession through the torture memos and the intelligence community through institutional acceptance of torture.',

  victimsAffected: '119+ detainees tortured by the CIA. At least 26 wrongfully detained. Gul Rahman killed. Abu Zubaydah waterboarded 83 times, held for 20+ years without charge. Khalid Sheikh Mohammed waterboarded 183 times. Family members of detainees traumatized. The American public, whose values were violated by acts committed in their name. International relationships damaged. U.S. military personnel, who faced increased risk because the U.S. abandoned the Geneva Conventions.',

  primaryTargets: [
    {
      name: 'George W. Bush',
      role: 'President who authorized the CIA enhanced interrogation program.',
      currentStatus: 'Living in private life. Has never faced legal consequences. Published memoir defending the program.',
      accountabilityPath: 'International criminal jurisdiction (Convention Against Torture). The U.S. has ratified CAT, which requires states to either prosecute or extradite torturers. Universal jurisdiction statutes in multiple countries. Domestic prosecution unlikely but legally possible. Historical accountability through documentation.',
      obstacles: [
        'Former presidential immunity arguments',
        'Political will for prosecution absent',
        'OLC memos provided legal cover (however invalid)',
        'Bipartisan reluctance to set precedent of prosecuting former presidents for national security decisions',
      ],
    },
    {
      name: 'Dick Cheney',
      role: 'Vice President. Widely regarded as the principal architect of the torture program. Has publicly defended waterboarding and other techniques.',
      currentStatus: 'Living in private life. Has publicly stated he would authorize torture again. No legal consequences.',
      accountabilityPath: 'Same as Bush. Cheney has been more explicit in defending torture, which may constitute continuing endorsement of criminal conduct under international law.',
      obstacles: [
        'Political protection',
        'No domestic prosecution will',
        'International arrest warrants impractical while in U.S.',
      ],
    },
    {
      name: 'John Yoo & Jay Bybee',
      role: 'OLC attorneys who authored the "torture memos" providing legal justification for techniques they knew violated federal and international law.',
      currentStatus: 'Yoo is a tenured professor at UC Berkeley Law School. Bybee is a judge on the U.S. Court of Appeals for the Ninth Circuit (lifetime appointment). Neither has faced any legal consequences. OPR found professional misconduct but DOJ leadership overruled the finding.',
      accountabilityPath: 'Bar disciplinary proceedings (referred but no action taken). Judicial impeachment proceedings for Bybee. Civil liability under international law. The torture memos were not legal analysis  -  they were instruments designed to provide cover for predetermined policy. This is the legal profession\'s greatest modern failure of ethics.',
      obstacles: [
        'Academic tenure protects Yoo',
        'Lifetime judicial appointment protects Bybee',
        'DOJ overruled OPR misconduct finding',
        'Bar complaints were dismissed',
      ],
    },
    {
      name: 'James Mitchell & Bruce Jessen',
      role: 'Psychologists who designed the CIA\'s torture program. Had no prior interrogation experience. Reverse-engineered SERE (survival training) techniques and applied them to actual prisoners. Paid $81 million through their company.',
      currentStatus: 'Mitchell and Jessen settled an ACLU lawsuit (Salim v. Mitchell) on behalf of three torture victims. Settlement terms confidential. Their company was paid $81 million. They testified at Guantanamo military commission hearings in 2020. No criminal charges.',
      accountabilityPath: 'Mitchell and Jessen designed and personally administered torture. They were paid $81 million for it. Criminal prosecution for torture under 18 U.S.C. § 2340. Civil claims. APA ethics investigation (APA has since acknowledged it collaborated with the program). Constructive trust on the $81 million.',
      obstacles: [
        'Settled civil lawsuit',
        'No criminal prosecution brought',
        'Claim they relied on DOJ legal authorization',
      ],
    },
    {
      name: 'Gina Haspel',
      role: 'CIA officer who oversaw the "Cat\'s Eye" black site in Thailand where waterboarding was conducted. Later ordered destruction of interrogation videotapes. Became CIA Director under Trump.',
      currentStatus: 'Served as CIA Director (2018-2021). Retired. No legal consequences for overseeing torture or destroying evidence.',
      accountabilityPath: 'Haspel oversaw torture and then destroyed the evidence. The destruction of interrogation tapes is obstruction of justice and spoliation of evidence. Criminal investigation for obstruction. International criminal jurisdiction.',
      obstacles: [
        'CIA institutional protection',
        'Classified information complicates prosecution',
        'Promoted rather than punished (became CIA Director)',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'Federal Torture Statute',
      statute: '18 U.S.C. § 2340-2340A',
      description: 'Makes it a federal crime to commit, attempt, or conspire to commit torture outside the United States. Penalty: up to 20 years; life if death results; death penalty eligible if death results.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'U.S. Attorneys'],
      applicability: 'directly_applicable',
      notes: 'No statute of limitations for torture that results in death (Gul Rahman). 8-year SOL for non-death torture has expired for most cases, BUT conspiracy may extend it.',
    },
    {
      name: 'UN Convention Against Torture (CAT)',
      statute: 'UN CAT, ratified by U.S. in 1994',
      description: 'Requires states to prevent torture and either prosecute or extradite torturers. No exceptional circumstances (including war or national emergency) can justify torture.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['UN Committee Against Torture', 'Any state party with universal jurisdiction'],
      applicability: 'directly_applicable',
      notes: 'The U.S. ratified CAT and is in continuous violation of its obligation to prosecute. Multiple countries have universal jurisdiction statutes that could reach U.S. officials.',
    },
    {
      name: 'War Crimes Act',
      statute: '18 U.S.C. § 2441',
      description: 'No statute of limitations. Criminalizes grave breaches of the Geneva Conventions by U.S. nationals, including torture and inhumane treatment.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ'],
      applicability: 'directly_applicable',
      notes: 'The War Crimes Act was quietly amended in 2006 (Military Commissions Act) to narrow the definition and provide retroactive immunity for some conduct. This amendment itself may violate international law.',
    },
    {
      name: 'Universal Jurisdiction',
      statute: 'Various national laws; e.g., German VStGB, Spanish Organic Law',
      description: 'Multiple countries have laws allowing prosecution of torture regardless of where it occurred or the nationality of perpetrators. European countries have been the most active.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['National prosecutors in countries with universal jurisdiction'],
      applicability: 'potentially_applicable',
      notes: 'German prosecutors investigated but faced political obstacles. Spanish court initiated investigation that was curtailed under political pressure. Italian court convicted CIA agents in absentia for extraordinary rendition.',
    },
    {
      name: 'Judicial Impeachment',
      statute: 'U.S. Constitution Art. II, § 4; Art. I, § 3',
      description: 'Jay Bybee, author of torture memos, serves as a federal judge with lifetime tenure. Congress has the constitutional power to impeach and remove him.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['House of Representatives (impeachment)', 'Senate (trial)'],
      applicability: 'directly_applicable',
      notes: 'Bybee provided legal cover for torture and was rewarded with a lifetime judicial appointment. Constitutional remedy: impeachment.',
    },
  ],

  wealthTrace: [
    {
      name: 'Mitchell Jessen & Associates',
      relationship: 'Designers and implementers of the torture program',
      transferMethod: 'CIA paid Mitchell Jessen & Associates $81 million for designing and implementing the enhanced interrogation program. The two psychologists who had no interrogation experience designed a torture program and were paid $81 million of taxpayer money.',
      estimatedValue: '$81 million in CIA contracts',
      legalEntities: ['Mitchell Jessen & Associates (now dissolved)', 'Personal assets of James Mitchell and Bruce Jessen'],
      recoveryMechanisms: ['Constructive Trust', 'Civil ACLU settlement (partial)'],
    },
    {
      name: 'Black Site Construction and Operations',
      relationship: 'Taxpayer-funded torture infrastructure',
      transferMethod: 'CIA spent hundreds of millions constructing and operating black sites across multiple countries. Host government payments for cooperation. Contractor payments for security and logistics.',
      estimatedValue: '$300+ million estimated for black site program operations',
      legalEntities: ['CIA classified programs', 'Various government contractors'],
      recoveryMechanisms: ['Congressional investigation', 'FOIA', 'IG audit'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'U.S. Attorney General',
      title: 'Head of DOJ',
      jurisdiction: 'Federal criminal prosecution',
      powers: [
        'Appoint special counsel to investigate torture',
        'Prosecute under 18 U.S.C. § 2340',
        'Prosecute under War Crimes Act',
        'Investigate destruction of interrogation tapes',
      ],
    },
    {
      name: 'Senate Intelligence Committee',
      title: 'U.S. Senate Select Committee on Intelligence',
      jurisdiction: 'Intelligence oversight',
      powers: [
        'Declassify the full Torture Report (only executive summary released)',
        'Hold public hearings on the program',
        'Investigate CIA lies to Congress about program effectiveness',
      ],
    },
    {
      name: 'International Criminal Court',
      title: 'ICC Prosecutor',
      jurisdiction: 'International criminal jurisdiction',
      powers: [
        'Investigate torture as a war crime or crime against humanity',
        'Issue arrest warrants',
        'ICC Afghanistan investigation has examined U.S. conduct',
      ],
    },
    {
      name: 'UN Committee Against Torture',
      title: 'Treaty body monitoring CAT compliance',
      jurisdiction: 'International human rights monitoring',
      powers: [
        'Review U.S. compliance with CAT obligations',
        'Issue findings of violation',
        'Recommend prosecution',
      ],
    },
  ],
  successCriteria: [
    'Full declassification of the 6,700-page Senate Torture Report -- the American people have a right to know the complete scope of what was done in their name',
    'Criminal prosecution under the Federal Torture Statute and War Crimes Act for the death of Gul Rahman at the Salt Pit -- no statute of limitations applies to torture resulting in death',
    'Impeachment of Judge Jay Bybee for his role in authorizing torture through the OLC memos -- his legal opinions were not analysis but instruments designed to facilitate crime',
    'Full accounting of all CIA black site locations, host government cooperation agreements, and the treatment of every detainee who passed through the program',
    'Revocation of professional licenses for psychologists who designed the torture program and lawyers who authorized it -- James Mitchell and Bruce Jessen received $81 million for designing torture techniques',
    'Criminal referral of CIA officials who destroyed 92 interrogation videotapes in direct defiance of court orders and congressional requests',
    'Formal government apology and compensation for torture victims including Abu Zubaydah, who has been held for 20+ years without charge based on intelligence obtained through torture',
    'Permanent statutory prohibition on enhanced interrogation techniques with no executive waiver authority -- closing the loopholes that the OLC memos exploited',
    'Investigation and accountability for the CIA officers who lied to Congress about the torture program\'s effectiveness -- the Senate report documented that the CIA systematically misrepresented results',
    'Prosecution of John Kiriakou\'s treatment as a whistleblower -- the only person imprisoned in connection with the torture program was the man who exposed it, not anyone who committed torture',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'Torture was committed in your name, with your tax dollars. The torturers were rewarded. The whistleblower went to prison. Demand that the full Torture Report be declassified and that accountability be pursued.',
      urgency: 'high',
      relevantMechanisms: ['Federal Torture Statute', 'UN Convention Against Torture (CAT)'],
      steps: [
        {
          step: 1,
          title: 'Demand Full Torture Report Declassification',
          description: 'Only the 525-page executive summary has been released. The full 6,700-page report remains classified. Contact your senators to demand declassification.',
          filingTarget: 'Senate Intelligence Committee members',
          estimatedTime: '30 minutes',
        },
        {
          step: 2,
          title: 'Support Torture Accountability Organizations',
          description: 'Support organizations like the ACLU, Center for Constitutional Rights, and Reprieve that continue to fight for accountability.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The full story has not been told. The 6,700-page report is classified. Black site locations, host government cooperation, and the fate of detainees remain partially unknown.',
      urgency: 'high',
      relevantMechanisms: ['UN Convention Against Torture (CAT)'],
      steps: [
        {
          step: 1,
          title: 'FOIA for Black Site Records',
          description: 'File FOIA requests for all records related to black site construction, operations, host government agreements, and detainee treatment.',
          filingTarget: 'CIA FOIA: https://www.cia.gov/readingroom/foia-request',
          estimatedTime: 'Ongoing (CIA stonewalls routinely)',
        },
        {
          step: 2,
          title: 'Investigate Current Detainee Status',
          description: 'Several former black site detainees remain in Guantanamo without charge. Abu Zubaydah has been held for 20+ years. What is happening to these individuals now?',
          estimatedTime: '2-4 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Federal torture statute. War Crimes Act (no SOL). Universal jurisdiction. Civil habeas for remaining detainees. Bar complaints against torture memo authors.',
      urgency: 'high',
      relevantMechanisms: ['Federal Torture Statute', 'War Crimes Act', 'Universal Jurisdiction'],
      steps: [
        {
          step: 1,
          title: 'War Crimes Act Prosecution Referral',
          description: 'Prepare referral to DOJ for War Crimes Act prosecution. No statute of limitations. The death of Gul Rahman through hypothermia at the Salt Pit is murder under federal law.',
          legalBasis: ['18 U.S.C. § 2441', '18 U.S.C. § 2340'],
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Judicial Impeachment  -  Bybee',
          description: 'Prepare impeachment referral to the House for Jay Bybee. His torture memos were not legal analysis  -  they were instruments designed to facilitate crime.',
          legalBasis: ['U.S. Constitution Art. II, § 4'],
          estimatedTime: '2-4 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'The CIA lied to Congress about the torture program. The full report is classified. A federal judge who authorized torture sits on the bench. Congressional action is essential.',
      urgency: 'immediate',
      relevantMechanisms: ['Judicial Impeachment', 'Federal Torture Statute'],
      steps: [
        {
          step: 1,
          title: 'Declassify Full Torture Report',
          description: 'Push for declassification of the full 6,700-page Senate Intelligence Committee report. The American people have a right to know what was done in their name.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Impeach Jay Bybee',
          description: 'Introduce articles of impeachment against Judge Jay Bybee for his role in authorizing torture through the OLC torture memos.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'No SOL for War Crimes Act violations. No SOL for torture resulting in death. The Salt Pit death of Gul Rahman is an unsolved homicide.',
      urgency: 'high',
      relevantMechanisms: ['Federal Torture Statute', 'War Crimes Act'],
      steps: [
        {
          step: 1,
          title: 'Gul Rahman Death Investigation',
          description: 'Gul Rahman died of hypothermia at the Salt Pit black site. He was stripped, chained to a concrete floor, and left overnight in freezing temperatures. This is homicide. No SOL.',
          legalBasis: ['18 U.S.C. § 2340A(a)', '18 U.S.C. § 2441'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Evidence Destruction Prosecution',
          description: 'Prosecute CIA officials responsible for destroying 92 interrogation videotapes. The destruction occurred in direct defiance of court preservation orders and congressional document requests.',
          legalBasis: ['18 U.S.C. § 1519 (Obstruction)', '18 U.S.C. § 1512'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Mitchell and Jessen Financial Investigation',
          description: 'Investigate whether the $81 million contract paid to psychologists Mitchell and Jessen was properly authorized, whether services were accurately described, and whether any portion constitutes fraud against the government.',
          legalBasis: ['31 U.S.C. § 3729 (False Claims Act)'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'The American Psychological Association collaborated with the torture program. Professional licensing boards for psychologists and lawyers have failed to act.',
      urgency: 'standard',
      relevantMechanisms: ['UN Convention Against Torture (CAT)'],
      steps: [
        {
          step: 1,
          title: 'Professional Licensing Action',
          description: 'State licensing boards should investigate and revoke licenses of psychologists and attorneys who participated in designing and authorizing torture.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'APA Accountability Review',
          description: 'Continue oversight of the American Psychological Association\'s reforms following the Hoffman Report, which documented APA collusion with the CIA torture program. Ensure the reforms are genuine and permanent.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Contract Oversight Reform',
          description: 'Implement enhanced oversight for intelligence community contracts involving interrogation, detention, and human subjects research. Require independent ethics review and congressional notification.',
          estimatedTime: '12-18 months',
        },
      ],
    },
  ],
};
