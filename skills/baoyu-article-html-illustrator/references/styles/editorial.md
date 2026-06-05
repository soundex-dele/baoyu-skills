# Style: editorial

Magazine-style infographic — bold, structured, informative.

## Design Aesthetic

Inspired by newspaper and magazine infographics. Bold typography, structured sections, clear data presentation. Feels like a well-designed data journalism piece.

## Font

- **Primary**: `'Merriweather', Georgia, serif`
- **Secondary**: `'Inter', -apple-system, sans-serif` (for data and labels)
- **Display**: `'Oswald', 'Impact', sans-serif` (for large headlines)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Inter:wght@400;600;700&family=Oswald:wght@600;700&display=swap`

## CSS Rendering Rules

```css
/* Bold section borders */
.section { border-bottom: 3px solid var(--border); padding-bottom: 24px; }

/* Strong card borders */
.info-card, .flow-step, .fw-node {
    border-width: 2px;
    border-color: var(--border);
    border-radius: 4px;
}

/* Bold headlines */
.headline {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.02em;
}

/* Data values */
.data-value {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 48px;
}
```

## Visual Elements

- Bold, large headlines (uppercase)
- Clear section dividers (thick lines)
- Strong data visualization
- Structured grid layouts
- Number callouts in large bold type
- High-contrast black on white

## Style Rules

| Do | Don't |
|----|-------|
| Use bold, attention-grabbing typography | Use subtle or light fonts |
| Structure content in clear sections | Mix sections loosely |
| Make data large and prominent | Hide data in small text |
| Use strong horizontal dividers | Avoid visual separation |
| Prioritize information density | Leave excessive whitespace |

## Best For

- Data journalism
- Tech explainers
- Metrics reports
- Investigation-style articles
- Any content with strong data points
