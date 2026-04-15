import type { AccountabilityData } from '@/types/accountability';

export const chinaBusinessComplicityAccountability: AccountabilityData = {
  investigationSlug: 'china-business-complicity',
  crimeSummary: 'Western corporations including Apple, Nike, Volkswagen, and dozens of Fortune 500 companies have knowingly profited from Uyghur forced labor in Xinjiang, where an estimated 1-1.8 million people have been detained in internment camps. The Australian Strategic Policy Institute identified 83 companies benefiting from forced labor transfer programs. Companies lobbied against the Uyghur Forced Labor Prevention Act while publicly claiming commitment to human rights. Beyond forced labor, Western tech companies have enabled mass surveillance, financial institutions have invested billions in sanctioned Chinese surveillance companies, and Hollywood studios have self-censored to maintain Chinese market access.',
  totalHarm: 'Estimated 1-1.8 million Uyghurs detained; genocide determination by U.S., Canada, UK, and Netherlands; hundreds of billions in annual revenue generated through forced labor supply chains; $2+ billion in UFLPA-detained goods; immeasurable cultural destruction and human suffering',
  victimsAffected: '1-1.8 million Uyghurs and other Turkic Muslims detained in Xinjiang; 80,000+ Uyghurs transferred to factories across China under forced labor programs; broader Uyghur population of 12+ million subject to mass surveillance, forced sterilization, cultural suppression, and religious persecution',
  primaryTargets: [
    {
      name: 'Apple Inc',
      role: 'Manufactures virtually all products in China through 1.5 million worker supply chain; linked to factories using Uyghur forced labor; lobbied against UFLPA; complies with Chinese government censorship and surveillance demands including storing user data on Chinese state-linked servers',
      currentStatus: 'No criminal prosecution; faces no meaningful legal consequences; continues to derive virtually all hardware manufacturing from China while making selective supply chain adjustments under pressure',
      accountabilityPath: 'UFLPA enforcement actions against non-compliant imports; shareholder resolutions demanding full supply chain transparency; SEC enforcement of supply chain disclosure requirements; criminal prosecution under 18 U.S.C. 1589 for knowing benefit from forced labor',
      obstacles: ['Massive corporate lobbying resources and political influence', 'Supply chain opacity across thousands of Chinese suppliers', 'Economic interdependence with China creates government reluctance to enforce aggressively', 'Section 1589 requires proof of knowing benefit which is difficult given supply chain complexity']
    },
    {
      name: 'Chinese Government / CCP',
      role: 'Operates the Xinjiang detention camp and forced labor system; government-organized labor transfer programs supply Western brand factories; retaliates against companies and countries that acknowledge human rights abuses',
      currentStatus: 'Multiple governments have determined actions constitute genocide; UN Human Rights Office found potential crimes against humanity; no international criminal prosecution; China denies all allegations',
      accountabilityPath: 'International Criminal Court referral (requires Security Council action given China is not ICC member); Magnitsky Act global sanctions against individual officials; coordinated multilateral trade restrictions; universal jurisdiction prosecutions in European courts',
      obstacles: ['China\'s UN Security Council veto blocks ICC referral', 'Economic dependence of Western nations on Chinese trade', 'China retaliates economically against any country or company acknowledging abuses', 'Jurisdictional limitations of international enforcement mechanisms']
    },
    {
      name: 'Corporate Lobbying Coalitions (U.S. Chamber of Commerce, Industry Associations)',
      role: 'Systematically lobbied against UFLPA enforcement provisions, supply chain due diligence requirements, and corporate accountability mechanisms while member companies publicly claimed opposition to forced labor',
      currentStatus: 'Continue lobbying to weaken implementation and enforcement of UFLPA; opposing EU CSDDD mandatory due diligence requirements',
      accountabilityPath: 'Public disclosure of lobbying positions and expenditures; congressional investigation of gap between public statements and private lobbying; shareholder activism demanding consistency between human rights commitments and lobbying activities',
      obstacles: ['Lobbying activities are largely legal and protected', 'Industry associations provide cover for individual company lobbying', 'Campaign finance connections create political reluctance to confront corporate lobbying']
    }
  ],
  legalMechanisms: [
    {
      name: 'Uyghur Forced Labor Prevention Act (UFLPA)',
      statute: 'Pub.L. 117-78',
      description: 'Creates a rebuttable presumption that all goods produced wholly or in part in Xinjiang are made with forced labor and prohibits their importation. Importers must prove by clear and convincing evidence that goods were not produced with forced labor.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['U.S. Customs and Border Protection', 'DHS Forced Labor Enforcement Task Force', 'Importers (burden of proof)'],
      applicability: 'directly_applicable' as const,
      notes: 'Most significant legislative tool; $2+ billion in goods detained since June 2022; enforcement limited by CBP resourcing and supply chain opacity'
    },
    {
      name: 'Federal Forced Labor Prohibition',
      statute: '18 U.S.C. 1589',
      description: 'Criminal prohibition on forced labor with up to 20 years imprisonment. Section 1589(b) criminalizes knowingly benefiting from forced labor. Has never been applied to Western corporate executives who knowingly benefit from forced labor supply chains.',
      hasStatuteOfLimitations: true,
      limitationPeriod: '10 years',
      reachesHeirs: false,
      authorizedActors: ['DOJ', 'FBI', 'HSI'],
      applicability: 'directly_applicable' as const,
      notes: 'Theoretically applicable to corporate executives who knowingly benefit from forced labor supply chains but has never been used in this context'
    },
    {
      name: 'Global Magnitsky Human Rights Accountability Act',
      statute: '22 U.S.C. 2656 note',
      description: 'Authorizes targeted sanctions including asset freezes and visa bans against foreign persons responsible for human rights abuses. Applied to Chinese officials and entities involved in Xinjiang repression.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['President', 'Treasury Department (OFAC)', 'State Department'],
      applicability: 'directly_applicable' as const,
      notes: 'Sanctions applied to Xinjiang officials but not to Western corporate executives who enable abuses through supply chain relationships'
    },
    {
      name: 'EU Corporate Sustainability Due Diligence Directive (CSDDD)',
      statute: 'EU Directive 2024/1760',
      description: 'Requires large EU companies and non-EU companies with significant EU revenue to conduct human rights due diligence across their value chains, including identifying and mitigating forced labor risks.',
      hasStatuteOfLimitations: false,
      reachesHeirs: false,
      authorizedActors: ['EU member state enforcement authorities', 'European Commission'],
      applicability: 'directly_applicable' as const,
      notes: 'Still being transposed into member state law; corporate lobbying has weakened enforcement provisions; implementation effectiveness remains to be tested'
    }
  ],
  wealthTrace: [
    {
      name: 'Apple Inc China Manufacturing Profits',
      relationship: 'Apple generates hundreds of billions in revenue from products manufactured through Chinese supply chains connected to forced labor regions',
      transferMethod: 'Products manufactured at Chinese facilities including suppliers linked to Uyghur labor transfers; profits flow to Apple shareholders through dividends and buybacks',
      estimatedValue: 'Apple annual revenue exceeds $380 billion; gross profit margin approximately 45%; China manufacturing enables virtually all hardware production',
      legalEntities: ['Apple Inc', 'Foxconn Technology Group', 'Pegatron Corporation'],
      recoveryMechanisms: ['UFLPA enforcement actions against non-compliant shipments', 'SEC supply chain disclosure enforcement', 'Shareholder derivative actions']
    },
    {
      name: 'Fashion Industry Xinjiang Cotton Revenue',
      relationship: 'Global apparel industry profited for decades from Xinjiang forced labor cotton before restrictions',
      transferMethod: 'Xinjiang produces 85% of Chinese cotton and 20% of world supply; forced labor cotton entered supply chains of virtually all major apparel brands before 2021 Withhold Release Order',
      estimatedValue: 'Global apparel market exceeds $1.7 trillion annually; tens of billions attributable to forced labor cotton profits',
      legalEntities: ['Nike', 'H&M', 'Zara/Inditex', 'Gap', 'Adidas', 'Cotton traders and textile manufacturers'],
      recoveryMechanisms: ['CBP Withhold Release Orders', 'UFLPA enforcement', 'Consumer class action litigation potential']
    },
    {
      name: 'Western Investment in Sanctioned Chinese Surveillance Companies',
      relationship: 'Index funds and institutional investors channel billions into Chinese companies sanctioned for Xinjiang surveillance',
      transferMethod: 'MSCI and FTSE Russell include sanctioned Chinese companies in indices; BlackRock and other asset managers passively invest pension and 401(k) funds',
      estimatedValue: 'Billions in Western institutional investment in Entity List Chinese companies including Hikvision, Dahua, SenseTime',
      legalEntities: ['BlackRock', 'MSCI', 'Goldman Sachs', 'JPMorgan Chase'],
      recoveryMechanisms: ['Treasury sanctions expansion', 'SEC enforcement of investment restrictions', 'Pension fund divestment campaigns']
    }
  ],
  authoritiesWithPower: [
    {
      name: 'U.S. Customs and Border Protection',
      title: 'CBP Commissioner',
      jurisdiction: 'U.S. import enforcement',
      powers: ['Detain goods under UFLPA rebuttable presumption', 'Issue Withhold Release Orders on forced labor goods', 'Require importers to prove goods are forced-labor-free'],
      contactMethod: 'CBP trade enforcement tips at cbp.gov; UFLPA guidance at cbp.gov/trade/forced-labor/UFLPA'
    },
    {
      name: 'Congressional-Executive Commission on China (CECC)',
      title: 'CECC Chair',
      jurisdiction: 'Congressional oversight of China human rights',
      powers: ['Publish annual reports documenting human rights abuses', 'Hold hearings on corporate complicity', 'Recommend legislative action'],
      contactMethod: 'cecc.gov; submit testimony and evidence for annual report'
    },
    {
      name: 'Securities and Exchange Commission',
      title: 'SEC Chair',
      jurisdiction: 'Corporate disclosure enforcement',
      powers: ['Enforce supply chain disclosure requirements', 'Investigate misrepresentations about forced labor exposure', 'Require ESG disclosure accuracy'],
      contactMethod: 'SEC whistleblower program at sec.gov/whistleblower'
    }
  ],
  actionPaths: [
    {
      role: 'citizen' as const,
      overview: 'Citizens can drive corporate accountability through purchasing decisions, shareholder activism, and advocacy for stronger forced labor legislation.',
      steps: [
        { step: 1, title: 'Support Supply Chain Transparency', description: 'Demand that companies you purchase from disclose their full supply chains including first-, second-, and third-tier suppliers. Support legislation requiring mandatory supply chain disclosure.', legalBasis: ['Consumer advocacy', 'First Amendment right to petition'] },
        { step: 2, title: 'Divest from Complicit Companies', description: 'Review personal and retirement investments for exposure to companies benefiting from Uyghur forced labor. Contact fund managers to demand divestment from Entity List companies.', legalBasis: ['Shareholder rights'] },
        { step: 3, title: 'Contact Elected Officials', description: 'Advocate for stronger UFLPA enforcement funding, expansion of forced labor import bans, and criminal penalties for executives who knowingly benefit from forced labor.' }
      ],
      relevantMechanisms: ['UFLPA', 'Shareholder activism'],
      urgency: 'immediate' as const
    },
    {
      role: 'journalist' as const,
      overview: 'Investigative journalism has been the primary driver of exposing corporate complicity in Xinjiang forced labor and creating pressure for legislative action.',
      steps: [
        { step: 1, title: 'Investigate Supply Chain Connections', description: 'Use import records, corporate filings, and leaked documents to trace specific products from forced labor facilities in Xinjiang to Western retail shelves. Focus on companies that have not yet been publicly linked to forced labor.', legalBasis: ['First Amendment', 'Public records access'] },
        { step: 2, title: 'Document Lobbying vs. Public Statements', description: 'Investigate the gap between corporate public commitments to human rights and private lobbying against accountability legislation. FOIA requests and lobbying disclosure records reveal contradictions.' },
        { step: 3, title: 'Track UFLPA Enforcement Outcomes', description: 'Document which companies have had goods detained, how many successfully overcome the rebuttable presumption, and whether CBP enforcement resources are adequate to the scale of the problem.' }
      ],
      relevantMechanisms: ['UFLPA enforcement data', 'Lobbying disclosure records'],
      urgency: 'high' as const
    },
    {
      role: 'lawyer' as const,
      overview: 'Attorneys can pursue novel legal theories targeting corporate executives who knowingly benefit from forced labor and challenge inadequate corporate disclosure.',
      steps: [
        { step: 1, title: 'Develop 18 U.S.C. 1589(b) Corporate Cases', description: 'Build criminal referrals or civil cases under the forced labor statute against corporate executives who can be shown to have knowingly benefited from forced labor in their supply chains.', legalBasis: ['18 U.S.C. 1589', '18 U.S.C. 1596 (extraterritorial jurisdiction)'] },
        { step: 2, title: 'Challenge Supply Chain Disclosure Fraud', description: 'File SEC complaints or shareholder derivative actions against companies that misrepresent their exposure to forced labor supply chains in public filings and ESG reports.', legalBasis: ['Securities Act Section 10(b)', 'Shareholder derivative claims'] },
        { step: 3, title: 'Support Uyghur Community Legal Claims', description: 'Develop legal strategies for Uyghur survivors and diaspora communities to seek accountability including Alien Tort Statute claims and universal jurisdiction cases in European courts.' }
      ],
      relevantMechanisms: ['18 U.S.C. 1589', 'SEC enforcement', 'Alien Tort Statute'],
      urgency: 'immediate' as const
    },
    {
      role: 'regulator' as const,
      overview: 'Regulators have existing authority to significantly increase enforcement against companies benefiting from forced labor but have applied these tools inadequately.',
      steps: [
        { step: 1, title: 'Increase UFLPA Enforcement Resources', description: 'CBP needs significantly more officers and investigators dedicated to UFLPA enforcement. Current staffing is inadequate for the volume of potentially non-compliant imports.', legalBasis: ['Pub.L. 117-78 (UFLPA)'] },
        { step: 2, title: 'Expand Entity List and Sanctions', description: 'Add companies and individuals facilitating Uyghur forced labor to the Entity List and Specially Designated Nationals list. Sanction Western financial institutions that invest in sanctioned Chinese entities.', legalBasis: ['50 U.S.C. 4819', 'Global Magnitsky Act'] },
        { step: 3, title: 'Refer Criminal Cases', description: 'Refer cases of knowing corporate benefit from forced labor to DOJ for prosecution under 18 U.S.C. 1589(b). No corporate executive has been prosecuted despite extensive documentation of knowing complicity.', legalBasis: ['18 U.S.C. 1589', '18 U.S.C. 1596'] }
      ],
      relevantMechanisms: ['UFLPA', 'Entity List', 'Criminal forced labor statutes'],
      urgency: 'immediate' as const
    }
  ],
  successCriteria: [
    'First criminal prosecution of a Western corporate executive under 18 U.S.C. 1589(b) for knowingly benefiting from forced labor in their supply chain',
    'Full mandatory supply chain disclosure requirements for all companies selling products in the U.S. market',
    'CBP UFLPA enforcement resourced at levels adequate to screen all potentially non-compliant imports',
    'Western institutional investors fully divested from Chinese companies on Entity List for Xinjiang-related activities',
    'EU CSDDD implemented with meaningful enforcement and penalties across all member states',
    'International recognition and prosecution of China\'s actions in Xinjiang as genocide under international criminal law'
  ]
};
