---
title: Colors
description: Our color system provides a consistent palette for creating accessible and visually cohesive interfaces.
category: Colors
tokens:
  - name: Primary 50
    value: '#eff6ff'
    cssVariable: --color-primary-50
    description: Lightest shade of primary color
    usage: Background tints, very subtle highlights
    figmaToken: Primary/50
  - name: Primary 500
    value: '#3b82f6'
    cssVariable: --color-primary-500
    description: Main primary brand color
    usage: Primary buttons, links, active states
    figmaToken: Primary/500
  - name: Primary 900
    value: '#1e3a8a'
    cssVariable: --color-primary-900
    description: Darkest shade of primary color
    usage: Text on light backgrounds, emphasis
    figmaToken: Primary/900
  - name: Gray 50
    value: '#f9fafb'
    cssVariable: --color-gray-50
    description: Lightest neutral color
    usage: Page backgrounds, subtle borders
    figmaToken: Neutral/50
  - name: Gray 500
    value: '#6b7280'
    cssVariable: --color-gray-500
    description: Medium neutral color
    usage: Secondary text, icons, borders
    figmaToken: Neutral/500
  - name: Gray 900
    value: '#111827'
    cssVariable: --color-gray-900
    description: Darkest neutral color
    usage: Primary text, headings
    figmaToken: Neutral/900
  - name: Success 500
    value: '#10b981'
    cssVariable: --color-success-500
    description: Success state color
    usage: Success messages, positive actions
    figmaToken: Success/500
  - name: Error 500
    value: '#ef4444'
    cssVariable: --color-error-500
    description: Error state color
    usage: Error messages, destructive actions
    figmaToken: Error/500
relatedTokens:
  - category: Typography
    relationship: Text colors should use appropriate contrast ratios with background colors
  - category: Spacing
    relationship: Color boundaries often align with spacing tokens for visual consistency
---

## Color System

Our color system is built on a foundation of accessibility and brand consistency. Each color has multiple shades to provide flexibility while maintaining visual harmony.

### Usage Guidelines

- **Primary colors**: Use for brand elements, primary actions, and key interactive elements
- **Neutral colors**: Use for text, backgrounds, and structural elements
- **Semantic colors**: Use to communicate status, feedback, and system states

### Accessibility

All color combinations meet WCAG 2.1 AA standards for contrast ratios:
- Normal text: minimum 4.5:1 contrast ratio
- Large text: minimum 3:1 contrast ratio
- Interactive elements: minimum 3:1 contrast ratio

### Implementation

```css
/* Using CSS variables */
.primary-button {
  background-color: var(--color-primary-500);
  color: white;
}

/* Using Tailwind classes */
<button className="bg-primary-500 text-white">
  Primary Action
</button>
```