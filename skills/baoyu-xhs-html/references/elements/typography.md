---
name: typography
category: elements
---

# Typography System

Font selection, decorated text, tags, and text hierarchy for HTML cards.

## Font Selection

### Google Fonts per Style

| Style | Primary Font | Fallback | Google Fonts Link |
|-------|-------------|----------|-------------------|
| cute | ZCOOL KuaiLe | cursive | `fonts.googleapis.com/css2?family=ZCOOL+KuaiLe` |
| fresh | Noto Sans SC | sans-serif | `fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700` |
| warm | Noto Serif SC | serif | `fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;700` |
| bold | Noto Sans SC Black | sans-serif | `fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@900` |
| minimal | Inter | sans-serif | `fonts.googleapis.com/css2?family=Inter:wght@300;400;600` |
| retro | ZCOOL QingKe HuangYou | cursive | `fonts.googleapis.com/css2?family=ZCOOL+QingKe+HuangYou` |
| pop | Noto Sans SC Black | sans-serif | `fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@900` |
| notion | Noto Sans SC | sans-serif | `fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;500` |
| chalkboard | Caveat | cursive | `fonts.googleapis.com/css2?family=Caveat:wght@400;700` |
| study-notes | Ma Shan Zheng | cursive | `fonts.googleapis.com/css2?family=Ma+Shan+Zheng` |
| screen-print | Archivo Black | sans-serif | `fonts.googleapis.com/css2?family=Archivo+Black` |
| sketch-notes | Caveat | cursive | `fonts.googleapis.com/css2?family=Caveat:wght@400;700` |

### System Font Fallback Stack

```css
/* Chinese */
font-family: var(--font-primary), "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", sans-serif;

/* English */
font-family: var(--font-primary), -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
```

## Type Scale

```css
:root {
    /* For 3:4 (1080×1440) — scale for other ratios */
    --text-xs: 20px;      /* Tags, labels */
    --text-sm: 24px;      /* Body small */
    --text-base: 28px;    /* Body text */
    --text-lg: 32px;      /* Subtitle */
    --text-xl: 40px;      /* Section title */
    --text-2xl: 52px;     /* Card title */
    --text-3xl: 64px;     /* Hero title */
    --text-4xl: 80px;     /* Cover title */

    --line-height-tight: 1.2;
    --line-height-normal: 1.5;
    --line-height-relaxed: 1.75;

    --font-weight-normal: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-weight-black: 900;
}
```

### Scale Factors for Other Ratios

| Ratio | Scale Factor | Example: --text-base |
|-------|-------------|----------------------|
| 3:4 (1080px wide) | 1.0 | 28px |
| 1:1 (1080px wide) | 1.0 | 28px |
| 4:3 (1440px wide) | 1.2 | 34px |
| 9:16 (1080px wide) | 1.0 | 28px |

## Text Hierarchy

### Cover Card

```
Title (text-4xl, bold, primary)
Subtitle (text-xl, normal, secondary)
Tags (text-xs, accent)
```

### Content Card

```
Section Title (text-2xl, bold, primary)
Subtitle/Lead (text-lg, medium, secondary)
Body Text (text-base, normal, primary)
Labels (text-sm, normal, tertiary)
Tags (text-xs, accent)
```

### Dense Card

```
Title (text-xl, bold, primary)
Item Number (text-2xl, bold, accent)
Item Title (text-base, medium, primary)
Item Body (text-sm, normal, secondary)
```

## Decorated Text (花字)

### Highlight (background highlight)

```css
.text-highlight {
    background: linear-gradient(180deg, transparent 55%, var(--accent-soft) 55%);
    padding: 0 4px;
    display: inline;
}
```

### Bubble (rounded background pill)

```css
.text-bubble {
    background: var(--accent);
    color: white;
    padding: 4px 16px;
    border-radius: 100px;
    display: inline-block;
}
```

### Outline (stroke text)

```css
.text-outline {
    -webkit-text-stroke: 2px var(--text-primary);
    color: transparent;
}
```

### Shadow (text with offset shadow)

```css
.text-shadow-decorated {
    text-shadow: 3px 3px 0 var(--accent-soft);
}
```

### Underline (decorative underline)

```css
.text-underline-decorated {
    text-decoration: none;
    border-bottom: 3px solid var(--accent);
    padding-bottom: 2px;
}
```

## Tags & Labels

### Pill Tag

```css
.tag-pill {
    display: inline-block;
    padding: 4px 16px;
    border-radius: 100px;
    font-size: var(--text-xs);
    background: var(--accent-bg);
    color: var(--accent);
    border: 1px solid var(--accent-soft);
}
```

### Bubble Tag

```css
.tag-bubble {
    display: inline-block;
    padding: 6px 20px;
    border-radius: 100px;
    font-size: var(--text-xs);
    background: var(--zone-1);
    color: white;
    box-shadow: 0 2px 8px var(--shadow);
}
```

### Badge Tag

```css
.tag-badge {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: var(--text-xs);
    background: var(--accent);
    color: white;
    font-weight: var(--font-weight-bold);
}
```

## Number Styles

### Rank Number

```css
.rank-number {
    font-size: var(--text-3xl);
    font-weight: var(--font-weight-black);
    color: var(--accent);
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: var(--accent-bg);
    flex-shrink: 0;
}
```

### Step Number

```css
.step-number {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: var(--accent);
    color: white;
    font-size: var(--text-lg);
    font-weight: var(--font-weight-bold);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}
```
