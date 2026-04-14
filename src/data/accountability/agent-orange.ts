import type { AccountabilityData } from '@/types/accountability';

export const agentOrangeAccountability: AccountabilityData = {
  investigationSlug: 'agent-orange',
  crimeSummary: 'From 1961 to 1971, the United States military sprayed approximately 20 million gallons of chemical herbicides, primarily Agent Orange contaminated with the highly toxic dioxin TCDD, over 4.5 million acres of Vietnam, Laos, and Cambodia under Operation Ranch Hand. An estimated 4.8 million Vietnamese were directly exposed, with 3 million suffering ongoing health effects including at least 150,000 children born with severe birth defects across four generations. Over 2.6 million American service members served in Vietnam during the spraying period, with hundreds of thousands developing dioxin-related cancers, diabetes, heart disease, and neurological conditions. Chemical manufacturers Dow Chemical and Monsanto knew by 1965 that Agent Orange production generated dangerous dioxin contamination but concealed this information from the Department of Defense and the public. The 1984 class action settlement of $180 million, approximately $8,000 per veteran, required no admission of wrongdoing. The VA systematically denied Agent Orange disability claims for decades. The U.S. government has never compensated Vietnamese victims. No corporate executive was ever criminally prosecuted for concealing the dioxin contamination. No military or civilian official was ever prosecuted for ordering the spraying campaign.',
  totalHarm: '4.8 million Vietnamese directly exposed to dioxin-contaminated herbicides; 3 million Vietnamese suffering health effects; 150,000+ children born with severe birth defects across four generations including spina bifida, cerebral palsy, missing limbs, and organ abnormalities; 2.6 million American service members exposed during Vietnam service; hundreds of thousands of U.S. veterans with dioxin-related cancers, Type 2 diabetes, ischemic heart disease, and Parkinson disease; elevated birth defect rates in veterans\' children and grandchildren; 4.5 million acres of Vietnamese forest and farmland devastated; dioxin contamination persisting in soil at former U.S. bases at hundreds of times safe levels more than 50 years later; breast milk contamination in heavily sprayed provinces far exceeding WHO guidelines; food chain contamination through fish, shrimp, and livestock in affected watersheds',
  victimsAffected: 'Vietnamese civilians in sprayed provinces across central and southern Vietnam, Laos, and Cambodia; Vietnamese children born with birth defects across four generations; families dependent on contaminated agricultural land and fisheries; U.S. Vietnam veterans exposed during 6,542 Ranch Hand missions; veterans\' children and grandchildren with elevated birth defect rates; Korean, Australian, New Zealand, and Thai allied forces exposed during service; C-123 aircraft maintenance crews exposed to residual dioxin; Gulfport, Mississippi residents near Agent Orange testing sites; residents near domestic production facilities including Dow\'s Midland, Michigan and Diamond Shamrock\'s Newark, New Jersey plants; cleanup workers at contaminated sites',
  primaryTargets: [
    {
      name: 'Dow Chemical Company (now Dow Inc.)',
      role: 'Largest manufacturer of Agent Orange; convened 1965 secret meeting where company scientists informed executives that 2,4,5-T production generated dangerous dioxin contamination; concealed contamination data from DOD and public; lobbied against regulation; settled 1984 class action for share of $180 million with no admission of wrongdoing',
      currentStatus: 'Dow Inc. continues as publicly traded Fortune 500 company (market cap ~$40 billion); restructured through DowDuPont merger and 2019 re-separation; no executive was ever criminally prosecuted; company has never formally acknowledged wrongdoing',
      accountabilityPath: 'CERCLA liability for remaining contaminated sites; shareholder resolution demanding full disclosure of historical dioxin contamination; congressional investigation into concealment of 1965 internal studies; support for Vietnamese victims\' compensation fund',
      obstacles: ['1984 settlement bars most veteran claims', 'Corporate restructuring diffused liability', 'Statute of limitations on fraud claims', 'Extensive corporate legal resources']
    },
    {
      name: 'Monsanto Company (acquired by Bayer AG in 2018)',
      role: 'Major Agent Orange manufacturer whose production process generated some of the highest dioxin concentrations (up to 50 ppm); participated in 1965 secret meeting; manipulated internal dioxin studies; fought liability for decades; defended Agent Orange in every legal proceeding',
      currentStatus: 'Monsanto ceased to exist as independent entity after $63 billion acquisition by Bayer AG in 2018; Bayer inherited all liabilities and has paid over $10.9 billion settling Roundup cancer lawsuits; Monsanto brand retired',
      accountabilityPath: 'Bayer AG bears successor liability; CERCLA actions for contaminated manufacturing sites; support international litigation including French courts; shareholder pressure on Bayer for comprehensive settlement',
      obstacles: ['Corporate acquisition complicates liability chain', 'Bayer argues Monsanto liabilities are resolved', 'International jurisdiction challenges', '1984 settlement precedent']
    },
    {
      name: 'U.S. Department of Defense',
      role: 'Ordered and executed 6,542 Ranch Hand missions spraying 20 million gallons of herbicides; failed to investigate manufacturer warnings about dioxin; continued spraying for years after evidence of harm; classified key studies; redefined success metrics to justify program continuation',
      currentStatus: 'DOD has acknowledged Agent Orange health effects but taken minimal responsibility for Vietnamese victims; funds limited environmental remediation through USAID; has never released complete HERBS database or internal assessments of contamination knowledge',
      accountabilityPath: 'Congressional investigation with subpoena power into what DOD knew and when; full declassification of Ranch Hand archives; FOIA litigation for internal assessments; expansion of USAID remediation funding',
      obstacles: ['Sovereign immunity', 'National security classification', 'Institutional resistance to self-investigation', 'Feres doctrine bars active-duty claims']
    },
    {
      name: 'Department of Veterans Affairs',
      role: 'Systematically denied Agent Orange disability claims from 1975 through 1991; suppressed and manipulated the Air Force Ranch Hand Health Study results; issued internal guidance to deny claims despite growing scientific evidence; delayed adding presumptive conditions for decades',
      currentStatus: 'VA now recognizes 20+ presumptive conditions but backlog of denied claims from earlier decades remains; many veterans died before receiving benefits; PACT Act (2022) expanded coverage but implementation remains incomplete',
      accountabilityPath: 'Congressional oversight of historical denial patterns; IG investigation into Ranch Hand Study manipulation; retroactive benefits for estates of veterans denied coverage; expedited processing of remaining claims',
      obstacles: ['Institutional inertia', 'Budget constraints', 'Political resistance to expanding benefits', 'Many affected veterans already deceased']
    },
    {
      name: 'Robert S. McNamara (deceased 2009)',
      role: 'Secretary of Defense (1961-1968) who authorized and expanded the herbicide program; oversaw escalation from limited testing to massive defoliation campaign; received intelligence about health risks but prioritized military objectives',
      currentStatus: 'Deceased July 6, 2009; expressed general regret about Vietnam in 1995 memoir but never specifically addressed Agent Orange decision-making or manufacturer concealment; no posthumous investigation conducted',
      accountabilityPath: 'Historical commission investigation; declassification of McNamara-era decision documents; inclusion in comprehensive government accountability report',
      obstacles: ['Deceased, cannot be prosecuted', 'Presidential decision-making privilege', 'Classification of era documents']
    },
    {
      name: 'Diamond Shamrock Corporation',
      role: 'Third-largest Agent Orange manufacturer; operated production facility in Newark, New Jersey that contaminated the Passaic River with dioxin; concealed contamination from workers and surrounding community; participated in 1984 settlement',
      currentStatus: 'Merged with Occidental Petroleum subsidiary in 1987; cleanup of 80-acre Passaic River Superfund site ongoing with estimated cost of $1.4 billion; successor entities dispute liability allocation',
      accountabilityPath: 'CERCLA enforcement for Passaic River cleanup costs; investigation of historical worker exposure concealment; community health study for Newark residents',
      obstacles: ['Corporate dissolution and successor liability disputes', 'Ongoing Superfund litigation', 'Statute of limitations on worker claims']
    }
  ],
  legalMechanisms: [
    {
      name: 'CERCLA (Superfund) Liability',
      statute: '42 U.S.C. 9607',
      description: 'Imposes strict, joint, and several liability for hazardous substance releases on responsible parties including manufacturers, transporters, and disposal site operators. Agent Orange production and storage sites across the United States remain contaminated with dioxin.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      applicability: 'directly_applicable',
      authorizedActors: ['EPA', 'State environmental agencies', 'Private plaintiffs for cost recovery'],
      notes: 'Active Superfund sites include the Passaic River (Diamond Shamrock), Midland, Michigan (Dow), and multiple former military testing facilities. CERCLA has no statute of limitations for cleanup costs.'
    },
    {
      name: 'Hague Convention of 1907, Article 23(a)',
      statute: 'Hague Convention IV, Article 23(a)',
      description: 'Prohibits the employment of poison or poisoned weapons in warfare. The deliberate spraying of dioxin-contaminated herbicides over civilian populations and agricultural land constitutes use of a poisonous substance causing indiscriminate harm.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['International Criminal Court', 'Universal jurisdiction courts', 'International Court of Justice'],
      notes: 'The Second Circuit ruled in 2008 that Agent Orange was not a "poison weapon" under international law because it was intended as a herbicide, not a weapon targeting humans. This ruling is legally contested and historically indefensible given the documented knowledge of dioxin toxicity.'
    },
    {
      name: 'Geneva Protocol of 1925',
      statute: 'Protocol for the Prohibition of the Use in War of Asphyxiating, Poisonous or Other Gases',
      description: 'Prohibits the use in war of asphyxiating, poisonous, or other gases and all analogous liquids, materials, or devices. The U.S. did not ratify until 1975 but the prohibition reflected customary international law binding on all states.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['International Criminal Court', 'UN Security Council', 'State parties'],
      notes: 'The U.S. argued Agent Orange was a herbicide, not a chemical weapon. This distinction ignores the known dioxin contamination and the crop destruction program explicitly targeting civilian food supplies.'
    },
    {
      name: 'War Crimes Act',
      statute: '18 U.S.C. 2441',
      description: 'Criminalizes grave breaches of the Geneva Conventions including willful destruction of property not justified by military necessity and carried out wantonly. The crop destruction program deliberately targeted civilian food supplies in violation of international humanitarian law.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'potentially_applicable',
      authorizedActors: ['DOJ Criminal Division', 'Special counsel', 'Federal grand jury'],
      notes: 'No statute of limitations for war crimes. Application to Agent Orange spraying has never been tested in U.S. courts. The crop destruction component of Ranch Hand is the strongest potential case.'
    },
    {
      name: 'False Statements to Government',
      statute: '18 U.S.C. 1001',
      description: 'Criminalizes knowingly making false statements to any department or agency of the United States. Dow Chemical and Monsanto concealed their knowledge of dangerous dioxin contamination levels from DOD procurement officials who were purchasing Agent Orange.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years (likely tolled by concealment)',
      reachesHeirs: false,
      applicability: 'potentially_applicable',
      authorizedActors: ['DOJ Criminal Division', 'Federal grand jury', 'DOD Inspector General'],
      notes: 'Statute of limitations would normally have expired, but the manufacturers\' active concealment of dioxin data may support tolling arguments. Historical prosecution could establish precedent.'
    },
    {
      name: 'FIFRA Violations',
      statute: '7 U.S.C. 136j',
      description: 'Makes unlawful the sale of adulterated or misbranded pesticides. Agent Orange as sold to the DOD contained undisclosed dioxin contamination that the manufacturers knew was highly toxic, constituting both adulteration and misbranding.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '5 years',
      reachesHeirs: false,
      applicability: 'potentially_applicable',
      authorizedActors: ['EPA', 'DOJ Environment and Natural Resources Division'],
      notes: 'Historical prosecution unlikely due to statute of limitations, but the legal analysis is relevant to ongoing corporate accountability advocacy and future regulatory enforcement.'
    },
    {
      name: 'Agent Orange Act',
      statute: 'Public Law 102-4 (1991)',
      description: 'Established presumption of service connection for diseases scientifically associated with herbicide exposure, allowing Vietnam veterans to receive VA disability benefits without proving individual causation. The IOM/NASEM reviews conditions on a periodic basis.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      applicability: 'directly_applicable',
      authorizedActors: ['VA Secretary', 'Senate and House Veterans Affairs Committees', 'NASEM review panels'],
      notes: 'The Act has been expanded multiple times. As of 2024, over 20 conditions are presumptively covered. The PACT Act of 2022 further expanded coverage for toxic-exposed veterans.'
    },
    {
      name: 'PACT Act',
      statute: 'Public Law 117-168 (2022)',
      description: 'The Sergeant First Class Heath Robinson Honoring Our Promise to Address Comprehensive Toxics Act expanded VA healthcare eligibility and disability benefits for veterans exposed to toxic substances including Agent Orange, burn pits, and other environmental hazards.',
      hasStatuteOfLimitations: false,
      reachesHeirs: true,
      applicability: 'directly_applicable',
      authorizedActors: ['VA Secretary', 'Senate and House Veterans Affairs Committees', 'Veterans Service Organizations'],
      notes: 'Added bladder cancer, hypertension, and monoclonal gammopathy of undetermined significance to presumptive conditions. Expanded eligibility for Vietnam-era veterans and their survivors.'
    },
    {
      name: 'FOIA Declassification',
      statute: 'Freedom of Information Act (5 U.S.C. 552)',
      description: 'Provides public right of access to government records. Critical documents about the Agent Orange program remain classified or unreleased, including complete HERBS spray mission data, internal DOD health assessments, and VA claims denial guidance.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      applicability: 'directly_applicable',
      authorizedActors: ['Any person or organization', 'Federal courts for enforcement'],
      notes: 'Key unreleased documents: complete HERBS database with mission-level spray data, Dow 1965 internal memos obtained by DOD, VA internal guidance on denying claims (1975-1991), Ranch Hand Study raw data and manipulation records.'
    }
  ],
  wealthTrace: [
    {
      name: 'Dow Inc.',
      relationship: 'Successor to Dow Chemical Company, largest Agent Orange manufacturer',
      transferMethod: 'Corporate restructuring through DowDuPont merger (2017) and re-separation (2019)',
      estimatedValue: '$40 billion market capitalization; $57 billion annual revenue',
      legalEntities: ['Dow Inc.', 'Dow Chemical Company', 'DowDuPont Inc.'],
      recoveryMechanisms: ['CERCLA cost recovery for contaminated sites', 'Shareholder resolution for victim compensation fund', 'Congressional investigation into historical concealment']
    },
    {
      name: 'Bayer AG',
      relationship: 'Acquired Monsanto for $63 billion in 2018, inheriting all Agent Orange liabilities',
      transferMethod: 'Corporate acquisition of Monsanto and all successor liabilities',
      estimatedValue: '$63 billion acquisition price; Bayer market cap ~$30 billion (diminished by Roundup liabilities)',
      legalEntities: ['Bayer AG', 'Monsanto Company (dissolved)'],
      recoveryMechanisms: ['Successor liability enforcement', 'International litigation in French and German courts', 'Shareholder pressure for Vietnamese compensation']
    },
    {
      name: '1984 Class Action Settlement Fund',
      relationship: 'Seven chemical manufacturers settled for $180 million to resolve veteran claims',
      transferMethod: 'Court-supervised settlement paid into trust fund distributed to veterans',
      estimatedValue: '$180 million (approximately $8,000 per veteran; fund fully exhausted by 1997)',
      legalEntities: ['Agent Orange Settlement Fund'],
      recoveryMechanisms: ['Fund is exhausted; serves as historical precedent of inadequacy; supports argument for new compensation mechanism']
    },
    {
      name: 'VA Disability Benefits (Agent Orange)',
      relationship: 'Federal disability compensation for veterans with presumptive Agent Orange conditions',
      transferMethod: 'Congressional appropriations through VA budget',
      estimatedValue: '$85+ billion cumulative Agent Orange-related disability spending',
      legalEntities: ['Department of Veterans Affairs'],
      recoveryMechanisms: ['PACT Act expansion enforcement', 'Expedited claims processing', 'Retroactive benefits for previously denied claims']
    },
    {
      name: 'USAID Environmental Remediation',
      relationship: 'U.S. government funding for dioxin cleanup at former military bases in Vietnam',
      transferMethod: 'Foreign aid appropriations through USAID',
      estimatedValue: '$110 million (Da Nang, completed 2018) + $390 million (Bien Hoa, ongoing)',
      legalEntities: ['USAID', 'U.S. Department of State'],
      recoveryMechanisms: ['Expansion to additional contaminated sites', 'Increased appropriations through diplomatic channels', 'Congressional advocacy for comprehensive remediation']
    },
    {
      name: 'Diamond Shamrock / Passaic River',
      relationship: 'Agent Orange production facility contaminated 80 acres of the Passaic River with dioxin',
      transferMethod: 'Industrial discharge and waste disposal from Newark, NJ manufacturing plant',
      estimatedValue: '$1.4 billion estimated cleanup cost; Occidental Petroleum (successor) disputing liability share',
      legalEntities: ['Diamond Shamrock Corporation (dissolved)', 'Maxus Energy', 'Occidental Petroleum'],
      recoveryMechanisms: ['CERCLA Superfund enforcement', 'EPA cost recovery actions', 'State of New Jersey environmental litigation']
    },
    {
      name: 'Defense Contractor Revenue',
      relationship: 'Companies that manufactured and transported Agent Orange under DOD contracts',
      transferMethod: 'Military procurement contracts at cost-plus pricing',
      estimatedValue: '$62.4 million in DOD procurement for herbicides (1961-1971)',
      legalEntities: ['Dow Chemical', 'Monsanto', 'Hercules Inc.', 'Diamond Shamrock', 'T.H. Agriculture & Nutrition', 'Thompson Chemical', 'Uniroyal'],
      recoveryMechanisms: ['Historical investigation into procurement fraud', 'Congressional review of government contractor immunity', 'War profiteering precedent analysis']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'Senate Committee on Veterans Affairs',
      title: 'Committee Chairman',
      jurisdiction: 'Oversight of VA disability claims, Agent Orange presumptive conditions, and veterans\' healthcare',
      powers: ['Subpoena power', 'Budget authorization for VA', 'Oversight hearings on claims processing', 'Legislative authority over presumptive conditions']
    },
    {
      name: 'House Committee on Veterans Affairs',
      title: 'Committee Chairman',
      jurisdiction: 'Oversight of VA implementation of Agent Orange Act and PACT Act provisions',
      powers: ['Subpoena power', 'Appropriations authority', 'Oversight of VA claims backlog', 'Investigative hearings']
    },
    {
      name: 'Secretary of Veterans Affairs',
      title: 'VA Secretary',
      jurisdiction: 'Administration of Agent Orange disability benefits and presumptive condition determinations',
      powers: ['Add new presumptive conditions based on NASEM reviews', 'Expedite claims processing', 'Issue retroactive benefits determinations', 'Direct outreach to unserved veteran populations'],
      contactMethod: 'VA Central Office, 810 Vermont Ave NW, Washington DC 20420'
    },
    {
      name: 'Environmental Protection Agency',
      title: 'EPA Administrator',
      jurisdiction: 'CERCLA enforcement for dioxin-contaminated manufacturing and disposal sites',
      powers: ['Designate Superfund sites', 'Order responsible party cleanup', 'Recover cleanup costs from manufacturers', 'Enforce hazardous waste disposal requirements'],
      contactMethod: 'EPA Headquarters, 1200 Pennsylvania Ave NW, Washington DC 20460'
    },
    {
      name: 'USAID Administrator',
      title: 'USAID Administrator',
      jurisdiction: 'Environmental remediation of dioxin-contaminated sites in Vietnam',
      powers: ['Direct remediation funding', 'Negotiate bilateral agreements with Vietnam', 'Expand cleanup to additional contaminated sites', 'Fund health programs for Vietnamese victims']
    },
    {
      name: 'International Criminal Court',
      title: 'ICC Prosecutor',
      jurisdiction: 'War crimes and crimes against humanity including use of prohibited weapons and destruction of civilian property',
      powers: ['Investigate war crimes', 'Issue arrest warrants', 'Prosecute individuals for attacks on civilians', 'Establish historical record'],
      contactMethod: 'ICC Office of the Prosecutor, The Hague, Netherlands'
    },
    {
      name: 'Senate Foreign Relations Committee',
      title: 'Committee Chairman',
      jurisdiction: 'Oversight of U.S.-Vietnam diplomatic relations and remediation agreements',
      powers: ['Subpoena power', 'Treaty oversight', 'Foreign aid authorization', 'Diplomatic engagement direction']
    }
  ],
  actionPaths: [
    {
      role: 'citizen',
      overview: 'Citizens can demand accountability for Agent Orange through political engagement, support for Vietnamese and veteran victims, and pressure on corporations that profited from dioxin contamination while concealing its dangers',
      steps: [
        { step: 1, title: 'Understand the Full Scope', description: 'Read the comprehensive record: Wilbur J. Scott\'s "Vietnam Veterans Since the War" and Fred Wilcox\'s "Waiting for an Army to Die" and "Scorched Earth" document the veteran and Vietnamese dimensions. The Stellman 2003 study in Nature provides the definitive scientific analysis of spray exposure. The VA\'s Agent Orange Registry and NASEM periodic reviews document recognized health effects.', requirements: ['Library or internet access'], estimatedTime: '8-12 hours' },
        { step: 2, title: 'Contact Elected Representatives', description: 'Demand that your senators and representative support: full funding for PACT Act implementation, expansion of USAID remediation to all contaminated sites in Vietnam, establishment of a U.S.-funded compensation program for Vietnamese Agent Orange victims, and declassification of remaining classified Ranch Hand program documents.', requirements: ['Knowledge of representatives'], filingTarget: 'Congressional offices', estimatedTime: '30 minutes per contact' },
        { step: 3, title: 'Support Victim Organizations', description: 'Donate to and volunteer with organizations serving Agent Orange victims: Vietnam Association for Victims of Agent Orange/Dioxin (VAVA), Agent Orange Action Group, Vietnam Veterans of America, Veterans for Peace, War Legacies Project, and Children of Vietnam Veterans Health Alliance.', requirements: ['Financial resources'], estimatedTime: 'Ongoing' },
        { step: 4, title: 'Pressure Corporate Accountability', description: 'If you hold Dow Inc. or Bayer AG stock, file or support shareholder resolutions demanding full disclosure of historical dioxin contamination knowledge, contribution to Vietnamese victim compensation, and comprehensive environmental remediation. Attend annual meetings and raise Agent Orange accountability.', requirements: ['Stock ownership or proxy access'], estimatedTime: 'Annual engagement' }
      ],
      relevantMechanisms: ['PACT Act', 'Agent Orange Act', 'FOIA'],
      urgency: 'high' as const
    },
    {
      role: 'journalist',
      overview: 'Journalists can investigate the remaining classified history of the Agent Orange program, track ongoing environmental contamination, document multigenerational health effects, and expose the gap between scientific evidence and government/corporate response',
      steps: [
        { step: 1, title: 'FOIA the Remaining Classified Records', description: 'File FOIA requests for: complete HERBS spray mission database with all fields and coordinates; DOD internal assessments of manufacturer dioxin contamination warnings; VA internal guidance documents directing claims denial (1975-1991); Ranch Hand Study raw data and correspondence about methodology changes; Dow 1965 internal memos obtained by government investigators.', requirements: ['FOIA expertise', 'Persistence for multi-year litigation'], filingTarget: 'DOD FOIA Office, VA FOIA Service, National Archives', estimatedTime: '1-5 years per request' },
        { step: 2, title: 'Document Vietnamese Victims', description: 'Travel to heavily sprayed provinces (Quang Tri, Thua Thien-Hue, Quang Nam, Kon Tum, Binh Dinh) and Peace Villages to document current conditions. Interview families with multigenerational birth defects. Test soil and water from former spray areas. Counter the abstract policy discussion with human impact documentation.', requirements: ['Vietnamese language capability or translator', 'Travel to Vietnam', 'Environmental testing equipment'], estimatedTime: '3-6 months' },
        { step: 3, title: 'Investigate Corporate Archives', description: 'Examine Dow and Monsanto internal documents released through litigation discovery. Cross-reference the 1965 meeting attendees with corporate decision records. Track what specific executives knew about dioxin contamination and when. Identify living witnesses who attended the 1965 Dow meeting or handled dioxin data.', requirements: ['Corporate records analysis', 'Legal document review'], estimatedTime: '6-12 months' },
        { step: 4, title: 'Track Domestic Contamination', description: 'Investigate dioxin contamination at domestic Agent Orange production and testing sites including Dow\'s Midland, Michigan plant; Gulfport, Mississippi testing grounds; Eglin AFB, Florida; and surplus Agent Orange disposal sites. Document community health impacts and remediation status.', requirements: ['Environmental reporting experience', 'Public records research'], estimatedTime: '3-6 months' }
      ],
      relevantMechanisms: ['FOIA', 'CERCLA'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer',
      overview: 'Legal professionals can pursue remaining accountability avenues including CERCLA enforcement, international litigation, novel claims on behalf of Vietnamese victims, and challenges to the adequacy of the 1984 settlement framework',
      steps: [
        { step: 1, title: 'Support International Litigation', description: 'Assist with ongoing and future international cases. Tran To Nga\'s lawsuit against Agent Orange manufacturers in French courts (filed 2014, dismissed by appeals court 2024 but appeal continues) represents the most viable current legal challenge under French environmental liability law. Provide expert witness support, legal briefing, and amicus participation.', requirements: ['International environmental law expertise', 'French legal system knowledge'], filingTarget: 'French courts, European human rights bodies', legalBasis: ['French Civil Code Articles 1240-1241', 'EU environmental liability directive'], estimatedTime: '2-5 years' },
        { step: 2, title: 'Pursue CERCLA Enforcement', description: 'File CERCLA citizen suits or support EPA enforcement actions at contaminated manufacturing and disposal sites. Seek cost recovery from Dow, Bayer (as Monsanto successor), and Occidental (as Diamond Shamrock successor) for remediation costs at all identified contamination sites.', requirements: ['Environmental litigation experience'], filingTarget: 'Federal district courts near contaminated sites', legalBasis: ['42 U.S.C. 9607', '42 U.S.C. 9659 (citizen suits)'], estimatedTime: '2-5 years' },
        { step: 3, title: 'Challenge VA Claims Denials', description: 'Represent veterans and survivors whose Agent Orange claims were wrongfully denied, particularly those denied before 1991 whose estates never received retroactive benefits. Pursue class action certification for systematic denial patterns. Challenge VA interpretation of presumptive conditions.', requirements: ['VA claims expertise', 'Veterans law accreditation'], filingTarget: 'Board of Veterans Appeals, U.S. Court of Appeals for Veterans Claims', legalBasis: ['Agent Orange Act P.L. 102-4', 'PACT Act P.L. 117-168'], estimatedTime: '1-3 years' },
        { step: 4, title: 'Develop Novel Theories for Vietnamese Claims', description: 'Develop new legal theories to overcome the 2005 Eastern District of New York dismissal and 2008 Second Circuit affirmance. Consider: filing in jurisdictions outside the Second Circuit, pursuing under state consumer protection and fraud statutes rather than international law, targeting specific corporate concealment acts rather than the spraying program itself.', requirements: ['Federal litigation expertise', 'Mass tort experience'], filingTarget: 'Federal district courts outside Second Circuit', legalBasis: ['State fraud and consumer protection statutes', '18 U.S.C. 1001 concealment theory'], estimatedTime: '3-7 years' }
      ],
      relevantMechanisms: ['CERCLA', 'Agent Orange Act', 'PACT Act', 'Hague Convention'],
      urgency: 'high' as const
    },
    {
      role: 'elected_official',
      overview: 'Elected officials have the power to establish Vietnamese victim compensation, fully fund environmental remediation, investigate the historical record of corporate concealment and government complicity, and ensure PACT Act implementation',
      steps: [
        { step: 1, title: 'Establish Vietnamese Victim Compensation', description: 'Introduce legislation creating a U.S.-funded compensation program for Vietnamese Agent Orange victims modeled on the September 11th Victim Compensation Fund. The U.S. has spent over $85 billion on veteran Agent Orange benefits but less than $500 million on Vietnamese victims and environmental remediation combined. Include direct payments to affected individuals and families, healthcare facility funding, and disability support.', requirements: ['Co-sponsors', 'Budget appropriation support'], filingTarget: 'Senate and House Foreign Affairs Committees', estimatedTime: '1-2 congressional sessions' },
        { step: 2, title: 'Fund Comprehensive Environmental Remediation', description: 'Appropriate full funding for dioxin remediation at all identified contaminated sites in Vietnam, not just Da Nang and Bien Hoa. At least 28 former U.S. military bases have confirmed dioxin contamination. Current USAID funding covers only the two most contaminated sites. Estimated total remediation cost: $1-2 billion.', requirements: ['Appropriations committee support'], filingTarget: 'Senate and House Appropriations Committees', estimatedTime: '1-2 budget cycles' },
        { step: 3, title: 'Commission Full Historical Investigation', description: 'Establish a bipartisan commission with subpoena power to investigate: what chemical manufacturers knew about dioxin contamination and when; what information was concealed from DOD; why the VA denied claims for 16 years; who authorized the Ranch Hand Study manipulation; and whether the 1984 settlement was adequate. Require full declassification of all relevant documents.', requirements: ['Bipartisan support', 'Full subpoena authority'], filingTarget: 'Joint congressional resolution', estimatedTime: '18-36 months' },
        { step: 4, title: 'Ensure PACT Act Implementation', description: 'Conduct aggressive oversight of VA implementation of the PACT Act. Monitor claims processing timelines, denial rates, and outreach to unserved veteran populations. Require VA to report quarterly on Agent Orange claims backlog, newly added presumptive conditions, and spending on Agent Orange-related healthcare.', requirements: ['Veterans Affairs Committee membership'], filingTarget: 'Senate and House Veterans Affairs Committees', estimatedTime: 'Ongoing' }
      ],
      relevantMechanisms: ['Agent Orange Act', 'PACT Act', 'Congressional oversight authority'],
      urgency: 'immediate' as const
    },
    {
      role: 'law_enforcement',
      overview: 'Law enforcement and inspectors general can investigate historical fraud, environmental crimes at contaminated sites, and ensure proper enforcement of CERCLA liability against responsible corporate entities',
      steps: [
        { step: 1, title: 'Investigate Corporate Concealment', description: 'Conduct a comprehensive investigation into Dow Chemical and Monsanto\'s concealment of dioxin contamination data from the DOD. Examine the 1965 secret meeting, internal memos discussing liability risk, and decisions to conceal contamination while selling Agent Orange to the government. While criminal prosecution may be time-barred, a thorough investigation establishes the factual record for civil liability and future legislation.', requirements: ['DOJ Environment and Natural Resources Division authority', 'Grand jury subpoena power'], filingTarget: 'Federal grand jury', legalBasis: ['18 U.S.C. 1001'], estimatedTime: '12-24 months' },
        { step: 2, title: 'Enforce CERCLA at Contaminated Sites', description: 'Ensure aggressive EPA enforcement of CERCLA liability at all contaminated Agent Orange production, storage, and disposal sites. Review status of existing Superfund sites and identify additional contaminated locations requiring investigation. Pursue cost recovery from responsible parties.', requirements: ['EPA Criminal Investigation Division', 'Environmental law expertise'], filingTarget: 'Federal courts', legalBasis: ['42 U.S.C. 9607', '42 U.S.C. 6928'], estimatedTime: '2-5 years' },
        { step: 3, title: 'Audit VA Claims Processing', description: 'Conduct IG audit of VA Agent Orange claims processing to ensure compliance with Agent Orange Act and PACT Act requirements. Investigate whether systematic patterns of denial persist. Review cases of veterans who died before receiving benefits and determine whether estates are receiving retroactive compensation.', requirements: ['VA Inspector General authority'], filingTarget: 'IG report to Congress', estimatedTime: '12-18 months' }
      ],
      relevantMechanisms: ['CERCLA', '18 U.S.C. 1001', 'Agent Orange Act'],
      urgency: 'high' as const
    },
    {
      role: 'regulator',
      overview: 'Environmental and health regulators can enforce cleanup requirements at contaminated sites, strengthen dioxin exposure standards, expand health monitoring for affected populations, and ensure international remediation commitments are met',
      steps: [
        { step: 1, title: 'Enforce Dioxin Cleanup Standards', description: 'Review and strengthen dioxin cleanup standards at all identified contaminated sites associated with Agent Orange production, testing, and disposal. Current EPA soil screening levels for TCDD are 50-1,000 ppt depending on use scenario. Ensure all former Agent Orange manufacturing sites meet residential cleanup standards, particularly where communities are located near contaminated areas.', requirements: ['EPA regulatory authority', 'State environmental agency cooperation'], filingTarget: 'EPA Regional Offices', estimatedTime: '2-5 years' },
        { step: 2, title: 'Expand Health Monitoring', description: 'Establish comprehensive health monitoring programs for communities near former Agent Orange production facilities and domestic testing sites. Include Midland, Michigan (Dow), Newark, New Jersey (Diamond Shamrock), Gulfport, Mississippi (testing), and Eglin AFB, Florida. Fund epidemiological studies comparing disease rates to control populations.', requirements: ['CDC/ATSDR authority', 'Congressional appropriation'], filingTarget: 'ATSDR health consultations', estimatedTime: '3-5 years' },
        { step: 3, title: 'Coordinate International Remediation', description: 'Work with USAID, the State Department, and Vietnamese authorities to develop a comprehensive remediation plan covering all 28+ identified contaminated sites, not just Da Nang and Bien Hoa. Establish dioxin monitoring protocols for soil, water, and food chain in formerly sprayed provinces. Set measurable remediation targets and timelines.', requirements: ['International regulatory cooperation', 'Diplomatic coordination'], filingTarget: 'USAID, State Department, Vietnamese Ministry of Natural Resources', estimatedTime: '5-15 years' }
      ],
      relevantMechanisms: ['CERCLA', 'RCRA', 'Clean Water Act'],
      urgency: 'standard' as const
    }
  ],
  successCriteria: [
    'Establishment of a U.S.-funded compensation program for Vietnamese Agent Orange victims with annual appropriation adequate to provide meaningful support to surviving victims and their descendants',
    'Full funding and completion of environmental remediation at all 28+ identified dioxin-contaminated sites in Vietnam, not limited to Da Nang and Bien Hoa',
    'Complete declassification of all Agent Orange program records including the full HERBS database, Dow/Monsanto internal dioxin studies obtained by government investigators, VA claims denial guidance (1975-1991), and Ranch Hand Study manipulation records',
    'Bipartisan congressional commission investigation establishing the complete historical record of corporate concealment, government complicity, and VA systematic denial',
    'Full implementation of PACT Act provisions with elimination of Agent Orange claims backlog and retroactive benefits for estates of veterans who died before receiving coverage',
    'Successful CERCLA enforcement requiring Dow Inc., Bayer AG, and successor entities to fund complete remediation of all domestic contaminated sites at their expense',
    'International court judgment establishing liability of chemical manufacturers for harms to Vietnamese civilian population',
    'Formal U.S. government acknowledgment of responsibility for the health and environmental consequences of the Agent Orange spraying program in Vietnam, Laos, and Cambodia',
    'Comprehensive health monitoring programs for communities near all former Agent Orange domestic production and testing sites',
    'Addition of all scientifically supported conditions to the VA presumptive list with regular NASEM review on an accelerated timeline',
    'Expansion of Agent Orange benefits to cover affected allied nations\' veterans (South Korean, Australian, New Zealand, Thai) and their descendants through bilateral agreements',
    'Establishment of an international legal norm prohibiting the use of chemical defoliants with known toxic contaminants in armed conflict'
  ]
};
