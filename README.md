# Cibi K — Portfolio

A premium, "Liquid Glass" developer portfolio built with React, TypeScript, Tailwind CSS,
and Framer Motion. Redesigned around a frosted-glass, Apple/Vercel/Linear/Arc-inspired
aesthetic while preserving the original project's structure and content.

## Stack

- Vite + React 18 + TypeScript
- Tailwind CSS + shadcn/ui (customized)
- Framer Motion for motion/micro-interactions
- react-three-fiber for the hero particle field

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint      # eslint
npm run test      # vitest
```

## Project structure

```
src/
  components/     # UI building blocks (one section = one component)
  components/ui/  # shadcn/ui primitives
  hooks/          # reusable hooks (e.g. useGitHubStats)
  pages/          # route-level pages (Index, NotFound)
  assets/         # local image assets
public/           # static files served as-is (resume.pdf, profile.jpg, favicon, etc.)
```

## Design system

Liquid-glass surfaces, aurora backgrounds, and gradient tokens are defined once in
`src/index.css` (`--aurora-*`, `--glass-*` CSS variables and the `.liquid-glass` /
`.glass-nav` / `.aurora-layer` utility classes) so every component stays visually
consistent and themeable across light/dark mode.

## Adding a certificate

Certificates live as plain objects in `src/components/AchievementsSection.tsx` —
add a new entry to the `certificates` array (title, org, category, icon, description)
and it automatically appears in the searchable/filterable gallery.

## Adding a project case study

Projects live as plain objects in `src/components/ProjectsSection.tsx` — add an entry
to the `projects` array with the case-study fields (overview, problem, solution,
architecture, tech, features, challenges) and it renders as a card + detail modal.

## Deployment

Static Vite build — deploy the `dist/` output to Vercel, Netlify, GitHub Pages, or any
static host. No environment variables required.
