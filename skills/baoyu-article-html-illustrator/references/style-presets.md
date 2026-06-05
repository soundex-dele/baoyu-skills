# Style Presets

`--preset X` expands to a type + style + optional palette combination. Users can override any dimension.

## Default Preset

When content analysis surfaces no strong signal, recommend **`hand-drawn-edu`** as the primary option. It is the warm, friendly educational-infographic default — safe for most articles.

## By Category

### Technical & Engineering

| --preset | Type | Style | Palette | Best For |
|----------|------|-------|---------|----------|
| `tech-explainer` | `infographic` | `blueprint` | — | API docs, system metrics, technical deep-dives |
| `system-design` | `framework` | `blueprint` | — | Architecture diagrams, system design |
| `architecture` | `framework` | `notion` | — | Component relationships, module structure |

### Knowledge & Education

| --preset | Type | Style | Palette | Best For |
|----------|------|-------|---------|----------|
| `knowledge-base` | `infographic` | `notion` | — | Concept explainers, tutorials, how-to |
| `process-flow` | `flowchart` | `notion` | — | Workflow documentation, onboarding flows |
| `tutorial` | `flowchart` | `sketch-notes` | — | Step-by-step tutorials, setup guides |
| `hand-drawn-edu` | `infographic` | `sketch-notes` | `macaron` | **Default preset.** Hand-drawn educational infographic |
| `hand-drawn-edu-flow` | `flowchart` | `sketch-notes` | `macaron` | Hand-drawn process explainer |
| `hand-drawn-edu-compare` | `comparison` | `sketch-notes` | `macaron` | Hand-drawn side-by-side comparison |

### Data & Analysis

| --preset | Type | Style | Palette | Best For |
|----------|------|-------|---------|----------|
| `data-report` | `infographic` | `editorial` | — | Data journalism, metrics reports |
| `versus` | `comparison` | `vector-illustration` | — | Tech comparisons, framework shootouts |
| `business-compare` | `comparison` | `elegant` | — | Product evaluations, strategy options |

### Narrative & Creative

| --preset | Type | Style | Palette | Best For |
|----------|------|-------|---------|----------|
| `storytelling` | `scene` | `watercolor` | — | Personal essays, reflections, growth stories |
| `history` | `timeline` | `elegant` | — | Historical overviews, milestones |
| `evolution` | `timeline` | `editorial` | — | Progress narratives, technology evolution |

### Editorial & Opinion

| --preset | Type | Style | Palette | Best For |
|----------|------|-------|---------|----------|
| `opinion-piece` | `scene` | `screen-print` | — | Op-eds, commentary, critical essays |
| `cinematic` | `scene` | `screen-print` | — | Dramatic narratives, cultural essays |
| `ink-notes-compare` | `comparison` | `notion` | `mono-ink` | Before/After, manifestos, professional visual notes |

## Content Type → Preset Recommendations

| Content Type | Primary Preset | Alternatives |
|--------------|----------------|--------------|
| **General / No strong signal** | `hand-drawn-edu` | `knowledge-base` |
| Education / Knowledge | `hand-drawn-edu` | `knowledge-base`, `tutorial` |
| Tutorial | `hand-drawn-edu-flow` | `tutorial`, `process-flow` |
| SaaS / Product | `knowledge-base` | `process-flow`, `hand-drawn-edu` |
| Technical | `tech-explainer` | `system-design`, `architecture` |
| Methodology / Framework | `system-design` | `architecture` |
| Data / Metrics | `data-report` | `versus`, `tech-explainer` |
| Comparison / Review | `versus` | `business-compare`, `hand-drawn-edu-compare` |
| Manifesto / Professional | `ink-notes-compare` | `system-design` |
| Narrative / Personal | `storytelling` | `evolution` |
| Opinion / Editorial | `opinion-piece` | `cinematic` |
| Historical / Timeline | `history` | `evolution` |

## Override Examples

- `--preset tech-explainer --style notion` = infographic type with notion style
- `--preset storytelling --type timeline` = timeline type with watercolor style
- `--preset hand-drawn-edu --palette neon` = infographic + sketch-notes + neon override

Explicit `--type`/`--style`/`--palette` flags always override preset values.
