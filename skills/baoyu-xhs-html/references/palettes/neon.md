---
name: neon
category: palette
---

# Neon Palette

High-energy, futuristic colors on dark backgrounds — perfect for tech, gaming, and bold content.

## CSS Custom Properties

```css
:root {
    /* Backgrounds */
    --bg-primary: #1A1025;       /* Dark purple */
    --bg-secondary: #231538;     /* Slightly lighter purple */
    --bg-card: #2A1B3D;          /* Card surface */
    --bg-accent: #322046;        /* Accent surface */

    /* Text */
    --text-primary: #F0E6FF;     /* Light purple-white */
    --text-secondary: #A68BC7;   /* Muted lavender */
    --text-tertiary: #7B5F9A;    /* Dim lavender */

    /* Zone Colors (content blocks) */
    --zone-1: #00F5FF;           /* Cyan */
    --zone-2: #FF00FF;           /* Magenta */
    --zone-3: #39FF14;           /* Green */
    --zone-4: #FF6EC7;           /* Pink */

    /* Accent */
    --accent: #FFFF00;           /* Yellow */
    --accent-soft: #FFD700;      /* Gold */
    --accent-bg: rgba(255, 255, 0, 0.1); /* Yellow tint */

    /* Borders & Shadows */
    --border: #3D2854;           /* Purple border */
    --border-light: #4A3268;     /* Light border */
    --shadow: rgba(0, 0, 0, 0.3);
    --shadow-strong: rgba(0, 0, 0, 0.5);

    /* Glow Effects */
    --glow-cyan: 0 0 20px rgba(0, 245, 255, 0.3);
    --glow-magenta: 0 0 20px rgba(255, 0, 255, 0.3);
    --glow-green: 0 0 20px rgba(57, 255, 20, 0.3);
}
```

## Background Patterns

```css
/* Scan lines */
.bg-pattern-scanlines {
    background-image: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.1) 2px,
        rgba(0, 0, 0, 0.1) 4px
    );
}

/* Circuit grid */
.bg-pattern-circuit {
    background-image:
        linear-gradient(var(--border) 1px, transparent 1px),
        linear-gradient(90deg, var(--border) 1px, transparent 1px);
    background-size: 30px 30px;
}

/* Grid dots */
.bg-pattern-grid {
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 24px 24px;
}
```

## Zone Color Usage

| Zone | Use For | Text Color | Glow |
|------|---------|------------|------|
| `--zone-1` Cyan | Primary info, links | `#E0FFFF` | `var(--glow-cyan)` |
| `--zone-2` Magenta | Secondary, emphasis | `#FFE0FF` | `var(--glow-magenta)` |
| `--zone-3` Green | Success, positive | `#E0FFE0` | `var(--glow-green)` |
| `--zone-4` Pink | Warning, highlight | `#FFE0F0` | `var(--glow-magenta)` |

## Neon Text Effect

```css
.text-neon {
    text-shadow:
        0 0 7px currentColor,
        0 0 10px currentColor,
        0 0 21px currentColor,
        0 0 42px currentColor;
}
```

## Feel

High-energy, futuristic, cyberpunk, gaming. Works best with `bold`, `pop`, `screen-print`, and `cyber` (if extended) styles.
