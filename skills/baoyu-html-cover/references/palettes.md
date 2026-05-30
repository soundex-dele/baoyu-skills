# Color Palettes

Each palette defines CSS custom properties for the cover. Apply as `:root` variables.

## warm

Warm, inviting tones — amber, coral, soft orange. Good for lifestyle, food, community topics.

```css
:root {
    --bg-primary: #fef3e2;
    --bg-secondary: #fde8c8;
    --bg-gradient: linear-gradient(135deg, #fef3e2 0%, #fde8c8 50%, #fff5eb 100%);
    --text-primary: #2d1b0e;
    --text-secondary: #8b5e3c;
    --accent: #e8734a;
    --accent-light: #f4a261;
    --accent-glow: rgba(232, 115, 74, 0.3);
    --muted: #d4a574;
    --surface: rgba(255, 248, 240, 0.7);
}
```

## cool

Cool blue tones — professional, trustworthy. Good for tech, business, science.

```css
:root {
    --bg-primary: #e8f4f8;
    --bg-secondary: #d1ecf5;
    --bg-gradient: linear-gradient(135deg, #e8f4f8 0%, #d1ecf5 50%, #f0f8ff 100%);
    --text-primary: #1a2b3c;
    --text-secondary: #4a6b8a;
    --accent: #2b7a9e;
    --accent-light: #5ba8c8;
    --accent-glow: rgba(43, 122, 158, 0.3);
    --muted: #8ab4cc;
    --surface: rgba(232, 244, 248, 0.7);
}
```

## dark

Deep dark backgrounds — dramatic, modern. Good for tech, gaming, creative topics.

```css
:root {
    --bg-primary: #0a0a1a;
    --bg-secondary: #1a1a3a;
    --bg-gradient: linear-gradient(135deg, #0a0a1a 0%, #1a1a3a 50%, #0f1f2f 100%);
    --text-primary: #e8e8f0;
    --text-secondary: #8888aa;
    --accent: #00f0ff;
    --accent-light: #66f5ff;
    --accent-glow: rgba(0, 240, 255, 0.3);
    --muted: #3a3a5a;
    --surface: rgba(26, 26, 58, 0.7);
}
```

## elegant

Refined, muted tones — champagne, soft gold, warm gray. Good for luxury, editorial, design.

```css
:root {
    --bg-primary: #faf6f0;
    --bg-secondary: #f0e8d8;
    --bg-gradient: linear-gradient(135deg, #faf6f0 0%, #f0e8d8 50%, #fffaf5 100%);
    --text-primary: #2c2416;
    --text-secondary: #8a7a62;
    --accent: #c8a96e;
    --accent-light: #dfc08a;
    --accent-glow: rgba(200, 169, 110, 0.3);
    --muted: #b8a88e;
    --surface: rgba(250, 246, 240, 0.7);
}
```

## earth

Natural earth tones — clay, moss, sand. Good for nature, sustainability, wellness.

```css
:root {
    --bg-primary: #f0ebe3;
    --bg-secondary: #e2d5c3;
    --bg-gradient: linear-gradient(135deg, #f0ebe3 0%, #e2d5c3 50%, #f5efe8 100%);
    --text-primary: #2a1f14;
    --text-secondary: #6b5744;
    --accent: #6b8f5e;
    --accent-light: #8ab87a;
    --accent-glow: rgba(107, 143, 94, 0.3);
    --muted: #a89078;
    --surface: rgba(240, 235, 227, 0.7);
}
```

## vivid

High-saturation, energetic colors. Good for youth, entertainment, bold statements.

```css
:root {
    --bg-primary: #ff6b6b;
    --bg-secondary: #ee5a24;
    --bg-gradient: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 50%, #f9ca24 100%);
    --text-primary: #ffffff;
    --text-secondary: rgba(255, 255, 255, 0.85);
    --accent: #f9ca24;
    --accent-light: #ffe066;
    --accent-glow: rgba(249, 202, 36, 0.4);
    --muted: rgba(255, 255, 255, 0.3);
    --surface: rgba(255, 255, 255, 0.15);
}
```

## pastel

Soft, gentle pastels — light pink, lavender, mint. Good for lifestyle, children, gentle topics.

```css
:root {
    --bg-primary: #f8e8ff;
    --bg-secondary: #e8f0ff;
    --bg-gradient: linear-gradient(135deg, #f8e8ff 0%, #e8f0ff 50%, #e8fff0 100%);
    --text-primary: #3a2a4a;
    --text-secondary: #7a6a8a;
    --accent: #c8a2e8;
    --accent-light: #e0c8f0;
    --accent-glow: rgba(200, 162, 232, 0.3);
    --muted: #b8a8c8;
    --surface: rgba(248, 232, 255, 0.7);
}
```

## mono

Monochrome — black, white, grays. Good for minimalist, tech, editorial.

```css
:root {
    --bg-primary: #f5f5f5;
    --bg-secondary: #e0e0e0;
    --bg-gradient: linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 50%, #fafafa 100%);
    --text-primary: #1a1a1a;
    --text-secondary: #666666;
    --accent: #333333;
    --accent-light: #555555;
    --accent-glow: rgba(51, 51, 51, 0.2);
    --muted: #999999;
    --surface: rgba(245, 245, 245, 0.7);
}
```

## retro

Warm retro tones — mustard, burnt orange, avocado green. Good for nostalgia, vintage topics.

```css
:root {
    --bg-primary: #f4e8c1;
    --bg-secondary: #e8d5a0;
    --bg-gradient: linear-gradient(135deg, #f4e8c1 0%, #e8d5a0 50%, #f0e0b0 100%);
    --text-primary: #3a2a1a;
    --text-secondary: #7a5a30;
    --accent: #c45b28;
    --accent-light: #e07840;
    --accent-glow: rgba(196, 91, 40, 0.3);
    --muted: #b08850;
    --surface: rgba(244, 232, 193, 0.7);
}
```

## duotone

Two-color duotone effect — one dominant, one accent. Good for modern, creative, music.

```css
:root {
    --bg-primary: #1a0a2e;
    --bg-secondary: #2d1b4e;
    --bg-gradient: linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 50%, #0f0520 100%);
    --text-primary: #f0e0ff;
    --text-secondary: #b898d8;
    --accent: #ff6b9d;
    --accent-light: #ff8ab5;
    --accent-glow: rgba(255, 107, 157, 0.4);
    --muted: #6a4a8a;
    --surface: rgba(45, 27, 78, 0.7);
}
```

## macaron

Sweet, candy-like colors — pink, mint, lemon. Good for food, lifestyle, playful topics.

```css
:root {
    --bg-primary: #fff0f5;
    --bg-secondary: #f0fff5;
    --bg-gradient: linear-gradient(135deg, #fff0f5 0%, #fff8e0 50%, #f0fff5 100%);
    --text-primary: #4a2040;
    --text-secondary: #9a6088;
    --accent: #f06292;
    --accent-light: #f48cae;
    --accent-glow: rgba(240, 98, 146, 0.3);
    --muted: #d8a0c0;
    --surface: rgba(255, 240, 245, 0.7);
}
```

## neon

Neon glow on dark — electric colors. Good for cyberpunk, music, nightlife, gaming.

```css
:root {
    --bg-primary: #0a0a0a;
    --bg-secondary: #1a0a2a;
    --bg-gradient: linear-gradient(135deg, #0a0a0a 0%, #1a0a2a 50%, #0a0a1a 100%);
    --text-primary: #ffffff;
    --text-secondary: #aa88cc;
    --accent: #00ff88;
    --accent-light: #66ffaa;
    --accent-glow: rgba(0, 255, 136, 0.4);
    --muted: #3a2a5a;
    --surface: rgba(26, 10, 42, 0.7);
}
```
