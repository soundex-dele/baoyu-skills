import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { execFile } from "node:child_process";
import { promisify } from "node:util";

const run = promisify(execFile);

const base = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const out = path.join(base, "examples", "preview");
const themes = [
  ["default", "经典蓝", "深度长文 / 行业观察 / 专业分享", "#0F4C81", "#F2F6FA"],
  ["grace", "雅致梅紫", "人文随笔 / 读书笔记 / 品牌故事", "#79516C", "#FAF6F9"],
  ["simple", "极简青绿", "效率工具 / 产品思考 / 清爽长文", "#216B58", "#F1F7F4"],
  ["modern", "暖橙现代", "生活方式 / 创作分享 / 温暖叙事", "#A64B32", "#F5EAE1"],
  ["xhs-cream", "奶油手账", "生活分享 / 读书 / 好物清单", "#8B492F", "#FFF9EE"],
  ["xhs-editorial", "极简杂志", "审美 / 穿搭 / 旅行随笔", "#AD342C", "#FAF9F6"],
  ["xhs-bold", "醒目干货", "教程 / 避坑 / 知识总结", "#292724", "#FFE46B"],
  ["xhs-mint", "薄荷清单", "习惯养成 / 健康 / 整理计划", "#25634F", "#F3FAF5"],
  ["xhs-journal", "复古笔记", "学习笔记 / 书摘 / 手账", "#76513D", "#F9F3E7"],
  ["xhs-lilac", "莓紫灵感", "自我成长 / 情绪记录 / 灵感", "#654484", "#FAF7FF"],
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
const cards = themes.map(([theme, name, description, ink, paper], index) => `<article data-group="${theme!.startsWith("xhs-") ? "social" : "classic"}" style="--ink:${ink};--paper:${paper}">
  <header><div class="card-top"><span class="serial">${String(index + 1).padStart(2, "0")} / ${theme}</span><span class="swatches" aria-hidden="true"><i></i><i></i></span></div>
  <h2>${name}</h2><p>${description}</p></header>
  <iframe title="${name}完整文章预览，可滚动" src="${theme}.html" loading="lazy"></iframe>
  <footer><span>${theme!.startsWith("xhs-") ? "图文风格" : "经典长文"}</span><a href="${theme}.html" aria-label="打开${name}完整预览">阅读全文 <span aria-hidden="true">↗</span></a></footer>
</article>`).join("\n");
await fs.writeFile(path.join(out, "index.html"), `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>文章主题集 · 10 种阅读气质</title><style>
*{box-sizing:border-box}body{margin:0;padding:0 40px 48px;background:#F5F4F0;color:#262923;font:16px/1.6 system-ui,'Microsoft YaHei',sans-serif}
main{max-width:1320px;margin:auto}.masthead{display:flex;justify-content:space-between;gap:16px;padding:24px 0;border-bottom:1px solid #D9DCD2;font-size:12px;letter-spacing:.1em;color:#56604F}
.hero{padding:56px 0 32px;display:flex;justify-content:space-between;align-items:end;gap:32px}.eyebrow{font-size:12px;letter-spacing:.14em;color:#56604F;margin:0 0 16px}
h1{font-size:clamp(32px,4vw,52px);font-weight:650;line-height:1.35;letter-spacing:-.04em;margin:0}h1 span{color:#627353}h2{font-size:22px;margin:14px 0 6px;font-weight:650}
.intro{max-width:420px;color:#62675E;margin:0 0 6px;font-size:14px;line-height:1.9}.toolbar{display:flex;justify-content:space-between;align-items:center;gap:12px;margin:8px 0 24px;padding-top:24px;border-top:1px solid #D9DCD2}
.filters{display:flex;gap:8px;flex-wrap:wrap}button{font:inherit;font-size:14px;min-height:44px;padding:8px 18px;border:1px solid #D3D8CD;border-radius:24px;background:transparent;color:#464E3F;cursor:pointer}
button[aria-pressed=true]{background:#34472D;border-color:#34472D;color:#fff}button:hover{border-color:#34472D}.count{font-size:12px;color:#62675E;white-space:nowrap}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,360px),1fr));gap:28px 24px}
article{min-width:0;border:1px solid #DCDDD5;border-radius:12px;background:#fff;overflow:hidden;box-shadow:0 4px 14px #252D2110}article[hidden]{display:none}
header{padding:24px;background:var(--paper);border-bottom:1px solid #252D2112}header p{margin:0;font-size:13px;color:#5E625B;line-height:1.7}.card-top{display:flex;justify-content:space-between;gap:12px;align-items:center}.serial{font:11px/1.5 Consolas,monospace;letter-spacing:.04em;color:#535C4D}
.swatches{display:flex;gap:5px}.swatches i{width:12px;height:12px;border-radius:50%;background:var(--ink)}.swatches i+i{background:var(--paper);border:1px solid #535C4D60}
iframe{display:block;width:100%;height:650px;border:0;background:#fff}footer{display:flex;justify-content:space-between;align-items:center;padding:10px 24px;border-top:1px solid #E8E9E2;font-size:12px;color:#62675E}
a{color:#34472D;text-decoration:none;display:inline-flex;align-items:center;gap:16px;min-height:44px;font-size:14px}a:hover{text-decoration:underline;text-underline-offset:4px}a:focus-visible,button:focus-visible{outline:3px solid #627353;outline-offset:3px}
.endnote{margin:32px 0 0;color:#62675E;font-size:12px}.skip{position:absolute;top:-80px}.skip:focus{top:8px;background:white;padding:12px;z-index:1}
@media(max-width:760px){body{padding:0 20px 32px}.hero{display:block;padding:36px 0 24px}.intro{margin-top:20px}.masthead{font-size:10px}.grid{gap:20px}.toolbar{align-items:start}.count{padding-top:12px}button{padding:8px 12px}.swatches{gap:4px}}
@media(max-width:400px){body{padding:0 12px 24px}.toolbar{display:block}.count{display:block;padding-top:12px}header{padding:20px}h1{font-size:30px}}
</style></head><body><a class="skip" href="#themes">跳转到主题</a><main>
<div class="masthead"><span>BAOYU / 文章主题集</span><span>TYPOGRAPHY &amp; READING</span></div>
<div class="hero"><div><p class="eyebrow">10 THEMES · ONE STORY</p><h1>让文字有秩序，<br><span>让阅读有气质。</span></h1></div>
<p class="intro">同一篇文章，十种表达。<br>从清爽长文到生活手账，找到适合内容的那一种。<br>卡片内可滚动，打开全文可查看完整排版。</p></div>
<nav class="toolbar" aria-label="筛选主题"><div class="filters"><button type="button" data-filter="all" aria-pressed="true">全部主题</button><button type="button" data-filter="classic" aria-pressed="false">经典长文 · 4</button><button type="button" data-filter="social" aria-pressed="false">图文风格 · 6</button></div><span class="count" role="status" aria-live="polite" aria-atomic="true">显示 10 套主题</span></nav>
<div class="grid" id="themes">${cards}</div><p class="endnote">自然长文 · 可内联导出 · 支持自定义主题色与字号　/　图片分页与导出尺寸由后续工具设置。</p></main>
<script>document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));let count=0;document.querySelectorAll('[data-group]').forEach(card=>{card.hidden=button.dataset.filter!=='all'&&card.dataset.group!==button.dataset.filter;if(!card.hidden)count++});document.querySelector('.count').textContent='显示 '+count+' 套主题'}));</script>
</body></html>`);
console.log(path.join(out, "index.html"));
