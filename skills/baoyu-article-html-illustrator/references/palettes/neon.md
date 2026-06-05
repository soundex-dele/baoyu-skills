# Palette: neon

Vibrant neon on dark purple — futuristic, high-energy, bold.

## CSS Custom Properties

```css
:root {
    --bg-primary: #1A1025;       /* Dark purple */
    --bg-secondary: #2D1B4E;     /* Slightly lighter purple */
    --text-primary: #FFFFFF;     /* White */
    --text-secondary: #B8A9C9;   /* Light purple */
    --accent: #FFFF00;           /* Neon yellow */
    --accent-soft: rgba(255,255,0,0.15);
    --zone-1: #00F5FF;           /* Cyan */
    --zone-2: #FF00FF;           /* Magenta */
    --zone-3: #39FF14;           /* Neon green */
    --zone-4: #FF6EC7;           /* Pink */
    --border: #00F5FF;           /* Cyan border */
    --line: #FFFFFF;             /* White lines */
    --shadow: rgba(0,245,255,0.15);
}
```

## Background

- **Primary**: `#1A1025` dark purple, solid
- **Pattern**: Optional — subtle grid lines at 5% opacity in cyan

## Zone Color Usage

| Zone | Color | Hex | Best For |
|------|-------|-----|----------|
| `--zone-1` | Cyan | #00F5FF | Primary elements, tech |
| `--zone-2` | Magenta | #FF00FF | Secondary sections, contrast |
| `--zone-3` | Neon Green | #39FF14 | Positive, success, active |
| `--zone-4` | Pink | #FF6EC7 | Highlights, energy |

## Accent Rules

- `--accent` (#FFFF00 Neon Yellow) for maximum emphasis — use very sparingly
- Text on dark backgrounds must maintain high contrast
- Consider adding subtle glow effects via `box-shadow` or `text-shadow` for neon feel

## Special CSS Effects

```css
/* Neon glow effect for key elements */
.neon-glow {
    text-shadow: 0 0 10px var(--zone-1), 0 0 20px var(--zone-1);
    box-shadow: 0 0 15px var(--zone-1);
}
```

## Best For

- Gaming content
- Retro / cyberpunk themes
- Tech product launches
- Pop culture
- High-energy, futuristic tone
