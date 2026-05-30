# Export to PNG

The HTML cover file is the primary output. When the user needs a PNG (e.g., for social media or article embedding), use one of these methods.

## Method 1: Browser Screenshot (Manual)

The simplest approach — no tooling required:

1. Open the HTML file in Chrome/Edge/Firefox
2. Set zoom to 100%
3. Use browser screenshot tool:
   - **Chrome/Edge**: `Ctrl+Shift+S` → "Capture full page" or select the area
   - **Firefox**: Right-click → "Take Screenshot"
4. Save as PNG

**Limitation**: May not capture at exact pixel dimensions. Best for quick previews.

## Method 2: Playwright Automated Capture

If Playwright is available (it often is in Claude Code environments), use it to capture a pixel-perfect screenshot:

```javascript
const { chromium } = require('playwright');

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage({
        viewport: { width: 1920, height: 1080 },  // Match the cover dimensions
        deviceScaleFactor: 1
    });
    await page.goto('file:///path/to/cover.html');
    await page.waitForTimeout(1000);  // Wait for fonts and Rough.js to render

    // For canvas-based covers, wait for the canvas to be drawn
    await page.waitForFunction(() => {
        const canvas = document.getElementById('coverCanvas');
        if (!canvas) return true;  // No canvas, just CSS — ready
        const ctx = canvas.getContext('2d');
        // Check if canvas has been drawn on
        const data = ctx.getImageData(0, 0, 1, 1).data;
        return true;  // Canvas exists, assume drawn
    });

    // Select the body or cover container
    await page.locator('body').screenshot({
        path: 'cover.png',
        type: 'png'
    });

    await browser.close();
})();
```

**Playwright MCP approach** (available in Claude Code):

1. Navigate to the HTML file: `browser_navigate` with `file:///` URL
2. Wait for rendering: `browser_wait_for` with `time: 2`
3. Take screenshot: `browser_take_screenshot` with `fullPage: true`

## Method 3: Puppeteer

```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 });
    await page.goto('file:///path/to/cover.html', { waitUntil: 'networkidle0' });
    await page.screenshot({
        path: 'cover.png',
        type: 'png',
        clip: { x: 0, y: 0, width: 1920, height: 1080 }
    });
    await browser.close();
})();
```

## Method 4: html2canvas (Client-Side)

Include html2canvas in the HTML file for self-contained export:

```html
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
    // Add an export button (hidden by default, shown on hover)
    document.addEventListener('keydown', function(e) {
        if (e.key === 's' && e.ctrlKey) {
            e.preventDefault();
            html2canvas(document.body, {
                width: 1920, height: 1080,
                scale: 1, useCORS: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.download = 'cover.png';
                link.href = canvas.toDataURL('image/png');
                link.click();
            });
        }
    });
</script>
```

**Usage**: Open in browser, press `Ctrl+S` to download PNG.

## Tips for Clean Exports

1. **Wait for fonts**: Google Fonts may take 1-2 seconds to load. Always add a wait.
2. **Wait for canvas**: Rough.js draws asynchronously. Check canvas is populated before capture.
3. **Disable animations**: If the cover has CSS animations, add `animation: none !important` before capturing to get a clean frame.
4. **Exact dimensions**: Use `clip` or viewport matching to avoid extra whitespace.
5. **Retina**: For 2× export, use `deviceScaleFactor: 2` in Playwright/Puppeteer.
