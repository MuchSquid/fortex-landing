# Design System

## Color Palette
The project uses a modern Dark Mode theme with **Blue** as the primary accent color.

### Primary Colors
- **Brand Blue:** `text-blue-500`, `bg-blue-600` (Used for CTAs, highlights, icons).
- **Background:** `#0a0a0a` (Main background) and `#0f172a` (Secondary/Card backgrounds).
- **Text:** `text-white` (Headings), `text-gray-400` (Body).

### Gradients
- **Blue Gradient:** `from-blue-400 to-blue-600` (Text gradients, subtle backgrounds).
- **Dark Gradient:** `from-gray-900 to-black` (Card backgrounds).

## Typography
- **Font Family:** Inter (via Google Fonts).
- **Headings:** Bold, tight tracking. Hero headers are large (`text-6xl+`).
- **Body:** Clean, legible, good contrast (`text-gray-400`).

## UI Components

### Buttons (`src/components/ui/Button.jsx`)
- **Primary:** Blue background, shadow glow (`shadow-blue-500/30`).
- **Secondary:** Glassmorphism (`bg-white/10`), backdrop blur.
- **Ghost:** Transparent, hover effects.
- **Polymorphic:** Renders as `<a>` if `href` is provided, otherwise `<button>`.

### Glassmorphism
Extensive use of:
- `bg-white/5` or `bg-white/10`
- `backdrop-blur-md` or `backdrop-blur-xl`
- `border border-white/10`

### Animations (Framer Motion)
- **Entrance:** Fade up (`opacity: 0, y: 20` -> `opacity: 1, y: 0`).
- **Interactivity:** Hover scale, glow intensity increase.
- **Transitions:** Smooth layout changes (e.g., Suite OneTex tabs).
