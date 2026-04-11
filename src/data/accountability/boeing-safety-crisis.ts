import type { AccountabilityData } from '@/types/accountability';

export const boeingSafetyAccountability: AccountabilityData = {
  investigationSlug: 'boeing-safety-crisis',

  crimeSummary: 'Boeing\'s criminal negligence killed 346 people in two 737 MAX crashes  -  Lion Air Flight 610 (October 2018, 189 dead) and Ethiopian Airlines Flight 302 (March 2019, 157 dead). Both crashes were caused by the same design flaw: the MCAS (Maneuvering Characteristics Augmentation System), a flight control system Boeing added to compensate for engine placement changes but concealed from pilots, airlines, and regulators. Boeing deliberately hid MCAS from training manuals and pilot documentation to avoid costly simulator requirements that would have reduced the 737 MAX\'s competitive advantage over Airbus. Internal communications revealed engineers called the plane "designed by clowns, supervised by monkeys." Boeing\'s own test pilot flagged MCAS problems during development but was ignored. The FAA\'s regulatory capture  -  allowing Boeing to effectively certify its own aircraft through the Organization Designation Authorization (ODA) program  -  was a critical enabler. Boeing entered a $2.5 billion deferred prosecution agreement (DPA) in January 2021 for conspiracy to defraud the FAA. When Boeing violated the DPA terms, DOJ offered a new plea deal in 2024 with a $243.6 million fine  -  which victims\' families called "a slap on the wrist."',

  totalHarm: '346 people killed in two preventable crashes. Lion Air Flight 610: 189 dead (Indonesia, October 29, 2018). Ethiopian Airlines Flight 302: 157 dead from 35 nations (Addis Ababa, March 10, 2019). Global grounding of 387 737 MAX aircraft for 20 months. $20+ billion in total costs to Boeing (compensation, lost orders, grounding costs). Permanent destruction of trust in aviation safety regulatory framework.',

  victimsAffected: '346 passengers and crew killed. Their families across 35 nations who have fought for six years for accountability. Every passenger who flies on a Boeing aircraft and trusts the FAA certification process. Boeing employees who raised safety concerns and were ignored or retaliated against. The global aviation industry whose regulatory credibility was shattered.',

  primaryTargets: [
    {
      name: 'Boeing Company',
      role: 'Manufacturer of the 737 MAX. Corporate decision-making prioritized production speed and stock price over safety. Concealed MCAS from pilots and regulators.',
      currentStatus: 'Entered $2.5 billion DPA in 2021 (conspiracy to defraud FAA). Violated DPA terms. Offered new plea deal in 2024 with $243.6 million additional fine. Families opposing the deal as inadequate. Stock price recovered. New CEO Kelly Ortberg installed August 2024.',
      accountabilityPath: 'The DPA and plea deal are widely considered grossly inadequate for 346 deaths. Ongoing civil litigation by families. Congressional oversight. FAA regulatory reform. State-level criminal investigation. International criminal jurisdiction in countries where victims were nationals.',
      obstacles: [
        'Boeing is "too important to fail"  -  major defense contractor',
        'DPA provided corporate immunity for covered conduct',
        'Political influence from massive lobbying ($15M+ annually)',
        'FAA regulatory capture continues',
      ],
    },
    {
      name: 'Dennis Muilenburg',
      role: 'CEO of Boeing during both crashes and the cover-up. Resisted grounding the MAX after the first crash. Continued to claim the plane was safe.',
      currentStatus: 'Fired in December 2019. Received $62.2 million exit package. No criminal charges. No personal financial penalty. Now CEO of a technology startup.',
      accountabilityPath: 'Muilenburg received $62.2 million for leading a company that killed 346 people through criminal negligence. Civil constructive trust on exit compensation. State AG consumer protection actions. Shareholder derivative claims for breach of fiduciary duty. The exit package included $26.5 million in pension value and $36.7 million in stock  -  all traceable to decisions that led to the crashes.',
      obstacles: [
        'Never personally charged',
        'DPA covered corporate conduct',
        'Massive personal wealth for legal defense',
        'No individual accountability provision in DPA',
      ],
    },
    {
      name: 'Mark Forkner',
      role: 'Boeing\'s chief technical pilot for the 737 MAX. Communicated with FAA about MCAS. Internal messages showed he knew MCAS was more powerful than represented to the FAA.',
      currentStatus: 'Indicted for fraud in October 2021. Acquitted by jury in March 2022. The only individual Boeing employee ever charged. His acquittal means ZERO individuals have been held criminally accountable for 346 deaths.',
      accountabilityPath: 'Acquittal is final  -  double jeopardy prevents retrial. Forkner was widely seen as a scapegoat  -  a mid-level employee while senior executives escaped prosecution. The accountability failure is at the executive level.',
      obstacles: [
        'Acquitted  -  double jeopardy applies',
        'Forkner was a relatively junior figure',
      ],
    },
    {
      name: 'FAA / Organization Designation Authorization',
      role: 'The FAA delegated aircraft certification to Boeing itself through the ODA program  -  allowing Boeing to certify the safety of its own aircraft. This regulatory capture was a direct cause of the crashes.',
      currentStatus: 'Congress passed Aircraft Certification, Safety, and Accountability Act in 2020. Some ODA reforms implemented. But fundamental structure of industry self-certification continues. FAA leadership repeatedly captured by industry.',
      accountabilityPath: 'Congressional oversight of FAA implementation of reforms. Investigation of whether ODA reforms are actually being enforced. Audit of FAA revolving door with industry.',
      obstacles: [
        'Government sovereign immunity',
        'Industry lobbying against stricter regulation',
        'FAA funding dependent on industry fees',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'Criminal Prosecution  -  Conspiracy to Defraud',
      statute: '18 U.S.C. § 371',
      description: 'Boeing charged with conspiracy to defraud the United States (FAA). DPA entered 2021, violated, new plea deal 2024. Individual executives were never charged.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years; tolled during DPA',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI'],
      applicability: 'directly_applicable',
      notes: 'The decision not to charge individual executives mirrors the 2008 financial crisis pattern  -  corporate entities pay fines while the humans who made the decisions face no consequences.',
    },
    {
      name: 'Constructive Trust on Executive Compensation',
      statute: 'Common law equitable remedy',
      description: 'No statute of limitations. Executives who received performance compensation tied to the 737 MAX program that was achieved through fraud should be subject to constructive trust.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Any court of equity'],
      applicability: 'directly_applicable',
      notes: 'Muilenburg\'s $62.2M exit package. Other executives\' bonuses tied to MAX production rates.',
    },
    {
      name: 'Wrongful Death / Civil Litigation',
      statute: 'State tort law; international conventions (Montreal Convention)',
      description: 'Families of victims have filed extensive civil litigation. Many cases settled. Some still pending.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies; 2-3 years typically',
      reachesHeirs: true,
      authorizedActors: ['Victims\' families', 'Personal injury attorneys'],
      applicability: 'directly_applicable',
      notes: 'Boeing has settled many wrongful death claims. Amounts vary. Families continue to fight for criminal accountability beyond civil settlement.',
    },
    {
      name: 'Congressional Oversight & Reform',
      statute: 'U.S. Constitution Art. I',
      description: 'Congress has investigated Boeing extensively. Transportation committees have held multiple hearings. Aircraft Certification Act passed in 2020.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Senate Commerce Committee', 'House Transportation Committee'],
      applicability: 'directly_applicable',
      notes: 'Oversight is ongoing. The January 2024 Alaska Airlines 737 MAX 9 door plug blowout reignited congressional scrutiny.',
    },
    {
      name: 'International Criminal Jurisdiction',
      statute: 'National laws of countries where victims were citizens',
      description: 'Victims came from 35 nations. Each nation has potential criminal jurisdiction over the deaths of its citizens.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by country',
      reachesHeirs: false,
      authorizedActors: ['National prosecutors of victim countries'],
      applicability: 'potentially_applicable',
      notes: 'Ethiopia, Indonesia, and other nations could pursue criminal investigations under their own laws.',
    },
  ],

  wealthTrace: [
    {
      name: 'Dennis Muilenburg Exit Package',
      relationship: 'CEO who oversaw the crashes and cover-up',
      transferMethod: 'Received $62.2 million exit package upon termination: $26.5M pension, $36.7M stock/equity. No clawback provisions enforced despite criminal conduct.',
      estimatedValue: '$62.2 million',
      legalEntities: ['Personal holdings', 'Retirement accounts'],
      recoveryMechanisms: ['Constructive Trust', 'Shareholder Derivative Action', 'Unjust Enrichment'],
    },
    {
      name: 'Boeing Executive Compensation Pool',
      relationship: 'Senior executives who received bonuses tied to MAX production',
      transferMethod: 'Boeing executives received hundreds of millions in compensation during the period when the company was concealing MCAS defects and pressuring production.',
      estimatedValue: '$500+ million in combined executive compensation (2015-2019)',
      legalEntities: ['Individual executive holdings', 'Boeing stock grants'],
      recoveryMechanisms: ['Shareholder Derivative Actions', 'Compensation Clawback'],
    },
    {
      name: 'Boeing Stock Buybacks',
      relationship: 'Instead of investing in safety, Boeing spent $43 billion on stock buybacks (2013-2019)',
      transferMethod: 'Boeing spent $43 billion buying back its own stock to inflate share price  -  money that could have funded safety engineering, proper MCAS design, simulator training, and quality control.',
      estimatedValue: '$43 billion in buybacks (2013-2019)',
      legalEntities: ['Boeing Company (NYSE: BA)', 'Shareholder distributions'],
      recoveryMechanisms: ['Congressional Investigation', 'SEC Investigation of Buyback Timing'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'U.S. Attorney General',
      title: 'Head of DOJ',
      jurisdiction: 'Federal criminal prosecution',
      powers: [
        'Reject or modify Boeing plea deal',
        'Charge individual executives',
        'Appoint independent monitor for Boeing compliance',
      ],
    },
    {
      name: 'FAA Administrator',
      title: 'Administrator, Federal Aviation Administration',
      jurisdiction: 'Aviation safety regulation',
      powers: [
        'Reform ODA certification process',
        'Mandate independent safety review for all Boeing aircraft',
        'Revoke or restrict Boeing production certificates',
      ],
    },
    {
      name: 'Senate Commerce Committee',
      title: 'U.S. Senate Committee on Commerce, Science, & Transportation',
      jurisdiction: 'Aviation oversight',
      powers: [
        'Investigate Boeing safety culture',
        'Subpoena internal Boeing communications',
        'Hold hearings on DPA/plea deal adequacy',
        'Strengthen Aircraft Certification Act',
      ],
    },
    {
      name: 'NTSB Chair',
      title: 'Chair, National Transportation Safety Board',
      jurisdiction: 'Accident investigation',
      powers: [
        'Issue safety recommendations',
        'Investigate ongoing Boeing safety issues',
        'Provide evidence to criminal prosecutors',
      ],
    },
  ],
  successCriteria: [
    'Criminal prosecution of individual Boeing executives who approved the MCAS design, concealed it from pilots, and fought against simulator training requirements to save costs',
    'Rejection of the plea deal and pursuit of full criminal trial -- $243.6 million fine for 346 deaths is not justice, it is a rounding error on Boeing\'s balance sheet',
    'Permanent ban on manufacturer self-certification (ODA) for safety-critical aircraft systems -- independent FAA engineers must certify all flight control software',
    'Full compensation for all 346 victims\' families that reflects the actual harm caused, not discounted settlement amounts negotiated under duress',
    'Clawback of executive compensation earned during the period of concealment -- including bonuses tied to the MAX production schedule that incentivized hiding safety defects',
    'Whistleblower protection reform ensuring Boeing employees who report safety concerns face zero retaliation -- and full investigation of the circumstances surrounding John Barnett\'s death',
    'Mandatory pilot simulator training for all new aircraft systems that alter fundamental flight characteristics -- the cost-cutting that eliminated simulator requirements killed 346 people',
    'Complete dissolution of the Boeing-FAA revolving door with mandatory cooling-off periods and prohibition on former Boeing employees certifying Boeing aircraft',
    'Public release of all internal Boeing communications regarding MCAS design decisions, cost-benefit analyses that traded lives for production timelines, and lobbying against safety requirements',
    'Congressional oversight of the independent compliance monitor with binding authority to halt production if safety violations are discovered',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: '346 people were killed by a known design flaw that Boeing concealed to save money. The only criminal charge against an individual resulted in acquittal. As a citizen, demand real accountability and safety reform.',
      urgency: 'high',
      relevantMechanisms: ['Congressional Oversight & Reform', 'Criminal Prosecution  -  Conspiracy to Defraud'],
      steps: [
        {
          step: 1,
          title: 'Oppose Inadequate Plea Deal',
          description: 'Submit public comment opposing the Boeing plea deal. Families have called the $243.6 million fine a "slap on the wrist" for 346 deaths.',
          filingTarget: 'DOJ / Federal court handling Boeing plea',
          estimatedTime: '1 hour',
        },
        {
          step: 2,
          title: 'Contact Congress',
          description: 'Demand individual executive prosecution. Support strengthening the Aircraft Certification Act. Demand end to FAA regulatory capture.',
          filingTarget: 'https://www.congress.gov/members/find-your-member',
          estimatedTime: '30 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The Boeing story continues to unfold. Internal whistleblowers are coming forward. The 2024 Alaska Airlines blowout showed problems persist. The plea deal process is contested.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Oversight & Reform'],
      steps: [
        {
          step: 1,
          title: 'Investigate Whistleblower Retaliation',
          description: 'Boeing whistleblowers have reported retaliation. John Barnett, a former quality manager who raised concerns, was found dead during his lawsuit deposition. Investigate the treatment of Boeing safety whistleblowers.',
          estimatedTime: '4-8 weeks',
        },
        {
          step: 2,
          title: 'Track DPA Violation Evidence',
          description: 'Boeing violated its DPA. What specifically did it do? What evidence does DOJ have? Why was another plea deal offered instead of prosecution?',
          estimatedTime: '2-4 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Constructive trust on executive compensation. Shareholder derivative actions. Wrongful death litigation. Challenge adequacy of plea deal.',
      urgency: 'high',
      relevantMechanisms: ['Constructive Trust on Executive Compensation', 'Wrongful Death / Civil Litigation'],
      steps: [
        {
          step: 1,
          title: 'Challenge Plea Deal',
          description: 'File objections to Boeing plea deal on behalf of victims\' families. Argue the deal is inadequate for 346 deaths and fails to provide individual accountability.',
          legalBasis: ['Crime Victims\' Rights Act, 18 U.S.C. § 3771'],
          estimatedTime: '2-4 weeks',
        },
        {
          step: 2,
          title: 'Executive Compensation Clawback',
          description: 'Pursue shareholder derivative action for clawback of executive compensation earned during the period of fraud.',
          legalBasis: ['SOX § 304', 'State fiduciary duty law'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: '346 people were killed by corporate greed. No executive went to prison. Fix the regulatory capture that enabled it and demand individual accountability.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Oversight & Reform', 'Criminal Prosecution  -  Conspiracy to Defraud'],
      steps: [
        {
          step: 1,
          title: 'Individual Executive Accountability',
          description: 'Press DOJ to charge individual Boeing executives. Introduce legislation mandating individual prosecution for corporate decisions that cause death.',
          estimatedTime: 'Legislative timeline',
        },
        {
          step: 2,
          title: 'End Self-Certification',
          description: 'Eliminate ODA provisions that allow manufacturers to certify their own aircraft safety. Fund FAA to conduct independent certification.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'The DPA violation created an opportunity to pursue full prosecution. Individual executives remain uncharged.',
      urgency: 'high',
      relevantMechanisms: ['Criminal Prosecution  -  Conspiracy to Defraud'],
      steps: [
        {
          step: 1,
          title: 'Individual Executive Investigation',
          description: 'Investigate individual executives for conspiracy to defraud the FAA, involuntary manslaughter, and obstruction of justice.',
          legalBasis: ['18 U.S.C. § 371', '18 U.S.C. § 1001'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'DPA Violation Prosecution',
          description: 'Boeing violated its Deferred Prosecution Agreement. Pursue full prosecution on the original charges rather than accepting another deferred agreement. A corporation that violates a DPA should face trial.',
          legalBasis: ['18 U.S.C. § 1001'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Whistleblower Death Investigation',
          description: 'Conduct a thorough investigation into the death of Boeing whistleblower John Barnett during his lawsuit deposition. Ensure all circumstances are documented and any foul play is ruled out with certainty.',
          estimatedTime: '3-6 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'The FAA must end the self-certification model that allowed Boeing to hide MCAS. Independent safety engineers, not company employees, must certify aircraft.',
      urgency: 'immediate',
      relevantMechanisms: ['Congressional Oversight & Reform'],
      steps: [
        {
          step: 1,
          title: 'Independent Certification Reform',
          description: 'Transition from ODA (manufacturer self-certification) to independent FAA certification. Hire sufficient engineers and inspectors. End the revolving door between FAA and industry.',
          estimatedTime: '2-3 years for full implementation',
        },
        {
          step: 2,
          title: 'Mandatory Safety Culture Audits',
          description: 'Implement regular independent safety culture audits at Boeing and all major aircraft manufacturers. Evaluate whether internal reporting systems are functioning and whether employees face retaliation for raising safety concerns.',
          estimatedTime: 'Annual cycle',
        },
        {
          step: 3,
          title: 'Production Rate Oversight',
          description: 'Establish regulatory authority to limit or halt production rate increases when quality and safety metrics indicate manufacturing is outpacing quality control capacity.',
          estimatedTime: '12-18 months for rulemaking',
        },
      ],
    },
  ],
};
