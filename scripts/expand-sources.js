const fs = require('fs');

const newSources = [
  // Government Sources
  { name: 'National Archives (NARA)', type: 'government', url: 'https://www.archives.gov', description: 'Declassified documents, presidential records, and historical government files including CIA, FBI, and NSA releases.', reliability: 'verified', categories: ['Government', 'Documents'] },
  { name: 'FOIA.gov', type: 'government', url: 'https://www.foia.gov', description: 'Central portal for Freedom of Information Act requests across all federal agencies.', reliability: 'verified', categories: ['Government', 'Documents'] },
  { name: 'Congressional Record', type: 'government', url: 'https://www.congress.gov/congressional-record', description: 'Official record of proceedings and debates of the United States Congress.', reliability: 'verified', categories: ['Political', 'Legal', 'Government'] },
  { name: 'Federal Election Commission', type: 'government', url: 'https://www.fec.gov', description: 'Campaign contribution data, PAC filings, and election spending disclosure.', reliability: 'verified', categories: ['Political', 'Financial'] },
  { name: 'GAO Reports', type: 'government', url: 'https://www.gao.gov', description: 'Government Accountability Office reports on federal spending, waste, fraud, and program effectiveness.', reliability: 'verified', categories: ['Government', 'Financial'] },
  { name: 'Bureau of Justice Statistics', type: 'government', url: 'https://bjs.ojp.gov', description: 'Criminal justice data including incarceration rates, police use of force, and court statistics.', reliability: 'verified', categories: ['Criminal Justice', 'Government'] },
  { name: 'CDC WONDER Database', type: 'government', url: 'https://wonder.cdc.gov', description: 'Public health data including mortality, vaccine adverse events, and disease surveillance.', reliability: 'verified', categories: ['Health', 'Government'] },
  { name: 'FBI Vault', type: 'government', url: 'https://vault.fbi.gov', description: 'Declassified FBI files including COINTELPRO, civil rights, and domestic intelligence documents.', reliability: 'verified', categories: ['Government', 'Intelligence', 'Documents'] },
  { name: 'CIA Reading Room', type: 'government', url: 'https://www.cia.gov/readingroom', description: 'Declassified CIA documents including MKUltra, covert operations, and intelligence assessments.', reliability: 'verified', categories: ['Government', 'Intelligence', 'Documents'] },
  { name: 'DOJ Office of Inspector General', type: 'government', url: 'https://oig.justice.gov', description: 'Independent oversight reports on DOJ, FBI, ATF, and federal law enforcement.', reliability: 'verified', categories: ['Government', 'Legal', 'Criminal Justice'] },
  { name: 'Senate Intelligence Committee', type: 'government', url: 'https://www.intelligence.senate.gov', description: 'Intelligence oversight reports including the torture report and election interference findings.', reliability: 'verified', categories: ['Government', 'Intelligence'] },
  { name: 'VAERS (Vaccine Adverse Event Reporting)', type: 'government', url: 'https://vaers.hhs.gov', description: 'Co-managed by CDC and FDA, captures reports of adverse events following vaccination.', reliability: 'verified', categories: ['Health', 'Government'] },
  { name: 'Federal Reserve FRED', type: 'government', url: 'https://fred.stlouisfed.org', description: 'Economic data including bank reserves, interest rates, and monetary policy metrics.', reliability: 'verified', categories: ['Financial', 'Government'] },

  // Nonprofit & Investigative Organizations
  { name: 'Internet Archive / Wayback Machine', type: 'nonprofit', url: 'https://archive.org', description: 'Web archive preserving deleted pages, documents, and historical content from government and corporate sites.', reliability: 'verified', categories: ['Documents', 'Technology'] },
  { name: 'The Intercept', type: 'media', url: 'https://theintercept.com', description: 'Investigative journalism focused on war, surveillance, civil liberties, and government accountability.', reliability: 'established', categories: ['Media', 'Intelligence', 'Government'] },
  { name: 'MuckRock', type: 'nonprofit', url: 'https://www.muckrock.com', description: 'FOIA request filing service and repository of government document releases.', reliability: 'verified', categories: ['Government', 'Documents'] },
  { name: 'American Civil Liberties Union (ACLU)', type: 'nonprofit', url: 'https://www.aclu.org', description: 'Civil liberties litigation documents, policy analysis, and rights violation tracking.', reliability: 'verified', categories: ['Legal', 'Civil Rights'] },
  { name: 'Electronic Frontier Foundation', type: 'nonprofit', url: 'https://www.eff.org', description: 'Digital privacy, surveillance technology tracking, and tech policy research.', reliability: 'verified', categories: ['Technology', 'Civil Rights'] },
  { name: 'Wikileaks', type: 'nonprofit', url: 'https://wikileaks.org', description: 'Leaked classified documents including diplomatic cables, military logs, and intelligence files.', reliability: 'established', categories: ['Documents', 'Intelligence', 'Government'] },
  { name: 'Human Rights Watch', type: 'nonprofit', url: 'https://www.hrw.org', description: 'International human rights documentation, war crimes evidence, and abuse monitoring.', reliability: 'verified', categories: ['International', 'Legal', 'Civil Rights'] },
  { name: 'Amnesty International', type: 'nonprofit', url: 'https://www.amnesty.org', description: 'Global human rights abuse documentation, prisoner of conscience tracking, and torture monitoring.', reliability: 'verified', categories: ['International', 'Civil Rights'] },
  { name: 'Center for Constitutional Rights', type: 'nonprofit', url: 'https://ccrjustice.org', description: 'Legal advocacy and documentation on Guantanamo, torture, and civil rights violations.', reliability: 'verified', categories: ['Legal', 'Civil Rights'] },
  { name: 'Brennan Center for Justice', type: 'nonprofit', url: 'https://www.brennancenter.org', description: 'Voting rights, criminal justice reform, and democratic institution research.', reliability: 'verified', categories: ['Political', 'Legal', 'Civil Rights'] },
  { name: 'Southern Poverty Law Center', type: 'nonprofit', url: 'https://www.splcenter.org', description: 'Hate group tracking, extremism monitoring, and civil rights litigation documentation.', reliability: 'verified', categories: ['Civil Rights', 'Criminal Justice'] },
  { name: 'FollowTheMoney.org', type: 'nonprofit', url: 'https://www.followthemoney.org', description: 'State-level campaign finance data and political money tracking across all 50 states.', reliability: 'verified', categories: ['Political', 'Financial'] },
  { name: 'Organized Crime and Corruption Reporting Project', type: 'nonprofit', url: 'https://www.occrp.org', description: 'Cross-border investigation consortium exposing corruption, money laundering, and organized crime.', reliability: 'established', categories: ['International', 'Financial', 'Corporate'] },
  { name: 'Reprieve', type: 'nonprofit', url: 'https://reprieve.org', description: 'Documentation of drone strikes, death penalty cases, and secret detention programs.', reliability: 'established', categories: ['Legal', 'International', 'Civil Rights'] },
  { name: 'Bellingcat', type: 'nonprofit', url: 'https://www.bellingcat.com', description: 'Open-source intelligence investigations using satellite imagery, social media, and public data.', reliability: 'established', categories: ['Intelligence', 'International', 'Technology'] },

  // Academic Sources
  { name: 'Stanford Internet Observatory', type: 'academic', url: 'https://cyber.fsi.stanford.edu/io', description: 'Research on disinformation, election interference, and platform manipulation.', reliability: 'verified', categories: ['Technology', 'Political'] },
  { name: 'Costs of War Project (Brown University)', type: 'academic', url: 'https://watson.brown.edu/costsofwar', description: 'Comprehensive analysis of post-9/11 war costs, casualties, and displacement.', reliability: 'verified', categories: ['International', 'Government', 'Financial'] },
  { name: 'Mapping Police Violence', type: 'academic', url: 'https://mappingpoliceviolence.us', description: 'Comprehensive database of police killings in the United States since 2013.', reliability: 'verified', categories: ['Criminal Justice', 'Civil Rights'] },
  { name: 'Equal Justice Initiative', type: 'nonprofit', url: 'https://eji.org', description: 'Historical documentation of racial terror lynchings, wrongful convictions, and mass incarceration.', reliability: 'verified', categories: ['Criminal Justice', 'Civil Rights'] },
  { name: 'The Sentencing Project', type: 'nonprofit', url: 'https://www.sentencingproject.org', description: 'Mass incarceration data, racial disparities in sentencing, and criminal justice reform research.', reliability: 'verified', categories: ['Criminal Justice', 'Civil Rights'] },
  { name: 'Climate Accountability Institute', type: 'academic', url: 'https://climateaccountability.org', description: 'Corporate climate responsibility tracking, carbon major database, and fossil fuel industry analysis.', reliability: 'verified', categories: ['Environmental', 'Corporate'] },
  { name: 'National Security Archive (GWU)', type: 'academic', url: 'https://nsarchive.gwu.edu', description: 'Declassified government documents obtained through FOIA, covering intelligence, foreign policy, and nuclear issues.', reliability: 'verified', categories: ['Government', 'Intelligence', 'Documents'] },
  { name: 'Death Penalty Information Center', type: 'nonprofit', url: 'https://deathpenaltyinfo.org', description: 'Wrongful conviction data, execution statistics, and death penalty case documentation.', reliability: 'verified', categories: ['Criminal Justice', 'Legal'] },

  // Media / Investigative
  { name: 'ProPublica', type: 'media', url: 'https://www.propublica.org', description: 'Nonprofit investigative newsroom covering government accountability, corporate fraud, and public interest.', reliability: 'verified', categories: ['Media', 'Government', 'Corporate'] },
  { name: 'Center for Investigative Reporting (Reveal)', type: 'media', url: 'https://revealnews.org', description: 'In-depth investigations on corporate malfeasance, environmental crime, and government abuse.', reliability: 'established', categories: ['Media', 'Corporate', 'Environmental'] },
  { name: 'POGO (Project on Government Oversight)', type: 'nonprofit', url: 'https://www.pogo.org', description: 'Federal contracting fraud, military waste, and government corruption investigations.', reliability: 'verified', categories: ['Government', 'Financial'] },
  { name: 'Global Witness', type: 'nonprofit', url: 'https://www.globalwitness.org', description: 'Natural resource corruption, conflict financing, and corporate accountability investigations.', reliability: 'established', categories: ['International', 'Environmental', 'Corporate'] },
  { name: 'Tax Justice Network', type: 'nonprofit', url: 'https://taxjustice.net', description: 'Corporate tax avoidance, offshore finance, and illicit financial flow tracking.', reliability: 'established', categories: ['Financial', 'Corporate', 'International'] },

  // Legal
  { name: 'Court Listener (RECAP)', type: 'legal', url: 'https://www.courtlistener.com', description: 'Free legal research tool with federal court opinions, oral arguments, and PACER document mirror.', reliability: 'verified', categories: ['Legal', 'Government'] },
  { name: 'International Criminal Court', type: 'legal', url: 'https://www.icc-cpi.int', description: 'War crimes prosecution documents, evidence submissions, and international criminal proceedings.', reliability: 'verified', categories: ['Legal', 'International'] },
  { name: 'UN Human Rights Council', type: 'legal', url: 'https://www.ohchr.org', description: 'International human rights monitoring, special rapporteur reports, and treaty body documentation.', reliability: 'verified', categories: ['International', 'Legal', 'Civil Rights'] },
  { name: 'Stanford Law School - Guantanamo Habeas Cases', type: 'legal', url: 'https://law.stanford.edu/projects/guantanamo-habeas-cases', description: 'Comprehensive database of Guantanamo detainee habeas corpus petitions and court filings.', reliability: 'verified', categories: ['Legal', 'Civil Rights'] },
];

// Read the current file
let content = fs.readFileSync('src/app/sources/page.tsx', 'utf8');

// Generate entries
const entries = newSources.map((s, i) => {
  const id = i + 13; // Start after id 12
  const name = s.name.replace(/'/g, "\\'");
  const desc = s.description.replace(/'/g, "\\'");
  return `  {
    id: '${id}',
    name: '${name}',
    type: '${s.type}',
    url: '${s.url}',
    description: '${desc}',
    reliability: '${s.reliability}',
    categories: [${s.categories.map(c => `'${c}'`).join(', ')}]
  }`;
});

// Find the end of the sources array - locate after the last entry (id: '12')
const id12Idx = content.indexOf("id: '12'");
if (id12Idx === -1) {
  console.error('Could not find id 12');
  process.exit(1);
}
const arrayEnd = content.indexOf('];', id12Idx);
const before = content.slice(0, arrayEnd);
const after = content.slice(arrayEnd);

const block = ',\n\n  // === Expanded Sources ===\n' + entries.join(',\n') + '\n';
let newContent = before + block + after;

// Update the categories array to include new categories
newContent = newContent.replace(
  /const categories = \[[\s\S]*?\];/,
  `const categories = [
  'All',
  'Government',
  'Financial',
  'Corporate',
  'Political',
  'Legal',
  'Health',
  'Environmental',
  'Labor',
  'Documents',
  'Intelligence',
  'Criminal Justice',
  'Civil Rights',
  'International',
  'Technology',
  'Media'
];`
);

fs.writeFileSync('src/app/sources/page.tsx', newContent);

const total = (newContent.match(/id: '/g) || []).length;
console.log(`Total sources: ${total}`);
