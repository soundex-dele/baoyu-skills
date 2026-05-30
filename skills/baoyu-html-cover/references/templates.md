# Cover Type Templates

Each type defines the composition layout — where elements are placed and how they relate.

## hero

Large focal visual element dominating 60-70% of the cover area. Title overlaid or positioned at the edge.

**Layout:**
```
┌─────────────────────────────┐
│                             │
│    ╔══════════════════╗     │
│    ║                  ║     │
│    ║   VISUAL ANCHOR  ║     │
│    ║   (large shape/  ║     │
│    ║    illustration)  ║     │
│    ║                  ║     │
│    ╚══════════════════╝     │
│                             │
│         TITLE               │
│       subtitle              │
└─────────────────────────────┘
```

**CSS approach:**
- Flexbox column, center-aligned
- Visual anchor: large shape (circle, rounded rect, SVG illustration) with `width: 50-70%`
- Title: below the visual, large font
- Subtitle: below title, smaller and muted

## conceptual

Abstract shapes conveying the article's core idea. Information hierarchy through size and position.

**Layout:**
```
┌─────────────────────────────┐
│                             │
│  ●                          │
│       ◆                     │
│    TITLE                    │
│  subtitle                   │
│          ○                  │
│                             │
│                    ▲        │
└─────────────────────────────┘
```

**CSS approach:**
- Absolute positioning for scattered shapes
- Each shape represents a concept (circle = idea, triangle = growth, etc.)
- Title positioned in a clear area between shapes
- Use varying opacity for depth

## typography

Text-focused layout where typography IS the visual. Large, expressive title treatment.

**Layout:**
```
┌─────────────────────────────┐
│                             │
│                             │
│  T I T L E                  │
│  ═══════════                │
│  T I T L E                  │
│  (continued)                │
│                             │
│       subtitle              │
│                             │
│  ████ accent bar            │
└─────────────────────────────┘
```

**CSS approach:**
- Title takes up 40-60% of the cover
- `font-size` is very large (80-120px depending on aspect)
- Decorative rules (horizontal lines, accent bars) complement text
- Minimal other decoration
- Font choice is critical — display or serif fonts work best

## metaphor

A single visual metaphor representing the article topic. Concrete expressing abstract.

**Layout:**
```
┌─────────────────────────────┐
│                             │
│         ╭──────╮            │
│        │ METAPHOR│          │
│        │ (visual) │         │
│         ╰──────╯            │
│                             │
│    ─── TITLE ───            │
│       subtitle              │
└─────────────────────────────┘
```

**CSS approach:**
- Central SVG or CSS illustration representing the metaphor
- Examples: lightbulb (ideas), rocket (launch), mountain (challenge), puzzle (problem-solving)
- Title below or beside the metaphor
- Generous whitespace around the metaphor element
- See [visual-elements.md](visual-elements.md) for metaphor vocabulary

## scene

Atmospheric scene creating a narrative feel. Multiple elements creating depth and story.

**Layout:**
```
┌─────────────────────────────┐
│  ░░░░░░░░░░░░░░░░░░░░░░░░  │
│  ░░░ (background layer) ░░  │
│  ░░░░░░░░░░░░░░░░░░░░░░░░  │
│                             │
│     ▓▓▓  ▓▓▓               │
│     ▓▓▓  ▓▓▓ (mid-ground)  │
│                             │
│    TITLE                    │
│    subtitle                 │
│  ████████████████████████   │
└─────────────────────────────┘
```

**CSS approach:**
- Layered gradients for sky/ground/environment
- SVG or CSS elements at different scales for depth
- Background → mid-ground → foreground layering
- Title positioned in the clear area
- Use opacity and blur to create depth

## minimal

Maximum whitespace, minimal elements. One accent element with generous breathing room.

**Layout:**
```
┌─────────────────────────────┐
│                             │
│                             │
│                             │
│         ●                   │
│                             │
│       TITLE                 │
│       subtitle              │
│                             │
│                             │
└─────────────────────────────┘
```

**CSS approach:**
- 60%+ whitespace
- One small decorative element (dot, line, small shape)
- Title is medium-sized, well-spaced
- Extreme restraint — remove anything unnecessary
- Works best with `mono` or `elegant` palette
