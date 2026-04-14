import type { AccountabilityData } from '@/types/accountability';

export const armsTraffickingAccountability: AccountabilityData = {
  investigationSlug: 'arms-trafficking',
  crimeSummary: 'Operation Fast and Furious (2009-2011): The Bureau of Alcohol, Tobacco, Firearms and Explosives (ATF) knowingly allowed approximately 2,000 firearms to be illegally purchased and "walked" across the Mexican border to cartel operatives, ostensibly to track them to cartel leadership. The operation catastrophically failed  -  ATF lost track of the weapons, which were used in numerous violent crimes in Mexico and the United States, including the December 2010 murder of U.S. Border Patrol Agent Brian Terry with Fast and Furious weapons. The broader investigation covers systematic arms trafficking from U.S. manufacturers to conflict zones, including Saudi arms sales used in Yemen civilian bombing campaigns.',
  totalHarm: 'Border Patrol Agent Brian Terry murdered with Fast and Furious weapons (Dec 2010). ICE Agent Jaime Zapata murdered with a weapon from related "Operation Wide Receiver." Approximately 2,000 weapons walked into Mexico  -  recovered at 170+ crime scenes in Mexico. Untold civilian deaths in Mexico from walked weapons. In the broader arms trafficking context: U.S. weapons sales to Saudi Arabia directly enabled bombing campaigns in Yemen killing thousands of civilians.',
  victimsAffected: 'Brian Terry\'s family. Jaime Zapata\'s family. Hundreds of Mexican civilians killed with American-supplied weapons. Yemeni civilians  -  over 150,000 killed in the conflict fueled by U.S.-supplied weapons. American taxpayers who funded the operations.',
  primaryTargets: [
    {
      name: 'ATF Phoenix Field Division / Operation Fast and Furious',
      role: 'ATF agents and supervisors approved "gunwalking" tactics  -  allowing straw purchases to proceed without interdicting the weapons. Key figures: ATF Phoenix SAC William Newell, Group VII Supervisor David Voth. ATF Acting Director Kenneth Melson.',
      currentStatus: 'No criminal charges. Newell transferred. Melson reassigned to DOJ. Several ATF agents who objected were retaliated against. ATF whistleblowers (John Dodson) were vindicated but the architects faced zero legal consequences.',
      accountabilityPath: 'Inspector General investigation completed. Congressional investigation produced report. No prosecutions. Statute of limitations expired for most potential charges.',
      obstacles: ['Executive privilege asserted over documents', 'Statute of limitations expired', 'Institutional protection of decision-makers'],
    },
    {
      name: 'Eric Holder / DOJ',
      role: 'Attorney General Eric Holder held in contempt of Congress (June 2012) for refusing to turn over documents related to Fast and Furious, the first sitting AG held in contempt. The Obama administration asserted executive privilege over the documents.',
      currentStatus: 'Contempt held. No prosecution  -  DC U.S. Attorney (Obama appointee) declined to prosecute. Documents eventually released years later showing DOJ leadership was informed but did not stop the operation.',
      accountabilityPath: 'Congressional contempt was symbolic. The executive privilege assertion prevented full accountability. Documents released after the political moment passed.',
      obstacles: ['Executive privilege', 'Political protection', 'No enforcement mechanism for contempt'],
    },
  ],
  legalMechanisms: [
    { name: 'Congressional Contempt', statute: '2 U.S.C. § 192', description: 'Holder held in contempt for refusing to produce documents. Demonstrates the limit of congressional oversight when the executive branch declines to enforce.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress', 'DOJ'], applicability: 'directly_applicable' },
    { name: 'Arms Export Control Act', statute: '22 U.S.C. § 2778', description: 'Controls the export of defense articles and services. Applicable to broader arms trafficking patterns including Saudi weapons sales.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['State Department', 'DOJ'], applicability: 'potentially_applicable' },
    { name: 'Whistleblower Protection', statute: 'Whistleblower Protection Act, 5 U.S.C. § 2302', description: 'ATF agents who raised concerns were retaliated against. Whistleblower protections were inadequate to protect them in real time.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['OSC', 'MSPB'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'U.S. Arms Industry', relationship: 'Profit from weapons sales', transferMethod: 'U.S. is the world\'s largest arms exporter  -  $238 billion in foreign military sales (FY2023). Companies like Lockheed Martin, Raytheon, Boeing profit from weapons that end up in conflict zones and civilian casualties.', estimatedValue: '$238 billion in foreign military sales (FY2023)', legalEntities: ['Lockheed Martin', 'Raytheon', 'Boeing', 'General Dynamics'], recoveryMechanisms: ['Arms Export Control Act enforcement', 'End-use monitoring', 'Congressional oversight'] },
  ],
  authoritiesWithPower: [
    { name: 'Congress', title: 'Congressional Oversight Committees', jurisdiction: 'Federal oversight', powers: ['Subpoena documents', 'Hold hearings', 'Pass arms export reform', 'Enforce contempt'] },
    { name: 'DOJ Inspector General', title: 'DOJ OIG', jurisdiction: 'DOJ/ATF oversight', powers: ['Investigate misconduct', 'Refer for prosecution', 'Issue public reports'] },
  ],
  successCriteria: [
    'Criminal prosecution of the ATF and DOJ officials who authorized and supervised Operation Fast and Furious, allowing 2,000 weapons to walk into cartel hands while knowing they would be used in violence is not a policy disagreement, it is reckless endangerment',
    'Full disclosure of all documents withheld under executive privilege, the American public and Brian Terry\'s family deserve a complete accounting of who knew what and when',
    'Mandatory operational safeguards at ATF preventing any future gunwalking operations, every controlled delivery or tracked weapon sale must include real-time interdiction capability',
    'Comprehensive whistleblower protection reform ensuring that agents like John Dodson who expose dangerous operations are protected, not retaliated against',
    'Arms Export Control Act enforcement strengthened with mandatory congressional notification when U.S.-manufactured weapons are used in documented civilian casualties in end-use countries',
    'End-use monitoring with teeth: automatic sanctions suspension when U.S. weapons are documented in use against civilian populations (Saudi/Yemen, Israel/Gaza)',
    'Complete public accounting of every Fast and Furious weapon: where each of the 2,000 walked guns ended up, how many were recovered at crime scenes, and how many remain unaccounted for',
    'Binding legislation requiring congressional approval for large arms sales to countries with documented human rights violations, the current notification-only process provides no meaningful check on weapons transfers to authoritarian regimes',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'A federal agency put 2,000 weapons into the hands of Mexican cartels. A Border Patrol agent was murdered with one of those weapons. No one was held accountable.',
      urgency: 'high',
      relevantMechanisms: ['Arms Export Control Act', 'Whistleblower Protection'],
      steps: [
        {
          step: 1,
          title: 'Support Whistleblower Protections',
          description: 'ATF whistleblowers like John Dodson were retaliated against for exposing gunwalking. Advocate for stronger federal whistleblower protections with anti-retaliation enforcement.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your House and Senate representatives; Senate Judiciary Committee',
        },
        {
          step: 2,
          title: 'Demand Arms Sale Accountability',
          description: 'Contact representatives to demand binding congressional approval for arms sales to countries with documented human rights violations. U.S. weapons in Yemen have killed thousands of civilians.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your representatives; Senate Foreign Relations Committee; House Foreign Affairs Committee',
        },
        {
          step: 3,
          title: 'Support Brian Terry Foundation',
          description: 'Support the Brian Terry Foundation, established by the family of the Border Patrol agent murdered with Fast and Furious weapons. The foundation advocates for law enforcement accountability and supports families of fallen agents.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'This story was broken by journalists (Sharyl Attkisson) and ATF whistleblowers. Continue investigating the broader arms pipeline.',
      urgency: 'high',
      relevantMechanisms: ['Arms Export Control Act', 'Congressional Contempt'],
      steps: [
        {
          step: 1,
          title: 'Track U.S. Weapons to End-Use',
          description: 'Track U.S.-manufactured weapons from sale to final use. Document civilian casualties from American arms in Yemen, Libya, and other conflict zones. The arms industry is the least transparent sector of American commerce.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Unaccounted Weapons Investigation',
          description: 'Determine how many of the approximately 2,000 Fast and Furious weapons remain unaccounted for. FOIA requests to ATF and DOJ for weapon recovery data. Track weapons recovered at crime scenes years after the operation ended.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Arms Export Decision-Making',
          description: 'Investigate the decision-making process for major arms sales: who approves, what human rights considerations are evaluated, and how end-use monitoring is conducted (or not). Document the gap between stated policy and actual oversight.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Represent whistleblowers. Challenge executive privilege assertions that block accountability. Litigate on behalf of civilian casualties.',
      urgency: 'high',
      relevantMechanisms: ['Whistleblower Protection', 'Congressional Contempt', 'Arms Export Control Act'],
      steps: [
        {
          step: 1,
          title: 'Whistleblower Representation',
          description: 'Provide legal support for government whistleblowers exposing weapons program misconduct. ATF agents who exposed Fast and Furious faced career retaliation, ensure future whistleblowers have immediate legal protection.',
          legalBasis: ['Whistleblower Protection Act (5 U.S.C. Section 2302)', 'Inspector General Act'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Civilian Casualty Litigation',
          description: 'Develop legal theories for holding arms manufacturers and the U.S. government liable when U.S. weapons are used in documented war crimes. The Alien Tort Statute and international humanitarian law provide potential frameworks.',
          legalBasis: ['Alien Tort Statute (28 U.S.C. Section 1350)', 'Arms Export Control Act Section 2778', 'International humanitarian law'],
          estimatedTime: '24-48 months',
        },
        {
          step: 3,
          title: 'Executive Privilege Challenges',
          description: 'Challenge executive privilege assertions that block congressional and public access to documents on weapons program failures. The Holder contempt demonstrates that executive privilege can be weaponized to prevent accountability.',
          legalBasis: ['Congressional subpoena power', 'United States v. Nixon (limited executive privilege)', 'FOIA'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Enforce congressional subpoenas. Reform arms export controls. Protect whistleblowers. Require binding congressional approval for sensitive arms sales.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Contempt', 'Arms Export Control Act'],
      steps: [
        {
          step: 1,
          title: 'Arms Export Reform',
          description: 'Strengthen arms export controls: require binding congressional approval (not just notification) for sales to countries with documented human rights violations. Implement mandatory civilian casualty monitoring with automatic suspension triggers.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Enforce Contempt Authority',
          description: 'Reform congressional contempt enforcement. The Holder contempt demonstrated that statutory contempt is unenforceable when DOJ declines to prosecute. Establish independent enforcement mechanisms.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Whistleblower Protection Enhancement',
          description: 'Strengthen whistleblower protections for federal employees exposing operational misconduct. ATF agents who raised red flags about Fast and Furious were punished, not rewarded.',
          estimatedTime: '6-12 months legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Never again allow weapons to "walk." Implement safeguards against repeating gunwalking tactics.',
      urgency: 'high',
      relevantMechanisms: ['Arms Export Control Act', 'Whistleblower Protection'],
      steps: [
        {
          step: 1,
          title: 'Operational Safeguards',
          description: 'Implement mandatory oversight and real-time interdiction requirements for any operation involving tracked weapons or controlled deliveries. No operation should proceed without the capability to interdict weapons at any point.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Internal Whistleblower Channels',
          description: 'Create secure, protected internal channels for agents to raise concerns about operational decisions without fear of retaliation. The Fast and Furious whistleblowers were right, the system should have made it easier, not harder, to stop the operation.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Cross-Border Coordination',
          description: 'Strengthen coordination with Mexican law enforcement on cross-border weapons trafficking. The Fast and Furious weapons ended up at 170+ crime scenes in Mexico, Mexican authorities must be partners in any future interdiction operations.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Strengthen end-use monitoring for exported weapons. Enforce existing arms export controls.',
      urgency: 'high',
      relevantMechanisms: ['Arms Export Control Act'],
      steps: [
        {
          step: 1,
          title: 'End-Use Monitoring Enhancement',
          description: 'Implement comprehensive end-use monitoring for all major U.S. weapons exports. Require in-country verification, civilian casualty tracking, and automatic sanctions suspension when weapons are documented in use against civilian populations.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'FFL Oversight Strengthening',
          description: 'Strengthen Federal Firearms Licensee (FFL) oversight to prevent straw purchases and illegal cross-border trafficking. ATF\'s inability to track multiple long gun sales in border states contributed to the trafficking pipeline that Fast and Furious attempted to address.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Arms Sale Transparency',
          description: 'Require public reporting of all major arms sales including: buyer country, weapon type, dollar value, human rights assessment, and end-use monitoring results. Transparency is the minimum requirement for democratic oversight of weapons transfers.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
