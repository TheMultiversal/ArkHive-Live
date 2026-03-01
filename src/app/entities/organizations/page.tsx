'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Network, ArrowRight, AlertTriangle, Users, Target, DollarSign } from 'lucide-react';
import GlitchText from '@/components/effects/GlitchText';

const organizations = [
  {
    name: 'Federalist Society',
    slug: 'federalist-society',
    type: 'Legal Organization',
    description: 'Conservative legal organization that vets federal judicial nominees',
    riskLevel: 'critical' as const,
    members: '70,000+',
  },
  {
    name: 'Heritage Foundation',
    slug: 'heritage-foundation',
    type: 'Think Tank',
    description: 'Conservative think tank behind Project 2025',
    riskLevel: 'critical' as const,
    members: 'Unknown',
  },
  {
    name: 'Project 2025',
    slug: 'project-2025',
    type: 'Political Initiative',
    description: 'Blueprint for authoritarian transformation of U.S. government',
    riskLevel: 'critical' as const,
    members: '100+ organizations',
  },
  {
    name: 'Wagner Group',
    slug: 'wagner-group',
    type: 'Private Military Company',
    description: 'Russian paramilitary organization accused of war crimes',
    riskLevel: 'critical' as const,
    members: '50,000+',
  },
  {
    name: 'Council on Foreign Relations',
    slug: 'council-on-foreign-relations',
    type: 'Think Tank',
    description: 'Elite foreign policy organization',
    riskLevel: 'high' as const,
    members: '5,000+',
  },
  {
    name: 'Trilateral Commission',
    slug: 'trilateral-commission',
    type: 'Policy Discussion Group',
    description: 'Global elite policy coordination forum',
    riskLevel: 'high' as const,
    members: '400+',
  },
  {
    name: 'Bilderberg Group',
    slug: 'bilderberg-group',
    type: 'Annual Conference',
    description: 'Secretive annual meeting of Western elites',
    riskLevel: 'high' as const,
    members: '150 invitees annually',
  },
  {
    name: 'ALEC',
    slug: 'alec',
    type: 'Legislative Organization',
    description: 'American Legislative Exchange Council - writes model legislation for corporations',
    riskLevel: 'critical' as const,
    members: '2,000+ legislators',
  },
  {
    name: 'Americans for Prosperity',
    slug: 'americans-for-prosperity',
    type: 'Political Advocacy',
    description: 'Koch-funded political advocacy organization',
    riskLevel: 'high' as const,
    members: '3 million claimed',
  },
  {
    name: 'Black Panther Party',
    slug: 'black-panther-party',
    type: 'Political Organization (Historical)',
    description: 'Revolutionary Black socialist organization targeted by COINTELPRO',
    riskLevel: 'low' as const,
    members: '10,000 peak',
  },
  {
    name: 'Proud Boys',
    slug: 'proud-boys',
    type: 'Extremist Organization',
    description: 'Far-right extremist group central to January 6 attack',
    riskLevel: 'critical' as const,
    members: 'Unknown',
  },
  {
    name: 'Oath Keepers',
    slug: 'oath-keepers',
    type: 'Extremist Organization',
    description: 'Anti-government militia group, leaders convicted of seditious conspiracy',
    riskLevel: 'critical' as const,
    members: '38,000 claimed',
  },
  {
    name: 'Operation Condor',
    slug: 'operation-condor',
    type: 'Intelligence Operation (Historical)',
    description: 'CIA-backed assassination network of South American dictatorships',
    riskLevel: 'critical' as const,
    members: '6 nations',
  },
  {
    name: 'World Economic Forum',
    slug: 'world-economic-forum',
    type: 'International Organization',
    description: 'Annual gathering of global elites in Davos',
    riskLevel: 'medium' as const,
    members: '1,000+ members',
  },
  {
    name: 'Trump Organization',
    slug: 'trump-organization',
    type: 'Business Conglomerate',
    description: 'Trump family business empire, convicted of tax fraud',
    riskLevel: 'critical' as const,
    members: '22,450 employees',
  },
  {
    name: 'Republican Party',
    slug: 'republican-party',
    type: 'Political Party',
    description: 'Major U.S. political party, increasingly aligned with far-right extremism',
    riskLevel: 'critical' as const,
    members: '35.7 million registered',
  },
  {
    name: 'Democratic Party',
    slug: 'democratic-party',
    type: 'Political Party',
    description: 'Major U.S. political party, complicit in corporate governance and militarism',
    riskLevel: 'high' as const,
    members: '48.5 million registered',
  },
  {
    name: 'National Rifle Association',
    slug: 'nra',
    type: 'Advocacy Organization',
    description: 'Gun rights lobbying group blocking all firearms reform despite mass shootings',
    riskLevel: 'critical' as const,
    members: '4.3 million claimed',
  },
  {
    name: 'Fraternal Order of Police',
    slug: 'fraternal-order-of-police',
    type: 'Police Union',
    description: 'Largest police union blocking accountability and reform',
    riskLevel: 'high' as const,
    members: '356,000',
  },

  {
    name: 'ICE',
    slug: 'ice',
    type: 'Law Enforcement',
    description: 'Immigration and Customs Enforcement - family separation, detention abuses',
    riskLevel: 'critical' as const,
    members: '20,000+',
  },
  {
    name: 'CBP',
    slug: 'cbp',
    type: 'Law Enforcement',
    description: 'Customs and Border Protection - deaths, abuse, constitutional violations',
    riskLevel: 'critical' as const,
    members: '60,000+',
  },
  {
    name: 'Private Prison Industry',
    slug: 'private-prison-industry',
    type: 'Industry Coalition',
    description: 'CoreCivic, GEO Group and others profiting from mass incarceration',
    riskLevel: 'critical' as const,
    members: '2 major companies',
  },
  {
    name: 'Ku Klux Klan',
    slug: 'ku-klux-klan',
    type: 'Domestic Terror Organization',
    description: 'White supremacist terror organization with long history of violence',
    riskLevel: 'critical' as const,
    members: '5,000-8,000 estimated',
  },
  {
    name: 'Three Percenters',
    slug: 'three-percenters',
    type: 'Militia Movement',
    description: 'Anti-government extremist militia movement involved in January 6',
    riskLevel: 'critical' as const,
    members: 'Unknown',
  },
  {
    name: 'QAnon Movement',
    slug: 'qanon',
    type: 'Conspiracy Movement',
    description: 'Far-right conspiracy cult promoting political violence',
    riskLevel: 'critical' as const,
    members: 'Millions of adherents',
  },
  {
    name: 'John Birch Society',
    slug: 'john-birch-society',
    type: 'Political Organization',
    description: 'Far-right anti-communist organization with extremist ideology',
    riskLevel: 'high' as const,
    members: 'Unknown',
  },
  {
    name: 'Turning Point USA',
    slug: 'turning-point-usa',
    type: 'Political Advocacy',
    description: 'Conservative youth organization promoting far-right ideology',
    riskLevel: 'high' as const,
    members: '500,000 claimed',
  },
  {
    name: 'Newsmax',
    slug: 'newsmax',
    type: 'Media Organization',
    description: 'Right-wing media outlet spreading election disinformation',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'One America News',
    slug: 'one-america-news',
    type: 'Media Organization',
    description: 'Far-right media outlet promoting election conspiracy theories',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'Sinclair Broadcast Group',
    slug: 'sinclair-broadcast-group',
    type: 'Media Conglomerate',
    description: 'Conservative media empire forcing political content on local news',
    riskLevel: 'high' as const,
    members: '190+ TV stations',
  },
  {
    name: 'Fox Corporation',
    slug: 'fox-corporation',
    type: 'Media Conglomerate',
    description: 'Parent company of Fox News, settled election defamation for $787.5 million',
    riskLevel: 'critical' as const,
    members: '9,000+ employees',
  },
  {
    name: 'Blackwater/Academi',
    slug: 'blackwater',
    type: 'Private Military Company',
    description: 'Notorious private military contractor involved in war crimes',
    riskLevel: 'critical' as const,
    members: 'Varies by contract',
  },
  {
    name: 'Palantir Technologies',
    slug: 'palantir',
    type: 'Surveillance Corporation',
    description: 'Surveillance technology company enabling ICE deportations and military ops',
    riskLevel: 'high' as const,
    members: '3,500+ employees',
  },
  {
    name: 'Clearview AI',
    slug: 'clearview-ai',
    type: 'Surveillance Corporation',
    description: 'Facial recognition company scraping billions of images without consent',
    riskLevel: 'critical' as const,
    members: 'Small startup',
  },
  {
    name: 'American Civil Liberties Union',
    slug: 'aclu',
    type: 'Civil Rights Organization',
    description: 'Nonprofit civil liberties organization that defends constitutional rights through litigation and lobbying',
    riskLevel: 'low' as const,
    members: '1.8 million+',
  },
  {
    name: 'Alliance Defending Freedom',
    slug: 'alliance-defending-freedom',
    type: 'Christian Legal Organization',
    description: 'Conservative Christian legal organization designated a hate group by the SPLC',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'American Enterprise Institute',
    slug: 'american-enterprise-institute',
    type: 'Conservative Think Tank',
    description: 'Conservative think tank focusing on government, politics, economics, and social welfare',
    riskLevel: 'medium' as const,
    members: 'N/A',
  },
  {
    name: 'American Petroleum Institute',
    slug: 'american-petroleum-institute',
    type: 'Oil Industry Trade Association',
    description: 'Largest trade association representing the U.S. oil and gas industry, funding climate denial for decades',
    riskLevel: 'critical' as const,
    members: '600+ member companies',
  },
  {
    name: 'Chinese Communist Party',
    slug: 'chinese-communist-party',
    type: 'Political Party / Government',
    description: 'Founding and sole ruling party of the People\'s Republic of China',
    riskLevel: 'critical' as const,
    members: '98 million+',
  },
  {
    name: 'U.S. Chamber of Commerce',
    slug: 'us-chamber-of-commerce',
    type: 'Business Lobbying Organization',
    description: 'Largest lobbying group in America, fighting labor rights and environmental regulations',
    riskLevel: 'high' as const,
    members: '3 million+ businesses',
  },
  {
    name: 'Donors Trust',
    slug: 'donors-trust',
    type: 'Dark Money Conduit',
    description: 'Donor-advised funds serving as the primary dark money conduits for the Koch network',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'Family Research Council',
    slug: 'family-research-council',
    type: 'Christian Right Organization',
    description: 'Conservative Christian lobbying organization designated as an anti-LGBTQ hate group by the SPLC',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'Heartland Institute',
    slug: 'heartland-institute',
    type: 'Climate Denial Think Tank',
    description: 'Libertarian think tank infamous for climate change denial, previously funded by tobacco companies',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'Internet Research Agency',
    slug: 'internet-research-agency',
    type: 'Russian Troll Farm',
    description: 'Russian troll farm that conducted information warfare to interfere in the 2016 U.S. election',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'House January 6th Committee',
    slug: 'january-6-committee',
    type: 'Congressional Investigation',
    description: 'Bipartisan congressional committee that investigated the January 6th attack on the U.S. Capitol',
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    name: 'North Atlantic Treaty Organization',
    slug: 'nato',
    type: 'Military Alliance',
    description: 'Military alliance of 32 North American and European countries for collective security',
    riskLevel: 'low' as const,
    members: '32 member countries',
  },
  {
    name: 'World Health Organization',
    slug: 'who',
    type: 'International Health Agency',
    description: 'UN specialized agency responsible for international public health',
    riskLevel: 'low' as const,
    members: '194 member states',
  },
  {
    name: 'International Monetary Fund',
    slug: 'imf',
    type: 'International Financial Institution',
    description: 'International organization providing loans to countries experiencing financial difficulties',
    riskLevel: 'medium' as const,
    members: '190 member countries',
  },
  {
    name: 'World Bank',
    slug: 'world-bank',
    type: 'International Financial Institution',
    description: 'International institution providing loans and grants to developing countries',
    riskLevel: 'medium' as const,
    members: '189 member countries',
  },
  {
    name: 'Republican National Committee',
    slug: 'rnc',
    type: 'Political Party',
    description: 'Governing body of the Republican Party',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'Open Society Foundations',
    slug: 'open-society-foundations',
    type: 'Philanthropic Organization',
    description: 'Grantmaking network founded by George Soros supporting civil society and democracy worldwide',
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    name: 'PhRMA',
    slug: 'phrma',
    type: 'Pharmaceutical Industry Lobby',
    description: 'Lobbying group for the pharmaceutical industry, opposing drug pricing reform',
    riskLevel: 'high' as const,
    members: 'Major pharmaceutical companies',
  },
  {
    name: 'Wuhan Institute of Virology',
    slug: 'wuhan-institute-of-virology',
    type: 'Research Institution',
    description: 'Chinese research institution central to questions about COVID-19 origins',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    name: 'EcoHealth Alliance',
    slug: 'ecohealth-alliance',
    type: 'Research Organization',
    description: 'Nonprofit that funneled NIH grant money to the Wuhan Institute of Virology for coronavirus research',
    riskLevel: 'medium' as const,
    members: 'N/A',
  },
  {
    name: 'British Royal Family',
    slug: 'british-royal-family',
    type: 'Monarchy',
    description: 'Family of the reigning monarch of the United Kingdom, implicated in covering up Prince Andrew connections',
    riskLevel: 'medium' as const,
    members: 'N/A',
  },
  {
    name: 'Confucius Institutes',
    slug: 'confucius-institute',
    type: 'Cultural/Propaganda Organization',
    description: 'Chinese government-funded cultural centers at universities criticized as propaganda tools',
    riskLevel: 'high' as const,
    members: '500+ institutes worldwide (declining)',
  },
  {
    name: 'National Endowment for Democracy',
    slug: 'national-endowment-for-democracy',
    type: 'Pro-Democracy Organization',
    description: 'U.S. nonprofit providing grants to support democratic movements worldwide',
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    name: 'International Committee of the Red Cross',
    slug: 'icrc',
    type: 'Humanitarian Organization',
    description: 'Humanitarian organization that protects victims of armed conflict',
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    name: 'United Nations Security Council',
    slug: 'un-security-council',
    type: 'International Body',
    description: 'UN body responsible for international peace and security with five permanent veto-holding members',
    riskLevel: 'medium' as const,
    members: '15 members (5 permanent)',
  },
  {
    name: 'Johns Hopkins University',
    slug: 'johns-hopkins',
    type: 'University',
    description: 'Private research university known for its medical school and COVID-19 tracking dashboard',
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    name: 'Tuskegee Syphilis Study',
    slug: 'tuskegee-institute',
    type: 'Historical Medical Abuse',
    description: 'Unethical U.S. Public Health Service experiment that deliberately left Black men with syphilis untreated',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'Standing Rock Sioux Tribe',
    slug: 'standing-rock',
    type: 'Native American Tribe',
    description: 'Led resistance to the Dakota Access Pipeline, bringing global attention to indigenous rights',
    riskLevel: 'low' as const,
    members: '16,000+ enrolled members',
  },
  {
    name: 'Rosebud Sioux Tribe',
    slug: 'rosebud-sioux',
    type: 'Native American Tribe',
    description: 'Federally recognized tribe in South Dakota facing challenges from poverty and lack of infrastructure',
    riskLevel: 'low' as const,
    members: '35,000+ enrolled members',
  },
  {
    name: 'Kingdom of Saudi Arabia',
    slug: 'saudi-arabia',
    type: 'Government',
    description: 'Absolute monarchy committing severe human rights violations including the murder of Jamal Khashoggi',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'Central Intelligence Agency',
    slug: 'cia',
    type: 'Intelligence Agency',
    description: 'Foreign intelligence service with history of overthrowing governments, torture programs, drug trafficking, MKULTRA mind control experiments, and illegal domestic surveillance',
    riskLevel: 'critical' as const,
    members: '21,000+ employees',
  },
  {
    name: 'Federal Bureau of Investigation',
    slug: 'fbi-org',
    type: 'Law Enforcement Agency',
    description: 'Domestic intelligence and security service that conducted COINTELPRO  -  systematic campaign to surveil, infiltrate, and destroy civil rights and anti-war movements',
    riskLevel: 'critical' as const,
    members: '35,000+ employees',
  },
  {
    name: 'National Security Agency',
    slug: 'nsa-org',
    type: 'Intelligence Agency',
    description: 'Signals intelligence agency whose mass surveillance programs were exposed by Edward Snowden  -  collecting data on every American phone call, email, and internet activity',
    riskLevel: 'critical' as const,
    members: '30,000-40,000 employees',
  },
  {
    name: 'American Petroleum Institute',
    slug: 'api',
    type: 'Oil Industry Trade Association',
    description: 'Oil industry trade group that has funded climate disinformation campaigns for decades',
    riskLevel: 'critical' as const,
    members: '600+ member companies',
  },
  {
    name: 'Chinese Communist Party',
    slug: 'ccp',
    type: 'Political Party / Government',
    description: 'Ruling party of China engaged in Uyghur genocide, Hong Kong crackdown, Taiwan threats, and massive cyber espionage',
    riskLevel: 'critical' as const,
    members: '98 million+',
  },
  {
    name: 'Government of China',
    slug: 'china-gov',
    type: 'Government',
    description: 'CCP-controlled government engaged in genocide, surveillance state operations, and suppression of COVID-19 origins information',
    riskLevel: 'critical' as const,
    members: 'N/A',
  },
  {
    name: 'U.S. Chamber of Commerce',
    slug: 'chamber-of-commerce',
    type: 'Business Lobbying Organization',
    description: 'Largest lobbying group in America. Fights labor rights, environmental regulations, and consumer protections while hiding corporate funders',
    riskLevel: 'high' as const,
    members: '3 million+ businesses',
  },
  {
    name: 'U.S. Chamber of Commerce',
    slug: 'us-chamber',
    type: 'Business Lobbying Organization',
    description: 'Largest dark money spender in American politics, representing corporate interests in government',
    riskLevel: 'high' as const,
    members: '3 million+ businesses',
  },
  {
    name: 'Fraternal Order of Police',
    slug: 'fop',
    type: 'Police Union',
    description: 'Largest police union in the U.S. that consistently opposes police accountability measures and defends officers accused of misconduct',
    riskLevel: 'medium' as const,
    members: '350,000+ members',
  },
  {
    name: 'World Economic Forum',
    slug: 'wef',
    type: 'International Organization',
    description: 'International organization hosting annual Davos meetings of global elites. Subject of numerous conspiracy theories',
    riskLevel: 'medium' as const,
    members: '1,000+ member companies',
  },
  {
    name: 'Wuhan Institute of Virology',
    slug: 'wuhan-institute-virology',
    type: 'Research Institution',
    description: 'Chinese research laboratory at the center of COVID-19 lab leak hypothesis investigations',
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    id: "terramar-ep",
    slug: "terramar",
    name: "TerraMar Project",
    type: "organization",
    description: "Ghislaine Maxwell's ocean conservation charity that closed days after Epstein's 2019 arrest. Used to provide Maxwell nonprofit credibility, travel justification, and access to influential circles incl...",
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    id: "clinton-foundation-ep",
    slug: "clinton-foundation",
    name: "Clinton Foundation",
    type: "organization",
    description: "The Clinton Foundation's connection to Epstein extended through Bill Clinton's personal relationship. Clinton flew on the Lolita Express for African charity trips. Epstein visited the Clinton White Ho...",
    riskLevel: 'medium' as const,
    members: 'N/A',
  },
  {
    id: "cfr-ep",
    slug: "cfr",
    name: "Council on Foreign Relations",
    type: "organization",
    description: "Elite foreign policy think tank. Epstein was a member and used it to network with powerful political and business figures, providing legitimacy and institutional cover....",
    riskLevel: 'low' as const,
    members: '5,000+',
  },
  {
    id: "edge-foundation-ep",
    slug: "edge-foundation",
    name: "Edge Foundation",
    type: "organization",
    description: "Founded by John Brockman, the Edge Foundation was the primary intellectual networking hub that connected Epstein to world-class scientists. Hosted annual dinners and conferences that Epstein funded. B...",
    riskLevel: 'high' as const,
    members: 'N/A',
  },
  {
    id: "epstein-vcf-ep",
    slug: "epstein-vcf",
    name: "Epstein Victims' Compensation Fund",
    type: "organization",
    description: "Established in 2020 to compensate Epstein's victims from his estate. Managed by Jordana Feldman. Distributed $125M+ to 150+ claimants. Estate valued at $634M at death....",
    riskLevel: 'low' as const,
    members: 'N/A',
  },
  {
    id: "santa-fe-institute-ep",
    slug: "santa-fe-institute",
    name: "Santa Fe Institute",
    type: "organization",
    description: "Leading complexity science research center. Epstein was a donor with connections through Murray Gell-Mann and other scientists....",
    riskLevel: 'low' as const,
    members: '200+ researchers',
  },
  {
    id: "nyas-ep",
    slug: "nyas",
    name: "New York Academy of Sciences",
    type: "organization",
    description: "Epstein used connections to scientific institutions including NYAS to build a philanthropist image concealing his activities....",
    riskLevel: 'low' as const,
    members: '20,000+',
  },
  {
    id: "united-nations-ep",
    slug: "united-nations",
    name: "United Nations",
    type: "organization",
    description: "Ghislaine Maxwell used the TerraMar Project to gain access to the UN and international diplomatic circles. She spoke at UN events and cultivated relationships with diplomats....",
    riskLevel: 'low' as const,
    members: '193 member states',
  },
];

const riskColors = {
  critical: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-500' },
  high: { bg: 'bg-orange-500/20', border: 'border-orange-500', text: 'text-orange-500' },
  medium: { bg: 'bg-yellow-500/20', border: 'border-yellow-500', text: 'text-yellow-500' },
  low: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-500' },
};

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-4 mb-4">
            <Network className="w-12 h-12 text-blood-500" />
            <GlitchText
              text="ORGANIZATIONS"
              className="text-4xl font-bold tracking-wider"
            />
          </div>
          <p className="text-zinc-400 max-w-3xl">
            Organizations, think tanks, advocacy groups, and networks that shape policy, 
            coordinate power, and operate in the shadows. Follow the connections.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {organizations.map((org, index) => (
            <motion.div
              key={org.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link href={`/entities/organizations/${org.slug}`}>
                <div className="glass-card p-6 h-full hover:border-blood-500 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Network className="w-6 h-6 text-blood-500" />
                      <span className={`text-xs px-2 py-1 ${riskColors[org.riskLevel].bg} ${riskColors[org.riskLevel].border} border ${riskColors[org.riskLevel].text}`}>
                        {org.riskLevel.toUpperCase()}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 text-zinc-500 group-hover:text-blood-500 transition-colors" />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-blood-500 transition-colors">
                    {org.name}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 mb-3">{org.type}</p>
                  
                  <p className="text-sm text-zinc-400 mb-4 line-clamp-2">
                    {org.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-zinc-500">
                    <Users className="w-4 h-4" />
                    <span>{org.members}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
