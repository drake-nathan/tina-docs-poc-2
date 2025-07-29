import type { Collection } from "tinacms";

export const GuidelineCollection: Collection = {
  name: "guideline",
  label: "Guidelines",
  path: "content/guidelines",
  format: "md",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Guideline Title",
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
        "Design Principles",
        "Accessibility",
        "Content Guidelines",
        "Visual Guidelines",
        "Interaction Patterns",
        "Brand Guidelines",
        "Code Standards",
      ],
      required: true,
    },
    {
      type: "string",
      name: "priority",
      label: "Priority",
      options: ["High", "Medium", "Low"],
    },
    {
      type: "rich-text",
      name: "content",
      label: "Content",
      isBody: true,
    },
    {
      type: "object",
      name: "principles",
      label: "Key Principles",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Principle Title",
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
          name: "example",
          label: "Example",
          ui: {
            component: "textarea",
          },
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || "New Principle",
        }),
      },
    },
    {
      type: "object",
      name: "dosDonts",
      label: "Do's and Don'ts",
      fields: [
        {
          type: "object",
          name: "dos",
          label: "Do's",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "Do",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
        {
          type: "object",
          name: "donts",
          label: "Don'ts",
          list: true,
          fields: [
            {
              type: "string",
              name: "text",
              label: "Don't",
              ui: {
                component: "textarea",
              },
            },
          ],
        },
      ],
    },
    {
      type: "object",
      name: "resources",
      label: "Related Resources",
      list: true,
      fields: [
        {
          type: "string",
          name: "title",
          label: "Resource Title",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
        {
          type: "string",
          name: "type",
          label: "Type",
          options: ["Component", "Design Token", "External Link", "Tool"],
        },
      ],
      ui: {
        itemProps: (item) => ({
          label: item?.title || "New Resource",
        }),
      },
    },
  ],
  ui: {
    router: ({ document }) => `/guidelines/${document._sys.filename}`,
  },
};