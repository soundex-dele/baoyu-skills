---
name: screen-print
category: style-preset
---

# Screen-Print Style

Bold poster art with halftone textures, limited colors, and symbolic storytelling.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: solid-bold

typography:
  decorated: outline
  tags: stamp-badge
  font: Archivo Black
  direction: horizontal

decorations:
  shapes: bold-geometric, cutout
  emphasis: none (pure shape)
  background: solid-or-halftone
  frames: thick-border
  doodles: geometric-patterns, halftone-dots
```

## Default Color Palette

```css
:root {
    --bg-primary: #1A1A2E;         /* Deep navy */
    --bg-secondary: #0F0F23;       /* Darker navy */
    --bg-card: #FFFFFF;            /* White */
    --bg-accent: #E94560;          /* Bold red */
    --text-primary: #FFFFFF;       /* White */
    --text-secondary: #B8B8D0;     /* Light gray */
    --text-tertiary: #6B6B8D;      /* Dim gray */
    --zone-1: #E94560;             /* Red */
    --zone-2: #FFD700;             /* Gold */
    --zone-3: #0F3460;             /* Deep blue */
    --zone-4: #533483;             /* Purple */
    --accent: #FFD700;             /* Gold */
    --accent-soft: #FFE44D;        /* Light gold */
    --accent-bg: rgba(255, 215, 0, 0.15);
    --border: #E94560;             /* Red border */
    --border-light: #2A2A4E;       /* Light border */
    --shadow: rgba(0, 0, 0, 0.3);
    --shadow-strong: rgba(0, 0, 0, 0.5);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Archivo Black', sans-serif;
    background: var(--bg-primary);
}

/* Halftone texture overlay */
.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 8px 8px;
    z-index: var(--z-decoration);
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 4px solid var(--accent);
    border-radius: 0;
    padding: 24px;
    clip-path: polygon(0 4%, 100% 0, 96% 100%, 4% 96%);
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-3xl);
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

/* Outline text */
.text-outline {
    -webkit-text-stroke: 3px var(--accent);
    color: transparent;
}

/* Tags — stamp style */
.tag {
    background: var(--accent);
    color: var(--bg-primary);
    border-radius: 0;
    padding: 4px 16px;
    font-size: var(--text-xs);
    font-weight: 900;
    text-transform: uppercase;
    transform: rotate(-2deg);
}
```

## Visual Elements

- **Shapes**: Bold geometric cutouts, asymmetric
- **Accents**: Halftone dot patterns, bold shapes
- **Background**: Deep solid color with halftone overlay
- **Borders**: Thick (4px+), high contrast
- **Shadows**: None (flat print aesthetic)
- **Icons**: Bold, geometric, symbolic

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Poster covers |
| balanced | ✓✓ | Editorial content |
| dense | ✗ | Not recommended |
| list | ✓ | Bold lists |
| comparison | ✓✓ | Dramatic comparisons |
| flow | ✓ | Story sequences |
| quadrant | ✓✓ | Frameworks |

## Best For

- Movie and book reviews
- Opinion pieces and editorials
- Cultural commentary
- Bold poster-style covers
- Dramatic comparisons
