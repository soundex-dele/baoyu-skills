# Visual Styles

Each style defines how decorations, shapes, and elements are rendered in the HTML cover.

## flat

Clean, solid fills with no shadows or gradients. Minimalist and crisp.

**CSS characteristics:**
- Solid background colors (no gradient on shapes)
- No box-shadow, no text-shadow
- Sharp borders (`border-radius: 0` or small)
- Flat color fills on SVG elements
- Clean, geometric shapes

**When to use:** Professional, corporate, minimal, tech documentation.

**Example CSS:**
```css
.decoration {
    background: var(--accent);
    border-radius: 8px;
    /* No shadows, no gradients */
}
```

## glassmorphism

Frosted glass effect with backdrop blur and transparency. Modern and elegant.

**CSS characteristics:**
- `backdrop-filter: blur(10px)`
- Semi-transparent backgrounds (`rgba(..., 0.15)`)
- Subtle light borders (`border: 1px solid rgba(255,255,255,0.2)`)
- Soft shadows (`box-shadow: 0 8px 32px rgba(...)`)
- Gradient background underneath glass panels

**When to use:** Modern apps, design, lifestyle, premium feel.

**Example CSS:**
```css
.glass-panel {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}
```

## gradient

Rich, flowing gradients on shapes, backgrounds, and sometimes text. Vibrant.

**CSS characteristics:**
- Multi-stop gradients on backgrounds
- `background-clip: text` for gradient text
- Layered radial and linear gradients
- Gradient fills on SVG shapes
- Color transitions that flow naturally

**When to use:** Creative, energy, youth, marketing, modern tech.

**Example CSS:**
```css
.gradient-shape {
    background: linear-gradient(135deg, var(--accent) 0%, var(--accent-light) 100%);
    border-radius: 50%;
}
.gradient-text {
    background: linear-gradient(to right, var(--accent), var(--accent-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```

## hand-drawn

Rough.js-based rendering with wobbly, hand-drawn aesthetic. Warm and personal.

**Requirements:** Loads Rough.js from CDN (`https://cdn.jsdelivr.net/npm/roughjs@4.5.2/bundled/rough.esm.js`).

**CSS characteristics:**
- Canvas element for decorations (2× retina)
- CSS text overlay on top of canvas
- Rough.js parameters: `roughness: 1.5`, `bowing: 2`
- Imperfect circles, lines, rectangles

**When to use:** Education, personal blog, storytelling, craft, children.

**Example HTML structure:**
```html
<canvas id="coverCanvas" width="3840" height="2160"></canvas>
<div class="text-layer">
    <h1 class="title">Title</h1>
</div>
<script type="module">
    import rough from 'https://cdn.jsdelivr.net/npm/roughjs@4.5.2/bundled/rough.esm.js';
    const rc = rough.canvas(document.getElementById('coverCanvas'));
    rc.circle(960, 540, 300, {
        roughness: 1.5, bowing: 2,
        stroke: 'var(--accent)', fill: 'var(--accent-glow)'
    });
</script>
```

## geometric

Clean geometric shapes — circles, triangles, hexagons, lines. Structured and modern.

**CSS characteristics:**
- CSS shapes via `clip-path` and `border-radius`
- Grid-based layout with CSS Grid
- Repeating geometric patterns
- SVG polygons for complex shapes
- Precise alignment, no randomness

**When to use:** Architecture, engineering, data, analytics, structure.

**Example CSS:**
```css
.hexagon {
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    background: var(--accent);
}
.circle-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
}
```

## brutalist

Raw, bold, high-contrast. Thick borders, asymmetric layout, oversized typography.

**CSS characteristics:**
- Very thick borders (`border: 4px solid`)
- Monospace or heavy fonts
- No border-radius (or extreme: 0 or 24px)
- Asymmetric positioning
- High contrast — black on white or vice versa
- Raw, unpolished feel

**When to use:** Art, culture, underground, editorial, protest, punk.

**Example CSS:**
```css
.brutalist-card {
    border: 4px solid var(--text-primary);
    background: var(--bg-primary);
    padding: 40px;
    transform: rotate(-2deg);
}
.brutalist-title {
    font-family: 'Courier New', monospace;
    font-size: 120px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -4px;
    line-height: 0.9;
}
```

## cyber

Neon glow, scan lines, circuit patterns on dark backgrounds. Futuristic.

**CSS characteristics:**
- Neon text-shadow glow effects
- Dark background (use `dark` or `neon` palette)
- Scan line overlay via CSS pseudo-elements
- Grid/circuit line patterns
- Monospace labels and technical text
- Accent colors with strong glow

**When to use:** AI, tech, gaming, cyberpunk, futuristic, hackathon.

**Example CSS:**
```css
.neon-text {
    color: var(--accent);
    text-shadow:
        0 0 7px var(--accent),
        0 0 10px var(--accent),
        0 0 21px var(--accent),
        0 0 42px var(--accent-glow);
}
.scanlines::after {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.1) 2px,
        rgba(0, 0, 0, 0.1) 4px
    );
    pointer-events: none;
}
```
