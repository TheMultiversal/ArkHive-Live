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
    name: 'CIA (Organizational Analysis)',
    slug: 'cia-organization',
    type: 'Intelligence Agency',
    description: 'Central Intelligence Agency - decades of coups, torture, and illegal operations',
    riskLevel: 'critical' as const,
    members: '21,500+',
  },
  {
    name: 'FBI (Organizational Analysis)',
    slug: 'fbi-organization',
    type: 'Law Enforcement',
    description: 'Federal Bureau of Investigation - COINTELPRO, civil liberties violations',
    riskLevel: 'critical' as const,
    members: '35,000+',
  },
  {
    name: 'NSA (Organizational Analysis)',
    slug: 'nsa-organization',
    type: 'Intelligence Agency',
    description: 'National Security Agency - mass surveillance of American citizens',
    riskLevel: 'critical' as const,
    members: '40,000+',
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
];

const riskColors = {
  critical: { bg: 'bg-red-500/20', border: 'border-red-500', text: 'text-red-500' },
  high: { bg: 'bg-orange-500/20', border: 'border-orange-500', text: 'text-orange-500' },
  medium: { bg: 'bg-yellow-500/20', border: 'border-yellow-500', text: 'text-yellow-500' },
  low: { bg: 'bg-green-500/20', border: 'border-green-500', text: 'text-green-500' },
};

export default function OrganizationsPage() {
  return (
    <div className="min-h-screen bg-black text-white p-8">
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
