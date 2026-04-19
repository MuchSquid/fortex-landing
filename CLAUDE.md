# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start dev server at http://localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview the production build locally
```

No test runner or linter is configured.

## Project overview

Landing site for **Fortex Digital Solutions**, a web agency based in Bogotá. The site serves two distinct products under one codebase:

| Product | Pages | Purpose |
|---|---|---|
| Fortex Agency | `/`, `/portafolio`, `/portafolio/[slug]`, `/contacto` | Agency site selling web dev services |
| Operate OneTex | `/onetex`, `/demo` | Separate SaaS product for operational management |

Both products share `Navbar`, `Footer`, `DemoForm`, and `Comparison` components.

## Architecture

**Astro 5** generates static pages. **React 19** handles all interactive UI. Components are `.jsx` files rendered as Astro islands with explicit hydration directives:

- `client:load` — hydrates immediately on page load (Navbar, Hero, forms)
- `client:visible` — defers hydration until element enters viewport (sections below the fold)

Page files in `src/pages/` are thin shells that import and compose React components. No logic lives in `.astro` files beyond layout and imports.

### Portfolio data flow

`src/data/portfolio.js` exports a plain array of project objects (slug, title, category, description, longDescription, image, tags, accent, client, year, role). The dynamic route `src/pages/portafolio/[slug].astro` calls `getStaticPaths()` to pre-render one page per entry at build time. **Adding a new project means adding an entry to that array.**

### Contact / Demo form

`DemoForm` is shared between `/contacto` and `/demo`. Currently the `handleSubmit` uses a `setTimeout` mock — **there is no real API integration yet**. A 500 error on form submission means the backend endpoint is not yet connected. The form collects: name, email, company, and message.

### View Transitions

`ClientRouter` from `astro:transitions` is enabled globally in `Layout.astro`. Portfolio card images use `view-transition-name: project-image-{slug}` and `view-transition-name: project-image-wrapper-{slug}` to create matched-element animations when navigating from `/portafolio` to a project detail page.

## Styling conventions

- **Tailwind CSS v4** via `@tailwindcss/vite` (not the legacy PostCSS plugin — there is no `tailwind.config.js`)
- Theme tokens defined in `src/styles/global.css` using the `@theme {}` block
- Brand blue: `#0047FF` (Fortex primary), `#2563eb` / `#3b82f6` (OneTex/buttons)
- Background: `#0a0a0a` / `#050505` (near-black dark theme throughout)
- Two custom utility classes: `.glass` and `.glass-card` for glassmorphism surfaces
- Font: **Inter** loaded from Google Fonts, declared in `Layout.astro` `<head>`
- `clsx` + `tailwind-merge` used in `ui/Button.jsx` for conditional class merging

## Component patterns

- `ui/Button` renders as `<a>` if `href` prop is passed, otherwise as `<button>`. Variants: `primary`, `secondary`, `outline`, `ghost`.
- `FortexHero` uses Framer Motion `useMotionTemplate` for a cursor-tracked radial gradient light effect.
- Magnetic button effect (mouse-tracking spring animation) is implemented inline in `FortexHero`, not in `ui/Button`.
- All section-level animations use `whileInView` with `viewport={{ once: true }}` so they only play once.
