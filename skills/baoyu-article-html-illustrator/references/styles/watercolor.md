# Style: watercolor

Soft artistic with natural warmth — organic, emotional, dreamy.

## Design Aesthetic

Soft CSS gradient blobs mimicking watercolor paint, organic shapes with rounded edges, and warm, inviting colors. Feels like a hand-painted illustration in an art journal.

## Font

- **Primary**: `'Caveat', 'Comic Neue', cursive`
- **Secondary**: `'Inter', -apple-system, sans-serif` (for body text)
- **Weights**: 400 (body), 700 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400&display=swap`

## CSS Rendering Rules

```css
/* Watercolor blob backgrounds */
.blob {
    position: absolute;
    border-radius: 50%;
    filter: blur(40px);
    opacity: 0.4;
    mix-blend-mode: multiply;
}
.blob-1 { width: 500px; height: 400px; background: var(--zone-1); top: 10%; left: 15%; }
.blob-2 { width: 400px; height: 350px; background: var(--zone-3); bottom: 15%; right: 10%; }
.blob-3 { width: 300px; height: 300px; background: var(--zone-4); top: 40%; right: 30%; }

/* Soft card backgrounds */
.info-card, .flow-step, .fw-node {
    border: none;
    border-radius: 24px;
    background: rgba(255,255,255,0.5);
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

/* Organic connector lines */
.connector {
    stroke: var(--text-secondary);
    stroke-width: 2;
    stroke-linecap: round;
}

/* Soft shadows */
.soft-shadow { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
```

## Visual Elements

- Large gradient blobs as background (CSS `filter: blur`)
- Semi-transparent cards with backdrop blur
- Organic rounded shapes (24px+ border-radius)
- Soft drop shadows (large spread, low opacity)
- Handwritten-style font (Caveat)
- Nature-inspired decorative elements (leaves, waves as SVG)

## Style Rules

| Do | Don't |
|----|-------|
| Use soft, blended colors | Use hard edges or sharp borders |
- Create organic, flowing layouts
- Apply generous blur and transparency
- Keep text light and approachable
- Use nature-inspired decorative elements
- Don't use harsh lines or geometric precision
- Don't use dark or heavy borders
- Don't crowd elements
- Don't use corporate or rigid fonts

## Best For

- Lifestyle articles
- Travel content
- Personal essays
- Creative writing
- Emotional storytelling
- Wellness and mindfulness
