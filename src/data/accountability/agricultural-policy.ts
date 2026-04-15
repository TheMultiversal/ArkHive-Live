import type { AccountabilityData } from '@/types/accountability';

export const agriculturalPolicyAccountability: AccountabilityData = {
  investigationSlug: 'agricultural-policy',
  crimeSummary: 'Systematic capture of federal agricultural policy by corporate agribusiness resulting in monopolistic control of food production, destruction of family farms, racial discrimination by USDA, environmental devastation from industrial farming, and public health crises from antibiotic overuse and pesticide exposure.',
  totalHarm: '$1.5+ trillion in misdirected subsidies over 3 decades; $10.9B in glyphosate cancer settlements; 2.8 million antibiotic-resistant infections annually; 35,000+ annual deaths from resistant bacteria; displacement of 2+ million Black farmers; contamination of 750+ waterways in Iowa alone',
  victimsAffected: '330 million Americans consuming industrially produced food; Black farmers reduced from 14% to under 2% of farmers; ranchers receiving 37 cents of each consumer dollar (down from 60+ cents); meatpacking workers with 260+ COVID deaths; communities with contaminated water; Gulf fishing industry devastated by Dead Zone',
  primaryTargets: [
    {
      name: 'Bayer-Monsanto',
      role: 'Monopolized 80% of U.S. corn seed and 93% of soybean markets; ghostwrote EPA safety studies; product caused cancer in thousands',
      currentStatus: 'Operating globally after $63B Bayer acquisition; paying $10.9B in settlements while glyphosate remains registered for use',
      accountabilityPath: 'Antitrust enforcement to force divestiture of seed monopoly; EPA regulatory review of glyphosate registration based on independent studies; patent reform to limit seed patent scope',
      obstacles: ['$80M+ annual industry lobbying', 'Regulatory capture at EPA and USDA', 'Supreme Court precedent protecting seed patents (Bowman v. Monsanto)']
    },
    {
      name: 'Big Four Meatpackers (JBS, Tyson, Cargill, National Beef)',
      role: 'Control 85% of U.S. beef market through functional cartel; price-fixing; worker exploitation; capturing 63% of beef dollar',
      currentStatus: 'JBS subsidiary Pilgrim\'s Pride pleaded guilty to price-fixing ($107M fine); DOJ investigations ongoing; Tyson executives faced minimal consequences for COVID betting',
      accountabilityPath: 'DOJ criminal antitrust prosecution; Packers and Stockyards Act enforcement; Congressional legislation mandating minimum cattle market transparency',
      obstacles: ['Consolidated market power limits rancher alternatives', 'Workers fear retaliation for reporting', 'Industry political donations to both parties']
    },
    {
      name: 'USDA Leadership (Systemic)',
      role: 'Decades of racial discrimination against Black farmers; revolving door with regulated industry; failure to enforce competition and safety laws',
      currentStatus: '$2.3B in Pigford settlements paid but structural discrimination unremedied; revolving door continues under all administrations',
      accountabilityPath: 'Congressional oversight requiring structural reforms; independent inspector general investigations; diversifying county committee composition; mandatory conflict-of-interest cooling periods',
      obstacles: ['Agency cultural resistance to reform', 'Political appointment system perpetuates industry ties', 'Local county committee power structures']
    }
  ],
  legalMechanisms: [
    {
      name: 'Packers and Stockyards Act Enforcement',
      statute: '7 U.S.C. 181-229c',
      description: 'Federal law prohibiting unfair, deceptive, and anticompetitive practices in livestock and poultry markets; chronically underenforced by USDA',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for civil actions',
      reachesHeirs: false,
      authorizedActors: ['USDA Grain Inspection, Packers and Stockyards Administration', 'DOJ Antitrust Division', 'State attorneys general'],
      applicability: 'directly_applicable' as const,
      notes: 'Biden administration issued new rules strengthening enforcement but implementation depends on USDA commitment'
    },
    {
      name: 'Sherman Antitrust Act',
      statute: '15 U.S.C. 1-2',
      description: 'Prohibits monopolization and conspiracies in restraint of trade; applicable to seed market concentration and meatpacking cartel behavior',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years for civil; 5 years for criminal',
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'FTC', 'State attorneys general', 'Private litigants (treble damages)'],
      applicability: 'directly_applicable' as const,
      notes: 'DOJ has launched investigations into meatpacking consolidation but historically failed to bring major cases'
    },
    {
      name: 'Clean Water Act Enforcement',
      statute: '33 U.S.C. 1251-1387',
      description: 'Federal law regulating discharge of pollutants into waters; EPA has largely exempted agricultural runoff as "nonpoint source" pollution despite devastating water quality impacts',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years for civil penalties',
      reachesHeirs: false,
      authorizedActors: ['EPA', 'State environmental agencies', 'Citizen suit provisions (33 U.S.C. 1365)'],
      applicability: 'potentially_applicable' as const,
      notes: 'Citizen suit provisions allow any person to sue EPA for failure to enforce; CAFO permits remain underenforced'
    },
    {
      name: 'Civil Rights Act / Pigford Framework',
      statute: '42 U.S.C. 2000d; 7 U.S.C. 2279',
      description: 'Prohibits racial discrimination in federally funded programs; basis for Pigford settlements establishing USDA discrimination liability',
      hasStatuteOfLimitations: true,
      limitationPeriod: '180 days for EEOC complaint; 2 years for Section 1983',
      reachesHeirs: true,
      authorizedActors: ['DOJ Civil Rights Division', 'USDA Office of Civil Rights', 'Private litigants', 'Members of Congress (oversight)'],
      applicability: 'directly_applicable' as const,
      notes: 'Pigford I ($1.06B) and Pigford II ($1.25B) settlements established precedent but structural reforms remain incomplete'
    }
  ],
  wealthTrace: [
    {
      name: 'Bayer AG (Monsanto)',
      relationship: 'Controls dominant global seed and agrochemical markets through $63B acquisition',
      transferMethod: 'Seed patent monopoly, agrochemical sales, IP enforcement against farmers',
      estimatedValue: '$63 billion acquisition value; multi-billion annual revenue from seed patents and chemical sales',
      legalEntities: ['Bayer AG', 'Monsanto Company', 'The Climate Corporation'],
      recoveryMechanisms: ['Antitrust divestiture orders', 'Patent reform limiting seed patent scope', 'EPA glyphosate regulatory action']
    },
    {
      name: 'Big Four Meatpackers',
      relationship: 'JBS, Tyson, Cargill, and National Beef control 85% of beef market',
      transferMethod: 'Monopolistic market power capturing 63% of beef dollar (up from ~40% in 1970s)',
      estimatedValue: 'Combined annual revenue exceeding $200 billion',
      legalEntities: ['JBS S.A.', 'Tyson Foods Inc.', 'Cargill Inc.', 'Marfrig Global Foods'],
      recoveryMechanisms: ['DOJ antitrust enforcement and criminal prosecution', 'Packers and Stockyards Act enforcement', 'Mandatory market transparency legislation']
    },
    {
      name: 'Subsidy-Capturing Mega-Farms',
      relationship: 'Top 10% of farms receiving 77% of $16B in annual commodity payments',
      transferMethod: 'Production-linked subsidy formulas that reward scale over efficiency or sustainability',
      estimatedValue: '$12+ billion annually captured by top 10% of recipients',
      legalEntities: ['Major commodity operations', 'Agricultural investment entities'],
      recoveryMechanisms: ['Farm Bill reform with per-operation payment caps', 'Means-testing subsidy eligibility', 'Redirecting subsidies to conservation and beginning farmer programs']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Attorney General',
      title: 'U.S. Attorney General',
      jurisdiction: 'Federal antitrust enforcement',
      powers: ['Bring criminal and civil antitrust cases against meatpackers and seed monopolies', 'Investigate price-fixing conspiracies', 'Block future agricultural mergers that increase concentration'],
      contactMethod: 'DOJ Antitrust Division: (202) 514-2401'
    },
    {
      name: 'EPA Administrator',
      title: 'Administrator, Environmental Protection Agency',
      jurisdiction: 'Pesticide registration and water pollution enforcement',
      powers: ['Revoke or restrict glyphosate registration', 'Enforce Clean Water Act against CAFOs', 'Require independent safety studies instead of manufacturer-submitted data'],
      contactMethod: 'EPA Office of Pesticide Programs: (703) 305-7090'
    },
    {
      name: 'Senate Agriculture Committee',
      title: 'Chair, Senate Committee on Agriculture, Nutrition, and Forestry',
      jurisdiction: 'Farm Bill authorization, USDA oversight',
      powers: ['Restructure subsidy programs in Farm Bill', 'Mandate USDA structural reforms', 'Cap per-operation subsidy payments', 'Strengthen Packers and Stockyards Act enforcement provisions'],
      contactMethod: 'Senate Agriculture Committee: (202) 224-2035'
    },
    {
      name: 'FDA Commissioner',
      title: 'Commissioner, Food and Drug Administration',
      jurisdiction: 'Animal drug regulation including agricultural antibiotics',
      powers: ['Mandate restrictions on medically important antibiotics in livestock', 'Convert voluntary guidance to binding regulations', 'Require veterinary prescriptions for all agricultural antibiotic use'],
      contactMethod: 'FDA Center for Veterinary Medicine: (240) 402-7002'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Support farm policy reform through direct engagement with Farm Bill process and local food system alternatives.',
      steps: [
        {
          step: 1,
          title: 'Contact Farm Bill legislators',
          description: 'Write to your senators and representative demanding Farm Bill reforms: subsidy payment caps, Packers and Stockyards Act enforcement, and conservation program funding.',
          requirements: ['Identify your congressional representatives'],
          estimatedTime: '1-2 hours'
        },
        {
          step: 2,
          title: 'Support local food systems',
          description: 'Purchase from local farmers markets, join community-supported agriculture (CSA) programs, and support farmer cooperatives that bypass corporate monopoly control.',
          requirements: ['Research local farm direct-to-consumer options'],
          estimatedTime: 'Ongoing'
        },
        {
          step: 3,
          title: 'Engage in local zoning and water issues',
          description: 'Attend county and state hearings on CAFO permits, water quality, and agricultural zoning to advocate for environmental protections against industrial farming pollution.',
          requirements: ['Monitor local government agendas for agricultural and environmental hearings'],
          estimatedTime: '2-4 hours per hearing'
        }
      ],
      relevantMechanisms: ['Farm Bill legislative process', 'Clean Water Act citizen suits', 'State environmental permitting'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigate corporate agricultural consolidation, subsidy distribution, and environmental and health impacts of industrial farming.',
      steps: [
        {
          step: 1,
          title: 'FOIA USDA advisory committee records',
          description: 'File Freedom of Information Act requests for USDA advisory committee membership, meeting minutes, and correspondence between agency officials and industry representatives.',
          requirements: ['FOIA request preparation'],
          filingTarget: 'USDA FOIA Office',
          estimatedTime: '2-4 weeks for preparation; months for response'
        },
        {
          step: 2,
          title: 'Analyze EWG Farm Subsidy Database',
          description: 'Use the Environmental Working Group farm subsidy database to identify the largest recipients in your coverage area and trace corporate ownership structures.',
          requirements: ['Data analysis tools', 'Corporate registry access'],
          estimatedTime: '1-2 weeks'
        },
        {
          step: 3,
          title: 'Document rancher and contract farmer testimony',
          description: 'Interview cattle ranchers about meatpacking monopoly impacts and poultry contract growers about tournament system exploitation, ensuring source protection from corporate retaliation.',
          requirements: ['Source protection protocols', 'Understanding of agricultural NDA enforcement'],
          estimatedTime: '2-4 weeks'
        }
      ],
      relevantMechanisms: ['FOIA requests', 'EWG Farm Subsidy Database', 'Packers and Stockyards Act enforcement records'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Pursue antitrust litigation against agricultural monopolies and enforce environmental laws against industrial farming pollution.',
      steps: [
        {
          step: 1,
          title: 'Evaluate antitrust class action potential',
          description: 'Assess viability of private antitrust actions by ranchers against meatpacking cartel under Sherman Act Section 1, with treble damages.',
          requirements: ['Agricultural antitrust expertise', 'Economic expert witnesses'],
          legalBasis: ['15 U.S.C. 1-2 (Sherman Act)', '15 U.S.C. 15 (Clayton Act treble damages)'],
          estimatedTime: '2-5 years for complex antitrust litigation'
        },
        {
          step: 2,
          title: 'File Clean Water Act citizen suits',
          description: 'Bring citizen enforcement actions against CAFOs violating discharge permits or EPA for failure to enforce permit requirements against agricultural polluters.',
          requirements: ['Environmental law expertise', 'Water quality sampling data'],
          filingTarget: 'U.S. District Court',
          legalBasis: ['33 U.S.C. 1365 (Clean Water Act citizen suit provision)'],
          estimatedTime: '1-3 years'
        },
        {
          step: 3,
          title: 'Challenge pesticide registrations',
          description: 'Petition EPA for review of pesticide registrations based on independent scientific evidence contradicting manufacturer-submitted studies.',
          requirements: ['Environmental toxicology expertise', 'Independent scientific research'],
          filingTarget: 'EPA Office of Pesticide Programs; D.C. Circuit Court of Appeals',
          legalBasis: ['7 U.S.C. 136d (FIFRA cancellation proceedings)'],
          estimatedTime: '2-4 years for administrative and judicial proceedings'
        }
      ],
      relevantMechanisms: ['Sherman Antitrust Act', 'Clean Water Act citizen suits', 'FIFRA cancellation'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Enforce existing antitrust, environmental, and food safety laws that have been chronically underenforced against agricultural corporations.',
      steps: [
        {
          step: 1,
          title: 'Launch antitrust enforcement against meatpackers',
          description: 'DOJ Antitrust Division should bring criminal price-fixing cases against all Big Four meatpackers based on pattern of coordinated pricing and market allocation.',
          requirements: ['Grand jury investigation', 'Economic analysis of pricing patterns'],
          filingTarget: 'U.S. District Courts',
          legalBasis: ['15 U.S.C. 1 (Sherman Act Section 1)'],
          estimatedTime: '2-4 years for criminal prosecution'
        },
        {
          step: 2,
          title: 'Review and restrict glyphosate registration',
          description: 'EPA should conduct independent safety review of glyphosate based on non-industry-funded studies, considering IARC classification and litigation evidence.',
          requirements: ['Independent toxicological review panel', 'Public comment period'],
          filingTarget: 'EPA Federal Register notice',
          legalBasis: ['7 U.S.C. 136d (FIFRA)'],
          estimatedTime: '1-2 years for regulatory proceeding'
        },
        {
          step: 3,
          title: 'Mandate agricultural antibiotic restrictions',
          description: 'FDA should convert voluntary guidance on medically important antibiotic use in livestock to binding regulation prohibiting growth-promotion use.',
          requirements: ['Rulemaking under Administrative Procedure Act'],
          filingTarget: 'FDA Federal Register rulemaking',
          legalBasis: ['21 U.S.C. 360b'],
          estimatedTime: '1-3 years for notice-and-comment rulemaking'
        }
      ],
      relevantMechanisms: ['Sherman Antitrust Act', 'FIFRA', 'Federal Food, Drug, and Cosmetic Act'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'Top 10% of farms receiving no more than 50% of total commodity subsidy payments (down from 77%)',
    'No single meatpacking company controlling more than 25% of any livestock market',
    'Mandatory ban on medically important antibiotics for growth promotion in livestock',
    'EPA glyphosate registration based on independent, non-industry-funded safety studies',
    'USDA county committee composition reflecting demographic diversity of farming communities',
    'Farm Bill reauthorization with binding per-operation payment caps and conservation mandates',
    'Clean Water Act enforcement applied to all agricultural operations exceeding pollution thresholds'
  ]
};

export default agriculturalPolicyAccountability;
