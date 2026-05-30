# Layout System

## Aspect Ratio Dimensions

Fixed pixel dimensions for each supported aspect ratio. The HTML `<body>` uses these exact dimensions with `overflow: hidden`.

| Aspect | CSS Width | CSS Height | Canvas 2× Width | Canvas 2× Height |
|--------|-----------|------------|-----------------|------------------|
| 16:9 | 1920px | 1080px | 3840 | 2160 |
| 9:16 | 1080px | 1920px | 2160 | 3840 |
| 1:1 | 1080px | 1080px | 2160 | 2160 |
| 2.35:1 | 2350px | 1000px | 4700 | 2000 |
| 3:2 | 1500px | 1000px | 3000 | 2000 |
| 4:3 | 1600px | 1200px | 3200 | 2400 |

## Body Setup

```css
* { margin: 0; padding: 0; box-sizing: border-box; }

body {
    width: {WIDTH}px;
    height: {HEIGHT}px;
    overflow: hidden;
    background: var(--bg-gradient);
    font-family: var(--font-stack);
}
```

## Grid System

Use a 12-column grid for consistent element placement. Column width varies by aspect.

```
Total width = {WIDTH}px
Column width = ({WIDTH} - 11 * gap) / 12
Gap = 20px (16:9), 16px (9:16), 20px (1:1)
Margin = 60px on each side (16:9), 40px (9:16), 50px (1:1)
```

## Z-Index Layers

| Layer | Z-Index | Purpose |
|-------|---------|---------|
| Background | 0 | Gradient, pattern, noise |
| Decorations | 1-9 | Shapes, SVG elements, canvas drawings |
| Glass panels | 10-19 | Glassmorphism cards (if style requires) |
| Text | 20-29 | Title, subtitle, tags |
| Overlay | 30+ | Scan lines, vignette, effects |

## Safe Zones

Areas that should be kept clear for critical content (titles, important visuals).

### 16:9 (1920×1080)
- **Title safe zone**: 120px from each edge
- **Visual center**: 960×540
- **Title position**: Typically bottom 40% or center

### 9:16 (1080×1920)
- **Title safe zone**: 60px from each side, 100px from top/bottom
- **Visual center**: 540×960
- **Title position**: Typically top 30% or center

### 1:1 (1080×1080)
- **Title safe zone**: 80px from each edge
- **Visual center**: 540×540
- **Title position**: Center or bottom 40%

## Spacing Scale

Use consistent spacing multiples:

| Token | Value | Usage |
|-------|-------|-------|
| xs | 8px | Small gaps between inline elements |
| sm | 16px | Between subtitle and title |
| md | 24px | Section spacing |
| lg | 40px | Major section breaks |
| xl | 60px | Edge margins (16:9) |
| xxl | 100px | Cover padding top/bottom |

## Responsive Note

HTML covers are NOT responsive — they are fixed-dimension compositions. The browser renders them at the exact pixel size specified, and export captures at that resolution. This is intentional: covers are images, not web pages.
