# CLAUDE.md

Claude Code project instructions for the IS219 portfolio.

## Project

Personal portfolio for Justin Cordova (IS219 — Web Presence Workshop).
The full specification lives in [`docs/SPEC.md`](./docs/SPEC.md). Read it
before making architecture decisions.

The portfolio follows the professor's Signal → Publish framework, analyzed
in [`professor-guide-analysis.md`](./professor-guide-analysis.md).

## Foundation

- Scaffolded from `~/cs/templates/nextjs-bun-starter`
- Content + patterns borrowed from `~/cs/projects/justin` (the previous
  `justincordova.dev` site). **Do not port its visual style** — new portfolio
  uses a different archetype (Sage) and style (Structured Brutalist).

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript strict
- Tailwind v4 (tokens in `src/app/globals.css`)
- Bun (runtime + package manager)
- Biome (lint + format)
- Vitest + @testing-library/react (tests)
- `next/font/google` — Geist Mono + Geist Sans

## Design system (locked — see SPEC §3)

- Dark theme only, no toggle.
- Palette tokens in `src/app/globals.css`:
  - `bg: #0a0a0a`, `fg: #f5f5f5`, `muted: #737373`,
    `border: #1f1f1f`, `accent: #FFB020`, `accent-dim: #b37a10`
- Typography: Geist Mono for chrome/labels/buttons, Geist Sans for body.
- Hard rectangles only — no rounded corners, no soft shadows, no gradients.
- Accent used only on interactive elements (links, CTAs, focus rings).

## Routes

- `/` — Home (Hero, 3 ProofBlocks, AboutBlock, ContactFooter)
- `/projects` — All-projects grid (fetched from GitHub API proxy)
- `/projects/findu` — Deep case-study writeup

Nothing else ships. See SPEC §8 for what's explicitly out of scope.

## Content

All written content lives under `src/content/` as typed TS files:

- `profile.ts` — name, role, links, contact
- `proof.ts` — the three proof blocks (findu, dotcor, cspathfinder)
- `findu.ts` — the deep writeup
- `projects.ts` — curated repo list for `/projects`

Never fetch proof content or the findu writeup at runtime. Only the
`/projects` index talks to GitHub.

## GitHub API

Proxied through `src/app/api/github/repos/route.ts`. Uses Next.js
`revalidate` for caching (1 hour). No client-side token exposure.

## Commands

```bash
bun run dev           # dev server
bun run build         # production build
bun run start         # serve production build
bun run test          # vitest run
bun run type-check    # tsc --noEmit
bun run lint          # biome check
```

## Conventions

- Run `bun run type-check && bun run test && bun run lint` before committing.
- Commits are task-scoped. Format: `type(scope): description`. No AI
  attribution. (See user's global `~/.claude/CLAUDE.md`.)
- Tests live under `src/tests/` mirroring `src/` paths.
- Use the `@/` alias for imports.
- Keep components small and single-purpose — if a file grows past ~150 lines,
  split it.

## Planning docs

Implementation plans live in `docs/plans/` and are gitignored (local working
notes only). The spec in `docs/SPEC.md` is the source of truth.
