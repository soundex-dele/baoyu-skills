---
name: html-assembly
category: workflow
---

# HTML Assembly Guide

Step-by-step guide for assembling self-contained HTML card files.

## Assembly Flow

```
1. Read outline → card specs
2. Read style preset → CSS rules
3. Read palette → CSS custom properties
4. Read layout → grid/flex structure
5. Assemble HTML
6. Write to file
```

## HTML Template

```html
<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width={WIDTH}, height={HEIGHT}">
    <title>{title} - Card {N}/{TOTAL}</title>
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family={FONT_FAMILY}" rel="stylesheet">
    <!-- Rough.js (sketch-notes only) -->
    {ROUGH_JS_SCRIPT}
    <style>
        /* === Reset === */
        *, *::before, *::after {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #f0f0f0;
        }

        /* === Palette (CSS Custom Properties) === */
        :root {
            /* ... palette variables ... */
        }

        /* === Card Base === */
        .card {
            position: relative;
            width: {WIDTH}px;
            height: {HEIGHT}px;
            padding: 60px;
            overflow: hidden;
            font-family: {FONT_STACK};
            color: var(--text-primary);
            background: {BACKGROUND};
        }

        /* === Background Layer === */
        .card-bg {
            position: absolute;
            inset: 0;
            z-index: var(--z-background);
            /* Background pattern or texture */
        }

        /* === Header === */
        .card-header {
            position: relative;
            z-index: var(--z-header);
            margin-bottom: 24px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .card-brand {
            font-size: 16px;
            color: var(--text-tertiary);
        }

        .card-page {
            font-size: 16px;
            color: var(--text-tertiary);
        }

        /* === Content Layer === */
        .card-content {
            position: relative;
            z-index: var(--z-content);
            /* Layout-specific styles */
        }

        .card-title {
            font-size: var(--text-2xl);
            font-weight: {FONT_WEIGHT};
            color: var(--text-primary);
            margin-bottom: 16px;
            line-height: var(--line-height-tight);
        }

        .card-subtitle {
            font-size: var(--text-lg);
            color: var(--text-secondary);
            margin-bottom: 24px;
        }

        /* === Layout-specific === */
        {LAYOUT_CSS}

        /* === Content Block === */
        .content-block {
            position: relative;
            {STYLE_BLOCK_CSS}
        }

        .block-title {
            font-size: var(--text-lg);
            font-weight: {FONT_WEIGHT};
            margin-bottom: 8px;
        }

        .block-body {
            font-size: var(--text-base);
            color: var(--text-secondary);
            line-height: var(--line-height-normal);
        }

        /* === Tags === */
        .tag {
            display: inline-block;
            {TAG_CSS}
        }

        /* === Decorations === */
        .deco {
            position: absolute;
            z-index: var(--z-decoration);
            pointer-events: none;
        }

        /* === Footer === */
        .card-footer {
            position: absolute;
            bottom: 24px;
            left: 60px;
            right: 60px;
            z-index: var(--z-footer);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        /* === Watermark === */
        .watermark {
            position: absolute;
            z-index: var(--z-watermark);
            font-size: 14px;
            opacity: 0.3;
            color: var(--text-tertiary);
        }

        /* === Style-specific overrides === */
        {STYLE_OVERRIDES}
    </style>
</head>
<body>
    <div class="card">
        <!-- Background Layer -->
        <div class="card-bg"></div>

        <!-- Decoration Layer -->
        {DECORATION_SVG}

        <!-- Header -->
        <div class="card-header">
            <span class="card-brand">{BRAND}</span>
            <span class="card-page">{N}/{TOTAL}</span>
        </div>

        <!-- Content Layer -->
        <div class="card-content">
            <h1 class="card-title">{TITLE}</h1>
            {SUBTITLE}
            {CONTENT_BLOCKS}
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <span class="card-page">{N}/{TOTAL}</span>
            {WATERMARK}
        </div>
    </div>

    {ROUGH_JS_INIT}
</body>
</html>
```

## Content Block Patterns

### Simple Text Block

```html
<div class="content-block">
    <div class="block-title">📝 {Title}</div>
    <div class="block-body">{Body text}</div>
</div>
```

### Numbered List Item

```html
<div class="content-block list-item">
    <div class="rank-number">{N}</div>
    <div>
        <div class="block-title">{Title}</div>
        <div class="block-body">{Body text}</div>
    </div>
</div>
```

### Comparison Column

```html
<div class="comparison-col left">
    <div class="col-header">👍 {Title A}</div>
    <div class="content-block">
        <div class="block-body">{Points A}</div>
    </div>
</div>
<div class="comparison-divider"></div>
<div class="comparison-col right">
    <div class="col-header">👎 {Title B}</div>
    <div class="content-block">
        <div class="block-body">{Points B}</div>
    </div>
</div>
```

### Flow Step

```html
<div class="flow-step">
    <div class="step-number">{N}</div>
    <div class="content-block">
        <div class="block-title">{Title}</div>
        <div class="block-body">{Body text}</div>
    </div>
</div>
<div class="flow-connector"></div>
```

### Mindmap Branch

```html
<div class="mindmap-branch" style="top:{Y}%; left:{X}%;">
    <div class="branch-line" style="width:{W}px; transform: rotate({ANGLE}deg);"></div>
    <div class="content-block">
        <div class="block-title">{Title}</div>
    </div>
</div>
```

## Dimension Mapping

| Aspect | WIDTH | HEIGHT |
|--------|-------|--------|
| 3:4 | 1080 | 1440 |
| 1:1 | 1080 | 1080 |
| 4:3 | 1440 | 1080 |
| 9:16 | 1080 | 1920 |

## Font Stack Mapping

| Style | FONT_FAMILY | FONT_STACK |
|-------|------------|------------|
| cute | ZCOOL+KuaiLe | `'ZCOOL KuaiLe', cursive, "PingFang SC", sans-serif` |
| fresh | Noto+Sans+SC:wght@400;700 | `'Noto Sans SC', sans-serif` |
| warm | Noto+Serif+SC:wght@400;700 | `'Noto Serif SC', serif` |
| bold | Noto+Sans+SC:wght@900 | `'Noto Sans SC', sans-serif` |
| minimal | Inter:wght@300;400;600 | `'Inter', sans-serif` |
| retro | ZCOOL+QingKe+HuangYou | `'ZCOOL QingKe HuangYou', cursive` |
| pop | Noto+Sans+SC:wght@900 | `'Noto Sans SC', sans-serif` |
| notion | Noto+Sans+SC:wght@400;500 | `'Noto Sans SC', sans-serif` |
| chalkboard | Caveat:wght@400;700 | `'Caveat', cursive` |
| study-notes | Ma+Shan+Zheng | `'Ma Shan Zheng', cursive` |
| screen-print | Archivo+Black | `'Archivo Black', sans-serif` |
| sketch-notes | Caveat:wght@400;700 | `'Caveat', cursive` |

## Gallery Index (Optional)

When creating `index.html`, use this template:

```html
<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <title>{topic} - Card Gallery</title>
    <style>
        body { margin: 0; padding: 40px; background: #f5f5f5; font-family: sans-serif; }
        h1 { text-align: center; margin-bottom: 40px; }
        .gallery { display: flex; flex-wrap: wrap; gap: 24px; justify-content: center; }
        .gallery-item { text-decoration: none; color: inherit; }
        .gallery-item img { width: 270px; height: auto; border-radius: 12px;
                            box-shadow: 0 4px 16px rgba(0,0,0,0.1); }
        .gallery-item .label { text-align: center; margin-top: 8px; font-size: 14px; color: #666; }
        .nav { text-align: center; margin: 40px 0; }
        .nav a { margin: 0 12px; padding: 8px 20px; background: #007bff; color: white;
                 text-decoration: none; border-radius: 8px; }
    </style>
</head>
<body>
    <h1>{topic}</h1>
    <div class="gallery">
        {GALLERY_ITEMS}
    </div>
</body>
</html>
```

Each gallery item:

```html
<a class="gallery-item" href="NN-{type}-{slug}.html" target="_blank">
    <img src="NN-{type}-{slug}.html" loading="lazy" alt="{title}">
    <div class="label">Card {N}: {title}</div>
</a>
```
