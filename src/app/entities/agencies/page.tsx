"use client";

import { useState } from "react";
import Link from "next/link";
import { Landmark, ChevronRight, Search, Skull } from "lucide-react";
import EntityCard, { Entity } from "@/components/cards/EntityCard";

// Agency data
const agencies: Entity[] = [
  {
    id: "1",
    slug: "doj",
    name: "Department of Justice",
    type: "agency",
    description: "Under Trump, the DOJ became a weapon of political persecution. AG William Barr misrepresented the Mueller Report, intervened in Roger Stone's sentencing, and dropped charges against Michael Flynn.",
    role: "Federal Executive Department",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "2",
    slug: "dhs",
    name: "Department of Homeland Security",
    type: "agency",
    description: "Implemented the Muslim ban, family separation policy, and deployed federal agents against protesters. Stephen Miller's immigration policies traumatized thousands of children.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "3",
    slug: "ice",
    name: "Immigration and Customs Enforcement",
    type: "agency",
    description: "Conducted workplace raids, detained asylum seekers, and became the face of aggressive immigration enforcement. Multiple deaths in custody and forced sterilization allegations.",
    role: "Law Enforcement Agency",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "4",
    slug: "fbi",
    name: "Federal Bureau of Investigation",
    type: "agency",
    description: "Domestic intelligence and law enforcement agency with long history of controversial surveillance programs. Trump repeatedly attacked the FBI while director Comey investigated Russia ties.",
    role: "Intelligence & Law Enforcement",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "5",
    slug: "cia",
    name: "Central Intelligence Agency",
    type: "agency",
    description: "Foreign intelligence service with documented history of torture, black sites, and foreign government coups. MKUltra mind control experiments only scratched the surface.",
    role: "Foreign Intelligence",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "6",
    slug: "nsa",
    name: "National Security Agency",
    type: "agency",
    description: "Global surveillance apparatus exposed by Edward Snowden. PRISM program collected data on millions of Americans while bulk metadata collection violated constitutional protections.",
    role: "Signals Intelligence",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "7",
    slug: "epa",
    name: "Environmental Protection Agency",
    type: "agency",
    description: "Under Scott Pruitt and Andrew Wheeler, the EPA became a tool for industry lobbyists. Rolled back over 100 environmental regulations while suppressing climate science.",
    role: "Independent Federal Agency",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "8",
    slug: "usps",
    name: "United States Postal Service",
    type: "agency",
    description: "Louis DeJoy, a major Trump donor with conflicts of interest, removed 671 mail sorting machines before the 2020 election. An attempted sabotage of mail-in voting.",
    role: "Independent Federal Agency",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "9",
    slug: "secret-service",
    name: "United States Secret Service",
    type: "agency",
    description: "Deleted January 6th text messages. Agents paid inflated rates at Trump properties while the agency faced unprecedented costs protecting Trump's sprawling real estate empire.",
    role: "Federal Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "10",
    slug: "state-department",
    name: "U.S. Department of State",
    type: "agency",
    description: "Under Trump, career diplomats were sidelined while Giuliani conducted shadow diplomacy. Marie Yovanovitch recalled after smear campaign. Pompeo enabled Saudi arms sales despite objections.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "11",
    slug: "gsa",
    name: "General Services Administration",
    type: "agency",
    description: "Allowed Trump to profit from DC hotel lease. Emily Murphy delayed Biden transition ascertainment for weeks. Failed to enforce conflict of interest provisions.",
    role: "Independent Federal Agency",
    investigationCount: 1,
    riskLevel: "moderate",
  },
  {
    id: "12",
    slug: "treasury",
    name: "U.S. Department of the Treasury",
    type: "agency",
    description: "Mnuchin blocked Trump tax returns, granted sanctions relief to Russian oligarchs, and delivered COVID relief favoring corporations. FinCEN leaks exposed suspicious Trump transactions.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "13",
    slug: "pentagon",
    name: "U.S. Department of Defense",
    type: "agency",
    description: "National Guard deployment delayed on January 6th. Esper fired for opposing Insurrection Act. Trump installed loyalists in final weeks. Kash Patel made Chief of Staff to Acting SecDef.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "14",
    slug: "supreme-court",
    name: "Supreme Court of the United States",
    type: "agency",
    description: "Granted presidents broad immunity from prosecution, overturned Roe v. Wade, gutted voting rights. Multiple justices face ethics scandals involving unreported gifts and trips.",
    role: "Judicial Branch",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "15",
    slug: "dina",
    name: "DINA (Chilean Secret Police)",
    type: "agency",
    description: "Pinochet's secret police responsible for systematic torture, assassination, and forced disappearance. Coordinated with Operation Condor. Assassinated Orlando Letelier in Washington D.C.",
    role: "Secret Police (Dissolved)",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "16",
    slug: "savak",
    name: "SAVAK (Iranian Secret Police)",
    type: "agency",
    description: "Shah's CIA/Mossad-trained secret police estimated to have killed 100,000+ Iranians. Notorious for torture including electric shock, burning, and nail extraction. Fueled 1979 revolution.",
    role: "Secret Police (Dissolved)",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "17",
    slug: "oss",
    name: "Office of Strategic Services",
    type: "agency",
    description: "WWII intelligence agency and CIA predecessor. Recruited Nazi war criminals through Operation Paperclip. Established stay-behind networks that became far-right terror groups.",
    role: "Intelligence (Dissolved)",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "18",
    slug: "office-of-legal-counsel",
    name: "Office of Legal Counsel",
    type: "agency",
    description: "DOJ office that authored torture memos authorizing waterboarding and 'enhanced interrogation.' Created legal cover for warrantless surveillance and presidential immunity from prosecution.",
    role: "DOJ Legal Advisory",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "19",
    slug: "capitol-police",
    name: "United States Capitol Police",
    type: "agency",
    description: "Overwhelmed on January 6, 2021 despite advance intelligence warnings. Subsequent investigations revealed delayed National Guard deployment and questions about leadership decisions.",
    role: "Federal Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "20",
    slug: "atf",
    name: "Bureau of Alcohol, Tobacco, Firearms and Explosives",
    type: "agency",
    description: "Systematically weakened by NRA-backed legislation. Cannot maintain electronic gun sales database, inspect dealers adequately, or have permanent director due to gun lobby obstruction.",
    role: "Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "21",
    slug: "cbp",
    name: "Customs and Border Protection",
    type: "agency",
    description: "Largest federal law enforcement agency. Children died in custody, secret Facebook groups with racist content. Involved in family separation at border.",
    role: "Border Security",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "22",
    slug: "gru",
    name: "GRU (Russian Military Intelligence)",
    type: "agency",
    description: "Russian military intelligence responsible for 2016 DNC hack, Skripal poisonings, and election interference operations. Unit 29155 linked to assassinations across Europe.",
    role: "Foreign Intelligence",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "23",
    slug: "war-relocation-authority",
    name: "War Relocation Authority",
    type: "agency",
    description: "Administered Japanese American internment camps during WWII. Imprisoned 120,000 people without charge based solely on race. A shameful chapter in American history.",
    role: "Historical (Dissolved)",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "24",
    slug: "bop",
    name: "Federal Bureau of Prisons",
    type: "agency",
    description: "Manages 122 federal prisons. Documented failures including deaths, sexual abuse by staff, inadequate medical care. Jeffrey Epstein died under suspicious circumstances in BOP custody.",
    role: "Prison Administration",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "25",
    slug: "dea",
    name: "Drug Enforcement Administration",
    type: "agency",
    description: "Enforces federal drug laws that have disproportionately targeted minorities. The War on Drugs has imprisoned millions while failing to reduce drug use or trafficking.",
    role: "Law Enforcement",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "26",
    slug: "fsb",
    name: "FSB (Russian Federal Security Service)",
    type: "agency",
    description: "Russia's domestic security agency, successor to the KGB. Directly implicated in 2016 election interference, cyberattacks, and poisoning of dissidents including Navalny.",
    role: "Foreign Intelligence",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "27",
    slug: "hhs",
    name: "Department of Health and Human Services",
    type: "agency",
    description: "Oversees public health and social services. Under Trump, failed COVID response killed hundreds of thousands. Family separation policy traumatized children.",
    role: "Federal Executive Department",
    investigationCount: 3,
    riskLevel: "high",
  },
  {
    id: "28",
    slug: "cdc",
    name: "Centers for Disease Control and Prevention",
    type: "agency",
    description: "America's public health agency. COVID guidance overruled by Trump White House. Historically continued Tuskegee syphilis experiment until 1972.",
    role: "Public Health Agency",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "29",
    slug: "fema",
    name: "Federal Emergency Management Agency",
    type: "agency",
    description: "Coordinates disaster response. Failed Puerto Rico after Hurricane Maria - 3,000 deaths. Trump threw paper towels while citizens died.",
    role: "Disaster Response",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "30",
    slug: "fec",
    name: "Federal Election Commission",
    type: "agency",
    description: "Deliberately left without quorum by Trump to prevent campaign finance enforcement. Dark money proliferated while violations went uninvestigated.",
    role: "Independent Regulatory Agency",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "31",
    slug: "irs",
    name: "Internal Revenue Service",
    type: "agency",
    description: "Failed to properly audit Trump's returns as required by policy. Trump claimed audit prevented release for years - a lie. Returns showed minimal tax payments.",
    role: "Tax Collection",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "32",
    slug: "sec",
    name: "Securities and Exchange Commission",
    type: "agency",
    description: "Regulates securities markets. Investigated Trump Organization financial dealings, Truth Social merger. Questions about enforcement against politically connected.",
    role: "Financial Regulatory Agency",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "33",
    slug: "bia",
    name: "Bureau of Indian Affairs",
    type: "agency",
    description: "Administered genocide and forced assimilation of Native Americans. Operated boarding schools where thousands of children died. Mismanaged $137B+ in trust funds.",
    role: "Federal Administration",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "34",
    slug: "public-health-service",
    name: "U.S. Public Health Service",
    type: "agency",
    description: "Conducted Tuskegee syphilis experiment (1932-1972), deliberately withholding treatment from Black men for 40 years. Guatemala STD experiments on prisoners.",
    role: "Public Health",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "35",
    slug: "minneapolis-pd",
    name: "Minneapolis Police Department",
    type: "agency",
    description: "Officers murdered George Floyd in 2020, sparking largest protests in U.S. history. DOJ found pattern of unconstitutional excessive force and discrimination.",
    role: "Municipal Law Enforcement",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "36",
    slug: "michigan-deq",
    name: "Michigan DEQ",
    type: "agency",
    description: "Responsible for Flint water crisis catastrophe. Manipulated testing, covered up lead contamination, allowed 100,000 people to be poisoned for 18 months.",
    role: "State Environmental Agency",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "37",
    slug: "us-army",
    name: "United States Army",
    type: "agency",
    description: "Land warfare branch with history of atrocities: Native American genocide, My Lai massacre, Abu Ghraib torture, civilian casualties across wars.",
    role: "Military Branch",
    investigationCount: 4,
    riskLevel: "high",
  },
  {
    id: "38",
    slug: "dod",
    name: "Department of Defense",
    type: "agency",
    description: "Coordinates all military branches. Gulf of Tonkin lies led to Vietnam. Iraq WMD lies killed hundreds of thousands. Never passed a full audit despite trillions spent.",
    role: "Cabinet Department",
    investigationCount: 4,
    riskLevel: "extreme",
  },
  {
    id: "39",
    slug: "us-senate",
    name: "United States Senate",
    type: "agency",
    description: "Upper chamber of Congress. Filibuster blocked civil rights for decades. Refused Merrick Garland vote. Acquitted Trump twice despite overwhelming evidence.",
    role: "Legislative Body",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "40",
    slug: "manhattan-da",
    name: "Manhattan District Attorney",
    type: "agency",
    description: "Secured first criminal conviction of a former president. Trump found guilty on 34 felony counts of falsifying business records in hush money case.",
    role: "Local Prosecutorial Office",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "41",
    slug: "fulton-county-da",
    name: "Fulton County District Attorney",
    type: "agency",
    description: "Brought RICO charges against Trump and 18 co-defendants for efforts to overturn 2020 Georgia election results. Multiple defendants have pled guilty.",
    role: "Local Prosecutorial Office",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "42",
    slug: "noaa",
    name: "NOAA",
    type: "agency",
    description: "Center of 'Sharpiegate' scandal when Trump altered hurricane forecast with Sharpie. Leadership pressured to validate his false statements.",
    role: "Federal Scientific Agency",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "43",
    slug: "commerce-department",
    name: "Department of Commerce",
    type: "agency",
    description: "Under Wilbur Ross, attempted citizenship question on Census to suppress immigrant responses. Ross lied to Congress and had massive conflicts of interest.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "44",
    slug: "usaid",
    name: "USAID",
    type: "agency",
    description: "Administers foreign aid. Aid withheld from Ukraine in Trump extortion scheme. Budget cuts proposed while corruption plagued pandemic response.",
    role: "Independent Agency",
    investigationCount: 1,
    riskLevel: "moderate",
  },
  {
    id: "45",
    slug: "doi",
    name: "Department of the Interior",
    type: "agency",
    description: "Manages federal lands, Native American affairs. Dark history of genocide, boarding schools, treaty violations. BIA described as most corrupt federal agency.",
    role: "Cabinet Department",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "46",
    slug: "national-archives",
    name: "National Archives (NARA)",
    type: "agency",
    description: "Discovered Trump took classified documents to Mar-a-Lago. Attempted recovery triggered FBI investigation. Found highest classification materials.",
    role: "Independent Agency",
    investigationCount: 1,
    riskLevel: "moderate",
  },
  {
    id: "47",
    slug: "park-police",
    name: "U.S. Park Police",
    type: "agency",
    description: "Violently cleared peaceful Lafayette Square protesters with chemical agents to enable Trump's St. John's Church photo op in June 2020.",
    role: "Federal Law Enforcement",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "48",
    slug: "fda",
    name: "Food and Drug Administration",
    type: "agency",
    description: "Faced unprecedented political pressure during COVID. Trump pushed hydroxychloroquine authorization, pressured vaccine approval timing for political benefit.",
    role: "Federal Regulatory Agency",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "49",
    slug: "doe",
    name: "Department of Energy",
    type: "agency",
    description: "Led by Rick Perry who wanted to eliminate it. Promoted fossil fuels, undermined renewables. Perry involved in Ukraine energy scandal.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "50",
    slug: "usda",
    name: "Department of Agriculture",
    type: "agency",
    description: "Scientists fled after forced relocation. School lunch nutrition rolled back. Farm bailouts covered self-inflicted trade war damage.",
    role: "Federal Executive Department",
    investigationCount: 2,
    riskLevel: "moderate",
  },
];

export default function AgenciesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredAgencies = agencies.filter((agency) =>
    agency.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen pt-20 lg:pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb - Sharp */}
        <nav className="flex items-center gap-2 text-sm text-zinc-500 mb-6 pt-4">
          <Link href="/" className="hover:text-blood-600 transition-colors">Home</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/entities" className="hover:text-blood-600 transition-colors">Entities</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-blood-600">Agencies</span>
        </nav>

        {/* Header - Crystal Clear */}
        <div className="py-8">
          <div className="border-2 border-blood-800/60 bg-black/60 p-6 lg:p-8 mb-8">
            {/* Top decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <Landmark className="w-6 h-6 text-blood-600" />
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
                GOVERNMENT AGENCIES
              </h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.15em]">
                The Architects of Control
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                {agencies.length} entities documented in the archive
              </p>
            </div>

            <p className="text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
              Federal, state, and local government agencies whose policies and actions have been
              documented across our investigations. Every agency profile maps their crimes, 
              connections, and cover-ups.
            </p>
          </div>
        </div>

        {/* Search - Sharp */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search agencies..."
              className="w-full pl-12 pr-4 py-3 bg-black/60 border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAgencies.map((agency) => (
            <EntityCard key={agency.id} entity={agency} />
          ))}
        </div>

        {filteredAgencies.length === 0 && (
          <div className="border border-zinc-800 bg-black/60 p-12 text-center">
            <div className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <Skull className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">No Agencies Found</h3>
            <p className="text-zinc-500">No agencies match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
