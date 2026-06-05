# Style: blueprint

Technical schematics — precise, engineering-focused, data-driven.

## Design Aesthetic

Technical blueprint aesthetic with grid lines, monospace fonts, and a blue/white color scheme. Feels like looking at an engineering drawing or architectural plan.

## Font

- **Primary**: `'JetBrains Mono', 'Fira Code', 'Courier New', monospace`
- **Accent**: `'Inter', -apple-system, sans-serif` (for large titles only)
- **Weights**: 400 (body), 700 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@700&display=swap`

## CSS Rendering Rules

```css
/* Grid background */
.illustration {
    background-color: #F0F4F8;
    background-image:
        linear-gradient(rgba(0,80,160,0.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,80,160,0.08) 1px, transparent 1px);
    background-size: 40px 40px;
}

/* Technical borders */
.info-card, .flow-step, .fw-node, .event-card {
    border-width: 1.5px;
    border-color: #2B6CB0;
    border-radius: 4px; /* Near-square corners */
}

/* Precise connectors */
.connector { stroke: #2B6CB0; stroke-width: 1.5; }
.arrow-head { fill: #2B6CB0; }

/* Data labels */
.label-mono {
    font-family: 'JetBrains Mono', monospace;
    font-size: 13px;
    background: rgba(43,108,176,0.06);
    padding: 2px 6px;
    border: 1px solid rgba(43,108,176,0.2);
    border-radius: 3px;
}
```

## Visual Elements

- Grid background lines (CSS)
- Monospace labels and data values
- Technical connector lines with precise angles
- Small square/rectangular containers (near-square corners)
- Subtle blue color scheme with white backgrounds
- Data-focused layout with clear zones

## Style Rules

| Do | Don't |
|----|-------|
| Use monospace for all data/labels | Use decorative or handwritten fonts |
| Keep grid alignment strict | Use organic or curved layouts |
| Use blue/white/gray palette | Apply warm or vibrant colors |
| Show precise data points | Approximate or round data |
| Maintain technical precision | Add decorative doodles |

## Best For

- API documentation
- System architecture
- Technical deep-dives
- Engineering diagrams
- Metrics and data visualization
