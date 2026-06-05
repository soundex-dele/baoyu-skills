---
name: baoyu-article-html-illustrator
description: Analyzes article structure, identifies positions needing visual aids, and generates HTML/CSS illustrations — no AI image backend required. Produces standalone HTML files with SVG decorations, CSS gradients, and optional Rough.js hand-drawn effects. Supports 6 illustration types × multiple visual styles × 4 color palettes. Use when user asks to "为文章配HTML图", "HTML配图", "用HTML给文章插图", "article HTML illustration", "add HTML illustrations", or when no raster image backend is available but the user still needs article illustrations. Also use when the user specifically wants editable, code-based illustrations rather than AI-generated bitmaps.
version: 1.0.0
metadata:
  openclaw:
    homepage: https://github.com/JimLiu/baoyu-skills#baoyu-article-html-illustrator
---

# Article HTML Illustrator

Analyze articles, identify illustration positions, generate HTML/CSS illustrations with Type × Style × Palette consistency — pure code, fully editable, zero AI image dependency.

This skill outputs **self-contained HTML files** that render article illustrations in the browser. Each illustration is a standalone HTML file that can be:

- Opened directly in a browser for preview
- Screenshot/exported to PNG (see [references/export.md](references/export.md))
- Edited in any code editor for quick iteration
- Embedded in articles via `<img>` (after export) or `<iframe>`

## User Input Tools

When this skill prompts the user, follow this tool-selection rule (priority order):

1. **Prefer built-in user-input tools** exposed by the current agent runtime — e.g., `AskUserQuestion`, `request_user_input`, `clarify`, `ask_user`, or any equivalent.
2. **Fallback**: if no such tool exists, emit a numbered plain-text message and ask the user to reply with the chosen number/answer for each question.
3. **Batching**: if the tool supports multiple questions per call, combine all applicable questions into a single call; if only single-question, ask them one at a time in priority order.

Concrete `AskUserQuestion` references below are examples — substitute the local equivalent in other runtimes.

## Language

Respond in the user's language across questions, progress, errors, and completion summary. Keep technical tokens (style names, file paths, code) in English.

## Why HTML Illustrations?

HTML illustrations are uniquely suited for articles because:

- **Pixel-perfect text**: Unlike AI-generated images, text in HTML is crisp at any zoom level and never garbled
- **Instantly editable**: Fix a label or color by editing the HTML — no regeneration needed
- **Consistent style**: CSS custom properties ensure visual consistency across all illustrations
- **Lightweight**: A few KB of HTML vs. hundreds of KB of raster images
- **Accessible**: Text in HTML is selectable, searchable, and screen-reader friendly

## Options

| Option | Description |
|--------|-------------|
| `--type <name>` | Illustration type: infographic, scene, flowchart, comparison, framework, timeline |
| `--style <name>` | Visual style (see Styles below) |
| `--palette <name>` | Color override: macaron / warm / neon / mono-ink |
| `--preset <name>` | Type + style + optional palette shorthand |
| `--density <level>` | minimal (1-2), balanced (3-5), per-section (default), rich (6+) |
| `--aspect <ratio>` | 16:9 (default), 4:3, 1:1, 3:2 |
| `--yes` | Non-interactive: skip all confirmations, use defaults |
| `--ref <files...>` | Reference images for style/composition guidance |

## Three Dimensions

| Dimension | Controls | Examples |
|-----------|----------|----------|
| **Type** | Information structure | infographic, scene, flowchart, comparison, framework, timeline |
| **Style** | Visual rendering approach | notion, sketch-notes, vector-illustration, blueprint, minimal, elegant, editorial, watercolor, screen-print |
| **Palette** (optional) | Color scheme override | macaron, warm, neon, mono-ink |

Combine freely: `--type infographic --style notion --palette macaron`

Or use presets: `--preset hand-drawn-edu` → type + style + palette in one flag. See [references/style-presets.md](references/style-presets.md).

## Types

| Type | Best For | HTML Structure |
|------|----------|----------------|
| `infographic` | Data, metrics, technical concepts | Grid of info cards with icons and labels |
| `scene` | Narratives, emotional storytelling | Full-width illustration with layered elements |
| `flowchart` | Processes, workflows, step-by-step | Connected nodes with directional arrows |
| `comparison` | Side-by-side, pros/cons, before/after | Two-column split with visual divider |
| `framework` | Models, architecture, system diagrams | Hierarchical/network layout with nodes |
| `timeline` | History, evolution, milestones | Horizontal/vertical event markers |

## Styles

| Style | Description | CSS Approach |
|-------|-------------|--------------|
| `vector-illustration` | Clean flat vector art with bold shapes | Solid fills, black outlines, geometric icons, no gradients |
| `notion` | Minimalist hand-drawn line art | Monochrome lines, simple SVG icons, clean grid |
| `sketch-notes` | Hand-drawn educational infographic | Rough.js wobble borders, pastel fills on cream background |
| `blueprint` | Technical schematics | Grid lines, monospace fonts, blue/white color scheme |
| `minimal` | Ultra-clean, zen-like | Maximum whitespace, thin lines, restrained color |
| `elegant` | Refined, sophisticated | Serif fonts, subtle gradients, balanced composition |
| `editorial` | Magazine-style infographic | Bold typography, structured sections, editorial layout |
| `watercolor` | Soft artistic with natural warmth | CSS gradient blobs, soft borders, organic shapes |
| `screen-print` | Bold poster art, limited colors | High contrast, flat shapes, halftone CSS patterns |

Per-style specifications: `references/styles/<style>.md`

## Palettes (optional override)

Replaces the style's default colors while keeping rendering rules intact.

| Palette | Background | Zone Colors | Accent | Feel |
|---------|------------|-------------|--------|------|
| `macaron` | Warm cream #F5F0E8 | Blue #A8D8EA, Lavender #D5C6E0, Mint #B5E5CF, Peach #F8D5C4 | Coral #E8655A | Soft, educational |
| `warm` | Soft peach #FFECD2 | Orange #ED8936, Terracotta #C05621, Golden #F6AD55, Rose #D4A09A | Sienna #A0522D | Earth tones, cozy |
| `neon` | Dark purple #1A1025 | Cyan #00F5FF, Magenta #FF00FF, Green #39FF14, Pink #FF6EC7 | Yellow #FFFF00 | High-energy, futuristic |
| `mono-ink` | Pure white #FFFFFF | Near Black #1A1A1A, Coral Red #E8655A (emphasis), Muted Teal #5FA8A8 (positive) | Dusty Lavender #9B8AB5 | Professional, editorial |

Palette specs: `references/palettes/<palette>.md`

When no palette is specified, the style's built-in colors are used.

## Confirmation Policy

Default behavior: **confirm before generation**.

- Treat explicit skill invocation, a file path, matched signals/presets as **recommendation inputs only**. None of them authorizes skipping confirmation.
- Do **not** start Step 4 or later until the user completes Step 3.
- Skip confirmation only when the current request explicitly says to do so, for example: `--yes`, "直接生成", "不用确认", "跳过确认", "按默认出图", or equivalent wording.
- If confirmation is skipped, state the assumed type / density / style / palette in the next user-facing update before generating.

## Output Directory

Output directory is determined by `default_output_dir` in EXTEND.md (set during first-time setup):

| `default_output_dir` | Output Path | Markdown Insert Path |
|----------------------|-------------|----------------------|
| `imgs-subdir` (default) | `{article-dir}/imgs/` | `imgs/NN-{type}-{slug}.html` |
| `same-dir` | `{article-dir}/` | `NN-{type}-{slug}.html` |
| `illustrations-subdir` | `{article-dir}/illustrations/` | `illustrations/NN-{type}-{slug}.html` |
| `independent` | `illustrations/{topic-slug}/` | `illustrations/{topic-slug}/NN-{type}-{slug}.html` (relative to cwd) |

All auxiliary files (outline) are saved inside the output directory:

```
{output-dir}/
├── outline.md
└── NN-{type}-{slug}.html      # Standalone HTML illustration files
```

When input is **pasted content** (no file path), always uses `illustrations/{topic-slug}/` with `source-{slug}.{ext}` saved alongside.

**Slug**: 2-4 words, kebab-case. **Conflict**: append `-YYYYMMDD-HHMMSS`.

**Backup rule**: before overwriting any file, rename the existing one to `<name>-backup-YYYYMMDD-HHMMSS.<ext>`.

## Workflow

```
- [ ] Step 1: Analyze content + determine dimensions
- [ ] Step 2: Auto-select Type × Style × Palette
- [ ] Step 3: Confirm settings (AskUserQuestion) — skip if --yes
- [ ] Step 4: Generate outline
- [ ] Step 5: Generate HTML illustrations
- [ ] Step 6: Finalize
```

### Step 1: Analyze

1. **Read source**: Accept article text, URL, file path, or pasted content.
2. **Save source** (if pasted, save to `source-{slug}.md`).
3. **Analyze**:

| Analysis | Output |
|----------|--------|
| Content type | Technical / Tutorial / Methodology / Narrative |
| Illustration purpose | information / visualization / imagination |
| Core arguments | 2-5 main points to visualize |
| Visual opportunities | Positions where illustrations add value |

**CRITICAL**: If article uses metaphors (e.g., "电锯切西瓜"), do NOT illustrate literally. Visualize the **underlying concept**.

### Step 2: Auto-Select

Based on content analysis, recommend Type × Style × Palette:

| Content Signals | Type | Style | Preset |
|-----------------|------|-------|--------|
| No strong signal / general | infographic | sketch-notes | `hand-drawn-edu` |
| Knowledge, concept, tutorial | infographic | sketch-notes / notion | `hand-drawn-edu` / `knowledge-base` |
| How-to, steps, process | flowchart | sketch-notes / notion | `hand-drawn-edu-flow` / `process-flow` |
| API, metrics, data | infographic | blueprint / editorial | `tech-explainer` |
| Framework, architecture | framework | blueprint / notion | `system-design` |
| vs, pros/cons, before/after | comparison | vector-illustration / notion | `versus` |
| Story, emotion, journey | scene | watercolor / elegant | `storytelling` |
| History, evolution | timeline | elegant / editorial | `history` |
| Opinion, editorial | scene | screen-print | `opinion-piece` |

Full preset table: [references/style-presets.md](references/style-presets.md)

### Step 3: Confirm Settings ⚠️

**Hard gate**: this step is mandatory per the [Confirmation Policy](#confirmation-policy).

**ONE AskUserQuestion, max 4 Qs. Q1-Q2 REQUIRED. Q3 required unless preset chosen.**

| Q | Options |
|---|---------|
| **Q1: Preset or Type** | [Recommended preset], [alt preset], or manual: infographic, scene, flowchart, comparison, framework, timeline, mixed |
| **Q2: Density** | minimal (1-2), balanced (3-5), per-section (Recommended), rich (6+) |
| **Q3: Style** | [Recommended], [alt 1], [alt 2], Other — **skip if preset chosen** |
| Q4: Palette | Default (style colors), macaron, warm, neon, mono-ink — **skip if preset includes palette** |

**Default preset**: when no strong content signal is detected, recommend `hand-drawn-edu` (infographic + sketch-notes + macaron).

### Step 4: Generate Outline

Save `outline.md` with frontmatter and entries:

```yaml
---
type: infographic
density: balanced
style: sketch-notes
palette: macaron
aspect: "16:9"
illustration_count: 4
---

## Illustration 1

**Position**: [section/paragraph]
**Purpose**: [why this helps]
**Visual Content**: [what to show]
**Type Application**: [how the type applies here]
**Filename**: 01-infographic-concept-name.html

## Illustration 2
...
```

### Step 5: Generate HTML Illustrations

For each illustration in the outline:

1. **Read style spec**: `references/styles/<style>.md` for CSS rendering rules
2. **Read palette spec** (if specified): `references/palettes/<palette>.md` for colors
3. **Follow type-specific HTML template**: [references/html-construction.md](references/html-construction.md)
4. **Write HTML file**: `{output-dir}/NN-{type}-{slug}.html`

Each HTML file is **self-contained** — all CSS, JS, and fonts inline:

```html
<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <title>{title} - Illustration</title>
    <style>
        /* Reset + CSS Custom Properties (palette) */
        /* Layout Grid */
        /* Typography */
        /* Type-specific styles */
        /* Style-specific decorations */
    </style>
</head>
<body>
    <div class="illustration" style="width:{w}px; height:{h}px;">
        <!-- Background layer: gradient/pattern -->
        <!-- Content layer: title, data, labels, icons -->
        <!-- Decoration layer: shapes, arrows, borders -->
    </div>
</body>
</html>
```

**Key Rules**:

1. **Self-contained**: All CSS inline. No external dependencies except:
   - Google Fonts `<link>` (with system-font fallback)
   - Rough.js CDN `<script>` (only for `sketch-notes` style)

2. **Fixed dimensions**: Use exact pixel dimensions for the chosen aspect ratio:
   - 16:9 → 1920×1080
   - 4:3 → 1600×1200
   - 1:1 → 1080×1080
   - 3:2 → 1500×1000

3. **CSS Custom Properties** for palette — makes it trivial to swap colors:

```css
:root {
    --bg-primary: #...;
    --bg-secondary: #...;
    --text-primary: #...;
    --text-secondary: #...;
    --accent: #...;
    --zone-1: #...;
    --zone-2: #...;
    --zone-3: #...;
    --zone-4: #...;
    --border: #...;
    --line: #...;
}
```

4. **Typography**: Google Fonts with system fallback. Handwritten fonts for warm styles, monospace for technical.

5. **Decorations**: CSS-only by default:
   - **CSS shapes**: `border-radius`, `clip-path`, `background` gradients
   - **Inline SVG**: For icons, arrows, complex shapes
   - **Rough.js**: Only for `sketch-notes` style
   - **CSS animations**: Optional subtle entrance effects

6. **Text-first rendering**: Unlike raster images, HTML illustrations can use real text — leverage this:
   - Actual article data, numbers, terms as visible text
   - Crisp, selectable, searchable labels
   - Semantic color coding with CSS

7. **Visual consistency**: All illustrations in one article MUST share:
   - Same CSS custom properties (palette colors)
   - Same font families and size scale
   - Same border radius, shadow, and spacing tokens

**Batch generation**: Generate all HTML files in a single pass. Since HTML files are code, not raster renders, there is no backend bottleneck — write them all at once.

### Step 6: Finalize

1. **Insert references into the article**: Add markdown image references or HTML `<img>` tags after corresponding paragraphs.

For articles that will reference exported PNGs:
```markdown
![description](imgs/NN-{type}-{slug}.png)
```

For articles that can embed HTML directly:
```markdown
<iframe src="imgs/NN-{type}-{slug}.html" width="100%" height="auto" frameborder="0"></iframe>
```

2. **Output summary**:

```
Article HTML Illustration Complete!

Article: [path]
Type: [type] | Density: [level] | Style: [style] | Palette: [palette or default]
Location: [directory]
Illustrations: X/N generated

Files:
- 01-infographic-concept.html → After "[Section]"
- 02-flowchart-process.html → After "[Section]"
- ...

To preview: open [directory]/01-infographic-concept.html in browser
To export PNG: see references/export.md
```

## Modification

One of the key advantages of HTML illustrations is easy modification:

| Action | How |
|--------|-----|
| **Change palette** | Edit `:root` CSS variables in each file |
| **Fix a label** | Edit the HTML text content directly |
| **Adjust layout** | Modify CSS flexbox/grid properties |
| **Swap font** | Change Google Fonts link + CSS font-family |
| **Tweak decoration** | Edit CSS or inline SVG |

## Composition Principles

- **Whitespace**: 30-50% breathing room — avoid visual clutter
- **Visual anchor**: One dominant element per illustration
- **Simplified imagery**: Icons, abstract shapes, SVG patterns — no photorealism
- **Text clarity**: Large, readable text — leverage HTML's crisp rendering
- **Color restraint**: Dominant palette color + 1-2 accents
- **Series consistency**: Same palette, fonts, and spacing across all illustrations

## References

| File | Content |
|------|---------|
| [references/workflow.md](references/workflow.md) | Detailed workflow procedures |
| [references/html-construction.md](references/html-construction.md) | Type-specific HTML templates & CSS patterns |
| [references/styles.md](references/styles.md) | Style gallery + Type × Style compatibility |
| [references/style-presets.md](references/style-presets.md) | Preset shortcuts (type + style + palette) |
| [references/palettes/](references/palettes/) | Per-palette CSS specifications |
| [references/styles/](references/styles/) | Per-style CSS rendering rules |
| [references/export.md](references/export.md) | PNG export methods |
