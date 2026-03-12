// Investigation data shard
import type { InvestigationData } from './types';

const investigations_y: Record<string, InvestigationData> = {
  'yemen-war-crimes': {
 title: 'Yemen War Crimes: The Forgotten Genocide',
 subtitle: 'How the Saudi-led coalition, armed and supported by the United States and United Kingdom, killed over 150,000 people and created the world\'s worst humanitarian crisis in Yemen through a bombing campaign that deliberately targeted civilians and infrastructure.',
 severity: 'critical',
 category: 'War Crimes',
 date: 'June 6, 2023',
 lastUpdated: 'January 9, 2025',
 summary: 'The Saudi-led coalition\'s war in Yemen, backed by U.S. weapons, intelligence, and logistics, has killed over 150,000 people, created the world\'s worst humanitarian crisis affecting 24 million people, and involved systematic targeting of hospitals, schools, weddings, and civilian infrastructure.',
 content: [
 'The Saudi-led coalition began its air campaign in Yemen in March 2015, intervening in a civil war between the internationally recognized government and Houthi rebels. Over eight years of bombing, the coalition conducted over 25,000 airstrikes using American and British-supplied munitions. The Yemen Data Project documented that approximately one-third of all airstrikes hit non-military targets. Specific documented attacks on protected sites include a funeral hall in Sanaa (140 killed), a school bus in Dahyan (40 children killed), and repeated strikes on hospitals run by Doctors Without Borders.',
 'The United States provided critical support for the Saudi campaign including: precision-guided munitions (over $110 billion in arms sales to Saudi Arabia under the Obama and Trump administrations), aerial refueling for coalition aircraft (discontinued in 2018 after the Khashoggi murder), intelligence sharing including target identification, and maintenance of Saudi aircraft. U.S.-manufactured bombs were recovered from sites of strikes on civilians, including a Lockheed Martin bomb used on the school bus and Raytheon munitions found at a wedding site.',
 'The humanitarian catastrophe in Yemen is the world\'s worst. The UN estimated that 24 million people; 80% of Yemen\'s population; required humanitarian assistance. An estimated 85,000 children under five died from hunger and disease between 2015 and 2018 alone. The coalition imposed a naval and air blockade that restricted food, fuel, and medicine imports to a country that imports 90% of its food. Cholera outbreaks infected over 2.5 million people in the largest epidemic in modern history.',
 'Accountability has been virtually nonexistent. The UN Human Rights Council established a Group of Eminent Experts to investigate war crimes in Yemen, but Saudi Arabia successfully lobbied to end the investigation in 2021. A Saudi-established Joint Incidents Assessment Team, tasked with investigating coalition strikes, functioned as a whitewash mechanism that exonerated the coalition in nearly every case. Arms sales continued despite documented violations of international humanitarian law.',
 'The Yemen war exposed the complicity of Western democracies in atrocities committed by their allies. Congress passed bipartisan resolutions to end U.S. support for the Saudi campaign, which Trump vetoed. Biden pledged to end support but continued arms sales and defensive cooperation. The UK continued selling arms despite a Court of Appeal ruling that the sales were unlawful without proper assessment of civilian harm. The war demonstrated that major arms-exporting nations will prioritize weapons contracts and strategic alliances over civilian protection and international law.',
 ],
 tags: ['Financial Crime', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Saudi Arabia', type: 'organization', relationship: 'Saudi-led coalition bombing campaign', href: '/entities/organizations/saudi-arabian-government' },
 { id: '2', name: 'Raytheon Company (now RTX Corporation)', type: 'corporation', relationship: 'Supplied bombs used on civilians', href: '/entities/corporations/raytheon' },
 { id: '3', name: 'Pentagon', type: 'agency', relationship: 'US military support for Saudi campaign', href: '/entities/agencies/pentagon' },
 ],
 },
  'youtube-extremism': {
 title: 'YouTube\'s Radicalization Pipeline: How the Algorithm Breeds Extremism',
 subtitle: 'How YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content, creating a radicalization pipeline that contributed to mass shootings, conspiracy movements, and the erosion of shared reality.',
 severity: 'high',
 category: 'Media & Disinformation',
 date: 'June 9, 2020',
 lastUpdated: 'August 11, 2025',
 summary: 'YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content, creating a radicalization pipeline. Research found that users who watched conservative political content were progressively recommended white supremacist, conspiracy, and extremist material.',
 content: [
 'Research by Zeynep Tufekci, Guillaume Chaslot (a former YouTube engineer), and others documented that YouTube\'s recommendation algorithm systematically directed users toward increasingly extreme content. A user watching mainstream conservative content would be progressively recommended more radical material, from Fox News clips to conspiracy theories to white nationalist content. The algorithm optimized for "watch time"; extreme and outrageous content kept users engaged longer, so the algorithm promoted it.',
 'The radicalization pipeline had measurable real-world consequences. Multiple mass shooters and terrorists were radicalized partly through YouTube content, including the Christchurch attacker, the El Paso shooter, and numerous others. YouTube served as the primary platform for QAnon content before partial restrictions were implemented in 2020. Flat Earth conspiracy content, anti-vaccine misinformation, and climate change denial were amplified by recommendation algorithms to audiences of millions.',
 'YouTube\'s scale made the problem uniquely dangerous. With over 2 billion monthly users watching over 1 billion hours of video daily, YouTube\'s recommendation algorithm is the world\'s most powerful content distributor. An estimated 70% of watch time on the platform was driven by recommendations rather than user searches. This meant that YouTube\'s algorithm, not user choice, was the primary determinant of what billions of people watched, making the company\'s algorithmic choices a matter of public safety.',
 'Internal documents and whistleblower testimony revealed that YouTube was aware of the radicalization problem for years but resisted meaningful changes because extremist content drove engagement and advertising revenue. When researchers published findings about the recommendation pipeline, YouTube disputed the methodology rather than addressing the problem. Limited policy changes were implemented only after sustained public pressure and advertiser boycotts.',
 'YouTube\'s response has been incremental and insufficient. The company reduced recommendations of "borderline" content in 2019, removed some extremist channels, and added information panels to conspiracy-related videos. However, researchers found that the algorithm continued to recommend extremist content, particularly in non-English languages and in countries where YouTube devoted fewer moderation resources. The fundamental tension between an advertising-driven business model that rewards engagement and the public interest in preventing radicalization remained unresolved.',
 ],
 tags: ['Media & Disinformation', 'Investigation', 'Accountability'],
 sources: [
 { title: 'Public Records', url: 'https://www.documentcloud.org/', type: 'Government' },
 ],
 affiliations: [
 { id: '1', name: 'Google', type: 'corporation', relationship: 'YouTube parent company, recommendation algorithm', href: '/entities/corporations/google' },
 ],
 },
};

export default investigations_y;
