# Palette: mono-ink

Black ink on pure white with sparse semantic color accents — professional, editorial, precise.

## CSS Custom Properties

```css
:root {
    --bg-primary: #FFFFFF;       /* Pure white */
    --bg-secondary: #F8F8F8;     /* Off-white */
    --text-primary: #1A1A1A;     /* Near black */
    --text-secondary: #666666;   /* Medium gray */
    --accent: #9B8AB5;           /* Dusty lavender */
    --accent-soft: rgba(155,138,181,0.15);
    --zone-1: #1A1A1A;           /* Near black (primary ink) */
    --zone-2: #F5F5F5;           /* Light gray (subtle backgrounds) */
    --zone-3: #E8655A;           /* Coral red (emphasis only) */
    --zone-4: #5FA8A8;           /* Muted teal (positive only) */
    --border: #1A1A1A;           /* Near black */
    --line: #1A1A1A;             /* Near black */
    --shadow: rgba(0,0,0,0.06);
}
```

## Background

- **Primary**: `#FFFFFF` pure white, clean
- **No patterns**: Keep it minimal and professional

## Color Usage Rules (Strict)

| Color | Hex | When to Use | Constraint |
|-------|-----|-------------|------------|
| Near Black | #1A1A1A | All lines, text, outlines, figures | Dominant — 85%+ of color |
| Coral Red | #E8655A | Risks, gaps, warnings, negative states | < 10% of canvas |
| Muted Teal | #5FA8A8 | Positive outcomes, solutions, green states | < 10% of canvas |
| Dusty Lavender | #9B8AB5 | Category tags, neutral labels | < 5% of canvas |
| Light Gray | #F5F5F5 | Subtle section backgrounds | As needed |

## Accent Rules

- Color accents must be **under 15% of the canvas total**
- `--zone-3` (Coral Red) is for risk/emphasis ONLY
- `--zone-4` (Muted Teal) is for positive/solution states ONLY
- Default state: everything in black ink

## Best For

- Professional visual notes
- Before/After comparisons
- Tech manifestos
- Framework analogies
- Workforce / professional content
- Editorial essays
