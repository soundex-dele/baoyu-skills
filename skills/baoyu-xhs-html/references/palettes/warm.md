---
name: warm
category: palette
---

# Warm Palette

Cozy, earth-tone warmth — perfect for food, lifestyle, stories, and friendly content.

## CSS Custom Properties

```css
:root {
    /* Backgrounds */
    --bg-primary: #FFECD2;       /* Soft peach */
    --bg-secondary: #FFE0B5;     /* Lighter peach */
    --bg-card: #FFF5E9;          /* Warm white */
    --bg-accent: #FFF0DC;        /* Cream accent */

    /* Text */
    --text-primary: #3E2723;     /* Deep brown */
    --text-secondary: #795548;   /* Medium brown */
    --text-tertiary: #A1887F;    /* Light brown */

    /* Zone Colors (content blocks) */
    --zone-1: #ED8936;           /* Orange */
    --zone-2: #C05621;           /* Terracotta */
    --zone-3: #F6AD55;           /* Golden */
    --zone-4: #D4A09A;           /* Rose */

    /* Accent */
    --accent: #A0522D;           /* Sienna */
    --accent-soft: #C67C4E;      /* Soft sienna */
    --accent-bg: rgba(160, 82, 45, 0.1); /* Sienna tint */

    /* Borders & Shadows */
    --border: #E8C9A8;           /* Warm border */
    --border-light: #F0D9C0;     /* Light border */
    --shadow: rgba(62, 39, 35, 0.08);
    --shadow-strong: rgba(62, 39, 35, 0.15);
}
```

## Background Patterns

```css
/* Subtle grain */
.bg-pattern-grain {
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E");
}

/* Warm diagonal stripes */
.bg-pattern-stripes {
    background-image: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--border-light) 10px,
        var(--border-light) 11px
    );
}

/* Soft dots */
.bg-pattern-dots {
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 24px 24px;
}
```

## Zone Color Usage

| Zone | Use For | Text Color |
|------|---------|------------|
| `--zone-1` Orange | Primary info, tips | `#7B4500` |
| `--zone-2` Terracotta | Secondary content | `#FFFFFF` |
| `--zone-3` Golden | Highlights, callouts | `#7B5500` |
| `--zone-4` Rose | Warning, special | `#7B3535` |

## Feel

Cozy, friendly, approachable, earthy. Works best with `warm`, `fresh`, `cute`, and `minimal` styles.
