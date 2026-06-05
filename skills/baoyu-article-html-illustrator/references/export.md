# Export Guide

HTML illustrations can be exported to PNG for use in articles, social media, or anywhere images are needed.

## Method 1: Playwright (Recommended)

Automated, precise, supports all HTML features including Google Fonts and Rough.js.

```javascript
// export.js
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Set viewport to match illustration dimensions
    await page.setViewportSize({ width: 1920, height: 1080 });

    // Load the HTML file
    await page.goto('file:///path/to/illustration.html', {
        waitUntil: 'networkidle' // Wait for fonts and scripts to load
    });

    // Wait for Rough.js rendering (if used)
    await page.waitForTimeout(1000);

    // Select the illustration element and screenshot it
    const illustration = await page.$('.illustration');
    await illustration.screenshot({
        path: 'illustration.png',
        type: 'png'
    });

    await browser.close();
})();
```

**Batch export** (all illustrations in a directory):

```bash
# PowerShell
Get-ChildItem -Filter "*.html" | ForEach-Object {
    node export.js $_.FullName
}
```

```bash
# Bash
for f in *.html; do
    node export.js "$f"
done
```

## Method 2: Puppeteer

Alternative to Playwright with similar capabilities.

```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 2 });
    await page.goto('file:///path/to/illustration.html', { waitUntil: 'networkidle0' });
    await page.waitForTimeout(1000);
    const el = await page.$('.illustration');
    await el.screenshot({ path: 'illustration.png' });
    await browser.close();
})();
```

Note: `deviceScaleFactor: 2` produces retina-quality PNG (3840×2160 for a 1920×1080 illustration).

## Method 3: Browser Screenshot (Manual)

1. Open the HTML file in Chrome/Edge
2. Right-click the illustration → Inspect
3. Select the `.illustration` element in DevTools
4. Right-click the element in the DOM tree → "Capture node screenshot"
5. Save the resulting PNG

For precise dimensions, use Chrome's device toolbar:
1. Open DevTools (F12)
2. Toggle device toolbar (Ctrl+Shift+M)
3. Set exact dimensions (e.g., 1920×1080)
4. Take screenshot (Ctrl+Shift+P → "Capture screenshot")

## Method 4: html2canvas (Client-Side)

For export without Node.js, add this to the HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        // Add export button
        const btn = document.createElement('button');
        btn.textContent = 'Export PNG';
        btn.style.cssText = 'position:fixed;bottom:20px;right:20px;z-index:9999;padding:10px 20px;background:var(--accent);color:#fff;border:none;border-radius:8px;cursor:pointer;font-size:16px;';
        document.body.appendChild(btn);

        btn.addEventListener('click', async () => {
            const illustration = document.querySelector('.illustration');
            const canvas = await html2canvas(illustration, {
                scale: 2,
                useCORS: true,
                backgroundColor: null
            });
            const link = document.createElement('a');
            link.download = 'illustration.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    });
</script>
```

## Tips

- **Wait for fonts**: Use `waitUntil: 'networkidle'` (Playwright) or `waitUntil: 'networkidle0'` (Puppeteer) to ensure Google Fonts are loaded
- **Wait for Rough.js**: Add a small delay (500-1000ms) after page load when using sketch-notes style
- **Retina quality**: Use `deviceScaleFactor: 2` for 2× resolution exports
- **Consistent naming**: Export with the same filename as the HTML: `01-infographic-concept.html` → `01-infographic-concept.png`
