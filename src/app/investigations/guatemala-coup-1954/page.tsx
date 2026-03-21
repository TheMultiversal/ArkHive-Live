'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, AlertTriangle, Users, Calendar, FileText, ExternalLink, Scale, ShieldAlert, Skull } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
 title: '1954 Guatemala Coup (Operation PBSUCCESS)',
 subtitle: 'How the CIA Overthrew Democracy to Protect Corporate Profits, and Triggered 36 Years of Genocide',
 severity: 'critical',
 status: 'DECLASSIFIED',
 summary: 'In 1954, the CIA orchestrated the overthrow of Guatemala\'s democratically elected President Jacobo \u00C1rbenz Guzm\u00E1n in Operation PBSUCCESS, a covert action designed to protect the profits of the United Fruit Company (now Chiquita Brands International). \u00C1rbenz\'s land reform program, Decree 900, threatened to redistribute unused United Fruit land to Guatemalan peasants with fair compensation. The Dulles brothers (Secretary of State John Foster Dulles and CIA Director Allen Dulles) both had deep financial ties to United Fruit. The CIA armed, trained, and directed a proxy army under Colonel Carlos Castillo Armas, broadcast fake radio propaganda, and launched psychological warfare operations. The resulting coup installed a military dictatorship that immediately reversed land reform, disenfranchised indigenous people, and banned labor unions. The CIA\'s "success" in Guatemala would trigger 36 years of civil war (1960-1996) that killed an estimated 200,000 people, with 83% of victims being indigenous Maya, a genocide recognized by the United Nations Historical Clarification Commission. Operation PBSUCCESS became the CIA\'s template for regime change operations worldwide.',
 keyFigures: [
 { name: 'Jacobo \u00C1rbenz', role: 'Democratically elected President of Guatemala (1951-1954) overthrown by CIA for land reform program', href: '/entities/individuals/jacobo-arbenz', status: 'Deceased (1971)' },
 { name: 'Allen Dulles', role: 'CIA Director who authorized Operation PBSUCCESS; former United Fruit Company legal counsel', href: '/entities/individuals/allen-dulles', status: 'Deceased (1969)' },
 { name: 'John Foster Dulles', role: 'Secretary of State whose former law firm (Sullivan & Cromwell) represented United Fruit Company', href: '/entities/individuals/john-foster-dulles', status: 'Deceased (1959)' },
 { name: 'Carlos Castillo Armas', role: 'CIA-backed colonel who led the coup and became dictator; assassinated by his own guard in 1957', href: '/entities/individuals/carlos-castillo-armas', status: 'Deceased (1957)' },
 { name: 'Dwight D. Eisenhower', role: 'President who authorized Operation PBSUCCESS based on false claims of communist threat', href: '/entities/individuals/dwight-d-eisenhower', status: 'Deceased (1969)' },
 { name: 'Edward Bernays', role: 'Public relations pioneer hired by United Fruit to manufacture media narrative of communist Guatemala', href: '/entities/individuals/edward-bernays', status: 'Deceased (1995)' },
 { name: 'Sam Zemurray', role: 'United Fruit Company president who lobbied extensively for U.S. intervention in Guatemala', href: '/entities/individuals/sam-zemurray', status: 'Deceased (1961)' },
 { name: 'Thomas Corcoran', role: 'Washington lobbyist known as "Tommy the Cork"who coordinated United Fruit\'s campaign for a coup', href: '/entities/individuals/thomas-corcoran', status: 'Deceased (1981)' },
 { name: 'Henry Cabot Lodge Jr.', role: 'U.S. Ambassador to the UN who blocked international investigation of the coup', href: '/entities/individuals/henry-cabot-lodge-jr', status: 'Deceased (1985)' },
 { name: 'Efra\u00EDn R\u00EDos Montt', role: 'Guatemalan dictator (1982-83) who carried out genocide against Maya people, a direct consequence of the 1954 coup', href: '/entities/individuals/efrain-rios-montt', status: 'Deceased (2018)' },
 { name: 'Frank Wisner', role: 'CIA Deputy Director of Plans who oversaw PBSUCCESS covert operations', href: '/entities/individuals/frank-wisner', status: 'Deceased (1965)' },
 { name: 'David Atlee Phillips', role: 'CIA propaganda chief for PBSUCCESS who ran the clandestine "Voice of Liberation"radio station', href: '/entities/individuals/david-atlee-phillips', status: 'Deceased (1988)' },
 { name: 'Che Guevara', role: 'Young Argentine doctor in Guatemala during the coup; experience radicalized him toward armed revolution', href: '/entities/individuals/che-guevara', status: 'Deceased (1967)' },
 ],
 timeline: [
 { date: '1944', event: 'October Revolution overthrows Guatemalan dictator Jorge Ubico; democratic elections follow' },
 { date: '1945', event: 'Juan Jos\u00E9 Ar\u00E9valo elected president in Guatemala\'s first democratic election; begins social reforms' },
 { date: '1950', event: 'Jacobo \u00C1rbenz elected president with 65% of the vote on platform of land reform and economic independence' },
 { date: '1952-JUN-17', event: '\u00C1rbenz signs Decree 900 (Agrarian Reform Law), redistributing unused agricultural land to 500,000 landless peasants' },
 { date: '1952', event: 'United Fruit Company lobbies Eisenhower administration, claiming \u00C1rbenz is a communist threat despite no evidence' },
 { date: '1953', event: 'Edward Bernays launches propaganda campaign in U.S. media, planting stories portraying Guatemala as a Soviet beachhead' },
 { date: '1953-AUG', event: 'CIA authorizes Operation PBSUCCESS with $2.7 million budget to overthrow \u00C1rbenz government' },
 { date: '1953', event: 'CIA begins training Castillo Armas and 480 mercenaries at bases in Honduras and Nicaragua' },
 { date: '1954-JAN', event: 'CIA launches Operation WASHTUB, planting fake Soviet arms caches to justify intervention' },
 { date: '1954-MAY', event: 'CIA-arranged arms shipment aboard the Alfhem arrives in Guatemala, used as propaganda to claim Soviet involvement' },
 { date: '1954-JUN-18', event: 'Castillo Armas invades Guatemala with CIA-equipped force of 480 men from Honduras' },
 { date: '1954-JUN-19', event: 'CIA\'s clandestine "Voice of Liberation"radio broadcasts false reports of massive rebel army advancing on the capital' },
 { date: '1954-JUN-25', event: 'CIA planes bomb Guatemala City; Guatemalan military refuses to defend \u00C1rbenz after CIA pressure' },
 { date: '1954-JUN-27', event: '\u00C1rbenz resigns and goes into exile; CIA-backed junta takes power' },
 { date: '1954-JUL', event: 'Castillo Armas installed as president; immediately reverses Decree 900, returns land to United Fruit, bans unions' },
 { date: '1954', event: 'Castillo Armas disenfranchises 70% of voters by imposing literacy requirement, eliminating indigenous political participation' },
 { date: '1960', event: 'Guatemalan Civil War begins as response to military dictatorship installed by the 1954 coup' },
 { date: '1982-1983', event: 'General R\u00EDos Montt conducts genocide against Maya indigenous communities, killing tens of thousands' },
 { date: '1996', event: 'Guatemalan Civil War ends after 36 years; 200,000 dead, 83% indigenous Maya victims' },
 { date: '1999', event: 'UN Historical Clarification Commission finds Guatemalan military committed genocide with U.S. support' },
 { date: '2013', event: 'R\u00EDos Montt convicted of genocide by Guatemalan court, first former head of state convicted of genocide in national court' },
 ],
 legalOutcomes: [
 { defendant: 'Efra\u00EDn R\u00EDos Montt', charge: 'Genocide and crimes against humanity against Maya Ixil people', outcome: 'Convicted in 2013; first sitting head of state convicted of genocide; conviction overturned on technicality' },
 { defendant: 'United Fruit Company / Chiquita', charge: 'Making payments to designated terrorist organizations in Colombia', outcome: 'Chiquita (successor) fined $25 million in 2007 for paying Colombian paramilitaries; no individuals prosecuted' },
 { defendant: 'Guatemalan Military Officers', charge: 'Murder, forced disappearance, torture during civil war', outcome: 'Multiple officers convicted in Guatemalan courts from 2009 onward for specific massacres' },
 { defendant: 'CIA Officials', charge: 'Conspiracy to overthrow a democratically elected government', outcome: 'No charges ever filed; operations declassified in 1997 and 2003 under Clinton and Bush' },
 { defendant: 'Carlos Castillo Armas', charge: 'Illegal seizure of power, suppression of civil liberties', outcome: 'Assassinated by his own presidential guard in 1957; succeeded by further military dictatorships' },
 { defendant: 'U.S. Government', charge: 'Violation of OAS Charter and UN Charter prohibiting intervention in internal affairs', outcome: 'Henry Cabot Lodge blocked UN investigation; no legal consequences for U.S.' },
 { defendant: 'Guatemalan State', charge: 'Genocide, as determined by UN Historical Clarification Commission', outcome: 'Commission found state responsible for 93% of human rights violations; 83% of victims were indigenous Maya' },
 { defendant: 'Bill Clinton (U.S. President)', charge: 'N/A - formal acknowledgment', outcome: 'Apologized in 1999 for U.S. role in supporting Guatemalan military during civil war' },
 ],
 charges: [
 { statute: 'UN Convention on the Prevention and Punishment of Genocide (1948)', description: 'Guatemalan military committed genocide against Maya indigenous people as determined by UN Historical Clarification Commission', count: '200,000 killed, 83% indigenous Maya; 626 documented massacres' },
 { statute: 'OAS Charter Article 19: Non-Intervention', description: 'No state has the right to intervene in the internal or external affairs of another state', count: 'CIA-organized coup directly violated this fundamental principle of inter-American law' },
 { statute: 'UN Charter Article 2(4): Prohibition of Use of Force', description: 'All Members shall refrain from the threat or use of force against the territorial integrity of any state', count: 'CIA-backed invasion force constituted use of force against Guatemala' },
 { statute: 'Neutrality Act (18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 960)', description: 'Prohibits military expeditions against nations with which the U.S. is at peace', count: 'CIA recruited, armed, and directed a 480-person military force to invade Guatemala' },
 { statute: 'Universal Declaration of Human Rights Article 21', description: 'The will of the people shall be the basis of the authority of government, expressed through genuine elections', count: '\u00C1rbenz won 65% of the vote in free elections; overthrown to protect corporate profits' },
 { statute: 'Geneva Conventions, Crimes Against Humanity', description: 'Systematic murder of civilian populations, including extrajudicial killings, torture, and forced disappearances', count: '45,000+ forced disappearances during Guatemalan Civil War' },
 { statute: 'Conflict of Interest (18 U.S.C. ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¾Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚Â¦ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬ÃƒÂ¢Ã¢â‚¬Å¾Ã‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¦ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬Â ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€žÂ¢ÃƒÆ’Ã†â€™Ãƒâ€šÃ‚Â¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡Ãƒâ€šÃ‚Â¬ÃƒÆ’Ã¢â‚¬Â¦Ãƒâ€šÃ‚Â¡ÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€¦Ã‚Â¡ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â§ 208)', description: 'Dulles brothers had direct financial connections to United Fruit Company while authorizing coup on its behalf', count: 'Allen Dulles and John Foster Dulles both had ties to United Fruit through Sullivan & Cromwell' },
 { statute: 'Forced Displacement, Rome Statute Article 7(1)(d)', description: 'Deportation or forcible transfer of population constitutes a crime against humanity', count: '1.5 million internally displaced persons during the Guatemalan Civil War' },
 ],
 coverup: [
 'The Dulles brothers\' financial connections to United Fruit Company were concealed from the public, Allen Dulles had been a United Fruit board member and John Foster Dulles\'s law firm represented the company',
 'Edward Bernays, the"father of public relations,"was hired by United Fruit to plant fabricated stories in U.S. media portraying Guatemala as a communist threat, pure corporate propaganda disguised as journalism',
 'The CIA\'s "Voice of Liberation"radio station broadcast false reports of a massive rebel army, creating panic in Guatemala City, the actual invasion force was only 480 men',
 'Operation WASHTUB planted fake Soviet-made weapons caches in Guatemala to manufacture evidence of communist infiltration',
 'Henry Cabot Lodge blocked the UN Security Council from investigating the coup, preventing international accountability',
 'CIA records of Operation PBSUCCESS were classified for over 40 years; major document releases didn\'t occur until 1997 and 2003',
 'The United States continued to support Guatemalan military governments throughout the 36-year civil war, providing training, weapons, and intelligence while knowing about ongoing human rights abuses',
 'The genocide of Maya indigenous communities (200,000 killed, 83% Maya) was not formally acknowledged by the U.S. until President Clinton\'s 1999 apology - 45 years after the coup',
 'The term"banana republic"itself originates from the political-economic dynamics created by United Fruit\'s domination of Central American nations, a system the U.S. government enforced by military coup',
 ],
 sources: [
 { title: 'Schlesinger, Stephen & Kinzer, Stephen, Bitter Fruit: The Story of the American Coup in Guatemala', url: 'https://www.hup.harvard.edu/catalog.php?isbn=9780674019300', date: '2005' },
 { title: 'National Security Archive, CIA and Guatemala: 1954 Coup Declassified Documents', url: 'https://nsarchive.gwu.edu/briefing-book/guatemala/2020-05-15/cias-1954-covert-operation-guatemala', date: '2020' },
 { title: 'CIA Freedom of Information, Operation PBSUCCESS Records', url: 'https://www.cia.gov/readingroom/collection/guatemala', date: '2003' },
 { title: 'UN Commission for Historical Clarification, Guatemala: Memory of Silence (Memoria del Silencio)', url: 'https://www.undocs.org/en/A/53/928', date: '1999' },
 { title: 'Kinzer, Stephen, The Brothers: John Foster Dulles, Allen Dulles, and Their Secret World War', url: 'https://us.macmillan.com/books/9781250053121/thebrothers', date: '2013' },
 { title: 'Grandin, Greg, The Last Colonial Massacre: Latin America in the Cold War', url: 'https://press.uchicago.edu/ucp/books/book/chicago/L/bo3614141.html', date: '2004' },
 { title: 'New York Times, Clinton Apologizes for U.S. Role in Guatemala Conflict', url: 'https://www.nytimes.com/1999/03/11/world/clinton-says-united-states-was-wrong-to-support-guatemalan-military.html', date: '1999-03-11' },
 { title: 'Immerman, Richard, The CIA in Guatemala: The Foreign Policy of Intervention', url: 'https://utpress.utexas.edu/9780292710832/', date: '1982' },
 ],
};

export default function GuatemalaCoup1954Page() {
 return (
 <div className="min-h-screen pt-20 lg:pt-24 pb-16">
 <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
 <Link href="/investigations"className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-6 pt-4"><ArrowLeft className="w-4 h-4"/>Back to Investigations</Link>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-zinc-800/60 bg-[rgba(0,6,20,0.90)] p-6 lg:p-8 mb-8">
 <div className="flex items-center gap-3 mb-4"><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-800 bg-zinc-900 text-zinc-400">{investigation.severity}</span><span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-700 bg-zinc-900 text-zinc-400">{investigation.status}</span></div>
 <h1 className="text-3xl lg:text-4xl font-black glass-text uppercase tracking-wider mb-2"><GlitchText text={investigation.title} /></h1>
 <p className="text-lg text-zinc-300 font-bold mb-4">{investigation.subtitle}</p>
 <p className="text-zinc-400 leading-relaxed">{investigation.summary}</p>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-zinc-700">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><ShieldAlert className="w-5 h-5 text-zinc-300"/>The Cover-Up</h2>
 <div className="space-y-3">{investigation.coverup.map((item, idx) => (<div key={idx} className="p-3 bg-zinc-900 border border-zinc-800"><p className="text-sm text-zinc-300">{item}</p></div>))}</div>
 </motion.div>
 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
 <div className="lg:col-span-2 space-y-8">
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Users className="w-5 h-5 text-zinc-300"/>Key Figures</h2>
 <div className="space-y-3">{investigation.keyFigures.map((figure, idx) => (<div key={idx} className="flex items-start justify-between p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><div className="flex-1">{figure.href ? (<Link href={figure.href} className="font-bold text-zinc-400 hover:text-white transition-colors">{figure.name}</Link>) : (<span className="font-bold glass-text">{figure.name}</span>)}<p className="text-sm text-zinc-400 mt-1">{figure.role}</p></div><span className="text-xs px-2 py-1 bg-[#0d0d0d] text-zinc-400 border border-[rgba(255,255,255,0.18)] whitespace-nowrap ml-2">{figure.status}</span></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
 <h2 className="text-xl font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Applicable Charges &amp; Statutes</h2>
 <div className="space-y-3">{investigation.charges.map((charge, idx) => (<div key={idx} className="p-4 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold text-zinc-400 text-sm font-mono">{charge.statute}</p><p className="text-sm text-zinc-300 mt-1">{charge.description}</p><p className="text-xs text-zinc-400 mt-1">{charge.count}</p></div>))}</div>
 </motion.div>
 </div>
 <div className="space-y-6">
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Calendar className="w-4 h-4 text-zinc-300"/>Timeline</h3>
 <div className="space-y-4">{investigation.timeline.map((item, idx) => (<div key={idx} className="relative pl-4 border-l-2 border-[rgba(255,255,255,0.15)]"><div className="absolute -left-[5px] top-0 w-2 h-2 bg-zinc-600"/><p className="text-xs text-zinc-300 font-mono">{item.date}</p><p className="text-sm text-zinc-300">{item.event}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4 flex items-center gap-2"><Scale className="w-5 h-5 text-zinc-300"/>Legal Outcomes</h3>
 <div className="space-y-3">{investigation.legalOutcomes.map((item, idx) => (<div key={idx} className="p-3 bg-[#0a0a0a] border border-[rgba(255,255,255,0.15)]"><p className="font-bold glass-text text-sm">{item.defendant}</p><p className="text-xs text-zinc-400 mt-1">{item.charge}</p><p className="text-xs text-zinc-400 mt-1">{item.outcome}</p></div>))}</div>
 </motion.div>
 <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
 <h3 className="text-lg font-bold glass-text uppercase tracking-wider mb-4">Sources</h3>
 <div className="space-y-2">{investigation.sources.map((source, idx) => (<a key={idx} href={source.url} target="_blank"rel="noopener noreferrer"className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-white hover:bg-[#0a0a0a] transition-colors"><ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0"/><div><span>{source.title}</span><span className="text-zinc-600 ml-2">({source.date})</span></div></a>))}</div>
 </motion.div>
 </div>
 </div>
 </div>
 </div>
 );
}
