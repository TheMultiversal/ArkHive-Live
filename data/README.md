# Data import templates

Place JSON files in this directory to import data automatically.

### filenames
- `investigations.json` — array of investigation objects. Each object should include `slug`, `title`, `summary`, `category`, `severity`, `date`, etc. matching the shape in `/src/app/investigations/[slug]/page.tsx`.
- `entities-individuals.json`, `entities-agencies.json`, `entities-corporations.json`, `entities-organizations.json` — arrays of entity objects with `slug` and profile fields matching the catch‑all page structures.
- `documents.json` — array of document entries; missing `id` will be auto‑assigned.
- `timeline.json` — array of timeline event objects (`date`, `sortDate`, `title`, `description`, `category`, `severity`, `slug`, `tags`).
- `notifications.json` — array of notifications (`type`, `title`, `message`, `read`, `timestamp`, `actionUrl`, etc.).
- `sources.json` — array of source entries: `name`, `type`, `url`, `description`, `reliability`, `categories`.

Run `node scripts/auto-import.js` to process any JSON files.

Each run appends only new slugs/IDs; duplicates are ignored. You can delete or move processed files if desired.