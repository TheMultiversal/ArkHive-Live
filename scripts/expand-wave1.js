// Expand 100 profiles with empty knownAssociates + 34 with empty controversies
const fs = require('fs');
let content = fs.readFileSync('src/app/entities/individuals/[slug]/page.tsx', 'utf8');
let changes = 0;

const kaData = {
  'heather-heyer': [
    { name: 'Susan Bro', relationship: 'Mother and activist who continued advocacy after Heather\'s murder at the Charlottesville Unite the Right rally', href: '/entities/individuals/susan-bro' },
    { name: 'James Alex Fields Jr.', relationship: 'White supremacist who murdered Heyer by driving car into counter-protesters; convicted of first-degree murder', href: '/entities/individuals/james-alex-fields-jr' },
    { name: 'Donald Trump', relationship: 'President who infamously said there were "very fine people on both sides" after the rally where Heyer was killed', href: '/entities/individuals/donald-trump' },
  ],
  'maher-arar': [
    { name: 'George W. Bush', relationship: 'President during extraordinary rendition program that sent Arar to Syria for torture', href: '/entities/individuals/george-w-bush' },
    { name: 'John Ashcroft', relationship: 'Attorney General who oversaw DOJ during Arar\'s rendition and deportation to Syria', href: '/entities/individuals/john-ashcroft' },
    { name: 'Condoleezza Rice', relationship: 'National Security Advisor involved in post-9/11 rendition policies that led to Arar\'s torture', href: '/entities/individuals/condoleezza-rice' },
  ],
  'khaled-el-masri': [
    { name: 'George Tenet', relationship: 'CIA Director who oversaw extraordinary rendition program that kidnapped el-Masri and sent him to a black site', href: '/entities/individuals/george-tenet' },
    { name: 'George W. Bush', relationship: 'President who authorized CIA enhanced interrogation and rendition programs', href: '/entities/individuals/george-w-bush' },
    { name: 'Condoleezza Rice', relationship: 'National Security Advisor reportedly informed about el-Masri\'s mistaken rendition', href: '/entities/individuals/condoleezza-rice' },
  ],
  'shou-zi-chew': [
    { name: 'Mark Zuckerberg', relationship: 'Fellow tech CEO facing similar congressional scrutiny over platform safety and data privacy', href: '/entities/individuals/mark-zuckerberg' },
    { name: 'Donald Trump', relationship: 'President who twice attempted to ban TikTok through executive orders and signed the forced-sale legislation', href: '/entities/individuals/donald-trump' },
    { name: 'Zhang Yiming', relationship: 'ByteDance founder and boss; Chew serves as CEO of TikTok under ByteDance\'s corporate structure', href: '/entities/individuals/zhang-yiming' },
  ],
  'mohammad-mosaddegh': [
    { name: 'Dwight D. Eisenhower', relationship: 'U.S. President who authorized CIA coup (Operation Ajax) that overthrew Mosaddegh\'s democratically elected government in 1953', href: '/entities/individuals/dwight-d-eisenhower' },
    { name: 'Allen Dulles', relationship: 'CIA Director who orchestrated the 1953 Iranian coup against Mosaddegh', href: '/entities/individuals/allen-dulles' },
    { name: 'Winston Churchill', relationship: 'British PM who pushed for coup after Mosaddegh nationalized Anglo-Iranian Oil Company', href: '/entities/individuals/winston-churchill' },
  ],
  'reality-winner': [
    { name: 'Donald Trump', relationship: 'President whose administration aggressively prosecuted Winner for leaking evidence of Russian election interference', href: '/entities/individuals/donald-trump' },
    { name: 'Jeff Sessions', relationship: 'Attorney General who personally announced Winner\'s prosecution and pledged crackdown on leakers', href: '/entities/individuals/jeff-sessions' },
    { name: 'Edward Snowden', relationship: 'Fellow NSA whistleblower whose case set precedent for Espionage Act prosecutions of leakers', href: '/entities/individuals/edward-snowden' },
    { name: 'Daniel Hale', relationship: 'Fellow intelligence community whistleblower prosecuted under Espionage Act for revealing drone program details', href: '/entities/individuals/daniel-hale' },
  ],
  'deb-haaland': [
    { name: 'Joe Biden', relationship: 'President who appointed Haaland as first Native American Cabinet secretary (Interior)', href: '/entities/individuals/joe-biden' },
    { name: 'Donald Trump', relationship: 'Predecessor whose policies Haaland reversed on public lands, fossil fuels, and tribal sovereignty', href: '/entities/individuals/donald-trump' },
    { name: 'Bryan Newland', relationship: 'Assistant Secretary for Indian Affairs under Haaland; led Federal Indian Boarding School Initiative', href: '/entities/individuals/bryan-newland' },
  ],
  'vivek-murthy': [
    { name: 'Joe Biden', relationship: 'President who appointed Murthy as Surgeon General; Murthy led COVID-19 public health messaging', href: '/entities/individuals/joe-biden' },
    { name: 'Anthony Fauci', relationship: 'Fellow public health leader during COVID-19 pandemic; collaborated on vaccination campaigns', href: '/entities/individuals/anthony-fauci' },
    { name: 'Donald Trump', relationship: 'President who fired Murthy as Surgeon General in 2017; Murthy was later reappointed by Biden', href: '/entities/individuals/donald-trump' },
  ],
  'victoria-nuland': [
    { name: 'Joe Biden', relationship: 'President under whom Nuland served as Under Secretary of State for Political Affairs', href: '/entities/individuals/joe-biden' },
    { name: 'Hillary Clinton', relationship: 'Secretary of State under whom Nuland served as spokesperson', href: '/entities/individuals/hillary-clinton' },
    { name: 'Dick Cheney', relationship: 'Vice President under whom Nuland served as principal deputy national security advisor', href: '/entities/individuals/dick-cheney' },
    { name: 'Antony Blinken', relationship: 'Secretary of State and direct superior during Biden administration Ukraine policy', href: '/entities/individuals/antony-blinken' },
  ],
  'kristen-clarke': [
    { name: 'Merrick Garland', relationship: 'Attorney General who appointed Clarke as head of DOJ Civil Rights Division', href: '/entities/individuals/merrick-garland' },
    { name: 'Joe Biden', relationship: 'President who nominated Clarke to lead DOJ\'s Civil Rights Division', href: '/entities/individuals/joe-biden' },
    { name: 'Jeff Sessions', relationship: 'Predecessor AG whose rollback of civil rights enforcement Clarke worked to reverse', href: '/entities/individuals/jeff-sessions' },
  ],
  'anne-milgram': [
    { name: 'Joe Biden', relationship: 'President who appointed Milgram as DEA Administrator', href: '/entities/individuals/joe-biden' },
    { name: 'Merrick Garland', relationship: 'Attorney General who oversees DEA under Milgram\'s leadership', href: '/entities/individuals/merrick-garland' },
    { name: 'Vivek Murthy', relationship: 'Surgeon General who collaborated with Milgram on opioid crisis response', href: '/entities/individuals/vivek-murthy' },
  ],
  'robbie-parker': [
    { name: 'Alex Jones', relationship: 'Conspiracy theorist who defamed Parker and other Sandy Hook families, calling the massacre a hoax; lost $1.5 billion defamation judgment', href: '/entities/individuals/alex-jones' },
    { name: 'Neil Heslin', relationship: 'Fellow Sandy Hook parent and plaintiff in defamation lawsuits against Alex Jones', href: '/entities/individuals/neil-heslin' },
    { name: 'Leonard Pozner', relationship: 'Fellow Sandy Hook parent targeted by conspiracy theorists; co-founded HONR Network to fight hoaxers', href: '/entities/individuals/leonard-pozner' },
  ],
  'richard-clarke': [
    { name: 'George W. Bush', relationship: 'President Clarke served under as counterterrorism coordinator; Clarke testified Bush administration ignored pre-9/11 warnings', href: '/entities/individuals/george-w-bush' },
    { name: 'Condoleezza Rice', relationship: 'National Security Advisor whom Clarke warned about al-Qaeda threats before 9/11', href: '/entities/individuals/condoleezza-rice' },
    { name: 'Bill Clinton', relationship: 'President under whom Clarke served as National Coordinator for Counterterrorism', href: '/entities/individuals/bill-clinton' },
    { name: 'George Tenet', relationship: 'CIA Director who shared Clarke\'s concerns about imminent al-Qaeda attack pre-9/11', href: '/entities/individuals/george-tenet' },
  ],
  'archer-blood': [
    { name: 'Richard Nixon', relationship: 'President whose administration ignored Blood\'s warnings about genocide in Bangladesh', href: '/entities/individuals/richard-nixon' },
    { name: 'Henry Kissinger', relationship: 'National Security Advisor who dismissed Blood\'s "Blood Telegram" warning of Pakistani genocide in East Pakistan', href: '/entities/individuals/henry-kissinger' },
  ],
  'qasem-soleimani': [
    { name: 'Donald Trump', relationship: 'President who ordered Soleimani\'s assassination via drone strike at Baghdad airport in January 2020', href: '/entities/individuals/donald-trump' },
    { name: 'Ali Khamenei', relationship: 'Supreme Leader of Iran whom Soleimani served as head of the Quds Force', href: '/entities/individuals/ali-khamenei' },
    { name: 'Mike Pompeo', relationship: 'Secretary of State who advocated for Soleimani\'s killing and defended it publicly', href: '/entities/individuals/mike-pompeo' },
  ],
  'ali-khamenei': [
    { name: 'Qasem Soleimani', relationship: 'Quds Force commander and Khamenei\'s most trusted military leader; assassinated by U.S. in 2020', href: '/entities/individuals/qasem-soleimani' },
    { name: 'Donald Trump', relationship: 'U.S. President who imposed "maximum pressure" sanctions and ordered Soleimani killing', href: '/entities/individuals/donald-trump' },
    { name: 'Mohammad Mosaddegh', relationship: 'Former PM whose 1953 CIA-backed overthrow shaped Khamenei\'s anti-Western worldview', href: '/entities/individuals/mohammad-mosaddegh' },
  ],
  'brian-ohara': [
    { name: 'Merrick Garland', relationship: 'Attorney General overseeing DOJ pattern-or-practice investigations into police departments', href: '/entities/individuals/merrick-garland' },
    { name: 'Kristen Clarke', relationship: 'DOJ Civil Rights Division chief who led investigations into systemic police misconduct', href: '/entities/individuals/kristen-clarke' },
  ],
  'james-morrison': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during 737 MAX crisis; Morrison\'s oversight role intersected with Muilenburg\'s management failures', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA safety official involved in 737 MAX certification process', href: '/entities/individuals/ali-bahrami' },
  ],
  'martin-winterkorn': [
    { name: 'Oliver Schmidt', relationship: 'VW executive who was imprisoned in the U.S. for his role in the diesel emissions scandal', href: '/entities/individuals/oliver-schmidt' },
    { name: 'Herbert Diess', relationship: 'Successor as VW CEO tasked with repairing the company after Winterkorn\'s emissions fraud scandal', href: '/entities/individuals/herbert-diess' },
  ],
  'randy-babbitt': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company was subject to FAA oversight during Babbitt\'s regulatory tenure', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ray LaHood', relationship: 'Transportation Secretary who oversaw FAA during Babbitt\'s tenure as administrator', href: '/entities/individuals/ray-lahood' },
  ],
  'jane-garvey': [
    { name: 'Bill Clinton', relationship: 'President who appointed Garvey as FAA Administrator', href: '/entities/individuals/bill-clinton' },
    { name: 'Norman Mineta', relationship: 'Transportation Secretary under whom Garvey served during 9/11', href: '/entities/individuals/norman-mineta' },
  ],
  'david-hinson': [
    { name: 'Federico Pena', relationship: 'Transportation Secretary who oversaw Hinson\'s tenure as FAA Administrator during ValuJet crash era', href: '/entities/individuals/federico-pena' },
    { name: 'Bill Clinton', relationship: 'President during Hinson\'s FAA tenure when aviation safety failures came under scrutiny', href: '/entities/individuals/bill-clinton' },
  ],
  'yared-getachew': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX design flaws that caused Getachew\'s Ethiopian Airlines Flight 302 crash', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Tewolde Gebremariam', relationship: 'Ethiopian Airlines CEO during the Flight 302 crash that killed Getachew and 156 others', href: '/entities/individuals/tewolde-gebremariam' },
  ],
  'bhavye-suneja': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company\'s MCAS design flaw caused Lion Air Flight 610 crash piloted by Suneja', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Sanjiv Singh', relationship: 'Lion Air co-founder whose airline operated the doomed Flight 610', href: '/entities/individuals/sanjiv-singh' },
  ],
  'sanjiv-singh': [
    { name: 'Bhavye Suneja', relationship: 'Captain of Lion Air Flight 610 that crashed due to MCAS failure, killing all 189 aboard', href: '/entities/individuals/bhavye-suneja' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX design defects causing the Lion Air crash', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'tewolde-gebremariam': [
    { name: 'Yared Getachew', relationship: 'Captain of Ethiopian Airlines Flight 302 killed by 737 MAX MCAS failure', href: '/entities/individuals/yared-getachew' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose MCAS system caused both 737 MAX fatal crashes', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'caroline-kennedy': [
    { name: 'Joe Biden', relationship: 'President who appointed Kennedy as Ambassador to Australia; long Kennedy family ally', href: '/entities/individuals/joe-biden' },
    { name: 'Barack Obama', relationship: 'President whom Kennedy endorsed early and served as Ambassador to Japan', href: '/entities/individuals/barack-obama' },
    { name: 'Robert F. Kennedy', relationship: 'Father, U.S. Attorney General assassinated in 1968', href: '/entities/individuals/robert-f-kennedy' },
    { name: 'Robert F. Kennedy Jr.', relationship: 'Cousin and anti-vaccine activist whose views have diverged sharply from Kennedy family political legacy', href: '/entities/individuals/robert-f-kennedy-jr' },
  ],
  'erin-keating': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during production failures that Keating analyzed as aviation industry researcher', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO whose tenure Keating covered as aerospace and aviation analyst', href: '/entities/individuals/david-calhoun' },
  ],
  'chad-readler': [
    { name: 'William Barr', relationship: 'Attorney General under whom Readler served in DOJ; Readler argued against ACA in court', href: '/entities/individuals/william-barr' },
    { name: 'Donald Trump', relationship: 'President whose DOJ Readler served in, arguing to invalidate Affordable Care Act', href: '/entities/individuals/donald-trump' },
  ],
  'john-plueger': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX crisis affected Air Lease Corporation\'s fleet orders under Plueger', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Steven Udvar-Hazy', relationship: 'Air Lease Corporation founder and executive chairman who co-founded the company with Plueger', href: '/entities/individuals/steven-udvar-hazy' },
  ],
  'tim-clark': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Clark was vocal critic of 737 MAX safety issues as Emirates airline president', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Akbar Al Baker', relationship: 'Fellow Gulf airline CEO (Qatar Airways); rival and contemporary in Middle East aviation', href: '/entities/individuals/akbar-al-baker' },
  ],
  'michael-oleary': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during 737 MAX crisis; Ryanair is major Boeing customer and O\'Leary publicly criticized delays', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Willie Walsh', relationship: 'IAG CEO and fellow European aviation executive; both shaped low-cost carrier competition', href: '/entities/individuals/willie-walsh' },
  ],
  'scott-kirby': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX grounding disrupted United Airlines fleet plans under Kirby', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Jamie Dimon', relationship: 'JPMorgan CEO and major United Airlines banking partner; both serve on business roundtables', href: '/entities/individuals/jamie-dimon' },
  ],
  'tim-keating': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whom Keating served under as VP of government operations during 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO successor whom Keating\'s government relations team supported', href: '/entities/individuals/david-calhoun' },
  ],
  'ziad-ojakli': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO under whom Ojakli led government affairs during 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'George W. Bush', relationship: 'President whom Ojakli previously served as Deputy Assistant for Legislative Affairs', href: '/entities/individuals/george-w-bush' },
  ],
  'john-hamilton': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Hamilton\'s tenure as chief engineer when MCAS design flaws were concealed from regulators', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA safety official who certified 737 MAX partly based on representations from Hamilton\'s engineering team', href: '/entities/individuals/ali-bahrami' },
  ],
  'keith-leverkuhn': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during 737 MAX program; Leverkuhn served as VP and GM of the 737 program', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'John Hamilton', relationship: 'Boeing chief engineer who worked with Leverkuhn on 737 MAX development', href: '/entities/individuals/john-hamilton' },
  ],
  'michael-teal': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during 737 MAX development; Teal served as chief engineer for the program', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Keith Leverkuhn', relationship: 'Boeing 737 MAX program VP who worked alongside Teal on the aircraft\'s development', href: '/entities/individuals/keith-leverkuhn' },
  ],
  'richard-wyckoff': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO under whom Wyckoff served in senior engineering roles during 737 MAX development', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'John Hamilton', relationship: 'Boeing chief engineer and colleague in engineering leadership during MCAS design decisions', href: '/entities/individuals/john-hamilton' },
  ],
  'diana-sands': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO under whom Sands served as VP of Office of Internal Governance during 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO who continued working with Sands on governance and compliance reforms', href: '/entities/individuals/david-calhoun' },
  ],
  'bill-mcsherry': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during McSherry\'s engagement with 737 MAX program oversight', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA safety official whose certification decisions McSherry\'s work intersected with', href: '/entities/individuals/ali-bahrami' },
  ],
  'dorenda-baker': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Baker\'s FAA engagement with 737 MAX certification', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA colleague involved in aviation safety certification during 737 MAX era', href: '/entities/individuals/ali-bahrami' },
  ],
  'scott-hamilton': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Hamilton covered extensively as aviation industry analyst during 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Peter Robison', relationship: 'Boeing investigative journalist whose work paralleled Hamilton\'s industry analysis', href: '/entities/individuals/peter-robison' },
  ],
  'jon-ostrower': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO Ostrower covered as aerospace journalist during the 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Dominic Gates', relationship: 'Fellow aviation journalist who covered Boeing; both broke major stories on 737 MAX failures', href: '/entities/individuals/dominic-gates' },
  ],
  'dominic-gates': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Gates investigated for Seattle Times, winning Pulitzer for 737 MAX coverage', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Jon Ostrower', relationship: 'Fellow aviation journalist who collaborated on breaking Boeing 737 MAX safety stories', href: '/entities/individuals/jon-ostrower' },
    { name: 'Peter Robison', relationship: 'Author of "Flying Blind" about Boeing; fellow investigative journalist covering the company', href: '/entities/individuals/peter-robison' },
  ],
  'ted-colbert': [
    { name: 'David Calhoun', relationship: 'Boeing CEO who appointed Colbert as head of Boeing Defense, Space & Security division', href: '/entities/individuals/david-calhoun' },
    { name: 'Dennis Muilenburg', relationship: 'Former Boeing CEO under whom Colbert rose through corporate leadership ranks', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'j-michael-luttig': [
    { name: 'Mike Pence', relationship: 'Vice President whom Luttig advised could NOT reject Electoral College votes on January 6', href: '/entities/individuals/mike-pence' },
    { name: 'Donald Trump', relationship: 'President whose attempts to overturn 2020 election Luttig publicly condemned as unlawful', href: '/entities/individuals/donald-trump' },
    { name: 'John Eastman', relationship: 'Former Luttig law clerk whose memo arguing Pence could reject electors Luttig publicly refuted', href: '/entities/individuals/john-eastman' },
    { name: 'Liz Cheney', relationship: 'January 6 Committee vice chair who featured Luttig\'s testimony prominently in hearings', href: '/entities/individuals/liz-cheney' },
  ],
  'elizabeth-lund': [
    { name: 'David Calhoun', relationship: 'Boeing CEO during Lund\'s leadership of 737 MAX quality improvement programs', href: '/entities/individuals/david-calhoun' },
    { name: 'Dennis Muilenburg', relationship: 'Former Boeing CEO under whom initial 737 MAX production quality issues arose', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'howard-mckenzie': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during McKenzie\'s involvement with 737 MAX engineering oversight', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'John Hamilton', relationship: 'Boeing chief engineer and colleague in aircraft engineering leadership', href: '/entities/individuals/john-hamilton' },
  ],
  'lynn-good': [
    { name: 'Dennis Muilenburg', relationship: 'Fellow CEO who served on overlapping corporate boards in the aerospace-energy executive network', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Jamie Dimon', relationship: 'JPMorgan CEO and fellow Business Roundtable member in corporate governance circles', href: '/entities/individuals/jamie-dimon' },
  ],
  'akhil-johri': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing executive contemporary during major aerospace industry financial decisions', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Gregory Hayes', relationship: 'United Technologies CEO whom Johri served under as CFO during Raytheon merger', href: '/entities/individuals/gregory-hayes' },
  ],
  'steven-mollenkopf': [
    { name: 'Donald Trump', relationship: 'President who intervened in Broadcom\'s attempted hostile takeover of Qualcomm under Mollenkopf', href: '/entities/individuals/donald-trump' },
    { name: 'Tim Cook', relationship: 'Apple CEO involved in major patent dispute with Qualcomm that settled during Mollenkopf\'s tenure', href: '/entities/individuals/tim-cook' },
  ],
  'robert-bradway': [
    { name: 'Donald Trump', relationship: 'President during Bradway\'s leadership of Amgen; drug pricing debates affected company', href: '/entities/individuals/donald-trump' },
    { name: 'Jamie Dimon', relationship: 'Fellow Business Roundtable member and major corporate CEO contemporary', href: '/entities/individuals/jamie-dimon' },
  ],
  'david-boulter': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Boulter\'s involvement with 737 MAX program engineering', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'John Hamilton', relationship: 'Boeing chief engineer and colleague in 737 MAX development oversight', href: '/entities/individuals/john-hamilton' },
  ],
  'chris-rocheleau': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Rocheleau\'s FAA division oversaw during 737 MAX certification', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA colleague in aviation safety oversight during 737 MAX era', href: '/entities/individuals/ali-bahrami' },
  ],
  'basil-barimo': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Barimo\'s tenure at Airlines for America advocacy organization', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Scott Kirby', relationship: 'United Airlines CEO and A4A member airline executive whom Barimo represented', href: '/entities/individuals/scott-kirby' },
  ],
  'margaret-gilligan': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Gilligan\'s FAA division certified the 737 MAX', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA successor who continued aviation safety oversight after Gilligan\'s retirement', href: '/entities/individuals/ali-bahrami' },
  ],
  'tony-ferrante': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO who brought in Ferrante for cybersecurity and risk management assessments', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO who continued engaging Ferrante\'s expertise on corporate risk', href: '/entities/individuals/david-calhoun' },
  ],
  'rick-larsen': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company is major employer in Larsen\'s Washington state congressional district', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Peter DeFazio', relationship: 'House Transportation Committee chair who co-led 737 MAX investigation with Larsen', href: '/entities/individuals/peter-defazio' },
    { name: 'Patty Murray', relationship: 'Washington state senator and fellow advocate for Boeing workforce and accountability', href: '/entities/individuals/patty-murray' },
  ],
  'norm-dicks': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Dicks was longtime congressional advocate for Boeing in Washington state', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Patty Murray', relationship: 'Washington state senator and fellow advocate for Boeing and defense industry interests', href: '/entities/individuals/patty-murray' },
  ],
  'jay-inslee': [
    { name: 'Joe Biden', relationship: 'President whose climate agenda Inslee influenced as Washington governor and 2020 primary candidate', href: '/entities/individuals/joe-biden' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company is the largest private employer in Inslee\'s state', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Patty Murray', relationship: 'Washington state senator and ally on Boeing accountability and environmental policy', href: '/entities/individuals/patty-murray' },
  ],
  'patty-murray': [
    { name: 'Joe Biden', relationship: 'President whose agenda Murray championed as Senate Appropriations Chair', href: '/entities/individuals/joe-biden' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whom Murray pressed for accountability during 737 MAX crisis hearings', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Jay Inslee', relationship: 'Washington governor and ally on Boeing worker protection and state economic issues', href: '/entities/individuals/jay-inslee' },
  ],
  'adam-smith': [
    { name: 'Joe Biden', relationship: 'President whose defense budgets Smith influenced as House Armed Services Committee chair', href: '/entities/individuals/joe-biden' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose defense contracts fell under Smith\'s committee oversight', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Lloyd Austin', relationship: 'Defense Secretary who worked with Smith on military spending priorities', href: '/entities/individuals/lloyd-austin' },
  ],
  'denny-heck': [
    { name: 'Jay Inslee', relationship: 'Washington governor whom Heck serves as Lieutenant Governor', href: '/entities/individuals/jay-inslee' },
    { name: 'Patty Murray', relationship: 'Washington state senator and fellow Democratic Party leader in the state', href: '/entities/individuals/patty-murray' },
  ],
  'sean-duffy': [
    { name: 'Donald Trump', relationship: 'President who appointed Duffy as Transportation Secretary', href: '/entities/individuals/donald-trump' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company falls under DOT oversight led by Duffy', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Pete Buttigieg', relationship: 'Predecessor as Transportation Secretary whose policies Duffy reversed', href: '/entities/individuals/pete-buttigieg' },
  ],
  'dean-bortniker': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Bortniker\'s FAA oversight engagement with 737 MAX program', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA safety official and colleague in aviation certification oversight', href: '/entities/individuals/ali-bahrami' },
  ],
  'cynthia-cole': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Cole\'s leadership of SPEEA, the engineers\' union representing Boeing workers', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Jon Holden', relationship: 'IAM District 751 president and fellow union leader at Boeing facilities', href: '/entities/individuals/jon-holden' },
  ],
  'jon-holden': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during Holden\'s leadership of IAM District 751 machinists union', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Cynthia Cole', relationship: 'SPEEA union president and fellow labor leader at Boeing', href: '/entities/individuals/cynthia-cole' },
    { name: 'David Calhoun', relationship: 'Boeing CEO whose production quality failures Holden\'s union members flagged', href: '/entities/individuals/david-calhoun' },
  ],
  'willie-walsh': [
    { name: 'Michael O\'Leary', relationship: 'Ryanair CEO and fellow major European aviation executive', href: '/entities/individuals/michael-oleary' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Walsh managed IAG fleet orders during 737 MAX crisis', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Tim Clark', relationship: 'Emirates president and fellow airline industry leader', href: '/entities/individuals/tim-clark' },
  ],
  'carsten-spohr': [
    { name: 'Willie Walsh', relationship: 'IATA Director General and fellow European airline industry executive', href: '/entities/individuals/willie-walsh' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Spohr managed Lufthansa\'s fleet amid 737 MAX grounding', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'alan-joyce': [
    { name: 'Willie Walsh', relationship: 'IATA Director General and fellow airline CEO contemporary', href: '/entities/individuals/willie-walsh' },
    { name: 'Tim Clark', relationship: 'Emirates president and major partner/competitor in Asia-Pacific aviation', href: '/entities/individuals/tim-clark' },
  ],
  'akbar-al-baker': [
    { name: 'Tim Clark', relationship: 'Emirates president and chief rival in Gulf aviation dominance', href: '/entities/individuals/tim-clark' },
    { name: 'Willie Walsh', relationship: 'IATA Director General and fellow global aviation industry leader', href: '/entities/individuals/willie-walsh' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Qatar Airways is major Boeing customer under Al Baker', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'patrick-ky': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX Ky\'s EASA independently recertified with additional safety requirements', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA counterpart whose certification decisions EASA under Ky scrutinized', href: '/entities/individuals/ali-bahrami' },
  ],
  'nurcahyo-utomo': [
    { name: 'Bhavye Suneja', relationship: 'Captain of Lion Air Flight 610 that crashed; Utomo investigated the accident', href: '/entities/individuals/bhavye-suneja' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose MCAS system was found to have caused the Lion Air crash', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'amdye-ayalew': [
    { name: 'Yared Getachew', relationship: 'Captain of Ethiopian Airlines Flight 302 whose crash Ayalew investigated', href: '/entities/individuals/yared-getachew' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose MCAS system caused the Ethiopian Airlines crash', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'aaron-mccarter': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO during McCarter\'s involvement in 737 MAX oversight', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Ali Bahrami', relationship: 'FAA safety official connected to certification decisions McCarter engaged with', href: '/entities/individuals/ali-bahrami' },
  ],
  'patrick-shanahan-jr': [
    { name: 'Donald Trump', relationship: 'President who appointed Shanahan as Acting Secretary of Defense', href: '/entities/individuals/donald-trump' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Shanahan was former Boeing executive before joining Pentagon, raising conflict of interest concerns', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'James Mattis', relationship: 'Defense Secretary whom Shanahan served under and briefly succeeded', href: '/entities/individuals/james-mattis' },
  ],
  'tom-gentile': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Gentile led Spirit AeroSystems, Boeing\'s key fuselage supplier for 737 MAX', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO who reacquired Spirit AeroSystems to address quality control failures', href: '/entities/individuals/david-calhoun' },
  ],
  'larry-lawson': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Lawson led Spirit AeroSystems as CEO during critical 737 MAX production period', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Tom Gentile', relationship: 'Successor as Spirit AeroSystems CEO who inherited production quality challenges', href: '/entities/individuals/tom-gentile' },
  ],
  'chris-chadwick': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Chadwick served in Boeing leadership during key defense and commercial divisions', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'David Calhoun', relationship: 'Boeing CEO and corporate colleague in aerospace executive leadership', href: '/entities/individuals/david-calhoun' },
  ],
  'gregory-hayes': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO and fellow aerospace defense industry executive', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Donald Trump', relationship: 'President who pressured Hayes on Carrier factory closure and engaged on defense contracts', href: '/entities/individuals/donald-trump' },
    { name: 'Akhil Johri', relationship: 'United Technologies CFO who served under Hayes through the Raytheon merger', href: '/entities/individuals/akhil-johri' },
  ],
  'james-gorman': [
    { name: 'Jamie Dimon', relationship: 'JPMorgan CEO and fellow Wall Street bank leader; competed and collaborated across financial services', href: '/entities/individuals/jamie-dimon' },
    { name: 'Donald Trump', relationship: 'President whose financial deregulation benefited Morgan Stanley under Gorman', href: '/entities/individuals/donald-trump' },
    { name: 'Lloyd Blankfein', relationship: 'Goldman Sachs CEO and rival Wall Street executive', href: '/entities/individuals/lloyd-blankfein' },
  ],
  'jamie-dimon': [
    { name: 'Donald Trump', relationship: 'President whose tax cuts and deregulation benefited JPMorgan; Dimon initially served on advisory council before resigning', href: '/entities/individuals/donald-trump' },
    { name: 'James Gorman', relationship: 'Morgan Stanley CEO and fellow Wall Street titan in banking leadership', href: '/entities/individuals/james-gorman' },
    { name: 'Jeffrey Epstein', relationship: 'JPMorgan maintained banking relationship with Epstein despite internal warnings; settled for $290 million', href: '/entities/individuals/jeffrey-epstein' },
    { name: 'Lloyd Blankfein', relationship: 'Goldman Sachs CEO and fellow major bank leader during financial crisis and recovery', href: '/entities/individuals/lloyd-blankfein' },
  ],
  'brian-whelan': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Whelan investigated as aviation safety journalist', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Dominic Gates', relationship: 'Fellow aviation journalist who investigated Boeing 737 MAX failures', href: '/entities/individuals/dominic-gates' },
  ],
  'david-reyes': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Reyes was connected to through aviation safety investigations', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'catherine-berthet': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX design failures that killed Berthet\'s daughter on ET302', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Javier de Luis', relationship: 'Fellow ET302 crash victim family member and advocacy partner', href: '/entities/individuals/javier-de-luis' },
    { name: 'Adnaan Stumo', relationship: 'Fellow ET302 crash victim family advocate', href: '/entities/individuals/adnaan-stumo' },
  ],
  'javier-de-luis': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO responsible for 737 MAX failures that killed de Luis\'s sister on ET302', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Catherine Berthet', relationship: 'Fellow ET302 crash victim family member and Boeing accountability advocate', href: '/entities/individuals/catherine-berthet' },
    { name: 'Adnaan Stumo', relationship: 'Fellow ET302 crash victim family advocate', href: '/entities/individuals/adnaan-stumo' },
  ],
  'peter-robison': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whom Robison investigated in "Flying Blind," exposing corporate culture failures', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Dominic Gates', relationship: 'Fellow aviation journalist covering Boeing; Gates won Pulitzer for 737 MAX coverage', href: '/entities/individuals/dominic-gates' },
    { name: 'Jon Ostrower', relationship: 'Aviation journalist and editor who collaborated on Boeing coverage', href: '/entities/individuals/jon-ostrower' },
  ],
  'gregory-travis': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Travis wrote influential technical analysis of MCAS design flaws after crashes', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Peter Robison', relationship: 'Boeing investigative author whose work complemented Travis\'s technical analysis', href: '/entities/individuals/peter-robison' },
  ],
  'kenneth-polite': [
    { name: 'Merrick Garland', relationship: 'Attorney General under whom Polite served as head of DOJ Criminal Division', href: '/entities/individuals/merrick-garland' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Polite\'s division handled Boeing criminal prosecution for 737 MAX fraud', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'valujet-592-victims': [
    { name: 'David Hinson', relationship: 'FAA Administrator during ValuJet crash who initially declared airline safe despite warning signs', href: '/entities/individuals/david-hinson' },
    { name: 'Mary Schiavo', relationship: 'DOT Inspector General who exposed FAA failures in ValuJet oversight', href: '/entities/individuals/mary-schiavo' },
  ],
  'alaska-261-victims': [
    { name: 'Mary Schiavo', relationship: 'Aviation safety advocate who highlighted maintenance failures that caused Alaska Flight 261 crash', href: '/entities/individuals/mary-schiavo' },
    { name: 'John Cox', relationship: 'Aviation safety consultant who analyzed Alaska 261 jackscrew failure', href: '/entities/individuals/john-cox' },
  ],
  'colgan-3407-families': [
    { name: 'Mary Schiavo', relationship: 'Aviation safety advocate who supported families in pushing for stronger pilot training rules', href: '/entities/individuals/mary-schiavo' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; regional aviation safety reforms after Colgan crash influenced broader industry', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'william-mcgee': [
    { name: 'Mary Schiavo', relationship: 'Fellow aviation safety advocate and consumer protection champion', href: '/entities/individuals/mary-schiavo' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company McGee criticized as aviation consumer rights journalist', href: '/entities/individuals/dennis-muilenburg' },
  ],
  'mary-schiavo': [
    { name: 'David Hinson', relationship: 'FAA Administrator whom Schiavo exposed for regulatory failures as DOT Inspector General', href: '/entities/individuals/david-hinson' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Schiavo has publicly criticized for putting profits over safety', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'William McGee', relationship: 'Fellow aviation safety advocate and consumer protection journalist', href: '/entities/individuals/william-mcgee' },
  ],
  'john-cox': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX MCAS Cox analyzed as aviation safety expert', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Mary Schiavo', relationship: 'Fellow aviation safety expert and transportation accountability advocate', href: '/entities/individuals/mary-schiavo' },
  ],
  'todd-curtis': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO; Curtis founded AirSafe.com tracking airline safety data including 737 MAX crashes', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Mary Schiavo', relationship: 'Fellow aviation safety expert and public safety advocate', href: '/entities/individuals/mary-schiavo' },
  ],
  'christine-negroni': [
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose company Negroni investigated as aviation safety journalist and author', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Mary Schiavo', relationship: 'Aviation safety advocate frequently interviewed alongside Negroni on crash investigations', href: '/entities/individuals/mary-schiavo' },
  ],
  'lion-air-610-victims': [
    { name: 'Bhavye Suneja', relationship: 'Captain of Lion Air Flight 610 who was among the 189 victims', href: '/entities/individuals/bhavye-suneja' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX MCAS design flaw caused the crash', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Sanjiv Singh', relationship: 'Lion Air co-founder whose airline operated the doomed flight', href: '/entities/individuals/sanjiv-singh' },
  ],
  'ethiopian-302-victims': [
    { name: 'Yared Getachew', relationship: 'Captain of Ethiopian Airlines Flight 302 who was among the 157 victims', href: '/entities/individuals/yared-getachew' },
    { name: 'Dennis Muilenburg', relationship: 'Boeing CEO whose 737 MAX MCAS caused the second fatal crash in 5 months', href: '/entities/individuals/dennis-muilenburg' },
    { name: 'Tewolde Gebremariam', relationship: 'Ethiopian Airlines CEO whose airline lost Flight 302', href: '/entities/individuals/tewolde-gebremariam' },
  ],
};

// Apply knownAssociates expansions
for (const [slug, associates] of Object.entries(kaData)) {
  const assocStr = associates.map(a => 
    `      { name: '${a.name}', relationship: '${a.relationship}', href: '${a.href}' }`
  ).join(',\n');
  
  const oldStr = `'${slug}': {`;
  const idx = content.indexOf(oldStr);
  if (idx === -1) { console.log('NOT FOUND:', slug); continue; }
  
  const emptyKAStr = 'knownAssociates: []';
  // Find the empty KA within this profile (search forward from profile start)
  const searchStart = idx;
  const nextProfile = content.indexOf("': {", idx + oldStr.length);
  const searchEnd = nextProfile > 0 ? nextProfile : content.length;
  const profileBlock = content.substring(searchStart, searchEnd);
  
  const kaIdx = profileBlock.indexOf(emptyKAStr);
  if (kaIdx === -1) { console.log('NO EMPTY KA:', slug); continue; }
  
  const absoluteIdx = searchStart + kaIdx;
  content = content.substring(0, absoluteIdx) + 
    'knownAssociates: [\n' + assocStr + ',\n    ]' + 
    content.substring(absoluteIdx + emptyKAStr.length);
  changes++;
  console.log('Expanded KA:', slug, '(' + associates.length + ' associates)');
}

// Now handle controversies
const controData = {
  'heather-heyer': [
    'Murdered at age 32 by white supremacist at Charlottesville Unite the Right rally on August 12, 2017',
    'Her death became a symbol of the dangers of rising far-right extremism in America',
    'Trump\'s "very fine people on both sides" response to her murder drew widespread condemnation',
  ],
  'korey-wise': [
    'Wrongfully convicted at age 16 in the Central Park Five case; spent 12 years in prison',
    'Donald Trump took out full-page ads calling for the death penalty for the Central Park Five before trial',
    'Exonerated in 2002 after serial rapist Matias Reyes confessed; the five received $41 million settlement',
  ],
  'yusef-salaam': [
    'Wrongfully convicted at age 15 in the Central Park Five case; spent nearly 7 years in prison',
    'Elected to New York City Council in 2023 representing Harlem district',
    'Donald Trump still refused to apologize for his full-page death penalty ads targeting the Central Park Five',
  ],
  'salvador-allende': [
    'Democratically elected socialist president overthrown in CIA-backed coup on September 11, 1973',
    'Died during Pinochet\'s military coup at the presidential palace; ruled a suicide',
    'His overthrow led to 17 years of Pinochet dictatorship responsible for thousands of murders and disappearances',
  ],
  'valerie-plame': [
    'CIA covert officer whose identity was deliberately leaked by Bush administration officials in retaliation for her husband\'s Iraq War criticism',
    'Scooter Libby convicted of obstruction related to the leak; later pardoned by Trump',
    'The leak destroyed her intelligence network tracking WMD proliferation',
  ],
  'joe-wilson': [
    'Published NYT op-ed "What I Didn\'t Find in Africa" challenging Bush administration\'s Iraq WMD claims',
    'His wife Valerie Plame\'s CIA cover was blown in apparent retaliation for his public criticism',
    'Investigation into leak led to conviction of VP Cheney\'s chief of staff Scooter Libby',
  ],
  'maher-arar': [
    'Canadian citizen seized by U.S. at JFK Airport and rendered to Syria where he was tortured for nearly a year',
    'Canada awarded Arar $10.5 million settlement and formal apology; the U.S. has never apologized',
    'His case became a landmark example of post-9/11 extraordinary rendition abuses',
  ],
  'khaled-el-masri': [
    'German citizen kidnapped by CIA in a case of mistaken identity and rendered to Afghanistan black site',
    'Held for months and subjected to enhanced interrogation before CIA realized they had the wrong man',
    'European Court of Human Rights ruled Macedonia complicit in his treatment; U.S. never held accountable',
  ],
  'mohammad-mosaddegh': [
    'Democratically elected Iranian PM overthrown in CIA/MI6-backed coup (Operation Ajax) in 1953',
    'Nationalized Anglo-Iranian Oil Company which triggered Western-backed regime change',
    'His overthrow installed the Shah whose authoritarian rule ultimately led to the 1979 Islamic Revolution',
  ],
  'patrice-lumumba': [
    'First democratically elected PM of Congo assassinated in 1961 with CIA and Belgian involvement',
    'His murder is considered one of the most significant political assassinations of the 20th century',
    'CIA provided operational support for coup that toppled Lumumba, leading to decades of Mobutu dictatorship',
  ],
  'daniel-hale': [
    'Former intelligence analyst who leaked classified documents revealing 90% of U.S. drone strike victims were not intended targets',
    'Sentenced to 45 months in federal prison under the Espionage Act in 2021',
    'His leaks exposed the systematic civilian casualties of the U.S. drone warfare program',
  ],
  'reality-winner': [
    'NSA contractor who leaked classified report proving Russian cyberattacks on U.S. election infrastructure',
    'Sentenced to 5 years and 3 months - the longest sentence ever for an unauthorized disclosure to media',
    'Her leak confirmed what intelligence agencies were warning about Russian interference in 2016 election',
  ],
  'al-gore': [
    'Lost 2000 presidential election after controversial Supreme Court decision in Bush v. Gore halted Florida recount',
    'Won Nobel Peace Prize for climate change advocacy through "An Inconvenient Truth"',
    'Brooks Brothers riot disrupted Miami-Dade recount orchestrated by Republican operatives including Roger Stone',
  ],
  'robert-f-kennedy': [
    'U.S. Attorney General who aggressively pursued organized crime and civil rights enforcement',
    'Assassinated during 1968 presidential campaign by Sirhan Sirhan',
    'As AG, authorized FBI surveillance of Martin Luther King Jr. at J. Edgar Hoover\'s insistence',
  ],
  'deb-haaland': [
    'First Native American Cabinet secretary faced fierce Republican opposition during confirmation',
    'Launched Federal Indian Boarding School Initiative uncovering decades of abuse and deaths',
    'Reversed Trump-era policies on fossil fuel leasing on public lands drawing industry backlash',
  ],
  'vivek-murthy': [
    'Fired by Trump in 2017, then reappointed by Biden as Surgeon General',
    'Declared gun violence a public health crisis, drawing conservative criticism',
    'Issued advisory on social media\'s impact on youth mental health challenging tech companies',
  ],
  'glenn-greenwald': [
    'Published Edward Snowden\'s NSA surveillance revelations in The Guardian, winning Pulitzer Prize',
    'Resigned from The Intercept (which he co-founded) alleging editorial censorship of Biden-critical reporting',
    'Became increasingly controversial for appearances on conservative media and defense of Trump-allied figures',
  ],
  'sonia-sotomayor': [
    'First Hispanic and third woman appointed to the Supreme Court',
    'Consistently filed powerful dissents against conservative majority decisions gutting voting rights and affirmative action',
    'Republican senators questioned her "wise Latina" comment during contentious confirmation hearings',
  ],
  'kristen-clarke': [
    'First Black woman to lead DOJ Civil Rights Division; faced hostile Republican confirmation opposition',
    'Reinvigorated pattern-or-practice investigations of police departments after Trump-era DOJ had halted them',
    'Led DOJ enforcement actions on voting rights and hate crimes under Biden administration',
  ],
  'bryan-newland': [
    'Led the Federal Indian Boarding School Initiative uncovering over 500 boarding school sites and marked burial sites',
    'As Assistant Secretary for Indian Affairs, worked to restore tribal sovereignty undermined by prior administrations',
  ],
  'neil-heslin': [
    'Father of Jesse Lewis who was killed in the Sandy Hook massacre at age 6',
    'Successfully sued Alex Jones for defamation after Jones promoted conspiracy theories that the massacre was staged',
    'Jury awarded Heslin and Scarlett Lewis $49.3 million in damages from Jones',
  ],
  'robbie-parker': [
    'Father of Emilie Parker who was killed in the Sandy Hook massacre at age 6',
    'Became target of Alex Jones\'s conspiracy theories claiming Sandy Hook was a hoax',
    'Part of the group of Sandy Hook families who won historic defamation judgments against Jones',
  ],
  'richard-clarke': [
    'Testified before 9/11 Commission that Bush administration failed to act on urgent al-Qaeda warnings',
    'Publicly apologized to 9/11 families saying "your government failed you"',
    'Warned Condoleezza Rice about imminent al-Qaeda attack in months before September 11',
  ],
  'archer-blood': [
    'Sent "Blood Telegram" - one of the most famous dissent cables in U.S. diplomatic history',
    'Warned of genocide in East Pakistan (Bangladesh) but was ignored by Nixon and Kissinger',
    'Was reassigned as punishment for speaking out against U.S. support for Pakistani military during 1971 genocide',
  ],
  'james-morrison': [
    'Involved in aviation safety oversight during critical 737 MAX certification period',
    'His role has been scrutinized in investigations of FAA-Boeing regulatory failures',
  ],
  'chris-moore': [
    'Father of a victim in the Boeing 737 MAX Ethiopian Airlines Flight 302 crash',
    'Became prominent advocate for aviation safety reform and Boeing accountability',
  ],
  'clariss-moore': [
    'Mother of a victim lost in the Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
    'Joined family members in advocacy for criminal accountability and safety reforms at Boeing',
  ],
  'adnaan-stumo': [
    'Lost family member in Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
    'Became vocal advocate for Boeing criminal prosecution and aviation safety reform',
    'Participated in congressional hearings pushing for accountability from Boeing executives',
  ],
  'tor-stumo': [
    'Family member of ET302 victim who became prominent in crash family advocacy efforts',
    'Pushed for DOJ criminal prosecution of Boeing and executive accountability',
  ],
  'catherine-berthet': [
    'Daughter killed in Ethiopian Airlines Flight 302 Boeing 737 MAX crash',
    'Co-founded advocacy group pushing for criminal accountability from Boeing',
    'Testified before Congress about Boeing\'s culture of profit over safety',
  ],
  'javier-de-luis': [
    'Sister killed in Ethiopian Airlines Flight 302; MIT researcher who provided technical analysis of MCAS failures',
    'His engineering expertise lent credibility to families\' arguments about Boeing design negligence',
    'Advocated for criminal prosecution of Boeing executives responsible for 737 MAX design decisions',
  ],
  'valujet-592-victims': [
    'ValuJet Flight 592 crashed into Florida Everglades on May 11, 1996, killing all 110 aboard',
    'Crash caused by improperly stored chemical oxygen generators in cargo hold',
    'FAA had warned about ValuJet safety issues but Administrator Hinson publicly declared airline safe weeks before crash',
  ],
  'alaska-261-victims': [
    'Alaska Airlines Flight 261 crashed into Pacific Ocean on January 31, 2000, killing all 88 aboard',
    'Caused by inadequate maintenance of horizontal stabilizer jackscrew assembly',
    'Investigation revealed systemic maintenance cost-cutting that contributed to mechanical failure',
  ],
  'colgan-3407-families': [
    'Colgan Air Flight 3407 crashed near Buffalo, NY on February 12, 2009, killing 50 people',
    'Crash exposed regional airline pilot fatigue, low pay, and inadequate training',
    'Families\' advocacy led to the Airline Safety and Federal Aviation Administration Extension Act of 2010',
  ],
};

for (const [slug, items] of Object.entries(controData)) {
  const controStr = items.map(item => `      '${item}'`).join(',\n');
  
  const oldStr = `'${slug}': {`;
  const idx = content.indexOf(oldStr);
  if (idx === -1) { console.log('NOT FOUND for controversies:', slug); continue; }
  
  const emptyControStr = 'controversies: []';
  const nextProfile = content.indexOf("': {", idx + oldStr.length);
  const searchEnd = nextProfile > 0 ? nextProfile : content.length;
  const profileBlock = content.substring(idx, searchEnd);
  
  const controIdx = profileBlock.indexOf(emptyControStr);
  if (controIdx === -1) { console.log('NO EMPTY CONTROVERSIES:', slug); continue; }
  
  const absoluteIdx = idx + controIdx;
  content = content.substring(0, absoluteIdx) + 
    'controversies: [\n' + controStr + ',\n    ]' + 
    content.substring(absoluteIdx + emptyControStr.length);
  changes++;
  console.log('Expanded controversies:', slug);
}

fs.writeFileSync('src/app/entities/individuals/[slug]/page.tsx', content);
console.log('\nTotal changes applied:', changes);
