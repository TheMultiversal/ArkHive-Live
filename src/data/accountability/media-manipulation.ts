import type { AccountabilityData } from '@/types/accountability';

export const mediaManipulationAccountability: AccountabilityData = {
  investigationSlug: 'media-manipulation',
  crimeSummary: 'Corporate media systematically manufactures public consent for policies serving elite interests through five structural filters: concentrated ownership, advertiser dependence, reliance on official sources, organized flak campaigns, and ideological frameworks. The Fox News-Dominion settlement of $787.5 million proved major outlets knowingly broadcast false information for financial gain. Media manipulation enabled the Iraq War through fabricated WMD coverage, suppresses majority-supported policies like universal healthcare through framing, and amplifies political misinformation through digital platform algorithms optimized for engagement over accuracy.',
  totalHarm: '$787.5M Fox-Dominion settlement; 200,000+ Iraqi civilian deaths in media-enabled war; systematic suppression of majority-supported policies; billions in corporate PR and think tank spending shaping public discourse; algorithmic amplification of misinformation reaching billions of users',
  victimsAffected: '330 million Americans subject to systematic media manipulation; 200,000+ Iraqi civilians killed in war enabled by media complicity; billions of global users affected by platform algorithm manipulation; democratic governance degraded by manufactured consent',
  primaryTargets: [
    {
      name: 'Fox News / Fox Corporation',
      role: 'Knowingly broadcast false election fraud claims for audience retention; paid $787.5M settlement to Dominion; internal communications proved hosts knew claims were false',
      currentStatus: 'Continuing operations without structural reform; Smartmatic defamation case pending ($2.7B claimed)',
      accountabilityPath: 'Smartmatic lawsuit completion; FCC broadcast license review; advertiser pressure campaigns; shareholder litigation',
      obstacles: ['First Amendment protections for editorial decisions', 'Loyal audience base resistant to contrary evidence', 'Political allies protecting Fox from regulatory scrutiny']
    },
    {
      name: 'Meta Platforms (Facebook)',
      role: 'Algorithm systematically amplified misinformation for engagement; internal documents proved company knew of harm; Frances Haugen whistleblower disclosures',
      currentStatus: 'Continues operating engagement-optimized algorithm; minimal regulatory constraints on content amplification',
      accountabilityPath: 'Federal platform regulation; algorithmic transparency mandates; FTC consumer protection enforcement; state AG investigations',
      obstacles: ['Section 230 liability shield', 'Massive lobbying expenditure', 'Lack of federal tech platform regulation', 'Technical complexity of algorithm auditing']
    },
    {
      name: 'Corporate Think Tank Network',
      role: 'Heritage Foundation, AEI, Cato Institute, and others receive $500M+ annually from corporate donors to produce industry-aligned "expert" commentary without funding disclosure',
      currentStatus: 'Continuing to supply media with undisclosed advocacy presented as neutral expertise',
      accountabilityPath: 'Mandatory funding disclosure requirements; IRS review of 501(c)(3) advocacy; media industry self-regulation requiring donor disclosure in citations',
      obstacles: ['First Amendment challenges to disclosure mandates', 'IRS reluctance to scrutinize politically connected organizations', 'Media dependence on think tank "experts" as sources']
    }
  ],
  legalMechanisms: [
    {
      name: 'Defamation Law (State Common Law)',
      statute: 'State defamation statutes and common law',
      description: 'Legal remedy for knowingly false statements; Dominion case demonstrated viability for holding media accountable for deliberate falsehoods',
      hasStatuteOfLimitations: true,
      limitationPeriod: '1-3 years depending on state',
      reachesHeirs: false,
      authorizedActors: ['Private plaintiffs', 'Corporations', 'Public figures (actual malice standard)'],
      applicability: 'directly_applicable' as const,
      notes: 'Dominion settlement ($787.5M) and pending Smartmatic case ($2.7B) demonstrate viability'
    },
    {
      name: 'FTC Act - Deceptive Practices',
      statute: '15 U.S.C. 45',
      description: 'Prohibits unfair or deceptive acts affecting commerce; applicable to undisclosed advertiser influence on news content and deceptive practices by digital platforms',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['Federal Trade Commission', 'State Attorneys General'],
      applicability: 'directly_applicable' as const,
      notes: 'Could be applied to undisclosed conflicts of interest between advertisers and news coverage'
    },
    {
      name: 'Wire Fraud',
      statute: '18 U.S.C. 1343',
      description: 'Prohibits using wire communications for fraud; applicable to knowing transmission of false information for financial gain through broadcast and digital media',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years; 10 years for financial institution fraud',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'U.S. Attorneys'],
      applicability: 'potentially_applicable' as const,
      notes: 'High threshold for proving intent in media context but Fox-Dominion documents demonstrated knowing falsehood'
    },
    {
      name: 'Payola Disclosure Requirements',
      statute: '47 U.S.C. 317',
      description: 'Requires broadcasters to disclose paid content and sponsorship; provides legal framework for extending disclosure requirements to think tank-sourced content',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['FCC', 'DOJ'],
      applicability: 'potentially_applicable' as const,
      notes: 'Current scope limited to paid programming but legal framework could be extended to industry-funded expert commentary'
    }
  ],
  wealthTrace: [
    {
      name: 'Fox Corporation / Murdoch Family Trust',
      relationship: 'Built media empire on political propaganda model; $787.5M settlement was fraction of annual revenue',
      transferMethod: 'Advertising revenue from audience captured through politically polarizing content and knowing amplification of false claims',
      estimatedValue: '$18+ billion Fox Corporation market cap; Murdoch family net worth exceeds $20 billion',
      legalEntities: ['Fox Corporation', 'Fox News Media', 'News Corp', 'Murdoch Family Trust'],
      recoveryMechanisms: ['Smartmatic defamation suit ($2.7B claimed)', 'FCC license review', 'Advertiser boycott campaigns']
    },
    {
      name: 'Health Insurance and Pharmaceutical Ad Spending',
      relationship: 'Industries spend billions advertising on networks covering policies that affect their profits, creating structural conflict of interest',
      transferMethod: 'Direct advertising spending creates dependence that shapes editorial decisions without explicit censorship',
      estimatedValue: '$150+ million annually in health insurance media spending; $6+ billion pharmaceutical advertising',
      legalEntities: ['UnitedHealth Group', 'Anthem', 'Cigna', 'AHIP', 'PhRMA'],
      recoveryMechanisms: ['FTC enforcement of undisclosed conflicts', 'Public media expansion to reduce ad dependence', 'Mandatory disclosure of advertiser relationships']
    },
    {
      name: 'Corporate Think Tank Funding',
      relationship: 'Corporate donors fund think tanks that supply media with advocacy disguised as neutral expertise',
      transferMethod: 'Tax-deductible charitable contributions to 501(c)(3) organizations producing industry-aligned research',
      estimatedValue: '$500+ million annually across major policy think tanks',
      legalEntities: ['Heritage Foundation', 'American Enterprise Institute', 'Cato Institute', 'Manhattan Institute'],
      recoveryMechanisms: ['IRS review of 501(c)(3) status', 'Congressional donor disclosure requirements', 'Media industry self-regulation on source transparency']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'FTC Chair',
      title: 'Chair of the Federal Trade Commission',
      jurisdiction: 'Federal consumer protection and deceptive practices enforcement',
      powers: ['Investigate deceptive media practices under Section 5', 'Enforce disclosure requirements for sponsored content', 'Regulate digital platform algorithmic practices', 'Pursue enforcement against industry-funded disinformation'],
      contactMethod: 'FTC Consumer Response Center: ftc.gov/complaint'
    },
    {
      name: 'State Attorneys General',
      title: 'Elected chief legal officers of each state',
      jurisdiction: 'State consumer protection, defamation, and deceptive practices enforcement',
      powers: ['Investigate media companies for deceptive practices under state law', 'File multi-state lawsuits against platforms amplifying misinformation', 'Enforce state election integrity laws against media misinformation'],
      contactMethod: 'Via state AG office websites'
    },
    {
      name: 'Congressional Commerce Committees',
      title: 'Senate Commerce and House Energy & Commerce Committees',
      jurisdiction: 'Legislative authority over media regulation and platform oversight',
      powers: ['Pass algorithmic transparency legislation', 'Reform Section 230 liability protections', 'Mandate think tank donor disclosure', 'Strengthen broadcast public interest standards', 'Fund public media alternatives'],
      contactMethod: 'Via congress.gov member directory'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can diversify their media consumption, support independent journalism, and advocate for structural media reform.',
      steps: [
        { step: 1, title: 'Diversify media consumption', description: 'Actively seek information from independent, nonprofit, and international news sources rather than relying solely on corporate media', requirements: ['Internet access and media literacy'], estimatedTime: 'Ongoing habit change' },
        { step: 2, title: 'Support independent journalism financially', description: 'Subscribe to nonprofit news organizations like ProPublica, The Intercept, and local independent outlets', requirements: ['Financial commitment to subscription journalism'], estimatedTime: 'Ongoing' },
        { step: 3, title: 'Demand platform transparency from elected officials', description: 'Contact congressional representatives to support algorithmic transparency and platform regulation legislation', requirements: ['Congressional contact information'], estimatedTime: '30 minutes' },
        { step: 4, title: 'Advocate for media literacy education', description: 'Push local school boards and state legislators to implement comprehensive media literacy curricula modeled on Finland\'s program', requirements: ['Engagement with local education governance'], estimatedTime: 'Ongoing advocacy' }
      ],
      relevantMechanisms: ['Consumer choice', 'Political advocacy', 'Education reform'],
      urgency: 'high' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can expose media manipulation mechanisms, refuse to participate in manufactured consent, and support structural reforms.',
      steps: [
        { step: 1, title: 'Disclose think tank funding in all citations', description: 'When citing think tank research or experts, always include disclosure of major corporate donors and funding sources', requirements: ['Access to think tank financial disclosures and IRS 990 filings'], legalBasis: ['Journalistic ethics standards'], estimatedTime: 'Per-story research addition' },
        { step: 2, title: 'Document corporate editorial interference', description: 'Track and publicize instances where corporate parent companies influence, suppress, or shape news coverage to protect business interests', requirements: ['Source development within corporate newsrooms'], estimatedTime: 'Ongoing investigative work' },
        { step: 3, title: 'Audit source diversity in coverage', description: 'Systematically track the ratio of official/corporate sources versus community/worker/affected party voices in coverage', requirements: ['Content analysis methodology'], estimatedTime: 'Ongoing practice improvement' }
      ],
      relevantMechanisms: ['Journalistic ethics standards', 'FOIA for government PR spending disclosure', 'IRS 990 filings for think tank finances'],
      urgency: 'high' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can enforce existing consumer protection laws against deceptive media practices and pursue platform accountability.',
      steps: [
        { step: 1, title: 'FTC investigation of undisclosed advertiser conflicts', description: 'Investigate whether undisclosed relationships between major advertisers and news coverage decisions constitute deceptive consumer practices', requirements: ['FTC investigation authority'], legalBasis: ['15 U.S.C. 45'], filingTarget: 'FTC Bureau of Consumer Protection', estimatedTime: '6-12 months investigation' },
        { step: 2, title: 'Platform algorithm audit and transparency requirements', description: 'Require digital platforms to disclose algorithmic amplification mechanisms and conduct independent audits of misinformation amplification', requirements: ['Regulatory rulemaking authority or congressional mandate'], legalBasis: ['15 U.S.C. 45', '47 U.S.C. 317'], estimatedTime: '12-18 months rulemaking' },
        { step: 3, title: 'Review FCC public interest enforcement for broadcast media', description: 'Strengthen enforcement of broadcast license public interest standards to address systematic propaganda', requirements: ['FCC enforcement resources'], legalBasis: ['47 U.S.C. 309', '47 U.S.C. 315'], estimatedTime: '6-12 months framework development' }
      ],
      relevantMechanisms: ['FTC Act Section 5', 'FCC public interest standard', 'Congressional oversight authority'],
      urgency: 'immediate' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Legal professionals can pursue defamation and consumer protection claims that establish accountability precedents for media manipulation.',
      steps: [
        { step: 1, title: 'Pursue Dominion-model defamation litigation', description: 'Identify instances of knowing falsehood by media outlets and pursue defamation claims using discovery to expose internal communications', requirements: ['Client with standing', 'Evidence of actual malice'], legalBasis: ['State defamation law', 'New York Times v. Sullivan actual malice standard'], estimatedTime: '2-4 years litigation' },
        { step: 2, title: 'File consumer protection claims against platforms', description: 'Pursue state consumer protection claims against platforms that algorithmically amplify misinformation despite internal knowledge of harm', requirements: ['State AG partnership or private right of action'], legalBasis: ['State consumer protection statutes', '15 U.S.C. 45'], estimatedTime: '1-3 years litigation' }
      ],
      relevantMechanisms: ['Defamation law', 'Consumer protection statutes', 'Securities fraud (for publicly traded media companies)'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Completion of Smartmatic defamation case with structural remedies imposed on Fox News operations',
    'Federal legislation mandating algorithmic transparency and independent auditing of digital platform content amplification',
    'Mandatory disclosure of corporate funding sources when think tank experts are cited in news coverage',
    'Implementation of comprehensive media literacy education in public school curricula nationwide',
    'Expansion of public media funding to at least $10 per capita to reduce structural dependence on corporate advertising',
    'Establishment of legal precedent enabling accountability for media outlets that knowingly broadcast false information'
  ]
};
