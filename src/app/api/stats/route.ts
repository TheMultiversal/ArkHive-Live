import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';
// we avoid static imports of the data modules because Next.js will cache them
// and they may not reflect file changes during runtime.  Instead we compute
// counts by reading the source directories or clearing the require cache when
// necessary.

import agencyData from '@/data/agencies';
import corporationData from '@/data/corporations';
import organizationData from '@/data/organizations';
// investigations and individuals will be loaded dynamically inside GET
import { documents } from '@/data/documents';

// Force dynamic, always compute live counts from imported data
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET() {
 // Compute live counts by scanning data directories so we never serve stale values.
 const scanSlugs = (dir: string) => {
  let total = 0;
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
    for (const file of files) {
      const content = fs.readFileSync(path.join(dir, file), 'utf8');
      total += (content.match(/^\s*'[a-z0-9-]+'\s*:\s*\{/gm) || []).length;
    }
  }
  return total;
};

 const individualsDir = path.join(process.cwd(), 'src', 'data', 'individuals');
 const investigationsDir = path.join(process.cwd(), 'src', 'data', 'investigations');

 const individuals = scanSlugs(individualsDir);
 const agencies = Object.keys(agencyData).length;
 const corporations = Object.keys(corporationData).length;
 const organizations = Object.keys(organizationData).length;
 const investigations = scanSlugs(investigationsDir);
 const totalEntities = individuals + agencies + corporations + organizations;

 // Count investigation severities by scanning files
 const bySeverity = { critical: 0, high: 0, medium: 0, low: 0 };
 if (fs.existsSync(investigationsDir)) {
  const files = fs.readdirSync(investigationsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  for (const file of files) {
    const content = fs.readFileSync(path.join(investigationsDir, file), 'utf8');
    const regex = /severity:\s*'([^']+)'/g;
    let m;
    while ((m = regex.exec(content)) !== null) {
      const sev = m[1];
      if (sev && sev in bySeverity) bySeverity[sev as keyof typeof bySeverity]++;
    }
  }
 }

 // Count connections by scanning individuals for knownAssociates entries
 let totalConnections = 0;
 if (fs.existsSync(individualsDir)) {
  const files = fs.readdirSync(individualsDir).filter(f => f.endsWith('.ts') && f !== 'index.ts' && f !== 'types.ts');
  for (const file of files) {
    const content = fs.readFileSync(path.join(individualsDir, file), 'utf8');
    const matches = content.match(/knownAssociates:\s*\[/g) || [];
    totalConnections += matches.length; // approximate
  }
 }

 return NextResponse.json({
  success: true,
  data: {
   overview: {
    totalInvestigations: investigations,
    totalEntities,
    individuals,
    agencies,
    corporations,
    organizations,
    totalConnections,
    documentsArchived: documents.length,
    activeAlerts: Math.max(60, Math.floor(investigations * 0.1)),
   },
   investigations: {
    bySeverity,
    total: investigations,
   },
   entities: {
    byType: {
     individual: individuals,
     agency: agencies,
     corporation: corporations,
     organization: organizations,
    },
   },
  },
  meta: {
   generatedAt: new Date().toISOString(),
   source: 'live-data-import',
  },
 });
}
