---
name: study-notes
category: style-preset
---

# Study Notes Style

Realistic handwritten photo style — blue pen, red annotations, yellow highlighter on lined paper.

## Element Combination

```yaml
canvas:
  ratio: portrait-3-4
  background: lined-paper

typography:
  decorated: highlight-pen
  tags: margin-note
  font: Ma Shan Zheng
  direction: horizontal

decorations:
  shapes: hand-drawn-box, underline-pen
  emphasis: red-circle, yellow-highlight
  background: lined-paper-texture
  frames: notebook-margin
  doodles: pen-marks, margin-doodles, corrections
```

## Default Color Palette

```css
:root {
    --bg-primary: #FEFEFE;         /* White paper */
    --bg-secondary: #F8F8F0;       /* Slightly warm white */
    --bg-card: #FFFFFF;            /* Pure white */
    --bg-accent: #FFFDE7;          /* Yellow tint */
    --text-primary: #1A237E;       /* Blue ink */
    --text-secondary: #283593;     /* Medium blue */
    --text-tertiary: #7986CB;      /* Light blue */
    --zone-1: #E3F2FD;             /* Light blue block */
    --zone-2: #FFEBEE;             /* Light red block */
    --zone-3: #FFFDE7;             /* Light yellow block */
    --zone-4: #F3E5F5;             /* Light purple block */
    --accent: #D32F2F;             /* Red pen */
    --accent-soft: #EF9A9A;        /* Soft red */
    --accent-bg: rgba(211, 47, 47, 0.08);
    --border: #BDBDBD;             /* Gray border */
    --border-light: #E0E0E0;       /* Light gray */
    --shadow: rgba(0, 0, 0, 0.04);
    --shadow-strong: rgba(0, 0, 0, 0.08);
    --line-color: #B0BEC5;         /* Lined paper lines */
    --highlight-yellow: rgba(255, 235, 59, 0.35);
    --highlight-green: rgba(129, 199, 132, 0.3);
}
```

## CSS Rendering Rules

```css
/* Base card — lined paper */
.card {
    font-family: 'Ma Shan Zheng', cursive;
    background: var(--bg-primary);
    background-image:
        repeating-linear-gradient(
            transparent,
            transparent 31px,
            var(--line-color) 31px,
            var(--line-color) 32px
        );
    background-position: 0 60px; /* Offset for header */
}

/* Red margin line */
.card::before {
    content: '';
    position: absolute;
    left: 100px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(211, 47, 47, 0.3);
    z-index: var(--z-decoration);
}

/* Title styling */
.card-title {
    color: var(--text-primary);
    font-size: var(--text-2xl);
}

/* Yellow highlighter effect */
.highlight-yellow {
    background: var(--highlight-yellow);
    padding: 0 4px;
    display: inline;
    border-radius: 2px;
}

/* Green highlighter effect */
.highlight-green {
    background: var(--highlight-green);
    padding: 0 4px;
    display: inline;
    border-radius: 2px;
}

/* Red annotation underline */
.annotation-red {
    border-bottom: 2px solid var(--accent);
    position: relative;
}

.annotation-red::after {
    content: '★';
    position: absolute;
    right: -20px;
    top: -4px;
    color: var(--accent);
    font-size: 14px;
}

/* Content blocks */
.content-block {
    background: var(--bg-card);
    border: 1.5px solid var(--border);
    border-radius: 0;
    padding: 20px;
}

/* Tags — margin note style */
.tag {
    background: var(--accent-bg);
    color: var(--accent);
    border-left: 3px solid var(--accent);
    padding: 2px 8px 2px 10px;
    font-size: var(--text-xs);
    font-family: 'Ma Shan Zheng', cursive;
}
```

## Visual Elements

- **Shapes**: Hand-drawn boxes with slightly irregular borders
- **Accents**: Yellow highlighter marks, red pen circles
- **Background**: Lined paper with red margin line
- **Borders**: Thin, pen-like
- **Shadows**: None (flat paper aesthetic)
- **Icons**: Hand-drawn pen style (arrows, checkmarks, stars)

## Best Layout Pairings

| Layout | Compatibility | Use Case |
|--------|---------------|----------|
| sparse | ✗ | Not recommended |
| balanced | ✓ | Study summaries |
| dense | ✓✓ | Dense study notes |
| list | ✓✓ | Study checklists |
| comparison | ✓ | Compare concepts |
| flow | ✓ | Process notes |
| mindmap | ✓✓ | Brainstorming notes |

## Best For

- Study notes and summaries
- Exam preparation
- Learning guides
- Knowledge organization
- Academic content
