# ArkHive

A professional investigative journalism platform built with Next.js 15, designed to document and expose institutional actions that impact public health, safety, and civil liberties.

![Next.js](https://img.shields.io/badge/Next.js-15.1.0-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

### Core Features
- **Investigation Documentation**: Full-featured investigation pages with severity ratings, categories, and comprehensive content
- **Entity Tracking**: Database of government agencies, corporations, and individuals connected to investigations
- **Affiliation Mapping**: Visual connections showing how entities relate to each other and to investigations
- **Document Library**: Searchable repository of primary source documents with classification levels
- **Collaborative Workspaces**: Team investigation areas with chat, evidence boards, and member management

### User Experience
- **Search & Filter**: Advanced search and filtering across all content types
- **Timeline View**: Chronological display of documented events
- **Dashboard**: Overview of ongoing investigations and activity
- **Keyboard Shortcuts**: Power-user navigation with `Shift + ?` for help

### Design
- **Dark Theme**: Sharp-edged, crystal-clear dark interface (no blur, no rounded corners)
- **Blood-Red Accents**: Custom color palette for emphasis and alerts
- **Responsive Design**: Mobile-first, works on all device sizes
- **Framer Motion Animations**: Smooth, performant animations throughout

### Security
- **Secure Submission**: Anonymous tip submission with PGP encryption support
- **Source Protection**: Built-in features to protect whistleblower identities
- **SecureDrop Integration**: Guidance for most secure communication

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Next.js | 15.1.0 | React framework with App Router |
| React | 19.0.0 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 3.4.x | Styling |
| Framer Motion | 11.15.x | Animations |
| Zustand | 5.0.x | State management |
| Lucide React | 0.468.x | Icons |
| date-fns | 4.1.x | Date formatting |

## 📁 Project Structure

```
src/
├── app/                        # Next.js App Router pages
│   ├── page.tsx               # Home page
│   ├── layout.tsx             # Root layout with global effects
│   ├── globals.css            # Global styles and Tailwind
│   ├── investigations/        # Investigation listing and [slug] detail
│   ├── entities/              # Entity pages by type
│   │   ├── agencies/
│   │   ├── corporations/
│   │   └── individuals/
│   ├── workspaces/            # Collaborative workspace pages
│   ├── documents/             # Document library
│   ├── dashboard/             # User dashboard
│   ├── search/                # Full search page
│   ├── timeline/              # Chronological events
│   ├── api/                   # API routes
│   │   ├── search/
│   │   ├── stats/
│   │   └── documents/
│   └── ... (about, contact, faq, privacy, terms, etc.)
├── components/
│   ├── cards/                 # InvestigationCard, EntityCard
│   ├── effects/               # Visual effects (Glitch, Static, etc.)
│   ├── layout/                # Header, Footer, AffiliationsSidebar
│   ├── ui/                    # 40+ reusable UI components
│   ├── workspace/             # Collaboration components
│   └── ErrorBoundary.tsx      # Error handling
├── hooks/                     # Custom React hooks
│   ├── useDebounce.ts
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useScrollLock.ts
│   ├── useFocusTrap.ts
│   └── ... (10+ hooks)
├── lib/                       # Utilities and config
│   ├── animations.ts          # Framer Motion variants
│   ├── constants.ts           # App constants
│   ├── utils.ts               # Helper functions
│   └── validations.ts         # Zod schemas
├── providers/                 # React context providers
│   └── KeyboardShortcutsProvider.tsx
├── store/                     # Zustand state
│   └── workspaceStore.ts
└── types/                     # TypeScript definitions
    ├── index.ts
    └── workspace.ts
```

## 🚦 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/arkhive.git

# Navigate to directory
cd arkhive

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run typecheck # Run TypeScript compiler check
```

## 📝 Adding Content

### Adding an Investigation

1. Create investigation data matching the `Investigation` interface
2. Include `severity` (critical | high | medium | low)
3. Link affiliated entities via `affiliations` array
4. Add sources and documentation

### Adding an Entity

Entity types: `agency`, `corporation`, `individual`, `organization`

Each entity includes:
- Name and description
- Risk level assessment
- Connected investigations
- Affiliations with other entities

URL structure: `/entities/{type}s/{slug}` (e.g., `/entities/agencies/fda`)

### Adding Visual Effects

1. Create component in `src/components/effects/`
2. Add `'use client'` directive
3. Use Framer Motion for animations
4. Apply to layout or specific pages

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Blood-500 | `#d64545` | Primary accent, CTAs |
| Blood-900 | `#6b1515` | Dark red backgrounds |
| Background | `#000000` | Page backgrounds |
| Zinc-800 | `#27272a` | Card backgrounds |
| Zinc-400 | `#a1a1aa` | Secondary text |

### Design Philosophy

- **Sharp Edges**: No `border-radius` - crystal clear, sharp-edged aesthetic
- **No Blur**: Solid dark backgrounds instead of glassmorphism
- **Blood-Red Accents**: Used for emphasis, alerts, and interactive elements

### CSS Classes (from `globals.css`)

- `glass-card`: Dark card with blood-red hover effects
- `glass`: Solid dark background with subtle border
- `cursor-blood-red`: Custom red cursor theme

## 🔧 Configuration

### Environment Variables

Create `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=/api
```

### TypeScript

The project uses strict TypeScript with paths configured:
- `@/*` → `src/*`

## 📚 Component Library

The UI library includes 40+ components:

**Form Controls**: Input, Select, Textarea, Toggle, Slider, Rating, FileUpload  
**Feedback**: Alert, Toast, Modal, ProgressBar, Skeleton  
**Navigation**: Breadcrumb, Pagination, Tabs, Dropdown  
**Data Display**: DataTable, Timeline, StatCard, Badge, Avatar  
**Layout**: Card, Accordion, Tooltip  

Import from `@/components/ui`:
```tsx
import { Button, Alert, Modal, DataTable } from '@/components/ui';
```

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Shift + ?` | Open shortcuts help |
| `Ctrl/⌘ + K` | Open search |
| `Alt + H` | Go to home |
| `Alt + I` | Go to investigations |
| `Alt + E` | Go to entities |
| `Alt + D` | Go to dashboard |
| `Esc` | Close modal/overlay |

## 🧪 Testing

```bash
# Run tests
npm run test

# Run with coverage
npm run test:coverage
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Analyze bundle size
npm run analyze
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is for educational and informational purposes. See [LICENSE](LICENSE) for details.

## 🔗 Links

- [Methodology](/methodology) - Our investigation standards
- [Privacy Policy](/privacy) - How we protect your data
- [Terms of Service](/terms) - Usage terms
- [Contact](/contact) - Secure communication options

---

**Built with truth in mind.** 🔍

*"The truth is out there, and we're documenting it."*
