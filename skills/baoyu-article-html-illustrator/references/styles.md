# Style Reference

## Style Gallery

| Style | Description | Best For | CSS Approach |
|-------|-------------|----------|--------------|
| `vector-illustration` | Clean flat vector art with bold shapes | Knowledge articles, tutorials, tech content | Solid fills, black outlines, geometric icons, no gradients |
| `notion` | Minimalist hand-drawn line art | Knowledge sharing, SaaS, productivity | Monochrome lines, simple SVG icons, clean grid |
| `sketch-notes` | Hand-drawn educational infographic | Education, warm notes, concept explainers | Rough.js wobble borders, pastel fills on cream background |
| `blueprint` | Technical schematics | Architecture, system design, engineering | Grid lines, monospace fonts, blue/white color scheme |
| `minimal` | Ultra-clean, zen-like | Philosophy, minimalism, core concepts | Maximum whitespace, thin lines, restrained color |
| `elegant` | Refined, sophisticated | Business, thought leadership, strategy | Serif fonts, subtle gradients, balanced composition |
| `editorial` | Magazine-style infographic | Tech explainers, journalism, data stories | Bold typography, structured sections, editorial layout |
| `watercolor` | Soft artistic with natural warmth | Lifestyle, travel, creative, emotional stories | CSS gradient blobs, soft borders, organic shapes |
| `screen-print` | Bold poster art, limited colors | Opinion, editorial, cultural, cinematic | High contrast, flat shapes, halftone CSS patterns |

Per-style detailed specs: `references/styles/<style>.md`

## Type × Style Compatibility Matrix

| | sketch-notes | vector-illustration | notion | minimal | blueprint | elegant | editorial | watercolor | screen-print |
|---|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
| infographic | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓ |
| scene | ✗ | ✓ | ✓ | ✓ | ✗ | ✓ | ✓ | ✓✓ | ✓✓ |
| flowchart | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓✓ | ✓ | ✓✓ | ✗ | ✗ |
| comparison | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✓✓ | ✓✓ | ✓ | ✓ |
| framework | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓✓ | ✓ | ✗ | ✓ |
| timeline | ✓ | ✓ | ✓✓ | ✓ | ✓ | ✓✓ | ✓✓ | ✓✓ | ✓ |

✓✓ = highly recommended | ✓ = compatible | ✗ = not recommended

## Auto Selection by Content Signals

| Content Signals | Recommended Type | Recommended Style |
|-----------------|------------------|-------------------|
| **(no strong signal / general article)** | **infographic** | **sketch-notes** |
| Knowledge, concept, tutorial, learning | infographic | sketch-notes, notion, vector-illustration |
| Productivity, SaaS, tool, app | infographic | notion, sketch-notes, minimal |
| How-to, steps, workflow, process | flowchart | sketch-notes, notion, blueprint |
| API, metrics, data, numbers | infographic | blueprint, editorial, vector-illustration |
| Tech, AI, programming, development | infographic | vector-illustration, blueprint, notion |
| Framework, model, architecture | framework | blueprint, notion, sketch-notes |
| vs, pros/cons, before/after | comparison | vector-illustration, notion, sketch-notes |
| Story, emotion, journey, personal | scene | watercolor, elegant |
| History, timeline, progress, evolution | timeline | elegant, editorial |
| Business, professional, strategy | framework | elegant, minimal |
| Opinion, editorial, culture | scene | screen-print |
| Philosophy, minimalism, zen | infographic | minimal |
