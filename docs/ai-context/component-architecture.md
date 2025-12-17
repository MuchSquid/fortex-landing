# Component Architecture

## Core Components

### `Navbar` (`src/components/Navbar.jsx`)
- Sticky navigation bar.
- Changes appearance on scroll (transparent -> blurred black).
- Mobile menu with animation.
- Links to sections and `/demo`.

### `Hero` (`src/components/Hero.jsx`)
- Full-screen introduction.
- Animated background beams and gradients.
- Large typography.
- Interactive Dashboard Mockup (CSS/Div constructed).
- Primary CTA links to `/demo`.

### `SuiteOneTex` (`src/components/SuiteOneTex.jsx`)
- Interactive tabbed section.
- **Left:** List of benefits (clickable tabs).
- **Right:** Dynamic preview card that changes based on active tab.
- Uses `AnimatePresence` for smooth transitions.

### `ProcessStepper` (`src/components/ProcessStepper.jsx`)
- Visualizes the 7-step implementation process.
- Fully interactive: Click steps to view details.
- Scaled active step with glow effect.

### `TransformationBanner` (`src/components/TransformationBanner.jsx`)
- Final call-to-action section.
- Strong blue gradient text.
- Links to `/demo`.

### `DemoForm` (`src/components/DemoForm.jsx`)
- Contact form used in `/demo` page.
- Fields: Name, Email, Company, Message.
- Simulates submission with success state.
- Styled with glassmorphism to match the site.

## Layouts

### `Layout.astro`
- Base Astro layout.
- Handles global styles (`global.css`), fonts (Inter), and SEO metadata.
