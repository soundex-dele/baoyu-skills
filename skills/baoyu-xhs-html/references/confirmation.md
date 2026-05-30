---
name: confirmation
category: reference
---

# Confirmation Reference

Verbatim question copy for the Smart Confirm step (Step 2).

## Main Confirmation Question

After displaying the analysis summary, ask this question:

```
请选择生成方式：
1. ✅ 直接生成（按推荐方案）
2. 🎨 自定义调整（修改风格/布局/配色/数量）
3. 📋 详细模式（三种大纲对比，精细控制）
```

---

## Path B — Customize Questions

### Question 1: Strategy & Style

```
选择内容策略和风格：
1. {推荐} — {strategy_name} + {style_name}（{reason}）
2. {strategy_name} + {alternative_style}
3. {alternative_strategy} + {style_name}
4. 其他（请说明）
```

### Question 2: Layout

```
选择布局方式：
1. {推荐} — {layout_name}（{reason}）
2. sparse — 1-2要点，最大冲击力
3. balanced — 3-4要点，标准排版
4. dense — 5-8要点，知识卡
5. list — 枚举/排行（4-7项）
6. comparison — 左右对比
7. flow — 流程/时间线（3-6步）
8. mindmap — 中心放射（4-8分支）
9. quadrant — 四象限/分块
```

### Question 3: Palette

```
选择配色方案：
1. {推荐} — {palette_name or "默认（跟随风格）"}
2. macaron — 柔和粉彩（教育/可爱）
3. warm — 暖色调（生活/温馨）
4. neon — 霓虹暗色（科技/潮流）
5. 默认（使用风格自带配色）
```

### Question 4: Card Count

```
卡片数量（推荐 {N} 张）：
输入 2-10 之间的数字，或直接回车使用推荐值。
```

### Question 5: Aspect Ratio

```
选择卡片比例：
1. 3:4 — 竖版（小红书/微信，推荐）
2. 1:1 — 方形（Instagram）
3. 4:3 — 横版（演示文稿）
4. 9:16 — 超竖版（故事/短视频）
```

---

## Path C — Detailed Mode

### Step 2a: Content Understanding

```
请选择内容的核心卖点（可多选）：
1. □ 实用性（可以立即用的干货）
2. □ 新鲜感（少见的信息/角度）
3. □ 情感共鸣（触动内心）
4. □ 权威性（专业/可信来源）
5. □ 对比性（明显的优劣对比）
6. □ 视觉冲击（强画面感）
```

```
目标受众：
1. 学生党
2. 打工人
3. 宝妈/家长
4. 爱美党
5. 吃货
6. 科技控
7. 文艺青年
8. 其他（请说明）
```

```
内容调性：
1. 真实感 — 像朋友聊天
2. 专业感 — 专家口吻
3. 审美感 — 视觉优先
4. 自动匹配（推荐）
```

### Step 2c: Outline Selection

```
请选择大纲方案：
1. 方案A — {strategy_a_name}（{card_count_a}张，{style_a}）
2. 方案B — {strategy_b_name}（{card_count_b}张，{style_b}）
3. 方案C — {strategy_c_name}（{card_count_c}张，{style_c}）
4. 混合 — 从多个方案中挑选卡片组合
```

```
确认风格选择：
1. 使用各方案推荐的风格（不同方案可能不同风格）
2. 统一使用 {style_name}
3. 其他风格
```

---

## Outline Variant Frontmatter

Each outline variant in Path C must include:

```yaml
---
strategy: A/B/C
strategy_name: [Story-Driven / Information-Dense / Visual-First]
style: [recommended-style]
layout: [recommended-layout or "varies"]
palette: [palette or "default"]
total_cards: [N]
style_reason: "[Why this style fits this strategy]"
---
```

Example:

```yaml
---
strategy: A
strategy_name: Story-Driven
style: warm
layout: balanced
palette: default
total_cards: 5
style_reason: "个人故事内容适合温暖亲切的风格，serif字体增加情感深度"
---
```
