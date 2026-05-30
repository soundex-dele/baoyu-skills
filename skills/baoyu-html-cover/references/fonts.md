# Font Selection Guide

## Font Categories

### clean (sans-serif)

Modern, geometric, precise. The safe default for most covers.

**Google Fonts:** Inter, Noto Sans SC (Chinese), Noto Sans JP (Japanese)
**Fallback stack:** `'Inter', 'Noto Sans SC', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`

**Best with styles:** flat, glassmorphism, geometric
**Best with palettes:** cool, mono, elegant

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&family=Noto+Sans+SC:wght@400;700;900&display=swap');
```

### handwritten

Warm, personal, approachable. Hand-lettered feel.

**Google Fonts:** Caveat, Ma Shan Zheng (Chinese), ZCOOL QingKe HuangYou (Chinese)
**Fallback stack:** `'Caveat', 'Ma Shan Zheng', 'Comic Sans MS', cursive`

**Best with styles:** hand-drawn, brutalist
**Best with palettes:** warm, earth, retro

```css
@import url('https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&family=Ma+Shan+Zheng&display=swap');
```

### serif

Classic, editorial, authoritative. Traditional elegance.

**Google Fonts:** Playfair Display, Noto Serif SC (Chinese), Noto Serif JP (Japanese)
**Fallback stack:** `'Playfair Display', 'Noto Serif SC', Georgia, 'Times New Roman', serif`

**Best with styles:** glassmorphism, gradient
**Best with palettes:** elegant, dark, retro

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=Noto+Serif+SC:wght@400;700;900&display=swap');
```

### display

Bold, decorative, attention-grabbing. For when the title needs to make a statement.

**Google Fonts:** Archivo Black, ZCOOL KuaiLe (Chinese), Bungee
**Fallback stack:** `'Archivo Black', 'ZCOOL KuaiLe', Impact, sans-serif`

**Best with styles:** brutalist, cyber, gradient
**Best with palettes:** vivid, neon, duotone

```css
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&family=ZCOOL+KuaiLe&display=swap');
```

### mono

Monospace, technical, code-like. For developer/tech covers.

**Google Fonts:** JetBrains Mono, Fira Code, Source Code Pro
**Fallback stack:** `'JetBrains Mono', 'Fira Code', 'Source Code Pro', 'Consolas', monospace`

**Best with styles:** cyber, brutalist, flat
**Best with palettes:** dark, neon, mono

```css
@import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap');
```

## Font Sizing Guide

Base sizing relative to aspect ratio. Scale down for denser text levels.

| Element | 16:9 | 9:16 | 1:1 | 2.35:1 |
|---------|------|------|------|---------|
| Title (title-only) | 72-96px | 88-120px | 64-80px | 64-80px |
| Title (title-subtitle) | 56-72px | 72-96px | 48-64px | 48-64px |
| Subtitle | 24-32px | 28-40px | 20-28px | 20-28px |
| Tags | 14-18px | 16-22px | 12-16px | 12-16px |
| Accent text | 12-16px | 14-18px | 10-14px | 10-14px |

## Font Loading Strategy

Include Google Fonts via `<link>` in the HTML `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
```

Always include a robust fallback stack so the cover renders acceptably even without network.
