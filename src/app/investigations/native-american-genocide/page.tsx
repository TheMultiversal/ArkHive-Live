'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  AlertTriangle,
  Users,
  Calendar,
  FileText,
  ExternalLink,
  Scale,
  ShieldAlert,
  Skull,
} from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const investigation = {
  title: 'Native American Genocide',
  subtitle: 'The Systematic Extermination, Displacement, and Cultural Erasure of Indigenous Peoples Across the Americas',
  severity: 'critical',
  status: 'Confirmed — Ongoing Legacy',
  summary: 'The Native American Genocide represents one of the largest and longest-running campaigns of ethnic cleansing in human history, spanning over five centuries and resulting in the deaths of an estimated 10 to 100 million Indigenous people across the Americas. Beginning with Christopher Columbus\'s arrival in 1492, European colonizers and later the United States government pursued deliberate policies of extermination, forced removal, cultural destruction, and systematic dispossession of Native peoples from their ancestral lands.\n\nThe Indian Removal Act of 1830, signed by President Andrew Jackson, authorized the forced relocation of tens of thousands of Native Americans from their homelands in the southeastern United States to designated \"Indian Territory\" west of the Mississippi River. The resulting Trail of Tears killed an estimated 15,000 Cherokee, Choctaw, Chickasaw, Creek, and Seminole people through exposure, disease, and starvation during forced winter marches. Jackson defied a Supreme Court ruling (Worcester v. Georgia) that recognized Cherokee sovereignty, reportedly declaring, \"John Marshall has made his decision; now let him enforce it.\"\n\nMilitary campaigns of outright extermination were carried out with explicit governmental authorization. The Sand Creek Massacre of 1864 saw Colonel John Chivington lead 675 U.S. troops in an unprovoked attack on a peaceful Cheyenne and Arapaho encampment in Colorado, slaughtering approximately 230 people — mostly women, children, and elderly — despite the village flying both an American flag and a white flag of surrender. Soldiers mutilated bodies and took scalps as trophies. The Wounded Knee Massacre of 1890, in which the U.S. 7th Cavalry killed between 250 and 300 Lakota Sioux — again mostly women and children — effectively ended the Indian Wars, and twenty soldiers received the Medal of Honor for their participation in the slaughter.\n\nThe U.S. government pursued a deliberate strategy of destroying the Plains Indians\' way of life through the systematic extermination of the American buffalo. Generals William Tecumseh Sherman and Philip Sheridan actively encouraged the mass killing of buffalo herds, understanding that the destruction of this resource would starve Native peoples into submission. An estimated 30 to 60 million buffalo were reduced to fewer than 1,000 by 1890. Sheridan reportedly told the Texas Legislature that buffalo hunters \"have done more to settle the vexed Indian question than the entire regular army has done in the last forty years.\"\n\nBiological warfare was employed as early as the 1763 Siege of Fort Pitt, where British commanders, including Lord Jeffrey Amherst, authorized the distribution of smallpox-contaminated blankets to Native Americans during Pontiac\'s War. Subsequent epidemics — whether intentionally spread or resulting from colonial indifference — devastated Native populations who had no immunity to European diseases, killing an estimated 90% of the Indigenous population in some regions.\n\nThe Indian boarding school system, initiated by Captain Richard Henry Pratt in 1879 with the motto \"Kill the Indian, save the man,\" forcibly removed Indigenous children from their families and communities. Over 150 years, more than 100,000 children were sent to over 350 government-funded boarding schools where they were forbidden from speaking their languages, practicing their religions, or maintaining any connection to their cultures. Children suffered widespread physical abuse, sexual abuse, malnutrition, and neglect. Recent investigations have uncovered hundreds of unmarked graves at former boarding school sites across the United States and Canada. The last federally funded boarding school did not close until 1969, and some continued operating into the 1990s.\n\nHundreds of treaties were signed between the U.S. government and Native nations — virtually all of which were violated or unilaterally abrogated by the federal government when Indigenous lands were found to contain valuable resources or when white settlers demanded access. The Fort Laramie Treaties of 1851 and 1868, which guaranteed the Black Hills to the Lakota Sioux in perpetuity, were broken when gold was discovered in the region. The Supreme Court ruled in United States v. Sioux Nation of Indians (1980) that the seizure constituted an illegal taking, but the Sioux have refused the monetary settlement — now worth over $1 billion — insisting on the return of their sacred lands.\n\nThe legacy of this genocide persists in the present day. Native Americans experience the highest rates of poverty, suicide, substance abuse, and police violence of any demographic group in the United States. Reservations lack basic infrastructure, healthcare, and educational resources. The crisis of Missing and Murdered Indigenous Women (MMIW) continues with thousands of unresolved cases. As of 2024, the United States has never formally acknowledged its actions against Native peoples as genocide, despite meeting every criterion established by the 1948 UN Convention on the Prevention and Punishment of the Crime of Genocide.',
  keyFigures: [
    { name: 'Andrew Jackson', role: '7th President of the United States. Architect of the Indian Removal Act of 1830. Defied the Supreme Court to forcibly relocate 60,000+ Native Americans, causing the Trail of Tears. Previously commanded troops in brutal campaigns against the Creek Nation.', href: '/entities/individuals/andrew-jackson', status: 'Deceased (1845)' },
    { name: 'Christopher Columbus', role: 'Italian explorer whose 1492 arrival in the Americas initiated centuries of colonization, enslavement, and genocide of Indigenous peoples. Personally oversaw the enslavement and massacre of Taino people in Hispaniola, reducing their population from an estimated 250,000 to near extinction within decades.', href: '/entities/individuals/christopher-columbus', status: 'Deceased (1506)' },
    { name: 'George Armstrong Custer', role: 'U.S. Army Lieutenant Colonel. Led campaigns of extermination against Plains Indians. Attacked Black Kettle\'s peaceful Cheyenne village at the Battle of the Washita River in 1868, killing women and children and destroying winter food supplies.', href: '/entities/individuals/george-armstrong-custer', status: 'Deceased (1876)' },
    { name: 'William Tecumseh Sherman', role: 'Commanding General of the U.S. Army (1869–1883). Orchestrated military campaigns to subjugate Plains Indians and explicitly promoted the extermination of buffalo herds to starve Native peoples into submission. Stated the goal was to \"act with vindictive earnestness against the Sioux, even to their extermination, men, women, and children.\"', href: '/entities/individuals/william-tecumseh-sherman', status: 'Deceased (1891)' },
    { name: 'Philip Sheridan', role: 'U.S. Army General. Commanded the Military Division of the Missouri overseeing Indian Wars campaigns. Advocated total war against Native peoples and endorsed buffalo extermination. Attributed with the statement \"The only good Indian is a dead Indian.\"', href: '/entities/individuals/philip-sheridan', status: 'Deceased (1888)' },
    { name: 'Richard Henry Pratt', role: 'U.S. Army Captain and founder of the Carlisle Indian Industrial School (1879), the model for the Indian boarding school system. Coined the phrase \"Kill the Indian, save the man\" — the guiding philosophy behind forcibly removing over 100,000 Native children from their families to erase their cultures.', href: '/entities/individuals/richard-henry-pratt', status: 'Deceased (1924)' },
    { name: 'John Chivington', role: 'U.S. Army Colonel and Methodist minister. Commanded the Sand Creek Massacre on November 29, 1864, ordering troops to attack a peaceful Cheyenne and Arapaho camp, killing approximately 230 people — mostly women, children, and elderly. Troops mutilated victims\' bodies as trophies.', href: '/entities/individuals/john-chivington', status: 'Deceased (1894)' },
    { name: 'Thomas Jefferson', role: '3rd President of the United States. While publicly expressing sympathy for Native peoples, pursued aggressive policies of land acquisition and assimilation. Privately wrote of driving Native Americans \"with the beasts of the forests into the Stony mountains\" and advocated using debt to acquire tribal lands.', href: '/entities/individuals/thomas-jefferson', status: 'Deceased (1826)' },
    { name: 'James Knox Polk', role: '11th President of the United States. Pursued aggressive expansionism under Manifest Destiny, waging the Mexican-American War and displacing Indigenous peoples across vast territories. His policies accelerated settler colonialism and treaty violations throughout the West.', href: '/entities/individuals/james-knox-polk', status: 'Deceased (1849)' },
    { name: 'Lord Jeffrey Amherst', role: 'Commander-in-Chief of British forces in North America. Authorized the use of smallpox-infected blankets as biological weapons against Native Americans during Pontiac\'s War (1763), writing \"You will do well to try to inoculate the Indians by means of blankets.\"', href: '/entities/individuals/jeffrey-amherst', status: 'Deceased (1797)' },
    { name: 'Henry Dawes', role: 'U.S. Senator and author of the Dawes Act (1887), which dissolved communal tribal landholdings and redistributed them as individual allotments. The Act resulted in the loss of approximately 90 million acres — two-thirds of all remaining tribal land — to white settlers and speculators.', href: '/entities/individuals/henry-dawes', status: 'Deceased (1903)' },
    { name: 'Kit Carson', role: 'U.S. Army Colonel. Led the forced removal of the Navajo people during the \"Long Walk\" of 1864, destroying their homes, livestock, and orchards. Approximately 8,000–9,000 Navajo were force-marched 300 miles to the Bosque Redondo internment camp, where thousands died of disease and starvation.', href: '/entities/individuals/kit-carson', status: 'Deceased (1868)' },
    { name: 'James Forsyth', role: 'U.S. Army Colonel. Commanded the 7th Cavalry at the Wounded Knee Massacre on December 29, 1890, where between 250 and 300 Lakota Sioux — mostly unarmed women, children, and elderly — were killed. Twenty soldiers received the Medal of Honor for their actions.', href: '/entities/individuals/james-forsyth', status: 'Deceased (1906)' },
    { name: 'Henry Knox', role: 'First U.S. Secretary of War. Established early federal Indian policy emphasizing \"civilization\" programs and land cessions through coerced treaties, setting precedents for systematic dispossession that persisted for over a century.', href: '/entities/individuals/henry-knox', status: 'Deceased (1806)' },
  ],
  timeline: [
    { date: '1492', event: 'Christopher Columbus arrives in the Americas, initiating European colonization. Within decades, the Taino population of Hispaniola is reduced from approximately 250,000 to near extinction through enslavement, massacre, and disease.' },
    { date: '1637', event: 'The Pequot Massacre: English colonists and their Native allies attack the Pequot village at Mystic, Connecticut, burning it and killing approximately 400–700 men, women, and children. The Pequot nation is nearly annihilated and survivors are enslaved.' },
    { date: '1763', event: 'British Commander Lord Jeffrey Amherst authorizes the distribution of smallpox-contaminated blankets to Native Americans at the Siege of Fort Pitt during Pontiac\'s War — one of the earliest documented cases of biological warfare.' },
    { date: '1830', event: 'President Andrew Jackson signs the Indian Removal Act, authorizing the forced relocation of approximately 60,000 Native Americans from the southeastern United States to Indian Territory (present-day Oklahoma).' },
    { date: '1831–1838', event: 'The Trail of Tears: Cherokee, Choctaw, Chickasaw, Creek, and Seminole nations are forcibly marched westward. An estimated 15,000 Native Americans die from exposure, disease, and starvation during the removals.' },
    { date: '1851', event: 'The first Fort Laramie Treaty is signed, recognizing vast Native territories across the Great Plains. The U.S. government begins violating its terms almost immediately as settlers push westward.' },
    { date: '1862', event: 'The Dakota War and its aftermath: 38 Dakota men are hanged in Mankato, Minnesota — the largest mass execution in U.S. history — ordered by President Abraham Lincoln. Over 1,600 Dakota women, children, and elderly are interned in a concentration camp at Fort Snelling.' },
    { date: '1864 (November)', event: 'Sand Creek Massacre: Colonel John Chivington leads 675 U.S. troops in an unprovoked dawn attack on a peaceful Cheyenne and Arapaho village in Colorado, killing approximately 230 people, mostly women and children. The village was flying an American flag and a white flag of surrender.' },
    { date: '1864 (March)', event: 'The Long Walk of the Navajo: Colonel Kit Carson forces approximately 8,000–9,000 Navajo people to march 300 miles to the Bosque Redondo internment camp at Fort Sumner, New Mexico. Thousands die from starvation, disease, and exposure during internment.' },
    { date: '1868', event: 'Second Fort Laramie Treaty guarantees the Black Hills to the Lakota Sioux \"in perpetuity.\" The U.S. government violates the treaty within six years after gold is discovered in the region.' },
    { date: '1870s–1880s', event: 'Systematic extermination of the American buffalo: An estimated 30–60 million buffalo are reduced to fewer than 1,000. Generals Sherman and Sheridan actively encourage the slaughter to destroy Plains Indians\' primary food source and force their surrender.' },
    { date: '1879', event: 'Captain Richard Henry Pratt establishes the Carlisle Indian Industrial School in Pennsylvania, the first off-reservation Indian boarding school. His motto — \"Kill the Indian, save the man\" — becomes the guiding philosophy for over 350 boarding schools that forcibly assimilate more than 100,000 Native children.' },
    { date: '1887', event: 'The Dawes Act (General Allotment Act) dissolves communal tribal landholdings. Over the next several decades, Native Americans lose approximately 90 million acres — roughly two-thirds of their remaining land — to white settlers, speculators, and the federal government.' },
    { date: '1890 (December 29)', event: 'Wounded Knee Massacre: The U.S. 7th Cavalry kills between 250 and 300 Lakota Sioux at Wounded Knee Creek, South Dakota — mostly unarmed women, children, and elderly. Twenty soldiers receive the Medal of Honor. The massacre effectively ends the Indian Wars.' },
    { date: '1924', event: 'The Indian Citizenship Act grants U.S. citizenship to all Native Americans born in the United States. However, many states continue to deny Native Americans the right to vote until the 1960s through literacy tests, poll taxes, and other discriminatory measures.' },
    { date: '1953', event: 'House Concurrent Resolution 108 initiates the Termination Era, a federal policy aimed at ending the government\'s recognition of tribal sovereignty. Over 100 tribes are terminated, resulting in the loss of 1.4 million acres of tribal land and federal services to thousands of Native Americans.' },
    { date: '1973', event: 'The Wounded Knee Occupation: Members of the American Indian Movement (AIM) occupy the site of the 1890 massacre for 71 days to protest broken treaties and government oppression. The standoff results in two deaths and draws international attention to Native American rights.' },
    { date: '1980', event: 'United States v. Sioux Nation of Indians: The Supreme Court rules that the U.S. government\'s seizure of the Black Hills violated the Fifth Amendment and constituted an illegal taking. The Lakota refuse the monetary settlement — now worth over $1 billion — demanding the return of their sacred lands.' },
    { date: '2009', event: 'The U.S. government includes a formal \"apology to Native peoples\" in the 2010 Defense Appropriations Act, signed by President Obama — but it is buried in an unrelated spending bill, contains a legal disclaimer preventing its use in court, and receives no public ceremony or acknowledgment.' },
    { date: '2021–Present', event: 'The Federal Indian Boarding School Initiative, launched by Secretary of the Interior Deb Haaland (Laguna Pueblo), investigates the federal boarding school system. Initial reports identify over 500 schools and more than 50 burial sites containing the remains of Indigenous children. Investigations continue as more unmarked graves are discovered.' },
  ],
  legalOutcomes: [
    { defendant: 'United States Federal Government', charge: 'Illegal seizure of the Black Hills in violation of the 1868 Fort Laramie Treaty', outcome: 'Supreme Court ruled in 1980 (United States v. Sioux Nation) that the taking was illegal and awarded $105 million. The Lakota have refused the settlement, demanding land return. The trust fund now exceeds $1 billion.' },
    { defendant: 'Colonel John Chivington', charge: 'Sand Creek Massacre — slaughter of approximately 230 peaceful Cheyenne and Arapaho', outcome: 'Congressional investigation condemned the massacre. Chivington resigned his commission to avoid court-martial. No criminal charges were ever filed.' },
    { defendant: 'Colonel James Forsyth', charge: 'Wounded Knee Massacre — killing of 250–300 unarmed Lakota Sioux', outcome: 'Court of inquiry initially relieved Forsyth of command; he was reinstated within months. No charges filed. Twenty soldiers received the Medal of Honor; campaign to revoke them remains ongoing as of 2024.' },
    { defendant: 'U.S. Bureau of Indian Affairs', charge: 'Systematic mismanagement of tribal trust funds and resources', outcome: 'Cobell v. Salazar class-action lawsuit resulted in a $3.4 billion settlement in 2009 — representing only a fraction of the estimated losses from over a century of mismanagement.' },
    { defendant: 'Federal & State Governments', charge: 'Forced sterilization of Native American women without informed consent', outcome: 'A 1976 Government Accountability Office report confirmed that the Indian Health Service sterilized approximately 3,400 Native American women between 1973 and 1976 alone. No criminal charges were filed.' },
    { defendant: 'Various Christian Organizations & U.S. Government', charge: 'Systematic abuse, cultural destruction, and deaths at Indian boarding schools', outcome: 'Federal investigation launched in 2021. Over 500 schools and 50+ burial sites identified. As of 2024, no criminal accountability has been established for historical abuses. Some religious organizations have issued apologies.' },
  ],
  charges: [
    { statute: 'UN Convention on the Prevention and Punishment of the Crime of Genocide (1948) — Article II', description: 'Acts committed with intent to destroy, in whole or in part, a national, ethnical, racial, or religious group: (a) Killing members of the group; (b) Causing serious bodily or mental harm; (c) Deliberately inflicting conditions of life calculated to bring about physical destruction; (d) Imposing measures intended to prevent births; (e) Forcibly transferring children of the group to another group. U.S. actions against Native Americans satisfy all five criteria.', count: 'Millions of victims across 500+ years of documented atrocities' },
    { statute: 'UN Declaration on the Rights of Indigenous Peoples (UNDRIP) — Articles 7, 8, 10, 26, 28', description: 'Violations of the collective and individual rights of Indigenous peoples, including the right to life, to not be subjected to forced assimilation or destruction of culture, to not be forcibly removed from lands, and to the lands and resources they have traditionally owned.', count: 'Systemic violations affecting all 574 federally recognized tribes and hundreds of unrecognized nations' },
    { statute: 'Treaty Violations — Hundreds of Ratified Treaties (1778–1871)', description: 'The United States signed approximately 374 treaties with Native nations, nearly all of which were violated or unilaterally abrogated by the federal government. Treaties were routinely broken when Indigenous lands were found to contain valuable resources or when white settlers demanded access.', count: '374+ treaties violated — constituting the largest pattern of broken agreements in world history' },
    { statute: 'Crimes Against Humanity — Forced Removal and Ethnic Cleansing', description: 'The Indian Removal Act of 1830 and subsequent policies constituted a systematic campaign of forced displacement affecting over 100,000 Native Americans. The Trail of Tears, Long Walk of the Navajo, and numerous other forced marches resulted in thousands of deaths from exposure, starvation, and disease.', count: 'Over 100,000 forcibly removed; estimated 15,000+ deaths during the Trail of Tears alone' },
    { statute: 'Crimes Against Humanity — Cultural Genocide via Boarding Schools', description: 'Over 100,000 Native children were forcibly removed from their families and placed in government and church-run boarding schools designed to eradicate Indigenous languages, religions, and cultural practices. Children suffered widespread physical abuse, sexual abuse, forced labor, and neglect. Hundreds of unmarked graves have been discovered at former school sites.', count: '100,000+ children affected across 350+ boarding schools operating from 1819 to the 1960s' },
    { statute: 'Biological Warfare — Use of Disease as a Weapon', description: 'Documented use of smallpox-contaminated materials against Native populations, including the 1763 distribution of infected blankets at Fort Pitt. Combined with colonial indifference to epidemic control, European diseases killed an estimated 90% of the Indigenous population in some regions.', count: 'Estimated tens of millions of deaths from introduced diseases across the Americas' },
    { statute: 'Forced Sterilization — Violation of Bodily Autonomy and Reproductive Rights', description: 'The Indian Health Service conducted forced and coerced sterilizations of Native American women throughout the 1960s and 1970s without informed consent. A 1976 GAO investigation confirmed at least 3,400 sterilizations in a four-year period alone. Some estimates suggest the actual number may be significantly higher.', count: 'At least 3,400 confirmed cases (1973–1976); likely thousands more undocumented' },
    { statute: 'Environmental Destruction — Deliberate Resource Annihilation', description: 'The systematic extermination of the American buffalo (from 30–60 million to fewer than 1,000) was explicitly promoted by U.S. military leadership as a strategy to destroy the Plains Indians\' way of life and force their surrender and confinement to reservations.', count: '30–60 million buffalo exterminated; entire way of life destroyed for dozens of Plains nations' },
  ],
  coverup: [
    'The United States has never formally recognized or acknowledged its treatment of Native Americans as genocide, despite meeting every criterion established by the 1948 UN Convention on the Prevention and Punishment of the Crime of Genocide. A buried \"apology\" in the 2010 Defense Appropriations Act included a legal disclaimer explicitly preventing its use to support any legal claims.',
    'American public education systematically minimizes or omits the scope of violence against Native peoples. Textbooks frequently portray colonization as mutual \"cultural exchange\" and describe forced removals using passive language like \"Native Americans moved westward.\" The genocide is rarely taught as such in K–12 curricula.',
    'The mythology of \"Manifest Destiny\" reframed the violent conquest and ethnic cleansing of Indigenous peoples as divinely ordained, inevitable progress — a narrative that persists in American cultural identity and political rhetoric to this day.',
    'Twenty soldiers received the Medal of Honor for their participation in the Wounded Knee Massacre of 1890. Despite decades of advocacy by Native American organizations and multiple congressional proposals, these medals have never been revoked — effectively maintaining an official military honor for an act of mass murder.',
    'The full scope of the Indian boarding school system\'s atrocities was suppressed for over a century. The federal government did not begin investigating boarding school deaths and burial sites until 2021, and many records were deliberately destroyed. The discovery of hundreds of unmarked children\'s graves has only begun to reveal the true death toll.',
    'Forced sterilization of Native American women by the Indian Health Service was concealed until a whistleblower — Dr. Connie Pinkerton-Uri (Choctaw/Cherokee) — brought it to public attention in the 1970s. Despite a GAO investigation confirming thousands of nonconsensual procedures, no one was ever criminally prosecuted.',
    'The systematic destruction of the buffalo was publicly framed as commercial enterprise and frontier economics, obscuring the documented military strategy behind it. Congressional efforts to protect buffalo herds were vetoed by President Ulysses S. Grant, who understood the military value of the extermination campaign.',
    'Hundreds of treaties signed in good faith by Native nations were unilaterally broken by the U.S. government. These violations are rarely characterized as breaches of international law or sovereignty in mainstream historical or legal discourse, despite constituting the largest pattern of broken agreements between sovereign nations in recorded history.',
    'The ongoing crisis of Missing and Murdered Indigenous Women (MMIW) — with thousands of unresolved cases — receives minimal federal attention or media coverage compared to cases involving white victims. A 2017 study found that Native American women face murder rates more than ten times the national average on some reservations.',
    'Contemporary conditions on Native American reservations — including extreme poverty, lack of healthcare, contaminated water supplies, and underfunded schools — are consistently treated as unfortunate circumstances rather than the direct, predictable consequences of centuries of deliberate governmental policy.',
  ],
  sources: [
    { title: 'Federal Indian Boarding School Initiative Investigative Report — U.S. Department of the Interior', url: 'https://www.doi.gov/priorities/strengthening-indian-country/federal-indian-boarding-school-initiative', date: '2022' },
    { title: 'National Museum of the American Indian — Smithsonian Institution', url: 'https://americanindian.si.edu/', date: 'Ongoing' },
    { title: 'Sand Creek Massacre National Historic Site — National Park Service', url: 'https://www.nps.gov/sand/index.htm', date: 'Ongoing' },
    { title: 'Trail of Tears National Historic Trail — National Park Service', url: 'https://www.nps.gov/trte/index.htm', date: 'Ongoing' },
    { title: 'Wounded Knee Massacre — Britannica', url: 'https://www.britannica.com/event/Wounded-Knee-Massacre', date: 'Ongoing' },
    { title: 'United States v. Sioux Nation of Indians, 448 U.S. 371 (1980)', url: 'https://supreme.justia.com/cases/federal/us/448/371/', date: '1980' },
    { title: 'Dawes Act (1887) — National Archives', url: 'https://www.archives.gov/milestone-documents/dawes-act', date: '1887' },
    { title: 'An American Genocide: The United States and the California Indian Catastrophe — Yale University Press', url: 'https://yalebooks.yale.edu/book/9780300230697/an-american-genocide/', date: '2016' },
    { title: 'Indian Removal Act: Primary Documents in American History — Library of Congress', url: 'https://guides.loc.gov/indian-removal-act', date: 'Ongoing' },
    { title: 'Cobell v. Salazar Settlement — U.S. Department of the Interior', url: 'https://www.doi.gov/cobell', date: '2009' },
    { title: 'Not Invisible Act Report — U.S. Department of the Interior', url: 'https://www.doi.gov/missing-and-murdered-indigenous-peoples', date: '2023' },
    { title: 'The Destruction of the Bison — Cambridge University Press', url: 'https://www.cambridge.org/core/books/destruction-of-the-bison/A8B65D53AAA955CE13210444C1E0E6AB', date: '2000' },
  ],
};

export default function NativeAmericanGenocidePage() {
  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link href="/investigations" className="inline-flex items-center gap-2 text-zinc-400 hover:text-blood-500 transition-colors mb-6 pt-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Investigations
        </Link>

        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="border-2 border-blood-800/60 bg-black/80 p-6 lg:p-8 mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 text-xs font-bold uppercase border border-red-500/30 bg-red-500/20 text-red-400">{investigation.severity}</span>
            <span className="px-3 py-1 text-xs font-bold uppercase border border-zinc-500/30 bg-zinc-500/20 text-zinc-400">{investigation.status}</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
            <GlitchText text={investigation.title} />
          </h1>
          <p className="text-lg text-blood-500 font-bold mb-4">{investigation.subtitle}</p>
          <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{investigation.summary}</p>
        </motion.div>

        {/* Cover-Up */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="glass-card p-6 mb-8 border-l-4 border-blood-600">
          <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
            <ShieldAlert className="w-5 h-5 text-blood-500" />
            The Cover-Up &amp; Denial
          </h2>
          <div className="space-y-3">
            {investigation.coverup.map((item, idx) => (
              <div key={idx} className="p-3 bg-red-950/20 border border-red-500/30">
                <p className="text-sm text-zinc-300">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Key Figures */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-blood-500" />
                Key Figures
              </h2>
              <div className="space-y-3">
                {investigation.keyFigures.map((figure, idx) => (
                  <div key={idx} className="flex items-start justify-between p-3 bg-zinc-900/50 border border-zinc-800">
                    <div className="flex-1">
                      {figure.href ? (
                        <Link href={figure.href} className="font-bold text-blood-400 hover:text-blood-300 transition-colors">{figure.name}</Link>
                      ) : (
                        <span className="font-bold text-white">{figure.name}</span>
                      )}
                      <p className="text-sm text-zinc-400 mt-1">{figure.role}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-zinc-800 text-zinc-400 border border-zinc-700 whitespace-nowrap ml-2">{figure.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Charges */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="glass-card p-6">
              <h2 className="text-xl font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Applicable Charges &amp; Statutes
              </h2>
              <div className="space-y-3">
                {investigation.charges.map((charge, idx) => (
                  <div key={idx} className="p-4 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-blood-400 text-sm font-mono">{charge.statute}</p>
                    <p className="text-sm text-zinc-300 mt-1">{charge.description}</p>
                    <p className="text-xs text-red-400 mt-1">{charge.count}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Timeline */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-blood-500" />
                Timeline
              </h3>
              <div className="space-y-4">
                {investigation.timeline.map((item, idx) => (
                  <div key={idx} className="relative pl-4 border-l-2 border-zinc-800">
                    <div className="absolute -left-[5px] top-0 w-2 h-2 rounded-full bg-blood-500" />
                    <p className="text-xs text-blood-500 font-mono">{item.date}</p>
                    <p className="text-sm text-zinc-300">{item.event}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Legal Outcomes */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5 text-blood-500" />
                Legal Outcomes
              </h3>
              <div className="space-y-3">
                {investigation.legalOutcomes.map((item, idx) => (
                  <div key={idx} className="p-3 bg-zinc-900/50 border border-zinc-800">
                    <p className="font-bold text-white text-sm">{item.defendant}</p>
                    <p className="text-xs text-zinc-400 mt-1">{item.charge}</p>
                    <p className="text-xs text-blood-400 mt-1">{item.outcome}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Sources */}
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="glass-card p-6">
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-4">Sources</h3>
              <div className="space-y-2">
                {investigation.sources.map((source, idx) => (
                  <a key={idx} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-2 p-2 text-sm text-zinc-400 hover:text-blood-400 hover:bg-zinc-900/50 transition-colors">
                    <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <div>
                      <span>{source.title}</span>
                      <span className="text-zinc-600 ml-2">({source.date})</span>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
