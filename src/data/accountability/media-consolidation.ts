import type { AccountabilityData } from '@/types/accountability';

export const mediaConsolidationAccountability: AccountabilityData = {
  investigationSlug: 'media-consolidation',
  crimeSummary: 'Since the 1996 Telecommunications Act removed media ownership limits, six corporations have consolidated control over approximately 90% of American media. This concentration has destroyed thousands of local newsrooms, eliminated media diversity, enabled corporate propaganda, and created structural conflicts of interest that compromise journalism. Hedge funds like Alden Global Capital further devastated local news by acquiring and gutting newspaper chains for short-term profit extraction. The FCC, captured by the industry it regulates, has systematically weakened ownership rules while commissioners transition to lucrative industry positions.',
  totalHarm: 'Over 2,900 newspapers closed since 2005, 1,800+ news desert communities, 60% reduction in newspaper journalism jobs (71,000 to under 30,000), billions in merger activity concentrating information control, measurably reduced voter turnout and increased government corruption in communities losing local news coverage',
  victimsAffected: '330 million Americans subject to concentrated corporate media control; 1,800+ communities left without any local news outlet; tens of thousands of journalists who lost careers; democratic governance degraded nationwide',
  primaryTargets: [
    {
      name: 'Sinclair Broadcast Group',
      role: 'Largest local TV station owner in the U.S. with 190+ stations reaching 40% of households; weaponized local news trust by forcing partisan propaganda scripts on anchors',
      currentStatus: 'Operating with continued political influence over local newscasts nationwide',
      accountabilityPath: 'FCC license revocation proceedings for failure to serve public interest; congressional investigation into coordinated political messaging; antitrust enforcement to force divestiture',
      obstacles: ['FCC regulatory capture by broadcast industry', 'First Amendment challenges to content-based regulation', 'Political allies in Congress blocking reform']
    },
    {
      name: 'Alden Global Capital',
      role: 'Hedge fund that acquired major newspaper chains including Tribune Publishing specifically to strip assets and extract profits while destroying newsroom capacity',
      currentStatus: 'Second-largest newspaper chain in America; continuing to cut journalists and extract value from acquired properties',
      accountabilityPath: 'State-level press preservation legislation; community ownership transition mandates; SEC scrutiny of predatory acquisition practices; antitrust intervention',
      obstacles: ['Private equity opacity shields financial details', 'No federal press preservation framework', 'First Amendment protections extend to ownership decisions', 'Distressed newspaper prices make acquisitions easy']
    },
    {
      name: 'Federal Communications Commission',
      role: 'Captured regulatory agency that systematically weakened media ownership rules while commissioners rotated through industry revolving door',
      currentStatus: 'Continues to operate with weakened ownership rules; triennial reviews consistently move toward further deregulation',
      accountabilityPath: 'Congressional oversight hearings; legislation mandating cooling-off periods for FCC-to-industry transitions; restoration of media ownership limits through new legislation',
      obstacles: ['Industry lobbying spending exceeds $100M annually', 'Both parties have appointed deregulation-friendly commissioners', 'Current legal framework gives FCC broad discretion']
    }
  ],
  legalMechanisms: [
    {
      name: 'Sherman Antitrust Act',
      statute: '15 U.S.C. 1-2',
      description: 'Prohibits monopolization and restraint of trade; applicable to media conglomerates controlling dominant market shares in multiple media segments',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years for civil claims; no limit for ongoing violations',
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'State Attorneys General', 'Private parties'],
      applicability: 'directly_applicable' as const,
      notes: 'Ongoing concentration makes current enforcement viable'
    },
    {
      name: 'Clayton Antitrust Act Section 7',
      statute: '15 U.S.C. 18',
      description: 'Prohibits mergers and acquisitions that substantially lessen competition; basis for challenging existing and future media mergers',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'FTC', 'State Attorneys General'],
      applicability: 'directly_applicable' as const,
      notes: 'Can be used to challenge consummated mergers if anticompetitive effects persist'
    },
    {
      name: 'Communications Act Public Interest Standard',
      statute: '47 U.S.C. 309',
      description: 'Requires FCC to determine that broadcast license renewals serve the public interest; provides legal basis for denying license renewals to stations that fail public service obligations',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FCC', 'Community groups filing license challenges'],
      applicability: 'directly_applicable' as const,
      notes: 'License renewal has become essentially automatic but statutory public interest requirement remains legally enforceable'
    },
    {
      name: 'FCC Media Ownership Rules',
      statute: '47 C.F.R. 73.3555',
      description: 'FCC regulations governing local and national television and radio station ownership limits; can be strengthened through rulemaking without new legislation',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FCC Commissioners', 'Congressional oversight'],
      applicability: 'directly_applicable' as const,
      notes: 'Rules have been repeatedly weakened but legal authority to strengthen them still exists within FCC jurisdiction'
    }
  ],
  wealthTrace: [
    {
      name: 'Comcast/NBCUniversal',
      relationship: 'Acquired NBCUniversal for $30B; controls broadcast network, cable news, streaming, and dominant ISP',
      transferMethod: 'Corporate acquisition approved by captured FCC where commissioner who approved deal joined Comcast as lobbyist within months',
      estimatedValue: '$160 billion market capitalization',
      legalEntities: ['Comcast Corporation', 'NBCUniversal Media LLC', 'Sky Group'],
      recoveryMechanisms: ['Antitrust divestiture of news operations from entertainment/ISP parent', 'FCC ownership rule reinstatement', 'Net neutrality enforcement']
    },
    {
      name: 'Alden Global Capital extracted newspaper profits',
      relationship: 'Systematically stripped assets from acquired newspaper chains while destroying journalism capacity',
      transferMethod: 'Private equity asset extraction from distressed newspaper acquisitions',
      estimatedValue: '$2+ billion extracted from newspaper operations since 2010',
      legalEntities: ['Alden Global Capital LLC', 'Digital First Media', 'MediaNews Group', 'Tribune Publishing'],
      recoveryMechanisms: ['Community ownership conversion legislation', 'Nonprofit press preservation mandates', 'State laws requiring notice and community right of first refusal for newspaper sales']
    },
    {
      name: 'Media industry lobbying complex',
      relationship: 'Ongoing lobbying prevents restoration of media ownership limits that would reduce corporate profits',
      transferMethod: 'Over $100M annually spent lobbying Congress and FCC to maintain deregulated landscape',
      estimatedValue: 'Ongoing annual expenditure protecting hundreds of billions in consolidated media revenue',
      legalEntities: ['National Association of Broadcasters', 'NCTA', 'News Media Alliance'],
      recoveryMechanisms: ['Campaign finance reform', 'Mandatory lobbying disclosure', 'Revolving door cooling-off legislation']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'FCC Chairperson',
      title: 'Chair of the Federal Communications Commission',
      jurisdiction: 'Federal regulation of broadcast licensing and media ownership',
      powers: ['Initiate media ownership rulemaking to strengthen limits', 'Enforce public interest license renewal standards', 'Investigate station compliance with programming obligations', 'Deny license renewals and transfers that harm public interest'],
      contactMethod: 'FCC Consumer Complaint Center: consumercomplaints.fcc.gov'
    },
    {
      name: 'Assistant Attorney General for Antitrust',
      title: 'Head of DOJ Antitrust Division',
      jurisdiction: 'Federal antitrust enforcement including media mergers',
      powers: ['Challenge anticompetitive media mergers under Clayton Act', 'Investigate monopolization under Sherman Act', 'Seek divestiture of anticompetitive holdings', 'Block future consolidation transactions'],
      contactMethod: 'DOJ Antitrust Division: justice.gov/atr'
    },
    {
      name: 'Congressional Commerce Committees',
      title: 'Senate Commerce Committee and House Energy & Commerce Committee',
      jurisdiction: 'Legislative authority over telecommunications and media regulation',
      powers: ['Enact new media ownership limits', 'Restore cross-ownership prohibitions', 'Mandate FCC revolving door cooling-off periods', 'Increase public media funding', 'Pass Local Journalism Sustainability Act'],
      contactMethod: 'Contact via congress.gov member directory'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can support local journalism, demand FCC accountability, and advocate for media ownership reform through direct action and political engagement.',
      steps: [
        { step: 1, title: 'Subscribe to local independent news', description: 'Direct financial support to remaining local newsrooms and nonprofit news organizations in your community', requirements: ['Monthly subscription commitments'], estimatedTime: 'Ongoing' },
        { step: 2, title: 'File FCC public comments on ownership rules', description: 'Submit comments during FCC media ownership triennial reviews demanding restoration of ownership limits', requirements: ['Access to FCC Electronic Comment Filing System'], legalBasis: ['47 U.S.C. 309', '47 C.F.R. 73.3555'], estimatedTime: '1-2 hours per filing period' },
        { step: 3, title: 'Contact representatives about Local Journalism Sustainability Act', description: 'Demand congressional support for tax credits supporting local news subscriptions, advertising, and journalist employment', requirements: ['Congressional contact information'], estimatedTime: '30 minutes' },
        { step: 4, title: 'Support community media initiatives', description: 'Engage with local public access television, community radio, and nonprofit news startups as alternatives to corporate media', requirements: ['Community engagement'], estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['FCC public interest standard', 'Local Journalism Sustainability Act', 'Community media access provisions'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can document consolidation impacts, investigate corporate media conflicts of interest, and support alternative journalism models.',
      steps: [
        { step: 1, title: 'Document corporate editorial interference', description: 'Investigate and report instances where corporate parent companies kill or suppress stories that threaten business interests', requirements: ['Source development within corporate newsrooms'], estimatedTime: 'Ongoing investigative work' },
        { step: 2, title: 'Track media ownership changes', description: 'Maintain public databases of media ownership transactions, newsroom layoffs, and news desert creation', requirements: ['Access to FCC filings and SEC records'], legalBasis: ['Freedom of Information Act', '47 U.S.C. 309'], estimatedTime: 'Ongoing' },
        { step: 3, title: 'Report on FCC revolving door', description: 'Document the pipeline of FCC commissioners and staff who transition to industry positions at companies they regulated', requirements: ['Federal employment records and lobbying disclosures'], estimatedTime: '2-4 months investigation' }
      ],
      relevantMechanisms: ['Freedom of Information Act', 'FCC public records', 'SEC financial disclosures'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'The FCC has existing statutory authority to strengthen media ownership rules and enforce public interest obligations without new legislation.',
      steps: [
        { step: 1, title: 'Initiate media ownership rulemaking', description: 'Use existing FCC authority to propose and adopt strengthened media ownership limits through notice-and-comment rulemaking', requirements: ['FCC Commissioner majority vote'], legalBasis: ['47 U.S.C. 303', '47 C.F.R. 73.3555'], filingTarget: 'FCC Rulemaking Proceeding', estimatedTime: '12-18 months for full rulemaking cycle' },
        { step: 2, title: 'Enforce public interest license renewal', description: 'Restore meaningful public interest review during broadcast license renewal proceedings', requirements: ['FCC enforcement staff and resources'], legalBasis: ['47 U.S.C. 309'], estimatedTime: '6-12 months to establish new enforcement framework' },
        { step: 3, title: 'Investigate Sinclair must-carry violations', description: 'Examine whether Sinclair\'s mandated political content segments violate stations\' public interest obligations', requirements: ['FCC investigation authority'], legalBasis: ['47 U.S.C. 309', '47 U.S.C. 315'], estimatedTime: '6 months investigation' }
      ],
      relevantMechanisms: ['Communications Act of 1934', 'FCC media ownership rules', 'Public interest license standard'],
      urgency: 'immediate' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Congress has the legislative authority to restore media ownership limits, fund public media, and address the local news crisis through targeted legislation.',
      steps: [
        { step: 1, title: 'Pass Local Journalism Sustainability Act', description: 'Enact tax credits for local news subscriptions ($250/year), small business local advertising ($5,000/year), and newsroom journalist employment ($25,000/year)', requirements: ['Bipartisan coalition in both chambers'], legalBasis: ['Congressional taxing authority', 'Commerce Clause'], estimatedTime: 'One legislative session' },
        { step: 2, title: 'Reinstate media ownership limits', description: 'Pass legislation capping the percentage of households any single company can reach and restoring cross-ownership prohibitions', requirements: ['Congressional majority'], legalBasis: ['Commerce Clause', '47 U.S.C. 151-614'], estimatedTime: 'One legislative session' },
        { step: 3, title: 'Increase public media funding', description: 'Raise public media funding from $1.35 per capita to levels comparable to peer democracies ($50-100 per capita)', requirements: ['Appropriations legislation'], estimatedTime: 'Annual appropriations cycle' },
        { step: 4, title: 'Mandate revolving door cooling periods', description: 'Require 5-year cooling-off period before FCC commissioners and senior staff can accept positions at regulated companies', requirements: ['Congressional legislation'], legalBasis: ['Ethics in Government Act framework'], estimatedTime: 'One legislative session' }
      ],
      relevantMechanisms: ['Congressional legislative authority', 'Commerce Clause', 'Appropriations power'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'Restoration of meaningful media ownership limits preventing any single entity from reaching more than 25% of American households',
    'Passage of Local Journalism Sustainability Act providing economic support for local newsrooms',
    'Increase in public media funding to at least $10 per capita annually',
    'Mandatory 5-year revolving door cooling-off period for FCC commissioners and senior staff',
    'Zero net increase in news deserts and measurable recovery of local journalism capacity in underserved communities',
    'Enforceable public interest standards applied during broadcast license renewals'
  ]
};
