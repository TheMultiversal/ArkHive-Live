import type { InvestigationData } from './types';

const investigations_z: Record<string, InvestigationData> = {
  'zaire-mobutu-kleptocracy': {
    title: 'Mobutu\'s Zaire: The Billion-Dollar Kleptocracy',
    subtitle: 'How Mobutu Sese Seko looted Zaire with Western backing for three decades',
    severity: 'critical',
    category: 'International Corruption',
    date: '1965-11-25',
    lastUpdated: '2025-12-15',
    summary: 'Mobutu Sese Seko ruled Zaire (now Democratic Republic of Congo) for 32 years, accumulating an estimated $5 billion in personal wealth while his country became one of the poorest on Earth. Backed by the CIA and Western governments as a Cold War ally, Mobutu embezzled national mining revenues, foreign aid, and World Bank loans into personal accounts in Switzerland, Belgium, and France. His regime was characterized by systematic corruption, political repression, and the deliberate destruction of state institutions.',
    content: [
      'Mobutu Sese Seko seized power in a CIA-backed coup in 1965 and ruled Zaire until 1997. During his reign, he renamed the country, forced "authenticity" campaigns, and built a personal fortune estimated at $5 billion through systematic embezzlement of the nation\'s vast mineral wealth, including cobalt, copper, diamonds, and coltan.',
      'Western governments, particularly the United States, France, and Belgium, provided billions in military and economic aid to Mobutu throughout the Cold War, viewing him as a bulwark against Soviet influence in Central Africa. The CIA maintained close ties with Mobutu from the early 1960s, when he first came to prominence during the Congo Crisis.',
      'The World Bank and International Monetary Fund continued lending to Zaire despite widespread knowledge of corruption, with loans being diverted directly into Mobutu\'s personal accounts. Swiss banks held billions in stolen assets, and luxury properties were purchased across Europe, including a villa in the French Riviera and a chateau in Belgium.',
      'Mobutu\'s fall came in 1997 when Laurent-Desire Kabila\'s rebel forces, backed by Rwanda and Uganda, marched across the country. Mobutu fled to Morocco, where he died of prostate cancer months later. Efforts to recover his stolen assets have been largely unsuccessful, with billions remaining unaccounted for decades later.',
    ],
    tags: ['kleptocracy', 'cia', 'cold-war', 'africa', 'embezzlement', 'world-bank', 'swiss-banks', 'mineral-wealth'],
    sources: [
      { title: 'Mobutu: King of Zaire (Documentary)', url: 'https://www.pbs.org/frontlineworld/stories/congo/', type: 'Documentary' },
      { title: 'The Looting Machine: Warlords, Oligarchs, Smugglers, and the Theft of Africa\'s Wealth', url: 'https://www.publicaffairsbooks.com/titles/tom-burgis/the-looting-machine/9781610394390/', type: 'Book' },
      { title: 'CIA and Mobutu: A Cold War Partnership', url: 'https://nsarchive.gwu.edu/briefing-book/intelligence/2020-06-30/cia-congo', type: 'Government Archive' },
    ],
    affiliations: [
      { id: 'cia', name: 'Central Intelligence Agency', type: 'agency', relationship: 'Installed and supported Mobutu as Cold War proxy', href: '/entities/agencies/cia' },
      { id: 'world-bank', name: 'World Bank', type: 'organization', relationship: 'Continued lending despite known embezzlement', href: '/entities/organizations/world-bank' },
    ],
   eventOriginDate: '1960-01-01',
   lastActivityDate: '2025-12-15',
   pageUpdatedDate: '2026-03-18',
      timeline: [
     { date: '1960-01-01', event: 'Mobutus Zaire: The Billion-Dollar Kleptocracy investigation begins — events under scrutiny originate from this period', type: 'financial' },
     { date: '1965', event: 'Mobutu Sese Seko seized power in a CIA-backed coup in 1965 and ruled Zaire until 1997.', type: 'default' },
     { date: '1997', event: 'Mobutu Sese Seko seized power in a CIA-backed coup in 1965 and ruled Zaire until 1997.', type: 'default' },
     { date: '2025-12-15', event: 'Mobutus Zaire: The Billion-Dollar Kleptocracy — investigation remains active with ongoing developments', type: 'financial' },
   ],
  },
  'zero-dark-thirty-torture-debate': {
    title: 'Zero Dark Thirty and the Torture Debate',
    subtitle: 'How CIA cooperation with Hollywood shaped the narrative on enhanced interrogation',
    severity: 'high',
    category: 'Intelligence',
    date: '2012-12-19',
    lastUpdated: '2025-08-20',
    summary: 'The 2012 film Zero Dark Thirty, directed by Kathryn Bigelow, depicted CIA torture techniques as instrumental in locating Osama bin Laden. Senate Intelligence Committee investigation revealed the CIA provided unprecedented access to filmmakers while simultaneously destroying interrogation videotapes and misleading Congress about the effectiveness of "enhanced interrogation techniques." The film became a flashpoint in the debate over whether torture produced actionable intelligence, with Senate investigators concluding it did not.',
    content: [
      'The CIA provided filmmaker Kathryn Bigelow and screenwriter Mark Boal with extraordinary access to classified information about the hunt for Osama bin Laden, including the identity of a covert officer involved in the operation. Internal CIA emails released through FOIA requests showed agency officials actively shaped the film\'s narrative to portray enhanced interrogation as effective.',
      'The Senate Intelligence Committee\'s 6,700-page study on the CIA Detention and Interrogation Program, partially declassified in 2014, found that the CIA\'s use of enhanced interrogation techniques was not effective in acquiring intelligence. The study documented 20 cases where the CIA cited results from torture that were obtained through other means.',
      'Acting CIA Director Michael Morell issued an unprecedented public statement acknowledging the film took "significant artistic license" but stopped short of correcting the torture effectiveness claim. CIA officials had reviewed screenplay drafts and suggested changes.',
      'Senator Dianne Feinstein, chair of the Intelligence Committee, wrote to Sony Pictures calling the film "grossly inaccurate" in its depiction of torture producing the intelligence lead that found bin Laden. The actual lead came from traditional intelligence collection methods.',
    ],
    tags: ['cia', 'torture', 'enhanced-interrogation', 'hollywood', 'propaganda', 'senate-intelligence', 'bin-laden'],
    sources: [
      { title: 'Senate Intelligence Committee Study on CIA Detention and Interrogation Program', url: 'https://www.intelligence.senate.gov/study-intelligence-committee-cia-detention-interrogation-program', type: 'Government Report' },
      { title: 'The CIA\'s Mop-Up Man: L.A. Times Investigation', url: 'https://www.latimes.com/entertainment/movies/la-et-mn-zero-dark-thirty-cia-20150910-story.html', type: 'Investigation' },
    ],
    affiliations: [
      { id: 'cia', name: 'Central Intelligence Agency', type: 'agency', relationship: 'Provided access and shaped narrative', href: '/entities/agencies/cia' },
    ],
   eventOriginDate: '2012-01-01',
   lastActivityDate: '2025-08-20',
   pageUpdatedDate: '2026-03-18',
   timeline: [
     { date: '2012-01-01', event: 'Zero Dark Thirty and the Torture Debate investigation begins — events under scrutiny originate from this period', type: 'default' },
     { date: '2014', event: 'The Senate Intelligence Committee\'s 6,700-page study on the CIA Detention and Interrogation Program, partially declassified in 2014, found that the CIA\'s use of enhanced interrogation techniques was not effective in...', type: 'political' },
     { date: '2025-08-20', event: 'Zero Dark Thirty and the Torture Debate — investigation remains active with ongoing developments', type: 'default' },
   ],
  },
  'zuckerberg-meta-surveillance': {
    title: 'Zuckerberg and Meta\'s Surveillance Empire',
    subtitle: 'From Cambridge Analytica to the global data extraction machine',
    severity: 'critical',
    category: 'Technology',
    date: '2004-02-04',
    lastUpdated: '2026-02-01',
    summary: 'Meta Platforms (formerly Facebook) under Mark Zuckerberg has built the most extensive private surveillance apparatus in human history, collecting data on over 3 billion people worldwide. From the Cambridge Analytica scandal that influenced the 2016 election, to internal documents showing the company knew its platforms caused harm to teenagers, to enabling genocide in Myanmar, Meta\'s pursuit of advertising revenue has consistently overridden safety, privacy, and democratic concerns.',
    content: [
      'The Cambridge Analytica scandal revealed that Facebook allowed a political data firm connected to Steve Bannon to harvest personal data from 87 million users without their consent. The data was used to build psychological profiles for targeted political advertising during the 2016 US presidential election and the Brexit referendum. Facebook knew about the breach for two years before it became public.',
      'Internal documents leaked by whistleblower Frances Haugen in 2021 revealed that Facebook\'s own research showed Instagram was harmful to teenage mental health, particularly among teenage girls, but the company suppressed the findings and continued prioritizing engagement metrics. The documents also showed the platform amplified divisive content because it generated more engagement.',
      'A UN fact-finding mission found that Facebook played a "determining role" in the genocide of Rohingya Muslims in Myanmar, where military-linked accounts used the platform to spread hate speech and coordinate violence that killed over 10,000 people. Facebook had only a handful of content moderators who spoke Burmese.',
      'Meta has paid over $5 billion in FTC fines, faced antitrust lawsuits from the federal government and 48 state attorneys general, and been subject to investigations in the EU, UK, Australia, and numerous other countries. Despite this, the company continues to expand its data collection through new products including VR headsets, smart glasses, and AI systems trained on user data.',
    ],
    tags: ['surveillance', 'data-privacy', 'cambridge-analytica', 'social-media', 'antitrust', 'mental-health', 'genocide', 'myanmar'],
    sources: [
      { title: 'The Facebook Files, Wall Street Journal Investigation', url: 'https://www.wsj.com/articles/the-facebook-files-11631713039', type: 'Investigation' },
      { title: 'FTC $5 Billion Settlement with Facebook', url: 'https://www.ftc.gov/news-events/news/press-releases/2019/07/ftc-imposes-5-billion-penalty-sweeping-new-privacy-restrictions-facebook', type: 'Government Record' },
      { title: 'UN Myanmar Report on Facebook\'s Role', url: 'https://www.ohchr.org/en/hr-bodies/hrc/myanmar-ffm/index', type: 'International Report' },
      { title: 'Frances Haugen Senate Testimony', url: 'https://www.commerce.senate.gov/2021/10/protecting-kids-online-testimony-from-a-facebook-whistleblower', type: 'Congressional Hearing' },
    ],
    affiliations: [
      { id: 'mark-zuckerberg', name: 'Mark Zuckerberg', type: 'individual', relationship: 'Founder, CEO, and controlling shareholder', href: '/entities/individuals/mark-zuckerberg' },
      { id: 'cambridge-analytica', name: 'Cambridge Analytica', type: 'corporation', relationship: 'Harvested 87 million user profiles', href: '/entities/corporations/cambridge-analytica' },
    ],
   eventOriginDate: '2016-01-01',
   lastActivityDate: '2026-02-01',
   pageUpdatedDate: '2026-03-18',
      timeline: [
     { date: '2016', event: 'From the Cambridge Analytica scandal that influenced the 2016 election, to internal documents showing the company knew its platforms caused harm to teenagers, to enabling genocide in Myanmar, Meta\'s pursuit of...', type: 'political' },
     { date: '2016-01-01', event: 'Zuckerberg and Metas Surveillance Empire investigation begins — events under scrutiny originate from this period', type: 'default' },
     { date: '2021', event: 'Internal documents leaked by whistleblower Frances Haugen in 2021 revealed that Facebook\'s own research showed Instagram was harmful to teenage mental health, particularly among teenage girls, but the company...', type: 'default' },
     { date: '2026-02-01', event: 'Zuckerberg and Metas Surveillance Empire — investigation remains active with ongoing developments', type: 'default' },
   ],
  },
};

export default investigations_z;
