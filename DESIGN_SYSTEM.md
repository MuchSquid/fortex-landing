# 🎨 Sistema de Diseño - Fortex Digital Solutions

## Filosofía de Diseño

**Estilo único y distintivo** - NO genérico, NO plantillas prediseñadas

- **Brutalismo minimalista** - Formas directas, bordes definidos, tipografía audaz
- **Contraste alto** - Blanco/negro con acentos de azul eléctrico (#0047FF)
- **Animaciones sutiles pero impactantes** - Framer Motion con propósito
- **Glassmorfismo adaptativo** - Transparencias que funcionan en ambos temas

---

## 🌓 Sistema de Temas (Dark / Light)

### ✅ Implementación Actual

Ya tienes **tema oscuro Y tema claro** completamente funcionales:

1. **Toggle en Navbar** - Botón con icono ☀/☾
2. **Persistencia** - Se guarda en `localStorage`
3. **Prevención FOUC** - Script en `<head>` aplica tema antes del render
4. **Tokens CSS** - Variables que se adaptan automáticamente

### Paleta de Colores

#### 🌙 Dark Theme (Actual por defecto)
```css
--color-background: #0a0a0a      /* Fondo casi negro */
--color-surface: #050505          /* Superficies más oscuras */
--color-foreground: #f8fafc       /* Texto blanco */
--color-muted: #9ca3af            /* Texto secundario */
--color-primary: #0047FF          /* Azul Fortex */
```

#### ☀️ Light Theme (Mejorado)
```css
--color-background: #ffffff       /* Fondo blanco puro */
--color-surface: #f8f9fa          /* Superficies ligeramente grises */
--color-foreground: #0a0a0a       /* Texto negro */
--color-muted: #6b7280            /* Texto secundario */
--color-primary: #0047FF          /* Mismo azul, ajustado */
```

---

## 🎨 Tokens de Color Semánticos

### Variables CSS Globales (Auto-adaptativas)

```css
/* Colores de marca */
--color-primary          /* Azul principal (#0047FF) */
--color-primary-hover    /* Hover state del azul */
--color-primary-glow     /* Efecto de brillo/sombra */
--color-primary-subtle   /* Versión translúcida (backgrounds) */

/* Colores de acento */
--color-accent           /* Azul secundario para botones */
--color-accent-hover     /* Hover state */

/* Bordes */
--border-color           /* Bordes sutiles (10% opacity) */
--border-color-strong    /* Bordes más visibles (20% opacity) */

/* Sombras */
--shadow-card            /* Sombra para tarjetas */
--shadow-glow            /* Sombra con brillo azul */

/* Interactividad */
--bg-glass               /* Background glassmorphism sutil */
--bg-glass-hover         /* Hover state glassmorphism */
```

### ⚡ Cómo Usar los Tokens

**❌ NO hagas esto:**
```jsx
className="bg-blue-600 border-white/10"
```

**✅ HAZ esto:**
```jsx
className="bg-[var(--color-accent)] border-[var(--border-color)]"
```

**Beneficios:**
- Los colores se adaptan automáticamente al tema
- Consistencia visual garantizada
- Cambios centralizados (editas una vez en `global.css`)

---

## 🧱 Componentes del Sistema

### Button (`src/components/ui/Button.jsx`)

Variantes disponibles:

```jsx
<Button variant="primary">   {/* Azul brillante con glow */}
<Button variant="secondary">  {/* Glass con backdrop blur */}
<Button variant="outline">    {/* Borde azul, fondo transparente */}
<Button variant="ghost">      {/* Texto simple, hover sutil */}
```

### ThemeToggle (`src/components/ThemeToggle.jsx`)

- Icono cambia automáticamente (☀ dark → ☾ light)
- Guarda preferencia en localStorage
- Texto descriptivo en desktop (oculto en móvil)

### Glassmorphism

Clases utilitarias en `global.css`:

```css
.glass         /* Más opaco, bordes más visibles */
.glass-card    /* Más sutil, blur más intenso */
```

**Se adaptan automáticamente al tema** - usan las variables `--bg-glass` y `--border-color`

---

## 🎭 Efectos Únicos (Tu Diferenciación)

### 1. Efecto Magnético (Magnetic Buttons)

**Ubicación:** `FortexHero.jsx` - componente `MagneticButton`

Botones que "siguen" el cursor con física de resorte usando Framer Motion.

```jsx
<MagneticButton href="/contacto" variant="primary">
  Iniciar Proyecto
</MagneticButton>
```

### 2. Gradiente Reactivo al Cursor

**Ubicación:** `FortexHero.jsx` - `backgroundGradient`

Luz radial azul que sigue el mouse, adaptada al tema:

```jsx
radial-gradient(circle 800px at cursor, var(--color-primary-subtle), transparent)
```

### 3. Animaciones de Texto Staggered

**Ubicación:** `FortexHero.jsx` - componente `AnimatedText`

Letras individuales aparecen en secuencia con animación de resorte.

### 4. View Transitions

**Ubicación:** `portfolio/[slug].astro`

Transiciones de página animadas con elementos compartidos:
- Imágenes de portafolio se "mueven" entre páginas
- Smooth fade entre rutas

---

## 📐 Espaciado y Tipografía

### Font Stack
```css
--font-sans: "Inter", system-ui, -apple-system, sans-serif;
```

### Escalas de Tipografía

**Hero (Brutalist):**
- Mobile: `text-6xl` (3.75rem / 60px)
- Desktop: `text-[10rem]` (160px)
- Weight: `font-black` (900)
- Tracking: `-0.04em` (muy apretado)

**Body:**
- Base: `text-base` (1rem / 16px)
- Large: `text-xl` o `text-2xl`
- Weight: `font-light` (300) o `font-medium` (500)

### Espaciado

```css
--spacing-section: 5rem;  /* Espacio vertical entre secciones */
```

---

## 🛠 Mejores Prácticas

### ✅ DO's (HAZ esto)

1. **Usa tokens de CSS** en lugar de colores hardcodeados
2. **Prueba ambos temas** después de cada cambio visual
3. **Mantén la brutalidad** - bordes definidos, no todo redondeado
4. **Animaciones con propósito** - no agregar movimiento solo porque sí
5. **Alto contraste** - asegura legibilidad en ambos temas

### ❌ DON'Ts (NO hagas esto)

1. **NO uses colores hex directos** (`#0047FF`) - usa `var(--color-primary)`
2. **NO copies componentes de shadcn/ui** sin adaptarlos al estilo
3. **NO agregues patrones genéricos** (ej: hero con foto de stock)
4. **NO sobrecargues con animaciones** - keep it subtle
5. **NO uses `rounded-full` en todo** - mantén el estilo angular

---

## 🚀 Cómo Extender el Sistema

### Agregar un Nuevo Color

1. Define en ambos temas en `global.css`:
```css
html.dark {
  --color-success: #10b981;
}

html.light {
  --color-success: #059669;
}
```

2. Úsalo con `var()`:
```jsx
className="text-[var(--color-success)]"
```

### Crear un Nuevo Componente

1. Importa los componentes base si existen (`Button`, `motion`, etc.)
2. Usa tokens de color (`var(--color-*)`)
3. Usa clases semánticas de Tailwind (`text-foreground`, `bg-surface`)
4. Prueba en dark y light

### Modificar Valores de Tema

Edita **una vez** en `src/styles/global.css` → se aplica globalmente

---

## 🧪 Testing del Sistema de Temas

### Checklist Visual

- [ ] Navbar legible en ambos temas
- [ ] Hero text tiene suficiente contraste
- [ ] Botones destacan apropiadamente
- [ ] Glassmorphism visible pero no opaco
- [ ] Formularios legibles
- [ ] Footer distinguible del background
- [ ] Bordes visibles pero no dominantes
- [ ] Sombras sutiles en light theme

### Testing en Navegador

1. Abre DevTools
2. Inspecciona `<html>` tag
3. Cambia manualmente `.dark` ↔ `.light`
4. Verifica que todos los elementos se adapten

---

## 📚 Referencia Rápida

| Necesito... | Uso... |
|-------------|--------|
| Color de marca (azul) | `var(--color-primary)` |
| Background principal | `bg-background` o `var(--color-background)` |
| Texto principal | `text-foreground` |
| Texto secundario | `text-muted` |
| Borde sutil | `border-[var(--border-color)]` |
| Efecto glass | clase `.glass` o `.glass-card` |
| Botón principal | `<Button variant="primary">` |
| Sombra con glow | `shadow-[var(--shadow-glow)]` |

---

## 🎯 Identidad Visual (Lo que te hace único)

1. **Tipografía gigante** en hero (10rem) - statement fuerte
2. **Bordes rectangulares** (no redondeados) - brutalismo
3. **Azul eléctrico #0047FF** - color distintivo de marca
4. **Efectos magnéticos** - interactividad premium
5. **Glassmorphism minimalista** - moderno sin exceso
6. **Animaciones físicas** (spring, magnetic) - no easing genérico
7. **Contraste dramático** - blanco/negro + azul

**NO eres un template genérico. Eres Fortex - audaz, técnico, directo.**

---

## 📖 Recursos Internos

- Tokens: `src/styles/global.css`
- Componentes UI: `src/components/ui/`
- Hero único: `src/components/FortexHero.jsx`
- Toggle: `src/components/ThemeToggle.jsx`
- Layout base: `src/layouts/Layout.astro`
