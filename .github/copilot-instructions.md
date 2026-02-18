# ArkHive - AI Agent Instructions

## Architecture Overview
Next.js 15 App Router investigative journalism platform. All pages use `"use client"` directive - this is intentional for interactivity and effects. State management via Zustand store at `src/store/workspaceStore.ts`.

**Core Domain Models** (see `src/types/index.ts` and `src/types/workspace.ts`):
- `Investigation` - Severity levels: `critical | high | medium | low`
- `Entity` - Types: `agency | corporation | individual | organization`
- `Affiliation` - Connections between entities with relationship strength
- `Workspace` - Collaborative investigation with members, evidence, chat

## Component Patterns

**Card Components** (`src/components/cards/`):
- Export interface alongside component: `export interface Investigation {...}`
- Use severity/risk color maps: `severityColors[investigation.severity]`
- Link cards wrap entire component with `<Link href={...}>`

**Effect Components** (`src/components/effects/`):
- Client components with Framer Motion animations
- Global effects applied in `layout.tsx`: `StaticGridBackground`, `RandomWordPopups`, `ParanoiaEffects`
- `GlitchText` triggers on paranoia keywords (government, conspiracy, etc.)

**Workspace Components** (`src/components/workspace/`):
- Barrel export at `index.ts` - import via `@/components/workspace`
- `EvidenceBoard` - filterable grid/list view for investigation evidence
- `ChatPanel`, `MemberList`, `DocumentLibrary` - collaborative features

## Styling Rules

**Custom CSS Classes** (defined in `globals.css`):
- `glass-card` - Sharp-edged dark card with blood-red hover effects (NO border-radius)
- `glass` - Solid dark background with subtle red border
- `cursor-blood-red` - Applied to body, provides custom red cursors

**Color Palette** (from `tailwind.config.ts`):
- Primary: `blood-*` scale (blood-500: `#d64545`, blood-900: `#6b1515`)
- Use `blood-*` for emphasis, `zinc-*` for neutral text/backgrounds
- Backgrounds: Pure black (`#000000`) or near-black (`#050505`)

**Design Philosophy**: Crystal clear, sharp edges - NO blur, NO rounded corners. All components use `border-radius: 0`.

## File Organization

```
src/app/                    # Pages (all use "use client")
  investigations/[slug]/    # Dynamic investigation detail
  entities/{agencies,corporations,individuals}/  # Entity listings
  workspaces/[id]/          # Collaborative workspace detail
src/components/
  cards/                    # InvestigationCard, EntityCard
  effects/                  # Visual effects (Glitch, Static, etc.)
  layout/                   # Header, Footer, AffiliationsSidebar
  ui/                       # Buttons, logos, dividers
  workspace/                # Collaboration components
src/types/                  # TypeScript interfaces
src/store/                  # Zustand state (workspaceStore.ts)
```

## Development

```bash
npm run dev      # Dev server at localhost:3000
npm run build    # Production build
npm run lint     # ESLint check
```

**Key Dependencies**: `framer-motion` (animations), `zustand` (state), `lucide-react` (icons), `date-fns` (dates), `react-dropzone` (uploads)

## Adding Content

**New Investigation Page**: Create data object matching `Investigation` interface, include `affiliations` array linking to entities.

**New Entity**: Match `Entity` interface with proper `type` field - URL structure follows type (`/entities/agencies/[slug]`).

**New Effect Component**: Place in `effects/`, add `'use client'` directive, export from component file directly (no barrel).
