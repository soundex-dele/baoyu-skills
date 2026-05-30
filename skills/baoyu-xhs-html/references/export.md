---
name: export
category: reference
---

# PNG Export Methods

Methods for exporting HTML cards to PNG images.

## Method 1: Playwright (Recommended)

Automated, pixel-perfect capture with font loading support.

### Prerequisites

```bash
npm install playwright
npx playwright install chromium
```

### Capture Script

```javascript
// capture.js
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function captureCards(htmlDir, outputDir) {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    // Find all HTML files
    const htmlFiles = fs.readdirSync(htmlDir)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .sort();

    for (const file of htmlFiles) {
        const htmlPath = path.resolve(htmlDir, file);
        await page.goto(`file://${htmlPath}`);

        // Wait for fonts to load
        await page.waitForTimeout(1500);

        // Wait for Rough.js if present
        await page.waitForFunction(() => {
            return !document.querySelector('script[src*="rough"]') ||
                   window.rough !== undefined;
        }).catch(() => {}); // Timeout is OK

        // Get card dimensions
        const card = await page.$('.card');
        const box = await card.boundingBox();

        // Capture at 2x for retina
        await page.screenshot({
            path: path.join(outputDir, file.replace('.html', '.png')),
            clip: { x: box.x, y: box.y, width: box.width, height: box.height },
            deviceScaleFactor: 2
        });

        console.log(`✓ ${file} → ${file.replace('.html', '.png')}`);
    }

    await browser.close();
}

// Usage
const htmlDir = process.argv[2] || './html-cards/topic';
const outputDir = process.argv[3] || path.join(htmlDir, 'captures');
captureCards(htmlDir, outputDir);
```

### Usage

```bash
node capture.js ./html-cards/ai-tools-recommend
```

## Method 2: Puppeteer

Alternative Node.js automation.

### Prerequisites

```bash
npm install puppeteer
```

### Capture Script

```javascript
// capture-puppeteer.js
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function captureCards(htmlDir, outputDir) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const htmlFiles = fs.readdirSync(htmlDir)
        .filter(f => f.endsWith('.html') && f !== 'index.html')
        .sort();

    for (const file of htmlFiles) {
        const htmlPath = path.resolve(htmlDir, file);
        await page.goto(`file://${htmlPath}`);

        // Wait for rendering
        await new Promise(r => setTimeout(r, 2000));

        const card = await page.$('.card');
        await card.screenshot({
            path: path.join(outputDir, file.replace('.html', '.png')),
            type: 'png'
        });

        console.log(`✓ ${file}`);
    }

    await browser.close();
}

captureCards(process.argv[2], process.argv[3]);
```

## Method 3: Manual Browser Screenshot

Simplest method, no tools required.

1. Open the HTML file in Chrome/Edge
2. Right-click → Inspect
3. Toggle device toolbar (Ctrl+Shift+M)
4. Set exact dimensions (e.g., 1080×1440)
5. Take screenshot (Ctrl+Shift+S or via extension)

## Method 4: html2canvas (Client-Side)

For in-browser export without Node.js.

Add to the HTML file:

```html
<script src="https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js"></script>
<script>
document.addEventListener('keydown', (e) => {
    if (e.key === 's' && e.ctrlKey) {
        e.preventDefault();
        html2canvas(document.querySelector('.card'), {
            scale: 2,
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            link.download = document.title.replace(/[^a-zA-Z0-9一-鿿]/g, '_') + '.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        });
    }
});
</script>
```

Press `Ctrl+S` to trigger export.

## Export Quality Tips

1. **Wait for fonts**: Always wait 1-2 seconds after page load for Google Fonts
2. **Wait for Rough.js**: If using sketch-notes style, wait for Rough.js rendering
3. **Device scale factor 2**: Capture at 2× for retina-quality output
4. **Clip to card**: Use `.card` element bounding box for exact dimensions
5. **Disable animations**: Add `animation: none !important` before capture if animated

## Batch Export

For exporting all cards in a series at once, the Playwright method is recommended as it handles:
- Multiple files in sequence
- Font loading delays
- Rough.js rendering
- Consistent 2× output resolution
- Automatic output directory creation
