'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Building2, 
  User, 
  Landmark,
  Users,
  Globe,
  ChevronDown,
  ChevronRight,
  Search,
  X,
  AlertTriangle,
  Filter
} from 'lucide-react';
import investigationDatabase from '@/data/investigations';
import type { InvestigationAffiliation } from '@/data/investigations/types';

interface LocationData {
  state?: string;
  city?: string;
  country: string;
  region?: 'northeast' | 'southeast' | 'midwest' | 'southwest' | 'west' | 'dc' | 'international';
}

interface EntityWithLocation {
  entity: InvestigationAffiliation;
  location: LocationData;
  investigations: string[];
}

/** 
 * Map of known entity locations (would be expanded with real data)
 * For demo, we infer from entity names and types
 */
const ENTITY_LOCATIONS: Record<string, LocationData> = {
  // Agencies - mostly DC
  'fbi': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'doj': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'cia': { city: 'Langley', state: 'VA', country: 'USA', region: 'dc' },
  'nsa': { city: 'Fort Meade', state: 'MD', country: 'USA', region: 'dc' },
  'sec': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'fec': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'congress': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'supreme court': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  'white house': { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' },
  
  // Key individuals - based on known locations
  'donald trump': { city: 'Palm Beach', state: 'FL', country: 'USA', region: 'southeast' },
  'michael cohen': { city: 'New York', state: 'NY', country: 'USA', region: 'northeast' },
  'rudy giuliani': { city: 'New York', state: 'NY', country: 'USA', region: 'northeast' },
  'paul manafort': { city: 'Alexandria', state: 'VA', country: 'USA', region: 'dc' },
  'roger stone': { city: 'Fort Lauderdale', state: 'FL', country: 'USA', region: 'southeast' },
  'michael flynn': { city: 'Alexandria', state: 'VA', country: 'USA', region: 'dc' },
  
  // Foreign entities
  'vladimir putin': { city: 'Moscow', country: 'Russia', region: 'international' },
  'gru': { city: 'Moscow', country: 'Russia', region: 'international' },
  'kremlin': { city: 'Moscow', country: 'Russia', region: 'international' },
  
  // Corporations
  'trump organization': { city: 'New York', state: 'NY', country: 'USA', region: 'northeast' },
  'deutsche bank': { city: 'Frankfurt', country: 'Germany', region: 'international' },
};

const US_STATES: Record<string, string> = {
  'AL': 'Alabama', 'AK': 'Alaska', 'AZ': 'Arizona', 'AR': 'Arkansas', 'CA': 'California',
  'CO': 'Colorado', 'CT': 'Connecticut', 'DE': 'Delaware', 'FL': 'Florida', 'GA': 'Georgia',
  'HI': 'Hawaii', 'ID': 'Idaho', 'IL': 'Illinois', 'IN': 'Indiana', 'IA': 'Iowa',
  'KS': 'Kansas', 'KY': 'Kentucky', 'LA': 'Louisiana', 'ME': 'Maine', 'MD': 'Maryland',
  'MA': 'Massachusetts', 'MI': 'Michigan', 'MN': 'Minnesota', 'MS': 'Mississippi', 'MO': 'Missouri',
  'MT': 'Montana', 'NE': 'Nebraska', 'NV': 'Nevada', 'NH': 'New Hampshire', 'NJ': 'New Jersey',
  'NM': 'New Mexico', 'NY': 'New York', 'NC': 'North Carolina', 'ND': 'North Dakota', 'OH': 'Ohio',
  'OK': 'Oklahoma', 'OR': 'Oregon', 'PA': 'Pennsylvania', 'RI': 'Rhode Island', 'SC': 'South Carolina',
  'SD': 'South Dakota', 'TN': 'Tennessee', 'TX': 'Texas', 'UT': 'Utah', 'VT': 'Vermont',
  'VA': 'Virginia', 'WA': 'Washington', 'WV': 'West Virginia', 'WI': 'Wisconsin', 'WY': 'Wyoming',
  'DC': 'District of Columbia',
};

const REGIONS: Record<string, { label: string; states: string[]; color: string }> = {
  northeast: { 
    label: 'Northeast', 
    states: ['CT', 'DE', 'MA', 'MD', 'ME', 'NH', 'NJ', 'NY', 'PA', 'RI', 'VT'],
    color: 'text-blue-400'
  },
  southeast: { 
    label: 'Southeast', 
    states: ['AL', 'AR', 'FL', 'GA', 'KY', 'LA', 'MS', 'NC', 'SC', 'TN', 'VA', 'WV'],
    color: 'text-orange-400'
  },
  midwest: { 
    label: 'Midwest', 
    states: ['IA', 'IL', 'IN', 'KS', 'MI', 'MN', 'MO', 'ND', 'NE', 'OH', 'SD', 'WI'],
    color: 'text-green-400'
  },
  southwest: { 
    label: 'Southwest', 
    states: ['AZ', 'NM', 'OK', 'TX'],
    color: 'text-red-400'
  },
  west: { 
    label: 'West', 
    states: ['AK', 'CA', 'CO', 'HI', 'ID', 'MT', 'NV', 'OR', 'UT', 'WA', 'WY'],
    color: 'text-purple-400'
  },
  dc: { 
    label: 'Washington D.C.', 
    states: ['DC'],
    color: 'text-yellow-400'
  },
  international: { 
    label: 'International', 
    states: [],
    color: 'text-cyan-400'
  },
};

const entityTypeConfig = {
  individual: { icon: User, color: 'text-blue-400' },
  agency: { icon: Landmark, color: 'text-emerald-400' },
  corporation: { icon: Building2, color: 'text-orange-400' },
  organization: { icon: Users, color: 'text-purple-400' },
};

/**
 * Infer location from entity name
 */
function inferLocation(entity: InvestigationAffiliation): LocationData {
  const nameLower = entity.name.toLowerCase();
  
  // Check known locations
  for (const [key, loc] of Object.entries(ENTITY_LOCATIONS)) {
    if (nameLower.includes(key)) {
      return loc;
    }
  }
  
  // Default agencies to DC
  if (entity.type === 'agency') {
    return { city: 'Washington', state: 'DC', country: 'USA', region: 'dc' };
  }
  
  // Default unknown to USA
  return { country: 'USA' };
}

/**
 * Aggregate entities with locations
 */
function aggregateEntityLocations(): EntityWithLocation[] {
  const entityMap = new Map<string, EntityWithLocation>();
  
  Object.entries(investigationDatabase).forEach(([slug, inv]) => {
    inv.affiliations.forEach(aff => {
      const key = aff.name.toLowerCase();
      const existing = entityMap.get(key);
      
      if (existing) {
        if (!existing.investigations.includes(slug)) {
          existing.investigations.push(slug);
        }
      } else {
        entityMap.set(key, {
          entity: aff,
          location: inferLocation(aff),
          investigations: [slug],
        });
      }
    });
  });
  
  return Array.from(entityMap.values());
}

interface RegionCardProps {
  region: string;
  config: typeof REGIONS[string];
  entities: EntityWithLocation[];
  isExpanded: boolean;
  onToggle: () => void;
}

function RegionCard({ region, config, entities, isExpanded, onToggle }: RegionCardProps) {
  return (
    <div className="glass-card border border-zinc-800">
      <button
        onClick={onToggle}
        className="w-full p-4 flex items-center gap-3 text-left hover:bg-zinc-800/10 transition-colors"
      >
        <MapPin className={`w-5 h-5 ${config.color}`} />
        <div className="flex-1">
          <div className="text-white font-semibold">{config.label}</div>
          <div className="text-xs text-zinc-500">
            {entities.length} {entities.length === 1 ? 'entity' : 'entities'}
          </div>
        </div>
        {isExpanded ? (
          <ChevronDown className="w-4 h-4 text-zinc-500" />
        ) : (
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        )}
      </button>
      
      {isExpanded && (
        <div className="border-t border-zinc-800 p-4 space-y-2">
          {entities.map((item, idx) => {
            const typeConf = entityTypeConfig[item.entity.type];
            const Icon = typeConf.icon;
            return (
              <Link
                key={idx}
                href={item.entity.href}
                className="flex items-center gap-2 p-2 bg-zinc-900/50 hover:bg-zinc-800/20 transition-colors"
              >
                <Icon className={`w-4 h-4 ${typeConf.color}`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-zinc-300 truncate">{item.entity.name}</div>
                  <div className="text-xs text-zinc-600">
                    {item.location.city && `${item.location.city}, `}
                    {item.location.state || item.location.country}
                    {' ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ '}{item.investigations.length} investigation{item.investigations.length !== 1 ? 's' : ''}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

interface GeographicMapProps {
  /** Show compact view */
  compact?: boolean;
}

export default function GeographicMap({ compact = false }: GeographicMapProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState<string | 'all'>('all');
  const [expandedRegions, setExpandedRegions] = useState<Set<string>>(new Set(['dc']));
  
  const allEntities = useMemo(() => aggregateEntityLocations(), []);
  
  const entitiesByRegion = useMemo(() => {
    const byRegion: Record<string, EntityWithLocation[]> = {};
    
    allEntities.forEach(item => {
      const region = item.location.region || 'unknown';
      if (!byRegion[region]) byRegion[region] = [];
      
      // Apply search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        if (!item.entity.name.toLowerCase().includes(q)) return;
      }
      
      byRegion[region].push(item);
    });
    
    // Sort by entity count
    Object.keys(byRegion).forEach(key => {
      byRegion[key].sort((a, b) => b.investigations.length - a.investigations.length);
    });
    
    return byRegion;
  }, [allEntities, searchQuery]);
  
  const toggleRegion = (region: string) => {
    setExpandedRegions(prev => {
      const next = new Set(prev);
      if (next.has(region)) {
        next.delete(region);
      } else {
        next.add(region);
      }
      return next;
    });
  };
  
  // Stats
  const stats = useMemo(() => ({
    total: allEntities.length,
    dc: entitiesByRegion['dc']?.length || 0,
    international: entitiesByRegion['international']?.length || 0,
    domestic: allEntities.filter(e => e.location.country === 'USA' && e.location.region !== 'dc').length,
  }), [allEntities, entitiesByRegion]);
  
  if (compact) {
    return (
      <div className="space-y-2">
        {Object.entries(REGIONS).slice(0, 4).map(([key, config]) => {
          const count = entitiesByRegion[key]?.length || 0;
          return (
            <div key={key} className="flex items-center gap-2 p-2 bg-zinc-900/50">
              <MapPin className={`w-4 h-4 ${config.color}`} />
              <span className="text-sm text-zinc-300 flex-1">{config.label}</span>
              <span className="text-xs text-zinc-500">{count}</span>
            </div>
          );
        })}
      </div>
    );
  }
  
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Globe className="w-6 h-6 text-zinc-300" />
            Geographic Distribution
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            {stats.total} entities ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ {stats.dc} in D.C. ÃƒÂ¢Ã¢â€šÂ¬Ã‚Â¢ {stats.international} international
          </p>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="glass-card border border-zinc-800 p-4">
          <div className="text-2xl font-bold text-white">{stats.total}</div>
          <div className="text-xs text-zinc-500">Total Entities</div>
        </div>
        <div className="glass-card border border-yellow-500/30 p-4">
          <div className="text-2xl font-bold text-yellow-500">{stats.dc}</div>
          <div className="text-xs text-zinc-500">Washington D.C.</div>
        </div>
        <div className="glass-card border border-blue-500/30 p-4">
          <div className="text-2xl font-bold text-blue-500">{stats.domestic}</div>
          <div className="text-xs text-zinc-500">Other U.S.</div>
        </div>
        <div className="glass-card border border-cyan-500/30 p-4">
          <div className="text-2xl font-bold text-cyan-500">{stats.international}</div>
          <div className="text-xs text-zinc-500">International</div>
        </div>
      </div>
      
      {/* Search */}
      <div className="relative max-w-md">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search entities..."
          className="w-full pl-10 pr-8 py-2 bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-zinc-600 text-sm"
        />
        {searchQuery && (
          <button
            onClick={() => setSearchQuery('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
      
      {/* Region Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {Object.entries(REGIONS).map(([key, config]) => {
          const entities = entitiesByRegion[key] || [];
          if (entities.length === 0 && searchQuery) return null;
          
          return (
            <RegionCard
              key={key}
              region={key}
              config={config}
              entities={entities}
              isExpanded={expandedRegions.has(key)}
              onToggle={() => toggleRegion(key)}
            />
          );
        })}
      </div>
      
      {Object.values(entitiesByRegion).every(arr => arr.length === 0) && (
        <div className="text-center py-12 text-zinc-500">
          <AlertTriangle className="w-8 h-8 mx-auto mb-3 opacity-50" />
          <p>No entities found matching your search</p>
        </div>
      )}
    </div>
  );
}

/**
 * Widget showing top locations
 */
export function TopLocationsWidget() {
  const entities = aggregateEntityLocations();
  const dc = entities.filter(e => e.location.region === 'dc').length;
  const intl = entities.filter(e => e.location.region === 'international').length;
  
  return (
    <div className="glass-card border border-zinc-800/30 p-4">
      <h3 className="text-sm font-semibold text-zinc-400 mb-3 flex items-center gap-2">
        <Globe className="w-4 h-4" />
        Geographic Focus
      </h3>
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-yellow-400" />
          <span className="text-sm text-zinc-300">Washington D.C.</span>
          <span className="text-xs text-zinc-500 ml-auto">{dc}</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-3 h-3 text-cyan-400" />
          <span className="text-sm text-zinc-300">International</span>
          <span className="text-xs text-zinc-500 ml-auto">{intl}</span>
        </div>
      </div>
    </div>
  );
}
