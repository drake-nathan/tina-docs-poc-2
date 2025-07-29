import type { Collection } from "tinacms";

export const DesignTokenCollection: Collection = {
  name: "designToken",
  label: "Design Tokens",
  path: "content/design-tokens",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Token Category",
      isTitle: true,
      required: true,
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea",
      },
    },
    {
      type: "string",
      name: "category",
      label: "Category",
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
    },
    {
      type: "object",
      name: "tokens",
      label: "Tokens",
      list: true,
      fields: [
        {
          type: "string",
          name: "name",
          label: "Token Name",
          required: true,
        },
        {
          type: "string",
          name: "value",
          label: "Value",
          required: true,
        },
        {
          type: "string",
          name: "cssVariable",
          label: "CSS Variable",
          description: "e.g., --color-primary-500",
        },
        {
          type: "string",
          name: "description",
          label: "Description",
        },
        {
          type: "string",
          name: "usage",
          label: "Usage Notes",
          ui: {
            component: "textarea",
          },
        },
        {
          type: "string",
          name: "figmaToken",
          label: "Figma Token Name",
          description: "Corresponding token name in Figma",
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.name || "New Token",
        }),
      },
    },
    {
      type: "rich-text",
      name: "examples",
      label: "Usage Examples",
    },
    {
      type: "object",
      name: "relatedTokens",
      label: "Related Token Categories",
      list: true,
      fields: [
        {
          type: "string",
          name: "category",
          label: "Category Name",
        },
        {
          type: "string",
          name: "relationship",
          label: "Relationship",
          description: "How this relates to the other category",
        },
      ],
    },
  ],
  ui: {
    router: ({ document }) => `/design-tokens/${document._sys.filename}`,
  },
};