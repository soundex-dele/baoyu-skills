import assert from "node:assert/strict";
import { execFile } from "node:child_process";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";
import { parseHTML } from "linkedom";

const execFileAsync = promisify(execFile);
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT_PATH = path.join(SCRIPT_DIR, "main.ts");

async function makeTempDir(prefix: string): Promise<string> {
  return fs.mkdtemp(path.join(os.tmpdir(), prefix));
}

test("CLI forwards wrapper title and package render options", async () => {
  const root = await makeTempDir("baoyu-markdown-to-html-cli-");
  const markdownPath = path.join(root, "article.md");
  await fs.writeFile(markdownPath, "## Section\n\nParagraph with **bold** text.\n", "utf-8");

  const { stdout } = await execFileAsync(
    process.execPath,
    [
      "--import",
      "tsx",
      SCRIPT_PATH,
      markdownPath,
      "--theme", "grace",
      "--color", "red",
      "--font-family", "mono",
      "--font-size", "18",
      "--keep-title",
      "--title", "Overridden",
    ],
    { cwd: SCRIPT_DIR },
  );

  const result = JSON.parse(stdout.trim()) as {
    htmlPath: string;
    title: string;
  };

  assert.equal(result.title, "Overridden");

  const html = await fs.readFile(result.htmlPath, "utf-8");
  assert.match(html, /<title>Overridden<\/title>/);
  assert.match(html, /<h2[^>]*style="[^"]*background: #A93226/);
  assert.match(html, /<strong[^>]*style="[^"]*color: #A93226/);
  assert.match(
    html,
    /<body[^>]*style="[^"]*font-family: Menlo, Monaco, 'Courier New', monospace;[^"]*font-size: 18px/,
  );
});

test("CLI renders Obsidian wikilink images with alt text and Attachments fallback", async () => {
  const root = await makeTempDir("baoyu-markdown-to-html-wikilink-cli-");
  const attachmentsDir = path.join(root, "Attachments");
  await fs.mkdir(attachmentsDir, { recursive: true });
  await fs.writeFile(path.join(root, "a.png"), "a", "utf-8");
  await fs.writeFile(path.join(attachmentsDir, "b.webp"), "b", "utf-8");

  const markdownPath = path.join(root, "article.md");
  await fs.writeFile(
    markdownPath,
    [
      "## Section",
      "",
      "![[a.png]]",
      "",
      "![[b.webp|B alt]]",
    ].join("\n"),
    "utf-8",
  );

  const { stdout } = await execFileAsync(
    process.execPath,
    [
      "--import",
      "tsx",
      SCRIPT_PATH,
      markdownPath,
      "--theme", "xhs-cream",
      "--keep-title",
    ],
    { cwd: SCRIPT_DIR },
  );

  const result = JSON.parse(stdout.trim()) as {
    contentImages: Array<{
      alt?: string;
      localPath: string;
      originalPath: string;
      placeholder: string;
    }>;
    htmlPath: string;
  };

  assert.deepEqual(
    result.contentImages.map(({ alt, localPath, originalPath, placeholder }) => ({
      alt,
      localPath,
      originalPath,
      placeholder,
    })),
    [
      {
        alt: "",
        localPath: path.join(root, "a.png"),
        originalPath: "a.png",
        placeholder: "MDTOHTMLIMGPH_1",
      },
      {
        alt: "B alt",
        localPath: path.join(attachmentsDir, "b.webp"),
        originalPath: "b.webp",
        placeholder: "MDTOHTMLIMGPH_2",
      },
    ],
  );

  const html = await fs.readFile(result.htmlPath, "utf-8");
  const { document } = parseHTML(html);
  const images = [...document.querySelectorAll("img")];
  assert.equal(images.length, 2);
  assert.equal(images[0]!.getAttribute("src"), "a.png");
  assert.equal(images[0]!.getAttribute("alt"), "");
  assert.equal(images[0]!.getAttribute("data-local-path"), path.join(root, "a.png"));
  assert.equal(images[1]!.getAttribute("src"), "b.webp");
  assert.equal(images[1]!.getAttribute("alt"), "B alt");
  assert.equal(images[1]!.getAttribute("data-local-path"), path.join(attachmentsDir, "b.webp"));
  assert.equal(images[0]!.style.getPropertyValue("border-radius"), "14px");
  assert.match(images[0]!.style.getPropertyValue("border"), /6px solid/);
});
