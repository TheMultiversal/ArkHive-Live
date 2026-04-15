import type { AccountabilityData } from '@/types/accountability';

export const healthPolicyAccountability: AccountabilityData = {
  investigationSlug: 'health-policy',
  crimeSummary: 'The Gates Foundation, pharmaceutical corporations, and health insurance companies have captured global health governance through funding dependency, revolving door employment, and lobbying. Bill Gates, sole trustee of a $75B endowment, is the second-largest WHO funder while holding investments in pharmaceutical companies that benefit from Foundation programs. GAVI creates guaranteed markets for pharma products. During COVID-19, $100B+ in vaccine revenue went to companies that used $18B in public funding while retaining exclusive patents. UnitedHealth Group deployed an AI algorithm to deny claims at a 90% error rate, generating $22B profit. The pharmaceutical industry spends $356M annually on lobbying, the most of any industry. The U.S. spends $4.5 trillion on healthcare with worse outcomes than peer nations.',
  totalHarm: '$4.5 trillion annual U.S. healthcare extraction with declining life expectancy; $100B+ COVID vaccine windfall from publicly-funded research; 27 million Americans uninsured; medical debt is leading cause of bankruptcy; developing nations denied timely vaccine access through patent protection; millions of insurance claims systematically denied by AI algorithms; pharmaceutical prices 2-3x higher than peer nations',
  victimsAffected: '8 billion people globally affected by Gates Foundation influence on WHO health priorities; 27 million uninsured Americans; millions with claims denied by insurance AI algorithms; developing nations denied timely COVID vaccine access; patients paying 2-3x global prices for medications; communities in Global South where health systems weakened by vertical disease programs at expense of primary care',
  primaryTargets: [
    {
      name: 'Bill Gates / Gates Foundation',
      role: 'Sole trustee of $75B foundation that is second-largest WHO funder; holds pharmaceutical investments while funding organizations that buy those products; opposed COVID patent waivers',
      currentStatus: 'Active. Bill Gates sole trustee after Melinda departed 2024. $75B endowment. Foundation simultaneously funds GAVI, CEPI, WHO, academic institutions, and media while investing in pharmaceutical companies.',
      accountabilityPath: 'IRS investigation of 501(c)(3) conflicts between charitable mission and investment portfolio; mandatory divestiture from companies benefiting from Foundation programs; congressional investigation of circular GAVI-pharma funding',
      obstacles: ['Foundation structured as private entity with no democratic accountability', 'Massive PR and media funding creates favorable coverage', 'Health establishment deeply intertwined with Foundation funding', 'No legal framework specifically addressing philanthrocapitalism conflicts']
    },
    {
      name: 'UnitedHealth Group / Andrew Witty',
      role: 'Largest U.S. insurer; AI algorithm systematically denied claims at 90% error rate; $22B profit in 2023; CEO compensation $23.5M',
      currentStatus: 'Active. $371B revenue, $22B profit. Multiple lawsuits over AI claim denials. CEO Brian Thompson assassinated Dec 2024; public reaction revealed depth of fury at industry.',
      accountabilityPath: 'DOJ healthcare fraud investigation; class action litigation for systematic claim denial; SEC investigation of AI disclosure to shareholders; state insurance commissioner enforcement',
      obstacles: ['Company has enormous legal resources', 'Insurance regulatory framework fragmented across 50 states', 'AI algorithm decisions difficult to challenge individually', 'No federal law explicitly prohibiting AI-driven claim denial']
    },
    {
      name: 'Pfizer / Albert Bourla',
      role: 'Earned $37B COVID vaccine revenue from publicly-funded research; CEO received $33M compensation; opposed patent waivers for developing nations; CEO named to GAVI board',
      currentStatus: 'Active. Retained exclusive patents on vaccines developed with public money. CEO Bourla on GAVI board creating governance conflicts. Filed suits against generic manufacturers.',
      accountabilityPath: 'Bayh-Dole march-in rights to reclaim publicly-funded patents; antitrust investigation of generic competition suppression; WHO/WTO patent waiver enforcement',
      obstacles: ['Patent system designed to protect pharmaceutical monopolies', 'Revolving door between FDA and pharma boards', 'International patent enforcement through TRIPS agreement', 'Massive lobbying blocks reform legislation']
    },
    {
      name: 'PhRMA / Pharmaceutical Lobby',
      role: 'Spent $356M on lobbying in 2022; 1,800+ lobbyists; blocked drug pricing reform; maintained patent monopolies; fought generic competition',
      currentStatus: 'Active. Lobby employs nearly 4 lobbyists per member of Congress. Successfully blocked Medicare price negotiation for 20 years. Suing to overturn Inflation Reduction Act reforms.',
      accountabilityPath: 'Antitrust investigation of coordinated industry lobbying; lobbying reform legislation; campaign finance reform to reduce pharma political influence; international reference pricing',
      obstacles: ['First Amendment protections for lobbying activity', 'Deep financial ties to both political parties', 'Revolving door normalizes industry influence', 'Industry frames price controls as innovation threat']
    },
    {
      name: 'Insurance Industry (Elevance, CVS/Aetna, Cigna, Humana)',
      role: 'Combined $1T+ revenue extracting administrative profit; prior authorization costs $35B annually; systematic claim denial and care delay; Medicare Advantage upcoding',
      currentStatus: 'Active. Five largest insurers control majority of market. Medicare Advantage overpayments estimated $75B since 2020. Prior authorization delays care for 93% of physicians surveyed.',
      accountabilityPath: 'FTC investigation of insurance consolidation; CMS enforcement against Medicare Advantage upcoding; state insurance commissioner enforcement; prior authorization reform legislation',
      obstacles: ['Industry employs massive legal and lobbying apparatus', 'Regulatory framework fragmented across 50 states', 'Medicare Advantage popular with beneficiaries despite systemic overbilling', 'Administrative complexity obscures profit extraction']
    }
  ],
  legalMechanisms: [
    {
      name: 'Sherman Antitrust Act',
      statute: '15 U.S.C. 1-7',
      description: 'Applicable to pharmaceutical pay-for-delay agreements, insurance industry consolidation, hospital monopoly pricing, and coordinated PBM behavior',
      hasStatuteOfLimitations: true,
      limitationPeriod: '4 years (civil); 5 years (criminal)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Antitrust Division', 'FTC', 'State Attorneys General', 'Private plaintiffs (treble damages)'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'False Claims Act (Medicare/Medicaid Fraud)',
      statute: '31 U.S.C. 3729-3733',
      description: 'Applicable to Medicare Advantage upcoding ($75B+ overpayments), pharmaceutical pricing fraud, and insurance claim misrepresentation to federal healthcare programs',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years (10 years if government intervention)',
      reachesHeirs: false,
      authorizedActors: ['DOJ Civil Division', 'HHS Office of Inspector General', 'Whistleblower qui tam plaintiffs'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Anti-Kickback Statute',
      statute: '42 U.S.C. 1320a-7b',
      description: 'Prohibits pharmaceutical payments to induce referrals; routinely violated through speaker fees, consulting arrangements, and PBM rebate structures',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'HHS OIG', 'State Medicaid Fraud Control Units'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Bayh-Dole March-In Rights',
      statute: '35 U.S.C. 203',
      description: 'Government retains right to license publicly-funded patents if products are not available on reasonable terms; never exercised despite statutory authority to reclaim COVID vaccine patents',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['HHS Secretary', 'NIH Director', 'Federal funding agencies'],
      applicability: 'directly_applicable' as const,
      notes: 'March-in rights have never been exercised in over 40 years despite clear applicability to publicly-funded drug development'
    },
    {
      name: 'Healthcare Fraud Criminal Statute',
      statute: '18 U.S.C. 1347',
      description: 'Criminal penalties for knowingly executing scheme to defraud healthcare benefit program; applicable to systematic AI-driven claim denial and Medicare Advantage upcoding',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ Criminal Division', 'FBI Healthcare Fraud Unit', 'HHS OIG'],
      applicability: 'directly_applicable' as const
    },
    {
      name: 'Tax-Exempt Foundation Conflict of Interest Rules',
      statute: '26 U.S.C. 501(c)(3); 26 U.S.C. 4941 (Self-Dealing)',
      description: 'Private foundations must operate exclusively for charitable purposes; self-dealing rules prohibit transactions between foundation and disqualified persons; applicable to Gates Foundation investment conflicts',
      hasStatuteOfLimitations: true,
      limitationPeriod: '3 years from filing',
      reachesHeirs: false,
      authorizedActors: ['IRS Tax-Exempt and Government Entities Division', 'State charity regulators'],
      applicability: 'potentially_applicable' as const,
      notes: 'Requires proving that Foundation investments constitute self-dealing or private benefit rather than incidental financial returns'
    }
  ],
  wealthTrace: [
    {
      name: 'Gates Foundation Investment-Program Circular Revenue',
      relationship: 'Foundation funds GAVI, CEPI, and WHO which purchase products from companies in which Foundation invests',
      transferMethod: 'Tax-deductible endowment converted to program grants; grants create markets for investment portfolio companies',
      estimatedValue: '$75,000,000,000 endowment; billions in annual GAVI/CEPI/WHO grants',
      legalEntities: ['Bill & Melinda Gates Foundation Trust', 'Cascade Investment LLC', 'GAVI', 'CEPI'],
      recoveryMechanisms: ['IRS enforcement of foundation self-dealing rules', 'Mandatory divestiture requirements', 'Congressional investigation']
    },
    {
      name: 'COVID Vaccine Windfall Profits',
      relationship: 'Pharmaceutical companies earned $100B+ from vaccines developed with $18B in public funding',
      transferMethod: 'Government-funded R&D commercialized at monopoly prices through patents retained by companies',
      estimatedValue: '$100,000,000,000+ combined COVID vaccine/treatment revenue',
      legalEntities: ['Pfizer', 'Moderna', 'BioNTech', 'Johnson & Johnson'],
      recoveryMechanisms: ['Bayh-Dole march-in rights', 'WTO TRIPS waiver', 'Windfall profits tax']
    },
    {
      name: 'Insurance Industry Annual Profit Extraction',
      relationship: 'Five largest insurers extract hundreds of billions in administrative overhead and profit from healthcare spending',
      transferMethod: 'Premium collection, claim denial, Medicare Advantage upcoding, administrative overhead',
      estimatedValue: '$1,000,000,000,000+ combined annual revenue (top 5 insurers)',
      legalEntities: ['UnitedHealth Group', 'Elevance Health', 'CVS Health/Aetna', 'Cigna', 'Humana'],
      recoveryMechanisms: ['Medicare for All', 'Medical loss ratio enforcement', 'FTC consolidation investigation']
    },
    {
      name: 'Pharmaceutical Lobbying Investment',
      relationship: 'Industry spends more on lobbying than any sector to maintain pricing power and patent monopolies',
      transferMethod: 'Direct lobbying, campaign contributions, revolving door employment, physician consulting payments',
      estimatedValue: '$356,000,000 annual lobbying (2022); billions in cumulative political spending',
      legalEntities: ['PhRMA', 'Individual pharmaceutical companies', 'Pharmacy benefit managers'],
      recoveryMechanisms: ['Lobbying reform legislation', 'Campaign finance reform', 'Revolving door cooling-off requirements']
    },
    {
      name: 'Drug Price Extraction from U.S. Patients',
      relationship: 'Americans pay 2-3x peer nation prices for identical medications',
      transferMethod: 'Patent monopolies, Medicare non-negotiation policy, PBM rebate opacity, direct-to-consumer advertising',
      estimatedValue: 'Hundreds of billions annually in excess pricing vs. comparable nations',
      legalEntities: ['Major pharmaceutical manufacturers', 'PBMs (CVS Caremark, Express Scripts, OptumRx)'],
      recoveryMechanisms: ['Medicare price negotiation expansion', 'International reference pricing', 'Compulsory licensing']
    },
    {
      name: 'Medicare Advantage Overpayments',
      relationship: 'Private insurers systematically upcode diagnoses to inflate Medicare reimbursements',
      transferMethod: 'Algorithmic diagnosis coding that inflates patient risk scores and government payments',
      estimatedValue: '$75,000,000,000+ in overpayments since 2020',
      legalEntities: ['UnitedHealth/Optum', 'Humana', 'CVS/Aetna', 'Other MA plan sponsors'],
      recoveryMechanisms: ['CMS audit and recovery', 'False Claims Act qui tam actions', 'OIG fraud investigations']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'DOJ Healthcare Fraud Strike Force',
      title: 'Deputy Assistant Attorney General (Criminal Division)',
      jurisdiction: 'Federal healthcare fraud prosecution',
      powers: ['Prosecute systematic AI-driven claim denial as healthcare fraud', 'Investigate Medicare Advantage upcoding schemes', 'Bring False Claims Act actions for federal healthcare program fraud', 'Investigate pharmaceutical kickback violations'],
      contactMethod: 'DOJ Criminal Division: (202) 514-1301; Tips: tips.fbi.gov'
    },
    {
      name: 'HHS Office of Inspector General',
      title: 'Inspector General',
      jurisdiction: 'Federal health program oversight and fraud investigation',
      powers: ['Audit Medicare Advantage coding accuracy', 'Investigate pharmaceutical anti-kickback violations', 'Refer criminal cases to DOJ', 'Issue civil monetary penalties for healthcare fraud'],
      contactMethod: 'HHS OIG Hotline: 1-800-HHS-TIPS; oig.hhs.gov/fraud/report-fraud/'
    },
    {
      name: 'IRS Tax-Exempt Division',
      title: 'Commissioner (Tax-Exempt and Government Entities)',
      jurisdiction: 'Oversight of tax-exempt organizations including private foundations',
      powers: ['Investigate Gates Foundation for self-dealing under 26 U.S.C. 4941', 'Enforce private benefit restrictions', 'Revoke tax-exempt status for non-compliance', 'Audit foundation investment conflicts of interest'],
      contactMethod: 'IRS TE/GE Customer Service: (877) 829-5500'
    },
    {
      name: 'FTC',
      title: 'FTC Chair',
      jurisdiction: 'Antitrust enforcement and consumer protection in healthcare',
      powers: ['Investigate PBM anticompetitive practices', 'Challenge pharmaceutical pay-for-delay agreements', 'Review healthcare industry mergers', 'Investigate deceptive insurance marketing practices'],
      contactMethod: 'FTC complaint portal: reportfraud.ftc.gov'
    },
    {
      name: 'NIH Director',
      title: 'Director, National Institutes of Health',
      jurisdiction: 'Federal health research funding and Bayh-Dole march-in rights',
      powers: ['Exercise Bayh-Dole march-in rights on publicly-funded pharmaceutical patents', 'Require reasonable pricing on taxpayer-funded discoveries', 'Condition future grants on equitable access provisions'],
      contactMethod: 'NIH Central Resource: (301) 496-4000'
    },
    {
      name: 'State Insurance Commissioners',
      title: 'State Insurance Commissioner / Director',
      jurisdiction: 'State-level insurance regulation and consumer protection',
      powers: ['Investigate and penalize systematic claim denial practices', 'Enforce prior authorization timelines', 'Review and deny excessive insurance rate increases', 'Revoke insurer licenses for pattern of bad faith denial'],
      contactMethod: 'NAIC consumer assistance: naic.org/state_web_map.htm'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can fight health policy capture through legislative advocacy, consumer action, supporting alternatives, and demanding transparency',
      steps: [
        { step: 1, title: 'Support Drug Pricing Reform', description: 'Contact federal legislators to support expanding Medicare price negotiation beyond the initial 10 drugs, international reference pricing, and compulsory licensing for essential medications', legalBasis: ['First Amendment right to petition', 'Article I legislative authority'], estimatedTime: '1-2 hours' },
        { step: 2, title: 'Appeal All Insurance Denials', description: 'Appeal every insurance claim denial through internal and external review processes; AI-driven denials are frequently overturned on appeal, which is why insurers rely on most patients not appealing', legalBasis: ['ACA external review requirements', 'State insurance regulations'], estimatedTime: 'Varies per claim' },
        { step: 3, title: 'Support Right-to-Repair for Medical Devices', description: 'Advocate for legislation allowing independent repair of medical devices and equipment, breaking manufacturer monopolies on maintenance', legalBasis: ['State right-to-repair legislation'], estimatedTime: '1-2 hours' },
        { step: 4, title: 'Demand Foundation Transparency', description: 'Support legislation requiring private foundations to disclose all investments in companies benefiting from their programs and prohibiting self-dealing through circular funding', legalBasis: ['26 U.S.C. 501(c)(3)', '26 U.S.C. 4941 (Self-Dealing)'], estimatedTime: '1-2 hours' },
        { step: 5, title: 'Use Community Health Alternatives', description: 'Support community health centers, generic medications, cooperative pharmacies, and direct primary care models that operate outside the insurance-pharmaceutical extraction system', legalBasis: ['Freedom of association', 'Consumer choice'] },
      ],
      relevantMechanisms: ['Medicare price negotiation', 'ACA external review', 'Foundation transparency requirements'],
      urgency: 'immediate' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Journalists can expose the circular funding, revolving doors, and corporate capture that drive health policy in the interest of profit over patients',
      steps: [
        { step: 1, title: 'Map Gates Foundation Circular Funding', description: 'Trace the complete circular path: Gates Foundation endowment investments in pharmaceutical companies, Foundation grants to GAVI/CEPI/WHO, and those organizations\' procurement from Foundation portfolio companies', legalBasis: ['First Amendment freedom of press', 'SEC public filing access', 'Foundation 990 filings'], filingTarget: 'IRS Form 990-PF (public); SEC filings (public); GAVI procurement records' },
        { step: 2, title: 'FOIA Pharmaceutical Regulatory Communications', description: 'File FOIA requests for FDA communications with pharmaceutical companies during drug approval processes, including pre-submission meetings and advisory committee influence', legalBasis: ['Freedom of Information Act (5 U.S.C. 552)'], filingTarget: 'FDA FOIA office' },
        { step: 3, title: 'Investigate AI Claim Denial Algorithms', description: 'Obtain and analyze insurance company AI algorithms used for claim denial; document error rates, override patterns, and financial impact on patients and healthcare providers', legalBasis: ['First Amendment freedom of press', 'State public records for Medicaid claims'] },
        { step: 4, title: 'Track Revolving Door Employment', description: 'Document all personnel movement between FDA, pharmaceutical companies, Gates Foundation, WHO, and insurance companies to demonstrate institutional capture patterns', legalBasis: ['Public disclosure records', 'SEC insider filings'] },
      ],
      relevantMechanisms: ['FOIA', 'First Amendment', 'SEC public filings', 'IRS 990-PF disclosures'],
      urgency: 'immediate' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Legal professionals can challenge pharmaceutical monopolies, insurance fraud, and foundation conflicts through existing antitrust, fraud, and tax-exempt organization law',
      steps: [
        { step: 1, title: 'False Claims Act Qui Tam Actions', description: 'File qui tam lawsuits under the False Claims Act targeting Medicare Advantage upcoding, pharmaceutical kickback schemes, and systematic insurance overbilling of federal healthcare programs', legalBasis: ['31 U.S.C. 3729-3733 (False Claims Act)', 'Qui tam whistleblower provisions'], filingTarget: 'DOJ Civil Division; relevant U.S. District Court' },
        { step: 2, title: 'Class Action for AI Claim Denial', description: 'Bring class action litigation against UnitedHealth Group and other insurers for systematic AI-driven claim denial constituting bad faith, breach of contract, and healthcare fraud', legalBasis: ['State bad faith insurance laws', '18 U.S.C. 1347 (Healthcare fraud)', 'State consumer protection statutes'] },
        { step: 3, title: 'Bayh-Dole March-In Petition', description: 'File formal petition with NIH to exercise march-in rights on publicly-funded pharmaceutical patents where products are not available on reasonable terms', legalBasis: ['35 U.S.C. 203 (March-in rights)', 'Bayh-Dole Act'], filingTarget: 'NIH Director; relevant funding agency' },
        { step: 4, title: 'Antitrust Claims Against PBMs', description: 'Bring antitrust claims against the three pharmacy benefit managers controlling 80% of the market for coordinated pricing behavior and anticompetitive exclusionary contracts', legalBasis: ['15 U.S.C. 1-7 (Sherman Act)', '15 U.S.C. 15 (Clayton Act treble damages)'] },
      ],
      relevantMechanisms: ['False Claims Act', 'Bayh-Dole march-in rights', 'Sherman Antitrust Act', 'State bad faith insurance law'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official' as const,
      overview: 'Elected officials can reform healthcare through drug pricing legislation, insurance regulation, foundation oversight, and patent reform',
      steps: [
        { step: 1, title: 'Expand Medicare Price Negotiation', description: 'Introduce legislation expanding Medicare drug price negotiation to all covered drugs (not just 10 initially); implement international reference pricing benchmarks', legalBasis: ['Article I, Section 8 (Congressional spending authority)', '42 U.S.C. 1395w-111'] },
        { step: 2, title: 'Ban AI Claim Denial Without Review', description: 'Pass legislation requiring human review of all AI-generated insurance claim denials and mandating transparent disclosure of algorithms used in coverage determinations', legalBasis: ['Commerce Clause regulatory authority', 'Due Process Clause'] },
        { step: 3, title: 'Reform Bayh-Dole to Require Reasonable Pricing', description: 'Amend Bayh-Dole Act to require reasonable pricing on all products derived from publicly-funded research and establish automatic march-in triggers when U.S. prices exceed median of comparable nations', legalBasis: ['35 U.S.C. 200-212 (Bayh-Dole Act)', 'Congressional spending authority'] },
        { step: 4, title: 'Foundation Investment Disclosure', description: 'Require private foundations to publicly disclose all investments in entities benefiting from their programs and prohibit self-dealing through circular grant-investment arrangements', legalBasis: ['26 U.S.C. 501(c)(3)', '26 U.S.C. 4941'] },
        { step: 5, title: 'Revolving Door Cooling Period', description: 'Extend mandatory cooling-off period to 5 years before FDA officials can join pharmaceutical company boards or lobbying firms', legalBasis: ['18 U.S.C. 207 (Post-employment restrictions)', 'Ethics in Government Act'] },
      ],
      relevantMechanisms: ['Medicare price negotiation authority', 'Bayh-Dole Act reform', 'Foundation tax-exempt oversight', 'Post-employment ethics rules'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators can enforce existing healthcare fraud, antitrust, and foundation law to address pharmaceutical and insurance industry abuses',
      steps: [
        { step: 1, title: 'CMS Medicare Advantage Audit', description: 'Conduct comprehensive audit of Medicare Advantage diagnosis coding practices and recover estimated $75B+ in overpayments from systematic upcoding', legalBasis: ['42 U.S.C. 1395w-23 (MA payment methodology)', 'False Claims Act'], filingTarget: 'CMS Center for Medicare' },
        { step: 2, title: 'FTC PBM Investigation', description: 'Complete FTC investigation of pharmacy benefit manager anticompetitive practices and issue enforcement actions against three PBMs controlling 80% of market', legalBasis: ['15 U.S.C. 45 (FTC Act)', '15 U.S.C. 1-7 (Sherman Act)'] },
        { step: 3, title: 'IRS Foundation Conflict Investigation', description: 'IRS investigation of Gates Foundation for self-dealing through investments in companies benefiting from Foundation-funded programs', legalBasis: ['26 U.S.C. 4941 (Self-dealing)', '26 U.S.C. 501(c)(3)'] },
        { step: 4, title: 'SEC Pharmaceutical Disclosure Enforcement', description: 'SEC enforcement requiring full disclosure of pharmaceutical company lobbying, pay-for-delay agreements, and pricing strategies in securities filings', legalBasis: ['15 U.S.C. 78j(b) (Securities Exchange Act)', 'SEC disclosure rules'] },
      ],
      relevantMechanisms: ['False Claims Act', 'FTC Act', 'Foundation self-dealing rules', 'SEC disclosure requirements'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement' as const,
      overview: 'Law enforcement can investigate and prosecute healthcare fraud, pharmaceutical kickbacks, and systematic insurance claim denial as criminal offenses',
      steps: [
        { step: 1, title: 'Healthcare Fraud Prosecution', description: 'Investigate and prosecute systematic AI-driven insurance claim denial as healthcare fraud under 18 U.S.C. 1347 when companies knowingly deploy algorithms with known high error rates', legalBasis: ['18 U.S.C. 1347 (Healthcare fraud)', '18 U.S.C. 371 (Conspiracy)'] },
        { step: 2, title: 'Anti-Kickback Criminal Enforcement', description: 'Investigate pharmaceutical company payments to physicians that constitute illegal kickbacks for prescriptions, including speaker fees, consulting arrangements, and research grants', legalBasis: ['42 U.S.C. 1320a-7b (Anti-Kickback Statute)', '18 U.S.C. 1347'] },
        { step: 3, title: 'Medicare Advantage Fraud Investigation', description: 'Criminal investigation of systematic Medicare Advantage diagnosis upcoding as scheme to defraud federal healthcare programs', legalBasis: ['18 U.S.C. 1347 (Healthcare fraud)', '31 U.S.C. 3729 (False Claims Act)'] },
        { step: 4, title: 'Pay-for-Delay Criminal Antitrust', description: 'Investigate pharmaceutical pay-for-delay agreements as criminal antitrust violations where companies pay generic manufacturers to stay out of the market', legalBasis: ['15 U.S.C. 1 (Sherman Act criminal provisions)', '18 U.S.C. 371 (Conspiracy)'] },
      ],
      relevantMechanisms: ['Healthcare fraud statute', 'Anti-Kickback Statute', 'False Claims Act', 'Sherman Act criminal provisions'],
      urgency: 'high' as const
    }
  ],
  successCriteria: [
    'Medicare price negotiation expanded to all covered drugs with international reference pricing benchmarks',
    'Bayh-Dole march-in rights exercised for first time on publicly-funded pharmaceutical patents priced unreasonably',
    'AI-driven insurance claim denial banned without mandatory human review and transparent algorithm disclosure',
    'Medicare Advantage upcoding overpayments ($75B+) audited and recovered by CMS',
    'FTC enforcement action against three PBMs controlling 80% of prescription drug market',
    'Gates Foundation required to divest investments in companies benefiting from Foundation-funded programs',
    'Five-year revolving door cooling period enacted for FDA officials before pharmaceutical industry employment',
    'False Claims Act qui tam recoveries for systematic insurance claim denial fraud',
    'Pharmaceutical lobbying reform limiting industry to same lobbying levels as other sectors',
    'Universal healthcare access achieved eliminating 27 million uninsured and medical debt bankruptcy',
    'International framework ensuring pandemic products developed with public funding are available at cost',
    'Foundation investment disclosure requirements enacted for all private foundations exceeding $1B endowment'
  ]
};
