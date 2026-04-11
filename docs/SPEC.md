# Portfolio Spec — Justin Cordova (IS219)

High-level specification for the IS219 portfolio website. This document is
intentionally big-picture: it captures *what* we are building and *why*, not
the step-by-step implementation. A detailed implementation plan will be
produced later with the `superpowers:writing-plans` skill.

The framework followed throughout is the professor's **Signal → Publish**
guide, analyzed in [`professor-guide-analysis.md`](./professor-guide-analysis.md).

---

## References

Two existing resources this build draws from:

- **Next.js starter (base to build on):** `~/cs/templates/nextjs-bun-starter`
  Next.js 16, Bun, Tailwind v4, Biome, Vitest, TypeScript. This repo is the
  foundation — scaffold the portfolio on top of it rather than starting fresh.

- **Previous portfolio (reference for content + patterns):** `~/cs/projects/justin`
  The existing `justincordova.dev` site (Vite + React + React Router). Pull
  from it selectively:
  - Bio content, work history, stack list, and the "outside of code" paragraph
    (`src/components/home/Hero.tsx`, `src/pages/Home.tsx`)
  - GitHub API integration patterns (`src/lib/github.ts`, `CURATED_PROJECTS`,
    `FEATURED_PROJECTS`)
  - Project card patterns (`src/components/projects/`, `src/components/home/FeaturedProjects.tsx`)

  Do **not** port the existing visual style — the new portfolio uses a
  different archetype and style (see below). Treat the old site as a content
  source, not a design reference.

---

## 1. Signal

### Audience

One real person, one real situation:

> An engineering manager or senior engineer at a startup or mid-size tech
> company, reviewing Justin's site for 2–3 minutes after a recruiter forwarded
> his resume, deciding whether to schedule a phone screen for a full-stack role.

The portfolio is **not** optimized for 30-second resume screeners, cold
recruiters with no technical background, or a peer-dev craft audience. It is
optimized for the technically-literate hiring decision-maker.

### Need

That person needs to answer three questions fast:

1. Does Justin actually ship real work?
2. Does his stack overlap with ours?
3. Can he communicate clearly and make good decisions?

A weak first impression costs the phone screen.

### Promise

> **"I build thoughtful full-stack software — where the code, the UX, and the
> decisions all hang together."**

This promise is specifically about **judgment and taste**, not volume or
velocity. It must be stated clearly on the first screen.

---

## 2. Archetype

**Sage, with warmth.**

The Sage archetype signals *"method visible before claim"* — the page should
communicate that Justin thinks carefully and the thinking is legible in the
work. Every proof block must show a decision, not just a feature list.

- **Shadow to avoid:** Cold, pedantic, intimidating. Pure Sage without warmth
  reads as academic or robotic.
- **Counterweight:** One short, human "outside of code" section
  (racquetball/tennis/photography), plus a plainspoken voice throughout.
  Enough warmth to feel human, not enough to pull toward Caregiver.

Archetypes explicitly ruled out:

- **Hero** — wrong for this promise. Hero is about effort and grit; Justin's
  promise is about judgment.
- **Caregiver** — wrong for this context. This is not a helping-profession site.

---

## 3. Style

**Structured Brutalist.**

A disciplined brutalist direction: hard grid, blunt typography, visible
borders, no decorative polish — but with enough hierarchy and spacing to stay
scannable in the 2-minute review window. Not raw brutalism (too hostile for
non-dev reviewers), not neo-brutalism (too playful, conflicts with Sage).

### Visual rules

- **Typography.** **Geist Mono** for all UI chrome (nav, metadata, labels,
  buttons, links, code, project metadata). **Geist Sans** for long-form body
  text (about paragraph, proof-block descriptions, writeup body). One family
  pair, loaded via `next/font/google`. The hero H1 uses Geist Sans at an
  oversized display weight (700+). No third typeface.
- **Grid.** Visible 1px borders separate sections. Hard rectangles only — no
  rounded corners, no soft shadows, no blur effects.
- **Color palette.** Dark theme, locked:

  | Token | Value | Usage |
  |---|---|---|
  | `bg` | `#0a0a0a` | Page background |
  | `fg` | `#f5f5f5` | Primary text |
  | `muted` | `#737373` | Secondary text, metadata |
  | `border` | `#1f1f1f` | Section dividers, card borders |
  | `accent` | `#FFB020` | Links, primary CTA, hover states — **used with discipline** |
  | `accent-dim` | `#b37a10` | Visited links, pressed states |

  The accent is a terminal amber — rare in modern portfolios, warm enough
  to counter the Sage coldness trap, and strong contrast on near-black.
  No gradients. Accent appears on interactive elements only (links, CTA
  buttons, focus rings). Body text stays `fg`.
- **Hierarchy.** Strong display size on the H1. Body text drops hard below it
  — no mid-tier decorative headings, no script fonts, no emoji in chrome.
- **Imagery.** Screenshots and photos rendered inside 1px borders with mono
  captions. No stock illustrations, no hero background images.

### Explicitly ruled out

- Rounded corners, soft shadows, neumorphism
- Gradients, glassmorphism, blur backdrops
- Stock illustrations, emoji as UI
- Dark/light mode toggle (pick dark, commit)
- Decorative animations beyond a simple hero fade-in

---

## 4. Page architecture

Three routes:

```
/                    → Home (the main scroll — the graded page)
/projects            → All-projects index
/projects/findu      → Deep writeup / case study
```

No `/about`, no `/pics`, no blog, no standalone writeup pages for dotcor or
cspathfinder. Any "about me" content lives as a section on `/`.

### `/` — Home

The only page the professor's hard requirements are graded on. In order,
top to bottom:

1. **Hero** — must render fully above the fold on a 1440×900 laptop.
   Contains: name/nav, H1 with the promise, 2–3 sentence supporting copy,
   primary CTA (Email me) and secondary CTA (Resume), and the **first proof
   element** — a "Featured: findu" strip linking to the writeup. The first
   proof must be visible without scrolling.
2. **Proof blocks** — three of them:
   - **Block 1: findu** (expanded, links to `/projects/findu` writeup)
   - **Block 2: dotcor** (expanded card, no separate page)
   - **Block 3: cspathfinder** (expanded card, no separate page)

   Each proof block must include, per the professor's checklist: a title
   naming what it demonstrates, the artifact (screenshot), what it does,
   what changed/impact, **the decision that mattered** (the Sage move), stack,
   and links to code + live demo where applicable. Proof content is
   hand-written, not scraped from GitHub.
3. **About block** — short, two or three paragraphs. Work + stack, plus the
   "outside of code" line (racquetball, tennis, photography). One photo.
   Content pulled from the existing `justincordova.dev` site.
4. **Contact / CTA footer** — one reinforced CTA (Email me), followed by a
   mono row of email / GitHub / LinkedIn / location / last-updated date. The
   last-updated date is itself a Sage move — it signals the page is
   maintained.

### `/projects/findu` — deep writeup

The one project that gets the full case-study treatment. Structure:

1. Title + one-line promise
2. The problem (3–5 sentences)
3. The decisions — 2–4 specific judgment calls, each with a short reason.
   **This is the primary taste evidence on the site.**
4. Screenshots / demo
5. One or two small meaningful code snippets (not a wall of code)
6. What changed / result in plain language
7. Stack + links (code, live demo)
8. Back-to-home link

Content is hand-authored.

### `/projects` — breadth index

Simple grid of the curated repo list (~19 repos from the old site's
`CURATED_PROJECTS`), fetched from the GitHub API. Each card shows repo name,
1-line description, language badge, stars, updated-at. Cards link to GitHub,
except findu, which links to the local writeup.

---

## 5. CTA strategy

One primary next step, one secondary — no wall of icons.

- **Primary:** Email me (`mailto:` link to Justin's email)
- **Secondary:** Resume — plain anchor to `/resume.pdf` with the `download`
  attribute. The PDF is hosted statically in `public/resume.pdf`.
- **Tertiary (footer only, not CTA):** GitHub, LinkedIn

The professor's rule is that the CTA must sound like the same person the rest
of the page introduced. Keep the button label plainspoken and mono-styled.

---

## 6. Content sources

| Content | Source |
|---|---|
| Hero headline + supporting copy | Hand-written (new) |
| Proof block copy (findu, dotcor, cspathfinder) | Hand-written (new) |
| findu deep writeup | Hand-written (new) |
| About block | Ported from `~/cs/projects/justin/src/pages/Home.tsx` and `Hero.tsx` |
| `/projects` repo grid | GitHub API, list ported from `~/cs/projects/justin/src/lib/github.ts` |
| Photo | Ported from existing site (`/about.png` equivalent) |

Proof content and the findu writeup are **not** fetched from GitHub at runtime.
They live in typed TypeScript content files in the repo (`src/content/*.ts`) so
the page is deterministic and the "decision that mattered" text is authored,
not scraped.

---

## 7. Tech stack & foundation

Built on `~/cs/templates/nextjs-bun-starter`:

- **Framework:** Next.js 16 (App Router)
- **Runtime / package manager:** Bun
- **Styling:** Tailwind v4
- **Lint / format:** Biome
- **Tests:** Vitest
- **Language:** TypeScript strict

The GitHub API integration should be ported from the old portfolio and run as
a Next.js server route (`app/api/github/...`), with response caching (Next.js
`revalidate`, 1 hour target). No client-side GitHub token exposure.

Deployment target: Vercel (default, change only if Justin says otherwise).

---

## 8. Scope — what ships

### In scope

- The three routes above (`/`, `/projects`, `/projects/findu`)
- GitHub API proxy + caching
- Hand-written proof content + findu writeup
- Email + Resume CTAs
- Accessibility baseline (keyboard, contrast, alt text, skip-to-content)
- Lighthouse performance pass

### Out of scope (YAGNI)

- `/pics` photography gallery (lives on the old site if Justin still wants it)
- Standalone `/about` page
- Blog or writing section
- Dark/light mode toggle
- RSS feed
- Analytics (can be added post-launch)
- Location widget, recent-activity widget (cut — clever but don't serve the promise)
- Standalone writeup pages for dotcor / cspathfinder

---

## 9. Publish requirements (non-negotiable)

Directly from the professor's guide. Every item must be verified before launch:

**Signal clarity**
- [ ] One specific real person named as audience (not a vague category)
- [ ] Promise on the first screen
- [ ] One archetype communicated on first read

**Proof**
- [ ] First proof element visible without scrolling
- [ ] Proof includes: artifact, result, method note, caption tying back to promise
- [ ] Strongest evidence nearest the biggest claim

**Call to action**
- [ ] Clear next step, in the same voice as the rest of the page

**Technical**
- [ ] Loads in under 3 seconds on mobile 4G
- [ ] Lighthouse performance ≥ 90 (mobile)
- [ ] Keyboard navigable end-to-end
- [ ] Screen-reader reasonable (semantic HTML, alt text, labels)
- [ ] Contrast AA minimum on body text
- [ ] Feels intentionally made, not template-shaped

---

## 10. Build plan (3-week cadence from the guide)

- **Week 1 — Signal + first read.** Scaffold Next.js from the starter. Build
  nav + hero. Lock the above-the-fold rendering (headline, promise, CTAs,
  featured-findu strip). Finalize hero copy.
- **Week 2 — Proof.** Build the reusable `ProofBlock` and use it 3×. Port
  the GitHub API integration. Author and ship the `/projects/findu` writeup.
- **Week 3 — Coherence + publish.** Build `/projects` index, about block, and
  contact footer. Accessibility and Lighthouse passes. Deploy. Verify every
  item in §9.

---

## 11. Placeholder assets

The following assets don't exist yet and will be scaffolded as placeholders
during the build, then swapped with real content during the content pass:

- **`public/resume.pdf`** — placeholder PDF until the real resume is dropped in.
- **`public/projects/findu/hero.png`** — hero screenshot for the findu proof
  block and writeup header. Placeholder box until captured.
- **`public/projects/findu/decision-1.png`**, **`decision-2.png`** — supporting
  screenshots for the decisions section of the writeup. Placeholders.
- **`public/projects/dotcor.png`** — proof-block screenshot. Placeholder.
- **`public/projects/cspathfinder.png`** — proof-block screenshot. Placeholder.
- **`public/about.png`** — the portrait photo for the about block. Can be
  copied from `~/cs/projects/justin/public/about.png`.

Placeholders should be 1px-bordered flat-color boxes at the correct aspect
ratio, with honest `alt` text like `"Placeholder — findu hero screenshot"`,
so the layout is correct from day one.

## 12. Deferred to the implementation plan

Specific mechanics left to the plan phase (not the spec):

- Exact hero headline copy and the three proof-block decision statements
- Component tree and file layout
- Data contracts and test strategy
- GitHub API caching details and rate-limit handling

---

## 13. Not in this document

This spec is deliberately light on implementation mechanics. Component trees,
file layouts, data contracts, test strategy, and step-by-step tasks are the
job of the implementation plan. Invoke the `superpowers:writing-plans` skill
with this spec as input when ready to move to that phase.
