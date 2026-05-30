---
name: warm
category: style-preset
---

# Warm Style

Cozy, friendly, approachable — warm earth tones with soft patterns and inviting aesthetics.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: warm-peach-gradient

typography:
  decorated: highlight
  tags: pill
  font: Noto Serif SC
  direction: horizontal

decorations:
  shapes: rounded-rect, circle, soft-edges
  emphasis: heart, warmth-icon
  background: warm-gradient-or-solid
  frames: rounded-card
  doodles: hearts, cups, books, blankets
```

## Default Color Palette

Uses the `warm` palette by default:

```css
:root {
    --bg-primary: #FFECD2;         /* Soft peach */
    --bg-secondary: #FFE0B5;       /* Lighter peach */
    --bg-card: #FFF5E9;            /* Warm white */
    --bg-accent: #FFF0DC;          /* Cream accent */
    --text-primary: #3E2723;       /* Deep brown */
    --text-secondary: #795548;     /* Medium brown */
    --text-tertiary: #A1887F;      /* Light brown */
    --zone-1: #ED8936;             /* Orange */
    --zone-2: #C05621;             /* Terracotta */
    --zone-3: #F6AD55;             /* Golden */
    --zone-4: #D4A09A;             /* Rose */
    --accent: #A0522D;             /* Sienna */
    --accent-soft: #C67C4E;        /* Soft sienna */
    --accent-bg: rgba(160, 82, 45, 0.1);
    --border: #E8C9A8;             /* Warm border */
    --border-light: #F0D9C0;       /* Light border */
    --shadow: rgba(62, 39, 35, 0.08);
    --shadow-strong: rgba(62, 39, 35, 0.15);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Noto Serif SC', serif;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
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
```

## Visual Elements

- **Shapes**: Rounded rectangles, circles with soft edges
- **Accents**: Hearts, cozy elements
- **Background**: Warm peach gradient
- **Borders**: Warm-tinted, soft
- **Shadows**: Warm, cozy
- **Icons**: Cozy-themed (cups, books, blankets, hearts)

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Cozy covers, mood cards |
| balanced | ✓✓ | Life stories, sharing |
| dense | ✓ | Warm knowledge cards |
| list | ✓ | Cozy recommendations |
| comparison | ✓✓ | Warm comparisons |
| flow | ✓ | Life journeys, stories |

## Best For

- Life stories and personal sharing
- Emotional content
- Food & cooking
- Home & living
- Cozy daily life
