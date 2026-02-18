"use client";

import { useState } from "react";
import Link from "next/link";
import { Building2, ChevronRight, Search, Skull } from "lucide-react";
import EntityCard, { Entity } from "@/components/cards/EntityCard";

// Placeholder data
const corporations: Entity[] = [
  {
    id: "trump-org",
    slug: "trump-organization",
    name: "The Trump Organization",
    type: "corporation",
    description: "Convicted of 17 felonies. $454M fraud judgment. CFO imprisoned. Money laundering, tax fraud, hush money payments. Deutsche Bank received $2B+ despite red flags.",
    role: "Criminal Enterprise",
    investigationCount: 5,
    riskLevel: "extreme",
  },
  {
    id: "trump-media",
    slug: "trump-media",
    name: "Trump Media & Technology Group",
    type: "corporation",
    description: "DJT stock meme company operating Truth Social. Lost $58M on $4M revenue. SEC SPAC merger investigation. Trump owns 60% - valuation driven by cult following, not fundamentals.",
    role: "Social Media / SPAC Shell",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "fox-news",
    slug: "fox-news",
    name: "Fox News Media",
    type: "corporation",
    description: "Paid $787.5 million settlement to Dominion after internal documents proved hosts knew election lies were false. Tucker Carlson fired. Roger Ailes resigned over harassment.",
    role: "Disinformation Network",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "cambridge-analytica",
    slug: "cambridge-analytica",
    name: "Cambridge Analytica",
    type: "corporation",
    description: "Harvested 87 million Facebook users' data without consent. Funded by Mercer family, led by Steve Bannon. Dissolved 2018 amid scandal. Facebook fined $5 billion.",
    role: "Data Harvesting Operation (Dissolved)",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "deutsche-bank",
    slug: "deutsche-bank",
    name: "Deutsche Bank AG",
    type: "corporation",
    description: "Loaned Trump $2+ billion when no other bank would. $630M fine for Russian money laundering. Internal red flags on Trump ignored. Whistleblower found dead.",
    role: "Trump's Bank, Russian Money Laundering",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "ami",
    slug: "american-media-inc",
    name: "American Media Inc.",
    type: "corporation",
    description: "National Enquirer owner ran catch-and-kill operation for Trump. Paid Karen McDougal $150K. CEO David Pecker testified as first witness in criminal trial.",
    role: "Catch-and-Kill Operation",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "blackrock",
    slug: "blackrock",
    name: "BlackRock, Inc.",
    type: "corporation",
    description: "World's largest asset manager ($10T+ AUM). Aladdin system controls $21.6 trillion. Housing market investments driving rent increases. Government advisory conflicts.",
    role: "Asset Management Giant",
    investigationCount: 0,
    riskLevel: "high",
  },
  {
    id: "kushner-companies",
    slug: "kushner-companies",
    name: "Kushner Companies",
    type: "corporation",
    description: "Kushner family real estate empire. 666 Fifth Avenue $1.8B bailout from Qatar-linked investors while Jared was in White House. Founder Charles Kushner pardoned for witness tampering.",
    role: "Real Estate / Political Access",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "affinity-partners",
    slug: "affinity-partners",
    name: "Affinity Partners",
    type: "corporation",
    description: "Jared Kushner's PE firm received $2 billion from Saudi PIF despite advisors recommending against. Payment for services rendered while in White House. Congressional investigation ongoing.",
    role: "Saudi-Funded Private Equity",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "fraud-guarantee",
    slug: "fraud-guarantee",
    name: "Fraud Guarantee LLC",
    type: "corporation",
    description: "Lev Parnas shell company that paid Rudy Giuliani $1M for Ukraine dirt-digging. Funded by Ukrainian oligarch. Both founders convicted of campaign finance fraud.",
    role: "Shell Company / Foreign Money Conduit",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "global-energy-producers",
    slug: "global-energy-producers",
    name: "Global Energy Producers LLC",
    type: "corporation",
    description: "Shell company formed same day as $325K donation to America First PAC. No real business. Used to funnel foreign money into US elections. Part of Parnas/Fruman scheme.",
    role: "Shell Company / Straw Donor",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "lincoln-project",
    slug: "the-lincoln-project",
    name: "The Lincoln Project",
    type: "corporation",
    description: "Anti-Trump Republican PAC. John Weaver sexual harassment scandal. Questions about founder payments and spending transparency despite raising $90M+.",
    role: "Political Action Committee",
    investigationCount: 0,
    riskLevel: "moderate",
  },
  {
    id: "lockheed-martin",
    slug: "lockheed-martin",
    name: "Lockheed Martin Corporation",
    type: "corporation",
    description: "World's largest defense contractor. $40B+ in government contracts. Supplied precision-guided bombs used in Yemen school bus bombing killing 40 children. Major Saudi arms deal beneficiary.",
    role: "Defense Contractor",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "geo-group",
    slug: "geo-group",
    name: "The GEO Group, Inc.",
    type: "corporation",
    description: "Second-largest private prison company. Profits from mass incarceration. Deaths in custody, sexual abuse, forced labor. Donated $500K to Trump inauguration.",
    role: "Private Prisons / Immigration Detention",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "corecivic",
    slug: "corecivic",
    name: "CoreCivic, Inc.",
    type: "corporation",
    description: "Largest private prison operator. Changed name from CCA after scandals. Documented abuse, inadequate medical care, deaths. Profits from immigrant detention.",
    role: "Private Prisons",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "koch-industries",
    slug: "koch-industries",
    name: "Koch Industries, Inc.",
    type: "corporation",
    description: "America's 2nd largest private company. Koch family spent $1B+ funding climate denial and dark money politics. $600M+ in environmental fines. Father built refineries for Nazis.",
    role: "Oil / Chemical / Dark Money",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "palantir",
    slug: "palantir",
    name: "Palantir Technologies",
    type: "corporation",
    description: "Peter Thiel's CIA-funded surveillance company. Contracts with ICE enabling deportations, NSA, military. Predictive policing software criticized as discriminatory.",
    role: "Surveillance Technology",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "clearview-ai",
    slug: "clearview-ai",
    name: "Clearview AI",
    type: "corporation",
    description: "Scraped 30+ billion photos from internet without consent for facial recognition. Sold to law enforcement. Banned in multiple countries, fined €50M+ for privacy violations.",
    role: "Facial Recognition / Surveillance",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "halliburton",
    slug: "halliburton",
    name: "Halliburton Company",
    type: "corporation",
    description: "Dick Cheney's company received $39.5B in Iraq War no-bid contracts. KBR subsidiary electrocuted soldiers with faulty work. War profiteering exemplified.",
    role: "Defense Contractor / Oil Services",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "facebook",
    slug: "meta-platforms",
    name: "Meta Platforms (Facebook)",
    type: "corporation",
    description: "Cambridge Analytica scandal, Instagram teen mental health crisis, Myanmar genocide facilitation, election interference platform. $5B FTC fine was a slap on wrist.",
    role: "Social Media / Data Harvesting",
    investigationCount: 4,
    riskLevel: "extreme",
  },
  {
    id: "google",
    slug: "google",
    name: "Google (Alphabet Inc.)",
    type: "corporation",
    description: "World's dominant search engine. NSA PRISM collaboration, antitrust monopoly violations, mass surveillance of users. Federal court ruled it an illegal monopoly in 2024.",
    role: "Technology / Advertising Monopoly",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "amazon",
    slug: "amazon",
    name: "Amazon.com, Inc.",
    type: "corporation",
    description: "Bezos bought Washington Post while Amazon landed $600M CIA contract. Union-busting, warehouse worker deaths, Alexa surveillance. Ring police partnerships.",
    role: "E-Commerce / Cloud / Media",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "att",
    slug: "att",
    name: "AT&T Inc.",
    type: "corporation",
    description: "Key NSA surveillance partner since 2001. Room 641A provided warrantless access to communications. Granted retroactive immunity for illegal wiretapping.",
    role: "Telecommunications / Surveillance",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "tiktok",
    slug: "tiktok",
    name: "TikTok (ByteDance)",
    type: "corporation",
    description: "Chinese-owned social media facing national security concerns. Potential CCP data access, algorithmic manipulation, censorship of content critical of China.",
    role: "Social Media",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "purdue-pharma",
    slug: "purdue-pharma",
    name: "Purdue Pharma",
    type: "corporation",
    description: "Sackler family company that sparked the opioid epidemic killing 500,000+ Americans. Knew OxyContin was addictive, marketed it aggressively anyway. Bankruptcy to escape accountability.",
    role: "Pharmaceutical (Dissolved)",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "exxonmobil",
    slug: "exxonmobil",
    name: "ExxonMobil Corporation",
    type: "corporation",
    description: "Knew about climate change since 1970s, funded denial campaigns for 40 years. Rex Tillerson became Secretary of State. Valdez spill devastated Alaska.",
    role: "Oil & Gas",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "raytheon",
    slug: "raytheon",
    name: "Raytheon Technologies",
    type: "corporation",
    description: "Major defense contractor. Tomahawk missiles, Patriot systems, Javelin anti-tank weapons. Supplied bombs used in Yemen civilian massacres including school bus attack.",
    role: "Defense Contractor",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "boeing",
    slug: "boeing",
    name: "The Boeing Company",
    type: "corporation",
    description: "737 MAX crashes killed 346 people. Covered up design flaws. Weaponry supplied for Yemen war. DOJ deferred prosecution deal. CEO departed with $62M.",
    role: "Aerospace / Defense",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "equifax",
    slug: "equifax",
    name: "Equifax Inc.",
    type: "corporation",
    description: "2017 breach exposed data of 147 million Americans. Executives sold stock before disclosure. Controls credit scores affecting billions. $700M settlement.",
    role: "Credit Reporting / Data Broker",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "wells-fargo",
    slug: "wells-fargo",
    name: "Wells Fargo & Company",
    type: "corporation",
    description: "Employees created 3.5 million fake accounts to meet sales quotas. Foreclosed on homes using fraudulent documents. $3B+ in fines. Preyed on minority communities.",
    role: "Banking / Financial Services",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "jp-morgan",
    slug: "jp-morgan-chase",
    name: "JPMorgan Chase & Co.",
    type: "corporation",
    description: "Largest U.S. bank. Epstein accounts maintained despite red flags. Robo-signing mortgage fraud. Billions in fines. 'Fortress balance sheet' built on predatory practices.",
    role: "Banking / Financial Services",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "goldman-sachs",
    slug: "goldman-sachs",
    name: "Goldman Sachs Group, Inc.",
    type: "corporation",
    description: "2008 crisis profiteers - bet against securities they sold clients. 1MDB Malaysian scandal. SEC fraud settlement. 'Vampire squid' of Wall Street.",
    role: "Investment Banking",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "ira",
    slug: "internet-research-agency",
    name: "Internet Research Agency",
    type: "corporation",
    description: "Russian troll farm that ran 2016 election interference operation. Created fake American personas, organized real protests. Prigozhin funded before Wagner Group.",
    role: "Disinformation / Election Interference",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "twitter",
    slug: "twitter-x",
    name: "Twitter / X Corp",
    type: "corporation",
    description: "Elon Musk destroyed content moderation, reinstated banned accounts including Trump. Platform for election disinformation. 80% staff cut.",
    role: "Social Media",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "juul",
    slug: "juul-labs",
    name: "Juul Labs",
    type: "corporation",
    description: "Created teen nicotine epidemic with flavored pods and youth-targeted marketing. FDA finally banned. Altria paid $13B for stake, wrote it down to zero.",
    role: "E-Cigarettes / Tobacco",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "monsanto",
    slug: "monsanto",
    name: "Monsanto (Bayer)",
    type: "corporation",
    description: "Produced Agent Orange (Vietnam), Roundup (cancer-causing), PCBs, DDT. $10B+ Roundup settlements. Sued farmers for patent infringement on seeds that blew onto their land.",
    role: "Agriculture / Chemical (Acquired)",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "johnson-johnson",
    slug: "johnson-and-johnson",
    name: "Johnson & Johnson",
    type: "corporation",
    description: "Knew baby powder contained asbestos, sold it anyway. Opioid settlement. Talc bankruptcy scheme to avoid liability. 'Family company' poisoned families.",
    role: "Pharmaceutical / Consumer Products",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "pg",
    slug: "procter-gamble",
    name: "Procter & Gamble",
    type: "corporation",
    description: "Consumer products giant with history of environmental violations, animal testing controversies, and labor issues in supply chain.",
    role: "Consumer Products",
    investigationCount: 1,
    riskLevel: "moderate",
  },
  {
    id: "walmart",
    slug: "walmart",
    name: "Walmart Inc.",
    type: "corporation",
    description: "World's largest retailer. Opioid dispensing scandal. Union-busting. Poverty wages subsidized by taxpayers ($6B/year in public assistance for employees).",
    role: "Retail",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "mckesson",
    slug: "mckesson",
    name: "McKesson Corporation",
    type: "corporation",
    description: "Drug distributor that shipped 14.1M opioid pills to single West Virginia town. $8B+ opioid settlement. DEA flagged suspicious orders ignored.",
    role: "Pharmaceutical Distribution",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "cardinal-health",
    slug: "cardinal-health",
    name: "Cardinal Health, Inc.",
    type: "corporation",
    description: "Opioid distributor that flooded communities with pills. Part of Big Three that distributed 76B pills over 6 years. Multi-billion settlement.",
    role: "Pharmaceutical Distribution",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "amerisource",
    slug: "amerisourcebergen",
    name: "AmerisourceBergen (Cencora)",
    type: "corporation",
    description: "Opioid distributor that ignored red flags to maximize profits. Part of $21B opioid settlement with states. Changed name to Cencora to escape reputation.",
    role: "Pharmaceutical Distribution",
    investigationCount: 1,
    riskLevel: "extreme",
  },
  {
    id: "united-health",
    slug: "unitedhealth-group",
    name: "UnitedHealth Group",
    type: "corporation",
    description: "Largest health insurer. Navistar algorithm denied claims automatically. CEO Brian Thompson assassinated 2024. Record profits while denying coverage.",
    role: "Health Insurance",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "pfizer",
    slug: "pfizer",
    name: "Pfizer Inc.",
    type: "corporation",
    description: "Record $2.3B fraud settlement. Illegal drug marketing. Nigerian meningitis trials killed children. COVID vaccine profits while blocking global access.",
    role: "Pharmaceutical",
    investigationCount: 2,
    riskLevel: "high",
  },
  {
    id: "hsbc",
    slug: "hsbc",
    name: "HSBC Holdings plc",
    type: "corporation",
    description: "Laundered $881M for Mexican drug cartels. Deferred prosecution deal - no executives jailed. 'Too big to jail' precedent. Sanctions violations.",
    role: "Banking",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "saudi-aramco",
    slug: "saudi-aramco",
    name: "Saudi Aramco",
    type: "corporation",
    description: "World's most profitable company. State-owned oil giant. Climate change driver. Funds regime that murdered Khashoggi. $2T+ valuation.",
    role: "Oil & Gas (State-Owned)",
    investigationCount: 2,
    riskLevel: "extreme",
  },
  {
    id: "nestle",
    slug: "nestle",
    name: "Nestlé S.A.",
    type: "corporation",
    description: "Baby formula marketing killed millions in developing countries. Child labor in cocoa supply chain. Water privatization. 'Water is not a human right' - former CEO.",
    role: "Food & Beverage",
    investigationCount: 3,
    riskLevel: "extreme",
  },
  {
    id: "general-dynamics",
    slug: "general-dynamics",
    name: "General Dynamics Corporation",
    type: "corporation",
    description: "Defense contractor building tanks, submarines, weapons systems. Supplied munitions used in Yemen war. Pentagon revolving door beneficiary.",
    role: "Defense Contractor",
    investigationCount: 1,
    riskLevel: "high",
  },
  {
    id: "northrop",
    slug: "northrop-grumman",
    name: "Northrop Grumman",
    type: "corporation",
    description: "Defense contractor building B-21 bomber, drones, cyber weapons. Part of military-industrial complex Eisenhower warned about.",
    role: "Defense Contractor",
    investigationCount: 1,
    riskLevel: "high",
  },
];

export default function CorporationsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  
  const filteredCorporations = corporations.filter((corp) =>
    corp.name.toLowerCase().includes(searchQuery.toLowerCase())
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
          <span className="text-blood-600">Corporations</span>
        </nav>

        {/* Header - Crystal Clear */}
        <div className="py-8">
          <div className="border-2 border-blood-800/60 bg-black/60 p-6 lg:p-8 mb-8">
            {/* Top decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <span className="h-[2px] flex-1 bg-gradient-to-r from-blood-700 to-transparent" />
              <Building2 className="w-6 h-6 text-blood-600" />
              <span className="h-[2px] flex-1 bg-gradient-to-l from-blood-700 to-transparent" />
            </div>

            <div className="text-center mb-6">
              <h1 className="text-3xl lg:text-4xl font-black text-white uppercase tracking-wider mb-2">
                CORPORATIONS
              </h1>
              <p className="text-lg text-blood-600 font-bold uppercase tracking-[0.15em]">
                Profit Over People
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                {corporations.length} entities documented in the archive
              </p>
            </div>

            <p className="text-zinc-400 text-center max-w-2xl mx-auto leading-relaxed">
              Companies that have placed shareholder value above human life. Big Pharma, 
              Big Tech, defense contractors, and more. Their crimes documented, their 
              connections exposed.
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
              placeholder="Search corporations..."
              className="w-full pl-12 pr-4 py-3 bg-black/60 border-2 border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-blood-700 transition-colors"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCorporations.map((corp) => (
            <EntityCard key={corp.id} entity={corp} />
          ))}
        </div>

        {filteredCorporations.length === 0 && (
          <div className="border border-zinc-800 bg-black/60 p-12 text-center">
            <div className="w-16 h-16 border-2 border-zinc-700 flex items-center justify-center mx-auto mb-4">
              <Skull className="w-8 h-8 text-zinc-600" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wider">No Corporations Found</h3>
            <p className="text-zinc-500">No corporations match your search criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}
