# Design System + Light Theme — Fortex Landing

**Date:** 2026-05-07
**Scope:** Design token system, light theme, ThemeToggle component, component migration

---

## 1. Goals

- Add a light theme (palette C: gris neutro) to the existing dark site
- Build a semantic design token system that makes future theme changes trivial
- Add a manual toggle button in the Navbar (glassmorphism style, option C)
- Default theme: respects `prefers-color-scheme`; user preference saved in `localStorage`
- Document all existing components against the new token system

---

## 2. Color Tokens

### Semantic tokens (5 tokens cover the entire site)

| Token | Dark (current default) | Light (new) |
|---|---|---|
| `--color-background` | `#0a0a0a` | `#f5f5f5` |
| `--color-surface` | `#050505` | `#ebebeb` |
| `--color-foreground` | `#f8fafc` | `#111111` |
| `--color-muted` | `#9ca3af` | `#555555` |
| `--color-border` | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.1)` |

**Brand blue `#0047FF` does not change between themes.**

### Glassmorphism adaptation

| Utility | Dark | Light |
|---|---|---|
| `.glass` bg | `rgba(255,255,255,0.05)` | `rgba(0,0,0,0.03)` |
| `.glass` border | `rgba(255,255,255,0.1)` | `rgba(0,0,0,0.08)` |
| `.glass-card` bg | `rgba(255,255,255,0.05)→rgba(255,255,255,0.02)` | `rgba(0,0,0,0.03)→rgba(0,0,0,0.01)` |

### CSS implementation strategy

Two rules only. The FOUC script (section 6) always sets one of `html.dark` or `html.light` before first paint, so the `@media` query is not needed in CSS and is intentionally omitted to avoid conflicts.

```css
/* global.css */

html.dark {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-foreground: #f8fafc;
  --color-muted: #9ca3af;
  --color-border: rgba(255, 255, 255, 0.1);
}

html.light {
  --color-background: #f5f5f5;
  --color-surface: #ebebeb;
  --color-foreground: #111111;
  --color-muted: #555555;
  --color-border: rgba(0, 0, 0, 0.1);
}
```

---

## 3. Typography Tokens

Added to the `@theme {}` block in `global.css`:

| Token | Value | Usage |
|---|---|---|
| `--font-sans` | Inter (already loaded) | Base text |
| `--text-xs` | `0.75rem / 1rem` | Labels, badges |
| `--text-sm` | `0.875rem / 1.25rem` | Nav links, captions |
| `--text-base` | `1rem / 1.5rem` | Body |
| `--text-lg` | `1.125rem / 1.75rem` | Subtitles |
| `--text-xl` | `1.25rem / 1.75rem` | Lead paragraphs |
| `--text-2xl` | `1.5rem / 2rem` | Small headings |
| `--text-hero` | `clamp(4rem, 10vw, 10rem)` | Brutalist hero headline |

Font weights in use: `300`, `400`, `500`, `600`, `700`, `900` — all already loaded from Google Fonts.

---

## 4. Spacing, Border & Shadow Tokens

Added to `@theme {}`:

| Category | Token | Value |
|---|---|---|
| Spacing | `--spacing-section` | `5rem` |
| Border radius | `--radius-sm` | `4px` |
| | `--radius-md` | `8px` |
| | `--radius-xl` | `16px` |
| | `--radius-full` | `999px` |
| Borders | `--border-subtle` | `1px solid var(--color-border)` |
| Shadows | `--shadow-card` | `0 4px 30px rgba(0,0,0,0.1)` |
| Backdrop | `--blur-glass` | `blur(20px)` |

---

## 5. Components

### ThemeToggle (new)

**File:** `src/components/ThemeToggle.jsx`

Glassmorphism button (option C) placed in the Navbar to the right of "Solicitar demo".

**Behavior:**
1. On mount: reads `localStorage.getItem('theme')`. If absent, infers from `prefers-color-scheme`.
2. Displays `☀ Claro` when currently in dark mode (clicking switches to light), or `☾ Oscuro` when in light mode (clicking switches to dark).
3. On click: toggles `html.light` class on `document.documentElement`, writes the new value to `localStorage`.

**Visual:** Button with `bg-surface/50`, `border-border`, `backdrop-blur`, `text-muted`. Same border-radius and style as the mobile menu toggle in Navbar.

**Mobile:** Included in the mobile menu panel as well, below the nav links.

---

### Button (`ui/Button.jsx`) — existing, migrated

| Variant | Current | After migration |
|---|---|---|
| `primary` | `bg-[#0047FF] text-white` | unchanged (brand color) |
| `secondary` | `bg-transparent border-white/20 text-white` | → `border-border text-foreground` |
| `outline` | `border-white/20` | → `border-border` |
| `ghost` | `text-gray-300 hover:text-white` | → `text-muted hover:text-foreground` |

States: hover (already implemented), disabled (`opacity-50 pointer-events-none`).

---

### Navbar (`Navbar.jsx`) — existing, migrated + ThemeToggle added

- Scrolled state: `bg-black/90` → `bg-background/90`
- Nav links: `text-gray-400 hover:text-white` → `text-muted hover:text-foreground`
- Logo text: `text-white` → `text-foreground`
- Mobile menu bg: `bg-[#050505]` → `bg-surface`
- Mobile menu border: `border-white/10` → `border-border`
- ThemeToggle added between "Solicitar demo" button and end of right section

---

### Footer (`Footer.jsx`) — existing, migrated

- Container: `bg-[#0a0a0a]` → `bg-background`
- Border: `border-white/10` → `border-border`
- Logo text: `text-white` → `text-foreground`
- Copyright: `text-gray-500` → `text-muted`

---

### Glassmorphism surfaces (`.glass`, `.glass-card`) — existing, adapted

Updated in `global.css` to use CSS variables so they automatically adapt per theme. No component changes needed for glassmorphism.

---

### Section components — existing, migrated

All 10 section components (`FortexHero`, `FortexServices`, `FortexProcess`, `FortexValueProp`, `FortexHero`, `Hero`, `ProblemSection`, `SolutionSection`, `SuiteOneTex`, `TransformationBanner`, `Comparison`, `PortafolioGallery`, `DemoForm`, `ProcessStepper`) follow the same migration pattern:

| Old class | New class |
|---|---|
| `bg-black`, `bg-[#0a0a0a]` | `bg-background` |
| `bg-[#050505]` | `bg-surface` |
| `text-white` | `text-foreground` |
| `text-gray-400`, `text-gray-500` | `text-muted` |
| `border-white/10`, `border-white/20` | `border-border` |

Brand blue classes (`text-[#0047FF]`, `bg-[#0047FF]`) stay hardcoded — they don't change between themes.

---

## 6. Implementation Architecture

### Files modified

| File | Change |
|---|---|
| `src/styles/global.css` | Add `:root`, `html.light`, `@media prefers-color-scheme`, expand `@theme {}` with all tokens |
| `src/layouts/Layout.astro` | Inline `<script>` in `<head>` for FOUC prevention; remove hardcoded `bg-[#0a0a0a] text-white` from `<body>` |
| `src/components/Navbar.jsx` | Import and render `ThemeToggle`; migrate color classes |
| `src/components/Footer.jsx` | Migrate color classes |
| `src/components/ui/Button.jsx` | Migrate non-brand color classes |
| All other section components (×11) | Migrate color classes per mapping table above |

### Files created

| File | Purpose |
|---|---|
| `src/components/ThemeToggle.jsx` | Theme toggle button (glassmorphism, option C) |

### FOUC prevention script (Layout.astro)

```html
<script is:inline>
  (function () {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const useDark = saved ? saved === 'dark' : prefersDark;
    document.documentElement.classList.add(useDark ? 'dark' : 'light');
  })();
</script>
```

Always applies exactly one of `html.dark` or `html.light` before first paint. This prevents FOUC and avoids any CSS `@media` ambiguity. The `ThemeToggle` component swaps between the two classes and writes the new value to `localStorage`.

---

## 7. Out of Scope

- New components beyond what already exists
- Figma/design file updates
- Portfolio detail page (`[slug].astro`) — follows same migration pattern, no special treatment needed
- OneTex pages (`/onetex`, `/demo`) — same migration, same tokens
