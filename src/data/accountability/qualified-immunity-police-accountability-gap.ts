import type { AccountabilityData } from '@/types/accountability';

export const qualifiedImmunityAccountability: AccountabilityData = {
  investigationSlug: 'qualified-immunity-police-accountability-gap',
  crimeSummary: 'The Supreme Court created qualified immunity through judicial legislation with no basis in the text of Section 1983, the federal civil rights statute enacted in 1871 specifically to allow citizens to sue government officials who violate their constitutional rights. The doctrine was dramatically expanded in Harlow v. Fitzgerald (1982) to require victims to identify a prior case with nearly identical facts. In Pearson v. Callahan (2009), the Court removed the requirement that courts even address whether a constitutional violation occurred before granting immunity, gutting the mechanism by which new precedent is established. Reuters found courts granted immunity in the vast majority of excessive force cases from 2005-2019, and the success rate for officers is increasing.',
  totalHarm: '$5B+ in taxpayer-funded police misconduct settlements (major cities combined); thousands of meritorious civil rights claims dismissed on immunity grounds annually; entire categories of constitutional violations rendered unremedied; access to justice destroyed for police brutality victims; accountability deterrent eliminated',
  victimsAffected: 'Every person in the United States who interacts with law enforcement; families of people killed by police denied compensation and acknowledgment; communities of color disproportionately affected; civil rights attorneys unable to take meritorious cases; municipalities bearing billions in settlement costs while qualified immunity blocks most claims',
  primaryTargets: [
    {
      name: 'Supreme Court of the United States',
      role: 'Created qualified immunity in Pierson v. Ray (1967), expanded in Harlow (1982), gutted precedent mechanism in Pearson (2009), and repeatedly declined to reconsider despite criticism from its own members',
      currentStatus: 'Active. Continues to decline certiorari petitions asking to reconsider doctrine. Has not agreed to hear a qualified immunity case on the merits since 2020 despite growing bipartisan criticism.',
      accountabilityPath: 'Congressional legislation amending Section 1983 to eliminate the judicially-created immunity; Court could voluntarily reconsider through certiorari petition; public pressure through reform movement',
      obstacles: ['Court created the doctrine and has sole power to overturn it absent legislation', 'Institutional reluctance to admit decades of error', 'No enforcement mechanism exists over the Court']
    },
    {
      name: 'Fraternal Order of Police',
      role: 'Largest police labor organization (356,000+ members); spent millions lobbying against reform; filed amicus briefs defending doctrine in every major case',
      currentStatus: 'Active. Continues aggressive lobbying against federal and state reform legislation. PAC contributions target legislators on judiciary committees.',
      accountabilityPath: 'Campaign finance reform limiting political spending; lobbying transparency; counter-advocacy from bipartisan reform coalition',
      obstacles: ['First Amendment protections for lobbying', 'Deep political relationships with both parties', 'Framing reform as anti-police rather than pro-accountability']
    },
    {
      name: 'U.S. Senate',
      role: 'Failed to pass George Floyd Justice in Policing Act despite bipartisan House passage; qualified immunity was the primary sticking point',
      currentStatus: 'No viable federal qualified immunity reform legislation pending. Bipartisan negotiations collapsed in 2021 and have not resumed.',
      accountabilityPath: 'Electoral accountability; public pressure; re-introduction of reform legislation; state-level reform as proof of concept',
      obstacles: ['Police union lobbying influence', 'Political risk of appearing anti-police', 'Filibuster requiring 60-vote supermajority for legislation']
    },
    {
      name: 'Municipal Governments (Indemnification System)',
      role: 'Municipalities indemnify officers in 99.98% of cases, meaning officers never pay despite qualified immunity being justified as protecting their personal finances',
      currentStatus: 'Active. Cities continue to pay billions in settlements from taxpayer funds while the doctrine ostensibly protects officers from the personal liability they never actually bear.',
      accountabilityPath: 'Municipal policy reforms eliminating indemnification for bad-faith conduct; insurance-based accountability through premium structures; transparency in settlement costs',
      obstacles: ['Collective bargaining agreements protect indemnification', 'Political difficulty of appearing to abandon officers', 'Insurance and budget structures designed around current system']
    }
  ],
  legalMechanisms: [
    {
      name: 'Congressional Amendment of Section 1983',
      statute: '42 U.S.C. 1983',
      description: 'Congress has authority to amend Section 1983 to explicitly eliminate the judicially-created qualified immunity defense or replace the "clearly established" standard with a reasonable officer standard',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['U.S. Congress', 'State legislatures (for state-law claims)'],
      applicability: 'directly_applicable' as const,
      notes: 'George Floyd Justice in Policing Act would have done this; died in Senate in 2021'
    },
    {
      name: 'State-Level Qualified Immunity Elimination',
      statute: 'Colorado SB 20-217; New Mexico Civil Rights Act (2021); Connecticut PA 20-1',
      description: 'States can create state causes of action for constitutional violations that do not include a qualified immunity defense, providing an alternative to federal Section 1983 claims',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['State legislatures', 'State governors'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'DOJ Pattern-or-Practice Authority',
      statute: '42 U.S.C. 14141',
      description: 'DOJ can investigate and bring reform litigation against police departments with patterns of constitutional violations, bypassing individual officer qualified immunity through institutional accountability',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ Civil Rights Division', 'Attorney General'],
      applicability: 'directly_applicable' as const,
      notes: 'Effectiveness depends entirely on political will of current administration'
    },
    {
      name: 'Federal Criminal Civil Rights Prosecution',
      statute: '18 U.S.C. 242',
      description: 'Criminal prosecution of officers who willfully deprive persons of constitutional rights; not subject to qualified immunity defense; rarely used but available for egregious cases',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ Criminal Division', 'FBI', 'U.S. Attorneys'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Municipal Policy Reform (Eliminate Indemnification)',
      statute: 'Municipal ordinances and collective bargaining agreements',
      description: 'Cities can eliminate automatic indemnification of officers found to have acted in bad faith, creating personal financial exposure without federal legislative change',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['City councils', 'Mayors', 'Municipal insurance managers'],
      applicability: 'potentially_applicable' as const,
      notes: 'Requires renegotiating police union collective bargaining agreements'
    }
  ],
  wealthTrace: [
    {
      name: 'Municipal Police Settlement Funds',
      relationship: 'Taxpayer-funded settlements and judgments for police misconduct in cases surviving qualified immunity',
      transferMethod: 'General fund appropriations, municipal insurance payouts, and special settlement funds',
      estimatedValue: '$5,000,000,000+ cumulative (major cities combined 2010-2023)',
      legalEntities: ['City of Chicago ($750M+)', 'City of New York ($1.1B+)', 'City of Los Angeles ($880M+)', 'City of Minneapolis', 'Hundreds of other municipalities'],
      recoveryMechanisms: ['Municipal budget reforms requiring departments to pay from own budgets', 'Insurance accountability tying premiums to misconduct patterns']
    },
    {
      name: 'Police Union Political War Chest',
      relationship: 'Lobbying and political funds used to block qualified immunity reform',
      transferMethod: 'Member dues, PAC contributions, and political action fund aggregation',
      estimatedValue: '$50,000,000+ combined across major police unions',
      legalEntities: ['Fraternal Order of Police', 'National Association of Police Organizations', 'State and local police union chapters'],
      recoveryMechanisms: ['Campaign finance reform', 'Lobbying transparency requirements']
    },
    {
      name: 'Unremedied Victim Claims',
      relationship: 'Meritorious civil rights claims blocked by qualified immunity with no compensation provided',
      transferMethod: 'No transfer; claims dismissed at court level before reaching compensation',
      estimatedValue: 'Incalculable; thousands of claims dismissed annually',
      legalEntities: ['Federal district courts', 'Federal appellate courts'],
      recoveryMechanisms: ['Congressional elimination of qualified immunity', 'Supreme Court reconsideration', 'State-level reform']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'U.S. Congress',
      title: 'Members of Senate and House Judiciary Committees',
      jurisdiction: 'Federal legislative authority to amend Section 1983',
      powers: ['Amend Section 1983 to eliminate qualified immunity', 'Replace "clearly established" standard with reasonable officer test', 'Create federal cause of action without immunity defense', 'Condition federal law enforcement funding on accountability measures'],
      contactMethod: 'Senate Judiciary Committee: (202) 224-5225; House Judiciary Committee: (202) 225-3951'
    },
    {
      name: 'Supreme Court of the United States',
      title: 'Chief Justice and Associate Justices',
      jurisdiction: 'Judicial authority to reconsider qualified immunity doctrine',
      powers: ['Grant certiorari to reconsider qualified immunity', 'Overturn or modify Harlow v. Fitzgerald standard', 'Restore Saucier sequential analysis requirement', 'Eliminate qualified immunity doctrine entirely'],
      contactMethod: 'Via certiorari petition (Supreme Court of the United States, 1 First Street NE, Washington, DC 20543)'
    },
    {
      name: 'DOJ Civil Rights Division',
      title: 'Assistant Attorney General for Civil Rights',
      jurisdiction: 'Federal civil rights enforcement and police reform',
      powers: ['Pattern-or-practice investigations under 42 U.S.C. 14141', 'Consent decrees requiring departmental reform', 'Federal civil rights prosecutions under 18 U.S.C. 242', 'Technical assistance to state reform efforts'],
      contactMethod: 'DOJ Civil Rights Division: (202) 514-4609; civilrights.justice.gov'
    },
    {
      name: 'State Legislatures',
      title: 'State legislators',
      jurisdiction: 'State-level civil rights law and police accountability',
      powers: ['Create state cause of action without qualified immunity', 'Mandate police misconduct databases', 'Require body camera footage disclosure', 'Reform collective bargaining provisions on indemnification'],
      contactMethod: 'Contact through individual state legislature websites'
    },
    {
      name: 'City Councils and Mayors',
      title: 'Municipal elected officials',
      jurisdiction: 'Local police department oversight and budget authority',
      powers: ['Eliminate automatic indemnification for bad-faith conduct', 'Require public disclosure of police settlement costs', 'Create civilian oversight boards with subpoena power', 'Negotiate collective bargaining agreements with accountability provisions'],
      contactMethod: 'Contact through individual city government websites'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can demand qualified immunity reform through legislative advocacy, electoral accountability, and supporting reform organizations',
      steps: [
        { step: 1, title: 'Contact Federal Legislators', description: 'Contact U.S. Senators demanding reintroduction and passage of legislation eliminating qualified immunity; the George Floyd Justice in Policing Act provides the template', legalBasis: ['First Amendment right to petition'], estimatedTime: '1-2 hours' },
        { step: 2, title: 'Support State-Level Reform', description: 'Advocate for state qualified immunity reform following the Colorado, New Mexico, and Connecticut models; state reform creates proof that eliminating the doctrine does not cause the harms opponents predict', legalBasis: ['First Amendment right to petition', 'State legislative authority'], estimatedTime: '1-2 hours' },
        { step: 3, title: 'Demand Municipal Transparency', description: 'File public records requests for police misconduct settlement costs in your municipality; demand that local government publicly report the taxpayer cost of indemnifying officer misconduct', legalBasis: ['State public records laws', 'Municipal transparency ordinances'], estimatedTime: '2-4 hours' },
        { step: 4, title: 'Support Reform Organizations', description: 'Donate to and amplify the work of the Institute for Justice, ACLU, and other organizations litigating against qualified immunity and advocating for legislative reform', estimatedTime: '30 minutes' },
        { step: 5, title: 'Hold Elected Officials Accountable', description: 'Track how elected officials vote on police reform legislation and factor positions on qualified immunity into voting decisions at federal, state, and local levels', estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['Congressional legislation', 'State-level reform', 'Electoral accountability', 'Public records transparency'],
      urgency: 'immediate' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can expose the human cost of qualified immunity through investigative reporting on dismissed cases, settlement costs, and the gap between doctrine and reality',
      steps: [
        { step: 1, title: 'Map Municipal Settlement Costs', description: 'Obtain and analyze police misconduct settlement data from major cities to calculate the total taxpayer cost of police violence, comparing what is paid to what is blocked by qualified immunity', legalBasis: ['First Amendment freedom of press', 'State public records laws'], filingTarget: 'Municipal finance departments; city attorney offices' },
        { step: 2, title: 'Document Dismissed Cases', description: 'Identify and investigate Section 1983 cases dismissed on qualified immunity grounds where the underlying facts show clear constitutional violations; interview plaintiffs and their attorneys about the impact', legalBasis: ['First Amendment freedom of press', 'Federal court records (PACER)'] },
        { step: 3, title: 'Investigate Police Union Political Spending', description: 'Document police union campaign contributions and lobbying expenditures targeting legislators on judiciary committees; connect spending to legislative votes on reform', legalBasis: ['FEC filings', 'State lobbying disclosure records', 'First Amendment'] },
        { step: 4, title: 'Report on State Reform Outcomes', description: 'Investigate whether Colorado, New Mexico, and other reform states have experienced the "chilling effect" or recruitment crises that police unions predicted; document empirical outcomes', legalBasis: ['State public records laws', 'First Amendment'] }
      ],
      relevantMechanisms: ['PACER court records', 'Public records requests', 'FEC campaign finance data', 'State lobbying disclosures'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Lawyers can challenge qualified immunity through strategic litigation, state-law claims, and creative legal theories that bypass the doctrine',
      steps: [
        { step: 1, title: 'File State-Law Claims in Reform Jurisdictions', description: 'Bring police misconduct claims under state civil rights statutes in Colorado, New Mexico, Connecticut, and other reform states where qualified immunity does not apply to state claims', legalBasis: ['Colorado SB 20-217', 'New Mexico Civil Rights Act', 'Connecticut PA 20-1'], filingTarget: 'State courts in reform jurisdictions' },
        { step: 2, title: 'Strategic Certiorari Petitions', description: 'File certiorari petitions in cases involving sympathetic facts and egregious misconduct, building the record for Supreme Court reconsideration; coordinate with Institute for Justice and other organizations', legalBasis: ['28 U.S.C. 1254 (certiorari jurisdiction)', '42 U.S.C. 1983'], filingTarget: 'Supreme Court of the United States' },
        { step: 3, title: 'Monell Claims Against Municipalities', description: 'Bring Monell claims against municipalities for unconstitutional policies and customs that cause injuries, bypassing individual officer qualified immunity by targeting the institution', legalBasis: ['Monell v. Dept of Social Services (1978)', '42 U.S.C. 1983'] },
        { step: 4, title: 'Challenge Indemnification Policies', description: 'Litigate against municipal indemnification policies that eliminate the personal financial exposure that qualified immunity purports to protect, exposing the doctrine as protecting neither officers nor accountability', legalBasis: ['State collective bargaining law', 'Municipal ordinances'] }
      ],
      relevantMechanisms: ['State civil rights acts', 'Certiorari petitions', 'Monell municipal liability', 'Collective bargaining challenges'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials at federal, state, and local levels can enact reforms eliminating or limiting qualified immunity and creating alternative accountability frameworks',
      steps: [
        { step: 1, title: 'Reintroduce Federal Qualified Immunity Reform', description: 'Introduce legislation amending Section 1983 to either eliminate qualified immunity entirely or replace the "clearly established" standard with a reasonable officer standard', legalBasis: ['Article I legislative authority', '42 U.S.C. 1983'], estimatedTime: 'Congressional session' },
        { step: 2, title: 'Pass State Civil Rights Acts', description: 'Enact state-level civil rights statutes creating cause of action for constitutional violations without qualified immunity defense, following Colorado, New Mexico, and Connecticut models', legalBasis: ['State legislative authority', 'Tenth Amendment'], estimatedTime: 'State legislative session' },
        { step: 3, title: 'Municipal Accountability Reforms', description: 'Pass municipal ordinances requiring public reporting of police settlement costs, creating civilian oversight boards with subpoena power, and eliminating automatic indemnification for bad-faith conduct', legalBasis: ['Municipal home rule authority'] },
        { step: 4, title: 'Condition Federal Funding on Accountability', description: 'Condition federal law enforcement grants on departmental compliance with accountability standards including body camera requirements, misconduct database participation, and early intervention systems', legalBasis: ['Congressional spending power'] }
      ],
      relevantMechanisms: ['Section 1983 amendment', 'State civil rights legislation', 'Municipal ordinance authority', 'Federal grant conditions'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Federal and state regulators can enforce existing accountability frameworks and create new oversight mechanisms that operate alongside or around qualified immunity',
      steps: [
        { step: 1, title: 'DOJ Pattern-or-Practice Investigations', description: 'Initiate pattern-or-practice investigations under 42 U.S.C. 14141 targeting departments with systematic qualified immunity dismissals, using settlement cost data to identify chronic violators', legalBasis: ['42 U.S.C. 14141', 'DOJ Civil Rights Division authority'], filingTarget: 'DOJ Civil Rights Division' },
        { step: 2, title: 'National Police Misconduct Database', description: 'Create and maintain a national database of officers involved in substantiated misconduct, ensuring that officers who benefit from qualified immunity cannot move to new departments without disclosure', legalBasis: ['Federal regulatory authority', 'State POST commission authority'] },
        { step: 3, title: 'Insurance Premium Accountability', description: 'Work with police liability insurance providers to develop premium structures that tie costs to departmental misconduct patterns, creating market-based accountability incentives', legalBasis: ['State insurance regulatory authority'] },
        { step: 4, title: 'Body Camera Footage Disclosure', description: 'Mandate timely disclosure of body camera footage in cases where qualified immunity is asserted, ensuring public access to evidence of the conduct that courts deem immune from liability', legalBasis: ['State public records authority', 'Agency regulatory power'] }
      ],
      relevantMechanisms: ['42 U.S.C. 14141', 'State POST commissions', 'Insurance regulation', 'Public records authority'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement professionals who believe in accountability can support reform from within by advocating for transparency, training reforms, and department-level policy changes',
      steps: [
        { step: 1, title: 'Support Federal Civil Rights Prosecution', description: 'Cooperate with DOJ investigations under 18 U.S.C. 242 of officers who willfully violate constitutional rights; the criminal statute is not subject to qualified immunity', legalBasis: ['18 U.S.C. 242', '18 U.S.C. 241'] },
        { step: 2, title: 'Advocate for Department Accountability Policies', description: 'Support department policies that go beyond qualified immunity to create internal accountability including early intervention systems, peer reporting requirements, and body camera compliance', legalBasis: ['Department policy authority'] },
        { step: 3, title: 'Participate in National Misconduct Database', description: 'Support participation in the National Decertification Index and state misconduct databases to prevent officers with substantiated misconduct from moving between departments', legalBasis: ['IADLEST National Decertification Index', 'State POST commission authority'] },
        { step: 4, title: 'Break the Blue Wall of Silence', description: 'Report and testify about officer misconduct through proper channels; culture change within law enforcement is essential for any accountability framework to function', legalBasis: ['Duty to report violations', 'Whistleblower protections'] }
      ],
      relevantMechanisms: ['18 U.S.C. 242 criminal prosecution', 'Department accountability policies', 'National Decertification Index', 'Whistleblower protections'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Federal legislation amending Section 1983 to eliminate or substantially reform qualified immunity for law enforcement officers',
    'Supreme Court reconsideration and narrowing or elimination of the "clearly established" standard from Harlow v. Fitzgerald',
    'Majority of states enacting state-level civil rights statutes without qualified immunity defense, following Colorado and New Mexico models',
    'Empirical evidence from reform states demonstrating no chilling effect widely disseminated to counter police union scare arguments',
    'Municipal transparency in police settlement costs as standard practice nationwide, with departments bearing settlement costs from own budgets',
    'National police misconduct database operational with mandatory participation preventing lateral transfers of problem officers',
    'Police union political spending on anti-reform lobbying publicly tracked and electorally consequential',
    'Civil rights attorneys able to economically pursue meritorious Section 1983 cases without qualified immunity as barrier to recovery',
    'Body camera footage from all qualified immunity cases made publicly available within 30 days of incident',
    'Indemnification reform requiring officers to bear personal financial responsibility for bad-faith constitutional violations'
  ]
};
