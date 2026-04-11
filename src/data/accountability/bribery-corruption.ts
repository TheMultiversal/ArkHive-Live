import type { AccountabilityData } from '@/types/accountability';

export const briberyCorrruptionAccountability: AccountabilityData = {
  investigationSlug: 'bribery-corruption',
  crimeSummary: 'Systematic political bribery and corruption in the United States, from direct quid pro quo arrangements to the legalized corruption of unlimited campaign financing. Key cases: Senator Robert Menendez charged (2023, convicted 2024) with taking bribes from Egypt and Qatar in exchange for official acts  -  gold bars and cash found in his home. Representative George Santos convicted of fraud. Illinois Governor Rod Blagojevich tried to sell Barack Obama\'s Senate seat. Jack Abramoff lobbying scandal defrauded Native American tribes. Citizens United v. FEC (2010) opened unlimited dark money to flood elections. Super PACs now spend billions while the corruption is technically legal. The FEC  -  tasked with enforcing campaign finance law  -  is structurally designed to deadlock and rarely acts.',
  totalHarm: 'Democratic legitimacy undermined. Billions in dark money flowing into elections with no transparency. Policy outcomes shaped by donors rather than constituents. Princeton study found that average citizens\' policy preferences have "near-zero" impact on policy outcomes. Public trust in government at historic lows (20% trust government, Pew 2023). Specific harm: Menendez took actions benefiting Egypt while it detained American citizens.',
  victimsAffected: 'American voters whose representation is diluted by dark money. Communities whose policy needs are subordinated to donor interests. Native American tribes defrauded by Abramoff. Citizens of nations affected by corrupt U.S. foreign policy acts.',
  primaryTargets: [
    {
      name: 'Senator Robert Menendez',
      role: 'U.S. Senator (D-NJ). Charged in September 2023 with bribery, acting as a foreign agent, and obstruction. FBI found $480,000 in cash, 13 gold bars ($150,000+), and a Mercedes-Benz convertible  -  all allegedly from businessmen seeking his influence with Egypt and Qatar.',
      currentStatus: 'Convicted on all counts (July 2024). Sentenced to 11 years in federal prison. Resigned from Senate. Appeals ongoing.',
      accountabilityPath: 'Convicted and sentenced. Rare example of senator being held accountable for direct bribery.',
      obstacles: ['Appeals process ongoing'],
    },
    {
      name: 'Citizens United / Dark Money Infrastructure',
      role: 'The Supreme Court\'s Citizens United v. FEC (2010) decision held that corporate independent expenditures are protected speech. Combined with SpeechNow.org v. FEC (D.C. Circuit, 2010), this created super PACs with unlimited contributions. Dark money groups (501(c)(4) organizations) can spend unlimited amounts without disclosing donors.',
      currentStatus: 'Citizens United is settled law. Dark money spending exceeds $1 billion per election cycle. The DISCLOSE Act to require donor transparency has been repeatedly blocked.',
      accountabilityPath: 'Constitutional amendment to overturn Citizens United (20 states have called for it). DISCLOSE Act passage. State-level transparency laws.',
      obstacles: ['First Amendment protection per SCOTUS', 'Senate filibuster blocks DISCLOSE Act', 'FEC deadlock by design'],
    },
  ],
  legalMechanisms: [
    { name: 'Federal Bribery Statute', statute: '18 U.S.C. § 201', description: 'Prohibits bribing or being bribed as a public official. Menendez convicted under this statute. Requires proof of quid pro quo  -  increasingly difficult after Supreme Court narrowed the definition of "official act" in McDonnell v. United States (2016).', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'Foreign Agents Registration Act (FARA)', statute: '22 U.S.C. § 611', description: 'Requires agents of foreign principals to register. Menendez charged as an unregistered foreign agent for Egypt. FARA enforcement has increased but remains selective.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'DISCLOSE Act', statute: 'Proposed: Democracy Is Strengthened by Casting Light On Spending in Elections Act', description: 'Would require disclosure of donors contributing $10,000+ to dark money organizations engaged in election spending. Repeatedly introduced and blocked.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'Dark Money in Elections', relationship: 'Legalized corruption through campaign finance', transferMethod: 'Super PACs and dark money 501(c)(4) groups spend billions per election cycle. Top donors: conservative (Koch network, Club for Growth) and liberal (Democracy PAC, Senate Majority PAC) groups. Much corporate money is untraceable. The corruption is bipartisan and structural.', estimatedValue: '$14.4 billion spent in 2020 election cycle; $1+ billion in dark money', legalEntities: ['Super PACs', '501(c)(4) organizations', 'LLCs used for anonymous donations'], recoveryMechanisms: ['DISCLOSE Act', 'State transparency laws', 'Constitutional amendment'] },
  ],
  authoritiesWithPower: [
    { name: 'DOJ Public Integrity Section', title: 'DOJ Criminal Division, Public Integrity Section', jurisdiction: 'Public corruption', powers: ['Prosecute bribery', 'Investigate foreign agent violations', 'Public corruption cases'] },
    { name: 'FEC', title: 'Federal Election Commission', jurisdiction: 'Campaign finance enforcement', powers: ['Enforce campaign finance law', 'Investigate violations', 'Issue fines  -  but structurally deadlocked by 3-3 partisan design'] },
  ],
  successCriteria: [
    'FEC structural reform -- change from 3-3 partisan deadlock to an odd number of commissioners or establish an independent enforcement arm with mandatory investigation triggers',
    'DISCLOSE Act passage requiring transparency for all election spending above $10,000 -- the American public has a right to know who is funding the campaigns that seek to govern them',
    'Constitutional amendment to overturn Citizens United restoring Congress\'s authority to regulate campaign spending -- 20 states have already called for one',
    'Full investigation and prosecution of foreign money flowing into American elections through intermediaries like the NRA -- the Butina conviction revealed a pipeline that remains incompletely investigated',
    'McDonnell v. United States reversal through legislation -- the Supreme Court\'s narrowing of "official act" to near-impossibility makes bribery prosecution of public officials functionally impossible unless they are caught with gold bars in their jacket',
    'Mandatory FARA registration enforcement for all lobbyists representing foreign interests -- current enforcement is selective and politically influenced',
    'Complete public documentation linking dark money spending to specific policy outcomes -- the Princeton finding that average citizens\' policy preferences have "near-zero" impact must be connected to specific donor-legislator-vote chains',
    'State-level transparency laws in all 50 states requiring disclosure of donors to organizations making election-related expenditures -- if federal reporting is blocked, state-level disclosure is the backstop',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Your government is for sale. Dark money buys policy. Direct bribery is just the visible tip.',
      urgency: 'immediate',
      relevantMechanisms: ['DISCLOSE Act', 'Federal Bribery Statute'],
      steps: [
        {
          step: 1,
          title: 'Demand Campaign Finance Reform',
          description: 'Contact representatives to demand passage of the DISCLOSE Act. Support state-level transparency initiatives. Demand FEC reform with an odd number of commissioners to break the structural deadlock.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your House and Senate representatives; Senate Rules Committee; House Administration Committee',
          templateText: 'Dear [Representative/Senator],\n\nSenator Menendez was found with gold bars and cash in his home. The NRA funneled Russian money into American elections. Citizens United opened the floodgates of dark money. The FEC is designed to deadlock.\n\nI urge you to:\n1. Pass the DISCLOSE Act requiring donor transparency\n2. Reform the FEC with an odd number of commissioners\n3. Support a constitutional amendment to overturn Citizens United\n4. Fully investigate foreign money in American elections\n\nDemocracy is not for sale. Or at least, it shouldn\'t be.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Track the Money',
          description: 'Use OpenSecrets.org to track who funds your representatives. Make this information visible in your community. When voters can see the donor-to-vote pipeline, they can make informed decisions.',
          estimatedTime: '1 hour',
        },
        {
          step: 3,
          title: 'Support Anticorruption Organizations',
          description: 'Support organizations fighting political corruption: Campaign Legal Center, Issue One, Represent.Us, Citizens for Responsibility and Ethics in Washington (CREW). These organizations file complaints, conduct investigations, and push for reform.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Follow the dark money. Document the policy-for-donations pipeline. Map the LLC chains used to hide donors.',
      urgency: 'immediate',
      relevantMechanisms: ['DISCLOSE Act', 'Federal Bribery Statute'],
      steps: [
        {
          step: 1,
          title: 'Dark Money Network Mapping',
          description: 'Trace dark money from 501(c)(4) organizations to policy outcomes. Identify the LLC chains, shell companies, and fiscal sponsors used to hide donors. Connect specific anonymous donations to specific legislative votes.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'FEC Deadlock Documentation',
          description: 'Document every enforcement action the FEC has failed to take due to partisan deadlock. Track the complaints filed, the deadlock votes, and the violations that went unenforced. Quantify the cost of designed non-enforcement.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Foreign Money Pipeline',
          description: 'Investigate the full scope of foreign money in American elections. The NRA-Russia connection (Butina) was one disclosed pipeline. Investigate other intermediary organizations, crypto donations, and straw donor schemes used to circumvent the foreign contribution ban.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Challenge Citizens United through novel theories. Push state-level transparency litigation. Enforce FARA.',
      urgency: 'high',
      relevantMechanisms: ['Federal Bribery Statute', 'DISCLOSE Act', 'Foreign Agents Registration Act (FARA)'],
      steps: [
        {
          step: 1,
          title: 'State Transparency Litigation',
          description: 'Litigate to uphold and expand state-level campaign finance transparency laws that survive Citizens United scrutiny. Citizens United banned spending limits but explicitly preserved disclosure requirements -- use this to defend state transparency laws.',
          legalBasis: ['Citizens United v. FEC (disclosure upheld)', 'State disclosure authority', 'Anti-corruption interest'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Bribery Theory Development',
          description: 'Develop prosecution theories that survive the McDonnell "official act" narrowing. The Menendez conviction succeeded because the conduct was flagrant (gold bars). Develop frameworks for prosecuting subtler but equally corrupt quid pro quo arrangements.',
          legalBasis: ['18 U.S.C. Section 201', 'McDonnell v. United States, 579 U.S. 550 (2016)', 'Honest Services Fraud (18 U.S.C. Section 1346)'],
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'FARA Enforcement Actions',
          description: 'File civil actions and criminal referrals for unregistered foreign agent activity. Current FARA enforcement is inconsistent -- push DOJ to apply the law uniformly regardless of the political connections of the unregistered agent.',
          legalBasis: ['22 U.S.C. Section 611 et seq.', '18 U.S.C. Section 951 (foreign government agent)'],
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass DISCLOSE Act. Reform FEC. Support constitutional amendment. Close foreign money loopholes.',
      urgency: 'immediate',
      relevantMechanisms: ['DISCLOSE Act', 'Foreign Agents Registration Act (FARA)'],
      steps: [
        {
          step: 1,
          title: 'DISCLOSE Act Passage',
          description: 'Pass the DISCLOSE Act requiring donor transparency for all election-related spending above $10,000. If the filibuster blocks passage, use reconciliation, carve-out, or other procedural options. This is fundamental to democratic legitimacy.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'FEC Structural Reform',
          description: 'Reform the FEC: odd number of commissioners (5 or 7), independent enforcement arm with mandatory investigation triggers, and removal of the structural deadlock that ensures non-enforcement.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Constitutional Amendment Resolution',
          description: 'Introduce and support a constitutional amendment overturning Citizens United. Twenty states have already called for one. Build momentum toward the two-thirds congressional majority needed.',
          estimatedTime: 'Multi-year effort',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Enforce bribery and FARA laws aggressively. The Menendez conviction shows it can be done.',
      urgency: 'high',
      relevantMechanisms: ['Federal Bribery Statute', 'Foreign Agents Registration Act (FARA)'],
      steps: [
        {
          step: 1,
          title: 'Proactive Corruption Investigation',
          description: 'Investigate potential bribery and FARA violations proactively, not just reactively on referrals. The Menendez investigation succeeded because it was initiated proactively. Apply the same approach to other suspicious relationships between officials and foreign governments.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'FARA Enforcement Uniformity',
          description: 'Apply FARA uniformly. Despite thousands of lobbyists registered under the Lobbying Disclosure Act, FARA registrations remain far fewer than the actual number of foreign agents operating in Washington. Close the enforcement gap.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Financial Intelligence on Political Corruption',
          description: 'Coordinate with FinCEN on suspicious financial patterns involving elected officials. Gold bars and cash (Menendez) are obvious -- but electronic transfers, cryptocurrency, and shell companies are the modern corruption tools. Follow the digital money.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Fix the FEC. The 3-3 partisan deadlock is by design -- it ensures non-enforcement.',
      urgency: 'high',
      relevantMechanisms: ['DISCLOSE Act'],
      steps: [
        {
          step: 1,
          title: 'FEC Enforcement Revival',
          description: 'If structural reform is not achievable legislatively, maximize enforcement within the current framework. Pursue cases where bipartisan agreement is possible. Document deadlocked cases to build the public record of non-enforcement.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Dark Money Organization Auditing',
          description: 'IRS should audit 501(c)(4) organizations whose primary activity is election-related spending. Organizations that exist primarily to funnel anonymous money into elections are not operating for "social welfare" as the tax code requires.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Foreign Money Detection Systems',
          description: 'Implement enhanced due diligence requirements for organizations making election-related expenditures. Require verification that no foreign funds are commingled with election spending. The foreign contribution ban is meaningless without detection mechanisms.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
