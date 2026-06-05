# Style: screen-print

Bold poster art with limited colors — impactful, dramatic, editorial.

## Design Aesthetic

Inspired by screen printing / silkscreen poster art. Flat color blocks with no gradients, halftone dot textures, bold silhouettes, and limited color palette (2-5 colors max). High contrast, immediate visual impact.

## Font

- **Primary**: `'Oswald', 'Impact', 'Arial Narrow', sans-serif`
- **Secondary**: `'Inter', -apple-system, sans-serif` (for body text only)
- **Weights**: 600 (labels), 700 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Oswald:wght@600;700&family=Inter:wght@400;600&display=swap`

## CSS Rendering Rules

```css
/* Halftone texture overlay */
.illustration::before {
    content: '';
    position: absolute; inset: 0;
    background-image: radial-gradient(circle, var(--text-primary) 0.8px, transparent 0.8px);
    background-size: 6px 6px;
    opacity: 0.04;
    pointer-events: none;
    z-index: 1;
}

/* Bold flat borders */
.info-card, .fw-node {
    border-width: 4px;
    border-color: var(--border);
    border-radius: 0; /* Sharp corners */
    background: var(--zone-1);
}

/* Bold typography */
.title {
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 56px;
}

/* High contrast */
.content { position: relative; z-index: 2; }

/* Flat color blocks */
.flat-block {
    position: absolute;
    border-radius: 0;
    opacity: 1;
}

/* Misregistration effect (slight color offset) */
.misregister {
    transform: translate(2px, -1px);
    opacity: 0.3;
}
```

## Visual Elements

- Bold silhouettes and stencil-cut shapes
- 2-5 flat colors maximum — no gradients
- Halftone dot pattern overlay (subtle)
- Sharp corners (no border-radius)
- Bold uppercase typography
- Geometric framing and negative space as storytelling element
- Slight color misregistration effect (offset duplicate at low opacity)

## Color Strategy

Limit to 2-5 colors. Typical combos:

| Combo | Colors | Mood |
|-------|--------|------|
| Warm duo | Burnt Orange + Deep Teal on Off-Black | Dramatic, cinematic |
| Bold primary | Red + Black + White | Classic poster, urgent |
| Retro | Mustard + Rust + Cream | Vintage, nostalgic |
| High contrast | Black + White + 1 accent | Minimal poster |

## Style Rules

| Do | Don't |
|----|-------|
| Use bold, flat color blocks | Apply gradients or soft transitions |
| Keep typography large and bold | Use small or delicate fonts |
| Use sharp corners | Add rounded borders |
| Limit to 2-5 colors | Use many colors |
| Create strong figure-ground contrast | Use subtle differentiation |
| Use halftone texture sparingly | Over-texture the background |

## Best For

- Opinion pieces
- Editorial commentary
- Cultural essays
- Cinematic narratives
- Bold statements and manifestos
- Any content needing dramatic visual impact
