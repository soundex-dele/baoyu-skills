---
name: bold
category: style-preset
---

# Bold Style

High impact, attention-grabbing with strong contrast, thick borders, and large typography.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: solid-dark-or-vivid

typography:
  decorated: outline
  tags: badge
  font: Noto Sans SC Black
  direction: horizontal

decorations:
  shapes: rectangle, diamond, thick-borders
  emphasis: exclamation-badge
  background: solid-color-or-bold-gradient
  frames: thick-border-card
  doodles: arrows, exclamation-marks, lightning
```

## Default Color Palette

```css
:root {
    --bg-primary: #1A1A2E;         /* Deep navy */
    --bg-secondary: #16213E;       /* Darker navy */
    --bg-card: #FFFFFF;            /* White card */
    --bg-accent: #E94560;          /* Bold red */
    --text-primary: #FFFFFF;       /* White text */
    --text-secondary: #A8A8C0;     /* Muted lavender */
    --text-tertiary: #6B6B8D;      /* Dim lavender */
    --zone-1: #E94560;             /* Bold red */
    --zone-2: #0F3460;             /* Deep blue */
    --zone-3: #533483;             /* Purple */
    --zone-4: #FF8C32;             /* Orange */
    --accent: #FFD700;             /* Gold */
    --accent-soft: #FFE44D;        /* Soft gold */
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
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 900;
    background: var(--bg-primary);
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 4px solid var(--border);
    border-radius: 0;
    padding: 24px;
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-3xl);
    font-weight: 900;
    text-transform: uppercase;
}

/* Outline text */
.text-outline {
    -webkit-text-stroke: 3px var(--accent);
    color: transparent;
}

/* Tags */
.tag {
    background: var(--accent);
    color: var(--bg-primary);
    border-radius: 0;
    padding: 4px 16px;
    font-size: var(--text-xs);
    font-weight: 900;
    text-transform: uppercase;
}
```

## Visual Elements

- **Shapes**: Rectangles with sharp corners, diamonds
- **Accents**: Lightning bolts, exclamation marks, arrows
- **Background**: Deep navy or vivid solid
- **Borders**: Thick (4px+), high contrast
- **Shadows**: Strong, dramatic
- **Icons**: Bold, angular SVGs

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Impact covers, alerts |
| balanced | ✓ | Information cards |
| dense | ✓ | Dense info with strong hierarchy |
| list | ✓✓ | Warning lists, rankings |
| comparison | ✓✓ | Pros/cons, versus |
| flow | ✓ | Step-by-step warnings |
| quadrant | ✓✓ | Frameworks, matrices |

## Best For

- Warning content, must-know info
- Before/after comparisons
- Rankings and top-N lists
- Strong opinion pieces
- Breaking news style
