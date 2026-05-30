---
name: minimal
category: style-preset
---

# Minimal Style

Ultra-clean, sophisticated — maximum whitespace, thin lines, restrained color. Less is more.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: white-or-light-gray

typography:
  decorated: none
  tags: thin-pill
  font: Inter
  direction: horizontal

decorations:
  shapes: line, thin-rect
  emphasis: none
  background: clean-solid
  frames: thin-border
  doodles: none (clean)
```

## Default Color Palette

```css
:root {
    --bg-primary: #FAFAFA;         /* Near-white */
    --bg-secondary: #F5F5F5;       /* Light gray */
    --bg-card: #FFFFFF;            /* Pure white */
    --bg-accent: #F0F0F0;          /* Gray accent */
    --text-primary: #1A1A1A;       /* Near-black */
    --text-secondary: #666666;     /* Medium gray */
    --text-tertiary: #AAAAAA;      /* Light gray */
    --zone-1: #F5F5F5;             /* Light block */
    --zone-2: #EEEEEE;             /* Slightly darker block */
    --zone-3: #F0F0F0;             /* Block */
    --zone-4: #E8E8E8;             /* Darkest block */
    --accent: #1A1A1A;             /* Black accent */
    --accent-soft: #333333;        /* Soft black */
    --accent-bg: rgba(26, 26, 26, 0.04);
    --border: #E0E0E0;             /* Light border */
    --border-light: #F0F0F0;       /* Lighter border */
    --shadow: rgba(0, 0, 0, 0.04);
    --shadow-strong: rgba(0, 0, 0, 0.08);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Inter', sans-serif;
    background: var(--bg-primary);
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 4px;
    padding: 24px;
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    font-weight: 300; /* Light weight for elegance */
    letter-spacing: -0.02em;
}

/* Tags */
.tag {
    background: transparent;
    color: var(--text-secondary);
    border: 1px solid var(--border);
    border-radius: 2px;
    padding: 2px 10px;
    font-size: var(--text-xs);
    font-weight: 400;
}

/* Dividers */
.divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 32px 0;
}
```

## Visual Elements

- **Shapes**: Thin lines, minimal rectangles
- **Accents**: None (pure typography)
- **Background**: Clean white or near-white
- **Borders**: 1px thin, light gray
- **Shadows**: Subtle, barely visible
- **Icons**: None or thin line-style

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Quote cards, covers |
| balanced | ✓✓ | Professional summaries |
| dense | ✓✓ | Clean data presentations |
| list | ✓ | Minimal lists |
| comparison | ✓ | Clean comparisons |
| flow | ✓ | Process flows |

## Best For

- Quote cards and aphorisms
- Professional content
- Business summaries
- Elegant presentations
- Minimalist lifestyle
