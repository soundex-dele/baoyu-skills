---
name: canvas
category: elements
---

# Canvas & Layout System

Fixed dimensions, safe zones, and grid layouts for HTML card generation.

## Aspect Ratios

| Ratio | Dimensions | Use Case |
|-------|-----------|----------|
| 3:4 (default) | 1080×1440 | Xiaohongshu portrait, WeChat |
| 1:1 | 1080×1080 | Instagram square |
| 4:3 | 1440×1080 | Landscape presentation |
| 9:16 | 1080×1920 | Story format, vertical video |

## Safe Zones

```
┌─────────────────────────────────┐
│          60px top               │
│  ┌─────────────────────────┐    │
│  │                         │    │
│60│      Content Area       │60  │
│px│                         │px  │
│  │                         │    │
│  └─────────────────────────┘    │
│         60px bottom             │
└─────────────────────────────────┘
```

**Safe zone**: 60px padding on all sides. Critical text and icons MUST stay within the safe zone.

```css
.card {
    position: relative;
    box-sizing: border-box;
    padding: 60px;
    overflow: hidden;
}
```

## 12-Column Grid

All layouts use a 12-column grid system with 24px gutters:

```css
.card {
    --columns: 12;
    --gutter: 24px;
    --column-width: calc((100% - var(--gutter) * (var(--columns) - 1)) / var(--columns));
}

.grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: var(--gutter);
}

/* Usage examples */
.col-6 { grid-column: span 6; }   /* Half width */
.col-4 { grid-column: span 4; }   /* Third width */
.col-3 { grid-column: span 3; }   /* Quarter width */
.col-8 { grid-column: span 8; }   /* Two-thirds */
.col-12 { grid-column: span 12; } /* Full width */
```

## Layout Structures

### sparse
Centered hero element with minimal supporting text. Maximum whitespace.

```css
.layout-sparse {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 32px;
}
```

### balanced
3-4 content blocks arranged in a grid with icons and text.

```css
.layout-balanced {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    align-content: center;
}
```

### dense
5-8 compact content items in a tight grid with numbered items.

```css
.layout-dense {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    align-content: start;
}

.dense-item {
    display: flex;
    gap: 12px;
    align-items: flex-start;
}
```

### list
Vertical list of 4-7 items with rank numbers or bullets.

```css
.layout-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.list-item {
    display: flex;
    align-items: center;
    gap: 20px;
}
```

### comparison
Two-column split layout for side-by-side contrast.

```css
.layout-comparison {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0;
    height: 100%;
}

.comparison-col {
    padding: 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.comparison-divider {
    width: 2px;
    background: var(--border);
    align-self: stretch;
}
```

### flow
Horizontal or vertical step chain with connecting arrows/lines.

```css
.layout-flow {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.flow-step {
    display: flex;
    align-items: center;
    gap: 20px;
}

.flow-connector {
    width: 2px;
    height: 24px;
    background: var(--border);
    margin-left: 24px;
}
```

### mindmap
Central node with radiating branches.

```css
.layout-mindmap {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    height: 100%;
}

.mindmap-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.mindmap-branch {
    position: absolute;
    /* Position calculated per branch */
}
```

### quadrant
2×2 grid or circular segments.

```css
.layout-quadrant {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 4px;
}

.quadrant-cell {
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```

## Spacing Tokens

```css
:root {
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    --space-2xl: 64px;
}
```

## Z-Index Layers

```css
:root {
    --z-background: 0;
    --z-decoration: 10;
    --z-content: 20;
    --z-header: 30;
    --z-footer: 30;
    --z-watermark: 40;
}
```
