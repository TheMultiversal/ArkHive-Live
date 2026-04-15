import type { AccountabilityData } from '@/types/accountability';

export const childSexualAbuseAccountability: AccountabilityData = {
  investigationSlug: 'child-sexual-abuse',
  crimeSummary: 'Systematic institutional child sexual abuse spanning the Catholic Church (330,000+ estimated victims in France alone, $4+ billion in U.S. settlements), Boy Scouts of America (82,000 claims, $2.46 billion bankruptcy settlement), USA Gymnastics/Michigan State (500+ Larry Nassar survivors, $880 million combined settlements), Penn State/Jerry Sandusky ($100+ million settlements), and the Jeffrey Epstein trafficking network. Institutions systematically protected abusers, silenced victims through NDAs and legal intimidation, and exploited statute of limitations protections to avoid accountability. Online CSAM reports reached 36.2 million in 2023 with inadequate enforcement capacity.',
  totalHarm: '$7+ billion in documented settlements and restitution across major institutional cases; true economic cost of child sexual abuse in the U.S. estimated at $9.3 billion annually in direct costs; millions of survivors with lifelong psychological, health, and economic consequences',
  victimsAffected: 'Millions globally; 330,000+ estimated Catholic Church victims in France alone; 82,000 BSA claimants; 500+ Nassar survivors; 36.2 million CSAM reports in 2023; CDC estimates 1 in 4 girls and 1 in 13 boys experience sexual abuse before age 18',
  primaryTargets: [
    {
      name: 'Catholic Church Leadership',
      role: 'Systematic decades-long cover-up of clergy sexual abuse across every country where the Church operates; transferred known abusers between parishes; pressured victims into silence; deployed institutional legal resources against survivors',
      currentStatus: 'No bishop or cardinal has been criminally prosecuted for the cover-up in the United States; 30+ dioceses have filed for bankruptcy to limit financial exposure while retaining institutional assets; Vatican claims sovereign immunity',
      accountabilityPath: 'RICO prosecution targeting the institutional pattern of transferring abusers, silencing victims, and obstructing justice; state attorney general investigations modeled on Pennsylvania Grand Jury; international pressure through UN Committee on the Rights of the Child',
      obstacles: ['Institutional political power and community embeddedness make prosecutors reluctant to bring charges', 'Vatican sovereign immunity shields top leadership from U.S. jurisdiction', 'Aggressive institutional lobbying against statute of limitations reform in state legislatures', 'Bankruptcy proceedings used strategically to limit financial exposure while preserving institutional assets']
    },
    {
      name: 'Tech Platforms (Meta, Apple, Google)',
      role: 'Platforms generate the vast majority of CSAM reports but have prioritized encryption and user growth over child safety; Meta\'s end-to-end encryption eliminates ability to detect CSAM on Messenger and Instagram; Apple abandoned on-device CSAM scanning',
      currentStatus: 'No platform has been held criminally liable for failing to prevent CSAM proliferation; Section 230 provides broad immunity; tech industry lobbying has blocked EARN IT Act for multiple Congressional sessions',
      accountabilityPath: 'Pass EARN IT Act to modify Section 230 protections and create incentives for proactive CSAM detection; FTC enforcement actions for unfair practices; mandatory transparency reporting on CSAM detection and removal; age verification requirements',
      obstacles: ['Section 230 of Communications Decency Act provides broad platform immunity', 'End-to-end encryption makes server-side detection technically impossible on encrypted platforms', 'Privacy advocacy groups oppose any measures that could weaken encryption', 'Tech industry lobbying resources dwarf child safety advocacy funding']
    },
    {
      name: 'State Legislatures Blocking Statute of Limitations Reform',
      role: 'Short statutes of limitations for child sexual abuse claims remain the single greatest structural barrier to justice; average survivor does not disclose until age 52; many states impose deadlines that expire decades before survivors are ready to come forward',
      currentStatus: 'A growing number of states have passed revival windows (New York Child Victims Act generated 11,000+ lawsuits) but many states still impose inadequate limitation periods; Catholic Church and insurance industry actively lobby against reform',
      accountabilityPath: 'State-by-state advocacy campaigns for lookback windows and elimination of civil statutes of limitations for child sexual abuse; model legislation from CHILD USA; ballot initiatives in states where legislative lobbying blocks reform',
      obstacles: ['Catholic Church and insurance industry spend millions lobbying against reform at the state level', 'Legislative inertia and institutional resistance to change', 'Lack of public awareness about how statutes of limitations specifically protect institutional abusers', 'Fear of fiscal impact on state institutions (public schools, foster care systems) from lookback windows']
    }
  ],
  legalMechanisms: [
    {
      name: 'RICO Prosecution of Institutional Cover-ups',
      statute: '18 U.S.C. 1962',
      description: 'The Racketeer Influenced and Corrupt Organizations Act was designed to target organizations that facilitate patterns of criminal activity. The Catholic Church\'s documented pattern of transferring abusers, silencing victims, and obstructing justice across hundreds of dioceses meets the statutory requirements for a RICO prosecution, which has never been brought.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years for civil RICO; 5 years for criminal RICO from last predicate act',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'State Attorneys General', 'Private civil RICO plaintiffs'],
      applicability: 'directly_applicable' as const,
      notes: 'No prosecutor has ever brought a RICO case against the Catholic Church or any other institution for systematically enabling child sexual abuse despite documented patterns meeting all statutory elements'
    },
    {
      name: 'State Revival Windows for Time-Barred Claims',
      statute: 'Various state statutes (e.g., New York CPLR 214-g)',
      description: 'Revival statutes create temporary windows during which survivors can file previously time-barred civil claims against institutions that enabled child sexual abuse. New York\'s Child Victims Act created a one-year window that generated over 11,000 lawsuits.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Survivors filing civil claims', 'State legislators passing revival statutes'],
      applicability: 'directly_applicable' as const,
      notes: 'Most effective mechanism for institutional accountability; CHILD USA tracks state-by-state reform progress'
    },
    {
      name: 'Federal Sex Trafficking Prosecution',
      statute: '18 U.S.C. 1591',
      description: 'Federal sex trafficking statute carrying penalties up to life imprisonment; used to prosecute Ghislaine Maxwell and was the basis for re-arrest of Jeffrey Epstein in 2019; applicable to any person who recruits, harbors, or maintains a minor for commercial sex acts.',
      hasStatuteOfLimitations: false,
      limitationPeriod: 'No statute of limitations for sex trafficking of minors',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'HSI'],
      applicability: 'directly_applicable' as const,
      notes: 'Successfully used in Maxwell prosecution; has no statute of limitations when victim is a minor'
    },
    {
      name: 'EARN IT Act - Platform Accountability',
      statute: 'Proposed: EARN IT Act (S. 1207)',
      description: 'Proposed legislation that would modify Section 230 immunity for tech platforms that fail to proactively detect and report child sexual abuse material; would create commission to establish best practices for CSAM detection.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'FTC', 'State Attorneys General'],
      applicability: 'requires_new_action' as const,
      notes: 'Introduced in multiple Congressional sessions but has not passed due to tech industry opposition; would be most impactful legislative reform for online child exploitation'
    }
  ],
  wealthTrace: [
    {
      name: 'Catholic Church Real Estate and Financial Assets',
      relationship: 'Church retains vast institutional wealth despite $4+ billion in abuse settlements',
      transferMethod: 'Dioceses use bankruptcy strategically to limit settlements while retaining parish assets classified as held in trust; Vatican assets beyond reach of U.S. courts through sovereign immunity',
      estimatedValue: 'U.S. Catholic Church real estate alone estimated at $200+ billion; global Church assets in hundreds of billions',
      legalEntities: ['Individual dioceses', 'Vatican financial entities', 'Parish trusts and religious order holding companies'],
      recoveryMechanisms: ['Additional state lookback windows for time-barred claims', 'RICO prosecution targeting institutional assets', 'Bankruptcy court challenges to asset classifications']
    },
    {
      name: 'BSA Bankruptcy Settlement Trust',
      relationship: 'Boy Scouts of America created settlement trust distributing inadequate compensation to 82,000 claimants',
      transferMethod: '$2.46 billion trust created in bankruptcy; local councils and chartering organizations contributed to obtain liability releases',
      estimatedValue: '$2.46 billion total (averaging approximately $30,000 per claimant)',
      legalEntities: ['BSA national organization', 'Local council contributions', 'Insurance company settlements', 'LDS Church settlement'],
      recoveryMechanisms: ['Trust distribution to qualified claimants', 'Additional contributions from non-settling insurers', 'Potential additional claims against chartering organizations']
    },
    {
      name: 'Epstein Estate and Network Financial Assets',
      relationship: 'Jeffrey Epstein accumulated $634 million in assets through undisclosed financial activities; network of enablers retains wealth',
      transferMethod: 'Epstein Victims\' Compensation Program distributed approximately $121 million to 135+ claimants; JPMorgan Chase paid $290 million for facilitating Epstein; Prince Andrew settled for $12+ million',
      estimatedValue: '$634 million estate value; JPMorgan $290 million settlement; Deutsche Bank $75 million settlement',
      legalEntities: ['Epstein estate', 'Virgin Islands properties', 'JPMorgan Chase', 'Deutsche Bank'],
      recoveryMechanisms: ['Ongoing civil litigation against estate', 'USVI government lawsuit', 'Bank settlements for facilitating Epstein\'s activities']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'State Attorneys General',
      title: 'State Attorney General',
      jurisdiction: 'State criminal and civil enforcement',
      powers: ['Convene grand juries to investigate institutional abuse cover-ups', 'Bring state RICO charges', 'File civil enforcement actions against institutions', 'Investigate mandatory reporting failures'],
      contactMethod: 'Via state AG offices; Pennsylvania AG\'s grand jury model has been replicated in multiple states'
    },
    {
      name: 'DOJ Child Exploitation and Obscenity Section (CEOS)',
      title: 'DOJ CEOS Section Chief',
      jurisdiction: 'Federal prosecution of child exploitation',
      powers: ['Prosecute federal sex trafficking charges', 'Bring federal RICO cases', 'Coordinate multi-jurisdictional investigations', 'Investigate online exploitation networks'],
      contactMethod: 'tips.fbi.gov for reporting; NCMEC CyberTipline for online exploitation'
    },
    {
      name: 'State Legislators',
      title: 'State legislators on judiciary committees',
      jurisdiction: 'State legislative reform',
      powers: ['Pass statute of limitations reform', 'Create lookback windows for time-barred claims', 'Strengthen mandatory reporting laws', 'Remove clergy-penitent exemptions from mandatory reporting'],
      contactMethod: 'Direct constituent contact; CHILD USA provides model legislation and advocacy resources'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can drive statute of limitations reform, support survivors, and demand institutional accountability through advocacy and voting.',
      steps: [
        { step: 1, title: 'Support Statute of Limitations Reform', description: 'Contact state legislators to support lookback windows and elimination of civil statutes of limitations for child sexual abuse. CHILD USA maintains a state-by-state scorecard of reform progress.', legalBasis: ['State legislative advocacy', 'First Amendment right to petition'] },
        { step: 2, title: 'Report Suspected Abuse', description: 'Report suspected child sexual abuse to local law enforcement and the state child abuse hotline. In many states all adults are mandatory reporters. The Childhelp National Hotline (1-800-422-4453) provides guidance.', legalBasis: ['State mandatory reporting statutes'] },
        { step: 3, title: 'Support Survivor Organizations', description: 'Donate to and volunteer with organizations providing direct services to survivors including RAINN, Darkness to Light, and local child advocacy centers.' }
      ],
      relevantMechanisms: ['State revival windows', 'Mandatory reporting laws'],
      urgency: 'immediate' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Attorneys can pursue civil claims during lookback windows, advocate for RICO application to institutional cover-ups, and challenge statute of limitations barriers.',
      steps: [
        { step: 1, title: 'File Revival Window Claims', description: 'In states with active lookback windows, file civil claims against institutions that enabled abuse. Document institutional knowledge and cover-up patterns to support claims beyond individual abuser liability.', legalBasis: ['State revival statutes', 'CPLR 214-g (New York model)'] },
        { step: 2, title: 'Develop RICO Theory Against Institutions', description: 'Build civil RICO cases against institutions that demonstrate a pattern of transferring abusers, silencing victims, and obstructing justice. The Catholic Church\'s documented pattern across hundreds of dioceses provides the strongest factual basis.', legalBasis: ['18 U.S.C. 1962', '18 U.S.C. 1964 (civil RICO)'] },
        { step: 3, title: 'Challenge Institutional Bankruptcy Protections', description: 'In diocesan and BSA-related bankruptcies, challenge asset classifications that shield institutional wealth from survivor claims. Argue that assets held in parish trusts should be available to satisfy abuse claims.' }
      ],
      relevantMechanisms: ['State revival windows', 'RICO prosecution', 'Bankruptcy court challenges'],
      urgency: 'immediate' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigative journalism has been the primary driver of child sexual abuse accountability, from the Boston Globe\'s Spotlight investigation to the Indianapolis Star\'s Nassar reporting.',
      steps: [
        { step: 1, title: 'Investigate Institutional Cover-ups', description: 'Use public records, bankruptcy filings, and court documents to document institutional patterns of protecting abusers. Focus on institutions that have not yet been subject to grand jury investigations.', legalBasis: ['First Amendment', 'State public records laws'] },
        { step: 2, title: 'Document Mandatory Reporting Failures', description: 'Investigate whether state licensing agencies are enforcing mandatory reporting requirements against professionals who fail to report suspected abuse. The AP\'s 2019 investigation found widespread non-enforcement.' },
        { step: 3, title: 'Track Settlement and Accountability Outcomes', description: 'Document how bankruptcy proceedings and settlement structures actually distribute funds to survivors versus protecting institutional assets. Track whether convicted offenders receive proportionate sentences.' }
      ],
      relevantMechanisms: ['Public records access', 'Bankruptcy court transparency'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement has the authority to investigate and prosecute both individual abusers and the institutional structures that enable them.',
      steps: [
        { step: 1, title: 'Pursue RICO Investigation of Institutional Cover-ups', description: 'Open federal RICO investigations into institutions that demonstrate a pattern of enabling child sexual abuse through transfer of abusers, silencing of victims, and obstruction of investigations.', legalBasis: ['18 U.S.C. 1962', '18 U.S.C. 1951'] },
        { step: 2, title: 'Enforce Mandatory Reporting Laws', description: 'Actively investigate and prosecute professionals and clergy who fail to report suspected child sexual abuse as required by state mandatory reporting statutes.', legalBasis: ['State mandatory reporting statutes'] },
        { step: 3, title: 'Investigate Online Exploitation Networks', description: 'Expand capacity for investigating CSAM distribution, livestreaming abuse, and online grooming. Coordinate with international law enforcement through Europol and Interpol frameworks.', legalBasis: ['18 U.S.C. 2251-2252A', '18 U.S.C. 1591'] }
      ],
      relevantMechanisms: ['RICO prosecution', 'Federal sex trafficking statutes', 'Mandatory reporting enforcement'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'RICO prosecution brought against at least one major institution for systematically enabling child sexual abuse',
    'All 50 states eliminate civil statutes of limitations for child sexual abuse claims',
    'EARN IT Act or equivalent legislation passed to create platform accountability for CSAM detection',
    'Mandatory reporting laws strengthened to include all adults and remove clergy-penitent exemptions in all states',
    'Catholic Church opens internal abuse files to independent investigation',
    'Adequate funding for NCMEC, ICAC task forces, and survivor support services'
  ]
};
