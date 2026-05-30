---
name: chalkboard
category: style-preset
---

# Chalkboard Style

Colorful chalk on black board — educational, nostalgic, classroom-inspired.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: dark-green-or-black

typography:
  decorated: chalk-outline
  tags: chalk-label
  font: Caveat
  direction: horizontal

decorations:
  shapes: hand-drawn-chalk
  emphasis: chalk-circle, chalk-underline
  background: chalkboard-texture
  frames: chalk-border
  doodles: chalk-doodles, eraser-marks
```

## Default Color Palette

```css
:root {
    --bg-primary: #2D4A3E;         /* Dark green chalkboard */
    --bg-secondary: #243D32;       /* Darker green */
    --bg-card: rgba(255, 255, 255, 0.08); /* Semi-transparent */
    --bg-accent: rgba(255, 255, 255, 0.05);
    --text-primary: #F0E6D3;       /* Chalk white */
    --text-secondary: #C4B89A;     /* Chalk yellow */
    --text-tertiary: #8A7E68;      /* Dim chalk */
    --zone-1: #FFD93D;             /* Yellow chalk */
    --zone-2: #FF6B6B;             /* Red chalk */
    --zone-3: #6BCB77;             /* Green chalk */
    --zone-4: #4D96FF;             /* Blue chalk */
    --accent: #FFD93D;             /* Yellow highlight */
    --accent-soft: rgba(255, 217, 61, 0.3);
    --accent-bg: rgba(255, 217, 61, 0.1);
    --border: rgba(240, 230, 211, 0.2);
    --border-light: rgba(240, 230, 211, 0.1);
    --shadow: rgba(0, 0, 0, 0.2);
    --shadow-strong: rgba(0, 0, 0, 0.4);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Caveat', cursive;
    background: var(--bg-primary);
    /* Chalkboard texture overlay */
}

.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E");
    z-index: 0;
}

/* Chalk text effect */
.chalk-text {
    color: var(--text-primary);
    text-shadow:
        0 0 5px rgba(240, 230, 211, 0.3);
}

/* Chalk border frame */
.chalk-border {
    border: 3px solid var(--border);
    border-radius: 4px;
    position: relative;
}

/* Chalk underline */
.chalk-underline {
    border-bottom: 3px solid var(--zone-1);
    border-bottom-style: wavy;
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 2px dashed var(--border);
    border-radius: 8px;
    padding: 20px;
}
```

## Visual Elements

- **Shapes**: Hand-drawn chalk-style (slightly irregular)
- **Accents**: Yellow chalk highlights, red chalk underlines
- **Background**: Dark green with noise texture
- **Borders**: Dashed, slightly transparent chalk lines
- **Shadows**: None (flat chalk aesthetic)
- **Icons**: Chalk-drawn style SVGs

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Lesson title cards |
| balanced | ✓✓ | Knowledge explanations |
| dense | ✓✓ | Full lesson notes |
| list | ✓✓ | Learning objectives |
| comparison | ✓ | Do/don't comparisons |
| flow | ✓✓ | Step-by-step tutorials |
| mindmap | ✓✓ | Concept maps |
| quadrant | ✓ | Four-part frameworks |

## Best For

- Educational content and tutorials
- Classroom-style lessons
- Step-by-step guides
- Knowledge explanations
- Tips and tricks
