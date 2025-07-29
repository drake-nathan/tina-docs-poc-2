import type { Collection } from "tinacms";

export const GuidelineCollection: Collection = {
  fields: [
    {
      isTitle: true,
      label: "Guideline Title",
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
        "Design Principles",
        "Accessibility",
        "Content Guidelines",
        "Visual Guidelines",
        "Interaction Patterns",
        "Brand Guidelines",
        "Code Standards",
      ],
      required: true,
      type: "string",
    },
    {
      label: "Priority",
      name: "priority",
      options: ["High", "Medium", "Low"],
      type: "string",
    },
    {
      isBody: true,
      label: "Content",
      name: "content",
      type: "rich-text",
    },
    {
      fields: [
        {
          label: "Principle Title",
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
          label: "Example",
          name: "example",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
      label: "Key Principles",
      list: true,
      name: "principles",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item.title || "New Principle",
        }),
      },
    },
    {
      fields: [
        {
          fields: [
            {
              label: "Do",
              name: "text",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
          label: "Do's",
          list: true,
          name: "dos",
          type: "object",
        },
        {
          fields: [
            {
              label: "Don't",
              name: "text",
              type: "string",
              ui: {
                component: "textarea",
              },
            },
          ],
          label: "Don'ts",
          list: true,
          name: "donts",
          type: "object",
        },
      ],
      label: "Do's and Don'ts",
      name: "dosDonts",
      type: "object",
    },
    {
      fields: [
        {
          label: "Resource Title",
          name: "title",
          type: "string",
        },
        {
          label: "URL",
          name: "url",
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          options: ["Component", "Design Token", "External Link", "Tool"],
          type: "string",
        },
      ],
      label: "Related Resources",
      list: true,
      name: "resources",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item.title || "New Resource",
        }),
      },
    },
  ],
  format: "md",
  label: "Guidelines",
  name: "guideline",
  path: "content/guidelines",
  ui: {
    router: ({ document }) => `/guidelines/${document._sys.filename}`,
  },
};