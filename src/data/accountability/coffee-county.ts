import type { AccountabilityData } from '@/types/accountability';

export const coffeeCountyAccountability: AccountabilityData = {
  investigationSlug: 'coffee-county',
  crimeSummary: 'On January 7, 2021  -  the day after the Capitol insurrection  -  operatives connected to Sidney Powell\'s legal team gained unauthorized access to election equipment in Coffee County, Georgia, and copied sensitive election data including software, voter databases, and system configurations. The breach was part of a broader conspiracy to find evidence supporting Trump\'s false election fraud claims. Local officials, including Coffee County GOP Chair Cathy Latham (who was simultaneously a fake elector for Trump), facilitated the breach by letting operatives from forensic firm SullivanStrickler into the election office. The operatives imaged the Dominion Voting Systems servers. The stolen data was subsequently shared with conspiracy theorists and used in frivolous lawsuits. This was one of several election equipment breaches across multiple states orchestrated by Trump allies, including in Mesa County, Colorado (Clerk Tina Peters convicted in 2024).',
  totalHarm: 'Compromise of election security infrastructure. Sensitive voting system data  -  useful for identifying vulnerabilities  -  exposed to unauthorized parties and potentially to hostile foreign actors. Public trust in election systems further eroded. Coffee County had to replace compromised election equipment at taxpayer expense. The breach was designed to fabricate evidence of fraud to overturn a democratic election.',
  victimsAffected: 'Coffee County voters whose election data was compromised. Georgia voters whose election infrastructure security was breached. American democracy  -  the breach was part of the broader conspiracy to overturn the 2020 election results. Election workers targeted by harassment campaigns fueled by the stolen data.',
  primaryTargets: [
    {
      name: 'Sidney Powell',
      role: 'Attorney connected to the Coffee County breach. Powell\'s team arranged for SullivanStrickler forensic operatives to access election systems. Powell was a key figure in the election denial legal effort, filing meritless lawsuits and promoting conspiracy theories about Dominion voting machines.',
      currentStatus: 'Indicted in Georgia RICO case (Fulton County). Pleaded guilty (October 2023) to six misdemeanor counts of conspiracy to commit intentional interference with performance of election duties. Sentenced to 6 years probation, $6,000 fine, and must testify truthfully in other cases. Cooperating witness.',
      accountabilityPath: 'Plea deal achieved cooperation. Whether her testimony leads to accountability for higher-level conspirators remains to be seen.',
      obstacles: ['Plea deal for misdemeanors only', 'Political polarization of prosecution'],
    },
    {
      name: 'Cathy Latham',
      role: 'Coffee County GOP Chair and simultaneously a fake elector for Trump in Georgia. Latham facilitated access to election equipment for the operatives, letting them into the election office. Surveillance video confirmed her presence.',
      currentStatus: 'Indicted in Georgia RICO case (Fulton County). Charged with conspiracy to commit election fraud. Case pending. Also served as a fake elector.',
      accountabilityPath: 'Criminal case pending. Surveillance video and digital evidence are strong.',
      obstacles: ['Case delayed by legal challenges to overall RICO prosecution'],
    },
    {
      name: 'Tina Peters (Mesa County, CO  -  parallel breach)',
      role: 'Mesa County, Colorado Clerk who facilitated a similar elections equipment breach in her jurisdiction. Allowed unauthorized access to election systems and tried to cover it up.',
      currentStatus: 'Convicted on 7 of 10 counts (August 2024) including attempting to influence a public servant, conspiracy, official misconduct, and identity theft. Sentenced to 9 years in prison.',
      accountabilityPath: 'Fully convicted. Demonstrates that election equipment breaches CAN be prosecuted.',
      obstacles: [],
    },
  ],
  legalMechanisms: [
    { name: 'Georgia RICO', statute: 'O.C.G.A. § 16-14-4 (Georgia Racketeer Influenced and Corrupt Organizations Act)', description: 'The Coffee County breach is part of the broader Fulton County RICO case against Trump and allies for conspiracy to overturn Georgia\'s 2020 election results. Georgia RICO is broader than federal RICO.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['Fulton County DA'], applicability: 'directly_applicable' },
    { name: 'Computer Fraud and Abuse Act', statute: '18 U.S.C. § 1030', description: 'Unauthorized access to election computer systems. The operatives accessed systems without authorization to copy data.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ', 'State prosecutors'], applicability: 'directly_applicable' },
    { name: 'Election Infrastructure Security', statute: 'HAVA (Help America Vote Act); CISA election security directives', description: 'Election systems are designated critical infrastructure (DHS, 2017). Unauthorized breach of election infrastructure is a national security concern.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['CISA', 'DHS', 'DOJ'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'Election Denial Fundraising', relationship: 'Money raised on false fraud claims', transferMethod: 'Trump raised $250+ million through the "Election Defense Fund" after the 2020 election  -  a fund that did not exist. Money went to Trump PACs, not legal challenges. Sidney Powell\'s Defending the Republic raised millions. The entire election denial ecosystem was a massive fundraising operation.', estimatedValue: '$250+ million raised by Trump post-election; millions more by allied organizations', legalEntities: ['Save America PAC', 'Defending the Republic', 'Trump campaign entities'], recoveryMechanisms: ['Wire fraud prosecution', 'FEC enforcement', 'Donor lawsuits'] },
  ],
  authoritiesWithPower: [
    { name: 'Fulton County DA', title: 'Fulton County District Attorney', jurisdiction: 'Georgia criminal prosecution', powers: ['RICO prosecution', 'Election fraud prosecution', 'Grand jury investigation'] },
    { name: 'CISA', title: 'Cybersecurity and Infrastructure Security Agency', jurisdiction: 'Election infrastructure security', powers: ['Assess vulnerabilities', 'Mandate security standards', 'Coordinate incident response'] },
  ],
  successCriteria: [
    'Criminal conviction of all individuals who facilitated unauthorized access to election equipment -- including local officials, operatives, and those who directed the breach from outside Coffee County',
    'Full prosecution of the broader conspiracy connecting Coffee County, Mesa County, and other election equipment breaches -- the individual cases must be prosecuted as the coordinated conspiracy they were',
    'Complete forensic accounting of all $250+ million raised through the "Election Defense Fund" and allied fundraising -- determining what percentage went to actual legal challenges versus personal enrichment',
    'Federal election security standards enacted requiring: tamper-evident physical security, mandatory access logging, chain-of-custody documentation, and criminal penalties for unauthorized access to election systems',
    'Election worker protection legislation in all 50 states -- criminalizing threats and harassment of election workers and providing federal resources for security',
    'Mandatory replacement of all compromised election equipment at the expense of those who caused the breach -- not at taxpayer expense',
    'Complete public documentation of the full network of election equipment breaches: who ordered them, who funded them, who executed them, and where the stolen data went',
    'Sidney Powell\'s cooperation agreement must produce meaningful testimony leading to accountability for those who directed the conspiracy -- a misdemeanor plea deal without consequential testimony is not accountability',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Operatives broke into election systems to fabricate evidence. They\'re claiming to protect election integrity while literally compromising it.',
      urgency: 'high',
      relevantMechanisms: ['Election Infrastructure Security', 'Georgia RICO'],
      steps: [
        {
          step: 1,
          title: 'Support Election Workers',
          description: 'Election workers are being threatened and harassed by people who believe the false fraud claims that motivated the Coffee County breach. Support legislation protecting them and volunteer as a poll worker to strengthen the system.',
          estimatedTime: '30 minutes to write; ongoing to volunteer',
          filingTarget: 'Your state legislators; Secretary of State office',
          templateText: 'Dear [State Legislator],\n\nElection workers in Coffee County, Georgia had their workplace breached by operatives seeking to fabricate evidence of fraud. Election workers across the country face threats and harassment. I urge you to:\n\n1. Pass election worker protection legislation criminalizing threats\n2. Fund security upgrades for election offices\n3. Mandate access logging and chain-of-custody for all election equipment\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Demand Election Security Standards',
          description: 'Push for mandatory federal election security standards including physical security requirements, access logging, tamper-evident seals, and criminal penalties for unauthorized access.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your House and Senate representatives; House Administration Committee',
        },
        {
          step: 3,
          title: 'Follow the Fulton County Case',
          description: 'The Fulton County RICO prosecution is the most comprehensive legal effort to hold the election conspiracy accountable. Follow the case, attend public proceedings if possible, and demand that it proceed without political interference.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document every election equipment breach. Map the network of operatives and funders. Follow the money.',
      urgency: 'immediate',
      relevantMechanisms: ['Georgia RICO', 'Computer Fraud and Abuse Act'],
      steps: [
        {
          step: 1,
          title: 'Map the Full Breach Network',
          description: 'Investigate connections between Coffee County, Mesa County, and other election equipment breaches. Map the operatives (SullivanStrickler, Doug Logan/Cyber Ninjas), funders, and coordinators. Determine how many additional breaches occurred that remain undisclosed.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Track the Stolen Data',
          description: 'Investigate where the copied election data went after it was extracted from Coffee County. Who received it? Was it shared with foreign actors? Was it used in litigation? Was it posted publicly? The chain of custody of stolen election data is a national security concern.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Follow the Election Defense Fund Money',
          description: 'Conduct a forensic analysis of the $250+ million raised through post-election fundraising. What percentage went to actual legal challenges? What went to personal enrichment? The January 6 Committee found the "Election Defense Fund" did not exist -- the money went to Trump PACs.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Prosecute election breaches. Protect election workers. Challenge fundraising fraud.',
      urgency: 'immediate',
      relevantMechanisms: ['Computer Fraud and Abuse Act', 'Georgia RICO', 'Election Infrastructure Security'],
      steps: [
        {
          step: 1,
          title: 'Election Worker Legal Defense',
          description: 'Provide pro bono legal support for election workers facing threats, harassment, and frivolous lawsuits. Develop legal frameworks for protective orders and civil remedies against organized harassment campaigns.',
          legalBasis: ['18 U.S.C. Section 594 (intimidation of voters)', 'State election interference statutes', 'State anti-stalking/harassment laws'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Donor Fraud Litigation',
          description: 'Represent donors who contributed to the "Election Defense Fund" believing their money would fund legitimate legal challenges. The fund did not exist -- the money went to PACs. This is potentially actionable as wire fraud or fraudulent solicitation.',
          legalBasis: ['18 U.S.C. Section 1343 (wire fraud)', 'State consumer protection', 'FEC regulations'],
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'Equipment Breach Civil Suits',
          description: 'Represent Coffee County and other affected jurisdictions in civil suits against the operatives and organizers who breached election equipment. Seek recovery of equipment replacement costs and compensatory damages.',
          legalBasis: ['Computer Fraud and Abuse Act Section 1030(g) civil action', 'State computer trespass', 'Trespass to chattels'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass federal election security standards. Protect election workers. Fund election infrastructure.',
      urgency: 'immediate',
      relevantMechanisms: ['Election Infrastructure Security'],
      steps: [
        {
          step: 1,
          title: 'Federal Election Security Standards',
          description: 'Pass mandatory federal standards for election equipment security including: access logging with real-time alerts, tamper-evident physical security, chain-of-custody documentation with video verification, criminal penalties for unauthorized access, and mandatory equipment replacement protocols after breaches.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Election Worker Protection Act',
          description: 'Pass federal legislation making threats against election workers a federal crime, providing federal resources for election worker security, and creating anonymous reporting mechanisms for election worker harassment.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Election Infrastructure Funding',
          description: 'Appropriate federal funding for election infrastructure upgrades, equipment replacement, and security improvements. Jurisdictions should not bear the cost of replacing equipment compromised by criminal actors.',
          estimatedTime: 'Appropriations cycle',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Election infrastructure is critical infrastructure. Treat breaches with the same urgency as attacks on other critical systems.',
      urgency: 'immediate',
      relevantMechanisms: ['Computer Fraud and Abuse Act', 'Election Infrastructure Security'],
      steps: [
        {
          step: 1,
          title: 'Critical Infrastructure Response Protocol',
          description: 'Investigate election equipment breaches as critical infrastructure attacks. Coordinate with CISA for rapid vulnerability assessment. Determine whether stolen data has been shared with hostile foreign intelligence services.',
          estimatedTime: 'Immediate upon discovery',
        },
        {
          step: 2,
          title: 'Prosecute the Full Conspiracy',
          description: 'Prosecute election equipment breaches as the coordinated conspiracy they are -- not as isolated local incidents. The Coffee County, Mesa County, and other breaches were directed by the same network of operatives and funders.',
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'Fake Elector Investigation',
          description: 'Investigate the overlap between election equipment breach facilitators and the fake elector scheme. Cathy Latham was both the Coffee County breach facilitator and a fake elector -- this overlap is likely not unique to Coffee County.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Mandate physical security, access logs, and tamper-evident controls for all election equipment.',
      urgency: 'immediate',
      relevantMechanisms: ['Election Infrastructure Security'],
      steps: [
        {
          step: 1,
          title: 'Binding Security Directives',
          description: 'CISA should issue binding directives for election equipment security: mandatory access logging with real-time monitoring, tamper-evident seals with photographic documentation, dual-person access requirements, and immediate notification protocols for unauthorized access.',
          estimatedTime: '3-6 months',
        },
        {
          step: 2,
          title: 'Post-Breach Audit Requirements',
          description: 'Mandate comprehensive post-breach audits when election equipment is compromised. The audit must determine: what data was accessed, where it was transmitted, whether it was modified, and whether the voting system integrity was affected.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Vendor Security Standards',
          description: 'Require election equipment vendors (Dominion, ES&S, Hart InterCivic) to meet minimum cybersecurity standards, provide rapid incident response, and maintain secure update mechanisms. The Coffee County breach exposed vulnerabilities in Dominion systems that must be addressed system-wide.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
