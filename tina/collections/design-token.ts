import type { Collection } from "tinacms";

export const DesignTokenCollection: Collection = {
  fields: [
    {
      isTitle: true,
      label: "Token Category",
      name: "title",
      required: true,
      type: "string",
    },
    {
      label: "Description",
      name: "description",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      label: "Category",
      name: "category",
      options: [
        "Colors",
        "Typography",
        "Spacing",
        "Borders",
        "Shadows",
        "Breakpoints",
        "Animation",
        "Z-Index",
      ],
      required: true,
      type: "string",
    },
    {
      fields: [
        {
          label: "Token Name",
          name: "name",
          required: true,
          type: "string",
        },
        {
          label: "Value",
          name: "value",
          required: true,
          type: "string",
        },
        {
          description: "e.g., --color-primary-500",
          label: "CSS Variable",
          name: "cssVariable",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
        {
          label: "Usage Notes",
          name: "usage",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          description: "Corresponding token name in Figma",
          label: "Figma Token Name",
          name: "figmaToken",
          type: "string",
        },
      ],
      label: "Tokens",
      list: true,
      name: "tokens",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item.name || "New Token",
        }),
      },
    },
    {
      label: "Usage Examples",
      name: "examples",
      type: "rich-text",
    },
    {
      fields: [
        {
          label: "Category Name",
          name: "category",
          type: "string",
        },
        {
          description: "How this relates to the other category",
          label: "Relationship",
          name: "relationship",
          type: "string",
        },
      ],
      label: "Related Token Categories",
      list: true,
      name: "relatedTokens",
      type: "object",
    },
  ],
  format: "md",
  label: "Design Tokens",
  name: "designToken",
  path: "content/design-tokens",
  ui: {
    router: ({ document }) => `/design-tokens/${document._sys.filename}`,
  },
};