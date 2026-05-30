# Visual Elements

A vocabulary of shapes, icons, and symbols for cover decorations. Use CSS shapes, inline SVG, or Rough.js (hand-drawn style).

## Tech & Development

| Concept | CSS/SVG Representation |
|---------|----------------------|
| Code | `</>` text, monospace brackets, terminal window shape |
| Gear/Settings | SVG gear path, CSS rotating square with rounded corners |
| Circuit | Connected right-angle lines with circle endpoints |
| Cloud | CSS blob (multiple overlapping circles) |
| Lock/Security | SVG padlock shape, shield outline |
| API | Curly braces `{ }`, bracket notation |
| Database | Stacked cylinders (CSS or SVG) |
| Terminal | Rounded rectangle with `> _` prompt text |

## Ideas & Innovation

| Concept | CSS/SVG Representation |
|---------|----------------------|
| Lightbulb | SVG bulb outline with rays |
| Rocket | SVG rocket shape with flame |
| Target | Concentric circles with center dot |
| Puzzle | Interlocking square shapes |
| Key | SVG key outline |
| Magnifying Glass | Circle with angled line |

## Communication & Collaboration

| Concept | CSS/SVG Representation |
|---------|----------------------|
| Speech Bubble | Rounded rectangle with triangle tail |
| Network | Dots connected by lines |
| Handshake | SVG simplified handshake |
| Megaphone | SVG cone shape |
| Mail | Rectangle with triangle flap |

## Nature & Growth

| Concept | CSS/SVG Representation |
|---------|----------------------|
| Plant/Seedling | SVG stem with leaves |
| Tree | Triangle on rectangle trunk |
| Mountain | CSS triangle or SVG mountain range |
| Wave | CSS `border-radius` wave or SVG path |
| Sun | Circle with radiating lines |
| Leaf | SVG leaf path |

## Abstract Concepts

| Concept | CSS/SVG Representation |
|---------|----------------------|
| Growth Arrow | Upward diagonal line with arrowhead |
| Infinity | SVG infinity path |
| Cycle | Circular arrow (SVG arc) |
| Connection | Overlapping circles (Venn diagram) |
| Balance | See-saw / balance beam SVG |
| Flow | Curved path with arrow |

## Decoration Patterns

### Dot Grid

```css
.dot-grid {
    background-image: radial-gradient(var(--muted) 1px, transparent 1px);
    background-size: 30px 30px;
}
```

### Line Grid

```css
.line-grid {
    background-image:
        linear-gradient(var(--muted) 1px, transparent 1px),
        linear-gradient(90deg, var(--muted) 1px, transparent 1px);
    background-size: 40px 40px;
    opacity: 0.3;
}
```

### Diagonal Stripes

```css
.stripes {
    background: repeating-linear-gradient(
        45deg,
        transparent,
        transparent 10px,
        var(--accent-glow) 10px,
        var(--accent-glow) 20px
    );
}
```

### Circuit Pattern

```css
.circuit-bg {
    background-image:
        linear-gradient(var(--accent-glow) 1px, transparent 1px),
        linear-gradient(90deg, var(--accent-glow) 1px, transparent 1px);
    background-size: 60px 60px;
}
/* Add circle endpoints at intersections via pseudo-elements or SVG */
```

### Noise Texture

```css
.noise::before {
    content: '';
    position: absolute;
    inset: 0;
    background: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E");
    opacity: 0.4;
    pointer-events: none;
}
```

## SVG Icon Templates

Inline SVG snippets for common cover icons. Adjust `fill`, `stroke`, `width`, `height` as needed.

### Circle with Dot (node/connection)

```html
<svg width="40" height="40" viewBox="0 0 40 40">
    <circle cx="20" cy="20" r="16" fill="none" stroke="var(--accent)" stroke-width="2"/>
    <circle cx="20" cy="20" r="6" fill="var(--accent)"/>
</svg>
```

### Rounded Rectangle (card/panel)

```html
<svg width="200" height="120" viewBox="0 0 200 120">
    <rect x="4" y="4" width="192" height="112" rx="12" ry="12"
          fill="var(--surface)" stroke="var(--accent)" stroke-width="2"/>
</svg>
```

### Triangle (direction/growth)

```html
<svg width="100" height="100" viewBox="0 0 100 100">
    <polygon points="50,10 90,80 10,80" fill="none" stroke="var(--accent)" stroke-width="2"/>
</svg>
```

### Hexagon (structure)

```html
<svg width="100" height="100" viewBox="0 0 100 100">
    <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5"
             fill="none" stroke="var(--accent)" stroke-width="2"/>
</svg>
```

### Lightbulb (idea)

```html
<svg width="80" height="100" viewBox="0 0 80 100">
    <path d="M40 10 C20 10 10 25 10 40 C10 55 25 60 25 70 L55 70 C55 60 70 55 70 40 C70 25 60 10 40 10Z"
          fill="none" stroke="var(--accent)" stroke-width="2"/>
    <line x1="28" y1="78" x2="52" y2="78" stroke="var(--accent)" stroke-width="2"/>
    <line x1="30" y1="84" x2="50" y2="84" stroke="var(--accent)" stroke-width="2"/>
    <line x1="33" y1="90" x2="47" y2="90" stroke="var(--accent)" stroke-width="2"/>
</svg>
```
