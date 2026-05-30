---
name: baoyu-html-cover
description: Generates article cover images using pure HTML/CSS/JS — no AI image backend required. Produces standalone HTML files with pixel-perfect typography, CSS gradients, SVG decorations, and optional Rough.js hand-drawn effects. Supports 16:9, 9:16, 1:1, 2.35:1, 3:2, 4:3 aspects. Use when user asks to "generate HTML cover", "create cover with HTML", "make cover", "HTML封面", "用HTML做封面", or when no raster image backend is available but the user still needs a cover image. Also use when the user specifically wants editable, code-based covers rather than AI-generated bitmaps.
---

# HTML Cover Image Generator

Generate elegant cover images as standalone HTML files — pixel-perfect typography, CSS-driven visuals, zero AI dependency.

This skill outputs a **self-contained HTML file** that renders a cover image in the browser. The file can be:
- Opened directly in a browser for preview
- Screenshot/exported to PNG (see [references/export.md](references/export.md))
- Edited in any code editor for quick iteration
- Embedded in articles, social media, or documentation

## User Input Tools

When this skill prompts the user, follow this tool-selection rule (priority order):

1. **Prefer built-in user-input tools** exposed by the current agent runtime — e.g., `AskUserQuestion`, `request_user_input`, `clarify`, `ask_user`, or any equivalent.
2. **Fallback**: if no such tool exists, emit a numbered plain-text message and ask the user to reply with the chosen number/answer for each question.
3. **Batching**: if the tool supports multiple questions per call, combine all applicable questions into a single call.

## Options

| Option | Description |
|--------|-------------|
| `--type <name>` | hero, conceptual, typography, metaphor, scene, minimal |
| `--palette <name>` | warm, cool, dark, elegant, earth, vivid, pastel, mono, retro, duotone, macaron, neon |
| `--style <name>` | flat, glassmorphism, gradient, hand-drawn, geometric, brutalist, cyber |
| `--text <level>` | none, title-only, title-subtitle, text-rich |
| `--font <name>` | clean, handwritten, serif, display, mono |
| `--aspect <ratio>` | 16:9 (default), 9:16, 1:1, 2.35:1, 3:2, 4:3 |
| `--lang <code>` | Title language (en, zh, ja, etc.) |
| `--no-title` | Alias for `--text none` |
| `--quick` | Skip confirmation, use auto-selection |
| `--ref <files...>` | Reference images for style/composition guidance |

## Six Dimensions

| Dimension | Values | Default |
|-----------|--------|---------|
| **Type** | hero, conceptual, typography, metaphor, scene, minimal | auto |
| **Palette** | warm, cool, dark, elegant, earth, vivid, pastel, mono, retro, duotone, macaron, neon | auto |
| **Style** | flat, glassmorphism, gradient, hand-drawn, geometric, brutalist, cyber | auto |
| **Text** | none, title-only, title-subtitle, text-rich | title-only |
| **Font** | clean, handwritten, serif, display, mono | clean |
| **Aspect** | 16:9, 9:16, 1:1, 2.35:1, 3:2, 4:3 | 16:9 |

Auto-selection rules follow the same logic as the raster cover skill — palette, type, and style are inferred from content tone and keywords. When in doubt, ask.

## File Structure

Output directory: `cover-html/{topic-slug}/`

```
<output-dir>/
├── cover.html          # Main output — standalone HTML file
├── source-{slug}.md    # Source content (if pasted)
└── cover.png           # Exported PNG (if export requested)
```

**Slug**: 2-4 words, kebab-case.

## Workflow

### Progress Checklist

```
HTML Cover Progress:
- [ ] Step 1: Analyze content + determine dimensions
- [ ] Step 2: Confirm options (6 dimensions) — skip if --quick
- [ ] Step 3: Generate HTML file
- [ ] Step 4: Preview in browser + export if needed
- [ ] Step 5: Completion report
```

### Step 1: Analyze Content

1. **Read source**: Accept article text, URL, file path, or topic description.
2. **Save source content** (if pasted, save to `source-{slug}.md`).
3. **Analyze**: Extract topic, tone, keywords, visual metaphors.
4. **Detect language**: From source content and user input.
5. **Determine output directory**: Per File Structure rules.
6. **Auto-select dimensions** not specified by user flags.

### Step 2: Confirm Options

**MUST use `AskUserQuestion` tool** (or runtime equivalent) to present options as interactive selection. Present up to 4 questions in a single call.

| Condition | Skipped | Still Asked |
|-----------|---------|-------------|
| `--quick` | 6 dimensions | Aspect ratio (unless `--aspect`) |
| All 6 + `--aspect` specified | All | None |

For each dimension, show the recommended option first with a brief reason, then alternatives.

### Step 3: Generate HTML File

This is the core step. Write a **self-contained HTML file** following these principles:

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="{lang}">
<head>
    <meta charset="UTF-8">
    <title>{title} - Cover</title>
    <style>
        /* All CSS inline — no external dependencies */
        /* Use CSS custom properties for palette */
    </style>
</head>
<body>
    <div class="cover">
        <!-- Background layer -->
        <!-- Decoration layer (SVG/CSS shapes) -->
        <!-- Text layer (title, subtitle) -->
    </div>
</body>
</html>
```

#### Key Rules

1. **Self-contained**: All CSS, JS, and fonts inline. No external CDN except Google Fonts `<link>` (user may be offline — include a system-font fallback stack).

2. **Fixed dimensions**: Use exact pixel dimensions for the chosen aspect ratio:
   - 16:9 → 1920×1080
   - 9:16 → 1080×1920
   - 1:1 → 1080×1080
   - 2.35:1 → 2350×1000
   - 3:2 → 1500×1000
   - 4:3 → 1600×1200

3. **CSS Custom Properties** for palette — makes it trivial to swap colors:

```css
:root {
    --bg-primary: #...;
    --bg-secondary: #...;
    --text-primary: #...;
    --text-secondary: #...;
    --accent: #...;
    --accent-glow: #...;
}
```

4. **Typography**: Use Google Fonts with system fallback. Load via `<link>` tag. See [references/fonts.md](references/fonts.md) for font-to-style mapping.

5. **Decorations**: Use one of:
   - **CSS shapes** (gradient, border-radius, clip-path) — default, works everywhere
   - **Inline SVG** — for complex illustrations and icons
   - **Rough.js via CDN** — only when `--style hand-drawn`, loads from jsdelivr
   - **Canvas 2D** — only when Rough.js or complex drawing is needed

6. **Composition** (follow the type-specific guidance in [references/templates.md](references/templates.md)):
   - **Whitespace**: 40-60% breathing room
   - **Visual anchor**: Main element centered or offset per template
   - **Text hierarchy**: Title → Subtitle → Tags, clear size contrast
   - **No realistic humans**: Use icons, silhouettes, abstract shapes

7. **Retina support**: For Canvas-based rendering, use 2× canvas size and CSS `width`/`height` at 1× for sharp rendering.

#### Palette Application

Read the palette definition from [references/palettes.md](references/palettes.md) and apply it as CSS custom properties. Each palette defines:
- Background gradient (direction + 2-3 color stops)
- Text colors (primary, secondary)
- Accent color (for highlights, decorations)
- Muted/dim color (for subtle elements)

#### Style Application

Read the style definition from [references/styles.md](references/styles.md) and apply it to decorations and layout:
- **flat**: Solid fills, no shadows, clean edges
- **glassmorphism**: Backdrop-blur, semi-transparent cards, subtle borders
- **gradient**: Rich gradient fills on shapes and text
- **hand-drawn**: Rough.js rendering with hand-drawn wobble
- **geometric**: Circles, triangles, hexagons, grid-based layout
- **brutalist**: Raw typography, thick borders, high contrast, asymmetric
- **cyber**: Neon glow, scan lines, circuit patterns, dark background

### Step 4: Preview & Export

1. **Save** the HTML file to the output directory.
2. **Open in browser** for preview — use the `run` skill or tell the user the file path.
3. **Export to PNG** (if requested) — see [references/export.md](references/export.md) for methods:
   - Browser screenshot (manual)
   - Puppeteer/Playwright automated capture
   - html2canvas library (client-side)

### Step 5: Completion Report

```
HTML Cover Generated!

Topic: [topic]
Type: [type] | Palette: [palette] | Style: [style]
Text: [text] | Font: [font] | Aspect: [ratio]
Title: [title]
Language: [lang]
Location: [file path]

Files:
✓ cover.html
✓ source-{slug}.md (if saved)
```

## Modifying Generated Covers

One of the key advantages of HTML covers is easy modification:

| Action | How |
|--------|-----|
| **Change palette** | Edit `:root` CSS variables |
| **Change title** | Edit the `.title` text content |
| **Adjust layout** | Modify CSS flexbox/grid properties |
| **Swap font** | Change Google Fonts link + CSS font-family |
| **Tweak decoration** | Edit SVG or CSS shape properties |

For regeneration, update the source and re-run the skill with the same or new options.

## Composition Principles

- **Whitespace**: 40-60% breathing room — the most common mistake is overfilling.
- **Visual anchor**: One dominant element (shape, icon, or text block) that draws the eye.
- **Simplified imagery**: Icons, abstract shapes, geometric patterns — no photorealism.
- **Title integrity**: Use the exact title from user/source; never invent or paraphrase.
- **Color restraint**: Dominant palette color + 1-2 accents. Avoid rainbow effects.

## References

**Palettes**: [references/palettes.md](references/palettes.md)
**Styles**: [references/styles.md](references/styles.md)
**Templates**: [references/templates.md](references/templates.md)
**Fonts**: [references/fonts.md](references/fonts.md)
**Visual Elements**: [references/visual-elements.md](references/visual-elements.md)
**Layout System**: [references/layout.md](references/layout.md)
**Export**: [references/export.md](references/export.md)
