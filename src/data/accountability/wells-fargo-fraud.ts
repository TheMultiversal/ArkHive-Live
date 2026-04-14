import type { AccountabilityData } from '@/types/accountability';

export const wellsFargoAccountability: AccountabilityData = {
  investigationSlug: 'wells-fargo-fraud',

  crimeSummary: 'Between 2002 and 2016, Wells Fargo employees opened approximately 3.5 million unauthorized bank and credit card accounts in customers\' names without their knowledge or consent. The fraud was driven by Wells Fargo\'s aggressive cross-selling strategy  -  "Going for Gr-Eight"  -  which set impossible sales quotas requiring employees to open 8 accounts per customer. Employees who couldn\'t meet quotas were terminated; those who reported fraud were retaliated against and fired. The scheme generated millions in unauthorized fees, damaged customers\' credit scores, and resulted in some customers having their cars repossessed for loans they never took out. CEO John Stumpf initially dismissed the scandal, blaming low-level employees. He was forced to resign in October 2016. Wells Fargo has paid over $4.5 billion in fines and settlements. The OCC imposed an unprecedented asset cap preventing Wells Fargo from growing beyond $1.95 trillion until it demonstrates adequate compliance  -  a cap that has remained in place for over 6 years. Despite all of this, no senior Wells Fargo executive has been criminally charged.',

  totalHarm: '3.5 million unauthorized accounts opened. Customers charged millions in unauthorized fees, insurance premiums, and interest. Customers\' credit scores damaged by unauthorized credit inquiries and accounts. Unknown number of customers had auto loans, mortgages, and insurance policies created without consent. 5,300+ employees fired between 2011-2016 (used as scapegoats while executives escaped). Additional thousands retaliated against for reporting the fraud. $4.5+ billion in fines and settlements. Incalculable erosion of trust in the banking system.',

  victimsAffected: 'Millions of Wells Fargo customers who had accounts opened in their names without consent. Customers who paid unauthorized fees. Customers whose credit scores were damaged. Customers who had auto insurance force-placed on their loans and had cars repossessed. Wells Fargo employees who were fired for not meeting impossible quotas. Whistleblowers who reported fraud and were retaliated against and terminated. Shareholders who saw billions in value destroyed.',

  primaryTargets: [
    {
      name: 'John Stumpf',
      role: 'CEO of Wells Fargo (2007-2016). Created and enforced the cross-selling culture that drove the fraud. Initially attempted to blame 5,300 low-level employees.',
      currentStatus: 'Resigned October 2016 under pressure. Clawed back $41 million in compensation. Paid $17.5 million OCC fine. Accepted lifetime ban from banking industry. No criminal charges. Retained an estimated $100+ million in total compensation from his Wells Fargo tenure.',
      accountabilityPath: 'Stumpf\'s $17.5 million fine and $41 million clawback still left him with over $100 million from Wells Fargo. Criminal investigation for directing a scheme that defrauded millions of customers. Tax fraud investigation. State AG consumer protection actions.',
      obstacles: [
        'No criminal charges ever filed',
        'OCC settlement may have preclusive effect',
        'Banking industry ban already imposed',
        'Political connections and legal resources',
      ],
    },
    {
      name: 'Carrie Tolstedt',
      role: 'Head of Community Banking division (2008-2016). Directly oversaw the division where the fraud occurred. Known internally as the "enforcer" of cross-selling quotas.',
      currentStatus: 'Left Wells Fargo in July 2016 with a $125 million retirement package (later clawed back to ~$67 million after SEC action). OCC charged her in January 2020 with obstruction and unsafe banking practices. SEC charged her with misleading investors. In 2024, agreed to pay $3.75 million civil penalty and accepted 3-year industry ban. No criminal charges.',
      accountabilityPath: 'Tolstedt directly supervised the fraud operation. She received $125 million while 5,300 employees below her were fired for following her directives. Criminal investigation for wire fraud, bank fraud, and obstruction. Constructive trust on remaining compensation.',
      obstacles: [
        'No criminal charges',
        'Civil settlements with regulators may limit further action',
        'Argues she didn\'t know about specific unauthorized accounts',
      ],
    },
    {
      name: 'Tim Sloan',
      role: 'COO then CEO (2016-2019). Promoted to CEO after Stumpf\'s resignation. Oversaw continued problems and inadequate remediation.',
      currentStatus: 'Resigned March 2019 amid continued congressional criticism that Wells Fargo had not sufficiently reformed. No regulatory action. No criminal charges. Retained tens of millions in compensation.',
      accountabilityPath: 'Sloan was the COO during the fraud period and was promoted to CEO afterward. Investigation into what he knew as COO. Board oversight failures.',
      obstacles: [
        'Positioned as "cleanup" CEO despite being COO during fraud',
        'No regulatory action taken',
      ],
    },
    {
      name: 'Wells Fargo Board of Directors',
      role: 'Failed in oversight duty. Did not detect or stop a fraud that lasted 14 years and involved 3.5 million accounts.',
      currentStatus: 'Several board members left. Shareholders filed derivative suits. Board commissioned independent investigation (Shearman & Sterling report). No individual board member faced personal consequences.',
      accountabilityPath: 'Board breach of fiduciary duty for failure to oversee risk management. Shareholder derivative actions. The fact that 3.5 million fraudulent accounts were opened over 14 years without board detection is prima facie evidence of oversight failure.',
      obstacles: [
        'Business judgment rule provides deference to board decisions',
        'Directors have D&O insurance',
        'Some derivative suits settled',
      ],
    },
  ],

  legalMechanisms: [
    {
      name: 'Wire Fraud',
      statute: '18 U.S.C. § 1343',
      description: 'Opening unauthorized accounts and transferring customer funds involves use of wires in furtherance of fraud. Each unauthorized account is a separate count.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years for financial institutions',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'U.S. Attorneys'],
      applicability: 'directly_applicable',
      notes: 'With 3.5 million unauthorized accounts, the potential wire fraud counts are staggering. The 10-year SOL for financial institution fraud means accounts opened as late as 2016 remain prosecutable through 2026.',
    },
    {
      name: 'Bank Fraud',
      statute: '18 U.S.C. § 1344',
      description: 'Knowingly executing a scheme to defraud a financial institution. While Wells Fargo was both perpetrator and victim, individual executives defrauded the bank\'s customers and shareholders.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'U.S. Attorneys'],
      applicability: 'directly_applicable',
      notes: 'Executives who directed the cross-selling scheme while misrepresenting its nature to the board and regulators committed bank fraud.',
    },
    {
      name: 'Constructive Trust',
      statute: 'Common law equitable remedy',
      description: 'No SOL. Executive compensation earned during the fraud period is traceable to the fraudulent activity.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      authorizedActors: ['Any court of equity'],
      applicability: 'directly_applicable',
      notes: 'Stumpf retained $100M+. Tolstedt retained ~$67M after partial clawback. Both amounts traceable to the fraud.',
    },
    {
      name: 'State Consumer Protection Statutes',
      statute: 'Varies; e.g., California Business & Professions Code § 17200 (UCL)',
      description: 'Every state has consumer protection laws that prohibit unfair business practices, fraud, and deception.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state; CA UCL: 4 years',
      reachesHeirs: true,
      authorizedActors: ['State AGs', 'Private plaintiffs'],
      applicability: 'directly_applicable',
      notes: 'Wells Fargo operated in all 50 states. The LA City Attorney was the first to take action (2015). Multiple state AG settlements followed.',
    },
    {
      name: 'Whistleblower Protection  -  Dodd-Frank',
      statute: '15 U.S.C. § 78u-6',
      description: 'Dodd-Frank provides protections and financial rewards for whistleblowers. Wells Fargo systematically retaliated against employees who reported the fraud.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years from violation, 3 years from discovery',
      reachesHeirs: true,
      authorizedActors: ['SEC', 'OSHA', 'Private whistleblowers'],
      applicability: 'directly_applicable',
      notes: 'Wells Fargo fired employees who reported the fraud to ethics hotlines. This is textbook retaliation. SEC has ordered Wells Fargo to pay $22 million to a whistleblower.',
    },
  ],

  wealthTrace: [
    {
      name: 'John Stumpf Retained Compensation',
      relationship: 'CEO who directed the fraud culture',
      transferMethod: 'Total Wells Fargo compensation estimated at $200+ million. $41M clawed back, $17.5M OCC fine. Retained $100+ million.',
      estimatedValue: '$100+ million retained',
      legalEntities: ['Personal holdings', 'Retirement accounts'],
      recoveryMechanisms: ['Constructive Trust', 'Tax Fraud Investigation', 'State AG Actions'],
    },
    {
      name: 'Carrie Tolstedt Retained Compensation',
      relationship: 'Head of division where fraud occurred',
      transferMethod: 'Left with $125M package. Clawed back approximately $58M. Paid $3.75M SEC fine. Retained approximately $63 million.',
      estimatedValue: '~$63 million retained',
      legalEntities: ['Personal holdings', 'Stock grants'],
      recoveryMechanisms: ['Constructive Trust', 'Unjust Enrichment'],
    },
    {
      name: 'Wells Fargo Corporate  -  Fines vs. Profits',
      relationship: 'Corporate entity that profited from 14 years of systematic fraud',
      transferMethod: 'Wells Fargo paid $4.5B in fines/settlements. But the bank earned $200+ billion in profits during the 2002-2016 fraud period. The fines represent approximately 2% of profits during the fraud period.',
      estimatedValue: 'Fines: $4.5B. Profits during fraud period: $200B+. Net: the fraud was extremely profitable for the bank.',
      legalEntities: ['Wells Fargo & Company (NYSE: WFC)'],
      recoveryMechanisms: ['Additional regulatory penalties', 'Asset cap continuation', 'Congressional investigation'],
    },
  ],

  authoritiesWithPower: [
    {
      name: 'Office of the Comptroller of the Currency (OCC)',
      title: 'Federal banking regulator',
      jurisdiction: 'National bank supervision',
      powers: [
        'Maintain asset cap until compliance demonstrated',
        'Pursue individual enforcement actions against executives',
        'Conduct ongoing supervisory examinations',
        'Issue cease and desist orders',
      ],
    },
    {
      name: 'Consumer Financial Protection Bureau (CFPB)',
      title: 'Federal consumer financial protection',
      jurisdiction: 'Consumer financial product regulation',
      powers: [
        'Enforce consumer protection orders',
        'Monitor Wells Fargo remediation',
        'Pursue additional enforcement for ongoing violations',
      ],
    },
    {
      name: 'Senate Banking Committee',
      title: 'U.S. Senate Committee on Banking, Housing, and Urban Affairs',
      jurisdiction: 'Banking oversight',
      powers: [
        'Investigate why no executives were criminally charged',
        'Hold oversight hearings on asset cap status',
        'Investigate whistleblower retaliation',
      ],
    },
    {
      name: 'DOJ / U.S. Attorneys',
      title: 'Federal prosecutors',
      jurisdiction: 'Criminal prosecution',
      powers: [
        'Investigate and charge individual executives for wire fraud and bank fraud',
        'Present evidence to grand jury',
        '10-year SOL for financial institution fraud extends prosecutability',
      ],
    },
  ],
  successCriteria: [
    'Criminal prosecution of senior executives, John Stumpf, Carrie Tolstedt, and others who created, maintained, and profited from the fraudulent sales quota system that produced 3.5 million fake accounts',
    'Full clawback of executive compensation earned during the fraud period, Stumpf retained $100M+ and Tolstedt approximately $63M despite directly overseeing the fraud',
    'Complete victim remediation, every customer who had an unauthorized account opened, was charged unauthorized fees, or had their credit damaged must be fully compensated with interest',
    'Maintenance of the $1.95 trillion asset cap until genuine structural reform is independently verified, not self-reported compliance theater',
    'Comprehensive whistleblower remediation, hundreds of employees were fired for refusing to meet fraudulent quotas or for reporting the fraud through internal channels. Every single one must be reinstated or compensated.',
    'Permanent prohibition on aggressive cross-selling quotas in the banking industry, the eight-account-per-customer metric that drove the fraud was industry-wide',
    'Individual criminal liability legislation ensuring executives face personal prosecution for systemic consumer fraud, not just corporate fines absorbed by shareholders',
    'Full public accounting of how long each level of management knew about the fraud before acting, the scheme ran for 14 years while 5,300 low-level employees were scapegoated',
    'Strengthened CFPB enforcement authority to prevent industry attempts to weaken the one regulatory body created specifically to protect consumers from predatory banking practices',
    'Industry-wide audit of sales practices at all major banks to determine whether the Wells Fargo model was replicated elsewhere, the culture of pressure-based cross-selling was not unique to one institution',
  ],


  actionPaths: [
    {
      role: 'citizen',
      overview: 'Wells Fargo opened 3.5 million accounts without customers\' consent. No executive went to prison. As a citizen and potentially a victim, demand accountability and check your own accounts.',
      urgency: 'standard',
      relevantMechanisms: ['State Consumer Protection Statutes', 'Whistleblower Protection  -  Dodd-Frank'],
      steps: [
        {
          step: 1,
          title: 'Check Your Accounts',
          description: 'If you were a Wells Fargo customer between 2002-2016, check for accounts you didn\'t open. Wells Fargo has a claims process, but many victims have not been contacted.',
          filingTarget: 'Wells Fargo claims: 1-800-869-3557',
          estimatedTime: '1-2 hours',
        },
        {
          step: 2,
          title: 'File CFPB Complaint',
          description: 'If you find unauthorized accounts or your credit was damaged, file a complaint with the CFPB.',
          filingTarget: 'https://www.consumerfinance.gov/complaint/',
          estimatedTime: '30 minutes',
        },
        {
          step: 3,
          title: 'Support Regulatory Reform',
          description: 'Contact your representatives to demand the asset cap remain until Wells Fargo demonstrates real reform, and to support legislation mandating individual executive accountability for corporate fraud.',
          filingTarget: 'https://www.congress.gov/members/find-your-member',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'The fraud lasted 14 years. 5,300 employees were scapegoated. No executive went to prison. The whistleblower retaliation story is particularly underreported.',
      urgency: 'high',
      relevantMechanisms: ['Whistleblower Protection  -  Dodd-Frank', 'Wire Fraud'],
      steps: [
        {
          step: 1,
          title: 'Whistleblower Retaliation Investigation',
          description: 'Hundreds of Wells Fargo employees reported the fraud through internal ethics hotlines and were fired. Some were blacklisted from the banking industry. Investigate the systematic retaliation.',
          estimatedTime: '4-6 weeks',
        },
        {
          step: 2,
          title: 'Track Remaining Victims',
          description: 'How many of the 3.5 million unauthorized account victims have actually been compensated? What\'s the full scope of the remediation?',
          estimatedTime: '2-4 weeks',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Wire fraud and bank fraud have 10-year SOL for financial institutions  -  some charges may still be available. Constructive trust on executive compensation has no SOL.',
      urgency: 'high',
      relevantMechanisms: ['Wire Fraud', 'Constructive Trust', 'State Consumer Protection Statutes'],
      steps: [
        {
          step: 1,
          title: 'Constructive Trust Action',
          description: 'File constructive trust action against executive compensation earned during the fraud period. Stumpf retained $100M+, Tolstedt ~$63M.',
          legalBasis: ['Restatement (Third) of Restitution § 55'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Whistleblower Class Action',
          description: 'Class action on behalf of employees terminated for refusing to meet fraudulent quotas or for reporting fraud.',
          legalBasis: ['15 U.S.C. § 78u-6', 'State wrongful termination law'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: '3.5 million Americans had their identities used to open fraudulent accounts. No executive went to prison. The asset cap is the strongest tool  -  maintain it. Mandate individual accountability.',
      urgency: 'high',
      relevantMechanisms: ['Wire Fraud', 'Bank Fraud'],
      steps: [
        {
          step: 1,
          title: 'Maintain Asset Cap',
          description: 'Support the OCC/Fed asset cap on Wells Fargo until genuine reform is demonstrated. The cap is the only meaningful ongoing consequence.',
          estimatedTime: 'Ongoing oversight',
        },
        {
          step: 2,
          title: 'Individual Executive Accountability Legislation',
          description: 'Introduce legislation requiring individual executives to face personal criminal liability  -  not just corporate fines  -  for systemic consumer fraud.',
          estimatedTime: 'Legislative timeline',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: '10-year SOL for financial institution fraud means some conduct remains prosecutable. Tax fraud has no SOL.',
      urgency: 'standard',
      relevantMechanisms: ['Wire Fraud', 'Bank Fraud'],
      steps: [
        {
          step: 1,
          title: 'Individual Executive Investigation',
          description: 'Investigate Stumpf, Tolstedt, and other senior executives for wire fraud, bank fraud, and obstruction. 10-year SOL extends to 2026 for the latest conduct.',
          legalBasis: ['18 U.S.C. § 1343', '18 U.S.C. § 1344'],
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Whistleblower Retaliation Investigation',
          description: 'Investigate the systematic firing of employees who reported the fraud through internal ethics channels. Document the pattern of retaliation and refer for prosecution under Dodd-Frank whistleblower protections.',
          legalBasis: ['15 U.S.C. § 78u-6'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Identity Theft Prosecution',
          description: 'Opening accounts in customers\' names without consent constitutes identity theft. Investigate whether the volume of unauthorized account openings supports federal identity theft charges against executives who mandated the quotas.',
          legalBasis: ['18 U.S.C. § 1028'],
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Wells Fargo\'s culture required fundamental change. The asset cap is the most effective regulatory tool. Whistleblower protection must be strengthened.',
      urgency: 'high',
      relevantMechanisms: ['State Consumer Protection Statutes', 'Whistleblower Protection  -  Dodd-Frank'],
      steps: [
        {
          step: 1,
          title: 'Conditional Asset Cap Enforcement',
          description: 'Maintain the $1.95 trillion asset cap until Wells Fargo demonstrates structural cultural reform, not just compliance theater. Require independent third-party verification.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Industry-Wide Sales Practice Audit',
          description: 'Conduct examinations of sales quota practices at all major banks. The Wells Fargo model of aggressive cross-selling quotas was an industry pattern. Identify and prohibit metrics that incentivize unauthorized account creation.',
          estimatedTime: '12-18 months',
        },
        {
          step: 3,
          title: 'Whistleblower Channel Integrity Review',
          description: 'Audit internal whistleblower reporting systems at major financial institutions. Ensure reports are independently reviewed and that reporters are protected from retaliation. The Wells Fargo ethics hotline was a dead end for employees who used it.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
