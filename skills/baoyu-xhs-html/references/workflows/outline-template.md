---
name: outline-template
category: workflow
---

# Outline Template

Structured template for planning card series content.

## Outline File Structure

```markdown
---
strategy: [A/B/C]
style: [style-name]
layout: [layout or "varies"]
palette: [palette or "default"]
preset: [preset-name or "custom"]
aspect: [ratio]
total_cards: [N]
language: [code]
style_reason: [why this style was chosen]
---

# Card Series Outline: [Topic]

## Strategy: [A/B/C — Name]
[Brief description of the content approach]

---

## Card 01: Cover
- **type**: cover
- **layout**: sparse
- **hook**: [What makes the reader want to swipe]
- **title**: [Card title]
- **subtitle**: [Optional subtitle]
- **visual**: [Main visual element description]
- **tags**: [List of tags]
- **slug**: [kebab-case-slug]
- **filename**: 01-cover-[slug].html

---

## Card 02: [Title]
- **type**: content
- **layout**: [layout name]
- **hook**: [Swiping motivation]
- **title**: [Card title]
- **body**:
  - [Point 1]
  - [Point 2]
  - ...
- **visual**: [Visual element description]
- **tags**: [Optional tags]
- **slug**: [kebab-case-slug]
- **filename**: 02-content-[slug].html

---

[... repeat for each card ...]

---

## Card NN: Ending
- **type**: ending
- **layout**: sparse or balanced
- **title**: [Ending title]
- **body**: [Summary or CTA]
- **cta**: [Call to action text]
- **slug**: [kebab-case-slug]
- **filename**: NN-ending-[slug].html
```

## Layout Per Position

| Position | Default Layout | Alternative |
|----------|---------------|-------------|
| Cover (01) | sparse | — |
| Content (02-N-1) | varies per card | balanced, dense, list, comparison, flow, mindmap, quadrant |
| Ending (N) | sparse | balanced |

## Card Count Heuristic

| Strategy | Typical Count | Rationale |
|----------|---------------|-----------|
| A — Story-Driven | 4-6 | Emotional arc needs space |
| B — Information-Dense | 3-5 | Value-packed, efficient |
| C — Visual-First | 3-4 | Visual impact, less text |

## Content Density Per Layout

| Layout | Max Points | Characters per Point |
|--------|-----------|---------------------|
| sparse | 1-2 | 50-100 |
| balanced | 3-4 | 30-60 |
| dense | 5-8 | 15-30 |
| list | 4-7 items | 10-40 per item |
| comparison | 2-4 per side | 20-40 per point |
| flow | 3-6 steps | 15-30 per step |
| mindmap | 4-8 branches | 10-20 per branch |
| quadrant | 4 sections | 20-40 per section |

## Swipe Hook Strategies

| Position | Hook Strategy | Example |
|----------|--------------|---------|
| Cover → Card 2 | Curiosity gap | "这3个方法让你..." |
| Card 2 → Card 3 | Value promise | "接下来是最重要的..." |
| Middle cards | Progressive disclosure | "继续看更惊喜..." |
| Card N-1 → Ending | CTA preview | "最后一点千万别忘..." |
