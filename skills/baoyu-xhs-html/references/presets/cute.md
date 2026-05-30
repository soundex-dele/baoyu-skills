---
name: cute
category: style-preset
---

# Cute Style

Sweet, adorable, girly aesthetic with rounded shapes, pastel gradients, and bubbly decorations.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: gradient-radial-pink

typography:
  decorated: bubble
  tags: bubble
  font: ZCOOL KuaiLe
  direction: horizontal

decorations:
  shapes: circle, blob, rounded-rect
  emphasis: stars, hearts
  background: mesh-gradient-pink
  frames: rounded-card
  doodles: hearts, sparkles, flowers
```

## Default Color Palette

```css
:root {
    --bg-primary: #FFF0F5;         /* Lavender blush */
    --bg-secondary: #FFE4EC;       /* Misty rose */
    --bg-card: #FFFFFF;            /* White */
    --bg-accent: #FFD6E8;          /* Pink tint */
    --text-primary: #4A2040;       /* Deep plum */
    --text-secondary: #8B5A7D;     /* Medium plum */
    --text-tertiary: #C49ABA;      /* Light plum */
    --zone-1: #FFB6C1;             /* Light pink */
    --zone-2: #DDA0DD;             /* Plum */
    --zone-3: #B0E0E6;             /* Powder blue */
    --zone-4: #FFDAB9;             /* Peach puff */
    --accent: #FF69B4;             /* Hot pink */
    --accent-soft: #FFB6C1;        /* Light pink */
    --accent-bg: rgba(255, 105, 180, 0.1);
    --border: #F0C0D0;             /* Pink border */
    --border-light: #F8E0EA;       /* Light pink border */
    --shadow: rgba(74, 32, 64, 0.06);
    --shadow-strong: rgba(74, 32, 64, 0.12);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'ZCOOL KuaiLe', cursive;
    background: radial-gradient(circle at 30% 30%, var(--bg-accent) 0%, var(--bg-primary) 70%);
    border-radius: 32px;
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 4px 16px var(--shadow);
    border: 2px solid var(--border-light);
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    text-shadow: 2px 2px 0 var(--accent-soft);
}

/* Tags */
.tag {
    background: var(--accent);
    color: white;
    border-radius: 100px;
    padding: 4px 16px;
    font-size: var(--text-xs);
}

/* Decorative circles */
.deco-circle {
    position: absolute;
    border-radius: 50%;
    opacity: 0.15;
}
```

## Visual Elements

- **Shapes**: Circles, blobs, rounded rectangles
- **Accents**: Hearts, stars, sparkles, flowers
- **Background**: Pink mesh gradient with soft circles
- **Borders**: Rounded, with pink tints
- **Shadows**: Soft, diffused, pink-tinted
- **Icons**: Cute emoji-style SVGs

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Cover cards, mood boards |
| balanced | ✓✓ | Daily shares, recommendations |
| dense | ✓ | Knowledge cards |
| list | ✓✓ | Rankings, wishlists |
| comparison | ✓ | Before/after, pros/cons |
| flow | ✓ | Tutorials, steps |

## Best For

- Beauty & skincare recommendations
- Fashion sharing
- Daily lifestyle content
- Girly mood boards
- Sweet food & dessert content
