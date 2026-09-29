import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(base, "examples", "preview");
const themes = [
  ["xhs-cream", "奶油手账", "生活分享 / 读书 / 好物清单"],
  ["xhs-editorial", "极简杂志", "审美 / 穿搭 / 旅行随笔"],
  ["xhs-bold", "醒目干货", "教程 / 避坑 / 知识总结"],
  ["xhs-mint", "薄荷清单", "习惯养成 / 健康 / 整理计划"],
  ["xhs-journal", "复古笔记", "学习笔记 / 书摘 / 手账"],
  ["xhs-lilac", "莓紫灵感", "自我成长 / 情绪记录 / 灵感"],
];
await fs.mkdir(out, { recursive: true });
await fs.copyFile(path.join(base, "examples", "desk.svg"), path.join(out, "desk.svg"));
const source = await fs.readFile(path.join(base, "examples", "social-themes.md"), "utf8");
for (const [theme] of themes) {
  const input = path.join(out, `${theme}.md`);
  await fs.writeFile(input, source);
  const loader = process.versions.bun ? [] : ["--import", "tsx"];
  await run(process.execPath, [...loader, path.join(base, "scripts", "main.ts"), input,
    "--theme", theme!, "--keep-title", "--no-mermaid"], { cwd: path.join(base, "scripts") });
}
const cards = themes.map(([theme, name, description]) => `<article>
  <header><h2>${name}</h2><p>${description}</p><a href="${theme}.html">打开完整预览 · ${theme}</a></header>
  <iframe title="${name}完整文章预览" src="${theme}.html" loading="lazy"></iframe>
</article>`).join("\n");
await fs.writeFile(path.join(out, "index.html"), `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>小红书风格 · 图文主题选型</title><style>
*{box-sizing:border-box}body{margin:0;padding:40px 24px;background:#f0efeb;color:#252421;font:16px/1.6 system-ui,'Microsoft YaHei',sans-serif}
main{max-width:1320px;margin:auto}h1{font-size:36px;line-height:1.25;margin:0 0 12px}h2{font-size:20px;margin:0}
.intro{max-width:700px;margin-bottom:32px;color:#55524d}.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:24px}
article{min-width:0;border:1px solid #d6d3cb;border-radius:16px;background:#fff}header{padding:20px}header p{margin:6px 0 12px;font-size:14px;color:#625e58}
a{color:#795035;text-underline-offset:4px}a:focus-visible{outline:3px solid #795035;outline-offset:4px}
iframe{display:block;width:100%;height:800px;border:0;border-radius:0 0 16px 16px}
@media(max-width:480px){body{padding:24px 12px}h1{font-size:28px}}
</style></head><body><main><h1>把内容，排成喜欢的样子。</h1>
<p class="intro">同一篇文章，六种图文表达。卡片内可滚动查看全文，点击链接可打开独立 HTML。主题支持自然长文，图片分页与导出尺寸由后续工具设置。</p>
<div class="grid">${cards}</div></main></body></html>`);
console.log(path.join(out, "index.html"));
