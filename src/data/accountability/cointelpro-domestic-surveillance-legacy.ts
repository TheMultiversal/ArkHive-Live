import type { AccountabilityData } from '@/types/accountability';

export const cointelproAccountability: AccountabilityData = {
  investigationSlug: 'cointelpro-domestic-surveillance-legacy',

  // ============================================================
  // WHAT HAPPENED
  // ============================================================
  crimeSummary: 'From 1956 to 1971, the FBI operated COINTELPRO (Counter Intelligence Program), a covert and illegal campaign of infiltration, disruption, psychological warfare, and political assassination targeting constitutionally protected domestic organizations and individuals. Under J. Edgar Hoover\'s direct authority, the FBI ran over 2,000 documented operations against civil rights leaders (Martin Luther King Jr., Malcolm X), Black liberation movements (Black Panther Party, SNCC, CORE), the American Indian Movement, the Socialist Workers Party, antiwar organizations, the women\'s liberation movement, and white supremacist groups. Methods included warrantless wiretapping and bugging, forged anonymous letters, agent provocateurs, fabricated criminal charges, tax audits as harassment, media disinformation campaigns, and complicity in assassination. COINTELPRO was exposed by the 1971 Citizens\' Commission burglary and investigated by the Church Committee in 1975-1976. No FBI official was ever criminally prosecuted for COINTELPRO abuses. The program\'s tactics and legal architecture shaped the post-9/11 surveillance state.',

  totalHarm: 'At least two confirmed assassinations (Fred Hampton, Mark Clark); complicity in multiple additional killings (Viola Liuzzo murder, Bunchy Carter and John Huggins at UCLA, Sylvester Bell in San Diego); the wrongful imprisonment of Geronimo Pratt (27 years), Leonard Peltier (48+ years and counting), and Dhoruba bin Wahad (19 years); psychological warfare that contributed to the deaths of Jean Seberg and William O\'Neal; the systematic destruction of the Black Panther Party, SCLC, SWP, AIM, SDS, and dozens of other organizations; the suppression of First Amendment rights for millions of Americans across four presidential administrations; and the creation of the institutional and legal architecture for the post-9/11 mass surveillance state that now monitors hundreds of millions of Americans.',

  victimsAffected: 'Millions of Americans. Direct victims include members and supporters of the Black Panther Party, Southern Christian Leadership Conference, Student Nonviolent Coordinating Committee, Congress of Racial Equality, American Indian Movement, Socialist Workers Party, Students for a Democratic Society, the antiwar movement, the women\'s liberation movement, the Nation of Islam, and dozens of other organizations. The FBI maintained files on approximately 500,000 Americans during COINTELPRO\'s active period. The 7,500+ "Ghetto Informants" recruited under the 1967 Ghetto Informant Program monitored entire Black communities. Post-9/11 surveillance programs built on COINTELPRO\'s foundations now affect virtually all Americans through bulk metadata collection, facial recognition, and social media monitoring.',

  // ============================================================
  // WHO SHOULD BE HELD ACCOUNTABLE
  // ============================================================
  primaryTargets: [
    {
      name: 'FBI (Institutional)',
      role: 'Created and operated COINTELPRO as a 15-year institutional program spanning 2,000+ covert operations, multiple assassinations, and systematic constitutional violations under four presidential administrations.',
      currentStatus: 'The FBI has never formally apologized for COINTELPRO. No institutional accountability was imposed. The Bureau\'s current $11.3 billion annual budget (FY2024) was never reduced as a consequence of documented abuses. Post-9/11 authorities have expanded FBI domestic surveillance powers beyond COINTELPRO\'s original scope.',
      accountabilityPath: 'Congressional investigation into why institutional accountability was never imposed. Mandatory formal apology and acknowledgment of constitutional violations. Independent review of current domestic surveillance operations for COINTELPRO-pattern activities. Creation of a permanent inspector general position specifically for monitoring political surveillance. Legislative reform requiring congressional pre-authorization for counterintelligence operations targeting domestic political organizations.',
      obstacles: [
        'Massive institutional power and political influence',
        'Post-9/11 security narrative shields the Bureau from reform proposals',
        'FBI\'s role as primary federal law enforcement creates dependency across government',
        'Fifty years of institutional resistance to accountability for COINTELPRO',
      ],
    },
    {
      name: 'J. Edgar Hoover (Posthumous)',
      role: 'FBI Director (1924-1972) who created COINTELPRO, personally authorized the King "suicide letter," designated Black leaders for "neutralization," ordered Hampton surveillance, and maintained blackmail files on politicians to prevent oversight.',
      currentStatus: 'Died in office May 2, 1972. Never investigated or charged. The J. Edgar Hoover Building at 935 Pennsylvania Avenue NW in Washington, D.C. still bears his name as FBI headquarters.',
      accountabilityPath: 'Congressional resolution formally condemning Hoover\'s role in COINTELPRO. Removal of Hoover\'s name from FBI headquarters. Declassification and public release of all remaining Hoover-era COINTELPRO documents. Posthumous formal finding of responsibility by the DOJ Inspector General.',
      obstacles: [
        'Deceased, cannot face criminal accountability',
        'Institutional loyalty within the FBI protects his legacy',
        'FBI headquarters naming has symbolic political significance',
        'Remaining classified documents may implicate other branches of government',
      ],
    },
    {
      name: 'William C. Sullivan',
      role: 'FBI Assistant Director heading Division Five (Domestic Intelligence). Managed all COINTELPRO field operations. Authored the anonymous "suicide letter" sent to Martin Luther King Jr.',
      currentStatus: 'Shot and killed by a hunter near his home in Sugar Hill, New Hampshire on November 9, 1977, days before he was scheduled to testify before the House Select Committee on Assassinations. The shooting was ruled accidental.',
      accountabilityPath: 'Congressional investigation into the circumstances of Sullivan\'s death immediately before scheduled testimony. Declassification of Sullivan\'s Division Five files. Public acknowledgment of Sullivan\'s role in the King harassment campaign.',
      obstacles: [
        'Deceased under suspicious circumstances before testimony',
        'Division Five records remain partially classified',
        'No surviving defendant to hold accountable',
      ],
    },
    {
      name: 'Edward Hanrahan',
      role: 'Cook County State\'s Attorney whose officers executed the December 4, 1969 raid that killed Fred Hampton and Mark Clark. Fourteen officers fired 82-99 rounds while the Panthers fired at most one shot.',
      currentStatus: 'Indicted in 1971 for conspiracy to obstruct justice through fabricating evidence; acquitted. Lost 1972 reelection. Hampton family won $1.85 million civil settlement in 1982. Hanrahan died in 2009.',
      accountabilityPath: 'Posthumous congressional investigation into the FBI-Hanrahan coordination. Public release of all FBI communications with Hanrahan\'s office regarding the raid. Historical commission finding documenting the coordinated assassination.',
      obstacles: [
        'Deceased (2009)',
        'Acquitted at trial in 1971 (double jeopardy would apply)',
        'Civil settlement partially addressed but did not fully resolve accountability',
      ],
    },
    {
      name: 'Mark Felt and Edward S. Miller',
      role: 'FBI Chief Inspector and Assistant Director who co-authorized warrantless COINTELPRO break-ins. Only FBI officials ever convicted of COINTELPRO-related crimes.',
      currentStatus: 'Convicted in 1980 of authorizing warrantless entries against the Weather Underground. Pardoned by President Reagan in 1981, who stated they acted "on high principle." Felt later revealed as "Deep Throat" Watergate source. Felt died 2008; Miller\'s status unknown.',
      accountabilityPath: 'Congressional investigation into the Reagan pardon and whether it was part of a broader political agreement to shield intelligence officials from accountability. The pardon effectively ended all criminal accountability for COINTELPRO and sent the message that political surveillance carries no consequences.',
      obstacles: [
        'Presidential pardon eliminates federal criminal liability',
        'Both are deceased or very elderly',
        'Reagan pardon has become a settled political fact',
      ],
    },
    {
      name: 'William O\'Neal',
      role: 'FBI informant who infiltrated the Black Panther Party as Fred Hampton\'s bodyguard. Provided the floor plan of Hampton\'s apartment to the FBI. Drugged Hampton with secobarbital the night before the fatal raid.',
      currentStatus: 'Received $10,000+ in documented FBI payments. Testified before Church Committee and grand jury. Died by suicide on January 15, 1990, the night before the Martin Luther King Jr. federal holiday.',
      accountabilityPath: 'O\'Neal was never criminally charged for his role in Hampton\'s death despite providing the intelligence and drugging that enabled the assassination. Congressional investigation should examine the FBI\'s systematic use of informants as instruments of violence and the policy of immunizing informants from prosecution for crimes committed at the Bureau\'s direction.',
      obstacles: [
        'Deceased by suicide (1990)',
        'FBI informant privilege and immunity agreements',
        'Prosecution would have implicated FBI handlers',
      ],
    },
    {
      name: 'Gary Thomas Rowe',
      role: 'FBI informant inside the KKK who participated in Freedom Rider beatings (1961), was connected to the 16th Street Baptist Church bombing (1963), and was present during the murder of Viola Liuzzo (1965).',
      currentStatus: 'Given federal witness protection and a new identity after testifying in Klan trials. Never prosecuted for violent crimes despite FBI knowledge of his participation. Died 1998.',
      accountabilityPath: 'Congressional investigation into FBI knowledge and authorization of informant violence. The Rowe case demonstrates that the Bureau knowingly allowed its agents to participate in murder and terrorism as the cost of maintaining intelligence sources. Formal DOJ finding on whether Rowe\'s immunity constituted obstruction of justice.',
      obstacles: [
        'Deceased (1998)',
        'Witness protection agreement may have included immunity provisions',
        'FBI has strong institutional interest in protecting informant relationships',
      ],
    },
    {
      name: 'Richard G. Held',
      role: 'FBI Special Agent in Charge who intensified COINTELPRO operations against the American Indian Movement at Pine Ridge Reservation and increased FBI support for paramilitary GOON squads.',
      currentStatus: 'Later served as SAC in San Francisco. Never charged despite AIM allegations of complicity in over 60 unsolved homicides on Pine Ridge during 1973-1976. Retired from FBI.',
      accountabilityPath: 'Congressional investigation into FBI operations at Pine Ridge during the "Reign of Terror." Independent review of the 60+ unsolved homicides during this period. Examination of FBI support for and coordination with Dick Wilson\'s GOON squads. Review of Leonard Peltier\'s conviction in light of fabricated evidence.',
      obstacles: [
        'Elderly or deceased',
        'Pine Ridge operations remain among the most classified COINTELPRO-era programs',
        'AIM leadership and witnesses from this era are aging and dying',
        'Peltier case remains politically sensitive',
      ],
    },
  ],

  // ============================================================
  // LEGAL MECHANISMS AVAILABLE
  // ============================================================
  legalMechanisms: [
    {
      name: 'Section 1983 Civil Rights Lawsuits',
      statute: '42 U.S.C. § 1983',
      description: 'Any person who, under color of state law, deprives another of constitutional rights is liable for damages. This was the basis for the Hampton family\'s $1.85 million settlement and Geronimo Pratt\'s $4.5 million settlement. It remains available for any COINTELPRO victim or their heirs who can demonstrate ongoing injury or newly discovered evidence.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Applies the state\'s personal injury statute of limitations (typically 2-3 years), but the discovery rule and continuing violation doctrine can extend this significantly. For newly declassified COINTELPRO documents revealing previously unknown targeting, the clock starts at discovery.',
      reachesHeirs: true,
      authorizedActors: ['Any injured party', 'Heirs and estates of COINTELPRO victims', 'Civil rights organizations on behalf of classes of victims'],
      applicability: 'directly_applicable',
      notes: 'The most proven legal mechanism for COINTELPRO accountability. Hampton, Pratt, bin Wahad, and SWP all successfully used civil rights litigation. Each new FOIA disclosure potentially opens new claims.',
    },
    {
      name: 'Conspiracy to Violate Civil Rights',
      statute: '42 U.S.C. § 1985(3)',
      description: 'Prohibits conspiracies to deprive persons or classes of persons of equal protection or equal privileges and immunities. COINTELPRO was by definition a conspiracy among FBI officials to violate the civil rights of targeted groups. Class actions on behalf of organizations specifically targeted (Panthers, AIM, SWP) remain viable.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years; discovery rule applies. New evidence of conspiracy from declassified documents restarts the clock.',
      reachesHeirs: true,
      authorizedActors: ['Targeted organizations and their members', 'Heirs of deceased COINTELPRO targets'],
      applicability: 'directly_applicable',
      notes: 'Particularly strong for class actions representing entire organizations that were targeted for destruction. The BPP, AIM, and SWP were all subjected to coordinated, multi-year conspiracy by FBI officials.',
    },
    {
      name: 'Federal Tort Claims Act (FTCA)',
      statute: '28 U.S.C. § 2671 et seq.',
      description: 'Allows civil lawsuits against the United States for money damages for injury caused by the negligent or wrongful act of any federal employee acting within the scope of employment. COINTELPRO operations were conducted by FBI employees in the course of their official duties.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '2 years from the date of discovery of the injury. Each new disclosure of previously unknown COINTELPRO operations potentially opens a new FTCA claim.',
      reachesHeirs: true,
      authorizedActors: ['Any person injured by FBI COINTELPRO operations', 'Estates of deceased victims'],
      applicability: 'potentially_applicable',
      notes: 'The discretionary function exception may shield some policy-level decisions, but the execution of illegal operations (break-ins, wiretapping without warrants, complicity in murder) falls outside any discretionary function protection.',
    },
    {
      name: 'FOIA Litigation for Declassification',
      statute: '5 U.S.C. § 552 (Freedom of Information Act)',
      description: 'FOIA provides a legal mechanism to force disclosure of remaining classified COINTELPRO documents. Significant portions of COINTELPRO files remain classified or heavily redacted, particularly files related to Pine Ridge operations, informant identities, and coordination with other intelligence agencies. Litigation can compel disclosure.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Any person or organization', 'News organizations', 'Academic researchers', 'ACLU', 'National Security Archive'],
      applicability: 'directly_applicable',
      notes: 'FOIA litigation has been the single most effective tool for uncovering COINTELPRO abuses. Every major disclosure has led to additional accountability actions. The remaining classified files likely contain evidence of operations not yet publicly documented.',
    },
    {
      name: 'Congressional Investigation and Subpoena Power',
      statute: 'U.S. Constitution Art. I, Section 8; Rules of the House and Senate',
      description: 'Congress has unlimited investigative authority and subpoena power over federal agencies. Congressional investigations are not subject to statutes of limitations. Congress can compel testimony, demand document production, hold officials in contempt, and pass legislation based on findings.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['U.S. Senate Select Committee on Intelligence', 'U.S. Senate Judiciary Committee', 'U.S. House Judiciary Committee', 'U.S. House Committee on Oversight and Accountability'],
      applicability: 'directly_applicable',
      notes: 'The Church Committee itself was a congressional investigation. A modern successor investigation could examine: (1) post-COINTELPRO continuation of political surveillance, (2) whether Church Committee reforms were implemented effectively, (3) post-9/11 erosion of civil liberties protections, (4) current FBI surveillance of domestic political movements.',
    },
    {
      name: 'Presidential Clemency for Political Prisoners',
      statute: 'U.S. Constitution Art. II, Section 2',
      description: 'The President has plenary power to grant clemency, pardons, and commutations. Leonard Peltier, imprisoned since 1977 on a conviction widely regarded as a miscarriage of justice achieved through fabricated evidence, is the most prominent candidate for presidential clemency related to COINTELPRO.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['President of the United States', 'Office of the Pardon Attorney (DOJ)', 'Advocacy organizations'],
      applicability: 'directly_applicable',
      notes: 'Multiple former FBI agents, federal judges, and members of Congress have called for Peltier\'s release. The clemency petition has been pending for decades. Every president since Carter has declined to act.',
    },
    {
      name: 'State Civil Rights and Wrongful Death Actions',
      statute: 'Varies by state, Illinois Wrongful Death Act (740 ILCS 180); California Civil Code § 52.1 (Bane Act)',
      description: 'State-level civil rights statutes and wrongful death laws provide additional avenues for accountability that are not affected by federal immunity doctrines. Illinois law governed the Hampton assassination; California law applied to Geronimo Pratt\'s wrongful imprisonment and FBI operations against the LA Panthers.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state. Discovery rule applies in most jurisdictions.',
      reachesHeirs: true,
      authorizedActors: ['Victims and their families', 'State attorneys general', 'Civil rights organizations'],
      applicability: 'potentially_applicable',
      notes: 'State actions are not preempted by federal immunity and can proceed even when federal claims are barred. New evidence from FOIA disclosures can restart limitation periods under the discovery rule.',
    },
    {
      name: 'International Human Rights Mechanisms',
      statute: 'International Covenant on Civil and Political Rights (ICCPR); Universal Declaration of Human Rights; UN Special Rapporteur mandates',
      description: 'The United States is a signatory to the ICCPR, which prohibits arbitrary interference with privacy, freedom of expression, and freedom of association. COINTELPRO violated multiple ICCPR provisions. While international mechanisms lack direct enforcement power against the US, they provide legitimacy, visibility, and political pressure for accountability.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['UN Human Rights Committee', 'UN Special Rapporteur on Freedom of Expression', 'Inter-American Commission on Human Rights', 'International human rights NGOs'],
      applicability: 'requires_new_action',
      notes: 'Leonard Peltier\'s case has been taken up by Amnesty International as a political prisoner case. The UN Working Group on Arbitrary Detention could issue an opinion finding Peltier\'s continued imprisonment arbitrary under international law.',
    },
  ],

  // ============================================================
  // WEALTH TRACING
  // ============================================================
  wealthTrace: [
    {
      name: 'FBI Institutional Budget (Continuous Growth Without Accountability)',
      relationship: 'Primary institutional beneficiary of COINTELPRO, budget grew from $170M (1960) to $11.3B (FY2024) without any reduction for documented constitutional violations',
      transferMethod: 'Congressional appropriations. Despite Church Committee findings documenting systematic illegality, the FBI\'s budget was never reduced. Post-9/11 budget increases effectively rewarded the surveillance infrastructure COINTELPRO built.',
      estimatedValue: '$11.3 billion (FY2024 appropriation)',
      legalEntities: ['Federal Bureau of Investigation', 'Department of Justice'],
      recoveryMechanisms: ['Congressional appropriations reform', 'Mandatory independent oversight tied to funding', 'Victim compensation fund from FBI operational budget'],
    },
    {
      name: 'Post-9/11 Surveillance-Industrial Complex',
      relationship: 'Private corporations that profit from mass surveillance infrastructure built on COINTELPRO\'s legal and institutional foundations',
      transferMethod: 'Intelligence community contracting exploded from approximately $18 billion (2001) to over $80 billion annually post-9/11. Companies like Palantir, Booz Allen Hamilton, and Leidos profit directly from domestic intelligence operations that mirror COINTELPRO tactics under new legal authorities.',
      estimatedValue: '$80+ billion annually in intelligence community contracts',
      legalEntities: ['Palantir Technologies', 'Booz Allen Hamilton', 'Leidos', 'General Dynamics Information Technology', 'SAIC'],
      recoveryMechanisms: ['Congressional appropriations reform', 'FISA reform legislation', 'Inspector General audits of contractor spending'],
    },
    {
      name: 'FBI Confidential Informant Payments (COINTELPRO Era)',
      relationship: 'FBI paid thousands of informants to infiltrate and disrupt constitutionally protected organizations',
      transferMethod: 'William O\'Neal received $10,000+ in documented payments. The FBI maintained approximately 7,500 "Ghetto Informants" under the 1967 program. Total COINTELPRO-era informant expenditures remain classified.',
      estimatedValue: 'Classified, estimated tens of millions over 15 years',
      legalEntities: ['FBI Confidential Informant Fund'],
      recoveryMechanisms: ['FOIA litigation for disbursement records', 'Congressional investigation and subpoena'],
    },
    {
      name: 'Hampton and Clark Family Settlement',
      relationship: 'Partial compensation for FBI-coordinated assassination of Fred Hampton and Mark Clark',
      transferMethod: '$1.85 million civil settlement in 1982 paid by City of Chicago, Cook County, and federal government. The settlement confirmed the coordinated nature of the raid but did not constitute an admission of assassination.',
      estimatedValue: '$1.85 million (1982)',
      legalEntities: ['City of Chicago', 'Cook County', 'U.S. Government'],
      recoveryMechanisms: ['Already partially settled, additional claims possible with new evidence'],
    },
    {
      name: 'Geronimo Pratt Settlement',
      relationship: 'Compensation for 27 years of wrongful imprisonment based on fabricated evidence and suppressed COINTELPRO wiretaps',
      transferMethod: '$4.5 million civil settlement in 2000 from FBI and City of Los Angeles. Pratt\'s conviction was vacated in 1997 after courts found FBI and LAPD suppressed exculpatory evidence.',
      estimatedValue: '$4.5 million (2000)',
      legalEntities: ['FBI', 'City of Los Angeles', 'LAPD'],
      recoveryMechanisms: ['Already settled, additional claims unlikely'],
    },
    {
      name: 'Socialist Workers Party Judgment',
      relationship: 'Federal court damages for 15 years of illegal FBI surveillance, 204+ break-ins, and 1,300 planted informants',
      transferMethod: '$264,000 court judgment in 1986 after Judge Griesa ruled the FBI violated First and Fourth Amendment rights. The court found the SWP had committed no criminal or violent acts during the entire surveillance period.',
      estimatedValue: '$264,000 (1986)',
      legalEntities: ['FBI', 'U.S. Government'],
      recoveryMechanisms: ['Already paid, establishes precedent for similar claims by other targeted organizations'],
    },
    {
      name: 'Unrecompensed COINTELPRO Victims',
      relationship: 'Hundreds of individuals and organizations targeted by COINTELPRO who never received compensation',
      transferMethod: 'The vast majority of COINTELPRO victims never filed civil suits or received any compensation. The Liuzzo family received nothing from the FBI. Jean Seberg\'s estate received nothing. Hundreds of Panthers, AIM members, SWP members, and activists who were surveilled, harassed, fired from jobs, or imprisoned on fabricated charges were never compensated.',
      estimatedValue: 'Incalculable, thousands of lives disrupted, careers destroyed, organizations decimated',
      legalEntities: ['FBI', 'U.S. Government'],
      recoveryMechanisms: ['Class action Section 1983 litigation', 'Congressional reparations legislation', 'Victim compensation fund'],
    },
  ],

  // ============================================================
  // AUTHORITIES WITH POWER TO ACT
  // ============================================================
  authoritiesWithPower: [
    {
      name: 'U.S. Senate Select Committee on Intelligence',
      title: 'Senate Intelligence Committee (SSCI)',
      jurisdiction: 'Federal, direct successor to the Church Committee; primary oversight authority over intelligence community',
      powers: [
        'Subpoena classified COINTELPRO documents',
        'Investigate current FBI domestic surveillance for COINTELPRO-pattern activities',
        'Hold public and classified hearings',
        'Issue public reports',
        'Introduce reform legislation',
      ],
    },
    {
      name: 'U.S. Senate Judiciary Committee',
      title: 'Senate Judiciary Committee',
      jurisdiction: 'Federal, oversight of DOJ and FBI; confirmation of FBI Director and Attorney General',
      powers: [
        'Subpoena DOJ and FBI records',
        'Condition FBI Director confirmation on COINTELPRO accountability commitments',
        'Investigate pardon of Felt and Miller',
        'Introduce legislation reforming FBI domestic operations',
        'Hold hearings on Leonard Peltier clemency',
      ],
    },
    {
      name: 'U.S. Attorney General',
      title: 'Head of the Department of Justice',
      jurisdiction: 'Federal, supervision of the FBI; enforcement of civil rights laws',
      powers: [
        'Order declassification of remaining COINTELPRO files',
        'Open investigation into unprosecuted COINTELPRO operations',
        'Issue formal DOJ acknowledgment of COINTELPRO illegality',
        'Reform Attorney General Guidelines to prevent recurrence',
        'Recommend presidential clemency for political prisoners',
      ],
    },
    {
      name: 'DOJ Inspector General',
      title: 'Inspector General, Department of Justice',
      jurisdiction: 'Federal, independent oversight of DOJ and FBI',
      powers: [
        'Investigate whether COINTELPRO-type activities continue under different names',
        'Audit FBI domestic surveillance operations for compliance with Attorney General Guidelines',
        'Issue public reports on findings',
        'Refer criminal conduct to appropriate authorities',
      ],
    },
    {
      name: 'President of the United States',
      title: 'Commander in Chief',
      jurisdiction: 'Federal, plenary pardon power; executive authority over intelligence agencies',
      powers: [
        'Grant clemency or pardon to Leonard Peltier',
        'Issue executive order mandating declassification of all COINTELPRO documents over 50 years old',
        'Direct FBI to issue formal apology for COINTELPRO',
        'Establish commission on political surveillance accountability',
        'Remove J. Edgar Hoover\'s name from FBI headquarters',
      ],
    },
    {
      name: 'FISA Court',
      title: 'Foreign Intelligence Surveillance Court',
      jurisdiction: 'Federal, oversight of intelligence surveillance requests',
      powers: [
        'Impose stricter standards on FBI surveillance requests targeting domestic political activity',
        'Publish declassified opinions documenting scope of current domestic surveillance',
        'Reject surveillance applications that mirror COINTELPRO targeting patterns',
      ],
    },
    {
      name: 'State Attorneys General (Illinois, California, New York)',
      title: 'Chief law enforcement officers of their respective states',
      jurisdiction: 'State-level, civil rights enforcement, wrongful death, conspiracy',
      powers: [
        'Investigate state-level liability for COINTELPRO operations within their jurisdiction',
        'File civil rights actions against federal agents who violated state law',
        'Issue public reports on COINTELPRO impact within their states',
        'Coordinate with federal oversight for comprehensive accountability',
      ],
    },
  ],

  // ============================================================
  // ROLE-BASED ACTION PATHS
  // ============================================================
  actionPaths: [
    // ---- CITIZEN ----
    {
      role: 'citizen',
      overview: 'As a citizen, you can demand accountability for COINTELPRO through FOIA requests for remaining classified documents, complaints to congressional oversight committees, support for Leonard Peltier\'s clemency petition, and pressure on elected officials to investigate whether COINTELPRO-type operations continue under post-9/11 authorities. COINTELPRO was an attack on every American\'s First Amendment rights, you have standing to demand answers.',
      urgency: 'standard',
      relevantMechanisms: ['Congressional Investigation and Subpoena Power', 'FOIA Litigation for Declassification', 'Presidential Clemency for Political Prisoners'],
      steps: [
        {
          step: 1,
          title: 'Submit FOIA Requests for Classified COINTELPRO Files',
          description: 'File Freedom of Information Act requests with the FBI, DOJ, CIA, and NSA for all remaining classified COINTELPRO-era documents. Significant portions of the files remain redacted or classified, particularly those related to Pine Ridge, informant identities, and interagency coordination.',
          filingTarget: 'FBI FOIA: https://vault.fbi.gov/foia-library | DOJ FOIA: https://www.justice.gov/oip',
          templateText: 'Under the Freedom of Information Act (5 U.S.C. Section 552), I request copies of all records related to:\n\n1. COINTELPRO operations targeting the American Indian Movement at Pine Ridge Reservation, South Dakota (1973-1976), including all communications with the Bureau of Indian Affairs, Dick Wilson, and the Guardians of the Oglala Nation (GOON) squads\n2. FBI informant reports and handler communications related to William O\'Neal and the targeting of Fred Hampton (1968-1969)\n3. All interagency communications between the FBI, CIA (Operation CHAOS), NSA (Operation SHAMROCK/MINARET), and U.S. Army intelligence regarding COINTELPRO targets\n4. Any post-1971 FBI domestic counterintelligence programs targeting political organizations\n\nI request a fee waiver as disclosure is in the public interest.\n\n[Your Name]',
          legalBasis: ['5 U.S.C. Section 552 (Freedom of Information Act)'],
          estimatedTime: '1-2 hours to prepare and submit',
        },
        {
          step: 2,
          title: 'Contact Your Members of Congress',
          description: 'Write to your U.S. Senators and Representative demanding: (1) a modern Church Committee investigation into current FBI domestic surveillance, (2) presidential clemency for Leonard Peltier, (3) declassification of all COINTELPRO documents over 50 years old, and (4) removal of J. Edgar Hoover\'s name from FBI headquarters.',
          filingTarget: 'Find your representatives at https://www.congress.gov/members/find-your-member',
          templateText: 'Dear [Representative/Senator],\n\nI am writing to demand action on the unresolved legacy of COINTELPRO, the FBI\'s illegal 15-year program of political surveillance, infiltration, and assassination targeting American citizens.\n\n1. MODERN CHURCH COMMITTEE: The original Church Committee (1975-1976) found that COINTELPRO was "a sophisticated vigilante operation aimed squarely at preventing the exercise of First Amendment rights." Post-9/11 authorities have expanded FBI domestic surveillance powers far beyond COINTELPRO\'s original scope. I urge you to support establishment of a modern Church Committee to investigate current domestic intelligence operations.\n\n2. LEONARD PELTIER: Mr. Peltier has been imprisoned for over 48 years on a conviction achieved through fabricated ballistics evidence and coerced witness testimony in the context of FBI COINTELPRO operations against the American Indian Movement. Multiple former FBI agents, federal judges, and members of Congress have called for his release. I urge you to support presidential clemency.\n\n3. DECLASSIFICATION: Thousands of COINTELPRO documents remain classified or heavily redacted over 50 years later. I urge you to introduce legislation mandating declassification of all COINTELPRO-era documents.\n\n4. HOOVER BUILDING: The FBI headquarters still bears J. Edgar Hoover\'s name despite his documented role in assassination, political repression, and systematic constitutional violations. I urge you to support legislation renaming the building.\n\nRespectfully,\n[Your Name]\n[Your Address]',
          legalBasis: ['U.S. Constitution Art. I, Section 8 (Congressional oversight authority)'],
          estimatedTime: '45 minutes to personalize and send',
        },
        {
          step: 3,
          title: 'Sign the Leonard Peltier Clemency Petition',
          description: 'Support the ongoing campaign for presidential clemency for Leonard Peltier through the International Leonard Peltier Defense Committee. Peltier, now in his 80s and in failing health, has been imprisoned for 48+ years on a conviction that the Eighth Circuit Court of Appeals acknowledged was obtained through prosecutorial misconduct.',
          filingTarget: 'International Leonard Peltier Defense Committee: https://www.whoisleonardpeltier.info',
          requirements: [
            'Sign the petition and share it on social media',
            'Write to the Office of the Pardon Attorney',
            'Contact tribal governments and civil rights organizations to build coalition support',
          ],
          estimatedTime: '15-30 minutes',
        },
        {
          step: 4,
          title: 'Support Organizations Fighting Surveillance Abuse',
          description: 'Support the ACLU, Electronic Frontier Foundation, National Security Archive, and other organizations that litigate FOIA cases, challenge warrantless surveillance, and advocate for intelligence reform. These organizations are the primary institutional check on COINTELPRO-type abuses.',
          requirements: [
            'Join or donate to the ACLU National Security Project',
            'Support the Electronic Frontier Foundation\'s surveillance litigation',
            'Follow the National Security Archive\'s FOIA litigation for document releases',
          ],
          estimatedTime: 'Ongoing',
        },
      ],
    },

    // ---- JOURNALIST ----
    {
      role: 'journalist',
      overview: 'COINTELPRO contains multiple active, unreported stories: the FBI\'s continued refusal to formally acknowledge or apologize for the program; the thousands of still-classified documents; Leonard Peltier\'s ongoing imprisonment; and substantial evidence that COINTELPRO-type operations continue under post-9/11 authorities targeting BLM activists, Muslim communities, and environmental groups. These are current accountability stories with documentary evidence.',
      urgency: 'high',
      relevantMechanisms: ['FOIA Litigation for Declassification', 'Congressional Investigation and Subpoena Power'],
      steps: [
        {
          step: 1,
          title: 'File Comprehensive FOIA Requests',
          description: 'Submit targeted FOIA requests to the FBI, DOJ, CIA, NSA, and DHS for: (1) all remaining classified COINTELPRO documents, (2) post-9/11 intelligence assessments of domestic political organizations, (3) FBI use of "Black Identity Extremists" designation, (4) surveillance of George Floyd/BLM protests in 2020.',
          requirements: [
            'FBI: COINTELPRO files still classified or redacted, particularly Pine Ridge and informant files',
            'DHS: Domestic intelligence sharing with private sector through Fusion Centers and the Domestic Security Alliance Council',
            'CIA: Operation CHAOS files not yet disclosed',
            'DOJ: Current Attorney General Guidelines compliance records',
          ],
          legalBasis: ['5 U.S.C. Section 552', 'DOJ FOIA Guidelines'],
          estimatedTime: '3-5 hours for comprehensive requests',
        },
        {
          step: 2,
          title: 'Investigate "COINTELPRO Continuity" Post-9/11',
          description: 'Investigate the evidence that COINTELPRO-type operations continue under different names and new legal authorities. Key threads: (1) FBI "Black Identity Extremists" designation (2017); (2) FBI surveillance of Occupy Wall Street shared with banks (2012); (3) FBI tracking of BLM activists across states (2014); (4) surveillance aircraft over George Floyd protests (2020); (5) infiltration of Muslim community organizations post-9/11.',
          requirements: [
            'FOIA documents from DHS, FBI, and state fusion centers',
            'Interviews with current and former FBI agents willing to speak on background',
            'Court records from recent FISA challenges and surveillance lawsuits',
            'Academic experts on intelligence law and civil liberties',
          ],
          estimatedTime: '4-12 weeks for thorough investigation',
        },
        {
          step: 3,
          title: 'Document the Leonard Peltier Case',
          description: 'Investigate the full record of Leonard Peltier\'s conviction: the fabricated ballistics evidence exposed in 1985, the coerced witness testimony (Myrtle Poor Bear), the prosecution\'s admission that it "can\'t prove who shot those agents," and the political dynamics that have kept every president from granting clemency.',
          requirements: [
            'Court records from original trial and multiple appeals',
            'Eighth Circuit ruling acknowledging prosecutorial misconduct',
            'Interviews with Peltier\'s legal team, former prosecutors, former FBI agents',
            'Documentation of clemency petition history under each president',
          ],
          estimatedTime: '3-6 weeks',
        },
        {
          step: 4,
          title: 'Publish Investigation with Full Documentation',
          description: 'Write and publish with full links to primary source documents. Structure the story around the central question: did COINTELPRO actually end, or did it evolve? Submit findings to relevant congressional committees.',
          estimatedTime: '2-4 weeks for writing and editing',
        },
      ],
    },

    // ---- LAWYER ----
    {
      role: 'lawyer',
      overview: 'Active legal opportunities include: (1) Section 1983 claims for COINTELPRO victims with newly discovered evidence from FOIA disclosures, (2) FOIA litigation to force declassification of remaining files, (3) habeas corpus petition for Leonard Peltier based on fabricated evidence, (4) class action on behalf of organizations targeted for destruction under COINTELPRO, and (5) challenges to current FBI domestic surveillance operations that mirror COINTELPRO tactics.',
      urgency: 'high',
      relevantMechanisms: ['Section 1983 Civil Rights Lawsuits', 'FOIA Litigation for Declassification', 'Presidential Clemency for Political Prisoners', 'Conspiracy to Violate Civil Rights'],
      steps: [
        {
          step: 1,
          title: 'Assess New Claims Based on FOIA Disclosures',
          description: 'Review all COINTELPRO documents released through FOIA since the last civil rights actions were filed. Each new disclosure may reveal previously unknown targeting of individuals or organizations, restarting the statute of limitations under the discovery rule. Identify clients with viable claims.',
          requirements: [
            'Complete review of FBI Vault COINTELPRO releases',
            'National Security Archive document collection',
            'Comparison with known victim list to identify uncompensated individuals',
            'Jurisdictional analysis for each potential claim',
          ],
          legalBasis: ['42 U.S.C. Section 1983', '42 U.S.C. Section 1985(3)'],
          estimatedTime: '4-8 weeks for comprehensive review',
        },
        {
          step: 2,
          title: 'File FOIA Litigation for Remaining Classified Documents',
          description: 'File FOIA lawsuits in D.C. District Court to compel release of remaining classified COINTELPRO documents. Focus on: Pine Ridge operations files, interagency coordination memos, informant handler files, and post-1971 "case by case" continuation programs. Challenge national security classification claims for documents over 50 years old.',
          requirements: [
            'Administrative exhaustion of FOIA requests',
            'Vaughn index motions to challenge blanket classification claims',
            'Expert declarations on the absence of current national security justification for documents over 50 years old',
          ],
          legalBasis: ['5 U.S.C. Section 552(a)(4)(B)', 'Vaughn v. Rosen (D.C. Cir. 1973)'],
          estimatedTime: '3-6 months for filing; 1-3 years for litigation',
        },
        {
          step: 3,
          title: 'Prepare Habeas Corpus Petition for Leonard Peltier',
          description: 'File a successive habeas corpus petition for Leonard Peltier under 28 U.S.C. Section 2255, based on: (1) newly disclosed evidence that the FBI fabricated ballistics testimony, (2) government acknowledgment that it cannot prove who shot the agents, (3) newly discovered documentation of FBI COINTELPRO operations against AIM providing context for the prosecution.',
          requirements: [
            'Certification from Eighth Circuit under 28 U.S.C. Section 2244(b)',
            'Newly discovered evidence not previously available',
            'Expert analysis of fabricated ballistics testimony',
            'Constitutional claims of actual innocence',
          ],
          legalBasis: ['28 U.S.C. Section 2255', '28 U.S.C. Section 2244(b)', 'Schlup v. Delo (1995) actual innocence gateway'],
          estimatedTime: '6-12 months for preparation; years for litigation',
        },
        {
          step: 4,
          title: 'Challenge Current COINTELPRO-Pattern Surveillance',
          description: 'File Fourth Amendment and First Amendment challenges to current FBI domestic surveillance operations that mirror COINTELPRO tactics: (1) "Black Identity Extremists" categorization, (2) surveillance of BLM protests, (3) infiltration of Muslim community organizations, (4) monitoring of environmental and antiwar groups. Seek declaratory and injunctive relief.',
          requirements: [
            'Standing, clients currently subject to surveillance',
            'FOIA evidence of FBI domestic targeting criteria',
            'Expert testimony on parallels between current and COINTELPRO operations',
            'Constitutional analysis under strict scrutiny for First Amendment claims',
          ],
          legalBasis: ['U.S. Const. Amend. I', 'U.S. Const. Amend. IV', 'NAACP v. Alabama (1958)'],
          estimatedTime: '3-6 months for filing; multi-year litigation',
        },
      ],
    },

    // ---- ELECTED OFFICIAL ----
    {
      role: 'elected_official',
      overview: 'As an elected official, you have the constitutional authority to investigate the most egregious program of political repression in American history and to ensure it never recurs. The Church Committee\'s reforms have been systematically weakened. A modern successor investigation is overdue. You also have the power to demand presidential clemency for Leonard Peltier, mandate declassification, and reform the FISA Court.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Investigation and Subpoena Power', 'Presidential Clemency for Political Prisoners', 'FOIA Litigation for Declassification'],
      steps: [
        {
          step: 1,
          title: 'Establish a Modern Church Committee',
          description: 'Introduce a resolution establishing a new Senate Select Committee to investigate intelligence community domestic operations, modeled on the 1975 Church Committee. Scope should include: (1) current FBI domestic surveillance operations and their COINTELPRO parallels, (2) NSA bulk collection of Americans\' communications, (3) DHS fusion center intelligence sharing with private sector, (4) erosion of Attorney General Guidelines since 1976.',
          requirements: [
            'Bipartisan co-sponsors (Church Committee passed 82-4)',
            'Committee membership representing judiciary, intelligence, and civil liberties perspectives',
            'Adequate budget and staff for 12-18 month investigation',
            'Provisions for both classified and public hearings',
          ],
          estimatedTime: '3-6 months for establishment',
        },
        {
          step: 2,
          title: 'Introduce the COINTELPRO Accountability and Declassification Act',
          description: 'Draft and introduce legislation requiring: (1) mandatory declassification of all COINTELPRO-era documents over 50 years old with narrow national security exceptions, (2) formal FBI acknowledgment and apology for COINTELPRO, (3) establishment of a COINTELPRO Victims Compensation Fund, (4) renaming of the J. Edgar Hoover Building.',
          requirements: [
            'Legislative counsel drafting',
            'CBO score for compensation fund',
            'Co-sponsors from both chambers',
            'Civil rights organization endorsements',
          ],
          estimatedTime: '2-4 months for drafting and introduction',
        },
        {
          step: 3,
          title: 'Hold Public Hearings on Current Domestic Surveillance',
          description: 'Convene public hearings with testimony from: former FBI agents who participated in domestic political surveillance, ACLU and EFF experts on current surveillance practices, historians and Church Committee staff members, surviving COINTELPRO targets and their families, and current civil liberties advocates.',
          requirements: [
            'Witness list combining historical expertise and current advocacy',
            'Declassified document packages for committee members',
            'Media coordination for maximum public visibility',
            'Subpoena authority for reluctant witnesses',
          ],
          estimatedTime: '4-8 weeks to organize',
        },
        {
          step: 4,
          title: 'Demand Presidential Clemency for Leonard Peltier',
          description: 'Introduce a sense of the Senate/House resolution calling on the President to grant clemency to Leonard Peltier. Organize a bipartisan letter to the President signed by as many members as possible. Coordinate with tribal governments and international human rights organizations.',
          requirements: [
            'Resolution text citing specific evidence of prosecutorial misconduct',
            'Bipartisan signatures',
            'Coordination with International Leonard Peltier Defense Committee',
            'Media strategy',
          ],
          estimatedTime: '2-4 weeks',
        },
        {
          step: 5,
          title: 'Reform FISA Court and FBI Domestic Operations',
          description: 'Based on investigation findings, introduce comprehensive reform legislation: (1) require FISA Court to publish declassified versions of significant opinions, (2) create a public advocate position within the FISA Court, (3) prohibit FBI investigations of domestic political organizations without specific criminal predicate, (4) require real-time congressional notification of any counterintelligence operations targeting domestic groups.',
          estimatedTime: '4-6 months for drafting; legislative timeline varies',
        },
      ],
    },

    // ---- LAW ENFORCEMENT ----
    {
      role: 'law_enforcement',
      overview: 'COINTELPRO represents the most catastrophic failure of law enforcement ethics in American history. For current law enforcement, the imperative is ensuring that COINTELPRO tactics have been genuinely eliminated from domestic operations. Internal affairs and inspector general functions should actively audit for COINTELPRO-pattern activities: surveillance of political groups without criminal predicate, use of informants to disrupt lawful organizations, and coordination with prosecutors to target political opponents.',
      urgency: 'high',
      relevantMechanisms: ['Section 1983 Civil Rights Lawsuits', 'Congressional Investigation and Subpoena Power'],
      steps: [
        {
          step: 1,
          title: 'Conduct Internal Audit for COINTELPRO-Pattern Activities',
          description: 'If you serve in an inspector general, internal affairs, or oversight capacity, conduct a comprehensive audit of current domestic intelligence and counterterrorism operations for COINTELPRO-pattern activities: surveillance of political organizations without specific criminal predicate, use of informants to influence or disrupt lawful groups, and intelligence sharing with private entities about political activists.',
          requirements: [
            'Access to domestic intelligence case files',
            'Review of informant handling procedures',
            'Assessment of targeting criteria for domestic investigations',
            'Comparison with Attorney General Guidelines and FISA requirements',
          ],
          estimatedTime: '3-6 months for comprehensive audit',
        },
        {
          step: 2,
          title: 'Report Findings Through Proper Channels',
          description: 'Report audit findings to the DOJ Inspector General, relevant congressional oversight committees, and the FISA Court if warranted. If you discover COINTELPRO-type activities, you have legal protection under the Intelligence Community Whistleblower Protection Act and the FBI Whistleblower Protection Enhancement Act.',
          legalBasis: ['Intelligence Community Whistleblower Protection Act (50 U.S.C. Section 3033)', 'FBI Whistleblower Protection Enhancement Act (5 U.S.C. Section 2303)'],
          estimatedTime: '2-4 weeks for formal report',
        },
        {
          step: 3,
          title: 'Investigate Cold Cases from COINTELPRO Era',
          description: 'If you have jurisdiction over unsolved cases from the COINTELPRO era, particularly the 60+ unsolved homicides on Pine Ridge during 1973-1976, or unexplained deaths of activists and informants, reopen investigation using modern forensic techniques and newly declassified documents.',
          requirements: [
            'Access to original case files',
            'FOIA documents providing new leads',
            'Modern forensic analysis capabilities',
            'Coordination with tribal authorities for Pine Ridge cases',
          ],
          estimatedTime: 'Varies by case',
        },
      ],
    },

    // ---- REGULATOR ----
    {
      role: 'regulator',
      overview: 'The regulatory failure that enabled COINTELPRO was the absence of effective oversight mechanisms for intelligence operations targeting American citizens. Regulators, including the FISA Court, DOJ Inspector General, and congressional oversight committees, must actively monitor for the recurrence of COINTELPRO-type programs under post-9/11 authorities that have dramatically expanded the FBI\'s domestic surveillance powers.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Investigation and Subpoena Power', 'FOIA Litigation for Declassification'],
      steps: [
        {
          step: 1,
          title: 'Audit Current FBI Domestic Surveillance Programs',
          description: 'Conduct a comprehensive review of all current FBI domestic intelligence programs, including assessments opened without criminal predicate under the DIOG, National Security Letter usage against domestic targets, and intelligence sharing with private entities through the Domestic Security Alliance Council.',
          requirements: [
            'Access to classified FBI operational data',
            'Statistical analysis of domestic assessment targeting patterns',
            'Review of NSL usage statistics by target category',
            'Analysis of FISA Court approval rates and rejection patterns',
          ],
          legalBasis: ['Inspector General Act of 1978', 'USA FREEDOM Act reporting requirements'],
          estimatedTime: '6-12 months for comprehensive audit',
        },
        {
          step: 2,
          title: 'Issue Public Report on COINTELPRO Legacy Compliance',
          description: 'Publish a public report documenting whether the Church Committee\'s recommendations have been fully implemented and maintained, with specific findings on: (1) Attorney General Guidelines compliance, (2) FISA Court effectiveness, (3) congressional oversight adequacy, and (4) whether current domestic operations exhibit COINTELPRO-pattern characteristics.',
          estimatedTime: '3-6 months after audit completion',
        },
        {
          step: 3,
          title: 'Recommend Structural Reforms',
          description: 'Based on audit findings, recommend structural reforms to prevent COINTELPRO recurrence: mandatory public reporting on domestic surveillance statistics, creation of a permanent civil liberties ombudsman within the FBI, prohibition on intelligence sharing about lawful political activity with private entities, and strengthened FISA Court adversarial process.',
          estimatedTime: '2-3 months for recommendations',
        },
      ],
    },
  ],

  // ============================================================
  // SUCCESS CRITERIA
  // ============================================================
  successCriteria: [
    'Full declassification and public release of all remaining COINTELPRO-era documents, including Pine Ridge operations files, interagency coordination memos, and informant handler records',
    'Formal FBI institutional acknowledgment and apology for COINTELPRO, including specific recognition of the Hampton assassination, King harassment campaign, and systematic targeting of constitutionally protected organizations',
    'Presidential clemency granted to Leonard Peltier, recognizing the fabricated evidence and COINTELPRO context of his conviction',
    'Removal of J. Edgar Hoover\'s name from FBI headquarters and replacement with a name honoring civil rights or civil liberties',
    'Establishment of a COINTELPRO Victims Compensation Fund providing restitution to individuals and organizations targeted by the program who were never compensated',
    'A modern Church Committee investigation producing a comprehensive public report on current domestic surveillance operations and their relationship to COINTELPRO-era tactics',
    'Legislative reform of the FISA Court to include a permanent public advocate, mandatory declassified publication of significant opinions, and prohibition on bulk surveillance authorizations',
    'Reform of FBI domestic operations guidelines to require specific criminal predicate for any investigation of domestic political organizations, with mandatory real-time reporting to congressional oversight committees',
    'Independent audit confirming that "Black Identity Extremists," "Domestic Violent Extremists," and similar FBI categorization systems do not function as COINTELPRO-era targeting designations for lawful political activity',
    'Mandatory annual public reporting by the FBI on domestic counterintelligence operations, including number of assessments opened, informants recruited, and organizations monitored, with civil liberties review by the Inspector General',
  ],
};
