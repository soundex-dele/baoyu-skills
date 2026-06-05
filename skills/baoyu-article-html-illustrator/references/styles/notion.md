# Style: notion

Minimalist hand-drawn line art — clean, intellectual, professional.

## Design Aesthetic

Minimal monochrome line art inspired by Notion-style illustrations. Simple SVG line drawings with thin strokes, plenty of whitespace, and a restrained color palette. Feels intellectual and approachable.

## Font

- **Primary**: `'Inter', -apple-system, 'Segoe UI', sans-serif`
- **Monospace accent**: `'JetBrains Mono', 'Fira Code', monospace`
- **Weights**: 400 (body), 500 (labels), 600 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&display=swap`

## CSS Rendering Rules

```css
/* Borders */
.info-card, .flow-step, .fw-node, .event-card {
    border-width: 1.5px;
    border-radius: 8px;
    border-color: var(--border);
}

/* Lines and connectors */
.line, .connector { stroke-width: 1.5; stroke: var(--border); }
.arrow-head { fill: var(--border); }

/* Background fills */
.zone-fill { opacity: 0.06; }

/* Dashed connectors for secondary */
.connector.secondary { stroke-dasharray: 6,4; }
```

## Visual Elements

- Simple monochrome line-art icons
- Thin consistent strokes (1.5-2px)
- Minimal color: black lines + very light background tints
- Small dot or dash decorations
- Clean grid-based layouts
- Subtle rounded corners (8px)

## Style Rules

| Do | Don't |
|----|-------|
| Use thin, consistent strokes | Mix thick and thin strokes |
| Keep icons minimal and abstract | Over-detail drawings |
| Use monochrome primarily | Apply many colors |
| Maintain clean grid alignment | Use chaotic layouts |
| Leave generous whitespace | Fill every space |

## Best For

- Knowledge sharing
- SaaS documentation
- Productivity content
- Professional presentations
- Clean, intellectual tone
