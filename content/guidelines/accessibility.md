---
title: Accessibility Guidelines
description: Comprehensive guidelines for creating inclusive and accessible user interfaces that work for everyone.
category: Accessibility
priority: High
principles:
  - title: Perceivable
    description: Information and UI components must be presentable in ways users can perceive
    example: Provide text alternatives for images, ensure sufficient color contrast, offer captions for videos
  - title: Operable
    description: UI components and navigation must be operable by all users
    example: Make all functionality keyboard accessible, provide users enough time to read content, avoid content that causes seizures
  - title: Understandable
    description: Information and UI operation must be understandable
    example: Make text readable and understandable, make content appear and operate predictably, help users avoid and correct mistakes
  - title: Robust
    description: Content must be robust enough for various assistive technologies
    example: Use valid HTML, ensure compatibility with screen readers, test with multiple assistive technologies
dosDonts:
  dos:
    - text: Use semantic HTML elements (button, nav, main, etc.)
    - text: Provide alternative text for all meaningful images
    - text: Ensure minimum 4.5:1 color contrast for normal text
    - text: Make all interactive elements keyboard accessible
    - text: Use descriptive link text instead of "click here"
    - text: Provide clear error messages and instructions
    - text: Test with screen readers and keyboard navigation
  donts:
    - text: Rely solely on color to convey information
    - text: Use placeholder text as labels
    - text: Create keyboard traps or unreachable content
    - text: Auto-play videos with sound
    - text: Use generic link text like "read more"
    - text: Remove focus indicators without providing alternatives
    - text: Ignore ARIA best practices
resources:
  - title: WCAG 2.1 Guidelines
    url: https://www.w3.org/WAI/WCAG21/quickref/
    type: External Link
  - title: Button Component
    url: /components/button
    type: Component
  - title: Color Tokens
    url: /design-tokens/colors
    type: Design Token
  - title: WAVE Web Accessibility Evaluator
    url: https://wave.webaim.org/
    type: Tool
---

## Accessibility Standards

Our design system follows WCAG 2.1 AA guidelines to ensure all users can effectively interact with our interfaces, regardless of their abilities or the technologies they use.

### Color and Contrast

All color combinations in our design system meet or exceed WCAG contrast requirements:

- **Normal text**: 4.5:1 minimum contrast ratio
- **Large text** (18px+ or 14px+ bold): 3:1 minimum contrast ratio
- **Interactive elements**: 3:1 minimum contrast ratio against adjacent colors

### Keyboard Navigation

Every interactive element must be accessible via keyboard:

- Tab order follows logical reading flow
- Focus indicators are clearly visible
- All functionality available via mouse is also available via keyboard
- No keyboard traps that prevent users from navigating away

### Screen Reader Support

Content must be properly structured for screen readers:

- Use semantic HTML elements
- Provide descriptive headings in hierarchical order
- Include ARIA labels where semantic HTML isn't sufficient
- Ensure all interactive elements have accessible names

### Testing Checklist

Before releasing any interface:

- [ ] Test keyboard navigation through all interactive elements
- [ ] Verify color contrast meets WCAG standards
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Validate HTML markup
- [ ] Check focus management for dynamic content
- [ ] Ensure error messages are announced to assistive technology

### Common Patterns

**Form Labels**: Always associate labels with form inputs

```html
<label for="email">Email Address</label>
<input type="email" id="email" required />
```

**Button Text**: Use descriptive text that explains the action

```html
<!-- Good -->
<button>Save changes to profile</button>

<!-- Avoid -->
<button>Click here</button>
```

**Image Alt Text**: Describe the content and function of images

```html
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2" />
```
