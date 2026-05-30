---
name: fresh
category: style-preset
---

# Fresh Style

Clean, refreshing, natural — light tones with organic shapes and soft shadows.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: light-green-or-white

typography:
  decorated: underline-decorated
  tags: pill
  font: Noto Sans SC
  direction: horizontal

decorations:
  shapes: rounded-rect, circle, leaf
  emphasis: green-check
  background: soft-gradient-green
  frames: rounded-card
  doodles: leaves, plants, water-drops
```

## Default Color Palette

```css
:root {
    --bg-primary: #F0FFF4;         /* Honeydew */
    --bg-secondary: #E6FFED;       /* Light green */
    --bg-card: #FFFFFF;            /* White */
    --bg-accent: #D4F5E0;          /* Soft green */
    --text-primary: #1B4332;       /* Dark green */
    --text-secondary: #52796F;     /* Medium green */
    --text-tertiary: #95B8A8;      /* Light green */
    --zone-1: #D4F5E0;             /* Soft green block */
    --zone-2: #B7E4C7;             /* Green block */
    --zone-3: #E8F8F0;             /* Pale green */
    --zone-4: #FFF3E0;             /* Soft orange tint */
    --accent: #40916C;             /* Forest green */
    --accent-soft: #74C69D;        /* Soft green */
    --accent-bg: rgba(64, 145, 108, 0.08);
    --border: #C8E6D0;             /* Green border */
    --border-light: #DFF0E4;       /* Light green border */
    --shadow: rgba(27, 67, 50, 0.06);
    --shadow-strong: rgba(27, 67, 50, 0.12);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Noto Sans SC', sans-serif;
    background: linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 4px 16px var(--shadow);
    border: 1px solid var(--border-light);
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    font-weight: 700;
}

/* Tags */
.tag {
    background: var(--accent-bg);
    color: var(--accent);
    border: 1px solid var(--accent-soft);
    border-radius: 100px;
    padding: 4px 16px;
    font-size: var(--text-xs);
}

/* Leaf decoration SVG */
.deco-leaf {
    opacity: 0.15;
    position: absolute;
}
```

## Visual Elements

- **Shapes**: Rounded rectangles, circles, organic leaf shapes
- **Accents**: Green checks, leaf patterns
- **Background**: Soft green gradient
- **Borders**: Rounded, green-tinted
- **Shadows**: Soft, natural
- **Icons**: Nature-themed (leaves, plants, water drops)

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Nature covers, quotes |
| balanced | ✓✓ | Product reviews, tips |
| dense | ✓ | Health info cards |
| list | ✓ | Natural product lists |
| comparison | ✓ | Product comparisons |
| flow | ✓✓ | Health routines, processes |

## Best For

- Health & wellness content
- Natural product reviews
- Organic lifestyle
- Green living tips
- Refreshing daily content
