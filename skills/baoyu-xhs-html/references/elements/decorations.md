---
name: decorations
category: elements
---

# Decorations

CSS shapes, SVG decorations, backgrounds, frames, and visual accents for HTML cards.

## Backgrounds

### Solid Color

```css
.bg-solid {
    background: var(--bg-primary);
}
```

### Gradient (linear)

```css
.bg-gradient-linear {
    background: linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 100%);
}
```

### Gradient (radial)

```css
.bg-gradient-radial {
    background: radial-gradient(circle at 30% 30%, var(--bg-accent) 0%, var(--bg-primary) 70%);
}
```

### Gradient (mesh-like with multiple stops)

```css
.bg-gradient-mesh {
    background:
        radial-gradient(at 20% 20%, var(--zone-1) 0%, transparent 50%),
        radial-gradient(at 80% 80%, var(--zone-2) 0%, transparent 50%),
        radial-gradient(at 50% 50%, var(--zone-3) 0%, transparent 50%),
        var(--bg-primary);
}
```

## CSS Shapes

### Circle

```css
.shape-circle {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: var(--zone-1);
}
```

### Rounded Rectangle

```css
.shape-rounded-rect {
    border-radius: 24px;
    background: var(--bg-card);
    box-shadow: 0 4px 16px var(--shadow);
}
```

### Blob (organic shape via clip-path)

```css
.shape-blob {
    clip-path: path('M200,20 C280,0 360,60 380,140 C400,220 360,320 280,340 C200,360 120,340 80,280 C40,220 20,140 60,80 C100,20 140,40 200,20 Z');
    background: var(--zone-1);
}
```

### Diamond

```css
.shape-diamond {
    width: 100px;
    height: 100px;
    transform: rotate(45deg);
    background: var(--accent);
}
```

### Triangle

```css
.shape-triangle {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 86px solid var(--accent);
}
```

## SVG Decorations

### Star

```html
<svg width="40" height="40" viewBox="0 0 40 40" fill="var(--accent)">
    <path d="M20 2 L25 15 L38 15 L27 23 L31 36 L20 28 L9 36 L13 23 L2 15 L15 15 Z"/>
</svg>
```

### Heart

```html
<svg width="40" height="40" viewBox="0 0 40 40" fill="var(--zone-4)">
    <path d="M20 35 C10 25 2 18 2 12 C2 6 7 2 12 2 C16 2 19 4 20 7 C21 4 24 2 28 2 C33 2 38 6 38 12 C38 18 30 25 20 35Z"/>
</svg>
```

### Sparkle

```html
<svg width="30" height="30" viewBox="0 0 30 30" fill="var(--accent)">
    <path d="M15 0 L17 12 L30 15 L17 18 L15 30 L13 18 L0 15 L13 12 Z"/>
</svg>
```

### Arrow Right

```html
<svg width="40" height="24" viewBox="0 0 40 24" fill="var(--accent)">
    <path d="M0 10 L28 10 L28 2 L40 12 L28 22 L28 14 L0 14 Z"/>
</svg>
```

### Arrow Down (for flow layouts)

```html
<svg width="24" height="40" viewBox="0 0 24 40" fill="var(--border)">
    <path d="M10 0 L14 0 L14 28 L22 28 L12 40 L2 28 L10 28 Z"/>
</svg>
```

### Speech Bubble

```html
<svg width="200" height="120" viewBox="0 0 200 120">
    <rect x="10" y="10" width="180" height="80" rx="20" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
    <polygon points="40,90 60,90 50,110" fill="var(--bg-card)" stroke="var(--border)" stroke-width="2"/>
</svg>
```

### Lightbulb

```html
<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="var(--accent)" stroke-width="2">
    <path d="M20 4 C12 4 6 10 6 18 C6 24 10 28 14 30 L14 34 L26 34 L26 30 C30 28 34 24 34 18 C34 10 28 4 20 4Z"/>
    <line x1="15" y1="38" x2="25" y2="38"/>
</svg>
```

## Emphasis Marks

### Star Burst

```css
.emphasis-starburst {
    position: relative;
}
.emphasis-starburst::before {
    content: '★';
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 28px;
    color: var(--accent);
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}
```

### Exclamation Badge

```css
.emphasis-badge {
    position: relative;
}
.emphasis-badge::after {
    content: '!';
    position: absolute;
    top: -8px;
    right: -8px;
    width: 24px;
    height: 24px;
    background: var(--accent);
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: bold;
}
```

## Frames

### Polaroid Frame

```css
.frame-polaroid {
    background: white;
    padding: 16px 16px 48px;
    box-shadow: 0 4px 12px var(--shadow);
    transform: rotate(-2deg);
}
```

### Tape Corners

```css
.frame-tape {
    position: relative;
}
.frame-tape::before,
.frame-tape::after {
    content: '';
    position: absolute;
    width: 80px;
    height: 28px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.3);
}
.frame-tape::before {
    top: -10px;
    left: 20px;
    transform: rotate(-5deg);
}
.frame-tape::after {
    bottom: -10px;
    right: 20px;
    transform: rotate(3deg);
}
```

### Rounded Card with Shadow

```css
.frame-card {
    background: var(--bg-card);
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 8px 32px var(--shadow);
    border: 1px solid var(--border-light);
}
```

### Dashed Border

```css
.frame-dashed {
    border: 2px dashed var(--border);
    border-radius: 16px;
    padding: 24px;
}
```

## Doodles & Emoji

Use inline SVG or Unicode characters for small decorative elements:

| Element | Unicode / SVG | Use |
|---------|---------------|-----|
| Star | ★ or SVG | Ratings, emphasis |
| Heart | ♥ or SVG | Likes, love |
| Sparkle | ✦ or SVG | Magic, new |
| Check | ✓ or SVG | Completed, correct |
| Cross | ✗ or SVG | Wrong, remove |
| Arrow | → or SVG | Direction, flow |
| Lightning | ⚡ | Energy, fast |
| Fire | 🔥 | Hot, trending |

## Dividers

### Line Divider

```css
.divider-line {
    height: 2px;
    background: var(--border);
    margin: 24px 0;
}
```

### Dotted Divider

```css
.divider-dotted {
    border: none;
    border-top: 2px dotted var(--border);
    margin: 24px 0;
}
```

### Wavy Divider

```css
.divider-wavy {
    height: 20px;
    background:
        radial-gradient(circle at 10px -5px, transparent 12px, var(--border) 13px, transparent 14px) repeat-x;
    background-size: 20px 20px;
    margin: 24px 0;
}
```

### Gradient Divider

```css
.divider-gradient {
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    margin: 24px 0;
}
```

## Icon Placeholder

When no specific SVG icon is available, use a CSS-based icon placeholder:

```css
.icon-placeholder {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: var(--accent-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: var(--accent);
}
```
