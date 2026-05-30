---
name: retro
category: style-preset
---

# Retro Style

Vintage, nostalgic, trendy — distressed textures, vintage fonts, and sepia tints for a classic feel.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: beige-or-sepia

typography:
  decorated: shadow-decorated
  tags: retro-badge
  font: ZCOOL QingKe HuangYou
  direction: horizontal

decorations:
  shapes: rounded-rect, circle, badge
  emphasis: retro-star
  background: grain-texture
  frames: double-border
  doodles: stars, retro-flowers, badges
```

## Default Color Palette

```css
:root {
    --bg-primary: #F5E6D0;         /* Beige */
    --bg-secondary: #EAD4B8;       /* Darker beige */
    --bg-card: #FFF8F0;            /* Warm white */
    --bg-accent: #F0DCC4;          /* Light beige */
    --text-primary: #4A3728;       /* Dark brown */
    --text-secondary: #7D6652;     /* Medium brown */
    --text-tertiary: #A8907A;      /* Light brown */
    --zone-1: #C17817;             /* Bronze */
    --zone-2: #8B4513;             /* Saddle brown */
    --zone-3: #D4A574;             /* Tan */
    --zone-4: #9E7B5A;             /* Medium tan */
    --accent: #B22222;             /* Firebrick red */
    --accent-soft: #CD5C5C;        /* Indian red */
    --accent-bg: rgba(178, 34, 34, 0.08);
    --border: #D4B896;             /* Warm border */
    --border-light: #E0C8A8;       /* Light border */
    --shadow: rgba(74, 55, 40, 0.08);
    --shadow-strong: rgba(74, 55, 40, 0.15);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'ZCOOL QingKe HuangYou', cursive;
    background: var(--bg-primary);
}

/* Grain texture overlay */
.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.06'/%3E%3C/svg%3E");
    z-index: 0;
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 2px solid var(--border);
    border-radius: 8px;
    padding: 24px;
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    text-shadow: 3px 3px 0 var(--zone-3);
}

/* Tags */
.tag {
    background: var(--accent);
    color: var(--bg-card);
    border-radius: 4px;
    padding: 4px 16px;
    font-size: var(--text-xs);
    font-family: 'ZCOOL QingKe HuangYou', cursive;
}
```

## Visual Elements

- **Shapes**: Rectangles with double borders, circular badges
- **Accents**: Retro stars, vintage flowers, stamps
- **Background**: Beige with grain texture
- **Borders**: Double borders, vintage style
- **Shadows**: Warm, nostalgic
- **Icons**: Vintage-themed (cameras, records, stamps)

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Vintage covers |
| balanced | ✓✓ | Nostalgic sharing |
| dense | ✓ | Retro knowledge cards |
| list | ✓✓ | Classic rankings, vintage lists |
| comparison | ✓ | Then vs. now |
| flow | ✓ | Historical timelines |

## Best For

- Vintage and nostalgic content
- Classic rankings and throwbacks
- Retro lifestyle sharing
- Historical content
- Trendy vintage aesthetics
