# Style: sketch-notes

Hand-drawn educational infographic — warm, friendly, approachable.

## Design Aesthetic

Warm cream paper with hand-drawn wobbly lines, pastel color blocks, and doodle decorations. Feels like a friendly teacher's whiteboard notes. Uses Rough.js for hand-drawn border effects.

## Font

- **Primary**: `'Caveat', 'Comic Neue', cursive`
- **Accent**: `'Inter', -apple-system, sans-serif` (for numbers and data)
- **Weights**: 400 (body), 700 (titles)
- **Google Fonts link**: `https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Inter:wght@400;700&display=swap`

## CSS Rendering Rules

```css
/* Hand-drawn borders via Rough.js */
.info-card, .flow-step, .fw-node, .event-card {
    border: none; /* Rough.js draws borders */
    border-radius: 0; /* Rough.js handles shape */
    background: var(--zone-1);
}

/* Hand-drawn line effect for non-Rough.js elements */
.sketch-line {
    stroke-dasharray: none;
    stroke-width: 2;
    stroke: var(--line);
    /* Slight wobble via CSS */
}

/* Paper texture */
.illustration {
    background: var(--bg-primary);
    /* Subtle paper texture */
    background-image:
        radial-gradient(ellipse at 20% 50%, rgba(0,0,0,0.02) 0%, transparent 50%),
        radial-gradient(ellipse at 80% 50%, rgba(0,0,0,0.02) 0%, transparent 50%);
}

/* Color fills with slight "overshoot" effect */
.zone-fill {
    border-radius: 16px;
    margin: -2px; /* Slight overshoot */
    padding: calc(16px + 2px);
}
```

## Rough.js Integration

Load from CDN and apply to bordered elements:

```html
<script src="https://cdn.jsdelivr.net/npm/roughjs@4.6.6/bundled/rough.cjs.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        const rc = rough.canvas(document.querySelector('.illustration'));
        document.querySelectorAll('.rough-border').forEach(el => {
            const r = el.getBoundingClientRect();
            const parent = el.closest('.illustration').getBoundingClientRect();
            rc.rectangle(
                r.left - parent.left, r.top - parent.top,
                r.width, r.height,
                { stroke: getComputedStyle(el).color, strokeWidth: 2, roughness: 1.5, bowing: 1 }
            );
        });
    });
</script>
```

## Visual Elements

- Rounded info boxes with hand-drawn borders
- Wavy hand-drawn arrows with inline labels
- Simple stick-figure characters (optional)
- Doodle decorations: stars ✦, sparkles ✧, underlines, dots
- Hand-lettered titles (large, slightly wobbly feel via Caveat font)
- Color fills that don't completely fill outlines (slight "hand-painted" effect)

## Style Rules

| Do | Don't |
|-------|-------|
| Use hand-drawn style fonts | Use computer-perfect fonts |
| Keep pastel color fills light | Use dark or saturated colors |
| Add small doodle decorations | Over-decorate |
| Use generous white space | Crowd elements |
| Make it feel warm and friendly | Make it look rigid or corporate |

## Default Palette

`macaron` — soft pastel blocks on warm cream. This style pairs best with macaron.

## Best For

- Educational content
- Concept explainers
- Onboarding guides
- Warm, friendly knowledge articles
- General-purpose articles
