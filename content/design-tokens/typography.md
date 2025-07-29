---
title: Typography
description: Typography tokens define consistent text styles, ensuring readability and visual hierarchy across the design system.
category: Typography
tokens:
  - name: Font Family Base
    value: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    cssVariable: --font-family-base
    description: Primary font family for body text
    usage: Body text, UI elements, general content
    figmaToken: Typography/Font Family/Base
  - name: Font Family Mono
    value: "JetBrains Mono, 'Fira Code', Consolas, monospace"
    cssVariable: --font-family-mono
    description: Monospace font for code
    usage: Code blocks, technical content
    figmaToken: Typography/Font Family/Mono
  - name: Text XS
    value: '12px'
    cssVariable: --text-xs
    description: Extra small text size
    usage: Captions, fine print, metadata
    figmaToken: Typography/Size/XS
  - name: Text SM
    value: '14px'
    cssVariable: --text-sm
    description: Small text size
    usage: Secondary text, labels
    figmaToken: Typography/Size/SM
  - name: Text Base
    value: '16px'
    cssVariable: --text-base
    description: Base text size
    usage: Body text, primary content
    figmaToken: Typography/Size/Base
  - name: Text LG
    value: '18px'
    cssVariable: --text-lg
    description: Large text size
    usage: Emphasized content, lead paragraphs
    figmaToken: Typography/Size/LG
  - name: Text XL
    value: '20px'
    cssVariable: --text-xl
    description: Extra large text size
    usage: Small headings, important text
    figmaToken: Typography/Size/XL
  - name: Text 2XL
    value: '24px'
    cssVariable: --text-2xl
    description: 2X large text size
    usage: Section headings
    figmaToken: Typography/Size/2XL
  - name: Text 3XL
    value: '30px'
    cssVariable: --text-3xl
    description: 3X large text size
    usage: Page headings
    figmaToken: Typography/Size/3XL
  - name: Font Weight Normal
    value: '400'
    cssVariable: --font-weight-normal
    description: Normal font weight
    usage: Body text, standard content
    figmaToken: Typography/Weight/Normal
  - name: Font Weight Medium
    value: '500'
    cssVariable: --font-weight-medium
    description: Medium font weight
    usage: Emphasized text, labels
    figmaToken: Typography/Weight/Medium
  - name: Font Weight Semibold
    value: '600'
    cssVariable: --font-weight-semibold
    description: Semibold font weight
    usage: Headings, important text
    figmaToken: Typography/Weight/Semibold
  - name: Font Weight Bold
    value: '700'
    cssVariable: --font-weight-bold
    description: Bold font weight
    usage: Strong emphasis, major headings
    figmaToken: Typography/Weight/Bold
relatedTokens:
  - category: Colors
    relationship: Typography tokens work with color tokens to ensure proper contrast and readability
  - category: Spacing
    relationship: Line height and spacing tokens create consistent vertical rhythm
---

## Typography System

Our typography system creates clear hierarchy and ensures excellent readability across all interfaces. The scale is designed to work harmoniously at different screen sizes and contexts.

### Type Scale

The type scale follows a mathematical progression that creates natural hierarchy:
- Each step provides clear differentiation
- Maintains readability at all sizes
- Works across different device types

### Usage Guidelines

**Headings**: Use appropriate heading levels (h1-h6) with corresponding text sizes
**Body Text**: Use text-base (16px) for optimal readability
**Secondary Text**: Use text-sm (14px) for less important information
**Captions**: Use text-xs (12px) for metadata and fine print

### Implementation

```css
/* Heading styles */
.heading-1 {
  font-size: var(--text-3xl);
  font-weight: var(--font-weight-bold);
  line-height: 1.2;
}

.body-text {
  font-size: var(--text-base);
  font-weight: var(--font-weight-normal);
  line-height: 1.5;
}
```