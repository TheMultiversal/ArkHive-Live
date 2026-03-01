#!/usr/bin/env node
/**
 * expand-all.js
 * Adds knownAssociates arrays to individual profiles in page.tsx
 * Inserts after the affiliations array closing bracket, before controversies.
 */

const fs = require('fs');
const path = require('path');

const SOURCE_FILE = path.join(__dirname, '..', 'src', 'app', 'entities', 'individuals', '[slug]', 'page.tsx');

// ── Expansion Data ──────────────────────────────────────────────
// Each slug maps to an array of { name, relationship, href } objects.
// Only profiles that are MISSING knownAssociates will be modified.

const expansionData = {

  // ═══════════════════════════════════════════════════════════════
  //  TRUMP INNER CIRCLE & ADMINISTRATION
  // ═══════════════════════════════════════════════════════════════

  'lindsey-graham': [
    { name: 'Donald Trump', relationship: 'Transformed from calling Trump a "race-baiting xenophobe" in 2015 to becoming one of his closest Senate allies and golf partner', href: '/entities/individuals/donald-trump' },
    { name: 'John McCain', relationship: 'Close personal friend and Senate ally for decades; continued McCain\'s legacy on foreign policy hawkishness', href: '/entities/individuals/john-mccain' },
    { name: 'Brett Kavanaugh', relationship: 'Led aggressive defense during contentious Supreme Court confirmation hearings as Senate Judiciary Chair', href: '/entities/individuals/brett-kavanaugh' },
    { name: 'Ted Cruz', relationship: 'Fellow Republican senator; competed for influence in Trump-era GOP realignment', href: '/entities/individuals/ted-cruz' },
    { name: 'Joe Biden', relationship: 'Cross-aisle relationship from shared Senate service; publicly called Biden "as good a man as God ever created" before becoming fierce critic', href: '/entities/individuals/joe-biden' },
  ],

  'mitch-mcconnell': [
    { name: 'Donald Trump', relationship: 'Senate leader who enabled Trump agenda while privately condemning January 6; said Trump was "practically and morally responsible" then voted to acquit', href: '/entities/individuals/donald-trump' },
    { name: 'Elaine Chao', relationship: 'Wife who served as Trump\'s Secretary of Transportation; resigned after January 6 Capitol attack', href: '/entities/individuals/elaine-chao' },
    { name: 'Chuck Schumer', relationship: 'Senate counterpart and Democratic leader; decades-long institutional rivalry over Senate control', href: '/entities/individuals/chuck-schumer' },
    { name: 'Kevin McCarthy', relationship: 'House Republican counterpart who coordinated GOP legislative strategy during Trump era', href: '/entities/individuals/kevin-mccarthy' },
    { name: 'Merrick Garland', relationship: 'Blocked his Supreme Court nomination for 293 days in 2016, refusing to hold hearings', href: '/entities/individuals/merrick-garland' },
  ],

  'kevin-mccarthy': [
    { name: 'Donald Trump', relationship: 'Initially blamed Trump for January 6 on recorded audio, then traveled to Mar-a-Lago to reconcile and rebuild alliance', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Scalise', relationship: 'House Republican colleague and leadership rival who succeeded him in influence after his removal as Speaker', href: '/entities/individuals/steve-scalise' },
    { name: 'Jim Jordan', relationship: 'Key House ally and Freedom Caucus leader who was central to McCarthy\'s speakership negotiations', href: '/entities/individuals/jim-jordan' },
    { name: 'Marjorie Taylor Greene', relationship: 'Controversial House Republican who became unlikely McCarthy ally during speakership battles', href: '/entities/individuals/marjorie-taylor-greene' },
    { name: 'Liz Cheney', relationship: 'Former GOP Conference Chair whom McCarthy failed to protect from removal after her January 6 truth-telling', href: '/entities/individuals/liz-cheney' },
  ],

  'jim-jordan': [
    { name: 'Donald Trump', relationship: 'Fiercely loyal Trump defender in Congress; led efforts to discredit FBI investigations and January 6 Committee', href: '/entities/individuals/donald-trump' },
    { name: 'Mark Meadows', relationship: 'Close ally and fellow Freedom Caucus founder; coordinated January 6 response strategies', href: '/entities/individuals/mark-meadows' },
    { name: 'Kevin McCarthy', relationship: 'Ran for Speaker after McCarthy\'s removal; key House GOP leadership ally', href: '/entities/individuals/kevin-mccarthy' },
    { name: 'James Comey', relationship: 'Aggressively questioned former FBI Director during congressional hearings about Russia investigation', href: '/entities/individuals/james-comey' },
    { name: 'Matt Gaetz', relationship: 'Fellow Trump loyalist in Congress; allies on Judiciary Committee and in Freedom Caucus efforts', href: '/entities/individuals/matt-gaetz' },
  ],

  'reince-priebus': [
    { name: 'Donald Trump', relationship: 'Served as Trump\'s first White House Chief of Staff for 189 days before being fired via tweet while on Air Force One', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Bannon', relationship: 'Bitter West Wing rival as Chief Strategist; their power struggle defined early Trump White House chaos', href: '/entities/individuals/steve-bannon' },
    { name: 'Sean Spicer', relationship: 'Close political ally who brought Spicer from RNC to serve as White House Press Secretary', href: '/entities/individuals/sean-spicer' },
    { name: 'Paul Ryan', relationship: 'Fellow Wisconsin Republican and longtime political ally; coordinated GOP legislative agenda', href: '/entities/individuals/paul-ryan' },
    { name: 'Mike Pence', relationship: 'Worked closely as RNC Chairman to integrate Pence as VP pick and manage 2016 campaign operations', href: '/entities/individuals/mike-pence' },
  ],

  'sean-spicer': [
    { name: 'Donald Trump', relationship: 'Served as first White House Press Secretary; infamously defended false inauguration crowd size claims on day one', href: '/entities/individuals/donald-trump' },
    { name: 'Reince Priebus', relationship: 'Longtime RNC colleague who brought him to White House as Press Secretary; both ousted in 2017', href: '/entities/individuals/reince-priebus' },
    { name: 'Sarah Huckabee Sanders', relationship: 'Deputy who replaced him as Press Secretary after his resignation over Anthony Scaramucci appointment', href: '/entities/individuals/sarah-huckabee-sanders' },
    { name: 'Kayleigh McEnany', relationship: 'Successor as Trump White House Press Secretary; part of the same communications lineage', href: '/entities/individuals/kayleigh-mcenany' },
  ],

  'sarah-huckabee-sanders': [
    { name: 'Donald Trump', relationship: 'Served as White House Press Secretary (2017-2019); defended Trump through Mueller investigation and multiple crises', href: '/entities/individuals/donald-trump' },
    { name: 'Sean Spicer', relationship: 'Predecessor as Press Secretary; took over after his departure and adopted more combative media approach', href: '/entities/individuals/sean-spicer' },
    { name: 'Mike Huckabee', relationship: 'Father and former Arkansas Governor; followed him into Arkansas politics, winning governorship in 2022', href: '/entities/individuals/mike-huckabee' },
    { name: 'Kayleigh McEnany', relationship: 'Successor as White House Press Secretary; continued aggressive media strategy she established', href: '/entities/individuals/kayleigh-mcenany' },
  ],

  'anthony-scaramucci': [
    { name: 'Donald Trump', relationship: 'Served as White House Communications Director for only 10 days in July 2017 before being fired; later became vocal Trump critic', href: '/entities/individuals/donald-trump' },
    { name: 'Reince Priebus', relationship: 'Publicly attacked Priebus to a reporter as a "paranoid schizophrenic," precipitating both their departures', href: '/entities/individuals/reince-priebus' },
    { name: 'Steve Bannon', relationship: 'Made vulgar comments about Bannon to a New Yorker reporter that contributed to his own firing', href: '/entities/individuals/steve-bannon' },
    { name: 'Sean Spicer', relationship: 'His appointment as Communications Director prompted Spicer\'s resignation in protest', href: '/entities/individuals/sean-spicer' },
  ],

  'dan-scavino': [
    { name: 'Donald Trump', relationship: 'One of Trump\'s longest-serving aides; former golf caddie who became White House Deputy Chief of Staff for Communications', href: '/entities/individuals/donald-trump' },
    { name: 'Mark Meadows', relationship: 'Worked alongside as senior White House staff; both held in contempt by January 6 Committee for refusing to comply with subpoenas', href: '/entities/individuals/mark-meadows' },
    { name: 'Steve Bannon', relationship: 'Fellow Trump inner circle member; both cited for contempt of Congress by January 6 Committee', href: '/entities/individuals/steve-bannon' },
  ],

  'brad-parscale': [
    { name: 'Donald Trump', relationship: 'Served as 2020 campaign manager before demotion; built Trump\'s digital operation starting in 2016', href: '/entities/individuals/donald-trump' },
    { name: 'Jared Kushner', relationship: 'Close working relationship as Kushner oversaw digital campaign strategy; Kushner was key to his hiring and firing', href: '/entities/individuals/jared-kushner' },
    { name: 'Cambridge Analytica', relationship: 'Coordinated with the data firm on Trump 2016 campaign\'s micro-targeting voter strategy', href: '/entities/individuals/cambridge-analytica' },
  ],

  'kayleigh-mcenany': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Served as White House Press Secretary (2020-2021); defended election fraud claims from the podium', href: '/entities/individuals/donald-trump' },
    { name: 'Sean Spicer', relationship: 'First in the line of Trump Press Secretaries she succeeded', href: '/entities/individuals/sean-spicer' },
    { name: 'Sarah Huckabee Sanders', relationship: 'Predecessor whose combative press briefing style she continued', href: '/entities/individuals/sarah-huckabee-sanders' },
    { name: 'Mark Meadows', relationship: 'Worked closely with as Chief of Staff during 2020 election and post-election period', href: '/entities/individuals/mark-meadows' },
  ],

  'mick-mulvaney': [
    { name: 'Donald Trump', relationship: 'Served as Acting White House Chief of Staff (2019-2020); publicly admitted Ukraine quid pro quo then tried to walk it back', href: '/entities/individuals/donald-trump' },
    { name: 'Mark Meadows', relationship: 'Replaced by Meadows as Chief of Staff; both were former Freedom Caucus members in Congress', href: '/entities/individuals/mark-meadows' },
    { name: 'John Bolton', relationship: 'Overlapped as senior Trump officials; Bolton\'s book detailed conflicts with Mulvaney over Ukraine policy', href: '/entities/individuals/john-bolton' },
    { name: 'Mike Pence', relationship: 'Coordinated with Vice President on legislative strategy during acting Chief of Staff tenure', href: '/entities/individuals/mike-pence' },
  ],

  'omarosa-manigault-newman': [
    { name: 'Donald Trump', relationship: 'Former Apprentice contestant turned White House aide; secretly recorded conversations and released them in tell-all book "Unhinged"', href: '/entities/individuals/donald-trump' },
    { name: 'Mark Burnett', relationship: 'Producer of The Apprentice who facilitated her path from reality TV to political sphere', href: '/entities/individuals/mark-burnett' },
    { name: 'Lara Trump', relationship: 'Recorded Lara offering her $15,000/month campaign job in exchange for silence after White House firing', href: '/entities/individuals/lara-trump' },
    { name: 'John Kelly', relationship: 'White House Chief of Staff who fired her; she secretly recorded the Situation Room termination meeting', href: '/entities/individuals/john-kelly' },
  ],

  'hr-mcmaster': [
    { name: 'Donald Trump', relationship: 'Served as National Security Advisor (2017-2018); clashed with Trump over Russia policy and was pushed out', href: '/entities/individuals/donald-trump' },
    { name: 'John Bolton', relationship: 'Replaced by Bolton as National Security Advisor; represented competing foreign policy visions', href: '/entities/individuals/john-bolton' },
    { name: 'Michael Flynn', relationship: 'Succeeded Flynn as National Security Advisor after Flynn\'s forced resignation over Russia contacts', href: '/entities/individuals/michael-flynn' },
    { name: 'Rex Tillerson', relationship: 'Fellow Trump cabinet member who shared concerns about Trump\'s approach to national security', href: '/entities/individuals/rex-tillerson' },
  ],

  'sebastian-gorka': [
    { name: 'Donald Trump', relationship: 'White House advisor (2017) who championed Trump\'s "radical Islamic terrorism" rhetoric; removed after Charlottesville', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Bannon', relationship: 'Close ideological ally and fellow nationalist; followed Bannon from Breitbart to the White House', href: '/entities/individuals/steve-bannon' },
    { name: 'Stephen Miller', relationship: 'Fellow hardline nationalist advisor in the White House who shared anti-immigration agenda', href: '/entities/individuals/stephen-miller' },
    { name: 'Mike Pompeo', relationship: 'Aligned on hawkish foreign policy positions; both pushed aggressive counter-terrorism rhetoric', href: '/entities/individuals/mike-pompeo' },
  ],

  'steve-mnuchin': [
    { name: 'Donald Trump', relationship: 'Served as Treasury Secretary (2017-2021); oversaw Tax Cuts and Jobs Act and COVID stimulus', href: '/entities/individuals/donald-trump' },
    { name: 'Gary Cohn', relationship: 'Fellow Goldman Sachs alum who served as top White House economic advisor; coordinated on tax reform', href: '/entities/individuals/gary-cohn' },
    { name: 'Wilbur Ross', relationship: 'Fellow Trump cabinet member and Commerce Secretary; coordinated on trade and economic policy', href: '/entities/individuals/wilbur-ross' },
    { name: 'Larry Kudlow', relationship: 'Economic policy ally who succeeded Gary Cohn as National Economic Council Director', href: '/entities/individuals/larry-kudlow' },
    { name: 'Jared Kushner', relationship: 'White House relationship; coordinated on economic policy and Middle East initiatives', href: '/entities/individuals/jared-kushner' },
  ],

  'tom-homan': [
    { name: 'Donald Trump', relationship: 'Acting ICE Director under Trump; appointed as "border czar" for Trump\'s second term with sweeping deportation mandate', href: '/entities/individuals/donald-trump' },
    { name: 'Stephen Miller', relationship: 'Co-architect of Trump\'s hardline immigration policies including family separation zero-tolerance policy', href: '/entities/individuals/stephen-miller' },
    { name: 'Kirstjen Nielsen', relationship: 'Worked under Nielsen at DHS to implement zero-tolerance border policy that separated thousands of families', href: '/entities/individuals/kirstjen-nielsen' },
    { name: 'Jeff Sessions', relationship: 'Attorney General who announced the zero-tolerance policy Homan helped implement at the border', href: '/entities/individuals/jeff-sessions' },
  ],

  'larry-kudlow': [
    { name: 'Donald Trump', relationship: 'Served as National Economic Council Director (2018-2021); TV economist who became Trump\'s top economic advisor', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Mnuchin', relationship: 'Treasury Secretary counterpart; coordinated on tax reform, trade policy, and COVID economic response', href: '/entities/individuals/steve-mnuchin' },
    { name: 'Gary Cohn', relationship: 'Replaced Cohn as NEC Director after Cohn resigned over tariff disagreements with Trump', href: '/entities/individuals/gary-cohn' },
    { name: 'Peter Navarro', relationship: 'Fellow White House economic advisor; clashed over trade policy with Navarro pushing harder protectionism', href: '/entities/individuals/peter-navarro' },
  ],

  'gary-cohn': [
    { name: 'Donald Trump', relationship: 'Served as National Economic Council Director (2017-2018); resigned over steel and aluminum tariffs disagreement', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Mnuchin', relationship: 'Fellow Goldman Sachs alum and Treasury Secretary; partnered on Tax Cuts and Jobs Act of 2017', href: '/entities/individuals/steve-mnuchin' },
    { name: 'Larry Kudlow', relationship: 'Replaced by Kudlow as NEC Director; both represented Wall Street perspective in Trump White House', href: '/entities/individuals/larry-kudlow' },
    { name: 'Jared Kushner', relationship: 'Close White House ally; Kushner recruited him to the administration from Goldman Sachs', href: '/entities/individuals/jared-kushner' },
  ],

  'kash-patel': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Trusted loyalist installed across defense and intelligence agencies; nominated as FBI Director for second term', href: '/entities/individuals/donald-trump' },
    { name: 'Ezra Cohen-Watnick', relationship: 'Fellow Devin Nunes intelligence ally placed in senior defense positions', href: '/entities/individuals/ezra-cohen-watnick' },
    { name: 'Mark Meadows', relationship: 'Chief of Staff who facilitated Patel\'s installation in Pentagon leadership', href: '/entities/individuals/mark-meadows' },
    { name: 'Devin Nunes', relationship: 'Former House Intel Chair who employed Patel as lead investigator on anti-FBI crusade', href: '/entities/individuals/devin-nunes' },
  ],

  'kellyanne-conway': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'First woman to run a successful presidential campaign (2016); Senior Counselor who coined "alternative facts"', href: '/entities/individuals/donald-trump' },
    { name: 'George Conway', relationship: 'Husband and vocal Trump critic; their opposing views became national spectacle known as "Conway vs. Conway"', href: '/entities/individuals/george-conway' },
    { name: 'Steve Bannon', relationship: 'Fellow 2016 campaign leadership; coordinated nationalist messaging strategy', href: '/entities/individuals/steve-bannon' },
    { name: 'Reince Priebus', relationship: 'RNC Chair who helped integrate her polling work into the Trump campaign', href: '/entities/individuals/reince-priebus' },
  ],

  'matt-gaetz': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Fiercely loyal House ally; Trump nominated him for Attorney General before withdrawal amid ethics investigation', href: '/entities/individuals/donald-trump' },
    { name: 'Roger Stone', relationship: 'Political ally and fellow provocateur in Trump orbit', href: '/entities/individuals/roger-stone' },
    { name: 'Joel Greenberg', relationship: 'Former Seminole County Tax Collector who pleaded guilty to sex trafficking and cooperated in Gaetz investigation', href: '/entities/individuals/joel-greenberg' },
    { name: 'Jim Jordan', relationship: 'Fellow Freedom Caucus Republican and Trump defender in Congress', href: '/entities/individuals/jim-jordan' },
  ],

  'pete-hegseth': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Nominated as Secretary of Defense; Fox News host who became trusted Trump confidant', href: '/entities/individuals/donald-trump' },
  ],

  'stephen-miller': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Chief architect of immigration policies; Senior Advisor who shaped Muslim ban, family separation, and border wall', href: '/entities/individuals/donald-trump' },
    { name: 'Steve Bannon', relationship: 'Ideological partner on nationalist agenda; co-developed "America First" policy framework', href: '/entities/individuals/steve-bannon' },
    { name: 'Jeff Sessions', relationship: 'Former boss as Senate aide; Sessions implemented Miller\'s zero-tolerance immigration vision as AG', href: '/entities/individuals/jeff-sessions' },
    { name: 'Kirstjen Nielsen', relationship: 'DHS Secretary who carried out Miller\'s hardline immigration directives', href: '/entities/individuals/kirstjen-nielsen' },
  ],

  'jeff-sessions': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'First senator to endorse Trump; served as Attorney General before being fired for recusing from Russia investigation', href: '/entities/individuals/donald-trump' },
    { name: 'Rod Rosenstein', relationship: 'Deputy AG who appointed Mueller special counsel after Sessions recusal, drawing Trump\'s fury', href: '/entities/individuals/rod-rosenstein' },
    { name: 'Stephen Miller', relationship: 'Former Senate aide who became Trump\'s hardline immigration advisor; Sessions mentored his anti-immigration stance', href: '/entities/individuals/stephen-miller' },
    { name: 'Robert Mueller', relationship: 'Special Counsel whose appointment resulted from Sessions\' recusal from Russia investigation', href: '/entities/individuals/robert-mueller' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  LEGAL FIGURES
  // ═══════════════════════════════════════════════════════════════

  'alvin-bragg': [
    { name: 'Donald Trump', relationship: 'Manhattan DA who secured historic 34-count felony conviction in hush money case — first criminal conviction of a U.S. president', href: '/entities/individuals/donald-trump' },
    { name: 'Michael Cohen', relationship: 'Star prosecution witness in Trump hush money trial; Bragg built case around Cohen\'s testimony about payments', href: '/entities/individuals/michael-cohen' },
    { name: 'Todd Blanche', relationship: 'Trump\'s defense attorney who opposed Bragg\'s prosecution team throughout the Manhattan trial', href: '/entities/individuals/todd-blanche' },
    { name: 'Juan Merchan', relationship: 'Judge who presided over the Trump hush money trial Bragg prosecuted', href: '/entities/individuals/juan-merchan' },
  ],

  'letitia-james': [
    { name: 'Donald Trump', relationship: 'New York AG who won $454 million civil fraud judgment against Trump and the Trump Organization', href: '/entities/individuals/donald-trump' },
    { name: 'Allen Weisselberg', relationship: 'Trump Organization CFO whose testimony and conviction were central to James\'s fraud case', href: '/entities/individuals/allen-weisselberg' },
    { name: 'Eric Trump', relationship: 'Named defendant in civil fraud suit; found liable alongside his father for inflating assets', href: '/entities/individuals/eric-trump' },
    { name: 'Michael Cohen', relationship: 'Former Trump lawyer whose congressional testimony provided roadmap for James\'s fraud investigation', href: '/entities/individuals/michael-cohen' },
  ],

  'juan-merchan': [
    { name: 'Donald Trump', relationship: 'Presiding judge in historic Manhattan criminal trial that resulted in 34 felony convictions; targeted by Trump\'s attacks on judiciary', href: '/entities/individuals/donald-trump' },
    { name: 'Alvin Bragg', relationship: 'Manhattan DA whose office prosecuted the case Merchan oversaw through conviction', href: '/entities/individuals/alvin-bragg' },
    { name: 'Todd Blanche', relationship: 'Trump\'s defense attorney who appeared before Merchan throughout the hush money trial', href: '/entities/individuals/todd-blanche' },
    { name: 'Michael Cohen', relationship: 'Key prosecution witness who testified in Merchan\'s courtroom about hush money payments', href: '/entities/individuals/michael-cohen' },
  ],

  'aileen-cannon': [
    { name: 'Donald Trump', relationship: 'Trump-appointed judge who dismissed classified documents case against him; criticized for favorable rulings toward Trump', href: '/entities/individuals/donald-trump' },
    { name: 'Jack Smith', relationship: 'Special Counsel whose classified documents prosecution she dismissed by ruling the special counsel appointment unconstitutional', href: '/entities/individuals/jack-smith' },
    { name: 'Clarence Thomas', relationship: 'Supreme Court Justice whose concurrence questioning special counsel legitimacy was cited in her dismissal ruling', href: '/entities/individuals/clarence-thomas' },
    { name: 'Walt Nauta', relationship: 'Trump co-defendant in classified documents case she presided over; Trump\'s personal aide charged with obstruction', href: '/entities/individuals/walt-nauta' },
  ],

  'todd-blanche': [
    { name: 'Donald Trump', relationship: 'Lead defense attorney in Manhattan hush money trial and federal cases; later nominated as Deputy Attorney General', href: '/entities/individuals/donald-trump' },
    { name: 'Alvin Bragg', relationship: 'Opposing counsel as Manhattan DA who prosecuted the case Blanche defended', href: '/entities/individuals/alvin-bragg' },
    { name: 'Juan Merchan', relationship: 'Judge before whom Blanche argued Trump\'s defense in the hush money trial', href: '/entities/individuals/juan-merchan' },
    { name: 'Jack Smith', relationship: 'Special Counsel whose federal prosecutions Blanche defended Trump against', href: '/entities/individuals/jack-smith' },
  ],

  'alina-habba': [
    { name: 'Donald Trump', relationship: 'Personal attorney who represented Trump in E. Jean Carroll defamation case and Letitia James civil fraud suit', href: '/entities/individuals/donald-trump' },
    { name: 'Letitia James', relationship: 'Opposing counsel as NY AG; Habba defended Trump in James\'s $250 million civil fraud case', href: '/entities/individuals/letitia-james' },
    { name: 'E. Jean Carroll', relationship: 'Plaintiff in defamation case where Habba represented Trump; jury awarded Carroll $83.3 million', href: '/entities/individuals/e-jean-carroll' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  INTERNATIONAL FIGURES
  // ═══════════════════════════════════════════════════════════════

  'kim-jong-un': [
    { name: 'Donald Trump', relationship: 'Held three unprecedented summits with Trump (Singapore 2018, Hanoi 2019, DMZ 2019); exchanged "love letters" per Trump\'s description', href: '/entities/individuals/donald-trump' },
    { name: 'Xi Jinping', relationship: 'China is North Korea\'s primary economic patron and diplomatic shield; complex patron-client relationship', href: '/entities/individuals/xi-jinping' },
    { name: 'Moon Jae-in', relationship: 'South Korean President who brokered historic inter-Korean summits in 2018 as part of diplomatic thaw', href: '/entities/individuals/moon-jae-in' },
    { name: 'Mike Pompeo', relationship: 'Secretary of State who conducted secret trip to Pyongyang in 2018 to arrange Trump-Kim summit', href: '/entities/individuals/mike-pompeo' },
  ],

  'viktor-orban': [
    { name: 'Donald Trump', relationship: 'Invited to Mar-a-Lago and the White House; Trump praised Orban as "strong leader" and model for right-wing governance', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Closest EU leader to Putin; opposed sanctions and maintained energy ties despite Ukraine invasion', href: '/entities/individuals/vladimir-putin' },
    { name: 'Xi Jinping', relationship: 'Deepened Hungary-China economic ties; hosted Xi for state visit and supported Belt and Road Initiative in EU', href: '/entities/individuals/xi-jinping' },
    { name: 'Jair Bolsonaro', relationship: 'Fellow right-wing populist leader; aligned on nationalist, anti-immigration, and anti-EU governance model', href: '/entities/individuals/jair-bolsonaro' },
  ],

  'benjamin-netanyahu': [
    { name: 'Donald Trump', relationship: 'Close alliance yielded Jerusalem embassy move, Golan Heights recognition, and Abraham Accords; named settlement "Trump Heights"', href: '/entities/individuals/donald-trump' },
    { name: 'Jared Kushner', relationship: 'Longtime family friend who led Abraham Accords negotiations; Netanyahu attended Kushner family events for decades', href: '/entities/individuals/jared-kushner' },
    { name: 'Vladimir Putin', relationship: 'Maintained working relationship on Syria de-confliction; visited Moscow frequently to coordinate military operations', href: '/entities/individuals/vladimir-putin' },
    { name: 'Joe Biden', relationship: 'Decades-long relationship strained by Biden administration pressure over judicial overhaul and Gaza operations', href: '/entities/individuals/joe-biden' },
  ],

  'xi-jinping': [
    { name: 'Donald Trump', relationship: 'Traded between "trade war" escalation and personal flattery; hosted Trump at Forbidden City and engaged in tariff battles', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Declared "no limits" partnership in February 2022 weeks before Russia invaded Ukraine; deepened strategic alignment against Western order', href: '/entities/individuals/vladimir-putin' },
    { name: 'Kim Jong Un', relationship: 'North Korea\'s primary patron; hosted Kim for multiple state visits as leverage in nuclear diplomacy', href: '/entities/individuals/kim-jong-un' },
    { name: 'Joe Biden', relationship: 'Engaged in tense summits over Taiwan, trade, and technology competition; Biden called him a "dictator"', href: '/entities/individuals/joe-biden' },
  ],

  'volodymyr-zelensky': [
    { name: 'Donald Trump', relationship: 'Subject of Trump\'s 2019 "perfect phone call" demanding investigation of Biden that led to first impeachment; pressured in 2025 over peace deal', href: '/entities/individuals/donald-trump' },
    { name: 'Joe Biden', relationship: 'Key wartime ally who secured billions in U.S. military and economic aid for Ukraine\'s defense against Russia', href: '/entities/individuals/joe-biden' },
    { name: 'Vladimir Putin', relationship: 'Wartime adversary who launched full-scale invasion of Ukraine in February 2022; ongoing existential conflict', href: '/entities/individuals/vladimir-putin' },
    { name: 'Alexander Vindman', relationship: 'NSC official who reported Trump-Zelensky call to authorities, triggering first Trump impeachment', href: '/entities/individuals/alexander-vindman' },
  ],

  'jair-bolsonaro': [
    { name: 'Donald Trump', relationship: 'Called "Trump of the Tropics"; modeled presidency after Trump, visited Mar-a-Lago, and supported Trump-style election denialism', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Maintained ties with Russia despite Western pressure; visited Moscow weeks before Ukraine invasion in 2022', href: '/entities/individuals/vladimir-putin' },
    { name: 'Viktor Orban', relationship: 'Fellow right-wing populist leader; aligned on nationalist governance and opposition to liberal international order', href: '/entities/individuals/viktor-orban' },
    { name: 'Elon Musk', relationship: 'Ally in battles over social media regulation; Musk supported Bolsonaro\'s resistance to Brazilian court-ordered X/Twitter restrictions', href: '/entities/individuals/elon-musk' },
  ],

  'recep-erdogan': [
    { name: 'Donald Trump', relationship: 'Complex relationship marked by Trump clearing way for Turkish Syria incursion in 2019 and sharing classified intel; Trump praised Erdogan as "friend"', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Purchased Russian S-400 missile system defying NATO; complex frenemy relationship balancing Russian and Western alliances', href: '/entities/individuals/vladimir-putin' },
    { name: 'Michael Flynn', relationship: 'Flynn secretly lobbied for Turkish government during 2016 campaign; discussed extraditing Gulen cleric to Turkey', href: '/entities/individuals/michael-flynn' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  MEDIA FIGURES
  // ═══════════════════════════════════════════════════════════════

  'tucker-carlson': [
    // Already has knownAssociates — will be skipped
    { name: 'Rupert Murdoch', relationship: 'Fox News owner who fired Carlson in 2023; Dominion lawsuit revealed Carlson privately despised Trump while promoting him', href: '/entities/individuals/rupert-murdoch' },
    { name: 'Vladimir Putin', relationship: 'Conducted controversial two-hour interview with Putin in Moscow in February 2024', href: '/entities/individuals/vladimir-putin' },
    { name: 'Donald Trump', relationship: 'Top-rated Fox host who amplified Trump messaging while privately texting he "passionately hated" Trump', href: '/entities/individuals/donald-trump' },
  ],

  'sean-hannity': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Closest media ally who spoke with Trump almost nightly; texts to Mark Meadows revealed advisory role during January 6', href: '/entities/individuals/donald-trump' },
    { name: 'Rupert Murdoch', relationship: 'Fox News employer; Dominion lawsuit exposed tension between editorial independence and Murdoch directives', href: '/entities/individuals/rupert-murdoch' },
    { name: 'Mark Meadows', relationship: 'Exchanged texts advising White House strategy; urged Meadows to get Trump to stop January 6 violence', href: '/entities/individuals/mark-meadows' },
    { name: 'Jared Kushner', relationship: 'Regular communication channel between Fox News and Trump White House', href: '/entities/individuals/jared-kushner' },
  ],

  'bill-oreilly': [
    { name: 'Rupert Murdoch', relationship: 'Fox News owner who protected O\'Reilly through multiple harassment scandals before firing him in 2017 after advertiser exodus', href: '/entities/individuals/rupert-murdoch' },
    { name: 'Donald Trump', relationship: 'Longtime associate who co-headlined speaking tours; Trump defended O\'Reilly after sexual harassment ouster from Fox', href: '/entities/individuals/donald-trump' },
    { name: 'Roger Ailes', relationship: 'Fox News founder and CEO who shielded O\'Reilly from accountability; both ousted over sexual harassment', href: '/entities/individuals/roger-ailes' },
  ],

  'rush-limbaugh': [
    { name: 'Donald Trump', relationship: 'Influential conservative radio host who championed Trump; received Presidential Medal of Freedom from Trump at 2020 State of the Union', href: '/entities/individuals/donald-trump' },
    { name: 'Roger Ailes', relationship: 'Fellow architect of conservative media landscape; shared ideology and audience in building right-wing media infrastructure', href: '/entities/individuals/roger-ailes' },
    { name: 'Sean Hannity', relationship: 'Protégé in conservative talk radio who continued Limbaugh\'s legacy of partisan commentary', href: '/entities/individuals/sean-hannity' },
  ],

  'jack-dorsey': [
    { name: 'Donald Trump', relationship: 'As Twitter CEO, held Oval Office meeting with Trump; company ultimately banned Trump after January 6 Capitol attack', href: '/entities/individuals/donald-trump' },
    { name: 'Elon Musk', relationship: 'Musk acquired Twitter (now X) after Dorsey stepped down; Dorsey initially supported Musk\'s acquisition then criticized direction', href: '/entities/individuals/elon-musk' },
    { name: 'Mark Zuckerberg', relationship: 'Fellow social media CEO facing parallel scrutiny over platform content moderation and political influence', href: '/entities/individuals/mark-zuckerberg' },
  ],

  'andrew-tate': [
    { name: 'Tristan Tate', relationship: 'Brother and business partner; co-defendant in Romanian human trafficking and organized crime prosecution', href: '/entities/individuals/tristan-tate' },
  ],

  'tristan-tate': [
    { name: 'Andrew Tate', relationship: 'Brother and business partner; co-defendant in Romanian human trafficking and organized crime prosecution', href: '/entities/individuals/andrew-tate' },
  ],

  'alex-jones': [
    // Already has knownAssociates — will be skipped
    { name: 'Donald Trump', relationship: 'Conspiracy media ally who promoted Trump; Trump appeared on InfoWars and praised Jones', href: '/entities/individuals/donald-trump' },
    { name: 'Roger Stone', relationship: 'Frequent InfoWars guest and political ally; connected Jones to Trump world', href: '/entities/individuals/roger-stone' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  KEY POLITICAL FIGURES
  // ═══════════════════════════════════════════════════════════════

  'newt-gingrich': [
    { name: 'Donald Trump', relationship: 'Early Trump ally and informal advisor; considered for VP in 2016; helped shape Trump\'s combative political style', href: '/entities/individuals/donald-trump' },
    { name: 'Kevin McCarthy', relationship: 'Mentored McCarthy in Republican politics; both served as House GOP leaders who reshaped partisan warfare', href: '/entities/individuals/kevin-mccarthy' },
    { name: 'Bill Clinton', relationship: 'As Speaker of the House, led Clinton impeachment in 1998 while simultaneously conducting his own extramarital affair', href: '/entities/individuals/bill-clinton' },
  ],

  'sarah-palin': [
    { name: 'Donald Trump', relationship: 'Early Trump endorser in 2016; her 2008 VP candidacy is widely seen as prototype for Trump-era populist politics', href: '/entities/individuals/donald-trump' },
    { name: 'John McCain', relationship: '2008 Republican VP nominee selected by McCain; their ticket lost to Obama-Biden', href: '/entities/individuals/john-mccain' },
  ],

  'tulsi-gabbard': [
    { name: 'Donald Trump', relationship: 'Former Democratic congresswoman who endorsed Trump in 2024 and was appointed Director of National Intelligence', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Criticized for echoing Russian talking points on Ukraine and Syria; met with Assad in 2017 without State Department approval', href: '/entities/individuals/vladimir-putin' },
    { name: 'Bashar al-Assad', relationship: 'Controversially met with Syrian dictator Assad in 2017, questioning U.S. regime change policy and drawing bipartisan condemnation', href: '/entities/individuals/bashar-al-assad' },
  ],

  'robert-f-kennedy-jr': [
    { name: 'Donald Trump', relationship: 'Dropped independent presidential bid to endorse Trump in 2024; appointed Secretary of Health and Human Services', href: '/entities/individuals/donald-trump' },
    { name: 'Anthony Fauci', relationship: 'Leading critic of Fauci\'s pandemic response; spread vaccine misinformation contradicting Fauci\'s public health guidance', href: '/entities/individuals/anthony-fauci' },
    { name: 'Joe Biden', relationship: 'Challenged Biden for Democratic nomination in 2024 before switching to independent run and ultimately endorsing Trump', href: '/entities/individuals/joe-biden' },
  ],

  'pam-bondi': [
    { name: 'Donald Trump', relationship: 'As Florida AG, dropped Trump University fraud investigation after PAC received $25,000 Trump donation; later appointed Attorney General in 2025', href: '/entities/individuals/donald-trump' },
    { name: 'Lev Parnas', relationship: 'Connected through Trump orbit; Parnas attended Bondi fundraisers during Ukraine pressure campaign period', href: '/entities/individuals/lev-parnas' },
  ],

  'ron-johnson': [
    { name: 'Donald Trump', relationship: 'Loyal Senate ally who amplified election fraud claims; attempted to hand fake elector slates to VP Pence on January 6', href: '/entities/individuals/donald-trump' },
    { name: 'Vladimir Putin', relationship: 'Led congressional delegation to Moscow on July 4, 2018; criticized for insufficient confrontation of Russian election interference', href: '/entities/individuals/vladimir-putin' },
  ],

  'rick-scott': [
    { name: 'Donald Trump', relationship: 'Close Trump ally in Senate; oversaw largest Medicare fraud in history ($1.7 billion at Columbia/HCA) before entering politics', href: '/entities/individuals/donald-trump' },
  ],

  'doug-mastriano': [
    { name: 'Donald Trump', relationship: 'Trump-endorsed candidate for Pennsylvania governor; attended January 6 rally and organized buses to Washington D.C.', href: '/entities/individuals/donald-trump' },
  ],

  'tiffany-trump': [
    { name: 'Donald Trump', relationship: 'Daughter from second marriage to Marla Maples; graduated from Georgetown Law School', href: '/entities/individuals/donald-trump' },
    { name: 'Ivanka Trump', relationship: 'Half-sister from Trump\'s first marriage; publicly close despite different upbringings', href: '/entities/individuals/ivanka-trump' },
    { name: 'Melania Trump', relationship: 'Stepmother who joined Trump family during Tiffany\'s childhood', href: '/entities/individuals/melania-trump' },
    { name: 'Eric Trump', relationship: 'Half-brother from Trump\'s first marriage to Ivana Trump', href: '/entities/individuals/eric-trump' },
    { name: 'Donald Trump Jr.', relationship: 'Half-brother from Trump\'s first marriage; both part of extended Trump family political orbit', href: '/entities/individuals/donald-trump-jr' },
  ],

  'jerry-falwell-jr': [
    { name: 'Donald Trump', relationship: 'Provided crucial early evangelical endorsement in 2016 primaries; Liberty University hosted Trump for key campaign speech', href: '/entities/individuals/donald-trump' },
    { name: 'Michael Cohen', relationship: 'Trump fixer who helped suppress compromising photos of Falwell and his wife; Cohen described Falwell endorsement as transactional', href: '/entities/individuals/michael-cohen' },
  ],

  'paula-white': [
    { name: 'Donald Trump', relationship: 'Personal spiritual advisor who led White House Faith and Opportunity Initiative; delivered prayers at Trump events and inauguration', href: '/entities/individuals/donald-trump' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  RUSSIA INVESTIGATION
  // ═══════════════════════════════════════════════════════════════

  'alexander-torshin': [
    { name: 'Maria Butina', relationship: 'Handler and patron of Butina\'s operation to infiltrate the NRA and Republican political circles for Russian intelligence', href: '/entities/individuals/maria-butina' },
    { name: 'Vladimir Putin', relationship: 'Former Russian Central Bank deputy governor and Putin-allied politician who directed Butina\'s U.S. influence operation', href: '/entities/individuals/vladimir-putin' },
  ],

  'paul-erickson': [
    { name: 'Maria Butina', relationship: 'Romantic partner who helped Butina infiltrate NRA and Republican networks; convicted of fraud related to schemes during their relationship', href: '/entities/individuals/maria-butina' },
  ],

  'ivan-timofeev': [
    { name: 'George Papadopoulos', relationship: 'Russian think tank official connected to Papadopoulos; part of the network arranging "dirt" on Hillary Clinton through Russian contacts', href: '/entities/individuals/george-papadopoulos' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  HUSH MONEY / LEGAL
  // ═══════════════════════════════════════════════════════════════

  'michael-avenatti': [
    { name: 'Stormy Daniels', relationship: 'Attorney who represented Daniels in lawsuits against Trump over hush money agreement; later convicted of stealing from her', href: '/entities/individuals/stormy-daniels' },
    { name: 'Michael Cohen', relationship: 'Adversary and counterpart in hush money saga; cross-examined Cohen\'s role in Stormy Daniels payment', href: '/entities/individuals/michael-cohen' },
    { name: 'Donald Trump', relationship: 'Became prominent Trump antagonist through Stormy Daniels representation; briefly considered 2020 presidential run', href: '/entities/individuals/donald-trump' },
  ],

  'keith-davidson': [
    { name: 'Stormy Daniels', relationship: 'Attorney who negotiated the $130,000 hush money deal with Michael Cohen on behalf of Daniels before 2016 election', href: '/entities/individuals/stormy-daniels' },
    { name: 'Karen McDougal', relationship: 'Attorney who negotiated $150,000 AMI catch-and-kill deal for McDougal\'s story about Trump affair', href: '/entities/individuals/karen-mcdougal' },
    { name: 'Michael Cohen', relationship: 'Negotiated directly with Cohen on both the Daniels and McDougal hush money arrangements', href: '/entities/individuals/michael-cohen' },
    { name: 'David Pecker', relationship: 'AMI/National Enquirer publisher who participated in catch-and-kill scheme Davidson negotiated', href: '/entities/individuals/david-pecker' },
  ],

  'greg-jacob': [
    { name: 'Mike Pence', relationship: 'Served as Pence\'s counsel and advised him that he lacked authority to reject electoral votes on January 6', href: '/entities/individuals/mike-pence' },
    { name: 'John Eastman', relationship: 'Directly confronted Eastman\'s legal theory that Pence could overturn election results; key January 6 Committee witness', href: '/entities/individuals/john-eastman' },
  ],

  // ═══════════════════════════════════════════════════════════════
  //  OTHER HIGH-PROFILE
  // ═══════════════════════════════════════════════════════════════

  'jerry-sandusky': [
    { name: 'Joe Paterno', relationship: 'Penn State head coach who was informed of Sandusky\'s abuse but failed to report to law enforcement; fired in 2011 scandal', href: '/entities/individuals/joe-paterno' },
  ],

  'sean-combs': [
    { name: 'Jay-Z', relationship: 'Fellow hip-hop mogul and longtime music industry associate; both dominated 1990s-2000s hip-hop business landscape', href: '/entities/individuals/jay-z' },
  ],

  'david-miscavige': [
    { name: 'Tom Cruise', relationship: 'Scientology\'s most famous member and close personal friend; Miscavige served as best man at Cruise\'s wedding to Katie Holmes', href: '/entities/individuals/tom-cruise' },
  ],

  'keith-raniere': [
    { name: 'Allison Mack', relationship: 'Smallville actress recruited as NXIVM leader who branded women and recruited sex slaves for Raniere; convicted of racketeering', href: '/entities/individuals/allison-mack' },
  ],

  'carlos-ghosn': [
    { name: 'Nissan', relationship: 'Former CEO who was arrested in Tokyo in 2018 for financial misconduct; dramatically escaped Japan hidden in an audio equipment box', href: '/entities/individuals/nissan' },
  ],

  'ken-lay': [
    { name: 'Jeffrey Skilling', relationship: 'Enron CEO and co-conspirator in massive corporate fraud; both convicted in 2006 — Lay died before sentencing, Skilling served 12 years', href: '/entities/individuals/jeffrey-skilling' },
  ],

  'dennis-hastert': [
    { name: 'Tom DeLay', relationship: 'Fellow House Republican leader known as "The Hammer"; served as Majority Whip/Leader during Hastert\'s Speakership', href: '/entities/individuals/tom-delay' },
  ],

  'jeff-bezos': [
    // Already has knownAssociates — will be skipped
    { name: 'Elon Musk', relationship: 'Rival tech billionaire; competed in space race (Blue Origin vs SpaceX) and clashed over government contracts', href: '/entities/individuals/elon-musk' },
    { name: 'Mark Zuckerberg', relationship: 'Fellow tech titan; parallel scrutiny over monopoly power, labor practices, and political influence', href: '/entities/individuals/mark-zuckerberg' },
    { name: 'Donald Trump', relationship: 'Target of Trump attacks over Amazon postal rates and Washington Post coverage; later reconciled', href: '/entities/individuals/donald-trump' },
  ],

  'chuck-schumer': [
    // Already has knownAssociates — will be skipped
    { name: 'Nancy Pelosi', relationship: 'House counterpart and co-leader of Democratic legislative strategy for decades', href: '/entities/individuals/nancy-pelosi' },
    { name: 'Mitch McConnell', relationship: 'Senate Republican rival; decades of negotiations and confrontations over Senate control', href: '/entities/individuals/mitch-mcconnell' },
    { name: 'Joe Biden', relationship: 'Key legislative partner who shepherded Biden\'s agenda through the Senate', href: '/entities/individuals/joe-biden' },
    { name: 'Donald Trump', relationship: 'Publicly clashed with Trump on immigration, government shutdowns, and January 6 accountability', href: '/entities/individuals/donald-trump' },
  ],
};

// ── Main Script ─────────────────────────────────────────────────

function buildKnownAssociatesBlock(associates, indent = '    ', lineEnding = '\n') {
  const lines = [`${indent}knownAssociates: [`];
  associates.forEach((a, i) => {
    const comma = ',';
    // Escape single quotes in relationship text
    const rel = a.relationship.replace(/'/g, "\\'");
    const name = a.name.replace(/'/g, "\\'");
    const href = a.href || '';
    if (href) {
      lines.push(`${indent}  { name: '${name}', relationship: '${rel}', href: '${href}' }${comma}`);
    } else {
      lines.push(`${indent}  { name: '${name}', relationship: '${rel}' }${comma}`);
    }
  });
  lines.push(`${indent}],`);
  return lines.join(lineEnding);
}

function findAffiliationsClose(source, profileStart) {
  // From the profile start, find 'affiliations: [' then find its matching '],'
  const affIdx = source.indexOf('affiliations: [', profileStart);
  if (affIdx === -1) return -1;

  // Count bracket depth to find the matching close
  let depth = 0;
  for (let i = affIdx; i < source.length; i++) {
    if (source[i] === '[') depth++;
    if (source[i] === ']') {
      depth--;
      if (depth === 0) {
        // Find the end of LINE containing this ']'
        const lineEnd = source.indexOf('\n', i);
        return lineEnd !== -1 ? lineEnd : i;
      }
    }
  }
  return -1;
}

function run() {
  console.log('Reading source file...');
  let source = fs.readFileSync(SOURCE_FILE, 'utf8');
  // Detect line ending style
  const lineEnding = source.includes('\r\n') ? '\r\n' : '\n';
  console.log(`File size: ${(source.length / 1024 / 1024).toFixed(2)} MB, ${source.split('\n').length} lines (line endings: ${lineEnding === '\r\n' ? 'CRLF' : 'LF'})`);

  const slugs = Object.keys(expansionData);
  let inserted = 0;
  let skipped = 0;
  let errors = [];

  for (const slug of slugs) {
    // Find the profile key in the source
    const key = `'${slug}':`;
    const profileIdx = source.indexOf(key);

    if (profileIdx === -1) {
      errors.push(`  ✗ ${slug}: Profile not found in source`);
      continue;
    }

    // Check if this profile already has knownAssociates
    // Find the end of this profile (next top-level key or end of object)
    const nextKeyPattern = /\n  '[a-z]/;
    const afterProfile = source.substring(profileIdx + key.length);
    const nextKeyMatch = afterProfile.match(nextKeyPattern);
    const profileEnd = nextKeyMatch
      ? profileIdx + key.length + nextKeyMatch.index
      : source.length;
    const profileChunk = source.substring(profileIdx, profileEnd);

    if (profileChunk.includes('knownAssociates:')) {
      console.log(`  ⊘ ${slug}: Already has knownAssociates — skipping`);
      skipped++;
      continue;
    }

    // Find the insertion point: after affiliations array closes
    const insertAfter = findAffiliationsClose(source, profileIdx);
    if (insertAfter === -1) {
      errors.push(`  ✗ ${slug}: Could not find affiliations closing bracket`);
      continue;
    }

    // Make sure insertion point is within this profile
    if (insertAfter > profileEnd) {
      errors.push(`  ✗ ${slug}: Affiliations close found outside profile bounds`);
      continue;
    }

    // Build the knownAssociates block
    const block = buildKnownAssociatesBlock(expansionData[slug], '    ', lineEnding);

    // Insert after the affiliations closing line
    source = source.substring(0, insertAfter + 1) + lineEnding + block + lineEnding + source.substring(insertAfter + 1);

    console.log(`  ✓ ${slug}: Inserted ${expansionData[slug].length} associates`);
    inserted++;
  }

  // Write back
  console.log(`\nWriting modified file...`);
  fs.writeFileSync(SOURCE_FILE, source, 'utf8');

  const newLines = source.split('\n').length;
  console.log(`\n${'═'.repeat(50)}`);
  console.log(`Done! Results:`);
  console.log(`  Inserted: ${inserted}`);
  console.log(`  Skipped (already present): ${skipped}`);
  console.log(`  Errors: ${errors.length}`);
  if (errors.length > 0) {
    console.log(`\nErrors:`);
    errors.forEach(e => console.log(e));
  }
  console.log(`  New line count: ${newLines}`);
  console.log(`${'═'.repeat(50)}`);
}

run();
