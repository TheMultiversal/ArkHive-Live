import type { AccountabilityData } from '@/types/accountability';

export const insiderTradingAccountability: AccountabilityData = {
  investigationSlug: '1980s-insider-trading',

  // ============================================================
  // WHAT HAPPENED
  // ============================================================
  crimeSummary: 'A coordinated criminal conspiracy among Wall Street\'s most powerful figures — including Ivan Boesky, Michael Milken, Dennis Levine, Martin Siegel, and dozens of others — who systematically used insider information, stock manipulation, racketeering, and fraud to steal billions from public investors, destroy companies, and corrupt the American financial system throughout the 1980s.',

  totalHarm: 'Over $10 billion in direct financial harm to investors, pensioners, and employees. Drexel Burnham Lambert\'s collapse destroyed 10,000+ jobs. The junk bond market crash triggered cascading losses across savings & loan institutions, pension funds, and municipal bond holders. The broader economic damage from market manipulation during this period is estimated at $50-100 billion when including the S&L crisis connections.',

  victimsAffected: 'Millions of American investors, pensioners, and workers. Direct victims include shareholders of companies targeted in manipulated takeovers, employees of Drexel Burnham Lambert (10,000+ lost jobs), holders of junk bonds that collapsed, savings & loan depositors, and taxpayers who funded the $160 billion S&L bailout — a crisis directly fueled by the junk bond market these conspirators created and manipulated.',

  // ============================================================
  // WHO SHOULD BE HELD ACCOUNTABLE
  // ============================================================
  primaryTargets: [
    {
      name: 'Michael Milken',
      role: 'Head of High-Yield Bond Department, Drexel Burnham Lambert. Architect of the junk bond empire that fueled the conspiracy.',
      currentStatus: 'Pardoned by President Trump on February 18, 2020. Estimated net worth $6.2 billion (2025). Rebranded as philanthropist.',
      accountabilityPath: 'Civil asset forfeiture and disgorgement of ill-gotten gains that were never fully recovered. His $600M fine represented a fraction of his total earnings from criminal activity. Constructive trust on assets traceable to his criminal enterprise. Investigation of whether his pardon was obtained through improper influence (Milken associates donated heavily to Republican campaigns). State-level securities fraud actions are not affected by federal pardon.',
      obstacles: [
        'Federal pardon eliminates federal criminal liability',
        'Massive wealth enables top legal defense',
        'Decades of philanthropic rebranding obscures criminal past',
        'Political connections protect him from further prosecution',
      ],
    },
    {
      name: 'Ivan Boesky',
      role: 'Stock speculator known as "King of the Arbitrageurs." Central figure who linked multiple insider trading rings.',
      currentStatus: 'Served 22 months of a 3.5-year sentence. Paid $100 million penalty. Maintained substantial wealth through family trusts and offshore structures. Died May 20, 2024.',
      accountabilityPath: 'With Boesky deceased, accountability focuses on recovered assets and wealth transferred to family members and trusts. Civil forfeiture actions against estate assets traceable to criminal proceeds. Investigation of whether the $100M penalty represented full disgorgement. Constructive trust claims on family trusts funded with insider trading profits.',
      obstacles: [
        'Boesky deceased (May 2024)',
        'Assets dispersed through family trusts pre-death',
        'Cooperation agreement may limit some civil liability',
        'Offshore structures obscure true asset holdings',
      ],
    },
    {
      name: 'The Milken Family Trust / Estate',
      role: 'Holders of generational wealth derived from Michael Milken\'s criminal enterprise.',
      currentStatus: 'The Milken family controls billions through the Milken Institute, Milken Family Foundation, and private investment vehicles. This wealth was seeded with proceeds from securities fraud, racketeering, and market manipulation.',
      accountabilityPath: 'Constructive trust doctrine allows courts to trace assets from criminal activity through to current holders regardless of how many transfers occurred. Unjust enrichment claims have no statute of limitations in most jurisdictions. Civil RICO if the organizational structure of the criminal enterprise persists. Tax fraud investigation for any undeclared income from the original criminal activity — tax fraud has NO statute of limitations.',
      obstacles: [
        'Wealth laundered through decades of legitimate-appearing transactions',
        'Philanthropic institutions create political protection',
        'Complex corporate structures obscure tracing',
      ],
    },
    {
      name: 'Dennis Levine',
      role: 'Managing Director, Drexel Burnham Lambert. First domino — his arrest in 1986 unraveled the entire conspiracy.',
      currentStatus: 'Served 17 months. Paid $11.6 million penalty. Returned to finance through consulting. Some financial recovery but dramatically reduced from peak.',
      accountabilityPath: 'Full disgorgement of any remaining proceeds from criminal activity. Investigation of whether all offshore accounts (Bahamian bank accounts) were fully disclosed and recovered.',
      obstacles: [
        'Cooperation agreement provided significant leniency',
        'Most direct financial penalties already paid',
        'Criminal sentence already served',
      ],
    },
    {
      name: 'Boyd Jefferies',
      role: 'Founder of Jefferies & Company. Helped Boesky illegally "park" stock to conceal ownership.',
      currentStatus: 'Pleaded guilty to securities violations. Company continued to operate and expand. Jefferies Group (now Jefferies Financial Group) became a major global investment bank.',
      accountabilityPath: 'The corporation that benefited from criminal activity continued to accumulate wealth. Corporate accountability through shareholder derivative actions. Investigation of whether Jefferies Group\'s subsequent growth was built on the foundation of criminal activity.',
      obstacles: [
        'Corporate structure separates individual from entity liability',
        'Company has undergone ownership changes',
      ],
    },
    {
      name: 'Paul Bilzerian',
      role: 'Corporate raider convicted of securities fraud and conspiracy. Father of Dan Bilzerian.',
      currentStatus: 'Convicted 1989. Sentenced to 4 years, served 13 months. Ordered to pay $62 million — NEVER PAID. Filed bankruptcy claiming inability to pay while family maintained lavish lifestyle. Son Dan Bilzerian became a social media personality flaunting extreme wealth.',
      accountabilityPath: 'This is one of the most egregious cases of unpaid restitution in American history. $62 million in court-ordered payments were never collected. Fraudulent transfer investigation into how assets were moved to family members while claiming bankruptcy. The Bilzerian family\'s current visible wealth directly traces to assets that should have been seized. Civil contempt proceedings for failure to pay court-ordered restitution.',
      obstacles: [
        'Bankruptcy filings shield claimed assets',
        'Assets transferred to family members before/during proceedings',
        'Government enforcement of restitution has been inadequate',
        'Complex offshore structures hide real asset values',
      ],
    },
  ],

  // ============================================================
  // LEGAL MECHANISMS AVAILABLE
  // ============================================================
  legalMechanisms: [
    {
      name: 'Civil Asset Forfeiture',
      statute: '18 U.S.C. § 981; 28 U.S.C. § 2461(c)',
      description: 'The federal government can seize any property that constitutes or is derived from proceeds of specified unlawful activity, including securities fraud and racketeering. This is a civil action against the property itself, not the person, and therefore does not require a criminal conviction.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years from discovery of the offense, but the clock resets with each new act of concealment. For assets still being actively hidden, the limitations period may not have started.',
      reachesHeirs: true,
      authorizedActors: ['U.S. Department of Justice', 'U.S. Attorney\'s Office', 'SEC Enforcement Division'],
      applicability: 'potentially_applicable',
      notes: 'Particularly relevant for the Bilzerian family where $62M in court-ordered payments were never collected. Also applicable to any Milken or Boesky assets traceable to criminal proceeds that were not part of the original disgorgement.',
    },
    {
      name: 'Disgorgement of Ill-Gotten Gains',
      statute: '15 U.S.C. § 78u(d)(5); Liu v. SEC (2020)',
      description: 'The SEC can seek disgorgement of profits gained through securities law violations. The Supreme Court in Liu v. SEC (2020) confirmed this power but limited it to net profits and required funds to be returned to victims. This is an equitable remedy with flexible timing.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years under Kokesh v. SEC (2017), but this applies to SEC enforcement actions. State-level equivalents may have longer or no limitations.',
      reachesHeirs: true,
      authorizedActors: ['SEC Enforcement Division', 'State Securities Regulators'],
      applicability: 'potentially_applicable',
      notes: 'The original disgorgement orders may not have captured the full extent of illegal profits. Milken\'s $600M penalty covered only a fraction of his estimated criminal earnings.',
    },
    {
      name: 'Constructive Trust',
      statute: 'Common law equitable remedy; Restatement (Third) of Restitution § 55',
      description: 'A court-imposed trust on property held by someone who obtained it through fraud, breach of duty, or unjust enrichment. The trust "follows the money" — if assets can be traced from criminal activity through transfers to current holders, the court can impose a constructive trust regardless of how many times the assets changed hands.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Any court of equity', 'Federal or state courts'],
      applicability: 'directly_applicable',
      notes: 'This is the most powerful mechanism for reaching generational wealth derived from crime. If Milken\'s billions, Boesky\'s trusts, or Bilzerian\'s family assets can be traced to criminal proceeds, a constructive trust attaches regardless of time elapsed.',
    },
    {
      name: 'Civil RICO',
      statute: '18 U.S.C. § 1964(c)',
      description: 'Any person injured by a pattern of racketeering activity can sue for treble damages. Civil RICO does not require a criminal conviction and has a 4-year statute of limitations from discovery of the injury. If the criminal enterprise\'s structure persists (through family businesses, foundations, or corporate successors), RICO can reach current holders.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years from discovery. The discovery rule means the clock starts when the plaintiff knew or should have known of the injury.',
      reachesHeirs: true,
      authorizedActors: ['Any injured party (private citizens, institutional investors, pension funds)'],
      applicability: 'potentially_applicable',
      notes: 'Victims who suffered losses from manipulated stock prices, collapsed junk bonds, or the S&L crisis may have RICO claims if they can demonstrate a pattern of racketeering. Class action suits are possible.',
    },
    {
      name: 'Unjust Enrichment',
      statute: 'Common law; Restatement (Third) of Restitution §§ 1-4',
      description: 'A person who has been unjustly enriched at the expense of another is required to make restitution. There is no statute of limitations for unjust enrichment claims in many jurisdictions. This reaches anyone who holds wealth that originated from wrongful conduct.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Any injured party', 'State attorneys general on behalf of the public'],
      applicability: 'directly_applicable',
      notes: 'Milken\'s current $6.2B net worth, built on the foundation of his criminal junk bond empire, is a textbook case of unjust enrichment. The enrichment is ongoing — the wealth continues to generate more wealth.',
    },
    {
      name: 'Fraudulent Transfer / Voidable Transactions',
      statute: 'Uniform Voidable Transactions Act (UVTA); 11 U.S.C. § 548',
      description: 'If assets were transferred to family members, trusts, or shell entities to avoid liability, those transfers can be voided by a court. This is particularly relevant when someone faces a judgment and moves assets to appear judgment-proof.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years from the transfer, or 1 year from when the transfer was or could have been discovered.',
      reachesHeirs: true,
      authorizedActors: ['Creditors', 'Bankruptcy trustees', 'U.S. Department of Justice'],
      applicability: 'directly_applicable',
      notes: 'Paul Bilzerian\'s case is the clearest example: $62M in court-ordered payments went uncollected while he filed bankruptcy and his family maintained extreme visible wealth. Every transfer out of his estate is potentially voidable.',
    },
    {
      name: 'Tax Fraud — No Statute of Limitations',
      statute: '26 U.S.C. § 6501(c)(1)-(2)',
      description: 'There is NO statute of limitations for civil or criminal tax fraud. If any of the original criminal proceeds were not reported to the IRS, the government can pursue tax claims at any time. This also applies to estates — the IRS can pursue heirs for unpaid taxes on unreported income.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Internal Revenue Service', 'U.S. Department of Justice Tax Division'],
      applicability: 'directly_applicable',
      notes: 'Given the scale of hidden transactions (offshore accounts, stock parking, unreported profits), it is virtually certain that not all criminal income was properly reported and taxed. This provides an unlimited time window for recovery.',
    },
    {
      name: 'State Attorney General Actions',
      statute: 'Varies by state — e.g., N.Y. Martin Act (N.Y. Gen. Bus. Law §§ 352-353)',
      description: 'State AGs have broad authority to pursue securities fraud, consumer fraud, and public corruption. Many state securities fraud statutes have longer limitation periods than federal law, and some states (like New York under the Martin Act) don\'t require proof of intent.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state. New York Martin Act: 6 years. California: 5 years. Some states have tolling provisions.',
      reachesHeirs: true,
      authorizedActors: ['State Attorneys General', 'State Securities Regulators'],
      applicability: 'potentially_applicable',
      notes: 'New York and California where most of this activity occurred have the broadest and most aggressive securities fraud enforcement powers.',
    },
    {
      name: 'Congressional Investigation & Legislative Action',
      statute: 'U.S. Constitution Art. I, § 8; Rules of the House and Senate',
      description: 'Congress has unlimited investigative authority and subpoena power. Congressional investigations are not subject to statute of limitations. Congress can also pass targeted legislation to close loopholes, create new causes of action, or extend limitation periods retroactively for civil cases.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['U.S. House Committee on Financial Services', 'U.S. Senate Committee on Banking', 'U.S. Senate Judiciary Committee'],
      applicability: 'directly_applicable',
      notes: 'Congress can investigate how pardons were obtained, whether restitution was properly enforced, and whether regulatory failures enabled ongoing enrichment. It can also pass legislation specifically targeting unpaid restitution and generational wealth derived from crime.',
    },
    {
      name: 'Global Magnitsky Act Sanctions',
      statute: 'Global Magnitsky Human Rights Accountability Act (Pub. L. 114-328, Subtitle F)',
      description: 'Authorizes the President to impose sanctions (asset freezes, visa bans) on foreign persons responsible for corruption or human rights abuses. While primarily international, it establishes the framework for asset freezes based on corruption.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['U.S. President', 'Office of Foreign Assets Control (OFAC)', 'U.S. Department of State'],
      applicability: 'requires_new_action',
      notes: 'Relevant if any assets from this conspiracy were moved to international jurisdictions or if any participants hold dual citizenship or have offshore assets.',
    },
  ],

  // ============================================================
  // WEALTH TRACING
  // ============================================================
  wealthTrace: [
    {
      name: 'Michael Milken / Milken Family',
      relationship: 'Primary perpetrator and direct family',
      transferMethod: 'Original criminal earnings → family trusts, investment vehicles, Milken Institute, Milken Family Foundation, private equity stakes',
      estimatedValue: '$6.2 billion (Forbes 2025)',
      legalEntities: ['Milken Institute', 'Milken Family Foundation', 'Various private investment vehicles'],
      recoveryMechanisms: ['Constructive Trust', 'Unjust Enrichment', 'Tax Fraud Investigation', 'State AG Securities Actions'],
    },
    {
      name: 'Bilzerian Family (incl. Dan Bilzerian)',
      relationship: 'Son and family of convicted fraudster Paul Bilzerian',
      transferMethod: 'Assets transferred during/before bankruptcy proceedings. Paul Bilzerian owed $62M in court-ordered restitution that was never collected. Family maintained visible extreme wealth.',
      estimatedValue: '$200+ million in visible assets (real estate, social media ventures)',
      legalEntities: ['Various LLCs', 'Real estate holdings', 'Social media ventures'],
      recoveryMechanisms: ['Fraudulent Transfer', 'Civil Contempt', 'Tax Fraud Investigation', 'Unpaid Restitution Enforcement'],
    },
    {
      name: 'Boesky Estate / Family Trusts',
      relationship: 'Estate and trusts of Ivan Boesky (deceased May 2024)',
      transferMethod: 'Assets sheltered in family trusts during lifetime. Cooperation agreement may have limited scope of forfeiture. Full extent of offshore holdings unknown.',
      estimatedValue: 'Unknown — original wealth estimated $200M+ beyond the $100M penalty',
      legalEntities: ['Family trusts', 'Various holding companies'],
      recoveryMechanisms: ['Constructive Trust', 'Estate Claims', 'Tax Fraud Investigation'],
    },
    {
      name: 'Jefferies Financial Group (successor to Jefferies & Company)',
      relationship: 'Corporate successor to the firm used for illegal stock parking',
      transferMethod: 'Corporate continuation — the criminal activity provided foundation for the firm\'s growth into a global investment bank',
      estimatedValue: '$10+ billion (current market cap)',
      legalEntities: ['Jefferies Financial Group, Inc. (NYSE: JEF)'],
      recoveryMechanisms: ['Shareholder Derivative Action', 'Unjust Enrichment', 'State AG Action'],
    },
  ],

  // ============================================================
  // AUTHORITIES WITH POWER TO ACT
  // ============================================================
  authoritiesWithPower: [
    {
      name: 'U.S. Attorney General',
      title: 'Head of the U.S. Department of Justice',
      jurisdiction: 'Federal — all states and territories',
      powers: [
        'Initiate civil asset forfeiture proceedings',
        'Enforce unpaid restitution orders',
        'Investigate tax fraud (through Tax Division)',
        'Open new investigations into fraudulent transfers',
        'Coordinate with state AGs for parallel actions',
      ],
    },
    {
      name: 'SEC Chair',
      title: 'Chair, Securities and Exchange Commission',
      jurisdiction: 'Federal securities regulation',
      powers: [
        'Open enforcement actions for disgorgement',
        'Investigate undisclosed holdings and transfers',
        'Refer cases to DOJ for criminal prosecution',
        'Issue subpoenas for financial records',
      ],
    },
    {
      name: 'New York Attorney General',
      title: 'Attorney General of the State of New York',
      jurisdiction: 'State of New York — where most trading and transactions occurred',
      powers: [
        'Martin Act enforcement (no intent requirement)',
        'Civil fraud actions with broad discovery powers',
        'Consumer protection actions on behalf of defrauded investors',
        'Coordinate with federal agencies',
      ],
    },
    {
      name: 'California Attorney General',
      title: 'Attorney General of the State of California',
      jurisdiction: 'State of California — Milken\'s primary base of operations in Beverly Hills',
      powers: [
        'State securities fraud enforcement',
        'Civil fraud actions',
        'Consumer protection actions',
        'Coordinate with federal agencies',
      ],
    },
    {
      name: 'House Committee on Financial Services',
      title: 'U.S. House of Representatives',
      jurisdiction: 'Federal — congressional oversight of financial institutions and markets',
      powers: [
        'Subpoena documents and testimony',
        'Hold public hearings',
        'Introduce legislation to close loopholes',
        'Refer findings to DOJ for prosecution',
        'Investigate pardon processes',
      ],
    },
    {
      name: 'Senate Committee on Banking, Housing, and Urban Affairs',
      title: 'U.S. Senate',
      jurisdiction: 'Federal — senate oversight of banking and securities',
      powers: [
        'Subpoena documents and testimony',
        'Hold confirmation hearings for SEC nominees',
        'Introduce legislation',
        'Investigate regulatory failures',
      ],
    },
    {
      name: 'IRS Commissioner',
      title: 'Commissioner of the Internal Revenue Service',
      jurisdiction: 'Federal tax enforcement — no statute of limitations for fraud',
      powers: [
        'Audit any year\'s returns where fraud is suspected',
        'Pursue tax fraud cases with no time limit',
        'Assess penalties on unreported criminal income',
        'Pursue estate and gift tax claims against heirs',
        'Coordinate with DOJ Tax Division for criminal prosecution',
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
      overview: 'As a citizen, you have the power to demand accountability through official complaint channels, FOIA requests, public pressure on elected officials, and support for civil litigation. The crimes documented in this investigation affected millions of Americans — every citizen has standing to demand that stolen wealth be recovered and returned to the public.',
      urgency: 'standard',
      relevantMechanisms: ['Congressional Investigation & Legislative Action', 'State Attorney General Actions'],
      steps: [
        {
          step: 1,
          title: 'File a Complaint with the SEC',
          description: 'Submit a formal complaint to the SEC\'s Office of the Whistleblower and the Division of Enforcement requesting investigation into undisclosed assets and unpaid disgorgement related to 1980s insider trading participants. Specifically reference the $62 million in unpaid restitution owed by Paul Bilzerian.',
          filingTarget: 'SEC Office of the Whistleblower — https://www.sec.gov/whistleblower',
          templateText: 'Dear SEC Division of Enforcement,\n\nI am writing to formally request investigation into the following matters relating to the 1980s insider trading conspiracies:\n\n1. Paul Bilzerian owes $62 million in court-ordered restitution from his 1989 conviction for securities fraud and conspiracy (United States v. Bilzerian, Case No. 88-0886-CR). This amount has never been collected despite visible family wealth. I request investigation into whether assets were fraudulently transferred to avoid payment.\n\n2. Michael Milken\'s original $600 million penalty represented a fraction of estimated criminal earnings during his tenure at Drexel Burnham Lambert. I request investigation into whether full disgorgement was achieved and whether undisclosed assets remain.\n\n3. The estate of Ivan Boesky (deceased May 2024) may contain assets traceable to insider trading proceeds that were not captured by the original $100 million penalty.\n\nI request that the Commission exercise its enforcement authority under 15 U.S.C. § 78u to investigate and pursue disgorgement of remaining ill-gotten gains.\n\nRespectfully,\n[Your Name]',
          legalBasis: ['15 U.S.C. § 78u(d)(5)', 'SEC Whistleblower Program (Exchange Act Rule 21F)'],
          estimatedTime: '30 minutes to file',
        },
        {
          step: 2,
          title: 'Submit FOIA Requests',
          description: 'File Freedom of Information Act requests with the DOJ, SEC, and IRS for records related to asset recovery, restitution enforcement, and any ongoing investigations into 1980s insider trading participants.',
          filingTarget: 'DOJ FOIA: https://www.justice.gov/oip | SEC FOIA: https://www.sec.gov/foia | IRS FOIA: https://www.irs.gov/privacy-disclosure/foia-library',
          templateText: 'Under the Freedom of Information Act (5 U.S.C. § 552), I request copies of all records related to:\n\n1. Enforcement of restitution orders against Paul Bilzerian arising from United States v. Bilzerian (1989)\n2. Asset forfeiture proceedings or investigations related to participants in the 1980s insider trading conspiracies since January 1, 2000\n3. Any communication between the Office of the Pardon Attorney and any third parties regarding the pardon of Michael Milken (granted February 18, 2020)\n4. SEC enforcement actions or investigations related to Milken, Boesky, Bilzerian, or their family members or associated entities since January 1, 2010\n\nI request a fee waiver as disclosure of these records is in the public interest and will contribute significantly to public understanding of government operations.\n\n[Your Name]',
          legalBasis: ['5 U.S.C. § 552 (Freedom of Information Act)'],
          estimatedTime: '1 hour to prepare and submit',
        },
        {
          step: 3,
          title: 'Contact Your Members of Congress',
          description: 'Write to your U.S. Representative (House Financial Services Committee) and U.S. Senators (Senate Banking Committee) demanding congressional investigation into why $62 million in court-ordered restitution from Paul Bilzerian was never collected, and whether the Milken pardon was properly vetted.',
          filingTarget: 'Find your representatives at https://www.congress.gov/members/find-your-member',
          templateText: 'Dear [Representative/Senator],\n\nI am writing to urge you to investigate and take action on the following accountability failures related to the 1980s insider trading scandal:\n\n1. UNPAID RESTITUTION: Paul Bilzerian was ordered to pay $62 million following his 1989 conviction for securities fraud. Thirty-seven years later, this amount remains uncollected while the Bilzerian family maintains visible extreme wealth. This represents a catastrophic failure of judicial enforcement.\n\n2. PARDON INVESTIGATION: Michael Milken received a presidential pardon on February 18, 2020, after associates donated heavily to political campaigns. I request investigation into whether this pardon was obtained through improper influence.\n\n3. GENERATIONAL WEALTH FROM CRIME: The families of convicted insider traders continue to hold billions in wealth traceable to criminal activity. Current law provides mechanisms for recovery, but enforcement has been absent.\n\nI urge you to:\n- Request hearings before the [Financial Services/Banking] Committee\n- Issue subpoenas for financial records of involved parties\n- Introduce legislation to eliminate statutes of limitations on civil recovery of proceeds from securities fraud\n\nThe American people deserve to know why criminals and their families are allowed to keep billions stolen from public investors.\n\nRespectfully,\n[Your Name]\n[Your Address]',
          legalBasis: ['U.S. Constitution Art. I, § 8 (Congressional oversight authority)'],
          estimatedTime: '45 minutes to personalize and send',
        },
        {
          step: 4,
          title: 'File State AG Complaints',
          description: 'File complaints with the New York Attorney General and California Attorney General requesting investigation into assets held within their states by participants in the insider trading conspiracy.',
          filingTarget: 'NY AG: https://ag.ny.gov/consumer-frauds/filing-consumer-complaint | CA AG: https://oag.ca.gov/contact/consumer-complaint-against-business-or-company',
          requirements: [
            'Identify specific individuals/entities within each state',
            'Reference specific state securities laws violated',
            'Request civil enforcement action',
          ],
          legalBasis: ['N.Y. Gen. Bus. Law §§ 352-353 (Martin Act)', 'California Corporations Code § 25500 et seq.'],
          estimatedTime: '1 hour per complaint',
        },
        {
          step: 5,
          title: 'Support and Amplify',
          description: 'Share the ArkHive investigation page on social media, support journalists covering this story, and organize with others demanding accountability. Public pressure is the force multiplier that makes every other step more effective.',
          requirements: [
            'Share the full investigation URL',
            'Tag relevant representatives and officials',
            'Connect with others who filed similar complaints',
            'Support organizations working on financial crime accountability',
          ],
          estimatedTime: 'Ongoing',
        },
      ],
    },

    // ---- JOURNALIST ----
    {
      role: 'journalist',
      overview: 'The 1980s insider trading conspiracy contains multiple active accountability failures that are actionable news stories right now. The $62 million owed by Paul Bilzerian and never collected, the circumstances around the Milken pardon, and the generational transfer of criminal wealth are all current stories with documentary evidence.',
      urgency: 'high',
      relevantMechanisms: ['Tax Fraud — No Statute of Limitations', 'Fraudulent Transfer / Voidable Transactions', 'Congressional Investigation & Legislative Action'],
      steps: [
        {
          step: 1,
          title: 'File Targeted FOIA Requests',
          description: 'Submit FOIA requests to DOJ, SEC, IRS, and the Office of the Pardon Attorney for records on enforcement actions (or lack thereof) against insider trading participants since 2000. Focus on the Bilzerian restitution failure and the Milken pardon process.',
          requirements: [
            'DOJ: Records on restitution enforcement for United States v. Bilzerian',
            'SEC: Enforcement actions or investigations since 2010 involving any named defendant',
            'Office of the Pardon Attorney: Complete file on Milken pardon application, including all supporting materials and recommendations',
            'IRS: Whether audits were conducted on defendant estates and trusts',
          ],
          legalBasis: ['5 U.S.C. § 552', 'DOJ FOIA Guidelines'],
          estimatedTime: '2-3 hours to prepare comprehensive requests',
        },
        {
          step: 2,
          title: 'Investigate the Bilzerian Wealth Trail',
          description: 'Paul Bilzerian owes $62M that was never collected. His son Dan Bilzerian has been publicly displaying extreme wealth for years. Investigate: How was wealth transferred? What assets are held in what names? What LLCs, trusts, or corporate structures were used? Are there real estate records, business filings, or social media posts that document transfer of wealth?',
          requirements: [
            'State corporate filing searches (Nevada, Florida, California)',
            'Real estate records in counties where Bilzerian family owns property',
            'Court records from bankruptcy proceedings',
            'Social media documentation of lifestyle/assets',
            'Interviews with former associates, creditors, attorneys',
          ],
          estimatedTime: '2-4 weeks of investigation',
        },
        {
          step: 3,
          title: 'Map Milken\'s Financial Empire',
          description: 'Trace how Milken\'s $600M penalty related to his total criminal earnings. Map the Milken Institute, Milken Family Foundation, and private investment vehicles. Investigate what portion of current $6.2B fortune is traceable to criminal activity. Interview former prosecutors, SEC enforcement staff, and Drexel employees.',
          requirements: [
            'Milken Institute 990 tax filings (public record)',
            'Milken Family Foundation financial disclosures',
            'SEC filings for any registered investment vehicles',
            'Interviews with former U.S. Attorneys, SEC enforcement chiefs from the era',
            'Academic experts on securities fraud and disgorgement',
          ],
          estimatedTime: '4-8 weeks for comprehensive investigation',
        },
        {
          step: 4,
          title: 'Document the Pardon Pipeline',
          description: 'Investigate the political donation history of Milken, his associates, and his financial network in the years leading up to the 2020 pardon. Cross-reference with lobbying records, campaign finance filings, and any communications between Milken representatives and the White House or Office of the Pardon Attorney.',
          requirements: [
            'FEC campaign finance records',
            'Lobbying disclosure filings',
            'White House visitor logs',
            'Office of the Pardon Attorney records (via FOIA)',
          ],
          legalBasis: ['Federal Election Campaign Act (52 U.S.C. § 30101 et seq.)'],
          estimatedTime: '2-4 weeks',
        },
        {
          step: 5,
          title: 'Publish and Amplify',
          description: 'Write the story with full documentation. Include links to ArkHive\'s evidence database. Coordinate with other outlets for maximum impact. Submit findings to congressional committees.',
          estimatedTime: '1-2 weeks for writing and editing',
        },
      ],
    },

    // ---- LAWYER ----
    {
      role: 'lawyer',
      overview: 'Multiple viable legal actions exist for recovering proceeds from the 1980s insider trading conspiracy. Key opportunities: (1) Enforce the $62M Bilzerian restitution through fraudulent transfer litigation, (2) Pursue constructive trust on Milken assets traceable to criminal enterprise, (3) State-level securities fraud actions not affected by federal pardon, (4) Tax fraud referrals with no statute of limitations.',
      urgency: 'high',
      relevantMechanisms: ['Constructive Trust', 'Fraudulent Transfer / Voidable Transactions', 'Civil RICO', 'Unjust Enrichment', 'Tax Fraud — No Statute of Limitations', 'Disgorgement of Ill-Gotten Gains'],
      steps: [
        {
          step: 1,
          title: 'Assess Standing and Jurisdiction',
          description: 'Identify clients with standing: institutional investors, pension funds, or classes of investors who suffered losses from manipulated securities. Determine jurisdiction — New York (where most trading occurred), California (Milken\'s operations), or federal court.',
          requirements: [
            'Client with demonstrable loss from insider trading manipulation',
            'Jurisdictional analysis for each defendant',
            'Conflict check against all named parties',
          ],
          legalBasis: ['Fed. R. Civ. P. 17 (Real Party in Interest)', '28 U.S.C. § 1332 (Diversity Jurisdiction)'],
          estimatedTime: '1-2 weeks',
        },
        {
          step: 2,
          title: 'File Constructive Trust Action',
          description: 'File a constructive trust action in the appropriate state court to impose a trust on assets traceable to criminal insider trading proceeds. Target: Milken family trusts, Bilzerian family assets, Boesky estate. The constructive trust follows the money regardless of how many transfers occurred and has no statute of limitations in most jurisdictions.',
          requirements: [
            'Asset tracing analysis (forensic accounting)',
            'Documentation of criminal convictions and adjudicated facts',
            'Identification of current holders and legal structures',
            'Expert witness on securities fraud and asset tracing',
          ],
          legalBasis: ['Restatement (Third) of Restitution § 55', 'State constructive trust law'],
          estimatedTime: '3-6 months to file; 1-3 years to resolve',
        },
        {
          step: 3,
          title: 'File Motion to Enforce Bilzerian Restitution',
          description: 'In the original criminal case (United States v. Bilzerian, S.D. Fla.), file a motion requesting the court enforce the $62 million restitution order. Request the court hold Bilzerian in civil contempt, order asset disclosure, and appoint a receiver to identify and seize assets. Alternatively, file a fraudulent transfer action to void transfers made to family members to avoid the judgment.',
          requirements: [
            'Original case docket and restitution order',
            'Evidence of Bilzerian family wealth (real estate records, business filings, public statements)',
            'Fraudulent transfer analysis',
            'Motion for civil contempt and appointment of receiver',
          ],
          legalBasis: ['18 U.S.C. § 3613 (Civil Remedies for Enforcement of Fines)', 'UVTA § 4-5', 'Fed. R. Civ. P. 69'],
          estimatedTime: '2-4 weeks to file motion; 6-12 months for enforcement',
        },
        {
          step: 4,
          title: 'Prepare Civil RICO Complaint',
          description: 'If representing a class of injured investors, file a Civil RICO action under 18 U.S.C. § 1964(c) against participants whose criminal enterprise structure persists through successor entities, family enterprises, or ongoing concealment of assets. Seek treble damages.',
          requirements: [
            'Pattern of racketeering activity (minimum 2 predicate acts)',
            'Enterprise definition (association-in-fact or legal entity)',
            'Injury to plaintiff\'s business or property',
            'Proximate causation',
          ],
          legalBasis: ['18 U.S.C. § 1964(c)', 'RJR Nabisco v. European Community (2016)'],
          estimatedTime: '2-4 months to prepare; multi-year litigation',
        },
        {
          step: 5,
          title: 'Refer Tax Fraud to IRS/DOJ',
          description: 'Prepare and submit a detailed referral to the IRS Criminal Investigation Division and DOJ Tax Division documenting unreported income from insider trading proceeds. Tax fraud has NO statute of limitations. Include forensic analysis of known transactions vs. reported income.',
          filingTarget: 'IRS Criminal Investigation: https://www.irs.gov/compliance/criminal-investigation | DOJ Tax Division',
          legalBasis: ['26 U.S.C. § 6501(c)(1)-(2)', '26 U.S.C. § 7201 (Tax Evasion)'],
          estimatedTime: '4-8 weeks to prepare referral',
        },
        {
          step: 6,
          title: 'Pursue State Securities Actions',
          description: 'File state securities fraud actions in New York (Martin Act — no intent requirement) and California. State actions are NOT affected by federal pardons. Target current holders of criminally-derived assets.',
          requirements: [
            'State-specific securities fraud elements',
            'Asset location within each state',
            'Identification of state regulators for coordination',
          ],
          legalBasis: ['N.Y. Gen. Bus. Law §§ 352-353 (Martin Act)', 'Cal. Corp. Code § 25500'],
          estimatedTime: '2-3 months to file',
        },
      ],
    },

    // ---- ELECTED OFFICIAL ----
    {
      role: 'elected_official',
      overview: 'As an elected official, you have the constitutional authority to investigate, subpoena, legislate, and hold hearings. The 1980s insider trading scandal represents a catastrophic accountability failure: $62 million in unpaid restitution, a controversial pardon, and billions in criminal proceeds transferred to the next generation. Your constituents — the investors and taxpayers who suffered — deserve answers and action.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Investigation & Legislative Action', 'Civil Asset Forfeiture', 'State Attorney General Actions'],
      steps: [
        {
          step: 1,
          title: 'Request Committee Investigation',
          description: 'Submit a formal request to the Chair of the House Financial Services Committee and/or the Senate Banking Committee to open an investigation into the enforcement failures surrounding 1980s insider trading convictions.',
          requirements: [
            'Letter to committee chair with specific questions for investigation',
            'Co-sponsors from both parties for credibility',
            'Media strategy for public attention',
          ],
          estimatedTime: '1-2 weeks to prepare and submit',
        },
        {
          step: 2,
          title: 'Issue Subpoenas for Financial Records',
          description: 'Using committee subpoena power, compel production of financial records from: DOJ (restitution enforcement files), SEC (post-conviction monitoring), IRS (audit records for defendants and families), and financial institutions holding defendant/family assets.',
          legalBasis: ['U.S. Constitution Art. I, § 8', 'Senate Rule XXVI / House Rule XI (subpoena authority)'],
          estimatedTime: '4-8 weeks for production',
        },
        {
          step: 3,
          title: 'Hold Public Hearings',
          description: 'Convene public hearings with testimony from former prosecutors, SEC enforcement chiefs, victimized investors, forensic accountants, and legal scholars. Make the scope of the accountability failure visible to the American public.',
          requirements: [
            'Witness list: Former U.S. Attorneys who handled cases, former SEC enforcement directors, victim representatives, asset tracing experts',
            'Documentary evidence packages for committee members',
            'Media coordination for maximum public visibility',
          ],
          estimatedTime: '4-6 weeks to organize',
        },
        {
          step: 4,
          title: 'Introduce Accountability Legislation',
          description: 'Draft and introduce legislation addressing the systemic failures exposed by this investigation. Key provisions should include: (1) Eliminate statutes of limitations on civil recovery of proceeds from securities fraud, (2) Mandatory asset disclosure for convicted fraudsters and their immediate families, (3) Automatic lien on assets of pardoned financial criminals until full restitution is verified, (4) Enhanced DOJ/SEC cooperation requirements for restitution enforcement.',
          requirements: [
            'Legislative counsel drafting',
            'Co-sponsors and committee support',
            'CBO score and analysis',
            'Floor strategy',
          ],
          estimatedTime: '3-6 months for introduction; legislative timeline varies',
        },
        {
          step: 5,
          title: 'Refer Findings to DOJ and State AGs',
          description: 'Based on hearing findings, formally refer potential criminal and civil actions to the Department of Justice and relevant state Attorneys General. Include specific recommendations and evidence gathered through congressional investigation.',
          estimatedTime: '2-4 weeks after hearings conclude',
        },
      ],
    },

    // ---- LAW ENFORCEMENT ----
    {
      role: 'law_enforcement',
      overview: 'Active enforcement opportunities include: investigation of fraudulent transfers to avoid restitution obligations (Paul Bilzerian), tax fraud investigation with no statute of limitations, civil asset forfeiture of criminally-derived assets, and investigation of potential corruption in the pardon process.',
      urgency: 'high',
      relevantMechanisms: ['Civil Asset Forfeiture', 'Tax Fraud — No Statute of Limitations', 'Fraudulent Transfer / Voidable Transactions'],
      steps: [
        {
          step: 1,
          title: 'Open Investigation into Bilzerian Restitution Evasion',
          description: 'Paul Bilzerian owes $62 million in court-ordered restitution from his 1989 conviction. He filed bankruptcy claiming inability to pay, yet his family has displayed extreme public wealth. Open an investigation into whether assets were fraudulently transferred to avoid the judgment. This may constitute additional federal crimes: contempt of court, obstruction of justice, and fraud.',
          requirements: [
            'Original court records and restitution order',
            'Bankruptcy filing records and schedules',
            'Asset searches: real estate, vehicles, corporate filings in all states',
            'Social media evidence of Bilzerian family wealth',
            'Bank records via subpoena or search warrant',
          ],
          legalBasis: ['18 U.S.C. § 1503 (Obstruction of Justice)', '18 U.S.C. § 152 (Bankruptcy Fraud)', '18 U.S.C. § 3613'],
          estimatedTime: '6-12 months for investigation',
        },
        {
          step: 2,
          title: 'Coordinate with IRS Criminal Investigation',
          description: 'Refer all named defendants and their families/trusts to IRS CI for tax fraud investigation. Tax fraud has NO statute of limitations. Given the scale of hidden transactions (offshore accounts, stock parking, unreported profits), it is virtually certain that tax obligations remain outstanding.',
          filingTarget: 'IRS Criminal Investigation Division — local field office',
          legalBasis: ['26 U.S.C. § 7201 (Tax Evasion)', '26 U.S.C. § 6501(c) (No SOL for Fraud)'],
          estimatedTime: '2-4 weeks for referral; ongoing investigation',
        },
        {
          step: 3,
          title: 'Initiate Civil Forfeiture Proceedings',
          description: 'File civil forfeiture complaints against specific assets traceable to criminal insider trading proceeds. Civil forfeiture targets the property, not the person — it does not require the property owner to be living or convicted.',
          requirements: [
            'Asset identification and tracing from criminal proceeds',
            'Probable cause that assets are proceeds of, or traceable to, specified unlawful activity',
            'Forfeiture complaint and warrant',
          ],
          legalBasis: ['18 U.S.C. § 981', '28 U.S.C. § 2461(c)', 'Civil Asset Forfeiture Reform Act of 2000'],
          estimatedTime: '3-6 months to prepare and file',
        },
        {
          step: 4,
          title: 'Investigate Pardon Corruption',
          description: 'Investigate whether the presidential pardon of Michael Milken (February 18, 2020) was obtained through corrupt means. Examine campaign contributions, lobbying activities, and any quid pro quo arrangements between Milken associates and the administration.',
          requirements: [
            'Office of the Pardon Attorney records',
            'FEC campaign finance records for Milken associates',
            'Lobbying disclosure filings',
            'Witness interviews with White House staff and Pardon Attorney officials',
          ],
          legalBasis: ['18 U.S.C. § 201 (Bribery)', '18 U.S.C. § 1346 (Honest Services Fraud)'],
          estimatedTime: '6-12 months',
        },
      ],
    },

    // ---- REGULATOR ----
    {
      role: 'regulator',
      overview: 'Regulators at the SEC, FINRA, state securities commissions, and federal banking agencies have authority to investigate ongoing enrichment from the 1980s insider trading conspiracy. Key regulatory actions include: reopening disgorgement calculations, investigating successor entities, and coordinating with law enforcement for enforcement actions.',
      urgency: 'high',
      relevantMechanisms: ['Disgorgement of Ill-Gotten Gains', 'State Attorney General Actions', 'Civil Asset Forfeiture'],
      steps: [
        {
          step: 1,
          title: 'Audit Original Disgorgement Calculations',
          description: 'Review whether the original disgorgement orders against Milken ($600M), Boesky ($100M), and others captured the full extent of criminal profits. With decades of hindsight and access to additional financial records, determine whether supplemental disgorgement is warranted.',
          requirements: [
            'Original enforcement files and disgorgement calculations',
            'Current financial records of defendants and their entities',
            'Forensic accounting analysis of criminal proceeds vs. recovery',
          ],
          legalBasis: ['15 U.S.C. § 78u(d)(5)', 'Liu v. SEC, 591 U.S. ___ (2020)'],
          estimatedTime: '3-6 months for audit',
        },
        {
          step: 2,
          title: 'Investigate Successor Entities',
          description: 'Examine whether corporate successors to firms involved in the conspiracy (particularly Jefferies Financial Group, successor to Jefferies & Company) continue to benefit from the foundation laid by criminal activity. Determine whether regulatory actions are warranted.',
          requirements: [
            'Corporate history and succession records',
            'Financial analysis of how criminal activity contributed to firm growth',
            'Current regulatory compliance status',
          ],
          estimatedTime: '2-4 months',
        },
        {
          step: 3,
          title: 'Coordinate Multi-Agency Enforcement',
          description: 'Establish a joint task force with DOJ, IRS, state AGs, and FINRA to pursue a coordinated enforcement strategy targeting all remaining recoverable assets. A multi-agency approach prevents defendants from exploiting jurisdictional gaps.',
          requirements: [
            'MOU between participating agencies',
            'Joint investigation plan',
            'Shared intelligence database',
            'Regular coordination meetings',
          ],
          estimatedTime: '2-3 months to establish; ongoing operation',
        },
        {
          step: 4,
          title: 'Recommend Legislative Reform',
          description: 'Based on enforcement experience, prepare detailed recommendations to Congress for legislative reforms: eliminating SOL on civil recovery from securities fraud, mandatory asset disclosure for convicted fraudsters, enhanced cross-border recovery mechanisms, and automatic liens on assets of pardoned financial criminals pending full restitution verification.',
          filingTarget: 'House Financial Services Committee, Senate Banking Committee',
          estimatedTime: '1-2 months to prepare',
        },
      ],
    },
  ],

  // ============================================================
  // WHAT SUCCESS LOOKS LIKE
  // ============================================================
  successCriteria: [
    'Full collection of $62 million owed by Paul Bilzerian, plus interest and penalties for decades of evasion',
    'Constructive trust imposed on Milken family assets traceable to criminal enterprise — recovered funds returned to defrauded investors and pension funds',
    'Congressional investigation into pardon process, with public hearings and full transparency',
    'Legislation eliminating statute of limitations on civil recovery from securities fraud',
    'Mandatory asset disclosure requirements for convicted financial criminals and their immediate families',
    'Full IRS audit of all defendants and their estates with recovery of unpaid taxes on unreported criminal income',
    'Recovery of assets from Boesky estate trusts traceable to insider trading proceeds',
    'Public accountability record ensuring that no descendant of these criminals can hold public office, serve on corporate boards, or operate in finance without full disclosure of how their wealth was obtained',
    'Establishment of a precedent that criminal wealth cannot be legitimized through the passage of time, philanthropic rebranding, or transfer to the next generation',
  ],
};
