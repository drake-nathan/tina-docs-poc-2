---
title: Button
description: A versatile button component used for user interactions and actions throughout the interface.
category: Inputs
status: Stable
props:
  - name: variant
    type: "'primary' | 'secondary' | 'outline' | 'ghost'"
    description: Visual style variant of the button
    required: false
    defaultValue: primary
  - name: size
    type: "'sm' | 'md' | 'lg'"
    description: Size of the button
    required: false
    defaultValue: md
  - name: disabled
    type: boolean
    description: Whether the button is disabled
    required: false
    defaultValue: false
  - name: loading
    type: boolean
    description: Shows loading spinner when true
    required: false
    defaultValue: false
  - name: children
    type: ReactNode
    description: Button content
    required: true
    defaultValue: ""
  - name: onClick
    type: "(event: MouseEvent) => void"
    description: Click event handler
    required: false
    defaultValue: ""
codeExample: |
  import { Button } from '@/components/Button'

  export function Example() {
    return (
      <div className="space-x-4">
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
      </div>
    )
  }
variants:
  - name: Primary
    description: The main call-to-action button with high emphasis
    code: |
      <Button variant="primary">
        Save Changes
      </Button>
  - name: Secondary
    description: Secondary actions with medium emphasis
    code: |
      <Button variant="secondary">
        Cancel
      </Button>
  - name: Outline
    description: Low emphasis actions with border styling
    code: |
      <Button variant="outline">
        Learn More
      </Button>
  - name: Loading State
    description: Button with loading spinner
    code: |
      <Button loading={true}>
        Saving...
      </Button>
---

## Usage

The Button component is the primary interactive element for triggering actions in the user interface. It supports multiple visual styles, sizes, and states to accommodate different use cases and hierarchy levels.

### Best Practices

- Use primary buttons for the main action on a page
- Limit primary buttons to one per section to maintain clear hierarchy
- Use secondary buttons for supporting actions
- Always provide clear, action-oriented labels
- Consider loading states for async operations

### Accessibility

- Buttons are keyboard accessible by default
- Screen readers will announce the button text
- Disabled buttons are properly marked for assistive technology
- Loading states include appropriate ARIA labels
