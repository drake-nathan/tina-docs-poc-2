---
title: Button
description: >-
  A versatile button component used for user interactions and actions throughout
  the interface.
category: Inputs
status: Stable
props:
  - name: variant
    type: '''primary'' | ''secondary'' | ''outline'' | ''ghost'''
    description: Visual style variant of the button
    required: false
    defaultValue: primary
  - name: size
    type: '''sm'' | ''md'' | ''lg'''
    description: Size of the button
    required: false
    defaultValue: md
  - name: disabled
    type: boolean
    description: Whether the button is disabled
    required: false
    defaultValue: 'false'
  - name: loading
    type: boolean
    description: Shows loading spinner when true
    required: false
    defaultValue: 'false'
  - name: children
    type: ReactNode
    description: Button content
    required: true
    defaultValue: ''
  - name: onClick
    type: '(event: MouseEvent) => void'
    description: Click event handler
    required: false
    defaultValue: ''
usage: ''
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

