# Outline · baoyu 24 技能流水线卡片系列

- **策略**：B 信息密集型
- **风格**：notion（单色线稿 + 圆点网格底 + 黄色高亮）
- **布局**：sparse（封面/结尾）/ dense（内容卡）
- **配色**：notion 默认
- **比例**：3:4（1080×1440）
- **总数**：7 张
- **字体**：Noto Sans SC

## 统一规范（全系列共享）
- :root 配色变量、字号 scale、圆角阴影间距 token、页眉(品牌 baoyu·24 skills)、页脚(页码 N/7)
- 每张内容卡：阶段编号 + 阶段名 + 技能 dense 网格（每个技能=名称badge + 一句话 + 👉 动作指令）
- 高亮 .text-highlight 用于关键词

## 卡片清单

### 01-cover · 封面（sparse）
- 标题：baoyu 24 技能 · 内容生产流水线
- 副标题：采集 → 生成 → 配图排版 → 发布 → 兜底，每步都附"对 Claude 说什么"
- 五段标签 pill

### 02-collect · 第一步·采集素材（dense，4 技能）
- baoyu-url-to-markdown — 任意网页存 markdown
- baoyu-danger-x-to-markdown — X 推文存 markdown（非官方接口，首次需同意免责）
- baoyu-youtube-transcript — 下载 YouTube 字幕+封面
- baoyu-wechat-summary — 总结微信群聊精华（需装 wx-cli）

### 03-generate · 第二步·生成内容（dense，6 技能）
- baoyu-translate — 带术语一致的精翻，快翻/普通/精炼三档
- baoyu-comic — 知识内容做成多格漫画 PNG+PDF
- baoyu-slide-deck — 做成幻灯片 PNG+PPT+PDF
- baoyu-infographic — 21布局×22风格信息图
- baoyu-xhs-html — 小红书 HTML 卡片系列，纯代码可编辑
- baoyu-xhs-images — 小红书 AI 图片卡片，图1锚定风格

### 04-illustrate · 第三步·配图排版（dense，5 item，含2组成对）
- baoyu-cover-image / baoyu-html-cover — 文章封面：AI出图 vs 纯HTML/CSS（无后端兜底）
- baoyu-article-illustrator / baoyu-article-html-illustrator — 文章配图：AI vs HTML
- baoyu-diagram — 深色 SVG 技术图（架构/流程/时序/思维导图）
- baoyu-format-markdown — 排版+补标题摘要+加层级
- baoyu-markdown-to-html — 转公众号 HTML，外链转底部引用（发推送前最后一步）

### 05-publish · 第四步·一键发布（dense，3 技能）
- baoyu-post-to-wechat — 发公众号草稿，md 默认外链转底部引用
- baoyu-post-to-weibo — 发微博/头条文章，填好窗口供确认
- baoyu-post-to-x — 发 X 推文/长文（长文需 Premium）

### 06-utils · 第五步·兜底工具（dense，4 技能）
- baoyu-compress-image — 压成 WebP/PNG，自动选工具链
- baoyu-image-gen — 多平台 AI 出图，可批量指定比例
- baoyu-danger-gemini-web — 调 Gemini 网页接口出图文（首次需同意免责+登录Google）
- baoyu-electron-extract — 解包 Electron 应用还原源码（研究 Cursor/Codex 用）

### 07-ending · 结尾（sparse）
- 怎么开始用：不用记24个，挑最痛那步，念一句指令跑通一条
- 前置提醒：danger 前缀两个走非官方接口；wechat-summary 要装 wx-cli
- 互动：你现在卡在哪一步？今天先跑通一个试试
