import type { AccountabilityData } from '@/types/accountability';

export const flintWaterCrisisAccountability: AccountabilityData = {
  investigationSlug: 'flint-water-crisis',
  crimeSummary: 'From April 2014 to October 2015, state-appointed emergency managers and Michigan state agencies switched Flint, Michigan\'s water source from treated Lake Huron water to the corrosive Flint River without requiring federally mandated corrosion control treatment. Lead leached from aging pipes at levels up to 13,200 parts per billion, 880 times the EPA action level, poisoning approximately 100,000 residents including an estimated 12,000 children. State officials falsified test results, suppressed EPA warnings, attacked independent researchers, and told residents the water was safe for 18 months. A concurrent Legionnaires\' disease outbreak linked to the untreated water killed at least 12 people and sickened 87. Fifteen officials were criminally charged, yet every case was dismissed by 2023. A $626 million civil settlement was approved, but no one was held criminally accountable for the mass poisoning of a majority-Black city.',
  totalHarm: 'Approximately 100,000 Flint residents exposed to lead-contaminated drinking water for 18 months; an estimated 6,000 to 12,000 children exposed to dangerous lead levels causing irreversible neurological damage including reduced IQ, learning disabilities, ADHD, and behavioral disorders; at least 12 people killed and 87 sickened by Legionnaires\' disease linked to untreated water; 1 in 5 Flint residents meeting criteria for presumptive major depression and 1 in 4 for PTSD; property values devastated in already deindustrialized city; estimated 30,000 lead and galvanized steel service lines requiring replacement costing over $500 million; lifelong healthcare, special education, and lost productivity costs for poisoned children running into billions; destruction of trust in government water systems extending to communities nationwide',
  victimsAffected: 'Residents of Flint, Michigan (population ~100,000; 54% Black, 40% poverty rate); children under 6 most severely affected by lead neurotoxicity; pregnant women exposed to lead during fetal development; families of 12 Legionnaires\' disease fatalities and 87 who were sickened; students in Flint schools exposed to contaminated drinking water; small business owners and property owners in city with collapsed property values; residents billed for water that was poisoning them; families who had water shut off for nonpayment of contaminated water bills',
  primaryTargets: [
    {
      name: 'Rick Snyder (Governor of Michigan 2011-2019)',
      role: 'Appointed emergency managers who switched water source; administration dismissed resident complaints and researcher warnings for 18 months; chief of staff Dennis Muchmore emails show knowledge of crisis months before acknowledgment; testified before Congress',
      currentStatus: 'Charged January 2021 with 2 misdemeanor counts of willful neglect of duty; charges dismissed December 2022 on procedural grounds; Michigan Supreme Court declined appeal October 2023; Harvard rescinded senior research fellow appointment; no criminal accountability',
      accountabilityPath: 'Federal civil rights investigation under 42 U.S.C. 1983 and Title VI for disparate impact on majority-Black city; congressional investigation with subpoena power for administration emails and communications; civil litigation for personal liability in cover-up',
      obstacles: ['State charges dismissed on procedural grounds not merits', 'Michigan Supreme Court refused appeal', 'Qualified immunity defense for official acts', 'Political reluctance to re-prosecute former governor']
    },
    {
      name: 'Michigan Department of Environmental Quality (MDEQ)',
      role: 'Failed to require corrosion control treatment as mandated by federal Lead and Copper Rule; instructed testers to "pre-flush" taps falsifying lead readings; spokesperson Brad Wurfel dismissed concerns as "near-hysteria" and attacked researchers; Director Dan Wyant resigned December 2015',
      currentStatus: 'Restructured and renamed Michigan Department of Environment, Great Lakes, and Energy (EGLE) in 2019; no institutional accountability beyond settlement participation; no systemic reforms to prevent recurrence verified',
      accountabilityPath: 'EPA enforcement action for Safe Drinking Water Act violations; federal audit of EGLE compliance monitoring; mandatory independent testing protocols; whistleblower protections for state employees who report violations',
      obstacles: ['Agency restructuring obscured institutional continuity', 'Individual officials\' charges dismissed', 'State sovereign immunity in some contexts', 'Political appointee turnover']
    },
    {
      name: 'Emergency Manager System (Michigan PA 436)',
      role: 'State law gave unelected appointed managers total control over municipal operations, overriding elected officials; Emergency Managers Darnell Earley and Jerry Ambrose made decisions that caused and prolonged the crisis; Ambrose overruled city council\'s 7-1 vote to reconnect to Detroit water; system disproportionately applied to majority-Black cities',
      currentStatus: 'Emergency Manager law (PA 436) remains on books despite voters rejecting predecessor law (PA 4) in 2012 referendum; legislature passed new version with referendum-proof appropriations rider; at its peak, over half of Michigan\'s Black population lived under emergency management',
      accountabilityPath: 'Constitutional challenge under Equal Protection Clause for racially disparate application; federal Voting Rights Act challenge for disenfranchisement of predominantly Black cities; legislative repeal campaign',
      obstacles: ['Appropriations rider makes law referendum-proof', 'Fiscal emergency justification arguments', 'No federal court ruling on constitutionality', 'State legislative resistance to repeal']
    },
    {
      name: 'Nick Lyon (Director, Michigan DHHS)',
      role: 'Charged with involuntary manslaughter for failing to alert the public about Legionnaires\' disease outbreak when he knew another outbreak was foreseeable; concealed connection between untreated water and Legionella bacteria',
      currentStatus: 'All charges dismissed October 2022 when judge ruled grand jury process invalid; had sufficient evidence ruling from August 2018 but never went to trial; no criminal accountability for 12 Legionnaires\' deaths',
      accountabilityPath: 'Federal wrongful death investigation for Legionnaires\' victims; civil litigation for families of the 12 who died; public health governance reform requiring mandatory disclosure of disease outbreaks',
      obstacles: ['State charges procedurally dismissed', 'Statute of limitations concerns for new federal charges', 'Qualified immunity for policy decisions', 'Proving causation for specific Legionnaires\' deaths']
    },
    {
      name: 'EPA Region 5 Leadership',
      role: 'Suppressed Miguel Del Toral\'s June 2015 memo warning of dangerous lead levels; failed to enforce Safe Drinking Water Act for months while knowing residents were being poisoned; EPA OIG 2018 report confirmed "management weaknesses delayed response"',
      currentStatus: 'EPA Administrator Gina McCarthy acknowledged agency "should have been more aggressive" but no EPA official was criminally charged or disciplined; Region 5 administrator Susan Hedman resigned January 2016',
      accountabilityPath: 'Congressional investigation of EPA suppression of Del Toral memo; OIG referral for failure to enforce SDWA; whistleblower recognition and protection for Del Toral; mandatory reporting requirements when EPA identifies imminent health risks',
      obstacles: ['Federal sovereign immunity', 'Discretionary function exception', 'Political pressure to protect agency', 'Del Toral\'s memo was eventually released']
    },
    {
      name: 'Investment Banks (JPMorgan Chase, Wells Fargo, Stifel Nicolaus)',
      role: 'Underwrote the 2014 bond sale financing the Karegnondi Water Authority pipeline; Flint residents sued alleging banks knew that use of raw Flint River water was a necessary element of the plan',
      currentStatus: 'Banks contributed to the $626 million civil settlement; profited from bond underwriting fees; faced no regulatory action; similar bond financing practices continue',
      accountabilityPath: 'SEC investigation of due diligence in municipal bond underwriting; regulatory requirements for environmental and public health impact assessment in infrastructure bond underwriting; civil litigation for failure to assess risks',
      obstacles: ['Banks argue they were not responsible for operational decisions', 'Municipal bond underwriting is highly profitable industry', 'Limited precedent for underwriter liability', 'Settlement participation may limit further claims']
    }
  ],
  legalMechanisms: [
    {
      name: 'Safe Drinking Water Act',
      statute: '42 U.S.C. 300f et seq.',
      description: 'Federal law governing public water system safety. MDEQ failed to require corrosion control treatment as mandated under the Lead and Copper Rule. EPA issued emergency order January 2016 not lifted until May 2025. Provides both civil enforcement and criminal penalties for tampering with public water systems.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['EPA', 'State primacy agencies', 'DOJ Environment and Natural Resources Division'],
      notes: 'MDEQ had delegated primacy for SDWA enforcement in Michigan but failed to enforce its own regulations. EPA\'s emergency order was the first ever issued for a lead contamination crisis.'
    },
    {
      name: 'Lead and Copper Rule',
      statute: '40 C.F.R. 141.80-141.91',
      description: 'EPA regulation under SDWA requiring public water systems to implement corrosion control treatment and monitor lead levels at consumer taps. MDEQ\'s failure to require corrosion control when Flint switched water sources was the proximate cause of the mass lead poisoning. EPA revised the rule in 2024 to require replacement of all lead service lines within 10 years.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['EPA', 'State environmental agencies with SDWA primacy'],
      notes: 'The 2024 revised Lead and Copper Rule Improvements represent the most significant strengthening since the original 1991 rule, directly driven by the Flint crisis.'
    },
    {
      name: 'Deprivation of Rights Under Color of Law',
      statute: '42 U.S.C. 1983 (civil) / 18 U.S.C. 242 (criminal)',
      description: 'State officials deprived residents of the right to safe drinking water while acting under color of state law. Section 1983 provided the basis for the $626 million civil settlement. Section 242 criminal prosecution was never pursued by DOJ despite the total failure of state criminal cases.',
      hasStatuteOfLimitations: true,
      limitationPeriod: 'No statute of limitations for Section 242 if death results; 4 years for personal injury under Section 1983 in Michigan',
      reachesHeirs: true,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['DOJ Civil Rights Division', 'Private plaintiffs (Section 1983)', 'Federal grand jury (Section 242)'],
      notes: 'The racial dimension of the crisis, majority-Black city poisoned while state officials suppressed evidence, strengthens both civil and criminal civil rights claims.'
    },
    {
      name: 'Title VI of Civil Rights Act',
      statute: '42 U.S.C. 2000d',
      description: 'Prohibits discrimination in federally funded programs. Flint\'s water system received federal funding. Michigan Civil Rights Commission found "systemic racism" contributed to the crisis. No formal Title VI enforcement action was ever brought despite clear disparate impact on majority-Black population.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['EPA Office of Civil Rights', 'DOJ Civil Rights Division', 'Private plaintiffs'],
      notes: 'EPA\'s failure to bring a Title VI action despite the Michigan Civil Rights Commission\'s own finding of systemic racism represents one of the most significant enforcement failures of the crisis.'
    },
    {
      name: 'Federal Water Tampering',
      statute: '42 U.S.C. 300i-1',
      description: 'Makes it a federal crime to tamper with a public water system or attempt or threaten to do so. Officials who ordered falsification of lead testing data and suppressed evidence of contamination arguably tampered with the water system\'s monitoring and safety mechanisms.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (potentially tolled by active concealment)',
      reachesHeirs: false,
      applicability: 'potentially_applicable' as const,
      authorizedActors: ['DOJ Criminal Division', 'FBI', 'EPA Criminal Investigation Division'],
      notes: 'Never invoked in the Flint case despite officials directing falsification of testing protocols. Pre-flushing instructions to testers constitute interference with the monitoring system designed to detect lead contamination.'
    },
    {
      name: 'Michigan Involuntary Manslaughter',
      statute: 'MCL 750.321',
      description: 'Criminal statute for causing death through gross negligence. Charged against Nick Lyon and others in connection with the Legionnaires\' disease deaths. Had the strongest factual basis of any criminal charge, officials knew about the outbreak and failed to warn the public.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '6 years in Michigan',
      reachesHeirs: false,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['Michigan Attorney General', 'County prosecutors'],
      notes: 'All manslaughter charges were dismissed in 2022 when the court ruled the one-judge grand jury process used by AG Nessel\'s office was procedurally invalid. The dismissals were on process, not evidence.'
    },
    {
      name: 'Michigan Emergency Manager Law',
      statute: 'Michigan Public Act 436 of 2012',
      description: 'State law authorizing appointment of emergency managers with plenary power over local government finances and operations. Emergency managers made the decisions that caused and prolonged the water crisis. Michigan voters rejected the predecessor law (PA 4) in a 2012 referendum, but the legislature immediately passed PA 436 with an appropriations rider making it referendum-proof.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable' as const,
      authorizedActors: ['Michigan Legislature (repeal)', 'Federal courts (constitutional challenge)', 'Michigan voters (if appropriations rider removed)'],
      notes: 'At its peak application, more than half of Michigan\'s Black population lived under emergency management, raising profound constitutional questions about racial disenfranchisement.'
    }
  ],
  wealthTrace: [
    {
      name: 'State of Michigan',
      relationship: 'Government entity whose appointed officials caused the crisis through emergency management',
      transferMethod: 'State appropriations and settlement fund contributions from state coffers',
      estimatedValue: '$350 million+ in direct state aid plus majority share of $626 million civil settlement',
      legalEntities: ['State of Michigan', 'Michigan Department of Treasury'],
      recoveryMechanisms: ['Settlement fund distribution monitoring', 'Congressional pressure for continued state funding', 'Civil rights enforcement for equitable resource allocation']
    },
    {
      name: 'JPMorgan Chase / Wells Fargo / Stifel Nicolaus',
      relationship: 'Investment banks that underwrote municipal bonds financing the KWA pipeline project',
      transferMethod: 'Bond underwriting fees from $85 million+ in municipal bonds; settlement contributions',
      estimatedValue: 'Underwriting fees on $85M+ bond issuance; contributed to $626M settlement',
      legalEntities: ['JPMorgan Chase & Co.', 'Wells Fargo & Company', 'Stifel Financial Corp.'],
      recoveryMechanisms: ['SEC investigation of due diligence in municipal bond underwriting', 'Civil litigation for failure to assess environmental risks', 'Regulatory requirements for impact assessment']
    },
    {
      name: 'Veolia North America / Lockwood Andrews & Newnam (LAN)',
      relationship: 'Engineering firms hired to assess and manage Flint water quality',
      transferMethod: 'Consulting fees paid by City of Flint while firms failed to identify corrosion control failure',
      estimatedValue: 'Consulting contracts valued at millions; AG filed civil suit for negligence, fraud, and public nuisance',
      legalEntities: ['Veolia North America Inc.', 'Lockwood Andrews & Newnam Inc.'],
      recoveryMechanisms: ['Civil litigation for professional negligence', 'State AG enforcement action', 'Professional licensing review']
    },
    {
      name: '$626 Million Civil Settlement Fund',
      relationship: 'Court-approved settlement for Flint residents from State of Michigan, City of Flint, engineering firms, and other defendants',
      transferMethod: 'Federal court-supervised claims process with 80% allocated to children',
      estimatedValue: '$626 million approved November 2021; inadequate for lifelong neurological damage to 12,000+ children',
      legalEntities: ['Flint Water Crisis Settlement Fund', 'U.S. District Court, Eastern District of Michigan'],
      recoveryMechanisms: ['Monitor claims distribution and processing', 'Advocate for supplemental appropriations', 'Challenge inadequacy of per-child compensation']
    },
    {
      name: 'Federal Government (EPA/FEMA)',
      relationship: 'Federal agencies providing emergency aid and infrastructure grants after crisis acknowledgment',
      transferMethod: 'Federal appropriations and emergency declarations',
      estimatedValue: '$100 million EPA infrastructure grant + $5 million FEMA emergency aid + Infrastructure Investment and Jobs Act allocations',
      legalEntities: ['EPA', 'FEMA', 'U.S. Department of Housing and Urban Development'],
      recoveryMechanisms: ['Track federal fund disbursement', 'Advocate for additional appropriations', 'Ensure funds reach affected residents']
    },
    {
      name: 'Emergency Managers (personal compensation)',
      relationship: 'State-appointed officials who made decisions causing the crisis while receiving state-funded salaries',
      transferMethod: 'State-funded emergency manager compensation',
      estimatedValue: '$160,000-$170,000 annual salaries; no personal financial penalties despite criminal charges',
      legalEntities: ['State of Michigan (employer)'],
      recoveryMechanisms: ['Civil liability for willful misconduct', 'Recovery of compensation earned during period of malfeasance', 'Legislative reform of emergency manager indemnification']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'U.S. Department of Justice',
      title: 'Attorney General',
      jurisdiction: 'Federal civil rights prosecution and environmental crime enforcement',
      powers: ['Prosecute under 18 U.S.C. 242 (deprivation of rights under color of law)', 'Investigate federal water tampering under 42 U.S.C. 300i-1', 'Bring pattern-or-practice civil rights suits', 'Convene federal grand jury']
    },
    {
      name: 'EPA Office of Enforcement and Compliance Assurance',
      title: 'EPA Administrator',
      jurisdiction: 'Safe Drinking Water Act enforcement and emergency authority',
      powers: ['Issue emergency orders under 42 U.S.C. 300i', 'Enforce SDWA violations against state primacy agencies', 'Refer criminal cases to DOJ', 'Conduct Title VI enforcement'],
      contactMethod: 'EPA Headquarters, 1200 Pennsylvania Ave NW, Washington DC 20460'
    },
    {
      name: 'Michigan Legislature',
      title: 'State Legislature',
      jurisdiction: 'State law governing emergency management, environmental regulation, and appropriations',
      powers: ['Repeal Emergency Manager Law (PA 436)', 'Appropriate funds for continued Flint remediation', 'Conduct legislative oversight of EGLE', 'Reform environmental enforcement mechanisms']
    },
    {
      name: 'U.S. District Court, Eastern District of Michigan',
      title: 'Federal Judge',
      jurisdiction: 'Ongoing supervision of $626M settlement distribution and pipe replacement orders',
      powers: ['Order compliance with settlement terms', 'Hold parties in civil contempt for missed deadlines', 'Approve or reject claims distributions', 'Issue injunctive relief']
    },
    {
      name: 'Michigan Attorney General',
      title: 'Attorney General',
      jurisdiction: 'State criminal prosecution and civil enforcement authority',
      powers: ['Bring criminal charges against state officials', 'File civil suits for negligence and fraud', 'Investigate environmental violations', 'Represent state in federal proceedings'],
      contactMethod: 'Michigan Attorney General, P.O. Box 30212, Lansing MI 48909'
    },
    {
      name: 'U.S. Congress',
      title: 'Congressional Committees',
      jurisdiction: 'Federal oversight, appropriations, and legislative authority',
      powers: ['Subpoena executive branch communications', 'Hold oversight hearings', 'Appropriate federal infrastructure funding', 'Legislate environmental justice protections']
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Citizens can demand accountability through civic engagement, support Flint residents, and push for lead pipe replacement nationwide',
      steps: [
        { step: 1, title: 'Contact Congressional Representatives', description: 'Contact your senators and representative to demand a federal investigation into why DOJ never brought civil rights charges under 18 U.S.C. 242 despite the total failure of state prosecution on procedural grounds, not evidentiary grounds. The mass poisoning of a majority-Black city by state officials warrants federal civil rights scrutiny.', requirements: ['Names and contact info for your congressional delegation'], filingTarget: 'Congressional offices via phone, email, or in-person meetings', estimatedTime: '30 minutes per contact' },
        { step: 2, title: 'Support Flint Community Organizations', description: 'Donate to and support organizations serving Flint residents including the Flint Water Study Group, Flint Rising, the Community Foundation of Greater Flint, and local food banks providing clean water resources. Many families continue to rely on bottled water years after the crisis.', requirements: ['Financial resources'], estimatedTime: 'Ongoing' },
        { step: 3, title: 'Test Your Own Water', description: 'Request lead testing for your home water supply through your local water utility, which is typically free. If lead service lines are present, demand replacement under the 2024 revised Lead and Copper Rule requiring all lead pipes replaced within 10 years. An estimated 9.2 million lead service lines remain in use nationwide.', requirements: ['Contact your water utility'], estimatedTime: '1-2 hours to request testing' },
        { step: 4, title: 'Oppose Emergency Manager Systems', description: 'Support legislative repeal of Michigan PA 436 and oppose similar undemocratic governance structures in other states. Contact Michigan state legislators if you are a Michigan resident. At its peak, over half of Michigan\'s Black population lived under unelected emergency management.', requirements: ['Knowledge of state legislators'], filingTarget: 'Michigan state legislature', estimatedTime: '30 minutes per contact' }
      ],
      relevantMechanisms: ['Safe Drinking Water Act', 'Lead and Copper Rule', 'Michigan Emergency Manager Law'],
      urgency: 'standard' as const
    },
    {
      role: 'journalist',
      overview: 'Journalists can investigate unresolved questions about government knowledge, track settlement distribution, and examine the nationwide lead pipe crisis that Flint exposed',
      steps: [
        { step: 1, title: 'FOIA Seized Electronic Evidence', description: 'File FOIA requests for the complete contents of Governor Snyder\'s cellphone and the 65+ officials\' devices seized by AG Nessel\'s investigators in 2019. These devices were the basis for the grand jury investigation but their full contents have never been publicly disclosed. The procedural dismissal of charges means the evidence was never tested at trial.', requirements: ['FOIA expertise', 'Legal support for appeals'], filingTarget: 'Michigan Attorney General\'s Office', estimatedTime: '6-18 months' },
        { step: 2, title: 'Audit Settlement Fund Distribution', description: 'Investigate the claims processing and distribution of the $626 million settlement fund. Track how much has actually reached poisoned children and their families versus administrative and legal costs. Determine whether the 80% allocation to children is being honored and whether per-child amounts are adequate for lifelong neurological damage.', requirements: ['Court records access', 'Financial analysis capability'], filingTarget: 'U.S. District Court, Eastern District of Michigan', estimatedTime: '3-6 months' },
        { step: 3, title: 'Map the National Lead Pipe Crisis', description: 'Examine the 9.2 million lead service lines remaining in use across the United States. Map which communities by race, income, and geography are most affected. Investigate whether the 2024 Lead and Copper Rule replacement timeline is achievable and which water systems are least prepared.', requirements: ['Data analysis capabilities', 'EPA SDWIS database access'], estimatedTime: '3-6 months' },
        { step: 4, title: 'Document Long-Term Health Outcomes', description: 'Track the educational and developmental outcomes of Flint children now 10+ years after lead exposure. Interview families, schools, and healthcare providers. Compare academic performance, special education enrollment, and behavioral health metrics before and after the crisis. The children who were poisoned are now reaching ages where lead\'s neurological effects become measurable.', requirements: ['Community access in Flint', 'Epidemiological consultants'], estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['Safe Drinking Water Act', 'Lead and Copper Rule', 'Deprivation of Rights Under Color of Law'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer',
      overview: 'Legal professionals can pursue remaining accountability avenues including federal civil rights claims, constitutional challenges to emergency management, and settlement claims advocacy',
      steps: [
        { step: 1, title: 'Evaluate Federal Civil Rights Prosecution', description: 'Assess the viability of federal criminal prosecution under 18 U.S.C. 242 (deprivation of rights under color of law) given that state charges were dismissed on procedural grounds rather than evidentiary insufficiency. There is no statute of limitations for Section 242 violations resulting in death. The 12 Legionnaires\' fatalities and potential lead-related deaths provide the basis for charges carrying life imprisonment.', requirements: ['Federal criminal law expertise', 'Civil rights litigation experience'], filingTarget: 'DOJ Civil Rights Division', legalBasis: ['18 U.S.C. 242', '42 U.S.C. 1983'], estimatedTime: '12-24 months for case development' },
        { step: 2, title: 'Challenge Emergency Manager Law', description: 'Bring constitutional challenge to Michigan PA 436 under the Equal Protection Clause of the Fourteenth Amendment. The racially disparate application of emergency management, with over half of Michigan\'s Black population under emergency management at one point, provides strong statistical evidence of discriminatory impact. Consider Voting Rights Act challenge for effective disenfranchisement.', requirements: ['Constitutional litigation experience', 'Statistical evidence of racial disparity'], filingTarget: 'Federal district court', legalBasis: ['14th Amendment Equal Protection', 'Voting Rights Act'], estimatedTime: '2-5 years' },
        { step: 3, title: 'Represent Settlement Claims', description: 'Represent Flint families in the settlement claims process. Ensure adequate compensation for children with documented lead-related developmental delays. Challenge the cap structure if per-child distributions are inadequate for anticipated lifetime costs of neurological damage, special education, and reduced earning capacity.', requirements: ['Mass tort claims experience', 'Medical expert access'], filingTarget: 'U.S. District Court, Eastern District of Michigan', legalBasis: ['Settlement agreement terms', '42 U.S.C. 1983'], estimatedTime: '1-3 years' },
        { step: 4, title: 'File Title VI Complaints', description: 'File administrative complaints with EPA\'s Office of Civil Rights under Title VI for the racially discriminatory application of Safe Drinking Water Act enforcement. Michigan Civil Rights Commission found "systemic racism" contributed to the crisis. EPA\'s own failure to enforce SDWA in a majority-Black city warrants formal civil rights review.', requirements: ['Title VI complaint drafting expertise'], filingTarget: 'EPA Office of Civil Rights', legalBasis: ['42 U.S.C. 2000d', 'EPA Title VI regulations'], estimatedTime: '1-2 years' }
      ],
      relevantMechanisms: ['Deprivation of Rights Under Color of Law', 'Title VI of Civil Rights Act', 'Michigan Emergency Manager Law', 'Safe Drinking Water Act'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official',
      overview: 'Elected officials have the power to repeal the emergency manager law, fund ongoing remediation, strengthen EPA enforcement authority, and protect other communities from Flint-type failures',
      steps: [
        { step: 1, title: 'Repeal Emergency Manager Law', description: 'Introduce legislation repealing Michigan Public Act 436 of 2012 or, at minimum, removing the appropriations rider that prevents voter referendum. Michigan voters rejected the predecessor law (PA 4) in a 2012 referendum but the legislature overrode the democratic result. At this law\'s peak, over half of Michigan\'s Black population lived under unelected governance.', requirements: ['Legislative sponsorship', 'Co-sponsors'], filingTarget: 'Michigan state legislature', estimatedTime: '1-2 legislative sessions' },
        { step: 2, title: 'Restore Flint Crisis Funding', description: 'Reverse the Michigan House\'s December 2025 vote blocking $8.3 million in continued Flint crisis assistance. Flint residents still face elevated health risks, ongoing pipe replacement needs, and inadequate support services for lead-exposed children who are now entering adolescence with developmental challenges.', requirements: ['Appropriations committee support'], filingTarget: 'Michigan House and Senate Appropriations Committees', estimatedTime: '1 budget cycle' },
        { step: 3, title: 'Strengthen EPA Enforcement Authority', description: 'Introduce federal legislation requiring immediate public notification within 24 hours when any water system contamination exceeding action levels is detected by any state or federal agency. Ban the suppression of internal scientific findings like the Del Toral memo. Create whistleblower protections for EPA and state agency scientists.', requirements: ['Congressional co-sponsors', 'Committee jurisdiction'], filingTarget: 'Senate and House Environment Committees', estimatedTime: '1-2 congressional sessions' },
        { step: 4, title: 'Fund Lead Service Line Replacement', description: 'Support full implementation of the 2024 revised Lead and Copper Rule requiring replacement of all 9.2 million lead service lines within 10 years. Ensure adequate appropriations through the Infrastructure Investment and Jobs Act ($15 billion allocated) and supplemental funding. Prioritize communities with the highest poverty rates and oldest infrastructure.', requirements: ['Appropriations authority'], filingTarget: 'Senate and House Appropriations Committees', estimatedTime: '10-year implementation' }
      ],
      relevantMechanisms: ['Michigan Emergency Manager Law', 'Safe Drinking Water Act', 'Lead and Copper Rule'],
      urgency: 'high' as const
    },
    {
      role: 'law_enforcement',
      overview: 'Federal law enforcement should evaluate whether federal civil rights prosecution is warranted given the total collapse of state criminal cases on procedural rather than evidentiary grounds',
      steps: [
        { step: 1, title: 'Evaluate Federal Civil Rights Charges', description: 'DOJ Civil Rights Division should evaluate whether federal charges under 18 U.S.C. 242 are warranted against officials who knowingly poisoned Flint residents while acting under color of state law. State charges were dismissed on procedural grounds, the evidence of mass poisoning was never contested. Section 242 carries life imprisonment when death results, and there is no statute of limitations.', requirements: ['DOJ Civil Rights Division authority', 'Grand jury subpoena power'], filingTarget: 'Federal grand jury', legalBasis: ['18 U.S.C. 242'], estimatedTime: '12-24 months' },
        { step: 2, title: 'Investigate Water Tampering', description: 'Investigate potential federal water tampering charges under 42 U.S.C. 300i-1 against officials who ordered the falsification of lead testing data through pre-flushing instructions. Tampering with monitoring protocols designed to detect contamination of a public water system falls within the statute\'s scope.', requirements: ['EPA Criminal Investigation Division', 'FBI support'], filingTarget: 'Federal courts', legalBasis: ['42 U.S.C. 300i-1'], estimatedTime: '12-18 months' },
        { step: 3, title: 'Review Sealed Electronic Evidence', description: 'Review the contents of 65+ officials\' seized phones and hard drives that formed the basis of the state grand jury investigation. The procedural dismissal means this evidence was never tested at trial. Determine whether it reveals previously unidentified criminal conduct, conspiracy, or obstruction that warrants federal prosecution.', requirements: ['Federal warrant authority', 'Digital forensics capability'], filingTarget: 'DOJ', legalBasis: ['18 U.S.C. 242', '18 U.S.C. 1001'], estimatedTime: '6-12 months' }
      ],
      relevantMechanisms: ['Deprivation of Rights Under Color of Law', 'Federal Water Tampering'],
      urgency: 'standard' as const
    },
    {
      role: 'regulator',
      overview: 'Environmental and public health regulators must strengthen water system oversight to prevent another Flint crisis anywhere in the country',
      steps: [
        { step: 1, title: 'Mandate Independent Testing', description: 'Implement mandatory independent third-party water testing for any municipality under emergency management, fiscal receivership, or any form of state oversight that overrides local elected governance. The conflict of interest when state-appointed managers make cost-cutting decisions affecting public health while state agencies are responsible for enforcement must be eliminated.', requirements: ['EPA regulatory authority', 'State agency cooperation'], filingTarget: 'EPA rulemaking', estimatedTime: '1-2 years' },
        { step: 2, title: 'Ban Suppression of Scientific Findings', description: 'Require EPA regional offices to publicly disclose and immediately escalate any internal findings of drinking water contamination exceeding action levels. Prohibit the suppression of scientific memos like Miguel Del Toral\'s June 2015 warning. Create mandatory 24-hour disclosure requirements and whistleblower protections for scientists who identify contamination.', requirements: ['EPA policy authority', 'Congressional support for statutory mandate'], filingTarget: 'EPA Administrator', estimatedTime: '6-12 months for policy; 1-2 years for legislation' },
        { step: 3, title: 'Accelerate Lead and Copper Rule Implementation', description: 'Ensure the 2024 revised Lead and Copper Rule requiring lead service line replacement within 10 years is implemented on schedule. Prioritize environmental justice communities, low-income, predominantly minority neighborhoods with aging infrastructure. Monitor water system compliance plans and enforce deadlines.', requirements: ['EPA enforcement authority', 'Adequate funding'], filingTarget: 'EPA regional offices, state primacy agencies', estimatedTime: '10-year implementation window' },
        { step: 4, title: 'Require Corrosion Control for Source Changes', description: 'Mandate automatic corrosion control monitoring and treatment whenever any public water system changes its water source or treatment process. The fundamental failure in Flint was the absence of corrosion control when switching from treated Lake Huron water to the corrosive Flint River. This should be an absolute requirement, not discretionary.', requirements: ['EPA regulatory authority'], filingTarget: 'EPA rulemaking', estimatedTime: '1-2 years' }
      ],
      relevantMechanisms: ['Safe Drinking Water Act', 'Lead and Copper Rule', 'Title VI of Civil Rights Act'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'All lead and galvanized steel service lines in Flint replaced and verified through independent testing',
    'Complete distribution of $626 million settlement fund to all eligible claimants with adequate per-child compensation for lifelong neurological damage',
    'Federal investigation into why DOJ never brought civil rights charges against officials who poisoned a majority-Black city',
    'Comprehensive lifelong health monitoring and educational support program for all 12,000+ children exposed to lead-contaminated water',
    'Repeal or constitutional invalidation of Michigan Emergency Manager Law (PA 436)',
    'Full disclosure of all evidence from 65+ seized devices and complete Snyder administration communications',
    'Michigan formal acknowledgment of institutional racism in crisis causation and response per Civil Rights Commission findings',
    'Nationwide replacement of all 9.2 million remaining lead service lines within the 2024 Lead and Copper Rule 10-year timeline',
    'Mandatory independent water testing protocols for municipalities under emergency management preventing future Flint-type failures',
    'Federal legislation requiring immediate public disclosure within 24 hours when drinking water contamination exceeding action levels is detected by any agency'
  ]
};
