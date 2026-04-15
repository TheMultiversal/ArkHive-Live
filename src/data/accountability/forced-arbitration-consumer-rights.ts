import type { AccountabilityData } from '@/types/accountability';

export const forcedArbitrationAccountability: AccountabilityData = {
  investigationSlug: 'forced-arbitration-consumer-rights',
  crimeSummary: 'Over 826 million consumer arbitration agreements and mandatory clauses covering 60 million+ workers strip Americans of their constitutional right to a day in court. Corporations use forced arbitration with class action waivers to immunize themselves from accountability for wage theft ($15B+ annually), consumer fraud, nursing home abuse, and employment discrimination. The Supreme Court systematically expanded corporate arbitration power through Concepcion, Italian Colors, and Epic Systems. Congress overturned the CFPB\'s attempt to ban class action waivers. The system is maintained by $80M+ in annual Chamber of Commerce lobbying.',
  totalHarm: '$15 billion+ annually in wage theft enabled by arbitration barriers; $2.2 billion in class action recoveries lost per 5-year period; 826 million consumer agreements stripping court access; 60 million workers unable to collectively challenge workplace violations; incalculable harm from concealed nursing home abuse, consumer fraud, and employment discrimination',
  victimsAffected: '826 million consumer arbitration agreements affecting virtually every American who uses financial services, technology, or telecommunications; 60 million+ workers (56% of non-union private sector) who cannot sue employers for wage theft, discrimination, or harassment; elderly residents in nursing homes with forced arbitration admissions; gig economy workers misclassified through arbitration clauses',

  primaryTargets: [
    {
      name: 'U.S. Chamber of Commerce',
      role: 'Primary lobbying force defending mandatory arbitration; $80M+ annual lobbying; filed amicus briefs in every major Supreme Court arbitration case; led campaign to overturn CFPB rule',
      currentStatus: 'Continues to actively lobby against FAIR Act and any legislative reform of forced arbitration; coordinates industry opposition across financial services, tech, and healthcare sectors',
      accountabilityPath: 'Expose Chamber lobbying as against public interest; support FAIR Act to override Chamber influence; increase transparency requirements for lobbying organizations',
      obstacles: [
        '$80M+ annual lobbying budget dwarfs consumer advocacy resources',
        'Coordinates with industry-specific trade associations for unified opposition',
        'Campaign contributions ensure bipartisan resistance to reform',
        'Presents arbitration as efficient alternative rather than accountability elimination'
      ]
    },
    {
      name: 'Supreme Court Majority (Institutional)',
      role: 'Systematically expanded FAA through Concepcion, Italian Colors, and Epic Systems to preempt state consumer protections, enable class action waivers, and override worker rights under NLRA',
      currentStatus: 'Current Court majority shows no indication of reversing arbitration jurisprudence; legislative override is only realistic path',
      accountabilityPath: 'Congressional override through FAIR Act; state workarounds within federal preemption limits; potential future Court reversal through changed composition',
      obstacles: [
        'Stare decisis makes reversal of established precedent difficult',
        'Current Court composition favors business interests',
        'FAA preemption limits state-level reform options',
        'No mechanism for direct accountability for judicial decisions'
      ]
    },
    {
      name: 'Financial Services Industry',
      role: 'Spent $30M+ to overturn CFPB arbitration rule via Congressional Review Act; embeds forced arbitration in credit cards, bank accounts, loans, and all consumer financial products',
      currentStatus: 'CRA override permanently bars CFPB from issuing similar class action waiver ban; industry maintains forced arbitration across all financial products',
      accountabilityPath: 'New congressional authorization for CFPB to regulate arbitration; FAIR Act passage; state AG enforcement actions against specific unfair arbitration provisions',
      obstacles: [
        'CRA override permanently blocks CFPB rulemaking on class action waivers',
        'Industry campaign contributions to Banking Committee members',
        'Consumer Bankers Association and ABA coordinate opposition',
        'Argument that arbitration is faster and cheaper than litigation'
      ]
    }
  ],

  legalMechanisms: [
    {
      name: 'FAIR Act (Forced Arbitration Injustice Repeal Act)',
      statute: 'Proposed legislation (introduced every Congress since 2007)',
      description: 'Would ban pre-dispute mandatory arbitration in consumer, employment, antitrust, and civil rights cases; most comprehensive legislative solution',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'President'],
      applicability: 'requires_new_action' as const,
      notes: 'Has never received Senate floor vote despite bipartisan support; blocked by business lobby opposition to key committee members'
    },
    {
      name: 'State Consumer Protection Statutes',
      statute: 'Various state UDAP (Unfair and Deceptive Acts and Practices) laws',
      description: 'State attorneys general may challenge specific unconscionable arbitration provisions under state consumer protection authority within limits of federal preemption',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'Varies by state (typically 3-6 years)',
      reachesHeirs: false,
      authorizedActors: ['State attorneys general', 'State consumer protection agencies'],
      applicability: 'potentially_applicable' as const,
      notes: 'Federal preemption under Concepcion limits state action but does not eliminate all state authority'
    },
    {
      name: 'EFAA Expansion (Ending Forced Arbitration Act)',
      statute: 'P.L. 117-90 (current); proposed expansion',
      description: 'Current law exempts only sexual assault and harassment claims; expansion to all employment claims, consumer disputes, and civil rights cases would significantly reduce forced arbitration',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Congress', 'President'],
      applicability: 'requires_new_action' as const
    },
    {
      name: 'FTC Unfair Practices Authority',
      statute: '15 U.S.C. 45 (FTC Act Section 5)',
      description: 'FTC has authority to challenge unfair methods of competition and unfair or deceptive acts; could potentially be used to challenge specific forced arbitration practices as unfair',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FTC'],
      applicability: 'potentially_applicable' as const,
      notes: 'FTC has not used Section 5 authority against forced arbitration; would face legal challenges'
    }
  ],

  wealthTrace: [
    {
      name: 'Corporate Retention from Class Action Immunity',
      relationship: 'Corporations retain billions that would be returned to consumers and workers through class action litigation',
      transferMethod: 'Class action waivers in arbitration clauses prevent aggregation of claims; individual arbitration is economically irrational for small claims',
      estimatedValue: '$15,000,000,000+ annually in wage theft alone; additional billions in consumer fraud',
      legalEntities: ['Major employers', 'Financial institutions', 'Tech platforms', 'Nursing home chains'],
      recoveryMechanisms: ['FAIR Act passage', 'CFPB rulemaking restoration', 'State AG enforcement']
    },
    {
      name: 'Arbitration Industry Revenue',
      relationship: 'Private arbitration firms profit from system biased toward their repeat corporate clients',
      transferMethod: 'Repeat-player corporations select arbitrators from firms incentivized to issue pro-corporate rulings',
      estimatedValue: '$2,000,000,000+ annual industry revenue',
      legalEntities: ['American Arbitration Association', 'JAMS', 'Other private arbitration firms'],
      recoveryMechanisms: ['Mandatory random arbitrator assignment', 'Public outcome reporting requirements', 'Fee-shifting provisions']
    },
    {
      name: 'Lobbying Investment Returns',
      relationship: 'Business interests invest $100M+ annually in lobbying to maintain forced arbitration, generating billions in avoided liability',
      transferMethod: 'Direct lobbying, campaign contributions, and amicus brief campaigns',
      estimatedValue: '$100,000,000+ annual lobbying investment; billions in avoided accountability',
      legalEntities: ['U.S. Chamber of Commerce', 'Financial trade associations', 'Industry lobbying groups'],
      recoveryMechanisms: ['Campaign finance reform', 'Lobbying disclosure', 'Public pressure campaigns']
    }
  ],

  authoritiesWithPower: [
    {
      name: 'U.S. Congress',
      title: 'Senate and House Judiciary Committees',
      jurisdiction: 'Legislative authority to amend or override Federal Arbitration Act and Supreme Court arbitration jurisprudence',
      powers: [
        'Pass FAIR Act banning pre-dispute mandatory arbitration',
        'Expand EFAA beyond sexual assault/harassment to all claims',
        'Restore CFPB authority to regulate arbitration in financial services',
        'Mandate arbitration transparency and outcome reporting'
      ]
    },
    {
      name: 'CFPB',
      title: 'CFPB Director',
      jurisdiction: 'Consumer financial product regulation; limited by CRA override on class action waiver rules',
      powers: [
        'Study and publish arbitration outcome data',
        'Regulate specific arbitration practices not covered by CRA override',
        'Enforce existing consumer financial protection laws',
        'Refer patterns of misconduct to DOJ and state AGs'
      ],
      contactMethod: 'CFPB, 1700 G Street NW, Washington, DC 20552'
    },
    {
      name: 'State Attorneys General',
      title: 'Various State Attorneys General',
      jurisdiction: 'State consumer protection enforcement within federal preemption limits',
      powers: [
        'Challenge specific unconscionable arbitration provisions under state UDAP laws',
        'Investigate patterns of consumer harm concealed by arbitration confidentiality',
        'Join multistate coalitions to challenge arbitration abuses',
        'Support state legislation restricting forced arbitration where not federally preempted'
      ]
    },
    {
      name: 'FTC',
      title: 'FTC Chair',
      jurisdiction: 'Unfair methods of competition and unfair or deceptive acts or practices',
      powers: [
        'Challenge unfair arbitration practices under Section 5 authority',
        'Study and report on arbitration industry practices',
        'Coordinate with CFPB on consumer protection enforcement',
        'Issue policy statements on forced arbitration as unfair practice'
      ]
    }
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Demand legislative reform of forced arbitration and support organizations working on access to justice',
      steps: [
        { step: 1, title: 'Contact legislators on FAIR Act', description: 'Call and write senators and representatives demanding a floor vote on the FAIR Act; specifically ask if they support banning pre-dispute mandatory arbitration' },
        { step: 2, title: 'Read terms before signing', description: 'Review arbitration clauses in employment contracts and consumer agreements; negotiate removal where possible; document which companies impose forced arbitration' },
        { step: 3, title: 'Support consumer organizations', description: 'Donate to and volunteer with the American Association for Justice, National Employment Law Project, and other organizations fighting forced arbitration' },
        { step: 4, title: 'File complaints', description: 'When harmed by a company using forced arbitration, file complaints with CFPB, FTC, and state AG in addition to any arbitration proceeding; create public record even when arbitration is private' }
      ],
      relevantMechanisms: ['FAIR Act advocacy', 'CFPB complaint system', 'State consumer protection'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate and expose the hidden costs and corporate benefits of the forced arbitration system',
      steps: [
        { step: 1, title: 'Obtain arbitration data', description: 'Collect arbitration outcome data from AAA, JAMS, and state-mandated disclosures (California requires some reporting); analyze win rates, award amounts, and repeat-player effects' },
        { step: 2, title: 'Document concealed harm', description: 'Find and tell stories of consumers and workers harmed by forced arbitration: nursing home abuse victims, wage theft victims, harassment survivors excluded from EFAA' },
        { step: 3, title: 'Follow the lobbying money', description: 'Track Chamber of Commerce and financial industry lobbying expenditures specifically targeting arbitration reform; map campaign contributions to key committee members' },
        { step: 4, title: 'Compare international standards', description: 'Report on how EU, Canada, and other democracies protect consumers from forced arbitration to highlight U.S. as outlier' }
      ],
      relevantMechanisms: ['State arbitration disclosure laws', 'Lobbying disclosure records', 'CFPB complaint database'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Challenge forced arbitration through litigation, regulatory complaints, and support for legislative reform',
      steps: [
        { step: 1, title: 'Challenge unconscionable clauses', description: 'Identify and litigate against arbitration clauses that are procedurally or substantively unconscionable under state law within federal preemption limits' },
        { step: 2, title: 'Mass individual arbitration', description: 'File mass individual arbitration demands (as in DoorDash) to impose costs on corporations that require individual arbitration; force companies to bear the expense of their own system' },
        { step: 3, title: 'State AG coordination', description: 'Work with state attorneys general to identify patterns of consumer harm concealed by arbitration confidentiality and pursue public enforcement actions' },
        { step: 4, title: 'Public Interest Litigation', description: 'Develop test cases challenging expansion of FAA to new contexts; preserve and extend EFAA to additional claim types through creative litigation' }
      ],
      relevantMechanisms: ['State unconscionability doctrine', 'EFAA', 'State consumer protection statutes'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Pass comprehensive forced arbitration reform through the FAIR Act and related legislation',
      steps: [
        { step: 1, title: 'Advance FAIR Act', description: 'Bring the FAIR Act to a floor vote in both chambers; ban pre-dispute mandatory arbitration in consumer, employment, antitrust, and civil rights cases' },
        { step: 2, title: 'Restore CFPB authority', description: 'Pass new legislation explicitly authorizing CFPB to regulate arbitration clauses in consumer financial products, overriding the CRA limitation' },
        { step: 3, title: 'Mandate arbitration transparency', description: 'Require public reporting of all arbitration outcomes including win rates, award amounts, arbitrator identities, and patterns by company' },
        { step: 4, title: 'Reinstate nursing home protections', description: 'Legislatively ban pre-dispute arbitration in Medicare and Medicaid participating facilities to protect elderly and disabled residents' }
      ],
      relevantMechanisms: ['FAIR Act', 'CFPB reauthorization', 'Medicare/Medicaid conditions of participation'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Use existing authority to challenge forced arbitration practices and increase transparency',
      steps: [
        { step: 1, title: 'FTC Section 5 enforcement', description: 'Use FTC unfair practices authority to challenge specific forced arbitration provisions that are demonstrably unfair to consumers' },
        { step: 2, title: 'CFPB data collection', description: 'Expand CFPB collection and publication of arbitration outcome data to inform public and legislative debates' },
        { step: 3, title: 'CMS nursing home requirements', description: 'Reinstate CMS requirement that Medicare/Medicaid participating nursing homes cannot use pre-dispute arbitration as a condition of admission' },
        { step: 4, title: 'Coordinate enforcement', description: 'Establish interagency coordination between CFPB, FTC, DOJ, and state AGs to identify and challenge patterns of corporate misconduct concealed by arbitration confidentiality' }
      ],
      relevantMechanisms: ['FTC Act Section 5', 'CFPB authority', 'CMS conditions of participation'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Investigate corporate fraud concealed by arbitration confidentiality',
      steps: [
        { step: 1, title: 'Investigate concealed patterns', description: 'Use law enforcement subpoena power to access arbitration records identifying patterns of corporate fraud, wage theft, or abuse concealed by confidentiality provisions' },
        { step: 2, title: 'Prosecute wage theft', description: 'Develop criminal prosecution strategies for systematic wage theft by employers who use arbitration to prevent civil enforcement' },
        { step: 3, title: 'Investigate nursing home abuse', description: 'Use law enforcement investigative tools to uncover patterns of elder abuse concealed by mandatory arbitration in nursing home admissions' }
      ],
      relevantMechanisms: ['Criminal fraud statutes', 'State wage theft laws', 'Elder abuse statutes'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'FAIR Act enacted banning pre-dispute mandatory arbitration in consumer, employment, antitrust, and civil rights cases',
    'CFPB authority to regulate financial services arbitration restored by Congress',
    'Mandatory public reporting of all arbitration outcomes including win rates, amounts, and company-specific data',
    'Pre-dispute arbitration banned in Medicare/Medicaid participating nursing homes and elder care facilities',
    'EFAA expanded beyond sexual assault/harassment to cover all employment discrimination, wage theft, and retaliation claims',
    'Arbitrator selection reformed to eliminate repeat-player bias through random assignment or independent selection',
    'Class action rights preserved as default with voluntary post-dispute arbitration available as genuine alternative',
    'Wage theft recoveries through collective action restored to pre-Epic Systems levels',
    'U.S. forced arbitration practices brought into alignment with EU, Canadian, and other developed democracy standards'
  ]
};
