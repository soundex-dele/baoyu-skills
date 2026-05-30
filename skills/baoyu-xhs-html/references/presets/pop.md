---
name: pop
category: style-preset
---

# Pop Style

Vibrant, energetic, eye-catching — bright colors, geometric shapes, and dynamic layout.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: vivid-gradient

typography:
  decorated: bubble
  tags: bubble
  font: Noto Sans SC Black
  direction: horizontal

decorations:
  shapes: circle, triangle, diamond, star
  emphasis: pop-burst
  background: vivid-gradient-or-solid
  frames: bold-border
  doodles: stars, arrows, zigzag, dots
```

## Default Color Palette

```css
:root {
    --bg-primary: #FF6B6B;         /* Coral red */
    --bg-secondary: #FFE66D;       /* Yellow */
    --bg-card: #FFFFFF;            /* White */
    --bg-accent: #4ECDC4;          /* Teal */
    --text-primary: #2C3E50;       /* Dark blue-gray */
    --text-secondary: #5D6D7E;     /* Medium gray */
    --text-tertiary: #95A5A6;      /* Light gray */
    --zone-1: #FF6B6B;             /* Coral */
    --zone-2: #4ECDC4;             /* Teal */
    --zone-3: #FFE66D;             /* Yellow */
    --zone-4: #A8E6CF;             /* Mint */
    --accent: #FF4757;             /* Red accent */
    --accent-soft: #FF6B81;        /* Soft red */
    --accent-bg: rgba(255, 71, 87, 0.1);
    --border: #FF6B6B;             /* Coral border */
    --border-light: #FFE0E0;       /* Light coral */
    --shadow: rgba(44, 62, 80, 0.1);
    --shadow-strong: rgba(44, 62, 80, 0.2);
}
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Noto Sans SC', sans-serif;
    font-weight: 900;
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-accent) 50%, var(--bg-secondary) 100%);
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border-radius: 24px;
    padding: 24px;
    box-shadow: 8px 8px 0 var(--accent);
    border: 3px solid var(--text-primary);
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-3xl);
    font-weight: 900;
    -webkit-text-stroke: 2px var(--text-primary);
}

/* Tags */
.tag {
    background: var(--zone-1);
    color: white;
    border-radius: 100px;
    padding: 6px 20px;
    font-size: var(--text-xs);
    font-weight: 900;
    box-shadow: 4px 4px 0 var(--accent);
}
```

## Visual Elements

- **Shapes**: Circles, triangles, diamonds, stars
- **Accents**: Pop art bursts, halftone dots
- **Background**: Vivid multi-color gradient
- **Borders**: Bold (3px+), offset shadow boxes
- **Shadows**: Offset block shadows (no blur)
- **Icons**: Pop art style (stars, arrows, zigzags)

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓✓ | Explosive covers |
| balanced | ✓✓ | Fun info cards |
| dense | ✓ | Fun facts compilation |
| list | ✓✓ | Fun rankings, trivia |
| comparison | ✓✓ | Fun comparisons |
| flow | ✓ | Energetic processes |

## Best For

- Fun facts and trivia
- Exciting announcements
- Viral content
- Entertainment and pop culture
- Youth-oriented content
