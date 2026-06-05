# HTML Construction Guide

This document provides type-specific HTML templates and CSS patterns for building article illustrations. Each illustration is a self-contained HTML file.

## Common HTML Skeleton

Every illustration starts with this structure:

```html
<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <title>{title} - Illustration</title>
    <link href="https://fonts.googleapis.com/css2?family={font}:wght@400;700&display=swap" rel="stylesheet">
    <style>
        /* ===== Reset ===== */
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            display: flex; justify-content: center; align-items: center;
            min-height: 100vh; background: #f0f0f0;
        }

        /* ===== CSS Custom Properties (Palette) ===== */
        :root {
            --bg-primary: #F5F0E8;
            --bg-secondary: #EDE7DB;
            --text-primary: #1A1A1A;
            --text-secondary: #666666;
            --accent: #E8655A;
            --zone-1: #A8D8EA;
            --zone-2: #D5C6E0;
            --zone-3: #B5E5CF;
            --zone-4: #F8D5C4;
            --border: #1A1A1A;
            --line: #1A1A1A;
            --line-width: 2px;
            --radius: 12px;
            --font-main: '{font}', sans-serif;
        }

        /* ===== Illustration Container ===== */
        .illustration {
            width: 1920px; height: 1080px;
            position: relative; overflow: hidden;
            background: var(--bg-primary);
            font-family: var(--font-main);
            color: var(--text-primary);
            padding: 60px;
        }

        /* ===== Type-specific styles go here ===== */
    </style>
</head>
<body>
    <div class="illustration">
        <!-- Background decorations -->
        <!-- Content -->
        <!-- Foreground decorations -->
    </div>
</body>
</html>
```

---

## Dimension Reference

| Aspect Ratio | Width | Height | CSS |
|--------------|-------|--------|-----|
| 16:9 | 1920 | 1080 | `width: 1920px; height: 1080px;` |
| 4:3 | 1600 | 1200 | `width: 1600px; height: 1200px;` |
| 1:1 | 1080 | 1080 | `width: 1080px; height: 1080px;` |
| 3:2 | 1500 | 1000 | `width: 1500px; height: 1000px;` |

---

## Type Templates

### Infographic

Best for: data, metrics, statistics, concept summaries

**Layout pattern**: Grid of info cards with icons and labels

```html
<div class="illustration">
    <!-- Title -->
    <div class="title">{Title}</div>

    <!-- Subtitle / Tagline -->
    <div class="subtitle">{Subtitle}</div>

    <!-- Info Card Grid -->
    <div class="card-grid">
        <div class="info-card zone-1">
            <div class="card-icon">
                <!-- Inline SVG icon -->
                <svg>...</svg>
            </div>
            <div class="card-value">{42%}</div>
            <div class="card-label">{Metric Name}</div>
            <div class="card-desc">{Brief description}</div>
        </div>
        <div class="info-card zone-2">
            <div class="card-icon"><svg>...</svg></div>
            <div class="card-value">{128}</div>
            <div class="card-label">{Metric Name}</div>
            <div class="card-desc">{Brief description}</div>
        </div>
        <!-- More cards... -->
    </div>

    <!-- Bottom takeaway -->
    <div class="takeaway">{Key takeaway}</div>
</div>
```

**Key CSS**:

```css
.title {
    font-size: 48px; font-weight: 700;
    text-align: center; margin-bottom: 16px;
}
.subtitle {
    font-size: 24px; color: var(--text-secondary);
    text-align: center; margin-bottom: 48px;
}
.card-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 32px; margin-bottom: 40px;
}
.info-card {
    padding: 32px; border-radius: var(--radius);
    border: var(--line-width) solid var(--border);
    text-align: center;
}
.info-card.zone-1 { background: var(--zone-1); }
.info-card.zone-2 { background: var(--zone-2); }
.info-card.zone-3 { background: var(--zone-3); }
.info-card.zone-4 { background: var(--zone-4); }
.card-value {
    font-size: 56px; font-weight: 700; margin: 16px 0 8px;
}
.card-label {
    font-size: 20px; font-weight: 600; margin-bottom: 8px;
}
.card-desc {
    font-size: 16px; color: var(--text-secondary);
}
.takeaway {
    text-align: center; font-size: 22px;
    font-style: italic; color: var(--text-secondary);
    border-top: var(--line-width) solid var(--border);
    padding-top: 20px; margin-top: 20px;
}
```

---

### Flowchart

Best for: processes, workflows, step-by-step tutorials

**Layout pattern**: Connected nodes with directional arrows

```html
<div class="illustration">
    <!-- Title -->
    <div class="title">{Title}</div>

    <!-- Flow Container -->
    <div class="flow-container">
        <div class="flow-step">
            <div class="step-number">1</div>
            <div class="step-content">
                <div class="step-title">{Step Name}</div>
                <div class="step-desc">{Brief description}</div>
            </div>
        </div>

        <!-- Arrow -->
        <div class="flow-arrow">
            <svg viewBox="0 0 60 30">
                <line x1="0" y1="15" x2="45" y2="15" stroke="var(--line)" stroke-width="2"/>
                <polygon points="45,5 60,15 45,25" fill="var(--line)"/>
            </svg>
        </div>

        <div class="flow-step">
            <div class="step-number">2</div>
            <div class="step-content">
                <div class="step-title">{Step Name}</div>
                <div class="step-desc">{Brief description}</div>
            </div>
        </div>

        <!-- More steps and arrows... -->
    </div>

    <!-- Bottom note -->
    <div class="flow-note">{Additional note}</div>
</div>
```

**Key CSS**:

```css
.flow-container {
    display: flex; align-items: center; justify-content: center;
    gap: 0; flex-wrap: wrap; margin-top: 40px;
}
.flow-step {
    display: flex; align-items: center; gap: 20px;
    background: var(--zone-1); border: var(--line-width) solid var(--border);
    border-radius: var(--radius); padding: 24px 32px;
    max-width: 320px;
}
.step-number {
    font-size: 36px; font-weight: 700; color: var(--accent);
    min-width: 50px; text-align: center;
}
.step-title { font-size: 20px; font-weight: 600; }
.step-desc { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
.flow-arrow { margin: 0 8px; }
.flow-arrow svg { width: 60px; height: 30px; }
```

**Vertical flow** (for more steps or 4:3/1:1 aspect):

```css
.flow-container.vertical { flex-direction: column; }
.flow-arrow.vertical svg { transform: rotate(90deg); }
```

---

### Comparison

Best for: pros/cons, before/after, alternatives, side-by-side

**Layout pattern**: Two-column split with visual divider

```html
<div class="illustration">
    <!-- Title -->
    <div class="title">{Title}</div>

    <!-- Comparison Container -->
    <div class="comparison-container">
        <!-- Left Side -->
        <div class="compare-side left">
            <div class="compare-header">
                <div class="compare-icon"><svg>...</svg></div>
                <div class="compare-title">{Option A}</div>
            </div>
            <ul class="compare-list">
                <li class="compare-item positive">
                    <span class="bullet">✓</span> {Point 1}
                </li>
                <li class="compare-item positive">
                    <span class="bullet">✓</span> {Point 2}
                </li>
                <li class="compare-item negative">
                    <span class="bullet">✗</span> {Point 3}
                </li>
            </ul>
        </div>

        <!-- Divider -->
        <div class="compare-divider">
            <div class="divider-line"></div>
            <div class="divider-label">VS</div>
            <div class="divider-line"></div>
        </div>

        <!-- Right Side -->
        <div class="compare-side right">
            <div class="compare-header">
                <div class="compare-icon"><svg>...</svg></div>
                <div class="compare-title">{Option B}</div>
            </div>
            <ul class="compare-list">
                <li class="compare-item positive">
                    <span class="bullet">✓</span> {Point 1}
                </li>
                <li class="compare-item negative">
                    <span class="bullet">✗</span> {Point 2}
                </li>
            </ul>
        </div>
    </div>

    <!-- Bottom insight -->
    <div class="compare-insight">{Key insight or recommendation}</div>
</div>
```

**Key CSS**:

```css
.comparison-container {
    display: flex; align-items: stretch;
    gap: 0; margin-top: 32px; flex: 1;
}
.compare-side {
    flex: 1; padding: 32px;
    border-radius: var(--radius);
    border: var(--line-width) solid var(--border);
}
.compare-side.left { background: var(--zone-1); }
.compare-side.right { background: var(--zone-3); }
.compare-divider {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    padding: 0 24px; gap: 12px;
}
.divider-line {
    width: var(--line-width); height: 80px;
    background: var(--line);
}
.divider-label {
    font-size: 24px; font-weight: 700;
    color: var(--accent); background: var(--bg-primary);
    padding: 8px; border: var(--line-width) solid var(--border);
    border-radius: 50%; width: 48px; height: 48px;
    display: flex; align-items: center; justify-content: center;
}
.compare-item { list-style: none; font-size: 18px; margin-bottom: 12px; }
.compare-item.positive .bullet { color: var(--accent); }
```

---

### Framework

Best for: models, architecture diagrams, system overviews

**Layout pattern**: Central node with hierarchical or network connections

```html
<div class="illustration">
    <!-- Title -->
    <div class="title">{Title}</div>

    <!-- Framework Container -->
    <div class="framework-container">
        <!-- Central Node -->
        <div class="fw-node central">
            <div class="node-icon"><svg>...</svg></div>
            <div class="node-label">{Core Concept}</div>
        </div>

        <!-- Connection Lines (SVG) -->
        <svg class="fw-connections" viewBox="0 0 1800 800">
            <line x1="900" y1="300" x2="300" y2="600"
                  stroke="var(--line)" stroke-width="2" stroke-dasharray="8,4"/>
            <!-- More connections... -->
        </svg>

        <!-- Satellite Nodes -->
        <div class="fw-node satellite" style="left:100px; top:400px;">
            <div class="node-icon"><svg>...</svg></div>
            <div class="node-label">{Component A}</div>
            <div class="node-desc">{Role}</div>
        </div>
        <div class="fw-node satellite" style="right:100px; top:400px;">
            <div class="node-icon"><svg>...</svg></div>
            <div class="node-label">{Component B}</div>
            <div class="node-desc">{Role}</div>
        </div>
        <!-- More nodes... -->
    </div>

    <!-- Bottom note -->
    <div class="fw-note">{Summary insight}</div>
</div>
```

**Key CSS**:

```css
.framework-container { position: relative; flex: 1; }
.fw-connections {
    position: absolute; top: 0; left: 0;
    width: 100%; height: 100%; pointer-events: none;
}
.fw-node {
    position: absolute; text-align: center;
    border: var(--line-width) solid var(--border);
    border-radius: var(--radius); padding: 20px 28px;
    background: var(--zone-1);
}
.fw-node.central {
    top: 20%; left: 50%; transform: translateX(-50%);
    background: var(--zone-4); padding: 28px 40px;
    font-size: 22px; z-index: 2;
}
.node-label { font-size: 18px; font-weight: 600; margin-top: 8px; }
.node-desc { font-size: 14px; color: var(--text-secondary); margin-top: 4px; }
```

---

### Timeline

Best for: history, evolution, milestones, progress

**Layout pattern**: Horizontal/vertical event markers on a line

```html
<div class="illustration">
    <!-- Title -->
    <div class="title">{Title}</div>

    <!-- Timeline Container -->
    <div class="timeline-container">
        <!-- Main Line -->
        <div class="timeline-line"></div>

        <!-- Events -->
        <div class="timeline-event" style="left: 5%;">
            <div class="event-marker"></div>
            <div class="event-date">{2020}</div>
            <div class="event-card">
                <div class="event-title">{Milestone}</div>
                <div class="event-desc">{Description}</div>
            </div>
        </div>
        <div class="timeline-event" style="left: 30%;">
            <div class="event-marker accent"></div>
            <div class="event-date">{2022}</div>
            <div class="event-card">
                <div class="event-title">{Milestone}</div>
                <div class="event-desc">{Description}</div>
            </div>
        </div>
        <!-- More events... -->
    </div>

    <!-- Bottom note -->
    <div class="timeline-note">{Summary insight}</div>
</div>
```

**Key CSS**:

```css
.timeline-container {
    position: relative; padding: 120px 60px 60px;
}
.timeline-line {
    position: absolute; top: 50%; left: 60px; right: 60px;
    height: var(--line-width); background: var(--line);
}
.timeline-event { position: absolute; text-align: center; }
.event-marker {
    width: 20px; height: 20px; border-radius: 50%;
    background: var(--zone-1); border: var(--line-width) solid var(--border);
    margin: 0 auto 12px;
}
.event-marker.accent { background: var(--accent); }
.event-date { font-size: 16px; color: var(--text-secondary); margin-bottom: 8px; }
.event-card {
    background: var(--zone-2); border: var(--line-width) solid var(--border);
    border-radius: var(--radius); padding: 16px; max-width: 200px;
}
.event-title { font-size: 16px; font-weight: 600; }
.event-desc { font-size: 13px; color: var(--text-secondary); margin-top: 4px; }
```

**Vertical timeline** (for more events or portrait orientations):

```css
.timeline-container.vertical { flex-direction: column; padding: 60px 120px; }
.timeline-line.vertical { width: var(--line-width); height: 100%; top: 0; left: 50%; }
```

---

### Scene

Best for: narratives, emotional storytelling, atmosphere

**Layout pattern**: Full-width atmospheric illustration with layered elements

```html
<div class="illustration">
    <!-- Background Decorations (CSS gradients, shapes) -->
    <div class="scene-bg">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-gradient"></div>
    </div>

    <!-- Central Visual Element -->
    <div class="scene-visual">
        <!-- Large SVG illustration or icon composition -->
        <svg class="scene-main" viewBox="0 0 400 400">
            <!-- Illustration content -->
        </svg>
    </div>

    <!-- Text Overlay -->
    <div class="scene-text">
        <div class="scene-title">{Title}</div>
        <div class="scene-subtitle">{Atmospheric subtitle or quote}</div>
    </div>

    <!-- Atmospheric elements -->
    <div class="scene-particles">
        <!-- Small decorative SVG elements (dots, stars, etc.) -->
    </div>
</div>
```

**Key CSS**:

```css
.scene-bg { position: absolute; inset: 0; z-index: 0; }
.bg-shape {
    position: absolute; border-radius: 50%;
    filter: blur(60px); opacity: 0.3;
}
.shape-1 { width: 600px; height: 600px; background: var(--zone-1); top: -200px; right: -100px; }
.shape-2 { width: 400px; height: 400px; background: var(--zone-3); bottom: -100px; left: -50px; }
.scene-visual {
    position: relative; z-index: 1;
    display: flex; justify-content: center; align-items: center;
    flex: 1;
}
.scene-main { width: 300px; height: 300px; }
.scene-text {
    position: relative; z-index: 2;
    text-align: center; padding: 40px;
}
.scene-title { font-size: 42px; font-weight: 700; margin-bottom: 16px; }
.scene-subtitle { font-size: 22px; color: var(--text-secondary); font-style: italic; }
```

---

## SVG Icon Patterns

Use inline SVG for icons. Keep them simple and consistent:

```html
<!-- Lightbulb icon -->
<svg viewBox="0 0 24 24" width="32" height="32" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M9 21h6M12 3a6 6 0 0 0-4 10.5V17h8v-3.5A6 6 0 0 0 12 3z"/>
</svg>

<!-- Arrow icon -->
<svg viewBox="0 0 24 24" width="32" height="32" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
</svg>

<!-- Check icon -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
    <path d="M20 6L9 17l-5-5"/>
</svg>

<!-- Cross icon -->
<svg viewBox="0 0 24 24" width="24" height="24" fill="none"
     stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
</svg>

<!-- Gear icon -->
<svg viewBox="0 0 24 24" width="32" height="32" fill="none"
     stroke="currentColor" stroke-width="2" stroke-linecap="round">
    <circle cx="12" cy="12" r="3"/>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
</svg>
```

---

## Connection Arrow Patterns

For flowcharts and frameworks, use SVG arrows:

```html
<!-- Horizontal arrow -->
<svg viewBox="0 0 80 24" width="80" height="24">
    <defs>
        <marker id="arrowhead" markerWidth="10" markerHeight="7"
                refX="10" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="var(--line)"/>
        </marker>
    </defs>
    <line x1="0" y1="12" x2="60" y2="12"
          stroke="var(--line)" stroke-width="2"
          marker-end="url(#arrowhead)"/>
</svg>

<!-- Curved arrow (for framework connections) -->
<svg viewBox="0 0 200 100" width="200" height="100">
    <path d="M 10 50 C 70 10, 130 10, 190 50"
          stroke="var(--line)" stroke-width="2" fill="none"
          marker-end="url(#arrowhead)"/>
</svg>
```

---

## Style-Specific CSS Additions

### sketch-notes (Rough.js)

```html
<!-- Add before closing </body> -->
<script src="https://cdn.jsdelivr.net/npm/roughjs@4.6.6/bundled/rough.cjs.min.js"></script>
<script>
    // Apply Rough.js to borders and shapes
    const rc = rough.canvas(document.querySelector('.illustration'));
    document.querySelectorAll('.rough-border').forEach(el => {
        const rect = el.getBoundingClientRect();
        rc.rectangle(rect.left, rect.top, rect.width, rect.height, {
            stroke: getComputedStyle(el).getPropertyValue('--border').trim(),
            strokeWidth: 2, roughness: 1.5, bowing: 1
        });
    });
</script>
```

### blueprint (Grid Lines)

```css
.illustration.blueprint {
    background-image:
        linear-gradient(rgba(0,100,200,0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,100,200,0.1) 1px, transparent 1px);
    background-size: 40px 40px;
    font-family: 'Courier New', monospace;
}
```

### screen-print (Halftone)

```css
.illustration.screen-print::before {
    content: '';
    position: absolute; inset: 0; z-index: 0;
    background-image: radial-gradient(circle, var(--text-primary) 1px, transparent 1px);
    background-size: 8px 8px; opacity: 0.05;
}
```

---

## Text Guidelines

Since HTML illustrations use real text (not rasterized), leverage this:

1. **Use actual data**: Real numbers, terms, and labels from the article
2. **Keep text large**: Minimum 16px for body, 40px+ for titles
3. **Use semantic color**: Red for warnings, green for positive, accent for highlights
4. **Limit text per illustration**: 5-10 short labels maximum — illustrations should be visual, not text-heavy
5. **Font selection per style**:
   - `sketch-notes`: `'Caveat', 'Comic Neue', cursive`
   - `notion`: `'Inter', -apple-system, sans-serif`
   - `blueprint`: `'JetBrains Mono', 'Courier New', monospace`
   - `elegant`: `'Playfair Display', Georgia, serif`
   - `editorial`: `'Merriweather', Georgia, serif`
   - `minimal`: `'Inter', -apple-system, sans-serif`
   - `vector-illustration`: `'Nunito', -apple-system, sans-serif`
   - `watercolor`: `'Caveat', 'Comic Neue', cursive`
   - `screen-print`: `'Oswald', 'Impact', sans-serif`
