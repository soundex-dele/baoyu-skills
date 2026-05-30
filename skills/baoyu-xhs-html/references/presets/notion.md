---
name: notion
category: style-preset
---

# Notion Style

Minimalist hand-drawn line art — intellectual, clean, structured. Inspired by Notion's aesthetic.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: solid-light

typography:
  decorated: highlight
  tags: pill
  font: Noto Sans SC
  direction: horizontal

decorations:
  shapes: rounded-rect, divider-line
  emphasis: none (clean)
  background: dot-grid
  frames: card-with-border
  doodles: minimal-line-icons
```

## Default Color Palette

```css
:root {
    --bg-primary: #FFFFFF;         /* White */
    --bg-secondary: #F7F6F3;       /* Notion gray */
    --bg-card: #FFFFFF;            /* White */
    --bg-accent: #F0EFEA;          /* Light gray */
    --text-primary: #37352F;       /* Notion dark */
    --text-secondary: #787774;     /* Notion gray */
    --text-tertiary: #B4B4B0;      /* Light gray */
    --zone-1: #E8F0FE;             /* Blue tint */
    --zone-2: #FDE8E8;             /* Red tint */
    --zone-3: #E8F5E9;             /* Green tint */
    --zone-4: #FFF8E1;             /* Yellow tint */
    --accent: #2EAADC;             /* Notion blue */
    --accent-soft: #90CAF9;        /* Soft blue */
    --accent-bg: rgba(46, 170, 220, 0.08);
    --border: #E9E9E7;             /* Light border */
    --border-light: #F1F1EF;       /* Lighter border */
    --shadow: rgba(55, 53, 47, 0.06);
    --shadow-strong: rgba(55, 53, 47, 0.12);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Noto Sans SC', sans-serif;
    background: var(--bg-primary);
    border: 1px solid var(--border);
}

/* Dot grid background */
.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 24px 24px;
    opacity: 0.5;
    z-index: 0;
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 20px;
    position: relative;
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    font-weight: 600;
    border-bottom: 2px solid var(--text-primary);
    padding-bottom: 8px;
}

/* Highlight text */
.text-highlight {
    background: linear-gradient(180deg, transparent 55%, #FFEAA7 55%);
    padding: 0 2px;
}

/* Tags */
.tag {
    background: var(--accent-bg);
    color: var(--accent);
    border: 1px solid var(--accent-soft);
    border-radius: 4px;
    padding: 2px 8px;
    font-size: var(--text-xs);
}

/* Dividers */
.divider {
    border: none;
    border-top: 1px solid var(--border);
}
```

## Visual Elements

- **Shapes**: Clean rectangles with thin borders
- **Accents**: Yellow highlight, blue links
- **Background**: Dot grid pattern (subtle)
- **Borders**: Thin, gray, rounded corners
- **Shadows**: Minimal, flat
- **Icons**: Minimal line-style SVGs (thin strokes)

## SVG Icon Style

```html
<!-- Example: lightbulb icon in Notion style -->
<svg width="32" height="32" viewBox="0 0 32 32" fill="none"
     stroke="var(--text-secondary)" stroke-width="1.5" stroke-linecap="round">
    <path d="M16 4 C10 4 6 8 6 14 C6 18 8 20 11 22 L11 26 L21 26 L21 22 C24 20 26 18 26 14 C26 8 22 4 16 4Z"/>
    <line x1="12" y1="28" x2="20" y2="28"/>
    <line x1="13" y1="30" x2="19" y2="30"/>
</svg>
```

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Quote cards, concepts |
| balanced | ✓✓ | Knowledge cards |
| dense | ✓✓ | Information-dense cards |
| list | ✓✓ | Checklists, rankings |
| comparison | ✓✓ | Pros/cons, comparisons |
| flow | ✓✓ | Processes, tutorials |
| mindmap | ✓✓ | Concept maps |
| quadrant | ✓✓ | Frameworks, matrices |

## Best For

- Knowledge sharing (干货)
- Concept explanations
- Productivity tips
- SaaS tool comparisons
- Professional summaries
- Checklists and frameworks
