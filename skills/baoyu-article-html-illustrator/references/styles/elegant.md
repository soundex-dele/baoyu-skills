# Style: elegant

Refined, sophisticated — balanced, professional, authoritative.

## Design Aesthetic

Serif typography, subtle gradients, balanced composition. Feels like a premium magazine spread or a business executive's presentation. Authoritative without being cold.

## Font

- **Primary**: `'Playfair Display', Georgia, 'Times New Roman', serif`
- **Secondary**: `'Inter', -apple-system, sans-serif` (for body text and data)
- **Weights**: 400 (body), 700 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;600&display=swap`

## CSS Rendering Rules

```css
/* Refined borders */
.info-card, .flow-step, .fw-node, .event-card {
    border-width: 1px;
    border-color: var(--border);
    border-radius: 8px;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(10px);
}

/* Subtle gradients for backgrounds */
.gradient-bg {
    background: linear-gradient(135deg, var(--bg-primary), var(--bg-secondary));
}

/* Elegant connectors */
.connector { stroke: var(--border); stroke-width: 1.5; }
.arrow-head { fill: var(--border); }

/* Serif titles */
.title { font-family: 'Playfair Display', serif; letter-spacing: -0.02em; }
```

## Visual Elements

- Serif headings with tight letter-spacing
- Subtle gradient backgrounds
- Semi-transparent cards with backdrop blur
- Balanced, centered compositions
- Thin decorative lines and dividers
- Professional color palette

## Style Rules

| Do | Don't |
|----|-------|
| Use serif fonts for titles | Use casual or playful fonts |
| Keep compositions balanced | Use asymmetric layouts |
| Apply subtle gradients | Use flat solid colors only |
| Maintain professional spacing | Crowd elements |
| Use muted, sophisticated colors | Apply bright or neon colors |

## Best For

- Business strategy
- Thought leadership
- Professional presentations
- Historical content
- Authoritative essays
