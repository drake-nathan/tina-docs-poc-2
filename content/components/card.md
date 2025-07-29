---
title: Card
description: A flexible container component used to group related content and actions in a clean, organized layout.
category: Layout
status: Stable
props:
  - name: variant
    type: "'default' | 'outlined' | 'elevated'"
    description: Visual style of the card
    required: false
    defaultValue: default
  - name: padding
    type: "'none' | 'sm' | 'md' | 'lg'"
    description: Internal padding of the card
    required: false
    defaultValue: md
  - name: className
    type: string
    description: Additional CSS classes
    required: false
    defaultValue: ''
  - name: children
    type: ReactNode
    description: Card content
    required: true
    defaultValue: ''
codeExample: |
  import { Card } from '@/components/Card'
  
  export function Example() {
    return (
      <Card variant="elevated" padding="lg">
        <h3>Card Title</h3>
        <p>Card content goes here...</p>
      </Card>
    )
  }
variants:
  - name: Default
    description: Basic card with subtle background
    code: |
      <Card>
        <h3>Default Card</h3>
        <p>Simple card styling</p>
      </Card>
  - name: Outlined
    description: Card with border and no background
    code: |
      <Card variant="outlined">
        <h3>Outlined Card</h3>
        <p>Border-only styling</p>
      </Card>
  - name: Elevated
    description: Card with shadow for emphasis
    code: |
      <Card variant="elevated">
        <h3>Elevated Card</h3>
        <p>Shadow creates depth</p>
      </Card>
---

## Usage

Cards are versatile containers that help organize content into digestible sections. They work well for displaying related information, actions, or interactive elements as a cohesive unit.

### When to Use

- Grouping related content and actions
- Creating scannable layouts with multiple items
- Displaying summary information
- Building dashboard interfaces

### Layout Guidelines

- Maintain consistent spacing between cards
- Use appropriate padding based on content density
- Consider card width in responsive layouts
- Group related cards together