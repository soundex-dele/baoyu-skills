# Style: minimal

Ultra-clean, zen-like — restrained, sophisticated, focused.

## Design Aesthetic

Maximum whitespace, thin lines, restrained color. Every element is intentional. Feels like a luxury brand's design system or a Japanese aesthetic sensibility.

## Font

- **Primary**: `'Inter', -apple-system, 'Segoe UI', sans-serif`
- **Weights**: 300 (body), 400 (labels), 600 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600&display=swap`

## CSS Rendering Rules

```css
/* Ultra-thin borders */
.info-card, .flow-step, .fw-node, .event-card {
    border-width: 1px;
    border-color: var(--border);
    border-radius: 12px;
    background: transparent; /* No fills */
}

/* Thin connectors */
.connector { stroke-width: 1; stroke: var(--border); }
.arrow-head { fill: var(--border); }

/* Generous spacing */
.illustration { padding: 80px; }
.info-card { padding: 40px; }

/* Subtle accent only */
.accent-element {
    color: var(--accent);
    opacity: 0.8;
}
```

## Visual Elements

- Maximum whitespace (40-60% breathing room)
- Thin 1px borders
- No background fills (transparent cards)
- Single accent color used very sparingly
- Clean sans-serif typography
- Minimal decorative elements

## Style Rules

| Do | Don't |
|----|-------|
| Leave large whitespace areas | Fill every space |
| Use thin, precise lines | Use thick borders |
| Restrict color to 1-2 tones | Apply many colors |
| Keep elements centered and balanced | Use asymmetric or chaotic layouts |
| Let whitespace speak | Add decorative elements |

## Best For

- Philosophy articles
- Minimalism topics
- Core concept explanations
- Meditation / wellness
- Luxury or premium content
