import type { AccountabilityData } from '@/types/accountability';

export const bankingCorruptionAccountability: AccountabilityData = {
  investigationSlug: 'banking-corruption',
  crimeSummary: 'Systematic corruption across the global banking sector spanning decades: money laundering for drug cartels (HSBC  -  $881 million fine, zero prosecutions; Wachovia  -  $160 million, zero prosecutions), sanctions violations (BNP Paribas  -  $8.9 billion fine for transacting with Sudan, Iran, Cuba), market manipulation (Deutsche Bank  -  LIBOR, forex, mirror trades for Russian money laundering), and predatory lending targeting minority communities. Banks deemed "too big to jail" by DOJ policy received deferred prosecution agreements (DPAs) instead of criminal charges. AG Eric Holder admitted in 2013 that some banks are so large that prosecution "does have a negative impact on the national economy." This admission codified impunity for the largest financial institutions.',
  totalHarm: 'Trillions in fraudulent transactions. HSBC laundered $881 million for Sinaloa and Norte del Valle cartels  -  weapons purchased with laundered money killed thousands. Wachovia processed $378.4 billion in transactions linked to Mexican drug cartels. Predatory lending destroyed millions of minority homeowners\' wealth. Global financial system integrity undermined. Public trust in banking permanently damaged.',
  victimsAffected: 'Drug cartel violence victims (tens of thousands killed). Minority communities targeted by predatory lending. Global financial system participants. Taxpayers who backstop too-big-to-fail institutions.',
  primaryTargets: [
    {
      name: 'HSBC',
      role: 'Laundered at least $881 million for Mexican and Colombian drug cartels. Failed to monitor $200+ trillion in wire transfers. Mexican branches had specially designed windows to accommodate drug cash boxes. Stripped identifying information from Iranian transactions to evade sanctions.',
      currentStatus: 'Entered deferred prosecution agreement (2012)  -  $1.92 billion fine (approximately 5 weeks of revenue). Zero individuals prosecuted. Zero executives jailed. DPA expired in 2017.',
      accountabilityPath: 'DPA expired. Statute of limitations passed. The accountability window is closed for past conduct. Future violations require new investigation.',
      obstacles: ['Too big to jail doctrine', 'DPA shielded from prosecution', 'Statute of limitations expired'],
    },
    {
      name: 'Deutsche Bank',
      role: 'Involved in LIBOR manipulation, forex manipulation, mirror trading scheme that moved $10+ billion out of Russia (likely money laundering), and Epstein banking relationship maintained despite internal compliance concerns.',
      currentStatus: '$2.5 billion LIBOR fine. $7.2 billion RMBS settlement. $425 million mirror trading fine. Continues operating. CEO Christian Sewing replaced leadership but bank\'s fundamental compliance culture remains questioned.',
      accountabilityPath: 'Ongoing regulatory scrutiny. Pattern of repeated violations suggests need for structural reform or license revocation proceedings.',
      obstacles: ['Systemic importance designation', 'International regulatory arbitrage', 'Revolving door between regulators and banks'],
    },
  ],
  legalMechanisms: [
    { name: 'Bank Secrecy Act / Anti-Money Laundering', statute: '31 U.S.C. § 5311 et seq.', description: 'Requires banks to maintain AML programs, report suspicious activity, and file currency transaction reports. HSBC systematically violated all requirements.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['FinCEN', 'DOJ', 'OCC'], applicability: 'directly_applicable' },
    { name: 'Corporate Criminal Prosecution vs. DPAs', statute: 'DOJ policy (Thompson/Filip/Yates memos)', description: 'DOJ can prosecute banks criminally but consistently chooses deferred/non-prosecution agreements. The Yates Memo (2015) theoretically prioritized individual prosecution  -  with minimal results.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'International Emergency Economic Powers Act (IEEPA)', statute: '50 U.S.C. § 1701', description: 'Sanctions violations. BNP Paribas paid $8.9 billion  -  the largest sanctions fine in history  -  for transactions with sanctioned nations.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['OFAC', 'DOJ'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'Banking Sector Fines vs. Revenue', relationship: 'Cost of doing business', transferMethod: 'HSBC $1.92B fine on $65B annual revenue (3%). BNP Paribas $8.9B fine on $44B annual revenue (20%). Deutsche Bank total fines ~$18B. All banks returned to profitability. Fines are treated as operating expenses  -  budgeted, tax-deductible, and passed to shareholders/customers.', estimatedValue: '$30+ billion in cumulative fines; trillions in underlying misconduct', legalEntities: ['HSBC', 'Deutsche Bank', 'BNP Paribas', 'Wachovia/Wells Fargo'], recoveryMechanisms: ['Criminal prosecution', 'License revocation', 'Structural reform'] },
  ],
  authoritiesWithPower: [
    { name: 'DOJ', title: 'Department of Justice', jurisdiction: 'Federal criminal prosecution', powers: ['Prosecute banks and individuals', 'Reject DPAs in favor of prosecution', 'Enforce Yates Memo on individual accountability'] },
    { name: 'FinCEN', title: 'Financial Crimes Enforcement Network', jurisdiction: 'Anti-money laundering', powers: ['Impose civil penalties', 'Revoke banking licenses', 'Issue cease-and-desist orders'] },
    { name: 'OCC', title: 'Office of the Comptroller of the Currency', jurisdiction: 'National bank regulation', powers: ['Revoke charters', 'Remove executives', 'Impose consent orders'] },
  ],
  successCriteria: [
    'End of the "too big to jail" doctrine -- legislation mandating criminal prosecution (not DPAs) for banks that commit repeated criminal offenses, with automatic charter revocation after a third criminal violation',
    'Individual criminal prosecution of bank executives who authorized or knowingly facilitated money laundering, sanctions evasion, and market manipulation -- fines paid by shareholders are not accountability for executives who made the decisions',
    'HSBC accountability: criminal prosecution of the individuals who designed the specially-sized teller windows for drug cash boxes, who stripped identifying information from Iranian transactions, and who approved the systematic BSA/AML compliance failures',
    'Full disgorgement of criminal profits -- fines must exceed the profits from criminal conduct, not represent 3-5% of annual revenue that can be absorbed as a cost of doing business and written off as a tax deduction',
    'Mandatory restitution to victims of cartel violence funded by laundered money -- HSBC laundered $881 million for the Sinaloa cartel, and the weapons purchased with that money killed thousands of people who have no legal recourse',
    'Elimination of the revolving door between bank regulators and the banks they regulate -- mandatory cooling-off periods and lifetime bans on regulated-entity employment for senior regulators',
    'Complete public accounting of every DPA entered into by a major bank, the violations that triggered the DPA, the compliance failures during the DPA term, and subsequent criminal conduct after the DPA expired',
    'Banking license revocation authority exercised against repeat criminal offenders -- OCC and FinCEN have this authority and have never used it against a systemically important institution',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Banks laundered cartel drug money. The weapons bought with that money killed thousands. No banker went to prison. Your deposits fund these institutions.',
      urgency: 'high',
      relevantMechanisms: ['Bank Secrecy Act / Anti-Money Laundering', 'Corporate Criminal Prosecution vs. DPAs'],
      steps: [
        {
          step: 1,
          title: 'Move Your Money',
          description: 'Transfer accounts from too-big-to-fail banks to credit unions or community banks that are not repeat criminal offenders. The "Move Your Bank" movement has shifted billions in deposits away from criminal institutions.',
          estimatedTime: '1-2 hours',
        },
        {
          step: 2,
          title: 'Demand End to Too Big to Jail',
          description: 'Contact your representatives to demand legislation ending DPAs for repeat corporate criminal offenders. Banks should not receive better treatment than individuals who commit the same crimes.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your House and Senate representatives; Senate Banking Committee; House Financial Services Committee',
          templateText: 'Dear [Representative/Senator],\n\nHSBC laundered $881 million for drug cartels. No banker went to prison. They received a deferred prosecution agreement -- a fine equal to 5 weeks of revenue. Then AG Eric Holder admitted some banks are "too big to jail."\n\nI urge you to:\n1. Pass legislation requiring criminal prosecution after a second DPA\n2. Mandate individual prosecution of executives who authorize criminal conduct\n3. Require fines that exceed criminal profits, not represent rounding errors\n4. End the revolving door between regulators and banks\n\nBanks that launder drug money should not exist.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 3,
          title: 'Support Whistleblower Organizations',
          description: 'Support banking industry whistleblower protection organizations. Bank employees who expose criminal conduct face retaliation -- support the organizations that protect them and amplify their disclosures.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Follow the money. Document the revolving door between regulators and banks. Track DPA compliance failures.',
      urgency: 'high',
      relevantMechanisms: ['Corporate Criminal Prosecution vs. DPAs', 'Bank Secrecy Act / Anti-Money Laundering'],
      steps: [
        {
          step: 1,
          title: 'DPA Compliance Investigation',
          description: 'Investigate whether banks actually comply with DPA terms. Track post-DPA violations. How many banks committed additional crimes during or after their DPA period? The DPA regime\'s effectiveness has never been systematically assessed.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Revolving Door Documentation',
          description: 'Map the revolving door between bank regulators and the banks they regulate. Track career paths of OCC, Fed, FinCEN, and DOJ officials who moved to regulated banks. Identify cases where former regulators at banks were involved in the conduct that triggered DPAs.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Cartel Violence Victim Documentation',
          description: 'Document the human cost of bank-facilitated money laundering. HSBC laundered $881 million for the Sinaloa cartel -- connect the laundered money to specific weapons purchases, specific operations, specific violence. Put faces on the victims that bank fines are supposed to address.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Challenge the DPA regime. Represent victims of cartel violence against banks that laundered cartel money.',
      urgency: 'high',
      relevantMechanisms: ['Bank Secrecy Act / Anti-Money Laundering', 'Corporate Criminal Prosecution vs. DPAs'],
      steps: [
        {
          step: 1,
          title: 'Cartel Violence Victim Litigation',
          description: 'Represent families of cartel violence victims in civil suits against banks that facilitated cartel operations through money laundering. HSBC knowingly processed $881 million in cartel drug money -- weapons purchased with that money killed people. The causal chain is documentable.',
          legalBasis: ['Anti-Terrorism Act (18 U.S.C. Section 2333)', 'Negligence per se (BSA violations)', 'Aiding and abetting tortious conduct'],
          estimatedTime: '24-48 months',
        },
        {
          step: 2,
          title: 'Shareholder Derivative Actions',
          description: 'File derivative suits against bank boards that approved or failed to prevent criminal conduct. Directors who ignored AML compliance failures bear personal fiduciary liability. Target the individuals, not just the institution.',
          legalBasis: ['State corporate law (fiduciary duty)', 'Caremark standard (duty of oversight)', 'Dodd-Frank clawback provisions'],
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'Challenge DPA Secrecy',
          description: 'Challenge the secrecy provisions of DPAs. Many DPA terms are not fully public. File FOIA requests and court motions to access complete DPA agreements, compliance reports, and government assessments of bank compliance.',
          legalBasis: ['FOIA (5 U.S.C. Section 552)', 'Common law right of access to judicial documents', 'First Amendment right of access'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'End the DPA regime for repeat offenders. Mandate individual prosecution. Make "too big to jail" illegal as a matter of policy.',
      urgency: 'high',
      relevantMechanisms: ['Corporate Criminal Prosecution vs. DPAs', 'Bank Secrecy Act / Anti-Money Laundering'],
      steps: [
        {
          step: 1,
          title: 'End Repeat DPAs',
          description: 'Pass legislation requiring criminal prosecution -- not DPAs -- after a second criminal violation by the same institution. No more revolving-door agreements that treat criminal conduct as a regulatory matter.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Individual Accountability Act',
          description: 'Pass legislation requiring DOJ to prosecute individuals responsible for corporate criminal conduct. Codify and strengthen the Yates Memo. Make individual prosecution a prerequisite for any corporate resolution agreement.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Revolving Door Reform',
          description: 'Pass legislation imposing mandatory 5-year cooling-off periods for bank regulators before they can be employed by regulated institutions. Ban senior regulators from lifetime employment at institutions they directly regulated.',
          estimatedTime: '6-12 months legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Prosecute individual bankers. The Yates Memo directed individual accountability -- enforce it.',
      urgency: 'high',
      relevantMechanisms: ['Bank Secrecy Act / Anti-Money Laundering', 'International Emergency Economic Powers Act (IEEPA)'],
      steps: [
        {
          step: 1,
          title: 'Individual Prosecution Priority',
          description: 'Prioritize prosecution of individual bankers who authorized or facilitated money laundering, not just institutional fines. The HSBC compliance officer who knew about cartel money laundering. The Deutsche Bank trader who executed mirror trades. Institutional fines are paid by shareholders -- individual prosecution creates personal deterrence.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'BSA/AML Enforcement Enhancement',
          description: 'Use the full weight of BSA/AML enforcement against banks with pattern violations. FinCEN has the authority to impose civil money penalties, revoke banking licenses, and issue cease-and-desist orders. These authorities have never been fully exercised against systemically important institutions.',
          estimatedTime: '6-12 months per case',
        },
        {
          step: 3,
          title: 'International Coordination',
          description: 'Coordinate with international law enforcement (UK FCA, EU banking regulators, FATF) on cross-border money laundering prosecutions. Deutsche Bank\'s mirror trading moved $10 billion from Russia through multiple jurisdictions -- international cooperation is essential.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Revoke charters of repeat offenders. Use existing authority to remove executives at banks with pattern violations.',
      urgency: 'high',
      relevantMechanisms: ['Bank Secrecy Act / Anti-Money Laundering'],
      steps: [
        {
          step: 1,
          title: 'Charter Revocation for Repeat Offenders',
          description: 'Use existing authority to revoke or restrict banking charters for institutions with repeated criminal violations. OCC has never revoked the charter of a systemically important bank. The authority exists -- the political will to use it does not.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Executive Removal Authority',
          description: 'Exercise existing authority to remove and ban executives at banks with pattern BSA/AML violations. OCC\'s Section 8(e) removal authority can permanently bar individuals from the banking industry. Use it.',
          estimatedTime: '6-12 months per action',
        },
        {
          step: 3,
          title: 'Fine Proportionality Standards',
          description: 'Establish regulatory standards ensuring fines exceed the profits from criminal conduct. HSBC\'s $1.92 billion fine on $881 million in laundered cartel money still left the bank with enormous profits from the broader conduct. Fines must be punitive, not just costof-doing-business adjustments.',
          estimatedTime: '3-6 months rulemaking',
        },
      ],
    },
  ],
};
