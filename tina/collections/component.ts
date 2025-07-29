import type { Collection } from "tinacms";

export const ComponentCollection: Collection = {
  fields: [
    {
      isTitle: true,
      label: "Component Name",
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
        "Layout",
        "Navigation",
        "Data Display",
        "Inputs",
        "Feedback",
        "Overlay",
        "Other",
      ],
      type: "string",
    },
    {
      label: "Status",
      name: "status",
      options: ["Stable", "Beta", "Deprecated", "In Development"],
      type: "string",
    },
    {
      fields: [
        {
          label: "Prop Name",
          name: "name",
          required: true,
          type: "string",
        },
        {
          label: "Type",
          name: "type",
          required: true,
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
        {
          label: "Required",
          name: "required",
          type: "boolean",
        },
        {
          label: "Default Value",
          name: "defaultValue",
          type: "string",
        },
      ],
      label: "Props",
      list: true,
      name: "props",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item.name || "New Prop",
        }),
      },
    },
    {
      label: "Usage Examples",
      name: "usage",
      type: "rich-text",
    },
    {
      label: "Code Example",
      name: "codeExample",
      type: "string",
      ui: {
        component: "textarea",
      },
    },
    {
      fields: [
        {
          label: "Variant Name",
          name: "name",
          type: "string",
        },
        {
          label: "Description",
          name: "description",
          type: "string",
        },
        {
          label: "Code Example",
          name: "code",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
      label: "Variants",
      list: true,
      name: "variants",
      type: "object",
      ui: {
        itemProps: (item) => ({
          label: item.name || "New Variant",
        }),
      },
    },
  ],
  format: "md",
  label: "Components",
  name: "component",
  path: "content/components",
  ui: {
    router: ({ document }) => `/components/${document._sys.filename}`,
  },
};
