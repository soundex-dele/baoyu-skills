# Style: vector-illustration

Clean flat vector art with bold shapes — modern, professional, highly readable.

## Design Aesthetic

Flat geometric shapes with clean black outlines. No gradients, no shadows, no realistic elements. Bold, playful, and highly readable at any size.

## Font

- **Primary**: `'Nunito', 'Segoe UI', -apple-system, sans-serif`
- **Weights**: 400 (body), 600 (labels), 700 (titles), 800 (values)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800&display=swap`

## CSS Rendering Rules

```css
/* Borders */
* { border-color: var(--border); border-style: solid; }
.info-card, .flow-step, .fw-node, .event-card {
    border-width: 3px;
    border-radius: 16px;
    box-shadow: none; /* No shadows — flat */
}

/* Backgrounds */
.zone-bg { background: currentColor; opacity: 0.15; } /* Tinted backgrounds */

/* Icons */
.icon { stroke: var(--border); stroke-width: 2.5; fill: none; }

/* Arrows and connectors */
.connector { stroke: var(--border); stroke-width: 2.5; fill: none; }
.arrow-head { fill: var(--border); }
```

## Visual Elements

- Geometric simplified icons (circle+rect compositions)
- No gradients, no shadows
- Playful decorative dots and stars (small SVG circles/polygons)
- Rounded corners on everything (16px)
- Black outlines on all elements (3px)
- Color fills at 15% opacity or solid pastel

## Style Rules

| Do | Don't |
|----|-------|
| Use bold geometric shapes | Use realistic or photographic elements |
| Keep clean black outlines | Add drop shadows or glows |
| Use solid or pastel color fills | Use gradients or textures |
| Keep icons simple and geometric | Over-detail illustrations |
| Use generous whitespace | Crowd elements together |

## Best For

- Knowledge articles
- Tutorials
- Tech content
- Product documentation
- Modern, clean aesthetic
