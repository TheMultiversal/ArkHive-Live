import type { AccountabilityData } from '@/types/accountability';

export const crowNetworkAccountability: AccountabilityData = {
  investigationSlug: 'crow-network',
  crimeSummary: 'Harlan Crow, a Dallas billionaire real estate developer, provided over $4 million in undisclosed gifts and benefits to Supreme Court Justice Clarence Thomas over two decades, including luxury vacations on Crow\'s private yacht and jet, a $19,000 Bible that belonged to Frederick Douglass, tuition payments for Thomas\'s grandnephew at private boarding schools ($150,000+), and the purchase of Thomas\'s mother\'s home in Savannah ($133,363)  -  after which Thomas\'s mother continued to live there rent-free while Crow never developed the property. Crow also purchased three additional properties from Thomas and his family. Thomas did not disclose any of these gifts on his financial disclosure forms, violating federal disclosure requirements. ProPublica\'s investigation revealed the scope of the relationship. Crow also funded the conservative legal infrastructure: the Federalist Society, the Heritage Foundation, and organizations that brought cases before the Supreme Court  -  cases on which Thomas sat and voted without recusal.',
  totalHarm: 'Supreme Court legitimacy compromised. Judicial independence undermined. Financial disclosure requirements violated for two decades. Thomas ruled on cases involving parties connected to Crow\'s interests and the organizations Crow funds without recusal. Public trust in the Supreme Court at historic lows (25% approval, Gallup 2023). The constitutional principle that judges cannot be bought was violated in plain sight.',
  victimsAffected: 'American public  -  whose Supreme Court has been compromised. Parties in cases where Thomas should have recused but did not. The rule of law and judicial independence. Future generations who inherit a precedent that Justices can be bought without consequence.',
  primaryTargets: [
    {
      name: 'Clarence Thomas',
      role: 'Supreme Court Justice who accepted millions in undisclosed gifts from Harlan Crow over 20+ years. Failed to disclose luxury travel, real estate transactions, tuition payments, and gifts on mandatory financial disclosure forms. Ruled on cases connected to Crow-funded organizations without recusal.',
      currentStatus: 'Still serving on the Supreme Court. Amended some financial disclosures after ProPublica exposure. No formal investigation. No impeachment proceedings. The Supreme Court adopted an ethics code in November 2023  -  but with no enforcement mechanism.',
      accountabilityPath: 'Impeachment (requires House majority + Senate 2/3). Federal judiciary ethics reform with enforcement. New SCOTUS ethics legislation.',
      obstacles: ['Lifetime appointment', 'Impeachment requires 2/3 Senate', 'No enforcement mechanism for ethics code', 'Political polarization'],
    },
    {
      name: 'Harlan Crow',
      role: 'Billionaire real estate developer who spent $4+ million on gifts and benefits to Justice Thomas. Crow\'s spending coincided with Thomas\'s rightward shift on regulatory issues affecting real estate and business interests. Crow also funds the Federalist Society, Heritage Foundation, and conservative legal organizations that bring cases to the Supreme Court.',
      currentStatus: 'No charges. No investigation. Continues to fund conservative legal infrastructure. Claims the gifts were personal friendship, not influence-seeking.',
      accountabilityPath: 'Gift tax investigation (gifts to federal officials may violate tax law). Congressional investigation. Ethics reform.',
      obstacles: ['No applicable bribery statute clearly applies to Supreme Court gifts', 'Claims of personal friendship', 'Political protection'],
    },
  ],
  legalMechanisms: [
    { name: 'Ethics in Government Act (Financial Disclosure)', statute: '5 U.S.C. App. §§ 101-111', description: 'Requires federal officials including Supreme Court Justices to disclose gifts, income, and financial transactions. Thomas violated disclosure requirements for 20+ years. The Act has criminal penalty provisions (§ 104) but DOJ has never prosecuted a Justice.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ', 'Judicial Conference'], applicability: 'directly_applicable' },
    { name: 'Impeachment', statute: 'U.S. Constitution, Article II, § 4; Article III, § 1', description: 'Justices serve "during good Behaviour"  -  impeachment is the constitutional remedy for judicial misconduct. Requires House majority to impeach, 2/3 Senate to convict. Only one Justice has been impeached (Samuel Chase, 1804, acquitted).', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['House of Representatives', 'Senate'], applicability: 'directly_applicable' },
    { name: 'SCOTUS Ethics Legislation', statute: 'Supreme Court Ethics, Recusal, and Transparency Act (proposed)', description: 'Proposed legislation would establish enforceable ethics standards, mandatory recusal rules, and an enforcement mechanism for the Supreme Court. Repeatedly introduced and blocked.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'Crow-Thomas Gift Pipeline', relationship: 'Direct gifts from billionaire to Justice', transferMethod: 'Documented gifts include: luxury travel on private yacht and jet (value: hundreds of thousands per trip), $19,000 Frederick Douglass Bible, $133,363 Savannah property purchase (Thomas\'s mother continues to live rent-free), $150,000+ in tuition payments for Thomas\'s grandnephew, three additional property purchases from Thomas family. Total documented: $4+ million over 20 years.', estimatedValue: '$4+ million in documented gifts; true value likely higher', legalEntities: ['Harlan Crow', 'Crow Holdings', 'Thomas family trusts'], recoveryMechanisms: ['Ethics in Government Act enforcement', 'Tax code enforcement (gift tax)', 'Impeachment'] },
    { name: 'Conservative Legal Infrastructure', relationship: 'Crow funds organizations that bring cases before Thomas', transferMethod: 'Crow funds the Federalist Society (selects judicial nominees), Heritage Foundation (policy advocacy), and other organizations that sponsor litigation before the Supreme Court. Thomas rules on these cases without recusal. The pipeline: Crow funds organizations → organizations bring cases → Thomas rules favorably → rulings benefit Crow\'s business interests.', estimatedValue: 'Millions annually to Federalist Society, Heritage Foundation, and aligned organizations', legalEntities: ['Federalist Society', 'Heritage Foundation', 'Conservative legal organizations'], recoveryMechanisms: ['Mandatory recusal legislation', 'SCOTUS ethics enforcement', 'Dark money disclosure'] },
  ],
  authoritiesWithPower: [
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Legislation and impeachment', powers: ['Impeach Justice', 'Pass SCOTUS ethics legislation', 'Subpoena financial records', 'Mandate recusal standards'] },
    { name: 'DOJ', title: 'Department of Justice', jurisdiction: 'Criminal enforcement', powers: ['Prosecute disclosure violations', 'Investigate potential bribery', 'Tax fraud referral'] },
  ],
  successCriteria: [
    'Enforceable Supreme Court ethics code with an independent enforcement mechanism, not the toothless, self-policed code adopted in November 2023 that has no investigation or sanction authority',
    'Mandatory recusal standards for Supreme Court Justices with judicial review, Justices should not be the sole arbiters of their own conflicts of interest',
    'Criminal investigation of Thomas\'s 20 years of financial disclosure violations under the Ethics in Government Act Section 104, the law provides criminal penalties that have never been applied to a Justice',
    'Full public accounting of every gift, benefit, and financial transaction between Crow and Thomas, including any transactions not yet disclosed by ProPublica',
    'Thomas recusal or removal from all cases involving organizations funded by Harlan Crow or the Crow network, retroactive review of past decisions where recusal was required but not observed',
    'Gift tax investigation by the IRS of Crow\'s unreported gifts to Thomas, gifts to federal officials exceeding the annual exclusion must be reported, and structured gifts to avoid reporting may constitute tax fraud',
    'Complete mapping and public documentation of the influence pipeline: Crow funds organizations that fund litigation that comes before Thomas who rules favorably on cases benefiting Crow\'s interests',
    'Permanent legislative reform ensuring no future Justice can operate a two-decade undisclosed gift pipeline with a party who has interests before the Court',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'A Supreme Court Justice accepted $4+ million from a billionaire and rules on cases connected to that billionaire\'s interests. There is no enforcement mechanism.',
      urgency: 'immediate',
      relevantMechanisms: ['SCOTUS Ethics Legislation', 'Ethics in Government Act (Financial Disclosure)'],
      steps: [
        {
          step: 1,
          title: 'Demand SCOTUS Ethics Legislation',
          description: 'Contact your senators to demand passage of enforceable Supreme Court ethics legislation with mandatory recusal rules and an independent enforcement mechanism. The November 2023 "ethics code" has no enforcement, it is theater.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your Senate representatives; Senate Judiciary Committee',
          templateText: 'Dear Senator [Name],\n\nSupreme Court Justice Clarence Thomas accepted $4+ million in gifts from billionaire Harlan Crow over 20 years, luxury vacations, real estate transactions, tuition payments, a $19,000 Bible, and disclosed none of it. Crow funds organizations that bring cases before the Court on which Thomas sits.\n\nThe Court\'s November 2023 "ethics code" has no enforcement mechanism. I urge you to:\n\n1. Pass the Supreme Court Ethics, Recusal, and Transparency Act\n2. Establish an independent enforcement mechanism\n3. Mandate recusal when a Justice has financial relationships with parties\n4. Investigate Thomas\'s 20 years of disclosure violations\n\nA Justice who can be bought is not a Justice.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Share the ProPublica Investigation',
          description: 'Most Americans don\'t know the full scope of the Crow-Thomas relationship. Share the ProPublica investigation. The documented facts, not opinions, not speculation, but documented facts, are damning enough.',
          estimatedTime: '15 minutes',
        },
        {
          step: 3,
          title: 'Support Court Reform Organizations',
          description: 'Support organizations advocating for court reform: Fix the Court, Demand Justice, and similar organizations pushing for enforceable ethics standards. These organizations track Thomas\'s disclosure violations and push for legislative action.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'ProPublica broke this story. Continue investigating, the full scope of Crow\'s influence network remains unmapped.',
      urgency: 'immediate',
      relevantMechanisms: ['Ethics in Government Act (Financial Disclosure)', 'SCOTUS Ethics Legislation'],
      steps: [
        {
          step: 1,
          title: 'Full Network Mapping',
          description: 'Map the complete Crow influence network: all funded organizations, all cases connected to those organizations that came before Thomas, all Thomas votes in those cases, and all Crow business interests affected by those rulings. This is the core corruption map.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Other Justices Investigation',
          description: 'Investigate whether other Justices have similar undisclosed gift relationships. Thomas was exposed because ProPublica investigated, who else has been receiving unreported gifts? The Supreme Court\'s self-policing has clearly failed.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Tax and Financial Investigation',
          description: 'Investigate the tax treatment of Crow\'s gifts. Were they reported as gifts on tax returns? Were they structured to avoid gift tax thresholds? Did the property transactions between Crow and Thomas family involve fair market value? Investigate the $133,363 Savannah property purchase and Crow\'s failure to develop or rent the property.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Develop legal theories for challenging Thomas\'s participation in cases connected to Crow-funded organizations.',
      urgency: 'high',
      relevantMechanisms: ['Impeachment', 'SCOTUS Ethics Legislation', 'Ethics in Government Act (Financial Disclosure)'],
      steps: [
        {
          step: 1,
          title: 'Recusal Motion Campaign',
          description: 'Identify all cases where Thomas should have recused due to Crow connections. File motions for review in active cases where Crow-funded organizations are parties. Build the record of recusal failures even if the motions are denied, they create the evidentiary basis for legislation.',
          legalBasis: ['28 U.S.C. Section 455 (disqualification of justice)', 'Due Process Clause', 'Canon 3 of the Code of Conduct for United States Judges'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Ethics in Government Act Enforcement',
          description: 'File criminal referrals for Thomas\'s financial disclosure violations. The Ethics in Government Act (5 U.S.C. App. Section 104) provides criminal penalties for knowing and willful falsification of disclosure forms. Twenty years of non-disclosure is not accidental.',
          legalBasis: ['5 U.S.C. App. Section 104', '18 U.S.C. Section 1001 (false statements)'],
          estimatedTime: '3-6 months for referral',
        },
        {
          step: 3,
          title: 'Impeachment Legal Brief',
          description: 'Prepare a comprehensive legal brief supporting impeachment. Article III Section 1 provides that Justices serve "during good Behaviour." Twenty years of undisclosed gifts from a party with interests before the Court, combined with failure to recuse, constitutes a departure from "good Behaviour."',
          legalBasis: ['Article II, Section 4', 'Article III, Section 1', 'Federalist No. 79 (Hamilton on judicial corruption)'],
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass enforceable SCOTUS ethics legislation. Begin impeachment inquiry if legislative avenues are exhausted.',
      urgency: 'immediate',
      relevantMechanisms: ['SCOTUS Ethics Legislation', 'Impeachment'],
      steps: [
        {
          step: 1,
          title: 'Supreme Court Ethics Act',
          description: 'Pass the Supreme Court Ethics, Recusal, and Transparency Act with: enforceable ethics standards matching lower court requirements, mandatory recusal with judicial review, independent investigation authority (not self-policing), and financial disclosure enforcement with teeth.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Oversight Hearings',
          description: 'Convene Senate Judiciary Committee hearings on Supreme Court ethics failures. Subpoena Crow\'s financial records and gift documentation. Create a complete public record of the Crow-Thomas relationship.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Impeachment Inquiry',
          description: 'If ethics legislation is blocked, open a formal House impeachment inquiry into Thomas\'s conduct. The inquiry process itself creates public accountability even if conviction requires an unlikely two-thirds Senate majority.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Thomas violated federal disclosure requirements for 20 years. The Ethics in Government Act has criminal penalties. Enforce them.',
      urgency: 'high',
      relevantMechanisms: ['Ethics in Government Act (Financial Disclosure)'],
      steps: [
        {
          step: 1,
          title: 'Financial Disclosure Criminal Investigation',
          description: 'Open a criminal investigation into Thomas\'s 20 years of financial disclosure violations. The Ethics in Government Act provides criminal penalties under Section 104 for knowing and willful falsification. The pattern of non-disclosure over two decades demonstrates knowing and willful conduct.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Gift Tax Referral',
          description: 'Refer the Crow-Thomas gift pipeline to the IRS for gift tax investigation. Gifts exceeding the annual exclusion ($17,000 in 2023) must be reported. $4+ million in gifts over 20 years raises significant gift tax questions.',
          estimatedTime: '3-6 months for referral',
        },
        {
          step: 3,
          title: 'Property Transaction Investigation',
          description: 'Investigate the real estate transactions between Crow and Thomas family. The $133,363 Savannah property purchase, after which Thomas\'s mother continued to live rent-free while Crow never developed the property, raises questions about whether the transaction was a disguised gift or bribe.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'The Judicial Conference receives disclosures but has no enforcement authority over SCOTUS. Fix this structural gap.',
      urgency: 'high',
      relevantMechanisms: ['Ethics in Government Act (Financial Disclosure)', 'SCOTUS Ethics Legislation'],
      steps: [
        {
          step: 1,
          title: 'Independent Enforcement Authority',
          description: 'Establish an independent enforcement authority for Supreme Court ethics and financial disclosure compliance. The current system, where the Court polices itself and the Judicial Conference has no enforcement power over SCOTUS, has demonstrably failed.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Enhanced Disclosure Requirements',
          description: 'Require real-time disclosure of gifts, travel, and financial transactions for Supreme Court Justices. End the current system where Justices file annual disclosures that can be amended years later without consequence.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Recusal Review Mechanism',
          description: 'Create an independent panel to review recusal decisions by Supreme Court Justices. The current system, where each Justice decides their own recusal with no review, is a structural invitation to corruption.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
