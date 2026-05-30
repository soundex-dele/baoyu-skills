---
name: analysis-framework
category: workflow
---

# Content Analysis Framework

Deep analysis guide for breaking down source content into card series.

## Analysis Steps

### 1. Content Type Classification

Identify the primary content type:

| Type | Keywords | Description |
|------|----------|-------------|
| 种草/安利 | recommend, share, must-have, favorite | Product/place recommendation |
| 干货分享 | tips, guide, tutorial, knowledge | Knowledge and skills sharing |
| 个人故事 | experience, story, journey, transformation | Personal narrative |
| 对比测评 | vs, compare, review, pros/cons | Comparison and review |
| 清单排行 | top-N, list, ranking, must-know | Listicles and rankings |
| 情感共鸣 | feeling, thought, reflection, life | Emotional content |
| 教程步骤 | how-to, steps, guide, tutorial | Step-by-step instructions |

### 2. Hook Analysis

Rate the content's hook potential (1-5 stars):

| Rating | Criteria |
|--------|----------|
| ★ | No clear hook, plain information |
| ★★ | Slight curiosity gap |
| ★★★ | Clear value proposition |
| ★★★★ | Strong emotional or informational pull |
| ★★★★★ | Must-click, irresistible curiosity or value |

### 3. Audience Mapping

| Audience | Demographics | Content Style |
|----------|-------------|---------------|
| 学生党 | Students, 18-24 | Educational, affordable, trendy |
| 打工人 | Office workers, 25-35 | Productivity, work-life, stress relief |
| 宝妈 | Parents, 25-40 | Family, health, education |
| 爱美党 | Beauty enthusiasts, 18-35 | Skincare, fashion, aesthetics |
| 吃货 | Food lovers, all ages | Food, cooking, restaurant reviews |
| 科技控 | Tech enthusiasts | Gadgets, apps, productivity tools |
| 文艺青年 | Arts/culture lovers | Books, movies, travel, aesthetics |

### 4. Engagement Potential

Assess across three dimensions:

| Dimension | High | Medium | Low |
|-----------|------|--------|-----|
| **Save value** | Actionable tips, reference material | Interesting but not actionable | Entertainment only |
| **Share triggers** | Emotional resonance, surprising facts | Useful for someone specific | Niche interest |
| **Comment bait** | Controversial, relatable, question-inducing | Slightly engaging | Factual, no opinion |

### 5. Visual Opportunity Map

For each major section, identify:

| Element | Description |
|---------|-------------|
| **Hero visual** | Main visual anchor for the card |
| **Icon opportunities** | Icons that can represent concepts |
| **Data viz potential** | Numbers/stats that can be visualized |
| **Comparison points** | Side-by-side elements |
| **Process steps** | Sequential flow elements |
| **Key phrases** | Text to highlight/decorate |

### 6. Swipe Flow Design

Plan the reading flow across cards:

```
Card 1 (Cover)  → Hook: curiosity gap + visual impact
Card 2 (Setup)  → Context: problem/introduction
Card 3-N (Core) → Value: main content delivery
Card N+1 (End)  → CTA: action/summary
```

### 7. Output Format

Write analysis to `analysis.md` with this structure:

```markdown
# Content Analysis

## Meta
- **Topic**: [main topic]
- **Type**: [content type]
- **Language**: [detected language]
- **Recommended cards**: [N]
- **Source**: [file path or "inline"]

## Content Summary
[2-3 sentence summary]

## Key Points
1. [Point 1]
2. [Point 2]
...

## Hook Analysis
- **Rating**: [★-★★★★★]
- **Primary hook**: [description]
- **Hook type**: [curiosity / value / emotion / controversy]

## Target Audience
- **Primary**: [audience]
- **Secondary**: [audience]

## Engagement Assessment
| Dimension | Level | Reason |
|-----------|-------|--------|
| Save value | High/Medium/Low | [reason] |
| Share trigger | High/Medium/Low | [reason] |
| Comment bait | High/Medium/Low | [reason] |

## Visual Opportunities
- Hero visual: [description]
- Icons: [list]
- Data viz: [list]
- Key phrases to highlight: [list]

## Auto-Recommendation
- **Strategy**: [A/B/C] [name]
- **Style**: [style] (reason: [why])
- **Layout**: [layout]
- **Palette**: [palette or "default"]
- **Preset**: [preset name]

## Swipe Flow
1. Cover: [hook description]
2. [Card 2]: [content plan]
...
N. Ending: [CTA/summary]
```
