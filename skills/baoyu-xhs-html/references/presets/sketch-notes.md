---
name: sketch-notes
category: style-preset
---

# Sketch Notes Style

Hand-drawn educational infographic with wobble lines and pastel fills on warm cream. Uses Rough.js for authentic hand-drawn effect.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: warm-cream

typography:
  decorated: bubble
  tags: pill
  font: Caveat
  direction: horizontal

decorations:
  shapes: hand-drawn-rect, hand-drawn-circle
  emphasis: hand-drawn-star
  background: dot-grid-warm
  frames: hand-drawn-frame
  doodles: arrows, stars, lightbulbs, checkmarks
```

## Default Color Palette

```css
:root {
    --bg-primary: #F5F0E8;         /* Warm cream */
    --bg-secondary: #EDE7DB;       /* Slightly darker cream */
    --bg-card: #FFFDF7;            /* Near-white cream */
    --bg-accent: #FFF5EE;          /* Soft peach white */
    --text-primary: #3D3226;       /* Warm dark brown */
    --text-secondary: #8B7D6B;     /* Muted brown */
    --text-tertiary: #B5A897;      /* Light brown */
    --zone-1: #A8D8EA;             /* Soft blue */
    --zone-2: #D5C6E0;             /* Lavender */
    --zone-3: #B5E5CF;             /* Mint */
    --zone-4: #F8D5C4;             /* Peach */
    --accent: #E8655A;             /* Coral */
    --accent-soft: #F4A09A;        /* Soft coral */
    --accent-bg: rgba(232, 101, 90, 0.1);
    --border: #E0D5C5;             /* Warm border */
    --border-light: #EDE7DB;       /* Light border */
    --shadow: rgba(61, 50, 38, 0.08);
    --shadow-strong: rgba(61, 50, 38, 0.15);
}
```

**Note**: This style defaults to the `macaron` palette.

## Rough.js Integration

This style requires Rough.js for authentic hand-drawn rendering:

```html
<!-- Add to <head> -->
<script src="https://cdn.jsdelivr.net/npm/roughjs@4.6.6/bundled/rough.cjs.min.js"></script>
```

### Initialization

```html
<script>
window.addEventListener('load', () => {
    const card = document.querySelector('.card');
    const canvas = document.createElement('canvas');
    canvas.width = card.offsetWidth;
    canvas.height = card.offsetHeight;
    canvas.style.cssText = 'position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:var(--z-decoration)';
    card.appendChild(canvas);

    const rc = rough.canvas(canvas);

    // Draw hand-drawn elements
    rc.rectangle(60, 60, canvas.width - 120, 100, {
        stroke: 'var(--text-secondary)',
        strokeWidth: 2,
        roughness: 1.5,
        bowing: 2
    });

    // Add more hand-drawn elements...
});
</script>
```

## CSS Rendering Rules

```css
/* Base card */
.card {
    font-family: 'Caveat', cursive;
    background: var(--bg-primary);
    /* Subtle dot grid */
}

.card::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image: radial-gradient(circle, var(--border) 1px, transparent 1px);
    background-size: 20px 20px;
    opacity: 0.4;
}

/* Content blocks — use Rough.js for hand-drawn borders */
.content-block {
    background: var(--zone-1);
    opacity: 0.85;
    border-radius: 4px;
    padding: 20px;
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
    font-weight: 700;
}

/* Tags */
.tag {
    background: var(--accent-bg);
    color: var(--accent);
    border: 1.5px dashed var(--accent-soft);
    border-radius: 4px;
    padding: 2px 10px;
    font-size: var(--text-xs);
    font-family: 'Caveat', cursive;
}
```

## Rough.js Drawing Patterns

### Hand-drawn Rectangle

```javascript
rc.rectangle(x, y, width, height, {
    stroke: 'var(--text-secondary)',
    fill: 'var(--zone-1)',
    fillStyle: 'solid',
    strokeWidth: 2,
    roughness: 1.5,
    bowing: 2
});
```

### Hand-drawn Circle

```javascript
rc.circle(cx, cy, diameter, {
    stroke: 'var(--accent)',
    fill: 'var(--zone-3)',
    fillStyle: 'solid',
    strokeWidth: 2,
    roughness: 1.2
});
```

### Hand-drawn Arrow

```javascript
rc.linearPath([
    [x1, y1],
    [x2, y2]
], {
    stroke: 'var(--text-secondary)',
    strokeWidth: 2,
    roughness: 1.5
});
// Arrowhead
rc.linearPath([
    [x2, y2],
    [x2 - 10, y2 - 8],
    [x2 - 10, y2 + 8]
], {
    stroke: 'var(--text-secondary)',
    strokeWidth: 2,
    roughness: 1.5
});
```

### Hand-drawn Star

```javascript
const cx = 100, cy = 100, r1 = 15, r2 = 30, points = 5;
const starPath = [];
for (let i = 0; i < points * 2; i++) {
    const angle = (Math.PI * i) / points - Math.PI / 2;
    const r = i % 2 === 0 ? r2 : r1;
    starPath.push([cx + r * Math.cos(angle), cy + r * Math.sin(angle)]);
}
rc.path(starPath.reduce((acc, p, i) =>
    `${acc}${i === 0 ? 'M' : 'L'}${p[0]},${p[1]}`, '') + 'Z', {
    stroke: 'var(--accent)',
    fill: 'var(--accent)',
    fillStyle: 'solid',
    roughness: 1
});
```

## Visual Elements

- **Shapes**: Hand-drawn rectangles, circles, arrows via Rough.js
- **Accents**: Stars, checkmarks, lightbulbs, question marks
- **Background**: Warm cream with dot grid
- **Borders**: Wobbly hand-drawn lines (Rough.js)
- **Shadows**: None (flat, hand-drawn feel)
- **Icons**: Hand-drawn style with Rough.js paths

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✓ | Cover cards |
| balanced | ✓✓ | Summaries, notes |
| dense | ✓✓ | Knowledge cards, study notes |
| list | ✓✓ | Checklists, rankings |
| comparison | ✓ | Comparisons |
| flow | ✓✓ | Processes, workflows, tutorials |
| mindmap | ✓✓ | Concept maps, brainstorming |

## Best For

- Educational content
- Tutorials and how-to guides
- Study notes and summaries
- Process flows and workflows
- Concept maps
- Hand-drawn infographic style
