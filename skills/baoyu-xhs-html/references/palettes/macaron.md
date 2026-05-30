---
name: macaron
category: palette
---

# Macaron Palette

Soft, sweet pastels — perfect for educational, lifestyle, and gentle content.

## CSS Custom Properties

```css
:root {
    /* Backgrounds */
    --bg-primary: #F5F0E8;       /* Warm cream */
    --bg-secondary: #EDE7DB;     /* Slightly darker cream */
    --bg-card: #FFFDF7;          /* Near-white cream */
    --bg-accent: #FFF5EE;        /* Soft peach white */

    /* Text */
    --text-primary: #3D3226;     /* Warm dark brown */
    --text-secondary: #8B7D6B;   /* Muted brown */
    --text-tertiary: #B5A897;    /* Light brown */

    /* Zone Colors (content blocks) */
    --zone-1: #A8D8EA;           /* Soft blue */
    --zone-2: #D5C6E0;           /* Lavender */
    --zone-3: #B5E5CF;           /* Mint */
    --zone-4: #F8D5C4;           /* Peach */

    /* Accent */
    --accent: #E8655A;           /* Coral */
    --accent-soft: #F4A09A;      /* Soft coral */
    --accent-bg: rgba(232, 101, 90, 0.1); /* Coral tint */

    /* Borders & Shadows */
    --border: #E0D5C5;           /* Warm border */
    --border-light: #EDE7DB;     /* Light border */
    --shadow: rgba(61, 50, 38, 0.08);     /* Warm shadow */
    --shadow-strong: rgba(61, 50, 38, 0.15);
}
```

## Background Patterns

```css
/* Dot grid */
.bg-pattern-dots {
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 20px 20px;
}

/* Subtle cross pattern */
.bg-pattern-cross {
    background-image:
        linear-gradient(var(--border-light) 1px, transparent 1px),
        linear-gradient(90deg, var(--border-light) 1px, transparent 1px);
    background-size: 40px 40px;
}
```

## Zone Color Usage

| Zone | Use For | Text Color |
|------|---------|------------|
| `--zone-1` Blue | Info blocks, tips | `#2B6B80` |
| `--zone-2` Lavender | Secondary content | `#5E4B6E` |
| `--zone-3` Mint | Success, positive | `#3A7D5C` |
| `--zone-4` Peach | Warning, highlight | `#8B5A4A` |

## Feel

Soft, educational, approachable, kawaii-adjacent. Works best with `cute`, `notion`, `sketch-notes`, and `fresh` styles.
