## 标题候选

1. 把内容生产拆成流水线：24 个 baoyu 技能，每步都附"对 Claude 说什么"
2. 24 个 baoyu AI 技能，从素材采集到一键发推送，每个都附动作指令
3. 写公众号还在手动配图、排版、发推送？这 24 个技能每个都给了现成动作
4. baoyu 的 24 个 AI 技能怎么用：按采集/生成/排版/发布排好，可抄指令
5. 真正提效的不是某个 AI 工具，而是这 24 个能串成流水线的 baoyu 技能

推荐标题：3

推荐理由：直接戳"手动配图排版发推送"这个真实痛点，正文又能兑现"每个都给现成动作"的承诺，最贴合"读完即上手"的目标。

## 摘要

baoyu 这套 24 个技能把内容生产拆成五段流水线：采集素材、生成内容、排版配图、一键发布、兜底工具。每个技能都附一句你现在就能对 Claude 说出口的原话，读完即可动手。

## 正文

你可能已经让 AI 帮你写过文章。但每次到配图、排版、发推送这一步，还是得切到好几个软件里手动操作。真正卡住效率的，往往不是"写"，而是写完之后的那些零碎活。

baoyu 这套 24 个技能，把内容生产拆成了一条流水线：从抓素材、生成内容、排版配图，到一键发布，每一步都有对应技能，每个技能都有一条可以直接说出口的指令。下面按工作流顺序排好，你挑任意一步，把那句指令念给 Claude 听，就能跑起来。

### 第一步：先把素材弄到手（4 个）

写文章最怕空手开工。这几个技能负责把散落在各处的内容抓回来，变成可编辑的 markdown。

- **baoyu-url-to-markdown**：把任意网页存成 markdown。
  > 👉 对 Claude 说："用 baoyu-url-to-markdown 把这个网页存成 markdown。" 然后贴上网址。

- **baoyu-danger-x-to-markdown**：把 X（推特）上的推文或长文存成 markdown，可选连图一起下。名字里的 `danger` 是因为它走的是非官方接口，**首次使用需同意一次免责声明**，介意的话可以跳过。
  > 👉 对 Claude 说："用 baoyu-danger-x-to-markdown 保存这条推文。" 然后贴上 x.com 链接。

- **baoyu-youtube-transcript**：下载 YouTube 视频的字幕、章节和封面图，字幕带时间戳。
  > 👉 对 Claude 说："用 baoyu-youtube-transcript 下载这个视频的字幕。" 然后贴上 YouTube 链接。

- **baoyu-wechat-summary**：总结微信群聊里的精华，输出结构化简报，挖选题特别有用。**前置条件**：需先装好 wx-cli 并初始化。
  > 👉 对 Claude 说："用 baoyu-wechat-summary 总结下 XX 群最近 3 天的精华。"

### 第二步：把素材变成内容（6 个）

素材有了，接下来是生产各种形态的内容——不止文章，还有漫画、幻灯片、信息图、小红书卡片。

- **baoyu-translate**：不是机翻，是带术语一致的精翻，有快翻/普通/精炼三档。
  > 👉 对 Claude 说："用 baoyu-translate 把这段英文精翻成中文。" 然后贴文本。

- **baoyu-comic**：把一段知识内容做成多格知识漫画，输出 PNG 加合并 PDF。
  > 👉 对 Claude 说："用 baoyu-comic 把这段内容做成知识漫画。" 然后贴文本。

- **baoyu-slide-deck**：把文章或主题做成可分享的幻灯片，同时给 PNG、PPT、PDF。
  > 👉 对 Claude 说："用 baoyu-slide-deck 把这篇文章做成 PPT。" 然后贴文章。

- **baoyu-infographic**：生成高密度信息图，21 种布局 × 22 种风格可选。
  > 👉 对 Claude 说："用 baoyu-infographic 把这段内容做成信息图。" 然后贴文本。

- **baoyu-xhs-html**：把内容做成小红书风格的 HTML 卡片系列，1 到 10 张，可导出 PNG，纯代码生成、可二次编辑。
  > 👉 对 Claude 说："用 baoyu-xhs-html 把这段内容做成小红书卡片系列。" 然后贴文本。

- **baoyu-xhs-images**：同样是小红书卡片，但走 AI 出图路线，图 1 锚定后续风格一致性。
  > 👉 对 Claude 说："用 baoyu-xhs-images 把这段内容做成小红书图片卡片。" 然后贴文本。

### 第三步：配图与排版（7 个）

这是流水线上最碎、最耗时间的一段，也是技能最密集的一段。一个有用的规律：**很多技能成对出现，一个走 AI 出图，一个走纯 HTML/CSS**。后者在你没有 AI 图片后端时照样能跑，是兜底方案。

- **baoyu-cover-image** vs **baoyu-html-cover**：都做文章封面。前者 AI 生成 PNG，后者纯 HTML/CSS 生成、可导出 PNG。
  > 👉 "用 baoyu-cover-image 给这篇文章生成封面图。" / 没有图片后端就换："用 baoyu-html-cover 给这篇文章做个 HTML 封面。" 然后贴文章或标题。

- **baoyu-article-illustrator** vs **baoyu-article-html-illustrator**：都给文章配插图。前者 AI 出图，后者生成可编辑的 HTML/CSS 配图（6 类型 × 多风格 × 4 配色），无位图后端也能用。
  > 👉 "用 baoyu-article-illustrator 为这篇文章配图。" / "用 baoyu-article-html-illustrator 给这篇文章配 HTML 图。" 然后贴文章。

- **baoyu-diagram**：画专业深色 SVG 技术图——架构图、流程图、时序图、思维导图都行，输出独立 .svg。
  > 👉 对 Claude 说："用 baoyu-diagram 画一个微服务架构图。" 然后描述组件和关系。

- **baoyu-format-markdown**：不光排版美化，还会补全标题、摘要、frontmatter，加层级和加粗。
  > 👉 对 Claude 说："用 baoyu-format-markdown 排版这篇文章。" 然后给出文件路径。

- **baoyu-markdown-to-html**：把 markdown 转成带样式的微信公众号 HTML，4 主题 13 配色，外链自动转底部引用，代码高亮、Mermaid 图都能处理。**发公众号前的最后一步**。
  > 👉 对 Claude 说："用 baoyu-markdown-to-html 把 article.md 转成 html。" 然后给出路径。

### 第四步：一键发出去（3 个）

内容做好了，不用再切到各个平台手动粘贴。

- **baoyu-post-to-wechat**：把 markdown / HTML / 纯文本发到微信公众号草稿箱，markdown 默认外链转底部引用。三种发布方式可选。
  > 👉 对 Claude 说："用 baoyu-post-to-wechat 把这篇 md 发到公众号。" 然后给出路径。

- **baoyu-post-to-weibo**：发微博动态或头条文章，可带图和视频。会打开填好内容的微博窗口，你确认后发布。
  > 👉 对 Claude 说："用 baoyu-post-to-weibo 发一条带图的微博。" 然后给出文本和图片。

- **baoyu-post-to-x**：在 X 发推文、视频或长文（长文需 Premium）。同样打开填好内容的窗口供你确认。
  > 👉 对 Claude 说："用 baoyu-post-to-x 发一条推文。" 然后给出文本。

### 第五步：兜底工具（4 个）

前三步走不顺时，这几个救场。

- **baoyu-compress-image**：把图片压成 WebP 或 PNG，自动挑系统里可用的工具链。
  > 👉 对 Claude 说："用 baoyu-compress-image 压缩这张图。" 然后给出图片路径。

- **baoyu-image-gen**：多平台 AI 出图，支持 OpenAI、Google、DashScope、Z.AI 等多家，可批量、可指定比例。
  > 👉 对 Claude 说："用 baoyu-image-gen 生成一张赛博朋克城市的图，16:9。"

- **baoyu-danger-gemini-web**：直接调 Gemini 网页接口生成图文，支持参考图做多模态输入。**前置条件**：首次需同意免责声明并登录 Google。
  > 👉 对 Claude 说："用 baoyu-danger-gemini-web 生成一张猫的图。"

- **baoyu-electron-extract**：解包 Electron 应用、还原源码。和内容创作关系不大，但想研究 Cursor、Codex 这类 AI 工具怎么实现时很有用。
  > 👉 对 Claude 说："用 baoyu-electron-extract 解包 Cursor 的源码。"

### 怎么开始用

不用一次记 24 个。挑流水线上你目前最痛的那一步——多半是配图或排版——把那一句指令念给 Claude 听，先把一条跑通。跑通一条，你自然会想把上下游也串起来，这 24 个技能的价值就在于它们本来就设计成能首尾相接。

一个提醒：带 `danger` 前缀的两个技能（x-to-markdown、gemini-web）走的是非官方接口，首次需同意免责声明；`wechat-summary` 要先装 wx-cli，`electron-extract` 是给想扒 AI 工具源码的人准备的。这些前置条件技能里都会提示，照着走就行。

## 结尾互动

你现在卡在内容生产的哪一步？挑一句上面的指令，今天先跑通一个技能试试。
