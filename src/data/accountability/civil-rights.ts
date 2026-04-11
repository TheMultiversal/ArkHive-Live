import type { AccountabilityData } from '@/types/accountability';

export const civilRightsAccountability: AccountabilityData = {
  investigationSlug: 'civil-rights',
  crimeSummary: 'The systematic denial of civil rights to Black Americans from Reconstruction through the Civil Rights era and its aftermath. Cold cases spanning decades where perpetrators were identified but never prosecuted: the 1955 murder of Emmett Till (Carolyn Bryant Donham admitted lying  -  never prosecuted); the 1963 16th Street Baptist Church bombing (14 years for one perpetrator, others died free); the murders of Medgar Evers (retrial 30 years later), the three murdered civil rights workers in Mississippi (Chaney, Goodman, Schwerner  -  state prosecution 41 years later); and the systematic use of state power to violently suppress civil rights activism. FBI COINTELPRO surveilled and harassed civil rights leaders. J. Edgar Hoover called MLK "the most dangerous Negro" and sent him letters urging suicide. The Emmett Till Unsolved Civil Rights Crime Act (2008, reauthorized 2016) created a federal mandate to investigate cold cases  -  but funding was minimal and DOJ closed most cases without prosecution.',
  totalHarm: 'Thousands murdered during Jim Crow era with impunity. FBI documented 4,743 lynchings (1882-1968); actual number far higher. Civil rights workers assassinated. Children bombed in churches. Entire communities terrorized. Generational trauma. Perpetrators lived free lives while victims\' families waited decades  -  most forever  -  for justice.',
  victimsAffected: 'Emmett Till (14, murdered 1955). Addie Mae Collins (14), Cynthia Wesley (14), Carole Robertson (14), Carol Denise McNair (11)  -  16th Street Baptist Church bombing. Medgar Evers. James Chaney, Andrew Goodman, Michael Schwerner. Vernon Dahmer. Countless others whose cases remain unsolved. Their families. Black Americans subjected to state-sanctioned terroris.',
  primaryTargets: [
    {
      name: 'Carolyn Bryant Donham',
      role: 'In 1955, accused 14-year-old Emmett Till of grabbing her and making sexual advances  -  the accusation that led to Till\'s abduction, torture, and murder. In 2017, told historian Timothy Tyson that her testimony was false: "That part\'s not true."',
      currentStatus: 'Mississippi grand jury declined to indict (August 2022). Died April 2023. Never faced criminal charges despite admitting the accusation that led to a child\'s murder was a lie.',
      accountabilityPath: 'Exhausted. Deceased. The justice system failed Emmett Till for 68 years.',
      obstacles: ['Deceased', 'Grand jury declined to indict', 'Evidence degraded over decades'],
    },
    {
      name: 'FBI COINTELPRO',
      role: 'FBI\'s Counter Intelligence Program (1956-1971) systematically infiltrated, surveilled, and disrupted civil rights organizations. Targeted MLK, SCLC, SNCC, NAACP, Black Panthers. Sent anonymous letter to MLK suggesting suicide. Planted informants. Forged documents to create internal conflicts. Collaborated with local police to suppress activism.',
      currentStatus: 'Program officially terminated in 1971 after exposure by the Citizens\' Commission to Investigate the FBI (Media, PA burglary). Church Committee investigated (1975-1976). No individual held criminally accountable. Hoover died 1972 without consequences.',
      accountabilityPath: 'Historical accountability through documentation. COINTELPRO files partially declassified. No criminal prosecution was ever initiated against FBI officials.',
      obstacles: ['Key figures deceased', 'Classified documents', 'Institutional protection'],
    },
  ],
  legalMechanisms: [
    { name: 'Emmett Till Unsolved Civil Rights Crime Act', statute: 'P.L. 110-344 (2008), reauthorized P.L. 114-325 (2016)', description: 'Created DOJ mandate to investigate racially-motivated cold cases from the civil rights era. DOJ Cold Case Initiative reviewed over 150 cases  -  closed most without prosecution due to deaths of suspects, lack of evidence, or statute of limitations.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ', 'FBI'], applicability: 'directly_applicable' },
    { name: 'Federal Civil Rights Criminal Statutes', statute: '18 U.S.C. §§ 241, 242, 245', description: 'Federal civil rights statutes used to prosecute racially motivated violence when states refused. Section 241 (conspiracy against rights), Section 242 (deprivation of rights under color of law), Section 245 (federally protected activities).', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['DOJ'], applicability: 'directly_applicable' },
    { name: 'Truth and Reconciliation Process', statute: 'No current U.S. statute; South African precedent', description: 'A formal truth and reconciliation process for civil rights era crimes  -  documenting what happened, identifying perpetrators (living and dead), and creating an official historical record.', hasStatuteOfLimitations: false, reachesHeirs: false, authorizedActors: ['Congress'], applicability: 'potentially_applicable' },
  ],
  wealthTrace: [
    { name: 'Economic Extraction from Jim Crow', relationship: 'Wealth built on racial subjugation', transferMethod: 'Sharecropping, convict leasing, and wage theft extracted billions in Black labor value. Redlining destroyed Black homeownership wealth. The racial wealth gap ($171,000 white median household wealth vs. $17,600 Black in 2020) is the direct economic legacy of civil rights violations.', estimatedValue: 'Trillions in extracted wealth across generations; $14+ trillion racial wealth gap', legalEntities: ['Federal government (complicit through inaction)', 'State governments (Jim Crow enforcement)', 'Private corporations (convict leasing, redlining)'], recoveryMechanisms: ['Reparations legislation (H.R. 40)', 'Community investment', 'Targeted economic development'] },
  ],
  authoritiesWithPower: [
    { name: 'DOJ Civil Rights Division', title: 'DOJ Civil Rights Division, Criminal Section', jurisdiction: 'Federal civil rights enforcement', powers: ['Investigate cold cases', 'Prosecute civil rights violations', 'No statute of limitations on murder'] },
    { name: 'Congress', title: 'U.S. Congress', jurisdiction: 'Legislation and investigation', powers: ['Fund cold case investigations', 'Pass reparations study (H.R. 40)', 'Establish truth commission'] },
  ],
  successCriteria: [
    'Full funding and reauthorization of the Emmett Till Unsolved Civil Rights Crime Act with dedicated FBI investigative resources -- the current effort has been chronically underfunded and most cases were closed without resolution',
    'Federal truth and reconciliation commission established by Congress to document the full scope of civil rights era violence: every known murder, every identified perpetrator (living and dead), every institutional failure, and every community impacted',
    'H.R. 40 passage -- the Commission to Study and Develop Reparation Proposals for African Americans, establishing a formal federal commission to study the impact of slavery and Jim Crow and propose remedies including reparations',
    'Complete declassification and public release of all COINTELPRO files and related FBI domestic intelligence documents -- the full scope of the FBI\'s war on the civil rights movement must be part of the permanent historical record',
    'Prosecution of every civil rights era cold case where living suspects can be identified and evidence supports charges -- there is no statute of limitations on murder, and justice delayed should not be justice denied',
    'Permanent, publicly accessible national memorial and digital archive documenting every known victim of racial violence from Reconstruction through the present -- building on the National Memorial for Peace and Justice in Montgomery',
    'Federal investment in communities targeted by civil rights era violence and systemic discrimination: directed economic development, educational investment, housing assistance, and health services addressing generational trauma',
    'Formal acknowledgment by the United States government of its role in perpetrating, facilitating, and tolerating racial violence from slavery through COINTELPRO -- without acknowledgment, reconciliation is impossible',
  ],

  actionPaths: [
    {
      role: 'citizen',
      overview: 'Children were bombed in churches. A 14-year-old boy was tortured to death over a lie. The FBI tried to make Dr. King kill himself. Most perpetrators were never punished.',
      urgency: 'high',
      relevantMechanisms: ['Truth and Reconciliation Process', 'Emmett Till Unsolved Civil Rights Crime Act'],
      steps: [
        {
          step: 1,
          title: 'Support H.R. 40',
          description: 'Contact your representative to support H.R. 40 -- the Commission to Study and Develop Reparation Proposals for African Americans Act. This commission would study the legacy of slavery and Jim Crow and recommend remedies. It is a study commission, not a spending bill -- and even that has been blocked for decades.',
          estimatedTime: '20 minutes',
          filingTarget: 'Your House representative; House Judiciary Committee',
          templateText: 'Dear [Representative],\n\nEmmett Till was tortured and murdered at age 14 over a lie. The FBI ran COINTELPRO against Dr. King. Children were bombed at 16th Street Baptist Church. Most perpetrators were never punished. The racial wealth gap ($171,000 vs. $17,600 median household wealth) is the direct economic legacy.\n\nI urge you to:\n1. Support H.R. 40 for a reparations study commission\n2. Fully fund the Emmett Till Unsolved Civil Rights Crime Act\n3. Support establishment of a truth and reconciliation commission\n\nAcknowledgment is the first step toward repair.\n\nSincerely,\n[Your Name]',
        },
        {
          step: 2,
          title: 'Learn and Teach the History',
          description: 'Visit the National Memorial for Peace and Justice in Montgomery, Alabama. Visit the Emmett Till Interpretive Center in Sumner, Mississippi. Read the names. Learn the cases. Teach your children what happened and what has never been addressed.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 3,
          title: 'Support Cold Case Organizations',
          description: 'Support organizations working on civil rights cold cases: the Emmett Till Legacy Foundation, the Civil Rights and Restorative Justice Project at Northeastern University, and the Cold Case Justice Initiative at Syracuse University. These organizations are doing the work the federal government has underfunded.',
          estimatedTime: '20 minutes',
        },
      ],
    },
    {
      role: 'journalist',
      overview: 'Document unsolved civil rights cold cases before all witnesses die. The clock is running out.',
      urgency: 'immediate',
      relevantMechanisms: ['Emmett Till Unsolved Civil Rights Crime Act', 'Federal Civil Rights Criminal Statutes'],
      steps: [
        {
          step: 1,
          title: 'Document Living Memory',
          description: 'Interview surviving witnesses and family members of civil rights era crimes before they pass. Create oral history archives with video, audio, and written testimony. Living witnesses from the 1950s and 1960s are in their 80s and 90s -- this work is urgent.',
          estimatedTime: 'Ongoing -- urgent due to age of witnesses',
        },
        {
          step: 2,
          title: 'Cold Case Investigation',
          description: 'Investigate specific unsolved civil rights cold cases using modern investigative techniques. FOIA requests for FBI files. Interview living witnesses. Use forensic genealogy and modern evidence analysis on preserved physical evidence. Some of these cases can still be solved.',
          estimatedTime: '6-24 months per case',
        },
        {
          step: 3,
          title: 'COINTELPRO Documentation',
          description: 'Compile and publish a comprehensive, accessible account of FBI COINTELPRO operations against the civil rights movement. The documentary evidence exists in declassified files -- it needs to be made into a public-facing narrative that Americans can engage with.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'lawyer',
      overview: 'Push for truth and reconciliation. Support cold case investigation and prosecution. Advocate for reparations.',
      urgency: 'high',
      relevantMechanisms: ['Federal Civil Rights Criminal Statutes', 'Emmett Till Unsolved Civil Rights Crime Act'],
      steps: [
        {
          step: 1,
          title: 'Cold Case Legal Advocacy',
          description: 'Provide pro bono legal support for families of unsolved civil rights murder victims seeking investigation and prosecution. There is no statute of limitations on murder. Where evidence exists and suspects are living, prosecution remains possible.',
          legalBasis: ['18 U.S.C. Sections 241, 242 (no SOL for death resulting)', 'State murder statutes (no SOL)', 'Emmett Till Unsolved Civil Rights Crime Act'],
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Truth Commission Legal Framework',
          description: 'Draft model legislation for a federal truth and reconciliation commission. Include: subpoena power, immunity for testimony (to encourage truth-telling), victim compensation provisions, and mandatory public report with historical findings.',
          legalBasis: ['South African TRC precedent', 'Truth and Reconciliation Commission Act (proposed)', 'Congressional investigative authority'],
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Reparations Legal Theory',
          description: 'Develop legal frameworks for reparations that survive constitutional challenge. Research international precedents (Japanese internment redress, Holocaust restitution, South African land reform). Build the legal architecture that legislators will need when political will materializes.',
          legalBasis: ['Civil Liberties Act of 1988 (Japanese internment redress precedent)', 'International law on reparations', 'Thirteenth and Fourteenth Amendments'],
          estimatedTime: '12-24 months',
        },
      ],
    },
    {
      role: 'elected_official',
      overview: 'Pass H.R. 40. Fully fund cold case investigations. Establish a federal truth and reconciliation commission.',
      urgency: 'high',
      relevantMechanisms: ['Truth and Reconciliation Process', 'Emmett Till Unsolved Civil Rights Crime Act'],
      steps: [
        {
          step: 1,
          title: 'H.R. 40 Passage',
          description: 'Pass H.R. 40 to establish a commission studying the impact of slavery and Jim Crow and developing reparation proposals. After decades of introduction without a vote, bring it to the floor. The commission is a study -- opposing even studying the issue is indefensible.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 2,
          title: 'Truth and Reconciliation Commission',
          description: 'Establish a formal congressional truth and reconciliation commission for civil rights era crimes. Provide subpoena power, funding for investigation, and a mandate to create the official historical record that the United States has never produced.',
          estimatedTime: '6-12 months legislative timeline',
        },
        {
          step: 3,
          title: 'Cold Case Funding',
          description: 'Appropriate dedicated federal funding for the Emmett Till Unsolved Civil Rights Crime Act investigations. The mandate exists but funding has been woefully insufficient. The FBI cold case unit needs dedicated resources, not competing priorities.',
          estimatedTime: 'Appropriations cycle',
        },
      ],
    },
    {
      role: 'law_enforcement',
      overview: 'The Till Act mandated investigation. Most cases were closed. Reopen them with dedicated resources.',
      urgency: 'high',
      relevantMechanisms: ['Emmett Till Unsolved Civil Rights Crime Act', 'Federal Civil Rights Criminal Statutes'],
      steps: [
        {
          step: 1,
          title: 'Reopen Cold Cases with Resources',
          description: 'Dedicate FBI resources to the remaining unsolved civil rights cold cases. There is no statute of limitations on murder. Where suspects are living and evidence can be obtained, pursue prosecution. Where suspects are deceased, document the findings for the historical record.',
          estimatedTime: 'Ongoing',
        },
        {
          step: 2,
          title: 'Modern Forensic Application',
          description: 'Apply modern forensic techniques to cold case evidence: forensic genealogy, advanced DNA analysis, digital enhancement of photographs and documents, and modern witness interview techniques. Some cases closed as unsolvable in the 1960s may be solvable with modern technology.',
          estimatedTime: '6-24 months per case',
        },
        {
          step: 3,
          title: 'COINTELPRO Full Disclosure',
          description: 'Complete the declassification and public release of all COINTELPRO files and related FBI domestic intelligence documents. The FBI\'s institutional memory of its own civil rights era misconduct must be complete and public.',
          estimatedTime: '6-12 months',
        },
      ],
    },
    {
      role: 'regulator',
      overview: 'Ensure COINTELPRO-type abuses cannot recur. Audit current FBI domestic intelligence operations.',
      urgency: 'high',
      relevantMechanisms: ['Federal Civil Rights Criminal Statutes', 'Truth and Reconciliation Process'],
      steps: [
        {
          step: 1,
          title: 'Audit FBI Domestic Intelligence',
          description: 'Mandate independent audit of current FBI domestic intelligence operations to ensure COINTELPRO-style abuses are not recurring. The Church Committee exposed the abuses in 1975 -- but oversight has weakened. Report findings publicly.',
          estimatedTime: '6-12 months',
        },
        {
          step: 2,
          title: 'Civil Rights Data Preservation',
          description: 'Mandate permanent preservation of all civil rights era evidence, documents, and records held by federal, state, and local agencies. Some evidence has been lost or destroyed over decades -- what remains must be protected.',
          estimatedTime: '6-12 months',
        },
        {
          step: 3,
          title: 'Racial Wealth Gap Monitoring',
          description: 'Establish mandatory federal monitoring and annual reporting on the racial wealth gap. The current gap ($171,000 vs. $17,600 median household wealth) is the direct economic legacy of civil rights violations. Monitoring is the prerequisite for targeted remediation.',
          estimatedTime: 'Ongoing',
        },
      ],
    },
  ],
};
