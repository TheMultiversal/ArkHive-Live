const fs = require('fs');
const file = 'src/app/entities/individuals/[slug]/page.tsx';
let content = fs.readFileSync(file, 'utf-8');

const marker = '\n};\n\n// Generate static';
const idx = content.indexOf(marker);
if (idx === -1) {
  console.log('ERROR: Could not find insertion marker');
  process.exit(1);
}

const bradleyEdwards = `
  'bradley-edwards': {
    name: 'Bradley Edwards',
    title: 'Victims Rights Attorney',
    role: 'Lead Counsel for Epstein Victims',
    riskLevel: 'low',
    description: 'Florida attorney who represented over 50 victims of Jeffrey Epstein, including Courtney Wild and Virginia Giuffre. Edwards filed groundbreaking lawsuits challenging the 2008 Non-Prosecution Agreement, ultimately winning a ruling that prosecutors violated the Crime Victims Rights Act. Author of \\'Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein\\' (2020). His decade-long legal battle was instrumental in keeping the Epstein case alive when law enforcement had abandoned it.',
    birthDate: 'Unknown',
    education: [
      { institution: 'Nova Southeastern University Shepard Broad College of Law', degree: 'Juris Doctor' },
    ],
    affiliations: [
      { name: 'Edwards Henderson Law Firm', role: 'Managing Partner', type: 'corporation' },
    ],
    knownAssociates: [
      { name: 'Jeffrey Epstein', relationship: 'Primary legal adversary, sued on behalf of 50+ victims', href: '/entities/individuals/jeffrey-epstein' },
      { name: 'Courtney Wild', relationship: 'Client, led CVRA challenge against NPA', href: '/entities/individuals/courtney-wild' },
      { name: 'Virginia Giuffre', relationship: 'Client, represented in civil claims', href: '/entities/individuals/virginia-giuffre' },
      { name: 'Alex Acosta', relationship: 'CVRA lawsuit target, US Attorney who signed illegal NPA', href: '/entities/individuals/alex-acosta' },
      { name: 'Alan Dershowitz', relationship: 'Legal adversary, Epstein defense attorney', href: '/entities/individuals/alan-dershowitz' },
      { name: 'Joe Recarey', relationship: 'Palm Beach detective, provided evidence for civil cases', href: '/entities/individuals/joe-recarey' },
      { name: 'Michael Reiter', relationship: 'Palm Beach Police Chief, collaborated with investigation', href: '/entities/individuals/michael-reiter' },
      { name: 'Sarah Kellen', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/sarah-kellen' },
      { name: 'Nadia Marcinkova', relationship: 'Named co-conspirator in lawsuits', href: '/entities/individuals/nadia-marcinkova' },
      { name: 'Ghislaine Maxwell', relationship: 'Named in civil suits as co-conspirator', href: '/entities/individuals/ghislaine-maxwell' },
    ],
    controversies: [
      'FOUGHT DOJ FOR A DECADE: Filed CVRA lawsuit in 2008 challenging secret Non-Prosecution Agreement, battled DOJ for 11 years until Judge Marra ruled the NPA was illegal',
      'THREATENED BY EPSTEIN TEAM: Received threats and was surveilled by Epstein private investigators during litigation',
      'REPRESENTED 50+ VICTIMS: Built the largest collection of victim testimony against Epstein, preserving evidence that later facilitated the 2019 federal case',
      'CHALLENGED ACOSTA: His legal efforts directly led to scrutiny of Alex Acosta sweetheart plea deal, contributing to Acosta resignation as Labor Secretary',
    ],
    relatedInvestigations: [
      { title: 'Epstein Network Complicity', slug: 'epstein-network', severity: 'critical' },
    ],
    timeline: [
      { date: '2008', event: 'Filed Crime Victims Rights Act lawsuit challenging Epstein NPA on behalf of victims' },
      { date: '2009', event: 'Continued CVRA litigation despite government opposition' },
      { date: '2014', event: 'Filed landmark civil suits naming Ghislaine Maxwell, Sarah Kellen, and other enablers' },
      { date: '2015', event: 'Subjected to surveillance and intimidation by Epstein-linked private investigators' },
      { date: '2019 February', event: 'Judge Kenneth Marra ruled NPA violated Crime Victims Rights Act - landmark victory' },
      { date: '2019 July', event: 'Epstein arrested on federal charges, partially vindicating decade of legal work' },
      { date: '2020', event: 'Published Relentless Pursuit: My Fight for the Victims of Jeffrey Epstein' },
    ],
    sources: [
      { title: 'Relentless Pursuit Book (2020)', url: 'https://www.simonandschuster.com/books/Relentless-Pursuit/Bradley-J-Edwards/9781982148935' },
      { title: 'Miami Herald: Perversion of Justice', url: 'https://www.miamiherald.com/topics/jeffrey-epstein' },
      { title: 'Wild v. United States - CVRA Ruling', date: '2019' },
    ],
  },`;

const stevenDonziger = `
  'steven-donziger': {
    name: 'Steven Donziger',
    title: 'Environmental Attorney',
    role: 'Led Ecuador Pollution Case Against Chevron',
    riskLevel: 'high',
    description: 'American environmental attorney who spent decades fighting Chevron (formerly Texaco) over massive oil contamination in the Ecuadorian Amazon that affected 30,000+ indigenous people. Won a historic $9.5 billion judgment in 2011, then became the target of an unprecedented corporate retaliation campaign. Chevron used a RICO countersuit to invalidate the judgment, and Donziger was disbarred, placed under house arrest for 993 days, and sentenced to 6 months in prison for criminal contempt - prosecuted by a private attorney appointed after DOJ declined. His case is widely seen as the most extreme example of corporate capture of the legal system.',
    birthDate: 'Unknown',
    education: [
      { institution: 'Harvard Law School', degree: 'Juris Doctor' },
    ],
    affiliations: [
      { name: 'Chevron', role: 'Legal adversary', type: 'corporation' },
      { name: 'United Nations', role: 'Human Rights Council recognized his detention', type: 'organization' },
    ],
    knownAssociates: [
      { name: 'Chevron Corporation', relationship: 'Target of $9.5B Ecuador pollution case, orchestrated retaliatory prosecution', href: '/entities/corporations/chevron' },
    ],
    controversies: [
      'UNPRECEDENTED CORPORATE RETALIATION: After winning $9.5B judgment against Chevron, became target of massive legal counterattack funded by Chevron spending $2B+ on 2,000+ lawyers',
      'DISBARRED AND IMPRISONED: Charged with criminal contempt by private law firm hired by Chevron-linked judge - DOJ had twice declined to bring charges',
      'UN CALLED FOR RELEASE: UN Working Group on Arbitrary Detention found his detention arbitrary and called for his release and compensation',
      'CHEVRON RICO CASE: Judge Kaplan (who had Chevron investments) ruled Ecuador judgment fraudulent based on recanted testimony',
      '993 DAYS DETENTION: Longest contempt detention in US history for the charges while Chevron avoided paying for Amazon cleanup',
    ],
    relatedInvestigations: [
      { title: 'Corporate Corruption', slug: 'corporate-corruption', severity: 'critical' },
    ],
    timeline: [
      { date: '1993', event: 'Filed Lago Agrio lawsuit on behalf of 30,000+ Ecuadorian indigenous people against Texaco/Chevron' },
      { date: '2011', event: 'Ecuadorian court issued $9.5 billion judgment against Chevron for Amazon contamination' },
      { date: '2014', event: 'Judge Kaplan ruled Ecuador judgment obtained through fraud via RICO' },
      { date: '2019', event: 'Charged with criminal contempt after refusing to turn over devices to Chevron' },
      { date: '2020', event: 'Placed under house arrest - restrictions lasted 993 total days' },
      { date: '2021', event: 'Disbarred and convicted of criminal contempt, sentenced to 6 months' },
      { date: '2022', event: 'UN Working Group called for release; released from prison, continues advocacy' },
    ],
    sources: [
      { title: 'The Guardian: Steven Donziger', url: 'https://www.theguardian.com/us-news/2022/apr/25/steven-donziger-chevron-ecuador-lawyer-released-prison' },
      { title: 'UN Working Group on Arbitrary Detention', url: 'https://www.ohchr.org/en/documents/opinions/opinion-no-202022' },
      { title: 'The Intercept: How Chevron Weaponized the Courts', url: 'https://theintercept.com/collections/the-billion-dollar-case/' },
    ],
  },`;

content = content.substring(0, idx) + bradleyEdwards + stevenDonziger + content.substring(idx);
fs.writeFileSync(file, content);
console.log('Inserted bradley-edwards and steven-donziger profiles');
