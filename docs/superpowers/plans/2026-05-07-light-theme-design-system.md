# Light Theme + Design System Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a light/dark theme toggle to the Fortex landing site using semantic CSS tokens, with a glassmorphism toggle button in the Navbar.

**Architecture:** Semantic color tokens defined in `@theme {}` (dark defaults) and overridden via `html.light {}`. The FOUC prevention script applies `html.dark` or `html.light` before first paint. ThemeToggle.jsx swaps classes and writes to localStorage.

**Tech Stack:** Astro 5, React 19, Tailwind CSS v4 (no tailwind.config.js, uses `@theme` in global.css), Framer Motion.

**Color migration cheatsheet:**
- `bg-black`, `bg-[#0a0a0a]`, `bg-[#000000]` → `bg-background`
- `bg-[#050505]` → `bg-surface`
- semantic `text-white` → `text-foreground`
- `text-gray-400/500/600/700`, `text-zinc-400` → `text-muted`
- `hover:text-white` → `hover:text-foreground`
- `border-white/10` → `border-foreground/10`
- `border-white/20` → `border-foreground/20`
- `border-white/5` → `border-foreground/5`
- `bg-white/5` → `bg-foreground/5`
- `bg-white/10` → `bg-foreground/10`
- `bg-white/[0.03]` → `bg-foreground/[0.03]`
- `bg-white/[0.02]` → `bg-foreground/[0.02]`
- `bg-white text-black` (CTA buttons, active states, logo box) → `bg-foreground text-background`
- `hover:bg-white hover:text-black` → `hover:bg-foreground hover:text-background`

**Do NOT change:**
- `bg-[#0047FF]`, `text-[#0047FF]` (brand blue)
- `text-red-*`, `bg-red-*` (OneTex/error red)
- `text-green-*`, `text-yellow-*` (status colors)
- `bg-black/40` on image overlays
- `bg-gray-200` in hover states of white buttons (becomes `bg-foreground/80`)

---

## Task 1: Expand global.css with design tokens

**Files:**
- Modify: `src/styles/global.css`

- [ ] **Step 1: Replace global.css with the full token system**

```css
@import "tailwindcss";

@theme {
  /* Color tokens — dark defaults (overridden per theme below) */
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-foreground: #f8fafc;
  --color-muted: #9ca3af;

  /* Typography */
  --font-sans: "Inter", system-ui, -apple-system, sans-serif;

  /* Spacing */
  --spacing-section: 5rem;

  /* Border radius */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-xl: 16px;
  --radius-full: 999px;

  /* Shadows */
  --shadow-card: 0 4px 30px rgba(0, 0, 0, 0.1);

  /* Backdrop */
  --blur-glass: blur(20px);
}

/* Dark theme (explicit class — set by FOUC script) */
html.dark {
  --color-background: #0a0a0a;
  --color-surface: #050505;
  --color-foreground: #f8fafc;
  --color-muted: #9ca3af;
}

/* Light theme */
html.light {
  --color-background: #f5f5f5;
  --color-surface: #ebebeb;
  --color-foreground: #111111;
  --color-muted: #555555;
}

body {
  background-color: var(--color-background);
  color: var(--color-foreground);
  font-family: var(--font-sans);
  overflow-x: hidden;
}

/* Glassmorphism utilities — auto-adapt via foreground token */
.glass {
  background: color-mix(in srgb, var(--color-foreground) 5%, transparent);
  backdrop-filter: blur(10px);
  border: 1px solid color-mix(in srgb, var(--color-foreground) 10%, transparent);
}

.glass-card {
  background: color-mix(in srgb, var(--color-foreground) 3%, transparent);
  backdrop-filter: blur(20px);
  border: 1px solid color-mix(in srgb, var(--color-foreground) 5%, transparent);
  box-shadow: var(--shadow-card);
}
```

- [ ] **Step 2: Start dev server and verify no visual regression in dark mode**

```bash
npm run dev
```

Open http://localhost:4321. The site should look identical to before (dark theme). Stop server with Ctrl+C.

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add semantic design tokens and theme CSS variables"
```

---

## Task 2: Update Layout.astro — FOUC prevention + body classes

**Files:**
- Modify: `src/layouts/Layout.astro`

- [ ] **Step 1: Replace Layout.astro content**

```astro
---
import "../styles/global.css";
import { ClientRouter } from 'astro:transitions';

interface Props {
  title: string;
}

const { title } = Astro.props;
---

<!doctype html>
<html lang="es" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="Astro description" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="generator" content={Astro.generator} />
    <title>{title}</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <!-- FOUC prevention: apply theme class before first paint -->
    <script is:inline>
      (function () {
        var saved = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var useDark = saved ? saved === 'dark' : prefersDark;
        document.documentElement.classList.add(useDark ? 'dark' : 'light');
      })();
    </script>
    <ClientRouter />
  </head>
  <body class="bg-background text-foreground min-h-screen">
    <slot />
  </body>
</html>
```

- [ ] **Step 2: Verify dark mode still looks correct**

```bash
npm run dev
```

Open http://localhost:4321. No visible change expected. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/layouts/Layout.astro
git commit -m "feat: add FOUC prevention script and semantic body classes"
```

---

## Task 3: Create ThemeToggle.jsx

**Files:**
- Create: `src/components/ThemeToggle.jsx`

- [ ] **Step 1: Create the component**

```jsx
import React, { useState, useEffect } from 'react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove('dark');
      html.classList.add('light');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      html.classList.remove('light');
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <button
      onClick={toggle}
      className="flex items-center gap-1.5 px-3 py-2 bg-foreground/5 border border-foreground/10 backdrop-blur-md text-muted hover:text-foreground hover:border-foreground/20 transition-all duration-300 rounded-lg text-xs font-mono uppercase tracking-wider"
      aria-label={isDark ? 'Cambiar a tema claro' : 'Cambiar a tema oscuro'}
    >
      <span>{isDark ? '☀' : '☾'}</span>
      <span className="hidden sm:inline">{isDark ? 'Claro' : 'Oscuro'}</span>
    </button>
  );
};
```

- [ ] **Step 2: Commit**

```bash
git add src/components/ThemeToggle.jsx
git commit -m "feat: add ThemeToggle component with localStorage persistence"
```

---

## Task 4: Update Navbar.jsx — add ThemeToggle + migrate colors

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Replace Navbar.jsx**

```jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Agencia Fortex', href: '/' },
    { name: 'Portafolio', href: '/portafolio' },
    { name: 'Operate OneTex', href: '/onetex' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
      isScrolled && !isMobileMenuOpen
        ? 'bg-background/90 backdrop-blur-xl border-b border-foreground/10 py-4'
        : 'bg-transparent py-4 lg:py-6'
    }`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        <a href="/" className="flex items-center gap-2 group relative z-50">
          <div className="w-8 h-8 rounded-none border border-foreground bg-foreground flex items-center justify-center text-background font-bold text-xl">
            F
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground uppercase">
            Fortex <span className="text-muted">.</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted hover:text-foreground transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-4 relative z-50">
          <ThemeToggle />
          <Button href="/contacto" variant="ghost" className="px-4 text-muted hover:text-foreground">Contáctanos</Button>
          <Button href="/contacto">Solicitar demo</Button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center gap-3 relative z-50">
          <ThemeToggle />
          <button
            className={`p-2.5 rounded-xl transition-all duration-300 border backdrop-blur-md ${
              isMobileMenuOpen
                ? 'bg-foreground/10 border-foreground/20 text-foreground'
                : 'bg-foreground/5 border-foreground/10 text-muted hover:text-foreground hover:bg-foreground/10'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-2xl bg-surface border border-foreground/10 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
          >
            <div className="p-8 flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-xl font-bold tracking-tight text-muted hover:text-foreground transition-colors py-2"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
```

- [ ] **Step 2: Start dev server and test the toggle**

```bash
npm run dev
```

Open http://localhost:4321. Click the toggle button — page should switch between dark (#0a0a0a) and light (#f5f5f5). Reload page — theme should persist. Stop server.

- [ ] **Step 3: Commit**

```bash
git add src/components/Navbar.jsx
git commit -m "feat: integrate ThemeToggle into Navbar and migrate color classes"
```

---

## Task 5: Migrate Footer.jsx and Button.jsx

**Files:**
- Modify: `src/components/Footer.jsx`
- Modify: `src/components/ui/Button.jsx`

- [ ] **Step 1: Replace Footer.jsx**

```jsx
import React from 'react';

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-foreground/10 bg-background">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="/" className="flex items-center gap-2 group hover:opacity-80 transition-opacity">
          <div className="w-6 h-6 rounded-none bg-foreground border border-foreground flex items-center justify-center text-background font-bold text-xs">
            F
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground uppercase">
            Fortex <span className="text-muted">.</span>
          </span>
        </a>

        <div className="text-sm text-muted">
          © 2026 Fortex Digital Solutions. Todos los derechos son reservados.
        </div>
      </div>
    </footer>
  );
};
```

- [ ] **Step 2: Replace Button.jsx**

```jsx
import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = ({ children, variant = 'primary', className, ...props }) => {
  const baseStyles = 'px-6 py-2.5 rounded-full font-medium transition-all duration-300 inline-flex items-center justify-center cursor-pointer';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]',
    secondary: 'bg-foreground/10 hover:bg-foreground/20 text-foreground backdrop-blur-md border border-foreground/10',
    outline: 'border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-500',
    ghost: 'text-muted hover:text-foreground hover:bg-foreground/5'
  };

  if (props.href) {
    return (
      <a
        className={twMerge(baseStyles, variants[variant], className)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={twMerge(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </button>
  );
};
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.jsx src/components/ui/Button.jsx
git commit -m "feat: migrate Footer and Button to semantic color tokens"
```

---

## Task 6: Migrate FortexHero.jsx

**Files:**
- Modify: `src/components/FortexHero.jsx`

- [ ] **Step 1: Apply migrations to FortexHero.jsx**

Change these lines (all others stay the same):

Line 33 — `variants.secondary`:
```jsx
secondary: "bg-transparent border border-foreground/20 text-foreground hover:border-foreground"
```

Line 110 — section className:
```jsx
className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden selection:bg-[#0047FF] selection:text-white"
```

Line 134 — label div className:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest"
```

Line 134 — the `<span>` line separator:
```jsx
<span className="w-8 h-px bg-muted"></span>
```

Line 139-141 — headline colors (`text-white` → `text-foreground`):
```jsx
<AnimatedText delayOffset={0.2} text="Atrae." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-foreground leading-[0.9] text-left" />
<AnimatedText delayOffset={0.6} text="Convierte." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-[#0047FF] leading-[0.9] text-left" />
<AnimatedText delayOffset={1.0} text="Escala." className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.04em] text-foreground leading-[0.9] text-left" />
```

Line 148 — grid border:
```jsx
className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8 border-t border-foreground/10 pt-8"
```

Line 150 — paragraph:
```jsx
className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-xl"
```

Line 176 — scroll indicator:
```jsx
<div className="w-[30px] h-[46px] border border-foreground/20 rounded-full flex justify-center p-2 pt-2.5 bg-background/50 backdrop-blur-sm">
```

Line 179 — scroll dot:
```jsx
className="w-1.5 h-1.5 bg-foreground rounded-full"
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FortexHero.jsx
git commit -m "feat: migrate FortexHero to semantic color tokens"
```

---

## Task 7: Migrate FortexServices.jsx

**Files:**
- Modify: `src/components/FortexServices.jsx`

- [ ] **Step 1: Apply migrations**

Line 61 — card border:
```jsx
className={`${service.span} group relative border border-foreground/10 hover:border-foreground/20 transition-colors duration-500 overflow-hidden cursor-default`}
```

Line 79 — number span:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted"
```

Line 93 — subtitle p:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted mb-2"
```

Line 96 — title h3:
```jsx
className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-none group-hover:text-foreground transition-colors"
```

Line 102 — description p:
```jsx
className="text-muted group-hover:text-foreground transition-colors duration-500 font-light leading-relaxed text-base max-w-md"
```

Lines 110, 136 — tags span:
```jsx
className="px-3 py-1 border border-foreground/10 group-hover:border-foreground/20 text-muted group-hover:text-foreground font-mono text-xs uppercase tracking-wider transition-colors duration-500"
```

Line 122 — metric bottom border:
```jsx
className={`flex ${isFullWidth ? 'flex-col items-start md:items-end gap-6 shrink-0' : 'items-end justify-between mt-auto pt-6 border-t border-foreground/5 group-hover:border-foreground/10 transition-colors'}`}
```

Line 124 — metric value:
```jsx
className={`text-5xl md:text-6xl font-black text-foreground tracking-tighter leading-none`}
```

Line 127 — metric label:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted mt-1"
```

Line 155 — section:
```jsx
className="py-32 bg-background relative border-t border-foreground/10"
```

Line 164-166 — header label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
```

Line 167 — separator:
```jsx
<span className="w-8 h-px bg-muted" />
```

Line 175 — heading:
```jsx
className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none"
```

Line 188 — portfolio link:
```jsx
className="text-muted font-mono uppercase tracking-widest text-sm hover:text-foreground transition-colors border-b border-muted hover:border-foreground pb-1"
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FortexServices.jsx
git commit -m "feat: migrate FortexServices to semantic color tokens"
```

---

## Task 8: Migrate FortexProcess.jsx

**Files:**
- Modify: `src/components/FortexProcess.jsx`

- [ ] **Step 1: Apply migrations**

Line 52-54 — card className:
```jsx
className={`relative group overflow-hidden transition-colors duration-500 hover:bg-foreground/[0.03] ${
  !isLast ? 'border-b md:border-b-0 md:border-r border-foreground/10' : ''
}`}
```

Line 73 — background number:
```jsx
className="text-[10rem] md:text-[14rem] font-black tracking-tighter text-foreground leading-none"
```

Line 83 — phase label span:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted"
```

Line 85 — duration badge:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted border border-foreground/10 px-2 py-1 group-hover:border-foreground/20 group-hover:text-muted transition-colors duration-300"
```

Line 91 — step title:
```jsx
className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-5 group-hover:text-foreground transition-colors"
```

Line 96 — description:
```jsx
className="text-muted group-hover:text-foreground font-light leading-relaxed text-base transition-colors duration-500 mb-10"
```

Line 101 — deliverables border:
```jsx
className="mt-auto pt-8 border-t border-foreground/5 group-hover:border-foreground/10 transition-colors duration-300"
```

Line 102 — deliverables label:
```jsx
className="font-mono text-[10px] uppercase tracking-widest text-muted mb-4"
```

Line 112-113 — deliverable item:
```jsx
className="flex items-center gap-3 text-sm text-muted group-hover:text-foreground transition-colors duration-300"
```

Line 131 — section:
```jsx
className="py-32 bg-surface relative border-t border-foreground/10"
```

Line 141-143 — header label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
```

Line 144 — separator:
```jsx
<span className="w-8 h-px bg-muted" />
```

Line 151 — heading:
```jsx
className="text-4xl md:text-6xl lg:text-8xl font-bold text-foreground tracking-tighter uppercase leading-none"
```

Line 163 — right paragraph:
```jsx
className="text-muted font-mono text-xs uppercase tracking-widest max-w-xs text-right hidden md:block"
```

Line 190 — cards grid:
```jsx
className="grid grid-cols-1 md:grid-cols-3 border border-foreground/10"
```

Line 200-201 — CTA border:
```jsx
className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 border-t border-foreground/10"
```

Line 203 — CTA text:
```jsx
className="text-muted font-light text-sm"
```

Line 207-209 — CTA button:
```jsx
className="shrink-0 inline-flex items-center gap-3 px-6 py-3 border border-foreground/20 text-foreground font-mono text-xs uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-300"
```

- [ ] **Step 2: Commit**

```bash
git add src/components/FortexProcess.jsx
git commit -m "feat: migrate FortexProcess to semantic color tokens"
```

---

## Task 9: Migrate FortexValueProp.jsx and TransformationBanner.jsx

**Files:**
- Modify: `src/components/FortexValueProp.jsx`
- Modify: `src/components/TransformationBanner.jsx`

- [ ] **Step 1: Apply migrations to FortexValueProp.jsx**

Line 66 — background number:
```jsx
className="text-[8rem] md:text-[12rem] font-bold tracking-tighter text-foreground"
```

Line 74 — card title:
```jsx
className="text-xl md:text-2xl font-bold uppercase tracking-tight mb-4 text-foreground group-hover:text-[#0047FF] transition-colors duration-300"
```

Line 77 — card description:
```jsx
className="text-muted leading-relaxed font-light"
```

Line 87 — base border:
```jsx
className="absolute bottom-0 left-0 h-[1px] w-full bg-foreground/10 origin-left"
```

Line 101 — section:
```jsx
className="py-24 md:py-32 bg-background relative"
```

Line 113 — heading:
```jsx
className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase leading-none"
```

Line 115 — accent span:
```jsx
<span className="text-muted">Conversión.</span>
```

Line 126 — right paragraph:
```jsx
className="text-lg text-muted font-light"
```

- [ ] **Step 2: Apply migrations to TransformationBanner.jsx**

Line 15 — section:
```jsx
className="py-32 bg-background border-t border-foreground/10 relative overflow-hidden"
```

Line 28 — stats grid:
```jsx
className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-foreground/10 mb-16"
```

Line 35 — stat cell:
```jsx
className={`p-8 md:p-10 text-center ${i < stats.length - 1 ? 'border-b md:border-b-0 md:border-r border-foreground/10' : ''}`}
```

Line 37 — stat value:
```jsx
className="text-4xl md:text-5xl font-black text-foreground tracking-tighter leading-none mb-2"
```

Line 40 — stat label:
```jsx
className="font-mono text-[10px] uppercase tracking-widest text-muted max-w-[140px] mx-auto"
```

Line 52 — CTA block:
```jsx
className="border border-foreground/20 bg-surface p-12 md:p-20 flex flex-col items-center text-center"
```

Line 58 — eyebrow:
```jsx
className="font-mono text-xs text-muted uppercase tracking-widest mb-10"
```

Line 67 — heading:
```jsx
className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none mb-8"
```

Line 70 — accent:
```jsx
<span className="text-muted">a la máquina.</span>
```

Line 77 — paragraph:
```jsx
className="text-xl text-muted font-light max-w-2xl mb-16 leading-relaxed"
```

Lines 88-91 — primary CTA button:
```jsx
<a
  href="/demo"
  className="px-10 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-foreground/80 transition-colors"
>
```

Lines 93-96 — secondary CTA button:
```jsx
<a
  href="/contacto"
  className="px-10 py-5 bg-transparent border border-foreground/20 text-foreground font-bold uppercase tracking-widest text-sm hover:border-foreground transition-colors"
>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/FortexValueProp.jsx src/components/TransformationBanner.jsx
git commit -m "feat: migrate FortexValueProp and TransformationBanner to semantic tokens"
```

---

## Task 10: Migrate Hero.jsx and Comparison.jsx

**Files:**
- Modify: `src/components/Hero.jsx`
- Modify: `src/components/Comparison.jsx`

- [ ] **Step 1: Apply migrations to Hero.jsx**

Line 22 — section:
```jsx
className="relative min-h-[90vh] flex items-center justify-center bg-background overflow-hidden selection:bg-white selection:text-black"
```

Line 45 — label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest"
```

Line 75 — border row:
```jsx
className="grid grid-cols-1 md:grid-cols-2 w-full gap-8 mt-8 border-t border-foreground/10 pt-8"
```

Line 77 — paragraph:
```jsx
className="text-xl md:text-2xl text-muted font-light leading-relaxed max-w-xl"
```

Lines 83-90 — primary button (bg-white → bg-foreground, text-black → text-background, bg-gray-200 → bg-foreground/80):
```jsx
<a
  href="/demo"
  className="group relative inline-flex items-center justify-center px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
>
  <span className="relative z-10 flex items-center gap-2">
    Solicitar Demo
    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
  </span>
  <div className="absolute inset-0 bg-foreground/80 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
</a>
```

Lines 93-96 — secondary button:
```jsx
<a
  href="/contacto"
  className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-foreground/20 text-foreground font-bold text-sm uppercase tracking-widest hover:border-foreground transition-colors"
>
```

Lines 112-113 — scroll indicator:
```jsx
<div className="w-[30px] h-[46px] border border-foreground/20 rounded-full flex justify-center p-2 pt-2.5 bg-background/50 backdrop-blur-sm">
  <motion.div ... className="w-1.5 h-1.5 bg-foreground rounded-full" />
```

- [ ] **Step 2: Apply migrations to Comparison.jsx**

Line 7 — section:
```jsx
className="py-32 bg-background border-t border-foreground/10"
```

Line 10 — eyebrow:
```jsx
<span className="text-muted font-mono tracking-widest uppercase text-sm border-b border-muted pb-1">Despliegue Técnico</span>
```

Line 11 — heading:
```jsx
className="text-4xl md:text-6xl font-bold text-foreground mt-8 uppercase tracking-tighter"
```

Line 14 — paragraph:
```jsx
className="text-muted mt-4 max-w-2xl mx-auto font-light text-lg"
```

Line 19 — grid:
```jsx
className="grid lg:grid-cols-2 gap-0 border border-foreground/20"
```

Line 21 — left card:
```jsx
className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-foreground/20 bg-foreground/5 relative flex flex-col group hover:bg-foreground/10 transition-colors duration-500"
```

Line 23 — corner indicator:
```jsx
className="absolute top-0 right-0 w-16 h-16 border-b border-l border-foreground/20 flex items-center justify-center font-mono text-xs text-foreground bg-transparent"
```

Line 28 — card title:
```jsx
className="text-4xl font-bold text-foreground mb-2 uppercase tracking-tighter"
```

Line 29 — badge:
```jsx
className="text-foreground font-mono uppercase text-xs tracking-widest bg-foreground/10 inline-block px-2 py-1"
```

Line 43 — list item text:
```jsx
className="text-muted font-light leading-relaxed"
```

Line 48 — left CTA:
```jsx
<a href="/demo" className="text-center w-full block border border-foreground text-background bg-foreground px-8 py-4 font-bold uppercase tracking-widest text-sm hover:bg-transparent hover:text-foreground transition-colors">
```

Line 54 — right card:
```jsx
className="p-10 md:p-16 relative flex flex-col group hover:bg-foreground/5 transition-colors duration-500"
```

Line 55 — corner indicator:
```jsx
className="absolute top-0 right-0 w-16 h-16 border-b border-l border-foreground/20 flex items-center justify-center font-mono text-xs text-muted bg-transparent"
```

Line 60 — right title:
```jsx
className="text-4xl font-bold text-muted mb-2 uppercase tracking-tighter group-hover:text-foreground transition-colors"
```

Line 61 — right badge:
```jsx
className="text-muted font-mono uppercase text-xs tracking-widest border border-muted inline-block px-2 py-1"
```

Line 75 — right list text:
```jsx
className="text-muted font-light leading-relaxed"
```

Line 80 — right CTA:
```jsx
<a href="/contacto" className="text-center w-full block border border-foreground/20 text-foreground bg-transparent px-8 py-4 font-bold uppercase tracking-widest text-sm hover:border-foreground transition-colors">
```

- [ ] **Step 3: Commit**

```bash
git add src/components/Hero.jsx src/components/Comparison.jsx
git commit -m "feat: migrate Hero and Comparison to semantic color tokens"
```

---

## Task 11: Migrate DemoForm.jsx

**Files:**
- Modify: `src/components/DemoForm.jsx`

- [ ] **Step 1: Apply migrations**

Line 30 — success container:
```jsx
className="bg-background border border-foreground/20 p-12 flex flex-col items-center justify-center text-center min-h-[500px]"
```

Line 32 — OK text:
```jsx
className="font-mono text-6xl text-foreground mb-8"
```

Line 33 — success heading:
```jsx
className="text-3xl font-bold uppercase tracking-tighter text-foreground mb-4"
```

Line 35 — success paragraph:
```jsx
className="text-muted font-light mb-12 max-w-sm"
```

Line 38-40 — return button:
```jsx
className="border-b border-muted hover:border-foreground text-muted hover:text-foreground font-mono uppercase text-xs tracking-widest pb-1 transition-colors"
```

Line 52 — form container:
```jsx
className="bg-surface border border-foreground/10 p-8 md:p-12"
```

Line 55 — form heading:
```jsx
className="text-2xl font-bold uppercase tracking-tighter text-foreground mb-2"
```

Line 57 — form eyebrow:
```jsx
className="text-muted font-mono text-xs uppercase tracking-widest"
```

Lines 63, 76, 88, 101 — labels:
```jsx
className="text-xs font-mono uppercase tracking-widest text-muted block mb-2"
```

Lines 65-71, 79-85, 91-97 — inputs:
```jsx
className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors"
```

Lines 103-109 — textarea:
```jsx
className="w-full bg-transparent border-b border-foreground/20 px-0 py-3 text-foreground placeholder:text-muted/40 focus:outline-none focus:border-foreground transition-colors resize-none"
```

Line 114 — submit button:
```jsx
className="w-full mt-8 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-foreground/80 transition-colors"
```

- [ ] **Step 2: Commit**

```bash
git add src/components/DemoForm.jsx
git commit -m "feat: migrate DemoForm to semantic color tokens"
```

---

## Task 12: Migrate ProblemSection.jsx and SolutionSection.jsx

**Files:**
- Modify: `src/components/ProblemSection.jsx`
- Modify: `src/components/SolutionSection.jsx`

- [ ] **Step 1: Apply migrations to ProblemSection.jsx**

Line 57 — card:
```jsx
className={`relative overflow-hidden group transition-colors duration-500 hover:bg-foreground/[0.03] flex flex-col justify-between min-h-[320px] p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-foreground/10 ${isLast ? 'border-b-0 border-r-0' : ''}`}
```

Line 71 — number:
```jsx
className="font-mono text-3xl font-bold text-foreground/10 group-hover:text-red-600/40 transition-colors duration-300 mb-8 select-none"
```

Line 77 — title:
```jsx
className="text-xl font-bold text-foreground uppercase tracking-tight group-hover:text-red-400 transition-colors duration-300"
```

Line 80 — description:
```jsx
className="text-muted group-hover:text-foreground font-light leading-relaxed transition-colors duration-500 text-sm"
```

Line 86 — stat border:
```jsx
className="mt-8 pt-6 border-t border-foreground/5 group-hover:border-foreground/10 transition-colors duration-300"
```

Line 87 — stat value:
```jsx
className="text-3xl font-black text-foreground tracking-tighter leading-none"
```

Line 90 — stat label:
```jsx
className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-muted mt-1 transition-colors duration-300 max-w-[160px]"
```

Line 100 — section:
```jsx
className="py-24 md:py-40 bg-background relative border-t border-foreground/10"
```

Line 108-110 — header label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
```

Line 118 — heading:
```jsx
className="text-4xl md:text-6xl font-bold text-foreground leading-none tracking-tighter uppercase"
```

Line 138 — cards grid:
```jsx
className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border border-foreground/10"
```

- [ ] **Step 2: Apply migrations to SolutionSection.jsx**

Line 7 — section:
```jsx
className="py-32 bg-background relative border-t border-foreground/10 overflow-hidden"
```

Line 23 — label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
```

Line 25 — separator:
```jsx
<span className="w-8 h-px bg-foreground"></span>
```

Line 34 — heading:
```jsx
className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground uppercase leading-none"
```

Line 36 — accent:
```jsx
<span className="text-muted">Absoluto.</span>
```

Line 48 — right paragraph:
```jsx
className="text-xl text-muted font-light"
```

Line 60 — product card:
```jsx
className="border border-foreground/20 bg-background"
```

Line 65 — left panel:
```jsx
className="p-10 md:p-16 border-b lg:border-b-0 lg:border-r border-foreground/20 flex flex-col justify-between"
```

Line 67 — OneTex heading:
```jsx
className="text-4xl font-bold text-foreground mb-4 uppercase tracking-tighter flex items-center gap-4"
```

Line 68 — CORE badge:
```jsx
<span className="px-2 py-0.5 rounded-none text-xs bg-foreground text-background font-mono tracking-widest border border-foreground">CORE</span>
```

Line 71 — paragraph:
```jsx
className="text-muted text-xl font-light mb-12"
```

Line 81 — item number:
```jsx
className="font-mono text-sm text-muted group-hover:text-foreground transition-colors"
```

Line 83 — item title:
```jsx
className="text-foreground font-bold uppercase tracking-tight text-lg mb-1"
```

Line 84 — item desc:
```jsx
className="text-muted font-light leading-relaxed"
```

Line 90 — CTA button:
```jsx
<a href="/demo" className="inline-flex items-center justify-between px-8 py-5 bg-foreground text-background font-bold uppercase tracking-widest text-sm hover:bg-foreground/80 transition-colors w-full group">
```

Line 97 — right panel:
```jsx
className="p-10 md:p-16 bg-surface flex items-center justify-center relative overflow-hidden"
```

Line 99 — wireframe border:
```jsx
className="w-full h-full border border-foreground/10 flex flex-col"
```

Line 101 — wireframe header:
```jsx
className="h-12 border-b border-foreground/10 flex items-center justify-between px-6 bg-foreground/5"
```

Line 103-104 — dots:
```jsx
<div className="w-2 h-2 bg-foreground/20 rounded-full" />
<div className="w-2 h-2 bg-foreground/20 rounded-full" />
```

Line 106 — dashboard label:
```jsx
className="text-xs font-mono text-muted"
```

Lines 111-113 — wireframe cards:
```jsx
className="flex-1 border border-foreground/5 bg-foreground/[0.02]"
```

Line 115 — chart container:
```jsx
className="flex-1 border border-foreground/5 bg-foreground/[0.02] flex items-end p-6"
```

Line 117 — chart border:
```jsx
className="w-full h-1/2 border-t border-l border-foreground/10 relative"
```

Line 119 — chart SVG path: use `style` prop (SVG presentation attributes don't support CSS functions):
```jsx
<path d="M0,50 L50,40 L100,60 L150,20 L200,30 L250,10 L300,40 L350,20 L400,0" fill="none" style={{ stroke: 'var(--color-foreground)', opacity: 0.2 }} strokeWidth="2" vectorEffect="non-scaling-stroke"/>
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ProblemSection.jsx src/components/SolutionSection.jsx
git commit -m "feat: migrate ProblemSection and SolutionSection to semantic tokens"
```

---

## Task 13: Migrate SuiteOneTex.jsx

**Files:**
- Modify: `src/components/SuiteOneTex.jsx`

- [ ] **Step 1: Apply migrations**

Line 34 — timeline vertical line:
```jsx
<div className="absolute left-[7px] top-4 w-px h-full bg-foreground/10" />
```

Line 36 — timeline dot:
```jsx
className={`w-3.5 h-3.5 rounded-full shrink-0 mt-0.5 border border-foreground/20 ${e.dot}`}
```

Line 38-39 — timeline time/user:
```jsx
<span className="font-mono text-[10px] text-muted">{e.time}</span>
<span className="font-mono text-[10px] text-muted uppercase tracking-wider">{e.user}</span>
```

Line 42 — timeline action:
```jsx
className="text-xs text-foreground"
```

Lines 63, 113 — status/checklist borders:
```jsx
className="border border-foreground/10 p-4 bg-foreground/[0.02]"
```

Line 66 — status id:
```jsx
<span className="font-mono text-[10px] text-muted uppercase">#{item.id}</span>
```

Line 67 — status name:
```jsx
className="text-sm font-bold text-foreground"
```

Line 78 — progress bg:
```jsx
className="h-1 bg-foreground/5 w-full"
```

Line 86 — uptime:
```jsx
className="font-mono text-[9px] text-muted mt-1 text-right"
```

Lines 113, 197 — item borders:
```jsx
className="flex items-center gap-3 p-3 border border-foreground/5 bg-foreground/[0.02]"
```

Line 115 — checkbox:
```jsx
className={`w-4 h-4 border shrink-0 flex items-center justify-center ${item.done ? 'border-foreground bg-foreground' : 'border-foreground/20'}`}
```

Line 116 — checkmark (inside checkbox):
```jsx
className="w-2.5 h-2.5 text-background"
```

Line 122 — checklist item text:
```jsx
className={`text-xs ${item.done ? 'text-muted line-through' : 'text-foreground'}`}
```

Lines 142-143 — RBAC header:
```jsx
<span className="font-mono text-[9px] uppercase tracking-wider text-muted">Rol</span>
{cols.map(c => (
  <span key={c} className="font-mono text-[9px] uppercase tracking-wider text-muted text-center">{c}</span>
```

Line 148 — RBAC grid border:
```jsx
className="grid grid-cols-5 border-b border-foreground/10 pb-2 mb-2"
```

Line 154 — RBAC row:
```jsx
className="grid grid-cols-5 py-3 border-b border-foreground/5 items-center"
```

Line 156 — role name:
```jsx
className="font-mono text-xs text-foreground"
```

Lines 158-163 — RBAC check/x:
```jsx
<div className="w-4 h-4 bg-foreground flex items-center justify-center">
  <svg className="w-2.5 h-2.5 text-background" ...>
// denied:
<div className="w-4 h-4 border border-foreground/10 flex items-center justify-center">
  <svg className="w-2.5 h-2.5 text-foreground/20" ...>
```

Lines 197-199 — alert items:
```jsx
className="flex items-start gap-3 p-3 border border-foreground/5 bg-foreground/[0.02]"
```

Line 207 — alert equipo:
```jsx
className="font-mono text-[9px] text-muted"
```

Line 209 — alert message:
```jsx
className="text-xs text-muted"
```

Line 212 — alert time:
```jsx
className="font-mono text-[9px] text-muted shrink-0"
```

Lines 226-228 — audit headers:
```jsx
{['Hora', 'Usuario', 'Acción', 'Código'].map(h => (
  <span key={h} className="font-mono text-[9px] uppercase tracking-wider text-muted">{h}</span>
```

Line 225 — audit header border:
```jsx
className="grid grid-cols-4 border-b border-foreground/10 pb-2 mb-1"
```

Line 232 — audit row:
```jsx
className="grid grid-cols-4 py-2 border-b border-foreground/[0.04] items-center"
```

Lines 234-236 — audit cells:
```jsx
<span className="font-mono text-[10px] text-muted">{l.time}</span>
<span className="font-mono text-[10px] text-foreground">{l.user}</span>
<span className="font-mono text-[10px] text-muted truncate">{l.action}</span>
```

Line 264 — section:
```jsx
className="py-32 bg-background border-t border-foreground/10"
```

Line 268-270 — label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-6"
```

Line 271 — separator:
```jsx
<span className="w-8 h-px bg-muted" />
```

Line 277 — heading:
```jsx
className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mt-4 tracking-tighter uppercase leading-none"
```

Line 279 — accent:
```jsx
<span className="text-muted">sin fricción.</span>
```

Line 289 — grid:
```jsx
className="grid lg:grid-cols-12 gap-0 border border-foreground/10"
```

Line 292 — left panel:
```jsx
className="lg:col-span-5 flex flex-col border-b lg:border-b-0 lg:border-r border-foreground/10"
```

Line 295-298 — tab button:
```jsx
className={`text-left p-6 md:p-8 border-b border-foreground/10 last:border-b-0 transition-all duration-300 group flex items-start gap-6 ${
  activeTab === benefit.id
    ? 'bg-foreground text-background'
    : 'bg-transparent text-foreground hover:bg-foreground/5'
}`}
```

Line 303-305 — tab number:
```jsx
className={`font-mono text-sm mt-1 transition-colors shrink-0 ${
  activeTab === benefit.id ? 'text-background font-bold' : 'text-muted group-hover:text-foreground'
}`}
```

Line 312-314 — tab description:
```jsx
className={`font-light leading-relaxed text-sm transition-colors ${
  activeTab === benefit.id ? 'text-background/70' : 'text-muted'
}`}
```

Line 323 — right panel:
```jsx
className="lg:col-span-7 bg-surface flex flex-col relative min-h-[540px] overflow-hidden"
```

Line 325 — top bar:
```jsx
className="h-10 border-b border-foreground/10 flex items-center px-5 gap-3 bg-foreground/[0.03] shrink-0"
```

Lines 326-328 — traffic light dots:
```jsx
<div className="w-2 h-2 rounded-full bg-foreground/15" />
<div className="w-2 h-2 rounded-full bg-foreground/15" />
<div className="w-2 h-2 rounded-full bg-foreground/15" />
```

Line 330 — dashboard label:
```jsx
className="ml-auto font-mono text-[10px] text-muted uppercase tracking-widest"
```

Line 335 — grid overlay: use inline style so CSS variables work correctly:
```jsx
<div
  className="absolute inset-0 pointer-events-none"
  style={{
    backgroundImage: 'linear-gradient(var(--color-foreground) 1px, transparent 1px), linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)',
    backgroundSize: '24px 24px',
    opacity: 0.02,
  }}
/>
```

- [ ] **Step 2: Commit**

```bash
git add src/components/SuiteOneTex.jsx
git commit -m "feat: migrate SuiteOneTex to semantic color tokens"
```

---

## Task 14: Migrate ProcessStepper.jsx and PortafolioGallery.jsx

**Files:**
- Modify: `src/components/ProcessStepper.jsx`
- Modify: `src/components/PortafolioGallery.jsx`

- [ ] **Step 1: Apply migrations to ProcessStepper.jsx**

Line 42 — section:
```jsx
className="py-32 bg-surface relative border-t border-foreground/10 overflow-hidden"
```

Line 47 — header label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-8"
```

Line 48 — separator:
```jsx
<span className="w-8 h-px bg-muted"></span>
```

Line 51 — heading:
```jsx
className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground uppercase leading-none"
```

Line 55 — right paragraph:
```jsx
className="text-muted font-light max-w-sm text-lg"
```

Line 61 — stepper container:
```jsx
className="grid lg:grid-cols-12 gap-0 border border-foreground/20 bg-background"
```

Line 64 — left panel:
```jsx
className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-foreground/20 flex flex-col"
```

Line 65 — "Seleccione Fase" label:
```jsx
className="font-mono text-xs text-muted p-6 border-b border-foreground/10 uppercase tracking-widest"
```

Lines 70-73 — step button:
```jsx
className={`flex items-center justify-between p-6 md:px-8 border-b border-foreground/10 last:border-b-0 transition-colors group ${
  activeStep === num
    ? 'bg-foreground text-background'
    : 'bg-transparent text-muted hover:bg-foreground/5 hover:text-foreground'
}`}
```

Line 79 — step number span:
```jsx
className={`font-mono text-sm ${activeStep === num ? 'text-background' : 'text-muted'}`}
```

Line 83 — bottom CTA area:
```jsx
className="mt-auto p-6 md:px-8 bg-foreground/5"
```

Line 84 — bottom link:
```jsx
className="text-foreground font-mono uppercase tracking-widest text-xs border-b border-muted hover:border-foreground transition-colors pb-1"
```

Line 101 — big number:
```jsx
className="font-mono text-6xl md:text-8xl font-bold text-foreground/5 mb-8"
```

Line 105 — step title:
```jsx
className="text-4xl md:text-5xl font-bold text-foreground uppercase tracking-tighter mb-8 max-w-xl"
```

Line 109 — step description:
```jsx
className="text-xl text-muted font-light leading-relaxed max-w-2xl mb-16"
```

Line 113 — details border:
```jsx
className="mt-auto grid md:grid-cols-2 gap-12 border-t border-foreground/10 pt-12"
```

Line 115 — details heading:
```jsx
className="text-foreground font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-4"
```

Line 116 — heading separator:
```jsx
<span className="w-4 h-px bg-foreground"></span>
```

Lines 121, 134 — detail items:
```jsx
className="text-muted font-mono text-sm uppercase bg-foreground/5 p-3 border border-foreground/10"
```

- [ ] **Step 2: Apply migrations to PortafolioGallery.jsx**

Line 23 — image wrapper:
```jsx
className={`relative overflow-hidden border border-foreground/10 group-hover:border-foreground/25 transition-colors duration-500 ${featured ? 'aspect-[16/7]' : 'aspect-[4/3]'}`}
```

Line 54 — project number:
```jsx
className="absolute top-6 left-6 font-mono text-xs uppercase tracking-widest text-white/40"
```
*(keep white/40 — overlaid on image, always needs white regardless of theme)*

Line 59 — year:
```jsx
className="absolute top-6 right-6 font-mono text-xs uppercase tracking-widest text-white/40"
```
*(keep white/40 — same reason)*

Line 72 — category label:
```jsx
className="font-mono text-[10px] uppercase tracking-widest text-muted"
```

Line 77 — project title:
```jsx
className="text-xl md:text-2xl font-bold text-foreground tracking-tight group-hover:text-muted transition-colors duration-300"
```

Line 82 — description:
```jsx
className="text-muted text-sm leading-relaxed mt-2 max-w-md"
```

Line 90 — tags:
```jsx
className="font-mono text-[10px] uppercase tracking-wider text-muted group-hover:text-foreground transition-colors"
```

Line 114 — section:
```jsx
className="py-24 lg:py-32 bg-surface relative"
```

Line 120-122 — header label:
```jsx
className="flex items-center gap-4 text-muted font-mono text-sm uppercase tracking-widest mb-6"
```

Line 123 — separator:
```jsx
<span className="w-8 h-px bg-muted" />
```

Line 130 — heading:
```jsx
className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tighter uppercase leading-none"
```

Line 132 — accent:
```jsx
<span className="text-muted">Estudio.</span>
```

Lines 155-159 — filter button:
```jsx
className={`font-mono text-xs uppercase tracking-widest px-4 py-2 border transition-all duration-300 ${
  activeCategory === cat
    ? 'border-foreground text-background bg-foreground'
    : 'border-foreground/15 text-muted hover:border-foreground/40 hover:text-foreground'
}`}
```

Line 168 — project count border:
```jsx
className="flex items-center gap-3 mb-12 border-t border-foreground/10 pt-8"
```

Lines 169, 178 — count text:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted"
```

Line 213 — bottom divider:
```jsx
className="mt-24 pt-8 border-t border-foreground/10 flex items-center justify-between"
```

Line 214 — bottom label:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted"
```

Line 218-220 — bottom link:
```jsx
className="font-mono text-xs uppercase tracking-widest text-muted hover:text-foreground transition-colors border-b border-muted hover:border-foreground pb-1"
```

- [ ] **Step 3: Commit**

```bash
git add src/components/ProcessStepper.jsx src/components/PortafolioGallery.jsx
git commit -m "feat: migrate ProcessStepper and PortafolioGallery to semantic tokens"
```

---

## Task 15: Visual verification — both themes, all pages

**Files:** None modified.

- [ ] **Step 1: Start dev server**

```bash
npm run dev
```

- [ ] **Step 2: Verify dark theme (default) on all pages**

Visit each URL and confirm no visual regression vs. the original dark design:
- http://localhost:4321 (Fortex Agency)
- http://localhost:4321/portafolio
- http://localhost:4321/onetex
- http://localhost:4321/contacto
- http://localhost:4321/demo

Check: headings visible, text readable, borders visible, glassmorphism renders, brand blue (#0047FF) unchanged.

- [ ] **Step 3: Switch to light theme and verify all pages**

Click the toggle in the Navbar. Verify on each page:
- Background is #f5f5f5 (light gray)
- Card/surface areas are #ebebeb
- Text is #111111 (near-black), readable
- Muted text is #555555
- Brand blue #0047FF still appears on accents
- Active tabs/buttons show `bg-foreground text-background` (black bg, white text in light)
- Form inputs have visible borders
- Logo box: black square with white F in light mode

- [ ] **Step 4: Verify localStorage persistence**

Switch to light mode, reload page — should still be light. Switch back to dark, reload — should stay dark.

- [ ] **Step 5: Test OS preference fallback**

Clear localStorage (`localStorage.removeItem('theme')` in DevTools console), reload. Theme should match OS preference.

- [ ] **Step 6: Stop server and do a production build check**

```bash
npm run build
```

Expected: build completes with no errors. If there are errors, fix them before the final commit.

- [ ] **Step 7: Final commit**

```bash
git add -A
git commit -m "feat: complete light/dark theme system and design token migration"
```
