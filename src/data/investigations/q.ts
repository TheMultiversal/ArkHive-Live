// Investigation data shard
import type { InvestigationData } from './types';

const investigations_q: Record<string, InvestigationData> = {
  'qatar-extortion': {
 title: 'Qatar Blockade Extortion',
 subtitle: 'How the Kushners leveraged a diplomatic crisis for personal profit',
 severity: 'critical',
 category: 'Corruption',
 date: 'June 5, 2017',
 lastUpdated: 'August 15, 2022',
 summary: 'In June 2017, Saudi Arabia and the UAE launched a blockade of Qatar. The Kushner family had been seeking Qatari investment to bail out their troubled 666 Fifth Avenue property. After Qatar declined to invest, Jared Kushner supported the blockade, and Trump initially endorsed it. Eventually, Qatar-linked investors rescued the Kushner building. Critics allege the Kushners used American foreign policy as leverage for personal financial gain, a quid pro quo of historic proportions.',
 content: [
 'THE KUSHNER CRISIS: The Kushner family\'s 666 Fifth Avenue property was a financial disaster. Purchased in 2007 for a record $1.8 billion just before the crash, it was hemorrhaging money. A $1.4 billion loan was coming due in 2019. The Kushners desperately sought foreign investment.',
 'APPROACHING QATAR: In April 2017, Charles Kushner met with Qatar\'s finance minister about investing in 666 Fifth Avenue. Qatar declined. Within weeks, Jared Kushner was reportedly supporting a blockade of Qatar pushed by Saudi Arabia and the UAE.',
 'THE BLOCKADE: On June 5, 2017, Saudi Arabia, UAE, Bahrain, and Egypt severed ties with Qatar. Trump initially enthusiastically endorsed the blockade, tweeting support and claiming credit, despite Qatar hosting the largest U.S. military base in the Middle East.',
 'JARED\'S ROLE: According to reporting, Jared Kushner sided with Saudi Arabia and UAE in internal White House debates. Secretary of State Tillerson and Defense Secretary Mattis opposed the blockade; Kushner supported it. His family had just been rejected for Qatari investment.',
 'TILLERSON MARGINALIZED: When Tillerson tried to mediate the crisis, he was undermined by Kushner\'s separate channel to MBZ and MBS. The New York Times reported Kushner was "running a shadow diplomacy "that contradicted official U.S. policy.',
 'THE 666 BAILOUT: In August 2018, Brookfield Asset Management agreed to a 99-year lease on 666 Fifth Avenue, rescuing the Kushners from their financial disaster. Brookfield received significant investment from the Qatar Investment Authority.',
 'THE QATAR CONNECTION: While Brookfield insisted the Qatar fund was a passive investor with no say in decisions, the timing was extraordinary. Qatar-linked money rescued Kushner\'s family from financial ruin after the blockade pressure.',
 'CONFLICTS OF INTEREST: Jared Kushner never fully divested from his family business while serving in the White House. His security clearance was initially denied due to foreign contacts and financial entanglements. Trump personally intervened to grant it.',
 'NO INVESTIGATION: Despite the apparent conflict between Kushner\'s official duties and family financial interests, no serious investigation occurred. The Trump DOJ showed no interest in examining the 666 Fifth Avenue connection.',
 'BROADER PATTERN: The Qatar situation exemplified Kushner\'s approach: mixing family business with government authority, conducting shadow diplomacy, siding with foreign autocrats, and benefiting financially from his position.',
 'MBS RELATIONSHIP: Kushner\'s relationship with Saudi Crown Prince MBS extended beyond Qatar. He reportedly shared intelligence with MBS, supported the Yemen war, and downplayed the Khashoggi murder. After leaving office, his firm received $2 billion from Saudi Arabia.',
 'UNANSWERED QUESTIONS: Did the Kushners use the blockade as leverage? Was the Brookfield deal a payoff? Why did Trump reverse course on Qatar? The full truth of the 666 Fifth Avenue saga remains hidden.',
 ],
 tags: ['Jared Kushner', 'Qatar', '666 Fifth Avenue', 'Conflict of Interest', 'Saudi Arabia', 'UAE', 'Corruption'],
 sources: [
 { title: 'NYT, 666 Fifth Avenue Bailout', url: 'https://www.nytimes.com/2018/08/03/nyregion/kushners-building-fifth-avenue-brookfield-lease.html', type: 'News Report' },
 { title: 'Brookfield Qatar Investment Connection', url: 'https://www.bloomberg.com/news/articles/2018-08-03/kushner-cos-deal-for-666-fifth-ave-is-said-to-be-near-close', type: 'News Report' },
 { title: 'Kushner Security Clearance Issues', url: 'https://www.washingtonpost.com/politics/2019/01/24/jared-kushners-security-clearance-was-initially-denied-due-concerns-about-foreign-influence/', type: 'Investigation' },
 ],
 affiliations: [
 { id: '1', name: 'Jared Kushner', type: 'individual', relationship: 'Central figure with conflicting interests', href: '/entities/individuals/jared-kushner' },
 { id: '2', name: 'Charles Kushner', type: 'individual', relationship: 'Sought Qatari investment for 666 Fifth Ave', href: '/entities/individuals/charles-kushner' },
 { id: '3', name: 'Donald Trump', type: 'individual', relationship: 'Initially endorsed blockade', href: '/entities/individuals/donald-trump' },
 { id: '4', name: 'Mohammed bin Salman', type: 'individual', relationship: 'Led Saudi side of blockade', href: '/entities/individuals/mohammed-bin-salman' },
 { id: '5', name: 'Mohammed bin Zayed', type: 'individual', relationship: 'Led UAE side of blockade', href: '/entities/individuals/mohammed-bin-zayed' },
 { id: '6', name: 'Kushner Companies', type: 'corporation', relationship: 'Benefited from resolution', href: '/entities/corporations/kushner-companies' },
 ],
 },
  'qualified-immunity-police-accountability-gap': {
    title: 'Qualified Immunity Police Accountability Gap',
    subtitle: 'How a judge-made doctrine with no basis in statutory text shields police officers from civil liability for constitutional violations; leaving victims of brutality with no legal remedy',
    severity: 'critical',
    category: 'Civil Rights',
    date: 'June 15, 1967',
    lastUpdated: 'March 1, 2024',
    summary: 'Qualified immunity is a judicial doctrine created by the Supreme Court in 1967 and dramatically expanded in subsequent decisions; particularly Harlow v. Fitzgerald (1982) and recent cases. It shields government officials; primarily police officers; from civil liability for constitutional violations unless the victim can identify a prior case with nearly identical facts establishing that the specific conduct was "clearly established" as unconstitutional. A 2020 Reuters investigation found that courts have used qualified immunity to shield officers who shot children, stole property, and used excessive force. The doctrine has no basis in the text of Section 1983 and has been criticized by justices across the ideological spectrum.',
    content: [
      'ORIGINS AND EXPANSION: Qualified immunity originated in Pierson v. Ray (1967), where the Supreme Court held that police officers acting in good faith should have some protection from civil suits. The doctrine was dramatically expanded in Harlow v. Fitzgerald (1982), which eliminated the subjective "good faith" requirement and replaced it with a purely objective test: whether the right violated was "clearly established" at the time. This shift meant that officers could violate citizens\' constitutional rights with impunity as long as no prior case with nearly identical facts existed. The practical effect was to create an ever-narrowing path to accountability that gets harder to navigate with each passing year.',
      'THE "CLEARLY ESTABLISHED" TRAP: The "clearly established" standard requires victims to identify a prior court decision with nearly identical facts to prove that reasonable officers would have known their conduct was unconstitutional. This creates a catch-22: because courts often dismiss cases on qualified immunity grounds without reaching the merits, the body of "clearly established" law never develops. Courts have granted immunity in cases involving officers who sicced a police dog on a suspect who was sitting down with his hands up (because no prior case involved a suspect sitting); who shot a 10-year-old while firing at the family\\'s non-threatening dog (because no case involved shooting at a dog and hitting a child); and who stole $225,000 during a search warrant (because no case specifically addressed theft by officers).',
      'THE REUTERS INVESTIGATION: In 2020, Reuters published a landmark investigation analyzing 529 federal appellate court rulings on qualified immunity from 2005 to 2019. The investigation found that the doctrine overwhelmingly favored officers: courts granted immunity in the vast majority of excessive force cases, rarely found rights "clearly established," and frequently dismissed cases without addressing whether officers actually violated the Constitution. The investigation documented cases where officers were shielded after tasering a handcuffed person, body-slamming a woman during a traffic stop, and shooting an unarmed man in his own backyard.',
      'CROSS-IDEOLOGICAL CRITICISM: Qualified immunity has drawn criticism from justices across the ideological spectrum. Justice Clarence Thomas, in Ziglar v. Abbasi (2017), questioned whether the doctrine had any basis in common law tradition. Justice Sonia Sotomayor has repeatedly dissented from qualified immunity decisions, calling the doctrine a "one-sided approach" that "transforms the doctrine into an absolute shield." Legal scholars including William Baude and Joanna Schwartz have demonstrated that the historical evidence does not support the doctrine. The Cato Institute (libertarian) and the NAACP (progressive) have both called for its abolition or reform.',
      'REFORM EFFORTS AND RESISTANCE: The George Floyd Justice in Policing Act, passed by the House in 2021, included provisions to eliminate qualified immunity for law enforcement officers. The bill died in the Senate. Colorado, New Mexico, and New York City have enacted state-level reforms limiting qualified immunity for state claims. The Fraternal Order of Police and other law enforcement unions have lobbied aggressively against reform, arguing that eliminating qualified immunity would have a "chilling effect" on policing. However, empirical research by Joanna Schwartz found that qualified immunity is rarely a factor in officers\' decision-making and that the doctrine primarily prevents compensation for victims rather than influencing officer behavior.',
    ],
    tags: ['Qualified Immunity', 'Police Accountability', 'Section 1983', 'Supreme Court', 'Civil Rights', 'Excessive Force'],
    sources: [
      { title: 'Reuters: For Cops Who Kill, Special Supreme Court Protection', url: 'https://www.reuters.com/investigates/special-report/usa-police-immunity-scotus/', type: 'Investigative Report' },
      { title: 'Joanna Schwartz: The Case Against Qualified Immunity', url: 'https://www.law.ucla.edu', type: 'Research' },
      { title: 'William Baude: Is Qualified Immunity Unlawful?', url: 'https://www.californialawreview.org', type: 'Research' },
    ],
    affiliations: [
      { id: '1', name: 'Supreme Court', type: 'agency', relationship: 'Created qualified immunity in Pierson v. Ray (1967) and dramatically expanded it in Harlow v. Fitzgerald (1982); repeatedly declined to reconsider the doctrine', href: '/entities/agencies/supreme-court' },
      { id: '2', name: 'DOJ', type: 'agency', relationship: 'Pattern-or-practice investigations provide alternative accountability path; Civil Rights Division enforcement has varied dramatically by administration', href: '/entities/agencies/doj' },
    ],
  },

};

export default investigations_q;
