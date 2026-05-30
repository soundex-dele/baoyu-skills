---
name: first-time-setup
category: config
---

# First-Time Setup

Interactive preference setup for new users. Triggered when EXTEND.md is not found and the session is interactive.

## Setup Flow

Ask the following questions in order, batching where possible.

### Question 1: Style Preference

```
🎨 选择你喜欢的默认视觉风格：

1. ✨ 可爱甜美 (cute) — 圆润造型、粉色系
2. 🌿 清新自然 (fresh) — 绿色清新、圆润形状
3. 🏠 温馨友好 (warm) — 暖色调、舒适感
4. 💥 高冲击 (bold) — 深色背景、粗边框、大字体
5. 🎯 极简干净 (minimal) — 大量留白、细线条
6. 📷 复古怀旧 (retro) — 做旧质感、复古配色
7. 🎪 活力流行 (pop) — 鲜艳色彩、几何形状
8. 📝 知识卡片 (notion) — 简约线条、干净网格
9. 🎓 黑板教室 (chalkboard) — 深色背景、粉笔字
10. ✏️ 学习笔记 (study-notes) — 横格纸、手写体
11. 🖼️ 海报风格 (screen-print) — 大胆海报、有限色
12. ✍️ 手绘笔记 (sketch-notes) — Rough.js 手绘效果

选择编号（默认 1）：
```

### Question 2: Palette Preference

```
🎨 默认配色方案：

1. 跟随风格（推荐）
2. macaron — 柔和粉彩
3. warm — 暖色调
4. neon — 霓虹暗色

选择编号（默认 1）：
```

### Question 3: Aspect Ratio

```
📐 卡片比例：

1. 3:4 竖版 — 小红书/微信（推荐）
2. 1:1 方形 — Instagram
3. 4:3 横版 — 演示文稿
4. 9:16 超竖版 — 故事格式

选择编号（默认 1）：
```

### Question 4: Watermark (Optional)

```
💧 是否添加水印？

1. 不添加（默认）
2. 添加水印

如果选择 2，请输入水印内容（如 @your_handle）：
```

### Question 5: Language

```
🌐 默认语言：

1. 自动检测（推荐）
2. 中文 (zh)
3. English (en)
4. 日本語 (ja)

选择编号（默认 1）：
```

### Question 6: Save Location

```
💾 保存偏好到：

1. 当前项目 (.baoyu-skills/baoyu-xhs-html/EXTEND.md)
2. 用户目录 (~/.baoyu-skills/baoyu-xhs-html/EXTEND.md)

选择编号（默认 1）：
```

## Generation

After all questions are answered, generate the EXTEND.md file:

```yaml
# baoyu-xhs-html preferences
# Generated: {date}
# Modify anytime — delete this file to reconfigure

watermark:
  enabled: {watermark_enabled}
  content: "{watermark_content}"
  position: "bottom-right"

preferred_style: "{style}"
preferred_layout: "auto"
preferred_palette: "{palette}"
preferred_aspect: "{aspect}"

language: "{language}"
default_card_count: 5
```

## Skip Conditions

- `--yes` flag: skip setup entirely, use built-in defaults
- Non-interactive session: skip setup, use defaults
- EXTEND.md exists: skip setup, use existing preferences
