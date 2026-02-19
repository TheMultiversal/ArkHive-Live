"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Calendar, Clock, AlertTriangle, ChevronDown, Filter } from "lucide-react";

interface TimelineEvent {
  date: string;
  sortDate: string;
  title: string;
  description: string;
  category: string;
  severity: 'critical' | 'high' | 'medium' | 'low';
  slug: string;
  tags: string[];
}

const timelineEvents: TimelineEvent[] = [
  // Historical events chronologically
  {
    date: "1492",
    sortDate: "1492-01-01",
    title: "Native American Genocide Begins",
    description: "European colonization begins the systematic extermination of indigenous peoples that would reduce the population from 60-100 million to 800,000.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "native-american-genocide",
    tags: ["Genocide", "Native Americans"],
  },
  {
    date: "1879",
    sortDate: "1879-11-01",
    title: "Indian Boarding Schools Established",
    description: "'Kill the Indian, save the man.' Children forcibly removed, thousands died. Federal investigation found 500+ burial sites.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "indian-boarding-schools",
    tags: ["Boarding Schools", "Genocide"],
  },
  {
    date: "1932-1972",
    sortDate: "1932-01-01",
    title: "Tuskegee Syphilis Study",
    description: "U.S. government withheld treatment from 399 Black men for 40 years to study disease progression. 128 died, 40 wives infected.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "tuskegee-experiment",
    tags: ["Medical Experimentation", "Racism"],
  },
  {
    date: "February 19, 1942",
    sortDate: "1942-02-19",
    title: "Japanese American Internment Ordered",
    description: "Executive Order 9066 authorized imprisonment of 120,000 Americans without charge based solely on race.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "japanese-internment",
    tags: ["Internment", "WWII"],
  },
  {
    date: "1950s",
    sortDate: "1950-01-01",
    title: "Operation Mockingbird Begins",
    description: "CIA infiltrated American journalism, influencing 400+ journalists to plant stories and suppress unfavorable coverage.",
    category: "Government Abuse",
    severity: "critical",
    slug: "operation-mockingbird",
    tags: ["CIA", "Media"],
  },
  {
    date: "August 19, 1953",
    sortDate: "1953-08-19",
    title: "Iran Coup - CIA Overthrows Mosaddegh",
    description: "CIA/MI6 overthrew democratically elected government over oil nationalization. Installed Shah dictatorship.",
    category: "War Crimes",
    severity: "critical",
    slug: "iran-coup",
    tags: ["CIA", "Coup", "Iran"],
  },
  {
    date: "1953-1973",
    sortDate: "1953-04-13",
    title: "MKUltra: CIA Mind Control Program",
    description: "CIA conducted illegal experiments on unwitting Americans. LSD, electroshock, mind control. Most records destroyed.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "mkultra",
    tags: ["CIA", "Experimentation"],
  },
  {
    date: "1956-1971",
    sortDate: "1956-08-25",
    title: "COINTELPRO Operations",
    description: "FBI's systematic destruction of civil rights movement. Targeted MLK, assassinated Fred Hampton, infiltrated Black Panthers.",
    category: "Government Abuse",
    severity: "critical",
    slug: "cointelpro",
    tags: ["FBI", "Civil Rights"],
  },
  {
    date: "August 2, 1964",
    sortDate: "1964-08-02",
    title: "Gulf of Tonkin Incident",
    description: "The lie that started Vietnam War. August 4 'attack' never happened. 58,000 Americans and 2-3 million Vietnamese died.",
    category: "War Crimes",
    severity: "critical",
    slug: "gulf-of-tonkin",
    tags: ["Vietnam", "Lies"],
  },
  {
    date: "March 16, 1968",
    sortDate: "1968-03-16",
    title: "My Lai Massacre",
    description: "U.S. soldiers murdered 500+ Vietnamese civilians including women and children. Only Lt. Calley convicted, served 3.5 years house arrest.",
    category: "War Crimes",
    severity: "critical",
    slug: "vietnam-war-crimes",
    tags: ["Vietnam", "Massacre"],
  },
  {
    date: "June 17, 1971",
    sortDate: "1971-06-17",
    title: "War on Drugs Declared",
    description: "Nixon aide later confessed: designed to target 'Black people and antiwar left.' $1 trillion spent, millions incarcerated.",
    category: "Systemic Racism",
    severity: "critical",
    slug: "war-on-drugs",
    tags: ["Drug War", "Mass Incarceration"],
  },
  {
    date: "June 17, 1972",
    sortDate: "1972-06-17",
    title: "Watergate Break-in",
    description: "Nixon's operatives burglarized DNC headquarters, triggering scandal that led to his resignation.",
    category: "Government Abuse",
    severity: "critical",
    slug: "watergate",
    tags: ["Nixon", "Watergate"],
  },
  {
    date: "September 11, 1973",
    sortDate: "1973-09-11",
    title: "Chile Coup - Allende Overthrown",
    description: "CIA helped overthrow democratically elected Salvador Allende. Pinochet dictatorship killed 3,000+, tortured 40,000+.",
    category: "War Crimes",
    severity: "critical",
    slug: "chile-coup",
    tags: ["Chile", "CIA", "Pinochet"],
  },
  {
    date: "November 25, 1975",
    sortDate: "1975-11-25",
    title: "Operation Condor Begins",
    description: "CIA-backed assassination network of South American dictatorships coordinated to murder 60,000+ dissidents.",
    category: "War Crimes",
    severity: "critical",
    slug: "operation-condor",
    tags: ["Condor", "CIA", "Assassination"],
  },
  {
    date: "November 3, 1986",
    sortDate: "1986-11-03",
    title: "Iran-Contra Scandal Exposed",
    description: "Reagan secretly sold weapons to Iran, funded Nicaraguan death squads. Oliver North shredded evidence.",
    category: "Government Abuse",
    severity: "critical",
    slug: "iran-contra",
    tags: ["Reagan", "Iran-Contra"],
  },
  {
    date: "December 12, 2000",
    sortDate: "2000-12-12",
    title: "Bush v. Gore - Election Stolen",
    description: "Supreme Court stopped Florida recount by 5-4 vote. Selected Bush as president. Later analysis showed Gore won.",
    category: "Election Interference",
    severity: "critical",
    slug: "bush-v-gore",
    tags: ["Supreme Court", "Bush", "Gore"],
  },
  {
    date: "October 26, 2001",
    sortDate: "2001-10-26",
    title: "USA PATRIOT Act Passed",
    description: "Rushed through Congress after 9/11. Enabled mass surveillance, indefinite detention. Most legislators didn't read it.",
    category: "Constitutional Violations",
    severity: "critical",
    slug: "surveillance-state",
    tags: ["PATRIOT Act", "Surveillance"],
  },
  {
    date: "January 11, 2002",
    sortDate: "2002-01-11",
    title: "Guantánamo Bay Opens",
    description: "Indefinite detention without trial begins. Torture including waterboarding, force-feeding. 780 detained, most never charged.",
    category: "War Crimes",
    severity: "critical",
    slug: "torture-program",
    tags: ["Guantánamo", "Torture"],
  },
  {
    date: "March 20, 2003",
    sortDate: "2003-03-20",
    title: "Iraq War Begins Based on Lies",
    description: "Bush administration lied about WMD and al-Qaeda. Hundreds of thousands killed, ISIS created. No accountability.",
    category: "War Crimes",
    severity: "critical",
    slug: "iraq-war-lies",
    tags: ["Iraq", "WMD Lies"],
  },
  {
    date: "April 28, 2004",
    sortDate: "2004-04-28",
    title: "Abu Ghraib Photos Leaked",
    description: "Photos reveal U.S. soldiers torturing Iraqi prisoners. Only low-level soldiers punished.",
    category: "War Crimes",
    severity: "critical",
    slug: "abu-ghraib",
    tags: ["Torture", "Abu Ghraib"],
  },
  {
    date: "September 15, 2008",
    sortDate: "2008-09-15",
    title: "Lehman Brothers Collapses",
    description: "Wall Street fraud crashed global economy. 8 million jobs lost. Taxpayers bailed out banks. No executives jailed.",
    category: "Financial Crimes",
    severity: "critical",
    slug: "financial-fraud",
    tags: ["Financial Crisis", "Wall Street"],
  },
  {
    date: "January 21, 2010",
    sortDate: "2010-01-21",
    title: "Citizens United Decision",
    description: "Supreme Court declared corporations are people with speech rights. Unleashed unlimited dark money in politics.",
    category: "Corruption",
    severity: "critical",
    slug: "dark-money",
    tags: ["Citizens United", "Dark Money"],
  },
  {
    date: "June 6, 2013",
    sortDate: "2013-06-06",
    title: "Snowden Revelations Begin",
    description: "Edward Snowden exposed NSA mass surveillance. PRISM collecting data on all Americans. No officials faced consequences.",
    category: "Constitutional Violations",
    severity: "critical",
    slug: "nsa-mass-surveillance",
    tags: ["NSA", "Snowden", "Surveillance"],
  },
  {
    date: "April 25, 2014",
    sortDate: "2014-04-25",
    title: "Flint Water Switch",
    description: "Flint switched to contaminated water source. 100,000 poisoned with lead. Officials covered up for 18 months.",
    category: "Environmental Racism",
    severity: "critical",
    slug: "flint-water-crisis",
    tags: ["Flint", "Lead", "Racism"],
  },
  {
    date: "July 16, 2016",
    sortDate: "2016-07-16",
    title: "Russia Begins Election Interference",
    description: "GRU hacked DNC. WikiLeaks released stolen emails. IRA ran disinformation. 'Sweeping and systematic' interference.",
    category: "Election Interference",
    severity: "critical",
    slug: "russian-interference",
    tags: ["Russia", "Election"],
  },
  {
    date: "January 27, 2017",
    sortDate: "2017-01-27",
    title: "Muslim Travel Ban Signed",
    description: "Trump signed discriminatory ban on Muslim-majority countries. Families separated. Courts intervened.",
    category: "Civil Rights",
    severity: "high",
    slug: "muslim-ban",
    tags: ["Muslim Ban", "Immigration"],
  },
  {
    date: "April 2018",
    sortDate: "2018-04-01",
    title: "Family Separation Policy Implemented",
    description: "'Zero tolerance' deliberately separated 5,500+ children from parents. Children caged. 7 died in custody.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "family-separation",
    tags: ["Family Separation", "Immigration"],
  },
  {
    date: "August 12, 2017",
    sortDate: "2017-08-12",
    title: "Charlottesville 'Unite the Right'",
    description: "Neo-Nazi rally resulted in Heather Heyer's murder. Trump: 'Very fine people on both sides.'",
    category: "Civil Rights",
    severity: "critical",
    slug: "charlottesville",
    tags: ["Charlottesville", "White Supremacy"],
  },
  {
    date: "September 20, 2017",
    sortDate: "2017-09-20",
    title: "Hurricane Maria Hits Puerto Rico",
    description: "Nearly 3,000 Americans died. Trump threw paper towels, denied death toll, blocked billions in aid.",
    category: "Crimes Against Humanity",
    severity: "critical",
    slug: "puerto-rico",
    tags: ["Puerto Rico", "Hurricane"],
  },
  {
    date: "July 25, 2019",
    sortDate: "2019-07-25",
    title: "Trump-Zelensky Call",
    description: "'I would like you to do us a favor though.' Trump withheld aid to extort Ukraine into announcing Biden investigation.",
    category: "Abuse of Power",
    severity: "critical",
    slug: "ukraine-extortion",
    tags: ["Ukraine", "Impeachment"],
  },
  {
    date: "August 10, 2019",
    sortDate: "2019-08-10",
    title: "Jeffrey Epstein Dies in Custody",
    description: "Epstein found dead in federal jail. Guards sleeping, cameras failed, cellmate transferred. Ruled suicide.",
    category: "Human Trafficking",
    severity: "critical",
    slug: "epstein-network",
    tags: ["Epstein", "Death"],
  },
  {
    date: "January 2020",
    sortDate: "2020-01-01",
    title: "COVID-19: Trump Knew and Lied",
    description: "Trump privately told Woodward virus was 'deadly stuff' while publicly downplaying. 400,000+ preventable deaths.",
    category: "Public Health",
    severity: "critical",
    slug: "covid-response",
    tags: ["COVID", "Pandemic"],
  },
  {
    date: "May 25, 2020",
    sortDate: "2020-05-25",
    title: "George Floyd Murdered",
    description: "Minneapolis police officer Derek Chauvin murdered George Floyd. Sparked largest protests in U.S. history.",
    category: "Civil Rights",
    severity: "critical",
    slug: "police-brutality",
    tags: ["George Floyd", "Police"],
  },
  {
    date: "June 1, 2020",
    sortDate: "2020-06-01",
    title: "Lafayette Square Cleared for Photo Op",
    description: "Peaceful protesters tear-gassed so Trump could hold Bible at St. John's Church. Military leaders later apologized.",
    category: "Abuse of Power",
    severity: "critical",
    slug: "lafayette-square",
    tags: ["Lafayette Square", "Protest"],
  },
  {
    date: "November 3, 2020",
    sortDate: "2020-11-03",
    title: "Trump Loses Election, Launches Big Lie",
    description: "Biden wins by 7 million votes. Trump claims fraud, files 60+ lawsuits (all fail), pressures officials to 'find votes.'",
    category: "Election Interference",
    severity: "critical",
    slug: "voter-suppression",
    tags: ["Big Lie", "Election"],
  },
  {
    date: "January 2, 2021",
    sortDate: "2021-01-02",
    title: "Trump Pressures Raffensperger",
    description: "'I just want to find 11,780 votes.' Trump pressured Georgia officials to overturn election. Recorded call.",
    category: "Election Interference",
    severity: "critical",
    slug: "georgia-rico",
    tags: ["Georgia", "Raffensperger"],
  },
  {
    date: "January 6, 2021",
    sortDate: "2021-01-06",
    title: "January 6 Insurrection",
    description: "Trump incited mob to storm Capitol to stop certification. Deaths, injuries, 1,400+ charged. Seditious conspiracy convictions.",
    category: "Election Interference",
    severity: "critical",
    slug: "january-6-insurrection",
    tags: ["January 6", "Insurrection"],
  },
  {
    date: "June 2022",
    sortDate: "2022-06-24",
    title: "Roe v. Wade Overturned",
    description: "Supreme Court eliminates constitutional right to abortion after 50 years. Federalist Society achieved decades-long goal.",
    category: "Civil Rights",
    severity: "critical",
    slug: "federalist-society",
    tags: ["Abortion", "SCOTUS"],
  },
  {
    date: "August 8, 2022",
    sortDate: "2022-08-08",
    title: "FBI Searches Mar-a-Lago",
    description: "FBI recovered 300+ classified documents including TOP SECRET/SCI material. Trump had refused to return them.",
    category: "National Security",
    severity: "critical",
    slug: "mar-a-lago-documents",
    tags: ["Classified Documents", "FBI"],
  },
  {
    date: "April 4, 2023",
    sortDate: "2023-04-04",
    title: "Trump Indicted in NY (First Time)",
    description: "First former president indicted. 34 felony counts for falsifying business records in hush money scheme.",
    category: "Criminal Conduct",
    severity: "critical",
    slug: "hush-money",
    tags: ["Indictment", "Hush Money"],
  },
  {
    date: "May 30, 2024",
    sortDate: "2024-05-30",
    title: "Trump Convicted on All 34 Counts",
    description: "First former president convicted of felonies. Guilty on all 34 counts of falsifying business records.",
    category: "Criminal Conduct",
    severity: "critical",
    slug: "trump-criminal-compendium",
    tags: ["Conviction", "Felony"],
  },
  {
    date: "July 1, 2024",
    sortDate: "2024-07-01",
    title: "SCOTUS Grants Presidential Immunity",
    description: "Supreme Court grants broad immunity for 'official acts.' Shields presidents from prosecution. 6-3 decision.",
    category: "Corruption",
    severity: "critical",
    slug: "scotus-ethics",
    tags: ["Immunity", "SCOTUS"],
  },
];

// Sort by date (newest first)
const sortedEvents = [...timelineEvents].sort((a, b) => 
  new Date(b.sortDate).getTime() - new Date(a.sortDate).getTime()
);

const severityColors = {
  critical: 'bg-red-500',
  high: 'bg-orange-500',
  medium: 'bg-yellow-500',
  low: 'bg-green-500',
};

export default function TimelinePage() {
  const [filter, setFilter] = useState<string>("all");
  const categories = [...new Set(timelineEvents.map(e => e.category))];
  
  const filteredEvents = filter === "all" 
    ? sortedEvents 
    : sortedEvents.filter(e => e.category === filter);

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="py-12">
          <div className="border-2 border-blood-800/50 bg-black/60 p-8 text-center">
            <div className="w-16 h-16 mx-auto mb-6 border-2 border-blood-700 bg-blood-950/30 flex items-center justify-center">
              <Calendar className="w-8 h-8 text-blood-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-4">
              INVESTIGATION TIMELINE
            </h1>
            <p className="text-zinc-400 max-w-xl mx-auto mb-4">
              A chronological record of documented crimes against the American people.
              {filteredEvents.length} events spanning {timelineEvents[timelineEvents.length-1]?.date} to present.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-blood-500">
              <AlertTriangle className="w-4 h-4" />
              <span>Click any event to view full investigation</span>
            </div>
          </div>
        </div>

        {/* Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 items-center">
            <Filter className="w-4 h-4 text-zinc-500" />
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 text-sm border transition-colors ${
                filter === "all" 
                  ? "border-blood-500 bg-blood-500/20 text-blood-400" 
                  : "border-zinc-700 text-zinc-400 hover:border-zinc-600"
              }`}
            >
              All ({sortedEvents.length})
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 text-sm border transition-colors ${
                  filter === cat 
                    ? "border-blood-500 bg-blood-500/20 text-blood-400" 
                    : "border-zinc-700 text-zinc-400 hover:border-zinc-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-zinc-800" />
          
          {filteredEvents.map((event, i) => (
            <Link 
              key={i} 
              href={`/investigations/${event.slug}`}
              className="block relative pl-20 pb-8 group"
            >
              {/* Dot */}
              <div className={`absolute left-[22px] w-[14px] h-[14px] border-2 border-zinc-600 group-hover:border-blood-500 transition-colors ${severityColors[event.severity]}`} />
              
              {/* Card */}
              <div className="border border-zinc-800 bg-zinc-900/50 p-5 hover:border-blood-500/50 hover:bg-zinc-900/80 transition-all">
                <div className="flex items-start justify-between gap-4 mb-2">
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">{event.date}</span>
                  <span className={`px-2 py-0.5 text-xs uppercase ${
                    event.severity === 'critical' ? 'bg-red-500/20 text-red-400' :
                    event.severity === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {event.severity}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white group-hover:text-blood-500 transition-colors mb-2">
                  {event.title}
                </h3>
                <p className="text-zinc-400 text-sm mb-3">{event.description}</p>
                <div className="flex flex-wrap gap-2">
                  {event.tags.map(tag => (
                    <span key={tag} className="text-xs px-2 py-1 bg-zinc-800 text-zinc-500">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
