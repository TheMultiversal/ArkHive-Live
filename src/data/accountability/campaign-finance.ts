import type { AccountabilityData } from '@/types/accountability';

export const campaignFinanceAccountability: AccountabilityData = {
  investigationSlug: 'campaign-finance',
  crimeSummary: 'Systematic campaign finance violations weaponized to influence elections: Michael Cohen\'s $130,000 hush money payment to Stormy Daniels (directed by Trump, constituting illegal campaign contributions); NRA acting as a conduit for Russian money into American elections ($30 million+ to Trump 2016 campaign, with Maria Butina convicted as a Russian agent); illegal straw donor schemes by corporations; and the broader collapse of campaign finance enforcement after Citizens United. Specific criminal cases: Cohen pleaded guilty to campaign finance violations (2018). Trump convicted on 34 felony counts of falsifying business records to conceal the Daniels payment (May 2024). NRA treasurer Wayne LaPierre convicted of misusing $5.4 million in NRA funds (2024).',
  totalHarm: 'Electoral integrity undermined. Voters denied information material to their decisions. Foreign money infiltrated U.S. elections through the NRA. Trump\'s concealment of the Daniels payment may have affected the 2016 election outcome. NRA\'s $5.4 million in LaPierre personal spending defrauded millions of dues-paying members.',
  victimsAffected: 'American voters denied material information before elections. NRA members whose dues funded LaPierre\'s luxury lifestyle. Democratic process integrity. Campaign finance law credibility.',
  primaryTargets: [
    {
      name: 'Donald Trump',
      role: 'Directed Michael Cohen to make $130,000 payment to Stormy Daniels to suppress her story before the 2016 election. The payment was structured to conceal its true purpose through falsified business records.',
      currentStatus: 'Convicted on 34 felony counts of falsifying business records (May 2024, Manhattan DA). Sentencing pending. Simultaneously running for and won the 2024 presidential election.',
      accountabilityPath: 'Convicted. Sentencing and appeals to follow. Unprecedented situation of a convicted felon winning the presidency.',
      obstacles: ['Presidential immunity questions', 'Political polarization of accountability', 'DOJ OLC opinion against indicting a sitting president'],
    },
    {
      name: 'Wayne LaPierre',
      role: 'CEO/Executive VP of NRA for 30+ years. Misused NRA funds for personal luxury: private jets, Beverly Hills shopping sprees, yacht trips, luxury safari trips. Simultaneously, the NRA served as a conduit for Russian influence operations.',
      currentStatus: 'Found liable for $5.4 million in misspending (January 2024) by New York jury. Resigned from NRA days before trial. Ordered to repay $4.35 million.',
      accountabilityPath: 'Civil liability established. No criminal charges for the misuse. The Russian money conduit question remains largely unresolved.',
      obstacles: ['Resigned before full accountability', 'Criminal referral not pursued', 'Russia investigation incomplete regarding NRA specifically'],
    },
  ],
  legalMechanisms: [
    { name: 'Federal Election Campaign Act (FECA)', statute: '52 U.S.C. § 30101 et seq.', description: 'Limits campaign contributions and requires disclosure. Cohen violated by making excessive contribution ($130K, exceeding the individual limit). Trump convicted of falsifying records to conceal the FECA violation.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['FEC', 'DOJ'], applicability: 'directly_applicable' },
    { name: 'NY Falsifying Business Records', statute: 'NY Penal Law § 175.10', description: 'Trump convicted on 34 counts of falsifying business records in the first degree (elevated from misdemeanor because the falsification was to conceal another crime  -  the campaign finance violation).', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['Manhattan DA'], applicability: 'directly_applicable' },
    { name: 'Foreign Agent Registration / Foreign Campaign Contribution Ban', statute: '52 U.S.C. § 30121; 22 U.S.C. § 611', description: 'Prohibits foreign nationals from contributing to U.S. elections. Maria Butina convicted (2018) as a Russian agent who infiltrated the NRA. The full scope of Russian money flowing through the NRA to campaigns remains unclear.', hasStatuteOfLimitations: true, reachesHeirs: false, authorizedActors: ['DOJ', 'FEC'], applicability: 'directly_applicable' },
  ],
  wealthTrace: [
    { name: 'NRA Political Spending and Misuse', relationship: 'Donor money diverted to personal luxury and political influence', transferMethod: 'NRA spent $30+ million supporting Trump in 2016 (more than any other outside group). LaPierre diverted $5.4+ million for personal expenses. NRA accepted potentially laundered Russian funds through intermediaries. Dues-paying members\' money funded both political operations and executive lifestyles.', estimatedValue: '$30M+ political spending per cycle; $5.4M personal misuse; unknown Russian funds', legalEntities: ['NRA', 'NRA-ILA', 'Wayne LaPierre'], recoveryMechanisms: ['NY AG civil action', 'FEC enforcement', 'Member lawsuits'] },
  ],
  authoritiesWithPower: [
    { name: 'FEC', title: 'Federal Election Commission', jurisdiction: 'Campaign finance enforcement', powers: ['Investigate violations', 'Impose fines', 'Refer for prosecution  -  hamstrung by 3-3 deadlock'] },
    { name: 'DOJ', title: 'Department of Justice', jurisdiction: 'Federal criminal election law', powers: ['Prosecute campaign finance crimes', 'FARA enforcement', 'Public integrity cases'] },
  ],
  successCriteria: [
    'FEC structural reform -- odd number of commissioners with independent enforcement arm and mandatory investigation triggers, ending the 3-3 partisan deadlock that ensures non-enforcement',
    'Full investigation of Russian money flowing through the NRA and other intermediary organizations into American elections -- the Butina conviction revealed one pipeline, but the full scope remains unexamined',
    'Trump sentencing and appellate resolution establishing binding precedent that campaign finance concealment through business record falsification is criminal conduct -- the 34-count conviction must create lasting legal consequences',
    'NRA organizational reform or dissolution and reconstitution under new leadership -- $5.4 million in LaPierre personal misuse was committed while the organization served as a conduit for foreign influence operations',
    'DISCLOSE Act passage requiring disclosure of all donors contributing $10,000+ to organizations engaged in election spending -- dark money undermines the informed electorate that is the foundation of democratic governance',
    'Foreign campaign contribution ban enforcement strengthened with mandatory due diligence requirements for organizations making election expenditures -- the current honor system is laughable',
    'Complete public accounting of every NRA expenditure: political spending by recipient, LaPierre personal spending by category, and all foreign-sourced funds by origin country and intermediary',
    'Legislation restoring meaningful campaign contribution limits that survive judicial review -- if Citizens United cannot be overturned, develop alternative frameworks that provide transparency and accountability within the current constitutional framework',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'A presidential candidate was convicted of 34 felonies for concealing hush money to hide information from voters. The NRA funneled Russian money into American elections.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Election Campaign Act (FECA)', 'Foreign Agent Registration / Foreign Campaign Contribution Ban'],
      steps: [
        {
          step: 1,
          title: 'Demand FEC Reform',
          description: 'The FEC is designed to deadlock. Contact your representatives to demand structural reform: odd number of commissioners, independent enforcement arm, mandatory investigation triggers for credible complaints.',
          estimatedTime: '30 minutes',
          filingTarget: 'Your House and Senate representatives; Senate Rules Committee',
          templateText: 'Dear [Representative/Senator],\n\nA president was convicted of 34 felonies for concealing payments to hide information from voters. The NRA funneled Russian money into elections through Maria Butina. Wayne LaPierre stole $5.4 million from NRA members. The FEC did nothing -- because it is structurally designed to do nothing.\n\nI urge you to:\n1. Reform the FEC with an odd number of commissioners\n2. Pass the DISCLOSE Act\n3. Strengthen foreign money detection and enforcement\n4. Hold the NRA accountable for serving as a foreign influence conduit\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Follow the Money',
          description: 'Use OpenSecrets.org and FEC.gov to track campaign finance data. Identify which organizations fund your representatives, what those organizations advocate for, and how your representatives vote on those issues. Make the corruption pipeline visible.',
          estimatedTime: '1 hour',
        },
        {
          step: 3,
          title: 'Support Campaign Finance Reform Organizations',
          description: 'Support organizations fighting for campaign finance reform: Campaign Legal Center (filing FEC complaints), End Citizens United (electoral reform), Issue One (bipartisan reform). These organizations do the work that the FEC refuses to do.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Trace dark money flows. The NRA-Russia connection remains incompletely investigated. The full scope of foreign money in American elections is unknown.',
      urgency: 'immediate',
      relevantMechanisms: ['Foreign Agent Registration / Foreign Campaign Contribution Ban', 'Federal Election Campaign Act (FECA)'],
      steps: [
        {
          step: 1,
          title: 'NRA-Russia Complete Investigation',
          description: 'Investigate the full scope of Russian money flowing into American politics through the NRA and other intermediaries. Butina was convicted but the money pipeline she facilitated has not been fully traced. Where did the foreign money go? Which campaigns benefited?',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'LaPierre Spending Documentation',
          description: 'Document the full scope of Wayne LaPierre\'s personal spending of NRA funds: private jets, Beverly Hills shopping sprees, yacht trips, safari vacations. Connect the timeline of his personal spending to NRA political spending decisions and Russian money inflows.',
          estimatedTime: '3-6 months',
        },
        {
          step: 3,
          title: 'Hush Money Conviction Impact',
          description: 'Document the legal and political impact of the Trump hush money conviction: sentencing, appeals, and whether the 34-count conviction creates precedent for future campaign finance concealment prosecutions. Track how the justice system handles a convicted president.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Use the Trump conviction to establish precedent. Push state-level transparency litigation. FARA enforcement.',
      urgency: 'high',
      relevantMechanisms: ['NY Falsifying Business Records', 'Federal Election Campaign Act (FECA)', 'Foreign Agent Registration / Foreign Campaign Contribution Ban'],
      steps: [
        {
          step: 1,
          title: 'Conviction Precedent Development',
          description: 'Use the Trump conviction as precedent for prosecuting campaign finance concealment as criminal falsification in other jurisdictions. Develop prosecution frameworks based on People v. Trump for state and federal enforcement.',
          legalBasis: ['People v. Trump (NY 2024)', 'State falsification statutes', '52 U.S.C. Section 30109 (FECA enforcement)'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'NRA Member Class Action',
          description: 'Represent NRA members in class action litigation for the misuse of their dues. LaPierre\'s $5.4 million in personal spending was a breach of fiduciary duty to the organization\'s members. Members deserve full recovery.',
          legalBasis: ['NY Not-for-Profit Corporation Law', 'Breach of fiduciary duty', 'Unjust enrichment'],
          estimatedTime: '12-24 months',
        },
        {
          step: 3,
          title: 'Foreign Money Civil Actions',
          description: 'File civil actions under FARA and FECA against organizations that served as conduits for foreign money in American elections. Use discovery to map the full foreign money pipeline that enforcement agencies have failed to trace.',
          legalBasis: ['22 U.S.C. Section 618 (FARA civil action)', '52 U.S.C. Section 30121 (foreign contribution ban)'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Reform FEC. Pass DISCLOSE Act. Close foreign money loopholes. Enforce existing law.',
      urgency: 'immediate',
      relevantMechanisms: ['Federal Election Campaign Act (FECA)', 'Foreign Agent Registration / Foreign Campaign Contribution Ban'],
      steps: [
        {
          step: 1,
          title: 'FEC Structural Reform',
          description: 'Reform FEC to enable enforcement: odd number of commissioners (5 recommended), independent enforcement arm with prosecutorial authority, mandatory investigation triggers for complaints meeting evidentiary threshold, and public reporting of deadlocked cases.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Foreign Money Loophole Closure',
          description: 'Pass legislation closing the loopholes that allow foreign money to enter American elections through intermediary organizations. Require enhanced due diligence for 501(c)(4) organizations making election expenditures. Ban straw donor schemes.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'NRA Investigation',
          description: 'Hold congressional hearings investigating the NRA\'s role as a conduit for Russian money into American elections. Subpoena NRA financial records. Determine the full scope of foreign influence operations through the organization.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'The NRA-Russia money pipeline remains inadequately investigated. Complete the investigation.',
      urgency: 'high',
      relevantMechanisms: ['Foreign Agent Registration / Foreign Campaign Contribution Ban', 'Federal Election Campaign Act (FECA)'],
      steps: [
        {
          step: 1,
          title: 'NRA-Russia Pipeline Investigation',
          description: 'Fully investigate the scope of foreign money flowing through the NRA and similar organizations into U.S. elections. Butina\'s conviction established the existence of the pipeline -- now trace every dollar that flowed through it.',
          estimatedTime: '12-24 months',
        },
        {
          step: 2,
          title: 'Straw Donor Prosecution',
          description: 'Proactively investigate and prosecute straw donor schemes used to circumvent contribution limits and foreign contribution bans. Enhanced financial intelligence analysis can identify patterns consistent with straw donations.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Campaign Finance Pattern Analysis',
          description: 'Develop and deploy financial intelligence tools for identifying campaign finance violations: unusual contribution patterns, potential bundling, timing correlations between contributions and official actions. Modern campaign finance crime requires modern enforcement tools.',
          estimatedTime: '6-12 months tool development',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Strengthen foreign contribution detection. Require nonprofit donor disclosure for election-related spending.',
      urgency: 'high',
      relevantMechanisms: ['Foreign Agent Registration / Foreign Campaign Contribution Ban', 'Federal Election Campaign Act (FECA)'],
      steps: [
        {
          step: 1,
          title: 'Foreign Money Due Diligence',
          description: 'Implement enhanced due diligence requirements for 501(c)(4) organizations making election-related expenditures. Require annual certification that no foreign funds are commingled with election spending. Make the certification a criminal representation.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Political Nonprofit Auditing',
          description: 'IRS should audit 501(c)(4) organizations whose primary activity is election spending. Organizations that exist to funnel anonymous money into elections are not operating for "social welfare" as required for tax-exempt status.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Real-Time Expenditure Reporting',
          description: 'Require real-time electronic reporting of all election-related expenditures above $1,000. End the current system where spending data is filed weeks or months after elections, when the information is useless for voter decision-making.',
          estimatedTime: '6-12 months',
        },
      ],
    },
  ],
};
