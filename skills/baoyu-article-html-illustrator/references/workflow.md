# Detailed Workflow Procedures

## Step 1: Pre-check & Analyze

### 1.1 Determine Input Type

| Input | Output Directory | Next |
|-------|------------------|------|
| File path | Use `default_output_dir` setting (default: `imgs-subdir`). If not configured, confirm in analysis. | → 1.3 |
| Pasted content | `illustrations/{topic-slug}/` | → 1.2 |

**Backup rule**: If `source.md` exists in target directory, rename to `source-backup-YYYYMMDD-HHMMSS.md` before saving.

### 1.2 Save Source Content (pasted input only)

1. Create output directory: `illustrations/{topic-slug}/`
2. Save pasted content to `source-{slug}.md`
3. Continue to 1.3

### 1.3 Analyze Content

Read the full article and extract:

| Analysis | Description |
|----------|-------------|
| Content type | Technical / Tutorial / Methodology / Narrative |
| Illustration purpose | information / visualization / imagination |
| Core arguments | 2-5 main points to visualize |
| Visual opportunities | Sections where illustrations add value |
| Recommended type | Based on content signals |
| Recommended density | Based on length and complexity |
| Article language | Detect from content |

### 1.4 Extract Core Arguments

- Main thesis
- Key concepts the reader needs to understand
- Comparisons and contrasts
- Frameworks or models proposed
- Data points, metrics, or statistics

**CRITICAL**: If article uses metaphors (e.g., "用大炮打蚊子"), do NOT illustrate literally. Visualize the **underlying concept** (overkill / disproportionate response).

### 1.5 Identify Illustration Positions

**Illustrate these**:
- Core arguments (REQUIRED — at least one illustration per main point)
- Abstract concepts that benefit from visual explanation
- Data comparisons and statistics
- Processes, workflows, step-by-step sequences
- Relationships between components (architecture, framework)
- Before/after or pros/cons comparisons

**Do NOT illustrate**:
- Metaphors literally
- Decorative scenes with no informational value
- Generic stock-photo style illustrations
- Sections that are already clear from text alone

---

## Step 2: Auto-Select Dimensions

Based on Step 1 analysis, recommend:

### 2.1 Type Selection

| Content Signals | Type | Reasoning |
|-----------------|------|-----------|
| Data, metrics, numbers, statistics | `infographic` | Numbers → visual cards |
| Steps, process, how-to, workflow | `flowchart` | Sequence → connected nodes |
| vs, pros/cons, alternatives, comparison | `comparison` | Contrast → side-by-side |
| Framework, model, architecture, system | `framework` | Structure → hierarchical layout |
| Timeline, history, evolution, progress | `timeline` | Chronology → event markers |
| Story, emotion, journey, experience | `scene` | Narrative → atmospheric visual |
| Mixed or no strong signal | `infographic` | Safe default |

### 2.2 Style Selection

| Content Signals | Style | Reasoning |
|-----------------|-------|-----------|
| No strong signal / general | `sketch-notes` | Warm, universal, educational |
| Knowledge, concept, productivity, SaaS | `notion` | Clean, intellectual, minimal |
| Education, learning, onboarding | `sketch-notes` | Friendly, approachable |
| Tech, AI, programming, API | `blueprint` | Technical, precise |
| Business, professional, strategy | `elegant` | Refined, sophisticated |
| Tutorial, how-to, data journalism | `editorial` | Structured, informative |
| Story, personal, lifestyle | `watercolor` | Warm, organic, emotional |
| Opinion, editorial, cultural | `screen-print` | Bold, impactful |
| Modern, clean, tech product | `vector-illustration` | Crisp, geometric, professional |
| Zen, philosophy, minimalism | `minimal` | Ultra-clean, restrained |

### 2.3 Palette Selection

| Situation | Palette |
|-----------|---------|
| Default (no override) | Use style's built-in colors |
| Educational / knowledge | `macaron` — soft pastel, warm cream |
| Brand / product / lifestyle | `warm` — earth tones, cozy |
| Gaming / retro / futuristic | `neon` — vibrant on dark |
| Professional / manifesto / editorial | `mono-ink` — black ink, sparse color |

### 2.4 Preset Recommendation

Combine the above into a preset recommendation. When no strong signal, default to `hand-drawn-edu` (infographic + sketch-notes + macaron).

Full preset table: [style-presets.md](style-presets.md)

---

## Step 3: Confirm Settings ⚠️

**Do NOT skip** unless `--yes` or equivalent is present. Use ONE AskUserQuestion call with max 4 questions.

### Q1: Preset or Type ⚠️ REQUIRED

Based on Step 2 recommendations, present options:

- [Recommended preset] — [brief: type + style + why] (Recommended)
- [Alternative preset] — [brief]
- Or choose type manually: infographic / scene / flowchart / comparison / framework / timeline / mixed

**If user picks a preset → skip Q3** (type & style both resolved).
**If user picks a type → Q3 is REQUIRED.**

### Q2: Density ⚠️ REQUIRED

- minimal (1-2) — Core concepts only
- balanced (3-5) — Major sections
- per-section — At least 1 per section/chapter (Recommended)
- rich (6+) — Comprehensive coverage

### Q3: Style ⚠️ REQUIRED (skip if preset chosen in Q1)

Present recommended and compatible styles:

- [Best compatible style] (Recommended)
- [Other compatible style 1]
- [Other compatible style 2]
- Other

### Q4: Palette (optional)

- Default (use style's built-in colors) (Recommended)
- `macaron`
- `warm`
- `neon`
- `mono-ink`

**Skip if**: preset already resolved palette.

---

## Step 4: Generate Outline

Save as `{output-dir}/outline.md`:

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

**Position**: [section] / [paragraph]
**Purpose**: [why this illustration helps the reader]
**Visual Content**: [what to show — be specific about data, labels, icons]
**Type Application**: [how the type template applies here]
**Filename**: 01-infographic-concept-name.html

## Illustration 2

**Position**: [section] / [paragraph]
**Purpose**: [why]
**Visual Content**: [what]
**Type Application**: [how]
**Filename**: 02-flowchart-process-steps.html

## Illustration 3
...
```

**Requirements**:
- Each position justified by content needs
- Type applied consistently across all illustrations
- Style reflected in descriptions
- Count matches density setting
- Filenames follow `NN-{type}-{slug}.html` pattern

---

## Step 5: Generate HTML Illustrations

### 5.1 Prepare

For each illustration in the outline:

1. **Read style spec**: `references/styles/<style>.md`
2. **Read palette spec** (if specified): `references/palettes/<palette>.md`
3. **Read type template**: [html-construction.md](html-construction.md)

### 5.2 Build HTML

For each illustration, assemble a self-contained HTML file following these layers:

```
┌─────────────────────────────┐
│   Background Layer          │  CSS gradient / solid / pattern
├─────────────────────────────┤
│   Content Layer             │  Type-specific layout (grid/flex)
│   - Title                   │
│   - Data/Labels             │
│   - Icons/SVG               │
├─────────────────────────────┤
│   Decoration Layer          │  Style-specific (borders, shapes)
├─────────────────────────────┤
│   Optional: Footer          │  Page indicator, watermark
└─────────────────────────────┘
```

### 5.3 Write Files

Write each illustration to `{output-dir}/NN-{type}-{slug}.html`.

**Backup rule**: If file exists, rename to `NN-{type}-{slug}-backup-YYYYMMDD-HHMMSS.html`.

### 5.4 Verify

After writing all files, verify:

```
HTML Illustrations Generated:
- 01-infographic-concept.html ✓ (1920×1080, sketch-notes + macaron)
- 02-flowchart-process.html ✓ (1920×1080, sketch-notes + macaron)
- ...
```

---

## Step 6: Finalize

### 6.1 Update Article

Insert references after corresponding paragraphs.

For articles that will reference exported PNGs:
```markdown
![description](imgs/NN-{type}-{slug}.png)
```

For articles that can embed HTML directly:
```markdown
<iframe src="imgs/NN-{type}-{slug}.html" width="100%" height="400" frameborder="0" style="border: none;"></iframe>
```

### 6.2 Output Summary

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
