import type { AccountabilityData } from '@/types/accountability';

export const electionOverturnAccountability: AccountabilityData = {
  investigationSlug: '2020-election-overturn',

  crimeSummary: 'Following the 2020 presidential election, President Donald Trump and allies orchestrated a multi-pronged conspiracy to overturn the legitimate election results, culminating in the January 6, 2021 attack on the U.S. Capitol. The scheme included: pressuring state officials to "find" votes (Georgia call demanding 11,780 votes), organizing fake electors in seven states to submit fraudulent electoral certificates, pressuring VP Pence to reject legitimate electoral votes, filing 60+ baseless lawsuits (losing all but one trivial case), pressuring DOJ officials to declare the election corrupt, and inciting a violent mob that stormed the Capitol, resulting in 5 deaths and 140+ injured police officers. Special Counsel Jack Smith indicted Trump on four federal counts. Trump was also indicted in Georgia (RICO). Over 1,200 Capitol rioters have been charged. However, Trump\'s re-election in 2024 effectively foreclosed federal prosecution, and he has pardoned hundreds of January 6 defendants.',

  totalHarm: '5 deaths directly associated with January 6 (Ashli Babbitt shot by Capitol Police; Brian Sicknick died of stroke after being attacked; 3 rioters died of medical emergencies). 140+ police officers injured. $30+ million in damage to the Capitol. Incalculable damage to democratic institutions and peaceful transfer of power. 4 Capitol Police officers died by suicide in the months following. The broader harm: the attempted destruction of American democratic governance and the precedent that election results can be contested through violence.',

  victimsAffected: 'The 81 million Americans who voted for Joe Biden and whose votes the conspirators attempted to nullify. 140+ Capitol Police officers who were beaten, sprayed with chemical agents, and crushed by the mob. The families of those who died. Every American whose faith in democratic institutions was damaged. State election officials who were harassed, threatened, and subjected to death threats for doing their jobs (Ruby Freeman, Shaye Moss, Brad Raffensperger, and thousands more).',

  primaryTargets: [
    {
      name: 'Donald J. Trump',
      role: 'Former President. Central organizer of the conspiracy to overturn the 2020 election. Indicted by Special Counsel on 4 federal counts and by Fulton County DA on 13 Georgia RICO counts.',
      currentStatus: 'Elected to second presidential term in 2024. Federal indictment effectively mooted by DOJ policy against prosecuting a sitting president. Georgia RICO case ongoing but significantly delayed. Has pardoned or commuted sentences of hundreds of January 6 defendants. The accountability window for the 2020 election conspiracy has effectively closed at the federal level for the duration of his presidency.',
      accountabilityPath: 'Federal prosecution paused due to presidential immunity while in office. Georgia state prosecution continues (presidential pardon power does not reach state charges). Civil lawsuits under 42 U.S.C. § 1985 (conspiracy against rights). Congressional investigation (January 6 Committee completed, but enforcement referrals remain). Disqualification under 14th Amendment § 3 (upheld by Colorado Supreme Court, reversed by U.S. Supreme Court on standing grounds). Historical accountability through the congressional record and public documentation.',
      obstacles: [
        'Presidential immunity while in office',
        'DOJ policy against prosecuting sitting president',
        'Pardon power over federal offenses',
        'Political polarization affecting jury pools',
        'Supreme Court ruling limiting 14th Amendment § 3 enforcement',
      ],
    },
    {
      name: 'Mark Meadows',
      role: 'White House Chief of Staff. Key coordinator of the pressure campaign on state officials and DOJ. Present during the Georgia phone call demanding 11,780 votes.',
      currentStatus: 'Indicted in Georgia RICO case. Attempted to remove case to federal court (denied). Reported to have cooperated with Special Counsel investigation. Case ongoing.',
      accountabilityPath: 'Georgia prosecution continues. Meadows\' cooperation with federal investigation may have provided evidence but federal case against Trump is paused. State charges not subject to presidential pardon.',
      obstacles: [
        'Potential cooperation agreement may limit prosecution',
        'Claims of executive privilege for White House activities',
        'Georgia case subject to lengthy delays',
      ],
    },
    {
      name: 'Rudy Giuliani',
      role: 'Trump\'s personal attorney. Organized fake electors scheme, spread disinformation about election fraud, appeared before state legislatures with false claims, and personally pressured state officials.',
      currentStatus: 'Indicted in Georgia RICO case. Found liable for defaming Ruby Freeman and Shaye Moss  -  ordered to pay $148 million (filed for bankruptcy). Law license suspended in New York and D.C. Disbarred in New York (July 2024). Financial ruin.',
      accountabilityPath: 'Georgia prosecution ongoing. Civil judgment of $148 million for defamation of Freeman and Moss. Bankruptcy proceedings. Disbarment completed. Giuliani has faced more personal consequences than almost any other figure in the conspiracy.',
      obstacles: [
        'Bankruptcy may limit civil recovery',
        'Georgia case delays',
      ],
    },
    {
      name: 'John Eastman',
      role: 'Attorney who authored the legal memo proposing that VP Pence could reject electoral votes  -  the intellectual architect of the constitutional coup.',
      currentStatus: 'Indicted in Georgia RICO case. Disbarred in California (March 2024). Federal charges were part of Trump indictment as unindicted co-conspirator.',
      accountabilityPath: 'Georgia prosecution ongoing. Disbarment completed. One of the more significant accountability outcomes  -  Eastman lost his license to practice law for his role.',
      obstacles: [
        'Georgia case delays',
        'Disbarment already achieved  -  limited further professional consequences available',
      ],
    },
    {
      name: 'Fake Electors (Multiple States)',
      role: 'Individuals in Arizona, Georgia, Michigan, Nevada, New Mexico, Pennsylvania, and Wisconsin who signed fraudulent electoral certificates claiming Trump won their states.',
      currentStatus: 'Charged in multiple states. Michigan AG Dana Nessel charged 16 fake electors. Arizona AG charged 18 (including Meadows, Giuliani). Nevada AG charged 6. Some have entered cooperation agreements.',
      accountabilityPath: 'State-level prosecutions are the most promising avenue. Fake elector signers face forgery, fraud, and conspiracy charges under state law. Not subject to presidential pardon.',
      obstacles: [
        'Multiple jurisdictions with different case timelines',
        'Some have cooperation agreements',
        'Political pressure on state prosecutors',
      ],
    },
    {
      name: 'Jeffrey Clark',
      role: 'DOJ official who attempted to use DOJ letterhead to pressure Georgia to overturn certification. Trump considered installing him as Acting AG to execute the plan.',
      currentStatus: 'Indicted in Georgia RICO case. Narrowly avoided being installed as Acting AG when senior DOJ officials threatened mass resignation. Facing disciplinary proceedings.',
      accountabilityPath: 'Georgia prosecution. Bar disciplinary proceedings. Clark\'s willingness to weaponize DOJ is one of the most dangerous aspects of the conspiracy.',
      obstacles: [
        'Georgia case delays',
        'Claims of DOJ deliberative process privilege',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'Georgia RICO Statute',
      statute: 'O.C.G.A. § 16-14-4',
      description: 'Georgia\'s RICO statute is broader than federal RICO. Fulton County DA Fani Willis brought RICO charges against Trump and 18 co-defendants. State charges not subject to presidential pardon.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years from last predicate act (2021 acts extend to 2026)',
      reachesHeirs: false,
      authorizedActors: ['Fulton County DA', 'Georgia AG'],
      applicability: 'directly_applicable',
      notes: 'Georgia RICO is the most important remaining criminal accountability mechanism because presidential pardon power does not reach state charges.',
    },
    {
      name: '14th Amendment Section 3  -  Disqualification',
      statute: 'U.S. Constitution, 14th Amendment, § 3',
      description: 'Bars from office anyone who, having taken an oath to support the Constitution, engaged in insurrection. Colorado Supreme Court ruled Trump disqualified. U.S. Supreme Court reversed on procedural grounds (only Congress can enforce via legislation).',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress (per Supreme Court ruling)'],
      applicability: 'potentially_applicable',
      notes: 'The Supreme Court did NOT rule that Trump did not engage in insurrection  -  only that states cannot enforce § 3 unilaterally. Congressional legislation could still invoke this provision.',
    },
    {
      name: 'Civil Rights Conspiracy  -  42 U.S.C. § 1985(3)',
      statute: '42 U.S.C. § 1985(3)',
      description: 'Civil liability for conspiracy to deprive persons of equal protection of the laws. Multiple civil suits filed by Capitol Police officers and members of Congress.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '3 years (filed within period)',
      reachesHeirs: true,
      authorizedActors: ['Any injured party'],
      applicability: 'directly_applicable',
      notes: 'Civil litigation by Capitol Police officers, members of Congress, and voters continues. Not subject to presidential pardon or criminal process.',
    },
    {
      name: 'State Election Fraud Statutes',
      statute: 'Varies by state  -  Georgia: O.C.G.A. § 21-2-562 et seq.',
      description: 'State laws criminalizing solicitation of election fraud, submission of false documents, conspiracy to commit election fraud. Multiple states have active cases.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state; generally 3-7 years',
      reachesHeirs: false,
      authorizedActors: ['State AGs', 'County DAs'],
      applicability: 'directly_applicable',
      notes: 'The Georgia phone call asking Raffensperger to "find 11,780 votes" is the clearest single piece of evidence of solicitation of election fraud.',
    },
    {
      name: 'Congressional Investigation Authority',
      statute: 'U.S. Constitution Art. I',
      description: 'The January 6 Select Committee conducted extensive investigation and made criminal referrals. Committee reports and evidence are part of the permanent congressional record.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Congress'],
      applicability: 'directly_applicable',
      notes: 'The January 6 Committee obtained hundreds of thousands of documents, interviewed over 1,000 witnesses, and made referrals for insurrection, obstruction, conspiracy to defraud the United States, and conspiracy to make false statements.',
    },
  ],

  wealthTrace: [
    {
      name: 'Save America PAC / Trump Political Fundraising',
      relationship: 'Raised over $250 million from donors through false claims of election fraud',
      transferMethod: 'Trump campaign and allies raised $250+ million through "Stop the Steal" and "Official Election Defense Fund" fundraising. The January 6 Committee found that the "Election Defense Fund" did not actually exist  -  it was a marketing tactic. Funds were directed to Save America PAC and used for expenses unrelated to election litigation.',
      estimatedValue: '$250+ million raised from small donors on false pretenses',
      legalEntities: ['Save America PAC', 'Trump Save America Joint Fundraising Committee', 'Various Trump-affiliated entities'],
      recoveryMechanisms: ['Wire Fraud Investigation', 'FEC Complaint', 'State AG Consumer Protection'],
    },
    {
      name: 'Giuliani  -  Defamation Judgment',
      relationship: 'Ordered to pay $148 million to Ruby Freeman and Shaye Moss',
      transferMethod: 'Giuliani found liable for defaming two Georgia election workers with false accusation of ballot fraud. Filed for bankruptcy. Asset discovery ongoing.',
      estimatedValue: '$148 million judgment (collection uncertain due to bankruptcy)',
      legalEntities: ['Giuliani bankruptcy estate', 'Personal assets'],
      recoveryMechanisms: ['Bankruptcy proceedings', 'Asset discovery', 'Fraudulent transfer investigation'],
    },
    {
      name: 'January 6 Legal Defense Fundraising',
      relationship: 'Fundraising from convicted Capitol rioters\' supporters',
      transferMethod: 'Multiple organizations raised millions for legal defense of January 6 defendants. Some funds allegedly diverted to other purposes.',
      estimatedValue: 'Millions raised; accounting unclear',
      legalEntities: ['Various legal defense funds'],
      recoveryMechanisms: ['FTC investigation', 'State AG consumer protection'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'Fulton County District Attorney',
      title: 'District Attorney, Fulton County, Georgia',
      jurisdiction: 'State RICO and election fraud',
      powers: [
        'Prosecute Georgia RICO case (not subject to presidential pardon)',
        'Negotiate plea agreements with cooperating defendants',
        'Present case to jury',
      ],
    },
    {
      name: 'State Attorneys General (AZ, MI, NV)',
      title: 'State Attorneys General',
      jurisdiction: 'State election fraud and forgery',
      powers: [
        'Prosecute fake electors',
        'Enforce state election laws',
        'Coordinate multi-state investigations',
      ],
    },
    {
      name: 'U.S. Congress',
      title: 'Legislative branch',
      jurisdiction: 'Constitutional amendment, legislation, oversight',
      powers: [
        'Enact 14th Amendment § 3 enforcement legislation',
        'Reform Electoral Count Act (completed  -  ECRA 2022)',
        'Investigate ongoing threats to election integrity',
        'Preserve January 6 Committee records',
      ],
    },
    {
      name: 'Federal Judiciary',
      title: 'U.S. Courts',
      jurisdiction: 'Civil rights litigation',
      powers: [
        'Adjudicate civil rights conspiracy claims',
        'Enforce civil judgments (Giuliani)',
        'Review constitutionality of pardons if challenged',
      ],
    },
  ],
  successCriteria: [
    'Full prosecution of all state-level election fraud and RICO charges in Georgia, Arizona, Michigan, and Nevada -- state charges are beyond presidential pardon power',
    'Enforcement of the $148 million Giuliani defamation judgment with full collection and distribution to Ruby Freeman and Shaye Moss',
    'Congressional passage of 14th Amendment Section 3 enforcement legislation -- the Supreme Court ruled only Congress can enforce disqualification for insurrection',
    'Complete accounting of the $250+ million raised by Save America PAC through false election fraud claims -- the largest political fundraising fraud in American history',
    'Federal legislation criminalizing threats against election workers and making interference with election administration a federal felony',
    'Full public release of all January 6 Committee evidence including witness transcripts, documentary evidence, and communications that were not included in the final report',
    'Disbarment of all attorneys who filed knowingly frivolous lawsuits to overturn election results -- the fake elector scheme required lawyers at every step',
    'Civil rights conspiracy judgments under 42 U.S.C. 1985(3) against all participants in the coordinated scheme to disenfranchise voters in targeted states',
    'Pardoned January 6 defendants compelled to testify under oath about organization and coordination -- pardons eliminate Fifth Amendment protection because they cannot be re-tried',
    'Permanent reform ensuring no future president can use the DOJ, DHS, or military to interfere with the certification of election results',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'The attempted overthrow of American democracy is the most serious crisis since the Civil War. As a citizen, support the state-level prosecutions that remain the strongest accountability mechanisms, defend election workers, and demand institutional reform.',
      urgency: 'immediate',
      relevantMechanisms: ['Georgia RICO Statute', 'State Election Fraud Statutes'],
      steps: [
        {
          step: 1,
          title: 'Support State Prosecutors',
          description: 'Georgia, Arizona, Michigan, and Nevada prosecutors are pursuing cases that presidential pardon power cannot reach. Publicly support their offices against political pressure.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Protect Election Workers',
          description: 'Support organizations protecting election workers from threats and harassment. The treatment of Ruby Freeman and Shaye Moss  -  private citizens defamed, threatened, and driven from their homes  -  must never be repeated.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Contact Congress on Electoral Reform',
          description: 'Support additional electoral reform beyond the Electoral Count Reform Act. Demand 14th Amendment § 3 enforcement legislation.',
          filingTarget: 'https://www.congress.gov/members/find-your-member',
          estimatedTime: '30 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The full story of the conspiracy has not been told. Pardoned defendants may now speak freely. Internal communications continue to surface. The fake elector scheme\'s full scope remains under investigation.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Investigation Authority', 'Georgia RICO Statute'],
      steps: [
        {
          step: 1,
          title: 'Interview Pardoned Defendants',
          description: 'Pardoned January 6 defendants no longer have Fifth Amendment privilege against self-incrimination (they cannot be re-tried). They can be compelled to testify and their testimony may reveal new details about organization and coordination.',
          estimatedTime: '2-4 weeks',
        },
        {
          step: 2,
          title: 'Track Save America PAC Funds',
          description: 'The $250+ million raised on false election fraud claims is the largest political fundraising fraud in American history. Where did the money go?',
          estimatedTime: '4-8 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Civil litigation remains the strongest federal accountability mechanism. State criminal cases offer non-pardonable prosecution. Civil rights conspiracy claims under § 1985 continue.',
      urgency: 'high',
      relevantMechanisms: ['Civil Rights Conspiracy  -  42 U.S.C. § 1985(3)', 'Georgia RICO Statute'],
      steps: [
        {
          step: 1,
          title: 'Civil Rights Litigation',
          description: 'Continue civil rights conspiracy litigation on behalf of Capitol Police officers and voters whose rights were targeted.',
          legalBasis: ['42 U.S.C. § 1985(3)', '42 U.S.C. § 1986'],
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Enforce Giuliani Judgment',
          description: 'Aggressively pursue collection of the $148 million defamation judgment. Challenge bankruptcy protections for judgment debts arising from intentional torts.',
          legalBasis: ['11 U.S.C. § 523(a)(6)'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'The Electoral Count Reform Act was a start. 14th Amendment § 3 enforcement legislation is urgently needed. Election worker protection must be codified.',
      urgency: 'immediate',
      relevantMechanisms: ['14th Amendment Section 3  -  Disqualification', 'Congressional Investigation Authority'],
      steps: [
        {
          step: 1,
          title: 'Enact 14th Amendment § 3 Enforcement',
          description: 'The Supreme Court ruled only Congress can enforce disqualification for insurrection. Pass enforcement legislation establishing the process for determining disqualification.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'Election Worker Protection Act',
          description: 'Federalize the protection of election workers from threats, harassment, and violence. Make interference with election workers a federal crime.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'Over 1,200 January 6 defendants have been charged. Many pardoned. State-level investigations of fake electors are ongoing and not subject to federal pardon.',
      urgency: 'high',
      relevantMechanisms: ['State Election Fraud Statutes', 'Georgia RICO Statute'],
      steps: [
        {
          step: 1,
          title: 'Support State Investigations',
          description: 'Provide federal evidence and support to state prosecutors pursuing fake elector and election fraud charges.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Investigate Save America PAC',
          description: 'Conduct full criminal investigation of the $250 million raised through false election fraud claims. Determine whether the "Official Election Defense Fund" constituted wire fraud.',
          legalBasis: ['18 U.S.C. § 1343'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Compel Pardoned Defendant Testimony',
          description: 'Subpoena pardoned January 6 defendants to testify before grand juries. Their pardons eliminate Fifth Amendment privilege. Their testimony may reveal coordination details previously unknown.',
          legalBasis: ['Burdick v. United States (1915)'],
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Election infrastructure security, campaign finance enforcement, and social media regulation are all within regulatory purview.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Investigation Authority'],
      steps: [
        {
          step: 1,
          title: 'Campaign Finance Enforcement',
          description: 'FEC investigation of Save America PAC fundraising  -  $250 million raised through materially false representations about a non-existent "Election Defense Fund."',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Social Media Platform Accountability',
          description: 'Investigate how social media platforms amplified false election fraud claims and facilitated the coordination of the January 6 attack. Require platforms to preserve and produce evidence of coordination.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Attorney Disciplinary Referrals',
          description: 'Refer all attorneys involved in the fake elector scheme and frivolous election lawsuits to state bar disciplinary proceedings. Filing knowingly false legal claims to overturn an election is a violation of professional responsibility.',
          estimatedTime: '3-6 months per referral',
        },
      ],
    },
  ],
};
