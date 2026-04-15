import type { AccountabilityData } from '@/types/accountability';

export const agriculturalMonopolyAccountability: AccountabilityData = {
  investigationSlug: 'agricultural-monopoly',
  crimeSummary: 'A handful of corporations have captured the American food system through monopoly control of meatpacking (Big Four control 85% of beef), seed genetics (four companies control 60%+ of global seed sales), and agricultural inputs. Simultaneous billionaire and institutional farmland acquisition displaces working farmers. Industry uses captive supply manipulation, patent enforcement against seed-saving, contract farming traps, and subsidy capture to extract wealth from farmers and consumers while externalizing environmental destruction to rural communities.',
  totalHarm: 'Over $200 billion in annual monopoly rents from meatpacking concentration; $130 billion+ in misdirected farm subsidies (2018-2023); seed prices tripled since 1995; $520 billion in farm debt; $1.1 trillion annual diet-related disease costs; Ogallala Aquifer depletion threatening 30% of U.S. agricultural land; Gulf dead zone up to 8,776 square miles; 1.7 billion tons annual topsoil loss',
  victimsAffected: 'Approximately 2 million American farmers facing below-cost-of-production prices and record bankruptcies; 330+ million American consumers paying monopoly-inflated food prices; rural communities devastated by CAFO pollution and economic decline; farming families experiencing suicide crisis (3.5x national average); global food sovereignty undermined by subsidized U.S. commodity dumping',

  primaryTargets: [
    {
      name: 'Big Four Meatpackers (Tyson, JBS, Cargill, National Beef)',
      role: 'Control 85% of U.S. beef processing, 66% of pork, 54% of poultry; use captive supply and market manipulation to suppress farmer prices while raising consumer prices',
      currentStatus: 'Pilgrim\'s Pride (JBS subsidiary) convicted of chicken price-fixing; Tyson settled for $221.5M; DOJ antitrust investigation ongoing; structural monopoly unchanged',
      accountabilityPath: 'DOJ antitrust enforcement under Sherman Act and Packers and Stockyards Act; mandatory minimum cash market requirements; structural divestiture of concentrated processing capacity',
      obstacles: [
        'North American Meat Institute lobbying against all reforms',
        'American Farm Bureau Federation opposing antitrust enforcement',
        'Revolving door between USDA leadership and agribusiness',
        'Packers and Stockyards Division severely underfunded and understaffed',
        'Legal challenges to every USDA rulemaking under P&S Act'
      ]
    },
    {
      name: 'Bayer/Monsanto',
      role: 'Built and maintains seed patent monopoly controlling 80%+ of U.S. corn seed market and 93% of soybean genetics; sued 147 farmers for seed saving; Roundup herbicide dual monopoly',
      currentStatus: '$63B Monsanto acquisition completed 2018; four companies now control 60%+ of global seed sales; patent enforcement ongoing; $10B+ Roundup cancer settlement fund separate',
      accountabilityPath: 'FTC challenge to seed market concentration; patent reform limiting utility patents on seeds; farmer seed saving exemptions; antitrust review of Bayer-Monsanto merger effects',
      obstacles: [
        'Supreme Court precedent in Bowman v. Monsanto (2013) upholds seed patents',
        'International trade agreements protect patent holders',
        'Seed company cross-licensing agreements create barriers to new competition',
        'Enormous litigation resources to enforce patents against individual farmers'
      ]
    },
    {
      name: 'Bill Gates / Cascade Investment LLC',
      role: 'Largest private U.S. farmland owner with 269,000+ acres across 18 states; purchases through network of LLCs making tracking difficult; part of broader institutional land grab from working farmers',
      currentStatus: 'Continuing to acquire farmland; no legal restrictions on billionaire farmland accumulation in most states; promotes industrial agriculture through Gates Foundation',
      accountabilityPath: 'State corporate farming restrictions; farmland ownership transparency requirements; foreign and institutional ownership limits; first-right-of-refusal for working farmers',
      obstacles: [
        'LLC anonymity laws prevent tracking beneficial ownership',
        'No federal limits on farmland concentration',
        'Gates Foundation philanthropy creates positive public image conflicting with accountability',
        'Institutional investors (TIAA-CREF, pension funds) also accumulate farmland at scale'
      ]
    }
  ],

  legalMechanisms: [
    {
      name: 'Packers and Stockyards Act Enforcement',
      statute: '7 U.S.C. 181-229b',
      description: 'Federal law specifically prohibiting unfair, deceptive, and monopolistic practices in livestock, poultry, and meat industries; provides direct authority to regulate meatpacker conduct',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for most violations; ongoing conduct extends limitation',
      reachesHeirs: false,
      authorizedActors: ['USDA Packers and Stockyards Division', 'DOJ Antitrust Division', 'Affected farmers through private right of action'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Sherman Antitrust Act',
      statute: '15 U.S.C. 1-7',
      description: 'Prohibits monopolization and conspiracies in restraint of trade; basis for criminal prosecution of chicken price-fixing and potential challenge to meatpacking concentration',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years criminal; 4 years civil (treble damages)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'State attorneys general', 'Private plaintiffs (treble damages)'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Clayton Act Merger Review',
      statute: '15 U.S.C. 12-27',
      description: 'Prohibits mergers and acquisitions that substantially lessen competition; applicable to challenge past and future agricultural industry consolidation',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'FTC', 'State attorneys general'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'State Corporate Farming Laws',
      statute: 'Various state statutes (ND, SD, NE, IA, KS, MN, MO, OK, WI)',
      description: 'Nine states have or had anti-corporate farming laws restricting corporate ownership of farmland; provide model for federal legislation limiting institutional farmland acquisition',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['State legislatures', 'State attorneys general', 'Affected farming communities'],
      applicability: 'directly_applicable' as const,
      notes: 'Some laws weakened by industry lobbying; constitutional challenges based on Commerce Clause'
    },
    {
      name: 'Right to Repair Legislation',
      statute: 'Various state laws; proposed federal legislation',
      description: 'State and proposed federal laws requiring equipment manufacturers to provide repair tools, manuals, and software to farmers and independent repair shops',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['State legislatures', 'FTC enforcement', 'Congress'],
      applicability: 'potentially_applicable' as const,
      notes: 'Several states passed; federal legislation stalled; John Deere MOU with Farm Bureau lacks enforcement'
    }
  ],

  wealthTrace: [
    {
      name: 'Big Four Meatpacker Revenue',
      relationship: 'Combined revenue exceeding $200B annually from monopoly control of 85% of U.S. beef processing',
      transferMethod: 'Market power to suppress farmer prices and inflate consumer prices simultaneously',
      estimatedValue: '$200,000,000,000+ combined annual revenue',
      legalEntities: ['Tyson Foods', 'JBS S.A.', 'Cargill', 'National Beef/Marfrig'],
      recoveryMechanisms: ['DOJ antitrust enforcement', 'Packers and Stockyards Act reform', 'Mandatory cash market requirements']
    },
    {
      name: 'Seed Company Revenue from Patent Monopoly',
      relationship: 'Top four seed companies controlling 60%+ of global seed sales after consolidation',
      transferMethod: 'Patent enforcement preventing seed saving; forced annual repurchase; seed prices tripled since 1995',
      estimatedValue: '$25,000,000,000+ annual U.S. seed market',
      legalEntities: ['Bayer/Monsanto', 'Corteva (DowDuPont)', 'Syngenta/ChemChina', 'BASF'],
      recoveryMechanisms: ['Antitrust enforcement', 'Seed patent reform', 'Farmer seed saving exemptions']
    },
    {
      name: 'Gates/Institutional Farmland Holdings',
      relationship: 'Billionaires and institutional investors acquiring farmland from distressed working farmers',
      transferMethod: 'Cash purchases through LLC networks during farmer financial distress',
      estimatedValue: '$500,000,000,000+ total institutional farmland investment',
      legalEntities: ['Cascade Investment LLC (Gates)', 'TIAA-CREF/Nuveen', 'Various institutional REITs'],
      recoveryMechanisms: ['Corporate farming restrictions', 'Ownership transparency laws', 'First-right-of-refusal for working farmers']
    },
    {
      name: 'Farm Bill Subsidy Concentration',
      relationship: 'Top 10% of recipients receive 78% of federal farm subsidies; bottom 80% share less than 15%',
      transferMethod: 'Federal appropriations proportional to acreage favoring largest commodity crop operations',
      estimatedValue: '$130,000,000,000+ (2018-2023)',
      legalEntities: ['Largest commodity crop operations', 'Crop insurance companies'],
      recoveryMechanisms: ['Farm bill reform capping per-farm payments', 'Reallocation to small/mid-size operations', 'Specialty crop funding expansion']
    }
  ],

  authoritiesWithPower: [
    {
      name: 'DOJ Antitrust Division',
      title: 'Assistant Attorney General for Antitrust',
      jurisdiction: 'Federal antitrust enforcement in agricultural markets',
      powers: [
        'Sherman Act criminal prosecution of price-fixing conspiracies',
        'Clayton Act challenges to anticompetitive mergers',
        'Civil antitrust enforcement seeking structural remedies',
        'Joint investigation authority with USDA under Packers and Stockyards Act'
      ]
    },
    {
      name: 'USDA Packers and Stockyards Division',
      title: 'USDA Administrator, Agricultural Marketing Service',
      jurisdiction: 'Regulation of meatpacking and livestock markets',
      powers: [
        'Investigate unfair and deceptive practices by meatpackers',
        'Issue cease-and-desist orders',
        'Propose and enforce rules under Packers and Stockyards Act',
        'Suspend or revoke registrants engaged in unfair practices'
      ],
      contactMethod: 'USDA AMS Packers and Stockyards Division, Washington, DC'
    },
    {
      name: 'FTC',
      title: 'FTC Chair',
      jurisdiction: 'Competition enforcement and consumer protection; merger review',
      powers: [
        'Block anticompetitive mergers under Clayton Act Section 7',
        'Investigate unfair methods of competition',
        'Issue reports and recommendations on market concentration',
        'Enforce right to repair requirements'
      ]
    },
    {
      name: 'State Attorneys General',
      title: 'Various State Attorneys General (particularly agricultural states)',
      jurisdiction: 'State antitrust enforcement and consumer protection',
      powers: [
        'File state antitrust actions under state competition laws',
        'Join multistate antitrust coalitions against meatpackers',
        'Enforce state corporate farming restrictions',
        'Investigate farmland ownership transparency'
      ]
    },
    {
      name: 'Senate and House Agriculture Committees',
      title: 'Committee Chairs',
      jurisdiction: 'Farm bill authorization and agricultural policy',
      powers: [
        'Restructure farm bill subsidy system to benefit smaller operations',
        'Strengthen Packers and Stockyards Act enforcement provisions',
        'Fund USDA competition enforcement capacity',
        'Pass Cattle Price Discovery and Transparency Act'
      ]
    }
  ],

  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Support local food systems and advocate for agricultural competition reform at federal and state level',
      steps: [
        { step: 1, title: 'Buy from local farmers', description: 'Support farmers\' markets, community-supported agriculture (CSA), and direct-from-farm purchasing to build alternative food system infrastructure outside monopoly control' },
        { step: 2, title: 'Contact Congressional representatives', description: 'Demand action on the Cattle Price Discovery and Transparency Act, farm bill reform capping subsidies to large operations, and right to repair legislation' },
        { step: 3, title: 'Support state corporate farming laws', description: 'Advocate for state legislation restricting corporate and non-farmer ownership of agricultural land; support farmland ownership transparency requirements' },
        { step: 4, title: 'Educate on food monopoly', description: 'Share information about agricultural concentration with community members; food choices are economic votes that either reinforce or challenge monopoly power' }
      ],
      relevantMechanisms: ['Farm Bill advocacy', 'State corporate farming laws', 'Consumer purchasing power'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate and document agricultural monopoly impacts on farmers, consumers, and rural communities',
      steps: [
        { step: 1, title: 'Document farmer impacts', description: 'Interview farmers in contract farming arrangements, ranchers selling on captive supply markets, and communities near CAFOs about monopoly impacts' },
        { step: 2, title: 'Trace farmland ownership', description: 'Use state business registries, USDA data, and county records to trace LLC networks used by billionaires and institutional investors to acquire farmland' },
        { step: 3, title: 'FOIA government records', description: 'Request USDA Packers and Stockyards investigation files, FTC merger review documents, and EPA CAFO monitoring data through FOIA' },
        { step: 4, title: 'Follow the money', description: 'Track agribusiness lobbying expenditures, campaign contributions to Agriculture Committee members, and revolving door between USDA and industry' }
      ],
      relevantMechanisms: ['FOIA requests to USDA and DOJ', 'State corporate records', 'USDA Census of Agriculture data'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Pursue antitrust litigation and regulatory enforcement against agricultural monopoly',
      steps: [
        { step: 1, title: 'File antitrust class actions', description: 'Represent farmer classes in Sherman Act and Clayton Act litigation against meatpacker price-fixing and anticompetitive conduct in seed and equipment markets' },
        { step: 2, title: 'Packers and Stockyards complaints', description: 'File complaints with USDA Packers and Stockyards Division on behalf of farmers experiencing unfair practices from meatpackers and integrators' },
        { step: 3, title: 'Challenge farmland LLC opacity', description: 'Advocate for beneficial ownership transparency in agricultural land transactions; challenge LLC structures designed to evade corporate farming restrictions' },
        { step: 4, title: 'Support right to repair', description: 'File FTC complaints regarding John Deere and other equipment manufacturer repair restrictions; support state right to repair litigation' }
      ],
      relevantMechanisms: ['Sherman Antitrust Act', 'Clayton Act', 'Packers and Stockyards Act', 'State competition laws'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Pass legislation addressing agricultural concentration, farm subsidy reform, and farmer protections',
      steps: [
        { step: 1, title: 'Pass competition legislation', description: 'Advance the Cattle Price Discovery and Transparency Act mandating minimum cash market transactions; strengthen Packers and Stockyards Act enforcement' },
        { step: 2, title: 'Reform farm bill subsidies', description: 'Cap per-farm subsidy payments; redirect funding from commodity crop overproduction to small/mid-size farm support and specialty crop production' },
        { step: 3, title: 'Enact right to repair', description: 'Pass federal right to repair legislation requiring equipment manufacturers to provide tools, manuals, and software access to farmers' },
        { step: 4, title: 'Fund enforcement capacity', description: 'Increase USDA Packers and Stockyards Division budget and staffing; fund DOJ agricultural antitrust enforcement capacity' }
      ],
      relevantMechanisms: ['Farm Bill reauthorization', 'Packers and Stockyards Act', 'Antitrust enforcement funding'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Enforce existing agricultural competition laws and promulgate new rules protecting farmers and consumers',
      steps: [
        { step: 1, title: 'Enforce Packers and Stockyards Act', description: 'Promulgate and enforce rules prohibiting unfair practices including captive supply manipulation, tournament system retaliation, and contract termination threats' },
        { step: 2, title: 'Block anticompetitive mergers', description: 'Apply rigorous antitrust analysis to agricultural industry mergers; challenge existing concentration through post-merger review authority' },
        { step: 3, title: 'Mandate price transparency', description: 'Require public reporting of meatpacker pricing formulas, cash market transaction volumes, and captive supply percentages' },
        { step: 4, title: 'Protect farmer data rights', description: 'Establish regulations protecting farmer ownership of agricultural data generated by precision farming equipment' }
      ],
      relevantMechanisms: ['Packers and Stockyards Act', 'Sherman Act', 'Clayton Act', 'Executive Order 14036'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Investigate and prosecute agricultural price-fixing, market manipulation, and antitrust violations',
      steps: [
        { step: 1, title: 'Expand price-fixing investigations', description: 'Build on Pilgrim\'s Pride conviction to investigate and prosecute price-fixing in beef and pork processing; pursue individual executive liability' },
        { step: 2, title: 'Investigate market manipulation', description: 'Use wiretaps, document subpoenas, and cooperating witnesses to build cases against meatpacker captive supply manipulation' },
        { step: 3, title: 'Trace farmland ownership', description: 'Investigate whether LLC structures used for farmland acquisition evade state corporate farming restrictions or beneficial ownership reporting requirements' },
        { step: 4, title: 'Prosecute fraud in contract farming', description: 'Investigate whether integrator companies\' false promises about returns on poultry house investments constitute wire fraud or mail fraud' }
      ],
      relevantMechanisms: ['Sherman Act criminal provisions', 'Wire fraud statutes', 'State corporate farming laws'],
      urgency: 'high' as const
    }
  ],

  successCriteria: [
    'Four-firm concentration ratio in beef processing reduced below 50% through structural divestiture or new market entry',
    'Cattle Price Discovery and Transparency Act enacted mandating minimum cash market transaction levels',
    'Packers and Stockyards Act rules strengthened and funded to prohibit captive supply manipulation and contract farming retaliation',
    'Seed patent reform enabling farmer seed saving and reducing four-firm seed concentration below 40%',
    'Farm bill subsidy reform capping per-farm payments and redirecting support to small and mid-size operations',
    'Federal right to repair law enacted covering agricultural equipment',
    'Farmland ownership transparency laws requiring disclosure of beneficial ownership through LLC structures',
    'State corporate farming restrictions expanded and strengthened to prevent further institutional farmland concentration',
    'Median farm income from farming operations restored to positive territory',
    'Environmental justice protections enacted for communities near CAFOs with enforceable air and water quality standards'
  ]
};
