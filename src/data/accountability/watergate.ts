import type { AccountabilityData } from '@/types/accountability';

export const watergateAccountability: AccountabilityData = {
  investigationSlug: 'watergate',

  // ============================================================
  // WHAT HAPPENED
  // ============================================================
  crimeSummary: 'From 1971 to 1974, President Richard Nixon and senior White House and campaign officials conducted a criminal conspiracy to sabotage political opponents, burglarize the Democratic National Committee headquarters, obstruct federal investigations, bribe witnesses, destroy evidence, misuse the CIA and FBI, commit perjury, and systematically defy congressional subpoenas. The conspiracy was directed from the Oval Office and recorded on the White House taping system. 69 people were charged, 48 convicted or pled guilty -- including two Cabinet members (Attorney General John Mitchell and Commerce Secretary Maurice Stans). Nixon resigned to avoid certain impeachment and removal, and was pardoned by his successor Gerald Ford before any charges could be filed. The scandal exposed a "cancer growing on the presidency" (John Dean) that subverted the rule of law at the highest level of American government.',

  totalHarm: 'Subversion of a presidential election through criminal espionage, sabotage, and money laundering. Destruction of public trust in the presidency -- Gallup measured a collapse from 66% to 24% presidential approval. Over $500,000 in hush money paid from campaign slush funds to buy witness silence. Wrongful prosecution of Daniel Ellsberg (case dismissed due to government misconduct). CRP slush fund of $60+ million including at least $780,000 in illegal corporate contributions. Constitutional crisis triggered by the Saturday Night Massacre. The Ford pardon established the precedent -- unbroken to this day -- that a president can direct crimes from the Oval Office and face no personal criminal consequences.',

  victimsAffected: 'The American public, whose democratic process was subverted by criminal espionage against the opposition party. Daniel Ellsberg, whose psychiatrist\'s office was burglarized by White House operatives. Democratic National Committee members and staff whose offices were burglarized and wiretapped. Journalists, activists, and political figures on the White House "enemies list" who were subjected to IRS audits, surveillance, and harassment. Martha Mitchell, wife of CRP director John Mitchell, who was physically restrained and sedated when she attempted to expose the scandal. Thousands of employees of the 21+ corporations pressured to make illegal campaign contributions. The institutional integrity of the Department of Justice, the FBI, the CIA, the IRS, and the presidency itself.',

  // ============================================================
  // WHO SHOULD BE HELD ACCOUNTABLE
  // ============================================================
  primaryTargets: [
    {
      name: 'Richard Nixon (Posthumous)',
      role: '37th President who directed the Watergate cover-up from June 23, 1972, ordering CIA obstruction of the FBI, approving hush money payments, coaching witnesses, firing the special prosecutor, and defying congressional subpoenas. Named unindicted co-conspirator by the grand jury.',
      currentStatus: 'Resigned August 9, 1974. Pardoned September 8, 1974 by Gerald Ford "for all offenses against the United States which he has committed or may have committed." Died April 22, 1994. Collected full presidential pension and benefits for 20 years after resignation. Never admitted criminal guilt.',
      accountabilityPath: 'Ford\'s pardon prevented all criminal accountability. The only remaining path is formal congressional recognition of Nixon\'s criminality and review of the presidential pardon power to prevent future abuse of the self-pardon/successor-pardon mechanism.',
      obstacles: [
        'Deceased -- no personal accountability possible',
        'Ford\'s unconditional pardon foreclosed all criminal prosecution',
        'Political rehabilitation campaign partially restored his legacy',
        'Supreme Court\'s Trump v. United States (2024) expanded presidential immunity beyond Watergate-era standards',
      ],
    },
    {
      name: 'Gerald Ford (Posthumous)',
      role: 'Issued the unconditional presidential pardon on September 8, 1974 -- 30 days after taking office -- without requiring any admission of guilt, apology, or cooperation from Nixon. The pardon covered "all offenses" whether committed or potentially committed.',
      currentStatus: 'Died December 26, 2006. The pardon is widely credited with costing Ford the 1976 election against Jimmy Carter. Ford\'s own press secretary resigned in protest. No evidence of an explicit pardon deal with Nixon, though historians believe implicit understandings "greased his departure."',
      accountabilityPath: 'Constitutional amendment limiting the presidential pardon power to prevent pardons of co-conspirators or predecessors without congressional approval. The Ford pardon remains the foundational precedent for executive impunity.',
      obstacles: [
        'Deceased',
        'Pardon power is constitutionally absolute under current interpretation',
        'Amendment process requires supermajority consensus unlikely in current political environment',
      ],
    },
    {
      name: 'Senior Convicted Conspirators (Mitchell, Haldeman, Ehrlichman)',
      role: 'Attorney General Mitchell approved the break-in plan and committed perjury. Chief of Staff Haldeman relayed Nixon\'s CIA obstruction order. Domestic Advisor Ehrlichman oversaw the Plumbers and ordered evidence destruction. All three convicted on conspiracy, obstruction, and perjury charges.',
      currentStatus: 'All sentenced to 2.5 to 8 years; all served approximately 18-19 months in minimum-security facilities. Mitchell died 1988. Haldeman died 1993. Ehrlichman died 1999. None served more than two years despite directing one of the most consequential criminal conspiracies in American history.',
      accountabilityPath: 'Historical -- sentences were served. The disparity between the scale of constitutional crimes (directing obstruction of justice from the Oval Office, subverting a presidential election) and the actual time served (18 months in minimum security) illustrates the structural leniency afforded to powerful political criminals.',
      obstacles: [
        'All deceased',
        'Sentences completed',
        'No mechanism for posthumous additional accountability',
      ],
    },
  ],

  // ============================================================
  // LEGAL MECHANISMS
  // ============================================================
  legalMechanisms: [
    {
      name: 'Special Prosecutor / Independent Counsel',
      statute: 'Ethics in Government Act of 1978; 28 CFR Part 600',
      description: 'Archibald Cox and then Leon Jaworski served as Watergate Special Prosecutors with authority to investigate and prosecute. Cox\'s firing triggered the Saturday Night Massacre. Jaworski won the unanimous Supreme Court ruling in United States v. Nixon. The Ethics in Government Act was passed as a direct response but its independent counsel provision expired in 1999.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Attorney General', 'Special Division of the D.C. Circuit (under expired Ethics in Government Act)'],
      applicability: 'directly_applicable',
      notes: 'Current special counsel regulations provide less independence than the expired statute -- the AG can fire the special counsel. The Saturday Night Massacre demonstrated the vulnerability of this mechanism.',
    },
    {
      name: 'Congressional Impeachment Power',
      statute: 'U.S. Constitution, Article I, Sections 2-3',
      description: 'The House Judiciary Committee voted three articles of impeachment: obstruction of justice, abuse of power, and contempt of Congress. Nixon resigned before a full House vote, making impeachment technically incomplete. Ford\'s pardon then prevented criminal prosecution, demonstrating that resignation plus pardon can circumvent the entire constitutional accountability framework.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['U.S. House of Representatives (impeachment)', 'U.S. Senate (trial and removal)'],
      applicability: 'directly_applicable',
      notes: 'Nixon\'s resignation prevented formal impeachment and removal. The precedent remains that a president can escape accountability by resigning and receiving a pardon from a successor.',
    },
    {
      name: 'Federal Conspiracy and Obstruction Prosecution',
      statute: '18 U.S.C. § 371 (Conspiracy); 18 U.S.C. § 1503 (Obstruction of Justice)',
      description: 'The Watergate Special Prosecution Force secured 48 convictions or guilty pleas out of 69 indictments, including the "Watergate Seven" on 24 counts. Sentences were remarkably lenient -- most defendants served less than two years for directing one of the most consequential criminal conspiracies in American history.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for most federal offenses',
      reachesHeirs: false,
      authorizedActors: ['DOJ Special Counsel', 'U.S. Attorneys', 'FBI'],
      applicability: 'directly_applicable',
      notes: 'The principal conspirator (Nixon) was never prosecuted due to Ford\'s pardon. All statutes of limitations have long expired for surviving participants.',
    },
    {
      name: 'Executive Privilege Limitation (United States v. Nixon)',
      statute: 'United States v. Nixon, 418 U.S. 683 (1974)',
      description: 'The Supreme Court ruled unanimously (8-0) that executive privilege cannot shield presidential communications from a criminal subpoena. Chief Justice Burger wrote that "no person, not even the president, is completely above the law." However, the ruling also formally recognized executive privilege as a constitutional doctrine for the first time.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Federal courts', 'Special Counsel', 'Congressional committees with subpoena power'],
      applicability: 'directly_applicable',
      notes: 'Trump v. United States (2024) subsequently expanded presidential immunity beyond Watergate-era standards, partially undermining the principle established here.',
    },
    {
      name: 'Post-Watergate Reform Legislation',
      statute: 'Ethics in Government Act (1978); Presidential Records Act (1978); FISA (1978); Privacy Act (1974)',
      description: 'Congress passed landmark reforms in direct response to Watergate abuses: independent counsel mechanism, public ownership of presidential records, warrant requirements for domestic surveillance, and limits on government data collection. Many of these reforms have since been weakened, circumvented, or allowed to expire.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress (legislative reform)', 'Special Inspector General offices', 'FISA Court'],
      applicability: 'requires_new_action',
      notes: 'The independent counsel provision lapsed in 1999. Many post-Watergate reforms have been weakened. The structural vulnerabilities Watergate exposed remain largely unaddressed.',
    },
  ],

  // ============================================================
  // WHERE THE MONEY WENT
  // ============================================================
  wealthTrace: [
    {
      name: 'Nixon Estate',
      relationship: 'Direct beneficiary -- Richard Nixon collected full presidential pension ($200,000+/year), Secret Service protection, and earned millions from book deals and the Frost/Nixon interviews ($600,000+) after resignation',
      transferMethod: 'Presidential pension, commercial media deals, book royalties, speaking fees',
      estimatedValue: '$4,000,000+ in post-resignation income and benefits',
      legalEntities: ['Nixon Presidential Library and Museum (now federally administered)', 'Richard Nixon Foundation'],
      recoveryMechanisms: ['No recovery mechanism -- pension was statutory entitlement', 'Ford\'s pardon prevented any criminal forfeiture or restitution orders'],
    },
    {
      name: 'CRP Slush Fund Recipients',
      relationship: 'Committee for the Re-election of the President raised $60M+ including $780,000+ in confirmed illegal corporate contributions from 21+ corporations',
      transferMethod: 'Campaign contributions laundered through Mexican banks, cash deliveries, corporate conduits, offshore transfers',
      estimatedValue: '$5,000,000+ in unaccounted or misused funds from the $60M+ total',
      legalEntities: ['Finance Committee to Re-elect the President', 'Mexican subsidiary accounts at Banco Internacional'],
      recoveryMechanisms: ['Corporate donors were fined relatively small amounts', 'GAO audit flagged $350,000 in questionable transactions', 'Full accounting was never completed'],
    },
    {
      name: 'Hush Money Recipients (Hunt, Liddy, Burglars, Families)',
      relationship: 'Defendants and their families received $500,000+ in cash payments to buy silence and prevent cooperation with investigators',
      transferMethod: 'Cash drops in airport lockers and phone booths using pseudonyms. Herbert Kalmbach and Anthony Ulasewicz served as intermediaries. Dorothy Hunt carried $10,000 in cash when she died in United Air Lines Flight 553.',
      estimatedValue: '$500,000+',
      recoveryMechanisms: ['Cash was spent or dispersed -- no practical recovery mechanism', 'Criminal restitution was not ordered as part of plea agreements'],
    },
  ],

  // ============================================================
  // WHO CAN ACT
  // ============================================================
  authoritiesWithPower: [
    {
      name: 'United States Congress',
      title: 'Legislative Branch',
      jurisdiction: 'Constitutional authority over impeachment, oversight, and legislative reform of the pardon power and presidential accountability mechanisms',
      powers: [
        'Constitutional amendment to limit the presidential pardon power (preventing pardons of co-conspirators or self-pardons)',
        'Reinstatement and strengthening of the independent counsel mechanism',
        'Legislative codification of the principle that a sitting president can be indicted',
        'Oversight hearings on the continuing structural vulnerabilities exposed by Watergate',
      ],
      contactMethod: 'Contact your representatives via congress.gov or by calling the Capitol switchboard at (202) 224-3121',
    },
    {
      name: 'Department of Justice',
      title: 'Executive Branch Law Enforcement',
      jurisdiction: 'Federal criminal prosecution authority and special counsel appointment power',
      powers: [
        'Revision of DOJ Office of Legal Counsel memos on presidential indictability',
        'Strengthening special counsel regulations to prevent future Saturday Night Massacres',
        'Formal internal review of Watergate-era prosecution decisions and sentencing recommendations',
      ],
      contactMethod: 'Department of Justice, 950 Pennsylvania Avenue NW, Washington, DC 20530',
    },
    {
      name: 'National Archives and Records Administration',
      title: 'Federal Records Custodian',
      jurisdiction: 'Custody of Nixon White House tapes, presidential records, and Watergate investigation files',
      powers: [
        'Continued declassification and public release of remaining sealed Watergate materials',
        'Advanced forensic analysis of the 18.5-minute gap using modern technology',
        'Public access preservation for all Watergate-related records',
      ],
      contactMethod: 'National Archives at College Park, 8601 Adelphi Road, College Park, MD 20740 or archives.gov',
    },
  ],

  // ============================================================
  // CITIZEN ACTION PATHS
  // ============================================================
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Watergate established the fundamental question: can a president be above the law? The answer remains unresolved. Citizens can advocate for constitutional reforms to close the accountability gaps Watergate exposed and Ford\'s pardon exploited.',
      steps: [
        { step: 1, title: 'Understand the Pardon Precedent', description: 'Ford\'s unconditional pardon of Nixon -- without requiring admission of guilt, apology, or cooperation -- remains the foundational precedent for presidential impunity. Learn how this precedent shapes current debates about executive accountability.' },
        { step: 2, title: 'Support Pardon Reform Legislation', description: 'Contact your representatives in Congress to support constitutional amendments or legislation limiting the presidential pardon power, particularly regarding self-pardons and pardons of co-conspirators.' },
        { step: 3, title: 'Advocate for Independent Counsel Restoration', description: 'The Ethics in Government Act\'s independent counsel provision expired in 1999. Support legislation restoring a truly independent prosecution mechanism that cannot be fired by the president (preventing future Saturday Night Massacres).' },
        { step: 4, title: 'Monitor Current Accountability Mechanisms', description: 'Follow the work of the DOJ Inspector General, congressional oversight committees, and FOIA litigation organizations to ensure post-Watergate safeguards remain functional.' },
      ],
      relevantMechanisms: ['Congressional advocacy', 'Constitutional amendment process', 'FOIA requests for remaining sealed materials'],
      urgency: 'standard',
    },
    {
      role: 'journalist',
      overview: 'Watergate remains the gold standard for investigative journalism. The lessons of Woodward and Bernstein -- follow the money, protect sources, verify independently -- apply to every subsequent presidential scandal.',
      steps: [
        { step: 1, title: 'Continue FOIA Litigation for Sealed Materials', description: 'File FOIA requests for remaining classified or sealed Watergate-era documents, including materials related to the 18.5-minute gap, sealed Oliver wiretap transcripts, and Nixon grand jury testimony.' },
        { step: 2, title: 'Document Structural Vulnerabilities', description: 'Report on how post-Watergate reforms have been weakened or circumvented, including the lapsed independent counsel statute, expanded executive privilege claims, and judicial rulings expanding presidential immunity.' },
        { step: 3, title: 'Apply Watergate Investigative Methods to Current Scandals', description: 'Use the Watergate pattern -- following money trails, cultivating government sources, subpoena enforcement litigation, and public records analysis -- as a template for investigating current executive branch misconduct.' },
      ],
      relevantMechanisms: ['FOIA litigation', 'Source protection', 'Financial records analysis', 'Congressional hearing testimony'],
      urgency: 'standard',
    },
    {
      role: 'lawyer',
      overview: 'United States v. Nixon established that executive privilege is not absolute, but Trump v. United States (2024) expanded presidential immunity. Legal action is needed to prevent the erosion of Watergate-era accountability principles.',
      steps: [
        { step: 1, title: 'Challenge Expanded Presidential Immunity', description: 'Bring litigation challenging the scope of presidential immunity as expanded by Trump v. United States, using the Watergate precedent that "no person, not even the president, is completely above the law."' },
        { step: 2, title: 'Support Special Counsel Independence', description: 'File amicus briefs and participate in litigation defending the independence of special counsel investigations, citing the Saturday Night Massacre as the paradigmatic example of why prosecutorial independence from the president is essential.' },
        { step: 3, title: 'Advocate for Sitting President Indictability', description: 'Challenge the DOJ Office of Legal Counsel memos holding that a sitting president cannot be indicted, which have no constitutional basis and were never tested in court during Watergate.' },
      ],
      relevantMechanisms: ['Constitutional litigation', 'Amicus briefs', 'OLC memo challenges', 'FOIA enforcement'],
      urgency: 'standard',
    },
    {
      role: 'elected_official',
      overview: 'Congress has the power -- and the constitutional obligation -- to close the accountability gaps that Watergate exposed and that remain open fifty years later.',
      steps: [
        { step: 1, title: 'Restore Independent Counsel Authority', description: 'Introduce and support legislation creating a permanently authorized independent counsel mechanism with statutory protection against firing by the president or attorney general, directly addressing the Saturday Night Massacre vulnerability.' },
        { step: 2, title: 'Constitutional Amendment on Pardon Power', description: 'Propose a constitutional amendment limiting the presidential pardon power to prevent pardons of co-conspirators, subordinates involved in the same criminal scheme, or self-pardons. The Ford-Nixon pardon demonstrated the danger of unchecked clemency power.' },
        { step: 3, title: 'Codify Presidential Indictability', description: 'Pass legislation affirming that a sitting president can be indicted for criminal conduct, overriding the DOJ Office of Legal Counsel memos that prevented Nixon\'s indictment and that continue to shield presidents from criminal process.' },
        { step: 4, title: 'Strengthen Congressional Subpoena Enforcement', description: 'Pass legislation creating expedited judicial enforcement of congressional subpoenas, addressing the months-long delays that allowed Nixon to stall the investigation. Include criminal contempt provisions with mandatory referral to an independent prosecutor.' },
      ],
      relevantMechanisms: ['Legislative authority', 'Constitutional amendment process', 'Oversight hearing power', 'Subpoena enforcement'],
      urgency: 'standard',
    },
  ],

  // ============================================================
  // SUCCESS CRITERIA
  // ============================================================
  successCriteria: [
    'Constitutional amendment limiting the presidential pardon power to prevent pardons of co-conspirators and self-pardons',
    'Restoration of a truly independent counsel mechanism with statutory protection against presidential firing',
    'Legislative affirmation that a sitting president can be indicted for criminal conduct',
    'Full declassification and public release of all remaining sealed Watergate materials',
    'Modern forensic analysis of the 18.5-minute gap using current technology',
    'Formal congressional recognition that Nixon directed a criminal conspiracy from the Oval Office and that Ford\'s pardon established a dangerous precedent for executive impunity',
    'Strengthened congressional subpoena enforcement with expedited judicial review and meaningful contempt penalties',
  ],
};
